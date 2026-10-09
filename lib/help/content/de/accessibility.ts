import type { HelpArticle } from '../../model.ts';

/** Das Regal Bedienungshilfen, auf Deutsch. Geprüft mit 5.1.1 (68). */
export const accessibilityArticles: HelpArticle[] = [
  {
    slug: 'accessibility',
    category: 'accessibility',
    cover: 'settings-a11y',
    title: 'Bedienungshilfen in OutBrick: hier anfangen',
    summary:
      'Alle Wege, wie sich OutBrick an dich anpasst, von VoiceOver und Schaltersteuerung über Farbsymbole, ein Brett mit hohem Kontrast und langsamere Animationen bis hin zu: keine Uhr. Mit einem Startpunkt für deine Bedürfnisse.',
    keywords: 'barrierefreiheit bedienungshilfen inklusiv behinderung blind sehbehindert gehörlos schwerhörig motorik farbenblind farbsehschwäche rot-grün-schwäche legasthenie',
    sections: [
      {
        id: 'overview',
        title: 'Gebaut, damit du auf deine Weise spielst',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick ist ein ruhiges Puzzlespiel **ganz ohne Uhr**: Du kannst dir für jeden Zug so viel Zeit lassen, wie du willst. Jedes Brett lässt sich mit [VoiceOver](help:voiceover) lesen und spielen, ebenso mit [Sprachsteuerung, Schaltersteuerung oder Tastatur](help:voice-control-switch-control-keyboard), und das Spiel hat eigene [Einstellungen für Bedienungshilfen](#where) für Sehen, Bewegung und Reichweite der Hand. Außerdem folgt es den Bedienungshilfen, die du auf deinem iPhone oder iPad schon eingestellt hast.',
          },
          {
            t: 'list',
            items: [
              '**Farbe ist nie der einzige Hinweis.** Farbsymbole sind von Anfang an eingeschaltet, und jeder Stein, jedes Tor und jedes Ziel kann eine Form tragen. Siehe [Sehen, Hören und Bewegung](help:vision-hearing-and-motion).',
              '**Jedes Teil hat einen Namen.** VoiceOver liest Art, Farbe und Zustand eines Teils vor, zum Beispiel „Linienstein, Blau, waagerecht, räumt seine Reihe“, und ein verdeckter Stein verrät nie seine Farbe.',
              '**Spiel auf deine Art.** Schieben oder tauschen per Berührung, mit VoiceOver-Aktionen, indem du „Rot 14 nach links schieben“ sagst, mit Schaltern oder mit den Pfeiltasten.',
              '**Zeit zum Nachdenken.** Keine Uhr, ein Animationstempo von 50 % bis 200 % und auf Wunsch **Tausch bestätigen**, damit nichts aus Versehen gespielt wird.',
              '**Nichts zu hören, was du nicht auch sehen kannst.** Die Freunde sprechen in Sprechblasen, nicht mit Stimmen, und zu jedem Ton gibt es etwas Passendes auf dem Bildschirm.',
            ],
          },
        ],
      },
      {
        id: 'where',
        title: 'Wo die Einstellungen sind',
        blocks: [
          {
            t: 'steps',
            items: [
              'Tippe auf dem **Startbildschirm** oder auf der **Reise** oben rechts auf das Zahnrad. Mit VoiceOver ist das die Taste **Einstellungen**.',
              'Wähle oben in den Einstellungen den Tab **Bedienungshilfen**. (Im Tab **Spiel** liegen Töne, Musik, Haptik und Mitteilungen; siehe [Alle Einstellungen erklärt](help:settings).)',
              'Ändere immer nur eine Sache und spiel dann ein Brett, das du kennst, um den Unterschied zu spüren.',
            ],
          },
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'Die Einstellungen im Tab Bedienungshilfen. Das Animationstempo steht auf 100 %, mit Auswahl von 50 % bis 200 %. Das Detail der Ansagen steht auf Standard, mit Kurz und Ausführlich auf beiden Seiten. Darunter Schalter für Farbenblind (an), Brett mit hohem Kontrast, Leiste für Linkshänder, Tausch bestätigen und Reihenklang (alle aus).',
            caption: 'Einstellungen › Bedienungshilfen. Die Zeile unter jedem Element sagt VoiceOver auch als Hinweis an.',
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Du kannst diesen Tab direkt öffnen: Such in Spotlight nach „Bedienungshilfen“ und wähle das Ergebnis von OutBrick.',
          },
          {
            t: 'table',
            caption: 'Der Tab Bedienungshilfen, von oben nach unten',
            head: ['Einstellung', 'Was sie tut', 'Anfangs'],
            rows: [
              ['Animationstempo', 'Wie schnell Steine tauschen, fallen und verschwinden: 50 %, 75 %, 100 %, 150 % oder 200 %. Langsamer ist leichter zu verfolgen.', '100 %'],
              ['Detail der Ansagen', 'Wie viel VoiceOver nach jedem Zug sagt: Kurz, Standard oder Ausführlich.', 'Standard'],
              ['Farbenblind', 'Prägt jedem Stein eine Form auf, damit Farbe nie der einzige Unterschied ist.', 'An'],
              ['Brett mit hohem Kontrast', 'Ein dunkler Boden, weiße Umrisse, große Farbsymbole und dicke Torrahmen.', 'Aus'],
              ['Leiste für Linkshänder', 'Legt die Booster unter deinen linken Daumen und Pause nach rechts.', 'Aus'],
              ['Tausch bestätigen', 'Mit Schaltersteuerung, VoiceOver, Sprachsteuerung oder Tastatur wählst du einen Zug zweimal, bevor er ausgeführt wird.', 'Aus'],
              ['Reihenklang', 'Fügt dem Brett die Aktion **Reihe anhören** hinzu: ein kurzer, leiser Ton pro Teil, eine Tonhöhe pro Farbsymbol.', 'Aus'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Farbenblind wird in iCloud gesichert und folgt dir auf deine anderen Geräte. Die übrigen Brett-Einstellungen bleiben auf dem Gerät, auf dem du sie gewählt hast, denn was auf einem iPad passt, passt nicht unbedingt auf einem iPhone.',
          },
        ],
      },
      {
        id: 'starting-points',
        title: 'Ein Startpunkt für deine Bedürfnisse',
        blocks: [
          { t: 'p', text: 'Alle sind verschieden, sieh das also als Vorschläge zum Ausprobieren, nicht als Regeln.' },
          {
            t: 'table',
            head: ['Wenn du …', 'Probier zuerst das'],
            rows: [
              ['blind bist oder VoiceOver nutzt', 'Lies [Mit VoiceOver spielen](help:voiceover). Lass das **Detail der Ansagen** anfangs auf Standard und probier **Reihenklang**, um eine Reihe mit dem Gehör abzutasten.'],
              ['eine Sehbehinderung hast', 'Schalte **Brett mit hohem Kontrast** ein, stell in den iPhone-Einstellungen **Größerer Text** höher und leg den Finger auf die Kopfzeile oder die Leiste des Bretts, um sie zu vergrößern.'],
              ['Farben anders siehst', 'Lass **Farbenblind** eingeschaltet: Jede Farbe hat ihre eigene Form. Hoher Kontrast macht diese Formen größer.'],
              ['empfindlich auf Bewegung oder Blinken reagierst', 'Schalte in den iPhone-Einstellungen **Bewegung reduzieren** und **Blinkende Lichter abdunkeln** ein und stell das **Animationstempo** auf 75 % oder 50 %.'],
              ['mit einer Hand spielst oder eingeschränkte Reichweite hast', 'Probier die **Leiste für Linkshänder**, wenn du das Telefon in der linken Hand hältst, und **Tausch bestätigen**, wenn ein Ausrutscher des Fingers einen Zug auslösen könnte.'],
              ['Schalter, deine Stimme oder eine Tastatur nutzt', 'Lies [Sprachsteuerung, Schaltersteuerung und Tastaturen](help:voice-control-switch-control-keyboard).'],
              ['gehörlos oder schwerhörig bist', 'Nichts in OutBrick hängt vom Ton ab. Die Freunde sprechen in Sprechblasen, und mit Haptik spürst du, wie Züge landen.'],
              ['gern Zeit zum Nachdenken hast', 'Es gibt nirgends eine Uhr. Mach das **Animationstempo** langsamer und nutze Tipps, wann immer du willst.'],
            ],
          },
        ],
      },
      {
        id: 'system',
        title: 'iPhone- und iPad-Einstellungen, denen OutBrick folgt',
        blocks: [
          { t: 'p', text: 'Diese findest du in der App **Einstellungen** auf iPhone oder iPad unter **Bedienungshilfen**, und OutBrick reagiert von selbst darauf.' },
          {
            t: 'defs',
            items: [
              { term: 'VoiceOver', text: 'Jedes Brett, jedes Menü und jede Karte ist beschriftet. Siehe [Mit VoiceOver spielen](help:voiceover).' },
              { term: 'Größerer Text', text: 'Text wächst bis zur größten Bedienungshilfen-Größe, und die Layouts stapeln sich, damit nichts abgeschnitten wird. Kopfzeile und Leiste des Bretts unterstützen die Anzeige großer Inhalte (Large Content Viewer): Leg den Finger darauf, um eine vergrößerte Beschriftung zu sehen.' },
              { term: 'Fetter Text', text: 'Die Bildschirme werden fett neu gezeichnet, sobald du ihn einschaltest.' },
              { term: 'Kontrast erhöhen und Transparenz reduzieren', text: 'Gläserne Bedienelemente wie die Schalter Aus/An werden massiv, mit kräftigeren Kanten.' },
              { term: 'Bewegung reduzieren', text: 'Die Ruhebewegung auf dem Brett hört auf, Leuchten bleiben still, Tipps schimmern, statt sich zu bewegen, und die kleinen Tierchen bleiben zu Hause.' },
              { term: 'Blinkende Lichter abdunkeln', text: 'Bildschirmfüllende Blitze sinken auf ein Drittel ihrer Stärke und folgen nie dichter als etwa eine Drittelsekunde aufeinander.' },
              { term: 'Ohne Farbe unterscheiden', text: 'Schaltet die Farbsymbole ein, auch wenn du sie im Spiel ausgeschaltet hast.' },
              { term: 'Intelligente Umkehr', text: 'Die Freunde, Flaggen und Bilder behalten ihre echten Farben.' },
              { term: 'Sprachsteuerung und Schaltersteuerung', text: 'Mit beiden lässt sich jedes Brett spielen. Siehe [Sprachsteuerung, Schaltersteuerung und Tastaturen](help:voice-control-switch-control-keyboard).' },
            ],
          },
        ],
      },
      {
        id: 'no-timers',
        title: 'Keine Uhr, keine Eile',
        blocks: [
          {
            t: 'p',
            text: 'In OutBrick gibt es auf keinem Brett, in keinem Menü und bei keinem Event eine Uhr. Jedes Brett gibt dir eine Zahl von **Zügen**, und das ist die einzige Grenze. Ein Zug zählt nur, wenn er wirklich etwas bewirkt: Ein Tausch ohne Reihe springt zurück und verbraucht keinen Zug.',
          },
          {
            t: 'p',
            text: 'Wenn du festhängst, frag nach einem Tipp. Mit VoiceOver bekommst du auf einem Brett durch Doppeltippen mit zwei Fingern einen Gratis-Tipp, ohne einen Tipp-Booster zu verbrauchen. Siehe [Booster, Tipps und Pause](help:boosters-and-pause).',
          },
        ],
      },
      {
        id: 'testing',
        title: 'Was wir noch testen',
        blocks: [
          {
            t: 'p',
            text: 'Wir sagen es dir lieber offen, als dass du es selbst herausfinden musst. VoiceOver und Sprachsteuerung hat das Team auf einem echten iPhone gespielt. Folgendes ist gebaut und im Code geprüft, aber noch nicht von Hand auf einem Gerät durchgespielt:',
          },
          {
            t: 'list',
            items: [
              'Schaltersteuerung auf den Slide-&-Match-Brettern.',
              'Tastatursteuerung auf iPad und Mac.',
              'Die Anzeige großer Inhalte auf Kopfzeile und Leiste des Bretts bei der allergrößten Textgröße.',
              'Apple TV und Apple Watch, die die Bedienungshilfen des neuen Bretts noch nicht haben.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            title: 'Du kannst helfen',
            text: 'Spielst du mit einem davon, sag uns in der [Kategorie Barrierefreiheit](/community/c/accessibility), was funktioniert und was nicht. Dort liest das Team am genauesten mit.',
          },
        ],
      },
      {
        id: 'report',
        title: 'Sag uns, wenn dir etwas im Weg steht',
        blocks: [
          {
            t: 'p',
            text: 'Im Spiel öffnet **Einstellungen › Fehler melden** einen Bericht in Safari, in dem Gerät, iOS-Version, Spielversion, Level und die eingeschalteten assistiven Technologien schon ausgefüllt sind. Dein Name oder Konto wird nie gesendet. Ergänze die genauen Worte, die VoiceOver gesagt hat, oder das Bedienelement, das nicht reagiert hat. Siehe [Einen guten Fehlerbericht schreiben](help:reporting-bugs).',
          },
        ],
      },
    ],
    related: ['voiceover', 'vision-hearing-and-motion', 'voice-control-switch-control-keyboard', 'settings'],
  },

  {
    slug: 'voiceover',
    category: 'accessibility',
    cover: 'board-slide',
    title: 'Mit VoiceOver spielen',
    summary:
      'Wie das Brett vorgelesen wird, wie du mit Aktionen schiebst und tauschst, die Rotoren, jede Geste, was du nach einem Zug hörst und wie du einen Gratis-Tipp bekommst.',
    keywords: 'bildschirmleser screenreader blind rotor magisches tippen aktionen wischen streichen doppeltippen z-geste',
    sections: [
      {
        id: 'start',
        title: 'Bevor du anfängst',
        blocks: [
          {
            t: 'steps',
            items: [
              'Schalte VoiceOver in den iPhone-**Einstellungen › Bedienungshilfen › VoiceOver** ein oder bitte Siri: „Schalte VoiceOver ein“. Mit dem **Kurzbefehl** für Bedienungshilfen schaltest du es durch dreimaliges Klicken auf die Seitentaste ein und aus.',
              'Öffne OutBrick. Zuerst wird der Startbildschirm vorgelesen; die Taste **Level spielen** startet dein aktuelles Brett, und Doppeltippen mit zwei Fingern auf dem Startbildschirm tut dasselbe.',
              'Wenn dir eine neue Idee zum ersten Mal begegnet, erklärt sie eine kurze Lernkarte. Solange sie zu sehen ist, ist sie das Einzige auf dem Bildschirm: Doppeltippe, um zu spielen.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'In den **Einstellungen › Bedienungshilfen** des Spiels legt **Detail der Ansagen** fest, wie viel du nach jedem Zug hörst. Standard ist ein guter Anfang; du kannst es jederzeit ändern.',
          },
        ],
      },
      {
        id: 'layout',
        title: 'Wie das Brett vorgelesen wird',
        blocks: [
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'Ein Slide-&-Match-Brett am Strand, Level 25. Die Kopfzeile zeigt 5 Leben, 15 verbleibende Züge, eine Sternleiste mit einem leuchtenden Stern, Ziele von 1 gelben und 3 blauen Steinen und den Gastgeber-Freund mit Matrosenmütze. Auf dem Brett liegen rosa, gelbe, orange und blaue Steine, jeder mit dem Symbol seiner Farbe, mit gelben, orangen und blauen Toren an den Rändern und einem goldenen Schlüssellochdeckel über einer Reihe Steine. Unten die Leiste: Pause, dann Hinweis, Rakete und UFO mit „Gratis“ und Rückgängig mit 6.',
            caption: 'Ein Brett von oben nach unten: Kopfzeile, Raster und Leiste. VoiceOver liest zuerst die Zusammenfassung der Kopfzeile, dann das Raster Reihe für Reihe.',
          },
          {
            t: 'list',
            items: [
              '**Zuerst kommt die Zusammenfassung „Brett“.** Sie liest Level, seinen Namen, die Etappe, die Ziele und die übrigen Züge. Doppeltippe darauf, um das ganze Brett mit einem Tipp vorgelesen zu bekommen.',
              '**Dann jedes Feld, Reihe für Reihe,** von oben links. Lücken in der Form eines Bretts werden übersprungen. Der Wert jedes Felds ist seine Position, zum Beispiel „Reihe 3, Spalte 2“.',
              '**Teile werden nach Art, Farbe und Zustand benannt,** nie nur nach der Farbe: „Bombe, Rot“, „Kiste, 2 Schichten“, „Stein, Gelb, gesperrt, eine Reihe durch ihn befreit ihn“, „Langer Stein, Rot, 2 hoch“.',
              '**Zusätze folgen dem Teil:** „vor dem Tor: Rot“, „Tor: Rot, links“, „Portaleingang darunter“, „zählt für Narzissen, Gelb“, wenn ein Ziel es braucht. Ein leeres Feld sagt „Leer“.',
              '**Tore sind eigene Elemente,** zum Beispiel „Tor: Rot, 2 Felder breit, linke Seite, Reihen 3 bis 4“, und ihr Wert sagt, ob sie offen sind, vereist, noch Steine brauchen oder für immer geschlossen sind.',
              '**Verdeckte Steine verraten nie ihre Farbe:** „Verdeckter Stein, dreht sich um, wenn ein Stein daneben das Spielfeld verlässt“. Das ist faires Spiel, keine fehlende Beschriftung.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Teile, die du bewegen kannst, sind Tasten. Hindernisse und feste Teile wie Fels oder Kisten werden als Text gelesen, so erkennst du sofort, was sich bewegen lässt.',
          },
        ],
      },
      {
        id: 'moving',
        title: 'Einen Zug machen',
        blocks: [
          { t: 'p', text: 'Es gibt zwei Wege, einen Zug zu machen, und du kannst sie mischen.' },
          { t: 'h3', text: 'Mit Aktionen (am schnellsten)' },
          {
            t: 'steps',
            items: [
              'Setz VoiceOver auf ein Teil.',
              'Streich nach oben oder unten, um seine Aktionen zu hören, etwa „Schieben nach links, hinaus durch das Tor: Rot“, „Schieben nach oben bis zum Ende, 3 Felder“ oder „Tauschen nach oben mit Stein, Blau“. Tausche, die funktionieren, kommen zuerst; ein Tausch, der nichts bewirken würde, sagt „keine Reihe“.',
              'Doppeltippe, um die gehörte Aktion auszuführen.',
            ],
          },
          { t: 'h3', text: 'Erst ein Teil wählen, dann eine Richtung' },
          {
            t: 'steps',
            items: [
              'Doppeltippe auf ein Teil. VoiceOver sagt „Gewählt. Eine Richtung zum Schieben oder einen Nachbarn zum Tauschen wählen“.',
              'Über seinen Nachbarn erscheinen Richtungstasten. Geh zu einer und doppeltippe darauf.',
              'Doch anders überlegt? Doppeltippe noch einmal auf dasselbe Teil („Abgelegt“) oder nutz die Z-Geste mit zwei Fingern.',
            ],
          },
          {
            t: 'table',
            caption: 'Die Aktionen auf einem Teil, in der Reihenfolge, in der du sie hörst',
            head: ['Aktion', 'Wann du sie hörst'],
            rows: [
              ['Spezialstein auslösen', 'Auf einem Spezialstein, der sich dort auslösen lässt, wo er steht.'],
              ['Schieben …', 'Bis zu drei pro Richtung, oben, unten, links, rechts: wie weit er gleitet und ob er durch ein Tor oder ein Portal hinausgeht.'],
              ['Tauschen …', 'Mit jedem Nachbarn. Tausche mit Reihe kommen zuerst; „keine Reihe“ markiert den Rest.'],
              ['Brett vorlesen', 'Level, Etappe, Ziele, übrige Züge und ein Tipp.'],
              ['Tipp', 'Zeigt und sagt den besten Zug.'],
              ['Reihe anhören', 'Nur wenn **Reihenklang** an ist: ein leiser Ton pro Teil über die ganze Reihe.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Sorge, aus Versehen einen Zug zu spielen? Schalte **Tausch bestätigen** ein. Bei der ersten Wahl hörst du „… ? Zum Bestätigen noch einmal wählen“, und der Zug wird nur ausgeführt, wenn du ihn innerhalb von fünf Sekunden noch einmal wählst.',
          },
        ],
      },
      {
        id: 'rotors',
        title: 'Rotoren: direkt zum Wichtigen springen',
        blocks: [
          {
            t: 'p',
            text: 'Dreh zwei Finger auf dem Bildschirm, um einen Rotor zu wählen, und streich dann nach oben oder unten, um zwischen passenden Teilen zu springen.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Teile mit Reihe', text: 'Teile mit einem Zug, der gerade jetzt eine Reihe bildet.' },
              { term: 'Spezialsteine', text: 'Bomben, Liniensteine und die anderen Spezialsteine.' },
              { term: 'Ziele', text: 'Teile, die deine Ziele verlangen.' },
              { term: 'Hindernisse', text: 'Kisten, Fels, Eis, Schlösser, Moos und alles andere, was im Weg ist.' },
              { term: 'Tore', text: 'Jedes Tor auf dem Brett, wenn das Brett welche hat. Das erste Brett mit Toren, das du spielst, erzählt dir einmal von diesem Rotor.' },
            ],
          },
          {
            t: 'p',
            text: 'Jedes Element hat außerdem **Mehr Inhalt** (wähl im Rotor „Mehr Inhalt“ und streich dann nach oben oder unten): der Spezialstein, das Tor, das Hindernis, Geleeschichten darunter und ob ein Ziel dieses Teil braucht.',
          },
        ],
      },
      {
        id: 'gestures',
        title: 'Gesten, Bildschirm für Bildschirm',
        blocks: [
          {
            t: 'table',
            head: ['Geste', 'Auf einem Brett', 'Auf der Karte der Reise', 'Anderswo'],
            rows: [
              ['{{Mit zwei Fingern doppeltippen}} (Magisches Tippen)', 'Ein Gratis-Tipp. Der beste Zug schimmert und wird angesagt; dein Tipp-Booster wird nicht verbraucht.', 'Sagt den Wegweiser an: dein Dorf, geschaffte Level, dein nächstes Level und die Sterne bis zur nächsten Belohnung.', 'Start: spielt dein nächstes Level. Shop, Ränge und Pass: schaltet die Musik an oder aus.'],
              ['{{Z-Geste mit zwei Fingern}} (Escape)', 'Verlässt nie das Brett und kann deshalb nie ein Leben kosten. Sie schließt eine Karte, legt ein gewähltes Teil ab, legt eine Lernkarte weg oder öffnet die Pause, in dieser Reihenfolge.', 'Schließt eine offene Karte.', 'Drückt die Schließen-Taste des Bildschirms oder geht zurück.'],
              ['{{Mit drei Fingern streichen}}', '—', 'Springt ein Dorf weiter und sagt seinen Namen.', 'Scrollt.'],
              ['{{Nach oben oder unten streichen}}', 'Geht durch die Aktionen eines Teils.', 'Geht durch **Wo bin ich** und **Zu meinem nächsten Level**.', 'Verstellt ein Bedienelement.'],
            ],
          },
        ],
      },
      {
        id: 'announcements',
        title: 'Was du nach einem Zug hörst',
        blocks: [
          {
            t: 'p',
            text: 'Sobald ein Zug feststeht, sagt VoiceOver einen Satz dazu, noch bevor die Animation zu Ende ist. Alles Dringende kommt zuerst.',
          },
          {
            t: 'list',
            items: [
              'Wohin ein Stein ging: „Um 3 Felder geschoben, nach Reihe 2, Spalte 4“, „Durch das Portal, heraus bei …“, „Durch sein Tor hinaus: 1 (Rot)“.',
              'Was sich geändert hat: „Umgedreht: Rot und Blau“, „Der Zählerdeckel ist offen. Seine Steine können sich bewegen“, „Neue Tore öffnen sich“.',
              'Was verschwunden ist: Teile, Kaskaden, Kombos und entstandene Spezialsteine, und welche Ziele sich bewegt haben.',
              'Die übrigen Züge, mit einer Warnung bei fünf, drei und einem: „Nur noch 5 Züge“.',
              'Das Ende: „Alle Ziele erreicht. Level geschafft“ oder „Keine Züge mehr“.',
              'Ist kein Zug möglich, wird das Brett gemischt, und du hörst „Das Brett wurde gemischt. Du bist dran.“',
            ],
          },
          {
            t: 'table',
            caption: 'Einstellungen › Bedienungshilfen › Detail der Ansagen',
            head: ['Auswahl', 'Was du hörst'],
            rows: [
              ['Kurz', 'Was verschwunden ist, jedes erreichte Ziel und die übrigen Züge.'],
              ['Standard', 'Dazu die entstandenen Spezialsteine und die Ziele, die sich bewegt haben.'],
              ['Ausführlich', 'Dazu nach jedem Zug den Stand jedes Ziels.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Ein Tausch, der nichts bewirkt, springt zurück und sagt „Keine Reihe, zurückgetauscht. Kein Zug verbraucht“. Du hast nichts verloren.',
          },
        ],
      },
      {
        id: 'hints',
        title: 'Tipps',
        blocks: [
          {
            t: 'list',
            items: [
              '**Fragen:** Doppeltippen mit zwei Fingern, die Aktion **Tipp** oder {{H}} auf einer Tastatur. Der Tipp wird angesagt, zum Beispiel „Tipp: Stein, Rot schieben, Reihe 1, Spalte 3, nach links, hinaus durch sein Tor“, und VoiceOver springt zu diesem Teil.',
              '**Gratis:** Ein Tipp, den du mit Doppeltippen mit zwei Fingern oder der Aktion anforderst, verbraucht nie einen Tipp-Booster aus der Leiste.',
              '**Tipps beim Warten:** Machst du eine Weile Pause, wird vielleicht leise ein Tipp angesagt, ohne deinen Fokus zu verschieben.',
            ],
          },
        ],
      },
      {
        id: 'journey',
        title: 'Den Weg auf der Reise finden',
        blocks: [
          {
            t: 'list',
            items: [
              'Jedes Element auf der Karte hat zwei Aktionen: **Wo bin ich** und **Zu meinem nächsten Level**, die die Karte scrollt und VoiceOver auf dein nächstes Level setzt.',
              'Doppeltippen mit zwei Fingern sagt den Wegweiser an, zum Beispiel „Gartenstadt, 7 von 12 Leveln geschafft. Als Nächstes: Level 8. Noch 3 Sterne bis zur Dorfbelohnung.“',
              'Ein gesperrtes Level sagt, wie weit es entfernt ist: „Noch 4 bis zur Freischaltung“.',
              'Streich mit drei Fingern, um jeweils ein Dorf weiterzuspringen.',
            ],
          },
          { t: 'p', text: 'Mehr über die Karte in [Die Reise und ihre Dörfer](help:journey-and-villages).' },
        ],
      },
      {
        id: 'tips',
        title: 'Tipps vom Team',
        blocks: [
          {
            t: 'list',
            items: [
              'Mit eingeschaltetem VoiceOver und einem **Animationstempo** von 100 % laufen Züge anderthalbmal so schnell, damit du nicht wartest. Wählst du ein anderes Tempo, nutzt das Spiel genau deins.',
              'Schalte **Reihenklang** ein, um eine ganze Reihe als Töne zu hören: Jedes Farbsymbol hat seine eigene Tonhöhe, Hindernisse klopfen tief, und leere Felder sind still. Dafür müssen die Soundeffekte an sein und der Klingel-/Stummschalter auf Klingeln stehen.',
              'Verloren? Doppeltippe oben auf die Zusammenfassung **Brett** oder nutz **Brett vorlesen**.',
              'Menüs: Jede Taste liest ihre aufgedruckten Worte, und Karten halten VoiceOver in sich fest, bis du sie schließt, sodass du nie hinter einer Karte landest.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            title: 'Wurde etwas nicht richtig vorgelesen?',
            text: 'Nenn uns Level, Teil und die genauen Worte von VoiceOver in der [Kategorie Barrierefreiheit](/community/c/accessibility) oder nutz im Spiel **Einstellungen › Fehler melden**.',
          },
        ],
      },
    ],
    related: ['accessibility', 'voice-control-switch-control-keyboard', 'playing-a-board', 'reporting-bugs'],
  },

  {
    slug: 'voice-control-switch-control-keyboard',
    category: 'accessibility',
    cover: 'board-shapes',
    title: 'Sprachsteuerung, Schaltersteuerung und Tastaturen',
    summary:
      'Spiel jedes Brett mit deiner Stimme, mit einem oder mehreren Schaltern oder mit den Pfeiltasten, und mach es dir mit Tausch bestätigen und der Leiste für Linkshänder bequem.',
    keywords: 'sprachbefehle sprachsteuerung schaltersteuerung schalter tastatursteuerung pfeiltasten motorik feinmotorik eine hand',
    sections: [
      {
        id: 'voice-control',
        title: 'Sprachsteuerung',
        blocks: [
          {
            t: 'p',
            text: 'Schalte die Sprachsteuerung in den iPhone-**Einstellungen › Bedienungshilfen › Sprachsteuerung** ein. Jedes Teil auf dem Brett hört auf drei Namen, wobei die Zahl seine Position ist, Reihe für Reihe von oben links gezählt:',
          },
          {
            t: 'list',
            items: [
              'seine Farbe und Nummer: „Tippe auf **Rot 14**“',
              '„Tippe auf **Teil 14**“',
              'sein voller Name und seine Nummer.',
            ],
          },
          {
            t: 'steps',
            items: [
              'Sag „Tippe auf Rot 14“, um das Teil zu wählen.',
              'Sag die Richtung: „Tippe auf **Nach links schieben**“ oder einfach „Tippe auf **Links**“. Bei einem Tausch kannst du „Tippe auf **Nach oben tauschen**“ oder „Tippe auf **Oben**“ sagen.',
              'Sag jederzeit „Nummern einblenden“, um eine Nummer auf allem zu sehen, was du antippen kannst.',
            ],
          },
          {
            t: 'list',
            items: [
              'Verdeckte Steine hören auf „Verdeckt 14“, damit ihre Farbe verborgen bleibt.',
              'Menütasten hören zuerst auf die Worte, die auf ihnen stehen.',
              'Die Auswahl beim Animationstempo hört auf den Prozentwert oder das Wort: „Halbes Tempo“, „Langsamer“, „Normales Tempo“, „Schneller“, „Doppeltes Tempo“.',
            ],
          },
        ],
      },
      {
        id: 'switch-control',
        title: 'Schaltersteuerung',
        blocks: [
          {
            t: 'steps',
            items: [
              'Scanne bis zu einem Teil und wähle es aus, um es zu wählen.',
              'Scanne bis zu einem Nachbarn oder einer der erscheinenden Richtungstasten und wähle sie aus, um zu schieben oder zu tauschen.',
              'Wähle das gewählte Teil noch einmal aus, um es abzulegen.',
            ],
          },
          {
            t: 'p',
            text: 'Auf dem Brett wird die Schaltersteuerung wie VoiceOver behandelt: Jedes Teil ist ein eigenes Element, in Lesereihenfolge, und es erscheinen dieselben Richtungstasten. Schalte **Tausch bestätigen** ein, wenn du schnell scannst.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Die Schaltersteuerung auf den Slide-&-Match-Brettern ist gebaut und im Code geprüft, aber vom Team noch nicht auf einem Gerät durchgespielt. Spielst du mit Schaltern, erzähl uns gern in der [Kategorie Barrierefreiheit](/community/c/accessibility), wie es läuft.',
          },
        ],
      },
      {
        id: 'keyboard',
        title: 'Tastaturen auf iPad und Mac',
        blocks: [
          { t: 'p', text: 'Mit einer Hardwaretastatur hat das Brett eigene Tasten. Halte auf dem iPad {{⌘}} gedrückt, um sie aufgelistet zu sehen.' },
          {
            t: 'table',
            head: ['Taste', 'Was sie tut'],
            rows: [
              ['{{←}} {{→}} {{↑}} {{↓}}', 'Bewegt einen weißen Cursor über das Brett und überspringt dabei Lücken. Ist ein Teil gewählt, schiebt oder tauscht sie es in diese Richtung.'],
              ['{{Leertaste}} oder {{Zeilenschalter}}', 'Wählt das Teil unter dem Cursor oder legt es ab.'],
              ['{{H}}', 'Zeigt und sagt einen Tipp.'],
              ['{{Esc}}', 'Legt das gewählte Teil ab. Außerhalb des Bretts schließt sie Einstellungen und Karten.'],
            ],
          },
          {
            t: 'p',
            text: 'In Menüs bekommen die Tasten des Spiels den Tastaturfokus, und {{Zeilenschalter}} oder {{Leertaste}} drückt sie. Die Tastatursteuerung wechselt mit {{Tab}} zwischen ihnen.',
          },
        ],
      },
      {
        id: 'hold-to-confirm',
        title: 'Tausch bestätigen',
        blocks: [
          {
            t: 'p',
            text: 'In **Einstellungen › Bedienungshilfen** sorgt **Tausch bestätigen** dafür, dass du jeden Zug zweimal wählst. Beim ersten Mal hörst (oder siehst) du den Zug mit „Zum Bestätigen noch einmal wählen“; wählst du denselben Zug innerhalb von fünf Sekunden noch einmal, wird er ausgeführt. Alles andere bricht ihn ab. Das gilt für VoiceOver, Sprachsteuerung, Schaltersteuerung und die Tastatur.',
          },
        ],
      },
      {
        id: 'left-handed',
        title: 'Leiste für Linkshänder',
        blocks: [
          {
            t: 'p',
            text: 'Die Leiste unten an einem Brett hat links die Pause und rechts die Booster und Rückgängig. Die **Leiste für Linkshänder** spiegelt sie, sodass die Booster unter deinem linken Daumen liegen und die Pause nach rechts wandert.',
          },
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'Ein Slide-&-Match-Brett am Strand, Level 25. Die Kopfzeile zeigt 5 Leben, 15 verbleibende Züge, eine Sternleiste mit einem leuchtenden Stern, Ziele von 1 gelben und 3 blauen Steinen und den Gastgeber-Freund mit Matrosenmütze. Auf dem Brett liegen rosa, gelbe, orange und blaue Steine, jeder mit dem Symbol seiner Farbe, mit gelben, orangen und blauen Toren an den Rändern und einem goldenen Schlüssellochdeckel über einer Reihe Steine. Unten die Leiste: Pause, dann Hinweis, Rakete und UFO mit „Gratis“ und Rückgängig mit 6.',
            caption: 'Die Leiste für Rechtshänder (die Standardeinstellung). Für Linkshänder wird sie gespiegelt.',
          },
        ],
      },
    ],
    related: ['voiceover', 'accessibility', 'playing-a-board', 'settings'],
  },

  {
    slug: 'vision-hearing-and-motion',
    category: 'accessibility',
    cover: 'board-contrast',
    title: 'Sehen, Hören und Bewegung',
    summary:
      'Farbsymbole und was jede Form bedeutet, das Brett mit hohem Kontrast, größerer Text, Bewegung reduzieren, blinkende Lichter, Ton, Haptik und Reihenklang.',
    keywords: 'farbenblind farbenblindheit farbsehschwäche rot-grün deuteranopie protanopie tritanopie symbole formen kontrast großer text zoom bewegungskrankheit reisekrankheit schwindel epilepsie lichtempfindlich blinken gehörlos hören',
    sections: [
      {
        id: 'colour-blind',
        title: 'Farbsymbole',
        blocks: [
          {
            t: 'p',
            text: '**Farbenblind** ist vom allerersten Brett an eingeschaltet. Jeder Stein trägt eine Form für seine Farbe, farbige Spezialsteine tragen ein kleines Formabzeichen, und die Ziele in der Kopfzeile tragen dieselbe Form, sodass du Steine den Zielen zuordnen kannst, ohne Farben unterscheiden zu müssen.',
          },
          {
            t: 'table',
            caption: 'Jede Farbe hat ihre eigene Form',
            head: ['Farbe', 'Form'],
            rows: [
              ['Rot', 'Kreis'],
              ['Orange', 'Dreieck'],
              ['Gelb', 'Quadrat'],
              ['Grün', 'Raute'],
              ['Blau', 'Plus'],
              ['Lila', 'Stern'],
              ['Pink', 'Balken'],
              ['Türkis', 'Sechseck'],
            ],
          },
          {
            t: 'list',
            items: [
              'Schalte es unter **Einstellungen › Bedienungshilfen › Farbenblind** um, während eines Bretts im Menü **Pause** oder im **Kontrollzentrum**, wenn du das Steuerelement von OutBrick hinzufügst.',
              'Die Symbole erscheinen außerdem immer, wenn auf dem iPhone **Ohne Farbe unterscheiden** oder im Spiel **Brett mit hohem Kontrast** an ist.',
              'Deine Wahl wird in iCloud gesichert und folgt dir auf deine anderen Geräte.',
            ],
          },
          {
            t: 'shots',
            items: [
              {
                id: 'board-slide',
                alt: 'Ein Slide-&-Match-Brett am Strand, Level 25. Die Kopfzeile zeigt 5 Leben, 15 verbleibende Züge, eine Sternleiste mit einem leuchtenden Stern, Ziele von 1 gelben und 3 blauen Steinen und den Gastgeber-Freund mit Matrosenmütze. Auf dem Brett liegen rosa, gelbe, orange und blaue Steine, jeder mit dem Symbol seiner Farbe, mit gelben, orangen und blauen Toren an den Rändern und einem goldenen Schlüssellochdeckel über einer Reihe Steine. Unten die Leiste: Pause, dann Hinweis, Rakete und UFO mit „Gratis“ und Rückgängig mit 6.',
                caption: 'Farbenblind an: Jede Farbe hat eine Form.',
              },
              {
                id: 'board-contrast',
                alt: 'Dieselbe Art von Brett mit hohem Kontrast: ein fast schwarzer Boden, weiße Umrisse um jeden Stein und große weiße Symbole.',
                caption: 'Brett mit hohem Kontrast.',
              },
            ],
          },
        ],
      },
      {
        id: 'contrast',
        title: 'Brett mit hohem Kontrast',
        blocks: [
          {
            t: 'p',
            text: '**Einstellungen › Bedienungshilfen › Brett mit hohem Kontrast** zeichnet das Brett auf einen fast schwarzen Boden mit einem zarten Raster, gibt jedem Teil einen weißen Umriss und normalen Steinen ein großes weißes Symbol und jedem Tor einen dicken Rahmen. Die Torfarben werden gegen den Boden geprüft, und ein Tor, dessen Farbe ihm zu ähnlich ist, bekommt einen zweifarbigen Umriss.',
          },
        ],
      },
      {
        id: 'text',
        title: 'Größerer Text und Vergrößerung',
        blocks: [
          {
            t: 'list',
            items: [
              '**Größerer Text:** in den iPhone-**Einstellungen › Bedienungshilfen › Anzeige & Textgröße › Größerer Text**. Fließtext kann auf mehr als die doppelte Größe wachsen, Überschriften auf fast das Doppelte, und die Layouts stapeln sich, damit nichts abgeschnitten wird. Die Bildschirme für Sieg und „Keine Züge mehr“ wachsen weniger, damit sie trotzdem passen.',
              '**Anzeige großer Inhalte:** Leg bei den größten Textgrößen den Finger auf ein Bedienelement in Kopfzeile oder Leiste des Bretts, um eine vergrößerte Beschriftung zu sehen, und heb ihn dann wieder.',
              '**Fetter Text** und **Zoom** funktionieren überall im Spiel.',
            ],
          },
        ],
      },
      {
        id: 'motion',
        title: 'Bewegung, Animationstempo und Blinken',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Animationstempo', text: 'In **Einstellungen › Bedienungshilfen**: 50 %, 75 %, 100 %, 150 % oder 200 %. Bei 50 % dauert jeder Tausch, jeder Fall und jedes Verschwinden doppelt so lange, so lassen sich Ketten leichter verfolgen.' },
              { term: 'Bewegung reduzieren', text: 'In den iPhone-**Einstellungen › Bedienungshilfen › Bewegung**. Die Ruhebewegung auf dem Brett hört auf, Leuchten bleiben still, Tipps schimmern an Ort und Stelle, statt sich zu bewegen, und Bildschirme blenden über, statt zu gleiten.' },
              { term: 'Blinkende Lichter abdunkeln', text: 'Ebenfalls unter **Bewegung**. Bildschirmfüllende Blitze großer Kombos sinken auf ein Drittel ihrer Stärke und folgen nie dichter als etwa eine Drittelsekunde aufeinander; eine Zündschnur brennt gleichmäßig, statt zu flackern.' },
            ],
          },
        ],
      },
      {
        id: 'sound',
        title: 'Töne, Musik, Haptik und Reihenklang',
        blocks: [
          {
            t: 'list',
            items: [
              '**Nichts hängt vom Hören ab.** Zu jedem Ton in OutBrick gibt es etwas Passendes auf dem Bildschirm. Die Freunde sprechen in Sprechblasen, nicht mit Stimmen, und die VoiceOver-Ansagen spricht dein eigenes VoiceOver.',
              '**Töne, Musik und Haptik** haben jeweils einen eigenen Schalter unter **Einstellungen › Spiel** und während eines Bretts im Pausemenü. Haptik erscheint nur auf Geräten, die vibrieren können.',
              '**Reihenklang** (Einstellungen › Bedienungshilfen) fügt dem Brett die Aktion **Reihe anhören** hinzu: ein kurzer, leiser Ton für jedes Teil von links nach rechts, eine Tonhöhe pro Farbsymbol, mit einem anderen Klang für runde, spitze und gerade Formen. Hindernisse klopfen tief, und leere Felder sind eine Pause.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Für den Reihenklang müssen die Soundeffekte an sein und der Klingel-/Stummschalter auf Klingeln stehen. Ist eins davon aus, sagt dir die Aktion das.',
          },
        ],
      },
    ],
    related: ['accessibility', 'voiceover', 'settings', 'bricks-specials-and-blockers'],
  },
];
