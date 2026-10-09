// The nine friends in email: who hosts a message, what they say, and the one game an email can
// hold, a tappable brick puzzle.
//
// The art is the approved toy-brick render of each friend in three poses (idle, cheer, think),
// cut to 192 px by scripts/build-email-friends.py into public/assets/email/friends/. The slab
// colours are the site's (lib/mascots.ts, which cannot be imported here: it pulls in the village
// data without `.ts` specifiers).
//
// Everything that moves is progressive. Where checkboxes and keyframes work (Apple Mail, iOS
// Mail, Samsung Email; the WebKit gate in core.ts) the host hops in, bobs, and cheers when tapped,
// and the puzzle plays. Everywhere else the same markup is a still friend, a speech bubble, a
// drawn board and its answer. prefers-reduced-motion switches every animation off.

import { color, esc, fonts, type Ctx } from './core.ts';
import type { EmailLocale } from './i18n.ts';

export type FriendId = 'bloo' | 'peach' | 'sprout' | 'bricko' | 'zippy' | 'vio' | 'moss' | 'flurry' | 'poppy';
export type Pose = 'idle' | 'cheer' | 'think';

/** Name, slab colour, the slab's darker foot, and the text colour that reads on the slab. */
export const FRIENDS: Record<FriendId, { name: string; colour: string; foot: string; ink: string }> = {
  bloo: { name: 'Bloo', colour: '#3b8bf0', foot: '#1d4fa6', ink: '#0a1a3d' },
  peach: { name: 'Peach', colour: '#f4a283', foot: '#b8603f', ink: '#1a1350' },
  sprout: { name: 'Sprout', colour: '#6cc24a', foot: '#3f7f25', ink: '#10270a' },
  bricko: { name: 'Bricko', colour: '#d42f29', foot: '#8e1c18', ink: '#ffffff' },
  zippy: { name: 'Zippy', colour: '#ffd22e', foot: '#b8870a', ink: '#1a1350' },
  vio: { name: 'Vio', colour: '#7b5cf0', foot: '#4a35b0', ink: '#ffffff' },
  moss: { name: 'Moss', colour: '#357a32', foot: '#1f5420', ink: '#ffffff' },
  flurry: { name: 'Flurry', colour: '#9fd6f5', foot: '#4d93c2', ink: '#0f2a44' },
  poppy: { name: 'Poppy', colour: '#f59ac6', foot: '#b0367e', ink: '#3a0f28' },
};

export const FRIEND_IDS = Object.keys(FRIENDS) as FriendId[];

export function friendSrc(ctx: Ctx, id: FriendId, pose: Pose = 'idle'): string {
  return `${ctx.assetBase}/assets/email/friends/${id}-${pose}.png`;
}

// ---------------------------------------------------------------------------------------
// What the host says. One short line per mood, written for each language (never a reader's
// own words, so a forum post can never end up in a friend's mouth).

export type Mood =
  | 'welcome' | 'key' | 'tip' | 'friends' | 'release' | 'news' | 'event' | 'miss' | 'prefs' | 'got' | 'reply'
  | 'fixed' | 'rate' | 'yay' | 'thanks' | 'security' | 'notice' | 'bye' | 'digest' | 'badge' | 'puzzle' | 'oops';

const lines: Record<EmailLocale, Record<Mood, string>> = {
  en: {
    welcome: 'Welcome in! I saved you a spot.',
    key: 'One tap and you’re in.',
    tip: 'Here’s a trick I use on every board.',
    friends: 'Come and meet the whole gang!',
    release: 'A new version just landed!',
    news: 'Fresh from the workshop.',
    event: 'Something special is happening on the Journey.',
    miss: 'Still with us? No pressure at all.',
    prefs: 'You choose what lands in your inbox.',
    got: 'Got it! A real person reads every message.',
    reply: 'There’s a new message for you.',
    fixed: 'Good news: it’s fixed!',
    rate: 'Be honest: did we solve it?',
    yay: 'This is a good one!',
    thanks: 'Thank you for thinking of us.',
    security: 'Just checking it was you.',
    notice: 'A quick heads-up, in plain words.',
    bye: 'Thanks for every board you played.',
    digest: 'Here’s what happened while you were away.',
    badge: 'Look what you earned!',
    puzzle: 'Can you solve this one?',
    oops: 'Hmm, that one didn’t go through.',
  },
  fr: {
    welcome: 'Bienvenue ! Je vous ai gardé une place.',
    key: 'Un geste et vous y êtes.',
    tip: 'Voici l’astuce que j’utilise sur chaque plateau.',
    friends: 'Venez rencontrer toute la bande !',
    release: 'Une nouvelle version vient d’arriver !',
    news: 'Tout droit sorti de l’atelier.',
    event: 'Il se passe quelque chose de spécial sur le Voyage.',
    miss: 'Toujours avec nous ? Aucune pression.',
    prefs: 'Vous choisissez ce qui arrive dans votre boîte.',
    got: 'Bien reçu ! Une vraie personne lit chaque message.',
    reply: 'Un nouveau message vous attend.',
    fixed: 'Bonne nouvelle : c’est réparé !',
    rate: 'Soyez franc : avons-nous réglé le problème ?',
    yay: 'Celle-ci, elle est bonne !',
    thanks: 'Merci d’avoir pensé à nous.',
    security: 'Je vérifie simplement que c’était bien vous.',
    notice: 'Une petite information, en termes simples.',
    bye: 'Merci pour chaque plateau joué.',
    digest: 'Voici ce qui s’est passé en votre absence.',
    badge: 'Regardez ce que vous avez gagné !',
    puzzle: 'Saurez-vous résoudre celui-ci ?',
    oops: 'Hmm, celui-ci n’est pas passé.',
  },
  de: {
    welcome: 'Willkommen! Ich habe Ihnen einen Platz frei gehalten.',
    key: 'Ein Tippen, und Sie sind drin.',
    tip: 'Hier ist ein Trick, den ich auf jedem Brett nutze.',
    friends: 'Lernen Sie die ganze Bande kennen!',
    release: 'Eine neue Version ist da!',
    news: 'Frisch aus der Werkstatt.',
    event: 'Auf der Reise passiert etwas Besonderes.',
    miss: 'Noch dabei? Ganz ohne Druck.',
    prefs: 'Sie bestimmen, was in Ihrem Postfach landet.',
    got: 'Angekommen! Ein echter Mensch liest jede Nachricht.',
    reply: 'Eine neue Nachricht wartet auf Sie.',
    fixed: 'Gute Nachricht: Es ist behoben!',
    rate: 'Ganz ehrlich: Haben wir es gelöst?',
    yay: 'Das ist eine gute Nachricht!',
    thanks: 'Danke, dass Sie an uns gedacht haben.',
    security: 'Ich prüfe nur, ob Sie das waren.',
    notice: 'Ein kurzer Hinweis, in klaren Worten.',
    bye: 'Danke für jedes Brett, das Sie gespielt haben.',
    digest: 'Das ist passiert, während Sie weg waren.',
    badge: 'Sehen Sie, was Sie verdient haben!',
    puzzle: 'Lösen Sie dieses hier?',
    oops: 'Hmm, das ist nicht angekommen.',
  },
  es: {
    welcome: '¡Bienvenido! Te guardé un sitio.',
    key: 'Un toque y ya estás dentro.',
    tip: 'Este es el truco que uso en cada tablero.',
    friends: '¡Ven a conocer a toda la pandilla!',
    release: '¡Acaba de llegar una versión nueva!',
    news: 'Recién salido del taller.',
    event: 'Algo especial está pasando en el Viaje.',
    miss: '¿Sigues con nosotros? Sin ninguna presión.',
    prefs: 'Tú eliges qué llega a tu bandeja.',
    got: '¡Recibido! Una persona de verdad lee cada mensaje.',
    reply: 'Tienes un mensaje nuevo.',
    fixed: 'Buenas noticias: ¡está arreglado!',
    rate: 'Sé sincero: ¿lo hemos solucionado?',
    yay: '¡Esta es buena!',
    thanks: 'Gracias por pensar en nosotros.',
    security: 'Solo compruebo que fuiste tú.',
    notice: 'Un aviso rápido, en palabras sencillas.',
    bye: 'Gracias por cada tablero que jugaste.',
    digest: 'Esto es lo que pasó mientras no estabas.',
    badge: '¡Mira lo que has ganado!',
    puzzle: '¿Puedes resolver este?',
    oops: 'Vaya, ese no llegó.',
  },
  ja: {
    welcome: 'ようこそ！あなたの席、とっておきました。',
    key: 'タップひとつで入れます。',
    tip: 'どの盤面でも使っているコツを教えますね。',
    friends: 'なかまたちに会いに来てください！',
    release: '新しいバージョンが届きました！',
    news: '工房からできたてをお届けします。',
    event: 'ジャーニーで特別なことが起きています。',
    miss: 'まだ一緒にいてくれますか？無理はしないでくださいね。',
    prefs: '受け取るメールはあなたが選べます。',
    got: '受け取りました！メッセージはすべて人が読んでいます。',
    reply: '新しいメッセージが届いています。',
    fixed: 'うれしいお知らせ：直りました！',
    rate: '正直に教えてください。解決しましたか？',
    yay: 'これは良い知らせです！',
    thanks: '私たちのことを思い出してくれてありがとう。',
    security: 'あなたご本人か、確認させてください。',
    notice: 'わかりやすく、ひとことお知らせです。',
    bye: 'これまで遊んでくれて、ありがとう。',
    digest: '留守の間にあったことをまとめました。',
    badge: '見てください、手に入れましたよ！',
    puzzle: 'この問題、解けますか？',
    oops: 'あれれ、うまく届かなかったようです。',
  },
  'pt-BR': {
    welcome: 'Bem-vindo! Guardei um lugar para você.',
    key: 'Um toque e você entra.',
    tip: 'Este é o truque que eu uso em todo tabuleiro.',
    friends: 'Venha conhecer a turma toda!',
    release: 'Uma versão nova acabou de chegar!',
    news: 'Fresquinho da oficina.',
    event: 'Algo especial está acontecendo na Jornada.',
    miss: 'Ainda com a gente? Sem pressão nenhuma.',
    prefs: 'Você escolhe o que chega na sua caixa.',
    got: 'Recebido! Uma pessoa de verdade lê cada mensagem.',
    reply: 'Tem uma mensagem nova para você.',
    fixed: 'Boa notícia: está resolvido!',
    rate: 'Seja sincero: resolvemos?',
    yay: 'Essa é boa!',
    thanks: 'Obrigado por pensar na gente.',
    security: 'Só confirmando que foi você.',
    notice: 'Um aviso rápido, em palavras simples.',
    bye: 'Obrigado por cada tabuleiro que você jogou.',
    digest: 'Veja o que aconteceu enquanto você esteve fora.',
    badge: 'Olha o que você ganhou!',
    puzzle: 'Consegue resolver este?',
    oops: 'Hum, esse não chegou.',
  },
};

export function friendLine(locale: EmailLocale, mood: Mood): string {
  return lines[locale][mood];
}

// ---------------------------------------------------------------------------------------
// Studs: the round bumps on top of a toy brick. A row of them sits on every plinth, button and
// divider; email clients that drop border-radius show small squares, which still read as bricks.

export function studs(count: number, tone: string, size = 8, gap = 6): string {
  const one = `<span style="display:inline-block;width:${size}px;height:${Math.round(size * 0.62)}px;margin:0 ${gap / 2}px;border-radius:${size}px ${size}px 2px 2px;background:${tone};font-size:0;line-height:0;vertical-align:bottom;">&nbsp;</span>`;
  return one.repeat(count);
}

// ---------------------------------------------------------------------------------------
// The host: a friend on a brick plinth, with a speech bubble.

export type Host = { friend: FriendId; pose?: Pose; mood?: Mood };

/**
 * The opening of a message: the host friend standing on a plinth in their own colour, and what
 * they say. Where it can, the friend hops in on open, breathes, and cheers when tapped (a checkbox
 * swaps the pose); elsewhere it is a still portrait. The image's alt text is the friend's name,
 * and the bubble is real text, so nothing is lost with images off.
 */
export function stage(ctx: Ctx, host: Host): string {
  const f = fonts(ctx.locale);
  const fr = FRIENDS[host.friend];
  const pose = host.pose ?? 'idle';
  const alt: Pose = pose === 'cheer' ? 'idle' : 'cheer';
  const bubble = host.mood
    ? `<td valign="middle" style="padding:0 0 22px 10px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td class="ob-bubble" style="background:#ffffff;border:2px solid ${fr.colour};border-radius:18px 18px 18px 4px;padding:9px 14px 11px;">
<p style="margin:0 0 4px;"><span style="display:inline-block;padding:2px 8px 1px;border-radius:7px;background:${fr.colour};color:${fr.ink};font-family:${f.display};font-size:12px;line-height:16px;font-weight:600;letter-spacing:0.04em;">${esc(fr.name)}</span></p>
<p class="ob-text" style="margin:0;font-family:${f.display};font-size:17px;line-height:1.35;font-weight:500;color:${color.onPaper};">${esc(friendLine(ctx.locale, host.mood))}</p>
</td></tr></table>
</td>`
    : '';
  return `<table role="presentation" class="ob-stage" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:-6px 0 18px;">
<tr>
<td width="112" valign="bottom" style="width:112px;padding:0;">
<!--[if !mso]><!--><input type="checkbox" id="ob-host" class="ob-host-input" style="display:none;mso-hide:all;"><!--<![endif]-->
<label for="ob-host" class="ob-host" style="display:block;width:104px;margin:0 auto;cursor:pointer;-webkit-tap-highlight-color:transparent;">
<span class="ob-host-fig" style="display:block;width:96px;height:96px;margin:0 auto;">
<img class="ob-f-main" src="${esc(friendSrc(ctx, host.friend, pose))}" width="96" height="96" alt="${esc(fr.name)}" style="display:block;width:96px;height:96px;border:0;color:${color.onPaper};font-family:${f.display};font-size:16px;">
<!--[if !mso]><!--><img class="ob-f-alt" src="${esc(friendSrc(ctx, host.friend, alt))}" width="96" height="96" alt="" style="display:none;width:96px;height:0;max-height:0;border:0;mso-hide:all;"><!--<![endif]-->
</span>
<span style="display:block;height:5px;font-size:0;line-height:0;text-align:center;">${studs(3, fr.colour, 14, 8)}</span>
<span style="display:block;height:12px;border-radius:5px;background:${fr.colour};border-bottom:5px solid ${fr.foot};font-size:0;line-height:0;">&nbsp;</span>
</label>
</td>
${bubble}
</tr>
</table>`;
}

/**
 * The stage's moving parts, added to the shell's interactive <style> block. Every animation starts
 * from a visible frame and holds no fill: Apple Mail pauses animations in a window behind others,
 * and a paused hop that began at opacity 0 left the friend invisible (seen on 9 October 2026).
 */
export const stageCss = `
  .ob-host-fig{transform-origin:50% 100%;animation:ob-hop .75s cubic-bezier(.3,1.45,.55,1),ob-breathe 3.8s ease-in-out .75s infinite;}
  .ob-host:hover .ob-host-fig{animation:ob-wiggle .5s ease both;}
  .ob-host-input:checked + .ob-host .ob-f-main{display:none !important;}
  .ob-host-input:checked + .ob-host .ob-f-alt{display:block !important;height:96px !important;max-height:none !important;}
  .ob-host-input:checked + .ob-host .ob-host-fig{animation:ob-cheer .65s cubic-bezier(.3,1.5,.5,1) both;}
  @keyframes ob-hop{0%{transform:translateY(-14px) scale(.96,1.04);}55%{transform:translateY(0) scale(1.07,.93);}80%{transform:translateY(-4px) scale(.98,1.02);}100%{transform:none;}}
  @keyframes ob-breathe{0%,100%{transform:none;}50%{transform:translateY(-2px) scale(1.01,.99);}}
  @keyframes ob-wiggle{0%,100%{transform:none;}30%{transform:rotate(-5deg);}65%{transform:rotate(4deg);}}
  @keyframes ob-cheer{0%{transform:none;}35%{transform:translateY(-16px) rotate(-4deg);}70%{transform:translateY(0) scale(1.06,.94);}100%{transform:none;}}`;

// ---------------------------------------------------------------------------------------
// The puzzle: a real OutBrick board, drawn in table cells, that the reader solves in the email.

/**
 * The game's brick palette (DESIGN.md), with each colour's foot and the label colour that reads
 * on its face (white only where it clears 3:1 for the bold 16 px labels).
 */
export const BRICK: Record<BrickColour, { face: string; foot: string; ink: string }> = {
  red: { face: '#e2372f', foot: '#9c1f19', ink: '#ffffff' },
  yellow: { face: '#f9c823', foot: '#b08a0a', ink: '#1a1350' },
  green: { face: '#4cb944', foot: '#2d7a27', ink: '#10270a' },
  blue: { face: '#2c7be5', foot: '#17509e', ink: '#ffffff' },
  purple: { face: '#9b5fe0', foot: '#6537a3', ink: '#ffffff' },
  pink: { face: '#f26ab8', foot: '#b03a7f', ink: '#3a0f28' },
  orange: { face: '#f5851f', foot: '#a9560c', ink: '#1a1350' },
  teal: { face: '#26b9b0', foot: '#167a74', ink: '#0b2a28' },
};
export type BrickColour = 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'orange' | 'teal';

const colourNames: Record<EmailLocale, Record<BrickColour, string>> = {
  en: { red: 'Red', yellow: 'Yellow', green: 'Green', blue: 'Blue', purple: 'Purple', pink: 'Pink', orange: 'Orange', teal: 'Teal' },
  fr: { red: 'Rouge', yellow: 'Jaune', green: 'Vert', blue: 'Bleu', purple: 'Violet', pink: 'Rose', orange: 'Orange', teal: 'Turquoise' },
  de: { red: 'Rot', yellow: 'Gelb', green: 'Grün', blue: 'Blau', purple: 'Lila', pink: 'Pink', orange: 'Orange', teal: 'Türkis' },
  es: { red: 'Rojo', yellow: 'Amarillo', green: 'Verde', blue: 'Azul', purple: 'Morado', pink: 'Rosa', orange: 'Naranja', teal: 'Turquesa' },
  ja: { red: 'あか', yellow: 'きいろ', green: 'みどり', blue: 'あお', purple: 'むらさき', pink: 'ピンク', orange: 'オレンジ', teal: 'ティール' },
  'pt-BR': { red: 'Vermelho', yellow: 'Amarelo', green: 'Verde', blue: 'Azul', purple: 'Roxo', pink: 'Rosa', orange: 'Laranja', teal: 'Turquesa' },
};

export function colourName(locale: EmailLocale, colour: BrickColour): string {
  return colourNames[locale][colour];
}

type Side = 'top' | 'bottom' | 'left' | 'right';
export type PuzzleBrick = { colour: BrickColour; row: number; col: number };
export type PuzzleGate = { colour: BrickColour; side: Side; index: number };
export type Puzzle = {
  size: number;
  bricks: PuzzleBrick[];
  gates: PuzzleGate[];
  /** The bricks that leave, in order, the first being the answer. Each leaves by its gate. */
  solution: BrickColour[];
  /** The colours offered as answers (the bricks on the board). */
  options: BrickColour[];
};
export type PuzzleCopy = {
  eyebrow: string;
  question: string;
  /** Shown when the right brick is tapped first. */
  solved: string;
  /** Shown for a wrong first brick. */
  hint: string;
  answerLabel: string;
  /** The answer in words, for clients that cannot play. */
  answer: string;
  cta: { label: string; href: string };
};

const puzzleUi: Record<EmailLocale, { tap: string; again: string }> = {
  en: { tap: 'Tap the brick that moves first:', again: 'Try another brick.' },
  fr: { tap: 'Touchez la brique qui part en premier :', again: 'Essayez une autre brique.' },
  de: { tap: 'Tippen Sie auf den Stein, der zuerst zieht:', again: 'Versuchen Sie einen anderen Stein.' },
  es: { tap: 'Toca el ladrillo que se mueve primero:', again: 'Prueba con otro ladrillo.' },
  ja: { tap: '最初に動かすブロックをタップ：', again: 'ほかのブロックを試してみましょう。' },
  'pt-BR': { tap: 'Toque no bloco que se move primeiro:', again: 'Tente outro bloco.' },
};

const CELL = 46;
const EDGE = 10;

/**
 * The board, a question, and a row of brick buttons. Tap the right brick and it slides into its
 * gate, the next one follows, and the host cheers; tap a wrong one and it shakes and a hint shows.
 * Clients without checkboxes get the drawn board, the question, the answer and a link to play.
 */
export function puzzle(ctx: Ctx, p: Puzzle, copy: PuzzleCopy, host: FriendId = 'bloo'): string {
  const f = fonts(ctx.locale);
  const ui = puzzleUi[ctx.locale];
  const at = (r: number, c: number) => p.bricks.findIndex((b) => b.row === r && b.col === c);
  const gateOn = (side: Side, i: number) => p.gates.find((g) => g.side === side && g.index === i);
  const gateCell = (side: Side, i: number, w: number, h: number) => {
    const g = gateOn(side, i);
    return `<td width="${w}" height="${h}" style="width:${w}px;height:${h}px;padding:0;font-size:0;line-height:0;">${
      g ? `<div style="${side === 'top' || side === 'bottom' ? `width:${CELL - 8}px;height:6px;margin:${side === 'top' ? '2px' : '2px'} auto;` : `width:6px;height:${CELL - 8}px;margin:auto 2px;`}border-radius:3px;background:${BRICK[g.colour].face};font-size:0;line-height:0;">&nbsp;</div>` : '&nbsp;'
    }</td>`;
  };
  const rows: string[] = [];
  rows.push(`<tr><td width="${EDGE}" style="width:${EDGE}px;font-size:0;">&nbsp;</td>${Array.from({ length: p.size }, (_, c) => gateCell('top', c, CELL, EDGE)).join('')}<td width="${EDGE}" style="width:${EDGE}px;font-size:0;">&nbsp;</td></tr>`);
  for (let r = 0; r < p.size; r++) {
    const cells = Array.from({ length: p.size }, (_, c) => {
      const i = at(r, c);
      const inner =
        i < 0
          ? `<div style="width:12px;height:8px;margin:${(CELL - 8) / 2}px auto 0;border-radius:6px 6px 2px 2px;background:#3d3494;font-size:0;line-height:0;">&nbsp;</div>`
          : `<div class="ob-pz-b ob-pz-${p.bricks[i].colour}" style="width:${CELL - 6}px;height:${CELL - 10}px;margin:3px auto 0;border-radius:9px;background:${BRICK[p.bricks[i].colour].face};border-bottom:4px solid ${BRICK[p.bricks[i].colour].foot};text-align:center;font-size:0;line-height:0;"><span style="display:inline-block;padding-top:6px;">${studs(2, 'rgba(255,255,255,0.35)', 10, 6)}</span></div>`;
      return `<td width="${CELL}" height="${CELL}" valign="top" style="width:${CELL}px;height:${CELL}px;padding:0;background:#322a7a;border:1px solid #2a2364;">${inner}</td>`;
    }).join('');
    rows.push(`<tr>${gateCell('left', r, EDGE, CELL)}${cells}${gateCell('right', r, EDGE, CELL)}</tr>`);
  }
  rows.push(`<tr><td style="font-size:0;">&nbsp;</td>${Array.from({ length: p.size }, (_, c) => gateCell('bottom', c, CELL, EDGE)).join('')}<td style="font-size:0;">&nbsp;</td></tr>`);
  const width = p.size * (CELL + 2) + 2 * EDGE;

  // How far each brick slides to leave by its own gate, in px.
  const exit = (b: PuzzleBrick) => {
    const g = p.gates.find((x) => x.colour === b.colour)!;
    const pitch = CELL + 2;
    if (g.side === 'top') return `translateY(-${(b.row + 1) * pitch + EDGE}px)`;
    if (g.side === 'bottom') return `translateY(${(p.size - b.row) * pitch + EDGE}px)`;
    if (g.side === 'left') return `translateX(-${(b.col + 1) * pitch + EDGE}px)`;
    return `translateX(${(p.size - b.col) * pitch + EDGE}px)`;
  };
  const [first] = p.solution;
  const css = [
    '@media screen and (-webkit-min-device-pixel-ratio:0){',
    // Only where the radios survived: a client that strips <input> but keeps this CSS must still
    // get the answer, never a row of buttons that do nothing.
    '.ob-pz-in ~ .ob-pz-play{display:block !important;}',
    '.ob-pz-in ~ .ob-pz-still{display:none !important;}',
    '.ob-pz-opt:hover{transform:translateY(-2px);}',
    ...p.solution.map((c, i) => {
      const b = p.bricks.find((x) => x.colour === c)!;
      return `.ob-pz-ok:checked ~ .ob-pz-wrap .ob-pz-${c}{transform:${exit(b)};opacity:0;transition:transform .5s cubic-bezier(.5,0,.8,.4) ${(i * 0.65).toFixed(2)}s,opacity .2s linear ${(i * 0.65 + 0.35).toFixed(2)}s;}`;
    }),
    '.ob-pz-ok:checked ~ .ob-pz-yes{display:block !important;animation:ob-pz-pop .5s cubic-bezier(.3,1.5,.5,1);}',
    '.ob-pz-ok:checked ~ .ob-pz-play{display:none !important;}',
    '.ob-pz-no:checked ~ .ob-pz-nope{display:block !important;}',
    ...p.options.filter((c) => c !== first).map((c) => `.ob-pz-pick-${c}:checked ~ .ob-pz-wrap .ob-pz-${c}{animation:ob-pz-shake .45s ease both;}`),
    '@keyframes ob-pz-shake{0%,100%{transform:none;}20%{transform:translateX(-5px);}40%{transform:translateX(5px);}60%{transform:translateX(-3px);}80%{transform:translateX(3px);}}',
    '@keyframes ob-pz-pop{0%{transform:scale(.85);}100%{transform:none;}}',
    '}',
    '@media (prefers-reduced-motion:reduce){.ob-pz-b{transition:none !important;animation:none !important;}.ob-pz-yes{animation:none !important;}}',
  ].join('\n');
  const radios = p.options
    .map((c) => `<input type="radio" name="ob-pz" id="ob-pz-${c}" class="ob-pz-in ob-pz-pick-${c} ${c === first ? 'ob-pz-ok' : 'ob-pz-no'}" style="display:none;mso-hide:all;">`)
    .join('');
  const options = p.options
    .map(
      (c) =>
        `<label for="ob-pz-${c}" class="ob-pz-opt" style="display:inline-block;margin:0 4px 10px;padding:9px 16px 7px;border-radius:12px;background:${BRICK[c].face};border-bottom:4px solid ${BRICK[c].foot};color:${BRICK[c].ink};font-family:${f.display};font-size:16px;line-height:20px;font-weight:600;cursor:pointer;transition:transform .15s ease;">${esc(colourName(ctx.locale, c))}</label>`,
    )
    .join('');
  const cta = `<a class="ob-link" href="${esc(copy.cta.href)}" style="display:inline-block;margin:6px 0 0;color:${color.link};font-family:${f.display};font-size:17px;font-weight:600;text-decoration:underline;">${esc(copy.cta.label)}</a>`;
  return `<style>${css}</style>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:4px 0 24px;"><tr><td class="ob-card" style="background:#1a1350;border-radius:20px;border-bottom:6px solid #120c3a;padding:20px 14px 16px;text-align:center;">
<p style="margin:0 0 4px;font-family:${f.text};font-size:13px;line-height:1.4;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#ffd66e;">${esc(copy.eyebrow)}</p>
<p style="margin:0 0 14px;font-family:${f.display};font-size:20px;line-height:1.35;font-weight:600;color:#fff6d6;">${esc(copy.question)}</p>
<div style="text-align:center;">
<!--[if !mso]><!-->${radios}<!--<![endif]-->
<div class="ob-pz-wrap" style="display:inline-block;overflow:hidden;border-radius:14px;background:#2a2364;padding:2px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${width}" style="width:${width}px;border-collapse:collapse;">${rows.join('')}</table>
</div>
<div class="ob-pz-play" style="display:none;padding-top:14px;mso-hide:all;">
<p style="margin:0 0 8px;font-family:${f.text};font-size:15px;line-height:1.4;color:#c9c2ff;">${esc(ui.tap)}</p>
${options}
</div>
<div class="ob-pz-nope" style="display:none;padding-top:4px;mso-hide:all;"><p style="margin:0;font-family:${f.text};font-size:15px;line-height:1.5;color:#ffd66e;">${esc(copy.hint)} ${esc(ui.again)}</p></div>
<div class="ob-pz-yes" style="display:none;padding-top:12px;mso-hide:all;">
<img src="${esc(friendSrc(ctx, host, 'cheer'))}" width="80" height="80" alt="${esc(FRIENDS[host].name)}" style="display:block;width:80px;height:80px;margin:0 auto 6px;border:0;">
<p style="margin:0 0 6px;font-family:${f.display};font-size:19px;line-height:1.4;font-weight:600;color:#fff6d6;">${esc(copy.solved)}</p>
<a href="${esc(copy.cta.href)}" style="display:inline-block;margin:6px 0 4px;padding:12px 22px 10px;border-radius:12px;background:${color.gold};border-bottom:4px solid ${color.goldFoot};color:${color.ink};font-family:${f.display};font-size:17px;line-height:20px;font-weight:600;text-decoration:none;">${esc(copy.cta.label)}</a>
</div>
<div class="ob-pz-still" style="padding-top:14px;">
<p style="margin:0 0 6px;font-family:${f.text};font-size:13px;line-height:1.4;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#c9c2ff;">${esc(copy.answerLabel)}</p>
<p style="margin:0 0 6px;font-family:${f.text};font-size:16px;line-height:1.5;color:#fff6d6;">${esc(copy.answer)}</p>
${cta.replace(`color:${color.link}`, 'color:#ffd66e')}
</div>
</div>
</td></tr></table>`;
}

/**
 * The first puzzle, from the welcome series: red wants to go home through the red gate on the
 * right, and blue is in the way. Blue leaves first, up through its gate; then red slides home.
 */
export const firstPuzzle: Puzzle = {
  size: 4,
  bricks: [
    { colour: 'red', row: 2, col: 0 },
    { colour: 'blue', row: 2, col: 2 },
    { colour: 'yellow', row: 0, col: 1 },
  ],
  gates: [
    { colour: 'red', side: 'right', index: 2 },
    { colour: 'blue', side: 'top', index: 2 },
    { colour: 'yellow', side: 'bottom', index: 3 },
  ],
  solution: ['blue', 'red'],
  options: ['red', 'blue', 'yellow'],
};

const firstPuzzleCopy: Record<EmailLocale, Omit<PuzzleCopy, 'cta'> & { cta: string }> = {
  en: {
    eyebrow: 'Your first puzzle',
    question: 'Red wants to go home through the red gate. Which brick moves first?',
    solved: 'Blue slips out the top, red slides home. Board cleared in two moves!',
    hint: 'That one can’t clear the way for red.',
    answerLabel: 'The answer',
    answer: 'Blue first: it slides up through the blue gate, and then red has a clear run to the red gate.',
    cta: 'Play today’s board',
  },
  fr: {
    eyebrow: 'Votre premier casse-tête',
    question: 'Rouge veut rentrer par la porte rouge. Quelle brique part en premier ?',
    solved: 'Bleu file par le haut, rouge glisse jusqu’à chez lui. Plateau terminé en deux coups !',
    hint: 'Celle-ci ne libère pas le chemin de rouge.',
    answerLabel: 'La réponse',
    answer: 'Bleu d’abord : il remonte par la porte bleue, et rouge a ensuite la voie libre jusqu’à la porte rouge.',
    cta: 'Jouer au plateau du jour',
  },
  de: {
    eyebrow: 'Ihr erstes Rätsel',
    question: 'Rot will durch das rote Tor nach Hause. Welcher Stein zieht zuerst?',
    solved: 'Blau rutscht oben hinaus, Rot gleitet nach Hause. Brett in zwei Zügen gelöst!',
    hint: 'Dieser Stein macht Rot den Weg nicht frei.',
    answerLabel: 'Die Lösung',
    answer: 'Zuerst Blau: Er gleitet nach oben durch das blaue Tor, danach hat Rot freie Bahn zum roten Tor.',
    cta: 'Das Brett des Tages spielen',
  },
  es: {
    eyebrow: 'Tu primer acertijo',
    question: 'El rojo quiere volver a casa por la puerta roja. ¿Qué ladrillo se mueve primero?',
    solved: 'El azul sale por arriba y el rojo se desliza a casa. ¡Tablero resuelto en dos jugadas!',
    hint: 'Ese no le abre el camino al rojo.',
    answerLabel: 'La respuesta',
    answer: 'Primero el azul: sube por la puerta azul y después el rojo tiene vía libre hasta la puerta roja.',
    cta: 'Jugar el tablero del día',
  },
  ja: {
    eyebrow: 'はじめてのパズル',
    question: 'あかは、あかいゲートから帰りたい。最初に動かすのはどのブロック？',
    solved: 'あおが上から抜けて、あかがおうちへ。2手でクリア！',
    hint: 'それでは、あかの道はあきません。',
    answerLabel: 'こたえ',
    answer: 'まず、あお。あおいゲートから上に抜けると、あかはあかいゲートまでまっすぐ進めます。',
    cta: '今日の盤面で遊ぶ',
  },
  'pt-BR': {
    eyebrow: 'Seu primeiro desafio',
    question: 'O vermelho quer voltar para casa pelo portão vermelho. Qual bloco se move primeiro?',
    solved: 'O azul sai por cima e o vermelho desliza para casa. Tabuleiro resolvido em duas jogadas!',
    hint: 'Esse não libera o caminho do vermelho.',
    answerLabel: 'A resposta',
    answer: 'Primeiro o azul: ele sobe pelo portão azul e então o vermelho tem caminho livre até o portão vermelho.',
    cta: 'Jogar o tabuleiro do dia',
  },
};

export function firstPuzzleBlock(ctx: Ctx, dailyUrl: string): string {
  const c = firstPuzzleCopy[ctx.locale];
  return puzzle(ctx, firstPuzzle, { ...c, cta: { label: c.cta, href: dailyUrl } }, 'peach');
}

export function firstPuzzleText(locale: EmailLocale, dailyUrl: string): string[] {
  const c = firstPuzzleCopy[locale];
  return [`${c.eyebrow}: ${c.question}`, `${c.answerLabel}: ${c.answer}`, `${c.cta}: ${dailyUrl}`];
}

/**
 * "Brick of the week" sample: three bricks, three gates, one order. Pink leaves up through its
 * gate, which clears green's run to the right; green leaving clears purple's way up.
 */
export const weeklyPuzzle: Puzzle = {
  size: 4,
  bricks: [
    { colour: 'green', row: 1, col: 1 },
    { colour: 'pink', row: 1, col: 3 },
    { colour: 'purple', row: 3, col: 1 },
  ],
  gates: [
    { colour: 'green', side: 'right', index: 1 },
    { colour: 'pink', side: 'top', index: 3 },
    { colour: 'purple', side: 'top', index: 1 },
  ],
  solution: ['pink', 'green', 'purple'],
  options: ['green', 'pink', 'purple'],
};

export const weeklyPuzzleCopy: Record<EmailLocale, Omit<PuzzleCopy, 'cta'> & { cta: string }> = {
  en: {
    eyebrow: 'Brick of the week',
    question: 'Three bricks, three gates, and only one order works. Which brick moves first?',
    solved: 'Pink, then green, then purple. Three moves, board cleared!',
    hint: 'That brick is boxed in for now.',
    answerLabel: 'The answer',
    answer: 'Pink first, up through its gate. That frees green’s run to the right, and green leaving opens purple’s way up.',
    cta: 'Play today’s board',
  },
  fr: {
    eyebrow: 'La brique de la semaine',
    question: 'Trois briques, trois portes, et un seul ordre possible. Quelle brique part en premier ?',
    solved: 'Rose, puis vert, puis violet. Trois coups, plateau terminé !',
    hint: 'Cette brique est coincée pour l’instant.',
    answerLabel: 'La réponse',
    answer: 'Rose d’abord, vers le haut par sa porte. Cela libère la route de vert vers la droite, et le départ de vert ouvre le chemin de violet vers le haut.',
    cta: 'Jouer au plateau du jour',
  },
  de: {
    eyebrow: 'Stein der Woche',
    question: 'Drei Steine, drei Tore, und nur eine Reihenfolge klappt. Welcher Stein zieht zuerst?',
    solved: 'Pink, dann Grün, dann Lila. Drei Züge, Brett gelöst!',
    hint: 'Dieser Stein ist im Moment eingeklemmt.',
    answerLabel: 'Die Lösung',
    answer: 'Zuerst Pink, nach oben durch sein Tor. Das macht Grün den Weg nach rechts frei, und wenn Grün weg ist, kann Lila nach oben.',
    cta: 'Das Brett des Tages spielen',
  },
  es: {
    eyebrow: 'El ladrillo de la semana',
    question: 'Tres ladrillos, tres puertas y solo un orden funciona. ¿Qué ladrillo se mueve primero?',
    solved: 'Rosa, luego verde y luego morado. ¡Tres jugadas, tablero resuelto!',
    hint: 'Ese ladrillo está encerrado por ahora.',
    answerLabel: 'La respuesta',
    answer: 'Primero el rosa, hacia arriba por su puerta. Eso libera el camino del verde hacia la derecha, y al salir el verde el morado puede subir.',
    cta: 'Jugar el tablero del día',
  },
  ja: {
    eyebrow: '今週のブロック',
    question: 'ブロック3つ、ゲート3つ。正しい順番はひとつだけ。最初に動かすのはどれ？',
    solved: 'ピンク、みどり、むらさきの順。3手でクリア！',
    hint: 'そのブロックは、いまは動けません。',
    answerLabel: 'こたえ',
    answer: 'まずピンクを上のゲートへ。するとみどりが右へ進めるようになり、みどりが抜けるとむらさきが上へ進めます。',
    cta: '今日の盤面で遊ぶ',
  },
  'pt-BR': {
    eyebrow: 'O bloco da semana',
    question: 'Três blocos, três portões e só uma ordem funciona. Qual bloco se move primeiro?',
    solved: 'Rosa, depois verde, depois roxo. Três jogadas, tabuleiro resolvido!',
    hint: 'Esse bloco está preso por enquanto.',
    answerLabel: 'A resposta',
    answer: 'Primeiro o rosa, para cima pelo portão dele. Isso libera o caminho do verde para a direita, e quando o verde sai o roxo pode subir.',
    cta: 'Jogar o tabuleiro do dia',
  },
};
