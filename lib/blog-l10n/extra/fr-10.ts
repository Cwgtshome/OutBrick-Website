import type { ExtraGuides } from '../../i18n/blog';
import { appStoreUrl } from '../../app-store-url';

/** Complete French localization of journal batch 10. */
export const fr10: ExtraGuides = {
  'puzzle-walkthrough-board-mismatch': {
    title: 'Pourquoi une solution vidéo ne correspond pas au plateau',
    dek: 'Avant de copier un coup, vérifiez jeu, version, mode et disposition initiale : le numéro de niveau seul n’identifie pas une solution de puzzle.',
    imageAlt:
      'Capture d’OutBrick dans un téléphone, avec briques colorées et deux amis en briques sur une grille bleu marine',
    tags: [
      'jeux de puzzle',
      'résolution de problèmes',
      'puzzles coulissants',
      'OutBrick en pratique',
      'indices de puzzle',
    ],
    intro:
      'La vidéo indique niveau 48. Votre jeu aussi. Pourtant son premier coup envoie une bleue dans une voie vide qui est occupée chez vous. Vous revoyez le début, réessayez et vous demandez ce que vous avez manqué. Avant de dépenser une autre tentative, comparez les deux plateaux. Un numéro de niveau est une étiquette dans un jeu et une version précis ; ce n’est pas une description complète du puzzle. Ce guide aide à reconnaître une solution inadaptée, trouver le premier désaccord et conserver une idée utile sans prétendre que la séquence montrée doit fonctionner.',
    keyTakeaways: [
      'Vérifiez jeu exact, mode, version et disposition initiale complète avant de vous fier à une séquence.',
      'L’historique publié d’OutBrick comprend des dispositions modifiées et des plateaux réordonnés ; un ancien numéro peut donc désigner un autre puzzle.',
      'Quand la séquence échoue, arrêtez au premier écart. Gardez une idée de planification pertinente ou demandez de l’aide pour votre plateau réel.',
    ],
    sections: {
      'identify-the-right-game': {
        title: 'Vérifiez d’abord que vous regardez le même jeu',
        paragraphs: [
          'Partez du nom complet et du développeur, pas de la miniature de recherche. Beaucoup de puzzles mobiles utilisent blocs, sorties assorties et mots similaires. Une vidéo « block sort niveau 48 » peut appartenir à une autre app. Ouvrez la boutique depuis les réglages du jeu ou comparez le développeur à la fiche. Un graphisme ressemblant invite à vérifier, pas à supposer des règles identiques.',
          'Vérifiez ensuite ce que la personne contrôle. Le bloc va-t-il aussi loin que possible, d’une case ou selon un trajet tiré ? Un personnage pousse-t-il des caisses ? La couleur doit-elle atteindre une porte, occuper une cible ou compléter une ligne ? Dans OutBrick, une brique glisse jusqu’à un obstacle et sort par sa porte de couleur. Notre [guide des blocs coulissants](/blog/how-to-solve-sliding-block-puzzles) explique ce modèle.',
          'Hearn et Demaine (2005) ont étudié des problèmes formels de mouvement sous différentes contraintes, dont blocs coulissants et Sokoban. Leurs résultats théoriques concernent des familles généralisées, pas la difficulté de votre app. La distinction utile ici est plus étroite : mouvements autorisés et objectif font partie de l’identité du puzzle. Une séquence de poussées ne peut être supposée valable pour le glissement jusqu’à l’arrêt.',
          'Avant de rechercher, notez nom, développeur, mode et niveau. Ajoutez plateforme et version visible si possible. C’est notre conseil de dépannage, pas une liste testée par cet article. Cela aide l’auteur du guide ou un joueur à identifier le puzzle sans deviner à partir d’une capture tronquée.',
        ],
      },
      'check-version-mode-and-date': {
        title: 'Un numéro familier peut cacher un plateau modifié',
        paragraphs: [
          'La date de publication donne un contexte, pas la version enregistrée. Un créateur peut publier un ancien enregistrement ou modifier le titre sans remplacer la vidéo. Cherchez une version dans description, commentaires ou réglages visibles. Si elle manque, gardez-la comme inconnue. Des dates différentes ne suffisent pas à dire que le guide est faux ou l’installation défectueuse.',
          'OutBrick donne une raison concrète de vérifier. Les [notes de version 4.2 du studio](/whats-new#4-2) rapportent de nouvelles dispositions pour 1 301 des 2 000 plateaux. C’est un changement historique, pas l’affirmation que 4.2 est la dernière version. La [fiche et l’historique App Store actuels](https://apps.apple.com/us/app/outbrick-block-sort-puzzle/id6807997465), consultés le 30 septembre 2026, montrent 4.5 et signalent d’autres reconstructions et réordonnancements (Hamdi, n.d.). Un numéro ancien peut donc être insuffisant pour identifier la disposition actuelle.',
          'Vérifiez aussi le mode. Progression principale, exemple web et puzzle quotidien daté ne sont pas interchangeables parce qu’ils partagent des couleurs. Le [plateau quotidien web OutBrick](/daily) parcourt un ensemble fixe selon la date UTC. Pour son enregistrement, gardez la date avec la capture. Cela décrit le site actuel, sans promettre le même comportement des fonctions quotidiennes natives.',
          'Ces observations n’établissent ni hasard par joueur, ni expériences, ni difficulté personnelle cachée. Un écart visible ne révèle pas laquelle de ces explications existe. Utilisez l’explication documentée applicable et laissez les autres ouvertes. Notre article sur [la vérification de la collection de plateaux](/blog/verifying-2000-sliding-block-boards) traite la résolubilité ; plateau résoluble et vidéo correspondante sont deux questions distinctes.',
        ],
      },
      'compare-the-complete-starting-state': {
        title: 'Comparez l’état initial complet',
        paragraphs: [
          'Mettez la vidéo en pause avant le premier coup et comparez à votre plateau intact. Si recommencer coûte progression ou tentative, consultez les règles au lieu de réinitialiser automatiquement. Votre capture actuelle reste utile ; indiquez « après trois coups » plutôt que la présenter comme le départ. Une séquence initiale ne se reproduit pas depuis une autre position intermédiaire.',
          'Comparez contour, objectifs puis pièces. Dimensions et cases bloquées sont-elles identiques ? Les portes colorées sont-elles sur les mêmes bords ? Chaque brique a-t-elle même forme, orientation et position ? Vérifiez clés, verrous et autres obstacles présents. Enfin, comparez le vide : une case vide fait partie de la disposition et peut déterminer trajet ou arrêt.',
          'Ito et al. (2023), dans leurs modèles formels de tri de balles et d’eau, incluent contenus ordonnés, capacité des récipients et récipients vides dans l’instance. Cela porte sur ces modèles de piles, pas OutBrick. Le parallèle est utile : un puzzle est plus précis que sa palette. Deux puzzles de tubes de mêmes couleurs peuvent autoriser des versements différents si ordre ou capacité libre diffèrent. Pour les blocs, examinez plutôt l’état spatial selon ses propres règles.',
          'Utilisez des repères stables pour demander une comparaison : « la bleue horizontale près de la porte inférieure gauche », pas « cette bleue », ou convenez de compter rangées depuis le haut et colonnes depuis la gauche. Larkin et Simon (1987) ont analysé l’effet des représentations sur recherche et inférence à information équivalente. Gardez donc les deux plateaux visibles avec les mêmes repères pour examiner les écarts sans mémoriser une image.',
        ],
      },
      'stop-at-the-first-divergence': {
        title: 'Arrêtez là où la séquence diverge pour la première fois',
        paragraphs: [
          'Si les départs correspondent, rejouez une action à la fois. Comparez immédiatement arrêt de la brique et pièces restantes. Le premier écart renseigne plus que le dixième. Continuer crée une nouvelle disposition ; les étapes suivantes peuvent échouer pour des raisons introduites par cet écart antérieur.',
          'Une vidéo peut par exemple descendre une rouge jusqu’à une bleue. Chez vous, la bleue est déjà sortie. La rouge va donc plus loin : « descendre la rouge » ne produit plus le même état. L’instruction semble identique ; sa condition manque. C’est une illustration du glissement, pas le diagnostic d’un niveau publié précis.',
          'Distinguez coup refusé et résultat inattendu. Pour un refus, revérifiez brique, direction, obstacle ou porte. Pour un coup accepté avec autre arrêt, comparez sa condition. Si disposition et action correspondent mais le comportement diffère, notez cette observation précise pour l’assistance. Ne déclarez pas impossible un plateau seulement parce que la vidéo ne se suit pas.',
          'Un message utile comprend version si connue, mode, niveau ou date, deux captures et première action divergente. Retirez les informations personnelles sans rapport. Dites si vous voulez une petite piste ou toute la séquence ; notre [guide d’indices sans révéler la réponse](/blog/puzzle-hints-without-spoilers) donne des exemples. La [page d’assistance](/support) est un bon départ avant un rapport via le contact existant.',
        ],
      },
      'keep-the-idea-not-the-sequence': {
        title: 'Gardez l’idée, puis choisissez l’aide souhaitée',
        paragraphs: [
          'Un guide inadapté peut montrer une relation utile : placer un arrêt avant d’envoyer une longue brique, ou dégager un trajet avant de libérer celle qui l’utilise. Demandez ce qu’accomplit le coup et ses conditions. Si elles manquent, ne forcez pas. Une idée doit être revérifiée dans l’état réel.',
          'Chi et al. (1989) ont étudié des étudiants lisant des exemples résolus de mécanique en exprimant leurs pensées. Les plus performants expliquaient les liens entre actions et principes et surveillaient leur compréhension. C’était de l’apprentissage de physique, pas un test de vidéos de puzzle. Notre application modeste consiste à expliquer le but d’un coup avant de l’emprunter, sans supposer qu’en copier la direction reproduit l’effet.',
          'Aucune obligation non plus de tirer une leçon de chaque vidéo. Si vous vouliez la solution et que le plateau diffère, cherchez un exemple correspondant ou demandez avec la capture exacte. Si vous voulez préserver la découverte, fermez la séquence et demandez seulement zone ou dépendance pertinente. Aucune préférence ne fait un meilleur ou moins bon joueur. L’aide doit répondre à votre vraie question.',
          `Pratiquez la vérification des conditions sur [les plateaux web OutBrick](/play), avec leurs commandes de reprise et d’annulation. Pour l’app installée, [téléchargez OutBrick sur l’App Store](${appStoreUrl('journal-walkthrough-mismatch')}) et consultez exigences et achats actuels. Elle comporte vies et publicité récompensée facultative ; l’exemple web ne prouve pas toutes les fonctions natives.`,
          'Référence produit : Hamdi, M. (n.d.). OutBrick: Block Sort Puzzle [Application mobile]. App Store. Consulté le 30 septembre 2026 via la fiche liée plus haut. Les recherches ci-dessous appuient les distinctions du guide ; aucune n’a évalué OutBrick ou validé cette liste de dépannage.',
        ],
      },
    },
    pullQuote:
      'Un numéro de niveau est une étiquette dans un jeu et une version précis ; ce n’est pas une description complète du puzzle.',
    faqs: [
      {
        question:
          'Pourquoi la vidéo montre-t-elle un autre plateau au même niveau ?',
        answer:
          'Vérifiez d’abord même app, mode et état initial. Une version peut changer ou réordonner les plateaux ; l’historique OutBrick le documente, mais un écart seul ne prouve ni hasard ni défaut.',
      },
      {
        question: 'Faut-il continuer après un coup différent ?',
        answer:
          'Arrêtez au premier résultat différent et comparez les états. Les instructions suivantes peuvent dépendre d’un arrêt ou d’un espace vide absent chez vous.',
      },
      {
        question:
          'Une vidéo inadaptée signifie-t-elle un plateau OutBrick impossible ?',
        answer:
          'Non. Un guide d’une autre disposition ne dit pas si la vôtre est résoluble. Les déclarations de vérification OutBrick concernent la résolubilité, pas la correspondance d’une vidéo externe à votre version.',
      },
      {
        question: 'Que fournir pour demander de l’aide ?',
        answer:
          'Nom, mode, niveau ou date quotidienne, version si connue, capture claire et première action divergente. Précisez petite piste ou solution complète et retirez les informations personnelles sans rapport.',
      },
    ],
  },
};
