// Screenshots on support requests, the site-wide notice and level help, end to end on PGlite.
//   node --experimental-strip-types --test netlify/lifecycle/support-extras.test.ts
/* oxlint-disable typescript/no-explicit-any */

import { after, before, beforeEach, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase } from '../community/test/harness.ts';
import { api, member, resetRates } from '../community/test/forum-helpers.ts';
import { memorySignalStore } from '../community/idle.ts';
import { createCase, setCaseSenderForTests } from './cases.ts';
import { caseTrackUrl, setPlayerCaseSenderForTests } from './player-cases.ts';
import { attachmentIds, setAttachmentStoreForTests } from './support-attachments.ts';
import { setOutboxStoreForTests } from './outbox.ts';
import { setStatusStoreForTests } from '../community/site-status.ts';
import { levelTitlePattern } from '../community/levels.ts';
import { setMeTooStoreForTests } from '../community/me-too.ts';
import handler from '../functions/community-api.mts';

const KEY = 're_test_support_extras';
let pg: PGlite;
const blobs = new Map<string, ArrayBuffer>();
const json = new Map<string, string>();
const recorder = async () => ({ ok: true, status: 200, data: { id: 'e1' } });

// A 1×1 PNG.
const PNG = Uint8Array.from(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64'));

before(async () => {
  pg = await freshDatabase();
  process.env.RESEND_API_KEY = KEY;
  setOutboxStoreForTests(memorySignalStore());
  setCaseSenderForTests(recorder);
  setPlayerCaseSenderForTests(recorder);
  setAttachmentStoreForTests({ set: async (k, v) => void blobs.set(k, v), get: async (k) => blobs.get(k) ?? null });
  setStatusStoreForTests({ get: async (k) => (json.has(k) ? JSON.parse(json.get(k)!) : null), setJSON: async (k, v) => void json.set(k, JSON.stringify(v)) });
  setMeTooStoreForTests({ get: async (k) => (json.has(k) ? JSON.parse(json.get(k)!) : null), setJSON: async (k, v) => void json.set(k, JSON.stringify(v)) });
});
after(async () => {
  setAttachmentStoreForTests(null);
  setStatusStoreForTests(null);
  setOutboxStoreForTests(null);
  await pg.close();
});
beforeEach(async () => {
  await resetRates(pg);
});

async function upload(bytes: Uint8Array, origin = 'https://www.outbrick.site') {
  const res = await handler(new Request('https://www.outbrick.site/api/community/support/attachments', { method: 'POST', headers: { origin, 'content-type': 'image/png' }, body: new Blob([new Uint8Array(bytes)]) }));
  return { status: res.status, body: (await res.json()) as any };
}

void test('attachment ids are validated, de-duplicated and capped at three', () => {
  const ok = 'A'.repeat(22);
  assert.deepEqual(attachmentIds(`${ok},${ok},bad,${'B'.repeat(22)},${'C'.repeat(22)},${'D'.repeat(22)}`), [ok, 'B'.repeat(22), 'C'.repeat(22)]);
  assert.deepEqual(attachmentIds(undefined), []);
});

void test('a screenshot is cleaned and stored; only the case it belongs to, or staff, can open it', async () => {
  const up = await upload(PNG);
  assert.equal(up.status, 201);
  assert.match(up.body.id, /^[A-Za-z0-9_-]{22}$/);
  assert.equal((await upload(new TextEncoder().encode('not an image'))).status, 415);
  assert.equal((await upload(PNG, 'https://evil.example')).status, 403);

  const mine = await createCase({ submissionId: 'att-1', email: 'p@example.com', name: 'P', locale: 'en', topic: 'bug', message: 'Look', device: '', appVersion: '', iosVersion: '', attachments: [up.body.id] });
  const other = await createCase({ submissionId: 'att-2', email: 'q@example.com', name: 'Q', locale: 'en', topic: 'bug', message: 'Mine', device: '', appVersion: '', iosVersion: '' });
  const q = (id: number) => new URL(caseTrackUrl(KEY, id, 'en')).search;

  const view = await api('GET', `/support/case${q(mine.id)}`);
  assert.deepEqual(view.body.case.events[0].attachments, [up.body.id]);
  const res = await handler(new Request(`https://www.outbrick.site/api/community/support/case/attachment${q(mine.id)}&a=${up.body.id}`));
  assert.equal(res.status, 200);
  assert.equal(res.headers.get('content-type'), 'image/png');
  assert.match(res.headers.get('cache-control') ?? '', /private/);
  // Another case's link cannot open it.
  assert.equal((await handler(new Request(`https://www.outbrick.site/api/community/support/case/attachment${q(other.id)}&a=${up.body.id}`))).status, 404);

  // A player note can carry screenshots too.
  const s = Object.fromEntries(new URL(caseTrackUrl(KEY, other.id, 'en')).searchParams);
  const up2 = await upload(PNG);
  const note = await api('POST', '/support/case/note', { body: { ...s, message: 'Here it is', attachments: [up2.body.id, 'nope'] } });
  assert.equal(note.status, 200);
  assert.deepEqual(note.body.case.events.at(-1).attachments, [up2.body.id]);

  const visitor = await member(pg);
  assert.equal((await api('GET', `/admin/cases/${mine.id}/attachments/${up.body.id}`, { cookie: visitor.cookie })).status, 403);
  const staff = await member(pg, { role: 'team' });
  const staffRes = await handler(new Request(`https://www.outbrick.site/api/community/admin/cases/${mine.id}/attachments/${up.body.id}`, { headers: { cookie: staff.cookie } }));
  assert.equal(staffRes.status, 200);
  assert.equal((await api('GET', `/admin/cases/${other.id}/attachments/${up.body.id}`, { cookie: staff.cookie })).status, 404, 'the id must belong to that case');
});

void test('the site-wide notice: staff set it, everyone reads it, it ends by itself or when cleared', async () => {
  assert.deepEqual((await api('GET', '/site-status')).body, { status: null });
  const visitor = await member(pg);
  assert.equal((await api('POST', '/admin/site-status', { cookie: visitor.cookie, body: { messages: { en: 'x' } } })).status, 403);
  const staff = await member(pg, { role: 'team' });
  assert.equal((await api('POST', '/admin/site-status', { cookie: staff.cookie, body: { messages: { fr: 'Seulement en français' } } })).status, 400, 'English is required');
  assert.equal((await api('POST', '/admin/site-status', { cookie: staff.cookie, body: { messages: { en: 'x' }, link: 'javascript:alert(1)' } })).status, 400);
  const set = await api('POST', '/admin/site-status', { cookie: staff.cookie, body: { level: 'outage', messages: { en: 'iCloud sync is slow\nright now.', fr: 'La synchro iCloud est lente.', xx: 'ignored' }, link: '/support/known-issues', days: 99 } });
  assert.equal(set.status, 200);
  const read = await api('GET', '/site-status');
  assert.equal(read.body.status.level, 'outage');
  assert.deepEqual(read.body.status.messages, { en: 'iCloud sync is slow right now.', fr: 'La synchro iCloud est lente.' });
  assert.equal(read.body.status.link, '/support/known-issues');
  const days = (new Date(read.body.status.expiresAt).getTime() - Date.now()) / 86400_000;
  assert.ok(days > 13.9 && days <= 14, 'capped at fourteen days');
  assert.equal((await api('DELETE', '/admin/site-status', { cookie: staff.cookie })).status, 200);
  assert.deepEqual((await api('GET', '/site-status')).body, { status: null });
});

void test('level help finds threads by bug-report level or by title in every language, and only visible ones', async () => {
  const author = await member(pg);
  const { rows: cats } = await pg.query<{ id: number; slug: string }>(`SELECT id, slug FROM categories WHERE slug IN ('help','bugs')`);
  const cat = (slug: string) => cats.find((c) => c.slug === slug)!.id;
  const add = async (title: string, opts: { slug?: string; bug?: unknown; hidden?: boolean } = {}) =>
    pg.query(`INSERT INTO threads (category_id, author_id, title, slug, language, bug, hidden) VALUES ($1, $2, $3, 't', 'en', $4, $5)`, [cat(opts.slug ?? 'help'), author.id, title, opts.bug ? JSON.stringify(opts.bug) : null, opts.hidden ?? false]);
  await add('Level 512 is impossible?');
  await add('Niveau 512 : aide');
  await add('レベル512が難しい');
  await add('Crash on board', { slug: 'bugs', bug: { device: 'iPhone', os_version: '27', app_version: '5.1', assistive: [], steps: 's', expected: 'e', actual: 'a', level: 512 } });
  await add('Level 5120 is different');
  await add('Level 512 hidden', { hidden: true });
  const res = await api('GET', '/levels/512/threads');
  assert.equal(res.status, 200);
  const titles = res.body.threads.map((t: any) => t.title).sort();
  assert.deepEqual(titles, ['Crash on board', 'Level 512 is impossible?', 'Niveau 512 : aide', 'レベル512が難しい'].sort());
  assert.equal((await api('GET', '/levels/0/threads')).status, 404);
  assert.equal((await api('GET', '/levels/abc/threads')).status, 404);
  assert.match('nível 7', new RegExp(levelTitlePattern(7).replace('(?![0-9])', '(?!\\d)'), 'i'));
});

void test('"this affects me too" counts open known issues once a day per connection', async () => {
  assert.deepEqual((await api('GET', '/known-issues/me-too')).body, { counts: {} });
  const first = await api('POST', '/known-issues/voiceover-focus/me-too', { body: {} });
  assert.equal(first.status, 200);
  assert.equal(first.body.count, 1);
  assert.equal((await api('POST', '/known-issues/voiceover-focus/me-too', { body: {} })).status, 429, 'once a day from one connection');
  assert.equal((await api('POST', '/known-issues/voiceover-focus/me-too', { body: {}, headers: { 'cf-connecting-ip': '10.0.0.9' } })).body.count, 2);
  assert.equal((await api('POST', '/known-issues/tip-card-frozen/me-too', { body: {} })).status, 400, 'fixed issues take no votes');
  assert.equal((await api('POST', '/known-issues/nope/me-too', { body: {} })).status, 400);
  assert.equal((await api('POST', '/known-issues/voiceover-focus/me-too', { body: {}, origin: 'https://evil.example' })).status, 403);
  assert.deepEqual((await api('GET', '/known-issues/me-too')).body.counts, { 'voiceover-focus': 2 });
});
