// Inline locale maps moved out of components so the catalog extractor (a plain Node script) can
// read their English. Each is written for English and the first five translations; the catalog
// languages look the English up (lib/i18n/catalog.ts).
import { catalogMap, catalogStrings } from './catalog.ts';
import { phrases } from './catalog-phrases.ts';

export const legal_ui = catalogMap<string[]>('ui', 'legal-ui', { en: ['Skip to content', 'Help and legal', 'Back to OutBrick', 'Updated'], fr: ['Aller au contenu', 'Aide et informations juridiques', 'Retour à OutBrick', 'Mis à jour le'], de: ['Zum Inhalt springen', 'Hilfe und Rechtliches', 'Zurück zu OutBrick', 'Aktualisiert am'], es: ['Ir al contenido', 'Ayuda e información legal', 'Volver a OutBrick', 'Actualizado el'], ja: ['本文へ移動', 'ヘルプと法的情報', 'OutBrickに戻る', '更新日'], 'pt-BR': ['Pular para o conteúdo', 'Ajuda e informações legais', 'Voltar ao OutBrick', 'Atualizado em'] });

export const thanks_ui = catalogMap<string[]>('ui', 'thanks-ui', { en: ['Skip to content', 'Help and legal', 'Back to OutBrick'], fr: ['Aller au contenu', 'Aide et informations juridiques', 'Retour à OutBrick'], de: ['Zum Inhalt springen', 'Hilfe und Rechtliches', 'Zurück zu OutBrick'], es: ['Ir al contenido', 'Ayuda e información legal', 'Volver a OutBrick'], ja: ['本文へ移動', 'ヘルプと法的情報', 'OutBrickに戻る'], 'pt-BR': ['Pular para o conteúdo', 'Ajuda e informações legais', 'Voltar ao OutBrick'] });

export const notFoundCopy = catalogMap<string[]>('ui', 'not-found', {
 en: ['This brick slid right off the board.', 'We looked in every row, under the undo button and behind Peach. The page you wanted isn’t here — it may have moved, or the link had a loose stud. No lives were lost.', 'OutBrick home', 'Where to next', 'Back to OutBrick', 'Play a board', 'Read the journal', 'Get support'],
 fr: ['Cette brique a glissé hors du plateau.', 'Nous avons cherché dans chaque rangée, sous le bouton Annuler et derrière Peach. Cette page n’est pas ici : elle a peut-être déménagé, ou le lien avait un tenon mal fixé. Aucune vie n’a été perdue.', 'Accueil OutBrick', 'Où aller ensuite', 'Retour à OutBrick', 'Jouer un plateau', 'Lire le journal', 'Obtenir de l’aide'],
 de: ['Dieser Stein ist vom Spielfeld gerutscht.', 'Wir haben in jeder Reihe, unter der Rückgängig-Taste und hinter Peach gesucht. Die gewünschte Seite ist nicht hier. Vielleicht ist sie umgezogen oder dem Link fehlte eine Noppe. Kein Leben ging verloren.', 'OutBrick-Startseite', 'Wohin als Nächstes', 'Zurück zu OutBrick', 'Ein Spielfeld spielen', 'Das Journal lesen', 'Hilfe erhalten'],
 es: ['Esta pieza se ha deslizado fuera del tablero.', 'Buscamos en cada fila, debajo del botón Deshacer y detrás de Peach. La página no está aquí: quizá se haya movido o al enlace le faltara un encaje. No se perdió ninguna vida.', 'Inicio de OutBrick', 'Adónde ir ahora', 'Volver a OutBrick', 'Jugar un tablero', 'Leer el diario', 'Obtener ayuda'],
 ja: ['このブロックは盤面の外へ滑り出してしまいました。', 'すべての列も、「戻す」ボタンの下も、Peachの後ろも探しましたが、このページは見つかりませんでした。移動したか、リンクの突起が外れていたのかもしれません。ライフは減っていません。', 'OutBrickのホーム', '次の移動先', 'OutBrickに戻る', 'ステージで遊ぶ', 'ジャーナルを読む', 'サポートを受ける'],
 'pt-BR': ['Este bloco escorregou para fora do tabuleiro.', 'Procuramos em todas as fileiras, embaixo do botão de desfazer e atrás da Peach. A página que você queria não está aqui: talvez tenha mudado de lugar ou o link esteja com uma peça solta. Nenhuma vida foi perdida.', 'Página inicial do OutBrick', 'Para onde agora?', 'Voltar ao OutBrick', 'Jogar uma fase', 'Ler o blog', 'Falar com o suporte'],
});

export const notFoundMeta = catalogMap<string[]>('pages', '404-meta', { en: [phrases.notFoundTitle, phrases.notFoundDescription], fr: ['Page introuvable','Cette page a quitté le plateau. Retrouvez OutBrick, le journal ou l’aide.'], de: ['Seite nicht gefunden','Diese Seite ist vom Spielfeld gerutscht. Zurück zu OutBrick, zum Journal oder zur Hilfe.'], es: ['Página no encontrada','Esta página se ha salido del tablero. Vuelve a OutBrick, al diario o a la ayuda.'], ja: ['ページが見つかりません','このページは盤面から滑り出しました。OutBrick、ジャーナル、サポートに戻りましょう。'], 'pt-BR': ['Página não encontrada','Esta página saiu do tabuleiro. Volte ao OutBrick, ao blog ou ao suporte.'] });

/** Patterns that carry a number or a list, for the catalog languages. */
export const pagePatterns = catalogStrings('pages', 'page-patterns', {
  shelves: '{0} shelves',
  remote: 'Remote. Open to applicants living in {0}. {1}.',
  daily: 'The daily boards take turns, {0} of them from a gentle warm-up to a proper gridlock, and every one was cleared by a solver before it went up.',
  earn: 'Earn {0}% of what follows',
  commission: 'When App Store Connect attributes in-app purchases to your campaign — Brick Pass, Remove Ads, coins — you earn {0}% of OutBrick’s net proceeds from them, for {1} months from each download.',
  payout: 'Monthly. Once Apple has paid OutBrick for a month’s sales, we pay your {0}% of the net proceeds attributed to you in that month. Balances under {1} roll over to the next month. We agree the payment method with you when you are approved, and you are responsible for any tax due on what you earn.',
  purchases: 'All in-app purchases App Analytics attributes to your campaign — the Brick Pass, Remove Ads and coin bundles — for {0} months from each referred download, and only as far as App Analytics attributes them. Refunded purchases are taken back out. Downloads themselves earn nothing, because OutBrick is free.',
});

/** Page strings built at render time (job cards, screenshot captions, character names), traced from a build. */
export const pageExtras = catalogStrings('pages', 'page-extras', {
  x00: "Casual",
  x01: "Check Settings › Game › Notifications in the game, and Settings › Notifications › OutBrick on the iPhone.",
  x02: "Check Settings › Game › Sounds and Music, or the same switches in the Pause menu.",
  x03: "Creator",
  x04: "If a card offering boosters or a hint appears while you are reading the board, a two-finger scrub closes it and puts you back on the board.",
  x05: "Open the Shop, scroll to the bottom and tap Restore Purchase.",
  x06: "OutBrick on iPad: a board in play",
  x07: "OutBrick on iPad: the Home screen in front of a brick village",
  x08: "OutBrick on iPhone: a packed board with coloured gates around its frame",
  x09: "OutBrick on iPhone: a shaped board with keys, locks and crates",
  x10: "OutBrick on iPhone: the Collection of brick cards",
  x11: "OutBrick on iPhone: the Home screen with three brick friends",
  x12: "Puzzle",
  x13: "Remote, contract. Help more of the right players find OutBrick: App Store product pages, keywords, custom product pages, in-app events and campaign measurement.",
  x14: "Remote, full-time. Build the systems behind OutBrick’s boards: procedural level generation, the solver that verifies every board, and gentle, on-device…",
  x15: "Remote, full-time. Own the words and the stories around OutBrick: the Journal, the App Store copy, launch notes and the press room, all in a voice that…",
  x16: "Remote, full-time. Shape how OutBrick feels in the hand — from the first board to the 2,000th — across iPhone, iPad, Mac, Vision Pro and Apple Watch.",
  x17: "Remote, full-time. Start and grow OutBrick’s community on TikTok, YouTube, Instagram and Snapchat, and look after the creators who make things with the game.",
  x18: "Screenshot:",
  x19: "Bloo (OutBrick character)",
  x20: "Bricko (OutBrick character)",
  x21: "Flurry (OutBrick character)",
  x22: "Moss (OutBrick character)",
  x23: "Peach (OutBrick character)",
  x24: "Poppy (OutBrick character)",
  x25: "Sprout (OutBrick character)",
  x26: "Vio (OutBrick character)",
  x27: "Zippy (OutBrick character)",
});
