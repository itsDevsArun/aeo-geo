"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export class ApiCallError extends Error {
  constructor(message: string, public details: string[] = []) {
    super(message);
  }
}

export async function api<T = unknown>(path: string, method = "GET", body?: unknown): Promise<T> {
  const res = await fetch(path, {
    method,
    headers: body !== undefined ? { "Content-Type": "application/json" } : undefined,
    body: body !== undefined ? JSON.stringify(body) : undefined,
    credentials: "same-origin",
    cache: "no-store",
  });
  const data = (await res.json().catch(() => ({}))) as { error?: string; details?: unknown };
  if (!res.ok) {
    const details = Array.isArray(data.details) ? data.details.map(String) : [];
    if (res.status === 401 && !path.startsWith("/api/auth/")) window.location.href = "/login";
    throw new ApiCallError(data.error ?? `Request failed (${res.status})`, details);
  }
  return data as T;
}

export function ErrorBox({ error }: { error: ApiCallError | Error | null }) {
  if (!error) return null;
  const details = error instanceof ApiCallError ? error.details : [];
  return (
    <div className="alert bad" role="alert">
      <strong>{error.message}</strong>
      {details.length > 0 && (
        <ul style={{ margin: "6px 0 0", paddingLeft: 18 }}>
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Button that calls an API, then refreshes server components. */
export function ActionButton(props: {
  path: string;
  method?: string;
  body?: unknown;
  label: string;
  className?: string;
  confirm?: string;
  prompt?: { message: string; expect: string; field: string };
  onDone?: (data: unknown) => void;
  testId?: string;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  return (
    <span>
      <button
        className={props.className}
        disabled={busy}
        data-testid={props.testId}
        onClick={async () => {
          if (props.confirm && !window.confirm(props.confirm)) return;
          let body = props.body;
          if (props.prompt) {
            const v = window.prompt(props.prompt.message);
            if (v !== props.prompt.expect) return;
            body = { ...(body as object), [props.prompt.field]: v };
          }
          setBusy(true);
          setError(null);
          try {
            const data = await api(props.path, props.method ?? "POST", body ?? {});
            props.onDone?.(data);
            router.refresh();
          } catch (e) {
            setError(e as Error);
          } finally {
            setBusy(false);
          }
        }}
      >
        {busy ? "Working…" : props.label}
      </button>
      <ErrorBox error={error} />
    </span>
  );
}

/** Shows a UTC timestamp plus the viewer's local time. */
export function Time({ iso }: { iso: string | Date | null | undefined }) {
  const [local, setLocal] = useState<string>("");
  const s = iso ? new Date(iso).toISOString() : "";
  useEffect(() => {
    if (s) setLocal(new Date(s).toLocaleString());
  }, [s]);
  if (!s) return <span className="muted">—</span>;
  return (
    <span title={s}>
      <span className="mono">{s.replace("T", " ").slice(0, 19)} UTC</span>
      {local && <span className="muted small"> · {local}</span>}
    </span>
  );
}

export function LogoutButton() {
  return (
    <button
      className="small"
      onClick={async () => {
        await api("/api/auth/logout", "POST", {});
        window.location.href = "/login";
      }}
    >
      Log out
    </button>
  );
}
