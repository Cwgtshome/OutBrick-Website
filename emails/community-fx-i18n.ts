// The words the feature board adds to the community emails (community-fx, 7 October 2026): the
// 'badge' notification and the badge names, and the ideas status "In progress", in the site's
// five languages. emails/community-i18n.ts folds these into each language's CommunityCopy.
//
// Same rules as the rest of the community copy: the site's voice, British spelling in English,
// German "Sie", Spanish "tú", no markup in any string.

import type { BadgeKey } from '../lib/community/contract.ts';
import type { EmailLocale } from './i18n.ts';

export type BadgeEmailCopy = {
  /** As it reads after "Stop emails about". */
  kindName: string;
  /** The ideas status in_progress. */
  inProgress: string;
  badges: Record<BadgeKey, { name: string; description: string }>;
  /** A badge's name with its level where it has one: "Helpful (10 solved answers)", "Anniversary (2 years)". */
  named: (badge: string | null | undefined, level: number | null | undefined) => string;
  kind: {
    subject: (badge: string) => string;
    intro: (badge: string) => string;
    /** The panel's label above the badge's description. */
    what: string;
    cta: string;
  };
  digestLine: (badge: string) => string;
  /** When the badge is not one we know (an old email, a removed badge). */
  fallback: string;
};

const named = (copy: () => BadgeEmailCopy, level: (badge: BadgeKey, n: number) => string | null) => (badge: string | null | undefined, n: number | null | undefined) => {
  const c = copy();
  const key = badge as BadgeKey;
  const entry = badge && Object.hasOwn(c.badges, badge) ? c.badges[key] : null;
  if (!entry) return c.fallback;
  const suffix = n && n > 1 ? level(key, n) : key === 'helpful' && n === 1 ? level(key, 1) : null;
  return suffix ? `${entry.name} (${suffix})` : entry.name;
};

const en: BadgeEmailCopy = {
  kindName: 'badges you earn',
  inProgress: 'In progress',
  badges: {
    first_post: { name: 'First post', description: 'You posted in the community for the first time.' },
    helpful: { name: 'Helpful', description: 'Your answers were marked as the solution.' },
    bug_hunter: { name: 'Bug hunter', description: 'You reported a bug that the OutBrick team confirmed.' },
    idea_maker: { name: 'Idea maker', description: 'You suggested an idea that the team has planned.' },
    shipped: { name: 'Shipped', description: 'You suggested an idea that is now in OutBrick.' },
    welcomer: { name: 'Welcomer', description: 'You replied to ten newcomers’ first threads.' },
    beta_tester: { name: 'Beta tester', description: 'You tested OutBrick before it was released.' },
    accessibility_champion: { name: 'Accessibility champion', description: 'You made OutBrick better for players who use assistive technology.' },
    anniversary: { name: 'Anniversary', description: 'You have been a member of OutBrick Community for a year or more.' },
    popular_post: { name: 'Popular post', description: 'One of your posts received 25 reactions.' },
  },
  named: named(() => en, (badge, n) => (badge === 'helpful' ? (n === 1 ? '1 solved answer' : `${n} solved answers`) : badge === 'anniversary' ? `${n} years` : null)),
  kind: {
    subject: (badge) => `You earned a badge: ${badge}`,
    intro: (badge) => `Congratulations! You’ve earned the ${badge} badge. It now shows on your profile, and next to your name when it’s your top badge.`,
    what: 'What it’s for',
    cta: 'See your badges',
  },
  digestLine: (badge) => `You earned a badge: ${badge}`,
  fallback: 'a new badge',
};

const fr: BadgeEmailCopy = {
  kindName: 'les badges que vous obtenez',
  inProgress: 'En cours',
  badges: {
    first_post: { name: 'Premier message', description: 'Vous avez publié dans la communauté pour la première fois.' },
    helpful: { name: 'Serviable', description: 'Vos réponses ont été marquées comme solution.' },
    bug_hunter: { name: 'Chasseur de bugs', description: 'Vous avez signalé un bug confirmé par l’équipe OutBrick.' },
    idea_maker: { name: 'Faiseur d’idées', description: 'Vous avez proposé une idée que l’équipe a planifiée.' },
    shipped: { name: 'Livré', description: 'Vous avez proposé une idée qui fait maintenant partie d’OutBrick.' },
    welcomer: { name: 'Accueillant', description: 'Vous avez répondu aux premières discussions de dix nouveaux venus.' },
    beta_tester: { name: 'Bêta-testeur', description: 'Vous avez testé OutBrick avant sa sortie.' },
    accessibility_champion: { name: 'Champion de l’accessibilité', description: 'Vous avez rendu OutBrick meilleur pour les joueurs qui utilisent des technologies d’assistance.' },
    anniversary: { name: 'Anniversaire', description: 'Vous êtes membre de la Communauté OutBrick depuis un an ou plus.' },
    popular_post: { name: 'Message populaire', description: 'L’un de vos messages a reçu 25 réactions.' },
  },
  named: named(() => fr, (badge, n) => (badge === 'helpful' ? (n === 1 ? '1 réponse résolue' : `${n} réponses résolues`) : badge === 'anniversary' ? `${n} ans` : null)),
  kind: {
    subject: (badge) => `Vous avez obtenu un badge : ${badge}`,
    intro: (badge) => `Félicitations ! Vous avez obtenu le badge ${badge}. Il apparaît sur votre profil, et à côté de votre nom quand c’est votre meilleur badge.`,
    what: 'Ce qu’il récompense',
    cta: 'Voir vos badges',
  },
  digestLine: (badge) => `Vous avez obtenu un badge : ${badge}`,
  fallback: 'un nouveau badge',
};

const de: BadgeEmailCopy = {
  kindName: 'Abzeichen, die Sie erhalten',
  inProgress: 'In Arbeit',
  badges: {
    first_post: { name: 'Erster Beitrag', description: 'Sie haben zum ersten Mal in der Community geschrieben.' },
    helpful: { name: 'Hilfsbereit', description: 'Ihre Antworten wurden als Lösung markiert.' },
    bug_hunter: { name: 'Fehlerjäger', description: 'Sie haben einen Fehler gemeldet, den das OutBrick-Team bestätigt hat.' },
    idea_maker: { name: 'Ideengeber', description: 'Sie haben eine Idee vorgeschlagen, die das Team eingeplant hat.' },
    shipped: { name: 'Umgesetzt', description: 'Sie haben eine Idee vorgeschlagen, die jetzt in OutBrick steckt.' },
    welcomer: { name: 'Gastgeber', description: 'Sie haben auf die ersten Themen von zehn Neulingen geantwortet.' },
    beta_tester: { name: 'Betatester', description: 'Sie haben OutBrick vor der Veröffentlichung getestet.' },
    accessibility_champion: { name: 'Barrierefreiheits-Champion', description: 'Sie haben OutBrick für Spieler mit Bedienungshilfen besser gemacht.' },
    anniversary: { name: 'Jubiläum', description: 'Sie sind seit einem Jahr oder länger Mitglied der OutBrick-Community.' },
    popular_post: { name: 'Beliebter Beitrag', description: 'Einer Ihrer Beiträge hat 25 Reaktionen erhalten.' },
  },
  named: named(() => de, (badge, n) => (badge === 'helpful' ? (n === 1 ? '1 gelöste Antwort' : `${n} gelöste Antworten`) : badge === 'anniversary' ? `${n} Jahre` : null)),
  kind: {
    subject: (badge) => `Sie haben ein Abzeichen erhalten: ${badge}`,
    intro: (badge) => `Herzlichen Glückwunsch! Sie haben das Abzeichen „${badge}“ erhalten. Es erscheint in Ihrem Profil und, wenn es Ihr bestes ist, neben Ihrem Namen.`,
    what: 'Wofür es steht',
    cta: 'Ihre Abzeichen ansehen',
  },
  digestLine: (badge) => `Sie haben ein Abzeichen erhalten: ${badge}`,
  fallback: 'ein neues Abzeichen',
};

const es: BadgeEmailCopy = {
  kindName: 'las insignias que consigues',
  inProgress: 'En curso',
  badges: {
    first_post: { name: 'Primera publicación', description: 'Publicaste en la comunidad por primera vez.' },
    helpful: { name: 'Servicial', description: 'Tus respuestas se marcaron como solución.' },
    bug_hunter: { name: 'Cazador de errores', description: 'Informaste de un error que el equipo de OutBrick confirmó.' },
    idea_maker: { name: 'Creador de ideas', description: 'Propusiste una idea que el equipo ha planificado.' },
    shipped: { name: 'Publicada', description: 'Propusiste una idea que ya forma parte de OutBrick.' },
    welcomer: { name: 'Anfitrión', description: 'Respondiste a los primeros hilos de diez recién llegados.' },
    beta_tester: { name: 'Probador beta', description: 'Probaste OutBrick antes de su lanzamiento.' },
    accessibility_champion: { name: 'Campeón de la accesibilidad', description: 'Hiciste OutBrick mejor para quienes juegan con tecnologías de apoyo.' },
    anniversary: { name: 'Aniversario', description: 'Llevas un año o más en la Comunidad OutBrick.' },
    popular_post: { name: 'Publicación popular', description: 'Una de tus publicaciones recibió 25 reacciones.' },
  },
  named: named(() => es, (badge, n) => (badge === 'helpful' ? (n === 1 ? '1 respuesta resuelta' : `${n} respuestas resueltas`) : badge === 'anniversary' ? `${n} años` : null)),
  kind: {
    subject: (badge) => `Has conseguido una insignia: ${badge}`,
    intro: (badge) => `¡Enhorabuena! Has conseguido la insignia ${badge}. Aparece en tu perfil y, cuando es tu mejor insignia, junto a tu nombre.`,
    what: 'Por qué se concede',
    cta: 'Ver tus insignias',
  },
  digestLine: (badge) => `Has conseguido una insignia: ${badge}`,
  fallback: 'una nueva insignia',
};

const ja: BadgeEmailCopy = {
  kindName: '獲得したバッジ',
  inProgress: '対応中',
  badges: {
    first_post: { name: '初投稿', description: 'コミュニティに初めて投稿しました。' },
    helpful: { name: 'お助け', description: 'あなたの回答が解決策に選ばれました。' },
    bug_hunter: { name: 'バグハンター', description: '報告したバグをOutBrickチームが確認しました。' },
    idea_maker: { name: 'アイデアメーカー', description: '提案したアイデアがチームの計画に入りました。' },
    shipped: { name: '実装済み', description: '提案したアイデアがOutBrickに実装されました。' },
    welcomer: { name: 'おもてなし', description: '新しいメンバー10人の最初のスレッドに返信しました。' },
    beta_tester: { name: 'ベータテスター', description: 'リリース前のOutBrickをテストしました。' },
    accessibility_champion: { name: 'アクセシビリティの立役者', description: '支援技術を使うプレイヤーのためにOutBrickをより良くしました。' },
    anniversary: { name: '記念日', description: 'OutBrickコミュニティのメンバーになって1年以上です。' },
    popular_post: { name: '人気の投稿', description: 'あなたの投稿に25件のリアクションが付きました。' },
  },
  named: named(() => ja, (badge, n) => (badge === 'helpful' ? `解決${n}件` : badge === 'anniversary' ? `${n}年` : null)),
  kind: {
    subject: (badge) => `バッジを獲得しました：${badge}`,
    intro: (badge) => `おめでとうございます！「${badge}」バッジを獲得しました。プロフィールに表示され、いちばん上のバッジなら名前の横にも表示されます。`,
    what: 'バッジについて',
    cta: 'バッジを見る',
  },
  digestLine: (badge) => `バッジを獲得しました：${badge}`,
  fallback: '新しいバッジ',
};

export const badgeEmailCopy: Record<EmailLocale, BadgeEmailCopy> = { en, fr, de, es, ja };
