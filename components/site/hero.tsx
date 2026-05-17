import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, oklch(0.62 0.24 305 / 0.18), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, oklch(0.73 0.10 80 / 0.10), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7 lg:pt-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Lashes &amp; Brows · Dallas, Texas
          </p>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-7xl leading-[0.9] tracking-tight text-foreground sm:text-8xl md:text-9xl">
            Adora
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            {BRAND.pillars.map((pillar, i) => (
              <span key={pillar} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="text-accent/60">
                    ·
                  </span>
                )}
                <span>{pillar}</span>
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A wispy cat-eye crafted for the luxury client who wants an
            experience, not a service. Your exclusive lash experience awaits.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link href="/book">Book Your Set</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-accent/40 px-7 text-foreground hover:bg-accent/10 hover:text-foreground"
            >
              <a
                href={BRAND.contact.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                DM &ldquo;LASHES&rdquo; on Instagram
              </a>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground/80">
            New clients get $20 off · $20 Zelle deposit secures your spot
          </p>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-primary/20 via-card to-background shadow-[0_0_60px_-15px_oklch(0.62_0.24_305/0.4)]">
            <div
              aria-hidden
              className="absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, oklch(0.62 0.24 305 / 0.35), transparent 70%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
              <div className="font-[family-name:var(--font-display)] text-[7rem] leading-none text-foreground/90">
                Adora
              </div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-accent">
                Lashes &amp; Brows
              </div>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur-sm">
                Portrait coming soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
