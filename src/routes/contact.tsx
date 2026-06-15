import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison Relocation Concierge" },
      {
        name: "description",
        content:
          "Request a private consultation. A senior Maison concierge will respond within one business day.",
      },
      { property: "og:title", content: "Contact — Maison Relocation Concierge" },
      {
        property: "og:description",
        content:
          "Reach Maison Relocation Concierge by phone, email, or private consultation request.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const details = [
  { icon: Mail, label: "Email", value: "concierge@maisonrelocation.com" },
  { icon: Phone, label: "Telephone", value: "+1 (212) 555–0188" },
  { icon: MapPin, label: "Service Area", value: "Worldwide · By appointment" },
];

function ContactPage() {
  return (
    <>
      <section className="py-24 md:py-40">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[0.95] max-w-3xl">
              Begin with a <em className="italic font-normal">private conversation.</em>
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-foreground/80">
              Share a few details about your move and a senior concierge will reach
              out within one business day. Every inquiry is treated in absolute
              confidence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-luxe grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-4">
            <ul className="space-y-12">
              {details.map((d) => (
                <li key={d.label} className="border-t border-border pt-8">
                  <d.icon className="h-5 w-5" strokeWidth={1.2} />
                  <p className="eyebrow mt-6">{d.label}</p>
                  <p className="mt-2 font-serif text-2xl">{d.value}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-8">
            <div className="bg-secondary p-10 md:p-14">
              <QuoteForm source="contact_form" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
