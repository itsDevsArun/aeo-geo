import "server-only";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { env } from "./env";
import { HttpError } from "./http";

export interface SessionUser {
  id: string;
  email: string;
}

export async function supabaseServer() {
  const store = await cookies();
  return createServerClient(env.supabaseUrl, env.supabaseAnonKey, {
    cookies: {
      getAll: () => store.getAll(),
      setAll: (list) => {
        try {
          for (const { name, value, options } of list) {
            store.set(name, value, { ...options, httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production" });
          }
        } catch {
          // Server components cannot set cookies; the proxy refreshes sessions.
        }
      },
    },
  });
}

export function isAllowedEmail(email: string | undefined | null): boolean {
  return !!email && env.adminEmails.includes(email.toLowerCase());
}

/** Verifies the session with Supabase Auth (network-validated, not just a cookie decode). */
export async function getCurrentUser(): Promise<SessionUser | null> {
  const sb = await supabaseServer();
  const { data, error } = await sb.auth.getUser();
  if (error || !data.user?.email) return null;
  if (!isAllowedEmail(data.user.email)) return null;
  return { id: data.user.id, email: data.user.email.toLowerCase() };
}

export async function requireUser(): Promise<SessionUser> {
  const user = await getCurrentUser();
  if (!user) throw new HttpError(401, "Authentication required");
  return user;
}

export async function requirePageUser(): Promise<SessionUser> {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

/** CSRF defence for cookie-authenticated mutations: require a same-origin request. */
export function assertSameOrigin(req: Request): void {
  const method = req.method.toUpperCase();
  if (method === "GET" || method === "HEAD") return;
  const origin = req.headers.get("origin");
  const site = req.headers.get("sec-fetch-site");
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  if (site && site !== "same-origin") throw new HttpError(403, "Cross-site request blocked");
  if (!origin) throw new HttpError(403, "Missing Origin header");
  try {
    if (new URL(origin).host !== host) throw new Error("mismatch");
  } catch {
    throw new HttpError(403, "Cross-origin request blocked");
  }
}
