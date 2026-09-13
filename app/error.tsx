"use client";

import Link from "next/link";
import { T } from "@/components/site/t";
import { Button } from "@/components/ui/button";
import { COMMON, ERROR_PAGE as EP } from "@/lib/i18n/copy";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="font-[family-name:var(--font-editorial)] text-3xl font-light tracking-[0.1em] text-foreground sm:text-4xl">
        <T {...EP.heading} />
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        <T {...EP.body} />
      </p>
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Button
          size="lg"
          onClick={() => reset()}
          className="rounded-full px-8"
        >
          <T {...EP.tryAgain} />
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full border-accent/40 px-8"
        >
          <Link href="/">
            <T {...COMMON.backToHomeButton} />
          </Link>
        </Button>
      </div>
    </main>
  );
}
