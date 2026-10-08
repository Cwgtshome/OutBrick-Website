import type { ExtraGuides } from '../../i18n/blog';
import { appStoreUrl } from '../../app-store-url.ts';
export const es9: ExtraGuides = {
  'water-sort-vs-block-sort': {
    title: 'Ordenar agua o bloques: ¿qué puzle encaja contigo?',
    dek: 'Compara capacidad de recipientes y rutas de bloques deslizantes con ejemplos, consejos de elección y límites claros de la investigación.',
    imageAlt:
      'Ladrillos de colores y personajes de OutBrick sobre una cuadrícula de puzle azul marino',
    tags: [
      'puzles de ordenar bloques',
      'juegos de puzles',
      'diseño de juegos',
      'hábitos de juego',
    ],
    intro:
      'Un tubo casi ordenado puede ser el destino equivocado para verter. Un ladrillo junto a su salida puede estar mal colocado para salir. Ordenar agua y bloques hace parecer sencillo emparejar colores, pero esconde la decisión interesante en el orden de movimientos. Cambia el recurso: espacio en recipientes frente a rutas y paradas. Comparamos esas decisiones sin declarar ganador. Para agua usamos las reglas publicadas de Water Sort Puzzle de IEC Global; para bloques, deslizar hasta parar en los tableros clásicos de OutBrick, que conservan sus tableros del navegador. Otros juegos con esos nombres pueden diferir. Creamos OutBrick y nuestros ejemplos tienen esa perspectiva, no pretenden pruebas independientes.',
    keyTakeaways: [
      'Ordenar agua pregunta dónde puede ir legalmente el líquido; ordenar bloques deslizantes, qué rutas y paradas puedes crear.',
      'Un tubo vacío y una casilla vacía sirven de formas distintas. Protege el espacio del siguiente paso en vez de emparejar colores en cada ocasión.',
      'Elige decisiones que disfrutes e interfaces cómodas. La investigación no demuestra que ninguno de estos estilos mejore la cognición.',
    ],
    sections: {
      'different-things-to-move': {
        title: 'Primero, establece qué significa un movimiento',
        paragraphs: [
          'La descripción de Water Sort Puzzle de IEC Global dice que tocas un vaso para verter en otro, con color correspondiente y espacio suficiente. La meta es agrupar cada color en su vaso. Tratamos esas reglas, no prometemos que valgan en todas las aplicaciones. La ficha también describe reiniciar y jugar sin tiempo. Es un punto de partida, no resuelve casos como cuánto líquido transfiere exactamente cada toque (IEC Global Pty Ltd, n.d.).',
          'En los tableros clásicos de OutBrick mueves directamente el ladrillo. Se desliza hasta detenerse y sale por su puerta del mismo color. No lo arrastras a cualquier casilla. Un pasillo libre puede llevarlo más allá y otro ladrillo puede darle la parada necesaria. (El juego del App Store se juega ahora con Slide & Match: un ladrillo se detiene donde lo sueltas y puede intercambiarse para formar combinaciones.) Nuestra [guía de puzles deslizantes](/blog/how-to-solve-sliding-block-puzzles) explica la distinción y un enfoque de resolución.',
          'Ambos ordenan colores, pero esa etiqueta describe el destino, no todo el viaje. Verter cambia las capas accesibles en lo alto de un recipiente; deslizar reorganiza obstáculos en un tablero compartido. Antes de juzgar confuso un juego, di su regla en voz alta. Predecir bien es un primer hito mejor que terminar rápido.',
          'Las variantes pueden cambiar reglas, restricciones o recipientes. Empieza por el tutorial del propio juego antes de trasladar consejos de otro parecido.',
        ],
      },
      'capacity-example': {
        title: 'Ordenar agua: la capacidad libre forma parte de la solución',
        paragraphs: [
          'Imagina una variante habitual que permite verter en un tubo vacío. A tiene azul encima de rojo; B tiene azul arriba, pero está lleno; C está vacío. No puedes verter A en B solo porque coincidan: B necesita sitio. Pasar el azul de A a C descubre rojo y abre otra posibilidad. El ejemplo explica una dependencia, no promete esa distribución en IEC Global.',
          'Tienta usar inmediatamente todo tubo vacío. Pregunta mejor qué color enterrado quieres descubrir y adónde debe ir la capa superior. Un recipiente libre permite una posición intermedia. Llenarlo con una capa ajena puede consumir el único destino viable del movimiento que preparabas.',
          'Cambia el ejemplo: B tiene espacio para azul y A puede verter directamente allí según la regla. C queda disponible. El movimiento es más sencillo, pero la pregunta sigue: ¿qué quedará accesible después? Nuestros [consejos para ordenar colores](/blog/colour-sort-puzzle-tips) desarrollan mirar más allá de la pareja obvia.',
          'Ito et al. (2023) formalizaron ordenar bolas y agua, mostrando equivalencia de resolubilidad en su modelo y demostrando que los problemas generalizados son NP-completos. Trata reglas específicas de pilas, no toda variante comercial. Explica planificación exigente con reglas simples sin demostrar dificultad de nuestro ejemplo ni igual complejidad de OutBrick. Pregúntate si te gusta gestionar colores enterrados y capacidad libre.',
        ],
      },
      'route-example': {
        title: 'Ordenar bloques: un obstáculo puede ser un freno útil',
        paragraphs: [
          'Imagina que el rojo debe alinearse con una puerta roja a la derecha. Subir por una columna vacía lo lleva más allá de la fila del giro. El azul encima de esa fila podría detenerlo a la altura útil. La tarea inmediata es colocar el azul aunque el rojo parezca más cerca de salir. Es un ejemplo de los tableros clásicos de OutBrick, no una solución de nivel numerado.',
          'Tras alinear el rojo puede surgir otra dependencia: el azul también necesita el pasillo. Sacar pronto el rojo puede borrar una parada necesaria. A diferencia del tubo libre, el recurso es una ubicación relacionada con la ruta. Más espacio vacío no significa automáticamente una posición mejor. A veces sirve precisamente porque la casilla adecuada está ocupada.',
          'Kirsh y Maglio (1994) estudiaron Tetris y distinguieron acciones que avanzan hacia una meta de las que revelan información difícil de calcular mentalmente. No probaron OutBrick ni aplicaciones de agua. Tomamos la distinción para leer intentos: un movimiento puede mostrar la parada sin mejorar la ruta. «Paró una fila demasiado arriba» es información, no un juicio sobre tu capacidad.',
          'Prueba un tablero en nuestra [página de juego](/play) y predice la parada antes de mover. Compara después. Para leer con más intención, la [guía antes de mover](/blog/how-to-read-a-puzzle-before-moving) ayuda a identificar salidas y dependencias. Pruebas tu interés por las rutas, no la rapidez para dominar un juego desconocido.',
        ],
      },
      'compare-the-experience': {
        title: 'Compara la experiencia más allá del tablero',
        paragraphs: [
          'Una interfaz ilegible puede arruinar una mecánica preferida. En líquidos, ¿distingues capas superiores y capacidad restante a tu distancia normal? En bloques, ¿identificas ladrillo, puerta y obstáculo que lo detendrá? Usa el teléfono real en vez de juzgar imágenes promocionales ampliadas.',
          'Larkin y Simon (1987) compararon representaciones gráficas y textuales con modelos y ejemplos de matemáticas y física. Mostraron cómo ubicación y agrupación cambian el trabajo para encontrar información equivalente. No probaron capturas de juegos. Aplicamos la idea a qué muestra claramente un tablero: color superior y capacidad o relación entre ladrillo, obstáculo y puerta.',
          'Jugar sin tiempo describe ritmo, no todo el modelo comercial. OutBrick tiene límites y objetivos de movimientos, vidas y anuncios con recompensa opcionales. El primer deshacer de cada tablero de la aplicación es gratis. Nuestra [explicación de juego justo](/#fair) detalla costes. IEC Global anuncia descarga gratis y compras; eso no establece frecuencia o forma de anuncios. No comparamos precios o interrupciones mediante pruebas directas.',
          'Kotovsky et al. (1985) investigaron dificultad en versiones de Torre de Hanói según reglas, representación y memoria. Eran tareas distintas. Compartir una meta abstracta no hace igual de fáciles dos presentaciones. Si una te resulta clara, examina decisiones y pistas que te apoyan sin declarar superior todo el género. Ningún estudio citado demuestra ventajas médicas o cognitivas de estas aplicaciones.',
        ],
      },
      'choose-with-a-small-test': {
        title: 'Elige mediante una prueba pequeña y justa',
        paragraphs: [
          'Deja que cada estilo enseñe su regla y pregunta: ¿predigo un movimiento normal?, ¿disfruto la pregunta que deja fallar?, ¿probaría otro tablero voluntariamente? Separa desconocimiento inicial de incompatibilidad duradera sin juzgar todo un género por el primer nivel difícil.',
          'En agua, observa si disfrutas descubrir colores y conservar espacio receptor. En bloques, si disfrutas preparar rutas y frenos temporales. Quizá prefieras pilas visuales claras, movimiento de ladrillos o controles cómodos. Basta elegir el problema en que quieres pensar.',
          'Compara en circunstancias parecidas y sin concurso cronometrado. Unos movimientos observados deliberadamente pueden revelar más que perseverar en un juego que ya no te gusta.',
          `Si te atrae deslizar, empieza por [los tableros de OutBrick en el navegador](/play). Para la experiencia amplia, [busca OutBrick en el App Store](${appStoreUrl('journal-water-sort')}) y revisa requisitos y compras. Si prefieres verter, usa la ficha identificada abajo. El resultado útil es querer volver al puzle; también es razonable disfrutar de ambos.`,
          'Fuente de producto: IEC Global Pty Ltd. (n.d.). Water Sort Puzzle [Aplicación móvil]. App Store. Consultado el 30 de septiembre de 2026 en [la ficha de Water Sort Puzzle](https://apps.apple.com/gb/app/water-sort-puzzle/id1514542157). Usamos la descripción del desarrollador para comparar reglas; los ejemplos de planificación son nuestros.',
        ],
      },
    },
    pullQuote:
      'Más espacio vacío no significa automáticamente una posición mejor.',
    faqs: [
      {
        question:
          '¿Cuál es la diferencia principal entre ordenar agua y bloques?',
        answer:
          'Ordenar agua reparte líquido entre recipientes con reglas de capacidad y color. El estilo clásico de OutBrick mueve ladrillos por un tablero compartido hacia puertas, deslizando hasta que algo los detiene; el juego del App Store ahora añade intercambios y combinaciones.',
      },
      {
        question: '¿Un tubo vacío equivale a un hueco en un puzle de bloques?',
        answer:
          'Ambos permiten movimientos posteriores, pero sirven distinto. El tubo recibe líquido; una casilla vacía define una ruta y una ocupada puede proporcionar una parada útil.',
      },
      {
        question: '¿Qué estilo es mejor para el cerebro?',
        answer:
          'La investigación citada no establece superioridad cognitiva. Elige mecánica, legibilidad, ritmo y costes que encajen contigo.',
      },
      {
        question: '¿Puedo probar OutBrick antes de descargar?',
        answer:
          'La [página de juego de OutBrick](/play) ofrece unos pocos tableros de navegador. Demuestra el deslizamiento clásico sin representar toda la aplicación ni prometer progreso compartido.',
      },
    ],
  },
  'block-puzzles-online-no-download': {
    title: 'Juega puzles de bloques en línea sin descargar',
    dek: 'Prueba los tableros de OutBrick en el navegador sin instalar. Conoce controles, rotación diaria, puntuación y diferencias con el juego completo.',
    imageAlt:
      'Ladrillos de colores y personajes de OutBrick sobre una cuadrícula de puzle azul marino',
    tags: [
      'juegos de puzles',
      'puzles de ordenar bloques',
      'puzles diarios',
      'accesibilidad',
      'diseño de juegos',
    ],
    intro:
      'Quieres mover algunos bloques, no comprometerte con otra descarga. Un puzle de navegador responde una primera pregunta útil: ¿me gusta este problema? OutBrick ofrece tableros en su sitio y un juego separado en el App Store. Puedes explorar directamente la regla sin sustituir jugar por capturas. Explicamos dónde empezar, controles web, tablero diario y límites del navegador. Es una guía de nuestro sitio, comprobado el 30 de septiembre de 2026, no una clasificación de todos los servicios sin descarga. La pequeña versión web sirve como introducción por sí misma; no reproduce toda la aplicación.',
    keyTakeaways: [
      'Abre /play para una introducción o /daily para el tablero compartido por fecha; ninguno requiere instalar la aplicación.',
      'El diario cambia a medianoche UTC y rota un conjunto fijo. No se genera un puzle nuevo cada día.',
      'Puntuación, controles y reinicios permiten explorar la regla. No supongas guardado de progreso ni sincronización con la aplicación.',
    ],
    sections: {
      'where-to-start': {
        title: 'Empieza por el tablero acorde con tu propósito',
        paragraphs: [
          'Para empezar, abre la [guía de juego de OutBrick](/play). Su recorrido jugable de tres tableros comienza suave y añade posiciones donde importa parar. No eliges dificultad para toda la aplicación: pruebas si llevar ladrillos a sus puertas se entiende y merece otro intento.',
          'La regla es sencilla de decir: desliza un ladrillo hasta que algo lo detenga y sácalo por su puerta del mismo color. Planificar consiste en cómo se estorban o ayudan. Emparejar rojo y rojo es solo parte: quizá debas recolocar otro para que pare en la fila correcta antes de girar.',
          'Si conoces la regla, usa el [tablero diario](/daily) compartido. Quienes entran en la misma fecha UTC ven la misma selección. Así habláis de un puzle concreto, sin depender de abrir niveles parecidos. No hace falta competir en velocidad.',
          'Andersen et al. (2012) estudiaron tutoriales de tres juegos con más de 45 000 jugadores. Sus efectos variaban según juego y complejidad, sin formato universal. No probaron este sitio. Pregunta si el tablero inicial aclara la regla para juzgarla. Terminar el recorrido es opcional; elegir otra mecánica también es una prueba exitosa.',
        ],
      },
      'controls-and-feedback': {
        title: 'Usa los controles para comprobar una predicción',
        paragraphs: [
          'Con pantalla táctil o puntero, arrastra en la dirección deseada. El gesto fija dirección, no promete parar donde termina el dedo. Con teclado, lleva el foco a un ladrillo con Tab y usa Mayús más una flecha. Mira dónde se detiene antes de decidir otra dirección.',
          'Empieza por algo comprobable: «El amarillo debería parar junto al azul». Mueve y compara. Si está bloqueado, examina en vez de repetir la entrada. Puede ser un vecino, borde o puerta de otro color. Rechazo y resultado inesperado son observaciones distintas.',
          'Cao y Liu (2022) revisaron tutoriales y realizaron un estudio piloto de enseñanza implícita. Consideran la orientación según cómo se descubre el juego, sin demostrar que sea mejor una interfaz inexplicada. No evaluaron nuestros controles. Un primer movimiento deliberado comprueba instrucciones. Si seleccionar resulta incómodo, resuelve eso antes de juzgar difícil el puzle.',
          'El tablero combina color y símbolos en ladrillos y puertas. Juzga legibilidad a tu tamaño y distancia normales. Nuestra [información de accesibilidad](/accessibility) aporta contexto y [ayuda](/support) permite explicar dificultades. Incluye navegador, dispositivo y acción: un informe concreto sirve más que «no funciona».',
        ],
      },
      'moves-undo-and-restart': {
        title: 'El objetivo de movimientos invita a volver a probar',
        paragraphs: [
          'El tablero web cuenta movimientos y ofrece Deshacer y Reiniciar. Su objetivo es umbral de puntuación, no cuenta atrás. Completar da una estrella; dentro del objetivo, dos; hacerlo sin deshacer, tres. Superarlo no impide completar en el navegador. Deshacer cambia estrellas: distingue explorar de completar un intento limpio.',
          'Una primera meta sensata es simplemente completar el tablero. Cuando entiendas una ruta, reinicia y pregunta si era necesario un desvío inicial. Separa descubrir de refinar y evita abandonar por no lograr tres estrellas antes de entender dependencias. Ningún reloj exige actuar inmediatamente.',
          'Kirsh y Maglio (1994), con Tetris, distinguieron movimientos de progreso e información. No demuestran beneficio medido de este navegador. La distinción da propósito al primer intento: probar paradas enseña la posición aunque no tengas ruta completa. Reiniciar permite ejecutar lo entendido.',
          'Nuestra [guía para leer antes de mover](/blog/how-to-read-a-puzzle-before-moving) identifica dependencias. Si buscas evitar presión temporal, la [guía de puzles sin tiempo](/blog/no-timer-block-sort-puzzles-iphone) distingue ausencia de tiempo y ausencia de restricciones. El reinicio permisivo web no describe vidas, coste de deshacer o límites de la aplicación.',
        ],
      },
      'what-daily-means': {
        title: 'Qué significa «diario» en este sitio',
        paragraphs: [
          'La página diaria selecciona un conjunto fijo de tableros web por fecha UTC, recorriéndolo en orden sin el tutorial. Hay dieciséis al escribir esto. Al llegar al final vuelve al inicio. «Diario» significa selección compartida por fecha, no generación nueva cada mañana ni promesa de archivo creciente indefinido.',
          'Medianoche UTC puede ser tarde o noche donde vives. Fechas locales diferentes pueden coincidir en UTC y la misma fecha local cerca del cambio puede dar selecciones distintas. Usa fecha y número mostrados para hablar de soluciones. Medianoche local no es la regla.',
          'Tras completar, Compartir ofrece un enlace de resultado con estrellas, no la secuencia completa. Si quieres que tu amigo descubra la solución, envía el resultado y espera antes de describir la apertura. Es una invitación a comparar, no multijugador simultáneo integrado.',
          'Larkin y Simon (1987) analizaron cómo los diagramas organizan por ubicación frente al texto secuencial mediante modelos y ejemplos. No estudiaron juegos diarios. Usa la disposición compartida como referencia: identifica puerta u obstáculo antes del movimiento. El número fija el puzle; la posición visible fija la decisión.',
        ],
      },
      'web-and-app-boundaries': {
        title: 'Qué conserva y qué no la prueba del navegador',
        paragraphs: [
          'Sin descarga significa no instalar OutBrick para estos tableros. La página debe cargar en el navegador. No supongas capacidad sin conexión de la aplicación ni supervivencia del intento al cerrar o recargar. El tablero no guarda progreso ni conecta cuentas con tu recorrido de la aplicación.',
          'Importa si empiezas en portátil y luego instalas en teléfono. Completar aquí no desbloquea capítulos, transfiere estrellas ni demuestra tableros idénticos. El sitio es una introducción pequeña con conjunto y puntuación propios. El juego del App Store es separado y con progresión más amplia.',
          'La aplicación también tiene vidas, compras opcionales y anuncios con recompensa voluntarios. Lee [los detalles de juego justo](/#fair) y la ficha actual para decidir qué implica gratis. Reiniciar y deshacer en web no sustituyen las declaraciones. La ficha define requisitos; jugar en navegador no prueba compatibilidad nativa.',
          `Si te da curiosidad, [busca OutBrick en el App Store](${appStoreUrl('journal-no-download')}). Si solo quieres un tablero, continúa en [la página diaria](/daily). Ambas elecciones salen de la misma prueba: sabes cómo desliza, si los controles son cómodos y si te interesan las rutas. El ejemplo cumple su función cuando te ayuda a decidir.`,
        ],
      },
    },
    pullQuote: 'Una primera meta sensata es simplemente completar el tablero.',
    faqs: [
      {
        question: '¿Puedo jugar OutBrick sin descargar la aplicación?',
        answer:
          'Sí. La [guía de juego](/play) incluye un recorrido breve y [la página diaria](/daily) ofrece el tablero de la fecha UTC actual.',
      },
      {
        question: '¿Se genera el puzle diario desde cero cada día?',
        answer:
          'No. El sitio rota un conjunto fijo por fecha UTC, excluyendo el tutorial. Puede volver a una distribución anterior.',
      },
      {
        question: '¿Se sincroniza el progreso con la aplicación?',
        answer:
          'Los tableros no guardan ni sincronizan progreso. Son una introducción separada, no continuación de tu recorrido en la aplicación.',
      },
      {
        question: '¿Cómo muevo con teclado?',
        answer:
          'Lleva el foco con Tab y pulsa Mayús más una flecha en la dirección deseada. El ladrillo sigue hasta que algo lo detiene, no hasta una casilla arbitraria.',
      },
    ],
  },
  'solve-puzzles-together': {
    title: 'Resuelve puzles en compañía sin acaparar la pantalla',
    dek: 'Comparte un puzle respetando el siguiente movimiento: acordad roles, explicad predicciones y dad pistas pequeñas con espacio para cada estilo.',
    imageAlt:
      'Ladrillos de colores y personajes de OutBrick sobre una cuadrícula de puzle azul marino',
    tags: [
      'juego social',
      'juegos de puzles',
      'juego en familia',
      'diseño de juegos',
      'hábitos de juego',
    ],
    intro:
      'Dos personas pueden mirar un puzle y jugar experiencias distintas. Una disfruta buscando; otra vio la solución y quiere demostrarla. Una mano toma el teléfono, mueve un ladrillo y quien lo sostenía pierde la oportunidad de descubrir por qué. Compartir funciona mejor si conserva esa oportunidad. Proponemos un acuerdo: quién mueve, explica, ofrece pistas y cambia de rol. Es una práctica social informal para puzles adecuados, incluidos los tableros de OutBrick en el navegador. No describe cooperación integrada, cuenta compartida ni multijugador simultáneo.',
    keyTakeaways: [
      'Acuerda quién controla la pantalla y qué ayuda acepta antes de ofrecer soluciones.',
      'Explica el resultado previsto y deja decidir a quien juega si lo ejecuta.',
      'Cambia roles de común acuerdo y trata completar como descubrimiento compartido, no prueba de que alguien cargó con el otro.',
    ],
    sections: {
      'agree-on-the-session': {
        title: 'Acordad qué estáis haciendo juntos',
        paragraphs: [
          'Empieza por algo más útil que «¿Lo resuelves?»: «¿Quieres compañía, pista o resolver por tu cuenta?». Son invitaciones distintas. Alguien acepta que mires sin consejos; otro quiere una apertura concreta. Ninguna respuesta debe probar independencia o capacidad.',
          'Elegid la meta: completar un tablero, explicar una regla o comparar rutas. Acordad si importa el objetivo de movimientos. Una conversación se vuelve incómoda si alguien trata en silencio cada movimiento extra como error a corregir. Definid el propósito antes de optimizar.',
          'Scott et al. (2004) observaron colaboración en mesas tradicionales y describieron zonas personales, grupales y de almacenamiento. No experimentaron con teléfonos de puzles, pero sirve de analogía: una tarea compartida conserva espacios personales. Sentarte al lado no da permiso para actuar en su pantalla.',
          'Para empezar sin gran compromiso, usad la [guía del navegador](/play) y acordad un tablero pequeño. Si preferís comparar a cooperar, nuestra [guía de competición amistosa](/blog/friendly-competition-with-friends) trata otro acuerdo. No hace falta mezclar: encontrar ruta juntos y comparar intentos independientes invitan a conductas distintas.',
        ],
      },
      'driver-and-explainer': {
        title: 'Separa mover de explicar',
        paragraphs: [
          'Un acuerdo sencillo es quien maneja y quien explica. El primero opera y decide si mover; el segundo propone y razona. Son roles temporales, no etiquetas de habilidad. Cambiad tras tablero, reinicio o punto acordado, sin coger el dispositivo a mitad de intento.',
          'Haz observable la explicación. «Mueve azul» no dice cuál ni por qué. «Creo que el azul de la izquierda parará contra amarillo y dejará girar al rojo» identifica pieza, dirección y consecuencia. Se puede examinar, discutir o probar. Una explicación útil da algo que juzgar, no solo una instrucción que obedecer.',
          'Maquil et al. (2024) analizaron cinco grupos de tres resolviendo una tarea en mesa interactiva y cómo coordinaban información y acción. Son relatos detallados, no prueba de que estos roles mejoren puntuación. Compartir información y gestionar quién actúa forman parte de colaborar aunque todos vean la superficie.',
          'Si ambos queréis mover a la vez, parad y elegid qué sugerencia probar, dejando terminar el intento. Puedes decir «Quiero probar mi ruta antes de oír la tuya». Protege al más callado sin afirmar que tenga razón. Probar una predicción errónea puede satisfacer más que obedecer sin explicación la correcta.',
        ],
      },
      'make-the-board-common-ground': {
        title: 'Comprueba que habláis del mismo tablero',
        paragraphs: [
          'Describe combinando ubicación, color y forma o símbolo. «El rojo bajo la puerta amarilla» se entiende mejor que «ese». Si cambia, nombra la posición nueva antes de continuar. Referencias desactualizadas pueden romper la conversación aunque ambos entiendan la regla.',
          'Dillenbourg y Traum (2006) estudiaron resolución colaborativa multimodal con pizarra persistente y comunicación. Distinguen apoyo de representaciones compartidas y comprensión mutua. Era una tarea remota, no OutBrick. Aplicamos un hábito: ver la misma disposición da referencia común, pero todavía hay que comprobar lo que significa el otro.',
          'Confirmar brevemente evita discutir mucho: «¿El azul superior?» o «¿Rojo para aquí o una fila arriba?». Responde esa duda, no repitas toda la solución más alto. Si distinguir color cuesta, usa símbolo y posición en vez de atribuirlo a distracción.',
          'La [página diaria de OutBrick](/daily) muestra la misma selección por fecha UTC, lo que ayuda a comparar, pero no es sesión compartida en directo. En pantallas distintas, confirmad fecha y número. No tomes como estado inicial la posición de un amigo que ya movió varias veces.',
        ],
      },
      'help-without-the-whole-answer': {
        title: 'Ofrece la menor pista útil',
        paragraphs: [
          'Las pistas funcionan mejor si se elige su tamaño. Aclara regla si hace falta: «Sigue hasta un obstáculo». Luego región o dependencia: «Quizá la puerta roja necesite despejar el pasillo». Si quiere más, un movimiento. Reserva ruta completa para petición expresa. Es etiqueta propuesta, no una función de pistas del juego.',
          'Preguntar «¿Qué lo detendría a esa altura?» conserva descubrimiento, pero insistir hasta repetir tu respuesta vuelve la pregunta una orden disfrazada. Da tiempo y acepta «Prefiero probar esto primero» como respuesta completa.',
          'Hansen y Spada (2010) hicieron dos experimentos de ordenar imágenes para estudiar apoyo a colaboración remota. Separaron mejoras del proceso y resultados de resolución. Una conversación clara puede valer sin garantizar mejor puntuación. Buscamos ayuda comprensible y bienvenida, no rapidez ni mejora cognitiva prometidas.',
          'Con un niño, abuelo o principiante, no supongas la ayuda por edad: pregunta y observa. Nuestra [guía para jugar con nietos](/blog/playing-games-with-grandchildren) amplía esa relación. Aquí la tarea es mantener participación en la próxima decisión, sin convertir al jugador en público de tu solución.',
        ],
      },
      'recover-and-finish-together': {
        title: 'Gestiona errores y termina sin repartir culpas',
        paragraphs: [
          'Si falla una predicción, describe consecuencias antes de culpar: «Azul bloqueó la puerta» sirve más que «Moviste mal». Revisa referencia confusa, regla desconocida o plan inadecuado. Pregunta antes de deshacer: quizá quien maneja quiera explorar una ruta desde el estado nuevo.',
          'En el navegador, Deshacer y Reiniciar permiten volver, con deshacer afectando estrellas. No traslades esa conducta a los costes de la aplicación. Lee [juego justo](/#fair) antes de acordar repeticiones o recursos. Compartir pantalla también comparte decisiones de compras y anuncios con recompensa; no decidas por otro.',
          'Completar permite reconocer contribuciones: ver una parada y probar pacientemente notando obstáculos. «Encontramos por qué funciona» centra el problema compartido. Podéis cambiar, elegir otro o parar. No exige terminar capítulo ni demostrar productividad.',
          `Para probar, elegid un tablero en [la página de juego de OutBrick](/play), nombrad quién maneja y preguntad la ayuda aceptada. Para la aplicación amplia, [busca OutBrick en el App Store](${appStoreUrl('journal-together')}). El acuerdo social es vuestro, no una compra de función. Quizá el éxito más útil sea seguir queriendo jugar juntos al terminar.`,
        ],
      },
    },
    pullQuote:
      'Una explicación útil da algo que juzgar, no solo una instrucción que obedecer.',
    faqs: [
      {
        question: '¿OutBrick tiene un modo cooperativo?',
        answer:
          'Describimos cooperación informal alrededor de una pantalla, no un modo integrado ni multijugador simultáneo. Acordad quién controla y conversad sobre una ruta.',
      },
      {
        question: '¿Cómo ayudo sin destripar el puzle?',
        answer:
          'Pregunta cuánta ayuda quiere y empieza por regla o dependencia. Ofrece movimiento o solución completa solo si quiere ese detalle.',
      },
      {
        question: '¿Cuándo cambiamos quién controla?',
        answer:
          'Acordad un punto claro como completar o reiniciar. Pregunta antes de tomar el dispositivo, también si crees conocer la solución.',
      },
      {
        question: '¿Resolver juntos garantiza mejores resultados?',
        answer:
          'La investigación no demuestra mejora de puntuaciones de OutBrick ni cognición con este enfoque informal. Buscamos conversación más clara y bienvenida en la que ambos participen.',
      },
    ],
  },
};
