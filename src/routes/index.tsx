import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Clock, Lock } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import packingImg from "@/assets/service-packing.jpg";
import setupImg from "@/assets/service-setup.jpg";
import storageImg from "@/assets/service-storage.jpg";
import specialtyImg from "@/assets/service-specialty.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison — Luxury Relocation Concierge" },
      {
        name: "description",
        content:
          "Your seamless relocation starts here. White-glove packing, home setup, storage, and specialty moves for discerning clients worldwide.",
      },
      { property: "og:title", content: "Maison — Luxury Relocation Concierge" },
      {
        property: "og:description",
        content:
          "White-glove relocation services with absolute discretion. Consultation, planning, execution, and home setup.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Packing Services",
    img: packingImg,
    body: "Museum-grade materials and trained hands. Every heirloom, garment, and glass treated with the care it deserves.",
  },
  {
    title: "Home Setup",
    img: setupImg,
    body: "Walk into a fully appointed residence. Beds made, kitchen stocked, art hung — your life, ready to resume.",
  },
  {
    title: "Storage Solutions",
    img: storageImg,
    body: "Climate-controlled, fully insured, privately accessed. Short-term or indefinite, with same-day retrieval.",
  },
  {
    title: "Specialty Relocation",
    img: specialtyImg,
    body: "Fine art, instruments, wine collections, and automobiles — handled by specialists from origin to destination.",
  },
];

const reasons = [
  { icon: Clock, title: "15+ Years Experience", body: "A team built on two decades of luxury relocations across six continents." },
  { icon: Sparkles, title: "Concierge-Level Service", body: "One dedicated lead, one phone number, one immaculate experience." },
  { icon: ShieldCheck, title: "End-to-End Management", body: "From the first consultation to the final unpacked box — we own every detail." },
  { icon: Lock, title: "Privacy & Discretion", body: "NDAs as standard. Vetted, uniformed teams. Your move stays yours." },
];

const steps = [
  { n: "01", title: "Consultation", body: "A private conversation to understand your residence, timeline, and standards." },
  { n: "02", title: "Planning", body: "A bespoke relocation plan, vendor coordination, and a single point of contact." },
  { n: "03", title: "Relocation Management", body: "We execute the move while you stay focused on what matters." },
  { n: "04", title: "Home Setup", body: "Your new residence prepared, styled, and welcoming on arrival day." },
];

const testimonials = [
  {
    img: t1,
    quote:
      "Maison transformed what should have been the most stressful month of our lives into something almost effortless. Every detail was anticipated.",
    name: "Eleanor Whitfield",
    role: "Private Client · New York → London",
  },
  {
    img: t2,
    quote:
      "Their discretion is unmatched. The team felt like an extension of our household — present when needed, invisible when not.",
    name: "Robert Hawthorne",
    role: "Family Office · Aspen → Palm Beach",
  },
  {
    img: t3,
    quote:
      "I arrived to a home that already felt like mine. Flowers in the foyer, my wardrobe organized, the kettle on. Extraordinary.",
    name: "Camille Beaumont",
    role: "Designer · Paris → Los Angeles",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 h-screen min-h-[680px] w-full overflow-hidden">
        <div className="absolute inset-0 kenburns">
          <img
            src={heroImg}
            alt="A sunlit luxury residence prepared for arrival"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/70" />

        <div className="relative h-full container-luxe flex flex-col justify-end pb-24 md:pb-32">
          <div className="max-w-3xl">
            <p className="eyebrow fade-in" style={{ animationDelay: "200ms" }}>
              Private Relocation Concierge
            </p>
            <h1
              className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] fade-up"
              style={{ animationDelay: "350ms" }}
            >
              Your seamless
              <br />
              relocation <em className="italic font-normal">starts here.</em>
            </h1>
            <p
              className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed fade-up"
              style={{ animationDelay: "550ms" }}
            >
              A white-glove relocation experience for discerning individuals and
              families. From the first conversation to the final unpacked box — we
              manage every detail with absolute discretion.
            </p>
            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 fade-up"
              style={{ animationDelay: "750ms" }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-foreground/85 transition-colors"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 border border-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-32 md:py-44">
        <div className="container-luxe grid md:grid-cols-12 gap-12 items-end">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
              The art of moving, refined.
            </h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-foreground/80">
              A relocation is not logistics. It is the careful translation of a life
              from one place to another — its rituals, its objects, its rhythm.
              Maison exists to make that translation invisible to you, and
              impeccable in every detail.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl max-w-2xl leading-[1.05]">
              Every facet of your move, considered.
            </h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-2 gap-x-12 gap-y-24">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <article className="group">
                  <div className="aspect-[4/5] overflow-hidden bg-background">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      width={1200}
                      height={1500}
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-8 flex items-start justify-between gap-6">
                    <div>
                      <p className="eyebrow !text-[10px]">0{i + 1}</p>
                      <h3 className="mt-3 font-serif text-3xl">{s.title}</h3>
                      <p className="mt-4 max-w-md text-base text-muted-foreground leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase link-underline"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 md:py-44">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow">Why Maison</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl max-w-3xl leading-[1.05]">
              An experience defined by what you don&rsquo;t have to think about.
            </h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="border-t border-border pt-8">
                  <r.icon className="h-6 w-6" strokeWidth={1.2} />
                  <h3 className="mt-8 font-serif text-2xl">{r.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 md:py-44 bg-foreground text-background">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow !text-background/60">The Process</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl max-w-2xl leading-[1.05] text-background">
              Four steps, executed flawlessly.
            </h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div>
                  <p className="font-serif text-5xl text-background/40">{s.n}</p>
                  <div className="mt-6 h-px bg-background/20" />
                  <h3 className="mt-6 font-serif text-2xl text-background">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-background/70">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 md:py-44">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow">In Their Words</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl max-w-2xl leading-[1.05]">
              Trusted by those who notice every detail.
            </h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <figure className="border border-border p-10 h-full flex flex-col">
                  <svg
                    className="h-6 w-6 text-foreground/40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M7 7h4v4H7a4 4 0 0 0 4 4v2a6 6 0 0 1-6-6V9a2 2 0 0 1 2-2zm10 0h4v4h-4a4 4 0 0 0 4 4v2a6 6 0 0 1-6-6V9a2 2 0 0 1 2-2z" />
                  </svg>
                  <blockquote className="mt-6 font-serif text-xl leading-snug text-foreground/90 flex-1">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-4 pt-6 border-t border-border">
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      width={600}
                      height={600}
                      className="h-12 w-12 rounded-full object-cover grayscale"
                    />
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="py-32 md:py-44 bg-secondary">
        <div className="container-luxe grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Request a Quote</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">
              Begin with a private consultation.
            </h2>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed max-w-md">
              Share a few details about your relocation and a senior concierge will
              reach out within one business day with a tailored proposal.
            </p>
            <div className="mt-10 space-y-2 text-sm">
              <p className="text-muted-foreground">concierge@maisonrelocation.com</p>
              <p className="text-muted-foreground">+1 (212) 555&ndash;0188</p>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-7">
            <div className="bg-background p-10 md:p-14 border border-border">
              <QuoteForm source="quote_form" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
