# Release QA — 7 October 2026

## Final checks

- ESLint, TypeScript and the Next.js production static export pass.
- 15 Playwright tests pass at the custom domain's root path, with `https://ieeentu.com` as the production site URL.
- All five content routes are checked at 320, 390, 768, 1024 and 1440px in light and dark modes: 50 page/theme/viewport combinations.
- axe WCAG 2 A/AA and 2.1 A/AA scans report zero violations in those combinations. Scans accompany visual and keyboard review.
- No horizontal document overflow, page errors or browser console errors; every public image decodes successfully.
- Theme persistence, following OS preference, blocked storage, skip link, mobile menu, Escape/focus return and keyboard navigation pass.
- Initiative filters, homepage anchors, project deep links, canonical/OG tags, sitemap, robots, official favicon and custom 404 pass. Canonical links on all five routes and the sitemap/robots destinations use the custom domain; exported pages have no `/Website/` resource paths.
- All nine sponsor/partner identities have linked logo artwork, including Jane Street and Crator. The two unidentified marks are excluded.
- Instagram, LinkedIn, GitHub and NTU Women in Tech destinations are checked on all five routes.
- The provided branch email is a working mail link in the homepage contact section, partnerships page and every footer.
- Annual General Meeting appears on the homepage and in the Community filter; its direct section link works. Coding Nights and iNTUition use the newly supplied photos, and Industry Projects displays the supplied image with every logo visible.
- Public pages and the exported HTML contain no AGM attribution, internal WhatsApp invitations, source PDF links or unfinished production copy.
- Public asset extraction uses an explicit reviewed image allowlist. Internal QR pages 22–23 are excluded entirely.

## Visual review

Reviewed homepage, team, initiatives and sponsor pages in both themes. The local fonts match the reference families and intended weights. Team portraits, logo visibility, photo identity, header contrast, focus and mobile stacking were inspected in rendered screenshots. The event update also includes section-level review at 320 and 1440px, covering the AGM, Crator, supplied images and email layout.

Additional browser review covers seven boundary widths (320, 360, 899, 900, 1199, 1200 and 1920px), all five routes and both themes: 70 layouts with no document overflow. Six homepage cases at 1366×768, 1440×700 and 1920×600, in both themes, also pass axe scans.

Refinements from review:

- Opaque navigation at intermediate desktop widths prevents white links from crossing the white homepage plane.
- An opaque header at the narrowest mobile width keeps the branch's small brand text legible.
- Short desktop windows use adjusted title/illustration spacing.
- IEEE Day uses a campus image; the general community photo is not attributed to an unverified event.
- Favicon cropping preserves the full supplied diamond and removes its faint export boundary.
- The share image uses the same local fonts, weights and blue-white palette.

Matrix screenshots and the Playwright report are in ignored `test-results/` and `playwright-report/`. Additional review screenshots and data are in ignored `tmp/final-review/`.

The updated event and contact section screenshots are in ignored `tmp/event-update-review/`. The email sits with the branch identity in the footer so it has adequate width on small screens.

## Build and deployment

All pages, fonts, photographs, logo assets and favicons are served from the static export. Builds need no PDF, Python, external fonts or image-generation service.

The existing postbuild step corrects Windows segment-cache filenames for [Next.js issue #92339](https://github.com/vercel/next.js/issues/92339). Browser navigation is verified using the corrected export.

The existing GitHub Pages workflow validates pushes to `main` and publishes the checked static artifact. Deployment status and the exact published commit are recorded in the repository's Actions history.

Custom domain: `ieeentu.com`, verified for the IEEE NTU organisation and configured in the repository's Pages settings. The build uses an empty base path and `https://ieeentu.com` for metadata. Cloudflare DNS and GitHub certificate provisioning are checked separately from the static build; HTTPS is enforced after the certificate is available.
