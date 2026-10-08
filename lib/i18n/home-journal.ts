import type { Locale } from './locales';

/**
 * The home page's "from the journal" band (app/components/home-page.tsx), in every language.
 * It shows the newest stories, so every journal article is at most two clicks from its home
 * page (home → story, or home → journal → story).
 */
export const homeJournalCopy: Record<Locale, { eyebrow: string; title: string; lede: string; list: string; more: string }> = {
  en: {
    eyebrow: 'From the journal',
    title: 'Notes from around the board.',
    lede: 'Essays from the makers of OutBrick on puzzle design, player habits and accessibility, with every research claim cited.',
    list: 'Newest journal stories',
    more: 'Read the journal',
  },
  fr: {
    eyebrow: 'Le journal',
    title: 'Des notes autour du plateau.',
    lede: 'Les créateurs d’OutBrick écrivent sur la conception de puzzles, les habitudes de jeu et l’accessibilité, en citant chaque affirmation issue de la recherche.',
    list: 'Derniers articles du journal',
    more: 'Lire le journal',
  },
  de: {
    eyebrow: 'Aus dem Journal',
    title: 'Notizen rund ums Spielbrett.',
    lede: 'Die Macher von OutBrick schreiben über Puzzle-Design, Spielgewohnheiten und Barrierefreiheit – jede Forschungsaussage mit Quelle.',
    list: 'Neueste Artikel im Journal',
    more: 'Zum Journal',
  },
  es: {
    eyebrow: 'Del diario',
    title: 'Notas desde el tablero.',
    lede: 'Los creadores de OutBrick escriben sobre diseño de puzles, hábitos de juego y accesibilidad, con una fuente para cada afirmación basada en investigaciones.',
    list: 'Últimos artículos del diario',
    more: 'Leer el diario',
  },
  ja: {
    eyebrow: 'ジャーナルから',
    title: '盤面のまわりの読みもの。',
    lede: 'OutBrickの制作者が、パズルの設計、遊びの習慣、アクセシビリティについて書いています。研究に関する主張にはすべて出典を示しています。',
    list: 'ジャーナルの新着記事',
    more: 'ジャーナルを読む',
  },
  'pt-BR': {
    eyebrow: 'Do blog',
    title: 'Notas sobre o tabuleiro.',
    lede: 'Os criadores do OutBrick escrevem sobre design de quebra-cabeças, hábitos de jogo e acessibilidade, com fonte para toda afirmação baseada em pesquisa.',
    list: 'Artigos mais recentes do blog',
    more: 'Ler o blog',
  },
};
