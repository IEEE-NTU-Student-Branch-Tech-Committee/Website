# IEEE NTU — Blue, white and a sense of place

The September 2026 revision responds to the branch's direction for a simpler homepage and a closer relationship to IEEE's blue-white identity. Club facts still come from the AGM; the visual identity is deliberately more restrained.

## References and design source of truth

- [IEEE Brand Experience](https://brand-experience.ieee.org/): accessible official reference for IEEE blue, white surfaces, clear masthead and content hierarchy. The main ieee.org homepage rejected automated access (browser 418 / crawler exclusion); it was not represented as visually inspected.
- [IEEE MOVE brand guidelines](https://move.ieee.org/wp-content/uploads/24-TA-3-025-IEEEMOVE-BrandIdentity-Guidelines-Interactive.pdf): official IEEE blue #00629B and navy #002855.
- [IEEE University of Toronto](https://ieee.utoronto.ca/): visually inspected; the name-led hero, diagonal plane and city linework informed the composition.
- [IEEE at UCLA](https://www.ieeebruins.com/): visually inspected; clear blue masthead and direct information hierarchy.
- [IEEE Berkeley](https://ieee.berkeley.edu/): visually inspected; simple navigation and dedicated community/initiative content.

No Figma server or design-creation tool was available. No Figma document was created. The code tokens, components and rendered desktop/mobile states are the design source of truth. Available Node REPL MCP ran real Playwright/Chromium for reference inspection and QA. The skyline is original code-native SVG, with no external illustration or image-generation dependency. Other branches' imagery, logos and factual content are not reused.

## Palette

| Semantic use         | Light   | Dark    |
| -------------------- | ------- | ------- |
| Background           | #FFFFFF | #091D2C |
| Elevated surface     | #FFFFFF | #102A3D |
| Secondary surface    | #F2F5F7 | #0D2536 |
| Primary control      | #00629B | #006DA8 |
| Foreground accent    | #00629B | #85C9E8 |
| Main text            | #253746 | #EFF6FA |
| Secondary text       | #566673 | #ADC1CD |
| Masthead / home blue | #00629B | #0B293F |
| Home diagonal        | #FFFFFF | #102033 |
| Architectural line   | #80B6D0 | #4D829F |

Dark mode keeps white text on primary buttons and reserves the lighter accent for text, icons and focus. There is no electric-purple blue or neon glow. Original supplied IEEE masterbrand artwork remains unchanged.

## Composition and rhythm

The homepage contains one semantic heading: IEEE on the first line, NTU Student Branch below at roughly one fifth of the size. A blue field and a white diagonal establish the hierarchy, with a native architectural collage anchored to the lower edge. It evokes NTU's Hive and ADM alongside Marina Bay Sands, ArtScience Museum, the Singapore Flyer and Supertrees. It is decorative, not an accurate geographic map or official campus drawing.

The desktop uses an asymmetric right-hand title. Tablet keeps the title clear of the diagonal. Mobile centres the name and recomposes the Hive and Marina Bay forms so that the major landmarks remain visible. No marketing paragraphs, cards, metrics or footer compete with the name on the landing page. All factual content is available through the persistent navigation: Home, About, Initiatives, Our people, Partnerships.

Dedicated pages use literal titles and readable introductions, followed by curated information. Inter Variable is self-hosted; body text is 16–17px, major page titles 36–64px. Home IEEE scales from 106–230px. Max content width 1280px; gutters 24–64px; section rhythm 72–120px. Controls use 4px radii, cards 8px, broad panels 12px. Fine borders and pale panels replace glass and glow.

## Motion and accessibility

Title entrance lasts 900ms; skyline entrance lasts 1800ms. Both play once and stop. No continuous movement, pointer tracking, parallax or scroll interception. Reduced motion removes both animations and all transitions/smooth scrolling. The SVG is hidden from assistive technology and cannot receive focus; the branch name is real HTML.

The OS theme is applied before paint on first visit. A deliberate choice persists, and OS changes are followed until that choice exists. The mobile menu supports keyboard input, Escape with focus return, and outside click. Controls have 44px targets, semantic roles and visible focus.

## Editable implementation

- `src/styles/tokens.css`: shared semantic values.
- `src/styles/landing.css`: homepage layout, breakpoints and motion.
- `src/components/singapore-skyline.tsx`: original architecture.
- `src/styles/globals.css`: global shell and dedicated-page components.
- `src/data/`: factual content, people, projects, metrics, partners and contact fields.
- `scripts/create-social-card.mjs`: original matching blue-white share artwork.

Missing contacts, portraits and approved partner logos continue to be handled by the existing data model. The redesign adds no new organisational claims.
