// Every word of the customer-lifecycle emails (emails/lifecycle.ts), in the site's six languages.
//
// Same voice as emails/i18n.ts: warm, plain, a brick friend at the counter, never a ticket
// system and never pressure. Strings never contain markup; values reach these functions raw and
// the templates escape them. German uses "Sie" throughout except the affiliate emails, which use
// "du" as the affiliate programme pages do.
//
// The other languages live in lifecycle-i18n-<lang>.ts and must match LifecycleCopy exactly.

import type { EmailLocale } from './i18n.ts';
import { fr } from './lifecycle-i18n-fr.ts';
import { de } from './lifecycle-i18n-de.ts';
import { es } from './lifecycle-i18n-es.ts';
import { ja } from './lifecycle-i18n-ja.ts';
import { ptBR } from './lifecycle-i18n-pt-BR.ts';

export type LifecycleCopy = {
  /** Shown before a case reference: "Case OB-7K3Q2M". */
  caseRef: (ref: string) => string;
  supportReply: {
    subject: (ref: string) => string;
    preheader: string;
    eyebrow: string;
    heading: (staff: string) => string;
    continue: string;
    showOriginal: string;
    original: string;
    cta: string;
    why: string;
  };
  supportFixed: {
    subject: (version: string) => string;
    preheader: (version: string) => string;
    eyebrow: string;
    heading: (version: string) => string;
    intro: (version: string) => string;
    steps: { title: string; body: string }[];
    cta: string;
    still: string;
    why: string;
  };
  supportFeedback: {
    subject: string;
    preheader: string;
    eyebrow: string;
    heading: (name: string) => string;
    intro: string;
    solvedQuestion: string;
    yes: string;
    no: string;
    rateQuestion: string;
    /** Three captions under Bloo thinking, smiling and cheering, from worst to best. */
    faces: [string, string, string];
    private: string;
    why: string;
  };
  feedbackPage: {
    title: string;
    solvedYes: string;
    solvedNo: string;
    /** The page after a rating tap: "You chose: Great." */
    chose: (label: string) => string;
    commentLabel: string;
    commentHint: string;
    send: string;
    thanksTitle: string;
    thanksBody: string;
    reopenedBody: string;
    expired: string;
  };
  affiliateApproved: {
    subject: string;
    preheader: string;
    eyebrow: string;
    heading: (name: string) => string;
    intro: string;
    code: string;
    link: string;
    checklistTitle: string;
    checklist: { title: string; body: string }[];
    cta: string;
    pressKit: string;
    why: string;
  };
  affiliateDeclined: {
    subject: string;
    preheader: string;
    heading: (name: string) => string;
    intro: string;
    reasonTitle: string;
    later: string;
    cta: string;
    why: string;
  };
  careersInReview: {
    subject: (role: string) => string;
    preheader: string;
    eyebrow: string;
    heading: (name: string) => string;
    intro: (role: string) => string;
    timeline: { title: string; body: string }[];
    cta: string;
    why: string;
  };
  careersNextStep: {
    subject: (role: string) => string;
    preheader: string;
    eyebrow: string;
    heading: (name: string) => string;
    intro: (role: string) => string;
    messageTitle: string;
    reply: string;
    why: string;
  };
  careersDeclined: {
    subject: (role: string) => string;
    preheader: string;
    heading: (name: string) => string;
    intro: (role: string) => string;
    messageTitle: string;
    keep: string;
    cta: string;
    why: string;
  };
  welcomeBoards: {
    subject: string;
    preheader: string;
    eyebrow: string;
    heading: string;
    intro: string;
    steps: { title: string; body: string }[];
    tipButton: string;
    tipLabel: string;
    tip: string;
    cta: string;
    why: string;
  };
  welcomeFriends: {
    subject: string;
    preheader: string;
    eyebrow: string;
    heading: string;
    intro: string;
    friendsQuestion: string;
    dailyTitle: string;
    dailyBody: string;
    dailyCta: string;
    communityTitle: string;
    communityBody: string;
    communityCta: string;
    preferences: string;
    why: string;
  };
  release: {
    subject: (version: string) => string;
    preheader: (version: string) => string;
    eyebrow: string;
    heading: (version: string) => string;
    intro: string;
    notesTitle: string;
    cta: string;
    more: string;
  };
  event: {
    eyebrow: string;
    when: string;
    cta: string;
  };
  reengage: {
    subject: string;
    preheader: string;
    eyebrow: string;
    heading: string;
    intro: string;
    keep: string;
    leave: string;
    fewer: string;
    after: string;
    why: string;
  };
  preferences: {
    linkSubject: string;
    linkPreheader: string;
    linkHeading: string;
    linkIntro: string;
    linkCta: string;
    linkIgnore: string;
    linkWhy: string;
    pageTitle: string;
    pageIntro: string;
    topicsTitle: string;
    topics: { releases: [string, string]; tips: [string, string]; events: [string, string] };
    frequencyTitle: string;
    frequency: { everything: [string, string]; monthly: [string, string] };
    pauseTitle: string;
    pauseHint: string;
    pauseNone: string;
    pause30: string;
    pause90: string;
    pausedUntil: (date: string) => string;
    pauseKeep: (date: string) => string;
    pauseResume: string;
    language: string;
    save: string;
    saved: string;
    unsubscribeAll: string;
    askTitle: string;
    askIntro: string;
    askEmail: string;
    askSend: string;
    askSent: string;
    kept: string;
    keptBody: string;
    manage: string;
  };
  passkeyAdded: {
    subject: string;
    preheader: string;
    eyebrow: string;
    heading: string;
    intro: (nickname: string) => string;
    when: string;
    notYou: string;
    cta: string;
    why: string;
  };
  newSignIn: {
    subject: string;
    preheader: string;
    eyebrow: string;
    heading: string;
    intro: string;
    device: string;
    when: string;
    fine: string;
    notYou: string;
    cta: string;
    manage: string;
    why: string;
    pageTitle: string;
    pageBody: string;
    pageButton: string;
    doneTitle: string;
    doneBody: string;
  };
  accountDeleted: {
    subject: string;
    preheader: string;
    eyebrow: string;
    heading: string;
    intro: string;
    gone: { title: string; body: string }[];
    stays: string;
    newsletter: string;
    mistake: string;
    why: string;
  };
  dataExport: {
    subject: string;
    preheader: string;
    eyebrow: string;
    heading: string;
    intro: string;
    cta: string;
    expiry: (hours: number) => string;
    notYou: string;
    why: string;
  };
  policy: {
    subject: (policy: string) => string;
    preheader: (date: string) => string;
    eyebrow: string;
    heading: (policy: string) => string;
    intro: (date: string) => string;
    changesTitle: string;
    cta: string;
    noAction: string;
    names: { privacy: string; terms: string };
    whyMember: string;
    whyNews: string;
  };
};

const en: LifecycleCopy = {
  caseRef: (ref) => `Case ${ref}`,
  supportReply: {
    subject: (ref) => `Re: your message to OutBrick Support [${ref}]`,
    preheader: 'A person from the OutBrick team has answered your message.',
    eyebrow: 'OutBrick Support',
    heading: (staff) => `A reply from ${staff}`,
    continue: 'To keep talking, just reply to this email. It goes straight back to the same person, with your case attached.',
    showOriginal: 'Show what you sent',
    original: 'Your message',
    cta: 'Browse the support page',
    why: 'You’re receiving this because you wrote to OutBrick Support from outbrick.site. It doesn’t add you to any mailing list.',
  },
  supportFixed: {
    subject: (v) => `Fixed in OutBrick ${v}: the problem you reported`,
    preheader: (v) => `Version ${v} is on the App Store, with a fix for what you told us about.`,
    eyebrow: 'Good news',
    heading: (v) => `It’s fixed in OutBrick ${v}.`,
    intro: (v) => `You took the time to tell us something was wrong. Version ${v} is now on the App Store and it carries the fix. Thank you: reports like yours are how the board gets better.`,
    steps: [
      { title: 'Update.', body: 'Open the App Store, tap your profile picture and update OutBrick, or wait for automatic updates.' },
      { title: 'Play.', body: 'Your progress, stars and friends carry over as they are.' },
    ],
    cta: 'Update on the App Store',
    still: 'Still seeing it after updating? Reply to this email and your case reopens with the same person.',
    why: 'You’re receiving this because you reported a problem to OutBrick Support and we promised to tell you when it was fixed.',
  },
  supportFeedback: {
    subject: 'Did we solve it? One tap tells us',
    preheader: 'A single tap, no form, no account. It helps the next player who writes in.',
    eyebrow: 'OutBrick Support',
    heading: (name) => (name ? `${name}, did we solve it?` : 'Did we solve it?'),
    intro: 'A few days ago the team answered your message. We’d love to know whether it actually helped.',
    solvedQuestion: 'Is your problem solved?',
    yes: 'Yes, solved',
    no: 'No, not yet',
    rateQuestion: 'And how was talking to us?',
    faces: ['Not great', 'Okay', 'Great'],
    private: 'Your answer goes to the support team only. If it’s “not yet”, your case reopens and someone writes back.',
    why: 'You’re receiving this one-off follow-up because you wrote to OutBrick Support. We ask once per case.',
  },
  feedbackPage: {
    title: 'Thanks for the answer',
    solvedYes: 'Glad it’s solved.',
    solvedNo: 'Sorry it isn’t solved yet.',
    chose: (label) => `You chose: ${label}.`,
    commentLabel: 'Anything to add? (optional)',
    commentHint: 'What helped, what didn’t, what’s still wrong.',
    send: 'Send',
    thanksTitle: 'Thank you!',
    thanksBody: 'Your answer reached the support team. Every one is read.',
    reopenedBody: 'Your case is open again and a person will write back by email.',
    expired: 'This link has expired. If something is still wrong, write to us from the support page.',
  },
  affiliateApproved: {
    subject: 'You’re in: welcome to the OutBrick affiliate programme',
    preheader: 'Your code is live. Here’s your link and how to get started.',
    eyebrow: 'Affiliate programme',
    heading: (name) => (name ? `Welcome aboard, ${name}!` : 'Welcome aboard!'),
    intro: 'Your application is approved and your code is live from today. In-app purchases that App Store Connect attributes to your campaign earn you the share set out in the programme terms.',
    code: 'Your code',
    link: 'Your link',
    checklistTitle: 'Your first week',
    checklist: [
      { title: 'Play a few boards.', body: 'Your audience can tell when you know the game.' },
      { title: 'Use the press kit.', body: 'Real screenshots, the friends and the logo, ready to post.' },
      { title: 'Say it’s an affiliate link.', body: 'A short “#ad” or “affiliate link” keeps it honest and is required in most countries.' },
      { title: 'Tell us how to pay you.', body: 'Reply with your preferred payment method and we’ll agree it with you. Questions are welcome too.' },
    ],
    cta: 'Read the programme terms',
    pressKit: 'Open the press kit',
    why: 'You’re receiving this because you applied to the OutBrick affiliate programme at outbrick.site.',
  },
  affiliateDeclined: {
    subject: 'About your OutBrick affiliate application',
    preheader: 'Thank you for applying. Here’s our answer, and what could change it.',
    heading: (name) => (name ? `Thank you, ${name}.` : 'Thank you for applying.'),
    intro: 'We read your application carefully, and we can’t accept it right now. This isn’t a judgement of you or your work.',
    reasonTitle: 'Why',
    later: 'You’re welcome to apply again later, especially if your channel or plans change. Just reply to this email.',
    cta: 'See the programme',
    why: 'You’re receiving this one-off email because you applied to the OutBrick affiliate programme at outbrick.site.',
  },
  careersInReview: {
    subject: (role) => `Your application is in review: ${role}`,
    preheader: 'A person is reading your application now. Here’s what happens next.',
    eyebrow: 'Careers',
    heading: (name) => (name ? `${name}, your application is in review.` : 'Your application is in review.'),
    intro: (role) => `Someone on the team is reading your application for ${role} now. You’ll hear from us by email either way.`,
    timeline: [
      { title: 'Now:', body: 'we read your application and anything you linked.' },
      { title: 'Next:', body: 'if it’s a match, a short video call to get to know each other.' },
      { title: 'Then:', body: 'a decision, by email, whichever way it goes.' },
    ],
    cta: 'See all open roles',
    why: 'You’re receiving this because you applied for a role at outbrick.site.',
  },
  careersNextStep: {
    subject: (role) => `Next step for ${role} at OutBrick`,
    preheader: 'We’d like to talk. Here’s what we’d suggest.',
    eyebrow: 'Careers',
    heading: (name) => (name ? `Good news, ${name}!` : 'Good news!'),
    intro: (role) => `We enjoyed reading your application for ${role} and we’d like to take the next step with you.`,
    messageTitle: 'From the team',
    reply: 'Reply to this email to answer or to suggest a time that suits you.',
    why: 'You’re receiving this because you applied for a role at outbrick.site.',
  },
  careersDeclined: {
    subject: (role) => `About your application: ${role}`,
    preheader: 'Thank you for your time. Here’s our answer.',
    heading: (name) => (name ? `Thank you, ${name}.` : 'Thank you.'),
    intro: (role) => `We’ve finished reviewing applications for ${role}, and we won’t be moving forward with yours this time. It was a close field, and we’re grateful you thought of us.`,
    messageTitle: 'A note from the team',
    keep: 'If a role opens that suits you better, we’d be glad to hear from you again.',
    cta: 'See other open roles',
    why: 'You’re receiving this because you applied for a role at outbrick.site.',
  },
  welcomeBoards: {
    subject: 'How an OutBrick board works, in one minute',
    preheader: 'Three things to know, and one tip good players learn early.',
    eyebrow: 'OutBrick News · Welcome 2 of 3',
    heading: 'One minute, three ideas.',
    intro: 'OutBrick is a calm slide-and-match puzzle: no timer, every board plays offline, and every board can be cleared without spending anything. Here’s what good players know early.',
    steps: [
      { title: 'Slide.', body: 'Swipe a brick toward empty space and it stops where you let go; slide it into the gate of its colour and it goes home.' },
      { title: 'Match.', body: 'Swipe a brick into a neighbour to swap them; three or more of a colour in a line clear.' },
      { title: 'Meet the goals.', body: 'Each board shows its goals and its moves. Finish early and leftover moves become line blasters for your score.' },
    ],
    tipButton: 'Tap for the tip',
    tipLabel: 'The tip',
    tip: 'Before you match, look for a brick that can go straight home through its gate: every brick that leaves makes room for the rest. And four in a line makes a line blaster, so look for four before you settle for three.',
    cta: 'Read the full play guide',
    why: 'You’re receiving this because you subscribed to OutBrick News. It’s the second of three short welcome letters.',
  },
  welcomeFriends: {
    subject: 'Meet the nine friends (and the daily board)',
    preheader: 'Who’s who on the Journey, a fresh board every day, and where players meet.',
    eyebrow: 'OutBrick News · Welcome 3 of 3',
    heading: 'Nine friends, one road.',
    intro: 'Bloo has company. Tap a friend to meet them on the website: each one hosts a stretch of the Journey.',
    friendsQuestion: 'Who will you play with first?',
    dailyTitle: 'A new board every day',
    dailyBody: 'The daily board is the same for everyone, everywhere. No account, nothing to unlock.',
    dailyCta: 'Play today’s board',
    communityTitle: 'Players help players',
    communityBody: 'Stuck on a level, or have an idea? The OutBrick Community is where players and the team talk.',
    communityCta: 'Visit the community',
    preferences: 'Choose what you hear about',
    why: 'You’re receiving this because you subscribed to OutBrick News. It’s the last of three short welcome letters; after this, only real news.',
  },
  release: {
    subject: (v) => `OutBrick ${v} is out`,
    preheader: (v) => `What’s new in version ${v}, in plain words.`,
    eyebrow: 'OutBrick News · New version',
    heading: (v) => `OutBrick ${v} is on the App Store.`,
    intro: 'Here’s what changed, straight from the release notes.',
    notesTitle: 'What’s new',
    cta: 'Update on the App Store',
    more: 'Read the full release notes',
  },
  event: {
    eyebrow: 'Event',
    when: 'When',
    cta: 'Join in',
  },
  reengage: {
    subject: 'Still want to hear from OutBrick?',
    preheader: 'One tap keeps you on the list. Otherwise we’ll quietly stop writing.',
    eyebrow: 'OutBrick News',
    heading: 'Should we keep writing?',
    intro: 'It’s been a while since you followed a link in one of our letters, and we’d rather not fill an inbox that doesn’t want us.',
    keep: 'Yes, keep me on the list',
    leave: 'No, unsubscribe me',
    fewer: 'Or hear about less',
    after: 'If we don’t hear from you in two weeks, we’ll take you off the list. You can always sign up again on the website.',
    why: 'You’re receiving this because you subscribed to OutBrick News at outbrick.site.',
  },
  preferences: {
    linkSubject: 'Your OutBrick News preferences',
    linkPreheader: 'The link to choose what you hear about. It works for 7 days.',
    linkHeading: 'Choose what you hear about.',
    linkIntro: 'Someone, hopefully you, asked to change the OutBrick News settings for this address.',
    linkCta: 'Open my preferences',
    linkIgnore: 'Didn’t ask? Ignore this email and nothing changes.',
    linkWhy: 'You’re receiving this because this address was entered on the OutBrick News preferences page.',
    pageTitle: 'Your OutBrick News',
    pageIntro: 'Pick what you’d like to hear about. Changes apply from the next letter.',
    topicsTitle: 'Topics',
    topics: {
      releases: ['New versions', 'What changed in each App Store update.'],
      tips: ['Tips and guides', 'How to play better, and the stories behind the boards.'],
      events: ['Events and seasons', 'New villages, holiday events and challenges.'],
    },
    frequencyTitle: 'How often',
    frequency: {
      everything: ['Everything', 'Every letter: the monthly news, new versions as they ship, and the welcome letters.'],
      monthly: ['Monthly only', 'Just the monthly letter. No separate emails for new versions.'],
    },
    pauseTitle: 'Take a break',
    pauseHint: 'While the newsletter is paused we send you no letters. They start again by themselves when the pause ends.',
    pauseNone: 'Keep the letters coming',
    pause30: 'Pause for 30 days',
    pause90: 'Pause for 90 days',
    pausedUntil: (date) => `Your newsletter is paused until ${date}.`,
    pauseKeep: (date) => `Stay paused until ${date}`,
    pauseResume: 'Resume now',
    language: 'Language',
    save: 'Save my choices',
    saved: 'Saved. Thank you!',
    unsubscribeAll: 'Unsubscribe from everything',
    askTitle: 'Manage your OutBrick News',
    askIntro: 'Enter the address you subscribed with and we’ll email you a link to your preferences.',
    askEmail: 'Email address',
    askSend: 'Email me the link',
    askSent: 'If that address is on the list, the link is on its way.',
    kept: 'You’re staying on the list',
    keptBody: 'Thank you! We’ll keep writing, about once a month and only when there’s something to say.',
    manage: 'Preferences',
  },
  passkeyAdded: {
    subject: 'A passkey was added to your OutBrick Community account',
    preheader: 'If this was you, there’s nothing to do.',
    eyebrow: 'Account security',
    heading: 'New passkey added',
    intro: (nickname) => `A passkey named “${nickname}” can now sign in to your OutBrick Community account.`,
    when: 'When',
    notYou: 'If this wasn’t you, remove the passkey on your account page and sign out of every device, then reply to this email.',
    cta: 'Review my passkeys',
    why: 'You’re receiving this security notice because your OutBrick Community account changed. These can’t be switched off.',
  },
  newSignIn: {
    subject: 'New sign-in to your OutBrick Community account',
    preheader: 'From a browser or device we haven’t seen before.',
    eyebrow: 'Account security',
    heading: 'A new sign-in',
    intro: 'Your OutBrick Community account was just signed in to from a browser or device it hasn’t used before.',
    device: 'Device',
    when: 'When',
    fine: 'If this was you, there’s nothing to do.',
    notYou: 'Not you? Sign out everywhere now. It takes one tap and ends every session, including this one.',
    cta: 'Sign out of every device',
    manage: 'Open my account',
    why: 'You’re receiving this security notice because your OutBrick Community account was used. These can’t be switched off.',
    pageTitle: 'Sign out of every device?',
    pageBody: 'This ends every OutBrick Community session on every browser and device. You can sign in again with your email or a passkey.',
    pageButton: 'Sign out everywhere',
    doneTitle: 'Signed out everywhere',
    doneBody: 'Every session has ended. If you think someone else had access, also check your email account’s password and your passkeys.',
  },
  accountDeleted: {
    subject: 'Your OutBrick Community account is deleted',
    preheader: 'As you asked. Here’s exactly what went and what stays.',
    eyebrow: 'Account',
    heading: 'Your account is deleted.',
    intro: 'As you asked, your OutBrick Community account is gone. This is the last email about it.',
    gone: [
      { title: 'Gone:', body: 'your email address, sign-ins, passkeys, notifications, follows, reactions, badges and unused images.' },
      { title: 'Stays:', body: 'posts you wrote, so threads still read, shown as “Former member”. Reply to have any of them removed.' },
    ],
    stays: 'Your game progress lives on your devices and in iCloud, not here, so it’s untouched.',
    newsletter: 'If you also get OutBrick News, that’s separate: use the unsubscribe link in any letter.',
    mistake: 'Didn’t do this? Reply to this email straight away.',
    why: 'You’re receiving this one-off confirmation because your OutBrick Community account was deleted.',
  },
  dataExport: {
    subject: 'Your OutBrick Community data',
    preheader: 'A copy of everything we hold about your account, ready to download.',
    eyebrow: 'Your data',
    heading: 'Your data is ready.',
    intro: 'Here’s a copy of everything the OutBrick Community holds about your account, as a JSON file you can open in any text editor.',
    cta: 'Download my data',
    expiry: (hours) => `The link works for ${hours} hours and only for this account.`,
    notYou: 'Didn’t ask for this? Someone signed in to your account asked for it. Sign out of every device from your account page and reply to this email.',
    why: 'You’re receiving this because a data export was requested for your OutBrick Community account.',
  },
  policy: {
    subject: (policy) => `We’re updating our ${policy}`,
    preheader: (date) => `The changes take effect on ${date}. Here’s what’s different, in plain words.`,
    eyebrow: 'An update',
    heading: (policy) => `Our ${policy} is changing.`,
    intro: (date) => `We’re making some changes, taking effect on ${date}. Here they are in plain words; the full text is on the website.`,
    changesTitle: 'What’s changing',
    cta: 'Read the full text',
    noAction: 'There’s nothing you need to do. If you have a question, reply to this email.',
    names: { privacy: 'privacy policy', terms: 'terms of use' },
    whyMember: 'You’re receiving this service notice because you have an OutBrick Community account.',
    whyNews: 'You’re receiving this service notice because you subscribed to OutBrick News.',
  },
};

export const lifecycleCopy: Record<EmailLocale, LifecycleCopy> = { en, fr, de, es, ja, 'pt-BR': ptBR };
export { en as lifecycleEn };
