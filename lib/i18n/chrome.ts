/**
 * The shared furniture of the brick site — masthead, App Store badge, footer,
 * language switcher — in every language the home page and play guide are
 * published in. English reproduces app/village-shell.tsx's original wording.
 *
 * Links in `editorialNav` and the footer that lead to pages only published in
 * English (the journal, the legal pages …) keep their English address; the
 * shell marks them `hreflang="en"` on translated pages.
 */

import type { Locale } from './locales';

export type NavLink = { href: string; label: string };

export type ChromeCopy = {
  skip: string;
  /** Screen-reader tail on the logo when it jumps to the top of the page. */
  backToTop: string;
  /** aria-label of the home page's section nav. */
  sections: string;
  /** aria-label of the play guide's nav. */
  primaryNav: string;
  menu: string;
  /** "Sections menu", "Sections (menu)". */
  menuLabel: (label: string) => string;
  menuPanelLabel: (label: string) => string;
  badgeLabel: string;
  badgeAlt: string;
  /** The home page's section anchors, in order: rule, journey, cast, fair, apple. */
  homeNav: [string, string, string, string, string];
  /** The game, Journal, Mascots, Press, About, Authors, Research, Support. */
  editorialNav: [string, string, string, string, string, string, string, string];
  footer: {
    blurb: string;
    game: string;
    download: string;
    journey: string;
    friends: string;
    costs: string;
    playGuide: string;
    whatsNew: string;
    journal: string;
    pressKit: string;
    help: string;
    support: string;
    privacy: string;
    privacyChoices: string;
    terms: string;
    license: string;
    eula: string;
    age: string;
    accessibility: string;
    refunds: string;
    contact: string;
    /** The company column: press room, creators kit, affiliate programme, careers (English-only pages). */
    company: string;
    pressRoom: string;
    creators: string;
    affiliates: string;
    careers: string;
    legal: string;
  };
  /** Heading and aria-label of the language switcher. */
  language: string;
};

const en: ChromeCopy = {
  skip: 'Skip to content',
  backToTop: ' — back to top',
  sections: 'Sections',
  primaryNav: 'Primary navigation',
  menu: 'Menu',
  menuLabel: (label) => `${label} menu`,
  menuPanelLabel: (label) => `${label} (menu)`,
  badgeLabel: 'Download OutBrick on the App Store',
  badgeAlt: 'Download on the App Store',
  homeNav: ['The rule', 'The Journey', 'The cast', 'What it costs', 'Built for Apple'],
  editorialNav: ['The game', 'Journal', 'Mascots', 'Press', 'About', 'Authors', 'Research', 'Support'],
  footer: {
    blurb: 'OutBrick: Block Sort Puzzle. Slide, sort, clear the board. Free on the App Store.',
    game: 'The game',
    download: 'Download on the App Store',
    journey: 'The Journey',
    friends: 'The nine friends',
    costs: 'What it costs',
    playGuide: 'Play guide',
    whatsNew: 'What’s new',
    journal: 'Journal',
    pressKit: 'Press kit',
    help: 'Help & legal',
    support: 'Support',
    privacy: 'Privacy policy',
    privacyChoices: 'Privacy choices',
    terms: 'Terms',
    license: 'License agreement',
    eula: 'Apple EULA',
    age: 'Age suitability',
    accessibility: 'Accessibility',
    refunds: 'Refunds & purchases',
    contact: 'Contact',
    company: 'Company',
    pressRoom: 'Press room',
    creators: 'Creators',
    affiliates: 'Affiliates',
    careers: 'Careers',
    legal:
      '© 2026 OutBrick. Apple, the Apple logo, iPhone, iPad, Mac, Apple TV, Apple Watch and Apple Vision Pro are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc.',
  },
  language: 'Language',
};

const fr: ChromeCopy = {
  skip: 'Aller au contenu',
  backToTop: ' — retour en haut',
  sections: 'Rubriques',
  primaryNav: 'Navigation principale',
  menu: 'Menu',
  menuLabel: (label) => `Menu ${label.toLowerCase()}`,
  menuPanelLabel: (label) => `${label} (menu)`,
  badgeLabel: 'Télécharger OutBrick dans l’App Store',
  badgeAlt: 'Télécharger dans l’App Store',
  homeNav: ['La règle', 'Le Voyage', 'Les amis', 'Ce que ça coûte', 'Pensé pour Apple'],
  editorialNav: ['Le jeu', 'Journal', 'Mascottes', 'Presse', 'À propos', 'Auteurs', 'Recherche', 'Assistance'],
  footer: {
    blurb: 'OutBrick: Block Sort Puzzle. Glissez, triez, videz le plateau. Gratuit sur l’App Store.',
    game: 'Le jeu',
    download: 'Télécharger dans l’App Store',
    journey: 'Le Voyage',
    friends: 'Les neuf amis',
    costs: 'Ce que ça coûte',
    playGuide: 'Guide du jeu',
    whatsNew: 'Nouveautés',
    journal: 'Journal',
    pressKit: 'Kit presse',
    help: 'Aide et mentions légales',
    support: 'Assistance',
    privacy: 'Confidentialité',
    privacyChoices: 'Vos choix de confidentialité',
    terms: 'Conditions d’utilisation',
    license: 'Contrat de licence',
    eula: 'CLUF d’Apple',
    age: 'Classification par âge',
    accessibility: 'Accessibilité',
    refunds: 'Remboursements et achats',
    contact: 'Contact',
    company: 'Entreprise',
    pressRoom: 'Espace presse',
    creators: 'Créateurs',
    affiliates: 'Affiliation',
    careers: 'Carrières',
    legal:
      '© 2026 OutBrick. Apple, le logo Apple, iPhone, iPad, Mac, Apple TV, Apple Watch et Apple Vision Pro sont des marques d’Apple Inc., déposées aux États-Unis et dans d’autres pays et régions. App Store est une marque de service d’Apple Inc.',
  },
  language: 'Langue',
};

const de: ChromeCopy = {
  skip: 'Zum Inhalt springen',
  backToTop: ' – nach oben',
  sections: 'Abschnitte',
  primaryNav: 'Hauptnavigation',
  menu: 'Menü',
  menuLabel: (label) => `Menü: ${label}`,
  menuPanelLabel: (label) => `${label} (Menü)`,
  badgeLabel: 'OutBrick im App Store laden',
  badgeAlt: 'Laden im App Store',
  homeNav: ['Die Regel', 'Die Reise', 'Die Freunde', 'Was es kostet', 'Für Apple gebaut'],
  editorialNav: ['Das Spiel', 'Journal', 'Maskottchen', 'Presse', 'Über uns', 'Autoren', 'Forschung', 'Support'],
  footer: {
    blurb: 'OutBrick: Block Sort Puzzle. Schieben, sortieren, Feld frei. Kostenlos im App Store.',
    game: 'Das Spiel',
    download: 'Laden im App Store',
    journey: 'Die Reise',
    friends: 'Die neun Freunde',
    costs: 'Was es kostet',
    playGuide: 'Spielanleitung',
    whatsNew: 'Was ist neu',
    journal: 'Journal',
    pressKit: 'Pressekit',
    help: 'Hilfe & Rechtliches',
    support: 'Support',
    privacy: 'Datenschutzerklärung',
    privacyChoices: 'Datenschutzeinstellungen',
    terms: 'Nutzungsbedingungen',
    license: 'Lizenzvereinbarung',
    eula: 'Apple-EULA',
    age: 'Altersfreigabe',
    accessibility: 'Barrierefreiheit',
    refunds: 'Erstattungen & Käufe',
    contact: 'Kontakt',
    company: 'Unternehmen',
    pressRoom: 'Presse',
    creators: 'Creator',
    affiliates: 'Partnerprogramm',
    careers: 'Karriere',
    legal:
      '© 2026 OutBrick. Apple, das Apple Logo, iPhone, iPad, Mac, Apple TV, Apple Watch und Apple Vision Pro sind Marken der Apple Inc., die in den USA und weiteren Ländern und Regionen eingetragen sind. App Store ist eine Dienstleistungsmarke der Apple Inc.',
  },
  language: 'Sprache',
};

const es: ChromeCopy = {
  skip: 'Ir al contenido',
  backToTop: ' — volver arriba',
  sections: 'Secciones',
  primaryNav: 'Navegación principal',
  menu: 'Menú',
  menuLabel: (label) => `Menú de ${label.toLowerCase()}`,
  menuPanelLabel: (label) => `${label} (menú)`,
  badgeLabel: 'Descargar OutBrick en el App Store',
  badgeAlt: 'Descárgalo en el App Store',
  homeNav: ['La regla', 'El Viaje', 'Los amigos', 'Lo que cuesta', 'Hecho para Apple'],
  editorialNav: ['El juego', 'Journal', 'Mascotas', 'Prensa', 'Quiénes somos', 'Autores', 'Investigación', 'Soporte'],
  footer: {
    blurb: 'OutBrick: Block Sort Puzzle. Desliza, ordena, despeja el tablero. Gratis en el App Store.',
    game: 'El juego',
    download: 'Descárgalo en el App Store',
    journey: 'El Viaje',
    friends: 'Los nueve amigos',
    costs: 'Lo que cuesta',
    playGuide: 'Cómo se juega',
    whatsNew: 'Novedades',
    journal: 'Journal',
    pressKit: 'Kit de prensa',
    help: 'Ayuda y legal',
    support: 'Soporte',
    privacy: 'Política de privacidad',
    privacyChoices: 'Opciones de privacidad',
    terms: 'Condiciones',
    license: 'Acuerdo de licencia',
    eula: 'EULA de Apple',
    age: 'Clasificación por edad',
    accessibility: 'Accesibilidad',
    refunds: 'Reembolsos y compras',
    contact: 'Contacto',
    company: 'Empresa',
    pressRoom: 'Sala de prensa',
    creators: 'Creadores',
    affiliates: 'Afiliados',
    careers: 'Empleo',
    legal:
      '© 2026 OutBrick. Apple, el logotipo de Apple, iPhone, iPad, Mac, Apple TV, Apple Watch y Apple Vision Pro son marcas comerciales de Apple Inc., registradas en EE. UU. y en otros países y regiones. App Store es una marca de servicio de Apple Inc.',
  },
  language: 'Idioma',
};

const ja: ChromeCopy = {
  skip: '本文へスキップ',
  backToTop: '（ページの先頭へ）',
  sections: 'セクション',
  primaryNav: 'メインナビゲーション',
  menu: 'メニュー',
  menuLabel: (label) => `${label}メニュー`,
  menuPanelLabel: (label) => `${label}（メニュー）`,
  badgeLabel: 'App StoreでOutBrickをダウンロード',
  badgeAlt: 'App Storeからダウンロード',
  homeNav: ['ルール', 'ジャーニー', 'なかまたち', '料金のこと', 'Apple対応'],
  editorialNav: ['ゲーム', 'Journal', 'マスコット', 'プレス', 'OutBrickについて', '著者', 'リサーチ', 'サポート'],
  footer: {
    blurb: 'OutBrick: Block Sort Puzzle。スライドして、仕分けて、ステージをクリア。App Storeで無料。',
    game: 'ゲーム',
    download: 'App Storeからダウンロード',
    journey: 'ジャーニー',
    friends: '9人のなかま',
    costs: '料金のこと',
    playGuide: '遊び方ガイド',
    whatsNew: '最新情報',
    journal: 'Journal',
    pressKit: 'プレスキット',
    help: 'ヘルプと規約',
    support: 'サポート',
    privacy: 'プライバシーポリシー',
    privacyChoices: 'プライバシーの選択',
    terms: '利用規約',
    license: '使用許諾契約',
    eula: 'Apple EULA',
    age: '年齢制限',
    accessibility: 'アクセシビリティ',
    refunds: '返金と購入',
    contact: 'お問い合わせ',
    company: '会社情報',
    pressRoom: 'プレスルーム',
    creators: 'クリエイター',
    affiliates: 'アフィリエイト',
    careers: '採用情報',
    legal:
      '© 2026 OutBrick. Apple、Appleのロゴ、iPhone、iPad、Mac、Apple TV、Apple Watch、Apple Vision Proは、米国およびその他の国や地域で登録されたApple Inc.の商標です。App StoreはApple Inc.のサービスマークです。',
  },
  language: '言語',
};

export const chromeCopy: Record<Locale, ChromeCopy> = { en, fr, de, es, ja };
