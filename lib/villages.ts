/**
 * The Journey, as the site tells it.
 *
 * `villages` are the 28 authored themes, in the order and with the names
 * `Brickout/UI/Journey/VillageTheme.swift` (`VillageThemes.authored`) carries
 * them. The captures under `public/assets/villages/` are real map
 * screenshots, not illustrations of the map.
 *
 * There are 167 villages on the road; twenty-eight distinct places carry
 * them, and a variation layer keeps every repeat reading as a different
 * place. A village is twelve levels (`Worlds.levelsPerVillage`), which is
 * what `levelRange` counts — separate from the hundred twenty-level
 * chapters, which are a different unit entirely.
 */

export type Village = {
  slug: string;
  name: string;
};

export const villages: Village[] = [
  { slug: 'garden-city', name: 'Garden City' },
  { slug: 'clover-farm', name: 'Clover Farm' },
  { slug: 'seashell-beach', name: 'Seashell Beach' },
  { slug: 'unicorn-meadow', name: 'Unicorn Meadow' },
  { slug: 'button-factory', name: 'Button Factory' },
  { slug: 'ember-volcano', name: 'Ember Volcano' },
  { slug: 'rainbow-canal', name: 'Rainbow Canal' },
  { slug: 'moonlit-meadow', name: 'Moonlit Meadow' },
  { slug: 'autumn-orchard', name: 'Autumn Orchard' },
  { slug: 'snowflake-village', name: 'Snowflake Village' },
  { slug: 'coral-cove', name: 'Coral Cove' },
  { slug: 'honeybee-hollow', name: 'Honeybee Hollow' },
  { slug: 'bamboo-springs', name: 'Bamboo Springs' },
  { slug: 'crystal-valley', name: 'Crystal Valley' },
  { slug: 'cloud-carnival', name: 'Cloud Carnival' },
  { slug: 'dinosaur-grove', name: 'Dinosaur Grove' },
  { slug: 'desert-oasis', name: 'Desert Oasis' },
  { slug: 'cherry-blossom-town', name: 'Cherry Blossom Town' },
  { slug: 'spaceport-gardens', name: 'Spaceport Gardens' },
  { slug: 'pirate-harbor', name: 'Pirate Harbor' },
  { slug: 'mushroom-forest', name: 'Mushroom Forest' },
  { slug: 'royal-rose-court', name: 'Royal Rose Court' },
  { slug: 'waterwheel-woods', name: 'Waterwheel Woods' },
  { slug: 'sunflower-railway', name: 'Sunflower Railway' },
  { slug: 'peppermint-plaza', name: 'Peppermint Plaza' },
  { slug: 'firefly-wetlands', name: 'Firefly Wetlands' },
  { slug: 'lavender-hills', name: 'Lavender Hills' },
  { slug: 'celebration-square', name: 'Celebration Square' },
];

/** Twelve levels to a village — `Worlds.levelsPerVillage`. */
export function levelRange(index: number): string {
  return `Levels ${index * 12 + 1}–${index * 12 + 12}`;
}

/** The six times the road comes round on the way to level 2,000. */
export const passes = [
  'First Light',
  'Market Day',
  'Festival Gardens',
  'Hidden Courtyards',
  'Windmill Walk',
  'Grand Promenade',
];

/**
 * The nine brick friends. Names from docs/mascots.md; the one-liners are
 * their own documented idle and celebration beats, nothing invented.
 *
 * Character vocalisations were removed on 21 September 2026, so nothing here
 * describes a voice — the friends animate and speak in text bubbles.
 */
export type Friend = {
  slug: string;
  name: string;
  line: string;
};

export const cast: Friend[] = [
  { slug: 'bloo', name: 'Bloo', line: 'Checks his wristwatch between boards, then spins when you clear one.' },
  { slug: 'peach', name: 'Peach', line: 'Frets the whole way through, then cheers when the pile finally opens.' },
  { slug: 'sprout', name: 'Sprout', line: 'Asks the question nobody else did. Two hops and a spin when it works.' },
  { slug: 'bricko', name: 'Bricko', line: 'Counts his reps, gives a thumbs-up, and flexes on a clear.' },
  { slug: 'zippy', name: 'Zippy', line: 'Loses the thread mid-sentence. Spins on a poke, triple-hops on a win.' },
  { slug: 'vio', name: 'Vio', line: 'Rates your moves like tracks and grooves to the beat at 112 bpm.' },
  { slug: 'moss', name: 'Moss', line: 'Farm sayings, work boots, and one slow clap when you earn it.' },
  { slug: 'flurry', name: 'Flurry', line: 'Tea, scarves and a gentle wave. The scarf tail swings a beat late.' },
  { slug: 'poppy', name: 'Poppy', line: 'Tells fairy tales, and waves a wand that bursts into stars.' },
];
