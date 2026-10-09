import type { HelpArticle } from '../../model.ts';

/**
 * Families and calm play, the economy in plain words, the nine friends, and recovering progress
 * or a purchase, in English. Checked against 5.1.1 (68) and the guides beside it.
 */
export const familyArticles: HelpArticle[] = [
  {
    slug: 'parents-guide',
    category: 'family',
    cover: 'settings-game',
    title: 'A guide for parents and carers',
    summary:
      'What OutBrick is and is not, the Apple controls that put you in charge of purchases, time and notifications, how refunds work, what data the game and this website keep, and a checklist to work through.',
    keywords:
      'parent carer guardian family child kids son daughter safe safety parental controls screen time ask to buy family sharing in-app purchases spending downtime app limits age rating 4+ ads adverts strangers chat privacy refund',
    host: 'peach',
    hostPose: 'think',
    sections: [
      {
        id: 'at-a-glance',
        title: 'What is true about OutBrick',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick is a calm slide-and-match puzzle, rated **4+** on the App Store. Players move toy bricks into gates of their own colour, or swap neighbours to make lines, and each board gives a number of moves to do it in. Before you reach for any setting, here is what the game does and does not do.',
          },
          {
            t: 'list',
            items: [
              '**There is no clock anywhere.** No board, menu or event is timed. The number of moves is the only limit, so nobody is ever hurried.',
              '**No chat, no strangers.** There is no chat, no messaging between players and nothing written by other players inside the game. Other players can only ever see a player name and level (more on that [below](#other-players)).',
              '**No adverts unless your child taps to watch one.** There are no banners and no adverts between boards. A video only plays when a player presses a button to watch one for a reward, each kind is capped every day (39 in total), and a video can always be declined at no cost.',
              '**Lives are used by losing, not by playing.** Opening a board needs a life but does not use one. A life is used when an attempt is lost: giving up when the moves run out, or restarting or leaving after making a move, and the game says so before it happens. Winning never costs a life, and lives come back on their own, one every 30 minutes.',
              '**No account to create.** Progress is saved on the device and in your family’s own iCloud. OutBrick has no analytics, and the developer does not receive gameplay data.',
              '**Nothing is a subscription.** Every purchase is a one-time purchase through Apple, nothing renews by itself, and nothing paid is offered on a board before level 6.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Free to play, and it stays that way',
            text: 'Every one of the 2,000 levels can be played without paying or watching anything. Lives refill by themselves, every attempt comes with a free Hint, Rocket and UFO, and the first undo on every board is free. See [How rewards, lives and ads work](help:rewards-and-ads) for every number.',
          },
        ],
      },
      {
        id: 'purchases',
        title: 'Purchases: Ask to Buy, restrictions and refunds',
        blocks: [
          {
            t: 'p',
            text: 'Real-money items appear in the **Shop** and on a few cards in the game, always with a price in your own currency, and always through Apple’s own purchase sheet. Two Apple controls decide whether that sheet can complete.',
          },
          { t: 'h3', text: 'Ask to Buy (Family Sharing)' },
          {
            t: 'p',
            text: 'If your child has their own Apple Account in your Family Sharing group, Ask to Buy sends every purchase request, including purchases inside games, to you to approve or decline.',
          },
          {
            t: 'steps',
            items: [
              'On your own iPhone, open **Settings › Family**.',
              'Tap your child’s name.',
              'Tap **Ask to Buy** and turn it on.',
            ],
          },
          { t: 'h3', text: 'Turn off in-app purchases altogether' },
          {
            t: 'steps',
            items: [
              'On your child’s device, open **Settings › Screen Time**. (For a child in Family Sharing you can do this from your own iPhone: **Settings › Screen Time**, then your child’s name.)',
              'Tap **Content & Privacy Restrictions** and turn it on.',
              'Tap **iTunes & App Store Purchases**.',
              'Set **In-app Purchases** to **Don’t Allow**. While you are there, set **Require Password** to **Always Require**.',
              'Set a **Screen Time passcode** that your child does not know, so these choices stay as you left them.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Apple occasionally renames rows between iOS versions. If a name on your device differs slightly from the one here, look for the closest match under **Content & Privacy Restrictions**.',
          },
          {
            t: 'p',
            text: 'With in-app purchases off, OutBrick still plays every board: coins earned in play still buy boosters, refills and extra moves, and optional videos still work.',
          },
          { t: 'h3', text: 'If something was bought by mistake' },
          {
            t: 'p',
            text: 'Apple takes every payment, so only Apple can refund one. Go to [reportaproblem.apple.com](https://reportaproblem.apple.com), sign in with the Apple Account used for the purchase, choose **Request a refund**, and pick the OutBrick item. Apple decides, under its rules and your local consumer law. We cannot see your payment details or issue an App Store refund ourselves. More on our [refunds page](/refunds) and in [Lost progress or a missing purchase](help:lost-progress-and-purchases#refunds).',
          },
          {
            t: 'shot',
            id: 'shop',
            alt: 'The Shop: 2,580 coins and a Special Offers shelf with a one-time Starter Bundle of coins, lives and boosters, the Piggy Bank, and a Booster Pass of 60 minutes of free UFOs and Rockets.',
            caption: 'The Shop. Every real-money item goes through Apple’s purchase sheet.',
          },
        ],
      },
      {
        id: 'time',
        title: 'Time limits, Downtime and reminders',
        blocks: [
          {
            t: 'p',
            text: 'Because no board is timed, OutBrick is easy to put down: nothing is lost by stopping between boards, and lives keep refilling while the game is closed. If you would like a firmer edge to play time, Apple’s Screen Time does it well.',
          },
          {
            t: 'defs',
            items: [
              { term: 'App Limits', text: '**Settings › Screen Time › App Limits › Add Limit.** Choose the **Games** category, or OutBrick on its own, and a daily amount. When the time is up, iOS covers the game.' },
              { term: 'Downtime', text: '**Settings › Screen Time › Downtime.** A scheduled quiet time, such as bedtime, when only the apps you allow can open.' },
              { term: 'OutBrick reminders', text: 'In the game, **Settings › Game › Notifications** turns them all off. On the iPhone, **Settings › Notifications › OutBrick** controls them and the icon badge.' },
            ],
          },
          {
            t: 'list',
            items: [
              'OutBrick never asks for notification permission when it first opens. After the third clear it asks whether Bloo may keep your place, and **Not now** waits a week.',
              'When reminders are allowed, the game sends **at most one notification every 20 hours**, and **never between 22:00 and 09:00**.',
              'The **icon badge** counts rewards waiting to be collected, up to nine. It is only shown if notifications are allowed, and opening the game clears it.',
              'A **Focus filter** can turn off the music, pause reminders and hide the badge while a Focus such as Sleep is on. See [Playing calmly](help:playing-calmly#reminders).',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'The kindest stopping point is between boards, on Home or the map. Leaving a board before the first move is always free; after a move, the **Leave?** card says a life will be used before anything happens.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'What the game and this website keep',
        blocks: [
          {
            t: 'p',
            text: 'This is a summary of our [privacy policy](/privacy), which has the full detail.',
          },
          { t: 'h3', text: 'In the game' },
          {
            t: 'list',
            items: [
              '**No accounts and no analytics.** The developer does not receive gameplay data.',
              '**Progress** is stored on the device and synced through your own iCloud, which the developer cannot read.',
              '**Purchases** are processed by Apple. OutBrick never sees or stores card details.',
              '**Game Center** is optional and run by Apple, under your Game Center settings.',
              '**Adverts:** the only third party in the game is Google’s advertising service, and it runs only when a player chooses to watch a video. Video adverts are limited to Google’s general-audience content rating. If iOS asks whether OutBrick may track, **Ask App Not to Track** leaves the game unchanged. In the EU, the UK and Switzerland, a consent form appears before the first video, and **Settings › Game › Advertising choices** reopens it.',
              '**Remove Ads**, or holding the current season’s Brick Pass, stops the game asking for adverts at all, and the rewards still pay.',
              '**Delete My Data**, at the foot of **Settings › Game**, resets the device’s progress and asks iCloud to delete the save. See [Progress, iCloud and privacy](help:progress-privacy-and-account#delete).',
            ],
          },
          { t: 'h3', text: 'On this website' },
          {
            t: 'list',
            items: [
              'Reading the website needs no account. Visits are measured with Google Analytics **only if you accept it** in the cookie banner; until then nothing loads from Google.',
              'The **contact form** keeps what you send so we can answer it. A support case is kept for 24 months after it is closed, then deleted.',
              'A **community account** keeps a public display name and a private email address, which is never shown to anyone.',
              'You can ask for a copy of what we hold, or for it to be deleted, through the [contact form](/contact) with the topic set to Privacy.',
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'Please leave your child’s personal details out of support messages. A level number and the device are all we need.',
          },
        ],
      },
      {
        id: 'other-players',
        title: 'Other players and the community',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Leaders tab', text: 'Unlocks at level 21. It shows player names and levels, with an optional flag. Turn off **Settings › Game › Show me on the standings board** to be removed, and hide the flag in the Profile.' },
              { term: 'Races', text: '**Village Race** and **Brick Royale** share the player name with the other players in that race, and only when your child joins one. Each can be switched off in **Settings › Game › Game features**, along with Friend Rescue, Crew Race and offers on the map.' },
              { term: 'Player name', text: 'Set in the Profile (tap the avatar). A made-up name is a good idea.' },
              { term: 'Game Center', text: 'Apple’s service for achievements, leaderboards and friends. Its friend and multiplayer settings sit in **Screen Time › Content & Privacy Restrictions**, in the Game Center section.' },
              { term: 'Messages', text: 'OutBrick has a Messages app for sending a level challenge or a sticker to someone your child already messages. Screen Time’s **Communication Limits** apply to it as to any conversation.' },
            ],
          },
          { t: 'h3', text: 'The OutBrick Community' },
          {
            t: 'list',
            items: [
              'The community is a forum on this website, **separate from the game**. Anyone can read it; posting needs an account, and accounts are for people **aged 16 and over**.',
              'Its links in **Settings** open in Safari, outside the game, for exactly that reason. Screen Time’s web content limits apply to it like any website.',
              'A member’s email address is never shown to anyone. Every post is public and moderated, and anything that breaks the [guidelines](/community/guidelines) can be reported.',
              'If you think a child has made an account, tell us through the [contact form](/contact) and we will delete it.',
            ],
          },
        ],
      },
      {
        id: 'checklist',
        title: 'A checklist to work through',
        blocks: [
          {
            t: 'p',
            text: 'Ten minutes with your child’s device and your own covers everything. Print this page, or tick the boxes in your head.',
          },
          {
            t: 'table',
            caption: 'Setting up OutBrick for a child',
            head: ['Done', 'Check', 'Where'],
            rows: [
              ['☐', 'Ask to Buy is on', 'Your iPhone: **Settings › Family ›** your child **› Ask to Buy**'],
              ['☐', 'In-app purchases off, or a password always required', '**Settings › Screen Time › Content & Privacy Restrictions › iTunes & App Store Purchases**'],
              ['☐', 'A Screen Time passcode is set', '**Settings › Screen Time**'],
              ['☐', 'A daily limit for games, if you want one', '**Settings › Screen Time › App Limits**'],
              ['☐', 'Downtime for bedtime', '**Settings › Screen Time › Downtime**'],
              ['☐', 'Reminders and badge as you like them', 'OutBrick **Settings › Game › Notifications**, or **Settings › Notifications › OutBrick**'],
              ['☐', 'A made-up player name', 'OutBrick: tap the avatar to open the **Profile**'],
              ['☐', 'Shown on the Leaders tab or not', 'OutBrick **Settings › Game › Show me on the standings board**'],
              ['☐', 'Races and offers on the map, or not', 'OutBrick **Settings › Game › Game features**'],
              ['☐', 'Tracking answer', '**Settings › Privacy & Security › Tracking**'],
              ['☐', 'Signed in to iCloud, so progress is safe', '**Settings ›** your name **› iCloud**'],
            ],
          },
        ],
      },
      {
        id: 'for-children',
        title: 'For young players',
        blocks: [
          {
            t: 'p',
            text: 'This part is written for your child. Read it together if that helps.',
          },
          {
            t: 'list',
            items: [
              '**Take your time.** There is no clock. Think as long as you like before every move.',
              '**Losing is all right.** If you run out of moves, you can try again. A heart goes when you lose, and hearts come back by themselves.',
              '**Videos are your choice.** A video only plays if you tap a button to watch one. You can always say no.',
              '**Ask before buying.** If a button shows a price in pounds, dollars, euros or any other money, it costs real money. Ask a grown-up first.',
              '**Keep your name secret.** Pick a made-up player name, not your real one.',
              '**Take breaks.** The game waits for you. The friends will still be there when you come back.',
              '**Something feels wrong?** Stop and tell a grown-up.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Stuck?',
            text: 'Tap the **Hint** in the tray at the bottom. You get one free on every try.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Questions parents ask',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Can my child talk to strangers in OutBrick?',
                a: 'No. The game has no chat and no messaging between players. Other players can see a player name and level on the Leaders tab, and in a race your child chooses to join. Both can be switched off in **Settings › Game**.',
              },
              {
                q: 'Will my child see adverts they did not choose?',
                a: 'No. There are no banners and no adverts between boards. A video plays only after a player taps a button to watch one for a reward, and each kind has a daily limit. **Remove Ads** turns them off for good, and the rewards still pay.',
              },
              {
                q: 'Can my child spend money by accident?',
                a: 'Every real-money purchase goes through Apple’s purchase sheet, which needs Face ID, Touch ID or the Apple Account password. With **Ask to Buy** on, or in-app purchases set to **Don’t Allow**, nothing can be bought without you.',
              },
              {
                q: 'Is there a subscription?',
                a: 'No. Every pass and timed item is a one-time purchase, and nothing renews by itself.',
              },
              {
                q: 'Does OutBrick need an account or an email address?',
                a: 'No. Progress is kept on the device and in your own iCloud. The community on this website needs an account, but it is for people aged 16 and over and is not part of the game.',
              },
              {
                q: 'Does the game work without the internet?',
                a: 'Yes, the boards play offline. Videos, Game Center and syncing need a connection, so videos are simply not available while offline.',
              },
              {
                q: 'Who do I ask about a refund?',
                a: 'Apple, at [reportaproblem.apple.com](https://reportaproblem.apple.com). We cannot see payments or refund them. If something bought did not arrive, try **Restore Purchase** at the foot of the Shop first, then [write to us](/contact?topic=purchases).',
              },
            ],
          },
        ],
      },
    ],
    related: ['playing-calmly', 'rewards-and-ads', 'shop-and-purchases', 'progress-privacy-and-account', 'settings', 'using-the-community'],
  },

  {
    slug: 'playing-calmly',
    category: 'family',
    cover: 'settings-a11y',
    title: 'Playing calmly',
    summary:
      'The settings that make OutBrick quieter and gentler, why there is never a clock, how to step away without losing anything, and a few habits for unhurried play.',
    keywords:
      'calm relax relaxing gentle quiet slow peaceful stress anxiety reduce motion animation speed sound music haptics vibration notifications badge focus filter sleep break rest pause no timer cozy cosy',
    host: 'zippy',
    hostPose: 'idle',
    sections: [
      {
        id: 'no-clock',
        title: 'There is never a clock',
        blocks: [
          {
            t: 'p',
            text: 'No board in OutBrick is timed, and nothing counts down while you think. Each board gives you a number of **moves**, and that is the only limit. A move only counts when it does something: a swap that makes no match springs back without using one, and a drag of less than half a cell springs back too.',
          },
          {
            t: 'list',
            items: [
              'You can stare at a board for as long as you like. Put the phone down, come back, carry on.',
              'If no move is possible, the board reshuffles for free. You can never be truly stuck.',
              'Every attempt comes with a free **Hint**, **Rocket** and **UFO**, and the first **Undo** on each board is free.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Events and seasons do run on a calendar, and some show a countdown to when they end. None of them puts a clock on a board.',
          },
        ],
      },
      {
        id: 'gentler-screen',
        title: 'A gentler screen',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Reduce Motion', text: 'In the iPhone **Settings › Accessibility › Motion**. Idle movement on the board stops, glows hold still, hints shimmer in place, screens cross-fade instead of sliding, and every win celebration turns to a soft glow.' },
              { term: 'Dim Flashing Lights', text: 'Also under **Motion**. Full-screen flashes from big combos drop to a third of their strength and never come closer together than about a third of a second.' },
              { term: 'Animation speed', text: 'In OutBrick **Settings › Accessibility**: 50%, 75%, 100%, 150% or 200%. At 75% or 50%, swaps, falls and clears play more slowly and are easier to follow.' },
              { term: 'Calm Glow and Calm Outline', text: 'Two free pieces in the **Wardrobe**: **Calm Glow** under **Celebrations** (a soft glow, nothing flying) and **Calm Outline** under **Swap trails** (a still outline where a brick was). Tap **Wear it**.' },
            ],
          },
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'The Accessibility tab: Animation speed from 50% to 200%, Announcement detail Brief, Standard or Full, and switches for Colour-blind, High-contrast board, Left-handed tray, Hold to confirm swaps and Row sound.',
            caption: 'Settings › Accessibility. Animation speed is at the top.',
          },
          {
            t: 'p',
            text: 'More in [Vision, hearing and motion](help:vision-hearing-and-motion#motion).',
          },
        ],
      },
      {
        id: 'sound',
        title: 'Sound, music and haptics',
        blocks: [
          {
            t: 'list',
            items: [
              '**Sounds**, **Music** and **Haptics** each have their own switch in **Settings › Game**, and the same three are in the **Pause** menu, so you can change them in the middle of a board.',
              '**Haptics** are the small taps you feel as pieces move and land. The switch only appears on devices that can vibrate.',
              'The friends talk in **text bubbles**, never aloud, and nothing in the game depends on hearing. Playing in silence loses nothing.',
              'The Ring/Silent switch and the volume buttons work as usual.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Like the music but not the effects? Turn off **Sounds** and leave **Music** on, or the other way round.',
          },
        ],
      },
      {
        id: 'quieter',
        title: 'A quieter game',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Game features', text: '**Settings › Game › Game features** switches off **Friend Rescue**, **Village Race**, **Brick Royale**, **Crew Race** and **Offers on the map**. Nothing you have earned is lost.' },
              { term: 'Quick play', text: 'On from the start: a win goes straight to the next board. Turn it off in **Settings › Game** and a win takes you back to the Journey map instead, a natural place to pause.' },
              { term: 'Show me on the standings board', text: 'Turn it off if you would rather not appear on the Leaders tab.' },
              { term: 'Mascot AI chatter', text: 'Where Apple’s on-device model is available, the friends make up their own lines. Turn it off for their usual ones.' },
            ],
          },
          {
            t: 'shot',
            id: 'settings-game',
            alt: 'Settings on the Game tab: On switches for Notifications, Sounds, Music, Quick play and Mascot AI chatter, each with a line explaining it, then buttons for Game features, Rate OutBrick, Contact us, Community, Report a bug and Support.',
            caption: 'Settings › Game.',
          },
        ],
      },
      {
        id: 'reminders',
        title: 'Notifications, the icon badge and Focus filters',
        blocks: [
          {
            t: 'list',
            items: [
              'OutBrick sends **at most one notification every 20 hours**, and **never between 22:00 and 09:00**. Each offers **Play**, **Later** (three hours) or **Tomorrow**.',
              'Turn them all off with **Settings › Game › Notifications** in the game, or choose their style in the iPhone **Settings › Notifications › OutBrick**.',
              'The **icon badge** counts rewards waiting for you, up to nine. Opening the game clears it without claiming anything. To hide it for good, turn off **Badges** in **Settings › Notifications › OutBrick**.',
            ],
          },
          { t: 'h3', text: 'A Focus filter for OutBrick' },
          {
            t: 'steps',
            items: [
              'In the iPhone **Settings › Focus**, choose a Focus, such as Sleep or Personal.',
              'Tap **Add Filter**, then **OutBrick**.',
              'Choose what OutBrick does while that Focus is on: turn the music off (or music and sounds), pause reminders, and hide the icon badge.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'A Focus filter never changes your own settings. While one is at work, a line under **Music** in Settings says so.',
          },
        ],
      },
      {
        id: 'stepping-away',
        title: 'Stepping away without losing anything',
        blocks: [
          {
            t: 'list',
            items: [
              '**Between boards is the perfect place to stop.** On Home or the map, nothing is in progress.',
              '**In the middle of a board**, tap **Pause**. **Resume** brings you straight back.',
              '**Leaving before your first move is always free.** After a move, the **Leave?** card tells you a life will be used before you choose.',
              '**Lives refill on their own**, one every 30 minutes, even while the game is closed. Tap the heart on the Journey to see when the next one comes.',
              '**Your day streak can wait.** A streak of three days or more can be restored within a week of a missed day, free with a streak saver or for 250 coins.',
              '**Your progress is safe.** It is saved as you go, on the device and in iCloud.',
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
            title: 'A helping hand',
            text: 'Struggling with one board? From your sixth attempt at it, the game gives you **3 extra moves** before you start, once a day per board. Sometimes the calmest move is to come back tomorrow.',
          },
        ],
      },
      {
        id: 'habits',
        title: 'Habits for unhurried play',
        blocks: [
          {
            t: 'list',
            items: [
              '**Look before you move.** Find the gates and the goals first. The order panel at the top tells you what the board wants.',
              '**Use the free Hint.** It is there on every attempt and cannot be saved, so using it costs nothing.',
              '**Undo freely, once.** The first undo on every board is free.',
              '**Replay a cleared board** from the map when you want something familiar. Replaying never moves your place on the Journey.',
              '**Choose a stopping point before you start**, such as the end of a village, and let the village celebration be your cue.',
              '**If a board frustrates you, leave it for today.** Lives refill, the helping hand arrives, and boards often look different after a rest.',
            ],
          },
        ],
      },
      {
        id: 'questions',
        title: 'Questions',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Is there a timer I can switch off?',
                a: 'There is nothing to switch off: no board in OutBrick has a timer. Moves are the only limit.',
              },
              {
                q: 'How do I make the animations slower?',
                a: 'Set **Animation speed** to 75% or 50% in **Settings › Accessibility**. For less movement everywhere, turn on **Reduce Motion** in the iPhone Settings.',
              },
              {
                q: 'Can I stop the confetti when I win?',
                a: 'Yes. Wear the free **Calm Glow** celebration in the Wardrobe, or turn on **Reduce Motion**, which makes every celebration calm.',
              },
              {
                q: 'How do I stop the badge on the icon?',
                a: 'Turn off **Badges** in the iPhone **Settings › Notifications › OutBrick**, or use a Focus filter to hide it only while a Focus is on.',
              },
              {
                q: 'Do I lose a life if I put the game down mid-board?',
                a: 'Not for pausing. A life is used only when an attempt is lost: giving up when the moves run out, or restarting or leaving after a move. Pause and come back whenever you like.',
              },
            ],
          },
        ],
      },
    ],
    related: ['accessibility', 'vision-hearing-and-motion', 'settings', 'lives-moves-and-undos', 'parents-guide', 'apple-features'],
  },

  {
    slug: 'rewards-and-ads',
    category: 'family',
    cover: 'wall',
    title: 'How rewards, lives and ads work, in plain words',
    summary:
      'Every number behind lives, undos, running out of moves and the eight optional videos, what Remove Ads and the Brick Pass change, what coins buy, and what OutBrick never sells.',
    keywords:
      'economy lives hearts undo moves continue out of moves coins prices video ads adverts rewarded watch daily limit cap remove ads brick pass free pay to win spend money fair honest never sold',
    host: 'sprout',
    hostPose: 'think',
    sections: [
      {
        id: 'short',
        title: 'The short version',
        blocks: [
          {
            t: 'list',
            items: [
              '**Losing costs a life; playing and winning do not.** Lives come back on their own, one every 30 minutes.',
              '**Running out of moves is not the end.** You can play on with coins, with a video, or simply try again.',
              '**Videos are always your choice.** There are eight kinds, each with a daily limit, 39 in all. Nothing plays by itself.',
              '**Paying removes videos, never rewards.** Remove Ads and the Brick Pass pay the same rewards without the video.',
              '**Nothing is a subscription, and nothing paid appears on a board before level 6.**',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Every number on this page is the one the game uses today. If one ever changes, this page changes with it.',
          },
        ],
      },
      {
        id: 'lives',
        title: 'Lives',
        blocks: [
          {
            t: 'list',
            items: [
              'You can hold up to **5 lives**, or **8** while you own the current season’s Brick Pass.',
              'One life comes back every **30 minutes**, even while the game is closed.',
              'Opening a board needs a life, but **does not use one**.',
            ],
          },
          {
            t: 'table',
            caption: 'When a life is used',
            head: ['You…', 'Life used?'],
            rows: [
              ['Clear the board', 'No'],
              ['Run out of moves and give up (or close the out-of-moves screen)', 'Yes'],
              ['Restart or leave **after** a move', 'Yes, and the card tells you first'],
              ['Restart or leave **before** your first move', 'No'],
              ['Play on with more moves', 'No: it is the same attempt'],
              ['Reach a board where nothing can move, with moves left', 'No: it reshuffles for free'],
              ['Lose on your free daily try, or during unlimited lives', 'No'],
            ],
          },
          {
            t: 'p',
            text: 'Out of lives? Once a day you may get a **free try** at a board. Otherwise you can wait, refill the whole tank for **600 coins**, watch a video for **1 life**, or buy unlimited lives: **1 hour for 900 coins**, **3 hours for 2,000** or **24 hours for 6,000**, or with real money in the Shop.',
          },
          {
            t: 'shot',
            id: 'no-lives',
            alt: 'Out of Lives: 0 of 5 lives and a countdown to the next one, then unlimited lives for 1 hour, 3 hours or 24 hours, for coins or money, a Refill for 600 coins, Watch for a life, and OK. A note at the foot says a life is only lost when a board is lost, lives come back one every 30 minutes, and once a day an empty tank gets a free attempt.',
            caption: 'Out of Lives: wait, refill, or keep playing.',
          },
        ],
      },
      {
        id: 'undos',
        title: 'Undos',
        blocks: [
          {
            t: 'list',
            items: [
              'The **first undo on every board is free**, and never runs out.',
              'After that, undos come from a tank of up to **5**, which refills by **one every 25 minutes**.',
              'The Undo button counts both, so a fresh board shows **6** when your tank is full.',
              'Tank empty? Buy **5 for 250 coins**, watch a video for **2**, or wait.',
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'Running out of moves',
        blocks: [
          {
            t: 'p',
            text: 'When the moves run out before the goals are met, the **Out of moves** screen shows what is left and lets you choose. Playing on is the same attempt, so it never costs a life.',
          },
          {
            t: 'table',
            caption: 'Playing on with coins, within one attempt',
            head: ['Play on', 'Cost', 'You get'],
            rows: [
              ['First time', '300 coins', '+5 moves'],
              ['Second time', '500 coins', '+5 moves and a Hint'],
              ['Third time and after', '900 coins', '+5 moves and a UFO'],
            ],
          },
          {
            t: 'list',
            items: [
              'The price goes back to 300 coins with every new attempt, when you leave the board, or when you clear it. It never climbs past 900.',
              'Or watch an **optional video**: **+2 moves**, then **+1 move**, then a **free UFO**. A video never pushes the coin price up.',
              'A saved **+5 moves** can be used here too. Brick Pass owners get **three free moves** here as well.',
              'On a board you have tried several times, each play-on gives a little more: one extra move for every failed attempt after the third, up to +15.',
              '**Give up** ends the attempt and uses a life.',
            ],
          },
          {
            t: 'shot',
            id: 'wall',
            alt: 'The Out of moves screen showing the goals still needed, a button for 5 more moves for 300 coins, a Watch button for 2 more moves, and Give up.',
            caption: 'Out of moves: what you still need, and your choices.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Why the price climbs',
            text: 'By the third play-on, refilling a whole tank of lives (600 coins) and starting fresh costs less than another 900 coins of moves. The game would rather you started again calmly than kept paying to stand still.',
          },
        ],
      },
      {
        id: 'videos',
        title: 'The eight optional videos',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick has **no forced adverts**: no banners, no adverts between boards, nothing that plays by itself. A video only starts when you tap a button to watch one, and only a video watched to the end pays. Each kind has its own daily limit, and the limits reset at midnight.',
          },
          {
            t: 'table',
            caption: 'Every video, its reward and its daily limit',
            head: ['Where', 'Reward', 'Per day'],
            rows: [
              ['Out of lives', '1 life', '8'],
              ['Out of undos', '2 undos', '8'],
              ['Out of moves', '+2 moves, then +1, then a free UFO', '6'],
              ['Out of moves, free Hint', 'A Hint (switched off in the current version, so you will not see it)', '4'],
              ['Win card', 'Your clear’s coins again (75 to 300)', '4'],
              ['Brick Wheel', 'A second spin', '1'],
              ['Gift balloon', 'Coins or a free booster for 10 minutes', '2'],
              ['Brick Cinema', 'One prize square per video', '6'],
              ['**All eight**', '', '**39**'],
            ],
          },
          {
            t: 'list',
            items: [
              'Saying no to a video costs nothing.',
              'When a limit is reached, its button simply disappears until tomorrow.',
              'Videos need an internet connection. Offline, the boards still play; the videos just are not offered.',
              'Video adverts are limited to Google’s general-audience content rating.',
            ],
          },
        ],
      },
      {
        id: 'remove-ads-and-pass',
        title: 'Remove Ads and the Brick Pass',
        blocks: [
          {
            t: 'p',
            text: 'Both take the videos away **without taking the rewards**: every button that said Watch says **Claim reward** instead, and pays at once, within the same daily limits. Paying never costs you a reward.',
          },
          {
            t: 'table',
            head: ['Compare', 'Remove Ads', 'Brick Pass'],
            rows: [
              ['What it is', 'A one-time purchase, kept for good', 'A one-time purchase for one season'],
              ['Videos', 'Gone for good', 'Gone while you hold the current season’s pass'],
              ['Rewards', 'Paid without a video', 'Paid without a video, plus the Premium track’s rewards'],
              ['Lives', '5', '8 while the season’s pass is held'],
              ['Out of moves', 'As usual', 'Three free moves as well'],
              ['Restore on a new device', 'Yes', 'Yes, seasons 1 to 3'],
            ],
          },
          {
            t: 'p',
            text: 'Prices are shown in your own currency in the Shop. Neither one renews by itself. See [The Shop, purchases and restoring](help:shop-and-purchases#remove-ads) and [the Brick Pass](help:rewards-and-events#pass).',
          },
        ],
      },
      {
        id: 'coins',
        title: 'What coins are for',
        blocks: [
          {
            t: 'p',
            text: 'Coins are earned by playing: **25** for a Normal clear, **50** for Hard or Night, **80** for Super Hard or Boss, **100** for the Daily Brick, plus streaks, the Brick Wheel, Missions, village star rewards and the Brick Pass. Coin packs can also be bought in the Shop.',
          },
          {
            t: 'table',
            caption: 'What coins buy',
            head: ['Item', 'Coins'],
            rows: [
              ['Hint', '150'],
              ['Rocket', '300'],
              ['UFO', '500'],
              ['Five undos', '250'],
              ['A full tank of lives', '600'],
              ['Playing on when out of moves', '300, then 500, then 900'],
              ['A head start after a loss (a Rocket on the board and a free UFO), from level 6', '800'],
              ['Unlimited lives: 1 hour, 3 hours, 24 hours', '900, 2,000, 6,000'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'The two refills, lives and undos, are flat prices. They never go up however often you need them.',
          },
        ],
      },
      {
        id: 'never-sold',
        title: 'What OutBrick never sells',
        blocks: [
          {
            t: 'list',
            items: [
              '**Time.** There is no clock to buy your way past.',
              '**Accessibility.** Every accessibility setting is free, and so are the Wardrobe pieces that help, such as the calm celebration and the contrast plates.',
              '**Chance.** There are no loot boxes and no mystery packs. Every paid item says exactly what it contains, and the Brick Wheel never takes money.',
              '**A subscription.** Nothing renews by itself.',
              '**Pressure on new players.** Nothing paid is offered on a board before level 6.',
              '**Missions.** They pay coins, boosters and tokens, and never sell anything.',
              '**Your data.** We do not sell or share personal information for money.',
              '**Reviews.** There is no reward for rating the game.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Wardrobe pieces change how the game looks, never how it plays.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Questions',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Does winning cost a life?',
                a: 'Never. Only losing an attempt does.',
              },
              {
                q: 'Do I have to watch videos to keep playing?',
                a: 'No. Lives refill on their own, and every board can be played without watching or paying anything.',
              },
              {
                q: 'Why has a Watch button disappeared?',
                a: 'You have reached that video’s daily limit, or no video is available just now. The limits reset at midnight.',
              },
              {
                q: 'I bought Remove Ads. Do I lose the free lives and moves the videos gave?',
                a: 'No. The same buttons say **Claim reward** and pay at once, within the same daily limits.',
              },
              {
                q: 'Is the Brick Pass a subscription?',
                a: 'No. It is a one-time purchase for one season, and it does not renew by itself.',
              },
            ],
          },
        ],
      },
    ],
    related: ['lives-moves-and-undos', 'boosters-and-pause', 'shop-and-purchases', 'rewards-and-events', 'parents-guide', 'common-questions'],
  },

  {
    slug: 'meet-the-friends',
    category: 'progress',
    cover: 'home',
    title: 'Meet the nine friends',
    summary:
      'Bloo, Peach, Sprout, Bricko, Zippy, Vio, Moss, Flurry and Poppy: who each friend is, how they show it, and everywhere you meet them in OutBrick.',
    keywords:
      'friends mascots characters cast bloo peach sprout bricko zippy vio moss flurry poppy host header home stage wardrobe outfit sticker widget personality',
    host: 'bloo',
    hostPose: 'cheer',
    sections: [
      {
        id: 'cast',
        title: 'The cast',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick has **nine brick friends**, each a toy brick with a colour, a look and a way of celebrating all of their own. They keep you company on Home and on every board, and they show how they feel through how they move and what appears in their text bubbles.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'The friends never speak aloud. Everything they have to say appears in a text bubble, so nothing about them depends on hearing.',
          },
          {
            t: 'shot',
            id: 'home',
            alt: 'Home: along the top, the avatar, 2,580 coins, a 12-day streak, Missions and the Settings gear. Below the OUTBRICK logo, an event card announces the Target Challenge, starting soon. Three brick friends in sun hats stand on a toy-brick lawn above a green Level 214 button. The bottom bar shows Home, Leaders, Journey, Shop and Pass.',
            caption: 'Three friends at a time stand on the stage on Home, taking turns.',
          },
        ],
      },
      {
        id: 'bloo-peach-sprout',
        title: 'Bloo, Peach and Sprout',
        blocks: [
          {
            t: 'friend',
            friend: 'bloo',
            pose: 'cheer',
            title: 'Bloo, the one with the watch',
            text: 'A blue brick with a wristwatch on a lanyard. Bloo checks the time between boards and spins when you clear one: first to wave, first to try the bold move, and quite sure he meant to do that.',
          },
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'Peach, the careful planner',
            text: 'A peach-coloured brick with a little peach on top. Peach counts the moves twice, keeps a backup plan and frets the whole way through, then cheers when the pile finally opens.',
          },
          {
            t: 'friend',
            friend: 'sprout',
            pose: 'think',
            title: 'Sprout, the one with questions',
            text: 'A small green brick with a seedling on top. Sprout notices the gap everyone else walked past and asks the question nobody else did. When it works, two hops and a spin.',
          },
        ],
      },
      {
        id: 'bricko-zippy-vio',
        title: 'Bricko, Zippy and Vio',
        blocks: [
          {
            t: 'friend',
            friend: 'bricko',
            pose: 'cheer',
            title: 'Bricko, the one doing reps',
            text: 'A red brick in big red boots who treats every board like a set at the gym. Bricko counts his reps, and a clear gets a thumbs-up and a flex, in that order.',
          },
          {
            t: 'friend',
            friend: 'zippy',
            pose: 'idle',
            title: 'Zippy, the one who drifts off',
            text: 'A yellow brick with a ready wink. Zippy starts a thought, loses the thread halfway, and comes back for the win. A poke gets a spin; a win gets a triple hop.',
          },
          {
            t: 'friend',
            friend: 'vio',
            pose: 'idle',
            title: 'Vio, the critic with headphones',
            text: 'A purple brick in headphones who hears a rhythm in a good run of moves. Vio rates your moves like tracks, grooves along at 112 beats a minute, and treats a tidy clear as a five-star track.',
          },
        ],
      },
      {
        id: 'moss-flurry-poppy',
        title: 'Moss, Flurry and Poppy',
        blocks: [
          {
            t: 'friend',
            friend: 'moss',
            pose: 'idle',
            title: 'Moss, the farmhand',
            text: 'A dark green brick with a tool belt and muddy work boots, and a farm saying for every weather. Moss saves one slow clap for when you have earned it, so it counts.',
          },
          {
            t: 'friend',
            friend: 'flurry',
            pose: 'idle',
            title: 'Flurry, the one in the scarf',
            text: 'A pale blue brick in a striped bobble hat and scarf, fond of tea and a gentle wave. Flurry is never in a hurry, which suits a game with no clock. Watch the scarf: its tail always swings a beat late.',
          },
          {
            t: 'friend',
            friend: 'poppy',
            pose: 'cheer',
            title: 'Poppy, the storyteller',
            text: 'A pink brick with a star-tipped wand. To Poppy, every board is the middle of a fairy tale, and the ending is when the wand bursts into stars.',
          },
        ],
      },
      {
        id: 'where',
        title: 'Where you meet them',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Home', text: 'Three friends stand on the toy-brick stage, taking turns.' },
              { term: 'On every board', text: 'The village’s host friend sits in the round frame in the header, dressed for that village. Tap them for a giggle, a wave or a high-five.' },
              { term: 'Wins and near misses', text: 'A friend celebrates on the win card, and a friend commiserates on **Level failed** when a board gets away from you.' },
              { term: 'The Wardrobe', text: 'Outfits for the friends, such as King Bricko’s gold crown and red ruff. Wardrobe pieces change how the game looks, never how it plays.' },
              { term: 'The Collection', text: 'The Seasonal Cards, nine to a season, show the friends.' },
              { term: 'Beyond the game', text: 'Say “Meet Bloo in OutBrick” to Siri (or any friend’s name), find a friend in Spotlight, add the **Mascot of the Day** or **Mascot Mood** widget, or send a friend’s sticker in Messages.' },
            ],
          },
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'The Wardrobe: King Bricko in a gold crown and red ruff with a green Wear it button, and below, tabs for Outfits, Board plates, Palettes and Brick finish, and the Seaside Set.',
            caption: 'Outfits, board plates, palettes, brick finishes, celebrations, trails and frames.',
          },
          {
            t: 'p',
            text: 'More in [Friends, the Collection and the Wardrobe](help:friends-and-wardrobe).',
          },
        ],
      },
      {
        id: 'bubbles',
        title: 'Text bubbles and Mascot AI chatter',
        blocks: [
          {
            t: 'p',
            text: 'The friends cheer you on in text bubbles. On devices with Apple’s on-device language model, they can also make up their own lines: **Settings › Game › Mascot AI chatter**, shown only where the model is available in your language. It runs entirely on your device, and turning it off brings back their usual lines.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Questions',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Can I choose which friend hosts a board?',
                a: 'Each village has its own host friend, who sits in the header frame dressed for that village. You can change their outfit in the Wardrobe.',
              },
              {
                q: 'Why do the friends not talk?',
                a: 'They speak in text bubbles only, so everything they say can be read, and nothing depends on hearing.',
              },
              {
                q: 'Do the friends change how a board plays?',
                a: 'No. Friends and their outfits are there for company and celebration. Every board plays the same whoever is hosting it.',
              },
              {
                q: 'Can I put a friend on my Home Screen?',
                a: 'Yes. Add the **Mascot of the Day** or **Mascot Mood** widget and choose a friend, or “Surprise me”. See [Widgets, Siri and Shortcuts](help:apple-features#widgets).',
              },
            ],
          },
        ],
      },
    ],
    related: ['friends-and-wardrobe', 'menus-tour', 'apple-features', 'welcome', 'glossary'],
  },

  {
    slug: 'lost-progress-and-purchases',
    category: 'account',
    cover: 'shop',
    title: 'Lost progress or a missing purchase: step by step',
    summary:
      'Bring back a purchase with Restore Purchase, what to send us if it is still missing, how Apple handles refunds, and how to recover progress through iCloud, on a new iPhone or iPad, and with Game Center.',
    keywords:
      'lost progress missing purchase restore purchase not received did not arrive bought paid charged refund money back reportaproblem receipt order id icloud sync new phone transfer reinstall game center level reset gone',
    host: 'moss',
    hostPose: 'idle',
    sections: [
      {
        id: 'start',
        title: 'Start here',
        blocks: [
          {
            t: 'p',
            text: 'Most missing things come back in a minute or two. Find your problem below and follow its steps in order.',
          },
          {
            t: 'table',
            head: ['What happened', 'Go to'],
            rows: [
              ['Something I bought is not in the game', '[Bring back a purchase](#restore)'],
              ['I restored and it is still missing', '[Still missing: write to us](#still-missing)'],
              ['I want my money back', '[Refunds are Apple’s](#refunds)'],
              ['My level, coins or stars are gone', '[Progress is missing](#progress)'],
              ['I have a new iPhone or iPad', '[Moving to a new device](#new-device)'],
              ['My achievements or Game Center scores', '[Game Center](#game-center)'],
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            title: 'We will never ask for your Apple Account password or card details.',
            text: 'Not by email, not in the community, not anywhere. Nobody from OutBrick needs them, and we cannot see payments. If a message claiming to be from us asks for them, do not reply.',
          },
        ],
      },
      {
        id: 'restore',
        title: 'Bring back a purchase',
        blocks: [
          {
            t: 'steps',
            items: [
              'Check the device is signed in to the **same Apple Account** you bought with, and to iCloud: **Settings ›** your name.',
              'Open OutBrick and give it a moment online.',
              'Open the **Shop** and scroll to the very bottom.',
              'Tap **Restore Purchase**.',
            ],
          },
          {
            t: 'table',
            caption: 'What comes back, and how',
            head: ['Item', 'How it comes back'],
            rows: [
              ['Remove Ads', '**Restore Purchase**'],
              ['Brick Pass seasons 1 to 3', '**Restore Purchase**'],
              ['Wardrobe items', '**Restore Purchase**'],
              ['Coins, boosters, lives and other things you use up', 'With your progress, through iCloud. The App Store does not restore them.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Check that the purchase went through',
            text: 'On the iPhone, **Settings ›** your name **› Media & Purchases › View Account › Purchase History** lists what Apple charged. If the item is not there, the payment did not complete. With **Ask to Buy**, a purchase waits until the family organiser approves it.',
          },
        ],
      },
      {
        id: 'still-missing',
        title: 'Still missing: write to us',
        blocks: [
          {
            t: 'steps',
            items: [
              'Open our [contact form with Purchases & refunds chosen](/contact?topic=purchases).',
              'Say **what you bought** and **when**, roughly is fine.',
              'Add your device, iOS version and OutBrick version. The game’s version is at the foot of your **Profile** (tap your avatar).',
              'Send it. A person reads every message, and you get an email with a reference and a private link.',
              'Follow your case at [your support request](/support/request): where it stands, every reply, and a place to add details.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'What to share, and where',
            text: 'Your **Apple order ID** is fine to include in the private contact form. Never post a receipt, an order number or a screenshot of a purchase in the community, and never send a full receipt, card number, password or security code to anyone.',
          },
        ],
      },
      {
        id: 'refunds',
        title: 'Refunds are Apple’s',
        blocks: [
          {
            t: 'p',
            text: 'Apple takes every payment for OutBrick, so Apple alone decides refunds. We cannot see your payment details or refund an App Store purchase.',
          },
          {
            t: 'steps',
            items: [
              'Go to [reportaproblem.apple.com](https://reportaproblem.apple.com).',
              'Sign in with the Apple Account used for the purchase.',
              'Choose **Request a refund**, choose a reason, then the OutBrick purchase.',
              'Submit it, and check its status with Apple. Approval and timing are set by Apple and your local consumer law.',
            ],
          },
          {
            t: 'p',
            text: 'An unexpected or duplicate charge goes the same way: check **Purchase History** first, then Report a Problem. More on our [refunds page](/refunds).',
          },
        ],
      },
      {
        id: 'progress',
        title: 'Progress is missing',
        blocks: [
          {
            t: 'steps',
            items: [
              'Check you are signed in to iCloud with the same Apple Account as before, and that iCloud Drive is on.',
              'Open OutBrick online and give it a minute. Progress is fetched and merged when the game starts.',
              'Close the game fully and open it again.',
              'If another device has the progress you expect, open OutBrick there too, online, so it can share its save.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Nothing is overwritten',
            text: 'When two devices disagree, the higher level and counts are kept, collections are combined, and coins spent on one device are never refunded by another.',
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'If a device was never signed in to iCloud, its progress exists only on that device. Sign in to iCloud there and open OutBrick once, then check the other device again.',
          },
          {
            t: 'p',
            text: '**Delete My Data** cannot be undone. After using it, another device signed in to the same iCloud may sync an older save back, so use it on every device if you mean to start over. See [Progress, iCloud and privacy](help:progress-privacy-and-account#delete).',
          },
        ],
      },
      {
        id: 'new-device',
        title: 'Moving to a new iPhone or iPad',
        blocks: [
          {
            t: 'steps',
            items: [
              'Before you switch, open OutBrick once on the **old** device while signed in to iCloud.',
              'On the new device, sign in to the same Apple Account and turn on iCloud.',
              'Install OutBrick from the App Store and open it. Your progress is fetched and merged when the game starts.',
              'Open the **Shop**, scroll to the bottom and tap **Restore Purchase**.',
            ],
          },
          {
            t: 'p',
            text: 'Sound, music, haptics, notifications and most board accessibility settings stay on each device, so set them again on the new one. Your colour-blind choice travels with your progress.',
          },
        ],
      },
      {
        id: 'game-center',
        title: 'Game Center',
        blocks: [
          {
            t: 'list',
            items: [
              '**Game Center** is Apple’s service. It keeps your 65 achievements and the leaderboards for highest level, total clears, today and this week.',
              'Your **Journey progress is not stored in Game Center**. It travels through iCloud.',
              'Sign in to Game Center in the iPhone Settings with the same Apple Account to see your achievements again.',
              'The **Leaders** tab in the game is a separate, all-time board. You appear on it while **Settings › Game › Show me on the standings board** is on.',
            ],
          },
        ],
      },
      {
        id: 'questions',
        title: 'Questions',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Can you refund me?',
                a: 'No, only Apple can. Use [reportaproblem.apple.com](https://reportaproblem.apple.com). If the item never arrived, we can help with that: [write to us](/contact?topic=purchases).',
              },
              {
                q: 'Why did Restore Purchase not bring back my coins?',
                a: 'Coins, boosters and lives are used up as you play, so the App Store does not restore them. They travel with your progress through iCloud.',
              },
              {
                q: 'Should I post my receipt so you can check it?',
                a: 'Please do not. Never post a receipt in the community. Use the private [contact form](/contact?topic=purchases), and leave out card numbers, passwords and security codes.',
              },
              {
                q: 'Someone asked for my Apple Account password to fix my purchase.',
                a: 'That was not us. We never ask for your Apple Account password or card details. Do not share them, and tell us through the [contact form](/contact).',
              },
              {
                q: 'I reinstalled OutBrick and I am back at level 1.',
                a: 'Stay online for a minute with iCloud on and the same Apple Account. If nothing changes, the earlier progress may have been on a device that was not signed in to iCloud: see [Progress is missing](#progress).',
              },
            ],
          },
        ],
      },
    ],
    related: ['shop-and-purchases', 'progress-privacy-and-account', 'troubleshooting', 'parents-guide', 'apple-features', 'common-questions'],
  },
];
