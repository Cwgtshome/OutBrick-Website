import type { ExtraGuides } from '../../i18n/blog';

/** Journal batch 4 (lib/journal-batches/batch-4.ts) in this language. See lib/blog-l10n/de.ts for the house style. */
export const de4: ExtraGuides = {
  'what-makes-a-puzzle-fair': {
    title: 'Faire Puzzles: Schwierigkeit, Scheitern und Vertrauen',
    dek: 'Schwer ist nicht gleich unfair. Was die Forschung zu Herausforderung und Scheitern sagt: welchen Puzzles wir trauen und welche wir entnervt abbrechen.',
    imageAlt: 'Ein echtes OutBrick-Spielfeld auf einem iPhone, links Moss mit Werkzeuggürtel, rechts Sprout mit einem Keimling auf dem Kopf, vor einer marineblauen Wand aus Steinen',
    tags: ['Puzzle-Design', 'Schwierigkeitsgrad', 'Spieldesign', 'Scheitern in Spielen', 'faire Rätsel'],
    intro: 'Wer Puzzles spielt, kennt zwei ganz verschiedene Arten, festzustecken. Die eine ist die gute: Du siehst jedes Teil, du kennst die Regeln, und dir ist die Idee einfach noch nicht gekommen. Die andere bringt dich dazu, das Handy wegzulegen: Die Lösung hing an etwas, das du nicht sehen konntest, das Spiel hat ein Experiment bestraft, dem du gar nicht ausweichen konntest, oder ein einziger Ausrutscher hat dich zehn Minuten gekostet. Beides ist „schwer“. Nur eines fühlt sich fair an. Spieleforscher haben die letzten fünfzehn Jahre damit verbracht, diese beiden Fälle auseinanderzuhalten, und was sie herausgefunden haben, ist nützlich für alle, die Puzzles bauen, und für alle, die entscheiden, welche davon ihren Abend verdienen.',
    keyTakeaways: [
      'Spieler erleben mehrere Arten von Herausforderung. Ein Puzzle fühlt sich fair an, wenn seine Herausforderung im Denken liegt und nicht in verborgenen Informationen oder willkürlichen Strafen.',
      'Was ein Fehlschlag kostet, zählt genauso wie die Wahrscheinlichkeit, zu scheitern: Juul argumentiert, dass die Zeit, die ein Fehlschlag dir nimmt, heute das bessere Maß dafür ist, wie Schwierigkeit ankommt.',
      'Scheitern kann Teil eines guten Erlebnisses sein, aber nur, wenn man sieht, was schiefging, und es mit neuer Erkenntnis noch einmal versuchen kann.',
    ],
    sections: {
      'hard-versus-unfair': {
        title: 'Schwer ist nicht gleich unfair',
        paragraphs: [
          'Designer sprechen über Schwierigkeit gern wie über einen einzigen Regler, doch so erleben Spieler sie nicht. Als Alena Denisova, Paul Cairns, Christian Guckelsberger und David Zendle einen Fragebogen entwickelten, um die wahrgenommene Herausforderung in Spielen zu messen, wiesen ihre Befragungen und Validierungsstudien auf vier verschiedene Arten hin: performative Herausforderung (schaffen es meine Hände?), emotionale Herausforderung (halte ich aus, was das mit mir macht?), kognitive Herausforderung (komme ich drauf?) und Entscheidungsherausforderung (kann ich mit dieser Wahl leben?). Ein Puzzle kann in einer davon hoch liegen und in den anderen niedrig.',
          'Diese Aufteilung erklärt viel Frust. Ein Logikrätsel, das plötzlich pixelgenaues Timing verlangt, hat seine Herausforderung vom Kopf in die Hände verlagert, ohne es dir zu sagen. Ein Puzzle, dessen Lösung an einer Regel hängt, die dir nie gezeigt wurde, hat die kognitive Herausforderung gar nicht erhöht; es hat dir die Information genommen, die du gebraucht hättest, um sie zu meistern.',
          'Megan Pusey, Kok Wai Wong und Natasha Anne Rappa treffen in ihrem Puzzle Challenge Analysis Tool, das sie an The Witness, Untitled Goose Game und Baba Is You erprobt haben, eine verwandte Unterscheidung. Sie trennen Herausforderung, also die Anforderung, die ein Puzzle an dein Denken stellt, von Schwierigkeit, also davon, wie schwer ein bestimmter Spieler es findet. Genau in dieser Unterscheidung steckt der Kern von Fairness: Ein faires Puzzle kann für dich heute sehr schwierig sein, aber seine Herausforderung besteht aus Dingen, über die du nachdenken kannst.',
        ],
      },
      'cost-of-failing': {
        title: 'Was Scheitern kostet, gehört zur Schwierigkeit',
        paragraphs: [
          'In älteren Spielen mit einer festen Zahl an Leben konnte man Schwierigkeit daran messen, wie oft Spieler scheiterten. Jesper Juul argumentierte 2010 in einem Beitrag für die Konferenz Foundations of Digital Games, dass das nicht mehr funktioniert, seit die meisten Spiele unbegrenzt viele Versuche erlauben. Sein Vorschlag: Miss die Zeit, die dir ein Fehlschlag nimmt. Ein Feld zu verlieren und sofort neu anzufangen ist etwas ganz anderes, als ein Feld zu verlieren und fünf Minuten Vorbereitung erneut zu spielen, um wieder dorthin zu kommen.',
          'Deshalb können sich zwei Puzzles mit exakt derselben logischen Schwierigkeit völlig unterschiedlich anfühlen. Wirft dich ein Fehler drei Züge zurück, probierst du unbeschwert aus. Wirft er dich an den Anfang einer langen Abfolge zurück, hörst du auf zu experimentieren und fängst an, vorsichtig zu raten, und das ist eine schlechtere Art, irgendetwas zu lösen.',
          'Für Spieler ergibt das einen schnellen Test, wenn sich ein Puzzlespiel gemein anfühlt: Frag dich, was dich der letzte Fehlschlag tatsächlich gekostet hat. Sekunden, Minuten oder etwas, das knapper ist? Für Designer ist es eine Erinnerung daran, dass der Preis eines Fehlers eine Designentscheidung ist, unabhängig vom Puzzle selbst.',
        ],
      },
      'failure-that-teaches': {
        title: 'Scheitern, das etwas lehrt',
        paragraphs: [
          'Nichts davon heißt, dass ein faires Puzzle dich nie scheitern lassen darf. Serge Petralito und Kollegen befragten 95 Spieler direkt nach dem Erscheinen von Dark Souls III, einem Spiel, das berühmt dafür ist, wie oft es dich sterben lässt. Die Spieler berichteten überwiegend von positiven Erlebnissen, und die Momente, die sie am meisten schätzten, Erfolg und Lernen, wurden erst durch die negativen möglich: durch die Schwierigkeit und die wiederholten Tode.',
          'Die Bedingung, die in diesem Befund steckt, ist Lesbarkeit. Aus Scheitern wurde Lernen, weil die Spieler sehen konnten, warum sie gestorben waren und was sie als Nächstes probieren sollten. Dieselbe Forschungstradition, die hart erkämpfte Siege feiert, ist sich einig, dass Scheitern ohne erkennbare Ursache einfach nur Frust ist.',
          'Puzzles sind ein besonders klarer Fall. Das ideale Scheitern in einem Puzzle ist eines, bei dem du im selben Moment „na klar“ denkst, weil dir das Feld gerade etwas Wahres über sich gezeigt hat. Ein Scheitern, nach dem du denkst „Woher hätte ich das wissen sollen?“, lehrt nichts außer Misstrauen.',
        ],
      },
      'fair-puzzle-checklist': {
        title: 'Eine Fairness-Checkliste für Puzzles',
        paragraphs: [
          'Conor Linehan und Kollegen analysierten Let’s-Play-Videos von vier sehr beliebten Puzzlespielen, Portal, dem Koop-Modus von Portal 2, Braid und Lemmings, um zu sehen, wie sie ihre Herausforderungen takten. Das Muster war einheitlich: Jede neue Fähigkeit wurde für sich eingeführt, mit einfachen Puzzles, die nur diese Fähigkeit brauchten; dann übten die Spieler, sie mit dem zu kombinieren, was sie schon konnten; und die Puzzles wurden komplexer, bis die nächste neue Fähigkeit kam. Faire Puzzles verlangen also selten etwas von dir, das du nicht vorher lernen konntest.',
          'Nimm das mit der Forschung zu Herausforderung und Scheitern zusammen, und du bekommst eine kurze Liste, die du auf jedes Puzzle anwenden kannst, ob du es baust oder spielst:',
        ],
        bullets: [
          'Alles, was du zum Lösen brauchst, ist sichtbar oder wurde vorher beigebracht.',
          'Die Regeln ändern sich nicht mittendrin ohne Vorwarnung.',
          'Eine Lösung existiert mit Sicherheit.',
          'Die Herausforderung ist die, die das Spiel versprochen hat: in einem Denkspiel Denken, nicht Reflexe.',
          'Ein Fehler kostet angemessen viel Zeit, und du siehst, was ihn verursacht hat.',
          'Neue Ideen kommen einzeln, mit Raum zum Üben, bevor sie kombiniert werden.',
        ],
      },
      'how-outbrick-keeps-boards-fair': {
        title: 'Wie OutBrick seine Felder fair zu halten versucht',
        paragraphs: [
          'Wir machen OutBrick, also hier die Checkliste aus unserer Sicht. Die Regel ist klein und immer gleich: Ein Stein gleitet, bis ihn etwas stoppt, und er verlässt das Feld nur durch das Tor in seiner Farbe. Schlüssel, Schlösser, Kisten und Tore tauchen erst auf späteren Feldern auf, wenn die Grundregel vertraut ist. Jedes der 2.000 Felder wurde vor dem Erscheinen von einem Solver gelöst und die Lösung anhand der Regeln des Spiels selbst nachgespielt, ein Prozess, den wir in [wie wir 2.000 Schiebepuzzle-Felder geprüft haben](/blog/verifying-2000-sliding-block-boards) beschreiben. Kein Feld verlangt also Unmögliches.',
          'Der Preis eines Fehlers bleibt klein und wird vorab genannt. Jedes Feld zeigt seine Zugvorgabe und sein Zuglimit ab dem ersten Tippen, und es gibt keine Uhr. Die erste Zugrücknahme auf jedem Feld ist gratis, und ein Leben geht nur verloren, wenn ein Versuch endet, ohne dass das Feld gelöst ist. Auf der Startseite steht [genau, was Leben, Zugrücknahmen und Werbung kosten](/#fair). Mehr darüber, wie sich Herausforderung über die Zeit entwickeln sollte, steht in [wie man eine freundlichere Schwierigkeitskurve baut](/blog/kinder-difficulty-curve), und über Reibung, die zum Nachdenken auffordert, in [Papers, Please und sinnvolle Reibung](/blog/papers-please-meaningful-friction).',
          'Der beste Fairness-Test bleibt deine eigene Reaktion. [Spiel ein Feld im Browser](/play), scheitere einmal mit Absicht und achte darauf, ob du weißt, warum.',
        ],
      },
    },
    pullQuote: 'Ein Scheitern, nach dem du denkst „Woher hätte ich das wissen sollen?“, lehrt nichts außer Misstrauen.',
    faqs: [
      { question: 'Was lässt ein Puzzle unfair wirken?', answer: 'Meist eines von drei Dingen: Die Lösung hängt an Informationen, die der Spieler nicht sehen konnte oder die ihm nicht beigebracht wurden, die Herausforderung verlagert sich ohne Vorwarnung vom Denken zu den Reflexen, oder ein kleiner Fehler kostet viel Zeit. Schwierigkeit allein wirkt selten unfair, wenn die Regeln klar sind.' },
      { question: 'Ist es schlecht, wenn ein Puzzlespiel dich scheitern lässt?', answer: 'Nein. Forschung zu schweren Spielen wie Dark Souls III hat gezeigt, dass Scheitern Erfolg und Lernen bedeutsamer machen kann. Wichtig ist, dass der Spieler sieht, warum er gescheitert ist, und dass ein neuer Versuch wenig kostet.' },
      { question: 'Was ist der Unterschied zwischen Herausforderung und Schwierigkeit?', answer: 'Forscher verwenden Herausforderung oft für die Anforderung, die ein Puzzle an den Spieler stellt, und Schwierigkeit dafür, wie schwer ein bestimmter Spieler es findet. Ein faires Puzzle kann für eine Person sehr schwierig sein, während seine Herausforderung aus Dingen besteht, über die jeder nachdenken könnte.' },
      { question: 'Sind alle OutBrick-Felder lösbar?', answer: 'Ja. Jedes der 2.000 Felder wurde vor dem Erscheinen von einem Solver gelöst und die Lösung anhand der Regeln des Spiels selbst nachgespielt, und jedes Feld zeigt seine Zugvorgabe und sein Zuglimit ab dem ersten Tippen.' },
    ],
  },
  'game-feel-and-juice': {
    title: 'Game Feel und Juice: warum ein guter Schub zählt',
    dek: 'Juice ist das Extra-Feedback, das ein Tippen gut anfühlen lässt. Studien mit Tausenden Spielern zeigen: Es hilft bis zu einem Punkt, dann schadet es.',
    imageAlt: 'Ein echtes OutBrick-Spielfeld auf einem iPhone zwischen Moss mit Werkzeuggürtel und Vio mit Kopfhörern, dazu schwebende Steine vor einer marineblauen Wand aus Steinen',
    tags: ['Game Feel', 'Juice Spieldesign', 'Spieldesign', 'Feedback in Spielen', 'Spielgefühl'],
    intro: 'Nimm zwei Versionen desselben Spiels in die Hand. In der einen gleitet ein Stein über das Feld und hält an. In der anderen gleitet er, bremst sanft ab, stößt ganz leicht gegen die Wand, und beim Hinausgleiten wirbelt ein wenig Staub am Tor auf. Die Regeln sind identisch. Die eine fühlt sich an wie eine Tabellenkalkulation, die andere wie ein Spielzeug. Designer nennen diesen Unterschied Game Feel, und das zusätzliche, nicht notwendige Feedback, das ihn erzeugt, heißt „Juice“. Es ist eine der meistdiskutierten Ideen der Spieleentwicklung und war bis vor Kurzem eine der am wenigsten geprüften. Die Forschung, die es inzwischen gibt, hat eine klare Botschaft für alle, die Spiele machen: Juice wirkt, und zu viel davon auch.',
    keyTakeaways: [
      'Juice ist redundantes Feedback: zusätzliche visuelle, akustische oder haptische Reaktionen auf eine Aktion, die die Regeln nicht brauchen, der Spieler aber spürt.',
      'In einer Studie mit mehr als 3.000 Spielern führten sowohl gar kein Juice als auch extremes Juice zu kürzerem Spielen und einem schlechteren Erlebnis als eine mittlere Menge.',
      'Juice lässt ein Spiel besser aussehen und sich besser anfühlen; wie es sich darauf auswirkt, wie kompetent sich Spieler fühlen, hängt vom Kontext ab. Man sollte es also fein abstimmen, nicht aufhäufen.',
    ],
    sections: {
      'what-juice-means': {
        title: 'Was Designer mit Juice meinen',
        paragraphs: [
          'Kieran Hicks, Kathrin Gerling, Patrick Dickinson und Vero Vanden Abeele liefern eine saubere Definition: Juiciness ist redundantes Feedback, bei dem eine einzige Aktion des Spielers mehrere Reaktionen auslöst, die keine neue Information tragen. Der Bildschirm wackelt, die Punktzahl springt auf, Partikel fliegen, ein Sound ertönt. Nichts davon ist nötig, um zu wissen, was passiert ist. Alles davon verändert, wie es sich angefühlt hat.',
          'Martin Pichlmair und Mads Johansen gingen in einem Überblick über mehr als 200 wissenschaftliche Quellen und Texte aus der Praxis zum Thema Game Feel noch weiter. Sie teilen das Handwerk in drei Bereiche. Tuning betrifft die Physik: wie ein Objekt beschleunigt, wie schwer es wirkt, wie vorhersehbar es sich bewegt. Juicing ist Verstärkung: die zusätzlichen Signale, die eine Aktion kraftvoll und ihr Ergebnis klar wirken lassen. Streamlining ist Unterstützung: Das Spiel handelt nach dem, was der Spieler gemeint hat, etwa indem es ein etwas zu frühes Tippen verzeiht. Juice ist in ihrer Sicht nur eines von drei Werkzeugen, und die anderen beiden sind leiser.',
        ],
      },
      'what-the-studies-found': {
        title: 'Was die Studien tatsächlich gefunden haben',
        paragraphs: [
          'Hicks und Kollegen führten zwei Studien durch: eine mit 40 Teilnehmenden, die zwei Forschungsspiele spielten, und eine mit 32 Teilnehmenden, die eine veränderte Version von Quake 3 Arena spielten, jeweils mit und ohne visuelle Ausschmückungen. Die zusätzlichen Effekte machten die Spiele zuverlässig optisch ansprechender. Auswirkungen darauf, wie kompetent sich die Spieler fühlten, zeigten sich nur unter bestimmten Umständen. Juice ließ das Spiel besser aussehen; es sorgte nicht automatisch dafür, dass sich die Spieler darin besser fühlten.',
          'Die bisher größte Studie stammt von Dominic Kao, der 3.018 Spielern eine von vier Versionen desselben Action-Rollenspiels gab: ohne Juice, mit mittlerem, hohem oder extremem Juice. Die beiden mittleren gewannen. Sowohl die Version ohne Juice als auch die extreme führten zu deutlich kürzerem Spielen, einem schlechteren Spielerlebnis, geringerer intrinsischer Motivation und sogar schlechterer Leistung als mittleres oder hohes Juice. Zu wenig Feedback lässt ein Spiel leblos wirken; zu viel begräbt die Information, die der Spieler braucht, unter Rauschen.',
          'Diese umgekehrte U-Form ist das praktischste Ergebnis dieser ganzen Forschung. Juice ist eine Frage der Dosis, keine Tugend.',
          'Die Grenzen sollte man benennen. Beide Studien nutzten Actionspiele, bei denen schnelles Feedback zum Spaß gehört, und die „richtige“ Dosis wird in einem langsamen, nachdenklichen Genre anders aussehen. Kaos vier Versionen lagen außerdem an festen Punkten einer Skala, die Studie zeigt also, dass die Extreme verlieren, nicht genau, wo die beste Menge für ein bestimmtes Spiel liegt. Für Puzzlespiele lautet die ehrliche Zusammenfassung: Die Richtung des Befunds gilt wahrscheinlich, die genaue Dosis muss man durch Tests mit Spielern finden.',
        ],
      },
      'feel-beyond-the-screen': {
        title: 'Gefühl, das über den Bildschirm hinausgeht',
        paragraphs: [
          'Auf dem Handy ist Game Feel nicht nur visuell. Tanay Singhal und Oliver Schneider übertrugen die Idee von Juice auf Vibration und definierten „haptische Ausschmückungen“ als Vibration, die verstärkt, was der Bildschirm schon zeigt. In zwei Studien mit Menschen, die ihre eigenen Handys nutzten, machte juicy Haptik ein Spiel unterhaltsamer, attraktiver, immersiver und bedeutsamer. Ein gut getimtes Ticken unter dem Daumen kann einen Teil der Arbeit eines Bildschirmwackelns übernehmen, ohne dass es etwas zusätzlich anzuschauen gibt.',
          'Das andere Ende ist Dekoration, die überhaupt nicht reagiert. Anna-Lena Meiners und Kollegen nennen das „Lushness“: Hintergrunddetails und Objekte, mit denen man nicht interagieren kann. In einer Studie mit 31 Teilnehmenden, die vier Versionen eines Jump ’n’ Runs spielten, machte mehr Lushness das Spiel optisch ansprechender und attraktiver, veränderte aber weder, wie kompetent sich die Spieler fühlten, noch wie viel geistige Anstrengung sie angaben. Dekoration ist angenehm. Game Feel ist sie nicht.',
          'Beständigkeit zählt so viel wie Intensität. Apples [Human Interface Guidelines zur Wiedergabe von Haptik](https://developer.apple.com/design/human-interface-guidelines/playing-haptics) bitten Entwickler, Haptik einheitlich einzusetzen und eine klare, ursächliche Verbindung zwischen jeder Vibration und der Aktion herzustellen, die sie auslöst. Das gilt für jeden Feedback-Kanal. Eine Reaktion, die der Spieler vorhersehen kann, wird Teil davon, wie er das Spiel versteht; eine Reaktion, die zufällig schwankt, ist nur Rauschen.',
        ],
      },
      'juice-for-a-calm-game': {
        title: 'Juice für ein ruhiges Spiel',
        paragraphs: [
          'Das meiste, was über Juice geschrieben wird, kommt aus Actionspielen, wo mehr Energie meist der Sinn der Sache ist. Ein ruhiges Puzzlespiel hat eine andere Aufgabe. Sein Feedback muss bestätigen, was passiert ist, ohne den Puls zu heben, und es muss auf dem hundertsten Feld genauso lesbar bleiben wie auf dem ersten. Das verschiebt das Gleichgewicht zu Tuning und Streamlining, und Juice wird sparsam für die Momente eingesetzt, die es verdienen.',
          'Ein paar Regeln, nach denen wir Feedback in einem Puzzle beurteilen:',
        ],
        bullets: [
          'Bewegung sollte die Regel erklären. Ein Stein, der sanft zum Stehen kommt, zeigt dir, dass er angehalten hat, weil dort etwas war.',
          'Heb die größten Effekte für die seltensten Ereignisse auf. Ein gelöstes Feld verdient mehr als ein Zug.',
          'Lass nie einen Effekt den Teil des Feldes verdecken, den du als Nächstes lesen musst.',
          'Respektiere die Systemeinstellung „Bewegung reduzieren“ und sorg dafür, dass das Spiel auch ohne Schnörkel lesbar bleibt.',
          'Wenn ein Effekt beim ersten Mal Spaß macht und beim fünfzigsten ermüdet, ist er zu viel.',
        ],
      },
      'the-outbrick-slide': {
        title: 'Der Schub im Herzen von OutBrick',
        paragraphs: [
          'OutBrick beruht auf einem einzigen Verb: Schieb einen Stein, und er gleitet, bis ihn etwas stoppt. Weil dieses Verb in einer Sitzung hunderte Male vorkommt, zählt sein Gefühl mehr als jede Feier. Das Gleiten muss schnell genug sein, dass du nie warten musst, und lesbar genug, dass du siehst, wohin der Stein fährt, bevor er dort ankommt. Wir respektieren „Bewegung reduzieren“ überall, damit das Feld auch mit gedrosselten Effekten lesbar bleibt. Die größeren Momente gehören dem gelösten Feld, bei dem jeder der Freunde aus Steinen seinen eigenen Siegestanz hat.',
          'Das Gefühl ist auch der Grund, warum kurze Sitzungen zufrieden machen können: Eine saubere Aktion mit einer sauberen Antwort ist schon für sich eine kleine Belohnung, wie wir in [warum sich ein Zwei-Minuten-Puzzle wie ein echter Neustart anfühlen kann](/blog/why-two-minute-puzzles-feel-good) zeigen. Wenn du dein eigenes Gespür dafür testen willst, [spiel ein Feld im Browser](/play) und achte auf den Moment, in dem ein Stein anhält. Dieselbe Zurückhaltung zieht sich durch [Tetris](/blog/tetris-simple-rules-infinite-variation), wo ein großer Teil des Vergnügens aus dem Rhythmus kommt statt aus Spektakel. Wie Klang zum selben Gefühl beiträgt, steht in unserem Beitrag über [Audio-Feedback und Spielerlebnis](/blog/game-audio-feedback-player-experience), und was ein Spiel erholsam statt hektisch macht, in [was ein Puzzlespiel wirklich ruhig macht](/blog/relaxing-puzzle-games-what-makes-one-calm).',
        ],
      },
    },
    pullQuote: 'Juice ist eine Frage der Dosis, keine Tugend.',
    faqs: [
      { question: 'Was ist Juice im Spieldesign?', answer: 'Juice ist zusätzliches Feedback, das etwas verstärkt, von dem der Spieler schon weiß, dass es passiert ist: Bildschirmwackeln, Partikel, Sounds, Vibration oder federnde Animationen. Es ändert die Regeln nicht, aber es verändert, wie sich eine Aktion anfühlt.' },
      { question: 'Macht juicy Feedback Spiele besser?', answer: 'Bis zu einem gewissen Punkt. In einer Studie mit 3.018 Spielern schnitten Versionen mit mittlerem oder hohem Juice bei Spielzeit, Spielerlebnis, Motivation und Leistung besser ab als sowohl gar kein als auch extremes Juice.' },
      { question: 'Was ist der Unterschied zwischen Game Feel und Juice?', answer: 'Game Feel ist das gesamte Gefühl im Moment der Interaktion mit einem Spiel. Juice ist eine Zutat davon; andere sind das Tuning, wie sich Objekte bewegen, und das Streamlining der Steuerung, damit das Spiel tut, was der Spieler gemeint hat.' },
      { question: 'Kann ich Animationen in OutBrick reduzieren?', answer: 'Ja. OutBrick respektiert die Systemeinstellung „Bewegung reduzieren“ überall, und das Feld bleibt mit gedrosselten Effekten lesbar.' },
    ],
  },
  'procedural-puzzle-level-generation': {
    title: 'Wie Computer Puzzle-Level erzeugen und warum Prüfen zählt',
    dek: 'Prozedurale Generierung erzeugt endlos Puzzles, doch ein bloß lösbares Feld ist noch kein gutes. Wie Generatoren arbeiten und wo ihre Grenzen liegen.',
    imageAlt: 'Ein echtes OutBrick-Spielfeld auf einem iPhone, auf der einen Seite Poppy mit einem Zauberstab mit Sternspitze, auf der anderen Moss, zwischen schwebenden Steinen',
    tags: ['prozedurale Generierung', 'Level-Generierung', 'Puzzle-Design', 'Spieleentwicklung', 'Schiebepuzzle'],
    intro: 'Irgendwo zwischen dem handgezeichneten Level und dem unendlichen liegt die prozedurale Content-Generierung: Software, die Spielinhalte erzeugt, von Landschaften und Dungeons bis zu dem Puzzle, das du im Bus spielst. Für Puzzles ist sie besonders verlockend. Ein Computer erzeugt ein neues Feld in Millisekunden, und die Ideen gehen ihm nie aus. Er kann aber auch Tausende Felder erzeugen, die unlösbar, trivial oder technisch in Ordnung und völlig freudlos sind. Wie die Forschung dieses Problem angegangen ist, ist ein guter Rundgang durch die Frage, was ein Puzzle zum Puzzle macht, und eine nützliche Orientierung für Spieler, die sich fragen, ob die „endlosen Level“ auf einer Store-Seite etwas taugen.',
    keyTakeaways: [
      'Die meisten Puzzle-Generatoren arbeiten nach dem Prinzip Erzeugen und Testen: einen Kandidaten vorschlagen, ihn bewerten, die guten behalten und nach besseren suchen.',
      'Der schwierigste Teil ist der Test. Ein Generator muss beweisen, dass ein Feld lösbar ist, meist indem ein Programm es spielt, und dann beurteilen, ob es etwas taugt.',
      'Lösbar ist die Untergrenze, nicht das Ziel. Forschungsgeneratoren modellieren zunehmend Schwierigkeit und Spielerlebnis, und was erscheint, entscheidet immer noch menschliches Urteil.',
    ],
    sections: {
      'generate-and-test': {
        title: 'Erst erzeugen, dann testen',
        paragraphs: [
          '2011 kartierten Julian Togelius, Georgios Yannakakis, Kenneth Stanley und Cameron Browne ein schnell wachsendes Feld und gaben ihm einen Namen: suchbasierte prozedurale Content-Generierung. Ihr Überblick ordnet Generatoren danach, was sie erzeugen, wie dieser Inhalt im Programm dargestellt wird und vor allem, wie seine Qualität bewertet wird. Der suchbasierte Ansatz behandelt Leveldesign als Optimierung. Kandidaten erzeugen, jeden mit einer Bewertungsfunktion benoten, die besten behalten und variieren, und das Ganze wiederholen, oft mit evolutionären Algorithmen, die aus der Biologie entlehnt sind.',
          'In der Bewertungsfunktion steckt das Design. Sie kann ein Level direkt messen (wie viele Teile, wie viel freie Fläche), per Simulation (einen künstlichen Spieler es versuchen lassen und schauen, was passiert) oder interaktiv (echte Spieler fragen). Alles hat seinen Preis. Direkte Maße sind billig, aber oberflächlich. Simulation ist genauer, braucht aber ein Programm, das das Spiel tatsächlich spielen kann. Menschen zu fragen ist am genauesten und bei Weitem am langsamsten.',
          'Bei einem Schiebepuzzle kann man sich das leicht vorstellen. Ein Kandidat ist ein Raster mit Steinen darauf. Eine Variation verschiebt einen Stein, fügt einen hinzu oder entfernt einen. Ein direktes Maß könnte zählen, wie voll das Feld ist; ein simulationsbasiertes Maß übergibt das Feld einem Solver und hält fest, ob es sich lösen lässt und wie lang der gefundene Weg ist. Behalte die Felder mit guter Wertung, variiere sie erneut, und nach Tausenden Runden hat sich der Generator in Richtung dessen bewegt, was die Bewertungsfunktion belohnt. Das ist seine Stärke und seine Gefahr: Er findet genau das, wonach du gefragt hast, einschließlich Feldern, die die Zahlen erfüllen und den Spieler langweilen.',
        ],
      },
      'describing-the-space': {
        title: 'Beschreiben, wie ein gutes Feld aussieht',
        paragraphs: [
          'Eine andere Schule setzt am anderen Ende an. Statt Felder zu evolvieren und zu hoffen, dass gute dabei herauskommen, schlugen Adam Smith und Michael Mateas vor, den Raum akzeptabler Designs ausdrücklich zu beschreiben, als Menge logischer Bedingungen, und einen allgemeinen Solver Felder finden zu lassen, die sie erfüllen. Mit einer Technik namens Answer Set Programming kann ein Designer Regeln schreiben wie „der Ausgang muss erreichbar sein“ oder „dieses Teil muss sich mindestens zweimal bewegen“ und bekommt nur Felder, die sich daran halten.',
          'Der Reiz für Puzzle-Design liegt auf der Hand. Viele Dinge, die ein Feld interessant machen, sind Bedingungen: Dieser Stein muss von jenem blockiert werden, dieser Schlüssel muss gebraucht werden. Sie aufzuschreiben zwingt einen Designer zu sagen, was er eigentlich will, und diese Disziplin ist für Menschen so nützlich wie für Maschinen.',
        ],
      },
      'playability-first': {
        title: 'Beweisen, dass ein Feld lösbar ist',
        paragraphs: [
          'Egal welcher Generator: Ein Puzzle muss zuerst lösbar sein, und das zu beweisen ist oft der schwierigste Schritt. Noor Shaker, Mohammad Shaker und Julian Togelius standen damit bei Cut the Rope vor einer Herausforderung, einem Physik-Puzzle mit kontinuierlicher Zeit und kontinuierlichem Raum, bei dem Suche mit roher Gewalt aussichtslos ist. Ihre Antwort war ein schlussfolgernder Agent, der in jedem Zustand nur sinnvolle Züge vorschlug. Das verkleinerte die Suche so weit, dass eine einfache Tiefensuche Lösungen finden und bestätigen konnte, dass die erzeugten Level spielbar waren.',
          'Bilal Kartal, Nick Sohre und Stephen Guy gingen bei Sokoban, dem klassischen Kistenschiebe-Puzzle, einen anderen Weg. Ihr Generator baut Puzzles durch simuliertes Spielen mit Monte-Carlo-Baumsuche, sodass jedes erzeugte Puzzle schon durch seine Konstruktion lösbar ist. Auch Schiebepuzzles sind ein harter Fall: Das allgemeine Problem ist PSPACE-vollständig, wie unsere [Geschichte der Schiebepuzzles](/blog/history-of-sliding-block-puzzles) erklärt, es gibt also keine bekannte Abkürzung, die jedes Feld schnell löst.',
        ],
      },
      'solvable-is-not-good': {
        title: 'Lösbar ist die Untergrenze, nicht das Ziel',
        paragraphs: [
          'Ein Feld kann lösbar und trotzdem öde sein, oder nur auf einem Weg lösbar, den kein Mensch finden würde. Kartal und Kollegen gingen das direkt an. In einer Nutzerstudie suchten sie nach Merkmalen von Feldern, die sich billig berechnen ließen und damit zusammenhingen, wie schwierig Menschen die Puzzles fanden, fassten sie zu einer Bewertungsfunktion zusammen und bestätigten dann in einer zweiten Studie, dass höher bewertete Puzzles als schwieriger wahrgenommen wurden. Schwierigkeit musste also von Menschen gelernt und nicht einfach angenommen werden.',
          'Yannakakis und Togelius verallgemeinern den Punkt in ihrem Rahmenwerk für erlebnisgesteuerte prozedurale Content-Generierung: Modelliere das Erleben des Spielers, ob aus Verhalten, Selbstauskünften oder Physiologie, und erzeuge Inhalte, die es gestalten. Das ist ein ehrgeiziges Ziel, und der ehrliche Stand der Technik ist, dass Modelle von Spaß und Frust noch grob sind. Bei einem Puzzle lassen sich Qualitäten wie Eleganz, das befriedigende „Aha“ und Fairness immer noch leichter erkennen als berechnen. Was Fairness für Spieler bedeutet, betrachten wir in [was ein Puzzle fair wirken lässt](/blog/what-makes-a-puzzle-fair).',
        ],
      },
      'where-people-stay': {
        title: 'Wo Menschen im Spiel bleiben',
        paragraphs: [
          'Für Spieler ergibt sich daraus eine nützliche Faustregel. „Unendlich viele Level“ sagt dir, dass es einen Generator gibt; es sagt dir nicht, wie seine Level getestet werden. Halte Ausschau nach Spielen, die sagen, wie sie ihre Felder prüfen, und sei vorsichtig, wenn die Schwierigkeit wahllos springt. Das ist oft ein Zeichen, dass nichts sie modelliert.',
          'Ein paar weitere Zeichen für eine gut gemachte Puzzle-Sammlung, ob generiert oder nicht: Neue Ideen werden einzeln eingeführt, wie es die Forschung zum Tempo von Puzzles empfiehlt; Felder wirken eigenständig statt wie Beinahe-Kopien mit einem verschobenen Teil; und wenn du feststeckst, glaubst du, dass es eine Lösung gibt. Letzteres ist am schwersten vorzutäuschen, und Generatoren haben am längsten daran gearbeitet, es sich zu verdienen.',
          'Die 2.000 Felder von OutBrick sind eine feste, gestaltete Sammlung und kein Strom, der auf deinem Gerät erzeugt wird, und bei jedem wurde der Lösungsweg vor dem Erscheinen anhand der Regeln des Spiels selbst nachgespielt. Diesen Prozess, einschließlich der Frage, warum ein Solver, dem das Budget ausgeht, „unbekannt“ und nicht „unmöglich“ bedeutet, beschreiben wir in [wie wir 2.000 Schiebepuzzle-Felder geprüft haben](/blog/verifying-2000-sliding-block-boards). Ein Solver beweist, dass es einen Weg gibt; er beweist nicht, dass das Feld Spaß macht, und deshalb wird das Tempo gesondert beurteilt. Das Ergebnis kannst du dir selbst anschauen, im [heutigen Tagesfeld](/daily).',
        ],
      },
    },
    pullQuote: 'Ein Solver beweist, dass es einen Weg gibt; er beweist nicht, dass das Feld Spaß macht, und deshalb wird das Tempo gesondert beurteilt.',
    faqs: [
      { question: 'Was ist prozedurale Content-Generierung in Spielen?', answer: 'Das ist Software, die Spielinhalte wie Level, Karten oder Puzzles automatisch statt von Hand erzeugt. Viele Puzzle-Generatoren schlagen Kandidaten für Felder vor, testen sie und behalten oder verfeinern die besten.' },
      { question: 'Woher wissen Computer, dass ein erzeugtes Puzzle lösbar ist?', answer: 'Meist, indem ein Programm es löst, entweder durch die Suche nach einem Weg oder indem das Puzzle durch simuliertes Spielen gebaut wird, sodass schon durch die Konstruktion eine Lösung existiert. Eine echte Lösung zu prüfen ist verlässlicher, als dem Generator zu vertrauen.' },
      { question: 'Sind prozedural erzeugte Puzzles so gut wie handgemachte?', answer: 'Sie können lösbar und abwechslungsreich sein, aber Schwierigkeit, Eleganz und Fairness zu beurteilen, lässt sich noch immer schwer automatisieren. Forschungsgeneratoren lernen Schwierigkeit zunehmend aus Spielerstudien, und viele Spiele lassen einen Menschen mitentscheiden.' },
      { question: 'Werden die Felder von OutBrick zufällig erzeugt?', answer: 'Nein. OutBrick bringt eine feste Sammlung von 2.000 Feldern mit, statt beim Spielen neue zu erzeugen, und bei jedem wurde der Lösungsweg vor dem Erscheinen anhand der Regeln des Spiels nachgespielt.' },
    ],
  },
  'dynamic-difficulty-adjustment': {
    title: 'Dynamische Schwierigkeit: Sollen Spiele sich anpassen?',
    dek: 'Viele Spiele passen sich still an dein Können an. Was Studien über adaptive Schwierigkeit sagen, warum sie übermütig macht und warum Fragen besser ist.',
    imageAlt: 'Ein iPhone mit der Wochenrangliste von OutBrick, zwischen Flurry mit gestreifter Bommelmütze und einem zwinkernden gelben Zippy',
    tags: ['dynamische Schwierigkeitsanpassung', 'adaptive Schwierigkeit', 'Schwierigkeitsgrad', 'Spieldesign', 'Spielerautonomie'],
    intro: 'Du stirbst dreimal an derselben Stelle eines Spiels, und beim vierten Versuch wirkt es ein bisschen leichter. Waren die Gegner langsamer, oder hast du es endlich kapiert? Oft kannst du es nicht sagen, und das ist Absicht. Dynamische Schwierigkeitsanpassung, kurz DDA (Dynamic Difficulty Adjustment), bedeutet, die Herausforderung eines Spiels während des Spielens zu verändern, je nachdem, wie du dich schlägst. Sie verspricht jedem Spieler ein Spiel, das genau passt. Sie wirft aber auch unbequeme Fragen auf: nach Ehrlichkeit, danach, wer entscheiden darf, wie schwer ein Spiel sein soll, und danach, was ein Sieg bedeutet, wenn das Spiel geholfen hat. Hier steht, was die Forschung sagt und wo wir bei unseren eigenen Puzzles gelandet sind.',
    keyTakeaways: [
      'Adaptive Schwierigkeit verbessert in Studien oft das Spielerlebnis, aber die Details zählen: Spieler können das Gefühl von Kontrolle verlieren, wenn das System alles entscheidet.',
      'Anpassung kann Spieler ihr eigenes Können überschätzen lassen, und schon die Aussage, ein Spiel passe sich an, kann die Immersion steigern, auch wenn es das gar nicht tut.',
      'Sichtbare, in Abständen angebotene Entscheidungen über die Schwierigkeit funktionieren meist besser als verdecktes Nachjustieren oder ständige Menüs.',
    ],
    sections: {
      'what-dda-is': {
        title: 'Was dynamische Schwierigkeitsanpassung ist',
        paragraphs: [
          'Klassische Spiele legen ihre Schwierigkeit vorab fest: Du wählst am Anfang Leicht, Normal oder Schwer, oder das Spiel folgt einer festen Kurve. Wie Mohammad Zohaib in seinem Überblick über das Feld schreibt, liegt das Problem darin, dass sich Spieler dann in eine Lernkurve einfügen müssen, die jemand anderes festgelegt hat. DDA verändert Eigenschaften des Spiels in Echtzeit, etwa wie oft Gegner auftauchen, wie treffsicher sie sind oder wie viele Ressourcen du findest, um den Spieler zwischen Langeweile und Frust zu halten.',
          'Wahrscheinlich bist du ihr schon begegnet, ohne es zu wissen. Rennspielen wird seit Langem „Rubber-Banding“ vorgeworfen: Die Konkurrenten werden langsamer, wenn du zurückfällst, und schneller, wenn du davonziehst. Manche Actionspiele verteilen still mehr Gesundheit oder Munition, wenn du Mühe hast. Manche Puzzlespiele bieten nach mehreren Fehlschlägen eine leichtere Version eines Levels an. Die Techniken unterscheiden sich, die Logik ist dieselbe: den Spieler beobachten, sein Können einschätzen und die Herausforderung dorthin verschieben, wo er steht.',
          'Robin Hunickes Aufsatz „The case for dynamic difficulty adjustment in games“ von 2005 ist der übliche Ausgangspunkt. Nach gängiger Meinung, so hielt sie fest, mögen Spieler Überraschungen, fühlen sich aber betrogen, wenn sie merken, dass sich ein Spiel an sie anpasst. Ihr System Hamlet regelte in einem Ego-Shooter hinter den Kulissen Angebot und Nachfrage, und ihre vorläufigen Ergebnisse stellten einige dieser Annahmen darüber infrage, wie Spieler reagieren würden. Die Spannung, die sie benannte, ist nie verschwunden: Anpassung soll helfen, aber nur, wenn sie nicht das Erlebnis verdirbt, das sie schützen soll.',
        ],
      },
      'does-it-work': {
        title: 'Hilft Anpassung wirklich?',
        paragraphs: [
          'Oft ja, mit Einschränkungen. Dennis Ang und Alex Mitchell verglichen drei Versionen eines Spiels: ohne Anpassung, eine systemorientierte Version, die die Schwierigkeit automatisch hochfuhr, und eine spielerorientierte Version, in der die Spieler die Anpassungsentscheidungen trafen. Beide adaptiven Versionen sorgten insgesamt für ein besseres Erlebnis als die ohne Anpassung. Sie unterschieden sich aber in der Art. Spieler mit dem automatischen System fühlten sich weniger befangen und vergaßen öfter die Zeit, gaben aber auch ein geringeres Gefühl von Kontrolle an als Spieler, die selbst wählten.',
          'Dieser Zielkonflikt ist der Kern der Debatte. Verdeckte Anpassung kann die Ecken und Kanten glätten, an denen die Immersion zerbricht. Sie nimmt dem Spieler aber auch eine Entscheidung ab, und Kontrolle ist eine der Zutaten eines befriedigenden Spiels. Die richtige Antwort hängt davon ab, wofür das Spiel da ist: Ein Story-Spiel, das dich mitreißen will, nimmt den Kompromiss vielleicht in Kauf; ein Puzzlespiel, dessen Reiz darin liegt, etwas selbst herauszufinden, eher nicht.',
        ],
      },
      'the-honesty-problem': {
        title: 'Das Ehrlichkeitsproblem',
        paragraphs: [
          'Zwei Forschungsstränge machen die Sache komplizierter. Thomas Constant und Guillaume Levieux maßen das Selbstvertrauen von Spielern mit einem Wettsystem im Spiel, in drei Spielen, die logisches, motorisches und sensorisches Können prüften. Spieler, deren Schwierigkeit von einem Algorithmus angepasst wurde, neigten dazu, übermütig zu werden und ihre Erfolgschancen zu überschätzen. Die Autoren vermuten, dass dieser Schub an Selbstvertrauen ein Grund sein könnte, warum sich DDA gut anfühlt, und genau deshalb verdient es einen zweiten Blick: Ein Spiel, das sich auch deshalb gut anfühlt, weil es dich über dein Können täuscht, tut etwas Subtiles.',
          'Alena Denisova und Paul Cairns fanden das Spiegelbild. In zwei Studien mit zwei verschiedenen Spielen berichteten Spieler, denen gesagt wurde, das Spiel passe sich an sie an, von mehr Immersion, ob sich das Spiel nun tatsächlich anpasste oder nicht. Die Erwartung prägte das Erlebnis unabhängig vom Mechanismus. Die Autoren lesen das für Entwickler beruhigend: Spielern von Anpassung zu erzählen, scheint nicht nach hinten loszugehen. Es zeigt aber auch, wie viel von „dieses Spiel versteht mich“ in den Erwartungen des Spielers liegt.',
        ],
      },
      'give-players-the-dial': {
        title: 'Warum man Spielern den Regler geben sollte',
        paragraphs: [
          'Wenn Kontrolle zählt, warum fragt man Spieler dann nicht einfach? Auch das testeten Ang und Mitchell, mit 84 Teilnehmenden. Sie variierten, wie Entscheidungen über die Schwierigkeit präsentiert wurden, entweder in die Spielmechanik eingebaut oder als direkte Einstellung, und wie oft sie angeboten wurden: einmal, in Abständen oder ständig. In das Spiel integrierte Entscheidungen verbesserten einige Aspekte des Erlebnisses, und Entscheidungen in Abständen schlugen sowohl eine einzige Wahl zu Beginn als auch einen ständigen Strom davon. Einmal zu fragen ist zu starr; ständig zu fragen macht aus Spielen Verwaltungsarbeit.',
          'Zusammengenommen legen die Belege einen Mittelweg nahe, den viele beliebte Spiele schon gehen. Biete Hilfe in natürlichen Momenten an, mach sie sichtbar, lass Spieler sie ablehnen und tu nicht so, als wäre ein Sieg mit Hilfe etwas anderes. Der Assist-Modus von Celeste ist ein gefeiertes Beispiel, über das wir in [Celestes Assist-Modus: Barrierefreiheit als besseres Design](/blog/celeste-assist-mode-accessibility) schreiben.',
        ],
        bullets: [
          'Ändert das Spiel die Schwierigkeit, ohne es dir zu sagen?',
          'Kannst du die Hilfe, die es gibt, sehen und abschalten?',
          'Werden Entscheidungen in natürlichen Pausen angeboten, statt nur zu Beginn oder ständig?',
          'Zählt ein Feld, das du mit Hilfe gelöst hast, trotzdem, ohne Scham?',
        ],
      },
      'outbrick-fixed-boards': {
        title: 'Warum OutBrick seine Felder nicht verändert',
        paragraphs: [
          'Für ein Schiebepuzzle mit Steinen haben wir uns für sichtbare Hilfe statt verdeckter Anpassung entschieden. Jedes der 2.000 Felder von OutBrick ist fest und wurde vor dem Erscheinen per Solver geprüft, und jedes Feld zeigt seine Zugvorgabe und sein Zuglimit ab dem ersten Tippen. Das Puzzle, vor dem du sitzt, ist also das Puzzle, vor dem alle sitzen. Ein gelöstes Feld heißt, dass du einen Weg durch genau dieses Feld gefunden hast.',
          'Hilfe gibt es, aber du bittest darum, und du siehst sie. Die erste Zugrücknahme auf jedem Feld ist gratis. Sitzt ein Feld fest, sagt dir das Rettungsfenster das und bietet eine kostenlose Zugrücknahme an. Gehen dir die Züge aus, bekommst du vor allem anderen fünf weitere angeboten, bezahlt mit Münzen oder, wenn du willst, mit einem Belohnungsvideo. Auf der Startseite steht [genau, was Leben, Zugrücknahmen und Werbung kosten](/#fair). Nichts davon verändert das Feld hinter deinem Rücken.',
          'Das ist eine Entscheidung, die zu einem Puzzlespiel passt, kein Urteil über DDA überall. Mehr darüber, wie man Herausforderung über ein ganzes Spiel gestaltet, findest du in [wie man eine freundlichere Schwierigkeitskurve baut](/blog/kinder-difficulty-curve) und [was ein Puzzle fair wirken lässt](/blog/what-makes-a-puzzle-fair).',
        ],
      },
    },
    pullQuote: 'Einmal zu fragen ist zu starr; ständig zu fragen macht aus Spielen Verwaltungsarbeit.',
    faqs: [
      { question: 'Was ist dynamische Schwierigkeitsanpassung?', answer: 'Dynamische Schwierigkeitsanpassung (DDA) bedeutet, dass ein Spiel seine Herausforderung während des Spielens verändert, je nachdem, wie sich der Spieler schlägt, zum Beispiel indem Gegner nach wiederholten Fehlschlägen schwächer werden. Ziel ist, Spieler zwischen Langeweile und Frust zu halten.' },
      { question: 'Ist dynamische Schwierigkeitsanpassung gut oder schlecht?', answer: 'Studien stellen oft fest, dass sie das Spielerlebnis verbessert, doch verdeckte Anpassung kann das Gefühl von Kontrolle schwächen und wurde mit Selbstüberschätzung in Verbindung gebracht. Sichtbare, freiwillige Hilfe in natürlichen Momenten vermeidet diese Nachteile meist.' },
      { question: 'Woran erkenne ich, ob ein Spiel seine Schwierigkeit anpasst?', answer: 'Das ist oft schwer zu erkennen, und genau das ist Teil der Debatte. Achte auf Einstellungen oder Store-Beschreibungen, die adaptive oder unterstützte Schwierigkeit erwähnen, und darauf, ob das Spiel Hilfe offen anbietet oder sich scheinbar unausgesprochen verändert.' },
      { question: 'Passt OutBrick die Schwierigkeit an den Spieler an?', answer: 'Nein. Jedes Feld ist fest und per Solver geprüft, und seine Zugvorgabe und sein Limit stehen ab dem ersten Tippen da. Hilfe wie die kostenlose erste Zugrücknahme oder fünf weitere Züge wird offen angeboten, und du entscheidest, ob du sie annimmst.' },
    ],
  },
  'game-tutorials-that-teach-without-telling': {
    title: 'Tutorials, die ohne Worte lehren: was funktioniert',
    dek: 'Laut einer Studie mit 45.000 Spielern lohnten sich Tutorials nur in komplexen Spielen. Was die Forschung über Lernen im Spiel und die erste Stunde sagt.',
    imageAlt: 'Ein iPhone mit der Reisekarte von OutBrick bei der Button Factory, zwischen Flurry mit Bommelmütze und Bloo mit seiner Uhr',
    tags: ['Spiel-Tutorials', 'Onboarding', 'Spieldesign', 'Tutorial-Design', 'Lernen im Spiel'],
    intro: 'Die meisten von uns haben schon ein Tutorial übersprungen. Manche haben ein Tutorial übersprungen, sich verirrt und sind zurückgegangen. Einige haben ein Spiel gelöscht, weil der Einstieg aus zehn Bildschirmen voller Anweisungen bestand, bevor man überhaupt etwas anfassen durfte. Neue Spieler anzulernen ist eine der schwersten Aufgaben im Spieldesign: Erklärst du zu wenig, schwimmen sie; erklärst du zu viel, gehen sie, bevor das Spiel überhaupt anfängt. Die gute Nachricht: Das ist einer der besser erforschten Winkel des Spieldesigns, mit Experimenten an Zehntausenden Spielern. Die Ergebnisse sind erstaunlich einheitlich, und sie weisen auf Spiele hin, die vor allem dadurch lehren, dass sie dich spielen lassen.',
    keyTakeaways: [
      'In einer Studie mit mehr als 45.000 Spielern steigerten Tutorials die Spielzeit im komplexesten Spiel um bis zu 29 %, machten in zwei einfacheren aber keinen signifikanten Unterschied.',
      'Im Spiel selbst zu lehren, in dem Moment, in dem eine Mechanik wichtig wird, schnitt bei Emotionen und Motivation besser ab als ein separater Anleitungsbildschirm.',
      'Hinweise und Erklärungen können nach hinten losgehen: In einer Studie mit 50.000 Schülerinnen und Schülern senkte jedes getestete Hinweissystem die Leistung im Vergleich zu gar keinen Hinweisen.',
    ],
    sections: {
      'the-45000-player-test': {
        title: 'Der Test mit 45.000 Spielern',
        paragraphs: [
          '2012 führten Erik Andersen und Kollegen an der University of Washington eines der größten je veröffentlichten Tutorial-Experimente durch. Sie bauten acht Tutorial-Varianten in drei unterschiedlich komplexe Spiele ein, gaben sie mehr als 45.000 Spielern online und maßen, wie lange die Leute spielten und ob sie wiederkamen. Die Spiele waren Refraction, ein Puzzlespiel über das Aufteilen von Lichtstrahlen; Hello Worlds, ein Jump ’n’ Run; und Foldit, ein weit komplexeres Spiel über das Falten von Proteinen. Die Ergebnisse waren eindeutig. Im komplexesten Spiel steigerten Tutorials die Spielzeit um bis zu 29 %. In den beiden einfacheren Spielen verbesserten sie die Bindung überhaupt nicht signifikant.',
          'Das Fazit der Autoren lohnt es, sinngemäß zu zitieren: Investitionen in Tutorials sind bei Spielen, deren Mechaniken sich durch Ausprobieren entdecken lassen, womöglich nicht gerechtfertigt. Das ist kein Argument gegen das Lehren. Es ist ein Argument dafür, Mechaniken entdeckbar zu machen, damit das Spiel selbst lehrt und die Worte wegfallen können.',
        ],
      },
      'teach-in-context': {
        title: 'Lehren, wenn es darauf ankommt',
        paragraphs: [
          'Wo Anleitung nötig ist, zählt das Timing. Julian Frommel und Kollegen verglichen mit 39 Spielern zwei Versionen eines Tutorials für ein Virtual-Reality-Spiel: einen klassischen Anleitungsbildschirm zu Beginn und ein kontextsensitives Tutorial, das jede Mechanik erklärte, sobald sie im Spiel relevant wurde. Leistung und Immersion waren ähnlich, doch die kontextsensitive Version erzeugte mehr positive Gefühle, weniger negative Gefühle und höhere Motivation. Ihr Fazit sollte sich jeder Designer an die Wand hängen. Ein Tutorial ist keine separate Einführung ins Spiel, es ist Teil des Erlebnisses.',
          'Apples eigene Richtlinien für Apps kommen aus einer anderen Richtung zum selben Punkt: Onboarding soll schnell, unterhaltsam und optional sein und, wo möglich, aus kontextbezogenen Tipps bestehen, weil Menschen mehr behalten, wenn sie eine Aufgabe ausführen, als wenn sie darüber lesen. Apples [Human Interface Guidelines zum Onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding) sind lesenswert für alle, die einen ersten Start gestalten.',
        ],
      },
      'one-idea-at-a-time': {
        title: 'Eine Idee nach der anderen',
        paragraphs: [
          'Große Puzzlespiele lehren seit Langem ohne Worte, und die Forschung hat begonnen zu beschreiben, wie. Conor Linehan und Kollegen analysierten Let’s-Play-Videos von Portal, dem Koop-Modus von Portal 2, Braid und Lemmings. In jedem wurden die wichtigsten Fähigkeiten einzeln eingeführt, mit einfachen Puzzles, die nur diese Fähigkeit brauchten. Dann übten die Spieler, die neue Fähigkeit mit früheren zu kombinieren, und die Puzzles wurden komplexer, bis die nächste Fähigkeit kam.',
          'Diese Struktur ist ein verkleidetes Tutorial. Jedes einführende Puzzle ist eine Lektion mit genau einer richtigen Schlussfolgerung, und es zu lösen ist der Beweis, dass du sie gelernt hast. Es muss nichts gesagt werden, denn das Feld selbst stellt die Frage und prüft die Antwort. Es ist dasselbe Prinzip, das wir in [wie Spiele Neugier ohne Vortrag lehren](/blog/games-teach-curiosity-without-lecture) untersucht haben, und in der Art, wie [Minecraft Entdeckungen die nächste Schicht bauen lässt](/blog/minecraft-layered-discovery).',
        ],
      },
      'when-help-hurts': {
        title: 'Wenn Hilfe schadet',
        paragraphs: [
          'Hinweise wirken wie eine selbstverständliche Freundlichkeit, doch die Beleglage ist gemischt. Eleanor O’Rourke, Christy Ballweber und Zoran Popović testeten vier Hinweissysteme, nachempfunden erfolgreichen Designs aus Lernsoftware und kommerziellen Spielen, in einem Lern-Puzzlespiel, das von 50.000 Schülerinnen und Schülern gespielt wurde. Alle vier senkten die Leistung im Vergleich zu einer Version ohne Hinweise. Die Autoren betonen ausdrücklich, dass das nicht heißt, Hinweise würden nie funktionieren, nur dass sich Designs aus anderen Zusammenhängen nicht auf ein Spiel übertragen ließen.',
          'Eine plausible Lesart ist, dass ein Hinweis genau das unterbrechen kann, was ein Puzzle lohnend macht: den Moment, in dem du draufkommst. Kommt ein Hinweis, bevor du Gelegenheit hattest, dich abzumühen, nimmt er dir diesen Moment. Kommt er als Textwand, reißt er dich aus dem Feld.',
          'Das heißt nicht, Spieler allein vor einer Wand stehen zu lassen. Es legt ein paar Grundsätze für Hilfe nahe, die das Puzzle respektiert: Biete sie auf Nachfrage an statt automatisch; halte den ersten Hinweis klein, einen Stupser dorthin, wo man hinschauen sollte, statt zu sagen, was zu tun ist; und lass den Spieler entscheiden, ob er den nächsten will. Hilfe, die der Spieler selbst wählt, lässt ihm seine Lösung.',
        ],
      },
      'the-first-hour': {
        title: 'In der ersten Stunde geht es um Neugier',
        paragraphs: [
          'Gifford Cheung, Thomas Zimmermann und Nachiappan Nagappan analysierten mehr als 200 Spielekritiken und befragten Fachleute aus der Branche zur ersten Spielstunde. Der gängige Rat der Branche lautet, ein Spiel müsse ab der ersten Sekunde Spaß machen. Sie argumentieren, dass Neugier und Information genauso wichtig sind: In der ersten Sitzung entscheiden Spieler, ob sich ein Spiel lohnt, und ein Spiel, das sie neugierig darauf macht, was als Nächstes kommt, kann sie halten, auch wenn der Einstieg nicht perfekt ist.',
          'OutBrick ist unser eigener Test dieser Ideen. Seine Regel passt in einen Satz: Schieb einen Stein, und er gleitet, bis ihn etwas stoppt, und er verlässt das Feld nur durch das Tor in seiner Farbe. Das ist genau die Art Mechanik, die man laut Andersens Studie durch Ausprobieren entdecken kann, denn ein einziger Schub zeigt dir das meiste davon. Schlüssel, Schlösser, Kisten und Tore kommen auf späteren Feldern, wenn dir die Grundidee schon gehört. Wie gut das funktioniert, kannst du selbst beurteilen, indem du [ein Feld im Browser spielst](/play), ganz ohne Anleitung, und wenn du danach tiefer einsteigen willst, ist unser Ratgeber [Schiebepuzzle lösen](/blog/how-to-solve-sliding-block-puzzles) da, wenn du ihn brauchst.',
        ],
      },
    },
    pullQuote: 'Ein Tutorial ist keine separate Einführung ins Spiel, es ist Teil des Erlebnisses.',
    faqs: [
      { question: 'Funktionieren Spiel-Tutorials?', answer: 'Das hängt vom Spiel ab. Eine Studie mit mehr als 45.000 Spielern ergab, dass Tutorials die Spielzeit in einem komplexen Spiel um bis zu 29 % steigerten, in zwei einfacheren Spielen, deren Mechaniken man durch Ausprobieren lernen konnte, aber keinen signifikanten Unterschied machten.' },
      { question: 'Wie bringt man Spielern ein Spiel am besten bei?', answer: 'Die Forschung spricht dafür, im Spiel selbst zu lehren: eine Mechanik nach der anderen mit einfachen Herausforderungen einführen, Dinge in dem Moment erklären, in dem sie relevant werden, und Texte kurz halten. Separate Anleitungsbildschirme motivieren meist weniger.' },
      { question: 'Sind Hinweise gut für Puzzlespiele?', answer: 'Nicht immer. In einer Studie mit 50.000 Schülerinnen und Schülern, die ein Lern-Puzzlespiel spielten, senkten vier verschiedene Hinweissysteme allesamt die Leistung im Vergleich zu gar keinen Hinweisen. Hinweise brauchen also sorgfältiges Design und gutes Timing.' },
      { question: 'Wie lernt man OutBrick?', answer: 'Indem man einen Stein schiebt. Er gleitet, bis ihn etwas stoppt, und verlässt das Feld nur durch das Tor in seiner Farbe; Schlüssel, Schlösser, Kisten und Tore kommen auf späteren Feldern. Du kannst [ein Feld im Browser ausprobieren](/play), bevor du irgendetwas installierst.' },
    ],
  },
  'game-audio-feedback-player-experience': {
    title: 'Der Klang des Erfolgs: wie Sound das Spielerlebnis prägt',
    dek: 'Sound verändert, wie gefesselt, angespannt und kompetent sich Spieler fühlen, und Musik kann sogar das Zeitgefühl verbiegen. Was die Forschung zeigt.',
    imageAlt: 'Ein iPhone mit der Reisekarte von OutBrick in Cherry Blossom Town, zwischen Moss mit Werkzeuggürtel und einem zwinkernden gelben Zippy',
    tags: ['Game Audio', 'Sounddesign', 'Spielmusik', 'Feedback in Spielen', 'Spielerlebnis'],
    intro: 'Schalte in einem Spiel, das du gut kennst, den Ton aus, und etwas Seltsames passiert. An den Regeln hat sich nichts geändert, und doch wirkt es flacher, langsamer, merkwürdig unsicherer. Das Klicken, wenn ein Teil landet, der aufsteigende Ton, wenn du kurz vor der Lösung stehst, der kleine Akkord bei einem Sieg: Sie haben dir Dinge gesagt, ohne dass du gemerkt hast, dass dir etwas gesagt wird. Sound ist einer der wirkungsvollsten und unsichtbarsten Teile des Spieldesigns. Forscher haben seine Wirkung auf Immersion, Gefühle und sogar darauf gemessen, wie lange Spieler glauben, gespielt zu haben. Und weil so viele Menschen auf dem Handy ohne Ton spielen, steckt in der Forschung auch eine Lehre darüber, was Sound nie allein leisten sollte.',
    keyTakeaways: [
      'In einem kontrollierten Experiment verbesserte eingeschalteter Spielsound jede gemessene Dimension des Spielerlebnisses, von Immersion und Flow bis zu Kompetenz und positiven Gefühlen.',
      'Soundtrack-Musik steigert das Vergnügen vor allem, indem sie Gefühle verstärkt, und die Wahl der Musik kann das Spielen mehr oder weniger immersiv wirken lassen.',
      'Weil viele Menschen stumm spielen, sollte Sound Informationen verstärken, die auch auf dem Bildschirm zu sehen sind, und sie nie allein tragen.',
    ],
    sections: {
      'sound-does-work': {
        title: 'Sound leistet messbare Arbeit',
        paragraphs: [
          'Lennart Nacke, Mark Grimshaw und Craig Lindley führten eines der ersten sorgfältigen Experimente zu Spielsound durch. Die Teilnehmenden spielten einen schnellen Ego-Shooter, in dem Soundeffekte und Musik unabhängig voneinander an- oder ausgeschaltet waren, während die Forscher Hautleitfähigkeit und Gesichtsmuskelaktivität aufzeichneten und einen standardisierten Fragebogen zum Spielerlebnis einsetzten. Die physiologischen Messungen zeigten keine signifikanten Effekte. Der Fragebogen schon: Sound hatte einen signifikanten Effekt auf jede Dimension, die er maß, darunter Immersion, Anspannung, Kompetenz, Flow, Herausforderung sowie positive und negative Gefühle. Sound und Musik wirkten außerdem in ihrem Effekt auf Anspannung und Flow zusammen.',
          'Diese Kombination ist aufschlussreich. Die Spieler spürten den Unterschied, deutlich und durchgehend, obwohl die damals verfügbaren Körpermessungen ihn nicht erfassten. Sound ist keine Dekoration, die über das Spielen gelegt wird; für den Spieler ist er Teil dessen, was Spielen ist.',
          'In der Praxis erledigt Spielsound zwei Arten von Aufgaben. Manche Klänge tragen Information: ein Klicken, das bestätigt, dass ein Zug registriert wurde, ein anderer Ton, wenn eine Aktion scheitert, ein aufsteigender Ton, wenn du dich einem Ziel näherst. Andere tragen Gefühl: Musik, Atmosphäre, die Textur einer Welt. Die informierende Art funktioniert am besten, wenn sie kurz, einheitlich und genau einer Bedeutung zugeordnet ist. Die emotionale Art funktioniert am besten, wenn sie zu dem passt, was das Spiel dich fühlen lassen will, und hier kommt die nächste Studie ins Spiel.',
        ],
      },
      'music-and-emotion': {
        title: 'Musik wirkt über Gefühle',
        paragraphs: [
          'Warum macht Musik ein Spiel unterhaltsamer? Christoph Klimmt und Kollegen prüften in zwei Experimenten mit jungen männlichen Spielern zwei mögliche Wege: 68 spielten Assassin’s Creed: Black Flag und 59 Alien: Isolation, jeweils mit oder ohne Soundtrack. Der erste Weg war emotional: Musik verstärkt Gefühle, und stärkere positive Gefühle bedeuten mehr Vergnügen. Der zweite war kognitiv: Musik könnte das Gefühl vertiefen, in der Spielwelt zu sein oder sich mit der Figur zu identifizieren.',
          'Die Belege sprachen für den emotionalen Weg. Soundtrack-Musik steigerte das Vergnügen indirekt über positive Gefühle, und im Horrorspiel verstärkte schockierende Musik das Horrorerlebnis. Dass Musik über ein stärkeres Gefühl von Präsenz oder Identifikation wirkt, fanden die Forscher nicht. Die Stichproben waren eng, die Details lassen sich also womöglich nicht verallgemeinern, aber die Lehre für Designer ist plausibel: Musik versteht man am besten als emotionales Instrument, und ihr emotionaler Ton sollte zu dem passen, was das Spiel den Spieler fühlen lassen will.',
        ],
      },
      'time-and-immersion': {
        title: 'Musik, Immersion und verlorene Zeit',
        paragraphs: [
          'Die Zeit zu vergessen ist eines der am häufigsten genannten Anzeichen von Immersion. Timothy Sanders und Paul Cairns prüften, ob Musik das bewirken kann. Sie unterlegten ein einfaches Labyrinthspiel mit Musik und maßen das Gefühl der Spieler für die verstrichene Zeit mit zwei in der Psychologie gut etablierten Methoden. Musik veränderte die Zeitwahrnehmung bei einer der beiden Messungen, bei der anderen nicht, und je nach gewählter Musik konnte sie die Immersion entweder steigern oder senken.',
          'Die Autoren beschreiben das Gesamtbild als komplex, und das ist die ehrliche Zusammenfassung. Musik kann das Spielen fesselnder machen, doch die falsche Musik kann es weniger fesselnd machen, und ihre Wirkung auf die Zeit ist real, aber nicht einfach. Für ein ruhiges Spiel ist das ein Grund, Musik sorgfältig auszuwählen und Spieler sie leiser stellen zu lassen, statt anzunehmen, dass mehr Soundtrack mehr Vergnügen bedeutet. Über die anderen Zutaten eines erholsamen Spiels haben wir in [was ein Puzzlespiel wirklich ruhig macht](/blog/relaxing-puzzle-games-what-makes-one-calm) geschrieben.',
        ],
      },
      'when-sound-fades': {
        title: 'Wenn Sound in den Hintergrund tritt',
        paragraphs: [
          'Sound dominiert nicht immer. Katja Rogers und Kollegen verglichen dasselbe Horrorspiel auf einem Monitor und in Virtual Reality und testeten dann verschiedene Arten von räumlichem Audio in VR. Sie stellten fest, dass Audio in VR einen eher impliziten Einfluss auf das Erlebnis hatte, weil der gesamte Sinneseindruck so stark war, und dass die räumliche Dimension des Audios dort offenbar kein signifikanter Faktor für das Spielerlebnis war.',
          'Das ist eine nützliche Korrektur. Was Sound beiträgt, hängt von allem anderen ab, was beim Spieler ankommt, und in einer reichen visuellen Umgebung wird er vielleicht eher gespürt als bemerkt. Andersherum gelesen legt dasselbe Ergebnis nahe, warum ein kleines, schlichtes Spiel so sehr von Sound profitieren kann. Wenn der Bildschirm still ist, arbeitet das Ohr mehr.',
        ],
      },
      'design-for-sound-off': {
        title: 'Für ausgeschalteten Ton gestalten',
        paragraphs: [
          'Hier liegt die praktische Spannung. Sound zählt für das Erlebnis, und doch sind Handys einen großen Teil ihres Lebens stumm geschaltet: im Zug, im Wartezimmer, neben dem schlafenden Partner. Wer gehörlos oder schwerhörig ist, hört ihn vielleicht nie. Sound sollte also verstärken, nicht tragen. Jedes Audiosignal, das dem Spieler etwas mitteilt, sollte ein visuelles Gegenstück haben, idealerweise auch ein haptisches; Tanay Singhal und Oliver Schneider fanden heraus, dass gut gestaltete Vibration, die das Feedback auf dem Bildschirm verstärkt, selbst dazu beitragen kann, dass sich ein Spiel unterhaltsamer und immersiver anfühlt.',
          'OutBrick ist so gestaltet, dass es sich vollständig ohne Ton spielen lässt. Die neun Freunde aus Steinen haben keine Stimmen und sprechen nur in Sprechblasen, und alles, was auf einem Feld zählt, vom Anhalten eines Steins bis zum gelösten Feld, wird auf dem Bildschirm gezeigt. Aus demselben Grund wird Farbe auf jedem Stein durch Symbole ergänzt, standardmäßig eingeschaltet: Kein einzelner Sinn sollte der einzige Zugang sein. Unsere [Seite zur Barrierefreiheit](/accessibility) listet den Rest auf, und unser Beitrag über [Game Feel und Juice](/blog/game-feel-and-juice) zeigt, wie Feedback über die Sinne hinweg wirkt. Warum Farbe nie der einzige Hinweis sein sollte, steht in [warum Farbe in einem Puzzle nie der einzige Hinweis sein sollte](/blog/color-shape-accessibility).',
        ],
        bullets: [
          'Kopple jeden bedeutsamen Klang an ein visuelles Signal.',
          'Gib Musik, Effekten und jeder Stimme eigene Lautstärkeregler.',
          'Heb den markantesten Klang für den seltensten, schönsten Moment auf.',
          'Teste das ganze Spiel stumm, bevor du es veröffentlichst.',
        ],
      },
    },
    pullQuote: 'Wenn der Bildschirm still ist, arbeitet das Ohr mehr.',
    faqs: [
      { question: 'Wie beeinflusst Sound das Spielerlebnis?', answer: 'In einem kontrollierten Experiment verbesserte eingeschalteter Spielsound die Bewertungen der Spieler für Immersion, Flow, Kompetenz, Anspannung, Herausforderung und Gefühle. Vor allem Musik steigert das Vergnügen, indem sie Gefühle verstärkt.' },
      { question: 'Kann Spielmusik verändern, wie sich Zeit anfühlt?', answer: 'Ja. Eine Studie ergab, dass Musik in einem Labyrinthspiel die Wahrnehmung der verstrichenen Zeit bei einer von zwei Messungen veränderte und dass unterschiedliche Musik die Immersion entweder steigern oder senken konnte.' },
      { question: 'Sollten Handyspiele ohne Ton funktionieren?', answer: 'Ja. Viele Menschen spielen stumm, und manche können Audio gar nicht hören. Jedes wichtige Klangsignal sollte deshalb auch auf dem Bildschirm zu sehen sein und idealerweise von Vibration unterstützt werden.' },
      { question: 'Kann ich OutBrick ohne Ton spielen?', answer: 'Ja. Alles, was auf einem Feld zählt, wird auf dem Bildschirm gezeigt, und die neun Freunde aus Steinen sprechen nur in Sprechblasen, ohne Stimmen.' },
    ],
  },
  'loot-boxes-ethical-monetisation': {
    title: 'Lootboxen, variable Belohnungen und faire Monetarisierung',
    dek: 'Lootbox-Ausgaben hängen durchgängig mit Glücksspielproblemen zusammen. Was Studien zeigen, was Monetarisierung räuberisch macht, und ein fairer Test.',
    imageAlt: 'Ein iPhone mit der Reisekarte von OutBrick beim Cloud Carnival, zwischen einem zwinkernden gelben Zippy und einem roten Bricko',
    tags: ['Lootboxen', 'Monetarisierung', 'Ethik in Spielen', 'Handyspiele', 'Glücksspiel in Spielen'],
    intro: 'Eine Lootbox ist eine einfache Sache: bezahlen, öffnen, etwas bekommen, aber was, weißt du erst, wenn es zu spät ist, es dir anders zu überlegen. Lootboxen gehören inzwischen zu den am besten erforschten Elementen von Spielen und zu den am stärksten regulierten. Die Forschung ist mittlerweile umfangreich genug, um manches klar zu sagen und ehrlich zu sein, was sie noch nicht sagen kann. Sie liefert Spielern und Entwicklern außerdem einen praktischen Test für jede Art, wie ein Spiel um Geld bittet, auch für unsere. OutBrick verdient Geld mit optionalen Käufen und freiwilligen Belohnungsvideos, deshalb haben wir am Ende versucht, denselben Test auf uns selbst anzuwenden.',
    keyTakeaways: [
      'Über viele Studien hinweg hängen Ausgaben für Lootboxen mit Symptomen problematischen Glücksspiels zusammen; eine Metaanalyse bezifferte die Korrelation auf etwa 0,26, klein, aber reproduzierbar.',
      'Die Studien sind überwiegend Befragungen und können daher nicht sagen, ob Lootboxen problematisches Glücksspiel verursachen oder Menschen anziehen, die es schon haben; beides ist ein Grund zur Vorsicht.',
      'Faire Monetarisierung zeigt den vollen Preis und die Belohnung, bevor du dich festlegst, verschleiert nie die langfristigen Kosten und sorgt dafür, dass Nein sagen nichts kostet.',
    ],
    sections: {
      'what-a-loot-box-is': {
        title: 'Was eine Lootbox ist und warum sie Glücksspiel ähnelt',
        paragraphs: [
          'Eine Lootbox ist ein Gegenstand, den du mit echtem Geld kaufst, direkt oder über eine Spielwährung, und dessen Inhalt zufällig bestimmt wird. Zu ihren nahen Verwandten gehören Kartenpacks, Gacha-Ziehungen und Glücksräder. Psychologisch besonders macht sie die variable Belohnung: Du weißt nicht, was du bekommst, und ab und zu bekommst du etwas Seltenes. Unvorhersehbare Belohnungen gehören zu den zuverlässigsten bekannten Mitteln, Menschen dazu zu bringen, ein Verhalten zu wiederholen, und genau deshalb werden sie eingesetzt.',
          '2018 verglichen Aaron Drummond und James Sauer die Lootbox-Systeme von 22 aktuellen Spielen mit fünf Kriterien, an denen Psychologen und Regulierungsbehörden Glücksspiel erkennen, darunter ein Tausch von Geld oder etwas Wertvollem, ein Ergebnis, das zumindest teilweise vom Zufall abhängt, und Gewinner, die auf Kosten von Verlierern gewinnen. Fast die Hälfte der Spiele erfüllte alle fünf. Ihr Argument war nicht, dass jede Lootbox illegales Glücksspiel ist, denn das ist eine rechtliche Frage, die von Land zu Land unterschiedlich beantwortet wird, sondern dass viele psychologisch damit verwandt sind.',
        ],
      },
      'what-the-evidence-shows': {
        title: 'Was die Belege zeigen',
        paragraphs: [
          'Die bekannteste Studie ist eine große Befragung von 7.422 Spielern durch David Zendle und Paul Cairns. Je mehr Menschen für Lootboxen ausgaben, desto schwerer waren tendenziell ihre Symptome problematischen Glücksspiels. Der Zusammenhang war, gemessen an der erklärten Varianz, etwa dreizehnmal stärker als der zwischen problematischem Glücksspiel und Ausgaben für andere Gegenstände im Spiel. Das deutet darauf hin, dass es auf das glücksspielartige Element ankommt und nicht auf Ausgaben im Allgemeinen.',
          'Eine Folgestudie von Zendle, Rachel Meyer und Harriet Over mit 1.155 Spielern im Alter von 16 bis 18 Jahren fand denselben Zusammenhang, und zwar stärker: von mittlerer bis großer Stärke. Viele der Gründe, die junge Spieler für den Kauf von Lootboxen nannten, glichen gängigen Gründen fürs Glücksspiel. 2021 fassten Shaun Garea und Kollegen die Literatur in einer Metaanalyse zusammen. Über 15 Studien hinweg korrelierten Lootbox-Ausgaben mit problematischem Glücksspiel bei etwa r = 0,26, und über sieben Studien mit exzessivem Spielen bei etwa r = 0,25. Sie beschreiben das als kleinen, aber reproduzierbaren Zusammenhang, der klinisch relevant sein könnte.',
        ],
      },
      'what-the-link-means': {
        title: 'Was der Zusammenhang bedeutet und was nicht',
        paragraphs: [
          'Diese Studien sind überwiegend Querschnittsbefragungen und können uns daher nicht sagen, in welche Richtung der Pfeil zeigt. Lootboxen könnten Menschen in Richtung problematisches Glücksspiel ziehen. Oder Menschen, die schon ein Glücksspielproblem haben, geben viel für Lootboxen aus, weil sie eben da sind. Zendle und Cairns sagen ausdrücklich, dass ihre Daten das nicht trennen können. Ihr Punkt ist, dass beide Erklärungen beunruhigend sind: In der einen richtet das Spiel Schaden an; in der anderen profitiert es überproportional von Menschen, die ohnehin verletzlich sind.',
          'Daniel King und Paul Delfabbro gaben dem größeren Problem einen Namen: räuberische Monetarisierung, also Kaufsysteme, die die langfristigen Kosten einer Aktivität verschleiern oder zurückhalten, bis Spieler finanziell und psychologisch schon festgelegt sind. Lootboxen sind eine Form davon. Andere sind Angebote, die auf Momente des Frusts abgestimmt sind, und Währungen, die Preise schwer vergleichbar machen sollen. Diese Tricks betrachten wir genauer in [Dark Patterns in Handyspielen](/blog/dark-patterns-in-mobile-games).',
        ],
      },
      'a-fair-monetisation-test': {
        title: 'Ein fairer Test dafür, wie ein Spiel um Geld bittet',
        paragraphs: [
          'Kostenlose Spiele müssen irgendwie bezahlt werden, und um Geld zu bitten ist an sich nicht falsch. Die Forschung weist auf eine Handvoll Fragen hin, die einen fairen Tausch von einem räuberischen trennen. Sie sind für Eltern, die das Spiel ihres Kindes prüfen, genauso nützlich wie für ein Studio, das einen Shop gestaltet.',
        ],
        bullets: [
          'Weißt du genau, was du bekommst, bevor du bezahlst, mit Geld oder mit Zeit?',
          'Sind die vollen Kosten klar, oder verstecken sie sich hinter einer Währung, einem Paket oder einem Timer?',
          'Kommst du im eigentlichen Spiel voran, ohne zu bezahlen?',
          'Kostet dich Nein sagen etwas, oder macht das Spiel das Ablehnen unangenehm?',
          'Sind Angebote auf deine schlechtesten Momente abgestimmt, etwa direkt nach einem Fehlschlag?',
          'Gibt es eine vernünftige Grenze, oder können Ausgaben und Wiederholung endlos weitergehen?',
        ],
      },
      'where-outbrick-stands': {
        title: 'Wo OutBrick steht',
        paragraphs: [
          'OutBrick verdient auf zwei Wegen Geld: mit optionalen In-App-Käufen und mit Belohnungsvideos, die nur laufen, wenn du auf einen Knopf drückst, um etwas zu bekommen. Es gibt sechs Stellen: ein Leben, fünf weitere Züge, zwei Zugrücknahmen, ein Booster, der schon vor dem ersten Zug bereitsteht, die Münzen der Abschlusskarte noch einmal und ein zweiter Dreh am Brick Wheel. Für jede gilt ein eigenes Tageslimit, acht, sechs, acht, vier, vier und eins, also sind einunddreißig Videos am Tag das Höchste, wofür das Spiel je bezahlt. Es gibt keine Banner und keine Interstitials. Ablehnen kostet nichts, und nichts, was ein Video einbringt, muss man kaufen oder anschauen, um die Felder des Hauptspiels zu spielen. „Werbung entfernen“ schaltet die Werbung für immer ab, und der Brick Pass hebt das Lebenslimit von fünf auf acht und schaltet die Werbung ab, solange du ihn hast.',
          'Fünf der sechs Belohnungen sind fest und werden genannt, bevor du schaust. Die sechste, der zusätzliche Dreh am Brick Wheel, ist ein kleines Zufallselement, und deshalb sollte man sie hier nennen; sie ist auf einen am Tag begrenzt. Ob das die richtige Balance ist, musst du beurteilen, und deshalb steht auf der Startseite [genau, was Leben, Zugrücknahmen und Werbung kosten](/#fair). Wir finden außerdem, dass man ein Spiel leicht weglegen können sollte; unsere Notizen dazu, [wie Spiele zur Gewohnheit werden](/blog/how-games-become-habits), erklären, warum, und [was ein Puzzlespiel ruhig macht](/blog/relaxing-puzzle-games-what-makes-one-calm) zeigt, wie Leben und Auffüllen fair sein können.',
        ],
      },
    },
    pullQuote: 'Fünf der sechs Belohnungen sind fest und werden genannt, bevor du schaust.',
    faqs: [
      { question: 'Sind Lootboxen Glücksspiel?', answer: 'Rechtlich hängt das vom Land ab. Psychologisch haben Forscher festgestellt, dass viele Lootbox-Systeme die üblichen Kriterien für Glücksspiel erfüllen, und Ausgaben dafür hängen durchgängig mit Symptomen problematischen Glücksspiels zusammen.' },
      { question: 'Verursachen Lootboxen problematisches Glücksspiel?', answer: 'Die Belege zeigen einen Zusammenhang, aber nicht seine Richtung. Lootboxen könnten manche Spieler zu problematischem Glücksspiel führen, oder Menschen mit Glücksspielproblemen geben mehr dafür aus; Forscher argumentieren, dass beide Möglichkeiten ein Grund zur Vorsicht sind.' },
      { question: 'Was ist räuberische Monetarisierung in Spielen?', answer: 'Der Begriff beschreibt Kaufsysteme, die die wahren langfristigen Kosten des Spielens verbergen oder hinauszögern, bis Spieler finanziell und psychologisch schon festgelegt sind, etwa zufällige kostenpflichtige Belohnungen oder Angebote, die auf Momente des Frusts abgestimmt sind.' },
      { question: 'Hat OutBrick Lootboxen?', answer: 'Die Belohnungsvideos von OutBrick bringen feste, vorab genannte Belohnungen, bis auf einen zweiten Dreh am Brick Wheel pro Tag, bei dem der Zufall mitspielt. Jedes Video ist freiwillig und begrenzt, und Ablehnen kostet nichts; auf der Startseite steht genau, was Leben, Zugrücknahmen und Werbung kosten.' },
    ],
  },
  'dark-patterns-in-mobile-games': {
    title: 'Dark Patterns in Handyspielen erkennen',
    dek: 'Nervige Pop-ups, verwirrende Währungen, Angebote im schlechtesten Moment: was die Forschung über manipulatives Design in Spielen sagt, plus Checkliste.',
    imageAlt: 'Ein iPhone mit dem OutBrick-Shop samt Sonderangeboten und Brick Pass, zwischen Poppy mit einem Zauberstab mit Sternspitze und Bloo mit seiner Uhr',
    tags: ['Dark Patterns', 'manipulatives Design', 'Handyspiele', 'Monetarisierung', 'Ethik in Spielen'],
    intro: 'Der Begriff „Dark Pattern“ wurde für Websites geprägt: das vorab angekreuzte Kästchen, der Abbrechen-Knopf in Grau auf Grau, das Abo, das man mit einem Tippen abschließt und mit zwölf kündigt. Spiele haben all das geerbt und einiges Eigene erfunden. Weil ein Spiel darauf ausgelegt ist, einen zu fesseln, ist die Grenze zwischen mitreißend und manipulativ von innen oft schwer zu erkennen. Forscher aus Mensch-Computer-Interaktion, Verbraucherschutz und Suchtforschung haben begonnen, diese Grenze zu kartieren. Ihre Arbeit gibt Spielern Worte für das Gefühl, dass ein Spiel gegen sie arbeitet, und hält Designern einen Spiegel vor. Wir machen ein Free-to-Play-Spiel, also haben wir uns den Spiegel auch selbst vorgehalten.',
    keyTakeaways: [
      'Dark Patterns sind Designentscheidungen, die die Interessen des Anbieters über die des Nutzers stellen, durch Nörgeln, Behindern, Verschleiern, Eingriffe in die Oberfläche oder erzwungene Handlungen.',
      'Spieler, die nach unfairer Monetarisierung in Spielen gefragt wurden, beschrieben 35 verschiedene Techniken, von Pay-to-Win bis zu Gebühren für grundlegenden Komfort.',
      'Die beste Verteidigung ist, die Muster zu erkennen: Wenn ein Spiel das Ablehnen schwer macht, Kosten versteckt oder deinen schlechtesten Moment zum Verkaufen wählt, arbeitet es an dir, nicht für dich.',
    ],
    sections: {
      'what-dark-patterns-are': {
        title: 'Was Dark Patterns sind',
        paragraphs: [
          'Colin Gray und Kollegen stellten eine Sammlung von Beispielen zusammen, die UX-Fachleute selbst als Dark Patterns markiert hatten, und analysierten, welche ethischen Bedenken sie aufwarfen. Sie beschreiben Dark Patterns als Fälle, in denen der Wert für den Nutzer zugunsten des Werts für die Anteilseigner verdrängt wird, und ordnen die Strategien in fünf Familien: Nörgeln (wiederholtes Unterbrechen, um eine Entscheidung durchzudrücken), Behindern (etwas schwerer machen, als es sein müsste), Verschleiern (Informationen verstecken oder hinauszögern), Eingriffe in die Oberfläche (den Bildschirm so manipulieren, dass eine Option heraussticht) und erzwungene Handlungen (etwas Unzusammenhängendes verlangen, damit du bekommst, was du willst).',
          'Selten sind sie nicht. Arunesh Mathur und Kollegen bauten automatisierte Werkzeuge, um etwa 53.000 Produktseiten auf rund 11.000 Shopping-Websites zu durchsuchen, und fanden 1.818 Fälle von Dark Patterns aus 15 Typen, dazu Drittanbieter, die sie als fertige Funktionen verkauften. Wenn gewöhnliche Shops sie in diesem Umfang nutzen, wäre es erstaunlich, wenn Spiele, die viel mehr Bildschirme und viel mehr emotionale Momente haben, es nicht täten.',
        ],
      },
      'how-they-look-in-games': {
        title: 'Wie sie in Spielen aussehen',
        paragraphs: [
          'Elena Petrovskaya und David Zendle baten 1.104 Spieler, eine Situation zu beschreiben, in der ihnen eine Transaktion in einem Spiel irreführend, aggressiv oder unfair vorkam. Aus den Antworten ermittelten sie 35 einzelne Techniken in acht Bereichen: Spieldynamiken, die Ausgaben antreiben sollen, Produkte, die die Erwartungen nicht erfüllen, Gebühren für grundlegenden Komfort, räuberische Werbung, Spielwährungen, Pay-to-Win, die allgemeine Präsenz von Mikrotransaktionen und Sonstiges. Mehrere der von Spielern genannten Praktiken schienen nicht mit den britischen Verbraucherschutzregeln vereinbar zu sein.',
          'Auffällig ist, wie viele dieser Bereiche nichts mit einem Shop-Bildschirm zu tun haben. Gebühren für Komfort heißt, die kostenlose Version absichtlich mühsam zu machen, damit sich Bezahlen wie eine Erleichterung anfühlt statt wie ein Kauf. Spielwährungen schieben eine Umrechnungsschicht zwischen dich und den echten Preis, und Pakete in krummen Größen machen das Rechnen noch schwerer. Manches kommt ebenso aus dem Design des Spiels wie aus seinem Shop. Daniel King und Kollegen untersuchten 13 Patente für Kaufsysteme in Spielen und fanden Entwürfe, die Verhaltensdaten und Preismanipulation nutzen, um Angebote zu personalisieren und zu weiteren Ausgaben anzuregen, oft mit begrenztem Schutz wie Rückerstattungen. Die Patente beweisen nicht, dass ein bestimmtes Spiel diese Systeme nutzt, aber sie zeigen, was die Branche zu bauen erwogen hat.',
        ],
      },
      'younger-players': {
        title: 'Warum jüngere Spieler stärker betroffen sind',
        paragraphs: [
          'Kinder und Jugendliche spielen viele Free-to-Play-Spiele und sind womöglich anfälliger für Manipulation. Dan Fitton und Janet Read verbanden Wissen aus der Praxis, bestehende Forschung und eine Studie mit 39 Mädchen im Alter von 12 und 13 Jahren zu einem Rahmenwerk für das, was sie App Dark Design nennen. Das Ergebnis ist eine Reihe problematischer Designaspekte, viele davon mit Werbung und In-App-Käufen verbunden, denen junge Menschen weltweit laut den Autoren täglich in ihren Apps begegnen.',
          'Für Eltern spricht das dafür, direkt über diese Muster zu reden. Ein Kind, das sagen kann „Das ist ein falscher Schließen-Knopf“ oder „Die wollen, dass ich jetzt kaufe, weil ich gerade verloren habe“, lässt sich schwerer lenken. Auch Einstellungen helfen: Auf Apple-Geräten lässt die Kaufanfrage der Familienfreigabe Eltern die Käufe eines Kindes genehmigen, bevor sie abgeschlossen werden.',
        ],
      },
      'a-field-guide': {
        title: 'Ein Bestimmungsbuch für Dark Patterns in Spielen',
        paragraphs: [
          'Jacob Aagaard und Kollegen führten Interviews und Workshops mit Spielern, Designern, Entwicklern und Business Developern von Handyspielen durch. Ihre Darstellung zeigt, dass Dark Patterns selten auf einen einzelnen Bösewicht zurückgehen; sie entstehen aus kommerziellem Druck, Kennzahlen und Gewohnheit, und die Fachleute selbst spüren die Spannung. Deshalb hilft eine Checkliste. Eine Faustregel deckt das meiste ab. Wenn ein Spiel das Ablehnen schwer macht, Kosten versteckt oder deinen schlechtesten Moment zum Verkaufen wählt, arbeitet es an dir, nicht für dich. Hier sind die konkreten Muster, die man erkennen lernen sollte, abgeleitet aus den Studien oben:',
        ],
        bullets: [
          'Angebote, die direkt nach einem Fehlschlag auftauchen, wenn du am frustriertesten bist.',
          'Währungen, bei denen schwer zu erkennen ist, was etwas in echtem Geld kostet.',
          'Timer und Energieleisten, die das Spielen stoppen, wenn du nicht zahlst oder wartest.',
          'Serien und tägliche Belohnungen, die einen verpassten Tag bestrafen.',
          'Werbung, die läuft, ohne dass du darum gebeten hast, oder Schließen-Knöpfe, die winzig sind oder erst verzögert erscheinen.',
          'Pop-ups, die in jeder Sitzung wiederkommen, bis du nachgibst.',
          'Funktionen, die früher kostenlos waren und jetzt hinter einem Kauf stecken.',
        ],
      },
      'holding-up-the-mirror': {
        title: 'Uns selbst den Spiegel vorhalten',
        paragraphs: [
          'Das Titelbild dieses Artikels zeigt den eigenen Shop von OutBrick mit Sonderangeboten und dem Brick Pass, weil wir finden, dass dieselben Fragen auch für uns gelten sollten. Folgendes können wir klar sagen. Werbung gibt es nur als Belohnungsvideo: Nichts läuft, wenn du nicht auf einen Knopf drückst, um etwas zu bekommen, es gibt keine Banner und keine Interstitials, und jede der sechs Stellen hat ein Tageslimit. Ablehnen kostet nichts, und nichts muss gekauft oder angeschaut werden, um die Felder des Hauptspiels zu spielen. Leben gibt es: Du hast fünf, alle dreißig Minuten kommt eines zurück, und ein Leben geht nur verloren, wenn ein Versuch endet, ohne dass das Feld gelöst ist. All das steht auf der Startseite unter [was Leben, Zugrücknahmen und Werbung kosten](/#fair).',
          'Den Rest musst du selbst beurteilen, und das solltest du auch. Die verwandte Frage zufälliger Belohnungen behandelt [Lootboxen, variable Belohnungen und faire Monetarisierung](/blog/loot-boxes-ethical-monetisation), den Druck durch Serien [tägliche Rituale, die nichts von dir verlangen](/blog/daily-rituals-that-dont-demand-you). Wenn dich ein Spiel, unseres eingeschlossen, eher bearbeitet als unterhalten zurücklässt, ist unser Ratgeber [wann du spielen und wann du das Handy weglegen solltest](/blog/when-to-play-and-when-to-pause) ein guter Anfang.',
        ],
      },
    },
    pullQuote: 'Wenn ein Spiel das Ablehnen schwer macht, Kosten versteckt oder deinen schlechtesten Moment zum Verkaufen wählt, arbeitet es an dir, nicht für dich.',
    faqs: [
      { question: 'Was sind Dark Patterns in Spielen?', answer: 'Dark Patterns sind Designentscheidungen, die Spieler zu etwas lenken, das mehr dem Anbieter des Spiels nützt als dem Spieler, etwa Geld auszugeben, Werbung anzuschauen oder länger zu spielen als geplant. Häufige Formen sind nervige Pop-ups, versteckte Kosten und Angebote, die auf Momente des Frusts abgestimmt sind.' },
      { question: 'Wie erkenne ich manipulatives Design in einem Handyspiel?', answer: 'Achte auf Angebote direkt nach einem Fehlschlag, Währungen, die echte Preise verschleiern, Werbung, um die du nicht gebeten hast, Serien, die verpasste Tage bestrafen, und alles, was Nein sagen schwerer macht als Ja sagen.' },
      { question: 'Sind Dark Patterns in Spielen illegal?', answer: 'Manche können es sein. Das Verbraucherschutzrecht etwa im Vereinigten Königreich verbietet bereits irreführende und aggressive Geschäftspraktiken, und Forscher haben Monetarisierungstechniken in Spielen gefunden, die mit diesen Regeln schwer vereinbar scheinen. Viele andere Dark Patterns sind legal, aber trotzdem besser zu vermeiden.' },
      { question: 'Sind Kinder stärker von Dark Patterns in Apps betroffen?', answer: 'Forscher halten jüngere Spieler für möglicherweise anfälliger. Eine Studie mit 12- und 13-jährigen Mädchen ergab, dass sie in Free-to-Play-Apps regelmäßig auf schwer zu schließende Werbung und Kaufdruck stießen.' },
      { question: 'Zeigt OutBrick Werbung, ohne zu fragen?', answer: 'Nein. Werbung gibt es bei OutBrick nur als Belohnungsvideo, das läuft, wenn du auf einen Knopf drückst, um eine bestimmte Belohnung zu bekommen, mit einem Tageslimit für jede der sechs Stellen und ohne Banner oder Interstitials.' },
    ],
  },
  'why-we-get-attached-to-game-characters': {
    title: 'Warum wir an Spielfiguren hängen, auch an stummen',
    dek: 'Spieler bewundern Spielfiguren, sorgen sich um sie und vermissen sie. Forschung zu Bindung, parasozialen Beziehungen und Niedlichkeit erklärt, warum.',
    imageAlt: 'Ein echtes OutBrick-Spielfeld auf einem iPhone zwischen Vio mit Kopfhörern und Peach mit einem kleinen Pfirsich auf dem Kopf, vor einer marineblauen Wand aus Steinen',
    tags: ['Spielfiguren', 'Maskottchen', 'emotionale Bindung', 'parasoziale Beziehung', 'Spieldesign'],
    intro: 'Menschen trauern um Figuren, die es nie gab. Sie benennen Haustiere nach ihnen, sorgen sich zwischen zwei Spielsitzungen um sie und spüren einen kleinen Stich, wenn ein Begleiter zurückbleibt. Neu ist das nicht: Das Publikum ging einseitige Bindungen zu Radiomoderatoren ein, lange bevor es Spiele gab. Aber Spiele fügen etwas hinzu, was Filme und Bücher nicht können, denn die Figur reagiert auf dich, und manchmal bist du für sie verantwortlich. Die Forschung zu Beziehungen zwischen Spielern und Figuren ist inzwischen reich genug, um einen großen Teil dieser Anziehung zu erklären, auch, warum eine Figur, die nie ein Wort sagt, trotzdem wichtig sein kann. Sie wirft auch eine Frage auf, die sich jedes Studio mit einem Maskottchen stellen sollte: Was schulden wir Spielern, denen etwas an ihr liegt?',
    keyTakeaways: [
      'Spieler entwickeln mehrere verschiedene Arten von Bindung an Figuren, von der Bewunderung ihres Könnens bis zur Sorge um ihr Wohlergehen.',
      'Einseitige „parasoziale“ Bindungen an Medienfiguren sind ein normaler Teil davon, wie Menschen sich auf Figuren beziehen, beschrieben schon 1956.',
      'Niedliche Merkmale wecken Fürsorge und Aufmerksamkeit. Das gibt Designern echte Macht und eine entsprechende Verantwortung, sie nicht gegen Spieler einzusetzen.',
    ],
    sections: {
      'seven-kinds-of-attachment': {
        title: 'Sieben Arten von Bindung',
        paragraphs: [
          'Julia Ayumi Bopp und Kollegen baten 213 Spieler, eine Spielfigur zu beschreiben, die sie besonders mochten, und zu sagen, warum. Statt einer allgemeinen „Bindung“ fanden sie sieben verschiedene Formen, von der Begeisterung über das spielerische Können einer Figur über die Bewunderung einer Figur als Vorbild bis zu tiefer Sorge um ihr Wohlergehen. Manche Spieler mochten eine Figur, weil sie sich gut steuern ließ; andere, weil sie sich wie ein Freund anfühlte; wieder andere, weil sie Schutz zu brauchen schien.',
          'Die Studie war qualitativ und beruhte auf dem, worüber Spieler schreiben wollten. Sie kartiert also die Arten von Bindung, statt zu messen, wie häufig jede ist. Ihr Wert liegt in der Bandbreite. Bindung ist kein einzelner Regler, der mit mehr Dialog oder besserer Grafik hochgedreht wird. Eine kleine, schlichte Figur kann sich Bewunderung verdienen, weil sie etwas gut kann, Zuneigung, weil sie verlässlich angenehme Gesellschaft ist, oder Fürsorge, weil sie ein wenig verletzlich wirkt.',
          'Diese Bandbreite zählt für das Design. Eine Figur, die bewundert werden soll, braucht andere Eigenschaften als eine, um die man sich kümmern soll. Katharina Emmerich, Patrizia Ring und Maic Masuch befragten 237 Spieler zu Begleitfiguren und fanden heraus, dass sie Persönlichkeit und die Einbindung ins Spiel schätzen und erwarten, dass sich Begleiter passend zum Kontext verhalten, eigenständig handeln und die Initiative ergreifen. Ein Begleiter, der stillsteht, bis er aufgefordert wird, oder zur falschen Zeit das Falsche sagt, kann das ganze Erlebnis verderben.',
        ],
      },
      'intimacy-at-a-distance': {
        title: 'Intimität auf Distanz',
        paragraphs: [
          '1956 beschrieben die Soziologen Donald Horton und Richard Wohl eine neue Art von Beziehung, die Radio und Fernsehen hervorbrachten. Das Publikum hatte das Gefühl, die Moderatoren und Künstler, die es regelmäßig sah und hörte, zu kennen, und reagierte auf sie fast wie auf Freunde, obwohl die Beziehung nur in eine Richtung lief. Sie nannten das parasoziale Interaktion und beschrieben es als Intimität auf Distanz.',
          'Spiele dehnen diese Idee, denn die Figur auf dem Bildschirm kann antworten. Ein Freund, der winkt, wenn du kommst, feiert, wenn du Erfolg hast, und besorgt schaut, wenn du feststeckst, ist immer noch keine Person, aber das Wechselspiel aus Aktion und Reaktion lässt die Bindung gegenseitiger wirken. Melissa Lewis, René Weber und Nicholas David Bowman entwickelten eine der ersten Skalen, um die Bindung an Figuren in Spielen zu messen. Sie fanden, dass sie mit dem Spielvergnügen und der Spielzeit zusammenhing, aber auch mit Maßen für problematisches Spielen, eine Erinnerung daran, dass dieselbe Bindung, die ein Spiel warm macht, es auch schwer machen kann, es wegzulegen.',
        ],
      },
      'the-pull-of-cute': {
        title: 'Die Anziehungskraft des Niedlichen',
        paragraphs: [
          'Viele Maskottchen haben ein gemeinsames Aussehen: große Köpfe, runde Gesichter, große Augen. Der Verhaltensforscher Konrad Lorenz nannte diese Merkmale das Kindchenschema. Melanie Glocker und Kollegen prüften es experimentell, indem sie Fotos von Babygesichtern digital veränderten. Bei 122 Studierenden wurden Gesichter mit stärker ausgeprägtem Kindchenschema als niedlicher bewertet und weckten eine stärkere Motivation, sich um sie zu kümmern.',
          'Niedlichkeit könnte auch prägen, wie wir aufmerksam sind. In drei kleinen Experimenten fanden Hiroshi Nittono und Kollegen, dass Teilnehmende nach dem Betrachten von Welpen- und Kätzchenbildern eine feinmotorische Aufgabe und eine visuelle Suchaufgabe sorgfältiger erledigten als nach Bildern erwachsener Tiere, und dass sie sich enger fokussierten. Die Stichproben waren klein und die Aufgaben einfach, es wäre also übertrieben zu behaupten, niedliche Figuren machten irgendwen zum besseren Puzzler. Die Befunde helfen aber zu erklären, warum ein freundliches Gesicht auf einem Puzzle-Bildschirm eher beruhigend als ablenkend wirken kann.',
        ],
      },
      'what-designers-owe': {
        title: 'Was Designer Spielern schulden, denen etwas liegt',
        paragraphs: [
          'Nimmt man die Forschung zusammen, beschreibt sie eine echte Macht. Figuren können Fürsorge, Aufmerksamkeit und Treue wecken. Die ethische Frage ist, was ein Spiel damit macht. Eine Figur zu nutzen, um einen Spieler zu feiern, ihm Gesellschaft zu leisten oder einen schweren Moment sanfter zu machen, ist ein Geschenk. Eine Figur zu nutzen, um einem Spieler ein schlechtes Gewissen zu machen, damit er zurückkommt, etwa mit einem traurigen Gesicht, weil du einen Tag verpasst hast, oder mit einem Freund, der dich „braucht“, damit du etwas kaufst, macht aus Zuneigung ein Druckmittel. Es ist eines der Muster aus [Dark Patterns in Handyspielen](/blog/dark-patterns-in-mobile-games).',
          'Hier ein einfacher Test. Würde sich das Verhalten der Figur noch freundlich anfühlen, wenn der Spieler nie etwas ausgäbe oder nie zurückkäme? Wenn ja, wird die Bindung wahrscheinlich gut genutzt. Wenn die Figur nur auftaut, wenn der Spieler bezahlt, oder traurig wird, wenn er geht, ist die Zuneigung zum Verkaufswerkzeug geworden.',
        ],
      },
      'nine-friends-no-voices': {
        title: 'Neun Freunde, keine Stimmen',
        paragraphs: [
          'OutBrick hat neun Freunde aus Steinen: Bloo, Bricko, Flurry, Moss, Peach, Poppy, Sprout, Vio und Zippy. Sie haben die Form von Steinen, drei davon sind jeweils auf dem Startbildschirm zu sehen, und jeder hat seinen eigenen Siegestanz. Stimmen haben sie keine; sie sind animiert und sprechen nur in Sprechblasen. Jeder hat einen einfachen Charakter, den man auf einen Blick erfasst: Bloo ist der mit der Uhr, Peach die sorgfältige Planerin, Sprout der mit den Fragen, Vio die Kritikerin mit Kopfhörern und Zippy der, der gedanklich abschweift. Du kannst sie alle auf [der Seite der Freunde aus Steinen](/mascots) kennenlernen.',
          'Die Forschung legt nahe, dass Schweigen eine Bindung nicht schwächen muss. Bindung entstand in Bopps Studie genauso aus Können, Bewunderung und Fürsorge wie aus Dialog, und eine stille Figur lässt dem Spieler mehr Raum, sie selbst auszufüllen. Es ist dasselbe Prinzip des Wenigersagens, das wir an [Monument Valley](/blog/monument-valley-less-game-more-experience) bewundert haben, und dieselbe Gesellschaft ohne Forderungen, über die wir in [Animal Crossing und geteilte Zeit](/blog/animal-crossing-shared-time) geschrieben haben.',
        ],
      },
    },
    pullQuote: 'Würde sich das Verhalten der Figur noch freundlich anfühlen, wenn der Spieler nie etwas ausgäbe oder nie zurückkäme?',
    faqs: [
      { question: 'Warum hängen Menschen an Videospielfiguren?', answer: 'Spieler binden sich aus verschiedenen Gründen an Figuren: weil sie ihr Können bewundern, sie als Vorbilder sehen, ihre Gesellschaft genießen oder sich für ihr Wohlergehen verantwortlich fühlen. Weil Spielfiguren auf den Spieler reagieren, können sich diese Bindungen gegenseitiger anfühlen als Bindungen an Figuren aus Filmen oder Büchern.' },
      { question: 'Was ist eine parasoziale Beziehung?', answer: 'Das ist eine einseitige Bindung an eine Medienfigur, etwa einen Moderator oder eine fiktive Figur, die nicht weiß, dass es dich gibt. Forscher beschrieben sie 1956, und sie ist ein normaler Teil davon, wie Menschen sich auf Medien beziehen.' },
      { question: 'Warum sind Spielmaskottchen meistens niedlich?', answer: 'Merkmale wie ein großer Kopf, ein rundes Gesicht und große Augen, bekannt als Kindchenschema, werden als niedlich bewertet und steigern die Motivation, sich zu kümmern. Designer nutzen sie, um Figuren auf Anhieb sympathisch zu machen.' },
      { question: 'Sprechen die Figuren in OutBrick?', answer: 'Nein. Die neun Freunde aus Steinen in OutBrick haben keine Stimmen; sie sind animiert und sprechen nur in Sprechblasen, und jeder hat seinen eigenen Siegestanz.' },
    ],
  },
  'colour-in-game-interfaces': {
    title: 'Farbe im Spieldesign: Kontrast, Bedeutung und Gefühl',
    dek: 'Was Farbpsychologie Spieldesignern sagen kann und was nicht, warum Kontrast mehr zählt als Farbton und wie farbige Spielsteine für alle lesbar werden.',
    imageAlt: 'Ein echtes OutBrick-Spielfeld mit farbigen Steinen auf einem iPhone, zwischen Moss mit Werkzeuggürtel und Flurry mit gestreifter Bommelmütze',
    tags: ['Farbe in Spielen', 'Farbpsychologie', 'Spieldesign', 'Kontrast', 'Farbsehen'],
    intro: 'Farbe ist das Erste, was dir an den meisten Spielen auffällt, und das Letzte, worüber die meisten Spieler nachdenken. Rot heißt Gefahr, Grün heißt los, Gold heißt Schatz, und niemand musste es dir sagen. Designer stützen sich ständig auf Farbe, um eine Stimmung zu setzen, um zu zeigen, was wichtig ist, und in einem Farbsortier-Puzzle, um die Regeln selbst zu tragen. Populäre Texte über Farbpsychologie sind voller selbstbewusster Behauptungen: Blau beruhigt, Rot regt an, Gelb macht hungrig. Die Forschung ist interessanter und vorsichtiger. Am stärksten stützt sie etwas, das weniger glamourös ist als Stimmung: Kontrast, Beständigkeit und dass man sich nie allein auf Farbe verlässt.',
    keyTakeaways: [
      'Farbe wirkt sich auf Gefühle und Verhalten aus, aber die Forschung ist jung, und viele populäre Behauptungen über bestimmte Farben gehen über die Belege hinaus.',
      'Verbindungen zwischen Farben und Gefühlen werden in 30 Ländern weitgehend geteilt, mit lokalen Unterschieden. Farbbedeutungen in einem Spiel sollten deshalb abgesichert und nicht vorausgesetzt werden.',
      'Für die Lesbarkeit zählt Kontrast mehr als Farbton: Menschen lesen und suchen schneller, wenn der Helligkeitsunterschied groß ist.',
    ],
    sections: {
      'what-colour-research-shows': {
        title: 'Was Farbpsychologie uns sagen kann und was nicht',
        paragraphs: [
          'Der Überblicksartikel von Andrew Elliot und Markus Maier im Annual Review of Psychology ist eine gute Korrektur zur Pop-Farbpsychologie. Er zeigt, dass Farbe wichtige Bedeutung tragen und Gefühle, Denken und Verhalten von Menschen beeinflussen kann, wobei viele Belege aus Leistungs- und Anziehungskontexten stammen. Er warnt aber auch, dass das Feld noch am Anfang steht: Frühere Arbeiten litten unter methodischen Problemen, und es braucht viel mehr Forschung zu Randbedingungen und zur Übertragbarkeit auf die reale Welt, bevor starke Empfehlungen gerechtfertigt sind.',
          'Für Spieldesigner legt das Bescheidenheit nahe. Populäre Behauptungen über bestimmte Farben eilen diesen Belegen oft weit voraus, und sehr wenig davon wurde erhoben, während Menschen tatsächlich spielten. Die Forderung des Überblicks nach mehr Forschung in realen Situationen gilt für Spieldesign also besonders. Farbe ist ein echter Hebel, aber Aussagen wie „dieser Blauton senkt Stress“ sollte man als Hypothesen behandeln, die man mit den eigenen Spielern testet, nicht als Regeln.',
        ],
      },
      'shared-meanings': {
        title: 'Gemeinsame Bedeutungen mit lokalem Akzent',
        paragraphs: [
          'Sind Farbbedeutungen universell oder erlernt? Domicele Jonauskaite und ein großes internationales Team baten 4.598 Menschen in 30 Ländern, die 22 Sprachen sprachen, 20 Gefühlsbegriffe mit 12 Farbbezeichnungen zu verbinden. Die Muster waren über die Länder hinweg auffallend ähnlich, mit einer durchschnittlichen Ähnlichkeit von r = 0,88. Doch das Herkunftsland sagte die Zuordnungen einer Person trotzdem über das universelle Muster hinaus vorher, und die Ähnlichkeit war größer zwischen Ländern, die sich sprachlich oder geografisch nahestanden.',
          'Für ein Spiel mit Spielern auf der ganzen Welt ist das eine gute Nachricht: Grobe Farbbedeutungen reisen gut. Die lokalen Unterschiede sind ein Grund, wichtige Bedeutungen mit Form, Text oder Position abzusichern, statt darauf zu vertrauen, dass Farbe allen dasselbe sagt.',
          'Spiele bauen außerdem ihre eigenen Farbsprachen auf der gemeinsamen auf. Spieler lernen schnell, dass eine bestimmte Farbe Gesundheit, Schaden oder eine verschlossene Tür bedeutet, und einmal gelernt, werden diese Bedeutungen zu Erwartungen. Sie zu brechen kann eine bewusste Überraschung sein, doch sie versehentlich zu brechen, ist eine häufige Quelle von Verwirrung. Ein Spiel, das Rot sowohl für „Gefahr“ als auch für „Belohnung“ verwendet, verlangt vom Spieler, jedes Mal innezuhalten und nachzudenken.',
        ],
      },
      'colour-and-mood-in-games': {
        title: 'Farbe und Stimmung in Spielwelten',
        paragraphs: [
          'Erik Geslin, Laurent Jégou und Danny Beaudoin untersuchten Farbe gezielt in Spielen. Sie zeigten 85 Teilnehmenden 24 Bilder aus Videospielen, fragten, welche Gefühle jedes auslöste, und verglichen die Antworten mit Messungen der Farben der Bilder. Helligkeit, Sättigung und Luminanz korrelierten signifikant mit Gefühlen wie Freude, Traurigkeit, Angst und Gelassenheit, und das galt auch für Maße dafür, wie vielfältig und auffällig die Farben waren.',
          'Die Studie maß Reaktionen auf Standbilder, nicht aufs Spielen, und Korrelationen dieser Art können keine Ursache beweisen. Aber sie gibt Designern ein Vokabular, das nützlicher ist als der Farbton allein: Die Gesamthelligkeit und Sättigung einer Szene und wie vielfältig ihre Farben sind, können für ihre Stimmung so wichtig sein wie die Frage, welche Farben darin vorkommen. Die Autoren schlagen auf Grundlage ihrer Ergebnisse ein „emotionales Farbskript“ vor, bei dem man die Palette eines Spiels so plant, wie ein Film seine Beleuchtung plant.',
        ],
      },
      'contrast-before-hue': {
        title: 'Kontrast vor Farbton',
        paragraphs: [
          'Wenn es ums Lesen geht, gewinnt der Kontrast. Richard Hall und Patrick Hanna testeten mit 136 Teilnehmenden vier Kombinationen aus Text- und Hintergrundfarbe auf Webseiten. Kombinationen mit höherem Kontrastverhältnis waren im Allgemeinen besser lesbar. Die Farbe beeinflusste nicht signifikant, wie viel sich die Menschen merkten, aber bevorzugte Farben bekamen bessere Bewertungen für die Ästhetik.',
          'Gordon Legge und Kollegen schauten genauer hin, wie Kontrast wirkt. Normalsichtige Leser lasen bei starkem Farbkontrast, also Text, der sich nur im Farbton unterscheidet, genauso schnell wie bei starkem Luminanzkontrast, dem Helligkeitsunterschied. Für Leser mit Sehbehinderung gewann jedes Mal der Luminanzkontrast. Ein Design, das Teile nur über den Farbton bei ähnlicher Helligkeit unterscheidet, funktioniert für manche Spieler und scheitert bei anderen. Genau deshalb legen die Richtlinien für Barrierefreiheit im Web Mindestkontrastverhältnisse fest; die [Erklärung des W3C zu Mindestkontrasten](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) ist eine klare Einführung.',
        ],
      },
      'readable-bricks': {
        title: 'Was ein lesbarer Stein braucht',
        paragraphs: [
          'In einem Farbsortier-Puzzle ist Farbe keine Dekoration; sie ist die Regel. Bei OutBrick verlässt jeder Stein das Feld nur durch das Tor in seiner Farbe, wer also zwei Farben nicht unterscheiden kann, kann nicht spielen. Deshalb sind die Symbole des Farbenblind-Modus standardmäßig an: Jeder Stein und jedes Tor trägt ein passendes Symbol, sodass die Form das Sortieren genauso trägt wie der Farbton. Die Überlegungen dahinter erklären wir in [warum Farbe in einem Puzzle nie der einzige Hinweis sein sollte](/blog/color-shape-accessibility), und die [Seite zur Barrierefreiheit](/accessibility) listet die übrige Unterstützung auf, einschließlich VoiceOver.',
          'Stimmung und Lesbarkeit können nebeneinander bestehen, wenn sie verschiedene Aufgaben bekommen. Die Reise von OutBrick führt durch 167 Dörfer aus Bausteinen, von Cherry Blossom Town bis Lavender Hills, und die Landschaft kann sich ändern, während die Steine auf dem Feld ihre Farben und Symbole behalten. Die praktische Seite, ein Farbfeld schnell zu lesen, behandeln unsere [Tipps für Farbsortier-Puzzles](/blog/colour-sort-puzzle-tips). Die Forschung oben ergänzt ein paar Grundsätze, die für jedes Spiel mit farbigen Teilen gelten:',
        ],
        bullets: [
          'Unterscheide Teile über die Helligkeit wie über den Farbton, damit sie bei schwachem Licht, auf einem gesprungenen Display oder bei Sehbehinderung unterscheidbar bleiben.',
          'Gib jeder Farbe eine Aufgabe und halte sie im ganzen Spiel gleich.',
          'Sichere jede Farbbedeutung mit einem zweiten Hinweis ab: einem Symbol, einer Form, einer Position oder einer Beschriftung.',
          'Nutze Sättigung und Helligkeit für die Stimmung und lass die Spielteile selbst das Klarste auf dem Bildschirm sein.',
          'Teste in Graustufen. Ist das Feld dann noch lesbar, leisten die Farben zusätzliche Arbeit statt der ganzen.',
        ],
      },
    },
    pullQuote: 'In einem Farbsortier-Puzzle ist Farbe keine Dekoration; sie ist die Regel.',
    faqs: [
      { question: 'Wie beeinflusst Farbe die Gefühle in Spielen?', answer: 'Eine Studie ergab, dass Helligkeit, Sättigung und Luminanz von Spielszenen mit Gefühlen wie Freude, Traurigkeit, Angst und Gelassenheit korrelierten. Die Forschung ist noch jung, deshalb sollte man konkrete Behauptungen über einzelne Farben mit Vorsicht behandeln.' },
      { question: 'Sind Farbbedeutungen in jeder Kultur gleich?', answer: 'Weitgehend. Eine Studie mit 4.598 Menschen in 30 Ländern fand weltweit sehr ähnliche Verbindungen zwischen Farben und Gefühlen, mit kleineren Unterschieden, die mit Sprache und Geografie zusammenhingen.' },
      { question: 'Warum ist Kontrast in Spieloberflächen wichtig?', answer: 'Kontrast, vor allem der Helligkeitsunterschied zwischen einem Element und seinem Hintergrund, macht Dinge schneller lesbar und auffindbar. Leser mit Sehbehinderung verlassen sich stärker auf Helligkeitskontrast als auf Unterschiede im Farbton.' },
      { question: 'Welches Kontrastverhältnis sollte Text in Spielen haben?', answer: 'Die Web Content Accessibility Guidelines verlangen auf ihrer Stufe AA mindestens 4,5:1 zwischen normalem Text und seinem Hintergrund und 3:1 für großen Text. Spiele sind nicht daran gebunden, aber sie sind eine vernünftige, gut erprobte Untergrenze.' },
      { question: 'Können farbenblinde Spieler OutBrick spielen?', answer: 'Ja. Die Symbole des Farbenblind-Modus sind standardmäßig an, sodass jeder Stein und jedes Tor neben einer Farbe auch ein passendes Symbol trägt, und VoiceOver wird unterstützt. Unser Ratgeber zu [Farbenblindheit in Spielen](/blog/colour-blindness-in-games) erklärt, wie häufig sie ist und was sonst noch hilft.' },
    ],
  },
};
