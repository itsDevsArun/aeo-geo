import "server-only";
import postgres from "postgres";
import { env } from "./env";

declare global {
  var __outreachSql: postgres.Sql | undefined;
}

/** Shared Postgres client (server only). Works with the Supabase pooler. */
export function db(): postgres.Sql {
  if (!globalThis.__outreachSql) {
    globalThis.__outreachSql = postgres(env.databaseUrl, {
      max: Number(process.env.DATABASE_POOL_MAX || 5),
      idle_timeout: 20,
      connect_timeout: 15,
      prepare: false,
      onnotice: () => {},
    });
  }
  return globalThis.__outreachSql;
}

export type Sql = postgres.Sql | postgres.TransactionSql;

export function isUniqueViolation(e: unknown): boolean {
  return typeof e === "object" && e !== null && (e as { code?: string }).code === "23505";
}
