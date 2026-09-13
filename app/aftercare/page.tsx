import Link from "next/link";
import { InstagramIcon } from "@/components/site/icons";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";
import { T, type CopyPair } from "@/components/site/t";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";
import { AFTERCARE_PAGE as AC, COMMON } from "@/lib/i18n/copy";

export const metadata = {
  title: "Aftercare",
  description:
    "Lash extension, brow lamination, brow tint, and wax aftercare for clients of Adora Lashes and Brows.",
};

type CareGroup = {
  category: CopyPair;
  intro: CopyPair;
  doList: readonly CopyPair[];
  avoidList: readonly CopyPair[];
};

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

function CareCard({ group }: { group: CareGroup }) {
  return (
    <div className="rounded-md border border-border/40 bg-card/30 p-7 sm:p-8">
      <h3 className="font-[family-name:var(--font-editorial)] text-3xl text-foreground sm:text-4xl">
        <T {...group.category} />
      </h3>
      <p className="mt-3 text-sm text-muted-foreground sm:text-base">
        <T {...group.intro} />
      </p>
      <div className="mt-7 grid gap-7 sm:grid-cols-2">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">
            <T {...AC.doLabel} />
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
                <span>
                  <T {...rule} />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">
            <T {...AC.avoidLabel} />
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
                <span>
                  <T {...rule} />
                </span>
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
            <T {...AC.eyebrow} />
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.12em] text-foreground sm:text-6xl">
            <T {...AC.heading} />
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <T {...AC.intro} />
          </p>
        </section>

        {/* Care groups */}
        <section className="mx-auto max-w-3xl space-y-6 px-6 pb-12">
          {AC.groups.map((g) => (
            <CareCard key={g.category.en} group={g} />
          ))}
        </section>

        {/* When to reach out */}
        <section className="mx-auto max-w-3xl px-6 py-12">
          <SectionTitle word={AC.whenToReachOut} />
          <div className="mt-12 rounded-md border border-accent/30 bg-card/40 p-7 text-center sm:p-8">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              <T {...AC.reachOutIntro} />
            </p>
            <ul className="mx-auto mt-5 max-w-md space-y-2 text-sm text-muted-foreground sm:text-base">
              {AC.reachOutList.map((item, i) => (
                <li key={i}>
                  <T {...item} />
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-accent">
              DM @{BRAND.contact.instagram}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-5xl text-foreground sm:text-6xl">
            <T {...AC.ctaHeading} />
          </h2>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <T {...AC.ctaNote} />
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
