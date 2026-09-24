/**
 * The play guide's words (/play and its translations). `en` is the original
 * copy of app/play/page.tsx, verbatim; the loop section uses the same words as
 * the home page's ledger (lib/i18n/home.ts) in every language, so the two
 * pages never drift apart.
 */

import type { Locale } from './locales';

type Row = { title: string; body: string };

export type PlayCopy = {
  meta: { title: string; description: string };
  eyebrow: string;
  /** "Slide bricks " + <span class="gold">"out."</span> */
  title: [string, string];
  lede: string;
  /** Each key line: the bold part, then the rest. */
  keys: [[string, string], [string, string], [string, string]];
  boardLabel: string;
  loop: { eyebrow: string; title: string; lede: string; rows: [Row, Row, Row, Row, Row] };
  meet: { eyebrow: string; title: string; lede: string; nouns: [string, string][] };
  close: { title: string; lede: string };
};

const en: PlayCopy = {
  meta: {
    title: 'How to play OutBrick: moves, stars, lives and undos',
    description:
      'Play an OutBrick board right here, then learn the rest of the loop: targets, move limits, stars, boosters, and what a life and an undo actually cost.',
  },
  eyebrow: 'The play guide',
  title: ['Slide bricks ', 'out.'],
  lede: 'Slide a brick and it glides until something stops it. Get every brick out through the gate that matches its colour, and the board is clear. That is the whole rule — try it on the board here, three boards from easy to a proper knot.',
  keys: [
    ['Drag', ' a brick in any direction.'],
    ['Keyboard:', ' Tab to a brick, then Shift + an arrow key.'],
    ['Undo', ' is unlimited here; in the game the first one per board is free.'],
  ],
  boardLabel: 'Play an OutBrick board',
  loop: {
    eyebrow: 'Around the board',
    title: 'The loop, with nothing rounded in our favour.',
    lede: 'The full game adds a move limit, stars, lives and undos. Here is exactly how each one works.',
    rows: [
      {
        title: 'The rope is a move limit, not a clock',
        body: 'Every board prints its target and its limit from the first tap. There is no countdown anywhere in the game. Run low and you are offered five more moves before anything else.',
      },
      {
        title: 'Three stars, said plainly',
        body: 'A clear earns one star. Clearing inside the solver’s own move target earns two. Doing that without a single undo earns three.',
      },
      {
        title: 'The first undo on every board is free',
        body: 'Beyond that, undos come from a tank of five that refills one every twenty-five minutes. The undo offered when a board wedges is free too, and sits outside the tank.',
      },
      {
        title: 'A life goes only when an attempt fails',
        body: 'Opening a board needs a life and spends none, and clearing one costs nothing. You hold five, eight with the Brick Pass, and one comes back every thirty minutes.',
      },
      {
        title: 'Boosters and videos are optional',
        body: 'Coins buy boosters; rewarded videos are opt-in, capped, and never interrupt a board. Saying no costs you nothing.',
      },
    ],
  },
  meet: {
    eyebrow: 'What you will meet',
    title: 'What 2,000 boards are built from.',
    lede: 'A solver cleared every one of the 2,000 boards before any of them shipped, so nothing you meet is a dead end. These are the pieces they are built from.',
    nouns: [
      ['Colour gates', 'A brick leaves only through the gate that matches its colour.'],
      ['Keys and locks', 'Pairs that open part of the board once the right move is made.'],
      ['Frozen bricks', 'Take three slides to thaw.'],
      ['Generators', 'Bring more bricks onto the board.'],
      ['Conveyors', 'Move what sits on them.'],
      ['Crates', 'Obstacles that shape which lanes are open.'],
      ['Shaped arenas', 'Boards shaped like an H, an L or a cross.'],
    ],
  },
  close: {
    title: 'Liked that? The game has 2,000 more.',
    lede: 'A Journey of 167 brick-built villages and nine brick friends. Free on the App Store, and it plays offline.',
  },
};

const fr: PlayCopy = {
  meta: {
    title: 'Comment jouer à OutBrick : coups, étoiles, vies et annulations',
    description:
      'Jouez un plateau OutBrick ici, puis découvrez le reste : objectifs, limite de coups, étoiles, boosters, et ce que coûtent vraiment une vie et une annulation.',
  },
  eyebrow: 'Le guide du jeu',
  title: ['Faites glisser, ', 'faites sortir.'],
  lede: 'Faites glisser une brique : elle file jusqu’à ce que quelque chose l’arrête. Sortez chaque brique par la porte de sa couleur, et le plateau est vidé. C’est toute la règle — essayez-la ici, sur trois plateaux qui vont du plus simple au vrai casse-tête.',
  keys: [
    ['Faites glisser', ' une brique dans n’importe quelle direction.'],
    ['Au clavier :', ' Tab jusqu’à une brique, puis Maj + une flèche.'],
    ['Annuler', ' est illimité ici ; dans le jeu, la première annulation de chaque plateau est gratuite.'],
  ],
  boardLabel: 'Jouer un plateau OutBrick',
  loop: {
    eyebrow: 'Autour du plateau',
    title: 'La boucle de jeu, sans rien arrondir en notre faveur.',
    lede: 'Le jeu complet ajoute une limite de coups, des étoiles, des vies et des annulations. Voici exactement comment fonctionne chacune.',
    rows: [
      {
        title: 'La corde est une limite de coups, pas un chrono',
        body: 'Chaque plateau affiche son objectif et sa limite dès la première touche. Il n’y a aucun compte à rebours dans tout le jeu. Si vous êtes à court, on vous propose d’abord cinq coups de plus.',
      },
      {
        title: 'Trois étoiles, en toute clarté',
        body: 'Vider un plateau rapporte une étoile. Le vider dans l’objectif de coups fixé par le solveur en rapporte deux. Y parvenir sans une seule annulation en rapporte trois.',
      },
      {
        title: 'La première annulation de chaque plateau est gratuite',
        body: 'Au-delà, les annulations puisent dans une réserve de cinq, qui en regagne une toutes les vingt-cinq minutes. L’annulation proposée quand un plateau se bloque est gratuite elle aussi, et ne touche pas à la réserve.',
      },
      {
        title: 'Une vie ne part que si une tentative échoue',
        body: 'Ouvrir un plateau demande une vie mais n’en consomme aucune, et le vider ne coûte rien. Vous en avez cinq, huit avec le Brick Pass, et il en revient une toutes les trente minutes.',
      },
      {
        title: 'Boosters et vidéos sont facultatifs',
        body: 'Les pièces servent à acheter des boosters ; les vidéos récompensées sont facultatives, plafonnées, et n’interrompent jamais un plateau. Dire non ne vous coûte rien.',
      },
    ],
  },
  meet: {
    eyebrow: 'Ce que vous rencontrerez',
    title: 'De quoi sont faits 2 000 plateaux.',
    lede: 'Un solveur a vidé chacun des 2 000 plateaux avant la sortie du jeu : rien de ce que vous rencontrerez n’est une impasse. Voici les pièces dont ils sont faits.',
    nouns: [
      ['Portes de couleur', 'Une brique ne sort que par la porte de sa couleur.'],
      ['Clés et cadenas', 'Des paires qui ouvrent une partie du plateau une fois le bon coup joué.'],
      ['Briques gelées', 'Il faut trois glissements pour les dégeler.'],
      ['Générateurs', 'Font entrer de nouvelles briques sur le plateau.'],
      ['Tapis roulants', 'Déplacent ce qui est posé dessus.'],
      ['Caisses', 'Des obstacles qui décident des couloirs ouverts.'],
      ['Arènes façonnées', 'Des plateaux en forme de H, de L ou de croix.'],
    ],
  },
  close: {
    title: 'Ça vous a plu ? Le jeu en compte 2 000 de plus.',
    lede: 'Un Voyage à travers 167 villages en briques, avec neuf amis en briques. Gratuit sur l’App Store, et il fonctionne hors ligne.',
  },
};

const de: PlayCopy = {
  meta: {
    title: 'So spielst du OutBrick: Züge, Sterne, Leben, Zugrücknahmen',
    description:
      'Spiel hier direkt ein OutBrick-Feld und lerne dann den Rest: Ziele, Zuglimits, Sterne, Booster und was ein Leben und eine Zugrücknahme wirklich kosten.',
  },
  eyebrow: 'Die Spielanleitung',
  title: ['Schieb die Steine ', 'raus.'],
  lede: 'Schieb einen Stein an, und er rutscht, bis ihn etwas aufhält. Bring jeden Stein durch das Tor in seiner Farbe hinaus, und das Feld ist frei. Das ist die ganze Regel – probier sie hier aus, auf drei Feldern von leicht bis richtig verzwickt.',
  keys: [
    ['Zieh', ' einen Stein in eine beliebige Richtung.'],
    ['Tastatur:', ' Mit Tab zu einem Stein, dann Umschalt + eine Pfeiltaste.'],
    ['Rückgängig', ' ist hier unbegrenzt; im Spiel ist die erste Zugrücknahme pro Feld gratis.'],
  ],
  boardLabel: 'Ein OutBrick-Spielfeld spielen',
  loop: {
    eyebrow: 'Rund ums Spielfeld',
    title: 'Der Ablauf, ohne etwas zu unseren Gunsten zu runden.',
    lede: 'Das komplette Spiel bringt ein Zuglimit, Sterne, Leben und Zugrücknahmen mit. So funktioniert jedes davon – ganz genau.',
    rows: [
      {
        title: 'Das Seil ist ein Zuglimit, keine Uhr',
        body: 'Jedes Feld zeigt sein Ziel und sein Limit ab dem ersten Tippen. Im ganzen Spiel gibt es keinen Countdown. Wird es knapp, bekommst du vor allem anderen fünf weitere Züge angeboten.',
      },
      {
        title: 'Drei Sterne, klar erklärt',
        body: 'Ein gelöstes Feld bringt einen Stern. Bleibst du dabei innerhalb der Zugvorgabe des Solvers, gibt es zwei. Schaffst du das ohne eine einzige Zugrücknahme, gibt es drei.',
      },
      {
        title: 'Die erste Zugrücknahme auf jedem Feld ist gratis',
        body: 'Darüber hinaus kommen Zugrücknahmen aus einem Vorrat von fünf, der sich alle fünfundzwanzig Minuten um eine auffüllt. Die Zugrücknahme, die dir angeboten wird, wenn ein Feld festsitzt, ist ebenfalls gratis und zählt nicht zum Vorrat.',
      },
      {
        title: 'Ein Leben geht nur verloren, wenn ein Versuch scheitert',
        body: 'Um ein Feld zu öffnen, brauchst du ein Leben, verbrauchst aber keins, und ein Feld zu lösen kostet nichts. Du hast fünf, mit dem Brick Pass acht, und alle dreißig Minuten kommt eins zurück.',
      },
      {
        title: 'Booster und Videos sind freiwillig',
        body: 'Mit Münzen kaufst du Booster; Belohnungsvideos sind freiwillig, begrenzt und unterbrechen nie ein Feld. Nein zu sagen kostet dich nichts.',
      },
    ],
  },
  meet: {
    eyebrow: 'Was dich erwartet',
    title: 'Woraus 2.000 Spielfelder gebaut sind.',
    lede: 'Ein Solver hat jedes der 2.000 Felder gelöst, bevor auch nur eines erschienen ist – du triffst also nie auf eine Sackgasse. Das sind die Bausteine, aus denen sie bestehen.',
    nouns: [
      ['Farbige Tore', 'Ein Stein verlässt das Feld nur durch das Tor in seiner Farbe.'],
      ['Schlüssel und Schlösser', 'Paare, die einen Teil des Feldes öffnen, sobald der richtige Zug gemacht ist.'],
      ['Gefrorene Steine', 'Brauchen drei Schübe, bis sie auftauen.'],
      ['Generatoren', 'Bringen neue Steine aufs Feld.'],
      ['Förderbänder', 'Bewegen, was auf ihnen liegt.'],
      ['Kisten', 'Hindernisse, die bestimmen, welche Bahnen offen sind.'],
      ['Geformte Arenen', 'Felder in Form eines H, eines L oder eines Kreuzes.'],
    ],
  },
  close: {
    title: 'Hat’s gefallen? Im Spiel warten 2.000 weitere.',
    lede: 'Eine Reise durch 167 Dörfer aus Bausteinen, mit neun Freunden aus Steinen. Kostenlos im App Store, und es läuft auch offline.',
  },
};

const es: PlayCopy = {
  meta: {
    title: 'Cómo jugar a OutBrick: movimientos, estrellas, vidas y deshacer',
    description:
      'Juega un tablero de OutBrick y descubre el resto: objetivos, límite de movimientos, estrellas, potenciadores y lo que cuestan de verdad una vida y deshacer.',
  },
  eyebrow: 'Cómo se juega',
  title: ['Desliza los ladrillos ', 'fuera.'],
  lede: 'Desliza un ladrillo y avanzará hasta que algo lo detenga. Saca cada ladrillo por la puerta de su color y el tablero quedará despejado. Esa es toda la regla: pruébala aquí, en tres tableros que van de lo fácil a un auténtico rompecabezas.',
  keys: [
    ['Arrastra', ' un ladrillo en cualquier dirección.'],
    ['Teclado:', ' Tab hasta un ladrillo y luego Mayúsculas + una flecha.'],
    ['Deshacer', ' es ilimitado aquí; en el juego, la primera vez en cada tablero es gratis.'],
  ],
  boardLabel: 'Juega un tablero de OutBrick',
  loop: {
    eyebrow: 'Alrededor del tablero',
    title: 'El ciclo de juego, sin redondear nada a nuestro favor.',
    lede: 'El juego completo añade un límite de movimientos, estrellas, vidas y la opción de deshacer. Así funciona exactamente cada cosa.',
    rows: [
      {
        title: 'La cuerda es un límite de movimientos, no un reloj',
        body: 'Cada tablero muestra su objetivo y su límite desde el primer toque. No hay ninguna cuenta atrás en todo el juego. Si te quedas corto, antes que nada se te ofrecen cinco movimientos más.',
      },
      {
        title: 'Tres estrellas, sin rodeos',
        body: 'Despejar un tablero da una estrella. Despejarlo dentro del objetivo de movimientos del solucionador da dos. Hacerlo sin deshacer ni una sola vez da tres.',
      },
      {
        title: 'Deshacer la primera vez en cada tablero es gratis',
        body: 'A partir de ahí, cada vez que deshaces se tira de una reserva de cinco que recupera una cada veinticinco minutos. La opción de deshacer que se ofrece cuando un tablero se atasca también es gratis y no toca la reserva.',
      },
      {
        title: 'Solo pierdes una vida si un intento falla',
        body: 'Para abrir un tablero necesitas una vida, pero no gastas ninguna, y despejarlo no cuesta nada. Tienes cinco, ocho con el Brick Pass, y recuperas una cada treinta minutos.',
      },
      {
        title: 'Los potenciadores y los vídeos son opcionales',
        body: 'Con monedas compras potenciadores; los vídeos con recompensa son opcionales, tienen límite y nunca interrumpen un tablero. Decir que no, no te cuesta nada.',
      },
    ],
  },
  meet: {
    eyebrow: 'Lo que te vas a encontrar',
    title: 'De qué están hechos 2000 tableros.',
    lede: 'Un solucionador despejó los 2000 tableros antes de publicar ninguno, así que nada de lo que encuentres es un callejón sin salida. Estas son las piezas con las que están hechos.',
    nouns: [
      ['Puertas de colores', 'Un ladrillo solo sale por la puerta de su color.'],
      ['Llaves y candados', 'Parejas que abren parte del tablero cuando haces el movimiento correcto.'],
      ['Ladrillos congelados', 'Necesitan tres deslizamientos para descongelarse.'],
      ['Generadores', 'Traen más ladrillos al tablero.'],
      ['Cintas transportadoras', 'Mueven lo que tienen encima.'],
      ['Cajas', 'Obstáculos que deciden qué pasillos quedan abiertos.'],
      ['Arenas con forma', 'Tableros con forma de H, de L o de cruz.'],
    ],
  },
  close: {
    title: '¿Te ha gustado? El juego tiene 2000 más.',
    lede: 'Un Viaje por 167 pueblos de ladrillo, con nueve amigos de ladrillo. Gratis en el App Store, y se juega sin conexión.',
  },
};

const ja: PlayCopy = {
  meta: {
    title: 'OutBrickの遊び方：手数、スター、ライフ、アンドゥ',
    description:
      'OutBrickのステージをこの場で遊んでから、目標手数、手数の上限、スター、ブースター、そしてライフとアンドゥの本当のコストを知ろう。',
  },
  eyebrow: '遊び方ガイド',
  title: ['ブロックを、', '外へ。'],
  lede: 'ブロックをスライドすると、何かにぶつかるまでスーッと進みます。すべてのブロックを同じ色のゲートから外に出せば、ステージクリア。ルールはこれだけです。やさしいものから本格的な難問まで、ここにある3つのステージで試してみてください。',
  keys: [
    ['ドラッグ', 'でブロックを好きな方向へ。'],
    ['キーボード：', 'Tabでブロックを選び、Shift＋矢印キー。'],
    ['アンドゥ', 'はここでは無制限。ゲームでは各ステージ最初の1回が無料です。'],
  ],
  boardLabel: 'OutBrickのステージを遊ぶ',
  loop: {
    eyebrow: 'ステージのまわり',
    title: 'ゲームの流れを、都合よく丸めずに。',
    lede: '製品版では、手数の上限、スター、ライフ、アンドゥが加わります。それぞれの仕組みを正確に説明します。',
    rows: [
      {
        title: 'ロープは手数の上限。時計ではありません',
        body: 'どのステージも、最初のタップから目標手数と上限が表示されます。ゲーム中にカウントダウンは一切ありません。手数が足りなくなったら、まず「あと5手」が提案されます。',
      },
      {
        title: 'スター3つの条件',
        body: 'クリアするとスター1個。ソルバーが決めた目標手数以内でクリアすると2個。さらにアンドゥを一度も使わなければ3個です。',
      },
      {
        title: '各ステージ最初のアンドゥは無料',
        body: 'それ以降のアンドゥは5回分のタンクから使い、25分ごとに1回分ずつ回復します。ステージが詰まったときに提案されるアンドゥも無料で、タンクとは別枠です。',
      },
      {
        title: 'ライフが減るのは挑戦に失敗したときだけ',
        body: 'ステージを始めるにはライフが必要ですが消費はせず、クリアしても何も減りません。上限は5つ（Brick Passがあれば8つ）で、30分ごとに1つ回復します。',
      },
      {
        title: 'ブースターと動画は任意です',
        body: 'コインでブースターを購入できます。リワード動画は任意で回数制限があり、ステージを中断することはありません。断っても何も損はしません。',
      },
    ],
  },
  meet: {
    eyebrow: '出会うギミック',
    title: '2,000ステージをつくる部品。',
    lede: '2,000ステージすべてをリリース前にソルバーが解いているので、行き止まりはひとつもありません。ステージはこんな部品でできています。',
    nouns: [
      ['色のゲート', 'ブロックは同じ色のゲートからしか出られません。'],
      ['カギと錠前', '正しい手を打つと、ステージの一部が開くペア。'],
      ['凍ったブロック', '3回スライドすると溶けます。'],
      ['ジェネレーター', 'ステージに新しいブロックを送り込みます。'],
      ['ベルトコンベア', '上に載ったものを運びます。'],
      ['木箱', 'どの通路が開いているかを左右する障害物。'],
      ['変形フィールド', 'H字、L字、十字形のステージ。'],
    ],
  },
  close: {
    title: '気に入りましたか？　ゲームには、あと2,000ステージあります。',
    lede: 'ブロックでできた167の村をめぐるジャーニーと、9人のブロックのなかま。App Storeで無料、オフラインでも遊べます。',
  },
};

export const playCopy: Record<Locale, PlayCopy> = { en, fr, de, es, ja };
