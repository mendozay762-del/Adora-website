import Link from "next/link";
import { InstagramIcon } from "@/components/site/icons";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Policies",
  description:
    "Cancellation, deposit, no-show, refund, and studio policies for Adora Lashes and Brows in Dallas, Texas.",
};

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-medium text-foreground">{children}</strong>;
}

const BOOKING_POLICIES = [
  {
    title: "Cancellations & Rescheduling",
    body: (
      <>
        <p>
          Your appointment time is reserved for you alone. I respectfully
          request at least <Strong>48 hours notice</Strong> for any
          cancellation or reschedule. Less than 24 hours notice results in a{" "}
          <Strong>50% charge</Strong> of the reserved service.
        </p>
        <p className="mt-3">
          Your deposit can be <Strong>transferred once</Strong> to a new
          appointment if you reschedule in time. If you miss that rescheduled
          appointment, the deposit is <Strong>forfeited</Strong> and a new
          deposit is required to rebook.
        </p>
      </>
    ),
  },
  {
    title: "Deposits & Payment",
    body: (
      <>
        <p>
          A <Strong>non-refundable deposit</Strong> secures every appointment{" "}
          <Strong>except Lash Fills</Strong>, which can be booked without one.
          Lash Extensions during the current $50 promotion require a{" "}
          <Strong>$20 Zelle deposit</Strong>; deposit amounts for other services
          are confirmed when you reach out to book.
        </p>
        <p className="mt-3">
          Deposits are accepted <Strong>via Zelle only</Strong>. The remaining
          balance is due the day of your appointment, by Zelle or cash.{" "}
          <Strong>Sunday appointments</Strong> are by request and carry a{" "}
          <Strong>$20 surcharge</Strong> on top of the service price.
        </p>
      </>
    ),
  },
  {
    title: "No-Show",
    body: (
      <p>
        No-shows are charged{" "}
        <Strong>100% of the reserved service amount</Strong> and lose the
        privilege of booking with Dora. Life happens &mdash; reach out at
        least 48 hours ahead and she&rsquo;ll work with you.
      </p>
    ),
  },
  {
    title: "Refunds",
    body: (
      <p>
        <Strong>All sales are final</Strong> and services are non-refundable.
        Deposit terms are covered above. If anything about your service needs
        attention, message Dora within 72 hours so she can address it
        directly.
      </p>
    ),
  },
];

const STUDIO_POLICIES = [
  {
    title: "In the Studio",
    body: (
      <p>
        The studio is your private space.{" "}
        <Strong>No additional guests</Strong> can be accommodated, and{" "}
        <Strong>phones go down</Strong> during your appointment &mdash; your
        eyes stay closed and still so Dora can do her best, safest work.
        Please <Strong>arrive 15 minutes early</Strong> for a thorough
        consultation.
      </p>
    ),
  },
  {
    title: "Before Your Appointment",
    body: (
      <>
        <p>
          Please reschedule if you have any of the following: pink eye, eye
          stye or cyst, eye soreness, facial skin infection, sensitive skin or
          eyes, recent facial surgery, recent microblading or permanent
          makeup, recent retinol use, or are undergoing chemotherapy.
        </p>
        <p className="mt-3">
          Come with a clean face &mdash; no makeup, contacts, or oil-based
          products near the eyes &mdash; and avoid caffeine and stimulants
          beforehand. Warm, comfortable clothing is ideal.
        </p>
      </>
    ),
  },
  {
    title: "Photography & Content",
    body: (
      <p>
        Dora films and photographs her work for Instagram and her other
        platforms. If anything from your appointment may be shared publicly,{" "}
        <Strong>she&rsquo;ll ask you in person</Strong> and have you sign a
        consent form before anything is posted.
      </p>
    ),
  },
  {
    title: "Age Policy",
    body: (
      <p>
        Clients{" "}
        <Strong>
          under 18 are welcome with a parent or guardian present
        </Strong>{" "}
        and a signed consent form on file. Please mention this when you book
        so the appointment can be set up appropriately.
      </p>
    ),
  },
];

function SectionTitle({ word }: { word: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        aria-hidden
        className="h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
      <h2 className="mt-5 text-center font-[family-name:var(--font-editorial)] text-4xl font-light tracking-[0.15em] text-foreground sm:text-5xl">
        {word}
      </h2>
      <div
        aria-hidden
        className="mt-5 h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
    </div>
  );
}

function PolicyCard({
  title,
  body,
}: {
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="rounded-md border border-border/40 bg-card/30 p-7 sm:p-8">
      <h3 className="font-[family-name:var(--font-editorial)] text-2xl tracking-wide text-foreground sm:text-3xl">
        {title}
      </h3>
      <div className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {body}
      </div>
    </div>
  );
}

export default function PoliciesPage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent">
            The Fine Print
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.12em] text-foreground sm:text-6xl">
            POLICIES
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A few essentials so your appointment runs beautifully. Please read
            before booking &mdash; submitting a deposit means you&rsquo;ve
            accepted the policies below.
          </p>
        </section>

        {/* Booking */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <SectionTitle word="BOOKING" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
            {BOOKING_POLICIES.map((p) => (
              <PolicyCard key={p.title} title={p.title} body={p.body} />
            ))}
          </div>
        </section>

        {/* At the Studio */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionTitle word="AT THE STUDIO" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
            {STUDIO_POLICIES.map((p) => (
              <PolicyCard key={p.title} title={p.title} body={p.body} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-5xl text-foreground sm:text-6xl">
            Questions?
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            DM Dora and she&rsquo;ll walk you through anything before you
            book.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
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
            <Link
              href="/"
              className="mt-4 text-sm text-muted-foreground hover:text-foreground"
            >
              &larr; Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
