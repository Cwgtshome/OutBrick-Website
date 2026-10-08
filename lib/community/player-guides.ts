import { currentGameCopy } from '../i18n/current-game.ts';
import type { Locale } from '../i18n/locales.ts';

/** Editorial team guides, first checked against released 5.0.1 on 7 October 2026 and
 * rechecked against released 5.1.1 (Slide & Match) and its App Store description on
 * 8 October 2026. Keep future build screenshots and claims clearly separate. These are
 * authored help, never synthetic player questions or testimonials.
 *
 * The community database holds a copy of each guide's opening post. After changing this
 * file, run scripts/build-player-guide-seed.mts to write a NEW migration that updates the
 * opening posts the team has not edited; applied migrations never change. */
export const guideWords = {
  en: {
    label: 'Player guides',
    intro:
      'Start here for gameplay, Journey, VoiceOver and accessibility. Each team guide says which iOS version it was checked against.',
    titles: [
      'Start here: playing your first board',
      'Special bricks, goals and score stars',
      'Finding your way around the Journey',
      'Playing with VoiceOver',
      'Accessibility and comfortable Settings',
      'Lives, moves, undos and optional videos',
      'Getting help and reporting an accessibility problem',
      'Which game version am I playing?',
    ],
    related: 'Continue reading',
    checkpoint: 'Checked 8 October 2026 · released iOS 5.1.1 (Slide & Match)',
    hub: 'OutBrick player guide library',
    settings:
      'Open Settings, then the Accessibility tab. Try one adjustment at a time on a familiar board: colour-blind glyphs, high-contrast board, animation speed, announcement detail, left-handed tray and Hold to confirm swaps. Glyphs add a shape cue so colour is not the only clue. Use speed and announcement detail to make changes easier to follow. With Hold to confirm swaps on, a swap you choose with VoiceOver, Voice Control, Switch Control or a keyboard plays only when you choose it a second time. Game settings also let you adjust music, sound effects and haptics. Character praise is visual text, without character vocalisations; VoiceOver announcements remain. Your iPhone’s own VoiceOver and Reduce Motion settings are separate from these game controls.',
    journey:
      'The Journey has 2,000 level addresses across 167 villages. A full village has twelve boards; the final village has eight. The map is a rolling, brick-built boulevard with distinct places and nine brick friends. Find the current level, open it, read its goals, and clear it to continue. Earlier unlocked boards let you practise and improve score stars. A village and a chapter are different: twelve boards per village, twenty per chapter. With VoiceOver, use the Journey’s “Where am I” action for your place and next goal, or “Go to my next level” to move focus there. The two-finger double tap on the Journey speaks the guide; on a board it asks for a hint.',
    undo: 'The first undo on each board is free. Further undos use a tank of five, recovering one every twenty-five minutes; a rewarded undo video pays two. Check the displayed count before using another undo. Unlimited undo belongs only to the separate classic browser demo.',
    help: 'Read without an account. Sign in with Apple, Google or an email link to ask a question, reply or vote. Apple may share a private relay address when you choose Hide My Email; use the same sign-in method to return to that account. For a bug, include your game version/build, device, iOS version, level, the steps, what you expected and what happened. For accessibility, name VoiceOver, Voice Control, Switch Control or another setting you used, plus the exact announcement or control that caused trouble. Share a screenshot only if useful; crop out account information. Never post a password, sign-in code or purchase receipt. Use Help for a play question, Bugs for reproducible problems and Accessibility for access barriers. Watch the thread for replies and check your notification email preferences.',
  },
  fr: {
    label: 'Guides de jeu',
    intro:
      'Commencez par le jeu, le Voyage, VoiceOver et l’accessibilité. Chaque guide de l’équipe indique la version d’iOS avec laquelle il a été vérifié.',
    titles: [
      'Premiers pas : jouer un tableau',
      'Briques spéciales, objectifs et étoiles',
      'Se repérer dans le Voyage',
      'Jouer avec VoiceOver',
      'Accessibilité et réglages confortables',
      'Vies, coups, annulations et vidéos facultatives',
      'Demander de l’aide et signaler un problème d’accessibilité',
      'À quelle version est-ce que je joue ?',
    ],
    related: 'À lire ensuite',
    checkpoint: 'Vérifié le 8 octobre 2026 · iOS 5.1.1 publié (Glisse et aligne)',
    hub: 'Bibliothèque des guides OutBrick',
    settings:
      'Ouvrez Réglages, puis l’onglet Accessibilité. Essayez un réglage à la fois sur un tableau connu : symboles pour le daltonisme, contraste élevé, vitesse des animations, détail des annonces, outils pour gauchers et Confirmer les échanges. Les symboles ajoutent un repère autre que la couleur. La vitesse et le détail des annonces aident à suivre les changements. Avec Confirmer les échanges, un échange choisi avec VoiceOver, Contrôle vocal, Contrôle de sélection ou un clavier ne se joue que lorsque vous le choisissez une seconde fois. Les réglages du jeu permettent aussi d’ajuster musique, effets sonores et vibrations. Les personnages gardent leurs animations et bulles, sans voix ; les annonces VoiceOver restent. VoiceOver et Réduire les animations de l’iPhone se règlent séparément.',
    journey:
      'Le Voyage compte 2000 niveaux dans 167 villages. Un village complet a douze tableaux ; le dernier en a huit. La carte est un boulevard roulant construit en briques, avec des lieux distincts et neuf amis. Trouvez le niveau actuel, ouvrez-le, lisez ses objectifs et réussissez-le pour continuer. Les tableaux déjà débloqués permettent de s’entraîner et d’améliorer les étoiles de score. Un village a douze tableaux, un chapitre vingt. Avec VoiceOver, l’action « Où suis-je » annonce votre position et le prochain objectif ; « Aller à mon prochain niveau » y déplace le focus. Sur le Voyage, le double toucher à deux doigts lit le guide ; sur un tableau, il demande un indice.',
    undo: 'La première annulation de chaque tableau est gratuite. Les suivantes utilisent une réserve de cinq, qui récupère une annulation toutes les vingt-cinq minutes ; une vidéo récompensée en donne deux. Vérifiez le compteur avant une autre annulation. Les annulations illimitées sont réservées à la démo classique du navigateur.',
    help: 'La lecture est libre. Connectez-vous avec Apple, Google ou un lien e-mail pour poser une question, répondre ou voter. Apple peut fournir une adresse relais privée avec Masquer mon adresse e-mail ; revenez avec la même méthode. Pour un bug, indiquez version et build du jeu, appareil, version iOS, niveau, étapes, résultat attendu et résultat obtenu. Pour l’accessibilité, précisez VoiceOver, Contrôle vocal, Contrôle de sélection ou le réglage utilisé et l’annonce ou la commande problématique. Masquez les données personnelles dans les captures. Ne publiez jamais mot de passe, code de connexion ou reçu d’achat. Choisissez Aide pour le jeu, Bugs pour un problème reproductible et Accessibilité pour un obstacle d’accès. Suivez le sujet et vérifiez les préférences e-mail.',
  },
  de: {
    label: 'Spielanleitungen',
    intro:
      'Hier findest du Hilfe zu Spiel, Reise, VoiceOver und Bedienungshilfen. Jede Team-Anleitung nennt die iOS-Version, mit der sie geprüft wurde.',
    titles: [
      'Erste Schritte: dein erstes Spielbrett',
      'Spezialsteine, Ziele und Punktesterne',
      'Orientierung auf der Reise',
      'Spielen mit VoiceOver',
      'Bedienungshilfen und angenehme Einstellungen',
      'Leben, Züge, Rückgängig und freiwillige Videos',
      'Hilfe und Probleme mit Bedienungshilfen melden',
      'Welche Spielversion spiele ich?',
    ],
    related: 'Weiterlesen',
    checkpoint: 'Geprüft am 8. Oktober 2026 · veröffentlichtes iOS 5.1.1 (Schieben und kombinieren)',
    hub: 'OutBrick-Spielanleitungen',
    settings:
      'Öffne Einstellungen und dann Bedienungshilfen. Probiere jeweils eine Änderung auf einem bekannten Brett: Symbole für Farbfehlsichtigkeit, hoher Kontrast, Animationstempo, Umfang der Ansagen, linkshändige Werkzeugleiste und „Tausch bestätigen“. Symbole bieten Hinweise zusätzlich zur Farbe. Tempo und Ansagen helfen, Änderungen zu verfolgen. Mit „Tausch bestätigen“ wird ein Tausch, den du mit VoiceOver, Sprachsteuerung, Schaltersteuerung oder Tastatur wählst, erst ausgeführt, wenn du ihn ein zweites Mal wählst. Spieleinstellungen regeln auch Musik, Effekte und Haptik. Figuren behalten Animationen und Textblasen ohne eigene Stimmen; VoiceOver-Ansagen bleiben. VoiceOver und Bewegung reduzieren werden am iPhone separat eingestellt.',
    journey:
      'Die Reise umfasst 2000 Level in 167 Dörfern. Ein volles Dorf hat zwölf Bretter, das letzte acht. Die Karte ist ein rollender, aus Steinen gebauter Boulevard mit unterschiedlichen Orten und neun Freunden. Finde dein aktuelles Level, öffne es, lies die Ziele und schließe es ab. Frühere freigeschaltete Bretter helfen beim Üben und Verbessern der Punktesterne. Ein Dorf umfasst zwölf Bretter, ein Kapitel zwanzig. Mit VoiceOver liest „Wo bin ich“ Ort und nächstes Ziel; „Zu meinem nächsten Level“ setzt dort den Fokus. Auf der Reise liest der Doppeltipp mit zwei Fingern den Wegweiser, auf dem Brett fordert er einen Hinweis an.',
    undo: 'Das erste Rückgängigmachen pro Brett ist kostenlos. Danach gilt ein Vorrat von fünf, der alle fünfundzwanzig Minuten eine Aktion zurückgewinnt; ein Belohnungsvideo gibt zwei. Prüfe den angezeigten Vorrat vorher. Unbegrenztes Rückgängigmachen gilt nur für die klassische Browser-Demo.',
    help: 'Lesen geht ohne Konto. Melde dich mit Apple, Google oder E-Mail-Link an, um zu fragen, zu antworten oder abzustimmen. Apple kann bei „E-Mail-Adresse verbergen“ eine private Relay-Adresse teilen; verwende beim Zurückkehren dieselbe Methode. Nenne bei Fehlern Spielversion und Build, Gerät, iOS-Version, Level, Schritte, erwartetes und tatsächliches Ergebnis. Nenne bei Bedienungshilfen VoiceOver, Sprachsteuerung, Schaltersteuerung oder verwendete Einstellungen sowie die problematische Ansage oder Taste. Entferne Kontodaten aus Screenshots. Veröffentliche keine Passwörter, Anmeldecodes oder Kaufbelege. Nutze Hilfe für Spielfragen, Bugs für reproduzierbare Fehler und Bedienungshilfen für Zugangsprobleme. Beobachte das Thema und prüfe deine E-Mail-Einstellungen.',
  },
  es: {
    label: 'Guías de juego',
    intro:
      'Empieza con el juego, el Viaje, VoiceOver y la accesibilidad. Cada guía del equipo indica con qué versión de iOS se comprobó.',
    titles: [
      'Primeros pasos: tu primer tablero',
      'Ladrillos especiales, objetivos y estrellas',
      'Orientarse en el Viaje',
      'Jugar con VoiceOver',
      'Accesibilidad y ajustes cómodos',
      'Vidas, movimientos, deshacer y vídeos opcionales',
      'Pedir ayuda y comunicar un problema de accesibilidad',
      '¿Qué versión estoy jugando?',
    ],
    related: 'Sigue leyendo',
    checkpoint: 'Comprobado el 8 de octubre de 2026 · iOS 5.1.1 publicado (Desliza y combina)',
    hub: 'Biblioteca de guías OutBrick',
    settings:
      'Abre Ajustes y después Accesibilidad. Prueba un cambio cada vez en un tablero conocido: símbolos para daltonismo, contraste alto, velocidad de animación, detalle de los anuncios, herramientas para zurdos y Confirmar cambios. Los símbolos añaden una pista distinta del color. Velocidad y anuncios ayudan a seguir los cambios. Con Confirmar cambios, un intercambio elegido con VoiceOver, Control por voz, Control por botón o un teclado solo se hace cuando lo eliges por segunda vez. Los ajustes del juego también permiten cambiar música, efectos y vibraciones. Los personajes conservan animaciones y bocadillos sin voces propias; los anuncios de VoiceOver siguen. VoiceOver y Reducir movimiento se configuran aparte en el iPhone.',
    journey:
      'El Viaje tiene 2000 niveles en 167 pueblos. Cada pueblo completo tiene doce tableros; el último tiene ocho. El mapa es un bulevar rodante construido con ladrillos, lugares distintos y nueve amigos. Encuentra tu nivel actual, ábrelo, lee los objetivos y complétalo para avanzar. Los tableros anteriores desbloqueados permiten practicar y mejorar las estrellas de puntuación. Un pueblo tiene doce tableros, un capítulo veinte. Con VoiceOver, «Dónde estoy» anuncia posición y siguiente objetivo; «Ir a mi siguiente nivel» mueve el foco allí. En el Viaje, el doble toque con dos dedos lee la guía; en un tablero pide una pista.',
    undo: 'El primer deshacer de cada tablero es gratis. Los siguientes usan una reserva de cinco, recuperando uno cada veinticinco minutos; un vídeo con recompensa da dos. Comprueba el contador antes. Deshacer ilimitado solo corresponde a la demo clásica del navegador.',
    help: 'Lee sin cuenta. Entra con Apple, Google o enlace por correo para preguntar, responder o votar. Apple puede compartir una dirección privada de retransmisión con Ocultar mi correo; vuelve con el mismo método. Para un error, indica versión y compilación del juego, dispositivo, versión iOS, nivel, pasos, resultado esperado y real. Para accesibilidad, indica VoiceOver, Control por voz, Control por botón u otros ajustes y el anuncio o control problemático. Oculta los datos de cuenta en capturas. Nunca publiques contraseñas, códigos de acceso o recibos. Usa Ayuda para dudas de juego, Errores para problemas reproducibles y Accesibilidad para barreras de acceso. Sigue el hilo y revisa tus preferencias de correo.',
  },
  ja: {
    label: 'プレイヤーガイド',
    intro:
      '遊び方、Journey、VoiceOver、アクセシビリティの案内です。チームの各ガイドには、確認したiOSのバージョンを記載しています。',
    titles: [
      'はじめに：最初の盤面を遊ぶ',
      '特殊ブロック・目標・スコアの星',
      'Journeyの歩き方',
      'VoiceOverで遊ぶ',
      'アクセシビリティと快適な設定',
      'ライフ・手数・取り消し・任意の動画',
      '質問とアクセシビリティ問題の報告',
      'どのバージョンを遊んでいますか？',
    ],
    related: 'あわせて読む',
    checkpoint: '2026年10月8日確認 · 公開済みiOS 5.1.1（スライド＆マッチ）',
    hub: 'OutBrickプレイヤーガイド集',
    settings:
      '設定のアクセシビリティタブを開きます。慣れた盤面で1つずつ試してください：色覚対応の記号、高コントラスト、アニメーション速度、読み上げの詳しさ、左利き用のツール配置、「入れ替えを確認」。記号は色以外の手がかりになります。速度と読み上げを調整すると変化を追いやすくなります。「入れ替えを確認」をオンにすると、VoiceOver、音声コントロール、スイッチコントロール、キーボードで選んだ入れ替えは、もう一度選んだときに実行されます。ゲーム設定では音楽・効果音・触覚も調整できます。仲間のアニメーションと吹き出しは残り、キャラクターの声はありません。VoiceOverの読み上げは残ります。iPhone自体のVoiceOverや視差効果を減らす設定は別です。',
    journey:
      'Journeyは2,000レベル、167の村で構成されます。通常の村は12盤面、最後は8盤面です。マップはブロックでできた転がる大通りで、さまざまな場所と9人の仲間が登場します。現在のレベルを見つけて開き、目標を読み、クリアして先に進みます。解放済みの盤面で練習し、スコアの星を改善できます。村は12盤面、チャプターは20盤面で別の区分です。VoiceOverの「今どこにいるか」で場所と次の目標を聞き、「次のレベルへ」でフォーカスを移します。Journeyでの2本指ダブルタップは案内を読み、盤面ではヒントを求めます。',
    undo: '各盤面の最初の取り消しは無料です。その後は5回分のタンクを使い、25分に1回回復します。報酬動画では2回分を受け取れます。次に使う前に表示数を確認してください。無制限の取り消しはクラシックなブラウザデモだけです。',
    help: '読むだけならアカウントは不要です。質問・返信・投票にはApple、Google、メールリンクでサインインします。Appleでメールを非公開にすると、プライベートリレーのアドレスが共有される場合があります。同じ方法で戻ってください。不具合はゲームのバージョンとビルド、端末、iOS、レベル、手順、期待した結果、実際の結果を記載します。アクセシビリティはVoiceOver、音声コントロール、スイッチコントロール等の設定と、問題の読み上げや操作を具体的に伝えてください。画像のアカウント情報は隠し、パスワード・コード・購入明細は投稿しないでください。遊び方はヘルプ、再現可能な問題は不具合、利用の障壁はアクセシビリティへ。スレッドをフォローし、メール通知設定を確認してください。',
  },
  'pt-BR': {
    label: 'Guias para jogadores',
    intro: 'Comece por aqui para aprender a jogar, explorar a Jornada e usar VoiceOver e os recursos de acessibilidade. Cada guia da equipe informa com qual versão do iOS foi verificado.',
    titles: [
      'Primeiros passos: seu primeiro tabuleiro',
      'Peças especiais, objetivos e estrelas',
      'Como se orientar na Jornada',
      'Jogue com o VoiceOver',
      'Acessibilidade e ajustes confortáveis',
      'Vidas, movimentos, desfazer e vídeos opcionais',
      'Peça ajuda e relate uma barreira de acessibilidade',
      'Qual versão do jogo estou usando?',
    ],
    related: 'Continue lendo',
    checkpoint: 'Revisado em 8 de outubro de 2026 · iOS 5.1.1 lançado (Deslize e combine)',
    hub: 'Biblioteca de guias do OutBrick',
    settings: 'Abra Ajustes e toque na aba Acessibilidade. Experimente uma opção de cada vez em um tabuleiro conhecido: símbolos para daltonismo, alto contraste, velocidade das animações, nível de detalhes das falas, bandeja para canhotos e Confirmar trocas. Os símbolos oferecem pistas além da cor. Ajuste a velocidade e os detalhes para acompanhar melhor as mudanças. Com Confirmar trocas ativado, uma troca escolhida com VoiceOver, Controle por Voz, Controle Assistivo ou teclado só acontece quando você a escolhe pela segunda vez. Os ajustes do jogo também controlam música, efeitos sonoros e háptica. Os personagens continuam com animações e balões de texto, sem vozes; os anúncios do VoiceOver permanecem. VoiceOver e Reduzir Movimento do iPhone são ajustes separados.',
    journey: 'A Jornada tem 2.000 fases em 167 vilarejos. Um vilarejo completo tem doze tabuleiros; o último tem oito. O mapa é uma avenida móvel construída com blocos, formada por lugares diferentes e nove amigos. Encontre sua fase atual, abra-a, leia os objetivos e conclua-a para seguir. Tabuleiros já liberados permitem praticar e melhorar as estrelas. Vilarejo e capítulo são coisas diferentes: são doze tabuleiros por vilarejo e vinte por capítulo. Com VoiceOver, use a ação “Onde estou?” na Jornada para ouvir sua posição e o próximo objetivo, ou “Ir para minha próxima fase” para levar o foco até lá. Na Jornada, toque duas vezes com dois dedos para ouvir o guia; em um tabuleiro, o mesmo gesto pede uma dica.',
    undo: 'A primeira ação de desfazer de cada tabuleiro é grátis. As seguintes usam um tanque com cinco, que recupera uma ação a cada vinte e cinco minutos; um vídeo com recompensa concede duas. Confira a quantidade exibida antes de desfazer novamente. A ação ilimitada de desfazer existe somente na demonstração clássica de blocos no navegador.',
    help: 'Você pode ler sem ter uma conta. Entre com Apple, Google ou um link enviado por e-mail para fazer uma pergunta, responder ou votar. Se escolher Ocultar Meu E-mail, a Apple pode fornecer um endereço privado de retransmissão; entre pelo mesmo método para voltar à conta. Ao relatar um erro, inclua a versão e a compilação do jogo, dispositivo, versão do iOS, fase, etapas, resultado esperado e o que aconteceu. Para acessibilidade, informe se usou VoiceOver, Controle por Voz, Controle Assistivo ou outro ajuste, além do anúncio ou controle que causou dificuldade. Envie uma captura somente se ajudar e esconda dados da conta. Nunca publique senha, código de acesso ou comprovante de compra. Use Ajuda para dúvidas de jogo, Bugs para problemas reproduzíveis e Acessibilidade para barreiras de uso. Acompanhe a conversa e confira suas preferências de notificação por e-mail.',
  },
} as const;

export const guideKeys = [
  'first-board',
  'specials-and-stars',
  'journey',
  'voiceover',
  'settings',
  'lives-moves-undos',
  'asking-for-help',
  'versions',
] as const;
export type GuideKey = (typeof guideKeys)[number];
const steps = {
  en: {
    first:
      '1. Open your current level from the Journey. Read the goals and moves remaining before choosing a brick.\n2. Look for a brick that can go home: swipe it toward the gate of its colour. A brick swiped toward empty space stops where you let go.\n3. Swipe a brick into a neighbour to swap them and line up three or more of a colour. Read which goals remain after each move.\n4. Use a hint if you need one; hints name slides as well as swaps. When every goal is met the board finishes, and leftover moves become blasters for a bigger score.',
    voice:
      '1. Turn on VoiceOver in your iPhone’s Accessibility settings, then open the game. Explore the board by touch or swipe between its elements.\n2. Listen to a brick’s colour, shape and position. Its actions offer each slide and swap, such as “Slide left, out through the red gate”; activate a special when its action is offered.\n3. Listen to where the brick stopped and what went home before making another move. Try the Specials, Goals, Blockers and Gates rotors to find the information you need.\n4. A two-finger double tap on the board asks for a hint. The two-finger scrub opens Pause on a board; it does not silently abandon your attempt. Away from the board it dismisses the current screen.\n5. If you want an extra audio cue, try the optional Row sound action. If speech is too busy, adjust announcement verbosity. Ask in Accessibility with your level and the exact announcement if something is unclear.',
  },
  fr: {
    first:
      '1. Ouvrez le niveau actuel dans le Voyage. Lisez les objectifs et les coups restants avant de choisir une brique.\n2. Cherchez une brique qui peut rentrer : faites-la glisser vers la porte de sa couleur. Glissée vers une case vide, une brique s’arrête là où vous la lâchez.\n3. Poussez une brique vers une voisine pour les échanger et alignez trois briques ou plus de même couleur. Relisez les objectifs restants après chaque coup.\n4. Demandez un indice si nécessaire ; les indices proposent aussi des glissements, pas seulement des échanges. Une fois tous les objectifs atteints, le plateau se termine et les coups restants deviennent des blasters qui augmentent le score.',
    voice:
      '1. Activez VoiceOver dans l’accessibilité de l’iPhone. Explorez le plateau au toucher ou en balayant ses éléments.\n2. Écoutez la couleur, la forme et la position d’une brique. Ses actions proposent chaque glissement et chaque échange, par exemple « Faire glisser vers la gauche et sortir par la porte : rouge » ; activez une brique spéciale quand son action est proposée.\n3. Écoutez où la brique s’est arrêtée et ce qui est rentré avant le coup suivant. Essayez les rotors des briques spéciales, objectifs, obstacles et portes.\n4. Sur un plateau, le double toucher à deux doigts demande un indice ; le geste d’échappement à deux doigts ouvre Pause sans quitter la partie. Ailleurs, il ferme l’écran actuel.\n5. Essayez le son de ligne facultatif. Ajustez le détail des annonces si nécessaire. Pour une annonce confuse, indiquez le niveau et les mots exacts dans Accessibilité.',
  },
  de: {
    first:
      '1. Öffne dein aktuelles Level auf der Reise. Lies Ziele und verbleibende Züge, bevor du einen Stein wählst.\n2. Such einen Stein, der nach Hause kann: Wisch ihn zum Tor seiner Farbe. Ein Stein, den du zu einem freien Feld wischst, bleibt stehen, wo du loslässt.\n3. Wisch einen Stein in einen Nachbarn, um beide zu tauschen, und bring drei oder mehr einer Farbe in eine Reihe. Prüfe nach jedem Zug die übrigen Ziele.\n4. Fordere bei Bedarf einen Hinweis an; Hinweise nennen auch Schiebezüge, nicht nur Tauschzüge. Sind alle Ziele erfüllt, endet das Spielfeld, und übrige Züge werden zu Linienblastern für eine höhere Punktzahl.',
    voice:
      '1. Aktiviere VoiceOver in den iPhone-Bedienungshilfen. Erkunde das Spielfeld durch Berührung oder Wischen zwischen Elementen.\n2. Höre Farbe, Form und Position des Steins. Seine Aktionen bieten jeden Schiebe- und Tauschzug an, etwa „Schieben nach links, hinaus durch das Tor: rot“; aktiviere einen Spezialstein, wenn seine Aktion angeboten wird.\n3. Höre vor dem nächsten Zug, wo der Stein stehen geblieben ist und was nach Hause gegangen ist. Probiere die Rotoren für Spezialsteine, Ziele, Hindernisse und Tore.\n4. Auf dem Spielfeld fordert der Doppeltipp mit zwei Fingern einen Hinweis an. Die Zickzackgeste mit zwei Fingern öffnet Pause, ohne den Versuch zu verlassen; außerhalb des Spielfelds schließt sie den Bildschirm.\n5. Probiere den freiwilligen Zeilenklang. Verringere bei Bedarf die Ansagen. Nenne bei unklaren Ansagen Level und genauen Wortlaut im Bereich Bedienungshilfen.',
  },
  es: {
    first:
      '1. Abre el nivel actual desde el Viaje. Lee los objetivos y los movimientos restantes antes de elegir un ladrillo.\n2. Busca un ladrillo que pueda volver a casa: deslízalo hacia la puerta de su color. Un ladrillo deslizado hacia un hueco se para donde lo sueltes.\n3. Empuja un ladrillo contra un vecino para cambiarlos y alinea tres o más de un color. Revisa los objetivos pendientes después de cada movimiento.\n4. Pide una pista si hace falta; las pistas también proponen deslizamientos, no solo intercambios. Al cumplir todos los objetivos, el tablero termina y los movimientos restantes se convierten en disparadores que aumentan la puntuación.',
    voice:
      '1. Activa VoiceOver en Accesibilidad del iPhone. Explora el tablero al tacto o deslizando entre elementos.\n2. Escucha el color, la forma y la posición del ladrillo. Sus acciones ofrecen cada deslizamiento e intercambio, como «Deslizar hacia la izquierda y salir por la puerta: rojo»; activa un especial cuando se ofrezca su acción.\n3. Antes del siguiente movimiento, escucha dónde se paró el ladrillo y qué volvió a casa. Prueba los rotores de especiales, objetivos, obstáculos y puertas.\n4. En el tablero, el doble toque con dos dedos pide una pista. El gesto de escape con dos dedos abre Pausa sin abandonar el intento; fuera del tablero cierra la pantalla.\n5. Prueba el sonido de fila opcional y ajusta el detalle de anuncios. Si algo no queda claro, comunica nivel y palabras exactas en Accesibilidad.',
  },
  ja: {
    first:
      '1. Journeyから現在のレベルを開き、ブロックを選ぶ前に目標と残り手数を確認します。\n2. おうちに帰せるブロックを探し、同じ色の門に向けてスワイプします。空いたマスへスワイプしたブロックは、指をはなした所で止まります。\n3. ブロックをとなりのブロックに向けてスワイプすると入れ替わります。同じ色を3つ以上並べましょう。1手ごとに残りの目標を確認します。\n4. 必要ならヒントを求めます。ヒントは入れ替えだけでなく、すべらせる手も教えてくれます。すべての目標を達成すると盤面が終わり、残りの手数はブラスターになってスコアを増やします。',
    voice:
      '1. iPhoneのアクセシビリティ設定でVoiceOverを有効にします。触ったり要素間をスワイプしたりして盤面を調べます。\n2. ブロックの色・形・位置を聞きます。アクションには、「左にすべらせて赤の門から出す」のように、すべらせる手と入れ替えがすべて並びます。特殊ブロックは、発動のアクションが出たときに使えます。\n3. 次の操作の前に、ブロックがどこで止まったか、何がおうちに帰ったかを聞きます。特殊・目標・障害物・門のローターも試してください。\n4. 盤面の2本指ダブルタップはヒントを求めます。2本指のスクラブは挑戦を終了せずに一時停止を開き、盤面以外では画面を閉じます。\n5. 任意の行の音や読み上げの詳しさを調整できます。不明な読み上げはレベルと正確な言葉をアクセシビリティで報告してください。',
  },
  'pt-BR': {
    first: '1. Abra sua fase atual pela Jornada. Leia os objetivos e as jogadas restantes antes de escolher um tijolo.\n2. Procure um tijolo que possa voltar para casa: deslize-o até o portão da cor dele. Um tijolo deslizado para um espaço vazio para onde você soltar.\n3. Empurre um tijolo contra um vizinho para trocar os dois e alinhe três ou mais da mesma cor. Confira os objetivos restantes depois de cada jogada.\n4. Peça uma dica se precisar; as dicas mostram deslizes, não só trocas. Quando todos os objetivos forem cumpridos, o tabuleiro termina e as jogadas restantes viram blasters para uma pontuação maior.',
    voice: '1. Ative o VoiceOver nos ajustes de Acessibilidade do iPhone e abra o jogo. Explore o tabuleiro pelo toque ou deslizando entre os elementos.\n2. Ouça a cor, a forma e a posição do tijolo. As ações dele oferecem cada deslize e cada troca, como “Deslizar para a esquerda e sair pelo portão: vermelho”; ative uma peça especial quando a ação dela aparecer.\n3. Antes da próxima jogada, ouça onde o tijolo parou e o que voltou para casa. Experimente os rotores de Especiais, Objetivos, Bloqueios e Portões.\n4. Um toque duplo com dois dedos no tabuleiro pede uma dica. O gesto de esfregar com dois dedos abre a pausa sem abandonar sua tentativa; fora do tabuleiro, ele fecha a tela atual.\n5. Se quiser outra pista sonora, experimente a ação opcional de som da fileira. Ajuste o nível de detalhes dos anúncios se a fala ficar carregada. Se algo não estiver claro, informe a fase e o anúncio exato em Acessibilidade.',
  },
} as const;
export function playerGuides(locale: Locale) {
  const c = currentGameCopy[locale],
    w = guideWords[locale];
  const bodies = [
    [c.summary, steps[locale].first, c.match, c.goals, c.moves],
    [c.specials, c.goals, c.stars],
    [w.journey, c.apple],
    [steps[locale].voice, c.voiceover, w.settings],
    [w.settings, c.voiceover],
    [c.lives, c.moves, w.undo, c.ads],
    [w.help, c.community],
    [c.summary, c.releaseTitle, c.release, c.demoTitle, c.demo],
  ];
  return guideKeys.map((key, i) => ({
    key,
    title: w.titles[i],
    category:
      key === 'voiceover' || key === 'settings' ? 'accessibility' : 'help',
    body: `${w.checkpoint}\n\n${bodies[i].join('\n\n')}`,
  }));
}
