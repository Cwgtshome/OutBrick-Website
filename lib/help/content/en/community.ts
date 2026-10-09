import type { HelpArticle } from '../../model.ts';

/** Troubleshooting, the community and bug reports, in English. Checked against 5.1.1 (68). */
export const communityArticles: HelpArticle[] = [
  {
    slug: 'troubleshooting',
    category: 'community',
    cover: 'settings-community',
    title: 'Troubleshooting common problems',
    summary:
      'Quick fixes for missing progress, purchases that did not arrive, lives that seem stuck, no sound, missing notifications, widgets, videos that will not load and VoiceOver focus problems.',
    keywords: 'problem not working bug fix help lost progress missing purchase no sound notifications widget blank video ad not loading voiceover focus jumps crash freeze update version',
    sections: [
      {
        id: 'first',
        title: 'First, three quick checks',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Update OutBrick.** Open the App Store, tap your picture, and update OutBrick if it is listed. Many fixes arrive this way.',
              '**Check your version.** Tap your avatar on Home: the version is at the bottom of your Profile, for example “OutBrick 5.1.1 (68)”.',
              '**Close and reopen the game.** Swipe up from the bottom of the screen and pause, swipe OutBrick away, then open it again.',
            ],
          },
        ],
      },
      {
        id: 'progress',
        title: 'My progress is missing',
        blocks: [
          {
            t: 'list',
            items: [
              'Make sure you are signed in to iCloud with the same Apple Account as before, and that iCloud Drive is on.',
              'Open OutBrick and give it a minute online: progress is fetched and merged when the game starts.',
              'If the old device was never signed in to iCloud, its progress only exists there. Sign in on the old device, open OutBrick once, then try again on the new one.',
            ],
          },
          { t: 'p', text: 'More in [Progress, iCloud and privacy](help:progress-privacy-and-account).' },
        ],
      },
      {
        id: 'purchase',
        title: 'Something I bought did not arrive',
        blocks: [
          {
            t: 'steps',
            items: [
              'Open the **Shop**, scroll to the bottom and tap **Restore Purchase**.',
              'For coins, boosters and lives, check that iCloud is on: they travel with your progress, not through the App Store.',
              'Still missing? Write to us privately with the [contact form](/contact), with the date and the item. Never post a receipt in the community. Refunds are handled by Apple: see [Refunds](/refunds).',
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'My lives are not coming back',
        blocks: [
          {
            t: 'p',
            text: 'A life returns every 30 minutes, counted from real time, so it keeps refilling while the game is closed. If you change your device’s clock backwards, the game ignores it and you may wait longer. Keep **Settings › General › Date & Time › Set Automatically** on. Tap the heart on the Journey to see when the next life comes.',
          },
        ],
      },
      {
        id: 'sound',
        title: 'There is no sound or music',
        blocks: [
          {
            t: 'list',
            items: [
              'Check **Settings › Game › Sounds** and **Music**, or the same switches in the Pause menu.',
              'Check the Ring/Silent switch and the volume.',
              'An OutBrick Focus filter may be muting the game: a line under Music in Settings tells you when it is.',
            ],
          },
        ],
      },
      {
        id: 'notifications',
        title: 'I do not get notifications',
        blocks: [
          {
            t: 'list',
            items: [
              'Check **Settings › Game › Notifications** in the game, and **Settings › Notifications › OutBrick** on the iPhone.',
              'OutBrick sends at most one notification every 20 hours, never between 22:00 and 09:00, so quiet days are normal.',
              'A Focus may be holding them back.',
            ],
          },
        ],
      },
      {
        id: 'widgets',
        title: 'A widget is blank or out of date',
        blocks: [
          {
            t: 'p',
            text: 'Open OutBrick once so it can share your latest progress with its widgets. If a widget still looks wrong, remove it and add it again. Widgets refresh on a schedule set by iOS, so a few minutes’ delay is normal.',
          },
        ],
      },
      {
        id: 'videos',
        title: 'A video will not load',
        blocks: [
          {
            t: 'list',
            items: [
              'Videos need an internet connection, and sometimes none is available for a moment: try again shortly.',
              'Each kind of video has a daily limit (39 in total), reset at midnight. When a limit is reached, its button disappears until tomorrow.',
              'Only a video watched to the end pays its reward.',
            ],
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'VoiceOver jumps back to the top of the board',
        blocks: [
          {
            t: 'p',
            text: 'Some players have told us VoiceOver can lose its place while swiping through a board. We have found the cause: a card offering help can open on its own while you are reading the board. A fix is on its way in an update. Until then:',
          },
          {
            t: 'list',
            items: [
              'If a card offering boosters or a hint appears while you are reading the board, a **two-finger scrub** closes it and puts you back on the board.',
              'Use the **rotors** (Pieces that can match, Specials, Goals, Blockers, Gates) to jump straight to what you need, instead of swiping cell by cell.',
              'Use a piece’s **actions** (swipe up or down) to move it, which keeps your focus on the board.',
              'Double-tap the **Board** summary, or use **Read the board**, to hear where things are.',
              'Tell us your device, iOS version, OutBrick version, level and exactly what VoiceOver said in the [Accessibility category](/community/c/accessibility). Every report helps us find it faster.',
            ],
          },
        ],
      },
      {
        id: 'stuck',
        title: 'A board feels impossible',
        blocks: [
          {
            t: 'list',
            items: [
              'You can never be truly stuck: with no move possible, the board reshuffles for free.',
              'Use the free Hint, Rocket and UFO you get on every attempt.',
              'From your sixth attempt at a board, a **helping hand** adds three extra moves, once a day.',
              'Ask in [Help & support](/community/c/help) with the level number: other players love a puzzle.',
            ],
          },
        ],
      },
    ],
    related: ['reporting-bugs', 'progress-privacy-and-account', 'shop-and-purchases', 'voiceover'],
  },

  {
    slug: 'using-the-community',
    category: 'community',
    cover: 'settings-community',
    title: 'Using the OutBrick Community',
    summary:
      'Signing in, choosing the right category, starting a thread, formatting, marking a solution, following threads and email, translations, voting on ideas, and keeping your details private.',
    keywords: 'forum sign in login account apple google email passkey thread post reply markdown solution watch mute notifications email digest translate language vote idea roadmap bookmark reaction poll image alt text report privacy delete account',
    sections: [
      {
        id: 'read',
        title: 'Reading and signing in',
        blocks: [
          {
            t: 'list',
            items: [
              'Anyone can read the community without an account.',
              'To post, reply, vote or react, tap **Sign in** and choose **Sign in with Apple**, **Google**, or an **email link** (we email you a one-time link; no password). After signing in you can add a **passkey** in Settings and use Face ID or Touch ID next time.',
              'With Apple’s **Hide My Email**, we get a private relay address. Use the same method each time to come back to the same account.',
              'Your email address is never shown to anyone.',
            ],
          },
        ],
      },
      {
        id: 'categories',
        title: 'Choosing a category',
        blocks: [
          {
            t: 'table',
            head: ['Category', 'For'],
            rows: [
              ['[Announcements](/community/c/announcements)', 'Releases and news from the team. Only the team starts threads; everyone can reply.'],
              ['[Help & support](/community/c/help)', '“How do I…?” questions about boards, lives, purchases and settings.'],
              ['[Bug reports](/community/c/bugs)', 'Something broken. The form asks for your device and versions; see [Reporting a bug well](help:reporting-bugs).'],
              ['[Ideas & feedback](/community/c/ideas)', 'Suggestions. Upvote the ones you want and follow them on the Roadmap.'],
              ['[Accessibility](/community/c/accessibility)', 'VoiceOver, Voice Control, Switch Control, Larger Text, colour-blind play. The team watches it most closely.'],
              ['[Show & tell](/community/c/show-and-tell)', 'Clears you are proud of and Journey milestones, with alt text on every picture.'],
              ['[General](/community/c/general)', 'Everything else.'],
            ],
          },
        ],
      },
      {
        id: 'posting',
        title: 'Starting a thread and replying',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Search first:** someone may have asked already.',
              'Tap **Start a thread**, choose a category and write a title that says what it is about, for example “Level 214: is there a way past the iced gate?”.',
              'Choose the **language** you are writing in, so people who read it can find it.',
              'Write your post. **Preview** shows how it will look.',
              'Tap **Post thread**. To reply, use the box at the foot of a thread, or **Reply** and **Quote** on a post.',
            ],
          },
          {
            t: 'table',
            caption: 'Formatting',
            head: ['Type', 'To get'],
            rows: [
              ['`**bold**`', 'bold text'],
              ['`*italic*`', 'italic text'],
              ['`- item`', 'a bulleted list (`1.` for a numbered one)'],
              ['`> quote`', 'a quotation'],
              ['`[words](https://…)`', 'a link'],
              ['`@name`', 'mention someone'],
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Adding an image? A description is required: say what matters in it, for example “Level 214 with the red brick one move from the gate”. People who use VoiceOver hear it instead of seeing the picture.',
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Solutions, votes and reactions',
        blocks: [
          {
            t: 'list',
            items: [
              'If a reply solves your question, tap **Mark as solution** on it. The thread shows **Solved**, and others can jump straight to the answer.',
              'In Ideas & feedback, **Upvote** what you would like to see. The **Roadmap** shows what is under consideration, planned, in progress and shipped.',
              'React to a post with Like, Love, Celebrate, Funny, Thanks or Insightful.',
              'Bug reports carry a status set by the team: New, Confirmed, Fixed, Released, Not a bug or Duplicate.',
            ],
          },
        ],
      },
      {
        id: 'following',
        title: 'Following threads and email',
        blocks: [
          {
            t: 'list',
            items: [
              '**Watch** a thread or a category to get an email about new posts; **Mute** to hide it.',
              'The bell (**Notifications**) shows replies, mentions and status changes.',
              '**Bookmarks** keep posts you want to find again.',
              'Choose which emails you get, including an optional weekly digest, in your community **Settings**.',
            ],
          },
        ],
      },
      {
        id: 'languages',
        title: 'Languages and translation',
        blocks: [
          {
            t: 'p',
            text: 'The community is in English, French, German, Spanish, Japanese and Brazilian Portuguese. Lists show threads in your language and English by default; one tap shows every language. A post in another language can be translated automatically, and is clearly marked as a machine translation.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Keeping it kind and private',
        blocks: [
          {
            t: 'list',
            items: [
              'Read the [community guidelines](/community/guidelines): be kind, hide spoilers, keep personal details out of posts.',
              'Never post a password, a sign-in code, a purchase receipt or anything that identifies you. Crop account details out of screenshots.',
              'See something that breaks the guidelines? Tap **Report** on the post. A moderator will look at it.',
              'In your community **Settings** you can export your data, sign out, or delete your account.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'The community is for people aged 16 and over. For anything private, such as a purchase, use the [contact form](/contact) instead.',
          },
        ],
      },
    ],
    related: ['reporting-bugs', 'troubleshooting', 'accessibility', 'welcome'],
  },

  {
    slug: 'reporting-bugs',
    category: 'community',
    cover: 'settings-community',
    title: 'Reporting a bug well',
    summary:
      'The fastest way to get a bug fixed: report it from inside the game so your details are filled in, write steps someone else can follow, and add exactly what VoiceOver or another assistive technology did.',
    keywords: 'bug report issue problem crash glitch steps reproduce screenshot screen recording version device ios assistive technology status',
    sections: [
      {
        id: 'from-game',
        title: 'Report it from the game',
        blocks: [
          {
            t: 'steps',
            items: [
              'In OutBrick, open **Settings** (the gear on Home or the Journey).',
              'Scroll down and tap **Report a bug**. Safari opens a new bug report in the community.',
              'Sign in if asked, check the details already filled in, and describe what happened.',
            ],
          },
          {
            t: 'shot',
            id: 'settings-community',
            alt: 'The foot of the Settings Game tab with a purple Report a bug button beside a blue Community button.',
            caption: '**Report a bug** sits next to **Community** in Settings.',
          },
          {
            t: 'table',
            caption: 'What the game fills in for you',
            head: ['Field', 'Example'],
            rows: [
              ['Device', 'The model, for example iPhone18,2'],
              ['System version', '27.1'],
              ['OutBrick version', '5.1.1 (68)'],
              ['Assistive technology', 'VoiceOver, Switch Control, Larger Text or colour filters, when they are on'],
              ['Level', 'Your current Journey level'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Nothing that identifies you is sent: no name, no Game Center or iCloud identity, no advertising identifier. iOS does not let apps detect **Voice Control** or **Zoom**, so tick those yourself if you use them.',
          },
        ],
      },
      {
        id: 'write',
        title: 'Write steps someone else can follow',
        blocks: [
          {
            t: 'p',
            text: 'The team needs to make the bug happen on their own device. Number your steps from opening the game:',
          },
          {
            t: 'list',
            items: [
              '**Steps:** “1. Open level 214. 2. Slide the red long brick left. 3. Use Undo.”',
              '**What should happen:** “The brick goes back to where it was.”',
              '**What happened:** “The brick disappeared and the moves counter went up by two.”',
              'Does it happen every time? After a restart? On another level?',
            ],
          },
        ],
      },
      {
        id: 'a11y',
        title: 'Accessibility problems',
        blocks: [
          {
            t: 'list',
            items: [
              'Name the technology and its settings: VoiceOver (with your speech rate or Braille display if relevant), Voice Control, Switch Control (auto or manual scanning), Zoom, Larger Text size.',
              'Quote **exactly** what VoiceOver said, or the command Voice Control did not understand.',
              'Say where focus was before and after, which gesture or action you used, and which rotor was selected.',
              'Post it in [Accessibility](/community/c/accessibility) if you prefer: the team reads it most closely.',
            ],
          },
        ],
      },
      {
        id: 'pictures',
        title: 'Screenshots and recordings',
        blocks: [
          {
            t: 'list',
            items: [
              '**Screenshot:** press the side button and volume up together.',
              '**Screen recording:** add **Screen Recording** in Control Center, start it, reproduce the bug, then stop it.',
              'Crop out your name, email and anything personal, and describe the picture in its alt text.',
            ],
          },
        ],
      },
      {
        id: 'after',
        title: 'After you post',
        blocks: [
          {
            t: 'p',
            text: 'The team sets a status on every bug report: **New**, **Confirmed**, **Fixed**, **Released**, **Not a bug** or **Duplicate**, sometimes with a note such as “Fixed in 5.1.1”. Watch the thread to get an email when it changes. For anything private, use the [contact form](/contact).',
          },
        ],
      },
    ],
    related: ['troubleshooting', 'using-the-community', 'accessibility', 'voiceover'],
  },
];
