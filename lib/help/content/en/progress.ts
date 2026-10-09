import type { HelpArticle } from '../../model.ts';

/** The Journey, rewards, the Shop and the friends, in English. Checked against 5.1.1 (68). */
export const progressArticles: HelpArticle[] = [
  {
    slug: 'journey-and-villages',
    category: 'progress',
    cover: 'journey',
    title: 'The Journey and its villages',
    summary:
      'How the map of 2,000 levels works: villages and chapters, stars and village rewards, chests and gifts, the atlas of every village, and replaying a board.',
    keywords: 'map levels village chapter stars rewards chest gift balloon atlas replay locked',
    sections: [
      {
        id: 'map',
        title: 'The map',
        blocks: [
          {
            t: 'shot',
            id: 'journey',
            alt: 'The Journey map: a cobbled path climbing through a village of pink blossom trees, with level stops 213, 214 and 215. Level 214 glows with a Play label. Badges run down both sides.',
            caption: 'The Journey is one long, brick-built boulevard. Your current level glows.',
          },
          {
            t: 'list',
            items: [
              'The Journey has **2,000 levels** in **167 villages** of twelve boards each (the final village has eight).',
              'Every village is built from toy bricks in its own theme, and repeats of a theme come back at a different time of day or season, so no two villages look the same.',
              'Tap your **current level** to play it. Tap any **cleared** level to replay it and improve its stars; replaying never moves your place on the map.',
              'A **locked** level tells you how many levels away it is.',
              'The **My level** pin brings you back to where you are.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Villages and chapters',
            text: 'A **village** is twelve boards on the map. A **chapter** is twenty levels, used for chapter badges and Game Center achievements. They are counted separately, so a chapter can end in the middle of a village.',
          },
        ],
      },
      {
        id: 'stars',
        title: 'Stars and village rewards',
        blocks: [
          {
            t: 'list',
            items: [
              'Each board can earn up to three stars, so a village holds 36. The **stars** pill in the header shows how many you have in this village.',
              'Collecting stars climbs the village’s star ladder: 50 coins, a Hint, 100 coins and a Rocket. A badge on the map tells you when a reward is ready to claim.',
              'Clearing a whole village shows a celebration card with **Share** and **On we go**.',
            ],
          },
        ],
      },
      {
        id: 'map-extras',
        title: 'Chests, gifts and other things on the map',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Journey chest', text: 'Tap a chest on the path to see what it holds. When you reach it, the win card lists the coins and boosters it paid.' },
              { term: 'Village gift', text: 'A timed gift; the badge counts down to when it is ready.' },
              { term: 'Gift balloon', text: 'Floats by now and then. An optional video catches it for coins or a short free-booster window.' },
              { term: 'Secrets', text: 'Little hidden things to find along the way. Tap anything that looks out of place.' },
              { term: 'All villages', text: 'The atlas: every village as a card, filtered by in progress, done or locked. **My village** takes you home.' },
              { term: 'Game Center', text: 'When you are signed in, a badge opens your challenges and achievements.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Prefer a quieter map? Settings › Game › **Game features** lets you hide events and offers you are not interested in. Nothing you have earned is lost.',
          },
          { t: 'shot', id: 'atlas', alt: 'All Villages: filters for All 167, In progress, Completed and Locked; a heading for First Light, villages 1 to 28, with 217 of 1,008 stars; and village cards with their levels and stars, such as Cherry Blossom Town, levels 205 to 216, 9 of 36 stars, marked You are here, and Spaceport Gardens, which unlocks when level 216 is cleared.', caption: 'The atlas of every village.' },
        ],
      },
      {
        id: 'a11y',
        title: 'The map with VoiceOver',
        blocks: [
          {
            t: 'p',
            text: 'Every element on the map offers **Where am I** and **Go to my next level**; the two-finger double tap speaks your village, levels cleared and next level; and a three-finger swipe moves a village at a time. See [Playing with VoiceOver](help:voiceover#journey).',
          },
        ],
      },
    ],
    related: ['playing-a-board', 'rewards-and-events', 'menus-tour', 'voiceover'],
  },

  {
    slug: 'rewards-and-events',
    category: 'progress',
    cover: 'pass',
    title: 'Rewards, events and the Brick Pass',
    summary:
      'The Daily Brick and day streaks, the Brick Wheel, Missions, the Brick Pass, events and races, and the leaderboard.',
    keywords: 'daily brick streak wheel spin missions brick pass season tiers premium event race royale rescue crew leaderboard leaders standings achievements game center piggy bank cinema stamp',
    sections: [
      {
        id: 'daily',
        title: 'The Daily Brick and day streaks',
        blocks: [
          {
            t: 'list',
            items: [
              '**Daily Brick:** your first clear of each day pays 100 coins, collected automatically on Home.',
              '**Day streak:** the flame on Home counts the days in a row you have cleared a board. Tap it to see the next reward.',
            ],
          },
          {
            t: 'table',
            caption: 'Day-streak rewards',
            head: ['Days in a row', 'Reward'],
            rows: [
              ['3', '100 coins'],
              ['7', '250 coins and a streak saver'],
              ['14', '500 coins and a streak saver'],
              ['30', '800 coins and a streak saver'],
              ['60', '1,200 coins and a streak saver'],
              ['100', '2,500 coins and a streak saver'],
              ['Every 100 after', '2,000 coins and a streak saver'],
            ],
          },
          {
            t: 'p',
            text: 'Missed a day? A streak of three days or more can be restored within a week, free with a streak saver or for 250 coins. You can hold up to two savers.',
          },
        ],
      },
      {
        id: 'wheel',
        title: 'The Brick Wheel',
        blocks: [
          {
            t: 'p',
            text: 'The **Brick Wheel** button on Home gives one free spin a day, for coins (50 to 500) or a Hint, Rocket or UFO. Clear three new levels in a day and the free spin pays double coins. An optional video gives a second spin.',
          },
        ],
      },
      {
        id: 'missions',
        title: 'Missions',
        blocks: [
          {
            t: 'p',
            text: 'Tap **Missions** on Home, or the Missions card on the Pass tab: three things to do today and three for the week, each with a reward. Finish one and tap **Claim**, or **Claim all**. Daily missions reset at midnight UTC; weekly ones on Monday.',
          },
        ],
      },
      {
        id: 'pass',
        title: 'The Brick Pass',
        blocks: [
          {
            t: 'shot',
            id: 'pass',
            alt: 'The Pass tab: a season header, a Missions card and a Collection card, then two columns of rewards, Free and Premium, climbing through numbered tiers.',
            caption: 'The Pass tab. Every clear moves you up the season’s 30 tiers.',
          },
          {
            t: 'list',
            items: [
              'Each **season** has **30 tiers**. Clearing new levels climbs them; Hard clears count one extra and Super Hard two.',
              'The **Free** track pays coins and boosters to everyone.',
              'The **Premium** track, unlocked by buying that season’s Brick Pass, adds bigger rewards. Owning it also adds three lives to your tank, three free moves at the out-of-moves screen, and takes away videos: rewards are claimed without watching.',
              'Premium tiers you have already reached are paid the moment you unlock it.',
            ],
          },
        ],
      },
      {
        id: 'events',
        title: 'Events and races',
        blocks: [
          {
            t: 'p',
            text: 'Events come and go on a calendar and show as a banner on Home and a badge on the Journey. Some double or triple the coins for a clear. Four kinds of race and rescue run alongside:',
          },
          {
            t: 'defs',
            items: [
              { term: 'Friend Rescue', text: 'A weekly story: clear four village finales to rescue a friend.' },
              { term: 'Village Race', text: 'Race four players through a village. Shares your player name.' },
              { term: 'Brick Royale', text: 'An opt-in contest for up to 100 players. Shares your player name when you join.' },
              { term: 'Crew Race', text: 'Five new levels in a day, against players and friends.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Any of these can be switched off in **Settings › Game › Game features**, along with offers on the map.',
          },
        ],
      },
      {
        id: 'leaders',
        title: 'Leaders and Game Center',
        blocks: [
          {
            t: 'list',
            items: [
              'The **Leaders** tab unlocks at level 21: one all-time board of players, with flags. Tap **Show more** to see further down.',
              'You appear on it as long as **Settings › Game › Show me on the standings board** is on. It publishes your player name and level; turning it off removes you.',
              'Choose or hide your **flag** in your Profile.',
              '**Game Center** has 65 achievements and leaderboards for highest level, total clears, today and this week. Sign in with the bar on the Leaders tab, or reach Game Center from the Journey badge or the Pause menu.',
            ],
          },
        ],
      },
    ],
    related: ['journey-and-villages', 'shop-and-purchases', 'friends-and-wardrobe', 'apple-features'],
  },

  {
    slug: 'shop-and-purchases',
    category: 'progress',
    cover: 'shop',
    title: 'The Shop, purchases and restoring',
    summary:
      'What is on each shelf of the Shop, what Remove Ads and the Brick Pass do, how to restore purchases on a new device, and how refunds work.',
    keywords: 'buy purchase in-app price coins bundle remove ads restore purchase refund money receipt family',
    sections: [
      {
        id: 'shelves',
        title: 'What is in the Shop',
        blocks: [
          {
            t: 'shot',
            id: 'shop',
            alt: 'The Shop: 2,580 coins and a Special Offers shelf with a one-time Starter Bundle of coins, lives and boosters, the Piggy Bank, and a Booster Pass of 60 minutes of free UFOs and Rockets.',
            caption: 'The Shop, reached from its tab, the coins on Home, or the Shop door on the Journey.',
          },
          {
            t: 'p',
            text: 'Shelves from top to bottom: **Special Offers** (the Starter Bundle while it lasts, the Piggy Bank, the Booster Pass, the Brick Pass and Remove Ads), the **Weekly Deal**, event offers during an event, the **Weekend Deal** from Friday to Monday, **Boosters & Moves**, **Boosters**, **Passes**, **Bundles**, **Lives**, the **Wardrobe**, **Coins**, and finally **Restore Purchase** and the legal links.',
          },
          {
            t: 'list',
            items: [
              'Prices are shown in your own currency by the App Store.',
              'Your first coin purchase is doubled, once.',
              'The **Piggy Bank** fills with coins as you clear new levels; you can open it for a small price when it is ready.',
              'Every pass and timed item is a one-time purchase. **Nothing in OutBrick is a subscription**, and nothing renews by itself.',
              'Nothing paid is offered on a board before level 6.',
            ],
          },
        ],
      },
      {
        id: 'remove-ads',
        title: 'Remove Ads and the Brick Pass',
        blocks: [
          {
            t: 'p',
            text: '**Remove Ads** takes away every optional video, but not the rewards: buttons that used to say Watch now say **Claim reward** and pay at once, within the same daily limits. Owning the current season’s **Brick Pass** does the same for that season, and adds three lives to your tank.',
          },
        ],
      },
      {
        id: 'restore',
        title: 'Restoring purchases',
        blocks: [
          {
            t: 'steps',
            items: [
              'Sign in to the iPhone with the same Apple Account you bought with, and to iCloud.',
              'Open the **Shop** and scroll to the very bottom.',
              'Tap **Restore Purchase**.',
            ],
          },
          {
            t: 'p',
            text: 'Restore brings back everything you own for good: **Remove Ads**, Brick Pass seasons 1 to 3 and Wardrobe items. Coins, boosters, lives and other things you use up are not restored by the App Store; they travel with your progress through iCloud instead. See [Progress, iCloud and privacy](help:progress-privacy-and-account).',
          },
        ],
      },
      {
        id: 'refunds',
        title: 'Refunds and problems with a purchase',
        blocks: [
          {
            t: 'p',
            text: 'Purchases are made through Apple, so Apple handles refunds: see [our refunds page](/refunds) for how to ask. If something you bought did not arrive, try **Restore Purchase** first, then write to us privately with the [contact form](/contact). Never post a receipt or order number in the community.',
          },
        ],
      },
    ],
    related: ['rewards-and-events', 'lives-moves-and-undos', 'progress-privacy-and-account', 'troubleshooting'],
  },

  {
    slug: 'friends-and-wardrobe',
    category: 'progress',
    cover: 'wardrobe',
    title: 'Friends, the Collection and the Wardrobe',
    summary:
      'Meet the nine brick friends, see what they do on Home and on the board, and how your Profile, the Collection and the Wardrobe work.',
    keywords: 'mascot friends characters bloo peach sprout moss bricko zippy vio flurry poppy wardrobe outfit skin cosmetics collection cards badges keepsakes profile avatar name flag',
    sections: [
      {
        id: 'friends',
        title: 'The nine friends',
        blocks: [
          {
            t: 'p',
            text: '**Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry and Poppy** are toy-brick friends. Three of them stand on the stage on Home, taking turns. On a board, the village’s host friend sits in the round frame in the header, dressed for that village: tap them for a giggle, a wave or a high-five. They cheer you on in text bubbles; they do not speak aloud.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'On devices with Apple’s on-device language model, the friends can make up their own lines (**Settings › Game › Mascot AI chatter**). It runs entirely on your device.',
          },
        ],
      },
      {
        id: 'profile',
        title: 'Your Profile',
        blocks: [
          {
            t: 'p',
            text: 'Tap your avatar on Home or the Journey. Change your name and avatar, choose your country flag (automatic, a country you pick, or hidden), open the Collection and see your stats: first-try wins, boards beaten under target, best streak, total clears, moves and more. The game’s version number is at the foot; quote it when you [report a bug](help:reporting-bugs).',
          },
        ],
      },
      {
        id: 'collection',
        title: 'The Collection',
        blocks: [
          {
            t: 'p',
            text: 'The Collection opens at level 95, from your Profile or the Pass tab. It holds **Brick Cards**, **Chapter Badges** for each chapter you finish, **Keepsakes** and **Seasonal Cards**: a card every third new level, nine to a season. Spare Sparks can be exchanged for a missing card.',
          },
        ],
      },
      {
        id: 'wardrobe',
        title: 'The Wardrobe',
        blocks: [
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'The Wardrobe: King Bricko in a gold crown and red ruff with a green Wear it button, and below, tabs for Outfits, Board plates, Palettes and Brick finish, and the Seaside Set.',
            caption: 'Outfits, board plates, palettes, brick finishes, celebrations, trails and frames.',
          },
          {
            t: 'list',
            items: [
              'Wardrobe pieces change **how the game looks, never how it plays**.',
              'Unlock them with coins, mission tokens or as purchases, then tap **Wear it**. **Take off** or **Village outfit** puts things back.',
              'Accessibility pieces are always free.',
            ],
          },
        ],
      },
    ],
    related: ['menus-tour', 'rewards-and-events', 'shop-and-purchases', 'settings'],
  },
];
