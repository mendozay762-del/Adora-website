import Link from "next/link";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { PromoBanner } from "@/components/site/promo-banner";

export const metadata = { title: "Policies" };

export default function PoliciesPage() {
  return (
    <>
      <PromoBanner />
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="font-[family-name:var(--font-display)] text-7xl text-foreground">
          Policies
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Cancellation, $20 Zelle deposit, pre-care, aftercare — coming in
          Phase 3.
        </p>
        <div className="mt-10">
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
