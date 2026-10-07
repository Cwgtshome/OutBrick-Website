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
import { teamNotification } from './team.ts';

export * from './templates.ts';
export { teamNotification, teamSubject } from './team.ts';
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

export type TemplateName =
  | 'contact'
  | 'contact-bug'
  | 'careers'
  | 'affiliate'
  | 'newsletter-confirm'
  | 'newsletter-welcome'
  | 'newsletter-campaign'
  | 'team-contact'
  | 'team-careers'
  | 'team-affiliate'
  | 'team-newsletter';

export const templateNames: TemplateName[] = ['contact', 'contact-bug', 'careers', 'affiliate', 'newsletter-confirm', 'newsletter-welcome', 'newsletter-campaign', 'team-contact', 'team-careers', 'team-affiliate', 'team-newsletter'];

/** The team's copies are always in English; the preview's language is the visitor's. */
export function templateLang(name: TemplateName, locale: EmailLocale): EmailLocale {
  return name.startsWith('team-') ? 'en' : locale;
}

export const templateTitles: Record<TemplateName, string> = {
  contact: 'Contact acknowledgement (Support topic)',
  'contact-bug': 'Contact acknowledgement (Bug report, no device given)',
  careers: 'Careers acknowledgement',
  affiliate: 'Affiliate acknowledgement',
  'newsletter-confirm': 'Newsletter: confirm your subscription',
  'newsletter-welcome': 'Newsletter: welcome',
  'newsletter-campaign': 'Newsletter: campaign layout (sample issue)',
  'team-contact': 'Team copy: contact message (visitor’s language shown)',
  'team-careers': 'Team copy: job application',
  'team-affiliate': 'Team copy: affiliate application',
  'team-newsletter': 'Team copy: newsletter sign-up',
};

const sampleEmails: Record<EmailLocale, string> = { en: 'ada@example.com', fr: 'camille@example.com', de: 'lena@example.com', es: 'lucia@example.com', ja: 'hanako@example.com' };
const sampleId = '6a0f3c1e2b9d4a0008a1b2c3';
const sampleAt = '2026-10-07T07:35:26.000Z';

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
    case 'team-contact':
      return teamNotification({
        form: 'contact',
        locale,
        assetBase,
        submissionId: sampleId,
        createdAt: sampleAt,
        acknowledgement: 'sent',
        data: { name: sampleNames[locale], email: sampleEmails[locale], topic: 'bug', message: sampleMessages[locale], device: 'iPhone 17 Pro', 'ios-version': '27.0', 'app-version': '5.0.1', locale, referrer: `https://www.outbrick.site${locale === 'en' ? '' : `/${locale}`}/contact`, user_agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 27_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/27.0 Mobile/15E148 Safari/604.1', ip: '203.0.113.7', 'bot-field': '' },
      });
    case 'team-careers':
      return teamNotification({
        form: 'careers',
        locale,
        assetBase,
        submissionId: sampleId,
        createdAt: sampleAt,
        acknowledgement: 'sent',
        data: { name: sampleNames[locale], email: sampleEmails[locale], role: 'Content Marketing Lead', location: 'Lyon, France', portfolio: 'https://example.com/portfolio', 'cover-note': sampleMessages[locale], locale, referrer: 'https://www.outbrick.site/careers' },
      });
    case 'team-affiliate':
      return teamNotification({
        form: 'affiliate',
        locale,
        assetBase,
        submissionId: sampleId,
        createdAt: sampleAt,
        acknowledgement: 'sent',
        data: { name: sampleNames[locale], email: sampleEmails[locale], handle: '@ada_plays', channels: ['YouTube', 'TikTok'], audience: '12,000 subscribers, mostly puzzle players', country: 'United Kingdom', plan: 'A video series on the hardest Journey boards <b>Not bold</b>', code: 'ADA27', locale, referrer: 'https://www.outbrick.site/affiliates' },
      });
    case 'team-newsletter':
      return teamNotification({
        form: 'newsletter',
        locale,
        assetBase,
        submissionId: sampleId,
        createdAt: sampleAt,
        acknowledgement: 'sent',
        data: { email: sampleEmails[locale], language: locale, consent: 'yes', referrer: 'https://www.outbrick.site/newsletter' },
      });
    case 'newsletter-campaign': {
      const content = issue.locales[locale] ?? issue.locales.en;
      if (!content) throw new Error(`issue ${issue.id} has no ${locale} or en content`);
      return newsletterCampaign({ locale, assetBase, issue: content, unsubscribeUrl: `${sampleLink}-unsubscribe`, address: issue.address ?? PLACEHOLDER_ADDRESS });
    }
  }
}

