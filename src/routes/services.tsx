import { createFileRoute, Link } from "@tanstack/react-router";
import packingImg from "@/assets/service-packing.jpg";
import setupImg from "@/assets/service-setup.jpg";
import storageImg from "@/assets/service-storage.jpg";
import specialtyImg from "@/assets/service-specialty.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Maison Relocation Concierge" },
      {
        name: "description",
        content:
          "Packing, home setup, storage, and specialty relocation services delivered with white-glove precision.",
      },
      { property: "og:title", content: "Services — Maison Relocation Concierge" },
      {
        property: "og:description",
        content:
          "Discover the full suite of Maison relocation services — from museum-grade packing to white-glove home setup.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Packing Services",
    img: packingImg,
    body: "Every object in your residence is inventoried, photographed, and packed using museum-grade materials. From fine china to couture wardrobes, our trained packers treat each item with the care it deserves.",
    points: [
      "Bespoke crating for fragile and high-value items",
      "Designated wardrobe and shoe specialists",
      "Digital inventory with photographic record",
      "Eco-conscious materials, fully removed post-move",
    ],
  },
  {
    n: "02",
    title: "Home Setup",
    img: setupImg,
    body: "Walk into a residence that is fully appointed — beds made, kitchen stocked, art hung, closets organized. We coordinate with designers, florists, and household staff so that life resumes the moment you arrive.",
    points: [
      "Full unpacking and styling",
      "Coordination with interior designers",
      "Pantry stocking and fresh florals",
      "Closet and wardrobe organisation",
    ],
  },
  {
    n: "03",
    title: "Storage Solutions",
    img: storageImg,
    body: "Climate-controlled, fully insured, and privately accessed storage in our flagship facilities. Whether short-term during renovation or long-term across continents, your possessions remain immaculate.",
    points: [
      "Climate and humidity control",
      "24/7 monitored, biometric access",
      "Same-day retrieval and delivery",
      "Full insurance, complete inventory",
    ],
  },
  {
    n: "04",
    title: "Specialty Relocation",
    img: specialtyImg,
    body: "Fine art, instruments, wine collections, and automobiles — moved by specialists. We engage conservators, climate-controlled transport, and bonded couriers to ensure your most treasured items travel safely.",
    points: [
      "Fine art and antiquities handling",
      "Wine collection transport with provenance",
      "Concert-grade instrument relocation",
      "Enclosed automobile transport, international",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="py-24 md:py-40">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[0.95] max-w-4xl">
              A complete relocation, <em className="italic font-normal">end to end.</em>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-foreground/80">
              Each engagement is bespoke. Below is an overview of the disciplines we
              bring to every move — combined, refined, and orchestrated by a single
              dedicated concierge.
            </p>
          </Reveal>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.title} className={i % 2 === 1 ? "bg-secondary" : ""}>
          <div className="container-luxe py-24 md:py-32">
            <div className={`grid md:grid-cols-12 gap-12 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}>
              <Reveal className="md:col-span-7">
                <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-background">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={150} className="md:col-span-5">
                <p className="font-serif text-4xl text-foreground/30">{s.n}</p>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">
                  {s.title}
                </h2>
                <p className="mt-8 text-base leading-relaxed text-foreground/80">
                  {s.body}
                </p>
                <ul className="mt-10 space-y-4">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-4 border-t border-border pt-4 text-sm"
                    >
                      <span className="eyebrow !text-[10px] pt-1">&mdash;</span>
                      <span className="text-foreground/85">{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="py-32 md:py-44">
        <div className="container-luxe text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="eyebrow">Begin</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
              Discuss your relocation in confidence.
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-center gap-3 bg-foreground text-background px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-foreground/85 transition-colors"
            >
              Request a Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
