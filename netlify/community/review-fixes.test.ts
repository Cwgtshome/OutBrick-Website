// Regression tests for the PR #12 review: atomic rate limits, rejecting a queued post, and
// recovering notification emails from a run that was cut off mid-send.

import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase, request, signedInCookie } from './test/harness.ts';
import { rateAllow } from './db.ts';
import { runNotify, type Sender } from './notify.ts';
import communityApi from '../functions/community-api.mts';

let pg: PGlite;
before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});

void test('a parallel burst is admitted no more than the limit allows', async () => {
  const results = await Promise.all(Array.from({ length: 12 }, () => rateAllow('burst:test', 3, 60)));
  assert.equal(results.filter(Boolean).length, 3);
  const { rows } = await pg.query<{ n: number }>(`SELECT count(*)::int AS n FROM rate_events WHERE key = 'burst:test'`);
  assert.equal(rows[0].n, 3);
});

void test('hiding a queued post rejects it: it leaves the queue, and a queued opening post hides its thread', async () => {
  const author = await signedInCookie(pg, { displayName: 'Queued Author', email: 'queued@example.com' });
  const mod = await signedInCookie(pg, { displayName: 'A Moderator', email: 'mod@example.com', role: 'moderator' });
  const { rows: cat } = await pg.query<{ id: number }>(`SELECT id FROM categories WHERE slug = 'general'`);
  const { rows: th } = await pg.query<{ id: number }>(
    `INSERT INTO threads (category_id, author_id, title, slug, pending) VALUES ($1, $2, 'A queued thread', 'a-queued-thread', true) RETURNING id::int`,
    [cat[0].id, author.id],
  );
  const { rows: post } = await pg.query<{ id: number }>(
    `INSERT INTO posts (thread_id, author_id, number, body_md, body_html, pending) VALUES ($1, $2, 1, 'see https://spam.example', '<p>see</p>', true) RETURNING id::int`,
    [th[0].id, author.id],
  );
  const before = (await (await communityApi(request('GET', '/api/community/mod/queue', { cookie: mod.cookie }))).json()) as { posts: unknown[] };
  assert.equal(before.posts.length, 1);
  const hide = await communityApi(request('POST', `/api/community/posts/${post[0].id}/hide`, { cookie: mod.cookie, body: { reason: 'Spam link' } }));
  assert.equal(hide.status, 200);
  const afterQueue = (await (await communityApi(request('GET', '/api/community/mod/queue', { cookie: mod.cookie }))).json()) as { posts: unknown[] };
  assert.equal(afterQueue.posts.length, 0);
  const { rows: t } = await pg.query<{ pending: boolean; hidden: boolean }>(`SELECT pending, hidden FROM threads WHERE id = $1`, [th[0].id]);
  assert.deepEqual(t[0], { pending: false, hidden: true });
});

void test('a notification claimed by a run that died is emailed later; a live claim is left alone; emailed_at waits for Resend', async () => {
  const m = await signedInCookie(pg, { displayName: 'Mail Reader', email: 'reader@example.com' });
  await pg.query(`DELETE FROM notifications`);
  const old = new Date(Date.now() - 3600_000);
  const { rows: stale } = await pg.query<{ id: number }>(
    `INSERT INTO notifications (member_id, kind, created_at, email_claimed_at) VALUES ($1, 'welcome', $2, now() - interval '20 minutes') RETURNING id::int`,
    [m.id, old],
  );
  const sent: string[] = [];
  const failing: Sender = async () => ({ ok: false, status: 500, data: null, error: 'stubbed failure' });
  const ok: Sender = async (_k, email) => {
    sent.push(email.subject);
    return { ok: true, status: 200, data: { id: 'x' } };
  };
  // A failed send leaves the row unemailed and unclaimed.
  await runNotify({ apiKey: 're_test_key_for_tests_only', send: failing });
  let row = (await pg.query<{ emailed_at: string | null; email_claimed_at: string | null }>(`SELECT emailed_at, email_claimed_at FROM notifications WHERE id = $1`, [stale[0].id])).rows[0];
  assert.equal(row.emailed_at, null);
  assert.equal(row.email_claimed_at, null);
  // The next run sends it and only then marks it emailed.
  await runNotify({ apiKey: 're_test_key_for_tests_only', send: ok });
  row = (await pg.query<{ emailed_at: string | null; email_claimed_at: string | null }>(`SELECT emailed_at, email_claimed_at FROM notifications WHERE id = $1`, [stale[0].id])).rows[0];
  assert.ok(row.emailed_at);
  assert.equal(sent.length, 1);
  // A fresh claim (another run is sending it right now) is not picked up.
  await pg.query(`UPDATE notifications SET emailed_at = NULL, email_claimed_at = now() WHERE id = $1`, [stale[0].id]);
  await runNotify({ apiKey: 're_test_key_for_tests_only', send: ok });
  assert.equal(sent.length, 1);
});
