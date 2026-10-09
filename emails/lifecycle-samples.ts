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
  'newsletter-letter',
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
  'newsletter-letter': 'Newsletter: the monthly friends’ letter (Poppy writes; puzzle; community)',
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

/** The friends' letter sample: Poppy, the storyteller, writes October's letter. */
const sampleLetters: Record<EmailLocale, { subject: string; preheader: string; eyebrow: string; title: string; letter: string; community: [string, string]; cta: string }> = {
  en: {
    subject: 'A letter from Poppy, and a board to solve',
    preheader: 'Poppy went out to the farm, and brought back a puzzle.',
    eyebrow: 'OutBrick News · The friends’ letter',
    title: 'This month, from Poppy',
    letter: 'Hello from the Journey! This month I followed Moss out to Clover Farm, where every fence and field is built from bricks. Moss says the trick on a farm board is the same as on any other: send home the brick that frees the most room first.\n\nI also read every story you posted in the forum. Thank you for the screenshots, the near-misses and the boards you cleared with one move to spare. Keep them coming: the best ones end up in this letter.',
    community: ['Your toughest board this month', 'Show us your favourite village'],
    cta: 'Visit the community',
  },
  fr: {
    subject: 'Une lettre de Poppy, et un plateau à résoudre',
    preheader: 'Poppy est allée à la ferme, et en a rapporté un casse-tête.',
    eyebrow: 'OutBrick News · La lettre des amis',
    title: 'Ce mois-ci, de la part de Poppy',
    letter: 'Bonjour depuis le Voyage ! Ce mois-ci, j’ai suivi Moss jusqu’à Clover Farm, où chaque clôture et chaque champ est fait de briques. Moss dit que l’astuce d’un plateau de la ferme est la même que partout : renvoyez d’abord chez elle la brique qui libère le plus de place.\n\nJ’ai aussi lu toutes les histoires que vous avez publiées sur le forum. Merci pour les captures, les victoires de justesse et les plateaux réussis avec un coup d’avance. Continuez : les plus belles finissent dans cette lettre.',
    community: ['Votre plateau le plus difficile du mois', 'Montrez-nous votre village préféré'],
    cta: 'Rejoindre la communauté',
  },
  de: {
    subject: 'Ein Brief von Poppy und ein Brett zum Lösen',
    preheader: 'Poppy war auf dem Bauernhof und hat ein Rätsel mitgebracht.',
    eyebrow: 'OutBrick News · Der Brief der Freunde',
    title: 'Diesen Monat von Poppy',
    letter: 'Hallo von der Reise! Diesen Monat bin ich Moss nach Clover Farm gefolgt, wo jeder Zaun und jedes Feld aus Steinen gebaut ist. Moss sagt, der Trick auf einem Bauernhof-Brett ist derselbe wie überall: Schicken Sie zuerst den Stein nach Hause, der den meisten Platz freimacht.\n\nIch habe auch jede Geschichte gelesen, die Sie im Forum geteilt haben. Danke für die Screenshots, die knappen Fälle und die Bretter, die Sie mit einem Zug Reserve gelöst haben. Schreiben Sie weiter: Die schönsten landen in diesem Brief.',
    community: ['Ihr schwierigstes Brett des Monats', 'Zeigen Sie uns Ihr Lieblingsdorf'],
    cta: 'Zur Community',
  },
  es: {
    subject: 'Una carta de Poppy y un tablero para resolver',
    preheader: 'Poppy fue a la granja y volvió con un acertijo.',
    eyebrow: 'OutBrick News · La carta de los amigos',
    title: 'Este mes, de parte de Poppy',
    letter: '¡Hola desde el Viaje! Este mes seguí a Moss hasta Clover Farm, donde cada valla y cada campo están hechos de ladrillos. Moss dice que el truco en un tablero de la granja es el mismo que en cualquier otro: manda primero a casa el ladrillo que libera más espacio.\n\nTambién leí todas las historias que publicaste en el foro. Gracias por las capturas, los casi-casi y los tableros que resolviste con un movimiento de sobra. Sigue compartiéndolas: las mejores acaban en esta carta.',
    community: ['Tu tablero más difícil del mes', 'Enséñanos tu aldea favorita'],
    cta: 'Ir a la comunidad',
  },
  ja: {
    subject: 'ポピーからの手紙と、今週のパズル',
    preheader: 'ポピーが農場へ出かけて、パズルを持って帰ってきました。',
    eyebrow: 'OutBrick News・なかまからの手紙',
    title: '今月はポピーから',
    letter: 'ジャーニーからこんにちは！今月はモスについてクローバーファームへ行ってきました。柵も畑も、ぜんぶブロックでできているんです。モスいわく、農場の盤面のコツもほかと同じ。いちばん場所をあけてくれるブロックを、まず先におうちへ帰してあげること。\n\nフォーラムに投稿してくれたお話も、ぜんぶ読みました。スクリーンショットや、ぎりぎりの勝負、あと一手を残してクリアした盤面をありがとう。これからも聞かせてください。とっておきのお話は、この手紙で紹介します。',
    community: ['今月いちばん手ごわかった盤面', 'お気に入りの村を見せてください'],
    cta: 'コミュニティへ',
  },
  'pt-BR': {
    subject: 'Uma carta da Poppy e um tabuleiro para resolver',
    preheader: 'A Poppy foi até a fazenda e voltou com um desafio.',
    eyebrow: 'OutBrick News · A carta dos amigos',
    title: 'Este mês, da Poppy',
    letter: 'Olá da Jornada! Este mês eu segui o Moss até a Clover Farm, onde cada cerca e cada campo são feitos de blocos. O Moss diz que o truque num tabuleiro da fazenda é o mesmo de qualquer outro: mande para casa primeiro o bloco que libera mais espaço.\n\nTambém li todas as histórias que você publicou no fórum. Obrigada pelas capturas, pelos quase-perdeu e pelos tabuleiros resolvidos com uma jogada de sobra. Continue contando: as melhores aparecem nesta carta.',
    community: ['O seu tabuleiro mais difícil do mês', 'Mostre para a gente a sua vila favorita'],
    cta: 'Ir para a comunidade',
  },
};

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
    case 'newsletter-letter': {
      const c = weeklyPuzzleCopy[locale];
      const l = sampleLetters[locale];
      const site = `https://www.outbrick.site${locale === 'en' ? '' : `/${locale}`}`;
      return newsletterCampaign({
        ...base,
        issue: {
          ...issue,
          subject: l.subject,
          preheader: l.preheader,
          hero: { eyebrow: l.eyebrow, title: l.title, body: '' },
          stories: [],
          release: undefined,
          event: undefined,
          letter: { friend: 'poppy', body: l.letter },
          puzzle: { host: 'sprout', board: weeklyPuzzle, copy: { ...c, cta: { label: c.cta, href: `${site}/daily` } } },
          community: { items: l.community.map((title) => ({ title, href: `${site}/community` })) },
          cta: { label: l.cta, href: `${site}/community` },
        },
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
