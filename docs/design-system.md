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
| Homepage IEEE   | Official logo    | —      | up to 390px wide          |
| Homepage branch | Source Sans Pro  | 700    | 18–50px                   |

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
| Homepage right half | #00639C | #091A2F |
| Homepage left half  | #FFFFFF | #07081A |
| Left linework       | #00639C | #ADD5E3 |
| Right linework      | #FFFFFF | #F3F8FB |

The dark values are from the supplied deck, including its vector electric blue for primary controls. The dark homepage uses the same navy background and secondary surface as the other pages; the IEEE masterbrand is white, headings and navigation are ice blue, and the university name uses the shared secondary text colour. The light blue and pale background match the inspected reference. The events band uses the deeper primary blue for legible white body text.

## Page formats

In light mode, the homepage opens with equal vertical white and blue halves. The official IEEE masterbrand, including its diamond and lettering, is centred in the left half at a reduced size; NTU Student Branch is centred in the right, with Nanyang Technological University directly below. A newly drawn SVG panorama spans the full width of the lower opening, blue on white and white on blue, with slightly heavier pen-style lines. It replaces the stock-preview JPEG and contains no bitmap or watermark. On phones, NTU and Student Branch occupy two lines within the right half. The opening is followed by an introduction with a real photograph, community figures, a full blue initiative section, a team preview, a pale participation section, a complete logo grid and a blue contact/footer area.

Dedicated pages have centred titles, short introductions, plain text sections and real photographs. The team directory groups all 13 people by leadership and committee, using circular portraits with the role above the name. Filters and team jump links use underlined text rather than rounded pill controls.

Sponsors/partners are in a borderless grid, all visible at once. Every logo links to its official destination and retains original colours. Jane Street's dark artwork has a white canvas in dark mode. Social profiles and the friend club are available in the shared footer on every route.

The content container is 1200px, gutters 22–64px and section spacing 64–88px. Mobile layouts become single columns or simple two-column portrait/logo grids. Decorative cards, numbered tiles, project diagrams and repeated geometric accents are removed.

## Navigation and accessibility

The small header logo is removed on all routes. Desktop navigation fills the available width in six equal columns, with the theme control on the right. The opening header continues the white/blue division; the first three links are blue on white and the last three are white on blue in light mode, while all six use the shared ice-blue navigation colour in dark mode. It becomes opaque on scroll, with a mobile menu below 900px. Wide, short windows allow the opening to grow enough to keep the identity and title clear of the panorama. Escape closes the menu and returns focus; outside click closes it.

The theme follows the OS before an explicit preference, persists a choice, and initialises before first paint. Keyboard focus is visible, controls use 44px targets, images have descriptive alternative text and decorative linework is hidden from assistive technology. Reduced motion disables transitions and smooth scrolling. There is no continuous animation.

The favicon and Apple touch icon use the actual supplied IEEE diamond on blue. The share image is rendered with the same local fonts and homepage colours.
