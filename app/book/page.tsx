import Link from "next/link";
import Image from "next/image";
import { InstagramIcon } from "@/components/site/icons";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";
import { T, type CopyPair } from "@/components/site/t";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";
import { BOOK_PAGE as BP, COMMON } from "@/lib/i18n/copy";

export const metadata = {
  title: "Book",
  description:
    "Book a lash or brow appointment with Dora at Adora Lashes and Brows in Dallas — by Instagram DM only.",
};

const STEPS = BP.steps.map((step, i) => ({
  n: `0${i + 1}`,
  ...step,
}));

const QUICK_LINKS = [
  { ...BP.quickLinks[0], href: "/policies" },
  { ...BP.quickLinks[1], href: "/policies" },
  { ...BP.quickLinks[2], href: "/services" },
  { ...BP.quickLinks[3], href: "/new-clients" },
];

function SectionTitle({ word }: { word: CopyPair }) {
  return (
    <div className="flex flex-col items-center">
      <div
        aria-hidden
        className="h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
      <h2 className="mt-5 text-center font-[family-name:var(--font-editorial)] text-3xl font-light tracking-[0.15em] text-foreground sm:text-4xl">
        <T {...word} />
      </h2>
      <div
        aria-hidden
        className="mt-5 h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
    </div>
  );
}

export default function BookPage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent">
            <T {...BP.eyebrow} />
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-editorial)] text-6xl font-light tracking-[0.08em] text-foreground sm:text-7xl">
            <T {...BP.heading} />
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <T {...BP.intro} />
          </p>
        </section>

        {/* Primary CTA */}
        <section className="mx-auto max-w-2xl px-6 pb-10">
          <div className="flex flex-col items-center">
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
          </div>
        </section>

        {/* Copy this DM */}
        <section className="mx-auto max-w-2xl px-6 pb-16">
          <div className="rounded-md border border-accent/30 bg-card/40 p-7 shadow-[0_0_60px_-30px_oklch(0.62_0.24_300/0.4)] sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
              <T {...BP.copyThisDm} />
            </p>
            <p className="mt-4 font-[family-name:var(--font-editorial)] text-xl leading-relaxed text-foreground sm:text-2xl">
              <T {...BP.dmTemplate} />
            </p>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              <T {...BP.sendTo} />
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mx-auto max-w-5xl px-6 py-12">
          <SectionTitle word={BP.howItWorks} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="rounded-md border border-border/50 bg-card/50 p-7 text-center"
              >
                <div className="font-[family-name:var(--font-editorial)] text-3xl text-accent">
                  {step.n}
                </div>
                <h3 className="mt-3 text-sm font-medium uppercase tracking-[0.22em] text-foreground">
                  <T {...step.title} />
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  <T {...step.body} />
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Before You Book */}
        <section className="mx-auto max-w-5xl px-6 py-12">
          <SectionTitle word={BP.beforeYouBook} />
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border/40 bg-border/40 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href + String(link.label.en)}
                href={link.href}
                className="group flex items-start justify-between gap-3 bg-card/60 px-6 py-5 transition-colors hover:bg-card/80"
              >
                <div>
                  <div className="text-sm text-foreground">
                    <T {...link.label} />
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80">
                    <T {...link.note} />
                  </div>
                </div>
                <span
                  aria-hidden
                  className="mt-0.5 text-accent transition-transform group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Closing image */}
        <section className="mx-auto max-w-3xl px-6 py-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-accent/20 shadow-[0_0_80px_-20px_oklch(0.62_0.24_300/0.35)]">
            <Image
              src="/brand/IMG_7763.jpeg"
              alt="Soft, fluttery lash extension set"
              fill
              sizes="(min-width: 768px) 48rem, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"
            />
          </div>
        </section>

        {/* Back link */}
        <section className="mx-auto max-w-3xl px-6 pb-16 text-center">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            <T {...COMMON.backToHome} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
