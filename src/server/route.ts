import "server-only";
import { assertSameOrigin, requireUser, type SessionUser } from "./auth";
import { errorResponse } from "./http";
import { rateLimit } from "./rate-limit";

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
