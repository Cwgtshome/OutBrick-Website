import type { ExtraGuides } from '../../i18n/blog';

/** Journal batch 1 (lib/journal-batches/batch-1.ts) in this language. See lib/blog-l10n/fr.ts for the house style. */
export const fr1: ExtraGuides = {
  'how-to-read-a-puzzle-before-moving': {
    title: 'Avant le premier coup : lire un casse-tête comme un pro',
    dek: 'Pourquoi la façon de se représenter un casse-tête change sa difficulté, ce que regardent les experts et une routine pour lire un plateau avant d’y toucher.',
    imageAlt: 'Sprout et Bricko de part et d’autre d’un iPhone affichant la boutique OutBrick, avec des briques à tenons flottant sur une grille indigo',
    tags: ['comment résoudre un casse-tête', 'astuces casse-tête', 'résolution de problèmes', 'planification', 'psychologie cognitive'],
    intro: 'La plupart des coups gâchés dans un casse-tête sont joués pendant les dix premières secondes, avant même de savoir vraiment de quoi il retourne. Ce n’est pas de la négligence. C’est ainsi que fonctionne l’esprit : nous agissons à partir de la première description du problème qui nous vient, et cette première description est souvent médiocre. Depuis cinquante ans, les psychologues montrent qu’un même casse-tête peut être facile ou redoutable selon la manière dont on se le représente. La bonne nouvelle, c’est que la représentation s’apprend, et que quelques habitudes de regard suffisent à l’améliorer.',
    keyTakeaways: [
      'Deux casse-têtes de structure identique peuvent avoir des difficultés très différentes, et l’écart tient en grande partie à la façon dont on garde en tête les règles et la position en cours.',
      'Les experts classent les problèmes selon leur structure profonde, les débutants selon leur apparence ; sur un plateau, cela veut dire lire les obstacles et les sorties, pas les couleurs.',
      'L’effort de planification se concentre là où plusieurs coups se font concurrence : bien lire un plateau, c’est surtout chercher ces embranchements.',
    ],
    sections: {
      'same-puzzle-different-difficulty': {
        title: 'Le même casse-tête peut être facile ou difficile',
        paragraphs: [
          'En 1985, Kenneth Kotovsky, John Hayes et Herbert Simon ont soumis à des volontaires une série de casse-têtes qui étaient tous, au fond, la tour de Hanoï : mêmes positions, mêmes coups autorisés, même solution la plus courte. Seuls l’habillage et la formulation des règles changeaient. Dans certaines versions, des monstres se passaient des globes ; dans d’autres, ils changeaient la taille des globes qu’ils tenaient. La structure était identique, et pourtant certaines versions demandaient plusieurs fois plus de temps que d’autres.',
          'Leur analyse désignait la représentation. Les versions dont les règles étaient plus difficiles à se figurer, ou qui obligeaient à garder en tête à la fois davantage de règles et la position en cours, étaient plus difficiles. Une grande partie du temps de résolution servait simplement à apprendre à jouer des coups légaux avec aisance ; une fois cette étape franchie, la course finale vers le but était généralement rapide. Une bonne part de la difficulté ne tenait donc pas du tout à la recherche d’une solution, mais à la mise en forme du problème pour que l’esprit puisse s’en saisir.',
          'Jiajie Zhang et Donald Norman sont allés plus loin en 1994. Ils ont construit des versions de la tour de Hanoï où certaines règles étaient imposées par les objets eux-mêmes : un coup illégal devenait physiquement malcommode, voire impossible, au lieu d’être une chose à ne pas oublier d’éviter. Plus les règles vivaient dans le monde plutôt que dans la tête, plus le casse-tête devenait facile. Un plateau bien fait, comme un outil bien fait, réfléchit à votre place pour une partie du travail.',
        ],
      },
      'experts-read-structure': {
        title: 'Les experts lisent la structure, les débutants la surface',
        paragraphs: [
          'Dans une étude classique, Michelene Chi, Paul Feltovich et Robert Glaser ont demandé à des experts et à des novices en physique de trier des problèmes de manuel par groupes. Les novices les regroupaient selon leur apparence : les plans inclinés ensemble, les ressorts ensemble. Les experts les regroupaient selon le principe qui permettait de les résoudre, comme la conservation de l’énergie, même quand les problèmes ne se ressemblaient en rien. Les experts ne voyaient pas plus de choses. Ils voyaient d’autres choses.',
          'Les plateaux de casse-tête invitent au même partage. La surface d’un plateau de tri de couleurs, ce sont des couleurs et des formes, et on est tenté de le lire ainsi : voilà les rouges, voilà les bleus. La structure est autre chose : quelle pièce se trouve entre telle autre et sa sortie, où est l’espace libre, quel glissement ouvre un couloir et lequel le ferme. Qui lit la structure voit une courte chaîne de dépendances. Qui lit la surface voit une foule.',
          'Pas besoin d’années de pratique pour emprunter la question de l’expert. Avant de jouer, demandez-vous à quel genre de problème vous avez affaire. Un embouteillage, où tout attend une seule pièce ? Un manque de place, où la première tâche est d’en faire ? Un problème d’ordre, où les couleurs doivent sortir dans une séquence précise ? Nommer le type est un petit acte de représentation, et il change les coups qui paraissent prometteurs. Avec le temps, ces types deviennent des motifs que vous reconnaissez d’un coup d’œil, ce que décrit le [chunking](/blog/chunking-how-expert-puzzlers-see-patterns).',
        ],
      },
      'plan-where-choices-compete': {
        title: 'Planifiez là où les choix se font concurrence',
        paragraphs: [
          'Combien de temps regarder avant de jouer ? Geoff Ward et Alan Allport ont étudié des adultes qui planifiaient la solution d’une version difficile à cinq disques de la tour de Londres, un casse-tête très utilisé en psychologie pour étudier la planification. Les participants préparaient une solution fluide, puis l’exécutaient. Le temps de préparation et le nombre d’erreurs augmentaient avec le nombre de blocs de sous-buts : des séries de coups nécessaires qui ne mettaient pourtant rien à sa place définitive. La planification ralentissait aussi quand davantage de coups possibles se faisaient concurrence aux étapes critiques.',
          'On en tire une règle pratique. La planification ne se répartit pas uniformément sur un casse-tête. Elle s’accumule aux endroits où plusieurs coups semblent raisonnables alors qu’un seul garde la solution en vie, et dans les passages où il faut écarter des pièces plutôt que les ramener chez elles. C’est là qu’il faut ralentir. Quand un coup est forcé, ou qu’une pièce a la voie libre jusqu’à sa sortie, il n’y a presque rien à planifier, et fixer le plateau ne fait que brûler de l’attention.',
          'Vu ainsi, lire un plateau revient surtout à chercher les embranchements. Trouvez les un ou deux endroits où le plateau bifurque, et vous tenez l’essentiel du casse-tête.',
        ],
      },
      'a-reading-routine': {
        title: 'Une routine de lecture en trente secondes',
        paragraphs: [
          'Voici une routine qui met la recherche en pratique. Elle prend une trentaine de secondes sur un plateau de taille moyenne et fonctionne sur les puzzles coulissants, les jeux de tri de couleurs et la plupart des grilles avec sorties.',
        ],
        bullets: [
          'Nommez le but. À quoi ressemble le plateau « résolu », et quelles pièces ont le plus de chemin à faire ?',
          'Repérez l’espace libre. Tout plan doit passer par les cases vides, alors sachez où elles sont.',
          'Remontez une chaîne depuis une sortie : qu’est-ce qui bloque cette pièce, et qu’est-ce qui bloque celle-là ?',
          'Marquez les embranchements : les endroits où deux coups semblent raisonnables mais mènent à des plateaux différents.',
          'Nommez le type de plateau : un embouteillage, un manque de place ou un problème d’ordre.',
        ],
        note: 'La dernière étape est celle que la plupart des gens sautent, et c’est là que la représentation fait son travail. Une fois le type nommé, le premier coup évident cesse souvent de paraître évident.',
      },
      'looking-with-your-hands': {
        title: 'On ne regarde pas seulement avec la tête',
        paragraphs: [
          'Une nuance issue de la recherche sur l’action : lire un plateau n’a pas à être une opération purement mentale. David Kirsh et Paul Maglio ont observé que les bons joueurs de Tetris font pivoter les pièces à l’écran en partie pour voir comment elles s’emboîtent, en se servant du monde pour penser. Ils ont appelé ces gestes des actions épistémiques, des coups joués pour obtenir une information plutôt que pour progresser, et ont montré qu’ils peuvent être plus rapides et plus fiables que de tout calculer de tête. Dans un casse-tête avec annulation, un coup d’essai est parfois le moyen le plus rapide de lire un plateau.',
          'Pour la tactique coup par coup une fois la lecture faite, nos guides pour [résoudre un puzzle de blocs coulissants](/blog/how-to-solve-sliding-block-puzzles) et nos [astuces pour les jeux de tri de couleurs](/blog/colour-sort-puzzle-tips) prennent le relais là où s’arrête cette routine.',
        ],
      },
      'reading-an-outbrick-board': {
        title: 'Lire un plateau OutBrick',
        paragraphs: [
          'OutBrick inscrit plusieurs de ses règles dans le plateau lui-même : c’est la leçon de Zhang et Norman mise en pratique. Une brique glisse jusqu’à ce que quelque chose l’arrête, si bien que son point d’arrivée est fixé par le plateau plutôt que par votre visée. Chaque brique ne sort que par la porte de sa couleur : les portes font respecter la règle des couleurs à votre place. L’objectif de coups et la limite de coups sont affichés dès la première touche. Et les symboles du mode daltonien, activés par défaut, donnent à chaque brique et à chaque porte une forme en plus d’une teinte, ce qui aide à lire le plateau comme une structure plutôt que comme un bain de couleurs.',
          'Il vous reste la lecture de la structure : quelle brique retient quelle couleur, où se trouve l’espace, où le plateau bifurque. Sur les plateaux plus avancés, clés, serrures, caisses et portes ajoutent des dépendances qu’il vaut la peine de suivre avant de bouger quoi que ce soit, car une serrure ouverte trop tard peut transformer une chaîne bien rangée en long détour.',
          'Aucun plateau n’a de chrono : lire ne vous coûte donc que quelques secondes. Le [plateau dans le navigateur](/play) est un bon endroit pour essayer la routine, et le [plateau du jour](/daily) propose chaque jour le même casse-tête à tout le monde, ce qui permet de comparer facilement votre lecture avec celle d’un ami.',
        ],
      },
    },
    pullQuote: 'Qui lit la structure voit une courte chaîne de dépendances. Qui lit la surface voit une foule.',
    faqs: [
      { question: 'Comment aborder un casse-tête que l’on n’a jamais vu ?', answer: 'Lisez-le avant de jouer. Repérez le but, l’espace libre et ce qui bloque la pièce la plus proche de la sortie, puis cherchez les endroits où deux coups se font concurrence : c’est à ces embranchements que revient l’essentiel de la réflexion.' },
      { question: 'Pourquoi certains casse-têtes semblent-ils plus durs que d’autres avec les mêmes règles ?', answer: 'Une grande partie de la difficulté d’un casse-tête tient à la façon dont on se le représente. Dans une étude classique sur des versions de la tour de Hanoï de structure identique, certaines demandaient plusieurs fois plus de temps, surtout parce que leurs règles étaient plus difficiles à garder en tête.' },
      { question: 'Faut-il planifier toute la solution avant le premier coup ?', answer: 'Rarement. Planifiez jusqu’au prochain embranchement du plateau, jouez ce passage, puis relisez le plateau. Les études sur les casse-têtes de planification montrent que l’effort augmente avec le nombre de choix concurrents : c’est là que votre attention sert le mieux.' },
      { question: 'OutBrick a-t-il un chrono ?', answer: 'Non. Chaque plateau OutBrick affiche un objectif de coups et une limite de coups dès la première touche, mais il n’y a aucun chrono dans le jeu : le temps passé à lire le plateau est gratuit.' },
    ],
  },

  'why-undo-makes-you-a-better-puzzle-solver': {
    title: 'Annuler un coup rend meilleur aux casse-têtes, pas paresseux',
    dek: 'Les erreurs réparables sont parmi les meilleurs maîtres d’un casse-tête. Ce que dit la recherche sur le bon usage de l’annulation, et quand s’en passer.',
    imageAlt: 'Poppy et sa baguette étoilée avec Bricko à côté d’un iPhone affichant la boutique OutBrick, sur une grille de briques indigo',
    tags: ['apprendre de ses erreurs', 'résolution de problèmes', 'astuces casse-tête', 'planification', 'game design'],
    intro: 'Certains joueurs vivent l’annulation comme un aveu. Ils préfèrent fixer un plateau pendant deux minutes plutôt que de reprendre un coup, comme si le bouton était réservé à ceux qui ne savent pas vraiment faire des casse-têtes. La recherche sur l’apprentissage va dans l’autre sens, avec une nuance intéressante. Les erreurs que l’on remarque et que l’on corrige comptent parmi les choses les plus utiles qui puissent arriver quand on apprend. Mais quand les erreurs ne coûtent plus rien du tout, on planifie aussi moins. Bien utiliser l’annulation, c’est obtenir le premier effet sans trop payer le second.',
    keyTakeaways: [
      'Une erreur suivie d’une correction aide généralement l’apprentissage, et le bénéfice est le plus grand quand on était sûr de soi en se trompant.',
      'Dans une méta-analyse de 24 études, les formations qui encourageaient l’exploration et l’erreur se transféraient mieux à de nouvelles tâches que celles qui éloignaient des erreurs.',
      'Rendre les erreurs bon marché fait aussi moins planifier : traitez chaque annulation comme le test d’une idée précise, pas comme un substitut à la réflexion.',
    ],
    sections: {
      'errors-are-information': {
        title: 'Une erreur est une information',
        paragraphs: [
          'Dans une synthèse publiée en 2017, Janet Metcalfe a rassemblé les données sur l’apprentissage par l’erreur. Le tableau surprend quiconque a grandi avec l’idée qu’il faut éviter les erreurs à tout prix. Se tromper puis recevoir une correction aide généralement à apprendre ; cela n’imprime pas l’erreur. Le bénéfice est le plus fort dans le cas qui semble le pire : quand l’apprenant était convaincu que la mauvaise réponse était juste. Une erreur commise avec assurance, puis corrigée, se retient.',
          'Nate Kornell, Matthew Hays et Robert Bjork ont montré un effet voisin en laboratoire. Les personnes qui essayaient de répondre à une question avant de voir la réponse la retenaient mieux que celles qui lisaient simplement la question et la réponse ensemble, même quand leur tentative était vouée à l’échec. La tentative ratée semblait les préparer à la correction.',
          'Un coup dans un casse-tête est une sorte de pari sur le plateau. Quand le pari est perdu et que vous comprenez pourquoi, vous apprenez sur l’interaction des pièces quelque chose que le simple regard ne vous aurait pas montré. C’est ce que permet l’annulation : la correction arrive tout de suite, pendant que le raisonnement qui a mené à l’erreur est encore frais.',
        ],
      },
      'exploring-transfers': {
        title: 'Explorer et se tromper mène plus loin',
        paragraphs: [
          'La recherche sur la formation professionnelle a testé cette idée à grande échelle. La formation par la gestion des erreurs encourage délibérément les apprenants à explorer, à se tromper et à en tirer des leçons, au lieu de suivre une procédure qui les garde sur le bon chemin. En 2008, Nina Keith et Michael Frese ont regroupé 24 études portant sur plus de 2 000 participants. En moyenne, la formation par la gestion des erreurs faisait mieux que les autres approches, avec un effet modéré. L’écart était le plus grand non pas sur les tâches pratiquées, mais sur des tâches ultérieures de structure différente : exactement là où l’on veut qu’une compétence tienne.',
          'Deux ingrédients comptaient : l’exploration active, et l’encouragement explicite à faire des erreurs. Le second passe facilement inaperçu. S’entendre dire que les erreurs font partie du processus change la manière d’y réagir, et la frustration a alors la place de se transformer en curiosité. Un jeu peut faire passer le même message par sa conception, en rendant la première correction bon marché.',
          'Le transfert à de nouvelles tâches est aussi ce qui compte dans un jeu de casse-tête. Personne ne joue longtemps le même plateau. Ce que vous voulez emporter d’un plateau à l’autre, ce n’est pas une solution apprise par cœur, mais un meilleur sens de la façon dont les pièces se bloquent entre elles, et c’est l’exploration qui construit ce sens.',
        ],
      },
      'the-catch': {
        title: 'Le revers : des coups gratuits, des plans paresseux',
        paragraphs: [
          'À la fin des années 1990, Kenton O’Hara et Stephen Payne ont mené une série d’expériences que tout concepteur de casse-têtes devrait connaître. Les participants résolvaient le jeu de taquin à 8 pièces, un petit puzzle coulissant, sur des interfaces qui rendaient chaque coup soit rapide, soit laborieux à exécuter. Quand les coups coûtaient cher, les gens planifiaient davantage. Quand ils étaient bon marché, ils s’en remettaient plutôt aux essais et erreurs dans le monde.',
          'Les résultats sur l’apprentissage étaient plus mitigés. Dans une expérience, ceux qui s’étaient entraînés sur l’interface coûteuse réussissaient ensuite mieux sur le même type de casse-tête que ceux qui s’étaient entraînés sur l’interface bon marché. Dans une autre, où le casse-tête suivant était différent, l’interface d’entraînement ne changeait rien. Une étude complémentaire a fait varier d’autres coûts, dont un délai de blocage après chaque coup et le coût de réparation d’une erreur, et a retrouvé le même schéma de base : quand agir coûte plus cher, on planifie davantage et on agit moins.',
          'L’annulation est le réducteur de coût par excellence. Elle rend un mauvais coup presque gratuit. La recherche prédit donc qu’une annulation abondante peut discrètement faire cesser de planifier. La solution n’est pas d’éviter l’annulation, mais de l’utiliser à dessein.',
        ],
      },
      'using-undo-well': {
        title: 'Bien utiliser l’annulation',
        paragraphs: [
          'L’astuce consiste à traiter chaque annulation comme une expérience assortie d’une question. Avant de jouer un coup que vous pourriez reprendre, dites ce que vous vous attendez à voir : si la bleue glisse à gauche, le couloir s’ouvre-t-il ? Puis regardez, retenez et annulez. Vous gardez la planification que les coups gratuits ont tendance à éroder, tout en profitant de la correction rapide qui rend les erreurs utiles.',
        ],
        bullets: [
          'Formulez la question avant un coup d’essai, pas après.',
          'Après une annulation, résumez en une phrase ce que le plateau vient de vous apprendre.',
          'Si vous annulez deux fois le même coup, arrêtez-vous et relisez le plateau : le problème, c’est votre plan, pas le coup.',
          'Gardez une nouvelle tentative pour le jour où toute votre lecture du plateau était fausse.',
        ],
        note: 'Faire des allers-retours entre les deux mêmes positions est le signe que vous espérez au lieu de tester. C’est le moment de relire le plateau depuis le début, ce que détaille [comment lire un casse-tête avant le premier coup](/blog/how-to-read-a-puzzle-before-moving).',
      },
      'undo-in-outbrick': {
        title: 'Comment fonctionne l’annulation dans OutBrick',
        paragraphs: [
          'OutBrick est construit autour de cet équilibre. La première annulation de chaque plateau est gratuite et ne s’épuise jamais : la première correction est donc toujours bon marché, le message même que la formation par la gestion des erreurs cherche à faire passer. Au-delà, les annulations puisent dans une petite réserve qui se remplit avec le temps, et l’annulation proposée quand un plateau se bloque est gratuite elle aussi. Les conditions exactes figurent dans le [registre du jeu équitable sur la page d’accueil](/#fair).',
          'Les étoiles tirent dans l’autre sens, et c’est voulu. Une étoile, c’est un plateau vidé. Deux étoiles, un plateau vidé dans l’objectif de coups. Trois étoiles, un plateau vidé dans l’objectif sans aucune annulation. Le jeu récompense ainsi les deux formes d’apprentissage : explorez librement quand vous visez le plateau vidé, planifiez de tête quand vous visez la troisième étoile. Notre guide pour [décrocher trois étoiles](/blog/how-to-get-three-stars-puzzle-games) traite du côté planification.',
          'Pour sentir la différence, essayez deux fois le [plateau dans le navigateur](/play) : une fois en expérimentant librement, une fois sans toucher à l’annulation. Remarquez à quel point vous regardez le plateau autrement la seconde fois.',
        ],
      },
    },
    pullQuote: 'La solution n’est pas d’éviter l’annulation, mais de l’utiliser à dessein.',
    faqs: [
      { question: 'Annuler un coup dans un jeu de casse-tête, est-ce tricher ?', answer: 'Non. L’annulation permet de corriger une erreur pendant que le raisonnement qui l’a produite est encore frais, ce que la recherche sur l’apprentissage par l’erreur présente comme précieux. Son principal risque est qu’une annulation trop bon marché peut inciter à moins planifier.' },
      { question: 'Les essais et erreurs aident-ils à apprendre les casse-têtes ?', answer: 'Ils le peuvent. Une méta-analyse sur la formation par la gestion des erreurs a montré qu’encourager l’exploration et les erreurs menait à un meilleur transfert vers de nouvelles tâches qu’une formation qui les évitait. Cela marche mieux quand chaque essai teste une idée précise.' },
      { question: 'Pourquoi est-ce que je planifie moins quand l’annulation est illimitée ?', answer: 'Des expériences sur le taquin à 8 pièces ont montré que lorsque les coups étaient bon marché, les gens s’en remettaient aux essais et erreurs, et que lorsqu’ils coûtaient cher, ils planifiaient davantage. L’annulation rend les erreurs bon marché : elle déplace l’effort de la planification vers l’essai.' },
      { question: 'L’annulation coûte-t-elle des étoiles dans OutBrick ?', answer: 'Seulement la troisième. Une étoile, c’est un plateau vidé ; deux étoiles, un plateau vidé dans l’objectif de coups ; trois étoiles, un plateau vidé dans l’objectif sans annulation. La première annulation de chaque plateau est gratuite.' },
    ],
  },

  'chunking-how-expert-puzzlers-see-patterns': {
    title: 'Le chunking : comment les experts voient les motifs',
    dek: 'Les maîtres d’échecs retiennent un échiquier par motifs, pas pièce par pièce. Ce que dit la recherche sur le chunking, et comment bâtir vos propres motifs.',
    imageAlt: 'Moss et sa ceinture à outils avec Bricko de part et d’autre d’un iPhone affichant un vrai plateau OutBrick très serré, marqué Super difficile',
    tags: ['chunking', 'expertise', 'casse-tête et mémoire', 'psychologie cognitive', 'recherche jeux de casse-tête'],
    intro: 'Regardez un bon joueur de casse-têtes : il semble voir la réponse avant même d’avoir regardé. Il n’a pas sauté la réflexion. Il l’a en grande partie faite à l’avance, sur des centaines de plateaux précédents, et l’a stockée sous forme de motifs. Les psychologues appellent ces motifs des chunks, des « blocs » d’information. La recherche sur le chunking est née aux échecs, et elle explique bien ce que suppose le fait de progresser à n’importe quel casse-tête, et ce que cela ne suppose pas.',
    keyTakeaways: [
      'Les experts retiennent et lisent les plateaux par groupes de pièces qui ont un sens, ce qui leur permet d’embrasser bien plus d’un coup d’œil que les débutants.',
      'L’avantage fond nettement sur des positions aléatoires, car les motifs familiers sur lesquels s’appuient les experts en sont absents.',
      'Les chunks sont propres au domaine où ils se sont formés : la compétence est réelle, mais il ne faut pas s’attendre à ce qu’elle déborde sur des tâches sans rapport.',
    ],
    sections: {
      'five-seconds-with-a-chess-board': {
        title: 'Cinq secondes devant un échiquier',
        paragraphs: [
          'En 1973, William Chase et Herbert Simon, dans le prolongement des travaux du psychologue néerlandais Adriaan de Groot, ont montré des positions d’échecs pendant cinq secondes à un maître, à un bon joueur de club et à un débutant, puis leur ont demandé de reconstituer la position sur un échiquier vide. Avec des positions tirées de vraies parties, le maître retrouvait dès le premier essai plusieurs fois plus de pièces que le débutant. Avec des pièces disposées au hasard, l’avantage du maître disparaissait presque entièrement.',
          'Chase et Simon ont aussi observé comment les pièces revenaient. Les joueurs les replaçaient par salves, avec de courtes pauses à l’intérieur d’un groupe et de plus longues entre les groupes. Ces groupes avaient un sens : des pièces qui se protégeaient mutuellement, une structure de pions familière, une disposition classique autour du roi. Les groupes du maître étaient plus gros. Le meilleur joueur ne gardait pas plus d’éléments en tête ; chaque élément en contenait simplement davantage.',
          'C’est l’idée centrale du chunking. La mémoire de travail ne retient qu’une poignée d’éléments à la fois, et l’expertise rend chacun plus riche. L’étude était modeste, avec seulement trois joueurs, mais le résultat a été confirmé de nombreuses fois depuis.',
        ],
      },
      'the-random-board-test': {
        title: 'L’épreuve des positions aléatoires',
        paragraphs: [
          'Des travaux ultérieurs ont affiné le résultat sur les positions aléatoires. En 1996, Fernand Gobet et Herbert Simon ont passé en revue une série d’expériences aux échecs et constaté que les joueurs les plus forts conservent généralement un petit avantage même sur des positions aléatoires, bien moindre toutefois que sur des positions issues de vraies parties. Le hasard laisse subsister quelques fragments familiers, et les experts les repèrent.',
          'L’oculométrie montre le même avantage sous un autre angle. Eyal Reingold, Neil Charness et leurs collègues ont constaté que les joueurs experts embrassaient à chaque regard une bien plus grande part d’une position d’échecs structurée que les joueurs moins forts, mais pas quand la position était aléatoire. Dans une tâche simple consistant à repérer si un roi était en échec, les experts faisaient moins de fixations et regardaient plus souvent entre les pièces que sur elles, comme s’ils lisaient des relations plutôt que des objets. Les auteurs ont conclu que l’avantage venait de l’expérience des échecs, pas d’une meilleure vue ou d’une meilleure mémoire en général.',
          'La leçon pour les amateurs de casse-têtes : la reconnaissance de motifs n’est pas un talent général que l’on a ou que l’on n’a pas. Elle se construit au contact des positions qui reviennent dans un jeu donné, et elle aide exactement dans la mesure où un nouveau plateau ressemble aux anciens.',
        ],
      },
      'how-chunks-form': {
        title: 'Comment se forment les chunks',
        paragraphs: [
          'Dans une synthèse de 2001, Fernand Gobet et ses collègues distinguent deux voies vers les chunks. La première est délibérée et guidée par un but : vous décidez de traiter trois coups comme une seule manœuvre, vous lui donnez un nom et vous l’utilisez à dessein. La seconde est automatique et perceptive : à force d’exposition, certaines dispositions se mettent tout simplement à ressembler à une seule chose. Les modèles informatiques de cette seconde voie apprennent des chunks par l’expérience et reproduisent une grande partie de ce que l’on sait de la mémoire experte, aux échecs comme dans d’autres domaines tels que l’apprentissage du langage.',
          'Les joueurs de casse-têtes utilisent les deux. La forme délibérée ressemble à « ouvrir le couloir de gauche » ou « sortir les jaunes » : une intention nommée qui représente plusieurs glissements. La forme perceptive est plus discrète. Un jour, une brique garée en travers de deux sorties vous paraît tout simplement anormale, avant même que vous sachiez dire pourquoi.',
          'Les chunks comptent à cause de la limite qu’ils permettent de contourner. Planifier une longue suite de coups isolés sature vite la mémoire de travail, ce que nous examinons dans [pourquoi certains plateaux semblent impossibles](/blog/working-memory-puzzle-difficulty). Planifier par chunks permet de faire tenir un plan plus long dans le même espace.',
        ],
      },
      'building-your-own-chunks': {
        title: 'Construire vos propres chunks',
        paragraphs: [
          'On ne télécharge pas des chunks, mais on peut aider à leur formation. Quelques habitudes découlent de la façon dont le chunking semble fonctionner.',
        ],
        bullets: [
          'Nommez les situations qui reviennent. Un nom transforme une impression floue en unité mémorisable : l’embouteillage, le coin verrouillé, le goulot d’une seule brique.',
          'Revenez sur un plateau vidé. Jetez un œil au plateau terminé et demandez-vous quelle partie vous reconnaîtriez la prochaine fois.',
          'Jouez des plateaux semblables à la suite, pour que la répétition fasse ressortir les motifs.',
          'Mélangez les types de plateaux une fois qu’un motif vous est familier, pour vous entraîner à reconnaître lequel s’applique.',
        ],
        note: 'Les chunks ont aussi un coût. Un motif bien appris peut vous aveugler face à un plateau qui ne fait que paraître familier, et défaire un chunk est l’un des moyens de se débloquer, comme l’explique notre article sur [le moment eurêka](/blog/aha-moment-insight-brain). Les bons joueurs tiennent fermement à leurs motifs, et savent les lâcher quand le plateau l’exige.',
      },
      'what-chunking-gives-you': {
        title: 'Ce que le chunking apporte, et ce qu’il n’apporte pas',
        paragraphs: [
          'On est tenté de croire que l’art de lire les motifs d’un maître d’échecs ou d’un expert en casse-têtes doit en faire un meilleur penseur en général. Les données disent le contraire. En 2017, Giovanni Sala et Fernand Gobet ont passé en revue l’enseignement des échecs et de la musique aux enfants, ainsi que l’entraînement de la mémoire de travail. Mieux une étude était contrôlée, plus ses effets sur les compétences cognitives et scolaires générales étaient faibles, et ils ont conclu que le transfert lointain des apprentissages se produit rarement.',
          'Ce n’est pas un résultat décevant pour qui aime simplement les casse-têtes. Progresser dans un jeu qu’on aime est un vrai plaisir, et les chunks que l’on construit sont une forme authentique de connaissance. Simplement, c’est une connaissance du jeu. Nous avons abordé la question plus large dans [les jeux de casse-tête sont-ils bons pour le cerveau ?](/blog/are-puzzle-games-good-for-your-brain)',
          'Les plateaux d’OutBrick se prêtent bien à l’observation des chunks qui se forment, car la mécanique reste constante tandis que les dispositions changent : une brique glisse toujours jusqu’à ce que quelque chose l’arrête, et sort toujours par la porte de sa couleur. Jouez quelques [plateaux du jour](/daily) plusieurs jours de suite et remarquez quelles dispositions commencent à ressembler à une seule chose. Ce que vous remarquez là, c’est un chunk en train de se former.',
        ],
      },
    },
    pullQuote: 'Le meilleur joueur ne gardait pas plus d’éléments en tête ; chaque élément en contenait simplement davantage.',
    faqs: [
      { question: 'Qu’est-ce que le chunking en psychologie ?', answer: 'Le chunking consiste à regrouper plusieurs informations en une seule unité qui a un sens, comme une disposition familière de pièces d’échecs ou une suite de coups qui porte un nom. Comme la mémoire de travail ne retient que quelques éléments, des chunks plus gros permettent d’en garder davantage en tête à la fois.' },
      { question: 'Comment les maîtres d’échecs retiennent-ils un échiquier entier ?', answer: 'Ils reconnaissent des groupes de pièces familiers plutôt que des pièces isolées. Dans des expériences classiques, les maîtres retenaient bien plus que les débutants à partir de positions de vraies parties, mais leur avantage était bien moindre sur des positions aléatoires.' },
      { question: 'Comment mieux repérer les motifs dans les casse-têtes ?', answer: 'Nommez les situations qui reviennent, revenez sur les plateaux après les avoir vidés et jouez des plateaux semblables à la suite pour que les motifs ressortent. Ensuite, mélangez les types de plateaux pour vous entraîner à reconnaître quel motif s’applique.' },
      { question: 'La reconnaissance de motifs dans les jeux rend-elle plus intelligent en général ?', answer: 'Les données disent que non. Les synthèses sur les échecs, la musique et l’entraînement de la mémoire de travail ont montré que mieux l’étude était contrôlée, plus l’effet sur les capacités de réflexion générales était faible.' },
    ],
  },

  'stuck-on-a-puzzle-incubation-effect': {
    title: 'Bloqué sur un casse-tête ? Faire une pause, selon la science',
    dek: 'Pourquoi un casse-tête insoluble cède souvent après une pause, ce qu’a montré une méta-analyse sur l’incubation, et comment faire la pause qui aide.',
    imageAlt: 'Vio avec son casque et Sprout à côté d’un iPhone affichant la boutique OutBrick, avec quelques briques jaunes et bleues flottant sur une grille indigo',
    tags: ['effet d’incubation', 'résolution de problèmes', 'astuces casse-tête', 'insight', 'psychologie cognitive'],
    intro: 'Presque tous les amateurs de casse-têtes l’ont vécu. On fixe un plateau jusqu’à ce qu’il semble n’avoir aucune solution, on abandonne, on se fait un thé, et en revenant la réponse est là, sous nos yeux. Les psychologues appellent cette pause une période d’incubation, et l’amélioration qui la suit parfois un effet d’incubation. C’est l’une des plus anciennes idées de la psychologie de la résolution de problèmes, et les données modernes disent qu’elle est réelle, quoique plus modeste et plus conditionnelle que ne le suggèrent les anecdotes.',
    keyTakeaways: [
      'Une méta-analyse des études sur l’incubation a trouvé un effet positif réel à mettre un problème de côté, plus marqué quand on y avait d’abord travaillé plus longtemps.',
      'Les pauses semblent aider en partie en laissant s’estomper une idée trompeuse : elles comptent surtout quand on tourne en rond.',
      'Une activité légère et peu exigeante pendant la pause tendait à faire mieux qu’un travail mental difficile, et pour certains problèmes mieux que le repos.',
    ],
    sections: {
      'what-the-evidence-says': {
        title: 'Ce que disent les données',
        paragraphs: [
          'La synthèse la plus complète est une méta-analyse de 2009 menée par Ut Na Sio et Thomas Ormerod, qui ont regroupé des expériences comparant des personnes qui continuaient à travailler sur un problème à d’autres qui le mettaient de côté un moment avant de réessayer. Dans l’ensemble, ils ont trouvé un effet d’incubation positif. Mais il n’était pas uniforme. Les tâches créatives et ouvertes, comme imaginer de nouveaux usages pour une brique, en profitaient davantage que les problèmes d’insight fondés sur des mots ou des images.',
          'Trois détails sont particulièrement utiles. Une préparation plus longue avant la pause donnait un effet plus grand : l’incubation agit sur un problème dans lequel on s’est vraiment engagé, pas sur un problème survolé. Remplir la pause par une tâche exigeante réduisait l’effet. Et pour les problèmes d’insight verbaux, une tâche légère pendant la pause faisait mieux que le repos.',
          'Soyons honnêtes sur ce que cela vaut pour les jeux de casse-tête. Les problèmes visuels de ces études ne sont pas des plateaux de blocs coulissants, et les problèmes d’insight visuels profitaient moins de l’incubation que les tâches ouvertes. L’effet est réel, mais personne ne l’a mesuré sur des jeux de tri de couleurs, et il serait faux de promettre qu’une pause viendra toujours à bout d’un plateau.',
        ],
      },
      'letting-the-wrong-idea-fade': {
        title: 'Pourquoi la pause aide : laisser s’estomper la mauvaise idée',
        paragraphs: [
          'Une explication est presque mécanique. Steven Smith et Steven Blankenship ont proposé des énigmes de mots accompagnées d’indices trompeurs, conçus pour lancer les participants sur une fausse piste. Les indices faisaient leur effet : les gens se fixaient sur eux et résolvaient moins de problèmes. Quand ces problèmes étaient retentés après un délai, les participants progressaient davantage que lorsqu’ils réessayaient aussitôt. Dans leurs expériences, l’effet d’incubation n’apparaissait que si une fixation avait d’abord été provoquée.',
          'Cela correspond bien à l’expérience d’être bloqué sur un plateau. Au bout de quelques minutes, on ne regarde plus le casse-tête ; on regarde son propre plan. C’est le couloir dont on est sûr qu’il doit s’ouvrir en premier, la brique dont on est sûr qu’elle doit sortir en dernier. Une pause permet à ce plan de relâcher son emprise, et au retour on voit le plateau un peu plus tel qu’il est. C’est aussi pourquoi un ami qui jette un œil à votre plateau repère parfois le coup immédiatement : il n’a jamais construit votre plan, qui ne peut donc pas l’induire en erreur.',
          'D’autres chercheurs soutiennent que l’esprit continue aussi à travailler sur le problème en dessous du seuil de conscience. La synthèse de Ken Gilhooly, en 2016, expose les arguments en faveur de ce travail inconscient, en s’appuyant sur des études où la pause commence immédiatement après la présentation du problème. Les deux explications ne s’excluent pas, et pour un amateur de casse-têtes, le conseil pratique est le même.',
        ],
      },
      'the-right-kind-of-break': {
        title: 'La bonne pause',
        paragraphs: [
          'Ce que l’on fait pendant la pause semble compter. Benjamin Baird, Jonathan Schooler et leurs collègues ont donné une tâche créative à des participants, suivie d’une pause de plusieurs types : une tâche exigeante, une tâche peu exigeante laissant l’esprit vagabonder, du repos, ou pas de pause du tout. Seule la tâche peu exigeante produisait une amélioration nette sur les problèmes déjà vus, et les membres de ce groupe rapportaient davantage de vagabondage mental. Il s’agit d’une seule étude, sur une tâche créative, mais elle concorde avec la méta-analyse.',
          'Le sommeil pourrait jouer un rôle comparable sur une échelle de temps plus longue. Ullrich Wagner, Jan Born et leurs collègues ont entraîné des participants sur une tâche numérique qui cachait un raccourci. Après une nuit de sommeil, plus de deux fois plus de personnes découvraient le raccourci qu’après le même temps passé éveillé. Le sommeil n’aidait pas ceux qui ne s’étaient pas d’abord exercés à la tâche. Ce résultat concerne la découverte d’une règle cachée plutôt que les casse-têtes en général, mais il fait écho au reste de la recherche : d’abord la préparation, puis du temps loin du problème.',
        ],
        bullets: [
          'Travaillez vraiment le plateau avant de vous éloigner : l’incubation a besoin de quelque chose à incuber.',
          'Choisissez une activité légère, comme la vaisselle ou une courte promenade, plutôt qu’une autre tâche mentale exigeante.',
          'Avant de partir, dites ce dont le plateau a besoin selon vous, pour savoir de quel plan vous vous détachez.',
          'Revenez et lisez le plateau à neuf, avec une [routine de lecture](/blog/how-to-read-a-puzzle-before-moving) plutôt qu’avec votre ancien plan.',
        ],
      },
      'knowing-when-to-step-away': {
        title: 'Savoir quand s’éloigner',
        paragraphs: [
          'Les signes qui montrent que vous êtes fixé plutôt qu’en train de progresser se repèrent facilement une fois qu’on les connaît. Vous rejouez sans cesse la même ouverture. Vous annulez jusqu’à la même position. Vous ne savez plus dire à quoi servent vos prochains coups. C’est le moment d’arrêter, car insister ne fait généralement que creuser l’ornière.',
          'Revenir est aussi un savoir-faire. En revenant, on est tenté de reprendre exactement là où on s’était arrêté, en rejouant la même ouverture dans sa tête. Résistez. Partez du but comme si le plateau était nouveau, et essayez délibérément le coup dont vous étiez le plus sûr qu’il était mauvais. Si le problème venait de la fixation, la réponse se cache souvent dans la partie du plateau que vous aviez cessé de regarder.',
          'S’éloigner est plus facile quand le jeu ne vous en punit pas. Rien n’est chronométré sur un plateau OutBrick ; la limite de chaque plateau compte des coups, pas des secondes, si bien que vous pouvez poser le téléphone et réfléchir sans que rien ne défile. Le [plateau du jour](/daily) reste le même toute la journée, ce qui en fait un candidat naturel pour un second regard après le déjeuner.',
          'Une pause est aussi le bon moment pour se demander si l’on a vraiment envie de revenir. Certains soirs, un casse-tête est exactement ce qu’il faut, d’autres soirs non ; notre article sur [quand jouer et quand poser le téléphone](/blog/when-to-play-and-when-to-pause) aborde cet aspect. Et quand la réponse arrive d’un coup après une pause, elle a tendance à ressembler à un éclair de lucidité, une expérience singulière en elle-même que nous explorons dans [le moment eurêka](/blog/aha-moment-insight-brain).',
        ],
      },
    },
    pullQuote: 'Au bout de quelques minutes, on ne regarde plus le casse-tête ; on regarde son propre plan.',
    faqs: [
      { question: 'Faire une pause aide-t-il à résoudre un casse-tête ?', answer: 'Souvent, oui. Une méta-analyse des études sur l’incubation a trouvé un effet positif à mettre un problème de côté, surtout après y avoir bien travaillé, même si les casse-têtes visuels en profitaient moins que les tâches créatives ouvertes.' },
      { question: 'Que faire pendant une pause face à un casse-tête difficile ?', answer: 'Quelque chose de léger qui laisse l’esprit vagabonder, comme une promenade ou une tâche ménagère simple. Dans les études, les activités peu exigeantes tendaient à aider davantage que les tâches mentales exigeantes, et pour certains problèmes davantage que le repos.' },
      { question: 'Pourquoi est-ce que je vois la réponse dès que je reviens ?', answer: 'Notamment parce qu’une pause permet à une idée trompeuse de perdre son emprise. Des expériences qui lançaient délibérément les gens sur une fausse piste ont montré que réessayer après un délai aidait davantage que réessayer tout de suite.' },
      { question: 'Combien de temps faut-il s’éloigner d’un casse-tête ?', answer: 'Il n’existe pas de durée idéale démontrée. Les études ont utilisé des pauses allant de quelques minutes à une nuit de sommeil ; l’essentiel est d’avoir d’abord travaillé sur le problème et de remplir la pause par quelque chose de peu exigeant.' },
    ],
  },

  'how-to-get-three-stars-puzzle-games': {
    title: 'Trois étoiles aux casse-têtes : penser en moins de coups',
    dek: 'Trois étoiles, c’est bien résoudre, pas juste résoudre. « Satisficing », profondeur de planification, habitudes anti-coups perdus et étoiles d’OutBrick.',
    imageAlt: 'Bricko et Sprout de part et d’autre d’un iPhone affichant l’étape Verger d’automne sur la carte du Voyage d’OutBrick',
    tags: ['objectif de coups', 'astuces casse-tête', 'planification', 'stratégie puzzle coulissant', 'résolution de problèmes'],
    intro: 'Vider un plateau et bien le vider sont deux compétences différentes. La première demande si vous savez trouver une solution. La seconde, si vous savez en trouver une bonne dans un budget de coups, et cela fait appel à une autre forme de réflexion. Je conçois des plateaux pour OutBrick, où la troisième étoile demande de vider le plateau dans l’objectif de coups sans aucune annulation : je passe donc beaucoup de temps à observer l’écart entre un plateau vidé et un plateau vidé proprement. Voici ce que la psychologie de la planification dit pour le combler.',
    keyTakeaways: [
      'La plupart du temps, on se contente de la première solution qui marche ; trois étoiles vous demandent d’optimiser, ce qui exige une planification délibérée.',
      'Planifier avant de jouer mène à de meilleures solutions, et dans une série d’expériences le bénéfice persistait une fois la consigne de planifier levée.',
      'Les joueurs plus forts voient plus loin, mais tout le monde élague ses options ; tout l’art est d’élaguer les bonnes branches.',
    ],
    sections: {
      'good-enough-versus-best': {
        title: 'Assez bien ou le meilleur',
        paragraphs: [
          'En 1956, Herbert Simon soutenait que les esprits réels cherchent rarement la meilleure option. Ils en cherchent une qui soit assez bonne et s’arrêtent là, une stratégie qu’il a baptisée satisficing, contraction de « satisfaire » et de « suffire ». Avec un temps et une attention limités, c’est généralement le choix rationnel. Un client ne compare pas toutes les baguettes de la boulangerie, et un joueur ne compare généralement pas tous les chemins vers un plateau vidé.',
          'Un objectif de coups change la question. Il transforme un problème de satisficing, trouver une façon de vider le plateau, en un problème d’optimisation, le vider dans un budget. L’instinct qui vous sert bien lors d’un premier essai consiste à prendre le premier coup qui fait progresser. C’est ce même instinct qui coûte des coups quand vous visez un objectif.',
          'Mieux vaut savoir dans quel mode vous êtes et le choisir délibérément. Barry Schwartz et ses collègues ont constaté que les personnes qui cherchent habituellement à tirer le meilleur de chaque choix se disaient moins heureuses et éprouvaient plus de regrets que celles qui se contentent de l’assez bien. Ces travaux portaient sur les décisions du quotidien, pas sur les casse-têtes, mais la leçon voyage : optimisez sur les plateaux où vous en avez envie, et laissez les autres être simplement vidés.',
        ],
      },
      'planning-first-pays-twice': {
        title: 'Planifier d’abord rapporte deux fois',
        paragraphs: [
          'Peter Delaney, Anders Ericsson et Mary Knowles ont étudié les problèmes de transvasement, un casse-tête classique où l’on se lance d’ordinaire en versant de l’eau sans beaucoup planifier. Quand on demandait aux participants de planifier d’abord une solution complète, ils résolvaient les problèmes autrement et apprenaient davantage. Le résultat marquant, c’est la suite : ceux qui s’étaient entraînés à planifier continuaient à produire de meilleures solutions même une fois qu’on ne leur demandait plus de planifier, alors que le groupe de comparaison progressait peu.',
          'C’est l’argument pour jouer certains plateaux lentement. Un plateau résolu avec un plan vous en apprend plus qu’un plateau résolu par essais et erreurs, et l’habitude de planifier semble rester. Les premières secondes de lecture d’un plateau, décrites dans [comment lire un casse-tête avant le premier coup](/blog/how-to-read-a-puzzle-before-moving), sont la source de la plupart des coups économisés.',
          'En pratique, planifier en vue d’un objectif veut dire compter. Avant une série de coups, estimez ce qu’elle coûtera et comparez avec ce qu’il vous reste sous l’objectif. Si le plan demande plus de coups que vous n’en avez, c’est le mauvais plan, et il est bien moins coûteux de s’en apercevoir avant le premier glissement qu’après le cinquième.',
        ],
      },
      'how-far-ahead-good-players-look': {
        title: 'Jusqu’où les bons joueurs voient-ils ?',
        paragraphs: [
          'Pendant des décennies, les chercheurs se sont demandé si les experts planifient plus loin ou reconnaissent simplement de meilleurs coups. En 2023, Bas van Opheusden, Wei Ji Ma et leurs collègues ont abordé la question avec une variante du puissance 4, un jeu assez complexe pour récompenser une planification profonde, en s’appuyant à la fois sur des joueurs en laboratoire et sur un grand nombre de parties jouées sur mobile. En ajustant un modèle de recherche heuristique aux coups des joueurs, ils ont trouvé des preuves solides que la profondeur de planification augmente avec l’expertise.',
          'Mais la profondeur n’est pas gratuite. Chaque coup supplémentaire anticipé multiplie les branches à considérer, et l’on s’en sort en élaguant. Quentin Huys et ses collègues ont constaté que les personnes qui planifiaient une série de choix avaient tendance à cesser d’évaluer une branche dès qu’elle rencontrait une grosse perte, même quand cette branche aurait payé plus tard. Le raccourci est généralement sensé, et parfois coûteux.',
          'Sur un plateau, l’équivalent consiste à écarter un coup parce que sa première étape paraît mauvaise : éloigner une brique de sa porte, par exemple, ou remplir un couloir dont vous aurez besoin plus tard. Certains des meilleurs coups d’un plateau serré ressemblent exactement à cela. Quand vous ne trouvez pas de chemin dans l’objectif, revenez aux coups que vous avez rejetés d’emblée et suivez-les deux étapes plus loin.',
        ],
      },
      'where-moves-go-missing': {
        title: 'Où se perdent les coups',
        paragraphs: [
          'Quand je teste des plateaux, les mêmes quelques fuites expliquent l’essentiel de l’écart entre un plateau vidé et un plateau vidé proprement.',
        ],
        bullets: [
          'Deux glissements courts là où un seul long suffirait. Quand les briques glissent jusqu’à ce que quelque chose les arrête, un glissement peut souvent faire le travail de deux.',
          'Garer une brique dans un couloir dont vous aurez besoin, puis devoir la déplacer à nouveau.',
          'Vider d’abord la couleur facile au lieu de celle dont la sortie libère le plus.',
          'Réparer une erreur avec trois nouveaux coups alors qu’une seule relecture l’aurait évitée.',
        ],
        note: 'Chaque fuite est un coup de satisficing : il fait progresser maintenant et coûte plus tard. Le remède est le même pour toutes : demandez-vous ce qu’un coup ferme autant que ce qu’il ouvre. Nos [astuces pour les jeux de tri de couleurs](/blog/colour-sort-puzzle-tips) passent ces schémas en revue un par un.',
      },
      'outbrick-three-stars': {
        title: 'Comment fonctionnent les trois étoiles d’OutBrick',
        paragraphs: [
          'Sur chaque plateau OutBrick, une étoile, c’est un plateau vidé, deux étoiles, un plateau vidé dans l’objectif de coups, et trois étoiles, un plateau vidé dans l’objectif sans annulation. L’objectif et la limite de coups sont affichés dès la première touche, et il n’y a jamais de chrono : le temps de planification vous appartient. L’objectif est le compte du solveur pour ce plateau, et la référence pour deux et trois étoiles. La limite, représentée par une corde, est le plafond de la tentative. L’écart entre les deux est à vous pour apprendre le plateau, et quand les coups viennent à manquer, cinq coups supplémentaires vous sont proposés avant la fin de la tentative.',
          'Cette conception sépare les deux modes. La première annulation de chaque plateau est gratuite : quand vous visez le plateau vidé, vous pouvez donc explorer autant que vous voulez ; [pourquoi l’annulation vous rend meilleur](/blog/why-undo-makes-you-a-better-puzzle-solver) explique pourquoi cela vaut la peine. Trois étoiles vous demandent plutôt d’explorer dans votre tête. Sur un nouveau plateau vraiment difficile, il n’y a aucun mal à vous contenter de le vider. L’habitude de planifier paiera sur le suivant.',
          'Pour travailler la planification, essayez le [plateau dans le navigateur](/play) avec une règle à vous : aucun coup tant que vous ne savez pas dire où les trois suivants laisseront chaque brique que vous touchez.',
        ],
      },
    },
    pullQuote: 'Chaque fuite est un coup de satisficing : il fait progresser maintenant et coûte plus tard.',
    faqs: [
      { question: 'Comment obtenir trois étoiles dans OutBrick ?', answer: 'Videz le plateau dans l’objectif de coups sans utiliser l’annulation. Une étoile récompense n’importe quel plateau vidé, et deux étoiles un plateau vidé dans l’objectif.' },
      { question: 'Comment résoudre un casse-tête en moins de coups ?', answer: 'Planifiez avant de jouer, préférez un long glissement à deux courts et demandez-vous ce que chaque coup ferme autant que ce qu’il ouvre. La plupart des coups perdus viennent du réflexe de jouer le premier coup qui fait progresser.' },
      { question: 'Qu’est-ce que le satisficing ?', answer: 'Le satisficing, terme forgé par Herbert Simon, consiste à choisir la première option assez bonne plutôt que de chercher la meilleure. C’est généralement raisonnable, mais un objectif de coups vous demande au contraire d’optimiser.' },
      { question: 'Les meilleurs joueurs planifient-ils plus de coups à l’avance ?', answer: 'Oui, selon une étude de 2023 sur un jeu de plateau complexe, qui a trouvé des preuves solides que la profondeur de planification augmente avec l’expertise, en laboratoire comme dans de vastes données de jeu sur mobile.' },
    ],
  },

  'can-puzzle-games-improve-spatial-skills': {
    title: 'Les casse-têtes améliorent-ils la vision dans l’espace ?',
    dek: 'Les capacités spatiales s’entraînent, mais les jeux sont une voie plus étroite qu’on le dit. Les méta-analyses sur l’entraînement, Tetris et le transfert.',
    imageAlt: 'Bricko et Zippy qui fait un clin d’œil à côté d’un iPhone affichant l’Usine à boutons sur la carte du Voyage d’OutBrick, avec des briques flottant au-dessus',
    tags: ['capacités spatiales', 'recherche jeux de casse-tête', 'entraînement cérébral', 'Tetris', 'recherche'],
    intro: 'La pensée spatiale, c’est-à-dire la capacité à se représenter des objets, à les faire tourner mentalement et à raisonner sur la place des choses, compte bien au-delà des casse-têtes. Elle prédit la réussite en sciences, en ingénierie et en mathématiques, et on l’a longtemps considérée comme un don que l’on avait ou pas. La recherche des dernières décennies a changé ce tableau : les capacités spatiales répondent à l’entraînement. Savoir si les jeux de casse-tête sont un bon moyen de s’entraîner est une question plus délicate, et la réponse honnête se fait en deux temps.',
    keyTakeaways: [
      'Une méta-analyse de 217 études d’entraînement a montré que les capacités spatiales peuvent être améliorées, avec des gains durables qui se transfèrent à d’autres tâches spatiales.',
      'Les données sur les jeux vidéo en particulier sont mitigées : certaines études montrent un transfert vers d’autres tests spatiaux, d’autres trouvent des gains qui restent proches du jeu.',
      'L’idée que les jeux élèvent les capacités cognitives générales n’est pas soutenue par les plus vastes méta-analyses récentes.',
    ],
    sections: {
      'spatial-skills-can-be-trained': {
        title: 'Les capacités spatiales s’entraînent',
        paragraphs: [
          'L’étude de référence est une méta-analyse de 2013 menée par David Uttal, Nora Newcombe et leurs collègues, qui ont regroupé 217 études d’entraînement spatial, des cours scolaires et jeux vidéo à la pratique répétée de tests spatiaux. En moyenne, l’entraînement améliorait les performances spatiales de près d’un demi-écart-type par rapport aux groupes témoins, un effet modéré. Les gains ne s’estompaient pas avec des délais plus longs entre l’entraînement et le test, et ils se transféraient à des tâches spatiales qui n’avaient pas été entraînées directement.',
          'Les auteurs ont aussi classé les capacités spatiales selon deux dimensions : la tâche porte-t-elle sur un seul objet ou sur les relations entre plusieurs, et les choses restent-elles immobiles ou bougent-elles ? Ce type de carte aide à se demander quelle capacité spatiale un jeu donné exerce réellement, car s’entraîner à un type de tâche ne garantit pas de progresser dans un autre.',
          'C’était important, car l’aptitude spatiale prédit fortement qui s’engage et réussit dans les sciences, la technologie, l’ingénierie et les mathématiques. Si elle s’entraîne, ce n’est pas une barrière fixe, et les auteurs soutenaient qu’une éducation riche en activités spatiales pourrait porter de vrais fruits.',
          'Notez ce que couvre ce résultat. L’entraînement spatial améliorait les capacités spatiales. Il ne prétendait pas améliorer la mémoire, l’attention ou l’intelligence en général, et le transfert observé concernait d’autres tâches spatiales, pas tout le reste.',
        ],
      },
      'what-tetris-taught-researchers': {
        title: 'Ce que Tetris a appris aux chercheurs',
        paragraphs: [
          'Tetris est un cas d’étude favori depuis des décennies, et les résultats vont dans les deux sens, ce qui est instructif en soi. Melissa Terlecki, Nora Newcombe et Michelle Little ont demandé à des étudiants soit de passer un test de rotation mentale à répétition, soit de jouer à Tetris pendant plusieurs semaines. Les deux groupes ont beaucoup progressé, et les gains tenaient plusieurs mois plus tard. Les joueurs de Tetris progressaient plus vite au début, et leurs gains se transféraient davantage à d’autres tâches spatiales que ceux des tests répétés, un avantage encore présent des mois plus tard.',
          'Valerie Sims et Richard Mayer ont trouvé quelque chose de plus modérateur. Les joueurs de Tetris aguerris faisaient mieux que les non-joueurs pour faire tourner mentalement des formes ressemblant à des pièces de Tetris, mais pas sur d’autres tests spatiaux. Quand des non-joueurs recevaient 12 heures d’entraînement à Tetris, ils ne progressaient pas plus aux tests spatiaux qu’un groupe témoin apparié. Les auteurs ont conclu que l’expertise spatiale acquise dans le jeu était très spécifique au jeu.',
          'Les deux résultats peuvent être vrais. Les études utilisaient des durées de jeu, des tests et des participants différents. Ce sur quoi elles s’accordent, c’est que plus un test est proche du jeu, plus un gain a de chances d’apparaître.',
        ],
      },
      'why-far-transfer-is-the-sticking-point': {
        title: 'Pourquoi le transfert lointain coince',
        paragraphs: [
          'Le tour d’horizon le plus large sur les jeux et la pensée est une série de méta-analyses publiée en 2018 par Giovanni Sala, K. Semir Tatlidil et Fernand Gobet, couvrant plusieurs centaines de comparaisons. Ils se sont demandé si l’habileté aux jeux vidéo est corrélée aux capacités cognitives, si les joueurs diffèrent des non-joueurs, et si l’entraînement par le jeu améliore les capacités cognitives. Ils ont trouvé des effets faibles ou nuls dans les trois cas, et aucune preuve que jouer aux jeux vidéo cause une amélioration des capacités cognitives.',
          'Cela contredit moins la recherche sur l’entraînement spatial que cela n’en marque la limite. S’exercer à une tâche spatiale peut rendre meilleur aux tâches spatiales qui lui ressemblent. L’espoir qu’un jeu vous rende plus vif en général, c’est la partie qui échoue régulièrement aux tests rigoureux, un schéma que nous avons retracé dans [les jeux de casse-tête sont-ils bons pour le cerveau ?](/blog/are-puzzle-games-good-for-your-brain)',
        ],
      },
      'children-and-puzzle-play': {
        title: 'Les enfants, les puzzles et les premiers jeux spatiaux',
        paragraphs: [
          'Certaines des données les plus intéressantes viennent de la petite enfance. Susan Levine et ses collègues ont rendu visite à 53 familles tous les quatre mois, pendant que les enfants avaient entre deux et quatre ans. Les enfants observés en train de jouer avec des puzzles réussissaient mieux, à quatre ans et demi, une tâche consistant à déplacer et faire tourner mentalement des formes, même en tenant compte du niveau d’études des parents, de leurs revenus et de la quantité de paroles échangées. Parmi les enfants qui jouaient avec des puzzles, une pratique plus fréquente prédisait de meilleurs scores.',
          'L’étude est observationnelle : elle ne peut pas montrer que les puzzles ont causé la différence, car les familles qui font des puzzles diffèrent peut-être sur d’autres points. Les chercheurs ont aussi constaté que la qualité du jeu, notamment la difficulté des puzzles et la quantité de paroles des parents sur les formes et l’espace, était plus élevée pour les garçons que pour les filles. C’est une piste prometteuse, pas une prescription.',
        ],
      },
      'what-this-means-for-players': {
        title: 'Ce que cela signifie si vous jouez aux casse-têtes',
        paragraphs: [
          'Mises bout à bout, les données soutiennent une affirmation modeste et honnête. Déplacer et faire tourner des formes dans sa tête est une compétence, et les casse-têtes qui la sollicitent vous y entraînent. Vous deviendrez meilleur au casse-tête, et peut-être à des tâches spatiales qui lui ressemblent. Quiconque promet davantage devance la recherche.',
          'Les puzzles de blocs coulissants comme OutBrick font appel à une capacité spatiale particulière : prévoir où une pièce s’arrêtera quand elle glisse jusqu’à ce que quelque chose l’arrête, et comment cela modifie l’espace autour d’elle. C’est plus proche du raisonnement sur les trajets et les obstacles que de la rotation de formes, et nous ne connaissons aucune étude ayant vérifié si cela se transfère. Nous ne revendiquons rien de tel pour le jeu. C’est une façon agréable d’exercer la compétence que le jeu enseigne lui-même, et cela suffit.',
          'Si c’est la capacité spatiale elle-même que vous recherchez, les études d’entraînement invitent à chercher des tâches qui vous demandent directement de faire tourner, de plier ou de vous orienter, à un niveau qui vous pousse un peu. Un jeu de casse-tête peut faire partie de ce mélange. Il y a peu de chances qu’il en soit le tout.',
          'Pour voir quelles habitudes spatiales un plateau coulissant demande, essayez le [plateau dans le navigateur](/play). Notre article sur le [chunking](/blog/chunking-how-expert-puzzlers-see-patterns) explique comment ces habitudes deviennent des motifs lus d’un coup d’œil, et [les jeux comme Tetris](/blog/games-like-tetris) examine ce qui rend les jeux d’emboîtement spatial intéressants.',
        ],
      },
    },
    pullQuote: 'Quiconque promet davantage devance la recherche.',
    faqs: [
      { question: 'Les jeux de casse-tête améliorent-ils les capacités spatiales ?', answer: 'Ils peuvent améliorer les capacités spatiales que le jeu lui-même sollicite, et certaines études montrent des gains sur des tests spatiaux voisins. Les preuves que les jeux améliorent les capacités cognitives générales sont faibles.' },
      { question: 'Jouer à Tetris améliore-t-il la rotation mentale ?', answer: 'Les études divergent. L’une a montré que l’entraînement à Tetris améliorait la rotation mentale avec un transfert durable vers d’autres tâches spatiales ; une autre a trouvé que les joueurs aguerris n’étaient meilleurs qu’avec des formes de type Tetris, et que 12 heures de jeu n’apportaient aucun gain supplémentaire.' },
      { question: 'Les capacités spatiales peuvent-elles s’entraîner ?', answer: 'Oui. Une méta-analyse de 217 études a montré que l’entraînement spatial améliore les capacités spatiales de façon modérée, avec des gains durables qui s’étendent à des tâches spatiales non entraînées.' },
      { question: 'Les puzzles sont-ils bons pour les capacités spatiales des enfants ?', answer: 'Dans une étude, les enfants qui jouaient avec des puzzles à la maison réussissaient mieux une tâche spatiale ultérieure. L’étude était observationnelle : elle ne peut pas prouver que les puzzles ont causé la différence.' },
    ],
  },

  'working-memory-puzzle-difficulty': {
    title: 'Mémoire de travail : pourquoi un plateau semble impossible',
    dek: 'Un plateau difficile cache souvent un problème de mémoire. Comment la mémoire de travail et la charge cognitive font la difficulté, et comment l’alléger.',
    imageAlt: 'Vio avec son casque et Flurry en bonnet tricoté à côté d’un iPhone affichant les Sources de bambou sur la carte du Voyage d’OutBrick',
    tags: ['mémoire de travail', 'charge cognitive', 'casse-tête et mémoire', 'résolution de problèmes', 'astuces casse-tête'],
    intro: 'Certains plateaux sont difficiles parce que la solution est longue ou bien cachée. D’autres le sont pour une raison moins évidente : ils vous demandent de garder en tête plus de choses à la fois qu’un esprit ne peut le faire confortablement. De l’intérieur, les deux se ressemblent, avec ce sentiment grandissant que le plateau n’a aucun sens, mais ils appellent des réponses différentes. Comprendre le second commence par la mémoire de travail, ce petit espace mental où l’on jongle avec tout ce à quoi on pense à l’instant présent.',
    keyTakeaways: [
      'La mémoire de travail ne retient que quelques chunks à la fois ; une synthèse très citée avance le chiffre d’environ quatre.',
      'Comparer sans cesse où l’on en est avec où l’on veut aller consomme une grande partie de cette capacité, et en laisse peu pour apprendre du plateau.',
      'On peut alléger la charge en planifiant par chunks, en ne planifiant qu’à courte distance et en laissant le plateau retenir des informations à sa place.',
    ],
    sections: {
      'a-small-workspace': {
        title: 'Un petit espace de travail',
        paragraphs: [
          'Pendant des décennies, le chiffre des manuels pour la mémoire à court terme était de sept éléments, plus ou moins deux. Dans une synthèse de 2001, Nelson Cowan a soutenu qu’une fois qu’on empêche les gens de répéter ou de regrouper les éléments, la capacité réelle se situe plutôt entre trois et cinq chunks, quatre étant une estimation centrale raisonnable. Tout ce avec quoi vous jonglez activement en résolvant un casse-tête doit tenir dans cet espace : la position en cours, le but, le coup envisagé et ce qu’il bloquerait.',
          'Quatre, ce n’est pas beaucoup. C’est pourquoi un plan de dix coups isolés s’effondre à mi-chemin, et pourquoi on peut repérer une astucieuse séquence de trois coups, détourner les yeux un instant et la perdre entièrement. La plupart des gens ont rencontré cette limite sur un plateau sans avoir de nom pour elle.',
          'L’espace de travail n’a pas non plus une taille fixe d’un moment à l’autre. La fatigue, les distractions et les soucis se le disputent, ce qui explique en partie qu’un plateau impossible en fin de longue journée puisse paraître simple le lendemain matin. Si un plateau vous semble soudain bien plus dur que le précédent, demandez-vous si c’est le plateau qui a changé, ou vous.',
        ],
      },
      'when-solving-crowds-out-learning': {
        title: 'Charge cognitive : quand résoudre empêche d’apprendre',
        paragraphs: [
          'La théorie de la charge cognitive de John Sweller est née de la recherche sur la résolution de problèmes. Dans un article de 1988, il soutenait que l’analyse moyens-fins, la stratégie qui consiste à comparer sans cesse où l’on est avec où l’on veut aller et à choisir les coups qui réduisent l’écart, occupe une grande partie de la mémoire de travail. Il reste alors peu de capacité pour remarquer les motifs qui rendraient le problème suivant plus facile. On pouvait résoudre des problèmes de cette façon et en apprendre étonnamment peu.',
          'Trois décennies de travaux ultérieurs, résumés par Sweller, Jeroen van Merriënboer et Fred Paas en 2019, ont bâti une théorie de l’enseignement autour de cette même limite. Son affirmation centrale est simple : les informations nouvelles doivent passer par une mémoire de travail limitée à la fois en capacité et en durée, tandis que les connaissances déjà stockées en mémoire à long terme échappent à ces limites. L’expérience rend les problèmes difficiles plus faciles en grande partie en faisant passer ce que l’on sait du petit espace de travail au grand entrepôt.',
          'Pour un amateur de casse-têtes, cela explique une frustration familière. Sur un plateau tout au bord de vos capacités, toute votre capacité passe à trouver des coups, et vous pouvez le vider sans trop savoir comment. Sur un plateau juste en deçà de votre limite, il vous reste de la capacité pour remarquer pourquoi la solution a marché, et c’est là que vous apprenez.',
        ],
      },
      'how-far-ahead-can-you-plan': {
        title: 'Jusqu’où pouvez-vous planifier ?',
        paragraphs: [
          'Louise Phillips, Ken Gilhooly et leurs collègues ont testé directement la planification mentale avec la tour de Londres, un casse-tête de déplacement de disques très utilisé pour étudier la planification. La plupart des gens planifiaient avec précision jusqu’à deux sous-buts à l’avance, mais pas trois. Dans une autre expérience, les personnes à qui l’on demandait d’élaborer un plan mental complet avant de jouer passaient bien plus de temps à planifier que celles qui n’avaient reçu aucune consigne, sans pour autant exécuter leur solution plus efficacement.',
          'C’est un chiffre utile, et qui rend humble. Deux sous-buts, chacun étant une courte série de coups, c’est à peu près aussi loin que la plupart des gens peuvent voir de façon fiable sur un casse-tête de ce genre, et chercher à planifier au-delà gaspille souvent de l’effort. Planifiez jusqu’au prochain point où le plateau change de nature, jouez-le, puis regardez à nouveau.',
        ],
      },
      'lightening-the-load': {
        title: 'Alléger la charge',
        paragraphs: [
          'On n’agrandit pas sa mémoire de travail en le souhaitant, mais on peut mieux la dépenser. L’outil le plus puissant est le chunking : traiter plusieurs coups comme une seule intention, par exemple « dégager le couloir de droite », pour qu’un plan plus long tienne dans le même espace. Notre article sur [la façon dont les experts voient les motifs](/blog/chunking-how-expert-puzzlers-see-patterns) explique comment se forment les chunks.',
          'Le second outil consiste à laisser le monde retenir des informations pour vous. Evan Risko et Sam Gilbert ont passé en revue la recherche sur le délestage cognitif : le recours à des gestes physiques ou à des aides extérieures, comme des notes, des rappels ou le fait de pencher la tête pour lire un texte incliné, afin de réduire les exigences de la réflexion interne. On se déleste davantage quand une tâche est exigeante et quand on doute de sa propre mémoire. Sur un plateau, le plateau lui-même est la mémoire externe. Suivre un trajet du doigt, ou jouer un coup d’essai puis le reprendre, libère une place dans votre tête.',
        ],
        bullets: [
          'Planifiez par chunks nommés de deux à quatre coups, pas coup par coup.',
          'Ne planifiez pas plus de deux chunks à l’avance, puis relisez le plateau.',
          'Servez-vous du plateau comme mémoire : montrez, suivez du doigt ou testez au lieu de tout simuler de tête.',
          'Réduisez le but : visez à libérer une couleur à la fois plutôt qu’à résoudre tout le plateau d’un coup.',
        ],
      },
      'keeping-the-load-on-the-puzzle': {
        title: 'Comment OutBrick garde la charge sur le casse-tête',
        paragraphs: [
          'Un bon casse-tête devrait dépenser votre mémoire de travail pour le casse-tête, pas pour de la comptabilité. OutBrick s’efforce de garder cette charge accessoire basse. Chaque brique affiche sa couleur et, avec le mode daltonien activé par défaut, un symbole assorti : vous ne gaspillez pas une place en mémoire à retenir quelle teinte voisine est laquelle ; les raisons en sont exposées dans [pourquoi la couleur ne doit jamais être le seul indice d’un casse-tête](/blog/color-shape-accessibility). Les portes font respecter elles-mêmes la règle des couleurs, l’objectif et la limite de coups restent à l’écran, et rien n’est chronométré : vous ne gardez jamais un plan en tête tout en surveillant une horloge.',
          'Il reste la partie difficile pour laquelle vous êtes venu : les positions, les obstacles, l’ordre. Quand un plateau semble impossible, demandez-vous à quel type de difficulté vous faites face. Si c’est un problème de recherche, continuez à lire le plateau. Si c’est un problème de mémoire, et que vous vous surprenez à perdre vos plans à mi-chemin, raccourcissez le plan. La [page consacrée à l’accessibilité](/accessibility) liste d’autres façons d’adapter le jeu à votre manière de jouer, et le [plateau dans le navigateur](/play) permet de s’entraîner vite à planifier par chunks.',
        ],
      },
    },
    pullQuote: 'Sur un plateau, le plateau lui-même est la mémoire externe.',
    faqs: [
      { question: 'Combien d’éléments la mémoire de travail peut-elle retenir ?', answer: 'Les estimations varient, mais une synthèse très citée l’évalue à environ quatre chunks chez l’adulte quand on empêche la répétition et le regroupement. Regrouper des éléments en chunks plus grands et porteurs de sens permet d’en retenir davantage.' },
      { question: 'Pourquoi certains casse-têtes semblent-ils impossibles alors qu’ils ont une solution ?', answer: 'Souvent parce qu’ils demandent de garder en tête plus de choses à la fois que la mémoire de travail ne le permet. Planifier par chunks, se servir du plateau comme mémoire externe et avancer vers un petit but à la fois peut les rendre abordables.' },
      { question: 'Combien de coups à l’avance peut-on planifier ?', answer: 'Dans une étude sur la tour de Londres, la plupart des gens planifiaient avec précision jusqu’à deux sous-buts à l’avance, mais pas trois. Planifier par courtes étapes puis relire le plateau est généralement plus efficace.' },
      { question: 'Qu’est-ce que la théorie de la charge cognitive ?', answer: 'La théorie de la charge cognitive, développée par John Sweller, pose que les informations nouvelles doivent passer par une mémoire de travail limitée, si bien que les tâches et l’enseignement doivent éviter de gaspiller cette capacité. Elle est née de travaux montrant que certaines stratégies de résolution consomment tant de capacité qu’il en reste peu pour apprendre.' },
    ],
  },

  'deliberate-practice-for-puzzle-games': {
    title: 'Pratique délibérée pour joueurs occasionnels : ce qui aide',
    dek: 'La pratique compte, mais moins que ne le dit la règle des 10 000 heures. Pratique délibérée et joueurs en ligne : ce qui aide à progresser.',
    imageAlt: 'Poppy et sa baguette avec Moss et sa ceinture à outils à côté d’un iPhone affichant la Ville des cerisiers en fleurs sur la carte du Voyage d’OutBrick',
    tags: ['pratique délibérée', 'expertise', 'astuces casse-tête', 'comment résoudre un casse-tête', 'recherche'],
    intro: 'Pas besoin de devenir grand maître pour vouloir progresser. La plupart des gens qui font des casse-têtes quelques minutes par jour aimeraient tout de même vider des plateaux plus durs, gâcher moins de coups et se sentir bloqués moins souvent. La science de l’expertise a beaucoup à dire sur la progression, en grande partie autour de l’idée de pratique délibérée. Elle connaît aussi un vif débat sur la portée de cette idée. Voici ce qui tient, et comment cela se traduit pour un joueur occasionnel muni d’un téléphone et de dix minutes de libre.',
    keyTakeaways: [
      'La pratique délibérée, un effort ciblé sur des faiblesses précises avec retour d’information, aide ; mais une grande méta-analyse a montré qu’elle expliquait environ un quart des écarts de performance dans les jeux, pas la totalité.',
      'Une étude portant sur plus de 850 000 joueurs en ligne a associé le fait d’espacer la pratique, et d’explorer tôt, à de meilleures performances ultérieures.',
      'Pour les joueurs occasionnels, les ingrédients utiles sont modestes : un objectif clair, un retour honnête, un instant de réflexion et du temps entre les séances.',
    ],
    sections: {
      'what-deliberate-practice-means': {
        title: 'Ce que signifie la pratique délibérée',
        paragraphs: [
          'En 1993, Anders Ericsson, Ralf Krampe et Clemens Tesch-Römer ont publié une étude sur des violonistes d’une académie de musique de Berlin. Les élèves jugés les plus accomplis avaient, selon leurs propres estimations, accumulé bien plus d’heures de pratique solitaire que ceux jugés moins accomplis. Les auteurs ont proposé que la performance experte résulte principalement de la pratique délibérée : une activité exigeante conçue spécifiquement pour progresser, généralement guidée par un professeur, centrée sur les faiblesses et poursuivie pendant de nombreuses années.',
          'La distinction qui compte pour tout le monde est celle entre pratiquer et jouer. La pratique délibérée ne consiste pas simplement à faire beaucoup l’activité. Elle consiste à travailler, à dessein, les points sur lesquels on est mauvais, et à vérifier si l’on a progressé. Un pianiste qui joue ses morceaux préférés profite du piano. Un pianiste qui rejoue lentement les mêmes quatre mesures jusqu’à ce que le doigté soit juste s’entraîne.',
        ],
      },
      'how-much-practice-explains': {
        title: 'Quelle part la pratique explique-t-elle ?',
        paragraphs: [
          'L’idée est devenue populaire sous le nom de « règle des 10 000 heures », que ses auteurs n’ont jamais proposée comme une règle. Des chercheurs ont ensuite entrepris de mesurer quelle part des différences entre individus la pratique explique réellement. En 2014, Brooke Macnamara, David Hambrick et Frederick Oswald ont regroupé des études de nombreux domaines. La pratique délibérée expliquait environ 26 % de la variance de performance dans les jeux, 21 % en musique, 18 % dans le sport, 4 % dans l’éducation et moins de 1 % dans les métiers. Leur conclusion : la pratique est importante, mais pas autant qu’on l’avait affirmé.',
          'En 2019, Macnamara et Megha Maitra ont refait l’étude originale sur les violonistes selon un protocole en double aveugle. Ils n’ont pas reproduit son résultat central, à savoir que la pratique accumulée distinguait chaque niveau de compétence. Le lien entre pratique et compétence restait substantiel, mais nettement plus faible qu’en 1993.',
          'Les échecs, proches cousins des casse-têtes, sont le domaine où la pratique paraît la plus déterminante. Sur deux grands échantillons de joueurs de tournoi, Neil Charness et ses collègues ont constaté que l’étude sérieuse en solitaire était, parmi les activités mesurées, le meilleur prédicteur du classement, et que les activités liées aux échecs expliquaient ensemble environ 40 % de la variance de niveau. Les grands maîtres déclaraient environ 5 000 heures d’étude sérieuse en solitaire au cours de leurs dix premières années de jeu, près de cinq fois le chiffre des joueurs de niveau intermédiaire. La pratique compte énormément dans les jeux ; simplement, elle n’explique pas tout.',
        ],
        note: 'La plupart de ces chiffres reposent sur les estimations que les gens font de leur pratique passée, un exercice difficile à réussir avec précision. Une partie du désaccord entre chercheurs porte sur les définitions : ce que l’on compte comme pratique délibérée change la part qu’elle semble expliquer.',
      },
      'lessons-from-online-players': {
        title: 'Les leçons de 854 064 joueurs',
        paragraphs: [
          'La plupart des recherches sur la pratique s’appuient sur le souvenir que les gens ont de leur entraînement. Tom Stafford et Michael Dewar ont contourné le problème grâce aux données de 854 064 joueurs d’Axon, un jeu en ligne simple qui exige une perception et des décisions rapides. Chaque partie étant enregistrée, ils pouvaient relier directement l’historique de pratique à la performance.',
          'Deux résultats sont utiles à tous. D’abord, l’espacement comptait : les joueurs qui étalaient leur pratique sur une plus longue période atteignaient des scores plus élevés que ceux qui concentraient la même quantité de jeu, ce qui confirmait hors du laboratoire ce que les expériences montraient depuis longtemps. Ensuite, les joueurs dont les premiers scores variaient davantage réussissaient mieux par la suite. Les auteurs ont rattaché cela à l’arbitrage entre exploration et exploitation : essayer différentes approches au début semble payant, même si cela coûte quelques points sur le moment.',
          'Axon est un jeu de réflexes rapides, pas un casse-tête, donc les détails ne se transposent peut-être pas. Mais les deux résultats concordent avec ce que l’on sait de l’apprentissage, et tous deux sont faciles à mettre en pratique.',
        ],
      },
      'a-ten-minute-practice-plan': {
        title: 'Un programme de dix minutes par jour',
        paragraphs: [
          'Personne n’a besoin d’un coach pour progresser aux casse-têtes, mais les ingrédients de la pratique délibérée se transposent bien à petite échelle.',
        ],
        bullets: [
          'Choisissez une faiblesse par séance : les coups gâchés en début de plateau, par exemple, ou le plan perdu en cours de route.',
          'Utilisez un retour honnête. Un objectif de coups est un retour, et remarquer à quel moment vous avez cherché l’annulation en est un aussi.',
          'Après un plateau difficile vidé, passez trente secondes à vous demander ce que vous feriez autrement la prochaine fois.',
          'Espacez. Plusieurs courtes séances dans la semaine valent mieux qu’une longue.',
          'Explorez tôt. Sur un nouveau type de plateau, essayez plusieurs ouvertures avant de vous fixer sur une.',
          'Restez à portée. Les plateaux un peu au-delà de votre zone de confort en apprennent plus que ceux qui la dépassent de loin.',
        ],
        note: 'Le quatrième point est celui où les joueurs occasionnels ont déjà un avantage : quelques minutes par jour, c’est exactement la pratique espacée que privilégie la recherche. Le [plateau du jour](/daily) propose chaque jour le même casse-tête à tout le monde, un rendez-vous tout trouvé. Et quand vous êtes bloqué, [prendre du recul](/blog/stuck-on-a-puzzle-incubation-effect) fait partie du programme, ce n’est pas un échec.',
      },
      'keep-it-play': {
        title: 'Que cela reste un jeu',
        paragraphs: [
          'Tout cela comporte un risque. La pratique délibérée, telle qu’Ericsson et ses collègues l’ont définie, n’est pas agréable en soi : c’est du travail. Un jeu de casse-tête transformé en programme d’entraînement peut cesser d’être ce que vous aimiez. La plupart des joueurs occasionnels s’en tirent mieux avec une version légère : profitez de la plupart des plateaux, et entraînez-vous sur quelques-uns.',
          'C’est à peu près ainsi qu’OutBrick est fait pour être joué. Ses 2 000 plateaux sont répartis en 100 chapitres, une forme de progression dont nous avons parlé dans [comment construire une courbe de difficulté plus bienveillante](/blog/kinder-difficulty-curve). L’objectif de coups et les étoiles vous donnent un retour si vous le souhaitez, et se font oublier sinon. Et les motifs que vous construisez en chemin, décrits dans notre article sur le [chunking](/blog/chunking-how-expert-puzzlers-see-patterns), sont le vrai fruit de la pratique : pas un chiffre, mais une façon de voir le plateau.',
        ],
      },
    },
    pullQuote: 'La pratique compte énormément dans les jeux ; simplement, elle n’explique pas tout.',
    faqs: [
      { question: 'Qu’est-ce que la pratique délibérée ?', answer: 'La pratique délibérée est un entraînement ciblé et exigeant, orienté vers des faiblesses précises, avec retour d’information, plutôt que la simple répétition d’une activité que l’on maîtrise déjà. L’idée vient des travaux d’Anders Ericsson et de ses collègues sur la performance experte.' },
      { question: 'La règle des 10 000 heures est-elle vraie ?', answer: 'Pas en tant que règle. Une méta-analyse de 2014 a montré que la pratique délibérée expliquait environ 26 % des écarts de performance dans les jeux, et moins dans la plupart des autres domaines. La pratique compte, mais ce n’est pas le seul facteur.' },
      { question: 'À quelle fréquence s’entraîner aux casse-têtes pour progresser ?', answer: 'Des séances courtes et espacées sont un bon pari. Une étude portant sur plus de 850 000 joueurs en ligne a montré qu’étaler la pratique était associé à de meilleurs scores ultérieurs que la concentrer.' },
      { question: 'Comment progresser aux jeux de casse-tête ?', answer: 'Travaillez une faiblesse à la fois, servez-vous de retours comme l’objectif de coups, prenez un instant de réflexion après les plateaux difficiles et répartissez votre jeu sur la semaine. Sur de nouveaux types de plateaux, essayez plusieurs approches avant de vous fixer.' },
    ],
  },

  'aha-moment-insight-brain': {
    title: 'Le moment eurêka : ce que fait le cerveau lors de l’insight',
    dek: 'Le déclic d’un casse-tête résolu laisse une trace dans le cerveau. L’insight, pourquoi l’eurêka voit souvent juste, et quand il se trompe.',
    imageAlt: 'Peach et Vio de part et d’autre d’un iPhone affichant l’Usine à boutons sur la carte du Voyage d’OutBrick, avec des briques jaunes et rouges flottant à côté',
    tags: ['insight', 'moment eurêka', 'résolution de problèmes', 'psychologie cognitive', 'recherche jeux de casse-tête'],
    intro: 'Il y a deux façons de résoudre un casse-tête. Parfois, on avance vers la réponse pas à pas, avec le sentiment régulier de s’en approcher. D’autres fois, rien ne semble bouger, puis d’un coup la réponse est là, évidente et complète, accompagnée d’une décharge de plaisir. Cette seconde expérience, le moment eurêka, fascine les psychologues depuis un siècle. Depuis une vingtaine d’années, les neurosciences commencent à montrer qu’il ne s’agit pas d’un simple sentiment posé sur la pensée ordinaire, mais d’un chemin différent vers la solution.',
    keyTakeaways: [
      'Les solutions par insight arrivent soudainement, sans le sentiment progressif de s’approcher qui caractérise la résolution pas à pas.',
      'Les enregistrements cérébraux montrent une bouffée d’activité distincte dans le lobe temporal droit juste avant que les gens annoncent une solution par insight.',
      'Les réponses eurêka sont plus souvent justes que les réponses analytiques, mais le sentiment peut aussi accompagner de mauvaises réponses et rendre les idées voisines plus vraies qu’elles ne le sont.',
    ],
    sections: {
      'insight-arrives-without-warning': {
        title: 'L’insight arrive sans prévenir',
        paragraphs: [
          'Dans une étude classique de 1987, Janet Metcalfe et David Wiebe ont demandé à des participants d’évaluer, à intervalles réguliers pendant qu’ils travaillaient, à quel point ils se sentaient proches de la solution : un « sentiment de chaleur », comme au jeu du chaud et froid. Sur des problèmes d’algèbre ordinaires, la chaleur montait régulièrement à l’approche de la réponse. Sur les problèmes d’insight, non. Les gens avaient froid, puis froid, puis froid, et soudain ils tenaient la réponse. Vu de l’intérieur, l’insight ne prévenait presque pas.',
          'Ce schéma est la signature comportementale de l’insight. Il suggère que le travail décisif se fait à un endroit que la personne ne peut pas surveiller, et que la solution parvient à la conscience d’un seul bloc plutôt que morceau par morceau.',
        ],
      },
      'what-the-brain-does': {
        title: 'Ce que fait le cerveau à cet instant',
        paragraphs: [
          'Mark Jung-Beeman, John Kounios et leurs collègues ont utilisé des énigmes de mots composés pour saisir ce moment sur le vif. Chaque énigme donne trois mots anglais, comme pine, crab et sauce, et demande un quatrième qui forme un mot composé ou une expression avec chacun des trois (apple). Après chaque solution, les participants indiquaient si elle leur était venue par insight ou par recherche méthodique.',
          'En imagerie cérébrale, les solutions par insight s’accompagnaient d’une activité accrue dans une région du lobe temporal droit, le gyrus temporal supérieur antérieur, qui participe à la mise en relation de significations éloignées. En EEG, la même zone montrait une brusque bouffée d’activité gamma à haute fréquence, commençant environ un tiers de seconde avant que les participants annoncent une solution par insight. Les deux types de solution mobilisaient un réseau en grande partie commun, mais l’éclair d’insight avait sa propre signature.',
          'La synthèse ultérieure de John Kounios et Mark Beeman complète le tableau. Autour des solutions par insight, l’attention a tendance à se tourner vers l’intérieur, comme si le cerveau atténuait brièvement les stimulations extérieures pour laisser émerger une idée faible. Les gens diffèrent aussi dans la fréquence à laquelle ils résolvent par insight, et ces différences apparaissent même dans l’activité cérébrale au repos. Le domaine est jeune, et la plupart des résultats viennent d’énigmes verbales plutôt que visuelles, mais les grandes lignes sont cohérentes.',
        ],
      },
      'changing-the-representation': {
        title: 'Comment naît l’insight : changer de représentation',
        paragraphs: [
          'Les psychologues cognitifs expliquent l’insight comme un changement dans la façon de se représenter un problème. Günther Knoblich, Stellan Ohlsson et leurs collègues l’ont testé avec l’arithmétique des allumettes : des égalités fausses, formées d’allumettes, qui deviennent vraies en déplaçant une seule allumette. Les problèmes devenaient bien plus difficiles quand la solution exigeait d’assouplir une règle que l’on avait supposée sans s’en rendre compte, ou de défaire un chunk familier, par exemple voir un X comme deux allumettes distinctes plutôt que comme un seul symbole.',
          'Cela relie l’insight au [chunking](/blog/chunking-how-expert-puzzlers-see-patterns). Les chunks qui rendent les experts rapides sont ceux-là mêmes qu’il faut parfois briser pour qu’une nouvelle solution apparaisse. Une impasse sur un plateau signifie souvent que vous traitez comme fixe quelque chose qui ne l’est pas : une brique dont vous avez décidé qu’elle devait sortir en dernier, ou un couloir dont vous avez décidé qu’il devait rester libre.',
          'Cela suggère aussi pourquoi les pauses aident. S’éloigner peut desserrer suffisamment une hypothèse pour que la représentation bascule, ce qui explique que tant de moments eurêka surviennent après une pause. Nous abordons cela dans [bloqué sur un casse-tête ? Faire une pause, selon la science](/blog/stuck-on-a-puzzle-incubation-effect).',
        ],
      },
      'can-you-trust-the-aha': {
        title: 'Peut-on se fier à l’eurêka ?',
        paragraphs: [
          'Carola Salvi, Mark Beeman et leurs collègues ont comparé solutions par insight et solutions analytiques dans quatre expériences portant sur des problèmes verbaux, visuels et mixtes. Dans chaque expérience, les solutions que les participants qualifiaient d’insight étaient en moyenne plus justes que leurs solutions analytiques. Les réponses analytiques comptaient relativement plus d’erreurs, ce qui laisse penser que l’on soumet parfois une analyse inachevée en guise de pari, alors que l’insight a tendance à arriver complet ou pas du tout.',
          'Mais le sentiment n’est pas une garantie. Amory Danek et Jennifer Wiley ont demandé à 70 personnes de trouver comment des tours de magie étaient réalisés et d’évaluer chacune de leurs solutions. Certaines solutions fausses s’accompagnaient elles aussi d’une expérience eurêka, ce que les chercheuses ont appelé de faux insights. Les solutions justes tendaient à procurer des sentiments de plaisir, de soudaineté et de certitude plus forts, mais le recouvrement était réel.',
          'Ruben Laukkonen et ses collègues ont montré jusqu’où ce sentiment peut s’égarer. Dans une expérience préenregistrée portant sur 300 participants, des affirmations étaient jugées plus probablement vraies lorsqu’elles apparaissaient à côté d’une anagramme que la personne venait de résoudre, même quand elles étaient fausses, et l’effet était plus fort quand les gens rapportaient un eurêka. L’éclat de l’insight peut rejaillir sur tout ce qui se trouve à proximité.',
        ],
      },
      'insight-on-a-puzzle-board': {
        title: 'L’insight sur un plateau',
        paragraphs: [
          'Sur un puzzle coulissant, la leçon est de savourer l’eurêka, puis de le vérifier. Un coup qui paraît soudain brillant l’est généralement, mais il ne coûte rien de le suivre deux étapes plus loin avant de vous engager, surtout quand un objectif de coups est en jeu.',
          'Vous pouvez aussi provoquer le déclic. Face à une impasse, listez les hypothèses que vous faites sur le plateau, à voix haute si cela aide : cette brique doit sortir en dernier, ce couloir doit rester ouvert, la clé doit passer en premier. Puis abandonnez-les une à une et regardez de nouveau. C’est l’assouplissement des contraintes décrit par Knoblich et Ohlsson, pratiqué à dessein.',
          'Les concepteurs de casse-têtes bâtissent leurs plateaux autour de ce déclic. Dans OutBrick, les plateaux les plus satisfaisants sont souvent ceux où un glissement que vous aviez écarté se révèle tout débloquer, parce qu’il change ce que vous pensiez être l’enjeu du plateau. Les règles sont volontairement simples, les briques glissent jusqu’à ce que quelque chose les arrête et sortent par la porte de leur couleur, pour que la surprise tienne à la disposition plutôt qu’à des règles cachées. Les jeux qui laissent place à ce genre de découverte enseignent par la curiosité plutôt que par l’instruction, un thème que nous avons exploré dans [quand un jeu enseigne la curiosité sans faire la leçon](/blog/games-teach-curiosity-without-lecture).',
          'Si vous voulez partir vous-même à la chasse au déclic, le [plateau dans le navigateur](/play) est un moyen rapide de découvrir un plateau que vous n’avez jamais vu.',
        ],
      },
    },
    pullQuote: 'L’éclat de l’insight peut rejaillir sur tout ce qui se trouve à proximité.',
    faqs: [
      { question: 'Que se passe-t-il dans le cerveau lors d’un moment eurêka ?', answer: 'Des études utilisant des énigmes de mots ont trouvé une activité accrue dans une région du lobe temporal droit pour les solutions par insight, ainsi qu’une bouffée d’activité gamma à haute fréquence dans cette zone environ un tiers de seconde avant que les participants annoncent la réponse.' },
      { question: 'Les solutions par insight sont-elles plus justes que les solutions analytiques ?', answer: 'Généralement. Dans quatre expériences, les réponses que les participants qualifiaient d’insight étaient en moyenne plus justes que leurs réponses analytiques, même si le sentiment d’eurêka peut aussi accompagner de mauvaises réponses.' },
      { question: 'Pourquoi les solutions me viennent-elles d’un coup ?', answer: 'L’insight semble impliquer un changement dans la façon de se représenter le problème, comme abandonner une hypothèse ou défaire un motif familier. Comme ce changement se produit hors de la conscience, la réponse semble arriver d’un seul coup.' },
      { question: 'Un moment eurêka peut-il être faux ?', answer: 'Oui. Dans une étude où les participants devaient trouver comment des tours de magie étaient réalisés, certaines solutions fausses s’accompagnaient d’un eurêka, même si les solutions justes tendaient à paraître plus fortes et plus certaines.' },
    ],
  },

  'why-finish-a-hard-puzzle': {
    title: 'Casse-tête et persévérance : pourquoi finir un plateau dur',
    dek: 'Un effort qui mène à la solution apprend plus qu’une victoire facile. Difficultés désirables, effort et échec productif.',
    imageAlt: 'Poppy et Zippy qui fait un clin d’œil à côté d’un iPhone affichant la Place des fêtes sur la carte du Voyage d’OutBrick, sur une grille de briques indigo',
    tags: ['difficultés désirables', 'apprendre de ses erreurs', 'résolution de problèmes', 'motivation', 'recherche jeux de casse-tête'],
    intro: 'Tout amateur de casse-têtes connaît le plateau qui ne cède pas. Vous avez essayé les coups évidents, puis les moins évidents, et la tentation est de passer au suivant, de chercher la solution ou de laisser tomber le jeu pour de bon. Parfois, arrêter est la bonne décision. Mais il existe un argument, solidement appuyé par la recherche sur l’apprentissage, pour rester avec un plateau difficile un peu plus longtemps que ce qui semble confortable. L’effort n’est pas un droit d’entrée que l’on paie avant que l’apprentissage commence. Souvent, c’est l’apprentissage lui-même.',
    keyTakeaways: [
      'Les conditions qui rendent l’apprentissage plus pénible, comme espacer la pratique ou trouver les réponses soi-même, produisent souvent un meilleur apprentissage à long terme.',
      'L’impression de bien réussir pendant l’entraînement est un guide peu fiable de ce que l’on apprend vraiment.',
      'L’effort peut donner plus de valeur à un résultat, mais dans une série d’études seulement quand l’effort aboutissait : le but est un plateau difficile que l’on peut finir.',
    ],
    sections: {
      'desirable-difficulties': {
        title: 'Les difficultés désirables',
        paragraphs: [
          'Robert et Elizabeth Bjork ont forgé l’expression « difficultés désirables » pour désigner une famille de résultats contre-intuitifs : certaines conditions qui ralentissent l’apprentissage et le rendent plus pénible produisent une meilleure rétention et un meilleur transfert à long terme. Espacer la pratique au lieu de la concentrer, mélanger différents types de problèmes, se tester plutôt que relire, et produire une réponse au lieu de la recevoir toute faite : tout cela paraît moins efficace sur le moment et tend à mieux marcher ensuite.',
          'Dans leur synthèse de 2020, ils insistent sur le mot « désirable ». Une difficulté n’aide que si l’apprenant peut y répondre avec succès. Un problème qui vous dépasse de loin n’est pas une difficulté désirable ; c’est un mur. Le juste milieu est un défi qui demande un vrai effort tout en restant à portée.',
          'Pour un amateur de casse-têtes, la traduction est simple. Un plateau qui vous fait réfléchir plusieurs minutes, essayer trois idées et en écarter deux fait exactement ce que décrivent les difficultés désirables. Un plateau qui vous laisse tâtonner au hasard pendant vingt minutes, non : il a cessé de vous donner prise.',
        ],
      },
      'learning-versus-performance': {
        title: 'Se sentir bloqué ne veut pas dire ne pas apprendre',
        paragraphs: [
          'La difficulté est désagréable en partie parce que nous jugeons notre apprentissage à notre performance du moment. Nicholas Soderstrom et Robert Bjork ont passé en revue des décennies de recherche montrant que les deux peuvent se dissocier. On peut apprendre sans aucun changement visible de performance, et des conditions qui dopent la performance pendant l’entraînement peuvent ne produire aucun apprentissage durable. On prend régulièrement un entraînement fluide et facile pour le signe que l’on apprend bien.',
          'Sur un plateau, c’est libérateur. Les minutes passées bloqué, à essayer des approches qui ne marchent pas, ne sont pas perdues simplement parce que le plateau reste irrésolu. Vous cartographiez les coups qui ne mènent nulle part, et pourquoi, et cette carte contribue à rendre le prochain plateau difficile plus facile.',
        ],
      },
      'productive-failure': {
        title: 'L’échec productif',
        paragraphs: [
          'La recherche en éducation a testé une version plus tranchée de l’idée. Dans l’échec productif, développé par Manu Kapur, les élèves s’attaquent à des problèmes avant qu’on leur ait appris à les résoudre, échouent généralement, puis reçoivent un enseignement. Une méta-analyse de 2021 menée par Tanmay Sinha et Kapur a regroupé 53 études et trouvé un avantage modéré à la résolution de problèmes d’abord plutôt qu’à l’enseignement d’abord, et un avantage plus grand quand le dispositif suivait de près les principes de l’échec productif.',
          'La même analyse a relevé des limites bonnes à connaître. Pour les plus jeunes enfants, en gros du CE1 au CM2, et pour les compétences générales non liées à une matière, l’enseignement d’abord l’emportait. Peiner n’est pas bon en soi. Cela marche quand les apprenants ont assez d’éléments pour avancer, et quand ce qui suit les aide à donner un sens à ce qu’ils ont tenté.',
          'Les casse-têtes ont une version intégrée de cette seconde étape. Quand vous trouvez enfin la solution d’un plateau contre lequel vous vous êtes battu, vos tentatives ratées prennent soudain sens. Vous voyez pourquoi chacune a échoué, et c’est le moment où l’effort se change en compréhension.',
        ],
      },
      'why-finishing-matters': {
        title: 'Pourquoi finir compte',
        paragraphs: [
          'L’effort est d’ordinaire traité comme un coût, quelque chose que l’on évite quand on peut. Michael Inzlicht, Amitai Shenhav et Christopher Olivola ont passé en revue les données montrant qu’il est aussi une source de valeur : le même résultat peut paraître plus gratifiant quand il a demandé un effort, et l’on choisit parfois des choses précisément parce qu’elles sont difficiles. Ils appellent cela le paradoxe de l’effort.',
          'Il y a une condition, et c’est elle qui donne son titre à cet article. Michael Norton, Daniel Mochon et Dan Ariely ont constaté que les gens accordaient plus de valeur aux objets qu’ils avaient fabriqués eux-mêmes, des boîtes IKEA aux origamis en passant par les Lego, qu’ils ne l’auraient fait autrement. Mais l’effet disparaissait quand ils ne terminaient pas, ou quand ils construisaient quelque chose puis le démontaient. Le labeur ne menait à l’amour que lorsqu’il allait jusqu’au bout.',
          'C’est l’argument pour finir un plateau difficile plutôt que de l’abandonner à quatre-vingts pour cent. La satisfaction d’un plateau difficile vidé est réelle, et elle semble dépendre du fait de l’avoir vidé.',
        ],
      },
      'perseverance-without-the-grind': {
        title: 'Persévérer sans s’user',
        paragraphs: [
          'La persévérance a été popularisée sous le nom de grit, la « niaque », et cette idée mérite quelques précautions. Marcus Credé et ses collègues ont regroupé 88 échantillons couvrant plus de 66 000 personnes et constaté que le grit n’était que modérément lié à la performance et très fortement lié à la conscienciosité, un trait de personnalité établi de longue date. Des deux composantes du grit, la persévérance dans l’effort s’en tirait mieux que la constance des intérêts. S’accrocher aide ; ce n’est simplement pas un trait magique.',
          'La version pratique est modeste. Restez avec un plateau difficile au-delà de la première bouffée de frustration. Quand vous remarquez que vous vous répétez, [prenez du recul](/blog/stuck-on-a-puzzle-incubation-effect) plutôt que d’abandonner. Servez-vous des outils que le jeu vous donne pour apprendre de vos erreurs, ce à quoi [sert l’annulation](/blog/why-undo-makes-you-a-better-puzzle-solver). Et si un plateau vous dépasse vraiment aujourd’hui, gardez-le pour un autre jour ; une difficulté désirable doit être à votre portée.',
          'OutBrick est conçu pour que persévérer coûte peu. Il n’y a pas de chrono, la première annulation de chaque plateau est gratuite, et une vie ne part que lorsqu’une tentative se termine sans que le plateau soit vidé, jamais pour ouvrir ou vider un plateau ; les conditions complètes figurent dans le [registre du jeu équitable sur la page d’accueil](/#fair). Les 2 000 plateaux ont tous été vidés par un solveur avant leur sortie : un plateau qui paraît impossible a donc bien une issue. Le [plateau du jour](/daily) est un bon terrain d’entraînement : il reste le même toute la journée, donc s’il vous résiste au petit-déjeuner, il vous attendra encore plus tard.',
        ],
      },
    },
    pullQuote: 'Le labeur ne menait à l’amour que lorsqu’il allait jusqu’au bout.',
    faqs: [
      { question: 'Vaut-il mieux peiner sur un casse-tête ou chercher la réponse ?', answer: 'Peiner d’abord tend à aider, tant que le problème reste à portée. La recherche sur les difficultés désirables et l’échec productif suggère que s’attaquer à un problème avant de voir la solution mène souvent à un meilleur apprentissage à long terme.' },
      { question: 'Pourquoi résoudre un casse-tête difficile est-il si satisfaisant ?', answer: 'L’effort peut ajouter de la valeur à un résultat, si bien que l’on tient souvent davantage à ce pour quoi on a travaillé. Cet effet semble dépendre du fait de finir : dans une série d’études, il disparaissait quand les gens ne terminaient pas ce qu’ils construisaient.' },
      { question: 'Quand abandonner un casse-tête difficile ?', answer: 'Quand vous répétez les mêmes tentatives sans rien apprendre de nouveau, faites une pause plutôt que d’abandonner. Si le plateau vous dépasse encore de loin ensuite, gardez-le pour un autre jour, car une difficulté n’aide que si vous pouvez finir par la surmonter.' },
      { question: 'Est-ce mal de chercher la solution d’un casse-tête ?', answer: 'Pas toujours. Si vous avez vraiment travaillé sur un plateau et que vous n’apprenez plus rien, une solution peut transformer l’effort en compréhension, un peu comme l’enseignement après un échec productif. Elle aide surtout après une vraie tentative, pas avant.' },
      { question: 'Le grit prédit-il la réussite ?', answer: 'Seulement modérément. Une méta-analyse de 88 échantillons a montré que le grit était modestement lié à la performance et très fortement lié à la conscienciosité, la persévérance dans l’effort en étant la composante la plus utile.' },
    ],
  },
};
