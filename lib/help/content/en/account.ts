import type { HelpArticle } from '../../model.ts';

/** Settings, Apple features, progress and privacy, in English. Checked against 5.1.1 (68). */
export const accountArticles: HelpArticle[] = [
  {
    slug: 'settings',
    category: 'account',
    cover: 'settings-community',
    title: 'Every setting explained',
    summary:
      'Each switch and button on the Game and Accessibility tabs of Settings, what it does, what it starts as, and where the support, community and privacy links lead.',
    keywords: 'settings options preferences sound music haptics vibration notifications quick play mascot ai standings game features rate contact community report bug advertising choices privacy delete data',
    sections: [
      {
        id: 'open',
        title: 'Opening Settings',
        blocks: [
          {
            t: 'p',
            text: 'Tap the gear at the top right of **Home** or the **Journey**. Settings fills the screen; the red **×** closes it (so does {{Esc}} on a keyboard, or the two-finger scrub with VoiceOver). It has two tabs: **Game**, which opens first, and **Accessibility**.',
          },
          {
            t: 'p',
            text: 'Every switch shows **Off | On**, with the line under it explaining what it does. VoiceOver reads that line as the switch’s hint.',
          },
        ],
      },
      {
        id: 'game',
        title: 'The Game tab',
        blocks: [
          {
            t: 'table',
            head: ['Setting', 'What it does', 'Starts as'],
            rows: [
              ['Notifications', 'Reminders from the game, such as full lives and a daily reward waiting. Switching it on asks iOS for permission if it never has.', 'On'],
              ['Sounds', 'Sound effects on the boards and in the menus.', 'On'],
              ['Music', 'The background music in the menus and on the boards.', 'On'],
              ['Haptics', 'Taps you feel as pieces move, match and land. Only on devices that can vibrate.', 'On'],
              ['Quick play', 'After a win, goes straight to the next board instead of back to the Journey map.', 'On'],
              ['Mascot AI chatter', 'The friends make up their own lines with the language model on your device. Only shown where Apple’s on-device model is available in your language.', 'On'],
              ['Show me on the standings board', 'Publishes your player name and level to everyone on the Leaders tab. Turning it off removes you.', 'On'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Sounds, Music and Haptics are also in the Pause menu during a board. If an OutBrick **Focus filter** is changing sound or reminders, a line under Music says so; your own settings are never changed.',
          },
          { t: 'shot', id: 'settings-game', alt: 'Settings on the Game tab: On switches for Notifications, Sounds, Music, Quick play and Mascot AI chatter, each with a line explaining it, then buttons for Game features, Rate OutBrick, Contact us, Community, Report a bug and Support.', caption: 'Settings › Game.' },
        ],
      },
      {
        id: 'buttons',
        title: 'The buttons below the switches',
        blocks: [
          {
            t: 'shot',
            id: 'settings-community',
            alt: 'The bottom of the Game tab: a Mascot AI chatter switch, a Game features button, Rate OutBrick and Contact us side by side, Community and Report a bug side by side, a green Support button, Terms and Privacy, a More information heading with License, Apple EULA, Age rating, Accessibility, Privacy choices and Refunds, and Delete My Data at the very bottom.',
            caption: 'The foot of the Game tab: help, community and legal links, and Delete My Data.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Game features', text: 'Switch off **Friend Rescue**, **Village Race**, **Brick Royale**, **Crew Race** or **Offers on the map** if you would rather not see them. Nothing you have earned is lost.' },
              { term: 'Rate OutBrick', text: 'Opens the App Store’s review page. There is no reward for rating, and the game only asks a few times a year, never after a loss or a purchase.' },
              { term: 'Contact us', text: 'Opens our [contact form](/contact) inside the game: the private way to reach the team.' },
              { term: 'Community', text: 'Opens this community in Safari.' },
              { term: 'Report a bug', text: 'Opens a bug report in Safari with your device, iOS version, game version, accessibility settings and level already filled in. See [Reporting a bug well](help:reporting-bugs).' },
              { term: 'Advertising choices', text: 'Only shown where an ad-consent form is required (for example in the EU and the UK). Reopens it so you can change your choice.' },
              { term: 'Support, Terms, Privacy', text: 'Our [support](/support), [terms](/terms) and [privacy policy](/privacy) pages.' },
              { term: 'More information', text: '[License](/license-agreement), [Apple EULA](/eula), [Age rating](/age-rating), [Accessibility](/accessibility), [Privacy choices](/privacy-choices) and [Refunds](/refunds).' },
              { term: 'Delete My Data', text: 'Resets your progress on this device and asks iCloud to delete your save. See [Progress, iCloud and privacy](help:progress-privacy-and-account#delete).' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Community and Report a bug open in Safari, outside the game, because the community is a place for people aged 16 and over and the game itself is rated 4+.',
          },
        ],
      },
      {
        id: 'accessibility',
        title: 'The Accessibility tab',
        blocks: [
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'The Accessibility tab: Animation speed from 50% to 200%, Announcement detail Brief, Standard or Full, and switches for Colour-blind, High-contrast board, Left-handed tray, Hold to confirm swaps and Row sound.',
            caption: 'Settings › Accessibility.',
          },
          {
            t: 'p',
            text: 'Animation speed, Announcement detail, Colour-blind, High-contrast board, Left-handed tray, Hold to confirm swaps and Row sound are each explained in [Accessibility in OutBrick](help:accessibility#where).',
          },
        ],
      },
      {
        id: 'elsewhere',
        title: 'Things that are not in Settings',
        blocks: [
          {
            t: 'list',
            items: [
              '**Restore purchases:** at the bottom of the **Shop**.',
              '**Your name, avatar and flag:** in your **Profile** (tap your avatar).',
              '**The game’s version number:** at the foot of your **Profile**.',
              '**Language:** OutBrick follows your iPhone’s language. To choose another just for OutBrick, open the iPhone **Settings › Apps › OutBrick › Language**.',
              '**Live Activities and notification styles:** in the iPhone **Settings › Apps › OutBrick**.',
            ],
          },
        ],
      },
    ],
    related: ['accessibility', 'apple-features', 'progress-privacy-and-account', 'menus-tour'],
  },

  {
    slug: 'apple-features',
    category: 'apple',
    cover: 'home',
    title: 'Widgets, Siri, Shortcuts and other Apple features',
    summary:
      'Home Screen and Lock Screen widgets, Control Center, Live Activities, Siri phrases, Spotlight, Handoff, Messages challenges, notifications and the icon badge, Focus filters and Game Center.',
    keywords: 'widget lock screen control center live activity dynamic island siri shortcuts app intents spotlight handoff imessage stickers challenge notification badge quick actions focus game center achievements visual intelligence',
    sections: [
      {
        id: 'widgets',
        title: 'Home Screen widgets',
        blocks: [
          {
            t: 'p',
            text: 'Touch and hold an empty part of your Home Screen, tap **Edit › Add Widget**, and search for OutBrick. Some widgets can be set up: touch and hold one, then tap **Edit Widget**.',
          },
          {
            t: 'table',
            head: ['Widget', 'Shows'],
            rows: [
              ['Next Level / Continue', 'Jumps straight into your next board.'],
              ['Journey', 'Your level, boards cleared, Brick Pass tier and next reward.'],
              ['Daily Brick', 'Your daily coins and streak.'],
              ['Streak and Streak Calendar', 'Your day streak. The Streak widget also sets the hour of your streak reminder (9:00 to 21:00).'],
              ['Lives', 'Lives in your tank and when the next one comes. Also on the Lock Screen.'],
              ['Mascot of the Day and Mascot Mood', 'A friend: one you choose, or “Surprise me”.'],
              ['Chapter and Chapter Map', 'Progress through a chapter: the current one, or any you choose.'],
              ['Events and Season Countdown', 'The live or next event, and time left in the season.'],
              ['Brick Pass and Next Reward', 'Your tier and what comes next.'],
              ['Coins & Boosters', 'Your coins and boosters.'],
              ['Collection', 'Your latest cards.'],
              ['Play Random', 'A random board, played right in the widget on iOS 17 and later.'],
              ['This Week', 'Your best margins this week.'],
              ['Wrist & Phone', 'Your Apple Watch level beside your iPhone level.'],
            ],
          },
          {
            t: 'p',
            text: '**Lock Screen:** an OutBrick widget, Streak Ring, Coins, Daily Brick, Next Level, Event Countdown and Brick Pass, plus small inline lines for your streak, level or Daily Brick.',
          },
        ],
      },
      {
        id: 'control-center',
        title: 'Control Center and Live Activities',
        blocks: [
          {
            t: 'list',
            items: [
              '**Control Center** (iOS 18 and later): open it, tap **+**, then **Add a Control** and search for OutBrick. There are buttons for Continue level, Open Journey, Open Shop and Random level, switches for **Music** and **Colour-blind glyphs**, and status controls for your streak, lives and a friend.',
              '**Live Activity:** while you play a board, its progress shows on the Lock Screen and in the Dynamic Island. Leave the game and it says your board is waiting; clear it and it shows your result. Tap it to go back. Turn Live Activities off in the iPhone **Settings › Apps › OutBrick**.',
            ],
          },
        ],
      },
      {
        id: 'siri',
        title: 'Siri and Shortcuts',
        blocks: [
          {
            t: 'p',
            text: 'Say any of these to Siri, or find them in the **Shortcuts** app under OutBrick. Questions are answered without opening the game.',
          },
          {
            t: 'table',
            head: ['Say', 'What happens'],
            rows: [
              ['“Play OutBrick” · “Continue my OutBrick journey”', 'Opens your next board.'],
              ['“Play level 120 in OutBrick”', 'Opens that level (one you have reached).'],
              ['“Open Garden City in OutBrick”', 'Opens a village on the map.'],
              ['“Meet Bloo in OutBrick”', 'Visits a friend.'],
              ['“What level am I on in OutBrick”', 'Tells you your level and progress.'],
              ['“How many lives do I have in OutBrick” · “When is my next life in OutBrick”', 'Tells you your lives.'],
              ['“How many stars do I have in OutBrick”', 'Counts your stars.'],
              ['“Is my OutBrick streak safe”', 'Tells you your streak and today’s Daily Brick.'],
              ['“How many coins do I have in OutBrick”', 'Tells you your coins and boosters.'],
              ['“When does the OutBrick event end”', 'Tells you the time left in the event.'],
            ],
          },
          {
            t: 'p',
            text: 'Shortcuts also offers actions such as **Explain My Next Move**, **Set Music**, **Set Colour-blind Glyphs**, **Open Missions** and **Play a Random Level**.',
          },
        ],
      },
      {
        id: 'spotlight',
        title: 'Spotlight, Handoff and quick actions',
        blocks: [
          {
            t: 'list',
            items: [
              '**Spotlight:** swipe down on the Home Screen and search for a level you have reached, a village, a chapter, a friend, an event, or screens like “Accessibility settings” and “Brick Pass”.',
              '**Quick actions:** touch and hold the OutBrick icon for **Play next level**, **Journey** and **Shop**.',
              '**Handoff:** start a board on one device and continue it on another signed in to the same Apple Account.',
              '**Visual Intelligence** (iOS 26 and later): point the camera at, or take a screenshot of, OutBrick art to find the matching village, friend or level. It runs entirely on your device.',
            ],
          },
        ],
      },
      {
        id: 'messages',
        title: 'Challenges and stickers in Messages',
        blocks: [
          {
            t: 'p',
            text: 'In a Messages conversation, tap **+**, then **More** if you need to, then **OutBrick**. Send a level as a challenge card, or one of the friends’ stickers. Friends without the game get a link that opens a page on this website.',
          },
        ],
      },
      {
        id: 'notifications',
        title: 'Notifications and the icon badge',
        blocks: [
          {
            t: 'list',
            items: [
              'The game never asks for notifications at launch. After your third clear it asks whether Bloo may keep your place; **Not now** waits a week.',
              'At most **one notification every 20 hours**, and never between 22:00 and 09:00. Each one offers **Play**, **Later** (three hours) or **Tomorrow**.',
              'The reminders: a board you left, lives refilled, missions ready, your streak (at the hour you choose in the Streak widget, 20:30 by default), events starting, a season ending and a Sunday recap.',
              'The **icon badge** counts rewards waiting for you (claimable missions, Brick Pass tiers, village star rewards, today’s first clear), up to nine. Opening the game clears it without claiming anything.',
              'Turn reminders off in **Settings › Game › Notifications**, or in the iPhone Settings.',
            ],
          },
        ],
      },
      {
        id: 'focus',
        title: 'Focus filters',
        blocks: [
          {
            t: 'p',
            text: 'In the iPhone **Settings › Focus**, choose a Focus, then **Add Filter › OutBrick**. While that Focus is on, OutBrick can turn the music off (or music and sounds), pause reminders and hide the icon badge.',
          },
        ],
      },
      {
        id: 'game-center',
        title: 'Game Center',
        blocks: [
          {
            t: 'p',
            text: 'Sign in to Game Center in the iPhone Settings to unlock 65 achievements (one for each of the first 50 chapters among them) and leaderboards for highest level, total clears, today and this week. Open Game Center from the badge on the Journey or from the Pause menu. The Leaders tab in the game is a separate, all-time board.',
          },
        ],
      },
    ],
    related: ['settings', 'progress-privacy-and-account', 'rewards-and-events', 'accessibility'],
  },

  {
    slug: 'progress-privacy-and-account',
    category: 'account',
    cover: 'journey',
    title: 'Progress, iCloud, new devices and privacy',
    summary:
      'How your progress is saved and synced through iCloud, moving to a new iPhone, what is shared and with whom, advertising and tracking choices, and how to delete your data.',
    keywords: 'save progress lost sync icloud new phone transfer reinstall restore delete reset privacy data tracking att ads consent standings name',
    sections: [
      {
        id: 'saved',
        title: 'How your progress is saved',
        blocks: [
          {
            t: 'list',
            items: [
              'Progress is saved on your device and, when you are signed in to iCloud, in your own iCloud account. There is no OutBrick account to create.',
              'iCloud keeps your level, stars, coins, boosters, lives and undos, streaks, Brick Pass, Collection, Wardrobe, name, avatar and stats, and your colour-blind choice.',
              'Sound, music, haptics, notifications and the board accessibility settings stay on each device.',
              'When two devices disagree, nothing is overwritten: the higher level and counts are kept, collections are combined, and coins spent on one device are never refunded by another.',
            ],
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
              'On the new device, sign in to the same Apple Account and turn on iCloud.',
              'Install OutBrick from the App Store and open it. Your progress is fetched and merged when the game starts.',
              'Open the **Shop**, scroll to the bottom and tap **Restore Purchase** to bring back Remove Ads, Brick Pass seasons and Wardrobe items.',
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'If you were signed out of iCloud on the old device, its progress was only on that device. Sign in to iCloud there and open OutBrick once before you switch.',
          },
        ],
      },
      {
        id: 'shared',
        title: 'What is shared, and with whom',
        blocks: [
          {
            t: 'list',
            items: [
              '**The Leaders tab** shows your player name, level and, if you choose, a flag. Turn off **Settings › Game › Show me on the standings board** to be removed; hide your flag in your Profile.',
              '**Village Race and Brick Royale** share your player name with the players in that race, only if you join.',
              '**Game Center** is Apple’s, under your Game Center settings.',
              'OutBrick has **no analytics**, and the game’s own data is not used to track you. The ad partner (Google AdMob) handles its own data for optional videos; see our [privacy policy](/privacy).',
            ],
          },
        ],
      },
      {
        id: 'ads-privacy',
        title: 'Advertising and tracking choices',
        blocks: [
          {
            t: 'list',
            items: [
              'iOS may ask whether OutBrick can track you. **Ask App Not to Track** works fine: videos still play and rewards still pay.',
              'In the EU, the UK and Switzerland, a consent form appears the first time you choose a video. Change your answer any time with **Settings › Game › Advertising choices**.',
              'More on our [privacy choices](/privacy-choices) page.',
            ],
          },
        ],
      },
      {
        id: 'delete',
        title: 'Deleting your data',
        blocks: [
          {
            t: 'steps',
            items: [
              'Open **Settings** and scroll to the very bottom of the **Game** tab.',
              'Tap **Delete My Data**, read the card, and tap **Continue**.',
            ],
          },
          {
            t: 'p',
            text: 'This resets your progress, coins, boosters and stats on this device and asks iCloud to delete your save. Another device signed in to the same iCloud may sync an older save back, so do it there too. Purchases you own can be restored from the Shop afterwards, and photos you saved or shared are not touched. **It cannot be undone.**',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Your community account is separate from the game. Delete it from your community **Settings** after signing in.',
          },
          { t: 'shot', id: 'delete-data', alt: 'The Delete Data card over Settings, with its full warning and Continue and Cancel buttons.', caption: 'Delete My Data asks once more before anything is erased.' },
        ],
      },
    ],
    related: ['shop-and-purchases', 'settings', 'apple-features', 'troubleshooting'],
  },
];
