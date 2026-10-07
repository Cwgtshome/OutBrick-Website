// Image files, read and cleaned without a dependency: what type a file really is (from its
// bytes, never from what the client said), how big it is (from its headers), and the same file
// with the metadata that can identify a person taken out (camera, GPS position, timestamps,
// editing software, embedded thumbnails).
//
//   JPEG  every segment is copied except APP1 (EXIF, XMP), APP3–APP13 (IPTC/Photoshop in APP13
//         and vendor blocks), APP15 and COM, and nothing after EOI is kept (that is where MPF
//         previews and appended files live). APP0 (JFIF), APP2 (ICC colour profile) and APP14
//         (Adobe, needed to decode CMYK) stay. The EXIF Orientation is the one value worth
//         keeping — without it an iPhone photo shows sideways — so when the original had one, a
//         new APP1 holding only that tag is written in its place.
//   PNG   every chunk is copied except tEXt, iTXt, zTXt, eXIf and tIME; nothing after IEND.
//   WebP  the EXIF and XMP chunks are dropped, their VP8X flags cleared and the RIFF size fixed.
//   HEIC  recognised so it can be refused with a clear message: it cannot be converted here.
//
// Each parser bounds every read by the buffer length and throws ImageError for a file it cannot
// walk to the end, so a truncated or crafted file is refused rather than half-copied.

export type ImageType = 'image/jpeg' | 'image/png' | 'image/webp';

export class ImageError extends Error {
  code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

const bad = (message: string) => new ImageError('bad_image', message);

/** The type a file's bytes say it is: one we accept, 'heic', or null. */
export function sniff(buf: Uint8Array): ImageType | 'heic' | null {
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'image/jpeg';
  if (buf.length >= 8 && [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a].every((b, i) => buf[i] === b)) return 'image/png';
  if (buf.length >= 12 && ascii(buf, 0, 4) === 'RIFF' && ascii(buf, 8, 4) === 'WEBP') return 'image/webp';
  if (buf.length >= 12 && ascii(buf, 4, 4) === 'ftyp' && /^(heic|heix|heim|heis|hevc|hevx|mif1|msf1|avif)$/.test(ascii(buf, 8, 4))) return 'heic';
  return null;
}

function ascii(buf: Uint8Array, at: number, len: number): string {
  let s = '';
  for (let i = at; i < at + len && i < buf.length; i++) s += String.fromCharCode(buf[i]);
  return s;
}

const u16be = (b: Uint8Array, i: number) => (b[i] << 8) | b[i + 1];
const u32be = (b: Uint8Array, i: number) => ((b[i] << 24) >>> 0) + (b[i + 1] << 16) + (b[i + 2] << 8) + b[i + 3];
const u16le = (b: Uint8Array, i: number) => b[i] | (b[i + 1] << 8);
const u24le = (b: Uint8Array, i: number) => b[i] | (b[i + 1] << 8) | (b[i + 2] << 16);
const u32le = (b: Uint8Array, i: number) => (b[i] | (b[i + 1] << 8) | (b[i + 2] << 16)) + ((b[i + 3] << 24) >>> 0);

export type CleanImage = {
  type: ImageType;
  /** Display size: for a JPEG rotated by its Orientation, width and height are swapped. */
  width: number;
  height: number;
  bytes: Uint8Array;
};

/** Read, check and clean an image. Throws ImageError (bad_image, unsupported_type, heic_unsupported). */
export function cleanImage(input: Uint8Array): CleanImage {
  const type = sniff(input);
  if (type === 'heic') throw new ImageError('heic_unsupported', 'HEIC photos can’t be posted yet. Please choose JPEG or PNG (on iPhone: Settings, Camera, Formats, Most Compatible), or share a screenshot.');
  if (!type) throw new ImageError('unsupported_type', 'That file isn’t a JPEG, PNG or WebP image.');
  if (type === 'image/jpeg') return cleanJpeg(input);
  if (type === 'image/png') return cleanPng(input);
  return cleanWebp(input);
}

// JPEG ------------------------------------------------------------------------------------------

const keptApp = (marker: number) => marker === 0xe0 || marker === 0xe2 || marker === 0xee;
const isSof = (m: number) => m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc;

/** The Orientation (1–8) in an EXIF APP1 payload, or 1. */
export function exifOrientation(payload: Uint8Array): number {
  if (payload.length < 14 || ascii(payload, 0, 4) !== 'Exif') return 1;
  const t = 6; // TIFF header starts after "Exif\0\0"
  const order = ascii(payload, t, 2);
  if (order !== 'II' && order !== 'MM') return 1;
  const le = order === 'II';
  const r16 = (i: number) => (le ? u16le(payload, i) : u16be(payload, i));
  const r32 = (i: number) => (le ? u32le(payload, i) : u32be(payload, i));
  const ifd = t + r32(t + 4);
  if (ifd + 2 > payload.length) return 1;
  const count = r16(ifd);
  for (let k = 0; k < count && k < 500; k++) {
    const e = ifd + 2 + k * 12;
    if (e + 12 > payload.length) break;
    if (r16(e) === 0x0112) {
      const v = r16(e + 8);
      return v >= 1 && v <= 8 ? v : 1;
    }
  }
  return 1;
}

/** An APP1 segment holding nothing but the Orientation tag. */
function orientationSegment(orientation: number): Uint8Array {
  const tiff = [0x4d, 0x4d, 0x00, 0x2a, 0x00, 0x00, 0x00, 0x08, 0x00, 0x01, 0x01, 0x12, 0x00, 0x03, 0x00, 0x00, 0x00, 0x01, 0x00, orientation, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
  const payload = [0x45, 0x78, 0x69, 0x66, 0x00, 0x00, ...tiff];
  const len = payload.length + 2;
  return Uint8Array.from([0xff, 0xe1, len >> 8, len & 0xff, ...payload]);
}

function cleanJpeg(b: Uint8Array): CleanImage {
  const out: Uint8Array[] = [b.subarray(0, 2)];
  let i = 2;
  let width = 0;
  let height = 0;
  let orientation = 1;
  let wroteOrientation = false;
  let ended = false;
  while (i < b.length) {
    if (b[i] !== 0xff) throw bad('The JPEG is damaged.');
    let marker = b[i + 1];
    while (marker === 0xff && i + 2 < b.length) marker = b[++i + 1]; // fill bytes
    if (marker === undefined) break;
    if (marker === 0xd9) {
      out.push(Uint8Array.from([0xff, 0xd9]));
      ended = true;
      break;
    }
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      out.push(b.subarray(i, i + 2));
      i += 2;
      continue;
    }
    if (i + 4 > b.length) throw bad('The JPEG is cut short.');
    const len = u16be(b, i + 2);
    const end = i + 2 + len;
    if (len < 2 || end > b.length) throw bad('The JPEG is cut short.');
    const payload = b.subarray(i + 4, end);
    if (isSof(marker)) {
      if (len < 8) throw bad('The JPEG is damaged.');
      height = u16be(b, i + 5);
      width = u16be(b, i + 7);
    }
    if (marker === 0xe1) {
      const o = exifOrientation(payload);
      if (o !== 1) orientation = o;
    } else if ((marker >= 0xe0 && marker <= 0xef && !keptApp(marker)) || marker === 0xfe) {
      // dropped
    } else {
      if (!wroteOrientation && orientation !== 1 && !(marker >= 0xe0 && marker <= 0xef)) {
        out.push(orientationSegment(orientation));
        wroteOrientation = true;
      }
      out.push(b.subarray(i, end));
    }
    i = end;
    if (marker === 0xda) {
      // Entropy-coded data runs to the next marker that is not a stuffed 0xFF00 or a restart.
      let j = i;
      while (j + 1 < b.length) {
        if (b[j] === 0xff && b[j + 1] !== 0x00 && !(b[j + 1] >= 0xd0 && b[j + 1] <= 0xd7) && b[j + 1] !== 0xff) break;
        j++;
      }
      if (j + 1 >= b.length) throw bad('The JPEG is cut short.');
      out.push(b.subarray(i, j));
      i = j;
    }
  }
  if (!ended) throw bad('The JPEG is cut short.');
  if (!width || !height) throw bad('The JPEG has no size.');
  const rotated = orientation >= 5;
  return { type: 'image/jpeg', width: rotated ? height : width, height: rotated ? width : height, bytes: concat(out) };
}

// PNG -------------------------------------------------------------------------------------------

const droppedPng = new Set(['tEXt', 'iTXt', 'zTXt', 'eXIf', 'tIME']);

function cleanPng(b: Uint8Array): CleanImage {
  const out: Uint8Array[] = [b.subarray(0, 8)];
  let i = 8;
  let width = 0;
  let height = 0;
  let ended = false;
  while (i + 12 <= b.length) {
    const len = u32be(b, i);
    const type = ascii(b, i + 4, 4);
    const end = i + 12 + len;
    if (end > b.length || !/^[A-Za-z]{4}$/.test(type)) throw bad('The PNG is damaged.');
    if (i === 8) {
      if (type !== 'IHDR' || len < 8) throw bad('The PNG is damaged.');
      width = u32be(b, i + 8);
      height = u32be(b, i + 12);
    }
    if (!droppedPng.has(type)) out.push(b.subarray(i, end));
    i = end;
    if (type === 'IEND') {
      ended = true;
      break;
    }
  }
  if (!ended) throw bad('The PNG is cut short.');
  if (!width || !height) throw bad('The PNG has no size.');
  return { type: 'image/png', width, height, bytes: concat(out) };
}

// WebP ------------------------------------------------------------------------------------------

function cleanWebp(b: Uint8Array): CleanImage {
  const declared = u32le(b, 4) + 8;
  const total = Math.min(declared, b.length);
  if (declared > b.length) throw bad('The WebP is cut short.');
  const chunks: Uint8Array[] = [];
  let i = 12;
  let width = 0;
  let height = 0;
  let vp8xIndex = -1;
  while (i + 8 <= total) {
    const tag = ascii(b, i, 4);
    const len = u32le(b, i + 4);
    const end = i + 8 + len + (len & 1);
    if (i + 8 + len > total) throw bad('The WebP is damaged.');
    const data = b.subarray(i + 8, i + 8 + len);
    if (tag === 'VP8X' && len >= 10) {
      width = u24le(data, 4) + 1;
      height = u24le(data, 7) + 1;
      vp8xIndex = chunks.length;
    } else if (tag === 'VP8 ' && len >= 10 && !width) {
      width = u16le(data, 6) & 0x3fff;
      height = u16le(data, 8) & 0x3fff;
    } else if (tag === 'VP8L' && len >= 5 && !width) {
      const bits = u32le(data, 1);
      width = (bits & 0x3fff) + 1;
      height = ((bits >>> 14) & 0x3fff) + 1;
    }
    if (tag !== 'EXIF' && tag !== 'XMP ') chunks.push(Uint8Array.from(b.subarray(i, Math.min(end, total))));
    i = end;
  }
  if (!width || !height) throw bad('The WebP has no size.');
  if (vp8xIndex >= 0) chunks[vp8xIndex][8] &= ~0x0c; // clear the EXIF (0x08) and XMP (0x04) flags
  const body = concat(chunks);
  const header = new Uint8Array(12);
  header.set(b.subarray(0, 12));
  const size = body.length + 4;
  header[4] = size & 0xff;
  header[5] = (size >>> 8) & 0xff;
  header[6] = (size >>> 16) & 0xff;
  header[7] = (size >>> 24) & 0xff;
  return { type: 'image/webp', width, height, bytes: concat([header, body]) };
}

function concat(parts: Uint8Array[]): Uint8Array {
  const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
  let at = 0;
  for (const p of parts) {
    out.set(p, at);
    at += p.length;
  }
  return out;
}
