import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { BRAND } from "@/lib/brand";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M16.5 3a5.4 5.4 0 0 0 4.5 4.5v2.7a8.1 8.1 0 0 1-4.5-1.4v6.6a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.9a2.8 2.8 0 1 0 2 2.7V3h2.8z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <div className="font-[family-name:var(--font-display)] text-4xl leading-none">
            Adora
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Lashes &amp; Brows
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {BRAND.pillars.join(" · ")}.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Visit
          </h3>
          <address className="mt-4 not-italic text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent/80" />
              <div>
                {BRAND.address.line1}
                <br />
                {BRAND.address.suite}
                <br />
                {BRAND.address.city}, {BRAND.address.state}{" "}
                {BRAND.address.zip}
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-accent/80" />
              <a
                href={`tel:${BRAND.contact.phone.replace(/[^0-9]/g, "")}`}
                className="hover:text-foreground"
              >
                {BRAND.contact.phone}
              </a>
            </div>
            <div className="mt-3 text-xs uppercase tracking-wide text-muted-foreground/70">
              By appointment only
            </div>
          </address>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Connect
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={BRAND.contact.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <InstagramIcon className="size-4 text-accent/80" />@
                {BRAND.contact.instagram}
              </a>
            </li>
            <li>
              <a
                href={BRAND.contact.tiktokUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <TikTokIcon className="size-4 text-accent/80" />@
                {BRAND.contact.tiktok}
              </a>
            </li>
            <li>
              <Link href="/book" className="hover:text-foreground">
                Book on Vagaro →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6">
          <div>
            © {year} {BRAND.name}. All rights reserved.
          </div>
          <div>Dallas, Texas</div>
        </div>
      </div>
    </footer>
  );
}
