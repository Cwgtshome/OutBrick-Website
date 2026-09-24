# Captures the website needs from the game

The site is built from real game art, and a few of the captures it uses are too small or out of
date. Export these from the **current build** and drop them in at the paths below, keeping the
file names. After you replace a file, run `pnpm build` and check the page. No code changes are
needed unless a size changes a lot.

Screens: capture on an iPhone 15 Pro or 16 Pro simulator at 1× UI (1179 × 2556 px native),
status bar cleaned (9:41, full battery, no carrier), colour-blind glyphs **on** (it is the
default), no debug overlays. Export PNG; the site converts nothing at build time, so also save a
JPEG (quality 82) or WebP (quality 80) at the web size given.

## Replace (low resolution or outdated)

| File | Web size | What it shows | Used on | Problem today |
|---|---|---|---|---|
| `public/assets/shots/b-early.jpg` | 560 × 1217 | A packed board at the start of a level | Home › The rule, step 1; press kit | 257 × 560, soft on retina |
| `public/assets/shots/b-mid.jpg` | 560 × 1217 | A board part-way through, with keys, locks, crates and gates visible | Home › step 2; press kit | 257 × 560 |
| `public/assets/shots/b-clear.jpg` | 560 × 1217 | The clear card with stars and coins | Home › step 3; press kit | 257 × 560 |
| `public/assets/shots/b-packed.jpg` | 560 × 1217 | A fully packed board | Press kit | 257 × 560 |
| `public/assets/shots/s-shop.jpg` | 560 × 1217 | The shop | Press kit | 257 × 560 |
| `public/assets/shots/s-coins.jpg` | 560 × 1217 | Coins / rewards screen | Press kit | 257 × 560 |
| `public/assets/widgets-montage.webp` | 1400 × 710 | Home Screen and Lock Screen widgets | Home › Built for Apple | Shows the retired round mascots and "Chapter 1 of 50" |
| `public/assets/villages/*.jpg` (28 files) | 520 × 1131 | The Journey map in each village, one per theme | Home › The Journey; journal covers | 239 × 520 — the pinned Journey shows them at ~180 px wide, fine on 1×, soft on retina |

For the press kit, also keep full-resolution PNG originals next to them (for example
`b-early@full.png`): the press kit offers downloads, and journalists want the largest file.

## New (optional, but they lift the site the most)

| File | Spec | Where it goes |
|---|---|---|
| `public/video/gameplay.mp4` (+ optional `gameplay.webm`) | 15–30 s, portrait 886 × 1920 or 1080 × 1920, H.264, no audio, under 4 MB. One board from packed to clear, a star moment, a friend reacting. | Set `GAMEPLAY_VIDEO` in `lib/site.ts` (`{ mp4: '/video/gameplay.mp4', poster: '/video/gameplay-poster.jpg', width: 886, height: 1920 }`); the hero and press kit pick it up. |
| `public/video/gameplay-poster.jpg` | First frame of the video, same size, JPEG q 80 | Poster shown before playback and under Reduce Motion |
| Apple Watch, Apple TV, Mac, iPad and Vision Pro captures | One each, native size | Built for Apple section; the Watch and Vision Pro journal articles currently use an illustrated frame around an iPhone board |

## Things the site will pick up on its own

- **App Store rating**: `scripts/prebuild.mjs` reads Apple's public record on every build.
  The rating line appears once there are at least 20 real ratings. Nothing to do.
- **Press quotes or awards**: there is no component for these yet, on purpose, so nothing is
  shown until real ones exist. Send them over with a link to the source.
