#!/usr/bin/env python3
"""Genera la imagen de portada (1200x630, og:image) de cada post del blog a partir
de su titulo, con el mismo estilo que og-image.png (fondo oscuro, MANGO, dorado).

    python3 scripts/blog_cover.py <slug> [<slug>...]   # EN + ES del slug
    python3 scripts/blog_cover.py --all                 # todos los posts

Escribe public/blog/covers/<slug>-<lang>.png. Despues hay que poner en el
frontmatter del post:  coverImage: "/blog/covers/<slug>-<lang>.png"
"""
import re, sys, pathlib
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = pathlib.Path(__file__).resolve().parent.parent
BLOG = ROOT / "src/content/blog"; OUT = ROOT / "public/blog/covers"
W, H = 1200, 630; GOLD = (200, 169, 106); WHITE = (255, 255, 255)
TTC = "/System/Library/Fonts/HelveticaNeue.ttc"

def face(size, want):
    for i in range(12):
        try:
            f = ImageFont.truetype(TTC, size, index=i)
        except Exception:
            break
        if f.getname()[1].lower() == want.lower():
            return f
    return ImageFont.truetype(TTC, size, index=0)

def background():
    im = Image.new("RGB", (W, H), (6, 6, 6))
    glow = Image.new("RGB", (W, H), (6, 6, 6))
    d = ImageDraw.Draw(glow)
    d.ellipse((-200, -250, 700, 520), fill=(34, 14, 18))       # tinte calido arriba-izquierda
    d.ellipse((650, 250, 1500, 900), fill=(20, 12, 14))        # y abajo-derecha, como el og original
    glow = glow.filter(ImageFilter.GaussianBlur(160))
    return Image.blend(im, glow, 1.0)

def wrap(draw, text, font, max_w):
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if draw.textlength(t, font=font) <= max_w: cur = t
        else: lines.append(cur); cur = w
    if cur: lines.append(cur)
    return lines

def cover(slug, lang):
    src = BLOG / lang / f"{slug}.md"
    fm = src.read_text().split("---")[1]
    title = re.search(r'^title:\s*"(.+)"\s*$', fm, re.M).group(1)
    im = background(); d = ImageDraw.Draw(im)
    # cabecera: MANGO + BLOG
    d.text((80, 70), "MANGO", font=face(46, "Bold"), fill=WHITE)
    d.text((80 + d.textlength("MANGO", font=face(46, "Bold")) + 22, 84), "B L O G" if lang == "en" else "B L O G", font=face(20, "Medium"), fill=GOLD)
    d.rectangle((80, 150, 160, 155), fill=GOLD)
    # titulo, hasta 3 lineas, bajando el cuerpo si no cabe
    for size in (66, 60, 54, 48):
        f = face(size, "Bold"); lines = wrap(d, title, f, W - 160)
        if len(lines) <= 3: break
    y = 190; lh = int(size * 1.18)
    for ln in lines: d.text((80, y), ln, font=f, fill=WHITE); y += lh
    # pie
    foot = face(24, "Medium")
    d.text((80, H - 80), "Aitor González Rivera", font=foot, fill=(255, 255, 255, 180))
    site = "mangova.agency"; d.text((W - 80 - d.textlength(site, font=foot), H - 80), site, font=foot, fill=GOLD)
    OUT.mkdir(parents=True, exist_ok=True)
    out = OUT / f"{slug}-{lang}.png"; im.save(out, optimize=True)
    return out, title

args = sys.argv[1:]
slugs = sorted({p.stem for p in (BLOG / "es").glob("*.md")}) if args == ["--all"] else args
if not slugs: print(__doc__); sys.exit(1)
for s in slugs:
    for lang in ("en", "es"):
        if (BLOG / lang / f"{s}.md").exists():
            out, title = cover(s, lang); print(f"{out.relative_to(ROOT)}  <- {title[:60]}")
