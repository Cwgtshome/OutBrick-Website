#!/usr/bin/env python3
"""Email art for the nine friends: public/assets/email/friends/<friend>-<pose>.png.

Reads the approved toy-brick renders from the game repository
(BrickoutCore/Sources/BrickoutCore/Resources/PreparedMascots/<friend>-<pose>.png, 512 px),
trims the transparent margin, centres each friend on a square canvas and writes a 192 px PNG
(shown at 96 px, so it is sharp on Retina screens). Only approved brick-friend art goes in
emails; the pre-redesign blob renders under the game repo's build/ must never be used.

    python3 scripts/build-email-friends.py /path/to/Brickout
"""

import sys
from pathlib import Path

from PIL import Image

FRIENDS = ['bloo', 'peach', 'sprout', 'bricko', 'zippy', 'vio', 'moss', 'flurry', 'poppy']
POSES = ['idle', 'cheer', 'think']
SIZE = 192
PAD = 6


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    source = Path(sys.argv[1]) / 'BrickoutCore/Sources/BrickoutCore/Resources/PreparedMascots'
    out = Path(__file__).resolve().parent.parent / 'public/assets/email/friends'
    out.mkdir(parents=True, exist_ok=True)
    for friend in FRIENDS:
        for pose in POSES:
            image = Image.open(source / f'{friend}-{pose}.png').convert('RGBA')
            image = image.crop(image.getchannel('A').getbbox())
            scale = (SIZE - 2 * PAD) / max(image.size)
            image = image.resize((round(image.width * scale), round(image.height * scale)), Image.LANCZOS)
            canvas = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
            # Feet on the floor: centred across, standing on the bottom edge, so in an email the
            # friend stands right on the plinth's studs.
            canvas.paste(image, ((SIZE - image.width) // 2, SIZE - 1 - image.height), image)
            # 256 colours with alpha keeps each file small enough for an email.
            canvas.quantize(256, method=Image.Quantize.FASTOCTREE).save(out / f'{friend}-{pose}.png', optimize=True)
    print(f'{len(FRIENDS) * len(POSES)} friend images -> {out}')


if __name__ == '__main__':
    main()
