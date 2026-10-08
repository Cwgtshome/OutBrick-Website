import type { Locale } from './locales';

/**
 * The analytics consent banner (app/components/consent-banner.tsx), in the site's six languages.
 * Accept and Decline carry equal weight; the banner says what is measured, that nothing loads
 * from Google until the visitor accepts, and links to the privacy policy's #analytics section.
 */
export type ConsentWords = {
  region: string;
  title: string;
  body: string;
  policy: string;
  accept: string;
  decline: string;
  saved: { granted: string; denied: string };
};

export const consentWords: Record<Locale, ConsentWords> = {
  en: {
    region: 'Analytics choice',
    title: 'May we count your visit?',
    body: 'With your permission, Google Analytics measures which pages help people, so we can improve the site. Nothing loads from Google unless you accept, and the site works the same either way.',
    policy: 'How website analytics works',
    accept: 'Accept analytics',
    decline: 'Decline',
    saved: { granted: 'Analytics accepted. Thank you.', denied: 'Analytics declined. Nothing is measured.' },
  },
  fr: {
    region: 'Choix sur la mesure d’audience',
    title: 'Pouvons-nous compter votre visite ?',
    body: 'Avec votre accord, Google Analytics mesure les pages qui aident les visiteurs, pour améliorer le site. Rien n’est chargé depuis Google sans votre accord, et le site fonctionne de la même façon dans les deux cas.',
    policy: 'Fonctionnement de la mesure d’audience',
    accept: 'Accepter la mesure',
    decline: 'Refuser',
    saved: { granted: 'Mesure d’audience acceptée. Merci.', denied: 'Mesure d’audience refusée. Rien n’est mesuré.' },
  },
  de: {
    region: 'Auswahl zur Reichweitenmessung',
    title: 'Dürfen wir deinen Besuch zählen?',
    body: 'Mit deiner Erlaubnis misst Google Analytics, welche Seiten weiterhelfen, damit wir die Website verbessern können. Ohne deine Zustimmung wird nichts von Google geladen, und die Website funktioniert in beiden Fällen gleich.',
    policy: 'So funktioniert die Messung',
    accept: 'Messung erlauben',
    decline: 'Ablehnen',
    saved: { granted: 'Messung erlaubt. Danke.', denied: 'Messung abgelehnt. Es wird nichts gemessen.' },
  },
  es: {
    region: 'Elección sobre la analítica',
    title: '¿Podemos contar tu visita?',
    body: 'Con tu permiso, Google Analytics mide qué páginas ayudan a la gente para que podamos mejorar el sitio. No se carga nada de Google a menos que aceptes, y el sitio funciona igual en ambos casos.',
    policy: 'Cómo funciona la analítica del sitio',
    accept: 'Aceptar analítica',
    decline: 'Rechazar',
    saved: { granted: 'Analítica aceptada. Gracias.', denied: 'Analítica rechazada. No se mide nada.' },
  },
  ja: {
    region: 'アクセス解析の選択',
    title: 'このご訪問を計測してもよいですか？',
    body: '許可いただいた場合のみ、Google アナリティクスでどのページが役立っているかを計測し、サイトの改善に使います。同意するまで Google からは何も読み込まれず、どちらを選んでもサイトは同じように使えます。',
    policy: 'ウェブサイトのアクセス解析について',
    accept: '計測を許可',
    decline: '許可しない',
    saved: { granted: '計測を許可しました。ありがとうございます。', denied: '計測を許可しませんでした。何も計測されません。' },
  },
  'pt-BR': {
    region: 'Escolha sobre análise de visitas',
    title: 'Podemos contar a sua visita?',
    body: 'Com a sua permissão, o Google Analytics mede quais páginas ajudam as pessoas, para melhorarmos o site. Nada é carregado do Google a menos que você aceite, e o site funciona igual nos dois casos.',
    policy: 'Como funciona a análise do site',
    accept: 'Aceitar análise',
    decline: 'Recusar',
    saved: { granted: 'Análise aceita. Obrigado.', denied: 'Análise recusada. Nada é medido.' },
  },
};
