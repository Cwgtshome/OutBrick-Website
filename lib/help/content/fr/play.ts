import type { HelpArticle } from '../../model.ts';

/** Premiers pas et jouer un plateau, en français. Vérifié avec la 5.1.1 (68). */
export const playArticles: HelpArticle[] = [
  {
    slug: 'welcome',
    category: 'start',
    cover: 'garden-teach',
    title: 'Bienvenue dans OutBrick : votre premier plateau',
    summary:
      'Ce qu’est OutBrick, comment fonctionnent les cartes d’apprentissage, comment lire les objectifs d’un plateau et ce qui se passe quand vous le terminez.',
    keywords: 'débutant nouveau joueur tutoriel comment jouer première fois commencer règles didacticiel',
    sections: [
      {
        id: 'what',
        title: 'Ce qu’est OutBrick',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick est un puzzle paisible de type **Slide & Match**. Chaque plateau est un jardin de briques jouets, avec des portes de couleur sur ses bords. **Faites glisser** une brique jusqu’à la porte de sa couleur et elle rentre chez elle, ou **échangez** deux voisines pour aligner trois briques et les faire disparaître. Chaque plateau a des objectifs à atteindre en un nombre de coups limité, et il n’y a jamais de chrono.',
          },
          {
            t: 'list',
            items: [
              '**2 000 niveaux** le long du Voyage, à travers **167 villages**, chacun avec son propre style et douze sortes de plateaux.',
              '**Neuf amis en briques** (Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry et Poppy) vous encouragent dans des bulles de texte.',
              '**Gratuit.** Il existe des vidéos et des achats facultatifs, mais les vies reviennent toutes seules et vous n’avez jamais besoin de payer pour continuer à jouer.',
            ],
          },
        ],
      },
      {
        id: 'first-board',
        title: 'Votre premier plateau',
        blocks: [
          {
            t: 'p',
            text: 'Depuis l’**Accueil**, touchez le grand bouton vert **Niveau**. La première fois que vous découvrez une nouvelle idée, une courte carte d’apprentissage vous la montre avec une main animée. Touchez n’importe où pour commencer à jouer.',
          },
          {
            t: 'shot',
            id: 'garden-teach',
            alt: 'Un plateau de la Cité-Jardin avec des briques rouges, violettes et orange. Une carte d’apprentissage rose en bas indique : Fais glisser une brique à côté de deux de sa couleur pour faire une ligne, ou pousse-la vers une voisine pour les échanger. Les lignes s’effacent ! En dessous : À toi, essaie ! Une main désigne une brique.',
            caption: 'Une carte d’apprentissage au niveau 2. Chaque nouvelle idée a sa carte, la première fois que vous la rencontrez.',
          },
          {
            t: 'steps',
            items: [
              '**Glisser :** balayez une brique vers une case vide. Elle avance jusqu’à ce que vous lâchiez ou qu’elle rencontre un obstacle. Amenez-la dans la porte de sa couleur et elle quitte le plateau.',
              '**Échanger :** balayez une brique vers une voisine. Si cela aligne trois briques ou plus (ou forme un carré de 2×2), elles disparaissent. Sinon, les briques reviennent en place et **aucun coup n’est utilisé**.',
              '**Surveillez les objectifs** dans le panneau du haut. Chaque coche signifie qu’un objectif est atteint.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Vous ne savez pas quoi faire ? Touchez le bonus **Indice** dans la barre du bas. Vous avez un Indice, une Fusée et un OVNI offerts à chaque essai.',
          },
        ],
      },
      {
        id: 'goals',
        title: 'Lire les objectifs',
        blocks: [
          {
            t: 'p',
            text: 'Le **panneau des objectifs** en haut montre ce que demande le plateau et combien il en reste : des briques d’une couleur à renvoyer chez elles ou à aligner, des caisses à casser, des verrous à ouvrir ou de la mousse à enlever. Chaque objectif porte le même symbole pour daltoniens que ses briques. Certains plateaux se jouent en deux **étapes** : atteignez les premiers objectifs et de nouvelles portes s’ouvrent pour la seconde.',
          },
          { t: 'p', text: 'Chaque partie de l’écran est expliquée dans [Jouer un plateau](help:playing-a-board#screen).' },
        ],
      },
      {
        id: 'clear',
        title: 'Quand vous terminez un plateau',
        blocks: [
          {
            t: 'shot',
            id: 'clear',
            alt: 'La carte de victoire : un ruban doré indiquant Crête de la Fusée 4, un badge Chapitre terminé, trois étoiles dorées, un ami en briques vert qui fait la fête, le mot Brillant !, un score de 5 470, plus 140 pièces, une pastille Du premier coup !, une ligne Coffre du voyage, et les boutons Accueil, Suivant et Partager.',
            caption: 'La carte de victoire : vos étoiles, votre score, vos pièces et les récompenses ramassées en chemin.',
          },
          {
            t: 'list',
            items: [
              'Les coups qu’il vous reste se transforment en rayons de ligne et explosent, en rapportant 150 points chacun. Touchez l’écran pour passer le spectacle.',
              'Vous gagnez toujours au moins une étoile en terminant un plateau ; un meilleur score en rapporte deux ou trois.',
              '**Suivant** passe au plateau suivant ; **Accueil** vous ramène à l’écran d’accueil. Avec **Jeu rapide** activé (Réglages › Jeu), une victoire mène directement au plateau suivant.',
              'Gagner ne coûte jamais de vie. Une vie n’est utilisée que lorsqu’un essai est perdu. Voir [Vies, coups et annulations](help:lives-moves-and-undos).',
            ],
          },
        ],
      },
      {
        id: 'next',
        title: 'Et ensuite ?',
        blocks: [
          {
            t: 'list',
            items: [
              '[La visite de tous les menus](help:menus-tour), pour savoir à quoi sert chaque bouton.',
              '[Briques spéciales, obstacles et types de plateaux](help:bricks-specials-and-blockers), dès que vous découvrez quelque chose de nouveau.',
              '[L’accessibilité](help:accessibility) et [Jouer avec VoiceOver](help:voiceover), si vous voulez que le jeu s’adapte mieux à vous.',
            ],
          },
        ],
      },
    ],
    related: ['menus-tour', 'playing-a-board', 'bricks-specials-and-blockers', 'accessibility'],
  },

  {
    slug: 'menus-tour',
    category: 'start',
    cover: 'home',
    title: 'La visite de tous les menus',
    summary:
      'La barre du bas, l’Accueil, la carte du Voyage, la Boutique, le Pass Brique, le Classement, votre Profil, la Collection et les Réglages : à quoi sert chacun et comment y accéder.',
    keywords: 'navigation onglets barre du bas où trouver bouton profil collection engrenage menu',
    sections: [
      {
        id: 'tab-bar',
        title: 'La barre du bas',
        blocks: [
          { t: 'p', text: 'Cinq onglets occupent le bas de l’écran. Vous pouvez aussi balayer vers la gauche ou la droite pour passer de l’un à l’autre.' },
          {
            t: 'table',
            head: ['Onglet', 'Ce qu’il contient'],
            rows: [
              ['**Accueil**', 'Vos amis sur leur scène en briques et le grand bouton **Niveau**.'],
              ['**Classement**', 'Le classement des joueurs. Il se débloque au niveau 21.'],
              ['**Voyage**', 'L’onglet central surélevé : la carte des 2 000 niveaux.'],
              ['**Boutique**', 'Pièces, bonus, packs, vies et garde-robe.'],
              ['**Pass**', 'La saison du Pass Brique, avec des raccourcis vers les Missions et la Collection.'],
            ],
          },
        ],
      },
      {
        id: 'home',
        title: 'L’Accueil',
        blocks: [
          {
            t: 'shot',
            id: 'home',
            alt: 'L’accueil : en haut, l’avatar, 2 580 pièces, une série de 12 jours, Missions et la roue des Réglages. Sous le logo OUTBRICK, une carte annonce un événement qui commence bientôt. Trois amis briques en chapeau de soleil se tiennent sur une pelouse de briques, au-dessus d’un bouton vert Niveau 214. La barre du bas affiche les cinq onglets.',
            caption: 'L’Accueil. La rangée du haut, de gauche à droite : votre avatar, vos pièces, votre série de jours, les Missions, la Roue quand elle est prête, et l’engrenage des Réglages.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Avatar', text: 'Ouvre votre **Profil**.' },
              { term: 'Pièces', text: 'Ouvre la Boutique.' },
              { term: 'Série (flamme)', text: 'Affiche votre série de jours et la prochaine récompense de série. La série grandit chaque jour où vous terminez un plateau.' },
              { term: 'Missions', text: 'Trois choses à faire aujourd’hui et trois pour la semaine.' },
              { term: 'Roue', text: 'Un tour gratuit chaque jour pour gagner des pièces ou un bonus.' },
              { term: 'Engrenage', text: 'Ouvre les [Réglages](help:settings).' },
              { term: 'Bannière d’événement', text: 'L’événement en cours ou à venir. Touchez-la pour y aller.' },
              { term: 'Bouton Niveau', text: 'Lance votre plateau actuel.' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Votre **Brique du jour** (100 pièces) arrive toute seule : terminez un plateau un nouveau jour et elle vous est versée sur l’Accueil, avec une courte bannière.',
          },
        ],
      },
      {
        id: 'journey',
        title: 'La carte du Voyage',
        blocks: [
          {
            t: 'shot',
            id: 'journey',
            alt: 'La carte du Voyage : un chemin pavé à travers un village aux arbres en fleurs roses, avec les étapes de niveau 213, 214 (lumineuse, avec l’étiquette Jouer) et 215. Des badges bordent les deux côtés, et l’en-tête affiche l’avatar, les vies (Plein), les pièces et les étoiles, 9 sur 36.',
            caption: 'Le Voyage. Votre niveau actuel brille ; les badges de chaque côté mènent aux événements, récompenses et offres.',
          },
          {
            t: 'list',
            items: [
              '**En-tête :** votre avatar, vos **vies** (touchez-les pour savoir quand revient la prochaine), vos pièces, les **étoiles** du village (touchez-les pour voir les récompenses d’étoiles) et l’engrenage.',
              '**Étapes de niveau :** touchez votre niveau actuel ou n’importe quel niveau terminé pour le jouer aussitôt. Une étape verrouillée vous indique à combien de niveaux elle se trouve.',
              '**Badges de droite :** les récompenses d’événement, d’étoiles et de cadeau du village, les courses, **Game Center** (si vous êtes connecté) et **Tous les villages**, un atlas de tous les lieux à visiter.',
              '**Badges de gauche :** le défi de série, la tirelire, le Pass Brique, les offres, la porte de la Boutique et d’autres récompenses.',
              '**Mon niveau :** le bouton en forme d’épingle vous ramène à votre niveau actuel.',
            ],
          },
          { t: 'p', text: 'Plus de détails dans [Le Voyage et ses villages](help:journey-and-villages).' },
        ],
      },
      {
        id: 'shop-pass-leaders',
        title: 'Boutique, Pass et Classement',
        blocks: [
          {
            t: 'shots',
            items: [
              { id: 'shop', alt: 'La boutique : 2 580 pièces et le rayon Offres spéciales, avec un pack de départ unique de pièces, de vies et de bonus, la tirelire, et un Booster Pass de 60 minutes d’OVNI et de fusées gratuits.', caption: 'La Boutique. **Restaurer l’achat** se trouve tout en bas.' },
              { id: 'pass', alt: 'L’onglet Pass Brique avec les colonnes de récompenses Gratuit et Premium qui montent de palier en palier.', caption: 'Le Pass : 30 paliers de récompenses gratuites et premium.' },
              { id: 'leaders', alt: 'L’onglet Classement avec un exemple de classement : un podium pour les trois premiers avec leurs drapeaux et niveaux, puis la liste, et votre propre ligne épinglée en bas (87e, niveau 214). Une barre en haut propose de se connecter à Game Center pour voir ses amis.', caption: 'Classement : un seul tableau, de tous les temps (exemple affiché).' },
            ],
          },
          {
            t: 'p',
            text: 'Voir [La Boutique, les achats et la restauration](help:shop-and-purchases) et [Récompenses, événements et Pass Brique](help:rewards-and-events).',
          },
        ],
      },
      {
        id: 'profile-collection',
        title: 'Votre Profil et la Collection',
        blocks: [
          {
            t: 'list',
            items: [
              '**Profil** (touchez votre avatar) : votre nom, votre niveau, le drapeau de votre pays, le bouton Collection et vos statistiques : victoires du premier coup, meilleure série, plateaux vidés, et plus encore. La version du jeu figure en bas.',
              '**Collection** (depuis le Profil ou l’onglet Pass, débloquée au niveau 95) : Cartes briques, Badges de chapitre, Souvenirs, Cartes de saison et la **Garde-robe**.',
            ],
          },
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'La Collection, section Garde-robe : le Roi Bricko portant une couronne dorée avec un bouton Porter, puis des onglets Tenues, Socles de plateau, Palettes et Finition des briques, et en dessous l’Ensemble bord de mer et l’Ensemble confiserie.',
            caption: 'La Garde-robe change l’apparence du jeu, jamais sa façon de se jouer.',
          },
          { t: 'p', text: 'Plus de détails dans [Les amis, la Collection et la Garde-robe](help:friends-and-wardrobe).' },
          { t: 'shots', items: [{ id: 'profile', alt: 'Votre profil : l’ami bleu en avatar avec un crayon pour le modifier, le nom Riley, niveau 214, région automatique, Collection 33 sur 39, et les statistiques : 96 victoires du premier coup, 74 objectifs battus, une meilleure série de 21, 213 plateaux réussis, 4 218 coups et 3 plateaux parfaits.', caption: 'Profil.' }, { id: 'collection', alt: 'La Collection sur les cartes de saison : saison 2, 0 carte sur 9 et 0 étincelle, les règles (une carte tous les trois nouveaux niveaux à partir du niveau 96, un doublon donne une étincelle, trois étincelles pour choisir une carte manquante), et les neuf amis, chacun marqué Manquant. Les cartes briques, 33 sur 39, suivent en dessous.', caption: 'Collection.' }] },
        ],
      },
      {
        id: 'settings',
        title: 'Les Réglages',
        blocks: [
          {
            t: 'p',
            text: 'Touchez l’engrenage sur l’Accueil ou dans le Voyage. Les Réglages ont deux onglets, **Jeu** et **Accessibilité**, et se terminent par des liens vers l’assistance, la communauté et les pages juridiques. Chaque ligne est expliquée dans [Tous les réglages expliqués](help:settings).',
          },
        ],
      },
    ],
    related: ['welcome', 'settings', 'journey-and-villages', 'playing-a-board'],
  },

  {
    slug: 'playing-a-board',
    category: 'play',
    cover: 'board-slide',
    title: 'Jouer un plateau',
    summary:
      'Chaque partie de l’écran de jeu, comment glisser et échanger, ce qui compte comme un coup, comment fonctionnent les étoiles et le score, et ce que signifient les plateaux Difficile, Très difficile, Boss et Nuit.',
    keywords: 'écran en-tête compteur de coups barre d’étoiles panneau objectifs glisser échanger porte aligner score étoiles difficulté difficile boss nuit',
    sections: [
      {
        id: 'screen',
        title: 'L’écran de jeu',
        blocks: [
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'Un plateau Slide & Match sur une plage, niveau 25. L’en-tête affiche 5 vies, 15 coups restants, une barre d’étoiles avec une étoile allumée, des objectifs de 1 brique jaune et 3 bleues, et l’ami hôte en casquette de marin. Le plateau contient des briques roses, jaunes, orange et bleues, chacune marquée de la forme de sa couleur, avec des portes jaunes, orange et bleues sur ses bords et un couvercle doré à serrure sur une rangée de briques. En bas, le plateau d’outils : Pause, puis Indice, Fusée et OVNI marqués Gratuit, et Annuler avec 6.',
            caption: 'L’écran de jeu : l’en-tête, la grille et la barre du bas.',
          },
          {
            t: 'table',
            head: ['Élément', 'Ce qu’il vous indique'],
            rows: [
              ['Niveau et vies', 'Le numéro du niveau, puis un cœur avec vos vies. Touchez le cœur pour savoir quand revient la prochaine vie.'],
              ['Coups', 'Le grand nombre : les coups restants. Il pulse à trois, et pendant les cinq derniers, le bord du plateau prend une lueur chaude.'],
              ['Série de victoires', 'Une petite chaîne de briques sous les coups quand vous enchaînez les victoires.'],
              ['Barre d’étoiles', 'Se remplit à mesure que votre score monte, avec une étoile à chaque seuil.'],
              ['Panneau des objectifs', 'Les objectifs et combien il en reste. Une coche marque chaque objectif atteint. Les plateaux en deux étapes affichent « MANCHE 1 / 2 ».'],
              ['Ami', 'L’ami qui accueille le village. Touchez-le pour un petit rire ou un signe de la main.'],
              ['Plaque de difficulté', 'Les plateaux Difficile, Très difficile, Boss ou Nuit portent une plaque sous l’en-tête.'],
              ['Barre du bas', 'Pause, puis Indice, Fusée, OVNI et Annuler. Voir [Bonus, indices et Pause](help:boosters-and-pause).'],
            ],
          },
        ],
      },
      {
        id: 'slide',
        title: 'Renvoyer les briques chez elles',
        blocks: [
          {
            t: 'list',
            items: [
              'Balayez une brique vers une case vide. Elle s’arrête là où vous lâchez, sur la case entière la plus proche, ou plus tôt si elle rencontre une pièce, un obstacle ou le bord.',
              'Si vous la déplacez de moins d’une demi-case, elle revient en place sans utiliser de coup.',
              'Une brique ne sort que par une **porte ouverte de sa propre couleur**. Toute autre porte est un mur.',
              'Les briques simples, les clés et les rayons de ligne peuvent sortir par une porte. Les bombes, les fléchettes et les bombes de couleur s’arrêtent devant une porte.',
              'Les briques longues et les grandes briques glissent d’un seul bloc et ont besoin d’une porte aussi large qu’elles. Elles comptent pour chaque case qu’elles couvrent.',
              'Sur les plateaux où les briques tombent, vous pouvez glisser sur le côté, ou tout droit vers une porte.',
              'Chaque glissement utilise un coup.',
            ],
          },
        ],
      },
      {
        id: 'swap',
        title: 'Échanger et aligner',
        blocks: [
          {
            t: 'list',
            items: [
              'Balayez une brique vers sa voisine pour les échanger. L’échange est conservé s’il aligne trois briques ou plus, forme un carré de 2×2, déclenche deux spéciales ensemble ou utilise une bombe de couleur.',
              'Sinon, les briques reviennent en place, vous sentez deux petites vibrations et **aucun coup n’est utilisé**.',
              'Aligner quatre ou cinq briques, former un L, un T ou un carré crée une brique spéciale. Voir [Briques spéciales](help:bricks-specials-and-blockers#specials).',
              'Touchez une brique spéciale pour la déclencher sur place. Cela utilise un coup.',
            ],
          },
        ],
      },
      {
        id: 'never-stuck',
        title: 'Vous ne pouvez jamais rester bloqué',
        blocks: [
          {
            t: 'p',
            text: 'Si aucun coup n’est possible, le plateau est mélangé gratuitement sous une bannière **On mélange !** : aucun coup ni aucune vie n’est utilisé. Si un plateau a encore des coups mais qu’aucun ne peut plus mener à vos objectifs, il est discrètement redistribué. Et s’il manque au plateau une couleur dont un objectif a besoin, des briques en trop sont recolorées pour que l’objectif reste toujours atteignable.',
          },
        ],
      },
      {
        id: 'stars',
        title: 'Score, étoiles et bonus de fin de plateau',
        blocks: [
          {
            t: 'list',
            items: [
              'Chaque plateau terminé rapporte au moins **une étoile**. Un meilleur score en rapporte deux ou trois ; la barre d’étoiles montre où vous en êtes.',
              'Quand le dernier objectif est atteint, vous voyez **Objectif atteint !** Chaque coup restant devient un rayon de ligne, ils explosent tous, et chaque coup restant ajoute 150 points. Touchez l’écran pour passer.',
              'Rejouez quand vous voulez un plateau terminé depuis le Voyage pour améliorer ses étoiles.',
            ],
          },
          {
            t: 'shot',
            id: 'clear',
            alt: 'La carte de victoire avec trois étoiles dorées, le mot Brillant !, un score de 5 470 et plus 140 pièces.',
            caption: 'Trois étoiles : Brillant ! Deux : Super ! Une : Réussi !',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Plateaux Difficile, Très difficile, Boss et Nuit',
        blocks: [
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Niveau 35 au crépuscule, 28 coups restants, avec une plaque violette DIFFICILE sous les objectifs : 2 jaunes, 5 roses et 3 châteaux de sable. Le plateau en forme de château contient une grosse brique rose, des briques couvertes de mousse et quatre caisses en château de sable, avec des portes jaunes, roses et rouges.',
            caption: 'Un plateau Difficile porte sa plaque sous l’en-tête.',
          },
          {
            t: 'table',
            head: ['Difficulté', 'Ce qui change', 'Pièces gagnées'],
            rows: [
              ['Normal', 'Pas de plaque.', '25'],
              ['Difficile', 'Les objectifs demandent environ 15 % de plus, avec quelques obstacles en plus.', '50'],
              ['Très difficile', 'Les objectifs demandent environ 30 % de plus.', '80'],
              ['Boss', 'Le dernier plateau d’un chapitre, à partir du niveau 40. Les objectifs demandent environ 40 % de plus.', '80'],
              ['Nuit', 'Un plateau à la tombée de la nuit. Il se joue comme un plateau Difficile.', '50'],
            ],
          },
          {
            t: 'p',
            text: 'Avec deux étoiles ou plus, un bonus d’objectif s’ajoute. Les événements peuvent doubler ou tripler les pièces gagnées.',
          },
        ],
      },
    ],
    related: ['bricks-specials-and-blockers', 'boosters-and-pause', 'lives-moves-and-undos', 'voiceover'],
  },

  {
    slug: 'bricks-specials-and-blockers',
    category: 'play',
    cover: 'board-shapes',
    title: 'Briques spéciales, obstacles et types de plateaux',
    summary:
      'Comment créer chaque brique spéciale et chaque combo, ce que fait chaque obstacle, couvercle et porte, les briques face cachée, les portails, les briques longues, et les douze types de plateaux de chaque village.',
    keywords: 'bombe rayon de ligne bombe de couleur fléchette combo caisse glace gelée verrou mousse statue couvercle salle scellée compteur clé serrure horloge porte gelée porte à compteur portail face cachée point d’interrogation brique longue forme en L en T',
    sections: [
      {
        id: 'specials',
        title: 'Briques spéciales',
        blocks: [
          {
            t: 'table',
            head: ['Spéciale', 'Comment la créer', 'Ce qu’elle fait'],
            rows: [
              ['Rayon de ligne', 'Quatre en ligne.', 'Vide toute sa ligne ou sa colonne, dans le sens de votre mouvement.'],
              ['Bombe', 'Une forme en L, en T ou en +.', 'Fait exploser le carré de 3×3 autour d’elle, deux fois.'],
              ['Bombe de couleur', 'Cinq en ligne.', 'Prend toutes les briques simples d’une couleur : échangez-la avec cette couleur.'],
              ['Fléchette', 'Un carré de 2×2.', 'Vole vers une pièce dont un objectif a besoin.'],
            ],
          },
          {
            t: 'p',
            text: 'Touchez une spéciale pour la déclencher sur place, ou échangez-la avec une voisine. Un rayon de ligne peut aussi sortir par une porte de sa couleur sans exploser.',
          },
        ],
      },
      {
        id: 'combos',
        title: 'Les combos',
        blocks: [
          { t: 'p', text: 'Échangez deux spéciales entre elles pour un effet plus grand :' },
          {
            t: 'table',
            head: ['Échangez ensemble', 'Résultat'],
            rows: [
              ['Rayon de ligne + rayon de ligne', 'Une croix : une ligne et une colonne.'],
              ['Rayon de ligne + bombe', 'Une croix large de trois rangées.'],
              ['Bombe + bombe', 'Une explosion de 5×5.'],
              ['Bombe de couleur + n’importe quelle spéciale', 'Toutes les briques de cette couleur deviennent cette spéciale, et elles explosent toutes.'],
              ['Bombe de couleur + bombe de couleur', 'Tout le plateau.'],
              ['Fléchette + n’importe quelle spéciale', 'La fléchette emporte la spéciale jusqu’à sa cible. Deux fléchettes touchent trois cibles.'],
            ],
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Les obstacles',
        blocks: [
          {
            t: 'p',
            text: 'Touchez un obstacle pour voir un rappel en une ligne de la façon de l’éliminer. Leur apparence change selon le village (des bottes de foin à la ferme, des pots de fleurs dans la Cité-Jardin), mais les règles restent les mêmes.',
          },
          {
            t: 'table',
            head: ['Obstacle', 'Ce qu’il fait', 'Comment l’éliminer'],
            rows: [
              ['Caisse', 'Arrête les briques qui glissent. Une ou deux couches.', 'Faites une ligne à côté ; chaque ligne casse une couche.'],
              ['Glace (gelée)', 'Immobilise la brique qu’elle contient.', 'Faites une ligne à côté.'],
              ['Verrou', 'La brique ne peut pas bouger.', 'Faites une ligne qui la **traverse**. Une ligne à côté ne suffit pas.'],
              ['Mousse', 'S’étend sur une brique après chaque coup qui n’enlève pas de mousse.', 'Faites une ligne à côté.'],
              ['Statue', 'Occupe un passage : rien ne glisse à travers.', 'Elle reste. Trouvez un autre chemin.'],
            ],
          },
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Niveau 35 au crépuscule, 28 coups restants, avec une plaque violette DIFFICILE sous les objectifs : 2 jaunes, 5 roses et 3 châteaux de sable. Le plateau en forme de château contient une grosse brique rose, des briques couvertes de mousse et quatre caisses en château de sable, avec des portes jaunes, roses et rouges.',
            caption: 'Des caisses en château de sable et de la mousse sur le même plateau.',
          },
        ],
      },
      {
        id: 'lids',
        title: 'Les salles scellées et leurs couvercles',
        blocks: [
          { t: 'p', text: 'Certaines briques sont sous un couvercle et ne peuvent pas bouger tant qu’il n’est pas ouvert. Il existe cinq sortes de couvercles :' },
          {
            t: 'table',
            head: ['Couvercle', 'S’ouvre quand…'],
            rows: [
              ['Compteur', 'Assez de briques de n’importe quelle couleur ont quitté le plateau (le nombre affiché sur le couvercle).'],
              ['Compteur de couleur', 'Assez de briques de sa couleur ont quitté le plateau ou ont été alignées.'],
              ['Clé en vitrail', 'Vous faites une ligne de sa couleur juste à côté.'],
              ['Horloge en laiton', 'Vous avez joué son nombre de coups.'],
              ['Serrure', 'La brique clé quitte le plateau, alignée ou sortie par sa porte.'],
            ],
          },
        ],
      },
      {
        id: 'gates',
        title: 'Les portes',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Porte ouverte', text: 'Accepte les briques de sa couleur. Sa largeur compte pour les briques longues.' },
              { term: 'Porte gelée', text: 'Dégèle un peu chaque fois qu’une brique rentre chez elle, ou quand des pièces disparaissent devant elle. Une fois ouverte, faites-y glisser sa couleur.' },
              { term: 'Porte à compteur', text: 'N’accepte qu’un certain nombre de briques, puis se ferme pour de bon. Choisissez lesquelles envoyer.' },
              { term: 'Porte d’étape', text: 'Reste scellée jusqu’au début de la deuxième étape d’objectifs du plateau.' },
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Les portes portent aussi le symbole de leur couleur, et sur le plateau à fort contraste, une porte dont la couleur est proche de celle du sol reçoit un contour bicolore.',
          },
        ],
      },
      {
        id: 'more',
        title: 'Briques face cachée, portails et briques à forme',
        blocks: [
          {
            t: 'list',
            items: [
              '**Les briques face cachée « ? »** cachent leur couleur. Elles se retournent quand une brique voisine quitte le plateau ; les déplacer ne les retourne pas. Elles jouent quand même selon leur vraie couleur.',
              '**Les portails** vont par paires : faites glisser une brique dans l’un, elle ressort par son jumeau, d’un autre côté.',
              '**Les briques longues, grandes, en L et en T** glissent et tombent d’un seul bloc, ne s’échangent jamais, ne comptent jamais dans les lignes et ont besoin d’une porte aussi large qu’elles. Aucun bonus ne peut les cibler.',
            ],
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Niveau 31 sur la plage : 16 coups restants, objectifs de 8 jaunes et 8 bleues. De grosses briques d’un seul tenant sont empilées en bas du plateau : une longue barre bleue, une haute colonne bleue et une pièce jaune en forme de C, avec des portes bleues et jaunes sur les bords.',
            caption: 'Les grosses briques glissent d’un seul bloc et demandent une porte aussi large qu’elles.',
          },
        ],
      },
      {
        id: 'kinds',
        title: 'Les douze types de plateaux',
        blocks: [
          {
            t: 'p',
            text: 'Chaque village complet compte douze plateaux, et les plateaux 1 à 12 sont toujours du même type, pour que vous preniez le rythme d’un village : ',
          },
          {
            t: 'table',
            head: ['Plateau', 'Type', 'À quoi s’attendre'],
            rows: [
              ['1', 'Retour à la maison', 'Faites sortir les briques par leurs portes.'],
              ['2', 'Glisser et aligner', 'Glissements et échanges réunis.'],
              ['3', 'Jardin ouvert', 'Un plateau spacieux, avec de la place pour réfléchir.'],
              ['4', 'Jardin qui tombe', 'Les briques tombent et de nouvelles arrivent.'],
              ['5', 'Pots et glace', 'Des caisses et de la glace à casser.'],
              ['6', 'Briques longues', 'Des briques à forme et des portes larges.'],
              ['7', 'Pièces d’angle', 'Les briques tombent, mais aucune nouvelle n’arrive.'],
              ['8', 'Caisses et glace', 'Plus de couches à casser.'],
              ['9', 'Verrous et mousse', 'Des verrous à ouvrir et de la mousse qui s’étend.'],
              ['10', 'Allées de pierre', 'Des statues qui barrent le passage.'],
              ['11', 'Le grand jour', 'Une finale plus grande, souvent avec un parterre scellé.'],
              ['12', 'Puzzle tranquille', 'Les briques tombent sans être remplacées : prenez le temps de réfléchir.'],
            ],
          },
          {
            t: 'p',
            text: 'Au fil du Voyage, les couvercles, les briques face cachée, les portes d’étape et les portails font aussi leur apparition. Chacun a sa propre carte d’apprentissage la première fois.',
          },
        ],
      },
    ],
    related: ['playing-a-board', 'boosters-and-pause', 'vision-hearing-and-motion', 'voiceover'],
  },

  {
    slug: 'boosters-and-pause',
    category: 'play',
    cover: 'board-shapes',
    title: 'Bonus, indices et Pause',
    summary:
      'Ce que font l’Indice, la Fusée, l’OVNI et Annuler, les bonus offerts à chaque plateau, comment en obtenir plus, et tout ce que contient le menu Pause.',
    keywords: 'bonus booster indice fusée ovni annuler barre gratuit offert pause recommencer quitter reprendre',
    sections: [
      {
        id: 'tray',
        title: 'La barre du bas',
        blocks: [
          {
            t: 'p',
            text: 'La barre en bas de chaque plateau contient **Pause**, puis **Indice**, **Fusée**, **OVNI** et **Annuler**. Tous sont disponibles dès le niveau 1. Un badge **OFFERT** signifie que la prochaine utilisation ne coûte rien ; un nombre indique combien vous en avez.',
          },
          {
            t: 'table',
            head: ['Bonus', 'Comment l’utiliser', 'Ce qu’il fait'],
            rows: [
              ['Indice', 'Touchez-le.', 'Montre et annonce le meilleur coup, un glissement ou un échange.'],
              ['Fusée', 'Touchez-la, puis touchez une brique simple.', 'Transforme cette brique en rayon de ligne qui part le long de sa ligne.'],
              ['OVNI', 'Touchez-le, puis touchez une pièce.', 'Retire une couche d’un coup de rayon : une couche de caisse, de la glace, un verrou, de la mousse ou une brique.'],
              ['Annuler', 'Touchez-le.', 'Reprend votre dernier coup.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Les bonus ne peuvent cibler ni les briques à forme ni ce qui se trouve sous un couvercle.',
          },
        ],
      },
      {
        id: 'free',
        title: 'Les bonus offerts',
        blocks: [
          {
            t: 'list',
            items: [
              '**Chaque essai** comprend un Indice, une Fusée et un OVNI offerts. Ils ne se gardent pas pour plus tard.',
              '**Les séries de victoires** en ajoutent pour votre plateau suivant : 2 victoires d’affilée donnent un Indice, 3 une Fusée, 4 un OVNI, et 5 les trois. Seuls les nouveaux niveaux comptent.',
              '**La première annulation** de chaque plateau est gratuite.',
              '**Un cadeau de bienvenue** de 2 Indices, 2 Fusées et 2 OVNI arrive une fois, au début du Voyage.',
              'Certaines récompenses et certains pass rendent un bonus gratuit sur chaque plateau pendant un temps ; son badge indique OFFERT.',
              'Avec VoiceOver, le toucher deux fois avec deux doigts donne un indice gratuit à tout moment. Voir [Jouer avec VoiceOver](help:voiceover#hints).',
            ],
          },
        ],
      },
      {
        id: 'more',
        title: 'En obtenir plus',
        blocks: [
          {
            t: 'p',
            text: 'Touchez un bonus épuisé pour en acheter un avec des pièces (Indice 150, Fusée 300, OVNI 500) ou un lot dans la Boutique. Les bonus viennent aussi de la Roue, des récompenses d’étoiles des villages, des Missions, du Pass Brique et des événements.',
          },
        ],
      },
      {
        id: 'undo',
        title: 'Annuler',
        blocks: [
          {
            t: 'list',
            items: [
              'La première annulation de chaque plateau est gratuite. Ensuite, les annulations viennent d’une réserve de **cinq** au maximum, qui se recharge d’une unité toutes les **25 minutes**.',
              'Le nombre affiché sur le bouton Annuler compte les deux : un nouveau plateau affiche donc 6 quand votre réserve est pleine.',
              'Si la réserve est vide : achetez-en cinq pour 250 pièces, regardez une vidéo facultative pour en obtenir deux, ou attendez.',
            ],
          },
        ],
      },
      {
        id: 'pause',
        title: 'Le menu Pause',
        blocks: [
          {
            t: 'p',
            text: 'Touchez le bouton rose **Pause** à gauche de la barre (ou à droite, avec la Barre pour gauchers). Avec VoiceOver, le frotter avec deux doigts l’ouvre aussi.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Sons, Musique, Vibrations', text: 'Activez ou désactivez chacun sans quitter le plateau.' },
              { term: 'Reprendre', text: 'Retour au plateau.' },
              { term: 'Game Center', text: 'Vos succès et vos classements.' },
              { term: 'Recommencer', text: 'Relance le plateau. **Avant votre premier coup, c’est gratuit ; après un coup, cela coûte une vie**, car cela met fin à cet essai.' },
              { term: 'Quitter', text: 'Ouvre la carte **Quitter ?**.' },
            ],
          },
          {
            t: 'shot',
            id: 'leave',
            alt: 'La carte Quitter ? : Cela coûte une vie. Il t’en reste 5. Ta progression sur ce plateau n’est pas sauvegardée. Boutons : Continuer et Quitter.',
            caption: 'La carte Quitter ? vous dit exactement ce que coûte le départ avant que vous choisissiez.',
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Partir avant votre premier coup est toujours gratuit. Si vous êtes en pleine série de victoires, la carte vous prévient que partir y mettra fin.',
          },
        ],
      },
    ],
    related: ['lives-moves-and-undos', 'playing-a-board', 'shop-and-purchases', 'voiceover'],
  },

  {
    slug: 'lives-moves-and-undos',
    category: 'play',
    cover: 'wall',
    title: 'Les vies, le manque de coups et les annulations',
    summary:
      'Quand une vie est utilisée et quand elle ne l’est pas, comment les vies reviennent, ce que propose l’écran « Plus de coups », le coup de main, l’essai offert du jour et les vidéos facultatives.',
    keywords: 'vies cœurs recharge plus de coups continuer abandonner niveau échoué plus de vies vies illimitées coup de main essai offert vidéo pub récompensée',
    sections: [
      {
        id: 'lives',
        title: 'Les vies',
        blocks: [
          {
            t: 'list',
            items: [
              'Vous pouvez avoir jusqu’à **cinq vies** (huit tant que vous possédez le Pass Brique en cours). Une vie revient toutes les **30 minutes**, même quand le jeu est fermé.',
              'Ouvrir un plateau demande une vie, mais **n’en utilise pas**. Une vie n’est utilisée que lorsque vous **perdez** un essai.',
              '**Gagner ne coûte jamais de vie.** Partir ou recommencer avant votre premier coup non plus.',
            ],
          },
          {
            t: 'table',
            caption: 'Quand une vie est utilisée',
            head: ['Vous…', 'Vie utilisée ?'],
            rows: [
              ['Terminez le plateau', 'Non'],
              ['Êtes à court de coups et abandonnez (ou fermez l’écran « Plus de coups »)', 'Oui'],
              ['Recommencez ou partez **après** un coup', 'Oui, la carte vous prévient d’abord'],
              ['Recommencez ou partez **avant** votre premier coup', 'Non'],
              ['Continuez avec des coups en plus', 'Non : c’est le même essai'],
              ['Arrivez à un plateau où plus rien ne bouge, avec des coups restants', 'Non'],
              ['Perdez pendant votre essai offert du jour ou avec des vies illimitées', 'Non'],
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'Plus de coups',
        blocks: [
          {
            t: 'shot',
            id: 'wall',
            alt: 'L’écran Plus de coups, qui montre les objectifs restants, un bouton 5 coups de plus pour 300 pièces, un bouton Regarder pour 2 coups de plus, et Abandonner.',
            caption: 'Plus de coups : ce qu’il vous reste à faire, et vos options.',
          },
          { t: 'p', text: 'Quand vos coups sont épuisés avant d’avoir atteint les objectifs, vous voyez ce qu’il reste et vous pouvez choisir :' },
          {
            t: 'table',
            head: ['Continuer dans cet essai', 'Prix', 'Vous obtenez'],
            rows: [
              ['La première fois', '300 pièces', '+5 coups'],
              ['La deuxième fois', '500 pièces', '+5 coups et un Indice'],
              ['La troisième fois et les suivantes', '900 pièces', '+5 coups et un OVNI'],
            ],
          },
          {
            t: 'list',
            items: [
              'Ou regardez une **vidéo facultative** : +2 coups, puis +1 coup, puis un OVNI offert.',
              'Si vous avez mis de côté un **+5 coups**, utilisez-le ici.',
              'Sur un plateau que vous avez déjà tenté plusieurs fois, chaque relance donne un peu plus : un coup supplémentaire pour chaque essai raté après le troisième, jusqu’à +15.',
              '**Abandonner** met fin à l’essai et utilise une vie. La note sous le bouton vous dit si cela met aussi fin à une série de victoires.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Rien de payant n’est proposé avant le niveau 6. Les prix repartent de zéro à chaque nouvel essai.',
          },
        ],
      },
      {
        id: 'level-failed',
        title: 'Niveau échoué, et réessayer',
        blocks: [
          {
            t: 'p',
            text: 'Après avoir abandonné, vous voyez **Niveau échoué**, avec à quel point vous étiez proche (« Si près du but ! », « Presque ! » ou « Pas cette fois ») et si une vie a été utilisée. Choisissez **Réessayer** ou **Retour à la carte**. À partir du niveau 6, vous pouvez commencer l’essai suivant avec un coup de pouce : une Fusée sur le plateau et un OVNI offert, pour 800 pièces.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Un coup de main',
            text: 'Bloqué sur un plateau ? À partir de votre sixième essai sur ce plateau, le jeu vous donne **3 coups en plus** avant de commencer : « Un coup de main : 3 coups en plus pour cet essai ». Une fois par jour et par plateau.',
          },
          { t: 'shot', id: 'level-failed', alt: 'Niveau raté : un ami triste, « Presque ! », les objectifs restants (3 briques soleil et 3 briques vague), un cœur brisé indiquant une vie utilisée, un bouton bleu pour réessayer, une offre facultative et le retour à la carte.', caption: 'L’écran d’échec montre à quel point vous étiez proche.' },
        ],
      },
      {
        id: 'out-of-lives',
        title: 'Plus de vies',
        blocks: [
          {
            t: 'list',
            items: [
              '**Un essai offert :** une fois par jour, quand vous n’avez plus de vies, vous pouvez obtenir un essai offert sur un plateau. Gagnez et vous gardez la vie ; perdez et cela ne coûte rien.',
              '**Attendre :** l’écran affiche le compte à rebours jusqu’à votre prochaine vie.',
              '**Recharger :** toutes les vies pour 600 pièces, une recharge mise de côté si vous en avez une, ou une vidéo facultative pour une vie.',
              '**Vies illimitées :** 1 heure (900 pièces), 3 heures (2 000) ou 24 heures (6 000), ou avec de l’argent réel dans la Boutique. En racheter pendant qu’elles sont actives ajoute du temps.',
            ],
          },
          {
            t: 'p',
            text: 'Touchez le cœur dans l’en-tête du Voyage à tout moment pour voir vos vies et quand revient la prochaine.',
          },
          { t: 'shot', id: 'no-lives', alt: 'Plus de vies : 0 vie sur 5 et un compte à rebours jusqu’à la suivante, puis des vies illimitées pendant 1, 3 ou 24 heures, contre des pièces ou de l’argent, une recharge pour 600 pièces, une vidéo pour une vie, et OK. Une note précise qu’une vie n’est perdue que lorsqu’un plateau est perdu, qu’elles reviennent une toutes les 30 minutes, et qu’une fois par jour un réservoir vide donne un essai gratuit.', caption: 'Plus de vies : attendre, recharger ou continuer.' },
        ],
      },
      {
        id: 'videos',
        title: 'Les vidéos facultatives',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick n’a **aucune publicité imposée** : pas de bannières, pas de pubs qui s’affichent entre les plateaux. Une vidéo ne se lance que si vous la choisissez pour une récompense, et seules les vidéos regardées jusqu’au bout rapportent. Il en existe huit sortes, limitées à **39 par jour** au total, et les limites se réinitialisent à minuit.',
          },
          {
            t: 'table',
            head: ['Où', 'Récompense', 'Par jour'],
            rows: [
              ['Plus de vies', '1 vie', '8'],
              ['Plus d’annulations', '2 annulations', '8'],
              ['Plus de coups', '+2 coups, puis +1, puis un OVNI offert', '6'],
              ['Carte de victoire', 'Les pièces de votre victoire, une seconde fois (75 à 300)', '4'],
              ['Roue', 'Un deuxième tour', '1'],
              ['Ballon cadeau', 'Des pièces ou un bonus gratuit pendant 10 minutes', '2'],
              ['Ciné-briques', 'Une case de prix par vidéo', '6'],
              ['Début de plateau', 'Un Indice (pas affiché actuellement)', '4'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Avec **Supprimer les pubs** ou le **Pass Brique** en cours, ces mêmes récompenses indiquent **Réclamer la récompense** et sont versées immédiatement, sans vidéo, dans les mêmes limites quotidiennes.',
          },
        ],
      },
    ],
    related: ['boosters-and-pause', 'shop-and-purchases', 'playing-a-board', 'rewards-and-events'],
  },
];
