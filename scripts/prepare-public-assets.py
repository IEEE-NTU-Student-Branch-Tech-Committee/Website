"""Prepare local webfonts and public assets; no internal QR material is used."""
from io import BytesIO
from pathlib import Path
import re

import fitz
import requests
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
font_destination = root / "src" / "fonts"
font_destination.mkdir(exist_ok=True)
font_query = "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Source+Sans+Pro:wght@400;600;700&display=swap"
response = requests.get(font_query, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"}, timeout=30)
response.raise_for_status()
for block in response.text.split("/* latin */")[1:]:
    face = block.split("}")[0]
    family = re.search(r"font-family: '([^']+)'", face).group(1)
    weight = re.search(r"font-weight: (\d+)", face).group(1)
    url = re.search(r"url\(([^)]+)\)", face).group(1)
    name = family.lower().replace(" ", "-") + "-" + weight + ".woff2"
    result = requests.get(url, timeout=30)
    result.raise_for_status()
    (font_destination / name).write_bytes(result.content)
    print(f"Downloaded {name}: {len(result.content)} bytes")

licenses = {
    "Roboto-Condensed-OFL.txt": "https://raw.githubusercontent.com/google/fonts/main/ofl/robotocondensed/OFL.txt",
    "Source-Sans-Pro-OFL.txt": "https://raw.githubusercontent.com/adobe-fonts/source-sans/release/LICENSE.md",
}
for name, url in licenses.items():
    result = requests.get(url, timeout=30)
    result.raise_for_status()
    (font_destination / name).write_bytes(result.content)

with fitz.open(root.parent / "AGM deck (2).pdf") as document:
    def extract(xref):
        pixmap = fitz.Pixmap(document, xref)
        mask = document.extract_image(xref).get("smask", 0)
        if mask:
            pixmap = fitz.Pixmap(pixmap, fitz.Pixmap(document, mask))
        return Image.open(BytesIO(pixmap.tobytes("png"))).convert("RGBA")

    destination = root / "public" / "images"
    campus = extract(52).convert("RGB")
    campus.thumbnail((1600, 960), Image.Resampling.LANCZOS)
    campus.save(destination / "ntu-campus.webp", quality=86)

    # Reviewed photographs from the public retrospective slide (page 4).
    presentation = extract(75).convert("RGB")
    presentation.save(destination / "intuition.webp", quality=88)
    coding = extract(74).convert("RGB").crop((6, 381, 387, 574))
    coding.save(destination / "coding-nights.webp", quality=90)

    masterbrand = extract(45)
    masterbrand.putalpha(masterbrand.getchannel("A").point(lambda alpha: 0 if alpha < 32 else alpha))
    diamond = masterbrand.crop((0, 0, 219, 218))
    print(f"Masterbrand bounds: {masterbrand.getbbox()}; diamond bounds: {diamond.getbbox()}")
    # White emblem on IEEE blue, preserving the original supplied mark.
    tile = Image.new("RGBA", (256, 256), "#00639c")
    emblem = ImageOps.contain(diamond, (220, 220), Image.Resampling.LANCZOS)
    tile.alpha_composite(emblem, ((256-emblem.width)//2, (256-emblem.height)//2))
    tile.save(root / "public" / "favicon.png", optimize=True)
    tile.resize((180, 180), Image.Resampling.LANCZOS).save(root / "public" / "apple-touch-icon.png", optimize=True)
    tile.save(root / "public" / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
