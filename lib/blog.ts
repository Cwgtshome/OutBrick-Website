export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export type BlogReference = {
  id: string;
  label: string;
  citation: string;
  url: string;
};

export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
  sourceIds?: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  categoryColor: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  authorId: string;
  image: string;
  imageAlt: string;
  tags: string[];
  intro: string;
  keyTakeaways: string[];
  sections: BlogSection[];
  references: BlogReference[];
  relatedSlugs: string[];
  faqs?: Array<{ question: string; answer: string }>;
};

export const authors: Author[] = [
  {
    id: 'mourad-hamdi',
    name: 'Mourad Hamdi',
    role: 'Founder & game designer',
    bio: 'Mourad makes small, thoughtful games for the space between one task and the next. OutBrick is his ongoing experiment in calmer play.',
    initials: 'MH',
  },
  {
    id: 'outbrick-editorial',
    name: 'OutBrick Editorial Desk',
    role: 'Player experience & design research',
    bio: 'The OutBrick Editorial Desk turns player research, accessibility practice, and game-making lessons into useful, readable notes.',
    initials: 'OB',
  },
];

const refs = {
  motivation: {
    id: 'motivation-2010',
    label: 'Przybylski, Rigby, & Ryan (2010)',
    citation: 'Przybylski, A. K., Rigby, C. S., & Ryan, R. M. (2010). A motivational model of video game engagement. Review of General Psychology, 14(2), 154–166.',
    url: 'https://doi.org/10.1037/a0019440',
  },
  benefits: {
    id: 'benefits-2014',
    label: 'Granic, Lobel, & Engels (2014)',
    citation: 'Granic, I., Lobel, A., & Engels, R. C. M. E. (2014). The benefits of playing video games. The American Psychologist, 69(1), 66–78.',
    url: 'https://doi.org/10.1037/a0034857',
  },
  restoration: {
    id: 'restoration-2017',
    label: 'Rupp et al. (2017)',
    citation: 'Rupp, M. A., Sweetman, R., Sosa, A. E., Smither, J. A., & McConnell, D. S. (2017). Searching for affective and cognitive restoration: Examining the restorative effects of casual video game play. Human Factors, 59(7), 1096–1107.',
    url: 'https://doi.org/10.1177/0018720817715360',
  },
  casualStress: {
    id: 'casual-stress-2021',
    label: 'Stress-reducing effects study (2021)',
    citation: 'Desai, V., Gupta, A., Andersen, L., Ronnestrand, B., & Wong, M. (2021). Stress-reducing effects of playing a casual video game among undergraduate students. Trends in Psychology, 29(3), 563–579.',
    url: 'https://doi.org/10.1007/s43076-021-00062-6',
  },
  puzzlePilot: {
    id: 'puzzle-pilot-2023',
    label: 'Urwyler et al. (2023)',
    citation: 'Urwyler, P., Gupta, R. K., Falkner, M., Niklaus, J., Müri, R. M., & Nef, T. (2023). Tablet-based puzzle game intervention for cognitive function and well-being in healthy adults: Pilot feasibility randomized controlled trial. JMIR Aging, 6, e46177.',
    url: 'https://doi.org/10.2196/46177',
  },
  timeWellbeing: {
    id: 'time-wellbeing-2022',
    label: 'Vuorre et al. (2022)',
    citation: 'Vuorre, M., Johannes, N., Magnusson, K., & Przybylski, A. K. (2022). Time spent playing video games is unlikely to impact well-being. Royal Society Open Science, 9(7), 220411.',
    url: 'https://doi.org/10.1098/rsos.220411',
  },
  gamingFit: {
    id: 'gaming-fit-2025',
    label: 'Ballou et al. (2025)',
    citation: 'Ballou, N., Vuorre, M., Hakman, T., Magnusson, K., & Przybylski, A. K. (2025). Perceived value of video games, but not hours played, predicts mental well-being in casual adult Nintendo players. Royal Society Open Science, 12(3).',
    url: 'https://doi.org/10.1098/rsos.241174',
  },
  motivationsReview: {
    id: 'motivations-review-2022',
    label: 'Cheah, Shimul, & Phau (2022)',
    citation: 'Cheah, I., Shimul, A. S., & Phau, I. (2022). Motivations of playing digital games: A review and research agenda. Psychology & Marketing, 39(5), 937–950.',
    url: 'https://doi.org/10.1002/mar.21631',
  },
  problematicMotivation: {
    id: 'problematic-motivation-2022',
    label: 'Bäcklund et al. (2022)',
    citation: 'Bäcklund, C., Elbe, P., Gavelin, H. M., Eriksson Sörman, D., & Ljungberg, J. K. (2022). Gaming motivations and gaming disorder symptoms: A systematic review and meta-analysis. Journal of Behavioral Addictions, 11(3), 667–688.',
    url: 'https://doi.org/10.1556/2006.2022.00053',
  },
  sleep: {
    id: 'sleep-2010',
    label: 'Weaver et al. (2010)',
    citation: 'Weaver, D. J., Gradisar, M. J., Dohnt, J. D., Lovato, H., & Douglas, M. (2010). The effect of presleep video-game playing on adolescent sleep. Journal of Clinical Sleep Medicine, 6(2), 184–189.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2854707/',
  },
  sleepReview: {
    id: 'sleep-review-2021',
    label: 'Kristensen et al. (2021)',
    citation: 'Kristensen, H. E., Pallesen, S., King, D. L., et al. (2021). Problematic gaming and sleep: A systematic review and meta-analysis. Frontiers in Psychiatry, 12, 675237.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8216490/',
  },
  flowReview: {
    id: 'flow-review-2019',
    label: 'Ma et al. (2019)',
    citation: 'Ma, S. L. L. L., Bechard-Evans, M., et al. (2019). The use and effect of video game design theory in the creation of game-based systems for upper limb stroke rehabilitation. JMIR Serious Games, 7(2), e12131.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6453078/',
  },
  flowAge: {
    id: 'flow-age-2025',
    label: 'Wang et al. (2025)',
    citation: 'Wang, J., et al. (2025). Age differences in flow experience during body movement–controlled video game rehabilitation tasks: Cross-sectional study. JMIR Serious Games.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12571201/',
  },
  telemetry: {
    id: 'telemetry-2023',
    label: 'Vuorre et al. (2023)',
    citation: 'Vuorre, M., Magnusson, K., Johannes, N., Butlin, J., Przybylski, A. K., et al. (2023). An intensive longitudinal dataset of in-game player behaviour and well-being in PowerWash Simulator. Scientific Data, 10, 622.',
    url: 'https://doi.org/10.1038/s41597-023-02530-3',
  },
  pew: {
    id: 'pew-teens-2024',
    label: 'Pew Research Center (2024)',
    citation: 'Gottfried, J., & Sidoti, O. (2024, May 9). Teens and video games today. Pew Research Center.',
    url: 'https://www.pewresearch.org/internet/2024/05/09/teens-and-video-games-today/',
  },
  who: {
    id: 'who-gaming-disorder',
    label: 'World Health Organization (n.d.)',
    citation: 'World Health Organization. (n.d.). Gaming disorder. Retrieved September 4, 2026, from https://www.who.int/standards/classifications/frequently-asked-questions/gaming-disorder',
    url: 'https://www.who.int/standards/classifications/frequently-asked-questions/gaming-disorder',
  },
  harvardBrain: {
    id: 'harvard-brain-training-2022',
    label: 'Harvard Health Publishing (2022)',
    citation: 'Bilodeau, K. (2022, February 1). Can brain training smartphone apps and computer games really help you stay sharp? Harvard Health Publishing.',
    url: 'https://www.health.harvard.edu/mind-and-mood/can-brain-training-smartphone-apps-and-computer-games-really-help-you-stay-sharp',
  },
  harvardGame: {
    id: 'harvard-game-2012',
    label: 'Harvard Gazette (2012)',
    citation: 'Reuell, P. (2012, March 13). A therapist at your fingertips. Harvard Gazette.',
    url: 'https://news.harvard.edu/gazette/story/2012/03/a-therapist-at-your-fingertips/',
  },
  mitFabO: {
    id: 'mit-fabo-2022',
    label: 'Turakhia (2022)',
    citation: 'Turakhia, D. (2022, July 14). 3 Questions: Teaching computational maker skills through gaming. MIT News.',
    url: 'https://news.mit.edu/2022/3-questions-dishita-turakhia-teaching-computational-maker-skills-through-gaming-0714',
  },
  mitSocial: {
    id: 'mit-social-mobile-2015',
    label: 'Sra & Schmandt (2015)',
    citation: 'Sra, M., & Schmandt, C. (2015). Expanding social mobile games beyond the device screen. MIT Media Lab.',
    url: 'https://www.media.mit.edu/publications/expanding-social-mobile-games-beyond-the-device-screen/',
  },
  w3cColor: {
    id: 'w3c-color',
    label: 'W3C Web Accessibility Initiative (n.d.)',
    citation: 'World Wide Web Consortium. (n.d.). Understanding Success Criterion 1.4.1: Use of color. Web Accessibility Initiative.',
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/use-of-color',
  },
  microsoftGames: {
    id: 'microsoft-game-accessibility',
    label: 'Microsoft (n.d.)',
    citation: 'Microsoft. (n.d.). Making games accessible. Microsoft Learn.',
    url: 'https://learn.microsoft.com/en-us/windows/uwp/gaming/accessibility-for-games',
  },
  rovioHistory: {
    id: 'rovio-history',
    label: 'Rovio Entertainment (n.d.)',
    citation: 'Rovio Entertainment. (n.d.). Rovio history. Retrieved September 4, 2026, from https://www.rovio.com/rovio-history/',
    url: 'https://www.rovio.com/rovio-history/',
  },
  rovioAnnual: {
    id: 'rovio-annual-2019',
    label: 'Rovio Entertainment (2019)',
    citation: 'Rovio Entertainment. (2019). Annual report 2019. https://www.rovio.com/investor-archive/annual-report-2019/',
    url: 'https://www.rovio.com/investor-archive/annual-report-2019/',
  },
  monumentValley: {
    id: 'monument-valley-ustwo',
    label: 'ustwo (n.d.)',
    citation: 'ustwo. (n.d.). Monument Valley x ustwo. Retrieved September 4, 2026, from https://ustwo.com/work/monument-valley/',
    url: 'https://ustwo.com/work/monument-valley/',
  },
  monumentGdc: {
    id: 'monument-gdc-2014',
    label: 'Wong (2014)',
    citation: 'Wong, K. (2014). Designing Monument Valley: Less game, more experience [Conference session]. Game Developers Conference.',
    url: 'https://www.gdcvault.com/play/1021380/Designing-Monument-Valley-Less-Game',
  },
  minecraft: {
    id: 'minecraft-xbox-2024',
    label: 'Skrebels (2024)',
    citation: 'Skrebels, J. (2024, May 17). The most important moments in Minecraft’s first 15 years. Xbox Wire.',
    url: 'https://news.xbox.com/en-us/2024/05/17/minecraft-15-years-most-important-moments/?ver=3.7.1',
  },
  tetris: {
    id: 'tetris-history',
    label: 'The Tetris Company (n.d.)',
    citation: 'The Tetris Company. (n.d.). The history of Tetris. Retrieved September 4, 2026, from https://tetris.com/news/the-history-of-tetris',
    url: 'https://tetris.com/news/the-history-of-tetris',
  },
  wordle: {
    id: 'wordle-axios-2022',
    label: 'Totilo (2022)',
    citation: 'Totilo, S. (2022, March 25). Wordle used to have a much harder wordlist. Axios.',
    url: 'https://www.axios.com/2022/03/25/wordle-wordlist-josh-wardle-gdc',
  },
};

export const articles: BlogArticle[] = [
  {
    slug: 'why-two-minute-puzzles-feel-good',
    title: 'Why a two-minute puzzle can feel like a proper reset',
    dek: 'A research-backed look at competence, attention, and the small satisfactions that make a short OutBrick session worth returning to.',
    category: 'Player habits',
    categoryColor: 'green',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 4, 2026',
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/why-two-minute-puzzles-feel-good.png',
    imageAlt: 'A glossy puzzle board with a final brick sliding into a matching gate',
    tags: ['puzzle games', 'well-being', 'motivation', 'casual gaming'],
    intro: 'Not every game session needs to be an odyssey. Sometimes the best version of play is a small, complete loop: notice a pattern, make a choice, see the board respond, and leave with the feeling that something clicked.',
    keyTakeaways: [
      'A short session can be satisfying when the player gets clear goals, visible feedback, and a real sense of agency.',
      'Research supports modest, short-term mood and engagement effects from casual play, not sweeping claims about intelligence or treatment.',
      'OutBrick is built around a complete little loop: one board, one decision at a time, with undo always available.',
    ],
    sections: [
      {
        id: 'the-feeling-of-a-clean-clear',
        title: 'The feeling of a clean clear',
        paragraphs: [
          'A satisfying puzzle does not need to overwhelm you with content. It needs to make the relationship between your choice and the result easy to feel. Slide a brick, read the opening, and watch the gate answer back. That little exchange is the emotional centre of OutBrick.',
          'The motivational model proposed by Przybylski, Rigby, and Ryan describes game engagement through three basic needs: competence, autonomy, and relatedness. A small puzzle can touch the first two immediately. You understand a rule, then prove something to yourself by using it. The pleasure comes from authorship as much as from winning.',
        ],
        sourceIds: ['motivation-2010'],
      },
      {
        id: 'what-short-play-can-and-cannot-do',
        title: 'What short play can—and cannot—do',
        paragraphs: [
          'A controlled study of casual game play found stronger short-term affective restoration and engagement after a cognitively demanding task, while the evidence for broad cognitive restoration was less certain. That distinction matters. A game can help you feel more ready to continue without turning into a magical brain upgrade.',
          'A separate study comparing a casual game with a body-scan mindfulness exercise found reductions in psychological and physiological stress in both groups. Mindfulness performed better on self-reported psychological stress, so the honest takeaway is not that games replace other practices. It is that a well-sized game can be one modest option in a larger day.',
        ],
        sourceIds: ['restoration-2017', 'casual-stress-2021', 'benefits-2014'],
      },
      {
        id: 'the-outbrick-loop',
        title: 'The OutBrick loop is intentionally small',
        paragraphs: [
          'OutBrick starts with a board that can be understood at a glance. You do not need to remember a quest log, manage a stamina meter, or wait for a timer to expire. The board tells you what matters: the bricks, the open lanes, and the matching gates.',
          'Undo is part of the loop rather than a punishment for using it. That changes the emotional temperature of experimentation. You can try a move, learn from the result, and keep the useful part of the attempt. The goal is not to make every board effortless; it is to make curiosity safer than hesitation.',
        ],
        bullets: ['One readable board at a time', 'A clear action-to-feedback relationship', 'Recovery tools that preserve curiosity', 'A finish line that arrives before the session feels heavy'],
      },
      {
        id: 'take-the-good-bit-with-you',
        title: 'Take the good bit with you',
        paragraphs: [
          'The best two-minute session is not the one that keeps you captive. It is the one that gives you a small feeling of progress and lets you decide what happens next. If you have time for another board, there is always another board. If you need to go, the game can wait.',
          'That is why OutBrick treats calm as a design input. The research does not say every player benefits in the same way, and it does not prove a universal effect. It does suggest a useful north star: build a game that respects agency, makes progress legible, and leaves the player with more choice than they had before.',
        ],
        sourceIds: ['motivation-2010', 'time-wellbeing-2022'],
      },
    ],
    references: [refs.motivation, refs.benefits, refs.restoration, refs.casualStress, refs.timeWellbeing],
    relatedSlugs: ['designing-for-real-life-play', 'daily-rituals-that-dont-demand-you', 'kinder-difficulty-curve'],
    faqs: [
      { question: 'Is OutBrick intended to improve mental health?', answer: 'No. OutBrick is a recreational puzzle. Research on casual play can inform design, but it does not make the game a treatment or guarantee a well-being outcome.' },
      { question: 'Why are OutBrick sessions short?', answer: 'Short sessions make the core puzzle legible and let play fit around real life. You can keep playing, but the game does not require a long uninterrupted block of time.' },
    ],
  },
  {
    slug: 'designing-for-real-life-play',
    title: 'Designing a game for the life players actually have',
    dek: 'Why “gaming life fit” is a better design question than chasing a bigger hours-played number.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 4, 2026',
    readingTime: '7 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/designing-for-real-life-play.png',
    imageAlt: 'A phone-sized puzzle session beside a teacup and a bright window',
    tags: ['game design', 'mobile gaming', 'healthy play', 'research'],
    intro: 'A game can be delightful and still fit badly into a day. The more useful design question is not “How do we make players stay?” but “Does this experience fit the way people want to spend their time?”',
    keyTakeaways: [
      'Large-scale studies caution against treating hours played as a complete measure of player well-being.',
      'Fit includes when, why, and how a player plays—not just the clock.',
      'A pause-friendly game should make stopping, returning, and finding your place easy.',
    ],
    sections: [
      {
        id: 'hours-are-not-the-whole-story',
        title: 'Hours are not the whole story',
        paragraphs: [
          'Two recent studies from the Oxford Internet Institute make a useful distinction. One tracked objectively logged play across tens of thousands of adult players and found little evidence that gameplay time itself causally changed well-being. Another studied 703 casual adult Nintendo players across more than 140,000 hours and found that perceived value—how well game time fit into life—was more informative than raw playtime.',
          'This is not a permission slip to ignore context. It is a reminder that a clock is a blunt instrument. The same number of minutes can feel like welcome rest, social connection, avoidance, or an unwanted obligation depending on the person and the day.',
        ],
        sourceIds: ['time-wellbeing-2022', 'gaming-fit-2025'],
      },
      {
        id: 'fit-is-a-design-material',
        title: 'Fit is a design material',
        paragraphs: [
          'For a mobile puzzle, fit shows up in small decisions. Does the first screen explain itself? Can a player finish a board without a surprise interruption? Does returning after a week feel welcoming rather than like a test? Is progress stored in a way that reduces memory work?',
          'OutBrick uses one-board goals, persistent progress, and a Home Screen surface that tells you where you are. The design is deliberately glanceable. It is meant to survive the handoff between a spare minute and a busy afternoon without making the player reconstruct the whole experience.',
        ],
        bullets: ['A session has a natural stopping point', 'A return path is visible without pressure', 'Progress is legible after time away', 'The game does not need a streak to make today count'],
      },
      {
        id: 'research-the-quality-of-play',
        title: 'Research the quality of play',
        paragraphs: [
          'A Nature Scientific Data paper built an intensive longitudinal dataset around PowerWash Simulator, combining repeated well-being measures with millions of in-game events. Its contribution is methodological: researchers can learn more when they study what players do and how they feel over time, instead of relying only on retrospective estimates of hours.',
          'That approach also changes what a studio should pay attention to. A healthy signal is not simply more sessions. It might be a player finding a comfortable difficulty, returning because a mechanic feels meaningful, or stopping after a satisfying endpoint. Metrics should help a team notice those patterns, not flatten them into one leaderboard.',
        ],
        sourceIds: ['telemetry-2023'],
      },
      {
        id: 'a-small-design-promise',
        title: 'A small design promise',
        paragraphs: [
          'OutBrick’s promise is simple: give the player a board worth thinking about, then give the player their time back. That means no ad gate between moves, no lives counter making a mistake feel expensive, and no requirement to keep the app open for the game to remain interesting.',
          'We still want players to return. The difference is where the invitation comes from. It comes from a board that has a clear idea, a mascot that remembers the tone, and the quiet satisfaction of seeing a path that was not visible thirty seconds ago.',
        ],
        sourceIds: ['motivation-2010', 'gaming-fit-2025'],
      },
    ],
    references: [refs.timeWellbeing, refs.gamingFit, refs.telemetry, refs.motivation],
    relatedSlugs: ['why-two-minute-puzzles-feel-good', 'when-to-play-and-when-to-pause', 'daily-rituals-that-dont-demand-you'],
    faqs: [
      { question: 'Does OutBrick track my play time?', answer: 'The app is designed around on-device progress and does not use third-party analytics SDKs. This article discusses research methods, not a promise that every version of every game measures nothing.' },
      { question: 'What does “gaming life fit” mean?', answer: 'It is a player’s own sense that game time fits with the rest of their life. It is different from a simple total of hours.' },
    ],
  },
  {
    slug: 'angry-birds-success-lessons',
    title: 'What Angry Birds teaches about the long road to a hit',
    dek: 'Rovio’s own history is a useful reminder that iconic games are often the visible tip of a much longer practice.',
    category: 'Success stories',
    categoryColor: 'red',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 4, 2026',
    readingTime: '7 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/angry-birds-success-lessons.png',
    imageAlt: 'Abstract red launcher blocks aimed at a playful stack of green toy bricks',
    tags: ['Angry Birds', 'mobile games', 'game success', 'iteration'],
    intro: 'Success stories get retold as lightning strikes. Rovio’s corporate history tells a more useful story: dozens of attempts, a clear mobile opportunity, and a team that kept making games long enough to be ready when the right idea arrived.',
    keyTakeaways: [
      'Rovio describes Angry Birds as its 52nd game, after 51 earlier projects and a near-bankruptcy moment.',
      'The lesson is not “keep shipping until luck happens”; it is to learn from each compact experiment.',
      'A hit can grow into a world, but the first job is still to make the core interaction land.',
    ],
    sections: [
      {
        id: 'the-52nd-game',
        title: 'The 52nd game matters',
        paragraphs: [
          'Rovio’s history says the first Angry Birds game was its 52nd game. The company had already developed dozens of titles for early mobile platforms, and describes the team as near bankruptcy and in need of a major hit. Angry Birds was made in eight months, then downloads rose sharply within weeks.',
          'That is a success story, but it is not a recipe. The source is a first-party company history, so its language is promotional and should be read alongside other evidence. The practical lesson is narrower: the visible breakthrough was supported by a large amount of prior iteration that rarely makes the headline.',
        ],
        sourceIds: ['rovio-history'],
      },
      {
        id: 'make-the-core-readable',
        title: 'Make the core readable',
        paragraphs: [
          'Angry Birds made a launch, aim, and collision legible enough to understand quickly. The interaction was playful, but it still gave the player a clean mental model: pull, release, watch the structure respond. That readability is one reason a simple mechanic could carry many levels and many kinds of player.',
          'OutBrick is built from the same respect for the first few seconds. A brick should announce its colour, shape, and direction. A gate should make the destination clear. A satisfying game does not hide its rules to feel clever; it gives the player enough signal to become clever with them.',
        ],
        sourceIds: ['rovio-history', 'motivation-2010'],
      },
      {
        id: 'a-franchise-is-a-conversation',
        title: 'A franchise is a conversation',
        paragraphs: [
          'Rovio’s 2019 annual report describes a strategy that extended beyond play into watching, consuming, and engaging. It also reports that live operations and updates helped some titles continue earning over several years. Those are business facts from an interested party, not proof that one tactic guarantees a durable community.',
          'The design insight is still valuable: a game world becomes stronger when its surrounding touchpoints feel like the same world. OutBrick uses mascots, widgets, daily bricks, and a calm visual language as invitations back into the board—not as separate products competing for attention.',
        ],
        sourceIds: ['rovio-annual-2019'],
      },
      {
        id: 'what-we-keep-for-outbrick',
        title: 'What we keep for OutBrick',
        paragraphs: [
          'We keep the part of the Angry Birds story that is easy to use and hard to fake: keep practicing the craft, keep the first interaction clear, and let the personality of the game travel with the player. We leave behind the idea that success is only a download chart.',
          'OutBrick is still a small game. Its version of ambition is a board that feels good in the hand, a player who can return without homework, and a body of work that gets better one brick at a time.',
        ],
        sourceIds: ['rovio-history', 'rovio-annual-2019'],
      },
    ],
    references: [refs.rovioHistory, refs.rovioAnnual, refs.motivation],
    relatedSlugs: ['monument-valley-less-game-more-experience', 'minecraft-layered-discovery', 'tetris-simple-rules-infinite-variation'],
  },
  {
    slug: 'monument-valley-less-game-more-experience',
    title: 'Monument Valley and the power of making less feel complete',
    dek: 'A closer look at ustwo’s “less game, more experience” idea—and what OutBrick borrows from it.',
    category: 'Success stories',
    categoryColor: 'pink',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 4, 2026',
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/monument-valley-less-game-more-experience.png',
    imageAlt: 'An impossible pastel staircase assembled from original glossy toy bricks',
    tags: ['Monument Valley', 'mobile games', 'UX', 'puzzle design'],
    intro: 'Some games earn attention by adding more. Monument Valley became a landmark by making each screen feel like a small, finished place. The design story is less about minimalism as a look and more about choosing what deserves the player’s attention.',
    keyTakeaways: [
      'ustwo describes Monument Valley as a complete mobile journey without grind, failure pressure, or leaderboard dependence.',
      'GDC frames its design around combining impossible architecture with a user-experience mindset.',
      'OutBrick borrows the principle of a complete moment: one board should have its own shape, mood, and ending.',
    ],
    sections: [
      {
        id: 'a-screen-can-be-a-place',
        title: 'A screen can be a place',
        paragraphs: [
          'ustwo’s project page describes Monument Valley as a short, complete experience: novel mechanics without grind, failure pressure, collectible stars, or leaderboards. The studio’s stated ambition was for players to finish the whole game on mobile, from beginning to end.',
          'That first-party account explains intention rather than measuring causality. It does not prove that any single design choice caused the game’s success. But it gives us a clear design stance: a mobile game can be designed as a sequence of authored moments instead of an endless demand for more time.',
        ],
        sourceIds: ['monument-valley-ustwo'],
      },
      {
        id: 'less-game-more-experience',
        title: 'Less game, more experience',
        paragraphs: [
          'The GDC session description for lead designer Ken Wong connects M. C. Escher’s impossible architecture with ustwo’s background as a UX studio. Each screen was treated as a piece of art, and the team rethought the game as a user experience rather than a test of difficulty alone.',
          'That shift is useful for puzzle makers. Difficulty is only one dimension of value. A board can also be memorable because it has a strong silhouette, a small surprise, or a moment where the player sees the rule from a new angle. OutBrick’s deep indigo shell and toy-like materials are there to make those moments feel held, not hurried.',
        ],
        sourceIds: ['monument-gdc-2014'],
      },
      {
        id: 'complete-does-not-mean-easy',
        title: 'Complete does not mean easy',
        paragraphs: [
          'A complete experience can still ask for concentration. The important difference is whether the player can understand the purpose of the challenge and whether the game respects the player after the challenge is over.',
          'OutBrick lets a board be knotty without making the whole app feel hostile. Undo and wedge recovery keep the emotional arc attached to solving, not to proving that a mistake deserves a penalty. The board can be difficult. The relationship does not have to be.',
        ],
        sourceIds: ['monument-valley-ustwo', 'flow-review-2019'],
      },
      {
        id: 'the-outbrick-translation',
        title: 'The OutBrick translation',
        paragraphs: [
          'For OutBrick, “less game” means less friction between the player and the idea of the board. One screen can be enough. One move can be enough to teach a rule. One clear can be enough to end a session on a good note.',
          'The aim is not to make a smaller version of someone else’s success. It is to make a world in which a small puzzle feels complete on its own terms.',
        ],
        sourceIds: ['monument-gdc-2014', 'monument-valley-ustwo'],
      },
    ],
    references: [refs.monumentValley, refs.monumentGdc, refs.flowReview],
    relatedSlugs: ['angry-birds-success-lessons', 'why-two-minute-puzzles-feel-good', 'tetris-simple-rules-infinite-variation'],
  },
  {
    slug: 'minecraft-layered-discovery',
    title: 'Minecraft’s early lesson: let discovery build the next layer',
    dek: 'How an open-ended beginning grew through creation, survival, crafting, multiplayer, and platform expansion.',
    category: 'Success stories',
    categoryColor: 'gold',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 4, 2026',
    readingTime: '7 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/minecraft-layered-discovery.png',
    imageAlt: 'An original block-built landscape with a cave, workbench, and sunrise',
    tags: ['Minecraft', 'discovery', 'systems design', 'game success'],
    intro: 'Minecraft’s early history is a story about layers arriving at the right time. The first version gave players an open field for digging and building; later additions gave that freedom more texture, stakes, and ways to share the result.',
    keyTakeaways: [
      'Xbox Wire’s retrospective describes a sequence from Classic building to Creative, Survival, crafting, multiplayer, and wider platform reach.',
      'A successful system can grow by deepening a player’s existing verbs instead of replacing them every update.',
      'OutBrick uses the same principle at a smaller scale: one clear move first, then more expressive boards and chapters.',
    ],
    sections: [
      {
        id: 'start-with-a-verb',
        title: 'Start with a verb players can feel',
        paragraphs: [
          'Xbox Wire’s 15-year retrospective says Markus Persson began Minecraft in 2009, drawing inspiration from Infiniminer and Dungeon Keeper. The early Classic version let players dig and build freely. Creative and Survival modes followed, then crafting, minecarts, and Survival multiplayer were added during 2010.',
          'The exact milestone list comes from Microsoft’s own editorial channel, so it is useful provenance rather than an independent audit. The design pattern is still clear: the game began with a verb that was immediately understandable, then built new reasons to use it.',
        ],
        sourceIds: ['minecraft-xbox-2024'],
      },
      {
        id: 'layers-that-reward-curiosity',
        title: 'Layers that reward curiosity',
        paragraphs: [
          'A layer works when it makes the player look back at the original verb differently. Crafting changes what gathering means. Survival changes what a safe place means. Multiplayer changes what a build means when another person can see it.',
          'That is different from adding noise. OutBrick’s chapters, daily brick, Endless mode, and mascots are meant to orbit the same core action: slide a brick into the right place. Each layer should give the move a new context without asking the player to learn a second game.',
        ],
        bullets: ['Add depth to an existing action', 'Let players choose how much system they want', 'Make progress visible without turning discovery into homework', 'Allow personal stories to emerge from repeated play'],
        sourceIds: ['minecraft-xbox-2024', 'mit-fabo-2022'],
      },
      {
        id: 'the-value-of-a-personal-trace',
        title: 'The value of a personal trace',
        paragraphs: [
          'MIT’s FabO project explored how gameplay objects could be brought into the physical world. In an exploratory study of 47 fabricated objects from 33 games, the researchers found that learners attached meanings such as pride, creative self-expression, resources, expanded play, and shared experience to what they made.',
          'The point is not that every game needs a 3D printer. It is that play becomes stickier when it leaves behind something that feels like yours. In OutBrick, a cleared chapter, a favourite mascot, or a daily brick can work as a small personal trace: a reminder of a moment rather than a demand for another one.',
        ],
        sourceIds: ['mit-fabo-2022'],
      },
      {
        id: 'grow-the-world-with-care',
        title: 'Grow the world with care',
        paragraphs: [
          'Minecraft’s success is often described as infinite, but its early story is more practical: give players a strong verb, let them make meaning with it, and add systems that reward the meaning they are already making.',
          'That is the scale of the lesson OutBrick can use. A new feature should make the board feel more like OutBrick—not like a second app installed inside it.',
        ],
        sourceIds: ['minecraft-xbox-2024'],
      },
    ],
    references: [refs.minecraft, refs.mitFabO],
    relatedSlugs: ['tetris-simple-rules-infinite-variation', 'monument-valley-less-game-more-experience', 'kinder-difficulty-curve'],
  },
  {
    slug: 'tetris-simple-rules-infinite-variation',
    title: 'Tetris proves that simple rules can keep opening up',
    dek: 'A look at constraint, rhythm, and the endless variety inside a very small ruleset.',
    category: 'Game craft',
    categoryColor: 'purple',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 4, 2026',
    readingTime: '6 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/tetris-simple-rules-infinite-variation.png',
    imageAlt: 'Colorful geometric toy blocks descending toward a clean grid',
    tags: ['Tetris', 'puzzle design', 'game craft', 'rules'],
    intro: 'A great ruleset does not need to be large. It needs to create enough consequence that the same action can feel different on the next turn. Tetris remains a masterclass in how constraint becomes expression.',
    keyTakeaways: [
      'The Tetris Company’s history traces the game from a 1984 Electronika 60 experiment to a global platform phenomenon.',
      'Simple rules become deep when timing, space, and commitment keep changing the meaning of the next move.',
      'OutBrick treats each board as a small ruleset with room for planning, recovery, and a personal solution path.',
    ],
    sections: [
      {
        id: 'a-small-origin',
        title: 'A small origin',
        paragraphs: [
          'The official Tetris history identifies Alexey Pajitnov’s first version as a 1984 experiment on an Electronika 60 in Moscow. It then follows Henk Rogers’ discovery of the game, the negotiations for handheld rights, and Nintendo’s decision to include Tetris with the Game Boy.',
          'The rights-holder’s history blends historical record with brand storytelling, so exact sales totals should be treated as company-reported figures. The broader sequence is enough for a design lesson: a compact idea can travel when its rules survive the journey to a new context.',
        ],
        sourceIds: ['tetris-history'],
      },
      {
        id: 'constraint-creates-meaning',
        title: 'Constraint creates meaning',
        paragraphs: [
          'A falling shape only becomes urgent because the board has limited space. The same piece can be a gift, a problem, or a setup depending on what is already there. Simple rules create variety when the player’s previous decisions change the meaning of the next one.',
          'OutBrick’s sliding bricks work the same way. “Move the brick to its gate” is easy to say. The interesting part is that every move changes which lanes are open, which bricks are blocking one another, and which solution remains possible. The rule stays small while the situation keeps moving.',
        ],
        sourceIds: ['tetris-history', 'flow-review-2019'],
      },
      {
        id: 'rhythm-over-noise',
        title: 'Rhythm over noise',
        paragraphs: [
          'The most memorable puzzle games often have a rhythm that players can internalize: see, predict, commit, resolve. Extra systems can be wonderful, but they should support that rhythm rather than interrupt it.',
          'That is why OutBrick uses glossy feedback, haptics, and mascots as punctuation. The board does the thinking. The rest of the world helps the player feel the beat of a clear.',
        ],
        bullets: ['A rule you can explain in one breath', 'A state that changes after every decision', 'Feedback that confirms rather than decorates', 'Variation that comes from context, not confusion'],
        sourceIds: ['motivation-2010', 'tetris-history'],
      },
      {
        id: 'the-next-piece',
        title: 'The next piece',
        paragraphs: [
          'Tetris stays alive because the next piece always creates a new question. OutBrick’s version is quieter: the next board is another small question with a different shape, a different bottleneck, and another opportunity to notice more than you noticed last time.',
          'Simple does not mean shallow. It means the player can see where the depth is coming from.',
        ],
        sourceIds: ['tetris-history', 'flow-review-2019'],
      },
    ],
    references: [refs.tetris, refs.flowReview, refs.motivation],
    relatedSlugs: ['minecraft-layered-discovery', 'monument-valley-less-game-more-experience', 'why-two-minute-puzzles-feel-good'],
  },
  {
    slug: 'daily-rituals-that-dont-demand-you',
    title: 'The case for daily rituals that do not demand you',
    dek: 'Daily play can be a welcome rhythm when it invites attention without turning absence into failure.',
    category: 'Player habits',
    categoryColor: 'orange',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 4, 2026',
    readingTime: '7 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/daily-rituals-that-dont-demand-you.png',
    imageAlt: 'A glowing daily puzzle tile resting on a small toy calendar',
    tags: ['daily games', 'rituals', 'Wordle', 'mobile gaming'],
    intro: 'The appeal of a daily game is not only the puzzle. It is the shape of the invitation. A good daily ritual gives today a small identity without making yesterday’s absence feel like a debt.',
    keyTakeaways: [
      'Pew’s 2024 survey shows that games are both frequent entertainment and a social space for many teens.',
      'Wordle’s daily limit and curated word list demonstrate the power of deliberate boundaries.',
      'OutBrick’s daily brick is designed as a hello, not a streak that can scold you.',
    ],
    sections: [
      {
        id: 'the-social-shape-of-play',
        title: 'The social shape of play',
        paragraphs: [
          'Pew Research Center found that 85% of U.S. teens surveyed in 2023 played video games, with 41% playing daily. Among teen players, 72% said spending time with others was a reason they played, and 47% said they had made an online friend because of a game.',
          'Those numbers describe one U.S. teen sample, not every player or every kind of game. They do show that a “solo” game can still sit inside a social rhythm. People compare, recommend, remember, and share even when they are holding a phone alone.',
        ],
        sourceIds: ['pew-teens-2024'],
      },
      {
        id: 'why-a-limit-can-help',
        title: 'Why a limit can help',
        paragraphs: [
          'Reporting on Wordle’s development describes several deliberate reductions: a smaller list of familiar words, a once-a-day structure inspired by newspaper puzzles, and a shareable result format that players helped popularize. The limits gave the game a social shape and made each puzzle feel like an event that could be discussed without being spoiled by a backlog.',
          'A daily boundary can make a game feel more like a ritual and less like an open tab. But the boundary should be a frame, not a fence. If the player misses a day, the experience should still be glad to see them.',
        ],
        sourceIds: ['wordle-axios-2022'],
      },
      {
        id: 'the-outbrick-daily-brick',
        title: 'The OutBrick daily brick',
        paragraphs: [
          'The daily brick is our smallest recurring invitation. It gives the Home screen a little morning light, but it does not become the only reason to open the app. The core journey keeps moving, Endless is there when you want a longer session, and a missed day does not erase the value of the days around it.',
          'That choice is connected to fit. Research on gaming and well-being suggests that context and perceived value matter more than turning playtime into a single score. A daily feature should help someone mark a moment, not measure their worth.',
        ],
        sourceIds: ['gaming-fit-2025', 'time-wellbeing-2022'],
      },
      {
        id: 'ritual-without-obligation',
        title: 'Ritual without obligation',
        paragraphs: [
          'The difference between a ritual and an obligation is whether the person still has authorship. You can choose the time, the length, and the meaning. The design can offer a bright little marker without making the player bargain with it.',
          'OutBrick wants to be the kind of game that says “there is a board here if you would like one.” That is enough of a reason to return.',
        ],
        sourceIds: ['pew-teens-2024', 'wordle-axios-2022'],
      },
    ],
    references: [refs.pew, refs.wordle, refs.gamingFit, refs.timeWellbeing],
    relatedSlugs: ['designing-for-real-life-play', 'when-to-play-and-when-to-pause', 'why-two-minute-puzzles-feel-good'],
  },
  {
    slug: 'color-shape-accessibility',
    title: 'Why color should never be the only clue in a puzzle',
    dek: 'The case for pairing color with shape, text, and other signals—so a readable board stays readable for more players.',
    category: 'Inclusive design',
    categoryColor: 'teal',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 4, 2026',
    readingTime: '6 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/color-shape-accessibility.png',
    imageAlt: 'Glossy puzzle bricks with distinct engraved shapes alongside their colors',
    tags: ['accessibility', 'color vision', 'inclusive design', 'puzzle games'],
    intro: 'Color is expressive. It is also an unreliable single source of truth. The most welcoming puzzles use color to make a pattern beautiful, then reinforce meaning with shape, text, spacing, or motion.',
    keyTakeaways: [
      'WCAG’s Use of Color guidance says color should not be the only visual means of conveying information.',
      'Microsoft’s game accessibility guidance recommends symbols and patterns alongside color, plus adjustable options.',
      'OutBrick’s studs and glyphs are part of the board’s language, not a mode bolted on after the art is finished.',
    ],
    sections: [
      {
        id: 'color-is-a-great-accent',
        title: 'Color is a great accent, not a gatekeeper',
        paragraphs: [
          'The W3C’s guidance for Success Criterion 1.4.1 is direct: color should not be the only visual means of distinguishing information. The reason is practical. People do not all see colors the same way, and information can disappear when it is encoded only in hue.',
          'This does not mean a product should become gray. It means color can do what it does best—create hierarchy, mood, and emphasis—while another signal carries the rule that a player must not miss.',
        ],
        sourceIds: ['w3c-color'],
      },
      {
        id: 'symbols-make-the-board-clearer',
        title: 'Symbols make the board clearer for everyone',
        paragraphs: [
          'Microsoft’s game accessibility overview recommends communicating information in more than one way, such as an image as well as text or a symbol as well as color. It also asks designers to consider whether a game remains playable with sound muted, on a black-and-white display, and after a long break.',
          'Those are good questions for any puzzle, not only an accessibility checklist. A player who can confirm a match through shape is not doing extra work; they are getting a second route to the same understanding.',
        ],
        sourceIds: ['microsoft-game-accessibility'],
      },
      {
        id: 'how-outbrick-does-it',
        title: 'How OutBrick does it',
        paragraphs: [
          'OutBrick pairs brick colors with studs and glyphs. A circle, triangle, square, diamond, plus, star, bar, or hex can reinforce the identity of a brick or gate. The visual system stays playful because the signals are part of the toy language: little marks you can read with your eyes and your memory.',
          'The app also keeps the option close to the game’s normal flow. Color-blind mode is a first-class setting, and the board remains understandable through more than one channel. We still need testing with players who have different access needs; documentation is not a substitute for feedback.',
        ],
        sourceIds: ['w3c-color', 'microsoft-game-accessibility'],
      },
      {
        id: 'accessibility-is-quality',
        title: 'Accessibility is a quality signal',
        paragraphs: [
          'Inclusive design often improves the base experience because it forces a team to ask whether the game is communicating or merely decorating. That pressure leads to stronger contrast, clearer feedback, better options, and fewer moments where the player has to guess what the screen means.',
          'For a puzzle, clarity is not a concession. It is the material the challenge is made from. If the player cannot reliably read the rule, they are solving the interface instead of solving the board.',
        ],
        sourceIds: ['microsoft-game-accessibility', 'w3c-color'],
      },
    ],
    references: [refs.w3cColor, refs.microsoftGames],
    relatedSlugs: ['kinder-difficulty-curve', 'monument-valley-less-game-more-experience', 'designing-for-real-life-play'],
  },
  {
    slug: 'when-to-play-and-when-to-pause',
    title: 'When to play—and when to put the phone down',
    dek: 'A candid guide to fitting games around sleep, attention, and the rest of a real day.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 4, 2026',
    readingTime: '8 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/when-to-play-and-when-to-pause.png',
    imageAlt: 'A small puzzle board beside a glowing bedside clock and a closing book',
    tags: ['healthy play', 'sleep', 'gaming habits', 'well-being'],
    intro: 'A good game should be honest about the edges of play. Enjoyment matters, and so do sleep, work, relationships, and the ability to stop when you mean to stop.',
    keyTakeaways: [
      'Controlled studies link stimulating presleep gaming with delayed sleep onset in specific samples and contexts.',
      'Meta-analytic evidence focuses on problematic gaming and sleep, not ordinary recreational play.',
      'The World Health Organization defines gaming disorder around impaired control and meaningful impairment—not a simple hour count.',
    ],
    sections: [
      {
        id: 'sleep-is-a-real-design-constraint',
        title: 'Sleep is a real design constraint',
        paragraphs: [
          'In a controlled study of adolescents, playing a video game for 50 minutes before bed delayed sleep onset compared with watching a DVD. A separate prolonged-session experiment used different games and found changes in sleep efficiency and next-morning word recall. The results are specific to the conditions studied, but they support a sensible boundary: intense or stimulating play right before bed may not be the best fit for everyone.',
          'The honest design response is not to label all games harmful. It is to make stopping easy, avoid pretending that a late-night loop has no cost, and give players enough information to make their own choice.',
        ],
        sourceIds: ['sleep-2010'],
      },
      {
        id: 'problematic-is-not-the-same-as-ordinary',
        title: 'Problematic is not the same as ordinary',
        paragraphs: [
          'A systematic review and meta-analysis found an association between problematic gaming and shorter sleep duration, with considerable variation between studies. That variability matters because the evidence concerns a pattern of gaming linked to impairment, not everyone who plays for fun.',
          'The World Health Organization describes gaming disorder through impaired control, increasing priority given to gaming, and continuation despite negative consequences, severe enough to cause significant impairment and usually evident for at least twelve months. It is a clinical definition, not a synonym for “I played longer than planned once.”',
        ],
        sourceIds: ['sleep-review-2021', 'who-gaming-disorder'],
      },
      {
        id: 'our-pause-friendly-defaults',
        title: 'Our pause-friendly defaults',
        paragraphs: [
          'OutBrick has no lives counter, no ad gate, and no requirement to protect a fragile run. A board can be left unfinished. Undo stays available. The daily brick can be missed without turning tomorrow into a punishment. These choices do not solve every problem a player may have, but they lower the amount of pressure the game itself adds.',
          'We also keep the game visually calm and the core session legible. The goal is to make “one more board” a choice, not a trap hidden inside the interface.',
        ],
        bullets: ['Stop after a clear without losing your place', 'Use undo without spending a scarce resource', 'Keep pressure out of the core journey', 'Let settings support the player’s context'],
        sourceIds: ['who-gaming-disorder', 'gaming-fit-2025'],
      },
      {
        id: 'a-useful-question',
        title: 'A useful question to ask yourself',
        paragraphs: [
          'Instead of asking whether a certain number of minutes is universally good or bad, ask: “Is this session fitting the rest of my life today?” If the answer is no—because you are tired, missing sleep, or feeling unable to stop—the kind move is to pause and change the conditions around play.',
          'OutBrick is a game, not a clinician. If gaming is causing serious distress or interfering with daily life, talk with a qualified professional. A thoughtful game should leave room for that sentence.',
        ],
        sourceIds: ['who-gaming-disorder', 'time-wellbeing-2022'],
      },
    ],
    references: [refs.sleep, refs.sleepReview, refs.who, refs.gamingFit, refs.timeWellbeing],
    relatedSlugs: ['designing-for-real-life-play', 'why-two-minute-puzzles-feel-good', 'kinder-difficulty-curve'],
    faqs: [
      { question: 'Does OutBrick recommend a specific daily play limit?', answer: 'No. People and contexts differ. We recommend paying attention to sleep, obligations, and whether you feel in control of your play.' },
      { question: 'Is gaming disorder the same as playing every day?', answer: 'No. WHO’s definition focuses on impaired control, priority over other activities, continuation despite negative consequences, and significant impairment over time.' },
    ],
  },
  {
    slug: 'kinder-difficulty-curve',
    title: 'How to build a kinder difficulty curve',
    dek: 'Challenge should stretch the player’s attention without making the relationship with the game feel brittle.',
    category: 'Game craft',
    categoryColor: 'green',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 4, 2026',
    readingTime: '7 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/kinder-difficulty-curve.png',
    imageAlt: 'A rising path of small puzzle boards with easy and challenging stepping stones',
    tags: ['difficulty design', 'flow', 'game craft', 'accessibility'],
    intro: 'Difficulty is not a staircase that only goes up. It is a conversation between a player’s current skill, the game’s next question, and the feedback that explains what happened.',
    keyTakeaways: [
      'GameFlow-oriented research emphasizes challenge-skill balance, clear goals, feedback, control, and immersion.',
      'A small study of movement-based rehabilitation games found meaningful individual differences in flow and perceived control.',
      'OutBrick uses solver-verified boards, recovery tools, and optional Rush pressure to keep challenge adjustable.',
    ],
    sections: [
      {
        id: 'challenge-and-skill-need-each-other',
        title: 'Challenge and skill need each other',
        paragraphs: [
          'A review of game-based rehabilitation systems uses GameFlow as a design lens: concentration, challenge, skill, control, clear goals, feedback, immersion, and social interaction. It describes adaptive difficulty as a way to keep a task from becoming so easy that it is boring or so hard that it becomes anxious.',
          'The idea is useful beyond rehabilitation. A player does not experience “level 20 difficulty” in the abstract. They experience a relationship between what the board asks and what the interface has taught them to notice.',
        ],
        sourceIds: ['flow-review-2019'],
      },
      {
        id: 'one-curve-does-not-fit-everyone',
        title: 'One curve does not fit everyone',
        paragraphs: [
          'A 2025 cross-sectional study of a Kinect-based rehabilitation task found lower overall flow among older participants than younger participants, with the largest difference in sense of control. The task and sample were specific, so the study does not justify age-based assumptions about all players.',
          'It does support a broader design principle: familiarity, motor ability, confidence, processing speed, and access needs can change how the same challenge feels. A good curve makes room for those differences instead of treating them as player failure.',
        ],
        sourceIds: ['flow-age-2025'],
      },
      {
        id: 'our-tools-for-a-kinder-curve',
        title: 'Our tools for a kinder curve',
        paragraphs: [
          'OutBrick’s board generator is solver-verified, which means the game can ask for planning without accidentally asking for the impossible. When a position becomes wedged, the recovery sheet explains that the board is stuck and offers a path forward. Undo stays free, and Rush is optional rather than the default tempo.',
          'These are not shortcuts around challenge. They separate useful friction from accidental friction. The player should spend their attention on the puzzle’s idea, not on defending themselves from the interface.',
        ],
        bullets: ['Verified solvability before a board ships', 'Undo that teaches instead of scolds', 'A restart path when the state is genuinely stuck', 'Optional speed pressure for players who want it'],
        sourceIds: ['flow-review-2019', 'flow-age-2025'],
      },
      {
        id: 'difficulty-as-an-invitation',
        title: 'Difficulty as an invitation',
        paragraphs: [
          'The fairest difficulty curve gives the player a reason to try again that is specific enough to feel actionable. “I almost had the lane” is a better invitation than “the game wants me to grind.” Feedback should turn a miss into information.',
          'That is the curve we want: boards that get more expressive, tools that keep the player in control, and a world that celebrates the attempt as much as the clear.',
        ],
        sourceIds: ['flow-review-2019', 'motivation-2010'],
      },
    ],
    references: [refs.flowReview, refs.flowAge, refs.motivation],
    relatedSlugs: ['color-shape-accessibility', 'why-two-minute-puzzles-feel-good', 'monument-valley-less-game-more-experience'],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getAuthor(id: string) {
  return authors.find((author) => author.id === id) ?? authors[0];
}

export function getRelatedArticles(article: BlogArticle) {
  return article.relatedSlugs.map((slug) => getArticle(slug)).filter((related): related is BlogArticle => Boolean(related));
}
