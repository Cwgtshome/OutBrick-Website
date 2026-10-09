// Screenshots on support requests: attached on the contact form and when a player adds details
// on their request page (app/components/support/attachments.tsx).
//
//   POST /api/community/support/attachments                  the image as the raw body → 201 { id, width, height }
//   GET  /api/community/support/case/attachment?p&x&t&a=<id>  the player's own, through their signed link
//   GET  /api/community/admin/cases/:id/attachments/:aid      staff (team and admin)
//
// No account is needed to attach, so the rules are strict: same origin, JPEG, PNG or WebP by
// their bytes (the browser converts HEIC before sending), at most 8 MB and 4096 pixels a side,
// metadata stripped by images.ts (no location), 12 an hour from one connection. An attachment is
// never public: it is served only to staff, or to the player through the signed link of the case
// that names it, and only when that case's history lists its id. Ids are 22 random characters.
// Stored in R2 ("community-uploads") under support/<id>; there is no index table, so the case's
// own events (`data.attachments`) are the index and no database migration is needed. An image
// uploaded but never sent with a message is simply never referenced.

import { platformStore } from '../platform.ts';
import { ipHash, randomToken, rateAllow, sql } from '../community/db.ts';
import { ApiError, json, notFound, tooMany, type Route } from '../community/http.ts';
import { requireRole } from '../community/session.ts';
import { cleanImage, ImageError, sniff } from '../community/images.ts';
import { verifySigned } from '../../emails/links.ts';
import { MAX_SIDE, MAX_UPLOAD_BYTES, UPLOAD_STORE } from '../community/uploads.ts';

export const MAX_ATTACHMENTS = 3;
const idPattern = /^[A-Za-z0-9_-]{22}$/;
const keyOf = (id: string) => `support/${id}`;

type Store = {
  set: (key: string, value: ArrayBuffer) => Promise<unknown>;
  get: (key: string, opts: { type: 'arrayBuffer' }) => Promise<ArrayBuffer | null>;
};
let override: Store | null = null;
export function setAttachmentStoreForTests(store: Store | null): void {
  override = store;
}
const store = (): Store => override ?? (platformStore(UPLOAD_STORE, process.env.CONTEXT !== 'production') as unknown as Store);

/** Valid attachment ids from a form value ("id1,id2") or an array, at most three, no repeats. */
export function attachmentIds(value: unknown): string[] {
  const list = Array.isArray(value) ? value : typeof value === 'string' ? value.split(',') : [];
  const ids = list.map((v) => (typeof v === 'string' ? v.trim() : '')).filter((v) => idPattern.test(v));
  return [...new Set(ids)].slice(0, MAX_ATTACHMENTS);
}

const fieldError = (code: string, message: string, status = 400) => new ApiError(status, status === 413 ? 'too_large' : 'invalid', message, { file: code });

export const uploadAttachment: Route['run'] = async (req) => {
  const declared = Number(req.headers.get('content-length') ?? '');
  if (Number.isFinite(declared) && declared > MAX_UPLOAD_BYTES) throw fieldError('too_large', 'Images can be up to 8 MB.', 413);
  const bytes = new Uint8Array(await req.arrayBuffer());
  if (!bytes.length) throw fieldError('missing', 'Choose an image to attach.');
  if (bytes.length > MAX_UPLOAD_BYTES) throw fieldError('too_large', 'Images can be up to 8 MB.', 413);
  if (!(await rateAllow(`support-attach:${ipHash(req)}`, 12, 3600))) throw tooMany('That is a lot of images in a short time. Please try again later.');
  let image;
  try {
    image = cleanImage(bytes);
  } catch (error) {
    if (error instanceof ImageError) throw fieldError(error.code, error.message, error.code === 'unsupported_type' || error.code === 'heic_unsupported' ? 415 : 400);
    throw error;
  }
  if (image.width > MAX_SIDE || image.height > MAX_SIDE) throw fieldError('too_many_pixels', 'Images can be up to 4096 pixels on each side.');
  const id = randomToken(16);
  await store().set(keyOf(id), image.bytes.buffer.slice(image.bytes.byteOffset, image.bytes.byteOffset + image.bytes.byteLength) as ArrayBuffer);
  return json({ id, width: image.width, height: image.height, type: image.type }, { status: 201 });
};

/** Whether the case's history names this attachment (on its first message or a later note). */
async function caseHasAttachment(caseId: number, id: string): Promise<boolean> {
  const [row] = await sql`SELECT 1 FROM support_case_events WHERE case_id = ${caseId} AND data->'attachments' @> jsonb_build_array(${id}::text) LIMIT 1`;
  return Boolean(row);
}

async function serve(id: string): Promise<Response> {
  const data = await store().get(keyOf(id), { type: 'arrayBuffer' });
  if (!data) throw notFound('That image is not available.');
  const type = sniff(new Uint8Array(data.slice(0, 16)));
  return new Response(data, {
    headers: {
      'Content-Type': type && type !== 'heic' ? type : 'application/octet-stream',
      'Content-Length': String(data.byteLength),
      // Private to the person holding the link: never cached by a shared cache.
      'Cache-Control': 'private, max-age=3600',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'none'",
    },
  });
}

export const playerAttachment: Route['run'] = async (_req, _params, url) => {
  const apiKey = process.env.RESEND_API_KEY ?? '';
  const id = url.searchParams.get('a') ?? '';
  const verified = apiKey ? verifySigned(url.searchParams, apiKey, 'case') : ({ ok: false } as const);
  if (!verified.ok || !idPattern.test(id)) throw notFound('That image is not available.');
  const caseId = Number(verified.payload.c);
  if (!Number.isInteger(caseId) || !(await caseHasAttachment(caseId, id))) throw notFound('That image is not available.');
  return serve(id);
};

export const staffAttachment: Route['run'] = async (req, params) => {
  await requireRole(req, 'team');
  const caseId = Number(params.id);
  const id = params.aid ?? '';
  if (!Number.isInteger(caseId) || !idPattern.test(id) || !(await caseHasAttachment(caseId, id))) throw notFound('That image is not available.');
  return serve(id);
};

export const attachmentRoutes = (base: string): Route[] => [
  { method: 'POST', pattern: `${base}/support/attachments`, run: uploadAttachment },
  { method: 'GET', pattern: `${base}/support/case/attachment`, run: playerAttachment },
  { method: 'GET', pattern: `${base}/admin/cases/:id/attachments/:aid`, run: staffAttachment },
];
