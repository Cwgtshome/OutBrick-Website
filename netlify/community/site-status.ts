// The site-wide status banner (app/components/support/status-banner.tsx): one short notice the
// team can switch on from the admin dashboard when something big is broken or about to change —
// sign-in, iCloud sync, purchases, a release with a known problem — without a deploy.
//
//   GET    /api/community/site-status         public: { status: SiteStatus | null }, cached a minute
//   POST   /api/community/admin/site-status   team/admin: set it
//   DELETE /api/community/admin/site-status   team/admin: clear it
//
// Stored as one object in the strongly consistent community-signals store (R2), so the public
// read costs no database query. Every message is plain text; a link must be a path on this site
// or an https address. A notice ends by itself at `expiresAt` (at most 14 days ahead).

import { platformStore } from '../platform.ts';
import { locales } from '../../lib/i18n/locales.ts';
import { badRequest, json, readJson, type Route } from './http.ts';
import { requireRole } from './session.ts';
import { randomToken } from './db.ts';

const STORE = 'community-signals';
const KEY = 'site-status.json';
const MAX_DAYS = 14;
export const statusLevels = ['info', 'warning', 'outage'] as const;
export type StatusLevel = (typeof statusLevels)[number];

export type SiteStatus = {
  id: string;
  level: StatusLevel;
  /** The notice in each language; English is required and stands in for a missing one. */
  messages: Record<string, string>;
  /** Optional: a site path ("/support/known-issues") or an https URL. */
  link: string | null;
  updatedAt: string;
  expiresAt: string;
};

type StatusStore = { get: (key: string, opts: { type: 'json' }) => Promise<unknown>; setJSON: (key: string, value: unknown) => Promise<unknown>; delete?: (key: string) => Promise<unknown> };
let override: StatusStore | null = null;
export function setStatusStoreForTests(store: StatusStore | null): void {
  override = store;
}
const store = (): StatusStore => override ?? (platformStore(STORE) as unknown as StatusStore);

function plain(value: unknown, max: number): string {
  const text = typeof value === 'string' ? value : '';
  return Array.from(text, (ch) => (ch.charCodeAt(0) < 32 ? ' ' : ch)).join('').replace(/\s+/g, ' ').trim().slice(0, max);
}

export async function readStatus(now = new Date()): Promise<SiteStatus | null> {
  const stored = (await store().get(KEY, { type: 'json' })) as SiteStatus | null;
  if (!stored || typeof stored !== 'object' || !stored.messages?.en) return null;
  if (new Date(stored.expiresAt).getTime() <= now.getTime()) return null;
  return stored;
}

export const getSiteStatus: Route['run'] = async () => {
  const status = await readStatus();
  return json({ status }, { headers: { 'Cache-Control': 'public, max-age=60' } });
};

export const setSiteStatus: Route['run'] = async (req) => {
  await requireRole(req, 'team');
  const body = await readJson(req, 16 * 1024);
  const level = (statusLevels as readonly string[]).includes(String(body.level)) ? (body.level as StatusLevel) : 'info';
  const raw = (body.messages && typeof body.messages === 'object' ? body.messages : {}) as Record<string, unknown>;
  const messages: Record<string, string> = {};
  for (const l of locales) {
    const m = plain(raw[l], 240);
    if (m) messages[l] = m;
  }
  if (!messages.en) throw badRequest('invalid', 'Write the notice in English at least.', { en: 'required' });
  const linkRaw = plain(body.link, 300);
  let link: string | null = null;
  if (linkRaw) {
    if (/^\/(?!\/)[^\s]*$/.test(linkRaw) || /^https:\/\/[^\s]+$/.test(linkRaw)) link = linkRaw;
    else throw badRequest('invalid', 'A link is a path on this site, like /support/known-issues, or an https address.', { link: 'format' });
  }
  const days = Math.min(MAX_DAYS, Math.max(1, Number(body.days) || 3));
  const now = new Date();
  const status: SiteStatus = { id: randomToken(6), level, messages, link, updatedAt: now.toISOString(), expiresAt: new Date(now.getTime() + days * 86400_000).toISOString() };
  await store().setJSON(KEY, status);
  return json({ status });
};

export const clearSiteStatus: Route['run'] = async (req) => {
  await requireRole(req, 'team');
  // Overwrite with an expired notice: works on every store, even one without delete.
  await store().setJSON(KEY, { id: 'cleared', level: 'info', messages: { en: '' }, link: null, updatedAt: new Date().toISOString(), expiresAt: new Date(0).toISOString() });
  return json({ status: null });
};

export const siteStatusRoutes = (base: string): Route[] => [
  { method: 'GET', pattern: `${base}/site-status`, run: getSiteStatus },
  { method: 'POST', pattern: `${base}/admin/site-status`, run: setSiteStatus },
  { method: 'DELETE', pattern: `${base}/admin/site-status`, run: clearSiteStatus },
];
