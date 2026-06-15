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

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
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
      console.error("[leads] insert failed", error);
      throw new Error("We couldn't submit your request. Please try again.");
    }

    return { ok: true as const };
  });
