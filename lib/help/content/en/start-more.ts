import type { HelpArticle } from '../../model.ts';

/**
 * Common questions, the first week, hard boards and the glossary, in English (the source for
 * every translation). Checked against 5.1.1 (68). Every economy figure here restates one already
 * in play.ts, progress.ts or account.ts; change them there first, then here.
 */
export const startMoreArticles: HelpArticle[] = [
  {
    slug: 'common-questions',
    category: 'start',
    cover: 'home',
    host: 'sprout',
    hostPose: 'think',
    title: 'Common questions, answered honestly',
    summary:
      'Short, exact answers to the questions players ask most: timers, lives, ads and purchases, offline play, new phones, accessibility, children, and how to reach a person.',
    keywords:
      'faq questions answers timer clock timed lose life why lives helping hand ads pay free offline airplane mode no internet new phone transfer progress kids children family age rating blind low vision colour blind color blind contact support human person email',
    sections: [
      {
        id: 'playing',
        title: 'Playing',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Is OutBrick timed?',
                a: 'No. There is **no clock anywhere** in OutBrick: not on a board, not in a menu, not in an event. Each board gives you a number of **moves**, and that is the only limit. Take as long as you like over every move.\n\nA swap that makes no line springs back and **does not use a move**. See [No clocks, no rush](help:accessibility#no-timers).',
              },
              {
                q: 'How do I play a board?',
                a: '**Slide** a brick toward an empty space, or into the gate of its own colour to send it home. **Swap** a brick into its neighbour to make a line of three or more and clear them. Meet the goals in the panel at the top before your moves run out. See [Welcome to OutBrick](help:welcome) and [Playing a board](help:playing-a-board).',
              },
              {
                q: 'Why did my swap bounce back?',
                a: 'A swap only stays if it makes a line of three or more, a 2×2 square, sets off two specials together, or uses a colour bomb. Otherwise the bricks spring back, you feel two short taps, and **no move is used**. See [Swapping and matching](help:playing-a-board#swap).',
              },
              {
                q: 'Can I get stuck on a board?',
                a: 'No. If no move is possible, the board reshuffles for free under a **Shuffle!** banner, with no move and no life used. A board that still has moves but can never reach your goals is quietly dealt again, and spare bricks are recoloured if a goal runs short of its colour. See [You can never get stuck](help:playing-a-board#never-stuck).',
              },
              {
                q: 'How do I earn three stars?',
                a: 'Stars follow your **score**. Every clear earns at least one star; a higher score earns two or three, and the star track in the header shows how close you are. Each move you have left at the end becomes a line blaster worth 150 points, so finishing early helps. Replay any cleared board from the Journey to improve its stars. See [Score, stars and the end-of-board bonus](help:playing-a-board#stars).',
              },
              {
                q: 'What do Hard, Super Hard, Boss and Night mean?',
                a: 'They are tiers, shown on a plaque under the header. Hard boards ask for about 15% more, Super Hard about 30% more, and a Boss (the last board of a chapter, from level 40) about 40% more. A Night board is set after dark and plays like a Hard board. Harder tiers pay more coins. See [How to beat a hard board](help:hard-boards#tiers).',
              },
              {
                q: 'Is OutBrick suitable for children?',
                a: 'OutBrick is rated **4+** on the App Store: abstract brick boards, friendly characters, no chat and nothing anyone else writes inside the game. Videos only play when someone chooses one for a reward, and purchases go through Apple, so Screen Time and Ask to Buy can require your approval. The community website, which the game opens in Safari, is for people aged 16 and over. See [the age rating](/age-rating) and [A guide for parents](help:parents-guide).',
              },
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'Lives and moves',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Why did I lose a life?',
                a: 'A life is only used when you **lose** an attempt at a board. That happens in three ways:\n\n**1.** You run out of moves and choose **Give up** (or close the out-of-moves screen). **2.** You **leave** a board after making a move. **3.** You **restart** from Pause after making a move.\n\nThe game always tells you first: the **Leave?** card and the Restart and Give up buttons say when a life will be used. See [When a life is used](help:lives-moves-and-undos#lives).',
              },
              {
                q: 'Does winning or starting a board cost a life?',
                a: 'No. Opening a board needs a life but **does not use one**, and **winning never costs a life**. Leaving or restarting before your first move is free too, and so is playing on with more moves, because that is the same attempt.',
              },
              {
                q: 'How quickly do lives come back?',
                a: 'One every **30 minutes**, even while the game is closed, up to **five** (eight while you own the current Brick Pass). Tap the heart on the Journey header to see when the next one comes.',
              },
              {
                q: 'What is the helping hand?',
                a: 'If a board keeps beating you, the game lends a hand: from your **sixth attempt** at the same board, you start with **3 extra moves**, and the board says “A helping hand: 3 extra moves this try”. It comes once a day per board and costs nothing. See [Level failed, and trying again](help:lives-moves-and-undos#level-failed).',
              },
              {
                q: 'What happens when I run out of moves?',
                a: 'You see what is left and can play on in the same attempt: +5 moves for 300 coins, then 500 (with a Hint), then 900 (with a UFO), or an optional video for +2 moves, then +1, then a free UFO. Or choose **Give up**, which uses a life. Nothing paid is offered before level 6. See [Out of moves](help:lives-moves-and-undos#out-of-moves).',
              },
              {
                q: 'Is Undo free?',
                a: 'The **first undo on every board is free**. After that, undos come from a tank of up to five, which refills by one every 25 minutes. See [Undo](help:boosters-and-pause#undo).',
              },
              {
                q: 'I have no lives left. Can I still play?',
                a: 'Once a day, an empty tank may get **a free try** at a board: win and you keep the life, lose and it costs nothing. Otherwise wait for the next life, refill with coins or a stored refill, or watch an optional video for one life. See [Out of lives](help:lives-moves-and-undos#out-of-lives).',
              },
            ],
          },
        ],
      },
      {
        id: 'purchases-ads',
        title: 'Purchases and ads',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Do I have to watch ads or pay?',
                a: 'No. Every board can be played without spending money or watching anything: lives come back on their own, and every attempt comes with a free Hint, Rocket and UFO. Videos and purchases are optional extras.',
              },
              {
                q: 'Are there ads between boards?',
                a: 'No. OutBrick has **no forced ads**: no banners and no pop-up ads. A video only plays when you choose one for a reward, only a video watched to the end pays, and there is a limit of **39 a day** across eight kinds. See [Optional videos](help:lives-moves-and-undos#videos) and [Rewards and ads](help:rewards-and-ads).',
              },
              {
                q: 'What does Remove Ads do?',
                a: 'It takes away every optional video but keeps the rewards: buttons that said Watch say **Claim reward** and pay at once, within the same daily limits. Owning the current Brick Pass does the same for that season. See [Remove Ads and the Brick Pass](help:shop-and-purchases#remove-ads).',
              },
              {
                q: 'Is anything a subscription?',
                a: 'No. Every pass and timed item is a one-time purchase, and **nothing renews by itself**. Prices are shown in your own currency by the App Store.',
              },
              {
                q: 'Something I bought is missing. What do I do?',
                a: 'Open the **Shop**, scroll to the very bottom and tap **Restore Purchase**. Coins, boosters and lives travel with your progress through iCloud rather than the App Store. Still missing? Write to us privately with the [contact form](/contact). See [Lost progress and purchases](help:lost-progress-and-purchases).',
              },
              {
                q: 'How do I get a refund?',
                a: 'Purchases are made through Apple, so Apple handles refunds. See [our refunds page](/refunds) for how to ask.',
              },
            ],
          },
        ],
      },
      {
        id: 'progress',
        title: 'Progress and devices',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Does OutBrick work offline?',
                a: 'Yes. **Every board plays offline**, so a tunnel or a flight does not stop you. A few things need a connection: optional videos, purchases and **Restore Purchase**, the Leaders tab, races and Game Center. Your progress is kept on your device and in your iCloud, and syncs when you are online again.',
              },
              {
                q: 'Will I lose my progress if I change phones?',
                a: 'Not if you use iCloud. Progress is saved in your own iCloud account, so a new iPhone or iPad signed in to the **same Apple Account** picks up your level, stars, coins, boosters, streaks, Collection and Wardrobe. Then tap **Restore Purchase** in the Shop. If the old device was never signed in to iCloud, sign in there and open OutBrick once before you switch. See [Moving to a new iPhone or iPad](help:progress-privacy-and-account#new-device).',
              },
              {
                q: 'Do I need an OutBrick account?',
                a: 'No. There is no OutBrick account to create: the game uses your iCloud. The community website has its own optional sign-in, separate from the game.',
              },
              {
                q: 'Can I play on my iPhone and my iPad?',
                a: 'Yes. Signed in to the same Apple Account, both devices share one save through iCloud. When they disagree, nothing is overwritten: the higher level and counts are kept and collections are combined. Sound settings and most board accessibility settings stay on each device; your Colour-blind choice follows you.',
              },
              {
                q: 'How do I start again from level 1?',
                a: '**Settings › Delete My Data**, at the very bottom of the Game tab, resets your progress and asks iCloud to delete your save. It cannot be undone. See [Deleting your data](help:progress-privacy-and-account#delete).',
              },
            ],
          },
        ],
      },
      {
        id: 'accessibility',
        title: 'Accessibility',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Can I play if I am blind or have low vision?',
                a: 'Yes. With **VoiceOver**, every board reads cell by cell, every piece is named by kind, colour and state, and you slide and swap with actions such as “Slide left, out through the red gate”. Rotors jump straight to goals, specials, blockers and gates, and a two-finger double tap gives a free hint. For low vision, try the **High-contrast board** and Larger Text. See [Playing with VoiceOver](help:voiceover) and [Vision, hearing and motion](help:vision-hearing-and-motion).\n\nIn 5.1 and 5.1.1, VoiceOver can lose its place on the board; a fix is on its way. See [known issues](/support/known-issues) for what to do meanwhile.',
              },
              {
                q: 'Can I play if I am colour-blind?',
                a: 'Yes. **Colour-blind** symbols are on from the very first board: every colour has its own shape (red circle, orange triangle, yellow square, green diamond, blue plus, purple star, pink bar, teal hexagon), and goals and gates carry the same shape. See [Colour-blind symbols](help:vision-hearing-and-motion#colour-blind).',
              },
              {
                q: 'Can I play with switches, my voice or a keyboard?',
                a: 'Yes. Every board can be played with Voice Control (“Tap Red 14”, then “Tap Left”), Switch Control or the arrow keys. **Hold to confirm swaps** makes you choose each move twice, so nothing plays by accident. See [Voice Control, Switch Control and keyboards](help:voice-control-switch-control-keyboard).',
              },
              {
                q: 'Do I need to hear anything to play?',
                a: 'No. The friends talk in text bubbles, not voices, and every sound has something on screen to match it. Haptics let you feel moves land. See [Sound, music, haptics and Row sound](help:vision-hearing-and-motion#sound).',
              },
              {
                q: 'Can I slow the game down?',
                a: 'Yes. **Settings › Accessibility › Animation speed** goes from 50% to 200%; at 50% every swap, fall and clear takes twice as long. With no clock anywhere, the only pace is yours. See [Playing calmly](help:playing-calmly).',
              },
            ],
          },
        ],
      },
      {
        id: 'team',
        title: 'The team',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'How do I contact a person?',
                a: 'In the game, open **Settings › Contact us**, or use the [contact form](/contact) on this website. **A person on the team reads every message**, and we aim to reply within two working days. Your message gets a reference (like OB-7K2QXM) and a private link to follow it. Never send a password or card details.',
              },
              {
                q: 'Who makes OutBrick?',
                a: 'OutBrick is a small, independent project. Read more on [About OutBrick](/about).',
              },
              {
                q: 'How do I report a bug?',
                a: 'In the game, **Settings › Report a bug** opens a report with your device, versions and level already filled in, without your name or account. See [Reporting a bug well](help:reporting-bugs), and check [known issues](/support/known-issues) first: we may already be fixing it.',
              },
              {
                q: 'Where can I ask other players for help with a level?',
                a: 'Use [Help with a level](/support/levels): enter the level number to see what others said about that board, or ask them. See [Using the OutBrick Community](help:using-the-community).',
              },
              {
                q: 'Can I suggest an idea or test updates early?',
                a: 'Yes. Post and vote in [Ideas & feedback](/community/c/ideas), and see [Help shape OutBrick](/support/get-involved) to join the beta group or the accessibility panel.',
              },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Still not answered?',
            text: 'Search the Help Centre for a word from your question, or ask in [Help & support](/community/c/help). For anything private, such as a purchase, use the [contact form](/contact).',
          },
        ],
      },
    ],
    related: ['welcome', 'lives-moves-and-undos', 'troubleshooting', 'accessibility', 'parents-guide', 'lost-progress-and-purchases'],
  },

  {
    slug: 'first-week',
    category: 'start',
    cover: 'garden-teach',
    host: 'bloo',
    hostPose: 'cheer',
    title: 'Your first week in OutBrick',
    summary:
      'What a typical first week looks like, day by day: Garden City and its teaching cards, your first stars and village reward, Hard boards, Clover Farm, and the small daily habits that make the Journey smoother.',
    keywords:
      'beginner new player first days week guide what to expect garden city clover farm tutorial teaching cards daily brick streak missions wheel welcome gift save boosters tips',
    sections: [
      {
        id: 'pace',
        title: 'Before you start',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick has no clock and nothing to rush. The week below is a **typical rhythm, not a schedule**: some players clear Garden City in an afternoon, others take a week. Nothing on the Journey is lost if you go more slowly.',
          },
          {
            t: 'friend',
            friend: 'bloo',
            pose: 'cheer',
            title: 'One idea at a time',
            text: 'The first village is built to teach. Each board brings at most one new idea, and a short teaching card shows it the first time, with a moving hand. Tap anywhere to start playing.',
          },
        ],
      },
      {
        id: 'week',
        title: 'Day by day',
        blocks: [
          {
            t: 'path',
            items: [
              {
                day: 'Day 1',
                title: 'Garden City and your first boards',
                text: 'Tap the green **Level** button on Home. Level 1 teaches sliding a brick home through its gate; level 2 teaches swapping to make lines. Every attempt comes with a free **Hint**, **Rocket** and **UFO**, and early on a one-time **welcome gift** of 2 of each lands in your tray. Your first clear of the day also pays the **Daily Brick**: 100 coins, collected on Home.',
              },
              {
                day: 'Day 2',
                title: 'Falling bricks and your first blockers',
                text: 'Garden City keeps adding ideas: boards where bricks fall and new ones drop in, long bricks that need a gate as wide as they are, then crates, ice, locks, moss and statues. Each gets its own teaching card. Clearing a board again today makes your **day streak** two days long, and the **Brick Wheel** on Home gives a free spin each day.',
              },
              {
                day: 'Day 3',
                title: 'Stars, and your first Hard plaque',
                text: 'Watch the **star track** as you play: a higher score earns two or three stars, and each village holds 36. Collecting them climbs the village’s star ladder (50 coins, a Hint, 100 coins and a Rocket); a badge on the map says when one is ready. The last boards of Garden City wear a **Hard** plaque. Three days in a row pays your first streak reward: 100 coins.',
              },
              {
                day: 'Day 4',
                title: 'A village complete, and Clover Farm',
                text: 'Clear all twelve boards of Garden City and a celebration card offers **Share** and **On we go**. Clover Farm, levels 13 to 24, plays the same twelve kinds of board in the same order, and the ideas you learned start to combine. If you run out of moves, the out-of-moves screen offers ways to play on; nothing paid is offered before level 6.',
              },
              {
                day: 'Day 5',
                title: 'Leaders, and tougher tiers',
                text: 'The **Leaders** tab opens at level 21. Super Hard boards start to appear in the early villages, and from level 40 the last board of each chapter is a **Boss**. Harder boards pay more coins for a clear. See [How to beat a hard board](help:hard-boards) when one stops you.',
              },
              {
                day: 'Day 6',
                title: 'New ideas keep arriving',
                text: 'As the villages go by, boards add lids over **sealed beds**, face-down **“?” bricks**, iced and counted gates, staged gates and portals. Each one gets a teaching card the first time you meet it, and you can tap any blocker or lid on a board for a one-line reminder.',
              },
              {
                day: 'Day 7',
                title: 'A week in',
                text: 'Seven days in a row pays **250 coins and a streak saver**, which can bring back a missed day later. Weekly missions reset on Monday, and every new level you clear has been climbing the **Brick Pass** tiers. Tap your avatar to see your stats so far.',
              },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Exact levels vary with your pace. Leaders (level 21) and the Collection (level 95) unlock by level, not by day, and some boards in every village are Hard by design.',
          },
        ],
      },
      {
        id: 'garden-city',
        title: 'What Garden City teaches',
        blocks: [
          {
            t: 'shot',
            id: 'garden-teach',
            alt: 'A Garden City board with red, purple and orange bricks. A pink teaching card at the bottom reads: Slide a brick next to two of its colour to make a line, or swipe it into a neighbour to swap them. Lines clear! Below it: Your turn, try it! A hand points at a brick.',
            caption: 'A teaching card on level 2. Each new idea gets one card, the first time you meet it.',
          },
          {
            t: 'p',
            text: 'Garden City is the first village: levels 1 to 12, one of each of the [twelve kinds of board](help:bricks-specials-and-blockers#kinds). Every later village follows the same order, so what Garden City teaches you keeps paying off for 2,000 levels.',
          },
          {
            t: 'list',
            items: [
              '**Sliding home:** a brick leaves only through an open gate of its own colour. Any other gate is a wall.',
              '**Swapping:** a swap stays only if it makes a line of three or more; otherwise it springs back and costs nothing.',
              '**Gate goals count matches too:** a goal like “send red home” counts the red bricks you slide out and the red bricks you clear in lines.',
              '**Specials:** four in a line, an L or T, a 2×2 square and five in a line each make a different special brick. See [Special bricks](help:bricks-specials-and-blockers#specials).',
              '**Falling boards:** where bricks fall, you can slide sideways, or straight out through a gate.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'With VoiceOver, teaching cards are the only thing on screen while they show: double-tap to start playing. The first gate board you play also tells you about the **Gates** rotor.',
          },
        ],
      },
      {
        id: 'first-stars',
        title: 'Your first stars and village reward',
        blocks: [
          {
            t: 'list',
            items: [
              'Every clear earns at least **one star**. Leftover moves turn into line blasters worth 150 points each, so a tidy finish often lifts one star to two.',
              'The **stars** pill in the Journey header counts this village’s stars. Tap it to see the star rewards.',
              'You can replay any cleared board from the Journey to improve its stars; replaying never moves your place on the map.',
            ],
          },
          {
            t: 'shot',
            id: 'clear',
            alt: 'The win card: a gold ribbon reading Rocket Ridge 4, a Chapter complete badge, three gold stars, a green brick friend celebrating, the word Brilliant!, a score of 5,470, plus 125 coins, a First try! chip, a Journey chest line, and Home, Next and Share buttons.',
            caption: 'The win card: your stars, score, coins and any rewards picked up on the way.',
          },
        ],
      },
      {
        id: 'habits',
        title: 'Habits that help',
        blocks: [
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'A little every day goes a long way',
            text: 'One clear a day is enough to collect the Daily Brick and keep your streak growing. You do not need long sessions: OutBrick rewards coming back more than staying.',
          },
          {
            t: 'table',
            head: ['Habit', 'Why it helps'],
            rows: [
              ['Clear one board a day', 'Pays the **Daily Brick** (100 coins) and grows your day streak: 100 coins at 3 days, 250 and a streak saver at 7.'],
              ['Spin the Brick Wheel', 'One free spin a day for coins or a booster. Clear three new levels that day and the free spin pays double coins.'],
              ['Check Missions', 'Three to do today and three this week, each with a reward. Tap **Claim** or **Claim all**.'],
              ['Claim star rewards', 'A badge on the map tells you when a village star reward is waiting.'],
              ['Use the free boosters', 'The free Hint, Rocket and UFO on each attempt cannot be saved, so use them.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Missions in 5.1.1',
            text: 'Some missions do not count progress on Slide & Match boards in 5.1 and 5.1.1, and a few ask for things those boards cannot give. Your levels, stars and coins are not affected, and a fix is on its way. See [known issues](/support/known-issues).',
          },
        ],
      },
      {
        id: 'boosters',
        title: 'Saving boosters for when they matter',
        blocks: [
          {
            t: 'list',
            items: [
              'A **FREE** badge on a booster means the next use costs nothing; the game spends free ones before the ones you own.',
              'Boosters you own (from the welcome gift, the Brick Wheel, star rewards, Missions and the Brick Pass) keep until you use them.',
              'Winning streaks add more for your next board: 2 wins in a row give a Hint, 3 a Rocket, 4 a UFO, and 5 all three. Only new levels count.',
              'Keep owned Rockets and UFOs for Hard, Super Hard and Boss boards, where one blocker in the wrong place can cost a board.',
            ],
          },
          { t: 'p', text: 'More in [Boosters, hints and Pause](help:boosters-and-pause) and [How to beat a hard board](help:hard-boards#boosters).' },
        ],
      },
      {
        id: 'lives',
        title: 'Lives in your first week',
        blocks: [
          {
            t: 'p',
            text: 'Lives only go when you lose an attempt, never when you win or open a board. If you are unsure about a board, look at it first: leaving before your first move is always free. After your third clear, the game asks once whether it may send reminders, such as full lives; **Not now** waits a week. See [Lives, running out of moves, and undos](help:lives-moves-and-undos).',
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
              '[A tour of every menu](help:menus-tour), so every button makes sense.',
              '[The Journey and its villages](help:journey-and-villages), for chests, gifts and the atlas of every village.',
              '[Rewards, events and the Brick Pass](help:rewards-and-events), for streaks, Missions and events.',
              '[OutBrick glossary](help:glossary), whenever a word is new.',
            ],
          },
        ],
      },
    ],
    related: ['welcome', 'menus-tour', 'journey-and-villages', 'rewards-and-events', 'hard-boards', 'glossary'],
  },

  {
    slug: 'hard-boards',
    category: 'learn',
    cover: 'board-village',
    host: 'peach',
    hostPose: 'think',
    title: 'How to beat a hard board',
    summary:
      'An expert’s method for boards that keep beating you: reading goals, counting moves, choosing between slides and matches, working low on falling boards, saving specials for combos, spending boosters and undos well, and when to play on.',
    keywords:
      'strategy tips tricks stuck hard level difficult cant beat beat level super hard boss night help walkthrough solution plan moves combos cascades boosters undo continue helping hand voiceover rotor',
    sections: [
      {
        id: 'before',
        title: 'Before your first move',
        blocks: [
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'Look first, move second',
            text: 'Most hard boards are lost in the first three moves, not the last three. Opening a board costs nothing, and leaving before your first move is always free, so take a full look before you touch anything.',
          },
          {
            t: 'steps',
            items: [
              '**Read every goal** in the order panel: which colours, how many, and whether there are crates, locks or moss to clear. A board in **stages** opens new gates when the first goals are done.',
              '**Count your moves** against the goals. Twenty moves for twenty red bricks means one-at-a-time slides will not be enough: you need lines.',
              '**Find the gates.** Note each gate’s colour and width, and whether it is iced, counted or sealed until a later stage.',
              '**Spot what is stuck:** bricks under a lid, in ice or behind a lock cannot move yet. Tap any blocker or lid for a one-line reminder of how it opens.',
              '**Check if bricks fall.** If they do, new bricks may drop in, and every match changes what is above it.',
            ],
          },
        ],
      },
      {
        id: 'slide-or-match',
        title: 'Slides or matches: spend each move where it counts most',
        blocks: [
          {
            t: 'p',
            text: 'A gate goal such as “send 12 red home” counts **both** the red bricks you slide out through the red gate **and** the red bricks you clear in lines. That changes the arithmetic:',
          },
          {
            t: 'table',
            head: ['Move', 'Goal bricks for one move', 'Best for'],
            rows: [
              ['Slide one brick home', '1', 'A lone brick with a clear lane, or the last one or two of a goal.'],
              ['Slide a long or big brick home', 'One for every cell it covers', 'Long and big bricks count every cell, so a 2×2 is four in one move.'],
              ['Swap to make a line of 3', '3', 'Most of the board, most of the time.'],
              ['Line of 4 or 5, or a shape', '4 or more, plus a special', 'Building specials that clear many more later.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['Y . . G', 'R+ B R R', '. . Y .'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 0, dir: 'right', kind: 'swap' }],
              after: { rows: ['Y . . G', 'B . . .', '. . Y .'] },
              caption: 'One swap, three red goal bricks. The one in front of the red gate leaves through it.',
              alt: 'A board of three rows and four columns where nothing falls, with a red gate on the right edge of the middle row. Top row: yellow, empty, empty, green. Middle row: red (highlighted), blue, red, red. Bottom row: empty, empty, yellow, empty. The highlighted red brick swaps right with the blue brick, making a line of three red bricks. After the move, the three red bricks are gone, the one beside the red gate leaving through it, and the blue brick sits at the left of the middle row. All three count toward a red goal.',
            },
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'A brick matched or blasted in the cell right in front of its own gate leaves through that gate. When a gate is **counted**, that matters: only bricks that pass through it use up its places, so choose which ones to send.',
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Free the blockers and open the gates',
        blocks: [
          {
            t: 'p',
            text: 'Blockers do not all open the same way. Making the right kind of line is what saves moves:',
          },
          {
            t: 'board',
            board: {
              rows: ['x2 . . .', 'R R B R+'],
              moves: [{ row: 1, col: 3, dir: 'left', kind: 'swap' }],
              after: { rows: ['x . . .', '. . . B'] },
              caption: 'A line beside a crate breaks one layer.',
              alt: 'A board of two rows and four columns where nothing falls. Top row: a crate with 2 layers, then three empty cells. Bottom row: red, red, blue, red (highlighted). The highlighted red brick swaps left with the blue brick, making a line of three red bricks under the crate. After the move, the red bricks are gone, the crate has 1 layer left, and the blue brick sits at the right of the bottom row.',
            },
          },
          {
            t: 'board',
            board: {
              rows: ['. . . .', 'R R! B R+'],
              moves: [{ row: 1, col: 3, dir: 'left', kind: 'swap' }],
              after: { rows: ['. . . .', '. R . B'] },
              caption: 'A lock opens only to a line through it. The freed brick stays.',
              alt: 'A board of two rows and four columns where nothing falls. Top row empty. Bottom row: red, a locked red brick, blue, red (highlighted). The highlighted red brick swaps left with the blue brick, so the line of three red bricks runs through the locked one. After the move, the two unlocked red bricks are gone, the lock is gone and its red brick stays in place, now free to move, and the blue brick sits at the right of the bottom row.',
            },
          },
          {
            t: 'table',
            head: ['Blocker', 'What opens it', 'Tactic'],
            rows: [
              ['Crate', 'A line beside it, one layer per line.', 'Line up next to crates that wall in a gate lane first.'],
              ['Ice', 'A line beside it.', 'Free iced goal bricks early; they cannot move until then.'],
              ['Lock', 'A line **through** it.', 'Build the line around the locked brick; a line beside it does nothing.'],
              ['Moss', 'A line beside it.', 'Moss creeps after any move that clears no moss, so keep clearing it, and do not leave it to spread.'],
              ['Statue', 'Nothing: it stays.', 'Plan lanes around it.'],
              ['Lid', 'Its own rule: a count, a colour, a key line, a number of moves or a key brick.', 'Read the lid before move one; see [Sealed rooms and their lids](help:bricks-specials-and-blockers#lids).'],
            ],
          },
          {
            t: 'p',
            text: 'Every blocker, lid and gate is described in full in [The blockers encyclopedia](help:blockers-encyclopedia).',
          },
          { t: 'h3', text: 'Iced, counted and staged gates' },
          {
            t: 'list',
            items: [
              '**Iced gate:** thaws a little each time any brick goes home through any gate, and when pieces in front of it clear. Send other colours home early to open it sooner.',
              '**Counted gate:** takes only so many bricks, then shuts for good. Do not waste its places on bricks a match could clear instead.',
              '**Staged gate:** stays sealed until the second stage of goals begins. Do not spend moves lining up bricks for it in stage one.',
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['. . . .', 'B . . R+', '. . . .'],
              gates: [
                { side: 'left', at: 1, colour: 'B', kind: 'iced' },
                { side: 'right', at: 1, colour: 'R' },
              ],
              moves: [{ row: 1, col: 3, dir: 'right' }],
              after: {
                rows: ['. . . .', 'B . . .', '. . . .'],
                gates: [
                  { side: 'left', at: 1, colour: 'B' },
                  { side: 'right', at: 1, colour: 'R' },
                ],
              },
              caption: 'Here the iced blue gate needs one more brick to go home, through any gate.',
              alt: 'A board of three rows and four columns. On the left edge of the middle row is an iced blue gate; on the right edge of the middle row is an open red gate. The middle row holds a blue brick at the left and a red brick (highlighted) at the right. The red brick slides right, out through the red gate. After the move, the red brick is gone and the blue gate has thawed and is open, so the blue brick can now slide left into it.',
            },
          },
        ],
      },
      {
        id: 'falling',
        title: 'Falling boards: work low',
        blocks: [
          {
            t: 'p',
            text: 'On boards where bricks fall, a match near the bottom moves everything above it, and the fall can line up another match on its own: a **cascade**, which costs no extra move. A match near the top moves almost nothing. So, other things equal, **work from the bottom up**.',
          },
          {
            t: 'board',
            board: {
              rows: ['R . .', 'G . .', 'Y+ G .', 'G R R'],
              moves: [{ row: 2, col: 0, dir: 'right', kind: 'swap' }],
              after: { rows: ['. . .', '. . .', '. . .', '. Y .'] },
              caption: 'One swap, two lines: the green line clears, the red brick falls, and the red line clears too.',
              alt: 'A board of four rows and three columns where bricks fall but no new ones arrive. Left column from the top: red, green, yellow (highlighted), green. Middle column: empty, empty, green, red. Right column: empty, empty, empty, red. The highlighted yellow brick swaps right with the green brick beside it, making a column of three green bricks on the left. They clear, the red brick at the top falls to the bottom row beside the two red bricks there, and that line of three red bricks clears as well. The yellow brick falls into the bottom row, which is all that is left.',
            },
          },
          {
            t: 'list',
            items: [
              'On falling boards you can slide sideways into a gap, or straight out through a gate. Use slides to set up lines a fall will complete.',
              'Where new bricks drop in, the top of the board is unknown; the bottom is what you can plan.',
              'On **Corner Pieces** and **Quiet Puzzle** boards, bricks fall but no new ones arrive, so every brick is all you will get. Count the bricks of each goal colour before you start.',
            ],
          },
        ],
      },
      {
        id: 'specials',
        title: 'Specials: make them, then keep them for a combo',
        blocks: [
          {
            t: 'table',
            head: ['Make', 'Special', 'Best use'],
            rows: [
              ['Four in a line', 'Line blaster', 'Clears a whole row or column, along the direction you moved. Aim it down a row full of goal bricks or crates.'],
              ['An L, T or + shape', 'Bomb', 'Blasts the 3×3 square around it, twice. Good against clusters of blockers.'],
              ['A 2×2 square', 'Homing dart', 'Flies to a piece a goal needs. Good for the last stubborn goal piece.'],
              ['Five in a line', 'Colour bomb', 'Swap it with a colour to take every plain brick of that colour.'],
            ],
          },
          {
            t: 'p',
            text: 'A special fired alone is good; two swapped together are far better. If two specials sit close, try to bring them side by side and swap them into each other rather than tapping each one:',
          },
          {
            t: 'board',
            board: {
              rows: ['G Y . B', 'R- Bb+ . Y', 'Y G B R'],
              moves: [{ row: 1, col: 1, dir: 'left', kind: 'swap' }],
              caption: 'A line blaster and a bomb side by side: swap them together for a cross three lanes wide.',
              alt: 'A board of three rows and four columns. Top row: green, yellow, empty, blue. Middle row: a red line blaster that fires across, a blue bomb (highlighted), empty, yellow. Bottom row: yellow, green, blue, red. An arrow shows the blue bomb swapping left into the red line blaster. Swapped together, they fire as a cross three rows and three columns wide.',
            },
          },
          {
            t: 'table',
            caption: 'Combos, from good to best',
            head: ['Swap together', 'Result'],
            rows: [
              ['Line blaster + line blaster', 'A cross: one row and one column.'],
              ['Line blaster + bomb', 'A cross three lanes wide.'],
              ['Bomb + bomb', 'A 5×5 blast.'],
              ['Dart + any special', 'The dart carries the special to its target.'],
              ['Colour bomb + any special', 'Every brick of that colour becomes that special, and they all go off.'],
              ['Colour bomb + colour bomb', 'The whole board.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Tapping a special to fire it where it stands uses a move, and so does a combo swap, so a combo is two specials’ worth of clearing for one move. More in [Special bricks and combos](help:special-bricks-and-combos).',
          },
        ],
      },
      {
        id: 'boosters',
        title: 'Free boosters and the free undo',
        blocks: [
          {
            t: 'p',
            text: 'Every attempt comes with **one free Hint, one free Rocket and one free UFO**. They cannot be saved for later, so a board where you never touched them is a board you played with one hand behind your back.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Hint', text: 'Shows and says the best move. Use it early on an unfamiliar board to learn what the board wants, not only when you are stuck.' },
              { term: 'Rocket', text: 'Turns a plain brick into a line blaster that fires along its row. Choose a row with several goal bricks or blockers in it, ideally low on a falling board.' },
              { term: 'UFO', text: 'Beams one layer off a piece: a crate layer, ice, a lock, moss or a brick. Best on the single blocker that keeps a goal brick or a gate lane shut.' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Boosters cannot pick shaped bricks or anything under a lid. Owned boosters keep, so save them for Hard, Super Hard and Boss boards. See [Boosters, hints and Pause](help:boosters-and-pause).',
          },
          { t: 'h3', text: 'Undo as a way to look ahead' },
          {
            t: 'list',
            items: [
              'The **first undo on every board is free**. Use it as a free look: try the move you are unsure about, and if it goes badly, take it back.',
              'Undo puts the board back exactly as it was before your move, and gives the move back.',
              'After the free one, undos come from a tank of up to five that refills by one every 25 minutes. Keep them for the end of a board, where one wasted move is the difference.',
              '**Undo is cheaper than Restart.** Restarting after a move ends the attempt and costs a life; an undo never does.',
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'When to play on, and trying again',
        blocks: [
          {
            t: 'shot',
            id: 'wall',
            alt: 'The Out of moves screen showing the goals still needed, a button for 5 more moves for 300 coins, a Watch button for 2 more moves, and Give up.',
            caption: 'Out of moves: what you still need, and your choices.',
          },
          {
            t: 'p',
            text: 'The out-of-moves screen shows exactly what is left. Read it before you choose. Playing on keeps this attempt alive, so it **never costs a life**; giving up uses one, and a life comes back in 30 minutes.',
          },
          {
            t: 'table',
            head: ['What is left', 'A sensible choice'],
            rows: [
              ['One or two goal pieces in easy reach', 'Play on: a free video (+2 moves), a saved **+5 moves**, or the first coin play-on (300 coins, +5 moves).'],
              ['A few pieces, but a blocker in the way', 'The second play-on (500 coins) adds a Hint; the third (900) adds a UFO for that blocker.'],
              ['Most of a goal still to do', 'Let it go. The attempt has taught you the board; your next one starts fresh.'],
            ],
          },
          {
            t: 'list',
            items: [
              'The price climbs 300 → 500 → 900 within one attempt and resets with every new attempt.',
              'On a board you have tried several times, each play-on gives one extra move for every failed attempt after the third, up to +15.',
              'The current **Brick Pass** adds three free moves at the out-of-moves screen.',
              'Nothing paid is offered before level 6.',
            ],
          },
          { t: 'p', text: 'Full details in [Out of moves](help:lives-moves-and-undos#out-of-moves).' },
          { t: 'h3', text: 'Trying again: the helping hand' },
          {
            t: 'list',
            items: [
              'After a loss, **Level failed** shows how close you came. Use what you saw: which goal ran out, which blocker took too long.',
              'From your **sixth attempt** at the same board, the game gives you **3 extra moves** before you start: “A helping hand: 3 extra moves this try”. Once a day per board, free.',
              'From level 6, you can start the next try with a head start for 800 coins: a Rocket on the board and a free UFO.',
              'Still stuck? Look the level up in [Help with a level](/support/levels): other players may have left a nudge.',
            ],
          },
          {
            t: 'shot',
            id: 'level-failed',
            alt: 'Level failed: a sad friend, Almost there!, the goals still needed (3 sunshine and 3 wave bricks), a broken heart showing one life used, a blue Try again button, an optional offer, and Back to the map.',
            caption: 'Level failed shows how close you came.',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'What to expect from Hard, Super Hard and Boss',
        blocks: [
          {
            t: 'table',
            head: ['Tier', 'What changes', 'Coins for a clear'],
            rows: [
              ['Hard', 'Goals ask for about 15% more, and there are a few more obstacles.', '50'],
              ['Super Hard', 'Goals ask for about 30% more.', '80'],
              ['Boss', 'The last board of a chapter, from level 40. Goals ask for about 40% more.', '80'],
              ['Night', 'A board set after dark. It plays like a Hard board.', '50'],
            ],
          },
          {
            t: 'p',
            text: 'Expect to need more than one attempt on Super Hard and Boss boards: that is how they are tuned, not a sign you are playing badly. Every board in the game has been cleared by a solver before release, so every one can be won.',
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'Strategy with VoiceOver',
        blocks: [
          {
            t: 'list',
            items: [
              '**Start with the Board summary** at the top: level, stage, goals and moves left. Double-tap it to hear the whole board with a hint.',
              '**Use the rotors instead of swiping cell by cell.** **Goals** finds the pieces your goals want; **Pieces that can match** finds every move that clears now; **Blockers** and **Gates** show what is in the way and where bricks can leave.',
              '**Listen to a piece’s actions.** Slides say how far they go and whether they leave through a gate, and working swaps come first, so the first few actions are often the plan.',
              '**Set Announcement detail to Full** on hard boards to hear every goal’s count after every move, so you never lose track.',
              '**The two-finger double tap is a free hint** that never uses a Hint booster. Ask as often as you like.',
              'Turn on **Hold to confirm swaps** if a slip could play a move you did not mean.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'In 5.1 and 5.1.1, a card offering boosters can open while you read the board and move VoiceOver to the top. A two-finger scrub closes it and puts you back on the board; a fix is on its way. See [Playing with VoiceOver](help:voiceover#rotors) and [known issues](/support/known-issues).',
          },
        ],
      },
      {
        id: 'checklist',
        title: 'The hard-board checklist',
        blocks: [
          {
            t: 'table',
            head: ['When', 'Check'],
            rows: [
              ['Before move one', 'Every goal read, moves counted, gates and their kinds found, frozen bricks and lids noted, falling or not.'],
              ['Each move', 'Does this move count toward a goal, free a blocker, or set up a special? If none, find another.'],
              ['Specials', 'Two near each other? Bring them together for a combo instead of firing them alone.'],
              ['Free tools', 'Free Hint, Rocket and UFO used this attempt; free undo spent on a real doubt.'],
              ['Last five moves', 'The board’s edge glows. Count exactly what is left and play the surest moves first.'],
              ['Out of moves', 'Close? Play on, preferably with a free video. Far off? Let it go, and come back fresh.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Rest is a strategy too',
            text: 'A board that beat you five times in a row will often fall the first time after a break. See [Playing calmly](help:playing-calmly).',
          },
        ],
      },
    ],
    related: ['playing-a-board', 'special-bricks-and-combos', 'blockers-encyclopedia', 'boosters-and-pause', 'lives-moves-and-undos', 'voiceover'],
  },

  {
    slug: 'glossary',
    category: 'learn',
    cover: 'board-slide',
    host: 'poppy',
    hostPose: 'idle',
    title: 'OutBrick glossary',
    summary:
      'Every word you meet in OutBrick, from gates and line blasters to lids, the helping hand, the Brick Pass and the Wardrobe, explained in a sentence or two with a link to the guide that covers it.',
    keywords:
      'glossary dictionary terms words meaning definition what is what does mean vocabulary list a-z',
    sections: [
      {
        id: 'board',
        title: 'The board',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Board', text: 'One puzzle on the Journey: a grid of bricks with coloured gates on its edges, goals to meet and a number of moves. See [Playing a board](help:playing-a-board).' },
              { term: 'Slide', text: 'Swiping a brick toward an empty space. It stops where you let go, or leaves the board if you carry it into the open gate of its colour. See [Sliding bricks home](help:playing-a-board#slide).' },
              { term: 'Swap', text: 'Swiping a brick into its neighbour. It stays only if it makes a line; otherwise it springs back and no move is used. See [Swapping and matching](help:playing-a-board#swap).' },
              { term: 'Line (match)', text: 'Three or more bricks of one colour in a row or column, or a 2×2 square. Lines clear. See [Swapping and matching](help:playing-a-board#swap).' },
              { term: 'Gate', text: 'A coloured door on the board’s edge. It takes bricks of its own colour; to any other brick it is a wall. See [Gates](help:bricks-specials-and-blockers#gates).' },
              { term: 'Iced gate', text: 'A gate that is shut until it thaws, a little each time any brick goes home or when pieces in front of it clear. See [Gates](help:bricks-specials-and-blockers#gates).' },
              { term: 'Counted gate', text: 'A gate that takes only so many bricks, shown by its number, then shuts for good. See [Gates](help:bricks-specials-and-blockers#gates).' },
              { term: 'Staged gate', text: 'A gate that stays sealed until the board’s second stage of goals begins. See [Gates](help:bricks-specials-and-blockers#gates).' },
              { term: 'Goal', text: 'What a board asks for, shown in the order panel with how many are left: bricks of a colour to send home or match, crates, locks or moss. See [Reading the goals](help:welcome#goals).' },
              { term: 'Order panel', text: 'The goals at the top of the board, each with its colour-blind symbol and a tick when done. See [The board screen](help:playing-a-board#screen).' },
              { term: 'Stage', text: 'Some boards set their goals in two stages: finish the first and new gates open for the second. The order panel shows “Stage 1 / 2”.' },
              { term: 'Moves', text: 'The big number in the header: moves left on this board, the only limit in OutBrick. It pulses at three. See [The board screen](help:playing-a-board#screen).' },
              { term: 'Star track', text: 'The bar in the header that fills as your score rises, with a star at each threshold. See [Score, stars and the end-of-board bonus](help:playing-a-board#stars).' },
              { term: 'Score and stars', text: 'Every clear earns at least one star; a higher score earns two or three. Each move left at the end adds 150 points. See [Score, stars and the end-of-board bonus](help:playing-a-board#stars).' },
              { term: 'Goal complete!', text: 'The banner when the last goal is met. Your leftover moves then become line blasters and go off; tap to skip.' },
              { term: 'Shuffle!', text: 'The banner when no move is possible and the board reshuffles itself, for free. See [You can never get stuck](help:playing-a-board#never-stuck).' },
              { term: 'Tray', text: 'The row under the board: Pause, then Hint, Rocket, UFO and Undo. See [The tray](help:boosters-and-pause#tray).' },
              { term: 'Teaching card', text: 'A short card with a moving hand that shows a new idea the first time you meet it. Tap anywhere to start playing.' },
              { term: 'Win streak', text: 'A small chain of bricks under the moves when you win new levels in a row. Streaks add free boosters to your next board. See [Free boosters](help:boosters-and-pause#free).' },
            ],
          },
        ],
      },
      {
        id: 'bricks',
        title: 'Bricks and specials',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Brick', text: 'A plain toy brick in one of the board’s colours, stamped with its colour-blind symbol. It can slide, swap and match.' },
              { term: 'Long, big, L and T bricks', text: 'Shaped bricks that slide and fall as one piece, are never swapped, never count in lines, and need a gate as wide as they are. A goal counts every cell. See [Face-down bricks, portals and shaped bricks](help:bricks-specials-and-blockers#more).' },
              { term: 'Face-down brick', text: 'A “?” brick that hides its colour. It turns over when a brick next to it leaves the board, never when it is moved, and still plays by its real colour.' },
              { term: 'Key brick', text: 'The brick that opens a keyhole lid when it leaves the board, matched or slid out through its gate. See [Sealed rooms and their lids](help:bricks-specials-and-blockers#lids).' },
              { term: 'Special', text: 'A brick made by a bigger match that clears more when it goes off. Tap it to fire it where it stands, or swap it. See [Special bricks](help:bricks-specials-and-blockers#specials).' },
              { term: 'Line blaster', text: 'Made from four in a line. Clears its whole row or column, along the direction you moved. It can also slide out through a gate of its colour without going off.' },
              { term: 'Bomb', text: 'Made from an L, T or + shape. Blasts the 3×3 square around it, twice.' },
              { term: 'Homing dart', text: 'Made from a 2×2 square. Flies to a piece a goal needs.' },
              { term: 'Colour bomb', text: 'Made from five in a line. Swap it with a colour to take every plain brick of that colour.' },
              { term: 'Combo', text: 'Two specials swapped together for a bigger effect, such as a cross or a 5×5 blast. See [Combos](help:bricks-specials-and-blockers#combos) and [Special bricks and combos](help:special-bricks-and-combos).' },
              { term: 'Cascade', text: 'A line that forms by itself when bricks fall after a clear. It costs no extra move. See [How to beat a hard board](help:hard-boards#falling).' },
            ],
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Blockers, lids and portals',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Blocker', text: 'Anything in the way. Tap one on a board for a one-line reminder of how to clear it; its look changes with the village, its rules do not. See [Blockers](help:bricks-specials-and-blockers#blockers) and [The blockers encyclopedia](help:blockers-encyclopedia).' },
              { term: 'Crate', text: 'Stops sliding bricks. One or two layers; each line made beside it breaks a layer.' },
              { term: 'Ice', text: 'Holds the brick inside it still. A line beside it breaks the ice.' },
              { term: 'Lock', text: 'The brick cannot move. Only a line **through** it frees it.' },
              { term: 'Moss', text: 'Creeps onto a brick after any move that clears no moss. A line beside it clears it.' },
              { term: 'Statue', text: 'Stands in a gap in the board. Nothing slides through it, and it stays: find another lane.' },
              { term: 'Portal', text: 'One of a pair: slide a brick into one and it comes out of its twin on another side. See [Face-down bricks, portals and shaped bricks](help:bricks-specials-and-blockers#more).' },
              { term: 'Sealed room (sealed bed)', text: 'Bricks under a lid that cannot move until the lid opens. The teaching card calls it a sealed bed. See [Sealed rooms and their lids](help:bricks-specials-and-blockers#lids).' },
              { term: 'Lid', text: 'The cover of a sealed room, in five kinds: a counter, a colour counter, a stained-glass key, a brass clock and a keyhole. Each opens its own way. See [Sealed rooms and their lids](help:bricks-specials-and-blockers#lids).' },
            ],
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Kinds of board',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Hard', text: 'A board with a purple plaque under the header. Goals ask for about 15% more, with a few more obstacles; a clear pays 50 coins. See [Hard, Super Hard, Boss and Night boards](help:playing-a-board#tiers).' },
              { term: 'Super Hard', text: 'Goals ask for about 30% more; a clear pays 80 coins.' },
              { term: 'Boss', text: 'The last board of a chapter, from level 40. Goals ask for about 40% more; a clear pays 80 coins.' },
              { term: 'Night board', text: 'A board set after dark, in chalk and ink. It plays like a Hard board.' },
              { term: 'The twelve kinds of board', text: 'Every village’s boards 1 to 12 follow the same order, from Send Them Home to Quiet Puzzle. See [The twelve kinds of board](help:bricks-specials-and-blockers#kinds) and [Kinds of board](help:board-kinds).' },
              { term: 'Falling board', text: 'A board where bricks fall to fill gaps. On some, new bricks drop in; on Corner Pieces and Quiet Puzzle, none arrive.' },
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'Lives, moves and boosters',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Life', text: 'Used only when you lose an attempt: giving up when out of moves, or leaving or restarting after a move. Up to five (eight with the current Brick Pass), one back every 30 minutes. See [Lives](help:lives-moves-and-undos#lives).' },
              { term: 'Free try', text: 'Once a day, with no lives left, a free attempt at a board: win and you keep the life, lose and it costs nothing.' },
              { term: 'Unlimited lives', text: 'A window of 1, 3 or 24 hours in which losing costs no life. See [Out of lives](help:lives-moves-and-undos#out-of-lives).' },
              { term: 'Out of moves', text: 'The screen you see when moves run out before the goals are done, with ways to play on in the same attempt, or **Give up**. See [Out of moves](help:lives-moves-and-undos#out-of-moves).' },
              { term: 'Play on', text: 'Buying or watching for more moves in the same attempt: +5 moves for 300, then 500, then 900 coins, or +2, then +1, then a UFO by video. It never costs a life.' },
              { term: '+5 moves', text: 'A saved play-on from a bundle, used at the out-of-moves screen instead of coins.' },
              { term: 'Helping hand', text: 'From your sixth attempt at the same board, 3 extra moves before you start, once a day per board. See [Level failed, and trying again](help:lives-moves-and-undos#level-failed).' },
              { term: 'Level failed', text: 'The screen after giving up, showing how close you came, with **Try again** and **Back to the map**.' },
              { term: 'Booster', text: 'A tool in the tray: Hint, Rocket or UFO. Every attempt comes with one of each free. See [Boosters, hints and Pause](help:boosters-and-pause).' },
              { term: 'Hint', text: 'Shows and says the best move, a slide or a swap.' },
              { term: 'Rocket', text: 'Tap it, then a plain brick: the brick becomes a line blaster that fires along its row.' },
              { term: 'UFO', text: 'Tap it, then a piece: it beams one layer off it, such as a crate layer, ice, a lock, moss or a brick.' },
              { term: 'Undo', text: 'Takes back your last move. The first on every board is free; the rest come from a tank of five that refills one every 25 minutes. See [Undo](help:boosters-and-pause#undo).' },
              { term: 'Coins', text: 'Earned by clearing boards and from rewards; spent on boosters, play-ons, lives and Wardrobe pieces.' },
            ],
          },
        ],
      },
      {
        id: 'journey',
        title: 'The Journey',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'The Journey', text: 'The map of all 2,000 levels, one long brick-built boulevard through 167 villages. It is the raised centre tab. See [The Journey and its villages](help:journey-and-villages).' },
              { term: 'Village', text: 'Twelve boards on the map, each village built from toy bricks in its own look (the final village has eight). It holds up to 36 stars.' },
              { term: 'Garden City', text: 'The first village, levels 1 to 12, where every new idea is taught. Clover Farm, levels 13 to 24, comes next. See [Your first week](help:first-week).' },
              { term: 'Chapter', text: 'Twenty levels, used for chapter badges, Boss boards and Game Center achievements. Chapters and villages are counted separately.' },
              { term: 'Star rewards', text: 'Each village’s star ladder: 50 coins, a Hint, 100 coins and a Rocket, claimed as your stars there grow.' },
              { term: 'Journey chest', text: 'A chest on the path. Tap it to see what it holds; reaching it pays its coins and boosters on the win card.' },
              { term: 'Village Gift', text: 'A timed gift on the map; its badge counts down to when it is ready.' },
              { term: 'Gift Balloon', text: 'Floats by now and then. An optional video pops it for coins or a short free-booster window.' },
              { term: 'All villages', text: 'The atlas of every village as a card, filtered by in progress, completed or locked.' },
              { term: 'My level', text: 'The pin button that brings the map back to your current level.' },
            ],
          },
        ],
      },
      {
        id: 'rewards',
        title: 'Rewards and events',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Daily Brick', text: 'Your first clear of each day pays 100 coins, collected automatically on Home. See [The Daily Brick and day streaks](help:rewards-and-events#daily).' },
              { term: 'Day streak', text: 'The flame on Home: the days in a row you have cleared a board, with rewards at 3, 7, 14, 30, 60 and 100 days.' },
              { term: 'Streak saver', text: 'Earned with streak rewards. It restores a missed day for free within a week; you can hold two.' },
              { term: 'Brick Wheel', text: 'One free spin a day for coins or a booster, from its button on Home. See [The Brick Wheel](help:rewards-and-events#wheel).' },
              { term: 'Missions', text: 'Three things to do today and three for the week, each with a reward. See [Missions](help:rewards-and-events#missions).' },
              { term: 'Brick Pass', text: 'A season of 30 tiers climbed by clearing new levels, with a Free track for everyone and a Premium track you can buy. See [The Brick Pass](help:rewards-and-events#pass).' },
              { term: 'Events', text: 'Come and go on a calendar, shown as a banner on Home and a badge on the Journey. Some double or triple the coins for a clear.' },
              { term: 'Friend Rescue, Village Race, Brick Royale, Crew Race', text: 'Races and rescues that run alongside the Journey. Each can be switched off in **Settings › Game › Game features**. See [Events and races](help:rewards-and-events#events).' },
              { term: 'Piggy Bank', text: 'Fills with coins as you clear new levels; you can open it for a small price when it is ready. See [What is in the Shop](help:shop-and-purchases#shelves).' },
              { term: 'Brick Cinema', text: 'A board of prize squares on the Journey; each optional video turns one square.' },
              { term: 'Leaders', text: 'The all-time leaderboard tab, open from level 21. See [Leaders and Game Center](help:rewards-and-events#leaders).' },
              { term: 'Remove Ads', text: 'A one-time purchase that turns every Watch button into **Claim reward**, within the same daily limits. See [Remove Ads and the Brick Pass](help:shop-and-purchases#remove-ads).' },
            ],
          },
        ],
      },
      {
        id: 'friends',
        title: 'Friends, the Collection and you',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'The nine friends', text: 'Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry and Poppy: toy-brick friends who cheer you on in text bubbles. See [Meet the friends](help:meet-the-friends).' },
              { term: 'Host friend', text: 'The village’s friend in the round frame in the board’s header, dressed for that village. Tap them for a giggle or a wave.' },
              { term: 'Profile', text: 'Opened from your avatar: your name, level, flag and stats, with the game’s version at the foot. See [Your Profile](help:friends-and-wardrobe#profile).' },
              { term: 'Collection', text: 'Opens at level 95: Brick Cards, Chapter Badges, Keepsakes and Seasonal Cards. See [The Collection](help:friends-and-wardrobe#collection).' },
              { term: 'Sparks', text: 'Given for duplicate Seasonal Cards; three choose a missing card.' },
              { term: 'Wardrobe', text: 'Outfits, board plates, palettes, brick finishes and more. They change how the game looks, never how it plays, and accessibility pieces are always free. See [The Wardrobe](help:friends-and-wardrobe#wardrobe).' },
            ],
          },
        ],
      },
      {
        id: 'settings',
        title: 'Settings and accessibility',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Colour-blind', text: 'Stamps a shape on every brick, gate and goal so colour is never the only clue. On from the start. See [Colour-blind symbols](help:vision-hearing-and-motion#colour-blind).' },
              { term: 'High-contrast board', text: 'A near-black floor, white outlines, large symbols and thick gate outlines. See [High-contrast board](help:vision-hearing-and-motion#contrast).' },
              { term: 'Animation speed', text: 'How fast pieces swap, fall and clear, from 50% to 200%.' },
              { term: 'Hold to confirm swaps', text: 'With VoiceOver, Voice Control, Switch Control or a keyboard, each move is chosen twice before it plays. See [Hold to confirm swaps](help:voice-control-switch-control-keyboard#hold-to-confirm).' },
              { term: 'Row sound', text: 'Adds a **Hear row** action on the board: a quiet tone per piece, one pitch per colour symbol.' },
              { term: 'Rotor', text: 'A VoiceOver tool for jumping between pieces: Pieces that can match, Specials, Goals, Blockers and Gates. See [Rotors](help:voiceover#rotors).' },
              { term: 'Quick play', text: 'After a win, goes straight to the next board instead of back to the map. See [The Game tab](help:settings#game).' },
              { term: 'Game features', text: 'In **Settings › Game**: switch off races, rescues or offers on the map you would rather not see. Nothing you have earned is lost.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Looking for a word that is not here? Use your browser’s Find on this page, or ask in [Help & support](/community/c/help), and we will add it.',
          },
        ],
      },
    ],
    related: ['welcome', 'playing-a-board', 'bricks-specials-and-blockers', 'blockers-encyclopedia', 'special-bricks-and-combos', 'common-questions'],
  },
];
