import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { siteConfig } from '../src/data/site';

const routes = ['', 'about/', 'initiatives/', 'people/', 'partnerships/'];

for (const theme of ['dark', 'light'] as const) {
  for (const width of [390, 768, 1024, 1440]) {
    test(`${theme} at ${width}px: routes, images, overflow and accessibility`, async ({
      page,
    }, testInfo) => {
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ colorScheme: theme, reducedMotion: 'reduce' });
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (message.type() === 'error')
          errors.push(`${message.text()} ${message.location().url || ''}`);
      });
      for (const route of routes) {
        const response = await page.goto(route || './');
        expect(response?.status()).toBe(200);
        await page.evaluate(() => document.fonts.ready);
        await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
        await expect(page.locator('h1')).toHaveCount(1);
        expect(
          await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
        ).toBeTruthy();
        for (const image of await page.locator('img').all()) {
          await image.scrollIntoViewIfNeeded();
          await expect
            .poll(() =>
              image.evaluate(
                (element) =>
                  (element as HTMLImageElement).complete &&
                  (element as HTMLImageElement).naturalWidth > 0,
              ),
            )
            .toBeTruthy();
        }
        const accessibility = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .analyze();
        expect(accessibility.violations, JSON.stringify(accessibility.violations, null, 2)).toEqual(
          [],
        );
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.screenshot({
          path: testInfo.outputPath(`${route.replace('/', '') || 'home'}-${theme}-${width}.png`),
          fullPage: true,
        });
      }
      expect(errors).toEqual([]);
    });
  }
}

test('Theme preference persists, follows system and tolerates blocked storage', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('./');
  await expect(page.getByRole('switch', { name: 'Dark theme' })).toBeChecked();
  await page.getByRole('switch', { name: 'Dark theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.getByRole('link', { name: 'About', exact: true }).first().click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.evaluate(() => localStorage.removeItem('ieee-ntu-theme'));
  await page.emulateMedia({ colorScheme: 'light' });
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', {
      get() {
        throw new Error('Storage unavailable');
      },
    });
  });
  await page.reload();
  await page.getByRole('switch', { name: 'Dark theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('Mobile menu and keyboard navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('./');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  const menu = page.getByRole('button', { name: 'Open menu' });
  await menu.click();
  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeHidden();
  await menu.click();
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Our people' })
    .click();
  await expect(page.locator('h1')).toHaveText('Our people');
  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeHidden();
});

test('Filters and initiative deep links work', async ({ page }) => {
  await page.goto('initiatives/');
  await page.getByRole('button', { name: 'Industry', exact: true }).click();
  await expect(page.locator('.initiative-detail')).toHaveCount(1);
  await expect(page.locator('.initiative-detail h2')).toHaveText('Industry Projects');
  await page.getByRole('button', { name: 'Community', exact: true }).click();
  await expect(page.locator('.initiative-detail')).toHaveCount(2);
  await page.getByRole('button', { name: 'All initiatives' }).click();
  await expect(page.locator('.initiative-detail')).toHaveCount(4);
  await page.goto('./');
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Initiatives', exact: true })
    .click();
  await expect(page.locator('.initiative-detail')).toHaveCount(4);
  await page.goto('initiatives/#coding-nights');
  await expect(page).toHaveURL(/initiatives\/#coding-nights$/);
  await expect(page.locator('#coding-nights')).toBeInViewport();
});

test('Metadata, missing content, reduced motion and 404', async ({ page, request }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./');
  await expect(page.locator('main')).toHaveText('IEEE NTU Student Branch');
  expect(
    await page.locator('.singapore-skyline').evaluate((e) => getComputedStyle(e).animationName),
  ).toBe('none');
  expect(await page.locator('html').evaluate((e) => getComputedStyle(e).scrollBehavior)).toBe(
    'auto',
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${siteConfig.url}/`);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    /social-card.png$/,
  );
  await expect(page.locator('body')).not.toContainText(
    /TBD|Lorem ipsum|Coming soon|THYNK|reallygreatsite|Canva/,
  );
  if (!siteConfig.contactEmail) {
    await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
  }
  expect((await request.get('sitemap.xml')).status()).toBe(200);
  expect((await request.get('robots.txt')).status()).toBe(200);
  expect((await request.get('images/social-card.png')).status()).toBe(200);
  const response = await page.goto('not-a-page/');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('link', { name: 'Back to home' })).toBeVisible();
});
