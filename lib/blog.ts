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
    role: 'Founder & CEO',
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
  hanoiIsomorphs: {
    id: 'hanoi-isomorphs-1985',
    label: 'Kotovsky, Hayes, & Simon (1985)',
    citation: 'Kotovsky, K., Hayes, J. R., & Simon, H. A. (1985). Why are some problems hard? Evidence from Tower of Hanoi. Cognitive Psychology, 17(2), 248–294.',
    url: 'https://doi.org/10.1016/0010-0285(85)90009-X',
  },
  slidingPspace: {
    id: 'sliding-block-pspace-2005',
    label: 'Hearn & Demaine (2005)',
    citation: 'Hearn, R. A., & Demaine, E. D. (2005). PSPACE-completeness of sliding-block puzzles and other problems through the nondeterministic constraint logic model of computation. Theoretical Computer Science, 343(1–2), 72–96.',
    url: 'https://doi.org/10.1016/j.tcs.2005.05.008',
  },
  workingMemory: {
    id: 'working-memory-2001',
    label: 'Cowan (2001)',
    citation: 'Cowan, N. (2001). The magical number 4 in short-term memory: A reconsideration of mental storage capacity. Behavioral and Brain Sciences, 24(1), 87–114.',
    url: 'https://doi.org/10.1017/S0140525X01003922',
  },
  interruptedWork: {
    id: 'interrupted-work-2008',
    label: 'Mark, Gudith, & Klocke (2008)',
    citation: 'Mark, G., Gudith, D., & Klocke, U. (2008). The cost of interrupted work: More speed and stress. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI ’08) (pp. 107–110). ACM.',
    url: 'https://doi.org/10.1145/1357054.1357072',
  },
  w3cTiming: {
    id: 'w3c-timing-adjustable',
    label: 'W3C Web Accessibility Initiative (n.d.)',
    citation: 'World Wide Web Consortium. (n.d.). Understanding Success Criterion 2.2.1: Timing adjustable. Web Accessibility Initiative.',
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable',
  },
  hoober: {
    id: 'hoober-mobile-grip-2013',
    label: 'Hoober (2013)',
    citation: 'Hoober, S. (2013, February 18). How do users really hold mobile devices? UXmatters.',
    url: 'https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php',
  },
  appleLowPower: {
    id: 'apple-low-power-mode',
    label: 'Apple (n.d.)',
    citation: 'Apple. (n.d.). Use Low Power Mode to save battery life on your iPhone or iPad. Apple Support. Retrieved September 24, 2026, from https://support.apple.com/en-us/101604',
    url: 'https://support.apple.com/en-us/101604',
  },
  higWatchOS: {
    id: 'apple-hig-watchos',
    label: 'Apple, Designing for watchOS (n.d.)',
    citation: 'Apple. (n.d.). Designing for watchOS. Human Interface Guidelines. Retrieved September 24, 2026, from https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos',
    url: 'https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos',
  },
  higDigitalCrown: {
    id: 'apple-hig-digital-crown',
    label: 'Apple, Digital Crown (n.d.)',
    citation: 'Apple. (n.d.). Digital Crown. Human Interface Guidelines. Retrieved September 24, 2026, from https://developer.apple.com/design/human-interface-guidelines/digital-crown',
    url: 'https://developer.apple.com/design/human-interface-guidelines/digital-crown',
  },
  higHaptics: {
    id: 'apple-hig-haptics',
    label: 'Apple, Playing haptics (n.d.)',
    citation: 'Apple. (n.d.). Playing haptics. Human Interface Guidelines. Retrieved September 24, 2026, from https://developer.apple.com/design/human-interface-guidelines/playing-haptics',
    url: 'https://developer.apple.com/design/human-interface-guidelines/playing-haptics',
  },
  higGames: {
    id: 'apple-hig-games',
    label: 'Apple, Designing for games (n.d.)',
    citation: 'Apple. (n.d.). Designing for games. Human Interface Guidelines. Retrieved September 24, 2026, from https://developer.apple.com/design/human-interface-guidelines/designing-for-games',
    url: 'https://developer.apple.com/design/human-interface-guidelines/designing-for-games',
  },
  watchIndependent: {
    id: 'apple-watch-independent-apps',
    label: 'Apple, Creating independent watchOS apps (n.d.)',
    citation: 'Apple. (n.d.). Creating independent watchOS apps. Apple Developer Documentation. Retrieved September 24, 2026, from https://developer.apple.com/documentation/watchos-apps/creating-independent-watchos-apps',
    url: 'https://developer.apple.com/documentation/watchos-apps/creating-independent-watchos-apps',
  },
  higVisionOS: {
    id: 'apple-hig-visionos',
    label: 'Apple, Designing for visionOS (n.d.)',
    citation: 'Apple. (n.d.). Designing for visionOS. Human Interface Guidelines. Retrieved September 24, 2026, from https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos',
    url: 'https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos',
  },
  higEyes: {
    id: 'apple-hig-eyes',
    label: 'Apple, Eyes (n.d.)',
    citation: 'Apple. (n.d.). Eyes. Human Interface Guidelines. Retrieved September 24, 2026, from https://developer.apple.com/design/human-interface-guidelines/eyes',
    url: 'https://developer.apple.com/design/human-interface-guidelines/eyes',
  },
  higSpatialLayout: {
    id: 'apple-hig-spatial-layout',
    label: 'Apple, Spatial layout (n.d.)',
    citation: 'Apple. (n.d.). Spatial layout. Human Interface Guidelines. Retrieved September 24, 2026, from https://developer.apple.com/design/human-interface-guidelines/spatial-layout',
    url: 'https://developer.apple.com/design/human-interface-guidelines/spatial-layout',
  },
  higImmersive: {
    id: 'apple-hig-immersive',
    label: 'Apple, Immersive experiences (n.d.)',
    citation: 'Apple. (n.d.). Immersive experiences. Human Interface Guidelines. Retrieved September 24, 2026, from https://developer.apple.com/design/human-interface-guidelines/immersive-experiences',
    url: 'https://developer.apple.com/design/human-interface-guidelines/immersive-experiences',
  },
  tetrisHard: {
    id: 'tetris-hard-2004',
    label: 'Breukelaar et al. (2004)',
    citation: 'Breukelaar, R., Demaine, E. D., Hohenberger, S., Hoogeboom, H. J., Kosters, W. A., & Liben-Nowell, D. (2004). Tetris is hard, even to approximate. International Journal of Computational Geometry & Applications, 14(1–2), 41–68.',
    url: 'https://doi.org/10.1142/S0218195904001354',
  },
  epistemicAction: {
    id: 'epistemic-action-1994',
    label: 'Kirsh & Maglio (1994)',
    citation: 'Kirsh, D., & Maglio, P. (1994). On distinguishing epistemic from pragmatic action. Cognitive Science, 18(4), 513–549.',
    url: 'https://doi.org/10.1207/s15516709cog1804_1',
  },
  tetrisExpertise: {
    id: 'tetris-expertise-2019',
    label: 'Lindstedt & Gray (2019)',
    citation: 'Lindstedt, J. K., & Gray, W. D. (2019). Distinguishing experts from novices by the Mind’s Hand and Mind’s Eye. Cognitive Psychology, 109, 1–25.',
    url: 'https://doi.org/10.1016/j.cogpsych.2018.11.003',
  },
  simonsBrain: {
    id: 'brain-training-review-2016',
    label: 'Simons et al. (2016)',
    citation: 'Simons, D. J., Boot, W. R., Charness, N., Gathercole, S. E., Chabris, C. F., Hambrick, D. Z., & Stine-Morrow, E. A. L. (2016). Do “brain-training” programs work? Psychological Science in the Public Interest, 17(3), 103–186.',
    url: 'https://doi.org/10.1177/1529100616661983',
  },
  stanfordConsensus: {
    id: 'stanford-consensus-2014',
    label: 'Stanford Center on Longevity (2014)',
    citation: 'Stanford Center on Longevity & Max Planck Institute for Human Development. (2014, October 20). A consensus on the brain training industry from the scientific community.',
    url: 'https://longevity.stanford.edu/a-consensus-on-the-brain-training-industry-from-the-scientific-community-2',
  },
  ftcLumosity: {
    id: 'ftc-lumosity-2016',
    label: 'Federal Trade Commission (2016)',
    citation: 'Federal Trade Commission. (2016, January 5). Lumosity to pay $2 million to settle FTC deceptive advertising charges for its “brain training” program [Press release].',
    url: 'https://www.ftc.gov/news-events/news/press-releases/2016/01/lumosity-pay-2-million-settle-ftc-deceptive-advertising-charges-its-brain-training-program',
  },
  numberPuzzles: {
    id: 'number-puzzles-2019',
    label: 'Brooker et al. (2019)',
    citation: 'Brooker, H., Wesnes, K. A., Ballard, C., Hampshire, A., Aarsland, D., Khan, Z., Stenton, R., Megalogeni, M., & Corbett, A. (2019). The relationship between the frequency of number-puzzle use and baseline cognitive function in a large online sample of adults aged 50 and over. International Journal of Geriatric Psychiatry, 34(7), 932–940.',
    url: 'https://doi.org/10.1002/gps.5085',
  },
  crosswordsTrial: {
    id: 'crosswords-trial-2022',
    label: 'Devanand et al. (2022)',
    citation: 'Devanand, D. P., Goldberg, T. E., Qian, M., Rushia, S. N., Sneed, J. R., Andrews, H. F., Nino, I., Phillips, J., Pence, S. T., Linares, A. R., Hellegers, C. A., Michael, A. M., Kerner, N. A., Petrella, J. R., & Doraiswamy, P. M. (2022). Computerized games versus crosswords training in mild cognitive impairment. NEJM Evidence, 1(12), EVIDoa2200121.',
    url: 'https://doi.org/10.1056/EVIDoa2200121',
  },
  activeTrial: {
    id: 'active-trial-2014',
    label: 'Rebok et al. (2014)',
    citation: 'Rebok, G. W., Ball, K., Guey, L. T., Jones, R. N., Kim, H.-Y., King, J. W., Marsiske, M., Morris, J. N., Tennstedt, S. L., Unverzagt, F. W., & Willis, S. L. (2014). Ten-year effects of the Advanced Cognitive Training for Independent and Vital Elderly cognitive training trial on cognition and everyday functioning in older adults. Journal of the American Geriatrics Society, 62(1), 16–24.',
    url: 'https://doi.org/10.1111/jgs.12607',
  },
  aarpGamers: {
    id: 'aarp-gamers-2023',
    label: 'AARP Research (2023)',
    citation: 'Kakulla, B. (2023). Gamers 50-plus are a growing force in the tech market. AARP Research.',
    url: 'https://doi.org/10.26419/res.00585.001',
  },
  aarpAccessibility: {
    id: 'aarp-accessibility-2024',
    label: 'AARP Research (2024)',
    citation: 'Kakulla, B. (2024). Games should be designed for everyone. AARP Research.',
    url: 'https://doi.org/10.26419/res.00791.001',
  },
  w3cTargetSize: {
    id: 'w3c-target-size',
    label: 'W3C (2023)',
    citation: 'World Wide Web Consortium. (2023). Understanding Success Criterion 2.5.8: Target Size (Minimum). Web Content Accessibility Guidelines 2.2.',
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html',
  },
  higAccessibility: {
    id: 'apple-hig-accessibility',
    label: 'Apple (n.d.)',
    citation: 'Apple Inc. (n.d.). Accessibility. Human Interface Guidelines.',
    url: 'https://developer.apple.com/design/human-interface-guidelines/accessibility',
  },
  nngOlderAdults: {
    id: 'nng-older-adults-2019',
    label: 'Kane (2019)',
    citation: 'Kane, L. (2019, September 8). Usability for older adults: Challenges and changes. Nielsen Norman Group.',
    url: 'https://www.nngroup.com/articles/usability-for-senior-citizens/',
  },
  appleTextSize: {
    id: 'apple-display-text-size',
    label: 'Apple Support (n.d.)',
    citation: 'Apple Inc. (n.d.). Use display and text size preferences on your iPhone, iPad and iPod touch. Apple Support.',
    url: 'https://support.apple.com/en-gb/111773',
  },
  appleReduceMotion: {
    id: 'apple-reduce-motion',
    label: 'Apple Support (n.d.)',
    citation: 'Apple Inc. (n.d.). Reduce screen motion on your iPhone, iPad, or iPod touch. Apple Support.',
    url: 'https://support.apple.com/en-us/111781',
  },
  colourSearchAge: {
    id: 'colour-search-age-2020',
    label: 'Tamura & Sato (2020)',
    citation: 'Tamura, S., & Sato, K. (2020). Age-related changes in visual search: Manipulation of colour cues based on cone contrast and opponent modulation space. Scientific Reports, 10, 21328.',
    url: 'https://doi.org/10.1038/s41598-020-78303-4',
  },
  fifteenNotes: {
    id: 'fifteen-puzzle-notes-1879',
    label: 'Johnson & Story (1879)',
    citation: 'Johnson, W. W., & Story, W. E. (1879). Notes on the “15” puzzle. American Journal of Mathematics, 2(4), 397–404.',
    url: 'https://doi.org/10.2307/2369492',
  },
  fifteenBook: {
    id: 'fifteen-puzzle-book-2006',
    label: 'Slocum & Sonneveld (2006)',
    citation: 'Slocum, J., & Sonneveld, D. (2006). The 15 puzzle: How it drove the world crazy. Slocum Puzzle Foundation.',
    url: 'https://blogs.libraries.indiana.edu/lilly/2015/10/09/rational-amusements-nineteenth-century-puzzles-on-exhibition-in-the-slocum-room/',
  },
  kinseyPatent: {
    id: 'kinsey-patent-1878',
    label: 'Kinsey (1878)',
    citation: 'Kinsey, E. U. (1878). Improvement in puzzle-blocks (U.S. Patent No. 207,124). U.S. Patent Office.',
    url: 'https://patents.google.com/patent/US207124A/en',
  },
  fifteenSearch: {
    id: 'fifteen-puzzle-search-2005',
    label: 'Korf & Schultze (2005)',
    citation: 'Korf, R. E., & Schultze, P. (2005). Large-scale parallel breadth-first search. In Proceedings of the Twentieth National Conference on Artificial Intelligence (AAAI-05) (pp. 1380–1385). AAAI Press.',
    url: 'https://cdn.aaai.org/AAAI/2005/AAAI05-219.pdf',
  },
  hardyPatent: {
    id: 'hardy-patent-1912',
    label: 'Hardy (1912)',
    citation: 'Hardy, L. W. (1912). Puzzle (U.S. Patent No. 1,017,752). U.S. Patent Office.',
    url: 'https://patents.google.com/patent/US1017752A/en',
  },
  dadsPuzzler: {
    id: 'dads-puzzler-smithsonian',
    label: 'Smithsonian NMAH (n.d.)',
    citation: 'Smithsonian National Museum of American History. (n.d.). Dad’s Puzzler, once owned by Olive C. Hazlett [Object 2015.0027.04].',
    url: 'https://americanhistory.si.edu/collections/object/nmah_1591363',
  },
  rushHourHistory: {
    id: 'rush-hour-thinkfun-2018',
    label: 'Contreras (2018)',
    citation: 'Contreras, M. (2018, February 1). The evolution of ThinkFun’s Rush Hour. ThinkFun.',
    url: 'https://info.thinkfun.com/stem-education/the-evolution-of-thinkfuns-rush-hour',
  },
  rushHourPspace: {
    id: 'rush-hour-pspace-2002',
    label: 'Flake & Baum (2002)',
    citation: 'Flake, G. W., & Baum, E. B. (2002). Rush Hour is PSPACE-complete, or “Why you should generously tip parking lot attendants”. Theoretical Computer Science, 270(1–2), 895–911.',
    url: 'https://doi.org/10.1016/S0304-3975(01)00173-6',
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
    image: '/blog/why-two-minute-puzzles-feel-good.webp',
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
    image: '/blog/designing-for-real-life-play.webp',
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
    image: '/blog/angry-birds-success-lessons.webp',
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
    image: '/blog/monument-valley-less-game-more-experience.webp',
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
    image: '/blog/minecraft-layered-discovery.webp',
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
    image: '/blog/tetris-simple-rules-infinite-variation.webp',
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
    image: '/blog/daily-rituals-that-dont-demand-you.webp',
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
    image: '/blog/color-shape-accessibility.webp',
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
    image: '/blog/when-to-play-and-when-to-pause.webp',
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
    image: '/blog/kinder-difficulty-curve.webp',
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
    image: '/blog/cozy-progress-without-grind.webp',
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
    image: '/blog/hades-run-keeps-learning.webp',
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
    image: '/blog/celeste-assist-mode-accessibility.webp',
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
    image: '/blog/sims-stories-systems-tell.webp',
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
    image: '/blog/pokemon-go-power-of-place.webp',
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
    image: '/blog/games-teach-curiosity-without-lecture.webp',
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
    image: '/blog/animal-crossing-shared-time.webp',
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
    image: '/blog/papers-please-meaningful-friction.webp',
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
    image: '/blog/how-games-become-habits.webp',
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
    image: '/blog/commuter-puzzle-two-minute.webp',
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
  {
    slug: 'how-to-solve-sliding-block-puzzles',
    title: 'How to solve sliding block puzzles: a practical guide',
    dek: 'Work backwards from the exit, find the move that makes space, count before you commit. A designer’s method for sliding block puzzles that look impossible.',
    category: 'Game craft',
    categoryColor: 'purple',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '7 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/how-to-solve-sliding-block-puzzles.webp',
    imageAlt: 'Real OutBrick boards on an indigo baseplate, led by a colour-blind board with glyphs, while yellow bricks slide out through their gate and Bricko looks on',
    tags: ['sliding block puzzles', 'sliding puzzle strategy', 'how to solve puzzles', 'puzzle tips'],
    intro: 'A good sliding block puzzle is built to look hopeless. Every cell is taken, every block seems to sit in somebody else’s way, and the exit is on the wrong side. I build and test boards like that for OutBrick, and the same five habits get me through almost all of them, whatever the puzzle. None of them is a trick. They are ways of looking that turn a wall of blocks into a short list of questions.',
    keyTakeaways: [
      'Start from the exit and work backwards: the blocks between one piece and its way out are the real problem, and that list is usually short.',
      'On a packed board, the move that matters is the one that opens space for two or more other blocks, so count legal moves before you touch anything.',
      'Undo is an experiment you can run for free, and a reset is for when your first read of the board was wrong, not for when one move was.',
    ],
    sections: [
      {
        id: 'work-backwards-from-the-exit',
        title: 'Start at the exit and work backwards',
        paragraphs: [
          'The natural instinct on a full board is to move whatever can move. Resist it for ten seconds. Pick one block that has to leave, look at its exit, and ask a single question: what is between this block and the way out? Whatever answers that question is your real problem. Then ask the same question of each of those blockers, and keep going until you reach a block that can already move.',
          'What you end up with is a chain of dependencies, read backwards from the goal: the exit needs the yellow block, the yellow block needs the green one out of its lane, the green one needs a gap on the left. Psychologists call this kind of reasoning means–ends analysis, and there is good evidence that how you frame a puzzle changes how hard it feels. Kotovsky, Hayes and Simon gave people versions of the Tower of Hanoi with identical structure but different surface rules, and found some versions took far longer than others. Much of the difficulty lay in holding the rules and the current state in mind at once. A named chain takes some of that weight off.',
          'In OutBrick the exits are colour gates, and a brick leaves only through the gate that matches its colour. That gives the backwards read a useful extra rule: a gate that refuses a brick is as much a wall as the frame is. So when you pick your first brick, pick the colour whose gate has the shortest chain in front of it.',
        ],
        bullets: [
          'Choose one block that must leave.',
          'List what stands between it and its exit.',
          'Repeat for each blocker until you reach one that can already move.',
          'Play the chain forwards from that end.',
        ],
        sourceIds: ['hanoi-isomorphs-1985'],
      },
      {
        id: 'find-the-move-that-makes-space',
        title: 'Find the one move that makes space',
        paragraphs: [
          'A packed board has far fewer legal moves than it looks. Before you commit, count them. On a tightly packed board there may be only a few, and one of them is usually the move the board was built around: the slide that opens a pocket of space and lets the pile come apart section by section. Empty cells are the currency of a sliding puzzle. The best opening move usually buys room for the moves after it, and it rarely clears anything by itself.',
          'Where you leave a block matters as much as which block you move. In OutBrick a brick travels as far as you drag it, up to whatever stops it: a wall, a neighbour, or a gate that refuses its colour. A block parked halfway down a lane may be fine now and in the way in four moves. Before letting go, check that you have not sealed a lane you will need later.',
          'There is a mathematical reason these puzzles resist shortcuts. Hearn and Demaine proved that generalised sliding-block puzzles are PSPACE-complete, which in plain terms means no known method solves every large board efficiently. Human solvers get by on heuristics like the ones in this guide. It also means a well-made puzzle has to be designed so that there is a way in. OutBrick checks that the hard way: a solver cleared all 2,000 boards before any of them shipped, so if you feel stuck, the knot is in the position you have made, not in the board.',
        ],
        sourceIds: ['sliding-block-pspace-2005'],
      },
      {
        id: 'count-before-you-commit',
        title: 'Count moves before you commit',
        paragraphs: [
          'Plan in short chains. Working memory holds only a handful of items at once (Cowan’s review of the evidence puts the figure at around four chunks), so trying to see ten moves ahead usually means seeing four clearly and guessing the rest. Group moves into intentions instead: “open the left column” is one chunk, even if it takes three slides. Plan two or three chunks, play them, then look again.',
          'If your puzzle has a move limit, this is where it pays off. OutBrick has no clock anywhere; the rope on each board is a move limit, and the target and the limit are both printed from the first tap. That changes what is scarce. Moves cost you, and thinking costs you nothing, so spend time freely and moves carefully. Before each slide, run through a short check.',
        ],
        bullets: [
          'What does this move make possible?',
          'What does it close off, now or in two moves?',
          'Is there one longer slide that does the work of two shorter ones?',
          'Does it move me along the chain I built from the exit?',
        ],
        sourceIds: ['working-memory-2001'],
      },
      {
        id: 'use-undo-as-a-thinking-tool',
        title: 'Use undo as a thinking tool',
        paragraphs: [
          'Undo works best as an experiment. When two moves look equally good, play one, look at what it opens, and take it back. You have learned something about the board that no amount of staring would have shown you, at the cost of one undo. Players who treat undo as an admission of failure tend to stare longer and learn less.',
          'OutBrick is built around that idea. The first undo on every board is free and cannot run out. Beyond that, undos come from a tank of five that refills one every twenty-five minutes, and when a board wedges, the undo it offers is free too and sits outside the tank. So spend the free one early and on purpose, on the move you are least sure of, rather than saving it for an emergency.',
          'There is one trade-off to know about. The third star on an OutBrick board asks for a clear inside the solver’s move target with no undo at all. If you are playing for a clear, experiment freely. If you are playing for three stars, do the experimenting in your head first.',
        ],
      },
      {
        id: 'know-when-to-reset',
        title: 'Know when to reset',
        paragraphs: [
          'Undo fixes a move. A reset fixes a plan. The signs that you need the second are easy to spot once you know them: you have undone the same move three times, you are sliding one block back and forth, you cannot say what your next two chunks are for, or the area you need has been sealed by bricks you parked yourself. At that point more undos only walk you back along a path that was never going to work.',
          'Be honest about what a restart costs in the game you are playing. In OutBrick, opening a board needs a life and spends none, clearing a board costs nothing, and a life goes only when an attempt ends without a clear. Lives come back one every thirty minutes. That is a good reason to use undo for small corrections and keep a fresh attempt for when your whole reading of the board was wrong.',
          'And sometimes the best reset is to put the phone down. A board that looked like a wall at the end of a long day often opens in the first thirty seconds the next morning. Nothing on an OutBrick board is timed, so it will wait. For habits specific to sorting by colour, there is a companion piece on [colour sort puzzle tips](/blog/colour-sort-puzzle-tips). If you want to practise the method first, the [play guide](/play) has a board you can try in the browser, from easy to a proper knot.',
        ],
      },
    ],
    references: [refs.hanoiIsomorphs, refs.slidingPspace, refs.workingMemory],
    relatedSlugs: ['tetris-simple-rules-infinite-variation', 'kinder-difficulty-curve', 'hades-run-keeps-learning'],
    pullQuote: 'Undo fixes a move. A reset fixes a plan.',
    faqs: [
      { question: 'What is the trick to solving sliding block puzzles?', answer: 'There is no single trick, but one habit does most of the work: start from the exit and work backwards. List what blocks the piece you need to move, then what blocks those, until you reach a piece that can already move. Then look for the one move that opens the most space.' },
      { question: 'Are all sliding block puzzles solvable?', answer: 'No. Some arrangements of classic sliding puzzles have no solution at all; half the possible starting positions of the 15 puzzle are unsolvable, for example. Designed puzzles should be checked before release. Every one of OutBrick’s 2,000 boards was cleared by a solver before it shipped.' },
      { question: 'How many moves ahead should I plan?', answer: 'Two or three small goals, each a few moves long, is plenty for most people. Working memory holds only a handful of items at once, so plan in chunks such as “free the left lane”, play them, and then look at the board again.' },
      { question: 'Is using undo cheating?', answer: 'No. Undo is one of the best ways to learn how a board behaves. In OutBrick the first undo on every board is free. The only thing it affects is the third star, which asks for a clear inside the move target with no undo.' },
    ],
  },
  {
    slug: 'colour-sort-puzzle-tips',
    title: 'Colour sort puzzle tips: clear boards in fewer moves',
    dek: 'How to read a colour sort board, choose which colour to clear first and beat the move target, with the star rules explained. From OutBrick’s designer.',
    category: 'OutBrick practice',
    categoryColor: 'green',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '7 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/colour-sort-puzzle-tips.webp',
    imageAlt: 'Rows of studded bricks in red, yellow, teal, violet, blue and green on a cream ground, with a real OutBrick board and a three-star clear card',
    tags: ['colour sort puzzle', 'block sort puzzle tips', 'color sort puzzle strategy', 'move targets'],
    intro: 'Colour sort puzzles come in a few families: liquids poured between tubes, stacks sorted onto pegs, and blocks slid out through gates of their own colour. OutBrick is the last kind, and these tips are written around it, but the core skill carries across the whole family. You are reading which colour is ready to leave, which is buried, and which one is quietly in everybody’s way. Doing it in fewer moves is mostly a matter of doing that reading before your first move rather than after your tenth.',
    keyTakeaways: [
      'Read the whole board before the first move: which colours have a clear run to their exit, which bricks block more than one colour, and where the empty space is.',
      'Clear the colour whose departure frees the most, not the one that is easiest to reach.',
      'In OutBrick, one star is a clear, two is a clear inside the solver’s target, and three is that with no undo, so the free undo keeps two stars within reach but not three.',
    ],
    sections: [
      {
        id: 'read-the-board-first',
        title: 'Read the board before your first move',
        paragraphs: [
          'The moves you save come from the look you take before the first one. Scan the board for three things. First, which colours already have a clear run to their gate. Second, which bricks are blocking more than one colour, because those are the bricks the whole board turns on. Third, where the empty space is, since every plan you make has to pass through it.',
          'Then read the two numbers. Every OutBrick board prints its move target and its move limit from the first tap, so you know the budget before you spend anything. The target is the solver’s own count for the board, which makes it a useful hint: if the target is low, there is a tidy route, and a plan that needs twice as many moves is probably missing something.',
          'Use every channel the game gives you to tell colours apart. OutBrick’s colour-blind mode is on by default and stamps a glyph on every brick and every gate, so hue, shape and studs all carry the colour. Even with full colour vision, the glyphs make it quicker to separate neighbours like red and pink or violet and blue at a glance. Accessibility guidance has long recommended this: colour should never be the only way information is shown.',
          'Finally, look at the shape of the board itself. Not every OutBrick board is a rectangle; some arenas are shaped like an H, an L or a cross. A narrow neck between two halves of an arena is where bricks jam, so work out early which bricks have to pass through it and in what order.',
        ],
        sourceIds: ['w3c-color'],
      },
      {
        id: 'clear-the-colour-that-frees-the-most',
        title: 'Clear the colour that frees the most',
        paragraphs: [
          'The tempting first move is the brick that can leave right now. Sometimes that is right. Often it is a brick at the edge whose departure opens nothing, while a brick in the middle, three moves from its gate, is holding up half the board. Before you clear anything, ask what each exit opens. A large brick leaving from the centre can turn a solid block into three working lanes.',
          'Pay attention to where bricks end up parked, too. A brick left in front of a gate it does not belong to is a wall until you move it again, and every “again” is a move you did not need. When you shift a brick out of the way, send it somewhere it will not be in the way next.',
          'It helps to know how a board’s difficulty is spread out. The first few moves on a packed board are the expensive ones, because every cell is taken and every slide changes what is possible. The last few are nearly free: by then the board is mostly empty space and the remaining bricks have a clear run home. So spend your thinking at the start, where one careless slide can cost three moves to repair, and relax at the end.',
        ],
        bullets: [
          'Bricks that block two or more colours come first.',
          'Then colours whose exit opens a lane you need.',
          'Easy, isolated exits last, unless they are free space you need right now.',
          'Never park a brick across a lane you have not finished with.',
        ],
      },
      {
        id: 'plan-in-chunks',
        title: 'Plan in chunks, not single moves',
        paragraphs: [
          'Working memory is small. Cowan’s influential review puts its capacity at about four chunks, which is why planning ten single moves ahead rarely works. Plan in intentions instead: “get the yellows out”, “open the right lane”, “thaw the frozen brick”. Working [backwards from the exit](/blog/how-to-solve-sliding-block-puzzles) is a good way to find them. Each intention is a chunk of two to four moves, and you can hold two or three of them comfortably.',
          'Before each chunk, count what it will cost and compare that with what you have left under the target. If the chunk costs more than you have, it is the wrong chunk, and it is far cheaper to find that out now than halfway through. Most wasted moves in colour sort puzzles come from the same few habits: shuffling a brick back and forth, moving it twice when one longer slide would have done, and fixing the same lane twice because a brick got parked back in it.',
          'One small routine helps with all three. Before a chunk, say its last move to yourself: where will each brick be when it is done? If you cannot picture the end state, the chunk is too long, so split it. If you can, play it without stopping to reconsider halfway, because second thoughts in the middle of a chunk are where back-and-forth shuffles come from.',
        ],
        sourceIds: ['working-memory-2001'],
      },
      {
        id: 'targets-and-stars',
        title: 'How targets and stars work in OutBrick',
        paragraphs: [
          'Stars in OutBrick are easy to explain. A clear earns one star. Clearing inside the solver’s own move target earns two. Doing that without a single undo earns three. The limit, which the game draws as a rope, is a move limit rather than a clock; there is no countdown anywhere in the game.',
          'That has one consequence people often miss. The first undo on every board is free and cannot run out, and using it still counts as an undo, so it keeps two stars within reach but not three. If three stars matter to you, treat undo as a last resort and do your experimenting in your head. If you only want the clear, use it freely: that is what it is for.',
          'When you run low on moves, you are offered five more before anything else, for 300 coins, then 500, then 900 inside one attempt. Extra moves can rescue a clear. They will not bring back the second star, because by the time you are near the limit you have usually used up the target. The better fix is upstream: a slower read of the board at the start.',
        ],
      },
      {
        id: 'mistakes-that-cost-moves',
        title: 'Five habits that quietly cost moves',
        paragraphs: [
          'Most clears that go over budget come down to one of a handful of habits. Each of them is easy to fix once you have noticed yourself doing it. OutBrick’s [play guide](/play) lists every board piece mentioned here if you want the full set.',
        ],
        bullets: [
          'Clearing the easy colour first and leaving a brick parked where the hard colour needed to go.',
          'Forgetting that frozen bricks take three slides to thaw. Count those slides into the budget before you start.',
          'Leaving keys and locks until late. They open parts of the board, so find out early what they open.',
          'Filling every empty cell when a generator is on the board. Generators bring more bricks onto the board, so leave room for what arrives.',
          'Treating conveyors and crates as scenery. A conveyor moves what sits on it and crates shape which lanes are open, so plan around both from the first move.',
        ],
      },
    ],
    references: [refs.w3cColor, refs.workingMemory],
    relatedSlugs: ['color-shape-accessibility', 'kinder-difficulty-curve', 'why-two-minute-puzzles-feel-good'],
    pullQuote: 'The moves you save come from the look you take before the first one.',
    faqs: [
      { question: 'What is the best strategy for colour sort puzzles?', answer: 'Read the whole board before moving: find which colours have a clear run to their exit, which pieces block more than one colour, and where the empty space is. Then clear the colour whose departure frees the most, and plan in short chunks of two to four moves.' },
      { question: 'How do I get three stars in OutBrick?', answer: 'Clear the board inside the solver’s move target without using any undo. Two stars need a clear inside the target; one star is any clear.' },
      { question: 'Does the free undo cost me a star?', answer: 'It can cost the third star, because three stars ask for no undo at all. You can still earn two stars after using it, as long as you clear inside the move target.' },
      { question: 'Can I play colour sort puzzles if I am colour-blind?', answer: 'Yes, if the game gives you more than colour to go on. OutBrick’s colour-blind mode is on by default and puts a matching glyph on every brick and gate, so shape carries the sort as well as hue. The [accessibility page](/accessibility) has the details.' },
    ],
  },
  {
    slug: 'relaxing-puzzle-games-what-makes-one-calm',
    title: 'Relaxing puzzle games: what actually makes one calm',
    dek: 'Soft colours are not enough. Move limits versus clocks, fair lives, and games that never interrupt you: how to tell if a puzzle game will stay calm.',
    category: 'Game craft',
    categoryColor: 'purple',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '7 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/relaxing-puzzle-games-what-makes-one-calm.webp',
    imageAlt: 'Three arched windows in an indigo brick wall showing real OutBrick villages, Lavender Hills, Firefly Wetlands and Cherry Blossom Town, with Flurry and Sprout on the sill',
    tags: ['relaxing puzzle games', 'puzzle games without timers', 'calm games', 'game design'],
    intro: 'A lot of app store pages call their puzzle game “relaxing”. Some games earn the word. Others put pastel colours and soft music over the same pressure you get everywhere else: a countdown in the corner, a lives system that runs dry just as you get going, an advert between every level. Here is what we look at when we judge whether a puzzle game is calm, and where OutBrick stands on each point, including the places where it asks something of you.',
    keyTakeaways: [
      'Calm is mostly about pressure: where it comes from, whether you can see it coming, and whether you choose it.',
      'A move limit asks you not to waste moves; a clock asks you not to think. Only one of those suits a relaxing game.',
      'Lives and adverts can be fair or unfair. Check what costs a life, how fast it comes back, and whether any advert plays without you asking for it.',
    ],
    sections: [
      {
        id: 'where-pressure-comes-from',
        title: 'Where the pressure in a puzzle game comes from',
        paragraphs: [
          'A puzzle is supposed to be a bit hard, and a hard board can still be restful. The pressure that makes a game feel frantic usually comes from outside the puzzle, and it tends to come from four places: time (a countdown, a shrinking bar), scarcity (lives, energy, tokens), interruption (adverts, pop-up offers, prompts between levels) and comparison (streaks that break, leaderboards pushed at you).',
          'None of these is automatically wrong. A timed mode can be great fun when you choose it. The test for a calm game is simpler: can you see every constraint before you start, and did you agree to it? A board that tells you its rules up front and then leaves you alone feels very different from one that changes the terms halfway through.',
          'The last of the four is the easiest to miss. A streak counter or a leaderboard can be a pleasant extra when you go looking for it. It becomes pressure when the game puts it in front of you at the moment you meant to stop, or frames a missed day as something lost. Notice where a game shows you those numbers, and whether it lets you ignore them.',
        ],
      },
      {
        id: 'move-limits-vs-clocks',
        title: 'Why a move limit feels different from a clock',
        paragraphs: [
          'A clock punishes thinking. Every second you spend reading the board is a second you lose, so the game rewards reflex and guessing. A move limit punishes waste instead. You can look at a board for as long as you like, and the only thing that costs you is a careless slide. For a puzzle game that wants to be restful, that difference matters more than any colour palette.',
          'OutBrick has no clock anywhere. The rope on each board is a move limit. Every board prints its move target and its limit from the first tap, so the budget is known before you spend any of it. When you run low, you are offered five more moves before anything else happens.',
          'There is an accessibility argument too. The web’s accessibility guidelines ask that time limits be possible to turn off, adjust or extend, because some people need more time to complete a task. A game without a clock has nothing to adjust. And the wider research on time pressure points the same way: in a study of interrupted office work, Mark, Gudith and Klocke found people compensated by working faster, and reported more stress, frustration and time pressure as they did.',
        ],
        sourceIds: ['w3c-timing-adjustable', 'interrupted-work-2008'],
      },
      {
        id: 'fair-lives',
        title: 'Lives, energy and what fair looks like',
        paragraphs: [
          'Plenty of calm games have lives, including ours, so the useful question is how they work. A fair lives system tells you exactly what costs a life, gives you enough of them to play a proper session, refills them without asking for money, and never takes one for simply trying.',
          'OutBrick used to ship with no lives and no adverts, and both of those changed, which is why the home page sets out [exactly what lives, undos and adverts cost](/#fair). Opening a board needs a life and spends none. Clearing a board costs nothing at all. A life goes only when an attempt ends without a clear. You hold five, eight with the Brick Pass, and one comes back every thirty minutes. Undo works the same way: the first one on every board is free and cannot run out, then a tank of five refills one every twenty-five minutes, and the undo offered when a board wedges is free and outside the tank.',
          'Watch what happens when you run out, too. In a fair system, running out is a pause with a known length. In OutBrick you can wait for the next life, or, if you choose, watch a rewarded video for one; both routes are stated before you ever need them. A game that greets an empty tank with a purchase screen and no clear refill time is using scarcity as a sales tool, and that rarely feels calm.',
        ],
        bullets: [
          'What exactly costs a life: starting, failing, or quitting?',
          'How many can you hold, and how long does one take to come back?',
          'Can you keep playing something while you wait?',
          'Is the refill ever used as a reason to show you an offer?',
        ],
      },
      {
        id: 'interruptions',
        title: 'Interruptions are the real enemy of calm',
        paragraphs: [
          'The quickest way to break a relaxing game is to interrupt it. A full-screen advert after every third level teaches you to brace before you tap “next”. A pop-up offer at the moment you fail turns a small disappointment into a sales pitch. Neither has anything to do with the puzzle, and both are where many puzzle games lose the calm they advertise.',
          'Here is how OutBrick handles it. There are six rewarded video placements: a life, five more moves, two undos, a booster armed before the first move, the clear card’s coins paid again, and a second spin of the Brick Wheel. Every one is opt-in and carries its own daily cap. There are no banners and no interstitials, nothing plays that you did not press a button to see, and nothing interrupts a board. Remove Ads switches advertising off for good.',
          'Why it matters is partly our opinion and partly the evidence. Studies of casual play have found short-term benefits to mood after a demanding task, and one found reduced stress after a casual game, though a mindfulness exercise did better on self-reported stress. Those effects depend on the player getting a spell of uninterrupted play. An advert every few minutes is a poor way to protect that.',
        ],
        sourceIds: ['restoration-2017', 'casual-stress-2021'],
      },
      {
        id: 'calm-checklist',
        title: 'A short checklist for calm puzzle games',
        paragraphs: [
          'Before you settle on a puzzle game to wind down with, spend five minutes checking it against the list below. Most games will pass some of these and fail others, and that is fine. (We have written separately about [when to play and when to pause](/blog/when-to-play-and-when-to-pause).) What matters is that you know which is which before it is eleven at night and a countdown has appeared.',
          'Calm also has a sensory side that store pages rarely mention. Screens full of flashing rewards and shaking buttons are tiring even when nothing is timed. OutBrick honours the system’s Reduce Motion setting everywhere, and its nine brick friends speak in text bubbles rather than voices, so a late-night board can be a quiet one.',
        ],
        bullets: [
          'No countdown on normal levels, or a timed mode you can ignore.',
          'The rules and limits of each level are visible before your first move.',
          'The cost of failing is stated plainly and is small.',
          'No advert plays unless you press a button to see it.',
          'Stopping between levels costs nothing.',
          'It plays offline, so a weak signal never stalls a level.',
          'Accessibility options such as colour-blind support and Reduce Motion are there and honoured.',
        ],
      },
    ],
    references: [refs.w3cTiming, refs.interruptedWork, refs.restoration, refs.casualStress],
    relatedSlugs: ['when-to-play-and-when-to-pause', 'designing-for-real-life-play', 'why-two-minute-puzzles-feel-good'],
    pullQuote: 'A clock punishes thinking. A move limit punishes waste.',
    faqs: [
      { question: 'What makes a puzzle game relaxing?', answer: 'Mostly the absence of pressure from outside the puzzle: no countdown, clear limits shown before you start, a small and stated cost for failing, and nothing that interrupts play without your say-so. A hard puzzle can still be relaxing if it leaves you alone to think.' },
      { question: 'Are there puzzle games without timers?', answer: 'Yes. Many puzzle games use a move limit or no limit at all. OutBrick has no clock anywhere; each board has a move limit, shown as a rope, alongside its move target.' },
      { question: 'Does OutBrick have lives and adverts?', answer: 'Yes. You hold five lives, eight with the Brick Pass, and one comes back every thirty minutes; a life goes only when an attempt ends without a clear. Adverts are rewarded videos you choose to watch, each with a daily cap, and there are no banners or interstitials.' },
      { question: 'Is a move limit stressful?', answer: 'Usually less than a clock, because thinking is free and only careless moves cost you. In OutBrick you are also offered five more moves when you run low, before anything else happens.' },
    ],
  },
  {
    slug: 'offline-puzzle-games-iphone',
    title: 'Offline puzzle games for iPhone: commutes and flights',
    dek: 'What to look for in a puzzle game for the Tube, a train or a flight: real offline play, one-handed controls, short boards and a light touch on battery.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '7 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/offline-puzzle-games-iphone.webp',
    imageAlt: 'A brick-built train carriage whose windows show real OutBrick villages and boards, with Bloo and Zippy riding on the roof',
    tags: ['offline puzzle games iPhone', 'offline games', 'games for flights', 'commuter games'],
    intro: 'The worst time to find out that a game needs a connection is in a tunnel, or at thirty-five thousand feet with the Wi-Fi switched off. “Plays offline” can mean several different things on a store page, and a good travel game needs more than that anyway: it has to work with one hand, fit between two stops, and not flatten your battery before you land. This is the checklist we use. We make OutBrick, so we use it as the worked example, and we have tried to keep to things you can check for yourself.',
    keyTakeaways: [
      'Test offline play at home in Airplane Mode before you travel, including a fresh launch and the next few levels.',
      'For commuting, one-handed controls and short, self-contained levels matter as much as offline support.',
      'Battery depends mostly on the screen and the game itself, so turn brightness down and use Low Power Mode on long trips.',
    ],
    sections: [
      {
        id: 'test-offline-first',
        title: 'Test offline play before you travel',
        paragraphs: [
          '“Offline” on a store listing covers a range. Some games work entirely without a connection. Some let you play but hold back rewards, daily content or saving until you are online again. Some load the first screen from memory and then stall on the second. You cannot tell which from the listing, so test it.',
          'The test takes five minutes. At home, switch on Airplane Mode, close the game fully and open it again. Play three levels, then go back to the menu and start the level after next. Look for anything that is greyed out, any spinner that does not stop, and whether the game still lets you move on after a clear. If all of that works, it will work on the plane.',
          'Do one more thing while you are still on Wi-Fi: open the App Store and install any pending updates for the games you plan to play. A game that asks for an update on launch is no use in a tunnel, and a large download over a patchy mobile signal at the gate is a poor start to a journey.',
          'OutBrick plays offline. If you play on more than one device, progress is stored in your iCloud, and a new device signed in to the same account picks up where the old one stopped: level, coins, streak and Collection.',
        ],
        bullets: [
          'Airplane Mode on, game fully closed, then reopened.',
          'Three levels played, then the level after next started from the menu.',
          'Nothing greyed out, no endless spinners, and progress still moves on after a clear.',
        ],
      },
      {
        id: 'one-handed-play',
        title: 'One hand, one thumb',
        paragraphs: [
          'On a busy train you are often holding a rail, a coffee or a bag with the other hand. Steven Hoober’s field study of how people actually hold their phones, based on 1,333 observations in streets, airports, cafés and on public transport, found 49% of people using one hand, 36% cradling the phone in one hand and tapping with the other, and 15% using both hands. A travel game has to work for the first group.',
          'Hoober also noted that people who use one hand hold the phone in a variety of positions, so a game cannot assume one grip. On the larger phones most people now carry, the top corners of the screen are hard to reach with the thumb of the hand holding the phone. Reaching them means shuffling the phone in your hand, which is exactly what you do not want to do on a moving train with a coffee in the other hand.',
          'Look for controls that are gestures rather than small buttons, a portrait layout, and nothing you need to reach in the top corners in the middle of a level. OutBrick is played with one finger: you drag a brick and it travels until something stops it. If you need them, every brick is also a VoiceOver element with an action for each way it can slide, and Larger Text scales throughout.',
        ],
        sourceIds: ['hoober-mobile-grip-2013'],
      },
      {
        id: 'sessions-between-stops',
        title: 'Levels that fit between two stops',
        paragraphs: [
          'Commuting play comes in pieces, a theme we explored in [the commuter puzzle](/blog/commuter-puzzle-two-minute). The right unit is a level you can finish in the gap between two stations, with a clear end, so that putting the phone away feels like stopping rather than abandoning something. Long levels and chained objectives work against that.',
          'Timers work against it more, which is one reason [calm puzzle games](/blog/relaxing-puzzle-games-what-makes-one-calm) tend to drop them. When a station announcement or a ticket inspection takes your attention, a clock in the corner keeps running. Research on interrupted work suggests people respond to interruption by speeding up, and pay for it in stress. A game with no clock does not add to that. OutBrick has no countdown anywhere, a board takes about two minutes, and clearing one costs nothing. A life goes only when an attempt ends without a clear, and one comes back every thirty minutes.',
          'It also helps when the larger structure breaks into small pieces. On OutBrick’s [Journey](/#journey), each village holds twelve levels, so “finish this village before my stop” is a goal you can actually meet.',
          'The last test is the easiest to overlook: can you put the game down? A good commuting game leaves you at a natural stopping point often, and does not greet you with a pile of timed offers when you come back. You want your stop to be the thing that ends a session, and the game to be something you pick up again when you feel like it.',
        ],
        sourceIds: ['interrupted-work-2008'],
      },
      {
        id: 'battery-and-attention',
        title: 'Battery, sound and attention',
        paragraphs: [
          'Going offline removes one drain on the battery, but the screen and the game itself still draw power. On a long journey the two most useful switches are the brightness slider and Low Power Mode, which Apple describes as reducing background activity to extend battery life. If a game offers reduced motion or a lower frame rate, a long flight is a good time to use it. OutBrick honours the system’s Reduce Motion setting everywhere.',
          'Sound is the other thing to check. A game that depends on audio cues is awkward on a quiet carriage without headphones. OutBrick’s nine brick friends speak in text bubbles and have no voices, so nothing they say is lost with the sound off. And because colour-blind mode is on by default, every brick and gate carries a glyph as well as a colour, which can help when a carriage light is dim or washes the colours out.',
        ],
        sourceIds: ['apple-low-power-mode'],
      },
      {
        id: 'beyond-the-phone',
        title: 'Beyond the phone',
        paragraphs: [
          'On a long flight, a bigger screen is kinder to your eyes and your neck. If a game runs on iPad as well as iPhone and shares progress between them, the tablet on the tray table and the phone in the queue for passport control can be the same game. OutBrick runs on iPhone, iPad, Mac, Apple TV and Apple Vision Pro, and there is a standalone Apple Watch game for when the phone is in the overhead locker.',
          'Before your next trip, run through the list below once. It takes a few minutes at home and saves a frustrating hour later.',
        ],
        bullets: [
          'Tested in Airplane Mode from a cold start.',
          'Playable with one thumb in portrait.',
          'Levels short enough to finish between two stops.',
          'No clock that runs while you look away.',
          'Playable on mute.',
          'Brightness down, Low Power Mode on for long trips.',
        ],
      },
    ],
    references: [refs.hoober, refs.interruptedWork, refs.appleLowPower],
    relatedSlugs: ['commuter-puzzle-two-minute', 'when-to-play-and-when-to-pause', 'designing-for-real-life-play'],
    pullQuote: 'The worst time to find out that a game needs a connection is in a tunnel.',
    faqs: [
      { question: 'Which puzzle games work offline on iPhone?', answer: 'Many do, but “offline” can mean full play or only part of it. The reliable way to know is to test: switch on Airplane Mode, close the game, reopen it and play a few levels. OutBrick plays offline.' },
      { question: 'Does OutBrick work in Airplane Mode?', answer: 'Yes. OutBrick plays offline, so you can play boards with no connection at all. Progress is kept in your iCloud, and a new device signed in to the same account picks up where you left off.' },
      { question: 'Do offline games use less battery?', answer: 'Turning the network off removes one drain, but the screen and the game still use power. On long trips, lower the brightness and switch on Low Power Mode, which reduces background activity.' },
      { question: 'Can I play OutBrick on Apple Watch?', answer: 'Yes. There is a standalone Apple Watch game, alongside versions for iPhone, iPad, Mac, Apple TV and Apple Vision Pro.' },
    ],
  },
  {
    slug: 'apple-watch-puzzle-games',
    title: 'Apple Watch puzzle games: what works on a tiny screen',
    dek: 'Glanceable boards, fingertip-sized pieces, the Digital Crown, haptics and standalone play: what makes a puzzle game work on Apple Watch.',
    category: 'Game craft',
    categoryColor: 'purple',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '7 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/apple-watch-puzzle-games.webp',
    imageAlt: 'An illustrated watch frame around a real OutBrick board on an indigo brick ground, with Bloo and Poppy on either side',
    tags: ['Apple Watch puzzle games', 'games for Apple Watch', 'watchOS', 'game design'],
    intro: 'Most puzzle games are designed for a screen you hold in your hand and look at for a few minutes. An Apple Watch screen sits on your wrist, gets a glance of a few seconds, and is worked by the hand you are not wearing it on. That changes nearly every design decision, from how big a piece can be to what a clear should feel like. OutBrick has a standalone Apple Watch game, so these are questions I have spent a lot of time on. This piece is about the design space in general: what Apple’s own guidance says, and what I look for when I try a puzzle game on the wrist.',
    keyTakeaways: [
      'Watch play happens in glances. Apple describes interactions that often last less than a minute, so a wrist puzzle has to be readable at once and safe to drop mid-move.',
      'A small board with big pieces beats a shrunk phone layout. Apple suggests watchOS buttons of 44 by 44 points by default and never below 28 by 28.',
      'Haptics work best as punctuation: one clear meaning per pattern, used sparingly, backing up what the screen already shows.',
    ],
    sections: [
      {
        id: 'design-for-the-glance',
        title: 'Design for the glance',
        paragraphs: [
          'Apple’s description of how people use a watch is the best brief a wrist puzzle designer can get. People raise their wrist, hold the display about a foot from their eyes, and use the other hand to interact. They glance at the watch many times a day, in interactions that can last less than a minute each. Apple’s list of best practices for watchOS opens with the same idea: support quick, glanceable, single-screen interactions.',
          'For a puzzle, that rules out a lot. A board you have to scroll to see is out, because the whole state has to be visible in the time it takes to raise a wrist. So is a board with thirty small pieces, because nobody can read it in a glance. The boards that work on a watch are small ones with few pieces, strong contrast and one obvious goal. The depth has to come from how the pieces get in each other’s way rather than from how many of them there are.',
          'Text needs the same care. Apple’s guidance for games lists a default text size of 16 points on watchOS and a minimum of 12. Anything a player must read during a board, such as a move count, belongs at the default size or above. Anything that can be left out of the wrist version probably should be.',
        ],
        sourceIds: ['apple-hig-watchos', 'apple-hig-games'],
      },
      {
        id: 'input-on-the-wrist',
        title: 'Taps, drags and the Digital Crown',
        paragraphs: [
          'On the watch, people use the gestures they know from iPhone: tap, swipe and drag. The difference is scale. A fingertip covers a large share of a watch display, so the piece you are moving and the space you are moving it into can both disappear under your finger. Apple recommends buttons of 44 by 44 points by default on watchOS, and never smaller than 28 by 28. Game pieces follow the same logic. If a piece is smaller than a fingertip, players will miss it or grab its neighbour.',
          'The Digital Crown is the other input, and since watchOS 10 Apple has treated it as the main way to navigate: turning it scrolls lists and moves between vertically paginated screens. Apps receive turns of the Crown but not presses, which the system keeps for itself. Apple also asks that anything anchored to the Crown has a matching touch interaction, and that the screen responds visibly as it turns, because otherwise people assume it does nothing.',
          'For puzzle designers, the Crown suits choices along one line: stepping through a list of levels, choosing which piece is selected, or scrubbing back through moves. It is a poor fit for moving things around a two-dimensional grid. Whatever it does, a player should always be able to do the same thing with a finger. There is no fallback to a controller either. Apple’s guidance for games notes that watchOS is the one Apple platform that does not support physical game controllers.',
        ],
        sourceIds: ['apple-hig-games', 'apple-hig-digital-crown'],
      },
      {
        id: 'sessions-in-seconds',
        title: 'Sessions measured in seconds',
        paragraphs: [
          'A phone puzzle can assume the player has settled in for a few minutes. A watch puzzle cannot. The wrist drops when a bus arrives, a kettle boils or someone starts talking, and the game has to accept that without penalty. In practice that means saving the board after every move, coming back to exactly the same position on the next raise, and never letting anything run down while the screen is dark.',
          'Clocks are the clearest example. A countdown on a watch puzzle punishes the player for the very thing the device is built around, which is looking away. A move limit works much better, because it asks the player not to waste moves and then waits for them. OutBrick has no clock anywhere in the game, and a board takes about two minutes, which already sits at the short end of what a puzzle can be. The reasoning behind that length is in [why two-minute puzzles feel good](/blog/why-two-minute-puzzles-feel-good).',
          'The shape of the progression matters too. A wrist session is one board, occasionally two. Long chains of objectives, daily tasks that need ten boards to complete, and story scenes between levels all work against it. A watch puzzle should make a single board feel like a complete thing to have done, so that lowering your arm feels like finishing rather than abandoning.',
        ],
        sourceIds: ['apple-hig-watchos'],
      },
      {
        id: 'haptics-as-punctuation',
        title: 'Haptics as punctuation',
        paragraphs: [
          'The watch sits against your skin, which makes haptics unusually effective. watchOS defines a set of built-in haptic patterns, each with its own meaning, played by the Taptic Engine and combined with an audible tone. Apple’s advice is to use those patterns for what they are documented to mean, and to use haptics consistently, so that each pattern has a clear link to the action that caused it.',
          'A puzzle has only a few events worth feeling: a piece arriving somewhere useful, a move that is blocked, and a clear. Give each one its own pattern and keep to it. If the same buzz means both “blocked” and “solved”, the player stops trusting it. Apple also warns against overuse, noting that a haptic which feels right now and then can become tiresome when it plays often. On a watch that is an easy mistake to make, and a tap on every slide of every piece turns a quiet game into a buzzing one.',
          'Apple’s own test is a good one: the best haptic is often one people are not conscious of, but miss when it is turned off. Haptics should back up what the screen shows and never replace it, because some people play with them switched off.',
        ],
        sourceIds: ['apple-hig-haptics'],
      },
      {
        id: 'standalone-or-companion',
        title: 'Standalone or companion',
        paragraphs: [
          'A watch game can arrive in two ways. Apple’s developer documentation describes watch-only apps, which have no iPhone app at all, and watch apps that come with a companion iPhone app but can be installed and run without it. Apple encourages independent apps either way, because people expect watch apps to work when their phone is not with them. When there is a companion app, in-app purchases are universal, so something bought once is available on both devices.',
          'For players the useful question is simpler: does the watch game run on its own, or is it a remote control for the phone? A standalone game is the one you can play on a walk with the phone left at home. OutBrick has a standalone Apple Watch game, alongside versions for iPhone, iPad, Mac, Apple TV and Apple Vision Pro. Progress lives in your iCloud, so a new device signed in to the same account picks up where the old one stopped.',
          'If you are trying out puzzle games on your wrist, this is the short list I use. Most games pass some of these and fail others; the ones that pass all six tend to stay on the watch.',
        ],
        bullets: [
          'The whole board is readable in one glance, without scrolling.',
          'Pieces are at least as big as a fingertip.',
          'Anything the Digital Crown does can also be done by touch.',
          'Dropping your wrist mid-board costs nothing.',
          'Each haptic means one thing, and they are not constant.',
          'The game runs without the phone nearby.',
        ],
        sourceIds: ['apple-watch-independent-apps'],
      },
    ],
    references: [refs.higWatchOS, refs.higGames, refs.higDigitalCrown, refs.higHaptics, refs.watchIndependent],
    relatedSlugs: ['offline-puzzle-games-iphone', 'why-two-minute-puzzles-feel-good', 'designing-for-real-life-play'],
    pullQuote: 'A countdown on a watch puzzle punishes the player for the very thing the device is built around, which is looking away.',
    faqs: [
      { question: 'What makes a good Apple Watch puzzle game?', answer: 'A board you can read in one glance, pieces big enough to hit with a fingertip, no clock, and a game that saves after every move so you can drop your wrist at any time. Haptics help when each pattern means one thing and they are used sparingly.' },
      { question: 'Do Apple Watch games need an iPhone?', answer: 'Not always. Apple lets developers ship watch-only apps, and watch apps that can be installed and run independently of their iPhone companion. The simplest check is to try the game with your phone out of range.' },
      { question: 'Is OutBrick on Apple Watch?', answer: 'Yes. OutBrick has a standalone Apple Watch game, and it also runs on iPhone, iPad, Mac, Apple TV and Apple Vision Pro.' },
      { question: 'Can watch games use the Digital Crown?', answer: 'Yes. Apps receive turns of the Digital Crown and can use them for scrolling, selecting or adjusting values. Presses of the Crown are reserved for the system, and Apple asks that anything done with the Crown can also be done by touch.' },
    ],
  },
  {
    slug: 'apple-vision-pro-puzzle-games',
    title: 'Apple Vision Pro puzzle games: designing for space',
    dek: 'Comfort, gaze and pinch, windows versus immersion, seated play and legible pieces: what makes a puzzle game work well on Apple Vision Pro.',
    category: 'Game craft',
    categoryColor: 'purple',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '7 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/apple-vision-pro-puzzle-games.webp',
    imageAlt: 'Three floating rounded windows showing a real OutBrick board and two brick-built villages against a soft violet sky, with Vio and Sprout below',
    tags: ['Vision Pro puzzle games', 'Apple Vision Pro games', 'visionOS', 'game design'],
    intro: 'A puzzle game on Apple Vision Pro starts from an unusual place. The board no longer has an edge set by the glass: it floats wherever the player puts it, at whatever size looks right, and the player picks things out by looking at them. That freedom makes some old puzzle habits better and some much worse. OutBrick runs on Apple Vision Pro, but this piece is about the design space in general, drawing on Apple’s Human Interface Guidelines and on what we think makes a puzzle comfortable to play for more than a few minutes.',
    keyTakeaways: [
      'Comfort comes first. Apple’s guidance is to keep content in front of the player, at a comfortable distance, and usable with hands resting in the lap.',
      'Looking is how you aim, so pieces need space around them and rounded shapes that the eye can settle on.',
      'Most puzzles belong in a window. Immersion is worth using for a moment, and rarely for the whole game.',
    ],
    sections: [
      {
        id: 'comfort-first',
        title: 'Comfort before spectacle',
        paragraphs: [
          'Apple’s introduction to the platform starts with ergonomics for a reason. People wearing Vision Pro see everything, real and virtual, through the device’s cameras, and Apple calls visual comfort paramount. Its advice is to show content within the wearer’s field of view, avoid placing it where they have to turn their head, avoid motion that is jarring or too fast, and support gestures people can make with their hands resting in their lap or at their sides.',
          'Puzzle games are well placed to meet all of that. A board is a still object that waits for you. Nothing needs to fly past the player’s head, and nothing requires them to stand up. The risk is the opposite temptation: using the extra room to make everything bigger, closer and busier than it needs to be. A board that fills the whole view forces the eyes to travel, and a celebration that sprays particles past the player’s shoulders is exactly the kind of motion Apple asks designers to avoid.',
          'Distance matters as much as size. Apple suggests placing content that people read or engage with over time at least a metre away, and keeping very close content for brief interactions. A puzzle is the kind of thing people look at for a long time, so it belongs at reading distance rather than at arm’s length.',
        ],
        sourceIds: ['apple-hig-visionos', 'apple-hig-eyes'],
      },
      {
        id: 'gaze-and-pinch',
        title: 'Looking is aiming',
        paragraphs: [
          'On Vision Pro, people usually target an object by looking at it and select it with an indirect gesture, such as tapping finger and thumb together, with the hand resting wherever it happens to be. The system highlights whatever they look at, so they can confirm it before they tap. To protect privacy, visionOS does not tell an app where someone is looking before they tap.',
          'That has direct consequences for a puzzle board. Eyes make small, quick movements even when someone is looking at one spot, so crowded targets are hard to pick out. Apple suggests at least 16 points of space around interactive items, or centres at least 60 points apart. It also recommends rounded shapes, because the eye is drawn to corners and finds it hard to stay on the centre of a sharp-edged shape. A dense grid of square tiles packed edge to edge is close to the worst case. Pieces with rounded corners, a little space between them and a clear highlight suit the way the platform works.',
          'Direct touch is possible too: people can reach out and touch a virtual object. Apple notes that this can be tiring, especially when the object sits at or above eye level, and suggests keeping direct gestures for nearby objects and short periods. For a game played over many boards, indirect gestures should be the default, with direct touch on offer for those who like it.',
        ],
        sourceIds: ['apple-hig-eyes', 'apple-hig-spatial-layout'],
      },
      {
        id: 'window-or-immersive',
        title: 'A window first, immersion by choice',
        paragraphs: [
          'visionOS apps start in the Shared Space, where several apps sit side by side in windows the player can move anywhere. An app can also move to a Full Space, where it is the only thing running, and choose how much of the room to replace. Mixed immersion blends its content with the real surroundings, progressive immersion replaces part of them, and full immersion replaces all of them. In a progressive experience, people turn the Digital Crown to set how much they see.',
          'Apple’s advice is to find the minimum level of immersion each moment needs, and to prefer launching in the Shared Space or in mixed immersion so people choose when to go further. For most puzzle games that points to a window. A board is a contained, interface-led thing, which is what Apple says windows are for, and a window lets the player keep a drink, a conversation or another app in view. Apple also warns against opening too many windows, since they crowd the room and make an app harder to move.',
          'Immersion can still earn a place. A finished chapter or a map of the whole game are moments where a short step into a fuller space might feel like a reward. The test is whether the player chose it and can leave it easily.',
        ],
        sourceIds: ['apple-hig-immersive', 'apple-hig-visionos', 'apple-hig-spatial-layout'],
      },
      {
        id: 'seated-play',
        title: 'Built for sitting still',
        paragraphs: [
          'Vision Pro brings content to people instead of asking them to move to it, and Apple’s guidance is to let people use an app with little or no physical movement unless movement is essential to it. For a puzzle game that is easy, since nothing about sliding a piece needs the player to walk anywhere. It also matters for safety: Apple says the device should not be used while operating a vehicle, and is not designed for moving around near hazards such as stairs, balconies or streets.',
          'Seated play changes the rhythm of a session as well. Someone on a sofa or at a desk may play for longer than they would on a phone in a queue, and that is where fair limits count. A game with no clock, and a move limit shown from the start, lets a player think for as long as they like. OutBrick has no countdown anywhere, and every board prints its move target and its limit from the first tap.',
          'Apple also points out that people can press and hold the Digital Crown at any time to bring content back in front of them, so an app does not need its own control for that. A puzzle that stays where the player put it, and comes back on request, is doing the right thing.',
        ],
        sourceIds: ['apple-hig-visionos', 'apple-hig-spatial-layout', 'apple-hig-immersive'],
      },
      {
        id: 'legible-pieces',
        title: 'Pieces people can read',
        paragraphs: [
          'Legibility works differently when a point is no longer a fixed number of pixels. visionOS defines a point as an angle, and windows use dynamic scale: they grow as they move away and shrink as they come closer, so they appear the same size at any distance. For the same reason, Apple recommends vector artwork in games, so graphics stay sharp as the system rescales them.',
          'Apple’s guidance for games lists a default text size of 17 points on visionOS and a minimum of 12, and a default button size of 60 by 60 points with a minimum of 28 by 28. Depth needs restraint too. Apple advises against adding depth to text, which is harder to read when it seems to hover above its background, and notes that every change in depth makes the eyes refocus. A calm, clear board with a little depth on the pieces usually reads better than a stack of floating layers.',
          'Colour carries the same accessibility duty it does anywhere else. Apple Vision Pro supports VoiceOver, Switch Control, Dwell Control and other assistive features, and a puzzle that sorts by colour should add a second signal, such as a shape on every piece. We cover that principle in [colour and shape accessibility](/blog/color-shape-accessibility). Before settling on a puzzle game for Vision Pro, it is worth checking it against the list below.',
        ],
        bullets: [
          'Playable seated, with your hands resting in your lap.',
          'The board sits at a comfortable distance and stays where you put it.',
          'Pieces are well spaced, rounded, and highlight clearly when you look at them.',
          'Immersion is offered, never forced.',
          'No clock, so thinking time is free.',
          'Colour is never the only way to tell pieces apart.',
        ],
        sourceIds: ['apple-hig-games', 'apple-hig-spatial-layout', 'apple-hig-visionos'],
      },
    ],
    references: [refs.higVisionOS, refs.higEyes, refs.higSpatialLayout, refs.higImmersive, refs.higGames],
    relatedSlugs: ['apple-watch-puzzle-games', 'color-shape-accessibility', 'relaxing-puzzle-games-what-makes-one-calm'],
    pullQuote: 'A board is a still object that waits for you.',
    faqs: [
      { question: 'Are there puzzle games for Apple Vision Pro?', answer: 'Yes. OutBrick is one: it runs on Apple Vision Pro as well as iPhone, iPad, Mac and Apple TV, and has a standalone Apple Watch game.' },
      { question: 'How do you control games on Apple Vision Pro?', answer: 'Mostly with your eyes and hands. You look at an object to target it and tap your finger and thumb together to select it. You can also touch nearby objects directly, and Apple lists game controllers, keyboards, mice, trackpads and spatial game controllers as further options for games.' },
      { question: 'Do Vision Pro games have to be immersive?', answer: 'No. Apps start in the Shared Space, in windows alongside other apps, and Apple recommends using only as much immersion as each moment needs. For most puzzle games, a window is the right place to start.' },
      { question: 'Do I need to stand up or move around to play?', answer: 'Not for a well-designed puzzle game. Apple’s guidance is to let people play with little or no physical movement, using gestures they can make with their hands resting in their lap.' },
    ],
  },
  {
    slug: 'games-like-tetris',
    title: 'Games like Tetris: what makes a block puzzle last',
    dek: 'Simple rules, a board you can read, fair difficulty and a short loop: what makes block puzzles endure, and how to judge any game like Tetris.',
    category: 'Game craft',
    categoryColor: 'purple',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '7 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/games-like-tetris.webp',
    imageAlt: 'Studded bricks in red, yellow, teal, violet, blue and green falling towards a real OutBrick board on an indigo ground, watched by Bricko and Zippy',
    tags: ['games like Tetris', 'block puzzle games', 'puzzle design', 'Tetris'],
    intro: 'Search for games like Tetris and you will find hundreds of block puzzles: pieces that fall, pieces that slide, pieces you drop onto a grid, pieces you sort by colour. Most are forgotten within a week of being installed. A few get played for years. We make one of them, OutBrick, a sliding-brick puzzle, so we are not neutral, and we will not rank anybody else’s game. What we can do is set out the design qualities that help a block puzzle last, with Tetris as the reference point, so you can judge any game in the genre for yourself.',
    keyTakeaways: [
      'The block puzzles that last have a rule you can learn in seconds and a board whose whole state you can read at a glance.',
      'Fair difficulty means every loss can be traced to a decision, whether the pressure comes from speed, as in Tetris, or from a move limit.',
      'A short loop, from a single piece to a single board, is what lets a block puzzle fit into a day for years.',
    ],
    sections: [
      {
        id: 'where-the-genre-starts',
        title: 'Where the genre starts',
        paragraphs: [
          'The Tetris Company’s history dates the first version to 1984, when Alexey Pajitnov built it on an Electronika 60 computer in Moscow. From there it went through a long tangle of rights negotiations and on to Nintendo’s Game Boy, which shipped with Tetris included. The history is told by the rights-holder, so any sales figures in it are the company’s own, but the outline is well established. We have looked at [how Tetris’s small ruleset keeps opening up](/blog/tetris-simple-rules-infinite-variation) in an earlier piece.',
          'What Tetris set up is a family more than a formula: pieces made of square cells, a grid that fills, and a rule that clears space when you complete a pattern. Games like Tetris vary almost every part of that. Some drop pieces under gravity, some let you place them anywhere on a grid, and some give you fixed pieces to slide around a crowded board and out through an exit. The ones that last share a handful of qualities that have little to do with which variant they picked.',
        ],
        sourceIds: ['tetris-history'],
      },
      {
        id: 'simple-rules',
        title: 'A rule you can learn in seconds',
        paragraphs: [
          'Tetris can be explained in one sentence: fit the falling pieces together so that rows fill and clear. Nearly every lasting block puzzle has a rule of that size, and its depth comes from the situations the rule creates. When a game needs a tutorial chapter before the first real level, it is usually because the rules are carrying weight that the board ought to carry.',
          'Small rules also resist brute force, which is part of why they stay interesting. Breukelaar and colleagues proved that even the offline version of Tetris, where you know every piece in advance, is NP-complete for goals such as clearing the most rows. Sliding-block puzzles are harder still in the formal sense: Hearn and Demaine showed the general case is PSPACE-complete. For players, that means no known shortcut solves every board, so each board is a fresh problem.',
          'OutBrick’s rule is the same size. Slide a brick and it glides until something stops it; get every brick out through the gate that matches its colour. New pieces arrive over a long game, including keys and locks, frozen bricks, generators, conveyors and crates, but each one is a new angle on the same rule rather than a new rule to learn.',
        ],
        sourceIds: ['tetris-hard-2004', 'sliding-block-pspace-2005'],
      },
      {
        id: 'readable-state',
        title: 'A board you can read',
        paragraphs: [
          'Look at a game of Tetris at any moment and the whole state is in front of you: the stack, the gaps, the current piece and the next one. Nothing important is hidden. That readability is what lets a player plan, and planning is what makes a puzzle feel like thinking rather than luck.',
          'Research on Tetris players shows how much of the skill lives in looking. Kirsh and Maglio watched people play and found they often rotated and shifted pieces to see their options faster, rather than to move them closer to where they would land. They called these epistemic actions: moves made to make thinking easier rather than to change the position. Lindstedt and Gray measured 39 features of play for 240 players, each playing Tetris for an hour, and found that experts stood apart through an integrated mix of perception, decision-making and action, which they called the Mind’s Hand and the Mind’s Eye.',
          'For a block puzzle designer the lesson is to make the state easy to take in and to make trying things cheap. Clear colours backed by shape, pieces that look like what they do, and an undo that invites experiment all help. In OutBrick, colour-blind mode is on by default and stamps a glyph on every brick and gate, and the first undo on every board is free.',
        ],
        sourceIds: ['epistemic-action-1994', 'tetris-expertise-2019'],
      },
      {
        id: 'fair-difficulty',
        title: 'Difficulty that feels fair',
        paragraphs: [
          'Tetris gets harder by getting faster. That works because the rules never change: the player loses to their own placements under pressure, and can see exactly where the stack went wrong. Fair difficulty means that when you lose, you can see why. Unfair difficulty is a board that could never have been cleared, a twist the player had no way to see coming, or a rule revealed only after it has cost them.',
          'Speed is one kind of pressure, and there are others. A sliding or placing puzzle can ask for efficiency instead of reflexes, with a move limit in place of a clock. That trades the rush of Tetris at high levels for time to think, which suits a different mood and often a different player. Both are fair when the limit is visible before you start.',
          'Fairness also depends on every board being possible. A puzzle, whether made by hand or generated, should be checked before a player sees it. OutBrick’s 2,000 boards were each cleared by a solver before they shipped, and every board shows its move target and limit from the first tap. Difficulty should then rise in steps the player can feel, with new ideas introduced one at a time; our piece on [a kinder difficulty curve](/blog/kinder-difficulty-curve) goes into how.',
        ],
      },
      {
        id: 'short-loop',
        title: 'A loop that fits into a day',
        paragraphs: [
          'The smallest unit of Tetris is one piece, a few seconds of decision. The next unit up is one game, which can be short or long depending on skill. That nesting is a large part of why it has lasted. You can play a single game while the kettle boils, and the same game can hold your attention for an hour.',
          'Lasting block puzzles tend to keep a short unit at their core. A single board or round should be finishable in a few minutes, have a clear end, and cost nothing to stop after. Streaks, daily goals and events can sit around that core, but once they start dictating how long you play, the game has swapped its loop for a schedule. An OutBrick board takes about two minutes and clearing one costs nothing, which is the scale we think the genre works best at. There is more on that in [why two-minute puzzles feel good](/blog/why-two-minute-puzzles-feel-good).',
          'Whichever kind of block puzzle you prefer, these are the questions worth asking in the first ten minutes with a new one. If sliding puzzles are new to you, [how to solve sliding block puzzles](/blog/how-to-solve-sliding-block-puzzles) is a good place to start.',
        ],
        bullets: [
          'Could you explain the rule to a friend in one sentence?',
          'Can you see everything that matters on the board at once?',
          'When you lose, can you point to the move that did it?',
          'Is every level known to be solvable, and are the limits shown up front?',
          'Can you finish one round in a few minutes and stop without losing anything?',
          'Do new mechanics arrive one at a time, as variations on the same rule?',
        ],
      },
    ],
    references: [refs.tetris, refs.tetrisHard, refs.slidingPspace, refs.epistemicAction, refs.tetrisExpertise],
    relatedSlugs: ['tetris-simple-rules-infinite-variation', 'how-to-solve-sliding-block-puzzles', 'kinder-difficulty-curve'],
    pullQuote: 'Fair difficulty means that when you lose, you can see why.',
    faqs: [
      { question: 'What kinds of games are like Tetris?', answer: 'Tetris belongs to a large family of block puzzles: falling-block games, grid games where you place pieces onto a board, and sliding-block puzzles where fixed pieces move around a crowded board. OutBrick is a sliding-brick colour-sort puzzle. Rather than trusting a ranking, try the checklist in this article on any game you are considering.' },
      { question: 'What is the difference between falling and sliding block puzzles?', answer: 'In a falling-block game, new pieces keep arriving and the pressure usually comes from speed. In a sliding-block puzzle, the pieces are usually all on the board from the start and the challenge is finding the order of moves that clears it, often within a move limit.' },
      { question: 'Why has Tetris lasted so long?', answer: 'A rule you can learn in seconds, a board whose whole state is visible, difficulty that comes from speed rather than hidden rules, and a round short enough for a spare few minutes. The Tetris Company dates the first version to 1984.' },
      { question: 'Is OutBrick like Tetris?', answer: 'It shares the family traits: bricks made of square cells, a small rule and short rounds. The difference is that OutBrick’s bricks slide rather than fall, there is no clock, and each board has a move limit instead.' },
    ],
  },
  {
    slug: 'are-puzzle-games-good-for-your-brain',
    title: 'Are puzzle games good for your brain? What the research says',
    dek: 'Puzzles are often sold as brain training. Here is what the studies actually show about memory, ageing and mood, and what nobody can honestly promise.',
    category: 'Learning through play',
    categoryColor: 'gold',
    publishedAt: 'September 25, 2026',
    updatedAt: 'September 25, 2026',
    readingTime: '8 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/are-puzzle-games-good-for-your-brain.webp',
    imageAlt: 'Sprout and Peach either side of a real OutBrick board in colour-blind mode on iPhone, with studded bricks on an indigo wall',
    tags: ['are puzzle games good for your brain', 'brain training', 'puzzles and memory', 'puzzle games research'],
    intro: 'Few claims in games are repeated as often as this one: puzzles keep your brain young. It sounds right, and a whole industry was built on it. The research is more interesting and more modest than the marketing. We make a puzzle game, OutBrick, so we have every reason to want the answer to be a loud yes. It is not, and we would rather tell you what the evidence supports than sell you something it does not.',
    keyTakeaways: [
      'Practising a puzzle reliably makes you better at that puzzle; evidence that the gains spread to everyday thinking is weak.',
      'People who do puzzles often tend to score better on thinking tests, but those studies cannot show that the puzzles caused it.',
      'The best-supported reasons to play are enjoyment, a short lift in mood and a pleasant way to rest your attention.',
    ],
    sections: [
      {
        id: 'the-promise',
        title: 'Where the promise came from',
        paragraphs: [
          'In the 2000s and early 2010s, “brain training” became a product category. Apps and handheld games promised sharper memory, faster thinking and protection against decline, often with a daily score to prove it. The pitch was simple: the brain is a muscle, and puzzles are the gym.',
          'In 2014 the Stanford Center on Longevity and the Max Planck Institute for Human Development published a statement from a group of scientists pushing back. Their conclusion was that the gains from brain games tend to be small, narrow and short-lived, and that there was little evidence they improve everyday abilities or prevent Alzheimer’s disease. The statement was disputed at the time, and a rival letter from other researchers argued that some forms of training do have evidence behind them. The argument itself is a clue: this is not a settled yes.',
          'Two years later the US Federal Trade Commission settled with Lumos Labs, the company behind Lumosity, over advertising that claimed its games improved performance at work and school and could delay age-related decline. The FTC’s finding was about what had been advertised without adequate support, not a scientific verdict that the games do nothing. It did make one thing clear: claims about protecting the brain need evidence, and that evidence was not there.',
        ],
        sourceIds: ['stanford-consensus-2014', 'ftc-lumosity-2016'],
      },
      {
        id: 'near-and-far',
        title: 'Getting better at the game is not the same as getting sharper',
        paragraphs: [
          'The most thorough look at the question is a 2016 review by Daniel Simons and colleagues in Psychological Science in the Public Interest. They went through the studies that brain-training companies themselves cited. The pattern was consistent: people improved at the tasks they practised, improved less at closely related tasks, and showed little evidence of improvement on different tasks or in everyday thinking.',
          'Researchers call this the difference between near transfer and far transfer. If you play a lot of sliding-block puzzles, you get better at sliding-block puzzles: you spot blockers sooner and plan exits further ahead. That is real learning. What the evidence does not show is that the skill spreads to remembering where you parked or following a complicated conversation.',
          'The review also found that none of the studies it examined met all of the standards the authors set out for good trials. Small samples, weak comparison groups and the chance that people who expect to improve simply try harder on the follow-up test all make positive results harder to trust. That is not a reason to think puzzles are bad for you. It is a reason to be wary of anyone who puts a number on how much younger they will make your brain.',
        ],
        sourceIds: ['brain-training-review-2016'],
      },
      {
        id: 'puzzlers-score-better',
        title: 'Puzzlers do score better. Here is the catch',
        paragraphs: [
          'Some of the most quoted findings come from the UK PROTECT study. In 2019, Helen Brooker and colleagues reported on more than 19,000 adults aged 50 to 93 who did online cognitive tests and said how often they did word or number puzzles. The more often people said they did puzzles, the better they tended to score, across every measure tested. Those who never did puzzles scored lowest.',
          'It is a large and careful study, and it is still a snapshot. It shows that puzzles and good test scores go together, not which one causes the other. People with sharper thinking may simply enjoy puzzles more and do them more often. Independent experts made exactly this point when the studies were published, and the widely reported claim that puzzlers had brains “eight years younger” came from press coverage rather than from the papers themselves.',
          'Trials, where people are assigned to an activity, are the way to get at cause and effect, and they are rarer. One of the more interesting ones, by Devanand and colleagues in 2022, randomly assigned 107 people with mild cognitive impairment to web-based crosswords or to a suite of computerised brain games for 78 weeks. The crosswords group did slightly better on the main cognitive measure. There was no group that did nothing, so the trial tells us crosswords beat those games, not that either beats ordinary life. It is also a reminder that “computerised brain game” is not automatically the stronger option.',
        ],
        sourceIds: ['number-puzzles-2019', 'crosswords-trial-2022'],
      },
      {
        id: 'what-trials-show',
        title: 'What longer trials have found',
        paragraphs: [
          'The best-known long-running trial is ACTIVE, which enrolled 2,832 older adults in the United States and gave them ten sessions of about an hour each of training in memory, reasoning or speed of processing, with some later boosters. Ten years on, the reasoning and speed groups were still more likely than the control group to be at or above their starting level on those abilities. The memory group’s advantage had faded. Trained participants also reported less difficulty with daily activities, although that was self-reported.',
          'Two points matter here. First, ACTIVE trained specific skills with purpose-built exercises, not casual puzzle games, so its results cannot simply be borrowed by an app. Second, even this well-run trial shows modest, specific effects. Anyone promising broad protection from a few minutes of play a day is claiming far more than the best studies support.',
          'Smaller studies of ordinary puzzle apps are more mixed still. A pilot trial by Urwyler and colleagues had healthy adults play tablet puzzle games for 20 minutes a day and found improvements on one attention measure but no change in overall thinking, mood or quality of life, from a sample of 11 people. That is a feasibility study, not proof either way.',
        ],
        sourceIds: ['active-trial-2014', 'puzzle-pilot-2023'],
      },
      {
        id: 'honest-reasons',
        title: 'The honest reasons to play',
        paragraphs: [
          'If puzzles are not a proven brain vitamin, why play them? Because the reasons that hold up are good ones. A puzzle gives you a problem with a clear edge, a small and fair challenge, and the satisfaction of solving it. Short sessions of casual play have been linked to better mood after a demanding task, which we looked at in [why a two-minute puzzle can feel like a proper reset](/blog/why-two-minute-puzzles-feel-good). That is a modest claim, and it is enough.',
          'The 2014 scientists’ statement ended with advice that is worth repeating: stay physically active, mentally engaged and socially connected. A puzzle game can be one small part of the second of those, especially one you share with someone. It is not a substitute for the other two, and no game should tell you it is.',
          'We designed OutBrick with that in mind. It makes no health claims. Its boards are short and solvable, with no clock, so you can think rather than race. If it becomes a small daily pleasure, that is the whole point. If you want to get better at it, that is real learning too, and our guide on [how to solve sliding block puzzles](/blog/how-to-solve-sliding-block-puzzles) will help.',
        ],
        bullets: [
          'Be sceptical of any game that promises to make you smarter or prevent decline.',
          'Choose puzzles because you enjoy them; enjoyment is what keeps a habit going.',
          'Mix it up: new kinds of problems stretch you more than repeating one you have mastered.',
          'Keep puzzles alongside movement, sleep and time with other people, not instead of them.',
        ],
        sourceIds: ['restoration-2017'],
      },
    ],
    references: [refs.stanfordConsensus, refs.ftcLumosity, refs.simonsBrain, refs.numberPuzzles, refs.crosswordsTrial, refs.activeTrial, refs.puzzlePilot, refs.restoration],
    relatedSlugs: ['why-two-minute-puzzles-feel-good', 'games-teach-curiosity-without-lecture', 'puzzle-games-for-older-adults'],
    pullQuote: 'People improved at the tasks they practised. The evidence that it spread further is thin.',
    faqs: [
      { question: 'Do puzzle games improve memory?', answer: 'They reliably improve your skill at the puzzles you practise. Reviews of brain-training research have found little evidence that those gains carry over to everyday memory or thinking.' },
      { question: 'Can puzzles prevent dementia?', answer: 'No study has shown that puzzle games prevent dementia. People who do puzzles often tend to score better on thinking tests, but those studies cannot show that the puzzles caused it. Regulators have acted against brain-training companies that claimed otherwise.' },
      { question: 'Are crosswords better than brain-training apps?', answer: 'In one 78-week trial of people with mild cognitive impairment, web-based crosswords did slightly better than a set of computerised brain games on the main cognitive measure. The trial had no no-training group, so it does not show that either beats doing neither.' },
      { question: 'Is OutBrick a brain-training game?', answer: 'No. OutBrick is a sliding-brick colour-sort puzzle made to be enjoyed, and it makes no health claims. Its boards are short, solvable and have no clock.' },
    ],
  },
  {
    slug: 'puzzle-games-for-older-adults',
    title: 'Puzzle games for older adults: what to look for',
    dek: 'Readable text, generous buttons, no clock and colours you can tell apart: a practical checklist for choosing a puzzle game at 50, 70 or 90.',
    category: 'Inclusive design',
    categoryColor: 'teal',
    publishedAt: 'September 25, 2026',
    updatedAt: 'September 25, 2026',
    readingTime: '8 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/puzzle-games-for-older-adults.webp',
    imageAlt: 'Peach and Bloo either side of a real OutBrick board on iPad, with large studded bricks on a blue wall',
    tags: ['puzzle games for older adults', 'games for seniors', 'accessible puzzle games', 'iPad puzzle games'],
    intro: 'Plenty of the people playing puzzle games on phones and tablets are grandparents, and many of those games were plainly not designed with them in mind: tiny buttons, pale text, a countdown ticking in the corner and colours that blur into each other. This is a practical guide for choosing a puzzle game that works well at any age, whether you are picking one for yourself or setting up a tablet for a parent. We make OutBrick and use it as the worked example, but every point on the checklist applies to any game.',
    keyTakeaways: [
      'Older adults are a large share of mobile puzzle players, and most play on a smartphone or tablet.',
      'Check text size, button size, colour contrast and the absence of a clock before anything else.',
      'Turn on the iPhone and iPad accessibility settings first, then see which games respect them.',
    ],
    sections: [
      {
        id: 'who-plays',
        title: 'Older players are a big part of the audience',
        paragraphs: [
          'AARP’s 2023 research found that 45% of Americans aged 50 and over play video games, around 52 million people, and 84% of them play on a smartphone. Puzzle and logic games were the most popular type, played by 73% of those gamers, ahead of card and tile games and word games. Almost half play every day.',
          'A follow-up AARP study in 2024 asked older players about accessibility. About two-thirds said age-related changes, most often in vision, affect how they play, and half had run into at least one accessibility problem while gaming. The features they asked for most included adjustable text size, a way to turn off distracting effects, easy onboarding and adjustable difficulty. Those figures come from the United States, but the problems are universal.',
        ],
        sourceIds: ['aarp-gamers-2023', 'aarp-accessibility-2024'],
      },
      {
        id: 'readable',
        title: 'Text you can read and buttons you can hit',
        paragraphs: [
          'Small text and small tap targets were the main barriers in Nielsen Norman Group’s long-running usability tests with people over 65, and older participants made more mistakes than younger ones on the same tasks. Games are no different. A level that is easy to solve but hard to see, or a button you keep missing, turns a restful puzzle into a chore.',
          'Apple’s design guidelines give a default size of 44 by 44 points for controls on iPhone and iPad and ask apps to let text grow a long way, ideally by supporting the system’s Dynamic Type sizes. The web’s accessibility guidelines set a lower minimum of 24 by 24 pixels for targets, with 44 by 44 at their strictest level. You do not need to measure anything: if you find yourself tapping twice, or squinting, the game is too small for you.',
          'The quickest test is to change the system text size before you judge a game. On iPhone and iPad, go to Settings, then Accessibility, then Display & Text Size, and turn on Larger Text. Then open the game. Good games get bigger. Others ignore the setting entirely. In OutBrick, Larger Text scales throughout, and on an iPad the bricks themselves are large enough to tap comfortably.',
        ],
        sourceIds: ['nng-older-adults-2019', 'apple-hig-accessibility', 'w3c-target-size', 'apple-display-text-size'],
      },
      {
        id: 'colour',
        title: 'Colours you can tell apart',
        paragraphs: [
          'Colour vision changes with age, and not in the way many people expect. The lens of the eye yellows over time, and the colours that become hardest to separate are usually blues, purples and some yellows and greens, rather than the red and green of common colour blindness. Tamura and Sato found that older adults took far longer than younger ones to find a target that differed from its surroundings only on a blue–yellow axis.',
          'That matters a great deal for colour-sort and match-three games, which often lean on exactly those shades. Look for a game that backs colour up with something else: a symbol, a shape or a pattern on each piece. Apple’s Differentiate Without Colour setting, under Display & Text Size, asks apps to do this, and good games respect it. OutBrick goes further: its colour-blind mode is on by default and stamps a distinct glyph on every brick and the gate it belongs to, so colour is never the only clue. We wrote more about this in [why colour should never be the only clue in a puzzle](/blog/color-shape-accessibility).',
        ],
        sourceIds: ['colour-search-age-2020'],
      },
      {
        id: 'no-rush',
        title: 'No clock, no rush, no surprises',
        paragraphs: [
          'A countdown is one of the least friendly things a game can add for an older player. Reaction times slow with age, and a timer turns a thinking puzzle into a reflex test. Look for games with no clock on normal levels, or with a move limit instead, so that time spent thinking is free. OutBrick has no clock anywhere; each board has a move limit shown before your first move.',
          'Motion is the other thing to check. Flashing rewards, screen shakes and swooping transitions are tiring for many people and uncomfortable for some. On iPhone and iPad, Settings, then Accessibility, then Motion, then Reduce Motion replaces sliding and zooming effects with gentle fades in apps that support it. OutBrick honours Reduce Motion everywhere.',
          'Finally, look at how the game makes money, because that is where most unwelcome surprises come from. Adverts that play on their own, pop-up offers when you fail and prompts to buy are confusing when you are new to a game, and easy to tap by accident. A game should say plainly what costs what. OutBrick lists [exactly what lives, undos and adverts cost](/#fair) on its home page: adverts are rewarded videos that only play when you press a button to see them.',
        ],
        sourceIds: ['apple-reduce-motion'],
      },
      {
        id: 'checklist',
        title: 'A checklist to use in the first ten minutes',
        paragraphs: [
          'Setting a game up for someone else? Do it together, and let them decide how it should look and feel. Turn the accessibility settings on first, sign in to their Apple Account so progress is kept, and play a few levels side by side. Games you enjoy together are also the ones most likely to become a shared habit, which is a good reason in itself. And a word of honesty: puzzle games are a pleasure, not a medicine. We looked at [what the research says about puzzles and the brain](/blog/are-puzzle-games-good-for-your-brain) separately.',
        ],
        bullets: [
          'Does the text get bigger when you turn on Larger Text?',
          'Can you hit every button first time, including the small ones in the corners?',
          'Is every piece recognisable by shape or symbol, not only by colour?',
          'Is there no clock on normal levels?',
          'Does it respect Reduce Motion?',
          'Does anything play, pop up or ask for money without you pressing a button?',
          'Can you stop at any moment without losing anything?',
          'Does it work offline, so a weak signal never gets in the way?',
        ],
      },
    ],
    references: [refs.aarpGamers, refs.aarpAccessibility, refs.nngOlderAdults, refs.higAccessibility, refs.w3cTargetSize, refs.appleTextSize, refs.colourSearchAge, refs.appleReduceMotion],
    relatedSlugs: ['color-shape-accessibility', 'relaxing-puzzle-games-what-makes-one-calm', 'are-puzzle-games-good-for-your-brain'],
    pullQuote: 'A level that is easy to solve but hard to see turns a restful puzzle into a chore.',
    faqs: [
      { question: 'What makes a puzzle game good for older adults?', answer: 'Readable text that grows with the system text size, large buttons, pieces you can tell apart by shape as well as colour, no countdown, calm motion and no adverts or offers that appear on their own.' },
      { question: 'Is an iPad or an iPhone better for puzzle games?', answer: 'An iPad gives bigger pieces and buttons, which many older players find easier to see and tap. A phone is handier to carry. Many games, including OutBrick, run on both and keep progress in step through iCloud.' },
      { question: 'Which iPhone settings help with games?', answer: 'Under Settings, Accessibility: Display & Text Size for Larger Text, Bold Text and Differentiate Without Colour, and Motion for Reduce Motion. Games that support these settings become easier to read and calmer to play.' },
      { question: 'Does OutBrick work for older players?', answer: 'It was designed to. There is no clock, colour-blind mode is on by default with a glyph on every brick, Larger Text scales throughout, Reduce Motion is honoured, and it plays on iPhone and iPad.' },
    ],
  },
  {
    slug: 'history-of-sliding-block-puzzles',
    title: 'History of sliding block puzzles: 15 Puzzle to Rush Hour',
    dek: 'A post office in New York, an 1880 craze, a famous puzzler’s false claim and a parking-lot puzzle from Tokyo: how sliding blocks became a classic.',
    category: 'Game craft',
    categoryColor: 'purple',
    publishedAt: 'September 25, 2026',
    updatedAt: 'September 25, 2026',
    readingTime: '8 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/history-of-sliding-block-puzzles.webp',
    imageAlt: 'A classic 15 Puzzle tray with the 14 and 15 swapped, beside a real OutBrick board on iPhone, with Bloo and Sprout',
    tags: ['history of sliding block puzzles', '15 puzzle', 'Klotski', 'Rush Hour puzzle'],
    intro: 'Every time you slide a brick out of a crowded OutBrick board, you are playing a very old game. Sliding block puzzles have been around for nearly 150 years, and their history includes a nationwide craze, a mathematical proof published just as it began, one of the longest-running false claims in puzzle history, and a parking-lot puzzle from Tokyo that became a classroom staple. This is the short version, with the dates that are known and a clear flag on the ones that are still argued over.',
    keyTakeaways: [
      'The 15 Puzzle came from Canastota, New York, and swept the United States in 1880; Sam Loyd did not invent it.',
      'Almost as soon as it appeared, mathematicians proved that half of all starting positions can never be solved.',
      'Klotski-style and Rush Hour puzzles moved the challenge from ordering tiles to getting one block out, the idea OutBrick is built on.',
    ],
    sections: [
      {
        id: 'before-the-craze',
        title: 'Before the craze',
        paragraphs: [
          'The core idea of a sliding block puzzle is a frame with pieces and not quite enough room: you can only move a piece into the empty space. That idea was already on paper before the famous version arrived. A US patent granted to Ernest Kinsey in 1878 describes puzzle blocks that slide inside a frame with one gap.',
          'The puzzle that made the idea famous was the 15 Puzzle: fifteen numbered tiles in a four-by-four tray, with one space. The long-standing research of Jerry Slocum and Dic Sonneveld, set out in their 2006 book The 15 Puzzle, traces it to Noyes Chapman, the postmaster of Canastota in New York state. Versions were being sold as the Gem Puzzle by the end of 1879.',
        ],
        sourceIds: ['kinsey-patent-1878', 'fifteen-puzzle-book-2006'],
      },
      {
        id: 'fifteen-craze',
        title: '1880: the year of the 15 Puzzle',
        paragraphs: [
          'In the early months of 1880 the 15 Puzzle became a craze. It spread across the United States within weeks and on to Europe, turning up in offices, parlours and newspaper columns. Accounts differ on the exact weeks, but by the spring it was everywhere, and by the summer it was fading. Chapman applied for a patent, which was refused; the reason is not certain, and one likely explanation is that earlier sliding-block patents already covered the idea.',
          'Part of the fascination was that some starting positions seemed impossible, and they were. In 1879 William Woolsey Johnson and William Story published notes on the puzzle in the American Journal of Mathematics showing that exactly half of all arrangements can never be solved. The argument rests on parity: every slide changes the arrangement in a way that keeps a hidden even-or-odd count fixed, so a position with the wrong count cannot be reached, however long you try.',
          'That result explains the most famous trick in the puzzle’s history. Swap only the 14 and the 15 in a finished tray and you have a position that looks one move from done and is in fact unreachable.',
        ],
        sourceIds: ['fifteen-puzzle-notes-1879'],
      },
      {
        id: 'sam-loyd',
        title: 'The claim that fooled everyone',
        paragraphs: [
          'For most of the twentieth century, the 15 Puzzle was credited to Sam Loyd, America’s best-known puzzle writer. Loyd said he had invented it and offered a large prize for solving the impossible 14–15 swap. Slocum and Sonneveld’s research found that Loyd first made the claim in 1891, more than a decade after the craze, and kept it up until his death in 1911. There is no evidence he had anything to do with inventing the puzzle, or that his prize was on offer during 1880.',
          'The claim stuck because Loyd was famous, his puzzle books were widely reprinted, and later writers repeated it. It is a good reminder that puzzle history, like any history, is worth checking against the record.',
        ],
        sourceIds: ['fifteen-puzzle-book-2006'],
      },
      {
        id: 'get-one-block-out',
        title: 'From ordering tiles to getting one block out',
        paragraphs: [
          'The next big family changed the goal. Instead of putting tiles in order, you had to move one large block to an exit through a crowd of smaller ones. A patent filed by Lewis W. Hardy in 1907 and granted in 1912 describes ten blocks of different sizes packed into a box and moved only by sliding. A closely related design was sold as the Pennant Puzzle.',
          'Similar puzzles followed under many names. The Smithsonian’s collection holds a Dad’s Puzzler, copyrighted in 1926, with one large square block, several rectangles and two small squares. In many countries the family is known today as Klotski, and in China a version called Huarong Dao tells the story of a general escaping an ambush. Minimum solutions for the classic layouts run to around 80 moves, depending on how you count a move.',
          'In the 1990s the idea found its most successful modern form. The Japanese puzzle designer Nob Yoshigahara created a sliding-car puzzle known as Tokyo Parking, and Binary Arts, later ThinkFun, released it in the United States in 1996 as Rush Hour. Cars and lorries block a small grid; you slide them back and forth until your car can drive out. Graded challenge cards took it from a single puzzle to a series, and it became a fixture of classrooms and family tables.',
        ],
        sourceIds: ['hardy-patent-1912', 'dads-puzzler-smithsonian', 'rush-hour-thinkfun-2018'],
      },
      {
        id: 'hard-for-computers',
        title: 'Why they are hard, even for computers',
        paragraphs: [
          'Sliding block puzzles look like toys, but they are serious objects in computer science. It took until 1999 to establish that any solvable position of the 15 Puzzle can be finished in at most 80 single-tile moves; Korf and Schultze later confirmed it with a search that ran for 28 days and found exactly 17 positions that need all 80.',
          'In 2002 Gary Flake and Eric Baum proved that the general form of Rush Hour, on a board of any size, is PSPACE-complete, a class of problems believed to be even harder than the famous NP-complete ones. Robert Hearn and Erik Demaine then showed in 2005 that general sliding-block puzzles are PSPACE-complete too, even when every block is the same small domino. In plain terms, there is no known shortcut that solves every board quickly, which is exactly why a good sliding puzzle stays interesting.',
        ],
        sourceIds: ['fifteen-puzzle-search-2005', 'rush-hour-pspace-2002', 'sliding-block-pspace-2005'],
      },
      {
        id: 'where-outbrick-fits',
        title: 'Where OutBrick fits',
        paragraphs: [
          'OutBrick belongs to the get-one-block-out branch of the family, with a twist of its own: every brick has somewhere to go. A brick glides until something stops it, and it leaves the board only through the gate that matches its colour. Clearing a board means working out the order, as it did for Hardy’s blocks and Yoshigahara’s cars.',
          'The modern tools help in ways the 1880 players would have envied. Every one of OutBrick’s 2,000 boards was cleared by a solver before it shipped, so no player ever meets a 14–15 swap. If you want the practical side of all this history, our guide on [how to solve sliding block puzzles](/blog/how-to-solve-sliding-block-puzzles) sets out the strategies, and you can [try a board in your browser](/play).',
        ],
        bullets: [
          'Late 1870s: sliding blocks in a frame appear in US patents.',
          'Late 1879: the 15 Puzzle is on sale; Johnson and Story prove half of all positions unsolvable.',
          '1880: the 15 Puzzle craze sweeps the United States and Europe.',
          '1891: Sam Loyd first claims to have invented it.',
          '1907–1912: Hardy’s get-one-block-out puzzle is patented.',
          '1996: Rush Hour is released in the United States.',
          '2002–2005: Rush Hour and sliding-block puzzles are proved PSPACE-complete.',
        ],
      },
    ],
    references: [refs.kinseyPatent, refs.fifteenBook, refs.fifteenNotes, refs.hardyPatent, refs.dadsPuzzler, refs.rushHourHistory, refs.fifteenSearch, refs.rushHourPspace, refs.slidingPspace],
    relatedSlugs: ['how-to-solve-sliding-block-puzzles', 'games-like-tetris', 'tetris-simple-rules-infinite-variation'],
    pullQuote: 'Swap only the 14 and the 15 and you have a position that looks one move from done and can never be reached.',
    faqs: [
      { question: 'Who invented the 15 Puzzle?', answer: 'Research by Jerry Slocum and Dic Sonneveld credits Noyes Chapman, the postmaster of Canastota, New York. It was on sale by the end of 1879 and became a craze in 1880. Sam Loyd claimed it from 1891 onwards, but there is no evidence he invented it.' },
      { question: 'Is every 15 Puzzle solvable?', answer: 'No. Johnson and Story showed in 1879 that exactly half of all arrangements can never be solved, because every slide preserves a hidden parity. Any solvable position can be finished in at most 80 single-tile moves.' },
      { question: 'What is Klotski?', answer: 'Klotski is a common name for sliding-block puzzles where one large block must be moved to an exit through smaller ones. An early version was patented by Lewis W. Hardy, filed in 1907 and granted in 1912.' },
      { question: 'Who invented Rush Hour?', answer: 'Rush Hour was created by the Japanese puzzle designer Nob Yoshigahara and released in the United States in 1996 by Binary Arts, the company later renamed ThinkFun.' },
    ],
  },
  {
    slug: 'verifying-2000-sliding-block-boards',
    title: 'How we verified 2,000 sliding-block puzzle boards before release',
    dek: 'A pathfinding result is only the beginning. Here is how we replayed a clear for every OutBrick board against the same rules the game uses.',
    category: 'Game craft',
    categoryColor: 'purple',
    publishedAt: 'September 25, 2026',
    updatedAt: 'September 25, 2026',
    readingTime: '6 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/how-to-solve-sliding-block-puzzles.webp',
    imageAlt: 'A real OutBrick sliding-block board with colour and glyph cues, shown alongside the game’s block pieces',
    tags: ['game development', 'puzzle design', 'pathfinding', 'quality assurance', 'sliding block puzzles'],
    intro: '“Two thousand boards, all solvable” sounds like one claim. It is really a chain of them. A search must find a route; that route must still work when replayed from the board’s real starting state; and each move must obey the same rules that players meet. For OutBrick, we kept route-finding and route-checking as separate jobs, then replayed a witness for every board before release.',
    keyTakeaways: [
      'The search looks for a clearing route with weighted A* and an ExitTable heuristic; it is designed to find a good route quickly, not to prove that route is shortest.',
      'A separate witness replay applies every saved move with the game’s rules and rejects illegal, nondeterministic, out-of-bounds, overlapping or uncleared results.',
      'A node budget that runs out means “unknown”. It is never evidence that a board has no solution.',
    ],
    sections: [
      {
        id: 'one-rules-engine',
        title: 'Start with one rules engine',
        paragraphs: [
          'A solver is only trustworthy if its idea of a move matches the game. In a sliding-block puzzle, a piece may glide until it reaches a wall, another piece or a gate that will not admit its colour. OutBrick adds stateful details too: keys can change gates, ice can take several slides to clear, and generators can introduce queued pieces. Reimplementing a simplified version of those rules for the verifier would leave a gap exactly where a bug could hide.',
          'So the search asks the game’s own rules for legal moves and applies those moves through the same state-transition code used by play. The state key also includes the gate state, and includes a folded move count when cycling or timed gates make that count relevant. Two boards that look alike but have different live gate states must remain different search states.',
        ],
      },
      {
        id: 'search-finds-route',
        title: 'Use search to find a route, not to claim perfection',
        paragraphs: [
          'The solver uses weighted A*. Its ExitTable heuristic asks how many slides each piece would need to reach a fitting exit if the other bricks were taken away. That relaxed board is cheaper to reason about than the real one and gives the search a useful estimate of what remains. Weighting the heuristic more heavily favours finding a clear quickly.',
          'That choice has a limit: the route found is useful, but it is not guaranteed to be the shortest. A search can also stop at its node budget. When that happens the answer is unknown; the solver does not label the board impossible. Only a fully exhausted reachable state space can support a no-clear verdict. Keeping those outcomes distinct prevents a time limit or cancellation from becoming a false claim about the puzzle.',
        ],
      },
      {
        id: 'replay-the-witness',
        title: 'Replay the witness from the original board',
        paragraphs: [
          'Finding a route is not the final check. For each authored board, we store a witness: the sequence of moves from its initial state to a clear. The replay starts from a fresh game state, checks that the initial state is valid, and applies the witness one move at a time through the real rules. An illegal move fails the replay immediately.',
          'The checker also replays each move from the same before-state and compares the resulting state, events and outcome. This catches transitions that would behave differently when repeated. After each move it checks that every piece remains on a valid board cell and that no two pieces occupy the same cell. At the end, the board must actually be clear. A route that merely looks plausible, or stops with one brick still inside, does not count.',
        ],
      },
      {
        id: 'solvable-isnt-difficulty',
        title: 'Solvable is not the same as well-paced',
        paragraphs: [
          'A legal witness proves that a route exists. It does not prove that a person will find it, that it feels fair, or that the board is difficult in the right way. Nor does the solver’s route establish an optimal move count. Those are separate design questions, which is why we treat a full-pack replay as a correctness gate and assess pacing and difficulty separately.',
          'The move limit must also leave room for the board’s verified route. The player can think as long as they need: the limit counts moves, and OutBrick has no clock. That gives the puzzle pressure without turning the validation result into a timer.',
        ],
      },
      {
        id: 'repeatable-release-check',
        title: 'Make the check repeatable at release time',
        paragraphs: [
          'The useful release result is not “the solver ran once”. It is that every board in the pack had a witness that replayed cleanly against the rules being shipped. When a rule or a board changes, the pack can be checked again, and the first failing move points to the part of the contract that broke: legality, determinism, board geometry or the final clear.',
          'That is how we checked OutBrick’s 2,000 boards before release. You can try the same kind of sliding puzzle on the [free browser board](/play), or [download OutBrick for iPhone and iPad](https://apps.apple.com/us/app/outbrick/id6807997465).',
        ],
      },
    ],
    references: [],
    relatedSlugs: ['how-to-solve-sliding-block-puzzles', 'designing-for-real-life-play', 'history-of-sliding-block-puzzles'],
    pullQuote: 'A found route is a candidate. A clean replay under the game’s rules is evidence.',
    faqs: [
      { question: 'Does the solver find the shortest solution?', answer: 'No. Weighted A* is used to find a good clearing route quickly, but that route is not guaranteed to be optimal. The replay check verifies that the route is legal and clears the board.' },
      { question: 'What happens when the solver reaches its node budget?', answer: 'The result is unknown, not unsolvable. A budget limit or cancellation is not a proof that no route exists.' },
      { question: 'What does “solver-verified” mean for an OutBrick board?', answer: 'A route was found and replayed from the board’s starting state through the game rules. The replay checks legal moves, repeatable state transitions, valid non-overlapping positions and a completed clear.' },
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
