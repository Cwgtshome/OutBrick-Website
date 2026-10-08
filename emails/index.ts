// Every OutBrick email, and sample data to render each one in every language (the previews
// built into Deploy Previews, and scripts/send-newsletter.mjs --dry-run).

import type { EmailLocale } from './i18n.ts';
import { postalAddress } from './brand.ts';
import { lifecycleTemplateNames, lifecycleTemplateTitles, renderLifecycleSample, type LifecycleTemplateName } from './lifecycle-samples.ts';
export * from './lifecycle.ts';
export { lifecycleTemplateNames } from './lifecycle-samples.ts';
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

import { communityConfirmEmail, communityDigest, communityNotification, communitySignIn, communityWelcome, type NotificationItem } from './community.ts';
// Phase 2 (community-p2)
import { communityReplyBounce, communityWeeklyDigest } from './community-digest.ts';

export * from './templates.ts';
export * from './community.ts';
export * from './community-digest.ts';
export { teamNotification, teamSubject } from './team.ts';
export { emailCopy, emailLocales, isEmailLocale, type EmailLocale } from './i18n.ts';

/** An issue file in emails/issues/: one IssueContent per language. */
export type IssueFile = { id: string; name: string; note?: string; address?: string; locales: Partial<Record<EmailLocale, IssueContent>> };

/** The postal address every email now prints in its brand footer (emails/brand.ts). Kept under its old name for the scripts. */
export const PLACEHOLDER_ADDRESS = postalAddress('en');

const sampleNames: Record<EmailLocale, string> = { en: 'Ada Lovelace', fr: 'Camille Martin', de: 'Lena Schmidt', es: 'Lucía García', ja: '山田 花子', 'pt-BR': 'Ana Souza' };

const sampleMessages: Record<EmailLocale, string> = {
  en: 'Level 213 keeps telling me I’m out of moves one move before the gate.\nIs that board solvable at the target? <b>Not bold</b> & not a link: https://example.com',
  fr: 'Le niveau 213 me dit que je n’ai plus de coups juste avant la porte.\nCe plateau est-il faisable dans l’objectif ? <b>Pas en gras</b> & pas un lien.',
  de: 'Stufe 213 sagt mir einen Zug vor dem Tor, dass ich keine Züge mehr habe.\nIst das Spielfeld im Ziel lösbar? <b>Nicht fett</b> & kein Link.',
  es: 'El nivel 213 me dice que me quedo sin movimientos justo antes de la puerta.\n¿Se puede resolver dentro del objetivo? <b>No en negrita</b> & sin enlace.',
  ja: 'ステージ213で、ゲートの一手前で手数切れになります。\n目標手数でクリアできますか？ <b>太字ではありません</b> & リンクでもありません。',
  'pt-BR': 'Na fase 213, fico sem movimentos um lance antes do portão.\nDá para resolver esse tabuleiro dentro do limite? <b>Não está em negrito</b> & não é um link.',
};

export type CommunityTemplateName =
  | 'community-signin'
  | 'community-confirm-email'
  | 'community-confirm-change'
  | 'community-welcome'
  | 'community-reply'
  | 'community-mention'
  | 'community-watched'
  | 'community-status'
  | 'community-solved'
  | 'community-release'
  | 'community-moderation'
  | 'community-badge'
  | 'community-digest'
  // Phase 2 (community-p2)
  | 'community-merged'
  | 'community-reply-by-email'
  | 'community-weekly-digest'
  | 'community-reply-bounce';

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
  | 'team-newsletter'
  | CommunityTemplateName
  | LifecycleTemplateName;

export const communityTemplateNames: CommunityTemplateName[] = [
  'community-signin',
  'community-confirm-email',
  'community-confirm-change',
  'community-welcome',
  'community-reply',
  'community-mention',
  'community-watched',
  'community-status',
  'community-solved',
  'community-release',
  'community-moderation',
  'community-badge',
  'community-digest',
  // Phase 2 (community-p2)
  'community-merged',
  'community-reply-by-email',
  'community-weekly-digest',
  'community-reply-bounce',
];

export const templateNames: TemplateName[] = ['contact', 'contact-bug', 'careers', 'affiliate', 'newsletter-confirm', 'newsletter-welcome', 'newsletter-campaign', 'team-contact', 'team-careers', 'team-affiliate', 'team-newsletter', ...communityTemplateNames, ...lifecycleTemplateNames];

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
  'community-signin': 'Community: sign-in link',
  'community-confirm-email': 'Community: confirm your email (Facebook sign-in)',
  'community-confirm-change': 'Community: confirm a changed email',
  'community-welcome': 'Community: welcome (first sign-in)',
  'community-reply': 'Community: reply to your post',
  'community-mention': 'Community: you were mentioned',
  'community-watched': 'Community: new post in something you follow',
  'community-status': 'Community: status change (Fixed in 5.1)',
  'community-solved': 'Community: your answer was marked Solved',
  'community-release': 'Community: release announcement (from news@)',
  'community-moderation': 'Community: moderation notice',
  'community-badge': 'Community: you earned a badge (Helpful, 10 solved answers)',
  'community-digest': 'Community: several notifications grouped',
  'community-merged': 'Community: your post moved in a thread merge',
  'community-reply-by-email': 'Community: reply notification with the reply-by-email hint',
  'community-weekly-digest': 'Community: weekly digest (opt-in, Mondays)',
  'community-reply-bounce': 'Community: a reply by email could not be posted',
  ...lifecycleTemplateTitles,
};

const sampleTitles: Record<EmailLocale, string> = {
  en: 'VoiceOver reads the move counter <i>twice</i>',
  fr: 'VoiceOver lit le compteur de coups <i>deux fois</i>',
  de: 'VoiceOver liest den Zugzähler <i>doppelt</i> vor',
  es: 'VoiceOver lee el contador de movimientos <i>dos veces</i>',
  ja: 'VoiceOverが手数カウンターを<i>2回</i>読み上げる',
  'pt-BR': 'O VoiceOver lê o contador de movimentos <i>duas vezes</i>',
};

const sampleActors: Record<EmailLocale, string> = { en: 'Ada', fr: 'Camille', de: 'Lena', es: 'Lucía', ja: '花子', 'pt-BR': 'Ana' };

const sampleNotes: Record<EmailLocale, string> = {
  en: 'Fixed in 5.1. Thanks for the clear steps!',
  fr: 'Corrigé dans la 5.1. Merci pour les étapes si claires !',
  de: 'Behoben in 5.1. Danke für die klaren Schritte!',
  es: 'Corregido en la 5.1. ¡Gracias por los pasos tan claros!',
  ja: '5.1で修正しました。わかりやすい手順をありがとうございます！',
  'pt-BR': 'Corrigido na versão 5.1. Obrigado por explicar tão bem!',
};

const sampleReasons: Record<EmailLocale, string> = {
  en: 'It shared another player’s email address. You’re welcome to post it again without that line.',
  fr: 'Il contenait l’adresse e-mail d’un autre joueur. Vous pouvez le republier sans cette ligne.',
  de: 'Er enthielt die E-Mail-Adresse eines anderen Spielers. Sie können ihn gern ohne diese Zeile erneut posten.',
  es: 'Incluía la dirección de correo de otro jugador. Puedes volver a publicarlo sin esa línea.',
  ja: 'ほかのプレイヤーのメールアドレスが含まれていました。その行を除けば、もう一度投稿していただいてかまいません。',
  'pt-BR': 'A publicação incluía o endereço de e-mail de outra pessoa. Você pode publicá-la novamente sem essa linha.',
};

function sampleItem(locale: EmailLocale, kind: NotificationItem['kind']): NotificationItem {
  const thread = { title: sampleTitles[locale], url: `https://www.outbrick.site${locale === 'en' ? '' : `/${locale}`}/community/t/42/voiceover-move-counter#post-3` };
  return {
    kind,
    actorName: kind === 'release' || kind === 'moderation' ? null : sampleActors[locale],
    threadTitle: kind === 'release' ? 'OutBrick 5.1' : thread.title,
    url: thread.url,
    excerpt: `**${sampleMessages[locale].split('\n')[0]}**\n\n> ${sampleMessages[locale].split('\n')[1]}`,
    status: kind === 'status' ? 'fixed' : null,
    statusNote: kind === 'status' ? sampleNotes[locale] : null,
    version: kind === 'release' ? '5.1' : null,
    reason: kind === 'moderation' ? `${sampleReasons[locale]} <b>Not bold</b>` : null,
    fromTitle: kind === 'merged' ? `${sampleTitles[locale]} <b>Not bold</b>` : null,
    ...(kind === 'badge' ? { actorName: null, threadTitle: '', url: `https://www.outbrick.site${locale === 'en' ? '' : `/${locale}`}/community/u/7`, excerpt: '', badge: 'helpful', level: 10 } : {}),
  };
}

const sampleEmails: Record<EmailLocale, string> = { en: 'ada@example.com', fr: 'camille@example.com', de: 'lena@example.com', es: 'lucia@example.com', ja: 'hanako@example.com', 'pt-BR': 'ana@example.com' };
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
    case 'community-signin':
      return communitySignIn({ locale, assetBase, url: `${sampleLink}-signin` });
    case 'community-confirm-email':
      return communityConfirmEmail({ locale, assetBase, url: `${sampleLink}-confirm-email`, reason: 'provider' });
    case 'community-confirm-change':
      return communityConfirmEmail({ locale, assetBase, url: `${sampleLink}-confirm-change`, reason: 'change' });
    case 'community-welcome':
      return communityWelcome({ locale, assetBase, name: `${sampleActors[locale]} <b>Not bold</b>` });
    case 'community-reply':
    case 'community-mention':
    case 'community-watched':
    case 'community-status':
    case 'community-solved':
    case 'community-release':
    case 'community-moderation':
    case 'community-badge': {
      const kind = name.slice('community-'.length) as NotificationItem['kind'];
      return communityNotification({
        locale,
        assetBase,
        item: sampleItem(locale, kind),
        manageUrl: `${sampleLink}-settings`,
        unsubscribeUrl: `${sampleLink}-unsubscribe`,
        unsubscribeKind: kind,
      });
    }
    case 'community-merged':
      return communityNotification({ locale, assetBase, item: sampleItem(locale, 'merged'), manageUrl: `${sampleLink}-settings`, unsubscribeUrl: `${sampleLink}-unsubscribe`, unsubscribeKind: 'merged' });
    case 'community-reply-by-email':
      return communityNotification({ locale, assetBase, item: sampleItem(locale, 'reply'), manageUrl: `${sampleLink}-settings`, unsubscribeUrl: `${sampleLink}-unsubscribe`, unsubscribeKind: 'reply', replyByEmail: true });
    case 'community-weekly-digest': {
      const thread = (n: number, replies: number, votes?: number) => ({ title: `${sampleTitles[locale]} ${n} <b>Not bold</b>`, url: `${sampleLink}-thread-${n}`, replies, votes });
      return communityWeeklyDigest({
        locale,
        assetBase,
        name: `${sampleActors[locale]} <b>Not bold</b>`,
        releases: [{ version: '5.1', url: `${sampleLink}-release` }],
        categories: [
          { kind: 'accessibility', threads: [thread(1, 12), thread(2, 4)] },
          { kind: 'ideas', threads: [thread(3, 7, 31)] },
        ],
        unanswered: [thread(4, 0)],
        communityUrl: `${sampleLink}-community`,
        manageUrl: `${sampleLink}-settings`,
        unsubscribeUrl: `${sampleLink}-unsubscribe`,
        unsubscribeKind: 'digest',
      });
    }
    case 'community-reply-bounce':
      return communityReplyBounce({
        locale,
        assetBase,
        reason: 'locked',
        threadTitle: sampleTitles[locale],
        threadUrl: `${sampleLink}-thread`,
        text: `${sampleMessages[locale]} <b>Not bold</b>`,
        manageUrl: `${sampleLink}-settings`,
      });
    case 'community-digest':
      return communityDigest({
        locale,
        assetBase,
        items: (['reply', 'mention', 'status', 'watched', 'solved'] as const).map((kind) => sampleItem(locale, kind)),
        notificationsUrl: `${sampleLink}-notifications`,
        manageUrl: `${sampleLink}-settings`,
        unsubscribeUrl: `${sampleLink}-unsubscribe`,
        unsubscribeKind: 'all',
      });
    case 'team-contact':
      return teamNotification({
        form: 'contact',
        locale,
        assetBase,
        submissionId: sampleId,
        createdAt: sampleAt,
        acknowledgement: 'sent',
        data: { name: sampleNames[locale], email: sampleEmails[locale], topic: 'bug', message: sampleMessages[locale], device: 'iPhone 17 Pro', 'ios-version': '27.0', 'app-version': '5.1.1', locale, referrer: `https://www.outbrick.site${locale === 'en' ? '' : `/${locale}`}/contact`, user_agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 27_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/27.0 Mobile/15E148 Safari/604.1', ip: '203.0.113.7', 'bot-field': '' },
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
    default: {
      const content = issue.locales[locale] ?? issue.locales.en;
      if (!content) throw new Error(`issue ${issue.id} has no ${locale} or en content`);
      return renderLifecycleSample(name, locale, content, assetBase);
    }
  }
}
