import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/site/icons";
import { Footer } from "@/components/site/footer";
import { TopNav } from "@/components/site/top-nav";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Portfolio",
  description: "Selected lash and brow work by Dora at Adora Lashes and Brows — Dallas, Texas.",
};

const FEATURED = {
  src: "/brand/IMG_7763.jpeg",
  alt: "Wispy volume lash extensions, open eye macro",
};

const GRID = [
  { src: "/brand/IMG_0454.jpeg", alt: "Dramatic volume lash set, close up" },
  { src: "/brand/IMG_0363.jpeg", alt: "Fresh lash and brow set on a client" },
];

export default function PortfolioPage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="text-[10px] uppercase tracking-[0.5em] text-accent">
            Selected Work
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-editorial)] text-5xl font-light tracking-[0.12em] text-foreground sm:text-6xl">
            PORTFOLIO
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A look at recent sets &mdash; each one custom-built to its client.
            Soft natural to dramatic fluttery, never one-size-fits-all.
          </p>
        </section>

        {/* Featured image */}
        <section className="mx-auto max-w-5xl px-6 pb-8 sm:pb-12">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-accent/20 shadow-[0_0_80px_-20px_oklch(0.62_0.24_300/0.35)] sm:aspect-[16/10]">
            <Image
              src={FEATURED.src}
              alt={FEATURED.alt}
              fill
              sizes="(min-width: 640px) 80vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* 2-col grid */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            {GRID.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border/40"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Follow on IG */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
            More on Instagram
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl text-foreground sm:text-6xl">
            Follow Along
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground sm:text-base">
            New sets posted weekly. Follow @{BRAND.contact.instagram} to see the
            latest work &mdash; and DM &ldquo;{BRAND.booking.keyword}&rdquo; to
            book your own.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 shadow-[0_0_40px_-12px_oklch(0.74_0.22_300/0.7)]"
            >
              <a
                href={BRAND.contact.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <InstagramIcon className="size-4" />
                Follow on Instagram
              </a>
            </Button>
            <Link
              href="/"
              className="mt-4 text-sm text-muted-foreground hover:text-foreground"
            >
              &larr; Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
