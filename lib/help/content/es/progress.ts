import type { HelpArticle } from '../../model.ts';

/** El Viaje, las recompensas, la Tienda y los amigos, en español. Comprobado con la 5.1.1 (68). */
export const progressArticles: HelpArticle[] = [
  {
    slug: 'journey-and-villages',
    category: 'progress',
    cover: 'journey',
    title: 'El Viaje y sus aldeas',
    summary:
      'Cómo funciona el mapa de 2.000 niveles: aldeas y capítulos, estrellas y recompensas de aldea, cofres y regalos, el atlas de todas las aldeas y cómo repetir un tablero.',
    keywords: 'mapa niveles aldea pueblo capítulo estrellas recompensas cofre regalo globo atlas repetir bloqueado',
    sections: [
      {
        id: 'map',
        title: 'El mapa',
        blocks: [
          {
            t: 'shot',
            id: 'journey',
            alt: 'El mapa del Viaje: un camino empedrado que sube por una aldea de árboles con flores rosas, con las paradas de nivel 213, 214 y 215. El nivel 214 brilla con la etiqueta Jugar. A ambos lados hay insignias.',
            caption: 'El Viaje es un largo paseo construido con ladrillos. Tu nivel actual brilla.',
          },
          {
            t: 'list',
            items: [
              'El Viaje tiene **2.000 niveles** en **167 aldeas** de doce tableros cada una (la última tiene ocho).',
              'Cada aldea está construida con ladrillos de juguete en su propio estilo, y cuando un estilo se repite vuelve en otro momento del día o en otra estación, así que no hay dos aldeas iguales.',
              'Toca tu **nivel actual** para jugarlo. Toca cualquier nivel **superado** para repetirlo y mejorar sus estrellas; repetirlo nunca cambia tu posición en el mapa.',
              'Un nivel **bloqueado** te dice a cuántos niveles está.',
              'La chincheta **Mi nivel** te devuelve a donde estás.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Aldeas y capítulos',
            text: 'Una **aldea** son doce tableros del mapa. Un **capítulo** son veinte niveles, y se usa para las insignias de capítulo y los logros de Game Center. Se cuentan por separado, así que un capítulo puede terminar en mitad de una aldea.',
          },
        ],
      },
      {
        id: 'stars',
        title: 'Estrellas y recompensas de aldea',
        blocks: [
          {
            t: 'list',
            items: [
              'Cada tablero puede dar hasta tres estrellas, así que una aldea tiene 36. El indicador de **estrellas** de la cabecera muestra cuántas llevas en esta aldea.',
              'Al reunir estrellas subes por la escalera de estrellas de la aldea: 50 monedas, una Pista, 100 monedas y un Cohete. Una insignia en el mapa te avisa cuando hay una recompensa lista para recoger.',
              'Al superar una aldea entera aparece una tarjeta de celebración con **Compartir** y **Seguimos**.',
            ],
          },
        ],
      },
      {
        id: 'map-extras',
        title: 'Cofres, regalos y otras cosas del mapa',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Cofre del viaje', text: 'Toca un cofre del camino para ver qué contiene. Cuando llegues a él, la tarjeta de victoria muestra las monedas y los potenciadores que te ha dado.' },
              { term: 'Regalo de aldea', text: 'Un regalo con temporizador; la insignia cuenta el tiempo hasta que está listo.' },
              { term: 'Globo regalo', text: 'Pasa flotando de vez en cuando. Un vídeo opcional lo atrapa a cambio de monedas o de un rato breve con un potenciador gratis.' },
              { term: 'Secretos', text: 'Pequeñas cosas escondidas por el camino. Toca todo lo que parezca fuera de lugar.' },
              { term: 'Todas las aldeas', text: 'El atlas: cada aldea como una tarjeta, filtradas por en curso, terminadas o bloqueadas. **Mi aldea** te lleva a la tuya.' },
              { term: 'Game Center', text: 'Si has iniciado sesión, una insignia abre tus retos y logros.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: '¿Prefieres un mapa más tranquilo? En Ajustes › Juego › **Funciones del juego** puedes ocultar los eventos y las ofertas que no te interesen. No pierdes nada de lo que has ganado.',
          },
          { t: 'shot', id: 'atlas', alt: 'Todas las aldeas: filtros Todas (167), En curso, Completadas y Bloqueadas; un encabezado para las aldeas 1 a 28 con 217 de 1.008 estrellas; y tarjetas de aldea con sus niveles y estrellas, como la aldea de los cerezos en flor, niveles 205 a 216, 9 de 36 estrellas, marcada Estás aquí, y la siguiente, que se desbloquea al superar el nivel 216.', caption: 'El atlas de todas las aldeas.' },
        ],
      },
      {
        id: 'a11y',
        title: 'El mapa con VoiceOver',
        blocks: [
          {
            t: 'p',
            text: 'Cada elemento del mapa ofrece **Dónde estoy** e **Ir a mi siguiente nivel**; el toque doble con dos dedos dice tu aldea, los niveles superados y tu siguiente nivel; y al deslizar tres dedos avanzas de aldea en aldea. Consulta [Jugar con VoiceOver](help:voiceover#journey).',
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
    title: 'Recompensas, eventos y el Pase Ladrillo',
    summary:
      'El Ladrillo diario y las rachas de días, la Rueda, las Misiones, el Pase Ladrillo, los eventos y las carreras, y la clasificación.',
    keywords: 'ladrillo diario racha rueda giro misiones pase ladrillo temporada grados premium evento carrera royale rescate equipo clasificación ranking líderes logros game center hucha cine sello',
    sections: [
      {
        id: 'daily',
        title: 'El Ladrillo diario y las rachas de días',
        blocks: [
          {
            t: 'list',
            items: [
              '**Ladrillo diario:** el primer tablero que superas cada día te da 100 monedas, que se recogen solas en Inicio.',
              '**Racha de días:** la llama de Inicio cuenta los días seguidos en los que has superado un tablero. Tócala para ver la próxima recompensa.',
            ],
          },
          {
            t: 'table',
            caption: 'Recompensas por racha de días',
            head: ['Días seguidos', 'Recompensa'],
            rows: [
              ['3', '100 monedas'],
              ['7', '250 monedas y un salvarrachas'],
              ['14', '500 monedas y un salvarrachas'],
              ['30', '800 monedas y un salvarrachas'],
              ['60', '1.200 monedas y un salvarrachas'],
              ['100', '2.500 monedas y un salvarrachas'],
              ['Cada 100 más', '2.000 monedas y un salvarrachas'],
            ],
          },
          {
            t: 'p',
            text: '¿Se te ha pasado un día? Una racha de tres días o más se puede recuperar en el plazo de una semana, gratis con un salvarrachas o por 250 monedas. Puedes tener hasta dos salvarrachas.',
          },
        ],
      },
      {
        id: 'wheel',
        title: 'La Rueda',
        blocks: [
          {
            t: 'p',
            text: 'El botón **Rueda** de Inicio te da un giro gratis al día, para ganar monedas (de 50 a 500) o una Pista, un Cohete o un OVNI. Supera tres niveles nuevos en un día y el giro gratis te dará el doble de monedas. Un vídeo opcional te da un segundo giro.',
          },
        ],
      },
      {
        id: 'missions',
        title: 'Misiones',
        blocks: [
          {
            t: 'p',
            text: 'Toca **Misiones** en Inicio, o la tarjeta de Misiones de la pestaña Pase: tres cosas para hoy y tres para la semana, cada una con su recompensa. Termina una y toca **Recoger**, o **Recoger todo**. Las misiones diarias se reinician a medianoche UTC; las semanales, los lunes.',
          },
        ],
      },
      {
        id: 'pass',
        title: 'El Pase Ladrillo',
        blocks: [
          {
            t: 'shot',
            id: 'pass',
            alt: 'La pestaña Pase: la cabecera de la temporada, una tarjeta de Misiones y otra de la Colección, y después dos columnas de recompensas, Gratis y Premium, que suben por grados numerados.',
            caption: 'La pestaña Pase. Cada tablero superado te hace subir por los 30 grados de la temporada.',
          },
          {
            t: 'list',
            items: [
              'Cada **temporada** tiene **30 grados**. Superar niveles nuevos te hace subir; los tableros Difícil cuentan uno más y los Muy difícil, dos más.',
              'El camino **Gratis** da monedas y potenciadores a todo el mundo.',
              'El camino **Premium**, que se desbloquea comprando el Pase Ladrillo de esa temporada, añade recompensas mayores. Tenerlo también suma tres vidas a tu reserva, te da tres movimientos gratis en la pantalla Sin movimientos y elimina los vídeos: las recompensas se recogen sin ver nada.',
              'Los grados Premium que ya hayas alcanzado se pagan en cuanto lo desbloqueas.',
            ],
          },
        ],
      },
      {
        id: 'events',
        title: 'Eventos y carreras',
        blocks: [
          {
            t: 'p',
            text: 'Los eventos van y vienen según un calendario y aparecen como un cartel en Inicio y una insignia en el Viaje. Algunos duplican o triplican las monedas por superar un tablero. Además hay cuatro tipos de carrera y rescate:',
          },
          {
            t: 'defs',
            items: [
              { term: 'Rescate de amigos', text: 'Una historia semanal: supera cuatro finales de aldea para rescatar a un amigo.' },
              { term: 'Carrera del pueblo', text: 'Corre contra cuatro jugadores por una aldea. Comparte tu nombre de jugador.' },
              { term: 'Brick Royale', text: 'Una competición opcional de hasta 100 jugadores. Comparte tu nombre de jugador al unirte.' },
              { term: 'Carrera del equipo', text: 'Cinco niveles nuevos en un día, contra jugadores y amigos.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Puedes desactivar cualquiera de ellos en **Ajustes › Juego › Funciones del juego**, junto con las ofertas del mapa.',
          },
        ],
      },
      {
        id: 'leaders',
        title: 'Ranking y Game Center',
        blocks: [
          {
            t: 'list',
            items: [
              'La pestaña **Ranking** se desbloquea en el nivel 21: una única clasificación histórica de jugadores, con banderas. Toca **Ver más** para bajar en la lista.',
              'Apareces en ella mientras esté activado **Ajustes › Juego › Mostrarme en la clasificación**. Publica tu nombre de jugador y tu nivel; si lo desactivas, desapareces de ella.',
              'Elige u oculta tu **bandera** en tu Perfil.',
              '**Game Center** tiene 65 logros y clasificaciones de nivel más alto, total de tableros superados, hoy y esta semana. Inicia sesión con la barra de la pestaña Ranking, o abre Game Center desde la insignia del Viaje o desde el menú de Pausa.',
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
    title: 'La Tienda, las compras y cómo restaurarlas',
    summary:
      'Qué hay en cada estante de la Tienda, qué hacen Quitar anuncios y el Pase Ladrillo, cómo restaurar las compras en un dispositivo nuevo y cómo funcionan los reembolsos.',
    keywords: 'comprar compra integrada precio monedas pack quitar anuncios restaurar compra reembolso devolución dinero recibo familia',
    sections: [
      {
        id: 'shelves',
        title: 'Qué hay en la Tienda',
        blocks: [
          {
            t: 'shot',
            id: 'shop',
            alt: 'La tienda: 2.580 monedas y la sección de ofertas especiales, con un paquete inicial único de monedas, vidas y potenciadores, la hucha, y un pase de potenciadores de 60 minutos de OVNIs y cohetes gratis.',
            caption: 'La Tienda: se abre desde su pestaña, desde las monedas de Inicio o desde la puerta de la Tienda en el Viaje.',
          },
          {
            t: 'p',
            text: 'Los estantes, de arriba abajo: **Ofertas** (el Pack inicial mientras dure, la Hucha, el Pase de Potenciadores, el Pase Ladrillo y Quitar anuncios), la **Oferta semanal**, las ofertas del evento cuando hay uno, la **Oferta de fin de semana** de viernes a lunes, **Extras y movimientos**, **Potenciadores**, **Pases**, **Packs**, **Vidas**, el **Armario**, **Monedas** y, por último, **Restaurar compra** y los enlaces legales.',
          },
          {
            t: 'list',
            items: [
              'El App Store muestra los precios en tu propia moneda.',
              'Tu primera compra de monedas se duplica, una sola vez.',
              'La **Hucha** se llena de monedas a medida que superas niveles nuevos; cuando está lista, puedes abrirla por un precio pequeño.',
              'Todos los pases y artículos por tiempo son compras únicas. **En OutBrick no hay ninguna suscripción**, y nada se renueva solo.',
              'Antes del nivel 6 no se ofrece nada de pago en un tablero.',
            ],
          },
        ],
      },
      {
        id: 'remove-ads',
        title: 'Quitar anuncios y el Pase Ladrillo',
        blocks: [
          {
            t: 'p',
            text: '**Quitar anuncios** elimina todos los vídeos opcionales, pero no las recompensas: los botones que antes decían Ver ahora dicen **Recoger premio** y pagan al instante, con los mismos límites diarios. Tener el **Pase Ladrillo** de la temporada actual hace lo mismo durante esa temporada y suma tres vidas a tu reserva.',
          },
        ],
      },
      {
        id: 'restore',
        title: 'Restaurar compras',
        blocks: [
          {
            t: 'steps',
            items: [
              'Inicia sesión en el iPhone con la misma Cuenta de Apple con la que compraste, y en iCloud.',
              'Abre la **Tienda** y baja hasta el final.',
              'Toca **Restaurar compra**.',
            ],
          },
          {
            t: 'p',
            text: 'Restaurar recupera todo lo que es tuyo para siempre: **Quitar anuncios**, las temporadas 1 a 3 del Pase Ladrillo y los artículos del Armario. El App Store no restaura las monedas, los potenciadores, las vidas ni otras cosas que se gastan; esas viajan con tu progreso a través de iCloud. Consulta [Progreso, iCloud y privacidad](help:progress-privacy-and-account).',
          },
        ],
      },
      {
        id: 'refunds',
        title: 'Reembolsos y problemas con una compra',
        blocks: [
          {
            t: 'p',
            text: 'Las compras se hacen a través de Apple, así que Apple gestiona los reembolsos: consulta [nuestra página de reembolsos](/refunds) para saber cómo pedirlo. Si algo que compraste no ha llegado, prueba primero **Restaurar compra** y luego escríbenos en privado con el [formulario de contacto](/contact). Nunca publiques un recibo ni un número de pedido en la comunidad.',
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
    title: 'Los amigos, la Colección y el Armario',
    summary:
      'Conoce a los nueve amigos de ladrillo, mira lo que hacen en Inicio y en el tablero, y descubre cómo funcionan tu Perfil, la Colección y el Armario.',
    keywords: 'mascota mascotas amigos personajes bloo peach sprout moss bricko zippy vio flurry poppy armario look atuendo aspecto cosméticos colección cartas insignias recuerdos perfil avatar nombre bandera',
    sections: [
      {
        id: 'friends',
        title: 'Los nueve amigos',
        blocks: [
          {
            t: 'p',
            text: '**Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry y Poppy** son amigos hechos de ladrillos de juguete. Tres de ellos están en el escenario de Inicio, por turnos. En un tablero, el amigo anfitrión de la aldea aparece en el marco redondo de la cabecera, vestido para esa aldea: tócalo y se reirá, te saludará o chocará los cinco contigo. Te animan con bocadillos de texto; no hablan en voz alta.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'En los dispositivos con el modelo de lenguaje de Apple integrado, los amigos pueden inventarse sus propias frases (**Ajustes › Juego › Mascotas con IA**). Todo ocurre en tu dispositivo.',
          },
        ],
      },
      {
        id: 'profile',
        title: 'Tu Perfil',
        blocks: [
          {
            t: 'p',
            text: 'Toca tu avatar en Inicio o en el Viaje. Cambia tu nombre y tu avatar, elige la bandera de tu país (automática, un país que elijas u oculta), abre la Colección y consulta tus estadísticas: victorias al primer intento, tableros superados bajo el objetivo, mejor racha, total de tableros superados, movimientos y más. El número de versión del juego aparece al pie; indícalo cuando [informes de un error](help:reporting-bugs).',
          },
        ],
      },
      {
        id: 'collection',
        title: 'La Colección',
        blocks: [
          {
            t: 'p',
            text: 'La Colección se abre en el nivel 95, desde tu Perfil o la pestaña Pase. Contiene **Cartas de ladrillo**, **Insignias de capítulo** por cada capítulo que terminas, **Recuerdos** y **Cartas de temporada**: una carta cada tres niveles nuevos, nueve por temporada. Las Chispas que te sobren se pueden cambiar por una carta que te falte.',
          },
        ],
      },
      {
        id: 'wardrobe',
        title: 'El Armario',
        blocks: [
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'El Armario: King Bricko con una corona dorada y una gorguera roja junto a un botón verde Ponérselo y, debajo, las pestañas Looks, Bandejas, Paletas y Acabado del ladrillo, y el Seaside Set.',
            caption: 'Looks, bandejas, paletas, acabados de ladrillo, celebraciones, estelas y marcos.',
          },
          {
            t: 'list',
            items: [
              'Las piezas del Armario cambian **el aspecto del juego, nunca cómo se juega**.',
              'Desbloquéalas con monedas, con fichas de misión o comprándolas, y luego toca **Ponérselo**. **Quitar** o **Atuendo del pueblo** lo devuelven todo a su sitio.',
              'Las piezas de accesibilidad son siempre gratis.',
            ],
          },
        ],
      },
    ],
    related: ['menus-tour', 'rewards-and-events', 'shop-and-purchases', 'settings'],
  },
];
