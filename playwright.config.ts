import { defineConfig } from "@playwright/test";

/**
 * Browser/UI end-to-end tests against a production build (`next start`) backed by a
 * real Postgres database, local fixture websites, a fake Brave API and a local test
 * double of Supabase Auth/Storage. Build first with `npm run test:e2e:build`.
 */
export default defineConfig({
  testDir: "tests/e2e",
  testMatch: /.*\.spec\.ts/,
  globalSetup: "./tests/e2e/global-setup.ts",
  workers: 1,
  fullyParallel: false,
  timeout: 240_000,
  expect: { timeout: 15_000 },
  reporter: [["list"]],
  outputDir: "test-results",
  use: { baseURL: "http://localhost:3100", trace: "retain-on-failure", screenshot: "only-on-failure" },
});
