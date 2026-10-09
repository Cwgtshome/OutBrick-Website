import type { HelpArticle } from '../../model.ts';

/** Getting started and playing a board, in English. Checked against 5.1.1 (68). */
export const playArticles: HelpArticle[] = [
  {
    slug: 'welcome',
    category: 'start',
    cover: 'garden-teach',
    title: 'Welcome to OutBrick: your first board',
    summary:
      'What OutBrick is, how the teaching cards work, how to read a board’s goals, and what happens when you clear it.',
    keywords: 'new player beginner tutorial how to play first time start',
    sections: [
      {
        id: 'what',
        title: 'What OutBrick is',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick is a calm **Slide & Match** puzzle. Each board is a garden of toy bricks with coloured gates on its edges. **Slide** a brick into the gate of its own colour and it goes home, or **swap** two neighbours to make a line of three and clear them. Each board has goals to meet within a number of moves, and there is never a clock.',
          },
          {
            t: 'list',
            items: [
              '**2,000 levels** along the Journey, through **167 villages**, each with its own look and twelve kinds of board.',
              '**Nine brick friends** (Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry and Poppy) cheer you on in text bubbles.',
              '**Free to play.** Optional videos and purchases exist, but lives come back on their own and you never need to spend to keep playing.',
            ],
          },
        ],
      },
      {
        id: 'first-board',
        title: 'Your first board',
        blocks: [
          {
            t: 'p',
            text: 'From **Home**, tap the big green **Level** button. The first time you meet a new idea, a short teaching card shows it with a moving hand. Tap anywhere to start playing.',
          },
          {
            t: 'shot',
            id: 'garden-teach',
            alt: 'A Garden City board with red, purple and orange bricks. A pink teaching card at the bottom reads: Slide a brick next to two of its colour to make a line, or swipe it into a neighbour to swap them. Lines clear! Below it: Your turn, try it! A hand points at a brick.',
            caption: 'A teaching card on level 2. Each new idea gets one card, the first time you meet it.',
          },
          {
            t: 'steps',
            items: [
              '**Slide:** swipe a brick toward an empty space. It travels until you let go or it meets something. Carry it into the gate of its colour and it leaves the board.',
              '**Swap:** swipe a brick into a neighbour. If that makes a line of three or more (or a 2×2 square), they clear. If not, the bricks spring back and **no move is used**.',
              '**Watch the goals** in the panel at the top. Each tick means a goal is done.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Not sure what to do? Tap the **Hint** booster in the tray. You get a free Hint, Rocket and UFO on every attempt.',
          },
        ],
      },
      {
        id: 'goals',
        title: 'Reading the goals',
        blocks: [
          {
            t: 'p',
            text: 'The **order panel** at the top shows what this board wants and how many are left: bricks of a colour to send home or match, crates to break, locks to undo or moss to clear. Each goal wears the same colour-blind symbol as its bricks. Some boards come in two **stages**: finish the first goals and new gates open for the second.',
          },
          { t: 'p', text: 'Every part of the screen is explained in [Playing a board](help:playing-a-board#screen).' },
        ],
      },
      {
        id: 'clear',
        title: 'When you clear a board',
        blocks: [
          {
            t: 'shot',
            id: 'clear',
            alt: 'The win card: a gold ribbon reading Rocket Ridge 4, a Chapter complete badge, three gold stars, a green brick friend celebrating, the word Brilliant!, a score of 5,470, plus 125 coins, a First try! chip, a Journey chest line, and Home, Next and Share buttons.',
            caption: 'The win card: your stars, score, coins and any rewards picked up on the way.',
          },
          {
            t: 'list',
            items: [
              'Any moves you have left turn into line blasters and go off, adding 150 points each. Tap to skip the show.',
              'You always earn at least one star for a clear; a higher score earns two or three.',
              '**Next** goes on to the next board; **Home** takes you back. With **Quick play** on (Settings › Game), a win goes straight to the next board.',
              'Winning never costs a life. Lives are only used when an attempt is lost. See [Lives, moves and undos](help:lives-moves-and-undos).',
            ],
          },
        ],
      },
      {
        id: 'next',
        title: 'Where to go next',
        blocks: [
          {
            t: 'list',
            items: [
              '[A tour of every menu](help:menus-tour), so you know what every button does.',
              '[Special bricks, blockers and board kinds](help:bricks-specials-and-blockers), the moment you meet something new.',
              '[Accessibility](help:accessibility) and [Playing with VoiceOver](help:voiceover), if you want the game to fit you better.',
            ],
          },
        ],
      },
    ],
    related: ['menus-tour', 'playing-a-board', 'bricks-specials-and-blockers', 'accessibility'],
  },

  {
    slug: 'menus-tour',
    category: 'start',
    cover: 'home',
    title: 'A tour of every menu',
    summary:
      'The bottom bar, Home, the Journey map, the Shop, the Brick Pass, Leaders, your Profile, the Collection and Settings: what each one is for and how to reach it.',
    keywords: 'navigation tabs bottom bar where is find button profile collection gear',
    sections: [
      {
        id: 'tab-bar',
        title: 'The bottom bar',
        blocks: [
          { t: 'p', text: 'Five tabs run along the bottom of the screen. You can also swipe left or right to move between them.' },
          {
            t: 'table',
            head: ['Tab', 'What it holds'],
            rows: [
              ['**Home**', 'Your friends on their brick stage and the big **Level** button.'],
              ['**Leaders**', 'The leaderboard. It unlocks at level 21.'],
              ['**Journey**', 'The raised centre tab: the map of all 2,000 levels.'],
              ['**Shop**', 'Coins, boosters, bundles, lives and the wardrobe.'],
              ['**Pass**', 'The Brick Pass season, plus shortcuts to Missions and the Collection.'],
            ],
          },
        ],
      },
      {
        id: 'home',
        title: 'Home',
        blocks: [
          {
            t: 'shot',
            id: 'home',
            alt: 'Home: along the top, the avatar, 2,580 coins, a 12-day streak, Missions and the Settings gear. Below the OUTBRICK logo, an event card announces the Target Challenge, starting soon. Three brick friends in sun hats stand on a toy-brick lawn above a green Level 214 button. The bottom bar shows Home, Leaders, Journey, Shop and Pass.',
            caption: 'Home. The top row, from left: your avatar, coins, day streak, Missions, the Brick Wheel when it is ready, and the Settings gear.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Avatar', text: 'Opens your **Profile**.' },
              { term: 'Coins', text: 'Opens the Shop.' },
              { term: 'Streak (flame)', text: 'Shows your day streak and when the next streak reward comes. A streak grows each day you clear a board.' },
              { term: 'Missions', text: 'Three things to do today and three for the week.' },
              { term: 'Brick Wheel', text: 'A free spin each day for coins or a booster.' },
              { term: 'Gear', text: 'Opens [Settings](help:settings).' },
              { term: 'Event banner', text: 'The live or upcoming event. Tap it to go there.' },
              { term: 'Level button', text: 'Plays your current board.' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Your **Daily Brick** (100 coins) arrives on its own: clear a board on a new day and it is paid on Home with a short banner.',
          },
        ],
      },
      {
        id: 'journey',
        title: 'The Journey map',
        blocks: [
          {
            t: 'shot',
            id: 'journey',
            alt: 'The Journey map: a cobbled path through a pink-blossom village with level stops 213, 214 (glowing, with a Play label) and 215. Badges run down both sides, and the header shows the avatar, lives (Full), coins and stars 9 of 36.',
            caption: 'The Journey. Your current level glows; badges down each side lead to events, rewards and offers.',
          },
          {
            t: 'list',
            items: [
              '**Header:** your avatar, **lives** (tap to see when the next one comes), coins, the village’s **stars** (tap to see star rewards) and the gear.',
              '**Level stops:** tap your current level or any cleared one to play it straight away. A locked stop tells you how many levels away it is.',
              '**Right-hand badges:** the event, star and village-gift rewards, races, **Game Center** (when you are signed in) and **All villages**, an atlas of every place you can visit.',
              '**Left-hand badges:** the streak challenge, the piggy bank, the Brick Pass, deals, the Shop door and other rewards.',
              '**My level:** the pin button brings you back to your current level.',
            ],
          },
          { t: 'p', text: 'More in [The Journey and its villages](help:journey-and-villages).' },
        ],
      },
      {
        id: 'shop-pass-leaders',
        title: 'Shop, Pass and Leaders',
        blocks: [
          {
            t: 'shots',
            items: [
              { id: 'shop', alt: 'The Shop: 2,580 coins and a Special Offers shelf with a one-time Starter Bundle of coins, lives and boosters, the Piggy Bank, and a Booster Pass of 60 minutes of free UFOs and Rockets.', caption: 'Shop. **Restore Purchase** is at the very bottom.' },
              { id: 'pass', alt: 'The Brick Pass tab with Free and Premium reward columns climbing through tiers.', caption: 'Pass: 30 tiers of free and premium rewards.' },
              { id: 'leaders', alt: 'The Leaderboard tab with example standings: a podium for the top three players with their flags and levels, then a ranked list, and your own row pinned at the bottom (87th, level 214). A bar at the top offers Game Center sign-in to see friends.', caption: 'Leaders: one all-time board (example standings shown).' },
            ],
          },
          {
            t: 'p',
            text: 'See [The Shop, purchases and restoring](help:shop-and-purchases) and [Rewards, events and the Brick Pass](help:rewards-and-events).',
          },
        ],
      },
      {
        id: 'profile-collection',
        title: 'Your Profile and the Collection',
        blocks: [
          {
            t: 'list',
            items: [
              '**Profile** (tap your avatar): your name, level, country flag, the Collection button and your stats: first-try wins, best streak, total clears and more. The game version is at the foot.',
              '**Collection** (from the Profile, or the Pass tab, unlocked at level 95): Brick Cards, Chapter Badges, Keepsakes, Seasonal Cards and the **Wardrobe**.',
            ],
          },
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'The Collection on the Wardrobe section: King Bricko wearing a gold crown with a Wear it button, then tabs for Outfits, Board plates, Palettes and Brick finish, and the Seaside Set and Candy Shop Set below.',
            caption: 'The Wardrobe changes how the game looks, never how it plays.',
          },
          { t: 'p', text: 'More in [Friends, the Collection and the Wardrobe](help:friends-and-wardrobe).' },
          { t: 'shots', items: [{ id: 'profile', alt: 'Your Profile: the blue friend as avatar with an edit pencil, the name Riley, Level 214, Automatic region, Collection 33 of 39, and General Stats: 96 first-try wins, 74 beat-the-target clears, a best streak of 21, 213 total clears, 4,218 moves and 3 perfect clears.', caption: 'Profile.' }, { id: 'collection', alt: 'The Collection on Seasonal Cards: Season 2, Night Shift, 0 of 9 cards and 0 Sparks, the rules (a card every third new level from level 96, duplicates give a Spark, three Sparks choose a missing card), and the nine friends, each marked Missing. Brick Cards, 33 of 39, start below.', caption: 'Collection.' }] },
        ],
      },
      {
        id: 'settings',
        title: 'Settings',
        blocks: [
          {
            t: 'p',
            text: 'Tap the gear on Home or the Journey. Settings has two tabs, **Game** and **Accessibility**, and ends with links to support, the community and the legal pages. Every row is explained in [Every setting explained](help:settings).',
          },
        ],
      },
    ],
    related: ['welcome', 'settings', 'journey-and-villages', 'playing-a-board'],
  },

  {
    slug: 'playing-a-board',
    category: 'play',
    cover: 'board-slide',
    title: 'Playing a board',
    summary:
      'Every part of the board screen, how sliding and swapping work, what counts as a move, how stars and score work, and what Hard, Super Hard, Boss and Night boards mean.',
    keywords: 'hud header moves counter star track order panel goals slide swap gate match score stars tier hard boss night',
    sections: [
      {
        id: 'screen',
        title: 'The board screen',
        blocks: [
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'A Slide & Match board on a beach, level 25. The header shows 5 lives, 15 moves left, a star track with one star lit, goals of 1 yellow and 3 blue bricks, and the host friend in a sailor cap. The board holds pink, yellow, orange and blue bricks, each stamped with its colour’s shape, with yellow, orange and blue gates on its edges and a gold keyhole lid over a row of bricks. The tray below has Pause, then Hint, Rocket and UFO marked Free, and Undo with 6.',
            caption: 'The board screen: header, grid and tray.',
          },
          {
            t: 'table',
            head: ['Part', 'What it tells you'],
            rows: [
              ['Level and lives', 'The level number, then a heart with your lives. Tap the heart to see when the next life comes.'],
              ['Moves', 'The big number: moves left. It pulses at three, and in the last five the board’s edge glows warm.'],
              ['Win streak', 'A small chain of bricks under the moves when you are on a winning run.'],
              ['Star track', 'Fills as your score rises, with a star at each threshold.'],
              ['Order panel', 'The goals and how many are left. A tick marks each one done. Staged boards show “Stage 1 / 2”.'],
              ['Friend', 'The village’s host friend. Tap them for a giggle or a wave.'],
              ['Tier plaque', 'Hard, Super Hard, Boss or Night boards wear a plaque under the header.'],
              ['Tray', 'Pause, then Hint, Rocket, UFO and Undo. See [Boosters, hints and Pause](help:boosters-and-pause).'],
            ],
          },
        ],
      },
      {
        id: 'slide',
        title: 'Sliding bricks home',
        blocks: [
          {
            t: 'list',
            items: [
              'Swipe a brick toward an empty space. It stops where you let go, at the nearest whole cell, or sooner if it meets a piece, a blocker or the edge.',
              'Drag less than half a cell and it springs back without using a move.',
              'A brick leaves only through an open **gate of its own colour**. Any other gate is a wall.',
              'Plain bricks, keys and line blasters can go out through a gate. Bombs, darts and colour bombs stop at a gate.',
              'Long and big bricks slide as one piece and need a gate as wide as they are. They count every cell they cover.',
              'On boards where bricks fall, you can slide sideways, or straight out through a gate.',
              'Each slide uses one move.',
            ],
          },
        ],
      },
      {
        id: 'swap',
        title: 'Swapping and matching',
        blocks: [
          {
            t: 'list',
            items: [
              'Swipe a brick into its neighbour to swap them. The swap stays if it makes a line of three or more, a 2×2 square, sets off two specials together, or uses a colour bomb.',
              'Otherwise the bricks bounce back, you feel two short taps, and **no move is used**.',
              'Matching four, five, an L or T shape, or a square makes a special brick. See [Special bricks](help:bricks-specials-and-blockers#specials).',
              'Tap a special brick to set it off where it stands. That uses a move.',
            ],
          },
        ],
      },
      {
        id: 'never-stuck',
        title: 'You can never get stuck',
        blocks: [
          {
            t: 'p',
            text: 'If no move is possible, the board reshuffles for free under a **Shuffle!** banner: no move and no life is used. If a board has moves but none of them can ever reach your goals, it is quietly dealt again. And if a board runs short of a colour a goal needs, spare bricks are recoloured so the goal can always be met.',
          },
        ],
      },
      {
        id: 'stars',
        title: 'Score, stars and the end-of-board bonus',
        blocks: [
          {
            t: 'list',
            items: [
              'Every clear earns at least **one star**. A higher score earns two or three; the star track shows how close you are.',
              'When the last goal is met, you see **Goal complete!** Each move you have left becomes a line blaster, they all go off, and each leftover move adds 150 points. Tap to skip.',
              'Replay a cleared board from the Journey any time to improve its stars.',
            ],
          },
          {
            t: 'shot',
            id: 'clear',
            alt: 'The win card with three gold stars, the word Brilliant!, a score of 5,470 and plus 125 coins.',
            caption: 'Three stars: Brilliant! Two: Great! One: Cleared!',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Hard, Super Hard, Boss and Night boards',
        blocks: [
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Level 35 at dusk, 28 moves left, with a purple HARD plaque under the goals: 2 yellow, 5 pink and 3 sandcastles. The castle-shaped board has a big pink brick, moss-covered bricks and four sandcastle crates, with yellow, pink and red gates.',
            caption: 'A Hard board wears its plaque under the header.',
          },
          {
            t: 'table',
            head: ['Tier', 'What changes', 'Coins for a clear'],
            rows: [
              ['Normal', 'No plaque.', '25'],
              ['Hard', 'Goals ask for about 15% more, and there are a few more obstacles.', '50'],
              ['Super Hard', 'Goals ask for about 30% more.', '80'],
              ['Boss', 'The last board of a chapter, from level 40. Goals ask for about 40% more.', '80'],
              ['Night', 'A board set after dark. It plays like a Hard board.', '50'],
            ],
          },
          {
            t: 'p',
            text: 'Two or more stars add a target bonus on top. Events can double or triple the coins for a clear.',
          },
        ],
      },
    ],
    related: ['bricks-specials-and-blockers', 'boosters-and-pause', 'lives-moves-and-undos', 'voiceover'],
  },

  {
    slug: 'bricks-specials-and-blockers',
    category: 'play',
    cover: 'board-shapes',
    title: 'Special bricks, blockers and board kinds',
    summary:
      'How to make every special brick and combo, what each blocker, lid and gate does, face-down bricks, portals, long bricks, and the twelve kinds of board in every village.',
    keywords: 'bomb line blaster colour bomb color bomb dart combo crate ice gel lock moss statue lid sealed room counter key keyhole clock gate iced counted portal face-down question mark long brick L T shape',
    sections: [
      {
        id: 'specials',
        title: 'Special bricks',
        blocks: [
          {
            t: 'table',
            head: ['Special', 'How to make it', 'What it does'],
            rows: [
              ['Line blaster', 'Four in a line.', 'Clears its whole row or column, along the direction you moved.'],
              ['Bomb', 'An L, T or + shape.', 'Blasts the 3×3 square around it, twice.'],
              ['Colour bomb', 'Five in a line.', 'Takes every plain brick of one colour: swap it with that colour.'],
              ['Homing dart', 'A 2×2 square.', 'Flies to a piece a goal needs.'],
            ],
          },
          {
            t: 'p',
            text: 'Tap a special to set it off where it stands, or swap it into a neighbour. A line blaster can also be slid out through a gate of its colour without going off.',
          },
        ],
      },
      {
        id: 'combos',
        title: 'Combos',
        blocks: [
          { t: 'p', text: 'Swap two specials together for something bigger:' },
          {
            t: 'table',
            head: ['Swap together', 'Result'],
            rows: [
              ['Line blaster + line blaster', 'A cross: one row and one column.'],
              ['Line blaster + bomb', 'A cross three lanes wide.'],
              ['Bomb + bomb', 'A 5×5 blast.'],
              ['Colour bomb + any special', 'Every brick of that colour becomes that special, and they all go off.'],
              ['Colour bomb + colour bomb', 'The whole board.'],
              ['Dart + any special', 'The dart carries the special to its target. Two darts hit three targets.'],
            ],
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Blockers',
        blocks: [
          {
            t: 'p',
            text: 'Tap any blocker to see a one-line reminder of how to clear it. Their look changes with the village (hay bales on the farm, flower pots in Garden City), but the rules stay the same.',
          },
          {
            t: 'table',
            head: ['Blocker', 'What it does', 'How to clear it'],
            rows: [
              ['Crate', 'Stops sliding bricks. One or two layers.', 'Make a line beside it; each line breaks a layer.'],
              ['Ice (gel)', 'Holds the brick inside it still.', 'Make a line beside it.'],
              ['Lock', 'The brick cannot move.', 'Make a line **through** it. A line beside it is not enough.'],
              ['Moss', 'Creeps onto a brick after any move that clears nothing.', 'Make a line beside it.'],
              ['Statue', 'Stands in a gap: nothing slides through it.', 'It stays. Find another lane.'],
            ],
          },
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Level 35 at dusk, 28 moves left, with a purple HARD plaque under the goals: 2 yellow, 5 pink and 3 sandcastles. The castle-shaped board has a big pink brick, moss-covered bricks and four sandcastle crates, with yellow, pink and red gates.',
            caption: 'Sandcastle crates and moss on the same board.',
          },
        ],
      },
      {
        id: 'lids',
        title: 'Sealed rooms and their lids',
        blocks: [
          { t: 'p', text: 'Some bricks sit under a lid and cannot move until it opens. There are five kinds of lid:' },
          {
            t: 'table',
            head: ['Lid', 'Opens when…'],
            rows: [
              ['Counter', 'Enough bricks of any colour have left the board (the number on the lid).'],
              ['Colour counter', 'Enough bricks of its own colour have left or been matched.'],
              ['Stained-glass key', 'You make a line of its colour right beside it.'],
              ['Brass clock', 'You have made its number of moves.'],
              ['Keyhole', 'The key brick leaves the board, matched or slid out through its gate.'],
            ],
          },
        ],
      },
      {
        id: 'gates',
        title: 'Gates',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Open gate', text: 'Takes bricks of its colour. Its width matters for long bricks.' },
              { term: 'Iced gate', text: 'Thaws a little each time any brick goes home, or when pieces in front of it clear. Once it opens, slide its colour in.' },
              { term: 'Counted gate', text: 'Takes only so many bricks, then shuts for good. Choose which ones to send.' },
              { term: 'Staged gate', text: 'Stays sealed until the board’s second stage of goals begins.' },
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Gates wear their colour’s symbol too, and on the high-contrast board a gate whose colour is close to the floor gets a two-tone outline.',
          },
        ],
      },
      {
        id: 'more',
        title: 'Face-down bricks, portals and shaped bricks',
        blocks: [
          {
            t: 'list',
            items: [
              '**Face-down “?” bricks** hide their colour. They turn over when a brick next to them leaves the board; moving them does not turn them over. They still play by their real colour.',
              '**Portals** come in pairs: slide a brick into one and it comes out of its twin on another side.',
              '**Long, big, L and T bricks** slide and fall as one piece, are never swapped, never count in lines, and need a gate as wide as they are. No booster can pick them.',
            ],
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Level 31 on the beach: 16 moves left, goals of 8 yellow and 8 blue. Big joined bricks are stacked at the bottom of the board: a long blue bar, a tall blue column and a yellow piece bent into a C, with blue and yellow gates on the edges.',
            caption: 'Big bricks slide as one piece and need a gate as wide as they are.',
          },
        ],
      },
      {
        id: 'kinds',
        title: 'The twelve kinds of board',
        blocks: [
          {
            t: 'p',
            text: 'Every full village has twelve boards, and board 1 to 12 is always the same kind, so you learn the rhythm of a village: ',
          },
          {
            t: 'table',
            head: ['Board', 'Kind', 'What to expect'],
            rows: [
              ['1', 'Send Them Home', 'Slide bricks out through their gates.'],
              ['2', 'Slide and Match', 'Slides and swaps together.'],
              ['3', 'Open Garden', 'A roomy board with space to plan.'],
              ['4', 'Falling Garden', 'Bricks fall and new ones drop in.'],
              ['5', 'Pots and Ice', 'Crates and ice to break.'],
              ['6', 'Long Bricks', 'Shaped bricks and wide gates.'],
              ['7', 'Corner Pieces', 'Bricks fall, but no new ones arrive.'],
              ['8', 'Crates and Ice', 'More layers to break.'],
              ['9', 'Locks and Moss', 'Locks to free and moss that spreads.'],
              ['10', 'Stone Lanes', 'Statues that block the way.'],
              ['11', 'The Big Day', 'A bigger finale, often with a sealed bed.'],
              ['12', 'Quiet Puzzle', 'Bricks fall without refilling: think it through.'],
            ],
          },
          {
            t: 'p',
            text: 'From the fifth village on, lids, face-down bricks, staged gates and portals start to appear as well. Each gets its own teaching card the first time.',
          },
        ],
      },
    ],
    related: ['playing-a-board', 'boosters-and-pause', 'vision-hearing-and-motion', 'voiceover'],
  },

  {
    slug: 'boosters-and-pause',
    category: 'play',
    cover: 'board-shapes',
    title: 'Boosters, hints and Pause',
    summary:
      'What Hint, Rocket, UFO and Undo do, the free ones you get on every board, how to get more, and everything in the Pause menu.',
    keywords: 'booster hint rocket ufo undo tray free pause restart quit leave resume',
    sections: [
      {
        id: 'tray',
        title: 'The tray',
        blocks: [
          {
            t: 'p',
            text: 'The tray at the bottom of every board holds **Pause**, then **Hint**, **Rocket**, **UFO** and **Undo**. All of them are available from level 1. A **FREE** badge means the next use costs nothing; a number shows how many you have.',
          },
          {
            t: 'table',
            head: ['Booster', 'How to use it', 'What it does'],
            rows: [
              ['Hint', 'Tap it.', 'Shows and says the best move, a slide or a swap.'],
              ['Rocket', 'Tap it, then tap a plain brick.', 'Turns that brick into a line blaster that fires along its row.'],
              ['UFO', 'Tap it, then tap a piece.', 'Beams one layer off it: a crate layer, ice, a lock, moss or a brick.'],
              ['Undo', 'Tap it.', 'Takes back your last move.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Boosters cannot pick shaped bricks or anything under a lid.',
          },
        ],
      },
      {
        id: 'free',
        title: 'Free boosters',
        blocks: [
          {
            t: 'list',
            items: [
              '**Every attempt** comes with one free Hint, one free Rocket and one free UFO. They cannot be saved for later.',
              '**Winning streaks** add more for your next board: 2 wins in a row give a Hint, 3 a Rocket, 4 a UFO, and 5 all three. Only new levels count.',
              '**The first undo** on every board is free.',
              '**A welcome gift** of 2 Hints, 2 Rockets and 2 UFOs arrives once, early in the Journey.',
              'Some rewards and passes make a booster free on every board for a while; its badge says FREE.',
              'With VoiceOver, the two-finger double tap gives a free hint at any time. See [Playing with VoiceOver](help:voiceover#hints).',
            ],
          },
        ],
      },
      {
        id: 'more',
        title: 'Getting more',
        blocks: [
          {
            t: 'p',
            text: 'Tap an empty booster to buy one with coins (Hint 150, Rocket 300, UFO 500) or a pack from the Shop. Boosters also come from the Brick Wheel, village star rewards, Missions, the Brick Pass and events.',
          },
        ],
      },
      {
        id: 'undo',
        title: 'Undo',
        blocks: [
          {
            t: 'list',
            items: [
              'The first undo on each board is free. After that, undos come from a tank of up to **five**, which refills by one every **25 minutes**.',
              'The number on the Undo button counts both, so a fresh board shows 6 when your tank is full.',
              'If the tank is empty: buy five for 250 coins, watch an optional video for two, or wait.',
            ],
          },
        ],
      },
      {
        id: 'pause',
        title: 'The Pause menu',
        blocks: [
          {
            t: 'p',
            text: 'Tap the pink **Pause** button at the left of the tray (or the right, with Left-handed tray). With VoiceOver, the two-finger scrub opens it too.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Sounds, Music, Haptics', text: 'Switch each on or off without leaving the board.' },
              { term: 'Resume', text: 'Back to the board.' },
              { term: 'Game Center', text: 'Your achievements and leaderboards.' },
              { term: 'Restart', text: 'Starts the board again. **Before your first move it is free; after a move it costs a life**, because it ends this attempt.' },
              { term: 'Quit', text: 'Opens the **Leave?** card.' },
            ],
          },
          {
            t: 'shot',
            id: 'leave',
            alt: 'The Leave? card: This costs one life. You have 5 left. Your progress on this board is not saved. Buttons: Keep Playing and Leave.',
            caption: 'The Leave? card tells you exactly what leaving will cost before you choose.',
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Leaving before your first move is always free. If you are on a winning run, the card tells you leaving will end it.',
          },
        ],
      },
    ],
    related: ['lives-moves-and-undos', 'playing-a-board', 'shop-and-purchases', 'voiceover'],
  },

  {
    slug: 'lives-moves-and-undos',
    category: 'play',
    cover: 'wall',
    title: 'Lives, running out of moves, and undos',
    summary:
      'When a life is used and when it is not, how lives come back, what the out-of-moves screen offers, the helping hand, the free daily try, and optional videos.',
    keywords: 'lives hearts refill out of moves continue play on give up level failed out of lives unlimited helping hand free try video ads rewarded',
    sections: [
      {
        id: 'lives',
        title: 'Lives',
        blocks: [
          {
            t: 'list',
            items: [
              'You can hold up to **five lives** (eight while you own the current Brick Pass). One comes back every **30 minutes**, even while the game is closed.',
              'Opening a board needs a life, but **does not use one**. A life is only used when you **lose** an attempt.',
              '**Winning never costs a life.** Neither does leaving or restarting before your first move.',
            ],
          },
          {
            t: 'table',
            caption: 'When a life is used',
            head: ['You…', 'Life used?'],
            rows: [
              ['Clear the board', 'No'],
              ['Run out of moves and give up (or close the out-of-moves screen)', 'Yes'],
              ['Restart or leave **after** a move', 'Yes, the card tells you first'],
              ['Restart or leave **before** your first move', 'No'],
              ['Play on with more moves', 'No: it is the same attempt'],
              ['Reach a board where nothing can move, with moves left', 'No'],
              ['Lose on your free daily try or during unlimited lives', 'No'],
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'Out of moves',
        blocks: [
          {
            t: 'shot',
            id: 'wall',
            alt: 'The Out of moves screen showing the goals still needed, a button for 5 more moves for 300 coins, a Watch button for 2 more moves, and Give up.',
            caption: 'Out of moves: what you still need, and your choices.',
          },
          { t: 'p', text: 'When your moves run out before the goals are done, you see what is left and can choose:' },
          {
            t: 'table',
            head: ['Play on in this attempt', 'Cost', 'You get'],
            rows: [
              ['First time', '300 coins', '+5 moves'],
              ['Second time', '500 coins', '+5 moves and a Hint'],
              ['Third time and after', '900 coins', '+5 moves and a UFO'],
            ],
          },
          {
            t: 'list',
            items: [
              'Or watch an **optional video**: +2 moves, then +1 move, then a free UFO.',
              'If you saved a **+5 moves**, use it here.',
              'On a board you have tried several times, each play-on gives a little more: one extra move for every failed attempt after the third, up to +15.',
              '**Give up** ends the attempt and uses a life. The note under the button tells you if it will also end a winning run.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Nothing paid is offered before level 6. The prices reset with every new attempt.',
          },
        ],
      },
      {
        id: 'level-failed',
        title: 'Level failed, and trying again',
        blocks: [
          {
            t: 'p',
            text: 'After giving up you see **Level failed**, with how close you came (“So close!”, “Almost there!” or “Not this time”) and whether a life was used. Choose **Try again**, or **Back to the map**. From level 6 you can start the next try with a head start: a Rocket on the board and a free UFO, for 800 coins.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'A helping hand',
            text: 'Stuck on one board? From your sixth attempt at it, the game gives you **3 extra moves** before you start: “A helping hand: 3 extra moves this try”. Once a day per board.',
          },
          { t: 'shot', id: 'level-failed', alt: 'Level failed: a sad friend, Almost there!, the goals still needed (3 sunshine and 3 wave bricks), a broken heart showing one life used, a blue Try again button, an optional offer, and Back to the map.', caption: 'Level failed shows how close you came.' },
        ],
      },
      {
        id: 'out-of-lives',
        title: 'Out of lives',
        blocks: [
          {
            t: 'list',
            items: [
              '**A free try:** once a day, with no lives left, you may get a free try at a board. Win and you keep the life; lose and it costs nothing.',
              '**Wait:** the screen counts down to your next life.',
              '**Refill:** a full tank for 600 coins, a stored refill if you have one, or an optional video for one life.',
              '**Unlimited lives:** 1 hour (900 coins), 3 hours (2,000) or 24 hours (6,000), or with real money in the Shop. Buying more while one runs adds time.',
            ],
          },
          {
            t: 'p',
            text: 'Tap the heart on the Journey header any time to see your lives and when the next one comes.',
          },
          { t: 'shot', id: 'no-lives', alt: 'Out of Lives: 0 of 5 lives and a countdown to the next one, then unlimited lives for 1 hour, 3 hours or 24 hours, for coins or money, a Refill for 600 coins, Watch for a life, and OK. A note at the foot says a life is only lost when a board is lost, lives come back one every 30 minutes, and once a day an empty tank gets a free attempt.', caption: 'Out of Lives: wait, refill, or keep playing.' },
        ],
      },
      {
        id: 'videos',
        title: 'Optional videos',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick has **no forced ads**: no banners, no pop-up ads between boards. Videos only play when you choose one for a reward, and only videos watched to the end pay. There are eight kinds, capped at **39 a day** in total, and the caps reset at midnight.',
          },
          {
            t: 'table',
            head: ['Where', 'Reward', 'Per day'],
            rows: [
              ['Out of lives', '1 life', '8'],
              ['Out of undos', '2 undos', '8'],
              ['Out of moves', '+2 moves, then +1, then a free UFO', '6'],
              ['Win card', 'Your clear’s coins again (75 to 300)', '4'],
              ['Brick Wheel', 'A second spin', '1'],
              ['Gift balloon', 'Coins or a free booster for 10 minutes', '2'],
              ['Brick Cinema', 'One prize square per video', '6'],
              ['Board start', 'A Hint (not currently shown)', '4'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'With **Remove Ads** or the current **Brick Pass**, the same rewards say **Claim reward** and pay at once, with no video, within the same daily limits.',
          },
        ],
      },
    ],
    related: ['boosters-and-pause', 'shop-and-purchases', 'playing-a-board', 'rewards-and-events'],
  },
];
