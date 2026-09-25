import Link from "next/link";
import { InstagramIcon } from "@/components/site/icons";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";
import { T, type CopyPair } from "@/components/site/t";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";
import { COMMON, SERVICES_PAGE as SP } from "@/lib/i18n/copy";

export const metadata = {
  title: "Services",
  description:
    "Lash extensions, fills, brow lamination, tint, and clean-up by Dora at Adora Lashes and Brows in Dallas, Texas.",
};

type Service = {
  name: CopyPair;
  price: string;
  meta?: CopyPair;
  description: CopyPair;
  featured?: boolean;
  outOfStock?: boolean;
};

// Wording comes from the copy dictionary; prices stay here as page data.
const LASHES: Service[] = [
  { ...SP.lashExtensions, price: "$50", featured: true },
  { ...SP.lashFill, price: "$35" },
];

const BROWS: Service[] = [
  { ...SP.browLamination, price: "$60" },
  { ...SP.browTint, price: "$60" },
  { ...SP.browLamTint, price: "$100" },
  { ...SP.browCleanUp, price: "$10" },
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
          <T {...SP.featured} />
        </span>
      )}
      {service.outOfStock && (
        <span className="absolute right-4 top-4 rounded-full border border-border/50 bg-background/70 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.3em] text-muted-foreground/80 backdrop-blur-sm">
          <T {...SP.unavailable} />
        </span>
      )}

      <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-[family-name:var(--font-editorial)] text-2xl tracking-wide text-foreground sm:text-3xl">
          <T {...service.name} />
        </h3>
        <span className="font-[family-name:var(--font-editorial)] text-2xl text-accent sm:text-3xl">
          {service.price}
        </span>
      </div>

      {service.meta && (
        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80">
          <T {...service.meta} />
        </p>
      )}

      <p
        className={`mt-4 text-sm leading-relaxed sm:text-base ${
          service.outOfStock
            ? "text-muted-foreground/60"
            : "text-muted-foreground"
        }`}
      >
        <T {...service.description} />
      </p>
    </li>
  );
}

function CategoryTitle({ word }: { word: CopyPair }) {
  return (
    <div className="flex flex-col items-center">
      <div
        aria-hidden
        className="h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
      <h2 className="mt-5 text-center font-[family-name:var(--font-editorial)] text-4xl font-light tracking-[0.15em] text-foreground sm:text-5xl">
        <T {...word} />
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
            <T {...SP.eyebrow} />
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.12em] text-foreground sm:text-6xl">
            <T {...SP.heading} />
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <T {...SP.intro} />
          </p>
        </section>

        {/* Lashes */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <CategoryTitle word={SP.lashesTitle} />
          <ul className="mt-12 space-y-5">
            {LASHES.map((s) => (
              <ServiceItem key={String(s.name.en)} service={s} />
            ))}
          </ul>
        </section>

        {/* Brows */}
        <section className="mx-auto max-w-3xl px-6 py-16">
          <CategoryTitle word={SP.browsTitle} />
          <ul className="mt-12 space-y-5">
            {BROWS.map((s) => (
              <ServiceItem key={String(s.name.en)} service={s} />
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-5xl text-foreground sm:text-6xl">
            <T {...SP.readyToBook} />
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
                <T {...COMMON.bookViaInstagram} />
              </a>
            </Button>
            <Link
              href="/"
              className="mt-4 text-sm text-muted-foreground hover:text-foreground"
            >
              <T {...COMMON.backToHome} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
