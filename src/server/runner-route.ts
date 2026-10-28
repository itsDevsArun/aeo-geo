import "server-only";
import { errorResponse, HttpError } from "./http";
import { authenticateRunner, type RunnerContext } from "./runner-auth";

type Params = Record<string, string>;
type Ctx = { params: Promise<Params> };

/**
 * Wrap a runner API handler: shared secret + per-run token.
 * Kept separate from dashboard auth so the GitHub-only orchestrator can serve
 * these handlers without loading Supabase/Next.js session code.
 */
export function runnerRoute(fn: (req: Request, runner: RunnerContext, params: Params) => Promise<Response>, opts: { claim?: boolean } = {}) {
  return async (req: Request, ctx?: Ctx) => {
    try {
      if (req.method !== "POST") throw new HttpError(405, "Method not allowed");
      const runner = await authenticateRunner(req, { requireRunToken: !opts.claim });
      return await fn(req, runner, (await ctx?.params) ?? {});
    } catch (e) {
      return errorResponse(e);
    }
  };
}
