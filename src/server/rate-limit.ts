import "server-only";
import { db } from "./db";
import { HttpError } from "./http";

/** Fixed-window rate limiter persisted in Postgres (works across serverless instances). */
export async function rateLimit(key: string, limit: number, windowSeconds: number): Promise<void> {
  const sql = db();
  const [row] = await sql<{ count: number }[]>`
    insert into rate_limits (key, window_start, count)
    values (${key}, to_timestamp(floor(extract(epoch from now()) / ${windowSeconds}) * ${windowSeconds}), 1)
    on conflict (key, window_start) do update set count = rate_limits.count + 1
    returning count`;
  if (Math.random() < 0.02) {
    await sql`delete from rate_limits where window_start < now() - interval '1 day'`;
  }
  if (row.count > limit) throw new HttpError(429, "Too many requests, slow down.");
}
