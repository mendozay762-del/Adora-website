import Link from "next/link";
import {
  Calendar,
  Clock,
  DollarSign,
  ShieldCheck,
} from "lucide-react";
import { T } from "@/components/site/t";
import { BOOKING_POLICIES } from "@/lib/i18n/copy";

const POLICIES = [
  { icon: Calendar, ...BOOKING_POLICIES.cancellations },
  { icon: DollarSign, ...BOOKING_POLICIES.payment },
  { icon: ShieldCheck, ...BOOKING_POLICIES.refunds },
  { icon: Clock, ...BOOKING_POLICIES.late },
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
              <T {...BOOKING_POLICIES.primary} />
            </span>
            <span className="-mt-3 block font-[family-name:var(--font-display)] text-5xl text-accent sm:-mt-4 sm:text-6xl">
              <T {...BOOKING_POLICIES.secondary} />
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
              key={String(policy.title.en)}
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
                <T {...policy.title} />
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <T {...policy.body} />
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/policies"
            className="text-[11px] uppercase tracking-[0.35em] text-accent transition-colors hover:text-foreground"
          >
            <T {...BOOKING_POLICIES.readFull} />
          </Link>
        </div>
      </div>
    </section>
  );
}
