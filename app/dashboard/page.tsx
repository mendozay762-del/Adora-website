import Link from "next/link";
import { getSupabaseEnv } from "@/lib/supabase/env";

export const metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  const env = getSupabaseEnv();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-6xl text-foreground">
        Dashboard
      </h1>
      <p className="mt-2 text-sm uppercase tracking-[0.25em] text-accent">
        Admin · Adora Lashes &amp; Brows
      </p>

      {!env.configured ? (
        <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6">
          <p className="font-medium text-accent">Supabase not configured</p>
          <p className="mt-2 text-sm text-muted-foreground">
            The admin dashboard is scaffolded but inactive. Phase 5 wires this
            up to a real Supabase project so Adora can edit the promo banner,
            add testimonials, and upload gallery photos without code changes.
          </p>
        </div>
      ) : (
        <p className="mt-10 text-sm text-muted-foreground">
          Dashboard content coming in Phase 5.
        </p>
      )}

      <div className="mt-12 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
