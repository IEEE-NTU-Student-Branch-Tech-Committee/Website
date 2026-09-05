# IEEE NTU Student Branch

The public website of IEEE NTU Student Branch at Nanyang Technological University. Built with Next.js App Router, TypeScript, self-hosted Inter Variable and a custom semantic CSS design system. Statically exported for GitHub Pages.

**Website:** https://dasbootu9607.github.io/IEEE-NTU-Student-Branch-Website/

## Local development

Requires Node.js 24 and npm 11.6.2 (also pinned in CI for reproducible lockfile resolution).

```sh
npm ci
npm run dev
```

On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

## Routes

| Route            | Purpose                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| `/`              | Editorial homepage, impact, initiatives, community and partnership invitation |
| `/about/`        | History, purpose, principles and public functional pillars                    |
| `/initiatives/`  | Filterable portfolio with anchored initiative details                         |
| `/people/`       | 2026/27 leadership and directors                                              |
| `/partnerships/` | Four public collaboration areas and configurable contact links                |

There is also a designed 404 page, sitemap, robots file and organisation structured data. Public contact fields and approved partner logos render only when configured. No contact form submits to an unconfigured service.

## Updating content

Content lives separately from components:

| Edit                                                                  | File                     |
| --------------------------------------------------------------------- | ------------------------ |
| Names, roles, portraits, groups and profiles                          | `src/data/people.ts`     |
| Initiative names, descriptions, artwork type, optional photos/links   | `src/data/projects.ts`   |
| AGM-reported impact metrics                                           | `src/data/metrics.ts`    |
| Approved partner names, logos, URLs and collaboration areas           | `src/data/partners.ts`   |
| Organisation name, committee term, public URL, email and social links | `src/data/site.ts`       |
| Public principles and organisational functions                        | `src/data/about.ts`      |
| Theme colours, typography, spacing, borders, radii and motion         | `src/styles/tokens.css`  |
| Responsive layout and component styling                               | `src/styles/globals.css` |
| Optimised local images and original social card                       | `public/images/`         |

For a person, set `portrait` to a filename in `public/images/`, or `null` to display initials. Provide clean photos around 480 × 540px in WebP. Use the documented role and group values; names are rendered only from the data array. Optional profile links can be `null`.

For a project, optional `image` uses a path such as `/images/project.webp`; `externalUrl` should be a confirmed public destination. Without a photo, the original project illustration remains. The existing descriptions do not assert event dates, open registration or completed client work.

For partners, require `approved: true` and a verified logo/URL. For contact, add the verified `contactEmail`, optionally `partnershipEmail`, and social links to `siteConfig`. The footer and partnerships page show them automatically. Never add placeholder emails, fake contacts or unfinished copy.

### Assets still needed

- Approved public contact email and social profiles.
- Andy’s verified portrait/full name, and a clean original portrait of Divija Jain without an embedded recruitment badge.
- Higher-resolution original event/committee photographs where available.
- Confirmed partner identities and approved logo artwork.
- Verified initiative registration links, dates and public project details when ready.
- An approved branch-specific logo/favicon if the team wants to replace the supplied IEEE masterbrand and original geometric favicon.

## Brand and source decisions

Dark navy, icy text, deliberate electric blue and original geometric drawings evolve the AGM deck into a public editorial website. Both themes share the same semantic tokens and layout. The theme respects the operating system on first visit, persists a deliberate choice, updates with system changes until a choice is saved, and initialises before first paint. Reduced motion disables transitions and smooth scrolling.

The deck is the factual source for the founding year, public mission, four impact figures, initiative names, leadership and functions. Read `docs/content-audit.md` for page-level provenance and exclusions. Internal workflows/targets, unconfirmed lab/partner claims and all template residue are excluded. The internal PDF and extraction scratch files are deliberately outside version control.

Figma MCP was unavailable; no Figma file was created. The code tokens and rendered components are the design source of truth. Browser QA uses real Chromium through Playwright, including the Node REPL MCP available in the implementation session. See `docs/design-system.md` and `docs/qa.md`.

## Validation

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm test
```

The tests launch the static export with a tiny local preview server. They cover five pages at 390, 768, 1024 and 1440px in dark/light themes, axe accessibility checks, horizontal overflow, image decoding, page errors, theme persistence, blocked storage, mobile navigation, keyboard access, filtering, initiative anchors, metadata, reduced motion and the 404. Full-page screenshots are written to `test-results/`; view the report with `npx playwright show-report`.

Format code with `npx prettier --write .`.

## Deployment

Push to `main`. `.github/workflows/deploy.yml` installs locked dependencies, lints, checks types, builds a static export, runs browser QA, and deploys the verified `out/` artifact through GitHub Pages. Pull requests run the checks without deployment. Repository Settings → Pages must use **GitHub Actions**.

The workflow explicitly sets the repository base path and canonical site URL. If the repository name, owner or custom domain changes, update both workflow environment values and the fallback URL in `src/data/site.ts`. `next.config.ts`, internal Next.js links and the `asset()` helper handle the base path. No `.nojekyll` branch workaround or server runtime is required with the Pages artifact workflow.

To locally verify the deployment base path in PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/IEEE-NTU-Student-Branch-Website'
npm.cmd run build
npm.cmd test
```

Stop an existing preview server before changing its base path.

`postbuild` normalises a [Next.js Windows static-export issue](https://github.com/vercel/next.js/issues/92339) by adding the dot-separated route segment files expected by the browser. It changes only the generated `out/` artifact and is a no-op on correctly generated Linux builds. This keeps navigation and prefetch working on ordinary static hosting.

## Optional asset maintenance scripts

`scripts/extract-assets.py` regenerates curated source assets from `../AGM deck.pdf` using PyMuPDF/Pillow; it is a one-time tool, never part of the build. `scripts/create-social-card.mjs` regenerates the original OpenGraph PNG with Sharp. The generated public assets are checked in, so future builds do not need the PDF, Python or external font downloads.
