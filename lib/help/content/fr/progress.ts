import type { HelpArticle } from '../../model.ts';

/** Le Voyage, les récompenses, la Boutique et les amis, en français. Vérifié avec la 5.1.1 (68). */
export const progressArticles: HelpArticle[] = [
  {
    slug: 'journey-and-villages',
    category: 'progress',
    cover: 'journey',
    title: 'Le Voyage et ses villages',
    summary:
      'Comment fonctionne la carte des 2 000 niveaux : villages et chapitres, étoiles et récompenses des villages, coffres et cadeaux, l’atlas de tous les villages, et rejouer un plateau.',
    keywords: 'carte niveaux village chapitre étoiles récompenses coffre cadeau ballon atlas rejouer verrouillé progression',
    sections: [
      {
        id: 'map',
        title: 'La carte',
        blocks: [
          {
            t: 'shot',
            id: 'journey',
            alt: 'La carte du Voyage : un chemin pavé qui grimpe à travers un village d’arbres en fleurs roses, avec les étapes de niveau 213, 214 et 215. Le niveau 214 brille, avec l’étiquette Jouer. Des badges bordent les deux côtés.',
            caption: 'Le Voyage est un long boulevard construit en briques. Votre niveau actuel brille.',
          },
          {
            t: 'list',
            items: [
              'Le Voyage compte **2 000 niveaux** répartis dans **167 villages** de douze plateaux chacun (le dernier village en a huit).',
              'Chaque village est construit en briques jouets selon son propre thème, et quand un thème revient, c’est à un autre moment de la journée ou à une autre saison : deux villages ne se ressemblent jamais.',
              'Touchez votre **niveau actuel** pour le jouer. Touchez un niveau **terminé** pour le rejouer et améliorer ses étoiles ; rejouer ne change jamais votre place sur la carte.',
              'Un niveau **verrouillé** vous indique à combien de niveaux il se trouve.',
              'L’épingle **Mon niveau** vous ramène là où vous en êtes.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Villages et chapitres',
            text: 'Un **village** regroupe douze plateaux sur la carte. Un **chapitre** regroupe vingt niveaux ; il sert aux badges de chapitre et aux succès Game Center. Les deux sont comptés séparément : un chapitre peut donc se terminer au milieu d’un village.',
          },
        ],
      },
      {
        id: 'stars',
        title: 'Étoiles et récompenses des villages',
        blocks: [
          {
            t: 'list',
            items: [
              'Chaque plateau peut rapporter jusqu’à trois étoiles : un village en contient donc 36. La pastille des **étoiles** dans l’en-tête indique combien vous en avez dans ce village.',
              'Les étoiles vous font monter l’échelle d’étoiles du village : 50 pièces, un Indice, 100 pièces et une Fusée. Un badge sur la carte vous signale quand une récompense est prête à être récupérée.',
              'Terminer un village entier affiche une carte de fête avec **Partager** et **En route**.',
            ],
          },
        ],
      },
      {
        id: 'map-extras',
        title: 'Coffres, cadeaux et autres surprises sur la carte',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Coffre du voyage', text: 'Touchez un coffre sur le chemin pour voir ce qu’il contient. Quand vous l’atteignez, la carte de victoire indique les pièces et les bonus qu’il vous a rapportés.' },
              { term: 'Cadeau du village', text: 'Un cadeau à durée limitée ; le badge affiche le compte à rebours jusqu’à ce qu’il soit prêt.' },
              { term: 'Ballon cadeau', text: 'Passe de temps en temps. Une vidéo facultative permet de l’attraper pour des pièces ou un court moment de bonus gratuits.' },
              { term: 'Secrets', text: 'De petites choses cachées à découvrir en chemin. Touchez tout ce qui semble ne pas être à sa place.' },
              { term: 'Tous les villages', text: 'L’atlas : chaque village sous forme de carte, filtrable en cours, terminé ou verrouillé. **Mon village** vous ramène chez vous.' },
              { term: 'Game Center', text: 'Si vous êtes connecté, un badge ouvre vos défis et vos succès.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Vous préférez une carte plus calme ? Réglages › Jeu › **Fonctions du jeu** vous permet de masquer les événements et les offres qui ne vous intéressent pas. Vous ne perdez rien de ce que vous avez gagné.',
          },
          { t: 'shot', id: 'atlas', alt: 'Tous les villages : des filtres Tous (167), En cours, Terminés et Verrouillés ; un titre pour les villages 1 à 28 avec 217 étoiles sur 1 008 ; et des cartes de village avec leurs niveaux et étoiles, comme le village des cerisiers en fleurs, niveaux 205 à 216, 9 étoiles sur 36, marqué Vous êtes ici, et le suivant, qui se débloque en réussissant le niveau 216.', caption: 'L’atlas de tous les villages.' },
        ],
      },
      {
        id: 'a11y',
        title: 'La carte avec VoiceOver',
        blocks: [
          {
            t: 'p',
            text: 'Chaque élément de la carte propose **Où suis-je** et **Aller à mon prochain niveau** ; le toucher deux fois avec deux doigts annonce votre village, les niveaux réussis et votre prochain niveau ; et un balayage à trois doigts avance d’un village à la fois. Voir [Jouer avec VoiceOver](help:voiceover#journey).',
          },
        ],
      },
    ],
    related: ['playing-a-board', 'rewards-and-events', 'menus-tour', 'voiceover'],
  },

  {
    slug: 'rewards-and-events',
    category: 'progress',
    cover: 'pass',
    title: 'Récompenses, événements et Pass Brique',
    summary:
      'La Brique du jour et les séries de jours, la Roue, les Missions, le Pass Brique, les événements et les courses, et le classement.',
    keywords: 'brique du jour série roue tour missions pass brique saison paliers premium événement course royale sauvetage équipe classement succès game center tirelire ciné tampon',
    sections: [
      {
        id: 'daily',
        title: 'La Brique du jour et les séries de jours',
        blocks: [
          {
            t: 'list',
            items: [
              '**Brique du jour :** le premier plateau terminé de chaque journée rapporte 100 pièces, récupérées automatiquement sur l’Accueil.',
              '**Série de jours :** la flamme de l’Accueil compte les jours d’affilée où vous avez terminé un plateau. Touchez-la pour voir la prochaine récompense.',
            ],
          },
          {
            t: 'table',
            caption: 'Récompenses de série',
            head: ['Jours d’affilée', 'Récompense'],
            rows: [
              ['3', '100 pièces'],
              ['7', '250 pièces et un bouclier de série'],
              ['14', '500 pièces et un bouclier de série'],
              ['30', '800 pièces et un bouclier de série'],
              ['60', '1 200 pièces et un bouclier de série'],
              ['100', '2 500 pièces et un bouclier de série'],
              ['Puis tous les 100 jours', '2 000 pièces et un bouclier de série'],
            ],
          },
          {
            t: 'p',
            text: 'Vous avez manqué un jour ? Une série de trois jours ou plus peut être restaurée dans la semaine, gratuitement avec un bouclier de série ou pour 250 pièces. Vous pouvez garder jusqu’à deux boucliers.',
          },
        ],
      },
      {
        id: 'wheel',
        title: 'La Roue',
        blocks: [
          {
            t: 'p',
            text: 'Le bouton **Roue** de l’Accueil donne un tour gratuit par jour, pour des pièces (50 à 500) ou un Indice, une Fusée ou un OVNI. Terminez trois nouveaux niveaux dans la journée et le tour gratuit rapporte deux fois plus de pièces. Une vidéo facultative donne un deuxième tour.',
          },
        ],
      },
      {
        id: 'missions',
        title: 'Les Missions',
        blocks: [
          {
            t: 'p',
            text: 'Touchez **Missions** sur l’Accueil, ou la carte Missions de l’onglet Pass : trois choses à faire aujourd’hui et trois pour la semaine, chacune avec sa récompense. Terminez-en une et touchez **Récupérer**, ou **Tout récupérer**. Les missions du jour se réinitialisent à minuit UTC ; celles de la semaine, le lundi.',
          },
        ],
      },
      {
        id: 'pass',
        title: 'Le Pass Brique',
        blocks: [
          {
            t: 'shot',
            id: 'pass',
            alt: 'L’onglet Pass : un en-tête de saison, une carte Missions et une carte Collection, puis deux colonnes de récompenses, Gratuit et Premium, qui montent de palier en palier.',
            caption: 'L’onglet Pass. Chaque plateau terminé vous fait monter dans les 30 paliers de la saison.',
          },
          {
            t: 'list',
            items: [
              'Chaque **saison** compte **30 paliers**. Terminer de nouveaux niveaux vous fait monter ; un plateau Difficile compte un point de plus et un Très difficile deux.',
              'La piste **Gratuit** offre des pièces et des bonus à tout le monde.',
              'La piste **Premium**, débloquée en achetant le Pass Brique de la saison, ajoute de plus grosses récompenses. Le posséder ajoute aussi trois vies à votre réserve, trois coups gratuits sur l’écran « Plus de coups », et supprime les vidéos : les récompenses se récupèrent sans rien regarder.',
              'Les paliers Premium déjà atteints vous sont versés dès que vous le débloquez.',
            ],
          },
        ],
      },
      {
        id: 'events',
        title: 'Événements et courses',
        blocks: [
          {
            t: 'p',
            text: 'Les événements vont et viennent selon un calendrier et apparaissent sous forme de bannière sur l’Accueil et de badge dans le Voyage. Certains doublent ou triplent les pièces gagnées. Quatre sortes de courses et de sauvetages ont lieu en parallèle :',
          },
          {
            t: 'defs',
            items: [
              { term: 'Sauvetage d’ami', text: 'Une histoire chaque semaine : terminez quatre finales de village pour sauver un ami.' },
              { term: 'Course du village', text: 'Affrontez quatre joueurs à travers un village. Partage votre nom de joueur.' },
              { term: 'Brick Royale', text: 'Un concours facultatif jusqu’à 100 joueurs. Partage votre nom de joueur si vous y participez.' },
              { term: 'Course de l’équipe', text: 'Cinq nouveaux niveaux en un jour, contre d’autres joueurs et vos amis.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Chacun d’eux peut être désactivé dans **Réglages › Jeu › Fonctions du jeu**, tout comme les offres sur la carte.',
          },
        ],
      },
      {
        id: 'leaders',
        title: 'Classement et Game Center',
        blocks: [
          {
            t: 'list',
            items: [
              'L’onglet **Classement** se débloque au niveau 21 : un seul tableau de joueurs, tous temps confondus, avec leurs drapeaux. Touchez **Voir plus** pour descendre plus bas.',
              'Vous y apparaissez tant que **Réglages › Jeu › M’afficher au classement** est activé. Ce réglage publie votre nom de joueur et votre niveau ; le désactiver vous retire du classement.',
              'Choisissez ou masquez votre **drapeau** dans votre Profil.',
              '**Game Center** propose 65 succès et des classements pour le niveau le plus élevé, le total de plateaux terminés, aujourd’hui et cette semaine. Connectez-vous avec la barre de l’onglet Classement, ou ouvrez Game Center depuis le badge du Voyage ou le menu Pause.',
            ],
          },
        ],
      },
    ],
    related: ['journey-and-villages', 'shop-and-purchases', 'friends-and-wardrobe', 'apple-features'],
  },

  {
    slug: 'shop-and-purchases',
    category: 'progress',
    cover: 'shop',
    title: 'La Boutique, les achats et la restauration',
    summary:
      'Ce que contient chaque rayon de la Boutique, ce que font Supprimer les pubs et le Pass Brique, comment restaurer vos achats sur un nouvel appareil, et comment fonctionnent les remboursements.',
    keywords: 'acheter achat intégré prix pièces pack supprimer les pubs restaurer achat remboursement argent reçu famille',
    sections: [
      {
        id: 'shelves',
        title: 'Ce que contient la Boutique',
        blocks: [
          {
            t: 'shot',
            id: 'shop',
            alt: 'La boutique : 2 580 pièces et le rayon Offres spéciales, avec un pack de départ unique de pièces, de vies et de bonus, la tirelire, et un Booster Pass de 60 minutes d’OVNI et de fusées gratuits.',
            caption: 'La Boutique, accessible par son onglet, par les pièces de l’Accueil ou par la porte de la Boutique dans le Voyage.',
          },
          {
            t: 'p',
            text: 'Les rayons, de haut en bas : **Offres spéciales** (le Pack Débutant tant qu’il est proposé, la Tirelire, le Pass Bonus, le Pass Brique et Supprimer les pubs), l’**Offre de la semaine**, les offres d’événement pendant un événement, l’**Offre du week-end** du vendredi au lundi, **Bonus et coups**, **Bonus**, **Pass**, **Packs**, **Vies**, la **Garde-robe**, **Pièces**, et enfin **Restaurer l’achat** et les liens juridiques.',
          },
          {
            t: 'list',
            items: [
              'Les prix sont affichés dans votre devise par l’App Store.',
              'Votre premier achat de pièces est doublé, une seule fois.',
              'La **Tirelire** se remplit de pièces à mesure que vous terminez de nouveaux niveaux ; quand elle est prête, vous pouvez la casser pour un petit prix.',
              'Chaque pass et chaque article à durée limitée est un achat unique. **Rien dans OutBrick n’est un abonnement**, et rien ne se renouvelle tout seul.',
              'Rien de payant n’est proposé sur un plateau avant le niveau 6.',
            ],
          },
        ],
      },
      {
        id: 'remove-ads',
        title: 'Supprimer les pubs et le Pass Brique',
        blocks: [
          {
            t: 'p',
            text: '**Supprimer les pubs** retire toutes les vidéos facultatives, mais pas les récompenses : les boutons qui proposaient de regarder une vidéo indiquent désormais **Réclamer la récompense** et versent la récompense immédiatement, dans les mêmes limites quotidiennes. Posséder le **Pass Brique** de la saison en cours fait la même chose pour cette saison, et ajoute trois vies à votre réserve.',
          },
        ],
      },
      {
        id: 'restore',
        title: 'Restaurer vos achats',
        blocks: [
          {
            t: 'steps',
            items: [
              'Connectez-vous sur l’iPhone avec le compte Apple utilisé pour l’achat, ainsi qu’à iCloud.',
              'Ouvrez la **Boutique** et faites défiler tout en bas.',
              'Touchez **Restaurer l’achat**.',
            ],
          },
          {
            t: 'p',
            text: 'La restauration récupère tout ce que vous possédez définitivement : **Supprimer les pubs**, les saisons 1 à 3 du Pass Brique et les articles de la Garde-robe. Les pièces, les bonus, les vies et les autres choses qui se consomment ne sont pas restaurés par l’App Store ; ils voyagent avec votre progression via iCloud. Voir [Progression, iCloud et confidentialité](help:progress-privacy-and-account).',
          },
        ],
      },
      {
        id: 'refunds',
        title: 'Remboursements et problèmes d’achat',
        blocks: [
          {
            t: 'p',
            text: 'Les achats passent par Apple, c’est donc Apple qui gère les remboursements : voir [notre page sur les remboursements](/refunds) pour savoir comment en faire la demande. Si un achat n’est pas arrivé, essayez d’abord **Restaurer l’achat**, puis écrivez-nous en privé avec le [formulaire de contact](/contact). Ne publiez jamais de reçu ni de numéro de commande dans la communauté.',
          },
        ],
      },
    ],
    related: ['rewards-and-events', 'lives-moves-and-undos', 'progress-privacy-and-account', 'troubleshooting'],
  },

  {
    slug: 'friends-and-wardrobe',
    category: 'progress',
    cover: 'wardrobe',
    title: 'Les amis, la Collection et la Garde-robe',
    summary:
      'Faites connaissance avec les neuf amis en briques, découvrez ce qu’ils font sur l’Accueil et sur les plateaux, et comment fonctionnent votre Profil, la Collection et la Garde-robe.',
    keywords: 'mascottes amis personnages bloo peach sprout moss bricko zippy vio flurry poppy garde-robe tenue apparence cosmétiques collection cartes badges souvenirs profil avatar nom drapeau',
    sections: [
      {
        id: 'friends',
        title: 'Les neuf amis',
        blocks: [
          {
            t: 'p',
            text: '**Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry et Poppy** sont des amis en briques jouets. Trois d’entre eux se tiennent sur la scène de l’Accueil, à tour de rôle. Sur un plateau, l’ami qui accueille le village apparaît dans le cadre rond de l’en-tête, habillé pour ce village : touchez-le pour un petit rire, un signe de la main ou un « tope là ». Ils vous encouragent dans des bulles de texte ; ils ne parlent pas à voix haute.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Sur les appareils équipés du modèle de langage intégré d’Apple, les amis peuvent inventer leurs propres répliques (**Réglages › Jeu › IA des mascottes**). Tout se passe sur votre appareil.',
          },
        ],
      },
      {
        id: 'profile',
        title: 'Votre Profil',
        blocks: [
          {
            t: 'p',
            text: 'Touchez votre avatar sur l’Accueil ou dans le Voyage. Changez votre nom et votre avatar, choisissez le drapeau de votre pays (automatique, un pays de votre choix, ou masqué), ouvrez la Collection et consultez vos statistiques : victoires du premier coup, plateaux réussis sous l’objectif, meilleure série, plateaux vidés, coups joués, et plus encore. Le numéro de version du jeu figure en bas ; indiquez-le quand vous [signalez un bug](help:reporting-bugs).',
          },
        ],
      },
      {
        id: 'collection',
        title: 'La Collection',
        blocks: [
          {
            t: 'p',
            text: 'La Collection s’ouvre au niveau 95, depuis votre Profil ou l’onglet Pass. Elle contient les **Cartes briques**, les **Badges de chapitre** pour chaque chapitre terminé, les **Souvenirs** et les **Cartes de saison** : une carte tous les trois nouveaux niveaux, neuf par saison. Les étincelles en trop peuvent être échangées contre une carte manquante.',
          },
        ],
      },
      {
        id: 'wardrobe',
        title: 'La Garde-robe',
        blocks: [
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'La Garde-robe : le Roi Bricko avec une couronne dorée et une fraise rouge, un bouton vert Porter, et en dessous des onglets Tenues, Socles de plateau, Palettes et Finition des briques, ainsi que l’Ensemble bord de mer.',
            caption: 'Tenues, socles de plateau, palettes, finitions des briques, célébrations, traînées et cadres.',
          },
          {
            t: 'list',
            items: [
              'Les pièces de la Garde-robe changent **l’apparence du jeu, jamais sa façon de se jouer**.',
              'Débloquez-les avec des pièces, des jetons de mission ou par achat, puis touchez **Porter**. **Retirer** ou **Tenue du village** remet les choses en place.',
              'Les pièces d’accessibilité sont toujours gratuites.',
            ],
          },
        ],
      },
    ],
    related: ['menus-tour', 'rewards-and-events', 'shop-and-purchases', 'settings'],
  },
];
