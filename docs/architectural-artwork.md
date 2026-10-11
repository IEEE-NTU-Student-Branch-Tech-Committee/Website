# Homepage architectural drawing

Current artwork: `public/images/singapore-pen-lineart.svg` (944 × 288 viewBox). It is a manually authored vector drawing, using transparent unfilled paths with round caps and joins and a 2.9-unit stroke. It uses the branch's requested waterfront composition and pen-drawing treatment: Esplanade roof shells, Singapore Flyer, three Marina Bay Sands towers and their SkyPark, Supertrees and ArtScience Museum.

The SVG replaces the previous stock-preview JPEG. It contains no embedded raster image, watermark, external dependency or image filter. The original branch-supplied `lineart.jpg` remains untouched outside the public assets; the old public JPEG is removed.

The homepage preserves its vertical 50/50 split: white/blue in light mode and the shared #07081A/#091A2F navy surfaces in dark mode. A single SVG image supplies a transparent alpha mask. Two rectangles colour the drawn lines blue/white in light mode and ice-blue/near-white in dark mode, with the colour boundary exactly at the viewport centre. The vector image stays sharp at every size and spans the full width of the lower opening.

The IEEE identity in the upper left half uses the supplied official masterbrand image, including its diamond symbol and lettering. It retains its proportions, has a 390px maximum display width and ample clear space; its official white version is used on the dark homepage. The heading retains the IEEE name for assistive technology. The small header lockup is removed; the footer identity remains.

Desktop navigation uses six equal columns across the content width, followed by the theme control. In light mode, the first three homepage links use blue text on white, and the last three use white text on blue. Dark mode uses the same ice-blue navigation text as the rest of the site. Mobile navigation remains a menu, with normal dropdown theme colours.

The architectural drawing is decorative, hidden from assistive technology and has no animation. Wide, short windows give the opening enough height to keep the identity and branch name separate from the landmark ink. Ordinary builds use the checked-in SVG and require no PDF, source JPEG or external image service.
