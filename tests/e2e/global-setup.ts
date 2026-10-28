import { spawn, type ChildProcess } from "node:child_process";
import { createTestDatabase } from "../helpers/db";
import { E2E, serverEnv } from "./env";
import { startFakeSupabase } from "./fixtures/fake-supabase";
import { startFakeBrave, startFixtureSites } from "./fixtures/sites";

async function waitFor(url: string, ms: number) {
  const until = Date.now() + ms;
  while (Date.now() < until) {
    try {
      const r = await fetch(url);
      if (r.status < 500 || r.status === 503) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

export default async function globalSetup() {
  const db = await createTestDatabase();
  const supa = await startFakeSupabase({
    port: E2E.supabasePort,
    users: { [E2E.owner.email]: E2E.owner.password, [E2E.intruder.email]: E2E.intruder.password },
    serviceKey: E2E.serviceKey,
    anonKey: E2E.anonKey,
  });
  const sites = await startFixtureSites(E2E.sitesPort);
  const brave = await startFakeBrave(E2E.bravePort, E2E.braveKey);
  const next: ChildProcess = spawn("npx", ["next", "start", "-p", String(E2E.port)], {
    env: { ...process.env, ...serverEnv(db.url) },
    stdio: ["ignore", "pipe", "pipe"],
  });
  next.stdout?.on("data", (d) => process.env.E2E_VERBOSE && process.stdout.write(`[next] ${d}`));
  next.stderr?.on("data", (d) => process.stderr.write(`[next] ${d}`));
  await waitFor(`${E2E.baseUrl}/api/health`, 60000);
  process.env.E2E_DATABASE_URL = db.url;
  return async () => {
    next.kill("SIGTERM");
    await Promise.all([supa.close(), sites.close(), brave.close()]);
    await new Promise((r) => setTimeout(r, 500));
    await db.drop();
  };
}
