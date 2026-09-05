"""One-time, optional extraction from the supplied AGM. Requires PyMuPDF and Pillow."""
from pathlib import Path
from io import BytesIO
import fitz
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
doc = fitz.open(root.parent / 'AGM deck.pdf')
out = root / 'public' / 'images'
out.mkdir(parents=True, exist_ok=True)

def extract(xref):
    return Image.open(BytesIO(doc.extract_image(xref)['image'])).convert('RGB')

photos = {
    'unnav-sharma': (2767, (0.5, 0.9)),
    'aviraj-goyle': (2770, (0.5, 0.72)),
    'saba-azad': (2773, (0.5, 0.5)),
    'hiren-jain': (113, (0.5, 0.85)),
    'bhavya-sangal': (112, (0.5, 0.75)),
    'maanya-malhotra': (2776, (0.5, 0.5)),
    'arjun-prakash': (2801, (0.5, 0.5)),
    'rushika-gupta': (2804, (0.5, 0.58)),
    'chuhan-mei': (2807, (0.5, 0.6)),
    'khushi-modi': (1310, (0.5, 0.5)),
    'nandisha-jindal': (2810, (0.5, 0.6)),
}
for name, (xref, center) in photos.items():
    im = extract(xref)
    crops = {
        'unnav-sharma': (135, 395, 535, 800),
        'bhavya-sangal': (105, 390, 515, 800),
        'hiren-jain': (55, 325, 485, 800),
        'aviraj-goyle': (100, 210, 530, 800),
    }
    if name in crops:
        im = im.crop(crops[name])
    ImageOps.fit(im, (480, 540), centering=center).save(out / f'{name}.webp', quality=86)

group = extract(67)
group.save(out / 'community-800.webp', quality=87)
group.resize((480, 288), Image.Resampling.LANCZOS).save(out / 'community-480.webp', quality=84)

logo = fitz.Pixmap(doc, 44)
logo = fitz.Pixmap(logo, fitz.Pixmap(doc, 1103))
logo.save(out / 'ieee-white.png')
print('Exported 11 verified portraits, 2 community sizes and the supplied IEEE masterbrand.')
