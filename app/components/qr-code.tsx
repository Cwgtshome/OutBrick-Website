/**
 * A QR code drawn as inline SVG when the page is prerendered: no script, no
 * image request, nothing computed in the browser.
 *
 * `brick` (the default) draws every module as a rounded square and the three
 * finder patterns as rounded frames around a round stud; `plain` draws square
 * modules. Both keep the four-module quiet zone and indigo-on-cream colours
 * (about 15:1), and both are decode-tested — see lib/qr.ts.
 */

import { FINDER_SHAPES, QR_DARK, QR_LIGHT, qrGeometry, type QrStyle } from '../../lib/qr.ts';

export function QrCode({
  value,
  label,
  size = 176,
  style = 'brick',
  className,
}: {
  /** The text to encode, usually an absolute URL. */
  value: string;
  /** What a screen reader hears, e.g. "QR code: OutBrick on the App Store". */
  label: string;
  /** Width and height in CSS pixels. */
  size?: number;
  style?: QrStyle;
  className?: string;
}) {
  const g = qrGeometry(value, style);
  return (
    // An inline <svg role="img" aria-label> is the accessible form of a drawn image; an <img>
    // would need the SVG as a separate file or a data: URL and lose the zero-request point.
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${g.side} ${g.side}`}
      width={size}
      height={size}
      // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role
      role="img"
      aria-label={label}
    >
      <rect width={g.side} height={g.side} fill={QR_LIGHT} />
      {g.style === 'plain' ? (
        <path fill={QR_DARK} d={g.path} />
      ) : (
        <>
          <path fill={QR_DARK} stroke={QR_DARK} strokeWidth={g.strokeWidth} strokeLinejoin="round" d={g.path} />
          {g.finders.map((f) =>
            FINDER_SHAPES.map((s) => (
              <rect
                key={`${f.x}-${f.y}-${s.offset}`}
                x={f.x + s.offset}
                y={f.y + s.offset}
                width={s.width}
                height={s.width}
                rx={s.radius}
                fill={s.dark ? QR_DARK : QR_LIGHT}
              />
            )),
          )}
        </>
      )}
    </svg>
  );
}
