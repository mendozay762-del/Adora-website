import Image from "next/image";
import { InstagramIcon } from "@/components/site/icons";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

const PANELS = [
  { src: "/brand/IMG_7763.jpeg", alt: "Wispy volume lash extensions on an open eye" },
  { src: "/brand/IMG_0454.jpeg", alt: "Dramatic volume lash set, close up" },
  { src: "/brand/IMG_0363.jpeg", alt: "Fresh lash and brow set on a client" },
] as const;

export function HeroTriptych() {
  return (
    <section
      className="relative isolate w-full"
      aria-label={`${BRAND.name} hero`}
    >
      <div className="grid h-[78vh] min-h-[560px] grid-cols-1 sm:h-[82vh] sm:grid-cols-3">
        {PANELS.map((panel, i) => (
          <div
            key={panel.src}
            className={`relative overflow-hidden border-r border-border/30 last:border-r-0 ${
              i === 1 ? "" : "hidden sm:block"
            }`}
          >
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              priority={i === 1}
              sizes="(min-width: 640px) 34vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/20 to-background/70"
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-25"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, oklch(0.62 0.24 300 / 0.22), transparent 65%)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Overlay center column with brand mark + title */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
        <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-sm bg-background/55 px-6 py-10 backdrop-blur-md sm:max-w-lg sm:gap-8 sm:px-10 sm:py-14">
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
