"""Prepare supplied public event photographs. Optional: Pillow and FFmpeg.

Original photos stay in the supplied folders; builds use the checked-in assets.
"""
from pathlib import Path
import shutil
import subprocess

from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
scratch = root / "tmp" / "event-assets"
scratch.mkdir(parents=True, exist_ok=True)
destination = root / "public" / "images"

decoded = scratch / "intuition.png"
subprocess.run([
    "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
    "-i", str(root.parent / "intuition.HEIC"),
    "-frames:v", "1", "-update", "1", str(decoded),
], check=True)

def prepare(source, filename, ceiling_fraction):
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        # Frame the actual stage and audience, reducing empty ceiling space.
        image = image.crop((0, round(image.height * ceiling_fraction), image.width, image.height))
        image.thumbnail((1600, 1200), Image.Resampling.LANCZOS)
        image.save(destination / filename, quality=88, method=6)
        print(f"Prepared {filename}: {image.width} x {image.height}")

prepare(decoded, "intuition-event.webp", .23)
prepare(root / "coding night.JPG", "coding-nights-event.webp", .15)
shutil.copyfile(root / "industry.jpg", destination / "industry.jpg")
print("Copied supplied industry.jpg without alteration.")
