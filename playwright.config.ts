
import "dotenv/config";
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.ts",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "html",

  use: {
    baseURL: process.env.BASE_URL,

    httpCredentials: {
      username: process.env.TEST_USERNAME!,
      password: process.env.TEST_PASSWORD!,
    },

    trace: "on-first-retry",
  },

  projects: [
    {
      name: "setup",
      testMatch: "auth.setup.ts",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      dependencies: ["setup"],
    },
  ],
});
