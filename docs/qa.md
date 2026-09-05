# Release QA — 5 September 2026

## Verified implementation

- Next.js 16.3.4 production static export, TypeScript and ESLint pass.
- 12 Playwright tests pass against the static website, including the exact GitHub Pages repository base path.
- All five content routes checked at 390, 768, 1024 and 1440px, in dark and light modes: 40 page/theme/viewport combinations.
- axe WCAG 2 A/AA and 2.1 A/AA scans report zero violations in those 40 combinations. Automated scans supplement visual and keyboard inspection; they are not a formal accessibility certification.
- Zero page errors, failed asset requests or browser console errors on the tested content routes.
- No horizontal document overflow; all images decode successfully, including lazy images and mobile community-image sources.
- Theme follows the OS initially, persists a chosen preference across pages/reloads, tracks OS changes without a stored preference, and works when localStorage is blocked.
- Skip link, mobile menu, Escape-to-close/focus return, route navigation, initiative filtering and project anchor links pass.
- Reduced motion, canonical/OG tags, sitemap, robots, unavailable-contact omission and custom 404 pass.
- The source PDF, template imagery, scratch renders, dependencies and build output are excluded from Git.

## Visual review and refinements

Used the available Node REPL MCP with real Playwright/Chromium for browser inspection and screenshot capture. Also reviewed the Playwright matrix screenshots. Corrected the hero's intrinsic grid sizing, reviewed the light theme's contrast, tightened leadership photo crops, and checked mobile typography, project artwork, metric alignment and page spacing.

The source portraits for Andy and Divija Jain are unsuitable for publication; initials are deliberate data-driven fallbacks. No fake portraits are present. The supplied IEEE logo is unchanged; the diamond favicon and decorative artwork are original and are not represented as official logos.

## Platform detail

Windows static exports in this Next.js release exhibit upstream [issue #92339](https://github.com/vercel/next.js/issues/92339). `scripts/normalize-static-export.mjs` adds canonical segment-cache filenames after building. The browser tests verify actual navigation/prefetch with no server-side rewrite. GitHub Actions builds on Ubuntu, where the correction is a no-op.

## Continuing editorial requirements

Before adding contact details, partner logos, event registrations or project claims, supply verified public data in `src/data/`. Higher-resolution original photographs will improve image quality. Missing data is currently hidden, and Industry Projects is accurately described as a developing direction.
