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
  /** One sentence lifted from the body, set large between sections. */
  pullQuote?: string;
  faqs?: Array<{ question: string; answer: string }>;
};

/*
 * Copy conventions for everything below.
 *
 * - Paragraphs, bullets, notes, intros and FAQ answers may carry inline links
 *   written as [label](/path). The article page renders them as anchors; the
 *   JSON-LD strips them back to plain text.
 * - Facts about the game come from the home page (app/page.tsx): nine brick
 *   friends with no voices (text bubbles only since 21 September 2026), five
 *   lives (eight with the Brick Pass) refilling one every thirty minutes, a
 *   free first undo on every board, a move limit and never a clock, and six
 *   opt-in rewarded video placements. Never write "no ads" or "no lives".
 * - British spelling, to match the rest of the domain.
 */

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
    label: 'World Health Organization (2020)',
    citation: 'World Health Organization. (2020, October 22). Addictive behaviours: Gaming disorder.',
    url: 'https://www.who.int/news-room/questions-and-answers/item/addictive-behaviours-gaming-disorder',
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
  stardewSolo: {
    id: 'stardew-solo-2018',
    label: 'Barone (2018)',
    citation: 'Barone, E. (2018, May 30). Clarification on the relationship between Chucklefish and Stardew Valley. Stardew Valley.',
    url: 'https://www.stardewvalley.net/clarification-on-the-relationship-between-chucklefish-and-stardew-valley/',
  },
  hadesFaq: {
    id: 'hades-faq-2020',
    label: 'Supergiant Games (n.d.)',
    citation: 'Supergiant Games. (n.d.). Hades FAQ. Retrieved September 4, 2026, from https://www.supergiantgames.com/blog/hades-faq/',
    url: 'https://www.supergiantgames.com/blog/hades-faq/',
  },
  hadesEarlyAccess: {
    id: 'hades-early-access-2020',
    label: 'Supergiant Games (2020)',
    citation: 'Supergiant Games. (2020, September 17). Hades: Now out of Early Access! Supergiant Games.',
    url: 'https://www.supergiantgames.com/blog/hades-now-out-of-early-access/',
  },
  sims25: {
    id: 'sims-25-2025',
    label: 'Gibson (2025)',
    citation: 'Gibson, L. (2025, February 7). The Sims at 25: How an iconic series kept up with the game of life. Xbox Wire.',
    url: 'https://news.xbox.com/en-us/2025/02/07/the-sims-at-25/?ver=3.7.1',
  },
  pokemonMotivation: {
    id: 'pokemon-motivations-2020',
    label: 'Bueno, Gallego, & Noyes (2020)',
    citation: 'Bueno, S., Gallego, M. D., & Noyes, J. (2020). Uses and gratifications on augmented reality games: An examination of Pokémon Go. Applied Sciences, 10(5), 1644.',
    url: 'https://doi.org/10.3390/app10051644',
  },
  pokemonCommunity: {
    id: 'pokemon-community-2023',
    label: 'Lawler-Sagarin, Sagarin, & Pederson (2023)',
    citation: 'Lawler-Sagarin, K. A., Sagarin, B. J., & Pederson, A. (2023). Enhanced community through augmented reality: Social benefits of Pokémon Go. Psychological Reports. https://doi.org/10.1177/00332941231197155',
    url: 'https://doi.org/10.1177/00332941231197155',
  },
  pokemonPlace: {
    id: 'pokemon-place-2019',
    label: 'Wang & Hsieh (2020)',
    citation: 'Wang, S. S., & Hsieh, C.-T. (2020). Ubiquitous Pokémon Go: Human–environment relationships and the location-based augmented reality game. Environment and Behavior.',
    url: 'https://doi.org/10.1177/0013916518817878',
  },
  animalCrossing: {
    id: 'animal-crossing-routines-2021',
    label: 'Comerford (2021)',
    citation: 'Comerford, C. (2021). Coconuts, custom-play & COVID-19: Social isolation, serious leisure and personas in Animal Crossing: New Horizons. Persona Studies, 6(2), 101–117.',
    url: 'https://doi.org/10.21153/psj2020vol6no2art970',
  },
  accessibilityHardMode: {
    id: 'accessibility-hard-mode-2024',
    label: 'Martinez, Froehlich, & Fogarty (2024)',
    citation: 'Martinez, J. J., Froehlich, J. E., & Fogarty, J. (2024). Playing on hard mode: Accessibility, difficulty, and joy in video game adoption for gamers with disabilities. In Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI ’24). ACM. https://doi.org/10.1145/3613904.3642804',
    url: 'https://doi.org/10.1145/3613904.3642804',
  },
  habitCues: {
    id: 'habit-cues-2016',
    label: 'Lukavská, Hrabec, & Chrz (2016)',
    citation: 'Lukavská, K., Hrabec, O., & Chrz, V. (2016). The role of habits in massive multiplayer online role-playing game usage: Predicting excessive and problematic gaming through players’ sensitivity to situational cues. Cyberpsychology, Behavior, and Social Networking, 19(4), 277–282. https://doi.org/10.1089/cyber.2015.0495',
    url: 'https://pubmed.ncbi.nlm.nih.gov/27057594/',
  },
  rewardsProblematic: {
    id: 'rewards-problematic-2023',
    label: 'Pirrone, van den Eijnden, & Peeters (2024)',
    citation: 'Pirrone, D., van den Eijnden, R. J. J. M., & Peeters, M. (2024). Why we can’t stop: The impact of rewarding elements in videogames on adolescents’ problematic gaming behavior. Media Psychology, 27(3), 379–400. https://doi.org/10.1080/15213269.2023.2242260',
    url: 'https://doi.org/10.1080/15213269.2023.2242260',
  },
  papersPlease: {
    id: 'papers-please-official',
    label: 'Pope (n.d.)',
    citation: 'Pope, L. (n.d.). Papers, Please. 3909 LLC. Retrieved September 4, 2026, from https://papersplea.se/',
    url: 'https://papersplea.se/',
  },
};

export const articles: BlogArticle[] = [
  {
    slug: 'why-two-minute-puzzles-feel-good',
    title: 'Why a two-minute puzzle can feel like a proper reset',
    dek: 'A research-backed look at competence, attention, and the small satisfactions that make a short OutBrick session worth returning to.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/why-two-minute-puzzles-feel-good.png',
    imageAlt: 'A glossy puzzle board with a final brick sliding into a matching gate',
    tags: ['puzzle games', 'well-being', 'motivation', 'casual gaming'],
    intro: 'Not every game session needs to be an odyssey. Sometimes the best version of play is a small, complete loop: notice a pattern, make a choice, see the board respond, and leave with the feeling that something clicked.',
    keyTakeaways: [
      'A short session can be satisfying when the player gets clear goals, visible feedback, and a real sense of agency.',
      'Research supports modest, short-term mood and engagement effects from casual play, not sweeping claims about intelligence or treatment.',
      'OutBrick is built around a complete little loop: one board, one decision at a time, with a free undo waiting on every one of them.',
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
          'A separate study comparing a casual game with a body-scan mindfulness exercise found reductions in psychological and physiological stress in both groups. Mindfulness performed better on self-reported psychological stress, so games do not replace other practices. A well-sized game can be one modest option in a larger day.',
        ],
        sourceIds: ['restoration-2017', 'casual-stress-2021', 'benefits-2014'],
      },
      {
        id: 'the-outbrick-loop',
        title: 'The OutBrick loop is intentionally small',
        paragraphs: [
          'OutBrick starts with a board that can be understood at a glance. There is no quest log to remember and no clock to beat; the two numbers that matter, the target and the move limit, sit beside your move count from the first tap. The board tells you the rest: the bricks, the open lanes, and the matching gates.',
          'Undo is part of the loop rather than a punishment for using it, which is why the first undo on every board is free and cannot run out. That changes the emotional temperature of experimentation. You can try a move, learn from the result, and keep the useful part of the attempt. Boards are still meant to push back. What changes is that trying something costs less than hesitating. The home page sets out [exactly what lives, undos and ads cost](/#fair).',
        ],
        bullets: ['One readable board at a time', 'A clear action-to-feedback relationship', 'Recovery tools that preserve curiosity', 'A finish line that arrives before the session feels heavy'],
      },
      {
        id: 'take-the-good-bit-with-you',
        title: 'Take the good bit with you',
        paragraphs: [
          'A good two-minute session gives you a small feeling of progress and then lets you decide what happens next. If you have time for another board, there is always another board. If you need to go, the game can wait.',
          'That is why OutBrick treats calm as a design input. The research does not say every player benefits in the same way, and it does not prove a universal effect. It does point in a useful direction: build a game that respects agency, makes progress legible, and leaves the player with more choice than they had before. We follow the same thread in [Designing a game for the life players actually have](/blog/designing-for-real-life-play).',
        ],
        sourceIds: ['motivation-2010', 'time-wellbeing-2022'],
      },
    ],
    references: [refs.motivation, refs.benefits, refs.restoration, refs.casualStress, refs.timeWellbeing],
    relatedSlugs: ['designing-for-real-life-play', 'daily-rituals-that-dont-demand-you', 'kinder-difficulty-curve'],
    pullQuote: 'Trying something costs less than hesitating.',
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
    updatedAt: 'September 24, 2026',
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
          'None of this means context can be ignored. A clock is simply a blunt instrument. The same number of minutes can feel like welcome rest, social connection, avoidance, or an unwanted obligation depending on the person and the day.',
        ],
        sourceIds: ['time-wellbeing-2022', 'gaming-fit-2025'],
      },
      {
        id: 'fit-is-a-design-material',
        title: 'Fit is a design material',
        paragraphs: [
          'For a mobile puzzle, fit shows up in small decisions. Does the first screen explain itself? Can a player finish a board without a surprise interruption? Does returning after a week feel welcoming rather than like a test? Is progress stored in a way that reduces memory work?',
          'OutBrick uses one-board goals, progress that follows you between devices through iCloud, and Home Screen widgets that tell you where you are. The design is deliberately glanceable. It is meant to survive the handoff between a spare minute and a busy afternoon without making the player reconstruct the whole experience.',
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
          'OutBrick’s promise is simple: give the player a board worth thinking about, then give the player their time back. Nothing interrupts a board, and no video plays unless the player pressed a button to ask for one. The first undo on every board is free and cannot run out. There is no requirement to keep the app open for the game to stay interesting either: lives come back one every thirty minutes whether you are watching or not.',
          'We still want players to return. The difference is where the invitation comes from: a board with a clear idea, nine brick friends who react when you clear it, and the quiet satisfaction of seeing a path that was not visible thirty seconds ago.',
        ],
        sourceIds: ['motivation-2010', 'gaming-fit-2025'],
      },
    ],
    references: [refs.timeWellbeing, refs.gamingFit, refs.telemetry, refs.motivation],
    relatedSlugs: ['why-two-minute-puzzles-feel-good', 'when-to-play-and-when-to-pause', 'daily-rituals-that-dont-demand-you'],
    pullQuote: 'Give the player a board worth thinking about, then give the player their time back.',
    faqs: [
      { question: 'Does OutBrick track my play time?', answer: 'Progress lives on your device and in your own iCloud, and there is no analytics SDK in the app. The rewarded-video provider collects what the [privacy policy](/privacy) describes. This article discusses research methods, not a promise about every game.' },
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
    updatedAt: 'September 24, 2026',
    readingTime: '7 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/angry-birds-success-lessons.png',
    imageAlt: 'Abstract red launcher blocks aimed at a playful stack of green toy bricks',
    tags: ['Angry Birds', 'mobile games', 'game success', 'iteration'],
    intro: 'Success stories get retold as lightning strikes. Rovio’s corporate history tells a more useful story: dozens of attempts, a clear mobile opportunity, and a team that kept making games long enough to be ready when the right idea arrived.',
    keyTakeaways: [
      'Rovio describes Angry Birds as its 52nd game, after 51 earlier projects and a near-bankruptcy moment.',
      'The lesson is to learn from each compact experiment, not to keep shipping until luck happens.',
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
          'OutBrick is built from the same respect for the first few seconds. Slide a brick and it glides until something stops it; get every brick out through the gate that matches its colour and the board is clear. The rule takes about five seconds to learn. After that, the game’s job is to give the player enough signal to get clever with it.',
        ],
        sourceIds: ['rovio-history', 'motivation-2010'],
      },
      {
        id: 'a-franchise-is-a-conversation',
        title: 'A franchise is a conversation',
        paragraphs: [
          'Rovio’s 2019 annual report describes a strategy that extended beyond play into watching, consuming, and engaging. It also reports that live operations and updates helped some titles continue earning over several years. Those are business facts from an interested party, not proof that one tactic guarantees a durable community.',
          'The design insight is still valuable: a game world becomes stronger when its surrounding touchpoints feel like the same world. OutBrick’s [nine brick friends](/mascots), its widgets, its daily coin bonus and its 167 brick-built villages all lead back to the same board. None of them is a separate product competing for attention.',
        ],
        sourceIds: ['rovio-annual-2019'],
      },
      {
        id: 'what-we-keep-for-outbrick',
        title: 'What we keep for OutBrick',
        paragraphs: [
          'We keep the part of the Angry Birds story that is easy to use and hard to fake: keep practicing the craft, keep the first interaction clear, and let the personality of the game travel with the player. We leave behind the idea that success is only a download chart.',
          'OutBrick is still a small game. Its version of ambition is a board that feels good in the hand, a player who can return without homework, and a body of work that gets better one brick at a time. For a different route to the same idea, read [how Tetris keeps a tiny ruleset open](/blog/tetris-simple-rules-infinite-variation).',
        ],
        sourceIds: ['rovio-history', 'rovio-annual-2019'],
      },
    ],
    references: [refs.rovioHistory, refs.rovioAnnual, refs.motivation],
    relatedSlugs: ['monument-valley-less-game-more-experience', 'minecraft-layered-discovery', 'tetris-simple-rules-infinite-variation'],
    pullQuote: 'The visible breakthrough was supported by a large amount of prior iteration that rarely makes the headline.',
  },
  {
    slug: 'monument-valley-less-game-more-experience',
    title: 'Monument Valley and the power of making less feel complete',
    dek: 'A closer look at ustwo’s “less game, more experience” idea—and what OutBrick borrows from it.',
    category: 'Success stories',
    categoryColor: 'red',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
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
          'That shift is useful for puzzle makers. Difficulty is only one dimension of value. A board can also be memorable because it has a strong silhouette, a small surprise, or a moment where the player sees the rule from a new angle. OutBrick’s deep indigo chrome and brick-built villages are there to make those moments feel held, and there is no clock anywhere in the game to hurry them.',
        ],
        sourceIds: ['monument-gdc-2014'],
      },
      {
        id: 'complete-does-not-mean-easy',
        title: 'Complete does not mean easy',
        paragraphs: [
          'A complete experience can still ask for concentration. The important difference is whether the player can understand the purpose of the challenge and whether the game respects the player after the challenge is over.',
          'OutBrick lets a board be knotty without making the whole app feel hostile. A free first undo on every board, and a free undo whenever a board wedges itself, keep the emotional arc attached to solving rather than to paying for a mistake. The board can be difficult. The relationship does not have to be.',
        ],
        sourceIds: ['monument-valley-ustwo', 'flow-review-2019'],
      },
      {
        id: 'the-outbrick-translation',
        title: 'The OutBrick translation',
        paragraphs: [
          'For OutBrick, “less game” means less friction between the player and the idea of the board. One screen can be enough. One move can be enough to teach a rule. One clear can be enough to end a session on a good note.',
          'We are not trying to make a smaller copy of someone else’s success. We want a world where a small puzzle feels complete on its own terms, which is also why [a two-minute board can feel like a proper reset](/blog/why-two-minute-puzzles-feel-good).',
        ],
        sourceIds: ['monument-gdc-2014', 'monument-valley-ustwo'],
      },
    ],
    references: [refs.monumentValley, refs.monumentGdc, refs.flowReview],
    relatedSlugs: ['angry-birds-success-lessons', 'why-two-minute-puzzles-feel-good', 'tetris-simple-rules-infinite-variation'],
    pullQuote: 'The board can be difficult. The relationship does not have to be.',
  },
  {
    slug: 'minecraft-layered-discovery',
    title: 'Minecraft’s early lesson: let discovery build the next layer',
    dek: 'How an open-ended beginning grew through creation, survival, crafting, multiplayer, and platform expansion.',
    category: 'Success stories',
    categoryColor: 'red',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
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
          'That is different from adding noise. OutBrick’s chapters, stars, widgets, brick friends and [the Journey of 167 villages](/#journey) all orbit the same core action: slide a brick out through the gate that matches it. Each layer should give the move a new context without asking the player to learn a second game.',
        ],
        bullets: ['Add depth to an existing action', 'Let players choose how much system they want', 'Make progress visible without turning discovery into homework', 'Allow personal stories to emerge from repeated play'],
        sourceIds: ['minecraft-xbox-2024', 'mit-fabo-2022'],
      },
      {
        id: 'the-value-of-a-personal-trace',
        title: 'The value of a personal trace',
        paragraphs: [
          'MIT’s FabO project explored how gameplay objects could be brought into the physical world. In an exploratory study of 47 fabricated objects from 33 games, the researchers found that learners attached meanings such as pride, creative self-expression, resources, expanded play, and shared experience to what they made.',
          'Few games need a 3D printer. The broader finding is that play means more when it leaves behind something that feels like yours. In OutBrick, a cleared chapter, a favourite mascot, or a third star on a board you went back for can work as a small personal trace: a reminder of a moment rather than a demand for another one.',
        ],
        sourceIds: ['mit-fabo-2022'],
      },
      {
        id: 'grow-the-world-with-care',
        title: 'Grow the world with care',
        paragraphs: [
          'Minecraft’s success is often described as infinite, but its early story is more practical: give players a strong verb, let them make meaning with it, and add systems that reward the meaning they are already making.',
          'That is the scale of the lesson OutBrick can use. A new feature should make the board feel more like OutBrick, not like a second app installed inside it.',
        ],
        sourceIds: ['minecraft-xbox-2024'],
      },
    ],
    references: [refs.minecraft, refs.mitFabO],
    relatedSlugs: ['tetris-simple-rules-infinite-variation', 'monument-valley-less-game-more-experience', 'kinder-difficulty-curve'],
    pullQuote: 'A layer works when it makes the player look back at the original verb differently.',
  },
  {
    slug: 'tetris-simple-rules-infinite-variation',
    title: 'Tetris proves that simple rules can keep opening up',
    dek: 'A look at constraint, rhythm, and the endless variety inside a very small ruleset.',
    category: 'Game craft',
    categoryColor: 'purple',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '6 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/tetris-simple-rules-infinite-variation.png',
    imageAlt: 'Colorful geometric toy blocks descending toward a clean grid',
    tags: ['Tetris', 'puzzle design', 'game craft', 'rules'],
    intro: 'A great ruleset does not need to be large. It needs to create enough consequence that the same action can feel different on the next turn. Forty years on, Tetris is still the clearest example of constraint turning into expression.',
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
          'That is why OutBrick uses haptics, the clear card and the friends’ victory moves as punctuation. The board does the thinking. The rest of the world helps the player feel the beat of a clear.',
        ],
        bullets: ['A rule you can explain in one breath', 'A state that changes after every decision', 'Feedback that confirms rather than decorates', 'Variation that comes from context, not confusion'],
        sourceIds: ['motivation-2010', 'tetris-history'],
      },
      {
        id: 'the-next-piece',
        title: 'The next piece',
        paragraphs: [
          'Tetris stays alive because the next piece always creates a new question. OutBrick’s version is quieter: across 2,000 solver-verified boards, the next one is another small question with a different shape, a different bottleneck, and another chance to notice more than you noticed last time. Keys, locks, frozen bricks, conveyors and crates arrive slowly, each one a new angle on the same rule.',
          'Simple does not mean shallow. It means the player can see where the depth is coming from.',
        ],
        sourceIds: ['tetris-history', 'flow-review-2019'],
      },
    ],
    references: [refs.tetris, refs.flowReview, refs.motivation],
    relatedSlugs: ['minecraft-layered-discovery', 'monument-valley-less-game-more-experience', 'why-two-minute-puzzles-feel-good'],
    pullQuote: 'Simple does not mean shallow. It means the player can see where the depth is coming from.',
  },
  {
    slug: 'daily-rituals-that-dont-demand-you',
    title: 'The case for daily rituals that do not demand you',
    dek: 'Daily play can be a welcome rhythm when it invites attention without turning absence into failure.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
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
          'The daily brick is our smallest recurring invitation: the first board you clear on any day pays a hundred coins on top of whatever it pays anyway. It gives the Home screen a little morning light, but it does not become the only reason to open the app. [The Journey](/#journey) moves at whatever pace you set, it keeps generating boards past its two-thousandth, and a missed day does not erase the value of the days around it.',
          'That choice is connected to fit. Research on gaming and well-being suggests that context and perceived value matter more than turning playtime into a single score. A daily feature should help someone mark a moment, not measure their worth.',
        ],
        sourceIds: ['gaming-fit-2025', 'time-wellbeing-2022'],
      },
      {
        id: 'ritual-without-obligation',
        title: 'Ritual without obligation',
        paragraphs: [
          'The difference between a ritual and an obligation is whether the person still has authorship. You can choose the time, the length, and the meaning. The design can offer a bright little marker without making the player bargain with it.',
          'OutBrick wants to be the kind of game that says “there is a board here if you would like one.” That is enough of a reason to return. For the other side of the same question, see [how games become habits](/blog/how-games-become-habits).',
        ],
        sourceIds: ['pew-teens-2024', 'wordle-axios-2022'],
      },
    ],
    references: [refs.pew, refs.wordle, refs.gamingFit, refs.timeWellbeing],
    relatedSlugs: ['designing-for-real-life-play', 'when-to-play-and-when-to-pause', 'how-games-become-habits'],
    pullQuote: 'A good daily ritual gives today a small identity without making yesterday’s absence feel like a debt.',
  },
  {
    slug: 'color-shape-accessibility',
    title: 'Why colour should never be the only clue in a puzzle',
    dek: 'The case for pairing colour with shape, text, and other signals—so a readable board stays readable for more players.',
    category: 'Inclusive design',
    categoryColor: 'teal',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '6 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/color-shape-accessibility.png',
    imageAlt: 'Glossy puzzle bricks with distinct engraved shapes alongside their colours',
    tags: ['accessibility', 'colour vision', 'inclusive design', 'puzzle games'],
    intro: 'Colour is expressive. It is also an unreliable single source of truth. The most welcoming puzzles use colour to make a pattern beautiful, then reinforce meaning with shape, text, spacing, or motion.',
    keyTakeaways: [
      'WCAG’s Use of Color guidance says colour should not be the only visual means of conveying information.',
      'Microsoft’s game accessibility guidance recommends symbols and patterns alongside colour, plus adjustable options.',
      'OutBrick’s colour-blind glyphs are on by default, and hue, shape and studs all carry a brick’s identity.',
    ],
    sections: [
      {
        id: 'color-is-a-great-accent',
        title: 'Colour is a great accent, not a gatekeeper',
        paragraphs: [
          'The W3C’s guidance for Success Criterion 1.4.1 is direct: colour should not be the only visual means of distinguishing information. The reason is practical. People do not all see colours the same way, and information can disappear when it is encoded only in hue.',
          'A product does not have to turn grey to meet it. Colour can keep doing what it does best (hierarchy, mood, emphasis) while another signal carries the rule a player must not miss.',
        ],
        sourceIds: ['w3c-color'],
      },
      {
        id: 'symbols-make-the-board-clearer',
        title: 'Symbols make the board clearer for everyone',
        paragraphs: [
          'Microsoft’s game accessibility overview recommends communicating information in more than one way, such as an image as well as text or a symbol as well as colour. It also asks designers to consider whether a game remains playable with sound muted, on a black-and-white display, and after a long break.',
          'Those are good questions for any puzzle, not only an accessibility checklist. A player who can confirm a match through shape is not doing extra work; they are getting a second route to the same understanding.',
        ],
        sourceIds: ['microsoft-game-accessibility'],
      },
      {
        id: 'how-outbrick-does-it',
        title: 'How OutBrick does it',
        paragraphs: [
          'OutBrick carries every brick’s identity through three channels at once: hue, shape and studs. Colour-blind mode is on by default and stamps a distinct glyph on every brick and every gate, so colour is never the only sort key. The visual system stays playful because the signals are part of the toy language: little marks you can read with your eyes and your memory.',
          'The same thinking runs past the board. Every brick is also a VoiceOver element that says its colour, shape and position, Larger Text scales throughout, and Reduce Motion is honoured everywhere. We still need testing with players who have different access needs; documentation is not a substitute for feedback. The [accessibility page](/accessibility) lists what ships today.',
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
    relatedSlugs: ['celeste-assist-mode-accessibility', 'kinder-difficulty-curve', 'designing-for-real-life-play'],
    pullQuote: 'If the player cannot reliably read the rule, they are solving the interface instead of solving the board.',
  },
  {
    slug: 'when-to-play-and-when-to-pause',
    title: 'When to play—and when to put the phone down',
    dek: 'A candid guide to fitting games around sleep, attention, and the rest of a real day.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
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
          'The honest design response is to make stopping easy, stop pretending a late-night loop has no cost, and give players enough information to make their own choice. Labelling all games harmful helps nobody.',
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
          'OutBrick has no run to defend and nothing that quietly expires while you are away. Clearing a board and stopping there is the cheapest thing you can do in the game: it costs nothing, and the clear card is a natural end to the session rather than a hand-off into the next one. The daily brick can be missed without turning tomorrow into a punishment, and every board opens with a free undo so that a wrong move is a thing you learn from rather than a thing you pay for.',
          'There is one cost worth stating plainly rather than burying: an attempt that ends without a clear, including walking away from a board you have already moved on, spends one of your lives. You hold five, eight with the Brick Pass, and one comes back on its own every thirty minutes. That is the genre’s rule and we kept it, because without it a move limit means nothing. Nothing else spends one: not playing, not clearing, not undoing, not opening a level to look at it and changing your mind. The full list is on the home page under [what it costs](/#fair). The goal is to make “one more board” a choice, not a trap hidden inside the interface.',
        ],
        bullets: ['Stop after a clear without losing your place', 'A free undo on every board, always', 'Lives come back on their own, one every half hour', 'Let settings support the player’s context'],
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
    relatedSlugs: ['how-games-become-habits', 'designing-for-real-life-play', 'why-two-minute-puzzles-feel-good'],
    pullQuote: 'The goal is to make “one more board” a choice, not a trap hidden inside the interface.',
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
    categoryColor: 'purple',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '7 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/kinder-difficulty-curve.png',
    imageAlt: 'A rising path of small puzzle boards with easy and challenging stepping stones',
    tags: ['difficulty design', 'flow', 'game craft', 'accessibility'],
    intro: 'Difficulty is not a staircase that only goes up. It is a conversation between a player’s current skill, the game’s next question, and the feedback that explains what happened.',
    keyTakeaways: [
      'GameFlow-oriented research emphasizes challenge-skill balance, clear goals, feedback, control, and immersion.',
      'A small study of movement-based rehabilitation games found meaningful individual differences in flow and perceived control.',
      'OutBrick uses solver-verified boards, recovery tools, and a move limit rather than a clock to keep challenge adjustable.',
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
          'A solver cleared all 2,000 of OutBrick’s boards before any of them shipped, so the game can ask for planning without accidentally asking for the impossible. Every board’s move limit is checked against the route the solver actually found, so no board ships with a rope shorter than its own proven solution. When a position becomes wedged, the recovery sheet says so and offers a way forward, and the undo on that sheet is free and sits outside the undo tank, because a board that wedged itself is the game’s doing, not the player’s. The pressure a board applies is a move limit, never a clock: the optional Rush timer was withdrawn, and there is no countdown anywhere in the game.',
          'None of this removes challenge. It separates useful friction from accidental friction, so the player spends their attention on the puzzle’s idea instead of defending themselves from the interface.',
        ],
        bullets: ['Verified solvability before a board ships', 'Undo that teaches instead of scolds', 'A free way out when the state is genuinely stuck', 'Pressure from a move limit, never from a clock'],
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
    relatedSlugs: ['celeste-assist-mode-accessibility', 'papers-please-meaningful-friction', 'color-shape-accessibility'],
    pullQuote: '“I almost had the lane” is a better invitation than “the game wants me to grind.”',
  },
  {
    slug: 'cozy-progress-without-grind',
    title: 'Stardew Valley and the craft of gentle progress',
    dek: 'A success story about patient craft, visible progress, and why a game can feel generous without becoming frictionless.',
    category: 'Success stories',
    categoryColor: 'red',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '8 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/cozy-progress-without-grind.png',
    imageAlt: 'A small garden, cottage, and winding path showing gentle progress at sunrise',
    tags: ['Stardew Valley', 'cozy games', 'progression', 'game design'],
    intro: 'Cozy play is less a genre checklist than a relationship with time. The player can see what they are growing, choose the pace of the next task, and feel that returning is a pleasure rather than a debt.',
    keyTakeaways: [
      'Stardew Valley is a useful case study in patient, creator-led iteration and progress that is easy to read.',
      'Gentle design still needs texture: choices, limits, small surprises, and a reason to care about the next step.',
      'OutBrick borrows the feeling of a welcoming return while keeping its own compact puzzle language.',
    ],
    sections: [
      {
        id: 'the-work-behind-the-welcome',
        title: 'The work behind the welcome',
        paragraphs: [
          'Stardew Valley often feels effortless to enter, but its welcome is the result of sustained craft. In a clarification about the game’s development, creator Eric Barone wrote that he was the only person to work on Stardew Valley during its four-and-a-half-year development, with the publisher contributing only to multiplayer networking. That is a first-person account, so it should be read as a creator statement rather than a complete production history, but it makes the scale of the solo experiment clear.',
          'The lesson for a small studio is not “work alone.” It is that a warm player experience can be built from thousands of deliberate, legible decisions. A soft landing is still a technical and editorial achievement.',
        ],
        sourceIds: ['stardew-solo-2018'],
      },
      {
        id: 'progress-you-can-feel',
        title: 'Progress you can feel',
        paragraphs: [
          'Gentle progress has a visible shape. A seed becomes a plant, a room becomes yours, a path opens, or a familiar routine gains one new possibility. The player does not need a reward explosion to understand that their attention mattered.',
          'That clarity connects with the motivational model of competence and autonomy: players want to feel capable, and they want their actions to belong to them. The research does not say that every cozy system creates well-being. It gives designers a useful vocabulary for why authored progress can feel satisfying.',
        ],
        sourceIds: ['motivation-2010', 'gaming-fit-2025'],
      },
      {
        id: 'gentle-does-not-mean-empty',
        title: 'Gentle does not mean empty',
        paragraphs: [
          'A game becomes flat when “cozy” means that nothing can surprise or resist the player. The better version keeps some friction: a season changes, a resource is finite, a neighbour has a schedule, or a puzzle asks you to look again. The friction is meaningful because the game gives you time and tools to respond.',
          'For OutBrick, that means a board can be kind without being solved for you. The rules stay firm, the move limit is real, the answer is earned, and the free first undo keeps an experiment from becoming a punishment. The player gets a small problem with a clear edge, not a blank screen disguised as relaxation.',
        ],
        bullets: ['Make progress visible without making it noisy', 'Let a return session begin with recognition', 'Keep enough resistance for choices to matter', 'Use recovery tools to protect curiosity'],
        sourceIds: ['motivation-2010', 'time-wellbeing-2022'],
      },
      {
        id: 'a-welcoming-return',
        title: 'Build for the welcoming return',
        paragraphs: [
          'The strongest cozy games do not only design the first session. They design the feeling of opening the game after a busy week. A player can remember the world, see one inviting next step, and decide whether today is a two-minute visit or a longer stay.',
          'That is the part OutBrick wants to make its own: a board that meets you where you are, a village on [the Journey](/#journey) that is still standing where you left it, and progress that stays yours, in your own iCloud, on every device you sign in to.',
        ],
        sourceIds: ['gaming-fit-2025', 'time-wellbeing-2022'],
      },
    ],
    references: [refs.stardewSolo, refs.motivation, refs.gamingFit, refs.timeWellbeing],
    relatedSlugs: ['hades-run-keeps-learning', 'daily-rituals-that-dont-demand-you', 'kinder-difficulty-curve'],
    pullQuote: 'A soft landing is still a technical and editorial achievement.',
  },
  {
    slug: 'hades-run-keeps-learning',
    title: 'Hades and the run that keeps learning',
    dek: 'What Supergiant’s Early Access success teaches about iteration, narrative momentum, and making another attempt feel meaningfully different.',
    category: 'Success stories',
    categoryColor: 'red',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '8 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/hades-run-keeps-learning.png',
    imageAlt: 'A lone adventurer follows branching luminous paths through a crimson and indigo underworld',
    tags: ['Hades', 'Early Access', 'iteration', 'roguelike design'],
    intro: 'A repeat attempt is only exciting when it carries information forward. Hades made that principle visible: a run could end, but the player’s relationship with the world, the story, and their own decisions kept developing.',
    keyTakeaways: [
      'Supergiant describes Hades as designed for Early Access from the ground up, making community feedback part of the process.',
      'A repeated run needs more than random variation; it needs memory, interpretation, and a reason to try a new approach.',
      'OutBrick applies the smaller-scale version: each board should teach a pattern without demanding a long campaign.',
    ],
    sections: [
      {
        id: 'early-access-as-a-design-loop',
        title: 'Early Access as a design loop',
        paragraphs: [
          'Supergiant’s Hades FAQ says the team designed the game from the ground up for Early Access. The studio describes a goal of making the game in partnership with its community, and connects the modular structure of the game and its narrative to that approach. That is a first-party account, but it is valuable precisely because it explains the production intention behind the finished experience.',
          'The loop is easy to translate: release a coherent slice, listen to what players can actually understand, then make the next slice answer a better question. Feedback is evidence about where the design is communicating and where it is asking players to guess, rather than a vote on every detail.',
        ],
        sourceIds: ['hades-faq-2020', 'hades-early-access-2020'],
      },
      {
        id: 'the-run-remembers',
        title: 'The run remembers',
        paragraphs: [
          'Hades turns failure into a change of context. A run can reveal a weapon interaction, a character beat, a resource choice, or a route that changes what the next attempt means. The player is not merely rolling the same dice again; they are carrying a better model of the system.',
          'That is why “random” is not enough. Variation becomes satisfying when a player can connect it to a growing vocabulary. A small puzzle can do this with a new gate arrangement, a revealed bottleneck, or a solution that only becomes obvious after the first attempt.',
        ],
        sourceIds: ['hades-faq-2020', 'motivation-2010'],
      },
      {
        id: 'narrative-keeps-the-door-open',
        title: 'Narrative keeps the door open',
        paragraphs: [
          'The official Hades materials describe a story that could be delivered serially through Early Access. Story became a gentle answer to the question “why return?” It gave the next run an emotional horizon even when the mechanical outcome was uncertain.',
          'OutBrick is not a narrative roguelike, and it should not pretend to be. Its version of a return is quieter: the board lets you notice a rule, the next board gives the rule another angle, and the completion state stays understandable enough that learning can survive a short session.',
        ],
        sourceIds: ['hades-early-access-2020', 'flow-review-2019'],
      },
      {
        id: 'designing-the-next-attempt',
        title: 'Design the next attempt',
        paragraphs: [
          'A repeatable game should answer three questions after a miss: what changed, what did I learn, and what can I try next? If the only answer is “grind until the numbers improve,” the loop is borrowing time rather than earning attention.',
          'The OutBrick board is small enough for the player to hold in memory. A failed line can become a clue rather than a scar. A compact loop leaves less to forget and puts more meaning in the decision that remains. When an attempt does end without a clear, it costs one life, and [the home page says exactly how lives work](/#fair).',
        ],
        bullets: ['Make the result of an attempt legible', 'Carry knowledge forward even when the board resets', 'Offer a specific next experiment', 'Let the player stop with the loop complete'],
        sourceIds: ['hades-faq-2020', 'motivation-2010'],
      },
    ],
    references: [refs.hadesFaq, refs.hadesEarlyAccess, refs.motivation, refs.flowReview],
    relatedSlugs: ['cozy-progress-without-grind', 'kinder-difficulty-curve', 'minecraft-layered-discovery'],
    pullQuote: 'A repeat attempt is only exciting when it carries information forward.',
  },
  {
    slug: 'celeste-assist-mode-accessibility',
    title: 'Celeste’s Assist Mode: accessibility as better design',
    dek: 'Optional support can preserve the heart of a challenge while giving more players a route into it.',
    category: 'Inclusive design',
    categoryColor: 'teal',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '8 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/celeste-assist-mode-accessibility.png',
    imageAlt: 'A calm mountain landscape with several clear routes upward and small generic climbers',
    tags: ['Celeste', 'Assist Mode', 'accessibility', 'difficulty design'],
    intro: 'Accessibility is not a promise that every player will experience a game in exactly the same way. It is the practice of making the core invitation reachable through more than one route.',
    keyTakeaways: [
      'Celeste’s optional Assist Mode is a widely discussed example of preserving player choice around challenge.',
      'Recent CHI research highlights community knowledge, customizable experiences, and unconventional play for gamers with disabilities.',
      'OutBrick treats support tools as part of the game’s language rather than as evidence that a player has failed.',
    ],
    sections: [
      {
        id: 'the-core-can-stay-intact',
        title: 'The core can stay intact',
        paragraphs: [
          'Celeste’s Assist Mode is compelling because it does not require the team to pretend that difficulty is meaningless. It gives players optional ways to change the conditions of play, so the mountain can remain a place of attention and discovery even when the default timing or speed is not a good fit.',
          'The design distinction matters. A support option is not a second-class version of the game. It lets the player choose the conditions under which they take part in the idea the game cares about.',
        ],
        sourceIds: ['microsoft-game-accessibility', 'accessibility-hard-mode-2024'],
      },
      {
        id: 'what-disabled-players-teach-designers',
        title: 'What disabled players teach designers',
        paragraphs: [
          'Martinez, Froehlich, and Fogarty interviewed 13 gamers with disabilities about game adoption and described phases including discovery, evaluation, and adaptation. Their recommendations include stronger community resources, socially created access, customizable experiences, and support for unconventional play. The sample is small and qualitative, but its specificity is exactly the point: access needs show up in real decisions, not only in a checklist.',
          'The research also challenges a narrow idea of mastery. A player may be deeply engaged while using a control remap, a slower speed, a visual cue, a guide, or a movement pattern the designer never imagined. The goal is participation with agency, not performance of the designer’s preferred route.',
        ],
        sourceIds: ['accessibility-hard-mode-2024'],
      },
      {
        id: 'more-than-one-signal',
        title: 'More than one signal',
        paragraphs: [
          'The W3C advises that colour should not be the only visual means of conveying information. Microsoft’s game accessibility guidance makes a related case for pairing signals and considering play without sound, on a monochrome display, or after a long break.',
          'In OutBrick, shapes, studs, spacing, contrast, and motion reinforce the colour language. The result is better for players who cannot use hue reliably, but it is also better for everyone when the board explains itself at a glance.',
        ],
        sourceIds: ['w3c-color', 'microsoft-game-accessibility'],
      },
      {
        id: 'support-is-a-design-material',
        title: 'Support is a design material',
        paragraphs: [
          'The most useful accessibility options are discoverable, reversible, and free of shame. They sit near the decision they affect, explain what they change, and allow the player to tune the experience as their context changes.',
          'That is the standard OutBrick is aiming for. A [kinder difficulty curve](/blog/kinder-difficulty-curve), a clear recovery path, and a colour-blind mode that is on from the first launch are not decorations around the puzzle. They help the puzzle remain the puzzle for more people.',
        ],
        bullets: ['Pair colour with shape and pattern', 'Keep support options reversible and visible', 'Test with players who use the options', 'Treat unconventional play as valid play'],
        sourceIds: ['accessibility-hard-mode-2024', 'w3c-color'],
      },
    ],
    references: [refs.accessibilityHardMode, refs.w3cColor, refs.microsoftGames],
    relatedSlugs: ['color-shape-accessibility', 'kinder-difficulty-curve', 'designing-for-real-life-play'],
    pullQuote: 'A support option is not a second-class version of the game.',
    faqs: [
      { question: 'Does Assist Mode make Celeste easier?', answer: 'It lets the player adjust selected conditions of play. The important design idea is that the player chooses the route, rather than accessibility being treated as a separate game.' },
      { question: 'What accessibility options does OutBrick have?', answer: 'Colour-blind mode is on by default and puts a glyph on every brick and gate. Every brick is a VoiceOver element, Larger Text scales throughout, Reduce Motion is honoured, and there is no clock anywhere. The [accessibility page](/accessibility) has the full list.' },
    ],
  },
  {
    slug: 'sims-stories-systems-tell',
    title: 'The Sims and the stories systems tell',
    dek: 'A long-running success story about player authorship, playful resistance, and the value of a game that does not write every line for you.',
    category: 'Success stories',
    categoryColor: 'red',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '8 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/sims-stories-systems-tell.png',
    imageAlt: 'A golden-hour cutaway neighborhood where rooms, routines, objects, and paths form everyday stories',
    tags: ['The Sims', 'emergent stories', 'systems design', 'player agency'],
    intro: 'The Sims is a reminder that a game can create memorable stories without scripting every memorable moment. Give players a legible system, a little resistance, and room to make decisions, and the stories begin to belong to them.',
    keyTakeaways: [
      'The Sims’ enduring appeal comes from treating player-created stories as the centre of the experience.',
      'Systems need readable consequences and playful pushback to produce stories rather than noise.',
      'OutBrick uses the smaller form of emergent design: a few rules combine into a board the player can claim as their own.',
    ],
    sections: [
      {
        id: 'the-player-is-the-author',
        title: 'The player is the author',
        paragraphs: [
          'In a 25-year retrospective, Xbox Wire describes the core idea of The Sims as the player’s story, with the game providing humorous pushback. It is a first-party-adjacent editorial account, so it is not an independent evaluation of the series, but it captures the design promise that made the franchise legible to generations of players: the system supplies the situation, and the player supplies the meaning.',
          'This is different from giving players a giant sandbox and hoping something happens. Authorship needs materials that are understandable. A player should know what a choice might change, even if the final story surprises them.',
        ],
        sourceIds: ['sims-25-2025'],
      },
      {
        id: 'pushback-makes-a-story',
        title: 'Pushback makes a story',
        paragraphs: [
          'A frictionless system produces a checklist. A hostile system produces fatigue. Playful pushback sits between them: the plan can go sideways, but the consequence is readable enough to become part of the memory.',
          'The motivational literature helps explain why this matters. Autonomy is not the absence of rules; it is the feeling that your decisions are yours inside a world that responds. Relatedness can come from characters, from other players, or from the imagined audience we tell the story to later.',
        ],
        sourceIds: ['sims-25-2025', 'motivation-2010'],
      },
      {
        id: 'small-systems-can-still-emerge',
        title: 'Small systems can still emerge',
        paragraphs: [
          'OutBrick does not simulate a neighbourhood. Its small system is the board: a brick occupies a lane, a gate waits for a matching shape, and one move changes what is possible next. The story is a sentence rather than a novel—“I saw the opening, committed to the long route, and had to undo two moves later.”',
          'That sentence is enough to create ownership. The board gives the player a sequence of decisions they can remember as theirs.',
        ],
        bullets: ['Give the player a small vocabulary of actions', 'Let consequences remain readable', 'Allow a surprising outcome without hiding the rule', 'Make the final clear feel authored'],
        sourceIds: ['motivation-2010', 'flow-review-2019'],
      },
      {
        id: 'design-for-the-story-after',
        title: 'Design for the story after',
        paragraphs: [
          'A successful system is often measured by what players say after the session. “I built a strange house,” “my neighbour became my rival,” or “I found the only lane that worked” are signs that the player is interpreting the design rather than merely consuming it.',
          'OutBrick aims for that small afterimage. The next board should be new, but the player should leave with a clear moment they can carry into the next conversation, commute, or quiet pause.',
        ],
        sourceIds: ['sims-25-2025', 'gaming-fit-2025'],
      },
    ],
    references: [refs.sims25, refs.motivation, refs.flowReview, refs.gamingFit],
    relatedSlugs: ['minecraft-layered-discovery', 'animal-crossing-shared-time', 'why-two-minute-puzzles-feel-good'],
    pullQuote: 'A frictionless system produces a checklist. A hostile system produces fatigue.',
  },
  {
    slug: 'pokemon-go-power-of-place',
    title: 'Pokémon GO and the power of place',
    dek: 'What location-based play reveals about movement, social connection, and turning the world outside the screen into part of the game.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '8 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/pokemon-go-power-of-place.png',
    imageAlt: 'A generic explorer follows a luminous path through an urban park toward a landmark',
    tags: ['Pokémon GO', 'location-based games', 'social play', 'place attachment'],
    intro: 'Some games give a place a second layer. A park becomes a route, a landmark becomes a meeting point, and an ordinary walk acquires a little more attention. The best location-based design adds meaning to the world without pretending the screen is the whole world.',
    keyTakeaways: [
      'Research on Pokémon GO links play with motivations including social interaction and exploration, though results depend on context and sample.',
      'Place-based design can turn movement and local discovery into game material.',
      'OutBrick is stationary by design, but it borrows the principle of giving ordinary surroundings a small, memorable layer.',
    ],
    sections: [
      {
        id: 'the-world-becomes-the-board',
        title: 'The world becomes the board',
        paragraphs: [
          'Wang and Hsieh’s study of Pokémon GO examines the relationship between people, environments, and a location-based augmented-reality game. That framing is useful because much of the game’s novelty lies in the way familiar geography becomes actionable, beyond the collection system itself. A corner, trail, or public space can acquire a new affordance when play points your attention toward it.',
          'The design challenge is to add a layer without erasing the place itself. A game should encourage awareness of the street, the people sharing it, and the practical limits of the environment—not turn every public space into an invisible resource node.',
        ],
        sourceIds: ['pokemon-place-2019'],
      },
      {
        id: 'why-people-keep-walking',
        title: 'Why people keep walking',
        paragraphs: [
          'A uses-and-gratifications study of Pokémon GO examined why people play and how those motivations relate to continued use. The paper is about one augmented-reality game and its surveyed participants, not a universal account of player behaviour, but it reinforces a practical idea: retention can come from the meaning a game adds to an activity, not only from a reward schedule.',
          'Exploration, competence, and social contact can overlap. A player may walk farther because a route is interesting, because a friend is waiting, or because the game makes a familiar neighbourhood feel newly legible.',
        ],
        sourceIds: ['pokemon-motivations-2020', 'motivation-2010'],
      },
      {
        id: 'social-benefits-have-a-place',
        title: 'Social benefits have a place',
        paragraphs: [
          'A PubMed-indexed study titled Enhanced Community Through Augmented Reality reported survey findings about meeting people, visiting new locations, and patronizing local businesses through Pokémon GO. These are self-reported associations, so they should not be read as proof that the game caused every outcome. They do show why place can be a social design material.',
          'A social layer does not have to mean voice chat or a leaderboard. It can be a shared route, a familiar landmark, a story about the day’s walk, or the simple recognition that other people are paying attention to the same world.',
        ],
        sourceIds: ['pokemon-community-2023', 'mit-social-mobile-2015'],
      },
      {
        id: 'outbrick-and-the-ordinary',
        title: 'OutBrick and the ordinary',
        paragraphs: [
          'OutBrick does not ask you to walk anywhere. Its place is the small interval: the train platform, the coffee table, the minute before a meeting, and it plays offline, so the tunnel does not matter. The connection is one of attitude rather than mechanics. A good game can make an ordinary context feel more intentional by giving attention a clear, bounded shape. We wrote more about that interval in [The commuter puzzle](/blog/commuter-puzzle-two-minute).',
          'Whether the board is in a park or at home, the invitation is the same: notice one thing, make one choice, and leave the world a little easier to return to.',
        ],
        sourceIds: ['pokemon-place-2019', 'gaming-fit-2025'],
      },
    ],
    references: [refs.pokemonPlace, refs.pokemonMotivation, refs.pokemonCommunity, refs.mitSocial, refs.gamingFit],
    relatedSlugs: ['animal-crossing-shared-time', 'commuter-puzzle-two-minute', 'daily-rituals-that-dont-demand-you'],
    pullQuote: 'The best location-based design adds meaning to the world without pretending the screen is the whole world.',
  },
  {
    slug: 'games-teach-curiosity-without-lecture',
    title: 'When a game teaches curiosity without a lecture',
    dek: 'How interactive systems can invite experimentation, and what MIT’s maker-learning work suggests about putting agency before explanation.',
    category: 'Learning through play',
    categoryColor: 'gold',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '8 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/games-teach-curiosity-without-lecture.png',
    imageAlt: 'A young player investigates responsive clues in a sunny meadow leading toward a kinetic observatory',
    tags: ['learning games', 'curiosity', 'MIT', 'game design'],
    intro: 'Teaching in a game is not the same as putting a lesson inside a game. The player needs a question worth asking, a system that answers honestly, and enough room to form a hypothesis before the explanation arrives.',
    keyTakeaways: [
      'MIT’s account of game-based maker learning emphasizes creating, testing, and sharing rather than passively receiving instructions.',
      'Curiosity grows when the system makes experiments safe and outcomes legible.',
      'OutBrick uses tiny puzzles as invitations to notice relationships, not as tests with hidden marking schemes.',
    ],
    sections: [
      {
        id: 'curiosity-starts-with-a-question',
        title: 'Curiosity starts with a question',
        paragraphs: [
          'A game teaches when the player wants to know what will happen next. That desire can begin with a visible mismatch, a responsive object, or a rule that is simple enough to test. The player is not waiting for the tutorial to finish; they are already constructing a model.',
          'The model can be wrong. That is part of the value. A safe mistake gives the player a new piece of evidence and keeps authorship on their side of the screen.',
        ],
        sourceIds: ['mit-fabo-2022', 'motivation-2010'],
      },
      {
        id: 'making-is-a-form-of-thinking',
        title: 'Making is a form of thinking',
        paragraphs: [
          'MIT News describes work that teaches computational maker skills through gaming, connecting game-like activities with creating and tinkering. The article is a university news account, not a randomized evaluation of every game-based learning outcome, so the useful claim is about design posture: let learners make something, see it respond, and share the result.',
          'That posture turns explanation into a consequence of activity. A player understands a system more deeply when the explanation answers a question they have already felt in their hands.',
        ],
        sourceIds: ['mit-fabo-2022'],
      },
      {
        id: 'the-outbrick-question',
        title: 'The OutBrick question',
        paragraphs: [
          'OutBrick’s boards are small enough to ask a focused question: if this brick moves first, which lane stays open? The player can try, undo, compare, and eventually recognize the relationship. The game does not need to call this a lesson for the player to practice reasoning.',
          'The important part is that the feedback is truthful. A move should change the board in a way the player can inspect. Mystery can create curiosity at the start, but clarity is what lets curiosity become understanding.',
        ],
        bullets: ['Show the question in the layout', 'Let experiments be reversible', 'Give feedback that explains the state', 'Reward a better model, not a lucky guess'],
        sourceIds: ['mit-fabo-2022', 'flow-review-2019'],
      },
      {
        id: 'leave-with-a-better-question',
        title: 'Leave with a better question',
        paragraphs: [
          'A good learning game does not end every session with a score that claims to summarize the player. It leaves them with a sharper question for the next board. That is a quieter measure of progress, but it is often the one that belongs to the player.',
          'The OutBrick version of teaching is modest: help someone notice one relationship, make one deliberate choice, and feel that their attention changed what became possible.',
        ],
        sourceIds: ['mit-fabo-2022', 'benefits-2014'],
      },
    ],
    references: [refs.mitFabO, refs.motivation, refs.flowReview, refs.benefits],
    relatedSlugs: ['minecraft-layered-discovery', 'why-two-minute-puzzles-feel-good', 'kinder-difficulty-curve'],
    pullQuote: 'Mystery can create curiosity at the start, but clarity is what lets curiosity become understanding.',
  },
  {
    slug: 'animal-crossing-shared-time',
    title: 'Animal Crossing and the architecture of shared time',
    dek: 'Why routines, roles, and custom play can make a digital place feel socially present even when players are apart.',
    category: 'Social play',
    categoryColor: 'pink',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '8 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/animal-crossing-shared-time.png',
    imageAlt: 'A welcoming island path with a shared table, lanterns, plants, and small homes at dusk',
    tags: ['Animal Crossing', 'social play', 'routines', 'community'],
    intro: 'Shared time does not always look like simultaneous action. Sometimes it is a place people maintain, a routine they compare, or a persona they bring to a world that is waiting when they return.',
    keyTakeaways: [
      'Peer-reviewed research on Animal Crossing: New Horizons describes routine substitution, social connectivity, agency, and personas.',
      'A social game can create connection through presence and shared interpretation, not only direct competition.',
      'OutBrick keeps its core solitary, but designs its boards and journal as things players can talk about and pass along.',
    ],
    sections: [
      {
        id: 'a-place-that-waits',
        title: 'A place that waits',
        paragraphs: [
          'Comerford’s Persona Studies article examines Animal Crossing: New Horizons through interviews and a survey of nearly 2,000 players. The paper describes how players used the game for routine substitution, social connectivity, agency, and personas during a period of social isolation. Its historical context is specific, but the design observation travels: a place can feel social because it holds traces of people’s choices between visits.',
          'A waiting world creates a different rhythm from a match that exists only while everyone is online. The player can contribute a small act, leave, and return to a world that has continuity.',
        ],
        sourceIds: ['animal-crossing-routines-2021'],
      },
      {
        id: 'roles-make-room-for-people',
        title: 'Roles make room for people',
        paragraphs: [
          'Custom play gives players a role that the rules do not fully prescribe. One person becomes the gardener, another the host, another the collector, another the person who arranges a corner for visitors. These roles are not required to finish the game, which is why they can become meaningful rather than merely functional.',
          'This is a form of autonomy. The system offers affordances, but the player decides what kind of person they want to be inside the space. Relatedness can then grow through the stories those choices make possible.',
        ],
        sourceIds: ['animal-crossing-routines-2021', 'motivation-2010'],
      },
      {
        id: 'outbrick-as-a-shared-object',
        title: 'OutBrick as a shared object',
        paragraphs: [
          'OutBrick is intentionally not a social feed. Still, a puzzle can become a shared object when someone explains the bottleneck, drops a challenge into a Messages thread, or asks a friend how they read the same shape. Game Center challenges go to someone you actually know. The board is a small place for interpretation.',
          'The journal extends that space. We write about design choices so a player can see the thinking around the game, not just its surface. The goal is to make a solitary pause feel connected to a larger practice of noticing.',
        ],
        sourceIds: ['animal-crossing-routines-2021', 'mit-social-mobile-2015'],
      },
      {
        id: 'design-for-returning-together',
        title: 'Design for returning together',
        paragraphs: [
          'The kindest shared spaces do not demand identical schedules. They leave a trace that can be picked up later, and they make room for different levels of participation. A person can visit for five minutes, decorate one corner, or simply see what changed.',
          'That is a useful standard for OutBrick’s wider ecosystem: every board should stand on its own, while the stories around the boards give players more ways to feel accompanied.',
        ],
        sourceIds: ['animal-crossing-routines-2021', 'gaming-fit-2025'],
      },
    ],
    references: [refs.animalCrossing, refs.motivation, refs.mitSocial, refs.gamingFit],
    relatedSlugs: ['pokemon-go-power-of-place', 'sims-stories-systems-tell', 'daily-rituals-that-dont-demand-you'],
    pullQuote: 'A place can feel social because it holds traces of people’s choices between visits.',
  },
  {
    slug: 'papers-please-meaningful-friction',
    title: 'Papers, Please and meaningful friction',
    dek: 'How a game can turn a repetitive action into a moral question—and why the best friction asks the player to decide, not simply to wait.',
    category: 'Game craft',
    categoryColor: 'purple',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '8 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/papers-please-meaningful-friction.png',
    imageAlt: 'A stark desk with stamped papers, a queue, and a single warm light suggesting consequential choices',
    tags: ['Papers, Please', 'meaningful friction', 'ethics in games', 'systems design'],
    intro: 'Friction is not automatically depth. Sometimes it is just a slow menu. Meaningful friction makes a decision harder because the decision has a consequence the player can understand and care about.',
    keyTakeaways: [
      'Papers, Please makes procedure expressive by placing rules, time, money, and human stakes in the same decision space.',
      'Ethical tension works best when the game allows competing values to be legible rather than hiding the answer.',
      'OutBrick uses a gentler version of meaningful friction: a board can make the next move demanding without making the interface hostile.',
    ],
    sections: [
      {
        id: 'procedure-becomes-a-question',
        title: 'Procedure becomes a question',
        paragraphs: [
          'Papers, Please begins with a repeated administrative action: inspect documents, compare details, make a decision. The official game description frames the player as an immigration inspector in a fictional dystopian state. The procedure is simple enough to learn, but the context keeps changing what the action means.',
          'A rule becomes expressive when the player understands both what the system asks and what the choice costs. The game does not need a long speech before every decision; the tension lives in the relationship between the checklist and the person standing in front of it.',
        ],
        sourceIds: ['papers-please-official'],
      },
      {
        id: 'friction-with-a-human-edge',
        title: 'Friction with a human edge',
        paragraphs: [
          'A meaningful constraint creates a conflict the player can name. Accuracy may protect a job, speed may protect a family, and strictness may protect one person while harming another. The game offers no single correct moral answer. Its system lets the player feel the collision between values.',
          'Game research on autonomy and competence helps explain why this can be gripping. The player needs enough control to own the choice, and enough feedback to understand its consequence. If the outcome is arbitrary, the tension collapses into frustration.',
        ],
        sourceIds: ['papers-please-official', 'motivation-2010'],
      },
      {
        id: 'what-outbrick-keeps',
        title: 'What OutBrick keeps',
        paragraphs: [
          'OutBrick has no border checkpoint and no moral dilemma. Its meaningful friction is smaller: the board asks you to choose which relationship to preserve. Moving one brick can close a lane, delay a match, or reveal that the apparently obvious move was a trap.',
          'The interface should not add arbitrary pain to that decision. The challenge belongs in the spatial relationship, not in a hidden timer, an unclear icon or a scarce undo, which is why OutBrick has no clock anywhere and gives every board a free first undo. That is the line between friction that produces thought and friction that merely consumes patience. The same line runs through [how we build a kinder difficulty curve](/blog/kinder-difficulty-curve).',
        ],
        bullets: ['Put the difficulty in the idea, not the controls', 'Show enough consequence for choices to matter', 'Let the player recover from an experiment', 'Keep the goal legible while the route stays open'],
        sourceIds: ['papers-please-official', 'flow-review-2019'],
      },
      {
        id: 'let-the-player-name-the-cost',
        title: 'Let the player name the cost',
        paragraphs: [
          'The most memorable systems leave players able to say what they traded away. “I protected this lane and lost that opening.” That sentence makes a puzzle feel like a decision rather than a button sequence.',
          'OutBrick wants the cost to stay small enough for a short session, but real enough that the clear feels earned. A little friction can make a calm game richer when the player remains in control of the meaning.',
        ],
        sourceIds: ['papers-please-official', 'motivation-2010'],
      },
    ],
    references: [refs.papersPlease, refs.motivation, refs.flowReview],
    relatedSlugs: ['kinder-difficulty-curve', 'monument-valley-less-game-more-experience', 'games-teach-curiosity-without-lecture'],
    pullQuote: 'Friction is not automatically depth. Sometimes it is just a slow menu.',
  },
  {
    slug: 'how-games-become-habits',
    title: 'How games become habits: cue, choice, closure',
    dek: 'A practical, research-aware look at the loops that bring players back—and the design choices that keep returning voluntary.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '9 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/how-games-become-habits.png',
    imageAlt: 'A calm circular path of small game moments moving from context to choice to a clear stopping point',
    tags: ['gaming habits', 'behavior design', 'healthy play', 'player agency'],
    intro: 'A habit is not the same thing as an addiction, and a return is not the same thing as a compulsion. Understanding the difference helps designers build invitations that are easy to accept—and equally easy to decline.',
    keyTakeaways: [
      'Habit research points to situational cues and learned routines, while problematic gaming involves impairment and loss of control.',
      'Rewarding elements can be engaging without being automatically harmful; context, player differences, and outcomes matter.',
      'OutBrick’s loop is cue, choice, closure: a clear entry, a meaningful move, and a finish line that respects the player’s next decision.',
    ],
    sections: [
      {
        id: 'a-cue-is-not-a-command',
        title: 'A cue is not a command',
        paragraphs: [
          'A cue is the context that makes an action available: a quiet train ride, a daily tile, a familiar icon, or the moment after finishing a task. A PubMed-indexed study of MMORPG players examined sensitivity to situational cues alongside excessive and problematic gaming. Its result is a warning against treating every repeatable loop as neutral, but it is not evidence that all games or all players develop the same pattern.',
          'Designers should therefore ask what the cue is promising. Is it a bounded moment of play, or is it opening a chain of unfinished obligations? The answer lives in the surrounding system as much as in the reward.',
        ],
        sourceIds: ['habit-cues-2016', 'who-gaming-disorder'],
      },
      {
        id: 'the-choice-needs-to-belong-to-the-player',
        title: 'The choice needs to belong to the player',
        paragraphs: [
          'A healthy-feeling loop gives the player a reason to choose, not just a reason to comply. Clear goals and immediate feedback can support competence, while optional routes preserve autonomy. Relatedness may come from a shared ritual, but it should not require public performance from everyone.',
          'This is why OutBrick keeps the next board visible without making it urgent. The invitation is clear; the decision remains yours.',
        ],
        sourceIds: ['motivation-2010', 'gaming-fit-2025'],
      },
      {
        id: 'closure-matters',
        title: 'Closure matters',
        paragraphs: [
          'Closure is the part many retention systems deliberately avoid. A clear end state tells the player that the session is complete, the progress is safe, and the next return can start cleanly. Without closure, the player may keep going simply because the system never says that a good stopping point has arrived.',
          'Research on rewarding elements and problematic gaming examines how different reward types relate to adolescents’ gaming behaviour. The study should not be used to claim that rewards cause harm for every player. It does support a more careful design question: what does this reward do to the player’s ability to choose when enough is enough?',
        ],
        sourceIds: ['rewards-problematic-2023', 'who-gaming-disorder'],
      },
      {
        id: 'outbricks-bounded-loop',
        title: 'OutBrick’s bounded loop',
        paragraphs: [
          'OutBrick’s intended loop is deliberately plain. A familiar context opens the app, a board presents one question, the player makes a move, and the clear card provides a natural pause. The Journey keeps generating boards past its two-thousandth for a player who wants more, but that does not swallow the meaning of the chapters behind it. The daily coin bonus is a hundred coins for your first clear of the day, not a streak that resets.',
          'The measure of success is not “did the player stay?” It is “did the player feel able to decide?” A game earns another session when the first session ended with trust intact.',
        ],
        bullets: ['A cue that explains what is available', 'A choice with visible consequences', 'A reward that does not hide the finish line', 'A return path without a penalty for absence'],
        sourceIds: ['habit-cues-2016', 'rewards-problematic-2023', 'gaming-fit-2025'],
      },
    ],
    references: [refs.habitCues, refs.rewardsProblematic, refs.who, refs.motivation, refs.gamingFit],
    relatedSlugs: ['when-to-play-and-when-to-pause', 'daily-rituals-that-dont-demand-you', 'designing-for-real-life-play'],
    pullQuote: 'A game earns another session when the first session ended with trust intact.',
    faqs: [
      { question: 'Is a daily game automatically a bad habit?', answer: 'No. A daily ritual can be voluntary and enjoyable. The important questions are whether you remain in control and whether play is interfering with sleep, responsibilities, relationships, or other valued activities.' },
      { question: 'Why does OutBrick use daily play at all?', answer: 'A daily coin bonus gives the game a small, optional rhythm. It is an invitation with a clear endpoint, not a streak that turns absence into failure.' },
    ],
  },
  {
    slug: 'commuter-puzzle-two-minute',
    title: 'The commuter puzzle: making room for a two-minute game',
    dek: 'A field guide to designing for interrupted attention, small screens, and the lovely gap between “I have no time” and “I have two minutes.”',
    category: 'OutBrick practice',
    categoryColor: 'green',
    publishedAt: 'September 4, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '7 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/commuter-puzzle-two-minute.png',
    imageAlt: 'A compact geometric puzzle beside a calm commuter window with a short pause in the day',
    tags: ['short sessions', 'commuter games', 'mobile design', 'puzzle games'],
    intro: 'The commuter puzzle has a different contract with attention from a console game: make the state clear quickly, respect interruption, and make two minutes feel complete rather than unfinished.',
    keyTakeaways: [
      'Short-session design is about cognitive fit as much as elapsed time.',
      'Pilot research on tablet puzzle play can inform feasibility and well-being questions without proving universal benefits.',
      'OutBrick treats interruption as a normal condition: readable state, a free undo on every board, and a board that is still exactly where you left it when you come back to the app.',
    ],
    sections: [
      {
        id: 'design-for-the-interruption',
        title: 'Design for the interruption',
        paragraphs: [
          'A commuter game is played around announcements, doors, messages, and the simple fact that the player may need to look up. The first design question is therefore not “how do we maximize immersion?” but “can the player understand where they are when attention returns?”',
          'Readable state is a form of care. A clear board, stable controls, and a visible pause point reduce the memory tax that comes with being interrupted.',
        ],
        sourceIds: ['puzzle-pilot-2023', 'gaming-fit-2025'],
      },
      {
        id: 'two-minutes-can-still-have-a-shape',
        title: 'Two minutes can still have a shape',
        paragraphs: [
          'A short session should have a beginning, a middle, and an end. The beginning is recognition: what is the puzzle asking? The middle is a choice: which relationship should I test? The end is a result: what changed, and do I want to continue?',
          'That shape is why the game can feel substantial without being long. The player receives a complete unit of attention instead of a fragment cut out of a larger obligation.',
        ],
        sourceIds: ['motivation-2010', 'restoration-2017'],
      },
      {
        id: 'what-the-pilot-can-tell-us',
        title: 'What a pilot can—and cannot—tell us',
        paragraphs: [
          'Urwyler and colleagues studied a tablet-based puzzle-game intervention in a pilot feasibility randomized controlled trial with healthy adults. A pilot can help researchers understand recruitment, adherence, measurement, and whether a larger study is practical. It cannot establish that every short puzzle improves cognition or well-being.',
          'That distinction is useful for product teams. We can borrow a research question—does the experience fit the day, and can players use it consistently?—without borrowing a conclusion the study did not make.',
        ],
        sourceIds: ['puzzle-pilot-2023'],
      },
      {
        id: 'outbrick-in-the-gap',
        title: 'OutBrick in the gap',
        paragraphs: [
          'OutBrick is built for the gap between obligations. The board can be read quickly, the first undo on it is free, and completion does not require a long chain of setup. If the train arrives or the coffee is ready, locking the phone leaves the board exactly as it stands — the interruption itself is never the thing that costs you anything.',
          'This is not productivity disguised as play, just a small game that understands the shape of a real day and lets the player enjoy the gap without asking it to become something bigger.',
        ],
        bullets: ['Start with a board that explains itself', 'Make interruption safe', 'Give a natural stopping point', 'Let a short session remain recreational'],
        sourceIds: ['puzzle-pilot-2023', 'time-wellbeing-2022', 'gaming-fit-2025'],
      },
    ],
    references: [refs.puzzlePilot, refs.motivation, refs.restoration, refs.timeWellbeing, refs.gamingFit],
    relatedSlugs: ['why-two-minute-puzzles-feel-good', 'pokemon-go-power-of-place', 'how-games-become-habits'],
    pullQuote: 'Readable state is a form of care.',
    faqs: [
      { question: 'How long is an OutBrick board?', answer: 'About two minutes is typical, but completion time varies with the board and the player. There is no timer anywhere in the game. What a board limits is moves, not minutes, so thinking for as long as you like is free.' },
      { question: 'Can I leave a board unfinished?', answer: 'Yes, and being interrupted is free — lock the phone or switch apps and the board is waiting as you left it. Backing all the way out to the map is the one case that costs something: a board you have already moved on takes one life, which the game warns you about first, and a life comes back every thirty minutes on its own. A cleared board never costs anything to walk away from.' },
    ],
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
