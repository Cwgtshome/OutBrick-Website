/**
 * The nine brick friends, as the editorial side of the site tells them.
 *
 * The facts come from `lib/villages.ts` (`cast`) and the home page: nine
 * friends, three on the Home screen at a time, each with a victory move of
 * their own. They animate and speak in text bubbles — character vocalisations
 * were removed on 21 September 2026 — so nothing here gives anyone a voice.
 *
 * Three friends (Bloo, Peach, Sprout) have a longer illustrated story at
 * /mascots/<id>; the sitemap lists exactly those three. The other six have a
 * short profile on /mascots itself. Their `line` is the documented idle and
 * celebration beat, verbatim; `flavour` is light, clearly-flavour copy and
 * invents no lore beyond it.
 *
 * All art is the current brick-shaped cast (`/assets/friends/*.png`) standing
 * on real Journey captures (`/assets/villages/*.jpg`). The older round
 * renders under /assets/*.png show a retired character design and are no
 * longer used on these pages.
 */

import { cast } from './villages';

export type FriendId = 'bloo' | 'peach' | 'sprout' | 'bricko' | 'zippy' | 'vio' | 'moss' | 'flurry' | 'poppy';

export type FriendProfile = {
  id: FriendId;
  name: string;
  /** A short handle, used as an eyebrow. */
  role: string;
  /** The documented idle + celebration beat, from `cast`. */
  line: string;
  /** Two or three sentences of light flavour. */
  flavour: string;
  /** Slab colour and its darker foot, read off the render. */
  colour: string;
  foot: string;
  /** Text colour that reads on `colour`. */
  ink: string;
  image: string;
  imageAlt: string;
  /** True for the three friends with a full story page. */
  hasStory: boolean;
};

const lineOf = (id: FriendId) => cast.find((friend) => friend.slug === id)?.line ?? '';

export const friends: FriendProfile[] = [
  {
    id: 'bloo',
    name: 'Bloo',
    role: 'The one with the watch',
    line: lineOf('bloo'),
    flavour: 'First to wave, first to try the bold move, and quite sure he meant to do that.',
    colour: '#3b8bf0',
    foot: '#1d4fa6',
    ink: '#0a1a3d',
    image: '/assets/friends/bloo.png',
    imageAlt: 'Bloo, a blue brick-shaped OutBrick friend wearing a wristwatch on a lanyard.',
    hasStory: true,
  },
  {
    id: 'peach',
    name: 'Peach',
    role: 'The careful planner',
    line: lineOf('peach'),
    flavour: 'Counts the moves twice and keeps a backup plan. When the pile opens, she is the happiest brick on the road.',
    colour: '#f4a283',
    foot: '#b8603f',
    ink: '#1a1350',
    image: '/assets/friends/peach.png',
    imageAlt: 'Peach, a peach-coloured brick-shaped OutBrick friend with a little peach on top.',
    hasStory: true,
  },
  {
    id: 'sprout',
    name: 'Sprout',
    role: 'The one with questions',
    line: lineOf('sprout'),
    flavour: 'Notices the gap everyone walked past and wants to know why the gate is there at all.',
    colour: '#6cc24a',
    foot: '#3f7f25',
    ink: '#10270a',
    image: '/assets/friends/sprout.png',
    imageAlt: 'Sprout, a small green brick-shaped OutBrick friend with a seedling on top.',
    hasStory: true,
  },
  {
    id: 'bricko',
    name: 'Bricko',
    role: 'The one doing reps',
    line: lineOf('bricko'),
    flavour: 'Treats every board like a set at the gym. A clear gets a thumbs-up and a flex, in that order.',
    colour: '#d42f29',
    foot: '#8e1c18',
    ink: '#ffffff',
    image: '/assets/friends/bricko.png',
    imageAlt: 'Bricko, a red brick-shaped OutBrick friend with big red boots.',
    hasStory: false,
  },
  {
    id: 'flurry',
    name: 'Flurry',
    role: 'The one in the scarf',
    line: lineOf('flurry'),
    flavour: 'Never in a hurry, which suits a game with no clock. Watch the scarf: it always arrives a beat after Flurry does.',
    colour: '#9fd6f5',
    foot: '#4d93c2',
    ink: '#0f2a44',
    image: '/assets/friends/flurry.png',
    imageAlt: 'Flurry, a pale blue brick-shaped OutBrick friend in a striped bobble hat and scarf.',
    hasStory: false,
  },
  {
    id: 'moss',
    name: 'Moss',
    role: 'The farmhand',
    line: lineOf('moss'),
    flavour: 'Tool belt on, boots muddy, a saying for every weather. The slow clap is rare, so it counts.',
    colour: '#357a32',
    foot: '#1f5420',
    ink: '#ffffff',
    image: '/assets/friends/moss.png',
    imageAlt: 'Moss, a dark green brick-shaped OutBrick friend wearing a tool belt and work boots.',
    hasStory: false,
  },
  {
    id: 'poppy',
    name: 'Poppy',
    role: 'The storyteller',
    line: lineOf('poppy'),
    flavour: 'Every board is the middle of a fairy tale to Poppy. The ending is when the wand goes off.',
    colour: '#f59ac6',
    foot: '#b0367e',
    ink: '#3a0f28',
    image: '/assets/friends/poppy.png',
    imageAlt: 'Poppy, a pink brick-shaped OutBrick friend holding a star-tipped wand.',
    hasStory: false,
  },
  {
    id: 'vio',
    name: 'Vio',
    role: 'The critic with headphones',
    line: lineOf('vio'),
    flavour: 'Hears a rhythm in a good run of moves and nods along. A tidy clear is a five-star track.',
    colour: '#7b5cf0',
    foot: '#4a35b0',
    ink: '#ffffff',
    image: '/assets/friends/vio.png',
    imageAlt: 'Vio, a purple brick-shaped OutBrick friend wearing headphones.',
    hasStory: false,
  },
  {
    id: 'zippy',
    name: 'Zippy',
    role: 'The one who drifts off',
    line: lineOf('zippy'),
    flavour: 'Starts a thought, wanders off, comes back for the win. Poke Zippy and see what happens.',
    colour: '#ffd22e',
    foot: '#b8870a',
    ink: '#1a1350',
    image: '/assets/friends/zippy.png',
    imageAlt: 'Zippy, a yellow brick-shaped OutBrick friend giving a wink.',
    hasStory: false,
  },
];

export function getFriend(id: string): FriendProfile | undefined {
  return friends.find((friend) => friend.id === id);
}

export type MascotChapter = {
  number: string;
  title: string;
  body: string;
  note: string;
  /** A real Journey capture the chapter is set in. */
  village: { slug: string; name: string };
};

export type MascotStory = {
  id: 'bloo' | 'peach' | 'sprout';
  name: string;
  role: string;
  headline: string;
  dek: string;
  opening: string;
  /** What appears in their text bubble. */
  bubble: string;
  temperament: string;
  superpower: string;
  tells: string;
  favoriteMove: string;
  chapters: MascotChapter[];
};

export const mascotStories: MascotStory[] = [
  {
    id: 'bloo',
    name: 'Bloo',
    role: 'The one with the watch',
    headline: 'The brave bit comes after the wobble.',
    dek: 'Bloo is first to wave, first to volunteer, and now and then first to slide the wrong brick with tremendous confidence.',
    opening: 'Every morning, when the village gates click awake, Bloo is already on the brightest square of the road, checking his wristwatch. He calls it a starting line. Peach calls it a perfectly avoidable place to trip. Sprout calls it exciting. Bloo calls it Tuesday.',
    bubble: 'One nudge. Then we see what happens.',
    temperament: 'Cheerful, brave, always ready for a high five.',
    superpower: 'Turning “maybe” into “let’s look.”',
    tells: 'When he is nervous he checks the watch. When he is very nervous he checks it twice.',
    favoriteMove: 'A confident slide, followed by an even more confident spin.',
    chapters: [
      {
        number: '01',
        title: 'The first hello',
        body: 'Bloo believes a good day starts with a wave and a board that looks just a little bit impossible. He likes the first move best, because it turns a frame full of bricks into one small question.',
        note: 'His opening ritual: wave first, look second, celebrate early.',
        village: { slug: 'garden-city', name: 'Garden City' },
      },
      {
        number: '02',
        title: 'A very brave wobble',
        body: 'One afternoon a brick refuses to budge. Bloo tries a heroic move, a dramatic move, and a move he describes as advanced. The brick says no to all three. Nobody laughs. The free undo puts the board back, and his friends simply make room for another try.',
        note: 'Getting stuck is not the ending. It is just the middle.',
        village: { slug: 'pirate-harbor', name: 'Pirate Harbor' },
      },
      {
        number: '03',
        title: 'Make room for the cheer',
        body: 'Bloo finds out that courage travels. When he cheers for Peach’s careful plan and Sprout’s odd little experiment, the whole village feels bigger. The next clear belongs to everyone who made room for it, and he spins for all of them.',
        note: 'His best move is the one that leaves a little confidence behind.',
        village: { slug: 'celebration-square', name: 'Celebration Square' },
      },
    ],
  },
  {
    id: 'peach',
    name: 'Peach',
    role: 'The careful planner',
    headline: 'She brought a plan. And a backup plan.',
    dek: 'Peach notices the corner nobody else saw, counts the moves twice, and keeps a spare deep breath tucked behind her smile.',
    opening: 'Peach arrives at the board with a list, then a second list in case the first one gets overwhelmed. She knows where every brick is, which is comforting right up until one of them moves. She is learning that a plan can be a soft place to start rather than a cage to stay inside.',
    bubble: 'Careful is not the same as afraid.',
    temperament: 'Thoughtful, loyal, and only slightly flustered when the board gets interesting.',
    superpower: 'Seeing the quiet route through a crowded board.',
    tells: 'Her bubble says “this is fine” exactly when things are becoming exciting.',
    favoriteMove: 'A tidy setup, a measured slide, and one relieved little cheer.',
    chapters: [
      {
        number: '01',
        title: 'The inventory',
        body: 'Before the first slide, Peach studies the board as if it has a secret. She notes the colours, the edges, the gaps, and the one brick that looks suspiciously pleased with itself.',
        note: 'Her rule: if you can name what you see, you can find a way through.',
        village: { slug: 'autumn-orchard', name: 'Autumn Orchard' },
      },
      {
        number: '02',
        title: 'Deep breath, small move',
        body: 'A board changes the moment a brick moves. Peach used to think that meant the plan had failed. Now she treats it as new information, takes one breath, and draws a smaller circle around the next useful choice.',
        note: 'Her backup plan is becoming a kinder plan: look, adjust, carry on.',
        village: { slug: 'lavender-hills', name: 'Lavender Hills' },
      },
      {
        number: '03',
        title: 'The tidy way home',
        body: 'When the final brick slips through its gate, Peach lets out the cheer she has been saving the whole board. Then she checks the frame one last time, just to be sure, and adds the clear to her list. The good kind of list.',
        note: 'She makes a clear feel like a warm lamp left on for everyone.',
        village: { slug: 'cherry-blossom-town', name: 'Cherry Blossom Town' },
      },
    ],
  },
  {
    id: 'sprout',
    name: 'Sprout',
    role: 'The one with questions',
    headline: 'Every brick is a question.',
    dek: 'Sprout spots the odd gap, asks why the gate is there, and finds the long way round before anyone has finished saying “please be careful.”',
    opening: 'Sprout does not walk past a puzzle. Sprout investigates it. Why does this brick have studs? Why does that gate match? What happens if we try the thing Peach just asked us not to try? The answers are not always useful, but they are nearly always interesting.',
    bubble: 'What if the answer is hiding behind that brick?',
    temperament: 'Wide-eyed, warm, and always one discovery away from two hops and a spin.',
    superpower: 'Keeping wonder in the room after the rule is understood.',
    tells: 'Counts everything, including the things everyone else thought were decoration.',
    favoriteMove: 'The unexpected route that works for a reason Sprout is still explaining.',
    chapters: [
      {
        number: '01',
        title: 'The question',
        body: 'Sprout begins with the part everyone else is tempted to skip: looking closely. A colour, a shape, a gap, a single stud. Any of them might be a clue, and Sprout is delighted to meet all of them.',
        note: 'Sprout’s rule: a good question gives the next move somewhere to go.',
        village: { slug: 'mushroom-forest', name: 'Mushroom Forest' },
      },
      {
        number: '02',
        title: 'The long way round',
        body: 'The obvious route is blocked, so Sprout tries the one nobody labelled. It takes longer. It also reveals a corner, a colour match, and a way to help the next brick out. Sometimes a board rewards patience that looks a lot like curiosity.',
        note: 'A wrong turn can still point at something worth noticing.',
        village: { slug: 'bamboo-springs', name: 'Bamboo Springs' },
      },
      {
        number: '03',
        title: 'Grow together',
        body: 'Sprout learns that a discovery is more fun shared. A new trick becomes a group celebration, a tricky board becomes a story, and the smallest question can turn into somebody else’s brave first move.',
        note: 'Sprout keeps the village playful, even when the solution is serious business.',
        village: { slug: 'sunflower-railway', name: 'Sunflower Railway' },
      },
    ],
  },
];

export function getMascotStory(id: string): MascotStory | undefined {
  return mascotStories.find((story) => story.id === id);
}

export function getAdjacentMascot(id: MascotStory['id'], direction: -1 | 1): MascotStory {
  const index = mascotStories.findIndex((story) => story.id === id);
  return mascotStories[(index + direction + mascotStories.length) % mascotStories.length]!;
}
