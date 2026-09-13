import Image from "next/image";
import { T } from "@/components/site/t";
import { BRAND } from "@/lib/brand";
import { MEET_ARTIST, PILLARS } from "@/lib/i18n/copy";

export function MeetArtist() {
  return (
    <section
      className="relative w-full px-4 py-24 sm:px-6 sm:py-32"
      aria-labelledby="meet-artist-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
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
          <p className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            <T {...MEET_ARTIST.eyebrow} />
          </p>
          <h2
            id="meet-artist-heading"
            className="es-display-fit mt-4 font-[family-name:var(--font-editorial)] text-5xl font-light leading-none tracking-[0.05em] text-foreground sm:text-6xl md:text-7xl"
          >
            <T {...MEET_ARTIST.heading} />
          </h2>

          <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <T {...MEET_ARTIST.bio} />
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 md:justify-start">
            {PILLARS.map((pillar, i) => (
              <span
                key={String(pillar.en)}
                className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-accent"
              >
                {i > 0 && (
                  <span aria-hidden className="text-accent/40">
                    &middot;
                  </span>
                )}
                <span>
                  &#9825; <T {...pillar} />
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
