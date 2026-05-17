import Link from "next/link";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { PromoBanner } from "@/components/site/promo-banner";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export const metadata = { title: "Book" };

export default function BookPage() {
  return (
    <>
      <PromoBanner />
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="font-[family-name:var(--font-display)] text-7xl text-foreground">
          Book
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          The 3-step Vagaro → Zelle → DM flow comes online in Phase 2. For now
          you can start on Vagaro and message Adora directly.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-full px-7">
            <a
              href={BRAND.bookingUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Book on Vagaro
            </a>
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
