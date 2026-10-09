/**
 * Which /community/... addresses exist, without asking the database. Shared by the edge function
 * that answers unknown addresses with the localized 404 page (netlify/edge-functions/community-route.ts)
 * and by the dev mock. The client app's own router (app/components/community/core.tsx, parseRoute)
 * accepts exactly these shapes; keep the two in step.
 *
 * Addresses whose existence needs the database (a thread id, a member id, an editorial slug) count
 * as known here: the thread edge function answers a missing thread with 404 itself, and the client
 * marks a missing member noindex. `/community/help/...` is the prerendered Help Centre, always passed
 * through. No imports beyond dependency-free .ts files: the Deno edge runtime loads this as it is.
 */

import type { CommunityLocale } from './contract.ts';
import { categorySlugs } from '../i18n/community.ts';

/** Single-segment pages of the client app. */
const singlePages = new Set([
  'new',
  'search',
  'faq',
  'guidelines',
  'signin',
  'welcome',
  'settings',
  'notifications',
  'mod',
  'admin',
  'library',
  'roadmap',
  'ideas',
  'leaderboard',
  'bookmarks',
  'latest',
]);

/** The prerendered files and their RSC payloads, which a browser may ask for directly. */
const staticFiles = /^(?:faq|guidelines)\.(?:html|rsc)$/;

export type CommunityAddress = { locale: CommunityLocale; known: boolean };

/** `null` when the path is not inside a community at all. */
export function communityAddress(pathname: string): CommunityAddress | null {
  const match = pathname.match(/^(?:\/(fr|de|es|ja|pt-BR))?\/community(\/.*)?$/);
  if (!match) return null;
  const locale = (match[1] as CommunityLocale | undefined) ?? 'en';
  let parts: string[];
  try {
    parts = (match[2] ?? '')
      .split('/')
      .filter(Boolean)
      .map((p) => decodeURIComponent(p));
  } catch {
    return { locale, known: false };
  }
  return { locale, known: knownParts(parts) };
}

function knownParts(parts: string[]): boolean {
  const [first, second, third] = parts;
  if (!first) return true;
  if (first === 'help') return true;
  if (parts.length === 1) return singlePages.has(first) || staticFiles.test(first);
  if (first === 'c') return parts.length === 2 && (categorySlugs as readonly string[]).includes(second);
  if (first === 't') return parts.length <= 3 && /^\d{1,12}$/.test(second);
  if (first === 'u') return parts.length === 2 && /^\d{1,12}$/.test(second);
  if (first === 'content') return parts.length === 3 && (second === 'page' || second === 'blog') && !!third;
  return false;
}
