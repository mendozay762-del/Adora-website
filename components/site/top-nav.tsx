import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/site/mobile-nav";
import { BRAND } from "@/lib/brand";

const NAV_LINKS = [
  { label: "Book", href: "/book" },
  { label: "New Clients", href: "/new-clients" },
  { label: "Portfolio", href: "/gallery" },
  { label: "Meet Adora", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Aftercare", href: "/aftercare" },
  { label: "Policies", href: "/policies" },
  { label: "Contact", href: "/contact" },
] as const;

export function TopNav() {
  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-5 sm:px-6 sm:py-6">
        <Link
          href="/"
          aria-label={`${BRAND.name} home`}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/brand/logo.png"
            alt={BRAND.name}
            width={48}
            height={48}
            priority
            className="h-10 w-10 md:h-12 md:w-12"
          />
        </Link>

        <nav
          className="hidden flex-1 items-center justify-end gap-6 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
