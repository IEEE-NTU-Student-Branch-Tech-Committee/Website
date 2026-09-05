import sharp from 'sharp';

// Original typographic social artwork, not an official IEEE or NTU logo.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#00629b"/>
<path d="M0 0H540L0 630Z" fill="#fff"/>
<g font-family="Arial, Helvetica, sans-serif" fill="#fff">
<text x="610" y="252" font-size="170" font-weight="bold" letter-spacing="-10">IEEE</text>
<text x="618" y="312" font-size="37" letter-spacing="-1">NTU Student Branch</text>
</g>
<g fill="none" stroke="#80b6d0" stroke-width="1.2" opacity=".8">
<path d="M65 576Q409 630 780 585T1200 589M40 598Q409 653 780 607T1200 611"/>
<path d="M736 424H775L786 578H728Q742 483 736 424ZM810 424H849L860 578H802Q816 483 810 424ZM884 424H923L934 578H876Q890 483 884 424Z" fill="#126fa1"/>
<path d="M708 417Q811 397 955 402L943 422L731 435Z" fill="#297da9"/>
<path d="M708 417L955 402M759 429L764 578M833 429L838 578M907 429L912 578M735 459H777M734 486H779M733 513H781M731 541H783M809 459H851M808 486H853M807 513H855M805 541H857M883 459H925M882 486H927M881 513H929M879 541H931"/>
<circle cx="1083" cy="456" r="63"/><circle cx="1083" cy="456" r="59"/>
<path d="M1083 393V519M1020 456H1146M1038 411L1128 501M1038 501L1128 411M1083 456L1050 579M1083 456L1116 579"/>
<path d="M325 587V485h46v102M392 590V459h42v131M455 590V517h42v73M521 590V481h46v109M590 585V502h44v83" opacity=".4"/>
</g>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile('public/images/social-card.png');
