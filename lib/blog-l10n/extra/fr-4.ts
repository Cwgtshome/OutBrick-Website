import type { ExtraGuides } from '../../i18n/blog';

/** Journal batch 4 (lib/journal-batches/batch-4.ts) in this language. See lib/blog-l10n/fr.ts for the house style. */
export const fr4: ExtraGuides = {
  'what-makes-a-puzzle-fair': {
    title: 'Qu’est-ce qu’un puzzle juste ? Difficulté, échec, confiance',
    dek: 'Difficile ne veut pas dire injuste. Ce que la recherche sur le défi et l’échec dit des puzzles auxquels on se fie, et de ceux qu’on abandonne, agacé.',
    imageAlt: 'Un vrai plateau OutBrick sur un iPhone, entouré de Moss avec sa ceinture à outils et de Sprout coiffé d’une jeune pousse, devant un mur de briques bleu marine',
    tags: ['conception de puzzles', 'difficulté jeu vidéo', 'game design', 'échec dans les jeux', 'casse-tête'],
    intro: 'Tout amateur de puzzles connaît deux manières très différentes d’être bloqué. La première est la bonne : vous voyez toutes les pièces, vous connaissez les règles, simplement l’idée ne vous est pas encore venue. La seconde vous fait poser le téléphone : la réponse dépendait de quelque chose que vous ne pouviez pas voir, le jeu a puni une expérience que rien ne vous permettait d’éviter, ou une seule erreur vous a coûté dix minutes. Dans les deux cas, c’est « difficile ». Un seul des deux paraît juste. Depuis une quinzaine d’années, les chercheurs en jeu vidéo s’emploient à distinguer ces deux situations, et leurs conclusions servent à quiconque conçoit des puzzles, comme à quiconque se demande lesquels méritent sa soirée.',
    keyTakeaways: [
      'Les joueurs vivent plusieurs sortes de défi, et un puzzle paraît juste quand son défi relève de la réflexion, pas d’informations cachées ni de sanctions arbitraires.',
      'Le coût d’un échec compte autant que sa probabilité : selon Juul, le temps qu’un échec vous fait perdre est désormais la meilleure mesure de la manière dont la difficulté est ressentie.',
      'L’échec peut faire partie d’une bonne expérience, mais seulement si le joueur voit ce qui a raté et peut réessayer en ayant appris quelque chose.',
    ],
    sections: {
      'hard-versus-unfair': {
        title: 'Difficile ne veut pas dire injuste',
        paragraphs: [
          'Les concepteurs parlent volontiers de la difficulté comme d’un simple curseur, mais ce n’est pas ainsi que les joueurs la ressentent. Quand Alena Denisova, Paul Cairns, Christian Guckelsberger et David Zendle ont construit un questionnaire pour mesurer le défi perçu dans les jeux, leurs enquêtes et leurs études de validation ont fait apparaître quatre sortes de défi : le défi d’exécution (mes mains vont-elles y arriver ?), le défi émotionnel (vais-je supporter ce que cela me fait ressentir ?), le défi cognitif (vais-je trouver la solution ?) et le défi de décision (vais-je assumer ce choix ?). Un puzzle peut être très exigeant sur l’un et très peu sur les autres.',
          'Cette distinction explique bien des frustrations. Un puzzle de logique qui exige soudain un timing au pixel près a déplacé son défi de la tête vers les mains sans prévenir. Un puzzle dont la solution repose sur une règle qu’on ne vous a jamais montrée n’a pas du tout relevé le défi cognitif : il vous a retiré l’information nécessaire pour le relever.',
          'Megan Pusey, Kok Wai Wong et Natasha Anne Rappa font une distinction voisine dans leur Puzzle Challenge Analysis Tool, qu’ils ont testé sur The Witness, Untitled Goose Game et Baba Is You. Ils séparent le défi, c’est-à-dire ce qu’un puzzle exige de votre réflexion, de la difficulté, c’est-à-dire la peine qu’un joueur donné éprouve à le résoudre. C’est le cœur de la justesse : un puzzle juste peut vous paraître très difficile aujourd’hui, mais son défi est fait de choses sur lesquelles vous pouvez raisonner.',
        ],
      },
      'cost-of-failing': {
        title: 'Le coût de l’échec fait partie de la difficulté',
        paragraphs: [
          'Dans les jeux d’autrefois, avec un nombre de vies fixe, on pouvait mesurer la difficulté à la fréquence des échecs. Jesper Juul, dans une communication à la conférence Foundations of Digital Games en 2010, soutenait que cette mesure ne fonctionnait plus depuis que la plupart des jeux offrent des essais illimités. Sa proposition : mesurer le temps qu’un échec vous fait perdre. Perdre un plateau et recommencer aussitôt n’a rien à voir avec perdre un plateau et devoir rejouer cinq minutes de préparation pour y revenir.',
          'C’est pourquoi deux puzzles d’une difficulté logique identique peuvent paraître complètement différents. Si une erreur vous ramène trois coups en arrière, vous expérimentez librement. Si elle vous renvoie au début d’une longue séquence, vous arrêtez d’expérimenter et vous tâtonnez prudemment, ce qui est une moins bonne façon de résoudre quoi que ce soit.',
          'Côté joueur, cela donne un test rapide quand un jeu de puzzle semble méchant. Demandez-vous ce que le dernier échec vous a réellement coûté : des secondes, des minutes, ou quelque chose de plus rare ? Côté concepteur, c’est un rappel : le prix d’une erreur est un choix de conception, distinct du puzzle lui-même.',
        ],
      },
      'failure-that-teaches': {
        title: 'L’échec qui enseigne',
        paragraphs: [
          'Rien de tout cela ne signifie qu’un puzzle juste ne devrait jamais vous laisser échouer. Serge Petralito et ses collègues ont interrogé 95 joueurs juste après la sortie de Dark Souls III, un jeu célèbre pour la fréquence à laquelle il vous tue. Les joueurs ont surtout fait état d’expériences positives, et les moments qu’ils appréciaient le plus, la réussite et l’apprentissage, n’étaient possibles que grâce aux moments négatifs : la difficulté et les morts à répétition.',
          'La condition cachée dans ce résultat, c’est la lisibilité. L’échec se transformait en apprentissage parce que les joueurs voyaient pourquoi ils étaient morts et quoi essayer ensuite. La tradition de recherche qui célèbre les victoires durement gagnées est claire : un échec sans cause lisible n’est que de la frustration.',
          'Les puzzles en sont un cas particulièrement net. L’échec idéal, dans un puzzle, est celui qui vous fait penser « évidemment » à l’instant même où il survient, parce que le plateau vient de vous révéler une vérité sur lui-même. Un échec qui vous laisse penser « comment étais-je censé le savoir ? » n’enseigne rien, sinon la méfiance.',
        ],
      },
      'fair-puzzle-checklist': {
        title: 'Une liste de contrôle pour des puzzles justes',
        paragraphs: [
          'Conor Linehan et ses collègues ont analysé des vidéos de parties de quatre jeux de puzzle très appréciés, Portal, le mode coopératif de Portal 2, Braid et Lemmings, pour voir comment ils dosaient leurs défis. Le schéma était constant : chaque nouvelle compétence était introduite seule, par des puzzles simples qui ne demandaient qu’elle ; les joueurs s’exerçaient ensuite à la combiner avec ce qu’ils savaient déjà ; puis les puzzles se complexifiaient jusqu’à l’arrivée de la compétence suivante. Autrement dit, un puzzle juste vous demande rarement quelque chose qu’on ne vous a pas laissé l’occasion d’apprendre.',
          'Ajoutez-y la recherche sur le défi et l’échec, et vous obtenez une courte liste applicable à n’importe quel puzzle, que vous le conceviez ou que vous y jouiez :',
        ],
        bullets: [
          'Tout ce qu’il faut pour le résoudre est visible, ou a été appris auparavant.',
          'Les règles ne changent pas en cours de route sans prévenir.',
          'Une solution existe, à coup sûr.',
          'Le défi est celui que le jeu a promis : de la réflexion, pas des réflexes, dans un jeu de réflexion.',
          'Une erreur coûte un temps raisonnable, et vous voyez ce qui l’a causée.',
          'Les idées nouvelles arrivent une par une, avec le temps de s’exercer avant qu’elles se combinent.',
        ],
      },
      'how-outbrick-keeps-boards-fair': {
        title: 'Comment OutBrick s’efforce de garder ses plateaux justes',
        paragraphs: [
          'C’est nous qui faisons OutBrick ; voici donc à quoi ressemble cette liste de notre côté. La règle est courte et ne change jamais : une brique glisse jusqu’à ce que quelque chose l’arrête, et elle ne sort que par la porte de sa couleur. Clés, serrures, caisses et portes n’apparaissent que sur des plateaux plus tardifs, une fois la règle de base familière. Chacun des 2 000 plateaux a été vidé par un solveur, et cette solution rejouée selon les règles mêmes du jeu avant la sortie, un processus que nous décrivons dans [comment nous avons vérifié 2 000 plateaux de blocs coulissants](/blog/verifying-2000-sliding-block-boards) : aucun plateau ne demande l’impossible.',
          'Le prix d’une erreur est faible et annoncé d’avance. Chaque plateau affiche son objectif de coups et sa limite de coups dès la première touche, et il n’y a aucun chrono. La première annulation de chaque plateau est gratuite, et une vie ne part que lorsqu’une tentative se termine sans que le plateau soit vidé. La page d’accueil détaille [exactement ce que coûtent les vies, les annulations et les pubs](/#fair). Nous avons écrit sur la forme du défi dans la durée dans [comment construire une courbe de difficulté plus bienveillante](/blog/kinder-difficulty-curve), et sur la friction qui invite à réfléchir dans [Papers, Please et la friction qui a du sens](/blog/papers-please-meaningful-friction).',
          'Le meilleur test de justesse reste votre propre réaction. [Jouez un plateau dans votre navigateur](/play), ratez-le une fois exprès, et voyez si vous savez pourquoi.',
        ],
      },
    },
    pullQuote: 'Un échec qui vous laisse penser « comment étais-je censé le savoir ? » n’enseigne rien, sinon la méfiance.',
    faqs: [
      { question: 'Qu’est-ce qui rend un puzzle injuste ?', answer: 'En général, l’une de ces trois choses : la solution dépend d’une information que le joueur ne pouvait pas voir ou qu’on ne lui avait pas apprise, le défi passe de la réflexion aux réflexes sans prévenir, ou une petite erreur coûte beaucoup de temps. La difficulté seule paraît rarement injuste quand les règles sont claires.' },
      { question: 'Est-ce mal, pour un jeu de puzzle, de laisser échouer ?', answer: 'Non. Une étude sur des jeux exigeants comme Dark Souls III a montré que l’échec peut donner plus de sens à la réussite et à l’apprentissage. L’essentiel est que le joueur voie pourquoi il a échoué et que réessayer ne coûte pas cher.' },
      { question: 'Quelle différence entre défi et difficulté ?', answer: 'Les chercheurs appellent souvent défi ce qu’un puzzle exige du joueur, et difficulté la peine qu’un joueur donné éprouve à le résoudre. Un puzzle juste peut être très difficile pour une personne tout en gardant un défi fait de choses sur lesquelles chacun pourrait raisonner.' },
      { question: 'Tous les plateaux d’OutBrick ont-ils une solution ?', answer: 'Oui. Chacun des 2 000 plateaux a été vidé par un solveur, et cette solution rejouée selon les règles mêmes du jeu avant la sortie ; chaque plateau affiche son objectif de coups et sa limite de coups dès la première touche.' },
    ],
  },
  'game-feel-and-juice': {
    title: 'Game feel et « juice » : pourquoi un bon glissement compte',
    dek: 'Le « juice », ce retour en plus qui rend un geste agréable. Des études sur des milliers de joueurs montrent qu’il aide, jusqu’à un point, puis nuit.',
    imageAlt: 'Un vrai plateau OutBrick sur un iPhone entre Moss avec sa ceinture à outils et Vio avec son casque, parmi des briques flottantes sur un mur de briques bleu marine',
    tags: ['game feel', 'juice jeu vidéo', 'game design', 'retour visuel', 'conception de jeux'],
    intro: 'Prenez deux versions du même jeu. Dans l’une, une brique traverse le plateau et s’arrête. Dans l’autre, elle glisse, ralentit en se posant, cogne à peine contre le mur, et un peu de poussière s’élève de la porte quand elle sort. Les règles sont identiques. L’une donne l’impression d’un tableur, l’autre celle d’un jouet. Les concepteurs appellent cette différence le game feel, et le retour supplémentaire, non indispensable, qui la produit, le « juice ». C’est l’une des idées les plus discutées du développement de jeux, et jusqu’à récemment l’une des moins testées. La recherche qui existe désormais adresse un message clair à ceux qui font des jeux : le juice est bien réel, l’excès de juice aussi.',
    keyTakeaways: [
      'Le juice est un retour redondant : des réactions visuelles, sonores ou haptiques supplémentaires dont les règles n’ont pas besoin, mais que le joueur ressent.',
      'Dans une étude portant sur plus de 3 000 joueurs, l’absence de juice comme l’excès de juice ont donné des parties plus courtes et une moins bonne expérience qu’une dose modérée.',
      'Le juice rend un jeu plus beau et plus agréable ; son effet sur le sentiment de compétence dépend du contexte, il faut donc le régler, pas l’empiler.',
    ],
    sections: {
      'what-juice-means': {
        title: 'Ce que les concepteurs appellent « juice »',
        paragraphs: [
          'Kieran Hicks, Kathrin Gerling, Patrick Dickinson et Vero Vanden Abeele en donnent une définition nette : le juice est un retour redondant, où une seule action du joueur déclenche plusieurs réactions qui n’apportent aucune information nouvelle. L’écran tremble, le score bondit, des particules volent, un son retentit. Rien de tout cela n’est nécessaire pour savoir ce qui s’est passé. Tout cela change la sensation.',
          'Martin Pichlmair et Mads Johansen sont allés plus loin dans une revue de plus de 200 sources, universitaires et professionnelles, sur le game feel. Ils répartissent ce savoir-faire en trois domaines. Le réglage (tuning) concerne la physique : comment un objet accélère, quel poids il semble avoir, avec quelle prévisibilité il se déplace. Le juice relève de l’amplification : les signaux en plus qui rendent une action puissante et son résultat clair. La fluidification (streamlining) relève du soutien : le jeu agit selon l’intention du joueur, par exemple en pardonnant une touche légèrement trop précoce. Dans leur cadre, le juice n’est qu’un outil sur trois, et les deux autres sont plus discrets.',
        ],
      },
      'what-the-studies-found': {
        title: 'Ce que les études ont réellement montré',
        paragraphs: [
          'Hicks et ses collègues ont mené deux études : l’une avec 40 participants jouant à deux jeux conçus pour la recherche, l’autre avec 32 participants jouant à une version modifiée de Quake 3 Arena, chaque fois avec et sans embellissements visuels. Les effets supplémentaires rendaient systématiquement les jeux plus attrayants visuellement. Les effets sur le sentiment de compétence n’apparaissaient que dans certaines circonstances. Le juice rendait le jeu plus beau ; il ne donnait pas automatiquement aux joueurs le sentiment d’y être meilleurs.',
          'La plus grande étude à ce jour est celle de Dominic Kao, qui a confié à 3 018 joueurs l’une des quatre versions d’un même jeu de rôle d’action : sans juice, avec un juice moyen, élevé ou extrême. Les deux versions intermédiaires l’ont emporté. La version sans juice et la version extrême ont toutes deux entraîné des parties nettement plus courtes, une moins bonne expérience de jeu, une motivation intrinsèque plus faible et même de moins bonnes performances que les versions moyenne ou élevée. Trop peu de retour laisse un jeu sans vie ; trop en noie sous le bruit l’information dont le joueur a besoin.',
          'Cette courbe en U inversé est le résultat le plus utile de toute cette littérature. Le juice est une question de dose, pas une vertu.',
          'Les limites méritent d’être dites. Les deux études portaient sur des jeux d’action, où un retour rapide fait partie du plaisir, et la « bonne » dose sera différente dans un genre lent et réfléchi. Les quatre versions de Kao se situaient en outre à des points fixes d’une échelle : l’étude montre que les extrêmes perdent, pas où se trouve exactement la dose idéale pour un jeu donné. Pour les jeux de puzzle, le résumé honnête est que le sens du résultat tient probablement, et que la dose exacte doit se trouver en testant avec des joueurs.',
        ],
      },
      'feel-beyond-the-screen': {
        title: 'Une sensation qui dépasse l’écran',
        paragraphs: [
          'Sur un téléphone, la sensation n’est pas que visuelle. Tanay Singhal et Oliver Schneider ont transposé l’idée de juice à la vibration, en définissant des « embellissements haptiques » : une vibration qui renforce ce que l’écran montre déjà. Dans deux études où les participants utilisaient leur propre téléphone, ces retours haptiques rendaient le jeu plus agréable, plus attrayant, plus immersif et plus porteur de sens. Un petit tic bien placé sous le pouce peut faire une partie du travail d’un tremblement d’écran, sans rien ajouter à regarder.',
          'À l’autre extrême, il y a le décor qui ne réagit pas du tout. Anna-Lena Meiners et ses collègues l’appellent la « luxuriance » (lushness) : détails d’arrière-plan et objets avec lesquels on ne peut pas interagir. Dans une étude où 31 participants jouaient à quatre versions d’un jeu de plateforme, plus de luxuriance rendait le jeu plus attrayant visuellement, sans changer le sentiment de compétence des joueurs ni l’effort mental qu’ils déclaraient. Le décor est agréable. Ce n’est pas de la sensation.',
          'La cohérence compte autant que l’intensité. Les [Human Interface Guidelines d’Apple sur les retours haptiques](https://developer.apple.com/design/human-interface-guidelines/playing-haptics) demandent aux développeurs d’utiliser l’haptique de façon cohérente et d’établir un lien de cause à effet clair entre chaque vibration et l’action qui la déclenche. Il en va de même pour tous les canaux de retour. Une réponse que le joueur peut prévoir devient une part de sa compréhension du jeu ; une réponse qui varie au hasard n’est que du bruit.',
        ],
      },
      'juice-for-a-calm-game': {
        title: 'Du juice pour un jeu calme',
        paragraphs: [
          'La plupart des textes sur le juice viennent des jeux d’action, où plus d’énergie est généralement le but. Un jeu de puzzle calme a une autre mission. Son retour doit confirmer ce qui s’est passé sans faire monter le pouls du joueur, et rester lisible au centième plateau comme au premier. Cela fait pencher la balance vers le réglage et la fluidification, en réservant le juice aux moments qui le méritent.',
          'Quelques règles que nous appliquons pour juger le retour dans un puzzle :',
        ],
        bullets: [
          'Le mouvement doit expliquer la règle. Une brique qui ralentit en s’arrêtant vous dit qu’elle s’est arrêtée parce qu’il y avait quelque chose.',
          'Gardez les plus gros effets pour les événements les plus rares. Vider un plateau mérite plus qu’un coup.',
          'Ne laissez jamais un effet masquer la partie du plateau que vous devez lire ensuite.',
          'Respectez le réglage Réduire les animations du système, et vérifiez que le jeu reste lisible sans les fioritures.',
          'Si un effet est amusant la première fois et lassant la cinquantième, c’est qu’il est de trop.',
        ],
      },
      'the-outbrick-slide': {
        title: 'Le glissement au cœur d’OutBrick',
        paragraphs: [
          'OutBrick repose sur un seul verbe : faites glisser une brique et elle file jusqu’à ce que quelque chose l’arrête. Comme ce geste se répète des centaines de fois par session, sa sensation compte plus que n’importe quelle célébration. Le glissement doit être assez rapide pour ne jamais vous faire attendre, et assez lisible pour que vous voyiez où va la brique avant qu’elle y arrive. Nous respectons Réduire les animations partout, pour que le plateau reste lisible quand les effets sont atténués. Les grands moments sont réservés au plateau vidé, où chacun des amis en briques a sa propre danse de victoire.',
          'La sensation explique aussi pourquoi de courtes sessions peuvent être satisfaisantes : un geste net avec une réponse nette est en soi une petite récompense, ce que nous explorons dans [pourquoi un puzzle de deux minutes peut faire l’effet d’une vraie pause](/blog/why-two-minute-puzzles-feel-good). Pour tester votre propre ressenti, [jouez un plateau dans votre navigateur](/play) et soyez attentif au moment où une brique s’arrête. La même retenue traverse [Tetris](/blog/tetris-simple-rules-infinite-variation), où une bonne part du plaisir vient du rythme plutôt que du spectacle. Pour la contribution du son à cette même sensation, lisez notre article sur [le retour sonore et l’expérience de jeu](/blog/game-audio-feedback-player-experience), et pour ce qui rend un jeu reposant plutôt que frénétique, [ce qui rend vraiment un jeu de puzzle apaisant](/blog/relaxing-puzzle-games-what-makes-one-calm).',
        ],
      },
    },
    pullQuote: 'Le juice est une question de dose, pas une vertu.',
    faqs: [
      { question: 'Qu’est-ce que le « juice » en game design ?', answer: 'Le juice est un retour supplémentaire qui renforce quelque chose que le joueur sait déjà : tremblement d’écran, particules, sons, vibration ou animation rebondissante. Il ne change pas les règles, mais il change la sensation d’une action.' },
      { question: 'Un retour « juicy » rend-il les jeux meilleurs ?', answer: 'Jusqu’à un certain point. Dans une étude portant sur 3 018 joueurs, les versions avec un juice moyen ou élevé ont fait mieux que l’absence de juice comme que le juice extrême, en temps de jeu, en expérience, en motivation et en performance.' },
      { question: 'Quelle différence entre game feel et juice ?', answer: 'Le game feel désigne l’ensemble de la sensation, instant après instant, de l’interaction avec un jeu. Le juice n’en est qu’un ingrédient ; les autres consistent à régler la façon dont les objets bougent et à fluidifier les commandes pour que le jeu fasse ce que le joueur voulait.' },
      { question: 'Peut-on atténuer les animations dans OutBrick ?', answer: 'Oui. OutBrick respecte partout le réglage Réduire les animations du système, et le plateau reste lisible avec les effets atténués.' },
    ],
  },
  'procedural-puzzle-level-generation': {
    title: 'Génération procédurale de puzzles : pourquoi vérifier compte',
    dek: 'La génération procédurale crée des puzzles sans fin, mais un plateau soluble n’est pas forcément bon. Comment marchent les générateurs, et leurs limites.',
    imageAlt: 'Un vrai plateau OutBrick sur un iPhone, avec d’un côté Poppy tenant une baguette étoilée et de l’autre Moss, parmi des briques flottantes',
    tags: ['génération procédurale', 'conception de puzzles', 'développement de jeux', 'game design', 'puzzle de blocs coulissants'],
    intro: 'Entre le niveau dessiné à la main et le niveau infini se trouve la génération procédurale de contenu : des logiciels qui fabriquent du contenu de jeu, des terrains et donjons jusqu’au puzzle que vous faites dans le bus. Pour les puzzles, la tentation est particulièrement forte. Un ordinateur produit un nouveau plateau en quelques millisecondes, et il n’est jamais à court d’idées. Il peut aussi produire des milliers de plateaux insolubles, triviaux, ou techniquement corrects et parfaitement ennuyeux. La façon dont les chercheurs ont abordé ce problème est une bonne visite de ce qui fait un puzzle, et un guide utile pour les joueurs qui se demandent si les « niveaux infinis » d’une fiche de boutique d’applications valent quelque chose.',
    keyTakeaways: [
      'La plupart des générateurs de puzzles fonctionnent par génération et test : proposer un candidat, l’évaluer, garder les bons et chercher mieux.',
      'Le plus dur, c’est le test. Un générateur doit prouver qu’un plateau a une solution, généralement en le faisant jouer par un programme, puis juger s’il est bon.',
      'Soluble est un minimum, pas un but. Les générateurs issus de la recherche modélisent de plus en plus la difficulté et l’expérience du joueur, et c’est encore le jugement humain qui décide de ce qui sort.',
    ],
    sections: {
      'generate-and-test': {
        title: 'Générer, puis tester',
        paragraphs: [
          'En 2011, Julian Togelius, Georgios Yannakakis, Kenneth Stanley et Cameron Browne ont cartographié un domaine en pleine croissance et lui ont donné un nom : la génération procédurale de contenu fondée sur la recherche (search-based). Leur revue classe les générateurs selon ce qu’ils produisent, la manière dont ce contenu est représenté dans le programme et, surtout, la façon dont sa qualité est évaluée. L’approche par recherche traite la conception de niveaux comme un problème d’optimisation. On génère des candidats, on attribue à chacun un score grâce à une fonction d’évaluation, on garde les meilleurs, on les fait varier, et on recommence, souvent avec des algorithmes évolutionnaires empruntés à la biologie.',
          'C’est dans la fonction d’évaluation que se loge la conception. Elle peut mesurer un niveau directement (combien de pièces, combien d’espace vide), par simulation (laisser un joueur artificiel essayer et voir ce qui se passe) ou de manière interactive (demander à de vrais joueurs). Chaque méthode a un coût. Les mesures directes sont bon marché mais superficielles. La simulation est plus fidèle mais exige un programme capable de jouer réellement au jeu. Interroger des gens est le plus fidèle, et de loin le plus lent.',
          'Pour un puzzle de blocs coulissants, c’est facile à imaginer. Un candidat est une grille sur laquelle sont posées des briques. Une variation déplace, ajoute ou retire une brique. Une mesure directe peut compter à quel point le plateau est encombré ; une mesure par simulation confie le plateau à un solveur et note s’il peut être vidé et la longueur du chemin trouvé. On garde les plateaux qui obtiennent un bon score, on les fait varier à nouveau, et après des milliers de tours le générateur a dérivé vers ce que récompense la fonction d’évaluation. C’est sa force et son danger : il trouvera exactement ce que vous avez demandé, y compris des plateaux qui satisfont les chiffres et ennuient le joueur.',
        ],
      },
      'describing-the-space': {
        title: 'Décrire à quoi ressemble un bon plateau',
        paragraphs: [
          'Une autre école part de l’autre bout. Plutôt que de faire évoluer des plateaux en espérant que de bons émergent, Adam Smith et Michael Mateas ont proposé de décrire explicitement l’espace des conceptions acceptables, sous forme de contraintes logiques, et de laisser un solveur généraliste trouver les plateaux qui les satisfont. Grâce à une technique appelée programmation par ensembles réponses (answer set programming), un concepteur peut écrire des règles comme « la sortie doit être accessible » ou « cette pièce doit bouger au moins deux fois », et ne recevoir que des plateaux qui les respectent.',
          'L’intérêt pour la conception de puzzles saute aux yeux. Beaucoup de ce qui rend un plateau intéressant tient en contraintes : telle brique doit être bloquée par telle autre, telle clé doit être nécessaire. Les écrire oblige le concepteur à dire ce qu’il veut vraiment, une discipline aussi utile aux humains qu’aux machines.',
        ],
      },
      'playability-first': {
        title: 'Prouver qu’un plateau a une solution',
        paragraphs: [
          'Quel que soit le générateur, un puzzle doit d’abord être soluble, et le prouver est souvent l’étape la plus difficile. Noor Shaker, Mohammad Shaker et Julian Togelius s’y sont heurtés avec Cut the Rope, un puzzle physique au temps et à l’espace continus, où une recherche exhaustive est sans espoir. Leur réponse : un agent de raisonnement qui ne proposait que des coups sensés à chaque état, ce qui réduisait assez la recherche pour qu’un simple parcours en profondeur trouve des solutions et confirme que les niveaux générés étaient jouables.',
          'Bilal Kartal, Nick Sohre et Stephen Guy ont pris une autre voie pour Sokoban, le classique puzzle où l’on pousse des caisses. Leur générateur construit les puzzles par des parties simulées, à l’aide d’une recherche arborescente Monte-Carlo, si bien que chaque puzzle produit est soluble par construction. Les puzzles de blocs coulissants sont eux aussi un cas difficile : le problème général est PSPACE-complet, comme l’explique notre [histoire des puzzles de blocs coulissants](/blog/history-of-sliding-block-puzzles), et aucun raccourci connu ne résout rapidement tous les plateaux.',
        ],
      },
      'solvable-is-not-good': {
        title: 'Soluble est un minimum, pas un but',
        paragraphs: [
          'Un plateau peut avoir une solution et rester terne, ou n’être soluble que par un chemin qu’aucun humain ne trouverait. Kartal et ses collègues ont attaqué ce problème de front. Ils ont mené une étude auprès d’utilisateurs pour trouver des caractéristiques de plateaux peu coûteuses à calculer et corrélées à la difficulté ressentie, les ont combinées en une fonction de score, puis ont confirmé dans une seconde étude que les puzzles au score plus élevé étaient perçus comme plus difficiles. Autrement dit, la difficulté a dû être apprise auprès des gens, pas supposée.',
          'Yannakakis et Togelius généralisent ce point dans leur cadre de génération procédurale guidée par l’expérience : modéliser l’expérience du joueur, à partir de son comportement, de ses déclarations ou de sa physiologie, et générer du contenu pour la façonner. C’est un objectif ambitieux, et en toute honnêteté, les modèles du plaisir et de la frustration restent grossiers. Pour un puzzle, des qualités comme l’élégance, le « déclic » satisfaisant et la justesse sont encore plus faciles à reconnaître qu’à calculer. Nous examinons ce que la justesse signifie pour les joueurs dans [qu’est-ce qui rend un puzzle juste](/blog/what-makes-a-puzzle-fair).',
        ],
      },
      'where-people-stay': {
        title: 'Là où l’humain reste dans la boucle',
        paragraphs: [
          'Pour les joueurs, une règle empirique utile en découle. « Niveaux infinis » vous apprend qu’un générateur existe ; cela ne vous dit pas comment ses niveaux sont testés. Cherchez des jeux qui expliquent comment ils vérifient leurs plateaux, et méfiez-vous quand la difficulté fait des bonds au hasard : c’est souvent le signe que rien ne la modélise.',
          'Quelques autres signes d’une série de puzzles bien faite, générée ou non : les idées nouvelles arrivent une par une, comme le recommande la recherche sur le rythme des puzzles ; les plateaux paraissent distincts plutôt que des quasi-copies avec une pièce déplacée ; et quand vous êtes bloqué, vous croyez qu’une solution existe. Ce dernier point est le plus difficile à simuler, et celui que les générateurs ont mis le plus longtemps à mériter.',
          'Les 2 000 plateaux d’OutBrick forment un ensemble fixe et conçu, et non un flux généré sur votre appareil, et chacun a vu son chemin de résolution rejoué selon les règles mêmes du jeu avant la sortie. Nous décrivons ce processus, y compris pourquoi un solveur à court de budget signifie « inconnu » et non « impossible », dans [comment nous avons vérifié 2 000 plateaux de blocs coulissants](/blog/verifying-2000-sliding-block-boards). Un solveur prouve qu’un chemin existe ; il ne prouve pas que le plateau est amusant, c’est pourquoi le rythme est jugé à part. Vous pouvez constater le résultat par vous-même sur [le plateau du jour](/daily).',
        ],
      },
    },
    pullQuote: 'Un solveur prouve qu’un chemin existe ; il ne prouve pas que le plateau est amusant, c’est pourquoi le rythme est jugé à part.',
    faqs: [
      { question: 'Qu’est-ce que la génération procédurale de contenu dans les jeux ?', answer: 'Ce sont des logiciels qui créent du contenu de jeu, comme des niveaux, des cartes ou des puzzles, automatiquement plutôt qu’à la main. Beaucoup de générateurs de puzzles proposent des plateaux candidats, les testent, puis gardent ou affinent les meilleurs.' },
      { question: 'Comment un ordinateur sait-il qu’un puzzle généré a une solution ?', answer: 'Le plus souvent en le faisant résoudre par un programme, soit en cherchant un chemin, soit en construisant le puzzle par des parties simulées pour qu’une solution existe par construction. Vérifier une vraie solution est plus fiable que de faire confiance au générateur.' },
      { question: 'Les puzzles générés procéduralement valent-ils ceux faits à la main ?', answer: 'Ils peuvent être solubles et variés, mais juger la difficulté, l’élégance et la justesse reste difficile à automatiser. Les générateurs issus de la recherche apprennent de plus en plus la difficulté à partir d’études auprès de joueurs, et beaucoup de jeux gardent un humain dans la boucle.' },
      { question: 'Les plateaux d’OutBrick sont-ils générés au hasard ?', answer: 'Non. OutBrick propose un ensemble fixe de 2 000 plateaux plutôt que d’en créer de nouveaux pendant que vous jouez, et chacun a vu son chemin de résolution rejoué selon les règles du jeu avant la sortie.' },
    ],
  },
  'dynamic-difficulty-adjustment': {
    title: 'Difficulté dynamique : un jeu doit-il s’adapter à vous ?',
    dek: 'Beaucoup de jeux s’ajustent en douce à votre niveau. Ce que disent les études sur la difficulté adaptative, l’excès de confiance, et l’intérêt de demander.',
    imageAlt: 'Un iPhone affichant le classement hebdomadaire d’OutBrick, entre Flurry coiffé d’un bonnet à pompon rayé et un Zippy jaune qui fait un clin d’œil',
    tags: ['difficulté dynamique', 'difficulté adaptative', 'game design', 'choix du joueur', 'conception de jeux'],
    intro: 'Vous mourez trois fois au même passage d’un jeu et, au quatrième essai, il vous semble un peu plus facile. Les ennemis étaient-ils plus lents, ou avez-vous enfin compris ? Souvent, impossible de le dire, et c’est voulu. L’ajustement dynamique de la difficulté, ou DDA, consiste à modifier le défi d’un jeu pendant que vous jouez, selon la manière dont vous vous en sortez. Il promet à chaque joueur un jeu parfaitement à sa mesure. Il soulève aussi des questions gênantes : sur l’honnêteté, sur qui décide de la difficulté d’un jeu, et sur ce que vaut une victoire quand le jeu vous a aidé. Voici ce que dit la recherche, et le choix que nous avons fait pour nos propres puzzles.',
    keyTakeaways: [
      'Dans les études, la difficulté adaptative améliore souvent l’expérience de jeu, mais les détails comptent : les joueurs peuvent perdre le sentiment de contrôle quand le système décide de tout.',
      'L’adaptation peut rendre les joueurs trop confiants dans leurs capacités, et le simple fait de leur dire qu’un jeu s’adapte peut renforcer l’immersion, même quand ce n’est pas le cas.',
      'Offrir aux joueurs des choix de difficulté visibles et réguliers fonctionne en général mieux qu’un réglage caché ou des menus permanents.',
    ],
    sections: {
      'what-dda-is': {
        title: 'Qu’est-ce que l’ajustement dynamique de la difficulté ?',
        paragraphs: [
          'Les jeux traditionnels fixent leur difficulté à l’avance : vous choisissez Facile, Normal ou Difficile au départ, ou le jeu suit une courbe prédéfinie. Comme le résume la revue du domaine de Mohammad Zohaib, le problème est que les joueurs doivent alors se caler sur une courbe d’apprentissage décidée par quelqu’un d’autre. Le DDA modifie des paramètres du jeu en temps réel, comme la fréquence d’apparition des ennemis, leur précision ou la quantité de ressources trouvées, pour maintenir le joueur entre l’ennui et la frustration.',
          'Vous l’avez sans doute croisé sans le savoir. Les jeux de course sont accusés depuis longtemps de pratiquer l’« effet élastique » (rubber-banding) : les rivaux ralentissent quand vous êtes distancé et accélèrent quand vous prenez de l’avance. Certains jeux d’action distribuent discrètement plus de soins ou de munitions quand vous peinez. Certains jeux de puzzle proposent une version plus facile d’un niveau après plusieurs échecs. Les techniques diffèrent, la logique est la même : observer le joueur, estimer son niveau et déplacer le défi à sa rencontre.',
          'L’article de Robin Hunicke paru en 2005, « The case for dynamic difficulty adjustment in games », est le point de départ habituel. Selon l’idée reçue, notait-elle, les joueurs aiment la surprise mais se sentent floués s’ils remarquent qu’un jeu change pour s’adapter à eux. Son système, Hamlet, ajustait en coulisses l’offre et la demande dans un jeu de tir à la première personne, et ses résultats préliminaires remettaient en cause certaines de ces hypothèses sur la réaction des joueurs. La tension qu’elle a nommée n’a jamais disparu : l’adaptation est censée aider, mais seulement si elle ne gâche pas l’expérience qu’elle protège.',
        ],
      },
      'does-it-work': {
        title: 'L’adaptation aide-t-elle vraiment ?',
        paragraphs: [
          'Souvent, oui, avec des réserves. Dennis Ang et Alex Mitchell ont comparé trois versions d’un jeu : sans adaptation, une version orientée système qui augmentait la difficulté automatiquement, et une version orientée joueur où ce sont les joueurs qui décidaient des ajustements. Les deux versions adaptatives ont offert une meilleure expérience globale que l’absence d’adaptation. Mais leur texture différait. Avec le système automatique, les joueurs se sentaient moins gênés par le regard sur eux-mêmes et perdaient davantage la notion du temps, mais ils déclaraient aussi un sentiment de contrôle plus faible que ceux qui choisissaient eux-mêmes.',
          'Ce compromis est au cœur du débat. L’adaptation cachée peut lisser les aspérités qui brisent l’immersion. Elle retire aussi une décision au joueur, et le contrôle est l’un des ingrédients d’un jeu satisfaisant. La bonne réponse dépend de la vocation du jeu : un jeu narratif qui veut vous emporter peut accepter ce compromis ; un jeu de puzzle dont le plaisir consiste à trouver par soi-même, peut-être pas.',
        ],
      },
      'the-honesty-problem': {
        title: 'Le problème de l’honnêteté',
        paragraphs: [
          'Deux pistes de recherche compliquent le tableau. Thomas Constant et Guillaume Levieux ont mesuré la confiance des joueurs grâce à un système de paris intégré au jeu, dans trois jeux qui testaient des compétences logiques, motrices et sensorielles. Les joueurs dont la difficulté était adaptée par un algorithme avaient tendance à devenir trop confiants et à surestimer leurs chances de réussite. Les auteurs suggèrent que ce regain de confiance pourrait expliquer en partie pourquoi le DDA est agréable, et c’est précisément pour cela qu’il mérite un second regard : un jeu qui plaît en partie parce qu’il vous trompe sur vos capacités fait quelque chose de subtil.',
          'Alena Denisova et Paul Cairns ont trouvé l’image inverse. Dans deux études portant sur deux jeux différents, les joueurs à qui l’on disait que le jeu s’adaptait à eux déclaraient plus d’immersion, que le jeu s’adapte réellement ou non. La croyance façonnait l’expérience indépendamment du mécanisme. Les auteurs y voient plutôt un motif de soulagement pour les développeurs : parler de l’adaptation aux joueurs ne semble pas se retourner contre eux. Cela montre aussi à quel point le sentiment que « ce jeu me comprend » tient aux attentes du joueur.',
        ],
      },
      'give-players-the-dial': {
        title: 'Plaidoyer pour laisser la main aux joueurs',
        paragraphs: [
          'Si le contrôle compte, pourquoi ne pas simplement demander aux joueurs ? Ang et Mitchell l’ont testé aussi, avec 84 participants. Ils ont fait varier la présentation des choix de difficulté, intégrés aux mécaniques du jeu ou sous forme de réglage direct, et leur fréquence : une fois, régulièrement ou en permanence. Les choix intégrés au jeu amélioraient certains aspects de l’expérience, et les choix réguliers l’emportaient à la fois sur un choix unique au départ et sur un flot continu de choix. Demander une seule fois est trop rigide ; demander tout le temps transforme le jeu en paperasse.',
          'Mis bout à bout, ces résultats suggèrent une voie médiane que beaucoup de jeux appréciés suivent déjà. Proposer de l’aide aux moments naturels, la rendre visible, laisser les joueurs la refuser, et ne pas faire passer une victoire aidée pour autre chose. Le mode Assistance de Celeste en est un exemple célèbre, dont nous parlons dans [le mode Assistance de Celeste : l’accessibilité comme meilleure conception](/blog/celeste-assist-mode-accessibility).',
        ],
        bullets: [
          'Le jeu change-t-il la difficulté sans vous le dire ?',
          'Pouvez-vous voir, et désactiver, l’aide qu’il vous apporte ?',
          'Les choix sont-ils proposés lors de pauses naturelles, plutôt qu’au départ seulement ou en permanence ?',
          'Une réussite aidée compte-t-elle quand même, sans honte ?',
        ],
      },
      'outbrick-fixed-boards': {
        title: 'Pourquoi OutBrick garde des plateaux fixes',
        paragraphs: [
          'Pour un puzzle de briques coulissantes, nous avons choisi l’aide visible plutôt que l’adaptation cachée. Chacun des 2 000 plateaux d’OutBrick est fixe et a été vérifié par un solveur avant la sortie, et chaque plateau affiche son objectif de coups et sa limite de coups dès la première touche : le puzzle que vous affrontez est celui que tout le monde affronte. Vider un plateau signifie que vous avez trouvé un chemin à travers ce plateau-là.',
          'L’aide existe, mais c’est vous qui la demandez et vous la voyez. La première annulation de chaque plateau est gratuite. Quand un plateau se bloque, l’écran de secours vous le dit et vous propose une annulation gratuite. Quand vous êtes à court de coups, on vous propose cinq coups de plus avant toute autre chose, payés en pièces ou, si vous le choisissez, par une vidéo récompensée. La page d’accueil détaille [exactement ce que coûtent les vies, les annulations et les pubs](/#fair). Rien de tout cela ne modifie le plateau dans votre dos.',
          'C’est un choix adapté à un jeu de puzzle, pas un verdict sur le DDA en général. Pour aller plus loin sur la forme du défi à l’échelle d’un jeu entier, lisez [comment construire une courbe de difficulté plus bienveillante](/blog/kinder-difficulty-curve) et [qu’est-ce qui rend un puzzle juste](/blog/what-makes-a-puzzle-fair).',
        ],
      },
    },
    pullQuote: 'Demander une seule fois est trop rigide ; demander tout le temps transforme le jeu en paperasse.',
    faqs: [
      { question: 'Qu’est-ce que l’ajustement dynamique de la difficulté ?', answer: 'L’ajustement dynamique de la difficulté (DDA), c’est quand un jeu modifie son défi en cours de partie selon la manière dont le joueur s’en sort, par exemple en affaiblissant les ennemis après des échecs répétés. Le but est de maintenir le joueur entre l’ennui et la frustration.' },
      { question: 'La difficulté dynamique, c’est bien ou pas ?', answer: 'Les études constatent souvent qu’elle améliore l’expérience de jeu, mais l’adaptation cachée peut réduire le sentiment de contrôle des joueurs et a été associée à un excès de confiance. Une aide visible et facultative, proposée aux moments naturels, tend à éviter ces écueils.' },
      { question: 'Comment savoir si un jeu ajuste sa difficulté ?', answer: 'C’est souvent difficile à dire, et cela fait partie du débat. Cherchez des réglages ou des descriptions de fiche qui mentionnent une difficulté adaptative ou assistée, et observez si le jeu propose son aide ouvertement ou semble changer sans le dire.' },
      { question: 'OutBrick adapte-t-il la difficulté au joueur ?', answer: 'Non. Chaque plateau est fixe et vérifié par un solveur, avec son objectif de coups et sa limite affichés dès la première touche. Les aides comme la première annulation gratuite ou les cinq coups de plus sont proposées ouvertement, et c’est vous qui choisissez de les prendre.' },
    ],
  },
  'game-tutorials-that-teach-without-telling': {
    title: 'Des tutoriels qui enseignent sans expliquer : ce qui marche',
    dek: 'Une étude sur 45 000 joueurs : tutoriels utiles seulement dans le jeu complexe. La recherche sur l’apprentissage par le jeu, les indices et la 1re heure.',
    imageAlt: 'Un iPhone affichant la carte du Voyage d’OutBrick à Button Factory, entre Flurry coiffé d’un bonnet à pompon et Bloo avec sa montre',
    tags: ['tutoriel jeu vidéo', 'prise en main', 'game design', 'onboarding', 'apprendre en jouant'],
    intro: 'Nous avons presque tous sauté un tutoriel. Certains d’entre nous ont sauté un tutoriel, se sont perdus, puis sont revenus le chercher. Quelques-uns ont supprimé un jeu parce qu’il s’ouvrait sur dix écrans d’instructions avant de nous laisser toucher à quoi que ce soit. Apprendre à jouer à un nouveau venu est l’une des tâches les plus difficiles du game design : expliquez trop peu, il patauge ; expliquez trop, il part avant que le jeu commence. Bonne nouvelle : c’est l’un des recoins les mieux étudiés du game design, avec des expériences portant sur des dizaines de milliers de joueurs. Les résultats sont étonnamment cohérents, et ils plaident pour des jeux qui enseignent surtout en laissant jouer.',
    keyTakeaways: [
      'Dans une étude portant sur plus de 45 000 joueurs, les tutoriels ont augmenté le temps de jeu jusqu’à 29 % dans le jeu le plus complexe, sans différence significative dans deux jeux plus simples.',
      'Enseigner à l’intérieur du jeu, au moment où une mécanique compte, a fait mieux qu’un écran d’instructions séparé en matière d’émotion et de motivation.',
      'Indices et explications peuvent se retourner contre le joueur : dans une étude sur 50 000 élèves, chacun des systèmes d’indices testés a fait baisser les performances par rapport à l’absence d’indices.',
    ],
    sections: {
      'the-45000-player-test': {
        title: 'Le test des 45 000 joueurs',
        paragraphs: [
          'En 2012, Erik Andersen et ses collègues de l’université de Washington ont mené l’une des plus grandes expériences sur les tutoriels jamais publiées. Ils ont intégré huit conceptions de tutoriel à trois jeux de complexité variable et les ont proposés en ligne à plus de 45 000 joueurs, en mesurant combien de temps ils jouaient et s’ils revenaient. Les jeux étaient Refraction, un jeu de puzzle où l’on divise des faisceaux lumineux ; Hello Worlds, un jeu de plateforme ; et Foldit, un jeu bien plus complexe sur le repliement des protéines. Les résultats étaient sans appel. Dans le jeu le plus complexe, les tutoriels augmentaient le temps de jeu jusqu’à 29 %. Dans les deux jeux plus simples, ils n’amélioraient pas significativement l’engagement.',
          'La conclusion des auteurs mérite d’être reprise dans son esprit : investir dans des tutoriels n’est peut-être pas justifié pour des jeux dont les mécaniques peuvent se découvrir en expérimentant. Ce n’est pas un argument contre l’enseignement. C’est un argument pour des mécaniques qu’on peut découvrir, afin que le jeu lui-même enseigne et que les mots puissent disparaître.',
        ],
      },
      'teach-in-context': {
        title: 'Enseigner au moment où ça compte',
        paragraphs: [
          'Quand des instructions sont nécessaires, le moment compte. Julian Frommel et ses collègues ont comparé, avec 39 joueurs, deux versions du tutoriel d’un jeu en réalité virtuelle : un écran d’instructions classique au départ, et un tutoriel contextuel qui expliquait chaque mécanique au moment où elle devenait utile en jeu. Performances et immersion étaient comparables, mais la version contextuelle suscitait plus d’émotions positives, moins d’émotions négatives et une motivation plus forte. Leur conclusion mérite d’être affichée par tout concepteur. Un tutoriel n’est pas une introduction séparée du jeu, il fait partie de l’expérience.',
          'Les recommandations d’Apple pour les apps disent la même chose sous un autre angle : la prise en main doit être rapide, plaisante et facultative, et passer si possible par des conseils contextuels, car on retient mieux en accomplissant une tâche qu’en lisant à son sujet ; ses [Human Interface Guidelines sur l’onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding) sont une lecture utile pour qui conçoit un premier lancement.',
        ],
      },
      'one-idea-at-a-time': {
        title: 'Une idée à la fois',
        paragraphs: [
          'Les grands jeux de puzzle enseignent depuis longtemps sans mots, et la recherche commence à décrire comment. Conor Linehan et ses collègues ont analysé des vidéos de parties de Portal, du mode coopératif de Portal 2, de Braid et de Lemmings. Dans chacun, les compétences principales étaient introduites séparément, par des puzzles simples qui ne demandaient qu’elles. Les joueurs s’exerçaient ensuite à combiner la nouvelle compétence avec les précédentes, et les puzzles se complexifiaient jusqu’à l’arrivée de la suivante.',
          'Cette structure est un tutoriel déguisé. Chaque puzzle d’introduction est une leçon avec une seule déduction juste, et le résoudre prouve que vous l’avez apprise. Rien n’a besoin d’être dit, puisque le plateau pose lui-même la question et vérifie la réponse. C’est le principe que nous avons exploré dans [comment les jeux enseignent la curiosité sans faire la leçon](/blog/games-teach-curiosity-without-lecture), et dans la façon dont [Minecraft laisse la découverte bâtir l’étage suivant](/blog/minecraft-layered-discovery).',
        ],
      },
      'when-help-hurts': {
        title: 'Quand l’aide dessert',
        paragraphs: [
          'Les indices semblent une évidente gentillesse, mais les données sont mitigées. Eleanor O’Rourke, Christy Ballweber et Zoran Popović ont testé quatre systèmes d’indices, inspirés de conceptions éprouvées dans des logiciels de tutorat et des jeux commerciaux, dans un jeu de puzzle éducatif auquel ont joué 50 000 élèves. Tous les quatre ont fait baisser les performances par rapport à une version sans indices. Les auteurs précisent avec soin que cela ne veut pas dire que les indices ne marchent jamais, seulement que des conceptions importées d’autres contextes ne se sont pas bien transposées dans un jeu.',
          'Une lecture plausible est qu’un indice peut interrompre ce qui fait tout l’intérêt d’un puzzle : le moment où vous trouvez. Si l’indice arrive avant que vous ayez eu l’occasion de chercher, il vous vole ce moment. S’il arrive sous forme de pavé de texte, il vous arrache au plateau.',
          'Cela ne veut pas dire laisser les joueurs seuls face à un mur. Cela suggère quelques principes pour une aide qui respecte le puzzle : la proposer quand on la demande plutôt qu’automatiquement ; faire du premier indice un petit coup de pouce, qui indique où regarder plutôt que quoi faire ; et laisser le joueur décider s’il veut le suivant. Une aide choisie par le joueur lui laisse la solution.',
        ],
      },
      'the-first-hour': {
        title: 'La première heure, c’est l’intrigue',
        paragraphs: [
          'Gifford Cheung, Thomas Zimmermann et Nachiappan Nagappan ont analysé plus de 200 critiques de jeux et interrogé des professionnels du secteur sur la première heure de jeu. Le conseil habituel dans l’industrie est de rendre un jeu amusant dès la première seconde. Ils soutiennent que l’intrigue et l’information comptent tout autant : c’est lors de la première session que les joueurs décident si un jeu vaut la peine de continuer, et un jeu qui les rend curieux de la suite peut les retenir même si son ouverture est imparfaite.',
          'OutBrick est notre propre mise à l’épreuve de ces idées. Sa règle tient en une phrase : faites glisser une brique et elle file jusqu’à ce que quelque chose l’arrête, et elle ne sort que par la porte de sa couleur. C’est le genre de mécanique que, d’après l’étude d’Andersen, on peut découvrir en expérimentant, puisqu’un seul glissement en montre l’essentiel. Clés, serrures, caisses et portes arrivent sur des plateaux plus tardifs, quand l’idée de base est déjà acquise. Vous pouvez juger du résultat en [jouant un plateau dans votre navigateur](/play) sans aucune instruction, et si vous voulez approfondir ensuite, notre guide [comment résoudre un puzzle de blocs coulissants](/blog/how-to-solve-sliding-block-puzzles) est là quand vous le souhaitez.',
        ],
      },
    },
    pullQuote: 'Un tutoriel n’est pas une introduction séparée du jeu, il fait partie de l’expérience.',
    faqs: [
      { question: 'Les tutoriels de jeux vidéo sont-ils efficaces ?', answer: 'Cela dépend du jeu. Une étude portant sur plus de 45 000 joueurs a montré que les tutoriels augmentaient le temps de jeu jusqu’à 29 % dans un jeu complexe, mais ne faisaient pas de différence significative dans deux jeux plus simples dont les mécaniques s’apprenaient en expérimentant.' },
      { question: 'Quelle est la meilleure façon d’apprendre un jeu aux joueurs ?', answer: 'La recherche privilégie l’apprentissage en jouant : introduire une mécanique à la fois par des défis simples, expliquer les choses au moment où elles deviennent utiles, et garder les textes courts. Les écrans d’instructions séparés motivent en général moins.' },
      { question: 'Les indices sont-ils une bonne chose dans les jeux de puzzle ?', answer: 'Pas toujours. Dans une étude sur 50 000 élèves jouant à un jeu de puzzle éducatif, quatre systèmes d’indices différents ont tous fait baisser les performances par rapport à l’absence d’indices : les indices demandent une conception et un timing soignés.' },
      { question: 'Comment apprend-on à jouer à OutBrick ?', answer: 'En faisant glisser une brique. Elle file jusqu’à ce que quelque chose l’arrête et ne sort que par la porte de sa couleur ; clés, serrures, caisses et portes apparaissent sur des plateaux plus tardifs. Vous pouvez [essayer un plateau dans votre navigateur](/play) avant d’installer quoi que ce soit.' },
    ],
  },
  'game-audio-feedback-player-experience': {
    title: 'Le son de la réussite : l’audio et l’expérience de jeu',
    dek: 'Le son change l’immersion, la tension et le sentiment de compétence, et la musique peut même tordre la perception du temps. Ce que montre la recherche.',
    imageAlt: 'Un iPhone affichant la carte du Voyage d’OutBrick à Cherry Blossom Town, entre Moss avec sa ceinture à outils et un Zippy jaune qui fait un clin d’œil',
    tags: ['son jeu vidéo', 'sound design', 'musique de jeu', 'retour sonore', 'expérience de jeu'],
    intro: 'Coupez le son d’un jeu que vous connaissez bien et il se passe quelque chose d’étrange. Les règles n’ont pas changé, et pourtant tout paraît plus plat, plus lent, curieusement moins sûr. Le clic d’une pièce qui se pose, la note qui monte quand vous approchez du but, le petit accord d’une victoire : ils vous disaient des choses sans que vous remarquiez qu’on vous les disait. Le son est l’une des parties les plus puissantes et les moins visibles du game design. Les chercheurs ont mesuré ses effets sur l’immersion, l’émotion et même la durée que les joueurs croient avoir passée à jouer. Et comme tant de gens jouent sur téléphone le son coupé, la recherche porte aussi une leçon sur ce qu’on ne devrait jamais demander au son de faire seul.',
    keyTakeaways: [
      'Dans une expérience contrôlée, activer le son du jeu a amélioré toutes les dimensions mesurées de l’expérience, de l’immersion et du flow à la compétence et aux émotions positives.',
      'La musique d’un jeu augmente le plaisir surtout en intensifiant les émotions, et le choix de la musique peut rendre le jeu plus ou moins immersif.',
      'Comme beaucoup de gens jouent sans le son, celui-ci doit renforcer une information également affichée à l’écran, jamais la porter seul.',
    ],
    sections: {
      'sound-does-work': {
        title: 'Le son fait un travail mesurable',
        paragraphs: [
          'Lennart Nacke, Mark Grimshaw et Craig Lindley ont mené l’une des premières expériences rigoureuses sur le son des jeux. Les participants jouaient à un jeu de tir à la première personne nerveux, dont les effets sonores et la musique étaient activés ou coupés indépendamment, pendant que les chercheurs enregistraient la conductance cutanée et l’activité des muscles du visage et faisaient passer un questionnaire standard sur l’expérience de jeu. Les mesures physiologiques n’ont montré aucun effet significatif. Le questionnaire, si : le son avait un effet significatif sur toutes les dimensions mesurées, dont l’immersion, la tension, la compétence, le flow, le défi et les émotions tant positives que négatives. Son et musique interagissaient aussi dans leur effet sur la tension et le flow.',
          'Cette combinaison est instructive. Les joueurs sentaient la différence, nettement et sur tous les plans, alors même que les mesures corporelles disponibles à l’époque ne la captaient pas. Le son n’est pas un décor posé sur le jeu ; pour le joueur, il fait partie de ce qu’est le jeu.',
          'Concrètement, le son d’un jeu remplit deux sortes de fonctions. Certains sons portent de l’information : un clic qui confirme qu’un coup a été pris en compte, une autre tonalité quand une action échoue, une note qui monte à l’approche d’un objectif. D’autres portent une émotion : musique, ambiance, texture d’un monde. Les sons informatifs fonctionnent mieux quand ils sont courts, cohérents et associés à un seul sens. Les sons émotionnels fonctionnent mieux quand ils correspondent à ce que le jeu cherche à vous faire ressentir, et c’est là qu’intervient l’étude suivante.',
        ],
      },
      'music-and-emotion': {
        title: 'La musique passe par l’émotion',
        paragraphs: [
          'Pourquoi la musique rend-elle un jeu plus agréable ? Christoph Klimmt et ses collègues ont testé deux explications possibles dans deux expériences menées auprès de jeunes joueurs masculins, 68 jouant à Assassin’s Creed: Black Flag et 59 à Alien: Isolation, chaque fois avec ou sans bande originale. La première piste était émotionnelle : la musique intensifie les sentiments, et des émotions positives plus fortes signifient plus de plaisir. La seconde était cognitive : la musique pourrait renforcer le sentiment d’être dans le monde du jeu ou de s’identifier au personnage.',
          'Les données ont soutenu la piste émotionnelle. La bande originale augmentait le plaisir de manière indirecte, par les émotions positives, et dans le jeu d’horreur, une musique saisissante intensifiait l’expérience de l’horreur. Les chercheurs n’ont pas constaté que la musique agissait par un sentiment de présence ou d’identification plus fort. Les échantillons étaient restreints, les détails pourraient donc ne pas se généraliser, mais la leçon pour les concepteurs est plausible : mieux vaut penser la musique comme un instrument émotionnel, dont la tonalité doit correspondre à ce que le jeu veut faire ressentir.',
        ],
      },
      'time-and-immersion': {
        title: 'Musique, immersion et temps perdu de vue',
        paragraphs: [
          'Perdre la notion du temps est l’un des signes d’immersion les plus souvent rapportés. Timothy Sanders et Paul Cairns ont testé si la musique pouvait le provoquer. Ils ont ajouté de la musique à un simple jeu de labyrinthe et mesuré la perception du temps écoulé avec deux méthodes bien établies en psychologie. La musique modifiait la perception du temps selon l’une des deux mesures mais pas l’autre et, selon la musique choisie, elle pouvait augmenter ou diminuer l’immersion.',
          'Les auteurs qualifient le tableau d’ensemble de complexe, et c’est le résumé honnête. La musique peut rendre le jeu plus absorbant, mais une mauvaise musique peut le rendre moins absorbant, et son effet sur le temps est réel sans être simple. Pour un jeu calme, c’est une raison de choisir sa musique avec soin et de laisser les joueurs baisser le volume, plutôt que de supposer que plus de bande originale signifie plus de plaisir. Nous avons écrit sur les autres ingrédients d’un jeu reposant dans [ce qui rend vraiment un jeu de puzzle apaisant](/blog/relaxing-puzzle-games-what-makes-one-calm).',
        ],
      },
      'when-sound-fades': {
        title: 'Quand le son passe à l’arrière-plan',
        paragraphs: [
          'Le son ne domine pas toujours. Katja Rogers et ses collègues ont comparé le même jeu d’horreur sur un écran et en réalité virtuelle, puis testé différents types d’audio spatialisé en VR. Ils ont constaté qu’en VR l’audio avait une influence plus implicite sur l’expérience, parce que l’expérience sensorielle d’ensemble était très forte, et que la dimensionnalité de l’audio ne semblait pas y être un facteur significatif de l’expérience de jeu.',
          'C’est un correctif utile. La contribution du son dépend de tout ce que le joueur reçoit par ailleurs, et dans un environnement visuel riche, elle peut être ressentie sans être remarquée. Lu dans l’autre sens, le même résultat suggère pourquoi un petit jeu simple peut tant bénéficier du son. Quand l’écran est calme, l’oreille travaille davantage.',
        ],
      },
      'design-for-sound-off': {
        title: 'Concevoir pour le son coupé',
        paragraphs: [
          'Voici la tension pratique. Le son compte pour l’expérience, et pourtant les téléphones passent une bonne partie de leur vie en silencieux : dans le train, en salle d’attente, à côté de quelqu’un qui dort. Un joueur sourd ou malentendant ne l’entendra peut-être jamais. Le son doit donc renforcer, pas porter. Chaque signal sonore qui apprend quelque chose au joueur devrait avoir un équivalent visuel, et idéalement haptique ; Tanay Singhal et Oliver Schneider ont montré qu’une vibration bien conçue, qui renforce le retour à l’écran, peut elle-même rendre un jeu plus agréable et plus immersif.',
          'OutBrick est conçu pour être entièrement jouable en silence. Les neuf amis en briques n’ont pas de voix et ne parlent que dans des bulles de texte, et tout ce qui compte sur un plateau, de l’arrêt d’une brique au plateau vidé, s’affiche à l’écran. La couleur est doublée de symboles sur chaque brique, activés par défaut, pour la même raison : aucun sens ne devrait être le seul moyen d’accès. Notre [page accessibilité](/accessibility) détaille le reste, et notre article sur [le game feel et le juice](/blog/game-feel-and-juice) examine comment le retour fonctionne à travers les sens. Pour les raisons de ne jamais faire de la couleur le seul indice, lisez [pourquoi la couleur ne doit jamais être le seul indice d’un puzzle](/blog/color-shape-accessibility).',
        ],
        bullets: [
          'Associez chaque son porteur de sens à un signal visuel.',
          'Donnez à la musique, aux effets et à toute voix des réglages de volume séparés.',
          'Réservez le son le plus marquant au moment le plus rare et le plus beau.',
          'Testez tout le jeu en silencieux avant de le sortir.',
        ],
      },
    },
    pullQuote: 'Quand l’écran est calme, l’oreille travaille davantage.',
    faqs: [
      { question: 'Comment le son influence-t-il l’expérience de jeu ?', answer: 'Dans une expérience contrôlée, activer le son du jeu a amélioré les évaluations des joueurs en matière d’immersion, de flow, de compétence, de tension, de défi et d’émotion. La musique, en particulier, augmente le plaisir en intensifiant les émotions.' },
      { question: 'La musique d’un jeu peut-elle changer la perception du temps ?', answer: 'Oui. Une étude a montré qu’ajouter de la musique à un jeu de labyrinthe modifiait la perception du temps écoulé selon l’une de deux mesures, et que différentes musiques pouvaient augmenter ou diminuer l’immersion.' },
      { question: 'Les jeux mobiles doivent-ils fonctionner sans le son ?', answer: 'Oui. Beaucoup de gens jouent en silencieux, et certains joueurs n’entendent pas du tout l’audio : chaque signal sonore important doit donc aussi s’afficher à l’écran, et idéalement être accompagné d’une vibration.' },
      { question: 'Peut-on jouer à OutBrick sans le son ?', answer: 'Oui. Tout ce qui compte sur un plateau s’affiche à l’écran, et les neuf amis en briques ne parlent que dans des bulles de texte, sans voix.' },
    ],
  },
  'loot-boxes-ethical-monetisation': {
    title: 'Loot boxes, récompenses aléatoires et monétisation éthique',
    dek: 'Les études lient constamment les dépenses en loot boxes au jeu problématique. Ce qu’elles montrent, ce qui rend une monétisation prédatrice, et un test.',
    imageAlt: 'Un iPhone affichant la carte du Voyage d’OutBrick à Cloud Carnival, entre un Zippy jaune qui fait un clin d’œil et un Bricko rouge',
    tags: ['loot box', 'monétisation', 'éthique du jeu vidéo', 'jeux mobiles', 'microtransactions'],
    intro: 'Une loot box, c’est simple : on paie, on ouvre, on obtient quelque chose, mais on ne sait pas quoi avant qu’il soit trop tard pour changer d’avis. C’est devenu l’un des mécanismes de jeu les plus étudiés, et l’un des plus réglementés. La recherche est désormais assez fournie pour affirmer certaines choses clairement, et pour être honnête sur ce qu’elle ne peut pas encore affirmer. Elle donne aussi aux joueurs et aux studios un test pratique pour toute manière dont un jeu demande de l’argent, y compris la nôtre. OutBrick gagne de l’argent grâce à des achats facultatifs et à des vidéos récompensées que l’on choisit de regarder ; nous avons donc essayé, à la fin, de nous appliquer le même test.',
    keyTakeaways: [
      'Dans de nombreuses études, les dépenses en loot boxes sont liées aux symptômes de jeu problématique ; une méta-analyse a estimé la corrélation à environ 0,26, faible mais reproductible.',
      'Ces études sont surtout des enquêtes : elles ne peuvent pas dire si les loot boxes causent le jeu problématique ou attirent des personnes qui en souffrent déjà ; dans les deux cas, la prudence s’impose.',
      'Une monétisation juste montre le prix complet et la récompense avant que vous vous engagiez, ne cache jamais le coût à long terme, et fait que dire non ne coûte rien.',
    ],
    sections: {
      'what-a-loot-box-is': {
        title: 'Qu’est-ce qu’une loot box, et pourquoi elle ressemble aux jeux d’argent',
        paragraphs: [
          'Une loot box est un objet que l’on achète avec de l’argent réel, directement ou via une monnaie du jeu, et dont le contenu est tiré au hasard. Ses proches parents sont les paquets de cartes, les tirages de gacha et les roues à prix. Ce qui les distingue sur le plan psychologique, c’est la récompense variable : vous ne savez pas ce que vous allez obtenir, et de temps en temps vous obtenez quelque chose de rare. Les récompenses imprévisibles comptent parmi les moyens les plus fiables que l’on connaisse pour faire répéter un comportement, et c’est exactement pour cela qu’on les utilise.',
          'En 2018, Aaron Drummond et James Sauer ont confronté les systèmes de loot boxes de 22 jeux récents à cinq critères que psychologues et régulateurs utilisent pour reconnaître un jeu d’argent, dont un échange d’argent ou d’un objet de valeur, une issue décidée au moins en partie par le hasard, et des gagnants qui gagnent aux dépens des perdants. Près de la moitié des jeux remplissaient les cinq. Leur argument n’était pas que toute loot box est un jeu d’argent illégal, question juridique qui varie selon les pays, mais que beaucoup s’en rapprochent sur le plan psychologique.',
        ],
      },
      'what-the-evidence-shows': {
        title: 'Ce que montrent les données',
        paragraphs: [
          'L’étude la plus connue est une vaste enquête de David Zendle et Paul Cairns auprès de 7 422 joueurs. Plus les gens dépensaient en loot boxes, plus leurs symptômes de jeu problématique tendaient à être sévères. Le lien était environ treize fois plus fort, en variance expliquée, que celui entre jeu problématique et dépenses pour d’autres objets du jeu, ce qui suggère que c’est la caractéristique proche du jeu d’argent, et non la dépense en général, qui compte.',
          'Une étude de suivi auprès de 1 155 joueurs de 16 à 18 ans, menée par Zendle, Rachel Meyer et Harriet Over, a retrouvé le même lien, en plus fort : d’une ampleur moyenne à forte. Beaucoup des raisons données par les jeunes joueurs pour acheter des loot boxes faisaient écho aux raisons courantes de jouer à des jeux d’argent. En 2021, Shaun Garea et ses collègues ont réuni la littérature dans une méta-analyse. Sur 15 études, les dépenses en loot boxes étaient corrélées au jeu problématique à environ r = 0,26, et sur sept études, à la pratique excessive du jeu vidéo à environ r = 0,25. Ils parlent d’une relation faible mais reproductible, qui pourrait avoir une portée clinique.',
        ],
      },
      'what-the-link-means': {
        title: 'Ce que ce lien signifie, et ce qu’il ne signifie pas',
        paragraphs: [
          'Ces études sont surtout des enquêtes transversales : elles ne peuvent pas dire dans quel sens va la flèche. Les loot boxes pourraient pousser des gens vers le jeu problématique. Ou bien des personnes qui ont déjà un problème de jeu pourraient dépenser beaucoup en loot boxes simplement parce qu’elles existent. Zendle et Cairns disent explicitement que leurs données ne permettent pas de trancher. Leur point est que les deux explications sont préoccupantes : dans l’une, le jeu cause un tort ; dans l’autre, il tire un profit disproportionné de personnes déjà vulnérables.',
          'Daniel King et Paul Delfabbro ont donné un nom au problème plus large : la monétisation prédatrice, c’est-à-dire des systèmes d’achat qui masquent ou retardent le coût à long terme d’une activité jusqu’à ce que les joueurs soient déjà engagés financièrement et psychologiquement. Les loot boxes en sont une forme. D’autres incluent des offres calées sur les moments de frustration et des monnaies conçues pour rendre les prix difficiles à comparer. Nous examinons ces ficelles plus en détail dans [les dark patterns dans les jeux mobiles](/blog/dark-patterns-in-mobile-games).',
        ],
      },
      'a-fair-monetisation-test': {
        title: 'Un test juste pour la façon dont un jeu demande de l’argent',
        paragraphs: [
          'Les jeux gratuits doivent bien être financés d’une manière ou d’une autre, et demander de l’argent n’a rien de mal en soi. La recherche fait ressortir une poignée de questions qui distinguent un échange juste d’un échange prédateur. Elles sont aussi utiles à un parent qui vérifie le jeu de son enfant qu’à un studio qui conçoit une boutique.',
        ],
        bullets: [
          'Savez-vous exactement ce que vous obtiendrez avant de payer, en argent ou en temps ?',
          'Le coût complet est-il clair, ou caché derrière une monnaie, un lot ou un minuteur ?',
          'Pouvez-vous progresser dans le jeu principal sans payer ?',
          'Dire non vous coûte-t-il quelque chose, ou le jeu rend-il le refus désagréable ?',
          'Les offres sont-elles calées sur vos pires moments, par exemple juste après un échec ?',
          'Y a-t-il une limite raisonnable, ou la dépense et la répétition peuvent-elles continuer sans fin ?',
        ],
      },
      'where-outbrick-stands': {
        title: 'La position d’OutBrick',
        paragraphs: [
          'OutBrick gagne de l’argent de deux façons : des achats intégrés facultatifs, et des vidéos récompensées qui ne se lancent que lorsque vous appuyez sur un bouton pour demander quelque chose. Il y a six emplacements : une vie, cinq coups de plus, deux annulations, un booster activé avant le premier coup, les pièces de l’écran de victoire versées une seconde fois, et un second tour de Brick Wheel. Chacun a son propre plafond quotidien, huit, six, huit, quatre, quatre et un : trente et une vidéos par jour, c’est le maximum que le jeu rémunérera jamais. Pas de bannières, pas d’interstitiels. Refuser ne coûte rien, et rien de ce qu’une vidéo rapporte n’a besoin d’être acheté ou regardé pour jouer aux plateaux principaux. L’achat « Supprimer les pubs » coupe la publicité pour de bon, et le Brick Pass fait passer le plafond de vies de cinq à huit et coupe la publicité tant que vous l’avez.',
          'Cinq des six récompenses sont fixes et annoncées avant que vous regardiez. La sixième, le tour supplémentaire de Brick Wheel, comporte une petite part de hasard, c’est pourquoi il faut la mentionner ici, et elle est limitée à une par jour. À vous de juger si l’équilibre est le bon, et c’est pour cela que la page d’accueil détaille [exactement ce que coûtent les vies, les annulations et les pubs](/#fair). Nous pensons aussi qu’un jeu doit être facile à poser ; nos notes sur [comment les jeux deviennent des habitudes](/blog/how-games-become-habits) expliquent pourquoi, et [ce qui rend un jeu de puzzle apaisant](/blog/relaxing-puzzle-games-what-makes-one-calm) examine comment vies et recharges peuvent rester justes.',
        ],
      },
    },
    pullQuote: 'Cinq des six récompenses sont fixes et annoncées avant que vous regardiez.',
    faqs: [
      { question: 'Les loot boxes sont-elles des jeux d’argent ?', answer: 'Juridiquement, cela dépend du pays. Sur le plan psychologique, des chercheurs ont constaté que beaucoup de systèmes de loot boxes remplissent les critères habituels du jeu d’argent, et les dépenses qu’on y consacre sont liées de façon constante aux symptômes de jeu problématique.' },
      { question: 'Les loot boxes causent-elles le jeu problématique ?', answer: 'Les données montrent un lien, mais pas son sens. Les loot boxes pourraient mener certains joueurs vers le jeu problématique, ou les personnes ayant un problème de jeu pourraient y dépenser davantage ; les chercheurs estiment que l’une ou l’autre possibilité justifie la prudence.' },
      { question: 'Qu’est-ce que la monétisation prédatrice dans les jeux ?', answer: 'Elle désigne des systèmes d’achat qui cachent ou retardent le vrai coût à long terme du jeu jusqu’à ce que les joueurs soient déjà engagés financièrement et psychologiquement, comme les récompenses payantes aléatoires ou les offres calées sur les moments de frustration.' },
      { question: 'OutBrick a-t-il des loot boxes ?', answer: 'Les vidéos récompensées d’OutBrick donnent des récompenses fixes et annoncées, à l’exception d’un second tour quotidien de Brick Wheel, qui comporte une part de hasard. Chaque vidéo est facultative et plafonnée, et refuser ne coûte rien ; la page d’accueil détaille exactement ce que coûtent les vies, les annulations et les pubs.' },
    ],
  },
  'dark-patterns-in-mobile-games': {
    title: 'Dark patterns dans les jeux mobiles : comment les repérer',
    dek: 'Pop-ups insistants, monnaies confuses, offres calées sur vos pires moments : ce que dit la recherche sur le design manipulateur, et comment le repérer.',
    imageAlt: 'Un iPhone affichant la boutique d’OutBrick avec ses offres spéciales et le Brick Pass, entre Poppy avec sa baguette étoilée et Bloo avec sa montre',
    tags: ['dark patterns', 'éthique du jeu vidéo', 'jeux mobiles', 'monétisation', 'jouer sainement'],
    intro: 'L’expression « dark pattern » a été forgée pour les sites web : la case précochée, le bouton d’annulation gris sur gris, l’abonnement qui se souscrit en une touche et se résilie en douze. Les jeux ont hérité de tout cela et ont inventé leurs propres variantes. Comme un jeu est conçu pour être absorbant, la frontière entre captivant et manipulateur peut être difficile à voir de l’intérieur. Des chercheurs en interaction humain-machine, en protection des consommateurs et en addictologie ont commencé à tracer cette frontière. Leurs travaux donnent aux joueurs un vocabulaire pour ce sentiment qu’un jeu travaille contre eux, et tendent un miroir aux concepteurs. Nous faisons un jeu gratuit, alors nous nous sommes aussi regardés dans ce miroir.',
    keyTakeaways: [
      'Les dark patterns sont des choix de conception qui font passer les intérêts du concepteur avant ceux de l’utilisateur, par le harcèlement, l’obstruction, la dissimulation, l’interférence d’interface ou l’action forcée.',
      'Interrogés sur la monétisation injuste dans les jeux, des joueurs ont décrit 35 techniques distinctes, du pay-to-win à la facturation de simples fonctions de confort.',
      'La meilleure défense est de reconnaître ces schémas : si un jeu rend le refus difficile, cache un coût ou choisit votre pire moment pour vendre, il travaille sur vous, pas pour vous.',
    ],
    sections: {
      'what-dark-patterns-are': {
        title: 'Qu’est-ce qu’un dark pattern ?',
        paragraphs: [
          'Colin Gray et ses collègues ont réuni un corpus d’exemples que des praticiens de l’UX avaient eux-mêmes signalés comme dark patterns, et analysé les questions éthiques qu’ils soulevaient. Ils décrivent les dark patterns comme des cas où la valeur pour l’utilisateur est supplantée par la valeur pour l’actionnaire, et classent les stratégies en cinq familles : le harcèlement (interrompre sans cesse pour pousser un choix), l’obstruction (rendre une chose plus difficile que nécessaire), la dissimulation (cacher ou retarder une information), l’interférence d’interface (manipuler l’écran pour qu’une option ressorte) et l’action forcée (exiger quelque chose sans rapport pour obtenir ce que l’on veut).',
          'Ils ne sont pas rares. Arunesh Mathur et ses collègues ont conçu des outils automatisés pour analyser environ 53 000 pages produits sur quelque 11 000 sites marchands, et y ont trouvé 1 818 cas de dark patterns, de 15 types, ainsi que des sociétés tierces qui les vendent comme fonctionnalités clés en main. Si de simples boutiques en ligne les utilisent à cette échelle, il serait surprenant que les jeux, qui comptent bien plus d’écrans et bien plus de moments d’émotion, n’en fassent pas autant.',
        ],
      },
      'how-they-look-in-games': {
        title: 'À quoi ils ressemblent dans les jeux',
        paragraphs: [
          'Elena Petrovskaya et David Zendle ont demandé à 1 104 joueurs de décrire une transaction de jeu qui leur avait paru trompeuse, agressive ou injuste. À partir des réponses, ils ont identifié 35 techniques distinctes réparties en huit domaines : des dynamiques de jeu conçues pour pousser à la dépense, des produits qui ne tiennent pas leurs promesses, la facturation du confort de base, la publicité prédatrice, les monnaies du jeu, le pay-to-win, la présence même des microtransactions, et divers. Plusieurs des pratiques signalées ne semblaient pas conformes aux règles britanniques de protection des consommateurs.',
          'Remarquez combien de ces domaines n’ont rien à voir avec un écran de boutique. Faire payer le confort de base, c’est rendre la version gratuite délibérément fastidieuse, pour que payer ressemble à un soulagement plutôt qu’à un achat. Les monnaies du jeu intercalent une conversion entre vous et le vrai prix, et des lots aux tailles bizarres compliquent encore le calcul. Certaines viennent de la conception du jeu autant que de sa boutique. Daniel King et ses collègues ont examiné 13 brevets de systèmes d’achat intégrés et y ont trouvé des dispositifs qui utilisent le suivi comportemental et la manipulation des prix pour personnaliser les offres et encourager à continuer de dépenser, souvent avec des protections limitées, comme les remboursements. Ces brevets ne prouvent pas qu’un jeu en particulier utilise ces systèmes, mais ils montrent ce que le secteur a envisagé de construire.',
        ],
      },
      'younger-players': {
        title: 'Pourquoi les jeunes joueurs sont plus exposés',
        paragraphs: [
          'Enfants et adolescents jouent à beaucoup de jeux gratuits et pourraient être plus sensibles à la manipulation. Dan Fitton et Janet Read ont combiné le regard de praticiens, la recherche existante et une étude menée avec 39 filles de 12 et 13 ans pour bâtir un cadre de ce qu’ils appellent l’App Dark Design. Il en ressort un ensemble d’aspects de conception problématiques, souvent liés à la publicité et aux achats intégrés, que les jeunes du monde entier rencontrent chaque jour dans leurs apps, selon les auteurs.',
          'Pour les parents, c’est un argument pour parler directement de ces schémas. Un enfant capable de dire « c’est un faux bouton de fermeture » ou « ils veulent que j’achète maintenant parce que je viens de perdre » est plus difficile à manœuvrer. Les réglages aident aussi : sur les appareils Apple, la fonction Autorisation d’achat du Partage familial permet à un parent d’approuver les achats d’un enfant avant qu’ils aboutissent.',
        ],
      },
      'a-field-guide': {
        title: 'Petit guide de terrain des dark patterns dans les jeux',
        paragraphs: [
          'Jacob Aagaard et ses collègues ont mené des entretiens et des ateliers avec des joueurs de jeux mobiles, des concepteurs, des développeurs et des responsables commerciaux. Leur compte rendu montre que les dark patterns viennent rarement d’un seul méchant ; ils naissent de la pression commerciale, des indicateurs et de l’habitude, et les professionnels eux-mêmes ressentent cette tension. D’où l’utilité d’une liste. Une règle empirique couvre l’essentiel. Si un jeu rend le refus difficile, cache un coût ou choisit votre pire moment pour vendre, il travaille sur vous, pas pour vous. Voici les schémas précis qu’il vaut la peine d’apprendre à repérer, tirés des études ci-dessus :',
        ],
        bullets: [
          'Des offres qui apparaissent juste après un échec, quand vous êtes le plus frustré.',
          'Des monnaies qui empêchent de savoir ce que coûte quoi que ce soit en argent réel.',
          'Des minuteurs et des jauges d’énergie qui bloquent le jeu à moins de payer ou d’attendre.',
          'Des séries et des récompenses quotidiennes qui punissent un jour manqué.',
          'Des pubs qui se lancent sans que vous l’ayez demandé, ou des boutons de fermeture minuscules ou retardés.',
          'Des pop-ups qui reviennent à chaque session jusqu’à ce que vous cédiez.',
          'Des fonctions autrefois gratuites qui passent derrière un achat.',
        ],
      },
      'holding-up-the-mirror': {
        title: 'Se regarder dans le miroir',
        paragraphs: [
          'L’illustration de cet article montre la boutique d’OutBrick, avec ses offres spéciales et le Brick Pass, parce que nous pensons que les mêmes questions doivent s’appliquer à nous. Voici ce que nous pouvons dire clairement. La publicité se limite aux vidéos récompensées : rien ne se lance sans que vous ayez appuyé sur un bouton pour demander quelque chose, il n’y a ni bannières ni interstitiels, et chacun des six emplacements a un plafond quotidien. Refuser ne coûte rien, et rien n’a besoin d’être acheté ou regardé pour jouer aux plateaux principaux. Les vies existent : vous en avez cinq, il en revient une toutes les trente minutes, et une vie ne part que lorsqu’une tentative se termine sans que le plateau soit vidé. Tout cela est détaillé sur la page d’accueil, dans [ce que coûtent les vies, les annulations et les pubs](/#fair).',
          'Le reste, c’est à vous d’en juger, et vous devriez le faire. La question voisine des récompenses aléatoires est traitée dans [loot boxes, récompenses aléatoires et monétisation éthique](/blog/loot-boxes-ethical-monetisation), et la pression des séries dans [plaidoyer pour des rituels quotidiens qui n’exigent rien de vous](/blog/daily-rituals-that-dont-demand-you). Si un jeu, le nôtre compris, vous laisse l’impression d’être manipulé plutôt que diverti, notre guide [quand jouer et quand poser le téléphone](/blog/when-to-play-and-when-to-pause) est un bon point de départ.',
        ],
      },
    },
    pullQuote: 'Si un jeu rend le refus difficile, cache un coût ou choisit votre pire moment pour vendre, il travaille sur vous, pas pour vous.',
    faqs: [
      { question: 'Qu’est-ce qu’un dark pattern dans un jeu ?', answer: 'Les dark patterns sont des choix de conception qui poussent les joueurs à faire quelque chose qui profite davantage au concepteur du jeu qu’à eux-mêmes, comme dépenser de l’argent, regarder des pubs ou jouer plus longtemps que prévu. Les formes courantes incluent les pop-ups insistants, les coûts cachés et les offres calées sur les moments de frustration.' },
      { question: 'Comment repérer un design manipulateur dans un jeu mobile ?', answer: 'Méfiez-vous des offres juste après un échec, des monnaies qui masquent les vrais prix, des pubs que vous n’avez pas demandées, des séries qui punissent les jours manqués, et de tout ce qui rend le non plus difficile que le oui.' },
      { question: 'Les dark patterns dans les jeux sont-ils illégaux ?', answer: 'Certains peuvent l’être. Le droit de la consommation, par exemple au Royaume-Uni, interdit déjà les pratiques commerciales trompeuses et agressives, et des chercheurs ont relevé des techniques de monétisation qui semblent mal s’accorder avec ces règles. Beaucoup d’autres dark patterns sont légaux, mais restent à éviter.' },
      { question: 'Les enfants sont-ils plus touchés par les dark patterns des apps ?', answer: 'Les chercheurs pensent que les jeunes joueurs pourraient y être plus sensibles. Une étude menée avec des filles de 12 et 13 ans a montré qu’elles rencontraient régulièrement des pubs difficiles à fermer et une pression à dépenser dans les apps gratuites.' },
      { question: 'OutBrick affiche-t-il des pubs sans le demander ?', answer: 'Non. La publicité d’OutBrick se limite aux vidéos récompensées, lancées quand vous appuyez sur un bouton pour demander une récompense précise, avec un plafond quotidien pour chacun des six emplacements, et ni bannières ni interstitiels.' },
    ],
  },
  'why-we-get-attached-to-game-characters': {
    title: 'Pourquoi on s’attache aux personnages de jeu, même muets',
    dek: 'Les joueurs admirent leurs personnages, s’inquiètent pour eux, les regrettent. Attachement, liens parasociaux et mignonnerie expliquent pourquoi.',
    imageAlt: 'Un vrai plateau OutBrick sur un iPhone entre Vio avec son casque et Peach coiffée d’une petite pêche, devant un mur de briques bleu marine',
    tags: ['personnages de jeu vidéo', 'mascottes', 'attachement', 'game design', 'relation parasociale'],
    intro: 'Des gens pleurent des personnages qui n’ont jamais existé. Ils donnent leur nom à leurs animaux, s’inquiètent pour eux entre deux parties, et ressentent un petit pincement quand un acolyte reste en arrière. Rien de nouveau : le public nouait des liens à sens unique avec les animateurs de radio bien avant les jeux vidéo. Mais les jeux ajoutent ce que les films et les livres ne peuvent pas offrir, car le personnage réagit à vous, et parfois vous en êtes responsable. La recherche sur la relation entre joueurs et personnages est désormais assez riche pour expliquer une bonne part de cette attraction, y compris pourquoi un personnage qui ne dit pas un mot peut compter. Elle soulève aussi une question que tout studio doté d’une mascotte devrait se poser : que devons-nous aux joueurs qui finissent par s’attacher ?',
    keyTakeaways: [
      'Les joueurs nouent plusieurs sortes d’attachement aux personnages, de l’admiration pour leur habileté à l’inquiétude pour leur bien-être.',
      'Les liens « parasociaux », à sens unique, avec des figures médiatiques font normalement partie de notre rapport aux personnages ; ils ont été décrits dès 1956.',
      'Les traits mignons attirent le soin et l’attention, ce qui donne aux concepteurs un vrai pouvoir, et la responsabilité correspondante de ne pas s’en servir contre les joueurs.',
    ],
    sections: {
      'seven-kinds-of-attachment': {
        title: 'Sept formes d’attachement',
        paragraphs: [
          'Julia Ayumi Bopp et ses collègues ont demandé à 213 joueurs de décrire un personnage de jeu qu’ils aimaient particulièrement, et pourquoi. Plutôt qu’un « attachement » générique, ils ont trouvé sept formes distinctes, allant de l’enthousiasme pour la compétence d’un personnage en jeu à une profonde inquiétude pour son bien-être, en passant par l’admiration pour un modèle. Certains joueurs aimaient un personnage parce qu’il était amusant à contrôler ; d’autres parce qu’il était comme un ami ; d’autres encore parce qu’il semblait avoir besoin d’être protégé.',
          'L’étude était qualitative, fondée sur ce que les joueurs choisissaient d’écrire : elle cartographie les formes d’attachement plutôt qu’elle ne mesure leur fréquence. Son intérêt tient à cette diversité. L’attachement n’est pas un curseur qui monte avec plus de dialogues ou de meilleurs graphismes. Un petit personnage simple peut gagner l’admiration en excellant dans quelque chose, l’affection en étant une compagnie agréable et fiable, ou la sollicitude en paraissant un peu vulnérable.',
          'Cette diversité compte pour la conception. Un personnage fait pour être admiré n’a pas besoin des mêmes qualités qu’un personnage fait pour être protégé. Katharina Emmerich, Patrizia Ring et Maic Masuch ont interrogé 237 joueurs sur les personnages compagnons et constaté qu’ils apprécient la personnalité et l’intégration au jeu, et attendent des compagnons qu’ils se comportent de façon adaptée au contexte, agissent d’eux-mêmes et prennent l’initiative. Un compagnon qui reste planté là tant qu’on ne le sollicite pas, ou qui dit la mauvaise chose au mauvais moment, peut gâcher toute l’expérience.',
        ],
      },
      'intimacy-at-a-distance': {
        title: 'L’intimité à distance',
        paragraphs: [
          'En 1956, les sociologues Donald Horton et Richard Wohl ont décrit un nouveau type de relation né de la radio et de la télévision. Le public en venait à croire connaître les animateurs et artistes qu’il voyait et entendait régulièrement, et réagissait à eux presque comme à des amis, alors même que la relation n’allait que dans un sens. Ils ont appelé cela l’interaction para-sociale, et l’ont décrite comme une intimité à distance.',
          'Les jeux étirent cette idée, car le personnage à l’écran peut répondre. Un ami qui vous salue quand vous arrivez, se réjouit quand vous réussissez et prend l’air inquiet quand vous êtes bloqué n’est toujours pas une personne, mais la boucle d’action et de réaction rend le lien plus réciproque. Melissa Lewis, René Weber et Nicholas David Bowman ont mis au point l’une des premières échelles de mesure de l’attachement aux personnages de jeu. Ils ont constaté qu’il était lié au plaisir de jeu et au temps passé à jouer, mais aussi à des mesures de pratique problématique : le lien même qui rend un jeu chaleureux peut aussi le rendre difficile à lâcher.',
        ],
      },
      'the-pull-of-cute': {
        title: 'L’attrait du mignon',
        paragraphs: [
          'Beaucoup de mascottes se ressemblent : grosse tête, visage rond, grands yeux. L’éthologue Konrad Lorenz appelait cet ensemble de traits le schéma du bébé. Melanie Glocker et ses collègues l’ont testé expérimentalement en retouchant numériquement des photos de visages de nourrissons. Chez 122 étudiants, les visages aux traits de schéma du bébé plus marqués étaient jugés plus mignons et suscitaient une plus forte envie de s’en occuper.',
          'Le mignon pourrait aussi influencer notre attention. Dans trois petites expériences, Hiroshi Nittono et ses collègues ont constaté qu’après avoir regardé des photos de chiots et de chatons, les participants accomplissaient une tâche de motricité fine et une tâche de recherche visuelle avec plus de soin qu’après avoir vu des animaux adultes, et avec une attention plus resserrée. Les échantillons étaient petits et les tâches simples : ce serait exagéré d’affirmer que des personnages mignons font de quiconque un meilleur joueur de puzzle. Ces résultats aident néanmoins à comprendre pourquoi un visage amical sur un écran de puzzle peut sembler apaisant plutôt que distrayant.',
        ],
      },
      'what-designers-owe': {
        title: 'Ce que les concepteurs doivent aux joueurs qui s’attachent',
        paragraphs: [
          'Mise bout à bout, la recherche décrit un vrai pouvoir. Les personnages peuvent attirer le soin, l’attention et la fidélité. La question éthique est ce qu’un jeu en fait. Se servir d’un personnage pour féliciter un joueur, lui tenir compagnie ou adoucir un moment difficile, c’est un cadeau. Se servir d’un personnage pour culpabiliser un joueur et le faire revenir, avec une mine triste parce que vous avez manqué un jour, ou un ami qui « a besoin » que vous achetiez quelque chose, transforme l’affection en levier. C’est l’un des schémas abordés dans [les dark patterns dans les jeux mobiles](/blog/dark-patterns-in-mobile-games).',
          'Voici un test simple. Le comportement du personnage semblerait-il toujours bienveillant si le joueur ne dépensait jamais rien ni ne revenait ? Si oui, le lien est probablement bien utilisé. Si le personnage ne se montre chaleureux que lorsque le joueur paie, ou devient triste quand il part, l’affection est devenue un outil de vente.',
        ],
      },
      'nine-friends-no-voices': {
        title: 'Neuf amis, aucune voix',
        paragraphs: [
          'OutBrick compte neuf amis en briques : Bloo, Bricko, Flurry, Moss, Peach, Poppy, Sprout, Vio et Zippy. Ils ont la forme de briques, trois apparaissent à la fois sur l’écran d’accueil, et chacun a sa propre danse de victoire. Ils n’ont pas de voix ; ils s’animent et ne parlent que dans des bulles de texte. Chacun a un caractère simple, lisible d’un coup d’œil : Bloo est celui qui a une montre, Peach la planificatrice prudente, Sprout celui qui pose des questions, Vio le critique au casque et Zippy celui qui a la tête ailleurs. Vous pouvez tous les rencontrer sur [la page des amis en briques](/mascots).',
          'La recherche suggère que le silence n’affaiblit pas forcément le lien. Dans l’étude de Bopp, l’attachement venait de la compétence, de l’admiration et de la sollicitude autant que du dialogue, et un personnage silencieux laisse au joueur plus de place à combler. C’est le même principe du « dire moins » que nous avons admiré dans [Monument Valley](/blog/monument-valley-less-game-more-experience), et la compagnie sans exigences dont nous avons parlé dans [Animal Crossing et le temps partagé](/blog/animal-crossing-shared-time).',
        ],
      },
    },
    pullQuote: 'Le comportement du personnage semblerait-il toujours bienveillant si le joueur ne dépensait jamais rien ni ne revenait ?',
    faqs: [
      { question: 'Pourquoi s’attache-t-on aux personnages de jeux vidéo ?', answer: 'Les joueurs se lient aux personnages pour différentes raisons : admirer leur habileté, voir en eux des modèles, apprécier leur compagnie ou se sentir responsables de leur bien-être. Comme les personnages de jeu réagissent au joueur, ces liens peuvent sembler plus réciproques que ceux qu’on noue avec des personnages de film ou de roman.' },
      { question: 'Qu’est-ce qu’une relation parasociale ?', answer: 'C’est un lien à sens unique avec une figure médiatique, comme un animateur ou un personnage de fiction, qui ignore votre existence. Des chercheurs l’ont décrit en 1956, et cela fait normalement partie de notre rapport aux médias.' },
      { question: 'Pourquoi les mascottes de jeux sont-elles souvent mignonnes ?', answer: 'Des traits comme une grosse tête, un visage rond et de grands yeux, ce qu’on appelle le schéma du bébé, sont jugés mignons et renforcent l’envie de prendre soin. Les concepteurs s’en servent pour rendre les personnages immédiatement sympathiques.' },
      { question: 'Les personnages d’OutBrick parlent-ils ?', answer: 'Non. Les neuf amis en briques d’OutBrick n’ont pas de voix ; ils s’animent et ne parlent que dans des bulles de texte, et chacun a sa propre danse de victoire.' },
    ],
  },
  'colour-in-game-interfaces': {
    title: 'La couleur dans les jeux : contraste, sens et émotion',
    dek: 'Ce que la psychologie des couleurs apprend, ou non, aux concepteurs, pourquoi le contraste prime sur la teinte, et des pièces lisibles par tous.',
    imageAlt: 'Un vrai plateau OutBrick de briques colorées sur un iPhone, entre Moss avec sa ceinture à outils et Flurry coiffé d’un bonnet à pompon rayé',
    tags: ['couleurs jeu vidéo', 'game design', 'contraste', 'psychologie des couleurs', 'daltonisme'],
    intro: 'La couleur est la première chose qu’on remarque dans la plupart des jeux, et la dernière à laquelle la plupart des joueurs pensent. Le rouge signifie danger, le vert veut dire go, l’or évoque un trésor, et personne n’a eu besoin de vous le dire. Les concepteurs s’appuient sans cesse sur la couleur, pour installer une ambiance, signaler ce qui compte et, dans un puzzle de tri par couleur, porter les règles elles-mêmes. Les articles grand public sur la psychologie des couleurs regorgent d’affirmations assurées : le bleu apaise, le rouge excite, le jaune donne faim. La recherche est plus intéressante et plus prudente que cela. Ce qu’elle soutient le plus solidement est moins glamour que l’humeur : le contraste, la cohérence, et ne jamais compter sur la couleur seule.',
    keyTakeaways: [
      'La couleur influe bien sur les émotions et le comportement, mais la recherche est jeune et beaucoup d’affirmations populaires sur des couleurs précises vont au-delà des preuves.',
      'Les associations entre couleurs et émotions sont largement partagées dans 30 pays, avec des différences locales : dans un jeu, le sens d’une couleur doit être renforcé plutôt que tenu pour acquis.',
      'Pour la lisibilité, le contraste compte plus que la teinte : on lit et on cherche plus vite quand la différence de luminosité est grande.',
    ],
    sections: {
      'what-colour-research-shows': {
        title: 'Ce que la psychologie des couleurs peut et ne peut pas dire',
        paragraphs: [
          'La revue d’Andrew Elliot et Markus Maier dans l’Annual Review of Psychology est un bon correctif à la psychologie des couleurs grand public. Elle montre que la couleur peut porter un sens important et influencer les émotions, la pensée et le comportement, une grande partie des preuves venant de contextes liés à la réussite et à l’attirance. Elle prévient aussi que le domaine en est à ses débuts : les premiers travaux souffraient de problèmes méthodologiques, et il faudra beaucoup plus de recherches sur les conditions limites et la généralisation au monde réel avant que des recommandations fortes soient justifiées.',
          'Pour les concepteurs de jeux, cela invite à l’humilité. Les affirmations populaires sur telle ou telle couleur devancent souvent de loin ces preuves, et très peu de ces données ont été recueillies pendant que les gens jouaient réellement, si bien que l’appel de la revue à étudier des situations réelles s’applique au game design avec une force particulière. La couleur est un vrai levier, mais des affirmations comme « cette nuance de bleu réduit le stress » doivent être traitées comme des hypothèses à tester avec vos propres joueurs, pas comme des règles.',
        ],
      },
      'shared-meanings': {
        title: 'Des sens partagés, avec des accents locaux',
        paragraphs: [
          'Le sens des couleurs est-il universel ou appris ? Domicele Jonauskaite et une vaste équipe internationale ont demandé à 4 598 personnes dans 30 pays, parlant 22 langues, d’associer 20 concepts émotionnels à 12 termes de couleur. Les schémas étaient remarquablement semblables d’un pays à l’autre, avec une similarité moyenne de r = 0,88. Pourtant, le pays d’origine d’une personne prédisait encore ses associations au-delà du schéma universel, et la similarité était plus forte entre pays proches par la langue ou la géographie.',
          'Bonne nouvelle pour un jeu joué dans le monde entier : les grands sens des couleurs voyagent bien. Les différences locales sont une raison de doubler les sens importants par une forme, un texte ou une position, plutôt que de compter sur la couleur pour dire la même chose à tout le monde.',
          'Les jeux construisent aussi leur propre langage des couleurs par-dessus le langage commun. Les joueurs apprennent vite qu’une couleur donnée signifie la santé, les dégâts ou une porte verrouillée, et une fois apprises, ces significations deviennent des attentes. Les briser peut être une surprise délibérée, mais les briser par accident est une source courante de confusion. Un jeu qui utilise le rouge à la fois pour « danger » et pour « récompense » oblige le joueur à s’arrêter et à réfléchir chaque fois qu’il le voit.',
        ],
      },
      'colour-and-mood-in-games': {
        title: 'Couleur et ambiance dans les mondes de jeu',
        paragraphs: [
          'Erik Geslin, Laurent Jégou et Danny Beaudoin ont étudié la couleur dans les jeux eux-mêmes. Ils ont montré 24 images de jeux vidéo à 85 participants, leur ont demandé ce que chacune leur faisait ressentir, et ont comparé les réponses à des mesures de la couleur des images. La brillance, la saturation et la luminosité étaient significativement corrélées à des émotions comme la joie, la tristesse, la peur et la sérénité, de même que des mesures de la variété et du caractère accrocheur des couleurs.',
          'L’étude mesurait des réactions à des images fixes, pas au jeu, et des corrélations de ce type ne peuvent pas prouver une cause. Mais elle donne aux concepteurs un vocabulaire plus utile que la seule teinte : la luminosité et la saturation d’ensemble d’une scène, et la variété de ses couleurs, peuvent compter autant pour son ambiance que les couleurs qu’elle contient. Les auteurs s’appuient sur leurs résultats pour proposer un « scénario chromatique émotionnel » (emotional colour scripting), qui planifie la palette d’un jeu comme un film planifie son éclairage.',
        ],
      },
      'contrast-before-hue': {
        title: 'Le contraste avant la teinte',
        paragraphs: [
          'Quand il s’agit d’être lu, le contraste l’emporte. Richard Hall et Patrick Hanna ont testé quatre combinaisons de couleurs de texte et de fond sur des pages web avec 136 participants. Les combinaisons au rapport de contraste plus élevé étaient en général plus lisibles. La couleur n’influait pas significativement sur ce que les gens retenaient, mais les couleurs préférées obtenaient de meilleures notes esthétiques.',
          'Gordon Legge et ses collègues ont examiné de plus près le fonctionnement du contraste. Les lecteurs à la vue normale lisaient aussi vite avec un fort contraste de couleur, un texte qui ne diffère que par la teinte, qu’avec un fort contraste de luminance, la différence de clarté. Pour les lecteurs malvoyants, le contraste de luminance l’emportait à chaque fois. Une conception qui distingue les pièces uniquement par la teinte, à luminosité égale, fonctionne pour certains joueurs et en exclut d’autres. Les règles d’accessibilité du web fixent des rapports de contraste minimaux précisément pour cette raison ; l’[explication du W3C sur le contraste minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) est une introduction claire.',
        ],
      },
      'readable-bricks': {
        title: 'Ce qu’il faut à une brique lisible',
        paragraphs: [
          'Dans un puzzle de tri par couleur, la couleur n’est pas un décor ; c’est la règle. Dans OutBrick, chaque brique ne quitte le plateau que par la porte de sa couleur : un joueur incapable de distinguer deux couleurs ne peut pas jouer. C’est pourquoi le mode daltonien est activé par défaut : chaque brique et chaque porte portent un symbole assorti, si bien que la forme porte le tri autant que la teinte. Nous expliquons ce raisonnement dans [pourquoi la couleur ne doit jamais être le seul indice d’un puzzle](/blog/color-shape-accessibility), et la [page accessibilité](/accessibility) détaille le reste de l’accompagnement, dont VoiceOver.',
          'Ambiance et lisibilité peuvent cohabiter si on leur confie des rôles différents. Le Voyage d’OutBrick traverse 167 villages en briques, de Cherry Blossom Town à Lavender Hills, et le décor peut changer pendant que les briques du plateau gardent leurs couleurs et leurs symboles. Pour le côté pratique de la lecture rapide d’un plateau coloré, voyez nos [astuces pour les puzzles de tri par couleur](/blog/colour-sort-puzzle-tips). La recherche ci-dessus ajoute quelques principes valables pour tout jeu à pièces colorées :',
        ],
        bullets: [
          'Distinguez les pièces par la luminosité autant que par la teinte, pour qu’elles restent distinctes en faible lumière, sur un écran fêlé ou en cas de basse vision.',
          'Donnez à chaque couleur un seul rôle, et gardez-le cohérent dans tout le jeu.',
          'Doublez chaque sens porté par une couleur d’un second indice : un symbole, une forme, une position ou une étiquette.',
          'Servez-vous de la saturation et de la luminosité pour l’ambiance, et gardez les pièces elles-mêmes comme l’élément le plus net à l’écran.',
          'Testez en niveaux de gris. Si le plateau reste lisible, les couleurs font un travail en plus, pas tout le travail.',
        ],
      },
    },
    pullQuote: 'Dans un puzzle de tri par couleur, la couleur n’est pas un décor ; c’est la règle.',
    faqs: [
      { question: 'Comment la couleur influence-t-elle les émotions dans les jeux ?', answer: 'Une étude a montré que la brillance, la saturation et la luminosité de scènes de jeu étaient corrélées à des émotions comme la joie, la tristesse, la peur et la sérénité. La recherche est encore jeune : les affirmations précises sur telle ou telle couleur doivent être prises avec prudence.' },
      { question: 'Les couleurs ont-elles le même sens dans toutes les cultures ?', answer: 'En grande partie. Une étude portant sur 4 598 personnes dans 30 pays a trouvé des associations entre couleurs et émotions très semblables dans le monde entier, avec de plus petites différences liées à la langue et à la géographie.' },
      { question: 'Pourquoi le contraste est-il important dans les interfaces de jeu ?', answer: 'Le contraste, surtout la différence de luminosité entre un élément et son arrière-plan, permet de lire et de trouver les choses plus vite. Les lecteurs malvoyants s’appuient davantage sur le contraste de luminosité que sur les différences de teinte.' },
      { question: 'Quel rapport de contraste pour le texte d’un jeu ?', answer: 'Les Web Content Accessibility Guidelines demandent au moins 4,5:1 entre un texte normal et son arrière-plan, et 3:1 pour un grand texte, au niveau AA. Les jeux n’y sont pas tenus, mais c’est un plancher raisonnable et bien éprouvé.' },
      { question: 'Les joueurs daltoniens peuvent-ils jouer à OutBrick ?', answer: 'Oui. Le mode daltonien est activé par défaut : chaque brique et chaque porte portent un symbole assorti en plus d’une couleur, et VoiceOver est pris en charge. Notre guide sur [le daltonisme dans les jeux](/blog/colour-blindness-in-games) explique sa fréquence et ce qui aide encore.' },
    ],
  },
};
