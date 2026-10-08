import type { ExtraGuides } from '../../i18n/blog';
import { appStoreUrl } from '../../app-store-url.ts';

/** Complete French localization of journal batch 6. */
export const fr6: ExtraGuides = {
  'outbrick-vs-block-out-puzzle': {
    title: 'OutBrick ou Block Out Puzzle : lequel vous convient ?',
    dek: 'Comparez OutBrick et Block Out à partir de leurs fiches officielles : règles, jeu hors ligne, accessibilité et coûts, pour choisir selon vos besoins.',
    imageAlt:
      'Illustration d’OutBrick avec un téléphone, des briques colorées et deux personnages en briques sur une grille bleu marine',
    tags: [
      'puzzles de tri de blocs',
      'jeux de puzzle',
      'conception de jeux',
      'accessibilité',
      'jeu hors ligne',
    ],
    intro:
      'Un bloc rouge se trouve près d’une porte rouge, mais un autre bloc barre le passage. Le problème n’est pas de reconnaître les couleurs : il faut décider quoi déplacer d’abord. Cette idée commune rend la comparaison naturelle entre OutBrick et Block Out! - Color Sort Puzzle de Grand Games. La question utile est de savoir à quelle version de ce problème vous avez envie de consacrer du temps. Ce guide compare leurs descriptions publiées, consultées le 30 septembre 2026. Nous créons OutBrick et avons une raison de le recommander. Nous devons aussi distinguer les fonctionnalités documentées, les préférences et les inconnues. Ce guide de choix repose sur des sources, pas sur des essais directs.',
    keyTakeaways: [
      'Les deux jeux consistent à déplacer des blocs colorés vers les sorties correspondantes ; Block Out annonce notamment des ascenseurs mobiles et des générateurs de blocs.',
      'Tous deux annoncent un jeu hors ligne. OutBrick publie aussi des déclarations explicites d’accessibilité ; l’absence de déclaration chez un concurrent ne prouve pas l’absence de fonctionnalités.',
      'Choisissez selon le défi et l’accompagnement dont vous avez besoin. Un téléchargement gratuit ou un mode sans chrono ne signifie ni vies illimitées ni absence d’achats.',
    ],
    sections: {
      'shared-loop-different-priorities': {
        title: 'Un principe commun, des différences à comparer',
        paragraphs: [
          'Grand Games présente [Block Out! - Color Sort Puzzle](https://apps.apple.com/us/app/block-out-color-sort-puzzle/id6752672568) comme un jeu de blocs coulissants et de portes assorties, avec des dispositions changeantes, des ascenseurs mobiles et des générateurs de blocs. Voilà des raisons concrètes de vous y intéresser si vous aimez les plateaux évolutifs et les obstacles dynamiques. Sa description encourage aussi les déplacements rapides. Nous n’en déduisons pas les règles ou le chronométrage précis de chaque niveau (Grand Games A.Ş., n.d.).',
          'La [fiche d’OutBrick](https://apps.apple.com/us/app/outbrick-block-sort-puzzle/id6807997465) décrit un puzzle de tri par couleur avec des briques coulissantes et 2 000 plateaux vérifiés par un solveur. Depuis la version 5.1, OutBrick se joue en Slide & Match : une brique balayée s’arrête là où vous la lâchez, rentre par la porte de sa couleur ou s’échange avec une voisine, et trois briques d’une couleur alignées disparaissent. Dans ses plateaux classiques, toujours jouables dans le navigateur, une brique glisse jusqu’à ce qu’un obstacle l’arrête : le placement d’une autre brique fait alors partie du plan, et l’obstacle peut devenir un frein utile. Pour commencer, consultez notre [guide des puzzles de blocs coulissants](/blog/how-to-solve-sliding-block-puzzles), sans supposer que des captures d’écran semblables impliquent des mouvements identiques (Hamdi, n.d.).',
          'Une comparaison doit distinguer les exigences du plateau de la difficulté que vous ressentez personnellement. Nous appliquons cette distinction sans attribuer de notes aux deux applications. Un ascenseur peut apporter la nouveauté recherchée par une personne et une interruption gênante pour une autre. Une vérification par solveur établit qu’une solution existe selon certaines règles ; elle ne garantit pas que chacun aimera la découvrir.',
          'Partez d’une préférence précise : voulez-vous examiner une disposition stable, réagir à des obstacles changeants ou alterner les deux ? Cette question renseigne davantage que celle du jeu le plus difficile. Un jeu exigeant peut mieux vous convenir s’il sollicite la compétence que vous voulez exercer, tandis qu’un jeu plus facile peut rester inconfortable si son interface ou son rythme vous gêne.',
        ],
      },
      'choose-your-kind-of-challenge': {
        title: 'Choisissez le défi dont vous avez vraiment envie',
        paragraphs: [
          'La recherche invite à prendre les préférences au sérieux. Dans quatre études, Ryan et al. (2006) ont associé le sentiment de compétence et d’autonomie dans les jeux au plaisir et aux préférences. Cela ne permet pas de dire laquelle de ces applications est la plus agréable. Cela suggère un test utile : comprenez-vous ce que le jeu demande, et pouvez-vous choisir votre façon de l’aborder ? Le même plateau peut être accueillant quand vous avez le temps de réfléchir et fatigant quand vous essayez de répondre à un message.',
          'Le défi n’est pas un défaut en soi. En étudiant les échecs sur Internet et des activités quotidiennes, Abuhamdeh et Csikszentmihalyi (2012) ont constaté que le lien entre défi et plaisir dépendait de la motivation et du type d’activité. Ces résultats ne montrent ni que les chronos sont nocifs ni que les jeux plus lents sont meilleurs. Ils appuient une recommandation conditionnelle : privilégiez la planification si vous l’appréciez, et l’action si la rapidité fait partie du plaisir.',
          'Les notes de version actuelles d’OutBrick sur l’App Store indiquent que la version 4.2 a supprimé Rush dans tout le jeu. Les plateaux conservent des limites de coups : jouer sans chrono demande toujours de préparer ses actions. Si éviter le compte à rebours est votre priorité, lisez notre [comparaison des puzzles de tri sans chrono](/blog/no-timer-block-sort-puzzles-iphone) (Hamdi, n.d.). Si vous recherchez des obstacles dynamiques, les ascenseurs et générateurs explicitement annoncés par Block Out en font un candidat raisonnable à essayer.',
          'Une bonne première séance répond à une question modeste : ai-je envie d’un autre plateau de ce genre ? Ne vous imposez pas un verdict après une seule tentative frustrante. Apprendre une règle de déplacement et aimer cette règle sont deux décisions différentes. Vous n’avez pas non plus à persévérer parce qu’un jeu possède une jolie carte, beaucoup de niveaux ou un vaste public.',
        ],
      },
      'feedback-and-earned-progress': {
        title: 'Cherchez des retours qui rendent la progression compréhensible',
        paragraphs: [
          'Imaginez déplacer une brique bleue pour créer un point d’arrêt pour une rouge. Si le jeu montre clairement où la bleue s’arrête, le trajet suivant de la rouge devient lisible. Si le mouvement vous surprend, votre prochaine tâche est d’apprendre cette règle. C’est une observation utile dans les deux applications. Nous n’avons ni mesuré leur réactivité, ni comparé la latence des commandes, ni compté les déplacements accidentels.',
          'Klimmt et al. (2007) ont étudié le plaisir et l’influence ressentie dans une expérience en ligne auprès de 500 personnes. L’influence ressentie comptait, tandis que le lien avec le contrôle était plus complexe que « davantage, c’est mieux ». Pour choisir un puzzle, observez donc si vos actions ont des conséquences compréhensibles. C’est une application éditoriale de leurs résultats, pas la preuve que l’un de ces jeux possède de meilleures commandes.',
          'Iacovides et al. (2015) ont utilisé plusieurs études de cas pour explorer les interactions entre action, compréhension et implication pendant le jeu. Les déclics et le sentiment d’être responsable de sa progression étaient importants dans ces récits. Cela aide à comprendre pourquoi une réussite obtenue par soi-même peut différer du simple passage d’un niveau grâce à un bonus inconnu. Cela ne prouve aucun bénéfice pour l’intelligence et n’impose pas de refuser l’aide.',
          'Essayez de formuler ce que votre dernière tentative vous a appris : « Cette case doit être vide avant de déplacer la longue brique. » Si vous y parvenez, l’échec vous a donné une information. Notre article sur [la lecture d’un puzzle avant le premier coup](/blog/how-to-read-a-puzzle-before-moving) développe cette habitude. Si vous ne comprenez pas pourquoi un mouvement a été refusé, cherchez un tutoriel ou une aide avant d’y voir votre propre erreur.',
        ],
      },
      'offline-accessibility-and-costs': {
        title: 'Jeu hors ligne, accessibilité et coût d’une séance',
        paragraphs: [
          'Les deux fiches officielles annoncent un jeu hors ligne (Grand Games A.Ş., n.d. ; Hamdi, n.d.). Ce n’est donc pas un avantage propre à OutBrick face à Block Out. Une question pratique demeure pour chaque application : quels services exigent encore une connexion ? Téléchargez et ouvrez le jeu avant le départ, et vérifiez le plateau voulu. L’annonce de plateaux hors ligne ne garantit pas que les publicités, achats ou synchronisations fonctionnent sans Internet.',
          'La fiche d’OutBrick déclare explicitement la prise en charge de VoiceOver, de la distinction autrement que par la couleur seule, de la réduction des animations et d’une interface sombre (Hamdi, n.d.). Ce sont des déclarations du développeur, pas un audit indépendant. La fiche de Block Out n’indiquait pas de prise en charge de l’accessibilité lors de la consultation. C’est un manque d’information, pas une preuve d’incompatibilité. Notre [comparaison de l’accessibilité pour le tri de couleurs](/blog/color-block-jam-accessible-alternative) explique quoi tester quand ces fonctions sont indispensables.',
          'Les deux jeux sont gratuits à télécharger, avec achats intégrés et publicité déclarée. OutBrick comporte aussi des vies et des vidéos récompensées facultatives. Lisez la description actuelle d’un achat avant de décider ce qu’il supprime ou débloque ; ce guide ne promet ni suppression définitive de la publicité ni tentatives illimitées. Une fonctionnalité annoncée mérite votre attention, sans remplacer votre décision de dépense.',
          'Fixez un budget simple pour la première séance : aucune dépense pendant l’apprentissage de la règle. Voyez si vous acceptez de vous arrêter quand la séance gratuite se termine. Si vous comparez des jeux pour un enfant ou un proche, évaluez ensemble ces interruptions. Une recommandation équitable tient compte du coût de la poursuite, pas seulement de l’installation.',
        ],
      },
      'our-conditional-recommendation': {
        title: 'Notre conseil : vérifiez l’adéquation, puis téléchargez',
        paragraphs: [
          'OutBrick mérite votre attention si vous recherchez sa règle de planification Slide & Match, ses plateaux vérifiés par solveur et ses fonctions d’accessibilité explicitement documentées. Block Out mérite la même attention si ses ascenseurs, générateurs et dispositions dynamiques vous attirent. Aucune conclusion n’est un classement universel. Nous n’avons pas établi qu’un concurrent manque d’une fonction simplement parce que sa fiche n’en parle pas.',
          'Vous pouvez découvrir le principe de déplacement classique d’OutBrick sur [un plateau jouable dans le navigateur](/play). Le navigateur garde l’ancienne règle du glissement jusqu’à l’arrêt : c’est une introduction utile à l’idée des portes assorties, pas un remplacement complet de l’application installée : le navigateur ne peut pas valider chaque mode natif, achat ou fonction d’accessibilité. Si vous aimez préparer un trajet plutôt que tirer directement un bloc jusqu’à sa destination, vous avez une raison concrète d’aller plus loin.',
          `Envie d’essayer ? [Téléchargez OutBrick sur l’App Store d’Apple](${appStoreUrl('journal-block-out')}) et consultez les exigences actuelles de l’appareil et les détails des achats. Si l’accessibilité détermine votre choix, lisez d’abord nos [informations d’accessibilité](/accessibility) et appliquez la liste de vérification sur votre appareil. Un téléchargement réussi est le début de cette évaluation, pas la preuve que l’application répond à tous les besoins.`,
          'Gardez une décision réversible. Il est raisonnable d’aimer différents puzzles selon le moment, ou d’en garder un pour des séances rapides et un autre pour réfléchir tranquillement. La meilleure comparaison clarifie votre préférence, sans vous obliger à être d’accord avec le studio qui la publie.',
        ],
      },
      'product-sources': {
        title: 'Sources des produits et portée de la comparaison',
        paragraphs: [
          'Les affirmations sur les produits reposent sur les pages de l’App Store américain consultées le 30 septembre 2026. Les fonctionnalités, la disponibilité et les conditions d’achat peuvent changer. Les références scientifiques ci-dessous expliquent les critères de comparaison ; aucune n’a testé ni recommandé ces applications.',
          'Grand Games A.Ş. (n.d.). Block Out! - Color Sort Puzzle [Application mobile]. App Store. Consulté le 30 septembre 2026 sur [la fiche de Block Out](https://apps.apple.com/us/app/block-out-color-sort-puzzle/id6752672568).',
          'Hamdi, M. (n.d.). OutBrick: Block Sort Puzzle [Application mobile]. App Store. Consulté le 30 septembre 2026 sur [la fiche d’OutBrick](https://apps.apple.com/us/app/outbrick-block-sort-puzzle/id6807997465).',
        ],
      },
    },
    pullQuote:
      'Une comparaison doit distinguer les exigences du plateau de la difficulté que vous ressentez personnellement.',
    faqs: [
      {
        question: 'OutBrick est-il le même jeu que Block Out Puzzle ?',
        answer:
          'Non. OutBrick est créé par Mourad Hamdi, et Block Out! - Color Sort Puzzle par Grand Games A.Ş. Ils partagent une idée de blocs coulissants et de portes assorties, mais les règles et fonctionnalités publiées diffèrent.',
      },
      {
        question: 'Peut-on jouer à OutBrick et Block Out hors ligne ?',
        answer:
          'Les deux descriptions officielles sur l’App Store annoncent un jeu hors ligne. Cela ne garantit pas que les achats, publicités ou synchronisations de progression fonctionnent sans connexion.',
      },
      {
        question: 'Quel jeu convient mieux aux personnes daltoniennes ?',
        answer:
          'OutBrick déclare explicitement la distinction autrement que par la couleur seule. L’absence de déclaration d’accessibilité de Block Out ne prouve pas l’absence de prise en charge ; évaluez les applications installées selon vos besoins.',
      },
      {
        question: 'OutBrick est-il entièrement sans chrono ni achats ?',
        answer:
          'Ses notes actuelles indiquent que la version 4.2 a supprimé tout chronométrage, mais le jeu conserve des limites de coups, des vies et des achats intégrés. Sans chrono ne signifie ni tentatives illimitées ni absence d’offres d’achat.',
      },
    ],
  },
  'no-timer-block-sort-puzzles-iphone': {
    title: 'Puzzles de tri sans chrono sur iPhone : bien choisir',
    dek: 'Comparez les contraintes annoncées d’OutBrick, Block Buster - No Timer et Color Block Jam, et ce que le jeu sans chrono promet réellement.',
    imageAlt:
      'Téléphone montrant une illustration d’OutBrick avec des personnages en briques et des briques colorées flottantes sur fond bleu marine',
    tags: [
      'puzzles de tri de blocs',
      'jeux de puzzle',
      'habitudes de jeu',
      'conception de la difficulté',
      'jeu hors ligne',
    ],
    intro:
      'Vous avez repéré le mouvement voulu, mais aimeriez encore vérifier ce qui se passera ensuite. Un compte à rebours fait payer ce moment. Un nombre limité de coups vous laisse réfléchir, puis vous fait payer l’action. Cette différence est la vraie raison de chercher un puzzle de tri de blocs sans chrono sur iPhone, pas l’envie d’un jeu sans défi. Nous comparons ici les promesses publiées d’OutBrick, Block Buster - No Timer et Color Block Jam, pour choisir sans confondre jeu sans chrono, coups ou vies illimités et achats gratuits. Les fiches ont été consultées le 30 septembre 2026 ; il ne s’agit pas de tests directs de performance.',
    keyTakeaways: [
      'Le compte à rebours limite la réflexion ; le nombre de coups limite les actions. Aucun n’est automatiquement plus facile ou plus agréable pour tous.',
      'Block Buster annonce explicitement un jeu sans chrono. Les notes actuelles d’OutBrick 4.2 indiquent aussi que tout chronométrage a été supprimé.',
      'Vérifiez séparément l’accès hors ligne, le coût des reprises et les achats. L’absence de chrono ne garantit ni vies illimitées ni absence de publicité.',
    ],
    sections: {
      'what-no-timer-actually-means': {
        title: 'Ce que « sans chrono » vous dit vraiment',
        paragraphs: [
          'Un plateau sans chrono autorise une pause entre les décisions sans entamer un compte à rebours affiché. Il peut toujours pénaliser un mauvais coup, plafonner les actions ou les reprises et proposer une aide payante. Ce sont des contraintes distinctes. Une recherche fondée sur une seule expression peut vous donner le bon rythme sans vous faire aimer la gestion des échecs.',
          'Imaginez un couloir bloqué par deux pièces. Il faut en écarter une, faire sortir l’autre, puis rétablir un point d’arrêt. Avec une limite de coups, la question est de savoir si la séquence consomme trop d’actions. Avec un chrono, elle comprend aussi la vitesse à laquelle vous pouvez la repérer et l’exécuter. Une même disposition peut ainsi produire deux expériences différentes.',
          'Isaksen et al. (2017) ont modélisé séparément stratégie et dextérité dans des simulations de Tetris et Puzzle Bobble. Leur travail fournit un vocabulaire utile pour distinguer plan et exécution. C’est une recherche informatique en conception, pas un essai auprès de personnes montrant que les jeux sans chrono sont plus sains ou améliorent le raisonnement. Nous l’utilisons pour éclairer le choix, pas pour attribuer des notes scientifiques aux applications.',
          'Notez la contrainte à supprimer. « Je veux avoir le temps d’examiner le plateau » est plus concret que « Je veux quelque chose de relaxant ». Vous souhaitez peut-être aussi des reprises généreuses, une interface lisible ou aucun besoin de connexion, mais chaque point se vérifie séparément. Notre [guide sur ce qui rend un puzzle reposant](/blog/relaxing-puzzle-games-what-makes-one-calm) examine ces autres ingrédients.',
        ],
      },
      'three-official-listings': {
        title: 'Trois jeux, trois points de départ publiés',
        paragraphs: [
          '[Block Buster - No Timer](https://apps.apple.com/us/app/block-buster-no-timer/id6745272388), de Lion Studios Plus, promet explicitement l’absence de chrono dans son titre. Sa description annonce aussi un jeu adapté au hors ligne, des bonus et un mode sombre. C’est une alternative pertinente si votre premier besoin est le temps de réfléchir ; OutBrick n’est pas le seul jeu à considérer (Lion Studios Plus, n.d.).',
          '[OutBrick](https://apps.apple.com/us/app/outbrick-block-sort-puzzle/id6807997465) propose des plateaux de blocs coulissants et de portes assorties, des limites de coups et une collection vérifiée par solveur. Ses notes actuelles de version 4.2 indiquent que Rush a été supprimé partout et que la limite de coups par plateau demeure. C’est une promesse publiée de jeu sans chrono, assortie de contraintes sur les actions et les reprises (Hamdi, n.d.).',
          '[Color Block Jam](https://apps.apple.com/us/app/color-block-jam/id6504332779), de Rollic Games, décrit des blocs à déplacer vers les portes assorties et un plan à préparer avant la fin du temps. C’est un point de comparaison chronométré utile. Si exécuter vite un plan fait partie du plaisir, sa description peut davantage vous attirer qu’une promesse sans chrono. Nous n’affirmons pas que tous les écrans ou niveaux suivent une contrainte identique (Rollic Games, n.d.).',
          'Ces descriptions sont des points de départ, pas un tableau exhaustif des fonctions. Nous n’avons pas testé chaque niveau, version, appareil ou interruption. Avant de conclure qu’une application répond à votre recherche, examinez l’en-tête du plateau et les conditions d’échec. Un nom de mode ou une capture ne révèle pas tout le coût d’une reprise.',
        ],
      },
      'time-to-understand': {
        title: 'Le temps de comprendre compte parfois plus que la facilité',
        paragraphs: [
          'Une frustration courante consiste à devoir agir avant de comprendre l’effet du mouvement. Dans un puzzle coulissant, vous devez parfois découvrir si une pièce s’arrête sur une case vide, contre une autre pièce ou seulement au bord. Supprimer le chrono laisse le temps d’examiner cette question. Cela ne résout pas le puzzle à votre place.',
          'Iacovides et al. (2015) ont exploré les blocages et les déclics au moyen de plusieurs études de cas de jeu. Leurs résultats relient l’implication au développement de la compréhension et au sentiment d’être responsable de sa progression. Ce sont des données qualitatives sur l’expérience, pas la preuve qu’un rythme précis améliore l’apprentissage. Elles donnent une raison d’apprécier le passage de « Je ne sais pas ce qui s’est passé » à « Je sais quoi essayer ».',
          'Sur un plateau à coups limités, utilisez la réflexion pour nommer le but d’une action. « Cela place un frein derrière la longue brique » est un plan ; « Peut-être que cela aidera » est une expérience. Les deux peuvent servir. Cette distinction aide à choisir entre dépenser un coup pour tester une règle et l’utiliser pour suivre un trajet. Notre [guide de lecture du plateau avant de bouger](/blog/how-to-read-a-puzzle-before-moving) détaille la méthode.',
          'Un compte à rebours peut aussi être agréable une fois la règle familière. Répéter efficacement une séquence connue apporte un plaisir différent de sa découverte lente. Ne confondez pas préférence personnelle et jugement sur la conception. Si vous aimez les deux, un jeu avec des modes facultatifs peut convenir ; vérifiez que celui voulu est disponible au moment et à l’endroit où vous comptez jouer.',
        ],
      },
      'challenge-with-room-to-choose': {
        title: 'Gardez le défi, choisissez la pression',
        paragraphs: [
          '« Sans chrono » passe souvent pour « facile », pourtant un plan spatial difficile peut le rester toute une soirée. Même avec une réflexion illimitée, il faut voir une dépendance qui vous a échappé. À l’inverse, un plan simple devient exigeant s’il faut l’exécuter rapidement. La préférence pertinente concerne l’origine de l’effort.',
          'Abuhamdeh et Csikszentmihalyi (2012) ont constaté que le lien entre plaisir et défi dépendait de la motivation et du type d’activité, dans des études d’échecs sur Internet et d’échantillonnage de l’expérience. C’est un contrepoint utile à l’idée que la pression est toujours mauvaise. Leur travail ne comparait pas ces jeux mobiles et ne peut établir un niveau de défi idéal universel.',
          'Ryan et al. (2006) ont associé autonomie et compétence ressenties au plaisir et aux préférences dans quatre études de jeux. Pour choisir, demandez-vous si les règles autorisent l’expérience recherchée. Si vous voulez examiner lentement un plateau, un chrono obligatoire peut aller contre votre intention. Si vous voulez tester une exécution rapide, supprimer l’horloge peut retirer une chose que vous appréciez.',
          'Faites un petit essai personnel : jouez quelques plateaux sans acheter d’aide, puis notez ce qui vous a donné envie de continuer ou d’arrêter. Était-ce le puzzle, la vitesse, une règle obscure ou l’interruption après un échec ? C’est un exercice d’observation pratique, pas une évaluation clinique. Une séance peut clarifier une préférence sans prouver quoi que ce soit sur le bien-être à long terme.',
        ],
      },
      'pre-download-checklist': {
        title: 'Que vérifier avant de télécharger pour jouer à votre rythme',
        paragraphs: [
          'Vérifiez d’abord le chrono. Le plateau est-il sans limite de temps par défaut, ou faut-il choisir un mode ? Pouvez-vous interrompre puis reprendre ? Nous n’avons pas testé la mise en arrière-plan ou la reprise ; ne les déduisez pas d’une étiquette sans chrono. Un plateau sans compte à rebours reste peu pratique si la séance ne survit pas à vos interruptions habituelles.',
          'Vérifiez ensuite le coût d’une erreur : limites de coups, vies, reprises et conditions des bonus. Les trois fiches déclarent des achats intégrés. OutBrick comporte aussi des vies et des publicités récompensées facultatives (Hamdi, n.d.). Cet article ne promet ni reprises illimitées, ni accès continu, ni aide gratuite. Décidez si attendre ou vous arrêter vous convient avant l’apparition d’une offre.',
          'Vérifiez aussi l’environnement. OutBrick et Block Buster annoncent le jeu hors ligne, sans garantir que toutes les fonctions connectées y marchent (Hamdi, n.d. ; Lion Studios Plus, n.d.). Téléchargez avant le voyage et consultez notre [guide des puzzles iPhone hors ligne](/blog/offline-puzzle-games-iphone). Si la reconnaissance des couleurs, les animations ou la sortie vocale sont déterminantes, lisez nos [informations d’accessibilité](/accessibility) et testez sur votre appareil.',
          `Enfin, découvrez la règle. [Jouez à un plateau OutBrick dans le navigateur](/play) pour voir la règle classique du glissement jusqu’à l’arrêt (le jeu de l’App Store y ajoute désormais échanges et alignements), puis [téléchargez OutBrick sur l’App Store d’Apple](${appStoreUrl('journal-no-timer')}) si cette planification vous attire. Les modes natifs et l’accessibilité demandent des vérifications séparées dans l’application installée. Si vous voulez d’abord une promesse explicite d’absence de chrono, Block Buster mérite aussi votre sélection.`,
          'Le résultat le plus utile est un jeu dont vous comprenez les contraintes avant d’y consacrer du temps ou de l’argent. Vous pouvez aimer planifier sans chrono aujourd’hui et rechercher un défi rapide demain. Choisissez en connaissance de cause, avec la fiche actuelle et le plateau réel sous les yeux.',
        ],
      },
      'listing-references': {
        title: 'Sources des produits et portée',
        paragraphs: [
          'Ces pages évolutives de l’App Store américain ont été consultées le 30 septembre 2026. La comparaison décrit des promesses publiées, pas des tests indépendants. Les références scientifiques ci-dessous éclairent les critères de choix sans recommander aucun jeu nommé.',
          'Lion Studios Plus. (n.d.). Block Buster - No Timer [Application mobile]. App Store. Consulté le 30 septembre 2026 sur [la fiche de Block Buster](https://apps.apple.com/us/app/block-buster-no-timer/id6745272388).',
          'Hamdi, M. (n.d.). OutBrick: Block Sort Puzzle [Application mobile]. App Store. Consulté le 30 septembre 2026 sur [la fiche d’OutBrick](https://apps.apple.com/us/app/outbrick-block-sort-puzzle/id6807997465).',
          'Rollic Games. (n.d.). Color Block Jam [Application mobile]. App Store. Consulté le 30 septembre 2026 sur [la fiche de Color Block Jam](https://apps.apple.com/us/app/color-block-jam/id6504332779).',
        ],
      },
    },
    pullQuote: 'La préférence pertinente concerne l’origine de l’effort.',
    faqs: [
      {
        question: 'Quel jeu de tri annonce explicitement l’absence de chrono ?',
        answer:
          'Block Buster - No Timer de Lion Studios Plus fait cette promesse dans son titre officiel sur l’App Store. Vérifiez la version installée et les autres contraintes avant de décider s’il convient à vos séances.',
      },
      {
        question: 'Sans chrono signifie-t-il coups ou vies illimités ?',
        answer:
          'Non. Temps de réflexion, nombre de coups et reprises sont des contraintes séparées. Lisez les règles du plateau et les conditions d’achat sans les déduire de l’absence de compte à rebours.',
      },
      {
        question: 'OutBrick est-il entièrement sans chrono ?',
        answer:
          'Selon les notes actuelles de version 4.2 sur l’App Store, Rush a été supprimé et rien n’est chronométré. Les limites de coups, vies et achats restent des contraintes distinctes.',
      },
      {
        question:
          'Pourquoi inclure Color Block Jam dans un guide sans chrono ?',
        answer:
          'Sa description officielle mentionne la planification avant la fin du temps, ce qui en fait une comparaison chronométrée utile. Les personnes qui aiment agir vite peuvent préférer ce défi.',
      },
    ],
  },
  'color-block-jam-accessible-alternative': {
    title: 'Une alternative à Color Block Jam avec VoiceOver',
    dek: 'OutBrick peut-il remplacer Color Block Jam ? Comparez VoiceOver, symboles de couleur et animations documentés, puis vérifiez vos tâches essentielles.',
    imageAlt:
      'Illustration d’OutBrick autour d’un téléphone, avec deux personnages en briques et des blocs colorés sur une grille bleu marine',
    tags: [
      'accessibilité',
      'VoiceOver',
      'daltonisme',
      'puzzles de tri de blocs',
      'conception inclusive',
    ],
    intro:
      'Si vous ne distinguez pas toujours deux portes, un puzzle de tri par couleur vous demande de résoudre l’interface avant le plateau. Avec VoiceOver, un trajet visible n’est utile que si le jeu décrit aussi les pièces et vous permet d’agir. Chercher une alternative à Color Block Jam peut donc répondre à un besoin précis : retrouver les portes assorties, avec des preuves plus claires que votre façon de jouer est prise en charge. OutBrick est un candidat parce que sa fiche App Store déclare explicitement VoiceOver, la distinction autrement que par la couleur seule, la réduction des animations et une interface sombre. Ces déclarations sont un point de départ utile, pas un audit indépendant ou une garantie pour chaque personne.',
    keyTakeaways: [
      'OutBrick publie sept déclarations d’accessibilité, dont VoiceOver, des indices autres que la couleur et des animations réduites. Color Block Jam et Block Out n’indiquaient pas de prise en charge lors de la consultation.',
      'Une déclaration absente signifie que la prise en charge n’y est pas documentée, pas qu’elle manque forcément. Testez les tâches nécessaires sur votre appareil.',
      'Vérifiez séparément la navigation du plateau, l’identification des portes, l’exécution des coups et la récupération après erreur ; un menu lisible ne suffit pas.',
    ],
    sections: {
      'what-the-listings-establish': {
        title: 'Ce qu’établissent les fiches, et ce qu’elles laissent ouvert',
        paragraphs: [
          '[Color Block Jam](https://apps.apple.com/us/app/color-block-jam/id6504332779), de Rollic Games, décrit des blocs colorés à faire glisser vers les portes assorties et une planification avant la fin du temps. [Block Out! - Color Sort Puzzle](https://apps.apple.com/us/app/block-out-color-sort-puzzle/id6752672568), de Grand Games, décrit un principe voisin avec ascenseurs mobiles et générateurs de blocs. Ce sont des alternatives pertinentes d’une même famille, pas des jeux à écarter à cause d’une étiquette manquante (Rollic Games, n.d. ; Grand Games A.Ş., n.d.).',
          'La [fiche d’OutBrick](https://apps.apple.com/us/app/outbrick-block-sort-puzzle/id6807997465) déclare explicitement VoiceOver, la distinction autrement que par la couleur seule, la réduction des animations et une interface sombre (Hamdi, n.d.). Ses glyphes associent un symbole visible distinct à chaque brique et à sa porte. C’est un élément concret à considérer si la couleur seule n’est pas fiable pour vous. La règle de glissement doit toutefois vous plaire ; l’information d’accessibilité ne décide pas du puzzle que vous aimerez.',
          'Au moment de la consultation, les deux concurrents n’indiquaient pas de fonctions d’accessibilité. Nous ne pouvons en déduire l’absence de VoiceOver, d’indices redondants ou d’options d’animation. La comparaison défendable porte sur les déclarations publiées. Une fonction non documentée peut exister, et une fonction déclarée varier selon les tâches, appareils ou versions.',
          'Apple présente ces étiquettes comme des informations fournies par les développeurs sur les tâches courantes, avec une portée propre à l’appareil (Apple, n.d.). Utilisez-les pour affiner la recherche, puis examinez le jeu voulu. Nous créons OutBrick, mais n’avons pas fait de test indépendant comparant l’accessibilité de ces trois applications. Ce guide propose une méthode de vérification, pas une note comparative.',
        ],
      },
      'voiceover-board-tasks': {
        title: 'VoiceOver : testez le plateau autant que le menu',
        paragraphs: [
          'Un lecteur d’écran qui annonce un bouton Jouer indique comment entrer dans le jeu. Cela ne dit pas si vous pouvez lire le plateau, trouver une porte assortie, sélectionner la bonne pièce et exécuter un coup sans aide. Ce sont des tâches différentes. Commencez par un plateau simple afin qu’un puzzle inconnu ne masque pas un problème d’interface.',
          'Ran et al. (2025) ont interrogé 32 joueurs mobiles expérimentés, aveugles ou malvoyants. Leurs récits décrivent des motivations, obstacles et stratégies variés, façonnés par l’accessibilité. Ce sont des données sur leur expérience, pas une évaluation d’OutBrick ou de ses concurrents. Elles appuient une question pratique : quelles parties du jeu pouvez-vous effectuer seul, et où l’interface vous oblige-t-elle à demander de l’aide ?',
          'Avant de terminer le tutoriel, vérifiez si vous pouvez identifier la brique sélectionnée, comprendre ses mouvements possibles et trouver sa destination. Essayez ensuite volontairement un coup impossible. Le refus est-il communiqué d’une manière perceptible ? Une explication claire compte autant qu’une action réussie, car elle évite de décider au hasard ensuite.',
          'Notre [guide des jeux iPhone avec lecteur d’écran](/blog/screen-reader-games-iphone) donne le contexte général. Pour ce téléchargement, gardez une liste courte : entrer sur le plateau, examiner les pièces, agir, percevoir le résultat, recommencer et quitter. Si une tâche reste obscure, notre [page d’assistance](/support) permet de poser une question sur l’application actuelle. Décrivez l’appareil, la version et l’action défaillante sans supposer qu’une étiquette générale répond à tous les détails.',
        ],
      },
      'colour-glyphs-and-contrast': {
        title: 'Symboles de couleur : plusieurs indices pour assortir',
        paragraphs: [
          'Un glyphe sur un bloc et le même sur sa porte donnent un second indice d’association, utile quand deux couleurs se ressemblent. Cela ne rend pas tous les éléments également lisibles : de petits symboles, un faible contraste, l’encombrement ou des fonds changeants peuvent encore gêner. Examinez la taille réelle du plateau sur votre appareil, pas seulement les captures agrandies de la boutique.',
          'Mazur et al. (2025) ont interrogé 241 joueurs présentant des déficiences de vision des couleurs. Quatre-vingt-huit pour cent rapportaient au moins certaines difficultés, notamment pour associer les couleurs et identifier des objets par leur couleur. L’échantillon était volontaire ; il n’est pas une estimation de la fréquence de ces déficiences chez tous les joueurs. Il montre cependant pourquoi les portes assorties demandent plus d’attention qu’une simple affirmation qu’un jeu est coloré.',
          'Napoli et Chiasson (2018) apportent une précaution utile. Leur petite étude par simulation, avec dix participants analysés et des conditions dans un ordre fixe, n’a pas trouvé de différence significative de performance, bien que les personnes aient ressenti plus de difficulté et utilisé des motifs. Les scores ne résument donc pas toute l’expérience. L’étude ne prouve pas qu’un système particulier de symboles résout le problème pour tous.',
          'Essayez d’associer une brique et une porte par les symboles avant la teinte. Les distinguez-vous à votre distance habituelle, et restent-ils utiles quand les pièces se chevauchent ou se trouvent au bord ? Notre [article sur le daltonisme dans les jeux](/blog/colour-blindness-in-games) apporte du contexte. Le conseil du W3C de fournir des informations au-delà de la couleur est un principe utile, même si des recommandations web ne prouvent pas la conformité d’une application native (World Wide Web Consortium, 2025).',
        ],
      },
      'motion-agency-and-recovery': {
        title: 'Animations, autonomie et récupération après une erreur',
        paragraphs: [
          'La fiche d’OutBrick déclare la réduction des animations et une interface sombre (Hamdi, n.d.). Ces fonctions sont distinctes. Un style sombre ne garantit pas un contraste suffisant, et des animations réduites ne garantissent pas le confort de tous. Vérifiez comment le plateau communique un coup accepté, un coup bloqué et une réussite avec vos réglages préférés.',
          'Gonçalves et al. (2023) ont analysé plus de 70 heures de jeu de créateurs aveugles pour documenter les stratégies utilisées dans des jeux centrés sur le visuel. Leur travail décrit des compromis entre accessibilité, autonomie et implication. Il ne représente pas tous les joueurs aveugles et ne classe pas ces applications. Demandez-vous si une adaptation vous laisse prendre vous-même des décisions utiles, au lieu de regarder quelqu’un d’autre les exécuter.',
          'Dans un puzzle, reprendre après une erreur fait partie de cette autonomie. Si vous déplacez la mauvaise brique, reconnaissez-vous le nouvel état et pouvez-vous décider de la suite ? Si vous recommencez, trouvez-vous la commande ? Vérifiez le coût avant d’utiliser une aide. OutBrick comporte des vies, des publicités récompensées facultatives et des achats intégrés ; les déclarations d’accessibilité ne suppriment pas ces systèmes. Nous ne le présentons pas comme illimité, sans publicité ou sans propositions d’achat.',
          'Le rythme appartient à la même liste. Les notes actuelles d’OutBrick 4.2 indiquent que tout chronométrage a été retiré, tandis que la description de Color Block Jam évoque la fin du temps. Si vous avez besoin de temps pour examiner l’information vocale, cette différence documentée mérite attention (Hamdi, n.d. ; Rollic Games, n.d.). Notre [guide des puzzles de tri sans chrono](/blog/no-timer-block-sort-puzzles-iphone) distingue réflexion, limites de coups et reprises.',
        ],
      },
      'choose-and-verify': {
        title: 'Choisissez un candidat, puis vérifiez les tâches essentielles',
        paragraphs: [
          'OutBrick est un candidat raisonnable si vous voulez un puzzle de portes assorties dont le développeur documente explicitement la sortie vocale, les indices autres que la couleur et les animations réduites. Ce conseil suit vos préférences et la fiche, sans promettre un accès parfait. Si vous aimez déjà Color Block Jam ou Block Out, demandez à leurs développeurs les fonctions nécessaires ; une déclaration absente n’autorise pas un verdict négatif inventé.',
          'Priorisez vos tâches essentielles avant tout achat. Préparez une petite liste à répéter après une mise à jour : atteindre un plateau, identifier une brique et une porte, agir, comprendre le résultat, reprendre et quitter. Ajoutez la boutique et les commandes publicitaires si vous comptez les utiliser. Une fonction efficace sur le plateau ne couvre pas nécessairement tous les écrans autour.',
          `Lisez nos [informations d’accessibilité OutBrick](/accessibility), puis [téléchargez OutBrick sur l’App Store d’Apple](${appStoreUrl('journal-accessibility')}) si les fonctions documentées vous conviennent. Consultez la compatibilité actuelle et testez l’application native sur votre appareil. Le [plateau du navigateur](/play) présente le mouvement classique, mais ne certifie pas VoiceOver ou les animations dans l’application installée.`,
          'Vous n’avez pas à justifier votre préférence pour de grands indices, une inspection plus lente ou des retours prévisibles. Ce sont des besoins pratiques pour prendre plaisir au jeu. Une comparaison les rend visibles afin de mieux choisir et de décrire précisément au développeur ce qui gêne encore.',
        ],
      },
      'official-reference-list': {
        title: 'Références officielles des produits et recommandations',
        paragraphs: [
          'Fiches consultées le 30 septembre 2026. Les références scientifiques ci-dessous expliquent des obstacles et stratégies pertinents ; aucune n’a testé indépendamment ces applications.',
          'Hamdi, M. (n.d.). OutBrick: Block Sort Puzzle [Application mobile]. App Store. Consulté le 30 septembre 2026 sur [la fiche d’OutBrick](https://apps.apple.com/us/app/outbrick-block-sort-puzzle/id6807997465).',
          'Rollic Games. (n.d.). Color Block Jam [Application mobile]. App Store. Consulté le 30 septembre 2026 sur [la fiche de Color Block Jam](https://apps.apple.com/us/app/color-block-jam/id6504332779).',
          'Grand Games A.Ş. (n.d.). Block Out! - Color Sort Puzzle [Application mobile]. App Store. Consulté le 30 septembre 2026 sur [la fiche de Block Out](https://apps.apple.com/us/app/block-out-color-sort-puzzle/id6752672568).',
          'Apple. (n.d.). Overview of Accessibility Nutrition Labels. Apple Developer. Consulté le 30 septembre 2026 sur [les recommandations d’Apple concernant les étiquettes d’accessibilité](https://developer.apple.com/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels/).',
          'World Wide Web Consortium. (2025, September 16). Understanding Success Criterion 1.4.1: Use of color. [Explication du W3C sur la couleur et les informations redondantes](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).',
        ],
      },
    },
    pullQuote:
      'Dans un puzzle, reprendre après une erreur fait partie de cette autonomie.',
    faqs: [
      {
        question: 'OutBrick prend-il en charge VoiceOver ?',
        answer:
          'Son développeur le déclare explicitement sur l’App Store. Vérifiez le plateau et les tâches autour sur votre appareil ; une déclaration n’est pas un audit indépendant.',
      },
      {
        question: 'Color Block Jam manque-t-il de fonctions d’accessibilité ?',
        answer:
          'Sa fiche ne les indiquait pas lors de la consultation du 30 septembre 2026. Cela ne prouve pas leur absence ; demandez au développeur ou testez vos tâches essentielles.',
      },
      {
        question: 'Comment les symboles aident-ils à trier les blocs ?',
        answer:
          'Les symboles assortis d’une brique et de sa porte donnent un indice en plus de la couleur. Leur taille, leur contraste et leur clarté doivent encore convenir à la personne et à l’appareil.',
      },
      {
        question:
          'Une étiquette d’accessibilité signifie-t-elle une certification Apple ?',
        answer:
          'Non. Apple les décrit comme des informations d’accessibilité fournies par les développeurs. Elles aident à découvrir des applications, sans remplacer la vérification des tâches essentielles dans le jeu installé.',
      },
    ],
  },
};
