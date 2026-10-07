// The idle gates (idle.ts): scheduled jobs open the database only when there is work, so a quiet
// community lets Netlify Database sleep. Each test asserts both what happens to the rows and how
// often the database is touched.

import { after, before, beforeEach, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { countQueries, freshDatabase, request, signedInCookie } from './test/harness.ts';
import { memorySignalStore, notifyGate, notifyRan, setSignalStoreForTests, signalNotifyWork, SWEEP_HOUR_UTC, type SignalStore } from './idle.ts';
import { HOURLY_CAP, MAX_SEND_ATTEMPTS, runNotify, type Sender } from './notify.ts';
import { notifyTick } from '../functions/community-notify.mts';
import { releaseTick } from '../functions/community-releases.mts';
import { digestTick } from '../functions/community-digest.mts';
import communityAuth from '../functions/community-auth.mts';

const KEY = 're_test_key_for_tests_only';
const H = 3600_000;
let pg: PGlite;
let mem: ReturnType<typeof memorySignalStore>;
let queries: ReturnType<typeof countQueries>;
let n = 0;

before(async () => {
  pg = await freshDatabase();
  queries = countQueries();
});
after(async () => {
  setSignalStoreForTests(null);
  await pg.close();
});
beforeEach(async () => {
  mem = memorySignalStore();
  setSignalStoreForTests(mem);
  await pg.exec(`DELETE FROM notifications; DELETE FROM rate_events;`);
  queries.reset();
});

function recorder(fail = false) {
  const sent: { to: string; subject: string }[] = [];
  const send: Sender = async (_k, email) => {
    sent.push({ to: email.to, subject: email.subject });
    return fail ? { ok: false, status: 500, data: null, error: 'stubbed outage' } : { ok: true, status: 200, data: { id: 'x' } };
  };
  return { sent, send };
}

async function member(verified = true) {
  n++;
  const { rows } = await pg.query<{ id: number }>(
    `INSERT INTO members (display_name, name_chosen, email, email_verified) VALUES ($1, true, $2, $3) RETURNING id::int`,
    [`Idle ${n}`, `idle${n}@example.com`, verified],
  );
  return rows[0].id;
}

async function welcome(memberId: number, ageMs = 10 * 60_000) {
  const { rows } = await pg.query<{ id: number }>(`INSERT INTO notifications (member_id, kind, created_at) VALUES ($1, 'welcome', $2) RETURNING id::int`, [
    memberId,
    new Date(Date.now() - ageMs),
  ]);
  return rows[0].id;
}

const row = async (id: number) =>
  (
    await pg.query<{ emailed_at: string | null; email_skipped: string | null; email_attempts: number; email_retry_at: string | null }>(
      `SELECT emailed_at, email_skipped, email_attempts, email_retry_at FROM notifications WHERE id = $1`,
      [id],
    )
  ).rows[0];

/** A UTC time today at a given hour, so sweep-window tests don't depend on when they run. */
const atHour = (base: number, hour: number) => {
  const d = new Date(base);
  d.setUTCHours(hour, 0, 0, 0);
  return d.getTime();
};

void test('a quiet notifier skips the database until a signal, then runs once', async () => {
  const now = Date.now();
  const ok = recorder();
  assert.equal((await notifyTick(now, { apiKey: KEY, send: ok.send })).ran, true); // first run ever
  queries.reset();
  for (let i = 1; i <= 11; i++) assert.equal((await notifyTick(now + i * 5 * 60_000, { apiKey: KEY, send: ok.send })).ran, false);
  assert.equal(queries.count(), 0, 'no query while nothing changed');
  await signalNotifyWork();
  assert.equal((await notifyTick(now + 60 * 60_000, { apiKey: KEY, send: ok.send })).reason, 'new work');
  assert.equal((await notifyTick(now + 65 * 60_000, { apiKey: KEY, send: ok.send })).ran, false);
});

void test('a successful write request signals the notifier; a failed one does not', async () => {
  const before = await mem.get('notify-signal');
  const { cookie } = await signedInCookie(pg, { displayName: 'Signal Writer', email: 'signal-writer@example.com' });
  const res = await communityAuth(request('POST', '/api/community/auth/signout', { cookie, body: {} }));
  assert.equal(res.status, 200);
  const after1 = await mem.get('notify-signal');
  assert.notDeepEqual(after1, before);
  const refused = await communityAuth(request('POST', '/api/community/auth/signout', { origin: 'https://evil.example', body: {} }));
  assert.equal(refused.status, 403);
  assert.deepEqual(await mem.get('notify-signal'), after1);
});

void test("an unconfirmed member's welcome waits for confirmation or its 7-day expiry, without polling", async () => {
  const id = await member(false);
  const note = await welcome(id);
  const now = Date.now();
  const ok = recorder();
  await signalNotifyWork();
  assert.equal((await notifyTick(now, { apiKey: KEY, send: ok.send })).ran, true);
  const state = (await mem.get('notify-state')) as { dueAt: number };
  assert.ok(state.dueAt > now + 6.9 * 24 * H, 'due at the welcome expiry, not in five minutes');
  queries.reset();
  // Hours of ticks (outside the sweep hour) cost nothing.
  for (let t = now + 5 * 60_000; t < now + 6 * H; t += 5 * 60_000) {
    if (new Date(t).getUTCHours() === SWEEP_HOUR_UTC) continue;
    assert.equal((await notifyTick(t, { apiKey: KEY, send: ok.send })).ran, false);
  }
  assert.equal(queries.count(), 0);
  // Confirming the address is a write request: it signals, and the welcome goes at once.
  await pg.query(`UPDATE members SET email_verified = true WHERE id = $1`, [id]);
  await signalNotifyWork();
  assert.equal((await notifyTick(now + 6 * H, { apiKey: KEY, send: ok.send })).ran, true);
  assert.equal(ok.sent.length, 1);
  assert.ok((await row(note)).emailed_at);
});

void test('an interrupted send keeps its lease; the notifier wakes when the lease expires and sends it', async () => {
  const id = await member();
  const note = await welcome(id);
  // Another run claimed it a minute ago and died before sending.
  await pg.query(`UPDATE notifications SET email_claimed_at = now() - interval '1 minute' WHERE id = $1`, [note]);
  const now = Date.now();
  const ok = recorder();
  await signalNotifyWork();
  await notifyTick(now, { apiKey: KEY, send: ok.send });
  assert.equal(ok.sent.length, 0, 'a live lease is respected');
  const { dueAt } = (await mem.get('notify-state')) as { dueAt: number };
  assert.ok(dueAt > now + 13 * 60_000 && dueAt < now + 15 * 60_000, 'due when the lease expires');
  assert.equal((await notifyTick(now + 5 * 60_000, { apiKey: KEY, send: ok.send })).ran, false);
  await pg.query(`UPDATE notifications SET email_claimed_at = now() - interval '16 minutes' WHERE id = $1`, [note]);
  assert.equal((await notifyTick(dueAt + 1000, { apiKey: KEY, send: ok.send })).reason, 'work falls due');
  assert.equal(ok.sent.length, 1);
  assert.ok((await row(note)).emailed_at);
});

void test('a notification that arrives while a run records its processed token is picked up next tick', async () => {
  const a = await member();
  const b = await member();
  await welcome(a);
  const now = Date.now();
  const ok = recorder();
  await signalNotifyWork();
  let late = 0;
  await notifyTick(now, {
    apiKey: KEY,
    send: ok.send,
    // After the run's queries, before it records its token: a new row commits and signals.
    afterRun: async () => {
      late = await welcome(b);
      await signalNotifyWork();
    },
  });
  assert.equal(ok.sent.length, 1);
  assert.equal((await notifyTick(now + 5 * 60_000, { apiKey: KEY, send: ok.send })).reason, 'new work');
  assert.equal(ok.sent.length, 2);
  assert.ok((await row(late)).emailed_at);
});

void test('stale blob writes landing late cost at most one extra run and never lose a row', async () => {
  const id = await member();
  const base = atHour(Date.now(), SWEEP_HOUR_UTC + 1); // just after a sweep window
  const ok = recorder();
  await signalNotifyWork();
  const stale = structuredClone(await mem.get('notify-signal'));
  await notifyTick(base, { apiKey: KEY, send: ok.send }); // processes that token; nothing pending
  // A row commits and signals …
  const note = await welcome(id);
  await signalNotifyWork();
  // … then an older, slow signal write lands on top of the newer one.
  await mem.set('notify-signal', stale);
  // The gate may now skip until the next safety sweep — but the row is still sent by it.
  for (let t = base + 5 * 60_000; t < base + 23 * H; t += 30 * 60_000) await notifyTick(t, { apiKey: KEY, send: ok.send });
  assert.equal((await notifyTick(base + 23 * H, { apiKey: KEY, send: ok.send })).reason, 'daily sweep');
  assert.ok((await row(note)).emailed_at, 'the sweep delivered it');
  // A late state write with an old token only causes one more run.
  await notifyRan('an-old-token', null, base + 23 * H);
  assert.equal((await notifyTick(base + 23 * H + 5 * 60_000, { apiKey: KEY, send: ok.send })).reason, 'new work');
  assert.equal((await notifyTick(base + 23 * H + 10 * 60_000, { apiKey: KEY, send: ok.send })).ran, false);
});

void test('the daily sweep runs once a day in its window, and after 26 hours regardless', async () => {
  const base = atHour(Date.now(), SWEEP_HOUR_UTC - 3);
  const ok = recorder();
  await notifyTick(base, { apiKey: KEY, send: ok.send });
  assert.equal((await notifyTick(base + 3 * H, { apiKey: KEY, send: ok.send })).ran, false, 'too soon for the sweep');
  assert.equal((await notifyTick(base + 23 * H, { apiKey: KEY, send: ok.send })).ran, false, 'outside the window');
  assert.equal((await notifyTick(base + 27 * H, { apiKey: KEY, send: ok.send })).reason, 'daily sweep');
});

void test('if Blobs is unavailable every gate fails open', async () => {
  const broken: SignalStore = {
    get: () => Promise.reject(new Error('blobs down')),
    set: () => Promise.reject(new Error('blobs down')),
  };
  setSignalStoreForTests(broken);
  await signalNotifyWork(); // never throws
  assert.equal((await notifyGate()).run, true);
});

void test('a member at the hourly cap falls due when the cap frees, not every five minutes', async () => {
  const id = await member();
  for (let i = 0; i < HOURLY_CAP; i++) {
    await pg.query(`INSERT INTO rate_events (key, at) VALUES ($1, now() - make_interval(mins => $2))`, [`notify:member:${id}`, 50 - i]);
  }
  await welcome(id);
  const ok = recorder();
  const summary = await runNotify({ apiKey: KEY, send: ok.send });
  assert.equal(ok.sent.length, 0);
  assert.ok(summary.dueAt !== null);
  const minutes = (summary.dueAt - Date.now()) / 60_000;
  assert.ok(minutes > 8 && minutes < 11, `due when the oldest of the hour's sends expires (${minutes.toFixed(1)} min)`);
});

void test('repeated send failures back off exponentially and give up after a bounded number of tries', async () => {
  const id = await member();
  const note = await welcome(id);
  const bad = recorder(true);
  const gaps: number[] = [];
  for (let attempt = 1; attempt <= MAX_SEND_ATTEMPTS; attempt++) {
    const summary = await runNotify({ apiKey: KEY, send: bad.send });
    const r = await row(note);
    assert.equal(r.email_attempts, attempt);
    if (attempt < MAX_SEND_ATTEMPTS) {
      assert.equal(r.email_skipped, null);
      gaps.push(Math.round((new Date(r.email_retry_at!).getTime() - Date.now()) / 60_000));
      assert.ok(summary.dueAt! > Date.now() + 4 * 60_000, 'the notifier does not wake before the retry');
      await pg.query(`UPDATE notifications SET email_retry_at = now() - interval '1 second' WHERE id = $1`, [note]);
    } else {
      assert.equal(r.email_skipped, 'send_failed');
      assert.equal(summary.dueAt, null, 'nothing left to wake for');
    }
  }
  assert.deepEqual(gaps, [5, 10, 20, 40, 80, 160, 320]);
  assert.equal(bad.sent.length, MAX_SEND_ATTEMPTS);
});

function lookupFetch(versions: Record<string, string>) {
  return async (url: string) => {
    const country = new URL(url).searchParams.get('country') ?? 'us';
    const version = versions[country];
    if (!version) return new Response('{}', { status: 500 });
    return new Response(JSON.stringify({ resultCount: 1, results: [{ trackId: 6807997465, version, releaseNotes: `Notes ${version}`, currentVersionReleaseDate: '2026-10-07T00:00:00Z', trackViewUrl: 'https://apps.apple.com/app/id6807997465' }] }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  };
}

void test('the release check opens the database only when the App Store versions change', async () => {
  const v = (x: string) => ({ us: x, fr: x, de: x, es: x, jp: x });
  assert.equal((await releaseTick(lookupFetch(v('5.0.1')))).action, 'record');
  queries.reset();
  for (let i = 0; i < 24; i++) assert.equal((await releaseTick(lookupFetch(v('5.0.1')))).action, 'unchanged');
  assert.equal(queries.count(), 0, 'a day of hourly checks without a query');
  const posted = await releaseTick(lookupFetch(v('5.1')));
  assert.equal(posted.action, 'post');
  assert.ok(await mem.get('notify-signal'), 'the announcement signals the notifier');
  queries.reset();
  assert.equal((await releaseTick(lookupFetch(v('5.1')))).action, 'unchanged');
  assert.equal(queries.count(), 0);
});

void test('the digest skips the database for the rest of a week once that week is done', async () => {
  const monday = new Date('2026-10-12T08:00:00Z');
  const ok = recorder();
  assert.equal((await digestTick(monday, { apiKey: KEY, send: ok.send })).ran, true);
  queries.reset();
  for (let i = 1; i < 18; i++) assert.equal((await digestTick(new Date(monday.getTime() + i * 10 * 60_000), { apiKey: KEY, send: ok.send })).ran, false);
  assert.equal(queries.count(), 0);
  assert.equal((await digestTick(new Date('2026-10-19T08:00:00Z'), { apiKey: KEY, send: ok.send })).ran, true, 'a new week runs again');
});

void test('idle month budget: a quiet community wakes the database about once a day', async () => {
  const start = atHour(Date.now(), 0);
  const ok = recorder();
  let notifyRuns = 0;
  for (let t = start; t < start + 30 * 24 * H; t += 5 * 60_000) if ((await notifyTick(t, { apiKey: KEY, send: ok.send })).ran) notifyRuns++;
  // The first run, then one sweep a day.
  assert.ok(notifyRuns <= 31, `${notifyRuns} notifier runs in 30 quiet days`);
  assert.ok(notifyRuns >= 29, `${notifyRuns} notifier runs: the sweep must still happen daily`);
});
