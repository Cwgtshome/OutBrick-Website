import type { HelpArticle } from '../../model.ts';

/** Le rayon accessibilité, en français. Vérifié avec la 5.1.1 (68). */
export const accessibilityArticles: HelpArticle[] = [
  {
    slug: 'accessibility',
    category: 'accessibility',
    cover: 'settings-a11y',
    title: 'L’accessibilité dans OutBrick : par où commencer',
    summary:
      'Toutes les façons dont OutBrick s’adapte à vous, de VoiceOver et Contrôle de sélection aux symboles pour daltoniens, au plateau à fort contraste, aux animations ralenties et à l’absence de chrono, avec un point de départ selon vos besoins.',
    keywords: 'a11y inclusif handicap aveugle malvoyant sourd malentendant moteur daltonien daltonisme dyslexie accessibilité',
    sections: [
      {
        id: 'overview',
        title: 'Conçu pour être joué à votre façon',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick est un jeu de puzzle paisible **sans aucun chrono** : vous pouvez prendre tout votre temps à chaque coup. Chaque plateau peut être lu et joué avec [VoiceOver](help:voiceover), [Contrôle vocal, Contrôle de sélection ou un clavier](help:voice-control-switch-control-keyboard), et le jeu a ses propres [réglages d’accessibilité](#where) pour la vue, le mouvement et la portée des mains. Il suit aussi les réglages d’accessibilité que vous avez déjà choisis sur votre iPhone ou votre iPad.',
          },
          {
            t: 'list',
            items: [
              '**La couleur n’est jamais le seul indice.** Les symboles pour daltoniens sont activés dès le départ, et chaque brique, porte et objectif peut porter une forme. Voir [Vue, audition et mouvement](help:vision-hearing-and-motion).',
              '**Chaque pièce a un nom.** VoiceOver lit le type, la couleur et l’état d’une pièce, par exemple « Rayon de ligne, bleu, horizontal, vide sa ligne », et une brique face cachée ne trahit jamais sa couleur.',
              '**Jouez à votre façon.** Glissez ou échangez au toucher, avec les actions VoiceOver, en disant « Glisser Rouge 14 vers la gauche », avec des contacteurs ou avec les touches fléchées.',
              '**Le temps de réfléchir.** Aucun chrono, un réglage de vitesse des animations de 50 % à 200 %, et l’option **Confirmer les échanges** pour que rien ne se joue par accident.',
              '**Rien à entendre qui ne soit aussi visible.** Les amis parlent dans des bulles de texte, pas à voix haute, et chaque son a son équivalent à l’écran.',
            ],
          },
        ],
      },
      {
        id: 'where',
        title: 'Où se trouvent les réglages',
        blocks: [
          {
            t: 'steps',
            items: [
              'Sur l’**Accueil** ou dans le **Voyage**, touchez l’engrenage en haut à droite. Avec VoiceOver, c’est le bouton **Réglages**.',
              'En haut des Réglages, choisissez l’onglet **Accessibilité**. (L’onglet **Jeu** regroupe les sons, la musique, les vibrations et les notifications ; voir [Tous les réglages expliqués](help:settings).)',
              'Changez une chose à la fois, puis jouez un plateau que vous connaissez pour sentir la différence.',
            ],
          },
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'L’écran Réglages sur l’onglet Accessibilité. Vitesse des animations est réglée sur 100 %, avec des choix de 50 % à 200 %. Détail des annonces est sur Standard, avec Bref et Complet de part et d’autre. En dessous, des interrupteurs pour Daltonien (activé), Plateau à fort contraste, Barre pour gauchers, Confirmer les échanges et Son de rangée (tous désactivés).',
            caption: 'Réglages › Accessibilité. La ligne sous chaque commande est aussi ce que VoiceOver annonce comme indication.',
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Vous pouvez ouvrir cet onglet directement : cherchez « Réglages d’accessibilité » dans Spotlight et choisissez le résultat OutBrick.',
          },
          {
            t: 'table',
            caption: 'L’onglet Accessibilité, de haut en bas',
            head: ['Réglage', 'Ce qu’il fait', 'Par défaut'],
            rows: [
              ['Vitesse des animations', 'La vitesse à laquelle les pièces s’échangent, tombent et disparaissent : 50 %, 75 %, 100 %, 150 % ou 200 %. Plus lent, c’est plus facile à suivre.', '100 %'],
              ['Détail des annonces', 'Ce que VoiceOver dit après chaque coup : Bref, Standard ou Complet.', 'Standard'],
              ['Daltonien', 'Imprime une forme sur chaque brique pour que la couleur ne soit jamais la seule différence.', 'Activé'],
              ['Plateau à fort contraste', 'Un sol sombre uni, des contours blancs, de grands symboles de couleur et des contours de porte épais.', 'Désactivé'],
              ['Barre pour gauchers', 'Place les bonus sous votre pouce gauche et la Pause à droite.', 'Désactivé'],
              ['Confirmer les échanges', 'Avec Contrôle de sélection, VoiceOver, Contrôle vocal ou un clavier, vous choisissez un coup deux fois avant qu’il soit joué.', 'Désactivé'],
              ['Son de rangée', 'Ajoute l’action **Écouter la rangée** au plateau : un son court et doux par pièce, une hauteur par symbole de couleur.', 'Désactivé'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Le réglage Daltonien est enregistré dans iCloud et vous suit sur vos autres appareils. Les autres réglages du plateau restent sur l’appareil où vous les avez choisis, car ce qui convient à un iPad ne convient pas forcément à un iPhone.',
          },
        ],
      },
      {
        id: 'starting-points',
        title: 'Un point de départ selon vos besoins',
        blocks: [
          { t: 'p', text: 'Chacun est différent : voyez ceci comme des suggestions à essayer, pas comme des règles.' },
          {
            t: 'table',
            head: ['Si vous…', 'Essayez d’abord'],
            rows: [
              ['êtes aveugle ou utilisez VoiceOver', 'Lisez [Jouer avec VoiceOver](help:voiceover). Gardez **Détail des annonces** sur Standard pour commencer, et essayez **Son de rangée** pour parcourir une rangée à l’oreille.'],
              ['êtes malvoyant', 'Activez le **Plateau à fort contraste**, augmentez la **Police plus grande** dans les Réglages de l’iPhone, et maintenez le doigt sur l’en-tête du plateau ou sur la barre du bas pour les agrandir.'],
              ['percevez les couleurs différemment', 'Laissez **Daltonien** activé : chaque couleur a sa propre forme. Le fort contraste agrandit ces formes.'],
              ['êtes sensible aux mouvements ou aux clignotements', 'Activez **Réduire les animations** et **Atténuer les lumières clignotantes** dans les Réglages de l’iPhone, et réglez la **Vitesse des animations** sur 75 % ou 50 %.'],
              ['jouez d’une main ou avez une portée limitée', 'Essayez la **Barre pour gauchers** si vous tenez le téléphone de la main gauche, et **Confirmer les échanges** si un geste maladroit risque de jouer un coup.'],
              ['utilisez des contacteurs, votre voix ou un clavier', 'Lisez [Contrôle vocal, Contrôle de sélection et claviers](help:voice-control-switch-control-keyboard).'],
              ['êtes sourd ou malentendant', 'Rien dans OutBrick ne dépend du son. Les amis parlent dans des bulles de texte, et les Vibrations vous font sentir chaque coup.'],
              ['aimez prendre le temps de réfléchir', 'Il n’y a de chrono nulle part. Ralentissez la **Vitesse des animations** et utilisez des indices quand vous voulez.'],
            ],
          },
        ],
      },
      {
        id: 'system',
        title: 'Les réglages de l’iPhone et de l’iPad que suit OutBrick',
        blocks: [
          { t: 'p', text: 'Ils se trouvent dans l’app **Réglages** de l’iPhone ou de l’iPad, sous **Accessibilité**, et OutBrick y réagit tout seul.' },
          {
            t: 'defs',
            items: [
              { term: 'VoiceOver', text: 'Chaque plateau, menu et carte est étiqueté. Voir [Jouer avec VoiceOver](help:voiceover).' },
              { term: 'Police plus grande', text: 'Le texte grandit jusqu’à la plus grande taille d’accessibilité, et les mises en page s’empilent pour que rien ne soit coupé. L’en-tête du plateau et la barre du bas prennent en charge l’agrandissement du contenu (Large Content Viewer) : maintenez le doigt pour voir une étiquette agrandie.' },
              { term: 'Texte en gras', text: 'Les écrans passent en gras dès que vous l’activez.' },
              { term: 'Augmenter le contraste et Réduire la transparence', text: 'Les commandes vitrées, comme les interrupteurs Arrêt/Marche, deviennent opaques, avec des bords plus marqués.' },
              { term: 'Réduire les animations', text: 'Les mouvements au repos sur le plateau s’arrêtent, les lueurs restent fixes, les indices scintillent au lieu de bouger, et les petites bestioles restent chez elles.' },
              { term: 'Atténuer les lumières clignotantes', text: 'Les flashs plein écran tombent au tiers de leur intensité et ne se rapprochent jamais à moins d’un tiers de seconde environ.' },
              { term: 'Différencier sans couleur', text: 'Active les symboles pour daltoniens, même si vous les avez désactivés dans le jeu.' },
              { term: 'Inversion intelligente', text: 'Les amis, les drapeaux et les illustrations gardent leurs vraies couleurs.' },
              { term: 'Contrôle vocal et Contrôle de sélection', text: 'Tous deux permettent de jouer chaque plateau. Voir [Contrôle vocal, Contrôle de sélection et claviers](help:voice-control-switch-control-keyboard).' },
            ],
          },
        ],
      },
      {
        id: 'no-timers',
        title: 'Pas de chrono, pas de stress',
        blocks: [
          {
            t: 'p',
            text: 'Il n’y a de chrono sur aucun plateau, menu ou événement d’OutBrick. Chaque plateau vous donne un nombre de **coups**, et c’est la seule limite. Un coup ne compte que s’il produit vraiment quelque chose : un échange qui n’aligne rien revient en place et n’utilise pas de coup.',
          },
          {
            t: 'p',
            text: 'Si vous êtes bloqué, demandez un indice. Avec VoiceOver, le toucher deux fois avec deux doigts sur un plateau vous donne un indice gratuit, sans utiliser de bonus Indice. Voir [Bonus, indices et Pause](help:boosters-and-pause).',
          },
        ],
      },
      {
        id: 'testing',
        title: 'Ce que nous testons encore',
        blocks: [
          {
            t: 'p',
            text: 'Nous préférons vous le dire franchement plutôt que vous le laisser découvrir à vos dépens. VoiceOver et Contrôle vocal ont été joués sur un vrai iPhone par l’équipe. Les éléments suivants ont été développés et vérifiés dans le code, mais pas encore joués de bout en bout, à la main, sur un appareil :',
          },
          {
            t: 'list',
            items: [
              'Contrôle de sélection sur les plateaux Slide & Match.',
              'L’accès complet au clavier sur iPad et Mac.',
              'L’agrandissement du contenu sur l’en-tête du plateau et la barre du bas, à la toute plus grande taille de texte.',
              'Apple TV et Apple Watch, qui n’ont pas encore le travail d’accessibilité du nouveau plateau.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            title: 'Vous pouvez nous aider',
            text: 'Si vous jouez avec l’un de ces outils, dites-nous ce qui marche et ce qui ne marche pas dans la [catégorie Accessibilité](/community/c/accessibility). C’est celle que l’équipe suit de plus près.',
          },
        ],
      },
      {
        id: 'report',
        title: 'Dites-nous quand quelque chose vous gêne',
        blocks: [
          {
            t: 'p',
            text: 'Dans le jeu, **Réglages › Signaler un bug** ouvre un signalement dans Safari, déjà rempli avec votre appareil, votre version d’iOS, la version du jeu, votre niveau et les technologies d’assistance que vous avez activées. Il n’envoie jamais votre nom ni votre compte. Ajoutez les mots exacts prononcés par VoiceOver, ou la commande qui n’a pas répondu. Voir [Bien signaler un bug](help:reporting-bugs).',
          },
        ],
      },
    ],
    related: ['voiceover', 'vision-hearing-and-motion', 'voice-control-switch-control-keyboard', 'settings'],
  },

  {
    slug: 'voiceover',
    category: 'accessibility',
    cover: 'board-slide',
    title: 'Jouer avec VoiceOver',
    summary:
      'Comment le plateau se lit, comment glisser et échanger avec les actions, les rotors, chaque geste, ce que vous entendez après un coup et comment obtenir un indice gratuit.',
    keywords: 'lecteur d’écran aveugle non-voyant rotor toucher magique actions balayer toucher deux fois frotter',
    sections: [
      {
        id: 'start',
        title: 'Avant de commencer',
        blocks: [
          {
            t: 'steps',
            items: [
              'Activez VoiceOver dans **Réglages › Accessibilité › VoiceOver** sur l’iPhone, ou demandez à Siri : « Active VoiceOver ». Le **Raccourci d’accessibilité** vous permet de l’activer et de le désactiver en cliquant trois fois sur le bouton latéral.',
              'Ouvrez OutBrick. L’Accueil est lu en premier ; le bouton **Jouer au niveau** lance votre plateau actuel, et un toucher deux fois avec deux doigts sur l’Accueil fait de même.',
              'La première fois que vous rencontrez une nouvelle idée, une courte carte d’apprentissage l’explique. C’est le seul élément à l’écran tant qu’elle est affichée : touchez deux fois pour commencer à jouer.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Dans **Réglages › Accessibilité** du jeu, **Détail des annonces** règle ce que vous entendez après chaque coup. Standard est un bon point de départ ; vous pouvez le changer à tout moment.',
          },
        ],
      },
      {
        id: 'layout',
        title: 'Comment le plateau se lit',
        blocks: [
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'Un plateau Slide & Match sur une plage, niveau 25. L’en-tête affiche 5 vies, 15 coups restants, une barre d’étoiles avec une étoile allumée, des objectifs de 1 brique jaune et 3 bleues, et l’ami hôte en casquette de marin. Le plateau contient des briques roses, jaunes, orange et bleues, chacune marquée de la forme de sa couleur, avec des portes jaunes, orange et bleues sur ses bords et un couvercle doré à serrure sur une rangée de briques. En bas, le plateau d’outils : Pause, puis Indice, Fusée et OVNI marqués Gratuit, et Annuler avec 6.',
            caption: 'Un plateau, de haut en bas : l’en-tête, la grille et la barre du bas. VoiceOver lit d’abord le résumé de l’en-tête, puis la grille rangée par rangée.',
          },
          {
            t: 'list',
            items: [
              '**Le résumé Plateau vient en premier.** Il lit le niveau, son nom, l’étape, les objectifs et les coups restants. Touchez-le deux fois pour entendre tout le plateau, avec un indice.',
              '**Puis chaque case, rangée par rangée,** en partant du coin supérieur gauche. Les trous dans la forme du plateau sont sautés. La valeur de chaque case est sa position, par exemple « Ligne 3, colonne 2 ».',
              '**Les pièces sont nommées par type, couleur et état,** jamais par la couleur seule : « Bombe, rouge », « Caisse, 2 couches », « Brique, jaune, verrouillée, une ligne qui la traverse la libère », « Brique longue, rouge, 2 de haut ».',
              '**Les précisions suivent la pièce :** « devant la porte : rouge », « porte : rouge, à gauche », « entrée de portail en dessous », « compte pour jonquilles, jaune » quand un objectif en a besoin. Une case vide dit « Vide ».',
              '**Les portes sont des éléments à part,** par exemple « Porte : rouge, 2 cases de large, côté gauche, lignes 3 à 4 », et leur valeur indique si elles sont ouvertes, gelées, si elles attendent d’autres briques ou si elles sont fermées pour de bon.',
              '**Les briques face cachée ne vous disent jamais leur couleur :** « Brique face cachée, se retourne quand une brique voisine quitte le plateau ». C’est la règle du jeu, pas une étiquette manquante.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Les pièces que vous pouvez déplacer sont des boutons. Les obstacles et les éléments fixes, comme la pierre ou les caisses, se lisent comme du texte : vous savez tout de suite ce qui peut bouger.',
          },
        ],
      },
      {
        id: 'moving',
        title: 'Jouer un coup',
        blocks: [
          { t: 'p', text: 'Il existe deux façons de jouer, et vous pouvez les combiner.' },
          { t: 'h3', text: 'Avec les actions (le plus rapide)' },
          {
            t: 'steps',
            items: [
              'Placez VoiceOver sur une pièce.',
              'Balayez vers le haut ou le bas pour entendre ses actions, comme « Faire glisser vers la gauche et sortir par la porte : rouge », « Faire glisser vers le haut jusqu’au bout, 3 cases » ou « Échanger vers le haut avec la brique bleue ». Les échanges qui fonctionnent viennent en premier ; un échange qui n’alignerait rien indique « aucune combinaison ».',
              'Touchez deux fois pour jouer l’action entendue.',
            ],
          },
          { t: 'h3', text: 'En choisissant une pièce, puis une direction' },
          {
            t: 'steps',
            items: [
              'Touchez deux fois une pièce. VoiceOver dit « Choisie. Choisis une direction pour la faire glisser, ou une voisine pour échanger ».',
              'Des commandes de direction apparaissent sur ses voisines. Placez-vous sur l’une d’elles et touchez deux fois.',
              'Vous avez changé d’avis ? Touchez de nouveau deux fois la même pièce (« Reposée »), ou frottez avec deux doigts.',
            ],
          },
          {
            t: 'table',
            caption: 'Les actions d’une pièce, dans l’ordre où vous les entendez',
            head: ['Action', 'Quand vous l’entendez'],
            rows: [
              ['Activer la spéciale', 'Sur une brique spéciale qui peut être déclenchée sur place.'],
              ['Faire glisser…', 'Jusqu’à trois par direction (haut, bas, gauche, droite) : jusqu’où elle va, et si elle sort par une porte ou un portail.'],
              ['Échanger…', 'Avec chaque voisine. Les échanges qui alignent viennent en premier ; « aucune combinaison » signale les autres.'],
              ['Lire le plateau', 'Niveau, étape, objectifs, coups restants et un indice.'],
              ['Indice', 'Montre et annonce le meilleur coup.'],
              ['Écouter la rangée', 'Seulement quand **Son de rangée** est activé : un son doux par pièce, tout le long de la rangée.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Vous craignez de jouer un coup par erreur ? Activez **Confirmer les échanges**. Le premier choix demande « … ? Choisis-le encore pour confirmer », et le coup n’est joué que si vous le choisissez de nouveau dans les cinq secondes.',
          },
        ],
      },
      {
        id: 'rotors',
        title: 'Les rotors : allez droit à l’essentiel',
        blocks: [
          {
            t: 'p',
            text: 'Tournez deux doigts sur l’écran pour choisir un rotor, puis balayez vers le haut ou le bas pour passer d’une pièce correspondante à l’autre.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Pièces qui s’alignent', text: 'Les pièces qui ont un coup permettant d’aligner tout de suite.' },
              { term: 'Spéciales', text: 'Les bombes, les rayons de ligne et les autres briques spéciales.' },
              { term: 'Objectifs', text: 'Les pièces que vos objectifs demandent.' },
              { term: 'Obstacles', text: 'Les caisses, la pierre, la glace, les verrous, la mousse et tout ce qui barre le passage.' },
              { term: 'Portes', text: 'Toutes les portes du plateau, quand il en a. Le premier plateau à portes que vous jouez vous présente ce rotor une fois.' },
            ],
          },
          {
            t: 'p',
            text: 'Chaque élément propose aussi **Plus de contenu** (dans le rotor, choisissez Plus de contenu, puis balayez vers le haut ou le bas) : la spéciale, la porte, l’obstacle, les couches de gelée en dessous, et si un objectif a besoin de cette pièce.',
          },
        ],
      },
      {
        id: 'gestures',
        title: 'Les gestes, écran par écran',
        blocks: [
          {
            t: 'table',
            head: ['Geste', 'Sur un plateau', 'Sur la carte du Voyage', 'Ailleurs'],
            rows: [
              ['{{Toucher deux fois avec deux doigts}} (toucher magique)', 'Un indice gratuit. Le meilleur coup scintille et il est annoncé ; votre bonus Indice n’est pas utilisé.', 'Annonce le guide : votre village, les niveaux réussis, votre prochain niveau et les étoiles qui manquent pour la prochaine récompense.', 'Accueil : lance votre prochain niveau. Boutique, Classement et Pass : active ou coupe la musique.'],
              ['{{Frotter avec deux doigts}} (Échap)', 'Ne quitte jamais le plateau, donc ne peut jamais coûter de vie. Ferme une carte, repose une pièce choisie, range une carte d’apprentissage ou ouvre la Pause, dans cet ordre.', 'Ferme une carte ouverte.', 'Appuie sur le bouton de fermeture de l’écran ou revient en arrière.'],
              ['{{Balayer avec trois doigts}}', '—', 'Avance d’un village à la fois et annonce son nom.', 'Fait défiler.'],
              ['{{Balayer vers le haut ou le bas}}', 'Parcourt les actions d’une pièce.', 'Parcourt **Où suis-je** et **Aller à mon prochain niveau**.', 'Règle une commande.'],
            ],
          },
        ],
      },
      {
        id: 'announcements',
        title: 'Ce que vous entendez après un coup',
        blocks: [
          {
            t: 'p',
            text: 'Dès qu’un coup est décidé, VoiceOver le résume en une phrase, avant même la fin de l’animation. Ce qui est urgent passe en premier.',
          },
          {
            t: 'list',
            items: [
              'Où est allée une brique : « Glissée de 3 cases, jusqu’à ligne 2, colonne 4 », « À travers le portail, sortie en… », « Sortie par sa porte : 1 (rouge) ».',
              'Ce qui a changé : « Retournée : rouge et bleue », « Le couvercle à compteur s’est ouvert. Ses briques peuvent bouger », « De nouvelles portes s’ouvrent ».',
              'Ce qui a disparu : les pièces, les cascades, les combos et les spéciales créées, et les objectifs qui ont avancé.',
              'Les coups restants, avec une alerte à cinq, trois et un : « Seulement : 5 coups ».',
              'La fin : « Tous les objectifs atteints. Niveau réussi » ou « Plus de coups ».',
              'Si aucun coup n’est possible, le plateau est mélangé et VoiceOver dit « Le plateau a été mélangé. À toi de jouer. »',
            ],
          },
          {
            t: 'table',
            caption: 'Réglages › Accessibilité › Détail des annonces',
            head: ['Choix', 'Ce que vous entendez'],
            rows: [
              ['Bref', 'Ce qui a disparu, tout objectif atteint et les coups restants.'],
              ['Standard', 'En plus, les spéciales que vous avez créées et les objectifs qui ont avancé.'],
              ['Complet', 'En plus, le compte de chaque objectif après chaque coup.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Un échange qui n’aligne rien revient en place et annonce « Aucune combinaison, retour. Aucun coup utilisé ». Vous n’avez rien perdu.',
          },
        ],
      },
      {
        id: 'hints',
        title: 'Les indices',
        blocks: [
          {
            t: 'list',
            items: [
              '**Demander :** le toucher deux fois avec deux doigts, l’action **Indice**, ou {{H}} sur un clavier. L’indice est annoncé, par exemple « Indice : fais glisser la brique rouge, ligne 1, colonne 3, vers la gauche, et sors-la par sa porte », et VoiceOver se place sur cette pièce.',
              '**Gratuit :** un indice demandé avec le toucher deux fois avec deux doigts ou avec l’action n’utilise jamais un bonus Indice de la barre.',
              '**Indices au repos :** si vous faites une pause un moment, un indice discret peut être annoncé sans déplacer votre focus.',
            ],
          },
        ],
      },
      {
        id: 'journey',
        title: 'Se repérer dans le Voyage',
        blocks: [
          {
            t: 'list',
            items: [
              'Chaque élément de la carte a deux actions : **Où suis-je** et **Aller à mon prochain niveau**, qui fait défiler la carte et place VoiceOver sur votre prochain niveau.',
              'Le toucher deux fois avec deux doigts annonce le guide, par exemple « Cité-Jardin, 7 niveaux réussis sur 12. Ensuite : niveau 8. Encore 3 étoiles pour la récompense du village. »',
              'Un niveau verrouillé indique à quelle distance il se trouve : « Encore 4 pour débloquer ».',
              'Balayez avec trois doigts pour avancer d’un village à la fois.',
            ],
          },
          { t: 'p', text: 'Plus de détails sur la carte dans [Le Voyage et ses villages](help:journey-and-villages).' },
        ],
      },
      {
        id: 'tips',
        title: 'Les conseils de l’équipe',
        blocks: [
          {
            t: 'list',
            items: [
              'Avec VoiceOver activé et la **Vitesse des animations** à 100 %, les coups se jouent une fois et demie plus vite, pour que vous n’attendiez pas. Choisissez une autre vitesse et le jeu l’applique exactement.',
              'Activez **Son de rangée** pour entendre toute une rangée sous forme de sons : chaque symbole de couleur a sa propre hauteur, les obstacles font un toc grave et les cases vides sont silencieuses. Il faut que les effets sonores soient activés et que le bouton Sonnerie/Silence soit sur sonnerie.',
              'Perdu ? Touchez deux fois le résumé **Plateau** en haut, ou utilisez **Lire le plateau**.',
              'Menus : chaque bouton lit les mots qui y sont inscrits, et les cartes gardent VoiceOver à l’intérieur jusqu’à ce que vous les fermiez, pour que vous ne vous retrouviez jamais derrière une carte.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            title: 'Quelque chose n’a pas été lu correctement ?',
            text: 'Indiquez-nous le niveau, la pièce et les mots exacts de VoiceOver dans la [catégorie Accessibilité](/community/c/accessibility), ou utilisez **Réglages › Signaler un bug** dans le jeu.',
          },
        ],
      },
    ],
    related: ['accessibility', 'voice-control-switch-control-keyboard', 'playing-a-board', 'reporting-bugs'],
  },

  {
    slug: 'voice-control-switch-control-keyboard',
    category: 'accessibility',
    cover: 'board-shapes',
    title: 'Contrôle vocal, Contrôle de sélection et claviers',
    summary:
      'Jouez chaque plateau avec votre voix, avec un ou plusieurs contacteurs, ou avec les touches fléchées, et rendez le jeu plus confortable avec Confirmer les échanges et la Barre pour gauchers.',
    keywords: 'commandes vocales contacteur accès complet au clavier touches fléchées motricité dextérité une main',
    sections: [
      {
        id: 'voice-control',
        title: 'Contrôle vocal',
        blocks: [
          {
            t: 'p',
            text: 'Activez Contrôle vocal dans **Réglages › Accessibilité › Contrôle vocal** sur l’iPhone. Chaque pièce du plateau répond à trois noms, où le nombre est sa position, en comptant rangée par rangée depuis le coin supérieur gauche :',
          },
          {
            t: 'list',
            items: [
              'sa couleur et son numéro : « Toucher **Rouge 14** »',
              '« Toucher **Pièce 14** »',
              'son nom complet et son numéro.',
            ],
          },
          {
            t: 'steps',
            items: [
              'Dites « Toucher Rouge 14 » pour choisir la pièce.',
              'Dites la direction : « Toucher **Glisser vers la gauche** », ou simplement « Toucher **Gauche** ». Pour un échange, vous pouvez dire « Toucher **Échanger vers le haut** » ou « Toucher **Haut** ».',
              'Dites « Afficher les numéros » à tout moment pour voir un numéro sur tout ce que vous pouvez toucher.',
            ],
          },
          {
            t: 'list',
            items: [
              'Les briques face cachée répondent à « Face cachée 14 », pour que leur couleur reste secrète.',
              'Les boutons des menus répondent d’abord aux mots qui y sont inscrits.',
              'Les choix de Vitesse des animations répondent au pourcentage ou au mot : « Moitié moins vite », « Plus lent », « Vitesse normale », « Plus rapide », « Deux fois plus vite ».',
            ],
          },
        ],
      },
      {
        id: 'switch-control',
        title: 'Contrôle de sélection',
        blocks: [
          {
            t: 'steps',
            items: [
              'Faites défiler jusqu’à une pièce et sélectionnez-la pour la choisir.',
              'Faites défiler jusqu’à une voisine ou l’une des commandes de direction qui apparaissent, et sélectionnez-la pour glisser ou échanger.',
              'Sélectionnez de nouveau la pièce choisie pour la reposer.',
            ],
          },
          {
            t: 'p',
            text: 'Sur le plateau, Contrôle de sélection est traité comme VoiceOver : chaque pièce est un élément à part, dans l’ordre de lecture, et les mêmes commandes de direction apparaissent. Activez **Confirmer les échanges** si vous défilez rapidement.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Contrôle de sélection sur les plateaux Slide & Match a été développé et vérifié dans le code, mais pas encore joué de bout en bout sur un appareil par l’équipe. Si vous jouez avec des contacteurs, racontez-nous comment ça se passe dans la [catégorie Accessibilité](/community/c/accessibility).',
          },
        ],
      },
      {
        id: 'keyboard',
        title: 'Les claviers sur iPad et Mac',
        blocks: [
          { t: 'p', text: 'Avec un clavier physique, le plateau a ses propres touches. Maintenez {{⌘}} sur iPad pour en voir la liste.' },
          {
            t: 'table',
            head: ['Touche', 'Ce qu’elle fait'],
            rows: [
              ['{{←}} {{→}} {{↑}} {{↓}}', 'Déplace un curseur blanc sur le plateau, en sautant les trous. Quand une pièce est choisie, la fait glisser ou l’échange dans cette direction.'],
              ['{{Espace}} ou {{Retour}}', 'Choisit la pièce sous le curseur, ou la repose.'],
              ['{{H}}', 'Montre et annonce un indice.'],
              ['{{Échap}}', 'Repose la pièce choisie. Hors du plateau, ferme les Réglages et les cartes.'],
            ],
          },
          {
            t: 'p',
            text: 'Dans les menus, les boutons du jeu prennent le focus du clavier, et {{Retour}} ou {{Espace}} les active. L’accès complet au clavier passe de l’un à l’autre avec {{Tab}}.',
          },
        ],
      },
      {
        id: 'hold-to-confirm',
        title: 'Confirmer les échanges',
        blocks: [
          {
            t: 'p',
            text: 'Dans **Réglages › Accessibilité**, **Confirmer les échanges** vous demande de choisir chaque coup deux fois. La première fois, vous entendez (ou voyez) le coup suivi de « Choisis-le encore pour confirmer » ; choisissez le même coup dans les cinq secondes et il est joué. Toute autre action l’annule. Cela s’applique à VoiceOver, à Contrôle vocal, à Contrôle de sélection et au clavier.',
          },
        ],
      },
      {
        id: 'left-handed',
        title: 'Barre pour gauchers',
        blocks: [
          {
            t: 'p',
            text: 'La barre au bas d’un plateau place la Pause à gauche, et les bonus et Annuler à droite. La **Barre pour gauchers** l’inverse : les bonus se retrouvent sous votre pouce gauche et la Pause passe à droite.',
          },
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'Un plateau Slide & Match sur une plage, niveau 25. L’en-tête affiche 5 vies, 15 coups restants, une barre d’étoiles avec une étoile allumée, des objectifs de 1 brique jaune et 3 bleues, et l’ami hôte en casquette de marin. Le plateau contient des briques roses, jaunes, orange et bleues, chacune marquée de la forme de sa couleur, avec des portes jaunes, orange et bleues sur ses bords et un couvercle doré à serrure sur une rangée de briques. En bas, le plateau d’outils : Pause, puis Indice, Fusée et OVNI marqués Gratuit, et Annuler avec 6.',
            caption: 'La barre, pour droitiers (par défaut). La Barre pour gauchers l’inverse.',
          },
        ],
      },
    ],
    related: ['voiceover', 'accessibility', 'playing-a-board', 'settings'],
  },

  {
    slug: 'vision-hearing-and-motion',
    category: 'accessibility',
    cover: 'board-contrast',
    title: 'Vue, audition et mouvement',
    summary:
      'Les symboles pour daltoniens et ce que signifie chaque forme, le plateau à fort contraste, la police plus grande, Réduire les animations, les lumières clignotantes, le son, les vibrations et le Son de rangée.',
    keywords: 'daltonien daltonisme deutéranopie protanopie tritanopie symboles formes contraste grand texte zoom mal des transports vestibulaire épilepsie photosensible clignotement sourd audition',
    sections: [
      {
        id: 'colour-blind',
        title: 'Les symboles pour daltoniens',
        blocks: [
          {
            t: 'p',
            text: 'Le réglage **Daltonien** est activé dès le tout premier plateau. Chaque brique porte une forme liée à sa couleur, les spéciales colorées portent un petit badge de forme, et les objectifs de l’en-tête portent la même forme : vous pouvez associer les briques aux objectifs sans avoir à distinguer les couleurs.',
          },
          {
            t: 'table',
            caption: 'Chaque couleur a sa propre forme',
            head: ['Couleur', 'Forme'],
            rows: [
              ['Rouge', 'Cercle'],
              ['Orange', 'Triangle'],
              ['Jaune', 'Carré'],
              ['Vert', 'Losange'],
              ['Bleu', 'Plus'],
              ['Violet', 'Étoile'],
              ['Rose', 'Barre'],
              ['Turquoise', 'Hexagone'],
            ],
          },
          {
            t: 'list',
            items: [
              'Changez-le dans **Réglages › Accessibilité › Daltonien**, dans le menu **Pause** pendant un plateau, ou depuis le **Centre de contrôle** si vous y ajoutez la commande OutBrick.',
              'Les symboles s’activent aussi dès que **Différencier sans couleur** de l’iPhone ou le **Plateau à fort contraste** du jeu est activé.',
              'Votre choix est enregistré dans iCloud et vous suit donc sur vos autres appareils.',
            ],
          },
          {
            t: 'shots',
            items: [
              {
                id: 'board-slide',
                alt: 'Un plateau Slide & Match sur une plage, niveau 25. L’en-tête affiche 5 vies, 15 coups restants, une barre d’étoiles avec une étoile allumée, des objectifs de 1 brique jaune et 3 bleues, et l’ami hôte en casquette de marin. Le plateau contient des briques roses, jaunes, orange et bleues, chacune marquée de la forme de sa couleur, avec des portes jaunes, orange et bleues sur ses bords et un couvercle doré à serrure sur une rangée de briques. En bas, le plateau d’outils : Pause, puis Indice, Fusée et OVNI marqués Gratuit, et Annuler avec 6.',
                caption: 'Daltonien activé : chaque couleur a une forme.',
              },
              {
                id: 'board-contrast',
                alt: 'Le même type de plateau avec l’apparence à fort contraste : un sol presque noir, des contours blancs autour de chaque brique et de grands symboles blancs.',
                caption: 'Plateau à fort contraste.',
              },
            ],
          },
        ],
      },
      {
        id: 'contrast',
        title: 'Plateau à fort contraste',
        blocks: [
          {
            t: 'p',
            text: '**Réglages › Accessibilité › Plateau à fort contraste** dessine le plateau sur un sol presque noir avec une grille discrète, entoure chaque pièce d’un contour blanc, place un grand symbole blanc sur les briques simples et donne à chaque porte un contour épais. Les couleurs des portes sont vérifiées par rapport au sol, et une porte dont la couleur en est trop proche reçoit un contour bicolore.',
          },
        ],
      },
      {
        id: 'text',
        title: 'Texte plus grand et agrandissement',
        blocks: [
          {
            t: 'list',
            items: [
              '**Police plus grande :** dans **Réglages › Accessibilité › Affichage et taille du texte › Police plus grande** sur l’iPhone. Le texte courant peut dépasser le double de sa taille, les titres presque le double, et les mises en page s’empilent pour que rien ne soit coupé. Les écrans de victoire et « Plus de coups » grandissent moins, pour toujours tenir à l’écran.',
              '**Agrandissement du contenu :** aux plus grandes tailles, maintenez le doigt sur une commande de l’en-tête du plateau ou de la barre du bas pour voir une étiquette agrandie, puis relevez le doigt.',
              '**Texte en gras** et **Zoom** fonctionnent partout dans le jeu.',
            ],
          },
        ],
      },
      {
        id: 'motion',
        title: 'Mouvement, vitesse des animations et clignotements',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Vitesse des animations', text: 'Dans **Réglages › Accessibilité** : 50 %, 75 %, 100 %, 150 % ou 200 %. À 50 %, chaque échange, chute et disparition prend deux fois plus de temps, ce qui rend les enchaînements plus faciles à suivre.' },
              { term: 'Réduire les animations', text: 'Dans **Réglages › Accessibilité › Mouvement** sur l’iPhone. Les mouvements au repos sur le plateau s’arrêtent, les lueurs restent fixes, les indices scintillent sur place au lieu de bouger, et les écrans se fondent au lieu de glisser.' },
              { term: 'Atténuer les lumières clignotantes', text: 'Également sous **Mouvement**. Les flashs plein écran des grands combos tombent au tiers de leur intensité et ne se rapprochent jamais à moins d’un tiers de seconde environ ; une mèche brûle de façon régulière au lieu de vaciller.' },
            ],
          },
        ],
      },
      {
        id: 'sound',
        title: 'Son, musique, vibrations et Son de rangée',
        blocks: [
          {
            t: 'list',
            items: [
              '**Rien ne dépend de l’audition.** Chaque son d’OutBrick a son équivalent à l’écran. Les amis parlent dans des bulles de texte, pas à voix haute, et les annonces VoiceOver sont lues par votre propre VoiceOver.',
              '**Sons, Musique et Vibrations** ont chacun leur interrupteur dans **Réglages › Jeu**, ainsi que dans le menu Pause pendant un plateau. Vibrations n’apparaît que sur les appareils qui peuvent vibrer.',
              '**Son de rangée** (Réglages › Accessibilité) ajoute l’action **Écouter la rangée** au plateau : une note courte et douce pour chaque pièce, de gauche à droite, une hauteur par symbole de couleur, avec un timbre différent pour les formes rondes, pointues et droites. Les obstacles font un toc grave et les cases vides sont des silences.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Le Son de rangée demande que les effets sonores soient activés et que le bouton Sonnerie/Silence soit sur sonnerie. Si l’un des deux est coupé, l’action vous le signale.',
          },
        ],
      },
    ],
    related: ['accessibility', 'voiceover', 'settings', 'bricks-specials-and-blockers'],
  },
];
