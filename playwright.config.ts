import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 90000,
  retries: process.env.CI ? 1 : 0,
  workers: 2,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: `http://127.0.0.1:4173${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`,
    browserName: 'chromium',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'node scripts/preview.mjs',
    url: `http://127.0.0.1:4173${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`,
    reuseExistingServer: !process.env.CI,
  },
});
