import type { HelpArticle } from '../../model.ts';

/** Primeros pasos y cómo jugar un tablero, en español. Comprobado con la 5.1.1 (68). */
export const playArticles: HelpArticle[] = [
  {
    slug: 'welcome',
    category: 'start',
    cover: 'garden-teach',
    title: 'Te damos la bienvenida a OutBrick: tu primer tablero',
    summary:
      'Qué es OutBrick, cómo funcionan las tarjetas de aprendizaje, cómo leer los objetivos de un tablero y qué pasa cuando lo superas.',
    keywords: 'jugador nuevo principiante tutorial cómo se juega primera vez empezar instrucciones aprender reglas',
    sections: [
      {
        id: 'what',
        title: 'Qué es OutBrick',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick es un puzle tranquilo de **deslizar y combinar**. Cada tablero es un jardín de ladrillos de juguete con puertas de colores en sus bordes. **Desliza** un ladrillo hasta la puerta de su color y volverá a casa, o **cambia** dos vecinos para formar una línea de tres y hacerlos desaparecer. Cada tablero tiene objetivos que cumplir con un número de movimientos, y nunca hay reloj.',
          },
          {
            t: 'list',
            items: [
              '**2.000 niveles** a lo largo del Viaje, repartidos en **167 aldeas**, cada una con su propio aspecto y doce tipos de tablero.',
              '**Nueve amigos de ladrillo** (Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry y Poppy) te animan con bocadillos de texto.',
              '**Gratis.** Hay vídeos y compras opcionales, pero las vidas vuelven solas y nunca necesitas gastar para seguir jugando.',
            ],
          },
        ],
      },
      {
        id: 'first-board',
        title: 'Tu primer tablero',
        blocks: [
          {
            t: 'p',
            text: 'En **Inicio**, toca el gran botón verde **Nivel**. La primera vez que te encuentras con una idea nueva, una breve tarjeta de aprendizaje te la muestra con una mano que se mueve. Toca en cualquier sitio para empezar a jugar.',
          },
          {
            t: 'shot',
            id: 'garden-teach',
            alt: 'Un tablero de Ciudad Jardín con ladrillos rojos, morados y naranjas. Una tarjeta rosa de aprendizaje en la parte inferior dice: Desliza un ladrillo junto a dos de su color para hacer una línea, o empújalo contra un vecino para cambiarlos. ¡Las líneas desaparecen! Debajo: ¡Te toca! Pruébalo. Una mano señala un ladrillo.',
            caption: 'Una tarjeta de aprendizaje en el nivel 2. Cada idea nueva tiene su tarjeta, la primera vez que aparece.',
          },
          {
            t: 'steps',
            items: [
              '**Deslizar:** arrastra un ladrillo hacia un hueco. Avanza hasta que lo sueltas o choca con algo. Llévalo hasta la puerta de su color y saldrá del tablero.',
              '**Cambiar:** empuja un ladrillo contra un vecino. Si así se forma una línea de tres o más (o un cuadrado de 2×2), desaparecen. Si no, los ladrillos vuelven a su sitio y **no gastas ningún movimiento**.',
              '**Vigila los objetivos** en el panel de arriba. Cada marca de verificación indica un objetivo cumplido.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: '¿No sabes qué hacer? Toca el potenciador **Pista** de la bandeja. En cada intento tienes una Pista, un Cohete y un OVNI gratis.',
          },
        ],
      },
      {
        id: 'goals',
        title: 'Cómo leer los objetivos',
        blocks: [
          {
            t: 'p',
            text: 'El **panel de objetivos** de arriba muestra lo que pide este tablero y cuánto falta: ladrillos de un color que mandar a casa o combinar, cajas que romper, candados que abrir o musgo que quitar. Cada objetivo lleva el mismo símbolo para daltonismo que sus ladrillos. Algunos tableros tienen dos **fases**: cumple los primeros objetivos y se abrirán puertas nuevas para la segunda.',
          },
          { t: 'p', text: 'Cada parte de la pantalla se explica en [Jugar un tablero](help:playing-a-board#screen).' },
        ],
      },
      {
        id: 'clear',
        title: 'Cuando superas un tablero',
        blocks: [
          {
            t: 'shot',
            id: 'clear',
            alt: 'La tarjeta de victoria: una cinta dorada con el texto Cresta Cohete 4, una insignia de ¡Capítulo completo!, tres estrellas doradas, un amigo de ladrillo verde celebrándolo, la palabra ¡Brillante!, una puntuación de 5.470, más 140 monedas, una etiqueta ¡A la primera!, una línea de cofre del viaje y los botones Inicio, Siguiente y Compartir.',
            caption: 'La tarjeta de victoria: tus estrellas, tu puntuación, tus monedas y las recompensas que hayas recogido por el camino.',
          },
          {
            t: 'list',
            items: [
              'Los movimientos que te sobran se convierten en rayos de línea y estallan, y cada uno suma 150 puntos. Toca para saltarte la animación.',
              'Superar un tablero siempre da al menos una estrella; con más puntuación consigues dos o tres.',
              '**Siguiente** te lleva al siguiente tablero; **Inicio** te devuelve al principio. Con **Juego rápido** activado (Ajustes › Juego), al ganar pasas directamente al siguiente tablero.',
              'Ganar nunca cuesta una vida. Las vidas solo se gastan cuando pierdes un intento. Consulta [Vidas, movimientos y deshacer](help:lives-moves-and-undos).',
            ],
          },
        ],
      },
      {
        id: 'next',
        title: 'Qué leer después',
        blocks: [
          {
            t: 'list',
            items: [
              '[Un recorrido por todos los menús](help:menus-tour), para saber qué hace cada botón.',
              '[Ladrillos especiales, obstáculos y tipos de tablero](help:bricks-specials-and-blockers), en cuanto te encuentres con algo nuevo.',
              '[Accesibilidad](help:accessibility) y [Jugar con VoiceOver](help:voiceover), si quieres que el juego se adapte mejor a ti.',
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
    title: 'Un recorrido por todos los menús',
    summary:
      'La barra inferior, Inicio, el mapa del Viaje, la Tienda, el Pase Ladrillo, el Ranking, tu Perfil, la Colección y los Ajustes: para qué sirve cada uno y cómo llegar.',
    keywords: 'navegación pestañas barra inferior dónde está encontrar botón perfil colección engranaje menú ajustes ranking',
    sections: [
      {
        id: 'tab-bar',
        title: 'La barra inferior',
        blocks: [
          { t: 'p', text: 'En la parte inferior de la pantalla hay cinco pestañas. También puedes deslizar a la izquierda o a la derecha para pasar de una a otra.' },
          {
            t: 'table',
            head: ['Pestaña', 'Qué contiene'],
            rows: [
              ['**Inicio**', 'Tus amigos en su escenario de ladrillos y el gran botón **Nivel**.'],
              ['**Ranking**', 'La clasificación. Se desbloquea en el nivel 21.'],
              ['**Viaje**', 'La pestaña central, más elevada: el mapa de los 2.000 niveles.'],
              ['**Tienda**', 'Monedas, potenciadores, packs, vidas y el armario.'],
              ['**Pase**', 'La temporada del Pase Ladrillo, con accesos directos a Misiones y a la Colección.'],
            ],
          },
        ],
      },
      {
        id: 'home',
        title: 'Inicio',
        blocks: [
          {
            t: 'shot',
            id: 'home',
            alt: 'Inicio: arriba, el avatar, 2.580 monedas, una racha de 12 días, Misiones y el engranaje de Ajustes. Bajo el logotipo de OUTBRICK, una tarjeta anuncia un evento que empieza pronto. Tres amigos ladrillo con sombrero de sol están en un césped de ladrillos sobre un botón verde Nivel 214. La barra inferior muestra las cinco pestañas.',
            caption: 'Inicio. La fila de arriba, de izquierda a derecha: tu avatar, las monedas, la racha de días, Misiones, la Rueda cuando está lista y el engranaje de Ajustes.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Avatar', text: 'Abre tu **Perfil**.' },
              { term: 'Monedas', text: 'Abre la Tienda.' },
              { term: 'Racha (llama)', text: 'Muestra tu racha de días y cuándo llega la próxima recompensa por racha. La racha crece cada día que superas un tablero.' },
              { term: 'Misiones', text: 'Tres cosas para hoy y tres para la semana.' },
              { term: 'Rueda', text: 'Un giro gratis al día para ganar monedas o un potenciador.' },
              { term: 'Engranaje', text: 'Abre los [Ajustes](help:settings).' },
              { term: 'Cartel del evento', text: 'El evento en curso o el próximo. Tócalo para ir a él.' },
              { term: 'Botón Nivel', text: 'Juega tu tablero actual.' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Tu **Ladrillo diario** (100 monedas) llega solo: supera un tablero en un día nuevo y se te paga en Inicio con un breve aviso.',
          },
        ],
      },
      {
        id: 'journey',
        title: 'El mapa del Viaje',
        blocks: [
          {
            t: 'shot',
            id: 'journey',
            alt: 'El mapa del Viaje: un camino empedrado por una aldea de flores rosas con las paradas de nivel 213, 214 (iluminada, con la etiqueta Jugar) y 215. A ambos lados hay insignias, y la cabecera muestra el avatar, las vidas (llenas), las monedas y 9 de 36 estrellas.',
            caption: 'El Viaje. Tu nivel actual brilla; las insignias de cada lado llevan a eventos, recompensas y ofertas.',
          },
          {
            t: 'list',
            items: [
              '**Cabecera:** tu avatar, las **vidas** (tócalas para ver cuándo llega la siguiente), las monedas, las **estrellas** de la aldea (tócalas para ver las recompensas por estrellas) y el engranaje.',
              '**Paradas de nivel:** toca tu nivel actual o cualquiera superado para jugarlo al momento. Una parada bloqueada te dice a cuántos niveles está.',
              '**Insignias de la derecha:** las recompensas de eventos, de estrellas y los regalos de aldea, las carreras, **Game Center** (si has iniciado sesión) y **Todas las aldeas**, un atlas de todos los lugares que puedes visitar.',
              '**Insignias de la izquierda:** el reto de racha, la hucha, el Pase Ladrillo, las ofertas, la puerta de la Tienda y otras recompensas.',
              '**Mi nivel:** el botón con forma de chincheta te devuelve a tu nivel actual.',
            ],
          },
          { t: 'p', text: 'Más en [El Viaje y sus aldeas](help:journey-and-villages).' },
        ],
      },
      {
        id: 'shop-pass-leaders',
        title: 'Tienda, Pase y Ranking',
        blocks: [
          {
            t: 'shots',
            items: [
              { id: 'shop', alt: 'La tienda: 2.580 monedas y la sección de ofertas especiales, con un paquete inicial único de monedas, vidas y potenciadores, la hucha, y un pase de potenciadores de 60 minutos de OVNIs y cohetes gratis.', caption: 'Tienda. **Restaurar compra** está al final del todo.' },
              { id: 'pass', alt: 'La pestaña del Pase Ladrillo con las columnas de recompensas Gratis y Premium subiendo por los grados.', caption: 'Pase: 30 grados de recompensas gratis y premium.' },
              { id: 'leaders', alt: 'La pestaña Ranking con una clasificación de ejemplo: un podio para los tres primeros con sus banderas y niveles, después la lista, y tu propia fila fija abajo (puesto 87, nivel 214). Una barra arriba ofrece iniciar sesión en Game Center para ver a tus amigos.', caption: 'Ranking: una sola clasificación histórica (se muestra un ejemplo).' },
            ],
          },
          {
            t: 'p',
            text: 'Consulta [La Tienda, las compras y cómo restaurarlas](help:shop-and-purchases) y [Recompensas, eventos y el Pase Ladrillo](help:rewards-and-events).',
          },
        ],
      },
      {
        id: 'profile-collection',
        title: 'Tu Perfil y la Colección',
        blocks: [
          {
            t: 'list',
            items: [
              '**Perfil** (toca tu avatar): tu nombre, tu nivel, la bandera de tu país, el botón de la Colección y tus estadísticas: victorias al primer intento, mejor racha, total de tableros superados y más. La versión del juego aparece al pie.',
              '**Colección** (desde el Perfil o la pestaña Pase; se desbloquea en el nivel 95): Cartas de ladrillo, Insignias de capítulo, Recuerdos, Cartas de temporada y el **Armario**.',
            ],
          },
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'La Colección en la sección del Armario: King Bricko con una corona dorada y un botón Ponérselo, después las pestañas Looks, Bandejas, Paletas y Acabado del ladrillo, y debajo el Seaside Set y el Candy Shop Set.',
            caption: 'El Armario cambia el aspecto del juego, nunca cómo se juega.',
          },
          { t: 'p', text: 'Más en [Los amigos, la Colección y el Armario](help:friends-and-wardrobe).' },
          { t: 'shots', items: [{ id: 'profile', alt: 'Tu perfil: el amigo azul como avatar con un lápiz para editarlo, el nombre Riley, nivel 214, región automática, Colección 33 de 39 y las estadísticas: 96 victorias al primer intento, 74 objetivos superados, mejor racha de 21, 213 tableros superados, 4.218 movimientos y 3 tableros perfectos.', caption: 'Perfil.' }, { id: 'collection', alt: 'La Colección en las cartas de temporada: temporada 2, 0 de 9 cartas y 0 chispas, las reglas (una carta cada tres niveles nuevos desde el nivel 96, los duplicados dan una chispa, tres chispas para elegir una carta que falta) y los nueve amigos, cada uno marcado como que falta. Debajo empiezan las cartas de ladrillo, 33 de 39.', caption: 'Colección.' }] },
        ],
      },
      {
        id: 'settings',
        title: 'Ajustes',
        blocks: [
          {
            t: 'p',
            text: 'Toca el engranaje en Inicio o en el Viaje. Los Ajustes tienen dos pestañas, **Juego** y **Accesibilidad**, y terminan con enlaces al soporte, a la comunidad y a las páginas legales. Cada fila se explica en [Todos los ajustes, explicados](help:settings).',
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
    title: 'Jugar un tablero',
    summary:
      'Cada parte de la pantalla del tablero, cómo funcionan deslizar y cambiar, qué cuenta como movimiento, cómo funcionan las estrellas y la puntuación, y qué significan los tableros Difícil, Muy difícil, Jefe y Noche.',
    keywords: 'cabecera contador de movimientos barra de estrellas panel objetivos deslizar cambiar intercambiar puerta combinar puntuación estrellas dificultad difícil jefe noche',
    sections: [
      {
        id: 'screen',
        title: 'La pantalla del tablero',
        blocks: [
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'Un tablero de Slide & Match en una playa, nivel 25. La cabecera muestra 5 vidas, 15 movimientos restantes, una barra de estrellas con una encendida, objetivos de 1 ladrillo amarillo y 3 azules, y el amigo anfitrión con gorra de marinero. El tablero tiene ladrillos rosas, amarillos, naranjas y azules, cada uno con la forma de su color, puertas amarillas, naranjas y azules en los bordes y una tapa dorada con cerradura sobre una fila de ladrillos. Abajo, la bandeja: Pausa, luego Pista, Cohete y OVNI marcados como gratis, y Deshacer con 6.',
            caption: 'La pantalla del tablero: cabecera, cuadrícula y bandeja.',
          },
          {
            t: 'table',
            head: ['Parte', 'Qué te dice'],
            rows: [
              ['Nivel y vidas', 'El número del nivel y, a continuación, un corazón con tus vidas. Toca el corazón para ver cuándo llega la siguiente vida.'],
              ['Movimientos', 'El número grande: los movimientos que te quedan. Late al llegar a tres y, en los cinco últimos, el borde del tablero se ilumina en tonos cálidos.'],
              ['Racha de victorias', 'Una pequeña cadena de ladrillos bajo los movimientos cuando llevas varias victorias seguidas.'],
              ['Barra de estrellas', 'Se llena a medida que sube tu puntuación, con una estrella en cada umbral.'],
              ['Panel de objetivos', 'Los objetivos y cuánto falta. Una marca indica cada uno cumplido. Los tableros por fases muestran «Fase 1 de 2».'],
              ['Amigo', 'El amigo anfitrión de la aldea. Tócalo y se reirá o te saludará.'],
              ['Placa de dificultad', 'Los tableros Difícil, Muy difícil, Jefe o Noche llevan una placa bajo la cabecera.'],
              ['Bandeja', 'Pausa y, después, Pista, Cohete, OVNI y Deshacer. Consulta [Potenciadores, pistas y Pausa](help:boosters-and-pause).'],
            ],
          },
        ],
      },
      {
        id: 'slide',
        title: 'Deslizar ladrillos a casa',
        blocks: [
          {
            t: 'list',
            items: [
              'Arrastra un ladrillo hacia un hueco. Se detiene donde lo sueltas, en la casilla entera más cercana, o antes si choca con una pieza, un obstáculo o el borde.',
              'Si lo arrastras menos de media casilla, vuelve a su sitio sin gastar ningún movimiento.',
              'Un ladrillo solo sale por una **puerta abierta de su color**. Cualquier otra puerta es una pared.',
              'Los ladrillos normales, las llaves y los rayos de línea pueden salir por una puerta. Las bombas, los dardos y las bombas de color se detienen en ella.',
              'Los ladrillos largos y grandes se deslizan como una sola pieza y necesitan una puerta tan ancha como ellos. Cuentan cada casilla que ocupan.',
              'En los tableros donde caen ladrillos, puedes deslizar de lado o directamente hacia fuera por una puerta.',
              'Cada deslizamiento gasta un movimiento.',
            ],
          },
        ],
      },
      {
        id: 'swap',
        title: 'Cambiar y combinar',
        blocks: [
          {
            t: 'list',
            items: [
              'Empuja un ladrillo contra su vecino para cambiarlos de sitio. El cambio se mantiene si forma una línea de tres o más o un cuadrado de 2×2, si activa dos especiales juntos o si usa una bomba de color.',
              'Si no, los ladrillos rebotan, notas dos toques cortos y **no gastas ningún movimiento**.',
              'Combinar cuatro, cinco, una forma de L o de T, o un cuadrado crea un ladrillo especial. Consulta [Ladrillos especiales](help:bricks-specials-and-blockers#specials).',
              'Toca un ladrillo especial para activarlo donde está. Eso gasta un movimiento.',
            ],
          },
        ],
      },
      {
        id: 'never-stuck',
        title: 'Nunca te quedas atascado',
        blocks: [
          {
            t: 'p',
            text: 'Si no hay ningún movimiento posible, el tablero se mezcla gratis bajo el aviso **¡A mezclar!**: no gastas ningún movimiento ni ninguna vida. Si un tablero tiene movimientos pero ninguno puede llevarte nunca a tus objetivos, se reparte de nuevo sin más. Y si a un tablero le faltan ladrillos del color que pide un objetivo, se pintan del color necesario algunos ladrillos sobrantes para que el objetivo siempre se pueda cumplir.',
          },
        ],
      },
      {
        id: 'stars',
        title: 'Puntuación, estrellas y la bonificación final',
        blocks: [
          {
            t: 'list',
            items: [
              'Superar un tablero da siempre al menos **una estrella**. Con más puntuación consigues dos o tres; la barra de estrellas te muestra cuánto te falta.',
              'Cuando cumples el último objetivo, verás **¡Objetivo cumplido!** Cada movimiento que te sobra se convierte en un rayo de línea, todos estallan y cada movimiento sobrante suma 150 puntos. Toca para saltártelo.',
              'Repite cuando quieras un tablero superado desde el Viaje para mejorar sus estrellas.',
            ],
          },
          {
            t: 'shot',
            id: 'clear',
            alt: 'La tarjeta de victoria con tres estrellas doradas, la palabra ¡Brillante!, una puntuación de 5.470 y más 140 monedas.',
            caption: 'Tres estrellas: ¡Brillante! Dos: ¡Genial! Una: ¡Superado!',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Tableros Difícil, Muy difícil, Jefe y Noche',
        blocks: [
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Nivel 35 al atardecer, 28 movimientos restantes, con una placa morada DIFÍCIL bajo los objetivos: 2 amarillos, 5 rosas y 3 castillos de arena. El tablero con forma de castillo tiene un ladrillo rosa grande, ladrillos cubiertos de musgo y cuatro cajas de castillo de arena, con puertas amarillas, rosas y rojas.',
            caption: 'Un tablero Difícil lleva su placa bajo la cabecera.',
          },
          {
            t: 'table',
            head: ['Dificultad', 'Qué cambia', 'Monedas al superarlo'],
            rows: [
              ['Normal', 'Sin placa.', '25'],
              ['Difícil', 'Los objetivos piden alrededor de un 15 % más, y hay algunos obstáculos más.', '50'],
              ['Muy difícil', 'Los objetivos piden alrededor de un 30 % más.', '80'],
              ['Jefe', 'El último tablero de un capítulo, a partir del nivel 40. Los objetivos piden alrededor de un 40 % más.', '80'],
              ['Noche', 'Un tablero ambientado de noche. Se juega como un tablero Difícil.', '50'],
            ],
          },
          {
            t: 'p',
            text: 'Con dos o más estrellas se suma además una bonificación por objetivo. Los eventos pueden duplicar o triplicar las monedas por superar un tablero.',
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
    title: 'Ladrillos especiales, obstáculos y tipos de tablero',
    summary:
      'Cómo crear cada ladrillo especial y cada combo, qué hace cada obstáculo, tapa y puerta, los ladrillos bocabajo, los portales, los ladrillos largos y los doce tipos de tablero de cada aldea.',
    keywords: 'bomba rayo de línea bomba de color dardo guiado combo caja hielo gelatina candado musgo estatua tapa sala sellada contador llave cerradura reloj puerta helada puerta contada portal bocabajo interrogación ladrillo largo forma L T obstáculos bloqueos',
    sections: [
      {
        id: 'specials',
        title: 'Ladrillos especiales',
        blocks: [
          {
            t: 'table',
            head: ['Especial', 'Cómo se crea', 'Qué hace'],
            rows: [
              ['Rayo de línea', 'Cuatro en línea.', 'Despeja toda su fila o columna, en la dirección en la que te moviste.'],
              ['Bomba', 'Una forma de L, de T o de +.', 'Hace estallar el cuadrado de 3×3 que la rodea, dos veces.'],
              ['Bomba de color', 'Cinco en línea.', 'Se lleva todos los ladrillos normales de un color: cámbiala por un ladrillo de ese color.'],
              ['Dardo guiado', 'Un cuadrado de 2×2.', 'Vuela hasta una pieza que pide un objetivo.'],
            ],
          },
          {
            t: 'p',
            text: 'Toca un especial para activarlo donde está, o cámbialo por un vecino. Un rayo de línea también puede salir deslizándose por una puerta de su color sin estallar.',
          },
        ],
      },
      {
        id: 'combos',
        title: 'Combos',
        blocks: [
          { t: 'p', text: 'Cambia dos especiales entre sí para conseguir algo más grande:' },
          {
            t: 'table',
            head: ['Cambia juntos', 'Resultado'],
            rows: [
              ['Rayo de línea + rayo de línea', 'Una cruz: una fila y una columna.'],
              ['Rayo de línea + bomba', 'Una cruz de tres carriles de ancho.'],
              ['Bomba + bomba', 'Una explosión de 5×5.'],
              ['Bomba de color + cualquier especial', 'Todos los ladrillos de ese color se convierten en ese especial y estallan a la vez.'],
              ['Bomba de color + bomba de color', 'Todo el tablero.'],
              ['Dardo + cualquier especial', 'El dardo lleva el especial hasta su objetivo. Dos dardos alcanzan tres objetivos.'],
            ],
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Obstáculos',
        blocks: [
          {
            t: 'p',
            text: 'Toca cualquier obstáculo para ver un recordatorio de una línea sobre cómo quitarlo. Su aspecto cambia con la aldea (balas de heno en la granja, macetas en Ciudad Jardín), pero las reglas son las mismas.',
          },
          {
            t: 'table',
            head: ['Obstáculo', 'Qué hace', 'Cómo quitarlo'],
            rows: [
              ['Caja', 'Detiene los ladrillos que se deslizan. Tiene una o dos capas.', 'Haz una línea a su lado; cada línea rompe una capa.'],
              ['Hielo (gelatina)', 'Inmoviliza el ladrillo que tiene dentro.', 'Haz una línea a su lado.'],
              ['Candado', 'El ladrillo no se puede mover.', 'Haz una línea que pase **por** él. Una línea a su lado no basta.'],
              ['Musgo', 'Se extiende a un ladrillo tras cualquier movimiento que no despeje nada.', 'Haz una línea a su lado.'],
              ['Estatua', 'Ocupa un hueco: nada se desliza a través de ella.', 'Se queda ahí. Busca otro carril.'],
            ],
          },
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Nivel 35 al atardecer, 28 movimientos restantes, con una placa morada DIFÍCIL bajo los objetivos: 2 amarillos, 5 rosas y 3 castillos de arena. El tablero con forma de castillo tiene un ladrillo rosa grande, ladrillos cubiertos de musgo y cuatro cajas de castillo de arena, con puertas amarillas, rosas y rojas.',
            caption: 'Cajas de castillo de arena y musgo en el mismo tablero.',
          },
        ],
      },
      {
        id: 'lids',
        title: 'Salas selladas y sus tapas',
        blocks: [
          { t: 'p', text: 'Algunos ladrillos están bajo una tapa y no se pueden mover hasta que se abra. Hay cinco tipos de tapa:' },
          {
            t: 'table',
            head: ['Tapa', 'Se abre cuando…'],
            rows: [
              ['Contador', 'Han salido del tablero suficientes ladrillos de cualquier color (el número que muestra la tapa).'],
              ['Contador de color', 'Han salido o se han combinado suficientes ladrillos de su color.'],
              ['Llave de vidriera', 'Haces una línea de su color justo a su lado.'],
              ['Reloj de latón', 'Has hecho el número de movimientos que indica.'],
              ['Cerradura', 'El ladrillo llave sale del tablero, combinado o deslizado por su puerta.'],
            ],
          },
        ],
      },
      {
        id: 'gates',
        title: 'Puertas',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Puerta abierta', text: 'Admite los ladrillos de su color. Su anchura importa para los ladrillos largos.' },
              { term: 'Puerta helada', text: 'Se deshiela un poco cada vez que un ladrillo vuelve a casa, o cuando se despejan piezas delante de ella. En cuanto se abra, desliza dentro su color.' },
              { term: 'Puerta contada', text: 'Solo admite un número de ladrillos y luego se cierra para siempre. Elige cuáles enviar.' },
              { term: 'Puerta por fases', text: 'Sigue sellada hasta que empieza la segunda fase de objetivos del tablero.' },
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Las puertas también llevan el símbolo de su color y, en el tablero de alto contraste, una puerta cuyo color se parece demasiado al del suelo recibe un contorno de dos tonos.',
          },
        ],
      },
      {
        id: 'more',
        title: 'Ladrillos bocabajo, portales y ladrillos con forma',
        blocks: [
          {
            t: 'list',
            items: [
              'Los **ladrillos bocabajo «?»** esconden su color. Se dan la vuelta cuando un ladrillo de al lado sale del tablero; moverlos no les da la vuelta. Aun así, juegan con su color real.',
              'Los **portales** van por parejas: desliza un ladrillo dentro de uno y saldrá por su gemelo en otro lado.',
              'Los **ladrillos largos, grandes, en L y en T** se deslizan y caen como una sola pieza, nunca se cambian, nunca cuentan en las líneas y necesitan una puerta tan ancha como ellos. Ningún potenciador puede elegirlos.',
            ],
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Nivel 31 en la playa: 16 movimientos restantes, objetivos de 8 amarillos y 8 azules. Abajo se apilan ladrillos grandes de una sola pieza: una barra azul larga, una columna azul alta y una pieza amarilla en forma de C, con puertas azules y amarillas en los bordes.',
            caption: 'Los ladrillos grandes se deslizan de una pieza y necesitan una puerta tan ancha como ellos.',
          },
        ],
      },
      {
        id: 'kinds',
        title: 'Los doce tipos de tablero',
        blocks: [
          {
            t: 'p',
            text: 'Cada aldea completa tiene doce tableros, y cada posición del 1 al 12 es siempre del mismo tipo, así que aprendes el ritmo de una aldea: ',
          },
          {
            t: 'table',
            head: ['Tablero', 'Tipo', 'Qué esperar'],
            rows: [
              ['1', 'Mándalos a casa', 'Saca los ladrillos deslizándolos por sus puertas.'],
              ['2', 'Desliza y combina', 'Deslizamientos y cambios a la vez.'],
              ['3', 'Jardín abierto', 'Un tablero amplio, con espacio para planificar.'],
              ['4', 'Jardín que cae', 'Los ladrillos caen y llegan otros nuevos.'],
              ['5', 'Macetas y hielo', 'Cajas y hielo que romper.'],
              ['6', 'Ladrillos largos', 'Ladrillos con forma y puertas anchas.'],
              ['7', 'Piezas de esquina', 'Los ladrillos caen, pero no llegan otros nuevos.'],
              ['8', 'Cajas y hielo', 'Más capas que romper.'],
              ['9', 'Candados y musgo', 'Candados que abrir y musgo que se extiende.'],
              ['10', 'Caminos de piedra', 'Estatuas que cortan el paso.'],
              ['11', 'El gran día', 'Un final más grande, a menudo con un bancal sellado.'],
              ['12', 'Puzle tranquilo', 'Los ladrillos caen sin reponerse: piénsalo bien.'],
            ],
          },
          {
            t: 'p',
            text: 'A partir de la quinta aldea empiezan a aparecer también tapas, ladrillos bocabajo, puertas por fases y portales. Cada uno tiene su propia tarjeta de aprendizaje la primera vez.',
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
    title: 'Potenciadores, pistas y Pausa',
    summary:
      'Qué hacen Pista, Cohete, OVNI y Deshacer, los gratis que tienes en cada tablero, cómo conseguir más y todo lo que hay en el menú de Pausa.',
    keywords: 'potenciador ayuda pista cohete ovni deshacer bandeja gratis pausa reiniciar salir abandonar continuar extras',
    sections: [
      {
        id: 'tray',
        title: 'La bandeja',
        blocks: [
          {
            t: 'p',
            text: 'La bandeja de la parte inferior de cada tablero contiene **Pausa** y, después, **Pista**, **Cohete**, **OVNI** y **Deshacer**. Todos están disponibles desde el nivel 1. Una etiqueta **GRATIS** significa que el próximo uso no cuesta nada; un número indica cuántos tienes.',
          },
          {
            t: 'table',
            head: ['Potenciador', 'Cómo se usa', 'Qué hace'],
            rows: [
              ['Pista', 'Tócalo.', 'Muestra y dice el mejor movimiento, un deslizamiento o un cambio.'],
              ['Cohete', 'Tócalo y luego toca un ladrillo normal.', 'Convierte ese ladrillo en un rayo de línea que dispara a lo largo de su fila.'],
              ['OVNI', 'Tócalo y luego toca una pieza.', 'Le quita una capa: una capa de caja, hielo, un candado, musgo o un ladrillo.'],
              ['Deshacer', 'Tócalo.', 'Anula tu último movimiento.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Los potenciadores no pueden elegir ladrillos con forma ni nada que esté bajo una tapa.',
          },
        ],
      },
      {
        id: 'free',
        title: 'Potenciadores gratis',
        blocks: [
          {
            t: 'list',
            items: [
              '**Cada intento** trae una Pista, un Cohete y un OVNI gratis. No se pueden guardar para más tarde.',
              '**Las rachas de victorias** te dan más para el siguiente tablero: 2 victorias seguidas dan una Pista, 3 un Cohete, 4 un OVNI y 5 los tres. Solo cuentan los niveles nuevos.',
              '**El primer deshacer** de cada tablero es gratis.',
              '**Un regalo de bienvenida** de 2 Pistas, 2 Cohetes y 2 OVNIs llega una sola vez, al principio del Viaje.',
              'Algunas recompensas y pases hacen que un potenciador sea gratis en todos los tableros durante un tiempo; su etiqueta dice GRATIS.',
              'Con VoiceOver, el toque doble con dos dedos te da una pista gratis en cualquier momento. Consulta [Jugar con VoiceOver](help:voiceover#hints).',
            ],
          },
        ],
      },
      {
        id: 'more',
        title: 'Cómo conseguir más',
        blocks: [
          {
            t: 'p',
            text: 'Toca un potenciador agotado para comprar uno con monedas (Pista 150, Cohete 300, OVNI 500) o un pack en la Tienda. También se consiguen potenciadores en la Rueda, las recompensas por estrellas de las aldeas, las Misiones, el Pase Ladrillo y los eventos.',
          },
        ],
      },
      {
        id: 'undo',
        title: 'Deshacer',
        blocks: [
          {
            t: 'list',
            items: [
              'El primer deshacer de cada tablero es gratis. Después, los deshacer salen de una reserva de hasta **cinco**, que se recarga de uno en uno cada **25 minutos**.',
              'El número del botón Deshacer cuenta ambos, así que un tablero recién empezado muestra 6 cuando tu reserva está llena.',
              'Si la reserva está vacía: compra cinco por 250 monedas, mira un vídeo opcional para conseguir dos, o espera.',
            ],
          },
        ],
      },
      {
        id: 'pause',
        title: 'El menú de Pausa',
        blocks: [
          {
            t: 'p',
            text: 'Toca el botón rosa **Pausa** a la izquierda de la bandeja (o a la derecha, con la Bandeja para zurdos). Con VoiceOver, también se abre con el gesto de frotar con dos dedos.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Sonidos, Música, Vibración', text: 'Activa o desactiva cada uno sin salir del tablero.' },
              { term: 'Continuar', text: 'Vuelve al tablero.' },
              { term: 'Game Center', text: 'Tus logros y clasificaciones.' },
              { term: 'Reiniciar', text: 'Vuelve a empezar el tablero. **Antes de tu primer movimiento es gratis; después de un movimiento cuesta una vida**, porque termina este intento.' },
              { term: 'Salir', text: 'Abre la tarjeta **¿Salir?**.' },
            ],
          },
          {
            t: 'shot',
            id: 'leave',
            alt: 'La tarjeta ¿Salir?: Esto cuesta una vida. Te quedan 5. Tu progreso en este tablero no se guarda. Botones: Seguir jugando y Salir.',
            caption: 'La tarjeta ¿Salir? te dice exactamente lo que te costará salir antes de que decidas.',
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Salir antes de tu primer movimiento siempre es gratis. Si llevas una racha de victorias, la tarjeta te avisa de que salir la terminará.',
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
    title: 'Vidas, quedarse sin movimientos y deshacer',
    summary:
      'Cuándo se gasta una vida y cuándo no, cómo vuelven las vidas, qué ofrece la pantalla Sin movimientos, la ayudita, el intento gratis diario y los vídeos opcionales.',
    keywords: 'vidas corazones recargar sin movimientos continuar seguir jugando rendirse nivel fallido sin vidas ilimitadas ayudita intento gratis vídeo anuncios recompensa',
    sections: [
      {
        id: 'lives',
        title: 'Vidas',
        blocks: [
          {
            t: 'list',
            items: [
              'Puedes tener hasta **cinco vidas** (ocho mientras tengas el Pase Ladrillo actual). Recuperas una cada **30 minutos**, aunque el juego esté cerrado.',
              'Para abrir un tablero necesitas una vida, pero **no se gasta**. Una vida solo se gasta cuando **pierdes** un intento.',
              '**Ganar nunca cuesta una vida.** Tampoco salir ni reiniciar antes de tu primer movimiento.',
            ],
          },
          {
            t: 'table',
            caption: 'Cuándo se gasta una vida',
            head: ['Si tú…', '¿Gastas una vida?'],
            rows: [
              ['Superas el tablero', 'No'],
              ['Te quedas sin movimientos y te rindes (o cierras la pantalla Sin movimientos)', 'Sí'],
              ['Reinicias o sales **después** de un movimiento', 'Sí, la tarjeta te avisa antes'],
              ['Reinicias o sales **antes** de tu primer movimiento', 'No'],
              ['Sigues jugando con más movimientos', 'No: es el mismo intento'],
              ['Llegas a un tablero donde nada se puede mover, con movimientos de sobra', 'No'],
              ['Pierdes en tu intento gratis diario o con vidas ilimitadas', 'No'],
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'Sin movimientos',
        blocks: [
          {
            t: 'shot',
            id: 'wall',
            alt: 'La pantalla Sin movimientos con los objetivos que aún faltan, un botón de 5 movimientos más por 300 monedas, un botón Ver para 2 movimientos más y Rendirse.',
            caption: 'Sin movimientos: lo que todavía te falta y tus opciones.',
          },
          { t: 'p', text: 'Cuando se te acaban los movimientos antes de cumplir los objetivos, ves lo que falta y puedes elegir:' },
          {
            t: 'table',
            head: ['Seguir en este intento', 'Precio', 'Recibes'],
            rows: [
              ['La primera vez', '300 monedas', '+5 movimientos'],
              ['La segunda vez', '500 monedas', '+5 movimientos y una Pista'],
              ['La tercera vez y siguientes', '900 monedas', '+5 movimientos y un OVNI'],
            ],
          },
          {
            t: 'list',
            items: [
              'O mira un **vídeo opcional**: +2 movimientos, luego +1 movimiento y, después, un OVNI gratis.',
              'Si tienes guardado un **+5 movimientos**, úsalo aquí.',
              'En un tablero que has intentado varias veces, cada continuación da un poco más: un movimiento extra por cada intento fallido a partir del tercero, hasta +15.',
              '**Rendirse** termina el intento y gasta una vida. La nota bajo el botón te dice si además terminará una racha de victorias.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Antes del nivel 6 no se ofrece nada de pago. Los precios vuelven a empezar con cada intento nuevo.',
          },
        ],
      },
      {
        id: 'level-failed',
        title: 'Nivel fallido y volver a intentarlo',
        blocks: [
          {
            t: 'p',
            text: 'Después de rendirte verás **Nivel fallido**, con lo cerca que estuviste («¡Casi!», «¡Casi lo logras!» o «Esta vez no») y si se gastó una vida. Elige **Reintentar** o **Volver al mapa**. Desde el nivel 6 puedes empezar el siguiente intento con ventaja: un Cohete en el tablero y un OVNI gratis, por 800 monedas.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Una ayudita',
            text: '¿Atascado en un tablero? A partir de tu sexto intento en él, el juego te da **3 movimientos extra** antes de empezar: «Una ayudita: 3 movimientos más en este intento». Una vez al día por tablero.',
          },
        ],
      },
      {
        id: 'out-of-lives',
        title: 'Sin vidas',
        blocks: [
          {
            t: 'list',
            items: [
              '**Un intento gratis:** una vez al día, sin vidas, puede que tengas un intento gratis en un tablero. Si ganas, conservas la vida; si pierdes, no te cuesta nada.',
              '**Esperar:** la pantalla cuenta el tiempo que falta para tu próxima vida.',
              '**Rellenar:** vidas llenas por 600 monedas, una recarga guardada si tienes alguna, o un vídeo opcional por una vida.',
              '**Vidas ilimitadas:** 1 hora (900 monedas), 3 horas (2.000) o 24 horas (6.000), o con dinero real en la Tienda. Si compras más mientras dura una, se suma el tiempo.',
            ],
          },
          {
            t: 'p',
            text: 'Toca el corazón de la cabecera del Viaje cuando quieras para ver tus vidas y cuándo llega la siguiente.',
          },
          { t: 'shot', id: 'no-lives', alt: 'Sin vidas: 0 de 5 vidas y una cuenta atrás hasta la siguiente, después vidas ilimitadas durante 1, 3 o 24 horas con monedas o dinero, una recarga por 600 monedas, un vídeo por una vida y OK. Una nota indica que solo se pierde una vida al perder un tablero, que vuelve una cada 30 minutos y que una vez al día un depósito vacío recibe un intento gratis.', caption: 'Sin vidas: esperar, recargar o seguir jugando.' },
        ],
      },
      {
        id: 'videos',
        title: 'Vídeos opcionales',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick **no tiene anuncios obligatorios**: ni banners ni anuncios emergentes entre tableros. Los vídeos solo se reproducen cuando eliges uno a cambio de una recompensa, y solo pagan los que ves hasta el final. Hay ocho tipos, con un límite total de **39 al día**, y los límites se reinician a medianoche.',
          },
          {
            t: 'table',
            head: ['Dónde', 'Recompensa', 'Al día'],
            rows: [
              ['Sin vidas', '1 vida', '8'],
              ['Sin deshacer', '2 deshacer', '8'],
              ['Sin movimientos', '+2 movimientos, luego +1 y después un OVNI gratis', '6'],
              ['Tarjeta de victoria', 'Otra vez las monedas del tablero superado (de 75 a 300)', '4'],
              ['Rueda', 'Un segundo giro', '1'],
              ['Globo regalo', 'Monedas o un potenciador gratis durante 10 minutos', '2'],
              ['Cine de ladrillos', 'Una casilla de premio por vídeo', '6'],
              ['Inicio del tablero', 'Una Pista (ahora no se muestra)', '4'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Con **Quitar anuncios** o el **Pase Ladrillo** actual, esas mismas recompensas dicen **Recoger premio** y se pagan al instante, sin vídeo, con los mismos límites diarios.',
          },
        ],
      },
    ],
    related: ['boosters-and-pause', 'shop-and-purchases', 'playing-a-board', 'rewards-and-events'],
  },
];
