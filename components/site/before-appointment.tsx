import Link from "next/link";
import { T } from "@/components/site/t";
import { Button } from "@/components/ui/button";
import { BEFORE } from "@/lib/i18n/copy";

export function BeforeAppointment() {
  return (
    <section
      className="relative w-full px-4 py-20 sm:px-6 sm:py-24"
      aria-labelledby="before-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center">
          <div
            aria-hidden
            className="h-px w-48 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
          />
          <h2 id="before-heading" className="mt-6 text-center">
            <span className="block text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
              <T {...BEFORE.eyebrow} />
            </span>
            <span className="mt-4 block font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.1em] text-foreground sm:text-6xl">
              <T {...BEFORE.heading} />
            </span>
          </h2>
          <div
            aria-hidden
            className="mt-6 h-px w-48 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {BEFORE.rules.map((rule, i) => (
            <div
              key={i}
              className="flex items-center rounded-md border border-border/40 bg-card/60 px-6 py-7 text-center text-sm leading-relaxed text-muted-foreground"
            >
              <p className="mx-auto max-w-sm">
                <T {...rule} />
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-[10px] uppercase tracking-[0.4em] text-accent">
          <T {...BEFORE.noGuests} />
        </p>

        <div className="mt-16 rounded-md border border-accent/30 bg-card/40 px-6 py-10 text-center shadow-[0_0_60px_-30px_oklch(0.62_0.24_300/0.5)] sm:px-10 sm:py-12">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent">
            <T {...BEFORE.consentEyebrow} />
          </p>
          <h3 className="mt-4 font-[family-name:var(--font-editorial)] text-3xl font-light tracking-[0.1em] text-foreground sm:text-4xl">
            <T {...BEFORE.consentHeading} />
          </h3>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            <T {...BEFORE.consentBody} />
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-accent/40 px-8"
            >
              <Link href="/new-clients">
                <T {...BEFORE.consentCta} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
