// The OutBrick Community emails, in the same shell and components as every other OutBrick
// email (emails/core.ts), and the small web pages their links open (drawn with the same shell,
// as the newsletter's confirm and unsubscribe pages are).
//
// Each template returns { subject, html, text }. Every value that came from a member (a display
// name, a thread title, a post, a moderator's reason) is escaped here with esc()/escLines(); the
// text/plain part gets the raw value. Links are absolute and built by the caller.

import { SITE, bricks, button, color, esc, escLines, eyebrow, field, fonts, footerBlock, heading, link, panel, para, rule, shell, textBlock, type Ctx } from './core.ts';
import { emailCopy, type EmailLocale } from './i18n.ts';
import { communityCopy, type CommunityKind, type UnsubscribeKind } from './community-i18n.ts';
import type { Rendered } from './templates.ts';
import { replyHints } from './community-p2-i18n.ts';
import { badgeEmailCopy } from './community-fx-i18n.ts';

export { communityCopy, communityKinds, type CommunityKind, type UnsubscribeKind } from './community-i18n.ts';

/** /community, /fr/community … on `origin`. */
export function communityUrl(locale: EmailLocale, path = '', origin = SITE): string {
  const base = locale === 'en' ? '/community' : `/${locale}/community`;
  return `${origin}${base}${path ? (path.startsWith('/') ? path : `/${path}`) : ''}`;
}

function sitePath(locale: EmailLocale, path: string, origin = SITE): string {
  return `${origin}${locale === 'en' ? path : path === '/' ? `/${locale}` : `/${locale}${path}`}`;
}

export const ctxOf = (locale: EmailLocale, assetBase = SITE): Ctx => ({ locale, assetBase });

export function signoff(ctx: Ctx): string {
  return para(ctx, `— ${esc(emailCopy[ctx.locale].signoff)}`, { margin: '4px 0 20px' });
}

/** A post's Markdown reduced to a short plain-text excerpt (≤ max characters, cut at a word). */
export function plainExcerpt(markdown: string, max = 400): string {
  const text = String(markdown ?? '')
    .replace(/\r\n?/g, '\n')
    .replace(/```[^\n]*\n?/g, '')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1')
    .replace(/^\s{0,3}(?:#{1,6}\s+|>\s?|[-*+]\s+|\d+[.)]\s+)/gm, '')
    .replace(/(\*\*|__)(.+?)\1/g, '$2')
    .replace(/(^|[^*\w])[*_]([^*_\n]+)[*_]/g, '$1$2')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/(?![\t\n])\p{Cc}/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const space = cut.lastIndexOf(' ');
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s.,;:!?、。]+$/, '')}…`;
}

// ---------------------------------------------------------------------------------------
// Footers

export type FooterLinks = {
  /** /community/settings on the site. */
  manageUrl: string;
  /** The signed one-click link for this email's kind (or 'all'). */
  unsubscribeUrl?: string;
  unsubscribeKind?: UnsubscribeKind;
};

export function footer(ctx: Ctx, why: string, links: FooterLinks): string {
  const c = communityCopy[ctx.locale];
  const t = emailCopy[ctx.locale];
  const items: [string, string][] = [[esc(c.footer.manage), links.manageUrl]];
  if (links.unsubscribeUrl && links.unsubscribeKind) items.push([esc(c.footer.unsubscribe(links.unsubscribeKind)), links.unsubscribeUrl]);
  items.push([esc(c.footer.guidelines), communityUrl(ctx.locale, '/guidelines')]);
  items.push([esc(c.footer.privacy), sitePath(ctx.locale, '/privacy')]);
  return footerBlock(ctx, {
    links: items,
    lines: [esc(why), `${esc(t.tagline)} · <a href="${sitePath(ctx.locale, '/')}" style="color:${color.title};text-decoration:underline;">www.outbrick.site</a>`],
  });
}

export function footerText(locale: EmailLocale, why: string, links: FooterLinks): (string | false)[] {
  const c = communityCopy[locale];
  const t = emailCopy[locale];
  return [
    '—',
    `${c.footer.manage}: ${links.manageUrl}`,
    Boolean(links.unsubscribeUrl && links.unsubscribeKind) && `${c.footer.unsubscribe(links.unsubscribeKind!)}: ${links.unsubscribeUrl}`,
    `${c.footer.guidelines}: ${communityUrl(locale, '/guidelines')}`,
    `${c.footer.privacy}: ${sitePath(locale, '/privacy')}`,
    '',
    why,
    `${t.tagline} · https://www.outbrick.site`,
  ];
}

function copyableLink(ctx: Ctx, url: string): string {
  return para(ctx, `<a class="ob-link" href="${esc(url)}" style="color:${color.link};text-decoration:underline;word-break:break-all;">${esc(url)}</a>`, { size: 16 });
}

// ---------------------------------------------------------------------------------------
// Sign-in link

export type SignInInput = { locale: EmailLocale; url: string; manageUrl?: string; assetBase?: string };

export function communitySignIn(input: SignInInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = communityCopy[input.locale];
  const s = c.signin;
  const links = { manageUrl: input.manageUrl ?? communityUrl(input.locale, '/settings') };
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(s.heading)),
    para(ctx, esc(s.intro)),
    button(ctx, input.url, esc(s.cta), 300),
    para(ctx, esc(s.expiry), { muted: true, size: 16, margin: '0 0 6px' }),
    copyableLink(ctx, input.url),
    rule(),
    para(ctx, esc(s.ignore)),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, title: s.subject, preheader: s.preheader, logoAlt: emailCopy[input.locale].logoAlt, body, footer: footer(ctx, s.why, links) });
  const text = textBlock([s.heading, '', s.intro, '', `${s.cta}:`, input.url, '', s.expiry.replace(/[:：]$/, '.'), '', s.ignore, '', `— ${emailCopy[input.locale].signoff}`, '', ...footerText(input.locale, s.why, links)]);
  return { subject: s.subject, html, text };
}

// ---------------------------------------------------------------------------------------
// Confirm your email (an unverified address from Facebook, or a changed address)

export type ConfirmEmailInput = { locale: EmailLocale; url: string; reason: 'provider' | 'change'; manageUrl?: string; assetBase?: string };

export function communityConfirmEmail(input: ConfirmEmailInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = communityCopy[input.locale];
  const s = c.confirmEmail;
  const intro = input.reason === 'change' ? s.introChange : s.introProvider;
  const links = { manageUrl: input.manageUrl ?? communityUrl(input.locale, '/settings') };
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(s.heading)),
    para(ctx, esc(intro)),
    button(ctx, input.url, esc(s.cta), 300),
    para(ctx, esc(s.expiry), { muted: true, size: 16, margin: '0 0 6px' }),
    copyableLink(ctx, input.url),
    rule(),
    para(ctx, esc(s.ignore)),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, title: s.subject, preheader: s.preheader, logoAlt: emailCopy[input.locale].logoAlt, body, footer: footer(ctx, s.why, links) });
  const text = textBlock([s.heading, '', intro, '', `${s.cta}:`, input.url, '', s.expiry.replace(/[:：]$/, '.'), '', s.ignore, '', `— ${emailCopy[input.locale].signoff}`, '', ...footerText(input.locale, s.why, links)]);
  return { subject: s.subject, html, text };
}

// ---------------------------------------------------------------------------------------
// Welcome (first sign-in)

export type CommunityWelcomeInput = { locale: EmailLocale; name: string; manageUrl?: string; assetBase?: string; origin?: string };

export function communityWelcome(input: CommunityWelcomeInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = communityCopy[input.locale];
  const w = c.welcome;
  const origin = input.origin ?? SITE;
  const name = String(input.name ?? '').replace(/\s+/g, ' ').trim().slice(0, 40);
  const home = communityUrl(input.locale, '', origin);
  const guidelines = communityUrl(input.locale, '/guidelines', origin);
  const links = { manageUrl: input.manageUrl ?? communityUrl(input.locale, '/settings', origin) };
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(w.heading(name))),
    para(ctx, esc(w.intro)),
    heading(ctx, esc(w.categoriesTitle), 2),
    bricks(ctx, w.categories.map((item) => ({ title: esc(item.title), body: esc(item.body) }))),
    heading(ctx, esc(w.followTitle), 2),
    para(ctx, esc(w.follow)),
    panel(ctx, heading(ctx, esc(w.accessibilityTitle), 3) + para(ctx, esc(w.accessibility)), color.goldFoot),
    button(ctx, home, esc(w.cta)),
    para(ctx, `${esc(w.guidelines)} ${link(guidelines, esc(w.guidelinesLink))}`, { muted: true, size: 16 }),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, title: w.subject, preheader: w.preheader, logoAlt: emailCopy[input.locale].logoAlt, body, footer: footer(ctx, w.why, links) });
  const text = textBlock([
    w.heading(name),
    '',
    w.intro,
    '',
    `## ${w.categoriesTitle}`,
    '',
    ...w.categories.map((item) => `* ${item.title} ${item.body}`),
    '',
    `## ${w.followTitle}`,
    '',
    w.follow,
    '',
    `## ${w.accessibilityTitle}`,
    '',
    w.accessibility,
    '',
    `${w.cta}: ${home}`,
    '',
    `${w.guidelines} ${w.guidelinesLink}: ${guidelines}`,
    '',
    `— ${emailCopy[input.locale].signoff}`,
    '',
    ...footerText(input.locale, w.why, links),
  ]);
  return { subject: w.subject, html, text };
}

// ---------------------------------------------------------------------------------------
// Notifications: one item, or several grouped

export type NotificationItem = {
  kind: CommunityKind;
  /** The member who did it; null for the system (release bot, moderation). */
  actorName: string | null;
  threadTitle: string;
  /** Absolute link to the post: /community/t/<id>/<slug>#post-<n> in the member's language. */
  url: string;
  /** The post's text as plain text (see plainExcerpt); escaped here. */
  excerpt: string;
  status?: string | null;
  statusNote?: string | null;
  version?: string | null;
  reason?: string | null;
  /** Phase 2: for 'merged', the title of the thread the post came from. */
  fromTitle?: string | null;
  /** kind 'badge': the badge key (contract BadgeKey) and its level. */
  badge?: string | null;
  level?: number | null;
};

/** A badge item's name in words, with its level ("Helpful (10 solved answers)"). */
const badgeName = (locale: EmailLocale, item: NotificationItem) => badgeEmailCopy[locale].named(item.badge, item.level);

const statusLabel = (locale: EmailLocale, status: string | null | undefined) => (status ? (communityCopy[locale].statuses[status] ?? status) : '');

function subjectOf(locale: EmailLocale, item: NotificationItem): string {
  const k = communityCopy[locale].kinds;
  const actor = item.actorName || communityCopy[locale].someone;
  const title = clip(item.threadTitle, 90);
  switch (item.kind) {
    case 'reply':
      return k.reply.subject(actor, title);
    case 'mention':
      return k.mention.subject(actor, title);
    case 'watched':
      return k.watched.subject(actor, title);
    case 'status':
      return k.status.subject(title, statusLabel(locale, item.status));
    case 'solved':
      return k.solved.subject(title);
    case 'release':
      return k.release.subject(item.version || '');
    case 'moderation':
      return k.moderation.subject(title);
    case 'merged':
      return k.merged.subject(title);
    case 'badge':
      return k.badge.subject(badgeName(locale, item));
  }
}

export function clip(value: string, max: number): string {
  const s = String(value ?? '').replace(/\s+/g, ' ').trim();
  return s.length > max ? `${s.slice(0, max - 1).trimEnd()}…` : s;
}

/** The per-kind intro, the panel and the button, for one item. */
function itemParts(locale: EmailLocale, item: NotificationItem): { intro: string; cta: string; note?: [string, string] } {
  const k = communityCopy[locale].kinds;
  switch (item.kind) {
    case 'reply':
      return { intro: k.reply.intro, cta: k.reply.cta };
    case 'mention':
      return { intro: k.mention.intro, cta: k.mention.cta };
    case 'watched':
      return { intro: k.watched.intro, cta: k.watched.cta };
    case 'status':
      return { intro: k.status.intro(statusLabel(locale, item.status)), cta: k.status.cta, note: item.statusNote ? [k.status.note, item.statusNote] : undefined };
    case 'solved':
      return { intro: k.solved.intro, cta: k.solved.cta };
    case 'release':
      return { intro: k.release.intro(item.version || ''), cta: k.release.cta };
    case 'moderation':
      return { intro: k.moderation.intro(clip(item.threadTitle, 140)), cta: k.moderation.cta, note: item.reason ? [k.moderation.reason, item.reason] : undefined };
    case 'merged':
      return { intro: k.merged.intro(clip(item.fromTitle || item.threadTitle, 140)), cta: k.merged.cta };
    case 'badge': {
      const b = badgeEmailCopy[locale];
      const known = item.badge && Object.hasOwn(b.badges, item.badge) ? b.badges[item.badge as keyof typeof b.badges] : null;
      return { intro: k.badge.intro(badgeName(locale, item)), cta: k.badge.cta, note: known ? [k.badge.what, known.description] : undefined };
    }
  }
}

export type NotificationEmailInput = FooterLinks & {
  locale: EmailLocale;
  item: NotificationItem;
  assetBase?: string;
  /** Phase 2: the email's Reply-To posts a reply, so say so under the button. */
  replyByEmail?: boolean;
};

export function communityNotification(input: NotificationEmailInput): Rendered {
  const { locale, item } = input;
  const ctx = ctxOf(locale, input.assetBase);
  const c = communityCopy[locale];
  const subject = subjectOf(locale, item);
  const parts = itemParts(locale, item);
  const excerpt = plainExcerpt(item.excerpt, 400);
  const isRelease = item.kind === 'release';
  const why = c.footer.why;
  const headingText = item.kind === 'moderation' ? c.kinds.moderation.heading : subject;
  const body = [
    eyebrow(ctx, esc(isRelease ? c.newsEyebrow : c.eyebrow)),
    heading(ctx, esc(headingText)),
    para(ctx, esc(parts.intro)),
    parts.note ? panel(ctx, field(ctx, esc(parts.note[0]), escLines(clip(parts.note[1], 500))), color.goldFoot) : '',
    excerpt
      ? panel(
          ctx,
          (item.kind !== 'release' && item.actorName ? eyebrow(ctx, esc(item.actorName), color.onPaper2) : '') + para(ctx, esc(excerpt)),
        )
      : '',
    button(ctx, item.url, esc(parts.cta)),
    input.replyByEmail ? para(ctx, esc(replyHints[locale]), { muted: true, size: 16 }) : '',
    item.kind === 'moderation' ? para(ctx, esc(c.kinds.moderation.appeal)) : '',
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, title: subject, preheader: excerpt ? clip(excerpt, 140) : parts.intro, logoAlt: emailCopy[locale].logoAlt, body, footer: footer(ctx, why, input) });
  const text = textBlock([
    headingText,
    '',
    parts.intro,
    '',
    parts.note && `${parts.note[0]}: ${clip(parts.note[1], 500)}`,
    parts.note && '',
    excerpt && (item.kind !== 'release' && item.actorName ? `${item.actorName}:` : null),
    excerpt && `> ${excerpt}`,
    excerpt && '',
    `${parts.cta}: ${item.url}`,
    '',
    Boolean(input.replyByEmail) && replyHints[locale],
    Boolean(input.replyByEmail) && '',
    item.kind === 'moderation' && c.kinds.moderation.appeal,
    item.kind === 'moderation' && '',
    `— ${emailCopy[locale].signoff}`,
    '',
    ...footerText(locale, why, input),
  ]);
  return { subject, html, text };
}

export type DigestEmailInput = FooterLinks & { locale: EmailLocale; items: NotificationItem[]; notificationsUrl: string; assetBase?: string };

/** How many items a grouped email lists before "and N more". */
export const DIGEST_LIMIT = 10;

export function communityDigest(input: DigestEmailInput): Rendered {
  const { locale } = input;
  const ctx = ctxOf(locale, input.assetBase);
  const f = fonts(locale);
  const c = communityCopy[locale];
  const d = c.digest;
  const count = input.items.length;
  const shown = input.items.slice(0, DIGEST_LIMIT);
  const rest = count - shown.length;
  const line = (item: NotificationItem) =>
    c.digestLine[item.kind](
      item.actorName || c.someone,
      clip(item.threadTitle, 90),
      item.kind === 'status' ? statusLabel(locale, item.status) : item.kind === 'badge' ? badgeName(locale, item) : item.version || '',
    );
  const isNews = input.items.every((item) => item.kind === 'release');
  const cards = shown
    .map((item) => {
      const excerpt = plainExcerpt(item.excerpt, 200);
      return panel(
        ctx,
        `<p class="ob-text" style="margin:0 0 8px;font-family:${f.text};font-size:17px;line-height:1.5;font-weight:700;color:${color.onPaper};">${esc(line(item))}</p>` +
          (excerpt ? para(ctx, esc(excerpt), { muted: true, size: 16, margin: '0 0 8px' }) : '') +
          para(ctx, link(item.url, `${esc(d.open)} →`), { size: 16, margin: '0 0 14px' }),
      );
    })
    .join('\n');
  const body = [
    eyebrow(ctx, esc(isNews ? c.newsEyebrow : c.eyebrow)),
    heading(ctx, esc(d.heading(count))),
    para(ctx, esc(d.intro)),
    cards,
    rest > 0 ? para(ctx, esc(d.more(rest)), { muted: true }) : '',
    button(ctx, input.notificationsUrl, esc(d.cta)),
    signoff(ctx),
  ].join('\n');
  const subject = d.subject(count);
  const html = shell({ ctx, title: subject, preheader: d.preheader, logoAlt: emailCopy[locale].logoAlt, body, footer: footer(ctx, c.footer.why, input) });
  const text = textBlock([
    d.heading(count),
    '',
    d.intro,
    '',
    ...shown.flatMap((item) => {
      const excerpt = plainExcerpt(item.excerpt, 200);
      return [`* ${line(item)}`, excerpt ? `  ${excerpt}` : null, `  ${item.url}`, ''].filter((v): v is string => v !== null);
    }),
    rest > 0 && d.more(rest),
    rest > 0 && '',
    `${d.cta}: ${input.notificationsUrl}`,
    '',
    `— ${emailCopy[locale].signoff}`,
    '',
    ...footerText(locale, c.footer.why, input),
  ]);
  return { subject, html, text };
}

// ---------------------------------------------------------------------------------------
// The pages behind the links: a one-button confirmation (link scanners fetch every GET in a
// message, so only the reader's POST signs in, confirms or unsubscribes), and its outcomes.

export type PageInput = {
  locale: EmailLocale;
  title: string;
  body: string;
  note?: string;
  /** A form that POSTs to `action` with one button. */
  form?: { action: string; button: string };
  /** A plain link under the body. */
  link?: { href: string; label: string };
  origin?: string;
};

export function communityPage(input: PageInput): string {
  const ctx = ctxOf(input.locale);
  const c = communityCopy[input.locale];
  const t = emailCopy[input.locale];
  const f = fonts(input.locale);
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(input.title)),
    para(ctx, esc(input.body)),
    input.form
      ? `<form method="post" action="${esc(input.form.action)}" style="margin:8px 0 22px;"><button type="submit" class="ob-btn" style="cursor:pointer;min-height:44px;background:${color.gold};color:${color.ink};font-family:${f.display};font-size:18px;line-height:22px;font-weight:600;padding:15px 30px 13px;border:0;border-radius:14px;border-bottom:4px solid ${color.goldFoot};">${esc(input.form.button)}</button></form>`
      : '',
    input.link ? para(ctx, link(input.link.href, esc(input.link.label))) : '',
    input.note ? para(ctx, esc(input.note), { muted: true, size: 16 }) : '',
  ].join('\n');
  const html = shell({
    ctx,
    title: input.title,
    preheader: input.body,
    logoAlt: t.logoAlt,
    body,
    footer: footerBlock(ctx, {
      links: [
        [esc(c.footer.guidelines), communityUrl(input.locale, '/guidelines', input.origin)],
        [esc(c.footer.privacy), sitePath(input.locale, '/privacy', input.origin)],
      ],
      lines: [`${esc(t.tagline)} · www.outbrick.site`],
    }),
    head: '<meta name="robots" content="noindex, nofollow">\n',
  });
  // A web page, not a message: the reading area is the page's main landmark.
  return html.replace('<div role="article" aria-roledescription="email"', '<div role="main"');
}
