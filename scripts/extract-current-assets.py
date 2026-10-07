"""Prepare only public brand, event and partner assets from the current source.

The page and image allowlist deliberately excludes internal QR codes and forms.
Requires PyMuPDF and Pillow; this is an optional content maintenance script.
"""
from io import BytesIO
from pathlib import Path

import fitz
from PIL import Image

root = Path(__file__).resolve().parents[1]
source = root.parent / "AGM deck (2).pdf"
destination = root / "public" / "images"
review = root.parent / "tmp" / "agm-review"
destination.mkdir(parents=True, exist_ok=True)
review.mkdir(parents=True, exist_ok=True)

with fitz.open(source) as document:
    def extract(xref):
        image = fitz.Pixmap(document, xref)
        mask = document.extract_image(xref).get("smask", 0)
        if mask:
            image = fitz.Pixmap(image, fitz.Pixmap(document, mask))
        return Image.open(BytesIO(image.tobytes("png"))).convert("RGBA")

    # Source page 11: original artwork, without recolouring or redrawing.
    partner_images = {
        "govtech": 2534,
        "youthtechsg": 2528,
        "edb": 2543,
        "dsta": 2540,
        "reactor-school": 2549,
        "imda": 2546,
        "ntu-cao": 2525,
    }
    partner_destination = destination / "partners"
    partner_destination.mkdir(exist_ok=True)
    for name, xref in partner_images.items():
        if xref not in {item[0] for item in document[10].get_images()}:
            raise ValueError(f"Partner source changed: {name}")
        extract(xref).save(partner_destination / f"{name}.png", optimize=True)

    # Public event/campus photography, reviewed separately before publication.
    review_photos = {"campus": 52, "agm-retrospective": 73, "coding-retrospective": 74, "hackathon-source": 75}
    for name, xref in review_photos.items():
        extract(xref).convert("RGB").save(review / f"{name}.jpg", quality=94)

    group = extract(67).convert("RGB")
    for width in (480, 800, 1200):
        group.resize((width, round(width * group.height / group.width)), Image.Resampling.LANCZOS).save(
            destination / f"community-{width}.webp", quality=88
        )

    # The masterbrand supplied on page 1 contains the official IEEE diamond.
    masterbrand = extract(45)
    # Discard the faint rectangular export boundary around the supplied logo.
    masterbrand.putalpha(masterbrand.getchannel("A").point(lambda alpha: 0 if alpha < 32 else alpha))
    masterbrand.save(destination / "ieee-white.png", optimize=True)
    print("Prepared 7 confirmed partner logos and 3 community image sizes. Internal pages excluded.")
