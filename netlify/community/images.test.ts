// images.ts: type sniffing, sizes from headers, and metadata stripping, on hand-built files.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cleanImage, exifOrientation, ImageError, sniff } from './images.ts';
import { contains, heic, jpeg, png, webp } from './test/image-fixtures.ts';

void test('sniffing goes by the bytes', () => {
  assert.equal(sniff(jpeg()), 'image/jpeg');
  assert.equal(sniff(png()), 'image/png');
  assert.equal(sniff(webp()), 'image/webp');
  assert.equal(sniff(heic()), 'heic');
  assert.equal(sniff(new TextEncoder().encode('<svg xmlns="http://www.w3.org/2000/svg"></svg>')), null);
  assert.equal(sniff(new Uint8Array()), null);
});

void test('a JPEG loses EXIF, IPTC, comments and anything after EOI, and keeps JFIF, ICC and the pixels', () => {
  const input = jpeg({ trailing: true });
  assert.ok(contains(input, 'SECRET'));
  const out = cleanImage(input);
  assert.equal(out.type, 'image/jpeg');
  assert.equal(out.width, 640);
  assert.equal(out.height, 480);
  assert.ok(!contains(out.bytes, 'SECRET'), 'no GPS, IPTC caption, comment or appended file');
  assert.ok(!contains(out.bytes, 'Exif'), 'orientation 1 needs no EXIF at all');
  assert.ok(contains(out.bytes, 'JFIF'));
  assert.ok(contains(out.bytes, 'ICC_PROFILE'));
  const tail = Buffer.from(out.bytes.subarray(-10));
  assert.deepEqual([...tail], [0x12, 0x34, 0xff, 0x00, 0x56, 0xff, 0xd0, 0x78, 0xff, 0xd9], 'scan data and EOI copied intact, last');
  assert.deepEqual([...out.bytes.subarray(0, 2)], [0xff, 0xd8]);
});

void test('a rotated JPEG keeps only its Orientation, and reports its display size', () => {
  const out = cleanImage(jpeg({ width: 4000, height: 3000, orientation: 6 }));
  assert.equal(out.width, 3000);
  assert.equal(out.height, 4000);
  assert.ok(!contains(out.bytes, 'SECRET'));
  const at = Buffer.from(out.bytes).indexOf(Buffer.from('Exif\0\0', 'latin1'));
  assert.ok(at > 0, 'a minimal EXIF is written');
  assert.equal(exifOrientation(out.bytes.subarray(at)), 6);
  // The new APP1 is small: the orientation tag and nothing else.
  assert.equal((out.bytes[at - 2] << 8) | out.bytes[at - 1], 34);
});

void test('a PNG loses its text, EXIF and trailing chunks', () => {
  const out = cleanImage(png({ width: 300, height: 200 }));
  assert.equal(out.type, 'image/png');
  assert.deepEqual([out.width, out.height], [300, 200]);
  assert.ok(!contains(out.bytes, 'SECRET'));
  assert.ok(!contains(out.bytes, 'eXIf'));
  assert.ok(contains(out.bytes, 'IDAT'));
  assert.ok(contains(out.bytes, 'IEND'));
});

void test('a WebP loses EXIF and XMP, with its flags and RIFF size fixed', () => {
  const out = cleanImage(webp({ width: 320, height: 240 }));
  assert.equal(out.type, 'image/webp');
  assert.deepEqual([out.width, out.height], [320, 240]);
  assert.ok(!contains(out.bytes, 'SECRET'));
  assert.ok(!contains(out.bytes, 'EXIF'));
  const b = out.bytes;
  assert.equal(b[4] | (b[5] << 8) | (b[6] << 16) | (b[7] << 24), b.length - 8);
  assert.equal(b[20] & 0x0c, 0, 'EXIF and XMP flags cleared');
});

void test('HEIC, unknown and damaged files are refused with their own codes', () => {
  const code = (fn: () => unknown) => {
    try {
      fn();
    } catch (error) {
      assert.ok(error instanceof ImageError);
      return error.code;
    }
    return 'accepted';
  };
  assert.equal(code(() => cleanImage(heic())), 'heic_unsupported');
  assert.equal(code(() => cleanImage(new TextEncoder().encode('GIF89a......'))), 'unsupported_type');
  const full = jpeg();
  assert.equal(code(() => cleanImage(full.subarray(0, full.length - 30))), 'bad_image');
  const p = png();
  assert.equal(code(() => cleanImage(p.subarray(0, 40))), 'bad_image');
  // A segment length that runs past the end of the file.
  const lying = Uint8Array.from([0xff, 0xd8, 0xff, 0xe0, 0x40, 0x00, 1, 2, 3]);
  assert.equal(code(() => cleanImage(lying)), 'bad_image');
});
