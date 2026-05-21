import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/site/icons";
import { BRAND } from "@/lib/brand";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src="/brand/logo.png"
            alt={BRAND.name}
            width={120}
            height={120}
            className="h-24 w-24"
          />
          <p className="mt-6 max-w-xs text-sm text-muted-foreground">
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
