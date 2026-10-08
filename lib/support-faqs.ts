import { currentGameCopy } from './i18n/current-game.ts';

/**
 * Short answers to the questions support hears most. Every answer restates a fact the sections
 * above already give in full; nothing here is new. The same list is the page's FAQPage JSON-LD,
 * so the markup can never say something the page does not. The community FAQ
 * (/community/faq) shows the same answers, translated by the support page's dictionaries.
 */
export const supportFaqs: { question: string; answer: string }[] = [
  {
    question: 'Is the first undo on a board really free?',
    answer: 'Yes. The first undo on every board is free, never comes out of your tank and cannot run out. After that, undos come from a tank of five that refills one every twenty-five minutes, or five for 250 coins, or two for a rewarded video.',
  },
  {
    question: 'How many lives do I get, and when is one spent?',
    answer: currentGameCopy.en.lives,
  },
  {
    question: 'Does OutBrick show ads?',
    answer: 'Only rewarded video, and only when you press a button asking for something. There are no banners, no interstitials and no ad when the app opens. Remove Ads is a one-time $4.99 purchase.',
  },
  {
    question: 'Is there a timer?',
    answer: currentGameCopy.en.moves,
  },
  {
    question: 'How do I restore a purchase?',
    answer: 'Open Shop, then choose Restore purchases. Apple processes the transaction through your Apple ID.',
  },
  {
    question: 'What do the three stars mean?',
    answer: 'The current iOS game awards stars from the board’s score thresholds. Matches, specials, cascades and the leftover-move finish contribute to the score. The browser demo keeps its earlier move-target star rule.',
  },
  {
    question: 'How much do extra moves cost?',
    answer: currentGameCopy.en.extraMoves,
  },
  {
    question: 'How many rewarded videos can I watch a day?',
    answer: 'Daily caps: lives 8, undos 8, extra moves 6, a free Hint at the out-of-moves wall 4, doubled clear coins 4, Brick Wheel 1, the gift balloon 2 and Brick Cinema 6. No banners or interstitials. A video starts only when you choose it; declining costs nothing.',
  },
  {
    question: 'How do I turn colour-blind glyphs on or off?',
    answer: 'Colour-blind mode is on by default, so every brick and gate carries a readable glyph. Switch it off, or back on, in Settings.',
  },
  {
    question: 'How do I change my advertising choices?',
    answer: 'In the EEA, the UK and Switzerland, Settings, then Advertising choices, reopens the consent form at any time. iOS tracking permission is in Settings, Privacy and Security, Tracking; saying no changes nothing about the game.',
  },
  {
    question: 'How do I contact OutBrick support?',
    answer: 'Use the contact form, and tell us the level number, device model, iOS version and what happened. We never need your Game Center login or any payment details.',
  },
];
