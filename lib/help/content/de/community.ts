import type { HelpArticle } from '../../model.ts';

/** Problemlösung, die Community und Fehlerberichte, auf Deutsch. Geprüft mit 5.1.1 (68). */
export const communityArticles: HelpArticle[] = [
  {
    slug: 'troubleshooting',
    category: 'community',
    cover: 'settings-community',
    title: 'Häufige Probleme lösen',
    summary:
      'Schnelle Lösungen für fehlenden Fortschritt, nicht angekommene Käufe, Leben, die festzuhängen scheinen, fehlenden Ton, ausbleibende Mitteilungen, Widgets, Videos, die nicht laden, und Probleme mit dem VoiceOver-Fokus.',
    keywords: 'problem funktioniert nicht fehler bug lösung hilfe fortschritt verloren kauf fehlt kein ton mitteilungen widget leer video werbung lädt nicht voiceover fokus springt absturz hängt einfrieren update version',
    sections: [
      {
        id: 'first',
        title: 'Zuerst drei schnelle Prüfungen',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Aktualisiere OutBrick.** Öffne den App Store, tippe auf dein Profilbild und aktualisiere OutBrick, wenn es dort aufgeführt ist. Viele Korrekturen kommen auf diesem Weg.',
              '**Prüf deine Version.** Tippe auf dem Startbildschirm auf deinen Avatar: Die Version steht ganz unten in deinem Profil, zum Beispiel „OutBrick 5.1.1 (68)“.',
              '**Schließ das Spiel und öffne es neu.** Streich vom unteren Bildschirmrand nach oben und halte kurz inne, schieb OutBrick nach oben weg und öffne es wieder.',
            ],
          },
        ],
      },
      {
        id: 'progress',
        title: 'Mein Fortschritt fehlt',
        blocks: [
          {
            t: 'list',
            items: [
              'Achte darauf, dass du mit demselben Apple Account wie vorher bei iCloud angemeldet bist und dass iCloud Drive an ist.',
              'Öffne OutBrick und lass es eine Minute online: Der Fortschritt wird beim Start des Spiels abgerufen und zusammengeführt.',
              'War das alte Gerät nie bei iCloud angemeldet, gibt es seinen Fortschritt nur dort. Melde dich auf dem alten Gerät an, öffne OutBrick einmal und versuch es dann auf dem neuen erneut.',
            ],
          },
          { t: 'p', text: 'Mehr dazu in [Fortschritt, iCloud und Datenschutz](help:progress-privacy-and-account).' },
        ],
      },
      {
        id: 'purchase',
        title: 'Etwas, das ich gekauft habe, ist nicht angekommen',
        blocks: [
          {
            t: 'steps',
            items: [
              'Öffne den **Shop**, scrolle ganz nach unten und tippe auf **Wiederherstellen**.',
              'Bei Münzen, Boostern und Leben prüf, ob iCloud an ist: Sie reisen mit deinem Fortschritt, nicht über den App Store.',
              'Fehlt es immer noch? Schreib uns privat über das [Kontaktformular](/contact), mit Datum und Artikel. Veröffentliche nie einen Kaufbeleg in der Community. Um Rückerstattungen kümmert sich Apple: siehe [Rückerstattungen](/refunds).',
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'Meine Leben kommen nicht zurück',
        blocks: [
          {
            t: 'p',
            text: 'Alle 30 Minuten kommt ein Leben zurück, gemessen in echter Zeit, es füllt sich also auch auf, während das Spiel geschlossen ist. Stellst du die Uhr deines Geräts zurück, ignoriert das Spiel das, und du wartest womöglich länger. Lass **Einstellungen › Allgemein › Datum & Uhrzeit › Automatisch einstellen** eingeschaltet. Tippe auf der Reise auf das Herz, um zu sehen, wann das nächste Leben kommt.',
          },
        ],
      },
      {
        id: 'sound',
        title: 'Es gibt keinen Ton und keine Musik',
        blocks: [
          {
            t: 'list',
            items: [
              'Prüf **Einstellungen › Spiel › Töne** und **Musik** oder dieselben Schalter im Pausemenü.',
              'Prüf den Klingel-/Stummschalter und die Lautstärke.',
              'Vielleicht schaltet ein Fokusfilter von OutBrick das Spiel stumm: Eine Zeile unter Musik in den Einstellungen sagt dir, wenn das so ist.',
            ],
          },
        ],
      },
      {
        id: 'notifications',
        title: 'Ich bekomme keine Mitteilungen',
        blocks: [
          {
            t: 'list',
            items: [
              'Prüf im Spiel **Einstellungen › Spiel › Mitteilungen** und auf dem iPhone **Einstellungen › Mitteilungen › OutBrick**.',
              'OutBrick schickt höchstens eine Mitteilung alle 20 Stunden, nie zwischen 22:00 und 09:00, ruhige Tage sind also normal.',
              'Vielleicht hält ein Fokus sie zurück.',
            ],
          },
        ],
      },
      {
        id: 'widgets',
        title: 'Ein Widget ist leer oder veraltet',
        blocks: [
          {
            t: 'p',
            text: 'Öffne OutBrick einmal, damit es deinen neuesten Fortschritt mit seinen Widgets teilen kann. Sieht ein Widget dann immer noch falsch aus, entfern es und füg es neu hinzu. Widgets aktualisieren sich nach einem Zeitplan, den iOS festlegt, ein paar Minuten Verzögerung sind also normal.',
          },
        ],
      },
      {
        id: 'videos',
        title: 'Ein Video lädt nicht',
        blocks: [
          {
            t: 'list',
            items: [
              'Videos brauchen eine Internetverbindung, und manchmal ist gerade keins verfügbar: Versuch es gleich noch einmal.',
              'Jede Art von Video hat eine Tagesgrenze (insgesamt 39), die um Mitternacht zurückgesetzt wird. Ist eine Grenze erreicht, verschwindet ihre Taste bis morgen.',
              'Nur ein bis zum Ende angesehenes Video zahlt seine Belohnung aus.',
            ],
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'VoiceOver springt zurück an den Anfang des Bretts',
        blocks: [
          {
            t: 'p',
            text: 'Einige Spielerinnen und Spieler haben uns erzählt, dass VoiceOver beim Wischen durch ein Brett seinen Platz verlieren kann. Wir haben die Ursache gefunden: Eine Karte mit Hilfsangeboten kann sich von selbst öffnen, während du das Brett liest. Eine Korrektur kommt mit einem Update. Bis dahin:',
          },
          {
            t: 'list',
            items: [
              'Erscheint eine Karte mit Boostern oder einem Hinweis, während du das Brett liest, schließt die **Z-Geste mit zwei Fingern** sie und bringt dich zurück aufs Brett.',
              'Nutz die **Rotoren** (Teile mit Reihe, Spezialsteine, Ziele, Hindernisse, Tore), um direkt zu dem zu springen, was du brauchst, statt Feld für Feld zu wischen.',
              'Nutz die **Aktionen** eines Teils (nach oben oder unten streichen), um es zu bewegen; so bleibt dein Fokus auf dem Brett.',
              'Doppeltippe auf die Zusammenfassung **Brett** oder nutz **Brett vorlesen**, um zu hören, wo was liegt.',
              'Nenn uns Gerät, iOS-Version, OutBrick-Version, Level und genau, was VoiceOver gesagt hat, in der [Kategorie Barrierefreiheit](/community/c/accessibility). Jeder Bericht hilft uns, es schneller zu finden.',
            ],
          },
        ],
      },
      {
        id: 'stuck',
        title: 'Ein Brett wirkt unmöglich',
        blocks: [
          {
            t: 'list',
            items: [
              'Wirklich festsitzen kannst du nie: Ist kein Zug möglich, wird das Brett kostenlos neu gemischt.',
              'Nutz den Gratis-Tipp, die Rakete und das UFO, die du bei jedem Versuch bekommst.',
              'Ab deinem sechsten Versuch an einem Brett schenkt dir eine **helfende Hand** einmal am Tag drei Extrazüge.',
              'Frag in [Hilfe und Support](/community/c/help) mit der Levelnummer: Andere lieben ein gutes Rätsel.',
            ],
          },
        ],
      },
    ],
    related: ['reporting-bugs', 'progress-privacy-and-account', 'shop-and-purchases', 'voiceover'],
  },

  {
    slug: 'using-the-community',
    category: 'community',
    title: 'Die OutBrick-Community nutzen',
    summary:
      'Anmelden, die richtige Kategorie wählen, ein Thema starten, formatieren, eine Lösung markieren, Themen und E-Mails folgen, Übersetzungen, für Ideen abstimmen und deine Daten privat halten.',
    keywords: 'forum anmelden login konto apple google e-mail passkey thema beitrag antwort markdown lösung beobachten stummschalten mitteilungen e-mail wochenüberblick übersetzen sprache abstimmen idee roadmap lesezeichen reaktion umfrage bild alternativtext melden datenschutz konto löschen',
    sections: [
      {
        id: 'read',
        title: 'Lesen und anmelden',
        blocks: [
          {
            t: 'list',
            items: [
              'Lesen kann jede und jeder, auch ohne Konto.',
              'Um zu schreiben, zu antworten, abzustimmen oder zu reagieren, tippe auf **Anmelden** und wähle **Mit Apple anmelden**, **Google** oder einen **E-Mail-Link** (wir schicken dir einen einmaligen Link; kein Passwort). Nach dem Anmelden kannst du in den Einstellungen einen **Passkey** hinzufügen und dich beim nächsten Mal mit Face ID oder Touch ID anmelden.',
              'Mit Apples **E-Mail-Adresse verbergen** bekommen wir eine private Weiterleitungsadresse. Nutz jedes Mal denselben Weg, um zum selben Konto zurückzukommen.',
              'Deine E-Mail-Adresse wird niemandem angezeigt.',
            ],
          },
        ],
      },
      {
        id: 'categories',
        title: 'Eine Kategorie wählen',
        blocks: [
          {
            t: 'table',
            head: ['Kategorie', 'Wofür'],
            rows: [
              ['[Ankündigungen](/community/c/announcements)', 'Neue Versionen und Neuigkeiten vom Team. Nur das Team startet hier Themen; antworten können alle.'],
              ['[Hilfe und Support](/community/c/help)', '„Wie mache ich …?“-Fragen zu Brettern, Leben, Käufen und Einstellungen.'],
              ['[Fehlerberichte](/community/c/bugs)', 'Etwas ist kaputt. Das Formular fragt nach Gerät und Versionen; siehe [Einen guten Fehlerbericht schreiben](help:reporting-bugs).'],
              ['[Ideen und Feedback](/community/c/ideas)', 'Vorschläge. Stimm für die, die du willst, und verfolge sie auf der Roadmap.'],
              ['[Barrierefreiheit](/community/c/accessibility)', 'VoiceOver, Sprachsteuerung, Schaltersteuerung, größerer Text, Spielen mit Farbsehschwäche. Diese Kategorie beobachtet das Team am genauesten.'],
              ['[Zeig her](/community/c/show-and-tell)', 'Bretter, auf die du stolz bist, und Meilensteine der Reise, mit Alternativtext zu jedem Bild.'],
              ['[Allgemeines](/community/c/general)', 'Alles andere.'],
            ],
          },
        ],
      },
      {
        id: 'posting',
        title: 'Ein Thema starten und antworten',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Erst suchen:** Vielleicht hat schon jemand gefragt.',
              'Tippe auf **Thema starten**, wähle eine Kategorie und schreib einen Titel, der sagt, worum es geht, zum Beispiel „Level 214: Wie komme ich am vereisten Tor vorbei?“.',
              'Wähle die **Sprache**, in der du schreibst, damit Leute, die sie lesen, dein Thema finden.',
              'Schreib deinen Beitrag. Die **Vorschau** zeigt, wie er aussehen wird.',
              'Tippe auf **Thema veröffentlichen**. Zum Antworten nutzt du das Feld unten im Thema oder **Antworten** und **Zitieren** an einem Beitrag.',
            ],
          },
          {
            t: 'table',
            caption: 'Formatieren',
            head: ['Tippe', 'Ergebnis'],
            rows: [
              ['`**fett**`', 'fetter Text'],
              ['`*kursiv*`', 'kursiver Text'],
              ['`- Punkt`', 'eine Aufzählung (`1.` für eine nummerierte Liste)'],
              ['`> Zitat`', 'ein Zitat'],
              ['`[Text](https://…)`', 'ein Link'],
              ['`@name`', 'jemanden erwähnen'],
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Du fügst ein Bild ein? Eine Beschreibung ist Pflicht: Sag, worauf es ankommt, zum Beispiel „Level 214, der rote Stein einen Zug vor dem Tor“. Wer VoiceOver nutzt, hört diesen Text, statt das Bild zu sehen.',
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Lösungen, Stimmen und Reaktionen',
        blocks: [
          {
            t: 'list',
            items: [
              'Löst eine Antwort deine Frage, tippe an ihr auf **Als Lösung markieren**. Das Thema zeigt dann **Gelöst**, und andere können direkt zur Antwort springen.',
              'In Ideen und Feedback stimmst du mit **Dafür stimmen** für das, was du dir wünschst. Die **Roadmap** zeigt, was geprüft wird, geplant ist, in Arbeit ist und umgesetzt wurde.',
              'Reagiere auf einen Beitrag mit Gefällt mir, Toll, Glückwunsch, Lustig, Danke oder Aufschlussreich.',
              'Fehlerberichte tragen einen Status, den das Team setzt: Neu, Bestätigt, Behoben, Veröffentlicht, Kein Fehler oder Duplikat.',
            ],
          },
        ],
      },
      {
        id: 'following',
        title: 'Themen folgen und E-Mails',
        blocks: [
          {
            t: 'list',
            items: [
              '**Beobachte** ein Thema oder eine Kategorie, um bei neuen Beiträgen eine E-Mail zu bekommen; mit **Stummschalten** blendest du es aus.',
              'Die Glocke (**Mitteilungen**) zeigt Antworten, Erwähnungen und Statusänderungen.',
              'In **Lesezeichen** liegen Beiträge, die du wiederfinden willst.',
              'Welche E-Mails du bekommst, auch einen freiwilligen Wochenüberblick, wählst du in den **Einstellungen** der Community.',
            ],
          },
        ],
      },
      {
        id: 'languages',
        title: 'Sprachen und Übersetzung',
        blocks: [
          {
            t: 'p',
            text: 'Die Community gibt es auf Englisch, Französisch, Deutsch, Spanisch, Japanisch und brasilianischem Portugiesisch. Listen zeigen standardmäßig Themen in deiner Sprache und auf Englisch; ein Tippen zeigt alle Sprachen. Ein Beitrag in einer anderen Sprache lässt sich automatisch übersetzen und ist dann deutlich als maschinelle Übersetzung gekennzeichnet.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Freundlich und privat bleiben',
        blocks: [
          {
            t: 'list',
            items: [
              'Lies die [Community-Regeln](/community/guidelines): freundlich bleiben, Spoiler verbergen, Persönliches aus Beiträgen heraushalten.',
              'Veröffentliche nie ein Passwort, einen Anmeldecode, einen Kaufbeleg oder irgendetwas, das dich identifiziert. Schneide Kontodaten aus Bildschirmfotos heraus.',
              'Siehst du etwas, das gegen die Regeln verstößt? Tippe am Beitrag auf **Melden**. Die Moderation sieht es sich an.',
              'In den **Einstellungen** der Community kannst du deine Daten herunterladen, dich abmelden oder dein Konto löschen.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Die Community ist für Menschen ab 16 Jahren. Für alles Private, etwa einen Kauf, nutz stattdessen das [Kontaktformular](/contact).',
          },
        ],
      },
    ],
    related: ['reporting-bugs', 'troubleshooting', 'accessibility', 'welcome'],
  },

  {
    slug: 'reporting-bugs',
    category: 'community',
    cover: 'settings-community',
    title: 'Einen guten Fehlerbericht schreiben',
    summary:
      'Der schnellste Weg zur Fehlerbehebung: Melde den Fehler aus dem Spiel heraus, damit deine Angaben schon ausgefüllt sind, schreib Schritte, denen jemand anderes folgen kann, und ergänze genau, was VoiceOver oder eine andere assistive Technologie getan hat.',
    keywords: 'fehler melden fehlerbericht bug problem absturz störung schritte nachstellen bildschirmfoto screenshot bildschirmaufnahme version gerät ios assistive technologie status',
    sections: [
      {
        id: 'from-game',
        title: 'Aus dem Spiel heraus melden',
        blocks: [
          {
            t: 'steps',
            items: [
              'Öffne in OutBrick die **Einstellungen** (das Zahnrad auf dem Startbildschirm oder auf der Reise).',
              'Scrolle nach unten und tippe auf **Fehler melden**. Safari öffnet einen neuen Fehlerbericht in der Community.',
              'Melde dich an, wenn du gefragt wirst, prüf die schon ausgefüllten Angaben und beschreib, was passiert ist.',
            ],
          },
          {
            t: 'shot',
            id: 'settings-community',
            alt: 'Das Ende des Tabs Spiel in den Einstellungen mit einer lila Taste Fehler melden neben einer blauen Taste Community.',
            caption: '**Fehler melden** steht in den Einstellungen neben **Community**.',
          },
          {
            t: 'table',
            caption: 'Was das Spiel für dich ausfüllt',
            head: ['Feld', 'Beispiel'],
            rows: [
              ['Gerät', 'Das Modell, zum Beispiel iPhone18,2'],
              ['Systemversion', '27.1'],
              ['OutBrick-Version', '5.1.1 (68)'],
              ['Assistive Technologie', 'VoiceOver, Schaltersteuerung, größerer Text oder Farbfilter, wenn sie eingeschaltet sind'],
              ['Level', 'Dein aktuelles Level auf der Reise'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Nichts, was dich identifiziert, wird gesendet: kein Name, keine Game-Center- oder iCloud-Identität, keine Werbe-ID. iOS lässt Apps **Sprachsteuerung** und **Zoom** nicht erkennen, kreuz sie also selbst an, wenn du sie nutzt.',
          },
        ],
      },
      {
        id: 'write',
        title: 'Schritte schreiben, denen jemand anderes folgen kann',
        blocks: [
          {
            t: 'p',
            text: 'Das Team muss den Fehler auf dem eigenen Gerät auslösen können. Nummeriere deine Schritte ab dem Öffnen des Spiels:',
          },
          {
            t: 'list',
            items: [
              '**Schritte:** „1. Level 214 öffnen. 2. Den roten langen Stein nach links schieben. 3. Rückgängig nutzen.“',
              '**Was passieren sollte:** „Der Stein geht dorthin zurück, wo er war.“',
              '**Was passiert ist:** „Der Stein ist verschwunden, und der Zugzähler ist um zwei gestiegen.“',
              'Passiert es jedes Mal? Nach einem Neustart? Auf einem anderen Level?',
            ],
          },
        ],
      },
      {
        id: 'a11y',
        title: 'Probleme mit Bedienungshilfen',
        blocks: [
          {
            t: 'list',
            items: [
              'Nenn die Technologie und ihre Einstellungen: VoiceOver (mit deiner Sprechgeschwindigkeit oder Braillezeile, falls wichtig), Sprachsteuerung, Schaltersteuerung (automatischer oder manueller Scan), Zoom, Textgröße bei größerem Text.',
              'Zitiere **genau**, was VoiceOver gesagt hat, oder den Befehl, den die Sprachsteuerung nicht verstanden hat.',
              'Sag, wo der Fokus vorher und nachher war, welche Geste oder Aktion du genutzt hast und welcher Rotor ausgewählt war.',
              'Veröffentliche es gern in [Barrierefreiheit](/community/c/accessibility): Dort liest das Team am genauesten mit.',
            ],
          },
        ],
      },
      {
        id: 'pictures',
        title: 'Bildschirmfotos und Aufnahmen',
        blocks: [
          {
            t: 'list',
            items: [
              '**Bildschirmfoto:** Drück gleichzeitig die Seitentaste und die Lauter-Taste.',
              '**Bildschirmaufnahme:** Füg im Kontrollzentrum **Bildschirmaufnahme** hinzu, starte sie, lös den Fehler aus und stopp sie dann.',
              'Schneide deinen Namen, deine E-Mail-Adresse und alles Persönliche heraus und beschreib das Bild in seinem Alternativtext.',
            ],
          },
        ],
      },
      {
        id: 'after',
        title: 'Nach dem Veröffentlichen',
        blocks: [
          {
            t: 'p',
            text: 'Das Team setzt bei jedem Fehlerbericht einen Status: **Neu**, **Bestätigt**, **Behoben**, **Veröffentlicht**, **Kein Fehler** oder **Duplikat**, manchmal mit einer Notiz wie „Behoben in 5.1.1“. Beobachte das Thema, um eine E-Mail zu bekommen, wenn er sich ändert. Für alles Private nutz das [Kontaktformular](/contact).',
          },
        ],
      },
    ],
    related: ['troubleshooting', 'using-the-community', 'accessibility', 'voiceover'],
  },
];
