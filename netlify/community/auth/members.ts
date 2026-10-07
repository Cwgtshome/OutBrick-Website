// Finding, linking and creating members at sign-in, and the display-name rules.
//
// Linking order: an identity already linked (provider + subject) signs that member in; else a
// *verified* email from the provider that matches a member with a verified address links to
// that member; else a new member is created. An unverified address (Facebook) never links to
// anybody: it would let whoever typed someone else's address into Facebook take their account.

import type { CommunityLocale, Provider, SelfMember } from '../../../lib/community/contract.ts';
import { sql, transaction, type Query } from '../db.ts';
import { isConfiguredAdmin, selfView, type Viewer } from '../session.ts';
import { isPlaceholderEmail } from './util.ts';

export type ProviderProfile = {
  provider: Provider;
  /** The provider's stable user id; the address itself for 'email'. */
  subject: string;
  email: string | null;
  emailVerified: boolean;
  /** A suggested display name (Apple's first sign-in, Google, Facebook). */
  name: string | null;
  locale: CommunityLocale;
};

export type SignInResult = {
  memberId: number;
  created: boolean;
  /** An address that still needs confirming (Facebook): send it a "Confirm your email". */
  confirmEmail: string | null;
};

// ---------------------------------------------------------------------------------------
// Display names

const RESERVED = /^(?:outbrick(?:\s*team)?|admin(?:istrator)?|mod(?:erator)?s?|team|support|system|staff|former member(?:\s.*)?|deleted|anonymous)$/i;
const LINKISH = /(?:https?:|www\.|:\/\/|\b[a-z0-9-]+\.(?:com|net|org|io|co|app|site|xyz|info|biz|me|dev|ly|gg|tv|ru|cn|uk|de|fr|es|jp|link|click|shop|online)\b)/i;

/** Tidy a name a person typed: no invisible characters, single spaces. Length is checked, not cut. */
export function tidyName(raw: unknown): string {
  return (typeof raw === 'string' ? raw : '')
    .normalize('NFKC')
    .replace(/[\p{Cc}\p{Cf}\p{Co}\p{Cn}]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** A provider's name, tidied and cut to 40. */
export function cleanName(raw: unknown): string {
  return tidyName(raw).slice(0, 40).trim();
}

/** Why a chosen display name can't be used, or null when it can. */
export function displayNameProblem(name: string): 'too_short' | 'too_long' | 'no_email' | 'no_links' | 'reserved' | null {
  if (name.length < 2) return 'too_short';
  if (name.length > 40) return 'too_long';
  if (name.includes('@')) return 'no_email';
  if (LINKISH.test(name)) return 'no_links';
  if (RESERVED.test(name)) return 'reserved';
  return null;
}

/** A first suggestion from what the provider knows: the name, else the part of the address before @. */
export function suggestedName(profile: Pick<ProviderProfile, 'name' | 'email'>): string {
  const fromName = cleanName(profile.name).replace(/@/g, ' ').replace(/\s+/g, ' ').trim();
  if (fromName && !displayNameProblem(fromName)) return fromName;
  const email = profile.email ?? '';
  if (email && !/@privaterelay\.appleid\.com$/i.test(email) && !isPlaceholderEmail(email)) {
    const local = cleanName(email.split('@')[0].replace(/[._+-]+/g, ' ').replace(/\d{3,}$/, ''));
    const cased = local ? local.charAt(0).toLocaleUpperCase() + local.slice(1) : '';
    if (cased && !displayNameProblem(cased)) return cased;
  }
  return 'Player';
}

/** `base`, else "base 2", "base 3" … — unique case-insensitively among live members. */
export async function uniqueName(q: Query, base: string, exceptId: number | null = null): Promise<string> {
  const stem = base.slice(0, 36).trim() || 'Player';
  const rows = await q(
    `SELECT lower(display_name) AS n FROM members WHERE deleted_at IS NULL AND ($2::bigint IS NULL OR id <> $2) AND (lower(display_name) = lower($1) OR lower(display_name) LIKE lower($1) || ' %')`,
    [stem, exceptId],
  );
  const taken = new Set(rows.map((r) => String(r.n)));
  if (!taken.has(stem.toLowerCase())) return stem;
  for (let i = 2; i < 10000; i++) {
    const candidate = `${stem} ${i}`;
    if (!taken.has(candidate.toLowerCase())) return candidate;
  }
  return `${stem.slice(0, 30)} ${Math.floor(Math.random() * 1e6)}`;
}

// ---------------------------------------------------------------------------------------
// Sign-in

const placeholderFor = (provider: string, key: string | number) => `${provider}-${key}@unverified.invalid`;

async function promoteIfAdmin(q: Query, memberId: number): Promise<void> {
  const [m] = await q(`SELECT email, email_verified, role FROM members WHERE id = $1`, [memberId]);
  if (m && m.email_verified && m.role !== 'admin' && isConfiguredAdmin(String(m.email))) {
    await q(`UPDATE members SET role = 'admin' WHERE id = $1`, [memberId]);
  }
}

async function linkIdentity(q: Query, memberId: number, profile: ProviderProfile): Promise<void> {
  await q(
    `INSERT INTO identities (member_id, provider, subject, email) VALUES ($1, $2, $3, $4)
     ON CONFLICT (provider, subject) DO UPDATE SET last_used_at = now(), email = EXCLUDED.email`,
    [memberId, profile.provider, profile.subject, profile.email],
  );
}

/** Find, link or create the member for a provider's profile. Runs in one transaction. */
export async function signInWithProfile(profile: ProviderProfile): Promise<SignInResult> {
  const email = profile.email?.trim().toLowerCase() || null;
  const verifiedEmail = profile.emailVerified && email ? email : null;
  return transaction(async (q) => {
    // 1. Already linked.
    const [linked] = await q(
      `SELECT m.id::int AS id, m.email, m.email_verified FROM identities i JOIN members m ON m.id = i.member_id
        WHERE i.provider = $1 AND i.subject = $2 AND m.deleted_at IS NULL`,
      [profile.provider, profile.subject],
    );
    if (linked) {
      const id = Number(linked.id);
      await q(`UPDATE identities SET last_used_at = now(), email = COALESCE($3, email) WHERE provider = $1 AND subject = $2`, [profile.provider, profile.subject, email]);
      // A provider now vouching for the address the member already has confirms it.
      if (verifiedEmail && !linked.email_verified && String(linked.email).toLowerCase() === verifiedEmail) {
        await q(`UPDATE members SET email_verified = true WHERE id = $1`, [id]);
      }
      await promoteIfAdmin(q, id);
      return { memberId: id, created: false, confirmEmail: null };
    }

    // 2. A verified address matching a member who has verified it too.
    if (verifiedEmail) {
      const [owner] = await q(`SELECT id::int AS id, email_verified FROM members WHERE lower(email) = $1 AND deleted_at IS NULL`, [verifiedEmail]);
      if (owner?.email_verified) {
        const id = Number(owner.id);
        await linkIdentity(q, id, profile);
        await promoteIfAdmin(q, id);
        return { memberId: id, created: false, confirmEmail: null };
      }
      // The address belongs to a member who never confirmed it. Whoever proves it now gets it;
      // the unconfirmed member keeps their account under a placeholder until they confirm another.
      if (owner) await q(`UPDATE members SET email = $2 WHERE id = $1`, [owner.id, placeholderFor('released', Number(owner.id))]);
    }

    // 3. A new member.
    let address = verifiedEmail;
    let confirmEmail: string | null = null;
    if (!address) {
      const free = email ? !(await q(`SELECT 1 FROM members WHERE lower(email) = $1 AND deleted_at IS NULL`, [email])).length : false;
      address = email && free ? email : placeholderFor(profile.provider, profile.subject.replace(/[^A-Za-z0-9_-]/g, '').slice(0, 60) || 'x');
      confirmEmail = email;
    }
    const name = await uniqueName(q, suggestedName({ name: profile.name, email }));
    const [row] = await q(
      `INSERT INTO members (display_name, name_chosen, email, email_verified, locale) VALUES ($1, false, $2, $3, $4) RETURNING id::int AS id`,
      [name, address, Boolean(verifiedEmail), profile.locale],
    );
    const id = Number(row.id);
    await linkIdentity(q, id, profile);
    // The welcome email goes out from the notifier, exactly once: one row per member.
    await q(`INSERT INTO notifications (member_id, kind) VALUES ($1, 'welcome')`, [id]);
    await promoteIfAdmin(q, id);
    return { memberId: id, created: true, confirmEmail };
  });
}

// ---------------------------------------------------------------------------------------
// What a member sees of themselves

export async function selfMember(viewer: Viewer): Promise<SelfMember> {
  const [extra] = await sql`SELECT name_chosen FROM members WHERE id = ${viewer.id}`;
  const providers = (await sql`SELECT DISTINCT provider FROM identities WHERE member_id = ${viewer.id} ORDER BY provider`).map((r) => String(r.provider)) as Provider[];
  const base = selfView(viewer);
  return {
    ...base,
    // A placeholder is not an address; the settings page asks for a real one instead.
    email: isPlaceholderEmail(viewer.email) ? '' : viewer.email,
    joinedAt: base.joinedAt ? new Date(base.joinedAt).toISOString() : base.joinedAt,
    needsName: !extra?.name_chosen,
    providers,
  };
}
