import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/site/icons";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";
import { T, type CopyPair } from "@/components/site/t";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";
import { ABOUT_PAGE as AP, COMMON } from "@/lib/i18n/copy";

export const metadata = {
  title: "Meet Dora",
  description:
    "Meet Dora — the lash and brow artist behind Adora Lashes and Brows in Dallas, Texas.",
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

export default function MeetDoraPage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Hero with portrait + intro */}
        <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-accent/20 shadow-[0_0_80px_-20px_oklch(0.62_0.24_300/0.35)]">
                <Image
                  src="/brand/headshot.jpg"
                  alt={`${BRAND.name} — ${BRAND.artist}`}
                  fill
                  sizes="(min-width: 768px) 28rem, 24rem"
                  className="object-cover object-top"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-[10px] uppercase tracking-[0.5em] text-accent">
                <T {...AP.eyebrow} />
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-editorial)] text-6xl font-light leading-none tracking-[0.05em] text-foreground sm:text-7xl md:text-8xl">
                DORA
              </h1>
              <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                <T {...AP.role} />
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-accent/80">
                <T {...AP.certified} />
              </p>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  <T {...AP.bio1} />
                </p>
                <p>
                  <T {...AP.bio2} />
                </p>
                <p>
                  <T {...AP.bio3} />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionTitle word={AP.approachTitle} />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {AP.pillars.map((p) => (
              <div key={p.word.en} className="text-center">
                <h3 className="font-[family-name:var(--font-display)] text-5xl text-accent sm:text-6xl">
                  <T {...p.word} />
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <T {...p.body} />
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Studio experience */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionTitle word={AP.studioTitle} />
          <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border/40 bg-border/40 sm:grid-cols-3">
            {AP.studio.map((item) => (
              <div key={item.title.en} className="bg-card/60 p-7 text-center">
                <h3 className="font-[family-name:var(--font-editorial)] text-2xl tracking-wide text-foreground">
                  <T {...item.title} />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <T {...item.body} />
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-5xl text-foreground sm:text-6xl">
            <T {...AP.cta} />
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
