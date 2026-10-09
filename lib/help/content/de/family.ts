import type { HelpArticle } from '../../model.ts';

/**
 * Familien und ruhiges Spielen, die Spielwirtschaft in einfachen Worten, die neun Freunde und
 * verlorener Fortschritt oder Kauf, auf Deutsch. Geprüft mit 5.1.1 (68).
 */
export const familyArticles: HelpArticle[] = [
  {
    slug: 'parents-guide',
    category: 'family',
    cover: 'settings-game',
    title: 'Ein Leitfaden für Eltern und Betreuende',
    summary:
      'Was OutBrick ist und was nicht, die Apple-Einstellungen, mit denen du über Käufe, Spielzeit und Mitteilungen bestimmst, wie Rückerstattungen funktionieren, was das Spiel und diese Website speichern, und eine Checkliste zum Durchgehen.',
    keywords:
      'eltern erziehungsberechtigte betreuer betreuerin familie kind kinder sohn tochter sicher sicherheit kindersicherung jugendschutz bildschirmzeit kaufanfrage familienfreigabe in-app-käufe ausgaben geld auszeit app-limits spielzeit altersfreigabe 4+ werbung fremde chat datenschutz rückerstattung',
    host: 'peach',
    hostPose: 'think',
    sections: [
      {
        id: 'at-a-glance',
        title: 'Was für OutBrick gilt',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick ist ein ruhiges Slide-&-Match-Puzzle, im App Store **ab 4 Jahren** (4+) freigegeben. Gespielt wird, indem man Spielzeugsteine in Tore ihrer eigenen Farbe schiebt oder Nachbarn tauscht, um Reihen zu bilden, und jedes Brett gibt dafür eine bestimmte Zahl von Zügen vor. Bevor du zu irgendeiner Einstellung greifst: Das tut das Spiel, und das tut es nicht.',
          },
          {
            t: 'list',
            items: [
              '**Es gibt nirgends eine Uhr.** Kein Brett, kein Menü und kein Event läuft auf Zeit. Die Zahl der Züge ist die einzige Grenze, so wird niemand gehetzt.',
              '**Kein Chat, keine Fremden.** Es gibt keinen Chat, keine Nachrichten zwischen Spielern und nichts, was andere Spieler im Spiel schreiben. Andere Spieler sehen höchstens einen Spielernamen und ein Level (mehr dazu [weiter unten](#other-players)).',
              '**Keine Werbung, außer dein Kind tippt, um ein Video anzusehen.** Es gibt keine Banner und keine Werbung zwischen den Brettern. Ein Video läuft nur, wenn jemand auf eine Taste tippt, um es für eine Belohnung anzusehen; jede Art ist pro Tag begrenzt (insgesamt 39), und ein Video lässt sich immer ohne Nachteil ablehnen.',
              '**Leben gehen durchs Verlieren verloren, nicht durchs Spielen.** Zum Öffnen eines Bretts braucht man ein Leben, verbraucht wird es dabei aber nicht. Ein Leben geht verloren, wenn ein Versuch verloren ist: beim Aufgeben, wenn die Züge ausgehen, oder beim Neustarten oder Verlassen nach einem Zug, und das Spiel sagt es vorher. Ein Sieg kostet nie ein Leben, und Leben kommen von selbst zurück, alle 30 Minuten eins.',
              '**Kein Konto nötig.** Der Fortschritt wird auf dem Gerät und im eigenen iCloud deiner Familie gesichert. OutBrick hat keine Analyse-Tools, und der Entwickler erhält keine Spieldaten.',
              '**Nichts ist ein Abo.** Jeder Kauf ist ein einmaliger Kauf über Apple, nichts verlängert sich von selbst, und vor Level 6 wird auf einem Brett nichts Kostenpflichtiges angeboten.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Kostenlos spielbar, und das bleibt so',
            text: 'Jedes der 2.000 Level lässt sich spielen, ohne zu bezahlen oder etwas anzusehen. Leben füllen sich von selbst auf, jeder Versuch bringt einen Tipp, eine Rakete und ein UFO gratis, und das erste Rückgängig auf jedem Brett ist gratis. Alle Zahlen stehen in [So funktionieren Belohnungen, Leben und Werbung](help:rewards-and-ads).',
          },
        ],
      },
      {
        id: 'purchases',
        title: 'Käufe: Kaufanfrage, Beschränkungen und Rückerstattungen',
        blocks: [
          {
            t: 'p',
            text: 'Artikel für echtes Geld erscheinen im **Shop** und auf ein paar Karten im Spiel, immer mit einem Preis in deiner eigenen Währung und immer über Apples eigenen Kaufdialog. Zwei Apple-Einstellungen entscheiden, ob dieser Kaufdialog abgeschlossen werden kann.',
          },
          { t: 'h3', text: 'Kaufanfrage (Familienfreigabe)' },
          {
            t: 'p',
            text: 'Hat dein Kind einen eigenen Apple Account in deiner Familienfreigabe, schickt die Kaufanfrage jeden Kaufwunsch, auch Käufe in Spielen, an dich, damit du ihn genehmigst oder ablehnst.',
          },
          {
            t: 'steps',
            items: [
              'Öffne auf deinem eigenen iPhone **Einstellungen › Familie**.',
              'Tippe auf den Namen deines Kindes.',
              'Tippe auf **Kaufanfrage** und schalte sie ein.',
            ],
          },
          { t: 'h3', text: 'In-App-Käufe ganz ausschalten' },
          {
            t: 'steps',
            items: [
              'Öffne auf dem Gerät deines Kindes **Einstellungen › Bildschirmzeit**. (Bei einem Kind in der Familienfreigabe geht das auch auf deinem eigenen iPhone: **Einstellungen › Bildschirmzeit**, dann der Name deines Kindes.)',
              'Tippe auf **Beschränkungen für Inhalt & Datenschutz** und schalte sie ein.',
              'Tippe auf **Käufe im iTunes & App Store**.',
              'Stell **In-App-Käufe** auf **Nicht erlauben**. Wenn du schon dabei bist, stell **Passwort erforderlich** auf **Immer erforderlich**.',
              'Leg einen **Bildschirmzeit-Code** fest, den dein Kind nicht kennt, damit alles so bleibt, wie du es eingestellt hast.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Apple benennt Zeilen zwischen iOS-Versionen gelegentlich um. Heißt etwas auf deinem Gerät leicht anders als hier, such unter **Beschränkungen für Inhalt & Datenschutz** nach der ähnlichsten Zeile.',
          },
          {
            t: 'p',
            text: 'Auch mit ausgeschalteten In-App-Käufen lässt sich in OutBrick jedes Brett spielen: Im Spiel verdiente Münzen kaufen weiterhin Booster, Auffüllungen und Extrazüge, und freiwillige Videos funktionieren weiterhin.',
          },
          { t: 'h3', text: 'Wenn versehentlich etwas gekauft wurde' },
          {
            t: 'p',
            text: 'Apple nimmt jede Zahlung entgegen, deshalb kann auch nur Apple sie erstatten. Geh auf [reportaproblem.apple.com](https://reportaproblem.apple.com), melde dich mit dem Apple Account an, mit dem gekauft wurde, wähle **Rückerstattung anfordern** und dann den OutBrick-Artikel. Apple entscheidet nach seinen Regeln und deinem örtlichen Verbraucherrecht. Wir sehen deine Zahlungsdaten nicht und können selbst keine App-Store-Rückerstattung veranlassen. Mehr dazu auf unserer [Seite zu Rückerstattungen](/refunds) und in [Fortschritt oder Kauf fehlt](help:lost-progress-and-purchases#refunds).',
          },
          {
            t: 'shot',
            id: 'shop',
            alt: 'Der Shop: 2.580 Münzen und das Regal mit Sonderangeboten: ein einmaliges Startpaket aus Münzen, Leben und Boostern, das Sparschwein und ein Booster-Pass mit 60 Minuten gratis UFOs und Raketen.',
            caption: 'Der Shop. Jeder Artikel für echtes Geld läuft über Apples Kaufdialog.',
          },
        ],
      },
      {
        id: 'time',
        title: 'Spielzeit, Auszeit und Erinnerungen',
        blocks: [
          {
            t: 'p',
            text: 'Weil kein Brett auf Zeit läuft, lässt sich OutBrick leicht weglegen: Zwischen zwei Brettern aufzuhören kostet nichts, und Leben füllen sich weiter auf, während das Spiel geschlossen ist. Möchtest du der Spielzeit eine festere Grenze geben, erledigt das Apples Bildschirmzeit gut.',
          },
          {
            t: 'defs',
            items: [
              { term: 'App-Limits', text: '**Einstellungen › Bildschirmzeit › App-Limits › Limit hinzufügen.** Wähle die Kategorie **Spiele** oder nur OutBrick und eine tägliche Dauer. Ist die Zeit um, legt iOS eine Sperre über das Spiel.' },
              { term: 'Auszeit', text: '**Einstellungen › Bildschirmzeit › Auszeit.** Eine geplante ruhige Zeit, etwa zur Schlafenszeit, in der sich nur die Apps öffnen lassen, die du erlaubst.' },
              { term: 'Erinnerungen von OutBrick', text: 'Im Spiel schaltet **Einstellungen › Spiel › Mitteilungen** sie alle aus. Auf dem iPhone steuert **Einstellungen › Mitteilungen › OutBrick** sie und das Kennzeichen am App-Symbol.' },
            ],
          },
          {
            t: 'list',
            items: [
              'OutBrick fragt beim ersten Öffnen nie nach der Erlaubnis für Mitteilungen. Nach dem dritten geschafften Brett fragt es, ob Bloo den Platz freihalten darf, und **Jetzt nicht** wartet eine Woche.',
              'Sind Erinnerungen erlaubt, schickt das Spiel **höchstens eine Mitteilung alle 20 Stunden** und **nie zwischen 22:00 und 09:00**.',
              'Das **Kennzeichen am App-Symbol** zählt Belohnungen, die aufs Abholen warten, bis höchstens neun. Es erscheint nur, wenn Mitteilungen erlaubt sind, und verschwindet, sobald das Spiel geöffnet wird.',
              'Ein **Fokusfilter** kann die Musik ausschalten, Erinnerungen pausieren und das Kennzeichen ausblenden, solange ein Fokus wie Schlafen an ist. Siehe [Ruhig spielen](help:playing-calmly#reminders).',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Der freundlichste Moment zum Aufhören ist zwischen zwei Brettern, auf dem Startbildschirm oder der Karte. Ein Brett vor dem ersten Zug zu verlassen ist immer gratis; nach einem Zug sagt die Karte **Gehen?**, dass ein Leben verbraucht wird, bevor irgendetwas passiert.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Was das Spiel und diese Website speichern',
        blocks: [
          {
            t: 'p',
            text: 'Das ist eine Zusammenfassung unserer [Datenschutzerklärung](/privacy), in der alles ausführlich steht.',
          },
          { t: 'h3', text: 'Im Spiel' },
          {
            t: 'list',
            items: [
              '**Keine Konten und keine Analyse-Tools.** Der Entwickler erhält keine Spieldaten.',
              '**Der Fortschritt** wird auf dem Gerät gespeichert und über dein eigenes iCloud abgeglichen, das der Entwickler nicht lesen kann.',
              '**Käufe** wickelt Apple ab. OutBrick sieht und speichert nie Kartendaten.',
              '**Game Center** ist freiwillig und wird von Apple betrieben, nach deinen Game-Center-Einstellungen.',
              '**Werbung:** Der einzige Drittanbieter im Spiel ist Googles Werbedienst, und er läuft nur, wenn jemand ein Video ansehen möchte. Videowerbung ist auf Googles Inhaltseinstufung für ein allgemeines Publikum beschränkt. Fragt iOS, ob OutBrick tracken darf, ändert **App bitten, kein Tracking durchzuführen** nichts am Spiel. In der EU, im Vereinigten Königreich und in der Schweiz erscheint vor dem ersten Video ein Einwilligungsformular, und **Einstellungen › Spiel › Werbeoptionen** öffnet es erneut.',
              '**Werbung entfernen** oder der Brick Pass der aktuellen Saison sorgt dafür, dass das Spiel gar nicht mehr nach Werbung fragt, und die Belohnungen gibt es trotzdem.',
              '**Daten löschen**, ganz unten in **Einstellungen › Spiel**, setzt den Fortschritt auf dem Gerät zurück und bittet iCloud, den Spielstand zu löschen. Siehe [Fortschritt, iCloud und Datenschutz](help:progress-privacy-and-account#delete).',
            ],
          },
          { t: 'h3', text: 'Auf dieser Website' },
          {
            t: 'list',
            items: [
              'Zum Lesen der Website braucht man kein Konto. Besuche werden mit Google Analytics gemessen, **aber nur, wenn du im Cookie-Banner zustimmst**; bis dahin wird nichts von Google geladen.',
              'Das **Kontaktformular** speichert, was du schickst, damit wir antworten können. Ein Support-Fall wird nach dem Abschluss 24 Monate aufbewahrt und dann gelöscht.',
              'Ein **Community-Konto** speichert einen öffentlichen Anzeigenamen und eine private E-Mail-Adresse, die niemandem angezeigt wird.',
              'Über das [Kontaktformular](/contact) mit dem Thema Datenschutz kannst du eine Kopie dessen anfordern, was wir speichern, oder die Löschung verlangen.',
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'Bitte lass persönliche Angaben deines Kindes aus Support-Nachrichten heraus. Eine Levelnummer und das Gerät reichen uns.',
          },
        ],
      },
      {
        id: 'other-players',
        title: 'Andere Spieler und die Community',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Tab Ränge', text: 'Wird ab Level 21 freigeschaltet. Er zeigt Spielernamen und Levels, auf Wunsch mit Flagge. Schalte **Einstellungen › Spiel › Mich in der Rangliste zeigen** aus, um entfernt zu werden, und blende die Flagge im Profil aus.' },
              { term: 'Rennen', text: '**Dorfrennen** und **Brick Royale** teilen den Spielernamen mit den anderen Spielern in diesem Rennen, und nur, wenn dein Kind mitmacht. Beide lassen sich unter **Einstellungen › Spiel › Spielfunktionen** ausschalten, ebenso Freundesrettung, Crew-Rennen und Angebote auf der Karte.' },
              { term: 'Spielername', text: 'Wird im Profil festgelegt (auf den Avatar tippen). Ein ausgedachter Name ist eine gute Idee.' },
              { term: 'Game Center', text: 'Apples Dienst für Erfolge, Bestenlisten und Freunde. Seine Einstellungen für Freunde und Mehrspieler liegen unter **Bildschirmzeit › Beschränkungen für Inhalt & Datenschutz** im Bereich Game Center.' },
              { term: 'Nachrichten', text: 'OutBrick hat eine App für Nachrichten, mit der dein Kind eine Level-Herausforderung oder einen Sticker an jemanden schicken kann, mit dem es ohnehin schreibt. Die **Kommunikationslimits** der Bildschirmzeit gelten dafür wie für jede Unterhaltung.' },
            ],
          },
          { t: 'h3', text: 'Die OutBrick-Community' },
          {
            t: 'list',
            items: [
              'Die Community ist ein Forum auf dieser Website, **getrennt vom Spiel**. Lesen kann sie jede und jeder; zum Schreiben braucht man ein Konto, und Konten sind für Menschen **ab 16 Jahren**.',
              'Ihre Links in den **Einstellungen** öffnen sich genau deshalb in Safari, außerhalb des Spiels. Die Beschränkungen der Bildschirmzeit für Webinhalte gelten für sie wie für jede Website.',
              'Die E-Mail-Adresse eines Mitglieds wird niemandem angezeigt. Jeder Beitrag ist öffentlich und wird moderiert, und alles, was gegen die [Community-Regeln](/community/guidelines) verstößt, lässt sich melden.',
              'Glaubst du, dass ein Kind ein Konto angelegt hat, sag es uns über das [Kontaktformular](/contact), und wir löschen es.',
            ],
          },
        ],
      },
      {
        id: 'checklist',
        title: 'Eine Checkliste zum Durchgehen',
        blocks: [
          {
            t: 'p',
            text: 'Zehn Minuten mit dem Gerät deines Kindes und deinem eigenen decken alles ab. Druck diese Seite aus oder hak die Kästchen im Kopf ab.',
          },
          {
            t: 'table',
            caption: 'OutBrick für ein Kind einrichten',
            head: ['Erledigt', 'Prüfen', 'Wo'],
            rows: [
              ['☐', 'Kaufanfrage ist an', 'Dein iPhone: **Einstellungen › Familie ›** dein Kind **› Kaufanfrage**'],
              ['☐', 'In-App-Käufe aus oder Passwort immer erforderlich', '**Einstellungen › Bildschirmzeit › Beschränkungen für Inhalt & Datenschutz › Käufe im iTunes & App Store**'],
              ['☐', 'Ein Bildschirmzeit-Code ist festgelegt', '**Einstellungen › Bildschirmzeit**'],
              ['☐', 'Ein Tageslimit für Spiele, wenn du eins möchtest', '**Einstellungen › Bildschirmzeit › App-Limits**'],
              ['☐', 'Auszeit für die Schlafenszeit', '**Einstellungen › Bildschirmzeit › Auszeit**'],
              ['☐', 'Erinnerungen und Kennzeichen nach Wunsch', 'In OutBrick **Einstellungen › Spiel › Mitteilungen** oder **Einstellungen › Mitteilungen › OutBrick**'],
              ['☐', 'Ein ausgedachter Spielername', 'In OutBrick auf den Avatar tippen, um das **Profil** zu öffnen'],
              ['☐', 'Im Tab Ränge sichtbar oder nicht', 'In OutBrick **Einstellungen › Spiel › Mich in der Rangliste zeigen**'],
              ['☐', 'Rennen und Angebote auf der Karte, oder nicht', 'In OutBrick **Einstellungen › Spiel › Spielfunktionen**'],
              ['☐', 'Antwort zum Tracking', '**Einstellungen › Datenschutz & Sicherheit › Tracking**'],
              ['☐', 'Bei iCloud angemeldet, damit der Fortschritt sicher ist', '**Einstellungen ›** dein Name **› iCloud**'],
            ],
          },
        ],
      },
      {
        id: 'for-children',
        title: 'Für junge Spielerinnen und Spieler',
        blocks: [
          {
            t: 'p',
            text: 'Dieser Teil ist für dein Kind geschrieben. Lest ihn gemeinsam, wenn das hilft.',
          },
          {
            t: 'list',
            items: [
              '**Lass dir Zeit.** Es gibt keine Uhr. Denk vor jedem Zug so lange nach, wie du willst.',
              '**Verlieren ist in Ordnung.** Wenn dir die Züge ausgehen, kannst du es noch einmal versuchen. Verlierst du, geht ein Herz weg, und Herzen kommen von selbst zurück.',
              '**Videos sind deine Entscheidung.** Ein Video läuft nur, wenn du auf eine Taste tippst, um es anzusehen. Du kannst immer Nein sagen.',
              '**Frag, bevor du etwas kaufst.** Steht auf einer Taste ein Preis in Euro, Franken, Pfund, Dollar oder einem anderen Geld, kostet das echtes Geld. Frag zuerst einen Erwachsenen.',
              '**Halte deinen Namen geheim.** Such dir einen ausgedachten Spielernamen aus, nicht deinen echten.',
              '**Mach Pausen.** Das Spiel wartet auf dich. Die Freunde sind noch da, wenn du zurückkommst.',
              '**Fühlt sich etwas komisch an?** Hör auf und sag es einem Erwachsenen.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Festgefahren?',
            text: 'Tippe unten in der Leiste auf **Tipp**. Bei jedem Versuch bekommst du einen gratis.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Fragen von Eltern',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Kann mein Kind in OutBrick mit Fremden sprechen?',
                a: 'Nein. Das Spiel hat keinen Chat und keine Nachrichten zwischen Spielern. Andere Spieler sehen einen Spielernamen und ein Level im Tab Ränge und in einem Rennen, bei dem dein Kind selbst mitmacht. Beides lässt sich unter **Einstellungen › Spiel** ausschalten.',
              },
              {
                q: 'Sieht mein Kind Werbung, die es nicht ausgewählt hat?',
                a: 'Nein. Es gibt keine Banner und keine Werbung zwischen den Brettern. Ein Video läuft nur, nachdem jemand auf eine Taste getippt hat, um es für eine Belohnung anzusehen, und jede Art hat eine Tagesgrenze. **Werbung entfernen** schaltet sie für immer ab, und die Belohnungen gibt es trotzdem.',
              },
              {
                q: 'Kann mein Kind aus Versehen Geld ausgeben?',
                a: 'Jeder Kauf mit echtem Geld läuft über Apples Kaufdialog, der Face ID, Touch ID oder das Passwort des Apple Account verlangt. Ist die **Kaufanfrage** an oder stehen In-App-Käufe auf **Nicht erlauben**, kann ohne dich nichts gekauft werden.',
              },
              {
                q: 'Gibt es ein Abo?',
                a: 'Nein. Jeder Pass und jeder zeitlich begrenzte Artikel ist ein einmaliger Kauf, und nichts verlängert sich von selbst.',
              },
              {
                q: 'Braucht OutBrick ein Konto oder eine E-Mail-Adresse?',
                a: 'Nein. Der Fortschritt liegt auf dem Gerät und in deinem eigenen iCloud. Die Community auf dieser Website braucht ein Konto, aber sie ist für Menschen ab 16 Jahren und gehört nicht zum Spiel.',
              },
              {
                q: 'Funktioniert das Spiel ohne Internet?',
                a: 'Ja, die Bretter lassen sich offline spielen. Videos, Game Center und der Abgleich brauchen eine Verbindung, offline gibt es also einfach keine Videos.',
              },
              {
                q: 'Wen frage ich nach einer Rückerstattung?',
                a: 'Apple, unter [reportaproblem.apple.com](https://reportaproblem.apple.com). Wir sehen keine Zahlungen und können sie nicht erstatten. Ist etwas Gekauftes nicht angekommen, versuch es zuerst mit **Wiederherstellen** ganz unten im Shop und [schreib uns](/contact?topic=purchases) dann.',
              },
            ],
          },
        ],
      },
    ],
    related: ['playing-calmly', 'rewards-and-ads', 'shop-and-purchases', 'progress-privacy-and-account', 'settings', 'using-the-community'],
  },

  {
    slug: 'playing-calmly',
    category: 'family',
    cover: 'settings-a11y',
    title: 'Ruhig spielen',
    summary:
      'Die Einstellungen, die OutBrick leiser und sanfter machen, warum es nie eine Uhr gibt, wie du eine Pause machst, ohne etwas zu verlieren, und ein paar Gewohnheiten für entspanntes Spielen.',
    keywords:
      'ruhig entspannt entspannen sanft leise langsam friedlich gemütlich stress angst bewegung reduzieren animation tempo ton töne musik haptik vibration mitteilungen kennzeichen badge fokus filter schlafen pause ausruhen kein timer keine uhr zeitlimit',
    host: 'zippy',
    hostPose: 'idle',
    sections: [
      {
        id: 'no-clock',
        title: 'Es gibt nie eine Uhr',
        blocks: [
          {
            t: 'p',
            text: 'Kein Brett in OutBrick läuft auf Zeit, und nichts zählt herunter, während du nachdenkst. Jedes Brett gibt dir eine Zahl von **Zügen**, und das ist die einzige Grenze. Ein Zug zählt nur, wenn er etwas bewirkt: Ein Tausch ohne Reihe springt zurück, ohne einen zu verbrauchen, und ein Ziehen um weniger als ein halbes Feld springt ebenfalls zurück.',
          },
          {
            t: 'list',
            items: [
              'Du kannst ein Brett so lange ansehen, wie du willst. Leg das Telefon weg, komm zurück, spiel weiter.',
              'Ist kein Zug möglich, wird das Brett gratis neu gemischt. Wirklich festsitzen kannst du nie.',
              'Jeder Versuch bringt einen **Tipp**, eine **Rakete** und ein **UFO** gratis, und das erste **Rückgängig** auf jedem Brett ist gratis.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Events und Saisons laufen sehr wohl nach einem Kalender, und manche zeigen einen Countdown bis zu ihrem Ende. Keines davon legt eine Uhr auf ein Brett.',
          },
        ],
      },
      {
        id: 'gentler-screen',
        title: 'Ein sanfterer Bildschirm',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Bewegung reduzieren', text: 'In den iPhone-**Einstellungen › Bedienungshilfen › Bewegung**. Die Ruhebewegung auf dem Brett hört auf, Leuchten bleiben still, Tipps schimmern an Ort und Stelle, Bildschirme blenden über, statt zu gleiten, und jede Siegesfeier wird zu einem sanften Leuchten.' },
              { term: 'Blinkende Lichter abdunkeln', text: 'Ebenfalls unter **Bewegung**. Bildschirmfüllende Blitze großer Kombos sinken auf ein Drittel ihrer Stärke und folgen nie dichter als etwa eine Drittelsekunde aufeinander.' },
              { term: 'Animationstempo', text: 'In OutBrick unter **Einstellungen › Bedienungshilfen**: 50 %, 75 %, 100 %, 150 % oder 200 %. Bei 75 % oder 50 % laufen Tauschen, Fallen und Verschwinden langsamer und sind leichter zu verfolgen.' },
              { term: 'Sanftes Leuchten und Ruhiger Umriss', text: 'Zwei Gratis-Teile in der **Garderobe**: **Sanftes Leuchten** unter **Feiern** (ein weiches Leuchten, nichts fliegt) und **Ruhiger Umriss** unter **Tauschspuren** (ein stiller Umriss dort, wo ein Stein war). Tippe auf **Tragen**.' },
            ],
          },
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'Der Tab Bedienungshilfen: Animationstempo von 50 % bis 200 %, Detail der Ansagen Kurz, Standard oder Ausführlich, und Schalter für Farbenblind, Brett mit hohem Kontrast, Leiste für Linkshänder, Tausch bestätigen und Reihenklang.',
            caption: 'Einstellungen › Bedienungshilfen. Das Animationstempo steht ganz oben.',
          },
          {
            t: 'p',
            text: 'Mehr dazu in [Sehen, Hören und Bewegung](help:vision-hearing-and-motion#motion).',
          },
        ],
      },
      {
        id: 'sound',
        title: 'Töne, Musik und Haptik',
        blocks: [
          {
            t: 'list',
            items: [
              '**Töne**, **Musik** und **Haptik** haben jeweils einen eigenen Schalter unter **Einstellungen › Spiel**, und dieselben drei gibt es im Menü **Pause**, so kannst du sie mitten in einem Brett ändern.',
              '**Haptik** sind die kleinen Tipper, die du spürst, wenn Teile sich bewegen und landen. Der Schalter erscheint nur auf Geräten, die vibrieren können.',
              'Die Freunde sprechen in **Sprechblasen**, nie laut, und nichts im Spiel hängt vom Hören ab. Wer ohne Ton spielt, verpasst nichts.',
              'Der Klingel-/Stummschalter und die Lautstärketasten funktionieren wie gewohnt.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Du magst die Musik, aber nicht die Effekte? Schalte **Töne** aus und lass **Musik** an, oder umgekehrt.',
          },
        ],
      },
      {
        id: 'quieter',
        title: 'Ein ruhigeres Spiel',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Spielfunktionen', text: '**Einstellungen › Spiel › Spielfunktionen** schaltet **Freundesrettung**, **Dorfrennen**, **Brick Royale**, **Crew-Rennen** und **Angebote auf der Karte** aus. Nichts, was du verdient hast, geht verloren.' },
              { term: 'Schnellspiel', text: 'Von Anfang an eingeschaltet: Nach einem Sieg geht es direkt zum nächsten Brett. Schalte es unter **Einstellungen › Spiel** aus, dann bringt dich ein Sieg zurück zur Karte der Reise, ein natürlicher Moment für eine Pause.' },
              { term: 'Mich in der Rangliste zeigen', text: 'Schalte es aus, wenn du lieber nicht im Tab Ränge erscheinen möchtest.' },
              { term: 'Maskottchen-KI', text: 'Wo Apples Modell auf dem Gerät verfügbar ist, denken sich die Freunde eigene Sätze aus. Schalte es aus, um ihre gewohnten Sätze zu bekommen.' },
            ],
          },
          {
            t: 'shot',
            id: 'settings-game',
            alt: 'Die Einstellungen im Tab Spiel: eingeschaltete Schalter für Mitteilungen, Töne, Musik, Schnellspiel und Maskottchen-KI, jeder mit einer erklärenden Zeile, darunter die Tasten Spielfunktionen, OutBrick bewerten, Kontakt, Community, Fehler melden und Support.',
            caption: 'Einstellungen › Spiel.',
          },
        ],
      },
      {
        id: 'reminders',
        title: 'Mitteilungen, das Kennzeichen am App-Symbol und Fokusfilter',
        blocks: [
          {
            t: 'list',
            items: [
              'OutBrick schickt **höchstens eine Mitteilung alle 20 Stunden** und **nie zwischen 22:00 und 09:00**. Jede bietet **Spielen**, **Später** (drei Stunden) oder **Bis morgen schlummern**.',
              'Schalte sie im Spiel alle unter **Einstellungen › Spiel › Mitteilungen** aus, oder wähle ihren Stil in den iPhone-**Einstellungen › Mitteilungen › OutBrick**.',
              'Das **Kennzeichen am App-Symbol** zählt Belohnungen, die auf dich warten, bis höchstens neun. Wenn du das Spiel öffnest, verschwindet es, ohne dass etwas abgeholt wird. Um es dauerhaft auszublenden, schalte **Kennzeichen** unter **Einstellungen › Mitteilungen › OutBrick** aus.',
            ],
          },
          { t: 'h3', text: 'Ein Fokusfilter für OutBrick' },
          {
            t: 'steps',
            items: [
              'Wähle in den iPhone-**Einstellungen › Fokus** einen Fokus aus, etwa Schlafen oder Privat.',
              'Tippe auf **Filter hinzufügen** und dann auf **OutBrick**.',
              'Wähle, was OutBrick tut, solange dieser Fokus an ist: die Musik ausschalten (oder Musik und Töne), Erinnerungen pausieren und das Kennzeichen am App-Symbol ausblenden.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Ein Fokusfilter ändert nie deine eigenen Einstellungen. Solange einer wirkt, steht das in einer Zeile unter **Musik** in den Einstellungen.',
          },
        ],
      },
      {
        id: 'stepping-away',
        title: 'Eine Pause machen, ohne etwas zu verlieren',
        blocks: [
          {
            t: 'list',
            items: [
              '**Zwischen zwei Brettern ist der perfekte Moment zum Aufhören.** Auf dem Startbildschirm oder der Karte läuft gerade nichts.',
              '**Mitten in einem Brett** tippst du auf **Pause**. **Weiter** bringt dich direkt zurück.',
              '**Vor deinem ersten Zug zu gehen ist immer gratis.** Nach einem Zug sagt dir die Karte **Gehen?**, dass ein Leben verbraucht wird, bevor du dich entscheidest.',
              '**Leben füllen sich von selbst auf**, alle 30 Minuten eins, auch wenn das Spiel geschlossen ist. Tippe auf der Reise auf das Herz, um zu sehen, wann das nächste kommt.',
              '**Deine Tagesserie kann warten.** Eine Serie von drei oder mehr Tagen lässt sich innerhalb einer Woche nach einem verpassten Tag zurückholen, gratis mit einem Serienretter oder für 250 Münzen.',
              '**Dein Fortschritt ist sicher.** Er wird laufend gesichert, auf dem Gerät und in iCloud.',
            ],
          },
          {
            t: 'shot',
            id: 'leave',
            alt: 'Die Karte Gehen?: Das kostet ein Leben. Du hast noch 5. Dein Fortschritt auf diesem Feld wird nicht gespeichert. Tasten: Weiterspielen und Verlassen.',
            caption: 'Die Karte Gehen? sagt dir genau, was das Verlassen kostet, bevor du dich entscheidest.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Eine helfende Hand',
            text: 'Hängst du an einem Brett fest? Ab deinem sechsten Versuch daran schenkt dir das Spiel vor dem Start **3 Extrazüge**, einmal am Tag pro Brett. Manchmal ist der ruhigste Zug, morgen wiederzukommen.',
          },
        ],
      },
      {
        id: 'habits',
        title: 'Gewohnheiten für entspanntes Spielen',
        blocks: [
          {
            t: 'list',
            items: [
              '**Erst schauen, dann ziehen.** Such zuerst die Tore und die Ziele. Das Auftragsfeld oben sagt dir, was das Brett will.',
              '**Nutz den Gratis-Tipp.** Er ist bei jedem Versuch da und lässt sich nicht aufheben, ihn zu nutzen kostet also nichts.',
              '**Mach einmal ohne Sorge rückgängig.** Das erste Rückgängig auf jedem Brett ist gratis.',
              '**Spiel ein geschafftes Brett noch einmal** über die Karte, wenn dir nach etwas Vertrautem ist. Das verschiebt deinen Platz auf der Reise nie.',
              '**Leg vor dem Start einen Punkt zum Aufhören fest**, etwa das Ende eines Dorfs, und lass die Dorffeier dein Zeichen sein.',
              '**Ärgert dich ein Brett, lass es für heute.** Leben füllen sich auf, die helfende Hand kommt, und nach einer Pause sieht ein Brett oft anders aus.',
            ],
          },
        ],
      },
      {
        id: 'questions',
        title: 'Fragen',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Gibt es einen Timer, den ich ausschalten kann?',
                a: 'Es gibt nichts auszuschalten: Kein Brett in OutBrick hat einen Timer. Züge sind die einzige Grenze.',
              },
              {
                q: 'Wie mache ich die Animationen langsamer?',
                a: 'Stell das **Animationstempo** unter **Einstellungen › Bedienungshilfen** auf 75 % oder 50 %. Für weniger Bewegung überall schalte in den iPhone-Einstellungen **Bewegung reduzieren** ein.',
              },
              {
                q: 'Kann ich das Konfetti beim Sieg abstellen?',
                a: 'Ja. Trag die Gratis-Feier **Sanftes Leuchten** aus der Garderobe, oder schalte **Bewegung reduzieren** ein, das jede Feier ruhig macht.',
              },
              {
                q: 'Wie werde ich das Kennzeichen am App-Symbol los?',
                a: 'Schalte **Kennzeichen** in den iPhone-**Einstellungen › Mitteilungen › OutBrick** aus, oder blende es mit einem Fokusfilter nur aus, solange ein Fokus an ist.',
              },
              {
                q: 'Verliere ich ein Leben, wenn ich das Spiel mitten in einem Brett weglege?',
                a: 'Nicht fürs Pausieren. Ein Leben wird nur verbraucht, wenn ein Versuch verloren ist: beim Aufgeben, wenn die Züge ausgehen, oder beim Neustarten oder Verlassen nach einem Zug. Mach Pause und komm zurück, wann du willst.',
              },
            ],
          },
        ],
      },
    ],
    related: ['accessibility', 'vision-hearing-and-motion', 'settings', 'lives-moves-and-undos', 'parents-guide', 'apple-features'],
  },

  {
    slug: 'rewards-and-ads',
    category: 'family',
    cover: 'wall',
    title: 'So funktionieren Belohnungen, Leben und Werbung, einfach erklärt',
    summary:
      'Jede Zahl hinter Leben, Rückgängig, dem Ende der Züge und den acht freiwilligen Videos, was Werbung entfernen und der Brick Pass ändern, was Münzen kaufen und was OutBrick nie verkauft.',
    keywords:
      'spielwirtschaft leben herzen rückgängig züge weiterspielen keine züge mehr münzen preise kosten video werbung werbevideo belohnung ansehen tagesgrenze limit werbung entfernen werbefrei brick pass kostenlos gratis pay to win geld ausgeben fair ehrlich nie verkauft',
    host: 'sprout',
    hostPose: 'think',
    sections: [
      {
        id: 'short',
        title: 'Die Kurzfassung',
        blocks: [
          {
            t: 'list',
            items: [
              '**Verlieren kostet ein Leben, Spielen und Gewinnen nicht.** Leben kommen von selbst zurück, alle 30 Minuten eins.',
              '**Keine Züge mehr ist nicht das Ende.** Du kannst mit Münzen oder einem Video weiterspielen oder es einfach noch einmal versuchen.',
              '**Videos sind immer deine Entscheidung.** Es gibt acht Arten, jede mit einer Tagesgrenze, insgesamt 39. Nichts läuft von selbst.',
              '**Bezahlen nimmt die Videos weg, nie die Belohnungen.** Werbung entfernen und der Brick Pass zahlen dieselben Belohnungen ohne Video aus.',
              '**Nichts ist ein Abo, und vor Level 6 erscheint auf einem Brett nichts Kostenpflichtiges.**',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Jede Zahl auf dieser Seite ist die, die das Spiel heute verwendet. Ändert sich eine, ändert sich diese Seite mit.',
          },
        ],
      },
      {
        id: 'lives',
        title: 'Leben',
        blocks: [
          {
            t: 'list',
            items: [
              'Du kannst bis zu **5 Leben** haben, oder **8**, solange dir der Brick Pass der aktuellen Saison gehört.',
              'Alle **30 Minuten** kommt ein Leben zurück, auch wenn das Spiel geschlossen ist.',
              'Zum Öffnen eines Bretts brauchst du ein Leben, aber es **wird nicht verbraucht**.',
            ],
          },
          {
            t: 'table',
            caption: 'Wann ein Leben verbraucht wird',
            head: ['Du …', 'Leben verbraucht?'],
            rows: [
              ['schaffst das Brett', 'Nein'],
              ['hast keine Züge mehr und gibst auf (oder schließt den Bildschirm „Keine Züge mehr“)', 'Ja'],
              ['startest neu oder gehst **nach** einem Zug', 'Ja, und die Karte sagt es dir vorher'],
              ['startest neu oder gehst **vor** deinem ersten Zug', 'Nein'],
              ['spielst mit mehr Zügen weiter', 'Nein: Es ist derselbe Versuch'],
              ['erreichst ein Brett, auf dem sich nichts bewegen kann, mit übrigen Zügen', 'Nein: Es wird gratis neu gemischt'],
              ['verlierst bei deinem täglichen Gratisversuch oder mit unbegrenzten Leben', 'Nein'],
            ],
          },
          {
            t: 'p',
            text: 'Keine Leben mehr? Einmal am Tag bekommst du vielleicht einen **Gratisversuch** an einem Brett. Sonst kannst du warten, den ganzen Vorrat für **600 Münzen** auffüllen, ein Video für **1 Leben** ansehen oder unbegrenzte Leben kaufen: **1 Stunde für 900 Münzen**, **3 Stunden für 2.000** oder **24 Stunden für 6.000**, oder mit echtem Geld im Shop.',
          },
          {
            t: 'shot',
            id: 'no-lives',
            alt: 'Keine Leben mehr: 0 von 5 Leben und ein Countdown bis zum nächsten, dann unbegrenzte Leben für 1, 3 oder 24 Stunden gegen Münzen oder Geld, eine Auffüllung für 600 Münzen, ein Video für ein Leben und OK. Unten steht, dass ein Leben nur verloren geht, wenn ein Brett verloren ist, dass alle 30 Minuten eines zurückkommt und ein leerer Vorrat einmal am Tag einen Gratisversuch bekommt.',
            caption: 'Keine Leben mehr: warten, auffüllen oder weiterspielen.',
          },
        ],
      },
      {
        id: 'undos',
        title: 'Rückgängig',
        blocks: [
          {
            t: 'list',
            items: [
              'Das **erste Rückgängig auf jedem Brett ist gratis** und geht nie aus.',
              'Danach kommen sie aus einem Vorrat von bis zu **5**, der sich **alle 25 Minuten um eins** auffüllt.',
              'Die Taste Rückgängig zählt beides, ein neues Brett zeigt bei vollem Vorrat also **6**.',
              'Vorrat leer? Kauf **5 für 250 Münzen**, sieh dir ein Video für **2** an oder warte.',
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'Keine Züge mehr',
        blocks: [
          {
            t: 'p',
            text: 'Gehen dir die Züge aus, bevor die Ziele erreicht sind, zeigt der Bildschirm **Keine Züge mehr**, was noch fehlt, und lässt dich wählen. Weiterspielen ist derselbe Versuch und kostet deshalb nie ein Leben.',
          },
          {
            t: 'table',
            caption: 'Mit Münzen weiterspielen, innerhalb eines Versuchs',
            head: ['Weiterspielen', 'Kosten', 'Du bekommst'],
            rows: [
              ['Beim ersten Mal', '300 Münzen', '+5 Züge'],
              ['Beim zweiten Mal', '500 Münzen', '+5 Züge und einen Tipp'],
              ['Ab dem dritten Mal', '900 Münzen', '+5 Züge und ein UFO'],
            ],
          },
          {
            t: 'list',
            items: [
              'Der Preis fällt bei jedem neuen Versuch auf 300 Münzen zurück, ebenso, wenn du das Brett verlässt oder schaffst. Über 900 steigt er nie.',
              'Oder sieh dir ein **freiwilliges Video** an: **+2 Züge**, dann **+1 Zug**, dann ein **Gratis-UFO**. Ein Video treibt den Münzpreis nie nach oben.',
              'Ein gespeichertes **+5 Züge** lässt sich hier ebenfalls einsetzen. Mit dem Brick Pass bekommst du hier außerdem **drei Gratiszüge**.',
              'Auf einem Brett, das du schon oft versucht hast, bringt jedes Weiterspielen etwas mehr: einen Extrazug für jeden verlorenen Versuch nach dem dritten, bis zu +15.',
              '**Aufgeben** beendet den Versuch und kostet ein Leben.',
            ],
          },
          {
            t: 'shot',
            id: 'wall',
            alt: 'Der Bildschirm Keine Züge mehr mit den Zielen, die noch fehlen, einer Taste für 5 weitere Züge für 300 Münzen, einer Taste Ansehen für 2 weitere Züge und Aufgeben.',
            caption: 'Keine Züge mehr: was dir noch fehlt und welche Möglichkeiten du hast.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Warum der Preis steigt',
            text: 'Beim dritten Weiterspielen kostet es weniger, einen ganzen Vorrat an Leben aufzufüllen (600 Münzen) und neu anzufangen, als weitere 900 Münzen für Züge auszugeben. Dem Spiel ist es lieber, dass du in Ruhe neu anfängst, als dass du weiter bezahlst, um auf der Stelle zu treten.',
          },
        ],
      },
      {
        id: 'videos',
        title: 'Die acht freiwilligen Videos',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick hat **keine Zwangswerbung**: keine Banner, keine Werbung zwischen den Brettern, nichts, was von selbst läuft. Ein Video startet nur, wenn du auf eine Taste tippst, um es anzusehen, und nur ein bis zum Ende angesehenes Video zahlt aus. Jede Art hat ihre eigene Tagesgrenze, und die Grenzen werden um Mitternacht zurückgesetzt.',
          },
          {
            t: 'table',
            caption: 'Jedes Video, seine Belohnung und seine Tagesgrenze',
            head: ['Wo', 'Belohnung', 'Pro Tag'],
            rows: [
              ['Keine Leben mehr', '1 Leben', '8'],
              ['Kein Rückgängig mehr', '2 Rückgängig', '8'],
              ['Keine Züge mehr', '+2 Züge, dann +1, dann ein Gratis-UFO', '6'],
              ['Keine Züge mehr, Gratis-Tipp', 'Ein Tipp (in der aktuellen Version abgeschaltet, du siehst ihn also nicht)', '4'],
              ['Gewinnkarte', 'Die Münzen deines Siegs noch einmal (75 bis 300)', '4'],
              ['Steinrad', 'Eine zweite Drehung', '1'],
              ['Geschenkballon', 'Münzen oder 10 Minuten lang ein Gratis-Booster', '2'],
              ['Stein-Kino', 'Ein Preisfeld pro Video', '6'],
              ['**Alle acht**', '', '**39**'],
            ],
          },
          {
            t: 'list',
            items: [
              'Ein Video abzulehnen kostet nichts.',
              'Ist eine Grenze erreicht, verschwindet ihre Taste einfach bis morgen.',
              'Videos brauchen eine Internetverbindung. Offline lassen sich die Bretter weiter spielen; nur Videos werden nicht angeboten.',
              'Videowerbung ist auf Googles Inhaltseinstufung für ein allgemeines Publikum beschränkt.',
            ],
          },
        ],
      },
      {
        id: 'remove-ads-and-pass',
        title: 'Werbung entfernen und der Brick Pass',
        blocks: [
          {
            t: 'p',
            text: 'Beide nehmen die Videos weg, **ohne die Belohnungen wegzunehmen**: Auf jeder Taste, auf der Ansehen stand, steht jetzt **Belohnung abholen**, und sie zahlt sofort aus, innerhalb derselben Tagesgrenzen. Bezahlen kostet dich nie eine Belohnung.',
          },
          {
            t: 'table',
            head: ['Vergleich', 'Werbung entfernen', 'Brick Pass'],
            rows: [
              ['Was es ist', 'Ein einmaliger Kauf, der dir für immer gehört', 'Ein einmaliger Kauf für eine Saison'],
              ['Videos', 'Für immer weg', 'Weg, solange dir der Pass der aktuellen Saison gehört'],
              ['Belohnungen', 'Ohne Video ausgezahlt', 'Ohne Video ausgezahlt, dazu die Belohnungen der Premium-Spur'],
              ['Leben', '5', '8, solange dir der Pass der Saison gehört'],
              ['Keine Züge mehr', 'Wie gewohnt', 'Dazu drei Gratiszüge'],
              ['Wiederherstellen auf einem neuen Gerät', 'Ja', 'Ja, Saisons 1 bis 3'],
            ],
          },
          {
            t: 'p',
            text: 'Die Preise siehst du im Shop in deiner eigenen Währung. Keins von beiden verlängert sich von selbst. Siehe [Der Shop, Käufe und Wiederherstellen](help:shop-and-purchases#remove-ads) und [den Brick Pass](help:rewards-and-events#pass).',
          },
        ],
      },
      {
        id: 'coins',
        title: 'Wofür Münzen da sind',
        blocks: [
          {
            t: 'p',
            text: 'Münzen verdienst du beim Spielen: **25** für ein normales Brett, **50** für Schwer oder Nacht, **80** für Sehr schwer oder Boss, **100** für den Täglichen Stein, dazu Serien, das Steinrad, Missionen, Sternbelohnungen der Dörfer und der Brick Pass. Münzpakete lassen sich auch im Shop kaufen.',
          },
          {
            t: 'table',
            caption: 'Was Münzen kaufen',
            head: ['Artikel', 'Münzen'],
            rows: [
              ['Tipp', '150'],
              ['Rakete', '300'],
              ['UFO', '500'],
              ['Fünf Rückgängig', '250'],
              ['Ein voller Vorrat an Leben', '600'],
              ['Weiterspielen bei keinen Zügen mehr', '300, dann 500, dann 900'],
              ['Ein Vorsprung nach einer Niederlage (eine Rakete auf dem Brett und ein Gratis-UFO), ab Level 6', '800'],
              ['Unbegrenzte Leben: 1 Stunde, 3 Stunden, 24 Stunden', '900, 2.000, 6.000'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Die beiden Auffüllungen, Leben und Rückgängig, haben feste Preise. Sie steigen nie, egal wie oft du sie brauchst.',
          },
        ],
      },
      {
        id: 'never-sold',
        title: 'Was OutBrick nie verkauft',
        blocks: [
          {
            t: 'list',
            items: [
              '**Zeit.** Es gibt keine Uhr, an der man sich vorbeikaufen könnte.',
              '**Bedienungshilfen.** Jede Einstellung für Bedienungshilfen ist gratis, ebenso die Garderobe-Teile, die helfen, etwa die ruhige Feier und die Kontrastplatten.',
              '**Glück.** Es gibt keine Lootboxen und keine Überraschungspakete. Jeder kostenpflichtige Artikel sagt genau, was er enthält, und das Steinrad nimmt nie Geld.',
              '**Ein Abo.** Nichts verlängert sich von selbst.',
              '**Druck auf neue Spieler.** Vor Level 6 wird auf einem Brett nichts Kostenpflichtiges angeboten.',
              '**Missionen.** Sie zahlen Münzen, Booster und Marken aus und verkaufen nie etwas.',
              '**Deine Daten.** Wir verkaufen persönliche Informationen nicht und geben sie nicht gegen Geld weiter.',
              '**Bewertungen.** Für eine Bewertung des Spiels gibt es keine Belohnung.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Garderobe-Teile ändern, wie das Spiel aussieht, nie, wie es sich spielt.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Fragen',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Kostet ein Sieg ein Leben?',
                a: 'Nie. Nur ein verlorener Versuch kostet eins.',
              },
              {
                q: 'Muss ich Videos ansehen, um weiterzuspielen?',
                a: 'Nein. Leben füllen sich von selbst auf, und jedes Brett lässt sich spielen, ohne etwas anzusehen oder zu bezahlen.',
              },
              {
                q: 'Warum ist eine Taste Ansehen verschwunden?',
                a: 'Du hast die Tagesgrenze für dieses Video erreicht, oder gerade ist kein Video verfügbar. Die Grenzen werden um Mitternacht zurückgesetzt.',
              },
              {
                q: 'Ich habe Werbung entfernen gekauft. Verliere ich die Gratisleben und -züge, die die Videos gebracht haben?',
                a: 'Nein. Auf denselben Tasten steht **Belohnung abholen**, und sie zahlen sofort aus, innerhalb derselben Tagesgrenzen.',
              },
              {
                q: 'Ist der Brick Pass ein Abo?',
                a: 'Nein. Er ist ein einmaliger Kauf für eine Saison und verlängert sich nicht von selbst.',
              },
            ],
          },
        ],
      },
    ],
    related: ['lives-moves-and-undos', 'boosters-and-pause', 'shop-and-purchases', 'rewards-and-events', 'parents-guide', 'common-questions'],
  },

  {
    slug: 'meet-the-friends',
    category: 'progress',
    cover: 'home',
    title: 'Lerne die neun Freunde kennen',
    summary:
      'Bloo, Peach, Sprout, Bricko, Zippy, Vio, Moss, Flurry und Poppy: wer jeder Freund ist, wie er es zeigt, und wo überall du ihnen in OutBrick begegnest.',
    keywords:
      'freunde maskottchen figuren charaktere besetzung bloo peach sprout bricko zippy vio moss flurry poppy gastgeber kopfzeile startbildschirm bühne garderobe outfit sticker widget persönlichkeit',
    host: 'bloo',
    hostPose: 'cheer',
    sections: [
      {
        id: 'cast',
        title: 'Die Besetzung',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick hat **neun Steinfreunde**, jeder ein Spielzeugstein mit eigener Farbe, eigenem Aussehen und eigener Art zu feiern. Sie leisten dir auf dem Startbildschirm und auf jedem Brett Gesellschaft und zeigen, wie sie sich fühlen, durch ihre Bewegungen und durch das, was in ihren Sprechblasen erscheint.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Die Freunde sprechen nie laut. Alles, was sie zu sagen haben, erscheint in einer Sprechblase, so hängt bei ihnen nichts vom Hören ab.',
          },
          {
            t: 'shot',
            id: 'home',
            alt: 'Startbildschirm: oben der Avatar, 2.580 Münzen, eine 12-Tage-Serie, Missionen und das Einstellungen-Zahnrad. Unter dem OUTBRICK-Logo kündigt eine Event-Karte die Ziel-Challenge an, die bald beginnt. Drei Steinfreunde mit Sonnenhüten stehen auf einem Rasen aus Spielsteinen über einer grünen Taste „Level 214“. Die Leiste unten zeigt Start, Ränge, Reise, Shop und Pass.',
            caption: 'Auf dem Startbildschirm stehen immer drei Freunde auf der Bühne und wechseln sich ab.',
          },
        ],
      },
      {
        id: 'bloo-peach-sprout',
        title: 'Bloo, Peach und Sprout',
        blocks: [
          {
            t: 'friend',
            friend: 'bloo',
            pose: 'cheer',
            title: 'Bloo, der mit der Uhr',
            text: 'Ein blauer Stein mit einer Armbanduhr an einem Umhängeband. Bloo schaut zwischen den Brettern auf die Uhr und dreht sich, wenn du eins schaffst: als Erster am Winken, als Erster beim mutigen Zug und felsenfest überzeugt, dass er genau das vorhatte.',
          },
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'Peach, immer mit Plan',
            text: 'Ein pfirsichfarbener Stein mit einem kleinen Pfirsich obendrauf. Peach zählt die Züge doppelt, hat immer einen Plan B und bangt den ganzen Weg über, und jubelt dann, wenn sich der Stapel endlich öffnet.',
          },
          {
            t: 'friend',
            friend: 'sprout',
            pose: 'think',
            title: 'Sprout, immer voller Fragen',
            text: 'Ein kleiner grüner Stein mit einem Keimling obendrauf. Sprout bemerkt die Lücke, an der alle anderen vorbeigelaufen sind, und stellt die Frage, die sonst niemand gestellt hat. Klappt es, gibt es zwei Hüpfer und eine Drehung.',
          },
        ],
      },
      {
        id: 'bricko-zippy-vio',
        title: 'Bricko, Zippy und Vio',
        blocks: [
          {
            t: 'friend',
            friend: 'bricko',
            pose: 'cheer',
            title: 'Bricko, mitten im Training',
            text: 'Ein roter Stein in großen roten Stiefeln, der jedes Brett wie einen Satz im Fitnessstudio behandelt. Bricko zählt seine Wiederholungen, und für einen Sieg gibt es einen Daumen nach oben und ein Muskelspiel, in dieser Reihenfolge.',
          },
          {
            t: 'friend',
            friend: 'zippy',
            pose: 'idle',
            title: 'Zippy, immer kurz abgelenkt',
            text: 'Ein gelber Stein mit einem Zwinkern parat. Zippy fängt einen Gedanken an, verliert auf halbem Weg den Faden und ist zum Sieg wieder da. Antippen bringt eine Drehung, ein Sieg einen dreifachen Hüpfer.',
          },
          {
            t: 'friend',
            friend: 'vio',
            pose: 'idle',
            title: 'Vio, mit Kopfhörern und Urteil',
            text: 'Ein lila Stein mit Kopfhörern, der in einer guten Folge von Zügen einen Rhythmus hört. Vio bewertet deine Züge wie Songs, groovt mit 112 Schlägen pro Minute mit und behandelt einen sauberen Sieg wie einen Fünf-Sterne-Song.',
          },
        ],
      },
      {
        id: 'moss-flurry-poppy',
        title: 'Moss, Flurry und Poppy',
        blocks: [
          {
            t: 'friend',
            friend: 'moss',
            pose: 'idle',
            title: 'Moss, vom Hof',
            text: 'Ein dunkelgrüner Stein mit Werkzeuggürtel und schlammigen Arbeitsstiefeln und einem Bauernspruch für jedes Wetter. Moss hebt sich einen langsamen Applaus für den Moment auf, in dem du ihn verdient hast, damit er etwas zählt.',
          },
          {
            t: 'friend',
            friend: 'flurry',
            pose: 'idle',
            title: 'Flurry, mit Mütze und Schal',
            text: 'Ein hellblauer Stein mit gestreifter Bommelmütze und Schal, mit einer Schwäche für Tee und ein sanftes Winken. Flurry hat es nie eilig, und das passt zu einem Spiel ohne Uhr. Achte auf den Schal: Sein Ende schwingt immer einen Takt zu spät.',
          },
          {
            t: 'friend',
            friend: 'poppy',
            pose: 'cheer',
            title: 'Poppy, voller Geschichten',
            text: 'Ein rosa Stein mit einem Zauberstab mit Sternspitze. Für Poppy ist jedes Brett die Mitte eines Märchens, und das Ende kommt, wenn der Stab in Sterne zerstiebt.',
          },
        ],
      },
      {
        id: 'where',
        title: 'Wo du ihnen begegnest',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Startbildschirm', text: 'Drei Freunde stehen auf der Steinbühne und wechseln sich ab.' },
              { term: 'Auf jedem Brett', text: 'Der Gastgeber-Freund des Dorfs sitzt im runden Rahmen in der Kopfzeile, passend zum Dorf gekleidet. Tippe ihn an für ein Kichern, ein Winken oder ein Abklatschen.' },
              { term: 'Siege und knappe Niederlagen', text: 'Auf der Gewinnkarte feiert ein Freund mit dir, und auf **Level verloren** fühlt ein Freund mit, wenn dir ein Brett entwischt.' },
              { term: 'Die Garderobe', text: 'Outfits für die Freunde, etwa König Brickos goldene Krone und rote Halskrause. Garderobe-Teile ändern, wie das Spiel aussieht, nie, wie es sich spielt.' },
              { term: 'Die Sammlung', text: 'Die Saisonkarten, neun pro Saison, zeigen die Freunde.' },
              { term: 'Außerhalb des Spiels', text: 'Sag Siri „Triff Bloo in OutBrick“ (oder den Namen eines anderen Freunds), finde einen Freund in Spotlight, füg das Widget **Tagesmaskottchen** oder **Maskottchen-Laune** hinzu oder schick in Nachrichten den Sticker eines Freunds.' },
            ],
          },
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'Die Garderobe: König Bricko mit goldener Krone und roter Halskrause und einer grünen Taste Tragen, darunter die Tabs Outfits, Brettplatten, Paletten und Steinoberfläche sowie das Strand-Set.',
            caption: 'Outfits, Brettplatten, Paletten, Steinoberflächen, Feiern, Spuren und Rahmen.',
          },
          {
            t: 'p',
            text: 'Mehr dazu in [Freunde, Sammlung und Garderobe](help:friends-and-wardrobe).',
          },
        ],
      },
      {
        id: 'bubbles',
        title: 'Sprechblasen und Maskottchen-KI',
        blocks: [
          {
            t: 'p',
            text: 'Die Freunde feuern dich in Sprechblasen an. Auf Geräten mit Apples Sprachmodell auf dem Gerät können sie sich auch eigene Sätze ausdenken: **Einstellungen › Spiel › Maskottchen-KI**, nur zu sehen, wo das Modell in deiner Sprache verfügbar ist. Das läuft komplett auf deinem Gerät, und schaltest du es aus, kommen ihre gewohnten Sätze zurück.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Fragen',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Kann ich wählen, welcher Freund ein Brett begleitet?',
                a: 'Jedes Dorf hat seinen eigenen Gastgeber-Freund, der passend zum Dorf gekleidet im Rahmen der Kopfzeile sitzt. Sein Outfit kannst du in der Garderobe ändern.',
              },
              {
                q: 'Warum sprechen die Freunde nicht?',
                a: 'Sie sprechen nur in Sprechblasen, so lässt sich alles, was sie sagen, lesen, und nichts hängt vom Hören ab.',
              },
              {
                q: 'Ändern die Freunde, wie sich ein Brett spielt?',
                a: 'Nein. Die Freunde und ihre Outfits sind für Gesellschaft und Feiern da. Jedes Brett spielt sich gleich, egal wer Gastgeber ist.',
              },
              {
                q: 'Kann ich einen Freund auf meinen Home-Bildschirm holen?',
                a: 'Ja. Füg das Widget **Tagesmaskottchen** oder **Maskottchen-Laune** hinzu und wähle einen Freund oder „Überrasch mich“. Siehe [Widgets, Siri und Kurzbefehle](help:apple-features#widgets).',
              },
            ],
          },
        ],
      },
    ],
    related: ['friends-and-wardrobe', 'menus-tour', 'apple-features', 'welcome', 'glossary'],
  },

  {
    slug: 'lost-progress-and-purchases',
    category: 'account',
    cover: 'shop',
    title: 'Fortschritt oder Kauf fehlt: Schritt für Schritt',
    summary:
      'Hol einen Kauf mit Wiederherstellen zurück, erfahre, was du uns schickst, wenn er dann noch fehlt, wie Apple Rückerstattungen handhabt und wie du deinen Fortschritt über iCloud, auf einem neuen iPhone oder iPad und mit Game Center zurückbekommst.',
    keywords:
      'fortschritt verloren weg spielstand kauf fehlt käufe wiederherstellen nicht erhalten nicht angekommen gekauft bezahlt abgebucht rückerstattung geld zurück reportaproblem beleg quittung bestellnummer icloud synchronisieren neues handy neues iphone übertragen neu installieren game center level zurückgesetzt',
    host: 'moss',
    hostPose: 'idle',
    sections: [
      {
        id: 'start',
        title: 'Hier anfangen',
        blocks: [
          {
            t: 'p',
            text: 'Das meiste, was fehlt, ist in ein, zwei Minuten wieder da. Such unten dein Problem und folge seinen Schritten der Reihe nach.',
          },
          {
            t: 'table',
            head: ['Was passiert ist', 'Weiter zu'],
            rows: [
              ['Etwas, das ich gekauft habe, ist nicht im Spiel', '[Einen Kauf zurückholen](#restore)'],
              ['Ich habe wiederhergestellt, und es fehlt immer noch', '[Fehlt immer noch: schreib uns](#still-missing)'],
              ['Ich möchte mein Geld zurück', '[Rückerstattungen macht Apple](#refunds)'],
              ['Mein Level, meine Münzen oder Sterne sind weg', '[Fortschritt fehlt](#progress)'],
              ['Ich habe ein neues iPhone oder iPad', '[Umzug auf ein neues Gerät](#new-device)'],
              ['Meine Erfolge oder Game-Center-Punkte', '[Game Center](#game-center)'],
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            title: 'Wir fragen nie nach dem Passwort deines Apple Account oder nach Kartendaten.',
            text: 'Nicht per E-Mail, nicht in der Community, nirgends. Niemand bei OutBrick braucht sie, und wir sehen keine Zahlungen. Fragt eine Nachricht, die angeblich von uns kommt, danach, antworte nicht.',
          },
        ],
      },
      {
        id: 'restore',
        title: 'Einen Kauf zurückholen',
        blocks: [
          {
            t: 'steps',
            items: [
              'Prüf, ob das Gerät mit **demselben Apple Account** angemeldet ist, mit dem du gekauft hast, und bei iCloud: **Einstellungen ›** dein Name.',
              'Öffne OutBrick und lass es einen Moment online.',
              'Öffne den **Shop** und scrolle ganz nach unten.',
              'Tippe auf **Wiederherstellen**.',
            ],
          },
          {
            t: 'table',
            caption: 'Was zurückkommt, und wie',
            head: ['Artikel', 'So kommt er zurück'],
            rows: [
              ['Werbung entfernen', '**Wiederherstellen**'],
              ['Brick-Pass-Saisons 1 bis 3', '**Wiederherstellen**'],
              ['Garderobe-Artikel', '**Wiederherstellen**'],
              ['Münzen, Booster, Leben und andere Dinge, die du verbrauchst', 'Mit deinem Fortschritt, über iCloud. Der App Store stellt sie nicht wieder her.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Prüf, ob der Kauf durchgegangen ist',
            text: 'Auf dem iPhone listet **Einstellungen ›** dein Name **› Medien & Käufe › Account anzeigen › Kaufverlauf** auf, was Apple berechnet hat. Steht der Artikel dort nicht, wurde die Zahlung nicht abgeschlossen. Mit **Kaufanfrage** wartet ein Kauf, bis der Organisator der Familie ihn genehmigt.',
          },
        ],
      },
      {
        id: 'still-missing',
        title: 'Fehlt immer noch: schreib uns',
        blocks: [
          {
            t: 'steps',
            items: [
              'Öffne unser [Kontaktformular mit dem Thema Käufe und Rückerstattungen](/contact?topic=purchases).',
              'Sag, **was du gekauft hast** und **wann**, ungefähr reicht.',
              'Ergänze dein Gerät, die iOS-Version und die OutBrick-Version. Die Spielversion steht ganz unten in deinem **Profil** (tippe auf deinen Avatar).',
              'Schick es ab. Ein Mensch liest jede Nachricht, und du bekommst eine E-Mail mit einer Referenz und einem privaten Link.',
              'Verfolge deinen Fall unter [Deine Anfrage verfolgen](/support/request): wo er steht, jede Antwort und ein Platz, um Details zu ergänzen.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Was du teilst, und wo',
            text: 'Deine **Apple-Bestellnummer** darfst du gern ins private Kontaktformular schreiben. Veröffentliche nie einen Kaufbeleg, eine Bestellnummer oder ein Bildschirmfoto eines Kaufs in der Community, und schick niemandem einen vollständigen Beleg, eine Kartennummer, ein Passwort oder einen Sicherheitscode.',
          },
        ],
      },
      {
        id: 'refunds',
        title: 'Rückerstattungen macht Apple',
        blocks: [
          {
            t: 'p',
            text: 'Apple nimmt jede Zahlung für OutBrick entgegen, deshalb entscheidet allein Apple über Rückerstattungen. Wir sehen deine Zahlungsdaten nicht und können keinen App-Store-Kauf erstatten.',
          },
          {
            t: 'steps',
            items: [
              'Geh auf [reportaproblem.apple.com](https://reportaproblem.apple.com).',
              'Melde dich mit dem Apple Account an, mit dem gekauft wurde.',
              'Wähle **Rückerstattung anfordern**, einen Grund und dann den OutBrick-Kauf.',
              'Schick die Anfrage ab und verfolge ihren Status bei Apple. Ob und wann erstattet wird, bestimmen Apple und dein örtliches Verbraucherrecht.',
            ],
          },
          {
            t: 'p',
            text: 'Eine unerwartete oder doppelte Abbuchung läuft genauso: zuerst den **Kaufverlauf** prüfen, dann „Problem melden“. Mehr dazu auf unserer [Seite zu Rückerstattungen](/refunds).',
          },
        ],
      },
      {
        id: 'progress',
        title: 'Fortschritt fehlt',
        blocks: [
          {
            t: 'steps',
            items: [
              'Prüf, ob du mit demselben Apple Account wie vorher bei iCloud angemeldet bist und ob iCloud Drive an ist.',
              'Öffne OutBrick online und gib ihm eine Minute. Der Fortschritt wird beim Start des Spiels abgerufen und zusammengeführt.',
              'Schließ das Spiel ganz und öffne es neu.',
              'Hat ein anderes Gerät den Fortschritt, den du erwartest, öffne OutBrick auch dort, online, damit es seinen Spielstand teilen kann.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Nichts wird überschrieben',
            text: 'Sind zwei Geräte unterschiedlicher Meinung, bleiben das höhere Level und die höheren Zahlen, Sammlungen werden zusammengeführt, und Münzen, die auf einem Gerät ausgegeben wurden, werden von einem anderen nie zurückerstattet.',
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'War ein Gerät nie bei iCloud angemeldet, gibt es seinen Fortschritt nur auf diesem Gerät. Melde dich dort bei iCloud an, öffne OutBrick einmal und sieh dann auf dem anderen Gerät noch einmal nach.',
          },
          {
            t: 'p',
            text: '**Daten löschen** lässt sich nicht rückgängig machen. Danach kann ein anderes Gerät mit demselben iCloud einen älteren Spielstand zurück synchronisieren; wenn du neu anfangen willst, mach es also auf jedem Gerät. Siehe [Fortschritt, iCloud und Datenschutz](help:progress-privacy-and-account#delete).',
          },
        ],
      },
      {
        id: 'new-device',
        title: 'Umzug auf ein neues iPhone oder iPad',
        blocks: [
          {
            t: 'steps',
            items: [
              'Öffne OutBrick vor dem Wechsel einmal auf dem **alten** Gerät, während es bei iCloud angemeldet ist.',
              'Melde dich auf dem neuen Gerät mit demselben Apple Account an und schalte iCloud ein.',
              'Installiere OutBrick aus dem App Store und öffne es. Dein Fortschritt wird beim Start des Spiels abgerufen und zusammengeführt.',
              'Öffne den **Shop**, scrolle ganz nach unten und tippe auf **Wiederherstellen**.',
            ],
          },
          {
            t: 'p',
            text: 'Töne, Musik, Haptik, Mitteilungen und die meisten Bedienungshilfen für das Brett bleiben auf jedem Gerät für sich, stell sie auf dem neuen also noch einmal ein. Deine Wahl bei Farbenblind reist mit deinem Fortschritt.',
          },
        ],
      },
      {
        id: 'game-center',
        title: 'Game Center',
        blocks: [
          {
            t: 'list',
            items: [
              '**Game Center** ist Apples Dienst. Es bewahrt deine 65 Erfolge und die Bestenlisten für das höchste Level, geschaffte Bretter insgesamt, heute und diese Woche.',
              'Dein **Fortschritt auf der Reise wird nicht in Game Center gespeichert**. Er reist über iCloud.',
              'Melde dich in den iPhone-Einstellungen mit demselben Apple Account bei Game Center an, um deine Erfolge wiederzusehen.',
              'Der Tab **Ränge** im Spiel ist eine eigene, ewige Bestenliste. Du erscheinst dort, solange **Einstellungen › Spiel › Mich in der Rangliste zeigen** an ist.',
            ],
          },
        ],
      },
      {
        id: 'questions',
        title: 'Fragen',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Könnt ihr mir das Geld zurückgeben?',
                a: 'Nein, das kann nur Apple. Nutz [reportaproblem.apple.com](https://reportaproblem.apple.com). Ist der Artikel nie angekommen, helfen wir dir dabei: [schreib uns](/contact?topic=purchases).',
              },
              {
                q: 'Warum hat Wiederherstellen meine Münzen nicht zurückgebracht?',
                a: 'Münzen, Booster und Leben werden beim Spielen verbraucht, deshalb stellt der App Store sie nicht wieder her. Sie reisen mit deinem Fortschritt über iCloud.',
              },
              {
                q: 'Soll ich meinen Kaufbeleg veröffentlichen, damit ihr ihn prüfen könnt?',
                a: 'Bitte nicht. Veröffentliche nie einen Kaufbeleg in der Community. Nutz das private [Kontaktformular](/contact?topic=purchases) und lass Kartennummern, Passwörter und Sicherheitscodes weg.',
              },
              {
                q: 'Jemand wollte das Passwort meines Apple Account, um meinen Kauf zu reparieren.',
                a: 'Das waren nicht wir. Wir fragen nie nach dem Passwort deines Apple Account oder nach Kartendaten. Gib sie nicht weiter und sag es uns über das [Kontaktformular](/contact).',
              },
              {
                q: 'Ich habe OutBrick neu installiert und bin wieder auf Level 1.',
                a: 'Bleib eine Minute online, mit eingeschaltetem iCloud und demselben Apple Account. Ändert sich nichts, lag der frühere Fortschritt vielleicht auf einem Gerät, das nicht bei iCloud angemeldet war: siehe [Fortschritt fehlt](#progress).',
              },
            ],
          },
        ],
      },
    ],
    related: ['shop-and-purchases', 'progress-privacy-and-account', 'troubleshooting', 'parents-guide', 'apple-features', 'common-questions'],
  },
];
