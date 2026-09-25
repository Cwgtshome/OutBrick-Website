/**
 * The journal in the languages it is translated into.
 *
 * Guides are published in French, German, Spanish and Japanese at
 * `/<locale>/blog/<slug>`, beside an index at `/<locale>/blog`: the five
 * cornerstone guides (lib/blog-l10n/<locale>.ts, typed section by section) and
 * the journal batches (lib/blog-l10n/extra/<locale>-<n>.ts). A batch guide is
 * published once all four languages carry it; until then it stays English only.
 *
 * - `journalUi` holds the words of the article chrome (contents, takeaways,
 *   references, author card …). `en` is the English page's original wording,
 *   so the English articles render exactly as they did.
 * - lib/blog-l10n/<locale>.ts holds the translated article copy. Each file is a
 *   `LocaleGuides`, so a missing guide, a missing section or a missing field is
 *   a TypeScript error; `localizeArticle` then checks, at build time, that every
 *   list (paragraphs, bullets, takeaways, FAQs) has as many entries as the
 *   English, so a dropped paragraph fails the build instead of shipping.
 * - References (citations) stay in their original language.
 */

import { getArticle, type BlogArticle, type BlogSection } from '../blog';
import { de } from '../blog-l10n/de';
import { es } from '../blog-l10n/es';
import { fr } from '../blog-l10n/fr';
import { ja } from '../blog-l10n/ja';
import { extraGuides } from '../blog-l10n/extra';
import { siteUrl } from '../site';
import type { Locale, TranslatedLocale } from './locales';
import { translatedLocales } from './locales';

/** The five cornerstone guides, typed section by section. */
const cornerstoneSlugs = [
  'how-to-solve-sliding-block-puzzles',
  'colour-sort-puzzle-tips',
  'relaxing-puzzle-games-what-makes-one-calm',
  'offline-puzzle-games-iphone',
  'why-two-minute-puzzles-feel-good',
] as const;
export type GuideSlug = (typeof cornerstoneSlugs)[number];

/**
 * Every guide that exists in all four languages, in the order the localized index lists them:
 * the cornerstones first, then the batch guides in journal order.
 */
export const translatedGuideSlugs: readonly string[] = [
  ...cornerstoneSlugs,
  ...Object.keys(extraGuides.fr).filter((slug) => translatedLocales.every((l) => slug in extraGuides[l])),
];

export function isTranslatedGuide(slug: string): boolean {
  return translatedGuideSlugs.includes(slug);
}

/** Each guide's section ids, as in lib/blog.ts. A translation must cover every one. */
type SectionIds = {
  'how-to-solve-sliding-block-puzzles':
    | 'work-backwards-from-the-exit'
    | 'find-the-move-that-makes-space'
    | 'count-before-you-commit'
    | 'use-undo-as-a-thinking-tool'
    | 'know-when-to-reset';
  'colour-sort-puzzle-tips':
    | 'read-the-board-first'
    | 'clear-the-colour-that-frees-the-most'
    | 'plan-in-chunks'
    | 'targets-and-stars'
    | 'mistakes-that-cost-moves';
  'relaxing-puzzle-games-what-makes-one-calm':
    | 'where-pressure-comes-from'
    | 'move-limits-vs-clocks'
    | 'fair-lives'
    | 'interruptions'
    | 'calm-checklist';
  'offline-puzzle-games-iphone':
    | 'test-offline-first'
    | 'one-handed-play'
    | 'sessions-between-stops'
    | 'battery-and-attention'
    | 'beyond-the-phone';
  'why-two-minute-puzzles-feel-good':
    | 'the-feeling-of-a-clean-clear'
    | 'what-short-play-can-and-cannot-do'
    | 'the-outbrick-loop'
    | 'take-the-good-bit-with-you';
};

export type SectionTranslation = { title: string; paragraphs: string[]; bullets?: string[]; note?: string };

/**
 * One guide in one language: every piece of visible copy. Inline links keep
 * the [label](/path) syntax; internal links point at the translated page where
 * one exists (`/fr`, `/fr/play`, `/fr/blog/…`) and at the English page
 * otherwise, which the renderer marks `hreflang="en"`.
 */
export type GuideTranslation<S extends GuideSlug> = {
  /** ≤ 60 characters (CJK counted double), phrased the way people search in that language. */
  title: string;
  /** ≤ 155 characters: the meta description and the standfirst. */
  dek: string;
  imageAlt: string;
  /** Meta keywords and `article:tag`. */
  tags: string[];
  intro: string;
  keyTakeaways: string[];
  sections: Record<SectionIds[S], SectionTranslation>;
  pullQuote: string;
  faqs: Array<{ question: string; answer: string }>;
};

export type LocaleGuides = { [S in GuideSlug]: GuideTranslation<S> };

/** A batch guide in one language: the same fields, sections keyed by the English section ids. */
export type ExtraGuideTranslation = Omit<GuideTranslation<GuideSlug>, 'sections'> & { sections: Record<string, SectionTranslation> };
export type ExtraGuides = Record<string, ExtraGuideTranslation>;

const guides: Record<TranslatedLocale, LocaleGuides> = { fr, de, es, ja };

/* ------------------------------------------------------------------ UI words */

export type JournalUi = {
  /** The breadcrumb's aria-label. */
  breadcrumb: string;
  journal: string;
  /** "7 min read" from 7. */
  readingTime: (minutes: number) => string;
  published: string;
  updated: string;
  figcaption: string;
  inThisStory: string;
  toc: string;
  allStories: string;
  takeaways: string;
  sources: string;
  source: (n: number, label: string) => string;
  faqLabel: string;
  faqTitle: string;
  references: string;
  referencesNote: string;
  newTab: string;
  writtenBy: string;
  moreFrom: (authorName: string) => string;
  gameNoteTitle: string;
  gameNoteBody: string;
  costsLink: string;
  keepReading: string;
  moreTitle: string;
  by: (name: string) => string;
  /** The share button, and what reading-aids.tsx announces after a copy. */
  share: string;
  linkCopied: string;
  /** A section link could not be copied (the click still put the link in the address bar). */
  copyFailedLink: string;
  /** The share button could not copy either. */
  copyFailedShare: string;
  /** The accessible name of the link icon beside a section heading. */
  copySectionLink: (sectionTitle: string) => string;
  /** The small label on a citation preview card. */
  sourceCard: (n: number) => string;
  filedUnder: string;
  /** Previous / next at the foot of an article, and that nav's accessible name. */
  storyNav: string;
  previousStory: string;
  nextStory: string;
  /** Category names, by their English name. */
  categories: Record<string, string>;
  /** Author roles and bios, by author id. Names never change. */
  authors: Record<string, { role: string; bio: string }>;
  /** The language switcher on a translated page. */
  languages: string;
  /** The localized journal index. */
  index: {
    title: string;
    description: string;
    label: string;
    h1: string;
    lede: string;
    count: (n: number) => string;
    guides: string;
    more: string;
    moreLink: string;
  };
};

const en: JournalUi = {
  breadcrumb: 'Breadcrumb',
  journal: 'Journal',
  readingTime: (minutes) => `${minutes} min read`,
  published: 'Published',
  updated: 'Updated',
  figcaption: 'Journal illustration',
  inThisStory: 'In this story',
  toc: 'Table of contents',
  allStories: 'All journal stories',
  takeaways: 'If you only read this',
  sources: 'Sources',
  source: (n, label) => `Source ${n}: ${label}`,
  faqLabel: 'Questions, answered',
  faqTitle: 'A few useful answers',
  references: 'References',
  referencesNote:
    'Where a source is a studio’s own history or a news account rather than a study, the article says so beside the claim.',
  newTab: ' (opens in a new tab)',
  writtenBy: 'Written by',
  moreFrom: (name) => `More from ${name.split(' ')[0] === 'OutBrick' ? 'the desk' : name.split(' ')[0]}`,
  gameNoteTitle: 'The game this journal sits beside',
  gameNoteBody:
    'OutBrick is a sliding-brick colour-sort puzzle: 2,000 solver-verified boards, 167 brick-built villages and nine brick friends. Free on the App Store, with lives and opt-in rewarded videos, and no clock anywhere.',
  costsLink: 'What it costs you',
  keepReading: 'Keep reading',
  moreTitle: 'Three more from the shelves.',
  by: (name) => `By ${name}`,
  share: 'Share',
  linkCopied: 'Link copied',
  copyFailedLink: 'Could not copy. The address bar now holds the link.',
  copyFailedShare: 'Could not copy. Copy the address from the address bar.',
  copySectionLink: (title) => `Copy link to section: ${title}`,
  sourceCard: (n) => `Source ${n}`,
  filedUnder: 'Filed under',
  storyNav: 'More from the journal',
  previousStory: 'Previous story',
  nextStory: 'Next story',
  categories: {},
  authors: {},
  languages: 'Read in',
  index: {
    title: 'The OutBrick Journal',
    description: '',
    label: 'The OutBrick Journal',
    h1: 'The OutBrick Journal',
    lede: '',
    count: (n) => `${n} stories`,
    guides: 'Guides',
    more: 'More stories in English',
    moreLink: 'The full journal',
  },
};

const frUi: JournalUi = {
  breadcrumb: 'Fil d’Ariane',
  journal: 'Journal',
  readingTime: (minutes) => `${minutes} min de lecture`,
  published: 'Publié le',
  updated: 'Mis à jour le',
  figcaption: 'Illustration du journal',
  inThisStory: 'Dans cet article',
  toc: 'Table des matières',
  allStories: 'Tous les guides en français',
  takeaways: 'Si vous ne lisez que ça',
  sources: 'Sources',
  source: (n, label) => `Source ${n}\u202f: ${label}`,
  faqLabel: 'Vos questions',
  faqTitle: 'Quelques réponses utiles',
  references: 'Références',
  referencesNote:
    'Les références sont citées dans leur langue d’origine. Quand une source relève de l’histoire racontée par un studio ou d’un article de presse plutôt que d’une étude, l’article le précise à côté de l’affirmation.',
  newTab: ' (s’ouvre dans un nouvel onglet)',
  writtenBy: 'Écrit par',
  moreFrom: (name) => (name.startsWith('OutBrick') ? 'Tous les articles de la rédaction' : `Tous les articles de ${name.split(' ')[0]}`),
  gameNoteTitle: 'Le jeu dont parle ce journal',
  gameNoteBody:
    'OutBrick est un puzzle où l’on fait glisser des briques pour les trier par couleur : 2 000 plateaux vérifiés par un solveur, 167 villages en briques et neuf amis en briques. Gratuit sur l’App Store, avec des vies et des vidéos récompensées facultatives, et aucun chrono nulle part.',
  costsLink: 'Ce que ça vous coûte',
  keepReading: 'À lire aussi',
  moreTitle: 'Trois autres guides en français.',
  by: (name) => `Par ${name}`,
  share: 'Partager',
  linkCopied: 'Lien copié',
  copyFailedLink: 'Copie impossible. Le lien se trouve maintenant dans la barre d’adresse.',
  copyFailedShare: 'Copie impossible. Copiez l’adresse depuis la barre d’adresse.',
  copySectionLink: (title) => `Copier le lien vers la section : ${title}`,
  sourceCard: (n) => `Source ${n}`,
  filedUnder: 'Classé dans',
  storyNav: 'Autres guides du journal',
  previousStory: 'Guide précédent',
  nextStory: 'Guide suivant',
  categories: {
    'Game craft': 'Conception de jeux',
    'OutBrick practice': 'OutBrick en pratique',
    'Player habits': 'Habitudes de jeu',
  },
  authors: {
    'mourad-hamdi': {
      role: 'Fondateur et PDG',
      bio: 'Mourad crée de petits jeux réfléchis pour les moments entre deux tâches. OutBrick est son expérience en cours pour un jeu plus calme.',
    },
    'outbrick-editorial': {
      role: 'Expérience joueur et recherche en conception',
      bio: 'La rédaction d’OutBrick transforme la recherche sur les joueurs, les pratiques d’accessibilité et les leçons de fabrication d’un jeu en notes utiles et faciles à lire.',
    },
  },
  languages: 'Lire en',
  index: {
    title: 'Le journal OutBrick : guides de puzzle en français',
    description:
      'Cinq guides du journal OutBrick traduits en français : résoudre un puzzle de blocs coulissants, trier par couleur, jouer au calme et hors ligne.',
    label: 'Le journal OutBrick',
    h1: 'Le journal OutBrick, en français',
    lede: 'Cinq guides pratiques des créateurs d’OutBrick, traduits de l’anglais : comment lire un plateau, dépenser moins de coups, repérer un jeu vraiment reposant et bien choisir un jeu pour le train ou l’avion. Chaque affirmation tirée de la recherche renvoie à sa source.',
    count: (n) => `${n} guides`,
    guides: 'Les guides',
    more: 'Le reste du journal est en anglais.',
    moreLink: 'Lire les autres articles (en anglais)',
  },
};

const deUi: JournalUi = {
  breadcrumb: 'Brotkrumennavigation',
  journal: 'Journal',
  readingTime: (minutes) => `${minutes} Min. Lesezeit`,
  published: 'Veröffentlicht am',
  updated: 'Aktualisiert am',
  figcaption: 'Illustration aus dem Journal',
  inThisStory: 'In diesem Artikel',
  toc: 'Inhaltsverzeichnis',
  allStories: 'Alle Ratgeber auf Deutsch',
  takeaways: 'Das Wichtigste in Kürze',
  sources: 'Quellen',
  source: (n, label) => `Quelle ${n}: ${label}`,
  faqLabel: 'Häufige Fragen',
  faqTitle: 'Ein paar nützliche Antworten',
  references: 'Literatur',
  referencesNote:
    'Die Quellen sind in ihrer Originalsprache angegeben. Wo eine Quelle die eigene Geschichte eines Studios oder ein Pressebericht ist und keine Studie, steht das im Artikel direkt neben der Aussage.',
  newTab: ' (öffnet in einem neuen Tab)',
  writtenBy: 'Geschrieben von',
  moreFrom: (name) => (name.startsWith('OutBrick') ? 'Mehr von der Redaktion' : `Mehr von ${name.split(' ')[0]}`),
  gameNoteTitle: 'Das Spiel zu diesem Journal',
  gameNoteBody:
    'OutBrick ist ein Schiebepuzzle, bei dem du Steine nach Farben sortierst: 2.000 per Solver geprüfte Spielfelder, 167 Dörfer aus Bausteinen und neun Freunde aus Steinen. Kostenlos im App Store, mit Leben und freiwilligen Belohnungsvideos, und nirgends eine Uhr.',
  costsLink: 'Was es dich kostet',
  keepReading: 'Weiterlesen',
  moreTitle: 'Drei weitere Ratgeber auf Deutsch.',
  by: (name) => `Von ${name}`,
  share: 'Teilen',
  linkCopied: 'Link kopiert',
  copyFailedLink: 'Kopieren nicht möglich. Der Link steht jetzt in der Adressleiste.',
  copyFailedShare: 'Kopieren nicht möglich. Kopiere die Adresse aus der Adressleiste.',
  copySectionLink: (title) => `Link zum Abschnitt kopieren: ${title}`,
  sourceCard: (n) => `Quelle ${n}`,
  filedUnder: 'Abgelegt unter',
  storyNav: 'Mehr aus dem Journal',
  previousStory: 'Vorheriger Ratgeber',
  nextStory: 'Nächster Ratgeber',
  categories: {
    'Game craft': 'Spieldesign',
    'OutBrick practice': 'OutBrick in der Praxis',
    'Player habits': 'Spielgewohnheiten',
  },
  authors: {
    'mourad-hamdi': {
      role: 'Gründer und CEO',
      bio: 'Mourad macht kleine, durchdachte Spiele für die Zeit zwischen zwei Aufgaben. OutBrick ist sein laufendes Experiment für ruhigeres Spielen.',
    },
    'outbrick-editorial': {
      role: 'Spielerlebnis und Designforschung',
      bio: 'Die OutBrick-Redaktion macht aus Spielerforschung, Barrierefreiheit in der Praxis und Erfahrungen aus der Spieleentwicklung nützliche, gut lesbare Notizen.',
    },
  },
  languages: 'Lesen auf',
  index: {
    title: 'Das OutBrick-Journal: Puzzle-Ratgeber auf Deutsch',
    description:
      'Fünf Ratgeber aus dem OutBrick-Journal auf Deutsch: Schiebepuzzles lösen, Farben sortieren, entspannte Puzzlespiele finden und offline spielen.',
    label: 'Das OutBrick-Journal',
    h1: 'Das OutBrick-Journal auf Deutsch',
    lede: 'Fünf praktische Ratgeber von den Machern von OutBrick, aus dem Englischen übersetzt: wie du ein Spielfeld liest, mit weniger Zügen auskommst, ein wirklich entspanntes Puzzlespiel erkennst und das richtige Spiel für Zug und Flugzeug findest. Jede Aussage aus der Forschung verlinkt ihre Quelle.',
    count: (n) => `${n} Ratgeber`,
    guides: 'Die Ratgeber',
    more: 'Der Rest des Journals ist auf Englisch.',
    moreLink: 'Weitere Artikel lesen (auf Englisch)',
  },
};

const esUi: JournalUi = {
  breadcrumb: 'Ruta de navegación',
  journal: 'Journal',
  readingTime: (minutes) => `${minutes} min de lectura`,
  published: 'Publicado el',
  updated: 'Actualizado el',
  figcaption: 'Ilustración del journal',
  inThisStory: 'En este artículo',
  toc: 'Índice',
  allStories: 'Todas las guías en español',
  takeaways: 'Si solo lees esto',
  sources: 'Fuentes',
  source: (n, label) => `Fuente ${n}: ${label}`,
  faqLabel: 'Preguntas frecuentes',
  faqTitle: 'Algunas respuestas útiles',
  references: 'Referencias',
  referencesNote:
    'Las referencias se citan en su idioma original. Cuando una fuente es la historia contada por un estudio o una noticia, y no un estudio científico, el artículo lo indica junto a la afirmación.',
  newTab: ' (se abre en una pestaña nueva)',
  writtenBy: 'Escrito por',
  moreFrom: (name) => (name.startsWith('OutBrick') ? 'Más de la redacción' : `Más de ${name.split(' ')[0]}`),
  gameNoteTitle: 'El juego que acompaña a este journal',
  gameNoteBody:
    'OutBrick es un puzle de deslizar ladrillos y ordenarlos por colores: 2000 tableros verificados por un solucionador, 167 pueblos de ladrillo y nueve amigos de ladrillo. Gratis en el App Store, con vidas y vídeos con recompensa opcionales, y sin reloj en ninguna parte.',
  costsLink: 'Lo que te cuesta',
  keepReading: 'Sigue leyendo',
  moreTitle: 'Otras tres guías en español.',
  by: (name) => `Por ${name}`,
  share: 'Compartir',
  linkCopied: 'Enlace copiado',
  copyFailedLink: 'No se pudo copiar. El enlace ya está en la barra de direcciones.',
  copyFailedShare: 'No se pudo copiar. Copia la dirección desde la barra de direcciones.',
  copySectionLink: (title) => `Copiar el enlace a la sección: ${title}`,
  sourceCard: (n) => `Fuente ${n}`,
  filedUnder: 'Archivado en',
  storyNav: 'Más del journal',
  previousStory: 'Guía anterior',
  nextStory: 'Guía siguiente',
  categories: {
    'Game craft': 'Diseño de juegos',
    'OutBrick practice': 'OutBrick en la práctica',
    'Player habits': 'Hábitos de juego',
  },
  authors: {
    'mourad-hamdi': {
      role: 'Fundador y CEO',
      bio: 'Mourad crea juegos pequeños y pensados para el hueco entre una tarea y la siguiente. OutBrick es su experimento en curso para jugar con más calma.',
    },
    'outbrick-editorial': {
      role: 'Experiencia del jugador e investigación de diseño',
      bio: 'La redacción de OutBrick convierte la investigación sobre jugadores, la práctica de la accesibilidad y lo aprendido al hacer juegos en notas útiles y fáciles de leer.',
    },
  },
  languages: 'Leer en',
  index: {
    title: 'El journal de OutBrick: guías de puzles en español',
    description:
      'Cinco guías del journal de OutBrick en español: resolver rompecabezas de bloques deslizantes, ordenar colores, juegos relajantes y juegos sin conexión.',
    label: 'El journal de OutBrick',
    h1: 'El journal de OutBrick, en español',
    lede: 'Cinco guías prácticas de los creadores de OutBrick, traducidas del inglés: cómo leer un tablero, gastar menos movimientos, reconocer un juego de verdad relajante y elegir bien un juego para el tren o el avión. Cada dato de investigación enlaza a su fuente.',
    count: (n) => `${n} guías`,
    guides: 'Las guías',
    more: 'El resto del journal está en inglés.',
    moreLink: 'Leer más artículos (en inglés)',
  },
};

const jaUi: JournalUi = {
  breadcrumb: 'パンくずリスト',
  journal: 'Journal',
  readingTime: (minutes) => `${minutes}分で読めます`,
  published: '公開日',
  updated: '更新日',
  figcaption: 'Journalのイラスト',
  inThisStory: 'この記事の内容',
  toc: '目次',
  allStories: '日本語のガイド一覧',
  takeaways: 'この記事のポイント',
  sources: '出典',
  source: (n, label) => `出典${n}：${label}`,
  faqLabel: 'よくある質問',
  faqTitle: '役に立つ答えをいくつか',
  references: '参考文献',
  referencesNote:
    '参考文献は原語のまま記載しています。出典が研究ではなく、スタジオ自身の歴史や報道記事である場合は、本文の該当箇所でその旨を明記しています。',
  newTab: '（新しいタブで開きます）',
  writtenBy: '執筆',
  moreFrom: (name) => (name.startsWith('OutBrick') ? '編集部のほかの記事' : `${name.split(' ')[0]}のほかの記事`),
  gameNoteTitle: 'このJournalのとなりにあるゲーム',
  gameNoteBody:
    'OutBrickは、ブロックをスライドして色分けするパズルです。ソルバーで検証済みの2,000ステージ、ブロックでできた167の村、9人のブロックのなかま。App Storeで無料。ライフと任意のリワード動画があり、時間制限はどこにもありません。',
  costsLink: 'あなたが払うもの',
  keepReading: 'あわせて読みたい',
  moreTitle: '日本語で読めるガイドをあと3本。',
  by: (name) => `執筆：${name}`,
  share: '共有',
  linkCopied: 'リンクをコピーしました',
  copyFailedLink: 'コピーできませんでした。リンクはアドレスバーに表示されています。',
  copyFailedShare: 'コピーできませんでした。アドレスバーからURLをコピーしてください。',
  copySectionLink: (title) => `「${title}」へのリンクをコピー`,
  sourceCard: (n) => `出典${n}`,
  filedUnder: 'カテゴリーとタグ',
  storyNav: 'Journalのほかのガイド',
  previousStory: '前のガイド',
  nextStory: '次のガイド',
  categories: {
    'Game craft': 'ゲームデザイン',
    'OutBrick practice': 'OutBrick実践',
    'Player habits': '遊び方と習慣',
  },
  authors: {
    'mourad-hamdi': {
      role: '創業者・CEO',
      bio: 'Mouradは、用事と用事のあいだに遊べる、小さくてていねいなゲームをつくっています。OutBrickは、もっと落ち着いて遊べるゲームを目指す彼の実験です。',
    },
    'outbrick-editorial': {
      role: 'プレイヤー体験・デザインリサーチ',
      bio: 'OutBrick編集部は、プレイヤー研究、アクセシビリティの実践、ゲームづくりで得た学びを、役に立って読みやすいノートにまとめています。',
    },
  },
  languages: 'ほかの言語で読む',
  index: {
    title: 'OutBrick Journal：日本語で読めるパズルガイド',
    description:
      'OutBrick Journalのガイド5本を日本語で。スライドパズルの解き方、色分けパズルのコツ、癒されるパズルゲーム、オフラインで遊べるゲームを紹介します。',
    label: 'OutBrick Journal',
    h1: 'OutBrick Journal 日本語版',
    lede: 'OutBrickの開発チームによる実践ガイド5本を、英語から翻訳しました。ステージの読み方、手数を減らすコツ、本当に落ち着けるパズルゲームの見分け方、電車や飛行機で遊ぶゲームの選び方。研究にもとづく記述には、すべて出典へのリンクがついています。',
    count: (n) => `${n}本のガイド`,
    guides: 'ガイド',
    more: 'ほかの記事は英語のみです。',
    moreLink: 'ほかの記事を読む（英語）',
  },
};

export const journalUi: Record<Locale, JournalUi> = { en, fr: frUi, de: deUi, es: esUi, ja: jaUi };

/* ------------------------------------------------------------------ paths */

/** `/blog/<slug>` in English, `/<locale>/blog/<slug>` otherwise. */
export function guidePath(locale: Locale, slug: string): string {
  return locale === 'en' ? `/blog/${slug}` : `/${locale}/blog/${slug}`;
}

export function guideUrl(locale: Locale, slug: string): string {
  return `${siteUrl}${guidePath(locale, slug)}`;
}

/** hreflang set for a translated guide: every language, `x-default` English. Absolute URLs. */
export function guideLanguages(slug: string): Record<string, string> {
  const languages: Record<string, string> = { en: guideUrl('en', slug) };
  for (const l of translatedLocales) languages[l] = guideUrl(l, slug);
  languages['x-default'] = guideUrl('en', slug);
  return languages;
}

/** `/blog` in English, `/<locale>/blog` otherwise. */
export function journalPath(locale: Locale): string {
  return locale === 'en' ? '/blog' : `/${locale}/blog`;
}

/** hreflang set for the journal index: the English journal and the four translated indexes. */
export function journalLanguages(): Record<string, string> {
  const languages: Record<string, string> = { en: `${siteUrl}/blog` };
  for (const l of translatedLocales) languages[l] = `${siteUrl}/${l}/blog`;
  languages['x-default'] = `${siteUrl}/blog`;
  return languages;
}

/* ------------------------------------------------------------------ articles */

function sameShape(what: string, english: unknown[] | undefined, translated: unknown[] | undefined) {
  if ((english?.length ?? 0) !== (translated?.length ?? 0)) {
    throw new Error(`lib/blog-l10n: ${what} has ${translated?.length ?? 0} entries, the English has ${english?.length ?? 0}`);
  }
}

/**
 * The English article with its visible copy replaced by the `locale`
 * translation. Slug, section ids, sources, references, image and dates stay
 * the English ones; `category` stays the English key (for its link), and the
 * reading time is rewritten from the English count.
 */
export function localizeArticle(slug: string, locale: TranslatedLocale): BlogArticle {
  const english = getArticle(slug);
  if (!english) throw new Error(`lib/i18n/blog.ts: ${slug} is not in lib/blog.ts`);
  const t = ((guides[locale] as Record<string, unknown>)[slug] ?? extraGuides[locale][slug]) as ExtraGuideTranslation | undefined;
  if (!t) throw new Error(`lib/blog-l10n: ${slug} has no ${locale} translation`);
  const where = `${locale}/${slug}`;
  const tSections = t.sections as Record<string, SectionTranslation>;
  const sectionIds = Object.keys(tSections);
  if (sectionIds.length !== english.sections.length) throw new Error(`lib/blog-l10n: ${where} has ${sectionIds.length} sections, the English has ${english.sections.length}`);
  sameShape(`${where} keyTakeaways`, english.keyTakeaways, t.keyTakeaways);
  sameShape(`${where} faqs`, english.faqs, t.faqs);

  const sections: BlogSection[] = english.sections.map((section) => {
    const ts = tSections[section.id];
    if (!ts) throw new Error(`lib/blog-l10n: ${where} is missing section ${section.id}`);
    sameShape(`${where}#${section.id} paragraphs`, section.paragraphs, ts.paragraphs);
    sameShape(`${where}#${section.id} bullets`, section.bullets, ts.bullets);
    if (Boolean(section.note) !== Boolean(ts.note)) throw new Error(`lib/blog-l10n: ${where}#${section.id} note does not match the English`);
    return { ...section, title: ts.title, paragraphs: ts.paragraphs, bullets: ts.bullets, note: ts.note };
  });
  if (Boolean(english.pullQuote) !== Boolean(t.pullQuote)) throw new Error(`lib/blog-l10n: ${where} pull quote does not match the English`);

  const minutes = Number.parseInt(english.readingTime, 10);
  return {
    ...english,
    title: t.title,
    dek: t.dek,
    imageAlt: t.imageAlt,
    tags: t.tags,
    intro: t.intro,
    keyTakeaways: t.keyTakeaways,
    sections,
    pullQuote: t.pullQuote,
    faqs: t.faqs,
    readingTime: journalUi[locale].readingTime(minutes),
  };
}
