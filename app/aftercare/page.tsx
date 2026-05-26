import Link from "next/link";
import { InstagramIcon } from "@/components/site/icons";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Aftercare",
  description:
    "Lash extension, brow lamination, brow tint, and wax aftercare for clients of Adora Lashes and Brows.",
};

type CareGroup = {
  category: string;
  intro: string;
  doList: string[];
  avoidList: string[];
};

const GROUPS: CareGroup[] = [
  {
    category: "Lashes",
    intro:
      "The first 24 hours decide retention. Treat your set gently and it stays full for weeks.",
    doList: [
      "Cleanse daily with a foaming, lash-safe cleanser.",
      "Brush gently with a spoolie morning and night.",
      "Sleep on your back when possible.",
      "Book your fill every two weeks to keep the set even.",
    ],
    avoidList: [
      "No water, steam, sweat, or sauna for the first 24 hours.",
      "No oil-based makeup, cleansers, or removers anywhere near the eye.",
      "No mascara — especially waterproof.",
      "No eyelash curlers, rubbing, picking, or pulling.",
    ],
  },
  {
    category: "Brows · Lamination & Tint",
    intro:
      "Freshly laminated and tinted brows need 48 hours to fully set. Keep them dry and undisturbed.",
    doList: [
      "Keep brows dry for the first 24 hours.",
      "Brush daily with a spoolie to keep the shape lifted.",
      "Apply any conditioning serum sent home with you.",
    ],
    avoidList: [
      "No makeup on brows for 48 hours.",
      "No retinol, AHA, BHA, or active exfoliants near brows for 7 days.",
      "No rubbing, scrubbing, or sleeping face-down on a fresh set.",
      "No oil-based skincare crossing the brow line.",
    ],
  },
  {
    category: "Wax & Clean Up",
    intro:
      "Freshly waxed skin is sensitive for the first day. Keep it calm, clean, and out of heat.",
    doList: [
      "Keep the area clean and bare of makeup for 24 hours.",
      "Apply a cool compress if any redness or sensitivity appears.",
    ],
    avoidList: [
      "No heat, sun, saunas, or hot showers for 24 hours.",
      "No exfoliants, scrubs, or active skincare for 24–48 hours.",
      "No touching, picking, or pressing on the waxed area.",
    ],
  },
];

function SectionTitle({ word }: { word: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        aria-hidden
        className="h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
      <h2 className="mt-5 text-center font-[family-name:var(--font-editorial)] text-3xl font-light tracking-[0.15em] text-foreground sm:text-4xl">
        {word}
      </h2>
      <div
        aria-hidden
        className="mt-5 h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
    </div>
  );
}

function CareCard({ group }: { group: CareGroup }) {
  return (
    <div className="rounded-md border border-border/40 bg-card/30 p-7 sm:p-8">
      <h3 className="font-[family-name:var(--font-editorial)] text-3xl text-foreground sm:text-4xl">
        {group.category}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground sm:text-base">
        {group.intro}
      </p>
      <div className="mt-7 grid gap-7 sm:grid-cols-2">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">
            Do
          </p>
          <ul className="mt-4 space-y-3">
            {group.doList.map((rule, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span aria-hidden className="mt-1 text-accent">
                  &middot;
                </span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">
            Avoid
          </p>
          <ul className="mt-4 space-y-3">
            {group.avoidList.map((rule, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span aria-hidden className="mt-0.5 text-accent">
                  &times;
                </span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function AftercarePage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent">
            Keep Them Perfect
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.12em] text-foreground sm:text-6xl">
            AFTERCARE
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            How you care for your lashes and brows in the first 24&ndash;48
            hours decides how long they last. A little intention now buys you
            weeks of perfect.
          </p>
        </section>

        {/* Care groups */}
        <section className="mx-auto max-w-3xl space-y-6 px-6 pb-12">
          {GROUPS.map((g) => (
            <CareCard key={g.category} group={g} />
          ))}
        </section>

        {/* When to reach out */}
        <section className="mx-auto max-w-3xl px-6 py-12">
          <SectionTitle word="WHEN TO REACH OUT" />
          <div className="mt-12 rounded-md border border-accent/30 bg-card/40 p-7 text-center sm:p-8">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              DM Dora within 72 hours if you notice:
            </p>
            <ul className="mx-auto mt-5 max-w-md space-y-2 text-sm text-muted-foreground sm:text-base">
              <li>Redness or irritation lasting more than 24 hours.</li>
              <li>Itching, swelling, or signs of an allergic reaction.</li>
              <li>
                Loss of more than half of a fresh set within the first week.
              </li>
            </ul>
            <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-accent">
              DM @{BRAND.contact.instagram}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-5xl text-foreground sm:text-6xl">
            Time for a fill?
          </h2>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Book every two weeks to keep your set full
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
