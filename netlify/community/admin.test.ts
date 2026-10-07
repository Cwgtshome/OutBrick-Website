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
import { isConfiguredAdmin, isConfiguredTeam, hasRole } from './session.ts';
import { signInWithProfile } from './auth/members.ts';
import { stubFetch } from './auth/test/kit.ts';
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
      'support@outbrick.site,mourad.hamdi@outbrick.site';
    assert.ok(isConfiguredAdmin(' SUPPORT@OUTBRICK.SITE '));
    assert.ok(isConfiguredAdmin('mourad.hamdi@outbrick.site'));
    assert.ok(!isConfiguredAdmin('mourad@outbrick.site'));
    assert.ok(!isConfiguredAdmin('news@outbrick.site'));
    assert.ok(!isConfiguredAdmin('someone@outbrick.site'));
    assert.ok(!isConfiguredAdmin('support@outbrick.site.attacker.example'));
  } finally {
    if (old === undefined) delete process.env.COMMUNITY_ADMIN_EMAILS;
    else process.env.COMMUNITY_ADMIN_EMAILS = old;
  }
});
void test('news staff bootstrap requires a verified email link and grants no moderation or admin access', async () => {
  const oldTeam = process.env.COMMUNITY_TEAM_EMAILS;
  const oldAdmins = process.env.COMMUNITY_ADMIN_EMAILS;
  const stub = stubFetch();
  try {
    process.env.COMMUNITY_TEAM_EMAILS = 'news@outbrick.site';
    process.env.COMMUNITY_ADMIN_EMAILS = 'support@outbrick.site,mourad.hamdi@outbrick.site';
    assert.ok(isConfiguredTeam(' NEWS@OUTBRICK.SITE '));
    assert.ok(!isConfiguredTeam('news@outbrick.site.attacker.example'));
    assert.ok(!hasRole({ role: 'team' }, 'moderator'));
    assert.ok(!hasRole({ role: 'team' }, 'admin'));
    assert.ok(hasRole({ role: 'team' }, 'team'));
    assert.ok(hasRole({ role: 'admin' }, 'moderator'));
    const base = { subject: 'news-google', email: 'news@outbrick.site', emailVerified: true, name: 'News desk', locale: 'en' as const };
    const oauth = await signInWithProfile({ ...base, provider: 'google' });
    const role = async () => (await pg.query<{ role: string }>('SELECT role FROM members WHERE id=$1', [oauth.memberId])).rows[0].role;
    assert.equal(await role(), 'member');
    await signInWithProfile({ ...base, provider: 'facebook', subject: 'news-unverified-facebook', emailVerified: false });
    assert.equal(await role(), 'member');
    const email = await signInWithProfile({ ...base, provider: 'email', subject: base.email });
    assert.equal(email.memberId, oauth.memberId);
    assert.equal(await role(), 'team');
    await pg.query("UPDATE members SET role='admin' WHERE id=$1", [email.memberId]);
    await signInWithProfile({ ...base, provider: 'email', subject: base.email });
    assert.equal(await role(), 'admin');
  } finally {
    stub.restore();
    if (oldTeam === undefined) delete process.env.COMMUNITY_TEAM_EMAILS; else process.env.COMMUNITY_TEAM_EMAILS = oldTeam;
    if (oldAdmins === undefined) delete process.env.COMMUNITY_ADMIN_EMAILS; else process.env.COMMUNITY_ADMIN_EMAILS = oldAdmins;
  }
});
void test('private dashboard and publishing enforced for each role, unverified and anonymous users', async () => {
  assert.equal((await api('GET', '/admin')).status, 401);
  for (const role of ['member', 'trusted', 'moderator', 'team', 'admin']) {
    const m = await member(pg, { role });
    assert.equal((await api('GET', '/mod/reports', { cookie: m.cookie })).status, ['moderator', 'admin'].includes(role) ? 200 : 403);
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

void test('editorial pagination reaches older entries and preserves the shell JSON-LD element', async () => {
  const owner = await member(pg, { role: 'admin' });
  await pg.query(`INSERT INTO editorial_content(locale,kind,slug,title,body_md,body_html,author_id,editor_id)
    SELECT 'en','blog','pagination-' || n,'Pagination article ' || n,'Body','<p>Body</p>',$1,$1 FROM generate_series(1,101) n`, [owner.id]);
  const first = await api('GET', '/admin?contentPage=1', { cookie: owner.cookie });
  const second = await api('GET', '/admin?contentPage=2', { cookie: owner.cookie });
  assert.equal(first.body.content.length, 100);
  assert.equal(first.body.contentPages, 2);
  assert.equal(second.body.contentPage, 2);
  const visibleIds = new Set([...first.body.content, ...second.body.content].map((c: { id: number }) => c.id));
  const allRows = await pg.query<{ id: number }>('SELECT id::int FROM editorial_content');
  assert.equal(visibleIds.size, allRows.rows.length);
  const older = second.body.content[0];
  const edited = await api('PATCH', `/admin/content/${older.id}`, { cookie: owner.cookie, body: { ...older, title: 'Older draft is still editable' } });
  assert.equal(edited.status, 200);
  const shell = '<head><title>Home</title></head><main><script type="application/ld+json">{"@id":"https://www.outbrick.site/community#webpage"}</script>' + homeStaticHtml('en') + '</main>';
  const library = contentPage(shell, 'en', []);
  assert.equal((library.match(/<script type="application\/ld\+json">/g) ?? []).length, 1);
  assert.ok(library.includes('<main><script type="application/ld+json">'));
  assert.ok(library.includes('CollectionPage'));
  const article = contentPage(shell, 'en', { ...older, kind: 'blog', title: 'A <safe> title' });
  assert.ok(article.includes('<main><script type="application/ld+json">'));
  const payload = article.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(payload);
  assert.equal(JSON.parse(payload).headline, 'A <safe> title');
  assert.ok(!payload.includes('<safe>'));
});
