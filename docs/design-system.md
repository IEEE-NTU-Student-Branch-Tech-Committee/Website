# IEEE NTU — Connected by possibility

The AGM is a brand seed. The website uses an editorial grid, asymmetric composition, original connected-diamond geometry, and deliberate blue emphasis. People and real community photography keep the technical identity human.

## Design source of truth

No Figma server or creation tool is available in this session. The source of truth is `src/styles/tokens.css`, reusable components, and the rendered site. No Figma document was created. Browser screenshots at 390, 768, 1024 and 1440 pixels validate the implementation in both themes.

## Palette

Dark: ink #050a16, elevated navy #0a1628, translucent #10233b, ice #eef9ff, secondary #a4b5c9, blue #114bff, bright accent #80adff. Light: #f5f9fc, white surfaces, #08172a text, #53667b secondary, #0b46ff blue. Both reuse semantic tokens. Dark blue buttons use white text; bright blue is reserved for foreground emphasis on dark backgrounds.

## Type and rhythm

Self-hosted Inter Variable; no runtime font service. Headings use weight 600–750 and compact tracking. Hero size scales from 48 to 88px; body 16–18px. Max content width 1280px; gutters 24–64px; section spacing 72–120px. Card radius 16–24px; controls 6–8px. Fine borders, one restrained panel shadow, no ubiquitous glass.

## Key frames before implementation

Desktop home: 88px navigation; two-column hero (editorial text 58%, original geometric visual 42%); quiet topic strip; four-column metrics; about statement and since-1991 detail; asymmetric initiative portfolio; five functional pillars; real group photo and people teaser; broad partnership panel; compact footer.

Mobile home: compact wordmark and two 44px controls; hero copy first, a cropped original geometry below; two-column metrics; single-column portfolio with tighter artwork; stacked community and partnership panels. Tablet uses two-column cards and a collapsible navigation until sufficient space is available.

Light and dark retain exactly the same spatial hierarchy. Light uses a pale technical drawing effect in the hero; dark uses restrained ambient blue. All information remains readable without effects or animation.

## Components

Primary/secondary buttons, text links, tags, section headers, responsive navigation, theme control, glass panel, project card, metric, person card, partnership panel, footer. Focus rings are always visible for keyboard input. No essential interaction relies on hover. Reduced motion disables transitions and smooth scrolling.
