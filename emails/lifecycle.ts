// The customer-lifecycle emails (8 October 2026), in the same shell and voice as the rest:
//
//   Support      supportReply (a person answered), supportFixed (your bug ships fixed in X),
//                supportFeedback (did we solve it? one tap), plus the feedback web pages.
//   Applications affiliateApproved / affiliateDeclined, careersInReview / careersNextStep /
//                careersDeclined.
//   Newsletter   welcomeBoards and welcomeFriends (the welcome series' letters 2 and 3),
//                releaseNews (a new App Store version), reengage (still want these?),
//                preferencesLink, and the preferences / keep-me web pages.
//   Account      passkeyAdded, newSignIn, accountDeleted, dataExport, and the sign-out page.
//   Notices      policyNotice (privacy policy or terms changed).
//
// Every visitor-supplied or staff-written value is escaped here; staff messages accept the same
// tiny Markdown as issue files (core.ts inlineMarkdown), so a reply can never inject markup.
// Copy lives in lifecycle-i18n*.ts. Senders, queues and links are chosen by netlify/lifecycle/.

import {
  SITE,
  bricks,
  button,
  color,
  esc,
  escLines,
  eyebrow,
  field,
  fonts,
  ghostButton,
  heading,
  inlineMarkdown,
  link,
  panel,
  para,
  picks,
  plainMarkdown,
  reveal,
  rule,
  shell,
  textBlock,
  type Ctx,
} from './core.ts';
import { emailCopy, greetingName, type EmailLocale } from './i18n.ts';
import { lifecycleCopy } from './lifecycle-i18n.ts';
import { newsFooter, newsFooterText, sitePath, store, supportFooter, supportFooterText, type Rendered } from './templates.ts';
import { trackHtml, trackText } from './support-centre.ts';
import { communityUrl, footer as communityFooter, footerText as communityFooterText, signoff } from './community.ts';
import { FRIENDS, FRIEND_IDS, firstPuzzleBlock, firstPuzzleText, friendSrc, studs, type Mood } from './friends.ts';

const ctxOf = (locale: EmailLocale, assetBase = SITE): Ctx => ({ locale, assetBase });
const signoffText = (locale: EmailLocale) => `— ${emailCopy[locale].signoff}`;
/** Staff-written text: paragraphs split on blank lines, each with the tiny inline Markdown. */
const staffHtml = (ctx: Ctx, markdown: string) =>
  String(markdown ?? '')
    .replace(/\r\n?/g, '\n')
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => para(ctx, inlineMarkdown(p).replace(/\n/g, '<br>')))
    .join('\n');
const staffText = (markdown: string) =>
  String(markdown ?? '')
    .replace(/\r\n?/g, '\n')
    .split(/\n\s*\n/)
    .map((p) => plainMarkdown(p.trim()))
    .filter(Boolean)
    .flatMap((p) => [p, '']);

/** "8 October 2026, 14:05 UTC" in the reader's language. */
export function when(locale: EmailLocale, at: Date | string): string {
  const d = at instanceof Date ? at : new Date(at);
  if (Number.isNaN(d.getTime())) return '';
  return `${new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeStyle: 'short', timeZone: 'UTC' }).format(d)} UTC`;
}

export function dateOnly(locale: EmailLocale, at: Date | string): string {
  const d = at instanceof Date ? at : new Date(at);
  if (Number.isNaN(d.getTime())) return String(at);
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(d);
}

/** A case reference chip: OB-XXXXXX in a small brick, next to the eyebrow. */
function caseChip(ctx: Ctx, ref: string): string {
  const f = fonts(ctx.locale);
  return `<p style="margin:0 0 14px;"><span style="display:inline-block;padding:5px 10px 4px;border-radius:8px;background:${color.ink};color:${color.title};font-family:${f.text};font-size:13px;line-height:1.3;font-weight:800;letter-spacing:0.06em;">${esc(lifecycleCopy[ctx.locale].caseRef(ref))}</span></p>`;
}

// ---------------------------------------------------------------------------------------
// Support

export type SupportReplyInput = {
  locale: EmailLocale;
  name: string;
  ref: string;
  staff: string;
  message: string;
  original: string;
  /** The player's private link to follow the case (/support/request). */
  trackUrl?: string;
  assetBase?: string;
};

/** A person from the team answers a contact-form message. Replying continues the case. */
export function supportReply(input: SupportReplyInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].supportReply;
  const t = emailCopy[input.locale];
  const staff = input.staff.trim() || 'OutBrick';
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    caseChip(ctx, input.ref),
    heading(ctx, esc(c.heading(staff))),
    staffHtml(ctx, input.message),
    para(ctx, esc(c.continue), { muted: true, size: 16 }),
    input.trackUrl ? trackHtml(ctx, input.trackUrl) : '',
    input.original.trim() ? reveal(ctx, 'ob-original', esc(c.showOriginal), esc(c.original), para(ctx, escLines(input.original.slice(0, 5000)), { size: 16 })) : '',
    ghostButton(ctx, sitePath(input.locale, '/support'), esc(c.cta)),
    para(ctx, `— ${esc(staff)} · ${esc(t.signoff)}`, { margin: '4px 0 20px' }),
  ].join('\n');
  const html = shell({ ctx, host: { friend: 'sprout', pose: 'cheer', mood: 'reply' }, title: c.subject(input.ref), preheader: c.preheader, logoAlt: t.logoAlt, body, footer: supportFooter(ctx, c.why, 'support-reply') });
  const text = textBlock([
    lifecycleCopy[input.locale].caseRef(input.ref),
    '',
    c.heading(staff),
    '',
    ...staffText(input.message),
    c.continue,
    '',
    input.trackUrl && trackText(input.locale, input.trackUrl),
    input.trackUrl && '',
    input.original.trim() && `${c.original}:`,
    input.original.trim() && input.original.slice(0, 5000),
    input.original.trim() && '',
    `— ${staff} · ${t.signoff}`,
    '',
    ...supportFooterText(input.locale, c.why, 'support-reply'),
  ]);
  return { subject: c.subject(input.ref), html, text };
}

export type SupportFixedInput = { locale: EmailLocale; name: string; ref: string; version: string; note?: string; trackUrl?: string; assetBase?: string };

/** The bug someone reported ships fixed. Sent by the release bot when `fixed_in` reaches the store. */
export function supportFixed(input: SupportFixedInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].supportFixed;
  const t = emailCopy[input.locale];
  const url = store(input.locale, 'support-fixed');
  const body = [
    eyebrow(ctx, esc(c.eyebrow), '#1f8a3a'),
    caseChip(ctx, input.ref),
    heading(ctx, esc(c.heading(input.version))),
    para(ctx, esc(c.intro(input.version))),
    input.note?.trim() ? panel(ctx, staffHtml(ctx, input.note), '#3fc544') : '',
    bricks(ctx, c.steps.map((s) => ({ title: esc(s.title), body: esc(s.body) }))),
    button(ctx, url, esc(c.cta)),
    para(ctx, esc(c.still), { muted: true, size: 16 }),
    input.trackUrl ? trackHtml(ctx, input.trackUrl) : '',
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, host: { friend: 'bricko', pose: 'cheer', mood: 'fixed' }, title: c.subject(input.version), preheader: c.preheader(input.version), logoAlt: t.logoAlt, body, footer: supportFooter(ctx, c.why, 'support-fixed') });
  const text = textBlock([
    lifecycleCopy[input.locale].caseRef(input.ref),
    '',
    c.heading(input.version),
    '',
    c.intro(input.version),
    '',
    ...(input.note?.trim() ? [...staffText(input.note)] : []),
    ...c.steps.map((s) => `* ${s.title} ${s.body}`),
    '',
    `${c.cta}: ${url}`,
    '',
    c.still,
    '',
    input.trackUrl && trackText(input.locale, input.trackUrl),
    input.trackUrl && '',
    signoffText(input.locale),
    '',
    ...supportFooterText(input.locale, c.why, 'support-fixed'),
  ]);
  return { subject: c.subject(input.version), html, text };
}

/** `rate` is the three-point scale (Not great, Okay, Great), recorded as 1, 3 and 5. */
export type FeedbackLinks = { solved: string; notSolved: string; rate: [string, string, string] };
export type SupportFeedbackInput = { locale: EmailLocale; name: string; ref: string; links: FeedbackLinks; assetBase?: string };

/** Vio, the critic, hosts "did we solve it?": approved expressions only, never a sad face ("not yet" is Vio thinking). */
const bloo = (ctx: Ctx, mood: 'cheer' | 'idle' | 'think') => friendSrc(ctx, 'vio', mood);
const ratingMoods = ['think', 'idle', 'cheer'] as const;
const ratingTones = ['#7b5cf0', '#3b8bf0', '#3fc544'];

/** The caption for a stored rating (1, 3 or 5; older 2 and 4 round to their neighbour). */
export function ratingCaption(locale: EmailLocale, rating: number): string {
  const faces = lifecycleCopy[locale].supportFeedback.faces;
  return faces[rating <= 2 ? 0 : rating >= 4 ? 2 : 1];
}

/** "Did we solve it?" a few days after a reply: Bloo cheering or thinking, then a three-Bloo rating. Every tap is a signed link. */
export function supportFeedback(input: SupportFeedbackInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].supportFeedback;
  const t = emailCopy[input.locale];
  const f = fonts(input.locale);
  const q = (text: string) => `<p class="ob-text" style="margin:6px 0 10px;text-align:center;font-family:${f.display};font-size:19px;line-height:1.3;font-weight:600;color:${color.onPaper};">${esc(text)}</p>`;
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    caseChip(ctx, input.ref),
    heading(ctx, esc(c.heading(greetingName(input.locale, input.name)))),
    para(ctx, esc(c.intro)),
    q(c.solvedQuestion),
    picks(ctx, [
      { href: input.links.solved, img: bloo(ctx, 'cheer'), caption: esc(c.yes), tone: '#3fc544' },
      { href: input.links.notSolved, img: bloo(ctx, 'think'), caption: esc(c.no), tone: '#ffc53d' },
    ]),
    rule(),
    q(c.rateQuestion),
    picks(ctx, input.links.rate.map((href, i) => ({ href, img: bloo(ctx, ratingMoods[i]), caption: esc(c.faces[i]), tone: ratingTones[i] }))),
    para(ctx, esc(c.private), { muted: true, size: 15 }),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, host: { friend: 'vio', pose: 'think', mood: 'rate' }, title: c.subject, preheader: c.preheader, logoAlt: t.logoAlt, body, footer: supportFooter(ctx, c.why, 'support-feedback') });
  const text = textBlock([
    lifecycleCopy[input.locale].caseRef(input.ref),
    '',
    c.heading(greetingName(input.locale, input.name)),
    '',
    c.intro,
    '',
    c.solvedQuestion,
    `${c.yes}: ${input.links.solved}`,
    `${c.no}: ${input.links.notSolved}`,
    '',
    c.rateQuestion,
    ...input.links.rate.map((href, i) => `${c.faces[i]}: ${href}`),
    '',
    c.private,
    '',
    signoffText(input.locale),
    '',
    ...supportFooterText(input.locale, c.why, 'support-feedback'),
  ]);
  return { subject: c.subject, html, text };
}

const pageHead = '<meta name="robots" content="noindex, nofollow">\n';

function pageFooter(ctx: Ctx): string {
  const t = emailCopy[ctx.locale];
  return `<p style="margin:0;font-family:${fonts(ctx.locale).text};font-size:15px;line-height:1.6;color:${color.lilac};"><a href="${esc(sitePath(ctx.locale, '/support'))}" style="color:${color.title};text-decoration:underline;font-weight:700;">${esc(t.links.support)}</a> &nbsp;·&nbsp; <a href="${esc(sitePath(ctx.locale, '/privacy'))}" style="color:${color.title};text-decoration:underline;font-weight:700;">${esc(t.links.privacy)}</a></p>`;
}

const formButton = (ctx: Ctx, label: string) =>
  `<button type="submit" class="ob-btn" style="cursor:pointer;min-height:44px;background:${color.gold};color:${color.ink};font-family:${fonts(ctx.locale).display};font-size:18px;line-height:22px;font-weight:600;padding:15px 30px 13px;border:0;border-radius:14px;border-bottom:4px solid ${color.goldFoot};">${esc(label)}</button>`;

/** A web page in the email shell: these answer the signed links. */
export function lifecyclePage(locale: EmailLocale, title: string, bodyHtml: string): string {
  const ctx = ctxOf(locale);
  const html = shell({ ctx, host: { friend: 'bloo', pose: 'idle' }, title, preheader: title, logoAlt: emailCopy[locale].logoAlt, body: bodyHtml, footer: pageFooter(ctx), head: pageHead });
  return html.replace('<div role="article" aria-roledescription="email"', '<div role="main"');
}

export function simplePage(locale: EmailLocale, title: string, message: string, linkTo?: { href: string; label: string }): string {
  const ctx = ctxOf(locale);
  return lifecyclePage(locale, title, [heading(ctx, esc(title)), para(ctx, esc(message)), linkTo ? para(ctx, link(linkTo.href, esc(linkTo.label))) : ''].join('\n'));
}

/** The page a feedback tap lands on: it shows the choice and asks for an optional comment; only the POST records it. */
export function feedbackPage(locale: EmailLocale, ref: string, actionUrl: string, choice: { solved?: boolean; rating?: number }): string {
  const ctx = ctxOf(locale);
  const c = lifecycleCopy[locale].feedbackPage;
  const f = fonts(locale);
  const lines = [
    choice.solved === true ? c.solvedYes : choice.solved === false ? c.solvedNo : '',
    typeof choice.rating === 'number' ? c.chose(ratingCaption(locale, choice.rating)) : '',
  ].filter(Boolean);
  return lifecyclePage(
    locale,
    c.title,
    [
      caseChip(ctx, ref),
      heading(ctx, esc(c.title)),
      ...lines.map((l) => para(ctx, esc(l))),
      `<form method="post" action="${esc(actionUrl)}" style="margin:8px 0 22px;">
<label for="comment" class="ob-text" style="display:block;margin:0 0 6px;font-family:${f.text};font-size:16px;font-weight:700;color:${color.onPaper};">${esc(c.commentLabel)}</label>
<textarea id="comment" name="comment" rows="4" maxlength="2000" placeholder="${esc(c.commentHint)}" style="display:block;box-sizing:border-box;width:100%;margin:0 0 16px;padding:12px 14px;border:2px solid ${color.paperEdge};border-radius:12px;background:#ffffff;color:${color.onPaper};font-family:${f.text};font-size:16px;line-height:1.5;"></textarea>
${formButton(ctx, c.send)}
</form>`,
    ].join('\n'),
  );
}

// ---------------------------------------------------------------------------------------
// Applications

export type AffiliateApprovedInput = { locale: EmailLocale; name: string; code: string; assetBase?: string };

export function affiliateApproved(input: AffiliateApprovedInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].affiliateApproved;
  const t = emailCopy[input.locale];
  const f = fonts(input.locale);
  const code = input.code.trim().toUpperCase();
  const refLink = `${SITE}/r/${code.toLowerCase()}`;
  // The code as a ticket: big letters on a dashed gold card.
  const ticket = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 22px;"><tr><td class="ob-quote" align="center" style="background:${color.cream};border:2px dashed ${color.goldFoot};border-radius:16px;padding:18px 16px 16px;text-align:center;">
<p class="ob-muted" style="margin:0 0 4px;font-family:${f.text};font-size:13px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:${color.onPaper2};">${esc(c.code)}</p>
<p class="ob-text" style="margin:0 0 12px;font-family:${f.display};font-size:34px;line-height:1.1;font-weight:700;letter-spacing:0.06em;color:${color.onPaper};">${esc(code)}</p>
<p class="ob-muted" style="margin:0 0 4px;font-family:${f.text};font-size:13px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:${color.onPaper2};">${esc(c.link)}</p>
<p style="margin:0;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:16px;line-height:1.4;word-break:break-all;"><a class="ob-link" href="${esc(refLink)}" style="color:${color.link};text-decoration:underline;">${esc(refLink.replace('https://', ''))}</a></p>
</td></tr></table>`;
  const body = [
    eyebrow(ctx, esc(c.eyebrow), '#1f8a3a'),
    heading(ctx, esc(c.heading(greetingName(input.locale, input.name)))),
    para(ctx, esc(c.intro)),
    ticket,
    heading(ctx, esc(c.checklistTitle), 3),
    bricks(ctx, c.checklist.map((s) => ({ title: esc(s.title), body: esc(s.body) }))),
    button(ctx, sitePath(input.locale, '/affiliates'), esc(c.cta)),
    ghostButton(ctx, `${SITE}/press-kit`, esc(c.pressKit)),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, host: { friend: 'bricko', pose: 'cheer', mood: 'yay' }, title: c.subject, preheader: c.preheader, logoAlt: t.logoAlt, body, footer: supportFooter(ctx, c.why, 'affiliate-approved') });
  const text = textBlock([
    c.heading(greetingName(input.locale, input.name)),
    '',
    c.intro,
    '',
    `${c.code}: ${code}`,
    `${c.link}: ${refLink}`,
    '',
    `${c.checklistTitle}:`,
    ...c.checklist.map((s) => `* ${s.title} ${s.body}`),
    '',
    `${c.cta}: ${sitePath(input.locale, '/affiliates')}`,
    `${c.pressKit}: ${SITE}/press-kit`,
    '',
    signoffText(input.locale),
    '',
    ...supportFooterText(input.locale, c.why, 'affiliate-approved'),
  ]);
  return { subject: c.subject, html, text };
}

export type DecisionInput = { locale: EmailLocale; name: string; message?: string; assetBase?: string };

export function affiliateDeclined(input: DecisionInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].affiliateDeclined;
  const t = emailCopy[input.locale];
  const body = [
    heading(ctx, esc(c.heading(greetingName(input.locale, input.name)))),
    para(ctx, esc(c.intro)),
    input.message?.trim() ? panel(ctx, `${eyebrow(ctx, esc(c.reasonTitle))}${staffHtml(ctx, input.message)}`) : '',
    para(ctx, esc(c.later)),
    ghostButton(ctx, sitePath(input.locale, '/affiliates'), esc(c.cta)),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, host: { friend: 'bricko', pose: 'idle', mood: 'thanks' }, title: c.subject, preheader: c.preheader, logoAlt: t.logoAlt, body, footer: supportFooter(ctx, c.why, 'affiliate-declined') });
  const text = textBlock([
    c.heading(greetingName(input.locale, input.name)),
    '',
    c.intro,
    '',
    ...(input.message?.trim() ? [`${c.reasonTitle}:`, ...staffText(input.message)] : []),
    c.later,
    '',
    signoffText(input.locale),
    '',
    ...supportFooterText(input.locale, c.why, 'affiliate-declined'),
  ]);
  return { subject: c.subject, html, text };
}

export type CareersDecisionInput = DecisionInput & { role: string };

export function careersInReview(input: CareersDecisionInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].careersInReview;
  const t = emailCopy[input.locale];
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(c.heading(greetingName(input.locale, input.name)))),
    para(ctx, esc(c.intro(input.role))),
    bricks(ctx, c.timeline.map((s) => ({ title: esc(s.title), body: esc(s.body) }))),
    ghostButton(ctx, `${SITE}/careers`, esc(c.cta)),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, host: { friend: 'bricko', pose: 'think', mood: 'got' }, title: c.subject(input.role), preheader: c.preheader, logoAlt: t.logoAlt, body, footer: supportFooter(ctx, c.why, 'careers-review') });
  const text = textBlock([
    c.heading(greetingName(input.locale, input.name)),
    '',
    c.intro(input.role),
    '',
    ...c.timeline.map((s) => `* ${s.title} ${s.body}`),
    '',
    signoffText(input.locale),
    '',
    ...supportFooterText(input.locale, c.why, 'careers-review'),
  ]);
  return { subject: c.subject(input.role), html, text };
}

export function careersNextStep(input: CareersDecisionInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].careersNextStep;
  const t = emailCopy[input.locale];
  const body = [
    eyebrow(ctx, esc(c.eyebrow), '#1f8a3a'),
    heading(ctx, esc(c.heading(greetingName(input.locale, input.name)))),
    para(ctx, esc(c.intro(input.role))),
    input.message?.trim() ? panel(ctx, `${eyebrow(ctx, esc(c.messageTitle))}${staffHtml(ctx, input.message)}`, '#3fc544') : '',
    para(ctx, esc(c.reply)),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, host: { friend: 'bricko', pose: 'cheer', mood: 'yay' }, title: c.subject(input.role), preheader: c.preheader, logoAlt: t.logoAlt, body, footer: supportFooter(ctx, c.why, 'careers-next') });
  const text = textBlock([
    c.heading(greetingName(input.locale, input.name)),
    '',
    c.intro(input.role),
    '',
    ...(input.message?.trim() ? [`${c.messageTitle}:`, ...staffText(input.message)] : []),
    c.reply,
    '',
    signoffText(input.locale),
    '',
    ...supportFooterText(input.locale, c.why, 'careers-next'),
  ]);
  return { subject: c.subject(input.role), html, text };
}

export function careersDeclined(input: CareersDecisionInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].careersDeclined;
  const t = emailCopy[input.locale];
  const body = [
    heading(ctx, esc(c.heading(greetingName(input.locale, input.name)))),
    para(ctx, esc(c.intro(input.role))),
    input.message?.trim() ? panel(ctx, `${eyebrow(ctx, esc(c.messageTitle))}${staffHtml(ctx, input.message)}`) : '',
    para(ctx, esc(c.keep)),
    ghostButton(ctx, `${SITE}/careers`, esc(c.cta)),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, host: { friend: 'bricko', pose: 'idle', mood: 'thanks' }, title: c.subject(input.role), preheader: c.preheader, logoAlt: t.logoAlt, body, footer: supportFooter(ctx, c.why, 'careers-declined') });
  const text = textBlock([
    c.heading(greetingName(input.locale, input.name)),
    '',
    c.intro(input.role),
    '',
    ...(input.message?.trim() ? [`${c.messageTitle}:`, ...staffText(input.message)] : []),
    c.keep,
    '',
    signoffText(input.locale),
    '',
    ...supportFooterText(input.locale, c.why, 'careers-declined'),
  ]);
  return { subject: c.subject(input.role), html, text };
}

// ---------------------------------------------------------------------------------------
// Newsletter

export type NewsLinks = { unsubscribeUrl: string; preferencesUrl?: string; assetBase?: string };

/** Welcome series, letter 2 (day 3): how a board works, with a tap-to-reveal tip. */
export function welcomeBoards(input: { locale: EmailLocale } & NewsLinks): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].welcomeBoards;
  const t = emailCopy[input.locale];
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(c.heading)),
    para(ctx, esc(c.intro)),
    bricks(ctx, c.steps.map((s) => ({ title: esc(s.title), body: esc(s.body) }))),
    reveal(ctx, 'ob-tip', `💡 ${esc(c.tipButton)}`, esc(c.tipLabel), para(ctx, esc(c.tip), { size: 16 })),
    firstPuzzleBlock(ctx, sitePath(input.locale, '/daily')),
    button(ctx, sitePath(input.locale, '/play'), esc(c.cta)),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, host: { friend: 'peach', pose: 'think', mood: 'tip' }, title: c.subject, preheader: c.preheader, logoAlt: t.logoAlt, body, nav: true, footer: newsFooter(ctx, input.unsubscribeUrl, c.why, undefined, input.preferencesUrl) });
  const text = textBlock([
    c.heading,
    '',
    c.intro,
    '',
    ...c.steps.map((s) => `* ${s.title} ${s.body}`),
    '',
    `${c.tipLabel}: ${c.tip}`,
    '',
    ...firstPuzzleText(input.locale, sitePath(input.locale, '/daily')),
    '',
    `${c.cta}: ${sitePath(input.locale, '/play')}`,
    '',
    signoffText(input.locale),
    '',
    ...newsFooterText(input.locale, input.unsubscribeUrl, c.why, undefined, input.preferencesUrl),
  ]);
  return { subject: c.subject, html, text };
}

/**
 * The nine friends as a 3 × 3 grid that wraps to fit any width: each one cheering on a plinth in
 * their own colour, linking to their page. The 6 KB email art keeps the letter light (the site's
 * full renders came to 825 KB for the nine).
 */
function friendGrid(ctx: Ctx): string {
  const f = fonts(ctx.locale);
  const cells = FRIEND_IDS.map((id) => {
    const fr = FRIENDS[id];
    return `<!--[if mso]><td width="33%" align="center" valign="top" style="padding:0 0 12px;"><![endif]--><a class="ob-pick" href="${esc(`${SITE}/mascots/${id}`)}" style="display:inline-block;vertical-align:top;width:31%;min-width:88px;max-width:150px;margin:0 1% 14px;text-align:center;text-decoration:none;transition:transform .15s ease;">
<img src="${esc(friendSrc(ctx, id, 'cheer'))}" width="96" height="96" alt="${esc(fr.name)}" style="display:block;width:96px;max-width:100%;height:auto;margin:0 auto;border:0;">
<span style="display:block;height:5px;font-size:0;line-height:0;text-align:center;">${studs(2, fr.colour, 12, 10)}</span>
<span style="display:block;margin:0 6px;padding:5px 4px 3px;border-radius:9px;background:${fr.colour};border-bottom:4px solid ${fr.foot};font-family:${f.display};font-size:15px;line-height:1.3;font-weight:600;color:${fr.ink};">${esc(fr.name)}</span></a><!--[if mso]></td><![endif]-->`;
  })
    .reduce((rows: string[], cell, i) => {
      if (i % 3 === 0) rows.push('');
      rows[rows.length - 1] += cell;
      return rows;
    }, [])
    .map((row) => `<!--[if mso]><tr><![endif]-->${row}<!--[if mso]></tr><![endif]-->`)
    .join('\n');
  return `<div style="margin:0 0 18px;text-align:center;font-size:0;"><!--[if mso]><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><![endif]-->
${cells}
<!--[if mso]></table><![endif]--></div>`;
}

/** Welcome series, letter 3 (day 10): the friends, the daily board, the community. */
export function welcomeFriends(input: { locale: EmailLocale } & NewsLinks): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].welcomeFriends;
  const t = emailCopy[input.locale];
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(c.heading)),
    para(ctx, esc(c.intro)),
    `<p class="ob-text" style="margin:0 0 12px;text-align:center;font-family:${fonts(input.locale).display};font-size:19px;font-weight:600;color:${color.onPaper};">${esc(c.friendsQuestion)}</p>`,
    friendGrid(ctx),
    rule(),
    heading(ctx, esc(c.dailyTitle), 3),
    para(ctx, esc(c.dailyBody)),
    button(ctx, sitePath(input.locale, '/daily'), esc(c.dailyCta)),
    heading(ctx, esc(c.communityTitle), 3),
    para(ctx, esc(c.communityBody)),
    ghostButton(ctx, sitePath(input.locale, '/community'), esc(c.communityCta)),
    input.preferencesUrl ? para(ctx, link(input.preferencesUrl, `${esc(c.preferences)} →`), { size: 16 }) : '',
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, host: { friend: 'poppy', pose: 'cheer', mood: 'friends' }, title: c.subject, preheader: c.preheader, logoAlt: t.logoAlt, body, nav: true, footer: newsFooter(ctx, input.unsubscribeUrl, c.why, undefined, input.preferencesUrl) });
  const text = textBlock([
    c.heading,
    '',
    c.intro,
    '',
    ...FRIEND_IDS.map((id) => `* ${FRIENDS[id].name}: ${SITE}/mascots/${id}`),
    '',
    `## ${c.dailyTitle}`,
    c.dailyBody,
    `${c.dailyCta}: ${sitePath(input.locale, '/daily')}`,
    '',
    `## ${c.communityTitle}`,
    c.communityBody,
    `${c.communityCta}: ${sitePath(input.locale, '/community')}`,
    '',
    signoffText(input.locale),
    '',
    ...newsFooterText(input.locale, input.unsubscribeUrl, c.why, undefined, input.preferencesUrl),
  ]);
  return { subject: c.subject, html, text };
}

export type ReleaseInput = { locale: EmailLocale; version: string; notes: string; unsubscribeUrl: string; preferencesUrl?: string; assetBase?: string };

/** A new version on the App Store, from that storefront's own release notes. Sent as a Broadcast draft. */
export function releaseNews(input: ReleaseInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].release;
  const t = emailCopy[input.locale];
  const notes = String(input.notes ?? '')
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((l) => l.replace(/^\s*[-•*·]\s*/, '').trim())
    .filter(Boolean)
    .slice(0, 12);
  const url = store(input.locale, 'release');
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(c.heading(input.version))),
    para(ctx, esc(c.intro)),
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 22px;"><tr><td bgcolor="${color.ink}" style="background:${color.ink};border-radius:16px;padding:20px 22px 8px;">
<p style="margin:0 0 10px;font-family:${fonts(input.locale).display};font-size:19px;font-weight:600;color:${color.title};">${esc(c.notesTitle)} · ${esc(emailCopy[input.locale].news.version(input.version))}</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${notes
      .map(
        (n, i) => `<tr><td valign="top" width="22" style="padding:6px 10px 8px 0;"><div style="width:12px;height:12px;border-radius:3px;background:${['#e2352f', '#ffc53d', '#26b9b0', '#7b5cf0', '#3b8bf0', '#3fc544'][i % 6]};font-size:0;line-height:0;">&nbsp;</div></td><td style="padding:0 0 8px;font-family:${fonts(input.locale).text};font-size:16px;line-height:1.55;color:${color.lilac};">${esc(n)}</td></tr>`,
      )
      .join('')}</table></td></tr></table>`,
    `<div style="text-align:center;">${button(ctx, url, esc(c.cta), 300).replace('style="margin:8px 0 22px;"', 'align="center" style="margin:8px auto 22px;"')}</div>`,
    para(ctx, link(sitePath(input.locale, '/whats-new'), `${esc(c.more)} →`), { size: 16 }),
    signoff(ctx),
  ].join('\n');
  const why = emailCopy[input.locale].news.why;
  const html = shell({ ctx, host: { friend: 'bloo', pose: 'cheer', mood: 'release' }, title: c.subject(input.version), preheader: c.preheader(input.version), logoAlt: t.logoAlt, body, nav: true, footer: newsFooter(ctx, input.unsubscribeUrl, why, undefined, input.preferencesUrl) });
  const text = textBlock([
    c.heading(input.version),
    '',
    c.intro,
    '',
    ...notes.map((n) => `* ${n}`),
    '',
    `${c.cta}: ${url}`,
    `${c.more}: ${sitePath(input.locale, '/whats-new')}`,
    '',
    signoffText(input.locale),
    '',
    ...newsFooterText(input.locale, input.unsubscribeUrl, why, undefined, input.preferencesUrl),
  ]);
  return { subject: c.subject(input.version), html, text };
}

export type ReengageInput = { locale: EmailLocale; keepUrl: string } & NewsLinks;

/** "Still want these?" after a long silence: keep, fewer, or leave. */
export function reengage(input: ReengageInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].reengage;
  const t = emailCopy[input.locale];
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(c.heading)),
    para(ctx, esc(c.intro)),
    `<div style="text-align:center;">${button(ctx, input.keepUrl, esc(c.keep), 300).replace('style="margin:8px 0 22px;"', 'align="center" style="margin:8px auto 14px;"')}</div>`,
    `<p style="margin:0 0 20px;text-align:center;font-family:${fonts(input.locale).text};font-size:16px;line-height:1.6;">${input.preferencesUrl ? `${link(input.preferencesUrl, esc(c.fewer))} &nbsp;·&nbsp; ` : ''}${link(input.unsubscribeUrl, esc(c.leave))}</p>`,
    para(ctx, esc(c.after), { muted: true, size: 15 }),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, host: { friend: 'zippy', pose: 'think', mood: 'miss' }, title: c.subject, preheader: c.preheader, logoAlt: t.logoAlt, body, footer: newsFooter(ctx, input.unsubscribeUrl, c.why, undefined, input.preferencesUrl) });
  const text = textBlock([
    c.heading,
    '',
    c.intro,
    '',
    `${c.keep}: ${input.keepUrl}`,
    input.preferencesUrl && `${c.fewer}: ${input.preferencesUrl}`,
    `${c.leave}: ${input.unsubscribeUrl}`,
    '',
    c.after,
    '',
    signoffText(input.locale),
    '',
    ...newsFooterText(input.locale, input.unsubscribeUrl, c.why, undefined, input.preferencesUrl),
  ]);
  return { subject: c.subject, html, text };
}

/** The magic link to the preferences page, for someone who asked for it on the website. */
export function preferencesLink(input: { locale: EmailLocale; url: string; assetBase?: string }): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].preferences;
  const t = emailCopy[input.locale];
  const body = [
    eyebrow(ctx, esc(t.news.eyebrow)),
    heading(ctx, esc(c.linkHeading)),
    para(ctx, esc(c.linkIntro)),
    button(ctx, input.url, esc(c.linkCta)),
    para(ctx, esc(c.linkIgnore), { muted: true, size: 15 }),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, host: { friend: 'zippy', pose: 'idle', mood: 'prefs' }, title: c.linkSubject, preheader: c.linkPreheader, logoAlt: t.logoAlt, body, footer: newsFooter(ctx, null, c.linkWhy) });
  const text = textBlock([c.linkHeading, '', c.linkIntro, '', `${c.linkCta}:`, input.url, '', c.linkIgnore, '', signoffText(input.locale), '', ...newsFooterText(input.locale, null, c.linkWhy)]);
  return { subject: c.linkSubject, html, text };
}

export type Topics = { releases: boolean; tips: boolean; events: boolean };
export const topicKeys = ['releases', 'tips', 'events'] as const;

const localeNames: Record<EmailLocale, string> = { en: 'English', fr: 'Français', de: 'Deutsch', es: 'Español', ja: '日本語', 'pt-BR': 'Português (Brasil)' };

/** The preferences page: three topic switches (styled as brick toggles), language, save; unsubscribe below. */
export function preferencesPage(locale: EmailLocale, actionUrl: string, topics: Topics, unsubscribeUrl: string, saved = false): string {
  const ctx = ctxOf(locale);
  const c = lifecycleCopy[locale].preferences;
  const f = fonts(locale);
  const toggle = (key: (typeof topicKeys)[number], i: number) => {
    const [label, hint] = c.topics[key];
    return `<label for="t-${key}" style="display:block;margin:0 0 10px;padding:14px 16px;border:2px solid ${color.paperEdge};border-left:8px solid ${['#3b8bf0', '#26b9b0', '#7b5cf0'][i]};border-radius:14px;background:#ffffff;cursor:pointer;">
<input type="checkbox" id="t-${key}" name="${key}" value="yes"${topics[key] ? ' checked' : ''} style="width:22px;height:22px;margin:0 10px 0 0;vertical-align:-4px;accent-color:${color.panel};">
<span style="font-family:${f.display};font-size:18px;font-weight:600;color:${color.onPaper};">${esc(label)}</span>
<span style="display:block;margin:4px 0 0 32px;font-family:${f.text};font-size:15px;line-height:1.5;color:${color.onPaper2};">${esc(hint)}</span></label>`;
  };
  const options = (Object.keys(localeNames) as EmailLocale[]).map((l) => `<option value="${l}"${l === locale ? ' selected' : ''}>${esc(localeNames[l])}</option>`).join('');
  return lifecyclePage(
    locale,
    c.pageTitle,
    [
      eyebrow(ctx, esc(emailCopy[locale].news.eyebrow)),
      heading(ctx, esc(c.pageTitle)),
      saved ? panel(ctx, para(ctx, `✓ ${esc(c.saved)}`), '#3fc544') : '',
      para(ctx, esc(c.pageIntro)),
      `<form method="post" action="${esc(actionUrl)}" style="margin:0 0 22px;">
<fieldset style="border:0;margin:0 0 18px;padding:0;"><legend style="margin:0 0 10px;padding:0;font-family:${f.text};font-size:13px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:${color.panel};">${esc(c.topicsTitle)}</legend>
${topicKeys.map(toggle).join('\n')}
</fieldset>
<label for="lang" style="display:block;margin:0 0 6px;font-family:${f.text};font-size:13px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:${color.panel};">${esc(c.language)}</label>
<select id="lang" name="locale" style="display:block;box-sizing:border-box;width:100%;max-width:320px;min-height:44px;margin:0 0 20px;padding:8px 12px;border:2px solid ${color.paperEdge};border-radius:12px;background:#ffffff;color:${color.onPaper};font-family:${f.text};font-size:16px;">${options}</select>
${formButton(ctx, c.save)}
</form>`,
      rule(),
      para(ctx, link(unsubscribeUrl, esc(c.unsubscribeAll)), { size: 16 }),
    ].join('\n'),
  );
}

/** The page that asks for an address and emails the preferences link. */
export function preferencesAskPage(locale: EmailLocale, actionUrl: string, sent = false): string {
  const ctx = ctxOf(locale);
  const c = lifecycleCopy[locale].preferences;
  const f = fonts(locale);
  return lifecyclePage(
    locale,
    c.askTitle,
    [
      eyebrow(ctx, esc(emailCopy[locale].news.eyebrow)),
      heading(ctx, esc(c.askTitle)),
      sent
        ? panel(ctx, para(ctx, esc(c.askSent)), '#3fc544')
        : `${para(ctx, esc(c.askIntro))}<form method="post" action="${esc(actionUrl)}" style="margin:0 0 22px;">
<label for="email" style="display:block;margin:0 0 6px;font-family:${f.text};font-size:16px;font-weight:700;color:${color.onPaper};">${esc(c.askEmail)}</label>
<input id="email" name="email" type="email" required autocomplete="email" maxlength="254" style="display:block;box-sizing:border-box;width:100%;min-height:48px;margin:0 0 16px;padding:10px 14px;border:2px solid ${color.paperEdge};border-radius:12px;background:#ffffff;color:${color.onPaper};font-family:${f.text};font-size:17px;">
<input type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;">
${formButton(ctx, c.askSend)}
</form>`,
    ].join('\n'),
  );
}

// ---------------------------------------------------------------------------------------
// Account security and notices (community members)

export type AccountLinks = { manageUrl: string; assetBase?: string };

function securityShell(ctx: Ctx, title: string, preheader: string, body: string, why: string, manageUrl: string, mood: Mood = 'security'): string {
  // Peach, the careful planner, keeps watch over the account.
  return shell({ ctx, host: { friend: 'peach', pose: mood === 'security' ? 'think' : 'idle', mood }, title, preheader, logoAlt: emailCopy[ctx.locale].logoAlt, body, footer: communityFooter(ctx, why, { manageUrl }) });
}

/** Peach opens every account email now, so the old padlock tile is gone. */
const shield = (_ctx: Ctx) => '';

export function passkeyAdded(input: { locale: EmailLocale; nickname: string; at: Date | string } & AccountLinks): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].passkeyAdded;
  const body = [
    shield(ctx),
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(c.heading)),
    para(ctx, esc(c.intro(input.nickname))),
    panel(ctx, field(ctx, esc(c.when), esc(when(input.locale, input.at)))),
    para(ctx, esc(c.notYou)),
    button(ctx, input.manageUrl, esc(c.cta)),
    signoff(ctx),
  ].join('\n');
  const html = securityShell(ctx, c.subject, c.preheader, body, c.why, input.manageUrl);
  const text = textBlock([c.heading, '', c.intro(input.nickname), `${c.when}: ${when(input.locale, input.at)}`, '', c.notYou, '', `${c.cta}: ${input.manageUrl}`, '', signoffText(input.locale), '', ...communityFooterText(input.locale, c.why, { manageUrl: input.manageUrl })]);
  return { subject: c.subject, html, text };
}

export function newSignIn(input: { locale: EmailLocale; device: string; at: Date | string; signOutUrl: string } & AccountLinks): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].newSignIn;
  const body = [
    shield(ctx),
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(c.heading)),
    para(ctx, esc(c.intro)),
    panel(ctx, field(ctx, esc(c.device), esc(input.device)) + field(ctx, esc(c.when), esc(when(input.locale, input.at)))),
    para(ctx, esc(c.fine)),
    para(ctx, `<strong>${esc(c.notYou)}</strong>`),
    button(ctx, input.signOutUrl, esc(c.cta)),
    ghostButton(ctx, input.manageUrl, esc(c.manage)),
    signoff(ctx),
  ].join('\n');
  const html = securityShell(ctx, c.subject, c.preheader, body, c.why, input.manageUrl);
  const text = textBlock([c.heading, '', c.intro, '', `${c.device}: ${input.device}`, `${c.when}: ${when(input.locale, input.at)}`, '', c.fine, c.notYou, `${c.cta}: ${input.signOutUrl}`, '', signoffText(input.locale), '', ...communityFooterText(input.locale, c.why, { manageUrl: input.manageUrl })]);
  return { subject: c.subject, html, text };
}

export function signOutPage(locale: EmailLocale, actionUrl: string, done = false): string {
  const ctx = ctxOf(locale);
  const c = lifecycleCopy[locale].newSignIn;
  if (done) return simplePage(locale, c.doneTitle, c.doneBody, { href: communityUrl(locale), label: 'OutBrick Community' });
  return lifecyclePage(locale, c.pageTitle, [shield(ctx), heading(ctx, esc(c.pageTitle)), para(ctx, esc(c.pageBody)), `<form method="post" action="${esc(actionUrl)}" style="margin:8px 0 22px;">${formButton(ctx, c.pageButton)}</form>`].join('\n'));
}

/** Sent to the address the account had, just before it is erased. No manage link: the account is gone. */
export function accountDeleted(input: { locale: EmailLocale; assetBase?: string }): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].accountDeleted;
  const t = emailCopy[input.locale];
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(c.heading)),
    para(ctx, esc(c.intro)),
    bricks(ctx, c.gone.map((s) => ({ title: esc(s.title), body: esc(s.body) }))),
    para(ctx, esc(c.stays)),
    para(ctx, esc(c.newsletter), { muted: true, size: 16 }),
    para(ctx, `<strong>${esc(c.mistake)}</strong>`),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, host: { friend: 'peach', pose: 'idle', mood: 'bye' }, title: c.subject, preheader: c.preheader, logoAlt: t.logoAlt, body, footer: supportFooter(ctx, c.why, 'account-deleted') });
  const text = textBlock([c.heading, '', c.intro, '', ...c.gone.map((s) => `* ${s.title} ${s.body}`), '', c.stays, '', c.newsletter, '', c.mistake, '', signoffText(input.locale), '', ...supportFooterText(input.locale, c.why, 'account-deleted')]);
  return { subject: c.subject, html, text };
}

export const EXPORT_LINK_HOURS = 24;

export function dataExport(input: { locale: EmailLocale; downloadUrl: string } & AccountLinks): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].dataExport;
  const body = [
    shield(ctx),
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(c.heading)),
    para(ctx, esc(c.intro)),
    button(ctx, input.downloadUrl, `⬇ ${esc(c.cta)}`),
    para(ctx, esc(c.expiry(EXPORT_LINK_HOURS)), { muted: true, size: 15 }),
    para(ctx, esc(c.notYou), { size: 16 }),
    signoff(ctx),
  ].join('\n');
  const html = securityShell(ctx, c.subject, c.preheader, body, c.why, input.manageUrl, 'notice');
  const text = textBlock([c.heading, '', c.intro, '', `${c.cta}: ${input.downloadUrl}`, c.expiry(EXPORT_LINK_HOURS), '', c.notYou, '', signoffText(input.locale), '', ...communityFooterText(input.locale, c.why, { manageUrl: input.manageUrl })]);
  return { subject: c.subject, html, text };
}

export type PolicyInput = {
  locale: EmailLocale;
  policy: 'privacy' | 'terms';
  effective: string;
  changes: string[];
  audience: 'member' | 'news';
  manageUrl?: string;
  unsubscribeUrl?: string;
  assetBase?: string;
};

/** A plain-language summary of a changed privacy policy or terms, before it takes effect. */
export function policyNotice(input: PolicyInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = lifecycleCopy[input.locale].policy;
  const t = emailCopy[input.locale];
  const name = c.names[input.policy];
  const date = dateOnly(input.locale, input.effective);
  const url = sitePath(input.locale, input.policy === 'privacy' ? '/privacy' : '/terms');
  const changes = input.changes.map((x) => x.trim()).filter(Boolean).slice(0, 10);
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(c.heading(name))),
    para(ctx, esc(c.intro(date))),
    heading(ctx, esc(c.changesTitle), 3),
    bricks(ctx, changes.map((x) => ({ title: '', body: inlineMarkdown(x) }))),
    button(ctx, url, esc(c.cta)),
    para(ctx, esc(c.noAction), { muted: true, size: 16 }),
    signoff(ctx),
  ].join('\n');
  const why = input.audience === 'member' ? c.whyMember : c.whyNews;
  const footerHtml =
    input.audience === 'member' && input.manageUrl ? communityFooter(ctx, why, { manageUrl: input.manageUrl }) : newsFooter(ctx, input.unsubscribeUrl ?? null, why);
  const footerTxt =
    input.audience === 'member' && input.manageUrl ? communityFooterText(input.locale, why, { manageUrl: input.manageUrl }) : newsFooterText(input.locale, input.unsubscribeUrl ?? null, why);
  const html = shell({ ctx, host: { friend: 'peach', pose: 'idle', mood: 'notice' }, title: c.subject(name), preheader: c.preheader(date), logoAlt: t.logoAlt, body, footer: footerHtml });
  const text = textBlock([c.heading(name), '', c.intro(date), '', `${c.changesTitle}:`, ...changes.map((x) => `* ${plainMarkdown(x)}`), '', `${c.cta}: ${url}`, '', c.noAction, '', signoffText(input.locale), '', ...footerTxt]);
  return { subject: c.subject(name), html, text };
}

// ---------------------------------------------------------------------------------------
// Team copy: a player answered "not yet", or left a comment.

export function teamCaseUpdate(input: { ref: string; caseUrl: string; solved?: boolean; rating?: number; comment?: string; reopened: boolean; locale: EmailLocale; assetBase?: string }): Rendered {
  const ctx = ctxOf('en', input.assetBase);
  const subject = `${input.reopened ? 'Reopened' : 'Feedback'}: ${input.ref}${typeof input.rating === 'number' ? ` · ${input.rating}/5` : ''}`;
  const body = [
    eyebrow(ctx, input.reopened ? 'Case reopened' : 'Player feedback', input.reopened ? '#e2352f' : color.panel),
    caseChip(ctx, input.ref),
    heading(ctx, esc(input.reopened ? 'The player says it isn’t solved.' : 'A player answered the feedback request.')),
    panel(
      ctx,
      [
        input.solved !== undefined ? field(ctx, 'Solved', input.solved ? 'Yes' : 'No') : '',
        typeof input.rating === 'number' ? field(ctx, 'Rating', `${'★'.repeat(input.rating)}${'☆'.repeat(5 - input.rating)} (${input.rating}/5)`) : '',
        input.comment?.trim() ? field(ctx, 'Comment', escLines(input.comment)) : '',
        field(ctx, 'Language', esc(input.locale)),
      ].join(''),
    ),
    button(ctx, input.caseUrl, 'Open the case'),
  ].join('\n');
  const html = shell({ ctx, nav: false, title: subject, preheader: input.comment?.slice(0, 120) || subject, logoAlt: 'OutBrick', body, footer: `<p style="margin:0;font-family:${fonts('en').text};font-size:15px;color:${color.lilac};">Sent to the OutBrick team by the support feedback flow.</p>` });
  const text = textBlock([subject, '', input.solved !== undefined ? `Solved: ${input.solved ? 'yes' : 'no'}` : null, typeof input.rating === 'number' ? `Rating: ${input.rating}/5` : null, input.comment ? `Comment: ${input.comment}` : null, '', `Open the case: ${input.caseUrl}`]);
  return { subject, html, text };
}
