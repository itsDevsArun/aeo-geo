import { randomBytes } from "node:crypto";
import postgres from "postgres";
import { migrate } from "../../scripts/migrate";

/**
 * Creates an isolated, migrated database on the real Postgres server pointed
 * to by TEST_DATABASE_URL (admin connection), and returns its URL.
 */
export async function createTestDatabase(): Promise<{ url: string; drop: () => Promise<void> }> {
  const admin = process.env.TEST_DATABASE_URL;
  if (!admin) throw new Error("TEST_DATABASE_URL must point to a Postgres server for integration tests");
  const name = `outreach_test_${randomBytes(5).toString("hex")}`;
  const a = postgres(admin, { max: 1, onnotice: () => {} });
  await a.unsafe(`create database ${name}`);
  await a.end();
  const u = new URL(admin);
  u.pathname = `/${name}`;
  await migrate(u.toString(), () => {});
  return {
    url: u.toString(),
    drop: async () => {
      const b = postgres(admin, { max: 1, onnotice: () => {} });
      await b.unsafe(`drop database if exists ${name} with (force)`);
      await b.end();
    },
  };
}

/** Configure env for server modules used directly in integration tests. */
export function setTestEnv(dbUrl: string) {
  process.env.DATABASE_URL = dbUrl;
  process.env.DATABASE_POOL_MAX = "20";
  process.env.GITHUB_DISPATCH_MODE = "disabled";
  process.env.GITHUB_REPOSITORY_SLUG = "test/test";
  process.env.GITHUB_DISPATCH_TOKEN = "unused";
  process.env.ADMIN_EMAILS = "owner@example.com";
  process.env.RUNNER_API_SECRET = "x".repeat(40);
}
