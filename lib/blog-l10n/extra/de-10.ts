import type { ExtraGuides } from '../../i18n/blog';
import { appStoreUrl } from '../../app-store-url.ts';
export const de10: ExtraGuides = {
  'puzzle-walkthrough-board-mismatch': {
    title: 'Warum eine Puzzlelösung nicht zu deinem Feld passt',
    dek: 'Prüfe Spiel, Version, Modus und Ausgangsstellung, bevor du den nächsten Zug kopierst. Eine Levelnummer allein bestimmt keine Puzzlelösung.',
    imageAlt:
      'Eine OutBrick-Spielaufnahme in einem Handy mit bunten Steinen und zwei Steinfreunden vor einem marineblauen Raster',
    tags: [
      'Puzzlespiele',
      'Problemlösen',
      'Schiebepuzzles',
      'OutBrick in der Praxis',
      'Puzzlehinweise',
    ],
    intro:
      'Das Video sagt Level 48. Dein Spiel sagt Level 48. Doch der erste Zug schiebt einen blauen Stein in eine freie Bahn, die auf deinem Bildschirm besetzt ist. Du wiederholst den Anfang, versuchst den Zug erneut und fragst dich, was du übersehen hast. Vergleiche vor einem weiteren Versuch die beiden Felder. Eine Levelnummer ist eine Kennzeichnung innerhalb eines bestimmten Spiels und einer bestimmten Version; sie ist keine vollständige Beschreibung eines Puzzles. Dieser Ratgeber zeigt einen praktischen Weg, eine unpassende Anleitung zu erkennen, den ersten Unterschied zu finden und eine nützliche Idee zu retten, ohne so zu tun, als müsste die gezeigte Zugfolge funktionieren.',
    keyTakeaways: [
      'Gleiche genaues Spiel, Modus, Version und vollständige Ausgangsstellung ab, bevor du einer Zugfolge vertraust.',
      'OutBricks veröffentlichte Versionsgeschichte enthält veränderte Anordnungen und umsortierte Felder; eine ältere Levelkennzeichnung kann daher zu einem anderen Puzzle führen.',
      'Scheitert eine Folge, stoppe beim ersten Unterschied. Behalte eine passende Planungsidee oder bitte um Hilfe für dein tatsächliches Feld.',
    ],
    sections: {
      'identify-the-right-game': {
        title: 'Prüfe zuerst, ob du dasselbe Spiel anschaust',
        paragraphs: [
          'Beginne mit vollständigem App-Namen und Entwickler statt dem Vorschaubild eines Suchergebnisses. Viele mobile Puzzles nutzen Blöcke, farblich passende Ausgänge und ähnliche Titelwörter. Ein Video „Block Sort Level 48“ kann zu einer ganz anderen App gehören. Öffne die Store-Seite über die Spieleinstellungen oder vergleiche den Entwickler mit dem Eintrag. Ähnliche Grafik ist ein Grund, genauer hinzusehen, kein Beleg für identische Regeln.',
          'Prüfe danach, was gesteuert wird. Bewegt ein Block sich so weit wie möglich, um ein Feld oder entlang eines gezogenen Wegs? Schiebt eine Figur Kisten? Muss eine Farbe ein Tor erreichen, ein Zielfeld besetzen oder eine Reihe vervollständigen? Nach OutBricks zentraler Regel gleitet ein Stein, bis etwas ihn stoppt, und verlässt das Feld durch ein Tor seiner Farbe. Unser [Ratgeber zum Lösen von Schiebepuzzles](/blog/how-to-solve-sliding-block-puzzles) erklärt dieses Bewegungsmodell.',
          'Hearn und Demaine (2005) untersuchten formale Bewegungsprobleme mit unterschiedlichen Einschränkungen, darunter Schiebeblöcke und Sokoban. Ihre theoretischen Ergebnisse betreffen verallgemeinerte Problemfamilien, nicht die Schwierigkeit deiner konkreten App. Die nützliche Unterscheidung hier ist enger: Erlaubte Bewegung und Ziel gehören zur Identität eines Puzzles. Eine Folge für ein reines Schubspiel funktioniert nicht notwendigerweise in einem Gleit-und-Stopp-Spiel.',
          'Schreibe vor der nächsten Suche eine kurze Identifikation: App-Name, Entwickler, Modus und Level. Ergänze Plattform und sichtbare App-Version, falls du sie findest. Das ist unsere Empfehlung zur Fehlersuche, keine durch die Arbeit getestete Checkliste. Sie hilft Autoren und anderen Spielenden, dein Puzzle ohne Raten anhand eines beschnittenen Bilds zu verstehen.',
        ],
      },
      'check-version-mode-and-date': {
        title: 'Eine vertraute Nummer kann ein verändertes Feld verbergen',
        paragraphs: [
          'Das Veröffentlichungsdatum einer Anleitung liefert Kontext, ist aber nicht dasselbe wie die aufgenommene App-Version. Jemand kann eine ältere Aufnahme hochladen oder den Titel ändern, ohne das Video zu ersetzen. Suche in Beschreibung, Kommentaren oder sichtbaren Einstellungen nach einer Version. Fehlt sie, bleibt dieses Detail unbekannt. Nimm nicht allein wegen unterschiedlicher Daten an, die Anleitung sei falsch oder deine Installation fehlerhaft.',
          'OutBrick liefert einen konkreten Grund zur Prüfung. Die [Versionshinweise zu 4.2](/whats-new#4-2) berichten, dass 1.301 der 2.000 Felder neue Anordnungen erhielten. Das ist eine historische Änderung, keine Behauptung, 4.2 sei die neueste Version. Der aktuelle [App-Store-Eintrag mit Versionsgeschichte](https://apps.apple.com/us/app/outbrick-block-sort-puzzle/id6807997465), geprüft am 30. September 2026, zeigt 4.5 und weitere Neubauten sowie Umordnungen von Feldern (Hamdi, n.d.). Die Nummer einer alten Aufnahme kann deshalb zur Bestimmung der heutigen Anordnung unzureichend sein.',
          'Prüfe auch den Modus. Ein Feld aus dem Hauptfortschritt, ein Browser-Beispiel und ein datiertes Tagespuzzle sind nicht austauschbar, nur weil sie Farben teilen. OutBricks [tägliches Browser-Feld](/daily) rotiert einen festen Bestand nach UTC-Datum. Vergleichst du eine Tagesfeld-Aufnahme, behalte ihr Datum beim Bild. Das beschreibt die aktuelle Website-Umsetzung, keine Zusage identischen Verhaltens nativer Tagesfunktionen.',
          'Diese Beobachtungen belegen weder individuelle Zufallsanordnungen noch Experimente oder versteckte persönliche Schwierigkeitseinstellungen. Ein sichtbarer Unterschied verrät nicht, welche dieser Erklärungen existiert. Nutze eine dokumentierte Erklärung, wenn sie passt, und lass unbelegte Erklärungen offen. Unser Artikel zur [Prüfung der Spielfeldsammlung](/blog/verifying-2000-sliding-block-boards) behandelt Lösbarkeit; ein lösbares Feld und eine passende Anleitung sind getrennte Fragen.',
        ],
      },
      'compare-the-complete-starting-state': {
        title: 'Vergleiche den vollständigen Ausgangszustand',
        paragraphs: [
          'Pausiere die Anleitung vor dem ersten Zug und vergleiche sie mit deinem unberührten Feld. Würde ein Neustart Fortschritt oder einen Versuch kosten, prüfe erst die Spielregeln, statt automatisch zurückzusetzen. Ein Bild deines aktuellen Zustands hilft weiterhin; kennzeichne es „nach drei Zügen“, statt es als Anfang auszugeben. Eine Anleitung kann ihre Eröffnungsfolge nicht aus einer anderen Zwischenstellung reproduzieren.',
          'Prüfe Umriss, Ziele und dann Teile. Stimmen Maße und gesperrte Felder? Liegen farbige Tore an denselben Rändern? Hat jeder Stein dieselbe Form, Ausrichtung und Position? Vergleiche vorhandene Schlüssel, Schlösser und weitere Hindernisse. Vergleiche zuletzt den freien Raum. Ein leeres Feld gehört zur Anordnung, weil es einen Weg oder Haltepunkt bestimmen kann.',
          'Ito et al. (2023) behandeln bei der Analyse formaler Kugel- und Wassersortiermodelle geordnete Inhalte, Behälterkapazität und leere Behälter als Teile einer Instanz. Ihr Ergebnis betrifft diese Stapelmodelle, nicht OutBrick. Es bietet eine nützliche Parallele: Ein Puzzle ist genauer bestimmt als durch seine sichtbare Farbpalette. Zwei Röhrchenpuzzles mit gleichen Farben können andere nächste Gießzüge erlauben, wenn Inhaltsreihenfolge oder freie Kapazität abweichen. Prüfe bei einem Schiebepuzzle stattdessen den räumlichen Zustand nach seinen eigenen Regeln.',
          'Nutze stabile Bezeichnungen, wenn jemand Bilder vergleichen soll. Beschreibe „den waagerechten blauen Stein nahe dem Tor unten links“ statt „den blauen da“, oder vereinbart Reihen von oben und Spalten von links. Larkin und Simon (1987) analysierten, wie Darstellungen trotz gleichwertiger Information Such- und Schlussfolgerungsanforderungen verändern können. Halte bei dieser Anwendung beide Felder sichtbar und nutze dieselben Ortsangaben, damit du Unterschiede prüfst, statt ein Bild im Gedächtnis zu halten.',
        ],
      },
      'stop-at-the-first-divergence': {
        title: 'Stoppe, wo die Folge erstmals abweicht',
        paragraphs: [
          'Stimmen die Ausgangsstellungen, spiele die gezeigten Handlungen einzeln nach. Vergleiche sofort das Ergebnis, einschließlich Haltepunkt des bewegten Steins und verbleibender Teile. Der erste Unterschied verrät mehr als der zehnte. Weiterspielen erzeugt eine neue Anordnung; spätere Richtungen können deshalb an Gründen scheitern, die der frühe Unterschied eingeführt hat.',
          'Eine Aufnahme bewegt beispielsweise einen roten Stein nach unten, bis Blau ihn stoppt. Auf deinem Feld ist Blau schon durch sein Tor gegangen. Rot fährt nun weiter, sodass „Rot nach unten“ nicht mehr den gezeigten Zustand erzeugt. Die Anweisung ist oberflächlich gleich, ihre unterstützende Bedingung fehlt. Das ist ein Beispiel zur Gleitregel, keine Diagnose eines bestimmten veröffentlichten Levels.',
          'Unterscheide einen abgelehnten Zug von einem unerwarteten Ergebnis. Wird der Zug abgelehnt, prüfe Stein, Richtung und beteiligtes Hindernis oder Tor erneut. Gelingt er, stoppt aber anderswo, vergleiche die Stoppbedingung. Stimmen Anordnung und Handlung und verhält es sich trotzdem anders, halte diese enge Beobachtung für den Support fest. Erkläre das Feld nicht für unmöglich, nur weil du einem Video nicht folgen kannst.',
          'Eine hilfreiche Nachricht enthält, soweit bekannt, App-Version, Modus, Level oder Datum, zwei Bilder und die früheste abweichende Handlung. Entferne unbeteiligte persönliche Informationen aus Bildern. Sage, ob du einen kleinen Hinweis oder eine vollständige Folge möchtest; unser [Ratgeber zu Hinweisen ohne Spoiler](/blog/puzzle-hints-without-spoilers) zeigt beide Bitten. Die [Supportseite](/support) ist ein sinnvoller erster Anlaufpunkt vor einem Bericht über den bestehenden Kontaktweg.',
        ],
      },
      'keep-the-idea-not-the-sequence': {
        title: 'Behalte die Planungsidee und wähle die gewünschte Hilfe',
        paragraphs: [
          'Eine unpassende Anleitung zeigt vielleicht trotzdem einen nützlichen Zusammenhang: erst einen Stopper setzen, dann einen langen Stein über eine Bahn schicken, oder einen blockierten Weg freimachen, bevor du den nutzenden Stein freigibst. Frage, was jeder Zug bewirkt und welche Bedingungen er verlangt. Fehlen diese auf deinem Feld, erzwinge den Zug nicht. Eine Planungsidee braucht eine neue Prüfung am tatsächlichen Zustand.',
          'Chi et al. (1989) untersuchten anhand lauten Denkens, wie Studierende ausgearbeitete Mechanikbeispiele lernten. Erfolgreichere Studierende erklärten Verbindungen zwischen Handlungen und Grundprinzipien und überwachten ihr Verständnis. Das war eine Physik-Lernstudie, kein Test von Puzzlelösungen. Unsere bescheidene Anwendung ist, den Zweck eines gezeigten Zugs vor seiner Übernahme zu erklären, statt anzunehmen, dieselbe Richtung reproduziere dieselbe Wirkung.',
          'Du musst auch nicht aus jedem Video eine Lektion ziehen. Wolltest du eine direkte Lösung und das Feld weicht ab, suche ein passendes Beispiel oder bitte mit dem genauen Bild um Hilfe. Wolltest du die Entdeckung erhalten, schließe die Folge und frage nur nach relevantem Bereich oder Abhängigkeit. Keine Vorliebe macht dich besser oder schlechter. Hilfe sollte die tatsächlich gestellte Frage beantworten.',
          `Du kannst das Prüfen von Bewegungsbedingungen auf [OutBricks Browser-Feldern](/play) üben und mit den angezeigten Bedienelementen zurücksetzen oder rückgängig machen. Für das installierte Spiel [lade OutBrick im App Store herunter](${appStoreUrl('journal-walkthrough-mismatch')}) und prüfe aktuelle Anforderungen und Kaufinformationen. Die App enthält Leben und freiwillige Belohnungswerbung; das Website-Beispiel beweist nicht jede native Funktion.`,
          'Produktquelle: Hamdi, M. (n.d.). OutBrick: Block Sort Puzzle [Mobile app]. App Store. Abgerufen am 30. September 2026 über den oben verlinkten Eintrag. Die Forschungsquellen unten stützen die Unterscheidungen dieses Ratgebers; keine hat OutBrick bewertet oder diese Fehlercheckliste validiert.',
        ],
      },
    },
    pullQuote:
      'Eine Levelnummer ist eine Kennzeichnung innerhalb eines bestimmten Spiels und einer bestimmten Version; sie ist keine vollständige Beschreibung eines Puzzles.',
    faqs: [
      {
        question: 'Warum zeigt eine Lösung beim selben Level ein anderes Feld?',
        answer:
          'Prüfe zuerst gleiche App, gleichen Modus und gleichen Ausgangszustand. Eine Version kann Anordnungen ändern oder Felder umsortieren; OutBricks veröffentlichte Geschichte dokumentiert das. Ein Unterschied allein belegt aber weder Zufallsanordnungen noch einen Fehler.',
      },
      {
        question:
          'Sollte ich nach einem abweichenden Zug weiter der Lösung folgen?',
        answer:
          'Pausiere beim ersten abweichenden Ergebnis und vergleiche die Zustände. Spätere Richtungen können von einem Haltepunkt oder freien Feld abhängen, das bei dir nicht mehr vorhanden ist.',
      },
      {
        question:
          'Bedeutet eine unpassende Lösung, dass mein OutBrick-Feld unmöglich ist?',
        answer:
          'Nein. Eine Anleitung für eine andere Anordnung bestimmt nicht die Lösbarkeit deines Felds. OutBricks veröffentlichte Angaben zur Feldprüfung betreffen Lösbarkeit, nicht die Übereinstimmung eines bestimmten externen Videos mit deiner Version.',
      },
      {
        question: 'Was sollte ich bei einer Bitte um Hilfe angeben?',
        answer:
          'Nenne App-Name, Modus, Level oder Tagesdatum, soweit bekannt Version, ein klares Bild und die früheste abweichende Handlung. Sage, ob du einen kleinen Hinweis oder die ganze Lösung möchtest, und entferne unbeteiligte persönliche Informationen aus Bildern.',
      },
    ],
  },
};
