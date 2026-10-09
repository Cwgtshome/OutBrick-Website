import type { HelpArticle } from '../../model.ts';

/**
 * Le rayon encyclopédie (« learn »), en français : briques spéciales et combos, chaque obstacle,
 * couvercle et porte, et les douze types de plateaux. Vérifié avec les règles et les plateaux de la 5.1.1 (68).
 */
export const learnArticles: HelpArticle[] = [
  {
    slug: 'special-bricks-and-combos',
    category: 'learn',
    cover: 'board-slide',
    title: 'Briques spéciales et combos : le guide complet',
    summary:
      'Comment créer chaque brique spéciale, ce que chacune fait disparaître exactement, les trois façons de la déclencher, chaque association de deux spéciales, et comment s’articulent cascades, score, étoiles et bonus des coups restants.',
    keywords:
      'spéciale spéciales brique spéciale fusée rayé rayée rayon rayon de ligne bombe emballée bombe de couleur arc-en-ciel fléchette tête chercheuse poisson coccinelle tondeuse papillon combo combiner deux spéciales cascade réaction en chaîne score points étoiles coups restants fin de plateau bonus',
    host: 'bricko',
    hostPose: 'cheer',
    sections: [
      {
        id: 'quick',
        title: 'Aide-mémoire',
        blocks: [
          {
            t: 'p',
            text: 'Une brique spéciale se crée chaque fois qu’un alignement dépasse la simple ligne de trois. Elle reste sur le plateau, en attente, jusqu’à ce que vous la déclenchiez. Il en existe quatre :',
          },
          {
            t: 'table',
            head: ['Spéciale', 'Créée par', 'Ce qu’elle fait disparaître', 'Se déclenche en'],
            rows: [
              ['[Rayon de ligne](#line-blaster)', 'Quatre en ligne.', 'Toute sa ligne, ou toute sa colonne.', 'La touchant, l’échangeant, ou la prenant dans une ligne ou une explosion.'],
              ['[Bombe](#bomb)', 'Deux lignes qui se croisent : une forme en L, en T ou en +.', 'Le carré de 3×3 autour d’elle, puis une seconde fois une fois le plateau stabilisé.', 'La touchant, l’échangeant, ou la prenant dans une ligne ou une explosion.'],
              ['[Bombe de couleur](#colour-bomb)', 'Cinq en ligne droite, ou plus.', 'Toutes les pièces d’une couleur.', 'L’échangeant avec une brique (cette couleur), la touchant, ou la prenant dans une explosion (la couleur la plus présente).'],
              ['[Fléchette](#homing-dart)', 'Un carré de 2×2 d’une seule couleur.', 'Une pièce dont un objectif a besoin, où qu’elle soit.', 'La touchant, l’échangeant, ou la prenant dans une ligne ou une explosion.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Déclencher une spéciale utilise toujours un coup, que vous la touchiez ou que vous l’échangiez. Un échange qui déclenche deux spéciales ensemble ne coûte qu’un coup pour les deux : le combo est donc ce qui rapporte le plus sur le plateau.',
          },
        ],
      },
      {
        id: 'making',
        title: 'Comment se crée une spéciale',
        blocks: [
          {
            t: 'p',
            text: 'Après chaque coup, le plateau cherche les alignements : des lignes de trois ou plus en horizontal ou en vertical, et des carrés de 2×2. Les lignes qui se touchent ou se croisent forment un seul groupe, et chaque groupe crée au plus une spéciale. Quand un groupe pourrait en créer plusieurs, la plus forte l’emporte :',
          },
          {
            t: 'steps',
            items: [
              '**Cinq en ligne droite, ou plus,** crée une **bombe de couleur**, même si d’autres lignes la croisent.',
              '**Des lignes qui se croisent** (une forme en L, en T ou en +) créent une **bombe**.',
              '**Exactement quatre en ligne** crée un **rayon de ligne**.',
              '**Un carré de 2×2**, sans rien de plus fort dans son groupe, crée une **fléchette**.',
            ],
          },
          { t: 'h3', text: 'Où elle apparaît' },
          {
            t: 'list',
            items: [
              'Sur **la brique que vous avez déplacée**, si elle fait partie de l’alignement. Cela vaut pour les échanges comme pour les glissements : faites glisser une brique pour terminer une ligne de quatre, et le rayon de ligne apparaît sur la brique qui a glissé.',
              'Sinon, pour une bombe, **là où les deux lignes se croisent**.',
              'Sinon, sur la dernière brique arrivée (dans une cascade, celle qui est tombée), ou au milieu du groupe.',
            ],
          },
          { t: 'h3', text: 'Dans quel sens tire un rayon de ligne' },
          {
            t: 'p',
            text: 'Les rayures d’un rayon de ligne **suivent votre geste**. Balayez en travers (vers la gauche ou la droite) et il vide sa ligne ; balayez vers le haut ou le bas et il vide sa colonne, quel que soit le sens de la ligne de quatre elle-même. Un rayon de ligne créé par une cascade, sans aucun geste, se place **en travers** de la ligne qui l’a créé.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Visez avant de balayer',
            text: 'Quand vous pouvez terminer une ligne de quatre dans deux directions, choisissez le geste qui oriente le rayon là où il vous faut : le long de la ligne qui contient vos briques d’objectif, ou dans la colonne qui mène à une porte.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Les briques longues, grandes, en L et en T ne comptent jamais dans une ligne : elles ne peuvent donc jamais aider à créer une spéciale. Une brique verrouillée compte dans une ligne (la ligne la libère), mais la spéciale n’apparaît jamais sur la brique verrouillée elle-même.',
          },
        ],
      },
      {
        id: 'specials',
        title: 'Les quatre spéciales',
        blocks: [
          {
            t: 'p',
            text: 'Chaque village habille ses spéciales à sa façon : dans la Cité-Jardin, le rayon de ligne est une tondeuse, la bombe un bouton de fleur (« Pluie de pétales ! »), la bombe de couleur un papillon et la fléchette une coccinelle ; à Clover Farm, ce sont un tracteur, un épi de maïs (« Pop-corn ! »), un tournesol et une abeille. Elles se jouent toujours de la même façon.',
          },
          {
            t: 'entry',
            id: 'line-blaster',
            title: 'Rayon de ligne',
            board: {
              rows: ['G . R . Y', 'R R B R Y', 'Y G . B G'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G . B . Y', '. . R| . Y', 'Y G . B G'] },
              caption: 'Quatre en ligne, terminées d’un balayage vers le bas : le rayon vide sa colonne.',
              alt: 'Un plateau de trois rangées et cinq colonnes où rien ne tombe. Rangée du haut : vert, vide, rouge, vide, jaune. Rangée du milieu : rouge, rouge, bleu, rouge, jaune. Rangée du bas : jaune, vert, vide, bleu, vert. Une flèche échange vers le bas la brique rouge en haut de la colonne du milieu avec la brique bleue en dessous. Résultat : les quatre rouges de la rangée du milieu forment une ligne de quatre et disparaissent, et un rayon de ligne rouge à rayures verticales apparaît au milieu, là où la rouge déplacée est arrivée, car le geste était vertical. La brique bleue se trouve maintenant en haut de la colonne du milieu, les cases vidées restent vides, et toutes les autres briques restent en place.',
            },
            what: 'Une brique à rayures. Quand elle explose, elle fait disparaître toutes les pièces de sa ligne (rayures horizontales) ou de sa colonne (rayures verticales), jusqu’aux bords du plateau, en passant par-dessus les statues et les trous dans la forme du plateau.',
            how: 'Alignez quatre briques. Déclenchez-la en la touchant, en l’échangeant avec une voisine qui forme un alignement ou avec une autre spéciale, ou en la prenant dans une ligne ou une autre explosion. Elle peut aussi **sortir par une porte de sa couleur** : elle part alors sans exploser et compte comme une brique de sa couleur.',
            facts: [
              { label: 'Créée par', text: 'Exactement quatre en ligne.' },
              { label: 'Fait disparaître', text: 'Une ligne entière ou une colonne entière : les briques partent, les obstacles perdent une couche, les verrous s’ouvrent, les autres spéciales explosent.' },
              { label: 'Se combine avec', text: 'Toutes les autres spéciales. Voir [le tableau des combos](#combos).' },
              { label: 'VoiceOver dit', text: '« Rayon de ligne, rouge, horizontal, vide sa ligne » ou « … vertical, vide sa colonne ». Dans certains villages, son nom local suit entre parenthèses, comme « (tondeuse) ».' },
            ],
            tip: 'Quand la ligne ou la colonne d’un rayon passe sur les cases juste devant une porte, les briques de la couleur de la porte sur ces cases s’envolent par elle et comptent comme renvoyées.',
          },
          {
            t: 'entry',
            id: 'bomb',
            title: 'Bombe',
            board: {
              rows: ['R G B .', 'R B G .', 'Y R R .', 'R G Y .'],
              moves: [{ row: 3, col: 0, dir: 'up', kind: 'swap' }],
              after: { rows: ['. G B .', '. B G .', 'Rb . . .', 'Y G Y .'] },
              caption: 'Deux lignes rouges qui se croisent créent une bombe, juste à leur point de rencontre.',
              alt: 'Un plateau de quatre rangées et quatre colonnes où rien ne tombe. Rangée 1 : rouge, vert, bleu, vide. Rangée 2 : rouge, bleu, vert, vide. Rangée 3 : jaune, rouge, rouge, vide. Rangée 4 : rouge, vert, jaune, vide. Une flèche échange vers le haut la brique rouge en bas à gauche avec la brique jaune au-dessus. Résultat : la rouge, désormais en rangée 3, colonne 1, termine deux lignes à la fois, trois rouges dans la colonne de gauche et trois rouges dans la rangée 3, en forme de L. Les quatre autres rouges disparaissent et une bombe rouge apparaît en rangée 3, colonne 1. La brique jaune se trouve maintenant en bas à gauche ; les briques vertes, bleues, vertes et bleues restent dans les rangées 1 et 2, et la verte et la jaune restent dans la rangée 4.',
            },
            what: 'Une spéciale ronde et pétillante. Quand elle explose, elle fait disparaître le carré de 3×3 autour d’elle ; puis, une fois le plateau stabilisé (sur les plateaux où les briques tombent, une fois le trou comblé), elle explose **une seconde fois** au même endroit.',
            how: 'Formez deux lignes d’une même couleur qui partagent une brique : une forme en L, en T ou en +. Déclenchez-la en la touchant, en l’échangeant, ou en la prenant dans une ligne ou une explosion.',
            facts: [
              { label: 'Créée par', text: 'Une ligne horizontale et une ligne verticale qui se croisent ou se touchent sur une brique commune (L, T ou +), sauf si le groupe contient aussi cinq en ligne droite.' },
              { label: 'Fait disparaître', text: 'Le carré de 3×3 autour d’elle, deux fois. La seconde explosion attrape ce qui est tombé dans le trou, et retire une deuxième couche aux caisses et à la glace.' },
              { label: 'Se combine avec', text: 'Toutes les autres spéciales. Voir [le tableau des combos](#combos).' },
              { label: 'VoiceOver dit', text: '« Bombe, rouge ».' },
            ],
            tip: 'Faites exploser une bombe à côté d’une caisse à deux couches ou d’une brique prise dans une glace épaisse : les deux explosions peuvent retirer les deux couches en un seul coup.',
          },
          {
            t: 'entry',
            id: 'colour-bomb',
            title: 'Bombe de couleur',
            board: {
              rows: ['G Y B Y G', 'B B R B B', 'Y G Y G Y'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G Y R Y G', '. . * . .', 'Y G Y G Y'] },
              caption: 'Cinq en ligne créent une bombe de couleur. Elle n’a pas de couleur à elle.',
              alt: 'Un plateau de trois rangées et cinq colonnes où rien ne tombe. Rangée du haut : vert, jaune, bleu, jaune, vert. Rangée du milieu : bleu, bleu, rouge, bleu, bleu. Rangée du bas : jaune, vert, jaune, vert, jaune. Une flèche échange vers le bas la brique bleue en haut de la colonne du milieu avec la brique rouge en dessous. Résultat : cinq bleues disparaissent dans la rangée du milieu et une bombe de couleur, sans couleur, apparaît dans la case du milieu. La brique rouge se trouve maintenant en haut de la colonne du milieu, et le reste du plateau ne change pas.',
            },
            what: 'Une spéciale multicolore, sans couleur à elle. Échangée avec une brique, elle prend **toutes les pièces de la couleur de cette brique** sur le plateau : les briques simples et les clés partent, les spéciales de cette couleur explosent, et les briques verrouillées sont libérées.',
            how: 'Alignez cinq briques ou plus en ligne droite. Échangez-la avec n’importe quelle brique voisine : cet échange compte toujours, même s’il n’aligne rien. Touchée seule, ou prise dans l’explosion d’une autre spéciale, elle prend plutôt toutes les briques simples de la **couleur la plus présente** sur le plateau.',
            facts: [
              { label: 'Créée par', text: 'Cinq en ligne droite, ou plus.' },
              { label: 'Fait disparaître', text: 'Toutes les pièces d’une couleur, une à une, de la plus proche à la plus lointaine.' },
              { label: 'Se combine avec', text: 'Toutes les autres spéciales, et une autre bombe de couleur. Voir [le tableau des combos](#combos).' },
              { label: 'Bon à savoir', text: 'Elle ne compte jamais dans une ligne, et elle ne peut pas sortir par une porte : glissée vers une porte, elle s’arrête comme contre un mur.' },
              { label: 'VoiceOver dit', text: '« Bombe de couleur, prend toutes les pièces de la couleur échangée ».' },
            ],
            tip: 'Échangez-la avec une couleur d’objectif. Chaque brique qu’elle prend compte pour un objectif « Récolte » ou « Envoyer ou aligner » de cette couleur.',
          },
          {
            t: 'entry',
            id: 'homing-dart',
            title: 'Fléchette',
            board: {
              rows: ['Y G B', 'R R G', 'R B Y', 'G R Y'],
              moves: [{ row: 3, col: 1, dir: 'up', kind: 'swap' }],
              after: { rows: ['Y G B', '. . G', '. Rd Y', 'G B Y'] },
              caption: 'Un carré de 2×2 d’une seule couleur crée une fléchette.',
              alt: 'Un plateau de quatre rangées et trois colonnes où rien ne tombe. Rangée 1 : jaune, vert, bleu. Rangée 2 : rouge, rouge, vert. Rangée 3 : rouge, bleu, jaune. Rangée 4 : vert, rouge, jaune. Une flèche échange vers le haut la brique rouge en bas de la colonne du milieu avec la brique bleue au-dessus. Résultat : quatre rouges forment maintenant un carré de 2×2 dans les rangées 2 et 3 ; trois d’entre elles disparaissent et une fléchette rouge apparaît en rangée 3, colonne 2, là où la rouge déplacée est arrivée. La brique bleue se trouve maintenant en bas de la colonne du milieu ; les autres briques ne changent pas.',
            },
            what: 'Une petite spéciale qui traverse le plateau en volant jusqu’à une pièce et la frappe une fois.',
            how: 'Formez un carré de 2×2 d’une seule couleur. Déclenchez-la en la touchant, en l’échangeant, ou en la prenant dans une ligne ou une explosion. Elle choisit sa cible toute seule : la mousse quand un objectif demande de la mousse, les caisses ou les verrous quand un objectif les demande, puis une brique d’une couleur qu’un objectif « Récolte » attend encore, puis n’importe quel autre obstacle, en commençant par le haut du plateau.',
            facts: [
              { label: 'Créée par', text: 'Un carré de 2×2, quand son groupe ne contient ni ligne de quatre ou plus, ni lignes qui se croisent.' },
              { label: 'Fait disparaître', text: 'Un coup sur une pièce : une brique part, un obstacle perd une couche, un verrou s’ouvre.' },
              { label: 'Se combine avec', text: 'Toutes les autres spéciales : elle emporte l’autre jusqu’à sa cible. Voir [le tableau des combos](#combos).' },
              { label: 'VoiceOver dit', text: '« Fléchette, rouge, vole vers une pièce de l’objectif ».' },
            ],
            tip: 'Seule, une fléchette est faible, mais dans un combo elle excelle : échangez-la avec une bombe ou un rayon de ligne et elle livre cette spéciale sur la pièce dont vous avez le plus besoin de vous débarrasser.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Avec **Daltonien** activé (il l’est dès le départ), les rayons de ligne, les bombes, les fléchettes et les clés portent dans un coin un petit badge avec le symbole de leur couleur : vous reconnaissez leur couleur sans dépendre de la couleur seule.',
          },
        ],
      },
      {
        id: 'setting-off',
        title: 'Trois façons de déclencher une spéciale',
        blocks: [
          {
            t: 'table',
            head: ['Comment', 'Ce qui se passe', 'Coût'],
            rows: [
              ['**La toucher**', 'Elle explose là où elle est. Une bombe de couleur touchée seule prend la couleur la plus présente.', 'Un coup.'],
              ['**L’échanger**', 'Échangée dans un alignement, elle explose avec la ligne. Échangée avec une autre spéciale, les deux forment un [combo](#combos). Une bombe de couleur échangée avec une brique prend la couleur de cette brique.', 'Un coup.'],
              ['**La prendre**', 'Une spéciale prise dans une ligne, ou atteinte par l’explosion d’une autre spéciale, explose aussi. Une seule explosion peut déclencher toute une chaîne.', 'Gratuit : cela fait partie du coup qui l’a provoqué.'],
            ],
          },
          {
            t: 'list',
            items: [
              '**Faire glisser une spéciale ne la déclenche jamais.** Vous pouvez faire glisser une spéciale dans son couloir comme n’importe quelle brique, pour la placer en vue d’un meilleur échange.',
              '**Ce qu’une explosion fait à chaque pièce :** une brique simple disparaît ; une caisse ou une brique dans la glace perd une couche ; un verrou s’ouvre et sa brique reste ; la mousse disparaît ; une autre spéciale explose.',
              '**Ce qu’une explosion ne touche jamais :** les briques longues, grandes, en L et en T (elles ne partent que par leur porte), tout ce qui se trouve sous un couvercle fermé, et les statues.',
              'Une brique de la couleur d’une porte qu’une explosion fait disparaître sur la case du bord **juste devant sa porte ouverte** s’envole par la porte et compte comme renvoyée.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Toucher est le dernier recours. Si un échange peut déclencher la même spéciale tout en formant un alignement, il en fait plus pour le même coup.',
          },
        ],
      },
      {
        id: 'combos',
        title: 'Tous les combos',
        blocks: [
          {
            t: 'p',
            text: 'Deux spéciales côte à côte peuvent toujours être échangées, même si l’échange n’aligne rien. Elles explosent ensemble, centrées sur la case où arrive la brique que vous avez déplacée. Voici toutes les associations du jeu :',
          },
          {
            t: 'table',
            head: ['Échangez ensemble', 'Ce qui se passe'],
            rows: [
              ['Rayon de ligne + rayon de ligne', 'Une croix : une ligne entière et une colonne entière.'],
              ['Rayon de ligne + bombe', 'Une grande croix : trois lignes entières et trois colonnes entières.'],
              ['Rayon de ligne + fléchette', 'La fléchette vole jusqu’à sa cible, la frappe, et le rayon de ligne explose à partir de là.'],
              ['Rayon de ligne + bombe de couleur', 'Chaque brique simple libre de la couleur du rayon devient un rayon de ligne (tour à tour vertical et horizontal), et ils explosent tous.'],
              ['Bombe + bombe', 'Une explosion de 5×5, puis une seconde explosion de 5×5 au même endroit une fois le plateau stabilisé.'],
              ['Bombe + fléchette', 'La fléchette emporte la bombe jusqu’à sa cible, où elle explose une fois en 5×5.'],
              ['Bombe + bombe de couleur', 'Chaque brique simple libre de la couleur de la bombe devient une bombe, et chacune explose (deux fois, comme toutes les bombes).'],
              ['Fléchette + fléchette', 'Trois cibles en tout : la première fléchette atterrit, et deux autres repartent de là.'],
              ['Fléchette + bombe de couleur', 'Chaque brique simple libre de la couleur de la fléchette devient une fléchette, et elles s’envolent toutes.'],
              ['Bombe de couleur + bombe de couleur', 'Chaque pièce du plateau reçoit un coup : les briques disparaissent, chaque obstacle perd une couche, chaque verrou s’ouvre et chaque spéciale explose. Les briques longues et à forme, et tout ce qui est sous un couvercle, restent intacts.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['G Y B Y', 'Y R- B| G', 'B G Y B'],
              moves: [{ row: 1, col: 1, dir: 'right', kind: 'swap' }],
              after: { rows: ['G Y . Y', '. . . .', 'B G . B'] },
              caption: 'Deux rayons de ligne échangés ensemble vident une croix : la ligne et la colonne où arrive celui qui a bougé.',
              alt: 'Un plateau de trois rangées et quatre colonnes où rien ne tombe. Rangée du haut : vert, jaune, bleu, jaune. Rangée du milieu : jaune, un rayon de ligne rouge à rayures horizontales, un rayon de ligne bleu à rayures verticales, vert. Rangée du bas : bleu, vert, jaune, bleu. Une flèche échange le rayon de ligne rouge vers la droite avec le bleu. Résultat : toute la rangée du milieu et toute la troisième colonne disparaissent. Il reste : vert, jaune et jaune en haut avec un trou dans la troisième colonne, une rangée du milieu vide, et bleu, vert et bleu en bas avec un trou dans la troisième colonne.',
            },
          },
          {
            t: 'list',
            items: [
              '« Brique simple libre » désigne une brique seule de cette couleur, ni dans la glace ni verrouillée. S’il ne reste aucune brique de la couleur de la spéciale, la bombe de couleur prend la couleur la plus présente du plateau.',
              'VoiceOver mentionne « un combo » dans le résumé du coup.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Les paires les plus fortes',
            text: 'Bombe de couleur + bombe de couleur fait disparaître le plus de pièces, mais bombe de couleur + rayon de ligne sur une couleur très présente en fait souvent plus pour vos objectifs. Sur un plateau où rien ne tombe, mieux vaut garder une paire de bombes de couleur pour le moment où la couleur qu’il vous faut abonde.',
          },
        ],
      },
      {
        id: 'gates',
        title: 'Les spéciales et les portes',
        blocks: [
          {
            t: 'list',
            items: [
              '**Les rayons de ligne peuvent rentrer chez eux.** Faites-en glisser un dans une porte ouverte de sa couleur : il part sans exploser et compte comme une brique de sa couleur.',
              '**Les bombes, les fléchettes et les bombes de couleur ne le peuvent pas.** Glissées vers une porte, elles s’y arrêtent comme contre un mur.',
              '**Les briques soufflées peuvent rentrer chez elles.** Une brique de la couleur d’une porte qu’une spéciale fait disparaître sur la case du bord devant sa porte ouverte s’envole par la porte.',
              '**Les objectifs de porte s’intitulent « Envoyer ou aligner ».** Les briques de cette couleur qu’une ligne ou une explosion fait disparaître n’importe où sur le plateau comptent aussi : un rayon de ligne à travers une rangée de briques d’objectif, c’est un vrai progrès.',
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['G B R G', 'R R B Y', 'Y G Y B'],
              gates: [{ side: 'left', at: 1, colour: 'R' }],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G B B G', '. . . Y', 'Y G Y B'] },
              caption: 'Une ligne alignée devant une porte de sa couleur : la brique du bout s’envole par la porte.',
              alt: 'Un plateau de trois rangées et quatre colonnes où rien ne tombe, avec une porte rouge sur le bord gauche de la rangée du milieu. Rangée du haut : vert, bleu, rouge, vert. Rangée du milieu : rouge, rouge, bleu, jaune. Rangée du bas : jaune, vert, jaune, bleu. Une flèche échange vers le bas la brique rouge en haut de la troisième colonne avec la bleue en dessous. Résultat : trois rouges s’alignent dans la rangée du milieu. La rouge du bout gauche se trouve devant la porte rouge : elle s’envole donc par la porte ; les deux autres éclatent. Les trois comptent pour un objectif rouge « Envoyer ou aligner ». La bleue est maintenant en haut de la troisième colonne ; le reste du plateau ne change pas.',
            },
          },
          {
            t: 'p',
            text: 'Chaque porte, couvercle et obstacle est expliqué dans [Tous les obstacles, couvercles et portes, expliqués](help:blockers-encyclopedia#gates).',
          },
        ],
      },
      {
        id: 'score',
        title: 'Cascades, score et étoiles',
        blocks: [
          {
            t: 'p',
            text: 'Sur les plateaux où les briques tombent, un alignement laisse un trou, les briques du dessus y tombent et de nouvelles arrivent par le haut. Si cela forme une autre ligne, elle éclate aussi : c’est une **cascade**. Chaque nouvelle vague rapporte plus que la précédente. Sur les plateaux où rien ne tombe, un alignement laisse simplement des cases vides : les cascades y sont rares, mais la seconde explosion d’une bombe a toujours lieu.',
          },
          {
            t: 'table',
            caption: 'Les points de chaque coup (5.1.1)',
            head: ['Ce qui se passe', 'Points'],
            rows: [
              ['Chaque brique dans une ligne', '20, multiplié par la vague : une brique de la deuxième vague de cascade vaut 40, de la troisième 60'],
              ['Chaque spéciale créée', '120'],
              ['Une brique sortie par une porte', '60'],
              ['Une spéciale qui explose', '100, plus 30 par pièce qu’elle fait disparaître, 40 par couche de glace qu’elle brise et 60 par brique qu’elle envoie par une porte'],
              ['Un obstacle touché par une ligne à côté', '20'],
              ['Chaque coup restant quand les objectifs sont atteints', '150, plus ce que son rayon de ligne fait disparaître'],
            ],
          },
          {
            t: 'list',
            items: [
              'La **barre d’étoiles** de l’en-tête se remplit à mesure que votre score monte. Chaque plateau terminé rapporte au moins **une étoile**.',
              'Les seuils de deux et trois étoiles sont fixés à partir de la solution de référence de chaque plateau, en comptant les 150 points des coups qu’il lui reste. Gagnez vite, avec des coups d’avance, et les étoiles viennent plus facilement ; utilisez tous vos coups et il vous faut plus de points en jeu pour égaler.',
              'Rejouez un plateau terminé depuis le Voyage pour tenter d’obtenir plus d’étoiles. Voir [Jouer un plateau](help:playing-a-board#stars).',
            ],
          },
        ],
      },
      {
        id: 'finish',
        title: 'Le bonus des coups restants',
        blocks: [
          {
            t: 'steps',
            items: [
              'Dès que votre dernier objectif est atteint, le plateau n’accepte plus de coups et affiche **Objectif atteint !**, avec en dessous « N coups restants deviennent des rayons ! ». Plus rien ne peut faire perdre le plateau : aucune vie n’est en jeu et aucun coup n’est nécessaire.',
              'Une étincelle par coup quitte le compteur de coups et se pose sur une brique simple, qui devient un rayon de ligne. Chacune ajoute **150 points**. Jusqu’à 30 coups deviennent des rayons sur le plateau ; au-delà, ils sont quand même payés.',
              'Puis chaque spéciale du plateau explose, les nouveaux rayons comme celles que vous n’aviez pas utilisées, jusqu’à ce qu’il n’y ait plus rien à déclencher.',
              'Vos amis font un tour d’honneur et la carte de victoire affiche votre score, vos étoiles et vos pièces.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: '**Touchez n’importe où** pour passer le spectacle. Le résultat est calculé d’avance : passer donne exactement le même score et les mêmes étoiles.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Les coups restants rapportent des points, donc des étoiles, mais pas de pièces en plus. Les spéciales laissées sur le plateau ne sont pas perdues : elles explosent pendant le bonus de fin et s’ajoutent à votre score.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'VoiceOver dit aussitôt « Objectif atteint ! 4 coups restants deviennent des rayons ! », puis « Score final » avec le nombre et les étoiles quand la carte de victoire apparaît. Avec **Réduire les animations** activé, la bannière apparaît et disparaît en fondu, et le plateau final s’affiche sans le spectacle.',
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'Les spéciales avec VoiceOver',
        blocks: [
          {
            t: 'table',
            head: ['Quand', 'Ce que vous entendez'],
            rows: [
              ['Vous arrivez sur une spéciale', 'Son type, sa couleur et ce qu’elle fait, par exemple « Rayon de ligne, rouge, horizontal, vide sa ligne ».'],
              ['Ses actions', '**Activer la spéciale** vient en premier, puis ses glissements, puis ses échanges. Les échanges qui déclenchent quelque chose passent avant ceux qui ne créent rien.'],
              ['Vous en touchez une', '« Déclenché : bombe rouge ».'],
              ['Un indice en propose une', 'Par exemple « Indice : déclenche la bombe rouge », avec sa ligne et sa colonne.'],
              ['Après un coup', 'Les spéciales créées par le coup, un éventuel combo et les cascades, dans le résumé du coup.'],
            ],
          },
          {
            t: 'p',
            text: 'Tournez deux doigts jusqu’au rotor **Spéciales** et balayez vers le haut ou le bas pour passer d’une spéciale à l’autre. Plus de détails dans [Jouer avec VoiceOver](help:voiceover#rotors).',
          },
        ],
      },
      {
        id: 'faq',
        title: 'Questions',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Pourquoi mon échange de deux spéciales a-t-il marché sans former de ligne ?',
                a: 'Deux spéciales voisines peuvent toujours être échangées : l’échange les déclenche ensemble, en combo. C’est pareil pour une bombe de couleur échangée avec n’importe quelle brique.',
              },
              {
                q: 'J’ai fait glisser mon rayon de ligne dans sa porte et il n’a pas explosé. Je l’ai gâché ?',
                a: 'Non. Un rayon de ligne sorti par une porte de sa couleur part sans exploser et compte comme une brique de cette couleur pour vos objectifs. Si vous vouliez l’explosion, touchez-le ou échangez-le plutôt.',
              },
              {
                q: 'Pourquoi une bombe a-t-elle laissé une brique longue debout ?',
                a: 'Les explosions ne prennent jamais les briques longues, grandes, en L ou en T. Ce sont des chargements pour leur porte : elles ne partent qu’en glissant par une porte aussi large qu’elles. Les explosions ne peuvent pas non plus atteindre ce qui est sous un couvercle fermé.',
              },
              {
                q: 'Les briques qu’une spéciale fait disparaître comptent-elles pour mes objectifs ?',
                a: 'Oui. Les briques d’une couleur d’objectif soufflées par une explosion comptent pour les objectifs « Récolte » et « Envoyer ou aligner », et une brique soufflée devant sa propre porte s’envole par elle. Les couches d’obstacles brisées par une explosion comptent pour les objectifs de caisses, de mousse et de verrous.',
              },
              {
                q: 'Faut-il garder les spéciales pour la fin ?',
                a: 'Seulement si les objectifs sont déjà assurés. Toute spéciale encore sur le plateau quand le dernier objectif est atteint explose pendant le bonus de fin et rapporte des points, mais une spéciale utilisée tôt peut économiser des coups, qui rapportent encore plus de points.',
              },
              {
                q: 'Le bonus Fusée, c’est la même chose qu’un rayon de ligne ?',
                a: 'Le bonus **Fusée** transforme une brique simple de votre choix en rayon de ligne qui part aussitôt le long de sa ligne. Voir [Bonus, indices et Pause](help:boosters-and-pause).',
              },
            ],
          },
        ],
      },
    ],
    related: ['blockers-encyclopedia', 'board-kinds', 'playing-a-board', 'bricks-specials-and-blockers', 'boosters-and-pause', 'voiceover'],
  },

  {
    slug: 'blockers-encyclopedia',
    category: 'learn',
    cover: 'board-village',
    title: 'Tous les obstacles, couvercles et portes, expliqués',
    summary:
      'À quoi ressemble chaque obstacle d’un plateau, ce qu’il fait et comment exactement l’éliminer ou l’ouvrir : caisses, glace, verrous, mousse, statues, briques face cachée, clés, briques longues et à forme, les cinq couvercles, toutes les sortes de portes et les portails.',
    keywords:
      'obstacle bloqueur blocage caisse pot botte de foin couches glace gelée gelé verrou chaîne verrouillé cadenas mousse qui s’étend statue pierre ornement face cachée point d’interrogation brique cachée clé serrure salle scellée couvercle parterre scellé compteur compteur de couleur vitrail clé en vitrail horloge horloge en laiton porte porte gelée porte à compteur porte d’étape porte scellée portail brique longue grande brique brique en L brique en T',
    host: 'peach',
    hostPose: 'think',
    sections: [
      {
        id: 'overview',
        title: 'Aide-mémoire',
        blocks: [
          {
            t: 'p',
            text: 'Tout ce qui n’est pas une brique simple figure ici. Leur apparence change selon le village (des pots de fleurs dans la Cité-Jardin, des bottes de foin à la ferme, des châteaux de sable au bord de la mer), mais les règles ne changent jamais. **Touchez n’importe quel obstacle, couvercle ou porte** sur le plateau : il se trémousse et vous dit en une ligne ce qu’il est et comment l’éliminer.',
          },
          {
            t: 'table',
            head: ['Obstacle', 'Arrête un glissement ?', 'Comment l’éliminer ou l’ouvrir'],
            rows: [
              ['[Caisse](#crate)', 'Oui', 'Une ligne à côté, ou une explosion. Une couche à chaque fois.'],
              ['[Brique dans la glace](#ice)', 'Oui, et elle ne peut pas bouger', 'Une ligne à côté, ou une explosion. Une couche à chaque fois.'],
              ['[Brique verrouillée](#lock)', 'Oui, et elle ne peut pas bouger', 'Une ligne qui la **traverse**, ou une explosion.'],
              ['[Mousse](#moss)', 'Oui', 'Une ligne à côté, ou une explosion.'],
              ['[Statue](#statue)', 'Oui', 'Elle reste. Trouvez un autre passage.'],
              ['[Brique face cachée](#face-down)', 'C’est une brique : elle bouge', 'Se retourne quand une brique voisine quitte le plateau.'],
              ['[Couvercles](#lids)', 'Oui', 'Chacun des cinq s’ouvre selon sa propre règle.'],
              ['[Portes](#gates)', 'Mauvaise couleur ou fermée : oui', 'Les portes ouvertes acceptent les briques de leur couleur.'],
              ['[Portail](#portal)', 'Non : la brique passe au travers', 'Faites-y glisser une brique seule.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Vérifié avec la version 5.1.1',
            text: 'Les caisses, la glace, les verrous, la mousse, les statues, les portes et le couvercle à horloge apparaissent tout au long du Voyage. Dans cette version, les quatre autres couvercles, les briques face cachée, les portes d’étape et les portails apparaissent sur certains plateaux jusqu’au niveau 408 ; de futures mises à jour pourront les amener plus loin.',
          },
        ],
      },
      {
        id: 'obstacles',
        title: 'Les obstacles',
        blocks: [
          {
            t: 'entry',
            id: 'crate',
            title: 'Caisse',
            board: {
              rows: ['G B R Y', 'R R B x2', 'Y G Y B'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G B B Y', '. . . x', 'Y G Y B'] },
              caption: 'Une ligne juste à côté d’une caisse lui retire une couche.',
              alt: 'Un plateau de trois rangées et quatre colonnes où rien ne tombe. Rangée du haut : vert, bleu, rouge, jaune. Rangée du milieu : rouge, rouge, bleu, et une caisse à 2 couches à droite. Rangée du bas : jaune, vert, jaune, bleu. Une flèche échange vers le bas la rouge en haut de la troisième colonne avec la bleue en dessous. Résultat : trois rouges disparaissent dans la rangée du milieu, et la caisse au bout de la ligne perd une couche : il ne lui en reste qu’une. La bleue est en haut de la troisième colonne ; le reste ne change pas.',
            },
            what: 'Une boîte qui occupe une case. Une brique qui glisse s’arrête contre elle, rien ne peut être échangé avec elle, et sur les plateaux où les briques tombent, elle reste en place tandis que les briques du dessus reposent sur elle. Elle a une ou deux couches : une caisse à deux couches a l’air plus solide, et un toucher ou VoiceOver vous dit toujours combien il en reste.',
            how: 'Faites une ligne juste à côté (la case au-dessus, en dessous, à gauche ou à droite de n’importe quelle brique de la ligne) : chaque ligne retire une couche, quel que soit le nombre de ses briques qui touchent la caisse. Une explosion qui l’atteint retire aussi une couche, et la double explosion d’une bombe peut en retirer deux. La dernière couche la brise et libère la case.',
            facts: [
              { label: 'Première apparition', text: 'Niveau 5, Pots et glace. Caisses à deux couches dès le niveau 20.' },
              { label: 'Objectif', text: '« Casse » des caisses : chaque couche retirée compte une fois.' },
              { label: 'Ressemble à, mais n’est pas', text: 'Une statue, qui ne se casse jamais, ou un couvercle, qui recouvre des briques et affiche un signe.' },
              { label: 'VoiceOver dit', text: '« Caisse, 2 couches ». Touchée : « Caisse, 2 couches. Une ligne à côté brise une couche ».' },
            ],
            tip: 'Le bonus **OVNI** retire une couche à une caisse, où qu’elle soit.',
          },
          {
            t: 'entry',
            id: 'ice',
            title: 'Brique dans la glace',
            board: {
              rows: ['B G~ Y', 'R R B', 'G Y R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['B G Y', '. . .', 'G Y B'] },
              caption: 'Une ligne à côté de la brique gelée brise la glace : la brique à l’intérieur est de nouveau libre.',
              alt: 'Un plateau de trois rangées et trois colonnes où rien ne tombe. Rangée du haut : bleu, une brique verte prise dans la glace, jaune. Rangée du milieu : rouge, rouge, bleu. Rangée du bas : vert, jaune, rouge. Une flèche échange vers le haut la rouge en bas à droite avec la bleue au-dessus. Résultat : trois rouges disparaissent dans la rangée du milieu, et la glace de la brique verte au-dessus de la ligne se brise, laissant une brique verte simple qui peut de nouveau bouger. La bleue est maintenant en bas à droite.',
            },
            what: 'Une brique de couleur prise dans un bloc de glace, d’une ou deux couches d’épaisseur. Tant qu’elle est gelée, elle ne peut ni glisser, ni s’échanger, ni tomber, ni compter dans une ligne, et une brique qui glisse s’arrête contre elle.',
            how: 'Faites une ligne juste à côté, ou atteignez-la avec une explosion : chacune retire une couche. Quand la dernière couche se brise, la brique redevient une brique ordinaire qu’on peut déplacer et aligner.',
            facts: [
              { label: 'Première apparition', text: 'Niveau 5, Pots et glace.' },
              { label: 'Ressemble à, mais n’est pas', text: 'Une **porte** gelée, qui se trouve sur le bord du plateau et dégèle autrement. Voir [Porte gelée](#iced-gate).' },
              { label: 'VoiceOver dit', text: 'La brique, puis sa glace, par exemple « Brique, rouge, dans la gelée, 1 couche ». Touchée : « … Une ligne à côté brise la gelée ».' },
            ],
            tip: 'Une brique gelée d’une couleur d’objectif mérite d’être libérée tôt : tant qu’elle est prise, elle ne peut pas atteindre sa porte.',
          },
          {
            t: 'entry',
            id: 'lock',
            title: 'Brique verrouillée',
            board: {
              rows: ['G Y R', 'R R! B', 'Y G Y'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G Y B', '. R .', 'Y G Y'] },
              caption: 'Une ligne qui traverse la brique verrouillée la libère. La brique libérée reste en place.',
              alt: 'Un plateau de trois rangées et trois colonnes où rien ne tombe. Rangée du haut : vert, jaune, rouge. Rangée du milieu : rouge, une brique rouge verrouillée, bleu. Rangée du bas : jaune, vert, jaune. Une flèche échange vers le bas la rouge en haut à droite avec la bleue en dessous. Résultat : trois rouges s’alignent dans la rangée du milieu, en traversant la brique verrouillée. Les deux rouges des bords disparaissent ; le verrou s’ouvre et la rouge du milieu reste, désormais simple. La bleue est en haut à droite.',
            },
            what: 'Une brique retenue par un verrou. Elle ne peut ni glisser, ni s’échanger, ni tomber, et une brique qui glisse s’arrête contre elle. Elle compte quand même dans une ligne de sa couleur.',
            how: 'Faites une ligne qui la **traverse** : la ligne fait disparaître les briques autour, ouvre le verrou et laisse la brique libérée là où elle est. Une ligne simplement à côté ne fait rien. Une explosion qui l’atteint ouvre aussi le verrou.',
            facts: [
              { label: 'Première apparition', text: 'Niveau 9, Verrous et mousse.' },
              { label: 'Objectif', text: '« Défais » des verrous : chaque verrou ouvert compte une fois.' },
              { label: 'VoiceOver dit', text: '« Brique, jaune, verrouillée, une ligne qui la traverse la libère ».' },
            ],
            tip: 'Cherchez la couleur de la brique verrouillée de part et d’autre, ou au-dessus et en dessous : un seul glissement ou échange qui complète la ligne la libère.',
          },
          {
            t: 'entry',
            id: 'moss',
            title: 'Mousse',
            board: {
              rows: ['Y m B', 'R R G', 'B Y R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['Y . B', '. . .', 'B Y G'] },
              caption: 'Une ligne juste à côté de la mousse l’élimine.',
              alt: 'Un plateau de trois rangées et trois colonnes où rien ne tombe. Rangée du haut : jaune, une touffe de mousse, bleu. Rangée du milieu : rouge, rouge, vert. Rangée du bas : bleu, jaune, rouge. Une flèche échange vers le haut la rouge en bas à droite avec la verte au-dessus. Résultat : trois rouges disparaissent dans la rangée du milieu et la mousse au-dessus de la ligne disparaît aussi, laissant une case vide. La verte est maintenant en bas à droite.',
            },
            what: 'Une touffe de mousse qui occupe une case. Une brique qui glisse s’arrête contre elle. Sur les plateaux **Verrous et mousse**, elle s’étend : comme le dit le jeu, elle gagne une brique après chaque coup qui n’en retire pas, en recouvrant une brique simple voisine.',
            how: 'Faites une ligne juste à côté, ou atteignez-la avec une explosion : un seul coup l’élimine. La mousse qui a recouvert une brique s’élimine de la même façon.',
            facts: [
              { label: 'Première apparition', text: 'Niveau 9, Verrous et mousse.' },
              { label: 'Objectif', text: '« Nettoie » la mousse : chaque touffe éliminée compte, y compris celles qui ont poussé pendant la partie.' },
              { label: 'VoiceOver dit', text: '« Mousse, s’étend après un coup qui ne vide rien ». Touchée : « … Une ligne à côté l’enlève ».' },
            ],
            tip: 'Retirez un peu de mousse dès que vous le pouvez : un coup qui en retire ne la laisse jamais pousser. Les bonus ne comptent jamais comme un coup : en utiliser un ne la laisse donc pas s’étendre.',
          },
          {
            t: 'entry',
            id: 'statue',
            title: 'Statue',
            board: {
              rows: ['. . . . .', 'R+ . s . .', 'B . . . G'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 0, dir: 'right' }],
              after: { rows: ['. . . . .', '. R s . .', 'B . . . G'] },
              caption: 'Une statue arrête un glissement. La porte rouge est hors de portée dans cette rangée.',
              alt: 'Un plateau de trois rangées et cinq colonnes où rien ne tombe, avec une porte rouge sur le bord droit de la rangée du milieu. Rangée du haut : vide. Rangée du milieu : une brique rouge à gauche, une case vide, une statue au milieu, puis deux cases vides. Rangée du bas : bleu à gauche, trois cases vides, vert à droite. Une flèche fait glisser la brique rouge vers la droite. Résultat : elle s’arrête dans la deuxième case, contre la statue, et ne peut pas atteindre la porte rouge par cette rangée.',
            },
            what: 'Une statue de jardin, ou un autre ornement du village, posée dans un trou à l’intérieur du plateau. C’est un élément du décor, pas une pièce : rien ne glisse à travers, rien ne peut s’y poser, et elle ne se casse jamais. Sur les plateaux où les briques tombent, les briques du dessus reposent sur elle, et les briques seules la contournent en diagonale pour remplir les cases en dessous.',
            how: 'Elle ne peut pas être éliminée. Prévoyez vos coups autour d’elle : utilisez les passages libres, ou amenez la brique par une autre rangée. L’explosion d’un rayon de ligne passe juste par-dessus.',
            facts: [
              { label: 'Première apparition', text: 'Niveau 10, Allées de pierre.' },
              { label: 'Ressemble à, mais n’est pas', text: 'Une caisse, qui se casse ; une statue, jamais.' },
              { label: 'VoiceOver dit', text: 'Son nom, par exemple « Statue : un élément du décor. Les pièces tombent autour ».' },
            ],
          },
        ],
      },
      {
        id: 'special-bricks',
        title: 'Les briques qui ont leurs propres règles',
        blocks: [
          {
            t: 'entry',
            id: 'face-down',
            title: 'Brique face cachée « ? »',
            board: {
              rows: ['? R+ . .', 'G B Y .'],
              gates: [{ side: 'top', at: 1, colour: 'R' }],
              moves: [{ row: 0, col: 1, dir: 'up' }],
              after: { rows: ['Y . . .', 'G B Y .'] },
              caption: 'La rouge voisine quitte le plateau : la brique face cachée se retourne.',
              alt: 'Un plateau de deux rangées et quatre colonnes, avec une porte rouge sur le bord du haut, au-dessus de la deuxième colonne. Rangée du haut : une brique face cachée qui montre un point d’interrogation, une brique rouge, deux cases vides. Rangée du bas : vert, bleu, jaune, vide. Une flèche fait glisser la brique rouge vers le haut, par la porte rouge. Résultat : la rouge a quitté le plateau, et la brique face cachée à côté d’elle se retourne : elle était jaune. La rangée du bas ne change pas.',
            },
            what: 'Une brique gris ardoise avec un « ? » blanc et sans symbole de couleur. Elle cache sa couleur, mais c’est une vraie brique d’une vraie couleur, et elle joue selon elle : elle glisse, s’échange, s’aligne et rentre chez elle par la porte de sa couleur exactement comme cette couleur le ferait.',
            how: 'Elle se retourne quand une brique **voisine** (au-dessus, en dessous, à gauche ou à droite) **quitte le plateau** : sortie par une porte, alignée dans une ligne ou soufflée par une explosion. Elle ne se retourne jamais parce qu’elle a bougé, ni parce qu’une voisine a glissé ou est tombée plus loin.',
            facts: [
              { label: 'Première apparition', text: 'Niveau 49.' },
              { label: 'Franc jeu', text: 'Aucun indice, aucune main d’apprentissage, aucun rotor, aucun son de rangée ni aucun mot de VoiceOver ne trahit jamais sa couleur. L’indice ne propose jamais un coup qui déplace, échange ou fait disparaître une brique face cachée : sur un plateau qui en est rempli, il peut donc n’afficher aucun indice.' },
              { label: 'VoiceOver dit', text: '« Brique face cachée, se retourne quand une brique voisine quitte le plateau ». Ses échanges ne disent jamais « aucune combinaison », et un couloir qui mène à une porte est proposé sous la forme « Faire glisser vers la gauche vers la porte ». Contrôle vocal l’appelle « Face cachée », comme dans « Toucher Face cachée 14 ».' },
            ],
            tip: 'Dégagez d’abord les briques autour d’un groupe de briques « ? » : chaque brique qui part peut en retourner jusqu’à quatre, et vous pouvez ensuite prévoir vos coups.',
          },
          {
            t: 'entry',
            id: 'key',
            title: 'Brique clé',
            what: 'Une brique de sa couleur qui porte une clé. Elle n’apparaît que sur les plateaux qui ont un [couvercle à serrure](#lid-keyhole), hors du couvercle et en général en haut du plateau.',
            how: 'Elle se joue exactement comme une brique de sa couleur : faites-la glisser, échangez-la, alignez-la. Dès qu’elle **quitte le plateau**, alignée dans une ligne, soufflée par une explosion ou sortie par une porte de sa couleur, le couvercle à serrure s’ouvre.',
            facts: [
              { label: 'VoiceOver dit', text: '« Clé, rouge ».' },
              { label: 'Daltonien', text: 'Elle porte dans un coin un badge avec le symbole de sa couleur.' },
            ],
            tip: 'Si sa porte est loin, une ligne de trois va plus vite : une clé alignée n’importe où ouvre la serrure tout autant.',
          },
          {
            t: 'entry',
            id: 'long-bricks',
            title: 'Briques longues et grandes briques',
            what: 'Une seule pièce moulée qui couvre deux ou trois cases alignées (1×2, 2×1, 1×3, 3×1) ou un carré de 2×2. Elle glisse d’un seul bloc et s’arrête dès que l’une de ses cases rencontre quelque chose.',
            how: 'Faites-la glisser dans une porte de sa couleur **aussi large que la brique en travers de son couloir** : une brique haute de deux cases qui glisse sur le côté a besoin d’une porte latérale longue de deux cases, et une 2×2 d’une porte longue de deux cases. Les cases derrière elle doivent être libres pour qu’elle puisse sortir. Elle ne s’échange jamais, ne compte jamais dans une ligne, et aucune explosion ni aucun bonus ne peut la prendre : la faire glisser chez elle est donc le seul moyen. Elle compte **chaque case** pour vos objectifs : une 2×2 rouge vaut quatre rouges.',
            facts: [
              { label: 'Première apparition', text: 'Niveau 6, Briques longues.' },
              { label: 'Là où les briques tombent', text: 'Elle tombe d’un bloc, une rangée à la fois, et seulement quand toutes les cases sous elle sont libres : une seule caisse sous l’une de ses cases retient toute la pièce.' },
              { label: 'VoiceOver dit', text: '« Brique longue, rouge, 2 de haut », « Grande brique carrée, bleue ». Ses actions la nomment : « Faire glisser la brique longue rouge vers la gauche et sortir par la porte : rouge ».' },
            ],
            tip: 'Avant de dégager un couloir, vérifiez la largeur de la porte. Une porte longue d’une case ne prendra jamais une brique longue, si bien alignée soit-elle.',
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Niveau 31 sur la plage : 16 coups restants, objectifs de 8 jaunes et 8 bleues. De grosses briques d’un seul tenant sont empilées en bas du plateau : une longue barre bleue, une haute colonne bleue et une pièce jaune en forme de C, avec des portes bleues et jaunes sur les bords.',
            caption: 'Les grosses briques glissent d’un seul bloc et demandent une porte aussi large qu’elles.',
          },
          {
            t: 'entry',
            id: 'l-and-t',
            title: 'Briques en L et en T',
            what: 'Des pièces coudées de quatre cases en forme de L ou de T. Elles suivent les mêmes règles que les briques longues : une seule pièce, jamais échangée, jamais dans une ligne, jamais soufflée.',
            how: 'Alignez la pièce sur une porte de sa couleur qui couvre toute la pièce en travers de son couloir, puis faites-la glisser chez elle. La première de ses cases qui rencontre quelque chose arrête toute la pièce.',
            facts: [
              { label: 'Première apparition', text: 'Niveau 7, Pièces d’angle.' },
              { label: 'VoiceOver dit', text: '« Brique en L, rouge », « Brique en T, bleue ».' },
            ],
          },
        ],
      },
      {
        id: 'lids',
        title: 'Les salles scellées et leurs cinq couvercles',
        blocks: [
          {
            t: 'p',
            text: 'Une **salle scellée** est un bloc d’une à quatre cases sous un couvercle. Tant que le couvercle n’est pas ouvert, les briques en dessous sont figées : elles ne peuvent ni glisser, ni s’échanger, ni s’aligner, ni tomber, et aucune explosion, aucun bonus ni aucun mélange ne peut les atteindre. Chaque couvercle affiche un signe selon sa sorte, et la plupart affichent aussi un nombre : combien il leur en faut encore. Quand il s’ouvre, le couvercle se soulève et ses briques entrent dans la partie.',
          },
          {
            t: 'table',
            head: ['Couvercle', 'Signe', 'S’ouvre quand…'],
            rows: [
              ['[Compteur](#lid-counter)', 'Une grille de carrés et un nombre', 'Ce nombre de briques de plus, de n’importe quelle couleur, ont quitté le plateau.'],
              ['[Compteur de couleur](#lid-colour-counter)', 'Une pile de carrés et un nombre, dans sa couleur', 'Ce nombre de briques de plus de sa couleur ont quitté le plateau.'],
              ['[Clé en vitrail](#lid-glass-key)', 'Une clé, dans sa couleur ; pas de nombre', 'Vous faites une ligne de sa couleur juste à côté.'],
              ['[Horloge](#lid-clock)', 'Une horloge et un nombre', 'Vous avez joué ce nombre de coups de plus.'],
              ['[Serrure](#lid-keyhole)', 'Un cadenas', 'La brique clé quitte le plateau.'],
            ],
          },
          {
            t: 'entry',
            id: 'lid-counter',
            title: 'Couvercle à compteur',
            what: 'Un couvercle avec une grille et un nombre qui décompte.',
            how: 'Chaque brique qui quitte le plateau, de n’importe quelle couleur, le fait baisser d’un : alignée dans une ligne, soufflée par une explosion ou sortie par une porte. Une brique longue ou grande compte une fois. Déplacer des briques sur le plateau ne compte pas. Sur les plateaux actuels, il demande de 5 à 9 briques.',
            facts: [
              { label: 'VoiceOver dit', text: 'Sur chaque brique recouverte : « scellé sous un couvercle, s’ouvre après 6 briques de plus ». À l’ouverture : « Le couvercle à compteur s’est ouvert. Ses briques peuvent bouger ».' },
            ],
          },
          {
            t: 'entry',
            id: 'lid-colour-counter',
            title: 'Couvercle à compteur de couleur',
            what: 'Un couvercle d’une couleur, avec une pile et un nombre.',
            how: 'Seules les briques de **sa propre couleur** qui quittent le plateau comptent : alignées, soufflées ou sorties par une porte. Les autres couleurs ne lui font rien. Sur les plateaux actuels, il en demande 3 ou 4.',
            facts: [
              { label: 'Première apparition', text: 'Niveau 65.' },
              { label: 'VoiceOver dit', text: '« scellé sous un couvercle (rouge), s’ouvre après 3 briques de plus : rouge ». À l’ouverture : « Le couvercle à compteur (rouge) s’est ouvert. Ses briques peuvent bouger ».' },
            ],
            tip: 'Sa couleur est en général aussi une couleur que vos objectifs demandent : chaque brique que vous renvoyez chez elle compte donc deux fois.',
          },
          {
            t: 'entry',
            id: 'lid-glass-key',
            title: 'Couvercle à clé en vitrail',
            what: 'Un couvercle d’une couleur avec une clé et sans nombre.',
            how: 'Faites une ligne (ou un carré de 2×2) **de sa couleur** dont au moins une brique se trouve juste à côté du couvercle : au-dessus, en dessous, à gauche ou à droite de l’une de ses cases. Une ligne d’une autre couleur, une ligne plus éloignée ou une explosion ne l’ouvrent pas.',
            facts: [
              { label: 'VoiceOver dit', text: '« scellé sous un couvercle à clé (rouge), s’ouvre avec une ligne à côté : rouge ». À l’ouverture : « Le couvercle en vitrail (rouge) s’est ouvert. Ses briques peuvent bouger ».' },
            ],
            tip: 'Cherchez deux briques de la couleur du couvercle qui le touchent déjà : un seul glissement ou échange d’une troisième à côté d’elles l’ouvre.',
          },
          {
            t: 'entry',
            id: 'lid-clock',
            title: 'Couvercle à horloge (le parterre scellé)',
            what: 'Un couvercle avec une horloge et un nombre de coups. Sur **Le grand jour**, il recouvre souvent les deux cases du bas d’un coin ; le jeu l’appelle alors le **parterre scellé**.',
            how: 'Il s’ouvre tout seul après ce nombre de coups : chaque glissement, échange ou toucher compte pour un. Les bonus ne comptent pas. Sur les plateaux actuels, il demande de 3 à 6 coups.',
            facts: [
              { label: 'Première apparition', text: 'Niveau 11, Le grand jour, sous la forme du parterre scellé.' },
              { label: 'VoiceOver dit', text: '« scellé sous un couvercle horloge, s’ouvre dans 3 coups ». À l’ouverture : « Le couvercle à horloge s’est ouvert. Ses briques peuvent bouger ».' },
            ],
            tip: 'Rien de ce que vous faites ne l’ouvre plus tôt : jouez ailleurs et préparez la suite pour les briques en dessous.',
          },
          {
            t: 'entry',
            id: 'lid-keyhole',
            title: 'Couvercle à serrure',
            what: 'Un couvercle avec un cadenas. Quelque part à l’extérieur se trouve une [brique clé](#key) d’une couleur d’objectif.',
            how: 'Faites quitter le plateau à la brique clé : alignez-la dans une ligne, soufflez-la avec une explosion, ou faites-la sortir par une porte de sa couleur. Le couvercle s’ouvre aussitôt.',
            facts: [
              { label: 'VoiceOver dit', text: '« scellé sous un couvercle à serrure, s’ouvre avec une brique clé ». À l’ouverture : « Le couvercle à serrure s’est ouvert. Ses briques peuvent bouger ».' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'La première fois que vous rencontrez chaque couvercle, une carte d’apprentissage l’explique. Un couvercle qui refuse de s’ouvrir ne rend jamais un plateau impossible : chaque plateau du jeu a été vérifié comme gagnable, couvercles compris.',
          },
        ],
      },
      {
        id: 'gates',
        title: 'Les portes',
        blocks: [
          {
            t: 'p',
            text: 'Les portes sont des ouvertures de couleur dans le cadre du plateau, longues d’une, deux ou trois cases. Une porte dont la couleur est encore demandée par vos objectifs brille doucement ; une porte qui ne peut pas accepter de briques pour l’instant ne brille pas. Une porte de toute autre couleur, ou fermée, fait simplement partie du mur.',
          },
          {
            t: 'entry',
            id: 'gate',
            title: 'Porte ouverte',
            board: {
              rows: ['B . Y G', '. . . R+', 'G Y B .'],
              gates: [{ side: 'left', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 3, dir: 'left' }],
              after: { rows: ['B . Y G', '. . . .', 'G Y B .'] },
              caption: 'Amenée jusque dans la porte de sa couleur, une brique rentre chez elle.',
              alt: 'Un plateau de trois rangées et quatre colonnes, avec une porte rouge sur le bord gauche de la rangée du milieu. Rangée du haut : bleu, vide, jaune, vert. Rangée du milieu : trois cases vides, puis une brique rouge à droite. Rangée du bas : vert, jaune, bleu, vide. Une flèche fait glisser la brique rouge vers la gauche le long de la rangée du milieu vide. Résultat : elle traverse jusqu’au bord et sort par la porte rouge. La rangée du milieu est maintenant vide ; les autres briques ne changent pas.',
            },
            what: 'Une ouverture qui accepte les briques de sa propre couleur : briques simples, clés et rayons de ligne. Les bombes, les fléchettes et les bombes de couleur s’y arrêtent.',
            how: 'Trois façons d’y entrer. **Faites glisser** une brique dans son couloir et amenez-la jusque dans la porte : lâchez-la avant et elle reste là où vous l’avez lâchée. **Alignez** une brique de sa couleur sur la case du bord devant elle. **Faites exploser** une brique de sa couleur sur cette case du bord. Chacune compte comme renvoyée chez elle.',
            facts: [
              { label: 'Largeur', text: 'Une brique seule peut utiliser n’importe quelle case de la porte. Une brique longue ou grande a besoin d’une porte qui la couvre entièrement, et les cases derrière elle doivent être libres.' },
              { label: 'Objectif', text: '« Envoyer ou aligner » une couleur : les briques alignées ou soufflées n’importe où comptent autant que celles qui sortent par la porte.' },
              { label: 'VoiceOver dit', text: '« Porte : rouge, 2 cases de large, côté gauche, lignes 3 à 4 », et son état : « ouverte ».' },
            ],
          },
          {
            t: 'entry',
            id: 'counted-gate',
            title: 'Porte à compteur',
            board: {
              rows: ['R+ . G', 'B Y .'],
              gates: [{ side: 'left', at: 0, colour: 'R', kind: 'counted', count: 2 }],
              moves: [{ row: 0, col: 0, dir: 'left' }],
              after: { rows: ['. . G', 'B Y .'], gates: [{ side: 'left', at: 0, colour: 'R', kind: 'counted', count: 1 }] },
              caption: 'Une porte à compteur affiche combien de briques elle acceptera encore.',
              alt: 'Un plateau de deux rangées et trois colonnes, avec une porte rouge à compteur affichant 2 sur le bord gauche de la rangée du haut. Rangée du haut : rouge, vide, vert. Rangée du bas : bleu, jaune, vide. Une flèche fait glisser la brique rouge vers la gauche, par la porte. Résultat : la rouge est rentrée chez elle et la porte affiche maintenant 1 : elle acceptera encore une brique rouge, puis se fermera.',
            },
            what: 'Une porte avec un nombre : combien de briques elle acceptera encore.',
            how: 'Chaque brique qui passe par elle, en glissant, alignée ou soufflée devant elle, le fait baisser d’un. À zéro, elle **se ferme pour de bon** et devient un mur. Elle ne compte que les briques qui passent par elle ; les briques de sa couleur alignées ailleurs comptent toujours pour un objectif « Envoyer ou aligner », mais ne touchent pas au nombre de la porte.',
            facts: [
              { label: 'Première apparition', text: 'Niveau 11, Le grand jour.' },
              { label: 'VoiceOver dit', text: '« ouverte, en prend encore 3 », puis « fermée pour de bon ». Touchée : « Porte rouge : prend encore 3 briques (rouge), puis se ferme ».' },
            ],
            tip: 'Sur Le grand jour, la porte à compteur accepte un peu plus que ce que demande son objectif. Les briques longues de sa couleur ne peuvent partir que par une porte : gardez-leur de la place.',
          },
          {
            t: 'entry',
            id: 'iced-gate',
            title: 'Porte gelée',
            board: {
              rows: ['B+ . . Y', '. G . .', 'R . Y .'],
              gates: [
                { side: 'left', at: 0, colour: 'B' },
                { side: 'right', at: 2, colour: 'R', kind: 'iced' },
              ],
              moves: [{ row: 0, col: 0, dir: 'left' }],
              after: {
                rows: ['. . . Y', '. G . .', 'R . Y .'],
                gates: [
                  { side: 'left', at: 0, colour: 'B' },
                  { side: 'right', at: 2, colour: 'R' },
                ],
              },
              caption: 'Chaque brique qui rentre chez elle fait un peu dégeler la porte gelée. Celle-ci n’en demandait plus qu’une.',
              alt: 'Un plateau de trois rangées et quatre colonnes, avec une porte bleue sur le bord gauche de la rangée du haut et une porte rouge gelée sur le bord droit de la rangée du bas, à une brique du dégel. Rangée du haut : bleu à gauche, deux cases vides, jaune. Rangée du milieu : vide, vert, vide, vide. Rangée du bas : rouge, vide, jaune, vide. Une flèche fait glisser la brique bleue vers la gauche, par la porte bleue. Résultat : la bleue est rentrée chez elle, et la porte rouge de droite a dégelé : elle est ouverte.',
            },
            what: 'Une porte couverte de glace. Tant qu’elle n’a pas dégelé, elle n’accepte rien et fait partie du mur.',
            how: 'Elle dégèle pas à pas, de deux façons : **chaque brique qui rentre chez elle par n’importe quelle porte** fait dégeler chaque porte gelée d’un cran, et chaque pièce qui disparaît sur la case du bord **juste devant elle** la fait dégeler d’un cran. Quand la glace a disparu, faites-y glisser sa couleur.',
            facts: [
              { label: 'Première apparition', text: 'Niveau 5, Pots et glace.' },
              { label: 'Ressemble à, mais n’est pas', text: 'Une [brique dans la glace](#ice), à l’intérieur du plateau. Les portes à compteur et les portes gelées sont dessinées différemment : elles ne se ressemblent jamais.' },
              { label: 'VoiceOver dit', text: '« gelée, dégage encore 2 devant pour la dégeler », puis « ouverte » quand elle a dégelé.' },
            ],
            tip: 'Renvoyez tôt une brique facile chez elle, quelle que soit sa couleur : elle lance le dégel pendant que vous préparez le reste.',
          },
          {
            t: 'entry',
            id: 'staged-gate',
            title: 'Porte d’étape',
            what: 'Une porte derrière un volet sombre, avec un cadenas et un numéro d’étape. Elle appartient à un plateau dont les objectifs viennent en deux **étapes**, affichées « MANCHE 1 / 2 » dans le panneau des objectifs.',
            how: 'Terminez les objectifs de la première étape et la seconde commence : le volet s’ouvre et la porte accepte sa couleur. D’ici là, elle fait partie du mur.',
            facts: [
              { label: 'Première apparition', text: 'Niveau 54, sur les plateaux où rien ne tombe.' },
              { label: 'VoiceOver dit', text: '« verrouillée jusqu’à une étape suivante », et « De nouvelles portes s’ouvrent » quand l’étape change.' },
            ],
            tip: 'Pendant l’étape 1, rapprochez les briques de la deuxième étape de leur porte scellée, pour qu’elles soient prêtes dès son ouverture.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Chaque porte porte le symbole de sa couleur. Avec le **Plateau à fort contraste** activé, une porte dont la couleur est proche de celle du cadre reçoit un contour bicolore. Voir [Vue, audition et mouvement](help:vision-hearing-and-motion).',
          },
        ],
      },
      {
        id: 'portals',
        title: 'Les portails',
        blocks: [
          {
            t: 'entry',
            id: 'portal',
            title: 'Portail',
            what: 'Une paire d’anneaux tourbillonnants placés dans le cadre du plateau, sur deux côtés différents, marqués de la même lettre.',
            how: 'Faites glisser une brique **seule** (une brique simple, une clé ou une spéciale) dans son couloir jusqu’à la case du bord devant l’un des anneaux : elle y entre et ressort par son jumeau, en avançant vers l’intérieur jusqu’à rencontrer quelque chose. Cela coûte un coup. La case devant l’anneau jumeau doit être libre, et si une porte de la couleur de la brique l’accepte sur ce bord, elle rentre chez elle à la place. Les briques longues, grandes, en L et en T ne peuvent pas utiliser les portails.',
            facts: [
              { label: 'Première apparition', text: 'Niveau 58, sur les plateaux où rien ne tombe.' },
              { label: 'VoiceOver dit', text: 'L’action « Faire glisser vers la gauche à travers le portail », puis « À travers le portail, sortie en ligne 3, colonne 5 ».' },
            ],
            tip: 'Les portails sont des raccourcis vers une porte lointaine : une brique coincée d’un côté du plateau peut ressortir juste devant la porte qu’il lui faut.',
          },
        ],
      },
      {
        id: 'lookalikes',
        title: 'Distinguer ce qui se ressemble',
        blocks: [
          {
            t: 'table',
            head: ['Si vous voyez…', 'C’est…', 'Car…'],
            rows: [
              ['Une caisse qui a l’air plus solide', 'Une caisse à deux couches', 'Touchez-la : elle dit combien de couches il reste.'],
              ['Un panneau sur plusieurs briques, avec un signe', 'Un couvercle', 'Les couvercles recouvrent des briques ; une caisse occupe une case à elle seule.'],
              ['De la glace à l’intérieur du plateau', 'Une brique dans la glace', 'La glace sur le cadre, c’est une porte gelée.'],
              ['Une brique grise avec un « ? »', 'Une brique face cachée', 'Elle n’a pas de symbole de couleur ; un couvercle n’affiche jamais de « ? ».'],
              ['Une porte de couleur avec un nombre', 'Une porte à compteur', 'Une porte gelée montre de la glace, une porte d’étape un volet sombre avec un cadenas.'],
              ['Un tourbillon dans le cadre', 'Une extrémité de portail', 'Les portes sont colorées ; les extrémités de portail vont par paires marquées d’une lettre.'],
              ['Un ornement dans un trou', 'Une statue', 'C’est un élément du décor : touchez-la et elle vous le dit.'],
            ],
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'Les obstacles avec VoiceOver',
        blocks: [
          {
            t: 'list',
            items: [
              'Les obstacles et les éléments fixes se lisent comme du texte, et les pièces que vous pouvez déplacer comme des boutons : vous savez tout de suite ce qui peut bouger. Choisir une pièce immobile dit par exemple « Caisse, 2 couches. Ne peut pas bouger ».',
              'Chaque brique recouverte annonce son couvercle, et chaque porte est un élément à part, avec sa largeur, son côté, ses lignes ou colonnes et son état.',
              'Le rotor **Obstacles** passe d’une caisse, d’une glace, d’un verrou, d’une mousse et du reste à l’autre ; le rotor **Portes**, d’une porte à l’autre.',
              'Le **Plus de contenu** de chaque pièce indique l’obstacle qui la couvre et si un objectif en a besoin.',
              'La couleur d’une brique face cachée n’est jamais annoncée avant qu’elle se retourne ; vous entendez alors « Retournée : » suivi de sa couleur.',
            ],
          },
          { t: 'p', text: 'Tout le reste se trouve dans [Jouer avec VoiceOver](help:voiceover).' },
        ],
      },
      {
        id: 'faq',
        title: 'Questions',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Pourquoi ma brique s’est-elle arrêtée devant la porte au lieu de rentrer chez elle ?',
                a: 'Vérifiez cinq choses : la porte est de la couleur de la brique ; elle n’est ni gelée, ni pleine, ni scellée jusqu’à une étape suivante ; la brique n’est ni une bombe, ni une fléchette, ni une bombe de couleur ; une brique longue ou grande a une porte aussi large qu’elle ; et vous avez amené la brique jusque dans la porte. Une brique lâchée juste avant sa porte reste là où vous l’avez lâchée.',
              },
              {
                q: 'J’ai déplacé une brique face cachée et elle est restée cachée. C’est un bug ?',
                a: 'Non. Une brique face cachée ne se retourne que lorsqu’une brique voisine quitte le plateau, jamais quand elle bouge ou qu’une voisine glisse plus loin. C’est la règle qu’a toujours eue le jeu d’origine.',
              },
              {
                q: 'Pourquoi n’y a-t-il pas d’indice sur ce plateau ?',
                a: 'Sur les plateaux avec des briques face cachée, l’indice ne propose jamais un coup qui trahirait une couleur cachée. Si chaque bon coup implique une brique face cachée, aucun indice ne s’affiche plutôt qu’un indice qui triche.',
              },
              {
                q: 'La mousse n’arrête pas de pousser. Que faire ?',
                a: 'La mousse ne s’étend que sur les plateaux Verrous et mousse, sur une brique voisine, après un coup qui n’en retire pas. Éliminez une touffe avec une ligne à côté aussi souvent que possible, et utilisez le bonus **OVNI** sur la mousse mal placée : les bonus ne la font jamais pousser.',
              },
              {
                q: 'Un couvercle ou un obstacle peut-il rendre un plateau impossible ?',
                a: 'Non. Chaque plateau a été vérifié comme gagnable. Si plus rien ne peut bouger, le plateau est mélangé gratuitement ; si la mousse a envahi toutes les colonnes, elle se fane, et en dernier recours la glace ou le verrou d’une brique cède. Voir [Jouer un plateau](help:playing-a-board#never-stuck).',
              },
            ],
          },
        ],
      },
    ],
    related: ['special-bricks-and-combos', 'board-kinds', 'bricks-specials-and-blockers', 'playing-a-board', 'boosters-and-pause', 'voiceover'],
  },

  {
    slug: 'board-kinds',
    category: 'learn',
    cover: 'board-shapes',
    title: 'Les douze types de plateaux',
    summary:
      'Les douze plateaux de chaque village suivent le même schéma de douze types, de Retour à la maison à Puzzle tranquille. Ce qu’apporte chaque type, en quoi les plateaux où les briques tombent diffèrent de ceux où rien ne tombe, et ce que changent les plateaux Difficile, Très difficile, Boss et Nuit.',
    keywords:
      'plateau type sorte modèle archétype village douze 12 gravité chute briques qui tombent immobile sans remplissage retour à la maison glisser et aligner jardin ouvert jardin qui tombe pots et glace briques longues pièces d’angle caisses et glace verrous et mousse allées de pierre grand jour puzzle tranquille difficile très difficile boss nuit niveau de difficulté plaque',
    host: 'vio',
    hostPose: 'idle',
    sections: [
      {
        id: 'overview',
        title: 'Aide-mémoire',
        blocks: [
          {
            t: 'p',
            text: 'Chaque village compte douze plateaux, et les plateaux 1 à 12 d’un village sont toujours du même type, dans le même ordre : le rythme d’un village devient vite familier. Les douze plateaux de la Cité-Jardin (niveaux 1 à 12) portent ces noms et enseignent chacun un type ; les villages suivants donnent leurs propres titres à leurs plateaux mais gardent le même schéma.',
          },
          {
            t: 'table',
            head: ['Plateau', 'Type', 'Les briques tombent ?', 'Ce qu’il apporte'],
            rows: [
              ['1', '[Retour à la maison](#send-them-home)', 'Non', 'Faites sortir les briques par leurs portes.'],
              ['2', '[Glisser et aligner](#slide-and-match)', 'Non', 'Récoltez des couleurs avec des lignes, renvoyez-en une chez elle.'],
              ['3', '[Jardin ouvert](#open-garden)', 'Non', 'Un plateau spacieux qui s’ouvre à mesure que vous jouez.'],
              ['4', '[Jardin qui tombe](#falling-garden)', 'Oui', 'Les mêmes objectifs, avec des chutes et de nouvelles briques.'],
              ['5', '[Pots et glace](#pots-and-ice)', 'Non', 'Des caisses, des briques dans la glace et une porte gelée.'],
              ['6', '[Briques longues](#long-bricks)', 'En général', 'Des briques longues et des portes assez larges pour elles.'],
              ['7', '[Pièces d’angle](#corner-pieces)', 'Oui, sans nouvelles briques', 'Des briques en L et en T.'],
              ['8', '[Caisses et glace](#crates-and-ice)', 'En général', 'Des caisses à une et deux couches, plus de glace.'],
              ['9', '[Verrous et mousse](#locks-and-moss)', 'Oui', 'Des verrous à ouvrir et de la mousse qui s’étend.'],
              ['10', '[Allées de pierre](#stone-lanes)', 'En général', 'Des statues qui découpent le plateau en couloirs.'],
              ['11', '[Le grand jour](#the-big-day)', 'Oui', 'La finale du village : un peu de tout.'],
              ['12', '[Puzzle tranquille](#quiet-puzzle)', 'Oui, sans nouvelles briques', 'Quelques grosses briques et des portes larges.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: '« En général » signifie : de Clover Farm jusqu’au niveau 408, dans chaque village, deux des types Briques longues, Caisses et glace et Allées de pierre se jouent sans que rien ne tombe, et le troisième avec des chutes ; lequel tombe change d’un village à l’autre. À partir du niveau 409, les trois tombent.',
          },
        ],
      },
      {
        id: 'gravity',
        title: 'Les plateaux où les briques tombent, et ceux où rien ne tombe',
        blocks: [
          {
            t: 'table',
            head: ['Ce qui change', 'Rien ne tombe', 'Les briques tombent'],
            rows: [
              ['Après un alignement', 'Les cases vidées restent vides, ce qui ouvre des couloirs pour les glissements.', 'Les briques du dessus tombent dans le trou, et les briques seules contournent les obstacles en diagonale.'],
              ['Nouvelles briques', 'Jamais.', 'Elles arrivent par le haut, mais seulement jusqu’à ce que le plateau soit aussi plein qu’au départ. Pièces d’angle et Puzzle tranquille n’en reçoivent aucune.'],
              ['Glissements', 'Dans toutes les directions.', 'Seulement sur le côté, ou tout droit vers une porte (y compris vers le bas, dans une porte du sol).'],
              ['Portes', 'Sur tous les côtés.', 'Sur les côtés et au sol.'],
              ['Cascades', 'Rares.', 'Fréquentes : les briques qui tombent peuvent former de nouvelles lignes.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['B Y G', 'R R Y', 'G B R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['B Y G', '. . .', 'G B Y'] },
              caption: 'Là où rien ne tombe, un alignement laisse un trou dans lequel vous pouvez glisser.',
              alt: 'Un plateau de trois rangées et trois colonnes où rien ne tombe. Rangée du haut : bleu, jaune, vert. Rangée du milieu : rouge, rouge, jaune. Rangée du bas : vert, bleu, rouge. Une flèche échange vers le haut la rouge en bas à droite avec la jaune au-dessus. Résultat : trois rouges disparaissent et la rangée du milieu reste vide : rien n’y tombe. La jaune est maintenant en bas à droite.',
            },
          },
          {
            t: 'board',
            board: {
              rows: ['. . .', 'B Y G', 'R R Y', 'G B R'],
              moves: [{ row: 3, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['. . .', 'O K B', 'B Y G', 'G B Y'] },
              caption: 'Là où les briques tombent, les briques du dessus comblent le trou et de nouvelles arrivent, jusqu’au nombre de départ du plateau.',
              alt: 'Un plateau de quatre rangées et trois colonnes où les briques tombent, avec la rangée du haut vide. Rangée 2 : bleu, jaune, vert. Rangée 3 : rouge, rouge, jaune. Rangée 4 : vert, bleu, rouge. Une flèche échange vers le haut la rouge en bas à droite avec la jaune au-dessus. Résultat : les trois rouges de la rangée 3 disparaissent, la bleue, la jaune et la verte du dessus tombent dans la rangée 3, et trois nouvelles briques, ici orange, rose et bleue, arrivent dans la rangée 2. La rangée du haut reste vide, car le plateau ne se remplit que jusqu’au nombre de briques de départ. La jaune est maintenant en bas à droite.',
            },
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Vous ne pouvez jamais rester bloqué. S’il n’y a plus de coup possible, le plateau est mélangé gratuitement ; un plateau qui ne mène nulle part est discrètement redistribué ; et s’il manque au plateau une couleur dont un objectif a besoin, des briques en trop prennent cette couleur (ou, là où les briques tombent, cette couleur se met à arriver par le haut).',
          },
        ],
      },
      {
        id: 'kinds',
        title: 'Les douze types',
        blocks: [
          {
            t: 'entry',
            id: 'send-them-home',
            title: '1 · Retour à la maison',
            board: {
              rows: ['R+ . . B', '. Y . .', 'B . R .'],
              gates: [
                { side: 'left', at: 0, colour: 'R' },
                { side: 'right', at: 2, colour: 'B' },
              ],
              moves: [{ row: 0, col: 0, dir: 'left' }],
              caption: 'Le premier type : amenez les briques dans les portes de leur couleur.',
              alt: 'Un plateau de trois rangées et quatre colonnes, avec une porte rouge sur le bord gauche de la rangée du haut et une porte bleue sur le bord droit de la rangée du bas. Rangée du haut : rouge à gauche, deux cases vides, bleu à droite. Rangée du milieu : vide, jaune, vide, vide. Rangée du bas : bleu, vide, rouge, vide. Une flèche fait glisser vers la gauche la brique rouge en haut à gauche, par la porte rouge juste à côté.',
            },
            what: 'Un plateau où rien ne tombe, rempli aux deux tiers environ, avec des portes aux couleurs des objectifs. Les objectifs : « Envoyer ou aligner » deux couleurs, ou trois plus loin dans le Voyage.',
            how: 'Trouvez une brique d’une couleur d’objectif qui a un couloir libre jusqu’à sa porte et amenez-la dedans. Quand un couloir est bloqué, faites disparaître les briques gênantes en les alignant, ou poussez-les sur le côté.',
            facts: [{ label: 'Première rencontre', text: 'Niveau 1.' }],
            tip: 'Une couleur d’objectif peut aussi être alignée n’importe où : trois en ligne comptent pour trois, sans passer par une porte.',
          },
          {
            t: 'entry',
            id: 'slide-and-match',
            title: '2 · Glisser et aligner',
            what: 'Rien ne tombe. Deux couleurs à **récolter** avec des lignes, et une à renvoyer chez elle.',
            how: 'Faites glisser une brique à côté de deux briques de sa couleur pour former une ligne, ou échangez deux voisines. Chaque ligne vide ses cases pour de bon : chaque alignement ouvre donc de la place pour le glissement suivant.',
            facts: [{ label: 'Première rencontre', text: 'Niveau 2.' }],
            tip: 'Un glissement peut parcourir n’importe quelle distance et s’arrête là où vous lâchez : il forme des lignes qu’un échange n’atteindrait jamais.',
          },
          {
            t: 'entry',
            id: 'open-garden',
            title: '3 · Jardin ouvert',
            what: 'Un plateau plus grand (8×8 au début) où rien ne tombe : renvoyez deux couleurs chez elles et récoltez-en une troisième.',
            how: 'Prévoyez quelques coups d’avance. Chaque brique que vous faites disparaître laisse de la place pour glisser : dégager les briques entre une brique d’objectif et sa porte vaut souvent mieux que l’alignement le plus proche.',
            facts: [{ label: 'Première rencontre', text: 'Niveau 3.' }],
          },
          {
            t: 'entry',
            id: 'falling-garden',
            title: '4 · Jardin qui tombe',
            what: 'Les mêmes objectifs que Jardin ouvert, mais les briques tombent et de nouvelles arrivent par le haut.',
            how: 'Jouez dans le bas du plateau : les alignements près du bas font bouger tout ce qui est au-dessus et préparent des cascades. Glissez sur le côté dans les trous, ou tout droit vers le bas dans une porte du sol.',
            facts: [{ label: 'Première rencontre', text: 'Niveau 4.' }],
            tip: 'L’objectif de récolte grandit au fil du Voyage ; les cascades font une bonne partie du travail à votre place.',
          },
          {
            t: 'entry',
            id: 'pots-and-ice',
            title: '5 · Pots et glace',
            what: 'Rien ne tombe. Des caisses à une couche, des briques dans la glace et une **porte gelée**, en général d’une troisième couleur. Les objectifs : renvoyer trois couleurs chez elles et casser quelques caisses.',
            how: 'Cassez les caisses et la glace avec des lignes juste à côté. Renvoyez tôt n’importe quelle brique chez elle : chaque brique qui sort par une porte fait un peu dégeler la porte gelée.',
            facts: [{ label: 'Première rencontre', text: 'Niveau 5. Expliqué dans [Tous les obstacles, couvercles et portes, expliqués](help:blockers-encyclopedia#iced-gate).' }],
          },
          {
            t: 'entry',
            id: 'long-bricks',
            title: '6 · Briques longues',
            what: 'Des briques longues (1×2 et 2×1, puis 1×3 et 3×1) aux couleurs des objectifs, chacune avec quelque part une porte assez large pour elle. Les objectifs : renvoyer deux couleurs chez elles, chaque brique longue comptant pour chacune de ses cases.',
            how: 'Alignez une brique longue sur une porte qui la couvre entièrement et vérifiez que les cases derrière elle sont libres. Les briques longues ne s’échangent jamais et ne sont jamais soufflées : dégagez leurs couloirs avec des lignes de briques seules.',
            facts: [{ label: 'Première rencontre', text: 'Niveau 6.' }],
          },
          {
            t: 'entry',
            id: 'corner-pieces',
            title: '7 · Pièces d’angle',
            what: 'Des briques en L et en T (plus tard quelques longues) et quelques briques seules, uniquement dans les deux couleurs d’objectif, sur un plateau où les briques tombent mais où **aucune nouvelle n’arrive**. La porte d’une couleur se trouve en bas à gauche, celle de l’autre en bas à droite, et le sol est bordé de portes larges de trois cases, alternant les deux couleurs.',
            how: 'Chaque brique qui se pose atterrit au-dessus ou à côté d’une porte : réfléchissez à l’ordre, et renvoyez d’abord la pièce qui libère le plus de place.',
            facts: [{ label: 'Première rencontre', text: 'Niveau 7.' }],
          },
          {
            t: 'entry',
            id: 'crates-and-ice',
            title: '8 · Caisses et glace',
            what: 'Plus de caisses (à deux couches à partir de Clover Farm) et des briques dans la glace. Les objectifs : casser des caisses, chaque couche comptant, et renvoyer une couleur chez elle.',
            how: 'Faites des lignes à côté des caisses, surtout des lignes qui en touchent deux à la fois. La double explosion d’une bombe est idéale pour les caisses à deux couches.',
            facts: [{ label: 'Première rencontre', text: 'Niveau 8.' }],
          },
          {
            t: 'entry',
            id: 'locks-and-moss',
            title: '9 · Verrous et mousse',
            what: 'Les briques tombent. Des briques verrouillées et de la mousse, et c’est le seul type où la mousse s’étend. Les objectifs : ouvrir tous les verrous, éliminer de la mousse et renvoyer une couleur chez elle.',
            how: 'Libérez les verrous avec des lignes qui les **traversent** ; éliminez la mousse avec des lignes **à côté**. Retirez un peu de mousse dès que vous le pouvez, avant qu’elle ne gagne du terrain.',
            facts: [{ label: 'Première rencontre', text: 'Niveau 9.' }],
          },
          {
            t: 'entry',
            id: 'stone-lanes',
            title: '10 · Allées de pierre',
            board: {
              rows: ['Y . . . .', 'R . s . B', 'G . s . .', 'B . . . .'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              caption: 'Les statues découpent des couloirs : cette rouge ne peut pas atteindre sa porte par sa propre rangée.',
              alt: 'Un plateau de quatre rangées et cinq colonnes où rien ne tombe, avec une porte rouge sur le bord droit de la rangée 2. Une colonne de deux statues se dresse au milieu des rangées 2 et 3. Rangée 1 : jaune à gauche, puis quatre cases vides. Rangée 2 : rouge à gauche, vide, statue, vide, bleu. Rangée 3 : vert à gauche, vide, statue, deux cases vides. Rangée 4 : bleu à gauche, puis quatre cases vides. Le couloir de la brique rouge vers sa porte est bloqué par la statue ; les rangées du haut et du bas sont les couloirs libres pour la contourner.',
            },
            what: 'Des statues se dressent en courtes colonnes sur le plateau, avec une brique longue et, plus tard, quelques caisses. Les objectifs : renvoyer deux couleurs chez elles et en récolter une troisième.',
            how: 'Lisez les couloirs avant de bouger : les statues ne se cassent jamais, alors amenez les briques par les rangées libres. L’explosion d’un rayon de ligne passe par-dessus les statues.',
            facts: [{ label: 'Première rencontre', text: 'Niveau 10.' }],
          },
          {
            t: 'entry',
            id: 'the-big-day',
            title: '11 · Le grand jour',
            what: 'La finale du village, où les briques tombent : des briques longues et grandes, des caisses (à deux couches plus tard), de la glace, et plus tard des verrous ; une **porte gelée** dans la première couleur d’objectif, une **porte à compteur** dans la deuxième, et souvent un **parterre scellé**, un couvercle à horloge sur deux cases du sol dans un coin. Les objectifs : renvoyer deux couleurs chez elles et casser des caisses.',
            how: 'Lancez tôt le dégel en renvoyant n’importe quelle brique chez elle, gardez la place de la porte à compteur pour les briques qui ne peuvent partir que par une porte, et laissez le parterre scellé s’ouvrir tout seul pendant que vous jouez ailleurs.',
            facts: [
              { label: 'Première rencontre', text: 'Niveau 11.' },
              { label: 'Bon à savoir', text: 'Le niveau 2 000, la fin du Voyage, est un Grand jour de nuit.' },
            ],
          },
          {
            t: 'entry',
            id: 'quiet-puzzle',
            title: '12 · Puzzle tranquille',
            what: 'Un plateau plus petit (8×6 au début) avec quelques grosses briques (2×2, 1×2 et 2×1, puis 1×3, 3×1, L et T) et quelques briques seules, uniquement dans les deux couleurs d’objectif. Les briques tombent mais aucune nouvelle n’arrive, et les portes sont placées comme sur Pièces d’angle : en bas de chaque côté et tout le long du sol.',
            how: 'Prenez votre temps. Rien de nouveau n’arrive : chaque coup change donc le plateau pour de bon. Repérez quelle pièce en bloque quelle autre, puis renvoyez-les chez elles dans cet ordre.',
            facts: [{ label: 'Première rencontre', text: 'Niveau 12.' }],
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Niveau 31 sur la plage : 16 coups restants, objectifs de 8 jaunes et 8 bleues. De grosses briques d’un seul tenant sont empilées en bas du plateau : une longue barre bleue, une haute colonne bleue et une pièce jaune en forme de C, avec des portes bleues et jaunes sur les bords.',
            caption: 'Des grosses briques et des portes larges, près du début du Voyage.',
          },
        ],
      },
      {
        id: 'extras',
        title: 'Ce qu’un plateau peut ajouter',
        blocks: [
          {
            t: 'p',
            text: 'En plus de son type, un plateau peut comporter quelques extras. Chacun a sa propre carte d’apprentissage la première fois que vous le rencontrez.',
          },
          {
            t: 'list',
            items: [
              '**Un plateau à forme.** Beaucoup de plateaux suivent le contour de leur village, avec des trous dans la plaque. Un trou arrête un glissement comme le cadre.',
              '**Une salle scellée** sous l’un des [cinq couvercles](help:blockers-encyclopedia#lids), sur certains plateaux de chaque type sauf Pièces d’angle et Puzzle tranquille.',
              '**Des briques face cachée « ? »**, à partir du niveau 49. Voir [Brique face cachée](help:blockers-encyclopedia#face-down).',
              '**Des objectifs en étapes** avec des portes scellées, à partir du niveau 54, et des **portails**, à partir du niveau 58, tous deux sur les plateaux où rien ne tombe.',
              '**Des caisses ou de la glace en plus** sur les types les plus simples.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Dans la version 5.1.1, les salles scellées autres que le parterre scellé du Grand jour, les briques face cachée, les objectifs en étapes, les portails et les caisses et la glace en plus apparaissent sur les plateaux jusqu’au niveau 408. Les plateaux à forme apparaissent tout au long du Voyage.',
          },
          {
            t: 'p',
            text: 'Les plateaux grandissent aussi au fil du Voyage : jusqu’à 9×9, avec plus de couleurs (trois ou quatre au début, cinq ou six plus tard), plus d’obstacles et des objectifs plus grands. Dans un même village, deux plateaux n’ont jamais la même disposition.',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Plateaux Difficile, Très difficile, Boss et Nuit',
        blocks: [
          {
            t: 'p',
            text: 'Certains plateaux sont plus durs que leurs voisins. L’étape de niveau sur la carte du Voyage affiche une plaque avant de jouer (**DIFFICILE**, **TRÈS DIFFICILE**, **BOSS** ou **NUIT**), et le plateau porte la même plaque sous son en-tête.',
          },
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Niveau 35 au crépuscule, 28 coups restants, avec une plaque violette DIFFICILE sous les objectifs : 2 jaunes, 5 roses et 3 châteaux de sable. Le plateau en forme de château contient une grosse brique rose, des briques couvertes de mousse et quatre caisses en château de sable, avec des portes jaunes, roses et rouges.',
            caption: 'Un plateau Difficile porte sa plaque sous l’en-tête.',
          },
          {
            t: 'table',
            head: ['Difficulté', 'Où', 'Ce qui change', 'Pièces gagnées'],
            rows: [
              ['Normal', 'La plupart des plateaux.', 'Pas de plaque.', '25'],
              ['Difficile', 'Environ un plateau sur trois à partir du niveau 14.', 'Les objectifs demandent environ 15 % de plus, avec quelques obstacles en plus.', '50'],
              ['Très difficile', 'Environ un plateau sur sept à partir du niveau 39.', 'Les objectifs demandent environ 30 % de plus.', '80'],
              ['Boss', 'Le dernier plateau de chaque chapitre de vingt, à partir du niveau 40, sauf si c’est un plateau Nuit.', 'Les objectifs demandent environ 40 % de plus.', '80'],
              ['Nuit', 'Un niveau sur 25 à partir du 115 (115, 140, 165…).', 'Il se joue à la nuit tombée, comme un plateau Difficile.', '50'],
            ],
          },
          {
            t: 'list',
            items: [
              'Les plateaux Très difficile et Boss ont aussi quelques obstacles en plus, et loin dans le Voyage, ils peuvent utiliser une couleur de plus, ce qui rend les lignes plus difficiles à trouver.',
              'Sur les difficultés les plus élevées, les coups sont fixés pour que moins de joueurs réussissent du premier coup. Chaque plateau reste vérifié comme gagnable.',
              'Avec deux étoiles ou plus, un bonus d’objectif s’ajoute aux pièces, et les événements peuvent les doubler ou les tripler. Voir [Jouer un plateau](help:playing-a-board#tiers).',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'VoiceOver lit la difficulté après le numéro du niveau dans le résumé du plateau, par exemple « Boss ».',
          },
        ],
      },
      {
        id: 'approach',
        title: 'Par où commencer, quel que soit le type',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Lisez d’abord le panneau des objectifs.** Les objectifs « Envoyer ou aligner » prennent les briques de cette couleur quelle que soit la façon dont elles partent ; les objectifs « Récolte » veulent des lignes ou des explosions ; les objectifs de caisses, de verrous et de mousse veulent des lignes à côté ou à travers.',
              '**Repérez les portes.** Les portes que vos objectifs demandent encore brillent doucement. Vérifiez leur largeur avant de prévoir le trajet d’une brique longue.',
              '**Comparez vos coups aux objectifs.** Si un objectif demande huit briques et que vous avez quinze coups, cherchez les spéciales : un seul rayon de ligne peut faire le travail de plusieurs coups.',
              '**Sur les plateaux où rien ne tombe, pensez en couloirs.** Chaque alignement laisse un trou : choisissez les alignements qui ouvrent le couloir dont vous aurez besoin ensuite.',
              '**Sur les plateaux où les briques tombent, jouez par le bas.** Les alignements bas font bouger une plus grande partie du plateau et lancent des cascades.',
              '**Bloqué ? Demandez un indice.** Vous avez un Indice offert à chaque essai, et avec VoiceOver, le toucher deux fois avec deux doigts en donne un à tout moment.',
            ],
          },
        ],
      },
      {
        id: 'faq',
        title: 'Questions',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Pourquoi ne puis-je pas faire glisser une brique vers le haut ou le bas sur ce plateau ?',
                a: 'C’est un plateau où les briques tombent. Une brique retomberait aussitôt : sur ces plateaux, les briques glissent donc sur le côté, ou tout droit vers une porte, y compris vers le bas dans une porte du sol.',
              },
              {
                q: 'Pourquoi de nouvelles briques n’arrivent-elles plus ?',
                a: 'Sur les plateaux où les briques tombent, les nouvelles ne remplissent le plateau que jusqu’au nombre de briques de départ : il reste donc toujours de la place pour glisser. Les plateaux Pièces d’angle et Puzzle tranquille ne se remplissent jamais : ils se vident à mesure que vous les résolvez.',
              },
              {
                q: 'Comment savoir si un plateau est Difficile avant de commencer ?',
                a: 'Regardez l’étape de niveau sur la carte du Voyage : les plateaux Difficile, Très difficile, Boss et Nuit y portent une plaque, et la même plaque sous l’en-tête du plateau.',
              },
              {
                q: 'Pourquoi le plateau 6 de ce village ne ressemble-t-il pas du tout au plateau 6 du précédent ?',
                a: 'Le type fixe l’idée (des briques longues et des portes larges) ; le village fixe l’apparence, la forme du plateau, les couleurs et l’ampleur du défi : le même type est donc disposé différemment d’un village à l’autre.',
              },
              {
                q: 'Les plateaux Boss rapportent-ils quelque chose de spécial ?',
                a: 'Un plateau Boss clôt un chapitre et rapporte les mêmes 80 pièces qu’un plateau Très difficile, plus le bonus d’objectif pour deux étoiles ou plus. Le terminer achève le chapitre.',
              },
            ],
          },
        ],
      },
    ],
    related: ['special-bricks-and-combos', 'blockers-encyclopedia', 'playing-a-board', 'bricks-specials-and-blockers', 'journey-and-villages', 'lives-moves-and-undos'],
  },
];
