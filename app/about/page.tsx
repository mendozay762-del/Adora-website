import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/site/icons";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Meet Adora",
  description:
    "Meet Adora — the lash and brow artist behind Adora Lashes and Brows in Dallas, Texas.",
};

const PILLARS = [
  {
    word: "Soft",
    body: "Lashes that feel like a part of you, not on top of you. Built around your eye shape, your natural fan, your daily life — never one-size-fits-all.",
  },
  {
    word: "Luxurious",
    body: "Time, attention, and detail in every appointment. No rush, no shortcuts, no two sets exactly alike.",
  },
  {
    word: "Elevated",
    body: "A private studio, an intimate experience, and a finish that holds up beautifully — for the client who notices the details.",
  },
];

const STUDIO_EXPERIENCE = [
  {
    title: "Private",
    body: "One client at a time. No extra guests, no phones — just your appointment, undivided.",
  },
  {
    title: "Bespoke",
    body: "Every set custom-built for your eye shape and the look you want. Soft natural to fluttery dramatic — your call.",
  },
  {
    title: "Personal",
    body: "Booking happens by Instagram DM, so we stay connected from your first message through your next fill.",
  },
];

function SectionTitle({ word }: { word: string }) {
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

export default function MeetAdoraPage() {
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
                  alt={`${BRAND.name} — Adora`}
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
                Meet Your Lash Artist
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-editorial)] text-6xl font-light leading-none tracking-[0.05em] text-foreground sm:text-7xl md:text-8xl">
                ADORA
              </h1>
              <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Lash &amp; Brow Artist &middot; Dallas, Texas
              </p>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Hello gorgeous &mdash; I&rsquo;m Adora, the artist behind every
                set that leaves this studio. My work is built around one idea:
                that beauty should feel like a little secret. Soft. Sultry.
                Personal. A set that looks like it was always yours, just
                refined.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionTitle word="MY APPROACH" />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.word} className="text-center">
                <h3 className="font-[family-name:var(--font-display)] text-5xl text-accent sm:text-6xl">
                  {p.word}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Studio experience */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionTitle word="IN THE STUDIO" />
          <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border/40 bg-border/40 sm:grid-cols-3">
            {STUDIO_EXPERIENCE.map((item) => (
              <div key={item.title} className="bg-card/60 p-7 text-center">
                <h3 className="font-[family-name:var(--font-editorial)] text-2xl tracking-wide text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-5xl text-foreground sm:text-6xl">
            Let&rsquo;s create your set
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
