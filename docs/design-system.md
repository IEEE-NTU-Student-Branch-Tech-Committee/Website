# Website design system — October 2026

[IEEE University of Toronto](https://ieee.utoronto.ca/) is the requested visual reference. Its homepage and team page were inspected in a browser, including computed fonts, weights and colours. Public NTU content and artwork remain separate from Toronto's factual content.

## Type

| Use             | Family           | Weight | Typical size              |
| --------------- | ---------------- | ------ | ------------------------- |
| Body            | Source Sans Pro  | 400    | 18px desktop, 17px mobile |
| Navigation      | Roboto Condensed | 600    | 18px                      |
| Headings        | Roboto Condensed | 700    | 32–48px                   |
| Team role       | Roboto Condensed | 700    | 20px desktop, 18px mobile |
| Team name       | Source Sans Pro  | 400    | 20px desktop, 18px mobile |
| Homepage IEEE   | Roboto Condensed | 700    | 122–215px                 |
| Homepage branch | Source Sans Pro  | 700    | 26–43px                   |

Fonts are local WOFF2 files. Roboto Condensed is variable; body weights 400, 600 and 700 have individual font files. Both families retain OFL licences. Letter spacing is natural rather than compressed. Fonts are loaded with Next.js localFont.

## Colour

| Use                 | Light   | Dark    |
| ------------------- | ------- | ------- |
| Page background     | #FFFFFF | #07081A |
| Secondary surface   | #DBEAF6 | #091A2F |
| Primary control     | #00639C | #0038FF |
| Heading/link accent | #00639C | #ADD5E3 |
| Main text           | #333333 | #F3F8FB |
| Secondary text      | #4C4C4C | #BACFDC |
| Homepage field      | #00639C | #07081A |
| Homepage plane      | #FFFFFF | #091A2F |
| Architectural line  | #A3CCDF | #ADD5E3 |

The dark values are from the supplied deck, including its vector electric blue. The light blue and pale background match the inspected reference. The events band uses the deeper primary blue for legible white body text.

## Page formats

The homepage uses a large right-aligned branch name and the existing local architectural panorama, followed by an introduction with a real photograph, community figures, a full blue initiative section, a team preview, a pale participation section, a complete logo grid and a blue contact/footer area.

Dedicated pages have centred titles, short introductions, plain text sections and real photographs. The team directory groups all 13 people by leadership and committee, using circular portraits with the role above the name. Filters and team jump links use underlined text rather than rounded pill controls.

Sponsors/partners are in a borderless grid, all visible at once. Every logo links to its official destination and retains original colours. Jane Street's dark artwork has a white canvas in dark mode. Social profiles and the friend club are available in the shared footer on every route.

The content container is 1200px, gutters 22–64px and section spacing 64–88px. Mobile layouts become single columns or simple two-column portrait/logo grids. Decorative cards, numbered tiles, project diagrams and repeated geometric accents are removed.

## Navigation and accessibility

The opening header is transparent where the hero offers sufficient contrast. At intermediate desktop widths and the narrowest phone width it uses an opaque surface to keep the brand and links readable. It becomes opaque on scroll, with a mobile menu below 900px. Short desktop windows adjust the title and drawing spacing. Escape closes the menu and returns focus; outside click closes it.

The theme follows the OS before an explicit preference, persists a choice, and initialises before first paint. Keyboard focus is visible, controls use 44px targets, images have descriptive alternative text and decorative linework is hidden from assistive technology. Reduced motion disables transitions and smooth scrolling. There is no continuous animation.

The favicon and Apple touch icon use the actual supplied IEEE diamond on blue. The share image is rendered with the same local fonts and homepage colours.
