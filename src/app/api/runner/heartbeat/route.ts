import { json } from "@/server/http";
import { runnerRoute } from "@/server/route";
import { heartbeat } from "@/server/services/runs";

export const POST = runnerRoute(async (_req, r) => json(await heartbeat(r.run!)));
