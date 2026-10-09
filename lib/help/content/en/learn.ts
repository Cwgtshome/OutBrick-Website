import type { HelpArticle } from '../../model.ts';

/**
 * The encyclopedia shelf ("learn"), in English: special bricks and combos, every blocker, lid and
 * gate, and the twelve kinds of board. Checked against the released 5.1.1 (68) rules and boards.
 */
export const learnArticles: HelpArticle[] = [
  {
    slug: 'special-bricks-and-combos',
    category: 'learn',
    cover: 'board-slide',
    title: 'Special bricks and combos: the complete guide',
    summary:
      'How to make every special brick, exactly what each one clears, the three ways to set them off, every combination of two specials, and how cascades, score, stars and the leftover-moves finish fit together.',
    keywords:
      'special specials rocket stripe striped line blaster bomb wrapped colour bomb color bomb rainbow homing dart fish ladybird mower butterfly combo combine two specials cascade chain score points stars sugar crush leftover moves finish bonus',
    host: 'bricko',
    hostPose: 'cheer',
    sections: [
      {
        id: 'quick',
        title: 'Quick reference',
        blocks: [
          {
            t: 'p',
            text: 'A special brick is made whenever a match is bigger than a plain line of three. It stays on the board, waiting, until you set it off. There are four of them:',
          },
          {
            t: 'table',
            head: ['Special', 'Made by', 'What it clears', 'Set it off by'],
            rows: [
              ['[Line blaster](#line-blaster)', 'Four in a line.', 'Its whole row, or its whole column.', 'Tapping it, swapping it, or catching it in a line or blast.'],
              ['[Bomb](#bomb)', 'Two lines crossing: an L, a T or a + shape.', 'The 3×3 square around it, then again once the board has settled.', 'Tapping it, swapping it, or catching it in a line or blast.'],
              ['[Colour bomb](#colour-bomb)', 'Five or more in a straight line.', 'Every piece of one colour.', 'Swapping it with a brick (that colour), tapping it, or catching it in a blast (the commonest colour).'],
              ['[Homing dart](#homing-dart)', 'A 2×2 square of one colour.', 'One piece a goal needs, wherever it is.', 'Tapping it, swapping it, or catching it in a line or blast.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Setting a special off always uses one move, whether you tap it or swap it. A swap that sets two specials off together is one move for both, so a combo is the best value on the board.',
          },
        ],
      },
      {
        id: 'making',
        title: 'How a special is made',
        blocks: [
          {
            t: 'p',
            text: 'After every move the board looks for matches: lines of three or more across or down, and 2×2 squares. Lines that touch or cross join into one group, and each group makes at most one special. When a group could make more than one, the strongest wins:',
          },
          {
            t: 'steps',
            items: [
              '**Five or more in a straight line** makes a **colour bomb**, even if other lines cross it.',
              '**Lines crossing** (an L, a T or a + shape) make a **bomb**.',
              '**Exactly four in a line** makes a **line blaster**.',
              '**A 2×2 square**, with nothing stronger in its group, makes a **homing dart**.',
            ],
          },
          { t: 'h3', text: 'Where it appears' },
          {
            t: 'list',
            items: [
              'On **the brick you moved**, if that brick is part of the match. This works for swaps and for slides alike: slide a brick into place to finish a line of four and the line blaster appears on the brick that slid.',
              'Otherwise, for a bomb, **where the two lines cross**.',
              'Otherwise on the brick that arrived last (in a cascade, the one that fell in), or in the middle of the group.',
            ],
          },
          { t: 'h3', text: 'Which way a line blaster points' },
          {
            t: 'p',
            text: 'A line blaster’s stripes **follow your swipe**. Swipe across (left or right) and it clears its row; swipe up or down and it clears its column, whichever way the line of four itself runs. A line blaster made by a cascade, where nobody swiped, lies **across** the line that made it.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Aim before you swipe',
            text: 'When you can finish a line of four from two directions, pick the swipe that points the blaster where you need it: along the row with your goal bricks, or down the column that runs into a gate.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Long, big, L and T bricks never count in a line, so they can never help make a special. A locked brick counts in a line (the line frees it), but the special never appears on the locked brick itself.',
          },
        ],
      },
      {
        id: 'specials',
        title: 'The four specials',
        blocks: [
          {
            t: 'p',
            text: 'Each village dresses its specials differently: in Garden City the line blaster is a mower, the bomb a flower bud (“Petal burst!”), the colour bomb a butterfly and the homing dart a ladybird; on Clover Farm they are a tractor, a corn cob (“Popcorn!”), a sunflower and a bee. They always play the same way.',
          },
          {
            t: 'entry',
            id: 'line-blaster',
            title: 'Line blaster',
            board: {
              rows: ['G . R . Y', 'R R B R Y', 'Y G . B G'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G . B . Y', '. . R| . Y', 'Y G . B G'] },
              caption: 'Four in a line, finished with a downward swipe: the blaster clears its column.',
              alt: 'A board where nothing falls, three rows of five. Top row: green, empty, red, empty, yellow. Middle row: red, red, blue, red, yellow. Bottom row: yellow, green, empty, blue, green. An arrow swaps the red brick at the top of the middle column down with the blue brick under it. Result: the middle row’s four reds make a line of four and clear, and a red line blaster with up-and-down stripes appears in the middle where the moved red landed, because the swipe was vertical. The blue brick is now at the top of the middle column, the cleared cells stay empty, and every other brick stays where it was.',
            },
            what: 'A brick with stripes. When it goes off it clears every piece in its row (stripes across) or its column (stripes up and down), right to the edges of the board, passing over statues and gaps in the board’s shape.',
            how: 'Make four in a line. Set it off by tapping it, by swapping it with a neighbour that makes a match or with another special, or by catching it in a line or another blast. It can also be **slid out through a gate of its colour**, and then it leaves without going off and counts like a brick of its colour.',
            facts: [
              { label: 'Made by', text: 'Exactly four in a line.' },
              { label: 'Clears', text: 'One whole row or one whole column: bricks go, blockers lose one layer, locks open, other specials go off.' },
              { label: 'Combines with', text: 'Every other special. See [the combo table](#combos).' },
              { label: 'VoiceOver says', text: '“Red line blaster, horizontal, clears its row” or “… vertical, clears its column”. In some villages its local name follows in brackets, such as “(mower)”.' },
            ],
            tip: 'When a line blaster’s row or column passes the cells right in front of a gate, any bricks of the gate’s colour on those cells fly out through it and count as sent.',
          },
          {
            t: 'entry',
            id: 'bomb',
            title: 'Bomb',
            board: {
              rows: ['R G B .', 'R B G .', 'Y R R .', 'R G Y .'],
              moves: [{ row: 3, col: 0, dir: 'up', kind: 'swap' }],
              after: { rows: ['. G B .', '. B G .', 'Rb . . .', 'Y G Y .'] },
              caption: 'Two lines of red that cross make a bomb, right where they meet.',
              alt: 'A board where nothing falls, four rows of four. Row 1: red, green, blue, empty. Row 2: red, blue, green, empty. Row 3: yellow, red, red, empty. Row 4: red, green, yellow, empty. An arrow swaps the red brick at the bottom left up with the yellow brick above it. Result: the red now in row 3, column 1 finishes two lines at once, three reds down the left column and three reds along row 3, an L shape. The other four reds clear and a red bomb appears in row 3, column 1. The yellow brick is now at the bottom left; green, blue, green and blue bricks stay in rows 1 and 2, and green and yellow stay in row 4.',
            },
            what: 'A round, fizzing special. When it goes off it clears the 3×3 square around itself; then, once the board has settled (on boards where bricks fall, after the gap has filled), it goes off **a second time** in the same place.',
            how: 'Make two lines of one colour that share a brick: an L, a T or a + shape. Set it off by tapping it, swapping it, or catching it in a line or blast.',
            facts: [
              { label: 'Made by', text: 'Lines across and down that cross or touch at a shared brick (L, T or +), unless the group also holds five in a straight line.' },
              { label: 'Clears', text: 'The 3×3 square around it, twice. The second blast catches what fell into the hole, and takes a second layer off crates and ice.' },
              { label: 'Combines with', text: 'Every other special. See [the combo table](#combos).' },
              { label: 'VoiceOver says', text: '“Red bomb”.' },
            ],
            tip: 'Set a bomb off beside a two-layer crate or a brick in thick ice: the two blasts can take both layers in one move.',
          },
          {
            t: 'entry',
            id: 'colour-bomb',
            title: 'Colour bomb',
            board: {
              rows: ['G Y B Y G', 'B B R B B', 'Y G Y G Y'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G Y R Y G', '. . * . .', 'Y G Y G Y'] },
              caption: 'Five in a row makes a colour bomb. It has no colour of its own.',
              alt: 'A board where nothing falls, three rows of five. Top row: green, yellow, blue, yellow, green. Middle row: blue, blue, red, blue, blue. Bottom row: yellow, green, yellow, green, yellow. An arrow swaps the blue brick at the top of the middle column down with the red brick under it. Result: five blues in the middle row clear and a colour bomb, with no colour, appears in the middle cell. The red brick is now at the top of the middle column and the rest of the board is unchanged.',
            },
            what: 'A many-coloured special with no colour of its own. Swapped with a brick, it takes **every piece of that brick’s colour** on the board: plain bricks and keys go, specials of that colour go off, and locked ones are set free instead.',
            how: 'Make five or more in a straight line. Swap it with any neighbouring brick: that swap always counts, even though it makes no line. Tapped on its own, or caught in another special’s blast, it takes every plain brick of the **commonest colour** on the board instead.',
            facts: [
              { label: 'Made by', text: 'Five or more in a straight line.' },
              { label: 'Clears', text: 'Every piece of one colour, one by one, nearest first.' },
              { label: 'Combines with', text: 'Every other special, and another colour bomb. See [the combo table](#combos).' },
              { label: 'Good to know', text: 'It never counts in a line, and it cannot go out through a gate: slid into one, it stops as at a wall.' },
              { label: 'VoiceOver says', text: '“Colour bomb, takes every piece of the colour it is swapped with”.' },
            ],
            tip: 'Swap it with a goal colour. Every brick it takes counts toward a “Collect” goal or a “Send or match” goal of that colour.',
          },
          {
            t: 'entry',
            id: 'homing-dart',
            title: 'Homing dart',
            board: {
              rows: ['Y G B', 'R R G', 'R B Y', 'G R Y'],
              moves: [{ row: 3, col: 1, dir: 'up', kind: 'swap' }],
              after: { rows: ['Y G B', '. . G', '. Rd Y', 'G B Y'] },
              caption: 'A 2×2 square of one colour makes a homing dart.',
              alt: 'A board where nothing falls, four rows of three. Row 1: yellow, green, blue. Row 2: red, red, green. Row 3: red, blue, yellow. Row 4: green, red, yellow. An arrow swaps the red brick at the bottom of the middle column up with the blue brick above it. Result: four reds now form a 2×2 square in rows 2 and 3; three of them clear and a red homing dart appears in row 3, column 2, where the moved red landed. The blue brick is now at the bottom of the middle column; the other bricks are unchanged.',
            },
            what: 'A small special that flies across the board to one piece and hits it once.',
            how: 'Make a 2×2 square of one colour. Set it off by tapping it, swapping it, or catching it in a line or blast. It picks its own target: moss when a goal asks for moss, crates or locks when a goal asks for those, then a brick of a colour a “Collect” goal still wants, then any other blocker, top of the board first.',
            facts: [
              { label: 'Made by', text: 'A 2×2 square, when its group has no line of four or more and no crossing lines.' },
              { label: 'Clears', text: 'One hit on one piece: a brick goes, a blocker loses a layer, a lock opens.' },
              { label: 'Combines with', text: 'Every other special: it carries the other one to its target. See [the combo table](#combos).' },
              { label: 'VoiceOver says', text: '“Red homing dart, flies to a goal piece”.' },
            ],
            tip: 'A dart is weak on its own but excellent in a combo: swap it with a bomb or a line blaster and it delivers that special to the piece you most need gone.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'With **Colour-blind** on (it is on from the start), line blasters, bombs, homing darts and keys wear a small badge in one corner with their colour’s symbol, so you can tell their colour without relying on colour alone.',
          },
        ],
      },
      {
        id: 'setting-off',
        title: 'Three ways to set a special off',
        blocks: [
          {
            t: 'table',
            head: ['How', 'What happens', 'Cost'],
            rows: [
              ['**Tap it**', 'It goes off where it stands. A colour bomb tapped on its own takes the commonest colour.', 'One move.'],
              ['**Swap it**', 'Swapped into a match, it goes off as part of the line. Swapped with another special, the two make a [combo](#combos). A colour bomb swapped with a brick takes that brick’s colour.', 'One move.'],
              ['**Catch it**', 'A special caught in a line, or reached by another special’s blast, goes off too. One blast can set off a whole chain.', 'Free: part of the move that caused it.'],
            ],
          },
          {
            t: 'list',
            items: [
              '**Sliding a special never sets it off.** You can slide a special along its lane like any brick, to line it up for a better swap.',
              '**What a blast does to each piece:** a plain brick is cleared; a crate or a brick in ice loses one layer; a lock opens and its brick stays; moss is cleared; another special goes off.',
              '**What a blast never touches:** long, big, L and T bricks (they leave only through their gate), anything under a closed lid, and statues.',
              'A brick of a gate’s colour that a blast clears on the edge cell **right in front of its open gate** flies out through the gate and counts as sent.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'A tap is the last resort. If a swap can set the same special off and make a match at the same time, it does more for the same move.',
          },
        ],
      },
      {
        id: 'combos',
        title: 'Every combo',
        blocks: [
          {
            t: 'p',
            text: 'Any two specials standing side by side can be swapped, even when the swap makes no line. They go off together, centred on the cell where the brick you moved lands. These are all the combinations the game has:',
          },
          {
            t: 'table',
            head: ['Swap together', 'What happens'],
            rows: [
              ['Line blaster + line blaster', 'A cross: one whole row and one whole column.'],
              ['Line blaster + bomb', 'A big cross: three whole rows and three whole columns.'],
              ['Line blaster + homing dart', 'The dart flies to its target, hits it, and the line blaster goes off from there.'],
              ['Line blaster + colour bomb', 'Every free plain brick of the blaster’s colour becomes a line blaster (pointing alternately up-and-down and across), and they all go off.'],
              ['Bomb + bomb', 'A 5×5 blast, and a second 5×5 blast in the same place once the board has settled.'],
              ['Bomb + homing dart', 'The dart carries the bomb to its target, where it goes off once as a 5×5 blast.'],
              ['Bomb + colour bomb', 'Every free plain brick of the bomb’s colour becomes a bomb, and each one goes off (twice, as bombs do).'],
              ['Homing dart + homing dart', 'Three targets in all: the first dart lands, and two more fly on from there.'],
              ['Homing dart + colour bomb', 'Every free plain brick of the dart’s colour becomes a homing dart, and they all fly.'],
              ['Colour bomb + colour bomb', 'Every piece on the board takes a hit: bricks clear, every blocker loses a layer, every lock opens and every special goes off. Long and shaped bricks, and anything under a lid, are left alone.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['G Y B Y', 'Y R- B| G', 'B G Y B'],
              moves: [{ row: 1, col: 1, dir: 'right', kind: 'swap' }],
              after: { rows: ['G Y . Y', '. . . .', 'B G . B'] },
              caption: 'Two line blasters swapped together clear a cross: the row and the column where the moved one lands.',
              alt: 'A board where nothing falls, three rows of four. Top row: green, yellow, blue, yellow. Middle row: yellow, a red line blaster with stripes across, a blue line blaster with stripes up and down, green. Bottom row: blue, green, yellow, blue. An arrow swaps the red line blaster right into the blue one. Result: the whole middle row and the whole third column clear. Left behind: green, yellow and yellow along the top with a gap in the third column, an empty middle row, and blue, green and blue along the bottom with a gap in the third column.',
            },
          },
          {
            t: 'list',
            items: [
              '“Free plain brick” means a single brick of that colour that is not in ice and not locked. If no brick of the special’s colour is left, the colour bomb uses the board’s commonest colour instead.',
              'VoiceOver mentions “a combo” in the move’s summary.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'The strongest pairs',
            text: 'Colour bomb + colour bomb clears the most, but colour bomb + line blaster on a common colour often does more for your goals. On a board where nothing falls, a colour bomb pair is best saved until the colour you need is plentiful.',
          },
        ],
      },
      {
        id: 'gates',
        title: 'Specials and gates',
        blocks: [
          {
            t: 'list',
            items: [
              '**Line blasters can go home.** Slide one into an open gate of its colour and it leaves without going off, counting like a brick of its colour.',
              '**Bombs, homing darts and colour bombs cannot.** Slid toward a gate, they stop at it as at a wall.',
              '**Blasted bricks can go home.** A brick of a gate’s colour that a special clears on the edge cell in front of its open gate flies out through the gate.',
              '**Gate goals read “Send or match”.** Bricks of that colour cleared by a line or a blast anywhere on the board count too, so a line blaster through a row of goal bricks is real progress.',
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['G B R G', 'R R B Y', 'Y G Y B'],
              gates: [{ side: 'left', at: 1, colour: 'R' }],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G B B G', '. . . Y', 'Y G Y B'] },
              caption: 'A line matched in front of a gate of its colour: the end brick flies out through the gate.',
              alt: 'A board where nothing falls, three rows of four, with a red gate on the left edge of the middle row. Top row: green, blue, red, green. Middle row: red, red, blue, yellow. Bottom row: yellow, green, yellow, blue. An arrow swaps the red brick at the top of the third column down with the blue below it. Result: three reds line up in the middle row. The red at the left end stands in front of the red gate, so it flies out through the gate; the other two pop. All three count for a red “Send or match” goal. The blue is now at the top of the third column; the rest of the board is unchanged.',
            },
          },
          {
            t: 'p',
            text: 'Every gate, lid and blocker is explained in [Every blocker, lid and gate](help:blockers-encyclopedia#gates).',
          },
        ],
      },
      {
        id: 'score',
        title: 'Cascades, score and stars',
        blocks: [
          {
            t: 'p',
            text: 'On boards where bricks fall, a match leaves a gap, the bricks above fall into it and new ones drop in from the top. If that makes another line, it pops too: a **cascade**. Each new wave is worth more than the last. On boards where nothing falls, a match simply leaves empty cells, so cascades are rare, but a bomb’s second blast still happens.',
          },
          {
            t: 'table',
            caption: 'Points for what a move does (5.1.1)',
            head: ['What happens', 'Points'],
            rows: [
              ['Each brick in a line', '20, times the wave: a brick in the second cascade wave is worth 40, in the third 60'],
              ['Each special made', '120'],
              ['A brick out through a gate', '60'],
              ['A special going off', '100, plus 30 for each piece it clears, 40 for each layer of ice it breaks and 60 for each brick it sends through a gate'],
              ['A blocker hit by a line beside it', '20'],
              ['Each move left when the goals are met', '150, plus whatever its line blaster clears'],
            ],
          },
          {
            t: 'list',
            items: [
              'The **star track** in the header fills as your score rises. Every clear earns at least **one star**.',
              'The marks for two and three stars are set from each board’s own reference solution, counting the 150 points of the moves it has left over. Win briskly, with moves to spare, and the stars come more easily; spend every move and you need more points from play to match.',
              'Replay a cleared board from the Journey to try for more stars. See [Playing a board](help:playing-a-board#stars).',
            ],
          },
        ],
      },
      {
        id: 'finish',
        title: 'The leftover-moves finish',
        blocks: [
          {
            t: 'steps',
            items: [
              'The moment your last goal is met, the board stops taking moves and shows **Goal complete!**, with “N moves left become blasters!” under it. Nothing can lose the board now: no life is at risk and no move is needed.',
              'One spark per move leaves the moves counter and lands on a plain brick, which becomes a line blaster. Each one adds **150 points**. Up to 30 moves become blasters on the board; any more are still paid.',
              'Then every special on the board goes off, the new blasters and any you left unused, until nothing is left to fire.',
              'Your friends take a lap and the win card shows your score, stars and coins.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: '**Tap anywhere** to skip the show. The result is worked out in advance, so skipping gives exactly the same score and stars.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Leftover moves earn points, and so stars, but no extra coins. Specials you leave on the board are not wasted: they go off in the finish and add to your score.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'VoiceOver says “Goal complete! 4 moves left become blasters!” straight away, then “Final score” with the number and the stars as the win card appears. With **Reduce Motion** on, the banner fades in and out and the settled board appears without the show.',
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'Specials with VoiceOver',
        blocks: [
          {
            t: 'table',
            head: ['When', 'What you hear'],
            rows: [
              ['You reach a special', 'Its kind, colour and what it does, for example “Red line blaster, horizontal, clears its row”.'],
              ['Its actions', '**Activate special** comes first, then its slides, then its swaps. Swaps that set something off come before swaps that make nothing.'],
              ['You tap one', '“Set off red bomb”.'],
              ['A hint suggests one', 'For example “Hint: set off red bomb”, with its row and column.'],
              ['After a move', 'The specials the move made, any combo, and the cascades, as part of the move’s summary.'],
            ],
          },
          {
            t: 'p',
            text: 'Twist two fingers to the **Specials** rotor and swipe up or down to jump from one special to the next. More in [Playing with VoiceOver](help:voiceover#rotors).',
          },
        ],
      },
      {
        id: 'faq',
        title: 'Questions',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Why did my swap of two specials work without making a line?',
                a: 'Any two specials next to each other can always be swapped: the swap sets them off together as a combo. The same goes for a colour bomb swapped with any brick.',
              },
              {
                q: 'I slid my line blaster into its gate and it did not go off. Did I waste it?',
                a: 'No. A line blaster slid out through a gate of its colour leaves without going off and counts like a brick of that colour toward your goals. If you wanted the blast, tap it or swap it instead.',
              },
              {
                q: 'Why did a bomb leave a long brick standing?',
                a: 'Blasts never take long, big, L or T bricks. They are cargo for their gate and leave only by sliding through a gate as wide as they are. Blasts also cannot reach anything under a closed lid.',
              },
              {
                q: 'Do bricks a special clears count for my goals?',
                a: 'Yes. Bricks of a goal colour cleared by a blast count for “Collect” goals and for “Send or match” goals, and a brick blasted in front of its own gate flies out through it. Blocker layers a blast breaks count for crate, moss and lock goals.',
              },
              {
                q: 'Should I save specials for the end?',
                a: 'Only if the goals are already safe. Any special still on the board when the last goal is met goes off in the finish and adds points, but a special used early can save the moves that become even more points.',
              },
              {
                q: 'Is the Rocket booster the same as a line blaster?',
                a: 'The **Rocket** booster turns a plain brick you choose into a line blaster that fires along its row straight away. See [Boosters, hints and Pause](help:boosters-and-pause).',
              },
            ],
          },
        ],
      },
    ],
    related: ['blockers-encyclopedia', 'board-kinds', 'playing-a-board', 'bricks-specials-and-blockers', 'boosters-and-pause', 'voiceover'],
  },

  {
    slug: 'blockers-encyclopedia',
    category: 'learn',
    cover: 'board-village',
    title: 'Every blocker, lid and gate, explained',
    summary:
      'What every obstacle on a board looks like, what it does and exactly how to clear or open it: crates, ice, locks, moss, statues, face-down bricks, keys, long and shaped bricks, the five lids, every kind of gate and portals.',
    keywords:
      'blocker obstacle crate pot hay bale layers ice gel frozen lock chain locked moss spreading statue stone ornament face-down question mark hidden brick key keyhole sealed room lid sealed bed counter colour counter stained glass glass key clock move clock gate iced gate counted gate staged gate sealed gate portal long brick big brick L brick T brick',
    host: 'peach',
    hostPose: 'think',
    sections: [
      {
        id: 'overview',
        title: 'Quick reference',
        blocks: [
          {
            t: 'p',
            text: 'Everything that is not a plain brick is listed here. Their look changes with the village (flower pots in Garden City, hay bales on the farm, sandcastles by the sea), but the rules never do. **Tap any blocker, lid or gate** on the board and it wiggles and tells you in one line what it is and what clears it.',
          },
          {
            t: 'table',
            head: ['Obstacle', 'Stops a slide?', 'How to clear or open it'],
            rows: [
              ['[Crate](#crate)', 'Yes', 'A line beside it, or a blast. One layer each time.'],
              ['[Brick in ice](#ice)', 'Yes, and it cannot move', 'A line beside it, or a blast. One layer each time.'],
              ['[Locked brick](#lock)', 'Yes, and it cannot move', 'A line **through** it, or a blast.'],
              ['[Moss](#moss)', 'Yes', 'A line beside it, or a blast.'],
              ['[Statue](#statue)', 'Yes', 'It stays. Find another lane.'],
              ['[Face-down brick](#face-down)', 'It is a brick: it moves', 'Turns over when a brick next to it leaves the board.'],
              ['[Lids](#lids)', 'Yes', 'Each of the five opens by its own rule.'],
              ['[Gates](#gates)', 'Wrong colour or shut: yes', 'Open gates take bricks of their colour.'],
              ['[Portal](#portal)', 'No: a brick goes through', 'Slide a single brick into it.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Checked against version 5.1.1',
            text: 'Crates, ice, locks, moss, statues, gates and the clock lid appear all along the Journey. In this version the other four lids, face-down bricks, staged gates and portals appear on some boards up to level 408; later updates may bring them further along.',
          },
        ],
      },
      {
        id: 'obstacles',
        title: 'Obstacles',
        blocks: [
          {
            t: 'entry',
            id: 'crate',
            title: 'Crate',
            board: {
              rows: ['G B R Y', 'R R B x2', 'Y G Y B'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G B B Y', '. . . x', 'Y G Y B'] },
              caption: 'A line right beside a crate takes one layer off it.',
              alt: 'A board where nothing falls, three rows of four. Top row: green, blue, red, yellow. Middle row: red, red, blue, and a crate with 2 layers on the right. Bottom row: yellow, green, yellow, blue. An arrow swaps the red at the top of the third column down with the blue under it. Result: three reds clear in the middle row, and the crate beside the end of the line loses a layer: it now has 1 layer. The blue is at the top of the third column; the rest is unchanged.',
            },
            what: 'A box that fills one cell. A sliding brick stops against it, nothing can be swapped with it, and on boards where bricks fall it stays put while the bricks above rest on it. It has one or two layers: a two-layer crate looks sturdier, and a tap or VoiceOver always tells you how many are left.',
            how: 'Make a line right beside it (the cell above, below, left or right of any brick in the line): each line takes one layer, however many of its bricks touch the crate. A blast that reaches it also takes one layer, and a bomb’s double blast can take two. The last layer breaks it open and frees the cell.',
            facts: [
              { label: 'First appears', text: 'Level 5, Pots and Ice. Two-layer crates from level 20.' },
              { label: 'Goal', text: '“Break” crates: every layer you knock off counts once.' },
              { label: 'Looks like, but isn’t', text: 'A statue, which never breaks, and a lid, which covers bricks and shows a sign.' },
              { label: 'VoiceOver says', text: '“Crate, 2 layers”. Tapped: “Crate, 2 layers. A line beside it breaks a layer”.' },
            ],
            tip: 'The **UFO** booster takes one layer off a crate wherever it is.',
          },
          {
            t: 'entry',
            id: 'ice',
            title: 'Brick in ice',
            board: {
              rows: ['B G~ Y', 'R R B', 'G Y R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['B G Y', '. . .', 'G Y B'] },
              caption: 'A line beside the iced brick breaks the ice; the brick inside is free again.',
              alt: 'A board where nothing falls, three rows of three. Top row: blue, a green brick frozen in ice, yellow. Middle row: red, red, blue. Bottom row: green, yellow, red. An arrow swaps the red at the bottom right up with the blue above it. Result: three reds clear in the middle row, and the ice on the green brick above the line breaks, leaving a plain green brick that can move again. The blue is now at the bottom right.',
            },
            what: 'A coloured brick held in a block of ice, one or two layers thick. While it is frozen it cannot slide, swap, fall or count in a line, and a sliding brick stops against it.',
            how: 'Make a line right beside it, or reach it with a blast: each takes one layer. When the last layer breaks, the brick is an ordinary brick again and can be moved and matched.',
            facts: [
              { label: 'First appears', text: 'Level 5, Pots and Ice.' },
              { label: 'Looks like, but isn’t', text: 'An iced **gate**, which is on the edge of the board and thaws differently. See [Iced gate](#iced-gate).' },
              { label: 'VoiceOver says', text: 'The brick, then its ice, for example “Red brick, in gel, 1 layer”. Tapped: “… A line beside it breaks the gel”.' },
            ],
            tip: 'An iced brick of a goal colour is worth freeing early: until it is free it cannot reach its gate.',
          },
          {
            t: 'entry',
            id: 'lock',
            title: 'Locked brick',
            board: {
              rows: ['G Y R', 'R R! B', 'Y G Y'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G Y B', '. R .', 'Y G Y'] },
              caption: 'A line that runs through the locked brick frees it. The freed brick stays.',
              alt: 'A board where nothing falls, three rows of three. Top row: green, yellow, red. Middle row: red, a locked red brick, blue. Bottom row: yellow, green, yellow. An arrow swaps the red at the top right down with the blue below it. Result: three reds line up in the middle row, running through the locked brick. The two outer reds clear; the lock opens and the middle red stays, now a plain brick. The blue is at the top right.',
            },
            what: 'A brick held by a lock. It cannot slide, swap or fall, and a sliding brick stops against it. It still counts in a line of its colour.',
            how: 'Make a line **through** it: the line clears the bricks around it, opens the lock and leaves the freed brick where it is. A line merely beside it does nothing. A blast that reaches it also opens the lock.',
            facts: [
              { label: 'First appears', text: 'Level 9, Locks and Moss.' },
              { label: 'Goal', text: '“Undo” locks: each lock opened counts once.' },
              { label: 'VoiceOver says', text: '“Yellow brick, locked, a line through it frees it”.' },
            ],
            tip: 'Look for the locked brick’s own colour on both sides of it, or above and below: one slide or swap that completes the line frees it.',
          },
          {
            t: 'entry',
            id: 'moss',
            title: 'Moss',
            board: {
              rows: ['Y m B', 'R R G', 'B Y R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['Y . B', '. . .', 'B Y G'] },
              caption: 'A line right beside moss clears it.',
              alt: 'A board where nothing falls, three rows of three. Top row: yellow, a clump of moss, blue. Middle row: red, red, green. Bottom row: blue, yellow, red. An arrow swaps the red at the bottom right up with the green above it. Result: three reds clear in the middle row and the moss above the line is cleared too, leaving an empty cell. The green is now at the bottom right.',
            },
            what: 'A clump of moss that fills a cell. A sliding brick stops against it. On **Locks and Moss** boards it spreads: in the game’s words, it creeps onto a brick after any move that clears none, taking over one plain single brick next to it.',
            how: 'Make a line right beside it, or reach it with a blast: one hit clears it. Moss that has grown over a brick clears the same way.',
            facts: [
              { label: 'First appears', text: 'Level 9, Locks and Moss.' },
              { label: 'Goal', text: '“Clear” moss: every clump cleared counts, including ones that grew during play.' },
              { label: 'VoiceOver says', text: '“Moss, spreads after a move that clears none”. Tapped: “… A line beside it clears it”.' },
            ],
            tip: 'Clear a little moss whenever you can: a move that clears some moss never lets it grow. Boosters never count as a move, so using one does not let moss spread.',
          },
          {
            t: 'entry',
            id: 'statue',
            title: 'Statue',
            board: {
              rows: ['. . . . .', 'R+ . s . .', 'B . . . G'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 0, dir: 'right' }],
              after: { rows: ['. . . . .', '. R s . .', 'B . . . G'] },
              caption: 'A statue stops a slide. The red gate is out of reach along this row.',
              alt: 'A board where nothing falls, three rows of five, with a red gate on the right edge of the middle row. Top row: empty. Middle row: a red brick at the left, an empty cell, a statue in the middle, then two empty cells. Bottom row: blue at the left, three empty cells, green at the right. An arrow slides the red brick right. Result: it stops in the second cell, against the statue, and cannot reach the red gate along this row.',
            },
            what: 'A garden statue, or another ornament of the village, standing in a gap inside the board. It is scenery, not a piece: nothing slides through it, nothing can land on it, and it never breaks. On boards where bricks fall, bricks above it rest on top, and single bricks slide round it diagonally to fill the cells beneath.',
            how: 'It cannot be cleared. Plan around it: use the open lanes, or bring the brick round by another row. A line blaster’s blast passes right over it.',
            facts: [
              { label: 'First appears', text: 'Level 10, Stone Lanes.' },
              { label: 'Looks like, but isn’t', text: 'A crate, which breaks; a statue never does.' },
              { label: 'VoiceOver says', text: 'Its name, for example “Statue: part of the scenery. Pieces fall round it”.' },
            ],
          },
        ],
      },
      {
        id: 'special-bricks',
        title: 'Bricks with their own rules',
        blocks: [
          {
            t: 'entry',
            id: 'face-down',
            title: 'Face-down “?” brick',
            board: {
              rows: ['? R+ . .', 'G B Y .'],
              gates: [{ side: 'top', at: 1, colour: 'R' }],
              moves: [{ row: 0, col: 1, dir: 'up' }],
              after: { rows: ['Y . . .', 'G B Y .'] },
              caption: 'The red next to it leaves the board, so the face-down brick turns over.',
              alt: 'A board of two rows of four, with a red gate on the top edge above the second column. Top row: a face-down brick showing a question mark, a red brick, two empty cells. Bottom row: green, blue, yellow, empty. An arrow slides the red brick up, out through the red gate. Result: the red has left the board, and the face-down brick beside it turns over: it was yellow. The bottom row is unchanged.',
            },
            what: 'A slate-grey brick with a white “?” and no colour symbol. It hides its colour, but it is a real brick of a real colour and plays by it: it slides, swaps, matches and goes home through its own colour’s gate exactly as that colour would.',
            how: 'It turns over when a brick **next to it** (above, below, left or right) **leaves the board**: out through a gate, cleared in a line or cleared by a blast. It never turns over because it moved, or because a neighbour slid or fell away.',
            facts: [
              { label: 'First appears', text: 'Level 49.' },
              { label: 'Fair play', text: 'No hint, teaching hand, rotor, row sound or VoiceOver word ever gives its colour away. The hint will not suggest a move that moves, swaps or clears a face-down brick, so on a board full of them it may show no hint at all.' },
              { label: 'VoiceOver says', text: '“Face-down brick, turns over when a brick next to it leaves the board”. Its swaps never say “no match”, and a lane that ends at a gate is offered as “Slide left into the gate”. Voice Control calls it “face-down”, as in “Slide face-down 14 left”.' },
            ],
            tip: 'Clear the bricks around a cluster of “?” bricks first: each brick that leaves can turn over up to four of them, and then you can plan.',
          },
          {
            t: 'entry',
            id: 'key',
            title: 'Key brick',
            what: 'A brick of its colour with a key on it. It only appears on boards with a [keyhole lid](#lid-keyhole), outside the lid and usually high on the board.',
            how: 'It plays exactly like a brick of its colour: slide it, swap it, match it. The moment it **leaves the board**, matched in a line, cleared by a blast, or slid out through a gate of its colour, the keyhole lid opens.',
            facts: [
              { label: 'VoiceOver says', text: '“Red key”.' },
              { label: 'Colour-blind', text: 'It wears a corner badge with its colour’s symbol.' },
            ],
            tip: 'If its gate is far away, a line of three is quicker: a key matched anywhere opens the keyhole just the same.',
          },
          {
            t: 'entry',
            id: 'long-bricks',
            title: 'Long and big bricks',
            what: 'One moulded piece covering two or three cells in a row (1×2, 2×1, 1×3, 3×1) or a 2×2 square. It slides as one piece and stops as soon as any of its cells meets something.',
            how: 'Slide it into a gate of its colour that is **as wide as the brick across its lane**: a brick two cells tall sliding sideways needs a side gate two cells long, and a 2×2 needs a gate two cells long. The cells behind it must be free to follow it out. It is never swapped, never counts in a line, and no blast or booster can take it, so sliding it home is the only way. It counts **every cell** for your goals: a 2×2 red is four red.',
            facts: [
              { label: 'First appears', text: 'Level 6, Long Bricks.' },
              { label: 'Where bricks fall', text: 'It falls as a unit, one row at a time, and only when every cell beneath it is free: one crate under one of its cells holds the whole piece up.' },
              { label: 'VoiceOver says', text: '“Red long brick, 2 tall”, “Blue big square brick”. Its actions name it: “Slide the red long brick left, out through the red gate”.' },
            ],
            tip: 'Before you clear a lane, check the gate’s width. A gate one cell long will never take a long brick, however well it is lined up.',
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Level 31 on the beach: 16 moves left, goals of 8 yellow and 8 blue. Big joined bricks are stacked at the bottom of the board: a long blue bar, a tall blue column and a yellow piece bent into a C, with blue and yellow gates on the edges.',
            caption: 'Big bricks slide as one piece and need a gate as wide as they are.',
          },
          {
            t: 'entry',
            id: 'l-and-t',
            title: 'L and T bricks',
            what: 'Bent pieces of four cells in the shape of an L or a T. They follow the same rules as long bricks: one piece, never swapped, never in a line, never blasted.',
            how: 'Line the piece up with a gate of its colour that spans the whole piece across its lane, then slide it home. Whichever of its cells meets something first stops the whole piece.',
            facts: [
              { label: 'First appears', text: 'Level 7, Corner Pieces.' },
              { label: 'VoiceOver says', text: '“Red L brick”, “Blue T brick”.' },
            ],
          },
        ],
      },
      {
        id: 'lids',
        title: 'Sealed rooms and their five lids',
        blocks: [
          {
            t: 'p',
            text: 'A **sealed room** is a block of one to four cells under a lid. Until the lid opens, the bricks underneath are frozen: they cannot slide, swap, match or fall, and no blast, booster or shuffle can reach them. Each lid shows a sign for its kind, and most also show a number: how many more they need. When it opens, the lid lifts away and its bricks join the game.',
          },
          {
            t: 'table',
            head: ['Lid', 'Sign', 'Opens when…'],
            rows: [
              ['[Counter](#lid-counter)', 'A grid of squares and a number', 'That many more bricks, of any colour, have left the board.'],
              ['[Colour counter](#lid-colour-counter)', 'A stack of squares and a number, in its colour', 'That many more bricks of its colour have left the board.'],
              ['[Stained-glass key](#lid-glass-key)', 'A key, in its colour; no number', 'You make a line of its colour right beside it.'],
              ['[Clock](#lid-clock)', 'A clock and a number', 'You have made that many more moves.'],
              ['[Keyhole](#lid-keyhole)', 'A padlock', 'The key brick leaves the board.'],
            ],
          },
          {
            t: 'entry',
            id: 'lid-counter',
            title: 'Counter lid',
            what: 'A lid with a grid sign and a number that counts down.',
            how: 'Every brick that leaves the board, of any colour, takes one off: matched in a line, cleared by a blast or sent out through a gate. A long or big brick counts once. Sliding bricks around the board does not count. On the boards so far it asks for 5 to 9 bricks.',
            facts: [
              { label: 'VoiceOver says', text: 'On each covered brick: “sealed under a lid, opens after 6 more bricks are cleared”. Opening: “The counter lid opened. Its bricks can move”.' },
            ],
          },
          {
            t: 'entry',
            id: 'lid-colour-counter',
            title: 'Colour counter lid',
            what: 'A lid in one colour, with a stack sign and a number.',
            how: 'Only bricks of **its own colour** leaving the board count: matched, blasted or sent through a gate. Other colours do nothing for it. On the boards so far it asks for 3 or 4.',
            facts: [
              { label: 'First appears', text: 'Level 65.' },
              { label: 'VoiceOver says', text: '“sealed under a red lid, opens after 3 more red bricks are cleared”. Opening: “The red counter lid opened. Its bricks can move”.' },
            ],
            tip: 'Its colour is usually one your goals want as well, so every brick you send home works twice.',
          },
          {
            t: 'entry',
            id: 'lid-glass-key',
            title: 'Stained-glass key lid',
            what: 'A lid in one colour with a key sign and no number.',
            how: 'Make a line (or a 2×2 square) **of its colour** with at least one brick right beside the lid: above, below, left or right of one of its cells. A line of another colour, a line further away, or a blast does not open it.',
            facts: [
              { label: 'VoiceOver says', text: '“sealed under a red key lid, opens to a red line beside it”. Opening: “The red glass lid opened. Its bricks can move”.' },
            ],
            tip: 'Look for two bricks of the lid’s colour already touching it: one slide or swap of a third brick next to them opens it.',
          },
          {
            t: 'entry',
            id: 'lid-clock',
            title: 'Clock lid (the sealed bed)',
            what: 'A lid with a clock sign and a number of moves. On **The Big Day** it often covers the two bottom cells of one corner; the game calls that one the **sealed bed**.',
            how: 'It opens by itself after that many moves: every slide, swap or tap counts one. Boosters do not count. On the boards so far it asks for 3 to 6 moves.',
            facts: [
              { label: 'First appears', text: 'Level 11, The Big Day, as the sealed bed.' },
              { label: 'VoiceOver says', text: '“sealed under a clock lid, opens in 3 moves”. Opening: “The clock lid opened. Its bricks can move”.' },
            ],
            tip: 'Nothing you do opens it sooner, so play elsewhere and plan for the bricks underneath.',
          },
          {
            t: 'entry',
            id: 'lid-keyhole',
            title: 'Keyhole lid',
            what: 'A lid with a padlock sign. Somewhere outside it is a [key brick](#key) of a goal colour.',
            how: 'Get the key brick off the board: match it in a line, clear it with a blast, or slide it out through a gate of its colour. The lid opens at once.',
            facts: [
              { label: 'VoiceOver says', text: '“sealed under a keyhole lid, opens to a key brick”. Opening: “The keyhole lid opened. Its bricks can move”.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'The first time you meet each lid, a teaching card explains it. A lid that will not open never makes a board impossible: every board in the game has been checked to be winnable, lids included.',
          },
        ],
      },
      {
        id: 'gates',
        title: 'Gates',
        blocks: [
          {
            t: 'p',
            text: 'Gates are coloured doors set into the board’s frame, one, two or three cells long. A gate whose colour your goals still want glows gently; a gate that cannot take bricks right now does not. A gate of any other colour, or one that is shut, is simply part of the wall.',
          },
          {
            t: 'entry',
            id: 'gate',
            title: 'Open gate',
            board: {
              rows: ['B . Y G', '. . . R+', 'G Y B .'],
              gates: [{ side: 'left', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 3, dir: 'left' }],
              after: { rows: ['B . Y G', '. . . .', 'G Y B .'] },
              caption: 'Carried all the way into the gate of its colour, a brick goes home.',
              alt: 'A board of three rows of four, with a red gate on the left edge of the middle row. Top row: blue, empty, yellow, green. Middle row: three empty cells, then a red brick at the right. Bottom row: green, yellow, blue, empty. An arrow slides the red brick left along the empty middle row. Result: it travels to the edge and out through the red gate. The middle row is now empty; the other bricks are unchanged.',
            },
            what: 'A door that takes bricks of its own colour: plain bricks, keys and line blasters. Bombs, homing darts and colour bombs stop at it.',
            how: 'Three ways in. **Slide** a brick along its lane and carry it right into the gate: let go short of it and the brick stays where you let go. **Match** a brick of its colour on the edge cell in front of it. **Blast** a brick of its colour on that edge cell. Each one counts as sent home.',
            facts: [
              { label: 'Width', text: 'A single brick can use any cell of the gate. A long or big brick needs the gate to span it, and the cells behind it must be free.' },
              { label: 'Goal', text: '“Send or match” a colour: bricks matched or blasted anywhere count as well as bricks sent through the gate.' },
              { label: 'VoiceOver says', text: '“Red gate, 2 cells wide, left side, rows 3 to 4”, and its state: “open”.' },
            ],
          },
          {
            t: 'entry',
            id: 'counted-gate',
            title: 'Counted gate',
            board: {
              rows: ['R+ . G', 'B Y .'],
              gates: [{ side: 'left', at: 0, colour: 'R', kind: 'counted', count: 2 }],
              moves: [{ row: 0, col: 0, dir: 'left' }],
              after: { rows: ['. . G', 'B Y .'], gates: [{ side: 'left', at: 0, colour: 'R', kind: 'counted', count: 1 }] },
              caption: 'A counted gate shows how many more it will take.',
              alt: 'A board of two rows of three, with a red counted gate showing 2 on the left edge of the top row. Top row: red, empty, green. Bottom row: blue, yellow, empty. An arrow slides the red brick left, out through the gate. Result: the red has gone home and the gate now shows 1: it will take one more red brick, then close.',
            },
            what: 'A gate with a number: how many more bricks it will take.',
            how: 'Each brick that goes through it, by slide, match or blast in front of it, takes one off. At zero it **closes for good** and becomes a wall. It counts only bricks that pass through it; bricks of its colour matched elsewhere still count for a “Send or match” goal but leave the gate’s number alone.',
            facts: [
              { label: 'First appears', text: 'Level 11, The Big Day.' },
              { label: 'VoiceOver says', text: '“open, takes 3 more”, then “closed for good”. Tapped: “Red gate: takes 3 more red bricks, then closes”.' },
            ],
            tip: 'On The Big Day the counted gate takes a little more than its goal asks for. Long bricks of its colour can only leave through a gate, so save its room for them.',
          },
          {
            t: 'entry',
            id: 'iced-gate',
            title: 'Iced gate',
            board: {
              rows: ['B+ . . Y', '. G . .', 'R . Y .'],
              gates: [
                { side: 'left', at: 0, colour: 'B' },
                { side: 'right', at: 2, colour: 'R', kind: 'iced' },
              ],
              moves: [{ row: 0, col: 0, dir: 'left' }],
              after: {
                rows: ['. . . Y', '. G . .', 'R . Y .'],
                gates: [
                  { side: 'left', at: 0, colour: 'B' },
                  { side: 'right', at: 2, colour: 'R' },
                ],
              },
              caption: 'Any brick going home thaws the iced gate a little. This one needed just one.',
              alt: 'A board of three rows of four, with a blue gate on the left edge of the top row and an iced red gate on the right edge of the bottom row, one brick away from thawing. Top row: blue at the left, two empty cells, yellow. Middle row: empty, green, empty, empty. Bottom row: red, empty, yellow, empty. An arrow slides the blue brick left, out through the blue gate. Result: the blue has gone home, and the red gate on the right has thawed and is open.',
            },
            what: 'A gate covered in ice. Until it thaws it takes nothing and is part of the wall.',
            how: 'It thaws one step at a time in two ways: **every brick that goes home through any gate** thaws every iced gate by one, and every piece cleared on the edge cell **right in front of it** thaws it by one. When the ice is gone, slide its colour in.',
            facts: [
              { label: 'First appears', text: 'Level 5, Pots and Ice.' },
              { label: 'Looks like, but isn’t', text: 'A [brick in ice](#ice) inside the board. Counted and iced gates are drawn differently, so they never look alike.' },
              { label: 'VoiceOver says', text: '“iced, clear 2 more in front of it to thaw it”, then “open” when it thaws.' },
            ],
            tip: 'Send an easy brick home early, whatever its colour: it starts the thaw while you set up the rest.',
          },
          {
            t: 'entry',
            id: 'staged-gate',
            title: 'Staged gate',
            what: 'A gate behind a dark shutter with a padlock and a stage number. It belongs to a board whose goals come in two **stages**, shown as “Stage 1 / 2” in the order panel.',
            how: 'Finish the first stage’s goals and the second stage begins: the shutter opens and the gate takes its colour. Until then it is part of the wall.',
            facts: [
              { label: 'First appears', text: 'Level 54, on boards where nothing falls.' },
              { label: 'VoiceOver says', text: '“locked until a later stage”, and “New gates open” when the stage changes.' },
            ],
            tip: 'During stage 1, move the second stage’s bricks toward their sealed gate, so they are ready the moment it opens.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Every gate wears its colour’s symbol. With **High-contrast board** on, a gate whose colour sits close to the frame’s gets a two-tone outline. See [Vision, hearing and motion](help:vision-hearing-and-motion).',
          },
        ],
      },
      {
        id: 'portals',
        title: 'Portals',
        blocks: [
          {
            t: 'entry',
            id: 'portal',
            title: 'Portal',
            what: 'A pair of swirling rings set into the board’s frame on two different sides, both marked with the same letter.',
            how: 'Slide a **single** brick (a plain brick, a key or a special) along its lane to the edge cell in front of one ring, and it goes in and comes out of the twin, travelling inward until it meets something. It costs one move. The cell in front of the twin ring must be free, and if a gate of the brick’s colour takes it at that edge, it goes home instead. Long, big, L and T bricks cannot use portals.',
            facts: [
              { label: 'First appears', text: 'Level 58, on boards where nothing falls.' },
              { label: 'VoiceOver says', text: 'The action “Slide left, through the portal”, then “Through the portal, out at row 3, column 5”.' },
            ],
            tip: 'Portals are shortcuts to a far gate: a brick walled in on one side of the board can come out right in front of the gate it needs.',
          },
        ],
      },
      {
        id: 'lookalikes',
        title: 'Telling look-alikes apart',
        blocks: [
          {
            t: 'table',
            head: ['If you see…', 'It is…', 'Because…'],
            rows: [
              ['A sturdier-looking crate', 'A two-layer crate', 'Tap it: it says how many layers are left.'],
              ['A panel over several bricks, with a sign', 'A lid', 'Lids cover bricks; crates fill one cell on their own.'],
              ['Ice inside the board', 'A brick in ice', 'Ice on the frame is an iced gate.'],
              ['A grey brick with “?”', 'A face-down brick', 'It has no colour symbol; a lid never shows “?”.'],
              ['A coloured door with a number', 'A counted gate', 'An iced gate shows ice, a staged gate a dark shutter with a padlock.'],
              ['A swirl in the frame', 'A portal end', 'Gates are coloured; portal ends come in lettered pairs.'],
              ['An ornament in a gap', 'A statue', 'It is scenery: tap it and it says so.'],
            ],
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'Blockers with VoiceOver',
        blocks: [
          {
            t: 'list',
            items: [
              'Blockers and fixtures read as text and pieces you can move as buttons, so you can tell at once what can move. Choosing one that cannot move says, for example, “Crate, 2 layers. It cannot move”.',
              'Each covered brick reads its lid, and each gate is its own element with its width, side, rows or columns, and state.',
              'The **Blockers** rotor jumps between crates, ice, locks, moss and the rest; the **Gates** rotor between gates.',
              'Each piece’s **More Content** includes the blocker on it and whether a goal needs it.',
              'A face-down brick’s colour is never spoken until it has turned over; then you hear “Turned over:” and its colour.',
            ],
          },
          { t: 'p', text: 'Everything else is in [Playing with VoiceOver](help:voiceover).' },
        ],
      },
      {
        id: 'faq',
        title: 'Questions',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Why did my brick stop at the gate instead of going home?',
                a: 'Check five things: the gate is the brick’s colour; it is not iced, full or sealed for a later stage; the brick is not a bomb, homing dart or colour bomb; a long or big brick has a gate as wide as it is; and you carried the brick all the way in. A brick let go just short of its gate stays where you let it go.',
              },
              {
                q: 'I moved a face-down brick and it stayed face-down. Is that a bug?',
                a: 'No. A face-down brick turns over only when a brick next to it leaves the board, never when it moves or a neighbour slides away. This is the same rule the original game always had.',
              },
              {
                q: 'Why is there no hint on this board?',
                a: 'On boards with face-down bricks the hint never suggests a move that would give a hidden colour away. If every good move involves a face-down brick, no hint is shown rather than a hint that cheats.',
              },
              {
                q: 'The moss keeps growing. What can I do?',
                a: 'Moss spreads only on Locks and Moss boards, onto one brick next to it after a move that clears none. Clear a clump with a line beside it as often as you can, and use the **UFO** booster on moss in an awkward spot: boosters never let it grow.',
              },
              {
                q: 'Can a lid or a blocker make a board impossible?',
                a: 'No. Every board has been checked to be winnable. If nothing at all can move, the board reshuffles for free; if moss has choked every column it wilts, and as a last resort the ice or lock on one brick gives way. See [Playing a board](help:playing-a-board#never-stuck).',
              },
            ],
          },
        ],
      },
    ],
    related: ['special-bricks-and-combos', 'board-kinds', 'bricks-specials-and-blockers', 'playing-a-board', 'boosters-and-pause', 'voiceover'],
  },

  {
    slug: 'board-kinds',
    category: 'learn',
    cover: 'board-shapes',
    title: 'The twelve kinds of board',
    summary:
      'Every village’s twelve boards follow the same pattern of twelve kinds, from Send Them Home to Quiet Puzzle. What each kind brings, how boards where bricks fall differ from boards where nothing falls, and what Hard, Super Hard, Boss and Night boards change.',
    keywords:
      'board type kind archetype village twelve 12 gravity falling still no refill send them home slide and match open garden falling garden pots and ice long bricks corner pieces crates and ice locks and moss stone lanes big day quiet puzzle hard super hard boss night tier difficulty plaque',
    host: 'vio',
    hostPose: 'idle',
    sections: [
      {
        id: 'overview',
        title: 'Quick reference',
        blocks: [
          {
            t: 'p',
            text: 'Every village has twelve boards, and board 1 to board 12 of a village is always the same kind, in the same order, so the rhythm of a village quickly becomes familiar. Garden City’s twelve boards (levels 1 to 12) wear these names and teach one kind each; later villages give their boards their own titles but keep the pattern.',
          },
          {
            t: 'table',
            head: ['Board', 'Kind', 'Bricks fall?', 'What it brings'],
            rows: [
              ['1', '[Send Them Home](#send-them-home)', 'No', 'Slide bricks out through their gates.'],
              ['2', '[Slide and Match](#slide-and-match)', 'No', 'Collect colours with lines, send one home.'],
              ['3', '[Open Garden](#open-garden)', 'No', 'A roomy board that opens up as you play.'],
              ['4', '[Falling Garden](#falling-garden)', 'Yes', 'The same goals, with falls and new bricks.'],
              ['5', '[Pots and Ice](#pots-and-ice)', 'No', 'Crates, bricks in ice and an iced gate.'],
              ['6', '[Long Bricks](#long-bricks)', 'Usually', 'Long bricks and gates wide enough for them.'],
              ['7', '[Corner Pieces](#corner-pieces)', 'Yes, no new bricks', 'L and T bricks.'],
              ['8', '[Crates and Ice](#crates-and-ice)', 'Usually', 'Crates of one and two layers, more ice.'],
              ['9', '[Locks and Moss](#locks-and-moss)', 'Yes', 'Locks to free and moss that spreads.'],
              ['10', '[Stone Lanes](#stone-lanes)', 'Usually', 'Statues that carve the board into lanes.'],
              ['11', '[The Big Day](#the-big-day)', 'Yes', 'The village finale: a bit of everything.'],
              ['12', '[Quiet Puzzle](#quiet-puzzle)', 'Yes, no new bricks', 'A few big bricks and wide gates.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: '“Usually” means: from Clover Farm up to level 408, two of Long Bricks, Crates and Ice and Stone Lanes in each village are played with nothing falling, and the third falls; which one falls changes from village to village. From level 409 all three fall.',
          },
        ],
      },
      {
        id: 'gravity',
        title: 'Boards where bricks fall, and boards where they don’t',
        blocks: [
          {
            t: 'table',
            head: ['What changes', 'Nothing falls', 'Bricks fall'],
            rows: [
              ['After a match', 'The cleared cells stay empty, opening lanes for slides.', 'Bricks above fall into the gap, and single bricks slide in diagonally round obstacles.'],
              ['New bricks', 'Never.', 'Drop in from the top, but only until the board is as full as it started. Corner Pieces and Quiet Puzzle get none.'],
              ['Slides', 'In any direction.', 'Only sideways, or straight out through a gate (including down into a gate in the floor).'],
              ['Gates', 'On any side.', 'On the sides and the floor.'],
              ['Cascades', 'Rare.', 'Common: falling bricks can make new lines.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['B Y G', 'R R Y', 'G B R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['B Y G', '. . .', 'G B Y'] },
              caption: 'Where nothing falls, a match leaves a gap you can slide through.',
              alt: 'A board where nothing falls, three rows of three. Top row: blue, yellow, green. Middle row: red, red, yellow. Bottom row: green, blue, red. An arrow swaps the red at the bottom right up with the yellow above it. Result: three reds clear and the middle row is left empty: nothing falls into it. The yellow is now at the bottom right.',
            },
          },
          {
            t: 'board',
            board: {
              rows: ['. . .', 'B Y G', 'R R Y', 'G B R'],
              moves: [{ row: 3, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['. . .', 'O K B', 'B Y G', 'G B Y'] },
              caption: 'Where bricks fall, the bricks above drop into the gap and new ones arrive, up to the board’s starting count.',
              alt: 'A board where bricks fall, four rows of three, with the top row empty. Row 2: blue, yellow, green. Row 3: red, red, yellow. Row 4: green, blue, red. An arrow swaps the red at the bottom right up with the yellow above it. Result: the three reds in row 3 clear, the blue, yellow and green above fall into row 3, and three new bricks, here orange, pink and blue, drop into row 2. The top row stays empty, because the board refills only to as many bricks as it started with. The yellow is now at the bottom right.',
            },
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'You can never get stuck. With no move left, the board reshuffles for free; a board going nowhere is quietly dealt again; and if a board runs short of a colour a goal needs, spare bricks take that colour (or, where bricks fall, the colour starts arriving from the top).',
          },
        ],
      },
      {
        id: 'kinds',
        title: 'The twelve kinds',
        blocks: [
          {
            t: 'entry',
            id: 'send-them-home',
            title: '1 · Send Them Home',
            board: {
              rows: ['R+ . . B', '. Y . .', 'B . R .'],
              gates: [
                { side: 'left', at: 0, colour: 'R' },
                { side: 'right', at: 2, colour: 'B' },
              ],
              moves: [{ row: 0, col: 0, dir: 'left' }],
              caption: 'The first kind: carry bricks into the gates of their colour.',
              alt: 'A board of three rows of four, with a red gate on the left edge of the top row and a blue gate on the right edge of the bottom row. Top row: red at the left, two empty cells, blue at the right. Middle row: empty, yellow, empty, empty. Bottom row: blue, empty, red, empty. An arrow slides the top-left red brick left, out through the red gate next to it.',
            },
            what: 'A board where nothing falls, about two thirds full, with gates in the goal colours. The goals are “Send or match” two colours, or three later in the Journey.',
            how: 'Find a brick of a goal colour with a clear lane to its gate and carry it in. When a lane is blocked, clear the bricks in the way by matching them, or slide them aside.',
            facts: [{ label: 'First met', text: 'Level 1.' }],
            tip: 'A goal colour can also be matched anywhere: three in a line count as three, without a gate.',
          },
          {
            t: 'entry',
            id: 'slide-and-match',
            title: '2 · Slide and Match',
            what: 'Nothing falls. Two colours to **Collect** with lines, and one to send home.',
            how: 'Slide a brick next to two of its colour to make a line, or swap two neighbours. Each line clears its cells for good, so every match opens space for the next slide.',
            facts: [{ label: 'First met', text: 'Level 2.' }],
            tip: 'A slide can travel any distance and stops where you let go, which makes lines a swap could never reach.',
          },
          {
            t: 'entry',
            id: 'open-garden',
            title: '3 · Open Garden',
            what: 'A bigger board (8×8 at first) where nothing falls: send two colours home and collect a third.',
            how: 'Plan a few moves ahead. Every brick you clear leaves room to slide, so clearing the bricks between a goal brick and its gate is often better than the nearest match.',
            facts: [{ label: 'First met', text: 'Level 3.' }],
          },
          {
            t: 'entry',
            id: 'falling-garden',
            title: '4 · Falling Garden',
            what: 'The same goals as Open Garden, but bricks fall and new ones drop in from the top.',
            how: 'Work low on the board: matches near the bottom move everything above them and set up cascades. Slide sideways into gaps, or straight down into a gate in the floor.',
            facts: [{ label: 'First met', text: 'Level 4.' }],
            tip: 'The collect goal here grows along the Journey; cascades do much of the work for you.',
          },
          {
            t: 'entry',
            id: 'pots-and-ice',
            title: '5 · Pots and Ice',
            what: 'Nothing falls. One-layer crates, bricks in ice and an **iced gate**, usually in a third colour. Goals: send three colours home and break some crates.',
            how: 'Break crates and ice with lines beside them. Send any brick home early: every brick that leaves through a gate thaws the iced gate a little.',
            facts: [{ label: 'First met', text: 'Level 5. Explained in [Every blocker, lid and gate](help:blockers-encyclopedia#iced-gate).' }],
          },
          {
            t: 'entry',
            id: 'long-bricks',
            title: '6 · Long Bricks',
            what: 'Long bricks (1×2 and 2×1, later 1×3 and 3×1) in the goal colours, each with a gate somewhere wide enough to take it. Goals: send two colours home, and each long brick counts every cell.',
            how: 'Line a long brick up with a gate that spans it and make sure the cells behind it are free. Long bricks are never swapped or blasted, so clear their lanes with lines of single bricks.',
            facts: [{ label: 'First met', text: 'Level 6.' }],
          },
          {
            t: 'entry',
            id: 'corner-pieces',
            title: '7 · Corner Pieces',
            what: 'L and T bricks (later some long ones) and a few singles, in just the two goal colours, on a board where bricks fall but **no new ones arrive**. One colour’s gate stands low on the left, the other’s low on the right, and the floor is lined with gates three wide in the two colours by turns.',
            how: 'Every brick that settles lands over or beside a gate, so think about the order: send the piece that frees the most room first.',
            facts: [{ label: 'First met', text: 'Level 7.' }],
          },
          {
            t: 'entry',
            id: 'crates-and-ice',
            title: '8 · Crates and Ice',
            what: 'More crates (two layers from Clover Farm on) and bricks in ice. Goals: break crates, where every layer counts, and send one colour home.',
            how: 'Put lines next to crates, especially lines that touch two at once. A bomb’s double blast is ideal for two-layer crates.',
            facts: [{ label: 'First met', text: 'Level 8.' }],
          },
          {
            t: 'entry',
            id: 'locks-and-moss',
            title: '9 · Locks and Moss',
            what: 'Bricks fall. Locked bricks and moss, and the only kind where moss spreads. Goals: undo every lock, clear some moss and send one colour home.',
            how: 'Free locks with lines **through** them; clear moss with lines **beside** it. Clear a little moss whenever you can, before it creeps further.',
            facts: [{ label: 'First met', text: 'Level 9.' }],
          },
          {
            t: 'entry',
            id: 'stone-lanes',
            title: '10 · Stone Lanes',
            board: {
              rows: ['Y . . . .', 'R . s . B', 'G . s . .', 'B . . . .'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              caption: 'Statues carve lanes: this red cannot reach its gate along its own row.',
              alt: 'A board where nothing falls, four rows of five, with a red gate on the right edge of row 2. A column of two statues stands in the middle of rows 2 and 3. Row 1: yellow at the left, then four empty cells. Row 2: red at the left, empty, statue, empty, blue. Row 3: green at the left, empty, statue, two empty cells. Row 4: blue at the left, then four empty cells. The red brick’s lane to its gate is blocked by the statue; the top and bottom rows are the open lanes round it.',
            },
            what: 'Statues stand in short columns across the board, with one long brick and, later on, a few crates. Goals: send two colours home and collect a third.',
            how: 'Read the lanes before moving: statues never break, so bring bricks round by the open rows. A line blaster’s blast passes over statues.',
            facts: [{ label: 'First met', text: 'Level 10.' }],
          },
          {
            t: 'entry',
            id: 'the-big-day',
            title: '11 · The Big Day',
            what: 'The village finale, where bricks fall: long and big bricks, crates (two layers later on), ice, and later locks; an **iced gate** in the first goal colour, a **counted gate** in the second, and often a **sealed bed**, a clock lid over two floor cells in a corner. Goals: send two colours home and break crates.',
            how: 'Start the thaw early by sending any brick home, save the counted gate’s room for the bricks that can only leave by a gate, and let the sealed bed open by itself while you work elsewhere.',
            facts: [
              { label: 'First met', text: 'Level 11.' },
              { label: 'Good to know', text: 'Level 2000, the end of the Journey, is a Big Day at night.' },
            ],
          },
          {
            t: 'entry',
            id: 'quiet-puzzle',
            title: '12 · Quiet Puzzle',
            what: 'A smaller board (8×6 at first) with a few big bricks (2×2, 1×2 and 2×1, later 1×3, 3×1, L and T) and some singles, in the two goal colours only. Bricks fall but no new ones arrive, and the gates are set like Corner Pieces’: low on each side and right along the floor.',
            how: 'Take your time. Nothing new arrives, so every move changes the board for good. Work out which piece is blocking which, then send them home in that order.',
            facts: [{ label: 'First met', text: 'Level 12.' }],
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Level 31 on the beach: 16 moves left, goals of 8 yellow and 8 blue. Big joined bricks are stacked at the bottom of the board: a long blue bar, a tall blue column and a yellow piece bent into a C, with blue and yellow gates on the edges.',
            caption: 'Big bricks and wide gates, near the start of the Journey.',
          },
        ],
      },
      {
        id: 'extras',
        title: 'What else a board can add',
        blocks: [
          {
            t: 'p',
            text: 'On top of its kind, a board can carry a few extras. Each one gets its own teaching card the first time you meet it.',
          },
          {
            t: 'list',
            items: [
              '**A shaped board.** Many boards follow the outline of their village, with gaps in the plate. A gap stops a slide like the frame does.',
              '**A sealed room** under one of the [five lids](help:blockers-encyclopedia#lids), on some boards of every kind except Corner Pieces and Quiet Puzzle.',
              '**Face-down “?” bricks**, from level 49. See [Face-down bricks](help:blockers-encyclopedia#face-down).',
              '**Staged goals** with sealed gates, from level 54, and **portals**, from level 58, both on boards where nothing falls.',
              '**Extra crates or ice** on the plainer kinds.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'In version 5.1.1, sealed rooms other than the Big Day’s sealed bed, face-down bricks, staged goals, portals and the extra crates and ice appear on boards up to level 408. Shaped boards appear all along the Journey.',
          },
          {
            t: 'p',
            text: 'Boards also grow along the Journey: up to 9×9, with more colours (three or four at first, five or six later), more obstacles and bigger goals. Within a village, no two boards share a layout.',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Hard, Super Hard, Boss and Night boards',
        blocks: [
          {
            t: 'p',
            text: 'Some boards are harder than their neighbours. The level stop on the Journey map shows a plaque before you play (**HARD**, **SUPER HARD**, **BOSS** or **NIGHT**), and the board wears the same plaque under its header.',
          },
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Level 35 at dusk, 28 moves left, with a purple HARD plaque under the goals: 2 yellow, 5 pink and 3 sandcastles. The castle-shaped board has a big pink brick, moss-covered bricks and four sandcastle crates, with yellow, pink and red gates.',
            caption: 'A Hard board wears its plaque under the header.',
          },
          {
            t: 'table',
            head: ['Tier', 'Where', 'What changes', 'Coins for a clear'],
            rows: [
              ['Normal', 'Most boards.', 'No plaque.', '25'],
              ['Hard', 'About one board in three from level 14.', 'Goals ask for about 15% more, and there are a few more obstacles.', '50'],
              ['Super Hard', 'About one board in seven from level 39.', 'Goals ask for about 30% more.', '80'],
              ['Boss', 'The last board of each chapter of twenty, from level 40, unless it is a Night board.', 'Goals ask for about 40% more.', '80'],
              ['Night', 'Every 25th level from 115 (115, 140, 165…).', 'Set after dark. It plays like a Hard board.', '50'],
            ],
          },
          {
            t: 'list',
            items: [
              'Super Hard and Boss boards also get a few more obstacles, and far along the Journey they can use one more colour, which makes lines harder to find.',
              'On harder tiers the moves are set so that fewer players finish on the first try. Every board is still checked to be winnable.',
              'Two or more stars add a target bonus to the coins, and events can double or triple them. See [Playing a board](help:playing-a-board#tiers).',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'VoiceOver reads the tier after the level number in the board summary, for example “Boss”.',
          },
        ],
      },
      {
        id: 'approach',
        title: 'Ways in, whatever the kind',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Read the order panel first.** “Send or match” goals take bricks of that colour however they leave; “Collect” goals want lines or blasts; crate, lock and moss goals want lines beside or through.',
              '**Find the gates.** Gates your goals still want glow gently. Check their width before you plan a long brick’s route.',
              '**Count your moves against the goals.** If a goal needs eight bricks and you have fifteen moves, look for specials: one line blaster can do several moves’ work.',
              '**On boards where nothing falls, think in lanes.** Each match leaves a gap; choose the matches that open the lane you need next.',
              '**On boards where bricks fall, work from the bottom.** Low matches move more of the board and start cascades.',
              '**Stuck? Ask for a hint.** You get a free Hint every attempt, and with VoiceOver the two-finger double tap gives one at any time.',
            ],
          },
        ],
      },
      {
        id: 'faq',
        title: 'Questions',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Why can’t I slide a brick up or down on this board?',
                a: 'It is a board where bricks fall. A brick would only fall straight back, so on these boards bricks slide sideways, or straight out through a gate, including down into a gate in the floor.',
              },
              {
                q: 'Why have new bricks stopped arriving?',
                a: 'On boards where bricks fall, new ones only refill the board to as many bricks as it started with, so there is always room to slide. Corner Pieces and Quiet Puzzle boards never refill at all: they empty as you solve them.',
              },
              {
                q: 'How can I tell whether a board is Hard before I start?',
                a: 'Look at the level stop on the Journey map: Hard, Super Hard, Boss and Night boards carry a plaque there, and the same plaque under the board’s header.',
              },
              {
                q: 'Why does board 6 of this village look nothing like board 6 of the last one?',
                a: 'The kind sets the idea (long bricks and wide gates); the village sets the look, the shape of the board, the colours and how big the challenge is, so the same kind is laid out differently from one village to the next.',
              },
              {
                q: 'Do Boss boards give anything special?',
                a: 'A Boss board closes a chapter and pays the same 80 coins as a Super Hard board, plus the target bonus for two or more stars. Clearing it completes the chapter.',
              },
            ],
          },
        ],
      },
    ],
    related: ['special-bricks-and-combos', 'blockers-encyclopedia', 'playing-a-board', 'bricks-specials-and-blockers', 'journey-and-villages', 'lives-moves-and-undos'],
  },
];
