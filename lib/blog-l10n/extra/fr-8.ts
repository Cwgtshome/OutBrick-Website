import type { ExtraGuides } from '../../i18n/blog';
import { appStoreUrl } from '../../app-store-url.ts';

/** Complete French localization of journal batch 8. */
export const fr8: ExtraGuides = {
  'block-blast-plus-vs-outbrick': {
    title: 'Block Blast!+ ou OutBrick : deux puzzles de blocs',
    dek: 'Comparez leurs vraies règles : placer des formes pour effacer des lignes ou faire glisser des briques vers les sorties, puis choisir comment payer.',
    imageAlt:
      'Briques et personnages OutBrick colorés disposés autour d’un téléphone sur un fond géométrique sombre',
    tags: [
      'jeux de puzzle',
      'puzzles de tri de blocs',
      'conception de jeux',
      'habitudes de jeu',
      'jeux mobiles',
    ],
    intro:
      'Une grille de blocs colorés peut cacher deux puzzles très différents. Dans l’un, vous choisissez où placer une nouvelle forme. Dans l’autre, toutes les pièces sont déjà en place et vous devez trouver leur sortie. Block Blast!+ et OutBrick rendent cette distinction utile : tous deux récompensent la lecture de l’espace, mais posent des questions différentes. Si vous cherchez un jeu comme Block Blast, la réponse la plus utile n’est pas une liste de captures similaires, mais une explication de vos actions réelles. Ce guide des règles repose sur des sources consultées le 30 septembre 2026 et vient de l’équipe d’OutBrick. Nous n’avons ni fait de comparaison directe ni mesuré les préférences des joueurs.',
    keyTakeaways: [
      'Block Blast!+ consiste à placer des formes et effacer des rangées ou colonnes complètes ; OutBrick consiste à faire rentrer des briques existantes par les portes assorties et à les échanger pour en aligner trois ou plus.',
      'Block Blast!+ est l’édition Apple Arcade. N’appliquez pas ses conditions d’abonnement, publicité ou achats à l’application standard Block Blast!, dont la fiche est distincte.',
      'Préférez le placement si vous aimez ajuster les formes et préserver l’espace ; le glissement si vous aimez les trajets, points d’arrêt et ordre des coups.',
    ],
    sections: {
      'placing-versus-routing': {
        title: 'La première différence est le verbe',
        paragraphs: [
          'Apple décrit Block Blast!+ comme un jeu où l’on ajuste des blocs sur une grille, complète des rangées et colonnes et construit des combinaisons (Apple, 2026). Sa question centrale est : « Où placer cette forme ? » Une zone vide permet de poser quelque chose. Une ligne presque complète peut rendre de l’espace. Vous comparez l’empreinte d’une forme aux emplacements disponibles.',
          'La question d’OutBrick est : « Qu’est-ce qui doit bouger avant que cette brique sorte ? » Vous sélectionnez une brique déjà sur le plateau et la faites glisser. Elle s’arrête là où vous la lâchez, rentre par la porte de sa couleur ou s’échange avec une voisine, et trois briques d’une couleur alignées ou plus disparaissent. Sur les plateaux classiques, toujours jouables dans le navigateur, une brique avance jusqu’à un obstacle : une zone vide peut être un trajet, mais aussi laisser la brique aller plus loin que prévu. Plus d’espace libre n’est pas automatiquement une meilleure position.',
          'Considérez une longue voie droite. Dans un puzzle de placement, la garder ouverte peut réserver la place pour une longue forme. Dans un puzzle de glissement, elle peut emporter une brique au-delà du point nécessaire pour tourner. Une autre brique devra peut-être y servir de frein temporaire. Le même élément visuel change de sens stratégique parce que la règle de déplacement change son usage.',
          'Notre [introduction aux puzzles de blocs coulissants](/blog/how-to-solve-sliding-block-puzzles) détaille cette règle. Pour une vue plus large du placement, des pièces qui tombent et des trajets, voyez [pourquoi les jeux comme Tetris durent](/blog/games-like-tetris). Aucune règle n’est une version plus avancée de l’autre. Ce sont deux façons de rendre un espace limité intéressant.',
        ],
      },
      'two-ways-to-plan': {
        title: 'Deux façons de penser le prochain coup',
        paragraphs: [
          'Dans un puzzle de placement, examinez la forme proposée, ses emplacements possibles et le plateau qui restera. Une position peut être légale mais gênante : elle laisse un petit trou malcommode ou consomme le seul espace adapté à une autre forme. Compléter une ligne attire parce que cela change la quantité et la forme de l’espace disponible. C’est un problème général de placement, pas la stratégie optimale de tous les modes Block Blast.',
          'Sur les plateaux classiques d’OutBrick, examinez tout le trajet de la brique sélectionnée et son point d’arrêt. Retirer un obstacle peut ouvrir la route d’une porte, mais le faire trop tôt peut supprimer la surface d’arrêt nécessaire à une autre brique. Un plan utile décrit donc des dépendances : la bleue doit s’arrêter ici avant que la rouge s’aligne avec sa sortie. Il faut réorganiser un système, pas simplement choisir une destination vide.',
          'Isaksen et al. (2017) ont distingué choix stratégique et exigences d’exécution dans des simulations de variantes de Tetris et Puzzle Bobble. Leur travail montre pourquoi une seule étiquette de difficulté peut cacher des besoins différents. Il n’étudiait ni Block Blast!+ ni OutBrick. Nous utilisons cette distinction pour demander si vous aimez décider d’un coup et si vous aimez l’exécuter.',
          'Cela compte si vous aimez les puzzles réfléchis mais pas un type de commande. Glisser une forme à un endroit et donner une direction à une brique existante sont deux interactions différentes. Les captures ne décident pas laquelle vous paraît plus claire. Essayez un exemple simple, lisez les instructions et observez le sens d’un coup refusé avant de considérer une commande inconnue comme preuve de difficulté excessive.',
        ],
      },
      'satisfaction-without-ranking': {
        title: 'Quel plaisir recherchez-vous ?',
        paragraphs: [
          'Certains aiment la satisfaction répétée d’une ligne qui disparaît. D’autres veulent une réussite finale dont ils découvrent peu à peu le trajet. Vous pouvez aimer les deux selon le moment. Cette distinction concerne la forme d’une séance agréable, sans juger les scores superficiels ou les plateaux finis intellectuellement supérieurs.',
          'Ryan et al. (2006) ont étudié la motivation dans quatre études et relié compétence et autonomie ressenties au plaisir et aux préférences. Ces résultats ne classent pas ces applications. Ils posent une question personnelle utile : comprenez-vous ce qui s’est passé et faites-vous des choix qui vous appartiennent ? Une règle familière peut donner vite ce sentiment ; une nouvelle peut demander quelques plateaux pour devenir lisible.',
          'Abuhamdeh et Csikszentmihalyi (2012) ont étudié le défi dans les échecs sur Internet et les activités quotidiennes. Son lien au plaisir variait selon motivation et activité. Cela invite à ne pas déclarer le puzzle le plus doux ou le plus difficile vainqueur universel. Pour construire un score, préserver l’espace peut captiver. Pour démêler une disposition délimitée, les portes assorties peuvent mieux convenir.',
          'Faites un test concret. Après une courte séance, nommez une décision aimée : réserver un espace, compléter une combinaison, construire un point d’arrêt ou trouver l’ordre de sortie. « J’ai aimé cette décision » renseigne davantage que « Je devrais aimer ce jeu populaire ». Vous pouvez aussi conclure qu’aucun ne convient pour le moment et poursuivre votre recherche.',
        ],
      },
      'arcade-and-standalone': {
        title: 'Vérifiez l’édition avant de comparer les coûts',
        paragraphs: [
          'Apple a annoncé que Block Blast!+ rejoindrait Apple Arcade le 3 septembre 2026, en présentant cette édition comme sans publicité ni achats intégrés (Apple, 2026). Cela concerne Block Blast!+. L’application standard Block Blast! a une fiche distincte ; le signe plus n’est pas décoratif s’il identifie un autre modèle de distribution. Vérifiez l’édition réellement traitée dans une recommandation, capture ou critique.',
          'L’accès Arcade dépend d’un abonnement et de ses conditions actuelles. OutBrick est une application App Store indépendante avec achats intégrés et publicité récompensée facultative. Elle comporte aussi vies et limites de coups. Ne transformez pas « gratuit à télécharger » en promesse d’accès, reprises ou extras tous gratuits, et n’appliquez pas les conditions d’un puzzle par abonnement à une app indépendante.',
          'Si vous êtes déjà abonné à Arcade, consultez la fiche actuelle de Block Blast!+ pour votre appareil et vos préférences. Sinon, examinez le catalogue et les conditions avant de payer pour un seul jeu. Pour OutBrick, notre [explication du jeu équitable](/#fair) détaille vies, annulation et publicité facultative. Une comparaison sert quand elle rend ces choix compréhensibles.',
          'OutBrick a supprimé Rush en version 4.2 ; sa règle actuelle utilise une limite de coups au lieu d’un chrono. Cela n’établit pas le rythme précis de chaque édition ou mode Block Blast. Lisez la description actuelle de l’édition à installer au lieu de déduire un chrono de son nom, du score ou de ses couleurs.',
        ],
      },
      'a-small-fit-test': {
        title: 'Un petit essai vaut mieux qu’un verdict général',
        paragraphs: [
          'D’abord, reformulez la règle. Placement : mettre une forme dans un espace autorisé et viser une ligne complète. OutBrick : faire glisser une brique vers sa porte assortie, ou l’échanger pour aligner trois briques de sa couleur ou plus. Jouez ensuite assez lentement pour voir si l’action confirme l’explication. La comparaison doit vous aider à choisir le bon puzzle, pas à supporter le mauvais.',
          'Iacovides et al. (2015) ont utilisé plusieurs études de cas, avec observation et entretiens, pour examiner apprentissage et implication. Leurs récits reliaient les déclics à l’implication, surtout quand les joueurs se sentaient responsables de leur progression. Ces résultats qualitatifs viennent d’autres jeux. Ils encouragent à observer votre compréhension sans promettre qu’un bref essai révèle une préférence universelle.',
          `Vous pouvez [essayer un plateau OutBrick dans le navigateur](/play) pour examiner le glissement classique jusqu’à l’arrêt. La démonstration présente l’ancienne règle, sans les échanges et alignements du jeu de l’App Store ; elle ne reproduit pas toutes les fonctions, coûts ou comportements d’accessibilité de l’app installée. Si elle vous plaît, [consultez OutBrick sur l’App Store](${appStoreUrl('journal-block-blast-comparison')}) et vérifiez les exigences de l’appareil et les achats avant le téléchargement.`,
          'Le résultat utile peut être une phrase ordinaire : « J’aime mieux ajuster de nouvelles formes que rediriger celles en place », ou l’inverse. Cela suffit. Les puzzles de blocs partagent un vocabulaire visuel, mais leurs verbes définissent l’expérience. Choisissez le verbe que vous voulez répéter.',
        ],
      },
      'official-source': {
        title: 'Source officielle du produit',
        paragraphs: [
          'Apple. (2026, August 11). Apple Arcade’s lineup of hit puzzle games gets even bigger with the addition of Block Blast!+ and Art of Fauna: Cozy Puzzles+. Apple Newsroom. [Annonce officielle Arcade](https://www.apple.com/newsroom/2026/08/apple-arcade-levels-up-with-block-blast-plus-and-art-of-fauna-cozy-puzzles-plus/). Les études ci-dessous donnent un contexte de conception et de motivation ; aucune n’a testé les deux jeux de cette comparaison.',
        ],
      },
    },
    pullQuote:
      'Plus d’espace libre n’est pas automatiquement une meilleure position.',
    faqs: [
      {
        question: 'OutBrick est-il le même type de puzzle que Block Blast!+ ?',
        answer:
          'Leurs règles centrales diffèrent. Block Blast!+ demande de placer des formes pour compléter rangées et colonnes ; OutBrick demande de faire rentrer des briques existantes par les portes assorties et de les échanger pour en aligner trois ou plus.',
      },
      {
        question: 'Block Blast!+ est-il l’application standard Block Blast! ?',
        answer:
          'Block Blast!+ est l’édition Apple Arcade, avec abonnement et conditions de publicité et d’achats décrites par Apple. Consultez la fiche standard distincte sans supposer que ces conditions s’y appliquent.',
      },
      {
        question: 'Lequel convient mieux à la planification ?',
        answer:
          'Les deux peuvent en demander, avec des contraintes différentes. Le placement examine l’effet d’une forme sur l’espace restant ; OutBrick examine l’effet de l’ordre, des échanges et des portes sur les trajets.',
      },
      {
        question: 'Puis-je essayer OutBrick sans l’installer ?',
        answer:
          'Le [plateau du navigateur](/play) permet d’essayer le glissement classique jusqu’à l’arrêt. Vérifiez séparément la fiche App Store pour la compatibilité, les fonctions et les coûts de l’app installée.',
      },
    ],
  },
  'sokoban-vs-sliding-block-puzzles': {
    title: 'Sokoban et blocs coulissants : pousser ou glisser',
    dek: 'Distinguez les poussées de Sokoban du glissement jusqu’à l’arrêt, avec des exemples de coins, accès et points d’arrêt temporaires.',
    imageAlt:
      'Téléphone OutBrick et briques colorées sur un fond sombre avec des chemins géométriques',
    tags: [
      'jeux de puzzle',
      'puzzles de blocs coulissants',
      'conception de jeux',
      'résolution de problèmes',
      'puzzles de tri de blocs',
    ],
    intro:
      'Une caisse est à une case de son objectif. Le déplacement semble évident, jusqu’à voir que la personne chargée de pousser ne peut pas passer derrière. Une brique colorée est près de sa sortie. Là aussi, le mouvement semble évident, jusqu’à ce qu’une voie ouverte l’emporte trop loin. Sokoban et les puzzles de blocs qui glissent partagent un intérêt pour l’espace et l’ordre, mais l’obstacle à prévoir diffère. Ce guide compare les règles classiques de Sokoban au glissement jusqu’à l’arrêt des plateaux classiques d’OutBrick, que garde sa démo dans le navigateur. Il explique les règles sans classer la difficulté ; les positions pédagogiques sont inventées et ne résolvent pas de niveaux nommés.',
    keyTakeaways: [
      'Dans Sokoban classique, un personnage pousse les caisses et doit atteindre le bon côté ; les plateaux classiques d’OutBrick permettent de sélectionner une brique et de la faire glisser jusqu’à l’arrêt.',
      'Un coin peut piéger définitivement une caisse Sokoban. Dans un puzzle de glissement, retirer un obstacle peut supprimer l’arrêt nécessaire à un trajet ultérieur.',
      'Les habitudes utiles se recoupent, mais une stratégie ne se transfère que si les règles de mouvement et d’objectif le permettent. Lisez-les avant d’importer un plan familier.',
    ],
    sections: {
      'what-a-move-means': {
        title: 'Que signifie exactement un mouvement ?',
        paragraphs: [
          'Sokoban classique place un personnage, des caisses, des murs et des objectifs de stockage sur une grille. Le personnage marche dans l’espace vide et pousse une caisse si la case derrière est libre. Il ne peut ni tirer, ni pousser une chaîne de caisses, ni traverser les murs. On termine en plaçant les caisses sur les objectifs. Certaines versions ajoutent des variantes ; cette description vise les règles classiques, pas toutes les apps portant ce nom.',
          'La position du personnage fait partie du puzzle. Une caisse ayant de la place à droite ne peut pas forcément y être poussée : le personnage doit aussi atteindre son côté gauche. Ne penser qu’à la destination manque la moitié du mouvement. Un court trajet pour passer derrière peut être indispensable même sans rapprocher aucune caisse d’un objectif.',
          'Sur les plateaux classiques d’OutBrick, toujours jouables dans le navigateur, vous sélectionnez directement une brique et donnez une direction. Elle glisse jusqu’à un obstacle, puis sort par la porte de sa couleur. (Le jeu de l’App Store se joue désormais en Slide & Match : une brique s’arrête là où vous la lâchez, et les échanges forment des alignements.) Aucun magasinier n’a besoin d’un trajet piéton préservé. L’attention porte sur la trajectoire, les arrêts et les relations entre briques. Des clés, verrous et caisses apparaissent plus tard, sans rendre le mouvement de base identique à Sokoban.',
          '« Puzzle de blocs coulissants » est une catégorie large. Certains autorisent de petits déplacements ou un seul axe ; d’autres utilisent le glissement jusqu’à l’arrêt. Notre [histoire des puzzles de blocs coulissants](/blog/history-of-sliding-block-puzzles) donne ce contexte. Identifiez toujours la règle particulière avant de penser savoir résoudre le jeu.',
        ],
      },
      'the-corner-and-the-brake': {
        title: 'Un coin dans l’un, un frein dans l’autre',
        paragraphs: [
          'Imaginez une caisse Sokoban près du mur inférieur, avec un mur immédiatement à gauche. Poussée à gauche dans ce coin sans objectif, elle ne peut plus sortir selon les règles classiques. Pour la pousser à droite, le personnage devrait se tenir dans le mur gauche ; vers le haut, sous le mur inférieur. La caisse est piégée même si le reste de l’entrepôt est vaste.',
          'Junghanns et Schaeffer (2001) ont étudié Sokoban comme problème exigeant de recherche à un seul agent. Leur solveur montre l’importance des connaissances du domaine, dont la détection des blocages irréversibles et la réduction des recherches inutiles. C’est une recherche informatique, pas une expérience montrant comment entraîner les personnes. Elle apporte une distinction importante : un coup autorisé peut mener à une position où l’objectif devient inaccessible.',
          'Imaginez maintenant une brique glissante devant s’arrêter dans une colonne centrale avant d’aller vers une porte. Une seconde brique, une case au-delà de l’arrêt voulu, sert de frein. La retirer peut sembler ranger le plateau, mais laisse la première dépasser l’alignement. L’obstacle avait un rôle. Cette illustration dépend du glissement jusqu’à l’arrêt et ne s’applique pas à tout puzzle coulissant.',
          'Aucun exemple ne dit de ne jamais entrer dans un coin ou dégager une voie. Un objectif dans le coin peut rendre la poussée correcte ; une autre surface d’arrêt peut rendre la voie sûre. La question est ce qui reste possible après le coup. Un plateau qui semble rangé et un plateau résoluble ne sont pas la même chose.',
        ],
      },
      'routes-have-two-ends': {
        title: 'Préservez les accès autant que les destinations',
        paragraphs: [
          'Considérez un couloir Sokoban reliant deux salles. Pousser une caisse à l’entrée peut la rapprocher d’un objectif tout en coupant l’accès du personnage à l’autre salle. Il faudra peut-être ensuite aborder cette caisse de l’autre côté, alors que le seul passage est perdu. Avant de pousser, demandez où le personnage pourra marcher ensuite et quels côtés des caisses restantes resteront accessibles.',
          'Sur les plateaux classiques d’OutBrick, la question comparable concerne passage et arrêts. Si une bleue doit traverser une voie avant la sortie de la rouge, sortir d’abord la rouge peut supprimer un frein utile ou changer le trajet. À l’inverse, la laisser toujours peut bloquer la bleue. La dépendance est temporaire : gardez la pièce pendant son rôle, puis retirez-la quand il est terminé.',
          'Exprimez le plan par des relations plutôt qu’une longue série de directions. Sokoban : « Garder la porte ouverte jusqu’à pouvoir passer derrière la caisse du haut. » Glissement : « Garder cette brique comme arrêt jusqu’à aligner l’autre. » Cela rend la raison visible. Si le plateau change, vous pouvez vérifier si elle vaut encore au lieu de mémoriser une séquence disparue.',
          'Pour lire les dépendances, voyez notre [guide d’examen du plateau avant de bouger](/blog/how-to-read-a-puzzle-before-moving). Vous n’avez pas besoin d’un plan parfait pour tout le plateau. Identifier un accès à conserver et une position utile à ne pas perturber suffit souvent.',
        ],
      },
      'what-transfers-and-what-does-not': {
        title: 'Que transférez-vous en changeant de puzzle ?',
        paragraphs: [
          'Vérifier les conséquences sert aux deux familles. Reconnaître qu’une pièce doit parfois s’éloigner de sa destination avant de l’atteindre aussi. Une attente précise de mouvement se transfère moins sûrement. Un joueur Sokoban peut supposer pouvoir déplacer une brique d’une case ; un joueur de glissement peut oublier la place nécessaire derrière une caisse pour le magasinier.',
          'Iacovides et al. (2015) ont examiné action, compréhension et implication dans plusieurs études de cas. Leurs récits qualitatifs décrivent les déclics comme une part importante de l’implication. Ils n’établissent pas d’effet mesuré de transfert entre Sokoban et OutBrick. Notre application pratique consiste à envisager une règle mal comprise devant un mouvement surprenant, avant de blâmer sa capacité à planifier.',
          'Hearn et Demaine (2005) ont analysé la complexité informatique formelle des puzzles de blocs coulissants et d’autres problèmes contraints. Leur preuve porte sur des familles mathématiques, pas la difficulté d’un niveau commercial précis. Elle renforce une limite utile : les coups autorisés définissent le problème. Deux plateaux semblables peuvent demander un autre raisonnement si une règle change ; leur article ne classe pas Sokoban face à OutBrick.',
          'Essayez un plateau simple en changeant de famille. Prévoyez une action autorisée et son résultat précis, exécutez-la et comparez. Répétez avec une action bloquée si l’exploration est sûre. Cette vérification est un conseil éditorial, pas un programme d’entraînement testé, mais elle peut empêcher un plateau familier d’emprunter discrètement les mauvaises règles dans votre esprit.',
        ],
      },
      'choose-your-favourite-constraint': {
        title: 'Choisissez la contrainte que vous aimez examiner',
        paragraphs: [
          'Sokoban convient si vous aimez prévoir l’accès d’un personnage et les conséquences de poussées irréversibles. Les puzzles de glissement méritent un essai si vous aimez construire des arrêts et rediriger directement les pièces. Aucune préférence n’exige de prétendre qu’un genre améliore davantage le cerveau. Ces règles peuvent être agréables pour elles-mêmes.',
          'Kotovsky et al. (1985) ont étudié pourquoi différentes présentations de problèmes de la tour de Hanoï formellement équivalents produisaient des difficultés différentes. Leur travail porte sur ces problèmes expérimentaux, pas sur ces genres. Il invite à distinguer structure de la tâche et facilité de compréhension : une présentation inconnue peut rendre le problème plus difficile à ressentir sans ajouter de pièces. Difficulté et adéquation personnelle restent distinctes.',
          `Vous pouvez [jouer à une démonstration OutBrick](/play) pour voir comment le glissement change une voie. Lisez nos [conseils de tri par couleur](/blog/colour-sort-puzzle-tips) pour relier le mouvement aux portes assorties. Si la règle vous plaît, [consultez OutBrick sur l’App Store](${appStoreUrl('journal-sokoban-comparison')}) pour la compatibilité et les achats actuels. L’app comporte limites de coups, vies et publicité récompensée facultative ; un puzzle sans chrono n’est pas un accès illimité.`,
          'Emportez une question vers le prochain plateau : « Qu’est-ce qui doit rester disponible après ce coup ? » Dans Sokoban, ce peut être une case où le personnage doit se tenir. Sur les plateaux classiques d’OutBrick, une surface d’arrêt. Voir cette différence transforme une vague ressemblance de blocs colorés en choix plus clair du jeu voulu.',
        ],
      },
      'classic-rules-source': {
        title: 'Règles classiques et limites des données',
        paragraphs: [
          'Sokoban.jp. (n.d.). Rules. [Règles classiques de Sokoban](https://sokoban.jp/rule.html). Consulté le 30 septembre 2026. Les exemples ci-dessus sont des illustrations originales de ces règles et du mouvement classique d’OutBrick. Les recherches ci-dessous donnent le contexte de recherche de solution, d’implication et de motivation ; elles n’évaluent pas indépendamment OutBrick.',
        ],
      },
    },
    pullQuote:
      'Un plateau qui semble rangé et un plateau résoluble ne sont pas la même chose.',
    faqs: [
      {
        question: 'Peut-on tirer une caisse dans Sokoban classique ?',
        answer:
          'Non. Le personnage peut pousser une caisse vers une case vide, mais ni la tirer ni pousser une chaîne ; les variantes peuvent changer les règles.',
      },
      {
        question: 'Pourquoi un coin est-il dangereux dans Sokoban ?',
        answer:
          'Une caisse poussée dans un coin sans objectif peut devenir immobile parce que le personnage ne peut atteindre les côtés nécessaires pour l’en sortir. Vérifiez destination et accès futur.',
      },
      {
        question: 'OutBrick avance-t-il d’une case comme Sokoban ?',
        answer:
          'Non. Sur les plateaux classiques, les briques glissent dans la direction choisie jusqu’à un obstacle ; dans le Slide & Match du jeu de l’App Store, une brique s’arrête là où vous la lâchez. Le plan comprend arrêts et sorties de même couleur plutôt que la position d’un personnage qui pousse.',
      },
      {
        question:
          'Les compétences Sokoban rendent-elles automatiquement OutBrick facile ?',
        answer:
          'Des habitudes comme vérifier l’ordre et préserver les trajets peuvent aider. Mais les règles diffèrent ; vérifiez les tactiques familières dans le nouveau jeu au lieu de supposer leur transfert.',
      },
    ],
  },
  'puzzle-hints-without-spoilers': {
    title: 'Donner des indices de puzzle sans gâcher la réponse',
    dek: 'Demandez et donnez des indices utiles sans révéler toute la solution : fixez des limites, avancez un indice à la fois et laissez la personne décider.',
    imageAlt:
      'Deux personnages OutBrick à côté de briques colorées et d’un téléphone sur un fond géométrique sombre',
    tags: [
      'jouer ensemble',
      'jeux de puzzle',
      'résolution de problèmes',
      'habitudes de jeu',
      'jeu en famille',
    ],
    intro:
      'Vous reconnaissez le prochain coup avant votre ami. Votre main monte vers son téléphone. Une phrase se prépare : « Déplace juste celui-là. » Puis vous vous rappelez que le blocage fait en partie l’intérêt du jeu. Un indice peut ouvrir une possibilité utile, mais aussi enlever la décision que quelqu’un voulait prendre. Le savoir-faire consiste à convenir de la quantité d’aide appropriée. Ce guide propose une façon graduée de demander et donner des indices, pour un puzzle quotidien, un proche ou une capture dans une discussion de groupe. Les exemples sont originaux ; la recherche apporte un contexte de retour d’information, tutorat et expérience de jeu, pas un système d’indices testé pour OutBrick.',
    keyTakeaways: [
      'Demandez l’accord avant un indice, et convenez d’une question, petite piste, prochain coup ou solution complète.',
      'Donnez un indice délimité, puis arrêtez. Une chaîne de pistes non demandées peut révéler autant qu’un tutoriel complet.',
      'Restez précis et respectueux, signalez clairement les réponses publiques et laissez la personne choisir quand en savoir plus.',
    ],
    sections: {
      'agree-on-the-help': {
        title: 'Convenez de l’aide avant de la donner',
        paragraphs: [
          '« Tu veux un indice ? » est un bon début, mais sa taille reste indéfinie. L’un entend « montre ce que j’ai manqué », l’autre « donne le prochain coup pour continuer ». Après l’accord, proposez un choix simple : question sur le plateau, piste dans une zone, coup direct ou réponse complète. Ces demandes diffèrent et aucune n’est moralement meilleure.',
          'Pour demander, un message utile serait : « Une petite piste, pas le coup. J’ai dégagé la voie droite, mais je n’arrive pas à aligner la brique bleue. » Cela précise problème et limite de révélation. Si vous voulez la procédure complète, dites-le. L’aidant ne devrait ni imposer un rituel de difficulté préalable ni transformer le loisir en examen.',
          'Koedinger et Aleven (2007) ont examiné des expériences de Cognitive Tutors et décrit l’équilibre non résolu entre donner l’information et la retenir pour soutenir l’apprentissage. Ce dilemme concerne l’enseignement, pas l’étiquette d’une discussion de puzzle. L’analogie est utile : davantage d’information n’est pas forcément la bonne, et tout retenir n’aide pas automatiquement non plus.',
          'L’accord peut changer. Après une piste douce, quelqu’un peut vouloir le coup exact ; après avoir voulu de la compagnie, préférer résoudre seul. Revérifiez à une pause naturelle sans supposer que l’accord initial vous donne la maîtrise de la séance. La personne avec le puzzle choisit toujours son après-midi.',
        ],
      },
      'a-ladder-of-clues': {
        title: 'Une échelle d’indices, un échelon à la fois',
        paragraphs: [
          'Imaginez un plateau où une brique rouge a besoin d’un arrêt avant de s’aligner avec sa porte. Commencez par une question d’observation : « Où s’arrêtera la rouge si la voie est vide ? » Elle ne révèle pas une séquence, mais invite à vérifier une règle et une conséquence. Si la personne comprend déjà, ne répétez pas plus fort ; demandez si elle veut l’échelon suivant.',
          'Une piste générale serait : « Une autre brique pourrait servir de frein. » Une plus précise : « Regarde la pièce au-dessus du croisement. » Un indice explicite nommerait un coup. La solution complète donnerait la séquence ordonnée depuis la position précisée. C’est une proposition de conversation, pas une garantie que chaque piste est aussi légère sur tous les plateaux.',
          'La taille de la révélation dépend du puzzle. « Utilise la verte » peut tout révéler sur un petit plateau et presque rien sur un grand. Annoncez donc le type d’information avant de l’envoyer : « Je peux nommer la pièce si tu veux. » La personne choisit sans voir d’abord ce qu’elle espérait éviter.',
          'Après un indice, cessez d’écrire et laissez réfléchir. N’ajoutez pas « et ensuite », « évidemment » ou des flèches pendant la réflexion. Notre [guide de lecture du plateau avant de bouger](/blog/how-to-read-a-puzzle-before-moving) fournit des questions sans solution. Le but est une prochaine observation utile, pas de prouver l’intelligence de la personne qui aide.',
        ],
      },
      'be-specific-without-judging': {
        title: 'Précis sur le puzzle, bienveillant envers la personne',
        paragraphs: [
          '« Réfléchis davantage » n’est ni un indice ni un diagnostic utile. « Tu regardes au mauvais endroit » peut être vrai mais n’indique pas le bon. Mieux vaut une conséquence observable : « Si tu retires cet obstacle maintenant, qu’est-ce qui arrêtera la longue brique ? » Cela guide l’attention sans transformer la position en jugement de capacité.',
          'Shute (2008) a examiné les retours formatifs et décrit l’importance d’une information précise et encourageante, tout en soulignant sa dépendance à l’apprenant et à la tâche. Cette large revue éducative ne prouve pas qu’une phrase améliore les performances au puzzle. Nous appliquons sa distinction entre information sur la tâche et évaluation de la personne : expliquer la contrainte plutôt qu’étiqueter quelqu’un de négligent ou lent.',
          'Un retour peut aussi confirmer une bonne idée. « Oui, garder cette porte ouverte a du sens ; le problème est l’arrêt ensuite » montre quelle partie du raisonnement tient. Cela évite de remplacer tout le plan pour une seule hypothèse. Si vous ignorez la réponse, dites-le et explorez ensemble au lieu de présenter une supposition comme une solution vérifiée.',
          'Évitez de prendre l’appareil, bouger sans demander ou commenter chaque pensée par-dessus l’épaule. Ces habitudes enlèvent le temps de relier l’indice au plateau. Notre [guide de compétition amicale](/blog/friendly-competition-with-friends) souligne aussi l’accord sur l’expérience partagée. Aider est un arrangement social autant qu’un échange d’informations.',
        ],
      },
      'give-the-solver-space': {
        title: 'Laissez le temps d’utiliser l’indice',
        paragraphs: [
          'On peut lire un indice et avoir encore besoin de temps pour en voir l’intérêt. Invitez la personne à décrire sa réflexion si elle veut de la compagnie, sans exiger une bonne explication pour autoriser la piste suivante. « Je crois que la bleue doit rester » peut relancer son exploration. Comprendre l’impasse est parfois utile avant même de trouver la sortie.',
          'Aleven et al. (2016) ont examiné la recherche d’aide dans des systèmes de tutorat intelligents. Les retours en classe sur cette recherche rendaient l’usage de l’aide plus réfléchi, même après leur fin, sans améliorer les résultats d’apprentissage du domaine. Cette limite compte : bon usage de l’aide et meilleure performance sont deux affirmations distinctes. Des indices gradués ne promettent pas de devenir meilleur en puzzles.',
          'Iacovides et al. (2015) ont étudié compréhension et implication dans plusieurs cas de jeu. Leurs récits soulignent le sentiment d’être responsable de la progression. Cela donne une raison éditoriale de laisser les décisions au joueur, sans établir que révéler un coup détruit le plaisir. Pour qui veut toute la réponse, la recevoir peut justement garder la séance agréable.',
          'Si la piste ne sert pas, vérifiez que vous regardez le même état. Une capture prise plusieurs coups auparavant peut rendre un indice juste sans pertinence. Identifiez position actuelle, jeu ou niveau et règle changée avant d’envoyer une séquence. Vous pouvez aussi prendre un nouveau [plateau quotidien OutBrick](/daily) et pratiquer ensemble, avec accord, seulement des questions d’observation.',
        ],
      },
      'public-spoilers-and-clean-finishes': {
        title: 'Protégez les réponses publiques par une limite claire',
        paragraphs: [
          'Dans un groupe, la personne qui demande n’est pas la seule lectrice. Placez nom et date du puzzle avant la réponse, puis utilisez les commandes de masquage des spoilers si disponibles. Sinon, gardez la solution hors de l’aperçu public et demandez si une réponse privée est souhaitée. Évitez l’image résolue non signalée : elle peut révéler avant la lecture de l’avertissement dessous.',
          'Utilisez un titre simple comme « petit indice : points d’arrêt » ou « solution complète ci-dessous ». Ne mettez pas le coup révélateur dans le titre, la notification ou la première ligne au-dessus de l’avertissement. Précisez si la séquence part du plateau initial ou de la position partagée. Ce détail évite qu’une réponse utile devienne une instruction confuse pour les autres.',
          'Une fois terminé, demandez si la personne veut discuter du fonctionnement de l’indice. Elle peut aimer reconstruire le déclic ou préférer passer à autre chose. Si vous révélez trop par accident, reconnaissez-le brièvement et adaptez la prochaine fois. Inutile de défendre le spoiler en disant que la réponse était évidente.',
          `Pratiquez ensemble le glissement sur nos [plateaux du navigateur](/play), ou [téléchargez OutBrick sur l’App Store](${appStoreUrl('journal-hint-etiquette')}) après lecture de la fiche actuelle. Pour une question de jeu ou un comportement obscur, la [page d’assistance](/support) donne le contact existant. Un ami peut vouloir une compagnie, un coup de pouce ou une réponse. Une bonne étiquette rend ce choix facile à exprimer et respecter.`,
        ],
      },
    },
    pullQuote:
      'Le but est une prochaine observation utile, pas de prouver l’intelligence de la personne qui aide.',
    faqs: [
      {
        question: 'Comment demander un indice sans gâcher le puzzle ?',
        answer:
          'Précisez la quantité d’aide voulue et vos essais, par exemple « une question d’observation, pas le prochain coup ». Demandez d’attendre avant une piste plus explicite.',
      },
      {
        question: 'Que faire avant de donner un indice ?',
        answer:
          'Demandez l’accord, puis convenez d’une question, petite piste, coup direct ou solution complète. Donnez une réponse délimitée et laissez décider de la suite.',
      },
      {
        question: 'Utiliser un indice est-il tricher ?',
        answer:
          'En loisir solo, vous choisissez votre aide. Pour un concours ou défi partagé, convenez des règles avant et décrivez honnêtement toute aide.',
      },
      {
        question: 'Comment partager une solution quotidienne prudemment ?',
        answer:
          'Nommez puzzle et date, signalez le spoiler et masquez-le si possible. Gardez coups révélateurs et images résolues hors des titres, aperçus et premières lignes visibles.',
      },
    ],
  },
};
