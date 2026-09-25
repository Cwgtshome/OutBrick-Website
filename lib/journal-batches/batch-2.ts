import type { BlogArticle, BlogReference } from '../blog.ts';

/**
 * Journal batch 2. Same shape and copy conventions as lib/blog.ts (see the note above
 * `baseArticles` there); every reference is a peer-reviewed source, cited in APA 7, and
 * checked against Crossref by `pnpm verify:refs`.
 *
 * Theme: play, well-being and everyday habits.
 */

const ref = (id: string, label: string, citation: string, doi: string): BlogReference => ({
  id,
  label,
  citation,
  url: `https://doi.org/${doi}`,
});

const r = {
  // Sleep
  weaverSleep: ref(
    'weaver-2010',
    'Weaver et al. (2010)',
    'Weaver, E., Gradisar, M., Dohnt, H., Lovato, N., & Douglas, P. (2010). The effect of presleep video-game playing on adolescent sleep. Journal of Clinical Sleep Medicine, 6(2), 184–189.',
    '10.5664/jcsm.27769',
  ),
  kingSleep: ref(
    'king-2013',
    'King et al. (2013)',
    'King, D. L., Gradisar, M., Drummond, A., Lovato, N., Wessel, J., Micic, G., Douglas, P., & Delfabbro, P. (2013). The impact of prolonged violent video-gaming on adolescent sleep: An experimental study. Journal of Sleep Research, 22(2), 137–143.',
    '10.1111/j.1365-2869.2012.01060.x',
  ),
  exelmansGaming: ref(
    'exelmans-2015',
    'Exelmans & Van den Bulck (2015)',
    'Exelmans, L., & Van den Bulck, J. (2015). Sleep quality is negatively related to video gaming volume in adults. Journal of Sleep Research, 24(2), 189–196.',
    '10.1111/jsr.12255',
  ),
  exelmansShuteye: ref(
    'exelmans-2017',
    'Exelmans & Van den Bulck (2017)',
    'Exelmans, L., & Van den Bulck, J. (2017). Bedtime, shuteye time and electronic media: Sleep displacement is a two-step process. Journal of Sleep Research, 26(3), 364–370.',
    '10.1111/jsr.12510',
  ),
  kroeseProcrastination: ref(
    'kroese-2016',
    'Kroese et al. (2016)',
    'Kroese, F. M., Evers, C., Adriaanse, M. A., & de Ridder, D. T. D. (2016). Bedtime procrastination: A self-regulation perspective on sleep insufficiency in the general population. Journal of Health Psychology, 21(5), 853–862.',
    '10.1177/1359105314540014',
  ),
  przybylskiSleep: ref(
    'przybylski-2019-sleep',
    'Przybylski (2019)',
    'Przybylski, A. K. (2019). Digital screen time and pediatric sleep: Evidence from a preregistered cohort study. The Journal of Pediatrics, 205, 218–223.e1.',
    '10.1016/j.jpeds.2018.09.054',
  ),
  haleGuan: ref(
    'hale-guan-2015',
    'Hale & Guan (2015)',
    'Hale, L., & Guan, S. (2015). Screen time and sleep among school-aged children and adolescents: A systematic literature review. Sleep Medicine Reviews, 21, 50–58.',
    '10.1016/j.smrv.2014.07.007',
  ),

  // Breaks and recovery
  albulescuBreaks: ref(
    'albulescu-2022',
    'Albulescu et al. (2022)',
    'Albulescu, P., Macsinga, I., Rusu, A., Sulea, C., Bodnaru, A., & Tulbure, B. T. (2022). “Give me a break!” A systematic review and meta-analysis on the efficacy of micro-breaks for increasing well-being and performance. PLOS ONE, 17(8), e0272460.',
    '10.1371/journal.pone.0272460',
  ),
  kimMicroBreaks: ref(
    'kim-2017',
    'Kim et al. (2017)',
    'Kim, S., Park, Y., & Niu, Q. (2017). Micro-break activities at work to recover from daily work demands. Journal of Organizational Behavior, 38(1), 28–44.',
    '10.1002/job.2109',
  ),
  arigaBreaks: ref(
    'ariga-2011',
    'Ariga & Lleras (2011)',
    'Ariga, A., & Lleras, A. (2011). Brief and rare mental “breaks” keep you focused: Deactivation and reactivation of task goals preempt vigilance decrements. Cognition, 118(3), 439–443.',
    '10.1016/j.cognition.2010.12.007',
  ),
  heltonBreaks: ref(
    'helton-2012',
    'Helton & Russell (2012)',
    'Helton, W. S., & Russell, P. N. (2012). Brief mental breaks and content-free cues may not keep you focused. Experimental Brain Research, 219(1), 37–46.',
    '10.1007/s00221-012-3065-0',
  ),
  ruppRestoration: ref(
    'rupp-2017',
    'Rupp et al. (2017)',
    'Rupp, M. A., Sweetman, R., Sosa, A. E., Smither, J. A., & McConnell, D. S. (2017). Searching for affective and cognitive restoration: Examining the restorative effects of casual video game play. Human Factors, 59(7), 1096–1107.',
    '10.1177/0018720817715360',
  ),
  reineckeWork: ref(
    'reinecke-2009-work',
    'Reinecke (2009)',
    'Reinecke, L. (2009). Games at work: The recreational use of computer games during working hours. CyberPsychology & Behavior, 12(4), 461–465.',
    '10.1089/cpb.2009.0010',
  ),
  reineckeRecovery: ref(
    'reinecke-2009-recovery',
    'Reinecke (2009)',
    'Reinecke, L. (2009). Games and recovery: The use of video and computer games to recuperate from stress and strain. Journal of Media Psychology, 21(3), 126–142.',
    '10.1027/1864-1105.21.3.126',
  ),
  reineckeMedia: ref(
    'reinecke-2011',
    'Reinecke et al. (2011)',
    'Reinecke, L., Klatt, J., & Krämer, N. C. (2011). Entertaining media use and the satisfaction of recovery needs: Recovery outcomes associated with the use of interactive and noninteractive entertaining media. Media Psychology, 14(2), 192–215.',
    '10.1080/15213269.2011.573466',
  ),
  sonnentagFritz: ref(
    'sonnentag-fritz-2007',
    'Sonnentag & Fritz (2007)',
    'Sonnentag, S., & Fritz, C. (2007). The Recovery Experience Questionnaire: Development and validation of a measure for assessing recuperation and unwinding from work. Journal of Occupational Health Psychology, 12(3), 204–221.',
    '10.1037/1076-8998.12.3.204',
  ),
  bennettRecovery: ref(
    'bennett-2018',
    'Bennett et al. (2018)',
    'Bennett, A. A., Bakker, A. B., & Field, J. G. (2018). Recovery from work-related effort: A meta-analysis. Journal of Organizational Behavior, 39(3), 262–275.',
    '10.1002/job.2217',
  ),
  collinsCox: ref(
    'collins-cox-2014',
    'Collins & Cox (2014)',
    'Collins, E., & Cox, A. L. (2014). Switch on to games: Can digital games aid post-work recovery? International Journal of Human-Computer Studies, 72(8–9), 654–662.',
    '10.1016/j.ijhcs.2013.12.006',
  ),
  collinsMindfulness: ref(
    'collins-2019',
    'Collins et al. (2019)',
    'Collins, E., Cox, A., Wilcock, C., & Sethu-Jones, G. (2019). Digital games and mindfulness apps: Comparison of effects on post work recovery. JMIR Mental Health, 6(7), e12853.',
    '10.2196/12853',
  ),

  // Flow
  jacksonMarsh: ref(
    'jackson-marsh-1996',
    'Jackson & Marsh (1996)',
    'Jackson, S. A., & Marsh, H. W. (1996). Development and validation of a scale to measure optimal experience: The Flow State Scale. Journal of Sport and Exercise Psychology, 18(1), 17–35.',
    '10.1123/jsep.18.1.17',
  ),
  gameFlow: ref(
    'sweetser-wyeth-2005',
    'Sweetser & Wyeth (2005)',
    'Sweetser, P., & Wyeth, P. (2005). GameFlow: A model for evaluating player enjoyment in games. Computers in Entertainment, 3(3), 3.',
    '10.1145/1077246.1077253',
  ),
  kellerBless: ref(
    'keller-bless-2008',
    'Keller & Bless (2008)',
    'Keller, J., & Bless, H. (2008). Flow and regulatory compatibility: An experimental approach to the flow model of intrinsic motivation. Personality and Social Psychology Bulletin, 34(2), 196–209.',
    '10.1177/0146167207310026',
  ),
  harmatTetris: ref(
    'harmat-2015',
    'Harmat et al. (2015)',
    'Harmat, L., de Manzano, Ö., Theorell, T., Högman, L., Fischer, H., & Ullén, F. (2015). Physiological correlates of the flow experience during computer game playing. International Journal of Psychophysiology, 97(1), 1–7.',
    '10.1016/j.ijpsycho.2015.05.001',
  ),
  fullagarFlow: ref(
    'fullagar-2013',
    'Fullagar et al. (2013)',
    'Fullagar, C. J., Knight, P. A., & Sovern, H. S. (2013). Challenge/skill balance, flow, and performance anxiety. Applied Psychology, 62(2), 236–259.',
    '10.1111/j.1464-0597.2012.00494.x',
  ),

  // Screen time and detox
  orbenNhb: ref(
    'orben-przybylski-2019-nhb',
    'Orben & Przybylski (2019a)',
    'Orben, A., & Przybylski, A. K. (2019a). The association between adolescent well-being and digital technology use. Nature Human Behaviour, 3(2), 173–182.',
    '10.1038/s41562-018-0506-1',
  ),
  orbenDiaries: ref(
    'orben-przybylski-2019-diaries',
    'Orben & Przybylski (2019b)',
    'Orben, A., & Przybylski, A. K. (2019b). Screens, teens, and psychological well-being: Evidence from three time-use-diary studies. Psychological Science, 30(5), 682–696.',
    '10.1177/0956797619830329',
  ),
  goldilocks: ref(
    'przybylski-weinstein-2017',
    'Przybylski & Weinstein (2017)',
    'Przybylski, A. K., & Weinstein, N. (2017). A large-scale test of the Goldilocks hypothesis: Quantifying the relations between digital-screen use and the mental well-being of adolescents. Psychological Science, 28(2), 204–215.',
    '10.1177/0956797616678438',
  ),
  parryLogs: ref(
    'parry-2021',
    'Parry et al. (2021)',
    'Parry, D. A., Davidson, B. I., Sewall, C. J. R., Fisher, J. T., Mieczkowski, H., & Quintana, D. S. (2021). A systematic review and meta-analysis of discrepancies between logged and self-reported digital media use. Nature Human Behaviour, 5(11), 1535–1547.',
    '10.1038/s41562-021-01117-5',
  ),
  odgersJensen: ref(
    'odgers-jensen-2020',
    'Odgers & Jensen (2020)',
    'Odgers, C. L., & Jensen, M. R. (2020). Annual research review: Adolescent mental health in the digital age: Facts, fears, and future directions. Journal of Child Psychology and Psychiatry, 61(3), 336–348.',
    '10.1111/jcpp.13190',
  ),
  orbenWindows: ref(
    'orben-2022',
    'Orben et al. (2022)',
    'Orben, A., Przybylski, A. K., Blakemore, S.-J., & Kievit, R. A. (2022). Windows of developmental sensitivity to social media. Nature Communications, 13(1), 1649.',
    '10.1038/s41467-022-29296-3',
  ),
  radtkeDetox: ref(
    'radtke-2022',
    'Radtke et al. (2022)',
    'Radtke, T., Apel, T., Schenkel, K., Keller, J., & von Lindern, E. (2022). Digital detox: An effective solution in the smartphone era? A systematic literature review. Mobile Media & Communication, 10(2), 190–215.',
    '10.1177/20501579211028647',
  ),
  huntFomo: ref(
    'hunt-2018',
    'Hunt et al. (2018)',
    'Hunt, M. G., Marx, R., Lipson, C., & Young, J. (2018). No more FOMO: Limiting social media decreases loneliness and depression. Journal of Social and Clinical Psychology, 37(10), 751–768.',
    '10.1521/jscp.2018.37.10.751',
  ),
  hallAbstinence: ref(
    'hall-2021',
    'Hall et al. (2021)',
    'Hall, J. A., Xing, C., Ross, E. M., & Johnson, R. M. (2021). Experimentally manipulating social media abstinence: Results of a four-week diary study. Media Psychology, 24(2), 259–275.',
    '10.1080/15213269.2019.1688171',
  ),
  vanmanFacebook: ref(
    'vanman-2018',
    'Vanman et al. (2018)',
    'Vanman, E. J., Baker, R., & Tobin, S. J. (2018). The burden of online friends: The effects of giving up Facebook on stress and well-being. The Journal of Social Psychology, 158(4), 496–508.',
    '10.1080/00224545.2018.1453467',
  ),
  wilcocksonDetox: ref(
    'wilcockson-2019',
    'Wilcockson et al. (2019)',
    'Wilcockson, T. D. W., Osborne, A. M., & Ellis, D. A. (2019). Digital detox: The effect of smartphone abstinence on mood, anxiety, and craving. Addictive Behaviors, 99, 106013.',
    '10.1016/j.addbeh.2019.06.002',
  ),

  // Attention restoration
  kaplanNature: ref(
    'kaplan-1995',
    'Kaplan (1995)',
    'Kaplan, S. (1995). The restorative benefits of nature: Toward an integrative framework. Journal of Environmental Psychology, 15(3), 169–182.',
    '10.1016/0272-4944(95)90001-2',
  ),
  bermanNature: ref(
    'berman-2008',
    'Berman et al. (2008)',
    'Berman, M. G., Jonides, J., & Kaplan, S. (2008). The cognitive benefits of interacting with nature. Psychological Science, 19(12), 1207–1212.',
    '10.1111/j.1467-9280.2008.02225.x',
  ),
  ohlyArt: ref(
    'ohly-2016',
    'Ohly et al. (2016)',
    'Ohly, H., White, M. P., Wheeler, B. W., Bethel, A., Ukoumunne, O. C., Nikolaou, V., & Garside, R. (2016). Attention Restoration Theory: A systematic review of the attention restoration potential of exposure to natural environments. Journal of Toxicology and Environmental Health, Part B, 19(7), 305–343.',
    '10.1080/10937404.2016.1196155',
  ),
  stevensonArt: ref(
    'stevenson-2018',
    'Stevenson et al. (2018)',
    'Stevenson, M. P., Schilhab, T., & Bentsen, P. (2018). Attention Restoration Theory II: A systematic review to clarify attention processes affected by exposure to natural environments. Journal of Toxicology and Environmental Health, Part B, 21(4), 227–268.',
    '10.1080/10937404.2018.1505571',
  ),
  browningVirtual: ref(
    'browning-2020',
    'Browning et al. (2020)',
    'Browning, M. H. E. M., Shipley, N., McAnirlin, O., Becker, D., Yu, C.-P., Hartig, T., & Dzhambov, A. M. (2020). An actual natural setting improves mood better than its virtual counterpart: A meta-analysis of experimental data. Frontiers in Psychology, 11, 2200.',
    '10.3389/fpsyg.2020.02200',
  ),

  // Rewards and motivation
  lepperMarkers: ref(
    'lepper-1973',
    'Lepper et al. (1973)',
    'Lepper, M. R., Greene, D., & Nisbett, R. E. (1973). Undermining children’s intrinsic interest with extrinsic reward: A test of the “overjustification” hypothesis. Journal of Personality and Social Psychology, 28(1), 129–137.',
    '10.1037/h0035519',
  ),
  deciRewards: ref(
    'deci-1999',
    'Deci et al. (1999)',
    'Deci, E. L., Koestner, R., & Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. Psychological Bulletin, 125(6), 627–668.',
    '10.1037/0033-2909.125.6.627',
  ),
  eisenbergerComment: ref(
    'eisenberger-1999',
    'Eisenberger et al. (1999)',
    'Eisenberger, R., Pierce, W. D., & Cameron, J. (1999). Effects of reward on intrinsic motivation—Negative, neutral, and positive: Comment on Deci, Koestner, and Ryan (1999). Psychological Bulletin, 125(6), 677–691.',
    '10.1037/0033-2909.125.6.677',
  ),
  silvermanStreaks: ref(
    'silverman-barasch-2023',
    'Silverman & Barasch (2023)',
    'Silverman, J., & Barasch, A. (2023). On or off track: How (broken) streaks affect consumer decisions. Journal of Consumer Research, 49(6), 1095–1117.',
    '10.1093/jcr/ucac029',
  ),
  sailerGamification: ref(
    'sailer-2017',
    'Sailer et al. (2017)',
    'Sailer, M., Hense, J. U., Mayr, S. K., & Mandl, H. (2017). How gamification motivates: An experimental study of the effects of specific game design elements on psychological need satisfaction. Computers in Human Behavior, 69, 371–380.',
    '10.1016/j.chb.2016.12.033',
  ),
  koivistoHamari: ref(
    'koivisto-hamari-2019',
    'Koivisto & Hamari (2019)',
    'Koivisto, J., & Hamari, J. (2019). The rise of motivational information systems: A review of gamification research. International Journal of Information Management, 45, 191–210.',
    '10.1016/j.ijinfomgt.2018.10.013',
  ),

  // Habits
  lallyHabits: ref(
    'lally-2010',
    'Lally et al. (2010)',
    'Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. European Journal of Social Psychology, 40(6), 998–1009.',
    '10.1002/ejsp.674',
  ),
  singhHabits: ref(
    'singh-2024',
    'Singh et al. (2024)',
    'Singh, B., Murphy, A., Maher, C., & Smith, A. E. (2024). Time to form a habit: A systematic review and meta-analysis of health behaviour habit formation and its determinants. Healthcare, 12(23), 2488.',
    '10.3390/healthcare12232488',
  ),
  woodRunger: ref(
    'wood-runger-2016',
    'Wood & Rünger (2016)',
    'Wood, W., & Rünger, D. (2016). Psychology of habit. Annual Review of Psychology, 67, 289–314.',
    '10.1146/annurev-psych-122414-033417',
  ),
  nealHabits: ref(
    'neal-2006',
    'Neal et al. (2006)',
    'Neal, D. T., Wood, W., & Quinn, J. M. (2006). Habits—A repeat performance. Current Directions in Psychological Science, 15(4), 198–202.',
    '10.1111/j.1467-8721.2006.00435.x',
  ),
  quinnHabits: ref(
    'quinn-2010',
    'Quinn et al. (2010)',
    'Quinn, J. M., Pascoe, A., Wood, W., & Neal, D. T. (2010). Can’t control yourself? Monitor those bad habits. Personality and Social Psychology Bulletin, 36(4), 499–511.',
    '10.1177/0146167209360665',
  ),

  // Play and mood
  vuorreUplift: ref(
    'vuorre-2024',
    'Vuorre et al. (2024)',
    'Vuorre, M., Ballou, N., Hakman, T., Magnusson, K., & Przybylski, A. K. (2024). Affective uplift during video game play: A naturalistic case study. Games: Research and Practice, 2(3), 1–14.',
    '10.1145/3659464',
  ),
  johannesPlay: ref(
    'johannes-2021',
    'Johannes et al. (2021)',
    'Johannes, N., Vuorre, M., & Przybylski, A. K. (2021). Video game play is positively correlated with well-being. Royal Society Open Science, 8(2), 202049.',
    '10.1098/rsos.202049',
  ),
  vuorreTime: ref(
    'vuorre-2022',
    'Vuorre et al. (2022)',
    'Vuorre, M., Johannes, N., Magnusson, K., & Przybylski, A. K. (2022). Time spent playing video games is unlikely to impact well-being. Royal Society Open Science, 9(7), 220411.',
    '10.1098/rsos.220411',
  ),
  ballouXbox: ref(
    'ballou-2024',
    'Ballou et al. (2024)',
    'Ballou, N., Sewall, C. J. R., Ratcliffe, J., Zendle, D., Tokarchuk, L., & Deterding, S. (2024). Registered report evidence suggests no relationship between objectively tracked video game playtime and well-being over 3 months. Technology, Mind, and Behavior, 5(1), 28–42.',
    '10.1037/tmb0000124',
  ),
  ballouNintendo: ref(
    'ballou-2025',
    'Ballou et al. (2025)',
    'Ballou, N., Vuorre, M., Hakman, T., Magnusson, K., & Przybylski, A. K. (2025). Perceived value of video games, but not hours played, predicts mental well-being in casual adult Nintendo players. Royal Society Open Science, 12(3), 241174.',
    '10.1098/rsos.241174',
  ),
  egamiConsoles: ref(
    'egami-2024',
    'Egami et al. (2024)',
    'Egami, H., Rahman, M. S., Yamamoto, T., Egami, C., & Wakabayashi, T. (2024). Causal effect of video gaming on mental well-being in Japan 2020–2022. Nature Human Behaviour, 8(10), 1943–1956.',
    '10.1038/s41562-024-01948-y',
  ),
  halbrookReview: ref(
    'halbrook-2019',
    'Halbrook et al. (2019)',
    'Halbrook, Y. J., O’Donnell, A. T., & Msetfi, R. M. (2019). When and how video games can be good: A review of the positive effects of video games on well-being. Perspectives on Psychological Science, 14(6), 1096–1104.',
    '10.1177/1745691619863807',
  ),
};

export const batch2: BlogArticle[] = [
  {
    slug: 'gaming-before-bed-sleep',
    title: 'Gaming before bed: what the research says about sleep',
    dek: 'Does a game at night wreck your sleep? What sleep-lab experiments, big surveys and bedtime procrastination research show, and what to try tonight.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '7 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/gaming-before-bed-sleep.webp',
    imageAlt: 'Flurry in a striped bobble hat and Peach stand either side of an iPhone showing the OutBrick Journey map at Cherry Blossom Town, on an indigo brick wall',
    tags: ['sleep', 'healthy play', 'gaming habits', 'bedtime', 'screen time'],
    intro: 'It is half past eleven, the lights are off, and you are one board away from sleep. Or three. The worry that a late game is quietly costing you rest is common, and there is real research behind it. There is also a good deal of research that complicates the simple version. The evidence suggests that the length of the session, and what it pushes aside, matters more than the fact that you picked up a game at all.',
    keyTakeaways: [
      'In sleep-lab experiments, an ordinary session before bed delayed sleep only slightly; a much longer one cut sleep by close to half an hour.',
      'Surveys link heavier gaming with later bedtimes and poorer sleep, but they cannot show which causes which, and the effects are usually small.',
      'The bigger risk is displacement: staying up, or staying awake in bed, because the game never offers a natural place to stop.',
    ],
    sections: [
      {
        id: 'what-the-sleep-lab-found',
        title: 'What happens in the sleep lab',
        paragraphs: [
          'The cleanest evidence comes from studies that bring people into a sleep laboratory, have them play before their usual bedtime and measure what follows. In one of the first, Weaver and colleagues asked 13 teenage boys who described themselves as night owls to spend 50 minutes before bed either playing an active video game or watching a DVD. After gaming they took a little longer to fall asleep and felt less sleepy, but only slightly. The structure of their sleep, including deep and dream sleep, did not change. The authors concluded that the direct effect of pre-sleep gaming may be more modest than earlier surveys had implied.',
          'Dose seems to matter. King and colleagues had 17 teenage boys play a fast-paced violent game for either 50 or 150 minutes before bed on two separate nights. After the long session, total sleep time fell by about 27 minutes, sleep efficiency fell below 85%, and the boys reported taking around 17 minutes longer to fall asleep. Interestingly, their heart rates were no different between the two nights, which led the authors to suggest that physical arousal may not be the main route by which late play affects sleep.',
          'Both studies are small, both used adolescent boys and both used fast action games. They cannot tell us what a quiet puzzle does to a 40-year-old. What they do suggest is that a normal session before bed is not the same thing as an evening that runs on until midnight.',
        ],
        sourceIds: ['weaver-2010', 'king-2013'],
      },
      {
        id: 'what-surveys-show',
        title: 'What large surveys show, and what they cannot',
        paragraphs: [
          'Surveys reach far more people. Exelmans and Van den Bulck interviewed 844 Flemish adults aged 18 to 94. After adjusting for age, sex, education, exercise and stress, those who gamed more reported poorer sleep quality, more fatigue and more insomnia symptoms. Each extra hour of daily gaming went with a bedtime about seven minutes later and a rise time about fourteen minutes later.',
          'A review of 67 studies of children and adolescents by Hale and Guan found that screen time was linked with shorter or later sleep in 90% of them. The authors were careful about the limits: none of that showed cause and effect, screen time and sleep were both measured imperfectly, and few studies looked at what was on the screen.',
          'Size matters too. In a preregistered analysis of more than 50,000 American children, Przybylski found that each hour of screen time was associated with three to eight fewer minutes of sleep a night. Screen time explained less than 2% of the differences in children’s sleep. His conclusion was that the context around screens, such as family routines, mattered more than screen time itself.',
          'There is also a chicken-and-egg problem. Someone who already sleeps badly may reach for a game because they cannot sleep, not the other way round, and a survey taken at one point in time cannot tell the two apart. That does not make the associations meaningless. It means they are a reason to look at your own evenings, not proof that a game is to blame.',
        ],
        sourceIds: ['exelmans-2015', 'hale-guan-2015', 'przybylski-2019-sleep'],
      },
      {
        id: 'displacement',
        title: 'The real cost is often the time the game pushes aside',
        paragraphs: [
          'If a game does not dramatically overexcite the brain, why do late sessions still feel costly? One answer is simple arithmetic. Sleep that does not start cannot happen. Exelmans and Van den Bulck later separated going to bed from trying to sleep in 338 young adults. On average, 39 minutes passed between getting into bed and switching off, and people with a gap of more than an hour were over nine times as likely to be rated poor sleepers as those who went straight to sleep. The survey was a convenience sample, so the numbers are indicative rather than general.',
          'Psychologists have a name for the wider pattern. Kroese and colleagues describe bedtime procrastination as going to bed later than you intended with no outside reason for doing so. In a representative sample of 2,431 Dutch adults it was common, and it helped explain the link between weaker self-regulation and not getting enough sleep. Any activity with no natural ending is well suited to that kind of drift, and many games are built to have no natural ending.',
          'The most useful question is often not “is gaming bad for sleep?” but “did this game end when I meant it to?” The absorption that makes a good game enjoyable, the loss of time that psychologists associate with [flow](/blog/flow-in-puzzle-games), is exactly what makes that drift easy. For more on noticing the moment to stop, see our piece on [when to play and when to put the phone down](/blog/when-to-play-and-when-to-pause).',
        ],
        sourceIds: ['exelmans-2017', 'kroese-2016'],
      },
      {
        id: 'playing-at-night-without-paying-for-it',
        title: 'How to play at night without paying for it',
        paragraphs: [
          'None of this means you have to give up an evening game. It means choosing the shape of the session before you start. The ideas below follow from the research, although none of them has been tested as a sleep treatment.',
          'OutBrick is our own example of the shape we aim for. A board has a move limit and never a clock, so nothing speeds up as it gets late, and a clear ends on a card that works as a full stop rather than a countdown to the next level. The [daily board](/daily) is one board and then it is finished. The one thing worth knowing at bedtime is that walking away from a board you have already made a move on counts as a failed attempt and costs one of your lives, so finish the board or stop between boards. The home page sets out [what lives, undos and adverts cost](/#fair).',
        ],
        bullets: [
          'Decide on a number of boards or rounds before you start, not a feeling.',
          'Prefer games with a clear end state over endless modes when it is late.',
          'Keep long, tense sessions for earlier in the evening; the lab effects grew with length.',
          'If you notice you are delaying sleep once in bed, move the game out of the bedroom routine rather than trying harder to stop.',
          'Pick calm over urgent: no timers, no flashing rewards. Our guide to [what makes a puzzle game relaxing](/blog/relaxing-puzzle-games-what-makes-one-calm) has a checklist.',
        ],
        sourceIds: ['king-2013', 'kroese-2016'],
      },
      {
        id: 'when-to-look-closer',
        title: 'When to look more closely',
        paragraphs: [
          'Most people who play before bed will not have a sleep problem because of it. If you regularly lie awake, feel unrefreshed or rely on a game to get through the evening, the game may be a symptom rather than the cause. The NHS has practical, non-commercial advice on [falling asleep faster and sleeping better](https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/how-to-fall-asleep-faster-and-sleep-better/), and persistent insomnia is worth raising with a GP.',
          'If you want to see how the same questions apply to screens more broadly, our look at [screen time myths](/blog/screen-time-myths-research) covers what the largest studies found.',
        ],
      },
    ],
    references: [r.weaverSleep, r.kingSleep, r.exelmansGaming, r.haleGuan, r.przybylskiSleep, r.exelmansShuteye, r.kroeseProcrastination],
    relatedSlugs: ['when-to-play-and-when-to-pause', 'relaxing-puzzle-games-what-makes-one-calm', 'screen-time-myths-research'],
    pullQuote: 'The most useful question is often not “is gaming bad for sleep?” but “did this game end when I meant it to?”',
    faqs: [
      {
        question: 'Is it bad to play video games before bed?',
        answer: 'Not necessarily. Sleep-lab studies found that a normal session before bed delayed sleep only slightly, while a session of two and a half hours cut total sleep by about 27 minutes. Length, and the sleep a session displaces, seem to matter more than playing at all.',
      },
      {
        question: 'How long before bed should I stop gaming?',
        answer: 'No study has established a universal cut-off. A practical approach is to decide how many rounds or boards you will play before you start, and to stop at a natural ending rather than when you feel tired.',
      },
      {
        question: 'Are puzzle games better than action games before bed?',
        answer: 'Few studies compare genres directly. The experiments that found the clearest effects used fast action games in long sessions, so a short, calm game with a clear end is a reasonable choice, but it has not been proven better for sleep.',
      },
      {
        question: 'What is bedtime procrastination?',
        answer: 'Bedtime procrastination means going to bed later than you intended without any outside reason. Research in a large Dutch sample found it common and linked it with getting too little sleep.',
      },
    ],
  },
  {
    slug: 'micro-breaks-at-work-short-game',
    title: 'Micro-breaks at work: can a short game help you recharge?',
    dek: 'A meta-analysis says ten-minute breaks lift energy but barely touch output. Where a short game fits, where it does not, and how to take a better break.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/micro-breaks-at-work-short-game.webp',
    imageAlt: 'Poppy with her star-tipped wand and red Bricko beside an iPhone showing a Super Hard OutBrick board, with loose bricks floating on an indigo wall',
    tags: ['micro-breaks', 'well-being', 'short sessions', 'casual gaming', 'recovery'],
    intro: 'Somewhere around three in the afternoon, attention starts to fray. You reread the same paragraph, you open a tab and forget why. Many people reach for a phone at that moment, and a quick game is one of the things they reach for. Is that a real break or just a different way of using up attention? Research on micro-breaks, the short pauses people take between work tasks, gives a more useful answer than either “games are a waste of time” or “games refresh the brain”.',
    keyTakeaways: [
      'A 2022 meta-analysis found that breaks of ten minutes or less reliably, if modestly, raise energy and reduce fatigue.',
      'The same analysis found no clear boost to overall performance, except on less demanding tasks; tiring work may need longer breaks.',
      'A short casual game can lift mood after a demanding task, but the evidence that it restores concentration is weak.',
    ],
    sections: [
      {
        id: 'what-a-micro-break-does',
        title: 'What a micro-break actually does',
        paragraphs: [
          'A micro-break is a pause of up to about ten minutes taken during work, rather than a lunch hour or an evening off. The most thorough summary of the evidence is a 2022 systematic review and meta-analysis by Albulescu and colleagues in PLOS ONE. They pooled 22 samples from experimental and quasi-experimental studies, covering 2,335 people.',
          'The results were consistent but modest. Micro-breaks raised vigour, the feeling of having energy, and reduced fatigue, with small effects of about a third of a standard deviation in each case. The effect on overall performance was smaller and not statistically reliable. When the authors split tasks by type, breaks helped performance only on tasks that made fewer cognitive demands. Longer breaks tended to help performance more, and the authors suggest that recovering from highly draining work may take more than ten minutes.',
          'To put the size of those effects in context: an effect of about a third of a standard deviation is the kind of difference you might notice in yourself on some afternoons and not on others. It is real, and it is not a transformation. The studies were also varied, from office workers to students in laboratories, and most measured how people felt straight after the break rather than at the end of the day.',
          'That gives a sensible expectation for any break, game or not. You will probably come back feeling a little better. You should not expect to come back noticeably sharper at difficult work.',
        ],
        sourceIds: ['albulescu-2022'],
      },
      {
        id: 'not-all-breaks-are-equal',
        title: 'Not every kind of break helps',
        paragraphs: [
          'What you do with the break seems to matter. Kim, Park and Niu followed 86 South Korean office workers for ten working days, asking about their afternoon workload, their micro-break activities and how they felt at the end of the day. Relaxation and social activities, such as talking with colleagues, softened the link between a heavy workload and end-of-day bad mood. Caffeinated drinks did too.',
          'The surprise was the category the researchers called cognitive activities: things done on a break that keep the mind busy. On heavy days, these made the link between workload and bad mood stronger, not weaker. The study did not test games, and a puzzle is not the same as an inbox. It is still a fair warning: a break that asks your attention to keep working may not feel like a break by five o’clock.',
        ],
        sourceIds: ['kim-2017'],
      },
      {
        id: 'the-attention-question',
        title: 'Does switching tasks refresh attention?',
        paragraphs: [
          'A popular idea is that a brief switch to something different resets attention. Ariga and Lleras gave people a long, monotonous vigilance task. Those who had to break off occasionally to recall a set of digits did not show the usual drop in performance over time. The paper is widely quoted as proof that brief breaks keep you focused.',
          'The trouble is that a much larger follow-up did not find the same thing. Helton and Russell tested 498 people with brief task switches, content-free cues and control conditions. Every group showed the same steady decline, and the statistics favoured no effect at all. The honest summary is that the mechanism is disputed, and a quick switch of task is not a reliable fix for flagging concentration.',
        ],
        sourceIds: ['ariga-2011', 'helton-2012'],
      },
      {
        id: 'where-a-short-game-fits',
        title: 'Where a short game fits',
        paragraphs: [
          'The best direct test of a game as a break is a lab study by Rupp and colleagues. After a draining vigilance task, participants took a short passive break, did a guided relaxation exercise or played a casual video game. The game group reported greater engagement and a bigger recovery in mood than the relaxation group, while the plain break slightly worsened mood. None of the conditions restored performance on a working-memory test.',
          'People seem to use games this way already. In a survey of 833 employed players of online casual games, Reinecke found that the recovery they felt while playing was the strongest predictor of playing at work, and that more tired workers played more often. The sample chose to answer a survey about games, so it tells us how some players use them, not how well it works.',
          'The research, put together, says this much. A short game is a plausible mood break, not a concentration tonic. It works best when it stays short and ends cleanly. If it turns ten minutes into forty, the arithmetic of the afternoon goes the wrong way. We looked at why [a two-minute puzzle can feel like a proper reset](/blog/why-two-minute-puzzles-feel-good) and at [how to fit a game into a commute](/blog/commuter-puzzle-two-minute).',
        ],
        sourceIds: ['rupp-2017', 'reinecke-2009-work'],
      },
      {
        id: 'a-better-micro-break',
        title: 'A better micro-break, game or not',
        paragraphs: [
          'The research points to a mixed diet rather than a single trick. If you do reach for a game, choose one with a clear end so the break has an edge. An OutBrick board has a move target and a move limit, no clock, and a clear card that works as a natural stopping point. You can also play [a board in your browser](/play) without installing anything. Treat it as one option alongside the ones with stronger evidence.',
          'Where you take the break may matter as much as what you do in it. A few minutes outside or by a window may do more for a tired mind than anything on a screen, for reasons we explore in [attention restoration and calm scenes](/blog/attention-restoration-calm-scenes). And a micro-break is not a substitute for proper rest after work, which we cover in [playing to unwind after work](/blog/casual-games-stress-recovery-after-work).',
        ],
        bullets: [
          'Get up and move, or talk to someone: relaxation and social breaks had the clearest benefits for mood.',
          'Keep it short and decide the length first; one board or one round, then back.',
          'Expect to feel better rather than think faster, especially after demanding work.',
          'After very draining tasks, take a longer break instead of several tiny ones.',
          'If your break is just more reading and scrolling, notice whether it is actually restful.',
        ],
        sourceIds: ['albulescu-2022', 'kim-2017'],
      },
    ],
    references: [r.albulescuBreaks, r.kimMicroBreaks, r.arigaBreaks, r.heltonBreaks, r.ruppRestoration, r.reineckeWork],
    relatedSlugs: ['why-two-minute-puzzles-feel-good', 'commuter-puzzle-two-minute', 'casual-games-stress-recovery-after-work'],
    pullQuote: 'A short game is a plausible mood break, not a concentration tonic.',
    faqs: [
      {
        question: 'How long should a micro-break be?',
        answer: 'Micro-breaks are usually defined as ten minutes or less. A 2022 meta-analysis found they raise energy and reduce fatigue, and that longer breaks tended to help performance more, so very draining work may need more than ten minutes.',
      },
      {
        question: 'Is playing a game on a break good for productivity?',
        answer: 'The evidence is stronger for mood than for output. One lab study found a casual game lifted mood and engagement after a demanding task, but it did not restore working-memory performance.',
      },
      {
        question: 'What is the best thing to do on a short break?',
        answer: 'In a ten-day study of office workers, relaxation and social breaks did most to protect end-of-day mood, while mentally busy activities made things worse. Moving, chatting or a short, bounded game are all reasonable choices.',
      },
    ],
  },
  {
    slug: 'flow-in-puzzle-games',
    title: 'Flow in puzzle games: the zone between bored and overwhelmed',
    dek: 'Why the best puzzle sessions feel effortless, what Tetris experiments reveal about flow, and how to find your own sweet spot of challenge.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/flow-in-puzzle-games.webp',
    imageAlt: 'Moss in his tool belt and a winking Zippy either side of an iPhone showing the OutBrick weekly leaderboard, on an indigo brick wall',
    tags: ['flow', 'puzzle games', 'difficulty design', 'motivation', 'attention'],
    intro: 'Most people who play puzzle games know the feeling. The board makes sense, each move leads to the next, and when you look up twenty minutes have gone. Psychologists call it flow. The idea comes from Mihaly Csikszentmihalyi, who studied people absorbed in climbing, chess, surgery and art and found they described the same state in strikingly similar words. Games are one of the most reliable places to find it, and puzzle games offer a particularly clear view of how it works.',
    keyTakeaways: [
      'Flow is a state of deep, enjoyable absorption that tends to appear when a task’s challenge matches your skill.',
      'In a Tetris experiment, the middle difficulty produced the most flow and a more relaxed breathing pattern than too-easy or too-hard play.',
      'Balance helps but does not guarantee flow; clear goals, instant feedback, control and freedom from interruption matter too.',
    ],
    sections: [
      {
        id: 'what-flow-feels-like',
        title: 'What flow feels like, and how it is measured',
        paragraphs: [
          'Csikszentmihalyi described flow through a set of features that tend to arrive together. To study them properly, researchers needed a way to measure the state, and one of the most widely used tools came from sport. Jackson and Marsh built the Flow State Scale from interviews with elite athletes and earlier flow research, then tested it with 394 athletes. The final questionnaire has nine parts, each with four items.',
          'Statistical tests supported the nine scales, and a single overall flow factor linked them together. Read as a list, the dimensions are also a good description of a satisfying puzzle session.',
        ],
        bullets: [
          'A balance between the challenge in front of you and your skill',
          'Action and awareness merging, so you stop thinking about what you are doing',
          'Clear goals and unambiguous feedback',
          'Concentration on the task at hand and a sense of control',
          'Losing self-consciousness and losing track of time',
          'An autotelic experience: doing the thing is its own reward',
        ],
        sourceIds: ['jackson-marsh-1996'],
      },
      {
        id: 'the-balance-experiments',
        title: 'Testing the sweet spot',
        paragraphs: [
          'The first item on that list, challenge matched to skill, is the one people usually mean by “the zone”. For a long time the evidence was mostly correlational: people reported more flow when they felt balanced. Keller and Bless set out to test it experimentally, using a paradigm in which a task’s demands were either held too low, adjusted continuously to each person’s skill, or pushed beyond it. Matching demands to skill caused more flow, and people with a strong habit of acting rather than dwelling were most sensitive to the manipulation.',
          'Tetris has become a favourite tool for this work. Harmat and colleagues had 77 people play it at three levels: easy, optimal and difficult. The optimal level produced the highest flow, the most positive mood and the strongest sense of effortless attention. Players reporting more flow also breathed more deeply, a sign of a more relaxed physiological state. The researchers had also predicted that flow would quieten the front of the brain; their brain measurements found no sign of that.',
          'In other words, the sweet spot is not a fixed difficulty. It is a relationship between a particular task and a particular person, which is why the same level can bore one player and defeat another.',
        ],
        sourceIds: ['keller-bless-2008', 'harmat-2015'],
      },
      {
        id: 'balance-is-not-enough',
        title: 'Balance is necessary, not sufficient',
        paragraphs: [
          'Flow is not a switch that turns on whenever difficulty is right. Fullagar and colleagues followed 27 student musicians through a semester of rehearsing for a recital. The more a passage’s challenge matched their perceived skill, the more flow they reported. But skill level changed the picture, and flow and performance anxiety behaved like opposites: when one was high, the other was low. A matched challenge in a situation that feels threatening may produce nerves rather than absorption.',
          'For players, that is a useful reminder that pressure from outside the puzzle can crowd out flow even when the puzzle itself is well pitched. A timer, a pop-up or a sense that failure will cost you something can move you from absorbed to anxious without the board changing at all. We explored that difference in [what makes a puzzle game calm](/blog/relaxing-puzzle-games-what-makes-one-calm).',
        ],
        sourceIds: ['fullagar-2013'],
      },
      {
        id: 'how-games-design-for-flow',
        title: 'How games design for flow',
        paragraphs: [
          'Sweetser and Wyeth turned flow into a checklist for game designers. Their GameFlow model has eight elements: concentration, challenge, player skills, control, clear goals, feedback, immersion and social interaction. In an initial test, reviewers using the criteria could distinguish a well-rated strategy game from a poorly rated one and explain why. It is a design framework rather than proof that any game produces flow, but it captures why puzzle games are so good at it. The goal is visible, the feedback is immediate, and the next challenge is only one move away.',
          'OutBrick is built around those features. A board shows its move target and move limit from the first tap, bricks glide until something stops them so every move has a readable result, and there is never a clock. The first undo on every board is free, which protects the sense of control when an experiment goes wrong. Later boards add keys, locks, crates and gates, so the challenge grows as your skill does. We wrote about the thinking behind that pacing in [how to build a kinder difficulty curve](/blog/kinder-difficulty-curve).',
          'Puzzle games also have a rhythm of their own that pure action games do not. Flow in a sliding or sorting puzzle tends to come in waves: a quiet stretch of reading the board, a moment when the route becomes clear, then a run of moves that feel almost automatic as the plan plays out. The reading phase can feel less like flow than the execution, but it is what makes the execution satisfying. Players who learn to read boards faster, for example by spotting which brick is blocking a gate, spend more of each board in the easy-flowing part. Our [colour sort puzzle tips](/blog/colour-sort-puzzle-tips) are largely about that skill.',
        ],
        sourceIds: ['sweetser-wyeth-2005'],
      },
      {
        id: 'finding-your-sweet-spot',
        title: 'Finding your own sweet spot',
        paragraphs: [
          'You can tune a game towards flow yourself. The simplest signals are boredom and frustration: if your mind wanders, raise the challenge; if you feel stuck and tense, lower it for a while.',
          'One caution. The loss of time awareness that makes flow pleasant is also why a session can quietly run long. Deciding when you will stop before you start protects both the flow and the evening. Our piece on [gaming before bed](/blog/gaming-before-bed-sleep) looks at what that drift costs.',
        ],
        bullets: [
          'Bored? Aim for a stricter personal target, such as clearing every board at or under its move target.',
          'Overwhelmed? Replay an earlier board or use undo to test ideas instead of guessing.',
          'Remove outside pressure: silence notifications and avoid timed modes if they make you tense.',
          'Try a single board to test the feeling: [play one in your browser](/play).',
        ],
        sourceIds: ['harmat-2015', 'fullagar-2013'],
      },
    ],
    references: [r.jacksonMarsh, r.kellerBless, r.harmatTetris, r.fullagarFlow, r.gameFlow],
    relatedSlugs: ['kinder-difficulty-curve', 'relaxing-puzzle-games-what-makes-one-calm', 'how-to-solve-sliding-block-puzzles'],
    pullQuote: 'It is a relationship between a particular task and a particular person, which is why the same level can bore one player and defeat another.',
    faqs: [
      {
        question: 'What is flow in video games?',
        answer: 'Flow is a state of deep, enjoyable absorption in which you concentrate fully, feel in control and lose track of time. It tends to appear when a game’s challenge closely matches your skill and the goals and feedback are clear.',
      },
      {
        question: 'Can you get into flow playing puzzle games?',
        answer: 'Yes. In an experiment with Tetris, players reported the most flow at a difficulty matched to their skill, compared with easier and harder versions. Puzzle games suit flow because goals are visible and feedback is immediate.',
      },
      {
        question: 'Is flow the same as being addicted to a game?',
        answer: 'No. Flow is a temporary state of absorption, not a pattern of lost control. Because flow makes time pass quickly, though, it is worth deciding when to stop before you start.',
      },
      {
        question: 'Why does a timer break my concentration?',
        answer: 'Research with musicians found that flow and performance anxiety behave like opposites. Pressure from outside the task, such as a countdown, can turn absorption into tension even when the puzzle itself is well matched to your skill.',
      },
    ],
  },
  {
    slug: 'screen-time-myths-research',
    title: 'Screen time myths: what the large studies actually find',
    dek: 'Is screen time really harming teenagers? What studies of hundreds of thousands of young people found, why self-reports mislead, and what matters more.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/screen-time-myths-research.webp',
    imageAlt: 'Bloo and Poppy either side of an iPhone showing a tall Super Hard OutBrick board of coloured bricks, on an indigo brick wall',
    tags: ['screen time', 'well-being', 'research', 'teenagers', 'healthy play'],
    intro: 'Few questions about modern life generate as much certainty on as little evidence as screen time. Headlines swing between “screens are rewiring a generation” and “screens are harmless”, often citing the same studies. The past decade has produced some unusually large and careful research on the question, much of it from teams who deliberately set out to stop the numbers being bent towards either story. What it shows is less dramatic than either headline, and more useful.',
    keyTakeaways: [
      'Across more than 355,000 adolescents, the link between technology use and well-being was negative but tiny, explaining at most 0.4% of the differences.',
      'People are poor at estimating their own screen time, which weakens many of the studies behind the headlines.',
      'Small average effects do not mean screens never matter: timing, content, age and what screen time replaces all make a difference.',
    ],
    sections: [
      {
        id: 'myth-more-screens-worse-wellbeing',
        title: 'Myth: more screen time means worse well-being',
        paragraphs: [
          'The problem with big survey datasets is that they contain hundreds of variables, and there are thousands of defensible ways to analyse them. Choose one path and you can find harm; choose another and you can find nothing. Orben and Przybylski tackled this with a technique called specification curve analysis, which runs every reasonable analysis and reports the whole range. Across three large datasets covering 355,358 adolescents, the association between digital technology use and well-being was negative but small, explaining at most 0.4% of the variation in well-being.',
          'To give that number a sense of scale, the authors compared it with other factors in the same data. Being bullied and smoking cannabis showed far stronger links with poorer well-being, while everyday factors such as regularly eating potatoes or wearing glasses showed links in the same small range as technology use. Their conclusion was that effects this small were too slight to justify policy change on their own.',
          'It helps to picture what 0.4% of the variation means. Imagine lining up every teenager in the data by well-being. Knowing how much each one used technology would let you predict their place in the line only very slightly better than guessing. Family, friendships, sleep, health and school would all tell you far more. That is not the same as saying technology use never matters for anyone, but it is a long way from the claim that screens are the main force shaping a generation’s mental health.',
        ],
        sourceIds: ['orben-przybylski-2019-nhb'],
      },
      {
        id: 'myth-any-amount-harms',
        title: 'Myth: any amount is harmful',
        paragraphs: [
          'A preregistered study of 120,115 English adolescents by Przybylski and Weinstein tested what they called the Goldilocks hypothesis: that too little and too much use might both be worse than a moderate amount. The relationship between screen time and mental well-being was curved rather than a straight downward line, and it differed between weekdays and weekends. Moderate use was not associated with harm and may be an advantage in a connected world.',
          'That fits a common-sense view of screens as part of ordinary life. A teenager who never goes online is missing out on something too, including a good deal of the social life of their friends.',
          'It also reframes the most important practical risk. Where screens do seem to cost something, the likeliest cost is what they push aside, especially sleep. Late-night use that eats into rest is worth addressing whatever it does to mood directly, and we cover the evidence in [gaming before bed](/blog/gaming-before-bed-sleep).',
        ],
        sourceIds: ['przybylski-weinstein-2017'],
      },
      {
        id: 'myth-we-know-our-screen-time',
        title: 'Myth: we know how much we use our phones',
        paragraphs: [
          'Most studies ask people to estimate their own screen time. Parry and colleagues gathered every study they could find that measured media use both ways, by asking and by logging it on the device, and combined 106 effect sizes in a preregistered meta-analysis. Self-reports correlated only moderately with logs and were rarely accurate. Questionnaires about “problematic” use lined up with the logs even less.',
          'That matters because a study built on inaccurate estimates can find associations that belong to the estimate rather than the behaviour. People who feel low may simply believe they spend longer on their phones. When Orben and Przybylski used detailed time-use diaries instead, in 17,247 young people across Ireland, the United States and the United Kingdom, they found little evidence of substantial negative associations with well-being, including for screen use in the run-up to bedtime.',
        ],
        sourceIds: ['parry-2021', 'orben-przybylski-2019-diaries'],
      },
      {
        id: 'myth-screens-dont-matter',
        title: 'The opposite myth: screens do not matter at all',
        paragraphs: [
          'Small average effects are not the same as no effects. Odgers and Jensen reviewed meta-analyses, large preregistered studies and intensive day-by-day studies of adolescents. Most of the research was correlational and produced a mix of small positive, negative and null findings. The most rigorous studies found small associations that could not separate cause from effect and were unlikely to be of clinical significance on average. Averages can still hide individual young people for whom things go badly, which is why the useful research question is increasingly who is affected, and how, rather than whether screens are good or bad.',
          'Timing within development may matter too. Orben and colleagues analysed data from 84,011 people aged 10 to 80 in the UK and found the link between social media use and life satisfaction was most negative in younger adolescents. In longitudinal data they identified windows of greater sensitivity: around ages 11 to 13 for girls and 14 to 15 for boys, with another window at 19 for both. The relationship also ran the other way, with lower life satisfaction predicting more social media use later.',
        ],
        sourceIds: ['odgers-jensen-2020', 'orben-2022'],
      },
      {
        id: 'a-better-question',
        title: 'A better question than “how many hours?”',
        paragraphs: [
          'The research consistently points away from a single number and towards context. It also suggests caution about dramatic fixes: as we found when looking at whether [a digital detox works](/blog/does-digital-detox-work), trials of simply switching off have produced mixed results. What is on the screen? What would you be doing otherwise? Is it the hour you would have slept, the conversation you would have had, or the dull wait in a queue? How do you feel afterwards, and do you feel able to stop?',
          'Games follow the same pattern. Large studies using logged play data have found that hours played says little about players’ well-being, while how play fits into their lives says more; we cover that in [is gaming good or bad for your mood?](/blog/is-gaming-good-or-bad-for-mood). It is also why we write about [designing for the life players actually have](/blog/designing-for-real-life-play) rather than chasing more minutes of play. If you want to know how we choose and read studies like these, our note on [how the OutBrick Journal reads research](/research) explains the rules we follow.',
        ],
        bullets: [
          'Be wary of any claim built on a single number of hours.',
          'Look at what the time replaces, especially sleep, movement and time with people.',
          'Check the device’s own screen-time report rather than your estimate.',
          'Pay particular attention in early adolescence, when sensitivity may be higher.',
        ],
        sourceIds: ['parry-2021', 'odgers-jensen-2020', 'orben-2022'],
      },
    ],
    references: [r.orbenNhb, r.goldilocks, r.parryLogs, r.orbenDiaries, r.odgersJensen, r.orbenWindows],
    relatedSlugs: ['is-gaming-good-or-bad-for-mood', 'designing-for-real-life-play', 'does-digital-detox-work'],
    pullQuote: 'People who feel low may simply believe they spend longer on their phones.',
    faqs: [
      {
        question: 'Is screen time bad for teenagers?',
        answer: 'On average, large studies find only a small negative link between screen time and teenage well-being, explaining well under 1% of the differences between young people. Content, timing, age and what the screen time replaces matter more than the total.',
      },
      {
        question: 'How much screen time is too much?',
        answer: 'Research does not support a single safe limit. One study of 120,115 adolescents found moderate use was not linked with harm, and the relationship changed between weekdays and weekends. Watch what screen time displaces, especially sleep.',
      },
      {
        question: 'Why do screen time studies disagree?',
        answer: 'Large datasets can be analysed in many defensible ways, and small choices can flip a result. Many studies also rely on people’s own estimates of their screen time, which a meta-analysis found are rarely accurate.',
      },
      {
        question: 'Is self-reported screen time accurate?',
        answer: 'Not very. A meta-analysis of 106 effect sizes found that what people report correlates only moderately with what their devices log, so it is better to check your phone’s own screen-time report.',
      },
    ],
  },
  {
    slug: 'does-digital-detox-work',
    title: 'Does a digital detox work? What the experiments show',
    dek: 'Quitting your phone for a week sounds healthy, but trials of digital detoxes point in different directions. What helps, what does not, and why.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/does-digital-detox-work.webp',
    imageAlt: 'Flurry and Moss beside an iPhone showing the OutBrick Journey map winding through Cherry Blossom Town, with floating bricks on an indigo wall',
    tags: ['digital detox', 'screen time', 'well-being', 'healthy play', 'smartphones'],
    intro: 'The digital detox has become a small industry: phone-free retreats, lockable boxes, apps that block other apps. The promise is intuitive. If screens make us anxious and distracted, time away should make us calmer and more focused. It is also testable, and researchers have tested it, by asking people to give up their phones or particular apps for a set period and measuring what happens. The results are more mixed than the marketing, and the pattern in them says a lot about what actually helps.',
    keyTakeaways: [
      'A 2022 systematic review of 21 detox studies found positive, null and even negative effects on well-being.',
      'In the trials covered here, limiting specific apps showed benefits, while giving them up entirely made no difference or came with costs.',
      'Paying attention to your own use may be part of what helps, whichever way you cut back.',
    ],
    sections: [
      {
        id: 'what-counts-as-a-detox',
        title: 'What counts as a digital detox',
        paragraphs: [
          'Radtke and colleagues define a digital detox as a timeout from electronic devices such as smartphones, either completely or for a specific kind of use, like social media or messaging. Their systematic review, published in Mobile Media & Communication, gathered 21 intervention studies with 3,625 participants in total, 12 of them randomised controlled trials.',
          'The headline finding was variation. Effects on health and well-being, social relationships, self-control and performance differed from study to study. Some found benefits. Others found no effect, and a few found that well-being got worse. The authors conclude that the mechanisms are poorly understood, which is a polite way of saying nobody yet knows which detox works for whom.',
          'That variety is partly built into the idea. A detox can mean a weekend without any devices, a month without Instagram or an evening with the phone in another room, and the studies tested all sorts of versions with all sorts of people. Averaging them together is a bit like asking whether “changing your diet” is good for you. The answer depends entirely on what you change, and what you change it to.',
        ],
        sourceIds: ['radtke-2022'],
      },
      {
        id: 'when-cutting-back-helped',
        title: 'When cutting back helped',
        paragraphs: [
          'The most quoted positive result comes from Hunt and colleagues at the University of Pennsylvania. After a week of baseline monitoring, 143 undergraduates were randomly assigned either to limit Facebook, Instagram and Snapchat to ten minutes per platform per day or to carry on as usual, for three weeks. The limited group reported significantly less loneliness and depression than the control group.',
          'The detail that is easy to miss is that both groups also reported less anxiety and less fear of missing out than at the start. The authors suggest that simply monitoring their own use helped. It is a single study of students, with self-reported outcomes, but it hints that noticing may be part of the active ingredient.',
          'Vanman and colleagues found a more double-edged effect. Among 138 active Facebook users, those told to give it up for five days had lower levels of the stress hormone cortisol than those who carried on, but also lower life satisfaction. Removing a source of stress removed a source of connection too.',
        ],
        sourceIds: ['hunt-2018', 'vanman-2018'],
      },
      {
        id: 'when-it-did-not',
        title: 'When quitting made no difference',
        paragraphs: [
          'Other careful trials found nothing. Hall and colleagues randomly assigned 130 people to keep using social media as usual or to abstain for one, two, three or four weeks, with a daily diary of loneliness, well-being and quality of day throughout. Abstaining made no difference, and neither did how long it lasted. The authors note that this fits the very small effects seen in large surveys.',
          'A phone is more than social media, and the idea that it works like an addictive drug is often behind the detox pitch. Wilcockson, Osborne and Ellis tested that directly by having smartphone users go without their phones for 24 hours and measuring mood, anxiety and craving several times. Only craving changed. Mood and anxiety stayed the same, and the authors argue that heavy phone use did not meet the criteria for an addiction in this sense.',
        ],
        sourceIds: ['hall-2021', 'wilcockson-2019'],
      },
      {
        id: 'why-results-differ',
        title: 'Why the results point in different directions',
        paragraphs: [
          'Put these studies side by side and a few explanations stand out. First, what is removed matters. Limiting specific apps is different from giving up a device that also holds your calendar, maps and group chats with family. Second, what fills the gap matters. An hour away from a feed that becomes an hour of sleep or a walk is not the same as an hour of feeling left out.',
          'Third, most studies are short, use students and rely on self-reports, and as we cover in [screen time myths](/blog/screen-time-myths-research), people are poor judges of their own screen use. Expectations matter too. People who sign up for a study about quitting social media usually know what the researchers hope to find, and it is hard to hide from participants whether they are in the group that gave something up. Finally, a detox is by definition temporary. A week off does not change the design of the apps you return to, or the habits that brought you there. For how everyday habits actually form and change, see [how long it takes to form a habit](/blog/how-long-to-form-a-habit).',
        ],
        sourceIds: ['radtke-2022', 'hunt-2018', 'vanman-2018'],
      },
      {
        id: 'a-smaller-experiment',
        title: 'Try a smaller experiment instead',
        paragraphs: [
          'If you want to change your relationship with your phone, the evidence favours something more targeted and more curious than a dramatic week offline. Treat it as an experiment on yourself, with a clear question: which specific use leaves me feeling worse, and what would I rather do instead?',
          'Some of the best replacements are low-tech. Time outdoors has its own evidence base, which we look at in [attention restoration and calm scenes](/blog/attention-restoration-calm-scenes), and the Facebook study above is a reminder that connection with people is worth protecting, not cutting.',
          'Games deserve the same scrutiny as anything else. A game that ends when you want it to, asks nothing of you while you are away and costs nothing to put down is easier to keep in proportion than one designed to pull you back. That is the standard we hold OutBrick to: a board has a clear end, there is one [daily board](/daily) rather than an endless feed, and we set out in plain terms [when to play and when to put the phone down](/blog/when-to-play-and-when-to-pause).',
        ],
        bullets: [
          'Check your device’s screen-time report for a week before changing anything.',
          'Limit the one or two apps that bother you rather than the whole phone.',
          'Decide what the freed time is for: sleep, a walk, a call, a book.',
          'Keep the things that connect you with people you care about.',
          'Review after a few weeks, and keep only the changes that made a difference.',
        ],
        sourceIds: ['hunt-2018', 'hall-2021'],
      },
    ],
    references: [r.radtkeDetox, r.huntFomo, r.vanmanFacebook, r.hallAbstinence, r.wilcocksonDetox],
    relatedSlugs: ['screen-time-myths-research', 'when-to-play-and-when-to-pause', 'how-long-to-form-a-habit'],
    pullQuote: 'Removing a source of stress removed a source of connection too.',
    faqs: [
      {
        question: 'Does a digital detox improve mental health?',
        answer: 'The evidence is mixed. A 2022 systematic review of 21 studies found that some detoxes improved well-being, others made no difference, and a few made it worse.',
      },
      {
        question: 'Is cutting down better than quitting social media completely?',
        answer: 'In one trial, limiting three social media apps to ten minutes each a day for three weeks reduced loneliness and depression. Another trial found that abstaining completely for up to four weeks made no difference to daily well-being.',
      },
      {
        question: 'How long should a digital detox last?',
        answer: 'There is no evidence for an ideal length. In one experiment, abstaining from social media for one, two, three or four weeks produced no difference in daily well-being, so what you change matters more than how long you stop.',
      },
      {
        question: 'Is smartphone use an addiction?',
        answer: 'For most people, evidence does not support that. In one study, 24 hours without a smartphone increased craving but did not change mood or anxiety, which the authors argued falls short of the criteria for an addiction.',
      },
    ],
  },
  {
    slug: 'attention-restoration-calm-scenes',
    title: 'Attention restoration: why calm scenes can feel refreshing',
    dek: 'Attention restoration theory says nature rests a tired mind. What the evidence supports, why pictures are not parks, and what a calm game can borrow.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/attention-restoration-calm-scenes.webp',
    imageAlt: 'Flurry and Sprout either side of an iPhone showing the OutBrick Home screen under a night sky, on an indigo brick wall',
    tags: ['attention restoration', 'attention', 'nature', 'well-being', 'calm games'],
    intro: 'After a long stretch of concentrated work, a walk in a park can feel like taking a heavy bag off your shoulder. A busy street at rush hour does not. Environmental psychologists have spent decades trying to explain that difference, and the best-known explanation, attention restoration theory, has shaped everything from hospital gardens to office design. It is often stretched far beyond its evidence, too, including by people who make calm-looking apps and games. Here is what it says, what the studies support, and what it does and does not mean for a screen.',
    keyTakeaways: [
      'Attention restoration theory proposes that effortful attention tires, and that gently engaging settings such as nature let it recover.',
      'Reviews find real but modest benefits of nature for some attention and working-memory measures, with plenty of inconsistency.',
      'Simulated nature does less than the real thing, and a game village is not nature at all; the honest claim for a calm game is smaller.',
    ],
    sections: [
      {
        id: 'two-kinds-of-attention',
        title: 'Two kinds of attention',
        paragraphs: [
          'Stephen Kaplan’s 1995 paper set out the framework. It distinguishes directed attention, the effortful kind you use to keep reading a dense report while a conversation goes on nearby, from involuntary attention, which is captured without effort by things that are simply interesting. Directed attention depends on actively suppressing distractions, and Kaplan argued that it becomes fatigued with heavy use, leaving people more irritable, more error-prone and less able to plan.',
          'Recovery, on this view, needs a setting that lets directed attention rest. Kaplan described four qualities of a restorative environment. It offers a sense of being away from the usual demands. It has extent, a feeling of a coherent world rich enough to explore. It offers fascination, especially the soft kind: clouds, moving leaves or water that hold attention gently while leaving room for reflection. And it is compatible with what you want to do there. Natural settings tend to have all four, which is why the theory has centred on nature.',
          'Soft fascination is the most distinctive idea in the framework, and the easiest to recognise. Watching a fire, waves on a shore or leaves moving in wind holds your attention without demanding anything. Your mind is free to wander and to settle. Hard fascination, such as a fast sports match or a busy video game, also captures attention without effort, but fills it completely, leaving little room for reflection. On Kaplan’s account, both rest directed attention, but only the soft kind leaves space to think.',
        ],
        sourceIds: ['kaplan-1995'],
      },
      {
        id: 'what-the-evidence-shows',
        title: 'What the evidence shows',
        paragraphs: [
          'The theory made testable predictions, and early experiments looked promising. In two studies, Berman, Jonides and Kaplan found that walking in a park, or even viewing pictures of nature, improved performance on tests of directed attention, including repeating a string of digits backwards, compared with walking in a city or viewing urban scenes.',
          'Systematic reviews have since tempered the picture. Ohly and colleagues pooled 31 studies and found support for three measures, two versions of the digit-span test and one trail-making test, but no marked benefit in the other ten analyses they ran. The studies were generally small and varied widely in how they measured attention.',
          'An updated review by Stevenson, Schilhab and Bentsen looked at 42 more recent articles and tried to pin down which mental processes respond. Working memory and cognitive flexibility improved after exposure to nature, and attentional control did so less reliably, with low to moderate effect sizes. It is real evidence for a modest effect on some abilities, not a general brain refresh.',
          'Part of the uncertainty is about the theory itself. Directed attention is hard to define precisely, different studies measured it with different tasks, and it is not always clear whether participants were tired enough for restoration to show. Both reviews call for larger, better-designed studies. None of this means nature does nothing for us; people consistently report feeling better outdoors. It means the specific claim about restoring attention is less settled than popular accounts suggest.',
        ],
        sourceIds: ['berman-2008', 'ohly-2016', 'stevenson-2018'],
      },
      {
        id: 'pictures-are-not-parks',
        title: 'Pictures are not parks',
        paragraphs: [
          'A tempting conclusion is that if a photo of a forest can help, a screen full of greenery should do the job. The evidence says otherwise. Stevenson and colleagues found that real exposures may have a stronger restorative effect than virtual ones, although real exposures also tended to last longer. Browning and colleagues then pooled six experiments that compared actual natural settings with simulated versions of the same places, using the same mood questionnaire before and after. Positive mood rose in the real settings but not in the simulations. Both kinds of setting tended to reduce negative mood.',
          'Simulated nature, in other words, can calm, but it seems to leave out something that makes the real thing uplifting. That matters for anyone tempted to treat a nature-themed screen as a substitute for going outside.',
        ],
        sourceIds: ['stevenson-2018', 'browning-2020'],
      },
      {
        id: 'what-a-game-can-borrow',
        title: 'What a calm game can honestly borrow',
        paragraphs: [
          'OutBrick’s Journey runs through 167 brick-built villages, among them Lavender Hills, Bamboo Springs and Firefly Wetlands. We care about how they look and we hope they are pleasant places to pass through. They are not nature, and nothing in the research above tells us that looking at them restores attention. The puzzle itself is the opposite of soft fascination: solving a board is directed attention by design.',
          'What a game can borrow from Kaplan’s framework is the absence of things that drain attention. No countdown, no flashing rewards, no voice asking for a response, nothing interrupting the board. OutBrick honours the system’s Reduce Motion setting and its nine brick friends speak only in text bubbles. That makes it a quieter kind of effort, not a restorative one. We explain the difference further in [what makes a puzzle game calm](/blog/relaxing-puzzle-games-what-makes-one-calm), and you can see the villages on [the Journey](/#journey).',
          'The honest claim for a short, calm game is the one supported elsewhere in our journal: after demanding work it can lift your mood, as we covered in [micro-breaks at work](/blog/micro-breaks-at-work-short-game). If what you want is restored attention, the evidence points outside.',
        ],
        sourceIds: ['kaplan-1995', 'browning-2020'],
      },
      {
        id: 'an-order-of-preference',
        title: 'A practical order of preference',
        paragraphs: [
          'If your attention is frayed and you have a few minutes, the research suggests roughly this order. None of it needs to be dramatic; a short walk counts. And if what you want is simply a small, satisfying change of gear, that is a fine reason to play too, as we argue in [why a two-minute puzzle can feel like a proper reset](/blog/why-two-minute-puzzles-feel-good).',
        ],
        bullets: [
          'A walk somewhere green, even a small park or a tree-lined street.',
          'A few minutes looking out of a window at sky, trees or water.',
          'Pictures or video of nature, which may calm you even if they lift mood less than the real thing.',
          'A short, calm game or other absorbing activity, for a lift in mood rather than restored attention.',
          'What to avoid if you can: settings that demand constant vigilance, such as busy traffic or a feed of alerts.',
        ],
        sourceIds: ['berman-2008', 'stevenson-2018', 'browning-2020'],
      },
    ],
    references: [r.kaplanNature, r.bermanNature, r.ohlyArt, r.stevensonArt, r.browningVirtual],
    relatedSlugs: ['relaxing-puzzle-games-what-makes-one-calm', 'micro-breaks-at-work-short-game', 'why-two-minute-puzzles-feel-good'],
    pullQuote: 'If what you want is restored attention, the evidence points outside.',
    faqs: [
      {
        question: 'What is attention restoration theory?',
        answer: 'Attention restoration theory, developed by Rachel and Stephen Kaplan, proposes that effortful attention becomes fatigued with use and recovers in settings that engage attention gently, such as nature. Such settings offer a sense of being away, extent, soft fascination and compatibility with what you want to do.',
      },
      {
        question: 'Does looking at nature pictures improve concentration?',
        answer: 'Some experiments found that viewing nature pictures improved performance on attention tests, but reviews show the effects are modest and inconsistent. Real natural settings seem to work better than simulated ones, at least for mood.',
      },
      {
        question: 'Can a video game restore attention?',
        answer: 'There is no good evidence that a game restores attention in the sense the theory describes, since solving puzzles uses directed attention. Short casual games have been found to improve mood after demanding work, which is a smaller but real benefit.',
      },
      {
        question: 'Is virtual nature as good as real nature?',
        answer: 'Not for mood. A meta-analysis of six experiments found that positive mood increased in real natural settings but not in simulated versions of them, although both tended to reduce negative mood.',
      },
    ],
  },
  {
    slug: 'rewards-streaks-motivation',
    title: 'Rewards, streaks and motivation: when incentives backfire',
    dek: 'Why rewards can crowd out the fun they were meant to boost, why a broken streak makes people quit, and how to keep incentives on your side.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '6 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/rewards-streaks-motivation.webp',
    imageAlt: 'Moss and Flurry either side of an iPhone showing a Super Hard OutBrick board with its move count and stars, on an indigo brick wall',
    tags: ['motivation', 'rewards', 'streaks', 'gamification', 'player agency'],
    intro: 'Every app on your phone seems to want to reward you. Language apps count days in a row, fitness apps hand out badges, games shower you with coins and chests. Sometimes that helps: a visible count of days can get you through a dull patch. Sometimes it quietly changes why you are doing the thing at all, until the reward is the point and the activity is the chore. Psychologists have studied that shift for more than fifty years. As someone who makes a game with coins in it, I think players deserve to know what that research says.',
    keyTakeaways: [
      'Expected, tangible rewards for doing something you already enjoy can reduce how much you want to do it once the rewards stop.',
      'Informative feedback tends to strengthen motivation; rewards that feel controlling tend to weaken it.',
      'Streaks work while they are intact, but a broken streak can make people less likely to continue than if they had never counted.',
    ],
    sections: [
      {
        id: 'the-marker-experiment',
        title: 'The experiment with the felt-tip pens',
        paragraphs: [
          'In a classic study, Lepper, Greene and Nisbett watched preschool children who already liked drawing with felt-tip markers. Some were told they would receive a certificate for drawing; some received the same certificate as a surprise afterwards; others got nothing. Later, when the markers were simply left out during free play, the children who had drawn in order to get the award spent less time drawing than the others. Being rewarded unexpectedly made no such difference.',
          'The researchers called this the overjustification effect. If you are given an external reason for something you were doing anyway, you may start to see the external reason as why you do it. When it disappears, so does some of the motivation.',
        ],
        sourceIds: ['lepper-1973'],
      },
      {
        id: 'what-128-studies-say',
        title: 'What 128 studies say',
        paragraphs: [
          'One experiment is a starting point, and there have been many since. Deci, Koestner and Ryan pooled 128 of them in a 1999 meta-analysis. Tangible rewards that people expected to receive, whether for taking part, finishing or performing well, reduced intrinsic motivation, measured as how much people chose to continue the activity in their own free time. The effects were small to moderate in size, and tangible rewards were more damaging for children than for university students.',
          'Positive feedback did the opposite. Telling people they had done well increased both their free-choice engagement and their reported interest. The difference, in the self-determination theory the authors work within, is whether a reward is experienced as information about your competence or as an attempt to control your behaviour.',
          'This is not an uncontested result. In a comment published alongside the meta-analysis, Eisenberger, Pierce and Cameron argued that the effects of reward can be negative, neutral or positive depending on how rewards are given, and that the harms had been overstated. The debate is mainly about how often and how much, not about whether rewards can backfire.',
        ],
        sourceIds: ['deci-1999', 'eisenberger-1999'],
      },
      {
        id: 'the-trouble-with-streaks',
        title: 'The trouble with streaks',
        paragraphs: [
          'Streaks are the most familiar reward in everyday apps, and they have their own research. Silverman and Barasch ran seven studies on how logged streaks affect what people do next. When an app highlighted an intact streak, people were more likely to repeat the behaviour than when it highlighted a broken one, even when their actual past behaviour was identical. Keeping the streak had become a goal in its own right.',
          'Two further findings are revealing. The drop after a broken streak was bigger when people blamed themselves for the break, and smaller when they could repair the streak. Put simply, a streak is motivating until the day it breaks, and then the same design can push someone to give up on a habit they had been building for months.',
        ],
        sourceIds: ['silverman-barasch-2023'],
      },
      {
        id: 'points-badges-leaderboards',
        title: 'Points, badges and leaderboards',
        paragraphs: [
          'Game-style rewards outside games, often called gamification, have been studied intensively. A review by Koivisto and Hamari covered 819 studies. Results leaned positive overall, but the amount of mixed evidence was, in their words, remarkable, and most studies used the same few elements: points, badges and leaderboards.',
          'Sailer and colleagues tested individual elements in a randomised experiment. Badges, leaderboards and performance graphs increased players’ sense of competence and how meaningful the task felt. Avatars, a story and teammates increased a sense of connection. None of the elements increased the feeling of freedom to choose. That gap matters, because autonomy is exactly what controlling rewards take away.',
          'The practical difference between informative and controlling is often small in the interface and large in the experience. “You cleared that in fewer moves than last time” tells you something about your skill. “Log in tomorrow or lose your progress” tells you what to do. A badge can be either, depending on whether it marks something you achieved or something you were made to do. When a reward system leaves you feeling managed rather than informed, the research suggests your interest in the activity itself is what is most at risk.',
        ],
        sourceIds: ['koivisto-hamari-2019', 'sailer-2017'],
      },
      {
        id: 'how-we-think-about-it',
        title: 'How we think about rewards in OutBrick',
        paragraphs: [
          'OutBrick has coins, stars and a clear card at the end of every board, so this is not an abstract question for us. Our rule of thumb is to make rewards informative rather than controlling. Stars describe how you played: one for a clear, two for clearing within the solver’s move target, three for doing that without an undo. OutBrick does keep a streak, which one of its Home Screen widgets shows, but the daily bonus is a flat hundred coins for your first clear of any day rather than a prize that climbs with the count. We explain the thinking in [the case for daily rituals that do not demand you](/blog/daily-rituals-that-dont-demand-you) and [how games become habits](/blog/how-games-become-habits).',
          'Where rewards are tied to adverts, we keep them optional and say exactly what they cost; the home page lists [what lives, undos and adverts cost](/#fair). Players can judge whether we have got the balance right. For anyone using rewards to build a habit, whether in a game or anywhere else, the research suggests a few habits of mind, and our guide to [how long a habit takes to form](/blog/how-long-to-form-a-habit) covers the rest.',
        ],
        bullets: [
          'Notice when you are doing something for the counter rather than the activity.',
          'Treat a broken streak as a data point, not a verdict; the habit is not the number.',
          'Prefer feedback that tells you how you did over prizes for simply showing up.',
          'If a reward system makes stopping feel costly, that is a design choice, not your failing.',
        ],
        sourceIds: ['deci-1999', 'silverman-barasch-2023'],
      },
    ],
    references: [r.lepperMarkers, r.deciRewards, r.eisenbergerComment, r.silvermanStreaks, r.koivistoHamari, r.sailerGamification],
    relatedSlugs: ['daily-rituals-that-dont-demand-you', 'how-games-become-habits', 'how-long-to-form-a-habit'],
    pullQuote: 'Keeping the streak had become a goal in its own right.',
    faqs: [
      {
        question: 'What is the overjustification effect?',
        answer: 'The overjustification effect is the finding that an expected external reward for something you already enjoy can reduce your interest in it once the reward stops. It was first shown with preschool children who liked drawing.',
      },
      {
        question: 'Do rewards kill intrinsic motivation?',
        answer: 'Not always. A meta-analysis of 128 experiments found that expected tangible rewards reduced intrinsic motivation, while positive feedback increased it. Whether a reward feels informative or controlling makes a large difference.',
      },
      {
        question: 'Are streaks good for building habits?',
        answer: 'Streaks can motivate while they are intact, but research across seven studies found that a highlighted broken streak made people less likely to continue. Streaks that can be repaired, or that do not reset, reduce that risk.',
      },
      {
        question: 'Why do I want to quit after breaking a streak?',
        answer: 'Research suggests that keeping a logged streak becomes a goal in itself, so a break can feel like losing the goal. The effect is stronger when people blame themselves for the break.',
      },
    ],
  },
  {
    slug: 'how-long-to-form-a-habit',
    title: 'How long does it take to form a habit? What studies show',
    dek: 'Not 21 days. What real-world habit studies found about timing, missed days and cues, and why your phone and its games should not own your habits.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/how-long-to-form-a-habit.webp',
    imageAlt: 'Flurry and Sprout beside an iPhone showing the OutBrick Journey map at Button Factory, with numbered level stops along a winding road',
    tags: ['habits', 'gaming habits', 'behaviour change', 'routines', 'well-being'],
    intro: 'The claim that it takes 21 days to form a habit is repeated in countless articles and apps. It is tidy and encouraging, and it has little research behind it. When psychologists have actually followed people trying to build new habits in daily life, the timescale has been longer and much more variable. The good news in those same studies is more useful than a tidy number: missing a day matters less than people fear, and the thing that makes habits stick is something you can arrange.',
    keyTakeaways: [
      'In the best-known study, habits took a median of 66 days to become nearly automatic, with a range from 18 to 254 days.',
      'Missing a single day did not materially slow habit formation; consistency in the same context mattered more than perfection.',
      'Habits attach to cues, and a phone is a cue for many things; a good game should fit a slot you chose, not create new ones.',
    ],
    sections: [
      {
        id: 'the-66-day-study',
        title: 'The study behind the 66 days',
        paragraphs: [
          'Lally and colleagues at University College London asked 96 volunteers to pick a healthy eating, drinking or exercise behaviour and do it once a day in the same context, such as “after breakfast”. For 84 days they recorded whether they did it and how automatic it felt, using a standard habit questionnaire.',
          'Automaticity rose quickly at first and then levelled off, following a curve rather than a straight line. For the people whose data fitted that curve well, the time to reach 95% of their personal plateau ranged from 18 to 254 days, with a median of 66.',
          'Two further findings are worth holding on to. Not everyone’s data fitted a clean curve, which is a reminder that habits form messily. And missing a single opportunity did not materially affect the process. A missed day is not a reset.',
        ],
        sourceIds: ['lally-2010'],
      },
      {
        id: 'newer-evidence',
        title: 'What newer studies add',
        paragraphs: [
          'A 2024 systematic review and meta-analysis by Singh and colleagues gathered 20 studies with 2,601 participants, covering physical activity, healthy eating, flossing, drinking water and more. The four studies that reported how long habits took found median times of 59 to 66 days and mean times of 106 to 154 days, with individual cases ranging from 4 to 335 days. Habit strength rose reliably after interventions.',
          'The review also found hints about what speeds things up: habits practised in the morning and habits people chose for themselves tended to be stronger. The authors are candid that most of the studies had a high risk of bias and the total number was small, so treat these as leads rather than rules. The consistent message is that two months is a reasonable first horizon and that longer is normal.',
        ],
        sourceIds: ['singh-2024'],
      },
      {
        id: 'what-a-habit-is',
        title: 'What a habit actually is',
        paragraphs: [
          'It helps to know what is forming during those weeks. In their review in the Annual Review of Psychology, Wood and Rünger describe habits as learned links between a context and a response. They form as people repeat the same action in the same situation while pursuing a goal. Once formed, the context triggers the action with little thought, and habits become the efficient default that runs alongside deliberate choices. People even tend to infer from how often they do something that they must have meant to.',
          'Neal, Wood and Quinn point to diary studies showing that much of everyday behaviour is this kind of repetition in stable settings. That is why the context matters so much. “Exercise more” gives the brain nothing to attach to. “Walk round the block after I put the kettle on in the morning” does.',
          'It also explains why motivation alone is a poor foundation. Motivation rises and falls with mood, energy and the weather. A habit, once formed, does not need you to feel motivated; the cue does the work. That is the real prize of the first two months: not willpower, but getting to the point where you no longer need it. It is also why rewards and streaks, which run on motivation, are an uneasy fit for habit building, as we explore in [rewards, streaks and motivation](/blog/rewards-streaks-motivation).',
        ],
        sourceIds: ['wood-runger-2016', 'neal-2006'],
      },
      {
        id: 'building-a-habit-you-want',
        title: 'Building a habit you actually want',
        paragraphs: [
          'Put the findings together and a practical recipe emerges. None of it is glamorous, and all of it works with how habits form rather than against it.',
        ],
        bullets: [
          'Pick one behaviour and attach it to an existing, reliable cue: after brushing your teeth, when you sit down on the train.',
          'Make it small enough that you can do it on a bad day.',
          'Keep the context the same: same time, same place, same trigger.',
          'Expect it to take around two months, and longer for harder behaviours.',
          'If you miss a day, do it the next day; the research says one gap barely matters.',
          'Choose something you want to do: self-chosen habits tended to be stronger.',
        ],
        sourceIds: ['lally-2010', 'singh-2024', 'wood-runger-2016'],
      },
      {
        id: 'why-games-should-not-hijack-habits',
        title: 'Why games should not hijack your habits',
        paragraphs: [
          'The same mechanism that lets you build a walking habit lets an app build one for you. A phone sits in almost every context of the day, and anything designed to be opened “just for a moment” can attach itself to waiting, boredom, lying in bed and the first minute after waking. Those habits were never chosen, which is exactly why they are hard to notice. We look at the design side of this in [how games become habits](/blog/how-games-become-habits).',
          'Breaking an unwanted habit is harder than starting a new one. In two diary studies and an experiment, Quinn and colleagues found that strong bad habits were best controlled by vigilant monitoring, actively watching for the slip and telling yourself not to. Other strategies that work against temptations did not help much against strong habits.',
          'That is one reason a short break from your phone rarely rewires anything on its own. When the break ends, the cues are all still there. Our look at whether [a digital detox works](/blog/does-digital-detox-work) found the same pattern in the trials.',
          'The healthier alternative is to decide where play goes. A single [daily board](/daily) after breakfast or on the commute home is a small, chosen ritual with an end. It can become a habit you like having. What a well-made game should not do is try to claim every other gap in your day as well; our piece on [daily rituals that do not demand you](/blog/daily-rituals-that-dont-demand-you) explains why we built OutBrick’s daily bonus so that a missed day is simply a missed day.',
        ],
        sourceIds: ['quinn-2010', 'wood-runger-2016'],
      },
    ],
    references: [r.lallyHabits, r.singhHabits, r.woodRunger, r.nealHabits, r.quinnHabits],
    relatedSlugs: ['how-games-become-habits', 'daily-rituals-that-dont-demand-you', 'rewards-streaks-motivation'],
    pullQuote: 'A missed day is not a reset.',
    faqs: [
      {
        question: 'How long does it take to form a habit?',
        answer: 'In the best-known real-world study, it took a median of 66 days for a daily behaviour to become close to automatic, with individual times from 18 to 254 days. A 2024 review found similar medians of 59 to 66 days.',
      },
      {
        question: 'Is the 21-day rule for habits true?',
        answer: 'Research does not support it as a general rule. Some simple habits can form quickly, but studies that tracked people in daily life found most took around two months or longer.',
      },
      {
        question: 'What happens if I miss a day when building a habit?',
        answer: 'Very little. In the study that produced the 66-day figure, missing a single opportunity did not materially affect habit formation. Consistency over weeks matters more than an unbroken run.',
      },
      {
        question: 'How do I stop reaching for my phone out of habit?',
        answer: 'Research on strong habits found vigilant monitoring worked best: noticing the moment you are about to slip and deliberately stopping.',
      },
    ],
  },
  {
    slug: 'casual-games-stress-recovery-after-work',
    title: 'Playing to unwind: casual games and recovery after work',
    dek: 'Detachment, relaxation, mastery and control: what recovery research says about unwinding after work, and where a casual game fits in.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/casual-games-stress-recovery-after-work.webp',
    imageAlt: 'Bloo and red Bricko either side of an iPhone showing a Super Hard OutBrick board, with floating bricks on an indigo wall',
    tags: ['recovery', 'stress', 'casual gaming', 'well-being', 'work-life balance'],
    intro: 'You get home, drop your bag and pick up a game before you have taken your coat off. It can feel like the first moment of the day that belongs to you. Is that recovering, or just more screen? Occupational psychologists have spent twenty years studying how people recover from work in their free time, and games researchers have borrowed their tools to ask where play fits. The answer is encouraging, with conditions.',
    keyTakeaways: [
      'Recovery research identifies four experiences that help people unwind: detachment from work, relaxation, mastery and a sense of control.',
      'Surveys and experiments suggest games can deliver these experiences, and people under strain often use them for exactly that.',
      'Recovery works best when play is chosen and bounded; when it becomes the only way to cope, it is worth a closer look.',
    ],
    sections: [
      {
        id: 'four-recovery-experiences',
        title: 'The four ingredients of recovery',
        paragraphs: [
          'The most influential framework comes from Sonnentag and Fritz, who developed the Recovery Experience Questionnaire. Across studies with 930 working people, they found four distinct experiences that help people recuperate. Psychological detachment means not thinking about work. Relaxation means low activation and calm. Mastery means challenging, absorbing activities that build a sense of competence, like learning something new. Control means deciding for yourself what to do with your time.',
          'A later meta-analysis by Bennett, Bakker and Field pooled 54 samples and 26,592 people. Detachment had the strongest link with lower fatigue, while a sense of control had the strongest link with feeling energetic. Recovery experiences explained differences in well-being over and above the demands of people’s jobs. It is not only about how hard your day was; what you do afterwards counts too.',
          'The four ingredients are also useful because they do not require any particular activity. A run can provide detachment and mastery; a bath can provide relaxation; choosing to do nothing at all can provide control. The same activity can recover one person and drain another, depending on which of the four it delivers for them. That is the lens worth bringing to games.',
        ],
        sourceIds: ['sonnentag-fritz-2007', 'bennett-2018'],
      },
      {
        id: 'people-use-games-to-recover',
        title: 'People already use games to recover',
        paragraphs: [
          'In an online survey of 1,614 players, Reinecke found that people systematically turned to games after stressful or tiring situations. The more fatigued they were by work and daily hassles, the more they used games for recovery, and this link was stronger for people with less social support. Recovery experience was a core part of what players valued in games.',
          'Collins and Cox surveyed 491 people and found that hours spent playing per week correlated with overall recovery. The link was strongest for immersive genres such as first-person shooters and action games, and for players who had built social support through online relationships. Gaming did not reduce the extent to which work spilled into home life.',
          'Both are surveys of people who play, so they show how games are used and what goes with that use, not that games cause recovery.',
        ],
        sourceIds: ['reinecke-2009-recovery', 'collins-cox-2014'],
      },
      {
        id: 'games-against-other-options',
        title: 'Games compared with other ways to unwind',
        paragraphs: [
          'Experiments give a closer look. Reinecke, Klatt and Krämer first gave 160 people a draining work task, then randomly assigned them to play a video game, watch a recording of the same game, watch an animated clip or do nothing. The interactive and passive options produced different patterns of recovery experience. Recovery experience, in turn, went with more enjoyment, feeling more energised and doing better on a later cognitive test.',
          'Collins and colleagues compared a block puzzle game with a mindfulness app. In the lab, 45 people did a tiring task and then played the game, used the app or fiddled with a fidget spinner. Only the game raised energy levels; the other two lowered them, although how recovered people said they felt did not differ between the three. In a small field study, 20 working professionals used the game or the app at home after work for five days. Recovery experience rose over the week for the game players and fell for the app users. The authors suggest the benefit of play may build up over days rather than arriving all at once, though with samples this small, treat that as a lead.',
        ],
        sourceIds: ['reinecke-2011', 'collins-2019'],
      },
      {
        id: 'a-puzzle-and-the-four-ingredients',
        title: 'How a puzzle game maps onto the four ingredients',
        paragraphs: [
          'A good puzzle can touch all four experiences, though not always at once. It fills attention enough that work thoughts fade, which is detachment. Solving a board that looked impossible a minute ago is mastery. Choosing when to start and stop is control. Relaxation is the tricky one, because mastery needs some challenge and challenge can tip into tension.',
          'This is where the design of a game matters. OutBrick sets a move limit rather than a clock, shows every board’s target from the first tap and gives you a free first undo on every board, so the challenge stays in the puzzle rather than in a race. The same design choices that support [flow in puzzle games](/blog/flow-in-puzzle-games) support recovery: clear goals, a sense of control, nothing interrupting. If you want to try it without committing to anything, there is [a board you can play in your browser](/play).',
          'Timing matters too. A game straight after walking in the door can help draw a line under the working day, which is detachment in its most practical form. The same game at eleven at night, when relaxation should be winding down into sleep, is doing a different job.',
          'Genre is not destiny, though. The survey link with recovery was strongest for action games, and some people unwind best with something loud and fast. The four ingredients are a better guide than any list of “relaxing” games; see our checklist for [what makes a puzzle game calm](/blog/relaxing-puzzle-games-what-makes-one-calm) if calm is what you are after.',
        ],
        sourceIds: ['sonnentag-fritz-2007', 'collins-cox-2014'],
      },
      {
        id: 'when-unwinding-becomes-avoiding',
        title: 'When unwinding turns into avoiding',
        paragraphs: [
          'Reinecke found that people who tend to cope with stress by managing their feelings, rather than tackling the problem, were more likely to use games for recovery. That is not a bad thing in itself; everyone needs ways to feel better after a hard day. It becomes a problem when play is the only way, or when it stretches into the hours meant for sleep.',
          'A few signs are worth watching: playing to avoid thinking about something that needs dealing with, evenings that run later than you meant, or feeling worse rather than better when you stop. Our pieces on [when to play and when to pause](/blog/when-to-play-and-when-to-pause) and [gaming before bed](/blog/gaming-before-bed-sleep) go into those edges.',
        ],
        bullets: [
          'Give the evening one game session with a planned end, not an open tab.',
          'Mix in recovery activities with strong evidence, such as exercise and time with people.',
          'Notice whether you feel more energised or more drained afterwards, and adjust.',
        ],
        sourceIds: ['reinecke-2009-recovery', 'bennett-2018'],
      },
    ],
    references: [r.sonnentagFritz, r.bennettRecovery, r.reineckeRecovery, r.collinsCox, r.reineckeMedia, r.collinsMindfulness],
    relatedSlugs: ['micro-breaks-at-work-short-game', 'relaxing-puzzle-games-what-makes-one-calm', 'flow-in-puzzle-games'],
    pullQuote: 'It is not only about how hard your day was; what you do afterwards counts too.',
    faqs: [
      {
        question: 'Do video games help you relax after work?',
        answer: 'They can. Surveys find people use games to recover from work stress, and a lab experiment found a casual puzzle game raised energy after a tiring task while a mindfulness app and a fidget toy did not. The evidence is promising but based on small studies.',
      },
      {
        question: 'What is the best way to recover after work?',
        answer: 'Recovery research points to four experiences: mentally detaching from work, relaxing, mastering something absorbing and having control over your time. Any activity that provides them can help, and detachment has the strongest link with lower fatigue.',
      },
      {
        question: 'Are puzzle games or action games better for de-stressing?',
        answer: 'It depends on the person. In one survey, action games had the strongest link with recovery, while calm puzzle games may suit people who want relaxation more than excitement. The four recovery experiences are a better guide than genre.',
      },
      {
        question: 'Can gaming become a way of avoiding problems?',
        answer: 'Yes. Using games to feel better after a hard day is normal, but if play is your only way of coping, or it regularly eats into sleep, it is worth changing the balance.',
      },
    ],
  },
  {
    slug: 'is-gaming-good-or-bad-for-mood',
    title: 'Is gaming good or bad for your mood? What diary studies show',
    dek: 'In-game mood reports, logged play time and a console lottery: what the newest studies say about gaming and mood, and why hours matter less than fit.',
    category: 'Player habits',
    categoryColor: 'blue',
    publishedAt: 'September 24, 2026',
    updatedAt: 'September 24, 2026',
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/is-gaming-good-or-bad-for-mood.webp',
    imageAlt: 'Vio in headphones and Bloo either side of an iPhone showing the OutBrick Journey map at Button Factory, on an indigo brick wall',
    tags: ['gaming and mood', 'well-being', 'research', 'healthy play', 'gaming habits'],
    intro: 'For years, the question of whether games make people happier or unhappier was answered with surveys that asked players to guess how much they played and how they had felt lately. Both guesses are unreliable, so it is no surprise the answers disagreed. In the past five years, researchers have started working with game companies to log actual play, and asking players about their mood in the moment, sometimes in the middle of a session. The picture that emerges is more reassuring than the old fears and more modest than the old promises.',
    keyTakeaways: [
      'In more than 160,000 in-game mood reports, most players felt slightly better during play than when they started, mostly in the first 15 minutes.',
      'Studies that logged real play time have found little or no link between hours played and well-being, in either direction.',
      'How play fits into your life, and why you play, predicts well-being better than how long you play.',
    ],
    sections: [
      {
        id: 'why-method-matters',
        title: 'Why the method matters',
        paragraphs: [
          'Two measurement problems have dogged research on games and mood. The first is that people are poor at estimating their own screen time, a problem we cover in [screen time myths](/blog/screen-time-myths-research). The second is that asking “how have you felt over the past month?” blurs together good days and bad, and whatever the game did disappears into the average.',
          'Newer studies tackle both. Telemetry from game companies records when and how long people actually play. Experience sampling, sometimes called a diary method, asks people how they feel at many moments across days or weeks, so researchers can compare the same person when playing and not playing, or at the start and middle of a session. Neither method proves cause and effect, but together they are a big step up from a single questionnaire.',
        ],
      },
      {
        id: 'mood-during-play',
        title: 'Mood during play: a small, fast lift',
        paragraphs: [
          'The most detailed look at mood during play comes from PowerWash Simulator, a calm game about cleaning things with a pressure washer. Vuorre and colleagues worked with the developer to ask players about their mood at intervals inside the game, collecting 162,325 reports from 67,328 sessions by 8,695 players.',
          'On average, players reported slightly better mood during play than at the start of a session, a gain of about 3 points on a 100-point scale. The researchers estimated that around 72% of similar players would experience this lift, and that most of it arrived within the first 15 minutes. The authors are careful: one game, its own players, and no way to say whether the game caused the change or would have done the same in other games. It is still a rare look at mood measured during play rather than remembered afterwards.',
        ],
        sourceIds: ['vuorre-2024'],
      },
      {
        id: 'mood-and-hours-played',
        title: 'Mood and hours played: very little link',
        paragraphs: [
          'If short sessions nudge mood upwards, do more hours mean more well-being, or less? Johannes, Vuorre and Przybylski combined logged play from Plants vs. Zombies: Battle for Neighborville and Animal Crossing: New Horizons with player surveys. They found a small positive relation between play time and players’ affective well-being. Players’ motivations and the needs a game satisfied were related to well-being in their own right.',
          'A larger follow-up by Vuorre and colleagues linked six weeks of logged play from 38,935 players, supplied by seven game publishers, with three waves of well-being surveys. It found little to no evidence that play time affected well-being, while motivations again seemed to matter. A registered report by Ballou and colleagues tracked 414 Xbox players across all their games for 12 weeks and found no practically meaningful link in either direction between play time and well-being.',
          'Most recently, Ballou and colleagues studied 703 casual adult Nintendo Switch players across 150 games and more than 140,000 hours of play. Play time did not predict life satisfaction, mood, depressive symptoms or general well-being, at timescales from an hour to a year. What did predict well-being was gaming life fit: how well players felt games sat alongside the rest of their lives.',
          'Taken together, these studies are unusually strong by the standards of the field: large samples, logged rather than guessed play time, several games and, in one case, a preregistered plan. They do not mean games affect nobody. They mean that for most players the number of hours is not where the story is. A person who plays three hours on a Sunday with friends and a person who plays three hours at night to avoid thinking about something are doing different things, and a time total cannot tell them apart.',
        ],
        sourceIds: ['johannes-2021', 'vuorre-2022', 'ballou-2024', 'ballou-2025'],
      },
      {
        id: 'a-natural-experiment',
        title: 'A natural experiment from Japan',
        paragraphs: [
          'Observational data can never fully rule out that happier people simply play differently. Egami and colleagues found an unusual way round that. During the pandemic, demand for game consoles in Japan was so high that retailers sold them by lottery, so whether someone got a console was partly down to chance. Analysing survey data from 97,602 people with methods designed for cause-and-effect questions, they found that owning a console, and the extra play that came with it, reduced psychological distress and improved life satisfaction.',
          'The effects differed by console and by group, with one console showing smaller benefits for adolescents and women and the other larger benefits for adolescents. The study took place during an unusual period of isolation, when games may have filled a gap that would not exist in ordinary times. Even so, it is some of the strongest evidence yet that gaming, on average, is not bad for mood.',
        ],
        sourceIds: ['egami-2024'],
      },
      {
        id: 'what-it-adds-up-to',
        title: 'What it adds up to',
        paragraphs: [
          'A review by Halbrook, O’Donnell and Msetfi argued that the effects of games on well-being depend on the player’s motivation, the social context, the content of the game and what else is going on in their life. The newer data fit that view. Playing is usually a small positive in the moment and neutral in the long run. The differences between people come from why and how they play, not from a number of hours.',
          'That is the idea behind [designing for the life players actually have](/blog/designing-for-real-life-play), and it is why OutBrick makes no promises about your mood. The small in-session lift found in PowerWash Simulator also fits what we know about [playing to unwind after work](/blog/casual-games-stress-recovery-after-work): a short, absorbing game can be a pleasant way to change gear, not a treatment. We aim for a game that is pleasant to spend ten minutes with and easy to put down. The same logic applies to any game: try a [daily board](/daily) or [a board in your browser](/play) and notice how you feel before and after, rather than trusting a headline either way.',
        ],
        bullets: [
          'Check your mood before and after playing, a small experiment of your own.',
          'Ask whether games fit well alongside sleep, work and people, not how many hours you log.',
          'If you notice you mostly play to escape feeling bad, and it no longer helps, talk to someone you trust.',
        ],
        sourceIds: ['halbrook-2019', 'ballou-2025'],
      },
    ],
    references: [r.vuorreUplift, r.johannesPlay, r.vuorreTime, r.ballouXbox, r.ballouNintendo, r.egamiConsoles, r.halbrookReview],
    relatedSlugs: ['screen-time-myths-research', 'designing-for-real-life-play', 'casual-games-stress-recovery-after-work'],
    pullQuote: 'Playing is usually a small positive in the moment and neutral in the long run.',
    faqs: [
      {
        question: 'Does playing video games improve your mood?',
        answer: 'Usually a little, in the moment. In more than 160,000 in-game mood reports from PowerWash Simulator players, mood during play was slightly higher than at the start of sessions, with most of the lift in the first 15 minutes.',
      },
      {
        question: 'Is more gaming worse for mental health?',
        answer: 'Studies using logged play time have found little or no link between hours played and well-being for most players. How play fits into the rest of life appears to matter more than the amount.',
      },
      {
        question: 'What is gaming life fit?',
        answer: 'Gaming life fit describes how well players feel games sit alongside the rest of their lives. In a study of 703 Nintendo Switch players, it predicted well-being, while hours played did not.',
      },
      {
        question: 'Can video games make you feel worse?',
        answer: 'They can for some people and situations, which averages can hide. If you mostly play to escape bad feelings and it no longer helps, or play crowds out sleep and people, it is worth changing the balance or talking to someone.',
      },
    ],
  },
];
