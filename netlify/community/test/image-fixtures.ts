// Small image files built byte by byte for the upload tests: real container structure (markers,
// chunks, sizes) with placeholder pixel data, plus the metadata a phone would add, so the
// stripping can be checked byte for byte. Nothing here is decoded; the server never decodes.

const bytes = (...parts: (number[] | Uint8Array | string)[]): Uint8Array => {
  const arr: number[] = [];
  for (const p of parts) {
    if (typeof p === 'string') for (const ch of p) arr.push(ch.charCodeAt(0));
    else arr.push(...p);
  }
  return Uint8Array.from(arr);
};

const be16 = (n: number) => [(n >> 8) & 0xff, n & 0xff];
const be32 = (n: number) => [(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff];
const le32 = (n: number) => [n & 0xff, (n >>> 8) & 0xff, (n >>> 16) & 0xff, (n >>> 24) & 0xff];
const le24 = (n: number) => [n & 0xff, (n >>> 8) & 0xff, (n >>> 16) & 0xff];

function segment(marker: number, payload: Uint8Array): Uint8Array {
  return bytes([0xff, marker], be16(payload.length + 2), payload);
}

/** An EXIF APP1 payload with an Orientation tag and a fake GPS block (a string we can search for). */
export function exifPayload(orientation: number): Uint8Array {
  const tiff = bytes('MM', [0x00, 0x2a], be32(8), be16(2), [0x01, 0x12, 0x00, 0x03], be32(1), be16(orientation), [0, 0], [0x88, 0x25, 0x00, 0x04], be32(1), be32(38), be32(0), 'GPS 51.5N 0.12W SECRET');
  return bytes('Exif', [0, 0], tiff);
}

export function jpeg(opts: { width?: number; height?: number; orientation?: number; trailing?: boolean } = {}): Uint8Array {
  const w = opts.width ?? 640;
  const h = opts.height ?? 480;
  return bytes(
    [0xff, 0xd8],
    segment(0xe1, exifPayload(opts.orientation ?? 1)),
    segment(0xe0, bytes('JFIF', [0, 1, 1, 0, 0, 1, 0, 1, 0, 0])),
    segment(0xe2, bytes('ICC_PROFILE', [0], [1, 1], 'fake icc')),
    segment(0xed, bytes('Photoshop 3.0', [0], '8BIM IPTC caption SECRET')),
    segment(0xfe, bytes('comment SECRET')),
    segment(0xdb, Uint8Array.from({ length: 65 }, (_, i) => i)),
    segment(0xc0, bytes([8], be16(h), be16(w), [3, 1, 0x22, 0, 2, 0x11, 1, 3, 0x11, 1])),
    segment(0xc4, Uint8Array.from({ length: 20 }, (_, i) => i)),
    segment(0xda, bytes([3, 1, 0, 2, 0x11, 3, 0x11, 0, 0x3f, 0])),
    [0x12, 0x34, 0xff, 0x00, 0x56, 0xff, 0xd0, 0x78],
    [0xff, 0xd9],
    opts.trailing ? bytes('APPENDED FILE SECRET') : [],
  );
}

function chunk(type: string, data: Uint8Array): Uint8Array {
  return bytes(be32(data.length), type, data, [0, 0, 0, 0]);
}

export function png(opts: { width?: number; height?: number } = {}): Uint8Array {
  return bytes(
    [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
    chunk('IHDR', bytes(be32(opts.width ?? 300), be32(opts.height ?? 200), [8, 6, 0, 0, 0])),
    chunk('tEXt', bytes('Author', [0], 'SECRET name')),
    chunk('eXIf', exifPayload(1).subarray(6)),
    chunk('IDAT', bytes([1, 2, 3, 4])),
    chunk('IEND', new Uint8Array()),
    bytes('AFTER IEND SECRET'),
  );
}

export function webp(opts: { width?: number; height?: number } = {}): Uint8Array {
  const w = opts.width ?? 320;
  const h = opts.height ?? 240;
  const riffChunk = (tag: string, data: Uint8Array) => bytes(tag, le32(data.length), data, data.length & 1 ? [0] : []);
  const body = bytes(
    riffChunk('VP8X', bytes([0x0c, 0, 0, 0], le24(w - 1), le24(h - 1))),
    riffChunk('VP8L', bytes([0x2f, 0, 0, 0, 0, 1, 2])),
    riffChunk('EXIF', exifPayload(1).subarray(6)),
    riffChunk('XMP ', bytes('<x:xmpmeta>SECRET</x:xmpmeta>')),
  );
  return bytes('RIFF', le32(body.length + 4), 'WEBP', body);
}

export function heic(): Uint8Array {
  return bytes(be32(24), 'ftyp', 'heic', be32(0), 'mif1heic');
}

export const contains = (haystack: Uint8Array, needle: string) => Buffer.from(haystack).includes(Buffer.from(needle, 'latin1'));
