import { z } from "zod";
import { assertSameOrigin, isAllowedEmail, supabaseServer } from "@/server/auth";
import { audit } from "@/server/audit";
import { clientIp, errorResponse, HttpError, json, readJson } from "@/server/http";
import { rateLimit } from "@/server/rate-limit";

const Body = z.object({ email: z.string().trim().toLowerCase().email().max(200), password: z.string().min(1).max(200) });

export async function POST(req: Request) {
  try {
    assertSameOrigin(req);
    const ip = clientIp(req);
    await rateLimit(`login-ip:${ip}`, 10, 900);
    const { email, password } = Body.parse(await readJson(req, 4096));
    await rateLimit(`login-email:${email}`, 5, 900);
    if (!isAllowedEmail(email)) {
      await audit(email, "auth.login_denied", "user", null, { reason: "not_allowlisted", ip });
      throw new HttpError(401, "Invalid email or password");
    }
    const sb = await supabaseServer();
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error || !data.user) {
      await audit(email, "auth.login_failed", "user", null, { ip });
      throw new HttpError(401, "Invalid email or password");
    }
    await audit(email, "auth.login", "user", data.user.id, { ip });
    return json({ ok: true });
  } catch (e) {
    return errorResponse(e);
  }
}
