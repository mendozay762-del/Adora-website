import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseEnv } from "./env";

export function createClient() {
  const env = getSupabaseEnv();
  if (!env.configured) return null;
  return createBrowserClient(env.url, env.anonKey);
}
