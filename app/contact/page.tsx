import Link from "next/link";
import { MapPin } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/site/icons";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Contact",
  description:
    "How to reach Adora Lashes and Brows — booking, studio location, and hours in Dallas, Texas.",
};

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BRAND.address.line1} ${BRAND.address.suite}, ${BRAND.address.city}, ${BRAND.address.state} ${BRAND.address.zip}`,
)}`;

function SectionTitle({ word }: { word: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        aria-hidden
        className="h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
      <h2 className="mt-5 text-center font-[family-name:var(--font-editorial)] text-3xl font-light tracking-[0.15em] text-foreground sm:text-4xl">
        {word}
      </h2>
      <div
        aria-hidden
        className="mt-5 h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent">
            Get in Touch
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.12em] text-foreground sm:text-6xl">
            CONTACT
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Adora books and answers questions personally through Instagram. Tap
            below to reach her &mdash; or scroll for studio details, hours, and
            socials.
          </p>
        </section>

        {/* Booking block */}
        <section className="mx-auto max-w-3xl px-6 pb-12">
          <SectionTitle word="BOOKING" />
          <div className="mt-12 rounded-md border border-accent/30 bg-card/40 p-8 text-center shadow-[0_0_60px_-30px_oklch(0.62_0.24_300/0.4)] sm:p-10">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Adora books exclusively through Instagram DMs. It keeps things
              personal and lets her tailor every appointment to you.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3">
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
                  Book via Instagram
                </a>
              </Button>
              <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground/80">
                DM &ldquo;{BRAND.booking.keyword}&rdquo; to reserve
              </p>
            </div>
          </div>
        </section>

        {/* Studio */}
        <section className="mx-auto max-w-3xl px-6 py-12">
          <SectionTitle word="STUDIO" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border/40 bg-border/40 sm:grid-cols-2">
            <div className="bg-card/60 p-7 text-center sm:text-left">
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
                Address
              </p>
              <address className="mt-3 not-italic text-base leading-relaxed text-muted-foreground">
                {BRAND.address.line1}
                <br />
                {BRAND.address.suite}
                <br />
                {BRAND.address.city}, {BRAND.address.state}{" "}
                {BRAND.address.zip}
              </address>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-accent transition-colors hover:text-foreground"
              >
                <MapPin className="size-3.5" /> Open in Maps
              </a>
            </div>
            <div className="bg-card/60 p-7 text-center sm:text-left">
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
                Access
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                By appointment only. Detailed building entry, parking, and
                suite-finding instructions are sent with your booking
                confirmation.
              </p>
            </div>
          </div>
        </section>

        {/* Hours */}
        <section className="mx-auto max-w-3xl px-6 py-12">
          <SectionTitle word="HOURS" />
          <ul className="mx-auto mt-12 max-w-md space-y-6 text-center">
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
        </section>

        {/* Connect */}
        <section className="mx-auto max-w-3xl px-6 py-12">
          <SectionTitle word="CONNECT" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border/40 bg-border/40 sm:grid-cols-2">
            <a
              href={BRAND.contact.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group bg-card/60 p-7 text-center transition-colors hover:bg-card/80"
            >
              <InstagramIcon className="mx-auto size-5 text-accent" />
              <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-accent">
                Instagram
              </p>
              <p className="mt-2 text-base text-muted-foreground transition-colors group-hover:text-foreground">
                @{BRAND.contact.instagram}
              </p>
            </a>
            <a
              href={BRAND.contact.tiktokUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group bg-card/60 p-7 text-center transition-colors hover:bg-card/80"
            >
              <TikTokIcon className="mx-auto size-5 text-accent" />
              <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-accent">
                TikTok
              </p>
              <p className="mt-2 text-base text-muted-foreground transition-colors group-hover:text-foreground">
                @{BRAND.contact.tiktok}
              </p>
            </a>
          </div>
        </section>

        {/* Back link */}
        <section className="mx-auto max-w-3xl px-6 py-12 text-center">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Back to home
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
