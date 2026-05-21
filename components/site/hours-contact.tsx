import { BRAND } from "@/lib/brand";

function EditorialHeading({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        aria-hidden
        className="h-px w-48 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
      <h2 className="mt-6 text-center">
        <span className="block font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.08em] text-foreground sm:text-6xl">
          {primary}
        </span>
        <span className="-mt-3 block font-[family-name:var(--font-display)] text-5xl text-accent sm:-mt-4 sm:text-6xl">
          {secondary}
        </span>
      </h2>
      <div
        aria-hidden
        className="mt-6 h-px w-48 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
    </div>
  );
}

export function HoursContact() {
  return (
    <section
      className="relative w-full px-4 py-20 sm:px-6 sm:py-24"
      aria-label="Business hours and contact info"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-0">
        <div className="md:border-r md:border-border/40 md:pr-12">
          <EditorialHeading primary="BUSINESS" secondary="Hours" />

          <ul className="mt-10 space-y-7 text-center">
            {BRAND.hours.schedule.map((row) => (
              <li key={row.days}>
                <div className="text-[10px] uppercase tracking-[0.4em] text-accent">
                  {row.days}
                </div>
                <div className="mt-2 text-base text-muted-foreground">
                  {row.value}
                </div>
                {row.note && (
                  <div className="mt-1 text-[11px] italic text-muted-foreground/70">
                    {row.note}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-[10px] uppercase tracking-[0.35em] text-accent/70">
            New schedule effective {BRAND.hours.effectiveDate}
          </p>
        </div>

        <div className="md:pl-12">
          <EditorialHeading primary="CONTACT" secondary="Info" />

          <ul className="mt-10 space-y-7 text-center">
            <li>
              <div className="text-[10px] uppercase tracking-[0.4em] text-accent">
                Instagram
              </div>
              <a
                href={BRAND.contact.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 inline-block text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                @{BRAND.contact.instagram}
              </a>
            </li>
            <li>
              <div className="text-[10px] uppercase tracking-[0.4em] text-accent">
                TikTok
              </div>
              <a
                href={BRAND.contact.tiktokUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 inline-block text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                @{BRAND.contact.tiktok}
              </a>
            </li>
            <li>
              <div className="text-[10px] uppercase tracking-[0.4em] text-accent">
                Studio
              </div>
              <address className="mt-2 not-italic text-base leading-relaxed text-muted-foreground">
                {BRAND.address.line1}
                <br />
                {BRAND.address.suite}
                <br />
                {BRAND.address.city}, {BRAND.address.state}{" "}
                {BRAND.address.zip}
              </address>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
