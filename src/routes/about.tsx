import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maison Relocation Concierge" },
      {
        name: "description",
        content:
          "Two decades of private relocations, built on discretion, craft, and an unwavering standard of care.",
      },
      { property: "og:title", content: "About — Maison Relocation Concierge" },
      {
        property: "og:description",
        content:
          "Meet the team behind Maison — a private relocation concierge serving discerning clients worldwide.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const numbers = [
  { n: "15+", label: "Years of luxury relocations" },
  { n: "2,400", label: "Residences delivered" },
  { n: "42", label: "Countries served" },
  { n: "100%", label: "Confidentiality, always" },
];

function AboutPage() {
  return (
    <>
      <section className="py-24 md:py-40">
        <div className="container-luxe grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7">
            <p className="eyebrow">About Maison</p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[0.95]">
              A quiet standard
              <br />
              of <em className="italic font-normal">excellence.</em>
            </h1>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5 md:pt-32">
            <p className="text-lg leading-relaxed text-foreground/80">
              Maison was founded on a single premise: that a household move,
              executed properly, should feel less like a transaction and more
              like a tailored garment. We have spent two decades refining that
              craft.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-luxe">
        <Reveal>
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={aboutImg}
              alt="Maison team arriving at a private residence"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="py-32 md:py-44">
        <div className="container-luxe grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
              Built around one client at a time.
            </h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-6 md:col-start-7 space-y-6 text-base leading-relaxed text-foreground/80">
            <p>
              We began in 2009 as a discreet referral service for families
              relocating between New York, London, and the Hamptons. Word travelled.
              Today, Maison operates a global network of vetted specialists who
              answer to a single dedicated concierge — your concierge.
            </p>
            <p>
              We do not advertise. We do not scale for its own sake. We accept a
              limited number of relocations each season so that every household
              receives the attention it deserves.
            </p>
            <p>
              The result is what we believe a luxury relocation should always have
              been: invisible logistics, impeccable result, and a home that feels
              entirely yours the moment you arrive.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow">By the Numbers</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-y-12">
            {numbers.map((n, i) => (
              <Reveal key={n.label} delay={i * 100}>
                <div className="border-t border-border pt-8">
                  <p className="font-serif text-5xl md:text-6xl">{n.n}</p>
                  <p className="mt-4 text-sm tracking-wide text-muted-foreground max-w-[14ch]">
                    {n.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-44">
        <div className="container-luxe text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="eyebrow">Begin</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
              A conversation, in confidence.
            </h2>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed">
              Every Maison engagement begins with a private consultation. There is
              no obligation, no questionnaire — only an honest conversation about
              what would make your move extraordinary.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-center gap-3 bg-foreground text-background px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-foreground/85 transition-colors"
            >
              Schedule Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
