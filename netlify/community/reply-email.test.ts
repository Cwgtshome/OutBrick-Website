// Reply by email: signed Reply-To addresses, cutting quoted history, the notification emails'
// Reply-To, and Resend's inbound webhook end to end (Svix signatures made here, Resend stubbed).
/* oxlint-disable typescript/no-explicit-any */

import { after, before, beforeEach, test } from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase } from './test/harness.ts';
import { api, member, newThread, resetRates } from './test/forum-helpers.ts';
import { communityAuth } from './auth/routes.ts';
import { readReplyAddress, replyAddress, setInboundFetchForTests, stripQuoted } from './reply-email.ts';
import { verifySvix } from './inbound-resend.ts';
import { runNotify, type Sender } from './notify.ts';
import type { OutgoingEmail } from '../../emails/resend.ts';
import { stubFetch, TEST_RESEND_KEY, withEnv } from './auth/test/kit.ts';

const SECRET_BYTES = Buffer.from('a test signing secret, 32 bytes!');
const SECRET = `whsec_${SECRET_BYTES.toString('base64')}`;
const DOMAIN = 'reply.outbrick.site';
let pg: PGlite;
let restoreEnv: () => void;

before(async () => {
  pg = await freshDatabase();
  restoreEnv = withEnv({ RESEND_API_KEY: TEST_RESEND_KEY, RESEND_WEBHOOK_SECRET: SECRET, COMMUNITY_REPLY_DOMAIN: DOMAIN });
});
after(async () => {
  restoreEnv();
  setInboundFetchForTests(null);
  await pg.close();
});
beforeEach(async () => {
  await resetRates(pg);
});

function signed(body: string, opts: { id?: string; timestamp?: number; secret?: Buffer } = {}): Record<string, string> {
  const id = opts.id ?? `msg_${Math.random().toString(36).slice(2)}`;
  const ts = String(opts.timestamp ?? Math.floor(Date.now() / 1000));
  const sig = createHmac('sha256', opts.secret ?? SECRET_BYTES).update(`${id}.${ts}.${body}`).digest('base64');
  return { 'svix-id': id, 'svix-timestamp': ts, 'svix-signature': `v1,AAAA v1,${sig}`, 'content-type': 'application/json' };
}

async function webhook(event: unknown, headers?: Record<string, string>): Promise<{ status: number; body: any }> {
  const body = JSON.stringify(event);
  const res = await communityAuth(new Request('https://www.outbrick.site/api/community/email/inbound', { method: 'POST', headers: headers ?? signed(body), body }));
  return { status: res.status, body: await res.json() };
}

let mail = 0;
function received(opts: { to: string; from: string; text?: string | null; html?: string; messageId?: string; headers?: Record<string, string> }) {
  mail++;
  return {
    type: 'email.received',
    created_at: new Date().toISOString(),
    data: {
      email_id: `em_${mail}`,
      from: `Someone <${opts.from}>`,
      to: [opts.to],
      cc: [],
      subject: 'Re: a reply in your thread',
      message_id: opts.messageId ?? `<m${mail}@mail.example>`,
      ...(opts.text === null ? {} : { text: opts.text ?? 'Thanks, that worked!\n\nOn Tue, 7 Oct 2026 at 10:00, OutBrick Community <reply+x@reply.outbrick.site> wrote:\n> the old text' }),
      ...(opts.html ? { html: opts.html } : {}),
      ...(opts.headers ? { headers: opts.headers } : {}),
    },
  };
}

/** Ada's thread, Bob's reply, and the notification Ada got for it. */
async function setup(opts: { verified?: boolean } = {}) {
  const ada = await member(pg, { verified: opts.verified });
  if (opts.verified === false) await pg.query(`UPDATE members SET email_verified = true WHERE id = $1`, [ada.id]);
  const bob = await member(pg);
  const thread = await newThread(ada.cookie, { title: 'Reply by email please', body: 'Opening' });
  await api('POST', `/threads/${thread.id}/posts`, { cookie: bob.cookie, body: { body: 'Try restarting.' } });
  const note = (await pg.query<any>(`SELECT id::int AS id FROM notifications WHERE member_id = $1 AND kind = 'reply' ORDER BY id DESC LIMIT 1`, [ada.id])).rows[0];
  const email = (await pg.query<any>(`SELECT email FROM members WHERE id = $1`, [ada.id])).rows[0].email as string;
  const address = replyAddress(TEST_RESEND_KEY, DOMAIN, { memberId: ada.id, threadId: thread.id, notificationId: note.id });
  return { ada, bob, thread, note, email, address };
}

const postsOf = async (threadId: number) => (await pg.query<any>(`SELECT number, author_id::int AS author, body_md, reply_to FROM posts WHERE thread_id = $1 ORDER BY number`, [threadId])).rows;

void test('reply addresses: signed, case-insensitive, bound to our domain', () => {
  const t = { memberId: 42, threadId: 1234, notificationId: 99999 };
  const addr = replyAddress(TEST_RESEND_KEY, DOMAIN, t);
  assert.match(addr, /^reply\+[0-9a-z]+\.[0-9a-z]+\.[0-9a-z]+\.[0-9a-f]{32}@reply\.outbrick\.site$/);
  assert.ok(addr.split('@')[0].length <= 64, 'a valid local part');
  assert.deepEqual(readReplyAddress(TEST_RESEND_KEY, DOMAIN, addr), t);
  assert.deepEqual(readReplyAddress(TEST_RESEND_KEY, DOMAIN, addr.toUpperCase()), t);
  assert.equal(readReplyAddress(TEST_RESEND_KEY, DOMAIN, addr.replace(DOMAIN, 'other.example')), null, 'another domain');
  assert.equal(readReplyAddress(TEST_RESEND_KEY, DOMAIN, addr.replace(/\.([0-9a-f])/, (_m, c: string) => `.${c === '0' ? '1' : '0'}`)), null);
  const forged = replyAddress(TEST_RESEND_KEY, DOMAIN, { ...t, memberId: 43 }).replace(/\.[0-9a-f]{32}@/, addr.match(/\.[0-9a-f]{32}@/)![0]);
  assert.equal(readReplyAddress(TEST_RESEND_KEY, DOMAIN, forged), null, 'another member id with this MAC');
  assert.equal(readReplyAddress('another key', DOMAIN, addr), null);
});

void test('quoted history is cut in all six languages', () => {
  const cases = [
    'Merci !\n\nLe mar. 7 oct. 2026 à 10:00, OutBrick Community <reply+x@reply.outbrick.site> a écrit :\n> vieux',
    'Danke!\n\nAm Di., 7. Okt. 2026 um 10:00 Uhr schrieb OutBrick Community <reply+x@reply.outbrick.site>:\n> alt',
    '¡Gracias!\n\nEl mar, 7 oct 2026 a las 10:00, OutBrick Community (<reply+x@reply.outbrick.site>) escribió:\n> viejo',
    'ありがとう！\n\n2026/10/07 10:00、OutBrick Community <reply+x@reply.outbrick.site>のメッセージ:\n> 古い',
    'Thanks!\n\n-----Original Message-----\nFrom: OutBrick',
    'Thanks!\n\nOn Tue, 7 Oct 2026 at 10:00, OutBrick Community\n<reply+x@reply.outbrick.site> wrote:\n> old',
    'Thanks!\n> inline quote\nmore\n-- \nAda, sent from my iPhone',
  ];
  assert.deepEqual(cases.map(stripQuoted), ['Merci !', 'Danke!', '¡Gracias!', 'ありがとう！', 'Thanks!', 'Thanks!', 'Thanks!\nmore']);
  assert.equal(stripQuoted('> only a quote\n> nothing new'), '');
  assert.equal(stripQuoted('Line one\r\n\r\n\r\n\r\nLine two'), 'Line one\n\nLine two');
});

void test('Svix signatures: right secret, any listed v1 signature, five-minute tolerance', () => {
  const body = '{"a":1}';
  const h = new Headers(signed(body, { id: 'msg_1', timestamp: 1_800_000_000 }));
  assert.ok(verifySvix(SECRET, h, body, 1_800_000_000));
  assert.ok(verifySvix(SECRET, h, body, 1_800_000_299));
  assert.ok(!verifySvix(SECRET, h, body, 1_800_000_301), 'too old');
  assert.ok(!verifySvix(SECRET, h, `${body} `, 1_800_000_000), 'body changed');
  assert.ok(!verifySvix(`whsec_${Buffer.from('another secret').toString('base64')}`, h, body, 1_800_000_000));
  const noSig = new Headers(h);
  noSig.delete('svix-signature');
  assert.ok(!verifySvix(SECRET, noSig, body, 1_800_000_000));
});

void test('a single-item notification email carries the signed Reply-To and says so; grouped and release emails do not', async () => {
  const { ada, note } = await setup();
  // Only the reply notice, so it goes out on its own (other kinds, such as badges, would group with it).
  await pg.query(`DELETE FROM notifications WHERE kind <> 'reply'`);
  await pg.query(`UPDATE notifications SET created_at = now() - interval '5 minutes' WHERE member_id = $1`, [ada.id]);
  const sent: OutgoingEmail[] = [];
  const send: Sender = async (_k, email) => {
    sent.push(email);
    return { ok: true, status: 200, data: { id: 'x' } };
  };
  await runNotify({ apiKey: TEST_RESEND_KEY, send });
  const mine = sent.find((e) => e.subject.includes('Reply by email please'));
  assert.ok(mine);
  assert.equal(readReplyAddress(TEST_RESEND_KEY, DOMAIN, mine.replyTo)?.notificationId, note.id);
  assert.match(mine.text, /reply to this email/);

  // Switched off: the ordinary support@ Reply-To and no hint.
  const off = withEnv({ COMMUNITY_REPLY_DOMAIN: undefined });
  try {
    const { ada: ada2 } = await setup();
    await pg.query(`DELETE FROM notifications WHERE kind <> 'reply'`);
    await pg.query(`UPDATE notifications SET created_at = now() - interval '5 minutes' WHERE member_id = $1`, [ada2.id]);
    sent.length = 0;
    await runNotify({ apiKey: TEST_RESEND_KEY, send });
    const plain = sent.find((e) => e.subject.includes('Reply by email please'));
    assert.equal(plain?.replyTo, 'support@outbrick.site');
    assert.doesNotMatch(plain?.text ?? '', /reply to this email/);
  } finally {
    off();
  }
});

void test('the webhook posts a member’s emailed reply, in answer to the notified post, once', async () => {
  const { ada, thread, email, address } = await setup();
  const event = received({ to: address, from: email.toUpperCase() });
  const res = await webhook(event);
  assert.deepEqual(res.body, { ok: true, outcome: 'posted' });
  const posts = await postsOf(thread.id);
  assert.equal(posts.length, 3);
  assert.deepEqual(posts[2], { number: 3, author: ada.id, body_md: 'Thanks, that worked!', reply_to: 2 });
  // Resend retries a webhook it thinks failed: the same message is posted once.
  const again = await webhook(event);
  assert.equal(again.body.outcome, 'duplicate');
  assert.equal((await postsOf(thread.id)).length, 3);
});

void test('the webhook refuses bad signatures, strangers and forged tokens without answering them', async () => {
  const { thread, email, address } = await setup();
  const fetchStub = stubFetch();
  try {
    const body = JSON.stringify(received({ to: address, from: email }));
    assert.equal((await webhook(JSON.parse(body), signed(body, { secret: Buffer.from('wrong') }))).status, 401);
    assert.equal((await webhook(JSON.parse(body), signed(body, { timestamp: Math.floor(Date.now() / 1000) - 600 }))).status, 401);
    assert.equal((await webhook(received({ to: address, from: 'mallory@example.com' }))).body.outcome, 'wrong_sender');
    assert.equal((await webhook(received({ to: address.replace(/[0-9a-f]{4}@/, '0000@'), from: email }))).body.outcome, 'bad_token');
    assert.equal((await webhook(received({ to: 'support@outbrick.site', from: email }))).body.outcome, 'bad_token');
    assert.equal((await webhook({ type: 'email.delivered', data: { email_id: 'x' } })).body.outcome, 'ignored');
    assert.equal((await webhook(received({ to: address, from: email, headers: { 'auto-submitted': 'auto-replied' } }))).body.outcome, 'auto_reply');
    assert.equal((await postsOf(thread.id)).length, 2, 'nothing posted');
    assert.equal(fetchStub.emails().length, 0, 'and nobody was emailed');
  } finally {
    fetchStub.restore();
  }
  const off = withEnv({ RESEND_WEBHOOK_SECRET: undefined });
  try {
    assert.equal((await webhook(received({ to: address, from: email }))).status, 503);
  } finally {
    off();
  }
});

void test('a refused reply comes back to the member with the reason and their text', async () => {
  const { ada, thread, email, address } = await setup();
  const fetchStub = stubFetch();
  try {
    await pg.query(`UPDATE threads SET locked = true WHERE id = $1`, [thread.id]);
    const res = await webhook(received({ to: address, from: email, text: 'My reply about <b>gates</b>\n\nOn Mon, 6 Oct 2026, X wrote:\n> old' }));
    assert.equal(res.body.outcome, 'bounced:locked');
    const [bounce] = fetchStub.emails();
    assert.deepEqual(bounce.to, [email]);
    assert.match(bounce.subject, /wasn’t posted/);
    assert.match(bounce.text, /locked/);
    assert.match(bounce.text, /My reply about <b>gates<\/b>/);
    assert.ok(bounce.html.includes('My reply about &lt;b&gt;gates&lt;/b&gt;'));
    assert.equal(bounce.headers?.['Auto-Submitted'], 'auto-replied');
    await pg.query(`UPDATE threads SET locked = false WHERE id = $1`, [thread.id]);

    assert.equal((await webhook(received({ to: address, from: email, text: '> just the quote' }))).body.outcome, 'bounced:empty');

    await pg.query(`UPDATE members SET banned_until = now() + interval '1 day', ban_reason = 'spam' WHERE id = $1`, [ada.id]);
    assert.equal((await webhook(received({ to: address, from: email, text: 'Let me back in' }))).body.outcome, 'bounced:banned');
    await pg.query(`UPDATE members SET banned_until = NULL WHERE id = $1`, [ada.id]);

    for (let i = 0; i < 30; i++) await pg.query(`INSERT INTO rate_events (key) VALUES ($1)`, [`post:hour:${ada.id}`]);
    assert.equal((await webhook(received({ to: address, from: email, text: 'One more' }))).body.outcome, 'bounced:rate_limited');
    assert.equal((await postsOf(thread.id)).length, 2);
  } finally {
    fetchStub.restore();
  }
});

void test('a metadata-only event is completed from Resend’s API; a failed read is retried later', async () => {
  const { thread, email, address } = await setup();
  let fail = true;
  const asked: string[] = [];
  setInboundFetchForTests(async (url, init) => {
    asked.push(url);
    assert.equal(new Headers(init.headers).get('authorization'), `Bearer ${TEST_RESEND_KEY}`);
    if (fail) return new Response('{}', { status: 503 });
    return new Response(JSON.stringify({ id: 'em_meta', html: '<p>Fetched <b>reply</b></p><div class="gmail_quote">On … wrote: <blockquote>old</blockquote></div>', text: null, headers: [{ name: 'Auto-Submitted', value: 'no' }] }), { status: 200 });
  });
  try {
    const event = received({ to: address, from: email, text: null, messageId: '<meta@mail.example>' });
    const first = await webhook(event);
    assert.equal(first.status, 500);
    assert.match(asked[0], /^https:\/\/api\.resend\.com\/emails\/receiving\/em_\d+$/);
    fail = false;
    const second = await webhook(event);
    assert.equal(second.body.outcome, 'posted', 'the claim was released, so the retry is not a duplicate');
    assert.equal((await postsOf(thread.id))[2].body_md, 'Fetched reply');
  } finally {
    setInboundFetchForTests(null);
  }
});
