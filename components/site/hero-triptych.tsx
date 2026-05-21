import Image from "next/image";
import { InstagramIcon } from "@/components/site/icons";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

const TRIPTYCH_LABELS = ["I", "II", "III"] as const;

export function HeroTriptych() {
  return (
    <section
      className="relative isolate w-full"
      aria-label={`${BRAND.name} hero`}
    >
      <div className="grid h-[78vh] min-h-[560px] grid-cols-1 sm:h-[82vh] sm:grid-cols-3">
        {TRIPTYCH_LABELS.map((label, i) => (
          <div
            key={label}
            className={`relative overflow-hidden border-r border-border/30 last:border-r-0 ${
              i === 1 ? "" : "hidden sm:block"
            }`}
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  i === 1
                    ? "radial-gradient(ellipse at center, oklch(0.16 0.04 300) 0%, oklch(0.08 0.02 300) 70%)"
                    : i === 0
                      ? "linear-gradient(165deg, oklch(0.12 0.04 300) 0%, oklch(0.07 0.015 300) 100%)"
                      : "linear-gradient(195deg, oklch(0.10 0.03 300) 0%, oklch(0.07 0.015 300) 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, oklch(0.62 0.24 300 / 0.25), transparent 60%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-6 flex justify-center">
              <span className="rounded-full border border-accent/30 bg-background/40 px-3 py-1 text-[9px] uppercase tracking-[0.4em] text-muted-foreground/70 backdrop-blur-sm">
                Image {label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay center column with brand mark + title */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
        <div className="flex w-full max-w-md flex-col items-center gap-6 bg-background/40 px-6 py-10 backdrop-blur-md sm:max-w-lg sm:gap-8 sm:px-10 sm:py-14">
          <Image
            src="/brand/logo.png"
            alt={BRAND.name}
            width={160}
            height={160}
            priority
            className="h-28 w-28 sm:h-36 sm:w-36"
          />
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] text-accent">
              Welcome to my booking site
            </p>
            <h1 className="font-[family-name:var(--font-editorial)] text-3xl font-light leading-[1.05] tracking-[0.12em] text-foreground sm:text-4xl md:text-[2.6rem]">
              ADORA LASHES
              <br />
              AND BROWS
            </h1>
            <div className="mt-1 flex items-center gap-3 text-[10px] uppercase tracking-[0.45em] text-muted-foreground">
              <span>Lashes</span>
              <span aria-hidden className="text-accent/60">
                |
              </span>
              <span>Brows</span>
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/80">
              Located in {BRAND.address.city}, {BRAND.address.state}
            </p>
          </div>

          <div className="pointer-events-auto mt-2 flex flex-col items-center gap-2">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 shadow-[0_0_40px_-12px_oklch(0.74_0.22_300/0.7)]"
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
            <p className="text-[9px] uppercase tracking-[0.35em] text-muted-foreground/70">
              DM &ldquo;{BRAND.booking.keyword}&rdquo; to reserve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
