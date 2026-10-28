import { runEvent } from "@/server/audit";
import { json, readJson } from "@/server/http";
import { runnerRoute } from "@/server/route";
import { EventsRequest } from "@/shared/runner-api";

export const POST = runnerRoute(async (req, r) => {
  const body = EventsRequest.parse(await readJson(req));
  for (const e of body.events) {
    await runEvent({ runId: r.run!.id, campaignId: r.run!.campaign_id, type: e.type, message: e.message, candidateId: e.candidateId, attemptId: e.attemptId, data: e.data });
  }
  return json({ ok: true });
});
