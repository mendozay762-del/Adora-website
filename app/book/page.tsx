import Link from "next/link";
import { InstagramIcon } from "@/components/site/icons";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export const metadata = { title: "Book" };

export default function BookPage() {
  return (
    <>
      <TopNav />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="font-[family-name:var(--font-editorial)] text-6xl tracking-[0.08em] text-foreground sm:text-7xl">
          BOOK
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Dora books exclusively through Instagram &mdash; it keeps things
          personal and lets her tailor every appointment to you. Send a DM with
          &ldquo;{BRAND.booking.keyword}&rdquo; and she&rsquo;ll get you on the
          calendar.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full px-7 shadow-[0_0_40px_-12px_oklch(0.74_0.22_300/0.7)]"
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

        <p className="mt-6 text-xs text-muted-foreground">
          A ${BRAND.deposit} Zelle deposit secures your slot &mdash; payment
          details are shared when you book. Non-refundable. 48-hour
          cancellation notice required.
        </p>

        <div className="mt-12">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
