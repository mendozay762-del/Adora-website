import { Button } from "@/components/ui/button";

const BEFORE_RULES = [
  "Please arrive 15 minutes before your appointment — I like a thorough consultation to best serve you.",
  "Come with a clean face — no makeup, mascara, contacts, or oil-based products around your eyes.",
  "Avoid caffeine, energy drinks, and stimulants. Comfort is key during a 2–3 hour appointment.",
  "Wear warm, comfortable clothing. Please reschedule if you have pink eye, a stye, or any eye irritation.",
];

export function BeforeAppointment() {
  return (
    <section
      className="relative w-full px-4 py-20 sm:px-6 sm:py-24"
      aria-labelledby="before-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center">
          <div
            aria-hidden
            className="h-px w-48 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
          />
          <h2 id="before-heading" className="mt-6 text-center">
            <span className="block text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
              Before Your
            </span>
            <span className="mt-4 block font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.1em] text-foreground sm:text-6xl">
              APPOINTMENT
            </span>
          </h2>
          <div
            aria-hidden
            className="mt-6 h-px w-48 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {BEFORE_RULES.map((rule, i) => (
            <div
              key={i}
              className="flex items-center rounded-md border border-border/40 bg-card/60 px-6 py-7 text-center text-sm leading-relaxed text-muted-foreground"
            >
              <p className="mx-auto max-w-sm">{rule}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-[10px] uppercase tracking-[0.4em] text-accent">
          Absolutely no extra guest &middot; No phone use during appointment
        </p>

        <div className="mt-16 rounded-md border border-accent/30 bg-card/40 px-6 py-10 text-center shadow-[0_0_60px_-30px_oklch(0.62_0.24_305/0.5)] sm:px-10 sm:py-12">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent">
            For First-Time Clients
          </p>
          <h3 className="mt-4 font-[family-name:var(--font-editorial)] text-3xl font-light tracking-[0.1em] text-foreground sm:text-4xl">
            PLEASE SIGN CONSENT FORM
          </h3>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Every new client is required to complete a lash and brow consent
            form before service begins. It covers your health history,
            allergies, and aftercare acknowledgment &mdash; it protects you
            and ensures your appointment runs smoothly. The form will be sent
            with your booking confirmation, or available to sign in studio
            when you arrive.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              disabled
              aria-disabled="true"
              className="cursor-not-allowed rounded-full bg-primary/40 px-8 text-primary-foreground/70"
            >
              Go to Consent Form &mdash; Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
