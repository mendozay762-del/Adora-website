import Image from "next/image";
import Link from "next/link";
import { LanguageToggle } from "@/components/site/language-toggle";
import { MobileNav } from "@/components/site/mobile-nav";
import { T } from "@/components/site/t";
import { BRAND } from "@/lib/brand";
import { NAV } from "@/lib/i18n/copy";

const NAV_LINKS = [
  { label: NAV.book, href: "/book" },
  { label: NAV.newClients, href: "/new-clients" },
  { label: NAV.portfolio, href: "/gallery" },
  { label: NAV.meetDora, href: "/about" },
  { label: NAV.services, href: "/services" },
  { label: NAV.aftercare, href: "/aftercare" },
  { label: NAV.policies, href: "/policies" },
  { label: NAV.contact, href: "/contact" },
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
              <T {...link.label} />
            </Link>
          ))}
        </nav>

        {/* Top-right cluster. On desktop the toggle trails the nav links; on
            mobile it sits immediately left of the hamburger so a Spanish
            speaker can see the site offers their language without first
            opening the menu. */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <LanguageToggle />
          <MobileNav links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
