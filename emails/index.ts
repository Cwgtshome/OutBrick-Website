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

import { communityConfirmEmail, communityDigest, communityNotification, communitySignIn, communityWelcome, type NotificationItem } from './community.ts';
// Phase 2 (community-p2)
import { communityReplyBounce, communityWeeklyDigest } from './community-digest.ts';

export * from './templates.ts';
export * from './community.ts';
export * from './community-digest.ts';
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
  | 'community-digest'
  // Phase 2 (community-p2)
  | 'community-merged'
  | 'community-reply-by-email'
  | 'community-weekly-digest'
  | 'community-reply-bounce';

export type TemplateName = 'contact' | 'contact-bug' | 'careers' | 'affiliate' | 'newsletter-confirm' | 'newsletter-welcome' | 'newsletter-campaign' | CommunityTemplateName;

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
  'community-digest',
  // Phase 2 (community-p2)
  'community-merged',
  'community-reply-by-email',
  'community-weekly-digest',
  'community-reply-bounce',
];

export const templateNames: TemplateName[] = ['contact', 'contact-bug', 'careers', 'affiliate', 'newsletter-confirm', 'newsletter-welcome', 'newsletter-campaign', ...communityTemplateNames];

export const templateTitles: Record<TemplateName, string> = {
  contact: 'Contact acknowledgement (Support topic)',
  'contact-bug': 'Contact acknowledgement (Bug report, no device given)',
  careers: 'Careers acknowledgement',
  affiliate: 'Affiliate acknowledgement',
  'newsletter-confirm': 'Newsletter: confirm your subscription',
  'newsletter-welcome': 'Newsletter: welcome',
  'newsletter-campaign': 'Newsletter: campaign layout (sample issue)',
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
  'community-digest': 'Community: several notifications grouped',
  'community-merged': 'Community: your post moved in a thread merge',
  'community-reply-by-email': 'Community: reply notification with the reply-by-email hint',
  'community-weekly-digest': 'Community: weekly digest (opt-in, Mondays)',
  'community-reply-bounce': 'Community: a reply by email could not be posted',
};

const sampleTitles: Record<EmailLocale, string> = {
  en: 'VoiceOver reads the move counter <i>twice</i>',
  fr: 'VoiceOver lit le compteur de coups <i>deux fois</i>',
  de: 'VoiceOver liest den Zugzähler <i>doppelt</i> vor',
  es: 'VoiceOver lee el contador de movimientos <i>dos veces</i>',
  ja: 'VoiceOverが手数カウンターを<i>2回</i>読み上げる',
};

const sampleActors: Record<EmailLocale, string> = { en: 'Ada', fr: 'Camille', de: 'Lena', es: 'Lucía', ja: '花子' };

const sampleNotes: Record<EmailLocale, string> = {
  en: 'Fixed in 5.1. Thanks for the clear steps!',
  fr: 'Corrigé dans la 5.1. Merci pour les étapes si claires !',
  de: 'Behoben in 5.1. Danke für die klaren Schritte!',
  es: 'Corregido en la 5.1. ¡Gracias por los pasos tan claros!',
  ja: '5.1で修正しました。わかりやすい手順をありがとうございます！',
};

const sampleReasons: Record<EmailLocale, string> = {
  en: 'It shared another player’s email address. You’re welcome to post it again without that line.',
  fr: 'Il contenait l’adresse e-mail d’un autre joueur. Vous pouvez le republier sans cette ligne.',
  de: 'Er enthielt die E-Mail-Adresse eines anderen Spielers. Sie können ihn gern ohne diese Zeile erneut posten.',
  es: 'Incluía la dirección de correo de otro jugador. Puedes volver a publicarlo sin esa línea.',
  ja: 'ほかのプレイヤーのメールアドレスが含まれていました。その行を除けば、もう一度投稿していただいてかまいません。',
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
  };
}


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
    case 'community-moderation': {
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
    case 'newsletter-campaign': {
      const content = issue.locales[locale] ?? issue.locales.en;
      if (!content) throw new Error(`issue ${issue.id} has no ${locale} or en content`);
      return newsletterCampaign({ locale, assetBase, issue: content, unsubscribeUrl: `${sampleLink}-unsubscribe`, address: issue.address ?? PLACEHOLDER_ADDRESS });
    }
  }
}

