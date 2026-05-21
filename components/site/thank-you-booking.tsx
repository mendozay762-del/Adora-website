import { ChevronDown } from "lucide-react";
import { InstagramIcon } from "@/components/site/icons";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

function PhonePlaceholder({ rotate }: { rotate: string }) {
  return (
    <div
      className="relative h-56 w-32 overflow-hidden rounded-[1.75rem] border-[3px] border-foreground/80 bg-card shadow-2xl sm:h-64 sm:w-36"
      style={{ transform: `rotate(${rotate})` }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, oklch(0.55 0.18 300 / 0.45), oklch(0.08 0.02 300) 75%)",
        }}
      />
      <div className="absolute inset-x-0 top-2 flex justify-center">
        <div className="h-1 w-12 rounded-full bg-foreground/50" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[8px] uppercase tracking-[0.4em] text-muted-foreground/70">
          Lash macro
        </span>
      </div>
    </div>
  );
}

export function ThankYouBooking() {
  return (
    <section
      className="relative w-full px-4 py-24 sm:px-6 sm:py-32"
      aria-labelledby="thank-you-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-center md:gap-8">
          {/* Phone composite */}
          <div className="relative flex shrink-0 items-center justify-center">
            <div className="absolute -left-2 -top-4 z-0">
              <PhonePlaceholder rotate="-8deg" />
            </div>
            <div className="relative z-10 ml-16">
              <PhonePlaceholder rotate="8deg" />
            </div>
          </div>

          {/* Heading + CTA */}
          <div className="text-center md:text-left">
            <h2
              id="thank-you-heading"
              className="font-[family-name:var(--font-display)] text-6xl leading-[0.9] text-foreground sm:text-7xl md:text-8xl"
            >
              Thank You
              <br />
              <span className="text-accent">For Booking!</span>
            </h2>

            <p className="mt-6 text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
              Choose your appointment below
            </p>

            <div className="mt-2 flex justify-center md:justify-start">
              <ChevronDown
                aria-hidden
                className="size-6 text-muted-foreground"
                strokeWidth={1.25}
              />
            </div>
          </div>
        </div>

        {/* Booking CTA — Instagram DM */}
        <div className="mt-14 flex flex-col items-center gap-4">
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
          <p className="max-w-md text-center text-xs text-muted-foreground/80">
            Adora books exclusively through Instagram. DM{" "}
            <a
              href={BRAND.booking.dmUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent hover:underline"
            >
              &ldquo;{BRAND.booking.keyword}&rdquo; to @{BRAND.contact.instagram}
            </a>{" "}
            to reserve your appointment.
          </p>
        </div>

        {/* New-client callout — handwritten style */}
        <div className="mt-16 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
          <div className="text-center sm:text-right">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground">
              New clients get{" "}
              <span className="text-accent">${BRAND.offers.newClient.discountUsd} OFF</span>{" "}
              &hearts;
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/70">
              @{BRAND.contact.instagram}
            </p>
          </div>
          <svg
            aria-hidden
            className="hidden h-8 w-16 text-accent sm:block"
            viewBox="0 0 64 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 6 C 12 4, 30 18, 48 22" />
            <path d="M48 22 L 44 16 M 48 22 L 54 18" />
          </svg>
        </div>
      </div>
    </section>
  );
}
