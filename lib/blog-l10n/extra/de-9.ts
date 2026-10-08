import type { ExtraGuides } from '../../i18n/blog';
import { appStoreUrl } from '../../app-store-url.ts';
export const de9: ExtraGuides = {
  'water-sort-vs-block-sort': {
    title: 'Wasser oder Blöcke sortieren: Welches Puzzle passt?',
    dek: 'Vergleiche freie Kapazität bei Wassersortierpuzzles mit Wegen in Schiebepuzzles: konkrete Beispiele, praktische Auswahl und klare Forschungsgrenzen.',
    imageAlt:
      'Bunte OutBrick-Steine und Steinfiguren auf einem marineblauen Puzzleraster',
    tags: [
      'Block-Sortierpuzzles',
      'Puzzlespiele',
      'Spieldesign',
      'Spielgewohnheiten',
    ],
    intro:
      'Ein fast sortiertes Röhrchen kann trotzdem der falsche Ort zum Eingießen sein. Ein Stein neben seinem passenden Ausgang kann trotzdem falsch stehen, um hinauszukommen. Wasser- und Blocksortieren lassen Farbzuordnung einfach aussehen, während die interessante Entscheidung in der Zugreihenfolge steckt. Aber die verwaltete Ressource unterscheidet sich: Platz in Behältern beim einen, Wege und Haltepunkte beim anderen. Dieser Ratgeber vergleicht diese Entscheidungen, statt einen Sieger zu erklären. Für Wasser nutzen wir die veröffentlichten Regeln von Water Sort Puzzle von IEC Global, für gleitende Blöcke die Gleiten-bis-zum-Stopp-Regel der klassischen OutBrick-Felder, die seine Browser-Felder beibehalten. Andere Spiele mit diesen Bezeichnungen können anders funktionieren. Wir entwickeln OutBrick; unsere Beispiele bringen diese Perspektive mit, keine Behauptung unabhängiger Tests.',
    keyTakeaways: [
      'Wassersortierpuzzles fragen, wohin Flüssigkeit nach den Regeln fließen darf; gleitendes Blocksortieren fragt, welche Wege und Haltepositionen du schaffen kannst.',
      'Ein leeres Röhrchen und ein leeres Feld helfen auf unterschiedliche Weise. Schütze den Raum für deinen nächsten Schritt, statt jede mögliche Farbzuordnung sofort auszuführen.',
      'Wähle nach den Entscheidungen, die dir Freude machen, und einer bequem nutzbaren Oberfläche. Die Forschung belegt nicht, dass einer der beiden Puzzlestile deine geistigen Fähigkeiten verbessert.',
    ],
    sections: {
      'different-things-to-move': {
        title: 'Kläre zuerst, was ein Zug tatsächlich bedeutet',
        paragraphs: [
          'Die Beschreibung von Water Sort Puzzle von IEC Global sagt, dass du ein Glas antippst, um in ein anderes zu gießen; passende Farbe und ausreichend Platz im Ziel sind nötig. Ziel ist, jede Farbe in einem eigenen Glas zu sammeln. Diese Regeln besprechen wir hier, statt etwas über jede Wassersortier-App zu versprechen. Der Eintrag beschreibt auch Level-Neustart und Spielen ohne Zeitlimit. Das ist ein nützlicher Ausgangspunkt, klärt aber nicht jeden Sonderfall, etwa die genaue Flüssigkeitsmenge pro Antippen (IEC Global Pty Ltd, n.d.).',
          'Auf den klassischen OutBrick-Feldern bewegst du den Stein direkt. Er gleitet, bis etwas ihn stoppt, und verlässt das Feld durch ein Tor seiner Farbe. Du ziehst ihn nicht auf irgendein frei gewähltes Feld. Ein freier Gang kann ihn weiter tragen als beabsichtigt; ein anderer Stein kann den benötigten Stopp liefern. (Das Spiel im App Store spielt sich inzwischen als Slide & Match: Ein Stein hält dort, wo du loslässt, und lässt sich zu Reihen tauschen.) Unser [Ratgeber zu Schiebepuzzles](/blog/how-to-solve-sliding-block-puzzles) erklärt diesen Unterschied in einem breiteren Lösungsansatz.',
          'Beides sind Farbsortierpuzzles, aber diese Bezeichnung beschreibt das Ziel statt des ganzen Wegs. Gießen verändert, welche Schichten oben in einem Behälter erreichbar sind. Schieben verändert die Hindernisanordnung auf einem gemeinsamen Feld. Bevor du ein Spiel verwirrend nennst, versuche seine Bewegungsregel laut zu formulieren. Eine richtige Vorhersage ist ein besserer erster Meilenstein als ein schneller Abschluss.',
          'Andere Varianten können andere Bewegungsregeln, Beschränkungen oder Behälter nutzen. Beginne mit dem Tutorial des Spiels, bevor du Rat aus einem ähnlich aussehenden Puzzle überträgst.',
        ],
      },
      'capacity-example': {
        title: 'Wassersortieren: Freie Kapazität gehört zur Lösung',
        paragraphs: [
          'Hier ist eine Beispielanordnung für eine verbreitete Variante, die Eingießen in ein leeres Röhrchen erlaubt. Röhrchen A hat oben Blau und darunter verborgenes Rot. Röhrchen B hat ebenfalls Blau oben, ist aber voll. Röhrchen C ist leer. A kann nicht allein wegen gleicher oberster Farben in B gießen: B braucht Platz. Blau von A nach C zu bewegen kann Rot freilegen und anderswo eine neue Möglichkeit schaffen. Das Beispiel erklärt eine Abhängigkeit; es ist keine versprochene Anordnung in der IEC-Global-App.',
          'Die Versuchung ist, jedes leere Röhrchen sofort als Ablage zu nutzen. Frage stattdessen, welche verborgene Farbe du freilegen möchtest und wohin die obere Schicht dafür muss. Ein freier Behälter ist wertvoll, weil er eine Zwischenanordnung erlaubt. Füllst du ihn mit einer unbeteiligten Schicht, verbrauchst du vielleicht das einzige brauchbare Ziel für den vorbereiteten Zug.',
          'Ändere nun das Beispiel: B hat Platz für Blau, sodass A nach der genannten Farbregel direkt dorthin gießen kann. C bleibt für eine spätere Umordnung verfügbar. Der sichtbare Zug ist einfacher, die Frage bleibt aber: Was wird danach erreichbar? Unsere [Farbsortierpuzzle-Tipps](/blog/colour-sort-puzzle-tips) entwickeln die Gewohnheit weiter, über die offensichtlichste Zuordnung hinauszudenken.',
          'Ito et al. (2023) formalisierten Kugel- und Wassersortierpuzzles, zeigten in ihrem Modell gleichwertige Lösbarkeit und bewiesen die NP-Vollständigkeit der verallgemeinerten Probleme. Das Ergebnis betrifft bestimmte stapelbasierte Regeln, nicht jede kommerzielle Variante. Es erklärt, warum einfache Gießregeln anspruchsvolle Planung erlauben, ohne die Schwierigkeit des Beispielfelds oder dieselbe Komplexität für OutBrick zu beweisen. Die praktische Frage bleibt, ob du gern Zugang zu verborgenen Farben und freie Kapazität verwaltest.',
        ],
      },
      'route-example': {
        title: 'Blocksortieren: Ein Hindernis kann eine nützliche Bremse sein',
        paragraphs: [
          'Stell dir vor, ein roter Stein muss sich auf ein rotes Tor am rechten Rand ausrichten. Das Gleiten nach oben in einer leeren Spalte trägt ihn über die Reihe hinaus, in der er abbiegen soll. Ein blauer Stein über dieser Reihe könnte ihn auf der richtigen Höhe stoppen. Die unmittelbare Aufgabe ist deshalb, Blau zu positionieren, obwohl Rot näher an einem Ausgang wirkt. Das ist ein Beispiel auf den klassischen OutBrick-Feldern, keine Lösung eines nummerierten Felds.',
          'Nach der Ausrichtung von Rot kann eine zweite Abhängigkeit auftauchen: Auch Blau braucht vielleicht denselben Gang zu seinem Tor. Entfernst du Rot zu früh, verschwindet möglicherweise ein Stopp, den Blau noch benötigt. Anders als beim freien Röhrchen ist die Ressource hier ein Ort und seine Beziehung zu einem Weg. Mehr leerer Raum bedeutet nicht automatisch eine bessere Stellung. Manchmal wird die Anordnung gerade dadurch nützlich, dass das richtige Feld besetzt ist.',
          'Kirsh und Maglio (1994) untersuchten Tetris und unterschieden Handlungen zum Zielfortschritt von Handlungen, die schwer gedanklich ermittelbare Informationen sichtbar machen. Sie testeten weder OutBrick noch Wassersortier-Apps. Wir übernehmen die Unterscheidung zum Lesen eines Versuchs: Ein Zug kann zeigen, wo ein Stein stoppt, auch wenn er den Weg nicht verbessert. „Er stoppte eine Reihe zu hoch“ ist eine nutzbare Beobachtung statt eines Urteils über deine Fähigkeit.',
          'Probiere ein Feld auf unserer [Browser-Spielseite](/play) und sage vor der Bewegung voraus, wo ein Stein stoppt. Vergleiche anschließend Vorhersage und Ergebnis. Möchtest du die Anordnung bewusster lesen, zeigt der [Ratgeber vor dem ersten Zug](/blog/how-to-read-a-puzzle-before-moving), wie du zuerst Ausgänge und Abhängigkeiten erkennst. Dieser Test betrifft dein Interesse an räumlichen Wegen, nicht die Geschwindigkeit, mit der du ein unbekanntes Spiel meisterst.',
        ],
      },
      'compare-the-experience': {
        title: 'Vergleiche die Erfahrung über das Spielfeld hinaus',
        paragraphs: [
          'Eine bevorzugte Mechanik kann durch schwer lesbare Teile geschwächt werden. Kannst du bei Flüssigkeitspuzzles aus deinem normalen Abstand obere Schichten unterscheiden und Restkapazität beurteilen? Erkennst du bei Blockpuzzles den gewünschten Stein, sein passendes Tor und das Hindernis, das ihn stoppt? Nutze das tatsächliche Handy, auf dem du spielen möchtest, statt vergrößerte Werbebilder zu beurteilen.',
          'Larkin und Simon (1987) verglichen bildliche und sprachliche Darstellungen anhand von Modellen und Beispielproblemen aus Mathematik und Physik. Ihre Analyse zeigte, warum Ort und ausdrückliche Gruppierung den Aufwand zur Informationssuche verändern können, selbst bei gleichwertiger Information. Das war kein Test von Spielbildern. Unsere Anwendung ist zu prüfen, was ein Feld leicht sichtbar macht: obere Farbe und Kapazität im Röhrchen oder die Beziehung zwischen Stein, Hindernis und Tor.',
          'Ebenso beschreibt Spielen ohne Zeitlimit das Tempo, nicht das ganze Geschäftsmodell. OutBricks aktuelle Version hat Zuglimits und Ziele sowie Leben und freiwillige Belohnungswerbung. Das erste Rückgängigmachen auf jedem App-Spielfeld ist kostenlos. Unsere [Erklärung zum fairen Spielen](/#fair) beschreibt die Kosten. IEC Globals Eintrag beschreibt einen kostenlosen Download mit In-App-Käufen; das allein bestimmt nicht Häufigkeit oder Form jeder Werbeplatzierung. Dieser Ratgeber vergleicht Preise oder Unterbrechungen nicht anhand praktischer Tests.',
          'Kotovsky et al. (1985) untersuchten, warum Varianten des Turm-von-Hanoi-Problems unterschiedlich schwierig waren, darunter Regeln, Darstellung und Gedächtnisanforderungen. Das waren andere Aufgaben als beide Apps hier. Der relevante Vorbehalt: Ein gemeinsames abstraktes Ziel macht zwei Darstellungen nicht gleich leicht verständlich. Wirkt ein Puzzle klarer, untersuche die konkreten Entscheidungen und Hinweise, die dich unterstützen, statt sein gesamtes Genre überlegen zu nennen. Weder diese noch die anderen Studien belegen einen medizinischen oder geistigen Vorteil durch diese Apps.',
        ],
      },
      'choose-with-a-small-test': {
        title: 'Triff deine Wahl mit einem kleinen, fairen Test',
        paragraphs: [
          'Gib jedem Stil die Gelegenheit, seine Grundregel zu vermitteln, und stelle drei konkrete Fragen. Kann ich einen gewöhnlichen Zug vorhersagen? Macht mir die Frage nach einem gescheiterten Versuch Freude? Würde ich freiwillig noch ein Feld probieren? So trennst du anfängliche Unvertrautheit von dauerhaft fehlender Eignung. Das erste schwierige Level wird dadurch nicht zum pauschalen Urteil über das Genre.',
          'Beobachte beim Wassersortieren, ob du gern Farben freilegst und Platz im Ziel erhältst. Beobachte beim Blocksortieren, ob du gern Wege und vorübergehende Bremsen anordnest. Vielleicht bevorzugst du klarere sichtbare Stapel im Röhrchen, die greifbare Bewegung der Steine oder schlicht die angenehmere Steuerung. Es genügt, das Problem zu wählen, über das du nachdenken möchtest.',
          'Vergleiche beide Stile unter ähnlichen Umständen und ohne Wettlauf gegen die Zeit. Einige bewusst beobachtete Züge verraten mehr über Eignung als das Durchkämpfen durch ein Spiel, das du schon nicht magst.',
          `Klingt das Schiebebeispiel einladend, beginne mit [OutBricks Browser-Spielfeldern](/play). Für die breitere App-Erfahrung [findest du OutBrick im App Store](${appStoreUrl('journal-water-sort')}); prüfe danach im aktuellen Eintrag Geräteanforderungen und Kaufdetails. Bevorzugst du Gießen, nutze den benannten Eintrag unten, um die richtige App zu bestimmen. Das nützliche Ergebnis ist ein Puzzle, zu dem du zurückkehren möchtest, einschließlich der völlig vernünftigen Wahl, beide zu mögen.`,
          'Produktquelle: IEC Global Pty Ltd. (n.d.). Water Sort Puzzle [Mobile app]. App Store. Abgerufen am 30. September 2026 unter [Water Sort Puzzle im App Store](https://apps.apple.com/gb/app/water-sort-puzzle/id1514542157). Der Regelvergleich nutzt diese Entwicklerbeschreibung; die Planungsbeispiele sind unsere eigenen Veranschaulichungen.',
        ],
      },
    },
    pullQuote:
      'Mehr leerer Raum bedeutet nicht automatisch eine bessere Stellung.',
    faqs: [
      {
        question: 'Was unterscheidet Wasser- und Blocksortieren vor allem?',
        answer:
          'Wassersortierpuzzles ordnen farbige Flüssigkeit zwischen Behältern nach Kapazitäts- und Farbregeln. Das klassische Blocksortieren von OutBrick bewegt Steine über ein gemeinsames Feld zu passenden Toren, wobei jede Bewegung bis zu einem Hindernis weitergeht; das Spiel im App Store ergänzt inzwischen Tauschen und Reihen.',
      },
      {
        question: 'Ist ein leeres Röhrchen dasselbe wie ein freies Feld?',
        answer:
          'Beide ermöglichen spätere Züge, dienen aber verschiedenen Zwecken. Ein leeres Röhrchen nimmt Flüssigkeit auf; ein freies Feld bestimmt einen Weg mit, während ein besetztes Feld einen nützlichen Stopp liefern kann.',
      },
      {
        question: 'Welcher Puzzlestil ist besser fürs Gehirn?',
        answer:
          'Die zitierte Forschung belegt keine geistige Überlegenheit eines der beiden Stile. Wähle nach Mechanik, Lesbarkeit, Tempo und Kosten, die zu deinen Vorlieben passen.',
      },
      {
        question: 'Kann ich OutBrick vor dem Download ausprobieren?',
        answer:
          'Die [OutBrick-Spielseite](/play) bietet eine kleine Auswahl an Browser-Feldern. Sie zeigt die klassische Schieberegel, repräsentiert aber nicht die vollständige App und verspricht keinen gemeinsamen App-Fortschritt.',
      },
    ],
  },
  'block-puzzles-online-no-download': {
    title: 'Blockpuzzles online spielen, ohne App-Download',
    dek: 'Probiere OutBricks Browser-Felder ohne Installation. Erfahre mehr über Steuerung, Tagesrotation, Sterne und Unterschiede zum vollständigen Spiel.',
    imageAlt:
      'Bunte OutBrick-Steine und Steinfiguren auf einem marineblauen Puzzleraster',
    tags: [
      'Puzzlespiele',
      'Block-Sortierpuzzles',
      'Tagespuzzles',
      'Barrierefreiheit',
      'Spieldesign',
    ],
    intro:
      'Du möchtest ein paar Blöcke bewegen, nicht gleich noch eine App herunterladen. Ein Browser-Puzzle beantwortet eine nützliche erste Frage: Macht mir diese Art Problem Spaß? OutBrick bietet spielbare Felder auf seiner Website neben dem gesonderten App-Store-Spiel. Du kannst die Schieberegel direkt erkunden, statt Store-Bilder als Ersatz fürs Spielen zu behandeln. Dieser Ratgeber erklärt Einstieg, Web-Steuerung, Bedeutung des Tagesfelds und Grenzen der Browser-Erfahrung. Er behandelt unsere eigene Website, geprüft am 30. September 2026, und bewertet nicht alle Puzzleangebote ohne Download. Die kleine Web-Version ist für sich ein nützlicher Einstieg; sie bildet nicht die vollständige App nach.',
    keyTakeaways: [
      'Öffne /play für einen kurzen Einstieg oder /daily für das nach Datum gewählte gemeinsame Feld; beides benötigt keine App-Installation.',
      'Das Tagesfeld wechselt um Mitternacht UTC in einer festen Rotation. Es ist nicht jeden Tag ein neu erzeugtes Puzzle.',
      'Browser-Sterne, Steuerung und Neustarts helfen dir, die Regel zu erkunden. Gehe nicht davon aus, dass Browser-Fortschritt gespeichert oder mit der App synchronisiert wird.',
    ],
    sections: {
      'where-to-start': {
        title: 'Beginne mit dem Browser-Feld für deinen Zweck',
        paragraphs: [
          'Öffne für den ersten Kontakt die [OutBrick-Spielanleitung](/play). Sie enthält eine spielbare Tour mit drei Feldern, beginnt sanft und ergänzt Anordnungen, in denen die Stoppregel wichtig wird. Du wählst keinen Schwierigkeitsgrad für die gesamte App. Du prüfst, ob das Bewegen von Steinen zu passenden Toren verständlich wirkt und einen weiteren Versuch wert ist.',
          'Die Grundregel ist einfach zu sagen: Schiebe einen Stein, lass ihn gleiten, bis etwas ihn stoppt, und schicke ihn durch das Tor seiner Farbe hinaus. Die Planung entsteht dadurch, wie Teile einander behindern oder helfen. Rot mit Rot zu verbinden ist nur ein Teil der Aufgabe. Vielleicht musst du einen anderen Stein umstellen, damit Rot in der richtigen Reihe stoppt, bevor es zum Ausgang abbiegt.',
          'Kennst du die Regel bereits, nutze das [Tagesfeld](/daily) für eine gemeinsame Anordnung. Alle, die die Seite am selben UTC-Datum ansehen, erhalten dasselbe gewählte Feld. Damit habt ihr ein konkretes Puzzle zum Besprechen, statt zu fragen, ob ihr zufällig ein ähnliches Level geöffnet habt. Ihr müsst daraus keinen Geschwindigkeitswettbewerb machen.',
          'Andersen et al. (2012) untersuchten Tutorial-Designs in drei Spielen mit mehr als 45.000 Spielenden. Die Wirkung unterschied sich je nach Spiel und Komplexität; nicht jede Unterrichtsform half immer. Sie testeten diese Website nicht. Für deinen Versuch zählt, ob das Einführungsfeld die Bewegungsregel klar genug macht, um sie zu beurteilen. Die ganze Tour ist freiwillig; zu entscheiden, dass eine andere Mechanik besser passt, ist ebenfalls ein erfolgreicher Test.',
        ],
      },
      'controls-and-feedback': {
        title: 'Nutze die Steuerung, um eine Vorhersage zu prüfen',
        paragraphs: [
          'Ziehe auf einem Touchscreen oder mit einem Zeiger einen Stein in die gewünschte Richtung. Das Ziehen setzt die Richtung; es verspricht nicht, das Teil dort zu stoppen, wo dein Finger endet. Mit der Tastatur erreichst du einen Stein per Tabulator und bewegst ihn dann mit Umschalt plus Pfeiltaste. Beobachte seinen tatsächlichen Haltepunkt, bevor du die nächste Richtung entscheidest.',
          'Beginne mit einer prüfbaren Vorhersage: „Gelb sollte neben diesem blauen Stein stoppen.“ Führe den Zug aus und vergleiche das Ergebnis. Ist er blockiert, untersuche das Feld, statt dieselbe Eingabe zu wiederholen. Das Hindernis kann ein Nachbarstein, der Rand oder ein Tor mit falscher Farbe sein. Ein abgelehnter und ein unerwarteter Zug sind unterschiedliche Beobachtungen.',
          'Cao und Liu (2022) untersuchten Tutorials in Spielen und führten eine Pilotstudie zu implizitem Tutorial-Design durch. Ihre Arbeit betrachtet Anleitung als etwas, das von der Begegnung mit einem Spiel geprägt wird, statt zu beweisen, dass eine unerklärte Oberfläche besser ist. Sie bewerteten unsere Browser-Steuerung nicht. Hier hilft ein bewusster erster Zug, die Bedeutung der Anleitung zu prüfen. Kannst du das gewünschte Teil nicht bequem wählen, kläre zuerst das Eingabeproblem, bevor du den Versuch als Beleg für ein zu schwieriges Puzzle nutzt.',
          'Das Feld kombiniert Farben mit Zeichen auf Steinen und Toren und liefert so Zuordnungshinweise über den Farbton hinaus. Beurteile trotzdem Lesbarkeit in deiner üblichen Bildschirmgröße und Entfernung. Ist es schwer nutzbar, geben unsere [Barrierefreiheitsinformationen](/accessibility) Produktkontext; über [Support](/support) kannst du die Schwierigkeit schildern. Nenne Browser, Gerät und versuchte Handlung. Ein genauer Bericht lässt sich leichter untersuchen als „Das Spiel funktioniert nicht“.',
        ],
      },
      'moves-undo-and-restart': {
        title: 'Das Zugziel als Einladung zum erneuten Versuch lesen',
        paragraphs: [
          'Das Web-Feld zählt Züge und bietet Rückgängig- und Zurücksetzen-Funktionen. Sein Ziel ist eine Wertungsgrenze, kein Countdown. Ein Abschluss bringt einen Stern; innerhalb des Zugziels sind es zwei; innerhalb des Zugziels und ohne Rückgängigmachen drei. Über das Ziel hinauszugehen verhindert den Abschluss im Browser nicht. Rückgängigmachen verändert die Sterne, also unterscheide das Erkunden einer Lösung vom sauberen Abschluss.',
          'Ein vernünftiges erstes Ziel ist einfach, das Spielfeld zu leeren. Verstehst du den Weg, setze zurück und frage, ob ein früher Umweg nötig war. Das trennt Entdeckung von Verfeinerung. So wird das Drei-Sterne-Ergebnis nicht zum Anlass, ein Feld aufzugeben, dessen grundlegende Abhängigkeiten du noch nicht verstehst. Keine Uhr verlangt, dass aus Erkennen sofort Handeln wird.',
          'Kirsh und Maglio (1994) unterschieden bei Tetris Züge zum Aufgabenfortschritt von Zügen zur Informationsgewinnung. Die Studie belegt keinen gemessenen Nutzen dieses Browser-Spiels. Ihre Unterscheidung gibt dem ersten Versuch einen sinnvollen Zweck: Zu testen, wo ein Stein stoppt, kann die Anordnung erklären, bevor du einen vollständigen Weg kennst. Durch Zurücksetzen probierst du anschließend den Plan aus, den du bei dieser Erkundung verstanden hast.',
          'Unser [Ratgeber zum Lesen eines Puzzles vor dem ersten Zug](/blog/how-to-read-a-puzzle-before-moving) hilft, solche Abhängigkeiten zu erkennen. Suchst du wegen fehlendem Zeitdruck, erklärt der [Ratgeber zu Puzzles ohne Zeitlimit](/blog/no-timer-block-sort-puzzles-iphone) den Unterschied zwischen zeitlich unbegrenztem und uneingeschränktem Spiel. Aus dem nachsichtigen Web-Neustart solltest du nicht auf Leben, Rückgängig-Kosten oder Zuglimits der vollständigen App schließen.',
        ],
      },
      'what-daily-means': {
        title: 'Was „täglich“ auf dieser Website bedeutet',
        paragraphs: [
          'Die Tagesseite wählt aus einem festen Bestand an Website-Feldern. Sie schreitet nach dem UTC-Datum fort und durchläuft den Bestand in Reihenfolge; das Tutorial-Feld ist ausgeschlossen. Zum Schreibzeitpunkt umfasst der Bestand sechzehn Felder. Nach dem Ende beginnt die Rotation erneut. „Täglich“ bedeutet daher ein nach Datum gewähltes gemeinsames Puzzle, keine jeden Morgen frisch erzeugte Anordnung und kein versprochenes unbegrenzt wachsendes Archiv.',
          'Mitternacht UTC kann bei dir Nachmittag oder Abend sein. Zwei Personen auf verschiedenen lokalen Kalendertagen können dasselbe UTC-Datum haben, während Personen am selben lokalen Datum nahe der Grenze unterschiedliche Felder sehen. Nutze beim Besprechen einer Lösung das auf der Seite gezeigte Datum und die Feldnummer. Lokale Mitternacht ist nicht die Wechselregel.',
          'Nach dem Abschluss bietet die Teilen-Funktion einen Ergebnislink mit deinen Sternen. Ein geteiltes Ergebnis teilt nicht deine vollständige Zugfolge. Soll dein Freund selbstständig Freude am Lösen haben, sende zuerst das Ergebnis und warte, bevor du den Anfang beschreibst. Ein gemeinsames Feld lädt zum Vergleich von Ansätzen ein; es ist keine eingebaute gleichzeitige Mehrspielersitzung.',
          'Larkin und Simon (1987) analysierten, wie Diagramme Informationen nach Ort ordnen, und verglichen sie anhand von Modellen und Beispielproblemen mit fortlaufendem Text. Sie untersuchten keine Tagespuzzles. Praktisch kannst du die gemeinsame Anordnung als Bezug nutzen: Zeige auf Tor oder Hindernis, bevor du einen Zug beschreibst. Die Feldnummer klärt, welches Puzzle gemeint ist; die sichtbare Anordnung hilft zu klären, welche Entscheidung darin gemeint ist.',
        ],
      },
      'web-and-app-boundaries': {
        title: 'Die Grenzen zwischen Browser-Versuch und App kennen',
        paragraphs: [
          'Ohne Download bedeutet, dass du die OutBrick-App für diese Web-Felder nicht installierst. Die Seite muss weiterhin über deinen Browser laden. Setze weder die Offline-Fähigkeit der App noch das Überleben eines unfertigen Versuchs nach Schließen oder Neuladen voraus. Das spielbare Feld bietet weder gespeicherten Fortschritt noch eine kontobasierte Verbindung zu deiner App-Reise.',
          'Das zählt, wenn du auf einem Laptop beginnst und danach das Spiel auf dem Handy installierst. Ein Browser-Abschluss schaltet kein entsprechendes App-Kapitel frei, überträgt keine Sterne in den App-Fortschritt und belegt keine identischen Felder in beiden Erfahrungen. Die Website ist ein kleiner Einstieg mit eigenem Feldbestand und eigener Wertung. Das App-Store-Spiel ist ein separates Produkt mit umfassenderem Fortschrittssystem.',
          'Die App hat auch ein Geschäftsmodell: Leben, freiwillige Käufe und freiwillige Belohnungswerbung. Lies die [Details zum fairen Spielen](/#fair) und den aktuellen Store-Eintrag, bevor du entscheidest, was „kostenlos“ für deine Nutzung bedeutet. Neustarts und Rückgängigmachen im Browser ersetzen diese Angaben nicht. Nutze ebenso den aktuellen Eintrag für Geräteanforderungen, statt aus erfolgreichem Browser-Spiel native App-Kompatibilität abzuleiten.',
          `Macht der Versuch neugierig, [findest du OutBrick im App Store](${appStoreUrl('journal-no-download')}). Möchtest du nur ein Browser-Feld, nutze weiter [die Tagesseite](/daily). Beide Entscheidungen können aus demselben nützlichen Test folgen: Du weißt nun, was ein gleitender Stein tut, ob die Steuerung angenehm ist und ob dich Wegeplanung interessiert. Ein kleines spielbares Beispiel erfüllt seinen Zweck, wenn es bei dieser Entscheidung hilft.`,
        ],
      },
    },
    pullQuote:
      'Ein vernünftiges erstes Ziel ist einfach, das Spielfeld zu leeren.',
    faqs: [
      {
        question:
          'Kann ich ein OutBrick-Blockpuzzle ohne App-Download spielen?',
        answer:
          'Ja. Die [Spielanleitung](/play) enthält eine kurze Browser-Tour; [die Tagesseite](/daily) bietet das für das aktuelle UTC-Datum gewählte Feld.',
      },
      {
        question: 'Wird das Tagespuzzle jeden Tag neu erzeugt?',
        answer:
          'Nein. OutBricks Website rotiert nach UTC-Datum durch einen festen Feldbestand ohne Tutorial. Eine frühere Anordnung kann daher erneut erscheinen.',
      },
      {
        question: 'Synchronisiert Browser-Fortschritt mit der OutBrick-App?',
        answer:
          'Die Browser-Felder speichern keinen Fortschritt und synchronisieren ihn nicht mit der App. Betrachte sie als separaten Einstieg statt als Fortsetzung deiner App-Reise.',
      },
      {
        question: 'Wie bewege ich einen Stein mit der Tastatur?',
        answer:
          'Erreiche einen Stein per Tabulator und drücke Umschalt plus eine Pfeiltaste in die gewünschte Richtung. Der Stein bewegt sich bis zu einem Hindernis statt auf ein beliebiges gewähltes Feld.',
      },
    ],
  },
  'solve-puzzles-together': {
    title: 'Gemeinsam puzzeln, ohne den Bildschirm zu übernehmen',
    dek: 'Ein Puzzle teilen und den nächsten Zug beim anderen lassen: Rollen vereinbaren, Vorhersagen erklären, kleine Hinweise geben und Lösungsstile achten.',
    imageAlt:
      'Bunte OutBrick-Steine und Steinfiguren auf einem marineblauen Puzzleraster',
    tags: [
      'gemeinsam spielen',
      'Puzzlespiele',
      'Familienspiele',
      'Spieldesign',
      'Spielgewohnheiten',
    ],
    intro:
      'Zwei Menschen können dasselbe Puzzle ansehen und trotzdem sehr unterschiedliche Spiele spielen. Einer genießt die Suche; der andere hat eine Antwort gesehen und möchte sie zeigen. Dann kommt der vertraute Moment: Eine Hand greift nach dem Handy, ein Stein bewegt sich und die Person, die es hält, verliert die Chance, den Grund selbst zu entdecken. Gemeinsam zu lösen funktioniert besser, wenn Hilfe diese Chance erhält. Dieser Ratgeber bietet eine praktische Vereinbarung für einen geteilten Bildschirm: Wer bewegt, wer erklärt, wie Hinweise angeboten werden und wann die Rollen wechseln. Er beschreibt eine informelle soziale Praxis für passende Puzzles, darunter OutBricks Browser-Felder. Er beschreibt weder einen eingebauten Koop-Modus noch ein geteiltes Konto oder gleichzeitiges Mehrspielen.',
    keyTakeaways: [
      'Vereinbart vor einer Lösung, wer den Bildschirm steuert und welche Hilfe willkommen ist.',
      'Erkläre das vorhergesagte Ergebnis eines Zugs und lass die spielende Person entscheiden, ob sie ihn ausführt.',
      'Wechselt Rollen nach Absprache und betrachtet einen gemeinsamen Abschluss als gemeinsame Entdeckung, nicht als Beweis, dass eine Person die andere getragen hat.',
    ],
    sections: {
      'agree-on-the-session': {
        title: 'Vereinbart, was ihr gemeinsam tut',
        paragraphs: [
          'Beginne mit einer nützlicheren Frage als „Kannst du das lösen?“ Frage: „Möchtest du Gesellschaft, einen Hinweis oder es selbst herausfinden?“ Das sind unterschiedliche Einladungen. Jemand begrüßt vielleicht, dass du zuschaust, ohne Rat zu wollen. Eine andere Person möchte einen genauen Anfangszug. Keine Antwort muss zum Test von Selbstständigkeit oder Fähigkeit werden.',
          'Wählt danach ein gemeinsames Ziel. Vielleicht wollt ihr ein Feld abschließen, eine rätselhafte Bewegungsregel erklären oder zwei Wege vergleichen. Vereinbart, ob das Zugziel heute zählt. Eine als Gespräch gedachte Sitzung kann unangenehm werden, wenn jemand stillschweigend jeden zusätzlichen Zug für einen zu korrigierenden Fehler hält. Benennt den Zweck, bevor ihr entscheidet, wie stark ihr optimiert.',
          'Scott et al. (2004) beobachteten Zusammenarbeit an gewöhnlichen Tischen und beschrieben persönliche, gemeinsame und Ablagebereiche in geteilten Arbeitsräumen. Das ist kein Experiment zu Puzzle-Handys, liefert aber eine nützliche Analogie: Eine gemeinsame Aufgabe kann einen Bereich enthalten, den jemand als seinen eigenen betrachtet. Neben einer spielenden Person zu sitzen erlaubt dir nicht von selbst, auf ihrem Bildschirm zu handeln.',
          'Für einen unverbindlichen Einstieg nutzt die [Browser-Spielanleitung](/play) und vereinbart ein kleines Feld. Möchtet ihr vergleichen statt zusammenarbeiten, behandelt unser [Ratgeber zu freundschaftlichem Wettbewerb](/blog/friendly-competition-with-friends) diese andere Absprache. Ihr müsst beides nicht verbinden. „Wir finden gemeinsam einen Weg“ und „Wir vergleichen unabhängige Versuche“ laden zu unterschiedlichem Verhalten ein.',
        ],
      },
      'driver-and-explainer': {
        title: 'Bewegen und Erklären als getrennte Rollen',
        paragraphs: [
          'Eine einfache Absprache ist eine steuernde und eine erklärende Person. Die steuernde bedient den Bildschirm und entscheidet über den Zug. Die erklärende beschreibt eine Möglichkeit und ihren Grund. Das sind vorübergehende Rollen, keine Etiketten für höhere oder geringere Fähigkeit. Wechselt nach einem Feld, Neustart oder einem anderen vereinbarten Punkt; greife nicht mitten im Versuch nach dem Gerät.',
          'Mache Erklärungen beobachtbar. „Beweg Blau“ lässt offen, welcher blaue Stein und warum. „Ich glaube, der blaue Stein links stoppt an Gelb und lässt Rot Platz zum Abbiegen“ benennt Teil, Richtung und erwartete Folge. Die steuernde Person kann diese Vorhersage prüfen, ablehnen oder testen. Eine nützliche Erklärung gibt etwas zum Beurteilen statt nur eine Anweisung zum Befolgen.',
          'Maquil et al. (2024) analysierten fünf Dreiergruppen bei einer Aufgabe an einem interaktiven Tisch und untersuchten die Abstimmung von Informationen und Handlungen. Die Studie liefert ausführliche Koordinationsberichte, keinen Beweis für bessere Puzzlepunkte durch unsere Rollen. Relevant ist die Unterscheidung selbst: Informationsaustausch und die Frage, wer handelt, gehören beide zur gemeinsamen Aufgabe, selbst wenn alle dieselbe Oberfläche sehen.',
          'Möchtet ihr beide gleichzeitig bewegen, pausiert vor der nächsten Handlung. Entscheidet, wessen Vorschlag ihr testet, und lasst den Versuch enden. Du kannst auch sagen: „Ich möchte meinen Weg ausprobieren, bevor ich deinen höre.“ Das schützt die Gelegenheit der ruhigeren Person, ohne ihren Weg für richtig erklären zu müssen. Eine getestete falsche Vorhersage kann befriedigender sein als eine unerklärte richtige Anweisung.',
        ],
      },
      'make-the-board-common-ground': {
        title: 'Stellt sicher, dass ihr über dasselbe Feld sprecht',
        paragraphs: [
          'Beschreibe Teile mit einer Kombination aus Ort, Farbe und Form oder Zeichen. „Der rote Stein unter dem gelben Tor“ ist leichter zuzuordnen als „der da“. Ändert ein Zug das Feld, benenne vor der weiteren Erklärung die neue Position. Ein Gespräch kann an veralteten Bezügen scheitern, obwohl beide die Bewegungsregel verstanden haben.',
          'Dillenbourg und Traum (2006) untersuchten multimodales gemeinsames Problemlösen mit dauerhaft geteilter Tafel und Kommunikation. Ihre Analyse unterscheidet, wie gemeinsame Darstellungen eine Lösung unterstützen und wie Menschen gegenseitiges Verständnis herstellen. Die Umgebung war eine entfernte Kooperationsaufgabe, nicht OutBrick. Wir wenden die Unterscheidung als Gesprächsgewohnheit an: Die sichtbare Anordnung ist ein gemeinsamer Bezug, aber du musst weiterhin prüfen, was die andere Person meint.',
          'Eine kurze Bestätigung kann einen langen Streit verhindern. Frage: „Meinst du den oberen blauen Stein?“ oder „Würde Rot hier oder eine Reihe höher stoppen?“ Beantworte danach die konkrete Unsicherheit. Die ganze Lösung lauter zu wiederholen klärt einen falschen Bezug wahrscheinlich nicht. Kann jemand eine Farbe nicht bequem unterscheiden, nutze das passende Zeichen und die Position, statt Unaufmerksamkeit zu vermuten.',
          'OutBricks [Tagesseite](/daily) zeigt allen am selben UTC-Datum dasselbe gewählte Feld. Das kann beim Vergleich helfen, auch wenn die Seite keine live geteilte Sitzung ist. Schaut ihr auf getrennte Bildschirme, bestätigt zuerst Datum und Feldnummer. Du kannst die aktuelle Stellung eines Freundes nicht als deinen Ausgangszustand nutzen, wenn er bereits mehrere Züge gemacht hat.',
        ],
      },
      'help-without-the-whole-answer': {
        title: 'Biete den kleinsten nützlichen Hinweis an',
        paragraphs: [
          'Hinweise passen am besten, wenn die empfangende Person ihre Größe wählt. Beginne nötigenfalls mit einer Regelklärung: „Der Stein gleitet weiter, bis er auf ein Hindernis trifft.“ Biete danach einen Bereich oder eine Abhängigkeit an: „Für dieses rote Tor muss vielleicht zuerst der Gang frei werden.“ Möchte die Person mehr, beschreibe einen einzelnen Zug. Behalte den ganzen Weg für jemanden, der ausdrücklich eine Komplettlösung möchte. Das ist unsere vorgeschlagene Etikette, keine Aussage über eine Hinweisfunktion im Spiel.',
          'Manchmal erhält eine Frage mehr Entdeckung als eine Anweisung. „Was könnte diesen Stein auf der benötigten Höhe stoppen?“ lenkt auf eine Einschränkung und lässt die Lösung offen. Fragen können aber zu versteckten Befehlen werden, wenn du so lange fragst, bis die andere Person deine Antwort wiederholt. Lass Raum zum Denken und akzeptiere „Ich würde lieber erst das ausprobieren“ als vollständige Antwort.',
          'Hansen und Spada (2010) untersuchten in zwei Bildsortierexperimenten Unterstützung für entferntes gemeinsames Problemlösen. Ihre Ergebnisse unterschieden Verbesserungen des Kooperationsprozesses von Ergebnissen des Problemlösens. Diese Grenze zählt: Ein klarerer Austausch kann sich lohnen, ohne eine bessere Punktzahl zu garantieren. Unsere Vorschläge zu Abwechseln und Hinweisen sollen Hilfe verständlich und willkommen machen, nicht schnelleres Lösen oder geistige Verbesserungen versprechen.',
          'Spielt ein Kind, Großelternteil oder jemand mit, der die Mechanik nicht kennt, leite den Hilfebedarf nicht aus dem Alter ab. Frage und beobachte die tatsächliche Schwierigkeit. Unser [Ratgeber zum Spielen mit Enkelkindern](/blog/playing-games-with-grandchildren) bietet breitere Ideen für diese Beziehung. Hier ist die unmittelbare Aufgabe kleiner: Lass die Person an der nächsten Entscheidung beteiligt, statt sie zum Publikum deiner Lösung zu machen.',
        ],
      },
      'recover-and-finish-together': {
        title: 'Mit Fehlern umgehen und ohne Schuldzuweisung abschließen',
        paragraphs: [
          'Scheitert eine Vorhersage, beschreibe zuerst die Folge, bevor du Schuld zuweist. „Blau blockiert jetzt das Tor“ hilft mehr als „Du hast den falschen bewegt“. Prüft, ob die Ursache ein unklarer Bezug, eine unbekannte Regel oder ein tatsächlich unhilfreicher Plan war. Gibt es Rückgängig, frage vor der Nutzung: Die steuernde Person möchte vielleicht sehen, ob die neue Anordnung noch einen Weg hat.',
          'Auf OutBricks Browser-Feldern erlauben Rückgängig und Zurücksetzen erneute Versuche; Rückgängigmachen beeinflusst das Sterneergebnis. Übertrage dieses Web-Verhalten nicht auf App-Kosten. Spielt ihr die App, prüft ihre [Erklärung zum fairen Spielen](/#fair), bevor ihr Wiederholungen oder Ressourcenausgaben vereinbart. Einen Bildschirm zu teilen bedeutet auch eine gemeinsame Entscheidung über Käufe und Belohnungswerbung; triff sie nicht für jemand anderen.',
          'Ein Abschluss erlaubt, beide Beitragsarten anzuerkennen. Die Person, die einen Haltepunkt erkannt hat, half; ebenso die, die geduldig den Weg prüfte und ein unerwartetes Hindernis bemerkte. „Wir haben herausgefunden, warum das funktioniert“ hält die gemeinsame Aufgabe im Blick. Danach könnt ihr Rollen wechseln, ein anderes Feld wählen oder aufhören. Gemeinsam zu lösen verlangt weder ein fertiges Kapitel noch den Beweis höherer Produktivität.',
          `Möchtet ihr diese Absprache testen, wählt ein Feld auf [OutBricks Spielseite](/play), benennt die steuernde Person und fragt, welche Hilfe willkommen ist. Für die breitere App [findet ihr OutBrick im App Store](${appStoreUrl('journal-together')}). Die soziale Absprache macht ihr selbst; sie ist kein Funktionskauf. Der nützlichste Erfolg kann sein, dass beide nach dem Puzzle weiter gemeinsam spielen möchten.`,
        ],
      },
    },
    pullQuote:
      'Eine nützliche Erklärung gibt etwas zum Beurteilen statt nur eine Anweisung zum Befolgen.',
    faqs: [
      {
        question: 'Hat OutBrick einen Koop-Modus zum gemeinsamen Lösen?',
        answer:
          'Dieser Artikel beschreibt informelle Zusammenarbeit an einem Bildschirm, keinen eingebauten Koop- oder gleichzeitigen Mehrspielermodus. Ihr könnt vereinbaren, wer das Feld steuert, und gemeinsam einen Weg besprechen.',
      },
      {
        question: 'Wie helfe ich, ohne das Puzzle zu verraten?',
        answer:
          'Frage nach der gewünschten Hilfemenge und beginne mit einer Regel oder relevanten Abhängigkeit. Biete einen genauen Zug oder die komplette Lösung nur an, wenn die Person diesen Detailgrad möchte.',
      },
      {
        question: 'Wann sollten wir die Bildschirmsteuerung wechseln?',
        answer:
          'Vereinbart einen klaren Übergabepunkt, etwa Feldabschluss oder Neustart. Frage vor dem Nehmen des Geräts, auch wenn du glaubst, die Lösung gefunden zu haben.',
      },
      {
        question: 'Garantiert gemeinsames Lösen bessere Ergebnisse?',
        answer:
          'Die zitierte Forschung belegt keine verbesserten OutBrick-Punkte oder geistigen Fähigkeiten durch diesen informellen Ansatz. Das praktische Ziel ist ein klareres, willkommenes Gespräch, an dem beide teilnehmen können.',
      },
    ],
  },
};
