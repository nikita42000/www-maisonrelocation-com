import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container-luxe py-20 grid gap-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl tracking-tight">Maison</span>
            <span className="eyebrow !text-xs !tracking-[0.4em] text-foreground/60">
              Relocation
            </span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            A private relocation concierge for discerning individuals and families.
            White-glove service from consultation to the day you turn the key.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5">Explore</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="link-underline">Home</Link></li>
            <li><Link to="/about" className="link-underline">About</Link></li>
            <li><Link to="/services" className="link-underline">Services</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Legal</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/privacy" className="link-underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="link-underline">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Contact</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>concierge@maisonrelocation.com</li>
            <li>+1 (212) 555&ndash;0188</li>
            <li>By appointment &middot; Worldwide</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-luxe py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-wide text-muted-foreground">
            &copy; {new Date().getFullYear()} Maison Relocation Concierge. All rights reserved.
          </p>
          <p className="eyebrow !text-[10px]">Privacy &middot; Discretion &middot; Excellence</p>
        </div>
      </div>
    </footer>
  );
}
