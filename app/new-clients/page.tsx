import Link from "next/link";
import { InstagramIcon } from "@/components/site/icons";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";
import { T, type CopyPair } from "@/components/site/t";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";
import { COMMON, NEW_CLIENTS_PAGE as NC } from "@/lib/i18n/copy";

export const metadata = {
  title: "New Clients",
  description:
    "Everything new clients need before their first lash or brow appointment with Dora at Adora Lashes and Brows — booking, deposit, pre-care, studio policies, and consent.",
};

const STEPS = NC.steps.map((step, i) => ({ n: `0${i + 1}`, ...step }));

function SectionTitle({ word }: { word: CopyPair }) {
  return (
    <div className="flex flex-col items-center">
      <div
        aria-hidden
        className="h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
      <h2 className="mt-6 text-center font-[family-name:var(--font-editorial)] text-4xl font-light tracking-[0.1em] text-foreground sm:text-5xl">
        <T {...word} />
      </h2>
      <div
        aria-hidden
        className="mt-6 h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
    </div>
  );
}

export default function NewClientsPage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Intro */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent">
            <T {...NC.eyebrow} />
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.1em] text-foreground sm:text-6xl">
            <T {...NC.heading} />
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <T {...NC.intro} />
          </p>
        </section>

        {/* How to book */}
        <section className="mx-auto max-w-5xl px-6 py-12">
          <SectionTitle word={NC.howToBook} />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="rounded-md border border-border/50 bg-card/50 p-7 text-center"
              >
                <div className="font-[family-name:var(--font-editorial)] text-3xl text-accent">
                  {step.n}
                </div>
                <h3 className="mt-3 text-base font-medium uppercase tracking-[0.2em] text-foreground">
                  <T {...step.title} />
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  <T {...step.body} />
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Before your appointment */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <SectionTitle word={NC.beforeAppointment} />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2">
            {NC.precare.map((rule, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-md border border-border/40 bg-card/40 px-6 py-5 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="font-[family-name:var(--font-editorial)] text-accent">
                  &mdash;
                </span>
                <span>
                  <T {...rule} />
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Studio policies */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionTitle word={NC.studioPolicies} />
          <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border/40 bg-border/40 sm:grid-cols-2 lg:grid-cols-3">
            {NC.policies.map((policy) => (
              <div key={policy.title.en} className="bg-card/60 p-7">
                <h3 className="font-[family-name:var(--font-editorial)] text-xl tracking-wide text-foreground">
                  <T {...policy.title} />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <T {...policy.body} />
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-5xl text-foreground sm:text-6xl">
            <T {...NC.cta} />
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
