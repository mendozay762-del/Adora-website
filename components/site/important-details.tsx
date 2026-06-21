import { CircleDollarSign, Eye, RefreshCw, UserMinus } from "lucide-react";

const ITEMS = [
  {
    icon: CircleDollarSign,
    title: "Deposits",
    body: "A non-refundable Zelle deposit secures your appointment and goes toward your service total. Lash extensions: $20 during the current promo. Deposit requirements for other services are confirmed when you book.",
  },
  {
    icon: UserMinus,
    title: "Guests",
    body: "I do not allow extra guests during your appointment. The studio is your private space — please make the proper arrangements ahead of time.",
  },
  {
    icon: Eye,
    title: "Fills",
    body: "Lash fills require at least 30–50% of lashes still on. 4+ weeks since your last set counts as a full set, not a fill — please plan accordingly.",
  },
  {
    icon: RefreshCw,
    title: "Foreign Fills",
    body: "I accept fills from other artists if the existing work is in good condition. If not, a removal plus a new full set will be required.",
  },
];

export function ImportantDetails() {
  return (
    <section
      className="relative w-full bg-card/30 px-4 py-20 sm:px-6 sm:py-24"
      aria-labelledby="important-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center">
          <div
            aria-hidden
            className="h-px w-48 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
          />
          <h2
            id="important-heading"
            className="mt-6 text-center font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.12em] text-foreground sm:text-6xl"
          >
            IMPORTANT
          </h2>
          <div
            aria-hidden
            className="mt-6 h-px w-48 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
          />
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col items-center px-2 text-center md:px-6 ${
                i !== ITEMS.length - 1
                  ? "md:border-r md:border-border/40"
                  : ""
              }`}
            >
              <item.icon
                aria-hidden
                className="size-7 text-accent"
                strokeWidth={1.25}
              />
              <h3 className="mt-5 font-[family-name:var(--font-editorial)] text-2xl tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
