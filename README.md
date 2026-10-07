# IEEE NTU Student Branch

Official student branch website at Nanyang Technological University. Next.js App Router, TypeScript, local Roboto Condensed and Source Sans Pro, and a static export for GitHub Pages.

Website: https://ieee-ntu-student-branch-tech-committee.github.io/Website/

## Development

Use Node.js 24 and npm 11.6.2, matching CI. On Windows, use `npm.cmd` when PowerShell blocks `npm.ps1`.

```sh
npm ci
npm run dev
```

## Pages and content

| Route          | Content                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| /              | Branch introduction, community figures, initiatives, team, participation, all sponsors/partners and contact |
| /about/        | History, objectives, four committees and Strategy Office                                                    |
| /initiatives/  | Filterable initiative directory with direct section links                                                   |
| /people/       | All 13 leaders and directors for 2026/27                                                                    |
| /partnerships/ | Nine linked sponsor/partner logos, collaboration areas and public contact channels                          |

A custom 404, canonical URLs, share image, sitemap, robots file and organisation structured data are included.

Edit factual content in `src/data/`: `people.ts` for names, roles and portraits; `projects.ts` for initiatives and photographs; `metrics.ts` for community figures; `partners.ts` for logo artwork, URLs and collaboration areas; `site.ts` for navigation, social profiles, friends and site URL; `about.ts` and `home.ts` for public copy.

Partner logos link directly to official websites. Jane Street and Crator are confirmed sponsors; seven other recognised organisations are listed alongside them as ecosystem partners. The two unidentified source marks are omitted as requested by the branch. Public profiles are Instagram, LinkedIn and the Technology Committee's GitHub. NTU Women in Tech is listed under Friends.

The public contact email is `IEEENTU-Branch@e.ntu.edu.sg`. The Annual General Meeting entry describes the yearly welcome, committee handover and planning activities. Coding Nights and iNTUition use photographs supplied by the branch; Industry Projects uses the supplied `industry.jpg`, displayed without cropping its logos.

The internal source PDF and its QR codes must stay outside `public/`. Do not add internal group invitations, unconfirmed event dates, registration forms or contact addresses. Industry Projects describes work being developed. General community and campus photographs must not be presented as evidence of a specific event.

## Design

The light theme follows [IEEE University of Toronto](https://ieee.utoronto.ca/): white, #00639C blue, #DBEAF6 section backgrounds, Roboto Condensed headings/navigation and Source Sans Pro body text. Dark mode uses the supplied deck's #07081A navy, #091A2F secondary surface, #0038FF electric blue and #ADD5E3 accents.

Team portraits are circular, with the role above the name. Photos and plain text replace decorative cards and portfolio geometry. The existing local architectural illustration remains in the homepage opening. The favicon uses the supplied official IEEE diamond.

Tokens are in `src/styles/tokens.css`; responsive components are in `globals.css`; homepage styles are in `landing.css` and `home.css`. Fonts and their OFL licences are in `src/fonts/`, with no external font request at runtime. Theme preference follows the OS until explicitly chosen, persists across reloads, and initialises before paint.

See `docs/design-system.md`, `docs/content-audit.md` and `docs/qa.md` for implementation and review details.

## Validation and preview

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm test
npm run preview
```

Browser tests cover all five pages at 320, 390, 768, 1024 and 1440px, in both themes; axe checks, image decoding, overflow, browser errors, theme persistence, keyboard navigation, mobile menu, filters, deep links, metadata, 404 and public links. Screenshots are in `test-results/`; open the report with `npx playwright show-report`.

To check the actual GitHub Pages path in PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/Website'
npm.cmd run build
npm.cmd test
npm.cmd run preview
```

Preview: http://127.0.0.1:4173/Website/. Stop an existing preview before changing its base path. Format source with `npx prettier --write src tests scripts/*.mjs`.

## Deployment

The existing `.github/workflows/deploy.yml` checks a push to `main`, runs browser QA and deploys the verified export to GitHub Pages. Pull requests run checks without deployment. Repository Pages settings must use GitHub Actions.

The workflow supplies `NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SITE_URL`. Update them and the fallback URL in `src/data/site.ts` if the repository URL or domain changes. Internal Next.js links and `asset()` handle the base path.

`postbuild` normalises [Next.js Windows static-export issue #92339](https://github.com/vercel/next.js/issues/92339) by adding the segment-cache filenames expected by the browser. It affects only `out/` and is a no-op on correctly generated Linux builds.

## Optional asset maintenance

The checked-in assets keep ordinary builds independent of Python, source PDFs and font downloads.

- `scripts/extract-current-assets.py`: reviewed public logo/photo allowlist from `../AGM deck (2).pdf`; excludes internal QR pages.
- `scripts/prepare-public-assets.py`: local webfonts/licences, selected event/campus photographs and official diamond favicons. Requires requests, PyMuPDF and Pillow.
- `scripts/prepare-event-assets.py`: optimises the branch-provided Coding Nights and iNTUition photos and copies `industry.jpg`. Requires Pillow and FFmpeg; original inputs are not needed for ordinary builds.
- `scripts/create-social-card.mjs`: renders the share image with the same local fonts through Playwright.
- Older portrait extraction scripts retain the original source mappings for the 13 current members.

Use higher-resolution originals when available. Keep names, roles and photo identity accurate when refreshing assets.
