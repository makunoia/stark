import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "*.spec.ts",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: "list",
  use: { ...devices["Desktop Chrome"], channel: "chromium", viewport: { width: 1100, height: 1000 }, baseURL: process.env.STARK_TEST_URL || "http://127.0.0.1:4173", trace: "retain-on-failure", launchOptions: { executablePath: process.env.STARK_CHROMIUM_EXECUTABLE } },
  expect: { toHaveScreenshot: { maxDiffPixelRatio: 0.001, threshold: 0.05, animations: "disabled" } },
  webServer: process.env.STARK_TEST_URL ? undefined : {
    command: "npm run test:serve",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
