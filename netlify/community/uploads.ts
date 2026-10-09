// Image uploads for posts (phase 2).
//
//   POST   /api/community/uploads       the image as the raw body (Content-Type image/jpeg,
//                                        image/png or image/webp) or as multipart/form-data
//                                        field "file" → 201 { upload: Upload }
//   GET    /api/community/uploads/:id   the cleaned bytes
//   DELETE /api/community/uploads/:id   the uploader or a moderator → { ok: true }
//
// Rules: a signed-in, verified, not-banned member; 20 a day (60 for trusted members and staff);
// JPEG, PNG or WebP by their bytes (HEIC is refused with a message asking for JPEG or PNG); at
// most 8 MB and 4096 pixels a side; metadata stripped by images.ts before anything is stored.
// A post shows an upload with ![alt text](upload:<id>) — see markdown.ts — and only its
// uploader's own (or, when a moderator edits, the moderator's).
//
// Storage: Netlify Blobs, store "community-uploads", global on the production deploy and
// deploy-scoped everywhere else (Deploy Previews get their own database branch too, so their
// uploads must not land among production's). The table `uploads` is the index.
//
// Field error codes (error.fields.file): 'missing', 'too_large', 'too_many_pixels',
// 'unsupported_type', 'heic_unsupported', 'bad_image'.

import { platformStore } from '../platform.ts';
import type { Upload } from '../../lib/community/contract.ts';
import { randomToken, transaction } from './db.ts';
import { ApiError, forbidden, json, notFound } from './http.ts';
import { requireMember, type Viewer } from './session.ts';
import { iso, isModerator, limitFor, modLog, num, renderBody, requireCanWrite, run, type Row } from './forum.ts';
import { cleanImage, ImageError } from './images.ts';
import { communityFeatures } from './features.ts';
import { rateLimitOrThrow } from './threads.ts';

type Handler = (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;

export const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
export const MAX_SIDE = 4096;
export const UPLOAD_STORE = 'community-uploads';

/** The few store methods used here; tests pass an in-memory one. */
export type UploadStore = {
  set: (key: string, value: ArrayBuffer) => Promise<unknown>;
  get: (key: string, opts: { type: 'arrayBuffer' }) => Promise<ArrayBuffer | null>;
  delete: (key: string) => Promise<unknown>;
};

let override: UploadStore | null = null;
export function setUploadStoreForTests(store: UploadStore | null): void {
  override = store;
}

function store(): UploadStore {
  if (override) return override;
  const s = platformStore(UPLOAD_STORE, process.env.CONTEXT !== 'production');
  return s as unknown as UploadStore;
}

const idPattern = /^[A-Za-z0-9_-]{22}$/;

export function uploadView(row: Row): Upload {
  const id = String(row.id);
  return {
    id,
    url: `/api/community/uploads/${id}`,
    markdown: `![](upload:${id})`,
    contentType: row.content_type as Upload['contentType'],
    width: num(row.width),
    height: num(row.height),
    bytes: num(row.bytes),
    createdAt: iso(row.created_at),
  };
}

const fieldError = (code: string, message: string, status = 400) => new ApiError(status, status === 413 ? 'too_large' : 'invalid', message, { file: code });

/** The image bytes from a raw body or a multipart form's "file" field. */
async function readImage(req: Request): Promise<Uint8Array> {
  const declared = Number(req.headers.get('content-length') ?? '');
  // A multipart envelope adds a little; anything far over the limit is refused unread.
  if (Number.isFinite(declared) && declared > MAX_UPLOAD_BYTES + 64 * 1024) throw fieldError('too_large', 'Images can be up to 8 MB.', 413);
  const type = (req.headers.get('content-type') ?? '').toLowerCase();
  let bytes: Uint8Array;
  if (type.startsWith('multipart/form-data')) {
    let form: FormData;
    try {
      form = await req.formData();
    } catch {
      throw fieldError('missing', 'Choose an image to upload.');
    }
    const file = form.get('file');
    if (!file || typeof file === 'string') throw fieldError('missing', 'Choose an image to upload.');
    bytes = new Uint8Array(await file.arrayBuffer());
  } else {
    bytes = new Uint8Array(await req.arrayBuffer());
  }
  if (!bytes.length) throw fieldError('missing', 'Choose an image to upload.');
  if (bytes.length > MAX_UPLOAD_BYTES) throw fieldError('too_large', 'Images can be up to 8 MB.', 413);
  return bytes;
}

export const createUpload: Handler = async (req) => {
  const viewer = await requireMember(req);
  if (!communityFeatures().uploads) throw new ApiError(503, 'unavailable', 'Image uploads are switched off right now.');
  requireCanWrite(viewer);
  const raw = await readImage(req);
  let image;
  try {
    image = cleanImage(raw);
  } catch (error) {
    if (error instanceof ImageError) throw fieldError(error.code, error.message, error.code === 'unsupported_type' || error.code === 'heic_unsupported' ? 415 : 400);
    throw error;
  }
  if (image.width > MAX_SIDE || image.height > MAX_SIDE) throw fieldError('too_many_pixels', 'Images can be up to 4096 pixels on each side.');
  await rateLimitOrThrow([[`upload:day:${viewer.id}`, limitFor(viewer, 20, 60), 86400]]);

  const id = randomToken(16); // 22 base64url characters
  const key = `u/${randomToken(24)}`;
  const body = image.bytes.buffer.slice(image.bytes.byteOffset, image.bytes.byteOffset + image.bytes.byteLength) as ArrayBuffer;
  await store().set(key, body);
  const [row] = await run(
    `INSERT INTO uploads (id, member_id, blob_key, content_type, width, height, bytes) VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id, content_type, width, height, bytes, created_at`,
    [id, viewer.id, key, image.type, image.width, image.height, image.bytes.length],
  );
  return json({ upload: uploadView(row) }, { status: 201 });
};

export const serveUpload: Handler = async (_req, params) => {
  const id = params.id ?? '';
  if (!idPattern.test(id)) throw notFound();
  const [row] = await run(`SELECT blob_key, content_type, bytes FROM uploads WHERE id = $1 AND deleted_at IS NULL`, [id]);
  if (!row) throw notFound('That image does not exist.');
  const data = await store().get(String(row.blob_key), { type: 'arrayBuffer' });
  if (!data) throw notFound('That image does not exist.');
  return new Response(data, {
    status: 200,
    headers: {
      'Content-Type': String(row.content_type),
      'Content-Length': String(data.byteLength),
      // The bytes behind an id never change; a removed image stops being served by the CDN
      // within ten minutes (browsers that already have it keep their copy).
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Netlify-CDN-Cache-Control': 'public, max-age=600',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'none'",
      'Cross-Origin-Resource-Policy': 'same-origin',
      'Content-Disposition': 'inline',
      'X-Robots-Tag': 'noindex',
    },
  });
};

/** Remove an upload: the record is kept (marked deleted), the bytes go, posts re-render without it. */
export async function removeUpload(viewer: Viewer, id: string): Promise<void> {
  const [row] = await run(`SELECT id, member_id::int AS member_id, blob_key, attached_post_id::int AS post_id, deleted_at FROM uploads WHERE id = $1`, [id]);
  if (!row || row.deleted_at) throw notFound('That image does not exist.');
  const mine = num(row.member_id) === viewer.id;
  if (!mine && !isModerator(viewer)) throw forbidden('Only the person who uploaded an image, or a moderator, can remove it.');
  const posts = await run(`SELECT id::int AS id, body_md FROM posts WHERE deleted_at IS NULL AND (id = $1 OR position($2 in body_md) > 0)`, [row.post_id, `upload:${id}`]);
  await run(`UPDATE uploads SET deleted_at = now(), deleted_by = $2 WHERE id = $1`, [id, viewer.id]);
  // The posts that showed it now show its alt text instead.
  const rerendered = await Promise.all(posts.map(async (p) => ({ id: num(p.id), html: (await renderBody(String(p.body_md))).html })));
  await transaction(async (q) => {
    for (const p of rerendered) await q(`UPDATE posts SET body_html = $1 WHERE id = $2`, [p.html, p.id]);
    if (!mine) await modLog(q, viewer.id, 'upload.delete', 'post', row.post_id == null ? 0 : num(row.post_id), '', { uploadId: id });
  });
  await store().delete(String(row.blob_key));
}

export const deleteUpload: Handler = async (req, params) => {
  const viewer = await requireMember(req);
  const id = params.id ?? '';
  if (!idPattern.test(id)) throw notFound();
  await removeUpload(viewer, id);
  return json({ ok: true });
};

/** Uploads no post shows, for account deletion: their bytes go with the account. */
export async function deleteUnattachedUploads(memberId: number): Promise<void> {
  const rows = await run(`UPDATE uploads SET deleted_at = now(), deleted_by = $1 WHERE member_id = $1 AND attached_post_id IS NULL AND deleted_at IS NULL RETURNING blob_key`, [memberId]);
  for (const r of rows) {
    try {
      await store().delete(String(r.blob_key));
    } catch (error) {
      console.error('[community-uploads] could not delete a blob:', error instanceof Error ? error.message : String(error));
    }
  }
}
