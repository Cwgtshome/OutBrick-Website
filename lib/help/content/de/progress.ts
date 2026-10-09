import type { HelpArticle } from '../../model.ts';

/** Die Reise, Belohnungen, der Shop und die Freunde, auf Deutsch. Geprüft mit 5.1.1 (68). */
export const progressArticles: HelpArticle[] = [
  {
    slug: 'journey-and-villages',
    category: 'progress',
    cover: 'journey',
    title: 'Die Reise und ihre Dörfer',
    summary:
      'Wie die Karte mit 2.000 Leveln funktioniert: Dörfer und Kapitel, Sterne und Dorfbelohnungen, Truhen und Geschenke, der Atlas aller Dörfer und ein Brett noch einmal spielen.',
    keywords: 'karte level dorf dörfer kapitel sterne belohnungen truhe geschenk ballon atlas wiederholen nochmal spielen gesperrt',
    sections: [
      {
        id: 'map',
        title: 'Die Karte',
        blocks: [
          {
            t: 'shot',
            id: 'journey',
            alt: 'Die Karte der Reise: ein Kopfsteinpflasterweg, der durch ein Dorf mit rosa blühenden Bäumen ansteigt, mit den Levelstationen 213, 214 und 215. Level 214 leuchtet mit der Aufschrift Spielen. Auf beiden Seiten stehen Abzeichen untereinander.',
            caption: 'Die Reise ist ein einziger langer Boulevard aus Steinen. Dein aktuelles Level leuchtet.',
          },
          {
            t: 'list',
            items: [
              'Die Reise hat **2.000 Level** in **167 Dörfern** mit je zwölf Brettern (das letzte Dorf hat acht).',
              'Jedes Dorf ist aus Spielzeugsteinen in seinem eigenen Thema gebaut, und kehrt ein Thema wieder, dann zu einer anderen Tageszeit oder Jahreszeit, sodass kein Dorf wie ein anderes aussieht.',
              'Tippe auf dein **aktuelles Level**, um es zu spielen. Tippe auf ein **geschafftes** Level, um es noch einmal zu spielen und seine Sterne zu verbessern; das verschiebt deinen Platz auf der Karte nie.',
              'Ein **gesperrtes** Level sagt dir, wie viele Level es noch entfernt ist.',
              'Die Stecknadel **Mein Level** bringt dich zurück dorthin, wo du gerade bist.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Dörfer und Kapitel',
            text: 'Ein **Dorf** sind zwölf Bretter auf der Karte. Ein **Kapitel** sind zwanzig Level, für die Kapitel-Abzeichen und die Erfolge im Game Center. Beides wird getrennt gezählt, ein Kapitel kann also mitten in einem Dorf enden.',
          },
        ],
      },
      {
        id: 'stars',
        title: 'Sterne und Dorfbelohnungen',
        blocks: [
          {
            t: 'list',
            items: [
              'Jedes Brett bringt bis zu drei Sterne, ein Dorf also 36. Die Anzeige **Sterne** in der Kopfzeile zeigt, wie viele du in diesem Dorf hast.',
              'Mit gesammelten Sternen steigst du die Sternleiter des Dorfs hinauf: 50 Münzen, ein Tipp, 100 Münzen und eine Rakete. Ein Abzeichen auf der Karte zeigt dir, wenn eine Belohnung zum Abholen bereitliegt.',
              'Hast du ein ganzes Dorf geschafft, erscheint eine Feierkarte mit **Teilen** und **Weiter geht’s**.',
            ],
          },
        ],
      },
      {
        id: 'map-extras',
        title: 'Truhen, Geschenke und anderes auf der Karte',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Reisetruhe', text: 'Tippe auf eine Truhe am Weg, um zu sehen, was darin ist. Erreichst du sie, listet die Gewinnkarte die Münzen und Booster auf, die sie ausgezahlt hat.' },
              { term: 'Dorfgeschenk', text: 'Ein Geschenk mit Zeitschaltung; das Abzeichen zählt herunter, bis es bereit ist.' },
              { term: 'Geschenkballon', text: 'Schwebt ab und zu vorbei. Ein freiwilliges Video fängt ihn ein, für Münzen oder ein kurzes Zeitfenster mit Gratis-Boostern.' },
              { term: 'Geheimnisse', text: 'Kleine versteckte Dinge, die du unterwegs entdecken kannst. Tippe auf alles, was fehl am Platz aussieht.' },
              { term: 'Alle Dörfer', text: 'Der Atlas: jedes Dorf als Karte, gefiltert nach laufend, fertig oder gesperrt. **Mein Dorf** bringt dich zurück.' },
              { term: 'Game Center', text: 'Wenn du angemeldet bist, öffnet ein Abzeichen deine Herausforderungen und Erfolge.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Lieber eine ruhigere Karte? Unter Einstellungen › Spiel › **Spielfunktionen** kannst du Events und Angebote ausblenden, die dich nicht interessieren. Nichts, was du verdient hast, geht verloren.',
          },
          { t: 'shot', id: 'atlas', alt: 'Alle Dörfer: Filter für Alle (167), In Arbeit, Abgeschlossen und Gesperrt; eine Überschrift für die Dörfer 1 bis 28 mit 217 von 1.008 Sternen; und Dorfkarten mit Levels und Sternen, etwa das Kirschblütendorf, Level 205 bis 216, 9 von 36 Sternen, markiert mit „Du bist hier“, und das nächste Dorf, das sich mit Level 216 öffnet.', caption: 'Der Atlas aller Dörfer.' },
        ],
      },
      {
        id: 'a11y',
        title: 'Die Karte mit VoiceOver',
        blocks: [
          {
            t: 'p',
            text: 'Jedes Element auf der Karte bietet **Wo bin ich** und **Zu meinem nächsten Level**; Doppeltippen mit zwei Fingern sagt dein Dorf, die geschafften Level und dein nächstes Level an; und Streichen mit drei Fingern springt jeweils ein Dorf weiter. Siehe [Mit VoiceOver spielen](help:voiceover#journey).',
          },
        ],
      },
    ],
    related: ['playing-a-board', 'rewards-and-events', 'menus-tour', 'voiceover'],
  },

  {
    slug: 'rewards-and-events',
    category: 'progress',
    cover: 'pass',
    title: 'Belohnungen, Events und der Brick Pass',
    summary:
      'Der Tägliche Stein und Tagesserien, das Steinrad, Missionen, der Brick Pass, Events und Rennen sowie die Bestenliste.',
    keywords: 'täglicher stein tagesstein serie glücksrad steinrad drehen missionen brick pass saison stufen premium event rennen royale rettung crew bestenliste ränge rangliste erfolge game center sparschwein kino stempel',
    sections: [
      {
        id: 'daily',
        title: 'Der Tägliche Stein und Tagesserien',
        blocks: [
          {
            t: 'list',
            items: [
              '**Täglicher Stein:** Dein erstes geschafftes Brett jeden Tag bringt 100 Münzen, die auf dem Startbildschirm automatisch eingesammelt werden.',
              '**Tagesserie:** Die Flamme auf dem Startbildschirm zählt die Tage in Folge, an denen du ein Brett geschafft hast. Tippe darauf, um die nächste Belohnung zu sehen.',
            ],
          },
          {
            t: 'table',
            caption: 'Belohnungen für Tagesserien',
            head: ['Tage in Folge', 'Belohnung'],
            rows: [
              ['3', '100 Münzen'],
              ['7', '250 Münzen und ein Serienretter'],
              ['14', '500 Münzen und ein Serienretter'],
              ['30', '800 Münzen und ein Serienretter'],
              ['60', '1.200 Münzen und ein Serienretter'],
              ['100', '2.500 Münzen und ein Serienretter'],
              ['Danach alle 100', '2.000 Münzen und ein Serienretter'],
            ],
          },
          {
            t: 'p',
            text: 'Einen Tag verpasst? Eine Serie von drei oder mehr Tagen lässt sich innerhalb einer Woche zurückholen, gratis mit einem Serienretter oder für 250 Münzen. Du kannst bis zu zwei Serienretter haben.',
          },
        ],
      },
      {
        id: 'wheel',
        title: 'Das Steinrad',
        blocks: [
          {
            t: 'p',
            text: 'Die Taste **Steinrad** auf dem Startbildschirm gibt dir jeden Tag eine Gratisdrehung, für Münzen (50 bis 500) oder einen Tipp, eine Rakete oder ein UFO. Schaffst du an einem Tag drei neue Level, zahlt die Gratisdrehung doppelte Münzen. Ein freiwilliges Video bringt eine zweite Drehung.',
          },
        ],
      },
      {
        id: 'missions',
        title: 'Missionen',
        blocks: [
          {
            t: 'p',
            text: 'Tippe auf dem Startbildschirm auf **Missionen** oder auf die Missionen-Karte im Pass-Tab: drei Aufgaben für heute und drei für die Woche, jede mit einer Belohnung. Ist eine erledigt, tippe auf **Abholen** oder **Alle holen**. Tägliche Missionen werden um Mitternacht UTC zurückgesetzt, wöchentliche am Montag.',
          },
        ],
      },
      {
        id: 'pass',
        title: 'Der Brick Pass',
        blocks: [
          {
            t: 'shot',
            id: 'pass',
            alt: 'Der Pass-Tab: eine Saison-Kopfzeile, eine Missionen-Karte und eine Sammlung-Karte, dann zwei Spalten mit Belohnungen, Gratis und Premium, die durch nummerierte Stufen nach oben führen.',
            caption: 'Der Pass-Tab. Jedes geschaffte Brett bringt dich auf den 30 Stufen der Saison weiter.',
          },
          {
            t: 'list',
            items: [
              'Jede **Saison** hat **30 Stufen**. Mit neuen geschafften Leveln steigst du auf; schwere Bretter zählen eins extra, sehr schwere zwei.',
              'Die Spur **Gratis** zahlt allen Münzen und Booster aus.',
              'Die Spur **Premium**, freigeschaltet durch den Kauf des Brick Pass dieser Saison, bringt größere Belohnungen. Mit ihm bekommst du außerdem drei Leben mehr in deinen Vorrat und drei Gratiszüge auf dem Bildschirm „Keine Züge mehr“, und die Videos fallen weg: Belohnungen holst du ab, ohne etwas anzusehen.',
              'Premium-Stufen, die du schon erreicht hast, werden in dem Moment ausgezahlt, in dem du ihn freischaltest.',
            ],
          },
        ],
      },
      {
        id: 'events',
        title: 'Events und Rennen',
        blocks: [
          {
            t: 'p',
            text: 'Events kommen und gehen nach einem Kalender und erscheinen als Banner auf dem Startbildschirm und als Abzeichen auf der Reise. Manche verdoppeln oder verdreifachen die Münzen fürs Schaffen eines Bretts. Daneben laufen vier Arten von Rennen und Rettung:',
          },
          {
            t: 'defs',
            items: [
              { term: 'Freundesrettung', text: 'Eine Wochengeschichte: Schaffe vier Dorffinale und rette einen Freund.' },
              { term: 'Dorfrennen', text: 'Renne mit vier Spielern durch ein Dorf. Teilt deinen Spielernamen.' },
              { term: 'Brick Royale', text: 'Ein freiwilliger Wettbewerb für bis zu 100 Spieler. Teilt deinen Spielernamen, wenn du beitrittst.' },
              { term: 'Crew-Rennen', text: 'Fünf neue Level an einem Tag, gegen Spieler und Freunde.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Jedes davon lässt sich unter **Einstellungen › Spiel › Spielfunktionen** ausschalten, ebenso die Angebote auf der Karte.',
          },
        ],
      },
      {
        id: 'leaders',
        title: 'Ränge und Game Center',
        blocks: [
          {
            t: 'list',
            items: [
              'Der Tab **Ränge** wird ab Level 21 freigeschaltet: eine ewige Bestenliste mit Flaggen. Tippe auf **Mehr anzeigen**, um weiter unten zu sehen.',
              'Du erscheinst dort, solange **Einstellungen › Spiel › Mich in der Rangliste zeigen** an ist. Dabei werden dein Spielername und dein Level veröffentlicht; schaltest du es aus, wirst du entfernt.',
              'Wähle deine **Flagge** im Profil oder blende sie aus.',
              '**Game Center** hat 65 Erfolge und Bestenlisten für das höchste Level, geschaffte Bretter insgesamt, heute und diese Woche. Melde dich über die Leiste im Tab Ränge an, oder öffne Game Center über das Abzeichen auf der Reise oder im Pausemenü.',
            ],
          },
        ],
      },
    ],
    related: ['journey-and-villages', 'shop-and-purchases', 'friends-and-wardrobe', 'apple-features'],
  },

  {
    slug: 'shop-and-purchases',
    category: 'progress',
    cover: 'shop',
    title: 'Der Shop, Käufe und Wiederherstellen',
    summary:
      'Was in jedem Regal des Shops liegt, was Werbung entfernen und der Brick Pass tun, wie du Käufe auf einem neuen Gerät wiederherstellst und wie Rückerstattungen funktionieren.',
    keywords: 'kaufen kauf in-app preis münzen paket werbung entfernen werbefrei kauf wiederherstellen rückerstattung geld zurück beleg quittung familie',
    sections: [
      {
        id: 'shelves',
        title: 'Was es im Shop gibt',
        blocks: [
          {
            t: 'shot',
            id: 'shop',
            alt: 'Der Shop: 2.580 Münzen und das Regal mit Sonderangeboten: ein einmaliges Startpaket aus Münzen, Leben und Boostern, das Sparschwein und ein Booster-Pass mit 60 Minuten gratis UFOs und Raketen.',
            caption: 'Der Shop, erreichbar über seinen Tab, die Münzen auf dem Startbildschirm oder die Shoptür auf der Reise.',
          },
          {
            t: 'p',
            text: 'Die Regale von oben nach unten: **Angebote** (das Starterpaket, solange es da ist, das Sparschwein, der Booster-Pass, der Brick Pass und Werbung entfernen), das **Angebot der Woche**, Event-Angebote während eines Events, das **Wochenend-Angebot** von Freitag bis Montag, **Booster & Züge**, **Booster**, **Pässe**, **Pakete**, **Leben**, die **Garderobe**, **Münzen** und zum Schluss **Wiederherstellen** und die rechtlichen Links.',
          },
          {
            t: 'list',
            items: [
              'Die Preise zeigt der App Store in deiner eigenen Währung an.',
              'Dein erster Münzkauf wird einmalig verdoppelt.',
              'Das **Sparschwein** füllt sich mit Münzen, während du neue Level schaffst; ist es bereit, kannst du es für einen kleinen Preis öffnen.',
              'Jeder Pass und jeder zeitlich begrenzte Artikel ist ein einmaliger Kauf. **In OutBrick gibt es keine Abos**, und nichts verlängert sich von selbst.',
              'Vor Level 6 wird auf einem Brett nichts Kostenpflichtiges angeboten.',
            ],
          },
        ],
      },
      {
        id: 'remove-ads',
        title: 'Werbung entfernen und der Brick Pass',
        blocks: [
          {
            t: 'p',
            text: '**Werbung entfernen** nimmt alle freiwilligen Videos weg, aber nicht die Belohnungen: Auf Tasten, auf denen bisher Ansehen stand, steht jetzt **Belohnung abholen**, und sie zahlen sofort aus, innerhalb derselben Tagesgrenzen. Gehört dir der **Brick Pass** der aktuellen Saison, gilt dasselbe für diese Saison, und du bekommst drei Leben mehr in deinen Vorrat.',
          },
        ],
      },
      {
        id: 'restore',
        title: 'Käufe wiederherstellen',
        blocks: [
          {
            t: 'steps',
            items: [
              'Melde dich auf dem iPhone mit demselben Apple Account an, mit dem du gekauft hast, und bei iCloud.',
              'Öffne den **Shop** und scrolle ganz nach unten.',
              'Tippe auf **Wiederherstellen**.',
            ],
          },
          {
            t: 'p',
            text: 'Wiederherstellen bringt alles zurück, was dir dauerhaft gehört: **Werbung entfernen**, die Brick-Pass-Saisons 1 bis 3 und Garderobe-Artikel. Münzen, Booster, Leben und andere Dinge, die du verbrauchst, stellt der App Store nicht wieder her; sie reisen stattdessen mit deinem Fortschritt über iCloud. Siehe [Fortschritt, iCloud und Datenschutz](help:progress-privacy-and-account).',
          },
        ],
      },
      {
        id: 'refunds',
        title: 'Rückerstattungen und Probleme mit einem Kauf',
        blocks: [
          {
            t: 'p',
            text: 'Käufe laufen über Apple, deshalb kümmert sich Apple um Rückerstattungen: Wie du darum bittest, steht auf [unserer Seite zu Rückerstattungen](/refunds). Ist etwas, das du gekauft hast, nicht angekommen, versuch es zuerst mit **Wiederherstellen** und schreib uns dann privat über das [Kontaktformular](/contact). Veröffentliche nie einen Kaufbeleg oder eine Bestellnummer in der Community.',
          },
        ],
      },
    ],
    related: ['rewards-and-events', 'lives-moves-and-undos', 'progress-privacy-and-account', 'troubleshooting'],
  },

  {
    slug: 'friends-and-wardrobe',
    category: 'progress',
    cover: 'wardrobe',
    title: 'Freunde, Sammlung und Garderobe',
    summary:
      'Lerne die neun Steinfreunde kennen, sieh, was sie auf dem Startbildschirm und auf dem Brett tun, und wie dein Profil, die Sammlung und die Garderobe funktionieren.',
    keywords: 'maskottchen freunde figuren charaktere bloo peach sprout moss bricko zippy vio flurry poppy garderobe outfit skin kostüm kosmetik sammlung karten abzeichen andenken profil avatar name flagge',
    sections: [
      {
        id: 'friends',
        title: 'Die neun Freunde',
        blocks: [
          {
            t: 'p',
            text: '**Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry und Poppy** sind Freunde aus Spielzeugsteinen. Drei von ihnen stehen abwechselnd auf der Bühne des Startbildschirms. Auf einem Brett sitzt der Gastgeber-Freund des Dorfs im runden Rahmen in der Kopfzeile, passend zum Dorf gekleidet: Tippe ihn an für ein Kichern, ein Winken oder ein Abklatschen. Sie feuern dich in Sprechblasen an; laut sprechen sie nicht.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Auf Geräten mit Apples Sprachmodell auf dem Gerät können sich die Freunde eigene Sätze ausdenken (**Einstellungen › Spiel › Maskottchen-KI**). Das läuft komplett auf deinem Gerät.',
          },
        ],
      },
      {
        id: 'profile',
        title: 'Dein Profil',
        blocks: [
          {
            t: 'p',
            text: 'Tippe auf dem Startbildschirm oder auf der Reise auf deinen Avatar. Ändere Namen und Avatar, wähle deine Landesflagge (automatisch, ein Land deiner Wahl oder ausgeblendet), öffne die Sammlung und sieh deine Statistiken: Siege beim ersten Versuch, Bretter unter dem Ziel geschafft, beste Serie, geschaffte Bretter insgesamt, Züge und mehr. Die Versionsnummer des Spiels steht ganz unten; gib sie an, wenn du [einen Fehler meldest](help:reporting-bugs).',
          },
        ],
      },
      {
        id: 'collection',
        title: 'Die Sammlung',
        blocks: [
          {
            t: 'p',
            text: 'Die Sammlung öffnet sich ab Level 95, über dein Profil oder den Pass-Tab. Sie enthält **Steinkarten**, **Kapitel-Abzeichen** für jedes Kapitel, das du abschließt, **Andenken** und **Saisonkarten**: eine Karte bei jedem dritten neuen Level, neun pro Saison. Übrige Funken lassen sich gegen eine fehlende Karte eintauschen.',
          },
        ],
      },
      {
        id: 'wardrobe',
        title: 'Die Garderobe',
        blocks: [
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'Die Garderobe: König Bricko mit goldener Krone und roter Halskrause und einer grünen Taste Tragen, darunter die Tabs Outfits, Brettplatten, Paletten und Steinoberfläche sowie das Strand-Set.',
            caption: 'Outfits, Brettplatten, Paletten, Steinoberflächen, Feiern, Spuren und Rahmen.',
          },
          {
            t: 'list',
            items: [
              'Garderobe-Teile ändern, **wie das Spiel aussieht, nie, wie es sich spielt**.',
              'Du schaltest sie mit Münzen, Missionsmarken oder als Kauf frei und tippst dann auf **Tragen**. **Ablegen** oder **Dorf-Outfit** stellt alles zurück.',
              'Teile für die Bedienungshilfen sind immer gratis.',
            ],
          },
        ],
      },
    ],
    related: ['menus-tour', 'rewards-and-events', 'shop-and-purchases', 'settings'],
  },
];
