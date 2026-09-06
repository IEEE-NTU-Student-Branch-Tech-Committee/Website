"""Extract the two missing portraits from AGM deck (1).pdf (6 September 2026).

Requires PyMuPDF and Pillow. This optional maintenance script is not part of the build.
The original PDF is kept outside the repository; only cropped WebP files are public.
"""
from io import BytesIO
from pathlib import Path

import fitz
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
destination = root / 'public' / 'images'

# Verified against each complete office-bearer slide. Coordinates are source pixels.
# Divija's crop excludes the embedded recruitment frame without retouching her photo.
portraits = [
    ('divija-jain', 'Divija Jain', 6, 2439, (800, 800), (196, 64, 604, 523)),
    ('xizhe-zhang', 'Xizhe Zhang', 7, 1235, (687, 800), (190, 160, 610, 632)),
]

with fitz.open(root.parent / 'AGM deck (1).pdf') as document:
    for slug, name, page_number, xref, dimensions, crop in portraits:
        page = document[page_number - 1]
        if name not in page.get_text() or xref not in {item[0] for item in page.get_images()}:
            raise ValueError(f'Source mapping changed for {name}; inspect the slide first.')
        original = Image.open(BytesIO(document.extract_image(xref)['image'])).convert('RGB')
        if original.size != dimensions:
            raise ValueError(f'Source dimensions changed for {name}; review the crop.')
        portrait = ImageOps.fit(original.crop(crop), (480, 540), method=Image.Resampling.LANCZOS)
        portrait.save(destination / f'{slug}.webp', quality=88)
        print(f'Exported {slug}.webp from page {page_number} at 480 x 540.')
