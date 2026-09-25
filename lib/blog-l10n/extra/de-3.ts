import type { ExtraGuides } from '../../i18n/blog';

/** Journal batch 3 (lib/journal-batches/batch-3.ts) in this language. See lib/blog-l10n/de.ts for the house style. */
export const de3: ExtraGuides = {
  'colour-blindness-in-games': {
    title: 'Farbenblindheit in Spielen: wie häufig, was hilft',
    dek: 'Etwa jeder zwölfte Mann europäischer Herkunft hat eine Rot-Grün-Schwäche. Was das beim Spielen bedeutet und welche Einstellungen und Designs helfen.',
    imageAlt: 'Moss und Flurry links und rechts von einem Handy, das den Abschnitt Bamboo Springs auf der Karte der OutBrick-Reise zeigt, umgeben von schwebenden türkisen, orangen und roten Steinen',
    tags: ['Farbenblindheit', 'Rot-Grün-Schwäche', 'Barrierefreiheit', 'inklusives Design', 'Puzzlespiele'],
    intro: 'In jedem Raum mit fünfundzwanzig Männern europäischer Herkunft sehen wahrscheinlich zwei Rot und Grün anders als alle anderen. Die meisten Spiele werden trotzdem noch so gestaltet, als gäbe es sie nicht. Dieser Leitfaden erklärt, was eine Farbsehschwäche eigentlich ist, wie oft sie vorkommt, was sie für jemanden bedeutet, der gerade spielt, und was hilft: sowohl die Einstellungen, die du heute schon einschalten kannst, als auch die Designentscheidungen, die sie überflüssig machen.',
    keyTakeaways: [
      'Eine angeborene Rot-Grün-Schwäche betrifft etwa 8 % der Männer und 0,4 % der Frauen europäischer Herkunft sowie 4–6,5 % der chinesischen und japanischen Männer.',
      'Es bedeutet selten, „grau zu sehen“. Die meisten Betroffenen sehen reichlich Farbe, verwechseln aber bestimmte Paare und finden Dinge langsamer, wenn Farbe der einzige Hinweis ist.',
      'Die wirksamste Lösung ist ein Design, das sich nie allein auf Farbe verlässt. Symbole und Muster helfen am meisten, wenn sie so einfach sind, dass man sie ohne Übung lesen kann.',
    ],
    sections: {
      'how-common': {
        title: 'Wie häufig Farbenblindheit wirklich ist',
        paragraphs: [
          'Wenn Forschende eine Zahl brauchen, greifen die meisten zu Jennifer Birchs Übersichtsarbeit von 2012 über große Zufallserhebungen in der Bevölkerung. In europäisch-kaukasischen Bevölkerungen haben etwa 8 % der Männer und etwa 0,4 % der Frauen eine angeborene Rot-Grün-Schwäche. Bei Männern chinesischer und japanischer Herkunft ist der Anteil niedriger, zwischen 4 % und 6,5 %, und Birch merkt an, dass neuere Erhebungen auf einen steigenden Wert bei Männern afrikanischer Herkunft und in von Migranten besiedelten Regionen hindeuten. Die Unterschiede führt sie auf Gründereffekte und genetische Drift zurück, nicht auf natürliche Selektion.',
          'Der Unterschied zwischen Männern und Frauen hat eine einfache Ursache. Wie Simunovic in seiner Übersichtsarbeit in Eye erklärt, werden die häufigen Formen rezessiv über das X-Chromosom vererbt: Ein Mann braucht eine betroffene Kopie, eine Frau zwei. Deshalb kann auch eine Mutter mit normalem Farbsehen die Schwäche an ihren Sohn weitergeben. Bei einem Spiel, das Millionen Menschen spielen, ergeben diese Prozentsätze eine sehr große Zahl von Spielerinnen und Spielern, die einer farbcodierten Oberfläche unter anderen Voraussetzungen begegnen.',
        ],
      },
      'what-it-is-like': {
        title: 'Wie es sich anfühlt: nicht grau, sondern verwechselbar',
        paragraphs: [
          'Das verbreitete Bild von Farbenblindheit, eine Welt in Schwarz-Weiß, beschreibt eine sehr seltene Form. Die meisten Menschen mit Farbsehschwäche sind anomale Trichromaten: Sie haben alle drei Zapfentypen, aber einer reagiert anders, sodass manche Farben, die für andere klar verschieden sind, für sie gleich aussehen. Dichromaten, denen ein Zapfentyp fehlt, haben ein noch engeres Spektrum. Rot, Grün, Braun und Orange sind die klassischen Verwechslungen bei den häufigen Rot-Grün-Formen; eine Blau-Gelb-Schwäche gibt es auch, sie ist aber weit seltener.',
          'Barry Coles lange Übersichtsarbeit über die praktischen Nachteile ist die nützlichste Beschreibung dessen, was das im Alltag bedeutet. Fast alle Menschen mit abweichendem Farbsehen, abgesehen von einigen leicht Betroffenen, berichten von Problemen mit Farbe im Alltag. Sie haben Schwierigkeiten, wenn Farbe als Code dient, sie können unzuverlässig sein, wenn ein Farbname zur Kennzeichnung benutzt wird, und sie sind bei der visuellen Suche langsamer und weniger erfolgreich, wenn Farbe das Ziel markiert. Lies diesen letzten Befund mit einem Spiel im Kopf: „Finde das rote Teil“ ist genau die Art Aufgabe, die viele Puzzles stellen.',
          'Das erklärt auch, warum die Menschen um einen farbenblinden Spieler herum das Problem so oft unterschätzen. Flatla und Gutwin bauten Simulationen, die auf der individuell gemessenen Farbwahrnehmung jeder Person beruhten statt auf einem allgemeinen Modell, und ließen dann Paare aus Freunden oder Verwandten über Alltagsbilder sprechen, die durch diese Simulation zu sehen waren. Die personalisierten Versionen waren genauer als die Standardmodelle, und in den Gesprächen kamen Einzelheiten aus dem Erleben der Person zur Sprache, die ihr Gegenüber nie verstanden hatte.',
        ],
      },
      'where-games-go-wrong': {
        title: 'Wo Spiele typischerweise danebenliegen',
        paragraphs: [
          'Manche Muster tauchen immer wieder auf. Lebensbalken, die von Grün zu Rot wechseln. Teamfarben in Rot und Grün. Kartenmarkierungen, Seltenheitsstufen und Beute, die nur nach Farbton sortiert sind. Match- und Sortierpuzzles, deren Teile sich durch nichts als die Farbe unterscheiden. Und, weniger offensichtlich, Rückmeldungen für „richtig“ und „falsch“, die grün oder rot aufblinken, ohne dass ein Symbol, ein Ton oder eine Bewegung sie unterstützt.',
          'Die Lösung, zu der die meisten Spiele greifen, ist ein Filter: ein Menü, das die ganze Palette für Protanopie, Deuteranopie oder Tritanopie verschiebt. Filter helfen manchen Spielern, aber sie haben Grenzen. Sie setzen voraus, dass alle mit derselben Bezeichnung gleich sehen, was Flatla und Gutwins Arbeit widerlegt, und sie können den Rest des Spiels seltsam aussehen lassen. Besser ist es, Farbe zu einem Signal unter mehreren zu machen, sodass kein Filter nötig ist. Warum das grundsätzlich richtig ist, haben wir in [warum Farbe in einem Puzzle nie der einzige Hinweis sein sollte](/blog/color-shape-accessibility) dargelegt; die Forschung zu Mustern zeigt, wie man es gut macht.',
        ],
      },
      'patterns-that-work': {
        title: 'Was die Forschung über Symbole und Muster sagt',
        paragraphs: [
          'Geddes, Flatla, Tigwell und Peiris testeten Farbmuster, also Überlagerungen, die eine Farbe als Form oder Textur codieren, in einer Online-Studie mit Menschen mit Farbsehschwäche. Frühere Musterschemata hatten im Labor funktioniert, waren aber schwer zu lernen. Das Team verglich ein veröffentlichtes Schema mit zwei neuen Entwürfen in drei Aufgaben: eine Farbe auswählen, einem Farbverlauf folgen und sortieren. Kein einzelnes Muster gewann überall. Eines, das jede Farbe in ein einfaches Symbol verwandelte, half beim Auswählen und Sortieren, tat sich aber mit Verläufen schwer; ein gemischter Entwurf half bei jeder Aufgabe ein wenig.',
          'Die Lehre für Puzzle-Designer ist klar: Wenn es darum geht, unterschiedliche Teile an unterschiedliche Orte zu sortieren, ist ein einfaches, einprägsames Symbol pro Farbe das richtige Werkzeug, und es sollte sich auf einen Blick erfassen lassen, statt entschlüsselt werden zu müssen. Diesen Weg sind wir bei OutBrick gegangen. Der Farbenblind-Modus ist standardmäßig an und prägt jedem Stein und dem Tor, zu dem er gehört, ein eigenes Symbol auf, sodass niemand um Hilfe bitten muss, um zwei Teile auseinanderzuhalten. Wo er an Grenzen stößt, wollen wir trotzdem wissen; auf der [Seite zur Barrierefreiheit](/accessibility) steht, wie du es uns sagen kannst.',
        ],
      },
      'player-tips': {
        title: 'Tipps für farbenblinde Spielerinnen und Spieler',
        paragraphs: [
          'Wenn du weißt oder vermutest, dass du eine Farbsehschwäche hast, machen ein paar Gewohnheiten Spiele leichter. Keine davon setzt eine Diagnose voraus, auch wenn ein Optiker dich schnell testen kann, und der NHS bietet einen klaren [Überblick über Farbsehschwächen](https://www.nhs.uk/conditions/colour-vision-deficiency/), falls du die Hintergründe wissen willst. Simunovics Übersichtsarbeit merkt außerdem an, dass getönte Gläser, die als Hilfe bei Farbenblindheit verkauft werden, bei bestimmten Aufgaben helfen mögen, aber kein normales Farbunterscheidungsvermögen herstellen. Begegne ihnen also mit etwas Skepsis.',
        ],
        bullets: [
          'Öffne vor dem Spielen das Menü für Barrierefreiheit oder Anzeige eines neuen Spiels und such nach einem Farbenblind-Modus, der Symbole hinzufügt, statt nur die Palette zu ändern.',
          'Schalte auf iPhone und iPad unter Einstellungen, Bedienungshilfen, Anzeige & Textgröße die Option „Ohne Farben unterscheiden“ ein. Gut gemachte Spiele berücksichtigen sie.',
          'Probier im selben Menü die Farbfilter, wenn ein bestimmtes Spiel keine Optionen bietet, aber rechne damit, dass sie alles auf dem Bildschirm verändern, nicht nur das Spiel.',
          'Präg dir bei Sortierpuzzles jedes Teil früh über sein Symbol oder seine Form ein, bevor die Felder voll werden. Die meisten [Strategien für Farbsortier-Puzzles](/blog/colour-sort-puzzle-tips) funktionieren mit Symbolen genauso gut.',
          'Sag den Entwicklern, was wo schiefgelaufen ist. Ein Screenshot des verwirrenden Bildschirms ist mehr wert als ein Absatz Beschreibung.',
        ],
        note: 'Eine Farbsehschwäche kann auch später im Leben durch Augenerkrankungen oder manche Medikamente entstehen. Wenn sich verändert, wie du Farben siehst, lohnt es sich, das einem Optiker oder einer Ärztin gegenüber zu erwähnen.',
      },
    },
    pullQuote: 'Lies diesen letzten Befund mit einem Spiel im Kopf: „Finde das rote Teil“ ist genau die Art Aufgabe, die viele Puzzles stellen.',
    faqs: [
      { question: 'Wie häufig ist Farbenblindheit?', answer: 'Eine angeborene Rot-Grün-Schwäche betrifft etwa 8 % der Männer und 0,4 % der Frauen europäischer Herkunft sowie zwischen 4 % und 6,5 % der chinesischen und japanischen Männer. Eine Blau-Gelb-Schwäche und vollständige Farbenblindheit sind viel seltener.' },
      { question: 'Sehen farbenblinde Menschen schwarz-weiß?', answer: 'Fast nie. Die meisten sehen ein breites Farbspektrum, verwechseln aber bestimmte Paare, am häufigsten Rot, Grün, Braun und Orange, und finden farbcodierte Ziele langsamer.' },
      { question: 'Was ist die beste Farbenblind-Einstellung in einem Spiel?', answer: 'Ein Modus, der jeder Farbe ein Symbol, eine Form oder ein Muster hinzufügt, hilft meist mehr als ein Filter, der nur die Palette verschiebt, denn er funktioniert bei jeder Art und jedem Grad von Farbsehschwäche.' },
      { question: 'Kann ich OutBrick spielen, wenn ich farbenblind bin?', answer: 'Ja. Der Farbenblind-Modus ist standardmäßig an und setzt auf jeden Stein und das passende Tor ein eigenes Symbol, sodass du nach Symbol statt nach Farbton sortieren kannst. Du kannst vorher [ein Feld im Browser ausprobieren](/play).' },
    ],
  },
  'screen-reader-games-iphone': {
    title: 'Spielen mit Screenreader: wie blinde Menschen zocken',
    dek: 'Wie blinde und sehbehinderte Menschen mit VoiceOver am iPhone spielen, was Studien mit blinden Gamern zeigen und was ein Spiel per Gehör spielbar macht.',
    imageAlt: 'Zippy und Moss neben einem Handy, das den Abschnitt Button Factory auf der Karte der OutBrick-Reise zeigt, darüber schweben blaue, orange und türkise Steine',
    tags: ['VoiceOver', 'Barrierefreiheit', 'blinde Gamer', 'Screenreader Spiele', 'inklusives Design', 'Handyspiele'],
    intro: 'Das iPhone ist eine flache Glasscheibe ohne ertastbare Tasten, und trotzdem benutzen viele blinde Menschen jeden Tag eines. Der Grund ist der eingebaute Screenreader. Viele blinde und sehbehinderte Menschen spielen damit auch, von Worträtseln über Kartenspiele bis zu Spielen, die ganz aus Klang bestehen. Hier erfährst du, wie das funktioniert, was Forschende von blinden Gamern selbst gelernt haben und was ein Spiel, das sich per Gehör spielen lässt, von einem unterscheidet, bei dem das nicht geht.',
    keyTakeaways: [
      'VoiceOver macht aus Berührung eine gesprochene, erkundbare Oberfläche: Du ziehst oder wischst, um zu hören, was auf dem Bildschirm ist, und tippst doppelt, um etwas auszulösen.',
      'Blinde Gamer sind eine echte, vielfältige Community. Die Forschung mit ihnen zeigt, dass die Hürden ebenso sozial wie technisch sind.',
      'Ein Spiel ist mit Screenreader spielbar, wenn sich sein Zustand in Worten beschreiben lässt und seine Aktionen nicht von Timing oder genauem Zielen abhängen.',
    ],
    sections: {
      'how-touch-became-accessible': {
        title: 'Wie ein Touchscreen barrierefrei wurde',
        paragraphs: [
          'Ein Bildschirm, an dem es nichts zu ertasten gibt, scheint auf den ersten Blick schlecht zu jemandem zu passen, der ihn nicht sieht. Die Forschung half zu zeigen, dass es anders ist. Slide Rule von Kane, Bigham und Wobbrock, vorgestellt 2008, nutzte Multitouch-Gesten, um ein Touchscreen-Handy ohne Sehen bedienbar zu machen: Wer einen Finger über den Bildschirm gleiten lässt, hört vorgelesen, was darunter liegt, ein zweiter Finger wählt aus, und schnelle Wischer blättern durch Listen. In ihrer Studie mit zehn blinden Teilnehmenden war Slide Rule deutlich schneller als eine tastenbasierte Alternative und wurde von sieben der zehn bevorzugt, führte allerdings zu mehr Fehlern.',
          'Apples VoiceOver, das im Jahr darauf auf das iPhone kam, beruht auf denselben Prinzipien. Berühre eine beliebige Stelle, und VoiceOver spricht das Element unter deinem Finger aus. Wisch nach rechts oder links, um der Reihe nach von Element zu Element zu springen. Tipp irgendwo doppelt, um das zuletzt Angesagte auszulösen. Ein virtuelles Drehrad namens Rotor ändert, was Wischgesten tun, vom Springen zwischen Überschriften bis zum Anpassen der Sprechgeschwindigkeit. Der Bildschirm lässt sich sogar ganz abschalten.',
          'Das Lernen braucht Zeit. Rodrigues und Kollegen begleiteten blinde Menschen durch ihre ersten Wochen mit einem Smartphone-Screenreader und stellten fest, dass es ein langer, anstrengender Prozess war, das Gerät zu beherrschen. Das bestätigte die Sorgen, die die Teilnehmenden schon vorher gehabt hatten. Daran sollte man denken, wenn ein Spiel noch eigene Gesten obendrauf setzt.',
        ],
      },
      'who-plays': {
        title: 'Was blinde Gamer über Spiele sagen',
        paragraphs: [
          'Andrade und Kollegen befragten und interviewten 2019 Gamer mit Sehbehinderung und achteten dabei bewusst auf die Spiele, die sie tatsächlich spielen, statt auf Spiele, die für eine Studie gebaut wurden. Es zeigte sich eine Community mit langer Spielerfahrung, klaren Meinungen über die Branche und einer besonderen Wertschätzung für Spiele, die Komplexität und Barrierefreiheit in Einklang bringen. Viele zogen Spiele mit echtem Tiefgang vereinfachten „barrierefreien“ Spielen vor, die sich bevormundend anfühlten.',
          'Gonçalves, Rodrigues und Guerreiro untersuchten das gemeinsame Spielen. Aus Interviews mit zehn Erwachsenen und zehn Kindern mit Sehbehinderung, 140 Antworten auf eine Umfrage und einer zweiten Umfrage unter sehenden Menschen, die mit ihnen spielen, ergab sich: Blinde Spielerinnen und Spieler spielen eine große Bandbreite an Spielen, aber selten dieselben wie ihre sehenden Freunde und Angehörigen. Das Problem war nicht nur mangelnde Barrierefreiheit. Die Spielwelten der beiden Gruppen überschnitten sich kaum, und so gab es wenig zu teilen. Die Familienseite davon beleuchten wir in [mit den Enkeln spielen](/blog/playing-games-with-grandchildren).',
        ],
      },
      'what-makes-a-game-playable': {
        title: 'Was ein Spiel per Gehör spielbar macht',
        paragraphs: [
          'Die Übersicht von Yuan, Folmer und Harris zur Barrierefreiheit von Spielen beschreibt das Spielen als Kreislauf: Das Spiel präsentiert Reize, der Spieler entscheidet sich für eine Reaktion und macht eine Eingabe. Die meisten Spiele liefern ihre wichtigsten Reize visuell, und ein blinder Spieler braucht dafür einen Ersatz, meist Sprache, Klang oder Vibration. Lässt sich der Reiz in Worte fassen, kann ein Screenreader einen Großteil dieser Arbeit übernehmen. Wenn nicht, muss das Spiel die Last mit seinem eigenen Sounddesign tragen, wie es die Audiospiele für blinde Spieler tun.',
          'Daraus ergibt sich ein nützlicher Test. Rundenbasierte Spiele, Kartenspiele, Wortspiele und viele Puzzles lassen sich vollständig in Worten beschreiben: was wo ist, was sich bewegen kann, was sich verändert hat. Schnelle Actionspiele meist nicht, weil die Informationen schneller eintreffen, als Sprache sie übermitteln kann. Das ist ein weiterer Grund, Puzzles [ohne Uhr](/blog/relaxing-puzzle-games-what-makes-one-calm) zu schätzen: Zuhören braucht Zeit, und ein Timer bestraft das. Forschung von Spiel, Bertel und Heron zu textbasierten Spielen zeigte, dass sogar die Formulierung von Richtungen eine Rolle spielt: Nicht sehende Spieler fanden Richtungen, die sich auf sie selbst beziehen, einfacher und immersiver als Himmelsrichtungen.',
        ],
        bullets: [
          'Jedes Bedienelement hat eine gesprochene Beschriftung, die sagt, was es tut, nicht wie es aussieht.',
          'Der Spielstand, etwa Punkte, verbleibende Züge oder wer am Zug ist, lässt sich jederzeit abfragen.',
          'Veränderungen werden angesagt: ein Teil hat sich bewegt, ein Level ist geschafft, ein Zug ist vorbei.',
          'Nichts hängt von einem Timer ab oder davon, ein kleines, bewegliches Ziel zu treffen.',
          'Das Spiel hält den Fokus nicht in einem Pop-up gefangen und lässt VoiceOver keine veralteten Inhalte vorlesen.',
        ],
      },
      'direct-touch': {
        title: 'Wenn ein Spiel direkte Berührung braucht',
        paragraphs: [
          'Manche Spiele brauchen Gesten, die VoiceOver sonst abfangen würde, zum Beispiel das Ziehen eines Teils über ein Spielfeld. Apples Plattform erlaubt Entwicklern, einen Bereich für direkte Interaktion freizugeben: Berührungen gehen dort direkt an das Spiel, während VoiceOver anderswo weiter vorliest. Apples [VoiceOver-Leitfaden für Designer](https://developer.apple.com/design/human-interface-guidelines/voiceover) erklärt die Grundlagen. Mit Bedacht eingesetzt, lässt direkte Berührung ein Spielfeld greifbar wirken; unbedacht eingesetzt, entsteht ein Bereich, in dem der Screenreader verstummt und der Spieler sich verliert.',
          'Die besten Spiele bieten beides: einen direkten Weg für alle, die ihn nutzen können, und einen schrittweisen Weg, Element für Element, für alle, die das nicht können. OutBrick unterstützt VoiceOver: Wichtige Bedienelemente wie Zugrücknahme, Pause und Schließen tragen beschreibende Beschriftungen, ebenso wichtige Anzeigen zum Spielstand, und weil es nie eine Uhr gibt, verlierst du nichts, wenn du dir Zeit zum Zuhören nimmst. Ein Feld hat ein Zuglimit, keinen Timer, und die erste Zugrücknahme auf jedem Feld ist gratis. Wir wissen, dass ein Schiebepuzzle per Gehör anspruchsvoll ist, und hören lieber von Menschen, die mit VoiceOver spielen, als zu raten; die [Seite zur Barrierefreiheit](/accessibility) nennt, was es heute gibt und wie du uns erreichst.',
        ],
      },
      'getting-started': {
        title: 'Der Einstieg für Spieler und Familien',
        paragraphs: [
          'Wenn VoiceOver neu für dich ist: Apple bietet in den Einstellungen unter Bedienungshilfen, VoiceOver einen Übungsbereich, in dem du die Gesten ausprobieren kannst, ohne dass etwas passiert. Fang mit rundenbasierten, textreichen Spielen an; Kartenspiele, Wortspiele und Quizspiele sind gute erste Schritte. Such dann nach Spielen, deren Beschreibung VoiceOver ausdrücklich nennt, und lies die Bewertungen blinder Spielerinnen und Spieler.',
          'Wenn du sehend bist und mit jemandem spielst, der blind ist, legt die oben genannte Forschung nahe, dass das Hilfreichste ist, Spiele zu finden, die ihr beide spielen könnt, statt Spiele, die jeder für sich spielt. Rundenbasierte Puzzles auf einem gemeinsamen Gerät sind ein einfacher Anfang. Und wenn ein Spiel, das du magst, an den Grundlagen scheitert, sag es dem Entwickler. Viele Teams wissen nichts von einem Problem, bis jemand es ihnen sagt. Für OutBrick ist unsere [Support-Seite](/support) die richtige Anlaufstelle.',
        ],
      },
    },
    pullQuote: 'Ein Spiel ist mit Screenreader spielbar, wenn sich sein Zustand in Worten beschreiben lässt und seine Aktionen nicht von Timing oder genauem Zielen abhängen.',
    faqs: [
      { question: 'Können blinde Menschen auf dem iPhone spielen?', answer: 'Ja. Mit VoiceOver, dem im iPhone eingebauten Screenreader, berühren oder wischen blinde Spieler, um zu hören, was auf dem Bildschirm ist, und tippen doppelt, um etwas auszulösen. Am häufigsten gespielt werden rundenbasierte Spiele, Kartenspiele, Wortspiele und Audiospiele.' },
      { question: 'Welche Spiele funktionieren am besten mit VoiceOver?', answer: 'Spiele, deren Zustand sich in Worten beschreiben lässt und die keine schnellen Reaktionen verlangen: Kartenspiele, Wortspiele, Quizspiele, viele Puzzles und Spiele, die um Klang herum gebaut sind.' },
      { question: 'Was sind Audiospiele?', answer: 'Audiospiele werden über Klang statt über Bilder gespielt und vermitteln das ganze Spiel mit Sprache, räumlichem Klang und Soundeffekten. Viele werden von blinden Spielern für blinde Spieler gemacht.' },
      { question: 'Unterstützt OutBrick VoiceOver?', answer: 'Ja. Wichtige Bedienelemente und Anzeigen zum Spielstand tragen VoiceOver-Beschriftungen, und es gibt keine Uhr, du kannst dir also so viel Zeit nehmen, wie du brauchst. Die [Seite zur Barrierefreiheit](/accessibility) nennt den aktuellen Stand und wie du Probleme meldest.' },
    ],
  },
  'one-handed-games-iphone': {
    title: 'Einhändig spielen am iPhone: motorische Barrierefreiheit',
    dek: 'Was Studien zu Touchscreens und motorischen Einschränkungen über Zielgröße, Gesten und Fehler sagen, und welche iPhone-Einstellungen einhändig helfen.',
    imageAlt: 'Bricko und Moss neben einem Handy, das den Abschnitt Celebration Square auf der Karte der OutBrick-Reise zeigt, darüber schweben türkise, blaue und rosa Steine',
    tags: ['einhändig spielen', 'Barrierefreiheit', 'motorische Einschränkung', 'iPhone Bedienungshilfen', 'inklusives Design'],
    intro: 'Viele Menschen spielen mit einer Hand. Manche immer, wegen einer Behinderung, einer Verletzung oder eines Zitterns. Noch viel mehr tun es zeitweise: mit einem Baby auf dem Arm, stehend im Zug, auf der Seite liegend. Ein Spiel, das unter solchen Bedingungen funktioniert, funktioniert für alle besser. Dieser Beitrag zeigt, was die Forschung zu Touchscreens und motorischen Einschränkungen herausgefunden hat, was das für die Gestaltung von Spielen bedeutet und welche iPhone-Einstellungen heute schon helfen.',
    keyTakeaways: [
      'Touchscreens können Menschen mit motorischen Einschränkungen viel ermöglichen, führen aber zu mehr Fehltipps und versehentlichen Berührungen als eine Maus.',
      'Große Ziele, einfache Gesten und eine nachsichtige Zugrücknahme zählen mehr als jede einzelne Bedienungshilfe.',
      'Zeitdruck ist eine motorische Hürde. Ein Spiel ohne Uhr beseitigt auf einen Schlag eine der schwersten Anforderungen.',
    ],
    sections: {
      'touch-helps-and-hurts': {
        title: 'Touchscreens helfen, und sie stehen auch im Weg',
        paragraphs: [
          'Anthony, Kim und Findlater gingen die Frage auf ungewöhnlichem Weg an: Sie analysierten 187 YouTube-Videos, in denen Menschen mit körperlichen Behinderungen sich selbst beim Benutzen gewöhnlicher Handys und Tablets zeigten. Die Videos zeigten Menschen, die zurechtkamen, oft mit eigenen Anpassungen, etwa indem sie einen Fingerknöchel, einen Stift oder einen anderen Körperteil benutzten und eine Hand zur Stabilisierung auf den Bildschirmrand legten. Touchscreens wurden häufig als befreiend beschrieben. Die Videos zeigten aber auch die wiederkehrenden Probleme: versehentliche Berührungen, Ziele, die zu klein zum Treffen waren, und Gesten, die schwer auszuführen waren.',
          'Eine kontrollierte Laborstudie von Findlater und Kollegen lieferte Zahlen dazu. Sie verglichen einen Touchscreen mit einer Maus bei 32 Personen, davon 16 mit motorischen Einschränkungen im Oberkörper. Der Touchscreen war insgesamt schneller, aber nur die Teilnehmenden ohne Einschränkungen machten darauf weniger Fehler. Teilnehmende mit motorischen Einschränkungen machten auf dem Touchscreen dreimal so viele Tippfehler wie mit der Maus, und ungewollte Berührungen waren häufig. Die Autorinnen und Autoren hoben die empfohlene Mindestgröße für Touch-Ziele für diese Nutzer auf mindestens 18 Millimeter an, deutlich mehr als bei den meisten Handy-Schaltflächen.',
        ],
      },
      'one-thumb': {
        title: 'Was ein Daumen erreichen kann',
        paragraphs: [
          'Auch ohne jede Einschränkung verändert einhändige Bedienung die Regeln. Parhi, Karlson und Bederson untersuchten die Daumenbedienung auf kleinen Touchscreens und fanden, dass Ziele von etwa 9,2 Millimetern für einzelne Tipps und 7,6 Millimetern für Tippfolgen groß genug waren, um weder Tempo noch Genauigkeit zu beeinträchtigen. Darunter stiegen die Fehler. Die Reichweite zählt genauso wie die Größe: Auf einem großen Handy ist die gegenüberliegende obere Ecke die am schwersten erreichbare Stelle für den Daumen der Hand, die das Gerät hält, und genau dort platzieren viele Spiele ihre Pause- und Einstellungsknöpfe.',
          'Trewin, Swart und Pettick untersuchten Smartphones mit Menschen mit eingeschränkter Fingerfertigkeit und fanden sie nützlich und bedienbar, auch wenn Tablets echte Vorteile boten, etwa größere Ziele und eine stabilere Fläche. Sie bemerkten aber auch etwas Unangenehmes: Manche Bedienungshilfen verlangten selbst so viel Fingerfertigkeit beim Einrichten und Benutzen, dass viele Teilnehmende sie nicht nutzen konnten. Barrierefreiheit, die sich nur schwer einschalten lässt, ist nicht viel wert.',
        ],
      },
      'games-specifically': {
        title: 'Was bei Touchscreen-Spielen schiefgeht',
        paragraphs: [
          'Kim und Kollegen entwickelten ein Bewertungsschema für motorische Barrierefreiheit und wandten es auf 72 iPad-Spiele an. Porter und Kientz befragten Spieler mit Behinderungen und Menschen aus der Spielebranche und stellten fest, dass fehlende Kompatibilität mit assistiven Technologien eine häufige Hürde war und Entwicklern oft praktische Anleitung fehlte. Zusammengenommen lassen sich die häufigen Probleme leicht aufzählen: Zeitlimits und Reaktionstests, Mehrfingergesten ohne Alternative, präzises Ziehen, kleine Knöpfe an den Bildschirmrändern und harte Strafen für einen einzigen Fehltipp.',
          'Die Zeit übersehen Designer am häufigsten. Ein Tremor, Spastik oder Erschöpfung machen schnelle, präzise Bewegungen schwerer, und ein Countdown macht daraus ein Scheitern. Ein Zuglimit ist eine andere Art von Beschränkung: Es verlangt Nachdenken, und es ist ihm egal, wie lange deine Hand für den Weg braucht. Warum das ein Spiel auch ruhiger macht, haben wir in [was ein Puzzlespiel wirklich entspannend macht](/blog/relaxing-puzzle-games-what-makes-one-calm) beschrieben.',
        ],
        bullets: [
          'Ziele deutlich über dem Mindestmaß der Plattform, mit Abstand dazwischen.',
          'Wichtige Bedienelemente in Reichweite des Daumens, nicht nur in den oberen Ecken.',
          'Jede Geste mit einem Finger machbar, und keine Geste, die schnell sein muss.',
          'Eine leicht erreichbare Zugrücknahme, die einen Fehltipp ohne Strafe verzeiht.',
          'Keine Timer im normalen Spiel und keine Reaktionstests, die in Menüs versteckt sind.',
        ],
      },
      forgiveness: {
        title: 'Nachsicht ist eine Funktion motorischer Barrierefreiheit',
        paragraphs: [
          'Die meisten Texte über Barrierefreiheit drehen sich darum, die Eingabe richtig hinzubekommen. Genauso wichtig ist, was passiert, wenn eine Eingabe danebengeht, denn bei manchen Spielern passiert das oft. Ein Spiel, das jede verirrte Berührung als verbindlichen Zug wertet, ist für alle mit einem Tremor im Stillen feindselig. Ein Spiel, in dem sich der letzte Zug leicht zurücknehmen lässt, ist freundlich zu allen. Die Richtlinien zur Barrierefreiheit im Web machen einen verwandten Punkt zu [Zeigergesten](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html): Alles, was sich mit einer komplexen Geste erledigen lässt, sollte auch mit einer einfachen gehen.',
          'Hier steht OutBrick. Steine bewegst du mit einem Finger, und ein Schub ist eine kurze, einzelne Bewegung statt eines präzisen Ziehens an eine bestimmte Stelle. Es gibt nirgends eine Uhr. Die erste Zugrücknahme auf jedem Feld ist gratis, sodass dich ein einzelner verrutschter Schub nie ein Feld kosten muss, und auch die Zugrücknahme, die angeboten wird, wenn ein Feld festsitzt, ist gratis. Auf der Apple Watch funktioniert die Digital Crown genauso gut wie Berührung. Nichts davon macht das Spiel für alle barrierefrei, und ein Schiebepuzzle verlangt weiterhin eine gerichtete Geste. Wenn ein Bedienelement schwer zu erreichen ist, bittet dich die [Seite zur Barrierefreiheit](/accessibility) um dein Gerät und den Bildschirm, denn genau dieses Detail lässt uns das Problem beheben.',
          'Es lohnt sich, daran zu denken, wie viele Menschen das betrifft. Designer sprechen manchmal von situativen Einschränkungen: die Mutter mit einem Kind auf dem Arm, der Pendler, der sich an einer Stange festhält, die Spielerin, die sechs Wochen einen Gips am Handgelenk trägt. Keiner von ihnen würde sich als behindert bezeichnen, und alle profitieren von genau denselben Entscheidungen. Wer für den Spieler mit dauerhaftem Tremor gestaltet, bekommt ein Spiel, das der ganze Waggon einhändig spielen kann.',
        ],
      },
      'iphone-settings': {
        title: 'iPhone-Einstellungen, die einhändiges Spielen erleichtern',
        paragraphs: [
          'Apples Bedienungshilfen für die Motorik findest du unter Einstellungen, Bedienungshilfen, Tippen, und einige davon passen gut zu Spielen. Probier sie am besten einzeln aus, denn jede verändert, wie jede App auf deine Finger reagiert. Prüf gerade bei Spielen, ob sie sich mit eingeschalteter Einstellung noch richtig verhalten; ein gutes Spiel sollte davon nichts merken. Auch auf der Apple Watch gibt es eigene Optionen, und den Fall des kleinen Bildschirms behandeln wir in [Puzzlespiele für die Apple Watch](/blog/apple-watch-puzzle-games).',
        ],
        bullets: [
          'Der Einhandmodus holt den oberen Bildschirmteil mit einem Wisch nach unten am unteren Rand in Reichweite deines Daumens.',
          'Touch-Anpassungen können wiederholte Berührungen ignorieren, verlangen, dass eine Berührung kurz gehalten wird, bevor sie zählt, oder die Stelle verwenden, an der dein Finger zuerst oder zuletzt gelandet ist.',
          'AssistiveTouch legt ein schwebendes Menü auf den Bildschirm, das Mehrfingergesten und Hardwaretasten ersetzen kann.',
          'Auf Rückseite tippen macht aus einem Doppel- oder Dreifachtippen auf die Rückseite des Handys eine Abkürzung.',
          'Sprachsteuerung und Schaltersteuerung bieten Möglichkeiten, das Handy ganz ohne Berührung zu bedienen, auch wenn schnelle Spiele damit selten gut funktionieren.',
        ],
      },
    },
    pullQuote: 'Barrierefreiheit, die sich nur schwer einschalten lässt, ist nicht viel wert.',
    faqs: [
      { question: 'Was macht ein Handyspiel gut für einhändiges Spielen?', answer: 'Große Knöpfe mit genug Abstand in Reichweite des Daumens, Gesten, die nur einen Finger brauchen, keine Timer oder Reaktionstests und eine einfache Möglichkeit, einen Fehltipp zurückzunehmen.' },
      { question: 'Wie groß sollten Touch-Ziele für Menschen mit motorischen Einschränkungen sein?', answer: 'Eine Laborstudie von Findlater und Kollegen empfahl für Nutzer mit motorischen Einschränkungen im Oberkörper mindestens 18 Millimeter, deutlich mehr als typische Handy-Schaltflächen.' },
      { question: 'Welche iPhone-Einstellungen helfen bei motorischer Barrierefreiheit in Spielen?', answer: 'Unter Einstellungen, Bedienungshilfen, Tippen: Einhandmodus, Touch-Anpassungen, AssistiveTouch und Auf Rückseite tippen. Sprachsteuerung und Schaltersteuerung ermöglichen die Bedienung ohne Berührung.' },
      { question: 'Kann man OutBrick mit einer Hand spielen?', answer: 'Ja. Steine bewegst du mit einem einzigen Schub mit einem Finger, es gibt nie eine Uhr, und die erste Zugrücknahme auf jedem Feld ist gratis, sodass dich ein verrutschter Schub nicht das Feld kostet. Du kannst [ein Feld im Browser ausprobieren](/play).' },
    ],
  },
  'reduce-motion-games': {
    title: 'Übelkeit durch Spiele: warum „Bewegung reduzieren“ zählt',
    dek: 'Warum Bewegung auf dem Bildschirm manchen übel macht, wer besonders anfällig ist und wie „Bewegung reduzieren“ und behutsame Animation helfen.',
    imageAlt: 'Peach und Bloo links und rechts von einem Handy, das ein superschweres OutBrick-Spielfeld in Level 214 zeigt, daneben schweben türkise, rote und grüne Steine',
    tags: ['Bewegung reduzieren', 'Reiseübelkeit Spiele', 'Cybersickness', 'Barrierefreiheit', 'Spieldesign'],
    intro: 'Die meisten Menschen denken nie über die Bewegung in einem Spiel nach, bis ihnen davon schlecht wird. Bei einer beträchtlichen Minderheit lösen eine schwenkende Kamera, ein Parallax-Hintergrund oder ein Bildschirm, der bei jedem Erfolg wackelt, Schwindel, Übelkeit oder Kopfschmerzen aus, die manchmal noch lange anhalten, nachdem das Gerät weggelegt ist. Das ist keine Zimperlichkeit. Es ist eine gut erforschte Reaktion des Gleichgewichtssystems, und es gibt eine einfache Einstellung, die genau deshalb existiert. Hier steht, was die Forschung sagt und was Spieler und Designer tun können.',
    keyTakeaways: [
      'Visuell ausgelöste Bewegungskrankheit entsteht, wenn deine Augen Bewegung melden, die dein Gleichgewichtsorgan nicht spürt.',
      'Die Anfälligkeit ist sehr unterschiedlich. Frühere Reiseübelkeit, Migräne und Schwindel sagen alle voraus, wer am stärksten betroffen ist.',
      'Die Einstellung „Bewegung reduzieren“ zu respektieren kostet Designer wenig und kann den Unterschied machen zwischen einem Spiel, das jemand spielen kann, und einem, das er nicht spielen kann.',
    ],
    sections: {
      'why-screens-make-you-sick': {
        title: 'Warum dir von einem Bildschirm schlecht werden kann',
        paragraphs: [
          'Dein Gleichgewichtssinn speist sich aus drei Quellen: deinen Augen, dem Gleichgewichtsorgan im Innenohr und dem Gefühl deines Körpers gegen den Boden. Normalerweise stimmen sie überein. Wenn sich ein großer Teil deines Blickfelds so bewegt, als würdest du dich bewegen, dein Innenohr aber meldet, dass du still sitzt, widersprechen sich die Signale. Bei vielen Menschen folgt daraus eine Reihe von Symptomen wie Orientierungslosigkeit, Augenbelastung, Schwitzen und Übelkeit, bekannt als visuell ausgelöste Bewegungskrankheit oder, wenn sie von digitalen Bildschirmen kommt, als Cybersickness.',
          'Die Übersichtsarbeit von Rebenitsch und Owen trug die Belege dazu zusammen, was sie auslöst. Ein großer Teil dieser Forschung betrifft virtuelle Realität und große Bildschirme, wo der Effekt am stärksten ist, aber die Zutaten gelten auch für Handys und Tablets: wie viel vom Blickfeld sich bewegt, wie schnell und in welche Richtung, dazu Entscheidungen beim Rendering und wie lange man ihm ausgesetzt ist. Eine verwandte Empfindung, die Vektion, ist die Illusion, sich selbst zu bewegen, wie das Gefühl, dass dein stehender Zug losfährt, wenn der auf dem Nachbargleis abfährt. Keshavarz und Kollegen untersuchten, wie die beiden zusammenhängen, und kamen zu dem Schluss, dass der Zusammenhang weniger eindeutig ist als lange angenommen: Vektion und Übelkeit treten oft gemeinsam auf, aber nicht immer.',
        ],
      },
      'which-motion': {
        title: 'Welche Arten von Bewegung das Problem sind',
        paragraphs: [
          'Bewegung ist nicht gleich Bewegung. In zwei Experimenten variierten Keshavarz und Kollegen Geschwindigkeit und Dichte eines bewegten Sternenfelds und fügten dann Rotation hinzu. Schnellere, dichtere Bewegung verstärkte die Illusion der Eigenbewegung, machte aber für die Übelkeit kaum einen Unterschied. Das Hinzufügen einer Nickbewegung, einer kippenden Rotation nach oben und unten, führte zu den höchsten Übelkeitswerten und zu mehr Orientierungslosigkeit. Praktisch heißt das: Rotation und Kamerabewegung machen mehr Probleme als Dinge, die sich einfach über einen ruhigen Hintergrund bewegen.',
          'Das passt zu dem, was bewegungsempfindliche Spieler häufig über Spiele berichten: Der Ärger kommt meist daher, dass sich die ganze Szene auf einmal bewegt. Kamerawackeln, Zooms, die den Bildschirm füllen, Parallax-Ebenen, die unterschiedlich schnell gleiten, und Übergänge, die die Ansicht herumschwenken, sind die üblichen Verdächtigen. Ein einzelner Stein, der über ein ruhiges Spielfeld gleitet, ist etwas ganz anderes als ein Spielfeld, das selbst ins Schwanken gerät.',
        ],
      },
      'who-is-susceptible': {
        title: 'Wer besonders anfällig ist',
        paragraphs: [
          'Die Anfälligkeit ist von Mensch zu Mensch enorm unterschiedlich. Golding, Rafiq und Keshavarz testeten einen kurzen Fragebogen zur visuell ausgelösten Bewegungskrankheit mit 30 Erwachsenen, die eine rotierende, wackelnde Stadtszene ansahen. Der Fragebogen sagte etwa ein Drittel der Unterschiede darin voraus, wie stark den Menschen übel wurde, und mehr als die Hälfte, als frühere gewöhnliche Reiseübelkeit, Migräne, Ohnmachten und die Auswirkung von Schwindel im Alltag hinzukamen. Goldings frühere Arbeit zum Standardfragebogen für Reisekrankheit hatte Migräne bereits als eine der deutlichsten Verbindungen zwischen Reisekrankheit und anderen Formen von Übelkeit ausgemacht. In der Studie von Rebenitsch und Owen zu individuellen Unterschieden gehörte frühere Reiseübelkeit zu den besten Vorhersagefaktoren für Cybersickness.',
          'Für manche Menschen ist das Problem mehr als gelegentliches Unwohlsein. Bronstein beschrieb eine Gruppe von Patienten, die meisten mit einer Störung des Gleichgewichtssystems im Innenohr, bei denen unruhige oder bewegte visuelle Szenen zuverlässig Schwindel auslösten; er nannte das visuellen Schwindel. Für sie ist ein Bildschirm voller Bewegung kein Ärgernis, sondern eine echte Barriere. Nichts davon kann ein Spiel diagnostizieren oder behandeln, und anhaltender Schwindel gehört in ein Gespräch mit einem Arzt. Was ein Spiel tun kann: es nicht schlimmer machen.',
        ],
      },
      'what-reduce-motion-does': {
        title: 'Was „Bewegung reduzieren“ tut und was Designer tun sollten',
        paragraphs: [
          'Auf iPhone und iPad findest du die Einstellung unter Einstellungen, Bedienungshilfen, Bewegung, Bewegung reduzieren. Ist sie an, ersetzt das System zoomende und gleitende Übergänge durch sanftere Überblendungen und teilt jeder App mit, dass du weniger Bewegung wünschst. Dann liegt es an jeder App, darauf zu hören. Im Web gibt es eine Entsprechung, und die Richtlinie des W3C zu [Animationen durch Interaktionen](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) verlangt, dass durch Interaktion ausgelöste Bewegung abschaltbar ist, sofern sie nicht wesentlich ist.',
          'Auf das Wort wesentlich kommt es an. In einem Schiebepuzzle muss man sehen, wie sich der Stein bewegt, sonst kann man dem Spielfeld nicht folgen. Aber das Konfetti, die hüpfende Kamera und der treibende Hintergrund sind Dekoration, und Dekoration kann weg. OutBrick respektiert „Bewegung reduzieren“ überall: Ist die Einstellung an, reduziert das Spiel Parallax, Konfetti und federnde Übergänge, während die Steine selbst weiterhin zeigen, wohin sie gefahren sind. Die übrigen Komfort-Einstellungen für Ton, Musik und Haptik beschreiben wir auf der [Seite zur Barrierefreiheit](/accessibility).',
        ],
        bullets: [
          'Halt die Kamera still. Beweg die Teile, nicht die Welt.',
          'Vermeide Bildschirmwackeln, bildschirmfüllende Zooms und rotierende Übergänge, oder schalte sie bei „Bewegung reduzieren“ ab.',
          'Halt Parallax dezent und entferne es bei „Bewegung reduzieren“.',
          'Lass nie große Bildschirmflächen blinken, und halt Feiern kurz.',
          'Teste mit eingeschaltetem „Bewegung reduzieren“ und prüf, dass nichts Wichtiges verschwindet.',
        ],
      },
      'player-tips': {
        title: 'Wenn dir von Spielen unwohl wird',
        paragraphs: [
          'Schalte vor allem anderen „Bewegung reduzieren“ ein und probier im selben Menü „Überblendeffekte bevorzugen“. Schau dann in den Einstellungen jedes Spiels nach eigenen Optionen: Kamerawackeln, Bewegungsunschärfe, Sichtfeld und Bildschirmeffekte sind in größeren Spielen üblich. Spiel in einem gut beleuchteten Raum, halt das Gerät etwas weiter weg, damit es weniger von deinem Blickfeld füllt, und mach Pausen, bevor sich Symptome aufbauen, nicht erst danach. Headsets sind der anspruchsvollste Fall überhaupt; den Komfort auf der [Apple Vision Pro](/blog/apple-vision-pro-puzzle-games) behandeln wir gesondert.',
          'Und wähl Spiele, die von Grund auf ruhig sind. Ein rundenbasiertes Puzzle mit einem ruhigen Spielfeld ist ein viel leichterer Einstieg als ein Spiel, das auf Tempo gebaut ist. Unser Leitfaden dazu, [was ein Puzzlespiel entspannend macht](/blog/relaxing-puzzle-games-what-makes-one-calm), nennt die anderen Dinge, auf die du achten kannst, und [reizarmes Spieldesign](/blog/sensory-friendly-game-design) betrachtet Ton, Licht und Überraschungen breiter.',
          'Wenn ein Spiel „Bewegung reduzieren“ ignoriert, sag es dem Entwickler, und sei konkret: welcher Bildschirm, welcher Effekt und was er bei dir ausgelöst hat. Viele Teams testen mit ausgeschalteter Einstellung und sehen das Problem schlicht nie. Das gilt auch für uns: Wenn sich in OutBrick mit eingeschaltetem „Bewegung reduzieren“ noch etwas zu stark für dich bewegt, sag es uns auf unserer [Support-Seite](/support). Genau solche Meldungen werden behoben.',
        ],
      },
    },
    pullQuote: 'Beweg die Teile, nicht die Welt.',
    faqs: [
      { question: 'Warum wird mir bei manchen Spielen übel?', answer: 'Wenn sich ein großer Teil deines Blickfelds so bewegt, als würdest du dich bewegen, dein Innenohr aber keine Bewegung spürt, können die widersprüchlichen Signale Schwindel, Augenbelastung und Übelkeit auslösen. Das nennt man visuell ausgelöste Bewegungskrankheit.' },
      { question: 'Was bewirkt „Bewegung reduzieren“ auf dem iPhone?', answer: 'Die Einstellung ersetzt zoomende und gleitende Systemübergänge durch sanftere Effekte und teilt Apps mit, dass du weniger Bewegung wünschst. Apps, die sie respektieren, entfernen oder dämpfen auch ihre eigenen Animationen.' },
      { question: 'Wem wird von Bildschirmen am ehesten übel?', answer: 'Die Forschung bringt es am stärksten mit früherer Reiseübelkeit, Migräne und anhaltendem Schwindel in Verbindung, auch wenn die Anfälligkeit von Mensch zu Mensch stark schwankt. Anhaltende Beschwerden solltest du mit einem Arzt besprechen.' },
      { question: 'Unterstützt OutBrick „Bewegung reduzieren“?', answer: 'Ja. Mit eingeschaltetem „Bewegung reduzieren“ reduziert OutBrick überall Parallax, Konfetti und federnde Übergänge, während die Steine weiterhin sichtbar gleiten, damit du dem Spielfeld folgen kannst.' },
    ],
  },
  'puzzles-executive-function-children': {
    title: 'Fördern Puzzles die exekutiven Funktionen von Kindern?',
    dek: 'Exekutive Funktionen tragen Planung und Selbstkontrolle. Was Studien zu Puzzles und Spielen für Kinder sagen, was sie nicht leisten und wie Spielen hilft.',
    imageAlt: 'Sprout und Vio links und rechts von einem Handy, das den Abschnitt Bamboo Springs auf der Karte der OutBrick-Reise zeigt, daneben schweben gelbe, grüne und blaue Steine',
    tags: ['exekutive Funktionen', 'Lernspiele', 'Kinder', 'Puzzles Forschung', 'Gehirnjogging'],
    intro: 'Exekutive Funktionen sind zu einem der meistdiskutierten Begriffe der kindlichen Entwicklung geworden, und zu einem der am stärksten vermarkteten. Apps, Spielzeug und Puzzles versprechen, sie zu fördern. Die Forschung ist an manchen Stellen wirklich ermutigend und an anderen wirklich ernüchternd, und Eltern haben ein Recht auf beide Hälften. Hier steht, was exekutive Funktionen sind, was die besten Belege über ihr Training sagen, wo Puzzles ihren Platz haben und wie du mit einem Kind so spielst, dass es am ehesten hilft.',
    keyTakeaways: [
      'Exekutive Funktionen umfassen, Informationen im Kopf zu behalten, Impulsen zu widerstehen und zwischen Gedanken zu wechseln. Sie können sich durch Übung verbessern.',
      'Übung verbessert vor allem die geübte Fähigkeit. Die Belege für einen breiten „fernen Transfer“ auf Schule oder Intelligenz sind schwach.',
      'Am besten wirken Ansätze, die Spaß machen, allmählich schwerer werden und in den Alltag eingebettet sind. Genau das beschreibt gutes Spielen.',
    ],
    sections: {
      'what-executive-function-is': {
        title: 'Was exekutive Funktionen sind',
        paragraphs: [
          'In Adele Diamonds viel zitierter Übersichtsarbeit sind exekutive Funktionen die geistigen Prozesse, mit denen wir mit Ideen spielen, innehalten und nachdenken, bevor wir handeln, neue Herausforderungen angehen, Versuchungen widerstehen und konzentriert bleiben. Sie beschreibt drei Kernfähigkeiten. Inhibitorische Kontrolle ist die Fähigkeit, einen Impuls zurückzuhalten und die Aufmerksamkeit dort zu lassen, wo sie hingehört. Arbeitsgedächtnis heißt, Informationen im Kopf zu behalten, während man mit ihnen arbeitet. Kognitive Flexibilität bedeutet, Dinge aus einem anderen Blickwinkel zu sehen und umzusteuern, wenn sich die Lage ändert.',
          'Ein Schiebepuzzle trainiert alle drei im Kleinen. Du behältst einen Plan über mehrere Züge im Kopf, du widerstehst dem verlockenden Schub, der gut aussieht, aber ein Tor blockiert, und du gibst deinen Plan auf, wenn ein Stein an einer unerwarteten Stelle stehen bleibt. Diamond betont außerdem, dass Stress, Schlafmangel, Einsamkeit und Bewegungsmangel die exekutiven Funktionen beeinträchtigen. Das ist eine nützliche Erinnerung daran, dass kein Puzzle ein müdes, ängstliches Kind ausgleichen kann.',
          'Diese Fähigkeiten entwickeln sich langsam. Diamond beschreibt eine lange Entwicklung, die von der frühen Kindheit bis weit in die Jugend reicht, und das ist ein Grund, die Erwartungen an kleine Kinder bescheiden zu halten. Ein Vierjähriges, das Steine wahllos schiebt, und ein Siebenjähriges, das innehält, um zwei Züge vorauszuplanen, verhalten sich beide normal für ihr Alter. Der Abstand zwischen ihnen ist Entwicklung, kein Defizit, das ein Spiel schließen müsste.',
        ],
      },
      'what-diamond-and-lee-found': {
        title: 'Was die wegweisende Übersicht fand',
        paragraphs: [
          '2011 werteten Diamond und Lee in der Zeitschrift Science Programme aus, deren Wirkung auf die exekutiven Funktionen von Kindern zwischen 4 und 12 Jahren getestet worden war. Eine große Bandbreite hatte Nutzen gezeigt: computergestütztes Training, Spiele ohne Computer, Ausdauersport, Kampfkunst, Yoga, Achtsamkeit und manche Schulcurricula. Gemeinsam war den erfolgreichen Programmen wiederholtes Üben und eine Herausforderung, die mit den Fortschritten des Kindes immer weiter wuchs. Kinder, deren exekutive Funktionen anfangs schwächer waren, gewannen tendenziell am meisten.',
          'Zwei weitere Punkte in dieser Übersicht übersieht man leicht. Erstens schnitten Programme, die sich auch der emotionalen und sozialen Entwicklung der Kinder widmeten, nicht nur ihrem Denken, tendenziell besser ab. Zweitens war der Nutzen bei Aufgaben am größten, die dem Geübten nahe waren. Dieser zweite Punkt wurde zum Kern der Debatte, die folgte.',
        ],
      },
      'the-transfer-problem': {
        title: 'Das Transferproblem',
        paragraphs: [
          'Bei einer trainierten Aufgabe besser zu werden, nennt man nahen Transfer. Bei etwas anderem besser zu werden, etwa beim Lesen, Rechnen oder allgemeinen Denken, ist ferner Transfer, und genau den versprechen die meisten Produkte. Kassai und Kollegen fassten die experimentellen Studien zum Training exekutiver Funktionen bei Kindern zusammen. Sie fanden einen soliden nahen Transfer: Die trainierten Fähigkeiten verbesserten sich in moderatem Umfang. Das Training einer Komponente, etwa des Arbeitsgedächtnisses, verbesserte die anderen aber nicht zuverlässig; der ferne Transfer war klein und statistisch nicht signifikant.',
          'Andere Metaanalysen weisen in dieselbe Richtung. Melby-Lervåg und Hulme fanden, dass Arbeitsgedächtnistraining kurzfristige Verbesserungen beim Arbeitsgedächtnis selbst brachte, ohne überzeugende Belege, dass sich das auf andere Fähigkeiten übertrug. Sala und Gobet untersuchten Schach, Musik und Arbeitsgedächtnistraining bei Kindern und stellten fest, dass der scheinbare Nutzen schrumpfte, je besser die Studien waren; ihr Schluss: Ferner Transfer kommt selten vor. Takacs und Kassai fassten 90 Studien mit fast 9.000 Kindern zusammen und fanden, dass sich exekutive Funktionen in der Kindheit fördern lassen, aber keine überzeugenden Belege dafür, dass die Gewinne bei Nachuntersuchungen anhielten. Sie fanden außerdem, dass Ansätze, die diese Fähigkeiten beiläufig im Rahmen angenehmer Alltagsaktivitäten aufbauen, mindestens so wirksam waren wie ausdrückliche Übungen, wenn nicht wirksamer.',
        ],
        note: 'Das entspricht den Belegen bei Erwachsenen, die wir in [Sind Puzzlespiele gut fürs Gehirn?](/blog/are-puzzle-games-good-for-your-brain) zusammengefasst haben.',
      },
      'where-puzzles-fit': {
        title: 'Wo Puzzles ihren Platz haben',
        paragraphs: [
          'Hat es also überhaupt einen Sinn? Ja, solange die Erwartungen ehrlich sind. Puzzles sind gute Übung für die Fähigkeiten, die sie beanspruchen: Planen, Geduld, erst schauen, dann handeln, und sich von einem Irrweg erholen. Das ist schon für sich genommen etwas wert. Außerdem gibt es einige Hinweise zu räumlichen Fähigkeiten. Levine und Kollegen beobachteten Kinder zwischen zwei und vier Jahren mit ihren Eltern zu Hause und fanden, dass Kinder, die mit Puzzles spielten, mit viereinhalb Jahren bei einer Aufgabe zur räumlichen Transformation besser abschnitten, auch nach Berücksichtigung von Familieneinkommen, Bildung und davon, wie viel die Eltern sprachen. Es war eine Beobachtungsstudie, sie kann also nicht zeigen, dass die Puzzles den Unterschied verursacht haben, aber sie passt zu dem, was wir über räumliches Lernen wissen.',
          'Ehrlich gesagt sind Puzzles also eine gute Art, Spielzeit zu verbringen, keine Behandlung. Ein Kind, das sie mag, bekommt echte Übung im Vorausdenken. Ein Kind, das sie seinem Gehirn zuliebe machen muss, hat wahrscheinlich weniger davon und weniger Freude daran.',
          'Eltern fragen oft, ob Puzzles auf dem Bildschirm so gut sind wie echte. Die Belege entscheiden das nicht. Die Übersicht von Diamond und Lee zählte sowohl computergestütztes Training als auch Spiele ohne Computer zu den Aktivitäten mit Nutzen, und was die erfolgreichen Programme verband, war nicht das Medium, sondern wiederholtes Üben mit steigender Herausforderung. Ein Puzzle auf dem Küchentisch und ein Schiebepuzzle auf dem Tablet verlangen ähnliche Arten des Denkens. Stärker unterscheidet sich alles drumherum: ob ein Erwachsener dabei ist und ob die App darauf ausgelegt ist, Aufmerksamkeit um ihrer selbst willen festzuhalten.',
        ],
      },
      'playing-well': {
        title: 'So spielt ihr Puzzles, dass es hilft',
        paragraphs: [
          'Die Forschung dazu, was wirkt, legt ein paar Gewohnheiten nahe. Bei allen geht es darum, wie du spielst, nicht darum, was du kaufst. OutBrick ist ab 4+ eingestuft, und die [Seite zur Altersfreigabe](/age-rating) erklärt, warum; es hat ein Zuglimit statt einer Uhr, sodass ein Kind so lange nachdenken kann, wie es braucht. Ihr könnt gemeinsam [ein Feld im Browser spielen](/play), bevor du entscheidest, ob es zu deinem Kind passt, und unser Leitfaden zum [Lösen von Schiebepuzzles](/blog/how-to-solve-sliding-block-puzzles) enthält Strategien, über die ihr sprechen könnt.',
        ],
        bullets: [
          'Spielt zusammen und denkt laut. Fragt „Was passiert, wenn wir den da schieben?“, bevor jemand zieht.',
          'Zielt auf schwer, aber machbar. Der Nutzen kommt von einer Herausforderung, die mit dem Kind mitwächst.',
          'Behandle einen falschen Zug als Information, nicht als Scheitern, und nutz die Zugrücknahme, um einen anderen Weg auszuprobieren.',
          'Verwende räumliche Wörter: oben, dahinter, blockiert, drehen, Rand. Levines Studie legt nahe, dass das Gespräch rund ums Puzzle zählt.',
          'Hört auf, solange es noch Spaß macht. Freude ist kein Bonus; sie ist Teil dessen, warum beiläufiges Üben wirkt.',
        ],
      },
    },
    pullQuote: 'Ehrlich gesagt sind Puzzles also eine gute Art, Spielzeit zu verbringen, keine Behandlung.',
    faqs: [
      { question: 'Was sind exekutive Funktionen bei Kindern?', answer: 'Exekutive Funktionen sind eine Gruppe geistiger Fähigkeiten, zu der Arbeitsgedächtnis, inhibitorische Kontrolle und kognitive Flexibilität gehören. Zusammen helfen sie Kindern, zu planen, sich zu konzentrieren, Impulsen zu widerstehen und sich anzupassen, wenn sich etwas ändert.' },
      { question: 'Verbessern Puzzles die exekutiven Funktionen?', answer: 'Puzzles bieten Übung im Planen und in Selbstkontrolle, und Übung verbessert die geübten Fähigkeiten. Die Belege, dass sich das auf Schulfächer oder allgemeine Intelligenz überträgt, sind schwach. Puzzles genießt man also am besten als Spiel, statt sie als Training zu verordnen.' },
      { question: 'Sind Gehirnjogging-Apps gut für Kinder?', answer: 'Metaanalysen zeigen, dass Training die Leistung bei den trainierten Aufgaben verbessert, sich aber selten auf andere Fähigkeiten überträgt, und die Gewinne verblassen oft. Angenehme Alltagsaktivitäten, die Kinder fordern, wirken mindestens genauso gut.' },
      { question: 'Ab welchem Alter ist OutBrick geeignet?', answer: 'OutBrick ist ab 4+ eingestuft und hat keine Inhalte für Erwachsene, keine Uhr und keinen öffentlichen Chat. Die [Seite zur Altersfreigabe](/age-rating) erklärt die Einstufung, auch wie die freiwilligen Belohnungsvideos funktionieren.' },
    ],
  },
  'playing-games-with-grandchildren': {
    title: 'Mit den Enkeln spielen: warum es sich lohnt',
    dek: 'Gemeinsames Spielen nützt nachweislich beiden Generationen, wenn das Spiel gut gewählt ist. Was die Studien zeigen und wie es gelingt.',
    imageAlt: 'Poppy und Flurry links und rechts von einem Handy, das den Abschnitt Celebration Square auf der Karte der OutBrick-Reise zeigt, daneben schweben gelbe, lila und grüne Steine',
    tags: ['mit Enkeln spielen', 'Generationen', 'Familie', 'Spiele für Senioren', 'gemeinsam spielen'],
    intro: 'Großeltern hören oft, die Spiele ihrer Enkel seien eine Mauer zwischen ihnen: laut, schnell, unverständlich und besser in Ruhe zu lassen. Die Forschung zum gemeinsamen Spielen legt das Gegenteil nahe. Wenn das Spiel gut gewählt ist, gehört gemeinsames Spielen zu den einfacheren Wegen, wie zwei Generationen Zeit auf Augenhöhe verbringen können, und das Kind ist dabei genauso oft Lehrer wie Schüler. Hier steht, was die Studien gefunden haben, was typischerweise schiefgeht und wie ihr Spiele auswählt und spielt, die über sechzig Jahre Abstand hinweg funktionieren.',
    keyTakeaways: [
      'Übersichtsarbeiten zum generationenübergreifenden Spielen finden Nutzen für die familiären Bindungen, Lernen in beide Richtungen und die Haltung gegenüber der anderen Generation.',
      'Das häufigste Problem ist ein Unterschied in Können und Tempo. Rundenbasierte Spiele ohne Zeitlimit gleichen ihn aus.',
      'Lass das Kind unterrichten. Die üblichen Rollen umzudrehen gehört zu dem, was am gemeinsamen Spielen am meisten geschätzt wird.',
    ],
    sections: {
      'what-the-research-finds': {
        title: 'Was die Forschung findet',
        paragraphs: [
          'De la Hera und Kollegen werteten systematisch empirische Studien zu generationenübergreifenden digitalen Spielen aus, insgesamt sechzehn, mit älteren Spielern zwischen 55 und 81 und jüngeren zwischen 4 und 22 Jahren. Der Nutzen, den sie fanden, ließ sich in vier Gruppen einteilen: stärkere familiäre Bindungen, Lernen in beide Richtungen, ein besseres Verständnis der anderen Generation und weniger soziale Ängste. Eine frühere Übersicht von Costa und Veloso über 36 Arbeiten aus den Jahren 2006 bis 2014 kam zu ähnlichen Schlüssen und formulierte Gestaltungsempfehlungen für Spiele, die Generationen zusammenbringen sollen.',
          'Eine der besser kontrollierten Studien stammt aus Singapur. Chua und Kollegen bildeten Paare aus jungen Menschen und älteren Erwachsenen, die sich zwei Monate lang regelmäßig trafen; manche spielten zusammen Videospiele, andere machten andere Aktivitäten. Die Paare, die spielten, berichteten von einer stärkeren Verbesserung ihrer Haltung gegenüber der anderen Generation und von weniger Unbehagen im Umgang miteinander. Die Stichproben in diesem Feld sind klein und die meisten Studien kurz, deshalb sollte man die Größe des Effekts nicht überbewerten. Die Richtung ist aber einheitlich.',
        ],
      },
      'why-it-works': {
        title: 'Warum gemeinsames Spielen funktioniert',
        paragraphs: [
          'Osmanovic und Pecchioni interviewten ältere Erwachsene und die jüngeren Verwandten, mit denen sie spielten. Beide Seiten sagten, die Spiele seien eine Möglichkeit, Zeit miteinander zu verbringen und in Verbindung zu bleiben, und beide beschrieben die positiven Gefühle beim Spielen selbst. Für viele ältere Spieler ging es weniger um das Spiel als um die Gesellschaft. Voida und Greenberg beobachteten Familien und Gruppen beim gemeinsamen Spielen an der Konsole und beschrieben Spiele als Treffpunkt, an dem Menschen sehr unterschiedlichen Alters und Könnens verschiedene Rollen einnehmen konnten: Spieler, Trainer, Zuschauer, Kommentator.',
          'Diese Flexibilität der Rollen ist wichtig. Siyahhan, Barab und Downton untersuchten Eltern und Kinder, die gemeinsam ein Online-Abenteuerspiel spielten, und stellten fest, dass das gemeinsame Spielen von Paar zu Paar sehr unterschiedlich aussah: Manche Eltern führten, manche folgten, manche arbeiteten Seite an Seite, und über all diese Stile hinweg hatte es positive Ergebnisse. Es gibt nicht die eine richtige Art, zusammen zu spielen. Es gibt nur die Suche nach einer Art, die zu euch beiden passt.',
          'Das Lernen in diesen Studien läuft außerdem in beide Richtungen, was De la Hera und Kollegen als einen der wichtigsten Vorteile hervorheben. Kinder bringen die Steuerung, die Abkürzungen und die Gepflogenheiten des Spiels bei. Großeltern bringen oft Geduld mit, ein Gespür für Strategie und die Gewohnheit, einen Zug zu Ende zu denken, bevor sie ihn machen. In einem Puzzle sind das genau die Eigenschaften, die gewinnen, und das gleicht den Wettstreit still und leise aus. Viele Großeltern merken, dass ein gemeinsames Spiel ihnen Gesprächsstoff mit einem Enkelkind gibt, das Fragen sonst mit einzelnen Wörtern beantwortet.',
        ],
      },
      'what-goes-wrong': {
        title: 'Was typischerweise schiefgeht',
        paragraphs: [
          'Bei der Hauptschwierigkeit sind sich die Übersichtsarbeiten einig: unterschiedliche Fähigkeiten. Kinder sind oft schneller und geübter mit Touchscreens und den Gepflogenheiten von Spielen; Großeltern haben vielleicht mehr Geduld und besseren strategischen Sinn, aber langsamere Reaktionen und andere Augen. Spiele, die Tempo belohnen, lassen den älteren Spieler dauerhaft zurückfallen, und das macht keinem von beiden Spaß. Spiele mit viel Text oder winzigen Bedienelementen schließen die Jüngsten und manchmal auch die Ältesten aus.',
          'Die andere Schwierigkeit ist die Motivation. De la Hera und Kollegen merken an, dass die beiden Generationen oft Unterschiedliches von einem Spiel wollen, und die Spiele, die am besten funktionieren, bieten beiden etwas. Ein Kind liebt vielleicht Sammeln und Erkunden; Großeltern bevorzugen vielleicht ein klares Ziel und ein ruhiges Puzzle. Die besten gemeinsamen Spiele haben Platz für beides.',
        ],
      },
      'choosing-a-game': {
        title: 'So findet ihr ein Spiel, das euch beiden Spaß macht',
        paragraphs: [
          'Such nach Spielen, in denen ein Zug so lange dauern darf, wie er braucht. Ein Zuglimit ist in Ordnung, eine Uhr nicht. Such nach Spielen, bei denen ihr ein Gerät hin- und herreichen könnt, damit ihr nebeneinandersitzt, statt auf getrennten Bildschirmen zu spielen. Und such nach Spielen mit einem sanften Einstieg, damit der weniger erfahrene Spieler sich zurechtfinden kann, ohne sich zu blamieren. Unsere Checkliste zu [Puzzlespielen für ältere Menschen](/blog/puzzle-games-for-older-adults) geht genauer auf Lesbarkeit und Einstellungen ein.',
          'Ein tägliches Puzzle ist ein gutes gemeinsames Ritual, besonders auf Distanz. OutBrick stellt auf seiner Website ein [tägliches Feld](/daily) bereit, das jeder im Browser spielen kann. So können Großeltern und Enkel dasselbe Feld versuchen und abends am Telefon vergleichen, wie es gelaufen ist. Im Spiel selbst hat jedes Feld ein Zuglimit, aber nie eine Uhr, die erste Zugrücknahme ist gratis, und die Symbole des Farbenblind-Modus sind standardmäßig an. Das hilft, wenn einer von euch manche Farben schwer auseinanderhalten kann.',
          'Denk an die Umgebung genauso wie an das Spiel. Ein Tablet auf dem Tisch zwischen euch ist für ältere Augen leichter als ein Handy in der Hand eines Kindes, und das Abwechseln ergibt sich ganz natürlich. Prüf, ob der Text für die Großeltern groß genug und der Ton leise genug für ein Gespräch ist. Wenn einer von euch besondere Bedürfnisse hat, etwa beim Farbsehen, beim Hören oder wegen eines Zitterns, erspart euch ein paar Minuten in den Einstellungen später Frust. Unser Beitrag über [Farbenblindheit in Spielen](/blog/colour-blindness-in-games) erklärt einen der häufigsten Fälle.',
        ],
      },
      'playing-well-together': {
        title: 'Gut zusammen spielen',
        paragraphs: [
          'Die Forschung legt nahe, dass der Wert des gemeinsamen Spielens mehr in der Beziehung drumherum liegt als im Spiel selbst. Ein paar Gewohnheiten helfen, egal ob ihr auf dem Sofa oder per Videoanruf spielt. Zur sozialen Seite von Spielen im Allgemeinen passt [Animal Crossing und gemeinsame Zeit](/blog/animal-crossing-shared-time) gut dazu.',
        ],
        bullets: [
          'Lass dir das Spiel vom Kind beibringen und sei ein williger Schüler. Kinder dürfen selten die Experten sein.',
          'Wechselt euch an einem Gerät ab und besprecht jeden Zug, statt auf zwei Geräten um die Wette zu spielen.',
          'Teilt, was euch auffällt: Strategien, Muster, eine gute Idee, die ihr vor drei Zügen hattet.',
          'Haltet die Runden kurz und hört auf, wenn es schön ist, damit ihr euch aufs nächste Mal freut.',
          'Vereinbart vor dem Start gemeinsam, wie lange ihr spielt, damit das Aufhören kein Kampf wird.',
        ],
      },
    },
    pullQuote: 'Es gibt nicht die eine richtige Art, zusammen zu spielen. Es gibt nur die Suche nach einer Art, die zu euch beiden passt.',
    faqs: [
      { question: 'Tut es Großeltern gut, mit den Enkeln Videospiele zu spielen?', answer: 'Studien zum generationenübergreifenden Spielen berichten von stärkeren familiären Bindungen, Lernen in beide Richtungen und positiveren Haltungen zwischen den Generationen. Die Studien sind meist klein und kurz, aber ihre Ergebnisse weisen in dieselbe Richtung.' },
      { question: 'Welche Spiele eignen sich am besten für Großeltern und Enkel?', answer: 'Am besten funktionieren rundenbasierte Spiele ohne Uhr, mit einfacher Steuerung und sanftem Einstieg, weil sie Unterschiede in Tempo und Erfahrung ausgleichen. Spiele, bei denen ihr ein Gerät hin- und herreicht, fördern Gespräche und das Voneinanderlernen.' },
      { question: 'Wie können Großeltern mit Enkeln spielen, die weit weg wohnen?', answer: 'Teilt ein tägliches Puzzle, das ihr beide spielt, und vergleicht die Ergebnisse, oder spielt zusammen per Videoanruf, wechselt euch ab und besprecht die Züge. Das [tägliche Feld](/daily) von OutBrick lässt sich in jedem Browser spielen.' },
    ],
  },
  'calm-games-for-kids': {
    title: 'Ruhige Handyspiele für Kinder: ein Ratgeber für Eltern',
    dek: 'Die meisten Apps kleiner Kinder nutzen manipulatives Design. Eine Checkliste aus der Forschung, um Druck, Werbung und Köder zu erkennen und gut zu wählen.',
    imageAlt: 'Poppy und Bloo links und rechts von einem Handy, das ein superschweres OutBrick-Spielfeld in Level 520 zeigt, daneben schweben gelbe, orange und lila Steine',
    tags: ['Spiele für Kinder', 'Eltern Ratgeber', 'ruhige Spiele', 'Kinder Apps', 'Bildschirmzeit'],
    intro: 'Ein Spiel für ein Kind auszusuchen hieß früher, auf Gewalt und Kraftausdrücke zu achten. Auf Handy oder Tablet geht es bei den größeren Fragen oft ums Design: ob ein Spiel ein Kind drängt, weiterzuspielen, ob seine Werbung als Spiel getarnt ist, ob eine freundliche Figur in Wahrheit etwas verkaufen will. Forschende haben diese Muster inzwischen in den Apps untersucht, die kleine Kinder tatsächlich nutzen, und die Ergebnisse geben Eltern eine praktische Checkliste an die Hand. Hier ist sie, zusammen mit den Belegen dahinter und einem ehrlichen Blick darauf, wie unser eigenes Spiel abschneidet.',
    keyTakeaways: [
      'In einer Studie zu Apps, die 3- bis 5-Jährige spielten, hatte nur eine von fünf gar keine manipulativen Designelemente.',
      'Achte auf künstlichen Zeitdruck, Figuren, die einem Kind ein schlechtes Gewissen machen, als Spielobjekte getarnte Werbung und Köder zum Weiterspielen.',
      'Wie viel Bildschirmzeit, zählt weniger als das, was auf dem Bildschirm läuft, und ob du dabei bist.',
    ],
    sections: {
      'manipulative-design': {
        title: 'Was Forschende in Kinder-Apps gefunden haben',
        paragraphs: [
          'Radesky und Kollegen analysierten die Apps von 160 Kindern zwischen 3 und 5 Jahren und untersuchten sie auf manipulatives Design, also auf Elemente, die den Interessen des App-Anbieters mehr dienen als denen des Kindes. Die Mehrheit hatte mindestens eines. Dazu gehörten Druck über parasoziale Beziehungen, bei dem eine Figur, die das Kind mag, es zum Weiterspielen oder Kaufen drängt; künstlicher Zeitdruck wie Countdowns und zeitlich begrenzte Angebote; Navigationshürden, die das Verlassen erschweren; und verlockende Köder wie Preise und Schatztruhen, die das Spielen verlängern sollen. Nur etwa 20 % der Apps hatten keine manipulativen Elemente, und Kinder aus Familien mit geringerem Einkommen spielten Apps, in denen mehr davon steckten.',
          'Eine frühere Studie derselben Gruppe befasste sich mit Werbung. Meyer und Kollegen untersuchten 135 Apps, die bei Kindern bis fünf Jahren beliebt waren, und fanden in 95 % davon irgendeine Form von Werbung. Dazu gehörten Anzeigen, die das Spiel unterbrachen, Kaufaufforderungen, kommerzielle Figuren und in einer Minderheit der Apps Werbung, die im Spiel versteckt war, getarnt als Spielobjekte oder mit irreführenden Symbolen gekennzeichnet. Werbung tauchte in jeder untersuchten kostenlosen App und in den meisten kostenpflichtigen auf, und in Apps, die als lehrreich gekennzeichnet waren, war sie genauso häufig.',
        ],
      },
      'why-it-matters': {
        title: 'Warum Design mehr zählt als Minuten',
        paragraphs: [
          'Schlagzeilen zur Bildschirmzeit drehen sich um Stunden, doch die stärkeren Belege verweisen auf Inhalt und Umfeld. In einer großen präregistrierten Studie mit mehr als 120.000 englischen Jugendlichen fanden Przybylski und Weinstein, dass der Zusammenhang zwischen Bildschirmzeit und Wohlbefinden gekrümmt verlief: Maßvolle Nutzung ging nicht mit Schaden einher, und die Effekte bei höherer Nutzung waren klein. Die Studie betraf Teenager, keine Kleinkinder, und sie kann nicht sagen, was eine bestimmte App bewirkt. Aber sie ist ein nützliches Gegengewicht zu der Vorstellung, Minuten seien das Einzige, was zählt.',
          'Für jüngere Kinder stützten sich Hirsh-Pasek und Kollegen auf die Lernforschung, um festzuhalten, was eine App wirklich lehrreich macht: Kinder sollten aktiv sein, ohne Ablenkung bei der Sache, etwas Sinnvolles tun und idealerweise mit anderen Menschen interagieren. Als Meyer und Kollegen dieses Raster auf mehr als hundert beliebte „Lern“-Apps anwandten, schnitten die meisten schlecht ab, und kostenlose Apps erzielten wegen ablenkender Extras niedrigere Werte beim Engagement. Das Etikett im Store sagt dir wenig.',
        ],
      },
      checklist: {
        title: 'Eine Checkliste für ruhige Spiele',
        paragraphs: [
          'Spiel das Spiel zehn Minuten selbst, bevor dein Kind es tut, und geh die Liste unten durch. Nur sehr wenige Spiele bestehen alles; wichtig ist, zu wissen, wo der Druck sitzt, damit du entscheiden kannst, ob du damit einverstanden bist. Die Druckpunkte beschreiben wir allgemein in [was ein Puzzlespiel entspannend macht](/blog/relaxing-puzzle-games-what-makes-one-calm).',
        ],
        bullets: [
          'Zeitdruck: Gibt es einen Countdown, ein „zeitlich begrenztes“ Angebot oder ein Event, das abläuft?',
          'Druck durch Figuren: Schaut eine freundliche Figur traurig, bettelt oder schimpft sie, wenn dein Kind aufhört oder nichts kaufen will?',
          'Getarnte Werbung: Kann dein Kind eine Anzeige von einem Spielobjekt unterscheiden? Laufen Anzeigen, ohne dass jemand sie angefordert hat?',
          'Köder: Gibt es Truhen, Drehräder oder Serien, die ein Kind zurücklocken sollen, und hängen sie mit Käufen zusammen?',
          'Ausgänge: Kann dein Kind jederzeit aufhören, ohne etwas zu verlieren, und ist der Weg hinaus leicht zu finden?',
          'Käufe: Sind Käufe durch „Kaufanfrage“ oder ein Passwort geschützt, und werden Preise in echtem Geld angezeigt?',
          'Inhalt: Passt das Spiel zu seiner Altersfreigabe, und gibt es einen Chat mit Fremden?',
        ],
      },
      'outbrick-honestly': {
        title: 'Wie OutBrick abschneidet, ehrlich',
        paragraphs: [
          'Wir machen OutBrick, deshalb hier, wie es sich an dieser Liste misst, einschließlich der Punkte, die aufmerksame Eltern hinterfragen könnten. Es gibt nirgends eine Uhr; jedes Feld hat ein Zuglimit, das vor dem ersten Zug angezeigt wird. Die neun Freunde aus Steinen sprechen in Sprechblasen, ohne Stimmen, und es gibt keinen öffentlichen Chat. Das Spiel ist ab 4+ eingestuft, und die [Seite zur Altersfreigabe](/age-rating) erklärt, warum.',
          'OutBrick hat Leben und Werbung, und wir möchten, dass du das von uns erfährst. Du hast fünf Leben, und alle dreißig Minuten kommt eins zurück. Die Werbung besteht ausschließlich aus Belohnungsvideos an sechs Stellen, und ein Video läuft nur, wenn jemand auf einen Knopf drückt, um eines anzufordern; es gibt keine Banner, keine Werbung zwischen den Levels und keine beim Öffnen der App. Es gibt ein Brick Wheel zum Drehen, das einem Kind Spaß machen mag und über das Eltern verständlicherweise sprechen möchten. Optionale In-App-Käufe laufen über Apple, und ein einmaliger Kauf von „Werbung entfernen“ schaltet die Werbung ganz ab. Die Startseite legt offen, [was Leben, Zugrücknahmen und Werbung genau kosten](/#fair). Wenn etwas davon nicht zu eurer Familie passt, ist das eine berechtigte Entscheidung.',
        ],
      },
      'being-part-of-it': {
        title: 'Dabei sein',
        paragraphs: [
          'Der Großteil des Schadens in der Forschung entsteht, wenn ein Kind allein ist mit einem System, das gebaut wurde, um es festzuhalten. Der einfachste Schutz ist, in der Nähe zu sein und manchmal mitzuspielen. Sprecht darüber, warum eine Figur um Geld bittet oder warum eine Truhe genau dann auftaucht, wenn das Spiel schwer wird; Kinder verstehen mehr von Überredung, als wir erwarten, wenn man sie darauf hinweist. Radesky, Schumacher und Zuckerman haben das früh betont: Was Erwachsene rund um die Mediennutzung eines kleinen Kindes tun, zählt.',
          'Nutz die Werkzeuge auf dem Gerät als Absicherung, nicht als Ersatz. Auf iPhone und iPad kannst du mit der Bildschirmzeit Limits setzen und über die Familienfreigabe eine Erlaubnis für Käufe verlangen. Die American Academy of Pediatrics bietet einen [Familien-Medienplan](https://www.healthychildren.org/English/fmp/Pages/MediaPlan.aspx) an, mit dem ihr die Regeln gemeinsam festlegen könnt. Für Spiele, die das Denken fordern, ohne Druck zu machen, hat unser Beitrag über [Puzzles und die exekutiven Funktionen von Kindern](/blog/puzzles-executive-function-children) Ideen zum gemeinsamen Spielen.',
        ],
      },
    },
    pullQuote: 'Der Großteil des Schadens in der Forschung entsteht, wenn ein Kind allein ist mit einem System, das gebaut wurde, um es festzuhalten.',
    faqs: [
      { question: 'Was ist manipulatives Design in Kinder-Apps?', answer: 'Design, das dem App-Anbieter mehr dient als dem Kind, etwa Figuren, die Kinder zum Weiterspielen oder Kaufen drängen, falsche Countdowns, schwer auffindbare Ausgänge und Preise, die das Spielen verlängern sollen. Eine Studie fand es in etwa 80 % der Apps, die 3- bis 5-Jährige nutzten.' },
      { question: 'Woran erkenne ich, ob ein Spiel ruhig genug für mein Kind ist?', answer: 'Spiel es zuerst selbst und achte auf Countdowns, Werbung, die ungefragt läuft, Figuren, die deinem Kind ein schlechtes Gewissen machen, Köder wie Truhen und Drehräder und darauf, ob dein Kind jederzeit aufhören kann, ohne etwas zu verlieren.' },
      { question: 'Sind kostenlose Spiele schlechter für Kinder als kostenpflichtige?', answer: 'Die Forschung fand Werbung in jeder untersuchten kostenlosen Kinder-App und in den meisten kostenpflichtigen, und kostenlose Apps schnitten wegen ablenkender Extras bei der Lernqualität schlechter ab. Bezahlen garantiert kein ruhiges Spiel, nimmt aber oft etwas Druck heraus.' },
      { question: 'Hat OutBrick Werbung?', answer: 'Ja, ausschließlich Belohnungsvideos, und jedes läuft nur, wenn jemand auf einen Knopf drückt, um es anzufordern. Es gibt keine Banner und keine Werbung zwischen den Levels, und „Werbung entfernen“ schaltet sie ab. Die Startseite zeigt, [was Leben, Zugrücknahmen und Werbung kosten](/#fair).' },
    ],
  },
  'dyslexia-friendly-game-text': {
    title: 'Spieltext bei Legasthenie: Schrift, Abstand, Sprache',
    dek: 'Helfen Legasthenie-Schriften? Was Lesestudien über Schriftart, Größe, Buchstabenabstand und Wortwahl sagen und wie Spieltext lesbarer wird.',
    imageAlt: 'Peach und Vio links und rechts von einem Handy, das den Abschnitt Cloud Carnival auf der Karte der OutBrick-Reise zeigt, daneben schweben gelbe, orange und lila Steine',
    tags: ['Legasthenie', 'Legasthenie Schriftart', 'Lesbarkeit', 'Barrierefreiheit', 'Spieldesign'],
    intro: 'Spiele sind voller Wörter: Tutorials, Tooltips, Menüs, Sprechblasen, das Kleingedruckte bei einer Belohnung. Für Spielerinnen und Spieler mit Legasthenie kann schlecht gesetzter Text aus einem angenehmen Spiel einen Lesetest machen. Die gute Nachricht: Die Forschung dazu, was hilft, ist ziemlich eindeutig, und manches davon widerspricht verbreiteten Annahmen. Speziell entworfene Legasthenie-Schriften etwa haben sich in Studien nicht gut bewährt. Größe, Abstände und einfache Wortwahl dagegen schon. Hier steht, was die Belege sagen und wie wir versuchen, sie umzusetzen.',
    keyTakeaways: [
      'Kontrollierte Studien fanden keinen Lesevorteil durch spezielle Legasthenie-Schriften wie OpenDyslexic und Dyslexie.',
      'Die besten Belege gibt es für größeren Text und zusätzlichen Buchstabenabstand. Gängige serifenlose Schriften schneiden gut ab, Kursivschrift schlecht.',
      'In Spielen bringen weniger Wörter, einfache Formulierungen, Text, der auf den Spieler wartet, und Bedeutung, die auch über Symbole vermittelt wird, am meisten.',
    ],
    sections: {
      'dyslexia-fonts': {
        title: 'Helfen Legasthenie-Schriften?',
        paragraphs: [
          'Schriften für Leser mit Legasthenie, mit beschwerten Unterlängen und übertriebenen Buchstabenformen, werden vielfach empfohlen. Die kontrollierten Belege sind wenig schmeichelhaft für sie. Wery und Diliberto verglichen OpenDyslexic mit Arial und Times New Roman bei Grundschulkindern mit Legasthenie, beim Benennen von Buchstaben, beim Lesen von Wörtern und beim Lesen von Unsinnswörtern, und fanden weder für einzelne Kinder noch für die Gruppe eine Verbesserung bei Tempo oder Genauigkeit. Keines der Kinder sagte, dass es die Schrift bevorzuge.',
          'Kuster und Kollegen testeten die Schrift Dyslexie in zwei Experimenten mit mehr als 250 Kindern mit Legasthenie und einer Vergleichsgruppe ohne. Texte und Wortlisten in Dyslexie wurden weder schneller noch genauer gelesen als in Arial oder Times New Roman, die meisten Kinder bevorzugten die gewöhnlichen Schriften, und die Vorliebe hing nicht damit zusammen, wie gut sie lasen. In einer Eye-Tracking-Studie von Rello und Baeza-Yates, die eine Reihe von Schriften mit Lesern mit Legasthenie verglich, verbesserte OpenDyslexic das Lesen ebenfalls nicht. Die Wahl der Schrift spielte in dieser Studie aber durchaus eine Rolle: Serifenlose, nicht proportionale und aufrechte Schnitte halfen, und Kursivschrift erschwerte das Lesen.',
          'Das heißt nicht, dass jemand, der eine Legasthenie-Schrift mag, sie nicht mehr nutzen sollte. Wohlbefinden zählt, und wenn sich Lesen mit einer Schrift leichter anfühlt, ist das ein guter Grund, sie zu verwenden. Es heißt aber, dass ein Spiel eine spezielle Schrift nicht als die ganze Lösung betrachten sollte.',
        ],
      },
      'size-and-spacing': {
        title: 'Was wirklich hilft: Größe und Abstand',
        paragraphs: [
          'Am besten belegt ist mehr Abstand zwischen den Buchstaben. Zorzi und Kollegen fanden in einer großen Stichprobe italienischer und französischer Kinder mit Legasthenie, dass extragroßer Buchstabenabstand das Lesen sofort verbesserte, ganz ohne Training. Ihre Erklärung ist das sogenannte Crowding: Viele Leser mit Legasthenie werden ungewöhnlich stark von Buchstaben beeinträchtigt, die eng beieinanderstehen, und mehr Abstand lindert das Problem. Stagg und Kiss fanden dasselbe bei Jugendlichen: Extragroßer Abstand steigerte das Lesetempo in der Legasthenie-Gruppe stärker als bei Gleichaltrigen und verringerte übersprungene Wörter, während farbige Leseschablonen keinen signifikanten Unterschied machten.',
          'Auch Größe hilft. In einer weiteren Eye-Tracking-Studie fanden Rello und Baeza-Yates, dass größerer Text und breiterer Zeichenabstand Leser mit und ohne Legasthenie deutlich schneller lesen ließen. Eine größere Studie zur Lesbarkeit im Web von Rello, Pielot und Marcos fand, dass Lesbarkeit und Verständnis mit der Schriftgröße stiegen, und empfahl für textlastige Seiten mindestens 18 Punkt; größerer Zeilenabstand half dagegen nicht. Die praktische Lehre: Lass Text größer werden, und lass die Buchstaben nicht zusammenrücken.',
        ],
      },
      'game-text': {
        title: 'Was das für Text in Spielen bedeutet',
        paragraphs: [
          'Spiele haben bestimmte Gewohnheiten, die das Lesen erschweren. Anders als ein Buch verlangt ein Spiel oft, dass du liest, während gerade etwas anderes passiert, und sofort auf das Gelesene reagierst. Verspielte Zierschriften, Text über unruhigen Hintergründen, Dialoge, die von selbst weiterlaufen, und Anleitungen, die einmal in einem Pop-up erscheinen und nie wieder, erschweren das Lesen zusätzlich. Nichts davon ist nötig. Bei den meisten Lösungen geht es darum, das Tempo des Lesers zu respektieren.',
        ],
        bullets: [
          'Verwende für alles, was ein Spieler lesen muss, eine klare serifenlose Schrift, und heb dir Zierschriften für Titel auf.',
          'Setz Anleitungen oder längere Passagen nie kursiv.',
          'Unterstütze die Textgröße des Systems, damit Text wächst, wenn der Spieler es möchte, und gib den Buchstaben Raum.',
          'Setz Text auf eine schlichte Fläche mit hohem Kontrast, nicht über die Spielszene.',
          'Lass den Spieler Dialoge selbst weiterschalten. Lass Text nie nach Zeitablauf verschwinden.',
          'Kombiniere Wörter mit Symbolen, damit ein Spieler einen Knopf erkennt, ohne ihn lesen zu müssen.',
          'Mach Anleitungen nach dem Tutorial leicht wieder auffindbar.',
        ],
        note: 'Kontrast ist für alle Leser wichtig, besonders mit zunehmendem Alter. Mehr dazu in [Spiele für ältere Augen und Hände gestalten](/blog/designing-games-for-older-players).',
      },
      'plain-words': {
        title: 'Einfache Sprache gehört zur Barrierefreiheit',
        paragraphs: [
          'Typografie reicht nur so weit. Die Wörter selbst zählen genauso viel. Kurze Sätze, gängige Wörter, ein Gedanke pro Zeile und das wichtigste Wort zuerst helfen Lesern mit Legasthenie, und sie helfen auch allen anderen, besonders jüngeren Spielern und Menschen, die in einer Fremdsprache spielen. Die Richtlinie des W3C zum [Leseniveau](https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html) vertritt dasselbe für das Web. Einen verwandten Punkt zur Farbe machen wir in [warum Farbe in einem Puzzle nie der einzige Hinweis sein sollte](/blog/color-shape-accessibility): Wichtige Informationen sollten nie an einem einzigen Kanal hängen, und für viele Spieler ist Text ein schwieriger Kanal.',
          'Für uns ist das eine persönliche Sache. Die neun Freunde aus Steinen in OutBrick sprechen nur in Sprechblasen, ohne Stimmen, deshalb kommt es darauf an, wie diese Sprechblasen geschrieben sind. Wir halten sie kurz, und das Ziel eines Feldes zeigen seine Steine und Tore statt einer Anleitung: Jeder Stein verlässt das Feld durch das Tor in seiner Farbe, und das Zuglimit erscheint als Seil. Größerer Text skaliert überall mit. Wie wenig Lesen ein Feld verlangt, siehst du, wenn du [eines im Browser spielst](/play).',
        ],
      },
      'for-players': {
        title: 'Tipps für Spieler mit Legasthenie',
        paragraphs: [
          'Auf iPhone und iPad bietet Einstellungen, Bedienungshilfen, Anzeige & Textgröße die Optionen Größerer Text und Fetter Text, und gut gemachte Spiele berücksichtigen beide. „Gesprochene Inhalte“ im selben Menü Bedienungshilfen kann ausgewählten Text vorlesen, und „Bildschirminhalt sprechen“ liest mit einem Zwei-Finger-Wisch vom oberen Rand nach unten alles auf dem Bildschirm vor. Such nach Spielen, deren Menüs Symbole und Wörter verwenden, und scheu dich nicht, die Optionen eines Spiels für Textgröße oder Untertitel zu nutzen. Einstellungsmenüs in Spielen bekommen selten viel Aufmerksamkeit; die, die für Spieler mit Legasthenie gut funktionieren, sind meist für alle gut. Mehr dazu, wie Einstellungen und Schwierigkeitsgrad Spiele öffnen können, findest du in [was der Assist-Modus von Celeste lehrt](/blog/celeste-assist-mode-accessibility).',
          'Vor allem ist Legasthenie kein Maßstab dafür, wie gut jemand spielt. Viele Spieler mit Legasthenie sind hervorragend in räumlichen und strategischen Spielen, die ganz andere Fähigkeiten verlangen als Lesen. Ein Spiel, das seinen Text richtig macht, stellt ihnen einfach kein unnötiges Hindernis mehr in den Weg. Wenn dir der Text in OutBrick irgendwo im Weg steht, sag uns auf unserer [Support-Seite](/support), wo.',
        ],
      },
    },
    pullQuote: 'Es heißt aber, dass ein Spiel eine spezielle Schrift nicht als die ganze Lösung betrachten sollte.',
    faqs: [
      { question: 'Welche Schriftart ist bei Legasthenie am besten?', answer: 'Studien haben nicht die eine beste Schrift gefunden. Gängige serifenlose Schriften wie Arial und Verdana schneiden gut ab, Kursivschrift schlecht, und spezielle Legasthenie-Schriften haben das Lesen in kontrollierten Studien nicht verbessert.' },
      { question: 'Helfen Legasthenie-Schriften wie OpenDyslexic?', answer: 'Kontrollierte Studien zu OpenDyslexic und Dyslexie fanden bei Kindern mit Legasthenie keine Verbesserung von Lesetempo oder Genauigkeit. Manche Menschen empfinden sie trotzdem als angenehm, und das ist ein guter Grund, sie zu nutzen.' },
      { question: 'Was macht Text für Menschen mit Legasthenie leichter lesbar?', answer: 'Die stärksten Belege gibt es für größeren Text und zusätzlichen Abstand zwischen den Buchstaben. Einfache Formulierungen, kurze Sätze und Text auf einem klaren Hintergrund mit hohem Kontrast helfen ebenfalls.' },
      { question: 'Wie viel muss man bei OutBrick lesen?', answer: 'Sehr wenig. Ein Feld liest du über Steine, Tore, eine Zugzahl und ein Seil, und die Sprechblasen der Freunde aus Steinen sind kurz gehalten. Größerer Text skaliert überall mit.' },
    ],
  },
  'designing-games-for-older-players': {
    title: 'Spiele für ältere Augen und Hände: lesbar und nachsichtig',
    dek: 'Wie sich Sehen, Motorik und Reaktionszeit im Alter ändern, was das für Kontrast, Ziele und Tempo heißt, und Prinzipien für Spiele, die mit 80 gut bleiben.',
    imageAlt: 'Zippy und Bloo links und rechts von einem Handy, das den Abschnitt Autumn Orchard auf der Karte der OutBrick-Reise zeigt, daneben schweben blaue, gelbe und türkise Steine',
    tags: ['Spieldesign', 'Barrierefreiheit', 'Spiele für Senioren', 'inklusives Design', 'Mobile Design'],
    intro: 'Wir haben schon darüber geschrieben, wie ältere Spieler ein gutes Puzzlespiel auswählen können. Dieser Beitrag ist für die andere Seite des Bildschirms: für Designer und Entwickler, die wollen, dass ihr Spiel für Menschen in ihren Siebzigern und Achtzigern funktioniert. Er stützt sich auf die Forschung dazu, wie sich Sehen, Bewegung und Tempo mit dem Alter verändern, und macht daraus eine kleine Reihe von Prinzipien. Keines davon ist exotisch. Die meisten machen ein Spiel für alle besser, und das ist das beste Argument dafür.',
    keyTakeaways: [
      'Das Altern beeinträchtigt die Kontrastempfindlichkeit, das Sehen bei schwachem Licht und die Verarbeitungsgeschwindigkeit, nicht nur die Sehschärfe. Größe allein löst das nicht.',
      'Touchscreens verkleinern den Abstand zwischen älteren und jüngeren Nutzern, aber kleine Ziele und präzises Ziehen kosten ältere Spieler weiterhin mehr.',
      'Das Alter sagt wenig über die Fähigkeiten. Gestalte mit Einstellungen für eine Bandbreite an Fähigkeiten, nicht für ein Klischee.',
    ],
    sections: {
      'how-vision-changes': {
        title: 'Wie sich das Sehen verändert, jenseits der Brille',
        paragraphs: [
          'Cynthia Owsleys Übersicht über 25 Jahre Forschung zu Altern und Sehen ist ein nützliches Gegengewicht zu der Vorstellung, ältere Augen bräuchten einfach größeren Text. Zu den Veränderungen, die sie beschreibt, gehören ein Verlust an Kontrastempfindlichkeit, sodass sich Hellgrau auf Weiß oder Dunkelblau auf Schwarz schwer unterscheiden lassen; schlechteres Sehen bei wenig Licht; langsamere Erholung nach Blendung; geringere Empfindlichkeit für Flimmern und Bewegung; und langsamere visuelle Verarbeitung, es dauert also länger, das Geschehen auf dem Bildschirm zu erfassen.',
          'Jede davon hat Folgen fürs Design. Der Verlust an Kontrastempfindlichkeit spricht für starken Kontrast zwischen Text und Hintergrund und zwischen Spielteilen und Spielfeld, nicht nur für große Schrift. Schlechtes Sehen bei wenig Licht zählt bei Spielen, die im Bett oder abends auf dem Sofa gespielt werden, wo dunkle Designs und gedämpfte Paletten verbreitet sind. Langsamere Verarbeitung spricht gegen Informationen, die nur kurz erscheinen oder sich schnell ändern. Hawthorns Übersicht zum Altern für Interface-Designer, inzwischen ein Vierteljahrhundert alt, kam zu vielen derselben Schlüsse und ist nach wie vor eine gute Checkliste.',
          'Auch das Farbsehen verändert sich. Die Augenlinse vergilbt mit dem Alter, und vor allem Blau- und Lilatöne werden schwerer zu unterscheiden, ein anderes Muster als die Rot-Grün-Verwechslungen einer angeborenen Farbenblindheit. Ein Spiel, das auf einem feinen Unterschied zwischen zwei Blautönen beruht, kann für einen älteren Spieler unspielbar werden, ohne dass es im Team jemand merkt. Unser Beitrag über [Farbenblindheit in Spielen](/blog/colour-blindness-in-games) erklärt, warum ein Symbol auf jedem farbigen Teil in beiden Fällen hilft.',
        ],
      },
      'how-hands-change': {
        title: 'Wie sich die Motorik verändert',
        paragraphs: [
          'Die Übersicht von Seidler und Kollegen zu Motorik und Altern beschreibt langsamere Bewegungen, geringere Koordination und eine unbeständigere Feinmotorik, verbunden mit Veränderungen in den motorischen Systemen des Gehirns. Bei vielen Menschen kommen Tremor und Arthrose hinzu. Auf einem Touchscreen zeigt sich das in mehr verfehlten Tipps, mehr versehentlichen Berührungen und mehr Schwierigkeiten mit Gesten, die präzise oder schnell sein müssen.',
          'Touchscreens passen trotzdem gut zu älteren Nutzern. Findlater und Kollegen verglichen ältere und jüngere Erwachsene beim Zeigen, Ziehen und anderen Aufgaben mit Maus und Touchscreen. Ältere Erwachsene waren insgesamt langsamer, aber der Touchscreen verkleinerte den Abstand: Er verkürzte ihre Bewegungszeit gegenüber der Maus um 35 %, bei jüngeren Erwachsenen um 16 %, und auch die Fehler gingen zurück. Motti, Vigouroux und Gorce testeten Drag-and-drop in taktilen Puzzlespielen mit 24 Menschen zwischen 65 und 86 Jahren und fanden es selbst auf einem Smartphone effizient, auch wenn ein Stift die Genauigkeit verbesserte. Die Lehre lautet nicht, Touch zu meiden, sondern Ziele großzügig zu bemessen.',
        ],
      },
      'age-is-not-ability': {
        title: 'Das Alter sagt wenig über das Können',
        paragraphs: [
          'Es ist verlockend, einen „leichten Modus für Senioren“ zu bauen. Die Forschung legt nahe, dass das ein Fehler wäre. Findlater und Zhang sammelten Eingabedaten von mehr als 700 Menschen und werteten 318 davon aus, im Alter von 18 bis 83 Jahren. Im Durchschnitt sank die Leistung mit dem Alter stetig, aber die Einzelnen unterschieden sich so stark, dass das Alter einer Person, ja selbst die Angabe, ob sie eine motorische Einschränkung hatte, wenig darüber verriet, wie sie tatsächlich abschneiden würde. In Mottis Studie schnitten einige Teilnehmende über 80 besser ab als manche in ihren Siebzigern.',
          'Gestalte also für eine Bandbreite. Bau Einstellungen ein, mit denen jeder Spieler anpassen kann, respektiere die Systemeinstellungen, die er schon gewählt hat, und mach die Standardwerte so großzügig, dass die meisten sie nie ändern müssen. Unsere [Checkliste für ältere Spieler](/blog/puzzle-games-for-older-adults) zeigt, wie das von der anderen Seite aussieht.',
        ],
      },
      principles: {
        title: 'Fünf Prinzipien: lesbar, tippbar, nachsichtig, ohne Eile, vorhersehbar',
        paragraphs: [
          'Zusammengenommen weist die Forschung auf fünf Prinzipien hin. Sie überschneiden sich mit den [Vorgaben zur Zielgröße](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) im Barrierefreiheitsstandard des Webs und mit dem, was wir beim Bau eines Puzzlespiels gelernt haben.',
          'Der nützlichste Test ist zugleich der billigste: Setz ein paar Menschen in ihren Siebzigern und Achtzigern vor das Spiel und schau ihnen beim Spielen zu, ohne zu helfen. Wo sie zögern, die Augen zusammenkneifen, zweimal tippen oder fragen, was etwas bedeutet, hat das Design sie im Stich gelassen, und meist hat es auch viele jüngere Spieler im Stich gelassen, nur leiser. Dieselbe Übung kannst du mit uns machen, indem du jemandem [ein Feld im Browser](/play) in die Hand gibst.',
        ],
        bullets: [
          'Lesbar: überall hoher Kontrast, klare serifenlose Schrift, die mit der Textgröße des Systems wächst, nichts Wichtiges in dünner, blasser oder kleiner Schrift.',
          'Tippbar: große Ziele mit Abstand dazwischen, in Reichweite des Daumens platziert, und Gesten, die einen Finger und kein Tempo brauchen.',
          'Nachsichtig: eine einfache Zugrücknahme, eine Bestätigung vor allem, was etwas kostet, und keine Strafe für eine verirrte Berührung.',
          'Ohne Eile: keine Timer im normalen Spiel, keine Informationen, die vorbeihuschen, und die Freiheit, jederzeit ohne Verlust aufzuhören.',
          'Vorhersehbar: einheitliche Layouts und Bedienelemente, keine überraschenden Pop-ups und neue Spielmechaniken eine nach der anderen.',
        ],
      },
      'in-practice': {
        title: 'Wie das bei OutBrick aussieht',
        paragraphs: [
          'So haben wir versucht, diese Prinzipien umzusetzen, und hier liegen die Grenzen. Jeder Stein trägt seine Identität in Farbton, Form und Noppen, und die Symbole des Farbenblind-Modus sind standardmäßig an, was auch bei den Blau-Lila-Verwechslungen hilft, die mit dem Alter häufig werden. Größerer Text skaliert überall mit, und „Bewegung reduzieren“ wird überall beachtet. Es gibt nie eine Uhr: Jedes Feld zeigt sein Zuglimit vor dem ersten Zug, und die erste Zugrücknahme auf jedem Feld ist gratis. Schlüssel, Schlösser, Kisten und Tore kommen erst auf späteren Feldern dazu, wenn die Grundlagen vertraut sind. Der Fortschritt wird über iCloud synchronisiert, sodass das, was du auf dem iPhone spielst, auf den größeren Bildschirm eines iPad mitkommt.',
          'Wir haben nicht alles gelöst. Einen Stein zu schieben ist weiterhin eine gerichtete Geste, und manche Spieler werden sie schwerer finden als ein Tippen. Deshalb bittet die [Seite zur Barrierefreiheit](/accessibility) um Einzelheiten, wenn ein Bedienelement schwer zu erreichen oder zu lesen ist. Zum verwandten Fall von Spielern mit motorischen Einschränkungen siehe [einhändig spielen auf dem iPhone](/blog/one-handed-games-iphone).',
        ],
      },
    },
    pullQuote: 'Gestalte mit Einstellungen für eine Bandbreite an Fähigkeiten, nicht für ein Klischee.',
    faqs: [
      { question: 'Wie sollte man Spiele für ältere Menschen gestalten?', answer: 'Mit hohem Kontrast und skalierbarem Text, großen Touch-Zielen mit genug Abstand, einer einfachen Zugrücknahme, ohne Timer im normalen Spiel und mit einheitlichen, vorhersehbaren Layouts. Die meisten dieser Änderungen helfen allen Spielern.' },
      { question: 'Sind Touchscreens gut für ältere Menschen?', answer: 'Im Allgemeinen ja. Eine Studie fand, dass ein Touchscreen die Bewegungszeit älterer Erwachsener gegenüber einer Maus um 35 % verkürzte und so den Abstand zu jüngeren Nutzern verkleinerte, auch wenn kleine Ziele und präzise Gesten weiterhin mehr Fehler verursachen.' },
      { question: 'Warum ist Kontrast für ältere Spieler wichtiger als die Textgröße?', answer: 'Das Altern verringert die Kontrastempfindlichkeit und das Sehen bei schwachem Licht, deshalb bleibt blasser Text oder Text mit wenig Kontrast schwer lesbar, selbst wenn er groß ist. Starker Kontrast und größerer Text wirken am besten zusammen.' },
      { question: 'Sollten Spiele einen eigenen Seniorenmodus haben?', answer: 'Forschung zur Eingabeleistung zeigt, dass das Alter die individuellen Fähigkeiten schlecht vorhersagt. Großzügige Standardwerte und anpassbare Einstellungen dienen älteren Spielern besser als ein eigener Modus, der auf Annahmen über das Alter beruht.' },
    ],
  },
  'sensory-friendly-game-design': {
    title: 'Reizarme Spiele: ruhiges Design für neurodivergente Spieler',
    dek: 'Viele autistische und neurodivergente Menschen reagieren empfindlich auf Ton, Licht und Überraschung. Was die Forschung sagt und wie ruhiges Design hilft.',
    imageAlt: 'Moss und Poppy links und rechts von einem Handy, das ein superschweres OutBrick-Spielfeld in Level 520 zeigt, daneben schweben türkise, grüne und blaue Steine',
    tags: ['Neurodiversität', 'Autismus', 'Reizempfindlichkeit', 'inklusives Design', 'ruhige Spiele'],
    intro: 'Für viele autistische Menschen und für viele andere, die Sinnesreize anders verarbeiten, ist das moderne Spiel eine Menge. Musik, die sich nicht getrennt leiser stellen lässt, plötzliche Soundeffekte, blinkende Feiern, eine Mitteilung, die mitten in einen Gedanken platzt, ein Menü, das sich ohne Vorwarnung ändert. Nichts davon soll jemanden ausschließen, und alles davon kann es. Dieser Beitrag zeigt, was die Forschung über sensorische Unterschiede und Spielen sagt, und welche Designentscheidungen ein Spiel vorhersehbar, leise und druckarm machen, ohne es langweilig zu machen.',
    keyTakeaways: [
      'Sensorische Unterschiede, sowohl Über- als auch Unterempfindlichkeit, sind bei autistischen Menschen häufig und von Person zu Person sehr verschieden.',
      'Für viele autistische Spieler sind Spiele ein geschätzter, oft sozialer Teil des Lebens. Ziel der Forschung sollten bessere Spiele sein, nicht weniger Spielen.',
      'Reizarmes Design dreht sich vor allem um Kontrolle: getrennte Einstellungen für Lautstärke und Effekte, vorhersehbare Rückmeldungen und keine Überraschungen.',
    ],
    sections: {
      'sensory-differences': {
        title: 'Sensorische Unterschiede sind häufig und vielfältig',
        paragraphs: [
          'Ben-Sasson und Kollegen aktualisierten 2019 ihre Metaanalyse zu sensorischen Symptomen bei Autismus und fassten 55 Fragebogenstudien mit mehr als 4.600 autistischen Menschen zusammen. Im Vergleich zu typisch entwickelten Gleichaltrigen berichteten autistische Menschen von deutlich mehr Überempfindlichkeit (Geräusche, Licht oder Texturen wirken überwältigend), Unterempfindlichkeit (manche Empfindungen werden nicht bemerkt) und Reizsuche. Die Unterschiede waren groß, aber die Ergebnisse schwankten auch stark zwischen Studien und Personen, eine Erinnerung daran, dass es nicht das eine autistische sensorische Profil gibt.',
          'Reizempfindlichkeit ist nicht auf Menschen mit Diagnose beschränkt. Robertson und Simmons befragten 212 Erwachsene aus der Allgemeinbevölkerung und fanden einen engen Zusammenhang zwischen der Zahl autistischer Merkmale, die jemand angab, und der Häufigkeit sensorischer Verarbeitungsschwierigkeiten. Für sensorisches Wohlbefinden zu gestalten ist also kein Nischenthema. Es hilft einer großen Bandbreite von Spielern, auch Menschen mit Migräne, Ängsten oder einfach Müdigkeit am Ende eines langen Tages.',
        ],
      },
      language: {
        title: 'Ein Hinweis zur Sprache',
        paragraphs: [
          'Wörter sind hier wichtig, und es gibt keine einheitliche Antwort. Kenny und Kollegen fragten mehr als 3.400 Mitglieder der britischen Autismus-Community, welche Begriffe sie bevorzugen. „Autismus“ und „im Autismus-Spektrum“ fanden breite Zustimmung. „Autistisch“ wurde von vielen autistischen Erwachsenen und Familien befürwortet, aber von weniger Fachleuten, während „Person mit Autismus“ bei Fachleuten beliebter war als bei autistischen Erwachsenen. Einen Begriff, den alle bevorzugten, gab es nicht. In diesem Beitrag sprechen wir meist von autistischen Menschen, der Vorliebe vieler autistischer Erwachsener folgend, und von neurodivergent für die größere Gruppe, im Wissen, dass Einzelne sich anders entscheiden.',
          'Wir vermeiden auch eine medizinische Sichtweise. Sensorische Unterschiede gehören dazu, wie manche Menschen die Welt erleben; sie sind nichts, was ein Spiel zu beheben versuchen sollte. Der Leitfaden der National Autistic Society zu [sensorischen Unterschieden](https://www.autism.org.uk/advice-and-guidance/topics/sensory-differences/sensory-differences/all-audiences) ist eine gute, verständliche Einführung.',
        ],
      },
      'what-autistic-players-say': {
        title: 'Was die Forschung mit autistischen Spielern zeigt',
        paragraphs: [
          'Viele frühe Studien zu Autismus und Videospielen konzentrierten sich auf Risiken. Als Mazurek, Engelhardt und Clark autistische Erwachsene direkt fragten, ergab sich ein vollständigeres Bild. Spiele waren für viele Teilnehmende ein wichtiger und angenehmer Teil ihres Lebens, geschätzt als Unterhaltung, zur Entspannung und zum Stressabbau sowie für soziale Kontakte, neben einigen Bedenken wegen der Spielzeit. Ringlands ethnografische Studie einer Minecraft-Community für autistische Kinder zeigte, wie eine sorgfältig betreute virtuelle Welt Kindern einen angenehmen Ort bieten konnte, um mit Gleichaltrigen zu spielen, und argumentierte, dass solche Räume nicht weniger echt sind als ein Spielplatz.',
          'Spiel und Gerling werteten 66 Forschungsarbeiten zu Spielen für neurodivergente Spieler aus und gingen mit dem Feld kritisch ins Gericht. Die meisten Spiele waren für Kinder gebaut, von oben herab gestaltet, auf Bildung oder Therapie ausgerichtet und von einem medizinischen Modell von Behinderung geprägt statt davon, was neurodivergenten Spielern selbst Spaß macht. Ihr Fazit taugt für jeden Designer: Bau Spiele, die neurodivergente Menschen spielen wollen, und gib ihnen die Kontrolle, statt Spiele, die sie verändern wollen.',
          'Das heißt auch, die soziale Seite des Spielens ernst zu nehmen, die viele autistische Spieler schätzen, und den Druck, der damit einhergehen kann. Wettkampfmodi, öffentliche Bestenlisten und Chats mit Fremden passen zu manchen Spielern und überfordern andere. Ein Spiel kann sie anbieten, ohne zu drängen, sodass jemand, der ein ruhiges Puzzle für sich allein möchte, sich nie durch soziale Aufforderungen kämpfen muss, um es zu finden.',
        ],
      },
      'design-principles': {
        title: 'Wie reizarmes Design aussieht',
        paragraphs: [
          'Der rote Faden ist Kontrolle. Menschen unterscheiden sich darin, welche Reize ihnen schwerfallen, deshalb ist das Ziel nicht ein einziger „Ruhemodus“, sondern die Möglichkeit, jeden Kanal lauter, leiser oder ganz abzuschalten, und ein Spiel, das sich jedes Mal gleich verhält.',
          'Vorhersehbarkeit verdient besondere Aufmerksamkeit, denn Spiele setzen so oft auf Überraschung. Ein plötzliches Ereignis kann den einen Spieler begeistern und den anderen belasten. Die Antwort ist nicht, alles Neue zu streichen, sondern es anzukündigen: Sag dem Spieler, dass eine neue Mechanik kommt, lass ihn sie vorab ansehen, und halt die Regeln der Welt stabil, sobald sie gelernt sind. Routine kann für sich genommen ein Vergnügen sein, und das macht einen Teil des Reizes eines [täglichen Feldes](/daily) aus, das jeden Tag zur selben Zeit in derselben Form kommt.',
        ],
        bullets: [
          'Getrennte Regler für Musik, Soundeffekte und Haptik, die sich jeweils ganz abschalten lassen.',
          'Die Systemeinstellung „Bewegung reduzieren“ respektieren und nie große Bildschirmflächen blinken lassen.',
          'Vorhersehbare Rückmeldungen: Dieselbe Aktion erzeugt immer denselben Ton, dieselbe Animation und dasselbe Ergebnis.',
          'Keine Überraschungen: keine Pop-ups mitten im Spiel, keine plötzlichen lauten Geräusche und eine Vorwarnung, bevor etwas Neues erscheint.',
          'Jederzeit pausieren und aufhören, ohne etwas zu verlieren, und keine Uhr, die den Spieler antreibt.',
          'Klare, wörtlich gemeinte Anleitungen, die sich wiederfinden lassen, und einheitliche Menüs, die sich nicht von selbst umsortieren.',
          'Belohnungen und Feiern, die kurz sind und sich dämpfen lassen.',
        ],
      },
      outbrick: {
        title: 'Wo OutBrick steht',
        paragraphs: [
          'Wir haben OutBrick nicht für eine bestimmte Gruppe entworfen, aber viele dieser Prinzipien liegen uns am Herzen. Ton, Musik, Haptik und Mitteilungen lassen sich in den Einstellungen jeweils einzeln abschalten. „Bewegung reduzieren“ wird überall beachtet und nimmt Parallax, Konfetti und federnde Übergänge zurück. Die neun Freunde aus Steinen sprechen in Sprechblasen, nie mit Stimmen, sodass das Spiel völlig still sein kann. Es gibt keine Uhr: Jedes Feld zeigt sein Zuglimit vor dem ersten Zug, und ein Schub verhält sich immer gleich, der Stein gleitet, bis ihn etwas stoppt. Nichts unterbricht ein Feld, und Werbung besteht aus Belohnungsvideos, die nur laufen, wenn jemand auf einen Knopf drückt, um eines anzufordern.',
          'Manchen Spielern mögen Teile des Spiels unruhig vorkommen, etwa die Feiern oder die Karte der Reise, und das möchten wir wissen. Die [Seite zur Barrierefreiheit](/accessibility) erklärt, wie du uns erreichst. Mehr über ruhiges Design findest du in [was ein Puzzlespiel entspannend macht](/blog/relaxing-puzzle-games-what-makes-one-calm) und [warum „Bewegung reduzieren“ zählt](/blog/reduce-motion-games), und dazu, wann man ein Spiel besser weglegt, in [wann spielen, wann pausieren](/blog/when-to-play-and-when-to-pause).',
        ],
      },
    },
    pullQuote: 'Ihr Fazit taugt für jeden Designer: Bau Spiele, die neurodivergente Menschen spielen wollen, und gib ihnen die Kontrolle, statt Spiele, die sie verändern wollen.',
    faqs: [
      { question: 'Was macht ein Spiel reizarm?', answer: 'Getrennte Regler für Musik, Soundeffekte und Vibration, Rücksicht auf „Bewegung reduzieren“, vorhersehbare Rückmeldungen, keine plötzlichen Geräusche oder Pop-ups und die Freiheit, jederzeit zu pausieren oder aufzuhören, ohne Fortschritt zu verlieren.' },
      { question: 'Sind Videospiele gut für autistische Menschen?', answer: 'Forschung mit autistischen Erwachsenen zeigt, dass Spiele oft eine geschätzte Quelle von Freude, Entspannung und sozialen Kontakten sind. Wie für alle zählen die richtigen Spiele und ein gesundes Maß mehr als Spiele im Allgemeinen.' },
      { question: 'Welche iPhone-Einstellungen helfen Spielern, die empfindlich auf Ton und Licht reagieren?', answer: '„Bewegung reduzieren“ unter Bedienungshilfen, Bewegung dämpft Animationen in Apps, die die Einstellung respektieren, Fokus-Modi halten Mitteilungen beim Spielen zurück, und die System-Haptik lässt sich unter Töne & Haptik abschalten. Prüf dann die eigenen Ton- und Effekteinstellungen jedes Spiels.' },
      { question: 'Kann man OutBrick ohne Ton spielen?', answer: 'Ja. Ton, Musik, Haptik und Mitteilungen lassen sich in den Einstellungen jeweils einzeln abschalten, und die Freunde aus Steinen sprechen nur in Sprechblasen, sodass du das Spiel in völliger Stille spielen kannst.' },
    ],
  },
};
