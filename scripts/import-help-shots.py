#!/usr/bin/env python3
"""Bring real game captures into the Help Centre.

    python3 scripts/import-help-shots.py <folder> <locale> [--map old=new ...]

<folder> holds full-screen PNG captures from the game (raw `simctl io screenshot` frames, no
store caption), named after the Help Centre's screenshot ids: `board-slide.png`, `home.png`,
`settings-a11y.png` … (see the `id` of every `shot` block in lib/help/content/en/*.ts).
`--map 01-slide=board-slide` renames a file on the way in, so a store-capture folder can be
imported as it is.

Each capture becomes public/assets/help/<locale>/<id>-480.webp and -960.webp, and
lib/help/shots.json records its size and the languages it exists in. A guide shows the
capture in the reader's language when there is one, and the English capture otherwise, with
the caption saying so. English captures are required for every id; other languages are
optional.

Needs Pillow with WebP support (python3 -m pip install pillow).
"""

import json
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'assets' / 'help'
CATALOG = ROOT / 'lib' / 'help' / 'shots.json'
LOCALES = {'en', 'fr', 'de', 'es', 'ja', 'pt-BR'}
WIDTHS = (480, 960)


def main(argv):
    if len(argv) < 3 or argv[2] not in LOCALES:
        print(__doc__)
        return 2
    src, locale = Path(argv[1]), argv[2]
    renames = {}
    rest = argv[3:]
    if rest and rest[0] == '--map':
        for pair in rest[1:]:
            old, new = pair.split('=', 1)
            renames[old] = new
    catalog = json.loads(CATALOG.read_text()) if CATALOG.exists() else {}
    dest = OUT / locale
    dest.mkdir(parents=True, exist_ok=True)
    count = 0
    for png in sorted(src.glob('*.png')):
        stem = renames.get(png.stem, png.stem)
        if renames and png.stem not in renames:
            print(f'skip  {png.name}  (not in --map)')
            continue
        image = Image.open(png).convert('RGB')
        w, h = image.size
        for width in WIDTHS:
            scaled = image.resize((width, round(h * width / w)), Image.LANCZOS) if width < w else image
            scaled.save(dest / f'{stem}-{width}.webp', 'WEBP', quality=80, method=6)
        entry = catalog.setdefault(stem, {'w': WIDTHS[-1], 'h': round(h * WIDTHS[-1] / w), 'locales': []})
        if locale == 'en':
            entry['w'], entry['h'] = WIDTHS[-1], round(h * WIDTHS[-1] / w)
        if locale not in entry['locales']:
            entry['locales'].append(locale)
            entry['locales'].sort()
        count += 1
        print(f'ok    {png.name} -> {locale}/{stem}')
    CATALOG.write_text(json.dumps(dict(sorted(catalog.items())), indent=2, ensure_ascii=False) + '\n')
    print(f'{count} captures imported for {locale}; catalog has {len(catalog)} ids')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
