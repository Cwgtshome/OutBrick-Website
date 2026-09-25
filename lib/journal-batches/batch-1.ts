import type { BlogArticle, BlogReference } from '../blog.ts';

/**
 * Journal batch 1. Same shape and copy conventions as lib/blog.ts (see the note above
 * `baseArticles` there); every reference is a peer-reviewed source, cited in APA 7, and
 * checked against Crossref by `pnpm verify:refs`.
 *
 * Theme: puzzle-solving skill and the psychology of thinking.
 */

const ref = (id: string, label: string, citation: string, doi: string): BlogReference => ({
  id,
  label,
  citation,
  url: `https://doi.org/${doi}`,
});

const r = {
  kotovsky: ref('kotovsky-1985', 'Kotovsky et al. (1985)', 'Kotovsky, K., Hayes, J. R., & Simon, H. A. (1985). Why are some problems hard? Evidence from Tower of Hanoi. Cognitive Psychology, 17(2), 248–294.', '10.1016/0010-0285(85)90009-X'),
  zhangNorman: ref('zhang-norman-1994', 'Zhang & Norman (1994)', 'Zhang, J., & Norman, D. A. (1994). Representations in distributed cognitive tasks. Cognitive Science, 18(1), 87–122.', '10.1207/s15516709cog1801_3'),
  chi: ref('chi-1981', 'Chi et al. (1981)', 'Chi, M. T. H., Feltovich, P. J., & Glaser, R. (1981). Categorization and representation of physics problems by experts and novices. Cognitive Science, 5(2), 121–152.', '10.1207/s15516709cog0502_2'),
  wardAllport: ref('ward-allport-1997', 'Ward & Allport (1997)', 'Ward, G., & Allport, A. (1997). Planning and problem-solving using the five-disc Tower of London task. The Quarterly Journal of Experimental Psychology Section A, 50(1), 49–78.', '10.1080/713755681'),
  kirshMaglio: ref('kirsh-maglio-1994', 'Kirsh & Maglio (1994)', 'Kirsh, D., & Maglio, P. (1994). On distinguishing epistemic from pragmatic action. Cognitive Science, 18(4), 513–549.', '10.1207/s15516709cog1804_1'),
  metcalfe: ref('metcalfe-2017', 'Metcalfe (2017)', 'Metcalfe, J. (2017). Learning from errors. Annual Review of Psychology, 68, 465–489.', '10.1146/annurev-psych-010416-044022'),
  kornell: ref('kornell-2009', 'Kornell et al. (2009)', 'Kornell, N., Hays, M. J., & Bjork, R. A. (2009). Unsuccessful retrieval attempts enhance subsequent learning. Journal of Experimental Psychology: Learning, Memory, and Cognition, 35(4), 989–998.', '10.1037/a0015729'),
  keithFrese: ref('keith-frese-2008', 'Keith & Frese (2008)', 'Keith, N., & Frese, M. (2008). Effectiveness of error management training: A meta-analysis. Journal of Applied Psychology, 93(1), 59–69.', '10.1037/0021-9010.93.1.59'),
  ohara1998: ref('ohara-payne-1998', 'O’Hara & Payne (1998)', 'O’Hara, K. P., & Payne, S. J. (1998). The effects of operator implementation cost on planfulness of problem solving and learning. Cognitive Psychology, 35(1), 34–70.', '10.1006/cogp.1997.0676'),
  ohara1999: ref('ohara-payne-1999', 'O’Hara & Payne (1999)', 'O’Hara, K. P., & Payne, S. J. (1999). Planning and the user interface: The effects of lockout time and error recovery cost. International Journal of Human-Computer Studies, 50(1), 41–59.', '10.1006/ijhc.1998.0234'),
  chaseSimon: ref('chase-simon-1973', 'Chase & Simon (1973)', 'Chase, W. G., & Simon, H. A. (1973). Perception in chess. Cognitive Psychology, 4(1), 55–81.', '10.1016/0010-0285(73)90004-2'),
  gobet2001: ref('gobet-2001', 'Gobet et al. (2001)', 'Gobet, F., Lane, P. C. R., Croker, S., Cheng, P. C.-H., Jones, G., Oliver, I., & Pine, J. M. (2001). Chunking mechanisms in human learning. Trends in Cognitive Sciences, 5(6), 236–243.', '10.1016/S1364-6613(00)01662-4'),
  gobetSimon: ref('gobet-simon-1996', 'Gobet & Simon (1996)', 'Gobet, F., & Simon, H. A. (1996). Recall of rapidly presented random chess positions is a function of skill. Psychonomic Bulletin & Review, 3(2), 159–163.', '10.3758/BF03212414'),
  reingold: ref('reingold-2001', 'Reingold et al. (2001)', 'Reingold, E. M., Charness, N., Pomplun, M., & Stampe, D. M. (2001). Visual span in expert chess players: Evidence from eye movements. Psychological Science, 12(1), 48–55.', '10.1111/1467-9280.00309'),
  salaGobet: ref('sala-gobet-2017', 'Sala & Gobet (2017)', 'Sala, G., & Gobet, F. (2017). Does far transfer exist? Negative evidence from chess, music, and working memory training. Current Directions in Psychological Science, 26(6), 515–520.', '10.1177/0963721417712760'),
  sio: ref('sio-ormerod-2009', 'Sio & Ormerod (2009)', 'Sio, U. N., & Ormerod, T. C. (2009). Does incubation enhance problem solving? A meta-analytic review. Psychological Bulletin, 135(1), 94–120.', '10.1037/a0014212'),
  smithBlankenship: ref('smith-blankenship-1991', 'Smith & Blankenship (1991)', 'Smith, S. M., & Blankenship, S. E. (1991). Incubation and the persistence of fixation in problem solving. The American Journal of Psychology, 104(1), 61–87.', '10.2307/1422851'),
  baird: ref('baird-2012', 'Baird et al. (2012)', 'Baird, B., Smallwood, J., Mrazek, M. D., Kam, J. W. Y., Franklin, M. S., & Schooler, J. W. (2012). Inspired by distraction: Mind wandering facilitates creative incubation. Psychological Science, 23(10), 1117–1122.', '10.1177/0956797612446024'),
  wagner: ref('wagner-2004', 'Wagner et al. (2004)', 'Wagner, U., Gais, S., Haider, H., Verleger, R., & Born, J. (2004). Sleep inspires insight. Nature, 427(6972), 352–355.', '10.1038/nature02223'),
  gilhooly: ref('gilhooly-2016', 'Gilhooly (2016)', 'Gilhooly, K. J. (2016). Incubation and intuition in creative problem solving. Frontiers in Psychology, 7, 1076.', '10.3389/fpsyg.2016.01076'),
  simon1956: ref('simon-1956', 'Simon (1956)', 'Simon, H. A. (1956). Rational choice and the structure of the environment. Psychological Review, 63(2), 129–138.', '10.1037/h0042769'),
  schwartz: ref('schwartz-2002', 'Schwartz et al. (2002)', 'Schwartz, B., Ward, A., Monterosso, J., Lyubomirsky, S., White, K., & Lehman, D. R. (2002). Maximizing versus satisficing: Happiness is a matter of choice. Journal of Personality and Social Psychology, 83(5), 1178–1197.', '10.1037/0022-3514.83.5.1178'),
  delaney: ref('delaney-2004', 'Delaney et al. (2004)', 'Delaney, P. F., Ericsson, K. A., & Knowles, M. E. (2004). Immediate and sustained effects of planning in a problem-solving task. Journal of Experimental Psychology: Learning, Memory, and Cognition, 30(6), 1219–1234.', '10.1037/0278-7393.30.6.1219'),
  vanOpheusden: ref('van-opheusden-2023', 'van Opheusden et al. (2023)', 'van Opheusden, B., Kuperwajs, I., Galbiati, G., Bnaya, Z., Li, Y., & Ma, W. J. (2023). Expertise increases planning depth in human gameplay. Nature, 618(7967), 1000–1005.', '10.1038/s41586-023-06124-2'),
  huys: ref('huys-2012', 'Huys et al. (2012)', 'Huys, Q. J. M., Eshel, N., O’Nions, E., Sheridan, L., Dayan, P., & Roiser, J. P. (2012). Bonsai trees in your head: How the Pavlovian system sculpts goal-directed choices by pruning decision trees. PLoS Computational Biology, 8(3), e1002410.', '10.1371/journal.pcbi.1002410'),
  uttal: ref('uttal-2013', 'Uttal et al. (2013)', 'Uttal, D. H., Meadow, N. G., Tipton, E., Hand, L. L., Alden, A. R., Warren, C., & Newcombe, N. S. (2013). The malleability of spatial skills: A meta-analysis of training studies. Psychological Bulletin, 139(2), 352–402.', '10.1037/a0028446'),
  terlecki: ref('terlecki-2008', 'Terlecki et al. (2008)', 'Terlecki, M. S., Newcombe, N. S., & Little, M. (2008). Durable and generalized effects of spatial experience on mental rotation: Gender differences in growth patterns. Applied Cognitive Psychology, 22(7), 996–1013.', '10.1002/acp.1420'),
  simsMayer: ref('sims-mayer-2002', 'Sims & Mayer (2002)', 'Sims, V. K., & Mayer, R. E. (2002). Domain specificity of spatial expertise: The case of video game players. Applied Cognitive Psychology, 16(1), 97–115.', '10.1002/acp.759'),
  sala2018: ref('sala-2018', 'Sala et al. (2018)', 'Sala, G., Tatlidil, K. S., & Gobet, F. (2018). Video game training does not enhance cognitive ability: A comprehensive meta-analytic investigation. Psychological Bulletin, 144(2), 111–139.', '10.1037/bul0000139'),
  levine: ref('levine-2012', 'Levine et al. (2012)', 'Levine, S. C., Ratliff, K. R., Huttenlocher, J., & Cannon, J. (2012). Early puzzle play: A predictor of preschoolers’ spatial transformation skill. Developmental Psychology, 48(2), 530–542.', '10.1037/a0025913'),
  cowan: ref('cowan-2001', 'Cowan (2001)', 'Cowan, N. (2001). The magical number 4 in short-term memory: A reconsideration of mental storage capacity. Behavioral and Brain Sciences, 24(1), 87–114.', '10.1017/S0140525X01003922'),
  sweller1988: ref('sweller-1988', 'Sweller (1988)', 'Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. Cognitive Science, 12(2), 257–285.', '10.1207/s15516709cog1202_4'),
  sweller2019: ref('sweller-2019', 'Sweller et al. (2019)', 'Sweller, J., van Merriënboer, J. J. G., & Paas, F. (2019). Cognitive architecture and instructional design: 20 years later. Educational Psychology Review, 31(2), 261–292.', '10.1007/s10648-019-09465-5'),
  phillips: ref('phillips-2001', 'Phillips et al. (2001)', 'Phillips, L. H., Wynn, V. E., McPherson, S., & Gilhooly, K. J. (2001). Mental planning and the Tower of London task. The Quarterly Journal of Experimental Psychology Section A, 54(2), 579–597.', '10.1080/713755977'),
  risko: ref('risko-gilbert-2016', 'Risko & Gilbert (2016)', 'Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. Trends in Cognitive Sciences, 20(9), 676–688.', '10.1016/j.tics.2016.07.002'),
  ericsson: ref('ericsson-1993', 'Ericsson et al. (1993)', 'Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. Psychological Review, 100(3), 363–406.', '10.1037/0033-295X.100.3.363'),
  macnamara: ref('macnamara-2014', 'Macnamara et al. (2014)', 'Macnamara, B. N., Hambrick, D. Z., & Oswald, F. L. (2014). Deliberate practice and performance in music, games, sports, education, and professions: A meta-analysis. Psychological Science, 25(8), 1608–1618.', '10.1177/0956797614535810'),
  macnamaraMaitra: ref('macnamara-maitra-2019', 'Macnamara & Maitra (2019)', 'Macnamara, B. N., & Maitra, M. (2019). The role of deliberate practice in expert performance: Revisiting Ericsson, Krampe & Tesch-Römer (1993). Royal Society Open Science, 6(8), 190327.', '10.1098/rsos.190327'),
  charness: ref('charness-2005', 'Charness et al. (2005)', 'Charness, N., Tuffiash, M., Krampe, R., Reingold, E., & Vasyukova, E. (2005). The role of deliberate practice in chess expertise. Applied Cognitive Psychology, 19(2), 151–165.', '10.1002/acp.1106'),
  stafford: ref('stafford-dewar-2014', 'Stafford & Dewar (2014)', 'Stafford, T., & Dewar, M. (2014). Tracing the trajectory of skill learning with a very large sample of online game players. Psychological Science, 25(2), 511–518.', '10.1177/0956797613511466'),
  kounios: ref('kounios-beeman-2014', 'Kounios & Beeman (2014)', 'Kounios, J., & Beeman, M. (2014). The cognitive neuroscience of insight. Annual Review of Psychology, 65, 71–93.', '10.1146/annurev-psych-010213-115154'),
  jungBeeman: ref('jung-beeman-2004', 'Jung-Beeman et al. (2004)', 'Jung-Beeman, M., Bowden, E. M., Haberman, J., Frymiare, J. L., Arambel-Liu, S., Greenblatt, R., Reber, P. J., & Kounios, J. (2004). Neural activity when people solve verbal problems with insight. PLoS Biology, 2(4), e97.', '10.1371/journal.pbio.0020097'),
  metcalfeWiebe: ref('metcalfe-wiebe-1987', 'Metcalfe & Wiebe (1987)', 'Metcalfe, J., & Wiebe, D. (1987). Intuition in insight and noninsight problem solving. Memory & Cognition, 15(3), 238–246.', '10.3758/BF03197722'),
  knoblich: ref('knoblich-1999', 'Knoblich et al. (1999)', 'Knoblich, G., Ohlsson, S., Haider, H., & Rhenius, D. (1999). Constraint relaxation and chunk decomposition in insight problem solving. Journal of Experimental Psychology: Learning, Memory, and Cognition, 25(6), 1534–1555.', '10.1037/0278-7393.25.6.1534'),
  salvi: ref('salvi-2016', 'Salvi et al. (2016)', 'Salvi, C., Bricolo, E., Kounios, J., Bowden, E., & Beeman, M. (2016). Insight solutions are correct more often than analytic solutions. Thinking & Reasoning, 22(4), 443–460.', '10.1080/13546783.2016.1141798'),
  danekWiley: ref('danek-wiley-2017', 'Danek & Wiley (2017)', 'Danek, A. H., & Wiley, J. (2017). What about false insights? Deconstructing the Aha! experience along its multiple dimensions for correct and incorrect solutions separately. Frontiers in Psychology, 7, 2077.', '10.3389/fpsyg.2016.02077'),
  laukkonen: ref('laukkonen-2020', 'Laukkonen et al. (2020)', 'Laukkonen, R. E., Kaveladze, B. T., Tangen, J. M., & Schooler, J. W. (2020). The dark side of Eureka: Artificially induced Aha moments make facts feel true. Cognition, 196, 104122.', '10.1016/j.cognition.2019.104122'),
  bjork: ref('bjork-2020', 'Bjork & Bjork (2020)', 'Bjork, R. A., & Bjork, E. L. (2020). Desirable difficulties in theory and practice. Journal of Applied Research in Memory and Cognition, 9(4), 475–479.', '10.1016/j.jarmac.2020.09.003'),
  soderstrom: ref('soderstrom-bjork-2015', 'Soderstrom & Bjork (2015)', 'Soderstrom, N. C., & Bjork, R. A. (2015). Learning versus performance: An integrative review. Perspectives on Psychological Science, 10(2), 176–199.', '10.1177/1745691615569000'),
  sinhaKapur: ref('sinha-kapur-2021', 'Sinha & Kapur (2021)', 'Sinha, T., & Kapur, M. (2021). When problem solving followed by instruction works: Evidence for productive failure. Review of Educational Research, 91(5), 761–798.', '10.3102/00346543211019105'),
  inzlicht: ref('inzlicht-2018', 'Inzlicht et al. (2018)', 'Inzlicht, M., Shenhav, A., & Olivola, C. Y. (2018). The effort paradox: Effort is both costly and valued. Trends in Cognitive Sciences, 22(4), 337–349.', '10.1016/j.tics.2018.01.007'),
  norton: ref('norton-2012', 'Norton et al. (2012)', 'Norton, M. I., Mochon, D., & Ariely, D. (2012). The IKEA effect: When labor leads to love. Journal of Consumer Psychology, 22(3), 453–460.', '10.1016/j.jcps.2011.08.002'),
  crede: ref('crede-2017', 'Credé et al. (2017)', 'Credé, M., Tynan, M. C., & Harms, P. D. (2017). Much ado about grit: A meta-analytic synthesis of the grit literature. Journal of Personality and Social Psychology, 113(3), 492–511.', '10.1037/pspp0000102'),
};

const common = {
  publishedAt: 'September 24, 2026',
  updatedAt: 'September 24, 2026',
};

export const batch1: BlogArticle[] = [
  // 1 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'how-to-read-a-puzzle-before-moving',
    title: 'Before the first move: how to read a puzzle like a solver',
    dek: 'Why the way you picture a puzzle shapes how hard it feels, what experts look at first, and a short routine for reading any board before you touch it.',
    category: 'OutBrick practice',
    categoryColor: 'green',
    ...common,
    readingTime: '7 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/how-to-read-a-puzzle-before-moving.webp',
    imageAlt: 'Sprout and Bricko stand either side of an iPhone showing the OutBrick shop, with studded bricks floating on an indigo grid',
    tags: ['how to solve puzzles', 'puzzle tips', 'problem solving', 'planning', 'cognitive psychology'],
    intro: 'Most wasted moves in a puzzle are made in the first ten seconds, before the solver really knows what the puzzle is. That is not carelessness. It is how minds work: we start acting on the first description of a problem that comes to hand, and the first description is often a poor one. Psychologists have spent fifty years showing that the same puzzle can be easy or brutal depending on how it is represented in the head. The good news is that representation is a skill, and a few habits of looking improve it.',
    keyTakeaways: [
      'Two puzzles with identical structure can differ enormously in difficulty, and much of the difference lies in how the rules and the current position are held in mind.',
      'Experts sort problems by their deep structure while beginners sort them by surface features; on a puzzle board, that means reading blockers and exits, not colours.',
      'Planning effort concentrates where several moves compete, so a good board read is mostly a search for those forks.',
    ],
    sections: [
      {
        id: 'same-puzzle-different-difficulty',
        title: 'The same puzzle can be easy or hard',
        paragraphs: [
          'In 1985 Kenneth Kotovsky, John Hayes and Herbert Simon gave people a set of puzzles that were, underneath, all the Tower of Hanoi: the same positions, the same legal moves, the same shortest solution. Only the cover story and the way the rules were framed changed. In some versions, monsters passed globes between one another; in others, they changed the size of the globes they held. The structure was identical, yet some versions took people many times longer to solve than others.',
          'Their analysis pointed at representation. Versions whose rules were harder to picture, or that forced solvers to hold more of the rules and the current position in mind at once, were harder. Much of the solving time went into simply learning to make legal moves fluently; once that became easy, the final run to the goal tended to be quick. A large part of the difficulty was not in searching for a solution at all, but in getting the problem into a shape the mind could work with.',
          'Jiajie Zhang and Donald Norman took the idea a step further in 1994. They built versions of the Tower of Hanoi in which some rules were enforced by the objects themselves, so an illegal move was physically awkward or impossible rather than something the solver had to remember not to do. The more of the rules that lived in the world rather than in the head, the easier the puzzle became. A well-made board, like a well-made tool, carries part of the thinking for you.',
        ],
        sourceIds: ['kotovsky-1985', 'zhang-norman-1994'],
      },
      {
        id: 'experts-read-structure',
        title: 'Experts read structure, beginners read surface',
        paragraphs: [
          'A classic study by Michelene Chi, Paul Feltovich and Robert Glaser asked physics experts and novices to sort textbook problems into groups. Novices grouped them by what they looked like: problems with inclined planes together, problems with springs together. Experts grouped them by the principle that would solve them, such as conservation of energy, even when the problems looked nothing alike. The experts were not seeing more. They were seeing different things.',
          'Puzzle boards invite the same split. The surface of a colour sort board is colours and shapes, and it is tempting to read it that way: there are the reds, there are the blues. The structure is something else: which piece sits between which other piece and its exit, where the empty space is, which slide opens a lane and which one closes it. A solver who reads structure sees a short chain of dependencies. A solver who reads surface sees a crowd.',
          'You do not need years of practice to borrow the expert’s question. Before you move, ask what kind of problem this board is. Is it a traffic jam, where everything waits on one piece? A shortage of space, where the first job is to make room? An ordering problem, where colours must leave in a particular sequence? Naming the type is a small act of representation, and it changes which moves look promising. Over time those types become patterns you recognise at a glance, which is what [chunking](/blog/chunking-how-expert-puzzlers-see-patterns) describes.',
        ],
        sourceIds: ['chi-1981'],
      },
      {
        id: 'plan-where-choices-compete',
        title: 'Spend your planning where choices compete',
        paragraphs: [
          'How long should you look before you move? Geoff Ward and Alan Allport studied adults planning solutions to a hard, five-disc version of the Tower of London, a puzzle used widely in psychology to study planning. People planned a fluent solution and then carried it out. The time they needed to prepare, and the errors they made, rose with the number of subgoal chunks: stretches of moves that were necessary but did not put anything in its final place. Planning also slowed when more alternative moves competed at critical steps.',
          'That gives a useful rule of thumb. Planning is not spread evenly across a puzzle. It piles up at the points where several moves look sensible and only one keeps the solution alive, and in the stretches where you must move pieces out of the way rather than home. Those are the moments to slow down. Where a move is forced, or a piece has a clear run to its exit, there is little to plan, and staring only burns attention.',
          'Seen this way, a board read is really a search for the forks. Find the one or two places where the board branches and you have found most of the puzzle.',
        ],
        sourceIds: ['ward-allport-1997'],
      },
      {
        id: 'a-reading-routine',
        title: 'A thirty-second reading routine',
        paragraphs: [
          'Here is a routine that puts the research into practice. It takes about thirty seconds on a mid-sized board, and it works on sliding puzzles, colour sort puzzles and most grid puzzles with exits.',
        ],
        bullets: [
          'Name the goal. What does “solved” look like, and which pieces have furthest to go?',
          'Find the free space. Every plan has to pass through the empty cells, so know where they are.',
          'Trace one chain backwards from an exit: what blocks this piece, and what blocks that one?',
          'Mark the forks: places where two moves both look sensible but lead to different boards.',
          'Name the board’s type: a jam, a shortage of space or an ordering problem.',
        ],
        note: 'The last step is the one most people skip, and it is where representation does its work. Once you have named the type, the obvious first move often stops looking obvious.',
      },
      {
        id: 'looking-with-your-hands',
        title: 'Not all looking happens in your head',
        paragraphs: [
          'One caution from research on action: reading a board does not have to be purely mental. David Kirsh and Paul Maglio found that skilled Tetris players rotate pieces on screen partly to find out how they fit, using the world to think. They called these epistemic actions, moves made to uncover information rather than to make progress, and showed they can be quicker and more reliable than working everything out in the head. In a puzzle with an undo, a probing move is sometimes the fastest way to read a board.',
          'For move-by-move tactics once the reading is done, our guides to [solving sliding block puzzles](/blog/how-to-solve-sliding-block-puzzles) and [colour sort puzzle tips](/blog/colour-sort-puzzle-tips) pick up where this routine stops.',
        ],
        sourceIds: ['kirsh-maglio-1994'],
      },
      {
        id: 'reading-an-outbrick-board',
        title: 'Reading an OutBrick board',
        paragraphs: [
          'OutBrick puts several of its rules into the board itself, which is the Zhang and Norman lesson in practice. A brick glides until something stops it, so where it can end up is fixed by the board rather than by your aim. Each brick leaves only through the gate of its own colour, so the gates enforce the colour rule for you. The move target and the move limit are printed from the first tap. And the colour-blind glyphs, on by default, give every brick and gate a shape as well as a hue, which makes it easier to read the board as structure rather than a wash of colour.',
          'What remains for you is the structural read: which brick is holding up which colour, where the space is, where the board forks. On later boards, keys, locks, crates and gates add dependencies worth tracing before anything moves, because a lock opened too late can turn a tidy chain into a long detour.',
          'There is no clock on any board, so reading costs you nothing but a few seconds. The [browser board](/play) is a good place to try the routine, and the [daily board](/daily) gives everyone the same puzzle each day, which makes it easy to compare how you read it with how a friend did.',
        ],
        sourceIds: ['zhang-norman-1994'],
      },
    ],
    references: [r.kotovsky, r.zhangNorman, r.chi, r.wardAllport, r.kirshMaglio],
    relatedSlugs: ['colour-sort-puzzle-tips', 'how-to-solve-sliding-block-puzzles', 'chunking-how-expert-puzzlers-see-patterns'],
    pullQuote: 'A solver who reads structure sees a short chain of dependencies. A solver who reads surface sees a crowd.',
    faqs: [
      { question: 'How should you approach a puzzle you have never seen before?', answer: 'Read it before you move. Find the goal, the free space and what blocks the piece closest to leaving, then look for the points where two moves compete, because those forks are where most of the thinking belongs.' },
      { question: 'Why do some puzzles feel harder than others with the same rules?', answer: 'Much of a puzzle’s difficulty lies in how it is represented in your head. In a classic study of Tower of Hanoi versions with identical structure, some took people many times longer to solve, largely because their rules were harder to hold in mind.' },
      { question: 'Should I plan the whole solution before my first move?', answer: 'Rarely. Plan up to the next point where the board forks, play that stretch, then read the board again. Studies of planning puzzles find that effort rises with the number of competing choices, so that is where your attention is best spent.' },
      { question: 'Does OutBrick have a timer?', answer: 'No. Every OutBrick board shows a move target and a move limit from the first tap, but there is no clock anywhere in the game, so time spent reading the board is free.' },
    ],
  },

  // 2 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'why-undo-makes-you-a-better-puzzle-solver',
    title: 'Why undo makes you a better puzzle solver, not a lazier one',
    dek: 'Mistakes you can take back are some of the best teachers a puzzle has. What research on errors and planning says about using undo well, and when to hold back.',
    category: 'Learning through play',
    categoryColor: 'gold',
    ...common,
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/why-undo-makes-you-a-better-puzzle-solver.webp',
    imageAlt: 'Poppy with her star wand and Bricko beside an iPhone showing the OutBrick shop, on an indigo brick grid',
    tags: ['learning from mistakes', 'problem solving', 'puzzle tips', 'planning', 'game design'],
    intro: 'Some players treat undo as a confession. They would rather stare at a board for two minutes than take a move back, as if the button were for people who cannot really do puzzles. The research on learning points the other way, with one interesting catch. Errors you notice and correct are among the most useful things that can happen while you learn. But when mistakes cost nothing at all, people also plan less. Using undo well means getting the first effect without paying too much of the second.',
    keyTakeaways: [
      'An error followed by correction generally helps learning, and the benefit is largest when you were confident in the mistake.',
      'In a meta-analysis of 24 studies, training that encouraged exploration and errors transferred better to new tasks than training that steered people away from mistakes.',
      'Making mistakes cheap also makes people plan less, so treat each undo as a test of a specific idea rather than a substitute for thinking.',
    ],
    sections: [
      {
        id: 'errors-are-information',
        title: 'Errors are information',
        paragraphs: [
          'In a 2017 review, Janet Metcalfe gathered the evidence on learning from errors. The picture surprises anyone raised on the idea that mistakes should be avoided at all costs. Making an error and then getting corrective feedback generally helps people learn; it does not stamp the error in. The benefit is strongest in the case that sounds worst: when the learner was confident that the wrong answer was right. A confident mistake that gets corrected is memorable.',
          'Nate Kornell, Matthew Hays and Robert Bjork showed a related effect in the lab. People who tried to answer a question before seeing the answer learned it better than people who simply read the question and answer together, even when their attempt was bound to fail. The unsuccessful attempt seemed to prepare them for the correction.',
          'A puzzle move is a kind of guess about the board. When the guess is wrong and you see why, you learn something about how the pieces interact that staring would not have shown you. That is what undo makes possible: the correction arrives at once, while the reasoning that led to the mistake is still fresh.',
        ],
        sourceIds: ['metcalfe-2017', 'kornell-2009'],
      },
      {
        id: 'exploring-transfers',
        title: 'Exploring and erring travel further',
        paragraphs: [
          'Workplace training research has tested this at scale. Error management training deliberately encourages learners to explore, make mistakes and learn from them, instead of following a procedure that keeps them on the right path. In 2008 Nina Keith and Michael Frese pooled 24 studies with more than 2,000 participants. On average, error management training did better than the alternatives, with a moderate effect. The gap was largest not on the tasks people practised, but on later tasks that were structurally different, which is exactly where you would want a skill to hold up.',
          'Two ingredients mattered: active exploration, and explicit encouragement to make errors. The second is easy to overlook. Being told that mistakes are part of the process changes how people react to them, and frustration has room to turn into curiosity. A game can send the same message through its design, by making the first correction cheap.',
          'Transfer to new tasks is the right thing to care about in a puzzle game too. Nobody plays the same board for long. What you want to carry from one board to the next is not a memorised solution but a better sense of how pieces block each other, and exploration builds that sense.',
        ],
        sourceIds: ['keith-frese-2008'],
      },
      {
        id: 'the-catch',
        title: 'The catch: cheap moves make lazy plans',
        paragraphs: [
          'Kenton O’Hara and Stephen Payne ran a set of experiments in the late 1990s that every puzzle designer should know. People solved the 8-puzzle, a small sliding-tile puzzle, through interfaces that made each move either quick or laborious to carry out. When moves were costly, people planned more. When moves were cheap, they leaned on trial and error in the world instead.',
          'The learning results were more mixed. In one experiment, people who had practised on the costly interface later did better on the same kind of puzzle than people who had practised on the cheap one. In another, where the later puzzle was a different one, the practice interface made no difference. A follow-up study manipulated other costs, including a lockout delay after each move and the cost of recovering from an error, and found the same basic pattern: when acting costs more, people plan more and act less.',
          'Undo is the ultimate cost reducer. It makes a bad move nearly free. So the research predicts that plentiful undo can quietly stop people planning. The answer is not to avoid undo, but to spend it on purpose.',
        ],
        sourceIds: ['ohara-payne-1998', 'ohara-payne-1999'],
      },
      {
        id: 'using-undo-well',
        title: 'How to use undo well',
        paragraphs: [
          'The trick is to treat each undo as an experiment with a question attached. Before you make a move you might take back, say what you expect it to show: if the blue slides left, does the lane open? Then look, learn and undo. You keep the planning that cheap moves tend to erode, and you still get the quick correction that makes errors useful.',
        ],
        bullets: [
          'Name the question before a probing move, not after it.',
          'After an undo, sum up in one sentence what the board just taught you.',
          'If you undo the same move twice, stop and reread the board; the problem is your plan, not the move.',
          'Save a fresh attempt for when your whole reading of the board was wrong.',
        ],
        note: 'Flicking back and forth between the same two positions is a sign that you are hoping rather than testing. That is the moment to reread the board from scratch, which [how to read a puzzle before the first move](/blog/how-to-read-a-puzzle-before-moving) walks through.',
      },
      {
        id: 'undo-in-outbrick',
        title: 'How undo works in OutBrick',
        paragraphs: [
          'OutBrick is built around this balance. The first undo on every board is free and cannot run out, so the first correction is always cheap, which is the same message error management training tries to send. Beyond that, undos come from a small tank that refills over time, and the undo offered when a board wedges is free as well. The exact terms are in the [fair-play ledger on the home page](/#fair).',
          'The stars pull the other way, on purpose. One star is a clear. Two stars is a clear inside the move target. Three stars is a clear inside the target with no undo at all. So the game rewards both kinds of learning: explore freely when you want the clear, and plan in your head when you want the third star. Our guide to [earning three stars](/blog/how-to-get-three-stars-puzzle-games) covers the planning side.',
          'To feel the difference, try the [browser board](/play) twice: once experimenting freely, once without touching undo. Notice how differently you look at the board the second time.',
        ],
      },
    ],
    references: [r.metcalfe, r.kornell, r.keithFrese, r.ohara1998, r.ohara1999],
    relatedSlugs: ['how-to-get-three-stars-puzzle-games', 'hades-run-keeps-learning', 'how-to-solve-sliding-block-puzzles'],
    pullQuote: 'The answer is not to avoid undo, but to spend it on purpose.',
    faqs: [
      { question: 'Is using undo in puzzle games cheating?', answer: 'No. Undo lets you correct a mistake while the reasoning behind it is still fresh, which research on learning from errors suggests is valuable. Its main risk is that very cheap undo can tempt you to plan less.' },
      { question: 'Does trial and error help you learn puzzles?', answer: 'It can. A meta-analysis of error management training found that encouraging exploration and mistakes led to better transfer to new tasks than error-avoidant training. It works best when each trial tests a specific idea.' },
      { question: 'Why do I plan less when undo is unlimited?', answer: 'Experiments with the 8-puzzle found that when moves were cheap to make, people relied on trial and error, and when moves were costly, they planned more. Undo makes mistakes cheap, so it shifts effort from planning to trying.' },
      { question: 'Does undo cost stars in OutBrick?', answer: 'Only the third. One star is a clear, two stars is a clear inside the move target, and three stars is a clear inside the target with no undo. The first undo on every board is free.' },
    ],
  },

  // 3 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'chunking-how-expert-puzzlers-see-patterns',
    title: 'Chunking explained: how expert puzzlers see patterns',
    dek: 'Chess masters remember boards by the pattern, not the piece. What chunking research shows about expert perception, and how to build chunks of your own.',
    category: 'Learning through play',
    categoryColor: 'gold',
    ...common,
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/chunking-how-expert-puzzlers-see-patterns.webp',
    imageAlt: 'Moss in his tool belt and Bricko either side of an iPhone showing a real, tightly packed OutBrick board marked Super Hard',
    tags: ['chunking', 'expertise', 'puzzles and memory', 'cognitive psychology', 'puzzle games research'],
    intro: 'Watch a strong puzzle player and they seem to see the answer before they have looked. They have not skipped the thinking. They have done much of it in advance, over hundreds of earlier boards, and stored it as patterns. Psychologists call those patterns chunks. The research on chunking began with chess, and it explains a good deal about what getting better at any puzzle involves, and what it does not.',
    keyTakeaways: [
      'Experts remember and read boards in meaningful groups of pieces, which lets them take in far more at a glance than beginners.',
      'The advantage shrinks sharply on random boards, because the familiar patterns experts rely on are missing.',
      'Chunks are specific to the domain they were built in: the skill is real, but it should not be expected to spread to unrelated tasks.',
    ],
    sections: [
      {
        id: 'five-seconds-with-a-chess-board',
        title: 'Five seconds with a chess board',
        paragraphs: [
          'In 1973 William Chase and Herbert Simon, building on earlier work by the Dutch psychologist Adriaan de Groot, showed chess positions for five seconds to a master, a strong club player and a beginner, then asked each to rebuild the position on an empty board. With positions taken from real games, the master recalled several times as many pieces as the beginner on the first attempt. With pieces scattered at random, the master’s advantage all but disappeared.',
          'Chase and Simon also looked at how the pieces came back. Players replaced them in bursts, with short pauses inside a group and longer pauses between groups. The groups were meaningful: pieces that defended one another, a familiar pawn structure, a standard arrangement around the king. The master’s groups were bigger. The better player was not holding more items in mind; each item simply carried more.',
          'That is the core idea of chunking. Working memory holds only a handful of items at once, and expertise makes each item richer. The study was small, with just three players, but the pattern has been confirmed many times since.',
        ],
        sourceIds: ['chase-simon-1973'],
      },
      {
        id: 'the-random-board-test',
        title: 'The random board test',
        paragraphs: [
          'Later work refined the random-board result. Fernand Gobet and Herbert Simon reviewed a series of chess experiments in 1996 and found that stronger players usually keep a small edge even with random positions, though it is much smaller than with positions from real games. Random boards still contain the odd familiar fragment by chance, and experts pick those out.',
          'Eye tracking shows the same advantage from another angle. Eyal Reingold, Neil Charness and colleagues found that expert players took in far more of a structured chess position in each glance than less-skilled players, but not when the position was random. In a simple task of spotting whether a king was in check, experts made fewer fixations and more often looked between pieces rather than at them, as if they were reading relationships rather than objects. The authors concluded that the advantage came from chess experience, not from better general eyesight or memory.',
          'The lesson for puzzlers is that pattern recognition is not a general talent you have or lack. It is built from exposure to the kinds of positions that recur in a particular game, and it helps exactly as far as a new board resembles the old ones.',
        ],
        sourceIds: ['gobet-simon-1996', 'reingold-2001'],
      },
      {
        id: 'how-chunks-form',
        title: 'How chunks form',
        paragraphs: [
          'In a 2001 review, Fernand Gobet and colleagues distinguish two routes to chunks. One is deliberate and goal-driven: you decide to treat three moves as a single manoeuvre, give it a name and use it on purpose. The other is automatic and perceptual: after enough exposure, certain arrangements simply start to look like one thing. Computational models of this second route learn chunks from experience and reproduce much of what is known about expert memory, in chess and in other areas such as language learning.',
          'Puzzle players use both. The deliberate kind sounds like “open the left lane” or “get the yellows out”: a named intention that stands for several slides. The perceptual kind is quieter. One day a brick parked across two exits just looks wrong, before you could say why.',
          'Chunks matter because of the limit they get around. Planning a long line of single moves overloads working memory quickly, which we look at in [why some boards feel impossible](/blog/working-memory-puzzle-difficulty). Planning in chunks lets a longer plan fit in the same space.',
        ],
        sourceIds: ['gobet-2001'],
      },
      {
        id: 'building-your-own-chunks',
        title: 'Building your own chunks',
        paragraphs: [
          'You cannot download chunks, but you can help them form. A few habits follow from how chunking seems to work.',
        ],
        bullets: [
          'Name situations that keep coming up. A name turns a vague impression into a unit you can recall: the traffic jam, the locked corner, the one-brick bottleneck.',
          'Look back after a clear. Glance at the finished board and ask which part you would recognise next time.',
          'Play similar boards close together, so patterns stand out through repetition.',
          'Mix board types once a pattern feels familiar, so you practise recognising which pattern applies.',
        ],
        note: 'Chunks have a cost as well. A strongly learned pattern can blind you to a board that only looks familiar, and breaking a chunk apart is one of the ways people get unstuck, as our piece on [the aha moment](/blog/aha-moment-insight-brain) explains. Good players hold their patterns firmly and let go of them when the board demands it.',
      },
      {
        id: 'what-chunking-gives-you',
        title: 'What chunking does and does not give you',
        paragraphs: [
          'It is tempting to think that the pattern-reading skill of a chess master or an expert puzzler must make them better thinkers in general. The evidence says otherwise. In 2017 Giovanni Sala and Fernand Gobet reviewed chess and music instruction for children, alongside working memory training. The better controlled a study was, the smaller its effects on broader cognitive and academic skills, and they concluded that far transfer of learning rarely occurs.',
          'That is not a disappointing result for anyone who simply enjoys puzzles. Getting better at a game you like is a real pleasure, and the chunks you build are a genuine kind of knowledge. It is just knowledge about the game. We looked at the wider question in [are puzzle games good for your brain?](/blog/are-puzzle-games-good-for-your-brain)',
          'OutBrick’s boards are a good place to watch chunks form, because the mechanic stays constant while the arrangements change: a brick always glides until something stops it, and always leaves through the gate of its own colour. Play a few [daily boards](/daily) on successive days and notice which arrangements start to look like one thing. That noticing is a chunk forming.',
        ],
        sourceIds: ['sala-gobet-2017'],
      },
    ],
    references: [r.chaseSimon, r.gobetSimon, r.reingold, r.gobet2001, r.salaGobet],
    relatedSlugs: ['working-memory-puzzle-difficulty', 'deliberate-practice-for-puzzle-games', 'are-puzzle-games-good-for-your-brain'],
    pullQuote: 'The better player was not holding more items in mind; each item simply carried more.',
    faqs: [
      { question: 'What is chunking in psychology?', answer: 'Chunking is grouping several pieces of information into one meaningful unit, such as a familiar arrangement of chess pieces or a named sequence of moves. Because working memory holds only a few items, bigger chunks let you keep more in mind at once.' },
      { question: 'How do chess masters remember whole boards?', answer: 'They recognise familiar groups of pieces rather than individual pieces. In classic experiments, masters recalled far more than beginners from positions in real games, but their advantage was much smaller for random positions.' },
      { question: 'How can I get better at spotting patterns in puzzles?', answer: 'Name situations that recur, look back at boards after you clear them, and play similar boards close together so patterns stand out. Later, mix board types so you practise recognising which pattern applies.' },
      { question: 'Does pattern recognition in games make you smarter in general?', answer: 'The evidence says no. Reviews of chess, music and working memory training found that the better controlled the study, the smaller the effect on broader thinking skills.' },
    ],
  },

  // 4 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'stuck-on-a-puzzle-incubation-effect',
    title: 'Stuck on a puzzle? The science of stepping away',
    dek: 'Why an unsolved puzzle often cracks after a break, what a meta-analysis of incubation studies found, and how to take the kind of break that helps.',
    category: 'Learning through play',
    categoryColor: 'gold',
    ...common,
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/stuck-on-a-puzzle-incubation-effect.webp',
    imageAlt: 'Vio in headphones and Sprout beside an iPhone showing the OutBrick shop, with a few yellow and blue bricks floating on an indigo grid',
    tags: ['incubation effect', 'problem solving', 'puzzle tips', 'insight', 'cognitive psychology'],
    intro: 'Almost everyone who does puzzles has had this happen. You stare at a board until it seems to have no solution, give up, make a cup of tea and come back to find the answer sitting in plain view. Psychologists call the break an incubation period, and the improvement that sometimes follows it an incubation effect. It is one of the oldest ideas in the psychology of problem solving, and the modern evidence says it is real, though smaller and more conditional than the stories suggest.',
    keyTakeaways: [
      'A meta-analysis of incubation studies found a real, positive effect of setting a problem aside, and a larger one when people had worked on the problem longer first.',
      'Breaks seem to help partly by letting a misleading idea fade, so they matter most when you are stuck in a rut.',
      'A light, undemanding activity during the break tended to beat hard mental work, and for some problems it beat rest.',
    ],
    sections: [
      {
        id: 'what-the-evidence-says',
        title: 'What the evidence says',
        paragraphs: [
          'The most thorough summary is a 2009 meta-analysis by Ut Na Sio and Thomas Ormerod, who pooled experiments comparing people who kept working on a problem with people who set it aside for a while before trying again. Overall, they found a positive incubation effect. It was not uniform. Creative, open-ended tasks, such as thinking of new uses for a brick, benefited more than insight puzzles based on words or pictures.',
          'Three details are especially useful. Longer preparation before the break gave a larger effect: incubation works on a problem you have properly engaged with, not one you glanced at. Filling the break with a demanding task shrank the effect. And for word-based insight problems, a light task during the break did better than rest.',
          'It is worth being honest about the fit with puzzle games. The visual problems in these studies are not the same as a sliding-block board, and visual insight problems benefited less than open-ended ones. The effect is real, but nobody has measured it on colour sort puzzles, and it would be wrong to promise that a break will always crack a board.',
        ],
        sourceIds: ['sio-ormerod-2009'],
      },
      {
        id: 'letting-the-wrong-idea-fade',
        title: 'Why a break helps: letting the wrong idea fade',
        paragraphs: [
          'One explanation is almost mechanical. Steven Smith and Steven Blankenship gave people word puzzles alongside misleading hints designed to send them down the wrong path. The hints worked: people became fixated and solved fewer problems. When the fixated problems were retried after a delay, people improved more than when they retried straight away. In their experiments, the incubation effect appeared only when fixation had been induced first.',
          'That fits the experience of being stuck on a board. After a few minutes you are no longer looking at the puzzle; you are looking at your own plan for it. It is the lane you are sure must open first, the brick you are sure must leave last. A break lets that plan lose its grip, and when you return you see the board a little more as it is. It is also why a friend glancing at your board can sometimes spot the move at once: they never built your plan, so it cannot mislead them.',
          'Other researchers argue that the mind also keeps working on the problem below awareness. Ken Gilhooly’s 2016 review sets out the case for this kind of unconscious work, drawing on studies in which the break begins immediately after a problem is presented. The two accounts are not exclusive, and for a puzzler the practical advice is the same.',
        ],
        sourceIds: ['smith-blankenship-1991', 'gilhooly-2016'],
      },
      {
        id: 'the-right-kind-of-break',
        title: 'The right kind of break',
        paragraphs: [
          'What you do during the break seems to matter. Benjamin Baird, Jonathan Schooler and colleagues gave people a creative task, then a break of one of several kinds: a demanding task, an undemanding task that let the mind wander, rest, or no break at all. Only the undemanding task produced a substantial improvement on problems people had already seen, and the people in that group reported more mind wandering. It is a single study with a creative task, but it matches the meta-analysis.',
          'Sleep may play a similar part on a longer timescale. Ullrich Wagner, Jan Born and colleagues trained people on a number task with a hidden shortcut. After a night’s sleep, more than twice as many people discovered the shortcut as after the same time awake. Sleep did not help people who had not first practised the task. That finding is about discovering a hidden rule rather than about puzzles in general, but it echoes the rest of the research: preparation first, then time away.',
        ],
        bullets: [
          'Work the board properly before stepping away; incubation needs something to incubate.',
          'Choose something light, such as washing up or a short walk, rather than another demanding mental task.',
          'Before you leave, say what you think the board needs, so you know which plan you are letting go of.',
          'Come back and read the board fresh, with a [reading routine](/blog/how-to-read-a-puzzle-before-moving) rather than your old plan.',
        ],
        sourceIds: ['baird-2012', 'wagner-2004'],
      },
      {
        id: 'knowing-when-to-step-away',
        title: 'Knowing when to step away',
        paragraphs: [
          'The signs that you are fixated rather than making progress are easy to spot once you know them. You keep making the same opening move. You undo back to the same position. You can no longer say what your next few moves are for. That is the moment to stop, because pressing on usually deepens the rut.',
          'Coming back is a skill too. The temptation on your return is to pick up exactly where you left off, replaying the same opening in your head. Resist it. Start from the goal as if the board were new, and deliberately try the move you were most sure was wrong. If fixation was the problem, the answer is often hiding in the part of the board you had stopped looking at.',
          'Stepping away is easier when the game does not punish you for it. Nothing on an OutBrick board is timed; the limit on each board counts moves, not seconds, so you can put the phone down and think without anything counting down. The [daily board](/daily) stays the same all day, which makes it a natural candidate for a second look after lunch.',
          'A break is also a good moment to notice whether you want to come back at all. Some evenings a puzzle is the right thing and some evenings it is not; our piece on [when to play and when to put the phone down](/blog/when-to-play-and-when-to-pause) looks at that side of it. And when the answer does arrive suddenly after a break, it tends to feel like a flash of insight, a strange experience of its own that we explore in [the aha moment](/blog/aha-moment-insight-brain).',
        ],
      },
    ],
    references: [r.sio, r.smithBlankenship, r.gilhooly, r.baird, r.wagner],
    relatedSlugs: ['aha-moment-insight-brain', 'when-to-play-and-when-to-pause', 'why-two-minute-puzzles-feel-good'],
    pullQuote: 'After a few minutes you are no longer looking at the puzzle; you are looking at your own plan for it.',
    faqs: [
      { question: 'Does taking a break help you solve puzzles?', answer: 'Often, yes. A meta-analysis of incubation studies found a positive effect of setting a problem aside, especially after a good spell of work on it, although visual puzzles benefited less than open-ended creative tasks.' },
      { question: 'What should I do during a break from a hard puzzle?', answer: 'Something light that lets your mind wander, such as a walk or a simple chore. In studies, undemanding activities tended to help more than demanding mental tasks, and for some problems more than rest.' },
      { question: 'Why do I see the answer as soon as I come back?', answer: 'One reason is that a break lets a misleading idea lose its hold. Experiments that deliberately sent people down the wrong path found that retrying after a delay helped more than retrying immediately.' },
      { question: 'How long should I step away from a puzzle?', answer: 'There is no proven ideal length. Studies have used breaks ranging from minutes to a night’s sleep; what matters most is having worked on the problem first and filling the break with something undemanding.' },
    ],
  },

  // 5 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'how-to-get-three-stars-puzzle-games',
    title: 'How to get three stars in puzzle games: think in fewer moves',
    dek: 'Three stars means solving well, not just solving. Satisficing, planning depth and the habits that cut wasted moves, with OutBrick’s star rules explained.',
    category: 'OutBrick practice',
    categoryColor: 'green',
    ...common,
    readingTime: '6 min read',
    authorId: 'mourad-hamdi',
    image: '/blog/how-to-get-three-stars-puzzle-games.webp',
    imageAlt: 'Bricko and Sprout either side of an iPhone showing the Autumn Orchard stretch of the OutBrick Journey map',
    tags: ['move targets', 'puzzle tips', 'planning', 'sliding puzzle strategy', 'problem solving'],
    intro: 'Clearing a board and clearing it well are different skills. The first asks whether you can find a solution. The second asks whether you can find a good one inside a budget of moves, and that draws on a different kind of thinking. I design boards for OutBrick, where the third star asks for a clear inside the move target without any undo, so I spend a lot of time watching the gap between a clear and a clean clear. Here is what the psychology of planning says about closing it.',
    keyTakeaways: [
      'Most of the time people satisfice, taking the first solution that works; three stars asks you to optimise, and that needs deliberate planning.',
      'Planning before moving leads to better solutions, and in one set of experiments the benefit lasted after people were no longer told to plan.',
      'Stronger players look further ahead, but everyone prunes their options; the skill is pruning the right branches.',
    ],
    sections: [
      {
        id: 'good-enough-versus-best',
        title: 'Good enough versus best',
        paragraphs: [
          'In 1956 Herbert Simon argued that real minds rarely look for the best option. They look for one that is good enough and stop there, a strategy he called satisficing. Given limited time and attention, it is usually the rational thing to do. A shopper does not compare every loaf in the shop, and a puzzler does not usually compare every route to a clear.',
          'A move target changes the question. It turns a satisficing problem, find any clear, into an optimising one, find a clear inside a budget. The instinct that serves you well on a first attempt is to take the first move that makes progress. That same instinct is what costs moves when you are chasing a target.',
          'It is worth knowing which mode you are in and choosing it on purpose. Barry Schwartz and colleagues found that people who habitually try to get the best out of every choice reported lower happiness and more regret than people who settle for good enough. That research was about everyday decisions, not puzzles, but the lesson travels: optimise on the boards where you want to, and let the rest simply be a clear.',
        ],
        sourceIds: ['simon-1956', 'schwartz-2002'],
      },
      {
        id: 'planning-first-pays-twice',
        title: 'Planning first pays twice',
        paragraphs: [
          'Peter Delaney, Anders Ericsson and Mary Knowles studied water jug problems, a classic puzzle in which people normally dive in and start pouring without much planning. When people were told to plan a full solution first, they solved the problems differently and learned more. The striking result was what happened next: people who had practised planning went on producing better solutions even after they were no longer required to plan, while the comparison group improved little.',
          'That is the case for playing some boards slowly. A board solved with a plan teaches you more than one solved by trial and error, and the habit of planning seems to stick. The first few seconds of reading a board, covered in [how to read a puzzle before the first move](/blog/how-to-read-a-puzzle-before-moving), are where most saved moves come from.',
          'In practice, planning for a target means counting. Before a run of moves, estimate what it will cost and compare that with what remains under the target. If the plan needs more moves than you have, it is the wrong plan, and it is far cheaper to find that out before the first slide than after the fifth.',
        ],
        sourceIds: ['delaney-2004'],
      },
      {
        id: 'how-far-ahead-good-players-look',
        title: 'How far ahead do good players look?',
        paragraphs: [
          'For decades researchers argued about whether experts plan further ahead or simply recognise better moves. In 2023 Bas van Opheusden, Wei Ji Ma and colleagues tackled the question with a variant of four-in-a-row, a game complex enough to reward deep planning, using both lab players and a large set of games played on mobile. Fitting a model of heuristic search to people’s moves, they found robust evidence that planning depth increases with expertise.',
          'Depth is not free, though. Every extra move you look ahead multiplies the branches to consider, and people cope by pruning. Quentin Huys and colleagues found that people planning a sequence of choices tended to stop evaluating a branch as soon as it hit a large loss, even when that branch would have paid off later. The shortcut is usually sensible and occasionally expensive.',
          'On a puzzle board, the equivalent is dismissing a move because its first step looks bad: sliding a brick away from its gate, say, or filling a lane you will need later. Some of the best moves on a tight board look exactly like that. When you cannot find a route inside the target, go back to the moves you rejected on sight and follow them two steps further.',
        ],
        sourceIds: ['van-opheusden-2023', 'huys-2012'],
      },
      {
        id: 'where-moves-go-missing',
        title: 'Where moves go missing',
        paragraphs: [
          'When I test boards, the same few leaks account for most of the gap between a clear and a clean clear.',
        ],
        bullets: [
          'Two short slides where one long one would do. When bricks glide until something stops them, one slide can often do the work of two.',
          'Parking a brick in a lane you will need, then having to move it again.',
          'Clearing the easy colour first instead of the one whose exit frees the most.',
          'Repairing a mistake with three new moves when one reread would have prevented it.',
        ],
        note: 'Each leak is a satisficing move: it makes progress now and costs later. The fix is the same for all of them: ask what a move closes off as well as what it opens. Our [colour sort puzzle tips](/blog/colour-sort-puzzle-tips) go through these patterns one by one.',
      },
      {
        id: 'outbrick-three-stars',
        title: 'How OutBrick’s three stars work',
        paragraphs: [
          'On every OutBrick board, one star is a clear, two stars is a clear inside the move target, and three stars is a clear inside the target with no undo. The target and the move limit are printed from the first tap, and there is never a clock, so the planning time is yours. The target is the solver’s own count for the board and the benchmark for two and three stars. The limit, drawn as a rope, is the ceiling for the attempt. The gap between them is yours to spend while you learn the board, and when moves run low you are offered five more before the attempt ends.',
          'That design separates the two modes. The first undo on every board is free, so when you want the clear you can explore as much as you like; [why undo makes you a better solver](/blog/why-undo-makes-you-a-better-puzzle-solver) explains why that is worth doing. Three stars asks you to do the exploring in your head instead. On a new board that is genuinely hard, it is fine to settle for the clear. The planning habit will pay off on the next one.',
          'To practise the planning side, try the [browser board](/play) with a rule of your own: no move until you can say where the next three will leave every brick you touch.',
        ],
      },
    ],
    references: [r.simon1956, r.schwartz, r.delaney, r.vanOpheusden, r.huys],
    relatedSlugs: ['colour-sort-puzzle-tips', 'how-to-read-a-puzzle-before-moving', 'why-undo-makes-you-a-better-puzzle-solver'],
    pullQuote: 'Each leak is a satisficing move: it makes progress now and costs later.',
    faqs: [
      { question: 'How do you get three stars in OutBrick?', answer: 'Clear the board inside the move target without using undo. One star is any clear, and two stars is a clear inside the target.' },
      { question: 'How can I solve puzzles in fewer moves?', answer: 'Plan before you move, prefer one long slide to two short ones, and ask what each move closes off as well as what it opens. Most wasted moves come from taking the first move that makes progress.' },
      { question: 'What is satisficing?', answer: 'Satisficing, a term coined by Herbert Simon, means choosing the first option that is good enough rather than searching for the best one. It is usually sensible, but a move target asks you to optimise instead.' },
      { question: 'Do better players plan more moves ahead?', answer: 'Yes, according to a 2023 study of a complex board game, which found robust evidence that planning depth increases with expertise in both lab and large-scale mobile data.' },
    ],
  },

  // 6 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'can-puzzle-games-improve-spatial-skills',
    title: 'Can puzzle games improve spatial skills? What studies show',
    dek: 'Spatial skills can be trained, but games are a narrower route than often claimed. What the meta-analyses say about spatial training, Tetris and transfer.',
    category: 'Learning through play',
    categoryColor: 'gold',
    ...common,
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/can-puzzle-games-improve-spatial-skills.webp',
    imageAlt: 'Bricko and a winking Zippy beside an iPhone showing Button Factory on the OutBrick Journey map, with bricks floating overhead',
    tags: ['spatial skills', 'puzzle games research', 'brain training', 'Tetris', 'research'],
    intro: 'Spatial thinking, the ability to picture objects, turn them in your head and reason about where things fit, matters well beyond puzzles. It predicts success in science, engineering and mathematics, and for a long time it was treated as something you either had or did not. Research over the past few decades has changed that picture: spatial skills respond to practice. Whether puzzle games are a good way to get that practice is a more careful question, and the honest answer comes in two halves.',
    keyTakeaways: [
      'A meta-analysis of 217 training studies found that spatial skills can be improved, with gains that lasted and carried over to other spatial tasks.',
      'Evidence for video games specifically is mixed: some studies show transfer to other spatial tests, while others find the gains stay close to the game.',
      'Claims that games raise general cognitive ability are not supported by the largest recent meta-analyses.',
    ],
    sections: [
      {
        id: 'spatial-skills-can-be-trained',
        title: 'Spatial skills can be trained',
        paragraphs: [
          'The landmark study is a 2013 meta-analysis by David Uttal, Nora Newcombe and colleagues, who pooled 217 studies of spatial training, from school courses and video games to repeated practice on spatial tests. On average, training improved spatial performance by nearly half a standard deviation compared with control groups, a moderate effect. The gains did not fade with longer delays between training and testing, and they carried over to spatial tasks that had not been trained directly.',
          'The authors also sorted spatial skills along two dimensions: whether a task concerns a single object or the relations between several, and whether things stay still or move. That kind of map is useful for asking which spatial skill a particular game actually exercises, since practice on one kind of task is not guaranteed to help another.',
          'That mattered because spatial ability strongly predicts who enters and succeeds in science, technology, engineering and mathematics. If it can be trained, it is not a fixed gate, and the authors argued that spatially rich education could pay real dividends.',
          'Notice what the finding covers. Spatial training improved spatial skills. It did not claim to improve memory, attention or intelligence in general, and the transfer it found was to other spatial tasks, not to everything.',
        ],
        sourceIds: ['uttal-2013'],
      },
      {
        id: 'what-tetris-taught-researchers',
        title: 'What Tetris taught researchers',
        paragraphs: [
          'Tetris has been a favourite test case for decades, and the results point in both directions, which is informative in itself. Melissa Terlecki, Nora Newcombe and Michelle Little had university students either take a mental rotation test repeatedly or play Tetris over a period of weeks. Both groups improved a great deal, and the gains held several months later. Tetris players improved faster at first, and their gains transferred to other spatial tasks more than repeated testing did, an advantage that was still there months later.',
          'Valerie Sims and Richard Mayer found something more sobering. Skilled Tetris players were better than non-players at mentally rotating shapes that looked like Tetris pieces, but not on other spatial tests. When non-players were given 12 hours of Tetris practice, they gained no more on spatial tests than a matched control group. The authors concluded that spatial expertise from the game was highly specific to the game.',
          'Both findings can be true. The studies used different amounts of play, different tests and different people. What they agree on is that the closer a test is to the game, the more likely a gain is to show up.',
        ],
        sourceIds: ['terlecki-2008', 'sims-mayer-2002'],
      },
      {
        id: 'why-far-transfer-is-the-sticking-point',
        title: 'Why far transfer is the sticking point',
        paragraphs: [
          'The widest look at games and thinking is a 2018 set of meta-analyses by Giovanni Sala, K. Semir Tatlidil and Fernand Gobet, covering several hundred comparisons. They asked whether skill at video games correlates with cognitive ability, whether players differ from non-players, and whether training on games improves cognitive ability. They found small or null effects in all three, and no evidence that playing video games causes better cognitive ability.',
          'That does not contradict the spatial training research so much as mark its edge. Practising a spatial task can make you better at spatial tasks like it. The hope that a game will make you broadly sharper is the part that keeps failing careful tests, a pattern we traced in [are puzzle games good for your brain?](/blog/are-puzzle-games-good-for-your-brain)',
        ],
        sourceIds: ['sala-2018'],
      },
      {
        id: 'children-and-puzzle-play',
        title: 'Children, puzzles and early spatial play',
        paragraphs: [
          'Some of the most interesting evidence comes from early childhood. Susan Levine and colleagues visited 53 families at home every four months while the children were between two and four years old. Children who were seen playing with jigsaw puzzles did better on a task involving mentally moving and rotating shapes at four and a half, even after accounting for parents’ education, income and how much they talked. Among children who played with puzzles, more frequent play predicted better scores.',
          'The study is observational, so it cannot show that the puzzles caused the difference; families who do puzzles may differ in other ways. The researchers also found that the quality of puzzle play, including how hard the puzzles were and how much parents talked about shape and space, was higher for boys than for girls. It is a promising lead, not a prescription.',
        ],
        sourceIds: ['levine-2012'],
      },
      {
        id: 'what-this-means-for-players',
        title: 'What this means if you play puzzles',
        paragraphs: [
          'Put together, the evidence supports a modest, honest claim. Moving and turning shapes in your head is a skill, and puzzles that ask for it give you practice at it. You will get better at the puzzle, and you may get better at spatial tasks that resemble it. Anyone promising more than that is ahead of the research.',
          'Sliding-block puzzles like OutBrick lean on a particular spatial skill: predicting where a piece will end up when it glides until something stops it, and how that changes the space around it. That is closer to reasoning about paths and obstacles than to rotating shapes, and we know of no study that has tested whether it transfers. We make no such claim for the game. It is a pleasant way to exercise the skill the game itself teaches, and that is enough.',
          'If spatial skill itself is what you are after, the training studies suggest looking for tasks that directly ask you to rotate, fold or navigate, at a level that stretches you. A puzzle game can be part of that mix. It is unlikely to be all of it.',
          'To see which spatial habits a sliding board asks for, try the [browser board](/play). Our piece on [chunking](/blog/chunking-how-expert-puzzlers-see-patterns) explains how those habits turn into patterns you read at a glance, and [games like Tetris](/blog/games-like-tetris) looks at what keeps spatial-fitting games interesting.',
        ],
      },
    ],
    references: [r.uttal, r.terlecki, r.simsMayer, r.sala2018, r.levine],
    relatedSlugs: ['are-puzzle-games-good-for-your-brain', 'games-like-tetris', 'chunking-how-expert-puzzlers-see-patterns'],
    pullQuote: 'Anyone promising more than that is ahead of the research.',
    faqs: [
      { question: 'Do puzzle games improve spatial skills?', answer: 'They can improve the spatial skills the game itself uses, and some studies show gains on related spatial tests. Evidence that games improve broader cognitive ability is weak.' },
      { question: 'Does playing Tetris improve mental rotation?', answer: 'Studies disagree. One found that Tetris training improved mental rotation with lasting transfer to other spatial tasks; another found skilled players were better only with Tetris-like shapes, and that 12 hours of play gave no extra gain.' },
      { question: 'Can spatial ability be trained?', answer: 'Yes. A meta-analysis of 217 studies found that spatial training improves spatial skills by a moderate amount, with gains that last and extend to spatial tasks that were not trained.' },
      { question: 'Are jigsaw puzzles good for children’s spatial skills?', answer: 'In one study, children who played with puzzles at home did better on a later spatial task. The study was observational, so it cannot prove that the puzzles caused the difference.' },
    ],
  },

  // 7 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'working-memory-puzzle-difficulty',
    title: 'Working memory: why some puzzle boards feel impossible',
    dek: 'A hard board is often a memory problem in disguise. How working memory and cognitive load shape puzzle difficulty, and practical ways to lighten the load.',
    category: 'Learning through play',
    categoryColor: 'gold',
    ...common,
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/working-memory-puzzle-difficulty.webp',
    imageAlt: 'Vio in headphones and Flurry in a knitted hat beside an iPhone showing Bamboo Springs on the OutBrick Journey map',
    tags: ['working memory', 'cognitive load', 'puzzles and memory', 'problem solving', 'puzzle tips'],
    intro: 'Some puzzle boards are hard because the solution is long or well hidden. Others are hard for a less obvious reason: they ask you to hold more in mind at once than a mind comfortably can. From the inside the two feel alike, a creeping sense that the board makes no sense, but they call for different responses. Understanding the second kind starts with working memory, the small mental workspace where we juggle whatever we are thinking about right now.',
    keyTakeaways: [
      'Working memory holds only a few chunks at once; a widely cited review puts the figure at around four.',
      'Constantly comparing where you are with where you want to be uses a lot of that capacity, leaving little for learning from the board.',
      'You can lighten the load by planning in chunks, planning only a short way ahead and letting the board hold information for you.',
    ],
    sections: [
      {
        id: 'a-small-workspace',
        title: 'A small workspace',
        paragraphs: [
          'For decades the textbook figure for short-term memory was seven items, plus or minus two. In a 2001 review, Nelson Cowan argued that once you stop people rehearsing or grouping items, the real capacity is nearer three to five chunks, with four as a reasonable central estimate. Everything you are actively juggling while solving a puzzle has to fit in that space: the current position, the goal, the move you are considering and what it would block.',
          'Four is not much. It is why a plan of ten single moves falls apart halfway through, and why you can spot a clever three-move sequence, glance away for a moment and lose it entirely. Most people have met this limit on a puzzle board without having a name for it.',
          'The workspace is not a fixed size from moment to moment, either. Tiredness, distraction and worry all compete for it, which is one reason a board that felt impossible at the end of a long day can look straightforward the next morning. If a board suddenly feels much harder than the one before, it is worth asking whether the board changed or you did.',
        ],
        sourceIds: ['cowan-2001'],
      },
      {
        id: 'when-solving-crowds-out-learning',
        title: 'Cognitive load: when solving crowds out learning',
        paragraphs: [
          'John Sweller’s cognitive load theory grew out of problem-solving research. In a 1988 paper he argued that means–ends analysis, the strategy of constantly comparing where you are with where you want to be and picking moves that shrink the difference, takes up a great deal of working memory. That leaves little capacity for noticing the patterns that would make the next problem easier. People could solve problems this way and still learn surprisingly little from them.',
          'Three decades of later work, summarised by Sweller, Jeroen van Merriënboer and Fred Paas in 2019, built a theory of instruction around the same limit. Its central claim is simple: new information has to pass through a working memory that is limited in both capacity and duration, while knowledge already stored in long-term memory escapes those limits. Experience makes hard problems easier largely by moving what you know out of the small workspace and into the large store.',
          'For a puzzler, this explains a familiar frustration. On a board at the very edge of your ability, all your capacity goes into finding moves, and you may clear it without being sure how. On a board just inside your limit, you have spare capacity to notice why the solution worked, and that is when you learn.',
        ],
        sourceIds: ['sweller-1988', 'sweller-2019'],
      },
      {
        id: 'how-far-ahead-can-you-plan',
        title: 'How far ahead can you plan?',
        paragraphs: [
          'Louise Phillips, Ken Gilhooly and colleagues tested mental planning directly with the Tower of London, a disc-moving puzzle widely used to study planning. Most people could accurately plan up to two subgoals ahead, but not three. In another experiment, people told to make a complete mental plan before moving spent much longer planning than people given no instruction, yet carried out their solutions no more efficiently.',
          'That is a useful, humbling number. Two subgoals, each a short run of moves, is about as far as most people can reliably see on a puzzle of that kind, and trying to plan further often wastes effort. Plan to the next point where the board changes character, play it, and look again.',
        ],
        sourceIds: ['phillips-2001'],
      },
      {
        id: 'lightening-the-load',
        title: 'Lightening the load',
        paragraphs: [
          'You cannot enlarge working memory by wishing, but you can spend it better. The most powerful tool is chunking: treating several moves as one intention, such as “clear the right lane”, so a longer plan fits in the same space. Our piece on [how expert puzzlers see patterns](/blog/chunking-how-expert-puzzlers-see-patterns) explains how chunks form.',
          'The second tool is to let the world hold information for you. Evan Risko and Sam Gilbert reviewed research on cognitive offloading: using physical actions or outside aids, such as notes, reminders or tilting your head to read rotated text, to reduce the demands on internal thinking. People offload more when a task is demanding and when they doubt their own memory. On a puzzle board, the board itself is the external memory. Tracing a path with your finger, or making a probing move and taking it back, frees a slot in your head.',
        ],
        bullets: [
          'Plan in named chunks of two to four moves, not in single moves.',
          'Plan no more than two chunks ahead, then reread the board.',
          'Use the board as memory: point, trace or probe instead of simulating everything in your head.',
          'Shrink the goal: aim to free one colour at a time rather than solve the whole board at once.',
        ],
        sourceIds: ['risko-gilbert-2016'],
      },
      {
        id: 'keeping-the-load-on-the-puzzle',
        title: 'How OutBrick keeps the load on the puzzle',
        paragraphs: [
          'A good puzzle should spend your working memory on the puzzle, not on bookkeeping. OutBrick tries to keep that incidental load low. Every brick shows its colour and, with colour-blind mode on by default, a matching glyph, so you are not spending a memory slot on which similar shade is which; the case for that is in [why colour should never be the only clue in a puzzle](/blog/color-shape-accessibility). The gates enforce the colour rule themselves, the target and move limit stay on screen, and nothing is timed, so you are never holding a plan while watching a clock.',
          'What remains is the hard part you came for: the positions, the blockers, the order. When a board feels impossible, ask which kind of difficulty you are facing. If it is a search problem, keep reading the board. If it is a memory problem, and you notice yourself losing plans halfway, shrink the plan. The [accessibility page](/accessibility) lists other ways the game can fit how you play, and the [browser board](/play) is a quick place to practise planning in chunks.',
        ],
      },
    ],
    references: [r.cowan, r.sweller1988, r.sweller2019, r.phillips, r.risko],
    relatedSlugs: ['chunking-how-expert-puzzlers-see-patterns', 'how-to-solve-sliding-block-puzzles', 'color-shape-accessibility'],
    pullQuote: 'On a puzzle board, the board itself is the external memory.',
    faqs: [
      { question: 'How many things can working memory hold?', answer: 'Estimates vary, but a widely cited review puts it at around four chunks for adults when rehearsal and grouping are prevented. Grouping items into larger, meaningful chunks lets you hold more.' },
      { question: 'Why do some puzzles feel impossible even though they are solvable?', answer: 'Often because they demand holding more in mind at once than working memory allows. Planning in chunks, using the board as an external memory and working towards one small goal at a time can make them manageable.' },
      { question: 'How many moves ahead can people plan?', answer: 'In one study with the Tower of London puzzle, most people could plan accurately up to two subgoals ahead but not three. Planning in short stretches and then rereading the board is usually more effective.' },
      { question: 'What is cognitive load theory?', answer: 'Cognitive load theory, developed by John Sweller, holds that new information must pass through a limited working memory, so tasks and teaching should avoid wasting that capacity. It began with research showing that some problem-solving strategies use so much capacity that little is left for learning.' },
    ],
  },

  // 8 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'deliberate-practice-for-puzzle-games',
    title: 'Deliberate practice for casual players: what actually helps',
    dek: 'Practice matters, but less than the 10,000-hour story claims. What studies of deliberate practice and online game players suggest for getting better at puzzles.',
    category: 'OutBrick practice',
    categoryColor: 'green',
    ...common,
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/deliberate-practice-for-puzzle-games.webp',
    imageAlt: 'Poppy with her wand and Moss in his tool belt beside an iPhone showing Cherry Blossom Town on the OutBrick Journey map',
    tags: ['deliberate practice', 'expertise', 'puzzle tips', 'how to solve puzzles', 'research'],
    intro: 'You do not need to become a grandmaster to want to get better at something. Most people who play puzzles for a few minutes a day would still like to clear harder boards, waste fewer moves and feel stuck less often. The science of expertise has a lot to say about improvement, much of it built around the idea of deliberate practice. It also has a lively argument about how far that idea goes. Here is what holds up, and how it translates for a casual player with a phone and ten spare minutes.',
    keyTakeaways: [
      'Deliberate practice, focused effort on specific weaknesses with feedback, helps, but a major meta-analysis found it explained about a quarter of the differences in performance in games, not all of them.',
      'A study of more than 850,000 online game players linked spacing practice out, and exploring early, to better later performance.',
      'For casual players the useful ingredients are small: one clear aim, honest feedback, a moment of reflection and time between sessions.',
    ],
    sections: [
      {
        id: 'what-deliberate-practice-means',
        title: 'What deliberate practice means',
        paragraphs: [
          'In 1993 Anders Ericsson, Ralf Krampe and Clemens Tesch-Römer published a study of violinists at a music academy in Berlin. The students judged most accomplished had, by their own estimates, accumulated far more hours of solitary practice than those judged less accomplished. The authors proposed that expert performance is mainly the result of deliberate practice: effortful activity designed specifically to improve, usually guided by a teacher, focused on weaknesses and sustained over many years.',
          'The distinction that matters for everyone is between practice and play. Deliberate practice is not simply doing the activity a lot. It is working on the parts you are bad at, on purpose, and checking whether you got better. A pianist playing favourite pieces is enjoying the piano. A pianist playing the same four bars slowly until the fingering is right is practising.',
        ],
        sourceIds: ['ericsson-1993'],
      },
      {
        id: 'how-much-practice-explains',
        title: 'How much does practice explain?',
        paragraphs: [
          'The idea became popular as the “10,000-hour rule”, which its authors never proposed as a rule. Researchers then set out to measure how much of the difference between people practice actually accounts for. In 2014 Brooke Macnamara, David Hambrick and Frederick Oswald pooled studies across domains. Deliberate practice explained about 26 per cent of the variance in performance in games, 21 per cent in music, 18 per cent in sports, 4 per cent in education and less than 1 per cent in professions. Their conclusion: practice is important, but not as important as had been argued.',
          'In 2019 Macnamara and Megha Maitra repeated the original violin study with a double-blind design. They did not replicate its core finding that accumulated practice separated each skill level. The link between practice and skill was still substantial, just considerably smaller than in 1993.',
          'Chess, a close cousin of puzzles, is where practice looks strongest. In two large samples of tournament players, Neil Charness and colleagues found that serious study alone was the best predictor of rating among the activities they measured, and that chess activities together accounted for about 40 per cent of the variance in skill. Grandmasters reported around 5,000 hours of serious solo study in their first ten years of play, nearly five times the figure for intermediate players. Practice matters a great deal in games; it is just not the whole story.',
        ],
        note: 'Most of these figures rest on people’s own estimates of past practice, which are hard to make accurately. Part of the disagreement between researchers is about definitions: what counts as deliberate practice changes how much it appears to explain.',
        sourceIds: ['macnamara-2014', 'macnamara-maitra-2019', 'charness-2005'],
      },
      {
        id: 'lessons-from-online-players',
        title: 'Lessons from 854,064 game players',
        paragraphs: [
          'Most practice research relies on people remembering how much they practised. Tom Stafford and Michael Dewar found a way around that, using records from 854,064 players of Axon, a simple online game that demands rapid perception and decisions. With every play logged, they could link practice history directly to performance.',
          'Two findings are useful to anyone. First, spacing mattered: players who spread their practice over a longer period reached higher scores than those who packed the same amount together, confirming outside the lab what experiments had long shown. Second, players whose early scores varied more went on to perform better later. The authors linked this to the trade-off between exploring and exploiting: trying different approaches early seems to pay off, even if it costs some points at the time.',
          'Axon is a fast reaction game, not a puzzle, so the details may not carry over. But both findings fit what is known about learning, and both are easy to act on.',
        ],
        sourceIds: ['stafford-dewar-2014'],
      },
      {
        id: 'a-ten-minute-practice-plan',
        title: 'A practice plan for ten minutes a day',
        paragraphs: [
          'Nobody needs a coach to get better at puzzles, but the ingredients of deliberate practice scale down well.',
        ],
        bullets: [
          'Pick one weakness per session: wasted moves at the start, say, or losing track of a plan halfway through.',
          'Use honest feedback. A move target is feedback, and so is noticing where you reached for undo.',
          'Spend thirty seconds after a hard clear asking what you would do differently next time.',
          'Space it out. Several short sessions across a week beat one long one.',
          'Explore early. On a new kind of board, try different openings before settling on one.',
          'Stay within reach. Boards slightly beyond your comfort teach more than boards far beyond it.',
        ],
        note: 'The fourth point is where casual players already have an advantage: a few minutes a day is exactly the spaced practice the research favours. The [daily board](/daily) gives everyone the same puzzle each day, a natural fixed point for it. And when you get stuck, [stepping away](/blog/stuck-on-a-puzzle-incubation-effect) is part of the plan, not a failure of it.',
      },
      {
        id: 'keep-it-play',
        title: 'Keep it play',
        paragraphs: [
          'There is a risk in all this. Deliberate practice, as Ericsson and colleagues defined it, is not inherently enjoyable; it is work. A puzzle game turned into a training regime can stop being the thing you loved. Most casual players are better served by a light version: enjoy most boards, and practise on a few.',
          'That is roughly how OutBrick is meant to be played. Its 2,000 boards are spread across 100 chapters, a shape of challenge we discussed in [how to build a kinder difficulty curve](/blog/kinder-difficulty-curve). The move target and stars give feedback if you want it and stay out of the way if you do not. And the patterns you build along the way, described in our piece on [chunking](/blog/chunking-how-expert-puzzlers-see-patterns), are the real result of practice: not a number, but a way of seeing the board.',
        ],
      },
    ],
    references: [r.ericsson, r.macnamara, r.macnamaraMaitra, r.charness, r.stafford],
    relatedSlugs: ['chunking-how-expert-puzzlers-see-patterns', 'stuck-on-a-puzzle-incubation-effect', 'kinder-difficulty-curve'],
    pullQuote: 'Practice matters a great deal in games; it is just not the whole story.',
    faqs: [
      { question: 'What is deliberate practice?', answer: 'Deliberate practice is focused, effortful practice aimed at specific weaknesses, with feedback, rather than simply repeating an activity you already do well. The idea comes from Anders Ericsson and colleagues’ research on expert performance.' },
      { question: 'Is the 10,000-hour rule true?', answer: 'Not as a rule. A 2014 meta-analysis found that deliberate practice explained about 26 per cent of the differences in performance in games and less in most other domains. Practice matters, but it is not the only factor.' },
      { question: 'How often should I practise puzzles to improve?', answer: 'Short, spaced sessions are a good bet. A study of more than 850,000 online game players found that spreading practice out was linked to higher later scores than packing it together.' },
      { question: 'How can I get better at puzzle games?', answer: 'Work on one weakness at a time, use feedback such as move targets, reflect briefly after hard boards and spread your play across the week. On new kinds of boards, try different approaches before settling on one.' },
    ],
  },

  // 9 ────────────────────────────────────────────────────────────────────────
  {
    slug: 'aha-moment-insight-brain',
    title: 'The aha moment: what insight looks like in the brain',
    dek: 'The sudden click of a solved puzzle has a signature in the brain. What research says about insight, why aha answers are usually right, and when they are not.',
    category: 'Learning through play',
    categoryColor: 'gold',
    ...common,
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/aha-moment-insight-brain.webp',
    imageAlt: 'Peach and Vio either side of an iPhone showing Button Factory on the OutBrick Journey map, with yellow and red bricks floating nearby',
    tags: ['insight', 'aha moment', 'problem solving', 'cognitive psychology', 'puzzle games research'],
    intro: 'There are two ways to solve a puzzle. Sometimes you grind towards the answer one step at a time, with a steady sense of getting closer. Other times nothing seems to move, and then all at once the answer is simply there, obvious and complete, with a jolt of pleasure. That second experience, the aha moment, has fascinated psychologists for a century. In the past twenty years neuroscience has begun to show that it is not just a feeling laid over ordinary thinking, but a different route to a solution.',
    keyTakeaways: [
      'Insight solutions arrive suddenly, without the gradual sense of getting closer that marks step-by-step solving.',
      'Brain recordings show a distinct burst of activity in the right temporal lobe just before people report an insight solution.',
      'Aha answers are correct more often than analytic ones, but the feeling can also accompany wrong answers and make nearby ideas feel truer than they are.',
    ],
    sections: [
      {
        id: 'insight-arrives-without-warning',
        title: 'Insight arrives without warning',
        paragraphs: [
          'In a classic 1987 study, Janet Metcalfe and David Wiebe asked people to rate, at regular intervals while they worked, how close they felt to a solution: a “feeling of warmth”. On ordinary algebra problems, warmth rose steadily as people approached the answer. On insight problems it did not. People felt cold, then cold, then cold, and then they had it. From the inside, insight gave almost no warning.',
          'That pattern is the behavioural signature of insight. It suggests that the decisive work happens somewhere the solver cannot monitor, and that the solution reaches awareness all at once rather than piece by piece.',
        ],
        sourceIds: ['metcalfe-wiebe-1987'],
      },
      {
        id: 'what-the-brain-does',
        title: 'What the brain does in the moment',
        paragraphs: [
          'Mark Jung-Beeman, John Kounios and colleagues used compound word puzzles to catch the moment as it happened. Each puzzle gives three words, such as pine, crab and sauce, and asks for a fourth that makes a compound or phrase with all three (apple). After each solution, people said whether it had come by insight or by methodical search.',
          'In brain imaging, insight solutions went with increased activity in a region of the right temporal lobe, the anterior superior temporal gyrus, which is involved in linking distantly related meanings. In EEG recordings, the same area showed a sudden burst of high-frequency gamma activity beginning about a third of a second before people reported an insight solution. Both kinds of solution drew on a largely shared network, but the flash of insight had its own signature.',
          'John Kounios and Mark Beeman’s later review fills in more of the picture. Around insight solutions, attention tends to turn inward, as if the brain briefly quietens outside input so that a weak idea can surface. People also differ in how often they solve by insight, and those differences show up even in brain activity at rest. The field is young, and most findings come from word puzzles rather than visual ones, but the outline is consistent.',
        ],
        sourceIds: ['jung-beeman-2004', 'kounios-beeman-2014'],
      },
      {
        id: 'changing-the-representation',
        title: 'How insight happens: changing the representation',
        paragraphs: [
          'Cognitive psychologists explain insight as a change in how a problem is represented. Günther Knoblich, Stellan Ohlsson and colleagues tested this with matchstick arithmetic: false equations made of matchsticks that become true when a single stick is moved. Problems became much harder when the solution required relaxing a rule people had assumed without noticing, or breaking apart a familiar chunk, such as seeing an X as two separate sticks rather than one symbol.',
          'This ties insight to [chunking](/blog/chunking-how-expert-puzzlers-see-patterns). The chunks that make experts fast are the same chunks that sometimes have to be broken before a new solution can appear. An impasse on a puzzle board often means you are treating something as fixed that is not: a brick you have decided must leave last, or a lane you have decided must stay clear.',
          'It also suggests why breaks help. Stepping away can loosen an assumption enough for the representation to shift, which is why so many aha moments arrive after a pause. We look at that in [stuck on a puzzle? The science of stepping away](/blog/stuck-on-a-puzzle-incubation-effect).',
        ],
        sourceIds: ['knoblich-1999'],
      },
      {
        id: 'can-you-trust-the-aha',
        title: 'Can you trust the aha?',
        paragraphs: [
          'Carola Salvi, Mark Beeman and colleagues compared insight and analytic solutions across four experiments with verbal, visual and mixed problems. In every experiment, the solutions people labelled as insights were on average more accurate than their analytic ones. The analytic answers included relatively more wrong answers, suggesting that people sometimes submit a half-finished analysis as a guess, while insight tends to arrive complete or not at all.',
          'But the feeling is not a guarantee. Amory Danek and Jennifer Wiley asked 70 people to work out how magic tricks were done and to rate each of their solutions. Some wrong solutions came with an aha experience too, which the researchers called false insights. Correct solutions tended to bring stronger feelings of pleasure, suddenness and certainty, but the overlap was real.',
          'Ruben Laukkonen and colleagues showed how far the feeling can stray. In a preregistered experiment with 300 participants, statements were rated as more likely to be true when they appeared alongside an anagram the person had just solved, even when the statements were false, and the effect was stronger when people reported an aha. The glow of insight can spill over onto whatever happens to be nearby.',
        ],
        sourceIds: ['salvi-2016', 'danek-wiley-2017', 'laukkonen-2020'],
      },
      {
        id: 'insight-on-a-puzzle-board',
        title: 'Insight on a puzzle board',
        paragraphs: [
          'On a sliding puzzle, the lesson is to enjoy the aha and then check it. A move that suddenly looks brilliant usually is, but it costs nothing to trace it two steps forward before you commit, especially when a move target is at stake.',
          'You can also invite the click. At an impasse, list the assumptions you are making about the board, out loud if it helps: this brick must leave last, that lane must stay open, the key has to come first. Then drop them one at a time and look again. It is the constraint relaxation that Knoblich and Ohlsson described, done on purpose.',
          'Puzzle designers build boards around that click. In OutBrick, the most satisfying boards are often the ones where a slide you had ruled out turns out to unlock everything, because it changes what you thought the board was about. The rules are simple on purpose, bricks glide until something stops them and leave through the gate of their own colour, so the surprise lives in the arrangement rather than in hidden rules. Games that leave room for that kind of discovery teach through curiosity rather than instruction, a theme we explored in [when a game teaches curiosity without a lecture](/blog/games-teach-curiosity-without-lecture).',
          'If you want to hunt for the click yourself, the [browser board](/play) is a quick way to meet a board you have never seen.',
        ],
      },
    ],
    references: [r.metcalfeWiebe, r.jungBeeman, r.kounios, r.knoblich, r.salvi, r.danekWiley, r.laukkonen],
    relatedSlugs: ['stuck-on-a-puzzle-incubation-effect', 'chunking-how-expert-puzzlers-see-patterns', 'games-teach-curiosity-without-lecture'],
    pullQuote: 'The glow of insight can spill over onto whatever happens to be nearby.',
    faqs: [
      { question: 'What happens in the brain during an aha moment?', answer: 'Studies using word puzzles found increased activity in a region of the right temporal lobe for insight solutions, and a burst of high-frequency gamma activity there about a third of a second before people reported the answer.' },
      { question: 'Are insight solutions more accurate than analytic ones?', answer: 'Usually. Across four experiments, answers people reported as insights were on average more accurate than their analytic answers, although the aha feeling can also accompany wrong answers.' },
      { question: 'Why do solutions pop into my head suddenly?', answer: 'Insight seems to involve a change in how you represent the problem, such as dropping an assumption or breaking a familiar pattern apart. Because that change happens outside awareness, the answer appears to arrive all at once.' },
      { question: 'Can an aha moment be wrong?', answer: 'Yes. In a study of people working out how magic tricks were done, some wrong solutions came with an aha experience, although correct ones tended to feel stronger and more certain.' },
    ],
  },

  // 10 ───────────────────────────────────────────────────────────────────────
  {
    slug: 'why-finish-a-hard-puzzle',
    title: 'Puzzles and perseverance: why a hard board is worth finishing',
    dek: 'Struggle that ends in a solution teaches more than an easy win. What research on desirable difficulties, effort and productive failure says about hard puzzles.',
    category: 'Learning through play',
    categoryColor: 'gold',
    ...common,
    readingTime: '6 min read',
    authorId: 'outbrick-editorial',
    image: '/blog/why-finish-a-hard-puzzle.webp',
    imageAlt: 'Poppy and a winking Zippy beside an iPhone showing Celebration Square on the OutBrick Journey map, on an indigo brick grid',
    tags: ['desirable difficulties', 'learning from mistakes', 'problem solving', 'motivation', 'puzzle games research'],
    intro: 'Every puzzle player knows the board that will not give. You have tried the obvious moves, then the less obvious ones, and the temptation is to skip it, look up a solution or put the game down for good. Sometimes stopping is the right call. But there is a case, backed by a good deal of learning research, for staying with a hard board a little longer than feels comfortable. The struggle is not a fee you pay before the learning starts. Often it is the learning.',
    keyTakeaways: [
      'Conditions that make learning feel harder, such as spacing practice and working out answers yourself, often produce better long-term learning.',
      'How well you seem to be doing while you practise is an unreliable guide to how much you are learning.',
      'Effort can make an outcome more valuable, but in one set of studies only when the effort ended in success, so the aim is a hard board you can finish.',
    ],
    sections: [
      {
        id: 'desirable-difficulties',
        title: 'Desirable difficulties',
        paragraphs: [
          'Robert and Elizabeth Bjork coined the term desirable difficulties for a counter-intuitive family of findings: some conditions that slow learning down and make it feel harder produce better long-term retention and transfer. Spacing practice out instead of massing it, mixing different kinds of problems, testing yourself instead of rereading, and generating an answer instead of being handed one all feel less efficient at the time and tend to work better later.',
          'In their 2020 overview they stress the word desirable. A difficulty helps only if the learner can respond to it successfully. A problem far beyond you is not a desirable difficulty; it is a wall. The sweet spot is a challenge that takes real effort and is still within reach.',
          'For a puzzle player the translation is simple. A board that makes you think for several minutes, try three ideas and discard two is doing what desirable difficulties describe. A board that has you guessing at random for twenty minutes is not; it has stopped giving you anything to respond to.',
        ],
        sourceIds: ['bjork-2020'],
      },
      {
        id: 'learning-versus-performance',
        title: 'Feeling stuck is not the same as not learning',
        paragraphs: [
          'Difficulty feels bad partly because we judge our learning by our performance in the moment. Nicholas Soderstrom and Robert Bjork reviewed decades of research showing that the two can come apart. Learning can happen without any visible change in performance, and conditions that boost performance during practice can fail to produce lasting learning. People regularly misread smooth, easy practice as a sign that they are learning well.',
          'On a puzzle board this is freeing. The minutes you spend stuck, trying approaches that do not work, are not wasted just because the board stays unsolved. You are mapping which moves lead nowhere and why, and that map is part of what makes the next hard board feel easier.',
        ],
        sourceIds: ['soderstrom-bjork-2015'],
      },
      {
        id: 'productive-failure',
        title: 'Productive failure',
        paragraphs: [
          'Education research has tested a sharper version of the idea. In productive failure, developed by Manu Kapur, students attempt problems before they have been taught how to solve them, usually fail, and then receive instruction. A 2021 meta-analysis by Tanmay Sinha and Kapur pooled 53 studies and found a moderate advantage for problem solving first over instruction first, and a larger one when the design followed productive failure principles closely.',
          'The same analysis found limits worth knowing. For younger children, roughly second to fifth grade, and for general skills that are not tied to a subject, instruction first came out ahead. Struggle is not automatically good. It works when learners have enough to go on, and when what comes afterwards helps them make sense of what they tried.',
          'Puzzles have a built-in version of that second step. When you finally find the solution to a board you fought with, your failed attempts suddenly make sense. You can see why each one fell short, and that is the moment the struggle turns into understanding.',
        ],
        sourceIds: ['sinha-kapur-2021'],
      },
      {
        id: 'why-finishing-matters',
        title: 'Why finishing matters',
        paragraphs: [
          'Effort is usually treated as a cost, something people avoid when they can. Michael Inzlicht, Amitai Shenhav and Christopher Olivola reviewed the evidence that it is also a source of value: the same outcome can feel more rewarding when it took effort, and people sometimes choose things precisely because they are hard. They call this the effort paradox.',
          'There is a condition attached, and it gives this article its title. Michael Norton, Daniel Mochon and Dan Ariely found that people valued things they had made themselves, from IKEA boxes to origami to Lego sets, more highly than they otherwise would. But the effect disappeared when people failed to finish, or built something and then took it apart. Labour led to love only when the labour ended in completion.',
          'That is the case for finishing a hard board rather than abandoning it at eighty per cent. The satisfaction of a hard clear is real, and it seems to depend on the clear.',
        ],
        sourceIds: ['inzlicht-2018', 'norton-2012'],
      },
      {
        id: 'perseverance-without-the-grind',
        title: 'Perseverance without the grind',
        paragraphs: [
          'Perseverance has been popularised as grit, and that idea deserves some care. Marcus Credé and colleagues pooled 88 samples covering more than 66,000 people and found that grit was only moderately related to performance and very strongly related to conscientiousness, a long-established personality trait. Of grit’s two parts, perseverance of effort did better than consistency of interest. Sticking with things helps; it is just not a magic trait.',
          'The practical version is modest. Stay with a hard board past the first flush of frustration. When you notice you are repeating yourself, [step away](/blog/stuck-on-a-puzzle-incubation-effect) rather than quit. Use the tools the game gives you to learn from your errors, which is what [undo is for](/blog/why-undo-makes-you-a-better-puzzle-solver). And if a board really is beyond you today, leave it for another day; a desirable difficulty has to be one you can meet.',
          'OutBrick is designed so that persevering does not cost much. There is no clock, the first undo on every board is free, and a life goes only when an attempt ends without a clear, never for opening or clearing a board; the full terms are in the [fair-play ledger on the home page](/#fair). All 2,000 boards were cleared by a solver before release, so a board that looks impossible does have a way through. The [daily board](/daily) is a good place to practise: it stays the same all day, so if it resists at breakfast, it will still be waiting later.',
        ],
        sourceIds: ['crede-2017'],
      },
    ],
    references: [r.bjork, r.soderstrom, r.sinhaKapur, r.inzlicht, r.norton, r.crede],
    relatedSlugs: ['why-undo-makes-you-a-better-puzzle-solver', 'kinder-difficulty-curve', 'deliberate-practice-for-puzzle-games'],
    pullQuote: 'Labour led to love only when the labour ended in completion.',
    faqs: [
      { question: 'Is it better to struggle with a puzzle or look up the answer?', answer: 'Struggling first tends to help, as long as the problem is within reach. Research on desirable difficulties and productive failure suggests that attempting a problem before seeing the solution often leads to better long-term learning.' },
      { question: 'Why does solving a hard puzzle feel so satisfying?', answer: 'Effort can add value to an outcome, so people often prize results they worked for. That effect seems to depend on finishing: in one set of studies it disappeared when people failed to complete what they were building.' },
      { question: 'When should I give up on a hard puzzle?', answer: 'When you are repeating the same attempts without learning anything new, take a break rather than quitting. If a board is still far beyond you after that, leave it for another day, because a difficulty only helps if you can eventually meet it.' },
      { question: 'Is it bad to look up the solution to a puzzle?', answer: 'Not always. If you have genuinely worked on a board and are no longer learning anything, a solution can turn the struggle into understanding, much as instruction does after productive failure. It helps most after a real attempt, not before one.' },
      { question: 'Does grit predict success?', answer: 'Only moderately. A meta-analysis of 88 samples found grit was modestly related to performance and very strongly related to conscientiousness, with perseverance of effort the more useful part.' },
    ],
  },
];
