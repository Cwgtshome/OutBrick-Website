// Draws the email footer's images: the social tiles and the App Store badges.
//
// Social tiles: the website footer's square icon tiles
// (app/globals.css and app/styles/business.css, `footer.site .social a`) as PNGs, because
// Gmail, Outlook and Yahoo strip inline SVG.
//
// The glyphs are read from `socialGlyphs` in app/village-shell.tsx, so the email and the site
// cannot drift apart; one tile per network in lib/site.ts's socialProfiles. Each tile is the
// site's 44 px indigo tile (#2a2364, radius 12, the 2 px inset highlight) standing on its 4 px
// foot (#120c3a), with the 20 px glyph in white, all baked into the image so a client's dark
// mode cannot recolour one part and not the other.
//
// App Store badges: Apple's official, unmodified badges the site already uses
// (public/assets/badge, see SOURCES.md there), rasterized at 3× their 40 px height, one per
// badge language (pt-BR uses the English badge, as the site does).
//
//   node --experimental-strip-types scripts/build-email-images.mjs
//
// Output: public/assets/email/social-<network>.png at 3× (132 × 144, shown at 44 × 48) and
// public/assets/email/app-store-<lang>.png (height 120, shown at 40).
// Rasterized by macOS's SVG renderer (scripts/rasterize-svg.swift), so run it on a Mac and
// commit the PNGs; the build does not run it. Rerun it when a glyph or a network changes.

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { socialProfiles } = await import('../lib/site.ts');

const shellSource = fs.readFileSync(path.join(root, 'app/village-shell.tsx'), 'utf8');
const block = shellSource.match(/const socialGlyphs[^=]*=\s*\{([\s\S]*?)\n\};/)?.[1];
if (!block) throw new Error('socialGlyphs not found in app/village-shell.tsx');

/** network → SVG markup, from the JSX: attributes renamed, fragments dropped, glyph in white. */
const glyphs = {};
for (const [, network, jsx] of block.matchAll(/^\s{2}(\w+): \(\s*([\s\S]*?)\s*\),$/gm)) {
  glyphs[network] = jsx
    .replace(/<\/?>/g, '')
    .replace(/fillRule=/g, 'fill-rule=')
    .replace(/strokeWidth=/g, 'stroke-width=')
    .replace(/currentColor/g, '#ffffff')
    .trim();
}

const SCALE = 3;
const tile = (glyph) => `<svg xmlns="http://www.w3.org/2000/svg" width="${44 * SCALE}" height="${48 * SCALE}" viewBox="0 0 44 48">
<defs><clipPath id="t"><rect x="0" y="0" width="44" height="44" rx="12"/></clipPath></defs>
<rect x="0" y="4" width="44" height="44" rx="12" fill="#120c3a"/>
<rect x="0" y="0" width="44" height="44" rx="12" fill="#2a2364"/>
<rect x="0" y="0" width="44" height="2" fill="#ffffff" fill-opacity="0.1" clip-path="url(#t)"/>
<g transform="translate(12 12) scale(${20 / 24})">${glyph}</g>
</svg>`;

const outDir = path.join(root, 'public/assets/email');
fs.mkdirSync(outDir, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ob-social-'));
const pairs = [];
for (const { network } of socialProfiles) {
  if (!glyphs[network]) throw new Error(`no glyph for ${network} in socialGlyphs`);
  const svg = path.join(tmp, `${network}.svg`);
  fs.writeFileSync(svg, tile(glyphs[network]));
  pairs.push(svg, path.join(outDir, `social-${network}.png`));
}
const rasterize = (w, h, files) => execFileSync('swift', [path.join(root, 'scripts/rasterize-svg.swift'), String(w), String(h), ...files], { stdio: 'inherit' });
rasterize(44 * SCALE, 48 * SCALE, pairs);
fs.rmSync(tmp, { recursive: true, force: true });

const badgeDir = path.join(root, 'public/assets/badge');
let badges = 0;
for (const lang of ['en', 'fr', 'de', 'es', 'ja']) {
  const svg = path.join(badgeDir, lang === 'en' ? 'appstore-black.svg' : `appstore-black-${lang}.svg`);
  const [, w, h] = fs.readFileSync(svg, 'utf8').match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/) ?? [];
  if (!w) throw new Error(`no viewBox in ${svg}`);
  rasterize(Math.round((Number(w) / Number(h)) * 40 * SCALE), 40 * SCALE, [svg, path.join(outDir, `app-store-${lang}.png`)]);
  badges++;
}
console.log(`[email-images] ${pairs.length / 2} tiles and ${badges} badges written to ${path.relative(root, outDir)}/`);
