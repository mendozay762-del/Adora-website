import Link from "next/link";
import { InstagramIcon } from "@/components/site/icons";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";
import { T, type CopyPair } from "@/components/site/t";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";
import { COMMON, POLICIES_PAGE as PP } from "@/lib/i18n/copy";

export const metadata = {
  title: "Policies",
  description:
    "Cancellation, deposit, no-show, refund, and studio policies for Adora Lashes and Brows in Dallas, Texas.",
};

function SectionTitle({ word }: { word: CopyPair }) {
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

function PolicyCard({ title, body }: { title: CopyPair; body: CopyPair }) {
  return (
    <div className="rounded-md border border-border/40 bg-card/30 p-7 sm:p-8">
      <h3 className="font-[family-name:var(--font-editorial)] text-2xl tracking-wide text-foreground sm:text-3xl">
        <T {...title} />
      </h3>
      <div className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <T as="div" {...body} />
      </div>
    </div>
  );
}

export default function PoliciesPage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent">
            <T {...PP.eyebrow} />
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.12em] text-foreground sm:text-6xl">
            <T {...PP.heading} />
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <T {...PP.intro} />
          </p>
        </section>

        {/* Booking */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <SectionTitle word={PP.bookingTitle} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
            {PP.booking.map((p) => (
              <PolicyCard key={p.title.en} title={p.title} body={p.body} />
            ))}
          </div>
        </section>

        {/* At the Studio */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionTitle word={PP.studioTitle} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
            {PP.studio.map((p) => (
              <PolicyCard key={p.title.en} title={p.title} body={p.body} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-5xl text-foreground sm:text-6xl">
            <T {...PP.ctaHeading} />
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            <T {...PP.ctaBody} />
          </p>
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
