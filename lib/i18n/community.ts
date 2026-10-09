/**
 * Every word of OutBrick Community (/community and its translations): the prerendered shell,
 * the client app (app/components/community/*), the guidelines and the edge-rendered thread
 * pages (netlify/edge-functions/community-thread.ts). Pure data and small functions, with no
 * imports beyond types, so the Deno edge runtime can load this file as it is.
 *
 * Translations are written, not machine-made: the site's tone (warm, plain, never pushy),
 * British spelling in English, "vous" in French, "du" in German as the rest of the site does,
 * "tú" in Spanish, and polite です・ます in Japanese.
 */

import type { Locale } from './locales.ts';

export type CategorySlug = 'announcements' | 'help' | 'bugs' | 'ideas' | 'accessibility' | 'show-and-tell' | 'general';
export const categorySlugs: readonly CategorySlug[] = ['announcements', 'help', 'bugs', 'ideas', 'accessibility', 'show-and-tell', 'general'];

type Words = { name: string; description: string };
type N = (n: number, formatted: string) => string;

export type GuidelineSection = { heading: string; paragraphs: string[]; points?: string[] };

export type CommunityCopy = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    faqTitle: string;
    faqDescription: string;
    guidelinesTitle: string;
    guidelinesDescription: string;
    /** `<title>` of a client-rendered page: "Search — OutBrick Community". */
    pageTitle: (page: string) => string;
    threadTitle: (title: string) => string;
  };
  name: string;
  eyebrow: string;
  skip: string;
  breadcrumb: string;
  nav: {
    label: string;
    home: string;
    search: string;
    faq: string;
    guidelines: string;
    notifications: string;
    unread: N;
    settings: string;
    signIn: string;
    signOut: string;
    moderation: string;
    newThread: string;
    helpCentre: string;
    signedInAs: (name: string) => string;
  };
  home: {
    title: string;
    lede: string;
    points: string[];
    searchLabel: string;
    searchButton: string;
    categoriesHeading: string;
    latestHeading: string;
    startThread: string;
    allThreads: string;
    readGuidelines: string;
    noScript: string;
  };
  categories: Record<CategorySlug, Words>;
  categoryAside: string;
  stats: { threads: N; posts: N; replies: N; views: N; votes: N };
  lastActivity: (when: string) => string;
  noActivity: string;
  category: {
    sortLabel: string;
    sorts: { latest: string; new: string; top: string; unanswered: string };
    filters: string;
    language: string;
    langMine: (language: string) => string;
    langAll: string;
    status: string;
    statusAll: string;
    apply: string;
    teamOnly: string;
    empty: string;
    emptyFiltered: string;
    showing: (from: string, to: string, total: string) => string;
    pages: string;
  };
  follow: {
    legend: string;
    watch: string;
    watching: string;
    mute: string;
    muted: string;
    watchCategory: (name: string) => string;
    muteCategory: (name: string) => string;
    watchThread: (title: string) => string;
    muteThread: (title: string) => string;
    nowWatching: string;
    nowMuted: string;
    nowNone: string;
  };
  list: {
    startedBy: (name: string, when: string) => string;
    lastReply: (name: string, when: string) => string;
    unread: N;
    pinned: string;
    locked: string;
    solved: string;
    hidden: string;
  };
  status: Record<string, string>;
  statusLabel: string;
  roles: { team: string; moderator: string; admin: string; trusted: string };
  formerMember: string;
  thread: {
    startedBy: (name: string, when: string) => string;
    jumpSolution: string;
    jumpUnread: string;
    bugHeading: string;
    bug: { device: string; osVersion: string; appVersion: string; assistive: string; steps: string; expected: string; actual: string };
    postsHeading: string;
    /** The heading of each post: "Mourad, 7 October 2026 at 09:14". */
    postHeading: (author: string, date: string) => string;
    postNumber: (n: string) => string;
    solution: string;
    solutionBy: (name: string) => string;
    edited: (when: string) => string;
    hiddenPost: string;
    hiddenReason: (reason: string) => string;
    pending: string;
    replyTo: (n: string) => string;
    pages: string;
    page: (n: string) => string;
    previous: string;
    next: string;
    pageOf: (page: string, pages: string) => string;
    upvote: string;
    upvoted: string;
    upvoteLabel: (title: string, votes: N, n: number, formatted: string) => string;
    votes: N;
    actions: {
      reply: string;
      replyLabel: (name: string) => string;
      quote: string;
      quoteLabel: (name: string) => string;
      edit: string;
      editLabel: (n: string) => string;
      delete: string;
      deleteLabel: (n: string) => string;
      report: string;
      reportLabel: (n: string, name: string) => string;
      solve: string;
      solveLabel: (n: string) => string;
      unsolve: string;
      unsolveLabel: (n: string) => string;
      save: string;
      cancel: string;
      confirmDelete: string;
      yesDelete: string;
      share: string;
    };
    report: { legend: string; reasons: Record<'spam' | 'abuse' | 'off_topic' | 'personal_info' | 'other', string>; note: string; send: string; sent: string };
    replyHeading: string;
    signInToReply: string;
    signInToReplyNote: string;
    blocked: Record<'locked' | 'banned' | 'unverified' | 'other', string>;
    replyPosted: string;
    postSaved: string;
    postDeleted: string;
    solvedNow: string;
    unsolvedNow: string;
    reported: string;
    voteSaved: (votes: string) => string;
    voteRemoved: (votes: string) => string;
    moderation: string;
    modPin: string;
    modUnpin: string;
    modLock: string;
    modUnlock: string;
    modHide: string;
    modUnhide: string;
    modStatus: string;
    modStatusNote: string;
    modStatusNoteHint: string;
    modNoStatus: string;
    modSave: string;
    modSaved: string;
    notFound: string;
    notFoundNote: string;
    readOnline: string;
  };
  composer: {
    label: string;
    replyLabel: string;
    hint: string;
    write: string;
    preview: string;
    tabsLabel: string;
    previewEmpty: string;
    previewLoading: string;
    previewHeading: string;
    help: string;
    helpItems: [string, string][];
    count: (used: string, max: string) => string;
    left: N;
    over: N;
    submitReply: string;
    sending: string;
    replyingTo: (n: string) => string;
    clearReply: string;
  };
  newThread: {
    title: string;
    lede: string;
    category: string;
    chooseCategory: string;
    titleLabel: string;
    titleHint: string;
    language: string;
    languageHint: string;
    body: string;
    bodyBug: string;
    bugLegend: string;
    device: string;
    deviceHint: string;
    osVersion: string;
    osVersionHint: string;
    appVersion: string;
    appVersionHint: string;
    assistive: string;
    assistiveHint: string;
    at: Record<'voiceover' | 'voice_control' | 'switch_control' | 'zoom' | 'larger_text' | 'colour_filters' | 'none', string>;
    steps: string;
    stepsHint: string;
    expected: string;
    actual: string;
    submit: string;
    posted: string;
    signIn: string;
    teamOnly: string;
  };
  form: {
    problem: string;
    problemCount: N;
    required: string;
    optional: string;
    honeypot: string;
    fields: Record<string, string>;
    codes: Record<string, (field: string) => string>;
  };
  search: {
    title: string;
    lede: string;
    label: string;
    button: string;
    category: string;
    allCategories: string;
    results: N;
    none: (q: string) => string;
    prompt: string;
    kinds: { thread: string; post: string; faq: string };
    inThread: (title: string) => string;
  };
  faq: {
    title: string;
    lede: string;
    community: string;
    support: string;
    supportLink: string;
    fromThread: string;
    none: string;
  };
  guidelines: { title: string; lede: string; updated: string; privacy: string; contact: string; sections: GuidelineSection[] };
  signin: {
    title: string;
    lede: string;
    providersHeading: string;
    apple: string;
    google: string;
    facebook: string;
    shares: { apple: string; google: string; facebook: string; email: string };
    or: string;
    emailHeading: string;
    email: string;
    emailHint: string;
    emailButton: string;
    sent: string;
    sentNote: string;
    errors: Record<'expired' | 'used' | 'invalid' | 'denied' | 'failed' | 'unavailable' | 'email_taken', string>;
    already: (name: string) => string;
    privacy: string;
    noProviders: string;
  };
  welcome: { title: string; lede: string; name: string; nameHint: string; save: string; saved: string };
  settings: {
    title: string;
    lede: string;
    profile: string;
    displayName: string;
    displayNameHint: string;
    bio: string;
    bioHint: string;
    language: string;
    languageHint: string;
    saveProfile: string;
    profileSaved: string;
    emails: string;
    emailsLede: (address: string) => string;
    emailKinds: Record<'reply' | 'mention' | 'watched' | 'status' | 'solved' | 'release' | 'moderation', [string, string]>;
    saveEmails: string;
    emailsSaved: string;
    address: string;
    addressHint: string;
    addressNeeded: string;
    saveAddress: string;
    addressSent: (address: string) => string;
    addressConfirmed: string;
    accounts: string;
    accountsLede: string;
    providerNames: Record<'apple' | 'google' | 'facebook' | 'email', string>;
    data: string;
    dataLede: string;
    export: string;
    exportEmail: string;
    exportEmailSent: string;
    signOut: string;
    signedOut: string;
    deleteHeading: string;
    deleteLede: string;
    deleteConfirm: string;
    deleteHint: string;
    deleteButton: string;
    deleted: string;
    banned: string;
  };
  notifications: {
    title: string;
    lede: string;
    markAll: string;
    marked: string;
    none: string;
    unreadTag: string;
    kinds: Record<'reply' | 'mention' | 'watched' | 'status' | 'solved' | 'release' | 'moderation' | 'welcome', (actor: string, thread: string, extra: string) => string>;
  };
  profile: { title: (name: string) => string; joined: (when: string) => string; posts: N; solved: N; recent: string; none: string; noBio: string };
  mod: {
    title: string;
    lede: string;
    reports: string;
    queue: string;
    noReports: string;
    noQueue: string;
    reportedBy: (name: string, reason: string) => string;
    inThread: (title: string) => string;
    dismiss: string;
    hide: string;
    approve: string;
    reasonLabel: string;
    done: string;
    forbidden: string;
    banHeading: string;
    banLede: string;
    banDays: string;
    banReason: string;
    banSubmit: string;
    unban: string;
    bannedUntil: (d: string) => string;
    banDone: string;
    unbanDone: string;
  };
  errors: Record<string, string>;
  loading: string;
  signedIn: string;
  retry: string;
  notFoundTitle: string;
  notFoundLede: string;
  backHome: string;
  supportCta: { heading: string; text: string; ask: string; bug: string };
};

const pluralEn = (one: string, many: string): N => (n, f) => `${f} ${n === 1 ? one : many}`;

const en: CommunityCopy = {
  meta: {
    homeTitle: 'OutBrick Community: help, bug reports and ideas',
    homeDescription: 'Ask for help with OutBrick, report a bug, vote on ideas and talk boards with other players. Built for VoiceOver first, in six languages.',
    faqTitle: 'OutBrick Community FAQ: answers to common questions',
    faqDescription: 'Answers to the questions OutBrick players ask most: lives, undos, ads, purchases, accessibility, plus the replies the community marked as solved.',
    guidelinesTitle: 'OutBrick Community guidelines: how we talk here',
    guidelinesDescription: 'How OutBrick Community works: be kind, keep personal details private, write bug reports that help, hide spoilers, and how moderation and appeals work.',
    pageTitle: (page) => `${page} — OutBrick Community`,
    threadTitle: (title) => `${title} — OutBrick Community`,
  },
  name: 'OutBrick Community',
  eyebrow: 'OutBrick Community',
  skip: 'Skip to content',
  breadcrumb: 'Breadcrumb',
  nav: {
    label: 'Community',
    home: 'Community home',
    search: 'Search',
    faq: 'FAQ',
    guidelines: 'Guidelines',
    notifications: 'Notifications',
    unread: (n, f) => (n === 1 ? '1 unread' : `${f} unread`),
    settings: 'Settings',
    signIn: 'Sign in',
    signOut: 'Sign out',
    moderation: 'Moderation',
    newThread: 'Start a thread',
    helpCentre: 'Help Centre',
    signedInAs: (name) => `Signed in as ${name}`,
  },
  home: {
    title: 'OutBrick Community',
    lede: 'Ask for a hand with a board, tell us what broke, and vote on what we build next. The team reads every thread and answers in the open.',
    points: [
      'Every page works with VoiceOver, Voice Control, Switch Control and a keyboard.',
      'Threads are in your language and English by default; one tap shows every language.',
      'Your email address is never shown to anyone.',
    ],
    searchLabel: 'Search the community',
    searchButton: 'Search',
    categoriesHeading: 'Categories',
    latestHeading: 'Latest threads',
    startThread: 'Start a thread',
    allThreads: 'Browse every thread in this category',
    readGuidelines: 'Read the community guidelines',
    noScript: 'The forum needs JavaScript to show threads and to post. The categories, the FAQ and the guidelines work without it.',
  },
  categories: {
    announcements: { name: 'Announcements', description: 'Every OutBrick release, posted when the App Store has it, and news from the team.' },
    help: { name: 'Help & support', description: '“How do I…?” questions about boards, lives, purchases and settings. Mark the reply that solved it.' },
    bugs: { name: 'Bug reports', description: 'Something broken? Tell us your device, iOS and app version and what happened, and follow its status.' },
    ideas: { name: 'Ideas & feedback', description: 'What should OutBrick do next? Suggest it, upvote the ideas you want, and see what is planned.' },
    accessibility: { name: 'Accessibility', description: 'VoiceOver, Voice Control, Switch Control, Larger Text and colour-blind play. The team watches this one most closely.' },
    'show-and-tell': { name: 'Show & tell', description: 'Clears you are proud of, Journey milestones and screenshots, with alt text for everyone.' },
    general: { name: 'General', description: 'Everything else about OutBrick and puzzles in general.' },
  },
  categoryAside: 'All categories',
  stats: {
    threads: pluralEn('thread', 'threads'),
    posts: pluralEn('post', 'posts'),
    replies: pluralEn('reply', 'replies'),
    views: pluralEn('view', 'views'),
    votes: pluralEn('vote', 'votes'),
  },
  lastActivity: (when) => `Last post ${when}`,
  noActivity: 'No posts yet',
  category: {
    sortLabel: 'Sort threads',
    sorts: { latest: 'Latest activity', new: 'Newest', top: 'Most votes', unanswered: 'Unanswered' },
    filters: 'Filter threads',
    language: 'Language',
    langMine: (language) => `${language} and English`,
    langAll: 'All languages',
    status: 'Status',
    statusAll: 'Any status',
    apply: 'Show threads',
    teamOnly: 'Only the OutBrick team starts threads here. Everyone can reply.',
    empty: 'No threads here yet. Be the first to start one.',
    emptyFiltered: 'No threads match these filters. Try all languages or any status.',
    showing: (from, to, total) => `Threads ${from} to ${to} of ${total}`,
    pages: 'Pages of threads',
  },
  follow: {
    legend: 'Email me about this',
    watch: 'Watch',
    watching: 'Watching',
    mute: 'Mute',
    muted: 'Muted',
    watchCategory: (name) => `Watch ${name}: email me about every new thread`,
    muteCategory: (name) => `Mute ${name}: hide it from Latest`,
    watchThread: (title) => `Watch ‘${title}’: email me about every reply`,
    muteThread: (title) => `Mute ‘${title}’: no emails, even when someone replies to me`,
    nowWatching: 'You are watching this. We will email you about new posts.',
    nowMuted: 'Muted. You will not get emails about this.',
    nowNone: 'You are no longer watching or muting this.',
  },
  list: {
    startedBy: (name, when) => `Started by ${name}, ${when}`,
    lastReply: (name, when) => `last reply by ${name}, ${when}`,
    unread: (n, f) => (n === 1 ? '1 new post' : `${f} new posts`),
    pinned: 'Pinned',
    locked: 'Locked',
    solved: 'Solved',
    hidden: 'Hidden',
  },
  status: {
    new: 'New',
    confirmed: 'Confirmed',
    fixed: 'Fixed',
    released: 'Released',
    not_a_bug: 'Not a bug',
    duplicate: 'Duplicate',
    open: 'Open',
    considering: 'Under consideration',
    planned: 'Planned',
    in_progress: 'In progress',
    shipped: 'Shipped',
    declined: 'Declined',
  },
  statusLabel: 'Status',
  roles: { team: 'OutBrick team', moderator: 'Moderator', admin: 'OutBrick team', trusted: 'Trusted member' },
  formerMember: 'Former member',
  thread: {
    startedBy: (name, when) => `Started by ${name} on ${when}`,
    jumpSolution: 'Jump to the solution',
    jumpUnread: 'Jump to first unread post',
    bugHeading: 'Bug details',
    bug: { device: 'Device', osVersion: 'iOS or iPadOS version', appVersion: 'OutBrick version', assistive: 'Assistive technology', steps: 'Steps to reproduce', expected: 'What should happen', actual: 'What happened' },
    postsHeading: 'Posts',
    postHeading: (author, date) => `${author}, ${date}`,
    postNumber: (n) => `Post ${n}`,
    solution: 'Solution',
    solutionBy: (name) => `Marked as the solution. Answer by ${name}.`,
    edited: (when) => `Edited ${when}`,
    hiddenPost: 'A moderator hid this post.',
    hiddenReason: (reason) => `Reason: ${reason}`,
    pending: 'Waiting for a moderator to approve it. Only you and the moderators can see it.',
    replyTo: (n) => `In reply to post ${n}`,
    pages: 'Pages of this thread',
    page: (n) => `Page ${n}`,
    previous: 'Previous page',
    next: 'Next page',
    pageOf: (page, pages) => `Page ${page} of ${pages}`,
    upvote: 'Upvote',
    upvoted: 'Upvoted',
    upvoteLabel: (title, votes, n, f) => `Upvote ‘${title}’, ${votes(n, f)}`,
    votes: pluralEn('vote', 'votes'),
    actions: {
      reply: 'Reply',
      replyLabel: (name) => `Reply to ${name}`,
      quote: 'Quote',
      quoteLabel: (name) => `Quote ${name}`,
      edit: 'Edit',
      editLabel: (n) => `Edit post ${n}`,
      delete: 'Delete',
      deleteLabel: (n) => `Delete post ${n}`,
      report: 'Report',
      reportLabel: (n, name) => `Report post ${n} by ${name}`,
      solve: 'Mark as solution',
      solveLabel: (n) => `Mark post ${n} as the solution`,
      unsolve: 'Unmark solution',
      unsolveLabel: (n) => `Unmark post ${n} as the solution`,
      save: 'Save changes',
      cancel: 'Cancel',
      confirmDelete: 'Delete this post? This cannot be undone.',
      yesDelete: 'Yes, delete it',
      share: 'Link to this post',
    },
    report: {
      legend: 'Why are you reporting this post?',
      reasons: { spam: 'Spam or advertising', abuse: 'Unkind or abusive', off_topic: 'Off topic', personal_info: 'Shares personal information', other: 'Something else' },
      note: 'Anything the moderators should know',
      send: 'Send report',
      sent: 'Thank you. A moderator will look at it.',
    },
    replyHeading: 'Your reply',
    signInToReply: 'Sign in to reply',
    signInToReplyNote: 'Anyone can read the community. To reply, sign in with Apple, Google, Facebook or an email link.',
    blocked: {
      locked: 'This thread is locked, so it takes no new replies.',
      banned: 'Your account cannot post at the moment. The email we sent you explains why and how to appeal.',
      unverified: 'Confirm your email address first: we sent you a link.',
      other: 'You cannot reply to this thread.',
    },
    replyPosted: 'Your reply is posted.',
    postSaved: 'Your changes are saved.',
    postDeleted: 'The post is deleted.',
    solvedNow: 'Marked as the solution.',
    unsolvedNow: 'No longer marked as the solution.',
    reported: 'Thank you for the report. A moderator will look at it.',
    voteSaved: (votes) => `Upvoted. ${votes}.`,
    voteRemoved: (votes) => `Upvote removed. ${votes}.`,
    moderation: 'Moderation',
    modPin: 'Pin thread',
    modUnpin: 'Unpin thread',
    modLock: 'Lock thread',
    modUnlock: 'Unlock thread',
    modHide: 'Hide thread',
    modUnhide: 'Show thread again',
    modStatus: 'Status',
    modStatusNote: 'Status note',
    modStatusNoteHint: 'Shown beside the status, for example “Fixed in 5.1”.',
    modNoStatus: 'No status',
    modSave: 'Save status',
    modSaved: 'Thread updated.',
    notFound: 'Thread not found',
    notFoundNote: 'It may have been deleted, or the link is missing a part. Search the community or go back to the categories.',
    readOnline: 'Read and reply in the community',
  },
  composer: {
    label: 'Your post',
    replyLabel: 'Your reply',
    hint: 'Write in Markdown: a blank line starts a new paragraph. Formatting help is below.',
    write: 'Write',
    preview: 'Preview',
    tabsLabel: 'Write or preview',
    previewEmpty: 'Nothing to preview yet.',
    previewLoading: 'Preparing the preview…',
    previewHeading: 'How your post will look',
    help: 'Formatting help',
    helpItems: [
      ['**bold**', 'bold text'],
      ['*italic*', 'italic text'],
      ['# Heading', 'a heading (use ## and ### for smaller ones)'],
      ['- item', 'a bulleted list; 1. for a numbered one'],
      ['> quote', 'a quotation'],
      ['[words](https://…)', 'a link'],
      ['`code`', 'code, such as a level number or a setting name'],
    ],
    count: (used, max) => `${used} of ${max} characters`,
    left: (n, f) => (n === 1 ? '1 character left' : `${f} characters left`),
    over: (n, f) => (n === 1 ? '1 character too many' : `${f} characters too many`),
    submitReply: 'Post reply',
    sending: 'Posting…',
    replyingTo: (n) => `Replying to post ${n}.`,
    clearReply: 'Reply to the thread instead',
  },
  newThread: {
    title: 'Start a thread',
    lede: 'One topic per thread, with a title that says what it is about. Search first: someone may already have asked.',
    category: 'Category',
    chooseCategory: 'Choose a category',
    titleLabel: 'Title',
    titleHint: 'A short sentence, for example “Level 214: is there a way past the iced gate?”. 4 to 140 characters.',
    language: 'Language of your post',
    languageHint: 'So people who read this language find it. Lists show your language and English by default.',
    body: 'Your post',
    bodyBug: 'Summary',
    bugLegend: 'About the bug',
    device: 'Device',
    deviceHint: 'For example iPhone 15 Pro, iPad Air (5th generation) or Apple Watch Series 9. Settings › General › About › Model Name.',
    osVersion: 'iOS, iPadOS or other system version',
    osVersionHint: 'Settings › General › About › iOS Version, for example 27.1.',
    appVersion: 'OutBrick version',
    appVersionHint: 'Tap your avatar on Home to open your Profile: the version is at the bottom, for example 5.1.1 (68). Settings › Report a bug in the game fills it in for you.',
    assistive: 'Assistive technology in use',
    assistiveHint: 'Tick everything that was on when it happened.',
    at: { voiceover: 'VoiceOver', voice_control: 'Voice Control', switch_control: 'Switch Control', zoom: 'Zoom', larger_text: 'Larger Text', colour_filters: 'Colour Filters', none: 'None' },
    steps: 'Steps to reproduce',
    stepsHint: 'Numbered steps from opening the app, for example: 1. Open level 214. 2. Swipe the red brick left.',
    expected: 'What should happen',
    actual: 'What happened instead',
    submit: 'Post thread',
    posted: 'Your thread is posted.',
    signIn: 'Sign in to start a thread',
    teamOnly: 'Only the OutBrick team can start threads in Announcements.',
  },
  form: {
    problem: 'There is a problem',
    problemCount: (n, f) => (n === 1 ? 'Fix 1 thing to continue:' : `Fix ${f} things to continue:`),
    required: 'Every field is needed unless it says optional.',
    optional: 'optional',
    honeypot: 'Leave this empty',
    fields: {
      title: 'Title',
      body: 'Post',
      categorySlug: 'Category',
      language: 'Language',
      device: 'Device',
      osVersion: 'System version',
      appVersion: 'OutBrick version',
      assistive: 'Assistive technology',
      steps: 'Steps to reproduce',
      expected: 'What should happen',
      actual: 'What happened',
      email: 'Email address',
      displayName: 'Display name',
      bio: 'About you',
      confirm: 'Confirmation',
      reason: 'Reason',
    },
    codes: {
      required: (field) => `Enter ${field.toLowerCase()}`,
      too_short: (field) => `${field} is too short`,
      too_long: (field) => `${field} is too long`,
      invalid: (field) => `Check ${field.toLowerCase()}`,
      taken: (field) => `${field} is already taken: choose another`,
      email: () => 'Enter an email address like name@example.com',
      choose: (field) => `Choose ${field.toLowerCase()}`,
      mismatch: () => 'Type DELETE in capital letters to confirm',
      no_email: (f) => `${f} cannot be an email address`,
      no_links: (f) => `${f} cannot contain a link`,
      reserved: (f) => `${f} is reserved: choose another`,
    },
  },
  search: {
    title: 'Search the community',
    lede: 'Search threads, replies and the FAQ in every language.',
    label: 'Search for',
    button: 'Search',
    category: 'In category',
    allCategories: 'All categories',
    results: (n, f) => (n === 1 ? '1 result' : `${f} results`),
    none: (q) => `Nothing found for “${q}”. Try fewer or different words, or ask in Help & support.`,
    prompt: 'Type a word or two, such as “undo”, “VoiceOver” or a level number.',
    kinds: { thread: 'Thread', post: 'Reply', faq: 'FAQ' },
    inThread: (title) => `In “${title}”`,
  },
  faq: {
    title: 'Frequently asked questions',
    lede: 'Quick answers about OutBrick, from the support page and from threads the team marked as the best answer.',
    community: 'From the community',
    support: 'From OutBrick support',
    supportLink: 'Read the full support page',
    fromThread: 'Read the thread',
    none: 'No community answers have been added yet.',
  },
  guidelines: {
    title: 'Community guidelines',
    lede: 'OutBrick Community is a calm place to get help and shape the game. These are the few rules that keep it that way.',
    updated: 'Updated 7 October 2026',
    privacy: 'The privacy policy',
    contact: 'Contact the team',
    sections: [
      {
        heading: 'Be kind',
        paragraphs: ['Everyone here plays differently: with VoiceOver, with Switch Control, one-handed, in a second language, or for the very first time. Answer the question that was asked, assume good faith, and disagree with ideas, never with people.'],
        points: ['No insults, harassment, hate or threats.', 'No pile-ons: if someone has already been answered, upvote instead of repeating.', 'Do not mock a question. Every expert asked it once.'],
      },
      {
        heading: 'Keep personal information private',
        paragraphs: ['Never post your own or anyone else’s email address, phone number, home address, Apple ID, Game Center login, purchase receipts or payment details. We never need them in public, and the team will never ask for them here.', 'Screenshots can show more than you meant: check for names and notifications before you post one.'],
      },
      {
        heading: 'Bug reports that help',
        paragraphs: ['A good report lets us see the bug on our own device. The bug form asks for exactly what we need.'],
        points: ['Your device, its iOS or iPadOS version and the OutBrick version.', 'Whether VoiceOver, Voice Control, Switch Control, Zoom or another setting was on.', 'Numbered steps from opening the app, what you expected and what happened.', 'One bug per thread. Search first, and add to an existing report rather than starting a duplicate.'],
      },
      {
        heading: 'Spoilers',
        paragraphs: ["Some players love working a board out alone. Start a post that gives away a solution or a late-Journey surprise with “Spoiler:” and the level it is about, so people can skip it, and keep the answer out of the thread title."],
      },
      {
        heading: 'Stay on topic, and post in any language',
        paragraphs: ['Post in the category that fits and keep each thread to its topic. Write in whichever language is easiest for you and set the language on your post, so readers of that language can find it. No advertising, referral links or links to unofficial copies of the game.'],
      },
      {
        heading: 'Moderation and appeals',
        paragraphs: ['Moderators and the OutBrick team may edit a title, move a thread, hide a post, lock a thread or suspend an account when these guidelines are broken. Every action is logged. If one of your posts is hidden, we email you the reason.', 'If you think we got it wrong, reply to that email or use the contact form within 30 days, and someone who was not involved will look at it again.'],
        points: ['Report a post with its Report button. Reports are private.', 'A member’s first posts with links wait for a moderator before they appear.'],
      },
      {
        heading: 'Your account and your data',
        paragraphs: ['Only your display name is public. You can download everything we hold about you, or delete your account, at any time from Settings. Deleting your account removes your profile; your posts stay, signed “Former member”, so threads still make sense. The privacy policy explains what is stored and why.'],
      },
    ],
  },
  signin: {
    title: 'Sign in to OutBrick Community',
    lede: 'Reading is open to everyone. Sign in to post, reply, vote and follow threads. There is no password to remember.',
    providersHeading: 'Sign in with an account you already have',
    apple: 'Sign in with Apple',
    google: 'Sign in with Google',
    facebook: 'Continue with Facebook',
    shares: {
      apple: 'Apple shares an email address, which can be a private relay address if you choose Hide My Email, and your name only if you allow it.',
      google: 'Google shares your name and email address. We keep the email address to sign you in and never show it.',
      facebook: 'Facebook shares your name and email address. We never post anything to Facebook.',
      email: 'We email you a one-time link that signs you in for 30 days on this browser. We use the address only to sign you in and for the emails you choose.',
    },
    or: 'Or',
    emailHeading: 'Sign in with an email link',
    email: 'Email address',
    emailHint: 'We will send a link that works once, for 20 minutes.',
    emailButton: 'Email me a sign-in link',
    sent: 'Check your email',
    sentNote: 'If that address can sign in, a link is on its way. It works once, for 20 minutes. You can close this page.',
    errors: {
      used: 'This sign-in link has already been used. Each link signs in one browser once. Ask for a new link below to sign in on this device.',
      expired: 'That sign-in link has expired. Links work for 20 minutes: ask for a new one below.',
      invalid: 'That sign-in link did not work. It may have been used already. Ask for a new one below.',
      failed: 'Signing in did not finish because of a problem on the other side. Please try again, or use an email link.',
      denied: 'Sign-in was cancelled. Nothing was shared. You can try again whenever you like.',
      unavailable: "That way of signing in is not available right now. Use an email link, or try again later.",
      email_taken: "That email address already belongs to another account. Sign in the way you did the first time.",
    },
    already: (name) => `You are already signed in as ${name}.`,
    privacy: 'How we handle your data is in the privacy policy and the community guidelines.',
    noProviders: 'Sign-in with other accounts is not switched on yet. Use an email link.',
  },
  welcome: {
    title: 'Choose your display name',
    lede: 'This is the only name other members see. You can change it later in Settings.',
    name: 'Display name',
    nameHint: '3 to 30 characters: letters, numbers, spaces, dots, dashes and underscores. Not your email address.',
    save: 'Save and continue',
    saved: 'Welcome to OutBrick Community.',
  },
  settings: {
    title: 'Settings',
    lede: 'Your profile, your emails and your data. Changes are saved when you press each section’s button.',
    profile: 'Profile',
    displayName: 'Display name',
    displayNameHint: 'The only name other members see.',
    bio: 'About you',
    bioHint: 'Up to 300 characters. Shown on your profile.',
    language: 'Language for emails and the community',
    languageHint: 'Lists show threads in this language and English by default.',
    saveProfile: 'Save profile',
    profileSaved: 'Profile saved.',
    emails: 'Emails',
    emailsLede: (address) => `We send emails to ${address}. Every email also has a one-click unsubscribe link.`,
    emailKinds: {
      reply: ['Replies', 'Someone replies to your thread or to one of your posts.'],
      mention: ['Mentions', 'Someone writes @ and your display name.'],
      watched: ['Watched threads and categories', 'New posts in things you watch.'],
      status: ['Status changes', 'Your bug or idea changes status, for example “Fixed in 5.1”.'],
      solved: ['Solutions', 'Your answer is marked as the solution.'],
      release: ['New releases', 'A new version of OutBrick is out (from Announcements).'],
      moderation: ['Moderation notices', 'A moderator hid one of your posts, with the reason. We recommend keeping this on.'],
    },
    saveEmails: 'Save email choices',
    emailsSaved: 'Email choices saved.',
    address: "Email address",
    addressHint: "Never shown to anyone. A new address takes over once you confirm it from the email we send.",
    addressNeeded: "Add an email address to post. We need a confirmed address to send you replies and sign-in links.",
    saveAddress: "Change email address",
    addressSent: (a) => `We sent a confirmation link to ${a}. Your address changes once you open it.`,
    addressConfirmed: "Your email address is confirmed.",
    accounts: 'Ways you sign in',
    accountsLede: 'You can sign in with any of these. To add another, sign out and sign in with it using the same email address.',
    providerNames: { apple: 'Apple', google: 'Google', facebook: 'Facebook', email: 'Email link' },
    data: 'Your data',
    dataLede: 'Download everything we hold about you: your profile, posts, votes, follows and email choices, as a JSON file.',
    export: 'Download my data',
    exportEmail: 'Email me a download link',
    exportEmailSent: 'Check your inbox: the link works for 24 hours.',
    signOut: 'Sign out',
    signedOut: 'You are signed out.',
    deleteHeading: 'Delete my account',
    deleteLede: 'This removes your profile, your sign-in methods, your follows and your email address. Your posts stay, signed “Former member”, so threads still make sense. This cannot be undone.',
    deleteConfirm: 'Type DELETE to confirm',
    deleteHint: 'In capital letters, so it cannot happen by accident.',
    deleteButton: 'Delete my account',
    deleted: 'Your account is deleted. Thank you for being part of the community.',
    banned: 'Your account is suspended, so you can read but not post. The email we sent explains why and how to appeal.',
  },
  notifications: {
    title: 'Notifications',
    lede: 'Replies, mentions and news about the things you follow.',
    markAll: 'Mark all as read',
    marked: 'All notifications are marked as read.',
    none: 'Nothing new. When someone replies to you, it appears here.',
    unreadTag: 'New',
    kinds: {
      reply: (actor, thread) => `${actor} replied in “${thread}”`,
      mention: (actor, thread) => `${actor} mentioned you in “${thread}”`,
      watched: (actor, thread) => `${actor} posted in “${thread}”, which you watch`,
      status: (_actor, thread, extra) => `“${thread}” is now ${extra}`,
      solved: (actor, thread) => `${actor} marked your answer in “${thread}” as the solution`,
      release: (_actor, thread, extra) => (extra ? `OutBrick ${extra} is out: “${thread}”` : `New release: “${thread}”`),
      moderation: (_actor, thread) => `A moderator acted on your post in “${thread}”. We emailed you the details.`,
      welcome: () => 'Welcome to OutBrick Community. Start with the guidelines, then say hello in General.',
    },
  },
  profile: {
    title: (name) => name,
    joined: (when) => `Member since ${when}`,
    posts: pluralEn('post', 'posts'),
    solved: (n, f) => (n === 1 ? '1 solution' : `${f} solutions`),
    recent: 'Recent threads',
    none: 'No threads yet.',
    noBio: 'No profile text yet.',
  },
  mod: {
    title: 'Moderation',
    lede: 'Reports from members and first posts waiting for approval. Every action here is logged.',
    reports: 'Reports',
    queue: 'Waiting for approval',
    noReports: 'No open reports.',
    noQueue: 'Nothing is waiting for approval.',
    reportedBy: (name, reason) => `Reported by ${name}: ${reason}`,
    inThread: (title) => `In “${title}”`,
    dismiss: 'Dismiss report',
    hide: 'Hide post',
    approve: 'Approve post',
    reasonLabel: 'Reason, emailed to the author',
    done: 'Done.',
    forbidden: 'Only moderators can see this page.',
    banHeading: 'Suspend this member',
    banLede: 'A suspended member can still read and change their email settings, but cannot post, reply, react or vote.',
    banDays: 'Days',
    banReason: 'Reason, shown to the member',
    banSubmit: 'Suspend',
    unban: 'Lift the suspension',
    bannedUntil: (d) => `Suspended until ${d}`,
    banDone: 'The member is suspended.',
    unbanDone: 'The suspension is lifted.',
  },
  errors: {
    signin_required: 'Sign in to do that.',
    forbidden: 'You cannot do that.',
    not_found: 'We could not find that. It may have been deleted.',
    invalid: 'Some of that needs fixing.',
    rate_limited: 'That was quick! Wait a minute and try again.',
    too_fast: 'That was quick. Wait a moment, then send it again: your text is still here.',
    too_large: 'That is too long. Shorten it and try again.',
    locked: 'This thread is locked.',
    banned: 'Your account cannot post at the moment.',
    unverified: 'Confirm your email address first.',
    network: 'We could not reach the community. Check your connection and try again.',
    unavailable: 'The community is resting for a moment. Please try again shortly.',
    unknown: 'Something went wrong on our side. Please try again.',
    send_failed: "We could not send the email just now. Please try again in a minute.",
  },
  loading: 'Loading…',
  signedIn: "You are signed in.",
  retry: 'Try again',
  notFoundTitle: 'Page not found',
  notFoundLede: 'There is no community page at this address.',
  backHome: 'Go to the community home',
  supportCta: {
    heading: 'Ask the community',
    text: 'Players and the OutBrick team answer questions, track bugs and vote on ideas in OutBrick Community.',
    ask: 'Ask the community',
    bug: 'Report a bug',
  },
};

const pluralFr = (one: string, many: string): N => (n, f) => `${f} ${n < 2 ? one : many}`;

const fr: CommunityCopy = {
  meta: {
    homeTitle: 'Communauté OutBrick : aide, bugs et idées',
    homeDescription: 'Demandez de l’aide sur OutBrick, signalez un bug, votez pour des idées et parlez plateaux avec d’autres joueurs. Pensée d’abord pour VoiceOver.',
    faqTitle: 'FAQ de la communauté OutBrick : réponses utiles',
    faqDescription: 'Les réponses aux questions les plus fréquentes sur OutBrick : vies, annulations, publicités, achats, accessibilité, et les réponses validées par la communauté.',
    guidelinesTitle: 'Règles de la communauté OutBrick : nos usages',
    guidelinesDescription: 'Comment fonctionne la communauté OutBrick : bienveillance, données personnelles, signalements de bugs utiles, spoilers, modération et recours.',
    pageTitle: (page) => `${page} — Communauté OutBrick`,
    threadTitle: (title) => `${title} — Communauté OutBrick`,
  },
  name: 'Communauté OutBrick',
  eyebrow: 'Communauté OutBrick',
  skip: 'Aller au contenu',
  breadcrumb: 'Fil d’Ariane',
  nav: {
    label: 'Communauté',
    home: 'Accueil de la communauté',
    search: 'Rechercher',
    faq: 'FAQ',
    guidelines: 'Règles',
    notifications: 'Notifications',
    unread: (n, f) => (n < 2 ? `${f} non lue` : `${f} non lues`),
    settings: 'Réglages',
    signIn: 'Se connecter',
    signOut: 'Se déconnecter',
    moderation: 'Modération',
    newThread: 'Ouvrir une discussion',
    helpCentre: 'Centre d’aide',
    signedInAs: (name) => `Connecté en tant que ${name}`,
  },
  home: {
    title: 'Communauté OutBrick',
    lede: 'Demandez un coup de main sur un plateau, dites-nous ce qui ne marche pas et votez pour la suite. L’équipe lit chaque discussion et répond publiquement.',
    points: [
      'Chaque page fonctionne avec VoiceOver, Contrôle vocal, Contrôle de sélection et le clavier.',
      'Par défaut, vous voyez les discussions dans votre langue et en anglais ; un geste suffit pour tout afficher.',
      'Votre adresse e-mail n’est jamais montrée à personne.',
    ],
    searchLabel: 'Rechercher dans la communauté',
    searchButton: 'Rechercher',
    categoriesHeading: 'Catégories',
    latestHeading: 'Dernières discussions',
    startThread: 'Ouvrir une discussion',
    allThreads: 'Voir toutes les discussions de cette catégorie',
    readGuidelines: 'Lire les règles de la communauté',
    noScript: 'Le forum a besoin de JavaScript pour afficher les discussions et publier. Les catégories, la FAQ et les règles fonctionnent sans.',
  },
  categories: {
    announcements: { name: 'Annonces', description: 'Chaque version d’OutBrick, publiée dès sa sortie sur l’App Store, et les nouvelles de l’équipe.' },
    help: { name: 'Aide et assistance', description: 'Les questions « Comment faire pour… ? » sur les plateaux, les vies, les achats et les réglages. Indiquez la réponse qui a résolu le problème.' },
    bugs: { name: 'Signaler un bug', description: 'Quelque chose ne marche pas ? Indiquez votre appareil, vos versions d’iOS et de l’app et ce qui s’est passé, puis suivez son statut.' },
    ideas: { name: 'Idées et avis', description: 'Que devrait faire OutBrick ensuite ? Proposez, votez pour les idées qui vous plaisent et voyez ce qui est prévu.' },
    accessibility: { name: 'Accessibilité', description: 'VoiceOver, Contrôle vocal, Contrôle de sélection, texte plus grand et jeu pour les personnes daltoniennes. L’équipe suit cette catégorie de très près.' },
    'show-and-tell': { name: 'Vos réussites', description: 'Les plateaux dont vous êtes fiers, vos étapes du Voyage et vos captures, avec un texte alternatif pour tout le monde.' },
    general: { name: 'Discussions générales', description: 'Tout le reste à propos d’OutBrick et des puzzles en général.' },
  },
  categoryAside: 'Toutes les catégories',
  stats: {
    threads: pluralFr('discussion', 'discussions'),
    posts: pluralFr('message', 'messages'),
    replies: pluralFr('réponse', 'réponses'),
    views: pluralFr('vue', 'vues'),
    votes: pluralFr('vote', 'votes'),
  },
  lastActivity: (when) => `Dernier message ${when}`,
  noActivity: 'Aucun message pour l’instant',
  category: {
    sortLabel: 'Trier les discussions',
    sorts: { latest: 'Activité récente', new: 'Les plus récentes', top: 'Les plus votées', unanswered: 'Sans réponse' },
    filters: 'Filtrer les discussions',
    language: 'Langue',
    langMine: (language) => `${language} et anglais`,
    langAll: 'Toutes les langues',
    status: 'Statut',
    statusAll: 'Tous les statuts',
    apply: 'Afficher les discussions',
    teamOnly: 'Seule l’équipe OutBrick ouvre des discussions ici. Tout le monde peut répondre.',
    empty: 'Aucune discussion pour l’instant. Lancez la première !',
    emptyFiltered: 'Aucune discussion ne correspond à ces filtres. Essayez toutes les langues ou tous les statuts.',
    showing: (from, to, total) => `Discussions ${from} à ${to} sur ${total}`,
    pages: 'Pages de discussions',
  },
  follow: {
    legend: 'Me prévenir par e-mail',
    watch: 'Suivre',
    watching: 'Suivie',
    mute: 'Masquer',
    muted: 'Masquée',
    watchCategory: (name) => `Suivre ${name} : recevoir un e-mail pour chaque nouvelle discussion`,
    muteCategory: (name) => `Masquer ${name} dans les dernières discussions`,
    watchThread: (title) => `Suivre « ${title} » : recevoir un e-mail à chaque réponse`,
    muteThread: (title) => `Masquer « ${title} » : aucun e-mail, même si l’on vous répond`,
    nowWatching: 'Vous suivez ceci. Nous vous écrirons à chaque nouveau message.',
    nowMuted: 'Masqué. Vous ne recevrez plus d’e-mail à ce sujet.',
    nowNone: 'Vous ne suivez plus et ne masquez plus ceci.',
  },
  list: {
    startedBy: (name, when) => `Ouverte par ${name}, ${when}`,
    lastReply: (name, when) => `dernière réponse de ${name}, ${when}`,
    unread: (n, f) => (n < 2 ? `${f} nouveau message` : `${f} nouveaux messages`),
    pinned: 'Épinglée',
    locked: 'Verrouillée',
    solved: 'Résolue',
    hidden: 'Masquée',
  },
  status: {
    new: 'Nouveau',
    confirmed: 'Confirmé',
    fixed: 'Corrigé',
    released: 'Publié',
    not_a_bug: 'Pas un bug',
    duplicate: 'Doublon',
    open: 'Ouverte',
    considering: 'À l’étude',
    planned: 'Prévue',
    in_progress: 'En cours',
    shipped: 'Disponible',
    declined: 'Écartée',
  },
  statusLabel: 'Statut',
  roles: { team: 'Équipe OutBrick', moderator: 'Modération', admin: 'Équipe OutBrick', trusted: 'Membre de confiance' },
  formerMember: 'Ancien membre',
  thread: {
    startedBy: (name, when) => `Ouverte par ${name} le ${when}`,
    jumpSolution: 'Aller à la solution',
    jumpUnread: 'Aller au premier message non lu',
    bugHeading: 'Détails du bug',
    bug: { device: 'Appareil', osVersion: 'Version d’iOS ou d’iPadOS', appVersion: 'Version d’OutBrick', assistive: 'Technologie d’assistance', steps: 'Étapes pour reproduire', expected: 'Ce qui devrait se passer', actual: 'Ce qui s’est passé' },
    postsHeading: 'Messages',
    postHeading: (author, date) => `${author}, ${date}`,
    postNumber: (n) => `Message ${n}`,
    solution: 'Solution',
    solutionBy: (name) => `Marquée comme solution. Réponse de ${name}.`,
    edited: (when) => `Modifié ${when}`,
    hiddenPost: 'Un modérateur a masqué ce message.',
    hiddenReason: (reason) => `Motif : ${reason}`,
    pending: 'En attente de validation par la modération. Seuls vous et les modérateurs le voyez.',
    replyTo: (n) => `En réponse au message ${n}`,
    pages: 'Pages de cette discussion',
    page: (n) => `Page ${n}`,
    previous: 'Page précédente',
    next: 'Page suivante',
    pageOf: (page, pages) => `Page ${page} sur ${pages}`,
    upvote: 'Voter',
    upvoted: 'Voté',
    upvoteLabel: (title, votes, n, f) => `Voter pour « ${title} », ${votes(n, f)}`,
    votes: pluralFr('vote', 'votes'),
    actions: {
      reply: 'Répondre',
      replyLabel: (name) => `Répondre à ${name}`,
      quote: 'Citer',
      quoteLabel: (name) => `Citer ${name}`,
      edit: 'Modifier',
      editLabel: (n) => `Modifier le message ${n}`,
      delete: 'Supprimer',
      deleteLabel: (n) => `Supprimer le message ${n}`,
      report: 'Signaler',
      reportLabel: (n, name) => `Signaler le message ${n} de ${name}`,
      solve: 'Marquer comme solution',
      solveLabel: (n) => `Marquer le message ${n} comme solution`,
      unsolve: 'Retirer la solution',
      unsolveLabel: (n) => `Ne plus marquer le message ${n} comme solution`,
      save: 'Enregistrer',
      cancel: 'Annuler',
      confirmDelete: 'Supprimer ce message ? C’est définitif.',
      yesDelete: 'Oui, supprimer',
      share: 'Lien vers ce message',
    },
    report: {
      legend: 'Pourquoi signalez-vous ce message ?',
      reasons: { spam: 'Spam ou publicité', abuse: 'Malveillant ou insultant', off_topic: 'Hors sujet', personal_info: 'Contient des informations personnelles', other: 'Autre chose' },
      note: 'Ce que la modération devrait savoir',
      send: 'Envoyer le signalement',
      sent: 'Merci. Un modérateur va regarder.',
    },
    replyHeading: 'Votre réponse',
    signInToReply: 'Se connecter pour répondre',
    signInToReplyNote: 'Tout le monde peut lire la communauté. Pour répondre, connectez-vous avec Apple, Google, Facebook ou un lien par e-mail.',
    blocked: {
      locked: 'Cette discussion est verrouillée : elle n’accepte plus de réponses.',
      banned: 'Votre compte ne peut pas publier pour le moment. L’e-mail que nous vous avons envoyé explique pourquoi et comment faire appel.',
      unverified: 'Confirmez d’abord votre adresse e-mail : nous vous avons envoyé un lien.',
      other: 'Vous ne pouvez pas répondre à cette discussion.',
    },
    replyPosted: 'Votre réponse est publiée.',
    postSaved: 'Vos modifications sont enregistrées.',
    postDeleted: 'Le message est supprimé.',
    solvedNow: 'Marqué comme solution.',
    unsolvedNow: 'N’est plus marqué comme solution.',
    reported: 'Merci pour le signalement. Un modérateur va regarder.',
    voteSaved: (votes) => `Vote enregistré. ${votes}.`,
    voteRemoved: (votes) => `Vote retiré. ${votes}.`,
    moderation: 'Modération',
    modPin: 'Épingler la discussion',
    modUnpin: 'Désépingler la discussion',
    modLock: 'Verrouiller la discussion',
    modUnlock: 'Déverrouiller la discussion',
    modHide: 'Masquer la discussion',
    modUnhide: 'Afficher de nouveau la discussion',
    modStatus: 'Statut',
    modStatusNote: 'Note de statut',
    modStatusNoteHint: 'Affichée à côté du statut, par exemple « Corrigé dans la 5.1 ».',
    modNoStatus: 'Aucun statut',
    modSave: 'Enregistrer le statut',
    modSaved: 'Discussion mise à jour.',
    notFound: 'Discussion introuvable',
    notFoundNote: 'Elle a peut-être été supprimée, ou le lien est incomplet. Faites une recherche ou revenez aux catégories.',
    readOnline: 'Lire et répondre dans la communauté',
  },
  composer: {
    label: 'Votre message',
    replyLabel: 'Votre réponse',
    hint: 'Écrivez en Markdown : une ligne vide commence un nouveau paragraphe. L’aide à la mise en forme est juste en dessous.',
    write: 'Écrire',
    preview: 'Aperçu',
    tabsLabel: 'Écrire ou prévisualiser',
    previewEmpty: 'Rien à prévisualiser pour l’instant.',
    previewLoading: 'Préparation de l’aperçu…',
    previewHeading: 'Votre message tel qu’il apparaîtra',
    help: 'Aide à la mise en forme',
    helpItems: [
      ['**gras**', 'du texte en gras'],
      ['*italique*', 'du texte en italique'],
      ['# Titre', 'un titre (## et ### pour des titres plus petits)'],
      ['- élément', 'une liste à puces ; 1. pour une liste numérotée'],
      ['> citation', 'une citation'],
      ['[texte](https://…)', 'un lien'],
      ['`code`', 'du code, comme un numéro de niveau ou le nom d’un réglage'],
    ],
    count: (used, max) => `${used} caractères sur ${max}`,
    left: (n, f) => (n < 2 ? `${f} caractère restant` : `${f} caractères restants`),
    over: (n, f) => (n < 2 ? `${f} caractère de trop` : `${f} caractères de trop`),
    submitReply: 'Publier la réponse',
    sending: 'Publication…',
    replyingTo: (n) => `Réponse au message ${n}.`,
    clearReply: 'Répondre plutôt à la discussion',
  },
  newThread: {
    title: 'Ouvrir une discussion',
    lede: 'Un sujet par discussion, avec un titre qui dit de quoi il s’agit. Cherchez d’abord : quelqu’un a peut-être déjà posé la question.',
    category: 'Catégorie',
    chooseCategory: 'Choisissez une catégorie',
    titleLabel: 'Titre',
    titleHint: 'Une phrase courte, par exemple « Niveau 214 : comment passer la porte gelée ? ». De 4 à 140 caractères.',
    language: 'Langue de votre message',
    languageHint: 'Pour que les lecteurs de cette langue le trouvent. Les listes montrent votre langue et l’anglais par défaut.',
    body: 'Votre message',
    bodyBug: 'Résumé',
    bugLegend: 'À propos du bug',
    device: 'Appareil',
    deviceHint: 'Par exemple iPhone 15 Pro, iPad Air (5e génération) ou Apple Watch Series 9. Réglages › Général › Informations › Nom du modèle.',
    osVersion: 'Version d’iOS, d’iPadOS ou d’un autre système',
    osVersionHint: 'Réglages › Général › Informations › Version d’iOS, par exemple 27.1.',
    appVersion: 'Version d’OutBrick',
    appVersionHint: 'Sur l’écran d’accueil, touchez votre avatar pour ouvrir votre profil : la version figure tout en bas, par exemple 5.1.1 (68). Dans le jeu, Réglages › Signaler un bug la remplit pour vous.',
    assistive: 'Technologies d’assistance utilisées',
    assistiveHint: 'Cochez tout ce qui était activé au moment du problème.',
    at: { voiceover: 'VoiceOver', voice_control: 'Contrôle vocal', switch_control: 'Contrôle de sélection', zoom: 'Zoom', larger_text: 'Texte plus grand', colour_filters: 'Filtres de couleur', none: 'Aucune' },
    steps: 'Étapes pour reproduire',
    stepsHint: 'Des étapes numérotées depuis l’ouverture de l’app, par exemple : 1. Ouvrir le niveau 214. 2. Faire glisser la brique rouge vers la gauche.',
    expected: 'Ce qui devrait se passer',
    actual: 'Ce qui s’est passé à la place',
    submit: 'Publier la discussion',
    posted: 'Votre discussion est publiée.',
    signIn: 'Se connecter pour ouvrir une discussion',
    teamOnly: 'Seule l’équipe OutBrick peut ouvrir des discussions dans les Annonces.',
  },
  form: {
    problem: 'Il y a un problème',
    problemCount: (n, f) => (n < 2 ? 'Corrigez 1 point pour continuer :' : `Corrigez ${f} points pour continuer :`),
    required: 'Tous les champs sont obligatoires, sauf mention « facultatif ».',
    optional: 'facultatif',
    honeypot: 'Laissez ce champ vide',
    fields: {
      title: 'Le titre',
      body: 'Le message',
      categorySlug: 'La catégorie',
      language: 'La langue',
      device: 'L’appareil',
      osVersion: 'La version du système',
      appVersion: 'La version d’OutBrick',
      assistive: 'La technologie d’assistance',
      steps: 'Les étapes pour reproduire',
      expected: 'Ce qui devrait se passer',
      actual: 'Ce qui s’est passé',
      email: 'L’adresse e-mail',
      displayName: 'Le nom affiché',
      bio: 'La présentation',
      confirm: 'La confirmation',
      reason: 'Le motif',
    },
    codes: {
      required: (field) => `${field} : ce champ est à remplir`,
      too_short: (field) => `${field} est trop court`,
      too_long: (field) => `${field} est trop long`,
      invalid: (field) => `${field} : vérifiez ce champ`,
      taken: (field) => `${field} est déjà pris : choisissez-en un autre`,
      email: () => 'Saisissez une adresse e-mail comme nom@exemple.fr',
      choose: (field) => `${field} : faites un choix`,
      mismatch: () => 'Tapez DELETE en majuscules pour confirmer',
      no_email: (f) => `${f} ne peut pas être une adresse e-mail`,
      no_links: (f) => `${f} ne peut pas contenir de lien`,
      reserved: (f) => `${f} est réservé : choisissez-en un autre`,
    },
  },
  search: {
    title: 'Rechercher dans la communauté',
    lede: 'Cherchez dans les discussions, les réponses et la FAQ, dans toutes les langues.',
    label: 'Rechercher',
    button: 'Rechercher',
    category: 'Dans la catégorie',
    allCategories: 'Toutes les catégories',
    results: (n, f) => (n < 2 ? `${f} résultat` : `${f} résultats`),
    none: (q) => `Rien trouvé pour « ${q} ». Essayez moins de mots ou d’autres mots, ou posez la question dans Aide et assistance.`,
    prompt: 'Tapez un ou deux mots, comme « annuler », « VoiceOver » ou un numéro de niveau.',
    kinds: { thread: 'Discussion', post: 'Réponse', faq: 'FAQ' },
    inThread: (title) => `Dans « ${title} »`,
  },
  faq: {
    title: 'Questions fréquentes',
    lede: 'Des réponses rapides sur OutBrick, issues de la page d’assistance et des discussions dont l’équipe a retenu la meilleure réponse.',
    community: 'De la communauté',
    support: 'De l’assistance OutBrick',
    supportLink: 'Lire toute la page d’assistance',
    fromThread: 'Lire la discussion',
    none: 'Aucune réponse de la communauté n’a encore été ajoutée.',
  },
  guidelines: {
    title: 'Règles de la communauté',
    lede: 'La communauté OutBrick est un endroit calme pour trouver de l’aide et faire évoluer le jeu. Voici les quelques règles qui la gardent ainsi.',
    updated: 'Mis à jour le 7 octobre 2026',
    privacy: 'La politique de confidentialité',
    contact: 'Contacter l’équipe',
    sections: [
      {
        heading: 'Soyez bienveillant',
        paragraphs: ['Ici, chacun joue à sa façon : avec VoiceOver, avec Contrôle de sélection, d’une seule main, dans une deuxième langue ou pour la toute première fois. Répondez à la question posée, présumez la bonne foi, et contestez les idées, jamais les personnes.'],
        points: ['Pas d’insultes, de harcèlement, de haine ni de menaces.', 'Pas d’acharnement : si quelqu’un a déjà reçu une réponse, votez plutôt que de répéter.', 'Ne vous moquez d’aucune question. Tous les experts l’ont posée un jour.'],
      },
      {
        heading: 'Gardez les informations personnelles pour vous',
        paragraphs: ['Ne publiez jamais votre adresse e-mail ou celle d’autrui, un numéro de téléphone, une adresse postale, un identifiant Apple, un identifiant Game Center, des reçus d’achat ni des moyens de paiement. Nous n’en avons jamais besoin en public, et l’équipe ne vous les demandera jamais ici.', 'Une capture d’écran peut en montrer plus que prévu : vérifiez les noms et les notifications avant de la publier.'],
      },
      {
        heading: 'Des signalements de bugs qui aident',
        paragraphs: ['Un bon signalement nous permet de voir le bug sur notre propre appareil. Le formulaire demande exactement ce qu’il nous faut.'],
        points: ['Votre appareil, sa version d’iOS ou d’iPadOS et la version d’OutBrick.', 'Si VoiceOver, Contrôle vocal, Contrôle de sélection, Zoom ou un autre réglage était activé.', 'Des étapes numérotées depuis l’ouverture de l’app, ce que vous attendiez et ce qui s’est passé.', 'Un bug par discussion. Cherchez d’abord, et complétez un signalement existant plutôt que d’en créer un doublon.'],
      },
      {
        heading: 'Attention aux spoilers',
        paragraphs: ["Certains aiment trouver la solution d’un plateau seuls. Commencez un message qui dévoile une solution ou une surprise de fin de Voyage par « Spoiler : » suivi du niveau concerné, pour qu’on puisse le passer, et gardez la réponse hors du titre."],
      },
      {
        heading: 'Restez dans le sujet, dans la langue de votre choix',
        paragraphs: ['Publiez dans la bonne catégorie et gardez chaque discussion sur son sujet. Écrivez dans la langue qui vous est la plus facile et indiquez-la sur votre message, pour que ses lecteurs le trouvent. Pas de publicité, de liens de parrainage ni de liens vers des copies non officielles du jeu.'],
      },
      {
        heading: 'Modération et recours',
        paragraphs: ['Les modérateurs et l’équipe OutBrick peuvent modifier un titre, déplacer une discussion, masquer un message, verrouiller une discussion ou suspendre un compte quand ces règles ne sont pas respectées. Chaque action est consignée. Si l’un de vos messages est masqué, nous vous écrivons pour vous en donner le motif.', 'Si vous pensez que nous nous sommes trompés, répondez à cet e-mail ou utilisez le formulaire de contact sous 30 jours : une personne qui n’a pas pris la décision réexaminera la situation.'],
        points: ['Signalez un message avec son bouton Signaler. Les signalements restent confidentiels.', 'Les premiers messages d’un nouveau membre qui contiennent des liens attendent une validation avant d’apparaître.'],
      },
      {
        heading: 'Votre compte et vos données',
        paragraphs: ['Seul votre nom affiché est public. Vous pouvez télécharger tout ce que nous détenons sur vous, ou supprimer votre compte, à tout moment depuis les Réglages. La suppression efface votre profil ; vos messages restent, signés « Ancien membre », pour que les discussions gardent leur sens. La politique de confidentialité explique ce qui est conservé et pourquoi.'],
      },
    ],
  },
  signin: {
    title: 'Se connecter à la communauté OutBrick',
    lede: 'La lecture est ouverte à tous. Connectez-vous pour publier, répondre, voter et suivre des discussions. Aucun mot de passe à retenir.',
    providersHeading: 'Se connecter avec un compte que vous avez déjà',
    apple: 'Se connecter avec Apple',
    google: 'Se connecter avec Google',
    facebook: 'Continuer avec Facebook',
    shares: {
      apple: 'Apple transmet une adresse e-mail, qui peut être une adresse relais privée si vous choisissez Masquer mon adresse e-mail, et votre nom seulement si vous l’autorisez.',
      google: 'Google transmet votre nom et votre adresse e-mail. Nous gardons l’adresse pour vous connecter et ne la montrons jamais.',
      facebook: 'Facebook transmet votre nom et votre adresse e-mail. Nous ne publions jamais rien sur Facebook.',
      email: 'Nous vous envoyons un lien à usage unique qui vous connecte pour 30 jours sur ce navigateur. L’adresse ne sert qu’à la connexion et aux e-mails que vous choisissez.',
    },
    or: 'Ou',
    emailHeading: 'Se connecter avec un lien par e-mail',
    email: 'Adresse e-mail',
    emailHint: 'Nous enverrons un lien valable une fois, pendant 20 minutes.',
    emailButton: 'M’envoyer un lien de connexion',
    sent: 'Consultez vos e-mails',
    sentNote: 'Si cette adresse peut se connecter, un lien est en route. Il fonctionne une fois, pendant 20 minutes. Vous pouvez fermer cette page.',
    errors: {
      used: 'Ce lien de connexion a déjà été utilisé. Chaque lien connecte un seul navigateur, une seule fois. Demandez un nouveau lien ci-dessous pour vous connecter sur cet appareil.',
      expired: 'Ce lien de connexion a expiré. Les liens sont valables 20 minutes : demandez-en un nouveau ci-dessous.',
      invalid: 'Ce lien de connexion n’a pas fonctionné. Il a peut-être déjà servi. Demandez-en un nouveau ci-dessous.',
      failed: 'La connexion n’a pas abouti à cause d’un problème de l’autre côté. Réessayez, ou utilisez un lien par e-mail.',
      denied: 'La connexion a été annulée. Rien n’a été partagé. Vous pouvez réessayer quand vous voulez.',
      unavailable: "Ce moyen de connexion n’est pas disponible pour le moment. Utilisez un lien par e-mail ou réessayez plus tard.",
      email_taken: "Cette adresse e-mail appartient déjà à un autre compte. Connectez-vous comme la première fois.",
    },
    already: (name) => `Vous êtes déjà connecté en tant que ${name}.`,
    privacy: 'La politique de confidentialité et les règles de la communauté expliquent comment nous traitons vos données.',
    noProviders: 'La connexion avec d’autres comptes n’est pas encore activée. Utilisez un lien par e-mail.',
  },
  welcome: {
    title: 'Choisissez votre nom affiché',
    lede: 'C’est le seul nom que voient les autres membres. Vous pourrez le changer plus tard dans les Réglages.',
    name: 'Nom affiché',
    nameHint: 'De 3 à 30 caractères : lettres, chiffres, espaces, points, tirets et tirets bas. Pas votre adresse e-mail.',
    save: 'Enregistrer et continuer',
    saved: 'Bienvenue dans la communauté OutBrick.',
  },
  settings: {
    title: 'Réglages',
    lede: 'Votre profil, vos e-mails et vos données. Les changements sont enregistrés avec le bouton de chaque section.',
    profile: 'Profil',
    displayName: 'Nom affiché',
    displayNameHint: 'Le seul nom que voient les autres membres.',
    bio: 'Présentation',
    bioHint: '300 caractères maximum. Affichée sur votre profil.',
    language: 'Langue des e-mails et de la communauté',
    languageHint: 'Les listes montrent les discussions dans cette langue et en anglais par défaut.',
    saveProfile: 'Enregistrer le profil',
    profileSaved: 'Profil enregistré.',
    emails: 'E-mails',
    emailsLede: (address) => `Nous écrivons à ${address}. Chaque e-mail contient aussi un lien de désinscription en un clic.`,
    emailKinds: {
      reply: ['Réponses', 'Quelqu’un répond à votre discussion ou à l’un de vos messages.'],
      mention: ['Mentions', 'Quelqu’un écrit @ suivi de votre nom affiché.'],
      watched: ['Discussions et catégories suivies', 'Les nouveaux messages dans ce que vous suivez.'],
      status: ['Changements de statut', 'Votre bug ou votre idée change de statut, par exemple « Corrigé dans la 5.1 ».'],
      solved: ['Solutions', 'Votre réponse est marquée comme solution.'],
      release: ['Nouvelles versions', 'Une nouvelle version d’OutBrick est sortie (depuis les Annonces).'],
      moderation: ['Avis de modération', 'Un modérateur a masqué l’un de vos messages, avec le motif. Nous vous conseillons de le laisser activé.'],
    },
    saveEmails: 'Enregistrer les choix d’e-mails',
    emailsSaved: 'Choix d’e-mails enregistrés.',
    address: "Adresse e-mail",
    addressHint: "Jamais montrée à personne. Une nouvelle adresse remplace l’ancienne une fois confirmée depuis l’e-mail que nous envoyons.",
    addressNeeded: "Ajoutez une adresse e-mail pour publier. Il nous faut une adresse confirmée pour vous envoyer les réponses et les liens de connexion.",
    saveAddress: "Changer d’adresse e-mail",
    addressSent: (a) => `Nous avons envoyé un lien de confirmation à ${a}. L’adresse changera dès que vous l’ouvrirez.`,
    addressConfirmed: "Votre adresse e-mail est confirmée.",
    accounts: 'Vos moyens de connexion',
    accountsLede: 'Vous pouvez vous connecter avec chacun d’eux. Pour en ajouter un, déconnectez-vous puis connectez-vous avec, en utilisant la même adresse e-mail.',
    providerNames: { apple: 'Apple', google: 'Google', facebook: 'Facebook', email: 'Lien par e-mail' },
    data: 'Vos données',
    dataLede: 'Téléchargez tout ce que nous détenons sur vous : profil, messages, votes, suivis et choix d’e-mails, dans un fichier JSON.',
    export: 'Télécharger mes données',
    exportEmail: 'M’envoyer un lien de téléchargement',
    exportEmailSent: 'Consultez votre boîte de réception : le lien est valable 24 heures.',
    signOut: 'Se déconnecter',
    signedOut: 'Vous êtes déconnecté.',
    deleteHeading: 'Supprimer mon compte',
    deleteLede: 'Cela efface votre profil, vos moyens de connexion, vos suivis et votre adresse e-mail. Vos messages restent, signés « Ancien membre », pour que les discussions gardent leur sens. C’est définitif.',
    deleteConfirm: 'Tapez DELETE pour confirmer',
    deleteHint: 'En majuscules, pour éviter toute erreur.',
    deleteButton: 'Supprimer mon compte',
    deleted: 'Votre compte est supprimé. Merci d’avoir fait partie de la communauté.',
    banned: 'Votre compte est suspendu : vous pouvez lire, mais pas publier. L’e-mail envoyé explique pourquoi et comment faire appel.',
  },
  notifications: {
    title: 'Notifications',
    lede: 'Les réponses, les mentions et les nouvelles de ce que vous suivez.',
    markAll: 'Tout marquer comme lu',
    marked: 'Toutes les notifications sont marquées comme lues.',
    none: 'Rien de nouveau. Quand quelqu’un vous répond, cela apparaît ici.',
    unreadTag: 'Nouveau',
    kinds: {
      reply: (actor, thread) => `${actor} a répondu dans « ${thread} »`,
      mention: (actor, thread) => `${actor} vous a mentionné dans « ${thread} »`,
      watched: (actor, thread) => `${actor} a publié dans « ${thread} », que vous suivez`,
      status: (_actor, thread, extra) => `« ${thread} » est maintenant : ${extra}`,
      solved: (actor, thread) => `${actor} a marqué votre réponse dans « ${thread} » comme solution`,
      release: (_actor, thread, extra) => (extra ? `OutBrick ${extra} est disponible : « ${thread} »` : `Nouvelle version : « ${thread} »`),
      moderation: (_actor, thread) => `Un modérateur est intervenu sur votre message dans « ${thread} ». Nous vous avons écrit pour expliquer pourquoi.`,
      welcome: () => 'Bienvenue dans la communauté OutBrick. Commencez par les règles, puis venez dire bonjour dans Discussions générales.',
    },
  },
  profile: {
    title: (name) => name,
    joined: (when) => `Membre depuis le ${when}`,
    posts: pluralFr('message', 'messages'),
    solved: (n, f) => (n < 2 ? `${f} solution` : `${f} solutions`),
    recent: 'Discussions récentes',
    none: 'Aucune discussion pour l’instant.',
    noBio: 'Pas encore de présentation.',
  },
  mod: {
    title: 'Modération',
    lede: 'Les signalements des membres et les premiers messages en attente de validation. Chaque action ici est consignée.',
    reports: 'Signalements',
    queue: 'En attente de validation',
    noReports: 'Aucun signalement ouvert.',
    noQueue: 'Rien n’attend de validation.',
    reportedBy: (name, reason) => `Signalé par ${name} : ${reason}`,
    inThread: (title) => `Dans « ${title} »`,
    dismiss: 'Classer le signalement',
    hide: 'Masquer le message',
    approve: 'Valider le message',
    reasonLabel: 'Motif, envoyé par e-mail à l’auteur',
    done: 'C’est fait.',
    forbidden: 'Seuls les modérateurs peuvent voir cette page.',
    banHeading: 'Suspendre ce membre',
    banLede: 'Un membre suspendu peut toujours lire et modifier ses réglages d’e-mail, mais ne peut ni publier, ni répondre, ni réagir, ni voter.',
    banDays: 'Jours',
    banReason: 'Motif, affiché au membre',
    banSubmit: 'Suspendre',
    unban: 'Lever la suspension',
    bannedUntil: (d) => `Suspendu jusqu’au ${d}`,
    banDone: 'Le membre est suspendu.',
    unbanDone: 'La suspension est levée.',
  },
  errors: {
    signin_required: 'Connectez-vous pour faire cela.',
    forbidden: 'Vous ne pouvez pas faire cela.',
    not_found: 'Introuvable. Le contenu a peut-être été supprimé.',
    invalid: 'Certains éléments sont à corriger.',
    rate_limited: 'Doucement ! Attendez une minute et réessayez.',
    too_fast: 'C’était rapide ! Patientez un instant, puis renvoyez : votre texte est toujours là.',
    too_large: 'C’est trop long. Raccourcissez puis réessayez.',
    locked: 'Cette discussion est verrouillée.',
    banned: 'Votre compte ne peut pas publier pour le moment.',
    unverified: 'Confirmez d’abord votre adresse e-mail.',
    network: 'Impossible de joindre la communauté. Vérifiez votre connexion et réessayez.',
    unavailable: 'La communauté fait une petite pause. Réessayez dans un instant.',
    unknown: 'Un problème est survenu de notre côté. Réessayez.',
    send_failed: "Impossible d’envoyer l’e-mail pour le moment. Réessayez dans une minute.",
  },
  loading: 'Chargement…',
  signedIn: "Vous êtes connecté.",
  retry: 'Réessayer',
  notFoundTitle: 'Page introuvable',
  notFoundLede: 'Aucune page de la communauté ne se trouve à cette adresse.',
  backHome: 'Aller à l’accueil de la communauté',
  supportCta: {
    heading: 'Demandez à la communauté',
    text: 'Les joueurs et l’équipe OutBrick répondent aux questions, suivent les bugs et votent pour les idées dans la communauté OutBrick.',
    ask: 'Demander à la communauté',
    bug: 'Signaler un bug',
  },
};

const pluralDe = (one: string, many: string): N => (n, f) => `${f} ${n === 1 ? one : many}`;

const de: CommunityCopy = {
  meta: {
    homeTitle: 'OutBrick-Community: Hilfe, Fehlerberichte und Ideen',
    homeDescription: 'Hol dir Hilfe zu OutBrick, melde Fehler, stimme für Ideen ab und sprich mit anderen über Spielfelder. Von Anfang an für VoiceOver gebaut.',
    faqTitle: 'FAQ der OutBrick-Community: Antworten auf Fragen',
    faqDescription: 'Antworten auf die häufigsten Fragen zu OutBrick: Leben, Rückgängig, Werbung, Käufe, Barrierefreiheit und die als Lösung markierten Antworten.',
    guidelinesTitle: 'Regeln der OutBrick-Community: so reden wir hier',
    guidelinesDescription: 'So funktioniert die OutBrick-Community: freundlich bleiben, Persönliches schützen, hilfreiche Fehlerberichte, Spoiler, Moderation und Einspruch.',
    pageTitle: (page) => `${page} — OutBrick-Community`,
    threadTitle: (title) => `${title} — OutBrick-Community`,
  },
  name: 'OutBrick-Community',
  eyebrow: 'OutBrick-Community',
  skip: 'Zum Inhalt springen',
  breadcrumb: 'Brotkrumennavigation',
  nav: {
    label: 'Community',
    home: 'Community-Startseite',
    search: 'Suche',
    faq: 'FAQ',
    guidelines: 'Regeln',
    notifications: 'Mitteilungen',
    unread: (_n, f) => `${f} ungelesen`,
    settings: 'Einstellungen',
    signIn: 'Anmelden',
    signOut: 'Abmelden',
    moderation: 'Moderation',
    newThread: 'Thema starten',
    helpCentre: 'Hilfe-Center',
    signedInAs: (name) => `Angemeldet als ${name}`,
  },
  home: {
    title: 'OutBrick-Community',
    lede: 'Frag nach Hilfe bei einem Spielfeld, sag uns, was kaputt ist, und stimm darüber ab, was wir als Nächstes bauen. Das Team liest jedes Thema und antwortet öffentlich.',
    points: [
      'Jede Seite funktioniert mit VoiceOver, Sprachsteuerung, Schaltersteuerung und Tastatur.',
      'Du siehst Themen standardmäßig in deiner Sprache und auf Englisch; ein Tippen zeigt alle Sprachen.',
      'Deine E-Mail-Adresse wird niemandem angezeigt.',
    ],
    searchLabel: 'Community durchsuchen',
    searchButton: 'Suchen',
    categoriesHeading: 'Kategorien',
    latestHeading: 'Neueste Themen',
    startThread: 'Thema starten',
    allThreads: 'Alle Themen dieser Kategorie ansehen',
    readGuidelines: 'Community-Regeln lesen',
    noScript: 'Das Forum braucht JavaScript, um Themen anzuzeigen und Beiträge zu senden. Kategorien, FAQ und Regeln funktionieren auch ohne.',
  },
  categories: {
    announcements: { name: 'Ankündigungen', description: 'Jede OutBrick-Version, sobald sie im App Store ist, und Neuigkeiten vom Team.' },
    help: { name: 'Hilfe und Support', description: '„Wie mache ich …?“-Fragen zu Spielfeldern, Leben, Käufen und Einstellungen. Markiere die Antwort, die dir geholfen hat.' },
    bugs: { name: 'Fehlerberichte', description: 'Funktioniert etwas nicht? Nenn Gerät, iOS- und App-Version und was passiert ist, und verfolge den Status.' },
    ideas: { name: 'Ideen und Feedback', description: 'Was sollte OutBrick als Nächstes können? Schlag es vor, stimm für Ideen ab und sieh, was geplant ist.' },
    accessibility: { name: 'Barrierefreiheit', description: 'VoiceOver, Sprachsteuerung, Schaltersteuerung, größerer Text und Spielen mit Farbsehschwäche. Diese Kategorie beobachtet das Team am genauesten.' },
    'show-and-tell': { name: 'Zeig her', description: 'Spielfelder, auf die du stolz bist, Meilensteine der Reise und Screenshots, mit Alternativtext für alle.' },
    general: { name: 'Allgemeines', description: 'Alles andere rund um OutBrick und Puzzles überhaupt.' },
  },
  categoryAside: 'Alle Kategorien',
  stats: {
    threads: pluralDe('Thema', 'Themen'),
    posts: pluralDe('Beitrag', 'Beiträge'),
    replies: pluralDe('Antwort', 'Antworten'),
    views: pluralDe('Aufruf', 'Aufrufe'),
    votes: pluralDe('Stimme', 'Stimmen'),
  },
  lastActivity: (when) => `Letzter Beitrag ${when}`,
  noActivity: 'Noch keine Beiträge',
  category: {
    sortLabel: 'Themen sortieren',
    sorts: { latest: 'Letzte Aktivität', new: 'Neueste', top: 'Meiste Stimmen', unanswered: 'Unbeantwortet' },
    filters: 'Themen filtern',
    language: 'Sprache',
    langMine: (language) => `${language} und Englisch`,
    langAll: 'Alle Sprachen',
    status: 'Status',
    statusAll: 'Jeder Status',
    apply: 'Themen anzeigen',
    teamOnly: 'Hier startet nur das OutBrick-Team neue Themen. Antworten können alle.',
    empty: 'Hier gibt es noch keine Themen. Starte das erste!',
    emptyFiltered: 'Keine Themen passen zu diesen Filtern. Versuch es mit allen Sprachen oder jedem Status.',
    showing: (from, to, total) => `Themen ${from} bis ${to} von ${total}`,
    pages: 'Seiten der Themenliste',
  },
  follow: {
    legend: 'Per E-Mail benachrichtigen',
    watch: 'Beobachten',
    watching: 'Beobachtet',
    mute: 'Stummschalten',
    muted: 'Stummgeschaltet',
    watchCategory: (name) => `${name} beobachten: bei jedem neuen Thema eine E-Mail`,
    muteCategory: (name) => `${name} stummschalten und bei den neuesten Themen ausblenden`,
    watchThread: (title) => `„${title}“ beobachten: bei jeder Antwort eine E-Mail`,
    muteThread: (title) => `„${title}“ stummschalten: keine E-Mails, auch nicht bei Antworten an dich`,
    nowWatching: 'Du beobachtest das. Wir schreiben dir bei neuen Beiträgen.',
    nowMuted: 'Stummgeschaltet. Dazu bekommst du keine E-Mails mehr.',
    nowNone: 'Du beobachtest das nicht mehr und hast es nicht stummgeschaltet.',
  },
  list: {
    startedBy: (name, when) => `Gestartet von ${name}, ${when}`,
    lastReply: (name, when) => `letzte Antwort von ${name}, ${when}`,
    unread: (n, f) => (n === 1 ? '1 neuer Beitrag' : `${f} neue Beiträge`),
    pinned: 'Angeheftet',
    locked: 'Gesperrt',
    solved: 'Gelöst',
    hidden: 'Ausgeblendet',
  },
  status: {
    new: 'Neu',
    confirmed: 'Bestätigt',
    fixed: 'Behoben',
    released: 'Veröffentlicht',
    not_a_bug: 'Kein Fehler',
    duplicate: 'Duplikat',
    open: 'Offen',
    considering: 'Wird geprüft',
    planned: 'Geplant',
    in_progress: 'In Arbeit',
    shipped: 'Umgesetzt',
    declined: 'Abgelehnt',
  },
  statusLabel: 'Status',
  roles: { team: 'OutBrick-Team', moderator: 'Moderation', admin: 'OutBrick-Team', trusted: 'Vertrauensmitglied' },
  formerMember: 'Ehemaliges Mitglied',
  thread: {
    startedBy: (name, when) => `Gestartet von ${name} am ${when}`,
    jumpSolution: 'Zur Lösung springen',
    jumpUnread: 'Zum ersten ungelesenen Beitrag springen',
    bugHeading: 'Details zum Fehler',
    bug: { device: 'Gerät', osVersion: 'iOS- oder iPadOS-Version', appVersion: 'OutBrick-Version', assistive: 'Assistive Technologie', steps: 'Schritte zum Nachstellen', expected: 'Was passieren sollte', actual: 'Was passiert ist' },
    postsHeading: 'Beiträge',
    postHeading: (author, date) => `${author}, ${date}`,
    postNumber: (n) => `Beitrag ${n}`,
    solution: 'Lösung',
    solutionBy: (name) => `Als Lösung markiert. Antwort von ${name}.`,
    edited: (when) => `Bearbeitet ${when}`,
    hiddenPost: 'Die Moderation hat diesen Beitrag ausgeblendet.',
    hiddenReason: (reason) => `Grund: ${reason}`,
    pending: 'Wartet auf Freigabe durch die Moderation. Nur du und die Moderation sehen ihn.',
    replyTo: (n) => `Antwort auf Beitrag ${n}`,
    pages: 'Seiten dieses Themas',
    page: (n) => `Seite ${n}`,
    previous: 'Vorherige Seite',
    next: 'Nächste Seite',
    pageOf: (page, pages) => `Seite ${page} von ${pages}`,
    upvote: 'Dafür stimmen',
    upvoted: 'Abgestimmt',
    upvoteLabel: (title, votes, n, f) => `Dafür stimmen: „${title}“, ${votes(n, f)}`,
    votes: pluralDe('Stimme', 'Stimmen'),
    actions: {
      reply: 'Antworten',
      replyLabel: (name) => `Antworten an ${name}`,
      quote: 'Zitieren',
      quoteLabel: (name) => `Zitieren: ${name}`,
      edit: 'Bearbeiten',
      editLabel: (n) => `Bearbeiten: Beitrag ${n}`,
      delete: 'Löschen',
      deleteLabel: (n) => `Löschen: Beitrag ${n}`,
      report: 'Melden',
      reportLabel: (n, name) => `Melden: Beitrag ${n} von ${name}`,
      solve: 'Als Lösung markieren',
      solveLabel: (n) => `Als Lösung markieren: Beitrag ${n}`,
      unsolve: 'Lösung aufheben',
      unsolveLabel: (n) => `Lösung aufheben: Beitrag ${n}`,
      save: 'Änderungen sichern',
      cancel: 'Abbrechen',
      confirmDelete: 'Diesen Beitrag löschen? Das lässt sich nicht rückgängig machen.',
      yesDelete: 'Ja, löschen',
      share: 'Link zu diesem Beitrag',
    },
    report: {
      legend: 'Warum meldest du diesen Beitrag?',
      reasons: { spam: 'Spam oder Werbung', abuse: 'Unfreundlich oder beleidigend', off_topic: 'Gehört nicht zum Thema', personal_info: 'Enthält persönliche Daten', other: 'Etwas anderes' },
      note: 'Was die Moderation wissen sollte',
      send: 'Meldung senden',
      sent: 'Danke. Die Moderation sieht es sich an.',
    },
    replyHeading: 'Deine Antwort',
    signInToReply: 'Zum Antworten anmelden',
    signInToReplyNote: 'Lesen können alle. Zum Antworten meldest du dich mit Apple, Google, Facebook oder einem E-Mail-Link an.',
    blocked: {
      locked: 'Dieses Thema ist gesperrt und nimmt keine Antworten mehr an.',
      banned: 'Dein Konto kann gerade nichts veröffentlichen. In der E-Mail an dich steht, warum, und wie du Einspruch einlegst.',
      unverified: 'Bestätige zuerst deine E-Mail-Adresse: Wir haben dir einen Link geschickt.',
      other: 'Du kannst auf dieses Thema nicht antworten.',
    },
    replyPosted: 'Deine Antwort ist veröffentlicht.',
    postSaved: 'Deine Änderungen sind gesichert.',
    postDeleted: 'Der Beitrag ist gelöscht.',
    solvedNow: 'Als Lösung markiert.',
    unsolvedNow: 'Nicht mehr als Lösung markiert.',
    reported: 'Danke für die Meldung. Die Moderation sieht es sich an.',
    voteSaved: (votes) => `Abgestimmt. ${votes}.`,
    voteRemoved: (votes) => `Stimme zurückgenommen. ${votes}.`,
    moderation: 'Moderation',
    modPin: 'Thema anheften',
    modUnpin: 'Thema lösen',
    modLock: 'Thema sperren',
    modUnlock: 'Thema entsperren',
    modHide: 'Thema ausblenden',
    modUnhide: 'Thema wieder zeigen',
    modStatus: 'Status',
    modStatusNote: 'Statusnotiz',
    modStatusNoteHint: 'Steht neben dem Status, zum Beispiel „Behoben in 5.1“.',
    modNoStatus: 'Kein Status',
    modSave: 'Status sichern',
    modSaved: 'Thema aktualisiert.',
    notFound: 'Thema nicht gefunden',
    notFoundNote: 'Es wurde vielleicht gelöscht, oder dem Link fehlt etwas. Durchsuch die Community oder geh zurück zu den Kategorien.',
    readOnline: 'In der Community lesen und antworten',
  },
  composer: {
    label: 'Dein Beitrag',
    replyLabel: 'Deine Antwort',
    hint: 'Schreib in Markdown: Eine Leerzeile beginnt einen neuen Absatz. Hilfe zur Formatierung steht darunter.',
    write: 'Schreiben',
    preview: 'Vorschau',
    tabsLabel: 'Schreiben oder Vorschau',
    previewEmpty: 'Noch nichts für die Vorschau.',
    previewLoading: 'Vorschau wird vorbereitet …',
    previewHeading: 'So sieht dein Beitrag aus',
    help: 'Hilfe zur Formatierung',
    helpItems: [
      ['**fett**', 'fetter Text'],
      ['*kursiv*', 'kursiver Text'],
      ['# Überschrift', 'eine Überschrift (## und ### für kleinere)'],
      ['- Punkt', 'eine Aufzählung; 1. für eine nummerierte Liste'],
      ['> Zitat', 'ein Zitat'],
      ['[Text](https://…)', 'ein Link'],
      ['`Code`', 'Code, etwa eine Levelnummer oder der Name einer Einstellung'],
    ],
    count: (used, max) => `${used} von ${max} Zeichen`,
    left: (n, f) => (n === 1 ? 'Noch 1 Zeichen' : `Noch ${f} Zeichen`),
    over: (n, f) => (n === 1 ? '1 Zeichen zu viel' : `${f} Zeichen zu viel`),
    submitReply: 'Antwort senden',
    sending: 'Wird gesendet …',
    replyingTo: (n) => `Antwort auf Beitrag ${n}.`,
    clearReply: 'Stattdessen auf das Thema antworten',
  },
  newThread: {
    title: 'Thema starten',
    lede: 'Ein Thema pro Beitrag, mit einem Titel, der sagt, worum es geht. Such zuerst: Vielleicht hat schon jemand gefragt.',
    category: 'Kategorie',
    chooseCategory: 'Kategorie wählen',
    titleLabel: 'Titel',
    titleHint: 'Ein kurzer Satz, zum Beispiel „Level 214: Wie komme ich am vereisten Tor vorbei?“. 4 bis 140 Zeichen.',
    language: 'Sprache deines Beitrags',
    languageHint: 'Damit ihn Leute finden, die diese Sprache lesen. Listen zeigen standardmäßig deine Sprache und Englisch.',
    body: 'Dein Beitrag',
    bodyBug: 'Zusammenfassung',
    bugLegend: 'Zum Fehler',
    device: 'Gerät',
    deviceHint: 'Zum Beispiel iPhone 15 Pro, iPad Air (5. Generation) oder Apple Watch Series 9. Einstellungen › Allgemein › Info › Modellname.',
    osVersion: 'iOS-, iPadOS- oder andere Systemversion',
    osVersionHint: 'Einstellungen › Allgemein › Info › iOS-Version, zum Beispiel 27.1.',
    appVersion: 'OutBrick-Version',
    appVersionHint: 'Tippe auf dem Startbildschirm auf deinen Avatar, um dein Profil zu öffnen: Die Version steht ganz unten, zum Beispiel 5.1.1 (68). Im Spiel trägt Einstellungen › Fehler melden sie für dich ein.',
    assistive: 'Verwendete assistive Technologie',
    assistiveHint: 'Kreuz alles an, was eingeschaltet war, als es passiert ist.',
    at: { voiceover: 'VoiceOver', voice_control: 'Sprachsteuerung', switch_control: 'Schaltersteuerung', zoom: 'Zoom', larger_text: 'Größerer Text', colour_filters: 'Farbfilter', none: 'Keine' },
    steps: 'Schritte zum Nachstellen',
    stepsHint: 'Nummerierte Schritte ab dem Öffnen der App, zum Beispiel: 1. Level 214 öffnen. 2. Den roten Stein nach links wischen.',
    expected: 'Was passieren sollte',
    actual: 'Was stattdessen passiert ist',
    submit: 'Thema veröffentlichen',
    posted: 'Dein Thema ist veröffentlicht.',
    signIn: 'Zum Starten eines Themas anmelden',
    teamOnly: 'Nur das OutBrick-Team kann in den Ankündigungen Themen starten.',
  },
  form: {
    problem: 'Da stimmt etwas nicht',
    problemCount: (n, f) => (n === 1 ? 'Korrigier 1 Angabe, um fortzufahren:' : `Korrigier ${f} Angaben, um fortzufahren:`),
    required: 'Alle Felder sind Pflicht, außer sie sind als optional markiert.',
    optional: 'optional',
    honeypot: 'Dieses Feld leer lassen',
    fields: {
      title: 'Titel',
      body: 'Beitrag',
      categorySlug: 'Kategorie',
      language: 'Sprache',
      device: 'Gerät',
      osVersion: 'Systemversion',
      appVersion: 'OutBrick-Version',
      assistive: 'Assistive Technologie',
      steps: 'Schritte zum Nachstellen',
      expected: 'Was passieren sollte',
      actual: 'Was passiert ist',
      email: 'E-Mail-Adresse',
      displayName: 'Anzeigename',
      bio: 'Über dich',
      confirm: 'Bestätigung',
      reason: 'Grund',
    },
    codes: {
      required: (field) => `${field}: Bitte ausfüllen`,
      too_short: (field) => `${field}: zu kurz`,
      too_long: (field) => `${field}: zu lang`,
      invalid: (field) => `${field}: Bitte prüfen`,
      taken: (field) => `${field}: schon vergeben, bitte wähl einen anderen`,
      email: () => 'Gib eine E-Mail-Adresse wie name@beispiel.de ein',
      choose: (field) => `${field}: Bitte auswählen`,
      mismatch: () => 'Gib zur Bestätigung DELETE in Großbuchstaben ein',
      no_email: (f) => `${f}: bitte keine E-Mail-Adresse verwenden`,
      no_links: (f) => `${f}: bitte keine Links verwenden`,
      reserved: (f) => `${f}: ist reserviert, bitte wähl einen anderen`,
    },
  },
  search: {
    title: 'Community durchsuchen',
    lede: 'Durchsuch Themen, Antworten und die FAQ in allen Sprachen.',
    label: 'Suchen nach',
    button: 'Suchen',
    category: 'In Kategorie',
    allCategories: 'Alle Kategorien',
    results: (n, f) => (n === 1 ? '1 Treffer' : `${f} Treffer`),
    none: (q) => `Nichts gefunden für „${q}“. Versuch es mit weniger oder anderen Wörtern, oder frag in Hilfe und Support.`,
    prompt: 'Gib ein oder zwei Wörter ein, etwa „Rückgängig“, „VoiceOver“ oder eine Levelnummer.',
    kinds: { thread: 'Thema', post: 'Antwort', faq: 'FAQ' },
    inThread: (title) => `In „${title}“`,
  },
  faq: {
    title: 'Häufige Fragen',
    lede: 'Kurze Antworten zu OutBrick, von der Hilfeseite und aus Themen, deren beste Antwort das Team ausgewählt hat.',
    community: 'Aus der Community',
    support: 'Vom OutBrick-Support',
    supportLink: 'Die ganze Hilfeseite lesen',
    fromThread: 'Zum Thema',
    none: 'Es wurden noch keine Antworten aus der Community hinzugefügt.',
  },
  guidelines: {
    title: 'Community-Regeln',
    lede: 'Die OutBrick-Community ist ein ruhiger Ort, um Hilfe zu finden und das Spiel mitzugestalten. Diese wenigen Regeln sorgen dafür, dass es so bleibt.',
    updated: 'Aktualisiert am 7. Oktober 2026',
    privacy: 'Die Datenschutzerklärung',
    contact: 'Das Team kontaktieren',
    sections: [
      {
        heading: 'Sei freundlich',
        paragraphs: ['Hier spielt jede und jeder anders: mit VoiceOver, mit Schaltersteuerung, mit einer Hand, in einer zweiten Sprache oder zum allerersten Mal. Beantworte die Frage, die gestellt wurde, geh von guten Absichten aus und widersprich Ideen, nie Menschen.'],
        points: ['Keine Beleidigungen, Belästigung, Hetze oder Drohungen.', 'Kein Nachtreten: Hat jemand schon eine Antwort, stimm lieber dafür, statt sie zu wiederholen.', 'Mach dich über keine Frage lustig. Alle Profis haben sie einmal gestellt.'],
      },
      {
        heading: 'Persönliches bleibt privat',
        paragraphs: ['Veröffentliche nie deine oder fremde E-Mail-Adressen, Telefonnummern, Wohnadressen, Apple-Accounts, Game-Center-Zugänge, Kaufbelege oder Zahlungsdaten. Wir brauchen sie nie öffentlich, und das Team fragt hier auch nie danach.', 'Screenshots zeigen oft mehr als gedacht: Prüf vor dem Posten Namen und Mitteilungen.'],
      },
      {
        heading: 'Fehlerberichte, die helfen',
        paragraphs: ['Ein guter Bericht lässt uns den Fehler auf unserem eigenen Gerät sehen. Das Formular fragt genau das ab, was wir brauchen.'],
        points: ['Dein Gerät, seine iOS- oder iPadOS-Version und die OutBrick-Version.', 'Ob VoiceOver, Sprachsteuerung, Schaltersteuerung, Zoom oder eine andere Einstellung an war.', 'Nummerierte Schritte ab dem Öffnen der App, was du erwartet hast und was passiert ist.', 'Ein Fehler pro Thema. Such zuerst und ergänz lieber einen bestehenden Bericht, statt ein Duplikat zu starten.'],
      },
      {
        heading: 'Spoiler',
        paragraphs: ["Manche knobeln ein Spielfeld am liebsten allein aus. Beginn einen Beitrag, der eine Lösung oder eine Überraschung aus der späten Reise verrät, mit „Spoiler:“ und dem Level, um das es geht, damit andere ihn überspringen können, und lass die Antwort aus dem Titel heraus."],
      },
      {
        heading: 'Beim Thema bleiben, in jeder Sprache',
        paragraphs: ['Poste in der passenden Kategorie und bleib in jedem Thema beim Thema. Schreib in der Sprache, die dir am leichtesten fällt, und stell sie an deinem Beitrag ein, damit Leute, die sie lesen, ihn finden. Keine Werbung, keine Empfehlungslinks und keine Links zu inoffiziellen Kopien des Spiels.'],
      },
      {
        heading: 'Moderation und Einspruch',
        paragraphs: ['Die Moderation und das OutBrick-Team können Titel ändern, Themen verschieben, Beiträge ausblenden, Themen sperren oder Konten sperren, wenn diese Regeln verletzt werden. Jede Maßnahme wird protokolliert. Wird einer deiner Beiträge ausgeblendet, schreiben wir dir den Grund per E-Mail.', 'Wenn du findest, dass wir falsch lagen, antworte innerhalb von 30 Tagen auf diese E-Mail oder nutz das Kontaktformular. Dann sieht es sich jemand noch einmal an, der nicht beteiligt war.'],
        points: ['Melde einen Beitrag mit seiner Schaltfläche „Melden“. Meldungen bleiben vertraulich.', 'Die ersten Beiträge neuer Mitglieder mit Links warten auf Freigabe, bevor sie erscheinen.'],
      },
      {
        heading: 'Dein Konto und deine Daten',
        paragraphs: ['Öffentlich ist nur dein Anzeigename. Du kannst jederzeit in den Einstellungen alles herunterladen, was wir über dich speichern, oder dein Konto löschen. Beim Löschen verschwindet dein Profil; deine Beiträge bleiben mit „Ehemaliges Mitglied“ stehen, damit Themen verständlich bleiben. Die Datenschutzerklärung erklärt, was gespeichert wird und warum.'],
      },
    ],
  },
  signin: {
    title: 'Bei der OutBrick-Community anmelden',
    lede: 'Lesen können alle. Melde dich an, um zu schreiben, zu antworten, abzustimmen und Themen zu beobachten. Kein Passwort nötig.',
    providersHeading: 'Mit einem Konto anmelden, das du schon hast',
    apple: 'Mit Apple anmelden',
    google: 'Über Google anmelden',
    facebook: 'Mit Facebook fortfahren',
    shares: {
      apple: 'Apple teilt eine E-Mail-Adresse, auf Wunsch eine private Weiterleitungsadresse über „E-Mail-Adresse verbergen“, und deinen Namen nur, wenn du es erlaubst.',
      google: 'Google teilt deinen Namen und deine E-Mail-Adresse. Die Adresse nutzen wir nur zum Anmelden und zeigen sie nie an.',
      facebook: 'Facebook teilt deinen Namen und deine E-Mail-Adresse. Wir posten nie etwas auf Facebook.',
      email: 'Wir schicken dir einen einmaligen Link, der dich in diesem Browser für 30 Tage anmeldet. Die Adresse nutzen wir nur zum Anmelden und für die E-Mails, die du auswählst.',
    },
    or: 'Oder',
    emailHeading: 'Mit einem E-Mail-Link anmelden',
    email: 'E-Mail-Adresse',
    emailHint: 'Wir schicken einen Link, der einmal und 20 Minuten lang funktioniert.',
    emailButton: 'Anmeldelink per E-Mail schicken',
    sent: 'Sieh in dein Postfach',
    sentNote: 'Wenn sich diese Adresse anmelden kann, ist ein Link unterwegs. Er funktioniert einmal, 20 Minuten lang. Du kannst diese Seite schließen.',
    errors: {
      used: 'Dieser Anmeldelink wurde bereits verwendet. Jeder Link meldet einen Browser einmal an. Fordere unten einen neuen Link an, um dich auf diesem Gerät anzumelden.',
      expired: 'Dieser Anmeldelink ist abgelaufen. Links gelten 20 Minuten: Fordere unten einen neuen an.',
      invalid: 'Dieser Anmeldelink hat nicht funktioniert. Vielleicht wurde er schon benutzt. Fordere unten einen neuen an.',
      failed: 'Die Anmeldung wurde wegen eines Problems beim Anbieter nicht abgeschlossen. Versuch es noch einmal oder nutz einen E-Mail-Link.',
      denied: 'Die Anmeldung wurde abgebrochen. Es wurde nichts geteilt. Du kannst es jederzeit noch einmal versuchen.',
      unavailable: "Diese Anmeldung ist gerade nicht verfügbar. Nutz einen E-Mail-Link oder versuch es später noch einmal.",
      email_taken: "Diese E-Mail-Adresse gehört schon zu einem anderen Konto. Melde dich so an wie beim ersten Mal.",
    },
    already: (name) => `Du bist schon als ${name} angemeldet.`,
    privacy: 'Wie wir mit deinen Daten umgehen, steht in der Datenschutzerklärung und in den Community-Regeln.',
    noProviders: 'Die Anmeldung mit anderen Konten ist noch nicht eingeschaltet. Nutz einen E-Mail-Link.',
  },
  welcome: {
    title: 'Wähl deinen Anzeigenamen',
    lede: 'Das ist der einzige Name, den andere Mitglieder sehen. Du kannst ihn später in den Einstellungen ändern.',
    name: 'Anzeigename',
    nameHint: '3 bis 30 Zeichen: Buchstaben, Ziffern, Leerzeichen, Punkte, Binde- und Unterstriche. Nicht deine E-Mail-Adresse.',
    save: 'Sichern und weiter',
    saved: 'Willkommen in der OutBrick-Community.',
  },
  settings: {
    title: 'Einstellungen',
    lede: 'Dein Profil, deine E-Mails und deine Daten. Änderungen werden mit der Schaltfläche des jeweiligen Abschnitts gesichert.',
    profile: 'Profil',
    displayName: 'Anzeigename',
    displayNameHint: 'Der einzige Name, den andere Mitglieder sehen.',
    bio: 'Über dich',
    bioHint: 'Bis zu 300 Zeichen. Steht in deinem Profil.',
    language: 'Sprache für E-Mails und die Community',
    languageHint: 'Listen zeigen Themen standardmäßig in dieser Sprache und auf Englisch.',
    saveProfile: 'Profil sichern',
    profileSaved: 'Profil gesichert.',
    emails: 'E-Mails',
    emailsLede: (address) => `Wir schreiben an ${address}. Jede E-Mail enthält außerdem einen Link zum Abbestellen mit einem Klick.`,
    emailKinds: {
      reply: ['Antworten', 'Jemand antwortet auf dein Thema oder einen deiner Beiträge.'],
      mention: ['Erwähnungen', 'Jemand schreibt @ und deinen Anzeigenamen.'],
      watched: ['Beobachtete Themen und Kategorien', 'Neue Beiträge in dem, was du beobachtest.'],
      status: ['Statusänderungen', 'Dein Fehler oder deine Idee ändert den Status, zum Beispiel „Behoben in 5.1“.'],
      solved: ['Lösungen', 'Deine Antwort wurde als Lösung markiert.'],
      release: ['Neue Versionen', 'Eine neue OutBrick-Version ist da (aus den Ankündigungen).'],
      moderation: ['Hinweise der Moderation', 'Die Moderation hat einen deiner Beiträge ausgeblendet, mit Grund. Wir empfehlen, das eingeschaltet zu lassen.'],
    },
    saveEmails: 'E-Mail-Auswahl sichern',
    emailsSaved: 'E-Mail-Auswahl gesichert.',
    address: "E-Mail-Adresse",
    addressHint: "Wird niemandem angezeigt. Eine neue Adresse gilt erst, wenn du sie über unsere E-Mail bestätigst.",
    addressNeeded: "Füg eine E-Mail-Adresse hinzu, um schreiben zu können. Für Antworten und Anmeldelinks brauchen wir eine bestätigte Adresse.",
    saveAddress: "E-Mail-Adresse ändern",
    addressSent: (a) => `Wir haben einen Bestätigungslink an ${a} geschickt. Die Adresse ändert sich, sobald du ihn öffnest.`,
    addressConfirmed: "Deine E-Mail-Adresse ist bestätigt.",
    accounts: 'So meldest du dich an',
    accountsLede: 'Du kannst dich mit jeder dieser Möglichkeiten anmelden. Für eine weitere meldest du dich ab und mit ihr wieder an, mit derselben E-Mail-Adresse.',
    providerNames: { apple: 'Apple', google: 'Google', facebook: 'Facebook', email: 'E-Mail-Link' },
    data: 'Deine Daten',
    dataLede: 'Lade alles herunter, was wir über dich speichern: Profil, Beiträge, Stimmen, Beobachtungen und E-Mail-Auswahl, als JSON-Datei.',
    export: 'Meine Daten herunterladen',
    exportEmail: 'Download-Link per E-Mail senden',
    exportEmailSent: 'Schau in dein Postfach: Der Link gilt 24 Stunden.',
    signOut: 'Abmelden',
    signedOut: 'Du bist abgemeldet.',
    deleteHeading: 'Mein Konto löschen',
    deleteLede: 'Das entfernt dein Profil, deine Anmeldemöglichkeiten, deine Beobachtungen und deine E-Mail-Adresse. Deine Beiträge bleiben mit „Ehemaliges Mitglied“ stehen, damit Themen verständlich bleiben. Das lässt sich nicht rückgängig machen.',
    deleteConfirm: 'Zur Bestätigung DELETE eingeben',
    deleteHint: 'In Großbuchstaben, damit es nicht aus Versehen passiert.',
    deleteButton: 'Mein Konto löschen',
    deleted: 'Dein Konto ist gelöscht. Danke, dass du Teil der Community warst.',
    banned: 'Dein Konto ist gesperrt: Du kannst lesen, aber nichts veröffentlichen. In der E-Mail an dich steht, warum, und wie du Einspruch einlegst.',
  },
  notifications: {
    title: 'Mitteilungen',
    lede: 'Antworten, Erwähnungen und Neuigkeiten zu dem, was du beobachtest.',
    markAll: 'Alle als gelesen markieren',
    marked: 'Alle Mitteilungen sind als gelesen markiert.',
    none: 'Nichts Neues. Wenn dir jemand antwortet, steht es hier.',
    unreadTag: 'Neu',
    kinds: {
      reply: (actor, thread) => `${actor} hat in „${thread}“ geantwortet`,
      mention: (actor, thread) => `${actor} hat dich in „${thread}“ erwähnt`,
      watched: (actor, thread) => `${actor} hat in „${thread}“ geschrieben, das du beobachtest`,
      status: (_actor, thread, extra) => `„${thread}“ hat jetzt den Status: ${extra}`,
      solved: (actor, thread) => `${actor} hat deine Antwort in „${thread}“ als Lösung markiert`,
      release: (_actor, thread, extra) => (extra ? `OutBrick ${extra} ist da: „${thread}“` : `Neue Version: „${thread}“`),
      moderation: (_actor, thread) => `Die Moderation hat bei deinem Beitrag in „${thread}“ eingegriffen. Die Details haben wir dir gemailt.`,
      welcome: () => 'Willkommen in der OutBrick-Community. Lies zuerst die Regeln und sag dann in Allgemeines Hallo.',
    },
  },
  profile: {
    title: (name) => name,
    joined: (when) => `Mitglied seit ${when}`,
    posts: pluralDe('Beitrag', 'Beiträge'),
    solved: (n, f) => (n === 1 ? '1 Lösung' : `${f} Lösungen`),
    recent: 'Neueste Themen',
    none: 'Noch keine Themen.',
    noBio: 'Noch kein Profiltext.',
  },
  mod: {
    title: 'Moderation',
    lede: 'Meldungen von Mitgliedern und erste Beiträge, die auf Freigabe warten. Jede Maßnahme hier wird protokolliert.',
    reports: 'Meldungen',
    queue: 'Wartet auf Freigabe',
    noReports: 'Keine offenen Meldungen.',
    noQueue: 'Nichts wartet auf Freigabe.',
    reportedBy: (name, reason) => `Gemeldet von ${name}: ${reason}`,
    inThread: (title) => `In „${title}“`,
    dismiss: 'Meldung verwerfen',
    hide: 'Beitrag ausblenden',
    approve: 'Beitrag freigeben',
    reasonLabel: 'Grund, geht per E-Mail an die Person',
    done: 'Erledigt.',
    forbidden: 'Nur die Moderation kann diese Seite sehen.',
    banHeading: 'Dieses Mitglied sperren',
    banLede: 'Ein gesperrtes Mitglied kann weiterhin lesen und seine E-Mail-Einstellungen ändern, aber nicht posten, antworten, reagieren oder abstimmen.',
    banDays: 'Tage',
    banReason: 'Grund, wird dem Mitglied angezeigt',
    banSubmit: 'Sperren',
    unban: 'Sperre aufheben',
    bannedUntil: (d) => `Gesperrt bis ${d}`,
    banDone: 'Das Mitglied ist gesperrt.',
    unbanDone: 'Die Sperre ist aufgehoben.',
  },
  errors: {
    signin_required: 'Melde dich dafür an.',
    forbidden: 'Das kannst du nicht tun.',
    not_found: 'Das haben wir nicht gefunden. Vielleicht wurde es gelöscht.',
    invalid: 'Einiges muss noch korrigiert werden.',
    rate_limited: 'Das ging schnell! Warte eine Minute und versuch es noch einmal.',
    too_fast: 'Das ging schnell. Warte einen Moment und sende es dann noch einmal: Dein Text ist noch da.',
    too_large: 'Das ist zu lang. Kürz es und versuch es noch einmal.',
    locked: 'Dieses Thema ist gesperrt.',
    banned: 'Dein Konto kann gerade nichts veröffentlichen.',
    unverified: 'Bestätige zuerst deine E-Mail-Adresse.',
    network: 'Die Community ist nicht erreichbar. Prüf deine Verbindung und versuch es noch einmal.',
    unavailable: 'Die Community macht kurz Pause. Versuch es gleich noch einmal.',
    unknown: 'Bei uns ist etwas schiefgegangen. Versuch es bitte noch einmal.',
    send_failed: "Die E-Mail ließ sich gerade nicht senden. Versuch es in einer Minute noch einmal.",
  },
  loading: 'Wird geladen …',
  signedIn: "Du bist angemeldet.",
  retry: 'Noch einmal versuchen',
  notFoundTitle: 'Seite nicht gefunden',
  notFoundLede: 'Unter dieser Adresse gibt es keine Community-Seite.',
  backHome: 'Zur Community-Startseite',
  supportCta: {
    heading: 'Frag die Community',
    text: 'In der OutBrick-Community beantworten Spielerinnen, Spieler und das OutBrick-Team Fragen, verfolgen Fehler und stimmen über Ideen ab.',
    ask: 'Die Community fragen',
    bug: 'Fehler melden',
  },
};

const pluralEs = (one: string, many: string): N => (n, f) => `${f} ${n === 1 ? one : many}`;

const es: CommunityCopy = {
  meta: {
    homeTitle: 'Comunidad de OutBrick: ayuda, errores e ideas',
    homeDescription: 'Pide ayuda con OutBrick, informa de un error, vota ideas y habla de tableros con otras personas. Pensada desde el principio para VoiceOver.',
    faqTitle: 'Preguntas frecuentes de la comunidad de OutBrick',
    faqDescription: 'Respuestas a lo que más se pregunta sobre OutBrick: vidas, deshacer, anuncios, compras, accesibilidad y las respuestas marcadas como solución.',
    guidelinesTitle: 'Normas de la comunidad de OutBrick: cómo hablamos',
    guidelinesDescription: 'Cómo funciona la comunidad de OutBrick: amabilidad, datos personales, informes de errores útiles, spoilers, moderación y apelaciones.',
    pageTitle: (page) => `${page} — Comunidad de OutBrick`,
    threadTitle: (title) => `${title} — Comunidad de OutBrick`,
  },
  name: 'Comunidad de OutBrick',
  eyebrow: 'Comunidad de OutBrick',
  skip: 'Ir al contenido',
  breadcrumb: 'Ruta de navegación',
  nav: {
    label: 'Comunidad',
    home: 'Inicio de la comunidad',
    search: 'Buscar',
    faq: 'Preguntas frecuentes',
    guidelines: 'Normas',
    notifications: 'Notificaciones',
    unread: (n, f) => (n === 1 ? '1 sin leer' : `${f} sin leer`),
    settings: 'Ajustes',
    signIn: 'Iniciar sesión',
    signOut: 'Cerrar sesión',
    moderation: 'Moderación',
    newThread: 'Abrir un tema',
    helpCentre: 'Centro de ayuda',
    signedInAs: (name) => `Sesión iniciada como ${name}`,
  },
  home: {
    title: 'Comunidad de OutBrick',
    lede: 'Pide una mano con un tablero, cuéntanos qué falla y vota lo que construiremos después. El equipo lee cada tema y responde en público.',
    points: [
      'Cada página funciona con VoiceOver, Control por voz, Control por botón y teclado.',
      'Por defecto ves los temas en tu idioma y en inglés; con un toque ves todos los idiomas.',
      'Tu correo electrónico nunca se muestra a nadie.',
    ],
    searchLabel: 'Buscar en la comunidad',
    searchButton: 'Buscar',
    categoriesHeading: 'Categorías',
    latestHeading: 'Últimos temas',
    startThread: 'Abrir un tema',
    allThreads: 'Ver todos los temas de esta categoría',
    readGuidelines: 'Leer las normas de la comunidad',
    noScript: 'El foro necesita JavaScript para mostrar los temas y publicar. Las categorías, las preguntas frecuentes y las normas funcionan sin él.',
  },
  categories: {
    announcements: { name: 'Anuncios', description: 'Cada versión de OutBrick, publicada en cuanto llega al App Store, y novedades del equipo.' },
    help: { name: 'Ayuda y soporte', description: 'Preguntas de «¿Cómo hago…?» sobre tableros, vidas, compras y ajustes. Marca la respuesta que lo resolvió.' },
    bugs: { name: 'Informes de errores', description: '¿Algo no funciona? Indica tu dispositivo, tus versiones de iOS y de la app y lo que pasó, y sigue su estado.' },
    ideas: { name: 'Ideas y opiniones', description: '¿Qué debería hacer OutBrick ahora? Propónlo, vota las ideas que quieras y mira lo que está previsto.' },
    accessibility: { name: 'Accesibilidad', description: 'VoiceOver, Control por voz, Control por botón, texto más grande y juego con daltonismo. El equipo sigue esta categoría más que ninguna.' },
    'show-and-tell': { name: 'Tus logros', description: 'Tableros de los que estás orgulloso, hitos del Viaje y capturas, con texto alternativo para todo el mundo.' },
    general: { name: 'Temas generales', description: 'Todo lo demás sobre OutBrick y los puzles en general.' },
  },
  categoryAside: 'Todas las categorías',
  stats: {
    threads: pluralEs('tema', 'temas'),
    posts: pluralEs('mensaje', 'mensajes'),
    replies: pluralEs('respuesta', 'respuestas'),
    views: pluralEs('visita', 'visitas'),
    votes: pluralEs('voto', 'votos'),
  },
  lastActivity: (when) => `Último mensaje ${when}`,
  noActivity: 'Aún no hay mensajes',
  category: {
    sortLabel: 'Ordenar temas',
    sorts: { latest: 'Actividad reciente', new: 'Más nuevos', top: 'Más votados', unanswered: 'Sin respuesta' },
    filters: 'Filtrar temas',
    language: 'Idioma',
    langMine: (language) => `${language} e inglés`,
    langAll: 'Todos los idiomas',
    status: 'Estado',
    statusAll: 'Cualquier estado',
    apply: 'Mostrar temas',
    teamOnly: 'Aquí solo el equipo de OutBrick abre temas. Todo el mundo puede responder.',
    empty: 'Aún no hay temas. ¡Abre el primero!',
    emptyFiltered: 'Ningún tema coincide con estos filtros. Prueba con todos los idiomas o cualquier estado.',
    showing: (from, to, total) => `Temas del ${from} al ${to} de ${total}`,
    pages: 'Páginas de temas',
  },
  follow: {
    legend: 'Avisarme por correo',
    watch: 'Seguir',
    watching: 'Siguiendo',
    mute: 'Silenciar',
    muted: 'Silenciado',
    watchCategory: (name) => `Seguir ${name}: recibir un correo por cada tema nuevo`,
    muteCategory: (name) => `Silenciar ${name} y ocultarla de los últimos temas`,
    watchThread: (title) => `Seguir «${title}»: recibir un correo por cada respuesta`,
    muteThread: (title) => `Silenciar «${title}»: ningún correo, ni aunque te respondan`,
    nowWatching: 'Lo estás siguiendo. Te escribiremos cuando haya mensajes nuevos.',
    nowMuted: 'Silenciado. No recibirás correos sobre esto.',
    nowNone: 'Ya no lo sigues ni lo tienes silenciado.',
  },
  list: {
    startedBy: (name, when) => `Abierto por ${name}, ${when}`,
    lastReply: (name, when) => `última respuesta de ${name}, ${when}`,
    unread: (n, f) => (n === 1 ? '1 mensaje nuevo' : `${f} mensajes nuevos`),
    pinned: 'Fijado',
    locked: 'Cerrado',
    solved: 'Resuelto',
    hidden: 'Oculto',
  },
  status: {
    new: 'Nuevo',
    confirmed: 'Confirmado',
    fixed: 'Corregido',
    released: 'Publicado',
    not_a_bug: 'No es un error',
    duplicate: 'Duplicado',
    open: 'Abierta',
    considering: 'En estudio',
    planned: 'Prevista',
    in_progress: 'En desarrollo',
    shipped: 'Disponible',
    declined: 'Descartada',
  },
  statusLabel: 'Estado',
  roles: { team: 'Equipo de OutBrick', moderator: 'Moderación', admin: 'Equipo de OutBrick', trusted: 'Miembro de confianza' },
  formerMember: 'Antiguo miembro',
  thread: {
    startedBy: (name, when) => `Abierto por ${name} el ${when}`,
    jumpSolution: 'Ir a la solución',
    jumpUnread: 'Ir al primer mensaje sin leer',
    bugHeading: 'Detalles del error',
    bug: { device: 'Dispositivo', osVersion: 'Versión de iOS o iPadOS', appVersion: 'Versión de OutBrick', assistive: 'Tecnología de apoyo', steps: 'Pasos para reproducirlo', expected: 'Qué debería pasar', actual: 'Qué pasó' },
    postsHeading: 'Mensajes',
    postHeading: (author, date) => `${author}, ${date}`,
    postNumber: (n) => `Mensaje ${n}`,
    solution: 'Solución',
    solutionBy: (name) => `Marcada como solución. Respuesta de ${name}.`,
    edited: (when) => `Editado ${when}`,
    hiddenPost: 'Un moderador ocultó este mensaje.',
    hiddenReason: (reason) => `Motivo: ${reason}`,
    pending: 'Pendiente de aprobación por la moderación. Solo tú y los moderadores podéis verlo.',
    replyTo: (n) => `En respuesta al mensaje ${n}`,
    pages: 'Páginas de este tema',
    page: (n) => `Página ${n}`,
    previous: 'Página anterior',
    next: 'Página siguiente',
    pageOf: (page, pages) => `Página ${page} de ${pages}`,
    upvote: 'Votar',
    upvoted: 'Votado',
    upvoteLabel: (title, votes, n, f) => `Votar «${title}», ${votes(n, f)}`,
    votes: pluralEs('voto', 'votos'),
    actions: {
      reply: 'Responder',
      replyLabel: (name) => `Responder a ${name}`,
      quote: 'Citar',
      quoteLabel: (name) => `Citar a ${name}`,
      edit: 'Editar',
      editLabel: (n) => `Editar el mensaje ${n}`,
      delete: 'Eliminar',
      deleteLabel: (n) => `Eliminar el mensaje ${n}`,
      report: 'Denunciar',
      reportLabel: (n, name) => `Denunciar el mensaje ${n} de ${name}`,
      solve: 'Marcar como solución',
      solveLabel: (n) => `Marcar el mensaje ${n} como solución`,
      unsolve: 'Quitar la solución',
      unsolveLabel: (n) => `Quitar el mensaje ${n} como solución`,
      save: 'Guardar cambios',
      cancel: 'Cancelar',
      confirmDelete: '¿Eliminar este mensaje? No se puede deshacer.',
      yesDelete: 'Sí, eliminarlo',
      share: 'Enlace a este mensaje',
    },
    report: {
      legend: '¿Por qué denuncias este mensaje?',
      reasons: { spam: 'Spam o publicidad', abuse: 'Desagradable u ofensivo', off_topic: 'Fuera de tema', personal_info: 'Comparte datos personales', other: 'Otra cosa' },
      note: 'Lo que la moderación debería saber',
      send: 'Enviar denuncia',
      sent: 'Gracias. Un moderador lo revisará.',
    },
    replyHeading: 'Tu respuesta',
    signInToReply: 'Inicia sesión para responder',
    signInToReplyNote: 'Cualquiera puede leer la comunidad. Para responder, inicia sesión con Apple, Google, Facebook o un enlace por correo.',
    blocked: {
      locked: 'Este tema está cerrado y no admite respuestas nuevas.',
      banned: 'Tu cuenta no puede publicar por ahora. El correo que te enviamos explica por qué y cómo apelar.',
      unverified: 'Confirma primero tu correo electrónico: te enviamos un enlace.',
      other: 'No puedes responder a este tema.',
    },
    replyPosted: 'Tu respuesta está publicada.',
    postSaved: 'Tus cambios están guardados.',
    postDeleted: 'El mensaje está eliminado.',
    solvedNow: 'Marcado como solución.',
    unsolvedNow: 'Ya no está marcado como solución.',
    reported: 'Gracias por avisar. Un moderador lo revisará.',
    voteSaved: (votes) => `Voto registrado. ${votes}.`,
    voteRemoved: (votes) => `Voto retirado. ${votes}.`,
    moderation: 'Moderación',
    modPin: 'Fijar el tema',
    modUnpin: 'Desfijar el tema',
    modLock: 'Cerrar el tema',
    modUnlock: 'Reabrir el tema',
    modHide: 'Ocultar el tema',
    modUnhide: 'Volver a mostrar el tema',
    modStatus: 'Estado',
    modStatusNote: 'Nota del estado',
    modStatusNoteHint: 'Se muestra junto al estado, por ejemplo «Corregido en la 5.1».',
    modNoStatus: 'Sin estado',
    modSave: 'Guardar estado',
    modSaved: 'Tema actualizado.',
    notFound: 'Tema no encontrado',
    notFoundNote: 'Puede que se haya eliminado o que al enlace le falte una parte. Busca en la comunidad o vuelve a las categorías.',
    readOnline: 'Leer y responder en la comunidad',
  },
  composer: {
    label: 'Tu mensaje',
    replyLabel: 'Tu respuesta',
    hint: 'Escribe en Markdown: una línea en blanco empieza un párrafo nuevo. Debajo tienes la ayuda de formato.',
    write: 'Escribir',
    preview: 'Vista previa',
    tabsLabel: 'Escribir o ver la vista previa',
    previewEmpty: 'Aún no hay nada que mostrar.',
    previewLoading: 'Preparando la vista previa…',
    previewHeading: 'Así se verá tu mensaje',
    help: 'Ayuda de formato',
    helpItems: [
      ['**negrita**', 'texto en negrita'],
      ['*cursiva*', 'texto en cursiva'],
      ['# Título', 'un título (## y ### para títulos más pequeños)'],
      ['- elemento', 'una lista con viñetas; 1. para una numerada'],
      ['> cita', 'una cita'],
      ['[texto](https://…)', 'un enlace'],
      ['`código`', 'código, como un número de nivel o el nombre de un ajuste'],
    ],
    count: (used, max) => `${used} de ${max} caracteres`,
    left: (n, f) => (n === 1 ? 'Queda 1 carácter' : `Quedan ${f} caracteres`),
    over: (n, f) => (n === 1 ? 'Sobra 1 carácter' : `Sobran ${f} caracteres`),
    submitReply: 'Publicar respuesta',
    sending: 'Publicando…',
    replyingTo: (n) => `Respondiendo al mensaje ${n}.`,
    clearReply: 'Responder al tema en su lugar',
  },
  newThread: {
    title: 'Abrir un tema',
    lede: 'Un asunto por tema, con un título que diga de qué trata. Busca primero: puede que alguien ya lo haya preguntado.',
    category: 'Categoría',
    chooseCategory: 'Elige una categoría',
    titleLabel: 'Título',
    titleHint: 'Una frase corta, por ejemplo «Nivel 214: ¿cómo paso la puerta helada?». De 4 a 140 caracteres.',
    language: 'Idioma de tu mensaje',
    languageHint: 'Para que lo encuentre quien lee ese idioma. Las listas muestran tu idioma y el inglés por defecto.',
    body: 'Tu mensaje',
    bodyBug: 'Resumen',
    bugLegend: 'Sobre el error',
    device: 'Dispositivo',
    deviceHint: 'Por ejemplo iPhone 15 Pro, iPad Air (5.ª generación) o Apple Watch Series 9. Ajustes › General › Información › Nombre del modelo.',
    osVersion: 'Versión de iOS, iPadOS u otro sistema',
    osVersionHint: 'Ajustes › General › Información › Versión de iOS, por ejemplo 27.1.',
    appVersion: 'Versión de OutBrick',
    appVersionHint: 'En la pantalla de inicio, toca tu avatar para abrir tu perfil: la versión aparece abajo del todo, por ejemplo 5.1.1 (68). En el juego, Ajustes › Informar de un error la rellena por ti.',
    assistive: 'Tecnología de apoyo en uso',
    assistiveHint: 'Marca todo lo que estaba activado cuando ocurrió.',
    at: { voiceover: 'VoiceOver', voice_control: 'Control por voz', switch_control: 'Control por botón', zoom: 'Zoom', larger_text: 'Texto más grande', colour_filters: 'Filtros de color', none: 'Ninguna' },
    steps: 'Pasos para reproducirlo',
    stepsHint: 'Pasos numerados desde que abres la app, por ejemplo: 1. Abrir el nivel 214. 2. Deslizar el ladrillo rojo a la izquierda.',
    expected: 'Qué debería pasar',
    actual: 'Qué pasó en su lugar',
    submit: 'Publicar tema',
    posted: 'Tu tema está publicado.',
    signIn: 'Inicia sesión para abrir un tema',
    teamOnly: 'Solo el equipo de OutBrick puede abrir temas en Anuncios.',
  },
  form: {
    problem: 'Hay un problema',
    problemCount: (n, f) => (n === 1 ? 'Corrige 1 cosa para continuar:' : `Corrige ${f} cosas para continuar:`),
    required: 'Todos los campos son obligatorios salvo que digan opcional.',
    optional: 'opcional',
    honeypot: 'Deja este campo vacío',
    fields: {
      title: 'Título',
      body: 'Mensaje',
      categorySlug: 'Categoría',
      language: 'Idioma',
      device: 'Dispositivo',
      osVersion: 'Versión del sistema',
      appVersion: 'Versión de OutBrick',
      assistive: 'Tecnología de apoyo',
      steps: 'Pasos para reproducirlo',
      expected: 'Qué debería pasar',
      actual: 'Qué pasó',
      email: 'Correo electrónico',
      displayName: 'Nombre visible',
      bio: 'Sobre ti',
      confirm: 'Confirmación',
      reason: 'Motivo',
    },
    codes: {
      required: (field) => `${field}: rellena este campo`,
      too_short: (field) => `${field}: es demasiado corto`,
      too_long: (field) => `${field}: es demasiado largo`,
      invalid: (field) => `${field}: revisa este campo`,
      taken: (field) => `${field}: ya está en uso, elige otro`,
      email: () => 'Escribe un correo como nombre@ejemplo.es',
      choose: (field) => `${field}: elige una opción`,
      mismatch: () => 'Escribe DELETE en mayúsculas para confirmar',
      no_email: (f) => `${f}: no puede ser un correo electrónico`,
      no_links: (f) => `${f}: no puede contener enlaces`,
      reserved: (f) => `${f}: está reservado, elige otro`,
    },
  },
  search: {
    title: 'Buscar en la comunidad',
    lede: 'Busca en temas, respuestas y preguntas frecuentes en todos los idiomas.',
    label: 'Buscar',
    button: 'Buscar',
    category: 'En la categoría',
    allCategories: 'Todas las categorías',
    results: (n, f) => (n === 1 ? '1 resultado' : `${f} resultados`),
    none: (q) => `No hay nada para «${q}». Prueba con menos palabras o con otras, o pregunta en Ayuda y soporte.`,
    prompt: 'Escribe una o dos palabras, como «deshacer», «VoiceOver» o un número de nivel.',
    kinds: { thread: 'Tema', post: 'Respuesta', faq: 'Pregunta frecuente' },
    inThread: (title) => `En «${title}»`,
  },
  faq: {
    title: 'Preguntas frecuentes',
    lede: 'Respuestas rápidas sobre OutBrick, de la página de soporte y de temas cuya mejor respuesta eligió el equipo.',
    community: 'De la comunidad',
    support: 'Del soporte de OutBrick',
    supportLink: 'Leer toda la página de soporte',
    fromThread: 'Leer el tema',
    none: 'Aún no se han añadido respuestas de la comunidad.',
  },
  guidelines: {
    title: 'Normas de la comunidad',
    lede: 'La comunidad de OutBrick es un lugar tranquilo para encontrar ayuda y dar forma al juego. Estas pocas normas la mantienen así.',
    updated: 'Actualizado el 7 de octubre de 2026',
    privacy: 'La política de privacidad',
    contact: 'Contactar con el equipo',
    sections: [
      {
        heading: 'Sé amable',
        paragraphs: ['Aquí cada persona juega a su manera: con VoiceOver, con Control por botón, con una mano, en un segundo idioma o por primera vez. Responde a lo que se preguntó, presupón buena fe y discrepa de las ideas, nunca de las personas.'],
        points: ['Nada de insultos, acoso, odio ni amenazas.', 'Nada de amontonarse: si alguien ya tiene respuesta, vota en lugar de repetirla.', 'No te burles de ninguna pregunta. Todo experto la hizo alguna vez.'],
      },
      {
        heading: 'Los datos personales, en privado',
        paragraphs: ['Nunca publiques tu correo ni el de nadie, números de teléfono, direcciones, cuentas de Apple, accesos a Game Center, recibos de compra ni datos de pago. Nunca los necesitamos en público, y el equipo jamás te los pedirá aquí.', 'Una captura puede mostrar más de lo que pretendes: revisa nombres y notificaciones antes de publicarla.'],
      },
      {
        heading: 'Informes de errores que ayudan',
        paragraphs: ['Un buen informe nos permite ver el error en nuestro propio dispositivo. El formulario pide justo lo que necesitamos.'],
        points: ['Tu dispositivo, su versión de iOS o iPadOS y la versión de OutBrick.', 'Si VoiceOver, Control por voz, Control por botón, Zoom u otro ajuste estaba activado.', 'Pasos numerados desde que abres la app, qué esperabas y qué pasó.', 'Un error por tema. Busca primero y añade información a un informe existente antes que abrir un duplicado.'],
      },
      {
        heading: 'Cuidado con los spoilers',
        paragraphs: ["A algunas personas les encanta resolver un tablero por su cuenta. Empieza los mensajes que desvelan una solución o una sorpresa del final del Viaje con «Spoiler:» y el nivel del que hablan, para que se puedan saltar, y deja la respuesta fuera del título."],
      },
      {
        heading: 'Sin salirse del tema, en cualquier idioma',
        paragraphs: ['Publica en la categoría adecuada y mantén cada tema en su asunto. Escribe en el idioma que te resulte más fácil e indícalo en tu mensaje, para que lo encuentre quien lo lee. Sin publicidad, enlaces de referidos ni enlaces a copias no oficiales del juego.'],
      },
      {
        heading: 'Moderación y apelaciones',
        paragraphs: ['Los moderadores y el equipo de OutBrick pueden cambiar un título, mover un tema, ocultar un mensaje, cerrar un tema o suspender una cuenta cuando no se cumplen estas normas. Cada acción queda registrada. Si se oculta uno de tus mensajes, te escribimos con el motivo.', 'Si crees que nos equivocamos, responde a ese correo o usa el formulario de contacto en un plazo de 30 días, y alguien que no participó en la decisión volverá a revisarlo.'],
        points: ['Denuncia un mensaje con su botón Denunciar. Las denuncias son privadas.', 'Los primeros mensajes con enlaces de quien acaba de llegar esperan a la moderación antes de aparecer.'],
      },
      {
        heading: 'Tu cuenta y tus datos',
        paragraphs: ['Solo tu nombre visible es público. Puedes descargar todo lo que guardamos sobre ti, o eliminar tu cuenta, cuando quieras desde Ajustes. Al eliminarla desaparece tu perfil; tus mensajes se quedan, firmados como «Antiguo miembro», para que los temas sigan teniendo sentido. La política de privacidad explica qué se guarda y por qué.'],
      },
    ],
  },
  signin: {
    title: 'Iniciar sesión en la comunidad de OutBrick',
    lede: 'Leer está abierto a todo el mundo. Inicia sesión para publicar, responder, votar y seguir temas. No hay contraseña que recordar.',
    providersHeading: 'Inicia sesión con una cuenta que ya tienes',
    apple: 'Iniciar sesión con Apple',
    google: 'Iniciar sesión con Google',
    facebook: 'Continuar con Facebook',
    shares: {
      apple: 'Apple comparte un correo electrónico, que puede ser una dirección de reenvío privada si eliges Ocultar mi correo, y tu nombre solo si lo permites.',
      google: 'Google comparte tu nombre y tu correo electrónico. Guardamos el correo para iniciar tu sesión y nunca lo mostramos.',
      facebook: 'Facebook comparte tu nombre y tu correo electrónico. Nunca publicamos nada en Facebook.',
      email: 'Te enviamos un enlace de un solo uso que inicia tu sesión durante 30 días en este navegador. Usamos el correo solo para eso y para los mensajes que elijas.',
    },
    or: 'O',
    emailHeading: 'Inicia sesión con un enlace por correo',
    email: 'Correo electrónico',
    emailHint: 'Te enviaremos un enlace que funciona una vez, durante 20 minutos.',
    emailButton: 'Enviarme un enlace de acceso',
    sent: 'Revisa tu correo',
    sentNote: 'Si esa dirección puede iniciar sesión, el enlace va de camino. Funciona una vez, durante 20 minutos. Puedes cerrar esta página.',
    errors: {
      used: 'Este enlace de acceso ya se ha usado. Cada enlace inicia sesión una sola vez en un navegador. Pide uno nuevo abajo para entrar en este dispositivo.',
      expired: 'Ese enlace de acceso ha caducado. Los enlaces duran 20 minutos: pide uno nuevo aquí abajo.',
      invalid: 'Ese enlace de acceso no ha funcionado. Puede que ya se usara. Pide uno nuevo aquí abajo.',
      failed: 'El inicio de sesión no terminó por un problema del otro lado. Vuelve a intentarlo o usa un enlace por correo.',
      denied: 'Se canceló el inicio de sesión. No se ha compartido nada. Puedes volver a intentarlo cuando quieras.',
      unavailable: "Esa forma de iniciar sesión no está disponible ahora. Usa un enlace por correo o inténtalo más tarde.",
      email_taken: "Ese correo ya pertenece a otra cuenta. Inicia sesión como lo hiciste la primera vez.",
    },
    already: (name) => `Ya has iniciado sesión como ${name}.`,
    privacy: 'Cómo tratamos tus datos está en la política de privacidad y en las normas de la comunidad.',
    noProviders: 'El inicio de sesión con otras cuentas aún no está activado. Usa un enlace por correo.',
  },
  welcome: {
    title: 'Elige tu nombre visible',
    lede: 'Es el único nombre que ven los demás miembros. Puedes cambiarlo más tarde en Ajustes.',
    name: 'Nombre visible',
    nameHint: 'De 3 a 30 caracteres: letras, números, espacios, puntos, guiones y guiones bajos. No tu correo electrónico.',
    save: 'Guardar y continuar',
    saved: 'Te damos la bienvenida a la comunidad de OutBrick.',
  },
  settings: {
    title: 'Ajustes',
    lede: 'Tu perfil, tus correos y tus datos. Los cambios se guardan con el botón de cada sección.',
    profile: 'Perfil',
    displayName: 'Nombre visible',
    displayNameHint: 'El único nombre que ven los demás miembros.',
    bio: 'Sobre ti',
    bioHint: 'Hasta 300 caracteres. Aparece en tu perfil.',
    language: 'Idioma de los correos y de la comunidad',
    languageHint: 'Las listas muestran los temas en este idioma y en inglés por defecto.',
    saveProfile: 'Guardar perfil',
    profileSaved: 'Perfil guardado.',
    emails: 'Correos',
    emailsLede: (address) => `Escribimos a ${address}. Cada correo incluye además un enlace para darte de baja con un clic.`,
    emailKinds: {
      reply: ['Respuestas', 'Alguien responde a tu tema o a uno de tus mensajes.'],
      mention: ['Menciones', 'Alguien escribe @ y tu nombre visible.'],
      watched: ['Temas y categorías que sigues', 'Mensajes nuevos en lo que sigues.'],
      status: ['Cambios de estado', 'Tu error o tu idea cambia de estado, por ejemplo «Corregido en la 5.1».'],
      solved: ['Soluciones', 'Tu respuesta se marca como solución.'],
      release: ['Versiones nuevas', 'Sale una versión nueva de OutBrick (desde Anuncios).'],
      moderation: ['Avisos de moderación', 'Un moderador ocultó uno de tus mensajes, con el motivo. Te recomendamos dejarlo activado.'],
    },
    saveEmails: 'Guardar preferencias de correo',
    emailsSaved: 'Preferencias de correo guardadas.',
    address: "Correo electrónico",
    addressHint: "Nunca se muestra a nadie. Una dirección nueva sustituye a la anterior cuando la confirmas desde el correo que te enviamos.",
    addressNeeded: "Añade un correo electrónico para publicar. Necesitamos una dirección confirmada para enviarte respuestas y enlaces de acceso.",
    saveAddress: "Cambiar el correo electrónico",
    addressSent: (a) => `Hemos enviado un enlace de confirmación a ${a}. La dirección cambiará cuando lo abras.`,
    addressConfirmed: "Tu correo electrónico está confirmado.",
    accounts: 'Cómo inicias sesión',
    accountsLede: 'Puedes iniciar sesión con cualquiera de estas. Para añadir otra, cierra sesión y vuelve a entrar con ella usando el mismo correo.',
    providerNames: { apple: 'Apple', google: 'Google', facebook: 'Facebook', email: 'Enlace por correo' },
    data: 'Tus datos',
    dataLede: 'Descarga todo lo que guardamos sobre ti: perfil, mensajes, votos, seguimientos y preferencias de correo, en un archivo JSON.',
    export: 'Descargar mis datos',
    exportEmail: 'Enviarme un enlace de descarga',
    exportEmailSent: 'Revisa tu bandeja de entrada: el enlace funciona durante 24 horas.',
    signOut: 'Cerrar sesión',
    signedOut: 'Has cerrado sesión.',
    deleteHeading: 'Eliminar mi cuenta',
    deleteLede: 'Esto elimina tu perfil, tus formas de iniciar sesión, tus seguimientos y tu correo. Tus mensajes se quedan, firmados como «Antiguo miembro», para que los temas sigan teniendo sentido. No se puede deshacer.',
    deleteConfirm: 'Escribe DELETE para confirmar',
    deleteHint: 'En mayúsculas, para que no pase por accidente.',
    deleteButton: 'Eliminar mi cuenta',
    deleted: 'Tu cuenta está eliminada. Gracias por formar parte de la comunidad.',
    banned: 'Tu cuenta está suspendida: puedes leer, pero no publicar. El correo que te enviamos explica por qué y cómo apelar.',
  },
  notifications: {
    title: 'Notificaciones',
    lede: 'Respuestas, menciones y novedades de lo que sigues.',
    markAll: 'Marcar todo como leído',
    marked: 'Todas las notificaciones están marcadas como leídas.',
    none: 'Nada nuevo. Cuando alguien te responda, aparecerá aquí.',
    unreadTag: 'Nueva',
    kinds: {
      reply: (actor, thread) => `${actor} respondió en «${thread}»`,
      mention: (actor, thread) => `${actor} te mencionó en «${thread}»`,
      watched: (actor, thread) => `${actor} publicó en «${thread}», que sigues`,
      status: (_actor, thread, extra) => `«${thread}» ahora está: ${extra}`,
      solved: (actor, thread) => `${actor} marcó tu respuesta en «${thread}» como solución`,
      release: (_actor, thread, extra) => (extra ? `Ya está aquí OutBrick ${extra}: «${thread}»` : `Versión nueva: «${thread}»`),
      moderation: (_actor, thread) => `Un moderador actuó sobre tu mensaje en «${thread}». Te enviamos los detalles por correo.`,
      welcome: () => 'Te damos la bienvenida a la comunidad de OutBrick. Empieza por las normas y luego saluda en Temas generales.',
    },
  },
  profile: {
    title: (name) => name,
    joined: (when) => `Miembro desde el ${when}`,
    posts: pluralEs('mensaje', 'mensajes'),
    solved: (n, f) => (n === 1 ? '1 solución' : `${f} soluciones`),
    recent: 'Temas recientes',
    none: 'Aún no hay temas.',
    noBio: 'Aún no hay texto de perfil.',
  },
  mod: {
    title: 'Moderación',
    lede: 'Denuncias de los miembros y primeros mensajes pendientes de aprobación. Cada acción aquí queda registrada.',
    reports: 'Denuncias',
    queue: 'Pendientes de aprobación',
    noReports: 'No hay denuncias abiertas.',
    noQueue: 'No hay nada pendiente de aprobación.',
    reportedBy: (name, reason) => `Denunciado por ${name}: ${reason}`,
    inThread: (title) => `En «${title}»`,
    dismiss: 'Descartar la denuncia',
    hide: 'Ocultar el mensaje',
    approve: 'Aprobar el mensaje',
    reasonLabel: 'Motivo, se envía por correo a quien lo escribió',
    done: 'Hecho.',
    forbidden: 'Solo los moderadores pueden ver esta página.',
    banHeading: 'Suspender a este miembro',
    banLede: 'Un miembro suspendido puede seguir leyendo y cambiar sus ajustes de correo, pero no puede publicar, responder, reaccionar ni votar.',
    banDays: 'Días',
    banReason: 'Motivo, visible para el miembro',
    banSubmit: 'Suspender',
    unban: 'Levantar la suspensión',
    bannedUntil: (d) => `Suspendido hasta el ${d}`,
    banDone: 'El miembro está suspendido.',
    unbanDone: 'La suspensión se ha levantado.',
  },
  errors: {
    signin_required: 'Inicia sesión para hacer eso.',
    forbidden: 'No puedes hacer eso.',
    not_found: 'No lo encontramos. Puede que se haya eliminado.',
    invalid: 'Hay algo que corregir.',
    rate_limited: '¡Qué rapidez! Espera un minuto y vuelve a intentarlo.',
    too_fast: '¡Qué rapidez! Espera un momento y vuelve a enviarlo: tu texto sigue aquí.',
    too_large: 'Es demasiado largo. Acórtalo y vuelve a intentarlo.',
    locked: 'Este tema está cerrado.',
    banned: 'Tu cuenta no puede publicar por ahora.',
    unverified: 'Confirma primero tu correo electrónico.',
    network: 'No pudimos conectar con la comunidad. Revisa tu conexión y vuelve a intentarlo.',
    unavailable: 'La comunidad está descansando un momento. Vuelve a intentarlo enseguida.',
    unknown: 'Algo falló por nuestra parte. Vuelve a intentarlo.',
    send_failed: "No pudimos enviar el correo ahora mismo. Vuelve a intentarlo en un minuto.",
  },
  loading: 'Cargando…',
  signedIn: "Has iniciado sesión.",
  retry: 'Volver a intentarlo',
  notFoundTitle: 'Página no encontrada',
  notFoundLede: 'No hay ninguna página de la comunidad en esta dirección.',
  backHome: 'Ir al inicio de la comunidad',
  supportCta: {
    heading: 'Pregunta a la comunidad',
    text: 'En la comunidad de OutBrick, jugadores y el equipo de OutBrick responden preguntas, siguen errores y votan ideas.',
    ask: 'Preguntar a la comunidad',
    bug: 'Informar de un error',
  },
};

const countJa = (unit: string): N => (_n, f) => `${f}${unit}`;

const ja: CommunityCopy = {
  meta: {
    homeTitle: 'OutBrickコミュニティ：ヘルプ・不具合報告・アイデア',
    homeDescription: 'OutBrickの質問、不具合の報告、アイデアへの投票、ステージの話題。VoiceOverで使いやすいことを最優先に作りました。',
    faqTitle: 'OutBrickコミュニティのよくある質問',
    faqDescription: 'ライフ、元に戻す、広告、購入、アクセシビリティなど、OutBrickでよくある質問への答えと、解決済みになった回答です。',
    guidelinesTitle: 'OutBrickコミュニティのガイドライン',
    guidelinesDescription: 'OutBrickコミュニティの約束ごと：思いやり、個人情報の保護、役立つ不具合報告、ネタバレ、モデレーションと異議申し立て。',
    pageTitle: (page) => `${page} — OutBrickコミュニティ`,
    threadTitle: (title) => `${title} — OutBrickコミュニティ`,
  },
  name: 'OutBrickコミュニティ',
  eyebrow: 'OutBrickコミュニティ',
  skip: '本文へ移動',
  breadcrumb: 'パンくずリスト',
  nav: {
    label: 'コミュニティ',
    home: 'コミュニティのホーム',
    search: '検索',
    faq: 'よくある質問',
    guidelines: 'ガイドライン',
    notifications: 'お知らせ',
    unread: (_n, f) => `未読${f}件`,
    settings: '設定',
    signIn: 'サインイン',
    signOut: 'サインアウト',
    moderation: 'モデレーション',
    newThread: 'スレッドを作成',
    helpCentre: 'ヘルプセンター',
    signedInAs: (name) => `${name}としてサインイン中`,
  },
  home: {
    title: 'OutBrickコミュニティ',
    lede: 'ステージで困ったら質問し、不具合があれば教えてください。次に作るものへの投票もできます。チームはすべてのスレッドを読み、公開の場で返信します。',
    points: [
      'すべてのページがVoiceOver、音声コントロール、スイッチコントロール、キーボードで使えます。',
      '最初はあなたの言語と英語のスレッドを表示します。タップひとつで全言語に切り替えられます。',
      'メールアドレスが誰かに表示されることはありません。',
    ],
    searchLabel: 'コミュニティを検索',
    searchButton: '検索',
    categoriesHeading: 'カテゴリ',
    latestHeading: '最新のスレッド',
    startThread: 'スレッドを作成',
    allThreads: 'このカテゴリのスレッドをすべて見る',
    readGuidelines: 'コミュニティのガイドラインを読む',
    noScript: 'スレッドの表示と投稿にはJavaScriptが必要です。カテゴリ、よくある質問、ガイドラインはJavaScriptなしでも読めます。',
  },
  categories: {
    announcements: { name: 'お知らせ', description: 'OutBrickの新しいバージョンをApp Storeでの公開と同時にお知らせします。チームからのニュースもここに。' },
    help: { name: 'ヘルプとサポート', description: 'ステージ、ライフ、購入、設定についての「どうすれば？」という質問。解決した回答に印を付けてください。' },
    bugs: { name: '不具合の報告', description: 'うまく動かないときは、デバイス、iOSとアプリのバージョン、起きたことを書いて、対応状況を確認できます。' },
    ideas: { name: 'アイデアとご意見', description: 'OutBrickに次は何をしてほしいですか。提案して、欲しいアイデアに投票し、予定を確認できます。' },
    accessibility: { name: 'アクセシビリティ', description: 'VoiceOver、音声コントロール、スイッチコントロール、さらに大きな文字、色覚に配慮した遊び方。チームが最も注意して見ているカテゴリです。' },
    'show-and-tell': { name: '見せて語ろう', description: '自慢のクリア、旅の節目、スクリーンショットを、誰もが読める代替テキスト付きで。' },
    general: { name: '雑談', description: 'OutBrickやパズル全般について、そのほかの話題。' },
  },
  categoryAside: 'すべてのカテゴリ',
  stats: {
    threads: countJa('スレッド'),
    posts: countJa('件の投稿'),
    replies: countJa('件の返信'),
    views: countJa('回表示'),
    votes: countJa('票'),
  },
  lastActivity: (when) => `最終投稿：${when}`,
  noActivity: 'まだ投稿はありません',
  category: {
    sortLabel: 'スレッドの並べ替え',
    sorts: { latest: '最近の動き', new: '新着順', top: '投票の多い順', unanswered: '未回答' },
    filters: 'スレッドの絞り込み',
    language: '言語',
    langMine: (language) => `${language}と英語`,
    langAll: 'すべての言語',
    status: '対応状況',
    statusAll: 'すべての状況',
    apply: 'スレッドを表示',
    teamOnly: 'ここではOutBrickチームだけがスレッドを作成します。返信はどなたでもできます。',
    empty: 'まだスレッドはありません。最初のスレッドを作ってみませんか。',
    emptyFiltered: 'この条件に合うスレッドはありません。すべての言語やすべての状況でお試しください。',
    showing: (from, to, total) => `全${total}件中${from}〜${to}件目のスレッド`,
    pages: 'スレッド一覧のページ',
  },
  follow: {
    legend: 'メールで通知',
    watch: 'ウォッチ',
    watching: 'ウォッチ中',
    mute: 'ミュート',
    muted: 'ミュート中',
    watchCategory: (name) => `${name}をウォッチ：新しいスレッドのたびにメールで通知`,
    muteCategory: (name) => `${name}をミュートして最新のスレッドに表示しない`,
    watchThread: (title) => `「${title}」をウォッチ：返信のたびにメールで通知`,
    muteThread: (title) => `「${title}」をミュート：自分への返信でもメールを送らない`,
    nowWatching: 'ウォッチしています。新しい投稿があればメールでお知らせします。',
    nowMuted: 'ミュートしました。これに関するメールは届きません。',
    nowNone: 'ウォッチもミュートも解除しました。',
  },
  list: {
    startedBy: (name, when) => `${name}さんが作成、${when}`,
    lastReply: (name, when) => `最後の返信は${name}さん、${when}`,
    unread: (_n, f) => `新しい投稿${f}件`,
    pinned: 'ピン留め',
    locked: 'ロック中',
    solved: '解決済み',
    hidden: '非表示',
  },
  status: {
    new: '新規',
    confirmed: '確認済み',
    fixed: '修正済み',
    released: '公開済み',
    not_a_bug: '不具合ではありません',
    duplicate: '重複',
    open: '受付中',
    considering: '検討中',
    planned: '予定あり',
    in_progress: '開発中',
    shipped: '実装済み',
    declined: '見送り',
  },
  statusLabel: '対応状況',
  roles: { team: 'OutBrickチーム', moderator: 'モデレーター', admin: 'OutBrickチーム', trusted: '信頼されたメンバー' },
  formerMember: '退会したメンバー',
  thread: {
    startedBy: (name, when) => `${name}さんが${when}に作成`,
    jumpSolution: '解決した回答へ移動',
    jumpUnread: '最初の未読の投稿へ移動',
    bugHeading: '不具合の詳細',
    bug: { device: 'デバイス', osVersion: 'iOSまたはiPadOSのバージョン', appVersion: 'OutBrickのバージョン', assistive: '使用中の支援技術', steps: '再現する手順', expected: '本来の動作', actual: '実際に起きたこと' },
    postsHeading: '投稿',
    postHeading: (author, date) => `${author}、${date}`,
    postNumber: (n) => `投稿${n}`,
    solution: '解決した回答',
    solutionBy: (name) => `解決した回答に選ばれました。回答者：${name}さん。`,
    edited: (when) => `${when}に編集`,
    hiddenPost: 'この投稿はモデレーターによって非表示になりました。',
    hiddenReason: (reason) => `理由：${reason}`,
    pending: 'モデレーターの承認待ちです。あなたとモデレーターだけが見られます。',
    replyTo: (n) => `投稿${n}への返信`,
    pages: 'このスレッドのページ',
    page: (n) => `${n}ページ`,
    previous: '前のページ',
    next: '次のページ',
    pageOf: (page, pages) => `${pages}ページ中${page}ページ目`,
    upvote: '投票する',
    upvoted: '投票済み',
    upvoteLabel: (title, votes, n, f) => `投票する：「${title}」、${votes(n, f)}`,
    votes: countJa('票'),
    actions: {
      reply: '返信',
      replyLabel: (name) => `返信：${name}さんへ`,
      quote: '引用',
      quoteLabel: (name) => `引用：${name}さんの投稿`,
      edit: '編集',
      editLabel: (n) => `編集：投稿${n}`,
      delete: '削除',
      deleteLabel: (n) => `削除：投稿${n}`,
      report: '報告',
      reportLabel: (n, name) => `報告：${name}さんの投稿${n}`,
      solve: '解決した回答にする',
      solveLabel: (n) => `解決した回答にする：投稿${n}`,
      unsolve: '解決した回答から外す',
      unsolveLabel: (n) => `解決した回答から外す：投稿${n}`,
      save: '変更を保存',
      cancel: 'キャンセル',
      confirmDelete: 'この投稿を削除しますか？元に戻せません。',
      yesDelete: '削除する',
      share: 'この投稿へのリンク',
    },
    report: {
      legend: 'この投稿を報告する理由',
      reasons: { spam: 'スパムや宣伝', abuse: '不親切、または攻撃的', off_topic: '話題から外れている', personal_info: '個人情報が含まれている', other: 'その他' },
      note: 'モデレーターに伝えたいこと',
      send: '報告を送信',
      sent: 'ありがとうございます。モデレーターが確認します。',
    },
    replyHeading: 'あなたの返信',
    signInToReply: 'サインインして返信',
    signInToReplyNote: 'コミュニティはどなたでも読めます。返信するには、Apple、Google、Facebook、またはメールのリンクでサインインしてください。',
    blocked: {
      locked: 'このスレッドはロックされているため、新しい返信はできません。',
      banned: '現在、このアカウントでは投稿できません。理由と異議申し立ての方法はお送りしたメールに書いてあります。',
      unverified: '先にメールアドレスを確認してください。リンクをお送りしました。',
      other: 'このスレッドには返信できません。',
    },
    replyPosted: '返信を投稿しました。',
    postSaved: '変更を保存しました。',
    postDeleted: '投稿を削除しました。',
    solvedNow: '解決した回答にしました。',
    unsolvedNow: '解決した回答から外しました。',
    reported: '報告ありがとうございます。モデレーターが確認します。',
    voteSaved: (votes) => `投票しました。${votes}。`,
    voteRemoved: (votes) => `投票を取り消しました。${votes}。`,
    moderation: 'モデレーション',
    modPin: 'スレッドをピン留め',
    modUnpin: 'ピン留めを外す',
    modLock: 'スレッドをロック',
    modUnlock: 'ロックを解除',
    modHide: 'スレッドを非表示',
    modUnhide: 'スレッドを再表示',
    modStatus: '対応状況',
    modStatusNote: '状況のメモ',
    modStatusNoteHint: '対応状況の横に表示されます。例：「5.1で修正」。',
    modNoStatus: '状況なし',
    modSave: '対応状況を保存',
    modSaved: 'スレッドを更新しました。',
    notFound: 'スレッドが見つかりません',
    notFoundNote: '削除されたか、リンクの一部が欠けている可能性があります。コミュニティを検索するか、カテゴリに戻ってください。',
    readOnline: 'コミュニティで読んで返信する',
  },
  composer: {
    label: 'あなたの投稿',
    replyLabel: 'あなたの返信',
    hint: 'Markdownで書けます。空行で新しい段落になります。書式のヘルプは下にあります。',
    write: '書く',
    preview: 'プレビュー',
    tabsLabel: '書く、またはプレビュー',
    previewEmpty: 'まだプレビューする内容がありません。',
    previewLoading: 'プレビューを準備しています…',
    previewHeading: '投稿したときの見え方',
    help: '書式のヘルプ',
    helpItems: [
      ['**太字**', '太字のテキスト'],
      ['*斜体*', '斜体のテキスト'],
      ['# 見出し', '見出し（小さい見出しは##や###）'],
      ['- 項目', '箇条書き。番号付きリストは1.'],
      ['> 引用', '引用'],
      ['[文字](https://…)', 'リンク'],
      ['`コード`', 'レベル番号や設定名などのコード'],
    ],
    count: (used, max) => `${max}文字中${used}文字`,
    left: (_n, f) => `残り${f}文字`,
    over: (_n, f) => `${f}文字オーバー`,
    submitReply: '返信を投稿',
    sending: '投稿しています…',
    replyingTo: (n) => `投稿${n}に返信しています。`,
    clearReply: 'スレッド全体に返信する',
  },
  newThread: {
    title: 'スレッドを作成',
    lede: '1つのスレッドに1つの話題を。内容がわかるタイトルを付けてください。まず検索すると、すでに同じ質問があるかもしれません。',
    category: 'カテゴリ',
    chooseCategory: 'カテゴリを選んでください',
    titleLabel: 'タイトル',
    titleHint: '短い一文で。例：「レベル214：凍ったゲートを抜ける方法は？」4〜140文字。',
    language: '投稿の言語',
    languageHint: 'その言語を読む人が見つけやすくなります。一覧には最初、あなたの言語と英語が表示されます。',
    body: 'あなたの投稿',
    bodyBug: '概要',
    bugLegend: '不具合について',
    device: 'デバイス',
    deviceHint: '例：iPhone 15 Pro、iPad Air（第5世代）、Apple Watch Series 9。設定 › 一般 › 情報 › 機種名で確認できます。',
    osVersion: 'iOS、iPadOS、またはほかのシステムのバージョン',
    osVersionHint: '設定 › 一般 › 情報 › iOSバージョン。例：27.1。',
    appVersion: 'OutBrickのバージョン',
    appVersionHint: 'ホーム画面で自分のアバターをタップしてプロフィールを開くと、いちばん下にバージョンが表示されます（例：5.1.1 (68)）。ゲームの設定 › 不具合を報告から開くと、自動で入力されます。',
    assistive: '使用していた支援技術',
    assistiveHint: '起きたときにオンだったものをすべて選んでください。',
    at: { voiceover: 'VoiceOver', voice_control: '音声コントロール', switch_control: 'スイッチコントロール', zoom: 'ズーム機能', larger_text: 'さらに大きな文字', colour_filters: 'カラーフィルタ', none: 'なし' },
    steps: '再現する手順',
    stepsHint: 'アプリを開くところから番号を付けて。例：1. レベル214を開く。2. 赤いブロックを左にスワイプする。',
    expected: '本来の動作',
    actual: '実際に起きたこと',
    submit: 'スレッドを投稿',
    posted: 'スレッドを投稿しました。',
    signIn: 'サインインしてスレッドを作成',
    teamOnly: '「お知らせ」でスレッドを作成できるのはOutBrickチームだけです。',
  },
  form: {
    problem: '確認が必要な項目があります',
    problemCount: (_n, f) => `続けるには${f}件の項目を直してください：`,
    required: '「任意」とあるもの以外はすべて必須です。',
    optional: '任意',
    honeypot: 'この欄は空のままにしてください',
    fields: {
      title: 'タイトル',
      body: '投稿',
      categorySlug: 'カテゴリ',
      language: '言語',
      device: 'デバイス',
      osVersion: 'システムのバージョン',
      appVersion: 'OutBrickのバージョン',
      assistive: '支援技術',
      steps: '再現する手順',
      expected: '本来の動作',
      actual: '実際に起きたこと',
      email: 'メールアドレス',
      displayName: '表示名',
      bio: '自己紹介',
      confirm: '確認',
      reason: '理由',
    },
    codes: {
      required: (field) => `${field}を入力してください`,
      too_short: (field) => `${field}が短すぎます`,
      too_long: (field) => `${field}が長すぎます`,
      invalid: (field) => `${field}を確認してください`,
      taken: (field) => `その${field}はすでに使われています。別のものを選んでください`,
      email: () => 'name@example.jpのような形式でメールアドレスを入力してください',
      choose: (field) => `${field}を選んでください`,
      mismatch: () => '確認のため、大文字でDELETEと入力してください',
      no_email: (f) => `${f}にメールアドレスは使えません`,
      no_links: (f) => `${f}にリンクは使えません`,
      reserved: (f) => `その${f}は予約されています。別のものを選んでください`,
    },
  },
  search: {
    title: 'コミュニティを検索',
    lede: 'すべての言語のスレッド、返信、よくある質問を検索できます。',
    label: '検索する言葉',
    button: '検索',
    category: 'カテゴリ',
    allCategories: 'すべてのカテゴリ',
    results: (_n, f) => `${f}件`,
    none: (q) => `「${q}」に一致するものはありませんでした。言葉を減らすか変えてみるか、「ヘルプとサポート」で質問してください。`,
    prompt: '「元に戻す」「VoiceOver」やレベル番号など、1〜2語を入力してください。',
    kinds: { thread: 'スレッド', post: '返信', faq: 'よくある質問' },
    inThread: (title) => `「${title}」内`,
  },
  faq: {
    title: 'よくある質問',
    lede: 'OutBrickについての短い答え。サポートページと、チームがベストアンサーを選んだスレッドから集めました。',
    community: 'コミュニティから',
    support: 'OutBrickサポートから',
    supportLink: 'サポートページをすべて読む',
    fromThread: 'スレッドを読む',
    none: 'コミュニティからの回答はまだ追加されていません。',
  },
  guidelines: {
    title: 'コミュニティのガイドライン',
    lede: 'OutBrickコミュニティは、助けを得たりゲームづくりに参加したりできる穏やかな場所です。そのためのいくつかの約束ごとです。',
    updated: '2026年10月7日更新',
    privacy: 'プライバシーポリシー',
    contact: 'チームへのお問い合わせ',
    sections: [
      {
        heading: '思いやりを持って',
        paragraphs: ['ここでは、VoiceOverで、スイッチコントロールで、片手で、母語ではない言葉で、あるいは初めて遊ぶ人など、さまざまな人が集まっています。聞かれたことに答え、相手の善意を前提にし、反対するのは意見に対してだけにして、人を責めないでください。'],
        points: ['侮辱、嫌がらせ、差別、脅しは禁止です。', '同じ指摘を重ねないでください。すでに回答があるなら、繰り返す代わりに投票を。', 'どんな質問も笑わないでください。誰もが一度は通った道です。'],
      },
      {
        heading: '個人情報は書かない',
        paragraphs: ['自分や他人のメールアドレス、電話番号、住所、Apple Account、Game Centerのログイン情報、購入のレシート、支払い情報は決して投稿しないでください。公開の場で必要になることはなく、チームがここで尋ねることもありません。', 'スクリーンショットには思った以上の情報が写ることがあります。投稿前に名前や通知を確認してください。'],
      },
      {
        heading: '役に立つ不具合報告',
        paragraphs: ['良い報告があれば、私たちの手元のデバイスで不具合を再現できます。報告フォームは必要なことだけを尋ねます。'],
        points: ['デバイス、iOSまたはiPadOSのバージョン、OutBrickのバージョン。', 'VoiceOver、音声コントロール、スイッチコントロール、ズーム機能などの設定がオンだったか。', 'アプリを開くところからの番号付きの手順、期待した動作、実際に起きたこと。', '1つのスレッドに1つの不具合を。まず検索し、重複を作るより既存の報告に情報を加えてください。'],
      },
      {
        heading: 'ネタバレ',
        paragraphs: ["自分の力でステージを解きたい人もいます。攻略法や旅の終盤の驚きを書くときは、投稿の最初に「ネタバレ：」と対象のレベルを書いて読み飛ばせるようにし、タイトルには答えを書かないでください。"],
      },
      {
        heading: '話題に沿って、どの言語でも',
        paragraphs: ['合ったカテゴリに投稿し、スレッドごとの話題を守ってください。いちばん書きやすい言語で書き、投稿の言語を設定すると、その言語を読む人が見つけやすくなります。宣伝、紹介リンク、非公式なコピーへのリンクは禁止です。'],
      },
      {
        heading: 'モデレーションと異議申し立て',
        paragraphs: ['ガイドラインが守られない場合、モデレーターとOutBrickチームは、タイトルの編集、スレッドの移動、投稿の非表示、スレッドのロック、アカウントの停止を行うことがあります。すべての対応は記録されます。投稿が非表示になった場合は、理由をメールでお伝えします。', '判断が誤っていると思われる場合は、30日以内にそのメールに返信するか、お問い合わせフォームをご利用ください。判断に関わっていない者が改めて確認します。'],
        points: ['投稿は「報告」ボタンで報告できます。報告は非公開です。', '新しいメンバーの最初の投稿にリンクが含まれる場合、表示される前にモデレーターの承認を待ちます。'],
      },
      {
        heading: 'アカウントとデータ',
        paragraphs: ['公開されるのは表示名だけです。保存しているあなたのデータのダウンロードや、アカウントの削除は、いつでも設定から行えます。削除するとプロフィールは消えますが、スレッドの流れがわかるよう、投稿は「退会したメンバー」として残ります。保存する内容とその理由はプライバシーポリシーで説明しています。'],
      },
    ],
  },
  signin: {
    title: 'OutBrickコミュニティにサインイン',
    lede: '読むのはどなたでも自由です。投稿、返信、投票、スレッドのウォッチにはサインインが必要です。パスワードは要りません。',
    providersHeading: 'お持ちのアカウントでサインイン',
    apple: 'Appleでサインイン',
    google: 'Googleでログイン',
    facebook: 'Facebookで続ける',
    shares: {
      apple: 'Appleから届くのはメールアドレス（「メールを非公開」を選べば中継用のアドレス）と、許可した場合のみお名前です。',
      google: 'Googleから届くのはお名前とメールアドレスです。メールアドレスはサインインにだけ使い、表示することはありません。',
      facebook: 'Facebookから届くのはお名前とメールアドレスです。Facebookに何かを投稿することはありません。',
      email: '1回だけ使えるリンクをメールでお送りします。このブラウザで30日間サインインした状態になります。アドレスはサインインと、選んだメールの送信にだけ使います。',
    },
    or: 'または',
    emailHeading: 'メールのリンクでサインイン',
    email: 'メールアドレス',
    emailHint: '20分間、1回だけ使えるリンクをお送りします。',
    emailButton: 'サインイン用のリンクをメールで受け取る',
    sent: 'メールをご確認ください',
    sentNote: 'このアドレスでサインインできる場合、リンクをお送りしました。20分間、1回だけ使えます。このページは閉じてかまいません。',
    errors: {
      used: 'このサインイン用のリンクはすでに使用されています。各リンクは1つのブラウザで1回だけ使えます。この端末でサインインするには、下から新しいリンクを受け取ってください。',
      expired: 'このサインイン用のリンクは期限切れです。リンクの有効期間は20分です。下から新しいリンクを受け取ってください。',
      invalid: 'このサインイン用のリンクは使えませんでした。すでに使われた可能性があります。下から新しいリンクを受け取ってください。',
      failed: '相手側の問題でサインインが完了しませんでした。もう一度お試しいただくか、メールのリンクをご利用ください。',
      denied: 'サインインはキャンセルされました。何も共有されていません。いつでもやり直せます。',
      unavailable: "この方法でのサインインは現在ご利用いただけません。メールのリンクを使うか、しばらくしてからお試しください。",
      email_taken: "このメールアドレスはすでに別のアカウントで使われています。前回と同じ方法でサインインしてください。",
    },
    already: (name) => `すでに${name}としてサインインしています。`,
    privacy: 'データの扱いについては、プライバシーポリシーとコミュニティのガイドラインをご覧ください。',
    noProviders: 'ほかのアカウントでのサインインはまだ準備中です。メールのリンクをご利用ください。',
  },
  welcome: {
    title: '表示名を決めてください',
    lede: 'ほかのメンバーに見えるのはこの名前だけです。あとから設定で変更できます。',
    name: '表示名',
    nameHint: '3〜30文字。文字、数字、スペース、ピリオド、ハイフン、アンダースコアが使えます。メールアドレスは使わないでください。',
    save: '保存して続ける',
    saved: 'OutBrickコミュニティへようこそ。',
  },
  settings: {
    title: '設定',
    lede: 'プロフィール、メール、データの設定です。変更は各セクションのボタンを押すと保存されます。',
    profile: 'プロフィール',
    displayName: '表示名',
    displayNameHint: 'ほかのメンバーに見える唯一の名前です。',
    bio: '自己紹介',
    bioHint: '300文字まで。プロフィールに表示されます。',
    language: 'メールとコミュニティの言語',
    languageHint: '一覧には最初、この言語と英語のスレッドが表示されます。',
    saveProfile: 'プロフィールを保存',
    profileSaved: 'プロフィールを保存しました。',
    emails: 'メール',
    emailsLede: (address) => `メールは${address}宛てにお送りします。どのメールにも、ワンクリックで配信を停止できるリンクがあります。`,
    emailKinds: {
      reply: ['返信', 'あなたのスレッドや投稿に誰かが返信したとき。'],
      mention: ['メンション', '誰かが@とあなたの表示名を書いたとき。'],
      watched: ['ウォッチ中のスレッドとカテゴリ', 'ウォッチしているものに新しい投稿があったとき。'],
      status: ['対応状況の変更', '報告した不具合やアイデアの状況が変わったとき。例：「5.1で修正」。'],
      solved: ['解決した回答', 'あなたの回答が解決した回答に選ばれたとき。'],
      release: ['新しいバージョン', 'OutBrickの新しいバージョンが出たとき（「お知らせ」から）。'],
      moderation: ['モデレーションのお知らせ', 'あなたの投稿がモデレーターによって非表示になったときに、理由をお知らせします。オンのままにすることをおすすめします。'],
    },
    saveEmails: 'メールの設定を保存',
    emailsSaved: 'メールの設定を保存しました。',
    address: "メールアドレス",
    addressHint: "誰にも表示されません。新しいアドレスは、お送りするメールで確認すると切り替わります。",
    addressNeeded: "投稿するにはメールアドレスを追加してください。返信やサインイン用リンクを送るには確認済みのアドレスが必要です。",
    saveAddress: "メールアドレスを変更",
    addressSent: (a) => `${a}に確認用のリンクを送りました。リンクを開くとアドレスが切り替わります。`,
    addressConfirmed: "メールアドレスを確認しました。",
    accounts: 'サインインの方法',
    accountsLede: 'これらのどの方法でもサインインできます。方法を追加するには、いったんサインアウトし、同じメールアドレスで新しい方法を使ってサインインしてください。',
    providerNames: { apple: 'Apple', google: 'Google', facebook: 'Facebook', email: 'メールのリンク' },
    data: 'あなたのデータ',
    dataLede: 'プロフィール、投稿、投票、ウォッチ、メールの設定など、保存しているすべてのデータをJSONファイルでダウンロードできます。',
    export: 'データをダウンロード',
    exportEmail: 'ダウンロードリンクをメールで受け取る',
    exportEmailSent: '受信トレイを確認してください。リンクの有効期限は24時間です。',
    signOut: 'サインアウト',
    signedOut: 'サインアウトしました。',
    deleteHeading: 'アカウントを削除',
    deleteLede: 'プロフィール、サインイン方法、ウォッチ、メールアドレスが削除されます。スレッドの流れがわかるよう、投稿は「退会したメンバー」として残ります。元に戻すことはできません。',
    deleteConfirm: '確認のためDELETEと入力',
    deleteHint: 'うっかり削除しないよう、大文字で入力してください。',
    deleteButton: 'アカウントを削除',
    deleted: 'アカウントを削除しました。コミュニティに参加していただき、ありがとうございました。',
    banned: 'アカウントは停止中のため、読むことはできますが投稿はできません。理由と異議申し立ての方法はお送りしたメールに書いてあります。',
  },
  notifications: {
    title: 'お知らせ',
    lede: '返信、メンション、ウォッチしているものの新着です。',
    markAll: 'すべて既読にする',
    marked: 'すべてのお知らせを既読にしました。',
    none: '新しいお知らせはありません。誰かが返信するとここに表示されます。',
    unreadTag: '新着',
    kinds: {
      reply: (actor, thread) => `${actor}さんが「${thread}」に返信しました`,
      mention: (actor, thread) => `${actor}さんが「${thread}」であなたをメンションしました`,
      watched: (actor, thread) => `${actor}さんがウォッチ中の「${thread}」に投稿しました`,
      status: (_actor, thread, extra) => `「${thread}」の対応状況：${extra}`,
      solved: (actor, thread) => `${actor}さんが「${thread}」でのあなたの回答を解決した回答に選びました`,
      release: (_actor, thread, extra) => (extra ? `OutBrick ${extra}を公開しました：「${thread}」` : `新しいバージョン：「${thread}」`),
      moderation: (_actor, thread) => `「${thread}」でのあなたの投稿にモデレーターが対応しました。詳しくはメールでお知らせしています。`,
      welcome: () => 'OutBrickコミュニティへようこそ。まずはガイドラインを読んで、「雑談」であいさつしてみてください。',
    },
  },
  profile: {
    title: (name) => name,
    joined: (when) => `${when}から参加`,
    posts: countJa('件の投稿'),
    solved: (_n, f) => `解決した回答${f}件`,
    recent: '最近のスレッド',
    none: 'まだスレッドはありません。',
    noBio: 'まだ自己紹介はありません。',
  },
  mod: {
    title: 'モデレーション',
    lede: 'メンバーからの報告と、承認待ちの最初の投稿です。ここでの対応はすべて記録されます。',
    reports: '報告',
    queue: '承認待ち',
    noReports: '未対応の報告はありません。',
    noQueue: '承認待ちの投稿はありません。',
    reportedBy: (name, reason) => `${name}さんからの報告：${reason}`,
    inThread: (title) => `「${title}」内`,
    dismiss: '報告を却下',
    hide: '投稿を非表示',
    approve: '投稿を承認',
    reasonLabel: '理由（投稿者にメールで伝えます）',
    done: '完了しました。',
    forbidden: 'このページはモデレーターだけが見られます。',
    banHeading: 'このメンバーを利用停止にする',
    banLede: '利用停止中のメンバーも閲覧やメール設定の変更はできますが、投稿・返信・リアクション・投票はできません。',
    banDays: '日数',
    banReason: '理由（メンバーに表示されます）',
    banSubmit: '利用停止にする',
    unban: '利用停止を解除する',
    bannedUntil: (d) => `${d}まで利用停止中`,
    banDone: 'メンバーを利用停止にしました。',
    unbanDone: '利用停止を解除しました。',
  },
  errors: {
    signin_required: 'この操作にはサインインが必要です。',
    forbidden: 'この操作はできません。',
    not_found: '見つかりませんでした。削除された可能性があります。',
    invalid: '直していただきたい項目があります。',
    rate_limited: '少し急ぎすぎたようです。1分ほど待ってから、もう一度お試しください。',
    too_fast: '送信が早すぎました。少し待ってから、もう一度送信してください。入力した内容はそのまま残っています。',
    too_large: '長すぎます。短くしてから、もう一度お試しください。',
    locked: 'このスレッドはロックされています。',
    banned: '現在、このアカウントでは投稿できません。',
    unverified: '先にメールアドレスを確認してください。',
    network: 'コミュニティに接続できませんでした。通信状況を確認して、もう一度お試しください。',
    unavailable: 'コミュニティは少しお休み中です。しばらくしてからお試しください。',
    unknown: 'こちらで問題が起きました。もう一度お試しください。',
    send_failed: "いまはメールを送信できませんでした。1分ほどしてからもう一度お試しください。",
  },
  loading: '読み込んでいます…',
  signedIn: "サインインしました。",
  retry: 'もう一度試す',
  notFoundTitle: 'ページが見つかりません',
  notFoundLede: 'このアドレスにコミュニティのページはありません。',
  backHome: 'コミュニティのホームへ',
  supportCta: {
    heading: 'コミュニティで質問する',
    text: 'OutBrickコミュニティでは、プレイヤーとOutBrickチームが質問に答え、不具合を追跡し、アイデアに投票しています。',
    ask: 'コミュニティで質問する',
    bug: '不具合を報告する',
  },
};

const ptBR: CommunityCopy = {
  meta: {
    homeTitle: 'Comunidade OutBrick: ajuda, problemas e ideias',
    homeDescription: 'Peça ajuda com o OutBrick, relate um problema, vote em ideias e converse sobre fases. Criada desde o início para funcionar com VoiceOver.',
    faqTitle: 'Perguntas frequentes da comunidade OutBrick',
    faqDescription: 'Respostas às dúvidas mais comuns sobre vidas, desfazer, anúncios, compras, acessibilidade e soluções marcadas pela comunidade.',
    guidelinesTitle: 'Diretrizes da comunidade OutBrick',
    guidelinesDescription: 'Como funciona a comunidade OutBrick: gentileza, privacidade, relatos úteis de problemas, spoilers, moderação e recursos.',
    pageTitle: (page) => `${page} — Comunidade OutBrick`, threadTitle: (title) => `${title} — Comunidade OutBrick`,
  },
  name: 'Comunidade OutBrick', eyebrow: 'Comunidade OutBrick', skip: 'Ir para o conteúdo', breadcrumb: 'Navegação estrutural',
  nav: { label: 'Comunidade', home: 'Início da comunidade', search: 'Buscar', faq: 'Perguntas frequentes', guidelines: 'Diretrizes', notifications: 'Notificações', unread: (n, f) => n === 1 ? '1 não lida' : `${f} não lidas`, settings: 'Configurações', signIn: 'Entrar', signOut: 'Sair', moderation: 'Moderação', newThread: 'Iniciar conversa', helpCentre: 'Central de Ajuda', signedInAs: (name) => `Você entrou como ${name}` },
  home: {
    title: 'Comunidade OutBrick',
    lede: 'Peça ajuda com uma fase, conte o que não está funcionando e vote no que devemos criar. A equipe lê cada conversa e responde publicamente.',
    points: ['Todas as páginas funcionam com VoiceOver, Controle por Voz, Controle Assistivo e teclado.', 'Por padrão, você vê as conversas no seu idioma e em inglês; toque para ver todos os idiomas.', 'Seu endereço de e-mail nunca é exibido para ninguém.'],
    searchLabel: 'Buscar na comunidade', searchButton: 'Buscar', categoriesHeading: 'Categorias', latestHeading: 'Conversas recentes', startThread: 'Iniciar conversa', allThreads: 'Ver todas as conversas desta categoria', readGuidelines: 'Ler as diretrizes da comunidade',
    noScript: 'O fórum precisa de JavaScript para exibir conversas e publicar. As categorias, perguntas frequentes e diretrizes funcionam sem ele.',
  },
  categories: {
    announcements: { name: 'Novidades', description: 'Cada versão do OutBrick, publicada assim que chega à App Store, e notícias da equipe.' },
    help: { name: 'Ajuda e suporte', description: 'Perguntas do tipo “Como faço…?” sobre fases, vidas, compras e configurações. Marque a resposta que resolveu sua dúvida.' },
    bugs: { name: 'Relatos de problemas', description: 'Algo não funciona? Informe seu dispositivo, as versões do iOS e do app e o que aconteceu. Depois, acompanhe o status.' },
    ideas: { name: 'Ideias e sugestões', description: 'O que o OutBrick deveria fazer a seguir? Sugira, vote nas ideias que quiser e veja o que está planejado.' },
    accessibility: { name: 'Acessibilidade', description: 'VoiceOver, Controle por Voz, Controle Assistivo, texto maior e jogo para pessoas daltônicas. A equipe acompanha esta categoria de perto.' },
    'show-and-tell': { name: 'Mostre o que você fez', description: 'Fases de que você se orgulha, marcos da Jornada e capturas de tela, com descrição de imagem para todo mundo.' },
    general: { name: 'Assuntos gerais', description: 'Todo o resto sobre o OutBrick e quebra-cabeças em geral.' },
  },
  categoryAside: 'Todas as categorias',
  stats: { threads: pluralPt('conversa'), posts: pluralPt('publicação'), replies: pluralPt('resposta'), views: pluralPt('visualização'), votes: pluralPt('voto') },
  lastActivity: (when) => `Atividade mais recente ${when}`, noActivity: 'Ainda não há publicações',
  category: {
    sortLabel: 'Ordenar conversas', sorts: { latest: 'Atividade recente', new: 'Mais recentes', top: 'Mais votadas', unanswered: 'Sem resposta' }, filters: 'Filtrar conversas', language: 'Idioma', langMine: (language) => `${language} e inglês`, langAll: 'Todos os idiomas', status: 'Status', statusAll: 'Qualquer status', apply: 'Mostrar conversas',
    teamOnly: 'Somente a equipe OutBrick inicia conversas aqui. Todos podem responder.', empty: 'Ainda não há conversas. Comece a primeira!', emptyFiltered: 'Nenhuma conversa corresponde a estes filtros. Experimente todos os idiomas ou qualquer status.', showing: (from, to, total) => `Conversas ${from} a ${to} de ${total}`, pages: 'Páginas de conversas',
  },
  follow: { legend: 'Notificações por e-mail', watch: 'Acompanhar', watching: 'Acompanhando', mute: 'Silenciar', muted: 'Silenciado', watchCategory: (name) => `Acompanhar ${name}: receber um e-mail para cada conversa nova`, muteCategory: (name) => `Silenciar ${name} e ocultar dos assuntos recentes`, watchThread: (title) => `Acompanhar “${title}”: receber um e-mail para cada resposta`, muteThread: (title) => `Silenciar “${title}”: não receber e-mails, mesmo quando responderem`, nowWatching: 'Você está acompanhando. Avisaremos quando houver novas publicações.', nowMuted: 'Silenciado. Você não receberá e-mails sobre isso.', nowNone: 'Você não está mais acompanhando nem silenciando.' },
  list: { startedBy: (name, when) => `Iniciada por ${name}, ${when}`, lastReply: (name, when) => `última resposta de ${name}, ${when}`, unread: (n, f) => n === 1 ? '1 nova publicação' : `${f} novas publicações`, pinned: 'Fixada', locked: 'Fechada', solved: 'Resolvida', hidden: 'Oculta' },
  status: { new: 'Novo', confirmed: 'Confirmado', fixed: 'Corrigido', released: 'Lançado', not_a_bug: 'Não é um problema', duplicate: 'Duplicado', open: 'Aberta', considering: 'Em avaliação', planned: 'Planejada', in_progress: 'Em andamento', shipped: 'Lançada', declined: 'Recusada' },
  statusLabel: 'Status', roles: { team: 'Equipe OutBrick', moderator: 'Moderação', admin: 'Equipe OutBrick', trusted: 'Membro de confiança' }, formerMember: 'Ex-membro',
  thread: {
    startedBy: (name, when) => `Iniciada por ${name} em ${when}`, jumpSolution: 'Ir para a solução', jumpUnread: 'Ir para a primeira publicação não lida', bugHeading: 'Detalhes do problema',
    bug: { device: 'Dispositivo', osVersion: 'Versão do iOS ou iPadOS', appVersion: 'Versão do OutBrick', assistive: 'Tecnologia assistiva', steps: 'Etapas para reproduzir', expected: 'O que deveria acontecer', actual: 'O que aconteceu' },
    postsHeading: 'Publicações', postHeading: (author, date) => `${author}, ${date}`, postNumber: (n) => `Publicação ${n}`, solution: 'Solução', solutionBy: (name) => `Marcada como solução. Resposta de ${name}.`, edited: (when) => `Editada ${when}`, hiddenPost: 'Um moderador ocultou esta publicação.', hiddenReason: (reason) => `Motivo: ${reason}`, pending: 'Aguardando aprovação da moderação. Só você e os moderadores podem ver.', replyTo: (n) => `Em resposta à publicação ${n}`, pages: 'Páginas desta conversa', page: (n) => `Página ${n}`, previous: 'Página anterior', next: 'Próxima página', pageOf: (page, pages) => `Página ${page} de ${pages}`, upvote: 'Votar', upvoted: 'Votado', upvoteLabel: (title, votes, n, f) => `Votar em “${title}”, ${votes(n, f)}`, votes: pluralPt('voto'),
    actions: { reply: 'Responder', replyLabel: (name) => `Responder a ${name}`, quote: 'Citar', quoteLabel: (name) => `Citar ${name}`, edit: 'Editar', editLabel: (n) => `Editar publicação ${n}`, delete: 'Excluir', deleteLabel: (n) => `Excluir publicação ${n}`, report: 'Denunciar', reportLabel: (n, name) => `Denunciar a publicação ${n} de ${name}`, solve: 'Marcar como solução', solveLabel: (n) => `Marcar publicação ${n} como solução`, unsolve: 'Desmarcar solução', unsolveLabel: (n) => `Desmarcar publicação ${n} como solução`, save: 'Salvar alterações', cancel: 'Cancelar', confirmDelete: 'Excluir esta publicação? Não é possível desfazer.', yesDelete: 'Sim, excluir', share: 'Link para esta publicação' },
    report: { legend: 'Por que você está denunciando esta publicação?', reasons: { spam: 'Spam ou propaganda', abuse: 'Agressiva ou ofensiva', off_topic: 'Fora do assunto', personal_info: 'Contém dados pessoais', other: 'Outro motivo' }, note: 'O que a moderação precisa saber', send: 'Enviar denúncia', sent: 'Obrigado. Um moderador vai analisar.' },
    replyHeading: 'Sua resposta', signInToReply: 'Entre para responder', signInToReplyNote: 'Qualquer pessoa pode ler a comunidade. Para responder, entre com Apple, Google, Facebook ou por um link enviado por e-mail.',
    blocked: { locked: 'Esta conversa está fechada e não aceita novas respostas.', banned: 'Sua conta não pode publicar no momento. O e-mail que enviamos explica o motivo e como recorrer.', unverified: 'Confirme primeiro seu endereço de e-mail; enviamos um link.', other: 'Você não pode responder a esta conversa.' },
    replyPosted: 'Sua resposta foi publicada.', postSaved: 'Suas alterações foram salvas.', postDeleted: 'A publicação foi excluída.', solvedNow: 'Marcada como solução.', unsolvedNow: 'Não está mais marcada como solução.', reported: 'Obrigado por avisar. Um moderador vai analisar.', voteSaved: (votes) => `Voto registrado. ${votes}.`, voteRemoved: (votes) => `Voto retirado. ${votes}.`, moderation: 'Moderação', modPin: 'Fixar conversa', modUnpin: 'Desafixar conversa', modLock: 'Fechar conversa', modUnlock: 'Reabrir conversa', modHide: 'Ocultar conversa', modUnhide: 'Mostrar conversa novamente', modStatus: 'Status', modStatusNote: 'Nota sobre o status', modStatusNoteHint: 'Exibida junto ao status, por exemplo: “Corrigido na versão 5.1”.', modNoStatus: 'Sem status', modSave: 'Salvar status', modSaved: 'Conversa atualizada.', notFound: 'Conversa não encontrada', notFoundNote: 'Ela pode ter sido excluída ou o link pode estar incompleto. Busque na comunidade ou volte às categorias.', readOnline: 'Ler e responder na comunidade',
  },
  composer: { label: 'Sua publicação', replyLabel: 'Sua resposta', hint: 'Escreva em Markdown: uma linha em branco inicia um novo parágrafo. Abaixo há uma ajuda de formatação.', write: 'Escrever', preview: 'Prévia', tabsLabel: 'Escrever ou ver a prévia', previewEmpty: 'Ainda não há nada para mostrar.', previewLoading: 'Preparando a prévia…', previewHeading: 'Sua publicação ficará assim', help: 'Ajuda de formatação', helpItems: [['**negrito**', 'texto em negrito'], ['*itálico*', 'texto em itálico'], ['# Título', 'um título (## e ### para títulos menores)'], ['- item', 'uma lista com marcadores; use 1. para uma lista numerada'], ['> citação', 'uma citação'], ['[texto](https://…)', 'um link'], ['`código`', 'código, como o número de uma fase ou o nome de uma configuração']], count: (used, max) => `${used} de ${max} caracteres`, left: (n, f) => n === 1 ? 'Resta 1 caractere' : `Restam ${f} caracteres`, over: (n, f) => n === 1 ? 'Excede em 1 caractere' : `Excede em ${f} caracteres`, submitReply: 'Publicar resposta', sending: 'Publicando…', replyingTo: (n) => `Respondendo à publicação ${n}.`, clearReply: 'Responder à conversa em vez disso' },
  newThread: {
    title: 'Iniciar conversa', lede: 'Um assunto por conversa, com um título que explique do que se trata. Busque primeiro: alguém talvez já tenha perguntado.', category: 'Categoria', chooseCategory: 'Escolha uma categoria', titleLabel: 'Título', titleHint: 'Uma frase curta, por exemplo: “Fase 214: como passar pela porta congelada?”. De 4 a 140 caracteres.', language: 'Idioma da publicação', languageHint: 'Assim, quem lê nesse idioma poderá encontrá-la. Por padrão, as listas mostram seu idioma e inglês.', body: 'Sua publicação', bodyBug: 'Resumo', bugLegend: 'Sobre o problema', device: 'Dispositivo', deviceHint: 'Por exemplo, iPhone 15 Pro, iPad Air (5ª geração) ou Apple Watch Series 9. Ajustes › Geral › Sobre › Nome do Modelo.', osVersion: 'Versão do iOS, iPadOS ou outro sistema', osVersionHint: 'Ajustes › Geral › Sobre › Versão do iOS, por exemplo, 27.1.', appVersion: 'Versão do OutBrick', appVersionHint: 'Na tela inicial, toque no seu avatar para abrir o Perfil: a versão aparece no fim da tela, por exemplo, 5.1.1 (68). No jogo, Ajustes › Relatar um problema preenche esse campo para você.', assistive: 'Tecnologia assistiva em uso', assistiveHint: 'Marque tudo o que estava ativado quando aconteceu.', at: { voiceover: 'VoiceOver', voice_control: 'Controle por Voz', switch_control: 'Controle Assistivo', zoom: 'Zoom', larger_text: 'Texto maior', colour_filters: 'Filtros de cor', none: 'Nenhuma' }, steps: 'Etapas para reproduzir', stepsHint: 'Liste as etapas desde que abre o app. Por exemplo: 1. Abra a fase 214. 2. Deslize o tijolo vermelho para a esquerda.', expected: 'O que deveria acontecer', actual: 'O que aconteceu', submit: 'Publicar conversa', posted: 'Sua conversa foi publicada.', signIn: 'Entre para iniciar uma conversa', teamOnly: 'Somente a equipe OutBrick pode iniciar conversas em Novidades.',
  },
  form: {
    problem: 'Há um problema', problemCount: (n, f) => n === 1 ? 'Corrija 1 item para continuar:' : `Corrija ${f} itens para continuar:`, required: 'Todos os campos são obrigatórios, exceto os marcados como opcionais.', optional: 'opcional', honeypot: 'Deixe este campo em branco',
    fields: { title: 'Título', body: 'Publicação', categorySlug: 'Categoria', language: 'Idioma', device: 'Dispositivo', osVersion: 'Versão do sistema', appVersion: 'Versão do OutBrick', assistive: 'Tecnologia assistiva', steps: 'Etapas para reproduzir', expected: 'O que deveria acontecer', actual: 'O que aconteceu', email: 'E-mail', displayName: 'Nome de exibição', bio: 'Sobre você', confirm: 'Confirmação', reason: 'Motivo' },
    codes: { required: (field) => `${field}: preencha este campo`, too_short: (field) => `${field}: está curto demais`, too_long: (field) => `${field}: está longo demais`, invalid: (field) => `${field}: confira este campo`, taken: (field) => `${field}: já está em uso; escolha outro`, email: () => 'Digite um e-mail no formato nome@exemplo.com', choose: (field) => `${field}: escolha uma opção`, mismatch: () => 'Digite DELETE em letras maiúsculas para confirmar', no_email: (f) => `${f}: não pode ser um endereço de e-mail`, no_links: (f) => `${f}: não pode conter links`, reserved: (f) => `${f}: está reservado; escolha outro` },
  },
  search: { title: 'Buscar na comunidade', lede: 'Busque em conversas, respostas e perguntas frequentes em todos os idiomas.', label: 'Buscar', button: 'Buscar', category: 'Nesta categoria', allCategories: 'Todas as categorias', results: (n, f) => n === 1 ? '1 resultado' : `${f} resultados`, none: (q) => `Não encontramos resultados para “${q}”. Tente menos palavras ou outras palavras, ou pergunte em Ajuda e suporte.`, prompt: 'Digite uma ou duas palavras, como “desfazer”, “VoiceOver” ou o número de uma fase.', kinds: { thread: 'Conversa', post: 'Resposta', faq: 'Pergunta frequente' }, inThread: (title) => `Em “${title}”` },
  faq: { title: 'Perguntas frequentes', lede: 'Respostas rápidas sobre o OutBrick, da página de suporte e das conversas com respostas escolhidas pela equipe.', community: 'Da comunidade', support: 'Do suporte OutBrick', supportLink: 'Ler a página completa de suporte', fromThread: 'Ler conversa', none: 'Ainda não há respostas da comunidade.' },
  guidelines: {
    title: 'Diretrizes da comunidade', lede: 'A comunidade OutBrick é um espaço tranquilo para encontrar ajuda e contribuir com o jogo. Estas poucas diretrizes ajudam a manter esse ambiente.', updated: 'Atualizado em 7 de outubro de 2026', privacy: 'Política de privacidade', contact: 'Falar com a equipe',
    sections: [
      { heading: 'Seja gentil', paragraphs: ['Cada pessoa joga à sua maneira: com VoiceOver, Controle Assistivo, uma mão, em um segundo idioma ou pela primeira vez. Responda ao que foi perguntado, presuma boa intenção e discorde das ideias, nunca das pessoas.'], points: ['Sem insultos, assédio, discurso de ódio ou ameaças.', 'Não se acumule em respostas: se alguém já respondeu, vote em vez de repetir.', 'Não ridicularize nenhuma pergunta. Todo especialista já fez aquela pergunta alguma vez.'] },
      { heading: 'Mantenha dados pessoais em privado', paragraphs: ['Nunca publique seu e-mail ou o de outra pessoa, telefone, endereço, conta Apple, dados de acesso ao Game Center, comprovantes de compra ou dados de pagamento. Nunca precisamos deles em público, e a equipe jamais pedirá isso aqui.', 'Uma captura de tela pode mostrar mais do que você pretende. Confira nomes e notificações antes de publicá-la.'] },
      { heading: 'Relatos de problemas que ajudam', paragraphs: ['Um bom relato nos permite reproduzir o problema no nosso próprio dispositivo. O formulário pede exatamente o que precisamos.'], points: ['Seu dispositivo, a versão do iOS ou iPadOS e a versão do OutBrick.', 'Se VoiceOver, Controle por Voz, Controle Assistivo, Zoom ou outra configuração estava ativada.', 'Etapas numeradas desde a abertura do app, o que você esperava e o que aconteceu.', 'Um problema por conversa. Busque primeiro e acrescente informações a um relato existente em vez de abrir um duplicado.'] },
      { heading: 'Cuidado com spoilers', paragraphs: ['Algumas pessoas gostam de resolver uma fase por conta própria. Comece publicações que revelam uma solução ou uma surpresa do final da Jornada com “Spoiler:” e o número da fase, para que possam ser evitadas. Não coloque a resposta no título.'] },
      { heading: 'Mantenha o assunto, em qualquer idioma', paragraphs: ['Publique na categoria certa e mantenha cada conversa em um único assunto. Escreva no idioma mais fácil para você e informe qual é, para que as pessoas certas encontrem a publicação. Sem propaganda, links de indicação ou links para cópias não oficiais do jogo.'] },
      { heading: 'Moderação e recursos', paragraphs: ['Moderadores e a equipe OutBrick podem alterar um título, mover uma conversa, ocultar uma publicação, fechar uma conversa ou suspender uma conta quando estas diretrizes não forem seguidas. Cada ação fica registrada. Se uma publicação sua for ocultada, enviaremos o motivo por e-mail.', 'Se achar que houve um engano, responda a esse e-mail ou use o formulário de contato em até 30 dias. Alguém que não participou da decisão fará uma nova análise.'], points: ['Denuncie uma publicação pelo botão Denunciar. As denúncias são privadas.', 'As primeiras publicações com links de novos membros aguardam a análise da moderação antes de aparecer.'] },
      { heading: 'Sua conta e seus dados', paragraphs: ['Somente seu nome de exibição é público. Você pode baixar todos os dados que guardamos sobre você ou excluir sua conta a qualquer momento nas Configurações. Ao excluí-la, seu perfil desaparece; suas publicações permanecem assinadas como “Ex-membro” para manter o contexto das conversas. A política de privacidade explica o que guardamos e por quê.'] },
    ],
  },
  signin: {
    title: 'Entrar na comunidade OutBrick', lede: 'A leitura é aberta a todos. Entre para publicar, responder, votar e acompanhar conversas. Não precisa lembrar de senha.', providersHeading: 'Entre com uma conta que você já tem', apple: 'Entrar com Apple', google: 'Entrar com Google', facebook: 'Continuar com Facebook',
    shares: { apple: 'A Apple compartilha um endereço de e-mail, que pode ser um endereço privado de encaminhamento se você escolher Ocultar Meu E-mail, e seu nome somente se você permitir.', google: 'O Google compartilha seu nome e endereço de e-mail. Guardamos o endereço para permitir seu acesso e nunca o exibimos.', facebook: 'O Facebook compartilha seu nome e endereço de e-mail. Nunca publicamos nada no Facebook.', email: 'Enviaremos um link de uso único que mantém sua sessão por 30 dias neste navegador. Usamos seu e-mail apenas para isso e para as mensagens que você escolher.' },
    or: 'Ou', emailHeading: 'Entre com um link por e-mail', email: 'E-mail', emailHint: 'Enviaremos um link válido por 20 minutos e de uso único.', emailButton: 'Enviar um link de acesso', sent: 'Confira seu e-mail', sentNote: 'Se este endereço puder entrar, o link já está a caminho. Ele pode ser usado uma vez e vale por 20 minutos. Você pode fechar esta página.',
    errors: { used: 'Este link de acesso já foi usado. Cada link permite entrar uma vez em um navegador. Peça um novo link abaixo para entrar neste dispositivo.', expired: 'Este link de acesso expirou. Os links valem por 20 minutos. Peça outro abaixo.', invalid: 'Este link de acesso não funcionou. Talvez já tenha sido usado. Peça outro abaixo.', failed: 'Não foi possível concluir o acesso por um problema do outro lado. Tente novamente ou use um link por e-mail.', denied: 'O acesso foi cancelado. Nada foi compartilhado. Você pode tentar novamente quando quiser.', unavailable: 'Esta forma de entrar não está disponível agora. Use um link por e-mail ou tente mais tarde.', email_taken: 'Este e-mail já pertence a outra conta. Entre da mesma forma que usou na primeira vez.' }, already: (name) => `Você já entrou como ${name}.`, privacy: 'Como tratamos seus dados está explicado na política de privacidade e nas diretrizes da comunidade.', noProviders: 'O acesso com outras contas ainda não está ativado. Use um link por e-mail.',
  },
  welcome: { title: 'Escolha seu nome de exibição', lede: 'Este é o único nome que os outros membros veem. Você pode alterá-lo depois nas Configurações.', name: 'Nome de exibição', nameHint: 'De 3 a 30 caracteres: letras, números, espaços, pontos, hífens e sublinhados. Não use seu e-mail.', save: 'Salvar e continuar', saved: 'Boas-vindas à comunidade OutBrick.' },
  settings: {
    title: 'Configurações', lede: 'Seu perfil, seus e-mails e seus dados. Salve as alterações pelo botão de cada seção.', profile: 'Perfil', displayName: 'Nome de exibição', displayNameHint: 'O único nome que os outros membros veem.', bio: 'Sobre você', bioHint: 'Até 300 caracteres. Aparece no seu perfil.', language: 'Idioma da comunidade e dos e-mails', languageHint: 'Por padrão, as listas mostram conversas neste idioma e em inglês.', saveProfile: 'Salvar perfil', profileSaved: 'Perfil salvo.', emails: 'E-mails', emailsLede: (address) => `Enviamos mensagens para ${address}. Todos os e-mails também incluem um link para cancelar a inscrição com um toque.`,
    emailKinds: { reply: ['Respostas', 'Alguém responde à sua conversa ou a uma publicação sua.'], mention: ['Menções', 'Alguém escreve @ e seu nome de exibição.'], watched: ['Conversas e categorias acompanhadas', 'Novas publicações nos assuntos que você acompanha.'], status: ['Mudanças de status', 'Seu relato ou sua ideia muda de status, por exemplo: “Corrigido na versão 5.1”.'], solved: ['Soluções', 'Sua resposta é marcada como solução.'], release: ['Novas versões', 'Uma nova versão do OutBrick é lançada (em Novidades).'], moderation: ['Avisos da moderação', 'Um moderador ocultou uma publicação sua e informou o motivo. Recomendamos manter esta opção ativada.'] },
    saveEmails: 'Salvar preferências de e-mail', emailsSaved: 'Preferências de e-mail salvas.', address: 'E-mail', addressHint: 'Nunca é exibido para ninguém. Um novo endereço substitui o anterior depois que você o confirma pelo e-mail que enviamos.', addressNeeded: 'Adicione um e-mail para publicar. Precisamos de um endereço confirmado para enviar respostas e links de acesso.', saveAddress: 'Alterar e-mail', addressSent: (a) => `Enviamos um link de confirmação para ${a}. O endereço mudará quando você abrir o link.`, addressConfirmed: 'Seu e-mail foi confirmado.', accounts: 'Formas de entrar', accountsLede: 'Você pode entrar com qualquer uma destas opções. Para adicionar outra, saia e entre com ela usando o mesmo endereço de e-mail.', providerNames: { apple: 'Apple', google: 'Google', facebook: 'Facebook', email: 'Link por e-mail' }, data: 'Seus dados', dataLede: 'Baixe tudo o que guardamos sobre você: perfil, publicações, votos, itens acompanhados e preferências de e-mail, em um arquivo JSON.', export: 'Baixar meus dados', exportEmail: 'Receber um link de download por e-mail', exportEmailSent: 'Confira sua caixa de entrada: o link vale por 24 horas.', signOut: 'Sair', signedOut: 'Você saiu da sua conta.', deleteHeading: 'Excluir minha conta', deleteLede: 'Isso exclui seu perfil, formas de entrar, itens acompanhados e e-mail. Suas publicações permanecem assinadas como “Ex-membro” para manter o contexto. Não é possível desfazer.', deleteConfirm: 'Digite DELETE para confirmar', deleteHint: 'Use letras maiúsculas para evitar uma exclusão acidental.', deleteButton: 'Excluir minha conta', deleted: 'Sua conta foi excluída. Obrigado por fazer parte da comunidade.', banned: 'Sua conta está suspensa: você pode ler, mas não publicar. O e-mail que enviamos explica o motivo e como recorrer.',
  },
  notifications: { title: 'Notificações', lede: 'Respostas, menções e novidades sobre o que você acompanha.', markAll: 'Marcar tudo como lido', marked: 'Todas as notificações foram marcadas como lidas.', none: 'Nenhuma novidade. Quando alguém responder, aparecerá aqui.', unreadTag: 'Nova', kinds: { reply: (actor, thread) => `${actor} respondeu em “${thread}”`, mention: (actor, thread) => `${actor} mencionou você em “${thread}”`, watched: (actor, thread) => `${actor} publicou em “${thread}”, que você acompanha`, status: (_actor, thread, extra) => `“${thread}” agora está: ${extra}`, solved: (actor, thread) => `${actor} marcou sua resposta em “${thread}” como solução`, release: (_actor, thread, extra) => extra ? `OutBrick ${extra} já está disponível: “${thread}”` : `Nova versão: “${thread}”`, moderation: (_actor, thread) => `Um moderador tomou uma medida sobre sua publicação em “${thread}”. Enviamos os detalhes por e-mail.`, welcome: () => 'Boas-vindas à comunidade OutBrick. Comece pelas diretrizes e depois diga olá em Assuntos gerais.' } },
  profile: { title: (name) => name, joined: (when) => `Membro desde ${when}`, posts: pluralPt('publicação'), solved: (n, f) => n === 1 ? '1 solução' : `${f} soluções`, recent: 'Conversas recentes', none: 'Ainda não há conversas.', noBio: 'Ainda não há descrição.' },
  mod: { title: 'Moderação', lede: 'Denúncias de membros e primeiras publicações aguardando aprovação. Todas as ações ficam registradas.', reports: 'Denúncias', queue: 'Aguardando aprovação', noReports: 'Não há denúncias em aberto.', noQueue: 'Não há publicações aguardando aprovação.', reportedBy: (name, reason) => `Denunciada por ${name}: ${reason}`, inThread: (title) => `Em “${title}”`, dismiss: 'Descartar denúncia', hide: 'Ocultar publicação', approve: 'Aprovar publicação', reasonLabel: 'Motivo (enviado por e-mail a quem publicou)', done: 'Concluído.', forbidden: 'Somente moderadores podem ver esta página.', banHeading: 'Suspender este membro', banLede: 'Membros suspensos ainda podem ler e alterar as preferências de e-mail, mas não podem publicar, responder, reagir ou votar.', banDays: 'Dias', banReason: 'Motivo (visível para o membro)', banSubmit: 'Suspender', unban: 'Remover suspensão', bannedUntil: (d) => `Suspenso até ${d}`, banDone: 'O membro foi suspenso.', unbanDone: 'A suspensão foi removida.' },
  errors: { signin_required: 'Entre para fazer isso.', forbidden: 'Você não pode fazer isso.', not_found: 'Não encontramos. Talvez tenha sido excluído.', invalid: 'Há algo que precisa ser corrigido.', rate_limited: 'Você está indo rápido demais. Aguarde um minuto e tente novamente.', too_fast: 'Foi rápido demais. Espere um instante e envie de novo: seu texto continua aqui.', too_large: 'Está longo demais. Encurte e tente novamente.', locked: 'Esta conversa está fechada.', banned: 'Sua conta não pode publicar no momento.', unverified: 'Confirme primeiro seu endereço de e-mail.', network: 'Não foi possível conectar à comunidade. Confira sua conexão e tente novamente.', unavailable: 'A comunidade está em uma pausa rápida. Tente novamente em instantes.', unknown: 'Algo deu errado do nosso lado. Tente novamente.', send_failed: 'Não foi possível enviar o e-mail agora. Tente novamente em um minuto.' },
  loading: 'Carregando…', signedIn: 'Você entrou.', retry: 'Tentar novamente', notFoundTitle: 'Página não encontrada', notFoundLede: 'Não há uma página da comunidade neste endereço.', backHome: 'Ir para o início da comunidade',
  supportCta: { heading: 'Pergunte à comunidade', text: 'Na comunidade OutBrick, jogadores e a equipe respondem dúvidas, acompanham problemas e votam em ideias.', ask: 'Perguntar à comunidade', bug: 'Relatar um problema' },
};

function pluralPt(unit: string): N {
  return (n, formatted) => n === 1 ? `1 ${unit}` : `${formatted} ${unit === 'conversa' ? 'conversas' : unit === 'publicação' ? 'publicações' : unit === 'resposta' ? 'respostas' : unit === 'visualização' ? 'visualizações' : 'votos'}`;
}

export const communityCopy: Record<Locale, CommunityCopy> = { en, fr, de, es, ja, 'pt-BR': ptBR };

/** The colour of each category's brick, from the site's course. */
export const categoryColours: Record<CategorySlug, string> = {
  announcements: '#e2352f',
  help: '#3fc544',
  bugs: '#ffc53d',
  ideas: '#7b5cf0',
  accessibility: '#26b9b0',
  'show-and-tell': '#f26ab8',
  general: '#3b8bf0',
};

/** Words for a category slug the pages do not know (a category added on the server later). */
export function categoryWords(locale: Locale, slug: string): Words {
  return communityCopy[locale].categories[slug as CategorySlug] ?? { name: slug.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase()), description: '' };
}

/** The phrases the support pages add, for the localized page tree (lib/i18n/public-pages.ts). */
export function communitySupportPhrases(locale: Exclude<Locale, 'en'>): Record<string, string> {
  const source = en.supportCta;
  const target = communityCopy[locale].supportCta;
  return { [source.heading]: target.heading, [source.text]: target.text, [source.ask]: target.ask, [source.bug]: target.bug, Community: { fr: 'Communauté', de: 'Community', es: 'Comunidad', ja: 'コミュニティ', 'pt-BR': 'Comunidade' }[locale] };
}
