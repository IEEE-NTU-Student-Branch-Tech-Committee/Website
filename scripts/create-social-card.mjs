import { readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';

// Render with the site's own local fonts so the share image matches the homepage.
const encoded = async (file) => (await readFile(file)).toString('base64');
const [heading, body, bodyRegular, drawing] = await Promise.all([
  encoded('src/fonts/roboto-condensed-700.woff2'),
  encoded('src/fonts/source-sans-pro-700.woff2'),
  encoded('src/fonts/source-sans-pro-400.woff2'),
  encoded('public/images/ntu-singapore-linework.webp'),
]);
const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.setContent(`<!doctype html><html lang="en"><head><style>
  @font-face { font-family: Heading; src: url(data:font/woff2;base64,${heading}); font-weight: 100 900; }
  @font-face { font-family: Body; src: url(data:font/woff2;base64,${body}); font-weight: 700; }
  @font-face { font-family: Body; src: url(data:font/woff2;base64,${bodyRegular}); font-weight: 400; }
  * { box-sizing: border-box; } body { margin: 0; background: #00639c; color: white; }
  .plane { position: absolute; inset: 0; background: white; clip-path: polygon(0 0, 50% 0, 0 92%); }
  h1 { position: absolute; top: 40px; right: 94px; margin: 0; text-align: right; }
  .ieee { display: block; font: 700 156px/1 Heading; }
  .branch { display: block; font: 700 34px/1.3 Body; margin-top: 12px; }
  .university { display: block; font: 400 18px/1.5 Body; margin-top: 10px; }
  .skyline { position: absolute; left: 12px; bottom: 20px; width: 1176px; height: 392px; background: #a3ccdf; mask: url(data:image/webp;base64,${drawing}) center/contain no-repeat; mask-mode: luminance; }
  </style></head><body><div class="plane"></div><div class="skyline"></div><h1><span class="ieee">IEEE</span><span class="branch">NTU Student Branch</span><span class="university">Nanyang Technological University</span></h1></body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: 'public/images/social-card.png' });
} finally {
  await browser.close();
}
