import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Policies", href: "/policies" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <Link
          href="/"
          aria-label={`${BRAND.name} home`}
          className="group flex items-center gap-2"
        >
          <Image
            src="/brand/logo.png"
            alt={BRAND.name}
            width={56}
            height={56}
            priority
            className="h-12 w-12 transition-transform group-hover:scale-[1.03] sm:h-14 sm:w-14"
          />
          <span className="sr-only">{BRAND.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" className="rounded-full px-5">
          <Link href="/book">Book</Link>
        </Button>
      </div>
    </header>
  );
}
