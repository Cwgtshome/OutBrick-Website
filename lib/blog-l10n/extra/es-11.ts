import type { ExtraGuides } from '../../i18n/blog';

export const es11: ExtraGuides = {
  'outbrick-accessibility-commitment': {
    title: 'OutBrick: compromiso con jugadores ciegos y VoiceOver',
    dek: 'Nuestro compromiso con los jugadores ciegos: escuchar cómo juegan, explicar los límites actuales e integrar la accesibilidad en OutBrick.',
    imageAlt: 'Ilustración de OutBrick con un teléfono, ladrillos de colores y dos personajes de ladrillo sobre un fondo azul marino',
    tags: ['accesibilidad', 'VoiceOver', 'jugadores ciegos', 'diseño inclusivo', 'opiniones de jugadores'],
    intro: 'Puedes disfrutar de un puzle y encontrarte, aun así, con una barrera que no debería estar ahí. Esa es la lección más importante de la conversación sobre OutBrick en AppleVis. Los jugadores nos hablaron de descubrir un tipo de juego nuevo, disfrutar de su dificultad, no entender bien un movimiento y encontrar controles o información del tablero que VoiceOver no ofrecía como esperaban. Todas esas experiencias merecen atención. Nuestro compromiso con la accesibilidad para jugadores ciegos y usuarios de VoiceOver es firme. Tus comentarios nos están ayudando a hacer que el tablero sea más fácil de explorar, las reglas más fáciles de aprender y la experiencia más acogedora. Queremos que puedas concentrarte en el puzle al que has venido a jugar.',
    keyTakeaways: [
      'Los jugadores ciegos forman parte de la conversación habitual sobre las reglas, la dificultad, el disfrute y el futuro desarrollo de OutBrick.',
      'Las respuestas del equipo del 2 de octubre reconocen barreras concretas y prometen mejoras; no demuestran que todos esos cambios se hayan publicado ya.',
      'Los comentarios útiles describen lo que querías hacer y lo que ocurrió. No necesitas compartir un diagnóstico, datos de compras ni información privada de tu cuenta.',
    ],
    sections: {
      'start-with-the-player': {
        title: 'Empieza por lo que el jugador ha venido a hacer',
        paragraphs: [
          'Al abrir OutBrick, quizá quieras resolver un tablero que se te resiste, descubrir si te gustan los juegos de ordenar piezas o, simplemente, pasar unos minutos entretenidos con un puzle nuevo. La accesibilidad tiene que ayudarte a conseguirlo. Encontrar un botón importa, pero también entender la opción que ofrece y poder disfrutar del resultado. Una interfaz cuyos elementos son técnicamente accesibles puede seguir dejando demasiadas cosas sin explicar.',
          'En entrevistas con 32 jugadores móviles ciegos o con baja visión de China se encontraron motivaciones variadas, como la satisfacción de lograr algo y la conexión social, junto con barreras de acceso (Ran et al., 2025). Hay más de una razón para jugar.',
          'En la [conversación de AppleVis](https://www.applevis.com/comment/217460#comment-217460), los jugadores nos contaron qué les gustaba, dónde se atascaban y qué querían probar después. Valoramos esa visión de conjunto. Que nos cuentes que no puedes acceder a una puerta importa aunque te encante el juego. También importa la alegría de descubrir un género que antes parecía fuera de tu alcance. Ambas cosas nos ayudan a entender qué merece la pena seguir desarrollando.',
        ],
      },
      'say-what-is-current': {
        title: 'Convertir los comentarios en mejoras prácticas',
        paragraphs: [
          'Presentamos OutBrick en AppleVis con colores acompañados de símbolos, etiquetas de ladrillos que identifican el color, la forma y la posición, y acciones de deslizamiento para VoiceOver. Los jugadores nos ayudaron a detectar dificultades para encontrar algunos ladrillos y puertas mediante el tacto. Reconocimos esos problemas. Para la próxima actualización, estamos trabajando en una exploración que anuncie cada ladrillo y cada puerta en su posición, además de las casillas vacías que hay entre ellos.',
          'Las demás pantallas también importan. Nuestros planes para la próxima actualización incluyen botones de la tienda que respondan a VoiceOver, una pantalla de inicio más rápida, información más clara sobre las puertas congeladas y que derretir hielo cuente correctamente para las misiones. Nuestra [guía de accesibilidad más allá del tablero](/blog/outbrick-accessibility-beyond-board) explica qué problemas nos comunicaron los jugadores y qué esperamos facilitar con esos cambios.',
          'Gonçalves et al. (2023) analizaron partidas publicadas por jugadores ciegos y las tensiones entre el acceso, la capacidad de decidir y actuar y la implicación en el juego. Su trabajo nos recuerda que completar una tarea puede dejar dificultades importantes sin resolver.',
          'Si una acción solo funciona siguiendo un camino incómodo, ese esfuerzo adicional sigue importando. Queremos que tengas formas útiles de explorar el tablero y entender dónde está cada cosa. Nuestra [guía sobre la distribución del tablero](/blog/outbrick-voiceover-spatial-board) explica cómo la exploración táctil y la navegación secuencial pueden ayudar en distintos aspectos de esa tarea.',
        ],
        note: 'Estado a 2 de octubre de 2026: las mejoras descritas para la próxima actualización siguen en desarrollo. Las respuestas de AppleVis anuncian compromisos, no la publicación de esas correcciones.',
      },
      'keep-the-puzzle-worth-playing': {
        title: 'Que el puzle siga mereciendo la pena',
        paragraphs: [
          'La accesibilidad también deja espacio para el reto. La comunidad nos habló tanto del disfrute como de la dificultad: varias ideas que llegaban a la vez, un número de movimientos que parecía escaso y dudas sobre cómo mover un ladrillo. Son problemas distintos. Quien entiende los controles puede querer un tablero exigente; quien aún los está aprendiendo necesita una explicación antes de que sea justo pedirle que elabore un plan.',
          'En un pequeño estudio con encuestas y entrevistas, los jugadores con discapacidad visual valoraron las experiencias ricas y la complejidad, al tiempo que describieron dificultades de acceso (Andrade et al., 2019). Debemos dejar espacio para esas preferencias.',
          'Estamos rediseñando los niveles para que el comienzo resulte más fácil de entender. Los planes para la próxima actualización que describimos en nuestras respuestas incluyen tableros iniciales más asequibles, ideas presentadas de una en una, tarjetas breves de explicación y más movimientos al principio. El objetivo es dar a quien empieza una oportunidad justa de aprender cada idea antes de combinar varias. Queremos conservar el placer de dar con una solución satisfactoria.',
          'Después de un intento difícil, conviene preguntarse qué lo ha hecho difícil: ¿una relación interesante entre ladrillos, una regla que no se había explicado o información a la que no se podía acceder? Nuestra [guía de movimiento y primeros pasos](/blog/outbrick-voiceover-slide-actions) ayuda a distinguir esas preguntas. Pueden llevar a mejoras muy diferentes.',
        ],
      },
      'feedback-that-helps': {
        title: 'Describe lo que querías hacer y después el obstáculo',
        paragraphs: [
          'Un aviso útil sobre accesibilidad puede ser breve. Empieza por la pantalla o el tablero y lo que querías hacer. Explica cómo llegaste al control, qué esperabas y qué ocurrió en su lugar. Por ejemplo: «Puedo llegar a esta puerta deslizando el dedo para recorrer los elementos, pero al tocar su posición no se anuncia». Así describes con claridad una diferencia de interacción sin necesitar términos técnicos.',
          'Si te resulta cómodo, incluye la versión de la app, el modelo del dispositivo, la versión del sistema operativo y si el comportamiento se repite al volver a la pantalla. Estos detalles pueden ayudar a distinguir versiones y circunstancias diferentes. Son información opcional, no un motivo para rechazar el aviso de alguien que no pueda encontrarlos fácilmente. Decir «no sé por qué ha pasado» es perfectamente útil si los pasos están claros.',
          'Usa el [formulario de contacto de OutBrick](/contact) para enviarnos un mensaje directo y evita incluir información de salud, credenciales de cuentas, datos de pago o recibos de compras, salvo que un proceso de soporte aparte necesite de verdad algún dato concreto. Puedes describir una interacción con VoiceOver sin explicar por qué lo usas. Si el problema está en una acción de la tienda, no hace falta completar una compra solo para demostrarlo.',
        ],
        bullets: [
          'Dónde: la pantalla, el nivel o el control afectado.',
          'Objetivo: lo que intentabas conseguir.',
          'Acción y resultado: lo que hiciste y lo que se anunció o cambió.',
          'Contexto, si lo tienes: versiones de la app y del sistema, dispositivo y si vuelve a ocurrir.',
        ],
      },
      'work-with-different-experiences': {
        title: 'Dar cabida a distintas formas de jugar',
        paragraphs: [
          'La exploración táctil y la navegación secuencial sirven para cosas distintas. En un momento puedes querer recorrer los elementos con rapidez y, en otro, entender cómo se distribuyen en el espacio. Ofrecer información por una vía no vuelve prescindible la otra automáticamente. Esto es especialmente importante cuando el espacio vacío forma parte de la solución de un puzle.',
          'Nair et al. (2024) compararon herramientas de exploración no visual con nueve participantes ciegos o con baja visión. Las preferencias se repartieron entre Surveyor y un menú de audio, lo que puso de relieve prioridades distintas dentro de una muestra pequeña y experimentada.',
          'Queremos entender qué experiencia buscas. En la conversación de AppleVis, otro desarrollador de juegos accesibles se ofreció a intercambiar ideas y agradecimos la propuesta. Compartir ideas puede sacar a la luz preguntas que se nos habían pasado: ¿es útil un anuncio en ese momento?, ¿es fácil encontrar un control?, ¿puedes volver a orientarte después de un movimiento? Son conversaciones que merece la pena seguir teniendo.',
          'Tus comentarios son bienvenidos, pero no son una obligación. Debes poder parar, tomarte un descanso o decidir que la experiencia actual no encaja contigo. Las reseñas también son voluntarias. Una descripción sincera de una barrera es útil aunque no venga acompañada de elogios, una puntuación con estrellas o la promesa de probar otra versión.',
        ],
      },
      'follow-the-progress': {
        title: 'Valora los avances por la experiencia',
        paragraphs: [
          'Visita la [página de accesibilidad](/accessibility) para consultar la información de soporte y las [notas de versión](/whats-new) para seguir los cambios publicados. Cuando pruebes una actualización, cuéntanos si lo que te importaba hacer se ha vuelto más sencillo. Quizá encuentres una puerta de forma más natural, entiendas antes una regla o accedas a una pantalla que antes te complicaba las cosas. Esas mejoras concretas son los avances que queremos que notes.',
          'Los jugadores ciegos deben poder descubrir, entender y disfrutar del juego completo. Ese es el compromiso que asumimos a medida que OutBrick evoluciona. Queremos tomar en serio tus comentarios cuando algo te impida avanzar y seguir aprendiendo de los momentos que te dan ganas de jugar otro tablero. Gracias a todos los que nos habéis ayudado a ver cuáles deben ser los próximos pasos.',
        ],
      },
    },
    pullQuote: 'Los jugadores ciegos deben poder descubrir, entender y disfrutar del juego completo.',
    faqs: [
      { question: '¿Es firme el compromiso de OutBrick con la accesibilidad para jugadores ciegos?', answer: 'Sí. La accesibilidad para jugadores ciegos y usuarios de VoiceOver es un compromiso continuo de OutBrick que abarca el tablero, las reglas y las demás pantallas. Ese compromiso no significa que ya hayamos eliminado todas las barreras comunicadas.' },
      { question: '¿Ya se han publicado las correcciones prometidas en AppleVis?', answer: 'Las respuestas del 2 de octubre describen varios cambios previstos para la próxima actualización. No confirman que esas correcciones se hayan publicado. Consulta las [notas de versión](/whats-new) y la versión instalada, en lugar de dar una promesa por un cambio completado.' },
      { question: '¿Qué debe incluir un aviso sobre accesibilidad?', answer: 'Describe la pantalla o el tablero, lo que querías hacer, tu acción y el resultado. La versión de la app, la del sistema y el dispositivo pueden ayudar si tienes esos datos. Evita incluir información de salud, credenciales y datos privados de pago.' },
      { question: '¿Tengo que comprar algo o dejar una reseña para dar mi opinión?', answer: 'No. Puedes usar el [formulario de contacto](/contact) para explicar un problema o hacer una sugerencia sin comprar nada ni dejar una reseña. Tanto los comentarios como las reseñas son voluntarios.' },
    ],
  },
  'outbrick-voiceover-spatial-board': {
    title: 'Cómo leer el tablero de OutBrick con VoiceOver',
    dek: 'Entiende mejor el tablero de OutBrick con VoiceOver: explora ladrillos, puertas y espacios vacíos, y conoce las próximas mejoras prometidas.',
    imageAlt: 'Ilustración de OutBrick con un teléfono, ladrillos de colores y dos personajes de ladrillo sobre un fondo azul marino.',
    tags: ['accesibilidad', 'VoiceOver', 'diseño inclusivo', 'juegos de puzles', 'razonamiento espacial'],
    intro: 'Una puerta puede ser fácil de oír y difícil de situar. Quizá la encuentres deslizando el dedo para recorrer los elementos del tablero, pero te cueste saber dónde está al explorar la pantalla con el dedo. Esa diferencia importa en OutBrick: saber que un ladrillo existe es solo el comienzo de planificar su recorrido. Los jugadores de AppleVis describieron precisamente esa dificultad y pidieron también poder oír las casillas vacías. Sus comentarios nos dan una forma práctica de hablar de cómo entender la distribución del tablero y de explicar con claridad qué nos hemos comprometido a mejorar.',
    keyTakeaways: [
      'La navegación secuencial y la exploración táctil directa responden a preguntas distintas sobre un tablero; compararlas puede revelar información que falta.',
      'El espacio vacío ayuda a entender los recorridos posibles, así que nunca conviene dar por hecho que una zona que no se anuncia es una casilla libre confirmada.',
      'Las correcciones de localización táctil y los anuncios de casillas vacías están en desarrollo para la próxima actualización.',
    ],
    sections: {
      'build-a-picture-of-relationships': {
        title: 'Empieza por las relaciones entre las piezas',
        paragraphs: [
          'Para entender un puzle deslizante hace falta algo más que una colección de colores. Un ladrillo tiene una posición, una puerta a juego y piezas vecinas que pueden obstaculizar su recorrido. El espacio entre esos elementos determina qué movimientos son posibles. Oír una vez el nombre de cada elemento no siempre te permite comprender esas relaciones, sobre todo en un tablero que nunca has explorado.',
          'Las etiquetas de VoiceOver de OutBrick identifican el color, la forma y la posición de cada ladrillo. Son un punto de partida para hacerte tu propia idea del tablero. Escucha qué pieza es y pregúntate después dónde está su puerta y qué hay entre ambas. No necesitas memorizar todo el tablero antes de examinar un posible recorrido.',
          'Ran et al. (2025) entrevistaron a 32 jugadores móviles experimentados, ciegos o con baja visión, de China; los participantes pidieron navegación por foco integrada, tutoriales accesibles e información de respuesta personalizable.',
          'Para nuestro diseño, eso hace que merezca la pena estudiar la comprensión del tablero como una tarea distinta de ejecutar un deslizamiento. Nuestra [guía de acciones de deslizamiento con VoiceOver](/blog/outbrick-voiceover-slide-actions) explica el movimiento una vez que has encontrado la pieza que quieres.',
        ],
      },
      'compare-two-ways-of-exploring': {
        title: 'Usa la navegación y el tacto para preguntas distintas',
        paragraphs: [
          'La navegación secuencial consiste en recorrer los elementos accesibles deslizando el dedo a izquierda o derecha. La exploración táctil directa consiste en mover un dedo sobre el tablero para oír qué hay debajo. La primera puede ayudarte a descubrir los elementos disponibles. La segunda puede ayudarte a asociar un anuncio con un lugar. El orden de navegación no debe interpretarse como un mapa de qué elementos están físicamente juntos.',
          'Un jugador de AppleVis nos contó que solo encontraba dos puertas mediante el tacto, mientras que otra aparecía con la navegación secuencial. Algunos ladrillos, incluidas piezas rodeadas de otras o que bloqueaban una puerta de otro color, también se encontraban al recorrer los elementos, pero no bajo el dedo. Además, el jugador contó que había perdido niveles después de que un ladrillo importante no se anunciara. Reconocimos ambos fallos. Si los dos métodos te dan información diferente, es razonable avisar de un anuncio que falta; no significa que hayas entendido mal el puzle.',
          'Kane et al. (2008) estudiaron a diez usuarios de lectores de pantalla en tareas ajenas a los juegos; su prototipo separaba la exploración de la activación, pero la mayor rapidez de uso general trajo consigo más errores.',
          'Ese ejemplo histórico plantea aquí una pregunta útil para el diseño: ¿puede el jugador investigar libremente antes de elegir una acción? Puedes preferir un método de exploración o combinar ambos. Lo importante es poder descubrir la información que necesitas antes de decidir un movimiento.',
        ],
      },
      'why-empty-cells-matter': {
        title: 'Una casilla vacía también aporta información',
        paragraphs: [
          'Otro jugador explicó que le funcionaba mejor la navegación con deslizamientos rápidos del dedo, pero que necesitaba recorrer el tablero con el dedo para entender su distribución. Lo que faltaba era un anuncio explícito de las casillas vacías. Sin él, no podía interpretar con seguridad una zona silenciosa como espacio disponible. Es una observación precisa sobre lo que un puzle necesita comunicar.',
          'Imagina un tablero con un ladrillo, una puerta y un hueco entre ambos. Para predecir el deslizamiento, necesitas saber si ese hueco está despejado. El silencio por sí solo deja abiertas varias posibilidades: espacio vacío, un elemento que no se ha detectado o un punto fuera de la zona del tablero. Un anuncio claro de casilla vacía eliminaría una fuente de incertidumbre.',
          'El espacio vacío forma parte de la información del puzle. Ayuda a distinguir un recorrido bloqueado de uno posible y facilita explorar la relación entre las piezas. Aun así, no garantiza que un ladrillo se detenga en ese espacio: un deslizamiento completo estándar de OutBrick continúa hasta que algo frena el ladrillo. Nuestra [guía de movimiento](/blog/outbrick-voiceover-slide-actions) explica por qué el punto de parada importa tanto como el hueco libre.',
        ],
      },
      'a-small-orientation-routine': {
        title: 'Prueba una rutina de orientación breve y repetible',
        paragraphs: [
          'Empieza por un ladrillo y su destino. Descubre lo que puedas mediante la navegación secuencial y vuelve después a las posiciones relevantes mediante el tacto. Si ambas vías no coinciden, ten presente esa incertidumbre al planificar, en lugar de suplirla con una suposición. Usa la comparación cuando te ayude a orientarte y cuéntanos si alguna de las dos vías omite información.',
          'Gonçalves et al. (2023) analizaron más de 70 horas de partidas publicadas por jugadores ciegos; su estudio cualitativo identificó tensiones entre el acceso, la capacidad de decidir y actuar y la implicación en juegos centrados en lo visual.',
          'Nuestra respuesta práctica es mantener la rutina sencilla. Debes poder elegir un recorrido que explorar, parar y volver a una posición que te plantea dudas sin sentirte obligado a demostrar trucos de experto para sortear las dificultades. Después de un deslizamiento que haya funcionado, revisa la zona que ha cambiado: la posición que estaba ocupada hace un momento puede cumplir ahora otra función.',
        ],
        bullets: [
          'Identifica el ladrillo y la puerta a juego antes de planificar el recorrido.',
          'Comprueba qué piezas hay en ese recorrido y dónde se detendría el deslizamiento.',
          'Compara la exploración táctil con la navegación secuencial cuando parezca faltar información.',
          'Considera el silencio como información sin resolver hasta que tengas una forma fiable de confirmar ese espacio.',
        ],
      },
      'what-we-have-promised': {
        title: 'Los compromisos para la próxima actualización, claros',
        paragraphs: [
          'En nuestra [respuesta del 2 de octubre en AppleVis sobre la exploración táctil](https://www.applevis.com/comment/217455#comment-217455), nos comprometimos a que todos los ladrillos y puertas pudieran encontrarse en su posición real y a anunciar como vacías las casillas libres. La sugerencia posterior sobre las casillas vacías reforzó esa misma prioridad. A 2 de octubre de 2026, esas correcciones siguen en desarrollo para la próxima actualización.',
          'También dijimos que estábamos rediseñando todos los niveles, empezando por los primeros pueblos, con VoiceOver como parte central de ese trabajo. El rediseño y las mejoras de navegación responden a necesidades distintas: un reto satisfactorio y una forma fiable de descubrir la información necesaria para intentarlo. Queremos que dediques tu atención a elegir un recorrido entendiendo con claridad las piezas que intervienen.',
          'Nair et al. (2024) compararon tres herramientas de navegación con nueve jugadores; las preferencias se repartieron entre Surveyor y un menú en un juego para Windows creado para el estudio.',
          'Ese pequeño estudio nos anima a dar cabida a distintas preferencias de exploración. Su contexto era diferente al de OutBrick, pero la pregunta es útil: ¿puedes investigar de una forma que encaje contigo? Nuestra [página de accesibilidad](/accessibility) reúne información más amplia sobre las funciones disponibles.',
        ],
      },
      'share-a-useful-board-report': {
        title: 'Ayúdanos a localizar la información que falta',
        paragraphs: [
          'Un aviso útil puede ser breve: identifica el nivel, describe el ladrillo o la puerta y dinos si lo encontraste mediante navegación secuencial, exploración táctil directa, ambas o ninguna. Incluye la versión de la app, el dispositivo y la versión del sistema operativo si tienes esos datos. Ayudan a distinguir un problema de una disposición concreta del tablero de otro más general de navegación.',
          'No necesitas resolver el tablero ni diagnosticar el software antes de escribirnos. «Oigo esta puerta cuando recorro los elementos, pero no la encuentro bajo el dedo» ya describe algo concreto. Si puedes reproducirlo, la secuencia que lleva hasta ahí es útil; si no, la observación original sigue mereciendo la pena.',
          'Usa el [formulario de contacto](/contact) para enviarnos esa descripción. Nuestro [compromiso con la accesibilidad](/blog/outbrick-accessibility-commitment) explica cómo se relacionan estos avisos con el trabajo más amplio. El objetivo es que las piezas y los espacios del tablero se entiendan lo bastante bien como para que la siguiente decisión sea tuya.',
        ],
      },
    },
    pullQuote: 'El espacio vacío forma parte de la información del puzle.',
    faqs: [
      { question: '¿Por qué encuentro una puerta de OutBrick al recorrer los elementos, pero no mediante el tacto?', answer: 'Los jugadores de AppleVis comunicaron esa diferencia con puertas y algunos ladrillos, y reconocimos los fallos el 2 de octubre de 2026. Nuestras respuestas prometen correcciones de localización táctil para la próxima actualización; no confirman que ya se hayan publicado.' },
      { question: '¿El silencio significa que una casilla de OutBrick está vacía?', answer: 'El silencio por sí solo no confirma de forma fiable que una casilla esté vacía, sobre todo mientras sigan sin resolverse los problemas comunicados de exploración táctil. Los anuncios explícitos de casillas vacías forman parte de nuestro compromiso para la próxima actualización.' },
      { question: '¿Conviene usar la exploración táctil o la navegación secuencial de VoiceOver?', answer: 'Pueden servir para cosas distintas: la navegación secuencial ayuda a descubrir elementos, mientras que la exploración táctil ayuda a asociarlos con posiciones de la pantalla. Usa el método que encaje contigo y cuéntanos si hay diferencias entre ambos.' },
      { question: '¿Dónde puedo avisar de un tablero difícil de explorar?', answer: 'Usa el [formulario de contacto](/contact) de OutBrick e incluye, si puedes, el nivel, la versión de la app y una descripción de lo que anuncia cada método de navegación. Puedes comunicar el problema sin completar el tablero ni conocer su causa técnica.' },
    ],
  },
  'outbrick-voiceover-slide-actions': {
    title: 'Cómo deslizar ladrillos de OutBrick con VoiceOver',
    dek: 'Aprende las cuatro direcciones de OutBrick, sus puertas y la regla de deslizamiento, con acciones de VoiceOver y las mejoras de aprendizaje previstas.',
    imageAlt: 'Ilustración de OutBrick con un teléfono, ladrillos de colores y dos personajes de ladrillo sobre un fondo azul marino.',
    tags: ['accesibilidad', 'VoiceOver', 'diseño inclusivo', 'juegos de puzles', 'primeros pasos'],
    intro: 'Preguntarte cómo mover un ladrillo hacia abajo es completamente razonable cuando un juego no ha explicado bien sus controles. Un jugador de AppleVis entendía que los ladrillos de OutBrick tenían que salir del tablero, pero creía que solo podían moverse hacia arriba y no encontraba un tutorial. Nuestra respuesta explicó las cuatro direcciones, las puertas a juego y las acciones de VoiceOver, y prometió explicaciones más claras en la próxima actualización. Esta guía reúne esas piezas para ayudarte a distinguir entre elegir una dirección, entender un recorrido y decidir qué ladrillo debe moverse primero.',
    keyTakeaways: [
      'Un ladrillo puede deslizarse hacia arriba, abajo, izquierda o derecha cuando el recorrido está libre, y sale por una puerta de su mismo color.',
      'Con el foco en un ladrillo, los deslizamientos del dedo hacia arriba y abajo permiten elegir entre las acciones de deslizamiento de VoiceOver; esos gestos no limitan el movimiento a las direcciones verticales.',
      'Para la próxima actualización están previstas tarjetas breves de explicación, tableros introductorios más asequibles y más movimientos en los primeros tableros.',
    ],
    sections: {
      'match-the-brick-to-its-gate': {
        title: 'Primero encuentra el destino, esté donde esté',
        paragraphs: [
          'El objetivo básico es sacar los ladrillos por puertas de su mismo color. Un ladrillo rojo necesita su puerta roja; llegar a otra puerta no cumple esa regla de correspondencia. Las puertas pueden estar en cualquier lado del tablero. No hay una regla general que obligue a todos los ladrillos a moverse hacia arriba ni que sitúe siempre la salida correcta en el borde superior.',
          'OutBrick etiqueta el color, la forma y la posición de cada ladrillo para VoiceOver, y relaciona los ladrillos con sus puertas mediante símbolos distintos. Empieza por identificar la pieza que quieres mover y localizar su destino. Después examina el recorrido que los separa. Una salida puede estar cerca de un ladrillo y aun así exigir que otras piezas se muevan primero.',
          'Imagina una puerta del mismo color a la derecha, con otro ladrillo entre ella y la pieza que has seleccionado. El problema inmediato es ese ladrillo intermedio. Buscar una acción hacia arriba no despejará un recorrido que requiere moverse de lado. Para localizar las piezas antes de elegir una acción, consulta nuestra [guía para orientarte en el tablero con VoiceOver](/blog/outbrick-voiceover-spatial-board).',
        ],
      },
      'predict-the-stopping-point': {
        title: 'El deslizamiento continúa hasta que algo lo frena',
        paragraphs: [
          'En el deslizamiento direccional estándar, OutBrick aplica una regla de deslizamiento hasta el tope: el ladrillo recorre el camino disponible hasta que algo lo frena. Escucha el nombre completo de la acción y planifica dónde acabará la que elijas. Antes de decidirte por un recorrido, piensa tanto en si el ladrillo puede empezar a moverse como en dónde terminará ese movimiento.',
          'Un ejemplo imaginado sencillo ayuda a entenderlo. A la izquierda de un ladrillo hay varios espacios libres y, después, otra pieza. Un deslizamiento completo estándar hacia la izquierda lleva el ladrillo seleccionado por el espacio disponible hasta que algo lo detiene. No se para automáticamente después de la primera casilla libre. Por tanto, la otra pieza puede ser un obstáculo o un punto de parada útil, según tu plan.',
          'Esto hace que el orden importe. Apartar un ladrillo que bloquea el paso puede abrir una salida, pero mover demasiado pronto una pieza que servía de tope puede cambiar un deslizamiento posterior. Puedes pensar en esa secuencia antes de actuar. Nuestra [guía sobre el reto de los puzles sin reloj](/blog/outbrick-untimed-puzzle-challenge) explica la diferencia entre el tiempo para pensar y el número de movimientos disponibles: tener tiempo para examinar un tablero no te da movimientos ilimitados.',
        ],
      },
      'choose-a-voiceover-slide-action': {
        title: 'El gesto elige la acción; su nombre indica la dirección',
        paragraphs: [
          'Nuestra [explicación del movimiento en AppleVis](https://www.applevis.com/comment/217463#comment-217463) da estas indicaciones para VoiceOver: sitúa el foco en un ladrillo y desliza el dedo hacia arriba o abajo para elegir entre las acciones de deslizar hacia arriba, abajo, izquierda y derecha. Escucha el nombre de la acción. La dirección del gesto de selección y la dirección que nombra la acción cumplen funciones distintas.',
          'Por ejemplo, puedes deslizar el dedo hacia arriba o abajo para elegir la acción llamada deslizar a la izquierda. Eso no convierte el movimiento que quieres hacer en un deslizamiento hacia arriba o abajo. El nombre de la acción expresa el movimiento que estás seleccionando. Esta distinción resuelve la confusión original sin pedirte que deduzcas la dirección del ladrillo a partir del gesto que usas para recorrer sus acciones.',
          'Kane et al. (2008) separaron la exploración de la activación en un prototipo probado por diez usuarios de lectores de pantalla en tareas ajenas a los juegos; la mejora de velocidad vino acompañada de más errores.',
          'Con el gesto estándar de acciones personalizadas de VoiceOver, toca dos veces después de elegir la acción para ejecutarla, como explica la [guía de Apple sobre acciones personalizadas](https://developer.apple.com/videos/play/wwdc2019/250/?time=205). Antes de hacerlo, confirma qué ladrillo tiene el foco y la dirección que quieres. Después, examina la zona que ha cambiado y compara el resultado con tu predicción. Si con tu configuración no quedan claras las acciones disponibles, cuéntanos qué anuncia VoiceOver.',
        ],
      },
      'check-the-route-when-movement-is-unclear': {
        title: 'Si un movimiento no encaja, comprueba una cosa cada vez',
        paragraphs: [
          'Si el resultado no coincide con lo que querías, vuelve a la pieza seleccionada y comprueba cuál es y dónde está. Después revisa la acción que querías elegir y, a continuación, el espacio en esa dirección. Por último, vuelve a encontrar la puerta del mismo color. Este orden evita que un problema de navegación, otro de selección de acciones y una restricción del puzle se mezclen en una misma pregunta frustrante.',
          'Algunos recorridos están bloqueados porque primero hay que mover otro ladrillo. Otras dudas pueden venir de los fallos de exploración táctil comunicados en AppleVis, donde una puerta o un ladrillo se encontraba mediante navegación secuencial, pero no bajo el dedo. No supongas que una zona está libre solo porque no se haya anunciado nada. Esos fallos tienen sus propios compromisos de corrección para la próxima actualización.',
          'Ran et al. (2025) entrevistaron a 32 jugadores móviles experimentados, ciegos o con baja visión, de China; los participantes pidieron tutoriales accesibles, navegación por foco y una configuración inicial más sencilla.',
          'Es un contexto útil para nuestro enfoque de las instrucciones. La explicación de un control debería ayudar a distinguir el estado del tablero de la forma de actuar sobre él. No deberías tener que adivinar cuál de las dos cosas ha fallado antes de pedir ayuda.',
        ],
      },
      'teach-one-idea-at-a-time': {
        title: 'Qué nos hemos comprometido a explicar mejor',
        paragraphs: [
          'A la pregunta sobre el tutorial se sumó el comentario de otro jugador: varias mecánicas aparecían a la vez y le costaba resolver los tableros con los movimientos disponibles. Estuvimos de acuerdo en que el comienzo necesitaba una introducción más gradual. Para la próxima actualización, hemos prometido tarjetas breves de explicación cuando aparezca una idea por primera vez, tableros introductorios que enseñen una idea cada vez y más movimientos en los primeros tableros.',
          'A 2 de octubre de 2026, esos cambios de aprendizaje siguen en desarrollo para la próxima actualización. También estamos rediseñando todos los niveles, empezando por los primeros pueblos, con el compromiso de mantener el juego accesible mediante VoiceOver. El objetivo es un comienzo que te permita ganar confianza con las reglas.',
          'Andrade et al. (2019) encuestaron a 17 jugadores con discapacidad visual y entrevistaron a seis; los participantes valoraron una experiencia de juego rica y describieron tensiones entre la complejidad y la accesibilidad.',
          'Nuestra respuesta de diseño es explicar una regla antes de combinarla con otras. Aprender qué frena un ladrillo, encontrar una puerta a juego y gestionar varias piezas que bloquean el paso pueden ser tareas satisfactorias por separado. Presentarlas con claridad debería dejar espacio para que descubras una solución, en lugar de preguntarte qué significan los controles.',
        ],
      },
      'keep-the-next-decision-yours': {
        title: 'Que la siguiente decisión siga siendo tuya',
        paragraphs: [
          'Prueba a expresar el propósito de tu próximo movimiento en una frase corta: «Esto despeja el recorrido hasta la puerta» o «Esto crea un punto de parada». Si aún no puedes predecir qué hará el deslizamiento, vuelve a examinar las piezas relevantes antes de actuar. Puedes aprender una relación cada vez, en lugar de intentar retener toda la solución en la cabeza.',
          'Ryan et al. (2006) asociaron la percepción de competencia y autonomía con el disfrute en cuatro estudios sobre juegos; esas asociaciones no demuestran el efecto de ninguna interfaz concreta.',
          'La investigación nos aporta preguntas útiles sobre la elección y la comprensión; tu experiencia con un tablero real nos dice dónde centrar el trabajo. Visita nuestra [información de accesibilidad](/accessibility) para consultar el panorama general de funciones o usa el [formulario de contacto](/contact) e indica el nivel, la dirección elegida y el anuncio que te dejó con dudas. Un aviso claro puede empezar por un solo movimiento.',
        ],
      },
    },
    pullQuote: 'Un aviso claro puede empezar por un solo movimiento.',
    faqs: [
      { question: '¿Pueden moverse los ladrillos de OutBrick hacia abajo y hacia los lados con VoiceOver?', answer: 'Sí. Nuestras indicaciones como desarrolladores describen acciones de deslizamiento hacia arriba, abajo, izquierda y derecha cuando el espacio permite el movimiento. Las puertas pueden estar en cualquier lado del tablero.' },
      { question: '¿Los gestos de VoiceOver hacia arriba y abajo significan que el ladrillo solo se mueve en vertical?', answer: 'No. Con el foco en un ladrillo, nuestras indicaciones usan deslizamientos del dedo hacia arriba y abajo para elegir entre las acciones direccionales. Escucha el nombre de la acción seleccionada, que puede indicar izquierda, derecha, arriba o abajo.' },
      { question: '¿Por qué un ladrillo de OutBrick pasa de largo por una casilla vacía?', answer: 'Un deslizamiento direccional completo estándar sigue la regla de deslizamiento hasta el tope, así que el ladrillo continúa hasta que algo lo frena. Escucha el nombre completo de la acción para entender qué movimiento estás eligiendo. Ten en cuenta tanto el punto de parada previsto como el recorrido disponible.' },
      { question: '¿Dónde están las tarjetas de explicación descritas en las respuestas de AppleVis?', answer: 'Las respuestas del 2 de octubre de 2026 prometen tarjetas de explicación para la próxima actualización y no indican dónde encontrar un tutorial disponible actualmente. Los primeros tableros más asequibles y los movimientos introductorios adicionales también son compromisos futuros en esa conversación.' },
    ],
  },
  'outbrick-untimed-puzzle-challenge': {
    title: 'OutBrick sin reloj: espacio para un buen reto',
    dek: 'La comunidad de AppleVis pidió tiempo para explorar y un inicio más gradual. Así encajan los límites de movimientos y las mejoras previstas.',
    imageAlt: 'Un teléfono que muestra ladrillos de colores de OutBrick y dos personajes de ladrillo sobre un fondo azul marino',
    tags: ['accesibilidad', 'VoiceOver', 'juegos de puzles', 'diseño de dificultad', 'diseño inclusivo'],
    intro: 'Tómate un momento para encontrar las puertas, seguir un posible recorrido y cambiar de idea sobre el primer movimiento. Ese margen para explorar importa en OutBrick, sobre todo cuando te estás haciendo una idea del tablero con VoiceOver. La conversación de AppleVis nos trajo testimonios alentadores de jugadores que habían descubierto un nuevo tipo de puzle favorito, junto con preguntas claras sobre la dificultad, el número de movimientos disponibles y un reloj que alguien había encontrado. Queremos responder directamente a esas preguntas y explicar cómo estamos haciendo más acogedores los primeros tableros sin perder el placer de un buen reto. Las investigaciones que comentamos aquí aportan un contexto útil; ninguno de estos estudios evaluó OutBrick.',
    keyTakeaways: [
      'Jugar sin reloj deja espacio para explorar el tablero; el número de movimientos disponibles sigue limitando las acciones con las que lo resuelves.',
      'Describimos OutBrick como un juego sin reloj, aunque un jugador nos comunicó que había encontrado uno. La conversación deja esa discrepancia sin resolver.',
      'Nuestros planes para la próxima actualización incluyen primeros tableros más asequibles, mecánicas presentadas de una en una y más movimientos en los tableros iniciales.',
    ],
    sections: {
      'understanding-before-moving': {
        title: 'Dale a la comprensión su propio tiempo',
        paragraphs: [
          'Antes de elegir un movimiento, quien juega con VoiceOver puede necesitar encontrar un ladrillo, identificar su puerta, explorar los espacios intermedios y comprobar qué frenará su deslizamiento. Eso ya es un trabajo importante. Permite construir una idea del tablero a partir de información que llega de forma secuencial. Una regla que consume tiempo durante ese proceso cambia la tarea que se le está pidiendo al jugador.',
          'En la conversación de AppleVis, un jugador explicó el problema comparándolo con el ajedrez relámpago: primero hay que explorar el tablero pieza a pieza. Otro agradeció que no hubiera límite de tiempo porque poder elegir su propio ritmo hacía el puzle más atractivo. Ninguno de los dos comentarios pide que el juego dé la respuesta. Piden suficiente oportunidad para entender la pregunta.',
          'El tiempo para pensar y el número de movimientos disponibles son decisiones de diseño independientes. Un tablero con límite de movimientos puede permitir una pausa larga y, aun así, hacer que cada acción tenga consecuencias. Nuestra [guía para leer el tablero de OutBrick con VoiceOver](/blog/outbrick-voiceover-spatial-board) examina la información que debe estar disponible durante esa pausa. Tener más tiempo ayuda poco si no puedes encontrar una pieza o un espacio vacío esenciales.',
        ],
      },
      'what-the-timer-record-says': {
        title: 'No perder de vista la discrepancia sobre el reloj',
        paragraphs: [
          'Nuestra publicación inicial en AppleVis describía un juego sin límite de tiempo. Más tarde, un jugador contó que el tiempo se agotaba casi antes de que pudiera empezar y preguntó si se podía desactivar el reloj. En [nuestra respuesta sobre el reloj](https://www.applevis.com/comment/217462#comment-217462), explicamos que el modo contrarreloj se había eliminado por completo y que los tableros solo tenían ya un objetivo de movimientos.',
          'Esa respuesta no borra la experiencia del jugador. La conversación no identifica las versiones de la app afectadas, la versión en la que se eliminó el modo ni las circunstancias del reloj comunicado, así que no podemos explicar la discrepancia a partir de ese hilo. No debemos suponer que el jugador confundió movimientos con segundos. Su petición práctica era clara: suficiente tiempo para explorar antes de decidir qué hacer.',
          'Nuestras [notas publicadas de la versión 4.2](/whats-new#4-2) dicen, por separado, que Rush se retiró y que nada en OutBrick tiene límite de tiempo. Esas notas describen el cambio publicado, pero no pueden decirnos qué ocurrió en aquella sesión concreta. Si todavía te aparece una cuenta atrás, describe la pantalla y la versión instalada en [nuestro formulario de contacto](/contact). Así tendremos un punto de partida concreto para entender lo que te has encontrado.',
        ],
      },
      'enjoyment-and-difficulty': {
        title: 'Disfrutar de un juego también puede incluir pasarlo difícil',
        paragraphs: [
          'El entusiasmo de la comunidad tenía motivos concretos. Un jugador se alegró de encontrar otro puzle accesible de bloques y ordenación. Otro contó que había pasado buena parte del día con el juego mientras seguía aprendiendo a jugar bien. A un tercero le encantaba la idea, pero le costaba gestionar varias mecánicas a la vez y no había completado ningún puzle dentro de los movimientos exigidos. El disfrute y la frustración aparecían juntos.',
          'Andrade et al. (2019) encuestaron a 17 jugadores con discapacidad visual y entrevistaron a seis; los participantes valoraron la complejidad y poder participar de forma satisfactoria.',
          'Es un recordatorio útil de que hay que escuchar qué tipo de dificultad valora cada jugador. Un recorrido intrincado, una regla de movimiento desconocida y un control que no se puede encontrar pueden frenar el progreso, pero requieren respuestas distintas. Simplificar el recorrido no explica el control; hacer que el control se pueda leer no enseña automáticamente el recorrido.',
          'Cuando un tablero te resulte difícil, intenta poner nombre al obstáculo. ¿No sabes qué puede hacer un ladrillo, adónde tiene que ir o cómo llegar allí con los movimientos disponibles? Nuestra [guía de acciones de deslizamiento con VoiceOver](/blog/outbrick-voiceover-slide-actions) responde a la primera pregunta. Las otras dos tienen que ver con comprender el espacio y planificar.',
        ],
      },
      'a-gentler-first-encounter': {
        title: 'Un comienzo más gradual, una idea cada vez',
        paragraphs: [
          'A 2 de octubre de 2026, los primeros tableros más asequibles, las tarjetas de explicación para la primera aparición de cada idea y unos márgenes de movimientos iniciales más generosos siguen previstos para la próxima actualización, con el trabajo aún en curso. Los comentarios de AppleVis ayudaron a aclarar el problema: aparecían varias mecánicas a la vez. Estamos rediseñando los niveles, empezando por los primeros pueblos, para dar más espacio a esos primeros encuentros.',
          'Ran et al. (2025) entrevistaron a 32 jugadores móviles experimentados, ciegos o con baja visión, de China; los tutoriales accesibles estaban entre las mejoras que pidieron los participantes.',
          'Un tablero inicial puede presentar una relación antes de combinarla con otra. Primero necesitas entender cómo se desliza y sale un ladrillo. Más adelante, un obstáculo nuevo puede hacerte reconsiderar un plan conocido. Piensa en ello como un principio de aprendizaje: empieza por algo que el jugador pueda entender y dale después una razón interesante para usarlo de otra manera.',
          'También tenemos previsto dar más movimientos en los primeros tableros, para dejar margen para probar una idea y observar su resultado. La pregunta importante es si entiendes más después de ese intento. Un margen mayor, por sí solo, no puede explicar una mecánica desconocida, así que las tarjetas de explicación tienen que ser fáciles de encontrar y entender con VoiceOver. El objetivo es que los primeros descubrimientos lleven de forma natural a los siguientes.',
        ],
      },
      'keep-the-interesting-challenge': {
        title: 'Conservar la parte interesante del reto',
        paragraphs: [
          'Abuhamdeh y Csikszentmihalyi (2012) estudiaron el ajedrez y actividades cotidianas, y encontraron que la relación entre el reto y el disfrute variaba según la motivación y el tipo de actividad.',
          'En cuatro estudios sobre juegos, Ryan et al. (2006) asociaron la percepción de competencia y autonomía con el disfrute y las preferencias de juego.',
          'En OutBrick, la pregunta útil es dónde debe estar el esfuerzo. Planificar una secuencia puede seguir siendo exigente cuando la interfaz ya describe las piezas con claridad. Encontrar un uso ingenioso para un ladrillo que bloquea el paso puede seguir siendo satisfactorio cuando la regla de movimiento ya está explicada. Una introducción más gradual puede prepararte para esa complejidad sin decidir cuánta complejidad deberías querer al final.',
          'La misma distinción te ayuda a valorar una sesión. ¿Perdiste porque una relación de dependencia en tu plan era incorrecta, porque el margen de movimientos era ajustado o porque no podías descubrir información esencial? Esas observaciones son más útiles que un único veredicto de «demasiado difícil». Tampoco tienes obligación de insistir si el tipo de reto que ofrece el juego no te resulta entretenido.',
        ],
      },
      'a-deliberate-next-attempt': {
        title: 'Que el próximo intento te enseñe algo',
        paragraphs: [
          'En un tablero nuevo, empieza por encontrar las salidas y las piezas que les corresponden. Identifica un recorrido que quieras abrir y examina después qué lo bloquea. Antes de actuar, expresa el propósito del movimiento: despejar un pasillo, crear un punto de parada o acercar un ladrillo a su puerta. Después de actuar, comprueba cómo ha quedado el tablero antes de ampliar el plan.',
          'Si no puedes encontrar una puerta o un ladrillo, cuéntanoslo en lugar de gastar intentos una y otra vez a base de suposiciones. Debes poder concentrarte en tu plan. La [página de accesibilidad](/accessibility) ofrece información de soporte más amplia, mientras que nuestro [artículo sobre el compromiso con la accesibilidad](/blog/outbrick-accessibility-commitment) explica cómo los avisos de los jugadores nos ayudan a identificar el trabajo que necesita atención y a comunicar los cambios a medida que llegan.',
          'Por último, ten presentes las demás restricciones. Un tablero sin reloj puede seguir teniendo un límite de movimientos, vidas y ofertas de compra; la ausencia de reloj no garantiza intentos ilimitados. El objetivo es una sesión en la que puedas entender las reglas, elegir tu enfoque y reconocer lo que te ha enseñado un intento.',
        ],
      },
    },
    pullQuote: 'El tiempo para pensar y el número de movimientos disponibles son decisiones de diseño independientes.',
    faqs: [
      { question: '¿Promete OutBrick actualmente partidas sin límite de tiempo?', answer: 'Sí. Nuestra respuesta del 2 de octubre en AppleVis y las notas publicadas de la versión 4.2 dicen que OutBrick no tiene reloj. Antes, en esa misma conversación, un jugador había comunicado que había encontrado uno, y el hilo no determina las versiones afectadas ni explica esa discrepancia.' },
      { question: '¿No tener reloj significa tener movimientos ilimitados?', answer: 'No. OutBrick mantiene las restricciones de movimientos, así que puedes tomarte tiempo para examinar un tablero y seguir teniendo que resolverlo dentro del margen disponible. Las vidas y las compras son partes independientes de la experiencia.' },
      { question: '¿Ya se han publicado los primeros tableros más asequibles?', answer: 'Los tableros iniciales más asequibles, las tarjetas de explicación cuando aparece una idea por primera vez y unos márgenes de movimientos iniciales más generosos están previstos para la próxima actualización. Ese trabajo sigue en curso.' },
      { question: '¿El diseño de puzles accesibles exige que los puzles sean fáciles?', answer: 'Los jugadores pueden valorar una complejidad considerable y, al mismo tiempo, necesitar información y controles fiables. En la práctica, un primer paso útil es identificar si la dificultad viene de planificar, aprender una regla o acceder a la interfaz.' },
    ],
  },
  'outbrick-accessibility-beyond-board': {
    title: 'Accesibilidad en OutBrick más allá del tablero',
    dek: 'Botones de la tienda, puertas congeladas, misiones e italiano: así nos ayudan los comentarios de AppleVis a mejorar toda la sesión de OutBrick.',
    imageAlt: 'Un teléfono que muestra ladrillos de colores de OutBrick y dos personajes de ladrillo sobre un fondo azul marino',
    tags: ['accesibilidad', 'VoiceOver', 'diseño inclusivo', 'diseño de juegos', 'opiniones de jugadores'],
    intro: 'Debes poder disfrutar de toda la sesión de OutBrick, desde abrir el juego hasta consultar tu progreso. Los jugadores de AppleVis nos ayudaron a ver dónde se atascaba ese recorrido: botones de la tienda que no se activaban, una pantalla de inicio lenta, información que faltaba sobre puertas congeladas y avances que no contaban para las misiones. Aquí explicamos qué estamos mejorando y qué deben facilitarte esos cambios. También respondemos a la pregunta sobre el italiano y ofrecemos una lista breve para contarnos cualquier cosa que se interponga en tu camino.',
    keyTakeaways: [
      'Que un botón se anuncie no demuestra que se active correctamente, y completar un tablero no demuestra que el progreso quede registrado.',
      'Nuestro trabajo para la próxima actualización abarca la activación de la tienda con VoiceOver, la pantalla de inicio, los anuncios de puertas congeladas y el progreso de las misiones.',
      'Confirmamos que la app está disponible en italiano y un jugador también lo confirmó; los cinco idiomas de publicación del sitio web son una lista aparte.',
    ],
    sections: {
      'follow-the-whole-session': {
        title: 'Revisar la sesión completa',
        paragraphs: [
          'Un aviso de AppleVis reunió cuatro problemas: VoiceOver encontraba los botones de los paquetes de la tienda, pero no podía abrir la interfaz de compra; Inicio iba muy lento; no se podían encontrar las puertas congeladas; y derretir hielo no hacía avanzar las misiones correspondientes. El jugador también disfrutaba del juego y había llegado al nivel 62. El progreso y las barreras de acceso coexistían claramente.',
          'Gonçalves et al. (2023) analizaron partidas publicadas por jugadores ciegos e identificaron tensiones entre el acceso, la capacidad de decidir y actuar y la implicación, incluso cuando los jugadores encontraban formas de avanzar.',
          'La accesibilidad debe acompañarte durante toda la sesión. Una revisión útil sigue una intención completa: «Quiero empezar un tablero», «Quiero entender esa puerta» o «Quiero consultar el progreso que he conseguido». Cada intención pasa por varios controles y transiciones. Una etiqueta puede funcionar en un punto y, aun así, la tarea completa puede fallar.',
          'A 2 de octubre de 2026, los cambios descritos en [nuestra respuesta de AppleVis sobre estos cuatro problemas](https://www.applevis.com/comment/217461#comment-217461) siguen en desarrollo para la próxima actualización. La investigación que citamos aquí no evaluó OutBrick; nos ayuda a pensar en la experiencia que rodea esos avisos concretos de los jugadores.',
        ],
      },
      'shop-labels-and-activation': {
        title: 'Las etiquetas de la tienda necesitan un siguiente paso fiable',
        paragraphs: [
          'El aviso sobre la tienda fue especialmente útil porque identificó exactamente dónde se detenía el proceso. Los botones de los paquetes se podían detectar, así que su nombre se oía. Activarlos no abría la interfaz de compras dentro de la app. La corrección prevista hará que esos botones respondan a VoiceOver y abran la pantalla de compra, para que quien decida explorar una oferta pueda acceder a sus detalles.',
          'Kane et al. (2008) separaron la exploración de la activación en un prototipo de pantalla táctil probado con diez usuarios de lectores de pantalla en tareas de teléfono, correo electrónico y música.',
          'Esa distinción nos da una forma sencilla de revisar la tienda. Primero, ¿puedes encontrar e identificar el control? Después, ¿la acción que eliges lleva a la pantalla esperada? Por último, ¿queda claro el resultado? Cada paso importa a quien está tomando una decisión de compra, aunque los anteriores ya funcionen. Un botón legible necesita un siguiente paso fiable.',
          'No necesitas comprar nada para explicar que la pantalla de compra no ha aparecido. Un aviso útil puede nombrar el paquete, describir cómo intentaste activarlo y decir si cambió algo. Evita activar repetidamente un control de pago cuyo estado no está claro; si aparece un panel de compra, revisa sus condiciones y toma tu propia decisión antes de continuar.',
        ],
      },
      'home-screen-and-waiting': {
        title: 'Una pantalla de inicio lenta cambia el comienzo',
        paragraphs: [
          'El mismo jugador describió la pantalla de inicio como muy lenta al entrar. Dijimos que haríamos que se abriera mucho más rápido en la próxima actualización. Para quien vuelve al juego, ese trabajo tiene un propósito sencillo: llegar a la parte de la sesión que le interesa sin una espera incierta al principio.',
          'Una entrada lenta te obliga a decidir si esperar, volver a intentarlo o dar por hecho que la acción ha fallado. Si navegas mediante respuestas de voz, la ausencia de una respuesta útil puede hacer especialmente incómoda esa decisión. El aviso nos da un motivo para examinar toda la espera: qué oyes, qué controles están disponibles y cómo sabes que la pantalla está lista.',
          'Si decides comunicar una demora similar, distingue entre abrir la app y volver a la pantalla de inicio después de un tablero. Cuenta qué seguía disponible mientras esperabas y qué ocurrió al final. Bastan observaciones aproximadas; no necesitas recopilar registros ni repetir una sesión frustrante una y otra vez. Preferimos una descripción clara de un intento a una prueba elaborada que te cueste toda una tarde.',
        ],
      },
      'frozen-gates-and-progress': {
        title: 'Una puerta congelada tiene un estado y una consecuencia',
        paragraphs: [
          'Las puertas congeladas plantearon dos problemas relacionados. El jugador no podía encontrarlas y derretir hielo no contaba para las misiones correspondientes. Tenemos previsto añadir anuncios que indiquen el estado de congelación y los movimientos que faltan para que se derrita el hielo, y hacer que derretirlo cuente para las misiones de puertas congeladas. Esos cambios abordan tanto la comprensión del tablero como el reconocimiento de lo que has conseguido en él.',
          'Andrade et al. (2019) encuestaron a 17 jugadores con discapacidad visual y entrevistaron a seis; los testimonios de los participantes incluían interés por experiencias de juego ricas y complejas.',
          'La tarea de diseño consiste en describir una mecánica lo bastante bien como para que puedas razonar sobre ella. Una puerta congelada puede ser una dependencia interesante cuando conoces su estado: puedes planificar teniendo en cuenta cuándo cambiará. Sin esa información, el mismo obstáculo puede dejarte sin saber si una regla o un problema de acceso bloquea el recorrido.',
          'El progreso necesita una conexión igual de comprensible. Si el juego pide que se derrita hielo, el contador de la misión debería mostrar con claridad el avance que eso produce. La corrección de misiones prevista aborda el fallo que comunicó el jugador. Cuando consultes una misión después de jugar, debes poder relacionar el cambio en el tablero con el progreso mostrado. Nuestro [artículo sobre la distribución del tablero](/blog/outbrick-voiceover-spatial-board) examina la dificultad relacionada de localizar puertas y casillas vacías.',
        ],
      },
      'italian-app-and-website': {
        title: 'El italiano en la app es una cuestión de idiomas aparte',
        paragraphs: [
          'Una persona de la comunidad preguntó si OutBrick estaba disponible en italiano. Confirmamos la compatibilidad completa con el italiano y otros once idiomas en la app, y otro jugador confirmó que el italiano estaba disponible por su propia experiencia. Nuestra respuesta no enumeraba los otros once idiomas, pero la respuesta a esta pregunta concreta es sencilla: sí, la app está disponible en italiano.',
          'Nuestro sitio web publica en inglés, francés, alemán, español y japonés. Esa lista es independiente de los idiomas de la app: puedes usarla en italiano aunque el sitio web no tenga una edición en italiano. Cuando buscas ayuda, el idioma en el que juegas y los disponibles para un artículo concreto pueden ser distintos.',
          'La confirmación de la comunidad también mencionaba una actualización que había llegado ese día, sin decir que los fallos anteriores se hubieran resuelto. Nuestra respuesta posterior seguía describiendo las correcciones como trabajo pendiente. Un aviso de actualización por sí solo no te dice qué problema concreto ha cambiado, así que consulta [las notas de versión publicadas](/whats-new) cuando quieras comprobar una mejora específica. Relacionar la versión con el cambio hace que esas conversaciones sean mucho más fáciles de seguir.',
          'Para un aviso relacionado con el idioma, identifica la pantalla y el texto que falta, no se entiende o aparece sin traducir cuando debería estar traducido. No hace falta explicar tu procedencia ni justificar por qué prefieres un idioma concreto.',
        ],
      },
      'feedback-without-extra-burden': {
        title: 'Comentarios concretos sin convertirlos en una carga',
        paragraphs: [
          'Ran et al. (2025) entrevistaron a 32 jugadores móviles experimentados, ciegos o con baja visión, de China; los participantes querían comunicación con los desarrolladores y una configuración accesible, entre otras mejoras.',
          'Aquí tienes una lista breve por si quieres enviarnos comentarios. Usa solo lo que te ayude y deja fuera cualquier información privada. Un aviso puede ser útil sin una grabación, datos de cuenta ni justificantes de compra. El [formulario de contacto](/contact) ofrece una vía directa; la [información de accesibilidad](/accessibility) recoge el contexto de soporte que tenemos publicado actualmente.',
        ],
        bullets: [
          'Nombra la tarea: abrir Inicio, activar un paquete concreto de la tienda, localizar una puerta congelada o consultar una misión.',
          'Describe la secuencia más corta que recuerdes, el resultado que esperabas y lo que ocurrió de verdad, incluidas las palabras que oíste si resultan útiles.',
          'Si tienes el dato a mano, incluye la versión instalada de la app y si el problema se repite. No hace falta adivinar la causa ni gastar dinero para investigar.',
          'Para el progreso de las misiones, indica la misión y el nivel si los sabes, además del contador antes y después si lo tienes. Si decides enviar capturas, oculta nombres, recibos y notificaciones que no tengan relación con el problema.',
        ],
      },
    },
    pullQuote: 'La accesibilidad debe acompañarte durante toda la sesión.',
    faqs: [
      { question: '¿Ya se han corregido los problemas comunicados de la tienda y la pantalla de inicio?', answer: 'Las mejoras de la tienda y la pantalla de inicio están previstas para la próxima actualización y siguen en desarrollo. Estamos trabajando para que los botones de los paquetes abran la pantalla de compra con VoiceOver y para que Inicio se abra más rápido.' },
      { question: '¿Qué deberían anunciar las puertas congeladas?', answer: 'Tenemos previsto que las puertas congeladas anuncien su estado de congelación y los movimientos que faltan para que se derrita el hielo. También queremos que derretirlo cuente para las misiones de puertas congeladas, de modo que el progreso que consigas quede reflejado en la misión.' },
      { question: '¿Está OutBrick disponible en italiano?', answer: 'Sí. Confirmamos en AppleVis que la app está disponible en italiano y una persona de la comunidad también lo confirmó. Nuestra respuesta menciona doce idiomas de la app sin enumerarlos todos; el sitio web publica, por separado, en inglés, francés, alemán, español y japonés.' },
      { question: '¿Cuál es la forma más útil de comunicar un problema de accesibilidad?', answer: 'Cuéntanos la tarea, los pasos que seguiste, el resultado que esperabas y lo que ocurrió en su lugar; añade la versión de la app si la tienes a mano. Nuestro [artículo sobre el compromiso con la accesibilidad](/blog/outbrick-accessibility-commitment) explica cómo abordamos los comentarios de los jugadores; no necesitas comprar nada ni compartir información privada de tu cuenta.' },
    ],
  },
};
