// Every OutBrick email, and sample data to render each one in every language (the previews
// built into Deploy Previews, and scripts/send-newsletter.mjs --dry-run).

import type { EmailLocale } from './i18n.ts';
import {
  affiliateAcknowledgement,
  careersAcknowledgement,
  contactAcknowledgement,
  newsletterCampaign,
  newsletterConfirm,
  newsletterWelcome,
  type IssueContent,
  type Rendered,
} from './templates.ts';

export * from './templates.ts';
export { emailCopy, emailLocales, isEmailLocale, type EmailLocale } from './i18n.ts';

/** An issue file in emails/issues/: one IssueContent per language. */
export type IssueFile = { id: string; name: string; note?: string; address?: string; locales: Partial<Record<EmailLocale, IssueContent>> };

export const PLACEHOLDER_ADDRESS = 'OutBrick · [postal address goes here before the first send]';

const sampleNames: Record<EmailLocale, string> = { en: 'Ada Lovelace', fr: 'Camille Martin', de: 'Lena Schmidt', es: 'Lucía García', ja: '山田 花子' };

const sampleMessages: Record<EmailLocale, string> = {
  en: 'Level 213 keeps telling me I’m out of moves one move before the gate.\nIs that board solvable at the target? <b>Not bold</b> & not a link: https://example.com',
  fr: 'Le niveau 213 me dit que je n’ai plus de coups juste avant la porte.\nCe plateau est-il faisable dans l’objectif ? <b>Pas en gras</b> & pas un lien.',
  de: 'Stufe 213 sagt mir einen Zug vor dem Tor, dass ich keine Züge mehr habe.\nIst das Spielfeld im Ziel lösbar? <b>Nicht fett</b> & kein Link.',
  es: 'El nivel 213 me dice que me quedo sin movimientos justo antes de la puerta.\n¿Se puede resolver dentro del objetivo? <b>No en negrita</b> & sin enlace.',
  ja: 'ステージ213で、ゲートの一手前で手数切れになります。\n目標手数でクリアできますか？ <b>太字ではありません</b> & リンクでもありません。',
};

export type TemplateName = 'contact' | 'contact-bug' | 'careers' | 'affiliate' | 'newsletter-confirm' | 'newsletter-welcome' | 'newsletter-campaign';

export const templateNames: TemplateName[] = ['contact', 'contact-bug', 'careers', 'affiliate', 'newsletter-confirm', 'newsletter-welcome', 'newsletter-campaign'];

export const templateTitles: Record<TemplateName, string> = {
  contact: 'Contact acknowledgement (Support topic)',
  'contact-bug': 'Contact acknowledgement (Bug report, no device given)',
  careers: 'Careers acknowledgement',
  affiliate: 'Affiliate acknowledgement',
  'newsletter-confirm': 'Newsletter: confirm your subscription',
  'newsletter-welcome': 'Newsletter: welcome',
  'newsletter-campaign': 'Newsletter: campaign layout (sample issue)',
};

/** Renders one template with sample data. Sample links are inert (#preview). */
export function renderSample(name: TemplateName, locale: EmailLocale, issue: IssueFile, assetBase?: string): Rendered {
  const sampleLink = 'https://www.outbrick.site/newsletter#preview-link';
  switch (name) {
    case 'contact':
      return contactAcknowledgement({ locale, assetBase, name: sampleNames[locale], topic: 'support', message: sampleMessages[locale], device: 'iPhone 17 Pro', iosVersion: '27.0', appVersion: '4.5' });
    case 'contact-bug':
      return contactAcknowledgement({ locale, assetBase, name: sampleNames[locale], topic: 'bug', message: sampleMessages[locale] });
    case 'careers':
      return careersAcknowledgement({ locale, assetBase, name: sampleNames[locale], role: 'Content Marketing Lead' });
    case 'affiliate':
      return affiliateAcknowledgement({ locale, assetBase, name: sampleNames[locale], code: 'ADA27' });
    case 'newsletter-confirm':
      return newsletterConfirm({ locale, assetBase, confirmUrl: `${sampleLink}-confirm` });
    case 'newsletter-welcome':
      return newsletterWelcome({ locale, assetBase, unsubscribeUrl: `${sampleLink}-unsubscribe` });
    case 'newsletter-campaign': {
      const content = issue.locales[locale] ?? issue.locales.en;
      if (!content) throw new Error(`issue ${issue.id} has no ${locale} or en content`);
      return newsletterCampaign({ locale, assetBase, issue: content, unsubscribeUrl: `${sampleLink}-unsubscribe`, address: issue.address ?? PLACEHOLDER_ADDRESS });
    }
  }
}

