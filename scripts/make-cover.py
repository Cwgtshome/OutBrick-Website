#!/usr/bin/env python3
"""Journal covers built from real game art, in the style of the existing ones.

    python3 scripts/make-cover.py <slug> [<slug> ...] [--category-color blue] [--force]
    python3 scripts/make-cover.py --missing          # every article in the batches without a cover

Each cover is 1600 x 900 WebP: the navy brick grid, a floor band, a phone showing a real
capture (a board, the Journey map, the collection, a village), two of the nine friends and a few
floating bricks. The slug seeds every choice, so a cover is stable across runs, and the
category colour tints the floor and one brick. Output: public/blog/<slug>.webp (about 60 KB).
"""

import hashlib
import json
import random
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'
W, H = 1600, 900

BRICK = {
    'red': ('#e2372f', '#8e1c18'),
    'yellow': ('#f9c823', '#b8780a'),
    'blue': ('#3b8bf0', '#1d4fa6'),
    'green': ('#3fc544', '#1f7f2a'),
    'purple': ('#7b5cf0', '#4a35b0'),
    'teal': ('#26b9b0', '#137a74'),
    'pink': ('#f26ab8', '#b0367e'),
    'orange': ('#f5851f', '#b85a10'),
}
BRICK['gold'] = BRICK['yellow']  # the journal calls Learning through play's colour gold
FRIENDS = ['bloo', 'bricko', 'flurry', 'moss', 'peach', 'poppy', 'sprout', 'vio', 'zippy']


def screens():
    shots = sorted(p for p in (PUBLIC / 'assets/screens').glob('iphone-*.png'))
    villages = sorted((PUBLIC / 'assets/villages').glob('*.jpg'))
    return shots, villages


def rounded(im, radius):
    mask = Image.new('L', im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, im.size[0] - 1, im.size[1] - 1), radius, fill=255)
    out = Image.new('RGBA', im.size)
    out.paste(im.convert('RGBA'), (0, 0), mask)
    return out


def brick(width_studs, colour, angle, scale=1.0):
    face, foot = BRICK[colour]
    stud = int(56 * scale)
    w, h = width_studs * stud + int(20 * scale), int(78 * scale)
    im = Image.new('RGBA', (w + 20, h + 30), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    r = int(14 * scale)
    d.rounded_rectangle((10, 18, 10 + w, 18 + h), r, fill=foot)
    d.rounded_rectangle((10, 10, 10 + w, 10 + h - int(8 * scale)), r, fill=face)
    for i in range(width_studs):
        cx = 10 + int(10 * scale) + i * stud + stud // 2
        cy = 10 + (h - int(8 * scale)) // 2
        rr = int(17 * scale)
        d.ellipse((cx - rr, cy - rr, cx + rr, cy + rr), outline=foot, width=max(2, int(3 * scale)))
    return im.rotate(angle, resample=Image.BICUBIC, expand=True)


def phone(capture, height=780):
    shot = Image.open(capture).convert('RGB')
    sw = int(height * 0.46)
    sh = int(sw * shot.size[1] / shot.size[0])
    shot = shot.resize((sw, sh), Image.LANCZOS)
    bez = 18
    body = Image.new('RGBA', (sw + bez * 2, sh + bez * 2), (0, 0, 0, 0))
    ImageDraw.Draw(body).rounded_rectangle((0, 0, body.size[0] - 1, body.size[1] - 1), 58, fill='#f4ecd9')
    body.alpha_composite(rounded(shot, 44), (bez, bez))
    return body


def background(seed_colour, rng):
    im = Image.new('RGBA', (W, H), '#1e2a7e')
    d = ImageDraw.Draw(im)
    for x in range(0, W, 130):
        d.line((x, 0, x, H), fill='#253293', width=2)
    for y in range(0, H, 130):
        d.line((0, y, W, y), fill='#253293', width=2)
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(glow).ellipse((W * 0.2, -H * 0.2, W * 0.8, H * 1.0), fill=(90, 110, 230, 70))
    im.alpha_composite(glow.filter(ImageFilter.GaussianBlur(120)))
    face, foot = BRICK[seed_colour]
    d = ImageDraw.Draw(im)
    d.rectangle((0, H - 92, W, H), fill='#6a4fe0')
    d.rectangle((0, H - 92, W, H - 84), fill=face)
    return im


def make(slug, colour, force=False):
    out = PUBLIC / 'blog' / f'{slug}.webp'
    if out.exists() and not force:
        return False
    rng = random.Random(int(hashlib.sha256(slug.encode()).hexdigest(), 16))
    colour = colour if colour in BRICK else rng.choice(list(BRICK))
    im = background(colour, rng)
    shots, villages = screens()
    capture = rng.choice(shots + villages[: max(1, len(shots))])

    # floating bricks behind everything, never over the phone
    colours = [colour] + rng.sample([c for c in BRICK if c != colour], 3)
    spots = [(170, 90), (1250, 110), (140, 420), (1340, 450)]
    rng.shuffle(spots)
    for (x, y), c in zip(spots[:3], colours):
        b = brick(rng.choice([2, 3, 4]), c, rng.uniform(-22, 22), rng.uniform(0.8, 1.05))
        im.alpha_composite(b, (x + rng.randint(-40, 40), y + rng.randint(-30, 30)))

    ph = phone(capture)
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    px, py = (W - ph.size[0]) // 2, 118
    ImageDraw.Draw(shadow).rounded_rectangle((px + 10, py + 30, px + ph.size[0] + 10, py + ph.size[1] + 30), 60, fill=(8, 10, 50, 140))
    im.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(28)))
    im.alpha_composite(ph, (px, py))

    left, right = rng.sample(FRIENDS, 2)
    for name, side in ((left, 'l'), (right, 'r')):
        f = Image.open(PUBLIC / 'assets/friends' / f'{name}.png').convert('RGBA')
        size = rng.randint(330, 380)
        f = f.resize((size, size), Image.LANCZOS)
        if side == 'r':
            f = f.transpose(Image.FLIP_LEFT_RIGHT)
        x = px - size + 40 if side == 'l' else px + ph.size[0] - 40
        im.alpha_composite(f, (x + rng.randint(-30, 10), H - size - 40 + rng.randint(-20, 10)))

    out.parent.mkdir(parents=True, exist_ok=True)
    im.convert('RGB').save(out, 'WEBP', quality=80, method=6)
    return True


def batch_articles():
    code = (
        "const m = await import('./lib/journal-batches/index.ts');"
        "console.log(JSON.stringify(m.batchArticles.map(a => [a.slug, a.categoryColor])))"
    )
    result = subprocess.run(
        ['node', '--experimental-strip-types', '--no-warnings', '--input-type=module', '-e', code],
        cwd=ROOT, capture_output=True, text=True, check=True,
    )
    return json.loads(result.stdout)


if __name__ == '__main__':
    args = sys.argv[1:]
    force = '--force' in args
    colour = None
    if '--category-color' in args:
        colour = args[args.index('--category-color') + 1]
    if '--missing' in args:
        todo = batch_articles()
    else:
        todo = [(a, colour) for a in args if not a.startswith('--') and a != colour]
    made = [slug for slug, c in todo if make(slug, c or '', force)]
    print(f'{len(made)} covers written' + (f': {", ".join(made)}' if made else ''))
