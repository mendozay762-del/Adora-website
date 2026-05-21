import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/site/icons";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
      <Image
        src="/brand/logo.png"
        alt={BRAND.name}
        width={96}
        height={96}
        className="h-20 w-20"
      />
      <p className="mt-8 font-[family-name:var(--font-editorial)] text-7xl font-light tracking-[0.15em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-editorial)] text-3xl font-light tracking-[0.1em] text-foreground sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        This page wandered off &mdash; but you&rsquo;re only a tap away from
        booking your next set.
      </p>
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/">Back to Home</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full border-accent/40 px-8"
        >
          <a
            href={BRAND.booking.dmUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <InstagramIcon className="size-4" />
            Book via Instagram
          </a>
        </Button>
      </div>
    </main>
  );
}
