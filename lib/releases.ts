/**
 * OutBrick's release notes, for /whats-new, its translations and /whats-new/feed.xml.
 *
 * The text is copied, word for word, from the iOS repository's App Store metadata
 * (`fastlane/metadata/<locale>/release_notes.txt`), which is what players read under
 * "What's New" in the App Store. Only the section headings change: the store sets them in
 * capitals, the site in sentence case. The site never reads the iOS repository at build time
 * (Netlify does not have it), so a new release means pasting its notes in here.
 *
 * Dates are the App Store's own: `currentVersionReleaseDate` and `releaseDate` from Apple's
 * iTunes Lookup API (https://itunes.apple.com/lookup?id=6807997465&country=us).
 *
 * Kept free of enums, namespaces and runtime imports so scripts/postbuild.mjs can load it
 * with `node --experimental-strip-types`.
 */

export type ReleaseSection = {
  title: string;
  /** A sentence that opens the section, before its bullets. */
  intro?: string;
  bullets: string[];
};

export type ReleaseNotes = {
  /** One line, the notes' own opening sentence without the "OutBrick 4.2 —" prefix. */
  headline: string;
  sections: ReleaseSection[];
};

export type Release = ReleaseNotes & {
  version: string;
  /** Calendar date of the App Store release, YYYY-MM-DD (UTC). */
  date: string;
};

/** The languages the current release's notes are published in on this site. */
export type ReleaseLocale = 'en' | 'fr' | 'de' | 'es' | 'ja' | 'pt-BR';

/** The URL fragment for a version: "4.2" -> "4-2", so /whats-new#4-2. */
export function releaseAnchor(version: string): string {
  return version.replace(/\./g, '-');
}

/** 4.2's notes in every language the site is published in, from fastlane. */
const notes42: Record<ReleaseLocale, ReleaseNotes> = {
  en: {
    headline: 'A harder game, on a Journey rebuilt in brick.',
    sections: [
      {
        title: 'The boards ask more of you',
        intro: 'You told us every level was too easy. You were right, and this is the release that starts to answer it.',
        bullets: [
          'The whole 2,000-board pack was rebuilt against a bar that rises with the chapter: the opening levels have to resist a shallow search, the middle chapters a deeper one, and the late game deeper still.',
          '1,301 of the 2,000 boards carry new layouts. Every board is still proven solvable, and every board can still be cleared without spending anything.',
          'This is the first pass at it rather than a finished job. Some boards still open more gently than we want, and that work carries on.',
        ],
      },
      {
        title: 'No clock anywhere',
        bullets: [
          'Rush is withdrawn from the whole game. Nothing in OutBrick is timed any more — the per-board move limit is the only rope. Rush Weekend becomes Target Weekend and pays for beating the move target instead.',
        ],
      },
      {
        title: 'The Journey is built out of brick',
        bullets: [
          'Nothing on the map is a painted picture any more. All 167 villages build their ground, roads, props and landmarks out of brick as you travel, from twenty-eight designed places — Garden City, Clover Farm, Seashell Beach, Ember Volcano, Snowflake Village, Mushroom Forest, Pirate Harbor, Spaceport and twenty more.',
          'Each place has its own palette, its own road surface, its own props and landmarks, its own level-chip shape and its own motion.',
          'The road comes round six times on the way to level 2,000, and every pass is a different hour of the day: First Light, Market Day, Festival Gardens, Hidden Courtyards, Windmill Walk and Grand Promenade. All 167 stops read as different places.',
          'Journey now sits in the centre of the tab bar, where you can step straight back out onto the map.',
          'Home is built from the same brick vocabulary as the road.',
        ],
      },
      {
        title: 'Links that work again',
        bullets: [
          'Home Screen quick actions, a challenge link from a friend, Spotlight results, Handoff and every widget tap now open the screen they name instead of dropping you on Home.',
        ],
      },
      {
        title: 'Ask for a friend by name',
        bullets: [
          'Siri and Shortcuts can bring any of the nine friends onto the Home stage by name.',
        ],
      },
      {
        title: 'Easier to read',
        bullets: [
          'Secondary text on dark panels is lighter, measured to clear the 4.5:1 contrast minimum rather than judged by eye.',
          'At the accessibility text sizes, labels on Leaders, Pass, Profile and Home wrap instead of losing their last word to an ellipsis.',
          'Colour-blind glyphs, VoiceOver and Reduce Motion are unchanged and still on from the first launch.',
        ],
      },
      {
        title: 'On the board',
        bullets: [
          'Pick a brick up and the board marks where it would come to rest in each direction.',
          'Counted gates and iced gates no longer look alike, and gate contrast is measured against every chapter frame and sky rather than judged by eye.',
          'The gate-crossing sound is gone. It fired constantly and told you nothing.',
        ],
      },
      {
        title: 'Worth coming back for',
        bullets: [
          'The icon badge counts what you have already earned and not collected — finished missions, a daily brick, Pass tiers due, a village reward waiting, a full life tank. It counts trips, not rewards, so it stops at nine and can always be cleared.',
        ],
      },
      {
        title: 'A new app icon',
        bullets: [
          'Bloo — the real 3D character rather than a drawing of him — stands on a course of gold, coral and teal bricks over a glowing violet burst, with no border at all.',
        ],
      },
      {
        title: 'Nothing moved in the shop',
        bullets: [
          'No price, no purchase and no economy rule changed. Lives still come back on their own, the first undo on every board is still free, and every board can still be cleared without spending.',
        ],
      },
    ],
  },
  fr: {
    headline: 'Un jeu plus exigeant, sur un Voyage rebâti en briques.',
    sections: [
      {
        title: 'Les plateaux en demandent plus',
        intro: 'Tu nous as dit que tous les niveaux étaient trop faciles. Tu avais raison, et cette version y répond.',
        bullets: [
          'Le pack entier de 2 000 plateaux a été rebâti face à une barre qui monte avec le chapitre : les premiers niveaux doivent résister à une recherche superficielle, les chapitres du milieu à une plus profonde, la fin du jeu à plus profonde encore.',
          '1 301 des 2 000 plateaux ont de nouveaux agencements. Chaque plateau reste prouvé soluble, et chaque plateau peut toujours être dégagé sans rien dépenser.',
          "C'est un premier passage, pas un travail achevé. Certains plateaux s'ouvrent encore plus doucement que nous le voudrions, et ce travail continue.",
        ],
      },
      {
        title: "Plus d'horloge nulle part",
        bullets: [
          "Rush est retiré de tout le jeu. Plus rien n'est chronométré dans OutBrick : la limite de coups par plateau est la seule corde. Le Week-end Rush devient le Week-end Objectif et récompense le fait de battre l'objectif de coups.",
        ],
      },
      {
        title: 'Le Voyage est bâti en briques',
        bullets: [
          "Plus rien sur la carte n'est une image peinte. Les 167 villages bâtissent leur sol, leurs routes, leurs décors et leurs monuments en briques à ton passage, à partir de vingt-huit lieux dessinés : Garden City, Clover Farm, Seashell Beach, Ember Volcano, Snowflake Village, Pirate Harbor et vingt autres.",
          'Chaque lieu a sa palette, son revêtement de route, ses décors et ses monuments, sa forme de pastille de niveau et son mouvement.',
          'La route revient six fois avant le niveau 2 000, et chaque passage est une autre heure du jour : First Light, Market Day, Festival Gardens, Hidden Courtyards, Windmill Walk et Grand Promenade. Les 167 étapes se lisent comme autant de lieux différents.',
          "Le Voyage occupe maintenant le centre de la barre d'onglets, d'où l'on ressort directement sur la carte.",
        ],
      },
      {
        title: 'Les liens remarchent',
        bullets: [
          "Les actions rapides de l'écran d'accueil, un lien de défi envoyé par un ami, les résultats Spotlight, Handoff et chaque appui sur un widget ouvrent à nouveau l'écran annoncé, au lieu de te déposer sur l'accueil.",
        ],
      },
      {
        title: 'Appeler un ami par son nom',
        bullets: [
          "Siri et les Raccourcis font monter sur la scène de l'Accueil n'importe lequel des neuf amis, par son nom.",
        ],
      },
      {
        title: 'Plus facile à lire',
        bullets: [
          "Le texte secondaire sur les panneaux sombres est plus clair : mesuré jusqu'à dépasser le minimum de contraste de 4,5:1, plutôt que jugé à l'œil.",
          "Aux tailles de texte d'accessibilité, les libellés de Classements, Pass, Profil et Accueil passent à la ligne au lieu de perdre leur dernier mot dans des points de suspension.",
          'Les symboles pour le daltonisme, VoiceOver et Réduire les animations sont inchangés et actifs dès le premier lancement.',
        ],
      },
      {
        title: 'Sur le plateau',
        bullets: [
          "Prends une brique et le plateau marque l'endroit où elle s'arrêterait dans chaque direction.",
          "Les portes comptées et les portes gelées ne se ressemblent plus, et le contraste des portes est mesuré au lieu d'être estimé.",
          "Le son de passage de porte a disparu. Il se déclenchait sans arrêt et ne t'apprenait rien.",
        ],
      },
      {
        title: 'De quoi revenir',
        bullets: [
          "La pastille de l'icône compte ce que tu as déjà gagné sans le récupérer : missions terminées, brique du jour, paliers de Pass dus, récompense de village en attente, réservoir de vies plein. Elle compte les trajets, pas les récompenses : elle s'arrête donc à neuf et peut toujours être vidée.",
        ],
      },
      {
        title: 'Une nouvelle icône',
        bullets: [
          'Bloo – le vrai personnage en 3D, et non un dessin de lui – se tient sur une rangée de briques or, corail et turquoise posée sur un éclat violet lumineux, sans aucune bordure.',
        ],
      },
      {
        title: "Rien n'a bougé dans la boutique",
        bullets: [
          "Aucun prix, aucun achat et aucune règle d'économie n'a changé. Les vies reviennent toujours d'elles-mêmes, la première annulation de chaque plateau reste gratuite, et chaque plateau peut toujours être dégagé sans rien dépenser.",
        ],
      },
    ],
  },
  de: {
    headline: 'Ein schwereres Spiel, auf einer Reise, die neu in Steinen gebaut ist.',
    sections: [
      {
        title: 'Die Felder verlangen mehr',
        intro: 'Ihr habt uns gesagt, jedes Level sei zu leicht. Ihr hattet recht, und mit diesem Update beginnt die Antwort darauf.',
        bullets: [
          'Das ganze Paket aus 2.000 Feldern wurde gegen eine Messlatte neu gebaut, die mit dem Kapitel steigt: Die ersten Level müssen einer flachen Suche standhalten, die mittleren Kapitel einer tieferen, das späte Spiel einer noch tieferen.',
          '1.301 der 2.000 Felder haben neue Layouts. Jedes Feld ist weiterhin nachweislich lösbar, und jedes Feld lässt sich weiterhin lösen, ohne etwas auszugeben.',
          'Das ist der erste Durchgang, keine fertige Arbeit. Manche Felder öffnen noch sanfter, als wir möchten, und daran arbeiten wir weiter.',
        ],
      },
      {
        title: 'Nirgends eine Uhr',
        bullets: [
          'Rush ist aus dem ganzen Spiel zurückgezogen. Nichts in OutBrick läuft mehr gegen die Zeit – die Zuggrenze pro Feld ist das einzige Seil. Aus dem Rush-Wochenende wird das Ziel-Wochenende und belohnt jetzt, wer das Zugziel unterbietet.',
        ],
      },
      {
        title: 'Die Reise ist aus Steinen gebaut',
        bullets: [
          'Nichts auf der Karte ist mehr ein gemaltes Bild. Alle 167 Dörfer bauen ihren Boden, ihre Straßen, Requisiten und Wahrzeichen im Vorbeiziehen aus Steinen, aus achtundzwanzig gestalteten Orten: Garden City, Clover Farm, Seashell Beach, Ember Volcano, Snowflake Village, Pirate Harbor und zwanzig weitere.',
          'Jeder Ort hat seine eigene Palette, seinen eigenen Straßenbelag, eigene Requisiten und Wahrzeichen, eine eigene Form der Levelmarke und eine eigene Bewegung.',
          'Bis Level 2.000 führt die Straße sechsmal herum, und jede Runde ist eine andere Tageszeit: First Light, Market Day, Festival Gardens, Hidden Courtyards, Windmill Walk und Grand Promenade. Alle 167 Stationen lesen sich als eigene Orte.',
          'Die Reise sitzt jetzt in der Mitte der Tableiste, von wo ihr direkt wieder auf die Karte hinaustretet.',
        ],
      },
      {
        title: 'Links, die wieder funktionieren',
        bullets: [
          'Kurzbefehle vom Home-Bildschirm, ein Herausforderungslink von Freunden, Spotlight-Treffer, Handoff und jeder Tipp auf ein Widget öffnen wieder den Bildschirm, den sie nennen, statt euch auf dem Startbildschirm abzusetzen.',
        ],
      },
      {
        title: 'Einen Freund beim Namen rufen',
        bullets: [
          'Siri und Kurzbefehle holen jede der neun Figuren beim Namen auf die Bühne im Start.',
        ],
      },
      {
        title: 'Besser zu lesen',
        bullets: [
          'Sekundärtext auf dunklen Flächen ist heller: gemessen, bis er den Mindestkontrast von 4,5:1 übersteigt, statt nach Augenmaß beurteilt.',
          'In den Bedienungshilfen-Schriftgrößen brechen Beschriftungen in Bestenlisten, Pass, Profil und Start jetzt um, statt ihr letztes Wort an drei Punkte zu verlieren.',
          'Symbole für Farbenblindheit, VoiceOver und „Bewegung reduzieren“ bleiben unverändert und sind ab dem ersten Start aktiv.',
        ],
      },
      {
        title: 'Auf dem Feld',
        bullets: [
          'Nimmt man einen Stein auf, markiert das Feld, wo er in jeder Richtung zu liegen käme.',
          'Gezählte und vereiste Tore sehen nicht mehr gleich aus, und der Torkontrast wird gemessen statt geschätzt.',
          'Der Ton beim Durchqueren eines Tores ist weg. Er kam ständig und sagte nichts aus.',
        ],
      },
      {
        title: 'Ein Grund wiederzukommen',
        bullets: [
          'Das Symbolzeichen zählt, was ihr bereits verdient und noch nicht abgeholt habt: erledigte Missionen, einen Tagesstein, fällige Pass-Stufen, eine wartende Dorfbelohnung, einen vollen Lebenstank. Es zählt Wege, nicht Belohnungen, hört deshalb bei neun auf und lässt sich immer leeren.',
        ],
      },
      {
        title: 'Ein neues App-Symbol',
        bullets: [
          'Bloo – die echte 3D-Figur statt einer Zeichnung von ihr – steht auf einer Schicht aus goldenen, korallenen und türkisen Steinen über einem leuchtenden violetten Strahlenkranz, ganz ohne Rahmen.',
        ],
      },
      {
        title: 'Im Shop hat sich nichts bewegt',
        bullets: [
          'Kein Preis, kein Kauf und keine Regel der Wirtschaft hat sich geändert. Leben kommen weiterhin von allein zurück, das erste Rückgängig ist auf jedem Feld weiterhin gratis, und jedes Feld lässt sich weiterhin ohne Ausgaben lösen.',
        ],
      },
    ],
  },
  es: {
    headline: 'Un juego más difícil, en un Viaje reconstruido en ladrillo.',
    sections: [
      {
        title: 'Los tableros te piden más',
        intro: 'Nos dijisteis que todos los niveles eran demasiado fáciles. Teníais razón, y esta versión es la respuesta.',
        bullets: [
          'El paquete entero de 2.000 tableros se ha rehecho contra un listón que sube con el capítulo: los primeros niveles deben resistir una búsqueda superficial, los capítulos intermedios una más profunda, y el tramo final más profunda todavía.',
          '1.301 de los 2.000 tableros tienen diseños nuevos. Todos los tableros siguen siendo demostrablemente resolubles, y todos se pueden seguir despejando sin gastar nada.',
          'Esta es la primera pasada, no un trabajo terminado. Algunos tableros todavía abren de forma más blanda de lo que queremos, y seguimos en ello.',
        ],
      },
      {
        title: 'Ningún reloj en ninguna parte',
        bullets: [
          'Rush desaparece del juego entero. Ya no hay nada cronometrado en OutBrick: el límite de movimientos de cada tablero es la única cuerda. El Fin de Semana Rush pasa a ser Fin de Semana del Objetivo y premia bajar del objetivo de movimientos.',
        ],
      },
      {
        title: 'El Viaje está hecho de ladrillo',
        bullets: [
          'En el mapa ya no queda ni un dibujo pintado. Los 167 pueblos levantan su suelo, sus calles, sus elementos y sus monumentos en ladrillo a tu paso, a partir de veintiocho lugares diseñados: Garden City, Clover Farm, Seashell Beach, Ember Volcano, Snowflake Village, Pirate Harbor y veinte más.',
          'Cada lugar tiene su paleta, su firme, sus elementos y monumentos, su forma de ficha de nivel y su movimiento.',
          'La carretera da seis vueltas camino del nivel 2.000 y cada pasada es otra hora del día: First Light, Market Day, Festival Gardens, Hidden Courtyards, Windmill Walk y Grand Promenade. Los 167 puntos se leen como lugares distintos.',
          'El Viaje ocupa ahora el centro de la barra de pestañas, desde donde vuelves directamente al mapa.',
        ],
      },
      {
        title: 'Enlaces que vuelven a funcionar',
        bullets: [
          'Las acciones rápidas de la pantalla de inicio, el enlace de reto de un amigo, los resultados de Spotlight, Handoff y cualquier toque en un widget abren otra vez la pantalla que anuncian, en lugar de dejarte en Inicio.',
        ],
      },
      {
        title: 'Llama a un amigo por su nombre',
        bullets: [
          'Siri y los Atajos pueden subir al escenario de Inicio a cualquiera de los nueve amigos por su nombre.',
        ],
      },
      {
        title: 'Más fácil de leer',
        bullets: [
          'El texto secundario sobre paneles oscuros es más claro: medido hasta superar el mínimo de contraste de 4,5:1, en vez de juzgado a ojo.',
          'En los tamaños de texto de accesibilidad, las etiquetas de Líderes, Pase, Perfil e Inicio se ajustan en varias líneas en lugar de perder su última palabra en unos puntos suspensivos.',
          'Los símbolos para daltonismo, VoiceOver y Reducir movimiento siguen igual y activos desde el primer arranque.',
        ],
      },
      {
        title: 'En el tablero',
        bullets: [
          'Coge un ladrillo y el tablero marca dónde acabaría en cada dirección.',
          'Las puertas con contador y las heladas ya no se parecen, y el contraste de las puertas se mide contra cada marco de capítulo y cada cielo en vez de calcularse a ojo.',
          'El sonido de cruzar una puerta ya no está. Sonaba sin parar y no decía nada.',
        ],
      },
      {
        title: 'Motivos para volver',
        bullets: [
          'El globo del icono cuenta lo que ya has ganado y no has recogido: misiones terminadas, un ladrillo diario, niveles del Pase pendientes, la recompensa de un pueblo esperando, el depósito de vidas lleno. Cuenta viajes, no recompensas, así que se detiene en nueve y siempre se puede vaciar.',
        ],
      },
      {
        title: 'Un icono nuevo',
        bullets: [
          'Bloo —el personaje 3D de verdad, no un dibujo suyo— sobre una hilada de ladrillos dorados, coral y turquesa, ante un destello violeta luminoso y sin ningún borde.',
        ],
      },
      {
        title: 'En la tienda no se ha movido nada',
        bullets: [
          'No ha cambiado ningún precio, ninguna compra ni ninguna regla de la economía. Las vidas siguen volviendo solas, el primer deshacer de cada tablero sigue siendo gratis y todo tablero se puede seguir despejando sin gastar nada.',
        ],
      },
    ],
  },
  ja: {
    headline: '手ごたえのあるゲームへ。旅路はすべてブロックで組み直しました。',
    sections: [
      {
        title: '盤面がより深く考えることを求めます',
        intro: '「どのレベルも簡単すぎる」というご指摘をいただきました。そのとおりでした。この配信はその答えです。',
        bullets: [
          '2,000 盤すべてを、章が進むほど高くなる基準に対して作り直しました。序盤は浅い探索に耐えること、中盤はより深い探索に、終盤はさらに深い探索に耐えることが条件です。',
          '2,000 盤のうち 1,301 盤が新しい配置になりました。どの盤面も解けることが証明済みで、どの盤面も課金なしでクリアできます。',
          'これは最初の一巡であり、完成した仕事ではありません。まだ狙いより易しく始まる盤面もあり、作業は続いています。',
        ],
      },
      {
        title: '時計はどこにもありません',
        bullets: [
          'ラッシュはゲーム全体から取り下げました。OutBrick に時間制限のある要素はもうありません。盤ごとの手数制限だけが唯一の縄です。ラッシュウィークエンドはターゲットウィークエンドとなり、手数の目標を下回ることに報酬が出ます。',
        ],
      },
      {
        title: '旅路はブロックでできています',
        bullets: [
          'マップに描かれた絵はもうありません。167 すべての村が、地面も道も小物もランドマークも、通りがかりにブロックで組み上がります。素材は Garden City、Clover Farm、Seashell Beach、Ember Volcano、Snowflake Village、Mushroom Forest、Pirate Harbor、Spaceport ほか二十八の土地です。',
          '土地ごとに配色、路面、小物とランドマーク、レベルチップの形、そして動きが違います。',
          'レベル 2,000 までに道は六周し、周ごとに時刻が変わります。First Light、Market Day、Festival Gardens、Hidden Courtyards、Windmill Walk、Grand Promenade。167 か所すべてが別の場所として読めます。',
          '「旅路」がタブバーの中央に移り、そこからすぐに地図へ戻れます。',
          'ホーム画面も道と同じブロックの語彙で組まれています。',
        ],
      },
      {
        title: 'リンクがまた動きます',
        bullets: [
          'ホーム画面のクイックアクション、友だちからの対戦リンク、Spotlight の検索結果、Handoff、ウィジェットのタップが、ホームに落ちずに本来の画面を開きます。',
        ],
      },
      {
        title: '名前で仲間を呼ぶ',
        bullets: [
          'Siri とショートカットから、9 人の仲間を名前でホームのステージに呼び出せます。',
        ],
      },
      {
        title: '読みやすくなりました',
        bullets: [
          '暗いパネル上の補助テキストを明るくしました。目視ではなく実測で、コントラスト比 4.5:1 の下限を超えています。',
          'アクセシビリティの文字サイズでも、ランキング・パス・プロフィール・ホームのラベルが省略記号で最後の語を失わず、折り返すようになりました。',
          '色覚サポートの記号、VoiceOver、視差効果を減らす設定はこれまでどおり、初回起動から有効です。',
        ],
      },
      {
        title: '盤面で',
        bullets: [
          'ブロックをつまむと、各方向でどこに止まるかを盤面が示します。',
          'カウント付きゲートと氷ゲートが見分けられるようになり、ゲートのコントラストは章の枠と空それぞれに対して実測しています。',
          'ゲート通過音を削除しました。鳴り続けるばかりで何も伝えていませんでした。',
        ],
      },
      {
        title: 'また開きたくなる理由',
        bullets: [
          'アイコンのバッジは、すでに獲得済みで未回収のものを数えます。完了したミッション、デイリーブロック、受け取り待ちのパスの段、待っている村の報酬、満タンのライフ。数えるのは報酬の数ではなく「行き先の数」なので、九で止まり、必ずゼロにできます。',
        ],
      },
      {
        title: '新しいアプリアイコン',
        bullets: [
          '絵ではなく本物の 3D キャラクターの Bloo が、金・珊瑚・ティールのブロックの上に立ち、輝く紫のバーストを背にしています。縁は一切ありません。',
        ],
      },
      {
        title: 'ショップは何も変わっていません',
        bullets: [
          '価格も、購入内容も、経済のルールも変更はありません。ライフは時間で回復し、各盤の最初の取り消しは無料のまま、どの盤面も課金なしでクリアできます。',
        ],
      },
    ],
  },
  'pt-BR': {
    headline: 'Um jogo mais desafiador, em uma Jornada reconstruída com tijolos.',
    sections: [
      {
        title: 'Os tabuleiros exigem mais',
        intro: 'Vocês nos disseram que todas as fases eram fáceis demais. Tinham razão, e esta versão começa a responder a isso.',
        bullets: [
          'O pacote inteiro de 2.000 tabuleiros foi reconstruído com um nível de dificuldade que aumenta a cada capítulo: as fases iniciais precisam resistir a uma busca superficial, os capítulos intermediários a uma busca mais profunda, e o final do jogo a uma ainda mais profunda.',
          '1.301 dos 2.000 tabuleiros têm novos layouts. Todos continuam comprovadamente solucionáveis, e ainda é possível concluir todos sem gastar nada.',
          'Este é o primeiro ajuste, não um trabalho concluído. Alguns tabuleiros ainda começam de forma mais fácil do que gostaríamos, e continuamos trabalhando nisso.',
        ],
      },
      {
        title: 'Sem cronômetro em lugar nenhum',
        bullets: [
          'O modo Rush foi removido do jogo inteiro. Nada em OutBrick é cronometrado: o limite de movimentos por tabuleiro é o único limite. O Fim de Semana Rush passa a ser Fim de Semana da Meta e recompensa quem supera a meta de movimentos.',
        ],
      },
      {
        title: 'A Jornada é construída com tijolos',
        bullets: [
          'Nada no mapa é mais uma ilustração pintada. As 167 vilas constroem seu terreno, ruas, objetos e monumentos com tijolos conforme você avança, a partir de 28 locais projetados: Garden City, Clover Farm, Seashell Beach, Ember Volcano, Snowflake Village, Mushroom Forest, Pirate Harbor, Spaceport e mais vinte.',
          'Cada local tem sua própria paleta, pavimento, objetos e monumentos, formato de marcador de fase e movimento.',
          'A estrada dá seis voltas a caminho da fase 2.000, e cada passagem representa uma hora diferente do dia: First Light, Market Day, Festival Gardens, Hidden Courtyards, Windmill Walk e Grand Promenade. As 167 paradas parecem lugares diferentes.',
          'A Jornada agora fica no centro da barra de abas, de onde você pode voltar diretamente ao mapa.',
          'A tela inicial usa o mesmo vocabulário de tijolos da estrada.',
        ],
      },
      {
        title: 'Links voltam a funcionar',
        bullets: [
          'Ações rápidas da Tela de Início, links de desafio enviados por amigos, resultados do Spotlight, Handoff e toques em widgets agora abrem a tela indicada, em vez de levar você à tela inicial.',
        ],
      },
      {
        title: 'Chame um amigo pelo nome',
        bullets: [
          'Siri e Atalhos podem trazer qualquer um dos nove amigos para o palco da Tela de Início pelo nome.',
        ],
      },
      {
        title: 'Mais fácil de ler',
        bullets: [
          'O texto secundário em painéis escuros está mais claro, medido para superar o contraste mínimo de 4,5:1 em vez de ser avaliado a olho.',
          'Nos tamanhos de texto de acessibilidade, os rótulos de Líderes, Passe, Perfil e Início quebram em linhas, em vez de perder a última palavra para reticências.',
          'Símbolos para daltonismo, VoiceOver e Reduzir Movimento continuam iguais e ativos desde a primeira abertura.',
        ],
      },
      {
        title: 'No tabuleiro',
        bullets: [
          'Pegue um tijolo, e o tabuleiro indica onde ele pararia em cada direção.',
          'Portas com contador e portas congeladas não parecem mais iguais. O contraste das portas é medido em relação a cada moldura de capítulo e a cada céu, em vez de ser avaliado a olho.',
          'O som ao atravessar uma porta foi removido. Ele tocava o tempo todo e não informava nada.',
        ],
      },
      {
        title: 'Um motivo para voltar',
        bullets: [
          'O selo do ícone conta o que você já ganhou e ainda não resgatou: missões concluídas, um Tijolo Diário, níveis do Passe disponíveis, uma recompensa de vila à espera ou o tanque de vidas cheio. Ele conta destinos, não recompensas, então para em nove e sempre pode ser zerado.',
        ],
      },
      {
        title: 'Um novo ícone do app',
        bullets: [
          'Bloo — o personagem 3D de verdade, não uma ilustração dele — está sobre uma trilha de tijolos dourados, corais e verde-azulados, diante de um brilho violeta, sem nenhuma borda.',
        ],
      },
      {
        title: 'Nada mudou na loja',
        bullets: [
          'Nenhum preço, compra ou regra da economia mudou. As vidas continuam se recuperando sozinhas, o primeiro desfazer de cada tabuleiro continua grátis e todos os tabuleiros ainda podem ser concluídos sem gastar nada.',
        ],
      },
    ],
  },
};

const notes501: Record<ReleaseLocale, ReleaseNotes> = {
  "en": {
    "headline": "Thank you for every message about 5.0. This update is built from your feedback.",
    "sections": [
      {
        "title": "In this update",
        "bullets": [
          "Faster with VoiceOver. A move's result is now spoken the moment you make it, instead of after the animation, and VoiceOver keeps its place on the brick you moved.",
          "Hints speak again. Ask for a hint and VoiceOver tells you which brick to swap and which way, then takes you to it.",
          "Gates explained. Every gate tells you how to use it, and a brick standing in front of its own gate says so.",
          "Settings that explain themselves. Every option in Settings › Accessibility now says what it does.",
          "More VoiceOver tools. A two-finger double tap gives you a hint on a board, a two-finger scrub closes any screen, new rotors jump to specials, goals, blockers and gates, and an optional row sound lets you hear where the colours sit.",
          "Boards finish when you win. The board ends the moment your goals are met. Every move you have left turns into a line blaster for a bigger score, and more stars.",
          "Goals that look like your bricks. Goal icons now match the board's bricks exactly, in every village and colour palette, and a finished goal stays in its own colour.",
          "Siri, without opening the game. Ask how many lives you have, when the next one comes back, about today's Daily Brick, or how many stars you have in a village.",
          "Find OutBrick everywhere. Spotlight learns which levels and villages you play, Visual Intelligence can find a matching village or friend from a photo of toy bricks, and widgets come forward in your Smart Stack when there is something to do.",
          "Focus filters. Choose whether a Focus such as Sleep or Work turns off the music and pauses OutBrick's reminders.",
          "Fresh design. The level card, the wardrobe and the shop tiles now wear OutBrick's own colours, with clearer text."
        ]
      }
    ]
  },
  "fr": {
    "headline": "Merci pour chacun de tes messages sur la 5.0. Cette mise à jour est construite à partir de tes retours.",
    "sections": [
      {
        "title": "Dans cette mise à jour",
        "bullets": [
          "Plus rapide avec VoiceOver. Le résultat d’un coup est annoncé dès que tu le joues, et non plus après l’animation, et VoiceOver reste sur la brique que tu viens de déplacer.",
          "Les indices reprennent la parole. Demande un indice : VoiceOver te dit quelle brique échanger et dans quel sens, puis t’y emmène.",
          "Des portes expliquées. Chaque porte te dit comment l’utiliser, et une brique placée devant sa propre porte te le signale.",
          "Des réglages qui s’expliquent. Chaque option de Réglages › Accessibilité indique désormais ce qu’elle fait.",
          "Plus d’outils VoiceOver. Un double toucher à deux doigts te donne un indice sur un plateau, frotter avec deux doigts ferme n’importe quel écran, de nouveaux rotors sautent aux spéciales, aux objectifs, aux obstacles et aux portes, et un son de rangée facultatif te fait entendre où se trouvent les couleurs.",
          "Les plateaux s’arrêtent quand tu gagnes. Le plateau se termine dès que tes objectifs sont atteints. Chaque coup qu’il te reste devient un rayon de ligne, pour un plus gros score et plus d’étoiles.",
          "Des objectifs à l’image de tes briques. Les icônes d’objectif correspondent désormais exactement aux briques du plateau, dans chaque village et chaque palette de couleurs, et un objectif atteint garde sa propre couleur.",
          "Siri, sans ouvrir le jeu. Demande combien de vies il te reste, quand la prochaine revient, quelle est la Brique du jour, ou combien d’étoiles tu as dans un village.",
          "Retrouve OutBrick partout. Spotlight apprend quels niveaux et villages tu joues, Intelligence visuelle peut trouver un village ou un ami assorti à partir d’une photo de briques de jeu, et les widgets passent devant dans ta Pile intelligente quand il y a quelque chose à faire.",
          "Filtres de concentration. Choisis si un mode de concentration comme Sommeil ou Travail coupe la musique et suspend les rappels d’OutBrick.",
          "Un nouveau look. La carte de niveau, la Garde-robe et les vignettes de la Boutique arborent désormais les couleurs d’OutBrick, avec des textes plus lisibles."
        ]
      }
    ]
  },
  "de": {
    "headline": "Danke für jede Nachricht zu 5.0. Dieses Update ist aus deinem Feedback entstanden.",
    "sections": [
      {
        "title": "In diesem Update",
        "bullets": [
          "Schneller mit VoiceOver. Das Ergebnis eines Zugs wird jetzt in dem Moment angesagt, in dem du ihn machst, statt erst nach der Animation, und VoiceOver bleibt auf dem Stein, den du bewegt hast.",
          "Tipps sprechen wieder. Bitte um einen Tipp, und VoiceOver sagt dir, welchen Stein du in welche Richtung tauschen sollst, und bringt dich dann zu ihm.",
          "Tore erklärt. Jedes Tor sagt dir, wie du es benutzt, und ein Stein, der vor seinem eigenen Tor steht, sagt dir das auch.",
          "Einstellungen, die sich selbst erklären. Jede Option unter Einstellungen › Bedienungshilfen sagt jetzt, was sie tut.",
          "Mehr Werkzeuge für VoiceOver. Ein Doppeltippen mit zwei Fingern gibt dir auf einem Feld einen Tipp, Rubbeln mit zwei Fingern schließt jeden Bildschirm, neue Rotoren springen zu Spezialsteinen, Zielen, Hindernissen und Toren, und ein optionaler Reihenklang lässt dich hören, wo die Farben liegen.",
          "Felder enden, wenn du gewinnst. Das Feld ist in dem Moment vorbei, in dem deine Ziele erfüllt sind. Jeder Zug, der dir bleibt, wird zu einem Linienstein für mehr Punkte und mehr Sterne.",
          "Ziele, die wie deine Steine aussehen. Die Zielsymbole entsprechen jetzt genau den Steinen auf dem Feld, in jedem Dorf und jeder Farbpalette, und ein erfülltes Ziel behält seine eigene Farbe.",
          "Siri, ohne das Spiel zu öffnen. Frag, wie viele Leben du hast, wann das nächste zurückkommt, nach dem heutigen Tagesstein oder wie viele Sterne du in einem Dorf hast.",
          "Finde OutBrick überall. Spotlight lernt, welche Level und Dörfer du spielst, Visuelle Intelligenz findet anhand eines Fotos von Spielzeugsteinen ein passendes Dorf oder einen passenden Freund, und Widgets rücken in deinem intelligenten Stapel nach vorn, wenn es etwas zu tun gibt.",
          "Fokusfilter. Lege fest, ob ein Fokus wie „Schlafen“ oder „Arbeit“ die Musik ausschaltet und die Erinnerungen von OutBrick pausiert.",
          "Frisches Design. Die Levelkarte, die Garderobe und die Kacheln im Shop tragen jetzt OutBricks eigene Farben, mit klarerem Text."
        ]
      }
    ]
  },
  "es": {
    "headline": "Gracias por cada mensaje sobre la 5.0. Esta actualización está hecha a partir de lo que nos contaste.",
    "sections": [
      {
        "title": "En esta actualización",
        "bullets": [
          "Más rápido con VoiceOver. El resultado de un movimiento se anuncia en cuanto lo haces, no al terminar la animación, y VoiceOver se queda en el ladrillo que acabas de mover.",
          "Las pistas vuelven a hablar. Pide una pista y VoiceOver te dice qué ladrillo cambiar y hacia dónde, y luego te lleva hasta él.",
          "Puertas explicadas. Cada puerta te cuenta cómo usarla, y un ladrillo que está delante de su propia puerta te lo avisa.",
          "Ajustes que se explican solos. Cada opción de Ajustes › Accesibilidad te dice ahora qué hace.",
          "Más herramientas de VoiceOver. Un doble toque con dos dedos te da una pista en el tablero, frotar con dos dedos cierra cualquier pantalla, nuevos rotores saltan a especiales, objetivos, bloqueos y puertas, y un sonido de fila opcional te deja oír dónde están los colores.",
          "Los tableros terminan cuando ganas. El tablero acaba en el momento en que cumples tus objetivos. Cada movimiento que te queda se convierte en un rayo de línea para sumar más puntos y más estrellas.",
          "Objetivos que se parecen a tus ladrillos. Los iconos de los objetivos coinciden ahora exactamente con los ladrillos del tablero, en cada aldea y en cada paleta de colores, y un objetivo cumplido conserva su propio color.",
          "Siri, sin abrir el juego. Pregunta cuántas vidas tienes, cuándo vuelve la siguiente, por el Ladrillo diario de hoy o cuántas estrellas tienes en una aldea.",
          "Encuentra OutBrick en todas partes. Spotlight aprende qué niveles y aldeas juegas, Inteligencia visual puede encontrar una aldea o un amigo a juego a partir de una foto de ladrillos de juguete, y los widgets se adelantan en tu Pila inteligente cuando hay algo que hacer.",
          "Filtros de concentración. Elige si un modo de concentración como Dormir o Trabajo apaga la música y pausa los recordatorios de OutBrick.",
          "Diseño renovado. La tarjeta de nivel, el Armario y las fichas de la Tienda lucen ahora los colores propios de OutBrick, con textos más claros."
        ]
      }
    ]
  },
  "ja": {
    "headline": "5.0へのたくさんのメッセージ、ありがとうございます。今回のアップデートは、みなさんの声から生まれました。",
    "sections": [
      {
        "title": "このアップデート",
        "bullets": [
          "VoiceOverがより速く。手の結果は、アニメーションの後ではなく、動かしたその瞬間に読み上げられます。VoiceOverは動かしたブロックの上にとどまります。",
          "ヒントがまた話します。ヒントを頼むと、どのブロックをどの方向に入れ替えるかをVoiceOverが教えてくれて、そこまで連れていってくれます。",
          "ゲートの使い方がわかる。すべてのゲートが使い方を教えてくれます。自分の色のゲートの前にいるブロックは、そのことを知らせてくれます。",
          "自分で説明する設定。「設定 › アクセシビリティ」のすべての項目が、何をするのかを説明するようになりました。",
          "VoiceOverの新しい機能。ボードで2本指のダブルタップをするとヒントが出て、2本指でスクラブするとどの画面も閉じられます。新しいローターでスペシャル、目標、障害物、ゲートへジャンプでき、オプションの列のサウンドで色の位置を耳で確かめられます。",
          "勝ったらボードはそこで終わり。目標を達成した瞬間にボードが終わります。残った手はすべてラインブラスターに変わり、スコアもスターももっと増えます。",
          "ブロックそっくりの目標。目標のアイコンが、どの村でもどのカラーパレットでも、ボードのブロックとぴったり同じになりました。達成した目標も自分の色のまま残ります。",
          "ゲームを開かずにSiriで。ライフがいくつあるか、次のライフがいつ戻るか、今日のデイリーブロック、村で集めたスターの数を聞いてみましょう。",
          "どこでもOutBrick。Spotlightは遊んだレベルや村を覚え、ビジュアルインテリジェンスはおもちゃのブロックの写真から似合う村や仲間を見つけます。やることがあるときは、ウィジェットがスマートスタックの前に出てきます。",
          "集中モードフィルタ。「睡眠」や「仕事」などの集中モードで、音楽をオフにするか、OutBrickのリマインダーを一時停止するかを選べます。",
          "新しいデザイン。レベルカード、ワードローブ、ショップのタイルがOutBrickならではの色になり、文字も読みやすくなりました。"
        ]
      }
    ]
  },
  "pt-BR": {
    "headline": "Obrigado por cada mensagem sobre a versão 5.0. Esta atualização foi feita com base no que vocês nos contaram.",
    "sections": [
      {
        "title": "Nesta atualização",
        "bullets": [
          "VoiceOver mais rápido. O resultado de um movimento agora é anunciado assim que você o faz, em vez de esperar a animação terminar, e o VoiceOver permanece no tijolo que você moveu.",
          "As dicas voltaram a falar. Peça uma dica e o VoiceOver informa qual tijolo mover e em que direção, depois leva você até ele.",
          "Portas explicadas. Cada porta informa como usá-la, e um tijolo parado diante da própria porta avisa isso.",
          "Ajustes que se explicam. Cada opção em Ajustes › Acessibilidade agora informa o que faz.",
          "Mais ferramentas do VoiceOver. Um toque duplo com dois dedos dá uma dica no tabuleiro; deslizar com dois dedos fecha qualquer tela; novos rotores levam a especiais, objetivos, bloqueios e portas; e um som opcional de linha permite ouvir onde as cores estão.",
          "Os tabuleiros terminam quando você vence. O tabuleiro acaba no momento em que seus objetivos são cumpridos. Cada movimento restante vira um disparador de linha, para uma pontuação maior e mais estrelas.",
          "Objetivos com a aparência dos seus tijolos. Os ícones dos objetivos agora correspondem exatamente aos tijolos do tabuleiro, em todas as vilas e paletas de cores, e um objetivo concluído mantém sua própria cor.",
          "Siri, sem abrir o jogo. Pergunte quantas vidas você tem, quando a próxima volta, sobre o Tijolo Diário de hoje ou quantas estrelas tem em uma vila.",
          "Encontre OutBrick em todos os lugares. O Spotlight aprende quais fases e vilas você joga; a Inteligência Visual pode encontrar uma vila ou um amigo correspondente a partir de uma foto de tijolos de brinquedo; e os widgets aparecem na frente da Pilha Inteligente quando há algo para fazer.",
          "Filtros de Foco. Escolha se um Foco, como Sono ou Trabalho, desliga a música e pausa os lembretes de OutBrick.",
          "Visual renovado. O cartão de fase, o Guarda-Roupa e os blocos da Loja agora usam as cores próprias de OutBrick, com textos mais claros."
        ]
      }
    ]
  }
};

/** 5.1's notes (Slide & Match), word for word from the App Store's What's New, in every language the site is published in. */
const notes51: Record<ReleaseLocale, ReleaseNotes> = {
  "en": {
    "headline": "OutBrick 5.1 changes how every board plays.",
    "sections": [
      {
        "title": "In this update",
        "bullets": [
          "Slide & Match, on all 2,000 boards. Boards have room to move now. Swipe a brick toward an empty space and it stops where you let go. Slide it into the gate of its colour and it goes home. Swipe it into a neighbour to swap them, and lines of three or more still clear. A gate's goal counts both the bricks you send home and the ones of its colour you clear.",
          "Twelve kinds of board, village after village. On some, bricks fall and new ones drop in; on others nothing falls, and the board opens up as you play. Long, big, L and T bricks slide as one piece and leave only through a gate as wide as they are. Crates, ice, locks, moss, statues, sealed beds, iced gates and counted gates get in the way, and the gates now fill the board's border.",
          "Learn as you go. Each new idea gets a short card the first time you meet it, and a solver finds a winning line for every board before it ships.",
          "Slide with VoiceOver. Every brick that can move offers its slides as actions, such as \"Slide right 1 cell\", \"Slide up to the end, 3 cells\" or \"Slide left, out through the red gate\". VoiceOver says where the brick stopped and what went home, and hints name slides as well as swaps.",
          "The OutBrick Community. Community and Report a bug, new in Settings, open our community on the website: ask for help, report a bug or vote for ideas. Report a bug fills in your device, its system version, the app version, your level and whether VoiceOver, Switch Control or Larger Text is on, so you can go straight to what happened.",
          "Settings in Liquid Glass. The switches and choices in Settings are now Liquid Glass, in OutBrick's own green and red.",
          "Easier to watch. Blasts and falling bricks play a little slower, so you can see what happened, and the board takes your next move as soon as it is still."
        ]
      }
    ]
  },
  "fr": {
    "headline": "OutBrick 5.1 change la façon de jouer sur chaque plateau.",
    "sections": [
      {
        "title": "Dans cette mise à jour",
        "bullets": [
          "Glisse et aligne, sur les 2 000 plateaux. Les plateaux ont maintenant de la place pour bouger. Glisse une brique vers une case vide : elle s’arrête là où tu la lâches. Fais-la entrer dans la porte de sa couleur et elle rentre chez elle. Pousse-la vers une voisine pour les échanger : les lignes de trois ou plus s’effacent toujours. L’objectif d’une porte compte à la fois les briques que tu fais rentrer et celles de sa couleur que tu effaces.",
          "Douze sortes de plateaux, village après village. Sur certains, les briques tombent et de nouvelles arrivent ; sur d’autres, rien ne tombe et le plateau s’ouvre à mesure que tu joues. Les briques longues, grandes, en L et en T glissent d’un seul bloc et ne sortent que par une porte aussi large qu’elles. Caisses, glace, verrous, mousse, statues, parterres scellés, portes gelées et portes à compteur te barrent la route, et les portes occupent désormais toute la bordure du plateau.",
          "Tu apprends en jouant. Chaque nouvelle idée a sa petite carte la première fois que tu la rencontres, et un solveur trouve une solution gagnante pour chaque plateau avant sa sortie.",
          "Glisser avec VoiceOver. Chaque brique qui peut bouger propose ses glissements comme actions, par exemple « Faire glisser vers la droite de 1 case », « Faire glisser vers le haut jusqu’au bout, 3 cases » ou « Faire glisser vers la gauche et sortir par la porte : rouge ». VoiceOver te dit où la brique s’est arrêtée et ce qui est rentré, et les indices proposent aussi des glissements, pas seulement des échanges.",
          "La Communauté OutBrick. Communauté et Signaler un bug, nouveaux dans les Réglages, ouvrent notre communauté sur le site : demande de l’aide, signale un bug ou vote pour des idées. Signaler un bug remplit pour toi ton appareil, sa version du système, la version de l’app et ton niveau, et indique si VoiceOver, Contrôle de sélection ou Texte plus grand est activé : tu n’as plus qu’à raconter ce qui s’est passé.",
          "Réglages en Liquid Glass. Les interrupteurs et les choix des Réglages passent en Liquid Glass, dans le vert et le rouge d’OutBrick.",
          "Plus agréable à regarder. Les explosions et les briques qui tombent ralentissent un peu pour que tu voies ce qui se passe, et le plateau accepte ton coup suivant dès qu’il est immobile."
        ]
      }
    ]
  },
  "de": {
    "headline": "OutBrick 5.1 verändert, wie jedes Spielfeld gespielt wird.",
    "sections": [
      {
        "title": "In diesem Update",
        "bullets": [
          "Schieben und kombinieren, auf allen 2.000 Spielfeldern. Die Spielfelder haben jetzt Platz. Wisch einen Stein zu einem freien Feld, und er bleibt stehen, wo du loslässt. Schieb ihn ins Tor seiner Farbe, dann geht er nach Hause. Wisch ihn in einen Nachbarn, um die beiden zu tauschen – Reihen aus drei oder mehr verschwinden weiterhin. Das Ziel eines Tors zählt die Steine, die du nach Hause schickst, und die Steine seiner Farbe, die du abräumst.",
          "Zwölf Arten von Spielfeldern, Dorf für Dorf. Auf manchen fallen Steine und neue kommen nach, auf anderen fällt nichts, und das Spielfeld öffnet sich, während du spielst. Lange, große, L- und T-Steine gleiten als ein Stück und gehen nur durch ein Tor, das so breit ist wie sie. Kisten, Eis, Schlösser, Moos, Statuen, versiegelte Beete, vereiste Tore und Zähltore stehen im Weg, und die Tore füllen jetzt den ganzen Rand des Spielfelds.",
          "Lernen beim Spielen. Jede neue Idee bekommt beim ersten Mal eine kurze Karte, und ein Solver findet für jedes Spielfeld einen Gewinnweg, bevor es erscheint.",
          "Schieben mit VoiceOver. Jeder Stein, der sich bewegen kann, bietet seine Züge als Aktionen an, etwa „Schieben nach rechts um 1 Feld“, „Schieben nach oben bis zum Ende, 3 Felder“ oder „Schieben nach links, hinaus durch das Tor: rot“. VoiceOver sagt dir, wo der Stein stehen geblieben ist und was nach Hause gegangen ist, und ein Tipp nennt dir den passenden Zug.",
          "Die OutBrick-Community. „Community“ und „Fehler melden“, neu in den Einstellungen, öffnen unsere Community auf der Website: Hol dir Hilfe, melde einen Fehler oder stimm für Ideen ab. „Fehler melden“ trägt dein Gerät, seine Systemversion, die App-Version, dein Level und ob VoiceOver, Schaltersteuerung oder Größerer Text an ist schon ein, damit du gleich beschreiben kannst, was passiert ist.",
          "Einstellungen in Liquid Glass. Die Schalter und Auswahlknöpfe in den Einstellungen sind jetzt aus Liquid Glass, im Grün und Rot von OutBrick.",
          "Besser zu verfolgen. Explosionen und fallende Steine laufen etwas langsamer, damit du siehst, was passiert, und das Spielfeld nimmt deinen nächsten Zug an, sobald es stillsteht."
        ]
      }
    ]
  },
  "es": {
    "headline": "OutBrick 5.1 cambia la forma de jugar en todos los tableros.",
    "sections": [
      {
        "title": "En esta actualización",
        "bullets": [
          "Desliza y combina, en los 2000 tableros. Ahora los tableros tienen sitio para moverse. Desliza un ladrillo hacia un hueco y se para donde lo sueltes. Llévalo hasta la puerta de su color y volverá a casa. Empújalo contra un vecino para cambiarlos: las líneas de tres o más siguen desapareciendo. El objetivo de una puerta cuenta tanto los ladrillos que mandas a casa como los de su color que eliminas.",
          "Doce tipos de tablero, pueblo tras pueblo. En unos, los ladrillos caen y llegan otros nuevos; en otros no cae nada y el tablero se va abriendo mientras juegas. Los ladrillos largos, grandes, en L y en T se deslizan en una pieza y solo salen por una puerta tan ancha como ellos. Cajas, hielo, candados, musgo, estatuas, bancales sellados, puertas heladas y puertas con contador se interponen, y las puertas ocupan ahora todo el borde del tablero.",
          "Aprende jugando. Cada idea nueva trae una tarjeta breve la primera vez que la encuentras, y un solucionador encuentra una jugada ganadora para cada tablero antes de publicarlo.",
          "Desliza con VoiceOver. Cada ladrillo que puede moverse ofrece sus deslizamientos como acciones, como «Deslizar hacia la derecha 1 casilla», «Deslizar hacia arriba hasta el final, 3 casillas» o «Deslizar hacia la izquierda y salir por la puerta: rojo». VoiceOver te dice dónde se paró el ladrillo y qué volvió a casa, y las pistas también te proponen deslizamientos, no solo intercambios.",
          "La Comunidad de OutBrick. Comunidad e Informar de un error, nuevos en Ajustes, abren nuestra comunidad en la web: pide ayuda, informa de un error o vota ideas. Informar de un error rellena tu dispositivo, su versión del sistema, la versión de la app, tu nivel y si tienes activado VoiceOver, Control por botón o Texto más grande, para que vayas directo a lo que pasó.",
          "Ajustes en Liquid Glass. Los interruptores y las opciones de Ajustes son ahora de Liquid Glass, en el verde y el rojo de OutBrick.",
          "Más fácil de seguir. Las explosiones y los ladrillos que caen van un poco más despacio para que veas lo que pasa, y el tablero acepta tu siguiente jugada en cuanto se queda quieto."
        ]
      }
    ]
  },
  "ja": {
    "headline": "OutBrick 5.1で、すべてのボードの遊び方が変わります。",
    "sections": [
      {
        "title": "このアップデート",
        "bullets": [
          "スライド＆マッチを全2,000ボードで。ボードに動けるすき間ができました。ブロックを空いたマスへスワイプすると、指をはなした所で止まります。同じ色の門まですべらせると、おうちに帰ります。となりのブロックに向けてスワイプすれば入れ替わり、3つ以上そろった列はこれまでどおり消えます。門の目標には、おうちに帰したブロックと、消したその色のブロックの両方が数えられます。",
          "12種類のボードが、村から村へ。ブロックが落ちて新しいブロックが入ってくるボードもあれば、何も落ちず、遊ぶほど広がっていくボードもあります。長いブロック、大きなブロック、L字とT字のブロックはひとかたまりですべり、同じ幅の門からしか出られません。木箱、氷、ロック、コケ、像、封じられた花壇、凍った門、数字つきの門が行く手をはばみます。門はボードのふちいっぱいの太さになりました。",
          "遊びながら覚えられます。新しいしくみには、初めて出会ったときに短いカードが1枚ずつ出ます。どのボードも、公開前にソルバーが勝ち筋を見つけています。",
          "VoiceOverでスライド。動かせるブロックには、すべらせ方がアクションとして並びます。たとえば「右に1マスすべらせる」「上に端まですべらせる（3マス）」「左にすべらせて赤の門から出す」。ブロックがどこで止まったか、何がおうちに帰ったかをVoiceOverが伝え、ヒントは入れ替えだけでなく、すべらせる手も教えてくれます。",
          "OutBrickコミュニティ。設定に新しく加わった「コミュニティ」と「不具合を報告」から、ウェブサイトのコミュニティを開けます。質問したり、不具合を報告したり、アイデアに投票したりできます。「不具合を報告」では、デバイス、システムのバージョン、アプリのバージョン、いまのレベル、そしてVoiceOver・スイッチコントロール・さらに大きな文字がオンかどうかが自動で入るので、起きたことを書くだけです。",
          "設定がLiquid Glassに。設定のスイッチと選択ボタンがLiquid Glassになり、OutBrickのグリーンとレッドで表示されます。",
          "見やすい動き。爆発や落ちるブロックの動きを少しゆっくりにして、何が起きたか見えるようにしました。ボードが止まれば、すぐに次の手を打てます。"
        ]
      }
    ]
  },
  "pt-BR": {
    "headline": "O OutBrick 5.1 muda o jeito de jogar em todos os tabuleiros.",
    "sections": [
      {
        "title": "Nesta atualização",
        "bullets": [
          "Deslize e combine, nos 2.000 tabuleiros. Agora os tabuleiros têm espaço para se mexer. Deslize um tijolo para um espaço vazio: ele para onde você soltar. Leve-o até o portão da cor dele e ele volta para casa. Empurre-o contra um vizinho para trocar os dois, e linhas de três ou mais continuam sumindo. O objetivo de um portão conta os tijolos que você manda para casa e também os da cor dele que você elimina.",
          "Doze tipos de tabuleiro, vila após vila. Em alguns, os tijolos caem e chegam novos; em outros, nada cai e o tabuleiro vai se abrindo enquanto você joga. Tijolos longos, grandes, em L e em T deslizam como uma peça só e só saem por um portão tão largo quanto eles. Caixas, gelo, cadeados, musgo, estátuas, canteiros lacrados, portões congelados e portões com contador atrapalham o caminho, e os portões agora ocupam toda a borda do tabuleiro.",
          "Aprenda jogando. Cada ideia nova ganha um cartão curto na primeira vez que você a encontra, e um solucionador encontra uma sequência vencedora para cada tabuleiro antes do lançamento.",
          "Deslize com o VoiceOver. Cada tijolo que pode se mover oferece seus deslizes como ações, como “Deslizar para a direita 1 casa”, “Deslizar para cima até o fim, 3 casas” ou “Deslizar para a esquerda e sair pelo portão: vermelho”. O VoiceOver diz onde o tijolo parou e o que voltou para casa, e as dicas também mostram deslizes, não só trocas.",
          "A Comunidade OutBrick. Comunidade e Relatar um bug, novos em Ajustes, abrem nossa comunidade no site (em inglês): peça ajuda, relate um bug ou vote em ideias. Relatar um bug já preenche o seu aparelho, a versão do sistema, a versão do app, o seu nível e se o VoiceOver, o Controle Assistivo ou o Texto Maior estão ativados, para você ir direto ao que aconteceu.",
          "Ajustes em Liquid Glass. Os interruptores e as opções em Ajustes agora são de Liquid Glass, no verde e no vermelho do OutBrick.",
          "Mais fácil de acompanhar. Explosões e tijolos caindo ficaram um pouco mais lentos, para você ver o que aconteceu, e o tabuleiro aceita sua próxima jogada assim que para."
        ]
      }
    ]
  }
};

/** 5.1.1's notes, word for word from the App Store's What's New. */
const notes511: Record<ReleaseLocale, ReleaseNotes> = {
  "en": {
    "headline": "OutBrick 5.1.1 fixes a board that could seem frozen.",
    "sections": [
      {
        "title": "In this update",
        "bullets": [
          "When extra moves arrived while a tip card was on screen, the card could vanish while still blocking the board. VoiceOver found only the card, and your next swipe was spent putting it away. The tip card now stays until you're done with it, and the board takes your next move straight away."
        ]
      }
    ]
  },
  "fr": {
    "headline": "OutBrick 5.1.1 corrige un plateau qui pouvait sembler figé.",
    "sections": [
      {
        "title": "Dans cette mise à jour",
        "bullets": [
          "Quand des coups supplémentaires arrivaient pendant qu'une carte d'astuce était affichée, la carte pouvait disparaître tout en bloquant encore le plateau. VoiceOver ne trouvait que la carte, et votre glissement suivant servait à la ranger. La carte d'astuce reste désormais affichée jusqu'à ce que vous en ayez fini, et le plateau accepte aussitôt votre coup suivant."
        ]
      }
    ]
  },
  "de": {
    "headline": "OutBrick 5.1.1 behebt ein Spielfeld, das eingefroren wirken konnte.",
    "sections": [
      {
        "title": "In diesem Update",
        "bullets": [
          "Kamen Extrazüge, während eine Tippkarte angezeigt wurde, konnte die Karte verschwinden und das Spielfeld trotzdem weiter blockieren. VoiceOver fand nur die Karte, und dein nächstes Wischen wurde zum Wegräumen verbraucht. Die Tippkarte bleibt jetzt, bis du mit ihr fertig bist, und das Spielfeld nimmt deinen nächsten Zug sofort an."
        ]
      }
    ]
  },
  "es": {
    "headline": "OutBrick 5.1.1 corrige un tablero que podía parecer congelado.",
    "sections": [
      {
        "title": "En esta actualización",
        "bullets": [
          "Si llegaban movimientos extra mientras se mostraba una tarjeta de consejo, la tarjeta podía desaparecer y seguir bloqueando el tablero. VoiceOver solo encontraba la tarjeta, y tu siguiente deslizamiento se usaba para cerrarla. Ahora la tarjeta de consejo se queda hasta que termines con ella, y el tablero acepta tu siguiente movimiento al instante."
        ]
      }
    ]
  },
  "ja": {
    "headline": "OutBrick 5.1.1では、盤面が止まったように見えることがある問題を修正しました。",
    "sections": [
      {
        "title": "このアップデート",
        "bullets": [
          "ヒントカードの表示中に追加の手数が届くと、カードが見えなくなったまま盤面をふさぐことがありました。VoiceOverではカードしか見つからず、次のスワイプはカードを閉じるのに使われていました。ヒントカードは閉じるまで表示されたままになり、盤面はすぐに次の手を受け付けます。"
        ]
      }
    ]
  },
  "pt-BR": {
    "headline": "O OutBrick 5.1.1 corrige um tabuleiro que podia parecer travado.",
    "sections": [
      {
        "title": "Nesta atualização",
        "bullets": [
          "Quando jogadas extras chegavam com um cartão de dica na tela, o cartão podia sumir e continuar bloqueando o tabuleiro. O VoiceOver encontrava só o cartão, e o seu próximo deslize era gasto para fechá-lo. Agora o cartão de dica fica até você terminar com ele, e o tabuleiro aceita a sua próxima jogada na hora."
        ]
      }
    ]
  }
};

/** Every release with notes on this site, newest first. English. */
export const releases: Release[] = [
  { version: '5.1.1', date: '2026-10-08', ...notes511.en },
  { version: '5.1', date: '2026-10-08', ...notes51.en },
  { version: '5.0.1', date: '2026-10-06', ...notes501.en },
  { version: '4.2', date: '2026-09-22', ...notes42.en },
];

/** The current release. */
export const currentRelease: Release = releases[0];

/** The current release's notes in `locale`, with the same version and date. */
export function currentReleaseIn(locale: ReleaseLocale): Release {
  return { version: currentRelease.version, date: currentRelease.date, ...notes511[locale] };
}

/**
 * Where the public history starts. OutBrick first went on sale on 6 September 2026 (the App
 * Store's `releaseDate`) as version 1.0. The notes of the updates between 1.0 and 4.2 were not
 * kept in a form that can be quoted here honestly, so the page says so rather than rewriting them.
 */
export const firstRelease = { version: '1.0', date: '2026-09-06' };

/** Published notes including stable anchors for older translated links. */
export function releasesIn(locale: ReleaseLocale): Release[] {
  return [
    currentReleaseIn(locale),
    { version: '5.1', date: '2026-10-08', ...notes51[locale] },
    { version: '5.0.1', date: '2026-10-06', ...notes501[locale] },
    { version: '4.2', date: '2026-09-22', ...notes42[locale] },
  ];
}
