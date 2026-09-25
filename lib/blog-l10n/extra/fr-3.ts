import type { ExtraGuides } from '../../i18n/blog';

/** Journal batch 3 (lib/journal-batches/batch-3.ts) in this language. See lib/blog-l10n/fr.ts for the house style. */
export const fr3: ExtraGuides = {
  'colour-blindness-in-games': {
    title: 'Daltonisme et jeux vidéo : fréquence et solutions',
    dek: 'Environ un homme d’origine européenne sur douze confond le rouge et le vert. Ce que cela change en jeu, et les réglages et choix de design qui aident.',
    imageAlt: 'Moss et Flurry de part et d’autre d’un téléphone affichant l’étape Bamboo Springs de la carte du Voyage d’OutBrick, avec des briques turquoise, orange et rouges qui flottent',
    tags: ['daltonisme', 'jeux vidéo daltonien', 'accessibilité', 'vision des couleurs', 'conception inclusive', 'jeux de puzzle'],
    intro: 'Dans une pièce où se trouvent vingt-cinq hommes d’origine européenne, deux voient sans doute le rouge et le vert autrement que les autres. La plupart des jeux sont pourtant encore conçus comme s’ils n’existaient pas. Voici ce qu’est vraiment un trouble de la vision des couleurs, à quelle fréquence on le rencontre, ce qu’il change pour un joueur en pleine partie, et ce qui aide : les réglages que vous pouvez activer dès aujourd’hui comme les choix de conception qui les rendent inutiles.',
    keyTakeaways: [
      'Le daltonisme rouge-vert héréditaire touche environ 8 % des hommes et 0,4 % des femmes d’origine européenne, et de 4 à 6,5 % des hommes chinois et japonais.',
      'Il s’agit rarement de « voir en gris ». La plupart des personnes concernées voient beaucoup de couleurs, mais en confondent certaines paires, et trouvent plus lentement ce qu’elles cherchent quand la couleur est le seul indice.',
      'La meilleure solution est une conception qui ne repose jamais sur la couleur seule. Symboles et motifs aident le plus lorsqu’ils sont assez simples pour se lire sans apprentissage.',
    ],
    sections: {
      'how-common': {
        title: 'Le daltonisme est-il vraiment fréquent ?',
        paragraphs: [
          'La synthèse publiée en 2012 par Jennifer Birch, fondée sur de grandes enquêtes menées sur des échantillons aléatoires de population, fournit le chiffre que la plupart des chercheurs citent. Dans les populations caucasiennes européennes, environ 8 % des hommes et environ 0,4 % des femmes présentent un trouble héréditaire de la vision rouge-vert. Chez les hommes d’origine chinoise et japonaise, le taux est plus bas, entre 4 et 6,5 %, et Birch note que des enquêtes récentes laissent penser que le chiffre augmente chez les hommes d’origine africaine et dans les régions peuplées par des migrants. Elle attribue ces écarts à l’effet fondateur et à la dérive génétique plutôt qu’à la sélection naturelle.',
          'L’écart entre hommes et femmes a une cause simple. Comme l’explique Simunovic dans sa synthèse parue dans Eye, les formes courantes se transmettent par le chromosome X sur un mode récessif : il suffit d’une copie touchée chez un homme, il en faut deux chez une femme. C’est aussi pourquoi une mère à la vision des couleurs normale peut transmettre le trouble à son fils. Pour un jeu auquel jouent des millions de personnes, ces pourcentages représentent un très grand nombre de joueurs qui abordent une interface codée par couleurs dans des conditions différentes.',
        ],
      },
      'what-it-is-like': {
        title: 'À quoi cela ressemble : pas du gris, mais des confusions',
        paragraphs: [
          'L’image populaire du daltonisme, un monde en noir et blanc, correspond à une affection très rare. La plupart des personnes atteintes d’un trouble de la vision des couleurs sont des trichromates anormaux : elles possèdent les trois types de cônes, mais l’un d’eux réagit différemment, si bien que des couleurs bien distinctes pour les autres leur paraissent semblables. Les dichromates, à qui il manque un type de cône, perçoivent une gamme plus étroite encore. Rouges, verts, bruns et orangés sont les confusions classiques des formes rouge-vert courantes ; le trouble bleu-jaune existe, mais il est bien plus rare.',
          'La longue synthèse de Barry Cole sur le handicap concret qu’il représente est ce qui décrit le mieux ses effets au quotidien. Presque toutes les personnes dont la vision des couleurs est anormale, hormis certaines qui ne sont que légèrement atteintes, disent rencontrer des difficultés avec les couleurs dans la vie de tous les jours. Elles peinent quand la couleur sert de code, peuvent se tromper quand un nom de couleur sert d’identifiant, et sont plus lentes et moins efficaces en recherche visuelle quand c’est la couleur qui signale la cible. Relisez ce dernier résultat en pensant à un jeu : « trouvez la rouge », c’est exactement le genre de tâche que proposent beaucoup de puzzles.',
          'Cela explique aussi pourquoi l’entourage d’un joueur daltonien sous-estime si souvent le problème. Flatla et Gutwin ont créé des simulations fondées sur la perception des couleurs mesurée chez chaque personne, et non sur un modèle générique, puis ont demandé à des paires d’amis ou de proches de commenter ensemble des images du quotidien vues à travers cette simulation. Les versions personnalisées étaient plus fidèles que les modèles standard, et les échanges ont fait ressortir des aspects de l’expérience de la personne que ses proches n’avaient jamais compris.',
        ],
      },
      'where-games-go-wrong': {
        title: 'Là où les jeux se trompent le plus souvent',
        paragraphs: [
          'Certains schémas reviennent sans cesse. Des barres de vie qui passent du vert au rouge. Des équipes rouge et verte. Des marqueurs de carte, des niveaux de rareté et des butins distingués uniquement par la teinte. Des puzzles d’association et de tri dont les pièces ne diffèrent que par la couleur. Et, de façon moins évidente, des retours « juste » et « faux » qui clignotent en vert ou en rouge sans icône, son ni mouvement pour les accompagner.',
          'La solution que la plupart des jeux adoptent est un filtre : un menu qui décale toute la palette pour la protanopie, la deutéranopie ou la tritanopie. Les filtres aident certains joueurs, mais ils ont leurs limites. Ils supposent que toutes les personnes portant la même étiquette voient de la même façon, ce que les travaux de Flatla et Gutwin démentent, et ils peuvent donner un aspect étrange au reste du jeu. Mieux vaut faire de la couleur un signal parmi d’autres, pour qu’aucun filtre ne soit nécessaire. Nous avons défendu ce principe dans [pourquoi la couleur ne devrait jamais être le seul indice d’un puzzle](/blog/color-shape-accessibility) ; la recherche sur les motifs montre comment bien s’y prendre.',
        ],
      },
      'patterns-that-work': {
        title: 'Ce que dit la recherche sur les symboles et les motifs',
        paragraphs: [
          'Geddes, Flatla, Tigwell et Peiris ont testé des motifs de couleur, des surcouches qui codent une couleur sous forme de forme ou de texture, dans une étude en ligne auprès de personnes ayant un trouble de la vision des couleurs. Les systèmes de motifs précédents fonctionnaient en laboratoire mais s’apprenaient difficilement. L’équipe a comparé un système publié à deux nouveaux designs sur trois tâches : choisir une couleur, suivre un dégradé et trier. Aucun motif ne l’a emporté partout. Celui qui transformait chaque couleur en une icône simple aidait pour la sélection et le tri, mais peinait sur les dégradés ; un design mixte apportait une aide sur chaque tâche.',
          'La leçon pour un concepteur de puzzles est claire : quand il s’agit de trier des pièces distinctes vers des emplacements distincts, un symbole simple et facile à retenir pour chaque couleur est le bon outil, et il doit se comprendre d’un coup d’œil plutôt que se déchiffrer. C’est l’approche que nous avons choisie pour OutBrick. Le mode daltonien est activé par défaut et appose un symbole distinct sur chaque brique et sur la porte qui lui correspond : un joueur n’a jamais besoin de demander de l’aide pour distinguer deux pièces. Nous voulons tout de même savoir où il montre ses limites ; la [page consacrée à l’accessibilité](/accessibility) (en anglais) explique comment nous le signaler.',
        ],
      },
      'player-tips': {
        title: 'Conseils aux joueurs daltoniens',
        paragraphs: [
          'Si vous savez ou soupçonnez que vous avez un trouble de la vision des couleurs, quelques habitudes facilitent le jeu. Aucune ne nécessite de diagnostic, même si un opticien ou un ophtalmologiste peut vous tester rapidement, et le NHS propose une [présentation claire des troubles de la vision des couleurs](https://www.nhs.uk/conditions/colour-vision-deficiency/) (en anglais) si vous voulez en savoir plus. La synthèse de Simunovic note aussi que les verres teintés vendus comme aides au daltonisme peuvent servir pour certaines tâches, mais ne rendent pas une discrimination normale des couleurs : accueillez-les avec un certain scepticisme.',
        ],
        bullets: [
          'Ouvrez le menu d’accessibilité ou d’affichage d’un nouveau jeu avant de jouer, et cherchez un mode daltonien qui ajoute des symboles plutôt que de simplement modifier la palette.',
          'Sur iPhone et iPad, activez Différencier sans couleur dans Réglages, Accessibilité, Affichage et taille du texte. Les jeux bien conçus en tiennent compte.',
          'Essayez les Filtres de couleur dans le même menu si un jeu n’offre aucune option, mais attendez-vous à ce qu’ils modifient tout l’écran, pas seulement le jeu.',
          'Dans les puzzles de tri, apprenez tôt à reconnaître chaque pièce par son symbole ou sa forme, avant que les plateaux ne se remplissent. La plupart des [stratégies de tri par couleur](/blog/colour-sort-puzzle-tips) fonctionnent tout aussi bien avec les symboles.',
          'Dites aux développeurs ce qui n’a pas marché, et où. Une capture de l’écran qui prête à confusion vaut un long paragraphe d’explications.',
        ],
        note: 'Un trouble de la vision des couleurs peut aussi apparaître plus tard dans la vie, à cause d’une maladie des yeux ou de certains médicaments. Si votre perception des couleurs change, parlez-en à un opticien ou à un médecin.',
      },
    },
    pullQuote: 'Relisez ce dernier résultat en pensant à un jeu : « trouvez la rouge », c’est exactement le genre de tâche que proposent beaucoup de puzzles.',
    faqs: [
      { question: 'Le daltonisme est-il fréquent ?', answer: 'Le daltonisme rouge-vert héréditaire touche environ 8 % des hommes et 0,4 % des femmes d’origine européenne, et entre 4 et 6,5 % des hommes chinois et japonais. Le trouble bleu-jaune et l’absence totale de vision des couleurs sont bien plus rares.' },
      { question: 'Les daltoniens voient-ils en noir et blanc ?', answer: 'Presque jamais. La plupart voient une large gamme de couleurs mais confondent certaines paires, le plus souvent les rouges, verts, bruns et orangés, et repèrent plus lentement les cibles codées par couleur.' },
      { question: 'Quel est le meilleur réglage pour daltoniens dans un jeu ?', answer: 'Un mode qui ajoute un symbole, une forme ou un motif à chaque couleur aide en général davantage qu’un filtre qui ne fait que décaler la palette, car il fonctionne pour tous les types et tous les degrés de trouble de la vision des couleurs.' },
      { question: 'Peut-on jouer à OutBrick quand on est daltonien ?', answer: 'Oui. Le mode daltonien est activé par défaut et place un symbole distinct sur chaque brique et sur la porte assortie : vous pouvez trier par symbole plutôt que par teinte. Vous pouvez d’abord [essayer un plateau dans votre navigateur](/play).' },
    ],
  },
  'screen-reader-games-iphone': {
    title: 'Jouer avec un lecteur d’écran : comment jouent les aveugles',
    dek: 'Comment les joueurs aveugles et malvoyants jouent sur iPhone avec VoiceOver, ce que la recherche a appris d’eux, et ce qui rend un jeu jouable à l’oreille.',
    imageAlt: 'Zippy et Moss à côté d’un téléphone affichant l’étape Button Factory de la carte du Voyage d’OutBrick, avec des briques bleues, orange et turquoise qui flottent au-dessus',
    tags: ['VoiceOver', 'jeux pour aveugles', 'lecteur d’écran', 'accessibilité', 'jeux mobiles'],
    intro: 'L’iPhone est une plaque de verre lisse, sans bouton à sentir sous le doigt, et pourtant de nombreuses personnes aveugles s’en servent chaque jour. La raison, c’est le lecteur d’écran qui y est intégré. Beaucoup de personnes aveugles ou malvoyantes l’utilisent aussi pour jouer, des jeux de lettres aux jeux de cartes en passant par des jeux faits uniquement de sons. Voici comment cela fonctionne, ce que les chercheurs ont appris des joueurs aveugles eux-mêmes, et ce qui distingue un jeu jouable à l’oreille d’un jeu qui ne l’est pas.',
    keyTakeaways: [
      'VoiceOver transforme l’écran tactile en une interface parlée que l’on explore : vous faites glisser le doigt ou balayez pour entendre ce qui est affiché, et touchez deux fois pour agir.',
      'Les joueurs aveugles forment une communauté réelle et variée. La recherche menée avec eux montre que les obstacles sont autant sociaux que techniques.',
      'Un jeu se joue avec un lecteur d’écran quand son état peut se décrire avec des mots et que ses actions ne dépendent ni du timing ni d’une visée précise.',
    ],
    sections: {
      'how-touch-became-accessible': {
        title: 'Comment un écran tactile est devenu accessible',
        paragraphs: [
          'Un écran sans rien à sentir semble, à première vue, peu adapté à quelqu’un qui ne le voit pas. La recherche a contribué à montrer le contraire. Slide Rule, présenté par Kane, Bigham et Wobbrock en 2008, utilisait des gestes multitouch pour rendre un téléphone tactile utilisable sans la vue : faire glisser un doigt lit à voix haute ce qui se trouve dessous, un second doigt sélectionne, et de petits balayages font défiler les listes. Dans leur étude auprès de dix participants aveugles, Slide Rule s’est révélé nettement plus rapide qu’une solution à boutons et a été préféré par sept participants sur dix, même s’il entraînait davantage d’erreurs.',
          'VoiceOver, arrivé sur l’iPhone l’année suivante, repose sur les mêmes principes. Touchez n’importe où, et VoiceOver énonce l’élément sous votre doigt. Balayez vers la droite ou vers la gauche pour passer d’un élément à l’autre dans l’ordre. Touchez deux fois n’importe où pour activer le dernier élément énoncé. Une molette virtuelle, le rotor, change l’effet des balayages, qu’il s’agisse de naviguer par titres ou de régler le débit de la voix. On peut même éteindre complètement l’écran.',
          'L’apprentissage prend du temps. Rodrigues et ses collègues ont suivi des personnes aveugles pendant leurs premières semaines avec un lecteur d’écran sur smartphone, et ont constaté que maîtriser l’appareil était un processus long et exigeant, ce qui confirmait les craintes exprimées par les participants avant de commencer. Mieux vaut s’en souvenir quand un jeu ajoute ses propres gestes par-dessus.',
        ],
      },
      'who-plays': {
        title: 'Ce que disent les joueurs aveugles',
        paragraphs: [
          'En 2019, Andrade et ses collègues ont interrogé, par questionnaire et en entretien, des joueurs ayant une déficience visuelle, en s’intéressant délibérément aux jeux auxquels ils jouent réellement plutôt qu’à des jeux conçus pour une étude. Il en ressort l’image d’une communauté qui joue depuis longtemps, a des avis tranchés sur l’industrie et apprécie particulièrement les jeux qui concilient complexité et accessibilité. Beaucoup préféraient des jeux vraiment riches à des jeux « accessibles » simplifiés qu’ils trouvaient condescendants.',
          'Gonçalves, Rodrigues et Guerreiro se sont penchés sur le jeu à plusieurs. À partir d’entretiens avec dix adultes et dix enfants ayant une déficience visuelle, de 140 réponses à un questionnaire et d’un second questionnaire adressé à des voyants qui jouent avec eux, ils ont constaté que les joueurs aveugles pratiquaient une grande variété de jeux, mais rarement les mêmes que leurs amis et leur famille voyants. Le problème ne tenait pas seulement à l’inaccessibilité : les univers de jeu des deux groupes se recoupaient rarement, si bien qu’ils avaient peu à partager. Nous abordons le versant familial de cette question dans [jouer avec ses petits-enfants](/blog/playing-games-with-grandchildren).',
        ],
      },
      'what-makes-a-game-playable': {
        title: 'Ce qui rend un jeu jouable à l’oreille',
        paragraphs: [
          'La synthèse de Yuan, Folmer et Harris sur l’accessibilité des jeux décrit le jeu comme une boucle : le jeu présente des stimuli, le joueur choisit une réponse, puis il agit. La plupart des jeux transmettent leurs stimuli principaux par la vue, et un joueur aveugle a besoin qu’on les remplace, en général par la parole, le son ou la vibration. Quand le stimulus peut se traduire en mots, un lecteur d’écran peut faire une grande partie de ce travail. Sinon, c’est au jeu de s’en charger par son propre design sonore, comme le font les jeux audio créés pour les joueurs aveugles.',
          'On en tire un test utile. Les jeux au tour par tour, les jeux de cartes, les jeux de lettres et beaucoup de puzzles peuvent se décrire entièrement avec des mots : ce qui se trouve où, ce qui peut bouger, ce qui a changé. Les jeux d’action rapides, en général, non, car l’information arrive plus vite que la parole ne peut la transmettre. C’est une raison de plus d’apprécier les puzzles [sans chrono](/blog/relaxing-puzzle-games-what-makes-one-calm) : écouter prend du temps, et un chrono le fait payer. Les travaux de Spiel, Bertel et Heron sur les jeux textuels ont même montré que la formulation des directions compte : les joueurs non voyants trouvaient les directions relatives à eux-mêmes plus simples et plus immersives que les points cardinaux.',
        ],
        bullets: [
          'Chaque commande porte une étiquette vocale qui dit ce qu’elle fait, pas à quoi elle ressemble.',
          'L’état de la partie, comme le score, les coups restants ou le joueur dont c’est le tour, peut être lu à la demande.',
          'Les changements sont annoncés : une pièce a bougé, un niveau est terminé, un tour est passé.',
          'Rien ne dépend d’un chrono ni de la nécessité de toucher une petite cible en mouvement.',
          'Le jeu n’enferme pas le focus dans une fenêtre surgissante et ne laisse pas VoiceOver lire un contenu périmé.',
        ],
      },
      'direct-touch': {
        title: 'Quand un jeu a besoin du toucher direct',
        paragraphs: [
          'Certains jeux ont besoin de gestes que VoiceOver intercepterait autrement, comme faire glisser une pièce sur un plateau. La plateforme d’Apple permet à un développeur de déclarer une zone en interaction directe : les touchers passent alors directement au jeu, tandis que VoiceOver continue de lire ailleurs. Les [recommandations d’Apple sur VoiceOver à l’intention des designers](https://developer.apple.com/design/human-interface-guidelines/voiceover) en présentent les bases. Utilisé avec soin, le toucher direct donne au plateau une présence physique ; utilisé sans précaution, il crée une zone où le lecteur d’écran se tait et où le joueur est perdu.',
          'Les meilleurs jeux proposent les deux : une façon directe de jouer pour ceux qui le peuvent, et une façon pas à pas, élément par élément, pour les autres. OutBrick prend en charge VoiceOver : les commandes principales comme Annuler, Pause et Fermer portent des étiquettes descriptives, tout comme les éléments importants de l’état de la partie, et comme il n’y a jamais de chrono, prendre le temps d’écouter ne coûte rien. Un plateau a une limite de coups, pas de minuteur, et la première annulation de chaque plateau est gratuite. Nous savons qu’un puzzle coulissant est exigeant à jouer à l’oreille, et nous préférons entendre les joueurs de VoiceOver plutôt que de deviner ; la [page consacrée à l’accessibilité](/accessibility) (en anglais) détaille ce qui est déjà disponible et comment nous joindre.',
        ],
      },
      'getting-started': {
        title: 'Bien démarrer, pour les joueurs et leurs proches',
        paragraphs: [
          'Si vous découvrez VoiceOver, Apple propose un espace d’entraînement dans Réglages, Accessibilité, VoiceOver, où vous pouvez essayer les gestes sans que rien ne se déclenche. Commencez par des jeux au tour par tour riches en texte ; les jeux de cartes, les jeux de lettres et les quiz sont de bons premiers pas. Cherchez ensuite des jeux dont la description mentionne VoiceOver, et lisez les avis laissés par des joueurs aveugles.',
          'Si vous êtes voyant et jouez avec une personne aveugle, la recherche citée plus haut suggère que le plus utile est de trouver des jeux auxquels vous pouvez jouer tous les deux, plutôt que des jeux auxquels chacun joue de son côté. Les puzzles au tour par tour sur un appareil partagé sont un point de départ facile. Et si un jeu que vous aimez échoue sur l’essentiel, dites-le au développeur. Beaucoup d’équipes ignorent qu’il y a un problème tant que personne ne le leur signale. Pour OutBrick, notre [page d’assistance](/support) (en anglais) est le bon point de départ.',
        ],
      },
    },
    pullQuote: 'Un jeu se joue avec un lecteur d’écran quand son état peut se décrire avec des mots et que ses actions ne dépendent ni du timing ni d’une visée précise.',
    faqs: [
      { question: 'Les personnes aveugles peuvent-elles jouer sur iPhone ?', answer: 'Oui. Avec VoiceOver, le lecteur d’écran intégré à l’iPhone, les joueurs aveugles touchent ou balaient l’écran pour entendre ce qui s’y trouve et touchent deux fois pour agir. Les jeux au tour par tour, de cartes, de lettres et les jeux audio sont les plus joués.' },
      { question: 'Quels jeux fonctionnent le mieux avec VoiceOver ?', answer: 'Ceux dont l’état peut se décrire avec des mots et qui ne demandent pas de réflexes rapides : jeux de cartes, jeux de lettres, quiz, beaucoup de puzzles et les jeux conçus autour du son.' },
      { question: 'Qu’est-ce qu’un jeu audio ?', answer: 'Un jeu audio est conçu pour se jouer par le son plutôt que par l’image : la parole, le son spatialisé et les effets sonores transmettent tout le jeu. Beaucoup sont créés par et pour des joueurs aveugles.' },
      { question: 'OutBrick prend-il en charge VoiceOver ?', answer: 'Oui. Les commandes principales et les éléments importants de l’état de la partie portent des étiquettes VoiceOver, et il n’y a pas de chrono : vous pouvez prendre tout le temps nécessaire. La [page consacrée à l’accessibilité](/accessibility) (en anglais) détaille la prise en charge actuelle et la façon de signaler un problème.' },
    ],
  },
  'one-handed-games-iphone': {
    title: 'Jouer d’une main sur iPhone : jeux et accessibilité motrice',
    dek: 'Taille des cibles, gestes, erreurs : ce que dit la recherche sur le tactile et les troubles moteurs, et les réglages iPhone pour jouer d’une main.',
    imageAlt: 'Bricko et Moss à côté d’un téléphone affichant l’étape Celebration Square de la carte du Voyage d’OutBrick, avec des briques turquoise, bleues et roses qui flottent au-dessus',
    tags: ['jouer d’une main', 'accessibilité motrice', 'jeux iPhone', 'accessibilité', 'conception inclusive'],
    intro: 'Beaucoup de gens jouent d’une seule main. Certains le font toujours, en raison d’un handicap, d’une blessure ou d’un tremblement. Bien plus nombreux sont ceux qui le font de temps en temps : un bébé dans les bras, debout dans le train, allongés sur le côté. Un jeu qui fonctionne dans ces conditions fonctionne mieux pour tout le monde. Cet article fait le point sur ce que la recherche a établi sur les écrans tactiles et les troubles moteurs, sur ce que cela implique pour la conception des jeux, et sur les réglages de l’iPhone qui aident dès aujourd’hui.',
    keyTakeaways: [
      'Les écrans tactiles peuvent rendre autonomes les personnes ayant un trouble moteur, mais ils entraînent plus de touchers ratés et accidentels qu’une souris.',
      'De grandes cibles, des gestes simples et une annulation indulgente comptent plus que n’importe quel réglage d’accessibilité pris isolément.',
      'La pression du temps est un obstacle moteur. Un jeu sans chrono supprime d’un coup l’une des exigences les plus difficiles.',
    ],
    sections: {
      'touch-helps-and-hurts': {
        title: 'Les écrans tactiles aident, et ils gênent aussi',
        paragraphs: [
          'Anthony, Kim et Findlater ont abordé la question par un chemin inhabituel : ils ont analysé 187 vidéos publiées sur YouTube par des personnes en situation de handicap physique, qui s’y filmaient en train d’utiliser des téléphones et des tablettes ordinaires. On y voit des gens réussir, souvent grâce à leurs propres adaptations, comme utiliser une articulation du doigt, un stylet ou une autre partie du corps, ou poser la main sur le bord de l’écran pour la stabiliser. Les écrans tactiles y étaient souvent décrits comme une source d’autonomie. Les vidéos montraient aussi les problèmes récurrents : touchers accidentels, cibles trop petites pour être atteintes et gestes difficiles à réaliser.',
          'Une étude en laboratoire contrôlée, menée par Findlater et ses collègues, a chiffré le phénomène. Ils ont comparé écran tactile et souris chez 32 personnes, dont 16 avaient un trouble moteur du haut du corps. L’écran tactile était plus rapide dans l’ensemble, mais seuls les participants sans trouble y faisaient moins d’erreurs. Les participants ayant un trouble moteur faisaient trois fois plus d’erreurs de toucher sur l’écran qu’avec la souris, et les touchers parasites étaient fréquents. Les auteurs ont revu à la hausse la taille minimale recommandée des cibles tactiles pour ces utilisateurs : au moins 18 millimètres, bien plus que la plupart des boutons de téléphone.',
        ],
      },
      'one-thumb': {
        title: 'Ce qu’un seul pouce peut atteindre',
        paragraphs: [
          'Même sans aucun trouble, l’usage à une main change la donne. Parhi, Karlson et Bederson ont étudié l’usage du pouce sur de petits écrans tactiles et constaté que des cibles d’environ 9,2 millimètres pour un toucher isolé, et de 7,6 millimètres pour une série de touchers, étaient assez grandes pour ne nuire ni à la vitesse ni à la précision. En dessous, les erreurs augmentaient. La portée compte autant que la taille : sur un grand téléphone, le coin supérieur opposé est l’endroit le plus difficile à toucher avec le pouce de la main qui tient l’appareil, et c’est précisément là que beaucoup de jeux placent leurs boutons de pause et de réglages.',
          'Trewin, Swart et Pettick ont étudié l’usage des smartphones par des personnes ayant des troubles de la dextérité et les ont trouvés utiles et utilisables, même si les tablettes offraient de vrais avantages, comme des cibles plus grandes et une surface plus stable. Ils ont aussi relevé un paradoxe : certaines fonctions d’accessibilité demandaient elles-mêmes tant de dextérité pour être configurées et utilisées que beaucoup de participants ne pouvaient pas s’en servir. Une accessibilité difficile à activer n’est pas vraiment de l’accessibilité.',
        ],
      },
      'games-specifically': {
        title: 'Ce qui cloche dans les jeux sur écran tactile',
        paragraphs: [
          'Kim et ses collègues ont élaboré une grille d’analyse de l’accessibilité motrice et l’ont appliquée à 72 jeux pour iPad. Porter et Kientz, en interrogeant des joueurs en situation de handicap et des professionnels du jeu vidéo, ont constaté que l’incompatibilité avec les technologies d’assistance était un obstacle fréquent et que les développeurs manquaient souvent de conseils pratiques. Mis bout à bout, les problèmes courants se listent facilement : limites de temps et tests de réflexes, gestes à plusieurs doigts sans solution de rechange, glisser-déposer précis, petits boutons sur les bords de l’écran, et pénalités sévères pour un seul toucher raté.',
          'Le temps est ce que les concepteurs négligent le plus souvent. Un tremblement, une spasticité ou la fatigue rendent plus difficile un mouvement rapide et précis, et un compte à rebours transforme cette difficulté en échec. Une limite de coups est une contrainte d’une autre nature : elle vous demande de réfléchir, et peu lui importe le temps que met votre main à arriver. Nous expliquons pourquoi cela rend aussi un jeu plus apaisant dans [ce qui rend vraiment un jeu de puzzle relaxant](/blog/relaxing-puzzle-games-what-makes-one-calm).',
        ],
        bullets: [
          'Des cibles bien plus grandes que le minimum de la plateforme, espacées les unes des autres.',
          'Les commandes importantes à portée de pouce, pas seulement dans les coins supérieurs.',
          'Chaque geste réalisable avec un seul doigt, et aucun geste qui doive être rapide.',
          'Une annulation facile à atteindre, qui pardonne un toucher raté sans pénalité.',
          'Aucun minuteur pendant le jeu ordinaire, et aucun test de réflexes caché dans les menus.',
        ],
      },
      'forgiveness': {
        title: 'L’indulgence est une fonction d’accessibilité motrice',
        paragraphs: [
          'La plupart des textes sur l’accessibilité se concentrent sur la manière de bien saisir une action. Ce qui se passe quand la saisie tourne mal est tout aussi important, car pour certains joueurs cela arrivera souvent. Un jeu qui traite chaque toucher involontaire comme un coup joué est discrètement hostile à toute personne qui tremble. Un jeu qui permet de reprendre facilement le dernier coup est bienveillant envers tout le monde. Les recommandations d’accessibilité du web font une remarque voisine au sujet des [gestes de pointage](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html) : tout ce qui peut se faire avec un geste complexe doit aussi pouvoir se faire avec un geste simple.',
          'C’est là que se situe OutBrick. Les briques se déplacent d’un seul doigt, et un glissement est un mouvement court et unique plutôt qu’un glisser-déposer précis jusqu’à un point donné. Il n’y a aucun chrono nulle part. La première annulation de chaque plateau est gratuite, si bien qu’un glissement raté ne coûte jamais un plateau, et l’annulation proposée quand un plateau se bloque est gratuite elle aussi. Sur Apple Watch, la Digital Crown fonctionne aussi bien que le toucher. Rien de tout cela ne rend le jeu accessible à tous, et un puzzle coulissant demande toujours un geste orienté. Si une commande est difficile à atteindre, la [page consacrée à l’accessibilité](/accessibility) (en anglais) vous demande votre appareil et l’écran concerné, car c’est ce détail qui nous permet de corriger.',
          'Il vaut la peine de rappeler combien de personnes cela concerne. Les designers parlent parfois de handicaps situationnels : le parent avec un enfant sur un bras, le voyageur qui se tient à la barre, le joueur au poignet plâtré pour six semaines. Aucun d’eux ne se décrirait comme handicapé, et tous profitent exactement des mêmes choix. Concevoir pour le joueur atteint d’un tremblement permanent donne un jeu auquel toute la rame peut jouer d’une main.',
        ],
      },
      'iphone-settings': {
        title: 'Les réglages iPhone qui facilitent le jeu à une main',
        paragraphs: [
          'Les réglages d’accessibilité motrice d’Apple se trouvent dans Réglages, Accessibilité, Toucher, et plusieurs conviennent bien aux jeux. Mieux vaut les essayer un par un, car chacun modifie la façon dont toutes les apps réagissent à vos doigts. Pour les jeux en particulier, vérifiez que le jeu se comporte toujours correctement quand ils sont activés ; un bon jeu ne devrait rien remarquer. Les utilisateurs d’Apple Watch disposent aussi de leurs propres options, et nous abordons le cas du petit écran dans [les jeux de puzzle pour Apple Watch](/blog/apple-watch-puzzle-games).',
        ],
        bullets: [
          'Accessibilité simplifiée abaisse le haut de l’écran à portée de pouce quand vous balayez vers le bas le long du bord inférieur.',
          'Adaptation du toucher peut ignorer les touchers répétés, exiger qu’un toucher soit maintenu un court instant avant d’être pris en compte, ou retenir l’endroit où votre doigt s’est posé en premier ou en dernier.',
          'AssistiveTouch affiche à l’écran un menu flottant qui peut remplacer les gestes à plusieurs doigts et les boutons physiques.',
          'Toucher le dos transforme deux ou trois touchers au dos du téléphone en raccourci.',
          'Contrôle vocal et Contrôle de sélection permettent d’utiliser le téléphone sans le toucher du tout, même si les jeux au rythme rapide s’y prêtent rarement.',
        ],
      },
    },
    pullQuote: 'Une accessibilité difficile à activer n’est pas vraiment de l’accessibilité.',
    faqs: [
      { question: 'Qu’est-ce qui rend un jeu mobile adapté au jeu à une main ?', answer: 'De grands boutons bien espacés à portée de pouce, des gestes qui ne demandent qu’un doigt, aucun minuteur ni test de réflexes, et un moyen simple d’annuler un toucher raté.' },
      { question: 'Quelle taille doivent avoir les cibles tactiles pour les personnes ayant un trouble moteur ?', answer: 'Une étude en laboratoire de Findlater et ses collègues recommande au moins 18 millimètres pour les utilisateurs ayant un trouble moteur du haut du corps, bien au-delà de la taille habituelle des boutons de téléphone.' },
      { question: 'Quels réglages iPhone aident à l’accessibilité motrice dans les jeux ?', answer: 'Dans Réglages, Accessibilité, Toucher : Accessibilité simplifiée, Adaptation du toucher, AssistiveTouch et Toucher le dos. Contrôle vocal et Contrôle de sélection permettent d’utiliser le téléphone sans le toucher.' },
      { question: 'Peut-on jouer à OutBrick d’une seule main ?', answer: 'Oui. Les briques se déplacent d’un simple glissement à un doigt, il n’y a jamais de chrono, et la première annulation de chaque plateau est gratuite : un glissement raté ne vous coûte pas le plateau. Vous pouvez [essayer un plateau dans votre navigateur](/play).' },
    ],
  },
  'reduce-motion-games': {
    title: 'Cinétose et jeux vidéo : pourquoi réduire les animations',
    dek: 'Pourquoi le mouvement à l’écran donne le tournis à certains joueurs, qui y est le plus sensible, et comment Réduire les animations rend un jeu confortable.',
    imageAlt: 'Peach et Bloo de part et d’autre d’un téléphone affichant un plateau OutBrick super difficile au niveau 214, avec des briques turquoise, rouges et vertes qui flottent à côté',
    tags: ['mal des transports jeux vidéo', 'cinétose', 'Réduire les animations', 'accessibilité', 'conception de jeux'],
    intro: 'La plupart des gens ne pensent jamais au mouvement dans un jeu, jusqu’au jour où il les rend malades. Pour une minorité non négligeable, une caméra qui plonge, un arrière-plan en parallaxe ou un écran qui tremble à chaque réussite provoque vertiges, nausées ou maux de tête, parfois longtemps après avoir posé l’appareil. Ce n’est pas de la sensiblerie. C’est une réaction bien étudiée du système de l’équilibre, et un réglage tout simple existe précisément pour cette raison. Voici ce que dit la recherche, et ce que joueurs et concepteurs peuvent faire.',
    keyTakeaways: [
      'Le mal des transports d’origine visuelle survient quand vos yeux signalent un mouvement que vos organes de l’équilibre ne ressentent pas.',
      'La sensibilité varie énormément. Des antécédents de mal des transports, de migraine et de vertiges permettent tous de prévoir qui sera le plus touché.',
      'Respecter le réglage Réduire les animations coûte peu à un concepteur et peut faire la différence entre un jeu auquel quelqu’un peut jouer et un jeu qui lui est inaccessible.',
    ],
    sections: {
      'why-screens-make-you-sick': {
        title: 'Pourquoi un écran peut rendre malade',
        paragraphs: [
          'Votre sens de l’équilibre s’appuie sur trois sources : vos yeux, les organes vestibulaires de l’oreille interne, et la sensation de votre corps en appui sur le sol. D’ordinaire, elles concordent. Quand une grande partie de votre champ de vision bouge comme si vous vous déplaciez, alors que votre oreille interne indique que vous êtes assis sans bouger, les signaux entrent en conflit. Chez beaucoup de gens, il en résulte un ensemble de symptômes, dont la désorientation, la fatigue oculaire, la transpiration et la nausée, que l’on appelle mal des transports d’origine visuelle, ou cybermalaise quand il vient d’un écran.',
          'La synthèse de Rebenitsch et Owen rassemble ce que l’on sait de ses causes. Une grande partie de ces recherches porte sur la réalité virtuelle et les grands écrans, où l’effet est le plus fort, mais les ingrédients valent aussi pour les téléphones et les tablettes : la part du champ de vision qui bouge, la vitesse et la direction du mouvement, ainsi que les choix de rendu et la durée d’exposition. Une sensation voisine, la vection, est l’illusion de se déplacer soi-même, comme lorsque votre train à l’arrêt semble démarrer au moment où celui d’à côté s’en va. Keshavarz et ses collègues ont examiné le lien entre les deux et conclu qu’il est moins direct qu’on ne l’a longtemps cru : vection et malaise surviennent souvent ensemble, mais pas toujours.',
        ],
      },
      'which-motion': {
        title: 'Quels mouvements posent problème',
        paragraphs: [
          'Tous les mouvements ne se valent pas. Dans une série de deux expériences, Keshavarz et ses collègues ont fait varier la vitesse et la densité d’un champ d’étoiles en mouvement, puis y ont ajouté une rotation. Un mouvement plus rapide et plus dense renforçait l’illusion de se déplacer, mais changeait peu le malaise. L’ajout d’un tangage, une rotation qui bascule vers le haut et vers le bas, produisait les scores de malaise les plus élevés et davantage de désorientation. En pratique, rotations et mouvements de caméra gênent davantage que des objets qui se déplacent simplement sur un fond immobile.',
          'Cela rejoint ce que les joueurs sensibles au mouvement disent souvent des jeux : le problème vient en général de toute la scène qui bouge en même temps. Tremblements de caméra, zooms qui remplissent l’écran, couches de parallaxe qui glissent à des vitesses différentes et transitions qui font pivoter la vue sont les suspects habituels. Une brique qui glisse sur un plateau immobile n’a rien à voir avec le plateau lui-même qui tangue.',
        ],
      },
      'who-is-susceptible': {
        title: 'Qui est le plus sensible',
        paragraphs: [
          'La sensibilité varie énormément d’une personne à l’autre. Golding, Rafiq et Keshavarz ont testé un court questionnaire sur le mal des transports d’origine visuelle auprès de 30 adultes regardant une scène urbaine qui tournait et oscillait. Le questionnaire prédisait environ un tiers des écarts dans l’intensité du malaise, et plus de la moitié une fois ajoutés les antécédents de mal des transports ordinaire, de migraine et d’évanouissement, ainsi que l’impact quotidien des vertiges. Les travaux antérieurs de Golding sur le questionnaire de référence du mal des transports avaient déjà fait de la migraine l’un des liens les plus nets entre le mal des transports et d’autres formes de nausée. Dans l’étude de Rebenitsch et Owen sur les différences individuelles, des antécédents de mal des transports figuraient parmi les meilleurs prédicteurs du cybermalaise.',
          'Pour certaines personnes, le problème dépasse la nausée passagère. Bronstein a décrit un groupe de patients, pour la plupart atteints d’un trouble du système de l’équilibre de l’oreille interne, chez qui des scènes visuelles chargées ou en mouvement provoquaient systématiquement des vertiges, une affection qu’il a appelée vertige visuel. Pour eux, un écran plein de mouvement n’est pas un désagrément, c’est un véritable obstacle. Un jeu ne peut ni diagnostiquer ni traiter quoi que ce soit de cela, et des vertiges persistants méritent d’être signalés à un médecin. Ce qu’un jeu peut faire, c’est éviter de les aggraver.',
        ],
      },
      'what-reduce-motion-does': {
        title: 'Ce que fait Réduire les animations, et ce que les concepteurs devraient faire',
        paragraphs: [
          'Sur iPhone et iPad, le réglage se trouve dans Réglages, Accessibilité, Mouvement, Réduire les animations. Quand il est activé, le système remplace les transitions en zoom et en glissement par des fondus plus doux, et indique à chaque app que le joueur a demandé moins de mouvement. C’est ensuite à chaque app d’en tenir compte. Le web a un équivalent, et les recommandations du W3C sur les [animations déclenchées par les interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) demandent que le mouvement provoqué par une interaction puisse être désactivé, sauf s’il est essentiel.',
          'Le mot « essentiel » compte. Dans un puzzle coulissant, il faut voir la brique bouger, sinon le joueur ne peut pas suivre le plateau. Mais les confettis, la caméra qui rebondit et l’arrière-plan qui dérive sont de la décoration, et la décoration peut disparaître. Dans OutBrick, Réduire les animations est respecté partout : quand il est activé, le jeu atténue la parallaxe, les confettis et les transitions à effet ressort, tandis que les briques continuent de montrer où elles vont. Nous décrivons les autres réglages de confort, pour le son, la musique et les vibrations, sur la [page consacrée à l’accessibilité](/accessibility) (en anglais).',
        ],
        bullets: [
          'Gardez la caméra immobile. Bougez les pièces, pas le monde.',
          'Évitez les tremblements d’écran, les zooms plein écran et les transitions en rotation, ou désactivez-les avec Réduire les animations.',
          'Gardez la parallaxe discrète et supprimez-la avec Réduire les animations.',
          'Ne faites jamais clignoter de grandes zones de l’écran, et gardez les célébrations brèves.',
          'Testez avec Réduire les animations activé, et vérifiez que rien d’important ne disparaît.',
        ],
      },
      'player-tips': {
        title: 'Si les jeux vous rendent malade',
        paragraphs: [
          'Activez d’abord Réduire les animations et, dans le même menu, essayez Préférer les transitions en fondu. Cherchez ensuite les options propres à chaque jeu dans ses réglages : tremblement de caméra, flou de mouvement, champ de vision et effets d’écran sont fréquents dans les jeux plus ambitieux. Jouez dans une pièce bien éclairée, tenez l’appareil un peu plus loin pour qu’il occupe moins de votre champ de vision, et faites des pauses avant que les symptômes ne s’installent plutôt qu’après. Les casques sont le cas le plus exigeant de tous ; nous abordons le confort sur [Apple Vision Pro](/blog/apple-vision-pro-puzzle-games) séparément.',
          'Et choisissez des jeux conçus pour être calmes. Un puzzle au tour par tour sur un plateau immobile est un point de départ bien plus facile qu’un jeu fondé sur la vitesse. Notre guide sur [ce qui rend un jeu de puzzle relaxant](/blog/relaxing-puzzle-games-what-makes-one-calm) passe en revue les autres points à surveiller, et [la conception de jeux adaptés aux sensibilités sensorielles](/blog/sensory-friendly-game-design) aborde plus largement le son, la lumière et la surprise.',
          'Si un jeu ignore Réduire les animations, dites-le à son développeur, en étant précis : quel écran, quel effet, et ce que cela vous a fait. Beaucoup d’équipes testent avec le réglage désactivé et ne voient tout simplement jamais le problème. Cela vaut pour nous aussi : si quelque chose dans OutBrick bouge encore trop pour vous avec Réduire les animations activé, notre [page d’assistance](/support) (en anglais) est l’endroit où le dire, et c’est le genre de signalement qui mène à une correction.',
        ],
      },
    },
    pullQuote: 'Bougez les pièces, pas le monde.',
    faqs: [
      { question: 'Pourquoi certains jeux me donnent-ils le mal des transports ?', answer: 'Quand une grande partie de votre champ de vision bouge comme si vous vous déplaciez, alors que votre oreille interne ne ressent aucun mouvement, ces signaux contradictoires peuvent provoquer vertiges, fatigue oculaire et nausée. On parle de mal des transports d’origine visuelle.' },
      { question: 'Que fait Réduire les animations sur iPhone ?', answer: 'Ce réglage remplace les transitions système en zoom et en glissement par des effets plus doux et indique aux apps que vous souhaitez moins de mouvement. Les apps qui le respectent suppriment ou adoucissent aussi leurs propres animations.' },
      { question: 'Qui risque le plus d’avoir le mal des transports devant un écran ?', answer: 'La recherche le relie surtout à des antécédents de mal des transports, à la migraine et aux vertiges persistants, même si la sensibilité varie beaucoup d’une personne à l’autre. Des symptômes persistants méritent d’être évoqués avec un médecin.' },
      { question: 'OutBrick respecte-t-il Réduire les animations ?', answer: 'Oui. Quand Réduire les animations est activé, OutBrick atténue partout la parallaxe, les confettis et les transitions à effet ressort, tandis que les briques glissent toujours de façon visible pour que vous puissiez suivre le plateau.' },
    ],
  },
  'puzzles-executive-function-children': {
    title: 'Puzzles et fonctions exécutives de l’enfant : les preuves',
    dek: 'Planifier, se maîtriser : ce que les puzzles peuvent ou non apporter aux fonctions exécutives des enfants selon les études, et comment jouer utilement.',
    imageAlt: 'Sprout et Vio de part et d’autre d’un téléphone affichant l’étape Bamboo Springs de la carte du Voyage d’OutBrick, avec des briques jaunes, vertes et bleues qui flottent à côté',
    tags: ['fonctions exécutives', 'fonctions exécutives enfant', 'jeux éducatifs', 'puzzles et cerveau', 'entraînement cérébral'],
    intro: 'Les fonctions exécutives sont devenues l’une des notions les plus en vogue du développement de l’enfant, et l’une des plus exploitées par le marketing. Applis, jouets et puzzles promettent de les développer. La recherche est vraiment encourageante sur certains points et vraiment décevante sur d’autres, et les parents méritent d’entendre les deux. Voici ce que sont les fonctions exécutives, ce que disent les meilleures données sur leur entraînement, quelle place tiennent les puzzles, et comment jouer avec un enfant de la façon la plus susceptible de l’aider.',
    keyTakeaways: [
      'Les fonctions exécutives recouvrent le fait de garder une information en tête, de résister à ses impulsions et de passer d’une idée à l’autre. Elles peuvent progresser avec la pratique.',
      'La pratique améliore surtout la compétence exercée. Les preuves d’un « transfert lointain » vers l’école ou l’intelligence sont faibles.',
      'Les approches les plus efficaces sont plaisantes, de plus en plus difficiles et intégrées à la vie quotidienne, ce qui décrit bien un bon jeu.',
    ],
    sections: {
      'what-executive-function-is': {
        title: 'Que sont les fonctions exécutives ?',
        paragraphs: [
          'Dans la synthèse très citée d’Adele Diamond, les fonctions exécutives sont les processus mentaux qui nous permettent de jongler avec les idées, de prendre le temps de réfléchir avant d’agir, de relever des défis nouveaux, de résister à la tentation et de rester concentrés. Elle en décrit trois composantes centrales. Le contrôle inhibiteur est la capacité à retenir une impulsion et à garder son attention là où elle doit être. La mémoire de travail consiste à garder une information en tête pendant qu’on l’utilise. La flexibilité cognitive permet de voir les choses sous un autre angle et de changer de cap quand la situation évolue.',
          'Un puzzle coulissant fait travailler les trois en miniature. Vous gardez un plan en tête sur plusieurs coups, vous résistez au glissement tentant qui paraît bon mais bloque une porte, et vous abandonnez votre plan quand une brique s’arrête à un endroit inattendu. Diamond souligne aussi que le stress, le manque de sommeil, la solitude et le manque d’exercice nuisent tous aux fonctions exécutives. Utile rappel : aucun puzzle ne peut compenser la fatigue ou l’anxiété d’un enfant.',
          'Ces compétences se développent lentement. Diamond décrit une longue progression qui va de la petite enfance jusque tard dans l’adolescence, et c’est une des raisons pour lesquelles il faut rester modeste dans ses attentes envers les jeunes enfants. Un enfant de quatre ans qui fait glisser des briques au hasard et un enfant de sept ans qui s’arrête pour prévoir deux coups à l’avance se comportent tous deux normalement pour leur âge. L’écart entre eux relève du développement, pas d’un déficit qu’un jeu serait censé combler.',
        ],
      },
      'what-diamond-and-lee-found': {
        title: 'Ce qu’a montré la synthèse de référence',
        paragraphs: [
          'En 2011, dans la revue Science, Diamond et Lee ont passé en revue des programmes dont l’effet sur les fonctions exécutives avait été testé chez des enfants de 4 à 12 ans. Des approches très diverses avaient montré des bénéfices : entraînement sur ordinateur, jeux non informatiques, exercice aérobie, arts martiaux, yoga, pleine conscience et certains programmes scolaires. Les programmes efficaces avaient en commun une pratique répétée et un défi qui augmentait à mesure que l’enfant progressait. Les enfants dont les fonctions exécutives étaient les plus faibles au départ tendaient à progresser le plus.',
          'Deux autres points de cette synthèse passent facilement inaperçus. D’abord, les programmes qui s’intéressaient aussi au développement émotionnel et social des enfants, et pas seulement à leur réflexion, tendaient à mieux réussir. Ensuite, les bénéfices étaient les plus nets sur des tâches proches de celles qui avaient été pratiquées. Ce second point s’est révélé être le cœur du débat qui a suivi.',
        ],
      },
      'the-transfer-problem': {
        title: 'Le problème du transfert',
        paragraphs: [
          'Progresser sur une tâche entraînée s’appelle le transfert proche. Progresser sur autre chose, comme la lecture, le calcul ou le raisonnement en général, relève du transfert lointain, et c’est ce que promettent la plupart des produits. Kassai et ses collègues ont regroupé les études expérimentales sur l’entraînement des fonctions exécutives chez l’enfant. Ils ont trouvé un effet de transfert proche solide, les compétences entraînées progressant de façon modérée. Mais entraîner une composante, comme la mémoire de travail, n’améliorait pas de manière fiable les autres ; l’effet de transfert lointain était faible et non statistiquement significatif.',
          'D’autres méta-analyses vont dans le même sens. Melby-Lervåg et Hulme ont constaté que l’entraînement de la mémoire de travail produisait des gains à court terme sur la mémoire de travail elle-même, sans preuve convaincante qu’ils se généralisent à d’autres compétences. Sala et Gobet se sont intéressés aux échecs, à la musique et à l’entraînement de la mémoire de travail chez l’enfant, et ont observé que les bénéfices apparents diminuaient à mesure que la qualité des études augmentait, pour conclure que le transfert lointain se produit rarement. Takacs et Kassai, en regroupant 90 études portant sur près de 9 000 enfants, ont constaté que les fonctions exécutives peuvent être stimulées pendant l’enfance, mais n’ont trouvé aucune preuve convaincante que les gains se maintenaient lors du suivi. Ils ont aussi constaté que les approches qui développent ces compétences de façon implicite, au fil d’activités quotidiennes plaisantes, étaient au moins aussi efficaces que les exercices explicites, voire davantage.',
        ],
        note: 'Cela rejoint les données chez l’adulte, que nous avons passées en revue dans [les jeux de puzzle sont-ils bons pour le cerveau ?](/blog/are-puzzle-games-good-for-your-brain)',
      },
      'where-puzzles-fit': {
        title: 'Quelle place pour les puzzles ?',
        paragraphs: [
          'Alors, à quoi bon ? À beaucoup de choses, à condition d’avoir des attentes honnêtes. Les puzzles sont un bon entraînement aux compétences qu’ils mobilisent : planifier, patienter, regarder avant d’agir et se remettre d’une fausse route. Cela vaut déjà la peine en soi. Il existe aussi quelques indices intéressants sur les compétences spatiales. Levine et ses collègues ont observé des enfants et leurs parents à la maison entre deux et quatre ans, et constaté que les enfants qui jouaient à des puzzles réussissaient mieux une tâche de transformation spatiale à quatre ans et demi, même en tenant compte du revenu et du niveau d’études de la famille et de la quantité de paroles des parents. Il s’agissait d’une étude observationnelle : elle ne peut pas montrer que les puzzles sont la cause de cet écart, mais elle concorde avec ce que l’on sait de l’apprentissage spatial.',
          'La position honnête, c’est donc que les puzzles sont un bon usage du temps de jeu, pas un traitement. Un enfant qui les aime s’entraîne réellement à anticiper. Un enfant à qui on les impose pour son cerveau risque d’en tirer moins, et d’y prendre moins de plaisir.',
          'Les parents demandent souvent si les puzzles sur écran valent les puzzles physiques. Les données ne permettent pas de trancher. La synthèse de Diamond et Lee comptait à la fois l’entraînement sur ordinateur et des jeux non informatiques parmi les activités bénéfiques, et ce qui unissait les programmes efficaces n’était pas le support mais une pratique répétée avec un défi croissant. Un puzzle sur la table de la cuisine et un puzzle coulissant sur une tablette sollicitent des formes de réflexion similaires. Ce qui diffère davantage, c’est tout ce qui les entoure : la présence ou non d’un adulte, et le fait que l’appli soit conçue ou non pour retenir l’attention pour elle-même.',
        ],
      },
      'playing-well': {
        title: 'Comment jouer aux puzzles de façon utile',
        paragraphs: [
          'La recherche sur ce qui fonctionne suggère quelques habitudes. Toutes portent sur la façon de jouer, pas sur ce que vous achetez. OutBrick est classé 4+ et la [page sur la classification par âge](/age-rating) (en anglais) explique pourquoi ; le jeu a une limite de coups plutôt qu’un chrono, ce qui laisse à un enfant tout le temps de réfléchir. Vous pouvez [jouer un plateau dans votre navigateur](/play) ensemble avant de décider s’il convient à votre enfant, et notre guide [comment résoudre un puzzle de blocs coulissants](/blog/how-to-solve-sliding-block-puzzles) propose des stratégies dont vous pouvez discuter.',
        ],
        bullets: [
          'Jouez ensemble et réfléchissez à voix haute. Demandez « que se passe-t-il si on fait glisser celle-là ? » avant que quiconque ne bouge.',
          'Visez difficile mais faisable. Le bénéfice vient d’un défi qui grandit avec l’enfant.',
          'Traitez un mauvais coup comme une information, pas comme un échec, et servez-vous de l’annulation pour essayer un autre chemin.',
          'Employez des mots spatiaux : au-dessus, derrière, bloqué, tourner, bord. L’étude de Levine suggère que la conversation autour des puzzles compte.',
          'Arrêtez tant que c’est encore amusant. Le plaisir n’est pas un bonus : il explique en partie pourquoi la pratique implicite fonctionne.',
        ],
      },
    },
    pullQuote: 'La position honnête, c’est donc que les puzzles sont un bon usage du temps de jeu, pas un traitement.',
    faqs: [
      { question: 'Que sont les fonctions exécutives chez l’enfant ?', answer: 'Les fonctions exécutives sont un ensemble de compétences mentales qui comprend la mémoire de travail, le contrôle inhibiteur et la flexibilité cognitive. Ensemble, elles aident l’enfant à planifier, à se concentrer, à résister à ses impulsions et à s’adapter quand les choses changent.' },
      { question: 'Les puzzles améliorent-ils les fonctions exécutives ?', answer: 'Les puzzles entraînent à la planification et à la maîtrise de soi, et la pratique améliore les compétences pratiquées. Les preuves que cela se répercute sur les matières scolaires ou sur l’intelligence générale sont faibles : mieux vaut profiter des puzzles comme d’un jeu que les prescrire comme un entraînement.' },
      { question: 'Les applis d’entraînement cérébral sont-elles bonnes pour les enfants ?', answer: 'Les méta-analyses montrent que l’entraînement améliore les performances sur les tâches entraînées, mais se transfère rarement à d’autres compétences, et que les gains s’estompent souvent. Des activités quotidiennes plaisantes qui font travailler l’enfant fonctionnent au moins aussi bien.' },
      { question: 'À partir de quel âge OutBrick convient-il ?', answer: 'OutBrick est classé 4+ et ne contient ni contenu pour adultes, ni chrono, ni chat public. La [page sur la classification par âge](/age-rating) (en anglais) explique ce classement, y compris le fonctionnement de ses vidéos récompensées facultatives.' },
    ],
  },
  'playing-games-with-grandchildren': {
    title: 'Jouer avec ses petits-enfants : pourquoi ça vaut le coup',
    dek: 'Bien choisi, le jeu intergénérationnel profite aux deux générations selon la recherche. Ce que montrent les études, et comment s’y prendre.',
    imageAlt: 'Poppy et Flurry de part et d’autre d’un téléphone affichant l’étape Celebration Square de la carte du Voyage d’OutBrick, avec des briques jaunes, violettes et vertes qui flottent à côté',
    tags: ['jouer avec ses petits-enfants', 'jeu intergénérationnel', 'grands-parents', 'jeux en famille', 'jeux pour seniors'],
    intro: 'On dit souvent aux grands-parents que les jeux de leurs petits-enfants sont un mur entre eux : bruyants, rapides, incompréhensibles, mieux vaut ne pas s’en mêler. La recherche sur le jeu partagé suggère l’inverse. Quand le jeu est bien choisi, jouer ensemble est l’un des moyens les plus simples pour deux générations de passer du temps d’égal à égal, l’enfant étant aussi souvent le professeur que l’élève. Voici ce que les études ont montré, ce qui coince souvent, et comment choisir des jeux et y jouer par-delà soixante ans d’écart.',
    keyTakeaways: [
      'Les synthèses sur le jeu intergénérationnel relèvent des bienfaits pour les liens familiaux, un apprentissage dans les deux sens et un meilleur regard sur l’autre génération.',
      'Le problème le plus courant est un écart d’habileté et de vitesse. Les jeux au tour par tour et sans chrono l’aplanissent.',
      'Laissez l’enfant enseigner. Inverser les rôles habituels est l’un des aspects les plus appréciés du jeu partagé.',
    ],
    sections: {
      'what-the-research-finds': {
        title: 'Ce que montre la recherche',
        paragraphs: [
          'De la Hera et ses collègues ont passé en revue de façon systématique les études empiriques sur les jeux numériques intergénérationnels, seize au total, avec des joueurs âgés de 55 à 81 ans et des joueurs plus jeunes de 4 à 22 ans. Les bienfaits relevés se répartissaient en quatre groupes : des liens familiaux renforcés, un apprentissage dans les deux sens, une meilleure compréhension de l’autre génération et une anxiété sociale réduite. Une synthèse antérieure de Costa et Veloso, portant sur 36 articles publiés entre 2006 et 2014, arrivait à des conclusions semblables et formulait des recommandations de conception pour les jeux destinés à rapprocher les générations.',
          'L’une des études les mieux contrôlées vient de Singapour. Chua et ses collègues ont formé des binômes de jeunes et d’adultes âgés pour des séances régulières pendant deux mois : certains jouaient ensemble à des jeux vidéo, d’autres faisaient d’autres activités. Les binômes qui jouaient ont fait état d’une amélioration plus nette de leur regard sur l’autre génération et d’une moindre appréhension à la côtoyer. Les échantillons de ce domaine sont petits et la plupart des études sont courtes : il ne faut donc pas surestimer l’ampleur de l’effet. Sa direction, elle, est constante.',
        ],
      },
      'why-it-works': {
        title: 'Pourquoi jouer ensemble fonctionne',
        paragraphs: [
          'Osmanovic et Pecchioni ont interrogé des adultes âgés et les membres plus jeunes de leur famille avec qui ils jouaient. Des deux côtés, on décrivait les jeux comme une façon de passer du temps ensemble et de rester en lien, ainsi que les émotions positives du jeu lui-même. Pour beaucoup de joueurs âgés, le jeu comptait moins que la compagnie. Voida et Greenberg, en observant des familles et des groupes jouant ensemble sur console, ont décrit les jeux comme un lieu de rencontre où des personnes d’âges et de capacités très différents pouvaient endosser des rôles variés : joueur, coach, spectateur, commentateur.',
          'Cette souplesse des rôles est importante. Siyahhan, Barab et Downton, qui ont étudié des parents et des enfants jouant ensemble à un jeu de quête en ligne, ont constaté que la nature du jeu partagé variait beaucoup d’un binôme à l’autre, certains parents menant, d’autres suivant, d’autres encore travaillant côte à côte, et que les résultats étaient positifs quel que soit le style. Il n’y a pas de bonne façon de jouer ensemble. Il y a seulement à trouver celle qui vous convient à tous les deux.',
          'Dans ces études, l’apprentissage va aussi dans les deux sens, ce que De la Hera et ses collègues citent comme l’un des principaux bienfaits. Les enfants enseignent les commandes, les raccourcis et les codes du jeu. Les grands-parents apportent souvent la patience, le sens de la stratégie et l’habitude de réfléchir à un coup avant de le jouer. Dans un puzzle, ce sont précisément les qualités qui font gagner, ce qui équilibre discrètement la partie. Bien des grands-parents constatent qu’un jeu partagé leur donne un sujet de conversation avec un petit-enfant qui, sinon, répond aux questions par monosyllabes.',
        ],
      },
      'what-goes-wrong': {
        title: 'Ce qui coince souvent',
        paragraphs: [
          'Les synthèses s’accordent sur la principale difficulté : un écart de capacités. Les enfants sont souvent plus rapides et plus habitués aux écrans tactiles et aux codes des jeux ; les grands-parents ont parfois plus de patience et un meilleur sens stratégique, mais des réflexes plus lents et une vue différente. Les jeux qui récompensent la vitesse laissent le joueur âgé toujours à la traîne, ce qui n’amuse ni l’un ni l’autre. Les jeux chargés de texte ou aux commandes minuscules excluent les plus jeunes, et parfois les plus âgés.',
          'L’autre difficulté est la motivation. De la Hera et ses collègues notent que les deux générations attendent souvent des choses différentes d’un jeu, et que les jeux qui fonctionnent le mieux offrent à chacune de quoi y prendre plaisir. Un enfant aimera peut-être collectionner et explorer ; un grand-parent préférera un objectif clair et un puzzle tranquille. Les meilleurs jeux à partager laissent de la place aux deux.',
        ],
      },
      'choosing-a-game': {
        title: 'Comment choisir un jeu qui vous plaise à tous les deux',
        paragraphs: [
          'Cherchez des jeux où chaque tour dure le temps qu’il faut. Une limite de coups, oui ; un chrono, non. Cherchez des jeux qu’on peut se passer de main en main sur un seul appareil, pour être assis côte à côte plutôt que chacun devant son écran. Et cherchez des jeux qui démarrent en douceur, pour que le joueur le moins expérimenté puisse trouver ses marques sans être mis dans l’embarras. Notre liste de critères pour [les jeux de puzzle adaptés aux seniors](/blog/puzzle-games-for-older-adults) détaille la lisibilité et les réglages.',
          'Un puzzle quotidien fait un bon rituel partagé, surtout à distance. OutBrick propose sur son site un [plateau du jour](/daily) (en anglais) auquel tout le monde peut jouer dans un navigateur : un grand-parent et son petit-enfant peuvent tous deux essayer le même plateau et comparer leurs résultats au téléphone le soir même. Dans le jeu lui-même, chaque plateau a une limite de coups mais jamais de chrono, la première annulation est gratuite, et les symboles du mode daltonien sont activés par défaut, ce qui aide si l’un de vous a du mal à distinguer certaines couleurs.',
          'Pensez au cadre autant qu’au jeu. Une tablette posée sur une table entre vous est plus confortable pour des yeux âgés qu’un téléphone tenu dans la main d’un enfant, et elle rend l’alternance naturelle. Vérifiez que le texte est assez grand pour le grand-parent et que le son est assez bas pour pouvoir discuter. Si l’un de vous a des besoins particuliers, par exemple pour la vision des couleurs, l’audition ou un tremblement, quelques minutes dans les réglages au départ éviteront bien des frustrations. Notre article sur [le daltonisme dans les jeux vidéo](/blog/colour-blindness-in-games) explique l’un des cas les plus courants.',
        ],
      },
      'playing-well-together': {
        title: 'Bien jouer ensemble',
        paragraphs: [
          'La recherche suggère que la valeur du jeu partagé tient davantage à la relation qui l’entoure qu’au jeu lui-même. Quelques habitudes aident, que vous jouiez sur le canapé ou en appel vidéo. Pour la dimension sociale des jeux plus largement, [Animal Crossing et le temps partagé](/blog/animal-crossing-shared-time) est une bonne lecture complémentaire.',
        ],
        bullets: [
          'Laissez l’enfant vous apprendre le jeu, et soyez un élève de bonne volonté. Les enfants ont rarement l’occasion d’être l’expert.',
          'Jouez à tour de rôle sur un seul appareil et commentez chaque coup, plutôt que de faire la course sur deux.',
          'Partagez ce que vous remarquez : stratégies, schémas, la bonne idée que vous avez eue trois coups plus tôt.',
          'Faites des séances courtes et arrêtez-vous sur une note positive, pour que la prochaine fois soit attendue avec plaisir.',
          'Convenez ensemble, avant de commencer, du temps de jeu, pour que l’arrêt ne soit pas une bataille.',
        ],
      },
    },
    pullQuote: 'Il n’y a pas de bonne façon de jouer ensemble. Il y a seulement à trouver celle qui vous convient à tous les deux.',
    faqs: [
      { question: 'Jouer aux jeux vidéo avec ses petits-enfants est-il bon pour les grands-parents ?', answer: 'Les études sur le jeu intergénérationnel font état de liens familiaux renforcés, d’un apprentissage dans les deux sens et d’un regard plus positif entre générations. Ces études sont surtout petites et courtes, mais leurs résultats vont dans le même sens.' },
      { question: 'Quels jeux conviennent le mieux aux grands-parents et petits-enfants ?', answer: 'Les jeux au tour par tour sans chrono, aux commandes simples et au démarrage en douceur fonctionnent le mieux, car ils gomment les écarts de vitesse et d’expérience. Les jeux qu’on se passe sur un seul appareil encouragent la conversation et la transmission.' },
      { question: 'Comment jouer avec des petits-enfants qui habitent loin ?', answer: 'Partagez un puzzle quotidien auquel vous jouez chacun de votre côté avant de comparer vos résultats, ou jouez ensemble en appel vidéo, à tour de rôle, en commentant vos coups. Le [plateau du jour](/daily) (en anglais) d’OutBrick se joue dans n’importe quel navigateur.' },
    ],
  },
  'calm-games-for-kids': {
    title: 'Choisir des jeux mobiles calmes pour enfants : le guide',
    dek: 'La plupart des applis des jeunes enfants sont conçues pour manipuler. Une liste fondée sur la recherche pour repérer pressions, pubs et appâts.',
    imageAlt: 'Poppy et Bloo de part et d’autre d’un téléphone affichant un plateau OutBrick super difficile au niveau 520, avec des briques jaunes, orange et violettes qui flottent à côté',
    tags: ['jeux pour enfants', 'applis pour enfants', 'parents', 'jeux calmes', 'écrans et enfants'],
    intro: 'Choisir un jeu pour un enfant, autrefois, c’était vérifier l’absence de violence et de gros mots. Sur un téléphone ou une tablette, les grandes questions portent souvent sur la conception : le jeu pousse-t-il l’enfant à continuer de jouer, ses publicités se déguisent-elles en jeu, un personnage sympathique est-il en réalité un vendeur ? Les chercheurs ont désormais étudié ces mécanismes dans les applis qu’utilisent vraiment les jeunes enfants, et leurs résultats offrent aux parents une liste de vérification concrète. La voici, avec les données qui la fondent et un regard honnête sur la façon dont notre propre jeu s’en sort.',
    keyTakeaways: [
      'Dans une étude portant sur des applis utilisées par des enfants de 3 à 5 ans, seule une sur cinq ne présentait aucun élément de conception manipulatrice.',
      'Méfiez-vous des fausses urgences, des personnages qui culpabilisent l’enfant pour qu’il joue, des publicités déguisées en objets du jeu et des appâts pour continuer.',
      'La durée d’écran compte moins que ce qu’il y a à l’écran, et que votre présence à côté.',
    ],
    sections: {
      'manipulative-design': {
        title: 'Ce que les chercheurs ont trouvé dans les applis pour enfants',
        paragraphs: [
          'Radesky et ses collègues ont analysé les applis utilisées par 160 enfants de 3 à 5 ans et les ont codées selon leur conception manipulatrice, c’est-à-dire les éléments qui servent les intérêts de l’éditeur plutôt que ceux de l’enfant. La majorité en comportait au moins un. On y trouvait la pression par relation parasociale, quand un personnage que l’enfant aime l’incite à continuer de jouer ou à acheter quelque chose ; l’urgence fabriquée, comme les comptes à rebours et les offres à durée limitée ; les contraintes de navigation qui rendent la sortie difficile ; et des appâts attrayants, comme des prix et des coffres au trésor, conçus pour prolonger le jeu. Seules 20 % environ des applis ne présentaient aucun élément manipulateur, et les enfants de familles à revenus modestes jouaient à des applis qui en comptaient davantage.',
          'Une étude antérieure de la même équipe s’était penchée sur la publicité. Meyer et ses collègues ont examiné 135 applis populaires auprès des enfants de cinq ans et moins, et ont trouvé une forme de publicité dans 95 % d’entre elles : publicités qui interrompaient le jeu, incitations à acheter, personnages commerciaux et, dans une minorité d’applis, publicités cachées dans le jeu, déguisées en objets de jeu ou signalées par des symboles trompeurs. La publicité était présente dans toutes les applis gratuites examinées et dans la plupart des payantes, et tout aussi fréquente dans les applis dites éducatives.',
        ],
      },
      'why-it-matters': {
        title: 'Pourquoi la conception compte plus que les minutes',
        paragraphs: [
          'Les gros titres sur le temps d’écran parlent d’heures, mais les données les plus solides pointent le contenu et le contexte. Dans une vaste étude préenregistrée portant sur plus de 120 000 adolescents anglais, Przybylski et Weinstein ont constaté que la relation entre temps d’écran et bien-être suivait une courbe : un usage modéré n’était pas associé à un effet néfaste, et les effets aux niveaux plus élevés étaient faibles. L’étude portait sur des adolescents, pas sur des tout-petits, et elle ne peut rien dire de l’effet d’une appli en particulier. Mais elle corrige utilement l’idée que seules les minutes comptent.',
          'Pour les plus jeunes, Hirsh-Pasek et ses collègues se sont appuyés sur les sciences de l’apprentissage pour définir ce qui rend une appli vraiment éducative : l’enfant doit être actif, engagé sans distraction, faire quelque chose qui a du sens et, idéalement, interagir avec d’autres personnes. Quand Meyer et ses collègues ont appliqué cette grille à plus d’une centaine d’applis « éducatives » populaires, la plupart ont obtenu un score faible, et les applis gratuites obtenaient un score d’engagement plus bas à cause de leurs extras qui distraient. L’étiquette sur la page de la boutique en dit peu.',
        ],
      },
      'checklist': {
        title: 'Une liste de vérification pour des jeux calmes',
        paragraphs: [
          'Jouez vous-même dix minutes au jeu avant votre enfant, et passez en revue la liste ci-dessous. Très peu de jeux cocheront toutes les cases ; l’important est de savoir où se trouve la pression pour décider si elle vous convient. Nous décrivons ces points de pression de façon plus générale dans [ce qui rend un jeu de puzzle relaxant](/blog/relaxing-puzzle-games-what-makes-one-calm).',
        ],
        bullets: [
          'Pression du temps : y a-t-il un compte à rebours, une offre « à durée limitée » ou un événement qui expire ?',
          'Pression des personnages : un personnage sympathique prend-il un air triste, supplie-t-il ou gronde-t-il quand votre enfant arrête ou refuse d’acheter ?',
          'Publicités déguisées : votre enfant sait-il distinguer une publicité d’un objet du jeu ? Des publicités se lancent-elles sans que personne ne les demande ?',
          'Appâts : y a-t-il des coffres, des roues à tourner ou des séries conçus pour faire revenir l’enfant, et sont-ils liés à des achats ?',
          'Sorties : votre enfant peut-il s’arrêter à tout moment sans rien perdre, et la sortie est-elle facile à trouver ?',
          'Achats : les achats sont-ils protégés par Demander l’autorisation d’acheter ou un mot de passe, et les prix sont-ils affichés en argent réel ?',
          'Contenu : le jeu correspond-il à sa classification par âge, et y a-t-il un chat avec des inconnus ?',
        ],
      },
      'outbrick-honestly': {
        title: 'Comment s’en sort OutBrick, en toute honnêteté',
        paragraphs: [
          'C’est nous qui faisons OutBrick : voici donc comment il se situe par rapport à cette liste, y compris sur les points qu’un parent attentif pourrait questionner. Il n’y a aucun chrono nulle part ; chaque plateau affiche sa limite de coups avant le premier coup. Les neuf amis en briques parlent dans des bulles de texte, sans voix, et il n’y a pas de chat public. Le jeu est classé 4+, et la [page sur la classification par âge](/age-rating) (en anglais) explique pourquoi.',
          'OutBrick a bel et bien des vies et des publicités, et nous préférons que vous l’appreniez de nous. Vous avez cinq vies, et il en revient une toutes les trente minutes. Les publicités sont uniquement des vidéos récompensées, dans six emplacements, et une vidéo ne se lance que lorsqu’un joueur appuie sur un bouton pour la demander ; il n’y a ni bannières, ni publicités entre les niveaux, ni publicité à l’ouverture de l’app. Il y a une Brick Wheel à faire tourner, qu’un enfant peut apprécier et dont un parent peut raisonnablement vouloir parler. Les achats intégrés facultatifs sont gérés par Apple, et un achat unique « Supprimer les pubs » coupe entièrement la publicité. La page d’accueil détaille [exactement ce que coûtent les vies, les annulations et les publicités](/#fair). Si quelque chose ne convient pas à votre famille, c’est une décision légitime.',
        ],
      },
      'being-part-of-it': {
        title: 'Être présent',
        paragraphs: [
          'L’essentiel des effets néfastes décrits par la recherche vient d’un enfant seul face à un système conçu pour le retenir. La protection la plus simple est d’être à proximité, et parfois de jouer aussi. Parlez de la raison pour laquelle un personnage réclame de l’argent, ou pour laquelle un coffre est apparu juste au moment où le jeu devenait difficile ; les enfants comprennent la persuasion bien mieux qu’on ne le croit quand on la leur montre. Radesky, Schumacher et Zuckerman l’ont souligné très tôt : ce que font les adultes autour de l’usage des médias par un jeune enfant compte.',
          'Utilisez les outils de l’appareil comme filet de sécurité plutôt que comme substitut. Sur iPhone et iPad, Temps d’écran permet de fixer des limites et d’exiger une autorisation pour les achats grâce au Partage familial. L’Académie américaine de pédiatrie propose un [plan média familial](https://www.healthychildren.org/English/fmp/Pages/MediaPlan.aspx) (en anglais) qui peut vous aider à fixer les règles ensemble. Pour des jeux qui font réfléchir sans pression, notre article sur [les puzzles et les fonctions exécutives de l’enfant](/blog/puzzles-executive-function-children) donne des idées pour jouer ensemble.',
        ],
      },
    },
    pullQuote: 'L’essentiel des effets néfastes décrits par la recherche vient d’un enfant seul face à un système conçu pour le retenir.',
    faqs: [
      { question: 'Qu’est-ce que la conception manipulatrice dans les applis pour enfants ?', answer: 'Une conception qui sert l’éditeur plutôt que l’enfant : personnages qui poussent l’enfant à continuer de jouer ou à acheter, faux comptes à rebours, sorties difficiles à trouver et prix conçus pour prolonger le jeu. Une étude l’a relevée dans environ 80 % des applis utilisées par des enfants de 3 à 5 ans.' },
      { question: 'Comment savoir si un jeu est assez calme pour mon enfant ?', answer: 'Jouez-y d’abord vous-même et vérifiez s’il y a des comptes à rebours, des publicités qui se lancent sans être demandées, des personnages qui culpabilisent votre enfant, des appâts comme des coffres ou des roues à tourner, et si votre enfant peut s’arrêter à tout moment sans rien perdre.' },
      { question: 'Les jeux gratuits sont-ils pires pour les enfants que les jeux payants ?', answer: 'La recherche a trouvé de la publicité dans toutes les applis gratuites pour enfants étudiées et dans la plupart des payantes, et les applis gratuites obtenaient un score de qualité éducative plus bas à cause de leurs extras qui distraient. Payer ne garantit pas un jeu calme, mais supprime souvent une partie de la pression.' },
      { question: 'OutBrick contient-il des publicités ?', answer: 'Oui, uniquement des vidéos récompensées, et chacune ne se lance que lorsqu’un joueur appuie sur un bouton pour la demander. Il n’y a ni bannières ni publicités entre les niveaux, et « Supprimer les pubs » les désactive. La page d’accueil détaille [ce que coûtent les vies, les annulations et les publicités](/#fair).' },
    ],
  },
  'dyslexia-friendly-game-text': {
    title: 'Dyslexie et jeux vidéo : polices, espacement, mots simples',
    dek: 'Les polices pour dyslexiques marchent-elles ? Ce que disent les études sur police, taille, espacement et mots, et comment rendre un jeu plus lisible.',
    imageAlt: 'Peach et Vio de part et d’autre d’un téléphone affichant l’étape Cloud Carnival de la carte du Voyage d’OutBrick, avec des briques jaunes, orange et violettes qui flottent à côté',
    tags: ['dyslexie', 'police dyslexie', 'lisibilité', 'accessibilité', 'conception de jeux'],
    intro: 'Les jeux sont pleins de mots : tutoriels, infobulles, menus, bulles de dialogue, petites lignes sous une récompense. Pour les joueurs dyslexiques, un texte mal composé peut transformer un jeu agréable en épreuve de lecture. Bonne nouvelle : la recherche sur ce qui aide est assez claire, et une partie contredit les idées reçues. Les polices spécialement conçues pour la dyslexie, par exemple, n’ont pas vraiment convaincu dans les études. La taille, l’espacement et la simplicité des mots, si. Voici ce que disent les données et comment nous essayons de les appliquer.',
    keyTakeaways: [
      'Les études contrôlées n’ont trouvé aucun bénéfice pour la lecture aux polices spécialisées pour la dyslexie comme OpenDyslexic et Dyslexie.',
      'Un texte plus grand et un espacement accru entre les lettres ont les meilleures preuves. Les polices sans empattement courantes s’en sortent bien ; l’italique, mal.',
      'Dans les jeux, les plus grands progrès viennent de textes plus courts, de mots simples, d’un texte qui attend le joueur et d’un sens porté par des icônes autant que par des mots.',
    ],
    sections: {
      'dyslexia-fonts': {
        title: 'Les polices pour dyslexiques fonctionnent-elles ?',
        paragraphs: [
          'Les polices conçues pour les lecteurs dyslexiques, avec leur base alourdie et leurs formes de lettres exagérées, sont largement recommandées. Les données contrôlées ne leur sont pas favorables. Wery et Diliberto ont comparé OpenDyslexic à Arial et Times New Roman chez des élèves du primaire dyslexiques, sur la dénomination de lettres, la lecture de mots et la lecture de non-mots, et n’ont constaté aucune amélioration de la vitesse ni de la précision, ni pour aucun enfant pris individuellement, ni pour le groupe. Aucun des enfants n’a dit la préférer.',
          'Kuster et ses collègues ont testé la police Dyslexie dans deux expériences menées auprès de plus de 250 enfants dyslexiques et d’un groupe de comparaison non dyslexique. Textes et listes de mots en Dyslexie n’étaient lus ni plus vite ni plus justement qu’en Arial ou en Times New Roman, la plupart des enfants préféraient les polices ordinaires, et cette préférence n’avait aucun lien avec leur niveau de lecture. Dans une étude par oculométrie de Rello et Baeza-Yates, qui comparait différentes polices auprès de lecteurs dyslexiques, OpenDyslexic n’améliorait pas non plus la lecture. Le choix de la police comptait pourtant dans cette étude : les polices sans empattement, à chasse fixe et les styles romains aidaient, tandis que l’italique rendait la lecture plus difficile.',
          'Rien de tout cela ne signifie qu’une personne qui aime une police pour dyslexiques doive cesser de l’utiliser. Le confort compte, et si une police donne l’impression de lire plus facilement, c’est une bonne raison de s’en servir. Cela signifie en revanche qu’un jeu ne doit pas considérer une police spéciale comme la réponse à tout.',
        ],
      },
      'size-and-spacing': {
        title: 'Ce qui aide vraiment : la taille et l’espacement',
        paragraphs: [
          'Le changement le mieux étayé est l’espace entre les lettres. Zorzi et ses collègues ont constaté qu’un espacement très large améliorait immédiatement la lecture, sans entraînement, dans un large échantillon d’enfants dyslexiques italiens et français. Leur explication est l’encombrement visuel : beaucoup de lecteurs dyslexiques sont particulièrement gênés par des lettres trop rapprochées, et les espacer atténue le problème. Stagg et Kiss ont observé la même chose chez des adolescents : un espacement très large améliorait davantage la vitesse de lecture du groupe dyslexique que celle de leurs pairs et réduisait les mots sautés, tandis que les filtres colorés ne faisaient pas de différence significative.',
          'La taille aide aussi. Dans une autre étude par oculométrie, Rello et Baeza-Yates ont constaté qu’un texte plus grand et un espacement des caractères plus large permettaient aux lecteurs, dyslexiques ou non, de lire nettement plus vite. Une étude plus vaste sur la lisibilité en ligne, menée par Rello, Pielot et Marcos, a montré que lisibilité et compréhension augmentaient avec la taille de police, et recommandait un texte d’au moins 18 points pour les pages riches en texte ; un interlignage plus grand, en revanche, n’aidait pas. La leçon pratique : laisser le texte grandir, et éviter que les lettres ne se serrent.',
        ],
      },
      'game-text': {
        title: 'Ce que cela implique pour le texte des jeux',
        paragraphs: [
          'Les jeux ont des habitudes particulières qui compliquent la lecture. Contrairement à un livre, un jeu vous demande souvent de lire pendant qu’il se passe autre chose, et d’agir aussitôt sur ce que vous avez lu. Polices de titrage stylisées, texte posé sur des arrière-plans chargés, dialogues qui défilent tout seuls, instructions affichées une fois dans une fenêtre surgissante puis plus jamais : tout cela alourdit la lecture. Rien de tout cela n’est nécessaire. La plupart des solutions reviennent à respecter le rythme du lecteur.',
        ],
        bullets: [
          'Utilisez une police sans empattement claire pour tout ce qu’un joueur doit lire, et réservez les lettrages décoratifs aux titres.',
          'N’utilisez jamais l’italique pour des instructions ou de longs passages.',
          'Prenez en charge la taille de texte du système pour que le texte grandisse quand le joueur le demande, et laissez de l’espace aux lettres.',
          'Placez le texte sur un panneau uni et bien contrasté, pas par-dessus la scène du jeu.',
          'Laissez le joueur faire avancer lui-même les dialogues. Ne faites jamais disparaître un texte au bout d’un délai.',
          'Associez les mots à des icônes, pour qu’un joueur puisse reconnaître un bouton sans le lire.',
          'Faites en sorte que les instructions restent faciles à retrouver après le tutoriel.',
        ],
        note: 'Le contraste compte pour tous les lecteurs, et plus encore avec l’âge. Nous en parlons dans [concevoir des jeux pour des yeux et des mains qui vieillissent](/blog/designing-games-for-older-players).',
      },
      'plain-words': {
        title: 'Des mots simples font partie de l’accessibilité',
        paragraphs: [
          'La typographie a ses limites. Les mots eux-mêmes comptent tout autant. Des phrases courtes, des mots courants, une idée par ligne et le mot le plus important en premier aident les lecteurs dyslexiques, et tous les autres aussi, en particulier les jeunes joueurs et ceux qui jouent dans une langue qui n’est pas la leur. Les recommandations du W3C sur le [niveau de lecture](https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html) (en anglais) défendent la même idée pour le web. Nous faisons une remarque voisine au sujet de la couleur dans [pourquoi la couleur ne devrait jamais être le seul indice d’un puzzle](/blog/color-shape-accessibility) : une information importante ne doit jamais dépendre d’un seul canal, et pour beaucoup de joueurs, le texte est un canal difficile.',
          'Pour nous, c’est un sujet qui nous tient à cœur. Les neuf amis en briques d’OutBrick ne parlent que dans des bulles de texte, sans voix : la façon dont ces bulles sont écrites compte donc. Nous les gardons courtes, et l’objectif d’un plateau se lit dans ses briques et ses portes plutôt que dans des instructions : chaque brique sort par la porte de sa couleur, et la limite de coups prend la forme d’une corde. Texte plus grand s’applique partout. Pour voir combien un plateau demande peu de lecture, [jouez-en un dans votre navigateur](/play).',
        ],
      },
      'for-players': {
        title: 'Conseils aux joueurs dyslexiques',
        paragraphs: [
          'Sur iPhone et iPad, Réglages, Accessibilité, Affichage et taille du texte propose Texte plus grand et Texte en gras, et les jeux bien conçus respectent les deux. Contenu énoncé, dans le même menu Accessibilité, peut lire à voix haute le texte sélectionné, et Énoncer l’écran lit tout ce qui est affiché quand vous balayez vers le bas avec deux doigts depuis le haut. Cherchez des jeux dont les menus utilisent des icônes en plus des mots, et n’hésitez pas à utiliser les options de taille de texte ou de sous-titres propres à chaque jeu. Les menus de réglages des jeux sont rarement soignés ; ceux qui conviennent bien aux joueurs dyslexiques conviennent en général à tout le monde. Pour en savoir plus sur la façon dont les réglages et la difficulté peuvent ouvrir les jeux, voyez [ce que nous apprend le mode Assistance de Celeste](/blog/celeste-assist-mode-accessibility).',
          'Surtout, la dyslexie ne dit rien du talent d’un joueur. Beaucoup de joueurs dyslexiques excellent dans les jeux spatiaux et stratégiques, qui demandent des compétences très différentes de la lecture. Un jeu qui soigne son texte cesse simplement de dresser devant eux un obstacle inutile. Si le texte d’OutBrick vous gêne quelque part, notre [page d’assistance](/support) (en anglais) est l’endroit où nous dire où.',
        ],
      },
    },
    pullQuote: 'Cela signifie en revanche qu’un jeu ne doit pas considérer une police spéciale comme la réponse à tout.',
    faqs: [
      { question: 'Quelle est la meilleure police pour la dyslexie ?', answer: 'Les études n’ont pas trouvé de meilleure police unique. Les polices sans empattement courantes comme Arial et Verdana s’en sortent bien, l’italique s’en sort mal, et les polices spécialisées pour la dyslexie n’ont pas amélioré la lecture dans les études contrôlées.' },
      { question: 'Les polices pour dyslexiques comme OpenDyslexic fonctionnent-elles ?', answer: 'Les études contrôlées sur OpenDyslexic et Dyslexie n’ont constaté aucune amélioration de la vitesse ni de la précision de lecture chez les enfants dyslexiques. Certaines personnes les trouvent tout de même confortables, ce qui est une très bonne raison de les utiliser.' },
      { question: 'Qu’est-ce qui rend un texte plus facile à lire pour les personnes dyslexiques ?', answer: 'Un texte plus grand et un espacement accru entre les lettres ont les preuves les plus solides. Des mots simples, des phrases courtes et un texte sur un fond clair et bien contrasté aident aussi.' },
      { question: 'OutBrick demande-t-il beaucoup de lecture ?', answer: 'Très peu. Les plateaux se lisent à travers les briques, les portes, un nombre de coups et une corde, et les bulles de texte des amis en briques restent courtes. Texte plus grand s’applique partout.' },
    ],
  },
  'designing-games-for-older-players': {
    title: 'Concevoir des jeux pour seniors : lisibles et indulgents',
    dek: 'Vue, toucher et réflexes évoluent avec l’âge : ce que cela implique pour le contraste, les cibles et le rythme, et des principes valables à 80 ans.',
    imageAlt: 'Zippy et Bloo de part et d’autre d’un téléphone affichant l’étape Autumn Orchard de la carte du Voyage d’OutBrick, avec des briques bleues, jaunes et turquoise qui flottent à côté',
    tags: ['jeux pour seniors', 'conception de jeux', 'accessibilité', 'vieillissement et vision', 'conception inclusive'],
    intro: 'Nous avons déjà expliqué comment un joueur âgé peut choisir un bon jeu de puzzle. Cet article s’adresse à l’autre côté de l’écran : aux designers et développeurs qui veulent que leur jeu fonctionne pour des personnes de soixante-dix ou quatre-vingts ans. Il s’appuie sur la recherche consacrée à l’évolution de la vue, du mouvement et de la vitesse avec l’âge, et la traduit en quelques principes. Aucun n’est exotique. La plupart améliorent le jeu pour tout le monde, ce qui est le meilleur argument pour les appliquer.',
    keyTakeaways: [
      'Le vieillissement touche la sensibilité aux contrastes, la vision en faible lumière et la vitesse de traitement, pas seulement la netteté. La taille seule ne règle pas le problème.',
      'Les écrans tactiles réduisent l’écart entre utilisateurs âgés et jeunes, mais les petites cibles et les glisser-déposer précis coûtent toujours plus cher aux joueurs âgés.',
      'L’âge prédit mal les capacités. Concevez pour un éventail de capacités, avec des réglages, pas pour un stéréotype.',
    ],
    sections: {
      'how-vision-changes': {
        title: 'Comment la vue change, au-delà des lunettes',
        paragraphs: [
          'La synthèse de Cynthia Owsley sur vingt-cinq ans de recherche consacrée au vieillissement et à la vision corrige utilement l’idée que des yeux âgés ont simplement besoin d’un texte plus grand. Parmi les changements qu’elle décrit : une perte de sensibilité aux contrastes, qui rend difficile de distinguer du gris pâle sur du blanc ou du bleu foncé sur du noir ; une moins bonne vision en faible lumière ; une récupération plus lente après un éblouissement ; une sensibilité réduite au scintillement et au mouvement ; et un traitement visuel plus lent, qui fait qu’il faut plus de temps pour saisir ce qui est affiché.',
          'Chacun de ces changements a une conséquence pour la conception. La perte de sensibilité aux contrastes plaide pour un fort contraste entre le texte et le fond, et entre les pièces du jeu et le plateau, pas seulement pour de grands caractères. La moins bonne vision en faible lumière compte pour les jeux joués au lit ou le soir sur le canapé, où les thèmes sombres et les palettes ternes sont courants. Le traitement plus lent plaide contre les informations qui s’affichent brièvement ou changent vite. La synthèse de Hawthorn sur le vieillissement à l’intention des concepteurs d’interfaces, vieille aujourd’hui d’un quart de siècle, tirait bon nombre des mêmes conclusions et reste une bonne liste de vérification.',
          'La perception des couleurs change aussi. Le cristallin jaunit avec l’âge, et les bleus et les violets en particulier deviennent plus difficiles à distinguer, un schéma différent des confusions rouge-vert du daltonisme héréditaire. Un jeu qui repose sur une nuance subtile entre deux bleus peut devenir injouable pour un joueur âgé sans que personne dans l’équipe ne s’en aperçoive. Notre article sur [le daltonisme dans les jeux vidéo](/blog/colour-blindness-in-games) explique pourquoi un symbole sur chaque pièce colorée aide dans les deux cas.',
        ],
      },
      'how-hands-change': {
        title: 'Comment le mouvement change',
        paragraphs: [
          'La synthèse de Seidler et ses collègues sur le contrôle moteur et le vieillissement décrit des mouvements plus lents, une coordination réduite et une motricité fine plus variable, liés à des changements dans les systèmes moteurs du cerveau. Chez beaucoup de personnes, tremblements et arthrose s’y ajoutent. Sur un écran tactile, cela se traduit par plus de touchers ratés, plus de touchers accidentels et plus de difficultés avec les gestes qui doivent être précis ou rapides.',
          'Les écrans tactiles restent pourtant bien adaptés aux utilisateurs âgés. Findlater et ses collègues ont comparé des adultes âgés et plus jeunes sur des tâches de pointage, de glisser-déposer et autres, à la souris et sur écran tactile. Les adultes âgés étaient plus lents dans l’ensemble, mais l’écran tactile réduisait l’écart : il diminuait leur temps de mouvement de 35 % par rapport à la souris, contre 16 % chez les plus jeunes, et les erreurs baissaient aussi. Motti, Vigouroux et Gorce, qui ont testé le glisser-déposer dans des jeux de puzzle tactiles auprès de 24 personnes de 65 à 86 ans, l’ont jugé efficace même sur smartphone, même si un stylet améliorait la précision. La leçon n’est pas d’éviter le tactile, mais de prévoir des cibles généreuses.',
        ],
      },
      'age-is-not-ability': {
        title: 'L’âge est un mauvais indicateur des capacités',
        paragraphs: [
          'On est tenté de créer un « mode facile pour seniors ». La recherche suggère que ce serait une erreur. Findlater et Zhang ont recueilli des données de saisie auprès de plus de 700 personnes et en ont analysé 318, âgées de 18 à 83 ans. En moyenne, les performances baissaient régulièrement avec l’âge, mais les individus variaient tellement que connaître l’âge de quelqu’un, ou même savoir s’il déclarait un trouble moteur, en disait peu sur ses performances réelles. L’étude de Motti a vu certains participants de plus de 80 ans faire mieux que des personnes de soixante-dix ans.',
          'Concevez donc pour un éventail. Prévoyez les réglages qui permettent à chaque joueur de s’adapter, respectez les réglages système qu’il a déjà choisis, et rendez les valeurs par défaut assez généreuses pour que la plupart des gens n’aient jamais besoin de les modifier. Notre [liste de critères pour les joueurs seniors](/blog/puzzle-games-for-older-adults) montre à quoi cela ressemble de l’autre côté.',
        ],
      },
      'principles': {
        title: 'Cinq principes : lisible, touchable, indulgent, sans hâte, prévisible',
        paragraphs: [
          'Mis bout à bout, les résultats de la recherche aboutissent à cinq principes. Ils recoupent les [recommandations sur la taille des cibles](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) (en anglais) de la norme d’accessibilité du web, et ce que nous avons appris en créant un jeu de puzzle.',
          'Le test le plus utile est aussi le moins cher : mettez le jeu entre les mains de quelques personnes de soixante-dix ou quatre-vingts ans, et regardez-les jouer sans les aider. Là où elles hésitent, plissent les yeux, touchent deux fois ou demandent ce que signifie quelque chose, la conception leur a fait défaut, et en général elle a aussi fait défaut, plus discrètement, à bien des joueurs plus jeunes. Vous pouvez faire le même exercice avec nous en tendant à quelqu’un un [plateau dans le navigateur](/play).',
        ],
        bullets: [
          'Lisible : un contraste élevé partout, une police sans empattement claire qui suit la taille de texte du système, rien d’important en texte fin, pâle ou petit.',
          'Touchable : de grandes cibles espacées les unes des autres, placées à portée de pouce, et des gestes qui ne demandent qu’un doigt et aucune vitesse.',
          'Indulgent : une annulation facile, une confirmation avant toute action coûteuse, et aucune pénalité pour un toucher involontaire.',
          'Sans hâte : aucun minuteur pendant le jeu ordinaire, aucune information qui passe en un éclair, et la liberté de s’arrêter à tout moment sans rien perdre.',
          'Prévisible : des mises en page et des commandes cohérentes, aucune fenêtre surgissante inattendue, et de nouvelles mécaniques introduites une à la fois.',
        ],
      },
      'in-practice': {
        title: 'Comment cela se traduit dans OutBrick',
        paragraphs: [
          'Voici comment nous avons essayé d’appliquer ces principes, et où se trouvent les limites. Chaque brique porte son identité dans sa teinte, sa forme et ses tenons, et les symboles du mode daltonien sont activés par défaut, ce qui aide aussi pour les confusions entre bleu et violet qui deviennent fréquentes avec l’âge. Texte plus grand s’applique partout, et Réduire les animations est respecté partout. Il n’y a jamais de chrono : chaque plateau affiche sa limite de coups avant le premier coup, et la première annulation de chaque plateau est gratuite. Clés, cadenas, caisses et portes n’apparaissent que sur les plateaux plus avancés, une fois les bases acquises. La progression se synchronise via iCloud : ce que vous jouez sur iPhone se retrouve sur le plus grand écran d’un iPad.',
          'Nous n’avons pas tout résolu. Faire glisser une brique reste un geste orienté, et certains joueurs le trouveront plus difficile qu’un simple toucher. C’est pourquoi la [page consacrée à l’accessibilité](/accessibility) (en anglais) demande des détails précis quand une commande est difficile à atteindre ou à lire. Pour le cas voisin des joueurs ayant un trouble moteur, voyez [jouer d’une main sur iPhone](/blog/one-handed-games-iphone).',
        ],
      },
    },
    pullQuote: 'Concevez pour un éventail de capacités, avec des réglages, pas pour un stéréotype.',
    faqs: [
      { question: 'Comment concevoir des jeux pour les seniors ?', answer: 'Utilisez un contraste élevé et un texte qui s’agrandit, des cibles tactiles grandes et bien espacées, une annulation facile, aucun minuteur pendant le jeu ordinaire, et des mises en page cohérentes et prévisibles. La plupart de ces changements aident tous les joueurs.' },
      { question: 'Les écrans tactiles conviennent-ils aux personnes âgées ?', answer: 'En général, oui. Une étude a montré qu’un écran tactile réduisait de 35 % le temps de mouvement des adultes âgés par rapport à une souris, ce qui resserrait l’écart avec les plus jeunes, même si les petites cibles et les gestes précis causent toujours plus d’erreurs.' },
      { question: 'Pourquoi le contraste compte-t-il plus que la taille du texte pour les joueurs âgés ?', answer: 'Le vieillissement réduit la sensibilité aux contrastes et la vision en faible lumière : un texte pâle ou peu contrasté reste difficile à lire même en grand. Un fort contraste et un texte plus grand fonctionnent le mieux ensemble.' },
      { question: 'Les jeux devraient-ils avoir un mode spécial seniors ?', answer: 'La recherche sur les performances de saisie montre que l’âge prédit mal les capacités individuelles. Des valeurs par défaut généreuses et des réglages ajustables servent mieux les joueurs âgés qu’un mode à part fondé sur des présupposés liés à l’âge.' },
    ],
  },
  'sensory-friendly-game-design': {
    title: 'Jeux adaptés aux sensibilités sensorielles et à l’autisme',
    dek: 'Beaucoup de joueurs autistes et neuroatypiques sont sensibles au son, à la lumière et à la surprise. Ce que dit la recherche, et le design qui aide.',
    imageAlt: 'Moss et Poppy de part et d’autre d’un téléphone affichant un plateau OutBrick super difficile au niveau 520, avec des briques turquoise, vertes et bleues qui flottent à côté',
    tags: ['autisme', 'neurodiversité', 'hypersensibilité sensorielle', 'jeux calmes', 'conception inclusive'],
    intro: 'Pour beaucoup de personnes autistes, et pour beaucoup d’autres qui traitent les sensations différemment, le jeu vidéo moderne, c’est beaucoup. Une musique qu’on ne peut pas baisser séparément, des effets sonores soudains, des célébrations qui clignotent, une notification qui tombe au milieu d’une pensée, un menu qui change sans prévenir. Rien de tout cela n’est conçu pour exclure qui que ce soit, et pourtant tout cela peut le faire. Cet article fait le point sur ce que dit la recherche sur les particularités sensorielles et le jeu, et sur les choix de conception qui rendent un jeu prévisible, calme et sans pression, sans le rendre ennuyeux.',
    keyTakeaways: [
      'Les particularités sensorielles, hyper- comme hyporéactivité, sont fréquentes chez les personnes autistes et varient beaucoup d’une personne à l’autre.',
      'Pour beaucoup de joueurs autistes, le jeu est une part appréciée, souvent sociale, de la vie. La recherche devrait viser de meilleurs jeux, pas moins de jeu.',
      'Une conception adaptée aux sensibilités sensorielles repose surtout sur le contrôle : des réglages séparés de volume et d’effets, des retours prévisibles et aucune surprise.',
    ],
    sections: {
      'sensory-differences': {
        title: 'Des particularités sensorielles fréquentes et variées',
        paragraphs: [
          'En 2019, Ben-Sasson et ses collègues ont mis à jour leur méta-analyse sur les symptômes sensoriels dans l’autisme, en regroupant 55 études par questionnaire portant sur plus de 4 600 personnes autistes. Par rapport à leurs pairs au développement typique, les personnes autistes signalaient beaucoup plus d’hyperréactivité (sons, lumières ou textures vécus comme envahissants), d’hyporéactivité (certaines sensations passant inaperçues) et de recherche de sensations. Les écarts étaient importants, mais les résultats variaient aussi beaucoup selon les études et les personnes, ce qui rappelle qu’il n’existe pas de profil sensoriel autistique unique.',
          'La sensibilité sensorielle ne se limite pas aux personnes diagnostiquées. Robertson et Simmons ont interrogé 212 adultes de la population générale et trouvé un lien fort entre le nombre de traits autistiques qu’une personne déclarait et la fréquence de ses difficultés de traitement sensoriel. Concevoir pour le confort sensoriel n’a donc rien d’une préoccupation de niche. Cela aide un large éventail de joueurs, y compris les personnes migraineuses, anxieuses ou simplement fatiguées au terme d’une longue journée.',
        ],
      },
      'language': {
        title: 'Un mot sur le vocabulaire',
        paragraphs: [
          'Les mots comptent ici, et il n’y a pas de réponse unique. Kenny et ses collègues ont demandé à plus de 3 400 membres de la communauté autistique britannique quels termes ils préféraient. « Autisme » et « sur le spectre de l’autisme » étaient largement acceptés. « Autiste » était approuvé par beaucoup d’adultes autistes et de familles, mais par moins de professionnels, tandis que « personne avec autisme » plaisait davantage aux professionnels qu’aux adultes autistes. Aucun terme ne faisait l’unanimité. Dans cet article, nous disons le plus souvent « personnes autistes », selon la préférence de nombreux adultes autistes, et « neuroatypiques » pour le groupe plus large, tout en reconnaissant que chacun choisit différemment.',
          'Nous évitons aussi le cadrage médical. Les particularités sensorielles font partie de la façon dont certaines personnes vivent le monde ; ce n’est pas quelque chose qu’un jeu devrait chercher à corriger. Le guide de la National Autistic Society sur les [particularités sensorielles](https://www.autism.org.uk/advice-and-guidance/topics/sensory-differences/sensory-differences/all-audiences) (en anglais) en offre une bonne introduction en langage clair.',
        ],
      },
      'what-autistic-players-say': {
        title: 'Ce que montre la recherche menée avec des joueurs autistes',
        paragraphs: [
          'Une grande partie des premières recherches sur l’autisme et les jeux vidéo portait sur les risques. Quand Mazurek, Engelhardt et Clark ont interrogé directement des adultes autistes, un tableau plus complet est apparu. Les jeux occupaient une place importante et agréable dans la vie de nombreux participants, appréciés pour le divertissement, la détente, le soulagement du stress et le lien social, à côté de certaines inquiétudes sur le temps passé à jouer. L’étude ethnographique de Ringland sur une communauté Minecraft créée pour des enfants autistes a montré qu’un monde virtuel encadré avec soin pouvait offrir aux enfants un endroit confortable où jouer avec leurs pairs, et soutenait que de tels espaces ne sont pas moins réels qu’une cour de récréation.',
          'Spiel et Gerling ont passé en revue 66 articles de recherche sur les jeux destinés aux joueurs neuroatypiques et se sont montrés critiques envers le domaine. La plupart des jeux étaient conçus pour des enfants, selon une démarche descendante, avec un but éducatif ou thérapeutique, et façonnés par un modèle médical du handicap plutôt que par ce que les joueurs neuroatypiques eux-mêmes apprécient. Leur conclusion vaut pour tout concepteur : créer des jeux auxquels les personnes neuroatypiques ont envie de jouer, et leur donner le contrôle, plutôt que des jeux qui cherchent à les changer.',
          'Cela implique aussi de prendre au sérieux la dimension sociale du jeu, à laquelle tiennent beaucoup de joueurs autistes, ainsi que les pressions qui peuvent l’accompagner. Modes compétitifs, classements publics et discussions avec des inconnus conviennent à certains joueurs et en submergent d’autres. Un jeu peut les proposer sans les imposer, pour qu’un joueur qui veut un puzzle tranquille et solitaire n’ait jamais à traverser des sollicitations sociales pour le trouver.',
        ],
      },
      'design-principles': {
        title: 'À quoi ressemble une conception adaptée aux sensibilités sensorielles',
        paragraphs: [
          'Le fil conducteur, c’est le contrôle. Les gens diffèrent quant aux sensations qu’ils trouvent difficiles : l’objectif n’est donc pas un « mode calme » unique, mais la possibilité de monter, baisser ou couper chaque canal, et un jeu qui se comporte de la même façon à chaque fois.',
          'La prévisibilité mérite une attention particulière, car les jeux misent si souvent sur la surprise. Un événement soudain peut ravir un joueur et en angoisser un autre. La réponse n’est pas de supprimer toute nouveauté, mais de l’annoncer : prévenir le joueur qu’une nouvelle mécanique arrive, le laisser la découvrir à l’avance, et garder stables les règles du monde une fois qu’elles sont apprises. La routine peut être un plaisir en soi, et c’est en partie ce qui fait l’attrait d’un [plateau du jour](/daily) (en anglais) qui arrive à la même heure, sous la même forme, chaque jour.',
        ],
        bullets: [
          'Des réglages séparés pour la musique, les effets sonores et les vibrations, chacun pouvant être entièrement coupé.',
          'Respecter le réglage système Réduire les animations, et ne jamais faire clignoter de grandes zones de l’écran.',
          'Des retours prévisibles : la même action produit toujours le même son, la même animation et le même résultat.',
          'Aucune surprise : pas de fenêtre surgissante en pleine partie, pas de son fort et soudain, et un avertissement avant l’apparition de toute nouveauté.',
          'Pouvoir faire une pause ou s’arrêter à tout moment sans rien perdre, sans chrono qui presse le joueur.',
          'Des instructions claires et littérales qu’on peut retrouver, et des menus cohérents qui ne se réorganisent pas d’eux-mêmes.',
          'Des récompenses et des célébrations brèves, qu’on peut atténuer.',
        ],
      },
      'outbrick': {
        title: 'Où en est OutBrick',
        paragraphs: [
          'Nous n’avons pas conçu OutBrick pour un groupe en particulier, mais beaucoup de ces principes nous tiennent à cœur. Le son, la musique, les vibrations et les notifications peuvent chacun être coupés dans les Réglages. Réduire les animations est respecté partout, ce qui atténue la parallaxe, les confettis et les transitions à effet ressort. Les neuf amis en briques parlent dans des bulles de texte, jamais à voix haute, si bien que le jeu peut être entièrement silencieux. Il n’y a pas de chrono : chaque plateau affiche sa limite de coups avant le premier coup, et un glissement se comporte toujours de la même façon, la brique filant jusqu’à ce que quelque chose l’arrête. Rien n’interrompt un plateau, et les publicités sont des vidéos récompensées qui ne se lancent que lorsqu’un joueur appuie sur un bouton pour les demander.',
          'Certains joueurs trouveront peut-être certaines parties du jeu chargées, comme les célébrations ou la carte du Voyage, et nous aimerions le savoir. La [page consacrée à l’accessibilité](/accessibility) (en anglais) explique comment nous joindre. Pour en savoir plus sur la conception apaisante, voyez [ce qui rend un jeu de puzzle relaxant](/blog/relaxing-puzzle-games-what-makes-one-calm) et [pourquoi réduire les animations](/blog/reduce-motion-games), et pour savoir quand poser un jeu, [quand jouer et quand faire une pause](/blog/when-to-play-and-when-to-pause).',
        ],
      },
    },
    pullQuote: 'Leur conclusion vaut pour tout concepteur : créer des jeux auxquels les personnes neuroatypiques ont envie de jouer, et leur donner le contrôle, plutôt que des jeux qui cherchent à les changer.',
    faqs: [
      { question: 'Qu’est-ce qui rend un jeu adapté aux sensibilités sensorielles ?', answer: 'Des réglages séparés pour la musique, les effets sonores et les vibrations, le respect de Réduire les animations, des retours prévisibles, aucun son soudain ni fenêtre surgissante, et la liberté de faire une pause ou d’arrêter à tout moment sans perdre sa progression.' },
      { question: 'Les jeux vidéo sont-ils bons pour les personnes autistes ?', answer: 'La recherche menée avec des adultes autistes montre que les jeux sont souvent une source appréciée de plaisir, de détente et de lien social. Comme pour tout le monde, le choix des jeux et un bon équilibre comptent davantage que les jeux en général.' },
      { question: 'Quels réglages iPhone aident les joueurs sensibles au son et à la lumière ?', answer: 'Réduire les animations, dans Accessibilité, Mouvement, adoucit les animations des apps qui le respectent ; les modes de concentration retiennent les notifications pendant que vous jouez ; et les vibrations du système peuvent être coupées dans Sons et vibrations. Vérifiez ensuite les réglages audio et d’effets propres à chaque jeu.' },
      { question: 'Peut-on jouer à OutBrick en silence ?', answer: 'Oui. Le son, la musique, les vibrations et les notifications peuvent chacun être coupés dans les Réglages, et les amis en briques ne parlent que dans des bulles de texte : on peut jouer dans un silence complet.' },
    ],
  },
};
