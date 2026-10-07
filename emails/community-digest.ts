// The OutBrick Community's phase-2 emails, in the shared shell (emails/core.ts):
//
//   communityWeeklyDigest  Mondays, opt-in (emailPrefs.digest): the week's top threads in each
//                          followed category, new release posts, and the member's own threads
//                          that nobody has answered yet. netlify/community/digest.ts sends it.
//   communityReplyBounce   sent back when a reply by email could not be posted, with the reason
//                          and the text, so nothing the member wrote is lost.
//
// Every member-supplied value (names, titles, the reply's text) is escaped here.

import { bricks, button, color, esc, escLines, eyebrow, field, fonts, heading, link, panel, para, rule, shell, textBlock } from './core.ts';
import { emailCopy, type EmailLocale } from './i18n.ts';
import { communityCopy } from './community-i18n.ts';
import { clip, ctxOf, footer, footerText, signoff, type FooterLinks } from './community.ts';
import { bounceCopy, categoryNames, weeklyDigestCopy, type BounceReason, type CategoryKindName } from './community-p2-i18n.ts';
import type { Rendered } from './templates.ts';

export { bounceCopy, categoryNames, replyHints, weeklyDigestCopy, type BounceReason, type CategoryKindName } from './community-p2-i18n.ts';

export type DigestThread = { title: string; url: string; replies: number; votes?: number };

export type WeeklyDigestInput = FooterLinks & {
  locale: EmailLocale;
  name: string;
  /** Followed categories with their top threads of the week; empty categories are left out. */
  categories: { kind: CategoryKindName; threads: DigestThread[] }[];
  releases: { version: string; url: string }[];
  unanswered: DigestThread[];
  communityUrl: string;
  assetBase?: string;
};

/** True when there is anything to send: an empty digest is never sent. */
export const digestHasContent = (input: Pick<WeeklyDigestInput, 'categories' | 'releases' | 'unanswered'>) =>
  input.releases.length > 0 || input.unanswered.length > 0 || input.categories.some((c) => c.threads.length > 0);

export function communityWeeklyDigest(input: WeeklyDigestInput): Rendered {
  const { locale } = input;
  const ctx = ctxOf(locale, input.assetBase);
  const f = fonts(locale);
  const c = communityCopy[locale];
  const d = weeklyDigestCopy[locale];
  const name = String(input.name ?? '').replace(/\s+/g, ' ').trim().slice(0, 40);
  const meta = (t: DigestThread) => [d.replies(t.replies), t.votes ? d.votes(t.votes) : ''].filter(Boolean).join(' · ');
  const threadLine = (t: DigestThread) =>
    `<p class="ob-text" style="margin:0 0 10px;font-family:${f.text};font-size:17px;line-height:1.5;color:${color.onPaper};">${link(t.url, esc(clip(t.title, 120)))}<br><span class="ob-muted" style="font-size:15px;color:${color.onPaper2};">${esc(meta(t))}</span></p>`;
  const categories = input.categories.filter((cat) => cat.threads.length);
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(d.heading)),
    para(ctx, esc(d.intro(name))),
    input.releases.length
      ? heading(ctx, esc(d.releasesTitle), 2) + bricks(ctx, input.releases.map((r) => ({ title: link(r.url, esc(d.release(r.version))), body: '' })))
      : '',
    ...categories.map((cat) => heading(ctx, esc(d.categoryTitle(categoryNames[locale][cat.kind])), 2) + panel(ctx, cat.threads.map(threadLine).join('\n'))),
    input.unanswered.length
      ? heading(ctx, esc(d.unansweredTitle), 2) + panel(ctx, input.unanswered.map(threadLine).join('\n'), color.goldFoot) + para(ctx, esc(d.unansweredNote), { muted: true, size: 16 })
      : '',
    button(ctx, input.communityUrl, esc(d.cta)),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, title: d.subject, preheader: d.preheader, logoAlt: emailCopy[locale].logoAlt, body, footer: footer(ctx, d.why, input) });
  const textThread = (t: DigestThread) => [`* ${clip(t.title, 120)} (${meta(t)})`, `  ${t.url}`];
  const text = textBlock([
    d.heading,
    '',
    d.intro(name),
    '',
    ...(input.releases.length ? [`## ${d.releasesTitle}`, '', ...input.releases.flatMap((r) => [`* ${d.release(r.version)}`, `  ${r.url}`]), ''] : []),
    ...categories.flatMap((cat) => [`## ${d.categoryTitle(categoryNames[locale][cat.kind])}`, '', ...cat.threads.flatMap(textThread), '']),
    ...(input.unanswered.length ? [`## ${d.unansweredTitle}`, '', ...input.unanswered.flatMap(textThread), '', d.unansweredNote, ''] : []),
    `${d.cta}: ${input.communityUrl}`,
    '',
    `— ${emailCopy[locale].signoff}`,
    '',
    ...footerText(locale, d.why, input),
  ]);
  return { subject: d.subject, html, text };
}

export type ReplyBounceInput = {
  locale: EmailLocale;
  reason: BounceReason;
  threadTitle: string;
  threadUrl: string;
  /** The text the member sent (after quotes were cut), shown back to them. */
  text: string;
  manageUrl: string;
  assetBase?: string;
};

export function communityReplyBounce(input: ReplyBounceInput): Rendered {
  const { locale } = input;
  const ctx = ctxOf(locale, input.assetBase);
  const c = communityCopy[locale];
  const b = bounceCopy[locale];
  const title = clip(input.threadTitle, 90);
  const subject = b.subject(title);
  const sent = clip(String(input.text ?? ''), 4000);
  const links = { manageUrl: input.manageUrl };
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(b.heading)),
    para(ctx, esc(b.intro)),
    panel(ctx, para(ctx, esc(b.reasons[input.reason])), color.goldFoot),
    sent ? panel(ctx, field(ctx, esc(b.yourText), escLines(sent))) : '',
    button(ctx, input.threadUrl, esc(b.cta)),
    rule(),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, title: subject, preheader: b.preheader, logoAlt: emailCopy[locale].logoAlt, body, footer: footer(ctx, b.why, links) });
  const text = textBlock([
    b.heading,
    '',
    b.intro,
    b.reasons[input.reason],
    '',
    sent && `${b.yourText}:`,
    sent || null,
    sent && '',
    `${b.cta}: ${input.threadUrl}`,
    '',
    `— ${emailCopy[locale].signoff}`,
    '',
    ...footerText(locale, b.why, links),
  ]);
  return { subject, html, text };
}
