// The six OutBrick emails. Each returns { subject, html, text }.
//
// Every value that came from a visitor or an issue file is escaped here (esc / escLines /
// inlineMarkdown), never in the copy catalogue; the text/plain part gets the raw value.

import { contactTopics } from '../lib/business.ts';
import { appStoreUrl } from '../lib/app-store-url.ts';
import { publicPages } from '../lib/i18n/public-pages.ts';
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
  footerBlock,
  heading,
  inlineMarkdown,
  link,
  panel,
  para,
  plainMarkdown,
  rule,
  safeUrl,
  shell,
  textBlock,
  type Ctx,
} from './core.ts';
import { emailCopy, greetingName, type EmailLocale } from './i18n.ts';

export type Rendered = { subject: string; html: string; text: string };

const storefront: Record<EmailLocale, string> = { en: 'us', fr: 'fr', de: 'de', es: 'es', ja: 'jp', 'pt-BR': 'br' };

/** An English site label (a contact topic, a job title) in the email's language, from the site's own dictionary. */
export function siteLabel(locale: EmailLocale, english: string): string {
  if (locale === 'en') return english;
  return publicPages[locale][english] ?? english;
}

export function topicLabel(locale: EmailLocale, value: string): string {
  const topic = contactTopics.find((t) => t.value === value);
  return topic ? siteLabel(locale, topic.label) : siteLabel(locale, 'Other');
}

function sitePath(locale: EmailLocale, path: string): string {
  const p = locale === 'en' ? path : path === '/' ? `/${locale}` : `/${locale}${path}`;
  return `${SITE}${p}`;
}

function store(locale: EmailLocale, campaign: string): string {
  return appStoreUrl(`email-${campaign}`, storefront[locale]);
}

function ctxOf(locale: EmailLocale, assetBase = SITE): Ctx {
  return { locale, assetBase };
}

function signoff(ctx: Ctx): string {
  return para(ctx, `— ${esc(emailCopy[ctx.locale].signoff)}`, { margin: '4px 0 20px' });
}

/** The transactional footer: support, privacy, App Store; why this arrived; the tagline. */
function supportFooter(ctx: Ctx, why: string, campaign: string): string {
  const t = emailCopy[ctx.locale];
  return footerBlock(ctx, {
    links: [
      [esc(t.links.support), sitePath(ctx.locale, '/support')],
      [esc(t.links.privacy), sitePath(ctx.locale, '/privacy')],
      [esc(t.links.appStore), store(ctx.locale, campaign)],
    ],
    lines: [esc(why), `${esc(t.tagline)} · <a href="${sitePath(ctx.locale, '/')}" style="color:${color.title};text-decoration:underline;">www.outbrick.site</a>`],
  });
}

function supportFooterText(locale: EmailLocale, why: string, campaign: string): string[] {
  const t = emailCopy[locale];
  return [
    '—',
    `${t.links.support}: ${sitePath(locale, '/support')}`,
    `${t.links.privacy}: ${sitePath(locale, '/privacy')}`,
    `${t.links.appStore}: ${store(locale, campaign)}`,
    '',
    why,
    `${t.tagline} · https://www.outbrick.site`,
  ];
}

// ---------------------------------------------------------------------------------------
// Contact acknowledgement

export type ContactInput = {
  locale: EmailLocale;
  name: string;
  topic: string;
  message: string;
  device?: string;
  iosVersion?: string;
  appVersion?: string;
  assetBase?: string;
};

/** Bug reports and accessibility questions go further with a device and an iOS version. */
export function needsDeviceDetails(input: Pick<ContactInput, 'topic' | 'device' | 'iosVersion'>): boolean {
  return ['bug', 'accessibility'].includes(input.topic) && (!input.device?.trim() || !input.iosVersion?.trim());
}

export function contactAcknowledgement(input: ContactInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const t = emailCopy[input.locale];
  const c = t.contact;
  const name = greetingName(input.locale, input.name);
  const topic = topicLabel(input.locale, input.topic);
  const message = String(input.message ?? '').slice(0, 5000);
  const askDevice = needsDeviceDetails(input);
  const deviceLine = [input.device, input.iosVersion && `iOS ${input.iosVersion}`, input.appVersion && `OutBrick ${input.appVersion}`]
    .map((v) => (v ?? '').toString().trim())
    .filter(Boolean)
    .join(' · ');

  const body = [
    heading(ctx, esc(c.heading(name))),
    para(ctx, esc(c.intro)),
    panel(
      ctx,
      eyebrow(ctx, esc(c.copyTitle)) +
        field(ctx, esc(c.topic), esc(topic)) +
        (deviceLine ? field(ctx, esc(siteLabel(input.locale, 'Device')), esc(deviceLine)) : '') +
        field(ctx, esc(c.message), escLines(message)),
    ),
    askDevice ? panel(ctx, para(ctx, esc(c.device)), color.goldFoot) : '',
    para(ctx, esc(c.add)),
    rule(),
    para(ctx, esc(c.meanwhile)),
    button(ctx, sitePath(input.locale, '/support'), esc(c.cta)),
    signoff(ctx),
  ].join('\n');

  const html = shell({ ctx, title: c.subject, preheader: c.preheader, logoAlt: t.logoAlt, body, footer: supportFooter(ctx, c.why, 'contact') });
  const text = textBlock([
    c.heading(name),
    '',
    c.intro,
    '',
    `${c.copyTitle}`,
    `${c.topic}: ${topic}`,
    deviceLine && `${siteLabel(input.locale, 'Device')}: ${deviceLine}`,
    `${c.message}:`,
    message,
    '',
    askDevice && c.device,
    askDevice && '',
    c.add,
    '',
    `${c.meanwhile} ${sitePath(input.locale, '/support')}`,
    '',
    `— ${t.signoff}`,
    '',
    ...supportFooterText(input.locale, c.why, 'contact'),
  ]);
  return { subject: c.subject, html, text };
}

// ---------------------------------------------------------------------------------------
// Careers acknowledgement

export type CareersInput = { locale: EmailLocale; name: string; role: string; assetBase?: string };

export function careersAcknowledgement(input: CareersInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const t = emailCopy[input.locale];
  const c = t.careers;
  const name = greetingName(input.locale, input.name);
  const role = siteLabel(input.locale, String(input.role ?? '').trim().slice(0, 160)) || t.links.careers;
  const subject = c.subject(role);
  const body = [
    heading(ctx, esc(c.heading(name))),
    para(ctx, esc(c.intro(role))),
    panel(ctx, field(ctx, esc(c.role), `<strong>${esc(role)}</strong>`), color.panel),
    para(ctx, esc(c.next)),
    button(ctx, sitePath(input.locale, '/careers'), esc(c.cta)),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, title: subject, preheader: c.preheader, logoAlt: t.logoAlt, body, footer: supportFooter(ctx, c.why, 'careers') });
  const text = textBlock([
    c.heading(name),
    '',
    c.intro(role),
    '',
    `${c.role}: ${role}`,
    '',
    c.next,
    '',
    `${c.cta}: ${sitePath(input.locale, '/careers')}`,
    '',
    `— ${t.signoff}`,
    '',
    ...supportFooterText(input.locale, c.why, 'careers'),
  ]);
  return { subject, html, text };
}

// ---------------------------------------------------------------------------------------
// Affiliate acknowledgement

export type AffiliateInput = { locale: EmailLocale; name: string; code?: string; assetBase?: string };

const AFFILIATE_CODE = /^[A-Za-z0-9]{3,12}[0-9]{2}$/;

export function affiliateAcknowledgement(input: AffiliateInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const t = emailCopy[input.locale];
  const c = t.affiliate;
  const f = fonts(input.locale);
  const name = greetingName(input.locale, input.name);
  const raw = String(input.code ?? '').trim();
  const code = AFFILIATE_CODE.test(raw) ? raw.toUpperCase() : '';
  const shortLink = code ? `outbrick.site/r/${code.toLowerCase()}` : '';
  const body = [
    heading(ctx, esc(c.heading(name))),
    para(ctx, esc(c.intro)),
    code
      ? panel(
          ctx,
          field(ctx, esc(c.code), `<span style="font-family:${f.display};font-size:24px;font-weight:600;letter-spacing:0.06em;">${esc(code)}</span>`) +
            field(ctx, esc(c.link), `<span style="font-family:Menlo,Consolas,monospace;font-size:16px;">${esc(shortLink)}</span>`),
          color.goldFoot,
        )
      : '',
    code ? para(ctx, esc(c.wait)) : '',
    button(ctx, sitePath(input.locale, '/affiliates'), esc(c.cta)),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, title: c.subject, preheader: c.preheader, logoAlt: t.logoAlt, body, footer: supportFooter(ctx, c.why, 'affiliate') });
  const text = textBlock([
    c.heading(name),
    '',
    c.intro,
    '',
    code && `${c.code}: ${code}`,
    code && `${c.link}: ${shortLink}`,
    code && '',
    code && c.wait,
    code && '',
    `${c.cta}: ${sitePath(input.locale, '/affiliates')}`,
    '',
    `— ${t.signoff}`,
    '',
    ...supportFooterText(input.locale, c.why, 'affiliate'),
  ]);
  return { subject: c.subject, html, text };
}

// ---------------------------------------------------------------------------------------
// Newsletter: shared footer

function newsFooter(ctx: Ctx, unsubscribe: string | null, why: string, address?: string): string {
  const t = emailCopy[ctx.locale];
  const links: [string, string][] = [];
  if (unsubscribe) links.push([esc(t.news.unsubscribe), unsubscribe]);
  links.push([esc(t.news.privacy), sitePath(ctx.locale, '/privacy')]);
  links.push([esc(t.links.appStore), store(ctx.locale, 'newsletter')]);
  const lines = [esc(why)];
  if (address) lines.push(esc(address));
  lines.push(`${esc(t.tagline)} · <a href="${sitePath(ctx.locale, '/')}" style="color:${color.title};text-decoration:underline;">www.outbrick.site</a>`);
  return footerBlock(ctx, { links, lines });
}

function newsFooterText(locale: EmailLocale, unsubscribe: string | null, why: string, address?: string): string[] {
  const t = emailCopy[locale];
  return [
    '—',
    why,
    unsubscribe ? `${t.news.unsubscribe}: ${unsubscribe}` : null,
    `${t.news.privacy}: ${sitePath(locale, '/privacy')}`,
    address ?? null,
    `${t.tagline} · https://www.outbrick.site`,
  ].filter((v): v is string => v !== null);
}

// ---------------------------------------------------------------------------------------
// Newsletter confirm (double opt-in)

export type ConfirmInput = { locale: EmailLocale; confirmUrl: string; assetBase?: string };

export function newsletterConfirm(input: ConfirmInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const t = emailCopy[input.locale];
  const c = t.confirm;
  const url = input.confirmUrl;
  const body = [
    eyebrow(ctx, esc(c.eyebrow)),
    heading(ctx, esc(c.heading)),
    para(ctx, esc(c.intro)),
    button(ctx, url, esc(c.cta), 300),
    para(ctx, esc(c.expiry), { muted: true, size: 16, margin: '0 0 6px' }),
    para(ctx, `<a class="ob-link" href="${esc(url)}" style="color:${color.link};text-decoration:underline;word-break:break-all;">${esc(url)}</a>`, { size: 16 }),
    rule(),
    para(ctx, esc(c.ignore)),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, title: c.subject, preheader: c.preheader, logoAlt: t.logoAlt, body, footer: newsFooter(ctx, null, c.why) });
  const text = textBlock([c.heading, '', c.intro, '', `${c.cta}:`, url, '', c.expiry.replace(/:$/, '.'), '', c.ignore, '', `— ${t.signoff}`, '', ...newsFooterText(input.locale, null, c.why)]);
  return { subject: c.subject, html, text };
}

// ---------------------------------------------------------------------------------------
// Newsletter welcome

export type WelcomeInput = { locale: EmailLocale; unsubscribeUrl: string; assetBase?: string };

export function newsletterWelcome(input: WelcomeInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const t = emailCopy[input.locale];
  const c = t.welcome;
  const body = [
    eyebrow(ctx, esc(t.news.eyebrow)),
    heading(ctx, esc(c.heading)),
    para(ctx, esc(c.intro)),
    bricks(ctx, c.promises.map((p) => ({ title: esc(p.title), body: esc(p.body) }))),
    button(ctx, sitePath(input.locale, '/whats-new'), esc(c.cta)),
    para(ctx, `${esc(c.leave)} ${link(input.unsubscribeUrl, esc(t.news.unsubscribe))}`, { muted: true, size: 16 }),
    signoff(ctx),
  ].join('\n');
  const html = shell({ ctx, title: c.subject, preheader: c.preheader, logoAlt: t.logoAlt, body, footer: newsFooter(ctx, input.unsubscribeUrl, t.news.why) });
  const text = textBlock([
    c.heading,
    '',
    c.intro,
    '',
    ...c.promises.map((p) => `* ${p.title} ${p.body}`),
    '',
    `${c.cta}: ${sitePath(input.locale, '/whats-new')}`,
    '',
    c.leave,
    '',
    `— ${t.signoff}`,
    '',
    ...newsFooterText(input.locale, input.unsubscribeUrl, t.news.why),
  ]);
  return { subject: c.subject, html, text };
}

// ---------------------------------------------------------------------------------------
// Newsletter campaign

export type IssueImage = { src: string; alt: string; width: number; height: number };
export type IssueStory = { title: string; body: string; image?: IssueImage; link?: { label: string; href: string } };
export type IssueContent = {
  subject: string;
  preheader: string;
  hero: { eyebrow?: string; title: string; body: string; image?: IssueImage };
  stories: IssueStory[];
  release?: { version: string; title: string; items: string[]; link?: { label: string; href: string } };
  cta?: { label: string; href: string };
};

export type CampaignInput = {
  locale: EmailLocale;
  issue: IssueContent;
  /** Per-recipient signed link, or Resend's {{{RESEND_UNSUBSCRIBE_URL}}} in a broadcast. */
  unsubscribeUrl: string;
  /** The sender's postal address line, which commercial email must carry. */
  address: string;
  assetBase?: string;
};

function img(ctx: Ctx, image: IssueImage, width: number, cls: string): string {
  const src = image.src.startsWith('https://') ? image.src : `${ctx.assetBase}${image.src.startsWith('/') ? '' : '/'}${image.src}`;
  const height = Math.round((width * image.height) / image.width);
  return `<img class="${cls}" src="${esc(src)}" width="${width}" height="${height}" alt="${esc(image.alt)}" style="display:block;width:${width}px;max-width:100%;height:auto;border:0;border-radius:14px;">`;
}

function paragraphs(ctx: Ctx, markdown: string): string {
  return String(markdown ?? '')
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => para(ctx, inlineMarkdown(p)))
    .join('\n');
}

function story(ctx: Ctx, s: IssueStory, index: number): string {
  const f = fonts(ctx.locale);
  const textCol = `<div class="ob-col" style="display:inline-block;width:100%;max-width:${s.image ? 296 : 484}px;vertical-align:top;font-size:16px;">
${heading(ctx, esc(s.title), 3)}
${paragraphs(ctx, s.body)}
${s.link ? `<p style="margin:0 0 12px;font-family:${f.text};font-size:17px;line-height:1.5;font-weight:700;">${link(safeUrl(s.link.href), `${esc(s.link.label)} →`)}</p>` : ''}
</div>`;
  const imageCol = s.image
    ? `<div class="ob-col" style="display:inline-block;width:100%;max-width:184px;vertical-align:top;font-size:16px;"><div class="ob-col-img" style="padding:0 20px 0 0;">${img(ctx, s.image, 164, 'ob-story-img')}</div></div>`
    : '';
  const accent = ['#e2352f', '#26b9b0', '#7b5cf0', '#3b8bf0', '#3fc544', '#ffc53d'][index % 6];
  return `<table role="presentation" class="ob-card" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px;background:#ffffff;border:2px solid ${color.paperEdge};border-top:6px solid ${accent};border-radius:16px;">
<tr><td style="padding:18px 16px 6px;font-size:0;">
<!--[if mso]><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>${s.image ? '<td width="184" valign="top">' : '<td valign="top">'}<![endif]-->
${imageCol}${s.image ? '<!--[if mso]></td><td valign="top"><![endif]-->' : ''}
${textCol}
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>`;
}

function releaseBlock(ctx: Ctx, release: NonNullable<IssueContent['release']>): string {
  const t = emailCopy[ctx.locale];
  const f = fonts(ctx.locale);
  const items = release.items
    .map(
      (item) => `<tr><td valign="top" width="22" style="padding:3px 10px 8px 0;color:${color.gold};font-family:${f.display};font-size:17px;line-height:1.5;">■</td><td style="padding:0 0 8px;font-family:${f.text};font-size:17px;line-height:1.55;color:${color.lilac};">${inlineMarkdown(item, color.title)}</td></tr>`,
    )
    .join('\n');
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 24px;">
<tr><td bgcolor="${color.ink}" style="background:${color.ink};border-radius:16px;border-bottom:5px solid ${color.panelFoot};padding:24px 24px 14px;">
<p style="margin:0 0 8px;font-family:${f.text};font-size:13px;line-height:1.4;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:${color.gold};">${esc(t.news.whatsNew)} · ${esc(t.news.version(release.version))}</p>
<h2 style="margin:0 0 14px;font-family:${f.display};font-size:23px;line-height:1.25;font-weight:600;color:${color.title};">${esc(release.title)}</h2>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${items}</table>
${release.link ? `<p style="margin:6px 0 10px;font-family:${f.text};font-size:17px;line-height:1.5;font-weight:700;"><a href="${esc(safeUrl(release.link.href))}" style="color:${color.title};text-decoration:underline;">${esc(release.link.label)} →</a></p>` : ''}
</td></tr>
</table>`;
}

export function newsletterCampaign(input: CampaignInput): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const t = emailCopy[input.locale];
  const { issue } = input;
  const cta = issue.cta ?? { label: t.news.appStore, href: store(input.locale, 'newsletter') };
  const body = [
    eyebrow(ctx, esc(issue.hero.eyebrow ?? t.news.eyebrow)),
    heading(ctx, esc(issue.hero.title)),
    issue.hero.image ? `<div style="margin:0 0 20px;">${img(ctx, issue.hero.image, 520, 'ob-hero-img')}</div>` : '',
    paragraphs(ctx, issue.hero.body),
    ...issue.stories.slice(0, 3).map((s, i) => story(ctx, s, i)),
    issue.release ? releaseBlock(ctx, issue.release) : '',
    `<div style="text-align:center;">${button(ctx, safeUrl(cta.href), esc(cta.label), 320).replace('style="margin:8px 0 22px;"', 'align="center" style="margin:8px auto 22px;"')}</div>`,
    signoff(ctx),
  ].join('\n');
  const html = shell({
    ctx,
    title: issue.subject,
    preheader: issue.preheader,
    logoAlt: t.logoAlt,
    body,
    footer: newsFooter(ctx, input.unsubscribeUrl, t.news.why, input.address),
  });
  const text = textBlock([
    issue.hero.title,
    '',
    ...String(issue.hero.body).split(/\n\s*\n/).map((p) => `${plainMarkdown(p.trim())}\n`),
    ...issue.stories.slice(0, 3).flatMap((s) => [
      `## ${s.title}`,
      '',
      ...String(s.body).split(/\n\s*\n/).map((p) => `${plainMarkdown(p.trim())}\n`),
      s.link ? `${s.link.label}: ${safeUrl(s.link.href)}` : null,
      '',
    ]).filter((v): v is string => v !== null),
    issue.release && `## ${t.news.whatsNew} · ${t.news.version(issue.release.version)}: ${issue.release.title}`,
    ...(issue.release ? issue.release.items.map((item) => `* ${plainMarkdown(item)}`) : []),
    issue.release?.link && `${issue.release.link.label}: ${safeUrl(issue.release.link.href)}`,
    '',
    `${cta.label}: ${safeUrl(cta.href)}`,
    '',
    `— ${t.signoff}`,
    '',
    ...newsFooterText(input.locale, input.unsubscribeUrl, t.news.why, input.address),
  ]);
  return { subject: issue.subject, html, text };
}

// ---------------------------------------------------------------------------------------
// The unsubscribe confirmation page (a web page, drawn with the same shell)

export function unsubscribePage(locale: EmailLocale, actionUrl: string): string {
  const ctx = ctxOf(locale);
  const t = emailCopy[locale];
  const p = t.unsubscribePage;
  const f = fonts(locale);
  const body = [
    eyebrow(ctx, esc(t.news.eyebrow)),
    heading(ctx, esc(p.title)),
    para(ctx, esc(p.body)),
    `<form method="post" action="${esc(actionUrl)}" style="margin:8px 0 22px;"><button type="submit" class="ob-btn" style="cursor:pointer;background:${color.gold};color:${color.ink};font-family:${f.display};font-size:18px;line-height:22px;font-weight:600;padding:15px 30px 13px;border:0;border-radius:14px;border-bottom:4px solid ${color.goldFoot};">${esc(p.button)}</button></form>`,
    para(ctx, link(sitePath(locale, '/newsletter'), esc(p.keep))),
  ].join('\n');
  return shell({
    ctx,
    title: p.title,
    preheader: p.body,
    logoAlt: t.logoAlt,
    body,
    footer: footerBlock(ctx, { links: [[esc(t.news.privacy), sitePath(locale, '/privacy')]], lines: [`${esc(t.tagline)} · www.outbrick.site`] }),
    head: '<meta name="robots" content="noindex, nofollow">\n',
  });
}

/** A scanner may read this page; only the reader's POST subscribes them. */
export function confirmPage(locale: EmailLocale, actionUrl: string): string {
  const ctx = ctxOf(locale);
  const t = emailCopy[locale];
  const p = t.confirm;
  const f = fonts(locale);
  return shell({
    ctx,
    title: p.subject,
    preheader: p.intro,
    logoAlt: t.logoAlt,
    body: [
      eyebrow(ctx, esc(p.eyebrow)),
      heading(ctx, esc(p.subject)),
      para(ctx, esc(p.intro)),
      `<form method="post" action="${esc(actionUrl)}" style="margin:8px 0 22px;"><button type="submit" class="ob-btn" style="cursor:pointer;background:${color.gold};color:${color.ink};font-family:${f.display};font-size:18px;line-height:22px;font-weight:600;padding:15px 30px 13px;border:0;border-radius:14px;border-bottom:4px solid ${color.goldFoot};">${esc(p.cta)}</button></form>`,
      para(ctx, esc(p.ignore)),
    ].join('\n'),
    footer: footerBlock(ctx, { links: [[esc(t.news.privacy), sitePath(locale, '/privacy')]], lines: [`${esc(t.tagline)} · www.outbrick.site`] }),
    head: '<meta name="robots" content="noindex, nofollow">\n',
  });
}
