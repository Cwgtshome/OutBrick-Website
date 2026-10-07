/**
 * The words around the release notes on /whats-new and its translations, and
 * the "scan to get OutBrick" card. The notes themselves are in lib/releases.ts,
 * copied from the App Store metadata. French uses "vous", German "du" and
 * Spanish "tú", as the rest of the translated site does.
 */

import type { Locale } from './locales';

export type WhatsNewCopy = {
  meta: { title: string; description: string };
  crumb: string;
  label: string;
  /** The <h1>, in two parts: the second is set in gold. */
  title: [string, string];
  lede: (version: string, date: string) => string;
  getUpdate: string;
  rss: string;
  current: string;
  /** Above the number on a release's chip. */
  version: string;
  released: string;
  /** Translated pages only: the older entries live on the English page. */
  olderInEnglish?: { note: string; link: string };
  cta: { title: string; lede: string };
};

export type GetAppCopy = { eyebrow: string; title: string; caption: string; qrLabel: string };

export const whatsNewCopy: Record<Locale, WhatsNewCopy> = {
  en: {
    meta: {
      title: 'What’s new in OutBrick: every update, newest first',
      description:
        'Release notes for OutBrick, newest first. Version 5.0.1: faster VoiceOver, spoken hints, clearer gates, score-based stars and Apple system features.',
    },
    crumb: 'What’s new',
    label: 'Release notes',
    title: ['What’s new in ', 'OutBrick.'],
    lede: (version, date) =>
      `The notes that ship with each App Store update, word for word. The current version is ${version}, released on ${date}.`,
    getUpdate: 'Get the update',
    rss: 'Follow by RSS',
    current: 'Current version',
    version: 'Version',
    released: 'Released',
    cta: {
      title: 'Already playing? The update is waiting.',
      lede: 'OutBrick is free on the App Store for iPhone and iPad. Updates arrive on their own, or from your App Store account page.',
    },
  },
  fr: {
    meta: {
      title: 'Nouveautés d’OutBrick : les notes de la version 5.0.1',
      description:
        'OutBrick 5.0.1 : VoiceOver plus rapide, indices parlés, portes expliquées, fin de plateau dès la victoire et fonctions Apple.',
    },
    crumb: 'Nouveautés',
    label: 'Notes de version',
    title: ['Quoi de neuf dans ', 'OutBrick.'],
    lede: (version, date) =>
      `Les notes publiées avec chaque mise à jour sur l’App Store, mot pour mot. La version actuelle est la ${version}, sortie le ${date}.`,
    getUpdate: 'Obtenir la mise à jour',
    rss: 'Suivre par RSS (en anglais)',
    current: 'Version actuelle',
    version: 'Version',
    released: 'Sortie le',
    olderInEnglish: { note: 'Les versions précédentes sont décrites en anglais.', link: 'Lire l’historique complet' },
    cta: {
      title: 'Vous jouez déjà ? La mise à jour vous attend.',
      lede: 'OutBrick est gratuit sur l’App Store, pour iPhone et iPad. Les mises à jour arrivent d’elles-mêmes, ou depuis la page de votre compte App Store.',
    },
  },
  de: {
    meta: {
      title: 'Neu in OutBrick: die Versionshinweise zu 5.0.1',
      description:
        'OutBrick 5.0.1: schnelleres VoiceOver, gesprochene Hinweise, erklärte Tore, sofortiger Abschluss erfüllter Ziele und Apple-Systemfunktionen.',
    },
    crumb: 'Neuigkeiten',
    label: 'Versionshinweise',
    title: ['Was ist neu in ', 'OutBrick?'],
    lede: (version, date) =>
      `Die Hinweise, die mit jedem Update im App Store erscheinen, Wort für Wort. Aktuell ist Version ${version}, erschienen am ${date}.`,
    getUpdate: 'Update laden',
    rss: 'Per RSS folgen (auf Englisch)',
    current: 'Aktuelle Version',
    version: 'Version',
    released: 'Erschienen am',
    olderInEnglish: { note: 'Frühere Versionen sind auf Englisch beschrieben.', link: 'Zum vollständigen Verlauf' },
    cta: {
      title: 'Du spielst schon? Das Update wartet.',
      lede: 'OutBrick ist kostenlos im App Store, für iPhone und iPad. Updates kommen von selbst oder über deine Accountseite im App Store.',
    },
  },
  es: {
    meta: {
      title: 'Novedades de OutBrick: las notas de la versión 5.0.1',
      description:
        'OutBrick 5.0.1: VoiceOver más rápido, pistas habladas, puertas explicadas, final inmediato al cumplir objetivos y funciones del sistema Apple.',
    },
    crumb: 'Novedades',
    label: 'Notas de la versión',
    title: ['Qué hay de nuevo en ', 'OutBrick.'],
    lede: (version, date) =>
      `Las notas que acompañan cada actualización en el App Store, palabra por palabra. La versión actual es la ${version}, publicada el ${date}.`,
    getUpdate: 'Consigue la actualización',
    rss: 'Seguir por RSS (en inglés)',
    current: 'Versión actual',
    version: 'Versión',
    released: 'Publicada el',
    olderInEnglish: { note: 'Las versiones anteriores están descritas en inglés.', link: 'Ver el historial completo' },
    cta: {
      title: '¿Ya juegas? La actualización te espera.',
      lede: 'OutBrick es gratis en el App Store, para iPhone y iPad. Las actualizaciones llegan solas, o desde la página de tu cuenta del App Store.',
    },
  },
  ja: {
    meta: {
      title: 'OutBrick の新機能：バージョン 5.0.1 のリリースノート',
      description: 'OutBrick 5.0.1：VoiceOverの高速化、音声ヒント、ゲートの説明、目標達成時の即時終了、Appleのシステム機能。',
    },
    crumb: '新機能',
    label: 'リリースノート',
    title: ['OutBrick の', '新機能'],
    lede: (version, date) => `App Store のアップデートごとに公開しているリリースノートの全文です。現在のバージョンは ${version}（${date}公開）。`,
    getUpdate: 'アップデートを入手',
    rss: 'RSS でフォロー（英語）',
    current: '現在のバージョン',
    version: 'バージョン',
    released: '公開日',
    olderInEnglish: { note: '以前のバージョンの内容は英語でご覧いただけます。', link: '英語の更新履歴へ' },
    cta: {
      title: 'もう遊んでいますか？アップデートが届いています。',
      lede: 'OutBrick は iPhone と iPad 向けに App Store で無料配信中です。アップデートは自動で届くほか、App Store のアカウントページからも入手できます。',
    },
  },
  'pt-BR': {
    meta: { title: 'Novidades da OutBrick: atualizações da mais recente para a mais antiga', description: 'Notas de versão da OutBrick, da mais recente para a mais antiga. Versão 5.0.1: VoiceOver mais rápido, dicas faladas, portões mais claros, estrelas por pontuação e recursos do sistema Apple.' },
    crumb: 'Novidades', label: 'Notas da versão', title: ['Novidades na ', 'OutBrick.'],
    lede: (version, date) => `As notas publicadas com cada atualização da App Store, palavra por palavra. A versão atual é ${version}, lançada em ${date}.`,
    getUpdate: 'Obter a atualização', rss: 'Acompanhar por RSS (em inglês)', current: 'Versão atual', version: 'Versão', released: 'Lançada em',
    olderInEnglish: { note: 'As versões anteriores estão descritas em inglês.', link: 'Ver o histórico completo' },
    cta: { title: 'Já está jogando? A atualização está esperando.', lede: 'OutBrick é grátis na App Store para iPhone e iPad. As atualizações chegam automaticamente ou pela página da sua conta na App Store.' },
  },
};

export const getAppCopy: Record<Locale, GetAppCopy> = {
  en: {
    eyebrow: 'On a computer?',
    title: 'Scan to get OutBrick on iPhone',
    caption: 'Point your iPhone camera at the code to open OutBrick on the App Store.',
    qrLabel: 'QR code: OutBrick on the App Store',
  },
  fr: {
    eyebrow: 'Sur un ordinateur ?',
    title: 'Scannez pour installer OutBrick sur iPhone',
    caption: 'Visez le code avec l’appareil photo de votre iPhone pour ouvrir OutBrick sur l’App Store.',
    qrLabel: 'Code QR : OutBrick sur l’App Store',
  },
  de: {
    eyebrow: 'Am Computer?',
    title: 'Scannen und OutBrick aufs iPhone holen',
    caption: 'Richte die Kamera deines iPhone auf den Code, um OutBrick im App Store zu öffnen.',
    qrLabel: 'QR-Code: OutBrick im App Store',
  },
  es: {
    eyebrow: '¿Estás en un ordenador?',
    title: 'Escanea para tener OutBrick en el iPhone',
    caption: 'Apunta la cámara del iPhone al código para abrir OutBrick en el App Store.',
    qrLabel: 'Código QR: OutBrick en el App Store',
  },
  ja: {
    eyebrow: 'パソコンでご覧ですか？',
    title: 'スキャンして iPhone に OutBrick を',
    caption: 'iPhone のカメラをコードに向けると、App Store の OutBrick のページが開きます。',
    qrLabel: 'QR コード：App Store の OutBrick',
  },
  'pt-BR': { eyebrow: 'Está no computador?', title: 'Escaneie para baixar OutBrick no iPhone', caption: 'Aponte a câmera do iPhone para o código para abrir OutBrick na App Store.', qrLabel: 'Código QR: OutBrick na App Store' },
};

/** "22 September 2026", "22 septembre 2026", "22. September 2026", "2026年9月22日" for a YYYY-MM-DD date. */
// Spelled out by hand rather than through `Date` and `Intl`: the prerender treats a page that
// touches `Date` as dynamic, and a calendar date needs no clock.
const monthNames: Record<Exclude<Locale, 'ja'>, string[]> = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  'pt-BR': ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
};

export function formatReleaseDate(iso: string, locale: Locale): string {
  const [year, month, day] = iso.split('-').map(Number);
  if (locale === 'ja') return `${year}年${month}月${day}日`;
  const name = monthNames[locale][month - 1];
  if (locale === 'de') return `${day}. ${name} ${year}`;
  if (locale === 'es') return `${day} de ${name} de ${year}`;
  if (locale === 'fr') return `${day === 1 ? '1er' : day} ${name} ${year}`;
  if (locale === 'pt-BR') return `${day} de ${name} de ${year}`;
  return `${day} ${name} ${year}`;
}

/**
 * The link to the release notes, ready for a nav or footer list (the same `{ href, label }`
 * shape as `NavLink` in app/village-shell.tsx). English page, English label.
 */
export const whatsNewLink = { href: '/whats-new', label: 'What’s new' } as const;

/** The same link on a page in `locale`: `/fr/whats-new` "Nouveautés", and so on. */
export function whatsNewLinkFor(locale: Locale): { href: string; label: string } {
  return { href: locale === 'en' ? '/whats-new' : `/${locale}/whats-new`, label: whatsNewCopy[locale].crumb };
}
