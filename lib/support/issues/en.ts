import type { KnownIssue } from '../model.ts';

/**
 * Known issues, newest first. Keep every entry true to the game's source and the App Store:
 * move an entry to `fixed` only when the version with the fix is on the App Store (check with
 * Apple's lookup), and update `checked` whenever an entry is reviewed. Every language file
 * has the same ids in the same order.
 */
export const en: KnownIssue[] = [
  {
    id: 'voiceover-focus',
    status: 'fix-coming',
    checked: '2026-10-09',
    title: 'VoiceOver loses its place on the board',
    affects: 'OutBrick 5.1 and 5.1.1 with VoiceOver on, from level 6.',
    what: 'While VoiceOver was reading the board, the game did not count that as playing. After a short pause it opened a card offering boosters over the board, and closing the card left VoiceOver focus nowhere, so it jumped to the top. On iOS 17 and earlier, the board summary could also catch every touch.',
    workaround: [
      'If a card offering boosters or a hint appears while you are reading the board, a **two-finger scrub** closes it and puts you back on the board.',
      'Use the **rotors** (Pieces that can match, Specials, Goals, Blockers, Gates) to jump straight to what you need.',
      'Move pieces with their **actions** (swipe up or down), which keeps your focus on the board.',
    ],
    fix: 'Fixed in OutBrick 5.1.2, which we have sent to Apple for review. A later update adds more VoiceOver improvements we found along the way. Keep automatic updates on to get them as soon as they are out.',
    more: 'help:voiceover',
  },
  {
    id: 'missions-slide-match',
    status: 'fix-coming',
    checked: '2026-10-09',
    title: 'Missions do not count progress on Slide & Match boards',
    affects: 'OutBrick 5.1 and 5.1.1.',
    what: 'Some missions do not move forward when you play Slide & Match boards, and a few ask for something those boards cannot give. Your levels, stars and coins are not affected; only the mission counters are.',
    workaround: ['Nothing is needed: your progress on the board is safe. Missions you cannot finish simply wait for the update.'],
    fix: 'Fixed. The fix comes in an update after 5.1.2: missions count on Slide & Match boards, and missions those boards cannot complete are no longer offered.',
    more: 'help:rewards-and-events',
  },
  {
    id: 'pt-br-links',
    status: 'fix-coming',
    checked: '2026-10-09',
    title: 'Community and Report a bug open English pages for Brazilian Portuguese players',
    affects: 'OutBrick 5.1 and 5.1.1 in Brazilian Portuguese.',
    what: 'Settings › Community and Report a bug open the English version of the OutBrick Community instead of the Portuguese one.',
    workaround: ['Choose **Português (Brasil)** at the bottom of any page of the site, or open [the community in Portuguese](/pt-BR/community) directly.'],
    fix: 'Fixed. The fix comes in an update after 5.1.2.',
  },
  {
    id: 'ad-choices-label',
    status: 'fix-coming',
    checked: '2026-10-09',
    title: '“Advertising choices” is shown in English in Settings',
    affects: 'OutBrick 5.1 and 5.1.1 in every language other than English, in the EEA, the UK and Switzerland.',
    what: 'The Advertising choices button in Settings is labelled in English. It works normally; only its label is untranslated.',
    workaround: [],
    fix: 'Fixed. The fix comes in an update after 5.1.2.',
  },
  {
    id: 'tip-card-frozen',
    status: 'fixed',
    checked: '2026-10-09',
    title: 'A board could seem frozen after extra moves arrived',
    affects: 'OutBrick 5.1.',
    what: 'When extra moves arrived while a tip card was on screen, the card could vanish while still blocking the board. VoiceOver found only the card, and the next swipe was spent putting it away.',
    workaround: [],
    fix: 'Fixed in OutBrick 5.1.1, on the App Store since 8 October 2026. Update OutBrick from the App Store if you have not already.',
  },
];
