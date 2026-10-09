// The OutBrick email shell: the parts every message shares.
//
// Email HTML is not web HTML. Gmail strips <style> in some of its apps, desktop Outlook renders
// with Word, Yahoo rewrites class names, and dark mode is applied by the client as it sees fit.
// So everything here is:
//
//   - table-based with role="presentation", one 600 px column (a "fluid hybrid" layout: a
//     max-width div that Outlook sees as a fixed 600 px ghost table), stacking on phones
//     without needing a media query;
//   - inline-styled first, with a <style> block only as progressive enhancement (dark mode,
//     smaller gutters on phones, web fonts);
//   - in the site's palette (app/styles/editorial.css): indigo chrome, a cream/paper reading
//     surface, gold for the one action, and the six-colour brick "course" stripe. Every text
//     colour clears 4.5:1 against the surface it sits on, in both schemes.
//
// Plain TypeScript with erasable syntax only, and `.ts` import specifiers, so the same files run
// under `node --experimental-strip-types` (the build's preview step, scripts/send-newsletter.mjs)
// and are bundled by esbuild into the Netlify functions.

import type { EmailLocale } from './i18n.ts';
import { brandFooter, navBlock } from './brand.ts';
import { stage, stageCss, studs, type Host } from './friends.ts';

export const SITE = 'https://www.outbrick.site';

/** The site's tokens, as the email needs them. */
export const color = {
  ink: '#1a1350', // the page chrome, deepest indigo
  ink2: '#221a62',
  panel: '#4b3fc9',
  panelFoot: '#2f2696',
  lilac: '#c9c2ff', // text on ink: 10.9:1
  title: '#fff6d6', // headings on ink
  cream: '#fff3dd', // the outer page
  paper: '#fffaf1', // the reading surface
  paperEdge: '#efe2c6',
  onPaper: '#1d1747', // body text on paper: 15.6:1
  onPaper2: '#4f4a6e', // secondary text on paper: 8.0:1
  rule: '#e6d8b8',
  gold: '#ffc53d', // the button face; ink on gold is 11.5:1
  goldFoot: '#b8780a',
  link: '#3b2fb0', // links on paper: 8.4:1
  // dark scheme
  darkPage: '#120e33',
  darkPaper: '#221a62',
  darkText: '#f3f1fc', // on darkPaper: 14.2:1
  darkMuted: '#c9c2ff', // on darkPaper: 9.3:1
  darkLink: '#ffd66e', // on darkPaper: 11.0:1
} as const;

/** The brick course: red, gold, teal, violet, blue, green — the stripe under every header. */
export const course = ['#e2352f', '#ffc53d', '#26b9b0', '#7b5cf0', '#3b8bf0', '#3fc544'] as const;

const displayLatin = `'Fredoka', 'Arial Rounded MT Bold', 'Trebuchet MS', Arial, sans-serif`;
const textLatin = `'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`;
const jaStack = `'Hiragino Maru Gothic ProN', 'Hiragino Sans', 'Yu Gothic', Meiryo, 'Noto Sans JP', sans-serif`;

export function fonts(locale: EmailLocale) {
  if (locale === 'ja') return { display: `'Fredoka', ${jaStack}`, text: `'Figtree', ${jaStack}` };
  return { display: displayLatin, text: textLatin };
}

// ---------------------------------------------------------------------------------------
// Escaping. Every value that came from a visitor goes through esc() before it touches markup.

const entities: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** A visitor-supplied value as text: strings, numbers and booleans as written, anything else empty. */
export function toText(value: unknown): string {
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'bigint') return String(value);
  return '';
}

export function esc(value: unknown): string {
  return toText(value).replace(/[&<>"']/g, (ch) => entities[ch]);
}

/** Escaped, with line breaks kept as <br> (white-space: pre-wrap is not safe in Outlook). */
export function escLines(value: unknown): string {
  return esc(toText(value).replace(/\r\n?/g, '\n')).replace(/\n/g, '<br>');
}

/** Only http(s) URLs and site-relative paths survive; anything else (javascript:, data:) becomes the home page. */
export function safeUrl(value: string, base = SITE): string {
  const v = String(value ?? '').trim();
  if (v.startsWith('/') && !v.startsWith('//')) return base + v;
  if (/^https:\/\/[^\s"'<>]+$/i.test(v) || /^\{\{\{RESEND_UNSUBSCRIBE_URL\}\}\}$/.test(v)) return v;
  return SITE;
}

/**
 * A deliberately tiny inline Markdown for issue files: **bold**, *italic* and [text](url),
 * applied after escaping, so an issue file can never inject markup.
 */
export function inlineMarkdown(value: string, linkColor: string = color.link): string {
  return esc(value)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text: string, url: string) =>
      `<a class="ob-link" href="${esc(safeUrl(url.replace(/&amp;/g, '&')))}" style="color:${linkColor};text-decoration:underline;">${text}</a>`,
    );
}

/** The same Markdown reduced to plain text: "text (url)". */
export function plainMarkdown(value: string): string {
  return String(value ?? '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1$2')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text: string, url: string) => `${text} (${safeUrl(url)})`);
}

// ---------------------------------------------------------------------------------------
// Building blocks. Each returns an HTML string for the inside of the paper panel.

export type Ctx = { locale: EmailLocale; assetBase: string };

export function heading(ctx: Ctx, text: string, level: 1 | 2 | 3 = 1): string {
  const f = fonts(ctx.locale);
  const size = level === 1 ? 30 : level === 2 ? 23 : 19;
  return `<h${level} class="ob-h${level === 1 ? ' ob-h1' : ''}" style="margin:0 0 14px;font-family:${f.display};font-size:${size}px;line-height:1.25;font-weight:600;color:${color.onPaper};mso-line-height-rule:exactly;overflow-wrap:anywhere;-webkit-hyphens:auto;hyphens:auto;">${text}</h${level}>`;
}

export function eyebrow(ctx: Ctx, text: string, tone: string = color.panel): string {
  const f = fonts(ctx.locale);
  return `<p class="ob-eyebrow" style="margin:0 0 10px;font-family:${f.text};font-size:13px;line-height:1.4;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:${tone};">${text}</p>`;
}

export function para(ctx: Ctx, html: string, opts: { muted?: boolean; size?: number; margin?: string } = {}): string {
  const f = fonts(ctx.locale);
  const cls = opts.muted ? 'ob-muted' : 'ob-text';
  const fg = opts.muted ? color.onPaper2 : color.onPaper;
  return `<p class="${cls}" style="margin:${opts.margin ?? '0 0 16px'};font-family:${f.text};font-size:${opts.size ?? 17}px;line-height:1.6;color:${fg};">${html}</p>`;
}

export function link(href: string, text: string): string {
  return `<a class="ob-link" href="${esc(href)}" style="color:${color.link};text-decoration:underline;">${text}</a>`;
}

/**
 * The one action of a message: a gold brick with its darker foot and two studs on top, like the
 * game's own buttons. Outlook on Windows gets the same shape drawn in VML; everything else gets a
 * real link styled as a button.
 */
export function button(ctx: Ctx, href: string, label: string, width = 280): string {
  const f = fonts(ctx.locale);
  const url = esc(href);
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 22px;">
<tr><td>
<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${url}" style="height:54px;v-text-anchor:middle;width:${width}px;" arcsize="26%" strokecolor="${color.goldFoot}" strokeweight="2px" fillcolor="${color.gold}">
<w:anchorlock/>
<center style="color:${color.ink};font-family:Arial,sans-serif;font-size:17px;font-weight:bold;">${label}</center>
</v:roundrect>
<![endif]-->
<!--[if !mso]><!-- --><span class="ob-btn-studs" style="display:block;height:5px;margin:0 0 -1px;padding:0 0 0 22px;font-size:0;line-height:0;mso-hide:all;">${studs(2, color.gold, 14, 10)}</span><a class="ob-btn" href="${url}" style="display:inline-block;vertical-align:top;background:${color.gold};color:${color.ink};font-family:${f.display};font-size:18px;line-height:22px;font-weight:600;text-decoration:none;text-align:center;max-width:100%;box-sizing:border-box;overflow-wrap:anywhere;padding:15px 30px 13px;border-radius:14px;border-bottom:4px solid ${color.goldFoot};box-shadow:inset 0 2px 0 rgba(255,255,255,0.45);mso-hide:all;">${label}</a><!--<![endif]-->
</td></tr>
</table>`;
}

/**
 * A quiet cream panel: a copy of what the visitor sent, a code, a list of promises. It reads as a
 * toy-brick plate: a row of studs in the accent colour along the top and a darker foot below.
 */
export function panel(ctx: Ctx, inner: string, accent: string = color.panel): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px;">
<tr><td style="padding:0 0 0 16px;height:5px;font-size:0;line-height:0;">${studs(4, accent, 12, 10)}</td></tr>
<tr><td class="ob-quote" style="background:${color.cream};border-top:3px solid ${accent};border-bottom:4px solid ${color.paperEdge};border-radius:12px;padding:16px 18px 2px;">${inner}</td></tr>
</table>`;
}

/** A label/value pair inside a panel. Values are escaped by the caller. */
export function field(ctx: Ctx, label: string, valueHtml: string): string {
  const f = fonts(ctx.locale);
  return `<p class="ob-muted" style="margin:0 0 4px;font-family:${f.text};font-size:13px;line-height:1.4;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:${color.onPaper2};">${label}</p>
<p class="ob-text" style="margin:0 0 14px;font-family:${f.text};font-size:17px;line-height:1.6;color:${color.onPaper};word-break:break-word;">${valueHtml}</p>`;
}

/** A bulleted list of short items, each with a coloured brick for a bullet. */
export function bricks(ctx: Ctx, items: { title: string; body: string }[]): string {
  const f = fonts(ctx.locale);
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px;">
${items
  .map(
    (item, i) => `<tr>
<td valign="top" width="34" style="padding:3px 12px 10px 0;"><div style="height:4px;padding-left:2px;font-size:0;line-height:0;">${studs(2, course[i % course.length], 7, 4)}</div><div style="width:22px;height:13px;border-radius:4px;background:${course[i % course.length]};border-bottom:3px solid rgba(0,0,0,0.25);font-size:0;line-height:0;">&nbsp;</div></td>
<td valign="top" style="padding:0 0 10px;"><p class="ob-text" style="margin:0;font-family:${f.text};font-size:17px;line-height:1.55;color:${color.onPaper};"><strong>${item.title}</strong> ${item.body}</p></td>
</tr>`,
  )
  .join('\n')}
</table>`;
}

/** A section break: five small studded bricks in the course colours, centred. */
export function rule(): string {
  const brick = (c: string) =>
    `<span style="display:inline-block;vertical-align:bottom;margin:0 3px;"><span style="display:block;height:4px;font-size:0;line-height:0;text-align:center;">${studs(2, c, 6, 4)}</span><span style="display:block;width:26px;height:10px;border-radius:3px;background:${c};border-bottom:3px solid rgba(0,0,0,0.22);font-size:0;line-height:0;">&nbsp;</span></span>`;
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 24px;"><tr><td align="center" style="text-align:center;font-size:0;line-height:0;">${course.slice(0, 5).map(brick).join('')}</td></tr></table>`;
}

/** The brick course as a row of six cells: the same stripe as the site's header. */
export function courseStripe(height = 10): string {
  const cells = course
    .map((c) => `<td width="16.66%" height="${height}" bgcolor="${c}" style="width:16.66%;background:${c};height:${height}px;font-size:0;line-height:0;mso-line-height-rule:exactly;">&nbsp;</td>`)
    .join('');
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="table-layout:fixed;"><tr>${cells}</tr></table>`;
}

/**
 * Tap to reveal: a tip's answer, a spoiler. Where checkboxes work (Apple Mail, iOS Mail) the
 * body stays folded behind a button; everywhere else the body is simply shown under its label,
 * so nobody misses the content. `id` must be unique within the email.
 */
export function reveal(ctx: Ctx, id: string, button: string, label: string, bodyHtml: string): string {
  const f = fonts(ctx.locale);
  return `<div style="margin:0 0 20px;">
<!--[if !mso]><!--><input type="checkbox" id="${esc(id)}" class="ob-rv-input" style="display:none;mso-hide:all;"><label for="${esc(id)}" class="ob-rv-btn" style="display:none;cursor:pointer;background:${color.ink};color:${color.title};font-family:${f.display};font-size:16px;line-height:20px;font-weight:600;padding:12px 20px 10px;border-radius:12px;border-bottom:4px solid #120c3a;mso-hide:all;">${button}</label><!--<![endif]-->
<div class="ob-rv-body"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td class="ob-quote" style="background:${color.cream};border-left:5px solid ${course[2]};border-radius:12px;padding:14px 18px 2px;">
<p class="ob-eyebrow" style="margin:0 0 6px;font-family:${f.text};font-size:13px;line-height:1.4;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:${color.panel};">${label}</p>
${bodyHtml}
</td></tr></table></div>
</div>`;
}

/**
 * One-tap choices, each a real link (a signed URL that lands on a confirmation page, so a link
 * scanner never records anything): rating faces, yes/no. Each is a 48 px brick tile with a
 * caption; they wrap on narrow screens.
 */
export function picks(ctx: Ctx, items: { href: string; face?: string; img?: string; caption: string; tone?: string }[]): string {
  const f = fonts(ctx.locale);
  const cells = items
    .map(
      (item, i) => `<!--[if mso]><td style="padding:0 4px;" valign="top"><![endif]--><a class="ob-pick" href="${esc(item.href)}" style="display:inline-block;vertical-align:top;width:${item.img ? 104 : 76}px;margin:0 3px 10px;text-align:center;text-decoration:none;transition:transform .15s ease;">
${
  item.img
    ? // A friend on a brick-coloured card: the caption is the alt text too, so blocked images still read.
      `<span style="display:block;width:96px;margin:0 auto;border-radius:18px;background:${color.cream};border:3px solid ${item.tone ?? course[i % course.length]};border-bottom-width:6px;font-size:0;line-height:0;"><img src="${esc(item.img)}" width="88" height="88" alt="${item.caption}" style="display:block;width:88px;height:88px;margin:2px auto;border:0;color:${color.onPaper};font-family:${f.text};font-size:14px;line-height:1.3;"></span>`
    : `<span style="display:block;width:52px;height:48px;margin:0 auto;border-radius:14px;background:${item.tone ?? course[i % course.length]};border-bottom:4px solid rgba(0,0,0,0.25);color:#ffffff;font-size:26px;line-height:48px;text-align:center;">${item.face ?? ''}</span>`
}
<span class="ob-muted" style="display:block;padding-top:6px;font-family:${f.text};font-size:13px;line-height:1.3;font-weight:700;color:${color.onPaper2};">${item.caption}</span></a><!--[if mso]></td><![endif]-->`,
    )
    .join('\n');
  return `<div style="margin:4px 0 18px;text-align:center;font-size:0;"><!--[if mso]><table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0"><tr><![endif]-->
${cells}
<!--[if mso]></tr></table><![endif]--></div>`;
}

/** A secondary action: an outlined link-button, quieter than the gold one. */
export function ghostButton(ctx: Ctx, href: string, label: string): string {
  const f = fonts(ctx.locale);
  return `<a class="ob-link" href="${esc(href)}" style="display:inline-block;max-width:100%;box-sizing:border-box;overflow-wrap:anywhere;margin:0 0 18px;padding:12px 22px 10px;border:2px solid ${color.panel};border-radius:14px;color:${color.link};font-family:${f.display};font-size:16px;line-height:20px;font-weight:600;text-decoration:none;">${label}</a>`;
}

// ---------------------------------------------------------------------------------------
// The document.

export type ShellOptions = {
  ctx: Ctx;
  /** The subject, repeated as the document title. */
  title: string;
  /** The inbox preview line. */
  preheader: string;
  /** The inside of the paper panel. */
  body: string;
  /** Under the paper, on indigo: links, why you got this, unsubscribe. */
  footer: string;
  /** Alt text for the logo, in the message's language. */
  logoAlt: string;
  /** Extra <head> markup (the preview pages add robots noindex). */
  head?: string;
  /** The copyright year; the year of rendering unless a test pins it. */
  year?: number;
  /**
   * The site menu under the logo. A row of links everywhere; on phones in clients that support
   * it (Apple Mail, iOS Mail), a hamburger that opens it. On by default in every message a reader
   * gets; only the team's internal copies turn it off.
   */
  nav?: boolean;
  /** The friend who opens the message, on a brick plinth, with what they say. */
  host?: Host;
};

/**
 * A short, stable suffix for this message's checkbox ids. Apple Mail can show several messages
 * of a conversation together; two newsletters both using id="ob-menu" would let one message's
 * hamburger open the other's menu. Derived from the content, so a re-render is identical.
 */
function idSuffix(seed: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 0x01000193);
  return (h >>> 0).toString(36);
}

/** Gives every ob- id (and the label and radio group pointing at it) this message's suffix. */
function uniqueIds(html: string, suffix: string): string {
  return html.replace(/\b(id|for|name)="(ob-[a-z0-9-]+)"/g, `$1="$2-${suffix}"`);
}

export function shell({ ctx, title, preheader, body: rawBody, footer, logoAlt, head = '', year, nav = true, host }: ShellOptions): string {
  const f = fonts(ctx.locale);
  const suffix = idSuffix(`${ctx.locale}|${title}|${preheader}|${rawBody}`);
  const body = uniqueIds((host ? stage(ctx, host) : '') + rawBody, suffix);
  const asset = (p: string) => `${ctx.assetBase}${p}`;
  // The inbox preview pads itself out with zero-width joiners so the client does not fill the
  // rest of the preview line with the first words of the body.
  const filler = '&#8204;&nbsp;'.repeat(90);
  return `<!DOCTYPE html>
<html lang="${ctx.locale}" dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
${head}<title>${esc(title)}</title>
<!--[if mso]>
<noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<style>table,td,div,h1,h2,h3,p,a,span,li{font-family:Arial,sans-serif !important;}</style>
<![endif]-->
<style>
@font-face{font-family:'Fredoka';font-style:normal;font-weight:300 700;font-display:swap;src:url('${SITE}/fonts/fredoka-latin-wght.woff2') format('woff2');}
@font-face{font-family:'Figtree';font-style:normal;font-weight:300 900;font-display:swap;src:url('${SITE}/fonts/figtree-latin-wght.woff2') format('woff2');}
:root{color-scheme:light dark;supported-color-schemes:light dark;}
body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}
table,td{mso-table-lspace:0pt;mso-table-rspace:0pt;}
img{-ms-interpolation-mode:bicubic;border:0;outline:none;text-decoration:none;}
a{text-decoration-skip-ink:auto;}
a[x-apple-data-detectors]{color:inherit !important;text-decoration:none !important;font-size:inherit !important;font-family:inherit !important;font-weight:inherit !important;line-height:inherit !important;}
u + #body a{color:inherit;text-decoration:none;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;}
.ob-btn:hover{background:#ffd66e !important;}
.ob-nav-a:hover{color:#ffffff !important;text-decoration:underline !important;}
.ob-pick:hover{transform:translateY(-2px);}
.ob-burger,.ob-rv-btn{display:none;}
@media screen and (max-width:620px){
  .ob-outer{padding:12px 8px 24px !important;}
  .ob-pad{padding:28px 20px 12px !important;}
  .ob-head{padding:20px 20px !important;}
  .ob-foot{padding:22px 20px 28px !important;}
  .ob-h1{font-size:26px !important;}
  .ob-col{max-width:100% !important;width:100% !important;}
  .ob-col-img{padding:0 0 14px !important;}
  .ob-hero-img{width:100% !important;height:auto !important;}
}
@media screen and (max-width:360px){
  .ob-outer{padding:8px 4px 20px !important;}
  .ob-pad{padding:24px 16px 10px !important;}
  .ob-head{padding:18px 16px !important;}
  .ob-foot{padding:20px 16px 24px !important;}
  .ob-h1{font-size:24px !important;}
  .ob-btn{padding:14px 18px 12px !important;}
  .ob-logo{width:136px !important;height:auto !important;}
}
@media (prefers-color-scheme:dark){
  .ob-page{background:${color.darkPage} !important;}
  .ob-paper{background:${color.darkPaper} !important;border-color:${color.ink2} !important;}
  .ob-h{color:${color.title} !important;}
  .ob-text{color:${color.darkText} !important;}
  .ob-muted,.ob-eyebrow{color:${color.darkMuted} !important;}
  .ob-link{color:${color.darkLink} !important;}
  .ob-quote{background:${color.ink} !important;}
  .ob-rule{border-color:#3a3190 !important;}
  .ob-card{background:${color.ink} !important;border-color:#3a3190 !important;}
  .ob-bubble{background:${color.ink} !important;}
}
[data-ogsc] .ob-page{background:${color.darkPage} !important;}
[data-ogsc] .ob-paper{background:${color.darkPaper} !important;border-color:${color.ink2} !important;}
[data-ogsc] .ob-h{color:${color.title} !important;}
[data-ogsc] .ob-text{color:${color.darkText} !important;}
[data-ogsc] .ob-muted,[data-ogsc] .ob-eyebrow{color:${color.darkMuted} !important;}
[data-ogsc] .ob-link{color:${color.darkLink} !important;}
[data-ogsb] .ob-quote,[data-ogsb] .ob-card,[data-ogsb] .ob-bubble{background:${color.ink} !important;}
</style>
<style>
/* Interactive layer (checkbox toggles), in a block of its own so a client that rejects any of it
   drops only this. Clients that strip <input> (Gmail, Outlook, Yahoo) never match these rules and
   keep the plain layout: the menu as a row of links, a revealed answer simply shown. The WebKit
   gate keeps it to the clients that toggle reliably (Apple Mail, iOS Mail, Samsung Email), so a
   client that keeps the checkbox but cannot flip it never shows a dead button or hides content. */
@media screen and (-webkit-min-device-pixel-ratio:0){
  .ob-rv-input + .ob-rv-btn{display:inline-block !important;}
  .ob-rv-input ~ .ob-rv-body{display:none;}
  .ob-rv-input:checked ~ .ob-rv-body{display:block !important;}
  .ob-rv-input:checked + .ob-rv-btn{display:none !important;}
}
@media screen and (-webkit-min-device-pixel-ratio:0){
  .ob-menu-input + .ob-burger{display:block !important;position:absolute;top:16px;right:14px;width:44px;height:44px;border-radius:12px;background:#2a2364;cursor:pointer;-webkit-tap-highlight-color:transparent;}
  .ob-burger span{display:block;width:20px;height:2px;margin:6px auto 0;border-radius:2px;background:${color.title};transition:transform .25s ease,opacity .2s ease;}
  .ob-burger span:first-child{margin-top:15px;}
  .ob-menu-input:checked + .ob-burger{background:#3a3190;}
  .ob-menu-input:checked + .ob-burger span:nth-child(1){transform:translateY(8px) rotate(45deg);}
  .ob-menu-input:checked + .ob-burger span:nth-child(2){opacity:0;}
  .ob-menu-input:checked + .ob-burger span:nth-child(3){transform:translateY(-8px) rotate(-45deg);}
  .ob-menu-input ~ .ob-nav{max-height:0;overflow:hidden;padding-top:0 !important;transition:max-height .35s ease,padding-top .35s ease;}
  .ob-menu-input:checked ~ .ob-nav{max-height:420px;padding-top:14px !important;}
  .ob-menu-input ~ .ob-nav .ob-nav-a{display:block !important;margin:0 !important;padding:13px 6px !important;border-top:1px solid #3a3190;font-size:17px !important;text-align:left;}
}
@media screen and (-webkit-min-device-pixel-ratio:0) and (prefers-reduced-motion:no-preference){${stageCss}
}
@media screen and (-webkit-min-device-pixel-ratio:0){
  .ob-host-input:checked + .ob-host .ob-f-main{display:none !important;}
  .ob-host-input:checked + .ob-host .ob-f-alt{display:block !important;height:96px !important;max-height:none !important;}
}
@media screen and (-webkit-min-device-pixel-ratio:0) and (max-width:360px){
  .ob-menu-input + .ob-burger{right:10px !important;}
}
@media (prefers-reduced-motion:reduce){
  .ob-burger span,.ob-nav,.ob-pick,.ob-btn{transition:none !important;}
}
</style>
</head>
<body id="body" class="ob-page" style="margin:0;padding:0;width:100%;background:${color.cream};word-spacing:normal;">
<div role="article" aria-roledescription="email" aria-label="${esc(title)}" lang="${ctx.locale}" dir="ltr" style="font-family:${f.text};">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${color.cream};opacity:0;">${esc(preheader)}${filler}</div>
<table role="presentation" class="ob-page" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${color.cream}" style="background:${color.cream};">
<tr><td class="ob-outer" align="center" style="padding:28px 12px 36px;">
<!--[if mso]><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
<div style="max-width:600px;margin:0 auto;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
<tr><td class="ob-head" align="center" bgcolor="${color.ink}" style="background:${color.ink};border-radius:20px 20px 0 0;padding:22px 32px;text-align:center;position:relative;">
<a href="${SITE}${ctx.locale === 'en' ? '/' : `/${ctx.locale}`}" style="display:inline-block;text-decoration:none;"><img class="ob-logo" src="${esc(asset('/assets/logo/outbrick-wordmark.png'))}" width="168" height="33" alt="${esc(logoAlt)}" style="display:block;margin:0 auto;width:168px;height:33px;border:0;color:${color.title};font-family:${f.display};font-size:24px;font-weight:600;"></a>
${nav ? uniqueIds(navBlock(ctx), suffix) : ''}
</td></tr>
<tr><td style="font-size:0;line-height:0;">${courseStripe()}</td></tr>
<tr><td class="ob-paper ob-pad" bgcolor="${color.paper}" style="background:${color.paper};padding:36px 40px 18px;overflow-wrap:break-word;word-wrap:break-word;border-left:1px solid ${color.paperEdge};border-right:1px solid ${color.paperEdge};">
${body}
</td></tr>
 <tr><td style="font-size:0;line-height:0;">${courseStripe(8)}</td></tr>
<tr><td class="ob-foot" bgcolor="${color.ink}" style="background:${color.ink};border-radius:0 0 20px 20px;padding:26px 40px 32px;overflow-wrap:break-word;word-wrap:break-word;">
${footer}
${brandFooter(ctx, year)}
</td></tr>
</table>
</div>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>
</div>
</body>
</html>`;
}

/** Footer text: lilac on ink. `links` are [label, href] pairs, joined with dots. */
export function footerBlock(ctx: Ctx, opts: { links: [string, string][]; lines: string[] }): string {
  const f = fonts(ctx.locale);
  const linkHtml = opts.links
    .map(([label, href]) => `<a href="${esc(href)}" style="color:${color.title};text-decoration:underline;font-weight:700;">${label}</a>`)
    .join(`<span style="color:${color.lilac};"> &nbsp;·&nbsp; </span>`);
  const lines = opts.lines
    .map((line) => `<p style="margin:0 0 10px;font-family:${f.text};font-size:15px;line-height:1.55;color:${color.lilac};">${line}</p>`)
    .join('\n');
  return `<p style="margin:0 0 14px;font-family:${f.text};font-size:15px;line-height:1.6;color:${color.lilac};">${linkHtml}</p>
${lines}`;
}

/**
 * Campaign tags on links back to the site, so GA4 credits a visit to the email that brought it
 * (utm_source=outbrick-email, utm_medium=email, utm_campaign=<the send's form tag>). Only plain
 * www.outbrick.site pages are tagged: a link with a query string (every signed, sign-in and
 * confirmation link), a handler under /.netlify/ or /api/, and an affiliate /r/ link are left
 * exactly as written, so no signature or referral is touched. Only href attributes in the HTML
 * part change; the text/plain part keeps its short, readable addresses. A fragment stays last.
 */
export function tagLinks(html: string, campaign: string): string {
  const slug = campaign.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'email';
  const params = `utm_source=outbrick-email&amp;utm_medium=email&amp;utm_campaign=${slug}`;
  return html
    .replace(/href="https:\/\/www\.outbrick\.site(\/[^"?#]*)?(#[^"]*)?"/g, (whole, path: string | undefined, hash: string | undefined) => {
      const p = path ?? '/';
      if (/^\/(?:\.netlify|api|r|assets|fonts)\//.test(p)) return whole;
      return `href="https://www.outbrick.site${p}?${params}${hash ?? ''}"`;
    })
    // The App Store badge in the brand footer says which email sent the download, too
    // (App Analytics campaigns; Apple caps ct at 40 characters).
    .replace(/(href="https:\/\/apps\.apple\.com\/[^"]*[?&](?:amp;)?ct=)web-email-footer/g, (_, head: string) => `${head}${`email-${slug}`.slice(0, 40)}`);
}

/**
 * Language typography for a text/plain part. French puts a no-break space before a colon
 * ("Sujet : Assistance"); the templates build "label: value" lines in one shared form, so the
 * space is added here, once, for every French email. Links ("https://…") and times ("10:30")
 * have no space after their colon and are left alone.
 */
export function localiseText(text: string, locale: string | undefined): string {
  if (locale !== 'fr') return text;
  return text.replace(/([^\s:\u00a0\u202f]) ?:(?=\s)/g, '$1\u00a0:');
}

/** Wraps plain text at a readable width for the text/plain part. */
export function textBlock(lines: (string | false | undefined | null)[]): string {
  return lines
    .filter((line): line is string => typeof line === 'string')
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim() + '\n';
}
