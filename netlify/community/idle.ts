// Keeping the database asleep when the community is quiet.
//
// Netlify Database (Neon) suspends its compute after five idle minutes and bills while it is
// awake. The scheduled jobs run more often than that (notifications every five minutes, release
// polling hourly), so if each one queried Postgres just to find nothing to do, the database would
// never sleep and a free plan's monthly allowance would be gone in days. Instead, each job first
// asks a small Netlify Blobs store (`community-signals`, strongly consistent) whether there is
// anything to do, and only then opens the database:
//
// - Notifications. Every successful write request (http.ts handle(), the cross-site POSTs in
//   auth/routes.ts) and every job or sign-in that inserts notifications calls
//   signalNotifyWork() AFTER its transaction commits, which stores a fresh random token. The
//   notifier runs when that token differs from the last one it fully processed, when work it
//   left for later falls due (a notification still settling, the hourly cap, a failed or
//   in-flight send, an unconfirmed member's welcome), or once a day as a safety sweep. It records
//   the token it read BEFORE querying, so a notification that arrives during a run changes the
//   token and is picked up next time; if a run crashes it records nothing and the next run
//   repeats it. The rows' own claims and Resend idempotency keys still prevent double sends.
//   A writer that dies between its commit and its signal is caught by the daily sweep.
// - Releases. The App Store lookup is free (it is Apple's API, not our database); only a change
//   in the versions seen, compared with the last fingerprint stored after a successful run,
//   opens Postgres.
// - The weekly digest. Once a week's run finishes with nothing left, later runs that week skip.
//
// If Blobs is unavailable, every gate fails open: the job runs against the database as before.
// Losing sleep is better than losing an email.

import { getStore } from '@netlify/blobs';
import { randomToken } from './db.ts';

export type SignalStore = {
  get: (key: string) => Promise<unknown>;
  set: (key: string, value: unknown) => Promise<void>;
};

let override: SignalStore | null = null;

/** Tests use an in-memory store (or a failing one). */
export function setSignalStoreForTests(store: SignalStore | null): void {
  override = store;
}

export function memorySignalStore(): SignalStore & { data: Map<string, unknown> } {
  const data = new Map<string, unknown>();
  return {
    data,
    get: async (key) => (data.has(key) ? structuredClone(data.get(key)) : null),
    set: async (key, value) => {
      data.set(key, structuredClone(value));
    },
  };
}

function store(): SignalStore | null {
  if (override) return override;
  try {
    const blobs = getStore({ name: 'community-signals', consistency: 'strong' });
    return {
      get: (key) => blobs.get(key, { type: 'json' }) as Promise<unknown>,
      set: async (key, value) => {
        await blobs.setJSON(key, value);
      },
    };
  } catch {
    return null; // not running on Netlify (or Blobs is not configured): fail open
  }
}

const withTimeout = <T>(work: Promise<T>, ms: number): Promise<T> =>
  Promise.race([work, new Promise<T>((_, reject) => setTimeout(() => reject(new Error(`timed out after ${ms} ms`)), ms))]);

const SIGNAL = 'notify-signal';
const STATE = 'notify-state';
/** The daily safety sweep runs in this UTC hour, the same window as the other daily jobs. */
export const SWEEP_HOUR_UTC = 8;

type Signal = { token: string; at: number };
type NotifyState = { processedToken: string | null; dueAt: number | null; lastRunAt: number };

const isObject = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null;

/** Tell the notifier there may be new work. Call it after the transaction that inserted it has committed. */
export async function signalNotifyWork(): Promise<void> {
  const s = store();
  if (!s) return;
  try {
    await withTimeout(s.set(SIGNAL, { token: randomToken(12), at: Date.now() } satisfies Signal), 2000);
  } catch (error) {
    // The daily sweep still finds the work; the request itself must not fail for this.
    console.error('[community-idle] could not record pending notification work:', error instanceof Error ? error.message : String(error));
  }
}

export type NotifyGate = { run: boolean; reason: string; token: string | null };

/** Should the notifier open the database now? */
export async function notifyGate(now = Date.now()): Promise<NotifyGate> {
  const s = store();
  if (!s) return { run: true, reason: 'no signal store', token: null };
  let signal: unknown;
  let state: unknown;
  try {
    [signal, state] = await withTimeout(Promise.all([s.get(SIGNAL), s.get(STATE)]), 3000);
  } catch (error) {
    return { run: true, reason: `signal store unreadable (${error instanceof Error ? error.message : String(error)})`, token: null };
  }
  const token = isObject(signal) && typeof signal.token === 'string' ? signal.token : null;
  if (!isObject(state)) return { run: true, reason: 'first run', token };
  const st = state as Partial<NotifyState>;
  if (token !== (st.processedToken ?? null)) return { run: true, reason: 'new work', token };
  if (typeof st.dueAt === 'number' && st.dueAt <= now) return { run: true, reason: 'work falls due', token };
  const lastRunAt = typeof st.lastRunAt === 'number' ? st.lastRunAt : 0;
  const hours = (now - lastRunAt) / 3600_000;
  if (hours >= 26 || (hours >= 20 && new Date(now).getUTCHours() === SWEEP_HOUR_UTC)) return { run: true, reason: 'daily sweep', token };
  return { run: false, reason: 'nothing to do', token };
}

/** After a run that completed: remember the token it started from and when it next has work. */
export async function notifyRan(token: string | null, dueAt: number | null, now = Date.now()): Promise<void> {
  const s = store();
  if (!s) return;
  try {
    await withTimeout(s.set(STATE, { processedToken: token, dueAt, lastRunAt: now } satisfies NotifyState), 3000);
  } catch (error) {
    console.error('[community-idle] could not record the notifier state:', error instanceof Error ? error.message : String(error));
  }
}

// Releases -------------------------------------------------------------------------------------

const RELEASES = 'release-fingerprint';

/** True when the versions seen differ from the last fingerprint stored after a successful run (or none is stored). */
export async function releasesChanged(fingerprint: string): Promise<boolean> {
  const s = store();
  if (!s) return true;
  try {
    const seen = await withTimeout(s.get(RELEASES), 3000);
    return !(isObject(seen) && seen.fingerprint === fingerprint);
  } catch {
    return true;
  }
}

export async function rememberReleases(fingerprint: string): Promise<void> {
  const s = store();
  if (!s) return;
  try {
    await withTimeout(s.set(RELEASES, { fingerprint, at: Date.now() }), 3000);
  } catch (error) {
    console.error('[community-idle] could not record the release fingerprint:', error instanceof Error ? error.message : String(error));
  }
}

// The weekly digest -------------------------------------------------------------------------------

const DIGEST = 'digest-week';

export async function digestWeekDone(week: string): Promise<boolean> {
  const s = store();
  if (!s) return false;
  try {
    const done = await withTimeout(s.get(DIGEST), 3000);
    return isObject(done) && done.week === week;
  } catch {
    return false;
  }
}

export async function markDigestWeekDone(week: string): Promise<void> {
  const s = store();
  if (!s) return;
  try {
    await withTimeout(s.set(DIGEST, { week, at: Date.now() }), 3000);
  } catch (error) {
    console.error('[community-idle] could not record the digest week:', error instanceof Error ? error.message : String(error));
  }
}
