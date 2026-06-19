import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Maison Relocation Concierge" },
      {
        name: "description",
        content:
          "Maison Relocation Concierge terms of service: scope, obligations, confidentiality, payment, and liability.",
      },
      { property: "og:title", content: "Terms of Service — Maison Relocation Concierge" },
      {
        property: "og:description",
        content:
          "Maison Relocation Concierge terms of service: scope, obligations, confidentiality, payment, and liability.",
      },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "Scope of services",
    body: `Maison Relocation Concierge provides concierge relocation coordination
    including home search, school search, document support, moving logistics,
    and settling-in assistance. We are not a law firm, financial adviser,
    or licensed real-estate broker in every jurisdiction. Any legal or
    financial guidance we offer is informational and should be verified
    with qualified local professionals.`,
  },
  {
    title: "Service tiers",
    body: `We offer Essential, Premium, and Elite service tiers. The specific
    inclusions, timelines, and fees for each tier are confirmed in writing
    during your initial consultation and set out in your engagement
    letter. No binding commitment exists until both parties sign that
    letter.`,
  },
  {
    title: "Client obligations",
    body: `You agree to provide accurate and complete information, submit required
    documents in a timely manner, and respond promptly to requests from
    your assigned concierge. Delays caused by missing or inaccurate
    information may affect timelines and may incur additional fees.`,
  },
  {
    title: "Confidentiality",
    body: `All engagements are conducted under strict non-disclosure agreements.
    We will not publicly reference any client, family member, or move
    detail without express written consent. This obligation survives
    termination of the engagement.`,
  },
  {
    title: "Payment terms",
    body: `A deposit is required to begin work. The balance is due upon
    completion of services or according to the invoice schedule set out
    in your engagement letter. Late payments may incur interest at the
    rate specified in the engagement letter or, if none, at the statutory
    rate in the governing jurisdiction.`,
  },
  {
    title: "Limitation of liability",
    body: `Maison Relocation Concierge is not liable for decisions, delays, or
    errors made by government agencies, landlords, carriers, schools, or
    banks. Our liability is limited to the fees paid for the specific
    service giving rise to the claim, except where prohibited by law.`,
  },
  {
    title: "Termination",
    body: `Either party may terminate the engagement in writing with reasonable
    notice. Fees for work already completed and third-party commitments
    already made are non-refundable. Upon termination we will return or
    securely delete your documents in accordance with our Privacy Policy.`,
  },
  {
    title: "Governing law",
    body: `The governing law and dispute-resolution mechanism for your engagement
    will be confirmed in your engagement letter based on the jurisdiction
    of incorporation or primary residence applicable to your move.`,
  },
];

function TermsPage() {
  return (
    <>
      <section className="py-24 md:py-40">
        <div className="container-luxe max-w-4xl">
          <Reveal>
            <p className="eyebrow">Legal</p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[0.95]">
              Terms of Service
            </h1>
            <p className="mt-8 text-base leading-relaxed text-foreground/80">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32 md:pb-44">
        <div className="container-luxe max-w-4xl space-y-24">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="border-t border-border pt-10">
                <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                  {s.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-foreground/80 whitespace-pre-line">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
