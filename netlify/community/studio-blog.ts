// A separate server-to-server surface. The normal site's cookie/origin guard is unchanged.
import { transaction, randomToken, sha256 } from './db.ts';
import {
  ApiError,
  badRequest,
  forbidden,
  json,
  readJson,
  requireSameOrigin,
  unauthorized,
} from './http.ts';
import { requireRole, hasRole, type Viewer } from './session.ts';
import { requireCanWrite, modLog, num, iso, isoOrNull, run } from './forum.ts';
import { rateLimitOrThrow } from './threads.ts';
import { saveContentAs, publishContentAs } from './admin.ts';

export const STUDIO_AUDIENCE =
  'https://outbrick-upsell-architecture.mourad-hamdi.chatgpt.site';
export const STUDIO_SCOPES = [
  'blog:read',
  'blog:draft',
  'blog:publish',
] as const;
type Scope = (typeof STUDIO_SCOPES)[number];
function currentlyBanned(value: unknown): boolean {
  const date =
    value instanceof Date
      ? value
      : typeof value === 'string'
        ? new Date(value)
        : null;
  return date !== null && date.getTime() > Date.now();
}
const tokenView = (r: Record<string, unknown>) => ({
  id: num(r.id),
  audience: r.audience,
  scopes: r.scopes,
  createdAt: iso(r.created_at),
  expiresAt: iso(r.expires_at),
  lastUsedAt: isoOrNull(r.last_used_at),
  revokedAt: isoOrNull(r.revoked_at),
});
const metadata =
  'id::int,audience,scopes,created_at,expires_at,last_used_at,revoked_at';
async function boundedJson(
  req: Request,
  limit: number,
): Promise<Record<string, unknown>> {
  const reader = req.body?.getReader();
  if (!reader) return {};
  const decoder = new TextDecoder();
  let size = 0,
    text = '';
  try {
    for (;;) {
      const chunk = await reader.read();
      if (chunk.done) break;
      size += chunk.value.byteLength;
      if (size > limit) {
        await reader.cancel();
        throw new ApiError(
          413,
          'too_large',
          'Request exceeds the blog connection limit.',
        );
      }
      text += decoder.decode(chunk.value, { stream: true });
    }
    text += decoder.decode();
  } finally {
    reader.releaseLock();
  }
  return readJson(new Request(req.url, { method: 'POST', body: text }), limit);
}

async function owner(req: Request) {
  const v = await requireRole(req, 'team');
  requireCanWrite(v);
  return v;
}
export async function listStudioTokens(req: Request): Promise<Response> {
  const v = await owner(req);
  return json({
    connections: (
      await run(
        `SELECT ${metadata} FROM studio_blog_tokens WHERE member_id=$1 ORDER BY id DESC LIMIT 50`,
        [v.id],
      )
    ).map(tokenView),
    audience: STUDIO_AUDIENCE,
  });
}
export async function createStudioToken(req: Request): Promise<Response> {
  requireSameOrigin(req);
  const v = await owner(req),
    body = await boundedJson(req, 4096);
  if (body.reviewed !== true)
    throw badRequest(
      'review_required',
      'Review the connection permissions before creating a credential.',
    );
  if (
    !Array.isArray(body.scopes) ||
    body.scopes.length < 1 ||
    body.scopes.length > 3 ||
    body.scopes.some((s) => !STUDIO_SCOPES.includes(s)) ||
    new Set(body.scopes).size !== body.scopes.length
  )
    throw badRequest(
      'invalid_scope',
      'Choose only blog read, draft or publish permissions.',
    );
  const scopes = body.scopes as Scope[];
  if (
    !scopes.includes('blog:read') ||
    (scopes.includes('blog:publish') && !hasRole(v, 'admin'))
  )
    throw forbidden('Publishing requires a verified admin.');
  await rateLimitOrThrow([[`studio:mint:${v.id}`, 5, 3600]]);
  const token = `obstudio_${randomToken(32)}`;
  const row = await transaction(async (q) => {
    const [current] = await q(
      'SELECT role,email_verified,deleted_at,banned_until FROM members WHERE id=$1 FOR UPDATE',
      [v.id],
    );
    if (
      !current ||
      !current.email_verified ||
      current.deleted_at ||
      !['team', 'admin'].includes(String(current.role)) ||
      currentlyBanned(current.banned_until) ||
      (scopes.includes('blog:publish') && current.role !== 'admin')
    )
      throw forbidden('Current verified staff permissions are required.');
    const [active] = await q(
      `SELECT count(*)::int AS n FROM studio_blog_tokens WHERE member_id=$1 AND revoked_at IS NULL AND expires_at>now()`,
      [v.id],
    );
    if (num(active.n) >= 5)
      throw badRequest(
        'connection_limit',
        'Revoke an existing connection first.',
      );
    const [r] = await q(
      `INSERT INTO studio_blog_tokens(member_id,token_hash,audience,scopes) VALUES($1,$2,$3,$4) RETURNING ${metadata}`,
      [v.id, sha256(token), STUDIO_AUDIENCE, scopes],
    );
    await modLog(q, v.id, 'studio.connection.create', 'member', v.id, '', {
      connectionId: r.id,
      scopes,
      audience: STUDIO_AUDIENCE,
    });
    return r;
  });
  return json(
    { token, connection: tokenView(row) },
    { status: 201, headers: { 'Referrer-Policy': 'no-referrer' } },
  );
}
export async function revokeStudioToken(
  req: Request,
  params: Record<string, string>,
): Promise<Response> {
  requireSameOrigin(req);
  const v = await owner(req),
    id = numericID(params.id);
  await transaction(async (q) => {
    const [r] = await q(
      `UPDATE studio_blog_tokens SET revoked_at=COALESCE(revoked_at,now()) WHERE id=$1 AND member_id=$2 RETURNING id`,
      [id, v.id],
    );
    if (!r) throw new ApiError(404, 'not_found', 'Connection not found.');
    await modLog(q, v.id, 'studio.connection.revoke', 'member', v.id, '', {
      connectionId: id,
    });
  });
  return json({ revoked: true });
}
function numericID(value: string): number {
  if (!/^[1-9][0-9]{0,9}$/.test(value))
    throw badRequest('invalid', 'Invalid article or connection.');
  return Number(value);
}
async function delegate(
  req: Request,
  scope: Scope,
): Promise<Viewer & { studioScopes: Scope[]; studioConnectionID: number }> {
  const auth = req.headers.get('authorization') ?? '';
  if (!/^Bearer obstudio_[A-Za-z0-9_-]{43}$/.test(auth)) throw unauthorized();
  if (req.headers.get('x-outbrick-audience') !== STUDIO_AUDIENCE)
    throw forbidden('This credential is restricted to OutBrick Studio.');
  const origin = req.headers.get('origin');
  if (origin && origin !== STUDIO_AUDIENCE)
    throw forbidden('Unexpected requesting origin.');
  const [r] = await run(
    `SELECT m.*,t.id::int AS connection_id,t.scopes FROM studio_blog_tokens t JOIN members m ON m.id=t.member_id
    WHERE t.token_hash=$1 AND t.audience=$2 AND t.revoked_at IS NULL AND t.expires_at>now() AND m.deleted_at IS NULL`,
    [sha256(auth.slice(7)), STUDIO_AUDIENCE],
  );
  if (!r) throw unauthorized();
  const v = {
    ...r,
    id: num(r.id),
    banned: currentlyBanned(r.banned_until),
  } as Viewer;
  if (v.banned || !hasRole(v, 'team') || !v.email_verified)
    throw forbidden(
      'The connection owner no longer has verified staff access.',
    );
  if (
    !Array.isArray(r.scopes) ||
    !r.scopes.includes(scope) ||
    (scope === 'blog:publish' && !hasRole(v, 'admin'))
  )
    throw forbidden('This connection does not grant that blog permission.');
  await rateLimitOrThrow([
    [
      `studio:${num(r.connection_id)}:${req.method === 'GET' ? 'read' : 'write'}`,
      req.method === 'GET' ? 60 : 20,
      req.method === 'GET' ? 60 : 3600,
    ],
  ]);
  await run('UPDATE studio_blog_tokens SET last_used_at=now() WHERE id=$1', [
    r.connection_id,
  ]);
  return Object.assign(v, {
    studioScopes: r.scopes as Scope[],
    studioConnectionID: num(r.connection_id),
  });
}
const columns =
  'id::int,locale,kind,slug,title,summary,body_md,state,revision,updated_at,published_at';
function contentView(r: Record<string, unknown>) {
  return {
    id: num(r.id),
    locale: r.locale,
    kind: r.kind,
    slug: r.slug,
    title: r.title,
    summary: r.summary,
    body: r.body_md,
    state: r.state,
    revision: num(r.revision),
    updatedAt: iso(r.updated_at),
    publishedAt: isoOrNull(r.published_at),
  };
}
async function requireBlog(id: number) {
  const [r] = await run(
    "SELECT id FROM editorial_content WHERE id=$1 AND kind='blog'",
    [id],
  );
  if (!r) throw new ApiError(404, 'not_found', 'Blog article not found.');
}
export async function studioBlogRequest(req: Request): Promise<Response> {
  try {
    const u = new URL(req.url),
      base = '/api/community/studio/blogs';
    const match = u.pathname.match(
      /^\/api\/community\/studio\/blogs\/([1-9][0-9]{0,9})(\/publish)?$/,
    );
    if (u.pathname !== base && !match)
      throw new ApiError(404, 'not_found', 'Blog route not found.');
    if (req.method === 'GET' && u.pathname === base) {
      const v = await delegate(req, 'blog:read');
      const page = Math.max(
        1,
        Math.min(10000, Math.floor(Number(u.searchParams.get('page')) || 1)),
      );
      const [count] = await run(
        "SELECT count(*)::int AS n FROM editorial_content WHERE kind='blog'",
      );
      const content = await run(
        `SELECT ${columns} FROM editorial_content WHERE kind='blog' ORDER BY updated_at DESC,id DESC LIMIT 50 OFFSET $1`,
        [(page - 1) * 50],
      );
      return json({
        content: content.map(contentView),
        page,
        pages: Math.max(1, Math.ceil(num(count.n) / 50)),
        capabilities: {
          draft: v.studioScopes.includes('blog:draft'),
          publish:
            v.studioScopes.includes('blog:publish') && hasRole(v, 'admin'),
        },
        staticArticles:
          'Git-managed; this API only manages database editorial blogs.',
      });
    }
    if (
      (req.method === 'POST' && u.pathname === base) ||
      (req.method === 'PATCH' && match && !match[2])
    ) {
      const v = await delegate(req, 'blog:draft'),
        body = await boundedJson(req, 64 * 1024);
      if (body.kind !== 'blog')
        throw forbidden('This connection can manage blog articles only.');
      if (match) await requireBlog(numericID(match[1]));
      return await saveContentAs(
        new Request(req.url, {
          method: req.method,
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(body),
        }),
        match ? { id: match[1] } : {},
        v,
        'blog',
        { source: 'studio', connectionId: v.studioConnectionID },
      );
    }
    if (req.method === 'POST' && match?.[2]) {
      const v = await delegate(req, 'blog:publish'),
        body = await boundedJson(req, 4096);
      if (body.reviewed !== true)
        throw badRequest(
          'review_required',
          'Review the exact article revision before publishing or unpublishing.',
        );
      await requireBlog(numericID(match[1]));
      return await publishContentAs(
        new Request(req.url, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(body),
        }),
        { id: match[1] },
        v,
        'blog',
        { source: 'studio', connectionId: v.studioConnectionID },
      );
    }
    throw new ApiError(405, 'method_not_allowed', 'Method not allowed.');
  } catch (e) {
    if (e instanceof ApiError)
      return json(
        { error: { code: e.code, message: e.message, fields: e.fields } },
        { status: e.status },
      );
    // Never log bearer headers, drafts, tokens or database messages.
    return json(
      {
        error: {
          code: 'server_error',
          message: 'Blog connection temporarily unavailable.',
        },
      },
      { status: 500 },
    );
  }
}
