/**
 * QR codes for outbrick.site, drawn at build time.
 *
 * The encoder is Project Nayuki's QR Code generator library (MIT), vendored in
 * lib/vendor/qrcodegen.ts. This file only turns its module matrix into SVG
 * geometry, in two looks:
 *
 * - `plain`: square modules merged into horizontal runs. The most robust
 *   rendering, and the smallest markup.
 * - `brick`: every module a rounded square, and the three finder patterns drawn
 *   as rounded frames around a round "stud". Verified to decode (see
 *   scripts/generate-qr.mjs and the report in the commit that added it).
 *
 * Both keep the standard four-module quiet zone. Byte mode, error correction M,
 * versions 1–10: every URL the site encodes fits well inside that. A centre
 * logo is deliberately not supported: it would need level H and eats into the
 * margin the brick styling already uses.
 *
 * Imports carry their `.ts` extension so `node --experimental-strip-types`
 * (scripts/generate-qr.mjs, scripts/affiliate-qr.mjs) can load this file too.
 */

import { Ecc, QrCode, QrSegment } from './vendor/qrcodegen.ts';

export type QrStyle = 'plain' | 'brick';

export type QrMatrix = {
  /** Modules per side, without the quiet zone. */
  size: number;
  version: number;
  mask: number;
  /** `modules[y][x]`, true = dark. */
  modules: boolean[][];
};

/** Light modules around the symbol on every side, as ISO/IEC 18004 asks. */
export const QUIET_ZONE = 4;

/** The brand pair: indigo ink on cream paper, about 15:1. */
export const QR_DARK = '#1a1350';
export const QR_LIGHT = '#fff6e0';

/** Encode `value` as UTF-8 bytes (byte mode), error correction M, version 1–10. */
export function qrMatrix(value: string): QrMatrix {
  const bytes = Array.from(new TextEncoder().encode(value));
  // boostEcl = false: the level is M exactly, as specified, rather than whatever fits.
  const qr = QrCode.encodeSegments([QrSegment.makeBytes(bytes)], Ecc.MEDIUM, 1, 10, -1, false);
  const modules: boolean[][] = [];
  for (let y = 0; y < qr.size; y++) {
    const row: boolean[] = [];
    for (let x = 0; x < qr.size; x++) row.push(qr.getModule(x, y));
    modules.push(row);
  }
  return { size: qr.size, version: qr.version, mask: qr.mask, modules };
}

/** Top-left corners of the three finder patterns, in module coordinates. */
function finderOrigins(size: number): [number, number][] {
  return [
    [0, 0],
    [size - 7, 0],
    [0, size - 7],
  ];
}

function inFinder(size: number, x: number, y: number): boolean {
  return finderOrigins(size).some(([fx, fy]) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7);
}

const n = (value: number) => String(Math.round(value * 1000) / 1000).replace(/^0\./, '.').replace(/^-0\./, '-.');

/**
 * The geometry of one QR code, in a viewBox of `side` × `side` units, one unit
 * per module, the quiet zone included.
 *
 * - `plain`: `path` is every dark module, filled.
 * - `brick`: `path` is every dark module outside the finders as a small square
 *   to be filled *and* stroked with `strokeWidth` and round joins, which draws
 *   a full-size module with rounded corners in a fraction of the markup that
 *   arcs would take; `finders` are drawn separately as rounded rectangles.
 */
export type QrGeometry = {
  side: number;
  version: number;
  style: QrStyle;
  path: string;
  strokeWidth: number;
  finders: { x: number; y: number }[];
};

/** Corner radius of a brick-style module is half the stroke: 0.28 of a module. */
const BRICK_STROKE = 0.56;

export function qrGeometry(value: string, style: QrStyle = 'brick'): QrGeometry {
  const { size, version, modules } = qrMatrix(value);
  const side = size + QUIET_ZONE * 2;
  const parts: string[] = [];
  if (style === 'plain') {
    for (let y = 0; y < size; y++) {
      let x = 0;
      while (x < size) {
        if (!modules[y][x]) {
          x += 1;
          continue;
        }
        let run = 1;
        while (x + run < size && modules[y][x + run]) run += 1;
        parts.push(`M${x + QUIET_ZONE},${y + QUIET_ZONE}h${run}v1h-${run}z`);
        x += run;
      }
    }
    return { side, version, style, path: parts.join(''), strokeWidth: 0, finders: [] };
  }
  const inset = BRICK_STROKE / 2;
  const inner = n(1 - BRICK_STROKE);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (!modules[y][x] || inFinder(size, x, y)) continue;
      parts.push(`M${n(x + QUIET_ZONE + inset)},${n(y + QUIET_ZONE + inset)}h${inner}v${inner}h-${inner}z`);
    }
  }
  const finders = finderOrigins(size).map(([x, y]) => ({ x: x + QUIET_ZONE, y: y + QUIET_ZONE }));
  return { side, version, style, path: parts.join(''), strokeWidth: BRICK_STROKE, finders };
}

/**
 * The finder pattern as three rounded rectangles: a 7×7 frame, its 5×5 light
 * window, and a round 3×3 stud. Same proportions the standard requires
 * (1:1:3:1:1), only the corners are softened.
 */
export const FINDER_SHAPES = [
  { offset: 0, width: 7, radius: 2, dark: true },
  { offset: 1, width: 5, radius: 1.3, dark: false },
  { offset: 2, width: 3, radius: 1.5, dark: true },
] as const;

/**
 * A complete standalone SVG document: for the printable files in public/qr/
 * and the affiliate helper. `size` is the rendered width and height in CSS
 * pixels; the drawing itself is resolution-independent.
 */
export function qrSvgDocument(
  value: string,
  { style = 'brick', dark = QR_DARK, light = QR_LIGHT, size = 512, title }: { style?: QrStyle; dark?: string; light?: string; size?: number; title?: string } = {},
): string {
  const g = qrGeometry(value, style);
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const label = title ?? `QR code: ${value}`;
  const body: string[] = [`<rect width="${g.side}" height="${g.side}" fill="${light}"/>`];
  if (g.style === 'plain') {
    body.push(`<path fill="${dark}" d="${g.path}"/>`);
  } else {
    body.push(`<path fill="${dark}" stroke="${dark}" stroke-width="${n(g.strokeWidth)}" stroke-linejoin="round" d="${g.path}"/>`);
    for (const f of g.finders) {
      for (const s of FINDER_SHAPES) {
        body.push(`<rect x="${f.x + s.offset}" y="${f.y + s.offset}" width="${s.width}" height="${s.width}" rx="${s.radius}" fill="${s.dark ? dark : light}"/>`);
      }
    }
  }
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${g.side} ${g.side}" width="${size}" height="${size}" role="img" aria-label="${esc(label)}">`,
    `<title>${esc(label)}</title>`,
    ...body,
    '</svg>',
    '',
  ].join('\n');
}
