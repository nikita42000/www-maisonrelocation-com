import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  moveDate: z.string().trim().max(40).optional().or(z.literal("")),
  origin: z.string().trim().max(300).optional().or(z.literal("")),
  destination: z.string().trim().max(300).optional().or(z.literal("")),
  message: z.string().trim().max(5000).optional().or(z.literal("")),
  source: z.enum(["quote_form", "contact_form"]).default("quote_form"),
});

export type LeadInput = z.infer<typeof LeadSchema>;

const HUBSPOT_GATEWAY = "https://connector-gateway.lovable.dev/hubspot";
const TICKET_PIPELINE_ID = "0"; // Family Support Tickets
const TICKET_STAGE_ID = "3857373944"; // New Request
// HubSpot default association type id for ticket -> contact
const TICKET_TO_CONTACT_ASSOC_TYPE = 16;

async function pushToHubSpot(data: LeadInput): Promise<void> {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const hubspotKey = process.env.HUBSPOT_API_KEY;
  if (!lovableKey || !hubspotKey) {
    throw new Error("HubSpot credentials are not configured");
  }

  const headers = {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": hubspotKey,
    "Content-Type": "application/json",
  };

  const [firstName, ...rest] = data.name.trim().split(/\s+/);
  const lastName = rest.join(" ");

  // 1. Create or update contact (upsert by email)
  const contactProps: Record<string, string> = {
    email: data.email,
    firstname: firstName || data.name,
  };
  if (lastName) contactProps.lastname = lastName;
  if (data.phone) contactProps.phone = data.phone;

  let contactId: string | null = null;

  const createRes = await fetch(`${HUBSPOT_GATEWAY}/crm/v3/objects/contacts`, {
    method: "POST",
    headers,
    body: JSON.stringify({ properties: contactProps }),
  });

  if (createRes.ok) {
    const body = await createRes.json();
    contactId = body.id;
  } else if (createRes.status === 409) {
    // Contact exists — search by email
    const searchRes = await fetch(
      `${HUBSPOT_GATEWAY}/crm/v3/objects/contacts/search`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                { propertyName: "email", operator: "EQ", value: data.email },
              ],
            },
          ],
          properties: ["email"],
          limit: 1,
        }),
      },
    );
    if (!searchRes.ok) {
      throw new Error(`HubSpot contact search failed: ${searchRes.status}`);
    }
    const searchBody = await searchRes.json();
    contactId = searchBody.results?.[0]?.id ?? null;
  } else {
    const errText = await createRes.text();
    throw new Error(`HubSpot contact create failed: ${createRes.status} ${errText}`);
  }

  if (!contactId) {
    throw new Error("HubSpot contact id missing");
  }

  // 2. Create ticket
  const origin = data.origin || "Unknown origin";
  const destination = data.destination || "Unknown destination";
  const subject = `${data.name} — ${origin} → ${destination}`;
  const descriptionLines = [
    data.message ? data.message : "(No message provided)",
    "",
    `Move date: ${data.moveDate || "Not specified"}`,
    `Origin: ${origin}`,
    `Destination: ${destination}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
  ].filter(Boolean);

  const ticketRes = await fetch(`${HUBSPOT_GATEWAY}/crm/v3/objects/tickets`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      properties: {
        subject,
        content: descriptionLines.join("\n"),
        hs_pipeline: TICKET_PIPELINE_ID,
        hs_pipeline_stage: TICKET_STAGE_ID,
      },
    }),
  });

  if (!ticketRes.ok) {
    const errText = await ticketRes.text();
    throw new Error(`HubSpot ticket create failed: ${ticketRes.status} ${errText}`);
  }

  const ticketBody = await ticketRes.json();
  const ticketId = ticketBody.id as string;

  // 3. Associate ticket -> contact
  const assocRes = await fetch(
    `${HUBSPOT_GATEWAY}/crm/v4/objects/tickets/${ticketId}/associations/default/contacts/${contactId}`,
    { method: "PUT", headers },
  );
  if (!assocRes.ok) {
    // Fallback to v3 typed association
    const assocV3 = await fetch(
      `${HUBSPOT_GATEWAY}/crm/v3/objects/tickets/${ticketId}/associations/contacts/${contactId}/${TICKET_TO_CONTACT_ASSOC_TYPE}`,
      { method: "PUT", headers },
    );
    if (!assocV3.ok) {
      const errText = await assocV3.text();
      throw new Error(`HubSpot association failed: ${assocV3.status} ${errText}`);
    }
  }
}

async function saveLeadFallback(data: LeadInput): Promise<void> {
  const { supabaseAdmin } = await import(
    "@/integrations/supabase/client.server"
  );
  const moveDate = data.moveDate && data.moveDate.length > 0 ? data.moveDate : null;
  const { error } = await supabaseAdmin.from("leads").insert({
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    move_date: moveDate,
    origin: data.origin || null,
    destination: data.destination || null,
    message: data.message || null,
    source: data.source,
  });
  if (error) {
    console.error("[leads] fallback insert failed", error);
  }
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    try {
      await pushToHubSpot(data);
    } catch (err) {
      console.error("[leads] HubSpot push failed, falling back to Supabase", err);
      await saveLeadFallback(data);
    }
    return { ok: true as const };
  });
