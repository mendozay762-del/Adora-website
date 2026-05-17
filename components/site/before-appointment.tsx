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
        <h2 id="before-heading" className="text-center">
          <span className="block text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            Before Your
          </span>
          <span className="mt-4 block font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.1em] text-foreground sm:text-6xl">
            APPOINTMENT
          </span>
        </h2>

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
      </div>
    </section>
  );
}
