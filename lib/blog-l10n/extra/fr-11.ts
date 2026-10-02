import type { ExtraGuides } from '../../i18n/blog';

/** Complete French localization of the accessibility journal batch. */
export const fr11: ExtraGuides = {
  'outbrick-accessibility-commitment': {
    title: 'OutBrick s’engage pour les joueurs aveugles et VoiceOver',
    dek: 'Écouter les joueurs aveugles, parler honnêtement des limites actuelles et faire de l’accessibilité une priorité : les engagements d’OutBrick.',
    imageAlt:
      'Illustration du jeu OutBrick avec un téléphone, des briques colorées et deux personnages en briques sur un fond bleu marine',
    tags: [
      'accessibilité',
      'VoiceOver',
      'joueurs aveugles',
      'conception inclusive',
      'retours des joueurs',
    ],
    intro:
      'On peut aimer un puzzle et rencontrer malgré tout un obstacle qui ne devrait pas être là. C’est la leçon la plus importante des échanges sur OutBrick dans la communauté AppleVis. Des joueurs ont raconté leur découverte d’un nouveau genre de jeu, le plaisir de relever ses défis, leurs difficultés à comprendre un déplacement, et les commandes ou informations du plateau que VoiceOver ne rendait pas accessibles comme prévu. Toutes ces expériences méritent notre attention. Nous nous engageons pleinement pour l’accessibilité aux joueurs aveugles et aux utilisateurs de VoiceOver. Vos retours nous aident à rendre le plateau plus facile à explorer, les règles plus simples à apprendre et l’ensemble du jeu plus accueillant. Nous voulons que vous puissiez vous concentrer sur le puzzle auquel vous êtes venu jouer.',
    keyTakeaways: [
      'Les joueurs aveugles ont toute leur place dans les échanges sur les règles d’OutBrick, sa difficulté, le plaisir d’y jouer et son évolution.',
      'Les réponses du développeur du 2 octobre reconnaissent des obstacles précis et annoncent des améliorations ; elles ne confirment pas que tous ces changements sont déjà disponibles.',
      'Un retour utile décrit ce que vous vouliez faire et ce qui s’est passé. Vous n’avez pas à communiquer de diagnostic, de détails d’achat ni d’informations privées sur votre compte.',
    ],
    sections: {
      'start-with-the-player': {
        title: 'Partir de ce que le joueur vient chercher',
        paragraphs: [
          'En ouvrant OutBrick, on peut avoir envie de venir à bout d’un plateau récalcitrant, de découvrir si les jeux de tri nous plaisent, ou simplement de passer quelques minutes agréables avec un nouveau puzzle. L’accessibilité doit servir cette envie. Trouver un bouton compte, mais comprendre le choix qu’il propose et pouvoir profiter du résultat compte tout autant. Une interface techniquement accessible peut encore laisser trop de choses inexpliquées.',
          'Des entretiens menés auprès de 32 joueurs mobiles aveugles et malvoyants en Chine ont mis en évidence des motivations variées, dont le sentiment d’accomplissement et les liens sociaux, ainsi que des obstacles d’accès (Ran et al., 2025). On vient jouer pour plus d’une raison.',
          'Dans la [discussion AppleVis](https://www.applevis.com/comment/217460#comment-217460), les joueurs nous ont raconté ce qui leur plaisait, ce qui les bloquait et ce qu’ils souhaitaient essayer ensuite. Cette vision d’ensemble nous est précieuse. Le signalement d’une porte inaccessible compte même quand la personne adore le jeu. Le plaisir de découvrir un genre qui semblait jusque-là hors de portée compte aussi. L’un et l’autre nous aident à comprendre ce qui mérite d’être développé.',
        ],
      },
      'say-what-is-current': {
        title: 'Transformer les retours en améliorations concrètes',
        paragraphs: [
          'Nous avons présenté OutBrick sur AppleVis en décrivant ses couleurs associées à des symboles, les libellés des briques qui précisent leur couleur, leur forme et leur position, ainsi que les actions de glissement de VoiceOver. Les joueurs nous ont aidés à repérer des difficultés pour trouver certaines briques et portes au toucher. Nous avons reconnu ces problèmes. Pour la prochaine mise à jour, nous travaillons à une exploration qui annonce chaque brique et chaque porte à son emplacement, ainsi que les cases vides entre elles.',
          'Les écrans qui entourent le plateau comptent aussi. Pour la prochaine mise à jour, nous prévoyons des boutons de boutique qui répondent à VoiceOver, un écran d’accueil plus rapide, des informations plus claires sur les portes gelées et une prise en compte correcte de la fonte de la glace dans les missions. Notre [guide de l’accessibilité au-delà du plateau](/blog/outbrick-accessibility-beyond-board) explique ce que les joueurs ont signalé et ce que ces changements doivent faciliter.',
          'Gonçalves et al. (2023) ont analysé des parties publiées par des joueurs aveugles et les compromis entre accès, liberté d’action et engagement. Leur travail nous rappelle que réussir une tâche peut laisser subsister des difficultés importantes.',
          'Lorsqu’une action ne fonctionne qu’en passant par un chemin peu pratique, l’effort supplémentaire compte toujours. Nous voulons vous donner des moyens utiles d’explorer le plateau et de comprendre où se trouvent les éléments. Notre [guide du repérage sur le plateau](/blog/outbrick-voiceover-spatial-board) explique comment l’exploration tactile et la navigation séquentielle peuvent vous aider à différents moments.',
        ],
        note: 'Situation au 2 octobre 2026 : les améliorations décrites pour la prochaine mise à jour sont encore en cours de réalisation. Les réponses sur AppleVis annoncent des engagements, pas la disponibilité de ces correctifs.',
      },
      'keep-the-puzzle-worth-playing': {
        title: 'Préserver le plaisir de relever un défi',
        paragraphs: [
          'L’accessibilité laisse aussi une place au défi. La communauté a parlé à la fois de plaisir et de difficulté : plusieurs notions arrivent ensemble, le nombre de coups semble juste, et la manière de déplacer une brique n’est pas toujours claire. Ce sont des problèmes différents. Quelqu’un qui maîtrise les commandes peut avoir envie d’un plateau exigeant ; quelqu’un qui les apprend encore a besoin d’explications avant que le jeu puisse raisonnablement lui demander d’élaborer un plan.',
          'Dans une petite étude mêlant questionnaire et entretiens, des joueurs présentant une déficience visuelle appréciaient la richesse et la complexité des expériences tout en décrivant des difficultés d’accès (Andrade et al., 2019). Il faut laisser une place à ces préférences.',
          'Nous remanions les niveaux avec l’objectif de rendre les débuts plus faciles à comprendre. Les changements prévus pour la prochaine mise à jour, décrits dans nos réponses, comprennent des premiers plateaux plus doux, des notions introduites une par une, de courtes fiches explicatives et davantage de coups au départ. Le but est de donner à un nouveau joueur une vraie chance d’apprendre chaque notion avant d’en combiner plusieurs. Nous tenons à préserver le plaisir de trouver une solution satisfaisante.',
          'Après une tentative difficile, une question utile est de savoir ce qui l’a rendue difficile : une dépendance intéressante entre les briques, une règle qui n’avait pas été expliquée, ou une information inaccessible ? Notre [guide des déplacements et des premiers pas](/blog/outbrick-voiceover-slide-actions) aide à distinguer ces questions. Elles peuvent conduire à des améliorations très différentes.',
        ],
      },
      'feedback-that-helps': {
        title: 'Décrire l’objectif, puis l’obstacle',
        paragraphs: [
          'Un signalement d’accessibilité utile peut être bref. Commencez par l’écran ou le plateau et par ce que vous vouliez faire. Expliquez comment vous avez atteint la commande, ce que vous attendiez et ce qui s’est produit à la place. Par exemple : « Je peux atteindre cette porte en balayant les éléments, mais rien n’est annoncé quand je touche son emplacement. » Cela décrit clairement une différence d’interaction, sans exiger de vocabulaire technique.',
          'Si vous le pouvez facilement, ajoutez la version de l’app, le modèle de l’appareil, la version du système d’exploitation et indiquez si le comportement se reproduit après avoir quitté puis rouvert l’écran. Ces détails peuvent aider à distinguer les versions et les situations. Ce sont des éléments de contexte facultatifs, pas une raison de rejeter le signalement d’une personne qui les trouve difficilement. Dire « je ne sais pas pourquoi cela s’est produit » est parfaitement utile dès lors que les étapes sont claires.',
          'Utilisez le [formulaire de contact d’OutBrick](/contact) pour nous écrire directement et évitez les informations de santé, les identifiants de connexion, les données de paiement ou les reçus d’achat, sauf si une démarche d’assistance distincte exige réellement un élément précis. Vous pouvez décrire une interaction avec VoiceOver sans expliquer pourquoi vous utilisez VoiceOver. Si le problème concerne une action dans la boutique, il est inutile d’effectuer un achat simplement pour le démontrer.',
        ],
        bullets: [
          'Où : l’écran, le niveau ou la commande concernés.',
          'Objectif : ce que vous cherchiez à faire.',
          'Action et résultat : ce que vous avez fait, puis ce qui a été annoncé ou ce qui a changé.',
          'Contexte, si vous l’avez : versions de l’app et du système, appareil, et éventuelle répétition du problème.',
        ],
      },
      'work-with-different-experiences': {
        title: 'Accueillir différentes façons de jouer',
        paragraphs: [
          'L’exploration tactile et la navigation séquentielle répondent à des besoins différents. On peut chercher à parcourir efficacement les éléments à un moment, puis à comprendre leur disposition dans l’espace à un autre. Rendre une information accessible par un chemin ne rend pas automatiquement l’autre superflu. C’est particulièrement vrai lorsque l’espace vide fait partie de la solution d’un puzzle.',
          'Nair et al. (2024) ont comparé des outils d’exploration non visuelle auprès de neuf participants aveugles et malvoyants. Les préférences se partageaient entre Surveyor et un menu audio, ce qui souligne la diversité des priorités dans ce petit échantillon de personnes expérimentées.',
          'Nous voulons comprendre l’expérience que vous recherchez. Dans la discussion AppleVis, un autre développeur de jeux accessibles a proposé de partager son expérience, et nous avons accueilli cette proposition avec plaisir. L’échange d’idées peut faire apparaître des questions passées inaperçues : une annonce est-elle utile à cet instant, une commande est-elle facile à découvrir, et pouvez-vous retrouver vos repères après un coup ? Ces échanges méritent de se poursuivre.',
          'Vos retours sont les bienvenus, mais ils ne sont pas une obligation. Vous devez pouvoir arrêter, faire une pause ou décider que l’expérience actuelle ne vous convient pas. Les avis sont eux aussi facultatifs. Le récit honnête d’un obstacle est utile, qu’il s’accompagne ou non de compliments, d’une note ou d’une promesse de tester une autre version.',
        ],
      },
      'follow-the-progress': {
        title: 'Mesurer les progrès à ce que vous vivez en jouant',
        paragraphs: [
          'Consultez la [page accessibilité](/accessibility) pour les informations sur la prise en charge et les [notes de version](/whats-new) pour suivre les changements publiés. Lorsque vous essayez une mise à jour, dites-nous si ce qui comptait pour vous est devenu plus facile. Peut-être trouvez-vous une porte plus naturellement, comprenez-vous une règle plus vite ou atteignez-vous un écran qui vous bloquait auparavant. Ce sont ces améliorations concrètes que nous voulons vous faire ressentir.',
          'Les joueurs aveugles doivent pouvoir découvrir, comprendre et apprécier le jeu dans son ensemble. C’est l’engagement que nous prenons au fil du développement d’OutBrick. Nous voulons que vos retours soient pris au sérieux lorsqu’un obstacle se présente, et continuer à apprendre de ces moments qui vous donnent envie de jouer un plateau de plus. Merci à toutes les personnes qui nous ont aidés à voir quelles devaient être les prochaines étapes.',
        ],
      },
    },
    pullQuote:
      'Les joueurs aveugles doivent pouvoir découvrir, comprendre et apprécier le jeu dans son ensemble.',
    faqs: [
      {
        question:
          'OutBrick s’engage-t-il pleinement pour l’accessibilité aux joueurs aveugles ?',
        answer:
          'Oui. L’accessibilité aux joueurs aveugles et aux utilisateurs de VoiceOver est un engagement durable d’OutBrick, qui concerne le plateau, les règles et les écrans autour du jeu. Cet engagement ne signifie pas que tous les obstacles signalés ont déjà été supprimés.',
      },
      {
        question:
          'Les correctifs promis sur AppleVis sont-ils déjà disponibles ?',
        answer:
          'Les réponses du 2 octobre annoncent plusieurs changements pour la prochaine mise à jour. Elles ne confirment pas que ces correctifs sont disponibles. Consultez les [notes de version](/whats-new) et vérifiez la version installée pour distinguer une promesse d’un changement déjà réalisé.',
      },
      {
        question: 'Que faut-il inclure dans un signalement d’accessibilité ?',
        answer:
          'Décrivez l’écran ou le plateau, ce que vous vouliez faire, votre action et le résultat. Les versions de l’app et du système ainsi que l’appareil peuvent aider, si vous les connaissez. Évitez les informations de santé, les identifiants de connexion et les données de paiement privées.',
      },
      {
        question:
          'Faut-il acheter quelque chose ou laisser un avis pour donner son retour ?',
        answer:
          'Non. Vous pouvez utiliser le [formulaire de contact](/contact) pour expliquer un problème ou proposer une idée, sans effectuer d’achat ni laisser d’avis. Les retours et les avis sont facultatifs.',
      },
    ],
  },
  'outbrick-voiceover-spatial-board': {
    title: 'Se repérer sur le plateau d’OutBrick avec VoiceOver',
    dek: 'Explorez briques, portes et cases vides avec VoiceOver pour mieux comprendre le plateau d’OutBrick et les améliorations prévues prochainement.',
    imageAlt:
      'Illustration du jeu OutBrick avec un téléphone, des briques colorées et deux personnages en briques sur un fond bleu marine.',
    tags: [
      'accessibilité',
      'VoiceOver',
      'conception inclusive',
      'jeux de puzzle',
      'raisonnement spatial',
    ],
    intro:
      'Une porte peut être facile à entendre et difficile à situer. Vous la trouvez en balayant les éléments du plateau, mais vous peinez à repérer son emplacement en déplaçant un doigt sur l’écran. Cette différence compte dans OutBrick : savoir qu’une brique existe n’est que le début du travail pour prévoir son trajet. Des joueurs sur AppleVis ont précisément décrit ce décalage et demandé que les cases vides soient annoncées. Leurs signalements offrent un point de départ concret pour parler de la lecture spatiale du plateau et expliquer clairement les améliorations que nous avons promises.',
    keyTakeaways: [
      'La navigation séquentielle et l’exploration tactile directe répondent à des questions différentes sur le plateau ; les comparer peut révéler des informations manquantes.',
      'L’espace vide aide à comprendre les trajets possibles : une zone qui n’est pas annoncée ne doit donc jamais être considérée d’office comme une case libre.',
      'Les corrections du repérage au toucher et les annonces des cases vides sont en cours de réalisation pour la prochaine mise à jour.',
    ],
    sections: {
      'build-a-picture-of-relationships': {
        title: 'Commencer par les relations entre les pièces',
        paragraphs: [
          'Pour comprendre un puzzle coulissant, il faut plus qu’une collection de couleurs. Une brique a une position, une porte correspondante et des voisines qui peuvent lui barrer la route. L’espace entre ces éléments détermine les coups possibles. Entendre une fois le nom de chaque objet ne suffit pas forcément à saisir ces relations, surtout sur un plateau que vous n’avez encore jamais exploré.',
          'Les libellés VoiceOver d’OutBrick indiquent la couleur, la forme et la position d’une brique. Ils constituent un point de départ pour vous représenter le plateau. Écoutez d’abord l’identité d’une pièce, puis demandez-vous où se trouve la porte de sa couleur et ce qui les sépare. Il n’est pas nécessaire de mémoriser tout le plateau avant d’examiner un trajet possible.',
          'Ran et al. (2025) ont interrogé 32 joueurs mobiles expérimentés, aveugles ou malvoyants, en Chine ; les participants souhaitaient une navigation intégrée du focus, des tutoriels accessibles et des retours personnalisables.',
          'Cela nous incite à examiner la compréhension du plateau comme une tâche à part entière, distincte de l’exécution d’un glissement. Notre [guide des actions de glissement de VoiceOver](/blog/outbrick-voiceover-slide-actions) aborde le déplacement une fois que vous avez trouvé la pièce voulue.',
        ],
      },
      'compare-two-ways-of-exploring': {
        title: 'Deux façons d’explorer, deux types de questions',
        paragraphs: [
          'La navigation séquentielle consiste à passer d’un élément accessible à l’autre par des balayages vers la gauche ou la droite. L’exploration tactile directe consiste à déplacer un doigt sur le plateau pour entendre ce qui se trouve dessous. La première aide à découvrir les éléments disponibles. La seconde aide à associer une annonce à un emplacement. L’ordre de navigation ne doit pas être pris pour une carte des éléments physiquement voisins.',
          'Un joueur sur AppleVis a signalé qu’il ne trouvait que deux portes au toucher, alors qu’une autre apparaissait dans la navigation séquentielle. Certaines briques, notamment celles entourées d’autres pièces ou bloquant une porte d’une autre couleur, se trouvaient elles aussi par balayage, mais restaient absentes sous le doigt. Ce joueur a également signalé avoir perdu des niveaux après qu’une brique importante n’avait pas été annoncée. Nous avons reconnu ces deux défauts. Si les deux méthodes vous donnent des informations différentes, une annonce manquante mérite d’être signalée ; elle ne prouve pas que vous avez mal compris le puzzle.',
          'Kane et al. (2008) ont étudié dix utilisateurs de lecteurs d’écran sur des tâches sans lien avec le jeu ; leur prototype séparait l’exploration de l’activation, mais une utilisation globalement plus rapide s’accompagnait de davantage d’erreurs.',
          'Cet exemple ancien soulève ici une question de conception utile : peut-on explorer librement avant de choisir une action ? Vous pouvez préférer une méthode d’exploration ou combiner les deux. L’essentiel est de pouvoir découvrir les informations dont vous avez besoin avant de décider de jouer un coup.',
        ],
      },
      'why-empty-cells-matter': {
        title: 'Une case vide est une information à part entière',
        paragraphs: [
          'Un autre joueur expliquait que la navigation par balayages était la plus efficace pour lui, mais que déplacer un doigt sur le plateau restait nécessaire pour en comprendre l’organisation spatiale. Il manquait une annonce explicite des cases vides. Sans elle, impossible d’interpréter avec certitude une zone silencieuse comme de l’espace disponible. C’est une observation précise sur ce qu’un puzzle doit communiquer.',
          'Imaginez un plateau avec une brique, une porte et un espace entre elles. Pour prévoir le glissement, il faut savoir si cet espace est dégagé. Le silence seul laisse plusieurs possibilités : un espace vide, un objet qui n’a pas été annoncé ou un emplacement situé hors de la zone du plateau. Une annonce claire de case vide lèverait une partie de cette incertitude.',
          'L’espace vide fait partie des informations du puzzle. Il permet de distinguer un trajet bloqué d’un trajet possible et facilite l’examen des relations entre les pièces. Cela ne garantit toutefois pas qu’une brique s’arrêtera dans cet espace : dans OutBrick, un glissement complet standard se poursuit jusqu’à ce que quelque chose arrête la brique. Notre [guide des déplacements](/blog/outbrick-voiceover-slide-actions) explique pourquoi le point d’arrêt compte autant que le passage dégagé.',
        ],
      },
      'a-small-orientation-routine': {
        title: 'Adopter quelques repères simples et répétables',
        paragraphs: [
          'Commencez par une brique et sa destination. Découvrez ce que vous pouvez grâce à la navigation séquentielle, puis revenez au toucher sur les emplacements qui comptent. Si les deux parcours ne concordent pas, gardez cette incertitude dans votre plan au lieu de la remplacer par une supposition. Faites cette comparaison lorsqu’elle vous aide à vous repérer, et dites-nous quand l’une ou l’autre méthode omet une information.',
          'Gonçalves et al. (2023) ont analysé plus de 70 heures de parties publiées par des joueurs aveugles ; leur étude qualitative a relevé des compromis entre accès, liberté d’action et engagement dans des jeux centrés sur le visuel.',
          'Concrètement, nous proposons de garder ces habitudes simples. Vous devez pouvoir choisir un trajet à explorer, faire une pause et revenir sur un emplacement incertain sans vous sentir obligé de maîtriser des contournements experts. Après un glissement réussi, examinez à nouveau la zone qui a changé : l’emplacement occupé il y a un instant peut désormais avoir un autre rôle.',
        ],
        bullets: [
          'Identifiez la brique et la porte de sa couleur avant de prévoir le trajet.',
          'Vérifiez quelles pièces se trouvent sur ce trajet et où un glissement s’arrêterait.',
          'Comparez l’exploration tactile et la navigation séquentielle lorsqu’une information semble manquer.',
          'Considérez le silence comme une information incertaine tant que vous n’avez pas de moyen fiable de confirmer l’état de cet espace.',
        ],
      },
      'what-we-have-promised': {
        title: 'Les engagements pour la prochaine mise à jour',
        paragraphs: [
          'Dans notre [réponse du 2 octobre sur AppleVis consacrée à l’exploration tactile](https://www.applevis.com/comment/217455#comment-217455), nous nous sommes engagés à rendre chaque brique et chaque porte repérables à leur emplacement réel, et à annoncer comme vides les cases libres. La suggestion ultérieure concernant les cases vides a confirmé cette même priorité. Au 2 octobre 2026, ces correctifs sont encore en cours de réalisation pour la prochaine mise à jour.',
          'Nous avons aussi indiqué que tous les niveaux étaient en cours de refonte, en commençant par les premiers villages, et que VoiceOver restait au cœur de ce travail. La refonte et la navigation répondent à des besoins différents : proposer un défi satisfaisant, et offrir un moyen fiable de trouver les informations nécessaires pour le relever. Nous voulons que vous puissiez consacrer votre attention au choix d’un trajet en comprenant bien les pièces concernées.',
          'Nair et al. (2024) ont comparé trois outils de navigation auprès de neuf joueurs ; les préférences se partageaient entre Surveyor et un menu dans un jeu Windows conçu pour l’étude.',
          'Cette petite étude nous encourage à laisser une place à différentes préférences d’exploration. Son contexte était différent de celui d’OutBrick, mais la question reste utile : pouvez-vous explorer d’une manière qui vous convient ? Notre [page accessibilité](/accessibility) rassemble les informations sur l’ensemble des fonctionnalités.',
        ],
      },
      'share-a-useful-board-report': {
        title: 'Nous aider à situer l’information manquante',
        paragraphs: [
          'Un signalement utile peut tenir en quelques mots : indiquez le niveau, décrivez la brique ou la porte et précisez si vous l’avez trouvée par navigation séquentielle, au toucher, par les deux méthodes ou par aucune. Ajoutez la version de l’app, l’appareil et la version du système d’exploitation si vous les connaissez. Ces détails aident à distinguer un problème lié à une disposition précise d’un problème de navigation plus général.',
          'Vous n’avez pas besoin de résoudre le plateau ni de diagnostiquer le logiciel avant de nous contacter. « J’entends cette porte en balayant, mais je ne la trouve pas sous mon doigt » décrit déjà quelque chose de concret. Si vous pouvez reproduire le problème, les étapes qui y conduisent sont utiles ; sinon, votre observation initiale mérite tout de même d’être partagée.',
          'Utilisez le [formulaire de contact](/contact) pour nous envoyer ce récit. Notre [engagement pour l’accessibilité](/blog/outbrick-accessibility-commitment) explique comment ces signalements s’inscrivent dans un travail plus large. Le but est de rendre les pièces et les espaces du plateau assez compréhensibles pour que la décision suivante vous appartienne.',
        ],
      },
    },
    pullQuote: 'L’espace vide fait partie des informations du puzzle.',
    faqs: [
      {
        question:
          'Pourquoi puis-je trouver une porte d’OutBrick par balayage, mais pas au toucher ?',
        answer:
          'Des joueurs sur AppleVis ont signalé ce décalage pour des portes et certaines briques, et nous avons reconnu ces défauts le 2 octobre 2026. Nos réponses annoncent des correctifs de repérage au toucher pour la prochaine mise à jour ; elles ne confirment pas qu’un correctif est déjà disponible.',
      },
      {
        question: 'Le silence signifie-t-il qu’une case d’OutBrick est vide ?',
        answer:
          'Le silence seul ne confirme pas de manière fiable qu’une case est vide, surtout tant que les problèmes d’exploration tactile signalés ne sont pas résolus. L’annonce explicite des cases vides fait partie de nos engagements pour la prochaine mise à jour.',
      },
      {
        question:
          'Vaut-il mieux utiliser l’exploration tactile ou la navigation séquentielle de VoiceOver ?',
        answer:
          'Elles peuvent répondre à des besoins différents : la navigation séquentielle aide à découvrir les éléments, tandis que l’exploration tactile aide à les associer à des positions sur l’écran. Utilisez la méthode qui vous convient et signalez les écarts entre les deux.',
      },
      {
        question: 'Où signaler un plateau difficile à explorer ?',
        answer:
          'Utilisez le [formulaire de contact](/contact) d’OutBrick, idéalement avec le niveau, la version de l’app et une description de ce qu’annonce chaque méthode de navigation. Vous pouvez signaler le problème sans terminer le plateau ni en connaître la cause technique.',
      },
    ],
  },
  'outbrick-voiceover-slide-actions': {
    title: 'Déplacer les briques d’OutBrick avec les actions VoiceOver',
    dek: 'Les quatre directions, les portes assorties et les points d’arrêt d’OutBrick : apprenez les actions VoiceOver et découvrez les explications prévues.',
    imageAlt:
      'Illustration du jeu OutBrick avec un téléphone, des briques colorées et deux personnages en briques sur un fond bleu marine.',
    tags: [
      'accessibilité',
      'VoiceOver',
      'conception inclusive',
      'jeux de puzzle',
      'premiers pas',
    ],
    intro:
      'Se demander comment déplacer une brique vers le bas est parfaitement normal quand le jeu n’a pas expliqué clairement ses commandes. Un joueur sur AppleVis avait compris que les briques d’OutBrick devaient quitter le plateau, mais pensait qu’elles ne pouvaient monter que vers le haut et ne trouvait pas de tutoriel. Notre réponse a expliqué les quatre directions, les portes de même couleur et les actions de VoiceOver, puis promis un apprentissage plus clair dans la prochaine mise à jour. Ce guide rassemble ces éléments pour vous aider à distinguer le choix d’une direction, la compréhension d’un trajet et la décision de déplacer une brique avant les autres.',
    keyTakeaways: [
      'Une brique peut glisser vers le haut, le bas, la gauche ou la droite lorsque le passage est libre, et elle sort par une porte de sa couleur.',
      'Lorsque le focus est sur une brique, les balayages vers le haut et le bas permettent de choisir parmi les actions de glissement de VoiceOver ; ces gestes ne limitent pas les déplacements à la verticale.',
      'De courtes fiches explicatives, des plateaux d’introduction plus doux et davantage de coups sur les premiers plateaux sont prévus pour la prochaine mise à jour.',
    ],
    sections: {
      'match-the-brick-to-its-gate': {
        title: 'Trouver d’abord la destination, où qu’elle soit',
        paragraphs: [
          'Le but de base est de faire sortir les briques par les portes de leur couleur. Une brique rouge a besoin de sa porte rouge ; atteindre une autre porte ne remplit pas cette condition. Les portes peuvent se trouver sur n’importe quel côté du plateau. Aucune règle générale n’impose à toutes les briques de monter ni ne place systématiquement la bonne sortie sur le bord supérieur.',
          'OutBrick indique à VoiceOver la couleur, la forme et la position de chaque brique, et associe les briques et les portes correspondantes à des symboles distincts. Commencez par identifier la pièce que vous voulez déplacer et par trouver sa destination. Examinez ensuite ce qui les sépare. Une sortie peut être proche d’une brique tout en exigeant que d’autres pièces bougent d’abord.',
          'Imaginez une porte de la bonne couleur à droite, avec une autre brique entre elle et la pièce sélectionnée. Le problème immédiat est cette brique intermédiaire. Chercher une action vers le haut ne dégagera pas un trajet qui doit s’ouvrir sur le côté. Pour vous aider à situer les pièces avant de choisir les actions, consultez notre [guide du repérage sur le plateau avec VoiceOver](/blog/outbrick-voiceover-spatial-board).',
        ],
      },
      'predict-the-stopping-point': {
        title: 'Le glissement se poursuit jusqu’à un obstacle',
        paragraphs: [
          'Pour un glissement directionnel standard, OutBrick applique la règle du glissement jusqu’à l’arrêt : la brique suit le trajet disponible jusqu’à ce que quelque chose l’arrête. Écoutez le nom complet de l’action et prévoyez le point d’arrivée de celle que vous choisissez. Avant de vous engager sur un trajet, demandez-vous à la fois si la brique peut commencer à bouger et où son déplacement se terminera.',
          'Un exemple imaginaire simple peut aider. À gauche d’une brique se trouvent plusieurs cases libres, puis une autre pièce. Un glissement complet standard vers la gauche fait avancer la brique sélectionnée dans l’espace disponible jusqu’à ce qu’elle soit arrêtée. Elle ne s’arrête pas automatiquement après la première case libre. L’autre pièce peut donc être un obstacle ou un point d’arrêt utile, selon votre plan.',
          'L’ordre des coups devient alors important. Déplacer une brique qui fait obstacle peut ouvrir une sortie, mais retirer trop tôt une pièce qui sert de butée peut modifier un glissement ultérieur. Vous pouvez réfléchir à cet enchaînement avant d’agir. Notre [guide du défi sans chrono](/blog/outbrick-untimed-puzzle-challenge) explique la différence entre le temps de réflexion et le nombre de coups autorisés ; avoir le temps d’examiner un plateau ne donne pas un nombre illimité de coups.',
        ],
      },
      'choose-a-voiceover-slide-action': {
        title: 'Le geste choisit l’action ; son nom indique la direction',
        paragraphs: [
          'Notre [explication des déplacements sur AppleVis](https://www.applevis.com/comment/217463#comment-217463) donne ces indications pour VoiceOver : placez le focus sur une brique, puis balayez vers le haut ou le bas pour choisir parmi les actions de glissement vers le haut, le bas, la gauche et la droite. Écoutez le nom de l’action. La direction du geste de sélection et celle indiquée par l’action jouent des rôles différents.',
          'Vous pouvez par exemple balayer vers le haut ou le bas pour sélectionner l’action de glissement vers la gauche. Cela ne transforme pas le coup prévu en glissement vers le haut ou le bas. Le nom de l’action indique le déplacement que vous choisissez. Cette distinction répond à la confusion initiale sans vous demander de déduire la direction d’une brique du geste utilisé pour parcourir ses actions.',
          'Kane et al. (2008) ont séparé l’exploration de l’activation dans un prototype testé par dix utilisateurs de lecteurs d’écran sur des tâches sans lien avec le jeu ; les gains de vitesse s’accompagnaient de davantage d’erreurs.',
          'Avec les gestes standard des actions personnalisées de VoiceOver, touchez deux fois l’écran après avoir choisi l’action pour l’exécuter, comme l’expliquent les [indications d’Apple sur les actions personnalisées](https://developer.apple.com/videos/play/wwdc2019/250/?time=205). Avant de le faire, vérifiez la brique qui a le focus et la direction souhaitée. Ensuite, examinez la zone modifiée et comparez le résultat à votre prévision. Si les actions disponibles ne sont pas claires avec votre configuration, dites-nous ce qu’annonce VoiceOver.',
        ],
      },
      'check-the-route-when-movement-is-unclear': {
        title: 'Si un coup surprend, vérifier une chose à la fois',
        paragraphs: [
          'Si le résultat diffère de votre intention, revenez à la pièce sélectionnée et vérifiez son identité et sa position. Vérifiez ensuite l’action que vous vouliez choisir, puis l’espace dans cette direction. Enfin, retrouvez la porte de la bonne couleur. Cet ordre évite de mêler un problème de navigation, une erreur de sélection d’action et une contrainte du puzzle dans une seule question frustrante.',
          'Certains trajets sont bloqués parce qu’une autre brique doit bouger d’abord. D’autres incertitudes peuvent venir des défauts d’exploration tactile signalés sur AppleVis, lorsqu’une porte ou une brique se trouve par navigation séquentielle, mais pas sous le doigt. Ne supposez pas qu’une zone est libre simplement parce que rien n’y a été annoncé. Des correctifs propres à ces défauts signalés sont prévus pour la prochaine mise à jour.',
          'Ran et al. (2025) ont interrogé 32 joueurs mobiles expérimentés, aveugles ou malvoyants, en Chine ; les participants demandaient des tutoriels accessibles, une navigation du focus et une configuration initiale plus simple.',
          'C’est un contexte utile pour notre façon de concevoir les explications. Expliquer une commande doit aider à distinguer l’état du plateau de la manière dont vous agissez dessus. Vous ne devriez pas avoir à deviner lequel des deux pose problème avant de demander de l’aide.',
        ],
      },
      'teach-one-idea-at-a-time': {
        title: 'Ce que nous avons promis de mieux expliquer',
        paragraphs: [
          'La question sur le tutoriel s’accompagnait du retour d’un autre joueur : plusieurs mécaniques arrivaient ensemble et le nombre de coups autorisés semblait difficile à respecter. Nous avons reconnu que les débuts demandaient une introduction plus douce. Pour la prochaine mise à jour, nous avons promis de courtes fiches explicatives à la première apparition d’une notion, des plateaux d’introduction qui enseignent une seule notion à la fois et davantage de coups sur les premiers plateaux.',
          'Au 2 octobre 2026, ces changements d’apprentissage sont encore en cours de réalisation pour la prochaine mise à jour. Nous remanions également tous les niveaux, en commençant par les premiers villages, avec l’engagement de maintenir la possibilité de jouer avec VoiceOver. Le but est de proposer un point de départ qui vous permette de gagner en confiance dans votre compréhension des règles.',
          'Andrade et al. (2019) ont recueilli les réponses de 17 joueurs présentant une déficience visuelle et mené six entretiens ; les participants appréciaient la richesse du jeu, tout en décrivant des tensions entre complexité et accessibilité.',
          'Notre réponse de conception consiste à expliquer une règle avant de la combiner avec d’autres. Comprendre ce qui arrête une brique, trouver une porte de la bonne couleur et gérer plusieurs obstacles peuvent chacun procurer du plaisir. Les présenter clairement doit permettre de chercher une solution plutôt que de se demander ce que signifient les commandes.',
        ],
      },
      'keep-the-next-decision-yours': {
        title: 'Garder la main sur votre prochaine décision',
        paragraphs: [
          'Essayez de résumer le but de votre prochain coup en une courte phrase : « Cela dégage le trajet jusqu’à la porte » ou « Cela crée un point d’arrêt. » Si vous ne pouvez pas encore prévoir l’effet du glissement, revenez aux pièces concernées avant d’agir. Vous pouvez apprendre une relation à la fois, sans essayer de garder toute la solution en tête.',
          'Ryan et al. (2006) ont associé les sentiments de compétence et d’autonomie au plaisir de jouer dans quatre études sur les jeux ; ces associations n’établissent pas l’effet d’une interface particulière.',
          'La recherche nous apporte des questions utiles sur le choix et la compréhension ; votre expérience d’un plateau réel nous indique où concentrer le travail. Consultez nos [informations sur l’accessibilité](/accessibility) pour une vue d’ensemble des fonctionnalités, ou utilisez le [formulaire de contact](/contact) en indiquant le niveau, la direction choisie et l’annonce qui vous a laissé dans le doute. Un signalement clair peut commencer par un seul coup.',
        ],
      },
    },
    pullQuote: 'Un signalement clair peut commencer par un seul coup.',
    faqs: [
      {
        question:
          'Les briques d’OutBrick peuvent-elles descendre et aller sur les côtés avec VoiceOver ?',
        answer:
          'Oui. Nos indications de développeur décrivent des actions de glissement vers le haut, le bas, la gauche et la droite lorsque l’espace permet le déplacement. Les portes peuvent se trouver sur n’importe quel côté du plateau.',
      },
      {
        question:
          'Les balayages VoiceOver vers le haut et le bas limitent-ils la brique à des déplacements verticaux ?',
        answer:
          'Non. Lorsque le focus est sur une brique, nos indications utilisent les balayages vers le haut et le bas pour choisir parmi les actions directionnelles. Écoutez le nom de l’action sélectionnée, qui peut indiquer la gauche, la droite, le haut ou le bas.',
      },
      {
        question:
          'Pourquoi une brique d’OutBrick traverse-t-elle une case vide sans s’y arrêter ?',
        answer:
          'Un glissement directionnel complet standard suit la règle du glissement jusqu’à l’arrêt : la brique continue donc jusqu’à ce que quelque chose l’arrête. Écoutez le nom complet de l’action pour comprendre le déplacement choisi. Tenez compte du point d’arrêt prévu autant que du trajet disponible.',
      },
      {
        question:
          'Où se trouvent les fiches explicatives décrites dans les réponses sur AppleVis ?',
        answer:
          'Les réponses du 2 octobre 2026 promettent des fiches explicatives pour la prochaine mise à jour et n’indiquent pas où trouver un tutoriel actuellement disponible. Des premiers plateaux plus doux et davantage de coups d’introduction sont aussi des engagements pour l’avenir dans cette discussion.',
      },
    ],
  },
  'outbrick-untimed-puzzle-challenge': {
    title: 'OutBrick sans chrono : la place pour un vrai défi',
    dek: 'Explorer à son rythme et commencer plus doucement : comment OutBrick articule limite de coups, jeu sans chrono et améliorations d’apprentissage.',
    imageAlt:
      'Un téléphone affichant les briques colorées d’OutBrick, avec deux personnages en briques sur un fond bleu marine',
    tags: [
      'accessibilité',
      'VoiceOver',
      'jeux de puzzle',
      'conception de la difficulté',
      'conception inclusive',
    ],
    intro:
      'Prenez un moment pour trouver les portes, suivre un trajet possible et changer d’avis sur votre premier coup. Cette liberté d’explorer compte dans OutBrick, surtout quand vous vous représentez le plateau avec VoiceOver. Les échanges sur AppleVis nous ont apporté des récits encourageants de joueurs découvrant un nouveau genre de puzzle favori, ainsi que des questions précises sur la difficulté, le nombre de coups autorisés et un chrono signalé. Nous voulons y répondre directement et expliquer comment nous rendons les premiers plateaux plus accueillants tout en préservant le plaisir d’un bon défi. Les travaux de recherche présentés ici apportent un éclairage utile ; aucune de ces études n’a évalué OutBrick.',
    keyTakeaways: [
      'Jouer sans chrono laisse le temps d’explorer un plateau ; le nombre de coups autorisés continue de limiter les actions pour le résoudre.',
      'Nous présentons OutBrick comme un jeu sans chrono, alors qu’un joueur a signalé en avoir rencontré un. Cette divergence n’est pas résolue dans la discussion.',
      'Pour la prochaine mise à jour, nous prévoyons des premiers plateaux plus doux, des mécaniques présentées une par une et davantage de coups au début.',
    ],
    sections: {
      'understanding-before-moving': {
        title: 'Donner à la compréhension le temps qu’il lui faut',
        paragraphs: [
          'Avant de choisir un coup, une personne qui joue avec VoiceOver peut avoir besoin de trouver une brique, d’identifier sa porte, d’explorer les espaces qui les séparent et de vérifier ce qui arrêtera son glissement. C’est déjà un travail important. Il permet de se représenter le plateau à partir d’informations découvertes successivement. Une règle qui décompte le temps pendant cette étape change la tâche demandée au joueur.',
          'Dans la discussion AppleVis, un joueur a expliqué le problème en faisant une comparaison avec les échecs en blitz : il faut d’abord explorer l’échiquier pièce par pièce. Un autre appréciait le jeu sans chrono parce que choisir son propre rythme rendait le puzzle plus attrayant. Aucun des deux ne demandait au jeu de fournir la réponse. Ils demandaient de pouvoir prendre le temps de comprendre la question.',
          'Le temps de réflexion et le nombre de coups autorisés relèvent de choix de conception distincts. Un plateau avec une limite de coups peut laisser faire une longue pause tout en donnant du poids à chaque action. Notre [guide de lecture du plateau d’OutBrick avec VoiceOver](/blog/outbrick-voiceover-spatial-board) examine les informations qui doivent être accessibles pendant cette pause. Du temps supplémentaire aide peu lorsqu’une pièce essentielle ou un espace vide reste introuvable.',
        ],
      },
      'what-the-timer-record-says': {
        title: 'Garder visible la divergence sur le chrono',
        paragraphs: [
          'Notre premier message sur AppleVis présentait un jeu sans chrono. Plus tard, un joueur a signalé que le temps expirait presque avant qu’il puisse commencer, et a demandé s’il était possible de désactiver le chrono. Dans [notre réponse sur le chrono](https://www.applevis.com/comment/217462#comment-217462), nous avons expliqué que le mode chronométré avait été entièrement supprimé et que les plateaux n’avaient désormais qu’un objectif de coups.',
          'Cette réponse n’efface pas ce qu’a vécu le joueur. La discussion ne précise ni les versions de l’app concernées, ni la version ayant supprimé le mode, ni les circonstances dans lesquelles le chrono a été rencontré ; elle ne permet donc pas d’expliquer cette divergence. Nous ne devons pas supposer que le joueur a confondu des coups avec des secondes. Sa demande concrète était claire : avoir assez de temps pour explorer avant de décider quoi faire.',
          'Nos [notes de version 4.2 publiées](/whats-new#4-2) indiquent séparément que Rush a été retiré et que rien dans OutBrick n’est chronométré. Ces notes décrivent le changement publié, mais ne peuvent pas nous dire ce qui s’est produit pendant cette partie précise. Si un compte à rebours apparaît encore chez vous, décrivez l’écran et indiquez la version installée dans [notre formulaire de contact](/contact). Nous aurons ainsi un point de départ concret pour comprendre ce que vous avez rencontré.',
        ],
      },
      'enjoyment-and-difficulty': {
        title: 'On peut aimer un jeu et le trouver difficile',
        paragraphs: [
          'L’enthousiasme de la communauté portait sur des choses précises. Un joueur était ravi de trouver un autre puzzle accessible mêlant blocs et tri. Un autre racontait avoir passé une grande partie de la journée sur le jeu, tout en apprenant encore à bien jouer. Un troisième aimait beaucoup l’idée, mais peinait à gérer plusieurs mécaniques à la fois et n’avait pas terminé de puzzle dans le nombre de coups demandé. Le plaisir et la frustration étaient présents ensemble.',
          'Andrade et al. (2019) ont recueilli les réponses de 17 joueurs présentant une déficience visuelle et mené six entretiens ; les participants appréciaient la complexité et le plaisir de participer au jeu.',
          'Cela nous rappelle utilement d’écouter quel type de difficulté un joueur apprécie. Un trajet complexe, une règle de déplacement inconnue et une commande introuvable peuvent tous ralentir la progression, mais appellent des réponses différentes. Simplifier le trajet n’explique pas la commande ; rendre la commande lisible n’enseigne pas automatiquement le trajet.',
          'Lorsqu’un plateau vous semble difficile, essayez de nommer l’obstacle. Hésitez-vous sur ce qu’une brique peut faire, sur l’endroit où elle doit aller, ou sur la manière d’y arriver dans le nombre de coups autorisés ? Notre [guide des actions de glissement de VoiceOver](/blog/outbrick-voiceover-slide-actions) répond à la première question. Les deux autres concernent la compréhension de l’espace et la planification.',
        ],
      },
      'a-gentler-first-encounter': {
        title: 'Des débuts plus doux, une notion à la fois',
        paragraphs: [
          'Au 2 octobre 2026, les premiers plateaux plus doux, les fiches explicatives à la découverte d’une notion et les limites de coups plus généreuses au début restent prévus pour la prochaine mise à jour ; le travail est encore en cours. Les retours sur AppleVis ont aidé à cerner le problème : plusieurs mécaniques arrivaient ensemble. Nous remanions les niveaux, en commençant par les premiers villages, pour laisser plus de place à ces premières découvertes.',
          'Ran et al. (2025) ont interrogé 32 joueurs mobiles expérimentés, aveugles ou malvoyants, en Chine ; les tutoriels accessibles figuraient parmi les améliorations demandées par les participants.',
          'Un premier plateau peut présenter une relation avant de la combiner avec une autre. Il faut d’abord comprendre comment une brique glisse et sort. Plus tard, un nouvel obstacle peut inviter à revoir un plan familier. C’est un principe d’apprentissage : partir de quelque chose que le joueur peut comprendre, puis lui donner une raison intéressante de l’utiliser autrement.',
          'Nous prévoyons aussi davantage de coups sur les premiers plateaux, pour laisser la possibilité d’essayer une idée et d’en observer le résultat. La question importante est de savoir si vous comprenez mieux après cette tentative. Une limite plus généreuse ne suffit pas à expliquer une mécanique inconnue ; les fiches explicatives doivent donc être faciles à trouver et à comprendre avec VoiceOver. Le but est que les premières découvertes conduisent naturellement aux suivantes.',
        ],
      },
      'keep-the-interesting-challenge': {
        title: 'Préserver ce qui rend le défi intéressant',
        paragraphs: [
          'Abuhamdeh et Csikszentmihalyi (2012) ont étudié les échecs et des activités du quotidien, et ont constaté que la relation entre défi et plaisir variait selon la motivation et le type d’activité.',
          'Dans quatre études sur les jeux, Ryan et al. (2006) ont associé les sentiments de compétence et d’autonomie au plaisir de jouer et aux préférences de jeu.',
          'Pour OutBrick, la question utile est de savoir où doit porter l’effort. Prévoir un enchaînement peut rester exigeant lorsque l’interface décrit clairement les pièces. Trouver une utilisation astucieuse d’une brique qui fait obstacle peut rester satisfaisant une fois la règle de déplacement expliquée. Une introduction plus douce peut vous préparer à cette complexité sans décider à votre place du degré de complexité que vous souhaiterez à terme.',
          'Cette même distinction aide à évaluer une partie. Avez-vous perdu parce qu’une dépendance de votre plan était erronée, parce que la limite de coups était serrée ou parce que vous ne pouviez pas trouver une information essentielle ? Ces observations sont plus utiles qu’un simple verdict de « trop difficile ». Et rien ne vous oblige à persévérer si le type de défi proposé ne vous plaît pas.',
        ],
      },
      'a-deliberate-next-attempt': {
        title: 'Faire de la prochaine tentative une source d’information',
        paragraphs: [
          'Sur un nouveau plateau, commencez par trouver les sorties et les pièces qui leur correspondent. Choisissez un trajet à dégager, puis examinez ce qui le bloque. Avant d’agir, formulez le but du coup : libérer un couloir, créer un point d’arrêt ou rapprocher une brique de sa porte. Après l’action, vérifiez l’état obtenu avant de prolonger votre plan.',
          'Si une porte ou une brique reste introuvable, dites-le-nous plutôt que de multiplier les tentatives au hasard. Vous devez pouvoir vous concentrer sur votre plan. La [page accessibilité](/accessibility) donne des informations plus générales sur la prise en charge, tandis que notre [article sur notre engagement pour l’accessibilité](/blog/outbrick-accessibility-commitment) explique comment les signalements des joueurs nous aident à repérer le travail nécessaire et à communiquer les changements à mesure qu’ils arrivent.',
          'Enfin, gardez les autres contraintes à l’esprit. Un plateau sans chrono peut tout de même avoir une limite de coups, des vies et des offres d’achat ; l’absence de compte à rebours ne promet pas des tentatives illimitées. Le but est de pouvoir comprendre les règles, choisir votre approche et reconnaître ce qu’une tentative vous a appris.',
        ],
      },
    },
    pullQuote:
      'Le temps de réflexion et le nombre de coups autorisés relèvent de choix de conception distincts.',
    faqs: [
      {
        question: 'OutBrick promet-il actuellement un jeu sans chrono ?',
        answer:
          'Oui. Notre réponse du 2 octobre sur AppleVis et les notes de version 4.2 publiées indiquent qu’OutBrick n’a pas de chrono. Un joueur en a signalé un plus tôt dans la discussion, qui ne précise pas les versions concernées et n’explique pas cette divergence.',
      },
      {
        question:
          'L’absence de chrono signifie-t-elle un nombre de coups illimité ?',
        answer:
          'Non. OutBrick conserve des contraintes de coups : vous pouvez prendre le temps d’examiner un plateau tout en devant le résoudre dans la limite prévue. Les vies et les achats sont d’autres aspects du jeu.',
      },
      {
        question: 'Les premiers plateaux plus doux sont-ils déjà disponibles ?',
        answer:
          'Les premiers plateaux plus doux, les fiches explicatives à la découverte d’une notion et les limites de coups plus généreuses au début sont prévus pour la prochaine mise à jour. Ce travail est encore en cours.',
      },
      {
        question:
          'Concevoir un puzzle accessible impose-t-il de le rendre facile ?',
        answer:
          'Les joueurs peuvent apprécier une grande complexité tout en ayant besoin d’informations et de commandes fiables. En pratique, une première étape utile est d’identifier si la difficulté vient de la planification, de l’apprentissage d’une règle ou de l’accès à l’interface.',
      },
    ],
  },
  'outbrick-accessibility-beyond-board': {
    title: 'L’accessibilité d’OutBrick au-delà du plateau',
    dek: 'Boutique, portes gelées, missions et italien : comment les retours sur AppleVis nous aident à améliorer toute votre expérience de jeu sur OutBrick.',
    imageAlt:
      'Un téléphone affichant les briques colorées d’OutBrick, avec deux personnages en briques sur un fond bleu marine',
    tags: [
      'accessibilité',
      'VoiceOver',
      'conception inclusive',
      'conception de jeux',
      'retours des joueurs',
    ],
    intro:
      'Vous devez pouvoir profiter de toute votre partie sur OutBrick, de l’ouverture du jeu à la consultation de votre progression. Les joueurs sur AppleVis nous ont aidés à voir où ce parcours se bloquait : des boutons de boutique qui ne s’activaient pas, un écran d’accueil lent, des informations manquantes sur les portes gelées et une progression de mission qui n’était pas comptabilisée. Voici ce que nous améliorons et ce que ces changements doivent vous apporter. Nous répondons aussi à la question de l’italien et proposons une courte liste pour nous signaler ce qui vous gêne.',
    keyTakeaways: [
      'Qu’un bouton soit annoncé ne garantit pas qu’il s’active correctement, et terminer un plateau ne garantit pas que la progression est enregistrée.',
      'Notre travail pour la prochaine mise à jour concerne l’activation de la boutique avec VoiceOver, l’écran d’accueil, les annonces des portes gelées et la progression des missions.',
      'Nous avons confirmé la prise en charge de l’italien dans l’app, et un joueur l’a confirmée aussi ; les cinq langues de publication du site constituent une liste distincte.',
    ],
    sections: {
      'follow-the-whole-session': {
        title: 'Accompagner toute la partie',
        paragraphs: [
          'Un signalement sur AppleVis reliait quatre problèmes : VoiceOver trouvait les boutons des lots de la boutique, mais ne permettait pas d’ouvrir l’interface d’achat ; l’accueil était très lent ; les portes gelées restaient introuvables ; et faire fondre la glace ne faisait pas avancer les missions correspondantes. Cette personne appréciait aussi le jeu et avait atteint le niveau 62. La progression et les obstacles d’accès coexistaient clairement.',
          'Gonçalves et al. (2023) ont analysé des parties publiées par des joueurs aveugles et relevé des compromis entre accès, liberté d’action et engagement, même lorsque les joueurs trouvaient des moyens d’avancer.',
          'L’accessibilité doit accompagner toute la partie. Une vérification utile suit une intention de bout en bout : « Je veux commencer un plateau », « Je veux comprendre cette porte » ou « Je veux vérifier la progression que j’ai gagnée. » Chacune passe par plusieurs commandes et transitions. Un libellé peut fonctionner à une étape alors que la tâche entière échoue encore.',
          'Au 2 octobre 2026, les changements décrits dans [notre réponse sur AppleVis à propos de ces quatre problèmes](https://www.applevis.com/comment/217461#comment-217461) sont encore en cours de réalisation pour la prochaine mise à jour. Les travaux de recherche cités ici n’ont pas évalué OutBrick ; ils nous aident à réfléchir à l’expérience autour de ces signalements précis.',
        ],
      },
      'shop-labels-and-activation': {
        title: 'Après le libellé, le bouton doit permettre d’avancer',
        paragraphs: [
          'Le signalement sur la boutique était particulièrement utile parce qu’il précisait exactement où le parcours s’arrêtait. Les boutons des lots étaient détectables : leur nom était donc bien annoncé. Mais les activer ne faisait pas apparaître l’interface d’achat intégré. Le correctif prévu doit rendre ces boutons réactifs à VoiceOver et leur faire ouvrir l’écran d’achat, afin qu’une personne qui souhaite examiner une offre puisse en consulter les détails.',
          'Kane et al. (2008) ont séparé l’exploration de l’activation dans un prototype tactile testé par dix utilisateurs de lecteurs d’écran sur des tâches de téléphonie, de courrier électronique et de musique.',
          'Cette distinction nous donne une façon simple d’examiner la boutique. D’abord, pouvez-vous trouver et identifier la commande ? Ensuite, l’action choisie vous mène-t-elle à l’écran attendu ? Enfin, le résultat est-il clair ? Chaque étape compte pour une personne qui envisage un achat, même si les précédentes fonctionnent déjà. Un bouton dont le libellé est lisible doit donner accès à une suite fiable.',
          'Vous n’avez pas besoin d’acheter quelque chose pour expliquer que l’écran d’achat n’est pas apparu. Un signalement utile peut nommer le lot, décrire l’activation tentée et préciser si quelque chose a changé. Évitez d’activer plusieurs fois une commande de paiement dont le résultat est incertain ; si une fiche d’achat apparaît, lisez ses conditions et prenez votre propre décision avant de continuer.',
        ],
      },
      'home-screen-and-waiting': {
        title: 'Un accueil lent change le début de la partie',
        paragraphs: [
          'La même personne décrivait l’écran d’accueil initial comme très lent. Nous avons annoncé qu’il s’ouvrirait beaucoup plus vite dans la prochaine mise à jour. Pour quelqu’un qui revient jouer, ce travail a un but simple : atteindre ce qu’il est venu chercher sans commencer par une attente incertaine.',
          'Une arrivée lente oblige à choisir entre attendre, réessayer ou supposer que l’action a échoué. Lorsque vous naviguez avec des retours vocaux, l’absence de réponse utile peut rendre ce choix particulièrement délicat. Ce signalement nous invite à examiner toute l’attente : ce que vous entendez, les commandes disponibles et la manière dont vous savez que l’écran est prêt.',
          'Si vous souhaitez signaler un délai semblable, distinguez l’ouverture de l’app du retour à l’accueil après un plateau. Dites ce qui restait disponible pendant l’attente et ce qui s’est finalement passé. Des observations approximatives suffisent ; inutile de recueillir des journaux techniques ou de reproduire à répétition une partie frustrante. Nous préférons un récit clair d’une seule tentative à un test élaboré qui vous prend toute une soirée.',
        ],
      },
      'frozen-gates-and-progress': {
        title: 'Une porte gelée a un état et des conséquences',
        paragraphs: [
          'Les portes gelées soulevaient deux problèmes liés. Le joueur ne pouvait pas les trouver, et la fonte de la glace ne comptait pas dans les missions correspondantes. Nous prévoyons d’ajouter des annonces précisant l’état gelé et le nombre de coups avant la fonte, et de comptabiliser la glace fondue dans les missions de portes gelées. Ces changements concernent à la fois la compréhension du plateau et la reconnaissance de ce que vous y avez accompli.',
          'Andrade et al. (2019) ont recueilli les réponses de 17 joueurs présentant une déficience visuelle et mené six entretiens ; leurs récits témoignaient notamment d’un intérêt pour des expériences de jeu riches et complexes.',
          'Le travail de conception consiste à décrire une mécanique assez clairement pour que vous puissiez raisonner dessus. Une porte gelée peut créer une dépendance intéressante lorsque son état est accessible : vous pouvez prévoir vos coups en fonction du moment où il changera. Sans cette information, le même obstacle peut vous laisser dans le doute : le trajet est-il bloqué par une règle ou par un problème d’accès ?',
          'La progression doit être reliée à vos actions de façon tout aussi compréhensible. Si le jeu vous demande de faire fondre de la glace, le compteur de mission doit indiquer clairement le progrès obtenu. Le correctif prévu pour les missions répond au décalage signalé par ce joueur. En consultant une mission après avoir joué, vous devez pouvoir relier le changement sur le plateau à la progression affichée. Notre [article sur le repérage spatial du plateau](/blog/outbrick-voiceover-spatial-board) aborde le problème connexe du repérage des portes et des cases vides.',
        ],
      },
      'italian-app-and-website': {
        title: 'L’italien dans l’app est une question distincte',
        paragraphs: [
          'Un membre de la communauté a demandé si OutBrick était disponible en italien. Nous avons confirmé une prise en charge complète de l’italien et de onze autres langues dans l’app, et un autre joueur a confirmé la disponibilité de l’italien à partir de sa propre expérience. Notre réponse ne donnait pas la liste des onze autres langues, mais la réponse à cette question précise est simple : oui, l’app est disponible en italien.',
          'Notre site publie en anglais, français, allemand, espagnol et japonais. Cette liste est distincte des langues prises en charge par l’app : vous pouvez jouer en italien même si le site n’a pas d’édition italienne. Lorsque vous cherchez de l’aide, votre langue de jeu peut donc être différente de celles proposées pour un article donné.',
          'La confirmation de la communauté mentionnait aussi une mise à jour arrivée ce jour-là, sans dire que les problèmes antérieurs avaient été résolus. Notre réponse ultérieure présentait toujours les correctifs comme du travail à venir. Une notification de mise à jour ne permet pas, à elle seule, de savoir quel problème précis a changé : consultez donc les [notes de version publiées](/whats-new) pour vérifier une amélioration donnée. Associer la version au changement rend ces échanges beaucoup plus faciles à suivre.',
          'Pour un signalement lié à la langue, indiquez l’écran et le texte manquant, peu clair ou resté dans une autre langue de manière inattendue. Vous n’avez pas à expliquer votre parcours ni à justifier votre préférence pour une langue.',
        ],
      },
      'feedback-without-extra-burden': {
        title: 'Des retours précis, sans en faire une corvée',
        paragraphs: [
          'Ran et al. (2025) ont interrogé 32 joueurs mobiles expérimentés, aveugles ou malvoyants, en Chine ; parmi d’autres améliorations, les participants souhaitaient des échanges avec les développeurs et une configuration accessible.',
          'Voici une courte liste si vous souhaitez nous envoyer un retour. Prenez ce qui vous est utile et laissez de côté toute information privée. Un signalement peut aider sans enregistrement, sans détails de compte et sans preuve d’achat. Le [formulaire de contact](/contact) permet de nous écrire directement ; les [informations sur l’accessibilité](/accessibility) présentent la prise en charge actuellement décrite sur notre site.',
        ],
        bullets: [
          'Nommez la tâche : ouvrir l’accueil, activer un lot précis de la boutique, trouver une porte gelée ou consulter une mission.',
          'Décrivez la séquence la plus courte dont vous vous souvenez, le résultat attendu et ce qui s’est réellement passé, en reprenant les annonces vocales utiles.',
          'Si vous les avez facilement, indiquez la version installée de l’app et précisez si le problème se reproduit. Ne cherchez pas à deviner une cause et ne dépensez pas d’argent pour enquêter.',
          'Pour la progression d’une mission, notez la mission et le niveau si vous les connaissez, ainsi que le compteur avant et après si vous l’avez. Si vous joignez des captures d’écran facultatives, masquez les noms, les reçus et les notifications sans rapport.',
        ],
      },
    },
    pullQuote: 'L’accessibilité doit accompagner toute la partie.',
    faqs: [
      {
        question:
          'Les problèmes signalés dans la boutique et sur l’accueil ont-ils été corrigés ?',
        answer:
          'Les améliorations de la boutique et de l’écran d’accueil sont prévues pour la prochaine mise à jour et restent en cours de réalisation. Nous travaillons à faire ouvrir l’écran d’achat par les boutons des lots avec VoiceOver et à accélérer l’ouverture de l’accueil.',
      },
      {
        question: 'Que doivent annoncer les portes gelées ?',
        answer:
          'Nous prévoyons de faire annoncer aux portes gelées leur état et le nombre de coups avant la fonte. Nous prévoyons aussi de comptabiliser la glace fondue dans les missions de portes gelées, pour que la progression gagnée soit bien reflétée dans la mission.',
      },
      {
        question: 'OutBrick est-il disponible en italien ?',
        answer:
          'Oui. Nous avons confirmé la prise en charge de l’italien dans l’app sur AppleVis, et un membre de la communauté l’a confirmée aussi. Notre réponse mentionne douze langues dans l’app sans toutes les énumérer ; le site publie séparément en anglais, français, allemand, espagnol et japonais.',
      },
      {
        question:
          'Quelle est la façon la plus utile de signaler un problème d’accessibilité ?',
        answer:
          'Indiquez ce que vous vouliez faire, les étapes suivies, le résultat attendu et ce qui s’est produit à la place, en ajoutant la version de l’app si vous la trouvez facilement. Notre [article sur notre engagement pour l’accessibilité](/blog/outbrick-accessibility-commitment) explique notre manière d’aborder les retours des joueurs ; aucun achat ni partage d’informations privées de compte n’est nécessaire.',
      },
    ],
  },
};
