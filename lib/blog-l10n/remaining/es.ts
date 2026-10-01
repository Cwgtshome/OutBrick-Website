import type { ExtraGuides } from '../../i18n/blog';

/** Complete Spanish translations of the 26 remaining English base articles. */
export const remainingEs: ExtraGuides = {
  'designing-for-real-life-play': {
    title: 'Diseñar un juego para la vida real de quienes juegan',
    dek: 'Por qué encajar el juego en la vida es una pregunta de diseño mejor que perseguir más horas de juego.',
    imageAlt: 'Una sesión de puzle en un teléfono junto a una taza de té y una ventana luminosa',
    tags: ['diseño de juegos', 'juegos móviles', 'juego saludable', 'investigación'],
    intro: 'Un juego puede ser delicioso y aun así encajar mal en un día. La pregunta de diseño más útil no es «¿Cómo hacemos que los jugadores se queden?», sino «¿Encaja esta experiencia con la manera en que las personas quieren emplear su tiempo?».',
    keyTakeaways: [
      'Los estudios a gran escala advierten contra considerar las horas jugadas una medida completa del bienestar de los jugadores.',
      'El encaje incluye cuándo, por qué y cómo juega una persona, no solo lo que marca el reloj.',
      'Un juego que admite las pausas debería facilitar dejarlo, volver y orientarse de nuevo.',
    ],
    sections: {
      'hours-are-not-the-whole-story': { title: 'Las horas no lo cuentan todo', paragraphs: [
        'Dos estudios recientes del Oxford Internet Institute plantean una distinción útil. Uno siguió el tiempo de juego registrado objetivamente de decenas de miles de jugadores adultos y encontró pocas pruebas de que ese tiempo por sí mismo causara cambios en el bienestar. Otro estudió a 703 adultos que jugaban ocasionalmente a Nintendo durante más de 140 000 horas y encontró que el valor percibido —lo bien que encajaba el tiempo de juego en su vida— aportaba más información que el tiempo bruto.',
        'Nada de esto significa que se pueda ignorar el contexto. Un reloj es simplemente una herramienta poco precisa. La misma cantidad de minutos puede sentirse como descanso bienvenido, conexión social, evasión o una obligación no deseada, según la persona y el día.',
      ] },
      'fit-is-a-design-material': { title: 'El encaje es un material de diseño', paragraphs: [
        'En un puzle móvil, el encaje aparece en decisiones pequeñas. ¿Se explica por sí sola la primera pantalla? ¿Puede una persona terminar un tablero sin una interrupción inesperada? ¿Volver después de una semana resulta acogedor o parece un examen? ¿Se guarda el progreso de forma que reduzca el esfuerzo de recordar?',
        'OutBrick utiliza objetivos de un tablero, progreso que te acompaña entre dispositivos mediante iCloud y widgets de la pantalla de inicio que indican dónde estás. El diseño permite entenderlo de un vistazo deliberadamente. Pretende sobrevivir al paso de un minuto libre a una tarde ajetreada sin obligarte a reconstruir toda la experiencia.',
      ], bullets: ['Una sesión tiene un punto natural para terminar', 'La forma de volver es visible y no presiona', 'El progreso se entiende después de un tiempo fuera', 'El juego no necesita una racha para que hoy cuente'] },
      'research-the-quality-of-play': { title: 'Investigar la calidad del juego', paragraphs: [
        'Un artículo de Nature Scientific Data construyó un conjunto de datos longitudinal intensivo en torno a PowerWash Simulator, combinando medidas repetidas de bienestar con millones de eventos del juego. Su aportación es metodológica: los investigadores pueden aprender más si estudian qué hacen los jugadores y cómo se sienten a lo largo del tiempo, en lugar de basarse únicamente en estimaciones retrospectivas de horas.',
        'Ese enfoque también cambia a qué debería prestar atención un estudio. Una señal saludable no es simplemente tener más sesiones. Podría ser que alguien encontrara una dificultad cómoda, volviera porque una mecánica le resulta significativa o dejara de jugar tras un final satisfactorio. Las métricas deberían ayudar al equipo a percibir esos patrones, no reducirlos a una sola clasificación.',
      ] },
      'a-small-design-promise': { title: 'Una pequeña promesa de diseño', paragraphs: [
        'La promesa de OutBrick es sencilla: ofrecerte un tablero en el que merezca la pena pensar y después devolverte tu tiempo. Nada interrumpe un tablero y ningún vídeo se reproduce salvo que pulses un botón para pedirlo. El primer deshacer de cada tablero es gratis y no puede agotarse. Tampoco hace falta mantener abierta la aplicación para que el juego siga siendo interesante: recuperas una vida cada treinta minutos, estés mirando o no.',
        'Seguimos queriendo que los jugadores vuelvan. La diferencia está en el origen de la invitación: un tablero con una idea clara, nueve amigos de ladrillo que reaccionan cuando lo despejas y la tranquila satisfacción de ver un camino que treinta segundos antes no era visible.',
      ] },
    },
    pullQuote: 'Ofrecerte un tablero en el que merezca la pena pensar y después devolverte tu tiempo.',
    faqs: [
      { question: '¿OutBrick registra mi tiempo de juego?', answer: 'El progreso se guarda en tu dispositivo y en tu propio iCloud, y la aplicación no incluye ningún SDK de analítica. El proveedor de vídeos con recompensa recopila lo que describe la [política de privacidad](/privacy). Este artículo trata sobre métodos de investigación, no es una promesa acerca de todos los juegos.' },
      { question: '¿Qué significa que el juego encaje en la vida?', answer: 'Es la propia percepción de una persona de que su tiempo de juego encaja con el resto de su vida. Es distinto de un simple total de horas.' },
    ],
  },
  'angry-birds-success-lessons': {
    title: 'Angry Birds: el largo camino hasta un éxito',
    dek: 'La historia de Rovio recuerda que los juegos icónicos suelen ser la parte visible de una práctica mucho más larga.',
    imageAlt: 'Bloques lanzadores rojos abstractos apuntando a una divertida pila de ladrillos verdes de juguete',
    tags: ['Angry Birds', 'juegos móviles', 'éxito de juegos', 'iteración'],
    intro: 'Las historias de éxito se cuentan como si fueran un relámpago. La historia corporativa de Rovio cuenta algo más útil: decenas de intentos, una oportunidad móvil clara y un equipo que siguió creando juegos el tiempo suficiente para estar preparado cuando llegó la idea adecuada.',
    keyTakeaways: ['Rovio describe Angry Birds como su juego número 52, después de 51 proyectos anteriores y de estar cerca de la quiebra.', 'La lección es aprender de cada experimento pequeño, no seguir publicando hasta que aparezca la suerte.', 'Un éxito puede convertirse en un mundo, pero el primer trabajo sigue siendo lograr que funcione la interacción central.'],
    sections: {
      'the-52nd-game': { title: 'Importa que fuera el juego número 52', paragraphs: [
        'La historia de Rovio dice que el primer Angry Birds fue su juego número 52. La empresa ya había desarrollado decenas de títulos para las primeras plataformas móviles y describe al equipo al borde de la quiebra y necesitado de un gran éxito. Angry Birds se creó en ocho meses y las descargas aumentaron rápidamente en pocas semanas.',
        'Es una historia de éxito, pero no una receta. La fuente es la historia de la propia empresa, de modo que su lenguaje es promocional y debe leerse junto con otras pruebas. La lección práctica es más limitada: el avance visible se apoyó en una gran cantidad de iteración previa que rara vez llega a los titulares.',
      ] },
      'make-the-core-readable': { title: 'Haz comprensible la interacción central', paragraphs: [
        'Angry Birds hizo que lanzar, apuntar y colisionar se entendieran con rapidez. La interacción era juguetona, pero ofrecía un modelo mental claro: tirar, soltar y observar cómo responde la estructura. Esa claridad es una razón por la que una mecánica sencilla pudo sostener muchos niveles y muchos tipos de jugadores.',
        'OutBrick parte del mismo respeto por los primeros segundos. Desliza un ladrillo y avanza hasta que algo lo detiene; saca cada ladrillo por la puerta de su color y el tablero queda despejado. La regla se aprende en unos cinco segundos. Después, el trabajo del juego es darte suficientes señales para que puedas usarla con ingenio.',
      ] },
      'a-franchise-is-a-conversation': { title: 'Una franquicia es una conversación', paragraphs: [
        'El informe anual de Rovio de 2019 describe una estrategia que iba más allá de jugar e incluía ver, consumir y participar. También señala que las operaciones continuadas y las actualizaciones ayudaron a algunos títulos a seguir generando ingresos durante varios años. Son datos empresariales de una parte interesada, no pruebas de que una táctica garantice una comunidad duradera.',
        'La idea de diseño sigue siendo valiosa: un mundo de juego se fortalece cuando los puntos de contacto que lo rodean parecen pertenecer al mismo mundo. Los [nueve amigos de ladrillo](/mascots) de OutBrick, sus widgets, su bonificación diaria de monedas y sus 167 pueblos construidos con ladrillos conducen al mismo tablero. Ninguno es un producto separado que compita por la atención.',
      ] },
      'what-we-keep-for-outbrick': { title: 'Lo que conservamos para OutBrick', paragraphs: [
        'Conservamos la parte de la historia de Angry Birds que es fácil de aplicar y difícil de fingir: seguir practicando el oficio, mantener clara la primera interacción y dejar que la personalidad del juego acompañe al jugador. Dejamos atrás la idea de que el éxito solo consiste en una clasificación de descargas.',
        'OutBrick sigue siendo un juego pequeño. Su ambición es un tablero que se sienta bien en la mano, una persona que pueda volver sin deberes y un trabajo que mejore ladrillo a ladrillo. Para otro camino hacia la misma idea, lee [cómo Tetris mantiene abierto un conjunto mínimo de reglas](/blog/tetris-simple-rules-infinite-variation).',
      ] },
    },
    pullQuote: 'El avance visible se apoyó en una gran cantidad de iteración previa que rara vez llega a los titulares.', faqs: [],
  },
  'monument-valley-less-game-more-experience': {
    title: 'Monument Valley: hacer que menos se sienta completo',
    dek: 'Una mirada a la idea de ustwo de «menos juego, más experiencia» y a lo que OutBrick toma de ella.',
    imageAlt: 'Una escalera imposible en tonos pastel construida con originales ladrillos de juguete brillantes',
    tags: ['Monument Valley', 'juegos móviles', 'experiencia de usuario', 'diseño de puzles'],
    intro: 'Algunos juegos ganan atención añadiendo más. Monument Valley se convirtió en un referente al hacer que cada pantalla pareciera un pequeño lugar terminado. Su historia de diseño trata menos del minimalismo como estética que de elegir qué merece la atención del jugador.',
    keyTakeaways: ['ustwo describe Monument Valley como un recorrido móvil completo, sin tareas repetitivas, presión por fallar ni dependencia de las clasificaciones.', 'GDC presenta su diseño como una combinación de arquitectura imposible y una mentalidad de experiencia de usuario.', 'OutBrick toma el principio de un momento completo: cada tablero debería tener su propia forma, ambiente y final.'],
    sections: {
      'a-screen-can-be-a-place': { title: 'Una pantalla puede ser un lugar', paragraphs: [
        'La página del proyecto de ustwo describe Monument Valley como una experiencia breve y completa: mecánicas novedosas sin repetición tediosa, presión por fallar, estrellas coleccionables ni clasificaciones. La ambición declarada del estudio era que los jugadores terminaran todo el juego en el móvil, de principio a fin.',
        'Ese relato de primera mano explica la intención, no mide la causalidad. No demuestra que una decisión concreta causara el éxito del juego. Pero nos ofrece una postura de diseño clara: un juego móvil puede diseñarse como una secuencia de momentos creados con intención en lugar de una demanda interminable de más tiempo.',
      ] },
      'less-game-more-experience': { title: 'Menos juego, más experiencia', paragraphs: [
        'La descripción de la sesión de GDC del diseñador principal Ken Wong conecta la arquitectura imposible de M. C. Escher con los orígenes de ustwo como estudio de experiencia de usuario. Cada pantalla se trató como una obra de arte y el equipo replanteó el juego como una experiencia de usuario, en lugar de una mera prueba de dificultad.',
        'Ese cambio resulta útil para quienes crean puzles. La dificultad es solo una dimensión del valor. Un tablero también puede ser memorable por una silueta marcada, una pequeña sorpresa o un momento en que el jugador ve la regla desde otro ángulo. La interfaz índigo intenso y los pueblos de ladrillo de OutBrick buscan dar un marco a esos momentos, y no hay ningún reloj en el juego que los apresure.',
      ] },
      'complete-does-not-mean-easy': { title: 'Completo no significa fácil', paragraphs: [
        'Una experiencia completa puede seguir exigiendo concentración. La diferencia importante es si la persona entiende el propósito del desafío y si el juego la respeta una vez que termina.',
        'OutBrick permite que un tablero sea complicado sin que toda la aplicación parezca hostil. El primer deshacer gratis en cada tablero, y otro gratis cuando un tablero queda bloqueado, mantienen el recorrido emocional ligado a resolver en vez de pagar por un error. El tablero puede ser difícil. La relación no tiene por qué serlo.',
      ] },
      'the-outbrick-translation': { title: 'Cómo lo interpreta OutBrick', paragraphs: [
        'Para OutBrick, «menos juego» significa menos fricción entre el jugador y la idea del tablero. Una pantalla puede bastar. Un movimiento puede bastar para enseñar una regla. Un tablero despejado puede bastar para terminar una sesión con una buena sensación.',
        'No intentamos hacer una copia más pequeña del éxito ajeno. Queremos un mundo donde un puzle pequeño se sienta completo en sus propios términos, que es también por lo que [un tablero de dos minutos puede sentirse como una verdadera pausa reparadora](/blog/why-two-minute-puzzles-feel-good).',
      ] },
    },
    pullQuote: 'El tablero puede ser difícil. La relación no tiene por qué serlo.', faqs: [],
  },
  'minecraft-layered-discovery': {
    title: 'Minecraft: dejar que descubrir construya la siguiente capa',
    dek: 'Cómo un comienzo abierto creció con creación, supervivencia, fabricación, multijugador y expansión a otras plataformas.',
    imageAlt: 'Un paisaje original construido con bloques, con una cueva, una mesa de trabajo y un amanecer',
    tags: ['Minecraft', 'descubrimiento', 'diseño de sistemas', 'éxito de juegos'],
    intro: 'Los comienzos de Minecraft cuentan una historia de capas que llegaron en el momento adecuado. La primera versión ofreció un campo abierto para excavar y construir; las adiciones posteriores dieron a esa libertad más textura, consecuencias y formas de compartir el resultado.',
    keyTakeaways: ['La retrospectiva de Xbox Wire describe una secuencia desde la construcción de Classic hasta Creative, Survival, fabricación, multijugador y llegada a más plataformas.', 'Un sistema exitoso puede crecer profundizando las acciones que ya tiene el jugador en lugar de sustituirlas en cada actualización.', 'OutBrick aplica el mismo principio a menor escala: primero un movimiento claro y después tableros y capítulos más expresivos.'],
    sections: {
      'start-with-a-verb': { title: 'Empieza con una acción que el jugador pueda sentir', paragraphs: [
        'La retrospectiva de los quince años de Xbox Wire dice que Markus Persson comenzó Minecraft en 2009, inspirándose en Infiniminer y Dungeon Keeper. La primera versión Classic permitía excavar y construir libremente. Después llegaron los modos Creative y Survival, y durante 2010 se añadieron la fabricación, las vagonetas y el multijugador de Survival.',
        'La lista concreta de hitos procede del propio canal editorial de Microsoft, así que aporta una procedencia útil, no una auditoría independiente. El patrón de diseño sigue siendo claro: el juego comenzó con una acción que se entendía inmediatamente y después construyó nuevas razones para usarla.',
      ] },
      'layers-that-reward-curiosity': { title: 'Capas que recompensan la curiosidad', paragraphs: [
        'Una capa funciona cuando hace que el jugador vuelva a mirar de otra manera la acción original. La fabricación cambia lo que significa recolectar. La supervivencia cambia lo que significa un lugar seguro. El multijugador cambia lo que significa una construcción cuando otra persona puede verla.',
        'Eso es distinto de añadir ruido. Los capítulos, las estrellas, los widgets, los amigos de ladrillo y [el Viaje de 167 pueblos](/#journey) de OutBrick giran alrededor de la misma acción central: deslizar un ladrillo por la puerta que le corresponde. Cada capa debería dar al movimiento un contexto nuevo sin pedirte aprender un segundo juego.',
      ], bullets: ['Añade profundidad a una acción existente', 'Deja que los jugadores elijan cuánto sistema quieren', 'Haz visible el progreso sin convertir el descubrimiento en deberes', 'Permite que surjan historias personales al jugar repetidamente'] },
      'the-value-of-a-personal-trace': { title: 'El valor de una huella personal', paragraphs: [
        'El proyecto FabO del MIT exploró cómo llevar objetos de los juegos al mundo físico. En un estudio exploratorio de 47 objetos fabricados a partir de 33 juegos, los investigadores encontraron que quienes aprendían atribuían a sus creaciones significados como orgullo, expresión creativa personal, recursos, juego ampliado y experiencia compartida.',
        'Pocos juegos necesitan una impresora 3D. La conclusión más amplia es que jugar significa más cuando deja algo que sientes tuyo. En OutBrick, un capítulo despejado, una mascota favorita o la tercera estrella de un tablero al que volviste pueden servir como una pequeña huella personal: el recuerdo de un momento, no la exigencia de otro.',
      ] },
      'grow-the-world-with-care': { title: 'Haz crecer el mundo con cuidado', paragraphs: [
        'El éxito de Minecraft suele describirse como infinito, pero su historia inicial es más práctica: ofrecer a los jugadores una acción sólida, dejar que construyan significado con ella y añadir sistemas que recompensen el significado que ya están creando.',
        'Esa es la escala de la lección que puede aprovechar OutBrick. Una función nueva debería hacer que el tablero se sienta más propio de OutBrick, no como una segunda aplicación instalada dentro.',
      ] },
    },
    pullQuote: 'Una capa funciona cuando hace que el jugador vuelva a mirar de otra manera la acción original.', faqs: [],
  },
  'tetris-simple-rules-infinite-variation': {
    title: 'Tetris demuestra cuánto pueden dar unas reglas sencillas',
    dek: 'Una mirada a las restricciones, el ritmo y la variedad interminable de un conjunto de reglas muy pequeño.',
    imageAlt: 'Bloques geométricos de juguete de colores que descienden hacia una cuadrícula despejada',
    tags: ['Tetris', 'diseño de puzles', 'oficio de crear juegos', 'reglas'],
    intro: 'Un gran conjunto de reglas no necesita ser extenso. Necesita generar suficientes consecuencias para que la misma acción pueda sentirse distinta en el siguiente turno. Cuarenta años después, Tetris sigue siendo el ejemplo más claro de cómo una restricción se convierte en expresión.',
    keyTakeaways: ['La historia de The Tetris Company sigue el juego desde un experimento de 1984 en un Electronika 60 hasta un fenómeno mundial presente en muchas plataformas.', 'Las reglas sencillas se vuelven profundas cuando el tiempo, el espacio y el compromiso cambian continuamente el significado del siguiente movimiento.', 'OutBrick trata cada tablero como un pequeño conjunto de reglas con espacio para planificar, recuperarse y encontrar un camino propio hacia la solución.'],
    sections: {
      'a-small-origin': { title: 'Un origen pequeño', paragraphs: [
        'La historia oficial de Tetris identifica la primera versión de Alexey Pajitnov como un experimento de 1984 en un Electronika 60 de Moscú. Después sigue el descubrimiento del juego por Henk Rogers, las negociaciones de los derechos para dispositivos portátiles y la decisión de Nintendo de incluir Tetris con la Game Boy.',
        'La historia del titular de los derechos combina registros históricos con el relato de marca, por lo que las cifras exactas de ventas deben tratarse como datos declarados por la empresa. La secuencia general basta para una lección de diseño: una idea compacta puede viajar cuando sus reglas sobreviven al traslado a un nuevo contexto.',
      ] },
      'constraint-creates-meaning': { title: 'Las restricciones crean significado', paragraphs: [
        'Una forma que cae solo se vuelve urgente porque el espacio del tablero es limitado. La misma pieza puede ser un regalo, un problema o una preparación según lo que ya haya. Las reglas sencillas crean variedad cuando las decisiones anteriores cambian el significado de la siguiente.',
        'Los ladrillos deslizantes de OutBrick funcionan igual. «Lleva el ladrillo a su puerta» es fácil de decir. Lo interesante es que cada movimiento cambia qué carriles están abiertos, qué ladrillos se bloquean entre sí y qué solución sigue siendo posible. La regla permanece pequeña mientras la situación sigue cambiando.',
      ] },
      'rhythm-over-noise': { title: 'Ritmo antes que ruido', paragraphs: [
        'Los juegos de puzles más memorables suelen tener un ritmo que los jugadores pueden interiorizar: ver, predecir, decidir y resolver. Los sistemas adicionales pueden ser maravillosos, pero deberían apoyar ese ritmo en vez de interrumpirlo.',
        'Por eso OutBrick usa la respuesta háptica, la tarjeta de victoria y los movimientos de celebración de sus amigos como signos de puntuación. El tablero pone el razonamiento. El resto del mundo ayuda a sentir el ritmo de despejarlo.',
      ], bullets: ['Una regla que puedas explicar de una vez', 'Un estado que cambie después de cada decisión', 'Una respuesta que confirme en lugar de adornar', 'Una variedad que nazca del contexto, no de la confusión'] },
      'the-next-piece': { title: 'La siguiente pieza', paragraphs: [
        'Tetris sigue vivo porque la siguiente pieza siempre plantea una pregunta nueva. La versión de OutBrick es más tranquila: entre 2000 tableros verificados por un solucionador, el siguiente es otra pequeña pregunta con una forma diferente, un cuello de botella distinto y otra oportunidad de descubrir más que la última vez. Las llaves, las cerraduras, los ladrillos congelados, las cintas transportadoras y las cajas llegan poco a poco, cada cual como un nuevo ángulo de la misma regla.',
        'Sencillo no significa superficial. Significa que el jugador puede ver de dónde viene la profundidad.',
      ] },
    },
    pullQuote: 'Sencillo no significa superficial. Significa que el jugador puede ver de dónde viene la profundidad.', faqs: [],
  },
  'daily-rituals-that-dont-demand-you': {
    title: 'Rituales diarios que no te exigen nada',
    dek: 'Jugar a diario puede ser un ritmo agradable si invita a prestar atención sin convertir la ausencia en fracaso.',
    imageAlt: 'Una casilla luminosa de puzle diario sobre un pequeño calendario de juguete',
    tags: ['juegos diarios', 'rituales', 'Wordle', 'juegos móviles'],
    intro: 'El atractivo de un juego diario no es solo el puzle. También es la forma de la invitación. Un buen ritual diario da a hoy una pequeña identidad sin hacer que la ausencia de ayer parezca una deuda.',
    keyTakeaways: ['La encuesta de Pew de 2024 muestra que los juegos son tanto un entretenimiento frecuente como un espacio social para muchos adolescentes.', 'El límite diario y la lista de palabras seleccionadas de Wordle demuestran el poder de establecer límites deliberados.', 'El ladrillo diario de OutBrick está diseñado como un saludo, no como una racha que pueda reprenderte.'],
    sections: {
      'the-social-shape-of-play': { title: 'La dimensión social del juego', paragraphs: [
        'Pew Research Center encontró que el 85 % de los adolescentes estadounidenses encuestados en 2023 jugaban a videojuegos y el 41 % lo hacía a diario. Entre los adolescentes que jugaban, el 72 % dijo que pasar tiempo con otros era un motivo para jugar y el 47 % afirmó haber hecho un amigo en línea gracias a un juego.',
        'Esas cifras describen una muestra de adolescentes estadounidenses, no a todos los jugadores ni todos los tipos de juego. Sí muestran que un juego «en solitario» puede formar parte de un ritmo social. Las personas comparan, recomiendan, recuerdan y comparten incluso cuando sostienen un teléfono a solas.',
      ] },
      'why-a-limit-can-help': { title: 'Por qué puede ayudar un límite', paragraphs: [
        'Los reportajes sobre el desarrollo de Wordle describen varias reducciones deliberadas: una lista más corta de palabras conocidas, una estructura de una vez al día inspirada en los pasatiempos de los periódicos y un formato de resultados para compartir que los jugadores ayudaron a popularizar. Los límites dieron al juego una dimensión social e hicieron de cada puzle un acontecimiento del que se podía hablar sin que una acumulación de tareas pendientes lo estropeara.',
        'Un límite diario puede hacer que el juego parezca más un ritual y menos una pestaña abierta. Pero debería ser un marco, no una valla. Si una persona se pierde un día, la experiencia debería seguir alegrándose de verla.',
      ] },
      'the-outbrick-daily-brick': { title: 'El ladrillo diario de OutBrick', paragraphs: [
        'El ladrillo diario es nuestra invitación recurrente más pequeña: el primer tablero que despejas cada día da cien monedas además de su recompensa habitual. Aporta un poco de luz matinal a la pantalla de inicio, pero no se convierte en la única razón para abrir la aplicación. [El Viaje](/#journey) avanza al ritmo que tú marcas, sigue generando tableros después del número dos mil y perderte un día no borra el valor de los días que lo rodean.',
        'Esa elección está relacionada con el encaje. La investigación sobre juegos y bienestar sugiere que el contexto y el valor percibido importan más que convertir el tiempo de juego en una puntuación única. Una función diaria debería ayudar a señalar un momento, no medir el valor de una persona.',
      ] },
      'ritual-without-obligation': { title: 'Ritual sin obligación', paragraphs: [
        'La diferencia entre un ritual y una obligación es si la persona conserva la capacidad de decidir. Puedes elegir el momento, la duración y el significado. El diseño puede ofrecer una pequeña señal luminosa sin obligarte a negociar con ella.',
        'OutBrick quiere ser el tipo de juego que dice: «Hay un tablero aquí si te apetece». Eso basta como razón para volver. Para ver la otra cara de la misma pregunta, consulta [cómo los juegos se convierten en hábitos](/blog/how-games-become-habits).',
      ] },
    }, pullQuote: 'Un buen ritual diario da a hoy una pequeña identidad sin hacer que la ausencia de ayer parezca una deuda.', faqs: [],
  },
  'color-shape-accessibility': {
    title: 'Por qué el color no debe ser la única pista de un puzle',
    dek: 'Combinar color, forma, texto y otras señales permite que más jugadores puedan interpretar con claridad un tablero.',
    imageAlt: 'Ladrillos de puzle brillantes con formas grabadas distintas además de sus colores',
    tags: ['accesibilidad', 'visión del color', 'diseño inclusivo', 'juegos de puzles'],
    intro: 'El color es expresivo. También es poco fiable como única fuente de información. Los puzles más acogedores usan el color para embellecer un patrón y después refuerzan su significado con formas, texto, separación o movimiento.',
    keyTakeaways: ['La orientación de WCAG sobre el uso del color indica que este no debe ser el único medio visual para comunicar información.', 'Las recomendaciones de accesibilidad de juegos de Microsoft aconsejan símbolos y patrones junto al color, además de opciones ajustables.', 'Los símbolos para daltonismo de OutBrick están activados por defecto, y el tono, la forma y las espigas transmiten la identidad de un ladrillo.'],
    sections: {
      'color-is-a-great-accent': { title: 'El color es un gran acento, no una barrera', paragraphs: [
        'La orientación del W3C para el criterio de conformidad 1.4.1 es directa: el color no debería ser el único medio visual para distinguir información. La razón es práctica. No todas las personas ven los colores de la misma manera, y la información puede desaparecer cuando se codifica únicamente mediante el tono.',
        'Un producto no tiene que volverse gris para cumplirlo. El color puede seguir haciendo lo que mejor hace —jerarquía, ambiente y énfasis— mientras otra señal transmite la regla que el jugador no debe pasar por alto.',
      ] },
      'symbols-make-the-board-clearer': { title: 'Los símbolos aclaran el tablero para todos', paragraphs: [
        'La descripción general de accesibilidad de juegos de Microsoft recomienda comunicar información de más de una manera, como una imagen además de texto o un símbolo además de color. También pide considerar si el juego sigue siendo jugable sin sonido, en una pantalla en blanco y negro y después de una pausa larga.',
        'Son buenas preguntas para cualquier puzle, no solo una lista de accesibilidad. Una persona que puede confirmar una coincidencia mediante la forma no está haciendo un trabajo extra: dispone de una segunda vía hacia la misma comprensión.',
      ] },
      'how-outbrick-does-it': { title: 'Cómo lo hace OutBrick', paragraphs: [
        'OutBrick comunica la identidad de cada ladrillo por tres canales a la vez: tono, forma y espigas. El modo para daltonismo está activado por defecto y coloca un símbolo distinto en cada ladrillo y cada puerta, así que el color nunca es la única clave para ordenar. El sistema visual sigue siendo juguetón porque las señales forman parte del lenguaje del juguete: pequeñas marcas que puedes leer con los ojos y la memoria.',
        'La misma idea se extiende más allá del tablero. Cada ladrillo es también un elemento de VoiceOver que indica su color, forma y posición, el texto más grande se adapta en toda la aplicación y se respeta Reducir movimiento en todas partes. Aún necesitamos pruebas con jugadores que tengan distintas necesidades de acceso; la documentación no sustituye sus comentarios. La [página de accesibilidad](/accessibility) enumera lo que está disponible hoy.',
      ] },
      'accessibility-is-quality': { title: 'La accesibilidad es una señal de calidad', paragraphs: [
        'El diseño inclusivo suele mejorar la experiencia básica porque obliga al equipo a preguntarse si el juego comunica o solo decora. Esa exigencia lleva a un contraste más sólido, respuestas más claras, mejores opciones y menos momentos en que el jugador tiene que adivinar qué significa la pantalla.',
        'En un puzle, la claridad no es una concesión. Es el material del que está hecho el desafío. Si una persona no puede leer la regla con fiabilidad, está resolviendo la interfaz en vez del tablero.',
      ] },
    }, pullQuote: 'Si una persona no puede leer la regla con fiabilidad, está resolviendo la interfaz en vez del tablero.', faqs: [],
  },
  'when-to-play-and-when-to-pause': {
    title: 'Cuándo jugar y cuándo dejar el teléfono',
    dek: 'Una guía franca para encajar los juegos con el sueño, la atención y el resto de un día real.',
    imageAlt: 'Un pequeño tablero de puzle junto a un reloj de mesilla luminoso y un libro que se cierra',
    tags: ['juego saludable', 'sueño', 'hábitos de juego', 'bienestar'],
    intro: 'Un buen juego debería ser honesto acerca de los límites de jugar. El disfrute importa, y también el sueño, el trabajo, las relaciones y la capacidad de parar cuando quieres hacerlo.',
    keyTakeaways: ['Los estudios controlados relacionan los juegos estimulantes antes de acostarse con tardar más en dormirse en muestras y contextos específicos.', 'La evidencia de los metaanálisis se centra en el juego problemático y el sueño, no en el juego recreativo habitual.', 'La Organización Mundial de la Salud define el trastorno por videojuegos por la pérdida de control y un deterioro significativo, no por un simple número de horas.'],
    sections: {
      'sleep-is-a-real-design-constraint': { title: 'El sueño es una restricción real del diseño', paragraphs: [
        'En un estudio controlado con adolescentes, jugar a un videojuego durante cincuenta minutos antes de acostarse retrasó el inicio del sueño frente a ver un DVD. Otro experimento de sesiones prolongadas utilizó juegos diferentes y encontró cambios en la eficiencia del sueño y en el recuerdo de palabras a la mañana siguiente. Los resultados son específicos de las condiciones estudiadas, pero apoyan un límite sensato: el juego intenso o estimulante justo antes de dormir puede no encajar bien con todas las personas.',
        'La respuesta honesta del diseño es facilitar dejar de jugar, dejar de fingir que un bucle nocturno no tiene coste y dar información suficiente para que cada persona elija. Calificar todos los juegos de perjudiciales no ayuda a nadie.',
      ] },
      'problematic-is-not-the-same-as-ordinary': { title: 'Problemático no significa habitual', paragraphs: [
        'Una revisión sistemática y metaanálisis encontró una asociación entre el juego problemático y una menor duración del sueño, con variaciones considerables entre estudios. Esa variabilidad importa porque la evidencia se refiere a un patrón de juego vinculado con deterioro funcional, no a todas las personas que juegan por diversión.',
        'La Organización Mundial de la Salud describe el trastorno por videojuegos mediante la pérdida de control, la creciente prioridad del juego y su continuación pese a consecuencias negativas, con suficiente gravedad para causar un deterioro significativo y normalmente evidente durante al menos doce meses. Es una definición clínica, no un sinónimo de «una vez jugué más de lo previsto».',
      ] },
      'our-pause-friendly-defaults': { title: 'Nuestras opciones que facilitan las pausas', paragraphs: [
        'OutBrick no tiene ninguna racha que defender ni nada que caduque silenciosamente mientras estás fuera. Despejar un tablero y parar ahí es lo menos costoso que puedes hacer en el juego: no cuesta nada, y la tarjeta de victoria es un final natural de la sesión en vez de un paso automático hacia la siguiente. Puedes perderte el ladrillo diario sin que mañana se convierta en un castigo, y cada tablero empieza con un deshacer gratis para que un movimiento equivocado sea algo de lo que aprender en lugar de algo por lo que pagar.',
        'Hay un coste que merece decirse claramente en lugar de esconderlo: un intento que termina sin despejar el tablero, incluido abandonar uno en el que ya has movido, consume una vida. Tienes cinco, ocho con el Brick Pass, y recuperas una automáticamente cada treinta minutos. Es la regla del género y la conservamos porque, sin ella, un límite de movimientos no significa nada. Nada más consume una: ni jugar, ni despejar, ni deshacer, ni abrir un nivel para verlo y cambiar de opinión. La lista completa está en la página de inicio, en [lo que cuesta](/#fair). El objetivo es que «un tablero más» sea una elección, no una trampa escondida en la interfaz.',
      ], bullets: ['Para después de despejar sin perder tu lugar', 'Un deshacer gratis en cada tablero, siempre', 'Las vidas se recuperan solas, una cada media hora', 'Deja que los ajustes apoyen el contexto del jugador'] },
      'a-useful-question': { title: 'Una pregunta útil para ti', paragraphs: [
        'En lugar de preguntarte si cierta cantidad de minutos es universalmente buena o mala, pregúntate: «¿Encaja esta sesión con el resto de mi vida hoy?». Si la respuesta es no —porque estás cansado, pierdes sueño o sientes que no puedes parar—, lo amable es hacer una pausa y cambiar las condiciones que rodean al juego.',
        'OutBrick es un juego, no un profesional clínico. Si jugar te causa un malestar importante o interfiere con tu vida diaria, habla con un profesional cualificado. Un juego considerado debería dejar espacio para esa frase.',
      ] },
    }, pullQuote: 'El objetivo es que «un tablero más» sea una elección, no una trampa escondida en la interfaz.',
    faqs: [
      { question: '¿OutBrick recomienda un límite diario concreto de juego?', answer: 'No. Las personas y los contextos varían. Recomendamos prestar atención al sueño, las obligaciones y si sientes que controlas tu juego.' },
      { question: '¿El trastorno por videojuegos es lo mismo que jugar a diario?', answer: 'No. La definición de la OMS se centra en la pérdida de control, la prioridad sobre otras actividades, la continuación pese a consecuencias negativas y el deterioro significativo a lo largo del tiempo.' },
    ],
  },
  'kinder-difficulty-curve': {
    title: 'Cómo crear una curva de dificultad más amable',
    dek: 'El desafío debería ampliar tu atención sin hacer frágil tu relación con el juego.',
    imageAlt: 'Un camino ascendente de pequeños tableros de puzle con escalones fáciles y difíciles',
    tags: ['diseño de dificultad', 'flujo', 'oficio de crear juegos', 'accesibilidad'],
    intro: 'La dificultad no es una escalera que solo sube. Es una conversación entre la habilidad actual del jugador, la siguiente pregunta del juego y la respuesta que explica qué ha pasado.',
    keyTakeaways: ['La investigación orientada a GameFlow destaca el equilibrio entre desafío y habilidad, objetivos claros, respuesta, control e inmersión.', 'Un pequeño estudio de juegos de rehabilitación basados en movimiento encontró diferencias individuales significativas en el flujo y la percepción de control.', 'OutBrick utiliza tableros verificados por un solucionador, herramientas de recuperación y un límite de movimientos en lugar de reloj para mantener ajustable el desafío.'],
    sections: {
      'challenge-and-skill-need-each-other': { title: 'El desafío y la habilidad se necesitan', paragraphs: [
        'Una revisión de sistemas de rehabilitación mediante juegos utiliza GameFlow como perspectiva de diseño: concentración, desafío, habilidad, control, objetivos claros, respuesta, inmersión e interacción social. Describe la dificultad adaptativa como una forma de evitar que una tarea sea tan fácil que aburra o tan difícil que genere ansiedad.',
        'La idea es útil más allá de la rehabilitación. Una persona no experimenta la «dificultad del nivel 20» en abstracto. Experimenta una relación entre lo que pide el tablero y lo que la interfaz le ha enseñado a percibir.',
      ] },
      'one-curve-does-not-fit-everyone': { title: 'Una sola curva no sirve para todos', paragraphs: [
        'Un estudio transversal de 2025 sobre una tarea de rehabilitación basada en Kinect encontró un flujo general menor entre los participantes de mayor edad que entre los más jóvenes, con la mayor diferencia en la sensación de control. La tarea y la muestra eran específicas, de modo que el estudio no justifica suposiciones basadas en la edad sobre todos los jugadores.',
        'Sí apoya un principio de diseño más amplio: la familiaridad, la capacidad motora, la confianza, la velocidad de procesamiento y las necesidades de acceso pueden cambiar cómo se siente el mismo desafío. Una buena curva deja espacio para esas diferencias en lugar de tratarlas como fallos del jugador.',
      ] },
      'our-tools-for-a-kinder-curve': { title: 'Nuestras herramientas para una curva más amable', paragraphs: [
        'Un solucionador despejó los 2000 tableros de OutBrick antes de que se publicara ninguno, así que el juego puede pedir planificación sin pedir accidentalmente lo imposible. El límite de movimientos de cada tablero se comprueba contra el recorrido que encontró el solucionador, por lo que ninguno se publica con una cuerda más corta que su solución demostrada. Cuando una posición queda bloqueada, el panel de recuperación lo indica y ofrece una salida; deshacer desde ese panel es gratis y queda fuera de la reserva, porque un tablero que se bloquea por sí mismo es responsabilidad del juego, no del jugador. La presión del tablero es un límite de movimientos, nunca un reloj: el temporizador opcional Rush se retiró y no hay ninguna cuenta atrás en el juego.',
        'Nada de esto elimina el desafío. Separa la fricción útil de la accidental para que prestes atención a la idea del puzle en lugar de defenderte de la interfaz.',
      ], bullets: ['Solución verificada antes de publicar un tablero', 'Deshacer que enseña en lugar de reprender', 'Una salida gratuita cuando el estado está verdaderamente atascado', 'Presión por un límite de movimientos, nunca por un reloj'] },
      'difficulty-as-an-invitation': { title: 'La dificultad como invitación', paragraphs: [
        'La curva de dificultad más justa te da una razón para volver a intentarlo lo bastante concreta para saber qué hacer. «Casi tenía libre el carril» invita mejor que «el juego quiere que repita sin parar». La respuesta debería convertir un fallo en información.',
        'Esa es la curva que queremos: tableros cada vez más expresivos, herramientas que mantengan al jugador al mando y un mundo que celebre el intento tanto como el tablero despejado.',
      ] },
    }, pullQuote: '«Casi tenía libre el carril» invita mejor que «el juego quiere que repita sin parar».', faqs: [],
  },
  'cozy-progress-without-grind': {
    title: 'Stardew Valley y el oficio del progreso tranquilo',
    dek: 'Una historia de éxito sobre trabajo paciente, progreso visible y cómo un juego puede ser generoso sin eliminar toda fricción.',
    imageAlt: 'Un pequeño jardín, una casa y un sendero sinuoso que muestran un progreso tranquilo al amanecer',
    tags: ['Stardew Valley', 'juegos acogedores', 'progresión', 'diseño de juegos'],
    intro: 'El juego acogedor es menos una lista de requisitos de género que una relación con el tiempo. Puedes ver lo que haces crecer, elegir el ritmo de la siguiente tarea y sentir que volver es un placer, no una deuda.',
    keyTakeaways: ['Stardew Valley es un caso útil de iteración paciente dirigida por su creador y progreso fácil de interpretar.', 'El diseño tranquilo sigue necesitando textura: elecciones, límites, pequeñas sorpresas y una razón para que importe el siguiente paso.', 'OutBrick toma la sensación de un regreso acogedor y conserva su propio lenguaje compacto de puzles.'],
    sections: {
      'the-work-behind-the-welcome': { title: 'El trabajo detrás de la bienvenida', paragraphs: [
        'Entrar en Stardew Valley suele parecer fácil, pero su bienvenida es fruto de un trabajo sostenido. En una aclaración sobre el desarrollo del juego, su creador Eric Barone escribió que fue la única persona que trabajó en Stardew Valley durante sus cuatro años y medio de desarrollo y que la editora solo contribuyó a la conexión de red del multijugador. Es un relato en primera persona, así que debe leerse como la declaración de un creador y no como una historia completa de producción, pero deja clara la escala del experimento en solitario.',
        'La lección para un estudio pequeño no es «trabaja solo». Es que una experiencia cálida para el jugador puede construirse a partir de miles de decisiones deliberadas y comprensibles. Una llegada suave sigue siendo un logro técnico y editorial.',
      ] },
      'progress-you-can-feel': { title: 'Un progreso que puedes sentir', paragraphs: [
        'El progreso tranquilo tiene una forma visible. Una semilla se vuelve planta, una habitación se vuelve tuya, se abre un camino o una rutina conocida gana una posibilidad. No necesitas una explosión de recompensas para comprender que tu atención ha importado.',
        'Esa claridad conecta con el modelo motivacional de competencia y autonomía: las personas quieren sentirse capaces y quieren que sus acciones les pertenezcan. La investigación no dice que cualquier sistema acogedor genere bienestar. Ofrece a los diseñadores un vocabulario útil para explicar por qué un progreso diseñado con intención puede resultar satisfactorio.',
      ] },
      'gentle-does-not-mean-empty': { title: 'Tranquilo no significa vacío', paragraphs: [
        'Un juego se vuelve plano cuando «acogedor» significa que nada puede sorprender al jugador ni oponerle resistencia. La mejor versión conserva cierta fricción: cambia una estación, un recurso es finito, un vecino tiene un horario o un puzle pide mirar otra vez. La fricción tiene sentido porque el juego te da tiempo y herramientas para responder.',
        'Para OutBrick, eso significa que un tablero puede ser amable sin resolverse por ti. Las reglas se mantienen firmes, el límite de movimientos es real, la respuesta se gana y el primer deshacer gratis evita que un experimento se vuelva castigo. Recibes un pequeño problema con límites claros, no una pantalla vacía disfrazada de relajación.',
      ], bullets: ['Haz visible el progreso sin hacerlo ruidoso', 'Deja que una sesión de regreso empiece con reconocimiento', 'Mantén suficiente resistencia para que las elecciones importen', 'Usa herramientas de recuperación para proteger la curiosidad'] },
      'a-welcoming-return': { title: 'Diseñar un regreso acogedor', paragraphs: [
        'Los mejores juegos acogedores no diseñan solo la primera sesión. Diseñan la sensación de abrir el juego después de una semana ajetreada. Puedes recordar el mundo, ver un siguiente paso atractivo y decidir si hoy es una visita de dos minutos o una estancia más larga.',
        'Esa es la parte que OutBrick quiere hacer suya: un tablero que se adapte a donde estás, un pueblo de [el Viaje](/#journey) que siga donde lo dejaste y un progreso que siga siendo tuyo, en tu propio iCloud, en cada dispositivo en el que inicies sesión.',
      ] },
    }, pullQuote: 'Una llegada suave sigue siendo un logro técnico y editorial.', faqs: [],
  },
  'hades-run-keeps-learning': {
    title: 'Hades y la partida que sigue aprendiendo', dek: 'Lo que el éxito del acceso anticipado de Supergiant enseña sobre iteración, impulso narrativo e intentos que se sienten distintos.',
    imageAlt: 'Un aventurero solitario sigue caminos luminosos ramificados por un inframundo carmesí e índigo',
    tags: ['Hades', 'acceso anticipado', 'iteración', 'diseño roguelike'],
    intro: 'Repetir un intento solo emociona cuando lleva información al siguiente. Hades hizo visible ese principio: una partida podía terminar, pero la relación del jugador con el mundo, la historia y sus propias decisiones seguía desarrollándose.',
    keyTakeaways: ['Supergiant describe Hades como un juego diseñado desde el principio para el acceso anticipado, con los comentarios de la comunidad como parte del proceso.', 'Una partida repetida necesita más que variación aleatoria: necesita memoria, interpretación y una razón para probar un enfoque nuevo.', 'OutBrick aplica una versión a menor escala: cada tablero debería enseñar un patrón sin exigir una campaña larga.'],
    sections: {
      'early-access-as-a-design-loop': { title: 'El acceso anticipado como ciclo de diseño', paragraphs: [
        'Las preguntas frecuentes de Hades de Supergiant dicen que el equipo diseñó el juego desde el principio para el acceso anticipado. El estudio describe el objetivo de crearlo en colaboración con su comunidad y conecta la estructura modular del juego y su narrativa con ese enfoque. Es un relato de primera mano, pero resulta valioso precisamente porque explica la intención de producción detrás de la experiencia terminada.',
        'El ciclo es fácil de trasladar: publicar una parte coherente, escuchar lo que los jugadores pueden comprender realmente y hacer que la siguiente parte responda a una pregunta mejor. Los comentarios aportan pruebas de dónde comunica el diseño y dónde pide adivinar, en lugar de ser una votación sobre cada detalle.',
      ] },
      'the-run-remembers': { title: 'La partida recuerda', paragraphs: [
        'Hades convierte el fracaso en un cambio de contexto. Una partida puede revelar una interacción de armas, un momento de un personaje, una elección de recursos o una ruta que cambie el significado del siguiente intento. No estás simplemente tirando los mismos dados otra vez: llevas contigo un modelo mejor del sistema.',
        'Por eso «aleatorio» no basta. La variación resulta satisfactoria cuando puedes conectarla con un vocabulario creciente. Un puzle pequeño puede hacerlo mediante una nueva disposición de puertas, un cuello de botella revelado o una solución que solo se vuelve evidente después del primer intento.',
      ] },
      'narrative-keeps-the-door-open': { title: 'La narrativa mantiene abierta la puerta', paragraphs: [
        'Los materiales oficiales de Hades describen una historia que podía entregarse por capítulos durante el acceso anticipado. La historia se convirtió en una respuesta suave a «¿por qué volver?». Daba a la siguiente partida un horizonte emocional incluso cuando el resultado mecánico era incierto.',
        'OutBrick no es un roguelike narrativo y no debería fingir serlo. Su versión del regreso es más tranquila: el tablero te permite percibir una regla, el siguiente le da otro ángulo y el estado de finalización sigue siendo lo bastante comprensible para que el aprendizaje sobreviva a una sesión breve.',
      ] },
      'designing-the-next-attempt': { title: 'Diseña el siguiente intento', paragraphs: [
        'Un juego repetible debería responder a tres preguntas después de fallar: qué cambió, qué aprendí y qué puedo probar ahora. Si la única respuesta es «repite hasta que mejoren los números», el ciclo está tomando tiempo prestado en lugar de ganarse la atención.',
        'El tablero de OutBrick es lo bastante pequeño para mantenerlo en la memoria. Una línea fallida puede convertirse en una pista en vez de una cicatriz. Un ciclo compacto deja menos cosas que olvidar y da más significado a la decisión que queda. Cuando un intento termina sin despejar el tablero, cuesta una vida, y [la página de inicio explica exactamente cómo funcionan las vidas](/#fair).',
      ], bullets: ['Haz comprensible el resultado de un intento', 'Conserva el conocimiento aunque el tablero se reinicie', 'Ofrece un siguiente experimento concreto', 'Permite parar con el ciclo completo'] },
    }, pullQuote: 'Repetir un intento solo emociona cuando lleva información al siguiente.', faqs: [],
  },
  'celeste-assist-mode-accessibility': {
    title: 'Celeste: el modo de asistencia como mejor diseño', dek: 'El apoyo opcional puede conservar la esencia del desafío y dar a más jugadores una vía para participar.',
    imageAlt: 'Un paisaje montañoso tranquilo con varias rutas claras de ascenso y pequeños escaladores genéricos',
    tags: ['Celeste', 'modo de asistencia', 'accesibilidad', 'diseño de dificultad'],
    intro: 'La accesibilidad no promete que todas las personas vivirán un juego exactamente igual. Consiste en hacer que la invitación central sea alcanzable por más de un camino.',
    keyTakeaways: ['El modo de asistencia opcional de Celeste es un ejemplo muy comentado de cómo conservar la elección del jugador frente al desafío.', 'La investigación reciente de CHI destaca el conocimiento de la comunidad, las experiencias personalizables y el juego no convencional para jugadores con discapacidad.', 'OutBrick trata las herramientas de apoyo como parte del lenguaje del juego en lugar de como prueba de que alguien ha fallado.'],
    sections: {
      'the-core-can-stay-intact': { title: 'La esencia puede permanecer intacta', paragraphs: [
        'El modo de asistencia de Celeste convence porque no exige al equipo fingir que la dificultad carece de significado. Ofrece formas opcionales de cambiar las condiciones de juego, para que la montaña siga siendo un lugar de atención y descubrimiento incluso cuando el tiempo o la velocidad por defecto no encajan bien.',
        'La distinción de diseño importa. Una opción de apoyo no es una versión de segunda del juego. Te permite elegir las condiciones en las que participas de la idea que le importa al juego.',
      ] },
      'what-disabled-players-teach-designers': { title: 'Lo que enseñan a diseñar los jugadores con discapacidad', paragraphs: [
        'Martinez, Froehlich y Fogarty entrevistaron a trece jugadores con discapacidad sobre la adopción de juegos y describieron fases como descubrimiento, evaluación y adaptación. Sus recomendaciones incluyen recursos comunitarios más sólidos, acceso creado socialmente, experiencias personalizables y apoyo al juego no convencional. La muestra es pequeña y cualitativa, pero su concreción es precisamente el punto: las necesidades de acceso aparecen en decisiones reales, no solo en una lista de requisitos.',
        'La investigación también cuestiona una idea limitada de dominio. Una persona puede estar profundamente implicada mientras utiliza controles reasignados, menor velocidad, una señal visual, una guía o un patrón de movimiento que el diseñador nunca imaginó. El objetivo es participar con autonomía, no ejecutar la ruta preferida del diseñador.',
      ] },
      'more-than-one-signal': { title: 'Más de una señal', paragraphs: [
        'El W3C aconseja que el color no sea el único medio visual de comunicar información. Las recomendaciones de accesibilidad de juegos de Microsoft defienden de forma relacionada combinar señales y considerar el juego sin sonido, en una pantalla monocroma o después de una pausa larga.',
        'En OutBrick, las formas, las espigas, el espaciado, el contraste y el movimiento refuerzan el lenguaje del color. El resultado es mejor para quienes no pueden usar el tono con fiabilidad, pero también para todos cuando el tablero se explica de un vistazo.',
      ] },
      'support-is-a-design-material': { title: 'El apoyo es un material de diseño', paragraphs: [
        'Las opciones de accesibilidad más útiles son fáciles de encontrar, reversibles y libres de vergüenza. Están cerca de la decisión que afectan, explican qué cambian y permiten ajustar la experiencia cuando cambia el contexto.',
        'Ese es el criterio al que aspira OutBrick. Una [curva de dificultad más amable](/blog/kinder-difficulty-curve), un camino claro de recuperación y un modo para daltonismo activado desde el primer inicio no son adornos alrededor del puzle. Ayudan a que el puzle siga siendo el puzle para más personas.',
      ], bullets: ['Combina color con forma y patrón', 'Mantén las opciones de apoyo reversibles y visibles', 'Prueba con jugadores que utilizan las opciones', 'Considera válido el juego no convencional'] },
    }, pullQuote: 'Una opción de apoyo no es una versión de segunda del juego.',
    faqs: [
      { question: '¿El modo de asistencia hace Celeste más fácil?', answer: 'Permite ajustar determinadas condiciones de juego. La idea de diseño importante es que cada persona elige su ruta, en lugar de tratar la accesibilidad como un juego separado.' },
      { question: '¿Qué opciones de accesibilidad tiene OutBrick?', answer: 'El modo para daltonismo está activado por defecto y coloca un símbolo en cada ladrillo y puerta. Cada ladrillo es un elemento de VoiceOver, el texto más grande se adapta en toda la aplicación, se respeta Reducir movimiento y no hay ningún reloj. La [página de accesibilidad](/accessibility) contiene la lista completa.' },
    ],
  },
  'sims-stories-systems-tell': {
    title: 'Los Sims y las historias que cuentan los sistemas', dek: 'Un éxito duradero sobre autoría del jugador, resistencia juguetona y un juego que no escribe todas las líneas por ti.',
    imageAlt: 'Un barrio visto en sección a la hora dorada donde habitaciones, rutinas, objetos y caminos forman historias cotidianas',
    tags: ['Los Sims', 'historias emergentes', 'diseño de sistemas', 'autonomía del jugador'],
    intro: 'Los Sims recuerda que un juego puede crear historias memorables sin escribir de antemano cada momento memorable. Da a los jugadores un sistema comprensible, un poco de resistencia y espacio para decidir, y las historias empiezan a pertenecerles.',
    keyTakeaways: ['El atractivo duradero de Los Sims parte de situar las historias creadas por los jugadores en el centro de la experiencia.', 'Los sistemas necesitan consecuencias comprensibles y resistencia juguetona para producir historias en vez de ruido.', 'OutBrick utiliza una forma más pequeña de diseño emergente: unas pocas reglas se combinan en un tablero que puedes sentir tuyo.'],
    sections: {
      'the-player-is-the-author': { title: 'El jugador es el autor', paragraphs: [
        'En una retrospectiva de los veinticinco años, Xbox Wire describe la idea central de Los Sims como la historia del jugador, con el juego aportando resistencia humorística. Es un relato editorial cercano a la fuente original, así que no es una evaluación independiente de la serie, pero capta la promesa de diseño que hizo comprensible la franquicia para generaciones: el sistema aporta la situación y el jugador, el significado.',
        'Eso es distinto de dar a los jugadores un entorno abierto gigante y esperar que pase algo. La autoría necesita materiales comprensibles. Una persona debería saber qué puede cambiar una elección, aunque la historia final la sorprenda.',
      ] },
      'pushback-makes-a-story': { title: 'La resistencia crea una historia', paragraphs: [
        'Un sistema sin fricción produce una lista de tareas. Un sistema hostil produce fatiga. La resistencia juguetona queda entre ambos: el plan puede torcerse, pero la consecuencia resulta lo bastante comprensible para formar parte del recuerdo.',
        'La literatura sobre motivación ayuda a explicar por qué importa. La autonomía no es ausencia de reglas: es sentir que tus decisiones son tuyas en un mundo que responde. La conexión puede venir de los personajes, de otros jugadores o del público imaginado al que contaremos la historia después.',
      ] },
      'small-systems-can-still-emerge': { title: 'Los sistemas pequeños también pueden generar historias', paragraphs: [
        'OutBrick no simula un barrio. Su pequeño sistema es el tablero: un ladrillo ocupa un carril, una puerta espera una forma correspondiente y un movimiento cambia lo que será posible después. La historia es una frase y no una novela: «Vi el hueco, elegí el recorrido largo y tuve que deshacer dos movimientos después».',
        'Esa frase basta para sentir que eres el autor. El tablero te ofrece una secuencia de decisiones que puedes recordar como tuyas.',
      ], bullets: ['Da al jugador un vocabulario pequeño de acciones', 'Mantén comprensibles las consecuencias', 'Permite resultados sorprendentes sin esconder la regla', 'Haz que el tablero despejado final se sienta obra del jugador'] },
      'design-for-the-story-after': { title: 'Diseña para la historia posterior', paragraphs: [
        'Un sistema exitoso suele medirse por lo que dicen los jugadores después de la sesión. «Construí una casa extraña», «mi vecino se convirtió en rival» o «encontré el único carril que funcionaba» indican que interpretan el diseño en lugar de limitarse a consumirlo.',
        'OutBrick busca esa pequeña imagen que permanece. El siguiente tablero debería ser nuevo, pero deberías salir con un momento claro que puedas llevar a la siguiente conversación, trayecto o pausa tranquila.',
      ] },
    }, pullQuote: 'Un sistema sin fricción produce una lista de tareas. Un sistema hostil produce fatiga.', faqs: [],
  },
  'pokemon-go-power-of-place': {
    title: 'Pokémon GO y el poder del lugar', dek: 'El juego basado en ubicación revela cómo movimiento, conexión social y el mundo fuera de la pantalla forman parte del juego.',
    imageAlt: 'Un explorador genérico sigue un camino luminoso por un parque urbano hacia un punto de referencia',
    tags: ['Pokémon GO', 'juegos basados en ubicación', 'juego social', 'vínculo con el lugar'],
    intro: 'Algunos juegos dan a un lugar una segunda capa. Un parque se vuelve ruta, un punto de referencia se vuelve lugar de encuentro y un paseo cotidiano recibe un poco más de atención. El mejor diseño basado en ubicación añade significado al mundo sin fingir que la pantalla es todo el mundo.',
    keyTakeaways: ['La investigación sobre Pokémon GO relaciona jugar con motivaciones como interacción social y exploración, aunque los resultados dependen del contexto y la muestra.', 'El diseño basado en lugares puede convertir movimiento y descubrimiento local en materiales de juego.', 'OutBrick es estacionario por diseño, pero toma el principio de dar al entorno cotidiano una capa pequeña y memorable.'],
    sections: {
      'the-world-becomes-the-board': { title: 'El mundo se convierte en tablero', paragraphs: [
        'El estudio de Wang y Hsieh sobre Pokémon GO examina la relación entre personas, entornos y un juego de realidad aumentada basado en ubicación. Ese enfoque es útil porque gran parte de la novedad del juego está en cómo la geografía familiar permite actuar, más allá del propio sistema de colección. Una esquina, un sendero o un espacio público pueden adquirir una posibilidad nueva cuando el juego dirige tu atención hacia ellos.',
        'El desafío de diseño es añadir una capa sin borrar el propio lugar. Un juego debería fomentar la atención a la calle, a las personas que la comparten y a los límites prácticos del entorno, no convertir cada espacio público en un nodo invisible de recursos.',
      ] },
      'why-people-keep-walking': { title: 'Por qué las personas siguen caminando', paragraphs: [
        'Un estudio de usos y gratificaciones de Pokémon GO examinó por qué las personas juegan y cómo esas motivaciones se relacionan con el uso continuado. El artículo trata de un juego de realidad aumentada y sus participantes encuestados, no ofrece una explicación universal del comportamiento, pero refuerza una idea práctica: la retención puede proceder del significado que el juego añade a una actividad, no solo de un programa de recompensas.',
        'La exploración, la competencia y el contacto social pueden solaparse. Una persona puede caminar más porque una ruta es interesante, porque la espera un amigo o porque el juego hace que un barrio conocido se entienda de una manera nueva.',
      ] },
      'social-benefits-have-a-place': { title: 'Los beneficios sociales tienen un lugar', paragraphs: [
        'Un estudio indexado en PubMed titulado Enhanced Community Through Augmented Reality presentó resultados de encuesta sobre conocer gente, visitar lugares nuevos y comprar en negocios locales mediante Pokémon GO. Son asociaciones declaradas por los participantes y no deben leerse como prueba de que el juego causara todos los resultados. Sí muestran por qué el lugar puede ser un material de diseño social.',
        'Una capa social no tiene por qué significar chat de voz o una clasificación. Puede ser una ruta compartida, un punto de referencia conocido, una historia del paseo del día o el simple reconocimiento de que otras personas prestan atención al mismo mundo.',
      ] },
      'outbrick-and-the-ordinary': { title: 'OutBrick y lo cotidiano', paragraphs: [
        'OutBrick no te pide caminar a ningún sitio. Su lugar es el pequeño intervalo: el andén, la mesa de café, el minuto antes de una reunión; y funciona sin conexión, así que el túnel no importa. La conexión es de actitud, no de mecánica. Un buen juego puede dar más intención a un contexto cotidiano al ofrecer a la atención una forma clara y acotada. Escribimos más sobre ese intervalo en [El puzle del trayecto](/blog/commuter-puzzle-two-minute).',
        'Ya esté el tablero en un parque o en casa, la invitación es la misma: percibir una cosa, tomar una decisión y dejar el mundo un poco más fácil de retomar.',
      ] },
    }, pullQuote: 'El mejor diseño basado en ubicación añade significado al mundo sin fingir que la pantalla es todo el mundo.', faqs: [],
  },
  'games-teach-curiosity-without-lecture': {
    title: 'Cuando un juego enseña curiosidad sin dar una clase', dek: 'Cómo los sistemas interactivos pueden invitar a experimentar y qué sugieren los trabajos del MIT sobre aprendizaje mediante creación acerca de situar la autonomía antes de la explicación.',
    imageAlt: 'Un jugador joven investiga pistas que responden en una pradera soleada que conduce a un observatorio cinético',
    tags: ['juegos de aprendizaje', 'curiosidad', 'MIT', 'diseño de juegos'],
    intro: 'Enseñar en un juego no es lo mismo que introducir una lección en él. Necesitas una pregunta que merezca hacerse, un sistema que responda con honestidad y suficiente espacio para formular una hipótesis antes de que llegue la explicación.',
    keyTakeaways: ['El relato del MIT sobre aprendizaje mediante creación y juegos destaca crear, probar y compartir en lugar de recibir instrucciones pasivamente.', 'La curiosidad crece cuando el sistema hace seguros los experimentos y comprensibles sus resultados.', 'OutBrick utiliza puzles diminutos como invitaciones a percibir relaciones, no como exámenes con criterios de evaluación ocultos.'],
    sections: {
      'curiosity-starts-with-a-question': { title: 'La curiosidad empieza con una pregunta', paragraphs: [
        'Un juego enseña cuando quieres saber qué ocurrirá después. Ese deseo puede empezar con una discrepancia visible, un objeto que responde o una regla lo bastante sencilla para probarla. No estás esperando a que termine el tutorial: ya estás construyendo un modelo.',
        'El modelo puede ser incorrecto. Eso forma parte del valor. Un error seguro aporta una prueba nueva y mantiene la autoría en tu lado de la pantalla.',
      ] },
      'making-is-a-form-of-thinking': { title: 'Crear es una forma de pensar', paragraphs: [
        'MIT News describe un trabajo que enseña habilidades de creación computacional mediante juegos y conecta actividades de tipo lúdico con crear y experimentar. El artículo es una noticia universitaria, no una evaluación aleatorizada de todos los resultados del aprendizaje mediante juegos, por lo que la afirmación útil se refiere a la postura de diseño: dejar que quienes aprenden creen algo, vean cómo responde y compartan el resultado.',
        'Esa postura convierte la explicación en una consecuencia de la actividad. Comprendes un sistema más profundamente cuando la explicación responde a una pregunta que ya has sentido en las manos.',
      ] },
      'the-outbrick-question': { title: 'La pregunta de OutBrick', paragraphs: [
        'Los tableros de OutBrick son lo bastante pequeños para plantear una pregunta concreta: si este ladrillo se mueve primero, ¿qué carril sigue abierto? Puedes probar, deshacer, comparar y acabar reconociendo la relación. El juego no necesita llamarlo lección para que practiques razonamiento.',
        'Lo importante es que la respuesta sea veraz. Un movimiento debería cambiar el tablero de una forma que puedas examinar. El misterio puede despertar curiosidad al principio, pero la claridad permite que la curiosidad se convierta en comprensión.',
      ], bullets: ['Muestra la pregunta en la disposición', 'Permite revertir los experimentos', 'Da una respuesta que explique el estado', 'Recompensa un modelo mejor, no una suposición afortunada'] },
      'leave-with-a-better-question': { title: 'Salir con una pregunta mejor', paragraphs: [
        'Un buen juego de aprendizaje no termina cada sesión con una puntuación que pretende resumirte. Te deja una pregunta más precisa para el siguiente tablero. Es una medida más discreta del progreso, pero suele ser la que pertenece al jugador.',
        'La versión de enseñanza de OutBrick es modesta: ayudar a percibir una relación, tomar una decisión deliberada y sentir que tu atención cambió lo que se volvió posible.',
      ] },
    }, pullQuote: 'El misterio puede despertar curiosidad al principio, pero la claridad permite que la curiosidad se convierta en comprensión.', faqs: [],
  },
  'animal-crossing-shared-time': {
    title: 'Animal Crossing y la arquitectura del tiempo compartido', dek: 'Por qué rutinas, roles y juego personalizado pueden hacer social un lugar digital incluso cuando los jugadores están separados.',
    imageAlt: 'Un acogedor sendero de isla con una mesa compartida, faroles, plantas y pequeñas casas al anochecer',
    tags: ['Animal Crossing', 'juego social', 'rutinas', 'comunidad'],
    intro: 'El tiempo compartido no siempre parece acción simultánea. A veces es un lugar que las personas mantienen, una rutina que comparan o una identidad que llevan a un mundo que las espera cuando vuelven.',
    keyTakeaways: ['La investigación revisada por pares sobre Animal Crossing: New Horizons describe sustitución de rutinas, conexión social, autonomía e identidades.', 'Un juego social puede crear conexión mediante presencia e interpretación compartida, no solo competición directa.', 'OutBrick mantiene solitario su núcleo, pero diseña sus tableros y su revista como cosas de las que se puede hablar y que se pueden compartir.'],
    sections: {
      'a-place-that-waits': { title: 'Un lugar que espera', paragraphs: [
        'El artículo de Comerford en Persona Studies examina Animal Crossing: New Horizons mediante entrevistas y una encuesta a casi 2000 jugadores. Describe cómo utilizaron el juego para sustituir rutinas, conectar socialmente, ejercer autonomía y construir identidades durante un periodo de aislamiento social. Su contexto histórico es específico, pero la observación de diseño se puede trasladar: un lugar puede sentirse social porque guarda huellas de las elecciones de las personas entre visitas.',
        'Un mundo que espera crea un ritmo distinto del de una partida que existe solo mientras todos están conectados. Puedes aportar un pequeño acto, salir y volver a un mundo que tiene continuidad.',
      ] },
      'roles-make-room-for-people': { title: 'Los roles hacen sitio a las personas', paragraphs: [
        'El juego personalizado da a los jugadores un papel que las reglas no prescriben por completo. Una persona se vuelve jardinera, otra anfitriona, otra coleccionista y otra arregla un rincón para las visitas. Esos roles no son necesarios para terminar el juego, por lo que pueden ser significativos en vez de meramente funcionales.',
        'Es una forma de autonomía. El sistema ofrece posibilidades, pero cada persona decide quién quiere ser dentro del espacio. La conexión puede crecer entonces a través de las historias que hacen posibles esas elecciones.',
      ] },
      'outbrick-as-a-shared-object': { title: 'OutBrick como objeto compartido', paragraphs: [
        'OutBrick no pretende ser un muro social. Aun así, un puzle puede convertirse en objeto compartido cuando alguien explica el cuello de botella, envía un desafío en una conversación de Mensajes o pregunta a un amigo cómo interpreta la misma forma. Los desafíos de Game Center llegan a alguien que conoces de verdad. El tablero es un pequeño lugar de interpretación.',
        'La revista amplía ese espacio. Escribimos sobre decisiones de diseño para que puedas ver el razonamiento alrededor del juego, no solo su superficie. El objetivo es conectar una pausa solitaria con una práctica más amplia de observar.',
      ] },
      'design-for-returning-together': { title: 'Diseña para volver juntos', paragraphs: [
        'Los espacios compartidos más amables no exigen horarios idénticos. Dejan una huella que se puede retomar después y hacen sitio a distintos grados de participación. Una persona puede visitar cinco minutos, decorar un rincón o simplemente ver qué ha cambiado.',
        'Ese es un criterio útil para el ecosistema más amplio de OutBrick: cada tablero debería sostenerse solo, mientras las historias que lo rodean ofrecen más maneras de sentirse acompañado.',
      ] },
    }, pullQuote: 'Un lugar puede sentirse social porque guarda huellas de las elecciones de las personas entre visitas.', faqs: [],
  },
  'papers-please-meaningful-friction': {
    title: 'Papers, Please y la fricción con significado', dek: 'Cómo una acción repetitiva se vuelve una pregunta moral y por qué la mejor fricción pide decidir, no simplemente esperar.',
    imageAlt: 'Un escritorio austero con documentos sellados, una cola y una única luz cálida que sugieren decisiones con consecuencias',
    tags: ['Papers, Please', 'fricción con significado', 'ética en los juegos', 'diseño de sistemas'],
    intro: 'La fricción no equivale automáticamente a profundidad. A veces es solo un menú lento. La fricción con significado dificulta una decisión porque tiene una consecuencia que puedes comprender y que te importa.',
    keyTakeaways: ['Papers, Please hace expresivo el procedimiento al situar reglas, tiempo, dinero y consecuencias humanas en el mismo espacio de decisión.', 'La tensión ética funciona mejor cuando el juego hace comprensibles valores en conflicto en lugar de esconder la respuesta.', 'OutBrick utiliza una versión más suave de fricción con significado: un tablero puede exigir esfuerzo en el siguiente movimiento sin volver hostil la interfaz.'],
    sections: {
      'procedure-becomes-a-question': { title: 'El procedimiento se vuelve una pregunta', paragraphs: [
        'Papers, Please empieza con una acción administrativa repetida: examinar documentos, comparar detalles y decidir. La descripción oficial presenta al jugador como inspector de inmigración en un estado distópico ficticio. El procedimiento es lo bastante sencillo para aprenderlo, pero el contexto cambia continuamente el significado de la acción.',
        'Una regla se vuelve expresiva cuando comprendes tanto lo que pide el sistema como lo que cuesta la elección. El juego no necesita un largo discurso antes de cada decisión: la tensión vive en la relación entre la lista de comprobación y la persona que tienes delante.',
      ] },
      'friction-with-a-human-edge': { title: 'Fricción con una dimensión humana', paragraphs: [
        'Una restricción significativa crea un conflicto al que puedes poner nombre. La precisión puede proteger un trabajo; la rapidez, una familia; y la severidad puede proteger a una persona mientras perjudica a otra. El juego no ofrece una única respuesta moral correcta. Su sistema te deja sentir el choque entre valores.',
        'La investigación de juegos sobre autonomía y competencia ayuda a explicar por qué esto puede cautivar. Necesitas suficiente control para sentir tuya la elección y suficiente respuesta para comprender su consecuencia. Si el resultado es arbitrario, la tensión se convierte en frustración.',
      ] },
      'what-outbrick-keeps': { title: 'Lo que conserva OutBrick', paragraphs: [
        'OutBrick no tiene un puesto fronterizo ni dilemas morales. Su fricción significativa es más pequeña: el tablero te pide elegir qué relación conservar. Mover un ladrillo puede cerrar un carril, retrasar una coincidencia o revelar que el movimiento aparentemente obvio era una trampa.',
        'La interfaz no debería añadir dolor arbitrario a esa decisión. El desafío pertenece a la relación espacial, no a un temporizador oculto, un icono confuso o un deshacer escaso; por eso OutBrick no tiene ningún reloj y da a cada tablero un primer deshacer gratis. Esa es la línea entre la fricción que produce pensamiento y la que solo consume paciencia. La misma línea recorre [cómo creamos una curva de dificultad más amable](/blog/kinder-difficulty-curve).',
      ], bullets: ['Sitúa la dificultad en la idea, no en los controles', 'Muestra suficientes consecuencias para que las elecciones importen', 'Permite recuperarse de un experimento', 'Mantén claro el objetivo mientras el recorrido sigue abierto'] },
      'let-the-player-name-the-cost': { title: 'Deja que el jugador nombre el coste', paragraphs: [
        'Los sistemas más memorables permiten decir qué has sacrificado. «Protegí este carril y perdí aquel hueco». Esa frase hace que un puzle se sienta como una decisión, no como una secuencia de botones.',
        'OutBrick quiere que el coste siga siendo lo bastante pequeño para una sesión breve, pero lo bastante real para que despejar el tablero se sienta merecido. Un poco de fricción puede enriquecer un juego tranquilo cuando mantienes el control del significado.',
      ] },
    }, pullQuote: 'La fricción no equivale automáticamente a profundidad. A veces es solo un menú lento.', faqs: [],
  },
  'how-games-become-habits': {
    title: 'Cómo los juegos se vuelven hábitos: señal, elección, cierre', dek: 'Una mirada práctica, atenta a la investigación, a los ciclos que te hacen volver y al diseño que mantiene voluntario el regreso.',
    imageAlt: 'Un camino circular tranquilo de pequeños momentos de juego que pasa del contexto a la elección y a un final claro',
    tags: ['hábitos de juego', 'diseño del comportamiento', 'juego saludable', 'autonomía del jugador'],
    intro: 'Un hábito no es lo mismo que una adicción y volver no es lo mismo que una compulsión. Entender la diferencia ayuda a diseñar invitaciones fáciles de aceptar y también de rechazar.',
    keyTakeaways: ['La investigación sobre hábitos apunta a señales situacionales y rutinas aprendidas, mientras el juego problemático implica deterioro y pérdida de control.', 'Los elementos de recompensa pueden atraer sin ser perjudiciales automáticamente; importan el contexto, las diferencias entre jugadores y los resultados.', 'El ciclo de OutBrick es señal, elección y cierre: una entrada clara, un movimiento significativo y una meta que respeta tu siguiente decisión.'],
    sections: {
      'a-cue-is-not-a-command': { title: 'Una señal no es una orden', paragraphs: [
        'Una señal es el contexto que pone una acción a tu alcance: un trayecto tranquilo en tren, una casilla diaria, un icono conocido o el momento después de terminar una tarea. Un estudio indexado en PubMed de jugadores de MMORPG examinó la sensibilidad a señales situacionales junto al juego excesivo y problemático. Su resultado advierte contra tratar cualquier ciclo repetible como neutro, pero no demuestra que todos los juegos o jugadores desarrollen el mismo patrón.',
        'Por ello, los diseñadores deberían preguntar qué promete la señal. ¿Un momento acotado de juego o una cadena de obligaciones sin terminar? La respuesta está tanto en el sistema que la rodea como en la recompensa.',
      ] },
      'the-choice-needs-to-belong-to-the-player': { title: 'La elección tiene que pertenecer al jugador', paragraphs: [
        'Un ciclo que se siente saludable te da una razón para elegir, no solo para obedecer. Los objetivos claros y la respuesta inmediata pueden apoyar la competencia, mientras las rutas opcionales conservan la autonomía. La conexión puede proceder de un ritual compartido, pero no debería exigir a todos exhibirse públicamente.',
        'Por eso OutBrick mantiene visible el siguiente tablero sin hacerlo urgente. La invitación es clara; la decisión sigue siendo tuya.',
      ] },
      'closure-matters': { title: 'El cierre importa', paragraphs: [
        'El cierre es la parte que muchos sistemas de retención evitan deliberadamente. Un estado final claro indica que la sesión está completa, el progreso está a salvo y la siguiente visita puede empezar limpiamente. Sin cierre, puedes seguir simplemente porque el sistema nunca dice que ha llegado un buen momento para parar.',
        'La investigación sobre elementos de recompensa y juego problemático examina cómo distintos tipos de recompensa se relacionan con el comportamiento de juego adolescente. El estudio no debería usarse para afirmar que las recompensas causan daño a todos los jugadores. Sí apoya una pregunta de diseño más cuidadosa: ¿qué hace esta recompensa a tu capacidad de elegir cuándo ya es suficiente?',
      ] },
      'outbricks-bounded-loop': { title: 'El ciclo acotado de OutBrick', paragraphs: [
        'El ciclo previsto de OutBrick es deliberadamente sencillo. Un contexto conocido lleva a abrir la aplicación, un tablero plantea una pregunta, haces un movimiento y la tarjeta de victoria ofrece una pausa natural. El Viaje sigue generando tableros después del número dos mil para quien quiere más, pero eso no absorbe el significado de los capítulos anteriores. La bonificación diaria es de cien monedas por el primer tablero despejado del día, no una racha que se reinicia.',
        'La medida del éxito no es «¿se quedó el jugador?», sino «¿sintió que podía decidir?». Un juego se gana otra sesión cuando la primera termina con la confianza intacta.',
      ], bullets: ['Una señal que explica lo que está disponible', 'Una elección con consecuencias visibles', 'Una recompensa que no esconde la meta', 'Una forma de volver sin penalización por ausencia'] },
    }, pullQuote: 'Un juego se gana otra sesión cuando la primera termina con la confianza intacta.',
    faqs: [
      { question: '¿Un juego diario es automáticamente un mal hábito?', answer: 'No. Un ritual diario puede ser voluntario y agradable. Lo importante es si mantienes el control y si jugar interfiere con el sueño, las responsabilidades, las relaciones u otras actividades que valoras.' },
      { question: '¿Por qué OutBrick utiliza el juego diario?', answer: 'Una bonificación diaria de monedas da al juego un pequeño ritmo opcional. Es una invitación con un final claro, no una racha que convierte la ausencia en fracaso.' },
    ],
  },
  'commuter-puzzle-two-minute': {
    title: 'El puzle del trayecto: hacer sitio a un juego de dos minutos', dek: 'Una guía para diseñar con atención interrumpida, pantallas pequeñas y el agradable espacio entre no tener tiempo y tener dos minutos.',
    imageAlt: 'Un puzle geométrico compacto junto a la tranquila ventana de un trayecto, con una breve pausa en el día',
    tags: ['sesiones breves', 'juegos para trayectos', 'diseño móvil', 'juegos de puzles'],
    intro: 'El puzle del trayecto tiene un acuerdo con la atención distinto del juego de consola: aclarar el estado rápidamente, respetar las interrupciones y hacer que dos minutos se sientan completos en vez de inconclusos.',
    keyTakeaways: ['Diseñar sesiones breves trata tanto del encaje cognitivo como del tiempo transcurrido.', 'La investigación piloto sobre puzles en tabletas puede informar preguntas de viabilidad y bienestar sin demostrar beneficios universales.', 'OutBrick trata la interrupción como una condición normal: estado comprensible, un deshacer gratis en cada tablero y el tablero exactamente donde lo dejaste cuando vuelves a la aplicación.'],
    sections: {
      'design-for-the-interruption': { title: 'Diseña para la interrupción', paragraphs: [
        'Un juego para trayectos se juega entre anuncios, puertas, mensajes y el simple hecho de que quizá tengas que levantar la vista. Por ello, la primera pregunta de diseño no es «¿cómo maximizamos la inmersión?», sino «¿puede la persona entender dónde está cuando vuelve su atención?».',
        'Un estado comprensible es una forma de cuidado. Un tablero claro, controles estables y un punto de pausa visible reducen el coste de memoria de las interrupciones.',
      ] },
      'two-minutes-can-still-have-a-shape': { title: 'Dos minutos también pueden tener forma', paragraphs: [
        'Una sesión breve debería tener comienzo, desarrollo y final. El comienzo es reconocer: ¿qué pide el puzle? El desarrollo es elegir: ¿qué relación debería probar? El final es un resultado: ¿qué cambió y quiero continuar?',
        'Esa forma permite que el juego se sienta sustancial sin ser largo. Recibes una unidad completa de atención en vez de un fragmento recortado de una obligación más grande.',
      ] },
      'what-the-pilot-can-tell-us': { title: 'Lo que un piloto puede y no puede decirnos', paragraphs: [
        'Urwyler y sus colegas estudiaron una intervención de puzles en tableta en un ensayo controlado aleatorizado piloto de viabilidad con adultos sanos. Un piloto puede ayudar a comprender el reclutamiento, la adherencia, la medición y si es práctico realizar un estudio mayor. No puede establecer que todo puzle breve mejore la cognición o el bienestar.',
        'Esa distinción resulta útil para los equipos de producto. Podemos tomar una pregunta de investigación —¿encaja la experiencia en el día y pueden las personas usarla de manera consistente?— sin tomar una conclusión que el estudio no formuló.',
      ] },
      'outbrick-in-the-gap': { title: 'OutBrick en el intervalo', paragraphs: [
        'OutBrick está construido para el intervalo entre obligaciones. El tablero se interpreta rápido, su primer deshacer es gratis y terminarlo no requiere una larga cadena de preparación. Si llega el tren o está listo el café, bloquear el teléfono deja el tablero exactamente como está: la interrupción en sí nunca es lo que te cuesta algo.',
        'No es productividad disfrazada de juego, solo un juego pequeño que entiende la forma de un día real y permite disfrutar del intervalo sin pedir que se convierta en algo mayor.',
      ], bullets: ['Empieza con un tablero que se explique por sí solo', 'Haz segura la interrupción', 'Ofrece un punto natural para parar', 'Deja que una sesión breve siga siendo recreativa'] },
    }, pullQuote: 'Un estado comprensible es una forma de cuidado.',
    faqs: [
      { question: '¿Cuánto dura un tablero de OutBrick?', answer: 'Lo habitual son unos dos minutos, pero el tiempo varía según el tablero y la persona. No hay ningún temporizador en el juego. El tablero limita movimientos, no minutos, así que pensar todo el tiempo que quieras es gratis.' },
      { question: '¿Puedo dejar un tablero sin terminar?', answer: 'Sí, y que te interrumpan es gratis: bloquea el teléfono o cambia de aplicación y el tablero espera como lo dejaste. Volver hasta el mapa es el único caso que cuesta algo: un tablero en el que ya has movido consume una vida, el juego te avisa primero y recuperas una vida cada treinta minutos automáticamente. Dejar un tablero despejado nunca cuesta nada.' },
    ],
  },
  'apple-watch-puzzle-games': {
    title: 'Puzles en Apple Watch: qué funciona en una pantalla pequeña', dek: 'Tableros de un vistazo, piezas del tamaño de un dedo, Digital Crown, respuesta háptica y juego independiente en Apple Watch.',
    imageAlt: 'Un marco de reloj ilustrado alrededor de un tablero real de OutBrick sobre un suelo índigo de ladrillos, con Bloo y Poppy a los lados',
    tags: ['juegos de puzles para Apple Watch', 'juegos para Apple Watch', 'watchOS', 'diseño de juegos'],
    intro: 'La mayoría de los puzles se diseñan para una pantalla que sostienes en la mano y miras durante unos minutos. La pantalla del Apple Watch está en la muñeca, recibe una mirada de pocos segundos y se maneja con la mano en la que no lo llevas. Eso cambia casi todas las decisiones de diseño, desde el tamaño de una pieza hasta cómo debería sentirse despejar un tablero. OutBrick tiene un juego independiente para Apple Watch, así que he dedicado mucho tiempo a estas preguntas. Este artículo trata del espacio de diseño en general: qué dicen las propias recomendaciones de Apple y qué busco cuando pruebo un puzle en la muñeca.',
    keyTakeaways: ['En el reloj se juega a base de miradas breves. Apple describe interacciones que suelen durar menos de un minuto, así que un puzle de muñeca debe entenderse al instante y poder dejarse a mitad de un movimiento con seguridad.', 'Un tablero pequeño con piezas grandes supera a un diseño de teléfono reducido. Apple propone botones de 44 × 44 puntos por defecto en watchOS y nunca inferiores a 28 × 28.', 'La respuesta háptica funciona mejor como puntuación: un significado claro por patrón, usada con moderación y reforzando lo que ya muestra la pantalla.'],
    sections: {
      'design-for-the-glance': { title: 'Diseñar para el vistazo', paragraphs: [
        'La descripción de Apple de cómo se usa un reloj es el mejor punto de partida para diseñar un puzle de muñeca. Las personas levantan la muñeca, sostienen la pantalla a unos treinta centímetros de los ojos y usan la otra mano para interactuar. Miran el reloj muchas veces al día en interacciones que pueden durar menos de un minuto. La lista de buenas prácticas de watchOS empieza con la misma idea: admitir interacciones rápidas, comprensibles de un vistazo y en una sola pantalla.',
        'En un puzle, eso descarta mucho. Queda fuera un tablero que obligue a desplazarse para verlo, porque todo el estado debe ser visible en lo que tardas en levantar la muñeca. También uno con treinta piezas pequeñas, porque nadie puede interpretarlo de un vistazo. Los tableros que funcionan en un reloj son pequeños, con pocas piezas, contraste fuerte y un objetivo evidente. La profundidad debe venir de cómo se estorban las piezas, no de cuántas hay.',
        'El texto necesita el mismo cuidado. Las recomendaciones de Apple para juegos indican un tamaño de texto por defecto de dieciséis puntos en watchOS y un mínimo de doce. Todo lo que deba leerse durante un tablero, como el contador de movimientos, debería estar al tamaño por defecto o mayor. Todo lo que pueda omitirse en la versión de muñeca probablemente debería omitirse.',
      ] },
      'input-on-the-wrist': { title: 'Toques, arrastres y Digital Crown', paragraphs: [
        'En el reloj se usan los gestos conocidos del iPhone: tocar, deslizar y arrastrar. La diferencia es la escala. La yema del dedo tapa buena parte de la pantalla, por lo que tanto la pieza que mueves como el espacio al que la llevas pueden desaparecer debajo. Apple recomienda botones de 44 × 44 puntos por defecto en watchOS y nunca menores de 28 × 28. Las piezas de juego siguen la misma lógica. Si una pieza es más pequeña que la yema del dedo, la gente fallará al tocarla o agarrará la vecina.',
        'La Digital Crown es la otra entrada y, desde watchOS 10, Apple la trata como la principal forma de navegación: girarla desplaza listas y cambia entre pantallas paginadas verticalmente. Las aplicaciones reciben sus giros, pero no sus pulsaciones, que el sistema se reserva. Apple también pide que cualquier acción vinculada a la corona tenga una interacción táctil equivalente y que la pantalla responda visiblemente al girarla, porque de otro modo se supone que no hace nada.',
        'Para diseñar puzles, la corona sirve para elecciones en una línea: recorrer una lista de niveles, elegir qué pieza está seleccionada o retroceder por los movimientos. Encaja mal con mover objetos en una cuadrícula bidimensional. Haga lo que haga, siempre debería poder hacerse lo mismo con un dedo. Tampoco hay un mando como alternativa: las recomendaciones de Apple para juegos señalan que watchOS es la única plataforma Apple sin compatibilidad con mandos físicos.',
      ] },
      'sessions-in-seconds': { title: 'Sesiones medidas en segundos', paragraphs: [
        'Un puzle de teléfono puede suponer que tienes unos minutos. Uno de reloj no. La muñeca baja cuando llega un autobús, hierve el agua o alguien empieza a hablar, y el juego debe aceptarlo sin penalización. En la práctica significa guardar el tablero después de cada movimiento, volver a la misma posición al levantarla otra vez y no dejar que nada se agote mientras la pantalla está apagada.',
        'Los relojes son el ejemplo más claro. Una cuenta atrás en un puzle de muñeca castiga justo lo que define el dispositivo: apartar la mirada. Un límite de movimientos funciona mucho mejor porque pide no malgastar movimientos y después espera. OutBrick no tiene ningún reloj y un tablero dura unos dos minutos, que ya es una duración breve para un puzle. El razonamiento detrás está en [por qué los puzles de dos minutos sientan bien](/blog/why-two-minute-puzzles-feel-good).',
        'También importa la forma de la progresión. Una sesión de muñeca es un tablero, de vez en cuando dos. Las largas cadenas de objetivos, las tareas diarias que requieren diez tableros y las escenas de historia entre niveles van en contra. Un puzle de reloj debería hacer que un solo tablero parezca algo completo, para que bajar el brazo se sienta como terminar en vez de abandonar.',
      ] },
      'haptics-as-punctuation': { title: 'La respuesta háptica como puntuación', paragraphs: [
        'El reloj está contra la piel, lo que hace especialmente eficaz la respuesta háptica. watchOS define un conjunto de patrones integrados, cada uno con su significado, reproducidos por el Taptic Engine y combinados con un tono audible. Apple aconseja usarlos para el significado documentado y mantener la coherencia para que cada patrón tenga un vínculo claro con la acción que lo causó.',
        'Un puzle solo tiene unos pocos eventos que merezcan sentirse: una pieza que llega a un lugar útil, un movimiento bloqueado y un tablero despejado. Da a cada uno su patrón y respétalo. Si la misma vibración significa tanto «bloqueado» como «resuelto», dejas de confiar en ella. Apple también advierte contra el exceso y señala que una respuesta adecuada de vez en cuando puede volverse cansada si se repite mucho. En un reloj es fácil equivocarse y convertir un juego tranquilo en uno que zumba al vibrar con cada deslizamiento.',
        'La prueba de Apple es buena: la mejor respuesta háptica suele ser aquella de la que no eres consciente, pero que echas de menos al desactivarla. Debería apoyar lo que muestra la pantalla y nunca sustituirlo, porque algunas personas juegan con ella apagada.',
      ] },
      'standalone-or-companion': { title: 'Independiente o complementario', paragraphs: [
        'Un juego de reloj puede llegar de dos formas. La documentación para desarrolladores de Apple describe aplicaciones solo para reloj, sin aplicación de iPhone, y aplicaciones de reloj que incluyen una compañera de iPhone pero pueden instalarse y funcionar sin ella. Apple fomenta la independencia en ambos casos porque se espera que funcionen sin tener el teléfono. Cuando existe una aplicación compañera, las compras integradas son universales, así que lo comprado una vez está disponible en los dos dispositivos.',
        'Para los jugadores, la pregunta útil es más sencilla: ¿el juego funciona solo o es un mando a distancia del teléfono? Un juego independiente es el que puedes usar de paseo dejando el teléfono en casa. OutBrick tiene un juego independiente para Apple Watch, junto a versiones para iPhone, iPad, Mac, Apple TV y Apple Vision Pro. El progreso está en tu iCloud, así que un dispositivo nuevo con la misma cuenta retoma donde se quedó el anterior.',
        'Si pruebas puzles en la muñeca, esta es la lista breve que utilizo. La mayoría pasa algunas comprobaciones y falla otras; los que pasan las seis suelen quedarse en el reloj.',
      ], bullets: ['Todo el tablero se entiende de un vistazo, sin desplazarse.', 'Las piezas tienen al menos el tamaño de la yema del dedo.', 'Todo lo que hace la Digital Crown también puede hacerse al tacto.', 'Bajar la muñeca a mitad del tablero no cuesta nada.', 'Cada respuesta háptica significa una cosa y no es constante.', 'El juego funciona sin tener el teléfono cerca.'] },
    }, pullQuote: 'Una cuenta atrás en un puzle de muñeca castiga justo lo que define el dispositivo: apartar la mirada.',
    faqs: [
      { question: '¿Qué hace bueno a un puzle para Apple Watch?', answer: 'Un tablero que entiendas de un vistazo, piezas grandes para tocarlas con la yema del dedo, ausencia de reloj y guardado después de cada movimiento para poder bajar la muñeca cuando quieras. La respuesta háptica ayuda cuando cada patrón tiene un significado y se usa con moderación.' },
      { question: '¿Los juegos de Apple Watch necesitan un iPhone?', answer: 'No siempre. Apple permite publicar aplicaciones solo para reloj y aplicaciones instalables y utilizables con independencia de su compañera de iPhone. La comprobación más sencilla es probar el juego con el teléfono fuera de alcance.' },
      { question: '¿OutBrick está en Apple Watch?', answer: 'Sí. OutBrick tiene un juego independiente para Apple Watch y también funciona en iPhone, iPad, Mac, Apple TV y Apple Vision Pro.' },
      { question: '¿Los juegos del reloj pueden utilizar la Digital Crown?', answer: 'Sí. Las aplicaciones reciben sus giros y pueden usarlos para desplazarse, seleccionar o ajustar valores. Las pulsaciones se reservan al sistema, y Apple pide que todo lo hecho con la corona también pueda hacerse al tacto.' },
    ],
  },
  'apple-vision-pro-puzzle-games': {
    title: 'Puzles en Apple Vision Pro: diseñar para el espacio', dek: 'Comodidad, mirada y pellizco, ventanas o inmersión, juego sentado y piezas legibles: qué funciona en Apple Vision Pro.',
    imageAlt: 'Tres ventanas flotantes redondeadas muestran un tablero real de OutBrick y dos pueblos de ladrillo ante un cielo violeta suave, con Vio y Sprout debajo',
    tags: ['juegos de puzles para Vision Pro', 'juegos para Apple Vision Pro', 'visionOS', 'diseño de juegos'],
    intro: 'Un puzle en Apple Vision Pro parte de un lugar poco habitual. El tablero ya no tiene un borde fijado por el cristal: flota donde lo coloques, al tamaño que parezca adecuado, y seleccionas las cosas mirándolas. Esa libertad mejora algunos hábitos antiguos de los puzles y empeora mucho otros. OutBrick funciona en Apple Vision Pro, pero este artículo trata del espacio de diseño en general, a partir de las Human Interface Guidelines de Apple y de lo que creemos que hace cómodo jugar más de unos minutos.',
    keyTakeaways: ['La comodidad va primero. Apple aconseja mantener el contenido delante, a una distancia cómoda, y permitir usarlo con las manos en el regazo.', 'Mirar es apuntar, así que las piezas necesitan espacio alrededor y formas redondeadas en las que la vista pueda detenerse.', 'La mayoría de los puzles pertenecen a una ventana. La inmersión puede merecer la pena durante un momento y rara vez durante todo el juego.'],
    sections: {
      'comfort-first': { title: 'Comodidad antes que espectáculo', paragraphs: [
        'La introducción de Apple a la plataforma empieza por la ergonomía por una razón. Quienes llevan Vision Pro ven todo, real y virtual, a través de las cámaras del dispositivo, y Apple considera primordial la comodidad visual. Aconseja mostrar el contenido dentro del campo de visión, evitar lugares que obliguen a girar la cabeza, evitar movimiento brusco o demasiado rápido y admitir gestos con las manos apoyadas en el regazo o a los lados.',
        'Los puzles están bien situados para cumplirlo. Un tablero es un objeto quieto que espera. Nada necesita volar junto a la cabeza ni obligar a levantarse. El riesgo es la tentación contraria: usar el espacio extra para hacer todo más grande, cercano y ajetreado de lo necesario. Un tablero que llena la vista obliga a los ojos a recorrerlo, y una celebración con partículas que pasan junto a los hombros es justo el movimiento que Apple pide evitar.',
        'La distancia importa tanto como el tamaño. Apple propone colocar el contenido que se lee o usa durante un tiempo a al menos un metro y reservar lo muy cercano para interacciones breves. Un puzle se mira durante bastante tiempo, por lo que corresponde a una distancia de lectura y no al alcance del brazo.',
      ] },
      'gaze-and-pinch': { title: 'Mirar es apuntar', paragraphs: [
        'En Vision Pro, normalmente se apunta a un objeto mirándolo y se selecciona con un gesto indirecto, como juntar índice y pulgar, con la mano apoyada donde esté. El sistema resalta lo que miras para que lo confirmes antes del gesto. Para proteger la privacidad, visionOS no dice a una aplicación dónde miras antes de seleccionar.',
        'Eso tiene consecuencias directas para un tablero. Los ojos hacen movimientos pequeños y rápidos incluso al mirar un punto, de modo que cuesta seleccionar objetivos amontonados. Apple propone al menos dieciséis puntos de espacio alrededor de elementos interactivos o centros separados al menos sesenta puntos. También recomienda formas redondeadas porque la vista se dirige a las esquinas y cuesta mantenerla en el centro de una forma con bordes marcados. Una cuadrícula densa de casillas cuadradas pegadas es casi el peor caso. Las esquinas redondeadas, un poco de espacio y un resaltado claro encajan con la plataforma.',
        'También es posible el contacto directo: puedes extender la mano y tocar un objeto virtual. Apple señala que puede cansar, sobre todo si está a la altura de los ojos o por encima, y recomienda reservarlo para objetos cercanos y periodos breves. En un juego de muchos tableros, los gestos indirectos deberían ser la opción por defecto, con el toque directo disponible para quien lo prefiera.',
      ] },
      'window-or-immersive': { title: 'Primero una ventana, inmersión por elección', paragraphs: [
        'Las aplicaciones de visionOS empiezan en el espacio compartido, donde varias aplicaciones conviven en ventanas que puedes mover. Una aplicación también puede pasar a un espacio completo, donde es la única activa, y elegir cuánto sustituye de la habitación. La inmersión mixta combina contenido con el entorno real; la progresiva sustituye parte y la completa, todo. En una experiencia progresiva se gira la Digital Crown para decidir cuánto ver.',
        'Apple aconseja encontrar el mínimo grado de inmersión que necesita cada momento y preferir iniciar en el espacio compartido o en inmersión mixta para que cada persona elija cuándo ir más allá. En la mayoría de los puzles eso apunta a una ventana. Un tablero es algo contenido y dirigido por interfaz, que es lo que Apple indica para las ventanas, y permite mantener a la vista una bebida, una conversación u otra aplicación. Apple también advierte contra abrir demasiadas ventanas, porque abarrotan la habitación y dificultan mover una aplicación.',
        'La inmersión puede ganarse su sitio. Terminar un capítulo o ver el mapa completo son momentos en que entrar brevemente en un espacio más amplio puede sentirse como recompensa. La prueba es si lo has elegido y puedes salir fácilmente.',
      ] },
      'seated-play': { title: 'Hecho para permanecer sentado', paragraphs: [
        'Vision Pro acerca el contenido a las personas en vez de pedirles desplazarse, y Apple aconseja permitir usar una aplicación con poco o ningún movimiento físico salvo que sea esencial. En un puzle es fácil, porque deslizar una pieza no requiere caminar. También importa por seguridad: Apple dice que no debe usarse mientras se conduce y que no está diseñado para moverse cerca de peligros como escaleras, balcones o calles.',
        'Jugar sentado también cambia el ritmo. En un sofá o escritorio quizá juegues más que con un teléfono en una cola, y ahí cuentan los límites justos. Un juego sin reloj, con un límite de movimientos mostrado desde el principio, deja pensar tanto como quieras. OutBrick no tiene ninguna cuenta atrás y cada tablero muestra su objetivo y límite de movimientos desde el primer toque.',
        'Apple también indica que puedes mantener pulsada la Digital Crown en cualquier momento para volver a poner el contenido delante, así que la aplicación no necesita un control propio. Un puzle que permanece donde lo colocaste y regresa cuando lo pides está haciendo lo correcto.',
      ] },
      'legible-pieces': { title: 'Piezas que se pueden interpretar', paragraphs: [
        'La legibilidad funciona de otra manera cuando un punto ya no es un número fijo de píxeles. visionOS define el punto como un ángulo, y las ventanas usan escala dinámica: crecen al alejarse y se reducen al acercarse, por lo que parecen del mismo tamaño a cualquier distancia. Por la misma razón, Apple recomienda gráficos vectoriales en juegos para que sigan nítidos al cambiar la escala.',
        'Las recomendaciones de Apple para juegos indican un texto por defecto de diecisiete puntos en visionOS y un mínimo de doce, y botones por defecto de 60 × 60 puntos con un mínimo de 28 × 28. La profundidad también exige moderación. Apple desaconseja dar profundidad al texto, que cuesta más leer cuando parece flotar sobre el fondo, y señala que cada cambio de profundidad obliga a reenfocar. Un tablero tranquilo y claro con un poco de profundidad en las piezas suele leerse mejor que una pila de capas flotantes.',
        'El color tiene la misma responsabilidad de accesibilidad que en cualquier sitio. Apple Vision Pro admite VoiceOver, Control por botón, Control de permanencia y otras funciones de asistencia; un puzle que ordena por color debería añadir otra señal, como una forma en cada pieza. Tratamos ese principio en [accesibilidad mediante color y forma](/blog/color-shape-accessibility). Antes de elegir un puzle para Vision Pro, conviene comprobarlo con esta lista.',
      ], bullets: ['Se puede jugar sentado, con las manos en el regazo.', 'El tablero está a una distancia cómoda y permanece donde lo colocas.', 'Las piezas están espaciadas, son redondeadas y se resaltan claramente al mirarlas.', 'La inmersión se ofrece, nunca se impone.', 'No hay reloj, así que pensar es gratis.', 'El color nunca es la única forma de distinguir piezas.'] },
    }, pullQuote: 'Un tablero es un objeto quieto que espera.',
    faqs: [
      { question: '¿Hay puzles para Apple Vision Pro?', answer: 'Sí. OutBrick es uno: funciona en Apple Vision Pro, iPhone, iPad, Mac y Apple TV, y tiene un juego independiente para Apple Watch.' },
      { question: '¿Cómo se controlan los juegos en Apple Vision Pro?', answer: 'Principalmente con ojos y manos. Miras un objeto para apuntar y juntas índice y pulgar para seleccionarlo. También puedes tocar objetos cercanos directamente, y Apple enumera mandos, teclados, ratones, trackpads y mandos espaciales como otras opciones para juegos.' },
      { question: '¿Los juegos de Vision Pro tienen que ser inmersivos?', answer: 'No. Las aplicaciones empiezan en el espacio compartido, en ventanas junto a otras aplicaciones, y Apple recomienda usar solo la inmersión que necesita cada momento. En la mayoría de los puzles, una ventana es el punto de partida adecuado.' },
      { question: '¿Tengo que levantarme o moverme para jugar?', answer: 'No en un puzle bien diseñado. Apple aconseja permitir jugar con poco o ningún movimiento físico mediante gestos que puedas hacer con las manos apoyadas en el regazo.' },
    ],
  },
  'games-like-tetris': {
    title: 'Juegos como Tetris: qué hace durar a un puzle de bloques', dek: 'Reglas sencillas, un tablero legible, dificultad justa y un ciclo corto: qué hace perdurar a los puzles de bloques y cómo juzgar cualquier juego parecido a Tetris.',
    imageAlt: 'Ladrillos con espigas rojos, amarillos, turquesas, violetas, azules y verdes caen hacia un tablero real de OutBrick sobre fondo índigo, observados por Bricko y Zippy',
    tags: ['juegos como Tetris', 'juegos de puzles de bloques', 'diseño de puzles', 'Tetris'],
    intro: 'Busca juegos como Tetris y encontrarás cientos de puzles de bloques: piezas que caen, que se deslizan, que colocas en una cuadrícula o que ordenas por color. La mayoría se olvida una semana después de instalarse. Unos pocos se juegan durante años. Nosotros hacemos uno, OutBrick, un puzle de ladrillos deslizantes, así que no somos neutrales y no clasificaremos los juegos ajenos. Lo que podemos hacer es exponer las cualidades de diseño que ayudan a perdurar, con Tetris como referencia, para que juzgues por ti mismo cualquier juego del género.',
    keyTakeaways: ['Los puzles de bloques que perduran tienen una regla que se aprende en segundos y un tablero cuyo estado completo se entiende de un vistazo.', 'Dificultad justa significa que cada derrota se puede atribuir a una decisión, tanto si la presión viene de la velocidad, como en Tetris, como de un límite de movimientos.', 'Un ciclo breve, desde una pieza hasta un tablero, permite que un puzle de bloques encaje en el día durante años.'],
    sections: {
      'where-the-genre-starts': { title: 'Dónde empieza el género', paragraphs: [
        'La historia de The Tetris Company fecha la primera versión en 1984, cuando Alexey Pajitnov la creó en un ordenador Electronika 60 de Moscú. Después atravesó una larga maraña de negociaciones de derechos y llegó a la Game Boy de Nintendo, que se vendía con Tetris incluido. La historia la cuenta el titular de los derechos, así que las cifras de ventas son las de la empresa, pero el recorrido está bien establecido. Ya examinamos [cómo el pequeño conjunto de reglas de Tetris sigue abriendo posibilidades](/blog/tetris-simple-rules-infinite-variation).',
        'Tetris creó más una familia que una fórmula: piezas de casillas cuadradas, una cuadrícula que se llena y una regla que libera espacio al completar un patrón. Los juegos similares varían casi todo eso. Unos dejan caer piezas por gravedad, otros permiten colocarlas en cualquier lugar y otros ofrecen piezas fijas para deslizar por un tablero lleno hacia una salida. Los que perduran comparten unas pocas cualidades que tienen poco que ver con la variante elegida.',
      ] },
      'simple-rules': { title: 'Una regla que se aprende en segundos', paragraphs: [
        'Tetris se explica en una frase: encaja las piezas que caen para llenar y eliminar filas. Casi todos los puzles de bloques duraderos tienen una regla de ese tamaño, y su profundidad nace de las situaciones que crea. Cuando un juego necesita un capítulo de tutorial antes del primer nivel real, suele ser porque las reglas cargan con un peso que debería llevar el tablero.',
        'Las reglas pequeñas también resisten la fuerza bruta, parte de lo que las mantiene interesantes. Breukelaar y sus colegas demostraron que incluso la versión de Tetris en la que conoces de antemano todas las piezas es NP-completa para objetivos como eliminar el máximo de filas. Los puzles de bloques deslizantes son aún más difíciles en sentido formal: Hearn y Demaine demostraron que el caso general es PSPACE-completo. Para los jugadores significa que ningún atajo conocido resuelve todos los tableros y cada uno es un problema nuevo.',
        'La regla de OutBrick es igual de pequeña. Desliza un ladrillo y avanza hasta que algo lo detiene; saca cada ladrillo por la puerta de su color. Durante un juego largo llegan piezas nuevas, como llaves y cerraduras, ladrillos congelados, generadores, cintas transportadoras y cajas, pero cada una es un ángulo nuevo de la misma regla, no otra regla que aprender.',
      ] },
      'readable-state': { title: 'Un tablero que puedes interpretar', paragraphs: [
        'Mira una partida de Tetris en cualquier momento y tienes todo el estado delante: la pila, los huecos, la pieza actual y la siguiente. Nada importante está oculto. Esa claridad permite planificar, y planificar hace que un puzle se sienta como pensar en vez de tener suerte.',
        'La investigación de jugadores de Tetris muestra cuánto reside la habilidad en observar. Kirsh y Maglio vieron que muchas veces giraban y desplazaban piezas para ver antes sus opciones, no para acercarlas a donde acabarían. Lo llamaron acciones epistémicas: movimientos para facilitar el pensamiento en lugar de cambiar la posición. Lindstedt y Gray midieron 39 rasgos de juego de 240 participantes que jugaron una hora y encontraron que los expertos se distinguían por una combinación integrada de percepción, decisión y acción, que llamaron la mano de la mente y el ojo de la mente.',
        'Para quien diseña puzles de bloques, la lección es facilitar entender el estado y abaratar los experimentos. Ayudan colores claros reforzados por formas, piezas cuyo aspecto muestre lo que hacen y un deshacer que invite a probar. En OutBrick, el modo para daltonismo está activado por defecto y pone un símbolo en cada ladrillo y puerta, y el primer deshacer de cada tablero es gratis.',
      ] },
      'fair-difficulty': { title: 'Dificultad que se siente justa', paragraphs: [
        'Tetris se vuelve más difícil al acelerarse. Funciona porque las reglas no cambian: pierdes por tus propias colocaciones bajo presión y ves exactamente dónde salió mal la pila. Dificultad justa significa que, cuando pierdes, puedes ver por qué. La injusta es un tablero que nunca podía despejarse, un giro imposible de anticipar o una regla revelada solo después de costarte algo.',
        'La velocidad es una clase de presión y hay otras. Un puzle de deslizar o colocar puede pedir eficiencia en vez de reflejos, con un límite de movimientos en lugar de reloj. Cambia la intensidad del Tetris de alto nivel por tiempo para pensar, adecuado para otro ánimo y a menudo otra persona. Ambos son justos cuando el límite se ve antes de empezar.',
        'La justicia también depende de que todos los tableros sean posibles. Un puzle, hecho a mano o generado, debería comprobarse antes de mostrarlo. Un solucionador despejó cada uno de los 2000 tableros de OutBrick antes de publicarlos, y cada tablero muestra su objetivo y límite de movimientos desde el primer toque. La dificultad debería subir después en pasos perceptibles, introduciendo ideas de una en una; nuestro artículo sobre [una curva de dificultad más amable](/blog/kinder-difficulty-curve) explica cómo.',
      ] },
      'short-loop': { title: 'Un ciclo que encaja en el día', paragraphs: [
        'La unidad más pequeña de Tetris es una pieza: unos segundos de decisión. La siguiente es una partida, corta o larga según la habilidad. Esa estructura de unidades anidadas explica buena parte de su duración. Puedes jugar una partida mientras hierve el agua, y el mismo juego puede mantener tu atención durante una hora.',
        'Los puzles de bloques duraderos suelen conservar una unidad corta en su núcleo. Un tablero o ronda debería poder terminarse en unos minutos, tener un final claro y no costar nada parar después. Las rachas, los objetivos diarios y los eventos pueden rodear ese núcleo, pero cuando dictan cuánto juegas, el juego ha cambiado su ciclo por un horario. Un tablero de OutBrick dura unos dos minutos y despejarlo no cuesta nada: esa es la escala que creemos más adecuada para el género. Hay más en [por qué los puzles de dos minutos sientan bien](/blog/why-two-minute-puzzles-feel-good).',
        'Sea cual sea tu tipo preferido de puzle de bloques, estas son las preguntas que conviene hacer en los primeros diez minutos con uno nuevo. Si los puzles deslizantes son nuevos para ti, [cómo resolver rompecabezas de bloques deslizantes](/blog/how-to-solve-sliding-block-puzzles) es un buen comienzo.',
      ], bullets: ['¿Podrías explicar la regla a un amigo en una frase?', '¿Ves de una vez todo lo importante del tablero?', 'Cuando pierdes, ¿puedes señalar el movimiento que lo causó?', '¿Se sabe que cada nivel tiene solución y se muestran los límites desde el principio?', '¿Puedes terminar una ronda en unos minutos y parar sin perder nada?', '¿Llegan las mecánicas nuevas de una en una, como variaciones de la misma regla?'] },
    }, pullQuote: 'Dificultad justa significa que, cuando pierdes, puedes ver por qué.',
    faqs: [
      { question: '¿Qué tipos de juegos se parecen a Tetris?', answer: 'Tetris pertenece a una amplia familia de puzles de bloques: juegos de bloques que caen, juegos donde colocas piezas en una cuadrícula y puzles deslizantes donde piezas fijas se mueven por un tablero lleno. OutBrick es un puzle de ladrillos deslizantes para ordenar colores. En lugar de confiar en una clasificación, aplica la lista de este artículo al juego que estés considerando.' },
      { question: '¿Qué diferencia hay entre bloques que caen y bloques deslizantes?', answer: 'En un juego de bloques que caen siguen llegando piezas y la presión suele venir de la velocidad. En uno deslizante, las piezas suelen estar todas desde el principio y el desafío es encontrar el orden para despejarlo, a menudo dentro de un límite de movimientos.' },
      { question: '¿Por qué Tetris ha durado tanto?', answer: 'Una regla que aprendes en segundos, un tablero cuyo estado completo es visible, dificultad que viene de la velocidad y no de reglas ocultas y una ronda lo bastante corta para unos minutos libres. The Tetris Company fecha la primera versión en 1984.' },
      { question: '¿OutBrick se parece a Tetris?', answer: 'Comparte los rasgos de la familia: ladrillos de casillas cuadradas, una regla pequeña y rondas breves. La diferencia es que los ladrillos de OutBrick se deslizan en vez de caer, no hay reloj y cada tablero tiene un límite de movimientos.' },
    ],
  },
  'are-puzzle-games-good-for-your-brain': {
    title: '¿Los puzles son buenos para el cerebro? Qué dice la ciencia', dek: 'Los puzles se venden como entrenamiento cerebral. Esto muestran los estudios sobre memoria, envejecimiento y ánimo, y esto nadie puede prometer.',
    imageAlt: 'Sprout y Peach a los lados de un tablero real de OutBrick en modo para daltonismo en iPhone, con ladrillos con espigas en una pared índigo',
    tags: ['son los puzles buenos para el cerebro', 'entrenamiento cerebral', 'puzles y memoria', 'investigación de juegos de puzles'],
    intro: 'Pocas afirmaciones se repiten tanto en los juegos: los puzles mantienen joven el cerebro. Suena bien y se construyó toda una industria alrededor. La investigación es más interesante y más modesta que la publicidad. Hacemos un juego de puzles, OutBrick, así que tenemos motivos para querer que la respuesta sea un sí rotundo. No lo es, y preferimos contarte lo que apoya la evidencia a venderte algo que no sostiene.',
    keyTakeaways: ['Practicar un puzle mejora de forma fiable tu habilidad en ese puzle; la evidencia de que las ganancias se extiendan al pensamiento cotidiano es débil.', 'Quienes hacen puzles a menudo suelen puntuar mejor en pruebas cognitivas, pero esos estudios no pueden mostrar que los puzles lo causen.', 'Los motivos mejor respaldados para jugar son disfrutar, una breve mejora del ánimo y una forma agradable de descansar la atención.'],
    sections: {
      'the-promise': { title: 'De dónde salió la promesa', paragraphs: [
        'En los años 2000 y principios de los 2010, el «entrenamiento cerebral» se volvió una categoría de producto. Aplicaciones y juegos portátiles prometían mejor memoria, pensamiento más rápido y protección frente al deterioro, a menudo con una puntuación diaria para demostrarlo. El mensaje era sencillo: el cerebro es un músculo y los puzles son el gimnasio.',
        'En 2014, el Stanford Center on Longevity y el Max Planck Institute for Human Development publicaron una declaración de un grupo de científicos que cuestionaba esas promesas. Concluían que las ganancias de los juegos cerebrales suelen ser pequeñas, limitadas y breves, y que había poca evidencia de mejoras en capacidades cotidianas o prevención del alzhéimer. La declaración fue discutida y una carta rival de otros investigadores defendió que algunas formas de entrenamiento sí tienen respaldo. La propia discusión es una pista: no estamos ante un sí establecido.',
        'Dos años después, la Comisión Federal de Comercio estadounidense llegó a un acuerdo con Lumos Labs, la empresa de Lumosity, por publicidad que afirmaba mejorar el rendimiento laboral y escolar y retrasar el deterioro relacionado con la edad. La conclusión de la FTC trataba de lo anunciado sin respaldo suficiente, no era un veredicto científico de que los juegos no hagan nada. Sí dejó claro algo: las afirmaciones de protección cerebral necesitan evidencia y esa evidencia no estaba.',
      ] },
      'near-and-far': { title: 'Mejorar en el juego no equivale a pensar mejor en todo', paragraphs: [
        'La revisión más exhaustiva de la pregunta es la de Daniel Simons y sus colegas de 2016 en Psychological Science in the Public Interest. Examinaron los estudios citados por las propias empresas de entrenamiento cerebral. El patrón era consistente: mejoría en las tareas practicadas, menos en las muy relacionadas y poca evidencia de mejora en tareas distintas o en el pensamiento cotidiano.',
        'Los investigadores lo llaman diferencia entre transferencia cercana y lejana. Si juegas mucho a puzles de bloques deslizantes, mejoras en ellos: detectas antes los obstáculos y planificas salidas con más antelación. Es aprendizaje real. Lo que la evidencia no muestra es que se extienda a recordar dónde aparcaste o seguir una conversación compleja.',
        'La revisión también encontró que ninguno de los estudios examinados cumplía todos los criterios de buenos ensayos establecidos por los autores. Muestras pequeñas, grupos de comparación débiles y la posibilidad de que quienes esperan mejorar simplemente se esfuercen más en la prueba posterior dificultan confiar en resultados positivos. No es motivo para pensar que los puzles sean malos. Es motivo para desconfiar de quien cuantifica cuánto rejuvenecerán tu cerebro.',
      ] },
      'puzzlers-score-better': { title: 'Quienes hacen puzles puntúan mejor. Esta es la salvedad', paragraphs: [
        'Algunos de los resultados más citados proceden del estudio británico PROTECT. En 2019, Helen Brooker y sus colegas informaron sobre más de 19 000 adultos de cincuenta a noventa y tres años que hicieron pruebas cognitivas en línea e indicaron con qué frecuencia hacían puzles de palabras o números. Cuanto más a menudo decían hacerlos, mejor tendían a puntuar en todas las medidas. Quienes nunca los hacían obtuvieron las puntuaciones más bajas.',
        'Es un estudio amplio y cuidadoso, y sigue siendo una fotografía de un momento. Muestra que puzles y buenas puntuaciones van juntos, no cuál causa al otro. Quizá quienes piensan con más agilidad simplemente disfruten más de los puzles y los hagan con mayor frecuencia. Expertos independientes señalaron precisamente eso al publicarse los estudios, y la difundida afirmación de cerebros «ocho años más jóvenes» vino de la prensa, no de los propios artículos.',
        'Los ensayos, que asignan a las personas una actividad, permiten abordar causa y efecto y son más escasos. Uno interesante, de Devanand y sus colegas en 2022, asignó al azar a 107 personas con deterioro cognitivo leve crucigramas en la web o un conjunto de juegos cerebrales informatizados durante 78 semanas. El grupo de crucigramas obtuvo una ligera ventaja en la medida cognitiva principal. No hubo un grupo que no hiciera nada, por lo que el ensayo dice que los crucigramas superaron a esos juegos, no que ninguno supere a la vida normal. También recuerda que un «juego cerebral informatizado» no es automáticamente la mejor opción.',
      ] },
      'what-trials-show': { title: 'Qué han encontrado los ensayos más largos', paragraphs: [
        'El ensayo prolongado más conocido es ACTIVE, que incorporó a 2832 adultos mayores en Estados Unidos y les dio diez sesiones de aproximadamente una hora de entrenamiento en memoria, razonamiento o velocidad de procesamiento, con algunos refuerzos posteriores. Diez años después, los grupos de razonamiento y velocidad seguían teniendo más probabilidades que el control de mantener o superar su nivel inicial en esas capacidades. La ventaja del grupo de memoria había desaparecido. Los participantes entrenados también declararon menos dificultad en actividades diarias, aunque era una valoración propia.',
        'Importan dos puntos. Primero, ACTIVE entrenó habilidades específicas con ejercicios creados para ello, no con puzles casuales, por lo que una aplicación no puede apropiarse sin más de sus resultados. Segundo, incluso este ensayo bien realizado muestra efectos modestos y específicos. Quien promete una protección amplia con unos minutos diarios está afirmando mucho más de lo que sostienen los mejores estudios.',
        'Los estudios pequeños de aplicaciones corrientes de puzles son aún más mixtos. Un ensayo piloto de Urwyler y sus colegas hizo jugar a adultos sanos veinte minutos al día en tableta y encontró mejora en una medida de atención, pero no cambios en pensamiento general, ánimo o calidad de vida, con una muestra de once personas. Es un estudio de viabilidad, no una prueba a favor o en contra.',
      ] },
      'honest-reasons': { title: 'Los motivos honestos para jugar', paragraphs: [
        'Si los puzles no son una vitamina cerebral demostrada, ¿por qué jugarlos? Porque los motivos que se sostienen son buenos. Ofrecen un problema acotado, un desafío pequeño y justo y la satisfacción de resolverlo. Las sesiones cortas de juego casual se han relacionado con mejor ánimo tras una tarea exigente, algo que examinamos en [por qué un puzle de dos minutos puede sentirse como una pausa reparadora](/blog/why-two-minute-puzzles-feel-good). Es una afirmación modesta y basta.',
        'La declaración científica de 2014 terminaba con un consejo que merece repetirse: mantén actividad física, actividad mental y conexión social. Un puzle puede ser una pequeña parte de la segunda, sobre todo si lo compartes con alguien. No sustituye a las otras dos y ningún juego debería decirte que lo hace.',
        'Diseñamos OutBrick pensando en eso. No hace afirmaciones de salud. Sus tableros son breves y tienen solución, sin reloj, para pensar en vez de correr. Si se vuelve un pequeño placer diario, ese es todo el propósito. Si quieres mejorar, eso también es aprendizaje real y te ayudará nuestra guía de [cómo resolver rompecabezas de bloques deslizantes](/blog/how-to-solve-sliding-block-puzzles).',
      ], bullets: ['Desconfía de cualquier juego que prometa hacerte más inteligente o prevenir el deterioro.', 'Elige puzles porque los disfrutas; el disfrute mantiene el hábito.', 'Varía: los nuevos tipos de problemas te exigen más que repetir uno ya dominado.', 'Acompaña los puzles de movimiento, sueño y tiempo con otras personas, no los uses en su lugar.'] },
    }, pullQuote: 'Las personas mejoraron en las tareas practicadas. La evidencia de que la mejora se extendiera más allá es escasa.',
    faqs: [
      { question: '¿Los puzles mejoran la memoria?', answer: 'Mejoran de forma fiable tu habilidad en los puzles que practicas. Las revisiones del entrenamiento cerebral han encontrado poca evidencia de que esas ganancias se trasladen a la memoria o el pensamiento cotidianos.' },
      { question: '¿Los puzles pueden prevenir la demencia?', answer: 'Ningún estudio ha demostrado que los juegos de puzles prevengan la demencia. Quienes hacen puzles a menudo suelen puntuar mejor en pruebas cognitivas, pero esos estudios no pueden demostrar que los puzles lo causen. Los reguladores han actuado contra empresas que afirmaban lo contrario.' },
      { question: '¿Los crucigramas son mejores que las aplicaciones de entrenamiento cerebral?', answer: 'En un ensayo de 78 semanas con personas con deterioro cognitivo leve, los crucigramas web superaron ligeramente a un conjunto de juegos cerebrales informatizados en la medida cognitiva principal. No hubo un grupo sin entrenamiento, así que no muestra que ninguna opción supere a no hacer ninguna.' },
      { question: '¿OutBrick es un juego de entrenamiento cerebral?', answer: 'No. OutBrick es un puzle de ladrillos deslizantes para ordenar colores, creado para disfrutar, sin afirmaciones de salud. Sus tableros son breves, tienen solución y no tienen reloj.' },
    ],
  },
  'puzzle-games-for-older-adults': {
    title: 'Puzles para adultos mayores: qué conviene buscar', dek: 'Texto legible, botones amplios, ausencia de reloj y colores distinguibles: una lista práctica para elegir un puzle a los 50, 70 o 90 años.',
    imageAlt: 'Peach y Bloo a los lados de un tablero real de OutBrick en iPad, con grandes ladrillos con espigas sobre una pared azul',
    tags: ['juegos de puzles para adultos mayores', 'juegos para personas mayores', 'puzles accesibles', 'juegos de puzles para iPad'],
    intro: 'Muchas personas que juegan a puzles en teléfonos y tabletas son abuelos, y muchos juegos claramente no se diseñaron pensando en ellas: botones diminutos, texto pálido, una cuenta atrás en la esquina y colores que se confunden. Esta guía práctica sirve para elegir un puzle que funcione bien a cualquier edad, tanto si lo eliges para ti como si preparas una tableta para tu madre o tu padre. Hacemos OutBrick y lo usamos de ejemplo, pero cada punto de la lista sirve para cualquier juego.',
    keyTakeaways: ['Los adultos mayores forman una gran parte del público de puzles móviles y la mayoría juega en un teléfono o tableta.', 'Comprueba antes que nada el tamaño de texto y botones, el contraste de color y la ausencia de reloj.', 'Activa primero los ajustes de accesibilidad del iPhone y iPad y después mira qué juegos los respetan.'],
    sections: {
      'who-plays': { title: 'Los jugadores mayores son una gran parte del público', paragraphs: [
        'La investigación de AARP de 2023 encontró que el 45 % de los estadounidenses de cincuenta años o más juega a videojuegos, unos 52 millones, y el 84 % de ellos juega en un teléfono. Los puzles y juegos de lógica eran el tipo más popular, usado por el 73 % de esos jugadores, por delante de cartas, fichas y palabras. Casi la mitad juega a diario.',
        'Un estudio posterior de AARP de 2024 preguntó por accesibilidad. Aproximadamente dos tercios dijeron que los cambios asociados a la edad, sobre todo en la visión, afectan a su forma de jugar, y la mitad había encontrado al menos un problema de accesibilidad. Entre las funciones más solicitadas estaban el texto ajustable, desactivar efectos distractores, aprender a empezar fácilmente y ajustar la dificultad. Las cifras proceden de Estados Unidos, pero los problemas son universales.',
      ] },
      'readable': { title: 'Texto que puedas leer y botones que puedas tocar', paragraphs: [
        'El texto pequeño y las zonas táctiles pequeñas fueron las principales barreras en las pruebas prolongadas de usabilidad de Nielsen Norman Group con mayores de 65 años; los participantes mayores cometieron más errores que los jóvenes en las mismas tareas. Los juegos no son distintos. Un nivel fácil de resolver pero difícil de ver, o un botón que no aciertas a tocar, convierte un puzle relajante en una tarea pesada.',
        'Las pautas de Apple dan un tamaño por defecto de 44 × 44 puntos para controles de iPhone y iPad y piden permitir ampliar mucho el texto, idealmente con los tamaños de Dynamic Type del sistema. Las pautas de accesibilidad web fijan un mínimo menor de 24 × 24 píxeles para los objetivos, con 44 × 44 en su nivel más estricto. No necesitas medir: si acabas tocando dos veces o entrecerrando los ojos, el juego es demasiado pequeño para ti.',
        'La prueba más rápida es cambiar el tamaño de texto del sistema antes de juzgar un juego. En iPhone y iPad ve a Ajustes, Accesibilidad, Pantalla y tamaño del texto, y activa Texto más grande. Después abre el juego. Los buenos juegos crecen. Otros ignoran por completo el ajuste. En OutBrick, el texto más grande se adapta en toda la aplicación y, en iPad, los propios ladrillos son lo bastante grandes para tocarlos cómodamente.',
      ] },
      'colour': { title: 'Colores que puedas distinguir', paragraphs: [
        'La visión del color cambia con la edad, y no como muchos esperan. El cristalino amarillea con el tiempo y los colores más difíciles de separar suelen ser azules, violetas y algunos amarillos y verdes, no el rojo y verde del daltonismo común. Tamura y Sato encontraron que los adultos mayores tardaban mucho más que los jóvenes en localizar un objetivo que solo difería de su entorno en el eje azul-amarillo.',
        'Eso importa mucho en juegos de ordenar colores y combinar tres, que suelen apoyarse justo en esos tonos. Busca un juego que refuerce el color con otra cosa: un símbolo, una forma o un patrón en cada pieza. El ajuste Diferenciar sin color de Apple, en Pantalla y tamaño del texto, pide hacerlo y los buenos juegos lo respetan. OutBrick va más allá: su modo para daltonismo está activado por defecto y coloca un símbolo distinto en cada ladrillo y su puerta, así que el color nunca es la única pista. Escribimos más en [por qué el color no debe ser la única pista de un puzle](/blog/color-shape-accessibility).',
      ] },
      'no-rush': { title: 'Sin reloj, sin prisas, sin sorpresas', paragraphs: [
        'Una cuenta atrás es de lo menos amable que un juego puede añadir para una persona mayor. Los tiempos de reacción aumentan con la edad y un temporizador convierte un puzle de pensar en una prueba de reflejos. Busca juegos sin reloj en los niveles normales o con un límite de movimientos, para que pensar sea gratis. OutBrick no tiene ningún reloj; cada tablero muestra su límite antes del primer movimiento.',
        'El movimiento es lo otro que conviene comprobar. Las recompensas parpadeantes, sacudidas de pantalla y transiciones rápidas cansan a muchas personas e incomodan a algunas. En iPhone y iPad, Ajustes, Accesibilidad, Movimiento y Reducir movimiento sustituye desplazamientos y zoom por fundidos suaves en las aplicaciones compatibles. OutBrick respeta Reducir movimiento en todas partes.',
        'Por último, mira cómo gana dinero el juego, porque ahí nacen muchas sorpresas desagradables. Los anuncios que se reproducen solos, ofertas emergentes al fallar y peticiones de compra confunden al empezar y es fácil tocarlos por accidente. El juego debería decir claramente qué cuesta cada cosa. OutBrick enumera [exactamente lo que cuestan vidas, deshacer y anuncios](/#fair) en su inicio: los anuncios son vídeos con recompensa que solo se reproducen cuando pulsas un botón para verlos.',
      ] },
      'checklist': { title: 'Una lista para los primeros diez minutos', paragraphs: [
        '¿Preparas un juego para otra persona? Hacedlo juntos y deja que decida cómo debe verse y sentirse. Activa primero la accesibilidad, inicia sesión en su cuenta de Apple para guardar el progreso y jugad varios niveles lado a lado. Los juegos que disfrutáis juntos también son los más propensos a convertirse en un hábito compartido, un buen motivo por sí mismo. Y una aclaración honesta: los puzles son un placer, no una medicina. Examinamos aparte [qué dice la investigación sobre puzles y cerebro](/blog/are-puzzle-games-good-for-your-brain).',
      ], bullets: ['¿El texto crece al activar Texto más grande?', '¿Puedes tocar todos los botones a la primera, incluidos los pequeños de las esquinas?', '¿Cada pieza se reconoce por forma o símbolo, no solo por color?', '¿Los niveles normales carecen de reloj?', '¿Respeta Reducir movimiento?', '¿Algo se reproduce, aparece o pide dinero sin que pulses un botón?', '¿Puedes parar en cualquier momento sin perder nada?', '¿Funciona sin conexión para que una señal débil no estorbe?'] },
    }, pullQuote: 'Un nivel fácil de resolver pero difícil de ver convierte un puzle relajante en una tarea pesada.',
    faqs: [
      { question: '¿Qué hace adecuado un puzle para adultos mayores?', answer: 'Texto legible que crece con el tamaño del sistema, botones grandes, piezas distinguibles por forma y color, ausencia de cuenta atrás, movimiento tranquilo y ningún anuncio u oferta que aparezca por sí solo.' },
      { question: '¿Es mejor un iPad o un iPhone para puzles?', answer: 'Un iPad ofrece piezas y botones más grandes, que a muchos jugadores mayores les resultan más fáciles de ver y tocar. El teléfono se lleva mejor. Muchos juegos, incluido OutBrick, funcionan en ambos y sincronizan el progreso mediante iCloud.' },
      { question: '¿Qué ajustes del iPhone ayudan a jugar?', answer: 'En Ajustes, Accesibilidad: Pantalla y tamaño del texto para Texto más grande, Texto en negrita y Diferenciar sin color, y Movimiento para Reducir movimiento. Los juegos compatibles se vuelven más legibles y tranquilos.' },
      { question: '¿OutBrick sirve para jugadores mayores?', answer: 'Se diseñó para ello. No hay reloj, el modo para daltonismo está activado por defecto con un símbolo en cada ladrillo, el texto más grande se adapta en toda la aplicación, se respeta Reducir movimiento y funciona en iPhone y iPad.' },
    ],
  },
  'history-of-sliding-block-puzzles': {
    title: 'Historia de los puzles deslizantes: del 15 Puzzle a Rush Hour', dek: 'Una oficina postal en Nueva York, la fiebre de 1880, la falsa reivindicación de un famoso autor de puzles y un puzle de aparcamiento de Tokio: cómo los bloques deslizantes se convirtieron en un clásico.',
    imageAlt: 'Una bandeja clásica del 15 Puzzle con el 14 y el 15 intercambiados junto a un tablero real de OutBrick en iPhone, con Bloo y Sprout',
    tags: ['historia de los puzles de bloques deslizantes', '15 Puzzle', 'Klotski', 'puzle Rush Hour'],
    intro: 'Cada vez que sacas un ladrillo de un tablero lleno de OutBrick juegas a algo muy antiguo. Los puzles de bloques deslizantes existen desde hace casi 150 años y su historia incluye una fiebre nacional, una demostración matemática publicada justo al empezar, una de las falsas atribuciones más duraderas de los puzles y un puzle de aparcamiento de Tokio convertido en habitual de las aulas. Esta es la versión breve, con las fechas conocidas y una indicación clara de las que aún se discuten.',
    keyTakeaways: ['El 15 Puzzle nació en Canastota, Nueva York, y arrasó en Estados Unidos en 1880; Sam Loyd no lo inventó.', 'Casi en cuanto apareció, los matemáticos demostraron que la mitad de las posiciones iniciales nunca puede resolverse.', 'Los puzles tipo Klotski y Rush Hour cambiaron el desafío de ordenar fichas a sacar un bloque, la idea en la que se basa OutBrick.'],
    sections: {
      'before-the-craze': { title: 'Antes de la fiebre', paragraphs: [
        'La idea central de un puzle deslizante es un marco con piezas y espacio insuficiente: solo puedes mover una pieza al hueco. Esa idea ya estaba sobre el papel antes de la versión famosa. Una patente estadounidense concedida a Ernest Kinsey en 1878 describe bloques de puzle que se deslizan dentro de un marco con un hueco.',
        'El puzle que la hizo famosa fue el 15 Puzzle: quince fichas numeradas en una bandeja de cuatro por cuatro con un hueco. La prolongada investigación de Jerry Slocum y Dic Sonneveld, recogida en su libro The 15 Puzzle de 2006, lo atribuye a Noyes Chapman, director de la oficina postal de Canastota, en el estado de Nueva York. A finales de 1879 ya se vendían versiones como Gem Puzzle.',
      ] },
      'fifteen-craze': { title: '1880: el año del 15 Puzzle', paragraphs: [
        'En los primeros meses de 1880, el 15 Puzzle se convirtió en una fiebre. Se extendió por Estados Unidos en semanas y después por Europa, apareciendo en oficinas, salones y columnas de periódicos. Los relatos difieren sobre las semanas exactas, pero en primavera estaba por todas partes y en verano decaía. Chapman solicitó una patente que se rechazó; la razón no es segura, y una explicación probable es que patentes anteriores de bloques deslizantes ya cubrieran la idea.',
        'Parte de la fascinación era que algunas posiciones parecían imposibles, y lo eran. En 1879, William Woolsey Johnson y William Story publicaron notas en el American Journal of Mathematics que mostraban que exactamente la mitad de las disposiciones nunca puede resolverse. El argumento se apoya en la paridad: cada deslizamiento cambia la disposición manteniendo fijo un recuento oculto par o impar, así que no puede alcanzarse una posición con el recuento equivocado, por mucho que se intente.',
        'Ese resultado explica el truco más famoso de su historia. Intercambia solo el 14 y el 15 en una bandeja terminada y tendrás una posición que parece a un movimiento de la solución y en realidad es inalcanzable.',
      ] },
      'sam-loyd': { title: 'La afirmación que engañó a todos', paragraphs: [
        'Durante casi todo el siglo XX se atribuyó el 15 Puzzle a Sam Loyd, el autor de puzles más conocido de Estados Unidos. Loyd decía haberlo inventado y haber ofrecido un gran premio por resolver el imposible intercambio 14–15. Slocum y Sonneveld encontraron que lo afirmó por primera vez en 1891, más de una década después de la fiebre, y lo mantuvo hasta morir en 1911. No hay pruebas de que tuviera nada que ver con la invención ni de que el premio se ofreciera en 1880.',
        'La afirmación perduró porque Loyd era famoso, sus libros se reimprimían mucho y otros autores la repetían. Recuerda que conviene comprobar la historia de los puzles, como cualquier historia, frente a los registros.',
      ] },
      'get-one-block-out': { title: 'De ordenar fichas a sacar un bloque', paragraphs: [
        'La siguiente gran familia cambió el objetivo. En vez de ordenar fichas, había que mover un bloque grande hacia una salida entre otros pequeños. Una patente solicitada por Lewis W. Hardy en 1907 y concedida en 1912 describe diez bloques de distintos tamaños empaquetados en una caja que se mueven solo deslizándose. Un diseño muy relacionado se vendió como Pennant Puzzle.',
        'Después aparecieron puzles similares con muchos nombres. La colección del Smithsonian conserva un Dad’s Puzzler, con derechos de autor de 1926, con un bloque cuadrado grande, varios rectángulos y dos cuadrados pequeños. En muchos países la familia se conoce hoy como Klotski, y en China una versión llamada Huarong Dao cuenta la historia de un general que escapa de una emboscada. Las soluciones mínimas de las disposiciones clásicas rondan los ochenta movimientos, según cómo se cuente uno.',
        'En los años noventa la idea encontró su forma moderna más exitosa. El diseñador japonés Nob Yoshigahara creó un puzle de coches deslizantes llamado Tokyo Parking, y Binary Arts, luego ThinkFun, lo publicó en Estados Unidos en 1996 como Rush Hour. Coches y camiones bloquean una cuadrícula pequeña; los deslizas adelante y atrás hasta que tu coche puede salir. Las tarjetas de desafío graduadas lo convirtieron de un solo puzle en una serie, habitual en aulas y mesas familiares.',
      ] },
      'hard-for-computers': { title: 'Por qué son difíciles incluso para los ordenadores', paragraphs: [
        'Los puzles deslizantes parecen juguetes, pero son objetos serios de la informática. Hasta 1999 no se estableció que cualquier posición resoluble del 15 Puzzle puede terminarse en un máximo de ochenta movimientos de una sola ficha; Korf y Schultze lo confirmaron después con una búsqueda de veintiocho días que encontró exactamente diecisiete posiciones que necesitan los ochenta.',
        'En 2002, Gary Flake y Eric Baum demostraron que la forma general de Rush Hour, en un tablero de cualquier tamaño, es PSPACE-completa, una clase que se cree aún más difícil que los famosos problemas NP-completos. Robert Hearn y Erik Demaine demostraron después, en 2005, que los puzles deslizantes generales también lo son, incluso si cada bloque es el mismo dominó pequeño. En términos sencillos, no hay ningún atajo conocido que resuelva rápidamente todos los tableros, justo lo que mantiene interesante un buen puzle deslizante.',
      ] },
      'where-outbrick-fits': { title: 'Dónde encaja OutBrick', paragraphs: [
        'OutBrick pertenece a la rama de sacar un bloque, con un giro propio: cada ladrillo tiene un destino. Se desliza hasta que algo lo detiene y solo sale por la puerta de su color. Despejar un tablero consiste en averiguar el orden, como con los bloques de Hardy y los coches de Yoshigahara.',
        'Las herramientas modernas ayudan de maneras que los jugadores de 1880 habrían envidiado. Un solucionador despejó cada uno de los 2000 tableros de OutBrick antes de publicarlos, así que nadie se encuentra con un intercambio 14–15. Si quieres la parte práctica de esta historia, nuestra guía de [cómo resolver rompecabezas de bloques deslizantes](/blog/how-to-solve-sliding-block-puzzles) expone estrategias y puedes [probar un tablero en el navegador](/play).',
      ], bullets: ['Finales de la década de 1870: aparecen bloques deslizantes en marcos en patentes estadounidenses.', 'Finales de 1879: se vende el 15 Puzzle; Johnson y Story demuestran que la mitad de las posiciones es irresoluble.', '1880: la fiebre del 15 Puzzle se extiende por Estados Unidos y Europa.', '1891: Sam Loyd afirma por primera vez haberlo inventado.', '1907–1912: se patenta el puzle de Hardy para sacar un bloque.', '1996: se publica Rush Hour en Estados Unidos.', '2002–2005: se demuestra que Rush Hour y los puzles deslizantes son PSPACE-completos.'] },
    }, pullQuote: 'Intercambia solo el 14 y el 15 y tendrás una posición que parece a un movimiento de la solución y nunca puede alcanzarse.',
    faqs: [
      { question: '¿Quién inventó el 15 Puzzle?', answer: 'La investigación de Jerry Slocum y Dic Sonneveld lo atribuye a Noyes Chapman, director de la oficina postal de Canastota, Nueva York. Ya se vendía a finales de 1879 y se volvió una fiebre en 1880. Sam Loyd lo reivindicó desde 1891, pero no hay pruebas de que lo inventara.' },
      { question: '¿Todo 15 Puzzle tiene solución?', answer: 'No. Johnson y Story demostraron en 1879 que exactamente la mitad de las disposiciones nunca puede resolverse porque cada deslizamiento conserva una paridad oculta. Cualquier posición resoluble se termina en un máximo de ochenta movimientos de una sola ficha.' },
      { question: '¿Qué es Klotski?', answer: 'Klotski es un nombre común de puzles deslizantes donde hay que mover un bloque grande hacia una salida entre bloques menores. Lewis W. Hardy patentó una versión temprana: la solicitó en 1907 y se concedió en 1912.' },
      { question: '¿Quién inventó Rush Hour?', answer: 'Rush Hour fue creado por el diseñador japonés Nob Yoshigahara y publicado en Estados Unidos en 1996 por Binary Arts, luego renombrada ThinkFun.' },
    ],
  },
  'verifying-2000-sliding-block-boards': {
    title: 'Cómo verificamos 2000 tableros deslizantes antes de publicar', dek: 'Encontrar una ruta es solo el comienzo. Así reproducimos la solución de cada tablero de OutBrick con las mismas reglas del juego.',
    imageAlt: 'Un tablero real de bloques deslizantes de OutBrick con pistas de color y símbolos junto a las piezas del juego',
    tags: ['desarrollo de juegos', 'diseño de puzles', 'búsqueda de rutas', 'control de calidad', 'puzles de bloques deslizantes'],
    intro: '«Dos mil tableros, todos con solución» parece una sola afirmación. En realidad es una cadena. Una búsqueda debe encontrar una ruta; esa ruta debe seguir funcionando al reproducirla desde el estado inicial real; y cada movimiento debe cumplir las mismas reglas que encuentran los jugadores. En OutBrick mantuvimos la búsqueda y la comprobación de rutas como tareas separadas, y reproducimos una secuencia testigo de cada tablero antes de publicar.',
    keyTakeaways: ['La búsqueda encuentra una ruta para despejar usando A* ponderado y una heurística ExitTable; está diseñada para encontrar rápidamente una buena ruta, no para demostrar que sea la más corta.', 'Una reproducción separada del testigo aplica cada movimiento guardado con las reglas del juego y rechaza resultados ilegales, no deterministas, fuera de límites, superpuestos o sin despejar.', 'Agotar el presupuesto de nodos significa «desconocido». Nunca demuestra que un tablero no tenga solución.'],
    sections: {
      'one-rules-engine': { title: 'Empieza con un solo motor de reglas', paragraphs: [
        'Un solucionador solo es fiable si su idea de movimiento coincide con la del juego. En un puzle deslizante, una pieza puede avanzar hasta una pared, otra pieza o una puerta que no admita su color. OutBrick añade detalles con estado: las llaves pueden cambiar puertas, el hielo puede necesitar varios deslizamientos y los generadores pueden introducir piezas en cola. Reimplementar una versión simplificada para el verificador dejaría un hueco justo donde puede ocultarse un error.',
        'Por ello, la búsqueda pregunta al propio motor del juego por los movimientos legales y los aplica mediante el mismo código de transición de estado que se utiliza al jugar. La clave del estado también incluye el estado de las puertas y un contador de movimientos reducido cuando las puertas cíclicas o temporizadas hacen relevante ese recuento. Dos tableros que parezcan iguales pero tengan distintos estados activos de puertas deben seguir siendo estados de búsqueda diferentes.',
      ] },
      'search-finds-route': { title: 'Usa la búsqueda para encontrar una ruta, no para prometer perfección', paragraphs: [
        'El solucionador usa A* ponderado. Su heurística ExitTable pregunta cuántos deslizamientos necesitaría cada pieza para alcanzar una salida adecuada si se retiraran los demás ladrillos. Ese tablero simplificado cuesta menos de analizar que el real y da una estimación útil de lo que queda. Dar más peso a la heurística favorece encontrar rápidamente una solución.',
        'La elección tiene un límite: la ruta es útil, pero no se garantiza que sea la más corta. Una búsqueda también puede detenerse al agotar su presupuesto de nodos. En ese caso la respuesta es desconocida; no etiqueta el tablero como imposible. Solo agotar por completo el espacio de estados alcanzables puede respaldar un veredicto de ausencia de solución. Distinguir los resultados evita convertir un límite de tiempo o una cancelación en una afirmación falsa sobre el puzle.',
      ] },
      'replay-the-witness': { title: 'Reproduce el testigo desde el tablero original', paragraphs: [
        'Encontrar una ruta no es la comprobación final. Para cada tablero diseñado guardamos un testigo: la secuencia de movimientos desde su estado inicial hasta despejarlo. La reproducción empieza en un estado de juego nuevo, verifica que sea válido y aplica el testigo movimiento a movimiento mediante las reglas reales. Un movimiento ilegal hace fallar la reproducción inmediatamente.',
        'El comprobador también repite cada movimiento desde el mismo estado previo y compara el estado resultante, los eventos y el desenlace. Detecta transiciones que se comportarían de otra forma al repetirse. Después de cada movimiento comprueba que todas las piezas permanezcan en casillas válidas y que no ocupen la misma casilla. Al final, el tablero debe estar realmente despejado. No cuenta una ruta que solo parezca plausible o termine con un ladrillo dentro.',
      ] },
      'solvable-isnt-difficulty': { title: 'Tener solución no equivale a un buen ritmo', paragraphs: [
        'Un testigo legal demuestra que existe una ruta. No demuestra que una persona la encuentre, que se sienta justa ni que el tablero sea difícil de la manera adecuada. La ruta del solucionador tampoco establece un número óptimo de movimientos. Son preguntas de diseño separadas, por lo que tratamos la reproducción del paquete completo como requisito de corrección y evaluamos aparte ritmo y dificultad.',
        'El límite de movimientos también debe dejar espacio para la ruta verificada. Puedes pensar tanto como necesites: el límite cuenta movimientos y OutBrick no tiene reloj. Así el puzle ejerce presión sin convertir la validación en un temporizador.',
      ] },
      'repeatable-release-check': { title: 'Haz repetible la comprobación al publicar', paragraphs: [
        'El resultado útil de publicación no es «el solucionador se ejecutó una vez». Es que cada tablero del paquete tuvo un testigo reproducido correctamente con las reglas que se publican. Al cambiar una regla o un tablero, el paquete puede comprobarse otra vez y el primer movimiento fallido apunta a la parte del contrato rota: legalidad, determinismo, geometría del tablero o resultado final despejado.',
        'Así comprobamos los 2000 tableros de OutBrick antes de publicar. Puedes probar el mismo tipo de puzle en el [tablero gratuito del navegador](/play) o [descargar OutBrick para iPhone y iPad](https://apps.apple.com/us/app/outbrick/id6807997465).',
      ] },
    }, pullQuote: 'Una ruta encontrada es una candidata. Una reproducción correcta con las reglas del juego es evidencia.',
    faqs: [
      { question: '¿El solucionador encuentra la solución más corta?', answer: 'No. A* ponderado encuentra rápidamente una buena ruta para despejar, pero no garantiza que sea óptima. La reproducción comprueba que sea legal y despeje el tablero.' },
      { question: '¿Qué ocurre cuando alcanza su presupuesto de nodos?', answer: 'El resultado es desconocido, no irresoluble. Un límite de presupuesto o una cancelación no demuestra que no exista una ruta.' },
      { question: '¿Qué significa «verificado por un solucionador» en OutBrick?', answer: 'Se encontró una ruta y se reprodujo desde el estado inicial mediante las reglas del juego. La reproducción comprueba movimientos legales, transiciones repetibles, posiciones válidas sin superposición y un tablero completamente despejado.' },
    ],
  },
};
