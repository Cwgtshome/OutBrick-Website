/**
 * The five cornerstone guides in German. Duzen, as on the German home page;
 * game terms as in lib/i18n/home.ts (Spielfeld/Feld, Stein, Tor,
 * Zugrücknahme, Vorrat, Seil, Zuglimit, Zugvorgabe, ein Feld lösen). Numbers
 * as German writes them (2.000, 1.333, 49 %). References stay in English,
 * their original language.
 */

import type { LocaleGuides } from '../i18n/blog';

export const de: LocaleGuides = {
  'how-to-solve-sliding-block-puzzles': {
    title: 'Schiebepuzzle lösen: eine praktische Anleitung',
    dek: 'Vom Ausgang rückwärts denken, den Zug finden, der Platz schafft, erst zählen, dann ziehen: die Methode eines Spieldesigners für knifflige Schiebepuzzles.',
    imageAlt: 'Echte OutBrick-Spielfelder auf einer indigoblauen Grundplatte, vorne ein Feld im Farbenblind-Modus mit Symbolen, während gelbe Steine durch ihr Tor hinausgleiten und Bricko zuschaut',
    tags: ['Schiebepuzzle', 'Schiebepuzzle lösen', 'Rätsel lösen Strategie', 'Puzzle-Tipps'],
    intro: 'Ein gutes Schiebepuzzle ist so gebaut, dass es hoffnungslos aussieht. Jedes Feld ist belegt, jeder Block scheint einem anderen im Weg zu stehen, und der Ausgang liegt auf der falschen Seite. Ich baue und teste solche Spielfelder für OutBrick, und fast immer bringen mich dieselben fünf Gewohnheiten ans Ziel, egal um welches Puzzle es geht. Keine davon ist ein Trick. Es sind Arten hinzusehen, die aus einer Wand von Blöcken eine kurze Liste von Fragen machen.',
    keyTakeaways: [
      'Fang beim Ausgang an und arbeite dich rückwärts vor: Die Blöcke zwischen einem Teil und seinem Weg nach draußen sind das eigentliche Problem, und diese Liste ist meist kurz.',
      'Auf einem vollen Feld zählt der Zug, der Platz für zwei oder mehr andere Blöcke schafft. Zähl also die möglichen Züge, bevor du irgendetwas anfasst.',
      'Eine Zugrücknahme ist ein Experiment, das dich nichts kostet. Neu starten solltest du, wenn deine erste Einschätzung des Feldes falsch war, nicht wegen eines einzelnen Zugs.',
    ],
    sections: {
      'work-backwards-from-the-exit': {
        title: 'Beim Ausgang anfangen und rückwärts denken',
        paragraphs: [
          'Auf einem vollen Feld ist der erste Impuls, alles zu bewegen, was sich bewegen lässt. Halt dich zehn Sekunden zurück. Such dir einen Block aus, der hinausmuss, schau dir seinen Ausgang an und stell dir eine einzige Frage: Was liegt zwischen diesem Block und dem Weg nach draußen? Was diese Frage beantwortet, ist dein eigentliches Problem. Dann stellst du dieselbe Frage für jeden dieser Blocker und machst weiter, bis du bei einem Block ankommst, der sich schon bewegen kann.',
          'Am Ende steht eine Kette von Abhängigkeiten, rückwärts vom Ziel aus gelesen: Der Ausgang braucht den gelben Block, der gelbe Block braucht den grünen aus seiner Bahn, der grüne braucht links eine Lücke. Psychologen nennen diese Art zu denken Mittel-Ziel-Analyse, und es gibt gute Belege dafür, dass die Darstellung eines Puzzles beeinflusst, wie schwer es sich anfühlt. Kotovsky, Hayes und Simon legten Versuchspersonen Varianten der Türme von Hanoi vor, die gleich aufgebaut waren, aber andere Oberflächenregeln hatten, und manche Varianten dauerten deutlich länger als andere. Ein großer Teil der Schwierigkeit lag darin, die Regeln und den aktuellen Stand gleichzeitig im Kopf zu behalten. Eine benannte Kette nimmt dir einen Teil dieser Last ab.',
          'Bei OutBrick sind die Ausgänge farbige Tore, und ein Stein verlässt das Feld nur durch das Tor in seiner Farbe. Das gibt dem Rückwärtsdenken eine nützliche Zusatzregel: Ein Tor, das einen Stein nicht durchlässt, ist genauso eine Wand wie der Rahmen. Nimm dir als ersten Stein also die Farbe, vor deren Tor die kürzeste Kette liegt.',
        ],
        bullets: [
          'Such dir einen Block aus, der hinausmuss.',
          'Notier, was zwischen ihm und seinem Ausgang liegt.',
          'Wiederhole das für jeden Blocker, bis du bei einem ankommst, der sich schon bewegen kann.',
          'Spiel die Kette von diesem Ende aus vorwärts.',
        ],
      },
      'find-the-move-that-makes-space': {
        title: 'Den einen Zug finden, der Platz schafft',
        paragraphs: [
          'Ein volles Feld hat viel weniger mögliche Züge, als es aussieht. Bevor du dich festlegst, zähl sie. Auf einem dicht gepackten Feld gibt es oft nur ein paar, und einer davon ist meist der Zug, um den herum das Feld gebaut wurde: der Schub, der eine Lücke öffnet und den Haufen Stück für Stück auseinanderfallen lässt. Leere Felder sind die Währung eines Schiebepuzzles. Der beste Eröffnungszug verschafft den folgenden Zügen Platz und bringt selten für sich allein etwas hinaus.',
          'Wo du einen Block abstellst, ist genauso wichtig wie die Frage, welchen du bewegst. Bei OutBrick fährt ein Stein so weit, wie du ziehst, bis ihn etwas stoppt: eine Wand, ein Nachbar oder ein Tor, das seine Farbe nicht durchlässt. Ein Block, der auf halber Strecke in einer Bahn parkt, stört jetzt vielleicht nicht, steht dir aber in vier Zügen im Weg. Bevor du loslässt, prüf, ob du keine Bahn versperrt hast, die du später noch brauchst.',
          'Es gibt einen mathematischen Grund, warum sich diese Puzzles gegen Abkürzungen sträuben. Hearn und Demaine haben bewiesen, dass verallgemeinerte Schiebepuzzles PSPACE-vollständig sind. Einfach gesagt: Kein bekanntes Verfahren löst jedes große Feld effizient. Menschen kommen mit Faustregeln wie denen in diesem Ratgeber durch. Es heißt aber auch, dass ein gutes Puzzle so gebaut sein muss, dass es einen Weg hinein gibt. OutBrick prüft das gründlich: Ein Solver hat alle 2.000 Felder gelöst, bevor auch nur eines erschienen ist. Wenn du feststeckst, liegt der Knoten also in der Stellung, die du selbst gebaut hast, nicht im Feld.',
        ],
      },
      'count-before-you-commit': {
        title: 'Erst Züge zählen, dann ziehen',
        paragraphs: [
          'Plane in kurzen Ketten. Das Arbeitsgedächtnis fasst nur eine Handvoll Dinge gleichzeitig (Cowans Überblick über die Forschung kommt auf etwa vier Einheiten). Wer zehn Züge vorausdenken will, sieht deshalb meist vier klar und rät den Rest. Fass Züge stattdessen zu Absichten zusammen: „Die linke Spalte freimachen“ ist eine Einheit, auch wenn es drei Schübe braucht. Plane zwei oder drei solcher Einheiten, spiel sie und schau dann noch einmal hin.',
          'Hat dein Puzzle ein Zuglimit, zahlt sich das hier aus. Bei OutBrick gibt es nirgends eine Uhr; das Seil auf jedem Feld ist ein Zuglimit, und Ziel und Limit stehen ab dem ersten Tippen da. Das verändert, was knapp ist. Züge kosten dich etwas, Nachdenken kostet nichts: Lass dir also Zeit und geh sparsam mit Zügen um. Geh vor jedem Schub kurz diese Fragen durch.',
        ],
        bullets: [
          'Was macht dieser Zug möglich?',
          'Was versperrt er, jetzt oder in zwei Zügen?',
          'Erledigt ein längerer Schub die Arbeit von zwei kurzen?',
          'Bringt er mich auf der Kette weiter, die ich vom Ausgang aus gebaut habe?',
        ],
      },
      'use-undo-as-a-thinking-tool': {
        title: 'Die Zugrücknahme als Denkwerkzeug nutzen',
        paragraphs: [
          'Eine Zugrücknahme ist am nützlichsten als Experiment. Wenn zwei Züge gleich gut aussehen, spiel einen davon, schau, was er öffnet, und nimm ihn zurück. Du hast etwas über das Feld gelernt, das dir kein noch so langes Anstarren gezeigt hätte, und es hat dich eine Zugrücknahme gekostet. Wer die Zugrücknahme als Eingeständnis des Scheiterns sieht, starrt meist länger und lernt weniger.',
          'OutBrick ist um diese Idee herum gebaut. Die erste Zugrücknahme auf jedem Feld ist gratis und geht nie aus. Darüber hinaus kommen Zugrücknahmen aus einem Vorrat von fünf, der sich alle fünfundzwanzig Minuten um eine auffüllt, und wenn ein Feld festsitzt, ist auch die angebotene Zugrücknahme gratis und zählt nicht zum Vorrat. Setz die kostenlose also früh und gezielt ein, bei dem Zug, bei dem du dir am wenigsten sicher bist, statt sie für den Notfall aufzuheben.',
          'Einen Haken solltest du kennen. Den dritten Stern auf einem OutBrick-Feld gibt es nur, wenn du innerhalb der Zugvorgabe des Solvers ohne eine einzige Zugrücknahme fertig wirst. Geht es dir nur darum, das Feld zu lösen, probier nach Herzenslust aus. Willst du drei Sterne, probier erst im Kopf.',
        ],
      },
      'know-when-to-reset': {
        title: 'Wissen, wann ein Neustart fällig ist',
        paragraphs: [
          'Eine Zugrücknahme korrigiert einen Zug. Ein Neustart korrigiert einen Plan. Woran du merkst, dass du Letzteres brauchst, ist leicht zu erkennen, wenn du die Zeichen kennst: Du hast denselben Zug dreimal zurückgenommen, du schiebst einen Block hin und her, du kannst nicht sagen, wozu deine nächsten beiden Einheiten gut sind, oder der Bereich, den du brauchst, ist von Steinen versperrt, die du selbst dort abgestellt hast. Dann führen dich weitere Zugrücknahmen nur einen Weg zurück, der nie funktioniert hätte.',
          'Sei ehrlich zu dir, was ein Neustart in dem Spiel kostet, das du gerade spielst. Bei OutBrick brauchst du ein Leben, um ein Feld zu öffnen, verbrauchst aber keins; ein Feld zu lösen kostet nichts, und ein Leben geht nur verloren, wenn ein Versuch ohne Lösung endet. Alle dreißig Minuten kommt ein Leben zurück. Das ist ein guter Grund, Zugrücknahmen für kleine Korrekturen zu nutzen und einen neuen Versuch für den Fall aufzuheben, dass deine ganze Einschätzung des Feldes falsch war.',
          'Und manchmal ist der beste Neustart, das Handy wegzulegen. Ein Feld, das am Ende eines langen Tages wie eine Wand aussah, öffnet sich am nächsten Morgen oft in den ersten dreißig Sekunden. Auf einem OutBrick-Feld läuft keine Zeit, es wartet also auf dich. Für Gewohnheiten, die speziell beim Sortieren nach Farben helfen, gibt es einen Begleitartikel mit [Tipps für Farbsortier-Puzzles](/de/blog/colour-sort-puzzle-tips). Und wenn du die Methode erst üben willst: In der [Spielanleitung](/de/play) findest du ein Feld, das du im Browser ausprobieren kannst, von leicht bis richtig knifflig.',
        ],
      },
    },
    pullQuote: 'Eine Zugrücknahme korrigiert einen Zug. Ein Neustart korrigiert einen Plan.',
    faqs: [
      { question: 'Was ist der Trick beim Lösen von Schiebepuzzles?', answer: 'Den einen Trick gibt es nicht, aber eine Gewohnheit erledigt den größten Teil der Arbeit: beim Ausgang anfangen und rückwärts denken. Notier, was das Teil blockiert, das du bewegen musst, dann, was diese Blocker blockiert, bis du bei einem Teil ankommst, das sich schon bewegen kann. Dann such den Zug, der am meisten Platz schafft.' },
      { question: 'Sind alle Schiebepuzzles lösbar?', answer: 'Nein. Manche Anordnungen klassischer Schiebepuzzles haben überhaupt keine Lösung; beim 15er-Puzzle etwa ist die Hälfte aller möglichen Startstellungen unlösbar. Gestaltete Puzzles sollten vor der Veröffentlichung geprüft werden. Jedes der 2.000 Spielfelder von OutBrick wurde von einem Solver gelöst, bevor es erschienen ist.' },
      { question: 'Wie viele Züge sollte ich vorausplanen?', answer: 'Zwei oder drei kleine Ziele von je ein paar Zügen reichen den meisten Menschen. Das Arbeitsgedächtnis fasst nur eine Handvoll Dinge gleichzeitig. Plane also in Einheiten wie „die linke Bahn freimachen“, spiel sie und schau dir das Feld dann noch einmal an.' },
      { question: 'Ist die Zugrücknahme Schummeln?', answer: 'Nein. Die Zugrücknahme ist eine der besten Möglichkeiten, zu lernen, wie sich ein Feld verhält. Bei OutBrick ist die erste Zugrücknahme auf jedem Feld gratis. Sie wirkt sich nur auf den dritten Stern aus, für den du innerhalb der Zugvorgabe ohne Zugrücknahme fertig werden musst.' },
    ],
  },

  'colour-sort-puzzle-tips': {
    title: 'Farben sortieren: Tipps für Sortierpuzzles mit weniger Zügen',
    dek: 'Wie du ein Farbsortier-Puzzle liest, die richtige Farbe zuerst hinausbringst und die Zugvorgabe schlägst, samt Sterne-Regeln. Vom Entwickler von OutBrick.',
    imageAlt: 'Reihen von Noppensteinen in Rot, Gelb, Türkis, Violett, Blau und Grün auf cremefarbenem Grund, dazu ein echtes OutBrick-Spielfeld und eine Abschlusskarte mit drei Sternen',
    tags: ['Farbsortier-Puzzle', 'Color Sort Tipps', 'Block Sort Strategie', 'Zugvorgabe'],
    intro: 'Farbsortier-Puzzles gibt es in mehreren Familien: Flüssigkeiten, die von Röhrchen zu Röhrchen gegossen werden, Stapel, die auf Stäbe sortiert werden, und Blöcke, die durch Tore in ihrer eigenen Farbe hinausgeschoben werden. OutBrick gehört zur letzten Sorte, und diese Tipps sind darauf zugeschnitten, aber die Grundfähigkeit gilt für die ganze Familie. Du liest ab, welche Farbe bereit ist zu gehen, welche verschüttet ist und welche still und leise allen im Weg steht. Mit weniger Zügen auszukommen heißt vor allem, das vor deinem ersten Zug zu tun statt nach deinem zehnten.',
    keyTakeaways: [
      'Lies das ganze Feld vor dem ersten Zug: Welche Farben haben freie Bahn zum Ausgang, welche Steine blockieren mehr als eine Farbe, und wo ist der freie Platz?',
      'Bring die Farbe hinaus, deren Abgang am meisten freimacht, nicht die, die am leichtesten zu erreichen ist.',
      'Bei OutBrick gibt es einen Stern für ein gelöstes Feld, zwei, wenn du innerhalb der Zugvorgabe des Solvers bleibst, und drei, wenn du das ohne Zugrücknahme schaffst. Die kostenlose Zugrücknahme hält also zwei Sterne in Reichweite, aber nicht drei.',
    ],
    sections: {
      'read-the-board-first': {
        title: 'Das Feld lesen, bevor du ziehst',
        paragraphs: [
          'Die Züge, die du sparst, kommen aus dem Blick, den du vor dem ersten wirfst. Such auf dem Feld nach drei Dingen. Erstens: Welche Farben haben schon freie Bahn zu ihrem Tor? Zweitens: Welche Steine blockieren mehr als eine Farbe? Um diese Steine dreht sich das ganze Feld. Drittens: Wo ist der freie Platz? Jeder Plan, den du machst, muss dort durch.',
          'Dann lies die beiden Zahlen. Jedes OutBrick-Feld zeigt seine Zugvorgabe und sein Zuglimit ab dem ersten Tippen, du kennst das Budget also, bevor du etwas ausgibst. Die Vorgabe ist die Zugzahl, die der Solver selbst für dieses Feld braucht, und damit ein nützlicher Hinweis: Ist sie niedrig, gibt es einen sauberen Weg, und ein Plan, der doppelt so viele Züge braucht, übersieht wahrscheinlich etwas.',
          'Nutz jeden Kanal, den dir das Spiel zum Unterscheiden der Farben gibt. Der Farbenblind-Modus von OutBrick ist standardmäßig an und prägt jedem Stein und jedem Tor ein Symbol auf, sodass Farbton, Form und Noppen die Farbe tragen. Selbst bei voller Farbsicht helfen die Symbole, Nachbarn wie Rot und Pink oder Violett und Blau auf einen Blick auseinanderzuhalten. Richtlinien zur Barrierefreiheit empfehlen das seit Langem: Farbe sollte nie das einzige Mittel sein, eine Information zu zeigen.',
          'Schau dir zum Schluss die Form des Feldes selbst an. Nicht jedes OutBrick-Feld ist ein Rechteck; manche Arenen haben die Form eines H, eines L oder eines Kreuzes. An einer engen Stelle zwischen zwei Hälften einer Arena verkeilen sich Steine. Überleg also früh, welche Steine dort durchmüssen und in welcher Reihenfolge.',
        ],
      },
      'clear-the-colour-that-frees-the-most': {
        title: 'Die Farbe zuerst, die am meisten freimacht',
        paragraphs: [
          'Der verlockende erste Zug ist der Stein, der sofort hinauskann. Manchmal ist das richtig. Oft ist es ein Stein am Rand, dessen Abgang nichts öffnet, während ein Stein in der Mitte, drei Züge von seinem Tor entfernt, das halbe Feld aufhält. Bevor du irgendetwas hinausbringst, frag dich, was jeder Abgang öffnet. Ein großer Stein, der die Mitte verlässt, kann aus einem massiven Block drei brauchbare Bahnen machen.',
          'Achte auch darauf, wo Steine geparkt landen. Ein Stein, der vor einem fremden Tor stehen bleibt, ist eine Wand, bis du ihn noch einmal bewegst, und jedes „noch einmal“ ist ein Zug, den du nicht gebraucht hättest. Wenn du einen Stein aus dem Weg schiebst, schick ihn dorthin, wo er als Nächstes nicht im Weg steht.',
          'Es hilft zu wissen, wie sich die Schwierigkeit eines Feldes verteilt. Die ersten Züge auf einem vollen Feld sind die teuren, weil jedes Feld belegt ist und jeder Schub verändert, was möglich ist. Die letzten sind fast umsonst: Dann ist das Feld größtenteils leer, und die übrigen Steine haben freie Bahn nach Hause. Denk also am Anfang gründlich nach, wo ein unachtsamer Schub drei Züge Reparatur kosten kann, und lass es am Ende locker angehen.',
        ],
        bullets: [
          'Steine, die zwei oder mehr Farben blockieren, kommen zuerst.',
          'Dann Farben, deren Abgang eine Bahn öffnet, die du brauchst.',
          'Leichte, einzelne Abgänge zuletzt, es sei denn, sie schaffen Platz, den du sofort brauchst.',
          'Park nie einen Stein quer in einer Bahn, mit der du noch nicht fertig bist.',
        ],
      },
      'plan-in-chunks': {
        title: 'In Absichten planen, nicht in Einzelzügen',
        paragraphs: [
          'Das Arbeitsgedächtnis ist klein. Cowans viel zitierter Überblick setzt seine Kapazität bei etwa vier Einheiten an, und deshalb klappt es selten, zehn einzelne Züge vorauszuplanen. Plane stattdessen in Absichten: „die Gelben raus“, „die rechte Bahn öffnen“, „den gefrorenen Stein auftauen“. [Vom Ausgang rückwärts zu denken](/de/blog/how-to-solve-sliding-block-puzzles) ist ein guter Weg, sie zu finden. Jede Absicht umfasst zwei bis vier Züge, und zwei oder drei davon kannst du bequem im Kopf behalten.',
          'Zähl vor jeder Absicht, was sie kostet, und vergleich das mit dem, was dir unter der Vorgabe noch bleibt. Kostet sie mehr, als du hast, ist es die falsche Absicht, und das jetzt herauszufinden ist viel billiger als auf halber Strecke. Die meisten verschwendeten Züge bei Farbsortier-Puzzles kommen von denselben paar Gewohnheiten: einen Stein hin und her schieben, ihn zweimal bewegen, wo ein längerer Schub gereicht hätte, und dieselbe Bahn zweimal aufräumen, weil wieder ein Stein darin geparkt wurde.',
          'Eine kleine Routine hilft gegen alle drei. Sag dir vor einer Absicht ihren letzten Zug: Wo steht jeder Stein, wenn sie erledigt ist? Kannst du dir den Endzustand nicht vorstellen, ist die Absicht zu lang, also teil sie auf. Kannst du es, spiel sie durch, ohne mittendrin alles neu zu überdenken, denn aus Zweifeln mitten in einer Absicht entsteht genau das Hin- und Herschieben.',
        ],
      },
      'targets-and-stars': {
        title: 'So funktionieren Zugvorgabe und Sterne bei OutBrick',
        paragraphs: [
          'Die Sterne bei OutBrick sind schnell erklärt. Ein gelöstes Feld bringt einen Stern. Bleibst du dabei innerhalb der Zugvorgabe des Solvers, gibt es zwei. Schaffst du das ohne eine einzige Zugrücknahme, gibt es drei. Das Limit, das das Spiel als Seil zeigt, ist ein Zuglimit und keine Uhr; im ganzen Spiel gibt es keinen Countdown.',
          'Daraus folgt etwas, das oft übersehen wird. Die erste Zugrücknahme auf jedem Feld ist gratis und geht nie aus, zählt aber trotzdem als Zugrücknahme. Sie hält also zwei Sterne in Reichweite, aber nicht drei. Wenn dir drei Sterne wichtig sind, nimm Zugrücknahmen nur als letzten Ausweg und probier im Kopf. Willst du das Feld einfach lösen, nutz sie ruhig: Dafür ist sie da.',
          'Werden die Züge knapp, bekommst du vor allem anderen fünf weitere angeboten, für 300 Münzen, dann 500, dann 900 innerhalb eines Versuchs. Zusätzliche Züge können ein Feld retten. Den zweiten Stern bringen sie nicht zurück, denn wenn du dich dem Limit näherst, hast du die Vorgabe meist schon überschritten. Die bessere Lösung liegt weiter vorn: das Feld am Anfang in Ruhe lesen.',
        ],
      },
      'mistakes-that-cost-moves': {
        title: 'Fünf Gewohnheiten, die heimlich Züge kosten',
        paragraphs: [
          'Die meisten Felder, die über dem Budget gelöst werden, scheitern an einer von wenigen Gewohnheiten. Jede davon ist leicht abzustellen, sobald du dich einmal dabei ertappt hast. In der [Spielanleitung](/de/play) von OutBrick findest du alle hier genannten Spielelemente, falls du den ganzen Satz sehen willst.',
        ],
        bullets: [
          'Die leichte Farbe zuerst hinausbringen und dabei einen Stein genau dort parken, wo die schwere Farbe hinmusste.',
          'Vergessen, dass gefrorene Steine drei Schübe zum Auftauen brauchen. Rechne diese Schübe ins Budget ein, bevor du anfängst.',
          'Schlüssel und Schlösser bis zum Schluss liegen lassen. Sie öffnen Teile des Feldes, also finde früh heraus, welche.',
          'Jedes freie Feld füllen, wenn ein Generator im Spiel ist. Generatoren bringen neue Steine aufs Feld, also lass Platz für das, was kommt.',
          'Förderbänder und Kisten für Kulisse halten. Ein Förderband bewegt, was darauf liegt, und Kisten bestimmen, welche Bahnen offen sind. Plane mit beiden ab dem ersten Zug.',
        ],
      },
    },
    pullQuote: 'Die Züge, die du sparst, kommen aus dem Blick, den du vor dem ersten wirfst.',
    faqs: [
      { question: 'Was ist die beste Strategie für Farbsortier-Puzzles?', answer: 'Lies das ganze Feld, bevor du ziehst: Finde heraus, welche Farben freie Bahn zu ihrem Ausgang haben, welche Teile mehr als eine Farbe blockieren und wo der freie Platz ist. Bring dann die Farbe hinaus, deren Abgang am meisten freimacht, und plane in kurzen Absichten von zwei bis vier Zügen.' },
      { question: 'Wie bekomme ich bei OutBrick drei Sterne?', answer: 'Löse das Feld innerhalb der Zugvorgabe des Solvers, ohne eine Zugrücknahme zu benutzen. Für zwei Sterne musst du innerhalb der Vorgabe bleiben; einen Stern gibt es für jedes gelöste Feld.' },
      { question: 'Kostet mich die kostenlose Zugrücknahme einen Stern?', answer: 'Sie kann den dritten Stern kosten, denn für drei Sterne darfst du gar keine Zugrücknahme nutzen. Zwei Sterne kannst du danach trotzdem noch holen, solange du innerhalb der Zugvorgabe bleibst.' },
      { question: 'Kann ich Farbsortier-Puzzles spielen, wenn ich farbenblind bin?', answer: 'Ja, wenn das Spiel dir mehr als nur Farbe an die Hand gibt. Der Farbenblind-Modus von OutBrick ist standardmäßig an und setzt auf jeden Stein und jedes Tor ein passendes Symbol, sodass die Form beim Sortieren genauso hilft wie der Farbton. Einzelheiten stehen auf der [Seite zur Barrierefreiheit](/accessibility) (auf Englisch).' },
    ],
  },

  'relaxing-puzzle-games-what-makes-one-calm': {
    title: 'Entspannende Puzzlespiele: Was macht ein Spiel ruhig?',
    dek: 'Sanfte Farben reichen nicht. Zuglimit statt Uhr, faire Leben, keine Unterbrechungen: woran du erkennst, ob ein Puzzlespiel wirklich entspannt bleibt.',
    imageAlt: 'Drei Rundbogenfenster in einer indigoblauen Ziegelwand zeigen echte OutBrick-Dörfer, Lavender Hills, Firefly Wetlands und Cherry Blossom Town, mit Flurry und Sprout auf dem Fensterbrett',
    tags: ['entspannende Puzzlespiele', 'Puzzlespiele ohne Timer', 'ruhige Spiele', 'Spieldesign'],
    intro: 'Viele Seiten im App Store nennen ihr Puzzlespiel „entspannend“. Manche Spiele verdienen das Wort. Andere legen Pastellfarben und sanfte Musik über denselben Druck, den man überall bekommt: einen Countdown in der Ecke, ein Lebenssystem, das genau dann leer ist, wenn du in Fahrt kommst, Werbung nach jedem Level. Hier steht, worauf wir achten, wenn wir beurteilen, ob ein Puzzlespiel ruhig ist, und wo OutBrick bei jedem Punkt steht, auch dort, wo es dir etwas abverlangt.',
    keyTakeaways: [
      'Ruhe hängt vor allem am Druck: woher er kommt, ob du ihn kommen siehst und ob du ihn dir selbst ausgesucht hast.',
      'Ein Zuglimit verlangt, dass du keine Züge verschwendest; eine Uhr verlangt, dass du nicht nachdenkst. Nur eins davon passt zu einem entspannenden Spiel.',
      'Leben und Werbung können fair oder unfair sein. Schau, was ein Leben kostet, wie schnell es zurückkommt und ob Werbung läuft, ohne dass du darum gebeten hast.',
    ],
    sections: {
      'where-pressure-comes-from': {
        title: 'Woher der Druck in einem Puzzlespiel kommt',
        paragraphs: [
          'Ein Puzzle soll ein bisschen schwer sein, und auch ein schweres Feld kann erholsam sein. Der Druck, der ein Spiel hektisch macht, kommt meist von außerhalb des Puzzles, und zwar meist aus vier Richtungen: Zeit (ein Countdown, ein schrumpfender Balken), Knappheit (Leben, Energie, Spielmarken), Unterbrechung (Werbung, Pop-up-Angebote, Hinweise zwischen den Levels) und Vergleich (Serien, die reißen, Bestenlisten, die dir vorgehalten werden).',
          'Nichts davon ist von vornherein schlecht. Ein Modus auf Zeit kann großen Spaß machen, wenn du ihn wählst. Der Test für ein ruhiges Spiel ist einfacher: Siehst du jede Einschränkung, bevor du anfängst, und hast du ihr zugestimmt? Ein Feld, das dir seine Regeln vorher nennt und dich dann in Ruhe lässt, fühlt sich ganz anders an als eines, das mittendrin die Bedingungen ändert.',
          'Die letzte der vier Quellen übersieht man am leichtesten. Ein Serienzähler oder eine Bestenliste kann ein nettes Extra sein, wenn du danach suchst. Zum Druck wird es, wenn das Spiel sie dir genau dann vor die Nase setzt, wenn du aufhören wolltest, oder einen verpassten Tag als Verlust darstellt. Achte darauf, wo ein Spiel dir diese Zahlen zeigt und ob es dich sie ignorieren lässt.',
        ],
      },
      'move-limits-vs-clocks': {
        title: 'Warum sich ein Zuglimit anders anfühlt als eine Uhr',
        paragraphs: [
          'Eine Uhr bestraft das Nachdenken. Jede Sekunde, die du mit dem Lesen des Feldes verbringst, geht dir verloren, also belohnt das Spiel Reflexe und Raten. Ein Zuglimit bestraft stattdessen Verschwendung. Du kannst ein Feld so lange ansehen, wie du willst, und nur ein unachtsamer Schub kostet dich etwas. Für ein Puzzlespiel, das erholsam sein will, zählt dieser Unterschied mehr als jede Farbpalette.',
          'Bei OutBrick gibt es nirgends eine Uhr. Das Seil auf jedem Feld ist ein Zuglimit. Jedes Feld zeigt seine Zugvorgabe und sein Limit ab dem ersten Tippen, das Budget ist also bekannt, bevor du etwas davon ausgibst. Wird es knapp, bekommst du fünf weitere Züge angeboten, bevor irgendetwas anderes passiert.',
          'Es gibt auch ein Argument aus der Barrierefreiheit. Die Richtlinien für barrierefreie Webinhalte verlangen, dass sich Zeitlimits abschalten, anpassen oder verlängern lassen, weil manche Menschen mehr Zeit brauchen, um eine Aufgabe zu erledigen. Ein Spiel ohne Uhr hat nichts anzupassen. Und die Forschung zu Zeitdruck weist in dieselbe Richtung: In einer Studie über unterbrochene Büroarbeit fanden Mark, Gudith und Klocke heraus, dass Menschen den Zeitverlust ausglichen, indem sie schneller arbeiteten, und dabei mehr Stress, Frust und Zeitdruck angaben.',
        ],
      },
      'fair-lives': {
        title: 'Leben, Energie und wie fair aussieht',
        paragraphs: [
          'Viele ruhige Spiele haben Leben, unseres auch. Die nützliche Frage ist also, wie sie funktionieren. Ein faires Lebenssystem sagt dir genau, was ein Leben kostet, gibt dir genug davon für eine ordentliche Runde, füllt sie auf, ohne Geld zu verlangen, und nimmt dir nie eines, nur weil du etwas versucht hast.',
          'OutBrick ist ohne Leben und ohne Werbung gestartet, und beides hat sich geändert. Deshalb steht auf der Startseite [genau, was Leben, Zugrücknahmen und Werbung kosten](/de#fair). Um ein Feld zu öffnen, brauchst du ein Leben, verbrauchst aber keins. Ein Feld zu lösen kostet gar nichts. Ein Leben geht nur verloren, wenn ein Versuch ohne Lösung endet. Du hast fünf, mit dem Brick Pass acht, und alle dreißig Minuten kommt eins zurück. Bei Zugrücknahmen ist es genauso: Die erste auf jedem Feld ist gratis und geht nie aus, danach füllt sich ein Vorrat von fünf alle fünfundzwanzig Minuten um eine auf, und die Zugrücknahme, die dir angeboten wird, wenn ein Feld festsitzt, ist gratis und zählt nicht zum Vorrat.',
          'Schau dir auch an, was passiert, wenn alles aufgebraucht ist. In einem fairen System ist das eine Pause mit bekannter Länge. Bei OutBrick kannst du auf das nächste Leben warten oder, wenn du willst, ein Belohnungsvideo für eines ansehen; beide Wege werden dir genannt, lange bevor du sie brauchst. Ein Spiel, das einen leeren Vorrat mit einem Kaufbildschirm und ohne klare Wartezeit begrüßt, nutzt Knappheit als Verkaufsinstrument, und das fühlt sich selten ruhig an.',
        ],
        bullets: [
          'Was genau kostet ein Leben: Anfangen, Scheitern oder Aufgeben?',
          'Wie viele kannst du haben, und wie lange dauert es, bis eins zurückkommt?',
          'Kannst du in der Zwischenzeit etwas anderes spielen?',
          'Wird das Auffüllen jemals als Anlass genutzt, dir ein Angebot zu zeigen?',
        ],
      },
      interruptions: {
        title: 'Unterbrechungen sind der wahre Feind der Ruhe',
        paragraphs: [
          'Am schnellsten ruiniert man ein entspannendes Spiel, indem man es unterbricht. Eine Vollbildwerbung nach jedem dritten Level bringt dir bei, dich zu wappnen, bevor du auf „Weiter“ tippst. Ein Pop-up-Angebot genau in dem Moment, in dem du scheiterst, macht aus einer kleinen Enttäuschung ein Verkaufsgespräch. Beides hat nichts mit dem Puzzle zu tun, und genau hier verlieren viele Puzzlespiele die Ruhe, mit der sie werben.',
          'So macht es OutBrick. Es gibt sechs Stellen für Belohnungsvideos: ein Leben, fünf weitere Züge, zwei Zugrücknahmen, ein Booster, der schon vor dem ersten Zug bereitsteht, die Münzen der Abschlusskarte noch einmal und ein zweiter Dreh am Brick Wheel. Jede ist freiwillig und hat ihr eigenes Tageslimit. Es gibt keine Banner und keine Interstitials, nichts läuft, wofür du nicht selbst auf einen Knopf gedrückt hast, und nichts unterbricht ein Feld. „Werbung entfernen“ schaltet die Werbung für immer ab.',
          'Warum das wichtig ist, ist zum Teil unsere Meinung und zum Teil die Studienlage. Studien zu Casual Games haben nach einer anstrengenden Aufgabe kurzfristig positive Effekte auf die Stimmung gefunden, und eine stellte nach einem Casual Game weniger Stress fest, auch wenn eine Achtsamkeitsübung beim selbst angegebenen Stress besser abschnitt. Diese Effekte setzen voraus, dass man eine Weile ungestört spielen kann. Werbung alle paar Minuten schützt das denkbar schlecht.',
        ],
      },
      'calm-checklist': {
        title: 'Eine kurze Checkliste für ruhige Puzzlespiele',
        paragraphs: [
          'Bevor du dich für ein Puzzlespiel zum Abschalten entscheidest, prüf es fünf Minuten lang anhand der Liste unten. Die meisten Spiele erfüllen manche Punkte und andere nicht, und das ist in Ordnung. (Darüber, [wann spielen und wann pausieren](/blog/when-to-play-and-when-to-pause), haben wir separat geschrieben, auf Englisch.) Wichtig ist, dass du weißt, welche es sind, bevor es elf Uhr abends ist und ein Countdown aufgetaucht ist.',
          'Ruhe hat auch eine sinnliche Seite, die Store-Seiten selten erwähnen. Bildschirme voller blinkender Belohnungen und wackelnder Knöpfe ermüden, auch wenn nichts auf Zeit läuft. OutBrick beachtet die Systemeinstellung „Bewegung reduzieren“ überall, und seine neun Freunde aus Steinen sprechen in Sprechblasen statt mit Stimmen. So kann ein Feld spät am Abend ein leises sein.',
        ],
        bullets: [
          'Kein Countdown in normalen Levels, oder ein Zeitmodus, den du ignorieren kannst.',
          'Regeln und Limits jedes Levels sind vor deinem ersten Zug sichtbar.',
          'Was Scheitern kostet, wird klar gesagt und ist gering.',
          'Keine Werbung läuft, ohne dass du auf einen Knopf drückst, um sie zu sehen.',
          'Zwischen zwei Levels aufzuhören kostet nichts.',
          'Das Spiel läuft offline, ein schwaches Netz bremst also nie ein Level aus.',
          'Einstellungen zur Barrierefreiheit wie Hilfe bei Farbenblindheit und „Bewegung reduzieren“ sind vorhanden und werden beachtet.',
        ],
      },
    },
    pullQuote: 'Eine Uhr bestraft das Nachdenken. Ein Zuglimit bestraft Verschwendung.',
    faqs: [
      { question: 'Was macht ein Puzzlespiel entspannend?', answer: 'Vor allem, dass Druck von außerhalb des Puzzles fehlt: kein Countdown, klare Limits, die vor dem Start zu sehen sind, ein kleiner und klar genannter Preis fürs Scheitern und nichts, was das Spiel ohne dein Einverständnis unterbricht. Auch ein schweres Puzzle kann entspannend sein, wenn es dich in Ruhe nachdenken lässt.' },
      { question: 'Gibt es Puzzlespiele ohne Timer?', answer: 'Ja. Viele Puzzlespiele arbeiten mit einem Zuglimit oder ganz ohne Limit. Bei OutBrick gibt es nirgends eine Uhr; jedes Feld hat ein Zuglimit, dargestellt als Seil, neben seiner Zugvorgabe.' },
      { question: 'Hat OutBrick Leben und Werbung?', answer: 'Ja. Du hast fünf Leben, mit dem Brick Pass acht, und alle dreißig Minuten kommt eins zurück; ein Leben geht nur verloren, wenn ein Versuch ohne Lösung endet. Werbung besteht aus Belohnungsvideos, die du selbst auswählst, jedes mit einem Tageslimit, und es gibt weder Banner noch Interstitials.' },
      { question: 'Ist ein Zuglimit stressig?', answer: 'Meist weniger als eine Uhr, denn Nachdenken ist gratis, und nur unachtsame Züge kosten dich etwas. Bei OutBrick bekommst du außerdem fünf weitere Züge angeboten, wenn es knapp wird, bevor irgendetwas anderes passiert.' },
    ],
  },

  'offline-puzzle-games-iphone': {
    title: 'Offline-Puzzlespiele fürs iPhone: für Bahn und Flugzeug',
    dek: 'Worauf es bei einem Puzzlespiel für U-Bahn, Zug oder Flug ankommt: echtes Offline-Spiel, Bedienung mit einer Hand, kurze Felder, wenig Akkuverbrauch.',
    imageAlt: 'Ein Zugwaggon aus Bausteinen, in dessen Fenstern echte OutBrick-Dörfer und -Spielfelder zu sehen sind, mit Bloo und Zippy auf dem Dach',
    tags: ['Offline-Spiele iPhone', 'Puzzlespiele ohne Internet', 'Spiele für den Flug', 'Spiele zum Pendeln'],
    intro: 'Der schlechteste Moment, um herauszufinden, dass ein Spiel eine Verbindung braucht, ist im Tunnel oder in zehn Kilometern Höhe mit abgeschaltetem WLAN. „Offline spielbar“ kann auf einer Store-Seite Verschiedenes bedeuten, und ein gutes Reisespiel muss ohnehin mehr können: mit einer Hand funktionieren, zwischen zwei Haltestellen passen und deinen Akku nicht vor der Landung leer saugen. Das ist die Checkliste, die wir benutzen. Wir machen OutBrick, deshalb nehmen wir es als Beispiel, und wir haben uns bemüht, bei Dingen zu bleiben, die du selbst prüfen kannst.',
    keyTakeaways: [
      'Teste das Offline-Spiel vor der Reise zu Hause im Flugmodus, auch einen Kaltstart und die nächsten paar Levels.',
      'Beim Pendeln zählen Bedienung mit einer Hand und kurze, abgeschlossene Levels genauso viel wie Offline-Unterstützung.',
      'Der Akkuverbrauch hängt vor allem vom Bildschirm und vom Spiel selbst ab. Dreh auf langen Reisen also die Helligkeit herunter und nutze den Stromsparmodus.',
    ],
    sections: {
      'test-offline-first': {
        title: 'Offline-Spiel vor der Reise testen',
        paragraphs: [
          '„Offline“ auf einer Store-Seite deckt eine ganze Bandbreite ab. Manche Spiele funktionieren komplett ohne Verbindung. Manche lassen dich spielen, halten aber Belohnungen, Tagesinhalte oder das Speichern zurück, bis du wieder online bist. Manche laden den ersten Bildschirm aus dem Speicher und hängen dann beim zweiten. Welche Sorte es ist, verrät die Seite nicht, also teste es.',
          'Der Test dauert fünf Minuten. Schalte zu Hause den Flugmodus ein, beende das Spiel vollständig und öffne es neu. Spiel drei Levels, geh dann zurück ins Menü und starte das übernächste Level. Achte auf alles, was ausgegraut ist, auf jedes Ladesymbol, das sich endlos dreht, und darauf, ob du nach einem gelösten Feld weiterkommst. Wenn das alles klappt, klappt es auch im Flugzeug.',
          'Erledige noch etwas, solange du im WLAN bist: Öffne den App Store und installiere alle ausstehenden Updates für die Spiele, die du spielen willst. Ein Spiel, das beim Start ein Update verlangt, nützt im Tunnel nichts, und ein großer Download über ein wackeliges Mobilnetz am Gate ist ein schlechter Start in die Reise.',
          'OutBrick ist offline spielbar. Wenn du auf mehreren Geräten spielst, liegt dein Spielstand in deiner iCloud, und ein neues Gerät, das mit demselben Account angemeldet ist, macht dort weiter, wo das alte aufgehört hat: Level, Münzen, Serie und Sammlung.',
        ],
        bullets: [
          'Flugmodus an, Spiel vollständig beendet und neu geöffnet.',
          'Drei Levels gespielt, dann das übernächste Level aus dem Menü gestartet.',
          'Nichts ausgegraut, keine endlosen Ladesymbole, und nach einem gelösten Feld geht es weiter.',
        ],
      },
      'one-handed-play': {
        title: 'Eine Hand, ein Daumen',
        paragraphs: [
          'In einem vollen Zug hältst du mit der anderen Hand oft eine Stange, einen Kaffee oder eine Tasche. Steven Hoobers Feldstudie dazu, wie Menschen ihr Handy tatsächlich halten, beruht auf 1.333 Beobachtungen auf der Straße, an Flughäfen, in Cafés und in öffentlichen Verkehrsmitteln. Er fand, dass 49 % eine Hand benutzten, 36 % das Handy in einer Hand hielten und mit der anderen tippten und 15 % beide Hände nutzten. Ein Reisespiel muss für die erste Gruppe funktionieren.',
          'Hoober stellte außerdem fest, dass Menschen, die eine Hand benutzen, das Handy in ganz unterschiedlichen Positionen halten. Ein Spiel kann also nicht von einem einzigen Griff ausgehen. Auf den größeren Handys, die heute die meisten haben, sind die oberen Ecken des Bildschirms mit dem Daumen der haltenden Hand schwer zu erreichen. Dafür musst du das Handy in der Hand verschieben, und genau das willst du in einem fahrenden Zug mit einem Kaffee in der anderen Hand nicht.',
          'Achte auf Gesten statt kleiner Knöpfe, ein Hochformat-Layout und darauf, dass du mitten im Level nichts in den oberen Ecken erreichen musst. OutBrick spielst du mit einem Finger: Du ziehst einen Stein, und er fährt, bis ihn etwas stoppt. Wenn du es brauchst, ist jeder Stein außerdem ein VoiceOver-Element mit einer Aktion für jede Richtung, in die er rutschen kann, und „Größerer Text“ skaliert überall mit.',
        ],
      },
      'sessions-between-stops': {
        title: 'Levels, die zwischen zwei Haltestellen passen',
        paragraphs: [
          'Unterwegs spielt man in Stücken, ein Thema, dem wir in [unserem Text über das Zwei-Minuten-Puzzle für Pendler](/blog/commuter-puzzle-two-minute) (auf Englisch) nachgegangen sind. Die richtige Einheit ist ein Level, das du zwischen zwei Stationen schaffst, mit einem klaren Ende, damit sich das Weglegen des Handys wie Aufhören anfühlt und nicht wie Abbrechen. Lange Levels und verkettete Aufgaben arbeiten dagegen.',
          'Timer noch mehr, und das ist ein Grund, warum [ruhige Puzzlespiele](/de/blog/relaxing-puzzle-games-what-makes-one-calm) meist auf sie verzichten. Wenn eine Durchsage oder eine Fahrkartenkontrolle deine Aufmerksamkeit beansprucht, läuft eine Uhr in der Ecke weiter. Die Forschung zu unterbrochener Arbeit legt nahe, dass Menschen auf Unterbrechungen mit Tempo reagieren und dafür mit Stress bezahlen. Ein Spiel ohne Uhr legt da nichts drauf. OutBrick hat nirgends einen Countdown, ein Feld dauert etwa zwei Minuten, und es zu lösen kostet nichts. Ein Leben geht nur verloren, wenn ein Versuch ohne Lösung endet, und alle dreißig Minuten kommt eins zurück.',
          'Es hilft auch, wenn sich die größere Struktur in kleine Stücke teilt. Auf der [Reise](/de#journey) von OutBrick hat jedes Dorf zwölf Levels, und „dieses Dorf noch vor meiner Haltestelle schaffen“ ist ein Ziel, das du tatsächlich erreichen kannst.',
          'Der letzte Test wird am leichtesten übersehen: Kannst du das Spiel weglegen? Ein gutes Pendlerspiel bringt dich oft an einen natürlichen Haltepunkt und empfängt dich bei der Rückkehr nicht mit einem Stapel zeitlich begrenzter Angebote. Deine Haltestelle soll die Runde beenden, und das Spiel soll etwas sein, das du wieder in die Hand nimmst, wenn dir danach ist.',
        ],
      },
      'battery-and-attention': {
        title: 'Akku, Ton und Aufmerksamkeit',
        paragraphs: [
          'Offline zu gehen fällt als ein Stromfresser weg, aber Bildschirm und Spiel verbrauchen weiter Energie. Auf einer langen Reise sind der Helligkeitsregler und der Stromsparmodus die beiden nützlichsten Schalter; laut Apple reduziert der Stromsparmodus Hintergrundaktivitäten, damit der Akku länger hält. Bietet ein Spiel reduzierte Bewegung oder eine niedrigere Bildrate an, ist ein langer Flug eine gute Gelegenheit, sie zu nutzen. OutBrick beachtet die Systemeinstellung „Bewegung reduzieren“ überall.',
          'Der Ton ist das Zweite, was du prüfen solltest. Ein Spiel, das auf Audiosignale angewiesen ist, ist in einem ruhigen Waggon ohne Kopfhörer unpraktisch. Die neun Freunde aus Steinen in OutBrick sprechen in Sprechblasen und haben keine Stimmen, also geht bei ausgeschaltetem Ton nichts von dem verloren, was sie sagen. Und weil der Farbenblind-Modus standardmäßig an ist, trägt jeder Stein und jedes Tor neben der Farbe ein Symbol. Das kann helfen, wenn das Licht im Waggon schwach ist oder die Farben verblassen lässt.',
        ],
      },
      'beyond-the-phone': {
        title: 'Mehr als das Handy',
        paragraphs: [
          'Auf einem langen Flug schont ein größerer Bildschirm Augen und Nacken. Läuft ein Spiel auf dem iPad genauso wie auf dem iPhone und teilt es den Spielstand zwischen beiden, können das Tablet auf dem Klapptisch und das Handy in der Schlange an der Passkontrolle dasselbe Spiel sein. OutBrick läuft auf iPhone, iPad, Mac, Apple TV und Apple Vision Pro, und es gibt ein eigenständiges Spiel für die Apple Watch, wenn das Handy im Gepäckfach liegt.',
          'Geh vor deiner nächsten Reise einmal die Liste unten durch. Das dauert zu Hause ein paar Minuten und erspart dir später eine frustrierende Stunde.',
        ],
        bullets: [
          'Im Flugmodus nach einem Kaltstart getestet.',
          'Mit einem Daumen im Hochformat spielbar.',
          'Levels, kurz genug für die Strecke zwischen zwei Haltestellen.',
          'Keine Uhr, die weiterläuft, während du wegschaust.',
          'Ohne Ton spielbar.',
          'Helligkeit runter, Stromsparmodus an auf langen Reisen.',
        ],
      },
    },
    pullQuote: 'Der schlechteste Moment, um herauszufinden, dass ein Spiel eine Verbindung braucht, ist im Tunnel.',
    faqs: [
      { question: 'Welche Puzzlespiele funktionieren offline auf dem iPhone?', answer: 'Viele, aber „offline“ kann das ganze Spiel oder nur einen Teil davon bedeuten. Sicher weißt du es nur, wenn du es testest: Flugmodus einschalten, Spiel beenden, neu öffnen und ein paar Levels spielen. OutBrick ist offline spielbar.' },
      { question: 'Funktioniert OutBrick im Flugmodus?', answer: 'Ja. OutBrick ist offline spielbar, du kannst Felder also ganz ohne Verbindung spielen. Dein Spielstand liegt in deiner iCloud, und ein neues Gerät, das mit demselben Account angemeldet ist, macht dort weiter, wo du aufgehört hast.' },
      { question: 'Verbrauchen Offline-Spiele weniger Akku?', answer: 'Ohne Netz fällt ein Stromfresser weg, aber Bildschirm und Spiel verbrauchen weiter Energie. Dreh auf langen Reisen die Helligkeit herunter und schalte den Stromsparmodus ein, der Hintergrundaktivitäten reduziert.' },
      { question: 'Kann ich OutBrick auf der Apple Watch spielen?', answer: 'Ja. Es gibt ein eigenständiges Spiel für die Apple Watch, dazu Versionen für iPhone, iPad, Mac, Apple TV und Apple Vision Pro.' },
    ],
  },

  'why-two-minute-puzzles-feel-good': {
    title: 'Warum ein Zwei-Minuten-Puzzle so gut tut',
    dek: 'Kompetenz, Aufmerksamkeit und kleine Erfolgserlebnisse: was die Forschung darüber sagt, warum man zu einer kurzen Runde OutBrick gern zurückkehrt.',
    imageAlt: 'Ein glänzendes Puzzle-Spielfeld, auf dem ein letzter Stein in ein passendes Tor gleitet',
    tags: ['Puzzlespiele', 'Wohlbefinden', 'Motivation', 'Casual Games'],
    intro: 'Nicht jede Spielrunde muss eine Odyssee sein. Manchmal ist die beste Form des Spielens ein kleiner, abgeschlossener Kreislauf: ein Muster bemerken, eine Entscheidung treffen, sehen, wie das Feld reagiert, und mit dem Gefühl gehen, dass etwas eingerastet ist.',
    keyTakeaways: [
      'Eine kurze Runde kann befriedigend sein, wenn du klare Ziele, sichtbare Rückmeldung und echten Entscheidungsspielraum hast.',
      'Die Forschung stützt bescheidene, kurzfristige Effekte von Casual Games auf Stimmung und Engagement, keine großen Versprechen über Intelligenz oder Therapie.',
      'OutBrick ist um einen kleinen, abgeschlossenen Kreislauf gebaut: ein Feld, eine Entscheidung nach der anderen und auf jedem Feld eine kostenlose Zugrücknahme, die auf dich wartet.',
    ],
    sections: {
      'the-feeling-of-a-clean-clear': {
        title: 'Das Gefühl, ein Feld sauber zu lösen',
        paragraphs: [
          'Ein befriedigendes Puzzle muss dich nicht mit Inhalten überschütten. Es muss den Zusammenhang zwischen deiner Entscheidung und dem Ergebnis spürbar machen. Schieb einen Stein, lies die Lücke ab und sieh zu, wie das Tor antwortet. Dieser kleine Austausch ist das emotionale Herz von OutBrick.',
          'Das Motivationsmodell von Przybylski, Rigby und Ryan beschreibt die Bindung an Spiele über drei Grundbedürfnisse: Kompetenz, Autonomie und soziale Eingebundenheit. Ein kleines Puzzle berührt die ersten beiden sofort. Du verstehst eine Regel und beweist dir dann selbst etwas, indem du sie anwendest. Die Freude kommt ebenso daraus, der Urheber der Lösung zu sein, wie aus dem Gewinnen.',
        ],
      },
      'what-short-play-can-and-cannot-do': {
        title: 'Was kurzes Spielen kann und was nicht',
        paragraphs: [
          'Eine kontrollierte Studie zu Casual Games fand nach einer geistig anstrengenden Aufgabe eine stärkere kurzfristige emotionale Erholung und mehr Engagement, während die Belege für eine breitere kognitive Erholung weniger eindeutig waren. Dieser Unterschied ist wichtig. Ein Spiel kann dir helfen, dich bereiter zum Weitermachen zu fühlen, ohne zum magischen Gehirn-Upgrade zu werden.',
          'Eine andere Studie verglich ein Casual Game mit einer Body-Scan-Achtsamkeitsübung und fand in beiden Gruppen weniger psychischen und körperlichen Stress. Beim selbst angegebenen psychischen Stress schnitt die Achtsamkeit besser ab, Spiele ersetzen also keine anderen Übungen. Ein Spiel in der richtigen Größe kann eine bescheidene Option unter vielen in einem Tag sein.',
        ],
      },
      'the-outbrick-loop': {
        title: 'Der Kreislauf von OutBrick ist bewusst klein',
        paragraphs: [
          'OutBrick beginnt mit einem Feld, das man auf einen Blick versteht. Es gibt kein Questlog, das du dir merken musst, und keine Uhr, die du schlagen musst; die beiden Zahlen, auf die es ankommt, Zugvorgabe und Zuglimit, stehen ab dem ersten Tippen neben deinem Zugzähler. Den Rest zeigt dir das Feld: die Steine, die offenen Bahnen und die passenden Tore.',
          'Die Zugrücknahme gehört zum Kreislauf dazu, statt eine Strafe für ihre Nutzung zu sein. Deshalb ist die erste Zugrücknahme auf jedem Feld gratis und geht nie aus. Das verändert die emotionale Temperatur beim Ausprobieren. Du kannst einen Zug versuchen, aus dem Ergebnis lernen und den nützlichen Teil des Versuchs behalten. Die Felder sollen trotzdem Widerstand leisten. Was sich ändert: Etwas zu versuchen kostet weniger als zu zögern. Auf der Startseite steht [genau, was Leben, Zugrücknahmen und Werbung kosten](/de#fair).',
        ],
        bullets: [
          'Ein gut lesbares Feld nach dem anderen',
          'Ein klarer Zusammenhang zwischen Aktion und Rückmeldung',
          'Hilfen, die Fehler auffangen und die Neugier erhalten',
          'Ein Ziel, das kommt, bevor sich die Runde schwer anfühlt',
        ],
      },
      'take-the-good-bit-with-you': {
        title: 'Nimm das Gute mit',
        paragraphs: [
          'Eine gute Zwei-Minuten-Runde gibt dir ein kleines Gefühl von Fortschritt und lässt dich dann entscheiden, wie es weitergeht. Wenn du Zeit für ein weiteres Feld hast, gibt es immer ein weiteres Feld. Wenn du losmusst, kann das Spiel warten.',
          'Deshalb behandelt OutBrick Ruhe als Designvorgabe. Die Forschung sagt nicht, dass alle Spieler gleich davon profitieren, und sie beweist keinen allgemeingültigen Effekt. Sie zeigt aber in eine nützliche Richtung: ein Spiel bauen, das Autonomie respektiert, Fortschritt lesbar macht und dir mehr Wahlmöglichkeiten lässt, als du vorher hattest. Denselben Faden verfolgen wir in [Designing a game for the life players actually have](/blog/designing-for-real-life-play) (auf Englisch).',
        ],
      },
    },
    pullQuote: 'Etwas zu versuchen kostet weniger als zu zögern.',
    faqs: [
      { question: 'Soll OutBrick die psychische Gesundheit verbessern?', answer: 'Nein. OutBrick ist ein Puzzle zur Unterhaltung. Forschung zu Casual Games kann in das Design einfließen, macht das Spiel aber nicht zu einer Behandlung und garantiert keine Wirkung auf das Wohlbefinden.' },
      { question: 'Warum sind Runden bei OutBrick so kurz?', answer: 'Kurze Runden machen das Puzzle lesbar und lassen das Spiel in den Alltag passen. Du kannst weiterspielen, aber das Spiel verlangt keinen langen, ununterbrochenen Zeitblock.' },
    ],
  },
};
