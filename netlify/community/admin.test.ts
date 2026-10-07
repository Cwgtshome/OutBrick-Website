import { before, after, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase } from './test/harness.ts';
import {
  api,
  member,
  newThread,
  notificationsFor,
} from './test/forum-helpers.ts';
import { isConfiguredAdmin } from './session.ts';
import { adminWords } from '../../lib/i18n/admin.ts';
import { contentPage } from '../edge-functions/community-content.ts';
import { homeStaticHtml } from '../../lib/community/static-html.ts';
let pg: PGlite;
before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});
const draft = {
  locale: 'en',
  kind: 'blog',
  slug: 'voiceover-test-guide',
  title: 'VoiceOver test guide',
  summary: 'A private draft.',
  body: '## Hello\n\nSafe **content**, [guide](/community/c/help). <script>alert(1)</script>',
};
void test('exact verified admin allowlist; no domain-wide or substring matching', () => {
  const old = process.env.COMMUNITY_ADMIN_EMAILS;
  try {
    process.env.COMMUNITY_ADMIN_EMAILS =
      'support@outbrick.site,mourad@outbrick.site';
    assert.ok(isConfiguredAdmin(' SUPPORT@OUTBRICK.SITE '));
    assert.ok(isConfiguredAdmin('mourad@outbrick.site'));
    assert.ok(!isConfiguredAdmin('someone@outbrick.site'));
    assert.ok(!isConfiguredAdmin('support@outbrick.site.attacker.example'));
  } finally {
    if (old === undefined) delete process.env.COMMUNITY_ADMIN_EMAILS;
    else process.env.COMMUNITY_ADMIN_EMAILS = old;
  }
});
void test('private dashboard and publishing enforced for each role, unverified and anonymous users', async () => {
  assert.equal((await api('GET', '/admin')).status, 401);
  for (const role of ['member', 'trusted', 'moderator', 'team', 'admin']) {
    const m = await member(pg, { role });
    assert.equal(
      (await api('GET', '/admin', { cookie: m.cookie })).status,
      ['team', 'admin'].includes(role) ? 200 : 403,
    );
    assert.equal(
      (
        await api('POST', '/admin/content', {
          cookie: m.cookie,
          body: { ...draft, slug: `permission-${role}` },
        })
      ).status,
      ['team', 'admin'].includes(role) ? 201 : 403,
    );
  }
  const unverified = await member(pg, { role: 'admin', verified: false });
  assert.equal(
    (await api('GET', '/admin', { cookie: unverified.cookie })).status,
    403,
  );
  const admin = await member(pg, { role: 'admin' });
  assert.equal(
    (
      await api('POST', '/admin/content', {
        cookie: admin.cookie,
        body: draft,
        origin: 'https://evil.example',
      })
    ).status,
    403,
  );
});
void test('draft -> review -> publish -> public SSR -> unpublish; old revisions cannot overwrite', async () => {
  const editor = await member(pg, { role: 'team' }),
    admin = await member(pg, { role: 'admin' });
  const saved = await api('POST', '/admin/content', {
    cookie: editor.cookie,
    body: draft,
  });
  assert.equal(saved.status, 201, JSON.stringify(saved.body));
  const d = saved.body.content;
  assert.equal((await api('GET', `/content/en/blog/${d.slug}`)).status, 404);
  assert.ok(
    !(await api('GET', '/content?locale=en')).body.content.some(
      (c: { id: number }) => c.id === d.id,
    ),
  );
  assert.equal(
    (
      await api('POST', `/admin/content/${d.id}/publish`, {
        cookie: editor.cookie,
        body: { revision: d.revision, published: true },
      })
    ).status,
    403,
  );
  assert.equal(
    (
      await api('PATCH', `/admin/content/${d.id}`, {
        cookie: editor.cookie,
        body: { ...draft, revision: 0 },
      })
    ).status,
    409,
  );
  const published = await api('POST', `/admin/content/${d.id}/publish`, {
    cookie: admin.cookie,
    body: { revision: d.revision, published: true },
  });
  assert.equal(published.status, 200);
  const live = published.body.content;
  const read = await api('GET', `/content/en/blog/${d.slug}`);
  assert.equal(read.status, 200);
  assert.ok(read.body.content.html.includes('&lt;script&gt;'));
  assert.ok(!read.body.content.html.includes('<script>'));
  const page = contentPage(
    '<head><title>Home</title><link rel="canonical" href="https://www.outbrick.site/community"/></head>' +
      homeStaticHtml('en'),
    'en',
    read.body.content,
  );
  assert.ok(page.includes('<title>VoiceOver test guide'));
  assert.ok(page.includes('BlogPosting'));
  assert.ok(page.includes(`/community/content/blog/${d.slug}`));
  assert.equal(
    (
      await api('PATCH', `/admin/content/${d.id}`, {
        cookie: editor.cookie,
        body: { ...draft, revision: live.revision },
      })
    ).status,
    400,
  );
  const unpublished = await api('POST', `/admin/content/${d.id}/publish`, {
    cookie: admin.cookie,
    body: { revision: live.revision, published: false },
  });
  assert.equal(unpublished.status, 200);
  assert.equal((await api('GET', `/content/en/blog/${d.slug}`)).status, 404);
  assert.equal(
    (
      await api('PATCH', `/admin/content/${d.id}`, {
        cookie: editor.cookie,
        body: {
          ...draft,
          slug: 'different-address',
          revision: unpublished.body.content.revision,
        },
      })
    ).status,
    400,
  );
  assert.equal(
    (
      await pg.query<{ n: number }>(
        'SELECT count(*)::int n FROM editorial_revisions WHERE content_id=$1',
        [d.id],
      )
    ).rows[0].n,
    3,
  );
});
void test('role changes are admin-only, verified, audited and cannot remove your own admin', async () => {
  const admin = await member(pg, { role: 'admin' }),
    m = await member(pg),
    mod = await member(pg, { role: 'moderator' }),
    unverified = await member(pg, { verified: false });
  assert.equal(
    (
      await api('POST', `/mod/members/${m.id}/role`, {
        cookie: mod.cookie,
        body: { role: 'admin' },
      })
    ).status,
    403,
  );
  assert.equal(
    (
      await api('POST', `/mod/members/${admin.id}/role`, {
        cookie: admin.cookie,
        body: { role: 'member' },
      })
    ).status,
    403,
  );
  assert.equal(
    (
      await api('POST', `/mod/members/${unverified.id}/role`, {
        cookie: admin.cookie,
        body: { role: 'team' },
      })
    ).status,
    403,
  );
  assert.equal(
    (
      await api('POST', `/mod/members/${m.id}/role`, {
        cookie: admin.cookie,
        body: { role: 'trusted' },
      })
    ).status,
    200,
  );
  assert.equal(
    (
      await pg.query<{ n: number }>(
        `SELECT count(*)::int n FROM mod_log WHERE action='member.role' AND target_id=$1`,
        [m.id],
      )
    ).rows[0].n,
    1,
  );
});
void test('watch all uses existing deduplicated notifications and remains personal', async () => {
  const admin = await member(pg, { role: 'admin' }),
    writer = await member(pg);
  assert.equal(
    (
      await api('POST', '/admin/watch', {
        cookie: admin.cookie,
        body: { enabled: true },
      })
    ).status,
    200,
  );
  const t = await newThread(writer.cookie, {
    categorySlug: 'help',
    title: 'An actual player help question',
  });
  assert.equal(
    (await notificationsFor(pg, admin.id)).filter((n) => n.thread_id === t.id)
      .length,
    1,
  );
  const dash = await api('GET', '/admin', { cookie: admin.cookie });
  assert.equal(dash.body.watchingAll, true);
  assert.ok(!JSON.stringify(dash.body).includes('@example.com'));
  assert.equal(
    (
      await api('POST', '/admin/watch', {
        cookie: admin.cookie,
        body: { enabled: false },
      })
    ).status,
    200,
  );
  assert.equal(
    (await api('GET', '/admin', { cookie: admin.cookie })).body.watchingAll,
    false,
  );
});
void test('five language admin UI dictionaries have complete labels', () => {
  for (const c of Object.values(adminWords)) {
    assert.deepEqual(Object.keys(c).sort(), Object.keys(adminWords.en).sort());
    assert.equal(c.roles.length, 5);
  }
});
