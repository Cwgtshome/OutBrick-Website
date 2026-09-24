/**
 * The facts behind the business pages — contact topics, the affiliate programme's terms and
 * the open roles — kept in one place so the pages, their forms and their structured data
 * cannot disagree with each other.
 *
 * Nothing here states a price. The site has never published what Brick Pass, Remove Ads or a
 * coin bundle costs (the App Store listing is the source for that), so the affiliate example
 * works in clearly hypothetical round numbers instead.
 */

// ---------------------------------------------------------------------------------------
// Contact

export type ContactTopic = { value: string; label: string };

/** The contact form's topics, in the order the select lists them. `?topic=<value>` preselects one. */
export const contactTopics: ContactTopic[] = [
  { value: 'support', label: 'Support' },
  { value: 'bug', label: 'Bug report' },
  { value: 'accessibility', label: 'Accessibility' },
  { value: 'privacy', label: 'Privacy' },
  { value: 'purchases', label: 'Purchases & refunds' },
  { value: 'press', label: 'Press & media' },
  { value: 'marketing', label: 'Marketing & partnerships' },
  { value: 'affiliate', label: 'Affiliate programme' },
  { value: 'careers', label: 'Careers' },
  { value: 'other', label: 'Other' },
];

/** Topics that show the optional device, iOS version and app version fields. */
export const deviceTopics = ['support', 'bug'];

// ---------------------------------------------------------------------------------------
// Affiliate programme

export const affiliateTerms = {
  /** Share of OutBrick's net proceeds paid on attributed in-app purchases. */
  commissionPercent: 30,
  /** How long a referred customer's purchases count, from the referred download. */
  windowMonths: 12,
  /** The balance a payout waits for; smaller balances roll over. */
  minimumPayout: 'US$50',
};

// ---------------------------------------------------------------------------------------
// Careers

export type Team = 'Marketing' | 'Community' | 'Design' | 'Engineering';
export type EmploymentType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR';

export type Job = {
  slug: string;
  title: string;
  team: Team;
  employmentType: EmploymentType;
  /** How the page says it. */
  employmentLabel: string;
  /** One sentence, for the list and the meta description. */
  summary: string;
  /** Two short paragraphs about the role. */
  about: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  /** Slab tone on the list and the job page. */
  tone: 'gold' | 'teal' | 'purple' | 'blue' | 'pink';
  /** The brick friend whose colour matches the tone, shown on the job page. */
  friend: 'zippy' | 'flurry' | 'vio' | 'bloo' | 'poppy';
};

/** When the current round of roles was posted, and when it closes. Used in JobPosting data. */
export const jobsPostedOn = '2026-09-24';
export const jobsValidThrough = '2026-12-31T23:59:00+00:00';

/**
 * Where applicants may live. Google's JobPosting for a remote role needs at least one country;
 * the page text names the same six, so the two cannot disagree.
 */
export const hiringCountries = ['United Kingdom', 'France', 'Germany', 'Spain', 'United States', 'Canada'];

/** The countries as a sentence: "the United Kingdom, France, … or Canada". */
export function hiringCountriesText(conjunction = 'or'): string {
  const named = hiringCountries.map((c) => (c.startsWith('United') ? `the ${c}` : c));
  return `${named.slice(0, -1).join(', ')} ${conjunction} ${named.at(-1)}`;
}

export const teams: Team[] = ['Marketing', 'Community', 'Design', 'Engineering'];

export const jobs: Job[] = [
  {
    slug: 'content-marketing-lead',
    title: 'Content Marketing Lead',
    team: 'Marketing',
    employmentType: 'FULL_TIME',
    employmentLabel: 'Full-time',
    summary:
      'Own the words and the stories around OutBrick: the Journal, the App Store copy, launch notes and the press room, all in a voice that tells players the truth.',
    about: [
      'OutBrick already says unusual things out loud: that it has lives and ads, exactly how both work, and that every board was cleared by a solver before it shipped. You will keep that voice and take it further — into the Journal, the App Store listing, release notes, the press room and every page a player or a journalist reads.',
      'This is a hands-on lead role. You will write a lot yourself, set the editorial calendar, and work closely with the community and growth roles so that what we post, what we pitch and what the store page says all tell the same story.',
    ],
    responsibilities: [
      'Plan and run the OutBrick Journal: research-backed articles on puzzle design, calmer play and accessibility, written or edited by you',
      'Write App Store copy, in-app event text and release notes for each version, with the growth specialist testing what works',
      'Draft press releases and pitches, keep the press room and press kit current, and look after incoming press requests',
      'Keep a house style that is honest about lives, ads and purchases — and hold every channel to it',
      'Brief creators and affiliates on what to say (and what not to say) about the game',
    ],
    requirements: [
      'Several years writing and editing for a consumer product, a game, or a publication, with published work you can show',
      'A clear, warm, plain-English voice, and the discipline to cut a claim you cannot back up',
      'Experience running a content calendar and measuring what content actually did',
      'Comfort working remotely and asynchronously, in writing, with a small team',
    ],
    niceToHave: [
      'A feel for puzzle games and the people who play them',
      'Experience writing App Store product pages or in-app events',
      'Working French, German, Spanish or Japanese (the home page and play guide are published in all four)',
    ],
    tone: 'gold',
    friend: 'zippy',
  },
  {
    slug: 'player-experience-designer',
    title: 'Player Experience (Game UX) Designer',
    team: 'Design',
    employmentType: 'FULL_TIME',
    employmentLabel: 'Full-time',
    summary:
      'Shape how OutBrick feels in the hand — from the first board to the 2,000th — across iPhone, iPad, Mac, Apple TV, Vision Pro and Apple Watch.',
    about: [
      'OutBrick is a one-finger game: slide a brick and it glides until something stops it. Everything around that gesture — the clear card, the shop, lives, undos, the Journey map of 167 villages — has to feel calm, fair and obvious. That is your job.',
      'You will design flows and screens, prototype them, watch real people play, and turn what you see into changes that ship. Accessibility is not a pass at the end here: colour-blind glyphs are on by default and every brick is a VoiceOver element, and you will keep it that way.',
    ],
    responsibilities: [
      'Design and prototype new features and improvements across all six Apple platforms the game runs on',
      'Run lightweight playtests and usability sessions, and write up what players actually did',
      'Own the clarity of monetisation screens: lives, the shop, Brick Pass and Remove Ads must be understood at a glance, never pushed',
      'Work with engineering on onboarding and difficulty, using the solver data behind every board',
      'Keep accessibility first-class: VoiceOver, Larger Text, Reduce Motion and colour-blind play',
    ],
    requirements: [
      'A portfolio of shipped interaction or UX design work on mobile — games especially welcome',
      'Strong prototyping skills (Figma, or code, or both)',
      'Working knowledge of Apple’s Human Interface Guidelines and iOS accessibility features',
      'Evidence that you test your ideas with real people and change your mind when they show you something',
    ],
    niceToHave: [
      'Experience designing for iPad, Mac, Apple TV, visionOS or watchOS',
      'Motion design skills, and restraint in using them',
      'Experience with casual-game economies designed to be fair rather than aggressive',
    ],
    tone: 'teal',
    friend: 'flurry',
  },
  {
    slug: 'ai-ml-engineer',
    title: 'AI/ML Engineer — Level Generation & Solver',
    team: 'Engineering',
    employmentType: 'FULL_TIME',
    employmentLabel: 'Full-time',
    summary:
      'Build the systems behind OutBrick’s boards: procedural level generation, the solver that verifies every board, and gentle, on-device personalisation.',
    about: [
      'Every one of OutBrick’s 2,000 boards was cleared by a solver before it shipped, so no player ever meets a dead end. You will own that pipeline and push it further: generating boards that are interesting as well as solvable, grading their difficulty, and setting move targets that feel fair.',
      'You will also explore personalisation — pacing difficulty to the player in front of the board — under one firm constraint: OutBrick has no analytics SDK and does not collect gameplay data, so anything that adapts to a player has to run on the device.',
    ],
    responsibilities: [
      'Own and extend the board solver and its verification of every shipped board',
      'Build procedural generation for new chapters, with difficulty grading and move-target setting',
      'Research on-device personalisation of pacing and hints that needs no data to leave the device',
      'Build tooling so designers can generate, inspect and tune boards themselves',
      'Keep the pipeline reproducible and the results explainable to a non-specialist',
    ],
    requirements: [
      'Strong software engineering in Swift, Python, C++ or Rust — and willingness to work across them',
      'Experience with search and planning (A*, IDA*, BFS/DFS with pruning, constraint solving) or combinatorial optimisation',
      'Practical machine-learning experience, from data to evaluation',
      'The judgement to choose a simple heuristic over a model when the heuristic is better',
    ],
    niceToHave: [
      'Experience with procedural content generation for games',
      'On-device ML on Apple platforms (Core ML, Create ML, Metal)',
      'A published paper, talk or open-source project on puzzles, search or PCG',
    ],
    tone: 'purple',
    friend: 'vio',
  },
  {
    slug: 'community-social-media-manager',
    title: 'Community & Social Media Manager',
    team: 'Community',
    employmentType: 'FULL_TIME',
    employmentLabel: 'Full-time',
    summary:
      'Start and grow OutBrick’s community on TikTok, YouTube, Instagram and Snapchat, and look after the creators who make things with the game.',
    about: [
      'OutBrick is live on TikTok, with YouTube, Instagram, Snapchat and X to follow under the same @outbrick handle. You will launch them and turn all five into places people enjoy: board challenges, “can you beat the target?” clips, the nine brick friends, and the stories behind the game.',
      'You will also be the first person creators and affiliates talk to — helping them make good things, making sure they disclose what they should, and bringing what the community says back to the team.',
    ],
    responsibilities: [
      'Plan, make and post short-form video and social content across TikTok, YouTube, Instagram and Snapchat',
      'Launch the profiles that are not open yet, and keep one consistent voice across all of them',
      'Reply to comments and messages, and route support questions to the right place',
      'Look after creators and affiliates: onboarding, briefs, and checking disclosure',
      'Report what worked and what did not, honestly, every month',
    ],
    requirements: [
      'Hands-on experience growing a brand or creator account on at least two of these platforms',
      'You can shoot and edit short vertical video yourself',
      'A friendly, patient voice in public — including with people who are cross',
      'Good judgement about what not to post',
    ],
    niceToHave: [
      'Experience in games or with a gaming audience',
      'Experience running a creator or ambassador programme',
      'A second language among French, German, Spanish or Japanese',
    ],
    tone: 'pink',
    friend: 'poppy',
  },
  {
    slug: 'growth-aso-specialist',
    title: 'Growth & App Store Optimisation (ASO) Specialist',
    team: 'Marketing',
    employmentType: 'CONTRACTOR',
    employmentLabel: 'Contract',
    summary:
      'Help more of the right players find OutBrick: App Store product pages, keywords, custom product pages, in-app events and campaign measurement.',
    about: [
      'OutBrick is on the App Store as OutBrick: Block Sort Puzzle. You will make it easier to find and easier to say yes to — keywords, screenshots, the product page and its tests — and help us measure where players come from without adding tracking to the game.',
      'Measurement here uses what Apple provides: App Store Connect’s App Analytics, campaign links and product page optimisation. You will set that up properly, including the campaign links behind the affiliate programme.',
    ],
    responsibilities: [
      'Research keywords and optimise the listing in every storefront we focus on',
      'Plan and run product page optimisation tests and custom product pages',
      'Set up and maintain App Analytics campaign links for the site, creators and affiliates',
      'Plan in-app events and feature pitches with the content lead',
      'Advise on Apple Search Ads, and report results monthly',
    ],
    requirements: [
      'Proven ASO results for iOS apps or games, with examples',
      'Fluency in App Store Connect, App Analytics and product page optimisation',
      'Comfort with spreadsheets and turning numbers into a clear recommendation',
      'An understanding of privacy-respecting measurement (no fingerprinting, no third-party tracking SDKs)',
    ],
    niceToHave: [
      'Apple Search Ads campaign management',
      'Experience with a localised game in several storefronts',
      'Creative skills for screenshots and app previews',
    ],
    tone: 'blue',
    friend: 'bloo',
  },
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

/** The JobPosting `description`: Google asks for HTML with the full role, not a summary. */
export function jobDescriptionHtml(job: Job): string {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const list = (items: string[]) => `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
  return [
    `<p>${esc(job.summary)}</p>`,
    ...job.about.map((p) => `<p>${esc(p)}</p>`),
    '<h3>What you’ll do</h3>',
    list(job.responsibilities),
    '<h3>What you’ll bring</h3>',
    list(job.requirements),
    '<h3>Nice to have</h3>',
    list(job.niceToHave),
    `<p>${esc(`Remote. Open to applicants living in ${hiringCountriesText()}. ${job.employmentLabel}.`)}</p>`,
  ].join('');
}

// ---------------------------------------------------------------------------------------
// Press

export const pressBoilerplate =
  'OutBrick is an independent games company founded by Mourad Hamdi. Its game, OutBrick: Block Sort Puzzle, is a sliding-brick colour-sort puzzle for iPhone, iPad, Mac, Apple TV, Apple Vision Pro and Apple Watch: 2,000 solver-verified boards across 100 chapters, a Journey of 167 brick-built villages, and nine brick friends. It is free on the App Store, with optional in-app purchases and no subscription. More at outbrick.site.';

export const founderQuote =
  'We wanted a puzzle that respects the person holding the phone. A solver cleared every board in OutBrick before it shipped, so when a board looks impossible, it isn’t — the way out is there, and finding it is yours. There is no clock anywhere in the game, and we say plainly how lives and ads work, because a calm game shouldn’t need small print.';
