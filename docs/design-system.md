# IEEE NTU — Blue, white and a sense of place

The current revision pairs an understated name-led opening screen with a connected architectural panorama and a concise scrolling homepage. Light mode keeps IEEE's blue-white identity; dark mode restores the original deep palette. Club facts still come from the AGM.

## References and design source of truth

- [IEEE Brand Experience](https://brand-experience.ieee.org/): accessible official reference for IEEE blue, white surfaces, clear masthead and content hierarchy. The main ieee.org homepage rejected automated access (browser 418 / crawler exclusion); it was not represented as visually inspected.
- [IEEE MOVE brand guidelines](https://move.ieee.org/wp-content/uploads/24-TA-3-025-IEEEMOVE-BrandIdentity-Guidelines-Interactive.pdf): official IEEE blue #00629B and navy #002855.
- [IEEE University of Toronto](https://ieee.utoronto.ca/): visually inspected; the name-led hero, diagonal plane and city linework informed the composition.
- [IEEE at UCLA](https://www.ieeebruins.com/): visually inspected; clear blue masthead and direct information hierarchy.
- [IEEE Berkeley](https://ieee.berkeley.edu/): visually inspected; simple navigation and dedicated community/initiative content.

No Figma server or design-creation tool was available. No Figma document was created. The code tokens, components and rendered desktop/mobile states are the design source of truth. Available Node REPL MCP ran real Playwright/Chromium for reference inspection and QA. The skyline is an original image generated using the built-in image generation tool, served as an optimised WebP inside a themeable SVG luminance mask. It has no generation dependency at build or runtime. See `architectural-artwork.md` for the prompt and reference provenance. Other branches' imagery, logos and factual content are not republished.

## Palette

| Semantic use         | Light   | Dark    |
| -------------------- | ------- | ------- |
| Background           | #FFFFFF | #050A16 |
| Elevated surface     | #FFFFFF | #0A1628 |
| Secondary surface    | #F2F5F7 | #0D1D33 |
| Primary control      | #00629B | #114BFF |
| Foreground accent    | #00629B | #80ADFF |
| Main text            | #253746 | #EEF9FF |
| Secondary text       | #566673 | #A4B5C9 |
| Masthead / home blue | #00629B | #050A16 |
| Home diagonal        | #FFFFFF | #0A1628 |
| Architectural line   | #A3C6DC | #7796C3 |

Dark mode restores the original electric-blue emphasis on controls and artwork, with white button text and lighter accents for text, icons and focus. The large surfaces stay near-black; the hero has no bright wash. Original supplied IEEE masterbrand artwork remains unchanged.

## Composition and rhythm

The hero contains one semantic h1: IEEE on the first line, NTU Student Branch below at roughly one fifth of the size. A blue field and a white diagonal establish the hierarchy. The continuous architectural drawing evokes NTU's Chinese Heritage Centre and The Hive, alongside Marina Bay Sands, Merlion, ArtScience Museum, Singapore Flyer and Supertrees. It is decorative, not an accurate geographic map or official campus drawing.

The desktop uses an asymmetric right-hand title. Tablet keeps the title clear of the diagonal. Mobile centres the name and frames the drawing around The Hive and Marina Bay Sands. No marketing copy or cards compete with the name in the first screen.

Below the hero, the homepage follows a Toronto-inspired flow: About with a real community photograph; three event/initiative highlights; a current-team preview; three participation paths; a partnership invitation; the AGM impact figures; footer. Header anchors connect About, Events, Join us and Partnerships, while Our team opens the dedicated roster. Current sections are identified on scroll. Contact and approved sponsor displays appear only when verified data exists. Dated past events and recruitment links have empty data fields, without unfinished production copy. The existing detail routes stay stable. The team page adds leadership/director jump links without inventing archived committee terms.

Dedicated pages use literal titles and readable introductions, followed by curated information. Inter Variable is self-hosted; body text is 16–17px, major page titles 36–64px. Home IEEE scales from 106–230px. Max content width 1280px; gutters 24–64px; section rhythm 72–120px. Controls use 4px radii, cards 8px, broad panels 12px. Fine borders and pale panels replace glass and glow.

## Motion and accessibility

Title entrance lasts 900ms; skyline entrance lasts 1800ms. Both play once and stop. No continuous movement, pointer tracking, parallax or scroll interception. Reduced motion removes both animations and all transitions/smooth scrolling. The SVG is hidden from assistive technology and cannot receive focus; the branch name is real HTML.

The OS theme is applied before paint on first visit. A deliberate choice persists, and OS changes are followed until that choice exists. The mobile menu supports keyboard input, Escape with focus return, and outside click. Controls have 44px targets, semantic roles and visible focus.

## Editable implementation

- `src/styles/tokens.css`: shared semantic values.
- `src/styles/landing.css`: homepage layout, breakpoints and motion.
- `src/styles/home.css`: homepage content sections.
- `src/data/home.ts`: curated homepage summaries, featured IDs and optional event/recruitment records.
- `src/components/singapore-skyline.tsx`: themeable illustration wrapper.
- `public/images/ntu-singapore-linework.webp`: final original architectural asset.
- `src/styles/globals.css`: global shell and dedicated-page components.
- `src/data/`: factual content, people, projects, metrics, partners and contact fields.
- `scripts/create-social-card.mjs`: original matching blue-white share artwork.

Missing contacts, portraits and approved partner logos continue to be handled by the existing data model. The redesign adds no new organisational claims.
