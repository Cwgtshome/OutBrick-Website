export type MascotChapter = {
  number: string;
  title: string;
  body: string;
  note: string;
  image: string;
  imageAlt: string;
};

export type MascotStory = {
  id: 'bloo' | 'peach' | 'sprout';
  name: string;
  role: string;
  accent: string;
  accentSoft: string;
  heroImage: string;
  idleImage: string;
  imageAlt: string;
  headline: string;
  dek: string;
  opening: string;
  quote: string;
  voice: string;
  widgetLine: string;
  superpower: string;
  tells: string;
  favoriteMove: string;
  chapters: MascotChapter[];
};

export const mascotStories: MascotStory[] = [
  {
    id: 'bloo',
    name: 'Bloo',
    role: 'the blue hero',
    accent: '#5CB7F4',
    accentSoft: '#A9D8FF',
    heroImage: '/assets/bloo-cheer.png',
    idleImage: '/assets/bloo-idle.png',
    imageAlt: 'Bloo, the blue OutBrick mascot, cheering with both hands raised',
    headline: 'The brave bit comes after the wobble.',
    dek: 'Bloo is the first to wave, the first to volunteer, and—occasionally—the first to slide the wrong brick with tremendous confidence.',
    opening: 'Every morning, when the village gates click awake, Bloo is already standing on the brightest square. He calls it a starting line. Peach calls it “a perfectly avoidable place to trip.” Sprout calls it exciting. Bloo calls it Tuesday.',
    quote: '“One friendly nudge. Then we see what happens.”',
    voice: 'Cheerful, brave, and always ready with a high five.',
    widgetLine: 'One friendly nudge. Then we see what happens.',
    superpower: 'Turning “maybe” into “let’s look.”',
    tells: 'He gets louder when he is nervous, which is how everyone knows the big grin is doing important work.',
    favoriteMove: 'A confident slide followed by an even more confident “I meant to do that.”',
    chapters: [
      {
        number: '01',
        title: 'The first hello',
        body: 'Bloo believes a good day starts with a clear wave and a board that looks just a little bit impossible. He likes the first move because it turns a room full of bricks into one small question.',
        note: 'His opening ritual: wave first, inspect second, celebrate early.',
        image: '/assets/bloo-cheer.png',
        imageAlt: 'Bloo cheering in his blue and violet toy-brick colours',
      },
      {
        number: '02',
        title: 'A very brave wobble',
        body: 'One afternoon, a brick refuses to budge. Bloo tries a heroic move, a dramatic move, and a move he describes as “advanced.” The brick says no to all three. His friends do not laugh—they simply make space for another try.',
        note: 'The lesson is not “never get stuck.” It is “getting stuck is not the ending.”',
        image: '/assets/bloo-idle.png',
        imageAlt: 'Bloo resting and ready for another OutBrick board',
      },
      {
        number: '03',
        title: 'Make room for the cheer',
        body: 'Bloo discovers that courage travels. When he cheers for Peach’s careful plan and Sprout’s odd little experiment, the whole village feels bigger. The next clear belongs to everyone who made room for it.',
        note: 'Bloo’s best move is the one that leaves a little confidence behind.',
        image: '/assets/mascots-group-cheer.png',
        imageAlt: 'Bloo, Peach, and Sprout cheering together in the OutBrick village',
      },
    ],
  },
  {
    id: 'peach',
    name: 'Peach',
    role: 'the gentle worrier',
    accent: '#FF9A4B',
    accentSoft: '#FFD29C',
    heroImage: '/assets/peach-think.png',
    idleImage: '/assets/peach-idle.png',
    imageAlt: 'Peach, the orange OutBrick mascot, thinking with one hand outstretched',
    headline: 'She brought a plan. And a backup plan.',
    dek: 'Peach notices the corner nobody else saw, counts the moves twice, and keeps a spare deep breath tucked behind her smile.',
    opening: 'Peach arrives at the board with a list. Then a second list, in case the first list becomes overwhelmed. She knows where every brick is, which is comforting right up until one of them moves. Luckily, Peach is learning that a plan can be a soft place to start—not a cage to stay inside.',
    quote: '“Careful is not the same as afraid.”',
    voice: 'Thoughtful, loyal, and only slightly panicked when the board gets interesting.',
    widgetLine: 'Careful is not the same as afraid.',
    superpower: 'Seeing the quiet route through the noise.',
    tells: 'She says “this is fine” exactly when it is becoming a little exciting.',
    favoriteMove: 'A tidy setup, a measured slide, and one relieved little nod.',
    chapters: [
      {
        number: '01',
        title: 'The inventory',
        body: 'Before the first slide, Peach studies the board like it has a secret to tell. She notices colours, edges, gaps, and the one brick that looks suspiciously pleased with itself.',
        note: 'Peach’s rule: if you can name what you see, you can find a way through.',
        image: '/assets/peach-think.png',
        imageAlt: 'Peach thinking carefully about an OutBrick board',
      },
      {
        number: '02',
        title: 'Deep breath, small move',
        body: 'A board changes the moment a brick moves. Peach used to think that meant the plan had failed. Now she treats it as new information, takes one breath, and draws a smaller circle around the next useful choice.',
        note: 'Her backup plan is becoming a kinder plan: observe, adjust, continue.',
        image: '/assets/peach-idle.png',
        imageAlt: 'Peach standing calmly, ready to adjust her plan',
      },
      {
        number: '03',
        title: 'The tidy way home',
        body: 'When the final brick slips through its gate, Peach does not shout. She smiles, checks the board one last time, and lets Bloo do the shouting for both of them. Then she adds the clear to her list—the good kind of list.',
        note: 'Peach makes victory feel like a warm lamp left on for everyone.',
        image: '/assets/mascots-group.png',
        imageAlt: 'The OutBrick mascot group standing together after a clear',
      },
    ],
  },
  {
    id: 'sprout',
    name: 'Sprout',
    role: 'the curious kid',
    accent: '#85E95A',
    accentSoft: '#C4FF9B',
    heroImage: '/assets/sprout-cheer.png',
    idleImage: '/assets/sprout-idle.png',
    imageAlt: 'Sprout, the green OutBrick mascot, cheering with both hands raised',
    headline: 'Every brick is a question.',
    dek: 'Sprout spots the odd gap, asks why the gate is there, and finds the long way around before anyone has finished saying “please be careful.”',
    opening: 'Sprout does not walk past a puzzle. Sprout investigates it. Why does this brick have studs? Why does that gate match? What happens if we try the thing Peach just asked us not to try? The answers are not always useful, but they are nearly always interesting.',
    quote: '“What if the answer is hiding behind that brick?”',
    voice: 'Wide-eyed, warm, and permanently one “ooh!” away from a discovery.',
    widgetLine: 'What if the answer is hiding behind that brick?',
    superpower: 'Keeping wonder in the room after the rule is understood.',
    tells: 'Sprout counts everything, including the things everyone else thought were decorative.',
    favoriteMove: 'The unexpected route that works for a reason Sprout is still explaining.',
    chapters: [
      {
        number: '01',
        title: 'The question',
        body: 'Sprout begins with the part everyone else is tempted to skip: looking closely. A colour, a shape, a gap, a tiny stud—each one might be a clue, and Sprout is delighted to meet all of them.',
        note: 'Sprout’s rule: a good question gives the next move somewhere to go.',
        image: '/assets/sprout-cheer.png',
        imageAlt: 'Sprout celebrating a new idea in the OutBrick village',
      },
      {
        number: '02',
        title: 'The long way around',
        body: 'The obvious route is blocked, so Sprout tries the route nobody labelled. It takes longer. It also reveals a corner, a colour match, and a way to help the next brick leave. Sometimes the board rewards patience disguised as curiosity.',
        note: 'A wrong turn can still point at something worth noticing.',
        image: '/assets/sprout-idle.png',
        imageAlt: 'Sprout looking closely at the next OutBrick possibility',
      },
      {
        number: '03',
        title: 'Grow together',
        body: 'Sprout learns that discovery is more fun when it is shared. A new trick becomes a group cheer, a tricky board becomes a story, and the smallest “ooh” can turn into the next person’s brave first move.',
        note: 'Sprout keeps the village playful, even when the solution is serious business.',
        image: '/assets/mascots-group-cheer.png',
        imageAlt: 'The OutBrick mascots celebrating a shared discovery',
      },
    ],
  },
];

export function getMascotStory(id: string): MascotStory | undefined {
  return mascotStories.find((story) => story.id === id);
}

export function getMascotOfTheDay(date = new Date()): MascotStory {
  const utcDay = Math.floor(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) / 86_400_000);
  const index = ((utcDay % mascotStories.length) + mascotStories.length) % mascotStories.length;
  return mascotStories[index]!;
}

export function getAdjacentMascot(id: MascotStory['id'], direction: -1 | 1): MascotStory {
  const index = mascotStories.findIndex((story) => story.id === id);
  return mascotStories[(index + direction + mascotStories.length) % mascotStories.length]!;
}
