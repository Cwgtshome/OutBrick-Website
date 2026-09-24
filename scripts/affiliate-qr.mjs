// A QR code for a creator or partner link, https://www.outbrick.site/r/<code>, as SVG.
//
//   node --experimental-strip-types scripts/affiliate-qr.mjs <code>                 # SVG to stdout
//   node --experimental-strip-types scripts/affiliate-qr.mjs <code> --out qr.svg    # SVG to a file
//   node --experimental-strip-types scripts/affiliate-qr.mjs <code> --plain         # square modules
//
// <code> is letters, digits, "-" and "_", up to 40 characters. The drawing is lib/qr.ts's
// brick style unless --plain is given; both are decode-tested. Nothing is written into the
// repository unless --out points there.

import fs from 'node:fs';

const { qrSvgDocument } = await import('../lib/qr.ts');
const { siteUrl } = await import('../lib/site.ts');

const args = process.argv.slice(2);
const outIndex = args.indexOf('--out');
const out = outIndex === -1 ? undefined : args[outIndex + 1];
const code = args.find((a, i) => !a.startsWith('--') && (outIndex === -1 || i !== outIndex + 1));
const style = args.includes('--plain') ? 'plain' : 'brick';

if (!code || !/^[A-Za-z0-9_-]{1,40}$/.test(code) || (outIndex !== -1 && !out)) {
  console.error('usage: affiliate-qr.mjs <code> [--out file.svg] [--plain]   (code: A-Z a-z 0-9 - _, max 40)');
  process.exit(2);
}

const url = `${siteUrl}/r/${code}`;
const svg = qrSvgDocument(url, { style, size: 1024, title: `QR code: ${url}` });
if (out) {
  fs.writeFileSync(out, svg);
  console.error(`[qr] ${out} -> ${url}`);
} else {
  process.stdout.write(svg);
}
