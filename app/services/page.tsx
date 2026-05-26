import Link from "next/link";
import { InstagramIcon } from "@/components/site/icons";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Services",
  description:
    "Lash extensions, fills, brow lamination, tint, wax, and clean-up by Adora in Dallas, Texas.",
};

type Service = {
  name: string;
  price: string;
  meta?: string;
  description: string;
  featured?: boolean;
  outOfStock?: boolean;
};

const LASHES: Service[] = [
  {
    name: "Lash Extensions",
    price: "$50",
    meta: "Full set · Limited-time price through end of 2026",
    description:
      "Semi-permanent lashes hand-applied one by one to your natural lashes, custom-built for your eye shape and the look you want — from soft natural to dramatic and fluttery. Lifted from the moment you wake up. Lasts 4–6 weeks with proper care and biweekly fills.",
    featured: true,
  },
  {
    name: "Lash Fill",
    price: "$35",
    meta: "Every 2 weeks",
    description:
      "Maintenance for clients with an existing set. Worn lashes are gently removed and fresh ones placed so the set stays full, lifted, and even. Booked every two weeks for best retention.",
  },
];

const BROWS: Service[] = [
  {
    name: "Brow Lamination",
    price: "$60",
    meta: "On its own",
    description:
      "A semi-permanent treatment that lifts and reshapes brow hairs upward into a fuller, brushed-up shape. Ideal for unruly, asymmetrical, or sparse brows. Lasts 6–8 weeks.",
    outOfStock: true,
  },
  {
    name: "Brow Tint",
    price: "$60",
    meta: "On its own",
    description:
      "A gentle dye applied to the brow hairs to add depth, balance gaps, and create a fuller, more defined frame for your face. Color fades softly over 3–6 weeks.",
    outOfStock: true,
  },
  {
    name: "Brow Lamination + Tint",
    price: "$100",
    meta: "Bundle · Save $20",
    description:
      "The full transformation — lift, set, and color in one appointment. The most-requested brow upgrade: fuller shape, richer color, all in one sitting.",
    outOfStock: true,
  },
  {
    name: "Eyebrow Wax",
    price: "$10",
    description:
      "A precise wax to remove unwanted hair around the brows and define a clean, polished shape tailored to your face. Quick, clean, and finished in minutes.",
  },
  {
    name: "Brow Clean Up",
    price: "$10",
    description:
      "A tidy between full waxes — stray hairs trimmed and shaped to keep your brow line crisp.",
  },
];

function ServiceItem({ service }: { service: Service }) {
  return (
    <li
      className={`relative rounded-md px-6 py-7 sm:px-8 sm:py-8 ${
        service.featured
          ? "border border-accent/50 bg-card/60 shadow-[0_0_60px_-30px_oklch(0.62_0.24_300/0.45)]"
          : "border border-border/40 bg-card/30"
      }`}
    >
      {service.featured && (
        <span className="absolute -top-2 left-6 rounded-full bg-accent px-3 py-0.5 text-[9px] uppercase tracking-[0.3em] text-accent-foreground">
          Featured
        </span>
      )}
      {service.outOfStock && (
        <span className="absolute right-4 top-4 rounded-full border border-border/50 bg-background/70 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.3em] text-muted-foreground/80 backdrop-blur-sm">
          Currently unavailable
        </span>
      )}

      <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-[family-name:var(--font-editorial)] text-2xl tracking-wide text-foreground sm:text-3xl">
          {service.name}
        </h3>
        <span className="font-[family-name:var(--font-editorial)] text-2xl text-accent sm:text-3xl">
          {service.price}
        </span>
      </div>

      {service.meta && (
        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80">
          {service.meta}
        </p>
      )}

      <p
        className={`mt-4 text-sm leading-relaxed sm:text-base ${
          service.outOfStock
            ? "text-muted-foreground/60"
            : "text-muted-foreground"
        }`}
      >
        {service.description}
      </p>
    </li>
  );
}

function CategoryTitle({ word }: { word: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        aria-hidden
        className="h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
      <h2 className="mt-5 text-center font-[family-name:var(--font-editorial)] text-4xl font-light tracking-[0.15em] text-foreground sm:text-5xl">
        {word}
      </h2>
      <div
        aria-hidden
        className="mt-5 h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent">
            The Menu
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.12em] text-foreground sm:text-6xl">
            SERVICES
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Lashes and brows, crafted with intention. Every service is
            customized to your features and the look you want &mdash; soft,
            luxurious, elevated.
          </p>
        </section>

        {/* Lashes */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <CategoryTitle word="LASHES" />
          <ul className="mt-12 space-y-5">
            {LASHES.map((s) => (
              <ServiceItem key={s.name} service={s} />
            ))}
          </ul>
        </section>

        {/* Brows */}
        <section className="mx-auto max-w-3xl px-6 py-16">
          <CategoryTitle word="BROWS" />
          <ul className="mt-12 space-y-5">
            {BROWS.map((s) => (
              <ServiceItem key={s.name} service={s} />
            ))}
          </ul>
        </section>

        {/* Availability note */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <div className="rounded-md border border-border/40 bg-card/30 px-6 py-7 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
              A note on availability
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Brow Lamination and Brow Tint are temporarily unavailable while
              product is restocked. Everything else is bookable now. See the
              New Clients page for the full deposit and booking briefing.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-5xl text-foreground sm:text-6xl">
            Ready to book?
          </h2>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 shadow-[0_0_40px_-12px_oklch(0.74_0.22_300/0.7)]"
            >
              <a
                href={BRAND.booking.dmUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <InstagramIcon className="size-4" />
                Book via Instagram
              </a>
            </Button>
            <Link
              href="/"
              className="mt-4 text-sm text-muted-foreground hover:text-foreground"
            >
              &larr; Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
