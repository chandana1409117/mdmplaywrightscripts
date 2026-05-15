import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './Scripts',

  outputDir: './test-results',

  fullyParallel: false, // ❌ disable

  forbidOnly: !!process.env.CI,

  // small retry

  workers: 1, // 🔥 VERY IMPORTANT

  reporter: [
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['allure-playwright', { outputFolder: 'reports/allure-results' }],
  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
     
    }
  ],
});