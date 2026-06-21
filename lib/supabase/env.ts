type ConfiguredEnv = {
  configured: true;
  url: string;
  anonKey: string;
};

type UnconfiguredEnv = {
  configured: false;
  url: null;
  anonKey: null;
};

export type SupabaseEnv = ConfiguredEnv | UnconfiguredEnv;

export function getSupabaseEnv(): SupabaseEnv {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return { configured: false, url: null, anonKey: null };
  }

  return { configured: true, url, anonKey };
}
