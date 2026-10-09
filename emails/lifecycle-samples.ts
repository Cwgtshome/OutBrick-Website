// Sample data for the lifecycle emails and pages (emails/lifecycle.ts), for the previews built
// into Deploy Previews (scripts/build-email-previews.mjs) and the tests. Links are inert.

import { weeklyPuzzle, weeklyPuzzleCopy } from './friends.ts';
import type { EmailLocale } from './i18n.ts';
import {
  accountDeleted,
  affiliateApproved,
  affiliateDeclined,
  careersDeclined,
  careersInReview,
  careersNextStep,
  dataExport,
  newSignIn,
  passkeyAdded,
  policyNotice,
  preferencesLink,
  reengage,
  releaseNews,
  supportFeedback,
  supportFixed,
  supportReply,
  teamCaseUpdate,
  welcomeBoards,
  welcomeFriends,
} from './lifecycle.ts';
import { newsletterCampaign, type IssueContent, type Rendered } from './templates.ts';

export const lifecycleTemplateNames = [
  'support-reply',
  'support-fixed',
  'support-feedback',
  'team-case-update',
  'affiliate-approved',
  'affiliate-declined',
  'careers-in-review',
  'careers-next-step',
  'careers-declined',
  'newsletter-welcome-2',
  'newsletter-welcome-3',
  'newsletter-release',
  'newsletter-event',
  'newsletter-puzzle',
  'newsletter-reengage',
  'newsletter-preferences-link',
  'account-passkey-added',
  'account-new-sign-in',
  'account-deleted',
  'account-data-export',
  'notice-policy-member',
  'notice-policy-news',
] as const;
export type LifecycleTemplateName = (typeof lifecycleTemplateNames)[number];

export const lifecycleTemplateTitles: Record<LifecycleTemplateName, string> = {
  'support-reply': 'Support: a reply from the team (case reference, tap to show the original)',
  'support-fixed': 'Support: fixed in a new version (sent when the release ships)',
  'support-feedback': 'Support: did we solve it? (one-tap answers)',
  'team-case-update': 'Team copy: a player reopened a case',
  'affiliate-approved': 'Affiliates: approved (code ticket and first-week checklist)',
  'affiliate-declined': 'Affiliates: declined, with a reason',
  'careers-in-review': 'Careers: application in review',
  'careers-next-step': 'Careers: next step',
  'careers-declined': 'Careers: not this time',
  'newsletter-welcome-2': 'Newsletter: welcome series 2/3 (how a board works, tap for the tip)',
  'newsletter-welcome-3': 'Newsletter: welcome series 3/3 (the nine friends, daily board, community)',
  'newsletter-release': 'Newsletter: a new App Store version (Broadcast draft)',
  'newsletter-event': 'Newsletter: an issue with an event ticket',
  'newsletter-puzzle': 'Newsletter: Brick of the week (a board to solve in the email)',
  'newsletter-reengage': 'Newsletter: still want these?',
  'newsletter-preferences-link': 'Newsletter: the link to your preferences',
  'account-passkey-added': 'Account security: a passkey was added',
  'account-new-sign-in': 'Account security: sign-in from a new device',
  'account-deleted': 'Account: deleted (confirmation)',
  'account-data-export': 'Account: your data export is ready',
  'notice-policy-member': 'Notice: privacy policy changing (community members)',
  'notice-policy-news': 'Notice: terms changing (newsletter subscribers)',
};

const names: Record<EmailLocale, string> = { en: 'Ada Lovelace', fr: 'Camille Martin', de: 'Lena Schmidt', es: 'Lucía García', ja: '山田 花子', 'pt-BR': 'Ana Souza' };
const link = 'https://www.outbrick.site/support#preview-link';
const at = '2026-10-08T07:35:26.000Z';

export function renderLifecycleSample(name: LifecycleTemplateName, locale: EmailLocale, issue: IssueContent, assetBase?: string): Rendered {
  const base = { locale, assetBase };
  const manageUrl = `${link}-account`;
  switch (name) {
    case 'support-reply':
      return supportReply({
        ...base,
        name: names[locale],
        ref: 'OB-7K3Q2M',
        staff: 'Mourad',
        message: 'Thanks for the detailed report. Level 213 is **solvable within its moves**, but the last gate needs the colour bomb from the left column.\n\nIf you still get stuck, reply with a screenshot and I’ll look at your exact board. <b>Not bold</b>',
        original: 'Level 213 keeps telling me I’m out of moves one move before the gate.',
      });
    case 'support-fixed':
      return supportFixed({ ...base, name: names[locale], ref: 'OB-7K3Q2M', version: '5.1.1', note: 'The out-of-moves wall no longer appears one move early on boards with a sealed room.' });
    case 'support-feedback':
      return supportFeedback({ ...base, name: names[locale], ref: 'OB-7K3Q2M', links: { solved: `${link}-yes`, notSolved: `${link}-no`, rate: [1, 3, 5].map((n) => `${link}-${n}`) as [string, string, string] } });
    case 'team-case-update':
      return teamCaseUpdate({ ref: 'OB-7K3Q2M', caseUrl: `${link}-case`, solved: false, rating: 2, comment: 'Still happens on level 214 too. <b>Not bold</b>', reopened: true, locale, assetBase });
    case 'affiliate-approved':
      return affiliateApproved({ ...base, name: names[locale], code: 'ADA27' });
    case 'affiliate-declined':
      return affiliateDeclined({ ...base, name: names[locale], message: 'Your channel focuses on racing games, and the programme is for puzzle and casual audiences for now.' });
    case 'careers-in-review':
      return careersInReview({ ...base, name: names[locale], role: 'Content Marketing Lead' });
    case 'careers-next-step':
      return careersNextStep({ ...base, name: names[locale], role: 'Content Marketing Lead', message: 'Could you do a 30-minute video call next week? Tuesday or Thursday afternoon (CET) work for us.' });
    case 'careers-declined':
      return careersDeclined({ ...base, name: names[locale], role: 'Content Marketing Lead', message: 'Your portfolio was lovely; we chose someone with more App Store experience for this role.' });
    case 'newsletter-welcome-2':
      return welcomeBoards({ ...base, unsubscribeUrl: `${link}-unsubscribe`, preferencesUrl: `${link}-prefs` });
    case 'newsletter-welcome-3':
      return welcomeFriends({ ...base, unsubscribeUrl: `${link}-unsubscribe`, preferencesUrl: `${link}-prefs` });
    case 'newsletter-release':
      return releaseNews({ ...base, version: '5.1', notes: '• Slide & Match: slide bricks into empty space and swap neighbours\n• Twelve board types per village\n• Larger bricks and VoiceOver slide actions\n• Bug fixes', unsubscribeUrl: '{{{RESEND_UNSUBSCRIBE_URL}}}', preferencesUrl: `${link}-prefs` });
    case 'newsletter-event': {
      const story = issue.stories[0];
      const dates = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', timeZone: 'UTC' }).formatRange(new Date('2026-12-18T00:00:00Z'), new Date('2027-01-02T00:00:00Z'));
      return newsletterCampaign({ ...base, issue: { ...issue, event: { title: story.title, dates, body: story.body, link: story.link } }, unsubscribeUrl: `${link}-unsubscribe`, preferencesUrl: `${link}-prefs`, address: '' });
    }
    case 'newsletter-puzzle': {
      const c = weeklyPuzzleCopy[locale];
      return newsletterCampaign({
        ...base,
        issue: { ...issue, subject: `${c.eyebrow}: ${c.question.split(/[.。]/)[0]}`, preheader: c.question, stories: issue.stories.slice(0, 1), puzzle: { host: 'sprout', board: weeklyPuzzle, copy: { ...c, cta: { label: c.cta, href: `https://www.outbrick.site${locale === 'en' ? '' : `/${locale}`}/daily` } } } },
        unsubscribeUrl: `${link}-unsubscribe`,
        preferencesUrl: `${link}-prefs`,
        address: '',
      });
    }
    case 'newsletter-reengage':
      return reengage({ ...base, keepUrl: `${link}-keep`, unsubscribeUrl: `${link}-unsubscribe`, preferencesUrl: `${link}-prefs` });
    case 'newsletter-preferences-link':
      return preferencesLink({ ...base, url: `${link}-prefs` });
    case 'account-passkey-added':
      return passkeyAdded({ ...base, nickname: 'iPhone', at, manageUrl });
    case 'account-new-sign-in':
      return newSignIn({ ...base, device: 'Safari on macOS', at, signOutUrl: `${link}-signout`, manageUrl });
    case 'account-deleted':
      return accountDeleted(base);
    case 'account-data-export':
      return dataExport({ ...base, downloadUrl: `${link}-export`, manageUrl });
    case 'notice-policy-member':
      return policyNotice({ ...base, policy: 'privacy', effective: '2026-11-08', audience: 'member', manageUrl, changes: ['We now name **Resend** as the service that sends our emails.', 'We explain how support cases are stored and how to ask for them to be removed.', 'You can download your community data at any time.'] });
    case 'notice-policy-news':
      return policyNotice({ ...base, policy: 'terms', effective: '2026-11-08', audience: 'news', unsubscribeUrl: `${link}-unsubscribe`, changes: ['The affiliate programme terms now have their own page.'] });
  }
}
