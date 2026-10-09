import type { Locale } from '../i18n/locales.ts';
import type { HelpCategory } from './model.ts';

/** The Help Centre's own words (everything that is not article text), in all six languages. */
export type HelpUi = {
  name: string;
  eyebrow: string;
  hubTitle: string;
  hubLede: string;
  metaTitle: string;
  metaDescription: string;
  searchHint: string;
  searchPlaceholder: string;
  searchEmpty: string;
  searchOne: string;
  searchMany: string;
  categories: Record<HelpCategory, { title: string; blurb: string }>;
  popular: string;
  popularLinks: { label: string; slug: string; section?: string }[];
  onThisPage: string;
  related: string;
  next: string;
  previous: string;
  checked: (version: string, date: string) => string;
  minutes: (n: number) => string;
  guides: (n: number) => string;
  callout: { tip: string; note: string; important: string; a11y: string };
  screenshot: string;
  enlarge: string;
  englishShot: string;
  askTitle: string;
  askText: string;
  askAction: string;
  bugTitle: string;
  bugText: string;
  bugAction: string;
  contactTitle: string;
  contactText: string;
  contactAction: string;
  backToHelp: string;
  allGuides: string;
  breadcrumb: string;
  communityCrumb: string;
  /** "Started reading in another language? This guide is also in …" */
  alsoIn: string;
  top: string;
};

export const helpUi: Record<Locale, HelpUi> = {
  en: {
    name: 'Help Centre',
    eyebrow: 'OutBrick Help Centre',
    hubTitle: 'Everything OutBrick, explained.',
    hubLede:
      'Illustrated guides to every screen, menu and setting in the released game, written by the team, with a whole shelf on VoiceOver and accessibility. Read them here, then ask the community anything they do not answer.',
    metaTitle: 'OutBrick Help Centre: illustrated guides, VoiceOver and accessibility',
    metaDescription:
      'Team-written, illustrated guides to OutBrick on iPhone and iPad: how to play, every menu, lives and undos, the Journey, Settings, VoiceOver, Voice Control, Switch Control and every accessibility feature.',
    searchHint: 'Search the guides',
    searchPlaceholder: 'Lives, VoiceOver, undo, iCloud…',
    searchEmpty: 'No guide matches that yet. Try fewer words, or ask the community below.',
    searchOne: '1 guide matches.',
    searchMany: '{n} guides match.',
    categories: {
      start: { title: 'Getting started', blurb: 'Your first board and a tour of every menu.' },
      play: { title: 'Playing a board', blurb: 'Moves, goals, special bricks, blockers and boosters.' },
      progress: { title: 'Journey and rewards', blurb: 'Villages, stars, events, the shop and your friends.' },
      accessibility: { title: 'Accessibility', blurb: 'VoiceOver, Voice Control, Switch Control, vision, hearing and motion.' },
      apple: { title: 'Apple features', blurb: 'Widgets, Siri, Spotlight, Game Center, Messages and notifications.' },
      account: { title: 'Settings, progress and privacy', blurb: 'Every setting, your iCloud progress, purchases and your data.' },
      community: { title: 'Getting help', blurb: 'Troubleshooting, the community and reporting a bug well.' },
    },
    popular: 'Popular right now',
    popularLinks: [
      { label: 'Play with VoiceOver', slug: 'voiceover' },
      { label: 'What every button on the board does', slug: 'playing-a-board', section: 'screen' },
      { label: 'Out of moves: what happens next', slug: 'lives-moves-and-undos', section: 'out-of-moves' },
      { label: 'Colour-blind and high-contrast boards', slug: 'vision-hearing-and-motion' },
      { label: 'Moving to a new iPhone', slug: 'progress-privacy-and-account', section: 'new-device' },
    ],
    onThisPage: 'On this page',
    related: 'Keep reading',
    next: 'Next guide',
    previous: 'Previous guide',
    checked: (version, date) => `Checked against OutBrick ${version} · ${date}`,
    minutes: (n) => `${n} min read`,
    guides: (n) => (n === 1 ? '1 guide' : `${n} guides`),
    callout: { tip: 'Tip', note: 'Good to know', important: 'Important', a11y: 'Accessibility' },
    screenshot: 'Screenshot from OutBrick on iPhone',
    enlarge: 'Open full size',
    englishShot: 'Screenshot shown in English.',
    askTitle: 'Still stuck?',
    askText: 'Ask in the community. The team and other players answer in the open, and your email address is never shown.',
    askAction: 'Ask the community',
    bugTitle: 'Found a bug?',
    bugText: 'A good report gets fixed faster. The bug form asks for exactly what we need.',
    bugAction: 'Report a bug',
    contactTitle: 'Rather write privately?',
    contactText: 'The contact form reaches the same team, privately. Use it for purchases and anything personal.',
    contactAction: 'Contact support',
    backToHelp: 'Help Centre',
    allGuides: 'All guides',
    breadcrumb: 'Breadcrumb',
    communityCrumb: 'Community',
    alsoIn: 'This guide in other languages',
    top: 'Back to top',
  },
  fr: {
    name: 'Centre d’aide',
    eyebrow: 'Centre d’aide OutBrick',
    hubTitle: 'Tout OutBrick, expliqué.',
    hubLede:
      'Des guides illustrés pour chaque écran, menu et réglage du jeu publié, écrits par l’équipe, avec tout un rayon consacré à VoiceOver et à l’accessibilité. Lisez-les ici, puis posez à la communauté les questions qui restent.',
    metaTitle: 'Centre d’aide OutBrick : guides illustrés, VoiceOver et accessibilité',
    metaDescription:
      'Des guides illustrés, écrits par l’équipe, pour OutBrick sur iPhone et iPad : comment jouer, chaque menu, vies et annulations, le Voyage, les Réglages, VoiceOver, Contrôle vocal, Contrôle de sélection et toutes les fonctions d’accessibilité.',
    searchHint: 'Rechercher dans les guides',
    searchPlaceholder: 'Vies, VoiceOver, annulation, iCloud…',
    searchEmpty: 'Aucun guide ne correspond. Essayez moins de mots, ou demandez à la communauté ci-dessous.',
    searchOne: '1 guide correspond.',
    searchMany: '{n} guides correspondent.',
    categories: {
      start: { title: 'Premiers pas', blurb: 'Votre premier plateau et la visite de chaque menu.' },
      play: { title: 'Jouer un plateau', blurb: 'Coups, objectifs, briques spéciales, obstacles et bonus.' },
      progress: { title: 'Voyage et récompenses', blurb: 'Villages, étoiles, événements, la boutique et vos amis.' },
      accessibility: { title: 'Accessibilité', blurb: 'VoiceOver, Contrôle vocal, Contrôle de sélection, vue, audition et mouvement.' },
      apple: { title: 'Fonctions Apple', blurb: 'Widgets, Siri, Spotlight, Game Center, Messages et notifications.' },
      account: { title: 'Réglages, progression et confidentialité', blurb: 'Chaque réglage, votre progression iCloud, vos achats et vos données.' },
      community: { title: 'Obtenir de l’aide', blurb: 'Dépannage, la communauté et bien signaler un bug.' },
    },
    popular: 'Les plus consultés',
    popularLinks: [
      { label: 'Jouer avec VoiceOver', slug: 'voiceover' },
      { label: 'À quoi sert chaque bouton du plateau', slug: 'playing-a-board', section: 'screen' },
      { label: 'Plus de coups : la suite', slug: 'lives-moves-and-undos', section: 'out-of-moves' },
      { label: 'Daltonisme et contraste élevé', slug: 'vision-hearing-and-motion' },
      { label: 'Passer à un nouvel iPhone', slug: 'progress-privacy-and-account', section: 'new-device' },
    ],
    onThisPage: 'Sur cette page',
    related: 'À lire ensuite',
    next: 'Guide suivant',
    previous: 'Guide précédent',
    checked: (version, date) => `Vérifié avec OutBrick ${version} · ${date}`,
    minutes: (n) => `${n} min de lecture`,
    guides: (n) => (n === 1 ? '1 guide' : `${n} guides`),
    callout: { tip: 'Astuce', note: 'Bon à savoir', important: 'Important', a11y: 'Accessibilité' },
    screenshot: 'Capture d’écran d’OutBrick sur iPhone',
    enlarge: 'Voir en grand',
    englishShot: 'Capture affichée en anglais.',
    askTitle: 'Toujours bloqué ?',
    askText: 'Posez la question à la communauté. L’équipe et les joueurs répondent publiquement, et votre adresse e-mail n’est jamais affichée.',
    askAction: 'Demander à la communauté',
    bugTitle: 'Un bug ?',
    bugText: 'Un signalement précis est corrigé plus vite. Le formulaire demande exactement ce qu’il nous faut.',
    bugAction: 'Signaler un bug',
    contactTitle: 'Vous préférez écrire en privé ?',
    contactText: 'Le formulaire de contact joint la même équipe, en privé. Utilisez-le pour les achats et tout ce qui est personnel.',
    contactAction: 'Contacter l’assistance',
    backToHelp: 'Centre d’aide',
    allGuides: 'Tous les guides',
    breadcrumb: 'Fil d’Ariane',
    communityCrumb: 'Communauté',
    alsoIn: 'Ce guide dans d’autres langues',
    top: 'Haut de page',
  },
  de: {
    name: 'Hilfe-Center',
    eyebrow: 'OutBrick Hilfe-Center',
    hubTitle: 'OutBrick, ganz erklärt.',
    hubLede:
      'Bebilderte Anleitungen zu jedem Bildschirm, Menü und jeder Einstellung des veröffentlichten Spiels, vom Team geschrieben, mit einem ganzen Regal zu VoiceOver und Bedienungshilfen. Lies sie hier und frag die Community, was offen bleibt.',
    metaTitle: 'OutBrick Hilfe-Center: bebilderte Anleitungen, VoiceOver und Bedienungshilfen',
    metaDescription:
      'Bebilderte Anleitungen des Teams zu OutBrick auf iPhone und iPad: Spielregeln, jedes Menü, Leben und Rückgängig, die Reise, Einstellungen, VoiceOver, Sprachsteuerung, Schaltersteuerung und alle Bedienungshilfen.',
    searchHint: 'Anleitungen durchsuchen',
    searchPlaceholder: 'Leben, VoiceOver, Rückgängig, iCloud…',
    searchEmpty: 'Keine Anleitung passt. Versuch es mit weniger Wörtern oder frag unten die Community.',
    searchOne: '1 Anleitung passt.',
    searchMany: '{n} Anleitungen passen.',
    categories: {
      start: { title: 'Erste Schritte', blurb: 'Dein erstes Brett und ein Rundgang durch jedes Menü.' },
      play: { title: 'Ein Brett spielen', blurb: 'Züge, Ziele, Spezialsteine, Hindernisse und Booster.' },
      progress: { title: 'Reise und Belohnungen', blurb: 'Dörfer, Sterne, Events, der Shop und deine Freunde.' },
      accessibility: { title: 'Bedienungshilfen', blurb: 'VoiceOver, Sprachsteuerung, Schaltersteuerung, Sehen, Hören und Bewegung.' },
      apple: { title: 'Apple-Funktionen', blurb: 'Widgets, Siri, Spotlight, Game Center, Nachrichten und Mitteilungen.' },
      account: { title: 'Einstellungen, Fortschritt und Datenschutz', blurb: 'Jede Einstellung, dein iCloud-Fortschritt, Käufe und deine Daten.' },
      community: { title: 'Hilfe bekommen', blurb: 'Problemlösung, die Community und gute Fehlerberichte.' },
    },
    popular: 'Gerade gefragt',
    popularLinks: [
      { label: 'Mit VoiceOver spielen', slug: 'voiceover' },
      { label: 'Was jede Taste am Brett tut', slug: 'playing-a-board', section: 'screen' },
      { label: 'Keine Züge mehr: wie es weitergeht', slug: 'lives-moves-and-undos', section: 'out-of-moves' },
      { label: 'Farbfehlsichtigkeit und hoher Kontrast', slug: 'vision-hearing-and-motion' },
      { label: 'Umzug auf ein neues iPhone', slug: 'progress-privacy-and-account', section: 'new-device' },
    ],
    onThisPage: 'Auf dieser Seite',
    related: 'Weiterlesen',
    next: 'Nächste Anleitung',
    previous: 'Vorherige Anleitung',
    checked: (version, date) => `Geprüft mit OutBrick ${version} · ${date}`,
    minutes: (n) => `${n} Min. Lesezeit`,
    guides: (n) => (n === 1 ? '1 Anleitung' : `${n} Anleitungen`),
    callout: { tip: 'Tipp', note: 'Gut zu wissen', important: 'Wichtig', a11y: 'Bedienungshilfen' },
    screenshot: 'Bildschirmfoto von OutBrick auf dem iPhone',
    enlarge: 'In voller Größe öffnen',
    englishShot: 'Bildschirmfoto auf Englisch.',
    askTitle: 'Noch Fragen?',
    askText: 'Frag die Community. Team und Spieler antworten öffentlich, und deine E-Mail-Adresse wird nie angezeigt.',
    askAction: 'Community fragen',
    bugTitle: 'Einen Fehler gefunden?',
    bugText: 'Ein guter Bericht wird schneller behoben. Das Fehlerformular fragt genau das ab, was wir brauchen.',
    bugAction: 'Fehler melden',
    contactTitle: 'Lieber privat schreiben?',
    contactText: 'Das Kontaktformular erreicht dasselbe Team, privat. Nutze es für Käufe und alles Persönliche.',
    contactAction: 'Support kontaktieren',
    backToHelp: 'Hilfe-Center',
    allGuides: 'Alle Anleitungen',
    breadcrumb: 'Brotkrumennavigation',
    communityCrumb: 'Community',
    alsoIn: 'Diese Anleitung in anderen Sprachen',
    top: 'Nach oben',
  },
  es: {
    name: 'Centro de ayuda',
    eyebrow: 'Centro de ayuda de OutBrick',
    hubTitle: 'Todo OutBrick, explicado.',
    hubLede:
      'Guías ilustradas de cada pantalla, menú y ajuste del juego publicado, escritas por el equipo, con toda una estantería sobre VoiceOver y accesibilidad. Léelas aquí y pregunta a la comunidad lo que no resuelvan.',
    metaTitle: 'Centro de ayuda de OutBrick: guías ilustradas, VoiceOver y accesibilidad',
    metaDescription:
      'Guías ilustradas del equipo para OutBrick en iPhone y iPad: cómo jugar, cada menú, vidas y deshacer, el Viaje, los Ajustes, VoiceOver, Control por voz, Control por botón y todas las funciones de accesibilidad.',
    searchHint: 'Buscar en las guías',
    searchPlaceholder: 'Vidas, VoiceOver, deshacer, iCloud…',
    searchEmpty: 'Ninguna guía coincide. Prueba con menos palabras o pregunta abajo a la comunidad.',
    searchOne: '1 guía coincide.',
    searchMany: '{n} guías coinciden.',
    categories: {
      start: { title: 'Primeros pasos', blurb: 'Tu primer tablero y un recorrido por cada menú.' },
      play: { title: 'Jugar un tablero', blurb: 'Movimientos, objetivos, ladrillos especiales, obstáculos y potenciadores.' },
      progress: { title: 'Viaje y recompensas', blurb: 'Aldeas, estrellas, eventos, la tienda y tus amigos.' },
      accessibility: { title: 'Accesibilidad', blurb: 'VoiceOver, Control por voz, Control por botón, visión, audición y movimiento.' },
      apple: { title: 'Funciones de Apple', blurb: 'Widgets, Siri, Spotlight, Game Center, Mensajes y notificaciones.' },
      account: { title: 'Ajustes, progreso y privacidad', blurb: 'Cada ajuste, tu progreso en iCloud, compras y tus datos.' },
      community: { title: 'Obtener ayuda', blurb: 'Solución de problemas, la comunidad y cómo informar bien de un error.' },
    },
    popular: 'Lo más consultado',
    popularLinks: [
      { label: 'Jugar con VoiceOver', slug: 'voiceover' },
      { label: 'Qué hace cada botón del tablero', slug: 'playing-a-board', section: 'screen' },
      { label: 'Sin movimientos: qué pasa después', slug: 'lives-moves-and-undos', section: 'out-of-moves' },
      { label: 'Daltonismo y alto contraste', slug: 'vision-hearing-and-motion' },
      { label: 'Cambiar a un iPhone nuevo', slug: 'progress-privacy-and-account', section: 'new-device' },
    ],
    onThisPage: 'En esta página',
    related: 'Sigue leyendo',
    next: 'Siguiente guía',
    previous: 'Guía anterior',
    checked: (version, date) => `Comprobado con OutBrick ${version} · ${date}`,
    minutes: (n) => `${n} min de lectura`,
    guides: (n) => (n === 1 ? '1 guía' : `${n} guías`),
    callout: { tip: 'Consejo', note: 'Conviene saber', important: 'Importante', a11y: 'Accesibilidad' },
    screenshot: 'Captura de OutBrick en iPhone',
    enlarge: 'Ver a tamaño completo',
    englishShot: 'Captura mostrada en inglés.',
    askTitle: '¿Sigues atascado?',
    askText: 'Pregunta en la comunidad. El equipo y otros jugadores responden en abierto, y tu correo nunca se muestra.',
    askAction: 'Preguntar a la comunidad',
    bugTitle: '¿Has encontrado un error?',
    bugText: 'Un buen informe se corrige antes. El formulario de errores pide justo lo que necesitamos.',
    bugAction: 'Informar de un error',
    contactTitle: '¿Prefieres escribir en privado?',
    contactText: 'El formulario de contacto llega al mismo equipo, en privado. Úsalo para compras y cualquier asunto personal.',
    contactAction: 'Contactar con soporte',
    backToHelp: 'Centro de ayuda',
    allGuides: 'Todas las guías',
    breadcrumb: 'Ruta de navegación',
    communityCrumb: 'Comunidad',
    alsoIn: 'Esta guía en otros idiomas',
    top: 'Volver arriba',
  },
  ja: {
    name: 'ヘルプセンター',
    eyebrow: 'OutBrick ヘルプセンター',
    hubTitle: 'OutBrickのすべてを、わかりやすく。',
    hubLede:
      '公開中のゲームのすべての画面・メニュー・設定を、チームが図解でまとめたガイドです。VoiceOverとアクセシビリティの専用コーナーもあります。ここで読んで、残った疑問はコミュニティで質問してください。',
    metaTitle: 'OutBrick ヘルプセンター：図解ガイド、VoiceOver、アクセシビリティ',
    metaDescription:
      'iPhone・iPad版OutBrickのチーム公式図解ガイド。遊び方、各メニュー、ライフと取り消し、Journey、設定、VoiceOver、音声コントロール、スイッチコントロール、すべてのアクセシビリティ機能。',
    searchHint: 'ガイドを検索',
    searchPlaceholder: 'ライフ、VoiceOver、取り消し、iCloud…',
    searchEmpty: '一致するガイドはありません。言葉を減らすか、下のコミュニティで質問してください。',
    searchOne: '1件のガイドが一致しました。',
    searchMany: '{n}件のガイドが一致しました。',
    categories: {
      start: { title: 'はじめに', blurb: '最初の盤面と、すべてのメニューの案内。' },
      play: { title: '盤面の遊び方', blurb: '手数、目標、特殊ブロック、障害物、ブースター。' },
      progress: { title: 'Journeyと報酬', blurb: '村、星、イベント、ショップ、仲間たち。' },
      accessibility: { title: 'アクセシビリティ', blurb: 'VoiceOver、音声コントロール、スイッチコントロール、視覚・聴覚・動き。' },
      apple: { title: 'Appleの機能', blurb: 'ウィジェット、Siri、Spotlight、Game Center、メッセージ、通知。' },
      account: { title: '設定・進行状況・プライバシー', blurb: 'すべての設定、iCloudの進行状況、購入、データ。' },
      community: { title: 'サポートを受ける', blurb: 'トラブル解決、コミュニティ、上手な不具合報告。' },
    },
    popular: 'よく読まれているガイド',
    popularLinks: [
      { label: 'VoiceOverで遊ぶ', slug: 'voiceover' },
      { label: '盤面の各ボタンの役割', slug: 'playing-a-board', section: 'screen' },
      { label: '手数がなくなったら', slug: 'lives-moves-and-undos', section: 'out-of-moves' },
      { label: '色覚対応と高コントラスト', slug: 'vision-hearing-and-motion' },
      { label: '新しいiPhoneへの引き継ぎ', slug: 'progress-privacy-and-account', section: 'new-device' },
    ],
    onThisPage: 'このページの内容',
    related: 'あわせて読む',
    next: '次のガイド',
    previous: '前のガイド',
    checked: (version, date) => `OutBrick ${version}で確認 · ${date}`,
    minutes: (n) => `${n}分で読めます`,
    guides: (n) => `${n}件のガイド`,
    callout: { tip: 'ヒント', note: '知っておくと便利', important: '重要', a11y: 'アクセシビリティ' },
    screenshot: 'iPhone版OutBrickのスクリーンショット',
    enlarge: '原寸で開く',
    englishShot: 'スクリーンショットは英語版です。',
    askTitle: 'まだ解決しませんか？',
    askText: 'コミュニティで質問してください。チームと他のプレイヤーが公開で回答します。メールアドレスは表示されません。',
    askAction: 'コミュニティで質問',
    bugTitle: '不具合を見つけましたか？',
    bugText: 'わかりやすい報告ほど早く直せます。不具合フォームが必要な情報を順にたずねます。',
    bugAction: '不具合を報告',
    contactTitle: '非公開で連絡したい場合',
    contactText: 'お問い合わせフォームは同じチームに非公開で届きます。購入や個人的な内容はこちらへ。',
    contactAction: 'サポートに連絡',
    backToHelp: 'ヘルプセンター',
    allGuides: 'すべてのガイド',
    breadcrumb: 'パンくずリスト',
    communityCrumb: 'コミュニティ',
    alsoIn: 'このガイドの他の言語版',
    top: 'ページの先頭へ',
  },
  'pt-BR': {
    name: 'Central de Ajuda',
    eyebrow: 'Central de Ajuda do OutBrick',
    hubTitle: 'Todo o OutBrick, explicado.',
    hubLede:
      'Guias ilustrados de cada tela, menu e ajuste do jogo lançado, escritos pela equipe, com uma estante inteira sobre VoiceOver e acessibilidade. Leia aqui e pergunte à comunidade o que eles não responderem.',
    metaTitle: 'Central de Ajuda do OutBrick: guias ilustrados, VoiceOver e acessibilidade',
    metaDescription:
      'Guias ilustrados da equipe para o OutBrick no iPhone e iPad: como jogar, cada menu, vidas e desfazer, a Jornada, Ajustes, VoiceOver, Controle por Voz, Controle Assistivo e todos os recursos de acessibilidade.',
    searchHint: 'Buscar nos guias',
    searchPlaceholder: 'Vidas, VoiceOver, desfazer, iCloud…',
    searchEmpty: 'Nenhum guia corresponde. Tente menos palavras ou pergunte à comunidade abaixo.',
    searchOne: '1 guia corresponde.',
    searchMany: '{n} guias correspondem.',
    categories: {
      start: { title: 'Primeiros passos', blurb: 'Seu primeiro tabuleiro e um tour por cada menu.' },
      play: { title: 'Jogando um tabuleiro', blurb: 'Movimentos, objetivos, peças especiais, obstáculos e reforços.' },
      progress: { title: 'Jornada e recompensas', blurb: 'Vilarejos, estrelas, eventos, a loja e seus amigos.' },
      accessibility: { title: 'Acessibilidade', blurb: 'VoiceOver, Controle por Voz, Controle Assistivo, visão, audição e movimento.' },
      apple: { title: 'Recursos da Apple', blurb: 'Widgets, Siri, Spotlight, Game Center, Mensagens e notificações.' },
      account: { title: 'Ajustes, progresso e privacidade', blurb: 'Cada ajuste, seu progresso no iCloud, compras e seus dados.' },
      community: { title: 'Como conseguir ajuda', blurb: 'Solução de problemas, a comunidade e como relatar bem um bug.' },
    },
    popular: 'Mais lidos agora',
    popularLinks: [
      { label: 'Jogue com o VoiceOver', slug: 'voiceover' },
      { label: 'O que faz cada botão do tabuleiro', slug: 'playing-a-board', section: 'screen' },
      { label: 'Sem movimentos: o que acontece', slug: 'lives-moves-and-undos', section: 'out-of-moves' },
      { label: 'Daltonismo e alto contraste', slug: 'vision-hearing-and-motion' },
      { label: 'Mudando para um iPhone novo', slug: 'progress-privacy-and-account', section: 'new-device' },
    ],
    onThisPage: 'Nesta página',
    related: 'Continue lendo',
    next: 'Próximo guia',
    previous: 'Guia anterior',
    checked: (version, date) => `Conferido com o OutBrick ${version} · ${date}`,
    minutes: (n) => `${n} min de leitura`,
    guides: (n) => (n === 1 ? '1 guia' : `${n} guias`),
    callout: { tip: 'Dica', note: 'Bom saber', important: 'Importante', a11y: 'Acessibilidade' },
    screenshot: 'Captura de tela do OutBrick no iPhone',
    enlarge: 'Abrir em tamanho real',
    englishShot: 'Captura exibida em inglês.',
    askTitle: 'Ainda com dúvida?',
    askText: 'Pergunte na comunidade. A equipe e outros jogadores respondem abertamente, e seu e-mail nunca é exibido.',
    askAction: 'Perguntar à comunidade',
    bugTitle: 'Encontrou um bug?',
    bugText: 'Um bom relato é corrigido mais rápido. O formulário de bugs pede exatamente o que precisamos.',
    bugAction: 'Relatar um bug',
    contactTitle: 'Prefere escrever em particular?',
    contactText: 'O formulário de contato chega à mesma equipe, em particular. Use-o para compras e assuntos pessoais.',
    contactAction: 'Falar com o suporte',
    backToHelp: 'Central de Ajuda',
    allGuides: 'Todos os guias',
    breadcrumb: 'Trilha de navegação',
    communityCrumb: 'Comunidade',
    alsoIn: 'Este guia em outros idiomas',
    top: 'Voltar ao topo',
  },
};
