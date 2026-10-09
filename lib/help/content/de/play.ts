import type { HelpArticle } from '../../model.ts';

/** Erste Schritte und ein Brett spielen, auf Deutsch. Geprüft mit 5.1.1 (68). */
export const playArticles: HelpArticle[] = [
  {
    slug: 'welcome',
    category: 'start',
    cover: 'garden-teach',
    title: 'Willkommen bei OutBrick: dein erstes Brett',
    summary:
      'Was OutBrick ist, wie die Lernkarten funktionieren, wie du die Ziele eines Bretts liest und was passiert, wenn du es schaffst.',
    keywords: 'neu anfänger einsteiger tutorial anleitung wie spielt man erstes mal start spielregeln',
    sections: [
      {
        id: 'what',
        title: 'Was OutBrick ist',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick ist ein ruhiges **Slide & Match**-Puzzle. Jedes Brett ist ein Garten aus Spielzeugsteinen mit farbigen Toren an den Rändern. **Schieb** einen Stein in das Tor seiner Farbe, dann geht er nach Hause, oder **tausch** zwei Nachbarn, um eine Dreierreihe zu bilden und sie abzuräumen. Jedes Brett hat Ziele, die du mit einer bestimmten Zahl von Zügen erreichen musst, und es läuft nie eine Uhr.',
          },
          {
            t: 'list',
            items: [
              '**2.000 Level** entlang der Reise, durch **167 Dörfer**, jedes mit eigenem Look und zwölf Arten von Brettern.',
              '**Neun Steinfreunde** (Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry und Poppy) feuern dich in Sprechblasen an.',
              '**Kostenlos spielbar.** Es gibt freiwillige Videos und Käufe, aber Leben kommen von selbst zurück, und du musst nie etwas ausgeben, um weiterzuspielen.',
            ],
          },
        ],
      },
      {
        id: 'first-board',
        title: 'Dein erstes Brett',
        blocks: [
          {
            t: 'p',
            text: 'Tippe auf dem Tab **Start** auf die große grüne **Level**-Taste. Wenn dir eine neue Idee zum ersten Mal begegnet, zeigt sie dir eine kurze Lernkarte mit einer Hand, die sich bewegt. Tippe irgendwohin, um loszuspielen.',
          },
          {
            t: 'shot',
            id: 'garden-teach',
            alt: 'Ein Brett in der Gartenstadt mit roten, lila und orangefarbenen Steinen. Unten steht auf einer rosa Lernkarte: Schieb einen Stein neben zwei seiner Farbe, dann entsteht eine Reihe – oder wisch ihn in einen Nachbarn, um zu tauschen. Darunter: Jetzt du – probier’s! Eine Hand zeigt auf einen Stein.',
            caption: 'Eine Lernkarte auf Level 2. Jede neue Idee bekommt eine Karte, wenn sie dir zum ersten Mal begegnet.',
          },
          {
            t: 'steps',
            items: [
              '**Schieben:** Wisch einen Stein zu einem freien Feld. Er gleitet, bis du loslässt oder er auf etwas trifft. Bring ihn in das Tor seiner Farbe, dann verlässt er das Brett.',
              '**Tauschen:** Wisch einen Stein in einen Nachbarn. Entsteht dabei eine Reihe aus drei oder mehr (oder ein 2×2-Quadrat), verschwinden sie. Wenn nicht, springen die Steine zurück, und es wird **kein Zug verbraucht**.',
              '**Behalte die Ziele im Blick** im Feld oben. Jeder Haken bedeutet, dass ein Ziel erreicht ist.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Nicht sicher, was zu tun ist? Tippe in der Leiste auf den Booster **Tipp**. Bei jedem Versuch bekommst du einen Tipp, eine Rakete und ein UFO gratis.',
          },
        ],
      },
      {
        id: 'goals',
        title: 'Die Ziele lesen',
        blocks: [
          {
            t: 'p',
            text: 'Das **Auftragsfeld** oben zeigt, was dieses Brett verlangt und wie viel noch fehlt: Steine einer Farbe, die du nach Hause schicken oder kombinieren sollst, Kisten zum Aufbrechen, Schlösser zum Öffnen oder Moos zum Entfernen. Jedes Ziel trägt dasselbe Farbsymbol wie seine Steine. Manche Bretter haben zwei **Etappen**: Erreichst du die ersten Ziele, öffnen sich neue Tore für die zweite.',
          },
          { t: 'p', text: 'Jeder Teil des Bildschirms wird in [Ein Brett spielen](help:playing-a-board#screen) erklärt.' },
        ],
      },
      {
        id: 'clear',
        title: 'Wenn du ein Brett schaffst',
        blocks: [
          {
            t: 'shot',
            id: 'clear',
            alt: 'Die Gewinnkarte: ein goldenes Band mit „Raketengrat 4“, ein Abzeichen für das abgeschlossene Kapitel, drei goldene Sterne, ein jubelnder grüner Steinfreund, das Wort Brillant!, 5.470 Punkte, plus 140 Münzen, ein Hinweis Erster Versuch!, eine Zeile zur Reisetruhe sowie die Tasten Start, Weiter und Teilen.',
            caption: 'Die Gewinnkarte: deine Sterne, Punkte, Münzen und alle Belohnungen, die du unterwegs eingesammelt hast.',
          },
          {
            t: 'list',
            items: [
              'Übrige Züge werden zu Liniensteinen und gehen hoch, jeder bringt 150 Punkte. Tippe, um die Show zu überspringen.',
              'Für ein geschafftes Brett bekommst du immer mindestens einen Stern; mit mehr Punkten zwei oder drei.',
              '**Weiter** führt zum nächsten Brett, **Start** zurück. Ist **Schnellspiel** an (Einstellungen › Spiel), geht es nach einem Sieg direkt zum nächsten Brett.',
              'Ein Sieg kostet nie ein Leben. Leben werden nur verbraucht, wenn ein Versuch verloren geht. Siehe [Leben, Züge und Rückgängig](help:lives-moves-and-undos).',
            ],
          },
        ],
      },
      {
        id: 'next',
        title: 'Wie es weitergeht',
        blocks: [
          {
            t: 'list',
            items: [
              '[Ein Rundgang durch jedes Menü](help:menus-tour), damit du weißt, was jede Taste tut.',
              '[Spezialsteine, Hindernisse und Brettarten](help:bricks-specials-and-blockers), sobald dir etwas Neues begegnet.',
              '[Bedienungshilfen](help:accessibility) und [Mit VoiceOver spielen](help:voiceover), wenn das Spiel besser zu dir passen soll.',
            ],
          },
        ],
      },
    ],
    related: ['menus-tour', 'playing-a-board', 'bricks-specials-and-blockers', 'accessibility'],
  },

  {
    slug: 'menus-tour',
    category: 'start',
    cover: 'home',
    title: 'Ein Rundgang durch jedes Menü',
    summary:
      'Die untere Leiste, Start, die Karte der Reise, der Shop, der Brick Pass, Ränge, dein Profil, die Sammlung und die Einstellungen: wofür alles da ist und wie du hinkommst.',
    keywords: 'navigation tabs reiter untere leiste wo finde ich taste knopf profil sammlung zahnrad menü',
    sections: [
      {
        id: 'tab-bar',
        title: 'Die untere Leiste',
        blocks: [
          { t: 'p', text: 'Unten auf dem Bildschirm liegen fünf Tabs. Du kannst auch nach links oder rechts wischen, um zwischen ihnen zu wechseln.' },
          {
            t: 'table',
            head: ['Tab', 'Was er enthält'],
            rows: [
              ['**Start**', 'Deine Freunde auf ihrer Steinbühne und die große **Level**-Taste.'],
              ['**Ränge**', 'Die Bestenliste. Sie wird ab Level 21 freigeschaltet.'],
              ['**Reise**', 'Der erhöhte Tab in der Mitte: die Karte aller 2.000 Level.'],
              ['**Shop**', 'Münzen, Booster, Pakete, Leben und die Garderobe.'],
              ['**Pass**', 'Die Saison des Brick Pass, dazu Abkürzungen zu Missionen und Sammlung.'],
            ],
          },
        ],
      },
      {
        id: 'home',
        title: 'Start',
        blocks: [
          {
            t: 'shot',
            id: 'home',
            alt: 'Startseite: oben der Avatar, 2.580 Münzen, eine 12-Tage-Serie, Missionen und das Einstellungen-Zahnrad. Unter dem OUTBRICK-Logo kündigt eine Karte ein Event an, das bald beginnt. Drei Steinfreunde mit Sonnenhüten stehen auf einem Rasen aus Spielsteinen über einer grünen Taste „Level 214“. Die Leiste unten zeigt die fünf Tabs.',
            caption: 'Start. Die obere Reihe von links: dein Avatar, Münzen, Tagesserie, Missionen, das Steinrad, wenn es bereit ist, und das Zahnrad für die Einstellungen.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Avatar', text: 'Öffnet dein **Profil**.' },
              { term: 'Münzen', text: 'Öffnet den Shop.' },
              { term: 'Serie (Flamme)', text: 'Zeigt deine Tagesserie und wann die nächste Serienbelohnung kommt. Die Serie wächst an jedem Tag, an dem du ein Brett schaffst.' },
              { term: 'Missionen', text: 'Drei Aufgaben für heute und drei für die Woche.' },
              { term: 'Steinrad', text: 'Jeden Tag eine Gratisdrehung für Münzen oder einen Booster.' },
              { term: 'Zahnrad', text: 'Öffnet die [Einstellungen](help:settings).' },
              { term: 'Event-Banner', text: 'Das laufende oder kommende Event. Tippe darauf, um hinzukommen.' },
              { term: 'Level-Taste', text: 'Spielt dein aktuelles Brett.' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Dein **Täglicher Stein** (100 Münzen) kommt von allein: Schaffst du an einem neuen Tag ein Brett, wird er auf dem Startbildschirm mit einem kurzen Banner ausgezahlt.',
          },
        ],
      },
      {
        id: 'journey',
        title: 'Die Karte der Reise',
        blocks: [
          {
            t: 'shot',
            id: 'journey',
            alt: 'Die Karte der Reise: ein Kopfsteinpflasterweg durch ein Dorf mit rosa Blüten, mit den Levelstationen 213, 214 (leuchtend, mit der Aufschrift Spielen) und 215. Auf beiden Seiten stehen Abzeichen untereinander, und die Kopfzeile zeigt Avatar, Leben (Voll), Münzen und 9 von 36 Sternen.',
            caption: 'Die Reise. Dein aktuelles Level leuchtet; die Abzeichen auf beiden Seiten führen zu Events, Belohnungen und Angeboten.',
          },
          {
            t: 'list',
            items: [
              '**Kopfzeile:** dein Avatar, die **Leben** (tippen zeigt, wann das nächste kommt), die Münzen, die **Sterne** des Dorfs (tippen zeigt die Sternbelohnungen) und das Zahnrad.',
              '**Levelstationen:** Tippe auf dein aktuelles Level oder ein geschafftes, um es sofort zu spielen. Eine gesperrte Station sagt dir, wie viele Level sie noch entfernt ist.',
              '**Abzeichen rechts:** Event-, Stern- und Dorfgeschenk-Belohnungen, Rennen, **Game Center** (wenn du angemeldet bist) und **Alle Dörfer**, ein Atlas aller Orte, die du besuchen kannst.',
              '**Abzeichen links:** die Serien-Challenge, das Sparschwein, der Brick Pass, Angebote, die Shoptür und weitere Belohnungen.',
              '**Mein Level:** Die Stecknadel-Taste bringt dich zurück zu deinem aktuellen Level.',
            ],
          },
          { t: 'p', text: 'Mehr dazu in [Die Reise und ihre Dörfer](help:journey-and-villages).' },
        ],
      },
      {
        id: 'shop-pass-leaders',
        title: 'Shop, Pass und Ränge',
        blocks: [
          {
            t: 'shots',
            items: [
              { id: 'shop', alt: 'Der Shop: 2.580 Münzen und das Regal mit Sonderangeboten: ein einmaliges Startpaket aus Münzen, Leben und Boostern, das Sparschwein und ein Booster-Pass mit 60 Minuten gratis UFOs und Raketen.', caption: 'Shop. **Wiederherstellen** steht ganz unten.' },
              { id: 'pass', alt: 'Der Pass-Tab mit den Belohnungsspalten Gratis und Premium, die durch die Stufen nach oben führen.', caption: 'Pass: 30 Stufen mit Gratis- und Premium-Belohnungen.' },
              { id: 'leaders', alt: 'Der Tab Rangliste mit Beispieldaten: ein Podest für die drei Besten mit Flaggen und Levels, dann die Liste und deine eigene Zeile unten angeheftet (Platz 87, Level 214). Oben lädt eine Leiste zur Anmeldung bei Game Center ein, um Freunde zu sehen.', caption: 'Rangliste: eine Bestenliste für alle Zeiten (Beispieldaten).' },
            ],
          },
          {
            t: 'p',
            text: 'Siehe [Der Shop, Käufe und Wiederherstellen](help:shop-and-purchases) und [Belohnungen, Events und der Brick Pass](help:rewards-and-events).',
          },
        ],
      },
      {
        id: 'profile-collection',
        title: 'Dein Profil und die Sammlung',
        blocks: [
          {
            t: 'list',
            items: [
              '**Profil** (tippe auf deinen Avatar): dein Name, Level, deine Landesflagge, die Taste Sammlung und deine Statistiken: Siege beim ersten Versuch, beste Serie, geschaffte Bretter insgesamt und mehr. Die Spielversion steht ganz unten.',
              '**Sammlung** (über das Profil oder den Pass-Tab, ab Level 95): Steinkarten, Kapitel-Abzeichen, Andenken, Saisonkarten und die **Garderobe**.',
            ],
          },
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'Die Sammlung im Bereich Garderobe: König Bricko mit goldener Krone und einer Taste Tragen, darunter die Tabs Outfits, Brettplatten, Paletten und Steinoberfläche sowie das Strand-Set und das Bonbonladen-Set.',
            caption: 'Die Garderobe ändert, wie das Spiel aussieht, nie, wie es sich spielt.',
          },
          { t: 'p', text: 'Mehr dazu in [Freunde, Sammlung und Garderobe](help:friends-and-wardrobe).' },
          { t: 'shots', items: [{ id: 'profile', alt: 'Dein Profil: der blaue Freund als Avatar mit Bearbeiten-Stift, der Name Riley, Level 214, automatische Region, Sammlung 33 von 39 und die Statistik: 96 Siege im ersten Versuch, 74 Mal das Ziel geschlagen, beste Serie 21, 213 geschaffte Bretter, 4.218 Züge und 3 perfekte Bretter.', caption: 'Profil.' }, { id: 'collection', alt: 'Die Sammlung bei den Saisonkarten: Saison 2, 0 von 9 Karten und 0 Funken, die Regeln (ab Level 96 eine Karte alle drei neuen Level, Doppelte geben einen Funken, drei Funken für eine fehlende Karte) und die neun Freunde, jeder als „Fehlt“ markiert. Darunter beginnen die Steinkarten, 33 von 39.', caption: 'Sammlung.' }] },
        ],
      },
      {
        id: 'settings',
        title: 'Einstellungen',
        blocks: [
          {
            t: 'p',
            text: 'Tippe auf dem Startbildschirm oder auf der Reise auf das Zahnrad. Die Einstellungen haben zwei Tabs, **Spiel** und **Bedienungshilfen**, und enden mit Links zu Support, Community und den rechtlichen Seiten. Jede Zeile wird in [Alle Einstellungen erklärt](help:settings) beschrieben.',
          },
        ],
      },
    ],
    related: ['welcome', 'settings', 'journey-and-villages', 'playing-a-board'],
  },

  {
    slug: 'playing-a-board',
    category: 'play',
    cover: 'board-slide',
    title: 'Ein Brett spielen',
    summary:
      'Jeder Teil des Brettbildschirms, wie Schieben und Tauschen funktionieren, was als Zug zählt, wie Sterne und Punkte funktionieren und was schwere, sehr schwere, Boss- und Nachtbretter bedeuten.',
    keywords: 'anzeige kopfzeile züge zähler sternleiste auftrag ziele schieben tauschen tor reihe punkte sterne schwierigkeit schwer sehr schwer boss nacht',
    sections: [
      {
        id: 'screen',
        title: 'Der Brettbildschirm',
        blocks: [
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'Ein Slide-&-Match-Brett am Strand, Level 25. Die Kopfzeile zeigt 5 Leben, 15 verbleibende Züge, eine Sternleiste mit einem leuchtenden Stern, Ziele von 1 gelben und 3 blauen Steinen und den Gastgeber-Freund mit Matrosenmütze. Auf dem Brett liegen rosa, gelbe, orange und blaue Steine, jeder mit dem Symbol seiner Farbe, mit gelben, orangen und blauen Toren an den Rändern und einem goldenen Schlüssellochdeckel über einer Reihe Steine. Unten die Leiste: Pause, dann Hinweis, Rakete und UFO mit „Gratis“ und Rückgängig mit 6.',
            caption: 'Der Brettbildschirm: Kopfzeile, Raster und Leiste.',
          },
          {
            t: 'table',
            head: ['Teil', 'Was er dir sagt'],
            rows: [
              ['Level und Leben', 'Die Levelnummer, dann ein Herz mit deinen Leben. Tippe auf das Herz, um zu sehen, wann das nächste Leben kommt.'],
              ['Züge', 'Die große Zahl: die übrigen Züge. Bei drei pulsiert sie, und bei den letzten fünf leuchtet der Rand des Bretts warm.'],
              ['Siegesserie', 'Eine kleine Kette aus Steinen unter den Zügen, wenn du gerade eine Siegesserie hast.'],
              ['Sternleiste', 'Füllt sich, während deine Punkte steigen, mit einem Stern an jeder Schwelle.'],
              ['Auftragsfeld', 'Die Ziele und wie viel noch fehlt. Ein Haken markiert jedes erreichte Ziel. Bretter mit Etappen zeigen „STUFE 1 / 2“.'],
              ['Freund', 'Der Gastgeber-Freund des Dorfs. Tippe ihn an für ein Kichern oder ein Winken.'],
              ['Schwierigkeitsschild', 'Schwere, sehr schwere, Boss- und Nachtbretter tragen unter der Kopfzeile ein Schild.'],
              ['Leiste', 'Pause, dann Tipp, Rakete, UFO und Rückgängig. Siehe [Booster, Tipps und Pause](help:boosters-and-pause).'],
            ],
          },
        ],
      },
      {
        id: 'slide',
        title: 'Steine nach Hause schieben',
        blocks: [
          {
            t: 'list',
            items: [
              'Wisch einen Stein zu einem freien Feld. Er bleibt dort stehen, wo du loslässt, auf dem nächsten ganzen Feld, oder früher, wenn er auf ein Teil, ein Hindernis oder den Rand trifft.',
              'Ziehst du ihn weniger als ein halbes Feld, springt er zurück, ohne einen Zug zu verbrauchen.',
              'Ein Stein verlässt das Brett nur durch ein offenes **Tor seiner eigenen Farbe**. Jedes andere Tor ist eine Wand.',
              'Normale Steine, Schlüssel und Liniensteine können durch ein Tor hinaus. Bomben, Zielpfeile und Farbbomben bleiben an einem Tor stehen.',
              'Lange und große Steine gleiten als ein Stück und brauchen ein Tor, das so breit ist wie sie. Sie zählen jedes Feld, das sie bedecken.',
              'Auf Brettern, auf denen Steine fallen, kannst du seitwärts schieben oder geradewegs durch ein Tor hinaus.',
              'Jedes Schieben verbraucht einen Zug.',
            ],
          },
        ],
      },
      {
        id: 'swap',
        title: 'Tauschen und Kombinieren',
        blocks: [
          {
            t: 'list',
            items: [
              'Wisch einen Stein in seinen Nachbarn, um die beiden zu tauschen. Der Tausch bleibt, wenn er eine Reihe aus drei oder mehr bildet, ein 2×2-Quadrat, zwei Spezialsteine zusammen auslöst oder eine Farbbombe einsetzt.',
              'Sonst springen die Steine zurück, du spürst zwei kurze Tipper, und es wird **kein Zug verbraucht**.',
              'Kombinierst du vier, fünf, eine L- oder T-Form oder ein Quadrat, entsteht ein Spezialstein. Siehe [Spezialsteine](help:bricks-specials-and-blockers#specials).',
              'Tippe auf einen Spezialstein, um ihn dort auszulösen, wo er steht. Das verbraucht einen Zug.',
            ],
          },
        ],
      },
      {
        id: 'never-stuck',
        title: 'Du kannst nie festsitzen',
        blocks: [
          {
            t: 'p',
            text: 'Ist kein Zug möglich, wird das Brett unter einem Banner **Mischen!** kostenlos neu gemischt: Es kostet weder einen Zug noch ein Leben. Hat ein Brett zwar Züge, aber keiner davon kann je deine Ziele erreichen, wird es still neu ausgeteilt. Und fehlen einem Brett Steine einer Farbe, die ein Ziel braucht, werden übrige Steine umgefärbt, damit sich das Ziel immer erreichen lässt.',
          },
        ],
      },
      {
        id: 'stars',
        title: 'Punkte, Sterne und der Bonus am Ende',
        blocks: [
          {
            t: 'list',
            items: [
              'Jedes geschaffte Brett bringt mindestens **einen Stern**. Mehr Punkte bringen zwei oder drei; die Sternleiste zeigt, wie nah du dran bist.',
              'Ist das letzte Ziel erreicht, siehst du **Ziel erreicht!** Jeder übrige Zug wird zu einem Linienstein, alle gehen hoch, und jeder übrige Zug bringt 150 Punkte. Tippe, um zu überspringen.',
              'Spiel ein geschafftes Brett jederzeit über die Reise noch einmal, um seine Sterne zu verbessern.',
            ],
          },
          {
            t: 'shot',
            id: 'clear',
            alt: 'Die Gewinnkarte mit drei goldenen Sternen, dem Wort Brillant!, 5.470 Punkten und plus 140 Münzen.',
            caption: 'Drei Sterne: Brillant! Zwei: Super! Einer: Geschafft!',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Schwere, sehr schwere, Boss- und Nachtbretter',
        blocks: [
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Level 35 in der Abenddämmerung, 28 verbleibende Züge, mit einer lila SCHWER-Plakette unter den Zielen: 2 gelbe, 5 rosa und 3 Sandburgen. Das burgförmige Brett hat einen großen rosa Stein, moosbedeckte Steine und vier Sandburg-Kisten, mit gelben, rosa und roten Toren.',
            caption: 'Ein schweres Brett trägt sein Schild unter der Kopfzeile.',
          },
          {
            t: 'table',
            head: ['Stufe', 'Was sich ändert', 'Münzen fürs Schaffen'],
            rows: [
              ['Normal', 'Kein Schild.', '25'],
              ['Schwer', 'Die Ziele verlangen etwa 15 % mehr, und es gibt ein paar Hindernisse mehr.', '50'],
              ['Sehr schwer', 'Die Ziele verlangen etwa 30 % mehr.', '80'],
              ['Boss', 'Das letzte Brett eines Kapitels, ab Level 40. Die Ziele verlangen etwa 40 % mehr.', '80'],
              ['Nacht', 'Ein Brett nach Einbruch der Dunkelheit. Es spielt sich wie ein schweres Brett.', '50'],
            ],
          },
          {
            t: 'p',
            text: 'Zwei oder mehr Sterne bringen zusätzlich einen Zielbonus. Events können die Münzen fürs Schaffen verdoppeln oder verdreifachen.',
          },
        ],
      },
    ],
    related: ['bricks-specials-and-blockers', 'boosters-and-pause', 'lives-moves-and-undos', 'voiceover'],
  },

  {
    slug: 'bricks-specials-and-blockers',
    category: 'play',
    cover: 'board-shapes',
    title: 'Spezialsteine, Hindernisse und Brettarten',
    summary:
      'Wie du jeden Spezialstein und jede Kombo baust, was jedes Hindernis, jeder Deckel und jedes Tor tut, verdeckte Steine, Portale, lange Steine und die zwölf Brettarten in jedem Dorf.',
    keywords: 'bombe linienstein rakete farbbombe zielpfeil kombo kombination kiste eis gelee schloss moos statue deckel versiegelt beet zähler schlüssel schlüsselloch uhr tor vereist zähltor portal verdeckt fragezeichen langer stein l t form',
    sections: [
      {
        id: 'specials',
        title: 'Spezialsteine',
        blocks: [
          {
            t: 'table',
            head: ['Spezialstein', 'So entsteht er', 'Was er tut'],
            rows: [
              ['Linienstein', 'Vier in einer Reihe.', 'Räumt seine ganze Reihe oder Spalte, in der Richtung, in die du gezogen hast.'],
              ['Bombe', 'Eine L-, T- oder +-Form.', 'Sprengt das 3×3-Quadrat um sich herum, zweimal.'],
              ['Farbbombe', 'Fünf in einer Reihe.', 'Nimmt jeden normalen Stein einer Farbe: Tausch sie mit dieser Farbe.'],
              ['Zielpfeil', 'Ein 2×2-Quadrat.', 'Fliegt zu einem Teil, das ein Ziel braucht.'],
            ],
          },
          {
            t: 'p',
            text: 'Tippe auf einen Spezialstein, um ihn dort auszulösen, wo er steht, oder tausch ihn mit einem Nachbarn. Einen Linienstein kannst du auch durch ein Tor seiner Farbe hinausschieben, ohne dass er hochgeht.',
          },
        ],
      },
      {
        id: 'combos',
        title: 'Kombos',
        blocks: [
          { t: 'p', text: 'Tausch zwei Spezialsteine miteinander für etwas Größeres:' },
          {
            t: 'table',
            head: ['Miteinander tauschen', 'Ergebnis'],
            rows: [
              ['Linienstein + Linienstein', 'Ein Kreuz: eine Reihe und eine Spalte.'],
              ['Linienstein + Bombe', 'Ein Kreuz, drei Bahnen breit.'],
              ['Bombe + Bombe', 'Eine Explosion von 5×5.'],
              ['Farbbombe + beliebiger Spezialstein', 'Jeder Stein dieser Farbe wird zu diesem Spezialstein, und alle gehen hoch.'],
              ['Farbbombe + Farbbombe', 'Das ganze Brett.'],
              ['Zielpfeil + beliebiger Spezialstein', 'Der Zielpfeil trägt den Spezialstein zu seinem Ziel. Zwei Zielpfeile treffen drei Ziele.'],
            ],
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Hindernisse',
        blocks: [
          {
            t: 'p',
            text: 'Tippe auf ein Hindernis, um eine kurze Erinnerung zu sehen, wie du es loswirst. Ihr Aussehen ändert sich mit dem Dorf (Heuballen auf dem Bauernhof, Blumentöpfe in der Gartenstadt), aber die Regeln bleiben gleich.',
          },
          {
            t: 'table',
            head: ['Hindernis', 'Was es tut', 'So wirst du es los'],
            rows: [
              ['Kiste', 'Hält gleitende Steine auf. Eine oder zwei Schichten.', 'Bilde daneben eine Reihe; jede Reihe bricht eine Schicht.'],
              ['Eis (Gelee)', 'Hält den Stein darin fest.', 'Bilde daneben eine Reihe.'],
              ['Schloss', 'Der Stein kann sich nicht bewegen.', 'Bilde eine Reihe **durch** ihn hindurch. Eine Reihe daneben reicht nicht.'],
              ['Moos', 'Kriecht nach jedem Zug, der nichts abräumt, auf einen Stein.', 'Bilde daneben eine Reihe.'],
              ['Statue', 'Steht in einer Lücke: Nichts gleitet hindurch.', 'Sie bleibt. Such dir eine andere Bahn.'],
            ],
          },
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Level 35 in der Abenddämmerung, 28 verbleibende Züge, mit einer lila SCHWER-Plakette unter den Zielen: 2 gelbe, 5 rosa und 3 Sandburgen. Das burgförmige Brett hat einen großen rosa Stein, moosbedeckte Steine und vier Sandburg-Kisten, mit gelben, rosa und roten Toren.',
            caption: 'Sandburg-Kisten und Moos auf demselben Brett.',
          },
        ],
      },
      {
        id: 'lids',
        title: 'Versiegelte Beete und ihre Deckel',
        blocks: [
          { t: 'p', text: 'Manche Steine liegen unter einem Deckel und können sich nicht bewegen, bis er sich öffnet. Es gibt fünf Arten von Deckeln:' },
          {
            t: 'table',
            head: ['Deckel', 'Öffnet sich, wenn …'],
            rows: [
              ['Zählerdeckel', 'genug Steine beliebiger Farbe das Brett verlassen haben (die Zahl auf dem Deckel).'],
              ['Farbiger Zählerdeckel', 'genug Steine seiner eigenen Farbe das Brett verlassen haben oder kombiniert wurden.'],
              ['Glasdeckel', 'du direkt daneben eine Reihe in seiner Farbe bildest.'],
              ['Messinguhr', 'du so viele Züge gemacht hast, wie auf ihr stehen.'],
              ['Schlüsselloch', 'der Schlüsselstein das Brett verlässt, kombiniert oder durch sein Tor hinausgeschoben.'],
            ],
          },
        ],
      },
      {
        id: 'gates',
        title: 'Tore',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Offenes Tor', text: 'Nimmt Steine seiner Farbe. Für lange Steine zählt seine Breite.' },
              { term: 'Vereistes Tor', text: 'Taut jedes Mal ein wenig, wenn ein Stein nach Hause geht oder wenn Teile davor verschwinden. Ist es offen, schieb seine Farbe hinein.' },
              { term: 'Zähltor', text: 'Nimmt nur eine bestimmte Zahl von Steinen und schließt sich dann für immer. Wähle, welche du schickst.' },
              { term: 'Etappentor', text: 'Bleibt versiegelt, bis die zweite Etappe der Ziele beginnt.' },
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Auch Tore tragen das Symbol ihrer Farbe, und auf dem Brett mit hohem Kontrast bekommt ein Tor, dessen Farbe dem Boden zu ähnlich ist, einen zweifarbigen Umriss.',
          },
        ],
      },
      {
        id: 'more',
        title: 'Verdeckte Steine, Portale und geformte Steine',
        blocks: [
          {
            t: 'list',
            items: [
              '**Verdeckte „?“-Steine** verbergen ihre Farbe. Sie drehen sich um, wenn ein Stein daneben das Brett verlässt; wenn du sie bewegst, drehen sie sich nicht um. Sie spielen trotzdem mit ihrer echten Farbe.',
              '**Portale** gibt es paarweise: Schieb einen Stein in eins, und er kommt auf einer anderen Seite aus seinem Zwilling heraus.',
              '**Lange, große, L- und T-Steine** gleiten und fallen als ein Stück, werden nie getauscht, zählen nie in Reihen und brauchen ein Tor, das so breit ist wie sie. Kein Booster kann sie auswählen.',
            ],
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Level 31 am Strand: 16 verbleibende Züge, Ziele von 8 gelben und 8 blauen. Unten auf dem Brett stapeln sich große, zusammenhängende Steine: ein langer blauer Balken, eine hohe blaue Säule und ein gelbes Teil in C-Form, mit blauen und gelben Toren an den Rändern.',
            caption: 'Große Steine gleiten als ein Stück und brauchen ein Tor, das so breit ist wie sie.',
          },
        ],
      },
      {
        id: 'kinds',
        title: 'Die zwölf Brettarten',
        blocks: [
          {
            t: 'p',
            text: 'Jedes volle Dorf hat zwölf Bretter, und Brett 1 bis 12 ist immer dieselbe Art, so lernst du den Rhythmus eines Dorfs: ',
          },
          {
            t: 'table',
            head: ['Brett', 'Art', 'Was dich erwartet'],
            rows: [
              ['1', 'Ab nach Hause', 'Schieb Steine durch ihre Tore hinaus.'],
              ['2', 'Schieben und Kombinieren', 'Schieben und Tauschen zusammen.'],
              ['3', 'Offener Garten', 'Ein geräumiges Brett mit Platz zum Planen.'],
              ['4', 'Fallender Garten', 'Steine fallen, und neue rücken nach.'],
              ['5', 'Töpfe und Eis', 'Kisten und Eis zum Aufbrechen.'],
              ['6', 'Lange Steine', 'Geformte Steine und breite Tore.'],
              ['7', 'Eckstücke', 'Steine fallen, aber es kommen keine neuen.'],
              ['8', 'Kisten und Eis', 'Mehr Schichten zum Aufbrechen.'],
              ['9', 'Schlösser und Moos', 'Schlösser zum Öffnen und Moos, das sich ausbreitet.'],
              ['10', 'Steinbahnen', 'Statuen, die den Weg versperren.'],
              ['11', 'Der große Tag', 'Ein größeres Finale, oft mit einem versiegelten Beet.'],
              ['12', 'Stilles Rätsel', 'Steine fallen, ohne dass neue kommen: Denk es gut durch.'],
            ],
          },
          {
            t: 'p',
            text: 'Ab dem fünften Dorf tauchen außerdem Deckel, verdeckte Steine, Etappentore und Portale auf. Jedes bekommt beim ersten Mal seine eigene Lernkarte.',
          },
        ],
      },
    ],
    related: ['playing-a-board', 'boosters-and-pause', 'vision-hearing-and-motion', 'voiceover'],
  },

  {
    slug: 'boosters-and-pause',
    category: 'play',
    cover: 'board-shapes',
    title: 'Booster, Tipps und Pause',
    summary:
      'Was Tipp, Rakete, UFO und Rückgängig tun, welche du auf jedem Brett gratis bekommst, wie du mehr bekommst und alles im Pausemenü.',
    keywords: 'booster tipp hilfe rakete ufo rückgängig leiste gratis kostenlos pause neustart neu starten beenden verlassen weiter',
    sections: [
      {
        id: 'tray',
        title: 'Die Leiste',
        blocks: [
          {
            t: 'p',
            text: 'Die Leiste unten an jedem Brett enthält **Pause**, dann **Tipp**, **Rakete**, **UFO** und **Rückgängig**. Alle stehen ab Level 1 zur Verfügung. Ein Hinweis **GRATIS** bedeutet, dass der nächste Einsatz nichts kostet; eine Zahl zeigt, wie viele du hast.',
          },
          {
            t: 'table',
            head: ['Booster', 'So setzt du ihn ein', 'Was er tut'],
            rows: [
              ['Tipp', 'Antippen.', 'Zeigt und sagt den besten Zug, ein Schieben oder einen Tausch.'],
              ['Rakete', 'Antippen, dann auf einen normalen Stein tippen.', 'Macht aus diesem Stein einen Linienstein, der seine Reihe entlang feuert.'],
              ['UFO', 'Antippen, dann auf ein Teil tippen.', 'Beamt eine Schicht davon weg: eine Kistenschicht, Eis, ein Schloss, Moos oder einen Stein.'],
              ['Rückgängig', 'Antippen.', 'Nimmt deinen letzten Zug zurück.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Booster können keine geformten Steine auswählen und nichts, was unter einem Deckel liegt.',
          },
        ],
      },
      {
        id: 'free',
        title: 'Gratis-Booster',
        blocks: [
          {
            t: 'list',
            items: [
              '**Jeder Versuch** bringt einen Tipp, eine Rakete und ein UFO gratis. Sie lassen sich nicht für später aufheben.',
              '**Siegesserien** bringen mehr für dein nächstes Brett: 2 Siege in Folge einen Tipp, 3 eine Rakete, 4 ein UFO und 5 alle drei. Es zählen nur neue Level.',
              '**Das erste Rückgängig** auf jedem Brett ist gratis.',
              '**Ein Willkommensgeschenk** aus 2 Tipps, 2 Raketen und 2 UFOs kommt einmal, früh auf der Reise.',
              'Manche Belohnungen und Pässe machen einen Booster eine Zeit lang auf jedem Brett gratis; sein Hinweis zeigt dann GRATIS.',
              'Mit VoiceOver bekommst du durch Doppeltippen mit zwei Fingern jederzeit einen Gratis-Tipp. Siehe [Mit VoiceOver spielen](help:voiceover#hints).',
            ],
          },
        ],
      },
      {
        id: 'more',
        title: 'Mehr bekommen',
        blocks: [
          {
            t: 'p',
            text: 'Tippe auf einen leeren Booster, um einen mit Münzen zu kaufen (Tipp 150, Rakete 300, UFO 500) oder ein Paket im Shop. Booster gibt es auch am Steinrad, als Sternbelohnungen der Dörfer, für Missionen, im Brick Pass und bei Events.',
          },
        ],
      },
      {
        id: 'undo',
        title: 'Rückgängig',
        blocks: [
          {
            t: 'list',
            items: [
              'Das erste Rückgängig auf jedem Brett ist gratis. Danach kommen sie aus einem Vorrat von bis zu **fünf**, der sich alle **25 Minuten** um eins auffüllt.',
              'Die Zahl auf der Taste Rückgängig zählt beides, ein neues Brett zeigt bei vollem Vorrat also 6.',
              'Ist der Vorrat leer: Kauf fünf für 250 Münzen, sieh dir ein freiwilliges Video für zwei an oder warte.',
            ],
          },
        ],
      },
      {
        id: 'pause',
        title: 'Das Pausemenü',
        blocks: [
          {
            t: 'p',
            text: 'Tippe auf die rosa Taste **Pause** links in der Leiste (oder rechts, mit der Leiste für Linkshänder). Mit VoiceOver öffnet sie auch die Z-Geste mit zwei Fingern.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Töne, Musik, Haptik', text: 'Schalte jedes einzeln an oder aus, ohne das Brett zu verlassen.' },
              { term: 'Weiter', text: 'Zurück zum Brett.' },
              { term: 'Game Center', text: 'Deine Erfolge und Bestenlisten.' },
              { term: 'Neustart', text: 'Startet das Brett von vorn. **Vor deinem ersten Zug ist das gratis; nach einem Zug kostet es ein Leben**, weil es diesen Versuch beendet.' },
              { term: 'Beenden', text: 'Öffnet die Karte **Gehen?**.' },
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
            text: 'Vor deinem ersten Zug zu gehen ist immer gratis. Bist du gerade auf einer Siegesserie, sagt dir die Karte, dass sie beim Gehen endet.',
          },
        ],
      },
    ],
    related: ['lives-moves-and-undos', 'playing-a-board', 'shop-and-purchases', 'voiceover'],
  },

  {
    slug: 'lives-moves-and-undos',
    category: 'play',
    cover: 'wall',
    title: 'Leben, keine Züge mehr und Rückgängig',
    summary:
      'Wann ein Leben verbraucht wird und wann nicht, wie Leben zurückkommen, was der Bildschirm „Keine Züge mehr“ anbietet, die helfende Hand, der tägliche Gratisversuch und freiwillige Videos.',
    keywords: 'leben herzen auffüllen keine züge mehr weiterspielen aufgeben level verloren keine leben mehr unbegrenzt helfende hand gratisversuch video werbung belohnung',
    sections: [
      {
        id: 'lives',
        title: 'Leben',
        blocks: [
          {
            t: 'list',
            items: [
              'Du kannst bis zu **fünf Leben** haben (acht, solange dir der aktuelle Brick Pass gehört). Alle **30 Minuten** kommt eins zurück, auch wenn das Spiel geschlossen ist.',
              'Zum Öffnen eines Bretts brauchst du ein Leben, aber es **wird nicht verbraucht**. Ein Leben geht nur verloren, wenn du einen Versuch **verlierst**.',
              '**Ein Sieg kostet nie ein Leben.** Gehen oder Neustarten vor deinem ersten Zug ebenso wenig.',
            ],
          },
          {
            t: 'table',
            caption: 'Wann ein Leben verbraucht wird',
            head: ['Du …', 'Leben verbraucht?'],
            rows: [
              ['schaffst das Brett', 'Nein'],
              ['hast keine Züge mehr und gibst auf (oder schließt den Bildschirm „Keine Züge mehr“)', 'Ja'],
              ['startest neu oder gehst **nach** einem Zug', 'Ja, die Karte sagt es dir vorher'],
              ['startest neu oder gehst **vor** deinem ersten Zug', 'Nein'],
              ['spielst mit mehr Zügen weiter', 'Nein: Es ist derselbe Versuch'],
              ['erreichst ein Brett, auf dem sich nichts bewegen kann, mit übrigen Zügen', 'Nein'],
              ['verlierst bei deinem täglichen Gratisversuch oder mit unbegrenzten Leben', 'Nein'],
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'Keine Züge mehr',
        blocks: [
          {
            t: 'shot',
            id: 'wall',
            alt: 'Der Bildschirm Keine Züge mehr mit den Zielen, die noch fehlen, einer Taste für 5 weitere Züge für 300 Münzen, einer Taste Ansehen für 2 weitere Züge und Aufgeben.',
            caption: 'Keine Züge mehr: was dir noch fehlt und welche Möglichkeiten du hast.',
          },
          { t: 'p', text: 'Gehen dir die Züge aus, bevor die Ziele erreicht sind, siehst du, was noch fehlt, und kannst wählen:' },
          {
            t: 'table',
            head: ['In diesem Versuch weiterspielen', 'Kosten', 'Du bekommst'],
            rows: [
              ['Beim ersten Mal', '300 Münzen', '+5 Züge'],
              ['Beim zweiten Mal', '500 Münzen', '+5 Züge und einen Tipp'],
              ['Ab dem dritten Mal', '900 Münzen', '+5 Züge und ein UFO'],
            ],
          },
          {
            t: 'list',
            items: [
              'Oder sieh dir ein **freiwilliges Video** an: +2 Züge, dann +1 Zug, dann ein Gratis-UFO.',
              'Hast du ein **+5 Züge** gespeichert, setz es hier ein.',
              'Auf einem Brett, das du schon oft versucht hast, bringt jedes Weiterspielen etwas mehr: einen Extrazug für jeden verlorenen Versuch nach dem dritten, bis zu +15.',
              '**Aufgeben** beendet den Versuch und kostet ein Leben. Der Hinweis unter der Taste sagt dir, ob dabei auch eine Siegesserie endet.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Vor Level 6 wird nichts Kostenpflichtiges angeboten. Die Preise beginnen bei jedem neuen Versuch von vorn.',
          },
        ],
      },
      {
        id: 'level-failed',
        title: 'Level verloren und neu versuchen',
        blocks: [
          {
            t: 'p',
            text: 'Nach dem Aufgeben siehst du **Level verloren**, dazu, wie knapp es war („So knapp!“, „Fast geschafft!“ oder „Diesmal nicht“), und ob ein Leben verbraucht wurde. Wähle **Nochmal versuchen** oder **Zurück zur Karte**. Ab Level 6 kannst du den nächsten Versuch mit Vorsprung beginnen: eine Rakete auf dem Brett und ein Gratis-UFO, für 800 Münzen.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Eine helfende Hand',
            text: 'Hängst du an einem Brett fest? Ab deinem sechsten Versuch daran schenkt dir das Spiel vor dem Start **3 Extrazüge**: „Eine helfende Hand: 3 Züge mehr für diesen Versuch“. Einmal am Tag pro Brett.',
          },
          { t: 'shot', id: 'level-failed', alt: 'Level nicht geschafft: ein trauriger Freund, „Fast geschafft!“, die noch fehlenden Ziele (3 Sonnen- und 3 Wellensteine), ein gebrochenes Herz für ein verbrauchtes Leben, eine blaue Taste zum erneuten Versuch, ein freiwilliges Angebot und der Weg zurück zur Karte.', caption: 'Der Bildschirm zeigt, wie knapp es war.' },
        ],
      },
      {
        id: 'out-of-lives',
        title: 'Keine Leben mehr',
        blocks: [
          {
            t: 'list',
            items: [
              '**Ein Gratisversuch:** Einmal am Tag bekommst du ohne Leben vielleicht einen Gratisversuch an einem Brett. Gewinnst du, behältst du das Leben; verlierst du, kostet es nichts.',
              '**Warten:** Der Bildschirm zählt bis zu deinem nächsten Leben herunter.',
              '**Auffüllen:** ein voller Vorrat für 600 Münzen, eine gespeicherte Füllung, wenn du eine hast, oder ein freiwilliges Video für ein Leben.',
              '**Unbegrenzte Leben:** 1 Stunde (900 Münzen), 3 Stunden (2.000) oder 24 Stunden (6.000), oder für echtes Geld im Shop. Kaufst du mehr, während sie laufen, verlängert sich die Zeit.',
            ],
          },
          {
            t: 'p',
            text: 'Tippe jederzeit auf das Herz in der Kopfzeile der Reise, um deine Leben zu sehen und wann das nächste kommt.',
          },
          { t: 'shot', id: 'no-lives', alt: 'Keine Leben mehr: 0 von 5 Leben und ein Countdown bis zum nächsten, dann unbegrenzte Leben für 1, 3 oder 24 Stunden gegen Münzen oder Geld, eine Auffüllung für 600 Münzen, ein Video für ein Leben und OK. Unten steht, dass ein Leben nur verloren geht, wenn ein Brett verloren ist, dass alle 30 Minuten eines zurückkommt und ein leerer Vorrat einmal am Tag einen Gratisversuch bekommt.', caption: 'Keine Leben: warten, auffüllen oder weiterspielen.' },
        ],
      },
      {
        id: 'videos',
        title: 'Freiwillige Videos',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick hat **keine Zwangswerbung**: keine Banner, keine Werbung, die zwischen Brettern aufspringt. Videos laufen nur, wenn du eins für eine Belohnung auswählst, und nur ganz angesehene Videos zahlen aus. Es gibt acht Arten, insgesamt höchstens **39 am Tag**, und die Grenzen werden um Mitternacht zurückgesetzt.',
          },
          {
            t: 'table',
            head: ['Wo', 'Belohnung', 'Pro Tag'],
            rows: [
              ['Keine Leben mehr', '1 Leben', '8'],
              ['Kein Rückgängig mehr', '2 Rückgängig', '8'],
              ['Keine Züge mehr', '+2 Züge, dann +1, dann ein Gratis-UFO', '6'],
              ['Gewinnkarte', 'Die Münzen deines Siegs noch einmal (75 bis 300)', '4'],
              ['Steinrad', 'Eine zweite Drehung', '1'],
              ['Geschenkballon', 'Münzen oder 10 Minuten lang ein Gratis-Booster', '2'],
              ['Stein-Kino', 'Ein Preisfeld pro Video', '6'],
              ['Brettstart', 'Ein Tipp (derzeit nicht angezeigt)', '4'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Mit **Werbung entfernen** oder dem aktuellen **Brick Pass** steht auf denselben Belohnungen **Belohnung abholen**, und sie zahlen sofort aus, ganz ohne Video, innerhalb derselben Tagesgrenzen.',
          },
        ],
      },
    ],
    related: ['boosters-and-pause', 'shop-and-purchases', 'playing-a-board', 'rewards-and-events'],
  },
];
