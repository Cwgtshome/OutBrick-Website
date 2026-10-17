import { before, after, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase } from './test/harness.ts';
import { api, member, resetRates } from './test/forum-helpers.ts';
import { STUDIO_AUDIENCE } from './studio-blog.ts';
let pg: PGlite;
before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});
const article = {
  locale: 'en',
  kind: 'blog',
  slug: 'studio-regression',
  title: 'Studio draft test',
  summary: 'Private draft',
  body: 'Safe **draft**. <script>bad()</script>',
};
async function token(
  role = 'admin',
  scopes = ['blog:read', 'blog:draft', 'blog:publish'],
) {
  const user = await member(pg, { role });
  const minted = await api('POST', '/admin/studio-tokens', {
    cookie: user.cookie,
    body: { scopes, reviewed: true },
  });
  assert.equal(minted.status, 201, JSON.stringify(minted.body));
  return {
    ...user,
    secret: minted.body.token,
    connection: minted.body.connection,
  };
}
const headers = (secret: string) => ({
  authorization: `Bearer ${secret}`,
  'x-outbrick-audience': STUDIO_AUDIENCE,
});
void test('mint requires verified staff, same origin, reviewed scopes, and does not persist secret', async () => {
  const ordinary = await member(pg),
    unverified = await member(pg, { role: 'admin', verified: false });
  for (const m of [ordinary, unverified])
    assert.equal(
      (
        await api('POST', '/admin/studio-tokens', {
          cookie: m.cookie,
          body: { scopes: ['blog:read'], reviewed: true },
        })
      ).status,
      403,
    );
  const admin = await member(pg, { role: 'admin' });
  assert.equal(
    (
      await api('POST', '/admin/studio-tokens', {
        cookie: admin.cookie,
        origin: 'https://attacker.example',
        body: { scopes: ['blog:read'], reviewed: true },
      })
    ).status,
    403,
  );
  assert.equal(
    (
      await api('POST', '/admin/studio-tokens', {
        cookie: admin.cookie,
        body: { scopes: ['blog:read'] },
      })
    ).status,
    400,
  );
  assert.equal(
    (
      await api('POST', '/admin/studio-tokens', {
        cookie: admin.cookie,
        body: { scopes: ['account:admin'], reviewed: true },
      })
    ).status,
    400,
  );
  const m = await token();
  const stored = await pg.query(
    'SELECT * FROM studio_blog_tokens WHERE id=$1',
    [m.connection.id],
  );
  assert.ok(!JSON.stringify(stored.rows).includes(m.secret));
  const list = await api('GET', '/admin/studio-tokens', { cookie: m.cookie });
  assert.ok(!JSON.stringify(list.body).includes(m.secret));
  assert.ok(!JSON.stringify(list.body).includes('token_hash'));
});
void test('bearer plus exact audience is required; cookies and wrong origins never delegate', async () => {
  const m = await token();
  assert.equal(
    (await api('GET', '/studio/blogs', { cookie: m.cookie, origin: null }))
      .status,
    401,
  );
  assert.equal(
    (
      await api('GET', '/studio/blogs', {
        headers: { authorization: `Bearer ${m.secret}` },
        origin: null,
      })
    ).status,
    403,
  );
  assert.equal(
    (
      await api('GET', '/studio/blogs', {
        headers: headers(m.secret),
        origin: 'https://attacker.example',
      })
    ).status,
    403,
  );
  const ok = await api('GET', '/studio/blogs', {
    headers: headers(m.secret),
    origin: null,
  });
  assert.equal(ok.status, 200);
  assert.ok(!('members' in ok.body));
  assert.equal(
    (
      await api('GET', '/studio/members', {
        headers: headers(m.secret),
        origin: null,
      })
    ).status,
    404,
  );
});
void test('draft and reviewed publish share revision, markdown and immutable published URL safeguards', async () => {
  const m = await token(),
    h = headers(m.secret);
  let r = await api('POST', '/studio/blogs', {
    headers: h,
    origin: null,
    body: article,
  });
  assert.equal(r.status, 201, JSON.stringify(r.body));
  const id = r.body.content.id;
  const pub = await api('GET', `/content/en/blog/${article.slug}`);
  assert.equal(pub.status, 404);
  assert.equal(
    (
      await api('POST', `/studio/blogs/${id}/publish`, {
        headers: h,
        origin: null,
        body: { revision: 1, published: true },
      })
    ).status,
    400,
  );
  assert.equal(
    (
      await api('PATCH', `/studio/blogs/${id}`, {
        headers: h,
        origin: null,
        body: { ...article, revision: 999 },
      })
    ).status,
    409,
  );
  r = await api('POST', `/studio/blogs/${id}/publish`, {
    headers: h,
    origin: null,
    body: { revision: 1, published: true, reviewed: true },
  });
  assert.equal(r.status, 200);
  assert.equal(
    (
      await api('PATCH', `/studio/blogs/${id}`, {
        headers: h,
        origin: null,
        body: { ...article, revision: 2 },
      })
    ).status,
    400,
  );
  assert.equal(
    (
      await api('POST', `/studio/blogs/${id}/publish`, {
        headers: h,
        origin: null,
        body: { revision: 2, published: false, reviewed: true },
      })
    ).status,
    200,
  );
  assert.equal(
    (
      await api('PATCH', `/studio/blogs/${id}`, {
        headers: h,
        origin: null,
        body: { ...article, slug: 'renamed-address', revision: 3 },
      })
    ).status,
    400,
  );
  assert.equal(
    (
      await api('POST', '/studio/blogs', {
        headers: h,
        origin: null,
        body: { ...article, kind: 'page', slug: 'not-a-blog' },
      })
    ).status,
    403,
  );
  const original = await pg.query<{ body_html: string }>(
    'SELECT body_html FROM editorial_content WHERE id=$1',
    [id],
  );
  assert.ok(!original.rows[0].body_html.includes('<script>'));
});
void test('scope restrictions, current role, bans, verification, expiry and revocation apply to every request', async () => {
  const m = await token('team', ['blog:read', 'blog:draft']),
    h = headers(m.secret);
  assert.equal(
    (
      await api('POST', '/admin/studio-tokens', {
        cookie: m.cookie,
        body: { scopes: ['blog:read', 'blog:publish'], reviewed: true },
      })
    ).status,
    403,
  );
  assert.equal(
    (
      await api('POST', '/studio/blogs/1/publish', {
        headers: h,
        origin: null,
        body: { revision: 1, published: true, reviewed: true },
      })
    ).status,
    403,
  );
  const ro = await token('admin', ['blog:read']);
  assert.equal(
    (
      await api('POST', '/studio/blogs', {
        headers: headers(ro.secret),
        origin: null,
        body: article,
      })
    ).status,
    403,
  );
  const list = await api('GET', '/studio/blogs', {
    headers: headers(ro.secret),
    origin: null,
  });
  assert.deepEqual(list.body.capabilities, { draft: false, publish: false });
  await pg.query("UPDATE members SET role='member' WHERE id=$1", [m.id]);
  assert.equal(
    (await api('GET', '/studio/blogs', { headers: h, origin: null })).status,
    403,
  );
  await pg.query(
    "UPDATE members SET role='team', banned_until=now()+interval '1 hour' WHERE id=$1",
    [m.id],
  );
  assert.equal(
    (await api('GET', '/studio/blogs', { headers: h, origin: null })).status,
    403,
  );
  await pg.query(
    "UPDATE studio_blog_tokens SET expires_at=now()-interval '1 second' WHERE id=$1",
    [ro.connection.id],
  );
  assert.equal(
    (
      await api('GET', '/studio/blogs', {
        headers: headers(ro.secret),
        origin: null,
      })
    ).status,
    401,
  );
  const rev = await token();
  assert.equal(
    (
      await api('DELETE', `/admin/studio-tokens/${rev.connection.id}`, {
        cookie: ro.cookie,
      })
    ).status,
    404,
  );
  assert.equal(
    (
      await api('DELETE', `/admin/studio-tokens/${rev.connection.id}`, {
        cookie: rev.cookie,
      })
    ).status,
    200,
  );
  assert.equal(
    (
      await api('GET', '/studio/blogs', {
        headers: headers(rev.secret),
        origin: null,
      })
    ).status,
    401,
  );
  await resetRates(pg);
});
void test('delegated scope cannot access page IDs, oversized payloads are bounded, and writes retain connection audit', async () => {
  const m = await token(),
    h = headers(m.secret);
  const page = await api('POST', '/admin/content', {
    cookie: m.cookie,
    body: { ...article, kind: 'page', slug: 'private-page-entry' },
  });
  assert.equal(page.status, 201);
  assert.equal(
    (
      await api('PATCH', `/studio/blogs/${page.body.content.id}`, {
        headers: h,
        origin: null,
        body: { ...article, slug: 'attempt-page-edit', revision: 1 },
      })
    ).status,
    404,
  );
  assert.equal(
    (
      await api('POST', `/studio/blogs/${page.body.content.id}/publish`, {
        headers: h,
        origin: null,
        body: { published: true, revision: 1, reviewed: true },
      })
    ).status,
    404,
  );
  assert.equal(
    (
      await api('POST', '/studio/blogs', {
        headers: h,
        origin: null,
        body: { ...article, body: 'x'.repeat(70000) },
      })
    ).status,
    413,
  );
  const created = await api('POST', '/studio/blogs', {
    headers: h,
    origin: null,
    body: { ...article, slug: 'audited-studio-article' },
  });
  assert.equal(created.status, 201);
  const audit = await pg.query<{
    data: { source: string; connectionId: number };
  }>(
    "SELECT data FROM mod_log WHERE action='content.create' AND target_id=$1",
    [created.body.content.id],
  );
  assert.equal(audit.rows[0].data.source, 'studio');
  assert.equal(audit.rows[0].data.connectionId, m.connection.id);
  await pg.query('UPDATE members SET email_verified=false WHERE id=$1', [m.id]);
  assert.equal(
    (await api('GET', '/studio/blogs', { headers: h, origin: null })).status,
    403,
  );
});
void test('connection labels are available in all six supported languages', async () => {
  const { studioConnectionWords } =
    await import('../../lib/i18n/studio-connection.ts');
  assert.deepEqual(Object.keys(studioConnectionWords).sort(), [
    'de',
    'en',
    'es',
    'fr',
    'ja',
    'pt-BR',
  ]);
  const keys = Object.keys(studioConnectionWords.en).sort();
  for (const words of Object.values(studioConnectionWords)) {
    assert.deepEqual(Object.keys(words).sort(), keys);
    assert.ok(Object.values(words).every((x) => x.length > 0));
  }
});
void test('read rate limit is enforced without exposing credential or drafts in errors', async () => {
  const m = await token('admin', ['blog:read']),
    h = headers(m.secret);
  for (let i = 0; i < 60; i++)
    assert.equal(
      (await api('GET', '/studio/blogs', { headers: h, origin: null })).status,
      200,
    );
  const blocked = await api('GET', '/studio/blogs', {
    headers: h,
    origin: null,
  });
  assert.equal(blocked.status, 429);
  assert.ok(!JSON.stringify(blocked.body).includes(m.secret));
});
