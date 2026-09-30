import type { ExtraGuides } from '../../i18n/blog';
import { appStoreUrl } from '../../app-store-url.ts';
export const de8: ExtraGuides = {
  'block-blast-plus-vs-outbrick': {
    title: 'Block Blast!+ und OutBrick: zwei Arten von Blockpuzzle',
    dek: 'Block Blast!+ und OutBrick nach ihren Regeln vergleichen: Formen für volle Reihen platzieren, Steine zu Toren schieben und die Kosten prüfen.',
    imageAlt:
      'Bunte OutBrick-Steine und Figuren um ein Handy vor einem dunklen geometrischen Hintergrund',
    tags: [
      'Puzzlespiele',
      'Block-Sortierpuzzles',
      'Spieldesign',
      'Spielgewohnheiten',
      'mobile Spiele',
    ],
    intro:
      'Ein Raster voller bunter Blöcke kann zwei sehr unterschiedliche Puzzles verbergen. In einem entscheidest du, wohin eine neue Form gehört. Im anderen hat jedes Teil bereits einen Platz, und du musst seinen Weg hinaus finden. Block Blast!+ und OutBrick machen diese Unterscheidung nützlich: Beide belohnen das Lesen von Raum, stellen aber unterschiedliche Fragen dazu. Suchst du ein Spiel wie Block Blast, hilft keine Liste ähnlicher Bildschirmfotos am meisten, sondern eine Erklärung dessen, was du tatsächlich tust. Dieser Ratgeber zu Spielmechaniken basiert auf Quellen, geprüft am 30. September 2026, und stammt vom Team hinter OutBrick. Wir haben weder einen praktischen Vergleich durchgeführt noch gemessen, welches Spiel Menschen bevorzugen.',
    keyTakeaways: [
      'Bei Block Blast!+ platzierst du Formen und löschst vollständige Reihen oder Spalten; bei OutBrick schiebst du vorhandene Steine durch passende Tore.',
      'Block Blast!+ ist die Apple-Arcade-Ausgabe. Übertrage ihre Abo-, Werbe- und Kaufbedingungen nicht auf die separat angebotene Standard-App Block Blast!.',
      'Wähle Platzieren, wenn du gern Formen einpasst und Raum erhältst; wähle Schieben, wenn du Wege, Haltepunkte und Zugreihenfolgen magst.',
    ],
    sections: {
      'placing-versus-routing': {
        title: 'Der erste Unterschied ist das Tätigkeitswort',
        paragraphs: [
          'Apple beschreibt Block Blast!+ als Spiel, in dem du Blöcke in ein Raster einpasst, Reihen und Spalten vervollständigst und Kombinationen aufbaust (Apple, 2026). Die Kernfrage lautet: „Wohin soll diese Form?“ Ein freier Bereich bietet die Möglichkeit, etwas zu platzieren. Eine fast vollständige Reihe kann Raum zurückgeben. Du vergleichst den Umriss einer Form mit den noch verfügbaren Flächen.',
          'OutBricks Frage lautet: „Was muss sich bewegen, bevor dieser Stein hinauskommt?“ Du wählst einen vorhandenen Stein und schiebst ihn. Er gleitet, bis etwas ihn stoppt, und sein Ziel ist das Tor seiner eigenen Farbe. Ein freier Bereich kann ein Weg sein, einen Stein aber auch weiter tragen, als du wolltest. Mehr freier Raum ist nicht automatisch die bessere Stellung.',
          'Betrachte eine lange gerade Bahn. In einem Platzierpuzzle könnte das Freihalten dieser Bahn Platz für eine lange Form bewahren. In einem Gleitpuzzle könnte sie einen Stein über den benötigten Abbiegepunkt hinausführen. Ein anderer Stein muss vielleicht vorübergehend als Bremse in der Bahn stehen. Dasselbe sichtbare Merkmal hat eine andere strategische Bedeutung, weil die Bewegungsregel verändert, was du damit tun kannst.',
          'Unsere [Einführung in Schiebepuzzles](/blog/how-to-solve-sliding-block-puzzles) erklärt die Bewegungsregel ausführlicher. Einen breiteren Blick auf Platzieren, fallende Teile und Wegeplanung bietet [Warum Spiele wie Tetris dauerhaft begeistern](/blog/games-like-tetris). Keine Mechanik ist eine fortgeschrittenere Version der anderen. Es sind unterschiedliche Wege, begrenzten Raum interessant zu machen.',
        ],
      },
      'two-ways-to-plan': {
        title: 'Zwei Arten, über den nächsten Zug nachzudenken',
        paragraphs: [
          'Prüfe in einem Platzierpuzzle die angebotene Form, ihre möglichen Plätze und das Feld, das danach bleibt. Eine Position kann erlaubt und trotzdem unpraktisch sein: Sie hinterlässt vielleicht eine ungünstige kleine Lücke oder verbraucht den einzigen Raum für eine andere Form. Eine Reihe zu vervollständigen kann reizvoll sein, weil sich Menge und Form des verfügbaren Raums ändern. Das beschreibt ein allgemeines Platzierproblem, keine optimale Strategie für jeden Block-Blast-Modus.',
          'Prüfe in OutBrick den gesamten Weg und endgültigen Haltepunkt des gewählten Steins. Ein Hindernis zu entfernen kann den Weg zum Tor öffnen. Entfernst du es zu früh, fehlt vielleicht die Haltefläche für einen anderen Stein. Ein nützlicher Plan beschreibt deshalb Abhängigkeiten: Blau muss hier stoppen, bevor Rot seinen Ausgang ausrichten kann. Das Feld verlangt, ein System umzuordnen, statt einfach ein freies Ziel zu wählen.',
          'Isaksen et al. (2017) trennten strategische Entscheidungen von Ausführungsanforderungen in Simulationen von Tetris- und Puzzle-Bobble-Varianten. Ihre Arbeit zeigt, warum eine einzelne Schwierigkeitsangabe unterschiedliche Anforderungen verbergen kann. Sie untersuchte weder Block Blast!+ noch OutBrick. Wir nutzen die Unterscheidung als Vergleichswerkzeug: Frage sowohl, ob du einen Zug gern entscheidest, als auch, ob du ihn gern ausführst.',
          'Das zählt, wenn du durchdachte Puzzles magst, aber eine bestimmte Eingabeform nicht. Eine Form an einen Ort zu ziehen und einem vorhandenen Stein eine Richtung zu geben sind getrennte Interaktionen. Bildschirmfotos entscheiden nicht, was für dich klarer wirkt. Probiere ein einfaches Beispiel, lies die Anleitung und beobachte, was ein abgelehnter Zug bedeutet, bevor du eine unbekannte Steuerung als Beleg für ein zu schwieriges Puzzle ansiehst.',
        ],
      },
      'satisfaction-without-ranking': {
        title: 'Welche Art von Befriedigung suchst du?',
        paragraphs: [
          'Manche möchten die wiederholte Befriedigung einer verschwindenden Reihe. Andere suchen den endgültigen Feldabschluss, dessen Weg sie nach und nach entdecken. Du kannst beides zu verschiedenen Zeiten mögen. Diese Unterscheidung betrifft die Form einer angenehmen Sitzung, nicht das Urteil, Punktejagd sei oberflächlich oder begrenzte Felder seien geistig überlegen.',
          'Ryan et al. (2006) untersuchten Spielmotivation in vier Studien und verbanden wahrgenommene Kompetenz und Selbstbestimmung mit Freude und Vorlieben. Diese Ergebnisse ordnen die Apps nicht in eine Rangliste. Sie liefern eine nützliche persönliche Frage: Lässt dieses Spiel dich verstehen, was passiert ist, und Entscheidungen treffen, die sich wie deine eigenen anfühlen? Eine vertraute Mechanik kann dieses Gefühl schnell vermitteln; eine neue braucht vielleicht einige Felder, bis sie verständlich wird.',
          'Abuhamdeh und Csikszentmihalyi (2012) untersuchten Herausforderung beim Internetschach und bei Alltagstätigkeiten. Je nach Motivation und Tätigkeit hing Herausforderung anders mit Freude zusammen. Das spricht dagegen, das sanfteste oder schwierigste Puzzle zum allgemeingültigen Gewinner zu erklären. Möchtest du einen Punktestand aufbauen, kann das Erhalten von Raum fesseln. Möchtest du eine begrenzte Anordnung entwirren, passt vielleicht ein Feld mit passenden Toren besser.',
          'Gib dir einen konkreten Test. Benenne nach einer kurzen Sitzung eine Entscheidung, die dir gefallen hat: Platz freihalten, eine Kombination abschließen, einen Haltepunkt bauen oder die Ausgangsreihenfolge finden. „Diese Entscheidung hat mir gefallen“ verrät mehr als „Ich sollte dieses beliebte Spiel mögen“. Du darfst auch entscheiden, dass gerade keines passt, und weitersuchen.',
        ],
      },
      'arcade-and-standalone': {
        title: 'Prüfe die Ausgabe vor dem Kostenvergleich',
        paragraphs: [
          'Apple kündigte Block Blast!+ für den 3. September 2026 in Apple Arcade an und beschrieb die Arcade-Ausgabe als frei von Werbung und In-App-Käufen (Apple, 2026). Diese Aussage gehört zu Block Blast!+. Die Standard-App Block Blast! hat einen eigenen Eintrag. Ein Pluszeichen ist nicht bloß Zierde, wenn es ein anderes Vertriebsmodell kennzeichnet. Prüfe, welche Ausgabe eine Empfehlung, ein Bildschirmfoto oder eine Rezension tatsächlich meint.',
          'Arcade-Zugang hängt von einem Abo und dessen aktuellen Bedingungen ab. OutBrick ist ein eigenständiger App-Store-Download mit In-App-Käufen und freiwilliger Belohnungswerbung. Es hat auch Leben und Zuglimits. Mache aus „kostenlos herunterladen“ keine Zusage, dass sämtlicher Zugang, alle Versuche oder Extras kostenlos sind. Setze die Bedingungen eines Abo-Puzzles nicht bei einem eigenständigen Spiel voraus.',
          'Hast du bereits ein Arcade-Abo, prüfe im aktuellen Block Blast!+-Eintrag, ob es zu deinem Gerät und deinen Vorlieben passt. Hast du keines, erwäge den weiteren Katalog und die Abobedingungen, bevor du den Zugang für ein einziges Spiel kaufst. Für OutBrick erläutert unsere [Erklärung zum fairen Spielen](/#fair) Leben, Rückgängig-Funktion und freiwillige Werbung. Ein Vergleich hilft, wenn er diese Entscheidungen verständlich macht.',
          'OutBrick entfernte Rush in Version 4.2; die aktuelle Puzzleregel nutzt ein Zuglimit statt eines Countdowns. Das bestimmt nicht das genaue Tempo jeder Block-Blast-Ausgabe oder jedes Modus. Lies die aktuelle Beschreibung der Ausgabe, die du installieren möchtest, statt aus Name, Punkteanzeige oder bunter Gestaltung eine Uhr abzuleiten.',
        ],
      },
      'a-small-fit-test': {
        title: 'Ein kleiner Test hilft mehr als ein pauschales Urteil',
        paragraphs: [
          'Erkläre dir zuerst die Regel selbst. Beim Platzieren: Setze eine Form in einen erlaubten Bereich und arbeite auf eine vollständige Reihe hin. Bei OutBrick: Gib einem Stein eine Richtung, sage seinen Haltepunkt voraus und arbeite auf seinen passenden Ausgang hin. Spiele dann langsam genug, um zu sehen, ob jede Handlung diese Erklärung bestätigt. Ein Vergleich soll dir ins passende Puzzle helfen, nicht dich zum Ertragen des falschen bewegen.',
          'Iacovides et al. (2015) untersuchten Lernen und Beteiligung anhand mehrerer Fallstudien mit Beobachtungen und Interviews. Ihre Berichte verbanden Erkenntnisdurchbrüche mit Beteiligung, besonders wenn Spielende sich für den Fortschritt verantwortlich fühlten. Das sind qualitative Ergebnisse aus anderen Spielen. Sie sprechen dafür, auf dein Verständnis zu achten, ohne zu versprechen, dass ein kurzer Versuch eine allgemeingültige Vorliebe offenbart.',
          `Du kannst [ein OutBrick-Feld im Browser ausprobieren](/play), um Gleiten bis zum Stopp zu untersuchen. Diese Demonstration probiert die Mechanik aus, bildet aber nicht jede Funktion, Kostenstruktur oder Barrierefreiheit der installierten App nach. Gefällt sie dir, [sieh dir OutBrick im App Store an](${appStoreUrl('journal-block-blast-comparison')}) und prüfe vor dem Download aktuelle Geräteanforderungen und Kaufinformationen.`,
          'Das nützliche Ergebnis kann ein ganz gewöhnlicher Satz sein: „Ich passe lieber neue Formen ein, als vorhandene Teile umzuleiten“, oder umgekehrt. Das genügt. Blockpuzzles teilen eine Bildsprache, aber ihre Tätigkeitswörter bestimmen das Erlebnis. Wähle die Tätigkeit, die du gern weiter ausführen möchtest.',
        ],
      },
      'official-source': {
        title: 'Offizielle Produktquelle',
        paragraphs: [
          'Apple. (2026, August 11). Apple Arcade’s lineup of hit puzzle games gets even bigger with the addition of Block Blast!+ and Art of Fauna: Cozy Puzzles+. Apple Newsroom. [Offizielle Arcade-Ankündigung](https://www.apple.com/newsroom/2026/08/apple-arcade-levels-up-with-block-blast-plus-and-art-of-fauna-cozy-puzzles-plus/). Die Studien unten liefern Kontext zu Design und Motivation; keine hat eines der verglichenen Spiele getestet.',
        ],
      },
    },
    pullQuote: 'Mehr freier Raum ist nicht automatisch die bessere Stellung.',
    faqs: [
      {
        question: 'Ist OutBrick dieselbe Art Puzzle wie Block Blast!+?',
        answer:
          'Die Kernmechaniken unterscheiden sich. Block Blast!+ verlangt, Formen für vollständige Reihen und Spalten zu platzieren; OutBrick verlangt, vorhandene Steine durch passende Tore zu schieben.',
      },
      {
        question:
          'Ist Block Blast!+ dieselbe App wie das normale Block Blast!?',
        answer:
          'Block Blast!+ ist die Apple-Arcade-Ausgabe mit Abozugang und den von Apple beschriebenen Werbe- und Kaufbedingungen. Prüfe den gesonderten Standardeintrag, statt diese Bedingungen darauf zu übertragen.',
      },
      {
        question: 'Welches eignet sich besser zum Planen?',
        answer:
          'Beide können Planung verlangen, aber unter verschiedenen Einschränkungen. Beim Platzieren geht es darum, wie eine Form den übrigen Raum verändert; bei OutBrick darum, wie Bewegungsreihenfolge und Haltepunkte Wege beeinflussen.',
      },
      {
        question: 'Kann ich OutBrick ohne Installation ausprobieren?',
        answer:
          'Das [Browser-Spielfeld](/play) lässt dich Gleiten bis zum Stopp testen. Prüfe den App-Store-Eintrag gesondert für Kompatibilität, Funktionen und Kosten der installierten App.',
      },
    ],
  },
  'sokoban-vs-sliding-block-puzzles': {
    title: 'Sokoban und Schiebepuzzles: schieben, gleiten, planen',
    dek: 'Wie unterscheiden sich Sokobans Schubregeln von Gleitpuzzles? Praktische Beispiele zu Ecken, Zugangswegen und vorübergehenden Haltepunkten.',
    imageAlt:
      'OutBrick-Handy und bunte Steine vor dunklem Hintergrund mit geometrischen Wegen',
    tags: [
      'Puzzlespiele',
      'Schiebepuzzles',
      'Spieldesign',
      'Problemlösen',
      'Block-Sortierpuzzles',
    ],
    intro:
      'Eine Kiste steht ein Feld vor ihrem Ziel. Sie zu bewegen scheint offensichtlich, bis du merkst, dass die Person, die sie schieben muss, nicht hinter sie gelangt. Ein farbiger Stein liegt neben seinem Ausgang. Auch diese Bewegung wirkt offensichtlich, bis eine offene Bahn ihn weiter als beabsichtigt trägt. Sokoban und Gleitpuzzles interessieren sich beide für Raum und Reihenfolge, aber das Hindernis, um das du herumplanst, unterscheidet sich. Dieser Ratgeber vergleicht klassische Sokoban-Regeln mit OutBricks Gleiten-bis-zum-Stopp-Regel. Er erklärt Mechaniken, bewertet nicht den Schwierigkeitsgrad, und seine Beispiele sind erfundene Lehrstellungen statt Lösungen benannter Levels.',
    keyTakeaways: [
      'Im klassischen Sokoban schiebt eine Figur Kisten und muss die richtige Seite erreichen; in OutBrick wählst du einen Stein und lässt ihn bis zu einem Hindernis gleiten.',
      'Eine Sokoban-Ecke kann eine Kiste dauerhaft festsetzen. In Gleitpuzzles kann das Entfernen eines Hindernisses den Haltepunkt beseitigen, den ein späterer Weg braucht.',
      'Nützliche Gewohnheiten überschneiden sich, doch eine Strategie überträgt sich nur, wenn Bewegungs- und Zielregeln sie unterstützen. Lies diese Regeln, bevor du einen vertrauten Plan übernimmst.',
    ],
    sections: {
      'what-a-move-means': {
        title: 'Was bedeutet ein Zug tatsächlich?',
        paragraphs: [
          'Klassisches Sokoban platziert eine Figur, Kisten, Wände und Lagerziele auf einem Raster. Die Figur geht durch freie Felder und schiebt eine Kiste, wenn das Feld dahinter leer ist. Sie kann weder Kisten ziehen noch Kistenketten schieben oder durch Wände gehen. Abgeschlossen ist das Puzzle, wenn die Kisten auf den Zielen stehen. Einzelne Umsetzungen können Varianten ergänzen; diese Beschreibung betrifft die klassischen Regeln, nicht jede App mit diesem Namen.',
          'Die Position der Figur ist Teil des Puzzles. Eine Kiste mit freiem Raum rechts lässt sich nicht unbedingt nach rechts schieben: Die Figur muss auch ihre linke Seite erreichen. Wer nur an das Ziel der Kiste denkt, übersieht die Hälfte des Zugs. Ein kurzer Gehweg hinter eine Kiste kann unverzichtbar sein, obwohl er keine Ladung einem Ziel näherbringt.',
          'In OutBrick wählst du einen Stein direkt und gibst ihm eine Richtung. Er gleitet, bis etwas ihn stoppt, und verlässt das Feld durch das Tor seiner Farbe. Es gibt keine Lagerfigur, deren Gehweg du erhalten musst. Deine Aufmerksamkeit gilt Bewegungsbahn, verfügbaren Stopps und Beziehungen zu anderen Steinen. Auf späteren Feldern erscheinen Schlüssel, Schlösser und Kisten; das macht die Kernbewegung aber nicht identisch mit Sokoban.',
          '„Schiebepuzzle“ ist eine breite Kategorie. Manche erlauben kleine Schritte oder beschränken Teile auf eine Achse; andere nutzen Gleitregeln. Unsere [Geschichte der Schiebepuzzles](/blog/history-of-sliding-block-puzzles) liefert diesen weiteren Kontext. Bestimme immer die Bewegungsregel des jeweiligen Spiels, bevor du annimmst, bereits zu wissen, wie du es löst.',
        ],
      },
      'the-corner-and-the-brake': {
        title: 'Eine Ecke im einen Puzzle, eine Bremse im anderen',
        paragraphs: [
          'Stell dir eine Sokoban-Kiste neben der unteren Wand vor, mit einer Wand unmittelbar links davon. Wird sie nach links in diese Ecke geschoben und ist die Ecke kein Ziel, kommt sie nach klassischen Regeln nicht mehr heraus. Um sie nach rechts zu schieben, müsste die Figur in der linken Wand stehen. Für einen Schub nach oben müsste sie unterhalb der unteren Wand stehen. Die Kiste sitzt fest, selbst wenn das übrige Lager geräumig ist.',
          'Junghanns und Schaeffer (2001) untersuchten Sokoban als anspruchsvolles Suchproblem mit einem einzelnen Agenten. Ihre Solver-Arbeit beschreibt die Bedeutung von Domänenwissen, darunter das Erkennen von Sackgassen und das Verringern unproduktiver Suche. Das ist Forschung zur Computersuche, kein Experiment darüber, wie Menschen trainieren sollten. Sie liefert eine wichtige Unterscheidung: Ein erlaubter Zug kann in eine Stellung führen, aus der das Ziel unerreichbar ist.',
          'Stell dir nun einen gleitenden Stein vor, der in einer mittleren Spalte stoppen muss, bevor er zu einem Tor fährt. Ein zweiter Stein steht ein Feld hinter dem gewünschten Stopp und dient als Bremse. Ihn wegzubewegen scheint das Feld aufzuräumen, lässt aber den ersten Stein über seine Ausrichtung hinausgleiten. Das Hindernis hatte eine Aufgabe. Diese Beispielstellung hängt von Gleiten bis zum Stopp ab und gilt nicht allgemein für jedes Schiebepuzzle.',
          'Keines der Beispiele sagt, dass du nie in eine Ecke schieben oder nie eine Bahn freimachen solltest. Ein Ziel in der Ecke kann den Sokoban-Schub richtig machen; eine andere Haltefläche kann die Gleitbahn sichern. Die Frage ist, was nach dem Zug noch möglich bleibt. Ein aufgeräumt wirkendes und ein lösbares Spielfeld sind nicht dasselbe.',
        ],
      },
      'routes-have-two-ends': {
        title: 'Erhalte den Zugang ebenso wie die Ziele',
        paragraphs: [
          'Betrachte einen Sokoban-Gang zwischen zwei Räumen. Eine Kiste in seinen Eingang zu schieben kann sie einem Lagerfeld näherbringen und zugleich den Weg der Figur in den anderen Raum versperren. Vielleicht musst du später von der anderen Seite an die Kiste, hast aber den einzigen Weg dorthin verloren. Frage vor einem Schub, wo die Figur danach gehen kann und welche Seite jeder übrigen Kiste erreichbar bleibt.',
          'OutBricks vergleichbare Frage betrifft Durchgang und Stopps. Muss ein blauer Stein eine Bahn kreuzen, bevor ein roter hinausgeht, kann das frühe Entfernen von Rot eine nützliche Bremse beseitigen oder den Weg verändern. Bleibt Rot dagegen für immer stehen, blockiert es vielleicht Blau. Die Abhängigkeit ist vorübergehend: Behalte das Teil, solange es nützlich ist, und entferne es, wenn seine Aufgabe erledigt ist.',
          'Formuliere einen Plan als Beziehungen statt als lange Richtungsfolge. In Sokoban: „Die Türöffnung bleibt frei, bis ich hinter die obere Kiste komme.“ In einem Gleitpuzzle: „Dieser Stein bleibt als Stopp, bis der andere ausgerichtet ist.“ Diese Beschreibungen machen den Grund eines Zugs sichtbar. Ändert sich das Feld, kannst du prüfen, ob der Grund noch gilt, statt dich an eine verschwundene Folge zu erinnern.',
          'Mehr über das Lesen von Abhängigkeiten findest du in unserem [Ratgeber zum Prüfen eines Felds vor dem ersten Zug](/blog/how-to-read-a-puzzle-before-moving). Du brauchst keinen perfekten Plan fürs ganze Feld. Oft genügt es, einen zu erhaltenden Zugangsweg und eine nützliche Position zu erkennen, die noch nicht verändert werden sollte.',
        ],
      },
      'what-transfers-and-what-does-not': {
        title: 'Was überträgt sich beim Wechsel des Puzzles?',
        paragraphs: [
          'Zugfolgen zu prüfen hilft in beiden Familien. Ebenso hilft zu erkennen, dass ein Teil sich vielleicht erst von seinem Ziel entfernen muss, bevor es dorthin gelangt. Weniger zuverlässig überträgt sich eine konkrete Bewegungserwartung. Sokoban-Spielende nehmen vielleicht an, einen Stein um ein Feld verschieben zu können. Wer Gleitpuzzles spielt, vergisst vielleicht, dass eine Lagerfigur Platz hinter einer Kiste braucht.',
          'Iacovides et al. (2015) untersuchten Handeln, Verständnis und Beteiligung anhand mehrerer Spielfallstudien. Ihre qualitativen Berichte beschreiben Erkenntnisdurchbrüche als wichtigen Teil der Beteiligung. Sie belegen keinen gemessenen Übertragungseffekt zwischen Sokoban und OutBrick. Unsere praktische Anwendung ist, eine überraschende Bewegung zunächst als mögliches Regelmissverständnis zu behandeln, bevor du deine Planungsfähigkeit verantwortlich machst.',
          'Hearn und Demaine (2005) analysierten die formale rechnerische Komplexität von Schiebepuzzles und anderen eingeschränkten Problemen. Ihr Beweis betrifft mathematische Problemfamilien, nicht die Schwierigkeit eines bestimmten Verbraucherlevels. Er unterstreicht eine nützliche Grenze dieses Vergleichs: Die erlaubten Züge bestimmen das Problem. Zwei ähnlich aussehende Felder können anderes Denken verlangen, wenn eine Bewegungsregel wechselt; ihre Arbeit ordnet Sokoban und OutBrick nicht in eine Rangliste.',
          'Probiere beim Wechsel der Puzzlefamilie ein einfaches Feld. Sage eine erlaubte Handlung samt genauem Ergebnis voraus, führe sie aus und vergleiche. Wiederhole das mit einer blockierten Handlung, falls das Spiel sichere Erkundung erlaubt. Diese kleine Regelprüfung ist ein redaktioneller Vorschlag, kein getestetes Trainingsprogramm. Sie kann aber verhindern, dass ein vertraut wirkendes Feld in deinem Kopf unbemerkt die falschen Regeln übernimmt.',
        ],
      },
      'choose-your-favourite-constraint': {
        title: 'Wähle die Einschränkung, über die du gern nachdenkst',
        paragraphs: [
          'Sokoban ist ein guter Kandidat, wenn du gern um den Zugang einer Figur und die Folgen unumkehrbarer Schübe herumplanst. Gleitpuzzles lohnen sich, wenn du gern Stopps konstruierst und Teile direkt umleitest. Keine Vorliebe braucht die Behauptung, ein Genre verbessere dein Gehirn stärker. Diese Mechaniken können für sich genommen Freude machen.',
          'Kotovsky et al. (1985) untersuchten, warum unterschiedliche Darstellungen formal gleichwertiger Turm-von-Hanoi-Probleme unterschiedliche Schwierigkeit erzeugten. Die Arbeit betrifft diese experimentellen Probleme, nicht diese beiden Puzzlegenres. Sie spricht dafür, Aufgabenstruktur und Verständlichkeit der Regeln zu unterscheiden: Eine unbekannte Darstellung kann schwieriger wirken, ohne mehr Teile hinzuzufügen. Schwierigkeit und persönliche Eignung bleiben unterschiedliche Fragen.',
          `Du kannst [eine OutBrick-Demonstration spielen](/play), um zu sehen, wie eine Gleitregel eine Bahn verändert. Lies unsere [Farbsortierpuzzle-Tipps](/blog/colour-sort-puzzle-tips), wenn du diese Bewegung mit passenden Toren verbinden möchtest. Gefällt dir die Mechanik, [sieh OutBrick im App Store an](${appStoreUrl('journal-sokoban-comparison')}) für aktuelle Kompatibilität und Kaufinformationen. Die App hat Zuglimits, Leben und freiwillige Belohnungswerbung; ein Puzzle ohne Zeitlimit ist kein unbegrenzter Zugang.`,
          'Nimm für beide Familien eine nützliche Frage aufs nächste Feld mit: „Was muss nach diesem Zug verfügbar bleiben?“ In Sokoban kann das ein Feld sein, auf dem die Figur stehen muss. In OutBrick kann es eine Haltefläche sein. Dieser Unterschied verwandelt eine vage Ähnlichkeit bunter Blöcke in eine deutlichere Wahl dessen, was du spielen möchtest.',
        ],
      },
      'classic-rules-source': {
        title: 'Klassische Regeln und Grenzen der Evidenz',
        paragraphs: [
          'Sokoban.jp. (n.d.). Rules. [Klassische Sokoban-Regeln](https://sokoban.jp/rule.html). Abgerufen am 30. September 2026. Die Beispiele oben sind eigene Veranschaulichungen dieser Regeln und der Bewegung in OutBrick. Die Forschung unten liefert Kontext zu Suche, Beteiligung und Motivation; sie bewertet OutBrick nicht unabhängig.',
        ],
      },
    },
    pullQuote:
      'Ein aufgeräumt wirkendes und ein lösbares Spielfeld sind nicht dasselbe.',
    faqs: [
      {
        question: 'Kann man im klassischen Sokoban eine Kiste ziehen?',
        answer:
          'Nein. Klassisches Sokoban lässt die Figur eine Kiste in ein leeres Feld schieben, aber nicht ziehen oder eine Kistenkette schieben. Varianten können andere Regeln ergänzen.',
      },
      {
        question: 'Warum ist eine Ecke in Sokoban gefährlich?',
        answer:
          'Eine in eine Ecke ohne Ziel geschobene Kiste kann unbeweglich werden, weil die Figur die benötigten Seiten nicht erreicht. Prüfe sowohl das Kistenziel als auch den künftigen Zugang der Figur.',
      },
      {
        question: 'Bewegt OutBrick sich wie Sokoban um ein Feld pro Zug?',
        answer:
          'OutBrick-Steine gleiten in der gewählten Richtung, bis etwas sie stoppt. Die Planung umfasst deshalb Haltepunkte und Ausgänge passender Farbe statt der Schubposition einer Figur.',
      },
      {
        question: 'Machen Sokoban-Fähigkeiten OutBrick automatisch leicht?',
        answer:
          'Manche Gewohnheiten, etwa Zugreihenfolgen zu prüfen und Wege zu erhalten, können helfen. Die Bewegungsregeln unterscheiden sich aber. Vertraute Taktiken müssen am neuen Spiel geprüft werden, statt ihre Übertragung vorauszusetzen.',
      },
    ],
  },
  'puzzle-hints-without-spoilers': {
    title: 'Puzzlehinweise ohne Spoiler: Freunden helfen',
    dek: 'Nützliche Puzzlehinweise geben und erfragen, ohne alles zu verraten: Grenzen vereinbaren, einen Hinweis teilen und die Entscheidung beim Löser lassen.',
    imageAlt:
      'Zwei OutBrick-Figuren neben bunten Puzzlesteinen und einem Handy vor einem dunklen geometrischen Hintergrund',
    tags: [
      'gemeinsam spielen',
      'Puzzlespiele',
      'Problemlösen',
      'Spielgewohnheiten',
      'Familienspiele',
    ],
    intro:
      'Du erkennst den nächsten Zug früher als dein Freund. Deine Hand hebt sich zu seinem Handy. Ein hilfreicher Satz liegt bereit: „Beweg einfach den da.“ Dann erinnerst du dich, dass das Feststecken zum Teil der Grund ist, warum er spielt. Ein Puzzlehinweis kann eine nützliche Möglichkeit öffnen, aber auch die Entscheidung nehmen, die jemand selbst treffen wollte. Die praktische Fähigkeit besteht darin, sich auf die passende Menge Hilfe für diesen Moment zu einigen. Dieser Ratgeber bietet abgestufte Wege, Hinweise zu erfragen und zu geben: bei einem gemeinsamen Tagespuzzle, beim Zuschauen in der Familie oder bei einer Antwort auf ein Bild im Gruppenchat. Die Beispiele sind eigene. Die Forschung liefert Kontext aus Feedback, Lernhilfe und Spielerfahrung, kein getestetes Hinweissystem für OutBrick.',
    keyTakeaways: [
      'Frage vor einem Hinweis um Erlaubnis und vereinbart, ob die Person eine Frage, einen kleinen Tipp, den nächsten Zug oder die ganze Lösung möchte.',
      'Gib einen begrenzten Hinweis und halte dann inne. Ungebetene Folgehinweise können die Antwort genauso vollständig verraten wie eine Komplettlösung.',
      'Bleib konkret und respektvoll, kennzeichne öffentliche Spoiler klar und lass die lösende Person entscheiden, wann sie mehr Informationen möchte.',
    ],
    sections: {
      'agree-on-the-help': {
        title: 'Vereinbart die Hilfe, bevor du sie gibst',
        paragraphs: [
          '„Möchtest du einen Tipp?“ ist ein guter Anfang, lässt aber die Größe des Tipps offen. Eine Person meint vielleicht „Zeig, was ich übersehen habe“. Eine andere meint „Sag den nächsten Zug, damit ich weitermachen kann“. Ergänze die Erlaubnis um eine einfache Wahl: eine Frage zum Feld, einen Hinweis zu einem Bereich, einen direkten Zug oder die ganze Antwort. Das sind unterschiedliche Wünsche, und keiner ist moralisch besser.',
          'Eine nützliche Bitte lautet: „Ich möchte einen kleinen Hinweis, nicht den Zug. Ich habe versucht, die rechte Bahn freizumachen, aber bekomme den blauen Stein nicht ausgerichtet.“ Damit benennst du das Problem und die Spoilergrenze. Möchtest du eine Komplettlösung, sag das. Die helfende Person sollte dich weder zuerst ein Müheritual absolvieren lassen noch Freizeit in eine Prüfung verwandeln.',
          'Koedinger und Aleven (2007) untersuchten Experimente mit Cognitive Tutors und beschrieben das ungelöste Gleichgewicht zwischen Informationen geben und zurückhalten, um Lernen zu unterstützen. Ihr Hilfedilemma betrifft Unterrichtsumgebungen, nicht Umgangsformen im Puzzlechat. Es liefert eine nützliche Analogie: Mehr Information ist nicht automatisch die richtige, und alles zurückzuhalten ist nicht automatisch hilfreich.',
          'Erlaubnis kann sich ändern. Wer einen sanften Hinweis wollte, möchte später vielleicht den genauen Zug. Wer Gesellschaft wollte, möchte vielleicht allein lösen. Frage an einer natürlichen Pause erneut, statt die erste Vereinbarung als Kontrolle über die Sitzung zu verstehen. Die Person mit dem Puzzle entscheidet weiter, was für einen Nachmittag sie verbringt.',
        ],
      },
      'a-ladder-of-clues': {
        title: 'Eine Hinweisleiter, eine Stufe nach der anderen',
        paragraphs: [
          'Stell dir ein Gleitfeld vor, auf dem ein roter Stein einen Haltepunkt braucht, bevor er mit seinem Tor auf einer Linie liegt. Beginne mit einer Beobachtungsfrage: „Wo stoppt Rot, wenn diese Bahn leer ist?“ Sie verrät keine Zugfolge. Sie bittet darum, eine Regel zu prüfen und eine Folge zu erkennen. Versteht die Person das bereits, wiederhole den Hinweis nicht lauter; frage, ob sie die nächste Stufe möchte.',
          'Ein Richtungshinweis könnte lauten: „Ein anderer Stein könnte als Bremse dienen.“ Ein engerer Hinweis könnte den Bereich nennen: „Schau auf das Teil über der Kreuzung.“ Ein ausdrücklicher Tipp würde einen Zug benennen. Die vollständige Lösung würde die geordnete Folge ab der genannten Stellung liefern. Das ist eine vorgeschlagene Gesprächsleiter, keine Garantie, dass jede Stufe auf jedem Feld gleich mild ist.',
          'Wie viel ein Tipp verrät, hängt vom Puzzle ab. „Nutze den grünen Stein“ kann auf einem kleinen Feld fast alles und auf einem großen sehr wenig verraten. Beschreibe deshalb vor dem Senden die Informationsart: „Ich kann das Teil nennen, wenn du möchtest.“ So kann die Person entscheiden, bevor sie etwas sieht, das sie vermeiden wollte.',
          'Höre nach einem Hinweis auf zu schreiben und lass die Person nachdenken. Ergänze nicht „und dann“, „offensichtlich“ oder eine Pfeilkette, während sie noch überlegt. Unser [Ratgeber zum Lesen eines Felds vor dem ersten Zug](/blog/how-to-read-a-puzzle-before-moving) liefert Fragen, die du ohne Lösung übernehmen kannst. Das Ziel ist eine nützliche nächste Beobachtung, kein Beweis für die Klugheit der helfenden Person.',
        ],
      },
      'be-specific-without-judging': {
        title: 'Konkret zum Puzzle, freundlich zur Person',
        paragraphs: [
          '„Denk mehr nach“ ist weder ein Hinweis noch eine brauchbare Diagnose. „Du schaust auf das Falsche“ kann stimmen, lässt aber offen, was richtig wäre. Besser benennt ein Kommentar eine prüfbare Folge: „Wenn du dieses Hindernis jetzt bewegst, was stoppt dann den langen Stein?“ Das lenkt Aufmerksamkeit, ohne eine Stellung zum Urteil über Fähigkeiten zu machen.',
          'Shute (2008) untersuchte formatives Feedback und beschrieb die Bedeutung unterstützender, konkreter Informationen. Zugleich betonte sie, dass ihre Wirksamkeit von Lernenden und Aufgabe abhängt. Das ist eine breite pädagogische Übersicht, kein Beleg dafür, dass ein bestimmter Satz Puzzleleistungen verbessert. Wir wenden die praktische Unterscheidung zwischen Aufgabeninformation und Personenbewertung an: Erkläre die Einschränkung, statt jemanden unvorsichtig oder langsam zu nennen.',
          'Nützliches Feedback kann auch eine gute Idee bestätigen. „Ja, die Türöffnung zu erhalten ergibt Sinn; das Problem ist der Haltepunkt danach“ zeigt, welcher Teil der Überlegung bestehen bleibt. Es ersetzt nicht den ganzen Plan, wenn nur eine Annahme Aufmerksamkeit braucht. Kennst du die Antwort nicht, sag das und erkundet gemeinsam, statt eine Vermutung als geprüfte Lösung darzustellen.',
          'Greife nicht nach dem Gerät, bewege kein Teil ungefragt und kommentiere nicht über der Schulter jeden Gedanken. Diese Gewohnheiten nehmen die Zeit, in der die Person Hinweis und Feld verbinden könnte. Unser [Ratgeber zu freundschaftlichem Wettbewerb](/blog/friendly-competition-with-friends) betont ähnlich, das gemeinsame Erlebnis zu vereinbaren. Hilfe ist eine soziale Absprache ebenso wie ein Informationsaustausch.',
        ],
      },
      'give-the-solver-space': {
        title: 'Gib Raum, den Hinweis zu nutzen',
        paragraphs: [
          'Eine Person kann einen Hinweis lesen und trotzdem Zeit brauchen, um seine Bedeutung zu erkennen. Bitte sie, ihre Überlegungen zu beschreiben, wenn sie Gesellschaft möchte. Verlange aber keine richtige Erklärung vor dem nächsten Tipp. „Ich glaube, Blau muss stehen bleiben“ kann genügen, um eigene Erkundung wieder anzustoßen. Manchmal ist es schon hilfreich, die Sackgasse zu verstehen, bevor der Ausgang gefunden ist.',
          'Aleven et al. (2016) untersuchten das Hilfesuchen mit intelligenten Lernsystemen. Sie berichteten, dass Feedback im Unterricht zu bewussterer Hilfenutzung führte, auch nachdem das Feedback endete, aber keine besseren fachlichen Lernergebnisse erzeugte. Diese Grenze zählt: Sinnvolle Hilfenutzung und bessere Leistung sind getrennte Aussagen. Wir können nicht versprechen, dass abgestufte Hinweise jemanden zu einem besseren Puzzler machen.',
          'Iacovides et al. (2015) untersuchten Verständnis und Beteiligung in Spielen anhand mehrerer Fallstudien. Ihre Berichte betonten, wie wichtig das Gefühl eigener Verantwortung für Fortschritt war. Das stützt einen redaktionellen Grund, Entscheidungen bei der spielenden Person zu lassen. Es belegt nicht, dass ein verratener Zug Freude zerstört. Wer die ganze Antwort möchte, erhält damit vielleicht genau das, was die Sitzung angenehm hält.',
          'Hilft der Hinweis nicht, prüfe, ob ihr dieselbe Feldstellung anschaut. Ein Bild vor mehreren Zügen kann einen richtigen Tipp bedeutungslos machen. Bestimme aktuelle Stellung, Spiel oder Level und geänderte Regeln, bevor du eine Folge sendest. Ihr könnt auch zu einem neuen [täglichen OutBrick-Feld](/daily) zurückkehren und mit Erlaubnis als gemeinsame Aktivität nur Beobachtungsfragen üben.',
        ],
      },
      'public-spoilers-and-clean-finishes': {
        title: 'Öffentliche Spoiler hinter eine klare Grenze setzen',
        paragraphs: [
          'Im Gruppenchat ist die fragende Person nicht die einzige mögliche Leserin. Stelle Puzzlename und Datum vor jede Antwort und nutze vorhandene Spoilerfunktionen des Dienstes. Gibt es keine, halte die Lösung aus der öffentlichen Vorschau und frage, ob eine private Antwort gewünscht ist. Sende kein unmarkiertes Bild eines gelösten Felds: Ein Bild verrät die Antwort, bevor jemand die Warnung darunter liest.',
          'Nutze eine klare Kennzeichnung wie „Kleiner Hinweis: Haltepunkte“ oder „Vollständige Lösung folgt“. Setze den verräterischen Zug nicht in Titel, Mitteilungstext oder erste Zeile über der Warnung. Stelle klar, ob die Folge auf dem ursprünglichen Feld oder der geteilten Stellung beginnt. Dieses kleine Detail verhindert, dass eine hilfreiche Antwort für andere zur verwirrenden Anleitung wird.',
          'Frage nach dem Abschluss, ob die Person besprechen möchte, wie der Hinweis geholfen hat. Vielleicht möchte sie den Wendepunkt rekonstruieren oder lieber weitermachen. Verrätst du versehentlich mehr als beabsichtigt, erkenne es kurz an und ändere beim nächsten Mal den Ansatz. Du musst den Spoiler nicht damit verteidigen, die Lösung sei offensichtlich gewesen.',
          `Ihr könnt die Gleitregel gemeinsam auf unseren [Browser-Spielfeldern](/play) üben oder nach Prüfung des aktuellen Eintrags [OutBrick im App Store herunterladen](${appStoreUrl('journal-hint-etiquette')}). Für eine Spielfrage oder unklares Verhalten bietet die [Supportseite](/support) den bestehenden Kontaktweg. Freunde dürfen Gesellschaft, einen Anstoß oder eine Antwort wünschen. Gute Hinweis-Etikette macht diese Wahl leicht auszusprechen und leicht zu respektieren.`,
        ],
      },
    },
    pullQuote:
      'Das Ziel ist eine nützliche nächste Beobachtung, kein Beweis für die Klugheit der helfenden Person.',
    faqs: [
      {
        question: 'Wie bitte ich um einen Puzzlehinweis ohne Spoiler?',
        answer:
          'Sage, wie viel Hilfe du möchtest und was du versucht hast, etwa „eine Beobachtungsfrage, nicht den nächsten Zug“. Bitte darum, vor einem deutlicheren Hinweis zu warten.',
      },
      {
        question: 'Was sollte ich vor einem Hinweis tun?',
        answer:
          'Frage um Erlaubnis und vereinbart, ob eine Frage, ein kleiner Tipp, ein direkter Zug oder eine vollständige Lösung gewünscht ist. Gib eine begrenzte Antwort und lass die Person über mehr entscheiden.',
      },
      {
        question: 'Ist ein Hinweis Schummeln?',
        answer:
          'Beim alleinigen Spielen in der Freizeit wählst du selbst, wie viel Hilfe du möchtest. Bei einem Wettbewerb oder einer gemeinsamen Herausforderung vereinbart vorher die Regeln und beschreibt genutzte Hilfe ehrlich.',
      },
      {
        question: 'Wie teile ich eine Tagespuzzle-Lösung rücksichtsvoll?',
        answer:
          'Nenne Puzzle und Datum, kennzeichne die Antwort als Spoiler und nutze vorhandene Spoilerfunktionen. Halte verräterische Züge und gelöste Bilder aus Titeln, Vorschauen und ungeschützten Anfangszeilen heraus.',
      },
    ],
  },
};
