import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy" },
      {
        name: "description",
        content:
          "Read the Maison Relocation Privacy Policy. Learn how we collect, use, and protect your personal data during your relocation journey.",
      },
      { property: "og:title", content: "Privacy Policy" },
      {
        property: "og:description",
        content:
          "Read the Maison Relocation Privacy Policy. Learn how we collect, use, and protect your personal data during your relocation journey.",
      },
      { property: "og:url", content: "https://maisonrelocation.com/privacy" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://maisonrelocation.com/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "What we collect",
    body: `We collect only the information necessary to deliver your relocation:
    full name, email address, phone number, origin and destination city,
    move date, household details (size, special requirements), and any
    documents uploaded through the client portal. We do not collect
    sensitive personal data beyond what you voluntarily provide.`,
  },
  {
    title: "How we use your data",
    body: `Your data is used exclusively to deliver concierge relocation services:
    home search and preview itineraries, document support and translation
    coordination, moving logistics and carrier selection, and settling-in
    assistance including school introductions and local registrations.
    We do not use your data for marketing, advertising, or any purpose
    unrelated to your move.`,
  },
  {
    title: "Who we share with",
    body: `We share information only with vetted relocation partners, carriers,
    and legal or banking contacts directly involved in your move. Every
    partner operates under a strict non-disclosure agreement. We never
    sell, rent, or share your data with third parties for marketing or
    advertising purposes.`,
  },
  {
    title: "Retention & deletion",
    body: `We retain your personal data for the duration of your engagement plus
    three years, after which it is securely deleted. You may request
    earlier deletion at any time by contacting us through the website;
    we will confirm completion within 30 days.`,
  },
  {
    title: "Your rights",
    body: `You have the right to access, correct, or request deletion of your
    personal data. You also have the right to object to processing and
    to request data portability where technically feasible. To exercise
    any of these rights, contact us through the site or by email at
    concierge@maisonrelocation.com.`,
  },
  {
    title: "Data security",
    body: `All data is stored in encrypted databases, transmitted exclusively
    over HTTPS, and accessible only to authorized Maison Relocation
    personnel. We maintain strict access controls, regular security
    reviews, and incident-response protocols aligned with industry best
    practices.`,
  },
];

function PrivacyPage() {
  return (
    <>
      <section className="py-24 md:py-40">
        <div className="container-luxe max-w-4xl">
          <Reveal>
            <p className="eyebrow">Legal</p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[0.95]">
              Privacy Policy
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
