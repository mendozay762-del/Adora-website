import Link from "next/link";
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
          The 3-step Vagaro &rarr; Zelle &rarr; DM flow comes online in Phase 2.
          Vagaro setup is still in progress &mdash; the button below activates
          once it&rsquo;s live. For now, DM &ldquo;LASHES&rdquo; on Instagram
          to reserve.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            size="lg"
            disabled
            aria-disabled="true"
            className="cursor-not-allowed rounded-full bg-primary/40 px-7 text-primary-foreground/70"
          >
            Book on Vagaro &mdash; Coming Soon
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-accent/40 px-7"
          >
            <a
              href={BRAND.contact.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              DM &ldquo;LASHES&rdquo; on Instagram
            </a>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          $20 Zelle deposit to {BRAND.contact.phone} secures your slot.
          Non-refundable. 48-hour cancellation notice required.
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
