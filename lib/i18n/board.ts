/**
 * Every string the playable board (app/components/playable-board.tsx) shows
 * or announces, per language. The board is a client component, so it takes a
 * `locale` code and looks its strings up here; English is the default and
 * reproduces the original wording exactly.
 *
 * Announcements are whole sentences built by functions, because word order,
 * plurals and counters differ per language (「3手」, "3 Züge", "1 coup").
 */

import type { Locale } from './locales';

export type BrickColour = 'red' | 'yellow' | 'teal' | 'violet' | 'blue' | 'green';
export type Direction = 'up' | 'down' | 'left' | 'right';
export type Side = 'top' | 'bottom' | 'left' | 'right';

export type BoardStrings = {
  /** Default accessible name for the whole toy. */
  label: string;
  colour: Record<BrickColour, string>;
  glyph: Record<BrickColour, string>;
  /** Names of the three demo boards, by level id. */
  levelName: Record<string, string>;
  /** "Red brick" — the name a brick goes by in announcements. */
  brick: (colour: BrickColour) => string;
  describeBrick: (colour: BrickColour, w: number, h: number, row: number, col: number) => string;
  describeGate: (gate: { colour: BrickColour; side: Side; start: number; span: number }) => string;
  gatesJoin: string;
  /** Live announcements. */
  cantMove: (brick: string, dir: Direction) => string;
  leftBoard: (brick: string, remaining: number) => string;
  leftAndClear: (brick: string, moves: number, target: number, stars: number) => string;
  slid: (brick: string, dir: Direction, distance: number, row: number, col: number) => string;
  undid: (moves: number) => string;
  reset: string;
  levelChange: (n: number, total: number, name: string, target: number) => string;
  /** HUD. */
  boards: string;
  pip: (n: number, name: string) => string;
  /** "Target " — the word and the space before the number. */
  target: string;
  moves: string;
  legend: (name: string, cols: number, rows: number, remaining: number) => string;
  /** Clear card. */
  kicker: (n: number, total: number) => string;
  clear: string;
  starsOf: (stars: number) => string;
  /** "3 moves · target 3" — the part before the number, then the number. */
  cardLine: (moves: number) => string;
  secondStar: (target: number) => string;
  thirdStar: string;
  next: string;
  again: string;
  shareLabel: string;
  share: string;
  replay: string;
  copied: string;
  copyFailed: string;
  /** "Get the full game on the " + "App Store" */
  store: [string, string];
  shareTitle: (board: number, stars: number) => string;
  shareText: (board: number, name: string, moves: number, target: number, stars: string) => string;
  /** Controls. */
  undo: string;
  resetButton: string;
  lifted: (colour: BrickColour) => string;
  tipLong: string;
  tipShort: string;
  hint: string;
  gatesPrefix: string;
};

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

const en: BoardStrings = {
  label: 'Try an OutBrick board',
  colour: { red: 'Red', yellow: 'Yellow', teal: 'Teal', violet: 'Violet', blue: 'Blue', green: 'Green' },
  glyph: { red: 'heart', yellow: 'triangle', teal: 'circle', violet: 'diamond', blue: 'square', green: 'star' },
  levelName: { 'first-light': 'First light', 'side-step': 'Side step', knot: 'The knot' },
  brick: (c) => `${en.colour[c]} brick`,
  describeBrick: (c, w, h, row, col) => {
    const size = w > 1 ? `${w} wide` : h > 1 ? `${h} tall` : 'single';
    return `${en.colour[c]} brick, ${size}, row ${row} column ${col}`;
  },
  describeGate: (g) => {
    const along = g.side === 'top' || g.side === 'bottom' ? 'column' : 'row';
    const where = g.span > 1 ? `${along}s ${g.start + 1} to ${g.start + g.span}` : `${along} ${g.start + 1}`;
    return `${en.colour[g.colour]} ${en.glyph[g.colour]} gate on the ${g.side} edge, ${where}`;
  },
  gatesJoin: '; ',
  cantMove: (b, dir) => `${b} can’t move ${dir}.`,
  leftBoard: (b, r) => `${b} left the board. ${plural(r, 'brick remains', 'bricks remain')}.`,
  leftAndClear: (b, m, t, s) =>
    `${b} left the board. Board clear in ${plural(m, 'move', 'moves')}, target ${t}. ${plural(s, 'star', 'stars')}.`,
  slid: (b, dir, d, row, col) => `${b} slid ${dir} ${plural(d, 'space', 'spaces')}, now row ${row} column ${col}.`,
  undid: (m) => `Undid the last move. Moves ${m}.`,
  reset: 'Board reset.',
  levelChange: (n, total, name, t) => `Board ${n} of ${total}: ${name}. Target ${t} moves.`,
  boards: 'Boards:',
  pip: (n, name) => `Board ${n}: ${name}`,
  target: 'Target ',
  moves: 'Moves ',
  legend: (name, c, r, left) => `${name}, ${c} by ${r} board, ${plural(left, 'brick', 'bricks')} left`,
  kicker: (n, total) => `Board ${n} of ${total}`,
  clear: 'Board clear',
  starsOf: (s) => `${plural(s, 'star', 'stars')} of 3`,
  cardLine: (m) => `${plural(m, 'move', 'moves')} · target `,
  secondStar: (t) => `Clear in ${t} for the second star.`,
  thirdStar: 'Clear without an undo for the third star.',
  next: 'Next board',
  again: 'Play from board 1',
  shareLabel: 'Share result',
  share: 'Share',
  replay: 'Replay',
  copied: 'Link copied',
  copyFailed: 'Couldn’t copy link',
  store: ['Get the full game on the ', 'App Store'],
  shareTitle: (board, s) => `I cleared OutBrick board ${board} with ${plural(s, 'star', 'stars')}`,
  shareText: (board, name, m, t, stars) =>
    `I cleared OutBrick board ${board}, ${name}, in ${plural(m, 'move', 'moves')} (target ${t}) ${stars}`,
  undo: 'Undo',
  resetButton: 'Reset',
  lifted: (c) => `${en.colour[c]} lifted · arrow to slide`,
  tipLong: 'Drag a brick toward its gate',
  tipShort: 'Drag to slide',
  hint: 'Drag or swipe a brick to slide it. With a keyboard, Tab to the board and use the arrow keys to choose a brick, then hold Shift and press an arrow to slide it, or press Enter and then an arrow. Escape puts a lifted brick down. Control or Command Z undoes a move. A brick glides until a wall, another brick or a gate of a different colour stops it, and leaves through the gate that matches its colour.',
  gatesPrefix: 'Gates: ',
};

/* ------------------------------------------------------------------ fr */

const frDir: Record<Direction, string> = { up: 'vers le haut', down: 'vers le bas', left: 'vers la gauche', right: 'vers la droite' };
const frSide: Record<Side, string> = { top: 'haut', bottom: 'bas', left: 'gauche', right: 'droit' };
const frColour: Record<BrickColour, string> = { red: 'rouge', yellow: 'jaune', teal: 'turquoise', violet: 'violette', blue: 'bleue', green: 'verte' };
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const fr: BoardStrings = {
  label: 'Essayez un plateau OutBrick',
  // Adjectives agree with « brique » (feminine); the gate reads « porte » (also feminine).
  colour: { red: 'Rouge', yellow: 'Jaune', teal: 'Turquoise', violet: 'Violette', blue: 'Bleue', green: 'Verte' },
  glyph: { red: 'cœur', yellow: 'triangle', teal: 'cercle', violet: 'losange', blue: 'carré', green: 'étoile' },
  levelName: { 'first-light': 'Premières lueurs', 'side-step': 'Pas de côté', knot: 'Le nœud' },
  brick: (c) => `la brique ${frColour[c]}`,
  describeBrick: (c, w, h, row, col) => {
    const size = w > 1 ? `${w} de large` : h > 1 ? `${h} de haut` : 'simple';
    return `Brique ${frColour[c]}, ${size}, ligne ${row} colonne ${col}`;
  },
  describeGate: (g) => {
    const along = g.side === 'top' || g.side === 'bottom' ? 'colonne' : 'ligne';
    const where = g.span > 1 ? `${along}s ${g.start + 1} à ${g.start + g.span}` : `${along} ${g.start + 1}`;
    return `Porte ${frColour[g.colour]} au symbole ${fr.glyph[g.colour]} sur le bord ${frSide[g.side]}, ${where}`;
  },
  gatesJoin: ' ; ',
  cantMove: (b, dir) => `${cap(b)} ne peut pas aller ${frDir[dir]}.`,
  leftBoard: (b, r) => `${cap(b)} est sortie du plateau. ${r === 1 ? 'Il reste 1 brique' : `Il reste ${r} briques`}.`,
  leftAndClear: (b, m, t, s) =>
    `${cap(b)} est sortie du plateau. Plateau vidé en ${plural(m, 'coup', 'coups')}, objectif ${t}. ${plural(s, 'étoile', 'étoiles')}.`,
  slid: (b, dir, d, row, col) =>
    `${cap(b)} a glissé de ${plural(d, 'case', 'cases')} ${frDir[dir]}, elle est maintenant ligne ${row} colonne ${col}.`,
  undid: (m) => `Dernier coup annulé. Coups : ${m}.`,
  reset: 'Plateau réinitialisé.',
  levelChange: (n, total, name, t) => `Plateau ${n} sur ${total} : ${name}. Objectif ${t} coups.`,
  boards: 'Plateaux :',
  pip: (n, name) => `Plateau ${n} : ${name}`,
  target: 'Objectif ',
  moves: 'Coups ',
  legend: (name, c, r, left) => `${name}, plateau de ${c} sur ${r}, ${left === 1 ? '1 brique restante' : `${left} briques restantes`}`,
  kicker: (n, total) => `Plateau ${n} sur ${total}`,
  clear: 'Plateau vidé',
  starsOf: (s) => `${plural(s, 'étoile', 'étoiles')} sur 3`,
  cardLine: (m) => `${plural(m, 'coup', 'coups')} · objectif `,
  secondStar: (t) => `Videz-le en ${t} coups pour la deuxième étoile.`,
  thirdStar: 'Videz-le sans annuler pour la troisième étoile.',
  next: 'Plateau suivant',
  again: 'Reprendre au plateau 1',
  shareLabel: 'Partager le résultat',
  share: 'Partager',
  replay: 'Rejouer',
  copied: 'Lien copié',
  copyFailed: 'Impossible de copier le lien',
  store: ['Le jeu complet sur l’', 'App Store'],
  shareTitle: (board, s) => `J’ai vidé le plateau ${board} d’OutBrick avec ${plural(s, 'étoile', 'étoiles')}`,
  shareText: (board, name, m, t, stars) =>
    `J’ai vidé le plateau ${board} d’OutBrick, ${name}, en ${plural(m, 'coup', 'coups')} (objectif ${t}) ${stars}`,
  undo: 'Annuler',
  resetButton: 'Recommencer',
  lifted: (c) => `Brique ${frColour[c]} soulevée · flèche pour glisser`,
  tipLong: 'Faites glisser une brique vers sa porte',
  tipShort: 'Glissez pour déplacer',
  hint: 'Faites glisser une brique du doigt ou à la souris pour la déplacer. Au clavier, allez jusqu’au plateau avec Tab et choisissez une brique avec les flèches, puis maintenez Maj et appuyez sur une flèche pour la faire glisser, ou appuyez sur Entrée puis sur une flèche. Échap repose une brique soulevée. Contrôle ou Commande Z annule un coup. Une brique glisse jusqu’à ce qu’un mur, une autre brique ou une porte d’une autre couleur l’arrête, et sort par la porte de sa couleur.',
  gatesPrefix: 'Portes : ',
};

/* ------------------------------------------------------------------ de */

const deDir: Record<Direction, string> = { up: 'nach oben', down: 'nach unten', left: 'nach links', right: 'nach rechts' };
const deSide: Record<Side, string> = { top: 'oberen', bottom: 'unteren', left: 'linken', right: 'rechten' };
// Declined for "das rote Tor" / "der rote Stein" after a definite article.
const deAdj: Record<BrickColour, string> = { red: 'rote', yellow: 'gelbe', teal: 'türkise', violet: 'violette', blue: 'blaue', green: 'grüne' };

const de: BoardStrings = {
  label: 'Probier ein OutBrick-Spielfeld aus',
  colour: { red: 'Rot', yellow: 'Gelb', teal: 'Türkis', violet: 'Violett', blue: 'Blau', green: 'Grün' },
  glyph: { red: 'Herz', yellow: 'Dreieck', teal: 'Kreis', violet: 'Raute', blue: 'Quadrat', green: 'Stern' },
  levelName: { 'first-light': 'Erstes Licht', 'side-step': 'Seitenschritt', knot: 'Der Knoten' },
  brick: (c) => `der ${deAdj[c]} Stein`,
  describeBrick: (c, w, h, row, col) => {
    const size = w > 1 ? `${w} breit` : h > 1 ? `${h} hoch` : 'einzeln';
    return `${de.colour[c]}er Stein, ${size}, Zeile ${row} Spalte ${col}`;
  },
  describeGate: (g) => {
    const along = g.side === 'top' || g.side === 'bottom' ? 'Spalte' : 'Zeile';
    const where = g.span > 1 ? `${along}n ${g.start + 1} bis ${g.start + g.span}` : `${along} ${g.start + 1}`;
    return `${cap(deAdj[g.colour])}s Tor mit ${de.glyph[g.colour]} am ${deSide[g.side]} Rand, ${where}`;
  },
  gatesJoin: '; ',
  cantMove: (b, dir) => `${cap(b)} kann nicht ${deDir[dir]}.`,
  leftBoard: (b, r) => `${cap(b)} hat das Feld verlassen. ${r === 1 ? 'Noch 1 Stein' : `Noch ${r} Steine`}.`,
  leftAndClear: (b, m, t, s) =>
    `${cap(b)} hat das Feld verlassen. Feld frei in ${plural(m, 'Zug', 'Zügen')}, Ziel ${t}. ${plural(s, 'Stern', 'Sterne')}.`,
  slid: (b, dir, d, row, col) =>
    `${cap(b)} ist ${plural(d, 'Feld', 'Felder')} ${deDir[dir]} gerutscht, jetzt Zeile ${row} Spalte ${col}.`,
  undid: (m) => `Letzten Zug zurückgenommen. Züge: ${m}.`,
  reset: 'Spielfeld zurückgesetzt.',
  levelChange: (n, total, name, t) => `Spielfeld ${n} von ${total}: ${name}. Ziel: ${t} Züge.`,
  boards: 'Spielfelder:',
  pip: (n, name) => `Spielfeld ${n}: ${name}`,
  target: 'Ziel ',
  moves: 'Züge ',
  legend: (name, c, r, left) => `${name}, Spielfeld ${c} × ${r}, ${left === 1 ? 'noch 1 Stein' : `noch ${left} Steine`}`,
  kicker: (n, total) => `Spielfeld ${n} von ${total}`,
  clear: 'Feld frei',
  starsOf: (s) => `${plural(s, 'Stern', 'Sterne')} von 3`,
  cardLine: (m) => `${plural(m, 'Zug', 'Züge')} · Ziel `,
  secondStar: (t) => `Schaff es in ${t} Zügen für den zweiten Stern.`,
  thirdStar: 'Schaff es ohne Zugrücknahme für den dritten Stern.',
  next: 'Nächstes Feld',
  again: 'Ab Feld 1 spielen',
  shareLabel: 'Ergebnis teilen',
  share: 'Teilen',
  replay: 'Nochmal',
  copied: 'Link kopiert',
  copyFailed: 'Link konnte nicht kopiert werden',
  store: ['Das ganze Spiel im ', 'App Store'],
  shareTitle: (board, s) => `Ich habe OutBrick-Spielfeld ${board} mit ${plural(s, 'Stern', 'Sternen')} geschafft`,
  shareText: (board, name, m, t, stars) =>
    `Ich habe OutBrick-Spielfeld ${board}, ${name}, in ${plural(m, 'Zug', 'Zügen')} geschafft (Ziel ${t}) ${stars}`,
  undo: 'Rückgängig',
  resetButton: 'Neu starten',
  lifted: (c) => `${de.colour[c]}er Stein angehoben · Pfeiltaste zum Schieben`,
  tipLong: 'Zieh einen Stein zu seinem Tor',
  tipShort: 'Ziehen zum Schieben',
  hint: 'Zieh oder wische einen Stein, um ihn zu schieben. Mit der Tastatur: Mit Tab aufs Spielfeld, mit den Pfeiltasten einen Stein wählen, dann Umschalt gedrückt halten und eine Pfeiltaste drücken – oder erst Eingabe, dann eine Pfeiltaste. Escape setzt einen angehobenen Stein wieder ab. Strg oder Befehl Z nimmt einen Zug zurück. Ein Stein rutscht, bis ihn eine Wand, ein anderer Stein oder ein Tor in einer anderen Farbe stoppt, und verlässt das Feld durch das Tor in seiner Farbe.',
  gatesPrefix: 'Tore: ',
};

/* ------------------------------------------------------------------ es */

const esDir: Record<Direction, string> = { up: 'hacia arriba', down: 'hacia abajo', left: 'hacia la izquierda', right: 'hacia la derecha' };
const esSide: Record<Side, string> = { top: 'superior', bottom: 'inferior', left: 'izquierdo', right: 'derecho' };

const es: BoardStrings = {
  label: 'Prueba un tablero de OutBrick',
  colour: { red: 'Rojo', yellow: 'Amarillo', teal: 'Turquesa', violet: 'Violeta', blue: 'Azul', green: 'Verde' },
  glyph: { red: 'corazón', yellow: 'triángulo', teal: 'círculo', violet: 'rombo', blue: 'cuadrado', green: 'estrella' },
  levelName: { 'first-light': 'Primera luz', 'side-step': 'Paso al lado', knot: 'El nudo' },
  brick: (c) => `el ladrillo ${es.colour[c].toLowerCase()}`,
  describeBrick: (c, w, h, row, col) => {
    const size = w > 1 ? `${w} de ancho` : h > 1 ? `${h} de alto` : 'simple';
    return `Ladrillo ${es.colour[c].toLowerCase()}, ${size}, fila ${row} columna ${col}`;
  },
  describeGate: (g) => {
    const along = g.side === 'top' || g.side === 'bottom' ? 'columna' : 'fila';
    const where = g.span > 1 ? `${along}s ${g.start + 1} a ${g.start + g.span}` : `${along} ${g.start + 1}`;
    const colour = { red: 'roja', yellow: 'amarilla', teal: 'turquesa', violet: 'violeta', blue: 'azul', green: 'verde' }[g.colour];
    return `Puerta ${colour} con ${es.glyph[g.colour]} en el borde ${esSide[g.side]}, ${where}`;
  },
  gatesJoin: '; ',
  cantMove: (b, dir) => `${cap(b)} no puede moverse ${esDir[dir]}.`,
  leftBoard: (b, r) => `${cap(b)} ha salido del tablero. ${r === 1 ? 'Queda 1 ladrillo' : `Quedan ${r} ladrillos`}.`,
  leftAndClear: (b, m, t, s) =>
    `${cap(b)} ha salido del tablero. Tablero despejado en ${plural(m, 'movimiento', 'movimientos')}, objetivo ${t}. ${plural(s, 'estrella', 'estrellas')}.`,
  slid: (b, dir, d, row, col) =>
    `${cap(b)} se ha deslizado ${plural(d, 'casilla', 'casillas')} ${esDir[dir]}; ahora está en la fila ${row}, columna ${col}.`,
  undid: (m) => `Último movimiento deshecho. Movimientos: ${m}.`,
  reset: 'Tablero reiniciado.',
  levelChange: (n, total, name, t) => `Tablero ${n} de ${total}: ${name}. Objetivo: ${t} movimientos.`,
  boards: 'Tableros:',
  pip: (n, name) => `Tablero ${n}: ${name}`,
  target: 'Objetivo ',
  moves: 'Movimientos ',
  legend: (name, c, r, left) => `${name}, tablero de ${c} por ${r}, ${left === 1 ? 'queda 1 ladrillo' : `quedan ${left} ladrillos`}`,
  kicker: (n, total) => `Tablero ${n} de ${total}`,
  clear: 'Tablero despejado',
  starsOf: (s) => `${plural(s, 'estrella', 'estrellas')} de 3`,
  cardLine: (m) => `${plural(m, 'movimiento', 'movimientos')} · objetivo `,
  secondStar: (t) => `Despéjalo en ${t} para la segunda estrella.`,
  thirdStar: 'Despéjalo sin deshacer para la tercera estrella.',
  next: 'Siguiente tablero',
  again: 'Volver al tablero 1',
  shareLabel: 'Compartir resultado',
  share: 'Compartir',
  replay: 'Repetir',
  copied: 'Enlace copiado',
  copyFailed: 'No se pudo copiar el enlace',
  store: ['El juego completo en el ', 'App Store'],
  shareTitle: (board, s) => `He despejado el tablero ${board} de OutBrick con ${plural(s, 'estrella', 'estrellas')}`,
  shareText: (board, name, m, t, stars) =>
    `He despejado el tablero ${board} de OutBrick, ${name}, en ${plural(m, 'movimiento', 'movimientos')} (objetivo ${t}) ${stars}`,
  undo: 'Deshacer',
  resetButton: 'Reiniciar',
  lifted: (c) => `Ladrillo ${es.colour[c].toLowerCase()} levantado · flecha para deslizar`,
  tipLong: 'Arrastra un ladrillo hacia su puerta',
  tipShort: 'Arrastra para deslizar',
  hint: 'Arrastra o desliza un ladrillo para moverlo. Con teclado, llega al tablero con Tab y elige un ladrillo con las flechas; después mantén Mayúsculas y pulsa una flecha para deslizarlo, o pulsa Intro y luego una flecha. Escape suelta un ladrillo levantado. Control o Comando Z deshace un movimiento. Un ladrillo se desliza hasta que lo detiene una pared, otro ladrillo o una puerta de otro color, y sale por la puerta de su mismo color.',
  gatesPrefix: 'Puertas: ',
};

/* ------------------------------------------------------------------ ja */

const jaDir: Record<Direction, string> = { up: '上', down: '下', left: '左', right: '右' };
const jaSide: Record<Side, string> = { top: '上', bottom: '下', left: '左', right: '右' };

const ja: BoardStrings = {
  label: 'OutBrickのステージを遊んでみる',
  colour: { red: '赤', yellow: '黄', teal: '青緑', violet: '紫', blue: '青', green: '緑' },
  glyph: { red: 'ハート', yellow: '三角', teal: '丸', violet: 'ひし形', blue: '四角', green: '星' },
  levelName: { 'first-light': '夜明け', 'side-step': 'よこっとび', knot: 'むすびめ' },
  brick: (c) => `${ja.colour[c]}のブロック`,
  describeBrick: (c, w, h, row, col) => {
    const size = w > 1 ? `横${w}マス` : h > 1 ? `縦${h}マス` : '1マス';
    return `${ja.colour[c]}のブロック、${size}、${row}行目${col}列目`;
  },
  describeGate: (g) => {
    const along = g.side === 'top' || g.side === 'bottom' ? '列' : '行';
    const where = g.span > 1 ? `${g.start + 1}〜${g.start + g.span}${along}目` : `${g.start + 1}${along}目`;
    return `${jaSide[g.side]}端の${ja.colour[g.colour]}のゲート（${ja.glyph[g.colour]}）、${where}`;
  },
  gatesJoin: '。',
  cantMove: (b, dir) => `${b}は${jaDir[dir]}に動かせません。`,
  leftBoard: (b, r) => `${b}が外に出ました。残り${r}個です。`,
  leftAndClear: (b, m, t, s) => `${b}が外に出ました。${m}手でステージクリア、目標は${t}手。スター${s}個です。`,
  slid: (b, dir, d, row, col) => `${b}が${jaDir[dir]}に${d}マス動きました。現在${row}行目${col}列目です。`,
  undid: (m) => `1手戻しました。現在${m}手です。`,
  reset: 'ステージをリセットしました。',
  levelChange: (n, total, name, t) => `ステージ${n}／${total}：${name}。目標${t}手。`,
  boards: 'ステージ：',
  pip: (n, name) => `ステージ${n}：${name}`,
  target: '目標 ',
  moves: '手数 ',
  legend: (name, c, r, left) => `${name}、${c}×${r}のステージ、残り${left}個`,
  kicker: (n, total) => `ステージ ${n}／${total}`,
  clear: 'ステージクリア',
  starsOf: (s) => `スター3個中${s}個`,
  cardLine: (m) => `${m}手 · 目標 `,
  secondStar: (t) => `${t}手以内でクリアすると2つ目のスター。`,
  thirdStar: 'アンドゥなしでクリアすると3つ目のスター。',
  next: '次のステージ',
  again: 'ステージ1から',
  shareLabel: '結果をシェア',
  share: 'シェア',
  replay: 'もう一度',
  copied: 'リンクをコピーしました',
  copyFailed: 'リンクをコピーできませんでした',
  store: ['フルバージョンは', 'App Storeで'],
  shareTitle: (board, s) => `OutBrickのステージ${board}をスター${s}個でクリア！`,
  shareText: (board, name, m, t, stars) => `OutBrickのステージ${board}「${name}」を${m}手でクリア（目標${t}手）${stars}`,
  undo: '元に戻す',
  resetButton: 'リセット',
  lifted: (c) => `${ja.colour[c]}のブロックを持ち上げ中 · 矢印キーで移動`,
  tipLong: 'ブロックを同じ色のゲートへドラッグ',
  tipShort: 'ドラッグで移動',
  hint: 'ブロックをドラッグまたはスワイプすると滑ります。キーボードでは、Tabでステージに移動し、矢印キーでブロックを選んでから、Shiftを押しながら矢印キーで滑らせます。Enterを押してから矢印キーでも動かせます。Escapeで持ち上げたブロックを置きます。ControlまたはCommand＋Zで1手戻せます。ブロックは壁やほかのブロック、違う色のゲートに当たるまで滑り、同じ色のゲートから外に出ます。',
  gatesPrefix: 'ゲート：',
};

export const boardStrings: Record<Locale, BoardStrings> = { en, fr, de, es, ja };
