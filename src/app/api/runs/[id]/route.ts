import { db } from "@/server/db";
import { env } from "@/server/env";
import { json } from "@/server/http";
import { userRoute } from "@/server/route";
import { getRun, refreshRunHealth } from "@/server/services/runs";

export const dynamic = "force-dynamic";

/** Run status + persisted events after a cursor (used for live monitoring polling). */
export const GET = userRoute(async (req, _user, p) => {
  const after = Number(new URL(req.url).searchParams.get("after") || 0);
  const pre = await getRun(p.id);
  await refreshRunHealth(pre.campaign_id);
  const run = await getRun(p.id);
  const events = await db()`
    select e.id, e.type, e.message, e.data, e.created_at, e.candidate_id, e.attempt_id, c.domain
    from run_events e left join candidates c on c.id = e.candidate_id
    where e.run_id = ${p.id} and e.id > ${Number.isFinite(after) ? after : 0} order by e.id limit 500`;
  const counts = await db()`select status, count(*)::int as n from attempts where run_id = ${p.id} group by status`;
  const { runner_token_hash: _h, ...safe } = run as typeof run & { runner_token_hash?: string };
  const hbAge = run.heartbeat_at ? (Date.now() - new Date(run.heartbeat_at).getTime()) / 1000 : null;
  return json({
    run: safe,
    events,
    attemptCounts: Object.fromEntries(counts.map((c) => [c.status, c.n])),
    heartbeatAgeSeconds: hbAge,
    heartbeatStale: ["running", "stopping"].includes(run.status) && hbAge !== null && hbAge > env.heartbeatStaleSeconds,
    serverTime: new Date().toISOString(),
  });
});
