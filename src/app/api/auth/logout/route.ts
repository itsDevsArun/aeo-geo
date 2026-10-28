import { assertSameOrigin, supabaseServer } from "@/server/auth";
import { errorResponse, json } from "@/server/http";

export async function POST(req: Request) {
  try {
    assertSameOrigin(req);
    const sb = await supabaseServer();
    await sb.auth.signOut();
    return json({ ok: true });
  } catch (e) {
    return errorResponse(e);
  }
}
