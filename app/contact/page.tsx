import Link from "next/link";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <TopNav />
      <main className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="font-[family-name:var(--font-editorial)] text-6xl tracking-[0.08em] text-foreground sm:text-7xl">
          CONTACT
        </h1>
        <p className="mt-6 max-w-xl text-base text-muted-foreground">
          Full contact page with embedded studio map &mdash; coming in Phase 3.
          For now, the homepage Contact Info block has the phone, IG, TikTok,
          and address.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
