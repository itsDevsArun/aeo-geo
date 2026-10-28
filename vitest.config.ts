import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "server-only": resolve(__dirname, "tests/helpers/server-only-stub.ts"),
    },
  },
  test: {
    environment: "node",
    testTimeout: 30000,
    hookTimeout: 60000,
    include: ["tests/unit/**/*.test.ts", "tests/integration/**/*.test.ts"],
  },
});
