import { db } from "@/server/db";
import { json } from "@/server/http";

export const dynamic = "force-dynamic";

/** Public health check. Reports only whether configuration NAMES are present — never values. */
export async function GET() {
  const names = [
    "DATABASE_URL",
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "SUPABASE_SERVICE_ROLE_KEY",
    "ADMIN_EMAILS",
    "RUNNER_API_SECRET",
    "GITHUB_REPOSITORY_SLUG",
    "GITHUB_DISPATCH_TOKEN",
  ];
  const configured = Object.fromEntries(names.map((n) => [n, !!process.env[n]]));
  let database = false;
  try {
    await db()`select 1`;
    database = true;
  } catch {
    database = false;
  }
  const ok = database && Object.values(configured).every(Boolean);
  return json({ ok, database, configured }, ok ? 200 : 503);
}
