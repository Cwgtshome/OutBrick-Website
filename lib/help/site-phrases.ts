import type { TranslatedLocale } from '../i18n/locales.ts';

/**
 * The sentences the Support and Accessibility pages use to point at the Help Centre, in the
 * phrase dictionary the localized page tree reads (lib/i18n/public-pages.ts). Keyed by the
 * English text exactly as it appears in app/(en)/support/page.tsx and app/(en)/accessibility/page.tsx.
 */
const phrases: Record<string, Record<TranslatedLocale, string>> = {
  'Help Centre': { fr: 'Centre d’aide', de: 'Hilfe-Center', es: 'Centro de ayuda', ja: 'ヘルプセンター', 'pt-BR': 'Central de Ajuda' },
  'Illustrated guides': { fr: 'Guides illustrés', de: 'Bebilderte Anleitungen', es: 'Guías ilustradas', ja: '図解ガイド', 'pt-BR': 'Guias ilustrados' },
  'The Help Centre explains every screen, menu and setting in OutBrick 5.1 with real screenshots from the game, with a whole shelf on VoiceOver and accessibility.': {
    fr: 'Le Centre d’aide explique chaque écran, menu et réglage d’OutBrick 5.1 avec de vraies captures du jeu, et consacre tout un rayon à VoiceOver et à l’accessibilité.',
    de: 'Das Hilfe-Center erklärt jeden Bildschirm, jedes Menü und jede Einstellung von OutBrick 5.1 mit echten Bildschirmfotos aus dem Spiel, mit einem ganzen Regal zu VoiceOver und Bedienungshilfen.',
    es: 'El Centro de ayuda explica cada pantalla, menú y ajuste de OutBrick 5.1 con capturas reales del juego, y dedica toda una estantería a VoiceOver y la accesibilidad.',
    ja: 'ヘルプセンターでは、OutBrick 5.1のすべての画面・メニュー・設定を実際のゲーム画面で説明しています。VoiceOverとアクセシビリティの専用コーナーもあります。',
    'pt-BR': 'A Central de Ajuda explica cada tela, menu e ajuste do OutBrick 5.1 com capturas reais do jogo, e tem uma estante inteira sobre VoiceOver e acessibilidade.',
  },
  'Open the Help Centre': { fr: 'Ouvrir le Centre d’aide', de: 'Hilfe-Center öffnen', es: 'Abrir el Centro de ayuda', ja: 'ヘルプセンターを開く', 'pt-BR': 'Abrir a Central de Ajuda' },
  'Playing with VoiceOver': { fr: 'Jouer avec VoiceOver', de: 'Spielen mit VoiceOver', es: 'Jugar con VoiceOver', ja: 'VoiceOverで遊ぶ', 'pt-BR': 'Jogue com o VoiceOver' },
  'Step-by-step accessibility guides': { fr: 'Guides d’accessibilité pas à pas', de: 'Anleitungen zu Bedienungshilfen, Schritt für Schritt', es: 'Guías de accesibilidad paso a paso', ja: 'アクセシビリティの手順ガイド', 'pt-BR': 'Guias de acessibilidade passo a passo' },
  'The Help Centre walks through every accessibility feature with real screenshots from the game: playing with VoiceOver, with Voice Control, Switch Control or a keyboard, and every setting for vision, hearing and motion.': {
    fr: 'Le Centre d’aide présente chaque fonction d’accessibilité avec de vraies captures du jeu : jouer avec VoiceOver, avec Contrôle vocal, Contrôle de sélection ou un clavier, et chaque réglage pour la vue, l’audition et le mouvement.',
    de: 'Das Hilfe-Center erklärt jede Bedienungshilfe mit echten Bildschirmfotos aus dem Spiel: spielen mit VoiceOver, mit Sprachsteuerung, Schaltersteuerung oder Tastatur, und jede Einstellung für Sehen, Hören und Bewegung.',
    es: 'El Centro de ayuda recorre cada función de accesibilidad con capturas reales del juego: jugar con VoiceOver, con Control por voz, Control por botón o un teclado, y cada ajuste de visión, audición y movimiento.',
    ja: 'ヘルプセンターでは、すべてのアクセシビリティ機能を実際のゲーム画面で紹介しています。VoiceOverでの遊び方、音声コントロール・スイッチコントロール・キーボードでの操作、視覚・聴覚・動きに関するすべての設定です。',
    'pt-BR': 'A Central de Ajuda apresenta cada recurso de acessibilidade com capturas reais do jogo: jogar com VoiceOver, com Controle por Voz, Controle Assistivo ou teclado, e cada ajuste de visão, audição e movimento.',
  },
  'Accessibility guides': { fr: 'Guides d’accessibilité', de: 'Anleitungen zu Bedienungshilfen', es: 'Guías de accesibilidad', ja: 'アクセシビリティガイド', 'pt-BR': 'Guias de acessibilidade' },
};

export function helpSitePhrases(locale: TranslatedLocale): Record<string, string> {
  return Object.fromEntries(Object.entries(phrases).map(([english, t]) => [english, t[locale]]));
}
