/** Shared constants for the local end-to-end environment (test values only, not secrets). */
export const E2E = {
  baseUrl: "http://localhost:3100",
  port: 3100,
  supabaseUrl: "http://127.0.0.1:54321",
  supabasePort: 54321,
  anonKey: "anon-test-key",
  serviceKey: "service-test-key",
  sitesPort: 4100,
  bravePort: 4200,
  braveKey: "test-brave-key",
  runnerSecret: "e2e-runner-secret-0123456789-abcdefghijklmnop",
  owner: { email: "owner@example.com", password: "correct horse battery staple" },
  intruder: { email: "intruder@example.com", password: "intruder-password" },
};

export function serverEnv(databaseUrl: string): Record<string, string> {
  return {
    NODE_ENV: "production",
    NEXT_TELEMETRY_DISABLED: "1",
    PORT: String(E2E.port),
    DATABASE_URL: databaseUrl,
    NEXT_PUBLIC_SUPABASE_URL: E2E.supabaseUrl,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: E2E.anonKey,
    SUPABASE_SERVICE_ROLE_KEY: E2E.serviceKey,
    ADMIN_EMAILS: E2E.owner.email,
    RUNNER_API_SECRET: E2E.runnerSecret,
    GITHUB_REPOSITORY_SLUG: "local/test",
    GITHUB_DISPATCH_TOKEN: "unused-in-tests",
    GITHUB_DISPATCH_MODE: "disabled",
    SERVICE_PAGE_URL: "http://devsarun-fixture.test/aeo-geo/",
  };
}

export function runnerEnv(runId: string, extra: Record<string, string> = {}): Record<string, string> {
  return {
    DASHBOARD_URL: E2E.baseUrl,
    RUN_ID: runId,
    RUNNER_API_SECRET: E2E.runnerSecret,
    BRAVE_SEARCH_API_KEY: E2E.braveKey,
    BRAVE_API_BASE: `http://127.0.0.1:${E2E.bravePort}/res/v1/web/search`,
    RUNNER_TEST_MODE: "1",
    RUNNER_TEST_HOST_SUFFIX: ".test",
    RUNNER_TEST_HOST_RESOLVER_RULES: `MAP *.test 127.0.0.1:${E2E.sitesPort}`,
    RUNNER_HEARTBEAT_MS: "2000",
    ...extra,
  };
}
