// @ts-check
// Playwright config for visual regression (homepage + one article).
// Run: npx playwright test
// Update baselines: npx playwright test --update-snapshots
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/visual',
  snapshotPathTemplate: '{testDir}/__snapshots__/{testFilePath}/{arg}-{projectName}{ext}',
  use: {
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:4000/personal-page',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: undefined, // we start the server in CI / manually
});
