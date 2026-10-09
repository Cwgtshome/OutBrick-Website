// The brand line at the foot of every email and email-shell page: the social tiles, the handle,
// Apple's App Store badge linking to the game, and the copyright, all centred: social, then the
// badge, then the legal line last, as the brand block of a well-made email footer runs. shell() in core.ts appends it under each template's own footer, so no
// template can leave it out; brandFooterText() is the same in the text/plain part.
//
// The profiles are the website footer's (lib/site.ts shownSocialProfiles(), as the site
// shows them), with the site's own accessible names (lib/i18n/site.ts). The tiles are PNGs
// drawn from the site's glyphs by scripts/build-email-images.mjs, since email clients
// strip inline SVG; the badges are Apple's official ones from public/assets/badge, rasterized
// by the same script, in the badge languages the site uses. The year is the year the message is rendered, so it never needs editing;
// the Resend templates, which are rendered at build time, are rebuilt and pushed on every
// production deploy (scripts/build-resend-templates.mjs).

import { shownSocialProfiles } from '../lib/site.ts';
import { siteWords } from '../lib/i18n/site.ts';
import { chromeCopy } from '../lib/i18n/chrome.ts';
import { storefronts } from '../lib/i18n/locales.ts';
import { appStoreUrl } from '../lib/app-store-url.ts';
import { color, esc, fonts, type Ctx } from './core.ts';
import type { EmailLocale } from './i18n.ts';

/** Every profile uses this handle (see lib/site.ts). */
export const HANDLE = '@outbrick';

/**
 * The sender's postal address, which commercial email must carry (CAN-SPAM, and the EU/UK rules).
 * The owner supplied "OutBrick PO 330279" (docs/CURRENT-STATUS.md); each language writes the box
 * the way its readers expect. Do not invent a fuller address here.
 */
export const PO_BOX = '330279';

const brandCopy: Record<EmailLocale, { follow: (handle: string) => string; rights: string; postal: string }> = {
  en: { follow: (h) => `Follow OutBrick: ${h}`, rights: 'All rights reserved.', postal: `P.O. Box ${PO_BOX}` },
  fr: { follow: (h) => `Suivez OutBrick : ${h}`, rights: 'Tous droits réservés.', postal: `Boîte postale ${PO_BOX}` },
  de: { follow: (h) => `Folgen Sie OutBrick: ${h}`, rights: 'Alle Rechte vorbehalten.', postal: `Postfach ${PO_BOX}` },
  es: { follow: (h) => `Sigue a OutBrick: ${h}`, rights: 'Todos los derechos reservados.', postal: `Apartado de correos ${PO_BOX}` },
  ja: { follow: (h) => `OutBrickをフォロー：${h}`, rights: 'All rights reserved.', postal: `私書箱 ${PO_BOX}` },
  'pt-BR': { follow: (h) => `Siga a OutBrick: ${h}`, rights: 'Todos os direitos reservados.', postal: `Caixa Postal ${PO_BOX}` },
};

/** "OutBrick · P.O. Box 330279", in the reader's language. On every email. */
export function postalAddress(locale: EmailLocale): string {
  return `OutBrick · ${brandCopy[locale].postal}`;
}

const sitePath = (locale: EmailLocale, path: string) => `https://www.outbrick.site${locale === 'en' ? path : `/${locale}${path === '/' ? '' : path}`}`;

/**
 * The site menu for the header (see ShellOptions.nav in core.ts): the website's own labels and
 * routes. Wherever checkboxes work (Apple Mail, iOS Mail, Samsung Email), at every width, it is
 * folded behind a hamburger in the header's top-right corner that drops the links down as
 * full-width rows; clients that strip <input> (Gmail, Outlook, Yahoo) show a centred row instead.
 * The links stay in reading order for screen readers either way, so the hamburger itself is
 * aria-hidden: it is a visual fold, not a control that changes what VoiceOver reads.
 */
export function navBlock(ctx: Ctx): string {
  const f = fonts(ctx.locale);
  const c = chromeCopy[ctx.locale];
  const links: [string, string][] = [
    [c.footer.playGuide, sitePath(ctx.locale, '/play')],
    [c.footer.whatsNew, sitePath(ctx.locale, '/whats-new')],
    [c.footer.daily, 'https://www.outbrick.site/daily'],
    [c.footer.community, sitePath(ctx.locale, '/community')],
    [c.footer.support, sitePath(ctx.locale, '/support')],
  ];
  const items = links
    .map(([label, href]) => `<a class="ob-nav-a" href="${esc(href)}" style="display:inline-block;margin:0 9px 6px;font-family:${f.text};font-size:14px;line-height:1.4;font-weight:700;color:${color.lilac};text-decoration:none;">${esc(label)}</a>`)
    .join('\n');
  return `<!--[if !mso]><!--><input type="checkbox" id="ob-menu" class="ob-menu-input" style="display:none;mso-hide:all;"><label for="ob-menu" class="ob-burger" title="${esc(c.menu)}" aria-hidden="true" style="display:none;mso-hide:all;"><span></span><span></span><span></span></label><!--<![endif]-->
<div class="ob-nav" style="padding-top:14px;text-align:center;">
${items}
</div>`;
}

/** Badge artwork per language, and its width at the 40 px height Apple's artwork is drawn at. */
const badges: Record<EmailLocale, { file: string; width: number }> = {
  en: { file: 'en', width: 120 },
  fr: { file: 'fr', width: 127 },
  de: { file: 'de', width: 120 },
  es: { file: 'es', width: 120 },
  ja: { file: 'ja', width: 109 },
  'pt-BR': { file: 'en', width: 120 },
};

/** The game on the reader's own storefront, tagged so App Analytics counts the email footer. */
export function footerStoreUrl(locale: EmailLocale): string {
  return appStoreUrl('email-footer', storefronts[locale]);
}

export function copyright(locale: EmailLocale, year: number = new Date().getUTCFullYear()): string {
  return `© ${year} OutBrick. ${brandCopy[locale].rights}`;
}

/**
 * Centred under the template's footer: tiles, handle, App Store badge, copyright. The tiles wrap as inline blocks, so five of them fit a 280 px Galaxy Fold cover screen on two
 * rows and one row anywhere wider; Outlook on Windows, which ignores inline-block margins, gets
 * them in a table with the same gaps. Each tile is a 44 × 44 touch target on its 4 px foot.
 */
export function brandFooter(ctx: Ctx, year?: number): string {
  const f = fonts(ctx.locale);
  const words = siteWords[ctx.locale];
  const badge = badges[ctx.locale];
  const tiles = shownSocialProfiles().map((p) => {
    const name = esc(words.on(p.label));
    return `<!--[if mso]><td style="padding:0 4px;"><![endif]--><a href="${esc(p.url)}" title="${name}" style="display:inline-block;margin:0 3px 8px;text-decoration:none;"><img src="${esc(`${ctx.assetBase}/assets/email/social-${p.network}.png`)}" width="44" height="48" alt="${name}" style="display:block;width:44px;height:48px;border:0;color:${color.title};font-family:${f.text};font-size:11px;line-height:1.2;"></a><!--[if mso]></td><![endif]-->`;
  });
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 0;">
<tr><td class="ob-brand" align="center" style="border-top:1px solid #3a3190;padding:20px 0 0;font-size:0;line-height:0;text-align:center;">
<!--[if mso]><table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0"><tr><![endif]-->
${tiles.join('\n')}
<!--[if mso]></tr></table><![endif]-->
</td></tr>
<tr><td align="center" style="padding:6px 0 0;text-align:center;">
<p style="margin:0 0 6px;text-align:center;font-family:${f.text};font-size:15px;line-height:1.55;color:${color.title};font-weight:700;">${esc(brandCopy[ctx.locale].follow(HANDLE))}</p>
</td></tr>
<tr><td align="center" style="padding:14px 0 16px;text-align:center;font-size:0;line-height:0;">
<a href="${esc(footerStoreUrl(ctx.locale))}" style="display:inline-block;text-decoration:none;"><img src="${esc(`${ctx.assetBase}/assets/email/app-store-${badge.file}.png`)}" width="${badge.width}" height="40" alt="${esc(chromeCopy[ctx.locale].badgeAlt)}" style="display:block;margin:0 auto;width:${badge.width}px;height:40px;border:0;color:${color.title};font-family:${f.text};font-size:13px;line-height:1.2;"></a>
</td></tr>
<tr><td align="center" style="text-align:center;">
<p style="margin:0;text-align:center;font-family:${f.text};font-size:14px;line-height:1.55;color:${color.lilac};">${esc(copyright(ctx.locale, year))}</p>
<p style="margin:2px 0 0;text-align:center;font-family:${f.text};font-size:13px;line-height:1.55;color:${color.lilac};">${esc(postalAddress(ctx.locale))}</p>
</td></tr>
</table>`;
}

/** The same, for the text/plain part: one line per profile, then the copyright. */
export function brandFooterText(locale: EmailLocale, year?: number): string[] {
  return ['', brandCopy[locale].follow(HANDLE), ...shownSocialProfiles().map((p) => `${p.label}: ${p.url}`), '', `${chromeCopy[locale].badgeAlt}: ${footerStoreUrl(locale)}`, '', copyright(locale, year), postalAddress(locale)];
}
