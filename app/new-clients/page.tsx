import Link from "next/link";
import { InstagramIcon } from "@/components/site/icons";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "New Clients",
  description:
    "Everything new clients need before their first lash or brow appointment with Dora at Adora Lashes and Brows — booking, deposit, pre-care, studio policies, and consent.",
};

const STEPS = [
  {
    n: "01",
    title: "Reach Out",
    body: `Send a DM with "${BRAND.booking.keyword}" to @${BRAND.contact.instagram} on Instagram. Dora books exclusively through DMs so she can tailor every appointment to you.`,
  },
  {
    n: "02",
    title: "Secure Your Slot",
    body: `A non-refundable $${BRAND.deposit} deposit via Zelle confirms your appointment and goes toward your service total. Payment details are shared when you book.`,
  },
  {
    n: "03",
    title: "Sign Your Consent Form",
    body: "First-time clients complete a quick consent form covering health history, allergies, and aftercare. It's sent with your confirmation or signed in studio.",
  },
];

const PRECARE = [
  "Arrive 15 minutes early so we have time for a thorough consultation.",
  "Come with a clean face — no makeup, mascara, contacts, or oil-based products near the eyes.",
  "Avoid caffeine, energy drinks, and stimulants — comfort matters during a 2–3 hour appointment.",
  "Wear warm, comfortable clothing.",
  "Please reschedule if you have pink eye, a stye, or any eye irritation.",
  "Do not curl your lashes before the appointment.",
];

const POLICIES = [
  {
    title: "Cancellations",
    body: "48 hours advance notice is requested. Less than 24 hours is charged 50% of the service; no-shows are charged 100% and lose future booking privileges.",
  },
  {
    title: "Deposits",
    body: `A non-refundable $${BRAND.deposit} Zelle deposit secures every appointment and is applied to your total.`,
  },
  {
    title: "No Extra Guests",
    body: "The studio is your private space — please make arrangements ahead of time. No additional guests can be accommodated.",
  },
  {
    title: "No Phone Use",
    body: "Phones must stay down during your appointment. Your eyes stay closed and still so Dora can do her best, safest work.",
  },
  {
    title: "Fills",
    body: "Fills require 30–50% of lashes still on. Four or more weeks since your last set is considered a new full set, not a fill.",
  },
  {
    title: "Payment",
    body: "Deposits are paid via Zelle. The remaining balance is due the day of your appointment by Zelle or cash.",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <div
        aria-hidden
        className="h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
      <h2 className="mt-6 text-center font-[family-name:var(--font-editorial)] text-4xl font-light tracking-[0.1em] text-foreground sm:text-5xl">
        {children}
      </h2>
      <div
        aria-hidden
        className="mt-6 h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
    </div>
  );
}

export default function NewClientsPage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Intro */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent">
            Welcome
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.1em] text-foreground sm:text-6xl">
            NEW CLIENTS
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Welcome gorgeous &mdash; everything you need before your first visit
            is right here. A few minutes now means a smooth, relaxing, and
            beautiful appointment when you arrive.
          </p>
        </section>

        {/* How to book */}
        <section className="mx-auto max-w-5xl px-6 py-12">
          <SectionTitle>How To Book</SectionTitle>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="rounded-md border border-border/50 bg-card/50 p-7 text-center"
              >
                <div className="font-[family-name:var(--font-editorial)] text-3xl text-accent">
                  {step.n}
                </div>
                <h3 className="mt-3 text-base font-medium uppercase tracking-[0.2em] text-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Before your appointment */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <SectionTitle>Before Your Appointment</SectionTitle>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2">
            {PRECARE.map((rule, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-md border border-border/40 bg-card/40 px-6 py-5 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="font-[family-name:var(--font-editorial)] text-accent">
                  &mdash;
                </span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Studio policies */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionTitle>Studio Policies</SectionTitle>
          <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border/40 bg-border/40 sm:grid-cols-2 lg:grid-cols-3">
            {POLICIES.map((policy) => (
              <div key={policy.title} className="bg-card/60 p-7">
                <h3 className="font-[family-name:var(--font-editorial)] text-xl tracking-wide text-foreground">
                  {policy.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {policy.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-5xl text-foreground sm:text-6xl">
            Ready when you are
          </h2>
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
