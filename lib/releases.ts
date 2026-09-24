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
export type ReleaseLocale = 'en' | 'fr' | 'de' | 'es' | 'ja';

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
};

/** Every release with notes on this site, newest first. English. */
export const releases: Release[] = [{ version: '4.2', date: '2026-09-22', ...notes42.en }];

/** The current release. */
export const currentRelease: Release = releases[0];

/** The current release's notes in `locale`, with the same version and date. */
export function currentReleaseIn(locale: ReleaseLocale): Release {
  return { version: currentRelease.version, date: currentRelease.date, ...notes42[locale] };
}

/**
 * Where the public history starts. OutBrick first went on sale on 6 September 2026 (the App
 * Store's `releaseDate`) as version 1.0. The notes of the updates between 1.0 and 4.2 were not
 * kept in a form that can be quoted here honestly, so the page says so rather than rewriting them.
 */
export const firstRelease = { version: '1.0', date: '2026-09-06' };
