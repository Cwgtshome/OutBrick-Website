import type { Locale } from '../i18n/locales.ts';

/**
 * The Support Centre: the pages around /support that help a player *act* rather than read —
 * the step-by-step troubleshooter (/support/troubleshooter), known issues and fixes
 * (/support/known-issues) and a player's own request page (/support/request) — plus the
 * "Was this helpful?" question on every Help Centre guide.
 *
 * Every language file (lib/support/copy/<locale>.ts, lib/support/issues/<locale>.ts) holds the
 * same keys; English is the source. Inline text may use the Help Centre's tiny markup
 * (**bold**, [words](/path), [words](help:slug#section)), rendered without HTML by
 * app/support-centre.tsx.
 */

export const caseStatuses = ['open', 'replied', 'fix_pending', 'resolved', 'closed'] as const;
export type CaseStatus = (typeof caseStatuses)[number];

export const feedbackReasons = ['unclear', 'missing', 'outdated', 'didnt-work', 'other'] as const;
export type FeedbackReason = (typeof feedbackReasons)[number];

export const assistiveOptions = ['VoiceOver', 'Voice Control', 'Switch Control', 'Full Keyboard Access', 'Larger Text', 'Zoom', 'other'] as const;

/** The words of the Support Centre pages and widgets. Functions take already-formatted values. */
export type SupportCopy = {
  supportCrumb: string;
  /** The three entry points shown on the Support page and the contact page. */
  hub: {
    title: string;
    lede: string;
    fixTitle: string;
    fixText: string;
    issuesTitle: string;
    issuesText: string;
    trackTitle: string;
    trackText: string;
    levelsTitle: string;
    levelsText: string;
    involvedTitle: string;
    involvedText: string;
    /** The reply-time promise, shown on the contact page, the hub and the request page. */
    promise: string;
  };

  /** /support/levels: help with one Journey level. */
  levels: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lede: string;
    label: string;
    hint: string;
    action: string;
    invalid: string;
    /** "Level 512 in the community" */
    resultsTitle: (level: number) => string;
    none: (level: number) => string;
    loading: string;
    failed: string;
    solved: string;
    replies: (n: number) => string;
    askTitle: string;
    askText: string;
    askAction: string;
    /** The title a new thread starts with: "Level 512: " */
    askThreadTitle: (level: number) => string;
    bugAction: string;
    tipsTitle: string;
    /** Inline markup allowed. */
    tips: string[];
    spoilersTitle: string;
    spoilersText: string;
  };

  /** /support/get-involved: beta testing, the accessibility panel and the monthly team post. */
  involved: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lede: string;
    beta: { title: string; text: string; points: string[]; action: string };
    panel: { title: string; text: string; points: string[]; action: string };
    monthly: { title: string; text: string; followAction: string; newsAction: string };
    honest: string;
  };

  /** The site-wide status banner. */
  banner: {
    level: { info: string; warning: string; outage: string };
    more: string;
    dismiss: string;
  };

  /** Screenshots on the contact form and the request page. */
  attach: {
    label: string;
    hint: string;
    add: string;
    remove: string;
    uploading: string;
    failed: string;
    tooBig: string;
    tooMany: string;
    /** "Screenshot 2" */
    alt: (n: number) => string;
    title: string;
  };

  issues: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lede: string;
    /** "Last reviewed 9 October 2026" */
    reviewed: (date: string) => string;
    openTitle: string;
    resolvedTitle: string;
    noneOpen: string;
    status: { investigating: string; 'fix-coming': string; fixed: string };
    affects: string;
    whatHappens: string;
    workaround: string;
    fix: string;
    readMore: string;
    notListedTitle: string;
    notListedText: string;
    reportAction: string;
    contactAction: string;
    stayTitle: string;
    stayText: string;
    stayAction: string;
  };

  fix: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lede: string;
    chooseTitle: string;
    chooseHint: string;
    /** "Step 2 of 5" */
    stepOf: (step: number, total: number) => string;
    quickCheck: string;
    worked: string;
    next: string;
    back: string;
    another: string;
    fixedTitle: string;
    fixedText: string;
    stillTitle: string;
    stillText: string;
    contactAction: string;
    askAction: string;
    bugAction: string;
    knownIssue: string;
    /** Shown above the full list when scripts are off, and as a heading for "all the steps". */
    allSteps: string;
    readGuide: string;
  };

  request: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lede: string;
    loading: string;
    invalid: string;
    expired: string;
    failed: string;
    reference: string;
    topic: string;
    opened: string;
    updated: string;
    statusTitle: Record<CaseStatus, string>;
    statusText: Record<CaseStatus, string>;
    /** The four steps of the progress bar. */
    stages: { received: string; answered: string; fixing: string; solved: string };
    historyTitle: string;
    yourMessage: string;
    detailsTitle: string;
    detail: { level: string; 'purchase-item': string; 'purchase-date': string; assistive: string; tried: string; guide: string; device: string; ios: string; app: string };
    event: {
      created: string;
      reply: (staff: string) => string;
      fixedIn: (version: string) => string;
      fixedShipped: (version: string) => string;
      resolved: string;
      closed: string;
      reopened: string;
      solvedYes: string;
      solvedNo: string;
      rated: (stars: number) => string;
      playerNote: string;
    };
    addTitle: string;
    addHint: string;
    addLabel: string;
    addAction: string;
    addSending: string;
    added: string;
    addReopens: string;
    feedbackTitle: string;
    feedbackText: string;
    solvedYes: string;
    solvedNo: string;
    rateLabel: string;
    lookupTitle: string;
    lookupText: string;
    refLabel: string;
    refHint: string;
    emailLabel: string;
    lookupAction: string;
    lookupSending: string;
    lookupSent: string;
    noLinkTitle: string;
    noLinkText: string;
    tooMany: string;
    newRequest: string;
  };

  feedback: {
    question: string;
    pageQuestion: string;
    yes: string;
    no: string;
    thanksYes: string;
    whyTitle: string;
    reasons: Record<FeedbackReason, string>;
    commentLabel: string;
    commentHint: string;
    send: string;
    sending: string;
    thanksNo: string;
    escalate: string;
    contactAction: string;
    askAction: string;
    failed: string;
  };
};

export type IssueStatus = 'investigating' | 'fix-coming' | 'fixed';

export type KnownIssue = {
  id: string;
  status: IssueStatus;
  /** The day the entry was last checked, YYYY-MM-DD. */
  checked: string;
  title: string;
  /** Who and which versions: "OutBrick 5.1 and 5.1.1, with VoiceOver on". */
  affects: string;
  /** What players notice, and the cause when we know it. */
  what: string;
  /** What to do until the fix arrives (markup allowed). Empty when nothing is needed. */
  workaround: string[];
  /** Where the fix is: "OutBrick 5.1.2, waiting for App Store review". */
  fix: string;
  /** A Help Centre or site link for more (markup href, e.g. help:troubleshooting#voiceover). */
  more?: string;
};

export type SupportLocale = Locale;
