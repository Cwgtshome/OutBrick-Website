import type { ExtraGuides } from '../../i18n/blog';
import { appStoreUrl } from '../../app-store-url.ts';

/** Complete French localization of journal batch 9. */
export const fr9: ExtraGuides = {
  'water-sort-vs-block-sort': {
    title: 'Tri d’eau ou de blocs : quel puzzle vous convient ?',
    dek: 'Comparez capacité des tubes et trajets de blocs coulissants, avec des exemples, des conseils de choix et les limites claires de la recherche.',
    imageAlt:
      'Briques OutBrick colorées et personnages en briques sur une grille de puzzle bleu marine',
    tags: [
      'puzzles de tri de blocs',
      'jeux de puzzle',
      'conception de jeux',
      'habitudes de jeu',
    ],
    intro:
      'Un tube presque trié peut encore être le mauvais endroit où verser. Une brique près de sa sortie assortie peut encore être mal placée pour sortir. Tri d’eau et tri de blocs rendent l’association des couleurs évidente tout en cachant la décision intéressante dans l’ordre des coups. Mais la ressource gérée diffère : la place dans les récipients d’un côté, les trajets et arrêts de l’autre. Ce guide compare les décisions sans désigner de vainqueur. Pour l’eau, nous utilisons les règles publiées de Water Sort Puzzle d’IEC Global ; pour les blocs, le glissement jusqu’à l’arrêt d’OutBrick. D’autres jeux aux mêmes noms peuvent différer. Nous créons OutBrick ; nos exemples portent ce regard, sans prétendre à des essais indépendants.',
    keyTakeaways: [
      'Le tri d’eau demande où le liquide peut aller légalement ; le tri de blocs coulissants demande quels trajets et arrêts créer.',
      'Un tube vide et une case vide servent différemment. Préservez l’espace du prochain pas au lieu d’associer les couleurs dès que possible.',
      'Choisissez les décisions qui vous plaisent et une interface confortable. La recherche n’établit pas que l’un de ces styles améliore les capacités cognitives.',
    ],
    sections: {
      'different-things-to-move': {
        title: 'Établissez d’abord ce que signifie un mouvement',
        paragraphs: [
          'La description de Water Sort Puzzle d’IEC Global indique qu’on touche un verre pour verser dans un autre, avec même couleur et place suffisante à la réception. Le but est de regrouper chaque couleur dans son verre. Ce sont les règles examinées ici, pas une promesse pour toutes les apps de tri d’eau. La fiche décrit aussi la reprise des niveaux et le jeu sans chrono. Ces points donnent un départ utile sans régler tous les cas limites, comme la quantité exacte transférée par un toucher (IEC Global Pty Ltd, n.d.).',
          'Dans OutBrick, vous déplacez directement la brique. Elle glisse jusqu’à un obstacle et sort par une porte de sa couleur. Vous ne la posez pas sur la case de votre choix. Un couloir dégagé peut l’emporter trop loin ; une autre brique peut fournir l’arrêt nécessaire. Notre [guide des blocs coulissants](/blog/how-to-solve-sliding-block-puzzles) explique cette distinction et une méthode plus large.',
          'Les deux sont des puzzles de tri par couleur, mais cette étiquette décrit la destination plutôt que tout le trajet. Verser change les couches accessibles en haut d’un récipient. Glisser change les obstacles d’un plateau commun. Avant de trouver le jeu confus, énoncez la règle de mouvement. Une prévision juste est une meilleure première étape qu’une réussite rapide.',
          'Les variantes peuvent modifier mouvements, restrictions ou récipients. Commencez par le tutoriel du jeu avant de transférer les conseils d’un puzzle semblable.',
        ],
      },
      'capacity-example': {
        title: 'Tri d’eau : la capacité libre fait partie de la solution',
        paragraphs: [
          'Voici une illustration pour une variante courante autorisant le versement dans un tube vide. Le tube A a du bleu au-dessus du rouge. B a du bleu en haut mais est plein. C est vide. Verser A dans B n’est pas possible simplement parce que les couleurs supérieures correspondent : B doit avoir de la place. Verser le bleu de A dans C expose le rouge et crée une autre possibilité. L’exemple explique une dépendance ; il ne promet pas une disposition de l’app IEC Global.',
          'On est tenté de remplir chaque tube vide immédiatement. Demandez plutôt quelle couleur enfouie découvrir et où envoyer la couche supérieure pour le permettre. Un récipient libre vaut parce qu’il autorise une disposition intermédiaire. Le remplir d’une couche sans rapport peut consommer la seule destination utilisable du coup préparé.',
          'Changeons l’exemple : B a de la place pour le bleu, donc A peut y verser directement selon la règle d’association. C reste libre pour plus tard. Le coup visible est plus simple, mais la question demeure : qu’est-ce qui deviendra accessible ensuite ? Nos [conseils de tri par couleur](/blog/colour-sort-puzzle-tips) développent cette réflexion au-delà de l’association évidente.',
          'Ito et al. (2023) ont formalisé les puzzles de tri de balles et d’eau, montré leur équivalence de résolubilité selon leur modèle et prouvé les problèmes généralisés NP-complets. Ce résultat concerne des règles précises de piles, pas toutes les variantes commerciales. Il explique pourquoi des règles de versement simples autorisent des plans exigeants, sans prouver la difficulté de l’exemple ou la même complexité d’OutBrick. La question pratique reste votre plaisir à gérer couleurs enfouies et capacité libre.',
        ],
      },
      'route-example': {
        title: 'Tri de blocs : un obstacle peut servir de frein',
        paragraphs: [
          'Imaginez une rouge devant s’aligner avec sa porte au bord droit. Glisser vers le haut dans une colonne vide l’emporte au-delà de la rangée où tourner. Une bleue placée au-dessus pourrait l’arrêter à la bonne hauteur. La tâche immédiate est donc de placer la bleue, même si la rouge semble plus proche d’une sortie. C’est une situation illustrative de type OutBrick, pas la solution d’un plateau numéroté.',
          'Une fois la rouge alignée, une seconde dépendance peut apparaître : la bleue a aussi besoin du couloir pour sa porte. Sortir trop tôt la rouge peut supprimer un arrêt encore utile à la bleue. Contrairement au tube libre précédent, la ressource est une position et sa relation à un trajet. Davantage d’espace vide ne signifie pas automatiquement une meilleure position. Parfois la disposition devient utile précisément parce que la bonne case est occupée.',
          'Kirsh et Maglio (1994) ont étudié Tetris et distingué les actions vers l’objectif de celles révélant des informations difficiles à calculer mentalement. Ils n’ont testé ni OutBrick ni le tri d’eau. Nous empruntons la distinction pour lire un essai : un coup peut révéler l’arrêt sans améliorer le trajet. « Elle s’est arrêtée une rangée trop haut » est une observation utilisable, pas un jugement de capacité.',
          'Essayez notre [page de jeu dans le navigateur](/play) et prévoyez l’arrêt avant de bouger. Comparez ensuite prévision et résultat. Pour lire plus attentivement, le [guide avant le premier coup](/blog/how-to-read-a-puzzle-before-moving) aide à identifier sorties et dépendances. Ce test concerne votre intérêt pour les trajets spatiaux, pas la vitesse d’apprentissage d’un jeu inconnu.',
        ],
      },
      'compare-the-experience': {
        title: 'Comparez aussi l’expérience autour du plateau',
        paragraphs: [
          'Une préférence de règle peut souffrir d’une interface difficile à lire. Pour les liquides, distinguez-vous les couches supérieures et la capacité restante à votre distance habituelle ? Pour les blocs, identifiez-vous la brique, sa porte et son obstacle d’arrêt ? Utilisez le téléphone prévu plutôt que des images promotionnelles agrandies.',
          'Larkin et Simon (1987) ont comparé représentations par diagrammes et phrases à l’aide de modèles et de problèmes illustratifs mathématiques et physiques. Leur analyse montre que position et regroupement explicite changent l’effort de recherche même avec information équivalente. Ce n’était pas un test de captures de jeux. Nous l’appliquons en regardant ce que le plateau rend visible : couleur supérieure et capacité d’un tube, ou relation entre brique, obstacle et porte.',
          'Le jeu sans chrono décrit aussi le rythme, pas tout le modèle commercial. La version actuelle d’OutBrick a limites et objectifs de coups, vies et annonces récompensées facultatives. La première annulation de chaque plateau dans l’app est gratuite. Notre [explication du jeu équitable](/#fair) décrit ces coûts. La fiche IEC Global annonce téléchargement gratuit et achats intégrés, sans établir la fréquence ou la forme de chaque publicité. Ce guide ne compare pas prix et interruptions par essais directs.',
          'Kotovsky et al. (1985) ont étudié les différences de difficulté de versions de la tour de Hanoï, en considérant règles, représentation et mémoire. Ce sont d’autres tâches que ces apps. La précaution utile est qu’un objectif abstrait commun ne rend pas deux présentations aussi compréhensibles. Si l’un paraît plus clair, examinez les décisions et indices qui vous aident sans déclarer tout le genre supérieur. Ni cette étude ni les autres n’établissent un avantage médical ou cognitif de ces jeux.',
        ],
      },
      'choose-with-a-small-test': {
        title: 'Choisissez avec un petit test équitable',
        paragraphs: [
          'Laissez chaque style enseigner sa règle, puis posez trois questions : puis-je prévoir un coup ordinaire ? La question laissée par l’échec me plaît-elle ? Aurais-je volontairement envie d’un autre plateau ? Cela sépare nouveauté initiale et inadéquation durable, sans faire du premier niveau difficile un verdict global sur le genre.',
          'Pour l’eau, observez le plaisir à découvrir les couleurs et préserver la capacité. Pour les blocs, celui à préparer trajets et freins temporaires. Vous pouvez préférer les piles visuelles des tubes, le mouvement tactile des briques ou simplement les commandes les plus confortables. Choisir le problème auquel réfléchir suffit.',
          'Comparez dans des circonstances semblables et sans concours chronométré. Quelques coups observés volontairement peuvent mieux éclairer l’adéquation que poursuivre un jeu que vous n’aimez déjà pas.',
          `Si le glissement vous attire, commencez par [les plateaux web d’OutBrick](/play). Pour l’expérience complète, [retrouvez OutBrick sur l’App Store](${appStoreUrl('journal-water-sort')}) et vérifiez appareil et achats actuels. Si vous préférez verser, utilisez la fiche nommée ci-dessous pour identifier la bonne app. Le résultat utile est un puzzle auquel revenir, y compris le choix tout à fait raisonnable d’aimer les deux.`,
          'Source produit : IEC Global Pty Ltd. (n.d.). Water Sort Puzzle [Application mobile]. App Store. Consulté le 30 septembre 2026 sur [la fiche de Water Sort Puzzle](https://apps.apple.com/gb/app/water-sort-puzzle/id1514542157). La comparaison repose sur la description du développeur ; les exemples de planification sont nos propres illustrations.',
        ],
      },
    },
    pullQuote:
      'Davantage d’espace vide ne signifie pas automatiquement une meilleure position.',
    faqs: [
      {
        question: 'Quelle différence centrale entre tri d’eau et de blocs ?',
        answer:
          'Le tri d’eau organise le liquide coloré entre récipients selon capacité et association. Le tri de type OutBrick déplace des briques sur un plateau vers les portes assorties, chaque glissement continuant jusqu’à un obstacle.',
      },
      {
        question: 'Un tube vide équivaut-il à une case vide de puzzle ?',
        answer:
          'Les deux peuvent permettre un coup futur, mais différemment. Le tube reçoit le liquide ; la case vide définit un trajet, tandis qu’une case occupée peut fournir un arrêt utile.',
      },
      {
        question: 'Quel style est meilleur pour le cerveau ?',
        answer:
          'Les recherches citées n’établissent aucune supériorité cognitive. Choisissez règles, lisibilité, rythme et coûts selon vos préférences.',
      },
      {
        question: 'Puis-je essayer OutBrick avant de télécharger ?',
        answer:
          'La [page de jeu OutBrick](/play) propose quelques plateaux web. Elle montre la règle sans représenter toute l’app ou promettre une progression commune.',
      },
    ],
  },
  'block-puzzles-online-no-download': {
    title: 'Jouer aux puzzles de blocs en ligne sans téléchargement',
    dek: 'Essayez les plateaux web d’OutBrick sans installer d’app : commandes, rotation quotidienne, étoiles et différences avec le jeu complet.',
    imageAlt:
      'Briques OutBrick colorées et personnages en briques sur une grille de puzzle bleu marine',
    tags: [
      'jeux de puzzle',
      'puzzles de tri de blocs',
      'puzzles quotidiens',
      'accessibilité',
      'conception de jeux',
    ],
    intro:
      'Vous voulez déplacer quelques blocs, pas vous engager dans un nouveau téléchargement. Un puzzle web répond à une première question utile : est-ce que ce problème me plaît ? OutBrick propose des plateaux jouables sur son site, à côté de son jeu App Store distinct. Vous explorez directement la règle sans remplacer le jeu par des captures. Ce guide explique le départ, les commandes web, le sens du plateau quotidien et les limites du navigateur. Il traite notre site, vérifié le 30 septembre 2026, sans classer tous les services sans téléchargement. La petite version web est une introduction utile en soi ; elle ne reproduit pas toute l’app.',
    keyTakeaways: [
      'Ouvrez /play pour une introduction courte ou /daily pour le plateau commun choisi selon la date ; aucune installation d’app n’est nécessaire.',
      'Le plateau change à minuit UTC en tournant dans un ensemble fixe. Ce n’est pas un nouveau puzzle généré chaque jour.',
      'Scores, commandes et reprises web aident à explorer la règle. Ne supposez pas que la progression du navigateur est sauvegardée ou synchronisée avec l’app.',
    ],
    sections: {
      'where-to-start': {
        title: 'Commencez par le plateau web adapté à votre but',
        paragraphs: [
          'Pour découvrir, ouvrez le [guide de jeu OutBrick](/play). Il contient un parcours jouable de trois plateaux, de l’introduction douce aux dispositions donnant de l’importance à l’arrêt. Vous ne choisissez pas la difficulté de toute l’app, mais testez si guider les briques vers les portes assorties est compréhensible et mérite un nouvel essai.',
          'La règle est simple à dire : faites glisser une brique jusqu’à un obstacle, puis sortez-la par sa porte de couleur. La préparation vient des pièces qui se gênent ou s’aident. Assortir rouge et rouge n’est qu’une partie. Il faut parfois replacer une autre brique pour arrêter la rouge à la bonne rangée avant de tourner.',
          'Si vous connaissez la règle, utilisez le [plateau quotidien](/daily) pour une disposition commune. Tout le monde voit le même plateau à la même date UTC. Cela donne un puzzle précis à discuter avec un ami, sans se demander si vous avez ouvert des niveaux ressemblants. Aucun besoin d’en faire une course.',
          'Andersen et al. (2012) ont étudié les tutoriels de trois jeux avec plus de 45 000 joueurs. Les effets variaient selon jeu et complexité, sans montrer un format toujours utile. Ils n’ont pas testé ce site. Pour votre essai, voyez si le plateau introductif rend la règle assez claire pour décider. Finir tout le parcours est facultatif ; choisir une autre règle est aussi un essai réussi.',
        ],
      },
      'controls-and-feedback': {
        title: 'Utilisez les commandes pour tester une prévision',
        paragraphs: [
          'Sur écran tactile ou avec un pointeur, tirez une brique dans la direction voulue. Le geste indique la direction ; il ne promet pas l’arrêt au point où votre doigt finit. Au clavier, utilisez Tab pour atteindre une brique, puis Maj avec une flèche pour la déplacer. Observez l’arrêt réel avant la direction suivante.',
          'Commencez par une prévision vérifiable : « La jaune devrait s’arrêter près de cette bleue. » Agissez et comparez. Si le coup est bloqué, examinez plutôt que répéter la commande. L’obstacle peut être une brique voisine, le bord ou une porte de mauvaise couleur. Un coup refusé et un coup inattendu sont deux observations distinctes.',
          'Cao et Liu (2022) ont examiné les tutoriels intégrés et mené une étude pilote de tutoriel implicite. Leur travail traite le guidage comme lié à la découverte du jeu, sans prouver qu’une interface inexpliquée est meilleure. Il n’évalue pas nos commandes web. Ici, un premier coup réfléchi vérifie les instructions. Si sélectionner la pièce est inconfortable, réglez ce problème avant de conclure à un puzzle trop difficile.',
          'Le plateau associe couleurs et glyphes sur les briques et portes, donnant un indice au-delà de la teinte. Vérifiez néanmoins la lisibilité à votre taille et distance usuelles. Si l’usage est difficile, nos [informations d’accessibilité](/accessibility) donnent le contexte et [l’assistance](/support) permet de le décrire. Indiquez navigateur, appareil et action essayée ; un rapport précis est plus facile à examiner que « le jeu ne marche pas ».',
        ],
      },
      'moves-undo-and-restart': {
        title: 'L’objectif de coups invite à revenir au plateau',
        paragraphs: [
          'Le plateau web compte les coups et propose Annuler et Réinitialiser. Son objectif est un seuil de score, pas un chrono. Terminer donne une étoile ; respecter l’objectif en donne deux ; le faire sans annulation en donne trois. Dépasser l’objectif n’empêche pas de terminer le plateau web. L’annulation change les étoiles : distinguez découverte de la solution et tentative sans reprise.',
          'Un premier objectif raisonnable est simplement de terminer le plateau. Une fois le trajet compris, recommencez et demandez si un détour initial était nécessaire. Cela sépare découverte et amélioration, et évite d’abandonner pour trois étoiles avant de comprendre les dépendances. Aucun chrono n’exige de transformer immédiatement la reconnaissance en action.',
          'Kirsh et Maglio (1994), sur Tetris, ont distingué coups qui avancent la tâche et coups qui révèlent de l’information. L’étude n’établit aucun bénéfice mesuré de ce jeu web. La distinction donne un but utile au premier essai : tester l’arrêt apprend la disposition avant même un trajet complet. Réinitialiser permet ensuite d’essayer le plan découvert.',
          'Notre [guide de lecture avant le premier coup](/blog/how-to-read-a-puzzle-before-moving) aide à identifier les dépendances. Si éviter la pression du temps motive votre visite, le [guide sans chrono](/blog/no-timer-block-sort-puzzles-iphone) distingue absence de chrono et absence de restrictions. Les reprises généreuses du web ne permettent pas de déduire vies, coût d’annulation ou limites de coups de l’app complète.',
        ],
      },
      'what-daily-means': {
        title: 'Le sens de « quotidien » sur ce site',
        paragraphs: [
          'La page quotidienne choisit dans un ensemble fixe de plateaux web. Elle avance selon la date UTC et parcourt cet ensemble dans l’ordre, hors tutoriel. Au moment de l’écriture, il comprend seize plateaux. À la fin, la rotation reprend au début. « Quotidien » signifie donc un puzzle commun choisi selon la date, pas une nouvelle disposition générée chaque matin ou une archive croissante promise sans fin.',
          'Minuit UTC peut être l’après-midi ou le soir chez vous. Deux personnes ouvrant à des dates locales différentes peuvent partager la date UTC ; à la même date locale près de la limite, elles peuvent voir des sélections différentes. Utilisez la date et le numéro affichés pour discuter d’une solution. Le changement ne suit pas minuit local.',
          'Après réussite, la commande de partage propose un lien de résultat avec vos étoiles. Ce partage ne transmet pas votre séquence complète. Pour laisser un ami résoudre seul, envoyez d’abord le résultat et attendez avant de décrire l’ouverture. Le plateau commun invite à comparer les approches ; ce n’est pas une partie multijoueur simultanée intégrée.',
          'Larkin et Simon (1987) ont analysé l’organisation spatiale des diagrammes face au texte séquentiel, avec modèles et exemples. Ils n’ont pas étudié les jeux quotidiens. Appliquez cela en utilisant la disposition commune comme référence : montrez la porte ou l’obstacle avant de décrire le coup. Le numéro fixe le puzzle discuté ; la disposition visible fixe la décision à l’intérieur.',
        ],
      },
      'web-and-app-boundaries': {
        title: 'Sachez ce qui passe du navigateur à l’app',
        paragraphs: [
          'Sans téléchargement signifie ne pas installer l’app OutBrick pour ces plateaux. La page doit toujours charger dans le navigateur. Ne supposez ni la capacité hors ligne de l’app ni la survie d’un essai après fermeture ou rechargement. Le plateau jouable ne sauvegarde pas la progression et ne relie pas par un compte votre parcours dans l’app.',
          'Cette limite compte si vous commencez sur ordinateur puis installez sur téléphone. Une réussite web ne débloque pas le chapitre correspondant, ne transfère pas les étoiles et ne garantit pas des plateaux identiques. Le site est une petite introduction avec son ensemble de plateaux et ses scores. Le jeu App Store est un produit séparé à progression plus large.',
          'L’app a aussi un modèle commercial : vies, achats facultatifs et annonces récompensées sur choix. Lisez [les détails du jeu équitable](/#fair) et la fiche actuelle pour décider ce que « gratuit » signifie pour vous. Les reprises et annulations web ne remplacent pas ces déclarations. Utilisez aussi la fiche pour les appareils requis ; réussir sur navigateur ne prouve pas la compatibilité native.',
          `Si l’essai vous intrigue, [retrouvez OutBrick sur l’App Store](${appStoreUrl('journal-no-download')}). Si vous voulez seulement un plateau web, utilisez [la page quotidienne](/daily). Les deux choix suivent le même test utile : vous savez comment une brique glisse, si les commandes conviennent et si les trajets vous intéressent. Un petit exemple jouable remplit son rôle quand il éclaire cette décision.`,
        ],
      },
    },
    pullQuote:
      'Un premier objectif raisonnable est simplement de terminer le plateau.',
    faqs: [
      {
        question: 'Puis-je jouer à OutBrick sans télécharger l’app ?',
        answer:
          'Oui. Le [guide de jeu](/play) propose un court parcours web, et [la page quotidienne](/daily) le plateau choisi pour la date UTC actuelle.',
      },
      {
        question: 'Le puzzle quotidien est-il généré chaque jour ?',
        answer:
          'Non. Le site parcourt un ensemble fixe selon la date UTC, hors tutoriel. La rotation peut donc retrouver une disposition passée.',
      },
      {
        question: 'La progression web se synchronise-t-elle avec l’app ?',
        answer:
          'Les plateaux web ne sauvegardent pas la progression et ne la synchronisent pas. Ce sont une introduction séparée, pas la continuation du parcours dans l’app.',
      },
      {
        question: 'Comment déplacer une brique au clavier ?',
        answer:
          'Atteignez la brique avec Tab, puis appuyez sur Maj et une flèche dans la direction voulue. Elle continue jusqu’à un obstacle, pas jusqu’à une case arbitraire.',
      },
    ],
  },
  'solve-puzzles-together': {
    title: 'Résoudre des puzzles ensemble sans prendre l’écran',
    dek: 'Partagez un puzzle sans voler le prochain coup : convenez des rôles, expliquez vos prévisions et laissez la place aux différentes approches.',
    imageAlt:
      'Briques OutBrick colorées et personnages en briques sur une grille de puzzle bleu marine',
    tags: [
      'jouer ensemble',
      'jeux de puzzle',
      'jeu en famille',
      'conception de jeux',
      'habitudes de jeu',
    ],
    intro:
      'Deux personnes peuvent regarder un puzzle et jouer à des jeux très différents. L’une aime chercher ; l’autre a vu la réponse et veut la montrer. Puis vient le geste familier : une main prend le téléphone, une brique bouge et la personne qui le tenait a perdu l’occasion de comprendre pourquoi. Résoudre ensemble marche mieux quand l’aide préserve cette occasion. Ce guide propose un accord pratique autour d’un écran : qui bouge, qui explique, comment offrir les indices et quand échanger les rôles. C’est une pratique sociale informelle avec un puzzle approprié, dont les plateaux web d’OutBrick. Ce n’est ni un mode coopératif intégré, ni un compte partagé, ni une fonction multijoueur simultanée.',
    keyTakeaways: [
      'Convenez de qui contrôle l’écran et de l’aide souhaitée avant de proposer la solution.',
      'Expliquez le résultat prévu du coup, puis laissez la personne qui joue décider de l’exécuter.',
      'Échangez les rôles d’un commun accord et voyez la réussite comme une découverte partagée, pas la preuve que l’un a porté l’autre.',
    ],
    sections: {
      'agree-on-the-session': {
        title: 'Convenez de ce que vous faites ensemble',
        paragraphs: [
          'Commencez par mieux que « Peux-tu résoudre ça ? » : « Tu veux de la compagnie, un indice ou chercher seul ? » Ce sont des invitations distinctes. On peut apprécier votre regard sans vouloir de conseil, ou vouloir un premier coup précis. Aucune réponse n’a à devenir un test d’autonomie ou de capacité.',
          'Choisissez ensuite un but : finir un plateau, expliquer une règle déroutante ou comparer deux trajets. Décidez si l’objectif de coups compte aujourd’hui. Une séance de conversation devient gênante si l’un traite implicitement chaque coup supplémentaire comme une erreur à corriger. Nommez le but avant le degré d’optimisation.',
          'Scott et al. (2004) ont observé la collaboration sur des tables ordinaires et décrit des territoires personnels, collectifs et de stockage. Ce n’est pas une expérience sur téléphones de puzzle, mais l’analogie est utile : une tâche commune peut contenir un espace personnel. S’asseoir à côté ne donne pas automatiquement le droit d’agir sur l’écran.',
          'Pour commencer sans engagement, le [guide web](/play) permet de choisir un petit plateau. Pour comparer plutôt que coopérer, notre [guide de compétition amicale](/blog/friendly-competition-with-friends) traite un autre arrangement. Inutile de les combiner. « Nous cherchons ensemble » et « Nous comparons des essais indépendants » invitent à des comportements différents.',
        ],
      },
      'driver-and-explainer': {
        title: 'Séparez les rôles d’action et d’explication',
        paragraphs: [
          'Un arrangement simple sépare la personne aux commandes et celle qui explique. La première utilise l’écran et décide du coup ; la seconde décrit une possibilité et sa raison. Ce sont des rôles temporaires, pas des étiquettes de compétence. Échangez après un plateau, une reprise ou un moment convenu ; ne prenez pas l’appareil au milieu d’un essai.',
          'Rendez les explications observables. « Bouge la bleue » laisse deviner laquelle et pourquoi. « Je crois que la bleue à gauche s’arrêtera contre la jaune, laissant la rouge tourner » identifie pièce, direction et conséquence. La personne aux commandes peut examiner, contester ou essayer. Une explication utile donne quelque chose à juger plutôt qu’une simple instruction à suivre.',
          'Maquil et al. (2024) ont analysé cinq groupes de trois personnes sur une table interactive, en examinant coordination d’information et d’action. L’étude décrit cette coordination en détail, sans prouver que nos rôles améliorent les scores. La distinction compte : partager l’information et gérer qui agit sont deux parties d’une tâche commune, même avec une surface visible par tous.',
          'Si vous voulez tous deux bouger, faites une pause. Décidez quelle suggestion tester et laissez finir l’essai. Vous pouvez dire : « J’aimerais essayer mon trajet avant d’entendre le tien. » Cela préserve l’occasion du plus discret sans prétendre que son plan est juste. Une prévision fausse qu’on a pu tester peut être plus satisfaisante qu’une bonne instruction inexpliquée.',
        ],
      },
      'make-the-board-common-ground': {
        title: 'Vérifiez que vous parlez du même plateau',
        paragraphs: [
          'Décrivez les pièces par position, couleur et forme ou glyphe. « La rouge sous la porte jaune » se comprend mieux que « celle-là ». Après un coup, nommez la nouvelle position avant de continuer. Une conversation peut échouer parce que ses références sont périmées, même quand chacun comprend la règle.',
          'Dillenbourg et Traum (2006) ont étudié une résolution collaborative multimodale avec tableau blanc persistant et communication. Leur analyse distingue l’aide des représentations à la solution et l’établissement d’une compréhension mutuelle. C’était une tâche distante, pas OutBrick. Nous en tirons une habitude : la disposition visible est commune, mais il faut toujours vérifier ce que l’autre veut dire.',
          'Une brève confirmation évite une longue dispute. « Tu parles de la bleue du haut ? » ou « La rouge s’arrêterait ici ou une rangée plus haut ? » Répondez à l’incertitude précise. Répéter plus fort toute la solution résout rarement une référence erronée. Si une couleur est difficile à distinguer, utilisez glyphe et position plutôt que d’y voir de l’inattention.',
          'La [page quotidienne OutBrick](/daily) montre le même plateau choisi à tous à la même date UTC. Cela aide à comparer sans être une séance partagée en direct. Sur deux écrans, confirmez d’abord date et numéro. La position actuelle d’un ami ayant déjà joué plusieurs coups ne peut pas servir de point de départ à votre propre partie.',
        ],
      },
      'help-without-the-whole-answer': {
        title: 'Offrez le plus petit indice utile',
        paragraphs: [
          'Les indices servent mieux quand leur destinataire choisit leur taille. Au besoin, commencez par la règle : « La brique continue jusqu’à un obstacle. » Puis une zone ou dépendance : « Il faut peut-être dégager le couloir pour cette porte rouge. » Si plus est souhaité, décrivez un coup. Gardez tout le trajet pour une demande explicite. C’est notre étiquette suggérée, pas une fonction d’indices intégrée.',
          'Une question préserve parfois plus qu’un ordre : « Qu’est-ce qui pourrait arrêter cette brique à la bonne hauteur ? » Elle pointe la contrainte sans fermer la solution. Mais elle devient un ordre déguisé si vous insistez jusqu’à la réponse attendue. Laissez réfléchir et acceptez « Je préfère essayer ceci d’abord » comme réponse complète.',
          'Hansen et Spada (2010) ont utilisé deux expériences de tri d’images pour examiner l’aide à la résolution collaborative distante. Les résultats distinguaient processus de collaboration et résultats de résolution. Cela compte : une meilleure conversation vaut sans garantir un meilleur score. Nos suggestions de tours et d’indices cherchent une aide compréhensible et bienvenue, pas une résolution plus rapide ou un gain cognitif.',
          'Avec un enfant, grand-parent ou débutant, ne déduisez pas l’aide nécessaire de l’âge. Demandez et observez la difficulté réelle. Notre [guide du jeu avec les petits-enfants](/blog/playing-games-with-grandchildren) donne des idées plus larges. Ici, le but est plus petit : garder la personne dans la prochaine décision plutôt qu’en faire le public de votre solution.',
        ],
      },
      'recover-and-finish-together': {
        title: 'Gérez les erreurs et terminez sans attribuer de faute',
        paragraphs: [
          'Quand une prévision échoue, décrivez la conséquence avant la faute : « La bleue a bloqué la porte » sert mieux que « Tu as bougé la mauvaise ». Vérifiez référence obscure, règle nouvelle ou mauvais plan. Si l’annulation existe, demandez avant : la personne aux commandes peut vouloir voir si le nouvel état reste résoluble.',
          'Sur les plateaux web OutBrick, Annuler et Réinitialiser permettent de revenir, l’annulation influençant les étoiles. Ne transférez pas cela aux coûts de l’app. Dans celle-ci, vérifiez [le jeu équitable](/#fair) avant de convenir de reprises ou de dépenses de ressources. Partager l’écran implique aussi une décision partagée sur achats et vidéos récompensées ; ne choisissez pas pour quelqu’un d’autre.',
          'Une réussite permet de reconnaître les deux contributions. Repérer un arrêt aide, tout comme tester patiemment le trajet et voir un obstacle inattendu. « Nous avons compris pourquoi cela marche » garde l’attention sur le problème commun. Vous pouvez échanger les rôles, choisir un autre plateau ou arrêter. Résoudre ensemble n’exige pas un chapitre fini ni la preuve d’une productivité accrue.',
          `Pour essayer, prenez un plateau sur [la page de jeu OutBrick](/play), désignez la personne aux commandes et demandez l’aide souhaitée. Pour l’app complète, [retrouvez OutBrick sur l’App Store](${appStoreUrl('journal-together')}). L’arrangement social vous appartient ; ce n’est pas une fonction à acheter. La réussite la plus utile peut être que les deux veuillent encore jouer ensemble après la fin.`,
        ],
      },
    },
    pullQuote:
      'Une explication utile donne quelque chose à juger plutôt qu’une simple instruction à suivre.',
    faqs: [
      {
        question: 'OutBrick possède-t-il un mode coopératif ?',
        answer:
          'Cet article décrit la coopération informelle autour d’un écran, pas un mode coopératif ou multijoueur simultané intégré. Convenez de qui contrôle et discutez ensemble du trajet.',
      },
      {
        question: 'Comment aider sans gâcher le puzzle ?',
        answer:
          'Demandez la quantité d’aide voulue, puis commencez par une règle ou dépendance. Offrez un coup ou la solution seulement quand ce détail est souhaité.',
      },
      {
        question: 'Quand changer de personne aux commandes ?',
        answer:
          'Convenez d’un point clair, comme la fin d’un plateau ou une reprise. Demandez avant de prendre l’appareil, même si vous pensez avoir trouvé.',
      },
      {
        question: 'Résoudre ensemble garantit-il de meilleurs résultats ?',
        answer:
          'La recherche citée n’établit pas que cette pratique informelle améliore scores OutBrick ou cognition. Elle vise une conversation plus claire et bienvenue où chacun participe.',
      },
    ],
  },
};
