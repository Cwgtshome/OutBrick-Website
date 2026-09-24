/**
 * The home page's words, in every language it is published in.
 *
 * `en` is the original copy of app/page.tsx, moved here verbatim: the page
 * renders English from this object, so the English page reads exactly as it
 * did. The other languages are the same `HomeCopy` type, so TypeScript refuses
 * a translation with a missing or extra piece.
 *
 * Numbers in running text are written the way each language writes them:
 * 2,000 (en, ja) · 2 000 with a narrow no-break space (fr) · 2.000 (de) ·
 * 2000 (es, where four-digit numbers take no separator).
 *
 * Names stay as they are in the game: OutBrick, the nine friends, the
 * villages and passes, Brick Pass, Brick Wheel, and Apple's product names.
 * Apple features use Apple's own name for them in each language
 * (Activités en direct, Live-Aktivitäten, Actividades en vivo, ライブアクティビティ).
 */

import type { Locale } from './locales';

type Step = { title: string; body: string; alt: string };
type Plaque = { shown: string; label: string };
type Note = { tag: string; title: string; body: string };
type Row = { title: string; body: string };
type Tile = { tag: string; title: string; body: string };

export type HomeCopy = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; ogImageAlt: string };
  /** JSON-LD MobileApplication description. */
  appDescription: string;
  /** The hero headline, word by word, on three lines; the `slab` word sits on a brick. */
  headline: { word: string; line: number; slab?: boolean }[];
  /** The full stop that lands after the slab. */
  stop: string;
  hero: {
    eyebrow: string;
    lede: string;
    walk: string;
    facts: [string, string, string, string];
    phoneAlt: string;
  };
  rule: {
    eyebrow: string;
    title: string;
    lede: string;
    boardLabel: string;
    steps: [Step, Step, Step];
    wallLabel: string;
    plaques: [Plaque, Plaque, Plaque, Plaque];
  };
  journey: {
    eyebrow: string;
    title: string;
    lede: string;
    windowLabel: string;
    villageAlt: (name: string) => string;
    levelRange: (first: number, last: number) => string;
    passesLede: string;
    notes: [Note, Note, Note];
  };
  cast: {
    eyebrow: string;
    title: string;
    lede: string;
    meet: string;
    /** Each friend's one-liner, by slug. The names themselves never change. */
    lines: Record<string, string>;
    note: string;
  };
  fair: {
    eyebrow: string;
    title: string;
    lede: string;
    /** "Two sentences … now: <s>“no ads”</s> and <s>“no lives”</s>." */
    struck: { lead: string; ads: string; and: string; lives: string; end: string };
    quote: string;
    ledger: [Row, Row, Row, Row, Row];
  };
  apple: {
    eyebrow: string;
    title: string;
    lede: string;
    platforms: string;
    widgets: Tile & { alt: string };
    gameCenter: Tile;
    messages: Tile;
    colourBlind: Tile & { alt: string };
    accessibility: Tile;
    system: Tile;
  };
  close: { laneClear: string; title: string; lede: string };
};

const en: HomeCopy = {
  meta: {
    title: 'OutBrick — a boulevard built out of brick',
    description:
      'A sliding-brick colour-sort puzzle: 2,000 solver-verified boards, 167 brick-built villages, nine brick friends. No clock, plays offline. Free on the App Store.',
    ogTitle: 'OutBrick — a boulevard built out of brick',
    ogDescription:
      '2,000 solver-verified boards, 167 brick-built villages, nine brick friends. One finger, no clock, nothing that interrupts a board.',
    ogImageAlt: 'The OutBrick Journey map in Garden City, with Bloo, Peach and Sprout',
  },
  appDescription:
    'A sliding-brick colour-sort puzzle: 2,000 solver-verified boards across 100 chapters, a Journey of 167 brick-built villages, and nine brick friends.',
  headline: [
    { word: 'A', line: 0 },
    { word: 'boulevard', line: 0 },
    { word: 'built', line: 1 },
    { word: 'out', line: 1 },
    { word: 'of', line: 1 },
    { word: 'brick', line: 2, slab: true },
  ],
  stop: '.',
  hero: {
    eyebrow: 'Free on the App Store',
    lede: 'Slide a brick and it glides until something stops it. Get every brick out through the gate that matches its colour, and the board is clear. That is the whole rule, and it takes about five seconds to learn.',
    walk: 'Walk a village',
    facts: ['2,000 solver-verified boards', '167 brick-built villages', 'No clock, anywhere', 'Plays offline'],
    phoneAlt:
      'The Journey map in Garden City: a brick-paved road winding between toy-brick houses and trees, with numbered level markers along it.',
  },
  rule: {
    eyebrow: 'One rule to learn',
    title: 'A board looks impossible, and isn’t.',
    lede: 'Every board is packed to the edges. One right move opens a pocket of space and the pile unlocks section by section. A solver cleared all 2,000 of them before any of them shipped, so nothing you meet is a dead end.',
    boardLabel: 'Try an OutBrick board: slide every brick out through its gate',
    steps: [
      {
        title: 'Drag a brick',
        body: 'It travels as far as you drag it, up to whatever stops it — a wall, a neighbour, a gate that refuses its colour.',
        alt: 'A packed OutBrick board at the start of a level, bricks filling the frame.',
      },
      {
        title: 'Find the gate',
        body: 'Colour gates, keys and locks, frozen bricks that take three slides to thaw, generators, conveyors, crates, and arenas shaped like an H, an L or a cross.',
        alt: 'An OutBrick board part-way through, with keys, locks, crates and coloured gates around the edge.',
      },
      {
        title: 'Beat the target',
        body: 'A clear earns one star. Clearing inside the solver’s own move target earns two. Doing that without a single undo earns three.',
        alt: 'The clear card after finishing an OutBrick board, with stars and coins.',
      },
    ],
    wallLabel: 'OutBrick in numbers',
    plaques: [
      { shown: '2,000', label: 'boards, each one proven solvable' },
      { shown: '100', label: 'chapters of twenty levels' },
      { shown: '0', label: 'clocks, timers or countdowns' },
      { shown: '8', label: 'board nouns: gates, keys, ice, crates and more' },
    ],
  },
  journey: {
    eyebrow: 'The Journey',
    title: 'Nothing on this road is a painted picture.',
    lede: 'All 167 villages along the boulevard are built stud by stud out of brick — the ground, the road, the trees, the lamps, the landmarks. Twenty-eight places carry it, each with its own palette, paving, level markers and motion, and a variation layer keeps every repeat reading as a different place.',
    windowLabel: 'The 28 village themes of the OutBrick Journey. Scroll or drag sideways to walk the road.',
    villageAlt: (name) => `${name}, a brick-built village on the OutBrick Journey map.`,
    levelRange: (first, last) => `Levels ${first}–${last}`,
    passesLede:
      'The road comes round six times on the way to level 2,000, and every pass is a different hour of the day.',
    notes: [
      {
        tag: 'Twelve levels',
        title: 'A village is a place, not a chapter',
        body: 'Each village holds twelve levels and is worth thirty-six stars. Chapters are a separate count — still a hundred of them, twenty levels each.',
      },
      {
        tag: 'Built, not painted',
        title: 'One brick vocabulary',
        body: 'Every slab has its own depth under it, a rounded face, a lit strip on top and a seam at the foot — with studs only where the top is exposed. That is why twenty-eight different places still read as one world.',
      },
      {
        tag: 'Beyond 2,000',
        title: 'The road keeps going',
        body: 'Past the two-thousandth board the same curve keeps generating addresses, solved on your own device before you ever see them.',
      },
    ],
  },
  cast: {
    eyebrow: 'Nine brick friends',
    title: 'They live in the same material world you do.',
    lede: 'Real 3D characters, not stickers pasted over a puzzle. Three share your home screen at a time and the cast turns over as you play — one waves goodbye and walks off, another walks on and says hello. They react when you poke them, follow you with their eyes as you tilt the phone, and each one has a victory move of its own.',
    meet: 'Meet the friends',
    lines: {
      bloo: 'Checks his wristwatch between boards, then spins when you clear one.',
      peach: 'Frets the whole way through, then cheers when the pile finally opens.',
      sprout: 'Asks the question nobody else did. Two hops and a spin when it works.',
      bricko: 'Counts his reps, gives a thumbs-up, and flexes on a clear.',
      zippy: 'Loses the thread mid-sentence. Spins on a poke, triple-hops on a win.',
      vio: 'Rates your moves like tracks and grooves to the beat at 112 bpm.',
      moss: 'Farm sayings, work boots, and one slow clap when you earn it.',
      flurry: 'Tea, scarves and a gentle wave. The scarf tail swings a beat late.',
      poppy: 'Tells fairy tales, and waves a wand that bursts into stars.',
    },
    note: 'The friends animate and speak in text bubbles. They have no voices — character vocalisations were removed on 21 September 2026. VoiceOver announcements are untouched.',
  },
  fair: {
    eyebrow: 'What it costs you',
    title: 'Said plainly, because most games don’t.',
    lede: 'OutBrick has lives and it has advertising. Here is exactly how both work, with nothing rounded in our favour.',
    struck: {
      lead: 'Two sentences we are not allowed to write, because they were true once and are not now: ',
      ads: '“no ads”',
      and: ' and ',
      lives: '“no lives”',
      end: '.',
    },
    quote: 'OutBrick shipped on both promises and both changed. The generosity is dialled up rather than the mechanic absent — and this page is where we say so.',
    ledger: [
      {
        title: 'A life is the price of losing a board — never of playing or clearing one.',
        body: 'Opening a board needs a life and spends none. Clearing one costs nothing at all. A life goes only when an attempt ends without a clear. You hold five, eight with the Brick Pass, and one comes back every thirty minutes.',
      },
      {
        title: 'The first undo on every board is free and cannot run out.',
        body: 'Beyond that, undos come from a tank of five that refills one every twenty-five minutes. The undo offered when a board wedges is free too, and sits outside the tank.',
      },
      {
        title: 'The rope is a move limit, not a clock.',
        body: 'Every board prints its target and its limit from the first tap. There is no countdown anywhere in the game. Run low and you are offered five more moves before anything else — 300 coins, then 500, then 900 inside one attempt.',
      },
      {
        title: 'Six rewarded video placements, every one opt-in and capped.',
        body: 'A life, five more moves, two undos, a booster armed before the first move, the clear card’s coins paid again, and a second spin of the Brick Wheel. Each carries its own daily cap. There are no banners and no interstitials, nothing plays that you did not press a button to see, and nothing interrupts a board. Saying no costs you nothing.',
      },
      {
        title: 'Coins and boosters are optional. There is no subscription.',
        body: 'Remove Ads switches advertising off for good and still pays you what the videos would have. The Brick Pass raises the lives cap from five to eight and turns advertising off for as long as it is held.',
      },
    ],
  },
  apple: {
    eyebrow: 'Built for Apple',
    title: 'One purchase. One progress. Six places to play it.',
    lede: 'iPhone, iPad, Mac, Apple TV, Apple Vision Pro and a standalone Apple Watch game. Signed in to iCloud, a new device picks up exactly where the old one stopped — level, coins, streak, Collection and all. It lives in your iCloud, not ours.',
    platforms: 'Platforms',
    widgets: {
      tag: 'Lock Screen',
      title: 'Live Activities & widgets',
      body: 'Live Activities on the Lock Screen and in the Dynamic Island, Home Screen widgets and Lock Screen accessories, all reading the same shared snapshot.',
      alt: 'A montage of OutBrick Home Screen widgets: current level, the daily brick, a streak, the mascot of the day, the chapter and the endless board.',
    },
    gameCenter: {
      tag: 'Game Center',
      title: 'Leaderboards and 57 achievements',
      body: 'Lifetime leaderboards, fifty-seven achievements, and challenges you can send to someone you actually know.',
    },
    messages: {
      tag: 'Messages',
      title: 'Stickers and challenges',
      body: 'An iMessage app with stickers and challenges you can drop straight into a thread, without anybody leaving Messages to do it.',
    },
    colourBlind: {
      tag: 'Colour-blind',
      title: 'Three readability channels',
      body: 'Colour-blind mode is on by default and stamps a distinct glyph on every brick and every gate, so colour is never the only sort key. Hue, shape and studs all carry it.',
      alt: 'An OutBrick board in colour-blind mode: each colour of brick carries its own glyph — diamonds, squares, crosses, stars — and each gate carries the matching one.',
    },
    accessibility: {
      tag: 'Accessibility',
      title: 'Playable without seeing it',
      body: 'Every brick is a VoiceOver element that says its colour, shape and position, with an action for each way it can slide. Larger Text scales throughout and Reduce Motion is honoured everywhere — including on this page.',
    },
    system: {
      tag: 'System',
      title: 'Siri, Shortcuts, Spotlight',
      body: 'Ask Siri for a board, find one in Spotlight, and pick a session up on another device exactly where the bricks were.',
    },
  },
  close: {
    laneClear: 'Board clear',
    title: 'Clear a board. Walk a little further.',
    lede: 'Offline, one-handed, about two minutes a board, and happy to wait in the corner until you feel like moving one more brick.',
  },
};

/* ======================================================================= fr */

const fr: HomeCopy = {
  meta: {
    title: 'OutBrick — un boulevard bâti tout en brique',
    description:
      'Un puzzle où l’on fait glisser des briques pour les trier par couleur : 2 000 plateaux vérifiés, 167 villages en briques, neuf amis. Sans chrono, hors ligne.',
    ogTitle: 'OutBrick — un boulevard bâti tout en brique',
    ogDescription:
      '2 000 plateaux vérifiés par un solveur, 167 villages en briques, neuf amis en briques. Un seul doigt, aucun chrono, rien qui interrompe un plateau.',
    ogImageAlt: 'La carte du Voyage d’OutBrick à Garden City, avec Bloo, Peach et Sprout',
  },
  appDescription:
    'Un puzzle de briques à faire glisser et à trier par couleur : 2 000 plateaux vérifiés par un solveur, répartis en 100 chapitres, un Voyage à travers 167 villages en briques, et neuf amis en briques.',
  headline: [
    { word: 'Un', line: 0 },
    { word: 'boulevard', line: 0 },
    { word: 'bâti', line: 1 },
    { word: 'tout', line: 1 },
    { word: 'en', line: 1 },
    { word: 'brique', line: 2, slab: true },
  ],
  stop: '.',
  hero: {
    eyebrow: 'Gratuit sur l’App Store',
    lede: 'Faites glisser une brique : elle file jusqu’à ce que quelque chose l’arrête. Sortez chaque brique par la porte de sa couleur, et le plateau est vidé. C’est toute la règle, et elle s’apprend en cinq secondes à peine.',
    walk: 'Parcourir un village',
    facts: ['2 000 plateaux à solution vérifiée', '167 villages en briques', 'Aucun chrono, nulle part', 'Fonctionne hors ligne'],
    phoneAlt:
      'La carte du Voyage à Garden City : une route pavée de briques serpente entre des maisons et des arbres en briques de jouet, jalonnée de marqueurs de niveau numérotés.',
  },
  rule: {
    eyebrow: 'Une seule règle à apprendre',
    title: 'Un plateau a l’air impossible. Il ne l’est pas.',
    lede: 'Chaque plateau est rempli jusqu’aux bords. Un bon coup libère un peu d’espace, et le tas se débloque morceau par morceau. Un solveur a vidé les 2 000 plateaux avant la sortie du jeu : rien de ce que vous rencontrerez n’est une impasse.',
    boardLabel: 'Essayez un plateau OutBrick : faites sortir chaque brique par sa porte',
    steps: [
      {
        title: 'Faites glisser une brique',
        body: 'Elle va aussi loin que votre geste, jusqu’à ce que quelque chose l’arrête — un mur, une voisine, une porte qui refuse sa couleur.',
        alt: 'Un plateau OutBrick bien rempli au début d’un niveau, les briques occupant tout le cadre.',
      },
      {
        title: 'Trouvez la porte',
        body: 'Portes de couleur, clés et cadenas, briques gelées qu’il faut faire glisser trois fois pour les dégeler, générateurs, tapis roulants, caisses, et arènes en forme de H, de L ou de croix.',
        alt: 'Un plateau OutBrick en cours de partie, entouré de clés, de cadenas, de caisses et de portes de couleur.',
      },
      {
        title: 'Battez l’objectif',
        body: 'Vider un plateau rapporte une étoile. Le vider dans l’objectif de coups fixé par le solveur en rapporte deux. Y parvenir sans une seule annulation en rapporte trois.',
        alt: 'L’écran de victoire après un plateau OutBrick vidé, avec les étoiles et les pièces gagnées.',
      },
    ],
    wallLabel: 'OutBrick en chiffres',
    plaques: [
      { shown: '2 000', label: 'plateaux, tous prouvés solubles' },
      { shown: '100', label: 'chapitres de vingt niveaux' },
      { shown: '0', label: 'chrono, minuteur ou compte à rebours' },
      { shown: '8', label: 'éléments de plateau : portes, clés, glace, caisses…' },
    ],
  },
  journey: {
    eyebrow: 'Le Voyage',
    title: 'Rien sur cette route n’est une image peinte.',
    lede: 'Les 167 villages qui bordent le boulevard sont construits tenon par tenon, en briques — le sol, la route, les arbres, les réverbères, les monuments. Vingt-huit lieux les composent, chacun avec sa palette, ses pavés, ses marqueurs de niveau et ses animations, et une couche de variations fait de chaque retour un endroit nouveau.',
    windowLabel: 'Les 28 thèmes de villages du Voyage d’OutBrick. Faites défiler ou glissez sur le côté pour parcourir la route.',
    villageAlt: (name) => `${name}, un village en briques sur la carte du Voyage d’OutBrick.`,
    levelRange: (first, last) => `Niveaux ${first} à ${last}`,
    passesLede:
      'Jusqu’au niveau 2 000, la route repasse six fois, et chaque passage se déroule à une heure différente de la journée.',
    notes: [
      {
        tag: 'Douze niveaux',
        title: 'Un village est un lieu, pas un chapitre',
        body: 'Chaque village compte douze niveaux et vaut trente-six étoiles. Les chapitres se comptent à part — il y en a toujours cent, de vingt niveaux chacun.',
      },
      {
        tag: 'Construit, pas peint',
        title: 'Un seul vocabulaire de briques',
        body: 'Chaque dalle a sa propre épaisseur, une face arrondie, un liseré de lumière sur le dessus et un joint à la base — avec des tenons seulement là où le dessus est visible. C’est pour cela que vingt-huit lieux différents forment un seul et même monde.',
      },
      {
        tag: 'Au-delà de 2 000',
        title: 'La route continue',
        body: 'Passé le deux-millième plateau, la même courbe continue de générer de nouvelles adresses, résolues sur votre propre appareil avant même que vous ne les voyiez.',
      },
    ],
  },
  cast: {
    eyebrow: 'Neuf amis en briques',
    title: 'Ils vivent dans le même monde bien concret que vous.',
    lede: 'De vrais personnages en 3D, pas des autocollants plaqués sur un puzzle. Trois d’entre eux partagent votre écran d’accueil, et la troupe se renouvelle au fil du jeu — l’un vous fait au revoir et s’éloigne, un autre arrive et vous dit bonjour. Ils réagissent quand vous les touchez, vous suivent des yeux quand vous inclinez le téléphone, et chacun a sa propre danse de victoire.',
    meet: 'Rencontrer les amis',
    lines: {
      bloo: 'Jette un œil à sa montre entre deux plateaux, puis tourbillonne quand vous en videz un.',
      peach: 'S’inquiète du début à la fin, puis applaudit quand le tas s’ouvre enfin.',
      sprout: 'Pose la question que personne n’a posée. Deux petits bonds et une pirouette quand ça marche.',
      bricko: 'Compte ses répétitions, lève le pouce et gonfle les biceps à chaque victoire.',
      zippy: 'Perd le fil en pleine phrase. Tourne sur lui-même quand on le touche, triple saut quand on gagne.',
      vio: 'Note vos coups comme des morceaux de musique et se déhanche à 112 bpm.',
      moss: 'Des dictons de la ferme, des bottes de travail, et un lent applaudissement quand vous l’avez mérité.',
      flurry: 'Du thé, des écharpes et un petit signe de la main. Le bout de l’écharpe suit avec un temps de retard.',
      poppy: 'Raconte des contes de fées et agite une baguette qui éclate en étoiles.',
    },
    note: 'Les amis s’animent et parlent dans des bulles de texte. Ils n’ont pas de voix — les vocalisations des personnages ont été retirées le 21 septembre 2026. Les annonces de VoiceOver, elles, ne changent pas.',
  },
  fair: {
    eyebrow: 'Ce que ça vous coûte',
    title: 'Dit simplement, parce que la plupart des jeux ne le font pas.',
    lede: 'OutBrick a des vies et affiche de la publicité. Voici exactement comment fonctionnent les deux, sans rien arrondir en notre faveur.',
    struck: {
      lead: 'Deux phrases que nous n’avons pas le droit d’écrire, parce qu’elles ont été vraies un jour et ne le sont plus : ',
      ads: '« pas de pub »',
      and: ' et ',
      lives: '« pas de vies »',
      end: '.',
    },
    quote: 'OutBrick est sorti avec ces deux promesses, et les deux ont changé. Le mécanisme est bien là, mais réglé du côté de la générosité — et c’est sur cette page que nous le disons.',
    ledger: [
      {
        title: 'Une vie, c’est le prix d’un plateau perdu — jamais celui d’un plateau joué ou vidé.',
        body: 'Ouvrir un plateau demande une vie, mais n’en consomme aucune. En vider un ne coûte rien du tout. Une vie ne part que lorsqu’une tentative se termine sans que le plateau soit vidé. Vous en avez cinq, huit avec le Brick Pass, et il en revient une toutes les trente minutes.',
      },
      {
        title: 'La première annulation de chaque plateau est gratuite, et elle ne s’épuise jamais.',
        body: 'Au-delà, les annulations puisent dans une réserve de cinq, qui en regagne une toutes les vingt-cinq minutes. L’annulation proposée quand un plateau se bloque est gratuite elle aussi, et ne touche pas à la réserve.',
      },
      {
        title: 'La corde est une limite de coups, pas un chrono.',
        body: 'Chaque plateau affiche son objectif et sa limite dès la première touche. Il n’y a aucun compte à rebours dans tout le jeu. Si vous êtes à court, on vous propose d’abord cinq coups de plus — 300 pièces, puis 500, puis 900 au cours d’une même tentative.',
      },
      {
        title: 'Six emplacements de vidéos récompensées, tous facultatifs et plafonnés.',
        body: 'Une vie, cinq coups de plus, deux annulations, un booster activé avant le premier coup, les pièces de l’écran de victoire versées une seconde fois, et un second tour de Brick Wheel. Chacun a son propre plafond quotidien. Pas de bannières, pas d’interstitiels : rien ne se lance sans que vous ayez appuyé sur un bouton pour le voir, et rien n’interrompt un plateau. Dire non ne vous coûte rien.',
      },
      {
        title: 'Pièces et boosters sont facultatifs. Il n’y a pas d’abonnement.',
        body: 'L’achat « Supprimer les pubs » coupe la publicité pour de bon, et vous verse quand même ce que les vidéos vous auraient rapporté. Le Brick Pass fait passer le plafond de vies de cinq à huit et coupe la publicité tant que vous l’avez.',
      },
    ],
  },
  apple: {
    eyebrow: 'Pensé pour Apple',
    title: 'Un seul achat. Une seule progression. Six appareils pour y jouer.',
    lede: 'iPhone, iPad, Mac, Apple TV, Apple Vision Pro et un jeu autonome sur Apple Watch. Connecté à iCloud, un nouvel appareil reprend exactement là où l’ancien s’était arrêté — niveau, pièces, série, Collection, tout y est. Vos données vivent dans votre iCloud, pas chez nous.',
    platforms: 'Plateformes',
    widgets: {
      tag: 'Écran verrouillé',
      title: 'Activités en direct et widgets',
      body: 'Des Activités en direct sur l’écran verrouillé et dans la Dynamic Island, des widgets pour l’écran d’accueil et l’écran verrouillé, tous alimentés par le même instantané partagé.',
      alt: 'Un montage de widgets OutBrick pour l’écran d’accueil : niveau en cours, brique du jour, série, mascotte du jour, chapitre et plateau sans fin.',
    },
    gameCenter: {
      tag: 'Game Center',
      title: 'Classements et 57 succès',
      body: 'Des classements de tous les temps, cinquante-sept succès, et des défis à envoyer à des gens que vous connaissez vraiment.',
    },
    messages: {
      tag: 'Messages',
      title: 'Autocollants et défis',
      body: 'Une app iMessage avec des autocollants et des défis à glisser directement dans une conversation, sans que personne ait besoin de quitter Messages.',
    },
    colourBlind: {
      tag: 'Daltonisme',
      title: 'Trois repères de lisibilité',
      body: 'Le mode daltonien est activé par défaut : il appose un symbole distinct sur chaque brique et chaque porte, pour que la couleur ne soit jamais le seul repère. La teinte, la forme et les tenons portent tous l’information.',
      alt: 'Un plateau OutBrick en mode daltonien : chaque couleur de brique porte son propre symbole — losanges, carrés, croix, étoiles — et chaque porte porte le symbole assorti.',
    },
    accessibility: {
      tag: 'Accessibilité',
      title: 'Jouable sans le voir',
      body: 'Chaque brique est un élément VoiceOver qui annonce sa couleur, sa forme et sa position, avec une action pour chaque direction où elle peut glisser. Texte plus grand s’applique partout, et Réduire les animations est respecté partout — y compris sur cette page.',
    },
    system: {
      tag: 'Système',
      title: 'Siri, Raccourcis, Spotlight',
      body: 'Demandez un plateau à Siri, retrouvez-en un dans Spotlight, et reprenez une partie sur un autre appareil exactement là où étaient les briques.',
    },
  },
  close: {
    laneClear: 'Plateau vidé',
    title: 'Videz un plateau. Avancez un peu plus loin.',
    lede: 'Hors ligne, d’une seule main, environ deux minutes par plateau — et il attend patiemment dans son coin que l’envie vous prenne de déplacer une brique de plus.',
  },
};

/* ======================================================================= de */

const de: HomeCopy = {
  meta: {
    title: 'OutBrick – ein Boulevard, Stein auf Stein gebaut',
    description:
      'Ein Schiebepuzzle zum Sortieren nach Farben: 2.000 geprüfte Spielfelder, 167 Dörfer aus Bausteinen, neun Freunde. Ohne Zeitdruck, offline spielbar, gratis.',
    ogTitle: 'OutBrick – ein Boulevard, Stein auf Stein gebaut',
    ogDescription:
      '2.000 per Solver geprüfte Spielfelder, 167 Dörfer aus Bausteinen, neun Freunde aus Steinen. Ein Finger, keine Uhr, nichts, was ein Spielfeld unterbricht.',
    ogImageAlt: 'Die Karte der OutBrick-Reise in Garden City, mit Bloo, Peach und Sprout',
  },
  appDescription:
    'Ein Schiebepuzzle, bei dem du Steine nach Farben sortierst: 2.000 per Solver geprüfte Spielfelder in 100 Kapiteln, eine Reise durch 167 Dörfer aus Bausteinen und neun Freunde aus Steinen.',
  headline: [
    { word: 'Ein', line: 0 },
    { word: 'Boulevard,', line: 0 },
    { word: 'Stein', line: 1 },
    { word: 'auf', line: 1 },
    { word: 'Stein', line: 2, slab: true },
  ],
  stop: '.',
  hero: {
    eyebrow: 'Kostenlos im App Store',
    lede: 'Schieb einen Stein an, und er rutscht, bis ihn etwas aufhält. Bring jeden Stein durch das Tor in seiner Farbe hinaus, und das Feld ist frei. Das ist die ganze Regel – gelernt in etwa fünf Sekunden.',
    walk: 'Durch ein Dorf spazieren',
    facts: ['2.000 Felder mit geprüfter Lösung', '167 Dörfer aus Bausteinen', 'Nirgends eine Uhr', 'Auch offline spielbar'],
    phoneAlt:
      'Die Reisekarte in Garden City: Eine gepflasterte Straße schlängelt sich zwischen Häusern und Bäumen aus Spielzeugsteinen hindurch, mit nummerierten Levelmarkierungen am Weg.',
  },
  rule: {
    eyebrow: 'Eine Regel zum Lernen',
    title: 'Ein Feld sieht unmöglich aus – und ist es nicht.',
    lede: 'Jedes Spielfeld ist bis an den Rand gefüllt. Ein richtiger Zug schafft etwas Platz, und der Haufen löst sich Stück für Stück. Ein Solver hat alle 2.000 Felder gelöst, bevor auch nur eines erschienen ist – du triffst also nie auf eine Sackgasse.',
    boardLabel: 'Probier ein OutBrick-Spielfeld aus: Schieb jeden Stein durch sein Tor hinaus',
    steps: [
      {
        title: 'Schieb einen Stein',
        body: 'Er fährt so weit, wie du ziehst – bis ihn etwas stoppt: eine Wand, ein Nachbar, ein Tor, das seine Farbe nicht durchlässt.',
        alt: 'Ein prall gefülltes OutBrick-Spielfeld zu Beginn eines Levels, die Steine füllen den ganzen Rahmen.',
      },
      {
        title: 'Finde das Tor',
        body: 'Farbige Tore, Schlüssel und Schlösser, gefrorene Steine, die drei Schübe zum Auftauen brauchen, Generatoren, Förderbänder, Kisten und Arenen in Form eines H, eines L oder eines Kreuzes.',
        alt: 'Ein OutBrick-Spielfeld mitten im Spiel, mit Schlüsseln, Schlössern, Kisten und farbigen Toren am Rand.',
      },
      {
        title: 'Schlag das Ziel',
        body: 'Ein gelöstes Feld bringt einen Stern. Bleibst du dabei innerhalb der Zugvorgabe des Solvers, gibt es zwei. Schaffst du das ohne eine einzige Zugrücknahme, gibt es drei.',
        alt: 'Die Abschlusskarte nach einem gelösten OutBrick-Spielfeld, mit Sternen und Münzen.',
      },
    ],
    wallLabel: 'OutBrick in Zahlen',
    plaques: [
      { shown: '2.000', label: 'Spielfelder, jedes nachweislich lösbar' },
      { shown: '100', label: 'Kapitel mit je zwanzig Levels' },
      { shown: '0', label: 'Uhren, Timer oder Countdowns' },
      { shown: '8', label: 'Spielelemente: Tore, Schlüssel, Eis, Kisten und mehr' },
    ],
  },
  journey: {
    eyebrow: 'Die Reise',
    title: 'Nichts an dieser Straße ist bloß gemalt.',
    lede: 'Alle 167 Dörfer am Boulevard sind Noppe für Noppe aus Bausteinen gebaut – der Boden, die Straße, die Bäume, die Laternen, die Wahrzeichen. Achtundzwanzig Orte tragen sie, jeder mit eigener Farbpalette, eigenem Pflaster, eigenen Levelmarkierungen und eigener Bewegung, und eine Variationsebene sorgt dafür, dass jede Wiederholung wie ein neuer Ort wirkt.',
    windowLabel: 'Die 28 Dorfthemen der OutBrick-Reise. Scrolle oder ziehe seitwärts, um die Straße entlangzugehen.',
    villageAlt: (name) => `${name}, ein Dorf aus Bausteinen auf der Karte der OutBrick-Reise.`,
    levelRange: (first, last) => `Level ${first}–${last}`,
    passesLede:
      'Auf dem Weg zu Level 2.000 kommt die Straße sechsmal vorbei, und jede Runde spielt zu einer anderen Tageszeit.',
    notes: [
      {
        tag: 'Zwölf Level',
        title: 'Ein Dorf ist ein Ort, kein Kapitel',
        body: 'Jedes Dorf hat zwölf Level und ist sechsunddreißig Sterne wert. Kapitel werden getrennt gezählt – es bleiben hundert, mit je zwanzig Levels.',
      },
      {
        tag: 'Gebaut, nicht gemalt',
        title: 'Eine einzige Bausteinsprache',
        body: 'Jede Platte hat ihre eigene Tiefe, eine abgerundete Front, einen Lichtstreifen oben und eine Fuge unten – und Noppen nur dort, wo die Oberseite frei liegt. Darum wirken achtundzwanzig verschiedene Orte doch wie eine Welt.',
      },
      {
        tag: 'Jenseits von 2.000',
        title: 'Die Straße geht weiter',
        body: 'Nach dem zweitausendsten Spielfeld erzeugt dieselbe Kurve immer neue Adressen, gelöst auf deinem eigenen Gerät, bevor du sie überhaupt zu sehen bekommst.',
      },
    ],
  },
  cast: {
    eyebrow: 'Neun Freunde aus Steinen',
    title: 'Sie leben in derselben greifbaren Welt wie du.',
    lede: 'Echte 3D-Figuren, keine Sticker auf einem Puzzle. Drei teilen sich jeweils deinen Startbildschirm, und die Besetzung wechselt, während du spielst – einer winkt zum Abschied und geht, ein anderer kommt herein und sagt Hallo. Sie reagieren, wenn du sie anstupst, folgen dir mit den Augen, wenn du das Handy neigst, und jeder hat seinen eigenen Siegestanz.',
    meet: 'Lerne die Freunde kennen',
    lines: {
      bloo: 'Schaut zwischen zwei Feldern auf seine Armbanduhr und dreht sich, wenn du eins schaffst.',
      peach: 'Bangt die ganze Zeit mit und jubelt, wenn sich der Haufen endlich öffnet.',
      sprout: 'Stellt die Frage, die sonst keiner gestellt hat. Zwei Hüpfer und eine Drehung, wenn’s klappt.',
      bricko: 'Zählt seine Wiederholungen, zeigt Daumen hoch und lässt bei jedem Sieg die Muskeln spielen.',
      zippy: 'Verliert mitten im Satz den Faden. Dreht sich beim Antippen, hüpft dreimal bei einem Sieg.',
      vio: 'Bewertet deine Züge wie Songs und groovt im Takt von 112 bpm.',
      moss: 'Bauernweisheiten, Arbeitsstiefel und ein langsamer Applaus, wenn du ihn dir verdient hast.',
      flurry: 'Tee, Schals und ein sanftes Winken. Das Schalende schwingt einen Takt zu spät nach.',
      poppy: 'Erzählt Märchen und schwingt einen Zauberstab, der in Sterne zerplatzt.',
    },
    note: 'Die Freunde sind animiert und sprechen in Sprechblasen. Stimmen haben sie keine – die Charakterlaute wurden am 21. September 2026 entfernt. VoiceOver-Ansagen sind davon nicht betroffen.',
  },
  fair: {
    eyebrow: 'Was es dich kostet',
    title: 'Klar gesagt, weil die meisten Spiele es nicht tun.',
    lede: 'OutBrick hat Leben, und es hat Werbung. Hier steht genau, wie beides funktioniert, ohne etwas zu unseren Gunsten zu runden.',
    struck: {
      lead: 'Zwei Sätze, die wir nicht schreiben dürfen, weil sie einmal stimmten und heute nicht mehr: ',
      ads: '„keine Werbung“',
      and: ' und ',
      lives: '„keine Leben“',
      end: '.',
    },
    quote: 'OutBrick ist mit beiden Versprechen gestartet, und beide haben sich geändert. Die Mechanik ist da, aber großzügig eingestellt – und auf dieser Seite sagen wir das.',
    ledger: [
      {
        title: 'Ein Leben kostet nur ein verlorenes Feld – nie das Spielen oder das Lösen.',
        body: 'Um ein Feld zu öffnen, brauchst du ein Leben, verbrauchst aber keins. Ein Feld zu lösen kostet gar nichts. Ein Leben geht nur verloren, wenn ein Versuch ohne Lösung endet. Du hast fünf, mit dem Brick Pass acht, und alle dreißig Minuten kommt eins zurück.',
      },
      {
        title: 'Die erste Zugrücknahme auf jedem Feld ist gratis und geht nie aus.',
        body: 'Darüber hinaus kommen Zugrücknahmen aus einem Vorrat von fünf, der sich alle fünfundzwanzig Minuten um eine auffüllt. Die Zugrücknahme, die dir angeboten wird, wenn ein Feld festsitzt, ist ebenfalls gratis und zählt nicht zum Vorrat.',
      },
      {
        title: 'Das Seil ist ein Zuglimit, keine Uhr.',
        body: 'Jedes Feld zeigt sein Ziel und sein Limit ab dem ersten Tippen. Im ganzen Spiel gibt es keinen Countdown. Wird es knapp, bekommst du vor allem anderen fünf weitere Züge angeboten – für 300 Münzen, dann 500, dann 900 innerhalb eines Versuchs.',
      },
      {
        title: 'Sechs Stellen für Belohnungsvideos, jede freiwillig und begrenzt.',
        body: 'Ein Leben, fünf weitere Züge, zwei Zugrücknahmen, ein Booster, der schon vor dem ersten Zug bereitsteht, die Münzen der Abschlusskarte noch einmal und ein zweiter Dreh am Brick Wheel. Für jedes gilt ein eigenes Tageslimit. Es gibt keine Banner und keine Interstitials, nichts läuft, wofür du nicht selbst auf einen Knopf gedrückt hast, und nichts unterbricht ein Feld. Nein zu sagen kostet dich nichts.',
      },
      {
        title: 'Münzen und Booster sind optional. Ein Abo gibt es nicht.',
        body: '„Werbung entfernen“ schaltet die Werbung für immer ab und zahlt dir trotzdem aus, was die Videos gebracht hätten. Der Brick Pass hebt das Lebenslimit von fünf auf acht und schaltet die Werbung ab, solange du ihn hast.',
      },
    ],
  },
  apple: {
    eyebrow: 'Für Apple gebaut',
    title: 'Ein Kauf. Ein Spielstand. Sechs Geräte zum Spielen.',
    lede: 'iPhone, iPad, Mac, Apple TV, Apple Vision Pro und ein eigenständiges Spiel für die Apple Watch. Bei iCloud angemeldet, macht ein neues Gerät genau dort weiter, wo das alte aufgehört hat – Level, Münzen, Serie, Sammlung, alles. Das liegt in deiner iCloud, nicht bei uns.',
    platforms: 'Plattformen',
    widgets: {
      tag: 'Sperrbildschirm',
      title: 'Live-Aktivitäten & Widgets',
      body: 'Live-Aktivitäten auf dem Sperrbildschirm und in der Dynamic Island, Widgets für den Home-Bildschirm und den Sperrbildschirm – alle lesen denselben gemeinsamen Stand.',
      alt: 'Eine Montage von OutBrick-Widgets für den Home-Bildschirm: aktuelles Level, der Stein des Tages, eine Serie, das Maskottchen des Tages, das Kapitel und das endlose Spielfeld.',
    },
    gameCenter: {
      tag: 'Game Center',
      title: 'Bestenlisten und 57 Erfolge',
      body: 'Bestenlisten über alle Zeiten, siebenundfünfzig Erfolge und Herausforderungen, die du an Leute schicken kannst, die du wirklich kennst.',
    },
    messages: {
      tag: 'Nachrichten',
      title: 'Sticker und Herausforderungen',
      body: 'Eine iMessage-App mit Stickern und Herausforderungen, die du direkt in einen Chat legen kannst, ohne dass jemand dafür Nachrichten verlassen muss.',
    },
    colourBlind: {
      tag: 'Farbenblind',
      title: 'Drei Wege, lesbar zu bleiben',
      body: 'Der Farbenblind-Modus ist standardmäßig an und prägt jedem Stein und jedem Tor ein eigenes Symbol auf, damit Farbe nie das einzige Unterscheidungsmerkmal ist. Farbton, Form und Noppen tragen es alle.',
      alt: 'Ein OutBrick-Spielfeld im Farbenblind-Modus: Jede Steinfarbe trägt ihr eigenes Symbol – Rauten, Quadrate, Kreuze, Sterne – und jedes Tor das passende.',
    },
    accessibility: {
      tag: 'Barrierefreiheit',
      title: 'Spielbar, ohne hinzusehen',
      body: 'Jeder Stein ist ein VoiceOver-Element, das Farbe, Form und Position ansagt, mit einer Aktion für jede Richtung, in die er rutschen kann. Größerer Text skaliert überall mit, und „Bewegung reduzieren“ wird überall beachtet – auch auf dieser Seite.',
    },
    system: {
      tag: 'System',
      title: 'Siri, Kurzbefehle, Spotlight',
      body: 'Bitte Siri um ein Spielfeld, finde eins über Spotlight und spiel auf einem anderen Gerät genau dort weiter, wo die Steine lagen.',
    },
  },
  close: {
    laneClear: 'Feld frei',
    title: 'Löse ein Feld. Geh ein Stück weiter.',
    lede: 'Offline, mit einer Hand, etwa zwei Minuten pro Feld – und es wartet geduldig in der Ecke, bis du Lust hast, noch einen Stein zu schieben.',
  },
};

/* ======================================================================= es */

const es: HomeCopy = {
  meta: {
    title: 'OutBrick — un bulevar hecho de ladrillo',
    description:
      'Un puzle de deslizar ladrillos y ordenarlos por colores: 2000 tableros verificados, 167 pueblos de ladrillo y nueve amigos. Sin reloj y sin conexión. Gratis.',
    ogTitle: 'OutBrick — un bulevar hecho de ladrillo',
    ogDescription:
      '2000 tableros verificados por un solucionador, 167 pueblos de ladrillo, nueve amigos de ladrillo. Un dedo, sin reloj y nada que interrumpa un tablero.',
    ogImageAlt: 'El mapa del Viaje de OutBrick en Garden City, con Bloo, Peach y Sprout',
  },
  appDescription:
    'Un puzle de ladrillos deslizantes para ordenar por colores: 2000 tableros verificados por un solucionador en 100 capítulos, un Viaje por 167 pueblos de ladrillo y nueve amigos de ladrillo.',
  headline: [
    { word: 'Un', line: 0 },
    { word: 'bulevar', line: 0 },
    { word: 'hecho', line: 1 },
    { word: 'de', line: 1 },
    { word: 'ladrillo', line: 2, slab: true },
  ],
  stop: '.',
  hero: {
    eyebrow: 'Gratis en el App Store',
    lede: 'Desliza un ladrillo y avanzará hasta que algo lo detenga. Saca cada ladrillo por la puerta de su color y el tablero quedará despejado. Esa es toda la regla, y se aprende en unos cinco segundos.',
    walk: 'Recorre un pueblo',
    facts: ['2000 tableros con solución verificada', '167 pueblos de ladrillo', 'Sin reloj, en ninguna parte', 'Se juega sin conexión'],
    phoneAlt:
      'El mapa del Viaje en Garden City: un camino adoquinado de ladrillo serpentea entre casas y árboles de ladrillos de juguete, con marcadores de nivel numerados a lo largo.',
  },
  rule: {
    eyebrow: 'Una sola regla',
    title: 'Un tablero parece imposible, y no lo es.',
    lede: 'Cada tablero está lleno hasta los bordes. Un movimiento acertado abre un hueco y el montón se va desbloqueando por partes. Un solucionador despejó los 2000 tableros antes de publicar ninguno, así que nada de lo que encuentres es un callejón sin salida.',
    boardLabel: 'Prueba un tablero de OutBrick: saca cada ladrillo por su puerta',
    steps: [
      {
        title: 'Desliza un ladrillo',
        body: 'Llega tan lejos como lo arrastres, hasta que algo lo detenga: una pared, un vecino, una puerta que rechaza su color.',
        alt: 'Un tablero de OutBrick repleto al empezar un nivel, con ladrillos llenando todo el marco.',
      },
      {
        title: 'Encuentra la puerta',
        body: 'Puertas de colores, llaves y candados, ladrillos congelados que necesitan tres deslizamientos para descongelarse, generadores, cintas transportadoras, cajas y arenas con forma de H, de L o de cruz.',
        alt: 'Un tablero de OutBrick a medio resolver, con llaves, candados, cajas y puertas de colores alrededor del borde.',
      },
      {
        title: 'Supera el objetivo',
        body: 'Despejar un tablero da una estrella. Despejarlo dentro del objetivo de movimientos del solucionador da dos. Hacerlo sin deshacer ni una sola vez da tres.',
        alt: 'La tarjeta de victoria al despejar un tablero de OutBrick, con estrellas y monedas.',
      },
    ],
    wallLabel: 'OutBrick en cifras',
    plaques: [
      { shown: '2000', label: 'tableros, todos con solución demostrada' },
      { shown: '100', label: 'capítulos de veinte niveles' },
      { shown: '0', label: 'relojes, temporizadores o cuentas atrás' },
      { shown: '8', label: 'elementos del tablero: puertas, llaves, hielo, cajas y más' },
    ],
  },
  journey: {
    eyebrow: 'El Viaje',
    title: 'Nada en este camino es un dibujo pintado.',
    lede: 'Los 167 pueblos del bulevar están construidos pieza a pieza con ladrillos: el suelo, el camino, los árboles, las farolas, los monumentos. Veintiocho lugares les dan forma, cada uno con su paleta, su pavimento, sus marcadores de nivel y su movimiento, y una capa de variaciones hace que cada repetición parezca un lugar distinto.',
    windowLabel: 'Los 28 temas de pueblos del Viaje de OutBrick. Desplázate o arrastra hacia los lados para recorrer el camino.',
    villageAlt: (name) => `${name}, un pueblo de ladrillo en el mapa del Viaje de OutBrick.`,
    levelRange: (first, last) => `Niveles ${first}–${last}`,
    passesLede: 'El camino da seis vueltas hasta el nivel 2000, y cada vuelta ocurre a una hora distinta del día.',
    notes: [
      {
        tag: 'Doce niveles',
        title: 'Un pueblo es un lugar, no un capítulo',
        body: 'Cada pueblo tiene doce niveles y vale treinta y seis estrellas. Los capítulos se cuentan aparte: siguen siendo cien, de veinte niveles cada uno.',
      },
      {
        tag: 'Construido, no pintado',
        title: 'Un mismo lenguaje de ladrillos',
        body: 'Cada losa tiene su propio fondo, un frente redondeado, una franja de luz arriba y una junta abajo, con espigas solo donde la parte de arriba queda a la vista. Por eso veintiocho lugares distintos se leen como un solo mundo.',
      },
      {
        tag: 'Más allá de 2000',
        title: 'El camino sigue',
        body: 'Pasado el tablero dos mil, la misma curva sigue generando direcciones nuevas, resueltas en tu propio dispositivo antes de que llegues a verlas.',
      },
    ],
  },
  cast: {
    eyebrow: 'Nueve amigos de ladrillo',
    title: 'Viven en el mismo mundo material que tú.',
    lede: 'Personajes 3D de verdad, no pegatinas encima de un puzle. Tres comparten tu pantalla de inicio a la vez y el reparto va cambiando mientras juegas: uno se despide y se marcha, otro llega y saluda. Reaccionan cuando los tocas, te siguen con la mirada al inclinar el teléfono y cada uno tiene su propio baile de victoria.',
    meet: 'Conoce a los amigos',
    lines: {
      bloo: 'Mira su reloj entre tablero y tablero, y da una vuelta cuando despejas uno.',
      peach: 'Se preocupa de principio a fin y lo celebra cuando por fin se abre el montón.',
      sprout: 'Hace la pregunta que nadie más hizo. Dos saltitos y una vuelta cuando sale bien.',
      bricko: 'Cuenta sus repeticiones, levanta el pulgar y saca músculo cuando despejas.',
      zippy: 'Pierde el hilo a mitad de frase. Gira si lo tocas y da tres saltos cuando ganas.',
      vio: 'Puntúa tus movimientos como si fueran canciones y baila al ritmo de 112 bpm.',
      moss: 'Refranes de granja, botas de trabajo y un aplauso lento cuando te lo ganas.',
      flurry: 'Té, bufandas y un saludo suave. La punta de la bufanda se balancea un compás tarde.',
      poppy: 'Cuenta cuentos de hadas y agita una varita que estalla en estrellas.',
    },
    note: 'Los amigos se mueven y hablan con bocadillos de texto. No tienen voz: las vocalizaciones de los personajes se eliminaron el 21 de septiembre de 2026. Los anuncios de VoiceOver siguen igual.',
  },
  fair: {
    eyebrow: 'Lo que te cuesta',
    title: 'Dicho claramente, porque la mayoría de los juegos no lo hace.',
    lede: 'OutBrick tiene vidas y tiene publicidad. Así funciona exactamente cada cosa, sin redondear nada a nuestro favor.',
    struck: {
      lead: 'Dos frases que no podemos escribir, porque fueron ciertas una vez y ya no lo son: ',
      ads: '«sin anuncios»',
      and: ' y ',
      lives: '«sin vidas»',
      end: '.',
    },
    quote: 'OutBrick salió con ambas promesas y las dos cambiaron. La mecánica está ahí, pero ajustada con generosidad, y esta página es donde lo contamos.',
    ledger: [
      {
        title: 'Una vida es el precio de perder un tablero, nunca de jugarlo ni de despejarlo.',
        body: 'Para abrir un tablero necesitas una vida, pero no gastas ninguna. Despejarlo no cuesta nada. Solo pierdes una vida cuando un intento termina sin despejar el tablero. Tienes cinco, ocho con el Brick Pass, y recuperas una cada treinta minutos.',
      },
      {
        title: 'Deshacer la primera vez en cada tablero es gratis y nunca se agota.',
        body: 'A partir de ahí, cada vez que deshaces se tira de una reserva de cinco que recupera una cada veinticinco minutos. La opción de deshacer que se ofrece cuando un tablero se atasca también es gratis y no toca la reserva.',
      },
      {
        title: 'La cuerda es un límite de movimientos, no un reloj.',
        body: 'Cada tablero muestra su objetivo y su límite desde el primer toque. No hay ninguna cuenta atrás en todo el juego. Si te quedas corto, antes que nada se te ofrecen cinco movimientos más: 300 monedas, luego 500 y luego 900 dentro de un mismo intento.',
      },
      {
        title: 'Seis espacios de vídeo con recompensa, todos opcionales y con límite.',
        body: 'Una vida, cinco movimientos más, dos acciones de deshacer, un potenciador activado antes del primer movimiento, las monedas de la tarjeta de victoria pagadas otra vez y un segundo giro de la Brick Wheel. Cada uno tiene su propio límite diario. No hay banners ni anuncios intersticiales, no se reproduce nada que no hayas pedido pulsando un botón y nada interrumpe un tablero. Decir que no, no te cuesta nada.',
      },
      {
        title: 'Las monedas y los potenciadores son opcionales. No hay suscripción.',
        body: '«Quitar anuncios» desactiva la publicidad para siempre y te sigue pagando lo que te habrían dado los vídeos. El Brick Pass sube el límite de vidas de cinco a ocho y desactiva la publicidad mientras lo tengas.',
      },
    ],
  },
  apple: {
    eyebrow: 'Hecho para Apple',
    title: 'Una compra. Un progreso. Seis sitios donde jugar.',
    lede: 'iPhone, iPad, Mac, Apple TV, Apple Vision Pro y un juego independiente para Apple Watch. Con tu sesión de iCloud iniciada, un dispositivo nuevo continúa exactamente donde lo dejó el anterior: nivel, monedas, racha, Colección y todo lo demás. Vive en tu iCloud, no en el nuestro.',
    platforms: 'Plataformas',
    widgets: {
      tag: 'Pantalla bloqueada',
      title: 'Actividades en vivo y widgets',
      body: 'Actividades en vivo en la pantalla bloqueada y en la Dynamic Island, widgets para la pantalla de inicio y accesorios para la pantalla bloqueada, todos leyendo la misma instantánea compartida.',
      alt: 'Un montaje de widgets de OutBrick para la pantalla de inicio: nivel actual, el ladrillo del día, una racha, la mascota del día, el capítulo y el tablero infinito.',
    },
    gameCenter: {
      tag: 'Game Center',
      title: 'Clasificaciones y 57 logros',
      body: 'Tablas de clasificación históricas, cincuenta y siete logros y retos que puedes enviar a alguien que conoces de verdad.',
    },
    messages: {
      tag: 'Mensajes',
      title: 'Stickers y retos',
      body: 'Una app de iMessage con stickers y retos que puedes soltar directamente en una conversación, sin que nadie tenga que salir de Mensajes.',
    },
    colourBlind: {
      tag: 'Daltonismo',
      title: 'Tres canales de legibilidad',
      body: 'El modo para daltónicos viene activado de serie y estampa un símbolo distinto en cada ladrillo y cada puerta, para que el color nunca sea la única pista. El tono, la forma y las espigas transmiten la información.',
      alt: 'Un tablero de OutBrick en modo para daltónicos: cada color de ladrillo lleva su propio símbolo (rombos, cuadrados, cruces, estrellas) y cada puerta lleva el suyo.',
    },
    accessibility: {
      tag: 'Accesibilidad',
      title: 'Se puede jugar sin verlo',
      body: 'Cada ladrillo es un elemento de VoiceOver que dice su color, su forma y su posición, con una acción para cada dirección en la que puede deslizarse. Texto más grande se aplica en todo el juego y Reducir movimiento se respeta en todas partes, también en esta página.',
    },
    system: {
      tag: 'Sistema',
      title: 'Siri, Atajos, Spotlight',
      body: 'Pídele un tablero a Siri, encuentra uno en Spotlight y retoma una partida en otro dispositivo justo donde estaban los ladrillos.',
    },
  },
  close: {
    laneClear: 'Tablero despejado',
    title: 'Despeja un tablero. Avanza un poco más.',
    lede: 'Sin conexión, con una mano, unos dos minutos por tablero, y siempre dispuesto a esperar en un rincón hasta que te apetezca mover un ladrillo más.',
  },
};

/* ======================================================================= ja */

const ja: HomeCopy = {
  meta: {
    title: 'OutBrick — ブロックでできた街をめぐるスライドパズル',
    description:
      'ブロックをスライドして同じ色のゲートから出すパズル。解けることを確認済みの2,000ステージ、167の村、9人のなかま。時間制限なし、オフラインで遊べます。',
    ogTitle: 'OutBrick — ブロックでできた街をめぐるスライドパズル',
    ogDescription:
      'ソルバーで検証済みの2,000ステージ、ブロックでできた167の村、9人のなかま。指1本で、時間制限なし。ステージの邪魔をするものは何もありません。',
    ogImageAlt: 'Garden CityにあるOutBrickのジャーニーマップと、Bloo、Peach、Sprout',
  },
  appDescription:
    'ブロックをスライドして色分けするパズル。100チャプターに収めたソルバー検証済みの2,000ステージ、ブロックでできた167の村をめぐるジャーニー、そして9人のブロックのなかま。',
  // One "word" per line: Japanese sets no spaces between words.
  headline: [
    { word: '大通りまで、', line: 0 },
    { word: 'ぜんぶ', line: 1 },
    { word: 'ブロック', line: 2, slab: true },
  ],
  stop: '。',
  hero: {
    eyebrow: 'App Storeで無料',
    lede: 'ブロックをスライドすると、何かにぶつかるまでスーッと進みます。すべてのブロックを同じ色のゲートから外に出せば、ステージクリア。ルールはこれだけ。5秒もあれば覚えられます。',
    walk: '村を歩いてみる',
    facts: ['解けることを確認済みの2,000ステージ', 'ブロックでできた167の村', '時間制限はどこにもなし', 'オフラインで遊べる'],
    phoneAlt:
      'Garden Cityのジャーニーマップ。おもちゃのブロックでできた家や木々のあいだを、ブロック敷きの道がくねくねと続き、道沿いに番号つきのレベルマーカーが並んでいます。',
  },
  rule: {
    eyebrow: '覚えるルールはひとつだけ',
    title: '無理そうに見えて、ちゃんと解ける。',
    lede: 'どのステージも端までぎっしり。正しい一手ですき間ができ、山が少しずつほどけていきます。2,000ステージすべてをリリース前にソルバーが解いているので、行き止まりはひとつもありません。',
    boardLabel: 'OutBrickのステージを遊んでみる：すべてのブロックをゲートから出そう',
    steps: [
      {
        title: 'ブロックをスライド',
        body: 'ドラッグした方向へ、何かに止められるまで進みます。止めるのは壁か、となりのブロックか、色の合わないゲートです。',
        alt: 'レベル開始時のOutBrickのステージ。ブロックが画面いっぱいに詰まっています。',
      },
      {
        title: 'ゲートを見つける',
        body: '色のゲート、カギと錠前、3回スライドしないと溶けない凍ったブロック、ジェネレーター、ベルトコンベア、木箱。そしてH字、L字、十字形のフィールドも。',
        alt: 'プレイ途中のOutBrickのステージ。まわりにカギ、錠前、木箱、色つきのゲートが並んでいます。',
      },
      {
        title: '目標を超える',
        body: 'クリアするとスター1個。ソルバーが決めた目標手数以内でクリアすると2個。さらにアンドゥを一度も使わなければ3個です。',
        alt: 'OutBrickのステージをクリアしたあとのクリア画面。スターとコインが表示されています。',
      },
    ],
    wallLabel: '数字で見るOutBrick',
    plaques: [
      { shown: '2,000', label: 'ステージ。すべて解けることを証明済み' },
      { shown: '100', label: 'チャプター。各20レベル' },
      { shown: '0', label: '時計、タイマー、カウントダウンの数' },
      { shown: '8', label: '種類のギミック：ゲート、カギ、氷、木箱など' },
    ],
  },
  journey: {
    eyebrow: 'ジャーニー',
    title: 'この道に、描いただけの絵はひとつもありません。',
    lede: '大通り沿いの167の村は、地面も道も、木も街灯も名所も、すべてブロックをひとつずつ組み上げてつくっています。舞台となる28の場所には、それぞれ独自の配色、石畳、レベルマーカー、動きがあり、バリエーションの仕組みによって、同じ場所をもう一度通っても毎回ちがう景色に見えます。',
    windowLabel: 'OutBrickのジャーニーにある28の村のテーマ。スクロールするか横にドラッグして道を歩けます。',
    villageAlt: (name) => `${name}。OutBrickのジャーニーマップにある、ブロックでできた村。`,
    levelRange: (first, last) => `レベル${first}〜${last}`,
    passesLede: 'レベル2,000にたどり着くまでに道は6周し、1周ごとに一日の時間帯が変わります。',
    notes: [
      {
        tag: '12レベル',
        title: '村は場所であって、チャプターではありません',
        body: 'ひとつの村には12のレベルがあり、スターは36個。チャプターは別の数え方で、こちらは全100チャプター、各20レベルです。',
      },
      {
        tag: '描かずに、組み立てる',
        title: 'ひとつのブロックの文法',
        body: 'どのプレートにも厚みがあり、角の丸い正面、上面のハイライト、足もとの継ぎ目があります。ポッチがあるのは上面が見えている所だけ。だから28のちがう場所が、ひとつの世界として見えるのです。',
      },
      {
        tag: '2,000の先へ',
        title: '道はまだ続く',
        body: '2,000番目のステージを過ぎても、同じカーブが新しい番地を生み出し続けます。あなたが目にする前に、あなたのデバイスの中で解かれたステージです。',
      },
    ],
  },
  cast: {
    eyebrow: '9人のブロックのなかま',
    title: 'みんな、あなたと同じ手ざわりの世界に住んでいます。',
    lede: 'パズルの上に貼ったシールではなく、本物の3Dキャラクター。ホーム画面には一度に3人がいて、遊ぶうちに顔ぶれが入れ替わります。ひとりが手をふって去っていくと、別のひとりが「こんにちは」とやってくる。つつくと反応し、スマホを傾けると目で追いかけてきて、それぞれ自分だけの勝利ポーズを持っています。',
    meet: 'なかまに会う',
    lines: {
      bloo: 'ステージの合間に腕時計をチラリ。クリアするとくるっと回ります。',
      peach: 'ずっとハラハラしっぱなし。山がやっとほどけると大喜び。',
      sprout: 'だれも聞かなかったことを聞いてくる子。うまくいくと、ぴょんぴょん跳ねてくるり。',
      bricko: '筋トレの回数を数えて、グッドサイン。クリアすると力こぶを見せつけます。',
      zippy: '話の途中で、なにを言いたかったか忘れちゃう。つつくと回って、勝つと3段ジャンプ。',
      vio: 'あなたの手を曲みたいに採点して、112 BPMのビートでノリノリ。',
      moss: '農場のことわざと作業ブーツ。ちゃんとできたら、ゆっくり拍手をひとつ。',
      flurry: '紅茶とマフラーと、やさしく手をふる仕草。マフラーの端がワンテンポ遅れて揺れます。',
      poppy: 'おとぎ話が得意。ふると星がはじける魔法のステッキを持っています。',
    },
    note: 'なかまたちはアニメーションで動き、吹き出しのテキストで話します。声はありません。キャラクターのボイスは2026年9月21日に削除されました。VoiceOverの読み上げはこれまでどおりです。',
  },
  fair: {
    eyebrow: 'あなたが払うもの',
    title: '多くのゲームが言わないことを、はっきりと。',
    lede: 'OutBrickにはライフがあり、広告もあります。どちらもどう動くのか、こちらに都合よく丸めずに正確に説明します。',
    struck: {
      lead: '私たちが書いてはいけない言葉が2つあります。かつては本当でも、今はそうではないからです。',
      ads: '「広告なし」',
      and: 'と',
      lives: '「ライフなし」',
      end: '。',
    },
    quote: 'OutBrickはこの2つの約束とともに登場し、どちらも変わりました。仕組みをなくすのではなく、気前よく調整しています。そのことを伝えるのがこのページです。',
    ledger: [
      {
        title: 'ライフを失うのはステージに負けたときだけ。遊んでもクリアしても減りません。',
        body: 'ステージを始めるにはライフが必要ですが、消費はしません。クリアしても何も減りません。ライフが減るのは、クリアできずに挑戦が終わったときだけ。上限は5つ（Brick Passがあれば8つ）で、30分ごとに1つ回復します。',
      },
      {
        title: '各ステージ最初のアンドゥは無料で、なくなることもありません。',
        body: 'それ以降のアンドゥは5回分のタンクから使い、25分ごとに1回分ずつ回復します。ステージが詰まったときに提案されるアンドゥも無料で、タンクとは別枠です。',
      },
      {
        title: 'ロープは手数の上限であって、時計ではありません。',
        body: 'どのステージも、最初のタップから目標手数と上限が表示されます。ゲーム中にカウントダウンは一切ありません。手数が足りなくなったら、まず「あと5手」が提案されます。1回の挑戦の中で、300コイン、次は500、その次は900です。',
      },
      {
        title: 'リワード動画の枠は6つ。すべて任意で、回数制限つき。',
        body: 'ライフ1つ、あと5手、アンドゥ2回、最初の一手の前に使えるブースター、クリア画面のコインをもう一度、そしてBrick Wheelをもう1回。それぞれに1日の上限があります。バナー広告もインタースティシャル広告もなく、あなたがボタンを押さない限り何も再生されず、ステージの邪魔をするものもありません。断っても何も損はしません。',
      },
      {
        title: 'コインとブースターは任意です。サブスクリプションはありません。',
        body: '「広告の削除」を購入すると広告は永久にオフになり、動画で得られたはずの報酬もそのまま受け取れます。Brick Passはライフの上限を5から8に増やし、持っているあいだは広告をオフにします。',
      },
    ],
  },
  apple: {
    eyebrow: 'Appleのためにつくりました',
    title: '一度の購入で、進行はひとつ。遊べる場所は6つ。',
    lede: 'iPhone、iPad、Mac、Apple TV、Apple Vision Pro、そして単体で遊べるApple Watch版。iCloudにサインインしていれば、新しいデバイスでも前のデバイスの続きからそのまま遊べます。レベルもコインも連続記録もコレクションも、すべて。データはあなたのiCloudにあり、私たちのところにはありません。',
    platforms: 'プラットフォーム',
    widgets: {
      tag: 'ロック画面',
      title: 'ライブアクティビティとウィジェット',
      body: 'ロック画面とDynamic Islandのライブアクティビティ、ホーム画面のウィジェット、ロック画面のウィジェット。すべて同じ共有データを読み取ります。',
      alt: 'OutBrickのホーム画面ウィジェットを並べた画像：現在のレベル、今日のブロック、連続記録、今日のマスコット、チャプター、エンドレスステージ。',
    },
    gameCenter: {
      tag: 'Game Center',
      title: 'リーダーボードと57の達成項目',
      body: '通算のリーダーボード、57の達成項目、そして本当に知っている人に送れるチャレンジ。',
    },
    messages: {
      tag: 'メッセージ',
      title: 'ステッカーとチャレンジ',
      body: 'ステッカーとチャレンジが入ったiMessage App。だれもメッセージを離れることなく、そのままスレッドに送れます。',
    },
    colourBlind: {
      tag: '色覚サポート',
      title: '3つの見分け方',
      body: '色覚サポートモードは最初からオン。すべてのブロックとゲートに別々の記号がつくので、色だけで見分ける必要はありません。色合い、形、ポッチのどれでも区別できます。',
      alt: '色覚サポートモードのOutBrickのステージ。ブロックの色ごとにひし形、四角、バツ、星などの記号がつき、ゲートにも同じ記号がついています。',
    },
    accessibility: {
      tag: 'アクセシビリティ',
      title: '見えなくても遊べる',
      body: 'すべてのブロックがVoiceOverの要素になっていて、色、形、位置を読み上げ、スライドできる方向ごとにアクションがあります。「さらに大きな文字」はすべての画面に反映され、「視差効果を減らす」も、このページを含めてどこでも尊重されます。',
    },
    system: {
      tag: 'システム',
      title: 'Siri、ショートカット、Spotlight',
      body: 'Siriにステージをリクエストしたり、Spotlightで探したり。別のデバイスでも、ブロックがあった場所からそのまま続けられます。',
    },
  },
  close: {
    laneClear: 'ステージクリア',
    title: 'ステージをクリアして、もう少し先へ。',
    lede: 'オフラインで、片手で、1ステージ2分ほど。もうひとつブロックを動かしたくなるまで、すみっこで気長に待っていてくれます。',
  },
};

export const homeCopy: Record<Locale, HomeCopy> = { en, fr, de, es, ja };
