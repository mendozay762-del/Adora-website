import { BRAND } from "@/lib/brand";

export function PromoBanner() {
  return (
    <div className="relative w-full overflow-hidden border-b border-accent/20 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs tracking-wide text-accent sm:text-sm">
        <span className="font-medium uppercase">
          {BRAND.offers.lashSet.copy}
        </span>
      </div>
    </div>
  );
}
