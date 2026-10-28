/**
 * TEST DOUBLE of the subset of the Supabase Auth (GoTrue) and Storage HTTP APIs
 * used by this app. It lets end-to-end tests exercise the real supabase-js /
 * @supabase/ssr client code paths locally. It is NOT used in production and it
 * does not prove real Supabase behaviour — the deployed smoke test does that.
 */
import { randomBytes } from "node:crypto";
import { createServer, type IncomingMessage, type Server } from "node:http";
import { SignJWT } from "jose";

export interface FakeSupabase {
  server: Server;
  objects: Map<string, { body: Buffer; type: string }>;
  close(): Promise<void>;
}

const secret = new TextEncoder().encode("fake-supabase-jwt-secret-for-tests-only");

async function readBody(req: IncomingMessage): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const c of req) chunks.push(c as Buffer);
  return Buffer.concat(chunks);
}

export async function startFakeSupabase(opts: { port: number; users: Record<string, string>; serviceKey: string; anonKey: string }): Promise<FakeSupabase> {
  const tokens = new Map<string, { email: string; id: string; exp: number }>();
  const refresh = new Map<string, string>();
  const objects = new Map<string, { body: Buffer; type: string }>();
  const signed = new Map<string, { key: string; exp: number }>();
  const buckets = new Map<string, { public: boolean }>([["evidence", { public: false }]]);
  const ids = new Map<string, string>();

  const userObj = (email: string) => {
    if (!ids.has(email)) ids.set(email, crypto.randomUUID());
    return { id: ids.get(email)!, aud: "authenticated", role: "authenticated", email, email_confirmed_at: new Date().toISOString(), app_metadata: { provider: "email" }, user_metadata: {}, created_at: new Date().toISOString() };
  };
  const session = async (email: string) => {
    const user = userObj(email);
    const exp = Math.floor(Date.now() / 1000) + 3600;
    const access = await new SignJWT({ email, role: "authenticated", aud: "authenticated", session_id: randomBytes(8).toString("hex") })
      .setProtectedHeader({ alg: "HS256" }).setSubject(user.id).setExpirationTime(exp).setIssuedAt().sign(secret);
    const rt = randomBytes(16).toString("hex");
    tokens.set(access, { email, id: user.id, exp });
    refresh.set(rt, email);
    return { access_token: access, token_type: "bearer", expires_in: 3600, expires_at: exp, refresh_token: rt, user };
  };

  const server = createServer(async (req, res) => {
    const url = new URL(req.url ?? "/", "http://x");
    const send = (status: number, body: unknown, headers: Record<string, string> = {}) => {
      res.writeHead(status, { "Content-Type": "application/json", ...headers });
      res.end(body === undefined ? "" : JSON.stringify(body));
    };
    const bearer = (req.headers.authorization ?? "").replace(/^Bearer /, "");
    try {
      // ---------------- Auth ----------------
      if (url.pathname === "/auth/v1/token" && req.method === "POST") {
        const body = JSON.parse((await readBody(req)).toString() || "{}");
        if (url.searchParams.get("grant_type") === "password") {
          if (opts.users[body.email] && opts.users[body.email] === body.password) return send(200, await session(body.email));
          return send(400, { code: 400, error_code: "invalid_credentials", msg: "Invalid login credentials" });
        }
        if (url.searchParams.get("grant_type") === "refresh_token") {
          const email = refresh.get(body.refresh_token);
          if (!email) return send(400, { code: 400, error_code: "refresh_token_not_found", msg: "Invalid Refresh Token" });
          refresh.delete(body.refresh_token);
          return send(200, await session(email));
        }
      }
      if (url.pathname === "/auth/v1/user" && req.method === "GET") {
        const t = tokens.get(bearer);
        if (!t || t.exp * 1000 < Date.now()) return send(401, { code: 401, error_code: "bad_jwt", msg: "invalid JWT" });
        return send(200, userObj(t.email));
      }
      if (url.pathname === "/auth/v1/logout") {
        tokens.delete(bearer);
        return send(204, undefined);
      }
      // ---------------- Storage ----------------
      if (url.pathname.startsWith("/storage/v1/")) {
        const p = url.pathname.slice("/storage/v1".length);
        const signedMatch = /^\/object\/sign\/([^/]+)\/(.+)$/.exec(p);
        if (signedMatch && req.method === "GET") {
          const s = signed.get(url.searchParams.get("token") ?? "");
          const key = `${signedMatch[1]}/${decodeURIComponent(signedMatch[2])}`;
          if (!s || s.key !== key || s.exp < Date.now()) return send(400, { statusCode: "403", error: "InvalidSignature", message: "invalid or expired token" });
          const o = objects.get(key);
          if (!o) return send(404, { error: "not_found" });
          res.writeHead(200, { "Content-Type": o.type });
          return res.end(o.body);
        }
        if (/^\/object\/public\//.test(p)) return send(400, { statusCode: "400", error: "Bucket not public" });
        if (bearer !== opts.serviceKey) return send(403, { statusCode: "403", error: "Unauthorized", message: "service key required" });
        if (signedMatch && req.method === "POST") {
          const body = JSON.parse((await readBody(req)).toString() || "{}");
          const key = `${signedMatch[1]}/${decodeURIComponent(signedMatch[2])}`;
          if (!objects.has(key)) return send(404, { statusCode: "404", error: "not_found", message: "Object not found" });
          const token = randomBytes(16).toString("hex");
          signed.set(token, { key, exp: Date.now() + Number(body.expiresIn ?? 60) * 1000 });
          return send(200, { signedURL: `/object/sign/${signedMatch[1]}/${signedMatch[2]}?token=${token}` });
        }
        const bucketMatch = /^\/bucket\/([^/]+)$/.exec(p);
        if (bucketMatch && req.method === "GET") {
          const b = buckets.get(bucketMatch[1]);
          return b ? send(200, { id: bucketMatch[1], name: bucketMatch[1], public: b.public }) : send(404, { statusCode: "404", error: "Bucket not found" });
        }
        if (p === "/bucket" && req.method === "POST") {
          const body = JSON.parse((await readBody(req)).toString() || "{}");
          buckets.set(body.id ?? body.name, { public: !!body.public });
          return send(200, { name: body.name });
        }
        const objMatch = /^\/object\/(?:authenticated\/)?([^/]+)\/(.+)$/.exec(p);
        if (objMatch && (req.method === "POST" || req.method === "PUT")) {
          const key = `${objMatch[1]}/${decodeURIComponent(objMatch[2])}`;
          if (objects.has(key) && req.headers["x-upsert"] !== "true") return send(409, { statusCode: "409", error: "Duplicate", message: "The resource already exists" });
          objects.set(key, { body: await readBody(req), type: String(req.headers["content-type"] ?? "application/octet-stream") });
          return send(200, { Key: key, Id: randomBytes(8).toString("hex") });
        }
        if (objMatch && req.method === "GET") {
          const o = objects.get(`${objMatch[1]}/${decodeURIComponent(objMatch[2])}`);
          if (!o) return send(404, { error: "not_found" });
          res.writeHead(200, { "Content-Type": o.type });
          return res.end(o.body);
        }
        const delMatch = /^\/object\/([^/]+)$/.exec(p);
        if (delMatch && req.method === "DELETE") {
          const body = JSON.parse((await readBody(req)).toString() || "{}");
          const out = [];
          for (const prefix of body.prefixes ?? []) {
            const key = `${delMatch[1]}/${prefix}`;
            if (objects.delete(key)) out.push({ name: prefix });
          }
          return send(200, out);
        }
      }
      send(404, { error: `fake supabase: unhandled ${req.method} ${url.pathname}` });
    } catch (e) {
      send(500, { error: String(e) });
    }
  });
  await new Promise<void>((r) => server.listen(opts.port, "127.0.0.1", () => r()));
  return { server, objects, close: () => new Promise((r) => server.close(() => r())) };
}
