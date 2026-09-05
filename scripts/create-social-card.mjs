import sharp from 'sharp';

// Match the current homepage using its original generated architectural asset.
// librsvg embeds PNG reliably across platforms; the site itself serves WebP.
const drawing = (
  await sharp('public/images/ntu-singapore-linework.webp').png().toBuffer()
).toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><mask id="city" maskUnits="userSpaceOnUse" x="12" y="256" width="1176" height="392" style="mask-type:luminance">
<image href="data:image/png;base64,${drawing}" x="12" y="256" width="1176" height="392"/>
</mask></defs>
<rect width="1200" height="630" fill="#00629b"/>
<path d="M0 0H540L0 630Z" fill="#fff"/>
<rect x="12" y="256" width="1176" height="392" fill="#a3c6dc" mask="url(#city)"/>
<g font-family="Arial, Helvetica, sans-serif" fill="#fff">
<text x="610" y="214" font-size="170" font-weight="bold" letter-spacing="-10">IEEE</text>
<text x="618" y="274" font-size="37" letter-spacing="-1">NTU Student Branch</text>
</g></svg>`;
await sharp(Buffer.from(svg)).png().toFile('public/images/social-card.png');
