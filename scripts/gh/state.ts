/**
 * Durable state for GitHub-only mode.
 *
 * Each GitHub Actions job gets a fresh, empty Postgres service container. The
 * durable copy of the database lives in the private `outreach-state` branch as
 * one JSON file per table (state/db/<table>.json), next to the evidence files.
 * The job restores it at the start and commits + pushes it at checkpoints.
 * Only one job runs at a time (workflow concurrency group), so there is a
 * single writer.
 */
import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { promisify } from "node:util";
import type postgres from "postgres";

const run = promisify(execFile);

/** Tables persisted, in a dependency-friendly order. rate_limits is transient. */
export const STATE_TABLES = [
  "campaigns", "businesses", "business_domains", "suppressions", "runs", "discovery_queries",
  "candidates", "contact_pages", "form_adapters", "approvals", "message_templates", "template_versions",
  "attempts", "evidence", "run_events", "audit_events",
] as const;

const SEQUENCES: [string, string][] = [["run_events", "id"], ["audit_events", "id"]];

export async function exportDb(sql: postgres.Sql, stateDir: string): Promise<void> {
  const dir = join(stateDir, "state", "db");
  await mkdir(dir, { recursive: true });
  for (const t of STATE_TABLES) {
    const pk = await sql<{ c: string }[]>`
      select a.attname as c from pg_index i join pg_attribute a on a.attrelid = i.indrelid and a.attnum = any(i.indkey)
      where i.indrelid = ${t}::regclass and i.indisprimary order by a.attnum`;
    const order = pk.map((p) => `t."${p.c}"`).join(", ") || "1";
    const rows = await sql.unsafe<{ r: unknown }[]>(`select row_to_json(t) as r from ${t} t order by ${order}`);
    const body = rows.length ? `[\n${rows.map((x) => JSON.stringify(x.r)).join(",\n")}\n]\n` : "[]\n";
    await writeFile(join(dir, `${t}.json`), body);
  }
  await writeFile(join(stateDir, "state", "FORMAT"), "outreach-state v1 (one JSON array per table)\n");
}

/** Load state into an empty, freshly migrated database. */
export async function importDb(sql: postgres.Sql, stateDir: string): Promise<{ rows: number }> {
  const dir = join(stateDir, "state", "db");
  if (!existsSync(dir)) return { rows: 0 };
  let total = 0;
  await sql.begin(async (tx) => {
    // Load in one transaction with FK/immutability triggers deferred (data was consistent when exported).
    await tx.unsafe("set local session_replication_role = replica");
    for (const t of STATE_TABLES) {
      const file = join(dir, `${t}.json`);
      if (!existsSync(file)) continue;
      const rows = JSON.parse(await readFile(file, "utf8")) as Record<string, unknown>[];
      if (!rows.length) continue;
      const cols = (await tx<{ c: string }[]>`select column_name as c from information_schema.columns where table_schema = 'public' and table_name = ${t}`).map((r) => r.c);
      const present = cols.filter((c) => c in rows[0]);
      const list = present.map((c) => `"${c}"`).join(", ");
      for (let i = 0; i < rows.length; i += 2000) {
        await tx.unsafe(`insert into ${t} (${list}) select ${list} from json_populate_recordset(null::${t}, ($1::text)::json)`, [JSON.stringify(rows.slice(i, i + 2000))]);
      }
      total += rows.length;
    }
  });
  for (const [t, c] of SEQUENCES) {
    await sql.unsafe(`select setval(pg_get_serial_sequence('${t}', '${c}'), coalesce((select max(${c}) from ${t}), 0) + 1, false)`);
  }
  return { rows: total };
}

/** Drop and recreate the public schema. Only allowed on an explicitly ephemeral database. */
export async function resetEphemeralDb(sql: postgres.Sql): Promise<void> {
  if (process.env.OUTREACH_EPHEMERAL_DB !== "1") throw new Error("Refusing to reset a database without OUTREACH_EPHEMERAL_DB=1");
  await sql.unsafe("drop schema if exists public cascade; create schema public;");
}

async function git(stateDir: string, args: string[]): Promise<string> {
  const { stdout } = await run("git", ["-C", stateDir, ...args], { maxBuffer: 64 * 1024 * 1024 });
  return stdout.trim();
}

const BOT = ["-c", "user.name=outreach-bot", "-c", "user.email=41898282+github-actions[bot]@users.noreply.github.com"];

/**
 * Commit the state worktree and push it. Throws if the push fails, so callers
 * (e.g. the pre-submit checkpoint) can refuse to proceed.
 */
export async function commitAndPush(stateDir: string, message: string): Promise<"pushed" | "unchanged"> {
  const gitDir = await git(stateDir, ["rev-parse", "--git-dir"]);
  await rm(join(gitDir.startsWith("/") ? gitDir : join(stateDir, gitDir), "index.lock"), { force: true });
  await git(stateDir, ["add", "-A"]);
  const status = await git(stateDir, ["status", "--porcelain"]);
  if (!status) {
    // Nothing new to commit, but make sure an earlier commit that failed to push is pushed now.
    const ahead = await git(stateDir, ["rev-list", "--count", "--all", "--not", "--remotes"]).catch(() => "1");
    if (ahead === "0") return "unchanged";
  } else {
    await git(stateDir, [...BOT, "commit", "-q", "-m", message.slice(0, 200)]);
  }
  await git(stateDir, ["push", "-q", "origin", "HEAD:refs/heads/outreach-state"]);
  return "pushed";
}
