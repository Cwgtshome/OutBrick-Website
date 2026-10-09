// "Was this guide helpful?" on every Help Centre guide, the troubleshooter and the known-issues
// page (app/components/support/guide-feedback.tsx), and the team's view of the answers on the
// admin dashboard.
//
// Anonymous and small: no account, no email, no IP stored (the IP hash is only a rate-limit key
// that rate_events prunes after two days). Answers are tallied per month in one strongly
// consistent object in the community-signals store (R2 on Cloudflare), so the feature needs no
// database migration. Two answers landing in the same instant can overwrite one another's
// increment; at a help page's volume that is an accepted loss, not a correctness problem.
//
//   POST /api/community/help/feedback          { slug, locale, helpful, reason?, comment? }
//   GET  /api/community/admin/help-feedback    ?month=YYYY-MM   (team and admin)

import { platformStore } from '../platform.ts';
import { helpOrder } from '../../lib/help/model.ts';
import { locales } from '../../lib/i18n/locales.ts';
import { ipHash, rateAllow } from './db.ts';
import { badRequest, json, readJson, tooMany, type Route } from './http.ts';
import { requireRole } from './session.ts';

/** Pages that ask, besides the guides themselves. */
export const feedbackPages = ['troubleshooter', 'known-issues', 'support', 'levels'] as const;
export const feedbackReasons = ['unclear', 'missing', 'outdated', 'didnt-work', 'accessibility', 'other'] as const;
type Reason = (typeof feedbackReasons)[number];

const COMMENTS_PER_PAGE = 40;
const STORE = 'community-signals';

export type PageTally = {
  yes: number;
  no: number;
  byLocale: Record<string, { yes: number; no: number }>;
  reasons: Partial<Record<Reason, number>>;
  comments: { at: string; locale: string; helpful: boolean; reason: Reason | null; text: string }[];
};
export type MonthTally = { month: string; updatedAt: string; pages: Record<string, PageTally> };

const monthOf = (d: Date) => d.toISOString().slice(0, 7);
const keyOf = (month: string) => `help-feedback/${month}.json`;

function validPage(slug: string): boolean {
  return (helpOrder as readonly string[]).includes(slug) || (feedbackPages as readonly string[]).includes(slug);
}

/** Printable text only, single-spaced lines, at most `max` characters. */
function cleanText(value: unknown, max: number): string {
  const text = typeof value === 'string' ? value : '';
  return Array.from(text, (ch) => (ch === '\n' || ch.charCodeAt(0) >= 32 ? ch : ' '))
    .join('')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, max);
}

async function readMonth(month: string): Promise<MonthTally> {
  const stored = (await platformStore(STORE).get(keyOf(month), { type: 'json' })) as MonthTally | null;
  return stored && typeof stored === 'object' && stored.pages ? stored : { month, updatedAt: new Date(0).toISOString(), pages: {} };
}

export const postHelpFeedback: Route['run'] = async (req) => {
  const body = await readJson(req, 8 * 1024);
  const slug = typeof body.slug === 'string' ? body.slug : '';
  if (!validPage(slug)) throw badRequest('invalid', 'Unknown page.', { slug: 'unknown' });
  if (typeof body.helpful !== 'boolean') throw badRequest('invalid', 'Say whether it helped.', { helpful: 'required' });
  const locale = (locales as readonly string[]).includes(String(body.locale)) ? String(body.locale) : 'en';
  const reason = (feedbackReasons as readonly string[]).includes(String(body.reason)) ? (String(body.reason) as Reason) : null;
  const text = cleanText(body.comment, 1000);
  const ip = ipHash(req);
  if (!(await rateAllow(`help-feedback:${ip}`, 30, 3600)) || !(await rateAllow(`help-feedback:${ip}:${slug}`, 3, 86400))) throw tooMany('Thank you, we already have your answer for this page.');

  const now = new Date();
  const month = monthOf(now);
  const tally = await readMonth(month);
  const page: PageTally = tally.pages[slug] ?? { yes: 0, no: 0, byLocale: {}, reasons: {}, comments: [] };
  const lang = page.byLocale[locale] ?? { yes: 0, no: 0 };
  if (body.helpful) {
    page.yes += 1;
    lang.yes += 1;
  } else {
    page.no += 1;
    lang.no += 1;
  }
  page.byLocale[locale] = lang;
  if (reason) page.reasons[reason] = (page.reasons[reason] ?? 0) + 1;
  if (text) page.comments = [{ at: now.toISOString(), locale, helpful: body.helpful, reason, text }, ...page.comments].slice(0, COMMENTS_PER_PAGE);
  tally.pages[slug] = page;
  tally.updatedAt = now.toISOString();
  await platformStore(STORE).setJSON(keyOf(month), tally);
  return json({ ok: true });
};

export const getHelpFeedback: Route['run'] = async (req, _params, url) => {
  await requireRole(req, 'team');
  const asked = url.searchParams.get('month') ?? '';
  const month = /^\d{4}-(0[1-9]|1[0-2])$/.test(asked) ? asked : monthOf(new Date());
  const [y, m] = month.split('-').map(Number);
  const previous = monthOf(new Date(Date.UTC(y, m - 2, 15)));
  return json({ month: await readMonth(month), previous: await readMonth(previous) });
};

export const helpFeedbackRoutes = (base: string): Route[] => [
  { method: 'POST', pattern: `${base}/help/feedback`, run: postHelpFeedback },
  { method: 'GET', pattern: `${base}/admin/help-feedback`, run: getHelpFeedback },
];
