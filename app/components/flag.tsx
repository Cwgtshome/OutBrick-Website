import type { ReactNode } from 'react';
import type { Locale } from '../../lib/i18n/locales';

/**
 * Small drawn flags for the language picker, one per site language. They mirror the game's
 * `FlagArt` (Brickout/UI/FlagArt.swift): a compact table of designs (bands, a disc, a Nordic
 * cross, a crescent, a canton, the Union Jack simplified, an emblem standing in for a coat of
 * arms) finished as a brick-UI chip with rounded corners, a dark outline and a top gloss.
 * A flag stands for a language here, not a country (English uses the United Kingdom's,
 * matching the site's British spelling; Catalan the senyera). Decorative: the language name
 * next to it is the label, so the SVG is hidden from assistive technology.
 */

type Band = [colour: string, weight: number];
type Base = { plain: string } | { h: Band[] } | { v: Band[] };
type Overlay =
  | { hoist: string; f: number; shape: 'bar' | 'triangle' }
  | { disc: string; cx?: number; cy?: number; r?: number }
  | { emblem: string; cx?: number; cy?: number; r?: number }
  | { star: string; cx?: number; cy?: number; r?: number }
  | { crescent: string; cx?: number; cy?: number; r?: number }
  | { nordic: string; w: number }
  | { canton: string; w?: number; h?: number }
  | { cantonCross: string }
  | { unionJack: true }
  | { diamond: string }
  | { hexagram: string }
  | { taegeuk: true };
type Design = { base: Base; overlays?: Overlay[] };

const eq = (...colours: string[]): Band[] => colours.map((c) => [c, 1]);

// Colours are the flags' own, as in the game's table.
const designs: Record<Locale, Design> = {
  en: { base: { plain: '#012169' }, overlays: [{ unionJack: true }] },
  fr: { base: { v: eq('#0055A4', '#FFFFFF', '#EF4135') } },
  de: { base: { h: eq('#000000', '#DD0000', '#FFCE00') } },
  es: { base: { h: [['#AA151B', 1], ['#F1BF00', 2], ['#AA151B', 1]] } },
  ja: { base: { plain: '#FFFFFF' }, overlays: [{ disc: '#BC002D', r: 0.3 }] },
  'pt-BR': { base: { plain: '#009C3B' }, overlays: [{ diamond: '#FFDF00' }, { disc: '#002776', r: 0.24 }] },
  it: { base: { v: eq('#009246', '#FFFFFF', '#CE2B37') } },
  ko: { base: { plain: '#FFFFFF' }, overlays: [{ taegeuk: true }] },
  nl: { base: { h: eq('#AE1C28', '#FFFFFF', '#21468B') } },
  ru: { base: { h: eq('#FFFFFF', '#0039A6', '#D52B1E') } },
  tr: { base: { plain: '#E30A17' }, overlays: [{ crescent: '#FFFFFF', cx: 0.42, r: 0.28 }, { star: '#FFFFFF', cx: 0.62, r: 0.1 }] },
  'zh-Hans': { base: { plain: '#DE2910' }, overlays: [{ star: '#FFDE00', cx: 0.2, cy: 0.3, r: 0.2 }] },
  'zh-Hant': { base: { plain: '#FE0000' }, overlays: [{ canton: '#000095', w: 0.5, h: 0.5 }, { disc: '#FFFFFF', cx: 0.25, cy: 0.25, r: 0.13 }] },
  ar: { base: { plain: '#006C35' }, overlays: [{ emblem: '#FFFFFF' }] },
  he: { base: { h: [['#FFFFFF', 2], ['#0038B8', 1.2], ['#FFFFFF', 5], ['#0038B8', 1.2], ['#FFFFFF', 2]] }, overlays: [{ hexagram: '#0038B8' }] },
  ur: { base: { plain: '#01411C' }, overlays: [{ hoist: '#FFFFFF', f: 0.25, shape: 'bar' }, { crescent: '#FFFFFF', cx: 0.6, r: 0.26 }, { star: '#FFFFFF', cx: 0.74, cy: 0.36, r: 0.09 }] },
  bn: { base: { plain: '#006A4E' }, overlays: [{ disc: '#F42A41', cx: 0.45, r: 0.3 }] },
  hi: { base: { h: eq('#FF9933', '#FFFFFF', '#138808') }, overlays: [{ disc: '#000080', r: 0.16 }, { disc: '#FFFFFF', r: 0.1 }] },
  ca: { base: { h: eq('#FCDD09', '#DA121A', '#FCDD09', '#DA121A', '#FCDD09', '#DA121A', '#FCDD09', '#DA121A', '#FCDD09') } },
  cs: { base: { h: eq('#FFFFFF', '#D7141A') }, overlays: [{ hoist: '#11457E', f: 0.45, shape: 'triangle' }] },
  da: { base: { plain: '#C8102E' }, overlays: [{ nordic: '#FFFFFF', w: 0.16 }] },
  fi: { base: { plain: '#FFFFFF' }, overlays: [{ nordic: '#002F6C', w: 0.2 }] },
  hr: { base: { h: eq('#FF0000', '#FFFFFF', '#171796') }, overlays: [{ emblem: '#FF0000', r: 0.2 }, { emblem: '#FFFFFF', r: 0.09 }] },
  hu: { base: { h: eq('#CE2939', '#FFFFFF', '#477050') } },
  id: { base: { h: eq('#FF0000', '#FFFFFF') } },
  ms: { base: { h: eq('#CC0001', '#FFFFFF', '#CC0001', '#FFFFFF', '#CC0001', '#FFFFFF', '#CC0001') }, overlays: [{ canton: '#010066', w: 0.5, h: 0.57 }, { crescent: '#FFCC00', cx: 0.2, cy: 0.28, r: 0.17 }, { star: '#FFCC00', cx: 0.33, cy: 0.28, r: 0.08 }] },
  nb: { base: { plain: '#BA0C2F' }, overlays: [{ nordic: '#FFFFFF', w: 0.24 }, { nordic: '#00205B', w: 0.12 }] },
  pl: { base: { h: eq('#FFFFFF', '#DC143C') } },
  ro: { base: { v: eq('#002B7F', '#FCD116', '#CE1126') } },
  sk: { base: { h: eq('#FFFFFF', '#0B4EA2', '#EE1C25') }, overlays: [{ emblem: '#FFFFFF', cx: 0.34, r: 0.24 }, { emblem: '#EE1C25', cx: 0.34, r: 0.18 }] },
  sv: { base: { plain: '#006AA7' }, overlays: [{ nordic: '#FECC00', w: 0.16 }] },
  th: { base: { h: [['#A51931', 1], ['#F4F5F8', 1], ['#2D2A4A', 2], ['#F4F5F8', 1], ['#A51931', 1]] } },
  vi: { base: { plain: '#DA251D' }, overlays: [{ star: '#FFFF00', r: 0.3 }] },
  'es-419': { base: { v: eq('#006847', '#FFFFFF', '#CE1126') }, overlays: [{ emblem: '#8A6C3A' }] },
  'pt-PT': { base: { v: [['#006600', 2], ['#FF0000', 3]] }, overlays: [{ disc: '#FFE000', cx: 0.4, r: 0.22 }] },
  el: { base: { h: eq('#0D5EAF', '#FFFFFF', '#0D5EAF', '#FFFFFF', '#0D5EAF', '#FFFFFF', '#0D5EAF', '#FFFFFF', '#0D5EAF') }, overlays: [{ canton: '#0D5EAF', w: 0.38, h: 0.56 }, { cantonCross: '#FFFFFF' }] },
  uk: { base: { h: eq('#0057B7', '#FFD700') } },
  'fr-CA': { base: { v: [['#FF0000', 1], ['#FFFFFF', 2], ['#FF0000', 1]] }, overlays: [{ emblem: '#FF0000' }] },
  sl: { base: { h: eq('#FFFFFF', '#0000FF', '#FF0000') }, overlays: [{ emblem: '#0000FF', cx: 0.3, cy: 0.4, r: 0.17 }, { emblem: '#FFFFFF', cx: 0.3, cy: 0.4, r: 0.08 }] },
};

// The chip, in the game's proportions (26 × 18 points, a 1.5-point outline, 3-point corners).
const W = 26, H = 18, O = 1.5, R = 3;
const X0 = O / 2, Y0 = O / 2, FW = W - O, FH = H - O;
const OUTLINE = '#2A1B5E';
const n = (v: number) => Math.round(v * 100) / 100;
const px = (fx: number) => n(X0 + FW * fx);
const py = (fy: number) => n(Y0 + FH * fy);

function base(b: Base): ReactNode[] {
  if ('plain' in b) return [<rect key="b" x={X0} y={Y0} width={FW} height={FH} fill={b.plain} />];
  const bands = 'h' in b ? b.h : b.v;
  const total = bands.reduce((s, [, w]) => s + w, 0);
  let at = 0;
  return bands.map(([colour, w], i) => {
    const start = at / total;
    at += w;
    const size = w / total;
    return 'h' in b
      ? <rect key={`b${i}`} x={X0} y={py(start)} width={FW} height={n(FH * size + 0.3)} fill={colour} />
      : <rect key={`b${i}`} x={px(start)} y={Y0} width={n(FW * size + 0.3)} height={FH} fill={colour} />;
  });
}

function star(cx: number, cy: number, outer: number): string {
  const inner = outer * 0.42;
  const pts = Array.from({ length: 10 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const r = i % 2 === 0 ? outer : inner;
    return `${n(cx + Math.cos(a) * r)},${n(cy + Math.sin(a) * r)}`;
  });
  return `M${pts.join('L')}Z`;
}

function overlay(o: Overlay, i: number): ReactNode {
  const k = `o${i}`;
  if ('hoist' in o) {
    const d = o.shape === 'bar'
      ? `M${px(0)},${py(0)}H${px(o.f)}V${py(1)}H${px(0)}Z`
      : `M${px(0)},${py(0)}L${px(o.f)},${py(0.5)}L${px(0)},${py(1)}Z`;
    return <path key={k} d={d} fill={o.hoist} />;
  }
  if ('disc' in o) return <circle key={k} cx={px(o.cx ?? 0.5)} cy={py(o.cy ?? 0.5)} r={n(FH * (o.r ?? 0.3))} fill={o.disc} />;
  if ('emblem' in o) return <circle key={k} cx={px(o.cx ?? 0.5)} cy={py(o.cy ?? 0.5)} r={n(FH * (o.r ?? 0.17))} fill={o.emblem} />;
  if ('star' in o) return <path key={k} d={star(px(o.cx ?? 0.5), py(o.cy ?? 0.5), FH * (o.r ?? 0.18))} fill={o.star} />;
  if ('crescent' in o) {
    const cx = px(o.cx ?? 0.5), cy = py(o.cy ?? 0.5), r = FH * (o.r ?? 0.3);
    // The disc minus a smaller disc nudged towards the fly, as the game draws it.
    const bx = n(cx - r * 0.55 + r * 0.82), by = cy, br = n(r * 0.82);
    return (
      <path key={k} fillRule="evenodd" fill={o.crescent}
        d={`M${n(cx - r)},${cy}a${n(r)},${n(r)} 0 1,0 ${n(2 * r)},0a${n(r)},${n(r)} 0 1,0 ${n(-2 * r)},0Z M${n(bx - br)},${by}a${br},${br} 0 1,0 ${n(2 * br)},0a${br},${br} 0 1,0 ${n(-2 * br)},0Z`} />
    );
  }
  if ('nordic' in o) {
    const t = FH * o.w, x = X0 + FW * 0.36;
    return (
      <g key={k} fill={o.nordic}>
        <rect x={n(x - t / 2)} y={Y0} width={n(t)} height={FH} />
        <rect x={X0} y={n(Y0 + FH / 2 - t / 2)} width={FW} height={n(t)} />
      </g>
    );
  }
  if ('canton' in o) return <rect key={k} x={X0} y={Y0} width={n(FW * (o.w ?? 0.42))} height={n(FH * (o.h ?? 0.54))} fill={o.canton} />;
  if ('cantonCross' in o) {
    const cw = FW * 0.38, ch = FH * 0.56, t = ch * 0.18;
    return (
      <g key={k} fill={o.cantonCross}>
        <rect x={n(X0 + cw / 2 - t / 2)} y={Y0} width={n(t)} height={n(ch)} />
        <rect x={X0} y={n(Y0 + ch / 2 - t / 2)} width={n(cw)} height={n(t)} />
      </g>
    );
  }
  if ('unionJack' in o) {
    const x1 = X0 + FW, y1 = Y0 + FH, mx = X0 + FW / 2, my = Y0 + FH / 2;
    const diag = `M${X0},${Y0}L${n(x1)},${n(y1)}M${n(x1)},${Y0}L${X0},${n(y1)}`;
    return (
      <g key={k}>
        <path d={diag} stroke="#FFFFFF" strokeWidth={n(FH * 0.2)} />
        <path d={diag} stroke="#C8102E" strokeWidth={n(FH * 0.07)} />
        <path d={`M${n(mx)},${Y0}V${n(y1)}M${X0},${n(my)}H${n(x1)}`} stroke="#FFFFFF" strokeWidth={n(FH * 0.3)} />
        <path d={`M${n(mx)},${Y0}V${n(y1)}M${X0},${n(my)}H${n(x1)}`} stroke="#C8102E" strokeWidth={n(FH * 0.16)} />
      </g>
    );
  }
  if ('diamond' in o) return <path key={k} d={`M${px(0.5)},${py(0.1)}L${px(0.9)},${py(0.5)}L${px(0.5)},${py(0.9)}L${px(0.1)},${py(0.5)}Z`} fill={o.diamond} />;
  if ('hexagram' in o) {
    const cx = px(0.5), cy = py(0.5), r = FH * 0.2;
    const tri = (start: number) => [0, 1, 2].map((j) => {
      const a = ((start + j * 120) * Math.PI) / 180;
      return `${n(cx + Math.cos(a) * r)},${n(cy + Math.sin(a) * r)}`;
    }).join('L');
    return <path key={k} d={`M${tri(-90)}ZM${tri(90)}Z`} fill="none" stroke={o.hexagram} strokeWidth="0.9" strokeLinejoin="round" />;
  }
  // Taegeuk: a red-over-blue disc with the two small swirls, simplified as the game draws it.
  const cx = px(0.5), cy = py(0.5), r = FH * 0.27;
  return (
    <g key={k}>
      <path d={`M${n(cx - r)},${n(cy)}a${n(r)},${n(r)} 0 0,1 ${n(2 * r)},0Z`} fill="#CD2E3A" />
      <path d={`M${n(cx - r)},${n(cy)}a${n(r)},${n(r)} 0 0,0 ${n(2 * r)},0Z`} fill="#0047A0" />
      <circle cx={n(cx - r / 2)} cy={n(cy)} r={n(r / 2)} fill="#CD2E3A" />
      <circle cx={n(cx + r / 2)} cy={n(cy)} r={n(r / 2)} fill="#0047A0" />
    </g>
  );
}

export function Flag({ locale, size = 22 }: { locale: Locale; size?: number }) {
  const d = designs[locale];
  const height = Math.round((size * H) / W);
  return (
    <svg width={size} height={height} viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false" className="flag">
      {base(d.base)}
      {(d.overlays ?? []).map(overlay)}
      {/* Top gloss, faded to nothing by mid-height, like the game's pill buttons. */}
      <rect x={X0} y={Y0} width={FW} height={n(FH / 4)} fill="#FFFFFF" opacity="0.24" />
      <rect x={X0} y={n(Y0 + FH / 4)} width={FW} height={n(FH / 4)} fill="#FFFFFF" opacity="0.1" />
      {/* Square corners outside the outline are painted over by the chip's own rounded stroke. */}
      <rect x={X0} y={Y0} width={FW} height={FH} rx={R} fill="none" stroke={OUTLINE} strokeWidth={O} />
    </svg>
  );
}
