import type { HelpArticle } from '../../model.ts';

/**
 * Häufige Fragen, die erste Woche, schwere Bretter und das Glossar, auf Deutsch. Geprüft mit
 * 5.1.1 (68). Jede Zahl zur Spielwirtschaft wiederholt eine aus play.ts, progress.ts oder
 * account.ts; ändere sie zuerst dort und dann hier.
 */
export const startMoreArticles: HelpArticle[] = [
  {
    slug: 'common-questions',
    category: 'start',
    cover: 'home',
    host: 'sprout',
    hostPose: 'think',
    title: 'Häufige Fragen, ehrlich beantwortet',
    summary:
      'Kurze, genaue Antworten auf die Fragen, die Spieler am häufigsten stellen: Timer, Leben, Werbung und Käufe, offline spielen, neue Telefone, Bedienungshilfen, Kinder und wie du einen Menschen erreichst.',
    keywords:
      'faq häufige fragen antworten timer uhr zeitlimit leben verloren warum helfende hand werbung bezahlen kostenlos gratis offline flugmodus kein internet neues handy neues iphone übertragen fortschritt kinder familie altersfreigabe blind sehbehindert farbenblind kontakt support mensch e-mail',
    sections: [
      {
        id: 'playing',
        title: 'Spielen',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Läuft in OutBrick eine Uhr?',
                a: 'Nein. In OutBrick gibt es **nirgends eine Uhr**: nicht auf einem Brett, nicht in einem Menü, nicht bei einem Event. Jedes Brett gibt dir eine Zahl von **Zügen**, und das ist die einzige Grenze. Lass dir für jeden Zug so viel Zeit, wie du willst.\n\nEin Tausch ohne Reihe springt zurück und **verbraucht keinen Zug**. Siehe [Keine Uhr, keine Eile](help:accessibility#no-timers).',
              },
              {
                q: 'Wie spiele ich ein Brett?',
                a: '**Schieb** einen Stein zu einem freien Feld oder in das Tor seiner eigenen Farbe, um ihn nach Hause zu schicken. **Tausch** einen Stein mit seinem Nachbarn, um eine Reihe aus drei oder mehr zu bilden und sie abzuräumen. Erreiche die Ziele im Feld oben, bevor dir die Züge ausgehen. Siehe [Willkommen bei OutBrick](help:welcome) und [Ein Brett spielen](help:playing-a-board).',
              },
              {
                q: 'Warum ist mein Tausch zurückgesprungen?',
                a: 'Ein Tausch bleibt nur, wenn er eine Reihe aus drei oder mehr oder ein 2×2-Quadrat bildet, zwei Spezialsteine zusammen auslöst oder eine Farbbombe einsetzt. Sonst springen die Steine zurück, du spürst zwei kurze Tipper, und es wird **kein Zug verbraucht**. Siehe [Tauschen und Kombinieren](help:playing-a-board#swap).',
              },
              {
                q: 'Kann ich auf einem Brett festsitzen?',
                a: 'Nein. Ist kein Zug möglich, wird das Brett unter einem Banner **Mischen!** kostenlos neu gemischt, ohne dass ein Zug oder ein Leben verbraucht wird. Ein Brett, das zwar noch Züge hat, mit denen sich deine Ziele aber nie erreichen lassen, wird still neu ausgeteilt, und übrige Steine werden umgefärbt, wenn einem Ziel Steine seiner Farbe fehlen. Siehe [Du kannst nie festsitzen](help:playing-a-board#never-stuck).',
              },
              {
                q: 'Wie bekomme ich drei Sterne?',
                a: 'Sterne richten sich nach deinen **Punkten**. Jedes geschaffte Brett bringt mindestens einen Stern; mehr Punkte bringen zwei oder drei, und die Sternleiste in der Kopfzeile zeigt, wie nah du dran bist. Jeder Zug, der am Ende übrig ist, wird zu einem Linienstein, der 150 Punkte bringt, früh fertig zu werden hilft also. Spiel jedes geschaffte Brett über die Reise noch einmal, um seine Sterne zu verbessern. Siehe [Punkte, Sterne und der Bonus am Ende](help:playing-a-board#stars).',
              },
              {
                q: 'Was bedeuten Schwer, Sehr schwer, Boss und Nacht?',
                a: 'Das sind Stufen, angezeigt auf einem Schild unter der Kopfzeile. Schwere Bretter verlangen etwa 15 % mehr, sehr schwere etwa 30 % mehr und ein Boss (das letzte Brett eines Kapitels, ab Level 40) etwa 40 % mehr. Ein Nachtbrett spielt nach Einbruch der Dunkelheit und spielt sich wie ein schweres Brett. Schwerere Stufen bringen mehr Münzen. Siehe [So schaffst du ein schweres Brett](help:hard-boards#tiers).',
              },
              {
                q: 'Ist OutBrick für Kinder geeignet?',
                a: 'OutBrick ist im App Store **ab 4 Jahren** (4+) freigegeben: abstrakte Steinbretter, freundliche Figuren, kein Chat und nichts, was andere im Spiel schreiben. Videos laufen nur, wenn jemand eins für eine Belohnung auswählt, und Käufe laufen über Apple, so können Bildschirmzeit und Kaufanfrage deine Zustimmung verlangen. Die Community-Website, die das Spiel in Safari öffnet, ist für Menschen ab 16 Jahren. Siehe [die Altersfreigabe](/age-rating) und [Ein Leitfaden für Eltern](help:parents-guide).',
              },
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'Leben und Züge',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Warum habe ich ein Leben verloren?',
                a: 'Ein Leben wird nur verbraucht, wenn du einen Versuch an einem Brett **verlierst**. Das passiert auf drei Arten:\n\n**1.** Dir gehen die Züge aus, und du wählst **Aufgeben** (oder schließt den Bildschirm „Keine Züge mehr“). **2.** Du **verlässt** ein Brett, nachdem du einen Zug gemacht hast. **3.** Du **startest** nach einem Zug über die Pause **neu**.\n\nDas Spiel sagt es dir immer vorher: Die Karte **Gehen?** und die Tasten Neustart und Aufgeben zeigen an, wann ein Leben verbraucht wird. Siehe [Wann ein Leben verbraucht wird](help:lives-moves-and-undos#lives).',
              },
              {
                q: 'Kostet ein Sieg oder der Start eines Bretts ein Leben?',
                a: 'Nein. Zum Öffnen eines Bretts brauchst du ein Leben, aber es **wird nicht verbraucht**, und **ein Sieg kostet nie ein Leben**. Gehen oder Neustarten vor deinem ersten Zug ist ebenfalls gratis, und auch Weiterspielen mit mehr Zügen, weil es derselbe Versuch ist.',
              },
              {
                q: 'Wie schnell kommen Leben zurück?',
                a: 'Alle **30 Minuten** eins, auch wenn das Spiel geschlossen ist, bis zu **fünf** (acht, solange dir der aktuelle Brick Pass gehört). Tippe auf das Herz in der Kopfzeile der Reise, um zu sehen, wann das nächste kommt.',
              },
              {
                q: 'Was ist die helfende Hand?',
                a: 'Besiegt dich ein Brett immer wieder, hilft dir das Spiel: Ab deinem **sechsten Versuch** am selben Brett startest du mit **3 Extrazügen**, und auf dem Brett steht „Eine helfende Hand: 3 Züge mehr für diesen Versuch“. Sie kommt einmal am Tag pro Brett und kostet nichts. Siehe [Level verloren und neu versuchen](help:lives-moves-and-undos#level-failed).',
              },
              {
                q: 'Was passiert, wenn mir die Züge ausgehen?',
                a: 'Du siehst, was noch fehlt, und kannst im selben Versuch weiterspielen: +5 Züge für 300 Münzen, dann 500 (mit einem Tipp), dann 900 (mit einem UFO), oder ein freiwilliges Video für +2 Züge, dann +1, dann ein Gratis-UFO. Oder du wählst **Aufgeben**, was ein Leben kostet. Vor Level 6 wird nichts Kostenpflichtiges angeboten. Siehe [Keine Züge mehr](help:lives-moves-and-undos#out-of-moves).',
              },
              {
                q: 'Ist Rückgängig gratis?',
                a: 'Das **erste Rückgängig auf jedem Brett ist gratis**. Danach kommen sie aus einem Vorrat von bis zu fünf, der sich alle 25 Minuten um eins auffüllt. Siehe [Rückgängig](help:boosters-and-pause#undo).',
              },
              {
                q: 'Ich habe keine Leben mehr. Kann ich trotzdem spielen?',
                a: 'Einmal am Tag bekommt ein leerer Vorrat vielleicht **einen Gratisversuch** an einem Brett: Gewinnst du, behältst du das Leben; verlierst du, kostet es nichts. Sonst warte auf das nächste Leben, füll mit Münzen oder einer gespeicherten Füllung auf oder sieh dir ein freiwilliges Video für ein Leben an. Siehe [Keine Leben mehr](help:lives-moves-and-undos#out-of-lives).',
              },
            ],
          },
        ],
      },
      {
        id: 'purchases-ads',
        title: 'Käufe und Werbung',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Muss ich Werbung ansehen oder bezahlen?',
                a: 'Nein. Jedes Brett lässt sich spielen, ohne Geld auszugeben oder etwas anzusehen: Leben kommen von selbst zurück, und jeder Versuch bringt einen Tipp, eine Rakete und ein UFO gratis. Videos und Käufe sind freiwillige Extras.',
              },
              {
                q: 'Gibt es Werbung zwischen den Brettern?',
                a: 'Nein. OutBrick hat **keine Zwangswerbung**: keine Banner und keine Werbung, die aufspringt. Ein Video läuft nur, wenn du eins für eine Belohnung auswählst, nur ein bis zum Ende angesehenes Video zahlt aus, und über alle acht Arten hinweg gilt eine Grenze von **39 am Tag**. Siehe [Freiwillige Videos](help:lives-moves-and-undos#videos) und [Belohnungen und Werbung](help:rewards-and-ads).',
              },
              {
                q: 'Was macht Werbung entfernen?',
                a: 'Es nimmt alle freiwilligen Videos weg, behält aber die Belohnungen: Auf Tasten, auf denen Ansehen stand, steht **Belohnung abholen**, und sie zahlen sofort aus, innerhalb derselben Tagesgrenzen. Gehört dir der aktuelle Brick Pass, gilt dasselbe für diese Saison. Siehe [Werbung entfernen und der Brick Pass](help:shop-and-purchases#remove-ads).',
              },
              {
                q: 'Ist irgendetwas ein Abo?',
                a: 'Nein. Jeder Pass und jeder zeitlich begrenzte Artikel ist ein einmaliger Kauf, und **nichts verlängert sich von selbst**. Die Preise zeigt der App Store in deiner eigenen Währung an.',
              },
              {
                q: 'Etwas, das ich gekauft habe, fehlt. Was tue ich?',
                a: 'Öffne den **Shop**, scrolle ganz nach unten und tippe auf **Wiederherstellen**. Münzen, Booster und Leben reisen mit deinem Fortschritt über iCloud, nicht über den App Store. Fehlt es immer noch? Schreib uns privat über das [Kontaktformular](/contact). Siehe [Fortschritt oder Kauf fehlt](help:lost-progress-and-purchases).',
              },
              {
                q: 'Wie bekomme ich eine Rückerstattung?',
                a: 'Käufe laufen über Apple, deshalb kümmert sich Apple um Rückerstattungen. Wie du darum bittest, steht auf [unserer Seite zu Rückerstattungen](/refunds).',
              },
            ],
          },
        ],
      },
      {
        id: 'progress',
        title: 'Fortschritt und Geräte',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Funktioniert OutBrick offline?',
                a: 'Ja. **Jedes Brett lässt sich offline spielen**, ein Tunnel oder ein Flug hält dich also nicht auf. Ein paar Dinge brauchen eine Verbindung: freiwillige Videos, Käufe und **Wiederherstellen**, der Tab Ränge, Rennen und Game Center. Dein Fortschritt liegt auf deinem Gerät und in deinem iCloud und wird abgeglichen, sobald du wieder online bist.',
              },
              {
                q: 'Verliere ich meinen Fortschritt, wenn ich das Telefon wechsle?',
                a: 'Nicht, wenn du iCloud nutzt. Der Fortschritt wird in deinem eigenen iCloud-Konto gesichert, ein neues iPhone oder iPad mit **demselben Apple Account** übernimmt also dein Level, Sterne, Münzen, Booster, Serien, Sammlung und Garderobe. Tippe danach im Shop auf **Wiederherstellen**. War das alte Gerät nie bei iCloud angemeldet, melde dich dort an und öffne OutBrick einmal, bevor du wechselst. Siehe [Umzug auf ein neues iPhone oder iPad](help:progress-privacy-and-account#new-device).',
              },
              {
                q: 'Brauche ich ein OutBrick-Konto?',
                a: 'Nein. Es gibt kein OutBrick-Konto anzulegen: Das Spiel nutzt dein iCloud. Die Community-Website hat ihre eigene, freiwillige Anmeldung, getrennt vom Spiel.',
              },
              {
                q: 'Kann ich auf iPhone und iPad spielen?',
                a: 'Ja. Mit demselben Apple Account teilen sich beide Geräte über iCloud einen Spielstand. Sind sie unterschiedlicher Meinung, wird nichts überschrieben: Das höhere Level und die höheren Zahlen bleiben, und Sammlungen werden zusammengeführt. Toneinstellungen und die meisten Bedienungshilfen für das Brett bleiben auf jedem Gerät für sich; deine Wahl bei Farbenblind folgt dir.',
              },
              {
                q: 'Wie fange ich wieder bei Level 1 an?',
                a: '**Einstellungen › Daten löschen**, ganz unten im Tab Spiel, setzt deinen Fortschritt zurück und bittet iCloud, deinen Spielstand zu löschen. Das lässt sich nicht rückgängig machen. Siehe [Deine Daten löschen](help:progress-privacy-and-account#delete).',
              },
            ],
          },
        ],
      },
      {
        id: 'accessibility',
        title: 'Bedienungshilfen',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Kann ich spielen, wenn ich blind oder sehbehindert bin?',
                a: 'Ja. Mit **VoiceOver** wird jedes Brett Feld für Feld vorgelesen, jedes Teil wird nach Art, Farbe und Zustand benannt, und du schiebst und tauschst mit Aktionen wie „Schieben nach links, hinaus durch das Tor: Rot“. Rotoren springen direkt zu Zielen, Spezialsteinen, Hindernissen und Toren, und Doppeltippen mit zwei Fingern gibt dir einen Gratis-Tipp. Bei Sehbehinderung probier das **Brett mit hohem Kontrast** und Größeren Text. Siehe [Mit VoiceOver spielen](help:voiceover) und [Sehen, Hören und Bewegung](help:vision-hearing-and-motion).\n\nIn 5.1 und 5.1.1 kann VoiceOver auf dem Brett seinen Platz verlieren; eine Korrektur ist unterwegs. Was du bis dahin tun kannst, steht unter [Bekannte Probleme](/support/known-issues).',
              },
              {
                q: 'Kann ich spielen, wenn ich farbenblind bin?',
                a: 'Ja. Die Symbole von **Farbenblind** sind vom allerersten Brett an eingeschaltet: Jede Farbe hat ihre eigene Form (Rot ein Kreis, Orange ein Dreieck, Gelb ein Quadrat, Grün eine Raute, Blau ein Plus, Lila ein Stern, Pink ein Balken, Türkis ein Sechseck), und Ziele und Tore tragen dieselbe Form. Siehe [Farbsymbole](help:vision-hearing-and-motion#colour-blind).',
              },
              {
                q: 'Kann ich mit Schaltern, meiner Stimme oder einer Tastatur spielen?',
                a: 'Ja. Jedes Brett lässt sich mit Sprachsteuerung („Tippe auf Rot 14“, dann „Tippe auf Links“), Schaltersteuerung oder den Pfeiltasten spielen. **Tausch bestätigen** lässt dich jeden Zug zweimal wählen, damit nichts aus Versehen gespielt wird. Siehe [Sprachsteuerung, Schaltersteuerung und Tastaturen](help:voice-control-switch-control-keyboard).',
              },
              {
                q: 'Muss ich etwas hören, um zu spielen?',
                a: 'Nein. Die Freunde sprechen in Sprechblasen, nicht mit Stimmen, und zu jedem Ton gibt es etwas Passendes auf dem Bildschirm. Mit Haptik spürst du, wie Züge landen. Siehe [Töne, Musik, Haptik und Reihenklang](help:vision-hearing-and-motion#sound).',
              },
              {
                q: 'Kann ich das Spiel langsamer machen?',
                a: 'Ja. **Einstellungen › Bedienungshilfen › Animationstempo** reicht von 50 % bis 200 %; bei 50 % dauert jeder Tausch, jeder Fall und jedes Verschwinden doppelt so lange. Da es nirgends eine Uhr gibt, bestimmst allein du das Tempo. Siehe [Ruhig spielen](help:playing-calmly).',
              },
            ],
          },
        ],
      },
      {
        id: 'team',
        title: 'Das Team',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Wie erreiche ich einen Menschen?',
                a: 'Öffne im Spiel **Einstellungen › Kontakt** oder nutz das [Kontaktformular](/contact) auf dieser Website. **Ein Mensch aus dem Team liest jede Nachricht**, und wir versuchen, innerhalb von zwei Werktagen zu antworten. Deine Nachricht bekommt eine Referenz (etwa OB-7K2QXM) und einen privaten Link, um sie zu verfolgen. Schick nie ein Passwort oder Kartendaten.',
              },
              {
                q: 'Wer macht OutBrick?',
                a: 'OutBrick ist ein kleines, unabhängiges Projekt. Mehr dazu auf [Über OutBrick](/about).',
              },
              {
                q: 'Wie melde ich einen Fehler?',
                a: 'Im Spiel öffnet **Einstellungen › Fehler melden** einen Bericht, in dem Gerät, Versionen und Level schon ausgefüllt sind, ohne deinen Namen oder dein Konto. Siehe [Einen guten Fehlerbericht schreiben](help:reporting-bugs), und sieh zuerst unter [Bekannte Probleme](/support/known-issues) nach: Vielleicht beheben wir es schon.',
              },
              {
                q: 'Wo kann ich andere Spieler um Hilfe bei einem Level bitten?',
                a: 'Nutz [Hilfe bei einem Level](/support/levels): Gib die Levelnummer ein, um zu sehen, was andere zu diesem Brett gesagt haben, oder frag sie. Siehe [Die OutBrick-Community nutzen](help:using-the-community).',
              },
              {
                q: 'Kann ich eine Idee vorschlagen oder Updates früh testen?',
                a: 'Ja. Schreib und stimm ab in [Ideen und Feedback](/community/c/ideas), und unter [Gestalte OutBrick mit](/support/get-involved) kannst du der Betagruppe oder dem Barrierefreiheits-Panel beitreten.',
              },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Noch keine Antwort?',
            text: 'Durchsuch das Hilfe-Center nach einem Wort aus deiner Frage oder frag in [Hilfe und Support](/community/c/help). Für alles Private, etwa einen Kauf, nutz das [Kontaktformular](/contact).',
          },
        ],
      },
    ],
    related: ['welcome', 'lives-moves-and-undos', 'troubleshooting', 'accessibility', 'parents-guide', 'lost-progress-and-purchases'],
  },

  {
    slug: 'first-week',
    category: 'start',
    cover: 'garden-teach',
    host: 'bloo',
    hostPose: 'cheer',
    title: 'Deine erste Woche in OutBrick',
    summary:
      'Wie eine typische erste Woche aussieht, Tag für Tag: die Gartenstadt und ihre Lernkarten, deine ersten Sterne und Dorfbelohnung, schwere Bretter, Clover Farm und die kleinen täglichen Gewohnheiten, die die Reise leichter machen.',
    keywords:
      'anfänger neu neuer spieler einsteiger erste tage woche leitfaden was erwartet mich gartenstadt garden city clover farm tutorial lernkarten täglicher stein serie missionen steinrad willkommensgeschenk booster sparen tipps',
    sections: [
      {
        id: 'pace',
        title: 'Bevor du anfängst',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick hat keine Uhr und nichts, was drängt. Die Woche unten ist ein **typischer Rhythmus, kein Zeitplan**: Manche schaffen die Gartenstadt an einem Nachmittag, andere brauchen eine Woche. Wenn du langsamer spielst, geht auf der Reise nichts verloren.',
          },
          {
            t: 'friend',
            friend: 'bloo',
            pose: 'cheer',
            title: 'Eine Idee nach der anderen',
            text: 'Das erste Dorf ist zum Lernen gebaut. Jedes Brett bringt höchstens eine neue Idee, und eine kurze Lernkarte mit einer Hand, die sich bewegt, zeigt sie beim ersten Mal. Tippe irgendwohin, um loszuspielen.',
          },
        ],
      },
      {
        id: 'week',
        title: 'Tag für Tag',
        blocks: [
          {
            t: 'path',
            items: [
              {
                day: 'Tag 1',
                title: 'Die Gartenstadt und deine ersten Bretter',
                text: 'Tippe auf dem Startbildschirm auf die grüne **Level**-Taste. Level 1 bringt dir bei, einen Stein durch sein Tor nach Hause zu schieben, Level 2, durch Tauschen Reihen zu bilden. Jeder Versuch bringt einen **Tipp**, eine **Rakete** und ein **UFO** gratis, und früh landet ein einmaliges **Willkommensgeschenk** mit je 2 davon in deiner Leiste. Dein erstes geschafftes Brett des Tages zahlt außerdem den **Täglichen Stein** aus: 100 Münzen, eingesammelt auf dem Startbildschirm.',
              },
              {
                day: 'Tag 2',
                title: 'Fallende Steine und deine ersten Hindernisse',
                text: 'Die Gartenstadt bringt immer neue Ideen: Bretter, auf denen Steine fallen und neue nachrücken, lange Steine, die ein Tor so breit wie sie selbst brauchen, dann Kisten, Eis, Schlösser, Moos und Statuen. Jedes bekommt seine eigene Lernkarte. Schaffst du heute wieder ein Brett, ist deine **Tagesserie** zwei Tage lang, und das **Steinrad** auf dem Startbildschirm schenkt dir jeden Tag eine Gratisdrehung.',
              },
              {
                day: 'Tag 3',
                title: 'Sterne und dein erstes Schild „Schwer“',
                text: 'Behalte beim Spielen die **Sternleiste** im Blick: Mehr Punkte bringen zwei oder drei Sterne, und jedes Dorf hält 36. Mit ihnen steigst du die Sternleiter des Dorfs hinauf (50 Münzen, ein Tipp, 100 Münzen und eine Rakete); ein Abzeichen auf der Karte zeigt, wenn eine Belohnung bereitliegt. Die letzten Bretter der Gartenstadt tragen ein Schild **Schwer**. Drei Tage in Folge bringen deine erste Serienbelohnung: 100 Münzen.',
              },
              {
                day: 'Tag 4',
                title: 'Ein Dorf geschafft, und Clover Farm',
                text: 'Schaffe alle zwölf Bretter der Gartenstadt, und eine Feierkarte bietet **Teilen** und **Weiter geht’s** an. Clover Farm, Level 13 bis 24, spielt dieselben zwölf Brettarten in derselben Reihenfolge, und die Ideen, die du gelernt hast, fangen an, sich zu verbinden. Gehen dir die Züge aus, bietet der Bildschirm „Keine Züge mehr“ Wege zum Weiterspielen an; vor Level 6 wird nichts Kostenpflichtiges angeboten.',
              },
              {
                day: 'Tag 5',
                title: 'Ränge und härtere Stufen',
                text: 'Der Tab **Ränge** öffnet sich ab Level 21. In den frühen Dörfern tauchen die ersten sehr schweren Bretter auf, und ab Level 40 ist das letzte Brett jedes Kapitels ein **Boss**. Schwerere Bretter bringen mehr Münzen. Lies [So schaffst du ein schweres Brett](help:hard-boards), wenn dich eins aufhält.',
              },
              {
                day: 'Tag 6',
                title: 'Neue Ideen kommen weiter dazu',
                text: 'Mit jedem Dorf kommen Deckel über **versiegelten Beeten** dazu, verdeckte **„?“-Steine**, vereiste Tore und Zähltore, Etappentore und Portale. Jedes bekommt eine Lernkarte, wenn es dir zum ersten Mal begegnet, und du kannst auf einem Brett auf jedes Hindernis und jeden Deckel tippen, um eine kurze Erinnerung zu sehen.',
              },
              {
                day: 'Tag 7',
                title: 'Eine Woche geschafft',
                text: 'Sieben Tage in Folge bringen **250 Münzen und einen Serienretter**, der später einen verpassten Tag zurückholen kann. Wöchentliche Missionen werden am Montag zurückgesetzt, und jedes neue Level, das du schaffst, hat dich im **Brick Pass** Stufe um Stufe nach oben gebracht. Tippe auf deinen Avatar, um deine bisherigen Statistiken zu sehen.',
              },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Die genauen Level hängen von deinem Tempo ab. Ränge (Level 21) und die Sammlung (Level 95) werden nach Level freigeschaltet, nicht nach Tagen, und manche Bretter in jedem Dorf sind absichtlich schwer.',
          },
        ],
      },
      {
        id: 'garden-city',
        title: 'Was die Gartenstadt dir beibringt',
        blocks: [
          {
            t: 'shot',
            id: 'garden-teach',
            alt: 'Ein Brett in der Gartenstadt mit roten, lila und orangefarbenen Steinen. Unten steht auf einer rosa Lernkarte: Schieb einen Stein neben zwei seiner Farbe, dann entsteht eine Reihe – oder wisch ihn in einen Nachbarn, um zu tauschen. Reihen verschwinden! Darunter: Jetzt du – probier’s! Eine Hand zeigt auf einen Stein.',
            caption: 'Eine Lernkarte auf Level 2. Jede neue Idee bekommt eine Karte, wenn sie dir zum ersten Mal begegnet.',
          },
          {
            t: 'p',
            text: 'Die Gartenstadt (im Spiel „Garden City“) ist das erste Dorf: Level 1 bis 12, je eins der [zwölf Brettarten](help:bricks-specials-and-blockers#kinds). Jedes spätere Dorf folgt derselben Reihenfolge, was die Gartenstadt dir beibringt, zahlt sich also über 2.000 Level aus.',
          },
          {
            t: 'list',
            items: [
              '**Nach Hause schieben:** Ein Stein verlässt das Brett nur durch ein offenes Tor seiner eigenen Farbe. Jedes andere Tor ist eine Wand.',
              '**Tauschen:** Ein Tausch bleibt nur, wenn er eine Reihe aus drei oder mehr bildet; sonst springt er zurück und kostet nichts.',
              '**Torziele zählen auch Reihen:** Ein Ziel wie „Rot nach Hause schicken“ zählt die roten Steine, die du hinausschiebst, und die roten Steine, die du in Reihen abräumst.',
              '**Spezialsteine:** Vier in einer Reihe, eine L- oder T-Form, ein 2×2-Quadrat und fünf in einer Reihe ergeben jeweils einen anderen Spezialstein. Siehe [Spezialsteine](help:bricks-specials-and-blockers#specials).',
              '**Bretter mit fallenden Steinen:** Wo Steine fallen, kannst du seitwärts schieben oder geradewegs durch ein Tor hinaus.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Mit VoiceOver sind Lernkarten das Einzige auf dem Bildschirm, solange sie zu sehen sind: Doppeltippe, um zu spielen. Das erste Brett mit Toren, das du spielst, erzählt dir außerdem vom Rotor **Tore**.',
          },
        ],
      },
      {
        id: 'first-stars',
        title: 'Deine ersten Sterne und die erste Dorfbelohnung',
        blocks: [
          {
            t: 'list',
            items: [
              'Jedes geschaffte Brett bringt mindestens **einen Stern**. Übrige Züge werden zu Liniensteinen, die je 150 Punkte bringen, ein sauberes Finish macht also oft aus einem Stern zwei.',
              'Die Anzeige **Sterne** in der Kopfzeile der Reise zählt die Sterne dieses Dorfs. Tippe darauf, um die Sternbelohnungen zu sehen.',
              'Du kannst jedes geschaffte Brett über die Reise noch einmal spielen, um seine Sterne zu verbessern; das verschiebt deinen Platz auf der Karte nie.',
            ],
          },
          {
            t: 'shot',
            id: 'clear',
            alt: 'Die Gewinnkarte: ein goldenes Band mit „Raketengrat 4“, ein Abzeichen für das abgeschlossene Kapitel, drei goldene Sterne, ein jubelnder grüner Steinfreund, das Wort Brillant!, 5.470 Punkte, plus 125 Münzen, ein Hinweis Erster Versuch!, eine Zeile zur Reisetruhe sowie die Tasten Start, Weiter und Teilen.',
            caption: 'Die Gewinnkarte: deine Sterne, Punkte, Münzen und alle Belohnungen, die du unterwegs eingesammelt hast.',
          },
        ],
      },
      {
        id: 'habits',
        title: 'Gewohnheiten, die helfen',
        blocks: [
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'Jeden Tag ein bisschen bringt viel',
            text: 'Ein geschafftes Brett am Tag reicht, um den Täglichen Stein abzuholen und deine Serie wachsen zu lassen. Lange Spielrunden brauchst du nicht: OutBrick belohnt das Wiederkommen mehr als das Dranbleiben.',
          },
          {
            t: 'table',
            head: ['Gewohnheit', 'Warum sie hilft'],
            rows: [
              ['Ein Brett am Tag schaffen', 'Bringt den **Täglichen Stein** (100 Münzen) und lässt deine Tagesserie wachsen: 100 Münzen nach 3 Tagen, 250 und ein Serienretter nach 7.'],
              ['Das Steinrad drehen', 'Eine Gratisdrehung am Tag für Münzen oder einen Booster. Schaffst du an dem Tag drei neue Level, zahlt die Gratisdrehung doppelte Münzen.'],
              ['Missionen prüfen', 'Drei Aufgaben für heute und drei für die Woche, jede mit einer Belohnung. Tippe auf **Abholen** oder **Alle holen**.'],
              ['Sternbelohnungen abholen', 'Ein Abzeichen auf der Karte zeigt dir, wenn eine Sternbelohnung eines Dorfs wartet.'],
              ['Die Gratis-Booster nutzen', 'Den Gratis-Tipp, die Rakete und das UFO jedes Versuchs kannst du nicht aufheben, also nutz sie.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Missionen in 5.1.1',
            text: 'Manche Missionen zählen in 5.1 und 5.1.1 keinen Fortschritt auf Slide-&-Match-Brettern, und ein paar verlangen Dinge, die diese Bretter nicht bieten können. Deine Level, Sterne und Münzen sind nicht betroffen, und eine Korrektur ist unterwegs. Siehe [Bekannte Probleme](/support/known-issues).',
          },
        ],
      },
      {
        id: 'boosters',
        title: 'Booster für den richtigen Moment aufheben',
        blocks: [
          {
            t: 'list',
            items: [
              'Ein Hinweis **GRATIS** auf einem Booster bedeutet, dass der nächste Einsatz nichts kostet; das Spiel verbraucht Gratis-Booster vor denen, die dir gehören.',
              'Booster, die dir gehören (aus dem Willkommensgeschenk, vom Steinrad, aus Sternbelohnungen, Missionen und dem Brick Pass), bleiben, bis du sie einsetzt.',
              'Siegesserien bringen mehr für dein nächstes Brett: 2 Siege in Folge einen Tipp, 3 eine Rakete, 4 ein UFO und 5 alle drei. Es zählen nur neue Level.',
              'Heb Raketen und UFOs, die dir gehören, für schwere, sehr schwere und Boss-Bretter auf, wo ein einziges Hindernis an der falschen Stelle ein Brett kosten kann.',
            ],
          },
          { t: 'p', text: 'Mehr dazu in [Booster, Tipps und Pause](help:boosters-and-pause) und [So schaffst du ein schweres Brett](help:hard-boards#boosters).' },
        ],
      },
      {
        id: 'lives',
        title: 'Leben in deiner ersten Woche',
        blocks: [
          {
            t: 'p',
            text: 'Leben gehen nur verloren, wenn du einen Versuch verlierst, nie beim Gewinnen oder Öffnen eines Bretts. Bist du dir bei einem Brett unsicher, sieh es dir erst an: Vor deinem ersten Zug zu gehen ist immer gratis. Nach deinem dritten geschafften Brett fragt das Spiel einmal, ob es dir Erinnerungen schicken darf, etwa bei vollen Leben; **Jetzt nicht** wartet eine Woche. Siehe [Leben, keine Züge mehr und Rückgängig](help:lives-moves-and-undos).',
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
              '[Die Reise und ihre Dörfer](help:journey-and-villages), für Truhen, Geschenke und den Atlas aller Dörfer.',
              '[Belohnungen, Events und der Brick Pass](help:rewards-and-events), für Serien, Missionen und Events.',
              '[Das OutBrick-Glossar](help:glossary), wann immer dir ein Wort neu ist.',
            ],
          },
        ],
      },
    ],
    related: ['welcome', 'menus-tour', 'journey-and-villages', 'rewards-and-events', 'hard-boards', 'glossary'],
  },

  {
    slug: 'hard-boards',
    category: 'learn',
    cover: 'board-village',
    host: 'peach',
    hostPose: 'think',
    title: 'So schaffst du ein schweres Brett',
    summary:
      'Eine Profi-Methode für Bretter, die dich immer wieder besiegen: Ziele lesen, Züge zählen, zwischen Schieben und Kombinieren wählen, auf Brettern mit fallenden Steinen unten arbeiten, Spezialsteine für Kombos aufheben, Booster und Rückgängig klug einsetzen und wissen, wann sich Weiterspielen lohnt.',
    keywords:
      'strategie taktik tipps tricks festgefahren hängen schweres level schwierig nicht schaffen level schaffen sehr schwer boss nacht hilfe komplettlösung lösung plan züge kombos kaskaden kettenreaktion booster rückgängig weiterspielen helfende hand voiceover rotor',
    sections: [
      {
        id: 'before',
        title: 'Vor deinem ersten Zug',
        blocks: [
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'Erst schauen, dann ziehen',
            text: 'Die meisten schweren Bretter gehen in den ersten drei Zügen verloren, nicht in den letzten drei. Ein Brett zu öffnen kostet nichts, und vor deinem ersten Zug zu gehen ist immer gratis, also sieh dir alles in Ruhe an, bevor du irgendetwas berührst.',
          },
          {
            t: 'steps',
            items: [
              '**Lies jedes Ziel** im Auftragsfeld: welche Farben, wie viele und ob es Kisten, Schlösser oder Moos zu entfernen gibt. Ein Brett mit **Etappen** öffnet neue Tore, wenn die ersten Ziele erreicht sind.',
              '**Zähl deine Züge** gegen die Ziele. Zwanzig Züge für zwanzig rote Steine heißt, dass Schieben Stein für Stein nicht reicht: Du brauchst Reihen.',
              '**Finde die Tore.** Merk dir Farbe und Breite jedes Tors und ob es vereist ist, zählt oder bis zu einer späteren Etappe versiegelt bleibt.',
              '**Erkenne, was festsitzt:** Steine unter einem Deckel, im Eis oder hinter einem Schloss können sich noch nicht bewegen. Tippe auf ein Hindernis oder einen Deckel, um eine kurze Erinnerung zu sehen, wie es sich öffnet.',
              '**Prüf, ob Steine fallen.** Wenn ja, rücken vielleicht neue nach, und jede Reihe verändert, was über ihr liegt.',
            ],
          },
        ],
      },
      {
        id: 'slide-or-match',
        title: 'Schieben oder Kombinieren: Setz jeden Zug dort ein, wo er am meisten zählt',
        blocks: [
          {
            t: 'p',
            text: 'Ein Torziel wie „12 Rot nach Hause schicken“ zählt **sowohl** die roten Steine, die du durch das rote Tor hinausschiebst, **als auch** die roten Steine, die du in Reihen abräumst. Das ändert die Rechnung:',
          },
          {
            t: 'table',
            head: ['Zug', 'Zielsteine pro Zug', 'Am besten für'],
            rows: [
              ['Einen Stein nach Hause schieben', '1', 'Einen einzelnen Stein mit freier Bahn oder die letzten ein, zwei Steine eines Ziels.'],
              ['Einen langen oder großen Stein nach Hause schieben', 'Einen pro Feld, das er bedeckt', 'Lange und große Steine zählen jedes Feld, ein 2×2 bringt also vier in einem Zug.'],
              ['Tauschen für eine Dreierreihe', '3', 'Den Großteil des Bretts, die meiste Zeit.'],
              ['Eine Reihe aus 4 oder 5 oder eine Form', '4 oder mehr, plus ein Spezialstein', 'Spezialsteine bauen, die später viel mehr abräumen.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['Y . . G', 'R+ B R R', '. . Y .'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 0, dir: 'right', kind: 'swap' }],
              after: { rows: ['Y . . G', 'B . . .', '. . Y .'] },
              caption: 'Ein Tausch, drei rote Zielsteine. Der Stein vor dem roten Tor geht durch das Tor hinaus.',
              alt: 'Ein Brett mit drei Reihen und vier Spalten, auf dem nichts fällt, mit einem roten Tor am rechten Rand der mittleren Reihe. Obere Reihe: Gelb, leer, leer, Grün. Mittlere Reihe: Rot (hervorgehoben), Blau, Rot, Rot. Untere Reihe: leer, leer, Gelb, leer. Der hervorgehobene rote Stein tauscht nach rechts mit dem blauen Stein und bildet eine Reihe aus drei roten Steinen. Nach dem Zug sind die drei roten Steine weg, der neben dem roten Tor verlässt das Brett durch das Tor, und der blaue Stein liegt links in der mittleren Reihe. Alle drei zählen für ein rotes Ziel.',
            },
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Ein Stein, der direkt vor seinem eigenen Tor kombiniert oder gesprengt wird, verlässt das Brett durch dieses Tor. Bei einem **Zähltor** ist das wichtig: Nur Steine, die hindurchgehen, verbrauchen seine Plätze, also wähle, welche du schickst.',
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Hindernisse befreien und Tore öffnen',
        blocks: [
          {
            t: 'p',
            text: 'Nicht alle Hindernisse öffnen sich auf dieselbe Art. Die richtige Art von Reihe spart Züge:',
          },
          {
            t: 'board',
            board: {
              rows: ['x2 . . .', 'R R B R+'],
              moves: [{ row: 1, col: 3, dir: 'left', kind: 'swap' }],
              after: { rows: ['x . . .', '. . . B'] },
              caption: 'Eine Reihe neben einer Kiste bricht eine Schicht.',
              alt: 'Ein Brett mit zwei Reihen und vier Spalten, auf dem nichts fällt. Obere Reihe: eine Kiste mit 2 Schichten, dann drei leere Felder. Untere Reihe: Rot, Rot, Blau, Rot (hervorgehoben). Der hervorgehobene rote Stein tauscht nach links mit dem blauen Stein und bildet unter der Kiste eine Reihe aus drei roten Steinen. Nach dem Zug sind die roten Steine weg, die Kiste hat noch 1 Schicht, und der blaue Stein liegt rechts in der unteren Reihe.',
            },
          },
          {
            t: 'board',
            board: {
              rows: ['. . . .', 'R R! B R+'],
              moves: [{ row: 1, col: 3, dir: 'left', kind: 'swap' }],
              after: { rows: ['. . . .', '. R . B'] },
              caption: 'Ein Schloss öffnet sich nur für eine Reihe durch es hindurch. Der befreite Stein bleibt.',
              alt: 'Ein Brett mit zwei Reihen und vier Spalten, auf dem nichts fällt. Obere Reihe leer. Untere Reihe: Rot, ein gesperrter roter Stein, Blau, Rot (hervorgehoben). Der hervorgehobene rote Stein tauscht nach links mit dem blauen Stein, sodass die Reihe aus drei roten Steinen durch den gesperrten verläuft. Nach dem Zug sind die zwei nicht gesperrten roten Steine weg, das Schloss ist weg, und sein roter Stein bleibt an seinem Platz, jetzt frei beweglich; der blaue Stein liegt rechts in der unteren Reihe.',
            },
          },
          {
            t: 'table',
            head: ['Hindernis', 'Was es öffnet', 'Taktik'],
            rows: [
              ['Kiste', 'Eine Reihe daneben, eine Schicht pro Reihe.', 'Bilde zuerst Reihen neben Kisten, die die Bahn zu einem Tor versperren.'],
              ['Eis', 'Eine Reihe daneben.', 'Befrei vereiste Zielsteine früh; bis dahin können sie sich nicht bewegen.'],
              ['Schloss', 'Eine Reihe **durch** es hindurch.', 'Bau die Reihe um den gesperrten Stein herum; eine Reihe daneben bewirkt nichts.'],
              ['Moos', 'Eine Reihe daneben.', 'Moos kriecht nach jedem Zug weiter, der kein Moos abräumt, also räum es laufend ab und lass es sich nicht ausbreiten.'],
              ['Statue', 'Nichts: Sie bleibt.', 'Plane deine Bahnen um sie herum.'],
              ['Deckel', 'Seine eigene Regel: eine Zahl, eine Farbe, eine Schlüsselreihe, eine Zahl von Zügen oder ein Schlüsselstein.', 'Lies den Deckel vor dem ersten Zug; siehe [Versiegelte Beete und ihre Deckel](help:bricks-specials-and-blockers#lids).'],
            ],
          },
          {
            t: 'p',
            text: 'Jedes Hindernis, jeder Deckel und jedes Tor im Detail: [Alle Hindernisse, Deckel und Tore erklärt](help:blockers-encyclopedia).',
          },
          { t: 'h3', text: 'Vereiste Tore, Zähltore und Etappentore' },
          {
            t: 'list',
            items: [
              '**Vereistes Tor:** taut jedes Mal ein wenig, wenn irgendein Stein durch irgendein Tor nach Hause geht, und wenn Teile davor verschwinden. Schick früh andere Farben nach Hause, um es schneller zu öffnen.',
              '**Zähltor:** nimmt nur eine bestimmte Zahl von Steinen und schließt sich dann für immer. Verschwende seine Plätze nicht an Steine, die stattdessen eine Reihe abräumen könnte.',
              '**Etappentor:** bleibt versiegelt, bis die zweite Etappe der Ziele beginnt. Verbrauch in Etappe eins keine Züge, um Steine dafür aufzureihen.',
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['. . . .', 'B . . R+', '. . . .'],
              gates: [
                { side: 'left', at: 1, colour: 'B', kind: 'iced' },
                { side: 'right', at: 1, colour: 'R' },
              ],
              moves: [{ row: 1, col: 3, dir: 'right' }],
              after: {
                rows: ['. . . .', 'B . . .', '. . . .'],
                gates: [
                  { side: 'left', at: 1, colour: 'B' },
                  { side: 'right', at: 1, colour: 'R' },
                ],
              },
              caption: 'Hier braucht das vereiste blaue Tor noch einen Stein, der nach Hause geht, durch irgendein Tor.',
              alt: 'Ein Brett mit drei Reihen und vier Spalten. Am linken Rand der mittleren Reihe liegt ein vereistes blaues Tor, am rechten Rand der mittleren Reihe ein offenes rotes Tor. In der mittleren Reihe liegt links ein blauer Stein und rechts ein roter Stein (hervorgehoben). Der rote Stein gleitet nach rechts, durch das rote Tor hinaus. Nach dem Zug ist der rote Stein weg, und das blaue Tor ist aufgetaut und offen, sodass der blaue Stein jetzt nach links hineingleiten kann.',
            },
          },
        ],
      },
      {
        id: 'falling',
        title: 'Bretter mit fallenden Steinen: unten arbeiten',
        blocks: [
          {
            t: 'p',
            text: 'Auf Brettern, auf denen Steine fallen, bewegt eine Reihe weit unten alles, was über ihr liegt, und der Fall kann von selbst eine weitere Reihe bilden: eine **Kaskade**, die keinen zusätzlichen Zug kostet. Eine Reihe weit oben bewegt fast nichts. Bei sonst gleichen Möglichkeiten gilt also: **Arbeite von unten nach oben**.',
          },
          {
            t: 'board',
            board: {
              rows: ['R . .', 'G . .', 'Y+ G .', 'G R R'],
              moves: [{ row: 2, col: 0, dir: 'right', kind: 'swap' }],
              after: { rows: ['. . .', '. . .', '. . .', '. Y .'] },
              caption: 'Ein Tausch, zwei Reihen: Die grüne Reihe verschwindet, der rote Stein fällt, und die rote Reihe verschwindet auch.',
              alt: 'Ein Brett mit vier Reihen und drei Spalten, auf dem Steine fallen, aber keine neuen nachkommen. Linke Spalte von oben: Rot, Grün, Gelb (hervorgehoben), Grün. Mittlere Spalte: leer, leer, Grün, Rot. Rechte Spalte: leer, leer, leer, Rot. Der hervorgehobene gelbe Stein tauscht nach rechts mit dem grünen Stein daneben und bildet links eine Spalte aus drei grünen Steinen. Sie verschwinden, der rote Stein oben fällt in die untere Reihe neben die zwei roten Steine dort, und diese Reihe aus drei roten Steinen verschwindet ebenfalls. Der gelbe Stein fällt in die untere Reihe und ist alles, was übrig bleibt.',
            },
          },
          {
            t: 'list',
            items: [
              'Auf Brettern mit fallenden Steinen kannst du seitwärts in eine Lücke schieben oder geradewegs durch ein Tor hinaus. Nutz das Schieben, um Reihen vorzubereiten, die ein Fall vollendet.',
              'Wo neue Steine nachrücken, ist der obere Teil des Bretts unbekannt; den unteren kannst du planen.',
              'Auf den Brettern **Eckstücke** und **Stilles Rätsel** fallen Steine, aber es kommen keine neuen, jeder Stein ist also alles, was du bekommst. Zähl vor dem Start die Steine jeder Zielfarbe.',
            ],
          },
        ],
      },
      {
        id: 'specials',
        title: 'Spezialsteine: erst bauen, dann für eine Kombo aufheben',
        blocks: [
          {
            t: 'table',
            head: ['Bauen', 'Spezialstein', 'Am besten für'],
            rows: [
              ['Vier in einer Reihe', 'Linienstein', 'Räumt eine ganze Reihe oder Spalte, in der Richtung, in die du gezogen hast. Richte ihn auf eine Reihe voller Zielsteine oder Kisten.'],
              ['Eine L-, T- oder +-Form', 'Bombe', 'Sprengt das 3×3-Quadrat um sich herum, zweimal. Gut gegen Gruppen von Hindernissen.'],
              ['Ein 2×2-Quadrat', 'Zielpfeil', 'Fliegt zu einem Teil, das ein Ziel braucht. Gut für das letzte hartnäckige Zielteil.'],
              ['Fünf in einer Reihe', 'Farbbombe', 'Tausch sie mit einer Farbe, um jeden normalen Stein dieser Farbe zu nehmen.'],
            ],
          },
          {
            t: 'p',
            text: 'Ein einzeln ausgelöster Spezialstein ist gut; zwei miteinander getauschte sind viel besser. Liegen zwei Spezialsteine nah beieinander, versuch, sie nebeneinanderzubringen und miteinander zu tauschen, statt jeden einzeln anzutippen:',
          },
          {
            t: 'board',
            board: {
              rows: ['G Y . B', 'R- Bb+ . Y', 'Y G B R'],
              moves: [{ row: 1, col: 1, dir: 'left', kind: 'swap' }],
              caption: 'Ein Linienstein und eine Bombe nebeneinander: Tausch sie miteinander für ein Kreuz, drei Bahnen breit.',
              alt: 'Ein Brett mit drei Reihen und vier Spalten. Obere Reihe: Grün, Gelb, leer, Blau. Mittlere Reihe: ein roter Linienstein, der waagerecht feuert, eine blaue Bombe (hervorgehoben), leer, Gelb. Untere Reihe: Gelb, Grün, Blau, Rot. Ein Pfeil zeigt, wie die blaue Bombe nach links mit dem roten Linienstein tauscht. Miteinander getauscht, feuern sie als Kreuz, drei Reihen und drei Spalten breit.',
            },
          },
          {
            t: 'table',
            caption: 'Kombos, von gut bis am besten',
            head: ['Miteinander tauschen', 'Ergebnis'],
            rows: [
              ['Linienstein + Linienstein', 'Ein Kreuz: eine Reihe und eine Spalte.'],
              ['Linienstein + Bombe', 'Ein Kreuz, drei Bahnen breit.'],
              ['Bombe + Bombe', 'Eine Explosion von 5×5.'],
              ['Zielpfeil + beliebiger Spezialstein', 'Der Zielpfeil trägt den Spezialstein zu seinem Ziel.'],
              ['Farbbombe + beliebiger Spezialstein', 'Jeder Stein dieser Farbe wird zu diesem Spezialstein, und alle gehen hoch.'],
              ['Farbbombe + Farbbombe', 'Das ganze Brett.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Einen Spezialstein dort auszulösen, wo er steht, verbraucht einen Zug, ein Kombo-Tausch ebenso, eine Kombo bringt also die Wirkung von zwei Spezialsteinen für einen einzigen Zug. Mehr dazu in [Spezialsteine und Kombos: die komplette Anleitung](help:special-bricks-and-combos).',
          },
        ],
      },
      {
        id: 'boosters',
        title: 'Gratis-Booster und das Gratis-Rückgängig',
        blocks: [
          {
            t: 'p',
            text: 'Jeder Versuch bringt **einen Tipp, eine Rakete und ein UFO gratis**. Sie lassen sich nicht für später aufheben; ein Brett, auf dem du sie nie angerührt hast, hast du also mit einer Hand auf dem Rücken gespielt.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Tipp', text: 'Zeigt und sagt den besten Zug. Nutz ihn früh auf einem unbekannten Brett, um zu lernen, was das Brett will, nicht nur, wenn du festhängst.' },
              { term: 'Rakete', text: 'Macht aus einem normalen Stein einen Linienstein, der seine Reihe entlang feuert. Wähle eine Reihe mit mehreren Zielsteinen oder Hindernissen, auf einem Brett mit fallenden Steinen am besten weit unten.' },
              { term: 'UFO', text: 'Beamt eine Schicht von einem Teil weg: eine Kistenschicht, Eis, ein Schloss, Moos oder einen Stein. Am besten auf dem einzelnen Hindernis, das einen Zielstein oder die Bahn zu einem Tor versperrt.' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Booster können keine geformten Steine auswählen und nichts, was unter einem Deckel liegt. Booster, die dir gehören, bleiben, also heb sie für schwere, sehr schwere und Boss-Bretter auf. Siehe [Booster, Tipps und Pause](help:boosters-and-pause).',
          },
          { t: 'h3', text: 'Rückgängig als Blick nach vorn' },
          {
            t: 'list',
            items: [
              'Das **erste Rückgängig auf jedem Brett ist gratis**. Nutz es als kostenlosen Blick: Probier den Zug, bei dem du unsicher bist, und nimm ihn zurück, wenn er schlecht ausgeht.',
              'Rückgängig stellt das Brett genau so wieder her, wie es vor deinem Zug war, und gibt dir den Zug zurück.',
              'Nach dem Gratis-Rückgängig kommen weitere aus einem Vorrat von bis zu fünf, der sich alle 25 Minuten um eins auffüllt. Heb sie fürs Ende eines Bretts auf, wo ein verschwendeter Zug den Unterschied macht.',
              '**Rückgängig ist billiger als Neustart.** Ein Neustart nach einem Zug beendet den Versuch und kostet ein Leben; ein Rückgängig nie.',
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'Wann sich Weiterspielen lohnt, und ein neuer Versuch',
        blocks: [
          {
            t: 'shot',
            id: 'wall',
            alt: 'Der Bildschirm Keine Züge mehr mit den Zielen, die noch fehlen, einer Taste für 5 weitere Züge für 300 Münzen, einer Taste Ansehen für 2 weitere Züge und Aufgeben.',
            caption: 'Keine Züge mehr: was dir noch fehlt und welche Möglichkeiten du hast.',
          },
          {
            t: 'p',
            text: 'Der Bildschirm „Keine Züge mehr“ zeigt genau, was noch fehlt. Lies es, bevor du wählst. Weiterspielen hält diesen Versuch am Leben und **kostet deshalb nie ein Leben**; Aufgeben kostet eins, und ein Leben kommt nach 30 Minuten zurück.',
          },
          {
            t: 'table',
            head: ['Was noch fehlt', 'Eine vernünftige Wahl'],
            rows: [
              ['Ein, zwei Zielteile in leichter Reichweite', 'Weiterspielen: ein Gratis-Video (+2 Züge), ein gespeichertes **+5 Züge** oder das erste Weiterspielen mit Münzen (300 Münzen, +5 Züge).'],
              ['Ein paar Teile, aber ein Hindernis im Weg', 'Das zweite Weiterspielen (500 Münzen) bringt einen Tipp dazu, das dritte (900) ein UFO für dieses Hindernis.'],
              ['Der Großteil eines Ziels', 'Lass es gut sein. Der Versuch hat dir das Brett gezeigt; dein nächster beginnt frisch.'],
            ],
          },
          {
            t: 'list',
            items: [
              'Der Preis steigt innerhalb eines Versuchs von 300 → 500 → 900 und beginnt bei jedem neuen Versuch von vorn.',
              'Auf einem Brett, das du schon oft versucht hast, bringt jedes Weiterspielen einen Extrazug für jeden verlorenen Versuch nach dem dritten, bis zu +15.',
              'Der aktuelle **Brick Pass** bringt auf dem Bildschirm „Keine Züge mehr“ drei Gratiszüge dazu.',
              'Vor Level 6 wird nichts Kostenpflichtiges angeboten.',
            ],
          },
          { t: 'p', text: 'Alle Einzelheiten in [Keine Züge mehr](help:lives-moves-and-undos#out-of-moves).' },
          { t: 'h3', text: 'Ein neuer Versuch: die helfende Hand' },
          {
            t: 'list',
            items: [
              'Nach einer Niederlage zeigt **Level verloren**, wie knapp es war. Nutz, was du gesehen hast: welches Ziel nicht gereicht hat, welches Hindernis zu lange gedauert hat.',
              'Ab deinem **sechsten Versuch** am selben Brett schenkt dir das Spiel vor dem Start **3 Extrazüge**: „Eine helfende Hand: 3 Züge mehr für diesen Versuch“. Einmal am Tag pro Brett, gratis.',
              'Ab Level 6 kannst du den nächsten Versuch für 800 Münzen mit Vorsprung beginnen: eine Rakete auf dem Brett und ein Gratis-UFO.',
              'Hängst du immer noch fest? Such das Level unter [Hilfe bei einem Level](/support/levels): Vielleicht haben andere Spieler einen Anstoß hinterlassen.',
            ],
          },
          {
            t: 'shot',
            id: 'level-failed',
            alt: 'Level verloren: ein trauriger Freund, „Fast geschafft!“, die noch fehlenden Ziele (3 Sonnen- und 3 Wellensteine), ein gebrochenes Herz für ein verbrauchtes Leben, eine blaue Taste Nochmal versuchen, ein freiwilliges Angebot und Zurück zur Karte.',
            caption: 'Level verloren zeigt, wie knapp es war.',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Was dich bei Schwer, Sehr schwer und Boss erwartet',
        blocks: [
          {
            t: 'table',
            head: ['Stufe', 'Was sich ändert', 'Münzen fürs Schaffen'],
            rows: [
              ['Schwer', 'Die Ziele verlangen etwa 15 % mehr, und es gibt ein paar Hindernisse mehr.', '50'],
              ['Sehr schwer', 'Die Ziele verlangen etwa 30 % mehr.', '80'],
              ['Boss', 'Das letzte Brett eines Kapitels, ab Level 40. Die Ziele verlangen etwa 40 % mehr.', '80'],
              ['Nacht', 'Ein Brett nach Einbruch der Dunkelheit. Es spielt sich wie ein schweres Brett.', '50'],
            ],
          },
          {
            t: 'p',
            text: 'Rechne bei sehr schweren und Boss-Brettern mit mehr als einem Versuch: So sind sie abgestimmt, und es ist kein Zeichen, dass du schlecht spielst. Jedes Brett im Spiel wurde vor der Veröffentlichung von einem Löser geschafft, jedes lässt sich also gewinnen.',
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'Strategie mit VoiceOver',
        blocks: [
          {
            t: 'list',
            items: [
              '**Fang mit der Zusammenfassung „Brett“** oben an: Level, Etappe, Ziele und übrige Züge. Doppeltippe darauf, um das ganze Brett mit einem Tipp vorgelesen zu bekommen.',
              '**Nutz die Rotoren, statt Feld für Feld zu wischen.** **Ziele** findet die Teile, die deine Ziele wollen; **Teile mit Reihe** findet jeden Zug, der jetzt etwas abräumt; **Hindernisse** und **Tore** zeigen, was im Weg ist und wo Steine das Brett verlassen können.',
              '**Hör dir die Aktionen eines Teils an.** Schiebe-Aktionen sagen, wie weit sie gehen und ob sie durch ein Tor hinausführen, und funktionierende Tausche kommen zuerst, die ersten paar Aktionen sind also oft schon der Plan.',
              '**Stell das Detail der Ansagen auf Ausführlich**, um auf schweren Brettern nach jedem Zug den Stand jedes Ziels zu hören, damit du nie den Überblick verlierst.',
              '**Doppeltippen mit zwei Fingern ist ein Gratis-Tipp**, der nie einen Tipp-Booster verbraucht. Frag so oft, wie du willst.',
              'Schalte **Tausch bestätigen** ein, wenn ein Ausrutscher einen Zug spielen könnte, den du nicht wolltest.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'In 5.1 und 5.1.1 kann sich eine Karte mit Boostern öffnen, während du das Brett liest, und VoiceOver nach oben versetzen. Die Z-Geste mit zwei Fingern schließt sie und bringt dich zurück aufs Brett; eine Korrektur ist unterwegs. Siehe [Mit VoiceOver spielen](help:voiceover#rotors) und [Bekannte Probleme](/support/known-issues).',
          },
        ],
      },
      {
        id: 'checklist',
        title: 'Die Checkliste für schwere Bretter',
        blocks: [
          {
            t: 'table',
            head: ['Wann', 'Prüfen'],
            rows: [
              ['Vor dem ersten Zug', 'Jedes Ziel gelesen, Züge gezählt, Tore und ihre Arten gefunden, festsitzende Steine und Deckel bemerkt, fallend oder nicht.'],
              ['Bei jedem Zug', 'Zählt dieser Zug für ein Ziel, befreit er ein Hindernis oder bereitet er einen Spezialstein vor? Wenn nichts davon, such einen anderen.'],
              ['Spezialsteine', 'Zwei nah beieinander? Bring sie für eine Kombo zusammen, statt sie einzeln auszulösen.'],
              ['Gratis-Hilfen', 'Gratis-Tipp, -Rakete und -UFO in diesem Versuch genutzt; das Gratis-Rückgängig für einen echten Zweifel eingesetzt.'],
              ['Letzte fünf Züge', 'Der Rand des Bretts leuchtet. Zähl genau, was noch fehlt, und spiel zuerst die sichersten Züge.'],
              ['Keine Züge mehr', 'Knapp dran? Weiterspielen, am besten mit einem Gratis-Video. Weit weg? Lass es gut sein und komm ausgeruht wieder.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Ausruhen ist auch eine Strategie',
            text: 'Ein Brett, das dich fünfmal hintereinander besiegt hat, fällt nach einer Pause oft beim ersten Versuch. Siehe [Ruhig spielen](help:playing-calmly).',
          },
        ],
      },
    ],
    related: ['playing-a-board', 'special-bricks-and-combos', 'blockers-encyclopedia', 'boosters-and-pause', 'lives-moves-and-undos', 'voiceover'],
  },

  {
    slug: 'glossary',
    category: 'learn',
    cover: 'board-slide',
    host: 'poppy',
    hostPose: 'idle',
    title: 'Das OutBrick-Glossar',
    summary:
      'Jedes Wort, das dir in OutBrick begegnet, von Toren und Liniensteinen bis zu Deckeln, der helfenden Hand, dem Brick Pass und der Garderobe, in ein, zwei Sätzen erklärt, mit einem Link zu der Anleitung, die es behandelt.',
    keywords:
      'glossar wörterbuch lexikon begriffe wörter bedeutung definition erklärung was ist was bedeutet was heißt vokabular liste a-z',
    sections: [
      {
        id: 'board',
        title: 'Das Brett',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Brett', text: 'Ein Rätsel auf der Reise: ein Raster aus Steinen mit farbigen Toren an den Rändern, Zielen und einer Zahl von Zügen. Siehe [Ein Brett spielen](help:playing-a-board).' },
              { term: 'Schieben', text: 'Einen Stein zu einem freien Feld wischen. Er bleibt stehen, wo du loslässt, oder verlässt das Brett, wenn du ihn in das offene Tor seiner Farbe bringst. Siehe [Steine nach Hause schieben](help:playing-a-board#slide).' },
              { term: 'Tauschen', text: 'Einen Stein in seinen Nachbarn wischen. Der Tausch bleibt nur, wenn er eine Reihe bildet; sonst springt er zurück, und es wird kein Zug verbraucht. Siehe [Tauschen und Kombinieren](help:playing-a-board#swap).' },
              { term: 'Reihe (Kombination)', text: 'Drei oder mehr Steine einer Farbe in einer Reihe oder Spalte, oder ein 2×2-Quadrat. Reihen verschwinden. Siehe [Tauschen und Kombinieren](help:playing-a-board#swap).' },
              { term: 'Tor', text: 'Eine farbige Tür am Rand des Bretts. Sie nimmt Steine ihrer eigenen Farbe; für jeden anderen Stein ist sie eine Wand. Siehe [Tore](help:bricks-specials-and-blockers#gates).' },
              { term: 'Vereistes Tor', text: 'Ein Tor, das geschlossen ist, bis es auftaut, ein wenig jedes Mal, wenn irgendein Stein nach Hause geht oder Teile davor verschwinden. Siehe [Tore](help:bricks-specials-and-blockers#gates).' },
              { term: 'Zähltor', text: 'Ein Tor, das nur eine bestimmte Zahl von Steinen nimmt, angezeigt durch seine Zahl, und sich dann für immer schließt. Siehe [Tore](help:bricks-specials-and-blockers#gates).' },
              { term: 'Etappentor', text: 'Ein Tor, das versiegelt bleibt, bis die zweite Etappe der Ziele des Bretts beginnt. Siehe [Tore](help:bricks-specials-and-blockers#gates).' },
              { term: 'Ziel', text: 'Was ein Brett verlangt, angezeigt im Auftragsfeld mit der Zahl, die noch fehlt: Steine einer Farbe zum Nach-Hause-Schicken oder Kombinieren, Kisten, Schlösser oder Moos. Siehe [Die Ziele lesen](help:welcome#goals).' },
              { term: 'Auftragsfeld', text: 'Die Ziele oben auf dem Brett, jedes mit seinem Farbsymbol und einem Haken, wenn es erreicht ist. Siehe [Der Brettbildschirm](help:playing-a-board#screen).' },
              { term: 'Etappe', text: 'Manche Bretter stellen ihre Ziele in zwei Etappen: Erreichst du die erste, öffnen sich neue Tore für die zweite. Das Auftragsfeld zeigt „STUFE 1 / 2“.' },
              { term: 'Züge', text: 'Die große Zahl in der Kopfzeile: die übrigen Züge auf diesem Brett, die einzige Grenze in OutBrick. Bei drei pulsiert sie. Siehe [Der Brettbildschirm](help:playing-a-board#screen).' },
              { term: 'Sternleiste', text: 'Die Leiste in der Kopfzeile, die sich füllt, während deine Punkte steigen, mit einem Stern an jeder Schwelle. Siehe [Punkte, Sterne und der Bonus am Ende](help:playing-a-board#stars).' },
              { term: 'Punkte und Sterne', text: 'Jedes geschaffte Brett bringt mindestens einen Stern; mehr Punkte bringen zwei oder drei. Jeder am Ende übrige Zug bringt 150 Punkte. Siehe [Punkte, Sterne und der Bonus am Ende](help:playing-a-board#stars).' },
              { term: 'Ziel erreicht!', text: 'Das Banner, wenn das letzte Ziel erreicht ist. Deine übrigen Züge werden dann zu Liniensteinen und gehen hoch; tippe, um zu überspringen.' },
              { term: 'Mischen!', text: 'Das Banner, wenn kein Zug möglich ist und das Brett sich selbst neu mischt, gratis. Siehe [Du kannst nie festsitzen](help:playing-a-board#never-stuck).' },
              { term: 'Leiste', text: 'Die Reihe unter dem Brett: Pause, dann Tipp, Rakete, UFO und Rückgängig. Siehe [Die Leiste](help:boosters-and-pause#tray).' },
              { term: 'Lernkarte', text: 'Eine kurze Karte mit einer Hand, die sich bewegt, und die eine neue Idee zeigt, wenn sie dir zum ersten Mal begegnet. Tippe irgendwohin, um loszuspielen.' },
              { term: 'Siegesserie', text: 'Eine kleine Kette aus Steinen unter den Zügen, wenn du mehrere neue Level hintereinander gewinnst. Serien bringen Gratis-Booster für dein nächstes Brett. Siehe [Gratis-Booster](help:boosters-and-pause#free).' },
            ],
          },
        ],
      },
      {
        id: 'bricks',
        title: 'Steine und Spezialsteine',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Stein', text: 'Ein normaler Spielzeugstein in einer der Farben des Bretts, mit seinem Farbsymbol geprägt. Er kann geschoben, getauscht und kombiniert werden.' },
              { term: 'Lange, große, L- und T-Steine', text: 'Geformte Steine, die als ein Stück gleiten und fallen, nie getauscht werden, nie in Reihen zählen und ein Tor brauchen, das so breit ist wie sie. Ein Ziel zählt jedes Feld. Siehe [Verdeckte Steine, Portale und geformte Steine](help:bricks-specials-and-blockers#more).' },
              { term: 'Verdeckter Stein', text: 'Ein „?“-Stein, der seine Farbe verbirgt. Er dreht sich um, wenn ein Stein daneben das Brett verlässt, nie, wenn er selbst bewegt wird, und spielt trotzdem mit seiner echten Farbe.' },
              { term: 'Schlüsselstein', text: 'Der Stein, der einen Schlüssellochdeckel öffnet, wenn er das Brett verlässt, kombiniert oder durch sein Tor hinausgeschoben. Siehe [Versiegelte Beete und ihre Deckel](help:bricks-specials-and-blockers#lids).' },
              { term: 'Spezialstein', text: 'Ein Stein, der aus einer größeren Kombination entsteht und mehr abräumt, wenn er hochgeht. Tippe darauf, um ihn dort auszulösen, wo er steht, oder tausch ihn. Siehe [Spezialsteine](help:bricks-specials-and-blockers#specials).' },
              { term: 'Linienstein', text: 'Entsteht aus vier in einer Reihe. Räumt seine ganze Reihe oder Spalte, in der Richtung, in die du gezogen hast. Er kann auch durch ein Tor seiner Farbe hinausgleiten, ohne hochzugehen.' },
              { term: 'Bombe', text: 'Entsteht aus einer L-, T- oder +-Form. Sprengt das 3×3-Quadrat um sich herum, zweimal.' },
              { term: 'Zielpfeil', text: 'Entsteht aus einem 2×2-Quadrat. Fliegt zu einem Teil, das ein Ziel braucht.' },
              { term: 'Farbbombe', text: 'Entsteht aus fünf in einer Reihe. Tausch sie mit einer Farbe, um jeden normalen Stein dieser Farbe zu nehmen.' },
              { term: 'Kombo', text: 'Zwei miteinander getauschte Spezialsteine für eine größere Wirkung, etwa ein Kreuz oder eine Explosion von 5×5. Siehe [Kombos](help:bricks-specials-and-blockers#combos) und [Spezialsteine und Kombos: die komplette Anleitung](help:special-bricks-and-combos).' },
              { term: 'Kaskade', text: 'Eine Reihe, die sich von selbst bildet, wenn Steine nach dem Abräumen fallen. Sie kostet keinen zusätzlichen Zug. Siehe [So schaffst du ein schweres Brett](help:hard-boards#falling).' },
            ],
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Hindernisse, Deckel und Portale',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Hindernis', text: 'Alles, was im Weg ist. Tippe auf einem Brett darauf, um eine kurze Erinnerung zu sehen, wie du es loswirst; sein Aussehen ändert sich mit dem Dorf, seine Regeln nicht. Siehe [Hindernisse](help:bricks-specials-and-blockers#blockers) und [Alle Hindernisse, Deckel und Tore erklärt](help:blockers-encyclopedia).' },
              { term: 'Kiste', text: 'Hält gleitende Steine auf. Eine oder zwei Schichten; jede Reihe daneben bricht eine Schicht.' },
              { term: 'Eis', text: 'Hält den Stein darin fest. Eine Reihe daneben bricht das Eis.' },
              { term: 'Schloss', text: 'Der Stein kann sich nicht bewegen. Nur eine Reihe **durch** ihn hindurch befreit ihn.' },
              { term: 'Moos', text: 'Kriecht nach jedem Zug, der kein Moos abräumt, auf einen Stein. Eine Reihe daneben entfernt es.' },
              { term: 'Statue', text: 'Steht in einer Lücke im Brett. Nichts gleitet hindurch, und sie bleibt: Such dir eine andere Bahn.' },
              { term: 'Portal', text: 'Eins von einem Paar: Schieb einen Stein in eins, und er kommt auf einer anderen Seite aus seinem Zwilling heraus. Siehe [Verdeckte Steine, Portale und geformte Steine](help:bricks-specials-and-blockers#more).' },
              { term: 'Versiegelter Raum (versiegeltes Beet)', text: 'Steine unter einem Deckel, die sich nicht bewegen können, bis er sich öffnet. Die Lernkarte nennt ihn versiegeltes Beet. Siehe [Versiegelte Beete und ihre Deckel](help:bricks-specials-and-blockers#lids).' },
              { term: 'Deckel', text: 'Die Abdeckung eines versiegelten Raums, in fünf Arten: ein Zählerdeckel, ein farbiger Zählerdeckel, ein Glasdeckel, eine Messinguhr und ein Schlüsselloch. Jeder öffnet sich auf seine eigene Art. Siehe [Versiegelte Beete und ihre Deckel](help:bricks-specials-and-blockers#lids).' },
            ],
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Brettarten',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Schwer', text: 'Ein Brett mit einem lila Schild unter der Kopfzeile. Die Ziele verlangen etwa 15 % mehr, mit ein paar Hindernissen mehr; Schaffen bringt 50 Münzen. Siehe [Schwere, sehr schwere, Boss- und Nachtbretter](help:playing-a-board#tiers).' },
              { term: 'Sehr schwer', text: 'Die Ziele verlangen etwa 30 % mehr; Schaffen bringt 80 Münzen.' },
              { term: 'Boss', text: 'Das letzte Brett eines Kapitels, ab Level 40. Die Ziele verlangen etwa 40 % mehr; Schaffen bringt 80 Münzen.' },
              { term: 'Nachtbrett', text: 'Ein Brett nach Einbruch der Dunkelheit, in Kreide und Tinte. Es spielt sich wie ein schweres Brett.' },
              { term: 'Die zwölf Brettarten', text: 'Die Bretter 1 bis 12 jedes Dorfs folgen derselben Reihenfolge, von Ab nach Hause bis Stilles Rätsel. Siehe [Die zwölf Brettarten](help:bricks-specials-and-blockers#kinds) und [Die zwölf Brettarten im Detail](help:board-kinds).' },
              { term: 'Brett mit fallenden Steinen', text: 'Ein Brett, auf dem Steine fallen, um Lücken zu füllen. Auf manchen rücken neue nach; auf Eckstücke und Stilles Rätsel kommen keine.' },
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'Leben, Züge und Booster',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Leben', text: 'Wird nur verbraucht, wenn du einen Versuch verlierst: beim Aufgeben, wenn die Züge ausgehen, oder beim Verlassen oder Neustarten nach einem Zug. Bis zu fünf (acht mit dem aktuellen Brick Pass), alle 30 Minuten kommt eins zurück. Siehe [Leben](help:lives-moves-and-undos#lives).' },
              { term: 'Gratisversuch', text: 'Einmal am Tag ohne Leben ein Gratisversuch an einem Brett: Gewinnst du, behältst du das Leben; verlierst du, kostet es nichts.' },
              { term: 'Unbegrenzte Leben', text: 'Ein Zeitfenster von 1, 3 oder 24 Stunden, in dem Verlieren kein Leben kostet. Siehe [Keine Leben mehr](help:lives-moves-and-undos#out-of-lives).' },
              { term: 'Keine Züge mehr', text: 'Der Bildschirm, den du siehst, wenn die Züge ausgehen, bevor die Ziele erreicht sind, mit Wegen, im selben Versuch weiterzuspielen, oder **Aufgeben**. Siehe [Keine Züge mehr](help:lives-moves-and-undos#out-of-moves).' },
              { term: 'Weiterspielen', text: 'Im selben Versuch mehr Züge kaufen oder per Video holen: +5 Züge für 300, dann 500, dann 900 Münzen, oder per Video +2, dann +1, dann ein UFO. Es kostet nie ein Leben.' },
              { term: '+5 Züge', text: 'Ein gespeichertes Weiterspielen aus einem Paket, das du auf dem Bildschirm „Keine Züge mehr“ statt Münzen einsetzt.' },
              { term: 'Helfende Hand', text: 'Ab deinem sechsten Versuch am selben Brett 3 Extrazüge vor dem Start, einmal am Tag pro Brett. Siehe [Level verloren und neu versuchen](help:lives-moves-and-undos#level-failed).' },
              { term: 'Level verloren', text: 'Der Bildschirm nach dem Aufgeben, der zeigt, wie knapp es war, mit **Nochmal versuchen** und **Zurück zur Karte**.' },
              { term: 'Booster', text: 'Ein Werkzeug in der Leiste: Tipp, Rakete oder UFO. Jeder Versuch bringt je eins davon gratis. Siehe [Booster, Tipps und Pause](help:boosters-and-pause).' },
              { term: 'Tipp', text: 'Zeigt und sagt den besten Zug, ein Schieben oder einen Tausch.' },
              { term: 'Rakete', text: 'Antippen, dann auf einen normalen Stein tippen: Der Stein wird zu einem Linienstein, der seine Reihe entlang feuert.' },
              { term: 'UFO', text: 'Antippen, dann auf ein Teil tippen: Es beamt eine Schicht davon weg, etwa eine Kistenschicht, Eis, ein Schloss, Moos oder einen Stein.' },
              { term: 'Rückgängig', text: 'Nimmt deinen letzten Zug zurück. Das erste auf jedem Brett ist gratis; die übrigen kommen aus einem Vorrat von fünf, der sich alle 25 Minuten um eins auffüllt. Siehe [Rückgängig](help:boosters-and-pause#undo).' },
              { term: 'Münzen', text: 'Verdienst du mit geschafften Brettern und Belohnungen; du gibst sie für Booster, Weiterspielen, Leben und Garderobe-Teile aus.' },
            ],
          },
        ],
      },
      {
        id: 'journey',
        title: 'Die Reise',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Die Reise', text: 'Die Karte aller 2.000 Level, ein einziger langer Boulevard aus Steinen durch 167 Dörfer. Sie ist der erhöhte Tab in der Mitte. Siehe [Die Reise und ihre Dörfer](help:journey-and-villages).' },
              { term: 'Dorf', text: 'Zwölf Bretter auf der Karte, jedes Dorf aus Spielzeugsteinen in seinem eigenen Look gebaut (das letzte Dorf hat acht). Es hält bis zu 36 Sterne.' },
              { term: 'Gartenstadt', text: 'Das erste Dorf (im Spiel „Garden City“), Level 1 bis 12, in dem jede neue Idee beigebracht wird. Danach kommt Clover Farm, Level 13 bis 24. Siehe [Deine erste Woche](help:first-week).' },
              { term: 'Kapitel', text: 'Zwanzig Level, für Kapitel-Abzeichen, Boss-Bretter und Erfolge im Game Center. Kapitel und Dörfer werden getrennt gezählt.' },
              { term: 'Sternbelohnungen', text: 'Die Sternleiter jedes Dorfs: 50 Münzen, ein Tipp, 100 Münzen und eine Rakete, abzuholen, während deine Sterne dort wachsen.' },
              { term: 'Reisetruhe', text: 'Eine Truhe am Weg. Tippe darauf, um zu sehen, was darin ist; erreichst du sie, zahlt sie ihre Münzen und Booster auf der Gewinnkarte aus.' },
              { term: 'Dorfgeschenk', text: 'Ein Geschenk mit Zeitschaltung auf der Karte; sein Abzeichen zählt herunter, bis es bereit ist.' },
              { term: 'Geschenkballon', text: 'Schwebt ab und zu vorbei. Ein freiwilliges Video lässt ihn platzen, für Münzen oder ein kurzes Zeitfenster mit Gratis-Boostern.' },
              { term: 'Alle Dörfer', text: 'Der Atlas aller Dörfer als Karten, gefiltert nach laufend, abgeschlossen oder gesperrt.' },
              { term: 'Mein Level', text: 'Die Stecknadel-Taste, die die Karte zurück zu deinem aktuellen Level bringt.' },
            ],
          },
        ],
      },
      {
        id: 'rewards',
        title: 'Belohnungen und Events',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Täglicher Stein', text: 'Dein erstes geschafftes Brett jeden Tag bringt 100 Münzen, automatisch auf dem Startbildschirm eingesammelt. Siehe [Der Tägliche Stein und Tagesserien](help:rewards-and-events#daily).' },
              { term: 'Tagesserie', text: 'Die Flamme auf dem Startbildschirm: die Tage in Folge, an denen du ein Brett geschafft hast, mit Belohnungen nach 3, 7, 14, 30, 60 und 100 Tagen.' },
              { term: 'Serienretter', text: 'Gibt es mit Serienbelohnungen. Er holt innerhalb einer Woche gratis einen verpassten Tag zurück; du kannst zwei haben.' },
              { term: 'Steinrad', text: 'Eine Gratisdrehung am Tag für Münzen oder einen Booster, über seine Taste auf dem Startbildschirm. Siehe [Das Steinrad](help:rewards-and-events#wheel).' },
              { term: 'Missionen', text: 'Drei Aufgaben für heute und drei für die Woche, jede mit einer Belohnung. Siehe [Missionen](help:rewards-and-events#missions).' },
              { term: 'Brick Pass', text: 'Eine Saison mit 30 Stufen, die du mit neuen geschafften Leveln hinaufsteigst, mit einer Gratis-Spur für alle und einer Premium-Spur zum Kaufen. Siehe [Der Brick Pass](help:rewards-and-events#pass).' },
              { term: 'Events', text: 'Kommen und gehen nach einem Kalender, angezeigt als Banner auf dem Startbildschirm und als Abzeichen auf der Reise. Manche verdoppeln oder verdreifachen die Münzen fürs Schaffen.' },
              { term: 'Freundesrettung, Dorfrennen, Brick Royale, Crew-Rennen', text: 'Rennen und Rettungen, die neben der Reise laufen. Jedes lässt sich unter **Einstellungen › Spiel › Spielfunktionen** ausschalten. Siehe [Events und Rennen](help:rewards-and-events#events).' },
              { term: 'Sparschwein', text: 'Füllt sich mit Münzen, während du neue Level schaffst; ist es bereit, kannst du es für einen kleinen Preis öffnen. Siehe [Was es im Shop gibt](help:shop-and-purchases#shelves).' },
              { term: 'Stein-Kino', text: 'Eine Tafel mit Preisfeldern auf der Reise; jedes freiwillige Video dreht ein Feld um.' },
              { term: 'Ränge', text: 'Der Tab mit der ewigen Bestenliste, offen ab Level 21. Siehe [Ränge und Game Center](help:rewards-and-events#leaders).' },
              { term: 'Werbung entfernen', text: 'Ein einmaliger Kauf, der jede Taste Ansehen zu **Belohnung abholen** macht, innerhalb derselben Tagesgrenzen. Siehe [Werbung entfernen und der Brick Pass](help:shop-and-purchases#remove-ads).' },
            ],
          },
        ],
      },
      {
        id: 'friends',
        title: 'Freunde, die Sammlung und du',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Die neun Freunde', text: 'Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry und Poppy: Freunde aus Spielzeugsteinen, die dich in Sprechblasen anfeuern. Siehe [Lerne die neun Freunde kennen](help:meet-the-friends).' },
              { term: 'Gastgeber-Freund', text: 'Der Freund des Dorfs im runden Rahmen in der Kopfzeile des Bretts, passend zum Dorf gekleidet. Tippe ihn an für ein Kichern oder ein Winken.' },
              { term: 'Profil', text: 'Öffnet sich über deinen Avatar: dein Name, Level, deine Flagge und Statistiken, mit der Spielversion ganz unten. Siehe [Dein Profil](help:friends-and-wardrobe#profile).' },
              { term: 'Sammlung', text: 'Öffnet sich ab Level 95: Steinkarten, Kapitel-Abzeichen, Andenken und Saisonkarten. Siehe [Die Sammlung](help:friends-and-wardrobe#collection).' },
              { term: 'Funken', text: 'Gibt es für doppelte Saisonkarten; für drei davon wählst du eine fehlende Karte.' },
              { term: 'Garderobe', text: 'Outfits, Brettplatten, Paletten, Steinoberflächen und mehr. Sie ändern, wie das Spiel aussieht, nie, wie es sich spielt, und Teile für die Bedienungshilfen sind immer gratis. Siehe [Die Garderobe](help:friends-and-wardrobe#wardrobe).' },
            ],
          },
        ],
      },
      {
        id: 'settings',
        title: 'Einstellungen und Bedienungshilfen',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Farbenblind', text: 'Prägt jedem Stein, Tor und Ziel eine Form auf, damit Farbe nie der einzige Hinweis ist. Von Anfang an eingeschaltet. Siehe [Farbsymbole](help:vision-hearing-and-motion#colour-blind).' },
              { term: 'Brett mit hohem Kontrast', text: 'Ein fast schwarzer Boden, weiße Umrisse, große Symbole und dicke Torrahmen. Siehe [Brett mit hohem Kontrast](help:vision-hearing-and-motion#contrast).' },
              { term: 'Animationstempo', text: 'Wie schnell Teile tauschen, fallen und verschwinden, von 50 % bis 200 %.' },
              { term: 'Tausch bestätigen', text: 'Mit VoiceOver, Sprachsteuerung, Schaltersteuerung oder Tastatur wählst du jeden Zug zweimal, bevor er ausgeführt wird. Siehe [Tausch bestätigen](help:voice-control-switch-control-keyboard#hold-to-confirm).' },
              { term: 'Reihenklang', text: 'Fügt dem Brett die Aktion **Reihe anhören** hinzu: ein leiser Ton pro Teil, eine Tonhöhe pro Farbsymbol.' },
              { term: 'Rotor', text: 'Ein VoiceOver-Werkzeug, um zwischen Teilen zu springen: Teile mit Reihe, Spezialsteine, Ziele, Hindernisse und Tore. Siehe [Rotoren](help:voiceover#rotors).' },
              { term: 'Schnellspiel', text: 'Nach einem Sieg geht es direkt zum nächsten Brett statt zurück zur Karte. Siehe [Der Tab Spiel](help:settings#game).' },
              { term: 'Spielfunktionen', text: 'Unter **Einstellungen › Spiel**: Schalte Rennen, Rettungen oder Angebote auf der Karte aus, die du lieber nicht sehen möchtest. Nichts, was du verdient hast, geht verloren.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Du suchst ein Wort, das hier fehlt? Nutz die Suchfunktion deines Browsers auf dieser Seite oder frag in [Hilfe und Support](/community/c/help), und wir ergänzen es.',
          },
        ],
      },
    ],
    related: ['welcome', 'playing-a-board', 'bricks-specials-and-blockers', 'blockers-encyclopedia', 'special-bricks-and-combos', 'common-questions'],
  },
];
