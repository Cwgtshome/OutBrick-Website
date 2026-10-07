// All administrative access is checked at the server. Hidden buttons are only presentation.
import type { EditorialContent } from '../../lib/community/admin-contract.ts';
import { communityLocales } from '../../lib/community/contract.ts';
import { transaction } from './db.ts';
import {
  idParam,
  modLog,
  num,
  iso,
  isoOrNull,
  requireCanWrite,
  run,
} from './forum.ts';
import { ApiError, badRequest, json, notFound, readJson, str } from './http.ts';
import { renderMarkdown } from './markdown.ts';
import { requireRole } from './session.ts';
type Handler = (
  req: Request,
  params: Record<string, string>,
  url: URL,
) => Promise<Response>;
const columns = `id::int,locale,kind,slug,title,summary,body_md,body_html,state,revision,updated_at,published_at`;
function view(r: Record<string, unknown>): EditorialContent {
  return {
    id: num(r.id),
    locale: r.locale as EditorialContent['locale'],
    kind: r.kind as EditorialContent['kind'],
    slug: String(r.slug),
    title: String(r.title),
    summary: String(r.summary),
    body: String(r.body_md),
    html: String(r.body_html),
    state: r.state as EditorialContent['state'],
    revision: num(r.revision),
    updatedAt: iso(r.updated_at),
    publishedAt: isoOrNull(r.published_at),
  };
}
const staff = async (req: Request, role: 'team' | 'admin' = 'team') => {
  const v = await requireRole(req, role);
  requireCanWrite(v);
  return v;
};
export const dashboard: Handler = async (req) => {
  const v = await staff(req);
  const page = Math.max(
    1,
    Math.min(100000, Number(new URL(req.url).searchParams.get('page')) || 1),
  );
  const [counts] = await run(
    `SELECT (SELECT count(*)::int FROM members WHERE deleted_at IS NULL) members,(SELECT count(*)::int FROM threads WHERE deleted_at IS NULL) threads,(SELECT count(*)::int FROM reports WHERE resolved_at IS NULL) reports,(SELECT count(*)::int FROM posts WHERE pending AND deleted_at IS NULL) pending,(SELECT count(*)::int FROM editorial_content WHERE state='draft') drafts,(SELECT count(*)::int FROM editorial_content WHERE state='published') published`,
  );
  const members =
    v.role === 'admin'
      ? await run(
          `SELECT id::int,display_name,role,email_verified,created_at FROM members WHERE deleted_at IS NULL ORDER BY id LIMIT 50 OFFSET $1`,
          [(Math.floor(page) - 1) * 50],
        )
      : [];
  const content = await run(
    `SELECT ${columns} FROM editorial_content ORDER BY updated_at DESC LIMIT 100`,
  );
  const audit = await run(
    `SELECT id::int,action,target_id::int,created_at FROM mod_log ORDER BY id DESC LIMIT 30`,
  );
  const [watch] = await run(
    `SELECT NOT EXISTS (SELECT 1 FROM categories c WHERE NOT archived AND NOT EXISTS (SELECT 1 FROM follows f WHERE f.member_id=$1 AND f.target_type='category' AND f.target_id=c.id AND f.level='watch')) all_watched`,
    [v.id],
  );
  return json({
    counts,
    members: members.map((r) => ({
      id: r.id,
      displayName: r.display_name,
      role: r.role,
      verified: r.email_verified,
      joinedAt: r.created_at,
    })),
    memberPage: Math.floor(page),
    memberPages: Math.max(1, Math.ceil(Number(counts.members) / 50)),
    content: content.map(view),
    audit: audit.map((r) => ({
      id: r.id,
      action: r.action,
      targetId: r.target_id,
      createdAt: r.created_at,
    })),
    watchingAll: watch.all_watched,
  });
};
export const watchAll: Handler = async (req) => {
  const v = await staff(req);
  const body = await readJson(req);
  if (typeof body.enabled !== 'boolean')
    throw badRequest('invalid', 'Choose a notification setting.');
  await transaction(async (q) => {
    if (body.enabled)
      await q(
        `INSERT INTO follows(member_id,target_type,target_id,level) SELECT $1,'category',id,'watch' FROM categories WHERE NOT archived ON CONFLICT(member_id,target_type,target_id) DO UPDATE SET level='watch'`,
        [v.id],
      );
    else
      await q(
        `DELETE FROM follows WHERE member_id=$1 AND target_type='category'`,
        [v.id],
      );
    await modLog(q, v.id, 'member.watch_all', 'member', v.id, '', {
      enabled: body.enabled,
    });
  });
  return json({ ok: true });
};
function fields(body: Record<string, unknown>) {
  const locale = String(body.locale);
  if (!communityLocales.includes(locale as (typeof communityLocales)[number]))
    throw badRequest('invalid', 'Choose a language.');
  const kind = String(body.kind);
  if (!['page', 'blog'].includes(kind))
    throw badRequest('invalid', 'Choose a content type.');
  const slug = str(body, 'slug', { min: 2, max: 80 });
  if (!/^[a-z0-9][a-z0-9-]{1,79}$/.test(slug))
    throw badRequest('invalid', 'Use a lowercase URL slug.', {
      slug: 'invalid',
    });
  const title = str(body, 'title', { min: 4, max: 140 });
  const summary = typeof body.summary === 'string' ? body.summary.trim() : '';
  if (summary.length > 500) throw badRequest('invalid', 'Summary is too long.');
  const md = str(body, 'body', { min: 1, max: 20000 });
  return {
    locale,
    kind,
    slug,
    title,
    summary,
    md,
    html: renderMarkdown(md).html,
  };
}
export const saveContent: Handler = async (req, params) => {
  const v = await staff(req);
  const body = await readJson(req),
    f = fields(body);
  const id = params.id ? idParam(params.id) : null;
  const result = await transaction(async (q) => {
    let old: Record<string, unknown> | undefined;
    if (id) {
      [old] = await q(
        `SELECT * FROM editorial_content WHERE id=$1 FOR UPDATE`,
        [id],
      );
      if (!old) throw notFound();
      if (body.revision !== Number(old.revision))
        throw new ApiError(
          409,
          'conflict',
          'This draft changed. Reload before saving.',
        );
      if (old.state === 'published')
        throw badRequest('invalid', 'Unpublish before editing.');
      if (
        old.published_at &&
        (f.slug !== old.slug || f.kind !== old.kind || f.locale !== old.locale)
      )
        throw badRequest(
          'invalid',
          'A previously published address cannot change.',
        );
    }
    const [duplicate] = await q(
      `SELECT id FROM editorial_content WHERE locale=$1 AND kind=$2 AND slug=$3 AND ($4::bigint IS NULL OR id<>$4)`,
      [f.locale, f.kind, f.slug, id],
    );
    if (duplicate)
      throw badRequest('invalid', 'That address already exists.', {
        slug: 'taken',
      });
    const [r] = id
      ? await q(
          `UPDATE editorial_content SET title=$1,summary=$2,body_md=$3,body_html=$4,locale=$5,kind=$6,slug=$7,editor_id=$8,revision=revision+1,updated_at=now() WHERE id=$9 RETURNING ${columns}`,
          [
            f.title,
            f.summary,
            f.md,
            f.html,
            f.locale,
            f.kind,
            f.slug,
            v.id,
            id,
          ],
        )
      : await q(
          `INSERT INTO editorial_content(locale,kind,slug,title,summary,body_md,body_html,author_id,editor_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$8) RETURNING ${columns}`,
          [f.locale, f.kind, f.slug, f.title, f.summary, f.md, f.html, v.id],
        );
    await q(
      `INSERT INTO editorial_revisions(content_id,revision,snapshot,editor_id) VALUES($1,$2,$3::jsonb,$4)`,
      [r.id, r.revision, JSON.stringify(view(r)), v.id],
    );
    await modLog(
      q,
      v.id,
      id ? 'content.edit' : 'content.create',
      'content',
      Number(r.id),
    );
    return r;
  });
  return json({ content: view(result) }, { status: id ? 200 : 201 });
};
export const publishContent: Handler = async (req, params) => {
  const v = await staff(req, 'admin');
  const body = await readJson(req),
    id = idParam(params.id);
  if (typeof body.published !== 'boolean')
    throw badRequest('invalid', 'Choose publish or unpublish.');
  const result = await transaction(async (q) => {
    const [r] = await q(
      `SELECT ${columns} FROM editorial_content WHERE id=$1 FOR UPDATE`,
      [id],
    );
    if (!r) throw notFound();
    if (body.revision !== Number(r.revision))
      throw new ApiError(
        409,
        'conflict',
        'Content changed. Reload before publishing.',
      );
    const [saved] = await q(
      `UPDATE editorial_content SET state=$1,revision=revision+1,editor_id=$2,updated_at=now(),published_at=CASE WHEN $3 THEN COALESCE(published_at,now()) ELSE published_at END WHERE id=$4 RETURNING ${columns}`,
      [body.published ? 'published' : 'draft', v.id, body.published, id],
    );
    await q(
      `INSERT INTO editorial_revisions(content_id,revision,snapshot,editor_id) VALUES($1,$2,$3::jsonb,$4)`,
      [id, saved.revision, JSON.stringify(view(saved)), v.id],
    );
    await modLog(
      q,
      v.id,
      body.published ? 'content.publish' : 'content.unpublish',
      'content',
      id,
    );
    return saved;
  });
  return json({ content: view(result) });
};
export const publicContent: Handler = async (req, params) => {
  const locale =
    params.locale || new URL(req.url).searchParams.get('locale') || 'en';
  if (!communityLocales.includes(locale as (typeof communityLocales)[number]))
    throw notFound();
  if (params.slug) {
    const [r] = await run(
      `SELECT ${columns} FROM editorial_content WHERE locale=$1 AND kind=$2 AND slug=$3 AND state='published'`,
      [locale, params.kind, params.slug],
    );
    if (!r) throw notFound();
    return json({ content: view(r) });
  }
  const rows = await run(
    `SELECT ${columns} FROM editorial_content WHERE locale=$1 AND state='published' ORDER BY published_at DESC,id DESC LIMIT 100`,
    [locale],
  );
  return json({ content: rows.map(view) });
};
