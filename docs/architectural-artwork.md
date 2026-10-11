# Homepage architectural drawing

Current website asset: `public/images/singapore-handdrawn-lineart.jpg` (944 × 288px, 37,215 bytes), supplied by the branch as `lineart.jpg`. The public copy is byte-for-byte identical to the original. Ordinary builds use the checked-in asset and do not need the source file.

The homepage has an exact vertical 50/50 split, white on the left and blue on the right. A single SVG places the entire drawing across its full width. The left portion of its ink is blue and the right portion is white; the image and background colour boundaries both fall at the viewport centre.

The source has black and grey ink on opaque white paper. An SVG colour matrix converts paper luminance to alpha, keeping every grey ink tone, and a 0.45px dilation slightly strengthens the strokes. Two coloured rectangles use the resulting alpha mask. No raster rewriting, threshold cleanup, tracing or generative image editing is performed.

The supplied JPEG contains repeated Adobe Stock watermarks, which remain in the rendering. Use an authorised watermark-free source for a final clean presentation; do not remove source ownership marks in this rendering pipeline.

The drawing is decorative and hidden from assistive technology. It has no animation, maintains its aspect ratio, and remains full width on desktop and mobile. Wide, short windows give the opening enough height to keep its title separate from the landmark ink.

The older generated `ntu-singapore-linework.webp` remains an unused historical asset and is no longer requested by the homepage.
