// The brand line at the foot of every email and email-shell page: the social tiles, the handle
// and the copyright. shell() in core.ts appends it under each template's own footer, so no
// template can leave it out; brandFooterText() is the same in the text/plain part.
//
// The profiles are the website footer's (lib/site.ts socialProfiles, every row, as the site
// shows them), with the site's own accessible names (lib/i18n/site.ts). The tiles are PNGs
// drawn from the site's glyphs by scripts/build-email-social-icons.mjs, since email clients
// strip inline SVG. The year is the year the message is rendered, so it never needs editing;
// the Resend templates, which are rendered at build time, are rebuilt and pushed on every
// production deploy (scripts/build-resend-templates.mjs).

import { socialProfiles } from '../lib/site.ts';
import { siteWords } from '../lib/i18n/site.ts';
import { color, esc, fonts, type Ctx } from './core.ts';
import type { EmailLocale } from './i18n.ts';

/** Every profile uses this handle (see lib/site.ts). */
export const HANDLE = '@outbrick';

const brandCopy: Record<EmailLocale, { follow: (handle: string) => string; rights: string }> = {
  en: { follow: (h) => `Follow OutBrick: ${h}`, rights: 'All rights reserved.' },
  fr: { follow: (h) => `Suivez OutBrick : ${h}`, rights: 'Tous droits réservés.' },
  de: { follow: (h) => `Folgen Sie OutBrick: ${h}`, rights: 'Alle Rechte vorbehalten.' },
  es: { follow: (h) => `Sigue a OutBrick: ${h}`, rights: 'Todos los derechos reservados.' },
  ja: { follow: (h) => `OutBrickをフォロー：${h}`, rights: 'All rights reserved.' },
  'pt-BR': { follow: (h) => `Siga a OutBrick: ${h}`, rights: 'Todos os direitos reservados.' },
};

export function copyright(locale: EmailLocale, year: number = new Date().getUTCFullYear()): string {
  return `© ${year} OutBrick. ${brandCopy[locale].rights}`;
}

/**
 * Centred under the template's footer. The tiles wrap as inline blocks, so five of them fit a 280 px Galaxy Fold cover screen on two
 * rows and one row anywhere wider; Outlook on Windows, which ignores inline-block margins, gets
 * them in a table with the same gaps. Each tile is a 44 × 44 touch target on its 4 px foot.
 */
export function brandFooter(ctx: Ctx, year?: number): string {
  const f = fonts(ctx.locale);
  const words = siteWords[ctx.locale];
  const tiles = socialProfiles.map((p) => {
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
<p style="margin:0;text-align:center;font-family:${f.text};font-size:14px;line-height:1.55;color:${color.lilac};">${esc(copyright(ctx.locale, year))}</p>
</td></tr>
</table>`;
}

/** The same, for the text/plain part: one line per profile, then the copyright. */
export function brandFooterText(locale: EmailLocale, year?: number): string[] {
  return ['', brandCopy[locale].follow(HANDLE), ...socialProfiles.map((p) => `${p.label}: ${p.url}`), '', copyright(locale, year)];
}
