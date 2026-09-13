import { CircleDollarSign, Eye, RefreshCw, UserMinus } from "lucide-react";
import { T } from "@/components/site/t";
import { IMPORTANT } from "@/lib/i18n/copy";

const ITEMS = [
  { icon: CircleDollarSign, ...IMPORTANT.deposits },
  { icon: UserMinus, ...IMPORTANT.guests },
  { icon: Eye, ...IMPORTANT.fills },
  { icon: RefreshCw, ...IMPORTANT.foreignFills },
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
            <T {...IMPORTANT.heading} />
          </h2>
          <div
            aria-hidden
            className="mt-6 h-px w-48 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
          />
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
          {ITEMS.map((item, i) => (
            <div
              key={String(item.title.en)}
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
                <T {...item.title} />
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <T {...item.body} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
