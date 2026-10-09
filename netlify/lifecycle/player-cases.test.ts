// The Support Centre's player-facing endpoints, end to end on PGlite with Resend replaced by a
// recorder: a player's own request page (signed link), adding details, emailing the link again,
// and "Was this helpful?" answers. Run with:
//   node --experimental-strip-types --test netlify/lifecycle/player-cases.test.ts
/* oxlint-disable typescript/no-explicit-any */

import { after, before, beforeEach, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase, testDb } from '../community/test/harness.ts';
import { api, member, resetRates } from '../community/test/forum-helpers.ts';
import { memorySignalStore } from '../community/idle.ts';
import { withPlatform, type PlatformStore } from '../platform.ts';
import { signedUrl } from '../../emails/links.ts';
import type { OutgoingEmail } from '../../emails/resend.ts';
import { cleanCaseDetails, createCase, setCaseSenderForTests } from './cases.ts';
import { caseTrackUrl, setPlayerCaseSenderForTests } from './player-cases.ts';
import { setOutboxStoreForTests } from './outbox.ts';
import { contactAcknowledgement } from '../../emails/templates.ts';
import { supportFixed, supportReply } from '../../emails/lifecycle.ts';

const KEY = 're_test_player_cases_key';
let pg: PGlite;
let sent: { email: OutgoingEmail; key?: string }[] = [];
const recorder = async (_apiKey: string, email: OutgoingEmail, key?: string) => {
  sent.push({ email, key });
  return { ok: true, status: 200, data: { id: `e${sent.length}` } };
};

before(async () => {
  pg = await freshDatabase();
  process.env.RESEND_API_KEY = KEY;
  setOutboxStoreForTests(memorySignalStore());
  setCaseSenderForTests(recorder);
  setPlayerCaseSenderForTests(recorder);
});
after(async () => {
  setOutboxStoreForTests(null);
  setCaseSenderForTests(null);
  setPlayerCaseSenderForTests(null);
  await pg.close();
});
beforeEach(async () => {
  sent = [];
  await resetRates(pg);
});

let n = 0;
async function newCase(overrides: Partial<Parameters<typeof createCase>[0]> = {}) {
  n++;
  return createCase({ submissionId: `pc-${n}`, email: 'Player@Example.com', name: 'Ada', locale: 'fr', topic: 'bug', message: 'Level 512 freezes', device: 'iPhone 15', appVersion: '5.1.1', iosVersion: '27.0', ...overrides });
}
const query = (url: string) => new URL(url).search;

void test('the contact form keeps only the known detail fields, trimmed and capped', () => {
  assert.deepEqual(cleanCaseDetails({ level: ' 512 ', assistive: 'VoiceOver', tried: 'voiceover', evil: 'x', 'purchase-item': 'a'.repeat(500), guide: '' }), {
    level: '512',
    assistive: 'VoiceOver',
    tried: 'voiceover',
    'purchase-item': 'a'.repeat(120),
  });
  assert.deepEqual(cleanCaseDetails({ level: 'line\u0000break' }), { level: 'line break' });
});

void test('a signed link opens the case with its public history; staff notes and bookkeeping stay private', async () => {
  const staff = await member(pg, { role: 'team', name: 'Mourad Hamdi' });
  const c = await newCase({ details: { level: '512', assistive: 'VoiceOver' } });
  await pg.query(`INSERT INTO support_case_events (case_id, kind, body, actor_id) VALUES ($1, 'reply', 'Try updating to 5.1.2.', $2)`, [c.id, staff.id]);
  await pg.query(`INSERT INTO support_case_events (case_id, kind, body, actor_id) VALUES ($1, 'note', 'internal: looks like the idle offer', $2)`, [c.id, staff.id]);
  await pg.query(`INSERT INTO support_case_events (case_id, kind) VALUES ($1, 'feedback_requested')`, [c.id]);
  await pg.query(`UPDATE support_cases SET status = 'replied' WHERE id = $1`, [c.id]);

  const url = caseTrackUrl(KEY, c.id, 'fr');
  assert.match(url, /^https:\/\/www\.outbrick\.site\/fr\/support\/request\?p=/);
  const res = await api('GET', `/support/case${query(url)}`);
  assert.equal(res.status, 200);
  const view = res.body.case;
  assert.equal(view.ref, c.ref);
  assert.equal(view.status, 'replied');
  assert.deepEqual(view.details, { level: '512', assistive: 'VoiceOver' });
  assert.deepEqual(view.events.map((e: any) => e.kind), ['created', 'reply']);
  assert.equal(view.events[1].staff, 'Mourad', 'only the first name of the staff member');
  assert.ok(view.feedback?.solved.includes('support-feedback'), 'an answered case offers "did we solve it?"');
  assert.equal(JSON.stringify(view).includes('internal:'), false, 'staff notes never reach the player');
  assert.equal(JSON.stringify(view).includes('player@example.com'), false, 'the address is not echoed back');
  assert.equal('email' in view, false);
});

void test('a wrong, tampered, other-purpose or expired link opens nothing', async () => {
  const c = await newCase();
  const good = new URL(caseTrackUrl(KEY, c.id, 'en'));
  good.searchParams.set('t', good.searchParams.get('t')!.replace(/.$/, (ch) => (ch === 'A' ? 'B' : 'A')));
  assert.equal((await api('GET', `/support/case${good.search}`)).status, 404);
  const otherPurpose = signedUrl('https://www.outbrick.site/x', KEY, 'feedback', { c: c.id }, 3600);
  assert.equal((await api('GET', `/support/case${query(otherPurpose)}`)).status, 404);
  const expired = signedUrl('https://www.outbrick.site/x', KEY, 'case', { c: c.id }, 60, Date.now() - 3_600_000);
  const res = await api('GET', `/support/case${query(expired)}`);
  assert.equal(res.status, 400);
  assert.equal(res.body.error.code, 'expired');
  assert.equal((await api('GET', `/support/case`)).status, 404);
});

void test('a player adds details: an answered case reopens, the team hears, and "did we solve it?" is cancelled', async () => {
  const c = await newCase();
  await pg.query(`UPDATE support_cases SET status = 'replied' WHERE id = $1`, [c.id]);
  await pg.query(`INSERT INTO email_outbox (kind, to_email, locale, payload, send_after, dedupe_key) VALUES ('support-feedback', 'player@example.com', 'fr', $1::jsonb, now() + interval '3 days', $2)`, [JSON.stringify({ caseId: c.id }), `feedback-${c.id}`]);
  const s = Object.fromEntries(new URL(caseTrackUrl(KEY, c.id, 'fr')).searchParams);
  const res = await api('POST', '/support/case/note', { body: { ...s, message: 'Still freezes on 514 after updating.' } });
  assert.equal(res.status, 200);
  assert.equal(res.body.case.status, 'open');
  assert.deepEqual(res.body.case.events.map((e: any) => e.kind).slice(-2), ['player_note', 'reopened']);
  const { rows } = await pg.query<{ status: string; reopened: number }>(`SELECT status, reopened FROM support_cases WHERE id = $1`, [c.id]);
  assert.deepEqual(rows[0], { status: 'open', reopened: 1 });
  const pending = await pg.query(`SELECT 1 FROM email_outbox WHERE dedupe_key = $1 AND sent_at IS NULL AND cancelled_at IS NULL`, [`feedback-${c.id}`]);
  assert.equal(pending.rows.length, 0, 'the feedback request is cancelled');
  assert.equal(sent.length, 1);
  assert.equal(sent[0].email.to, 'support@outbrick.site');
  assert.match(sent[0].email.subject, new RegExp(`Reopened: ${c.ref}`));
  assert.match(sent[0].email.html, /Still freezes on 514/);

  // On an open case it is just added; the status stays.
  sent = [];
  const again = await api('POST', '/support/case/note', { body: { ...s, message: 'Also on my iPad.' } });
  assert.equal(again.body.case.status, 'open');
  assert.match(sent[0].email.subject, /^More details:/);
});

void test('adding details needs a valid link, a real message and the site origin', async () => {
  const c = await newCase();
  const s = Object.fromEntries(new URL(caseTrackUrl(KEY, c.id, 'en')).searchParams);
  assert.equal((await api('POST', '/support/case/note', { body: { ...s, message: 'x' } })).status, 400);
  assert.equal((await api('POST', '/support/case/note', { body: { ...s, t: 'nope', message: 'Hello there' } })).status, 404);
  assert.equal((await api('POST', '/support/case/note', { body: { ...s, message: 'Hello there' }, origin: 'https://evil.example' })).status, 403);
});

void test('asking for the link again emails only the address on the case, and answers the same either way', async () => {
  const c = await newCase({ locale: 'de' });
  const ok = await api('POST', '/support/case/link', { body: { ref: c.ref.toLowerCase(), email: ' PLAYER@example.com ' } });
  assert.equal(ok.status, 200);
  assert.deepEqual(ok.body, { ok: true });
  assert.equal(sent.length, 1);
  assert.equal(sent[0].email.to, 'Player@Example.com');
  assert.match(sent[0].email.subject, new RegExp(c.ref));
  assert.match(sent[0].email.html, /\/de\/support\/request\?p=/);

  sent = [];
  const wrong = await api('POST', '/support/case/link', { body: { ref: c.ref, email: 'someone-else@example.com' } });
  assert.equal(wrong.status, 200);
  assert.deepEqual(wrong.body, { ok: true });
  const unknown = await api('POST', '/support/case/link', { body: { ref: 'OB-ZZZZZZ', email: 'player@example.com' } });
  assert.deepEqual(unknown.body, { ok: true });
  assert.equal(sent.length, 0, 'nothing is sent when the reference and address do not match');
  assert.equal((await api('POST', '/support/case/link', { body: { ref: 'hello', email: 'player@example.com' } })).status, 400);
});

void test('the acknowledgement, a staff reply and a fixed notice carry the private track link', () => {
  const url = caseTrackUrl(KEY, 42, 'es');
  const ack = contactAcknowledgement({ locale: 'es', name: 'Ana', topic: 'bug', message: 'Hola', caseRef: 'OB-ABCDEF', trackUrl: url });
  assert.ok(ack.html.includes(url.replace(/&/g, '&amp;')));
  assert.ok(ack.text.includes(url));
  assert.match(ack.html, /Seguir mi solicitud/);
  const reply = supportReply({ locale: 'ja', name: 'A', ref: 'OB-ABCDEF', staff: 'Mourad', message: 'Hi', original: 'Q', trackUrl: url });
  assert.ok(reply.text.includes(url));
  const fixed = supportFixed({ locale: 'fr', name: 'A', ref: 'OB-ABCDEF', version: '5.1.2', trackUrl: url });
  assert.ok(fixed.text.includes(url));
  // Without a link (no database), nothing changes.
  assert.ok(!contactAcknowledgement({ locale: 'en', name: 'A', topic: 'bug', message: 'Hi' }).text.includes('/support/request'));
});

// ---------------------------------------------------------------------------------------------
// "Was this helpful?"

function memoryStore(): PlatformStore & { data: Map<string, string> } {
  const data = new Map<string, string>();
  async function get(key: string, options: { type: 'arrayBuffer' }): Promise<ArrayBuffer | null>;
  async function get(key: string, options: { type: 'json' }): Promise<unknown>;
  async function get(key: string, options: { type: 'text' }): Promise<string | null>;
  async function get(key: string, options: { type: 'arrayBuffer' | 'json' | 'text' }): Promise<unknown> {
    const v = data.get(key);
    if (v === undefined) return null;
    return options.type === 'json' ? JSON.parse(v) : v;
  }
  return {
    data,
    get,
    set: async (key: string, value: ArrayBuffer | string) => void data.set(key, typeof value === 'string' ? value : new TextDecoder().decode(value)),
    setJSON: async (key: string, value: unknown) => void data.set(key, JSON.stringify(value)),
    delete: async (key: string) => void data.delete(key),
  } as PlatformStore & { data: Map<string, string> };
}

void test('guide feedback is tallied per page and month, anonymously, and only staff can read it', async () => {
  const store = memoryStore();
  const run = <T>(work: () => Promise<T>) => withPlatform({ db: testDb!, store: () => store }, work);
  const yes = await run(() => api('POST', '/help/feedback', { body: { slug: 'voiceover', locale: 'fr', helpful: true } }));
  assert.equal(yes.status, 200);
  const no = await run(() => api('POST', '/help/feedback', { body: { slug: 'voiceover', locale: 'fr', helpful: false, reason: 'outdated', comment: 'The rotor names changed.\u0007' }, headers: { 'cf-connecting-ip': '10.0.0.2' } }));
  assert.equal(no.status, 200);
  assert.equal((await run(() => api('POST', '/help/feedback', { body: { slug: 'not-a-guide', helpful: true } }))).status, 400);
  assert.equal((await run(() => api('POST', '/help/feedback', { body: { slug: 'voiceover' } }))).status, 400);

  const month = new Date().toISOString().slice(0, 7);
  const tally = JSON.parse(store.data.get(`help-feedback/${month}.json`)!);
  const page = tally.pages.voiceover;
  assert.equal(page.yes, 1);
  assert.equal(page.no, 1);
  assert.deepEqual(page.byLocale.fr, { yes: 1, no: 1 });
  assert.deepEqual(page.reasons, { outdated: 1 });
  assert.equal(page.comments[0].text, 'The rotor names changed.');
  assert.equal(JSON.stringify(tally).includes('10.0.0.2'), false, 'no address is stored');

  // The same reader answering the same page again is limited.
  for (let i = 0; i < 2; i++) await run(() => api('POST', '/help/feedback', { body: { slug: 'troubleshooter', locale: 'en', helpful: true } }));
  assert.equal((await run(() => api('POST', '/help/feedback', { body: { slug: 'troubleshooter', locale: 'en', helpful: true } }))).status, 200);
  assert.equal((await run(() => api('POST', '/help/feedback', { body: { slug: 'troubleshooter', locale: 'en', helpful: true } }))).status, 429);

  const visitor = await member(pg);
  assert.equal((await run(() => api('GET', '/admin/help-feedback', { cookie: visitor.cookie }))).status, 403);
  const staff = await member(pg, { role: 'team' });
  const read = await run(() => api('GET', `/admin/help-feedback?month=${month}`, { cookie: staff.cookie }));
  assert.equal(read.status, 200);
  assert.equal(read.body.month.pages.voiceover.no, 1);
  assert.ok(read.body.previous.month < month);
});
