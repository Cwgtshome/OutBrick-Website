import type { HelpArticle } from '../../model.ts';

/** Einstellungen, Apple-Funktionen, Fortschritt und Datenschutz, auf Deutsch. Geprüft mit 5.1.1 (68). */
export const accountArticles: HelpArticle[] = [
  {
    slug: 'settings',
    category: 'account',
    cover: 'settings-community',
    title: 'Alle Einstellungen erklärt',
    summary:
      'Jeder Schalter und jede Taste in den Tabs Spiel und Bedienungshilfen der Einstellungen, was sie tun, wie sie anfangs stehen und wohin die Links zu Support, Community und Datenschutz führen.',
    keywords: 'einstellungen optionen töne ton musik haptik vibration mitteilungen benachrichtigungen schnellspiel maskottchen ki rangliste spielfunktionen bewerten kontakt community fehler melden werbung datenschutz daten löschen',
    sections: [
      {
        id: 'open',
        title: 'Die Einstellungen öffnen',
        blocks: [
          {
            t: 'p',
            text: 'Tippe oben rechts auf dem **Startbildschirm** oder auf der **Reise** auf das Zahnrad. Die Einstellungen füllen den Bildschirm; das rote **×** schließt sie (ebenso {{Esc}} auf einer Tastatur oder die Z-Geste mit zwei Fingern mit VoiceOver). Es gibt zwei Tabs: **Spiel**, der sich zuerst öffnet, und **Bedienungshilfen**.',
          },
          {
            t: 'p',
            text: 'Jeder Schalter zeigt **Aus | An**, und die Zeile darunter erklärt, was er tut. VoiceOver liest diese Zeile als Hinweis des Schalters.',
          },
        ],
      },
      {
        id: 'game',
        title: 'Der Tab Spiel',
        blocks: [
          {
            t: 'table',
            head: ['Einstellung', 'Was sie tut', 'Anfangs'],
            rows: [
              ['Mitteilungen', 'Erinnerungen aus dem Spiel, etwa volle Leben oder eine wartende Tagesbelohnung. Schaltest du sie ein, fragt iOS um Erlaubnis, falls es noch nie gefragt hat.', 'An'],
              ['Töne', 'Soundeffekte auf den Brettern und in den Menüs.', 'An'],
              ['Musik', 'Die Hintergrundmusik in den Menüs und auf den Brettern.', 'An'],
              ['Haptik', 'Tipper, die du spürst, wenn Teile sich bewegen, Reihen bilden und landen. Nur auf Geräten, die vibrieren können.', 'An'],
              ['Schnellspiel', 'Nach einem Sieg geht es direkt zum nächsten Brett statt zurück zur Karte der Reise.', 'An'],
              ['Maskottchen-KI', 'Die Freunde denken sich mit dem Sprachmodell auf deinem Gerät eigene Sätze aus. Nur zu sehen, wo Apples Modell auf dem Gerät in deiner Sprache verfügbar ist.', 'An'],
              ['Mich in der Rangliste zeigen', 'Veröffentlicht deinen Spielernamen und dein Level für alle im Tab Ränge. Schaltest du es aus, wirst du entfernt.', 'An'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Töne, Musik und Haptik gibt es während eines Bretts auch im Pausemenü. Ändert ein **Fokusfilter** von OutBrick Ton oder Erinnerungen, steht das in einer Zeile unter Musik; deine eigenen Einstellungen werden nie verändert.',
          },
          { t: 'shot', id: 'settings-game', alt: 'Die Einstellungen im Tab Spiel: eingeschaltete Schalter für Mitteilungen, Töne, Musik, Schnellspiel und KI-Geplauder der Maskottchen, jeder mit einer erklärenden Zeile, darunter die Tasten Spielfunktionen, OutBrick bewerten, Kontakt, Community, Fehler melden und Support.', caption: 'Einstellungen › Spiel.' },
        ],
      },
      {
        id: 'buttons',
        title: 'Die Tasten unter den Schaltern',
        blocks: [
          {
            t: 'shot',
            id: 'settings-community',
            alt: 'Das Ende des Tabs Spiel: ein Schalter Maskottchen-KI, eine Taste Spielfunktionen, OutBrick bewerten und Kontakt nebeneinander, Community und Fehler melden nebeneinander, eine grüne Taste Support, Bedingungen und Datenschutz, eine Überschrift Weitere Infos mit Lizenz, Apple-EULA, Altersfreigabe, Bedienungshilfen, Datenschutzoptionen und Rückerstattungen, und ganz unten Daten löschen.',
            caption: 'Das Ende des Tabs Spiel: Hilfe-, Community- und rechtliche Links sowie Daten löschen.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Spielfunktionen', text: 'Schalte **Freundesrettung**, **Dorfrennen**, **Brick Royale**, **Crew-Rennen** oder **Angebote auf der Karte** aus, wenn du sie lieber nicht sehen möchtest. Nichts, was du verdient hast, geht verloren.' },
              { term: 'OutBrick bewerten', text: 'Öffnet die Bewertungsseite im App Store. Für eine Bewertung gibt es keine Belohnung, und das Spiel fragt nur ein paarmal im Jahr, nie nach einer Niederlage oder einem Kauf.' },
              { term: 'Kontakt', text: 'Öffnet unser [Kontaktformular](/contact) im Spiel: der private Weg zum Team.' },
              { term: 'Community', text: 'Öffnet diese Community in Safari.' },
              { term: 'Fehler melden', text: 'Öffnet einen Fehlerbericht in Safari, in dem Gerät, iOS-Version, Spielversion, Bedienungshilfen und Level schon ausgefüllt sind. Siehe [Einen guten Fehlerbericht schreiben](help:reporting-bugs).' },
              { term: 'Werbeoptionen', text: 'Erscheint nur dort, wo ein Einwilligungsformular für Werbung vorgeschrieben ist (zum Beispiel in der EU und im Vereinigten Königreich). Öffnet es erneut, damit du deine Wahl ändern kannst.' },
              { term: 'Support, Bedingungen, Datenschutz', text: 'Unsere Seiten zu [Support](/support), [Nutzungsbedingungen](/terms) und [Datenschutzerklärung](/privacy).' },
              { term: 'Weitere Infos', text: '[Lizenz](/license-agreement), [Apple-EULA](/eula), [Altersfreigabe](/age-rating), [Bedienungshilfen](/accessibility), [Datenschutzoptionen](/privacy-choices) und [Rückerstattungen](/refunds).' },
              { term: 'Daten löschen', text: 'Setzt deinen Fortschritt auf diesem Gerät zurück und bittet iCloud, deinen Spielstand zu löschen. Siehe [Fortschritt, iCloud und Datenschutz](help:progress-privacy-and-account#delete).' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Community und Fehler melden öffnen sich in Safari, außerhalb des Spiels, denn die Community ist für Menschen ab 16 Jahren, während das Spiel selbst ab 4 Jahren freigegeben ist.',
          },
        ],
      },
      {
        id: 'accessibility',
        title: 'Der Tab Bedienungshilfen',
        blocks: [
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'Der Tab Bedienungshilfen: Animationstempo von 50 % bis 200 %, Detail der Ansagen Kurz, Standard oder Ausführlich, und Schalter für Farbenblind, Brett mit hohem Kontrast, Leiste für Linkshänder, Tausch bestätigen und Reihenklang.',
            caption: 'Einstellungen › Bedienungshilfen.',
          },
          {
            t: 'p',
            text: 'Animationstempo, Detail der Ansagen, Farbenblind, Brett mit hohem Kontrast, Leiste für Linkshänder, Tausch bestätigen und Reihenklang werden einzeln in [Bedienungshilfen in OutBrick](help:accessibility#where) erklärt.',
          },
        ],
      },
      {
        id: 'elsewhere',
        title: 'Was nicht in den Einstellungen steht',
        blocks: [
          {
            t: 'list',
            items: [
              '**Käufe wiederherstellen:** ganz unten im **Shop**.',
              '**Dein Name, Avatar und deine Flagge:** in deinem **Profil** (tippe auf deinen Avatar).',
              '**Die Versionsnummer des Spiels:** ganz unten in deinem **Profil**.',
              '**Sprache:** OutBrick folgt der Sprache deines iPhone. Um nur für OutBrick eine andere zu wählen, öffne die iPhone-**Einstellungen › Apps › OutBrick › Sprache**.',
              '**Live-Aktivitäten und Mitteilungsstile:** in den iPhone-**Einstellungen › Apps › OutBrick**.',
            ],
          },
        ],
      },
    ],
    related: ['accessibility', 'apple-features', 'progress-privacy-and-account', 'menus-tour'],
  },

  {
    slug: 'apple-features',
    category: 'apple',
    cover: 'home',
    title: 'Widgets, Siri, Kurzbefehle und andere Apple-Funktionen',
    summary:
      'Widgets für Home-Bildschirm und Sperrbildschirm, Kontrollzentrum, Live-Aktivitäten, Siri-Sätze, Spotlight, Handoff, Herausforderungen in Nachrichten, Mitteilungen und das Kennzeichen am App-Symbol, Fokusfilter und Game Center.',
    keywords: 'widget sperrbildschirm kontrollzentrum live-aktivität dynamic island siri kurzbefehle shortcuts app intents spotlight handoff imessage nachrichten sticker herausforderung mitteilung kennzeichen badge schnellaktionen fokus game center erfolge visuelle intelligenz',
    sections: [
      {
        id: 'widgets',
        title: 'Widgets für den Home-Bildschirm',
        blocks: [
          {
            t: 'p',
            text: 'Leg den Finger auf eine leere Stelle deines Home-Bildschirms, tippe auf **Bearbeiten › Widget hinzufügen** und such nach OutBrick. Manche Widgets lassen sich einstellen: Leg den Finger auf eins und tippe dann auf **Widget bearbeiten**.',
          },
          {
            t: 'table',
            head: ['Widget', 'Zeigt'],
            rows: [
              ['Nächstes Level / Weiterspielen', 'Springt direkt in dein nächstes Brett.'],
              ['Reise', 'Dein Level, geschaffte Bretter, die Stufe im Brick Pass und die nächste Belohnung.'],
              ['Tagesstein', 'Deine Tagesmünzen und deine Serie.'],
              ['Serie und Serienkalender', 'Deine Tagesserie. Im Widget Serie stellst du außerdem die Uhrzeit deiner Serien-Erinnerung ein (9:00 bis 21:00).'],
              ['Leben', 'Die Leben in deinem Vorrat und wann das nächste kommt. Auch auf dem Sperrbildschirm.'],
              ['Tagesmaskottchen und Maskottchen-Laune', 'Ein Freund: einer, den du auswählst, oder „Überrasch mich“.'],
              ['Kapitel und Kapitelkarte', 'Fortschritt in einem Kapitel: dem aktuellen oder einem, das du auswählst.'],
              ['Events und Saison-Countdown', 'Das laufende oder nächste Event und die Restzeit der Saison.'],
              ['Brick Pass und Nächste Belohnung', 'Deine Stufe und was als Nächstes kommt.'],
              ['Münzen & Booster', 'Deine Münzen und Booster.'],
              ['Sammlung', 'Deine neuesten Karten.'],
              ['Zufallsbrett', 'Ein zufälliges Brett, ab iOS 17 direkt im Widget spielbar.'],
              ['Diese Woche', 'Deine besten Abstände zum Ziel in dieser Woche.'],
              ['Watch & iPhone', 'Dein Level auf der Apple Watch neben deinem Level auf dem iPhone.'],
            ],
          },
          {
            t: 'p',
            text: '**Sperrbildschirm:** ein OutBrick-Widget, Serien-Ring, Münzen, Tagesstein, Nächstes Level, Event-Countdown und Brick Pass, dazu kleine Textzeilen für deine Serie, dein Level oder den Tagesstein.',
          },
        ],
      },
      {
        id: 'control-center',
        title: 'Kontrollzentrum und Live-Aktivitäten',
        blocks: [
          {
            t: 'list',
            items: [
              '**Kontrollzentrum** (ab iOS 18): Öffne es, tippe auf **+**, dann auf **Steuerelement hinzufügen** und such nach OutBrick. Es gibt Tasten für Weiterspielen, Reise öffnen, Shop öffnen und Zufallslevel, Schalter für **Musik** und **Farbblind-Modus** sowie Statusanzeigen für deine Serie, deine Leben und einen Freund.',
              '**Live-Aktivität:** Während du ein Brett spielst, erscheint sein Fortschritt auf dem Sperrbildschirm und in der Dynamic Island. Verlässt du das Spiel, sagt sie dir, dass dein Brett wartet; schaffst du es, zeigt sie dein Ergebnis. Tippe darauf, um zurückzukehren. Live-Aktivitäten schaltest du in den iPhone-**Einstellungen › Apps › OutBrick** aus.',
            ],
          },
        ],
      },
      {
        id: 'siri',
        title: 'Siri und Kurzbefehle',
        blocks: [
          {
            t: 'p',
            text: 'Sag Siri einen dieser Sätze oder finde sie in der App **Kurzbefehle** unter OutBrick. Fragen werden beantwortet, ohne das Spiel zu öffnen.',
          },
          {
            t: 'table',
            head: ['Sag', 'Was passiert'],
            rows: [
              ['„Spiel OutBrick“ · „Setz meine OutBrick-Reise fort“', 'Öffnet dein nächstes Brett.'],
              ['„Spiel Level 120 in OutBrick“', 'Öffnet dieses Level (eins, das du schon erreicht hast).'],
              ['„Öffne Gartenstadt in OutBrick“', 'Öffnet ein Dorf auf der Karte.'],
              ['„Triff Bloo in OutBrick“', 'Besucht einen Freund.'],
              ['„Auf welchem Level bin ich in OutBrick“', 'Sagt dir dein Level und deinen Fortschritt.'],
              ['„Wie viele Leben habe ich in OutBrick“ · „Wann kommt mein nächstes Leben in OutBrick“', 'Sagt dir deine Leben.'],
              ['„Wie viele Sterne habe ich in OutBrick“', 'Zählt deine Sterne.'],
              ['„Ist meine Serie in OutBrick sicher“', 'Sagt dir deine Serie und den heutigen Tagesstein.'],
              ['„Wie viele Münzen habe ich in OutBrick“', 'Sagt dir deine Münzen und Booster.'],
              ['„Wann endet das Event in OutBrick“', 'Sagt dir, wie lange das Event noch läuft.'],
            ],
          },
          {
            t: 'p',
            text: 'Die App Kurzbefehle bietet außerdem Aktionen wie **Nächsten Zug erklären**, **Musik einstellen**, **Farbsymbole einstellen**, **Missionen öffnen** und **Zufälliges Level spielen**.',
          },
        ],
      },
      {
        id: 'spotlight',
        title: 'Spotlight, Handoff und Schnellaktionen',
        blocks: [
          {
            t: 'list',
            items: [
              '**Spotlight:** Streich auf dem Home-Bildschirm nach unten und such nach einem Level, das du erreicht hast, einem Dorf, einem Kapitel, einem Freund, einem Event oder nach Bildschirmen wie „Bedienungshilfen“ und „Brick Pass“.',
              '**Schnellaktionen:** Leg den Finger auf das Symbol von OutBrick für **Nächstes Level spielen**, **Reise** und **Shop**.',
              '**Handoff:** Beginne ein Brett auf einem Gerät und spiel es auf einem anderen weiter, das mit demselben Apple Account angemeldet ist.',
              '**Visuelle Intelligenz** (ab iOS 26): Richte die Kamera auf Bilder aus OutBrick oder mach ein Bildschirmfoto davon, um das passende Dorf, den Freund oder das Level zu finden. Das läuft komplett auf deinem Gerät.',
            ],
          },
        ],
      },
      {
        id: 'messages',
        title: 'Herausforderungen und Sticker in Nachrichten',
        blocks: [
          {
            t: 'p',
            text: 'Tippe in einer Unterhaltung in Nachrichten auf **+**, wenn nötig auf **Mehr** und dann auf **OutBrick**. Schick ein Level als Herausforderungskarte oder einen der Sticker der Freunde. Freunde ohne das Spiel bekommen einen Link, der eine Seite auf dieser Website öffnet.',
          },
        ],
      },
      {
        id: 'notifications',
        title: 'Mitteilungen und das Kennzeichen am App-Symbol',
        blocks: [
          {
            t: 'list',
            items: [
              'Das Spiel fragt beim Start nie nach Mitteilungen. Nach deinem dritten geschafften Brett fragt es, ob Bloo dir deinen Platz freihalten darf; **Jetzt nicht** wartet eine Woche.',
              'Höchstens **eine Mitteilung alle 20 Stunden** und nie zwischen 22:00 und 09:00. Jede bietet **Spielen**, **Später** (drei Stunden) oder **Bis morgen schlummern**.',
              'Die Erinnerungen: ein Brett, das du verlassen hast, aufgefüllte Leben, fertige Missionen, deine Serie (zu der Uhrzeit, die du im Widget Serie wählst, standardmäßig 20:30), beginnende Events, ein Saisonende und ein Rückblick am Sonntag.',
              'Das **Kennzeichen am App-Symbol** zählt Belohnungen, die auf dich warten (abholbare Missionen, Stufen im Brick Pass, Sternbelohnungen der Dörfer, das erste geschaffte Brett des Tages), bis höchstens neun. Wenn du das Spiel öffnest, verschwindet es, ohne dass etwas abgeholt wird.',
              'Erinnerungen schaltest du unter **Einstellungen › Spiel › Mitteilungen** aus oder in den iPhone-Einstellungen.',
            ],
          },
        ],
      },
      {
        id: 'focus',
        title: 'Fokusfilter',
        blocks: [
          {
            t: 'p',
            text: 'Wähle in den iPhone-**Einstellungen › Fokus** einen Fokus aus, dann **Filter hinzufügen › OutBrick**. Solange dieser Fokus an ist, kann OutBrick die Musik ausschalten (oder Musik und Töne), Erinnerungen pausieren und das Kennzeichen am App-Symbol ausblenden.',
          },
        ],
      },
      {
        id: 'game-center',
        title: 'Game Center',
        blocks: [
          {
            t: 'p',
            text: 'Melde dich in den iPhone-Einstellungen bei Game Center an, um 65 Erfolge freizuschalten (darunter einen für jedes der ersten 50 Kapitel) und Bestenlisten für das höchste Level, geschaffte Bretter insgesamt, heute und diese Woche. Öffne Game Center über das Abzeichen auf der Reise oder über das Pausemenü. Der Tab Ränge im Spiel ist eine eigene, ewige Bestenliste.',
          },
        ],
      },
    ],
    related: ['settings', 'progress-privacy-and-account', 'rewards-and-events', 'accessibility'],
  },

  {
    slug: 'progress-privacy-and-account',
    category: 'account',
    cover: 'journey',
    title: 'Fortschritt, iCloud, neue Geräte und Datenschutz',
    summary:
      'Wie dein Fortschritt gesichert und über iCloud abgeglichen wird, der Umzug auf ein neues iPhone, was mit wem geteilt wird, Entscheidungen zu Werbung und Tracking und wie du deine Daten löschst.',
    keywords: 'spielstand speichern fortschritt verloren weg synchronisieren icloud neues handy neues iphone übertragen neu installieren wiederherstellen löschen zurücksetzen datenschutz daten tracking att werbung einwilligung rangliste name',
    sections: [
      {
        id: 'saved',
        title: 'Wie dein Fortschritt gesichert wird',
        blocks: [
          {
            t: 'list',
            items: [
              'Dein Fortschritt wird auf deinem Gerät gesichert und, wenn du bei iCloud angemeldet bist, in deinem eigenen iCloud-Konto. Ein OutBrick-Konto musst du nicht anlegen.',
              'iCloud bewahrt dein Level, Sterne, Münzen, Booster, Leben und Rückgängig, Serien, den Brick Pass, die Sammlung, die Garderobe, Name, Avatar und Statistiken sowie deine Wahl bei Farbenblind.',
              'Töne, Musik, Haptik, Mitteilungen und die Bedienungshilfen für das Brett bleiben auf jedem Gerät für sich.',
              'Sind zwei Geräte unterschiedlicher Meinung, wird nichts überschrieben: Das höhere Level und die höheren Zahlen bleiben, Sammlungen werden zusammengeführt, und Münzen, die du auf einem Gerät ausgegeben hast, werden von einem anderen nie zurückerstattet.',
            ],
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
              'Melde dich auf dem neuen Gerät mit demselben Apple Account an und schalte iCloud ein.',
              'Installiere OutBrick aus dem App Store und öffne es. Dein Fortschritt wird beim Start des Spiels abgerufen und zusammengeführt.',
              'Öffne den **Shop**, scrolle ganz nach unten und tippe auf **Wiederherstellen**, um Werbung entfernen, die Saisons des Brick Pass und Garderobe-Artikel zurückzuholen.',
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'Warst du auf dem alten Gerät nicht bei iCloud angemeldet, lag sein Fortschritt nur auf diesem Gerät. Melde dich dort bei iCloud an und öffne OutBrick einmal, bevor du wechselst.',
          },
        ],
      },
      {
        id: 'shared',
        title: 'Was geteilt wird, und mit wem',
        blocks: [
          {
            t: 'list',
            items: [
              '**Der Tab Ränge** zeigt deinen Spielernamen, dein Level und, wenn du willst, eine Flagge. Schalte **Einstellungen › Spiel › Mich in der Rangliste zeigen** aus, um entfernt zu werden; die Flagge blendest du in deinem Profil aus.',
              '**Dorfrennen und Brick Royale** teilen deinen Spielernamen mit den Spielern in diesem Rennen, nur wenn du mitmachst.',
              '**Game Center** gehört Apple und folgt deinen Game-Center-Einstellungen.',
              'OutBrick hat **keine Analyse-Tools**, und die eigenen Daten des Spiels werden nicht zum Tracking verwendet. Der Werbepartner (Google AdMob) verarbeitet für die freiwilligen Videos seine eigenen Daten; siehe unsere [Datenschutzerklärung](/privacy).',
            ],
          },
        ],
      },
      {
        id: 'ads-privacy',
        title: 'Entscheidungen zu Werbung und Tracking',
        blocks: [
          {
            t: 'list',
            items: [
              'iOS fragt vielleicht, ob OutBrick dich tracken darf. **App bitten, kein Tracking durchzuführen** funktioniert problemlos: Videos laufen trotzdem, und Belohnungen werden trotzdem ausgezahlt.',
              'In der EU, im Vereinigten Königreich und in der Schweiz erscheint ein Einwilligungsformular, wenn du zum ersten Mal ein Video wählst. Ändere deine Antwort jederzeit über **Einstellungen › Spiel › Werbeoptionen**.',
              'Mehr dazu auf unserer Seite zu den [Datenschutzoptionen](/privacy-choices).',
            ],
          },
        ],
      },
      {
        id: 'delete',
        title: 'Deine Daten löschen',
        blocks: [
          {
            t: 'steps',
            items: [
              'Öffne die **Einstellungen** und scrolle im Tab **Spiel** ganz nach unten.',
              'Tippe auf **Daten löschen**, lies die Karte und tippe auf **Weiter**.',
            ],
          },
          {
            t: 'p',
            text: 'Das setzt deinen Fortschritt, deine Münzen, Booster und Statistiken auf diesem Gerät zurück und bittet iCloud, deinen Spielstand zu löschen. Ein anderes Gerät mit demselben iCloud kann einen älteren Spielstand zurück synchronisieren, also mach es dort auch. Gekaufte Artikel kannst du danach im Shop wiederherstellen, und Fotos, die du gesichert oder geteilt hast, bleiben unberührt. **Das lässt sich nicht rückgängig machen.**',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Dein Community-Konto ist vom Spiel getrennt. Lösch es nach dem Anmelden in den **Einstellungen** der Community.',
          },
          { t: 'shot', id: 'delete-data', alt: 'Die Karte „Daten löschen“ über den Einstellungen, mit der vollständigen Warnung und den Tasten Fortfahren und Abbrechen.', caption: 'Vor dem Löschen fragt das Spiel noch einmal nach.' },
        ],
      },
    ],
    related: ['shop-and-purchases', 'settings', 'apple-features', 'troubleshooting'],
  },
];
