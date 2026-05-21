"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="font-[family-name:var(--font-editorial)] text-3xl font-light tracking-[0.1em] text-foreground sm:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        Sorry about that &mdash; please try again. If it keeps happening, you
        can always reach Adora directly on Instagram.
      </p>
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Button
          size="lg"
          onClick={() => reset()}
          className="rounded-full px-8"
        >
          Try Again
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full border-accent/40 px-8"
        >
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
