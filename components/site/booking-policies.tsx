import Link from "next/link";
import {
  Calendar,
  Clock,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

const POLICIES = [
  {
    icon: Calendar,
    title: "Cancellations",
    body: "I respectfully request at least 48 hours advance notice. Less than 24 hours = 50% of the reserved service. No-shows are charged 100% and lose future booking privileges.",
  },
  {
    icon: DollarSign,
    title: "Payment",
    body: "Deposit accepted via Zelle only. The remaining balance is due the day of your appointment, payable through Zelle or cash.",
  },
  {
    icon: ShieldCheck,
    title: "Refunds",
    body: "All sales are final and services are non-refundable. Deposits are transferable once to a reschedule — miss that reschedule and a new deposit is required to rebook.",
  },
  {
    icon: Clock,
    title: "Late / No-Show",
    body: "Late arrivals may need to reschedule based on remaining time. No-shows are charged 100% of the service and will no longer be able to book with Dora.",
  },
];

export function BookingPolicies() {
  return (
    <section
      className="relative w-full px-4 py-20 sm:px-6 sm:py-24"
      aria-labelledby="policies-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center">
          <div
            aria-hidden
            className="h-px w-48 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
          />
          <h2 id="policies-heading" className="mt-6 text-center">
            <span className="block font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.08em] text-foreground sm:text-6xl">
              BOOKING
            </span>
            <span className="-mt-3 block font-[family-name:var(--font-display)] text-5xl text-accent sm:-mt-4 sm:text-6xl">
              Policies
            </span>
          </h2>
          <div
            aria-hidden
            className="mt-6 h-px w-48 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
          />
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
          {POLICIES.map((policy, i) => (
            <div
              key={policy.title}
              className={`flex flex-col items-center px-2 text-center md:px-6 ${
                i !== POLICIES.length - 1
                  ? "md:border-r md:border-border/40"
                  : ""
              }`}
            >
              <policy.icon
                aria-hidden
                className="size-7 text-accent"
                strokeWidth={1.25}
              />
              <h3 className="mt-5 font-[family-name:var(--font-editorial)] text-2xl tracking-wide text-foreground">
                {policy.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {policy.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/policies"
            className="text-[11px] uppercase tracking-[0.35em] text-accent transition-colors hover:text-foreground"
          >
            Read the full policies &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
