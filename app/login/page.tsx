import Link from "next/link";
import { getSupabaseEnv } from "@/lib/supabase/env";

export const metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  const env = getSupabaseEnv();

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border/60 bg-card p-8 shadow-[0_0_60px_-20px_oklch(0.62_0.24_300/0.3)]">
        <h1 className="font-[family-name:var(--font-display)] text-5xl text-foreground">
          Admin
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to manage promo banner, testimonials, and portfolio.
        </p>

        {!env.configured ? (
          <div className="mt-8 rounded-md border border-accent/30 bg-accent/5 p-4 text-sm text-muted-foreground">
            <p className="font-medium text-accent">Setup needed</p>
            <p className="mt-2">
              Supabase environment variables are not configured yet. Set{" "}
              <code className="text-foreground">NEXT_PUBLIC_SUPABASE_URL</code>{" "}
              and{" "}
              <code className="text-foreground">
                NEXT_PUBLIC_SUPABASE_ANON_KEY
              </code>{" "}
              in Vercel project settings to enable admin login.
            </p>
          </div>
        ) : (
          <p className="mt-8 text-sm text-muted-foreground">
            Login form coming in Phase 5.
          </p>
        )}

        <div className="mt-8 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
