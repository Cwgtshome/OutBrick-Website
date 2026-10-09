import type { HelpArticle } from '../../model.ts';

/** The accessibility shelf, in English (the source for every translation). Checked against 5.1.1 (68). */
export const accessibilityArticles: HelpArticle[] = [
  {
    slug: 'accessibility',
    category: 'accessibility',
    cover: 'settings-a11y',
    title: 'Accessibility in OutBrick: start here',
    summary:
      'Every way OutBrick adapts to you, from VoiceOver and Switch Control to colour-blind symbols, a high-contrast board, slower animation and no timers, with a starting point for your needs.',
    keywords: 'a11y inclusive disability blind low vision deaf motor colour blind color blind dyslexia',
    sections: [
      {
        id: 'overview',
        title: 'Built to be played your way',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick is a calm puzzle game with **no clock anywhere**: you can take as long as you like over every move. Each board can be read and played with [VoiceOver](help:voiceover), [Voice Control, Switch Control or a keyboard](help:voice-control-switch-control-keyboard), and the game has its own [Accessibility settings](#where) for vision, motion and hand reach. It also follows the accessibility settings you have already chosen on your iPhone or iPad.',
          },
          {
            t: 'list',
            items: [
              '**Colour is never the only clue.** Colour-blind symbols are on from the start, and every brick, gate and goal can carry a shape. See [Vision, hearing and motion](help:vision-hearing-and-motion).',
              '**Every piece has a name.** VoiceOver reads a piece’s kind, colour and state, for example “Blue line blaster, horizontal, clears its row”, and a face-down brick never gives its colour away.',
              '**Move your way.** Slide or swap with a touch, with VoiceOver actions, by saying “Slide red 14 left”, with switches, or with the arrow keys.',
              '**Time to think.** No timers, an Animation speed setting from 50% to 200%, and an optional **Hold to confirm swaps** so nothing plays by accident.',
              '**Nothing to hear that you cannot also see.** The friends talk in text bubbles, not voices, and every sound has something on screen to match it.',
            ],
          },
        ],
      },
      {
        id: 'where',
        title: 'Where the settings live',
        blocks: [
          {
            t: 'steps',
            items: [
              'On **Home** or the **Journey**, tap the gear in the top right corner. With VoiceOver, it is the **Settings** button.',
              'At the top of Settings, choose the **Accessibility** tab. (The **Game** tab holds sound, music, haptics and notifications; see [Every setting explained](help:settings).)',
              'Change one thing at a time, then play a board you know to feel the difference.',
            ],
          },
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'The Settings screen on the Accessibility tab. Animation speed is set to 100% with choices from 50% to 200%. Announcement detail is set to Standard, with Brief and Full either side. Below are on and off switches for Colour-blind (on), High-contrast board, Left-handed tray, Hold to confirm swaps and Row sound (all off).',
            caption: 'Settings › Accessibility. The line under each control is also what VoiceOver says as its hint.',
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'You can open this tab directly: search Spotlight for “Accessibility settings” and choose the OutBrick result.',
          },
          {
            t: 'table',
            caption: 'The Accessibility tab, top to bottom',
            head: ['Setting', 'What it does', 'Starts as'],
            rows: [
              ['Animation speed', 'How fast pieces swap, fall and clear: 50%, 75%, 100%, 150% or 200%. Slower is easier to follow.', '100%'],
              ['Announcement detail', 'How much VoiceOver says after each move: Brief, Standard or Full.', 'Standard'],
              ['Colour-blind', 'Stamps a shape on every brick so colour is never the only difference.', 'On'],
              ['High-contrast board', 'A solid dark floor, white outlines, large colour symbols and thick door outlines.', 'Off'],
              ['Left-handed tray', 'Puts the boosters under your left thumb and Pause on the right.', 'Off'],
              ['Hold to confirm swaps', 'With Switch Control, VoiceOver, Voice Control or a keyboard, you choose a move twice before it plays.', 'Off'],
              ['Row sound', 'Adds a **Hear row** action on the board: a short, quiet tone for each piece, one pitch per colour symbol.', 'Off'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Colour-blind is saved to iCloud and follows you to your other devices. The other board settings stay on the device where you chose them, because what suits an iPad may not suit an iPhone.',
          },
        ],
      },
      {
        id: 'starting-points',
        title: 'A starting point for your needs',
        blocks: [
          { t: 'p', text: 'Everyone is different, so treat these as suggestions to try, not rules.' },
          {
            t: 'table',
            head: ['If you…', 'Try this first'],
            rows: [
              ['are blind or use VoiceOver', 'Read [Playing with VoiceOver](help:voiceover). Keep **Announcement detail** on Standard to begin with, and try **Row sound** to scan a row by ear.'],
              ['have low vision', 'Turn on **High-contrast board**, raise **Larger Text** in iPhone Settings, and touch and hold the board header or tray to magnify it.'],
              ['see colours differently', 'Leave **Colour-blind** on: every colour has its own shape. High-contrast makes those shapes larger.'],
              ['are sensitive to motion or flashing', 'Turn on **Reduce Motion** and **Dim Flashing Lights** in iPhone Settings, and set **Animation speed** to 75% or 50%.'],
              ['play with one hand or have limited reach', 'Try **Left-handed tray** if you hold the phone in your left hand, and **Hold to confirm swaps** if a slip of the finger could play a move.'],
              ['use switches, your voice or a keyboard', 'Read [Voice Control, Switch Control and keyboards](help:voice-control-switch-control-keyboard).'],
              ['are deaf or hard of hearing', 'Nothing in OutBrick depends on sound. Friends talk in text bubbles, and Haptics let you feel moves land.'],
              ['like time to think', 'There is no timer anywhere. Slow the **Animation speed** and use hints whenever you like.'],
            ],
          },
        ],
      },
      {
        id: 'system',
        title: 'iPhone and iPad settings OutBrick follows',
        blocks: [
          { t: 'p', text: 'These live in the iPhone or iPad **Settings** app under **Accessibility**, and OutBrick responds to them on its own.' },
          {
            t: 'defs',
            items: [
              { term: 'VoiceOver', text: 'Every board, menu and card is labelled. See [Playing with VoiceOver](help:voiceover).' },
              { term: 'Larger Text', text: 'Text grows up to the largest accessibility size, and layouts stack so nothing is cut off. The board header and tray support the Large Content Viewer: touch and hold to see a magnified label.' },
              { term: 'Bold Text', text: 'Screens redraw in bold as soon as you switch it on.' },
              { term: 'Increase Contrast and Reduce Transparency', text: 'Glassy controls such as the Off/On switches turn solid, with stronger edges.' },
              { term: 'Reduce Motion', text: 'Idle board motion stops, glows hold still, hints shimmer instead of moving, and the little critters stay home.' },
              { term: 'Dim Flashing Lights', text: 'Full-screen flashes drop to a third of their strength and never come closer together than about a third of a second.' },
              { term: 'Differentiate Without Color', text: 'Turns the colour-blind symbols on, even if you switched them off in the game.' },
              { term: 'Smart Invert', text: 'The friends, flags and artwork keep their real colours.' },
              { term: 'Voice Control and Switch Control', text: 'Both can play every board. See [Voice Control, Switch Control and keyboards](help:voice-control-switch-control-keyboard).' },
            ],
          },
        ],
      },
      {
        id: 'no-timers',
        title: 'No clocks, no rush',
        blocks: [
          {
            t: 'p',
            text: 'There is no timer on any board, menu or event in OutBrick. Each board gives you a number of **moves**, and that is the only limit. A move only counts when it actually does something: a swap that makes no match springs back and does not use a move.',
          },
          {
            t: 'p',
            text: 'If you get stuck, ask for a hint. With VoiceOver, the two-finger double tap on a board gives you a hint for free, without using a Hint booster. See [Boosters, hints and Pause](help:boosters-and-pause).',
          },
        ],
      },
      {
        id: 'testing',
        title: 'What we are still testing',
        blocks: [
          {
            t: 'p',
            text: 'We would rather tell you plainly than have you find out the hard way. VoiceOver and Voice Control have been played on a real iPhone by the team. These have been built and checked in code, but not yet played end to end by hand on a device:',
          },
          {
            t: 'list',
            items: [
              'Switch Control on the Slide & Match boards.',
              'Full Keyboard Access on iPad and Mac.',
              'The Large Content Viewer on the board header and tray at the very largest text size.',
              'Apple TV and Apple Watch, which do not yet have the new board’s accessibility work.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            title: 'You can help',
            text: 'If you play with any of these, tell us what works and what does not in the [Accessibility category](/community/c/accessibility). The team reads it most closely.',
          },
        ],
      },
      {
        id: 'report',
        title: 'Tell us when something gets in your way',
        blocks: [
          {
            t: 'p',
            text: 'In the game, **Settings › Report a bug** opens a report in Safari with your device, iOS version, game version, level and the assistive technology you have switched on already filled in. It never sends your name or account. Add the exact words VoiceOver said, or the control that did not respond. See [Reporting a bug well](help:reporting-bugs).',
          },
        ],
      },
    ],
    related: ['voiceover', 'vision-hearing-and-motion', 'voice-control-switch-control-keyboard', 'settings'],
  },

  {
    slug: 'voiceover',
    category: 'accessibility',
    cover: 'board-slide',
    title: 'Playing with VoiceOver',
    summary:
      'How the board reads, how to slide and swap with actions, the rotors, every gesture, what you hear after a move and how to get a free hint.',
    keywords: 'screen reader blind rotor magic tap actions swipe double tap scrub',
    sections: [
      {
        id: 'start',
        title: 'Before you start',
        blocks: [
          {
            t: 'steps',
            items: [
              'Turn on VoiceOver in the iPhone **Settings › Accessibility › VoiceOver**, or ask Siri: “Turn on VoiceOver”. Setting the **Accessibility Shortcut** lets you triple-click the side button to switch it on and off.',
              'Open OutBrick. Home reads first; the **Play level** button starts your current board, and a two-finger double tap on Home does the same.',
              'The first time you meet a new idea, a short teaching card explains it. It is the only thing on screen while it shows: double-tap to start playing.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'In the game’s **Settings › Accessibility**, **Announcement detail** sets how much you hear after each move. Standard is a good place to start; you can change it at any time.',
          },
        ],
      },
      {
        id: 'layout',
        title: 'How the board reads',
        blocks: [
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'A Slide & Match board on a beach, level 25. The header shows 5 lives, 15 moves left, a star track with one star lit, goals of 1 yellow and 3 blue bricks, and the host friend in a sailor cap. The board holds pink, yellow, orange and blue bricks, each stamped with its colour’s shape, with yellow, orange and blue gates on its edges and a gold keyhole lid over a row of bricks. The tray below has Pause, then Hint, Rocket and UFO marked Free, and Undo with 6.',
            caption: 'A board, top to bottom: the header, the grid, and the tray. VoiceOver reads the header’s summary first, then the grid row by row.',
          },
          {
            t: 'list',
            items: [
              '**The Board summary comes first.** It reads the level, its name, the stage, the goals and the moves left. Double-tap it to hear the whole board read out with a hint.',
              '**Then every cell, row by row,** from the top left. Gaps in a board’s shape are skipped. Each cell’s value is its place, for example “Row 3, column 2”.',
              '**Pieces are named by kind, colour and state,** never by colour alone: “Red bomb”, “Crate, 2 layers”, “Yellow brick, locked, a line through it frees it”, “Red long brick, 2 tall”.',
              '**Extras follow the piece:** “in front of the red gate”, “red gate to the left”, “portal entrance below”, “counts for Daffodil, yellow” when a goal needs it. An empty cell says “Empty”.',
              '**Gates are their own elements,** for example “Red gate, 2 cells wide, left side, rows 3 to 4”, and their value says whether they are open, iced, need more bricks, or are closed for good.',
              '**Face-down bricks never tell you their colour:** “Face-down brick, turns over when a brick next to it leaves the board”. That is fair play, not a missing label.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Pieces you can move are buttons. Blockers and fixtures, like stone or crates, read as text, so you can tell at a glance what can move.',
          },
        ],
      },
      {
        id: 'moving',
        title: 'Making a move',
        blocks: [
          { t: 'p', text: 'There are two ways to move, and you can mix them.' },
          { t: 'h3', text: 'With actions (fastest)' },
          {
            t: 'steps',
            items: [
              'Put VoiceOver on a piece.',
              'Swipe up or down to hear its actions, such as “Slide left, out through the red gate”, “Slide up to the end, 3 cells” or “Swap up with blue brick”. Working swaps come first; a swap that would make nothing says “no match”.',
              'Double-tap to play the action you heard.',
            ],
          },
          { t: 'h3', text: 'By choosing a piece, then a direction' },
          {
            t: 'steps',
            items: [
              'Double-tap a piece. VoiceOver says “Chosen. Choose a direction to slide it, or a neighbour to swap”.',
              'Direction controls appear over its neighbours. Move to one and double-tap it.',
              'Changed your mind? Double-tap the same piece again (“Put down”), or use the two-finger scrub.',
            ],
          },
          {
            t: 'table',
            caption: 'The actions on a piece, in the order you hear them',
            head: ['Action', 'When you hear it'],
            rows: [
              ['Activate special', 'On a special brick that can be set off where it stands.'],
              ['Slide…', 'Up to three per direction, up, down, left, right: how far it goes, and whether it leaves through a gate or a portal.'],
              ['Swap…', 'With each neighbour. Swaps that match come first; “no match” marks the rest.'],
              ['Read the board', 'Level, stage, goals, moves left and a hint.'],
              ['Hint', 'Shows and says the best move.'],
              ['Hear row', 'Only when **Row sound** is on: a quiet tone per piece across the row.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Worried about playing a move by mistake? Turn on **Hold to confirm swaps**. The first choice asks “…? Choose it again to confirm”, and the move only plays if you choose it again within five seconds.',
          },
        ],
      },
      {
        id: 'rotors',
        title: 'Rotors: jump straight to what matters',
        blocks: [
          {
            t: 'p',
            text: 'Twist two fingers on the screen to pick a rotor, then swipe up or down to jump between matching pieces.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Pieces that can match', text: 'Pieces with a move that makes a match right now.' },
              { term: 'Specials', text: 'Bombs, line blasters and the other special bricks.' },
              { term: 'Goals', text: 'Pieces your goals are asking for.' },
              { term: 'Blockers', text: 'Crates, stone, ice, locks, moss and anything else in the way.' },
              { term: 'Gates', text: 'Every gate on the board, when the board has them. The first gate board you play tells you about this rotor once.' },
            ],
          },
          {
            t: 'p',
            text: 'Each element also has **More Content** (in the rotor, choose More Content, then swipe up or down): the special, the gate, the blocker, jelly layers underneath, and whether a goal needs this piece.',
          },
        ],
      },
      {
        id: 'gestures',
        title: 'Gestures, screen by screen',
        blocks: [
          {
            t: 'table',
            head: ['Gesture', 'On a board', 'On the Journey map', 'Elsewhere'],
            rows: [
              ['{{Two-finger double tap}} (Magic Tap)', 'A free hint. The best move shimmers and is spoken; your Hint booster is not used.', 'Speaks the guide: your village, levels cleared, your next level and stars to the next reward.', 'Home: plays your next level. Shop, Leaders and Pass: switches the music on or off.'],
              ['{{Two-finger scrub}} (Escape)', 'Never leaves the board, so it can never cost a life. It closes a card, puts down a chosen piece, puts away a teaching card, or opens Pause, in that order.', 'Closes an open card.', 'Presses the screen’s close button or goes back.'],
              ['{{Three-finger swipe}}', '—', 'Moves one village at a time and says its name.', 'Scrolls.'],
              ['{{Swipe up or down}}', 'Steps through a piece’s actions.', 'Steps through **Where am I** and **Go to my next level**.', 'Adjusts a control.'],
            ],
          },
        ],
      },
      {
        id: 'announcements',
        title: 'What you hear after a move',
        blocks: [
          {
            t: 'p',
            text: 'As soon as a move is decided, VoiceOver says one sentence about it, before the animation finishes. Anything urgent comes first.',
          },
          {
            t: 'list',
            items: [
              'Where a brick went: “Slid 3 cells, to row 2, column 4”, “Through the portal, out at…”, “1 red out through its gate”.',
              'What changed: “Turned over: red and blue”, “The counter lid opened. Its bricks can move”, “New gates open”.',
              'What cleared: pieces, cascades, combos and any specials made, and which goals moved.',
              'Moves left, with a warning at five, three and one: “Only 5 moves left”.',
              'The end: “Every goal done. Level complete” or “Out of moves”.',
              'If no move is possible, the board reshuffles and says “The board shuffled. Your move.”',
            ],
          },
          {
            t: 'table',
            caption: 'Settings › Accessibility › Announcement detail',
            head: ['Choice', 'What you hear'],
            rows: [
              ['Brief', 'What cleared, any goal that finished, and the moves left.'],
              ['Standard', 'Also the specials you made and the goals that moved.'],
              ['Full', 'Also every goal’s count after every move.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'A swap that makes nothing springs back and says “No match, swapped back. No move used”. You have lost nothing.',
          },
        ],
      },
      {
        id: 'hints',
        title: 'Hints',
        blocks: [
          {
            t: 'list',
            items: [
              '**Asking:** the two-finger double tap, the **Hint** action, or {{H}} on a keyboard. The hint is spoken, for example “Hint: slide red brick, row 1, column 3, left, out through its gate”, and VoiceOver moves to that piece.',
              '**Free:** a hint you ask for with the two-finger double tap or the action never uses a Hint booster from the tray.',
              '**Idle hints:** if you pause for a while, a quiet hint may be spoken without moving your focus.',
            ],
          },
        ],
      },
      {
        id: 'journey',
        title: 'Finding your way on the Journey',
        blocks: [
          {
            t: 'list',
            items: [
              'Every element on the map has two actions: **Where am I** and **Go to my next level**, which scrolls the map and puts VoiceOver on your next level.',
              'The two-finger double tap speaks the guide, for example “Garden City, 7 of 12 levels cleared. Next: level 8. 3 stars to the village reward.”',
              'A locked level says how far away it is: “4 more to unlock”.',
              'Swipe with three fingers to move a village at a time.',
            ],
          },
          { t: 'p', text: 'More about the map in [The Journey and its villages](help:journey-and-villages).' },
        ],
      },
      {
        id: 'tips',
        title: 'Tips from the team',
        blocks: [
          {
            t: 'list',
            items: [
              'With VoiceOver on and **Animation speed** at 100%, moves play one and a half times faster, so you are not waiting. Choose any other speed and the game uses yours exactly.',
              'Turn on **Row sound** to hear a whole row as tones: each colour symbol has its own pitch, blockers make a low knock and empty cells are silent. It needs sound effects on and the Ring/Silent switch on ring.',
              'Lost? Double-tap the **Board** summary at the top, or use **Read the board**.',
              'Menus: every button reads its printed words, and cards trap VoiceOver inside them until you close them, so you never end up behind a card.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            title: 'Something did not read right?',
            text: 'Tell us the level, the piece and the exact words VoiceOver said in the [Accessibility category](/community/c/accessibility), or use **Settings › Report a bug** in the game.',
          },
        ],
      },
    ],
    related: ['accessibility', 'voice-control-switch-control-keyboard', 'playing-a-board', 'reporting-bugs'],
  },

  {
    slug: 'voice-control-switch-control-keyboard',
    category: 'accessibility',
    cover: 'board-shapes',
    title: 'Voice Control, Switch Control and keyboards',
    summary:
      'Play every board with your voice, with one or more switches, or with the arrow keys, and use Hold to confirm swaps and the Left-handed tray to make it comfortable.',
    keywords: 'voice commands switch access full keyboard access arrow keys motor dexterity one hand',
    sections: [
      {
        id: 'voice-control',
        title: 'Voice Control',
        blocks: [
          {
            t: 'p',
            text: 'Turn on Voice Control in the iPhone **Settings › Accessibility › Voice Control**. Every piece on the board answers to three names, where the number is its place counting row by row from the top left:',
          },
          {
            t: 'list',
            items: [
              'its colour and number: “Tap **Red 14**”',
              '“Tap **Piece 14**”',
              'its full name and number.',
            ],
          },
          {
            t: 'steps',
            items: [
              'Say “Tap Red 14” to choose the piece.',
              'Say the direction: “Tap **Slide left**”, or just “Tap **Left**”. On a swap you can say “Tap **Swap up**” or “Tap **Up**”.',
              'Say “Show numbers” at any time to see a number on everything you can tap.',
            ],
          },
          {
            t: 'list',
            items: [
              'Face-down bricks answer to “Face-down 14”, so their colour stays hidden.',
              'Menu buttons answer to the words printed on them first.',
              'The Animation speed choices answer to either the percentage or the word: “Half speed”, “Slower”, “Normal speed”, “Faster”, “Double speed”.',
            ],
          },
        ],
      },
      {
        id: 'switch-control',
        title: 'Switch Control',
        blocks: [
          {
            t: 'steps',
            items: [
              'Scan to a piece and select it to choose it.',
              'Scan to a neighbour or one of the direction controls that appear, and select it to slide or swap.',
              'Select the chosen piece again to put it down.',
            ],
          },
          {
            t: 'p',
            text: 'Switch Control is treated like VoiceOver on the board: every piece is its own element, in reading order, and the same direction controls appear. Turn on **Hold to confirm swaps** if you scan quickly.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Switch Control on the Slide & Match boards has been built and checked in code but not yet played end to end on a device by the team. If you play with switches, we would love to hear how it goes in the [Accessibility category](/community/c/accessibility).',
          },
        ],
      },
      {
        id: 'keyboard',
        title: 'Keyboards on iPad and Mac',
        blocks: [
          { t: 'p', text: 'With a hardware keyboard, the board has its own keys. Hold {{⌘}} on iPad to see them listed.' },
          {
            t: 'table',
            head: ['Key', 'What it does'],
            rows: [
              ['{{←}} {{→}} {{↑}} {{↓}}', 'Moves a white cursor over the board, stepping over gaps. With a piece chosen, slides or swaps it that way.'],
              ['{{Space}} or {{Return}}', 'Chooses the piece under the cursor, or puts it down.'],
              ['{{H}}', 'Shows and says a hint.'],
              ['{{Esc}}', 'Puts the chosen piece down. Outside the board, closes Settings and cards.'],
            ],
          },
          {
            t: 'p',
            text: 'In menus, the game’s own buttons take keyboard focus, and {{Return}} or {{Space}} presses them. Full Keyboard Access moves between them with {{Tab}}.',
          },
        ],
      },
      {
        id: 'hold-to-confirm',
        title: 'Hold to confirm swaps',
        blocks: [
          {
            t: 'p',
            text: 'In **Settings › Accessibility**, **Hold to confirm swaps** asks you to choose every move twice. The first time you hear (or see) the move with “Choose it again to confirm”; choose the same move again within five seconds and it plays. Anything else cancels it. It applies to VoiceOver, Voice Control, Switch Control and the keyboard.',
          },
        ],
      },
      {
        id: 'left-handed',
        title: 'Left-handed tray',
        blocks: [
          {
            t: 'p',
            text: 'The tray at the foot of a board holds Pause on the left and the boosters and Undo on the right. **Left-handed tray** mirrors it, so the boosters sit under your left thumb and Pause moves to the right.',
          },
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'A Slide & Match board on a beach, level 25. The header shows 5 lives, 15 moves left, a star track with one star lit, goals of 1 yellow and 3 blue bricks, and the host friend in a sailor cap. The board holds pink, yellow, orange and blue bricks, each stamped with its colour’s shape, with yellow, orange and blue gates on its edges and a gold keyhole lid over a row of bricks. The tray below has Pause, then Hint, Rocket and UFO marked Free, and Undo with 6.',
            caption: 'The tray, right-handed (the default). Left-handed mirrors it.',
          },
        ],
      },
    ],
    related: ['voiceover', 'accessibility', 'playing-a-board', 'settings'],
  },

  {
    slug: 'vision-hearing-and-motion',
    category: 'accessibility',
    cover: 'board-contrast',
    title: 'Vision, hearing and motion',
    summary:
      'Colour-blind symbols and what each shape means, the high-contrast board, larger text, Reduce Motion, flashing lights, sound, haptics and Row sound.',
    keywords: 'colour blind color blindness deuteranopia protanopia tritanopia glyphs shapes contrast large text zoom motion sickness vestibular epilepsy photosensitive flashing deaf hearing',
    sections: [
      {
        id: 'colour-blind',
        title: 'Colour-blind symbols',
        blocks: [
          {
            t: 'p',
            text: '**Colour-blind** is on from the very first board. Every brick is stamped with a shape for its colour, coloured specials wear a small shape badge, and the goals in the header carry the same shape, so you can match bricks to goals without telling colours apart.',
          },
          {
            t: 'table',
            caption: 'Each colour has its own shape',
            head: ['Colour', 'Shape'],
            rows: [
              ['Red', 'Circle'],
              ['Orange', 'Triangle'],
              ['Yellow', 'Square'],
              ['Green', 'Diamond'],
              ['Blue', 'Plus'],
              ['Purple', 'Star'],
              ['Pink', 'Bar'],
              ['Teal', 'Hexagon'],
            ],
          },
          {
            t: 'list',
            items: [
              'Switch it in **Settings › Accessibility › Colour-blind**, in the **Pause** menu during a board, or from **Control Center** if you add the OutBrick control.',
              'The symbols also turn on whenever the iPhone’s **Differentiate Without Color** or the game’s **High-contrast board** is on.',
              'Your choice is saved to iCloud, so it follows you to your other devices.',
            ],
          },
          {
            t: 'shots',
            items: [
              {
                id: 'board-slide',
                alt: 'A Slide & Match board on a beach, level 25. The header shows 5 lives, 15 moves left, a star track with one star lit, goals of 1 yellow and 3 blue bricks, and the host friend in a sailor cap. The board holds pink, yellow, orange and blue bricks, each stamped with its colour’s shape, with yellow, orange and blue gates on its edges and a gold keyhole lid over a row of bricks. The tray below has Pause, then Hint, Rocket and UFO marked Free, and Undo with 6.',
                caption: 'Colour-blind on: every colour has a shape.',
              },
              {
                id: 'board-contrast',
                alt: 'The same kind of board with the high-contrast look: a near-black floor, white outlines around every brick and large white symbols.',
                caption: 'High-contrast board.',
              },
            ],
          },
        ],
      },
      {
        id: 'contrast',
        title: 'High-contrast board',
        blocks: [
          {
            t: 'p',
            text: '**Settings › Accessibility › High-contrast board** draws the board on a near-black floor with a faint grid, puts a white outline on every piece and a large white symbol on plain bricks, and gives every gate a thick outline. Gate colours are checked against the floor, and a gate whose colour is too close to it gets a two-tone outline.',
          },
        ],
      },
      {
        id: 'text',
        title: 'Larger text and magnification',
        blocks: [
          {
            t: 'list',
            items: [
              '**Larger Text:** in the iPhone **Settings › Accessibility › Display & Text Size › Larger Text**. Body text can grow to more than double its size, headings to almost twice, and layouts stack so nothing is cut off. Win and out-of-moves screens grow less, so they still fit.',
              '**Large Content Viewer:** at the largest sizes, touch and hold a control in the board header or tray to see a magnified label, then lift your finger.',
              '**Bold Text** and **Zoom** work everywhere in the game.',
            ],
          },
        ],
      },
      {
        id: 'motion',
        title: 'Motion, animation speed and flashing',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Animation speed', text: 'In **Settings › Accessibility**: 50%, 75%, 100%, 150% or 200%. At 50% every swap, fall and clear takes twice as long, which makes chains easier to follow.' },
              { term: 'Reduce Motion', text: 'In the iPhone **Settings › Accessibility › Motion**. Idle movement on the board stops, glows hold still, hints shimmer in place instead of moving, and screens cross-fade instead of sliding.' },
              { term: 'Dim Flashing Lights', text: 'Also under **Motion**. Full-screen flashes from big combos drop to a third of their strength and never come closer together than about a third of a second; a fuse burns steadily instead of flickering.' },
            ],
          },
        ],
      },
      {
        id: 'sound',
        title: 'Sound, music, haptics and Row sound',
        blocks: [
          {
            t: 'list',
            items: [
              '**Nothing depends on hearing.** Every sound in OutBrick has something on screen to match it. The friends speak in text bubbles, not voices, and VoiceOver announcements are spoken by your own VoiceOver.',
              '**Sounds, Music and Haptics** each have their own switch in **Settings › Game**, and in the Pause menu during a board. Haptics only appears on devices that can vibrate.',
              '**Row sound** (Settings › Accessibility) adds a **Hear row** action on the board: a short, quiet note for each piece from left to right, one pitch per colour symbol, with a different tone for round, pointed and straight shapes. Blockers make a low knock and empty cells are a rest.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Row sound needs sound effects on and the Ring/Silent switch on ring. If either is off, the action tells you so.',
          },
        ],
      },
    ],
    related: ['accessibility', 'voiceover', 'settings', 'bricks-specials-and-blockers'],
  },
];
