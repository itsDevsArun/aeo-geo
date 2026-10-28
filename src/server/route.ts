import "server-only";
import { assertSameOrigin, requireUser, type SessionUser } from "./auth";
import { errorResponse, HttpError } from "./http";
import { rateLimit } from "./rate-limit";
import { authenticateRunner, type RunnerContext } from "./runner-auth";

type Params = Record<string, string>;
type Ctx = { params: Promise<Params> };

/** Wrap a dashboard API handler: auth, CSRF check, rate limit, error mapping. */
export function userRoute(
  fn: (req: Request, user: SessionUser, params: Params) => Promise<Response>,
  opts: { limitPerMinute?: number } = {},
) {
  return async (req: Request, ctx: Ctx) => {
    try {
      assertSameOrigin(req);
      const user = await requireUser();
      if (req.method !== "GET") {
        // Global mutation budget plus a per-endpoint budget (ids stripped from the path).
        const bucket = new URL(req.url).pathname.replace(/[0-9a-f-]{36}/gi, ":id");
        await rateLimit(`user:${user.email}:all`, 240, 60);
        await rateLimit(`user:${user.email}:${req.method}:${bucket}`, opts.limitPerMinute ?? 120, 60);
      }
      return await fn(req, user, (await ctx?.params) ?? {});
    } catch (e) {
      return errorResponse(e);
    }
  };
}

/** Wrap a runner API handler: shared secret + per-run token. */
export function runnerRoute(fn: (req: Request, runner: RunnerContext, params: Params) => Promise<Response>, opts: { claim?: boolean } = {}) {
  return async (req: Request, ctx: Ctx) => {
    try {
      if (req.method !== "POST") throw new HttpError(405, "Method not allowed");
      const runner = await authenticateRunner(req, { requireRunToken: !opts.claim });
      return await fn(req, runner, (await ctx?.params) ?? {});
    } catch (e) {
      return errorResponse(e);
    }
  };
}
