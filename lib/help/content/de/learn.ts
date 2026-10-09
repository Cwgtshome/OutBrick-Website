import type { HelpArticle } from '../../model.ts';

/**
 * Das Regal mit dem Nachschlagewissen („learn“), auf Deutsch: Spezialsteine und Kombos, jedes
 * Hindernis, jeder Deckel und jedes Tor und die zwölf Brettarten. Geprüft mit den Regeln und
 * Brettern von 5.1.1 (68).
 */
export const learnArticles: HelpArticle[] = [
  {
    slug: 'special-bricks-and-combos',
    category: 'learn',
    cover: 'board-slide',
    title: 'Spezialsteine und Kombos: die komplette Anleitung',
    summary:
      'Wie du jeden Spezialstein baust, was genau jeder abräumt, die drei Arten, sie auszulösen, jede Kombination aus zwei Spezialsteinen und wie Kaskaden, Punkte, Sterne und das Finale mit den übrigen Zügen zusammenhängen.',
    keywords:
      'spezialstein spezialsteine spezial sonderstein linienstein streifen gestreift rakete bombe farbbombe regenbogen zielpfeil pfeil rasenmäher marienkäfer schmetterling knospe traktor biene sonnenblume maiskolben kombo kombi combo kombinieren zwei spezialsteine tauschen kaskade kettenreaktion kette punkte punktzahl sterne übrige züge finale bonus',
    host: 'bricko',
    hostPose: 'cheer',
    sections: [
      {
        id: 'quick',
        title: 'Auf einen Blick',
        blocks: [
          {
            t: 'p',
            text: 'Ein Spezialstein entsteht immer dann, wenn eine Kombination größer ist als eine einfache Dreierreihe. Er bleibt auf dem Brett liegen und wartet, bis du ihn auslöst. Es gibt vier davon:',
          },
          {
            t: 'table',
            head: ['Spezialstein', 'So entsteht er', 'Was er abräumt', 'So löst du ihn aus'],
            rows: [
              ['[Linienstein](#line-blaster)', 'Vier in einer Reihe.', 'Seine ganze Reihe oder seine ganze Spalte.', 'Antippen, tauschen oder in einer Reihe oder Explosion erwischen.'],
              ['[Bombe](#bomb)', 'Zwei Reihen, die sich kreuzen: eine L-, T- oder +-Form.', 'Das 3×3-Quadrat um sich herum, und noch einmal, sobald sich das Brett beruhigt hat.', 'Antippen, tauschen oder in einer Reihe oder Explosion erwischen.'],
              ['[Farbbombe](#colour-bomb)', 'Fünf oder mehr in einer geraden Reihe.', 'Jedes Teil einer Farbe.', 'Mit einem Stein tauschen (dessen Farbe), antippen oder in einer Explosion erwischen (die häufigste Farbe).'],
              ['[Zielpfeil](#homing-dart)', 'Ein 2×2-Quadrat einer Farbe.', 'Ein Teil, das ein Ziel braucht, wo immer es liegt.', 'Antippen, tauschen oder in einer Reihe oder Explosion erwischen.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Einen Spezialstein auszulösen verbraucht immer einen Zug, ob du ihn antippst oder tauschst. Ein Tausch, der zwei Spezialsteine zusammen auslöst, kostet für beide nur einen Zug, eine Kombo ist also das Beste, was du für einen Zug bekommen kannst.',
          },
        ],
      },
      {
        id: 'making',
        title: 'So entsteht ein Spezialstein',
        blocks: [
          {
            t: 'p',
            text: 'Nach jedem Zug sucht das Brett nach Kombinationen: Reihen aus drei oder mehr, waagerecht oder senkrecht, und 2×2-Quadrate. Reihen, die sich berühren oder kreuzen, bilden zusammen eine Gruppe, und jede Gruppe ergibt höchstens einen Spezialstein. Könnte eine Gruppe mehr als einen ergeben, gewinnt der stärkste:',
          },
          {
            t: 'steps',
            items: [
              '**Fünf oder mehr in einer geraden Reihe** ergeben eine **Farbbombe**, auch wenn andere Reihen sie kreuzen.',
              '**Reihen, die sich kreuzen** (eine L-, T- oder +-Form), ergeben eine **Bombe**.',
              '**Genau vier in einer Reihe** ergeben einen **Linienstein**.',
              '**Ein 2×2-Quadrat** ergibt einen **Zielpfeil**, wenn seine Gruppe nichts Stärkeres enthält.',
            ],
          },
          { t: 'h3', text: 'Wo er erscheint' },
          {
            t: 'list',
            items: [
              'Auf **dem Stein, den du bewegt hast**, wenn dieser Stein zur Kombination gehört. Das gilt für Tauschen und Schieben gleichermaßen: Schiebst du einen Stein an seinen Platz und vollendest damit eine Viererreihe, erscheint der Linienstein auf dem Stein, der geschoben wurde.',
              'Sonst, bei einer Bombe, **dort, wo sich die beiden Reihen kreuzen**.',
              'Sonst auf dem Stein, der als letzter angekommen ist (bei einer Kaskade auf dem, der hineingefallen ist), oder in der Mitte der Gruppe.',
            ],
          },
          { t: 'h3', text: 'In welche Richtung ein Linienstein zeigt' },
          {
            t: 'p',
            text: 'Die Streifen eines Liniensteins **folgen deinem Wischen**. Wischst du waagerecht (nach links oder rechts), räumt er seine Reihe; wischst du nach oben oder unten, räumt er seine Spalte, ganz egal, in welche Richtung die Viererreihe selbst verläuft. Ein Linienstein aus einer Kaskade, bei der niemand gewischt hat, liegt **quer** zu der Reihe, die ihn gebildet hat.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Erst zielen, dann wischen',
            text: 'Kannst du eine Viererreihe aus zwei Richtungen vollenden, wähl das Wischen, das den Linienstein dorthin richtet, wo du ihn brauchst: die Reihe entlang, in der deine Zielsteine liegen, oder die Spalte hinunter, die auf ein Tor zuläuft.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Lange, große, L- und T-Steine zählen nie in einer Reihe und können deshalb nie helfen, einen Spezialstein zu bauen. Ein gesperrter Stein zählt in einer Reihe mit (die Reihe befreit ihn), aber der Spezialstein erscheint nie auf dem gesperrten Stein selbst.',
          },
        ],
      },
      {
        id: 'specials',
        title: 'Die vier Spezialsteine',
        blocks: [
          {
            t: 'p',
            text: 'Jedes Dorf kleidet seine Spezialsteine anders: In der Gartenstadt ist der Linienstein ein Rasenmäher, die Bombe eine Blütenknospe („Blütenregen!“), die Farbbombe ein Schmetterling und der Zielpfeil ein Marienkäfer; auf Clover Farm sind es ein Traktor, ein Maiskolben („Popcorn!“), eine Sonnenblume und eine Biene. Sie spielen sich immer gleich.',
          },
          {
            t: 'entry',
            id: 'line-blaster',
            title: 'Linienstein',
            board: {
              rows: ['G . R . Y', 'R R B R Y', 'Y G . B G'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G . B . Y', '. . R| . Y', 'Y G . B G'] },
              caption: 'Vier in einer Reihe, vollendet mit einem Wischen nach unten: Der Linienstein räumt seine Spalte.',
              alt: 'Ein Brett, auf dem nichts fällt, mit drei Reihen zu je fünf Feldern. Obere Reihe: Grün, leer, Rot, leer, Gelb. Mittlere Reihe: Rot, Rot, Blau, Rot, Gelb. Untere Reihe: Gelb, Grün, leer, Blau, Grün. Ein Pfeil tauscht den roten Stein oben in der mittleren Spalte nach unten mit dem blauen Stein darunter. Ergebnis: Die vier roten Steine der mittleren Reihe bilden eine Viererreihe und verschwinden, und in der Mitte, wo der bewegte rote Stein gelandet ist, erscheint ein roter Linienstein mit senkrechten Streifen, weil senkrecht gewischt wurde. Der blaue Stein liegt jetzt oben in der mittleren Spalte, die geräumten Felder bleiben leer, und alle anderen Steine bleiben, wo sie waren.',
            },
            what: 'Ein Stein mit Streifen. Geht er hoch, räumt er jedes Teil in seiner Reihe (waagerechte Streifen) oder seiner Spalte (senkrechte Streifen) bis an die Ränder des Bretts und springt dabei über Statuen und Lücken in der Form des Bretts hinweg.',
            how: 'Bilde vier in einer Reihe. Lös ihn aus, indem du ihn antippst, mit einem Nachbarn tauschst, der eine Reihe bildet, oder mit einem anderen Spezialstein, oder indem du ihn in einer Reihe oder einer anderen Explosion erwischst. Er kann auch **durch ein Tor seiner Farbe hinausgeschoben werden**; dann verlässt er das Brett, ohne hochzugehen, und zählt wie ein Stein seiner Farbe.',
            facts: [
              { label: 'So entsteht er', text: 'Genau vier in einer Reihe.' },
              { label: 'Räumt ab', text: 'Eine ganze Reihe oder eine ganze Spalte: Steine verschwinden, Hindernisse verlieren eine Schicht, Schlösser gehen auf, andere Spezialsteine gehen hoch.' },
              { label: 'Kombiniert mit', text: 'Jedem anderen Spezialstein. Siehe [die Kombo-Tabelle](#combos).' },
              { label: 'VoiceOver sagt', text: '„Linienstein, Rot, waagerecht, räumt seine Reihe“ oder „… senkrecht, räumt seine Spalte“. In manchen Dörfern folgt sein örtlicher Name in Klammern, etwa „(Rasenmäher)“.' },
            ],
            tip: 'Läuft die Reihe oder Spalte eines Liniensteins über die Felder direkt vor einem Tor, fliegen alle Steine in der Farbe des Tors auf diesen Feldern hindurch hinaus und zählen als nach Hause geschickt.',
          },
          {
            t: 'entry',
            id: 'bomb',
            title: 'Bombe',
            board: {
              rows: ['R G B .', 'R B G .', 'Y R R .', 'R G Y .'],
              moves: [{ row: 3, col: 0, dir: 'up', kind: 'swap' }],
              after: { rows: ['. G B .', '. B G .', 'Rb . . .', 'Y G Y .'] },
              caption: 'Zwei rote Reihen, die sich kreuzen, ergeben eine Bombe, genau dort, wo sie sich treffen.',
              alt: 'Ein Brett, auf dem nichts fällt, mit vier Reihen zu je vier Feldern. Reihe 1: Rot, Grün, Blau, leer. Reihe 2: Rot, Blau, Grün, leer. Reihe 3: Gelb, Rot, Rot, leer. Reihe 4: Rot, Grün, Gelb, leer. Ein Pfeil tauscht den roten Stein unten links nach oben mit dem gelben Stein darüber. Ergebnis: Der rote Stein, der jetzt in Reihe 3, Spalte 1 liegt, vollendet zwei Reihen auf einmal, drei rote Steine die linke Spalte hinunter und drei rote Steine entlang Reihe 3, eine L-Form. Die anderen vier roten Steine verschwinden, und in Reihe 3, Spalte 1 erscheint eine rote Bombe. Der gelbe Stein liegt jetzt unten links; grüne, blaue, grüne und blaue Steine bleiben in Reihe 1 und 2, Grün und Gelb bleiben in Reihe 4.',
            },
            what: 'Ein runder, zischender Spezialstein. Geht er hoch, räumt er das 3×3-Quadrat um sich herum; dann, sobald sich das Brett beruhigt hat (auf Brettern mit fallenden Steinen, nachdem die Lücke gefüllt ist), geht er **ein zweites Mal** an derselben Stelle hoch.',
            how: 'Bilde zwei Reihen einer Farbe, die sich einen Stein teilen: eine L-, T- oder +-Form. Lös sie aus, indem du sie antippst, tauschst oder in einer Reihe oder Explosion erwischst.',
            facts: [
              { label: 'So entsteht sie', text: 'Waagerechte und senkrechte Reihen, die sich an einem gemeinsamen Stein kreuzen oder berühren (L, T oder +), außer die Gruppe enthält auch fünf in einer geraden Reihe.' },
              { label: 'Räumt ab', text: 'Das 3×3-Quadrat um sie herum, zweimal. Die zweite Explosion erwischt, was in das Loch gefallen ist, und nimmt Kisten und Eis eine zweite Schicht ab.' },
              { label: 'Kombiniert mit', text: 'Jedem anderen Spezialstein. Siehe [die Kombo-Tabelle](#combos).' },
              { label: 'VoiceOver sagt', text: '„Bombe, Rot“.' },
            ],
            tip: 'Lös eine Bombe neben einer Kiste mit zwei Schichten oder einem Stein in dickem Eis aus: Die zwei Explosionen können beide Schichten in einem Zug abräumen.',
          },
          {
            t: 'entry',
            id: 'colour-bomb',
            title: 'Farbbombe',
            board: {
              rows: ['G Y B Y G', 'B B R B B', 'Y G Y G Y'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G Y R Y G', '. . * . .', 'Y G Y G Y'] },
              caption: 'Fünf in einer Reihe ergeben eine Farbbombe. Sie hat keine eigene Farbe.',
              alt: 'Ein Brett, auf dem nichts fällt, mit drei Reihen zu je fünf Feldern. Obere Reihe: Grün, Gelb, Blau, Gelb, Grün. Mittlere Reihe: Blau, Blau, Rot, Blau, Blau. Untere Reihe: Gelb, Grün, Gelb, Grün, Gelb. Ein Pfeil tauscht den blauen Stein oben in der mittleren Spalte nach unten mit dem roten Stein darunter. Ergebnis: Fünf blaue Steine in der mittleren Reihe verschwinden, und im mittleren Feld erscheint eine Farbbombe ohne Farbe. Der rote Stein liegt jetzt oben in der mittleren Spalte, der Rest des Bretts ist unverändert.',
            },
            what: 'Ein bunter Spezialstein ohne eigene Farbe. Mit einem Stein getauscht, nimmt sie **jedes Teil in der Farbe dieses Steins** auf dem Brett: Normale Steine und Schlüssel verschwinden, Spezialsteine dieser Farbe gehen hoch, und gesperrte werden stattdessen befreit.',
            how: 'Bilde fünf oder mehr in einer geraden Reihe. Tausch sie mit irgendeinem benachbarten Stein: Dieser Tausch zählt immer, auch wenn er keine Reihe bildet. Allein angetippt oder von der Explosion eines anderen Spezialsteins erfasst, nimmt sie stattdessen jeden normalen Stein der **häufigsten Farbe** auf dem Brett.',
            facts: [
              { label: 'So entsteht sie', text: 'Fünf oder mehr in einer geraden Reihe.' },
              { label: 'Räumt ab', text: 'Jedes Teil einer Farbe, eins nach dem anderen, das nächste zuerst.' },
              { label: 'Kombiniert mit', text: 'Jedem anderen Spezialstein und einer weiteren Farbbombe. Siehe [die Kombo-Tabelle](#combos).' },
              { label: 'Gut zu wissen', text: 'Sie zählt nie in einer Reihe und kann nicht durch ein Tor hinaus: In eins hineingeschoben, bleibt sie davor stehen wie an einer Wand.' },
              { label: 'VoiceOver sagt', text: '„Farbbombe, nimmt jedes Teil der Farbe, mit der sie getauscht wird“.' },
            ],
            tip: 'Tausch sie mit einer Zielfarbe. Jeder Stein, den sie nimmt, zählt für ein „Sammle“-Ziel oder ein Ziel „Senden oder kombinieren“ in dieser Farbe.',
          },
          {
            t: 'entry',
            id: 'homing-dart',
            title: 'Zielpfeil',
            board: {
              rows: ['Y G B', 'R R G', 'R B Y', 'G R Y'],
              moves: [{ row: 3, col: 1, dir: 'up', kind: 'swap' }],
              after: { rows: ['Y G B', '. . G', '. Rd Y', 'G B Y'] },
              caption: 'Ein 2×2-Quadrat einer Farbe ergibt einen Zielpfeil.',
              alt: 'Ein Brett, auf dem nichts fällt, mit vier Reihen zu je drei Feldern. Reihe 1: Gelb, Grün, Blau. Reihe 2: Rot, Rot, Grün. Reihe 3: Rot, Blau, Gelb. Reihe 4: Grün, Rot, Gelb. Ein Pfeil tauscht den roten Stein unten in der mittleren Spalte nach oben mit dem blauen Stein darüber. Ergebnis: Vier rote Steine bilden jetzt ein 2×2-Quadrat in Reihe 2 und 3; drei davon verschwinden, und in Reihe 3, Spalte 2, wo der bewegte rote Stein gelandet ist, erscheint ein roter Zielpfeil. Der blaue Stein liegt jetzt unten in der mittleren Spalte; die anderen Steine sind unverändert.',
            },
            what: 'Ein kleiner Spezialstein, der über das Brett zu einem Teil fliegt und es einmal trifft.',
            how: 'Bilde ein 2×2-Quadrat einer Farbe. Lös ihn aus, indem du ihn antippst, tauschst oder in einer Reihe oder Explosion erwischst. Sein Ziel wählt er selbst: Moos, wenn ein Ziel Moos verlangt, Kisten oder Schlösser, wenn ein Ziel diese verlangt, dann einen Stein in einer Farbe, die ein „Sammle“-Ziel noch braucht, dann irgendein anderes Hindernis, oben auf dem Brett zuerst.',
            facts: [
              { label: 'So entsteht er', text: 'Ein 2×2-Quadrat, wenn seine Gruppe keine Reihe aus vier oder mehr und keine sich kreuzenden Reihen enthält.' },
              { label: 'Räumt ab', text: 'Ein Treffer auf ein Teil: Ein Stein verschwindet, ein Hindernis verliert eine Schicht, ein Schloss geht auf.' },
              { label: 'Kombiniert mit', text: 'Jedem anderen Spezialstein: Er trägt den anderen zu seinem Ziel. Siehe [die Kombo-Tabelle](#combos).' },
              { label: 'VoiceOver sagt', text: '„Zielpfeil, Rot, fliegt zu einem Zielteil“.' },
            ],
            tip: 'Ein Zielpfeil allein ist schwach, in einer Kombo aber hervorragend: Tausch ihn mit einer Bombe oder einem Linienstein, und er bringt diesen Spezialstein genau zu dem Teil, das am dringendsten wegmuss.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Mit **Farbenblind** (von Anfang an eingeschaltet) tragen Liniensteine, Bomben, Zielpfeile und Schlüssel in einer Ecke ein kleines Abzeichen mit dem Symbol ihrer Farbe, sodass du ihre Farbe erkennst, ohne dich allein auf die Farbe verlassen zu müssen.',
          },
        ],
      },
      {
        id: 'setting-off',
        title: 'Drei Arten, einen Spezialstein auszulösen',
        blocks: [
          {
            t: 'table',
            head: ['Wie', 'Was passiert', 'Kosten'],
            rows: [
              ['**Antippen**', 'Er geht dort hoch, wo er steht. Eine allein angetippte Farbbombe nimmt die häufigste Farbe.', 'Ein Zug.'],
              ['**Tauschen**', 'In eine Kombination getauscht, geht er als Teil der Reihe hoch. Mit einem anderen Spezialstein getauscht, ergeben die beiden eine [Kombo](#combos). Eine Farbbombe, die mit einem Stein getauscht wird, nimmt die Farbe dieses Steins.', 'Ein Zug.'],
              ['**Erwischen**', 'Ein Spezialstein, der in einer Reihe erwischt oder von der Explosion eines anderen Spezialsteins erreicht wird, geht ebenfalls hoch. Eine Explosion kann eine ganze Kette auslösen.', 'Gratis: Teil des Zugs, der ihn ausgelöst hat.'],
            ],
          },
          {
            t: 'list',
            items: [
              '**Schieben löst einen Spezialstein nie aus.** Du kannst einen Spezialstein wie jeden Stein seine Bahn entlangschieben, um ihn für einen besseren Tausch in Stellung zu bringen.',
              '**Was eine Explosion mit jedem Teil macht:** Ein normaler Stein verschwindet; eine Kiste oder ein Stein im Eis verliert eine Schicht; ein Schloss geht auf, und sein Stein bleibt; Moos verschwindet; ein anderer Spezialstein geht hoch.',
              '**Was eine Explosion nie berührt:** lange, große, L- und T-Steine (sie verlassen das Brett nur durch ihr Tor), alles unter einem geschlossenen Deckel und Statuen.',
              'Ein Stein in der Farbe eines Tors, den eine Explosion auf dem Randfeld **direkt vor seinem offenen Tor** abräumt, fliegt durch das Tor hinaus und zählt als nach Hause geschickt.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Antippen ist der letzte Ausweg. Kann ein Tausch denselben Spezialstein auslösen und gleichzeitig eine Reihe bilden, bringt er für denselben Zug mehr.',
          },
        ],
      },
      {
        id: 'combos',
        title: 'Jede Kombo',
        blocks: [
          {
            t: 'p',
            text: 'Zwei Spezialsteine, die nebeneinanderliegen, lassen sich immer tauschen, auch wenn der Tausch keine Reihe bildet. Sie gehen zusammen hoch, mit dem Feld als Mittelpunkt, auf dem der bewegte Stein landet. Das sind alle Kombinationen, die das Spiel kennt:',
          },
          {
            t: 'table',
            head: ['Miteinander tauschen', 'Was passiert'],
            rows: [
              ['Linienstein + Linienstein', 'Ein Kreuz: eine ganze Reihe und eine ganze Spalte.'],
              ['Linienstein + Bombe', 'Ein großes Kreuz: drei ganze Reihen und drei ganze Spalten.'],
              ['Linienstein + Zielpfeil', 'Der Zielpfeil fliegt zu seinem Ziel, trifft es, und der Linienstein geht von dort aus hoch.'],
              ['Linienstein + Farbbombe', 'Jeder freie normale Stein in der Farbe des Liniensteins wird zu einem Linienstein (abwechselnd senkrecht und waagerecht), und alle gehen hoch.'],
              ['Bombe + Bombe', 'Eine Explosion von 5×5 und eine zweite Explosion von 5×5 an derselben Stelle, sobald sich das Brett beruhigt hat.'],
              ['Bombe + Zielpfeil', 'Der Zielpfeil trägt die Bombe zu seinem Ziel, wo sie einmal als Explosion von 5×5 hochgeht.'],
              ['Bombe + Farbbombe', 'Jeder freie normale Stein in der Farbe der Bombe wird zu einer Bombe, und jede geht hoch (zweimal, wie Bomben es tun).'],
              ['Zielpfeil + Zielpfeil', 'Insgesamt drei Ziele: Der erste Zielpfeil landet, und zwei weitere fliegen von dort aus weiter.'],
              ['Zielpfeil + Farbbombe', 'Jeder freie normale Stein in der Farbe des Zielpfeils wird zu einem Zielpfeil, und alle fliegen los.'],
              ['Farbbombe + Farbbombe', 'Jedes Teil auf dem Brett bekommt einen Treffer: Steine verschwinden, jedes Hindernis verliert eine Schicht, jedes Schloss geht auf und jeder Spezialstein geht hoch. Lange und geformte Steine und alles unter einem Deckel bleiben verschont.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['G Y B Y', 'Y R- B| G', 'B G Y B'],
              moves: [{ row: 1, col: 1, dir: 'right', kind: 'swap' }],
              after: { rows: ['G Y . Y', '. . . .', 'B G . B'] },
              caption: 'Zwei miteinander getauschte Liniensteine räumen ein Kreuz: die Reihe und die Spalte, in der der bewegte landet.',
              alt: 'Ein Brett, auf dem nichts fällt, mit drei Reihen zu je vier Feldern. Obere Reihe: Grün, Gelb, Blau, Gelb. Mittlere Reihe: Gelb, ein roter Linienstein mit waagerechten Streifen, ein blauer Linienstein mit senkrechten Streifen, Grün. Untere Reihe: Blau, Grün, Gelb, Blau. Ein Pfeil tauscht den roten Linienstein nach rechts in den blauen. Ergebnis: Die ganze mittlere Reihe und die ganze dritte Spalte verschwinden. Übrig bleiben oben Grün, Gelb und Gelb mit einer Lücke in der dritten Spalte, eine leere mittlere Reihe und unten Blau, Grün und Blau mit einer Lücke in der dritten Spalte.',
            },
          },
          {
            t: 'list',
            items: [
              '„Freier normaler Stein“ heißt ein einzelner Stein dieser Farbe, der weder im Eis liegt noch gesperrt ist. Ist kein Stein in der Farbe des Spezialsteins mehr übrig, nimmt die Farbbombe stattdessen die häufigste Farbe des Bretts.',
              'VoiceOver nennt „eine Kombo“ in der Zusammenfassung des Zugs.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Die stärksten Paare',
            text: 'Farbbombe + Farbbombe räumt am meisten ab, aber Farbbombe + Linienstein auf einer häufigen Farbe bringt deinen Zielen oft mehr. Auf einem Brett, auf dem nichts fällt, hebst du ein Farbbomben-Paar am besten auf, bis die Farbe, die du brauchst, reichlich vorhanden ist.',
          },
        ],
      },
      {
        id: 'gates',
        title: 'Spezialsteine und Tore',
        blocks: [
          {
            t: 'list',
            items: [
              '**Liniensteine können nach Hause gehen.** Schieb einen in ein offenes Tor seiner Farbe, dann verlässt er das Brett, ohne hochzugehen, und zählt wie ein Stein seiner Farbe.',
              '**Bomben, Zielpfeile und Farbbomben können das nicht.** Zu einem Tor geschoben, bleiben sie davor stehen wie an einer Wand.',
              '**Gesprengte Steine können nach Hause gehen.** Ein Stein in der Farbe eines Tors, den ein Spezialstein auf dem Randfeld vor seinem offenen Tor abräumt, fliegt durch das Tor hinaus.',
              '**Torziele heißen „Senden oder kombinieren“.** Steine dieser Farbe, die irgendwo auf dem Brett durch eine Reihe oder Explosion verschwinden, zählen ebenfalls, ein Linienstein durch eine Reihe voller Zielsteine ist also echter Fortschritt.',
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['G B R G', 'R R B Y', 'Y G Y B'],
              gates: [{ side: 'left', at: 1, colour: 'R' }],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G B B G', '. . . Y', 'Y G Y B'] },
              caption: 'Eine Reihe vor einem Tor ihrer Farbe: Der Stein am Ende fliegt durch das Tor hinaus.',
              alt: 'Ein Brett, auf dem nichts fällt, mit drei Reihen zu je vier Feldern und einem roten Tor am linken Rand der mittleren Reihe. Obere Reihe: Grün, Blau, Rot, Grün. Mittlere Reihe: Rot, Rot, Blau, Gelb. Untere Reihe: Gelb, Grün, Gelb, Blau. Ein Pfeil tauscht den roten Stein oben in der dritten Spalte nach unten mit dem blauen Stein darunter. Ergebnis: Drei rote Steine liegen in der mittleren Reihe in einer Linie. Der rote Stein am linken Ende steht vor dem roten Tor und fliegt deshalb hindurch hinaus; die anderen beiden verschwinden. Alle drei zählen für ein rotes Ziel „Senden oder kombinieren“. Der blaue Stein liegt jetzt oben in der dritten Spalte; der Rest des Bretts ist unverändert.',
            },
          },
          {
            t: 'p',
            text: 'Jedes Tor, jeder Deckel und jedes Hindernis wird in [Alle Hindernisse, Deckel und Tore erklärt](help:blockers-encyclopedia#gates) beschrieben.',
          },
        ],
      },
      {
        id: 'score',
        title: 'Kaskaden, Punkte und Sterne',
        blocks: [
          {
            t: 'p',
            text: 'Auf Brettern, auf denen Steine fallen, hinterlässt eine Kombination eine Lücke, die Steine darüber fallen hinein, und von oben kommen neue nach. Entsteht dabei eine weitere Reihe, verschwindet sie ebenfalls: eine **Kaskade**. Jede neue Welle ist mehr wert als die vorige. Auf Brettern, auf denen nichts fällt, hinterlässt eine Kombination einfach leere Felder, Kaskaden sind dort also selten, aber die zweite Explosion einer Bombe gibt es trotzdem.',
          },
          {
            t: 'table',
            caption: 'Punkte für das, was ein Zug bewirkt (5.1.1)',
            head: ['Was passiert', 'Punkte'],
            rows: [
              ['Jeder Stein in einer Reihe', '20, mal die Welle: Ein Stein in der zweiten Kaskadenwelle ist 40 wert, in der dritten 60'],
              ['Jeder entstandene Spezialstein', '120'],
              ['Ein Stein durch ein Tor hinaus', '60'],
              ['Ein Spezialstein geht hoch', '100, plus 30 für jedes Teil, das er abräumt, 40 für jede Eisschicht, die er bricht, und 60 für jeden Stein, den er durch ein Tor schickt'],
              ['Ein Hindernis, das eine Reihe daneben trifft', '20'],
              ['Jeder übrige Zug, wenn die Ziele erreicht sind', '150, plus alles, was sein Linienstein abräumt'],
            ],
          },
          {
            t: 'list',
            items: [
              'Die **Sternleiste** in der Kopfzeile füllt sich, während deine Punkte steigen. Jedes geschaffte Brett bringt mindestens **einen Stern**.',
              'Die Schwellen für zwei und drei Sterne werden aus der Referenzlösung jedes Bretts berechnet, einschließlich der 150 Punkte für die Züge, die ihr übrig bleiben. Gewinnst du zügig und mit Zügen in Reserve, kommen die Sterne leichter; verbrauchst du jeden Zug, brauchst du mehr Punkte aus dem Spiel, um gleichzuziehen.',
              'Spiel ein geschafftes Brett über die Reise noch einmal, um mehr Sterne zu holen. Siehe [Ein Brett spielen](help:playing-a-board#stars).',
            ],
          },
        ],
      },
      {
        id: 'finish',
        title: 'Das Finale mit den übrigen Zügen',
        blocks: [
          {
            t: 'steps',
            items: [
              'Sobald dein letztes Ziel erreicht ist, nimmt das Brett keine Züge mehr an und zeigt **Ziel erreicht!**, darunter „N übrige Züge werden zu Liniensteinen!“. Jetzt kann nichts mehr das Brett verlieren: Kein Leben steht auf dem Spiel, und du musst keinen Zug mehr machen.',
              'Pro Zug löst sich ein Funke vom Zugzähler und landet auf einem normalen Stein, der zu einem Linienstein wird. Jeder bringt **150 Punkte**. Bis zu 30 Züge werden auf dem Brett zu Liniensteinen; alle weiteren werden trotzdem ausgezahlt.',
              'Dann geht jeder Spezialstein auf dem Brett hoch, die neuen Liniensteine und alle, die du nicht benutzt hast, bis nichts mehr übrig ist, was hochgehen kann.',
              'Deine Freunde drehen eine Ehrenrunde, und die Gewinnkarte zeigt deine Punkte, Sterne und Münzen.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: '**Tippe irgendwohin**, um die Show zu überspringen. Das Ergebnis steht schon vorher fest, Überspringen bringt also genau dieselben Punkte und Sterne.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Übrige Züge bringen Punkte und damit Sterne, aber keine zusätzlichen Münzen. Spezialsteine, die du auf dem Brett lässt, sind nicht verschwendet: Sie gehen im Finale hoch und erhöhen deine Punkte.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'VoiceOver sagt sofort „Ziel erreicht! 4 übrige Züge werden zu Liniensteinen!“ und dann, wenn die Gewinnkarte erscheint, „Endpunktzahl“ mit der Zahl und den Sternen. Mit **Bewegung reduzieren** blendet das Banner ein und aus, und das fertige Brett erscheint ohne die Show.',
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'Spezialsteine mit VoiceOver',
        blocks: [
          {
            t: 'table',
            head: ['Wann', 'Was du hörst'],
            rows: [
              ['Du erreichst einen Spezialstein', 'Seine Art, seine Farbe und was er tut, zum Beispiel „Linienstein, Rot, waagerecht, räumt seine Reihe“.'],
              ['Seine Aktionen', 'Zuerst **Spezialstein auslösen**, dann seine Schiebe-Aktionen, dann seine Tausche. Tausche, die etwas auslösen, kommen vor Tauschen, die nichts bewirken.'],
              ['Du tippst einen an', '„Bombe, Rot ausgelöst“.'],
              ['Ein Tipp schlägt einen vor', 'Zum Beispiel „Tipp: Löse Bombe, Rot aus“, mit Reihe und Spalte.'],
              ['Nach einem Zug', 'Die Spezialsteine, die der Zug gebaut hat, eine Kombo und die Kaskaden, als Teil der Zusammenfassung des Zugs.'],
            ],
          },
          {
            t: 'p',
            text: 'Dreh zwei Finger zum Rotor **Spezialsteine** und streich nach oben oder unten, um von einem Spezialstein zum nächsten zu springen. Mehr dazu in [Mit VoiceOver spielen](help:voiceover#rotors).',
          },
        ],
      },
      {
        id: 'faq',
        title: 'Fragen',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Warum hat mein Tausch zweier Spezialsteine funktioniert, ohne eine Reihe zu bilden?',
                a: 'Zwei Spezialsteine nebeneinander lassen sich immer tauschen: Der Tausch löst sie zusammen als Kombo aus. Dasselbe gilt für eine Farbbombe, die mit irgendeinem Stein getauscht wird.',
              },
              {
                q: 'Ich habe meinen Linienstein in sein Tor geschoben, und er ist nicht hochgegangen. War er verschwendet?',
                a: 'Nein. Ein Linienstein, der durch ein Tor seiner Farbe hinausgeschoben wird, verlässt das Brett, ohne hochzugehen, und zählt für deine Ziele wie ein Stein dieser Farbe. Wolltest du die Explosion, tipp ihn an oder tausch ihn.',
              },
              {
                q: 'Warum hat eine Bombe einen langen Stein stehen lassen?',
                a: 'Explosionen nehmen nie lange, große, L- oder T-Steine. Sie sind Fracht für ihr Tor und verlassen das Brett nur, indem sie durch ein Tor gleiten, das so breit ist wie sie. Explosionen erreichen auch nichts unter einem geschlossenen Deckel.',
              },
              {
                q: 'Zählen Steine, die ein Spezialstein abräumt, für meine Ziele?',
                a: 'Ja. Steine einer Zielfarbe, die eine Explosion abräumt, zählen für „Sammle“-Ziele und für Ziele „Senden oder kombinieren“, und ein Stein, der vor seinem eigenen Tor gesprengt wird, fliegt hindurch hinaus. Hindernisschichten, die eine Explosion bricht, zählen für Ziele mit Kisten, Moos und Schlössern.',
              },
              {
                q: 'Soll ich Spezialsteine fürs Ende aufheben?',
                a: 'Nur wenn die Ziele schon sicher sind. Jeder Spezialstein, der noch auf dem Brett liegt, wenn das letzte Ziel erreicht ist, geht im Finale hoch und bringt Punkte, aber ein früh eingesetzter Spezialstein kann Züge sparen, die am Ende noch mehr Punkte werden.',
              },
              {
                q: 'Ist der Booster Rakete dasselbe wie ein Linienstein?',
                a: 'Der Booster **Rakete** macht aus einem normalen Stein deiner Wahl einen Linienstein, der sofort seine Reihe entlang feuert. Siehe [Booster, Tipps und Pause](help:boosters-and-pause).',
              },
            ],
          },
        ],
      },
    ],
    related: ['blockers-encyclopedia', 'board-kinds', 'playing-a-board', 'bricks-specials-and-blockers', 'boosters-and-pause', 'voiceover'],
  },

  {
    slug: 'blockers-encyclopedia',
    category: 'learn',
    cover: 'board-village',
    title: 'Alle Hindernisse, Deckel und Tore erklärt',
    summary:
      'Wie jedes Hindernis auf einem Brett aussieht, was es tut und wie genau du es abräumst oder öffnest: Kisten, Eis, Schlösser, Moos, Statuen, verdeckte Steine, Schlüssel, lange und geformte Steine, die fünf Deckel, jede Art von Tor und Portale.',
    keywords:
      'hindernis hindernisse blocker kiste topf blumentopf heuballen sandburg schichten eis gelee gel gefroren eingefroren schloss kette gesperrt verriegelt moos unkraut ausbreiten wuchert statue stein ornament deko verdeckt fragezeichen versteckter stein schlüssel schlüsselstein schlüsselloch versiegelter raum versiegeltes beet deckel zählerdeckel farbiger zähler glasdeckel buntglas uhr uhrdeckel messinguhr tor vereistes tor eistor zähltor etappentor versiegeltes tor portal langer stein großer stein l-stein t-stein',
    host: 'peach',
    hostPose: 'think',
    sections: [
      {
        id: 'overview',
        title: 'Auf einen Blick',
        blocks: [
          {
            t: 'p',
            text: 'Alles, was kein normaler Stein ist, steht hier. Das Aussehen ändert sich mit dem Dorf (Blumentöpfe in der Gartenstadt, Heuballen auf dem Bauernhof, Sandburgen am Meer), aber die Regeln nie. **Tippe auf einem Brett auf ein Hindernis, einen Deckel oder ein Tor**, dann wackelt es und sagt dir in einer Zeile, was es ist und was es abräumt.',
          },
          {
            t: 'table',
            head: ['Hindernis', 'Hält es Schieben auf?', 'So räumst du es ab oder öffnest es'],
            rows: [
              ['[Kiste](#crate)', 'Ja', 'Eine Reihe daneben oder eine Explosion. Jedes Mal eine Schicht.'],
              ['[Stein im Eis](#ice)', 'Ja, und er kann sich nicht bewegen', 'Eine Reihe daneben oder eine Explosion. Jedes Mal eine Schicht.'],
              ['[Gesperrter Stein](#lock)', 'Ja, und er kann sich nicht bewegen', 'Eine Reihe **durch** ihn hindurch oder eine Explosion.'],
              ['[Moos](#moss)', 'Ja', 'Eine Reihe daneben oder eine Explosion.'],
              ['[Statue](#statue)', 'Ja', 'Sie bleibt. Such dir eine andere Bahn.'],
              ['[Verdeckter Stein](#face-down)', 'Er ist ein Stein: Er bewegt sich', 'Dreht sich um, wenn ein Stein daneben das Brett verlässt.'],
              ['[Deckel](#lids)', 'Ja', 'Jeder der fünf öffnet sich nach seiner eigenen Regel.'],
              ['[Tore](#gates)', 'Falsche Farbe oder zu: ja', 'Offene Tore nehmen Steine ihrer Farbe.'],
              ['[Portal](#portal)', 'Nein: Ein Stein geht hindurch', 'Schieb einen einzelnen Stein hinein.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Geprüft mit Version 5.1.1',
            text: 'Kisten, Eis, Schlösser, Moos, Statuen, Tore und der Uhrdeckel kommen entlang der ganzen Reise vor. In dieser Version erscheinen die anderen vier Deckel, verdeckte Steine, Etappentore und Portale auf einigen Brettern bis Level 408; spätere Updates bringen sie vielleicht weiter nach hinten.',
          },
        ],
      },
      {
        id: 'obstacles',
        title: 'Hindernisse',
        blocks: [
          {
            t: 'entry',
            id: 'crate',
            title: 'Kiste',
            board: {
              rows: ['G B R Y', 'R R B x2', 'Y G Y B'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G B B Y', '. . . x', 'Y G Y B'] },
              caption: 'Eine Reihe direkt neben einer Kiste nimmt ihr eine Schicht ab.',
              alt: 'Ein Brett, auf dem nichts fällt, mit drei Reihen zu je vier Feldern. Obere Reihe: Grün, Blau, Rot, Gelb. Mittlere Reihe: Rot, Rot, Blau und rechts eine Kiste mit 2 Schichten. Untere Reihe: Gelb, Grün, Gelb, Blau. Ein Pfeil tauscht den roten Stein oben in der dritten Spalte nach unten mit dem blauen Stein darunter. Ergebnis: Drei rote Steine verschwinden in der mittleren Reihe, und die Kiste neben dem Ende der Reihe verliert eine Schicht: Sie hat jetzt 1 Schicht. Der blaue Stein liegt oben in der dritten Spalte; der Rest ist unverändert.',
            },
            what: 'Eine Kiste, die ein Feld füllt. Ein gleitender Stein bleibt davor stehen, mit ihr lässt sich nichts tauschen, und auf Brettern mit fallenden Steinen bleibt sie liegen, während die Steine darüber auf ihr ruhen. Sie hat eine oder zwei Schichten: Eine Kiste mit zwei Schichten sieht stabiler aus, und Antippen oder VoiceOver sagt dir immer, wie viele noch übrig sind.',
            how: 'Bilde eine Reihe direkt daneben (auf dem Feld über, unter, links oder rechts neben einem Stein der Reihe): Jede Reihe nimmt eine Schicht ab, egal wie viele ihrer Steine die Kiste berühren. Eine Explosion, die sie erreicht, nimmt ebenfalls eine Schicht ab, und die doppelte Explosion einer Bombe kann zwei abnehmen. Die letzte Schicht bricht sie auf und macht das Feld frei.',
            facts: [
              { label: 'Erstes Auftreten', text: 'Level 5, Töpfe und Eis. Kisten mit zwei Schichten ab Level 20.' },
              { label: 'Ziel', text: '„Knacke“-Ziele für Kisten: Jede Schicht, die du abschlägst, zählt einmal.' },
              { label: 'Sieht so aus, ist es aber nicht', text: 'Eine Statue, die nie zerbricht, und ein Deckel, der Steine abdeckt und ein Zeichen trägt.' },
              { label: 'VoiceOver sagt', text: '„Kiste, 2 Schichten“. Angetippt: „Kiste, 2 Schichten. Eine Reihe daneben bricht eine Schicht“.' },
            ],
            tip: 'Der Booster **UFO** nimmt einer Kiste eine Schicht ab, wo immer sie liegt.',
          },
          {
            t: 'entry',
            id: 'ice',
            title: 'Stein im Eis',
            board: {
              rows: ['B G~ Y', 'R R B', 'G Y R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['B G Y', '. . .', 'G Y B'] },
              caption: 'Eine Reihe neben dem vereisten Stein bricht das Eis; der Stein darin ist wieder frei.',
              alt: 'Ein Brett, auf dem nichts fällt, mit drei Reihen zu je drei Feldern. Obere Reihe: Blau, ein grüner Stein, eingefroren in Eis, Gelb. Mittlere Reihe: Rot, Rot, Blau. Untere Reihe: Grün, Gelb, Rot. Ein Pfeil tauscht den roten Stein unten rechts nach oben mit dem blauen Stein darüber. Ergebnis: Drei rote Steine verschwinden in der mittleren Reihe, und das Eis um den grünen Stein über der Reihe bricht; übrig bleibt ein normaler grüner Stein, der sich wieder bewegen kann. Der blaue Stein liegt jetzt unten rechts.',
            },
            what: 'Ein farbiger Stein, festgehalten in einem Eisblock, eine oder zwei Schichten dick. Solange er eingefroren ist, kann er weder geschoben noch getauscht werden, nicht fallen und nicht in einer Reihe zählen, und ein gleitender Stein bleibt vor ihm stehen.',
            how: 'Bilde eine Reihe direkt daneben oder erreich ihn mit einer Explosion: Beides nimmt eine Schicht ab. Bricht die letzte Schicht, ist er wieder ein gewöhnlicher Stein, den du bewegen und kombinieren kannst.',
            facts: [
              { label: 'Erstes Auftreten', text: 'Level 5, Töpfe und Eis.' },
              { label: 'Sieht so aus, ist es aber nicht', text: 'Ein vereistes **Tor**, das am Rand des Bretts liegt und anders auftaut. Siehe [Vereistes Tor](#iced-gate).' },
              { label: 'VoiceOver sagt', text: 'Den Stein, dann sein Eis, zum Beispiel „Stein, Rot, in Gelee, 1 Schicht“. Angetippt: „… Eine Reihe daneben bricht das Gel“.' },
            ],
            tip: 'Ein vereister Stein in einer Zielfarbe lohnt sich früh zu befreien: Bis er frei ist, kommt er nicht zu seinem Tor.',
          },
          {
            t: 'entry',
            id: 'lock',
            title: 'Gesperrter Stein',
            board: {
              rows: ['G Y R', 'R R! B', 'Y G Y'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G Y B', '. R .', 'Y G Y'] },
              caption: 'Eine Reihe, die durch den gesperrten Stein verläuft, befreit ihn. Der befreite Stein bleibt.',
              alt: 'Ein Brett, auf dem nichts fällt, mit drei Reihen zu je drei Feldern. Obere Reihe: Grün, Gelb, Rot. Mittlere Reihe: Rot, ein gesperrter roter Stein, Blau. Untere Reihe: Gelb, Grün, Gelb. Ein Pfeil tauscht den roten Stein oben rechts nach unten mit dem blauen Stein darunter. Ergebnis: Drei rote Steine liegen in der mittleren Reihe in einer Linie, die durch den gesperrten Stein verläuft. Die beiden äußeren roten Steine verschwinden; das Schloss geht auf, und der mittlere rote Stein bleibt, jetzt ein normaler Stein. Der blaue Stein liegt oben rechts.',
            },
            what: 'Ein Stein, der von einem Schloss festgehalten wird. Er kann weder geschoben noch getauscht werden und nicht fallen, und ein gleitender Stein bleibt vor ihm stehen. In einer Reihe seiner Farbe zählt er trotzdem mit.',
            how: 'Bilde eine Reihe **durch** ihn hindurch: Die Reihe räumt die Steine um ihn herum ab, öffnet das Schloss und lässt den befreiten Stein, wo er ist. Eine Reihe, die nur daneben liegt, bewirkt nichts. Eine Explosion, die ihn erreicht, öffnet das Schloss ebenfalls.',
            facts: [
              { label: 'Erstes Auftreten', text: 'Level 9, Schlösser und Moos.' },
              { label: 'Ziel', text: '„Löse“-Ziele für Schlösser: Jedes geöffnete Schloss zählt einmal.' },
              { label: 'VoiceOver sagt', text: '„Stein, Gelb, gesperrt, eine Reihe durch ihn befreit ihn“.' },
            ],
            tip: 'Such die Farbe des gesperrten Steins auf beiden Seiten von ihm, oder darüber und darunter: Ein Schieben oder Tausch, der die Reihe vollendet, befreit ihn.',
          },
          {
            t: 'entry',
            id: 'moss',
            title: 'Moos',
            board: {
              rows: ['Y m B', 'R R G', 'B Y R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['Y . B', '. . .', 'B Y G'] },
              caption: 'Eine Reihe direkt neben dem Moos räumt es ab.',
              alt: 'Ein Brett, auf dem nichts fällt, mit drei Reihen zu je drei Feldern. Obere Reihe: Gelb, ein Moosbüschel, Blau. Mittlere Reihe: Rot, Rot, Grün. Untere Reihe: Blau, Gelb, Rot. Ein Pfeil tauscht den roten Stein unten rechts nach oben mit dem grünen Stein darüber. Ergebnis: Drei rote Steine verschwinden in der mittleren Reihe, und das Moos über der Reihe verschwindet ebenfalls; zurück bleibt ein leeres Feld. Der grüne Stein liegt jetzt unten rechts.',
            },
            what: 'Ein Moosbüschel, das ein Feld füllt. Ein gleitender Stein bleibt davor stehen. Auf Brettern der Art **Schlösser und Moos** breitet es sich aus: In den Worten des Spiels kriecht Moos auf einen Stein, wenn ein Zug keins entfernt, und überwuchert dabei einen normalen einzelnen Stein daneben.',
            how: 'Bilde eine Reihe direkt daneben oder erreich es mit einer Explosion: Ein Treffer räumt es ab. Moos, das über einen Stein gewachsen ist, verschwindet auf dieselbe Art.',
            facts: [
              { label: 'Erstes Auftreten', text: 'Level 9, Schlösser und Moos.' },
              { label: 'Ziel', text: 'Moos-Ziele („Räume … weg“): Jedes abgeräumte Büschel zählt, auch solche, die während des Spiels gewachsen sind.' },
              { label: 'VoiceOver sagt', text: '„Moos, wächst nach einem Zug, der nichts räumt“. Gemeint ist ein Zug, der kein Moos abräumt. Angetippt: „… Eine Reihe daneben räumt es weg“.' },
            ],
            tip: 'Räum Moos ab, wann immer du kannst: Ein Zug, der etwas Moos abräumt, lässt es nie wachsen. Booster zählen nie als Zug, ein Booster lässt Moos also nicht wachsen.',
          },
          {
            t: 'entry',
            id: 'statue',
            title: 'Statue',
            board: {
              rows: ['. . . . .', 'R+ . s . .', 'B . . . G'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 0, dir: 'right' }],
              after: { rows: ['. . . . .', '. R s . .', 'B . . . G'] },
              caption: 'Eine Statue hält ein Schieben auf. Das rote Tor ist auf dieser Reihe nicht zu erreichen.',
              alt: 'Ein Brett, auf dem nichts fällt, mit drei Reihen zu je fünf Feldern und einem roten Tor am rechten Rand der mittleren Reihe. Obere Reihe: leer. Mittlere Reihe: links ein roter Stein, ein leeres Feld, in der Mitte eine Statue, dann zwei leere Felder. Untere Reihe: links Blau, drei leere Felder, rechts Grün. Ein Pfeil schiebt den roten Stein nach rechts. Ergebnis: Er bleibt im zweiten Feld vor der Statue stehen und kann das rote Tor auf dieser Reihe nicht erreichen.',
            },
            what: 'Eine Gartenstatue oder ein anderes Schmuckstück des Dorfs, das in einer Lücke im Brett steht. Sie ist Kulisse, kein Teil: Nichts gleitet hindurch, nichts kann auf ihr landen, und sie zerbricht nie. Auf Brettern mit fallenden Steinen ruhen die Steine darüber auf ihr, und einzelne Steine gleiten schräg um sie herum, um die Felder darunter zu füllen.',
            how: 'Sie lässt sich nicht abräumen. Plane um sie herum: Nutz die freien Bahnen oder bring den Stein über eine andere Reihe ans Ziel. Die Explosion eines Liniensteins geht einfach über sie hinweg.',
            facts: [
              { label: 'Erstes Auftreten', text: 'Level 10, Steinbahnen.' },
              { label: 'Sieht so aus, ist es aber nicht', text: 'Eine Kiste, die zerbricht; eine Statue tut das nie.' },
              { label: 'VoiceOver sagt', text: 'Ihren Namen, zum Beispiel „Statue: Teil der Kulisse. Die Steine fallen drumherum“.' },
            ],
          },
        ],
      },
      {
        id: 'special-bricks',
        title: 'Steine mit eigenen Regeln',
        blocks: [
          {
            t: 'entry',
            id: 'face-down',
            title: 'Verdeckter „?“-Stein',
            board: {
              rows: ['? R+ . .', 'G B Y .'],
              gates: [{ side: 'top', at: 1, colour: 'R' }],
              moves: [{ row: 0, col: 1, dir: 'up' }],
              after: { rows: ['Y . . .', 'G B Y .'] },
              caption: 'Der rote Stein daneben verlässt das Brett, also dreht sich der verdeckte Stein um.',
              alt: 'Ein Brett mit zwei Reihen zu je vier Feldern und einem roten Tor am oberen Rand über der zweiten Spalte. Obere Reihe: ein verdeckter Stein mit Fragezeichen, ein roter Stein, zwei leere Felder. Untere Reihe: Grün, Blau, Gelb, leer. Ein Pfeil schiebt den roten Stein nach oben, durch das rote Tor hinaus. Ergebnis: Der rote Stein hat das Brett verlassen, und der verdeckte Stein daneben dreht sich um: Er war gelb. Die untere Reihe ist unverändert.',
            },
            what: 'Ein schiefergrauer Stein mit einem weißen „?“ und ohne Farbsymbol. Er verbirgt seine Farbe, ist aber ein echter Stein einer echten Farbe und spielt auch so: Er lässt sich schieben, tauschen und kombinieren und geht genau wie diese Farbe durch das Tor seiner Farbe nach Hause.',
            how: 'Er dreht sich um, wenn ein Stein **direkt daneben** (darüber, darunter, links oder rechts) **das Brett verlässt**: durch ein Tor hinaus, in einer Reihe abgeräumt oder von einer Explosion abgeräumt. Er dreht sich nie um, weil er bewegt wurde oder weil ein Nachbar weggeglitten oder weggefallen ist.',
            facts: [
              { label: 'Erstes Auftreten', text: 'Level 49.' },
              { label: 'Faires Spiel', text: 'Kein Tipp, keine Lernhand, kein Rotor, kein Reihenklang und kein VoiceOver-Wort verrät je seine Farbe. Der Tipp schlägt keinen Zug vor, der einen verdeckten Stein bewegt, tauscht oder abräumt, auf einem Brett voller verdeckter Steine zeigt er also vielleicht gar keinen Tipp.' },
              { label: 'VoiceOver sagt', text: '„Verdeckter Stein, dreht sich um, wenn ein Stein daneben das Spielfeld verlässt“. Seine Tausche sagen nie „keine Reihe“, und eine Bahn, die an einem Tor endet, wird als „Schieben nach links, in das Tor“ angeboten. Die Sprachsteuerung nennt ihn „Verdeckt“, etwa in „Verdeckt 14 links schieben“.' },
            ],
            tip: 'Räum zuerst die Steine um eine Gruppe von „?“-Steinen ab: Jeder Stein, der das Brett verlässt, kann bis zu vier von ihnen umdrehen, und dann kannst du planen.',
          },
          {
            t: 'entry',
            id: 'key',
            title: 'Schlüsselstein',
            what: 'Ein Stein seiner Farbe mit einem Schlüssel darauf. Er kommt nur auf Brettern mit einem [Schlüssellochdeckel](#lid-keyhole) vor, außerhalb des Deckels und meist weit oben auf dem Brett.',
            how: 'Er spielt sich genau wie ein Stein seiner Farbe: schieben, tauschen, kombinieren. Sobald er **das Brett verlässt**, in einer Reihe kombiniert, von einer Explosion abgeräumt oder durch ein Tor seiner Farbe hinausgeschoben, öffnet sich der Schlüssellochdeckel.',
            facts: [
              { label: 'VoiceOver sagt', text: '„Schlüssel, Rot“.' },
              { label: 'Farbenblind', text: 'Er trägt in einer Ecke ein Abzeichen mit dem Symbol seiner Farbe.' },
            ],
            tip: 'Liegt sein Tor weit weg, ist eine Dreierreihe schneller: Ein Schlüssel, der irgendwo kombiniert wird, öffnet das Schlüsselloch genauso.',
          },
          {
            t: 'entry',
            id: 'long-bricks',
            title: 'Lange und große Steine',
            what: 'Ein geformtes Stück, das zwei oder drei Felder in einer Linie bedeckt (1×2, 2×1, 1×3, 3×1) oder ein 2×2-Quadrat. Es gleitet als ein Stück und bleibt stehen, sobald eines seiner Felder auf etwas trifft.',
            how: 'Schieb es in ein Tor seiner Farbe, das **quer zu seiner Bahn so breit ist wie der Stein**: Ein Stein, der zwei Felder hoch ist und seitwärts gleitet, braucht ein seitliches Tor, das zwei Felder lang ist, und ein 2×2 braucht ein Tor, das zwei Felder lang ist. Die Felder hinter ihm müssen frei sein, damit er ganz hinausgleiten kann. Er wird nie getauscht, zählt nie in einer Reihe, und keine Explosion und kein Booster kann ihn nehmen, nach Hause schieben ist also der einzige Weg. Für deine Ziele zählt er **jedes Feld**: Ein roter 2×2 zählt als vier rote.',
            facts: [
              { label: 'Erstes Auftreten', text: 'Level 6, Lange Steine.' },
              { label: 'Wo Steine fallen', text: 'Er fällt als Einheit, eine Reihe nach der anderen, und nur, wenn jedes Feld unter ihm frei ist: Eine einzige Kiste unter einem seiner Felder hält das ganze Stück fest.' },
              { label: 'VoiceOver sagt', text: '„Langer Stein, Rot, 2 hoch“, „Großer quadratischer Stein, Blau“. Seine Aktionen nennen ihn: „Schieben: Langer Stein, Rot, nach links, hinaus durch das Tor: Rot“.' },
            ],
            tip: 'Bevor du eine Bahn freiräumst, prüf die Breite des Tors. Ein Tor, das nur ein Feld lang ist, nimmt nie einen langen Stein, egal wie gut er ausgerichtet ist.',
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Level 31 am Strand: 16 verbleibende Züge, Ziele von 8 gelben und 8 blauen. Unten auf dem Brett stapeln sich große, zusammenhängende Steine: ein langer blauer Balken, eine hohe blaue Säule und ein gelbes Teil in C-Form, mit blauen und gelben Toren an den Rändern.',
            caption: 'Große Steine gleiten als ein Stück und brauchen ein Tor, das so breit ist wie sie.',
          },
          {
            t: 'entry',
            id: 'l-and-t',
            title: 'L- und T-Steine',
            what: 'Gebogene Stücke aus vier Feldern in Form eines L oder eines T. Für sie gelten dieselben Regeln wie für lange Steine: ein Stück, nie getauscht, nie in einer Reihe, nie gesprengt.',
            how: 'Richte das Stück an einem Tor seiner Farbe aus, das das ganze Stück quer zu seiner Bahn überspannt, und schieb es dann nach Hause. Welches seiner Felder auch immer zuerst auf etwas trifft, hält das ganze Stück an.',
            facts: [
              { label: 'Erstes Auftreten', text: 'Level 7, Eckstücke.' },
              { label: 'VoiceOver sagt', text: '„L-Stein, Rot“, „T-Stein, Blau“.' },
            ],
          },
        ],
      },
      {
        id: 'lids',
        title: 'Versiegelte Räume und ihre fünf Deckel',
        blocks: [
          {
            t: 'p',
            text: 'Ein **versiegelter Raum** ist ein Block aus einem bis vier Feldern unter einem Deckel. Bis sich der Deckel öffnet, sind die Steine darunter eingefroren: Sie können weder geschoben noch getauscht oder kombiniert werden und nicht fallen, und keine Explosion, kein Booster und kein Mischen erreicht sie. Jeder Deckel trägt ein Zeichen für seine Art, und die meisten zeigen auch eine Zahl: wie viel sie noch brauchen. Öffnet er sich, hebt sich der Deckel weg, und seine Steine spielen mit.',
          },
          {
            t: 'table',
            head: ['Deckel', 'Zeichen', 'Öffnet sich, wenn …'],
            rows: [
              ['[Zählerdeckel](#lid-counter)', 'Ein Raster aus Quadraten und eine Zahl', 'so viele weitere Steine beliebiger Farbe das Brett verlassen haben.'],
              ['[Farbiger Zählerdeckel](#lid-colour-counter)', 'Ein Stapel Quadrate und eine Zahl, in seiner Farbe', 'so viele weitere Steine seiner Farbe das Brett verlassen haben.'],
              ['[Glasdeckel](#lid-glass-key)', 'Ein Schlüssel in seiner Farbe; keine Zahl', 'du direkt daneben eine Reihe in seiner Farbe bildest.'],
              ['[Uhrdeckel](#lid-clock)', 'Eine Uhr und eine Zahl', 'du so viele weitere Züge gemacht hast.'],
              ['[Schlüssellochdeckel](#lid-keyhole)', 'Ein Vorhängeschloss', 'der Schlüsselstein das Brett verlässt.'],
            ],
          },
          {
            t: 'entry',
            id: 'lid-counter',
            title: 'Zählerdeckel',
            what: 'Ein Deckel mit einem Rasterzeichen und einer Zahl, die herunterzählt.',
            how: 'Jeder Stein, der das Brett verlässt, egal welcher Farbe, zieht eins ab: in einer Reihe kombiniert, von einer Explosion abgeräumt oder durch ein Tor hinausgeschickt. Ein langer oder großer Stein zählt einmal. Steine auf dem Brett herumzuschieben zählt nicht. Auf den bisherigen Brettern verlangt er 5 bis 9 Steine.',
            facts: [
              { label: 'VoiceOver sagt', text: 'Auf jedem abgedeckten Stein: „versiegelt unter einem Deckel, öffnet nach 6 weiteren Steinen“. Beim Öffnen: „Der Zählerdeckel ist offen. Seine Steine können sich bewegen“.' },
            ],
          },
          {
            t: 'entry',
            id: 'lid-colour-counter',
            title: 'Farbiger Zählerdeckel',
            what: 'Ein Deckel in einer Farbe, mit einem Stapelzeichen und einer Zahl.',
            how: 'Nur Steine **seiner eigenen Farbe**, die das Brett verlassen, zählen: kombiniert, gesprengt oder durch ein Tor geschickt. Andere Farben bewirken bei ihm nichts. Auf den bisherigen Brettern verlangt er 3 oder 4.',
            facts: [
              { label: 'Erstes Auftreten', text: 'Level 65.' },
              { label: 'VoiceOver sagt', text: '„versiegelt unter einem Deckel (Rot), öffnet nach 3 weiteren Steinen: Rot“. Beim Öffnen: „Der Zählerdeckel (Rot) ist offen. Seine Steine können sich bewegen“.' },
            ],
            tip: 'Seine Farbe ist meist auch eine, die deine Ziele wollen, jeder Stein, den du nach Hause schickst, zählt also doppelt.',
          },
          {
            t: 'entry',
            id: 'lid-glass-key',
            title: 'Glasdeckel',
            what: 'Ein Deckel aus Buntglas in einer Farbe, mit einem Schlüsselzeichen und ohne Zahl.',
            how: 'Bilde eine Reihe (oder ein 2×2-Quadrat) **in seiner Farbe**, bei der mindestens ein Stein direkt neben dem Deckel liegt: über, unter, links oder rechts neben einem seiner Felder. Eine Reihe in einer anderen Farbe, eine Reihe weiter weg oder eine Explosion öffnet ihn nicht.',
            facts: [
              { label: 'VoiceOver sagt', text: '„versiegelt unter einem Schlüsseldeckel (Rot), öffnet bei einer Reihe daneben: Rot“. Beim Öffnen: „Der Glasdeckel (Rot) ist offen. Seine Steine können sich bewegen“.' },
            ],
            tip: 'Such zwei Steine in der Farbe des Deckels, die ihn schon berühren: Ein Schieben oder Tausch eines dritten Steins daneben öffnet ihn.',
          },
          {
            t: 'entry',
            id: 'lid-clock',
            title: 'Uhrdeckel (das versiegelte Beet)',
            what: 'Ein Deckel mit einer Messinguhr und einer Zahl von Zügen. Auf **Der große Tag** deckt er oft die beiden unteren Felder einer Ecke ab; das Spiel nennt ihn dort das **versiegelte Beet**.',
            how: 'Er öffnet sich nach so vielen Zügen von selbst: Jedes Schieben, jeder Tausch und jedes Antippen zählt eins. Booster zählen nicht. Auf den bisherigen Brettern verlangt er 3 bis 6 Züge.',
            facts: [
              { label: 'Erstes Auftreten', text: 'Level 11, Der große Tag, als versiegeltes Beet.' },
              { label: 'VoiceOver sagt', text: '„versiegelt unter einem Uhrdeckel, öffnet in 3 Zügen“. Beim Öffnen: „Der Uhrdeckel ist offen. Seine Steine können sich bewegen“.' },
            ],
            tip: 'Nichts, was du tust, öffnet ihn früher, also spiel woanders und plane schon für die Steine darunter.',
          },
          {
            t: 'entry',
            id: 'lid-keyhole',
            title: 'Schlüssellochdeckel',
            what: 'Ein Deckel mit einem Vorhängeschloss als Zeichen. Irgendwo außerhalb liegt ein [Schlüsselstein](#key) in einer Zielfarbe.',
            how: 'Bring den Schlüsselstein vom Brett: Kombiniere ihn in einer Reihe, räum ihn mit einer Explosion ab oder schieb ihn durch ein Tor seiner Farbe hinaus. Der Deckel öffnet sich sofort.',
            facts: [
              { label: 'VoiceOver sagt', text: '„versiegelt unter einem Schlüssellochdeckel, öffnet mit einem Schlüsselstein“. Beim Öffnen: „Der Schlüssellochdeckel ist offen. Seine Steine können sich bewegen“.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Wenn dir ein Deckel zum ersten Mal begegnet, erklärt ihn eine Lernkarte. Ein Deckel, der sich nicht öffnen will, macht ein Brett nie unmöglich: Jedes Brett im Spiel wurde darauf geprüft, dass es sich gewinnen lässt, Deckel eingeschlossen.',
          },
        ],
      },
      {
        id: 'gates',
        title: 'Tore',
        blocks: [
          {
            t: 'p',
            text: 'Tore sind farbige Türen im Rahmen des Bretts, ein, zwei oder drei Felder lang. Ein Tor, dessen Farbe deine Ziele noch wollen, leuchtet sanft; ein Tor, das gerade keine Steine nehmen kann, nicht. Ein Tor in jeder anderen Farbe oder eines, das zu ist, ist einfach ein Teil der Wand.',
          },
          {
            t: 'entry',
            id: 'gate',
            title: 'Offenes Tor',
            board: {
              rows: ['B . Y G', '. . . R+', 'G Y B .'],
              gates: [{ side: 'left', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 3, dir: 'left' }],
              after: { rows: ['B . Y G', '. . . .', 'G Y B .'] },
              caption: 'Ganz bis in das Tor seiner Farbe gebracht, geht ein Stein nach Hause.',
              alt: 'Ein Brett mit drei Reihen zu je vier Feldern und einem roten Tor am linken Rand der mittleren Reihe. Obere Reihe: Blau, leer, Gelb, Grün. Mittlere Reihe: drei leere Felder, dann rechts ein roter Stein. Untere Reihe: Grün, Gelb, Blau, leer. Ein Pfeil schiebt den roten Stein nach links durch die leere mittlere Reihe. Ergebnis: Er gleitet bis zum Rand und durch das rote Tor hinaus. Die mittlere Reihe ist jetzt leer; die anderen Steine sind unverändert.',
            },
            what: 'Eine Tür, die Steine ihrer eigenen Farbe nimmt: normale Steine, Schlüssel und Liniensteine. Bomben, Zielpfeile und Farbbomben bleiben davor stehen.',
            how: 'Drei Wege hinein. **Schieb** einen Stein seine Bahn entlang und bring ihn ganz bis ins Tor: Lässt du vorher los, bleibt der Stein dort, wo du losgelassen hast. **Kombiniere** einen Stein seiner Farbe auf dem Randfeld davor. **Spreng** einen Stein seiner Farbe auf diesem Randfeld. Jeder davon zählt als nach Hause geschickt.',
            facts: [
              { label: 'Breite', text: 'Ein einzelner Stein kann jedes Feld des Tors nutzen. Ein langer oder großer Stein braucht ein Tor, das ihn überspannt, und die Felder hinter ihm müssen frei sein.' },
              { label: 'Ziel', text: '„Senden oder kombinieren“ in einer Farbe: Steine, die irgendwo kombiniert oder gesprengt werden, zählen genauso wie Steine, die durch das Tor geschickt werden.' },
              { label: 'VoiceOver sagt', text: '„Tor: Rot, 2 Felder breit, linke Seite, Reihen 3 bis 4“ und seinen Zustand: „offen“.' },
            ],
          },
          {
            t: 'entry',
            id: 'counted-gate',
            title: 'Zähltor',
            board: {
              rows: ['R+ . G', 'B Y .'],
              gates: [{ side: 'left', at: 0, colour: 'R', kind: 'counted', count: 2 }],
              moves: [{ row: 0, col: 0, dir: 'left' }],
              after: { rows: ['. . G', 'B Y .'], gates: [{ side: 'left', at: 0, colour: 'R', kind: 'counted', count: 1 }] },
              caption: 'Ein Zähltor zeigt, wie viele es noch nimmt.',
              alt: 'Ein Brett mit zwei Reihen zu je drei Feldern und einem roten Zähltor mit der Zahl 2 am linken Rand der oberen Reihe. Obere Reihe: Rot, leer, Grün. Untere Reihe: Blau, Gelb, leer. Ein Pfeil schiebt den roten Stein nach links durch das Tor hinaus. Ergebnis: Der rote Stein ist nach Hause gegangen, und das Tor zeigt jetzt 1: Es nimmt noch einen roten Stein und schließt sich dann.',
            },
            what: 'Ein Tor mit einer Zahl: wie viele Steine es noch nimmt.',
            how: 'Jeder Stein, der hindurchgeht, ob geschoben, davor kombiniert oder davor gesprengt, zieht eins ab. Bei null **schließt es sich für immer** und wird zur Wand. Es zählt nur Steine, die durch es hindurchgehen; Steine seiner Farbe, die woanders kombiniert werden, zählen weiterhin für ein Ziel „Senden oder kombinieren“, ändern aber die Zahl des Tors nicht.',
            facts: [
              { label: 'Erstes Auftreten', text: 'Level 11, Der große Tag.' },
              { label: 'VoiceOver sagt', text: '„offen, nimmt noch 3“, dann „für immer geschlossen“. Angetippt: „Tor Rot: nimmt noch 3 Steine (Rot), dann schließt es“.' },
            ],
            tip: 'Auf Der große Tag nimmt das Zähltor etwas mehr, als sein Ziel verlangt. Lange Steine seiner Farbe können das Brett nur durch ein Tor verlassen, also halt seine Plätze für sie frei.',
          },
          {
            t: 'entry',
            id: 'iced-gate',
            title: 'Vereistes Tor',
            board: {
              rows: ['B+ . . Y', '. G . .', 'R . Y .'],
              gates: [
                { side: 'left', at: 0, colour: 'B' },
                { side: 'right', at: 2, colour: 'R', kind: 'iced' },
              ],
              moves: [{ row: 0, col: 0, dir: 'left' }],
              after: {
                rows: ['. . . Y', '. G . .', 'R . Y .'],
                gates: [
                  { side: 'left', at: 0, colour: 'B' },
                  { side: 'right', at: 2, colour: 'R' },
                ],
              },
              caption: 'Jeder Stein, der nach Hause geht, taut das vereiste Tor ein wenig auf. Dieses brauchte nur einen.',
              alt: 'Ein Brett mit drei Reihen zu je vier Feldern, mit einem blauen Tor am linken Rand der oberen Reihe und einem vereisten roten Tor am rechten Rand der unteren Reihe, das nur noch einen Stein vom Auftauen entfernt ist. Obere Reihe: links Blau, zwei leere Felder, Gelb. Mittlere Reihe: leer, Grün, leer, leer. Untere Reihe: Rot, leer, Gelb, leer. Ein Pfeil schiebt den blauen Stein nach links durch das blaue Tor hinaus. Ergebnis: Der blaue Stein ist nach Hause gegangen, und das rote Tor rechts ist aufgetaut und offen.',
            },
            what: 'Ein Tor, das von Eis bedeckt ist. Bis es auftaut, nimmt es nichts und ist Teil der Wand.',
            how: 'Es taut auf zwei Arten Schritt für Schritt auf: **Jeder Stein, der durch irgendein Tor nach Hause geht**, taut jedes vereiste Tor um eins auf, und jedes Teil, das auf dem Randfeld **direkt davor** abgeräumt wird, taut es um eins auf. Ist das Eis weg, schieb seine Farbe hinein.',
            facts: [
              { label: 'Erstes Auftreten', text: 'Level 5, Töpfe und Eis.' },
              { label: 'Sieht so aus, ist es aber nicht', text: 'Ein [Stein im Eis](#ice) im Inneren des Bretts. Zähltore und vereiste Tore werden unterschiedlich gezeichnet, sie sehen sich also nie ähnlich.' },
              { label: 'VoiceOver sagt', text: '„vereist, noch 2 davor räumen zum Auftauen“, dann „offen“, wenn es aufgetaut ist.' },
            ],
            tip: 'Schick früh einen leichten Stein nach Hause, egal welcher Farbe: Er bringt das Auftauen in Gang, während du den Rest vorbereitest.',
          },
          {
            t: 'entry',
            id: 'staged-gate',
            title: 'Etappentor',
            what: 'Ein Tor hinter einem dunklen Rollladen mit einem Vorhängeschloss und einer Etappennummer. Es gehört zu einem Brett, dessen Ziele in zwei **Etappen** kommen, angezeigt als „STUFE 1 / 2“ im Auftragsfeld.',
            how: 'Erreiche die Ziele der ersten Etappe, und die zweite Etappe beginnt: Der Rollladen geht auf, und das Tor nimmt seine Farbe. Bis dahin ist es Teil der Wand.',
            facts: [
              { label: 'Erstes Auftreten', text: 'Level 54, auf Brettern, auf denen nichts fällt.' },
              { label: 'VoiceOver sagt', text: '„bis zu einer späteren Stufe gesperrt“ und „Neue Tore öffnen sich“, wenn die Etappe wechselt.' },
            ],
            tip: 'Schieb in Etappe 1 die Steine der zweiten Etappe schon in Richtung ihres versiegelten Tors, damit sie bereit sind, sobald es aufgeht.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Jedes Tor trägt das Symbol seiner Farbe. Mit **Brett mit hohem Kontrast** bekommt ein Tor, dessen Farbe der des Rahmens zu ähnlich ist, einen zweifarbigen Umriss. Siehe [Sehen, Hören und Bewegung](help:vision-hearing-and-motion).',
          },
        ],
      },
      {
        id: 'portals',
        title: 'Portale',
        blocks: [
          {
            t: 'entry',
            id: 'portal',
            title: 'Portal',
            what: 'Ein Paar wirbelnder Ringe im Rahmen des Bretts, auf zwei verschiedenen Seiten, beide mit demselben Buchstaben markiert.',
            how: 'Schieb einen **einzelnen** Stein (einen normalen Stein, einen Schlüssel oder einen Spezialstein) seine Bahn entlang bis zum Randfeld vor einem der Ringe, dann geht er hinein, kommt aus dem Zwilling wieder heraus und gleitet nach innen, bis er auf etwas trifft. Das kostet einen Zug. Das Feld vor dem Zwillingsring muss frei sein, und nimmt ihn an diesem Rand ein Tor seiner Farbe, geht er stattdessen nach Hause. Lange, große, L- und T-Steine können keine Portale nutzen.',
            facts: [
              { label: 'Erstes Auftreten', text: 'Level 58, auf Brettern, auf denen nichts fällt.' },
              { label: 'VoiceOver sagt', text: 'Die Aktion „Schieben nach links, durch das Portal“, dann „Durch das Portal, heraus bei Reihe 3, Spalte 5“.' },
            ],
            tip: 'Portale sind Abkürzungen zu einem fernen Tor: Ein Stein, der auf einer Seite des Bretts eingemauert ist, kann direkt vor dem Tor herauskommen, das er braucht.',
          },
        ],
      },
      {
        id: 'lookalikes',
        title: 'Ähnliches auseinanderhalten',
        blocks: [
          {
            t: 'table',
            head: ['Wenn du … siehst', 'ist es …', 'Denn …'],
            rows: [
              ['eine stabiler aussehende Kiste', 'eine Kiste mit zwei Schichten', 'tipp sie an: Sie sagt, wie viele Schichten noch übrig sind.'],
              ['eine Platte mit einem Zeichen über mehreren Steinen', 'ein Deckel', 'Deckel decken Steine ab; Kisten füllen allein ein Feld.'],
              ['Eis im Inneren des Bretts', 'ein Stein im Eis', 'Eis am Rahmen ist ein vereistes Tor.'],
              ['einen grauen Stein mit „?“', 'ein verdeckter Stein', 'er hat kein Farbsymbol; ein Deckel zeigt nie ein „?“.'],
              ['eine farbige Tür mit einer Zahl', 'ein Zähltor', 'ein vereistes Tor zeigt Eis, ein Etappentor einen dunklen Rollladen mit Vorhängeschloss.'],
              ['einen Wirbel im Rahmen', 'ein Portalende', 'Tore sind farbig; Portalenden kommen in Paaren mit Buchstaben.'],
              ['ein Schmuckstück in einer Lücke', 'eine Statue', 'sie ist Kulisse: Tipp sie an, und sie sagt es dir.'],
            ],
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'Hindernisse mit VoiceOver',
        blocks: [
          {
            t: 'list',
            items: [
              'Hindernisse und feste Teile werden als Text gelesen, Teile, die du bewegen kannst, als Tasten, so erkennst du sofort, was sich bewegen lässt. Wählst du eins, das sich nicht bewegen kann, hörst du zum Beispiel „Kiste, 2 Schichten. Lässt sich nicht bewegen“.',
              'Jeder abgedeckte Stein nennt seinen Deckel, und jedes Tor ist ein eigenes Element mit seiner Breite, Seite, Reihen oder Spalten und seinem Zustand.',
              'Der Rotor **Hindernisse** springt zwischen Kisten, Eis, Schlössern, Moos und dem Rest; der Rotor **Tore** zwischen den Toren.',
              '**Mehr Inhalt** zu jedem Teil nennt das Hindernis darauf und ob ein Ziel es braucht.',
              'Die Farbe eines verdeckten Steins wird nie ausgesprochen, bevor er sich umgedreht hat; dann hörst du „Umgedreht:“ und seine Farbe.',
            ],
          },
          { t: 'p', text: 'Alles Weitere steht in [Mit VoiceOver spielen](help:voiceover).' },
        ],
      },
      {
        id: 'faq',
        title: 'Fragen',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Warum ist mein Stein vor dem Tor stehen geblieben, statt nach Hause zu gehen?',
                a: 'Prüf fünf Dinge: Das Tor hat die Farbe des Steins; es ist nicht vereist, voll oder bis zu einer späteren Etappe versiegelt; der Stein ist keine Bombe, kein Zielpfeil und keine Farbbombe; ein langer oder großer Stein hat ein Tor, das so breit ist wie er; und du hast den Stein ganz hineingebracht. Ein Stein, den du kurz vor seinem Tor loslässt, bleibt dort, wo du ihn losgelassen hast.',
              },
              {
                q: 'Ich habe einen verdeckten Stein bewegt, und er ist verdeckt geblieben. Ist das ein Fehler?',
                a: 'Nein. Ein verdeckter Stein dreht sich nur um, wenn ein Stein daneben das Brett verlässt, nie, wenn er sich bewegt oder ein Nachbar weggleitet. Das ist dieselbe Regel, die das ursprüngliche Spiel schon immer hatte.',
              },
              {
                q: 'Warum gibt es auf diesem Brett keinen Tipp?',
                a: 'Auf Brettern mit verdeckten Steinen schlägt der Tipp nie einen Zug vor, der eine verborgene Farbe verraten würde. Betrifft jeder gute Zug einen verdeckten Stein, zeigt das Spiel lieber gar keinen Tipp als einen, der schummelt.',
              },
              {
                q: 'Das Moos wächst immer weiter. Was kann ich tun?',
                a: 'Moos breitet sich nur auf Brettern der Art Schlösser und Moos aus, auf einen Stein daneben, nach einem Zug, der kein Moos abräumt. Räum so oft wie möglich ein Büschel mit einer Reihe daneben ab, und setz den Booster **UFO** auf Moos an einer ungünstigen Stelle ein: Booster lassen es nie wachsen.',
              },
              {
                q: 'Kann ein Deckel oder ein Hindernis ein Brett unmöglich machen?',
                a: 'Nein. Jedes Brett wurde darauf geprüft, dass es sich gewinnen lässt. Kann sich gar nichts mehr bewegen, wird das Brett kostenlos neu gemischt; hat Moos jede Spalte zugewuchert, welkt es, und als letzter Ausweg geben das Eis oder das Schloss eines Steins nach. Siehe [Ein Brett spielen](help:playing-a-board#never-stuck).',
              },
            ],
          },
        ],
      },
    ],
    related: ['special-bricks-and-combos', 'board-kinds', 'bricks-specials-and-blockers', 'playing-a-board', 'boosters-and-pause', 'voiceover'],
  },

  {
    slug: 'board-kinds',
    category: 'learn',
    cover: 'board-shapes',
    title: 'Die zwölf Brettarten im Detail',
    summary:
      'Die zwölf Bretter jedes Dorfs folgen demselben Muster aus zwölf Arten, von Ab nach Hause bis Stilles Rätsel. Was jede Art bringt, wie sich Bretter mit fallenden Steinen von Brettern unterscheiden, auf denen nichts fällt, und was schwere, sehr schwere, Boss- und Nachtbretter ändern.',
    keywords:
      'brettart brettarten bretttyp art typ dorf zwölf 12 schwerkraft fallen fallende steine nichts fällt kein nachschub ab nach hause schieben und kombinieren offener garten fallender garten töpfe und eis lange steine eckstücke kisten und eis schlösser und moos steinbahnen der große tag stilles rätsel schwer sehr schwer boss nacht nachtbrett stufe schwierigkeit schild plakette',
    host: 'vio',
    hostPose: 'idle',
    sections: [
      {
        id: 'overview',
        title: 'Auf einen Blick',
        blocks: [
          {
            t: 'p',
            text: 'Jedes Dorf hat zwölf Bretter, und Brett 1 bis Brett 12 eines Dorfs ist immer dieselbe Art, in derselben Reihenfolge, so wird dir der Rhythmus eines Dorfs schnell vertraut. Die zwölf Bretter der Gartenstadt (Level 1 bis 12) tragen diese Namen und bringen dir je eine Art bei; spätere Dörfer geben ihren Brettern eigene Titel, behalten aber das Muster.',
          },
          {
            t: 'table',
            head: ['Brett', 'Art', 'Fallen Steine?', 'Was es bringt'],
            rows: [
              ['1', '[Ab nach Hause](#send-them-home)', 'Nein', 'Schieb Steine durch ihre Tore hinaus.'],
              ['2', '[Schieben und Kombinieren](#slide-and-match)', 'Nein', 'Sammle Farben mit Reihen, schick eine nach Hause.'],
              ['3', '[Offener Garten](#open-garden)', 'Nein', 'Ein geräumiges Brett, das sich beim Spielen öffnet.'],
              ['4', '[Fallender Garten](#falling-garden)', 'Ja', 'Dieselben Ziele, mit fallenden und neuen Steinen.'],
              ['5', '[Töpfe und Eis](#pots-and-ice)', 'Nein', 'Kisten, Steine im Eis und ein vereistes Tor.'],
              ['6', '[Lange Steine](#long-bricks)', 'Meistens', 'Lange Steine und Tore, die breit genug für sie sind.'],
              ['7', '[Eckstücke](#corner-pieces)', 'Ja, ohne neue Steine', 'L- und T-Steine.'],
              ['8', '[Kisten und Eis](#crates-and-ice)', 'Meistens', 'Kisten mit einer und zwei Schichten, mehr Eis.'],
              ['9', '[Schlösser und Moos](#locks-and-moss)', 'Ja', 'Schlösser zum Öffnen und Moos, das sich ausbreitet.'],
              ['10', '[Steinbahnen](#stone-lanes)', 'Meistens', 'Statuen, die das Brett in Bahnen teilen.'],
              ['11', '[Der große Tag](#the-big-day)', 'Ja', 'Das Finale des Dorfs: von allem etwas.'],
              ['12', '[Stilles Rätsel](#quiet-puzzle)', 'Ja, ohne neue Steine', 'Ein paar große Steine und breite Tore.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: '„Meistens“ heißt: Von Clover Farm bis Level 408 werden in jedem Dorf zwei der Arten Lange Steine, Kisten und Eis und Steinbahnen ohne fallende Steine gespielt, und bei der dritten fallen sie; welche das ist, ändert sich von Dorf zu Dorf. Ab Level 409 fallen bei allen dreien die Steine.',
          },
        ],
      },
      {
        id: 'gravity',
        title: 'Bretter, auf denen Steine fallen, und Bretter, auf denen nichts fällt',
        blocks: [
          {
            t: 'table',
            head: ['Was sich ändert', 'Nichts fällt', 'Steine fallen'],
            rows: [
              ['Nach einer Kombination', 'Die geräumten Felder bleiben leer und öffnen Bahnen zum Schieben.', 'Steine darüber fallen in die Lücke, und einzelne Steine gleiten schräg um Hindernisse herum hinein.'],
              ['Neue Steine', 'Nie.', 'Kommen von oben nach, aber nur, bis das Brett so voll ist wie zu Beginn. Eckstücke und Stilles Rätsel bekommen keine.'],
              ['Schieben', 'In jede Richtung.', 'Nur seitwärts oder geradewegs durch ein Tor hinaus (auch nach unten in ein Tor im Boden).'],
              ['Tore', 'Auf jeder Seite.', 'An den Seiten und im Boden.'],
              ['Kaskaden', 'Selten.', 'Häufig: Fallende Steine können neue Reihen bilden.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['B Y G', 'R R Y', 'G B R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['B Y G', '. . .', 'G B Y'] },
              caption: 'Wo nichts fällt, hinterlässt eine Kombination eine Lücke, durch die du schieben kannst.',
              alt: 'Ein Brett, auf dem nichts fällt, mit drei Reihen zu je drei Feldern. Obere Reihe: Blau, Gelb, Grün. Mittlere Reihe: Rot, Rot, Gelb. Untere Reihe: Grün, Blau, Rot. Ein Pfeil tauscht den roten Stein unten rechts nach oben mit dem gelben Stein darüber. Ergebnis: Drei rote Steine verschwinden, und die mittlere Reihe bleibt leer: Nichts fällt hinein. Der gelbe Stein liegt jetzt unten rechts.',
            },
          },
          {
            t: 'board',
            board: {
              rows: ['. . .', 'B Y G', 'R R Y', 'G B R'],
              moves: [{ row: 3, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['. . .', 'O K B', 'B Y G', 'G B Y'] },
              caption: 'Wo Steine fallen, rutschen die Steine darüber in die Lücke, und neue kommen nach, bis zur Anzahl vom Start des Bretts.',
              alt: 'Ein Brett, auf dem Steine fallen, mit vier Reihen zu je drei Feldern; die oberste Reihe ist leer. Reihe 2: Blau, Gelb, Grün. Reihe 3: Rot, Rot, Gelb. Reihe 4: Grün, Blau, Rot. Ein Pfeil tauscht den roten Stein unten rechts nach oben mit dem gelben Stein darüber. Ergebnis: Die drei roten Steine in Reihe 3 verschwinden, Blau, Gelb und Grün darüber fallen in Reihe 3, und drei neue Steine, hier Orange, Pink und Blau, fallen in Reihe 2. Die oberste Reihe bleibt leer, weil das Brett nur bis zu so vielen Steinen nachgefüllt wird, wie es zu Beginn hatte. Der gelbe Stein liegt jetzt unten rechts.',
            },
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Du kannst nie festsitzen. Ist kein Zug mehr möglich, wird das Brett kostenlos neu gemischt; ein Brett, das nirgendwohin führt, wird still neu ausgeteilt; und fehlen einem Brett Steine einer Farbe, die ein Ziel braucht, nehmen übrige Steine diese Farbe an (oder, wo Steine fallen, die Farbe kommt von oben nach).',
          },
        ],
      },
      {
        id: 'kinds',
        title: 'Die zwölf Arten',
        blocks: [
          {
            t: 'entry',
            id: 'send-them-home',
            title: '1 · Ab nach Hause',
            board: {
              rows: ['R+ . . B', '. Y . .', 'B . R .'],
              gates: [
                { side: 'left', at: 0, colour: 'R' },
                { side: 'right', at: 2, colour: 'B' },
              ],
              moves: [{ row: 0, col: 0, dir: 'left' }],
              caption: 'Die erste Art: Bring Steine in die Tore ihrer Farbe.',
              alt: 'Ein Brett mit drei Reihen zu je vier Feldern, mit einem roten Tor am linken Rand der oberen Reihe und einem blauen Tor am rechten Rand der unteren Reihe. Obere Reihe: links Rot, zwei leere Felder, rechts Blau. Mittlere Reihe: leer, Gelb, leer, leer. Untere Reihe: Blau, leer, Rot, leer. Ein Pfeil schiebt den roten Stein oben links nach links, durch das rote Tor daneben hinaus.',
            },
            what: 'Ein Brett, auf dem nichts fällt, etwa zu zwei Dritteln gefüllt, mit Toren in den Zielfarben. Die Ziele heißen „Senden oder kombinieren“ in zwei Farben, später auf der Reise in drei.',
            how: 'Such einen Stein in einer Zielfarbe mit freier Bahn zu seinem Tor und bring ihn hinein. Ist eine Bahn versperrt, räum die Steine im Weg ab, indem du sie kombinierst, oder schieb sie zur Seite.',
            facts: [{ label: 'Zuerst gesehen', text: 'Level 1.' }],
            tip: 'Eine Zielfarbe lässt sich auch irgendwo kombinieren: Drei in einer Reihe zählen als drei, ganz ohne Tor.',
          },
          {
            t: 'entry',
            id: 'slide-and-match',
            title: '2 · Schieben und Kombinieren',
            what: 'Nichts fällt. Zwei Farben zum **Sammeln** mit Reihen und eine, die du nach Hause schickst.',
            how: 'Schieb einen Stein neben zwei seiner Farbe, um eine Reihe zu bilden, oder tausch zwei Nachbarn. Jede Reihe räumt ihre Felder für immer, jede Kombination schafft also Platz für das nächste Schieben.',
            facts: [{ label: 'Zuerst gesehen', text: 'Level 2.' }],
            tip: 'Ein Schieben kann beliebig weit gehen und hört dort auf, wo du loslässt, so entstehen Reihen, die ein Tausch nie erreichen könnte.',
          },
          {
            t: 'entry',
            id: 'open-garden',
            title: '3 · Offener Garten',
            what: 'Ein größeres Brett (anfangs 8×8), auf dem nichts fällt: Schick zwei Farben nach Hause und sammle eine dritte.',
            how: 'Plane ein paar Züge voraus. Jeder Stein, den du abräumst, schafft Platz zum Schieben, die Steine zwischen einem Zielstein und seinem Tor abzuräumen ist also oft besser als die nächstliegende Kombination.',
            facts: [{ label: 'Zuerst gesehen', text: 'Level 3.' }],
          },
          {
            t: 'entry',
            id: 'falling-garden',
            title: '4 · Fallender Garten',
            what: 'Dieselben Ziele wie im Offenen Garten, aber Steine fallen, und neue kommen von oben nach.',
            how: 'Arbeite weit unten auf dem Brett: Kombinationen nahe am Boden bewegen alles darüber und bereiten Kaskaden vor. Schieb seitwärts in Lücken oder geradewegs nach unten in ein Tor im Boden.',
            facts: [{ label: 'Zuerst gesehen', text: 'Level 4.' }],
            tip: 'Das Sammelziel wächst hier im Lauf der Reise; Kaskaden nehmen dir viel Arbeit ab.',
          },
          {
            t: 'entry',
            id: 'pots-and-ice',
            title: '5 · Töpfe und Eis',
            what: 'Nichts fällt. Kisten mit einer Schicht, Steine im Eis und ein **vereistes Tor**, meist in einer dritten Farbe. Ziele: drei Farben nach Hause schicken und einige Kisten knacken.',
            how: 'Brich Kisten und Eis mit Reihen daneben. Schick früh irgendeinen Stein nach Hause: Jeder Stein, der durch ein Tor geht, taut das vereiste Tor ein wenig auf.',
            facts: [{ label: 'Zuerst gesehen', text: 'Level 5. Erklärt in [Alle Hindernisse, Deckel und Tore erklärt](help:blockers-encyclopedia#iced-gate).' }],
          },
          {
            t: 'entry',
            id: 'long-bricks',
            title: '6 · Lange Steine',
            what: 'Lange Steine (1×2 und 2×1, später 1×3 und 3×1) in den Zielfarben, jeder mit einem Tor irgendwo, das breit genug für ihn ist. Ziele: zwei Farben nach Hause schicken, und jeder lange Stein zählt jedes Feld.',
            how: 'Richte einen langen Stein an einem Tor aus, das ihn überspannt, und sorg dafür, dass die Felder hinter ihm frei sind. Lange Steine werden nie getauscht oder gesprengt, räum ihre Bahnen also mit Reihen aus einzelnen Steinen frei.',
            facts: [{ label: 'Zuerst gesehen', text: 'Level 6.' }],
          },
          {
            t: 'entry',
            id: 'corner-pieces',
            title: '7 · Eckstücke',
            what: 'L- und T-Steine (später auch einige lange) und ein paar einzelne, nur in den beiden Zielfarben, auf einem Brett, auf dem Steine fallen, aber **keine neuen nachkommen**. Das Tor der einen Farbe liegt links unten, das der anderen rechts unten, und der Boden ist mit drei Felder breiten Toren in den beiden Farben im Wechsel ausgekleidet.',
            how: 'Jeder Stein, der zur Ruhe kommt, landet über oder neben einem Tor, also denk über die Reihenfolge nach: Schick zuerst das Stück, das den meisten Platz freimacht.',
            facts: [{ label: 'Zuerst gesehen', text: 'Level 7.' }],
          },
          {
            t: 'entry',
            id: 'crates-and-ice',
            title: '8 · Kisten und Eis',
            what: 'Mehr Kisten (ab Clover Farm mit zwei Schichten) und Steine im Eis. Ziele: Kisten knacken, wobei jede Schicht zählt, und eine Farbe nach Hause schicken.',
            how: 'Bilde Reihen neben Kisten, am besten Reihen, die zwei auf einmal berühren. Die doppelte Explosion einer Bombe ist ideal für Kisten mit zwei Schichten.',
            facts: [{ label: 'Zuerst gesehen', text: 'Level 8.' }],
          },
          {
            t: 'entry',
            id: 'locks-and-moss',
            title: '9 · Schlösser und Moos',
            what: 'Steine fallen. Gesperrte Steine und Moos, und die einzige Art, in der sich Moos ausbreitet. Ziele: jedes Schloss öffnen, etwas Moos wegräumen und eine Farbe nach Hause schicken.',
            how: 'Öffne Schlösser mit Reihen **durch** sie hindurch; räum Moos mit Reihen **daneben** ab. Räum ein wenig Moos ab, wann immer du kannst, bevor es weiterkriecht.',
            facts: [{ label: 'Zuerst gesehen', text: 'Level 9.' }],
          },
          {
            t: 'entry',
            id: 'stone-lanes',
            title: '10 · Steinbahnen',
            board: {
              rows: ['Y . . . .', 'R . s . B', 'G . s . .', 'B . . . .'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              caption: 'Statuen teilen Bahnen ab: Dieser rote Stein erreicht sein Tor nicht über seine eigene Reihe.',
              alt: 'Ein Brett, auf dem nichts fällt, mit vier Reihen zu je fünf Feldern und einem roten Tor am rechten Rand von Reihe 2. In der Mitte von Reihe 2 und 3 steht eine Säule aus zwei Statuen. Reihe 1: links Gelb, dann vier leere Felder. Reihe 2: links Rot, leer, Statue, leer, Blau. Reihe 3: links Grün, leer, Statue, zwei leere Felder. Reihe 4: links Blau, dann vier leere Felder. Die Bahn des roten Steins zu seinem Tor ist von der Statue versperrt; die obere und die untere Reihe sind die freien Bahnen um sie herum.',
            },
            what: 'Statuen stehen in kurzen Säulen über das Brett verteilt, dazu ein langer Stein und später ein paar Kisten. Ziele: zwei Farben nach Hause schicken und eine dritte sammeln.',
            how: 'Lies die Bahnen, bevor du ziehst: Statuen zerbrechen nie, also bring Steine über die freien Reihen herum. Die Explosion eines Liniensteins geht über Statuen hinweg.',
            facts: [{ label: 'Zuerst gesehen', text: 'Level 10.' }],
          },
          {
            t: 'entry',
            id: 'the-big-day',
            title: '11 · Der große Tag',
            what: 'Das Finale des Dorfs, mit fallenden Steinen: lange und große Steine, Kisten (später mit zwei Schichten), Eis und später Schlösser; ein **vereistes Tor** in der ersten Zielfarbe, ein **Zähltor** in der zweiten und oft ein **versiegeltes Beet**, ein Uhrdeckel über zwei Bodenfeldern in einer Ecke. Ziele: zwei Farben nach Hause schicken und Kisten knacken.',
            how: 'Bring das Auftauen früh in Gang, indem du irgendeinen Stein nach Hause schickst, halt die Plätze des Zähltors für die Steine frei, die nur durch ein Tor hinauskönnen, und lass das versiegelte Beet von selbst aufgehen, während du woanders arbeitest.',
            facts: [
              { label: 'Zuerst gesehen', text: 'Level 11.' },
              { label: 'Gut zu wissen', text: 'Level 2000, das Ende der Reise, ist ein großer Tag bei Nacht.' },
            ],
          },
          {
            t: 'entry',
            id: 'quiet-puzzle',
            title: '12 · Stilles Rätsel',
            what: 'Ein kleineres Brett (anfangs 8×6) mit ein paar großen Steinen (2×2, 1×2 und 2×1, später 1×3, 3×1, L und T) und einigen einzelnen, nur in den beiden Zielfarben. Steine fallen, aber es kommen keine neuen, und die Tore liegen wie bei den Eckstücken: unten auf jeder Seite und den ganzen Boden entlang.',
            how: 'Lass dir Zeit. Es kommt nichts Neues, jeder Zug verändert das Brett also für immer. Finde heraus, welches Stück welches blockiert, und schick sie in dieser Reihenfolge nach Hause.',
            facts: [{ label: 'Zuerst gesehen', text: 'Level 12.' }],
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Level 31 am Strand: 16 verbleibende Züge, Ziele von 8 gelben und 8 blauen. Unten auf dem Brett stapeln sich große, zusammenhängende Steine: ein langer blauer Balken, eine hohe blaue Säule und ein gelbes Teil in C-Form, mit blauen und gelben Toren an den Rändern.',
            caption: 'Große Steine und breite Tore, nah am Anfang der Reise.',
          },
        ],
      },
      {
        id: 'extras',
        title: 'Was ein Brett noch dazubringen kann',
        blocks: [
          {
            t: 'p',
            text: 'Zusätzlich zu seiner Art kann ein Brett ein paar Extras mitbringen. Jedes bekommt seine eigene Lernkarte, wenn es dir zum ersten Mal begegnet.',
          },
          {
            t: 'list',
            items: [
              '**Ein geformtes Brett.** Viele Bretter folgen dem Umriss ihres Dorfs, mit Lücken in der Platte. Eine Lücke hält ein Schieben auf wie der Rahmen.',
              '**Ein versiegelter Raum** unter einem der [fünf Deckel](help:blockers-encyclopedia#lids), auf manchen Brettern jeder Art außer Eckstücke und Stilles Rätsel.',
              '**Verdeckte „?“-Steine**, ab Level 49. Siehe [Verdeckte Steine](help:blockers-encyclopedia#face-down).',
              '**Ziele in Etappen** mit versiegelten Toren, ab Level 54, und **Portale**, ab Level 58, beide auf Brettern, auf denen nichts fällt.',
              '**Zusätzliche Kisten oder zusätzliches Eis** auf den schlichteren Arten.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'In Version 5.1.1 erscheinen versiegelte Räume außer dem versiegelten Beet des großen Tags, verdeckte Steine, Ziele in Etappen, Portale und die zusätzlichen Kisten und das zusätzliche Eis auf Brettern bis Level 408. Geformte Bretter gibt es entlang der ganzen Reise.',
          },
          {
            t: 'p',
            text: 'Bretter wachsen auch im Lauf der Reise: bis zu 9×9, mit mehr Farben (anfangs drei oder vier, später fünf oder sechs), mehr Hindernissen und größeren Zielen. Innerhalb eines Dorfs haben keine zwei Bretter dieselbe Anordnung.',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Schwere, sehr schwere, Boss- und Nachtbretter',
        blocks: [
          {
            t: 'p',
            text: 'Manche Bretter sind schwerer als ihre Nachbarn. Die Levelstation auf der Karte der Reise zeigt vor dem Spielen ein Schild (**SCHWER**, **SEHR SCHWER**, **BOSS** oder **NACHT**), und das Brett trägt dasselbe Schild unter seiner Kopfzeile.',
          },
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Level 35 in der Abenddämmerung, 28 verbleibende Züge, mit einer lila SCHWER-Plakette unter den Zielen: 2 gelbe, 5 rosa und 3 Sandburgen. Das burgförmige Brett hat einen großen rosa Stein, moosbedeckte Steine und vier Sandburg-Kisten, mit gelben, rosa und roten Toren.',
            caption: 'Ein schweres Brett trägt sein Schild unter der Kopfzeile.',
          },
          {
            t: 'table',
            head: ['Stufe', 'Wo', 'Was sich ändert', 'Münzen fürs Schaffen'],
            rows: [
              ['Normal', 'Die meisten Bretter.', 'Kein Schild.', '25'],
              ['Schwer', 'Etwa jedes dritte Brett ab Level 14.', 'Die Ziele verlangen etwa 15 % mehr, und es gibt ein paar Hindernisse mehr.', '50'],
              ['Sehr schwer', 'Etwa jedes siebte Brett ab Level 39.', 'Die Ziele verlangen etwa 30 % mehr.', '80'],
              ['Boss', 'Das letzte Brett jedes Kapitels aus zwanzig, ab Level 40, außer es ist ein Nachtbrett.', 'Die Ziele verlangen etwa 40 % mehr.', '80'],
              ['Nacht', 'Jedes 25. Level ab 115 (115, 140, 165 …).', 'Spielt nach Einbruch der Dunkelheit. Es spielt sich wie ein schweres Brett.', '50'],
            ],
          },
          {
            t: 'list',
            items: [
              'Sehr schwere und Boss-Bretter bekommen außerdem ein paar Hindernisse mehr, und weit hinten auf der Reise können sie eine Farbe mehr verwenden, was Reihen schwerer zu finden macht.',
              'Auf schwereren Stufen sind die Züge so bemessen, dass weniger Spieler beim ersten Versuch durchkommen. Jedes Brett ist trotzdem darauf geprüft, dass es sich gewinnen lässt.',
              'Zwei oder mehr Sterne bringen zusätzlich einen Zielbonus zu den Münzen, und Events können sie verdoppeln oder verdreifachen. Siehe [Ein Brett spielen](help:playing-a-board#tiers).',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'VoiceOver liest die Stufe in der Zusammenfassung des Bretts nach der Levelnummer vor, zum Beispiel „Boss“.',
          },
        ],
      },
      {
        id: 'approach',
        title: 'Wege hinein, egal welche Art',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Lies zuerst das Auftragsfeld.** Ziele „Senden oder kombinieren“ nehmen Steine dieser Farbe, egal wie sie das Brett verlassen; „Sammle“-Ziele wollen Reihen oder Explosionen; Ziele mit Kisten, Schlössern und Moos wollen Reihen daneben oder hindurch.',
              '**Finde die Tore.** Tore, die deine Ziele noch wollen, leuchten sanft. Prüf ihre Breite, bevor du den Weg eines langen Steins planst.',
              '**Zähl deine Züge gegen die Ziele.** Braucht ein Ziel acht Steine und du hast fünfzehn Züge, such nach Spezialsteinen: Ein Linienstein kann die Arbeit mehrerer Züge erledigen.',
              '**Auf Brettern, auf denen nichts fällt, denk in Bahnen.** Jede Kombination hinterlässt eine Lücke; wähl die Kombinationen, die die Bahn öffnen, die du als Nächstes brauchst.',
              '**Auf Brettern, auf denen Steine fallen, arbeite von unten.** Kombinationen weit unten bewegen mehr vom Brett und starten Kaskaden.',
              '**Festgefahren? Hol dir einen Tipp.** Bei jedem Versuch bekommst du einen Gratis-Tipp, und mit VoiceOver gibt dir Doppeltippen mit zwei Fingern jederzeit einen.',
            ],
          },
        ],
      },
      {
        id: 'faq',
        title: 'Fragen',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Warum kann ich auf diesem Brett keinen Stein nach oben oder unten schieben?',
                a: 'Es ist ein Brett, auf dem Steine fallen. Ein Stein würde einfach wieder zurückfallen, deshalb gleiten Steine auf diesen Brettern seitwärts oder geradewegs durch ein Tor hinaus, auch nach unten in ein Tor im Boden.',
              },
              {
                q: 'Warum kommen keine neuen Steine mehr nach?',
                a: 'Auf Brettern, auf denen Steine fallen, füllen neue das Brett nur bis zu so vielen Steinen auf, wie es zu Beginn hatte, damit immer Platz zum Schieben bleibt. Bretter der Arten Eckstücke und Stilles Rätsel werden überhaupt nicht aufgefüllt: Sie leeren sich, während du sie löst.',
              },
              {
                q: 'Wie erkenne ich vor dem Start, ob ein Brett schwer ist?',
                a: 'Sieh dir die Levelstation auf der Karte der Reise an: Schwere, sehr schwere, Boss- und Nachtbretter tragen dort ein Schild und dasselbe Schild unter der Kopfzeile des Bretts.',
              },
              {
                q: 'Warum sieht Brett 6 dieses Dorfs ganz anders aus als Brett 6 des letzten?',
                a: 'Die Art gibt die Idee vor (lange Steine und breite Tore); das Dorf bestimmt das Aussehen, die Form des Bretts, die Farben und wie groß die Herausforderung ist, deshalb ist dieselbe Art von Dorf zu Dorf anders angeordnet.',
              },
              {
                q: 'Bringen Boss-Bretter etwas Besonderes?',
                a: 'Ein Boss-Brett schließt ein Kapitel ab und bringt dieselben 80 Münzen wie ein sehr schweres Brett, dazu den Zielbonus für zwei oder mehr Sterne. Schaffst du es, ist das Kapitel abgeschlossen.',
              },
            ],
          },
        ],
      },
    ],
    related: ['special-bricks-and-combos', 'blockers-encyclopedia', 'playing-a-board', 'bricks-specials-and-blockers', 'journey-and-villages', 'lives-moves-and-undos'],
  },
];
