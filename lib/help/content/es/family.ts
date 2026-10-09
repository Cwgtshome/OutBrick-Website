import type { HelpArticle } from '../../model.ts';

/**
 * Familias y juego tranquilo, la economía en palabras claras, los nueve amigos y cómo recuperar
 * el progreso o una compra, en español. Comprobado con la 5.1.1 (68) y las guías que lo acompañan.
 */
export const familyArticles: HelpArticle[] = [
  {
    slug: 'parents-guide',
    category: 'family',
    cover: 'settings-game',
    title: 'Una guía para madres, padres y cuidadores',
    summary:
      'Qué es OutBrick y qué no es, los controles de Apple que te permiten decidir sobre las compras, el tiempo y las notificaciones, cómo funcionan los reembolsos, qué datos guardan el juego y esta web, y una lista de comprobación para repasar.',
    keywords:
      'padres madres padre madre tutor cuidador familia hijo hija niños niñas menores seguro seguridad control parental tiempo de uso solicitar la compra en familia compras dentro de apps compras integradas gasto tiempo de inactividad límites de uso clasificación por edad 4+ anuncios publicidad desconocidos chat privacidad reembolso devolución',
    host: 'peach',
    hostPose: 'think',
    sections: [
      {
        id: 'at-a-glance',
        title: 'Lo que es cierto sobre OutBrick',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick es un puzle tranquilo de deslizar y combinar, clasificado para **mayores de 4 años** en el App Store. Se mueven ladrillos de juguete hasta las puertas de su color, o se cambian vecinos para formar líneas, y cada tablero da un número de movimientos para conseguirlo. Antes de tocar ningún ajuste, esto es lo que el juego hace y lo que no hace.',
          },
          {
            t: 'list',
            items: [
              '**No hay reloj en ninguna parte.** Ningún tablero, menú ni evento tiene tiempo. El número de movimientos es el único límite, así que nadie tiene prisa nunca.',
              '**Ni chat ni desconocidos.** No hay chat, ni mensajes entre jugadores, ni nada escrito por otros jugadores dentro del juego. Los demás solo pueden ver un nombre de jugador y un nivel (más información [abajo](#other-players)).',
              '**Ningún anuncio, salvo que tu hijo o hija toque para ver uno.** No hay banners ni anuncios entre tableros. Un vídeo solo se reproduce cuando se pulsa un botón para verlo a cambio de una recompensa, cada tipo tiene un límite diario (39 en total) y un vídeo siempre se puede rechazar sin coste.',
              '**Las vidas se gastan al perder, no al jugar.** Para abrir un tablero hace falta una vida, pero no se gasta. Una vida se gasta cuando se pierde un intento: al rendirse cuando se acaban los movimientos, o al reiniciar o salir después de hacer un movimiento, y el juego lo avisa antes de que ocurra. Ganar nunca cuesta una vida, y las vidas vuelven solas, una cada 30 minutos.',
              '**No hay que crear ninguna cuenta.** El progreso se guarda en el dispositivo y en el iCloud de tu familia. OutBrick no usa analíticas, y el desarrollador no recibe datos de juego.',
              '**Nada es una suscripción.** Cada compra es una compra única a través de Apple, nada se renueva solo y no se ofrece nada de pago en un tablero antes del nivel 6.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Gratis, y así seguirá',
            text: 'Los 2.000 niveles se pueden jugar sin pagar ni ver nada. Las vidas se recargan solas, cada intento trae una Pista, un Cohete y un OVNI gratis, y el primer deshacer de cada tablero es gratis. Consulta [Cómo funcionan las recompensas, las vidas y los anuncios](help:rewards-and-ads) para ver cada número.',
          },
        ],
      },
      {
        id: 'purchases',
        title: 'Compras: Solicitar la compra, restricciones y reembolsos',
        blocks: [
          {
            t: 'p',
            text: 'Los artículos de dinero real aparecen en la **Tienda** y en algunas tarjetas del juego, siempre con el precio en tu propia moneda y siempre a través de la hoja de compra de Apple. Dos controles de Apple deciden si esa hoja puede completarse.',
          },
          { t: 'h3', text: 'Solicitar la compra (En familia)' },
          {
            t: 'p',
            text: 'Si tu hijo o hija tiene su propia Cuenta de Apple en tu grupo de En familia, Solicitar la compra te envía cada solicitud de compra, incluidas las compras dentro de los juegos, para que la apruebes o la rechaces.',
          },
          {
            t: 'steps',
            items: [
              'En tu propio iPhone, abre **Ajustes › Familia**.',
              'Toca el nombre de tu hijo o hija.',
              'Toca **Solicitar la compra** y actívalo.',
            ],
          },
          { t: 'h3', text: 'Desactivar del todo las compras dentro de apps' },
          {
            t: 'steps',
            items: [
              'En el dispositivo de tu hijo o hija, abre **Ajustes › Tiempo de uso**. (Si está en En familia, puedes hacerlo desde tu propio iPhone: **Ajustes › Tiempo de uso** y, después, su nombre).',
              'Toca **Restricciones de contenido y privacidad** y actívalo.',
              'Toca **Compras en iTunes Store y App Store**.',
              'Pon **Compras dentro de apps** en **No permitir**. Ya que estás, pon **Solicitar contraseña** en **Solicitar siempre**.',
              'Elige un **código de Tiempo de uso** que tu hijo o hija no conozca, para que estas opciones se queden como las dejaste.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Apple cambia a veces el nombre de alguna fila entre versiones de iOS. Si un nombre de tu dispositivo es algo distinto del que aparece aquí, busca el más parecido dentro de **Restricciones de contenido y privacidad**.',
          },
          {
            t: 'p',
            text: 'Con las compras dentro de apps desactivadas, OutBrick sigue permitiendo jugar todos los tableros: las monedas ganadas jugando siguen comprando potenciadores, recargas y movimientos extra, y los vídeos opcionales siguen funcionando.',
          },
          { t: 'h3', text: 'Si se ha comprado algo por error' },
          {
            t: 'p',
            text: 'Apple cobra todos los pagos, así que solo Apple puede reembolsarlos. Entra en [reportaproblem.apple.com](https://reportaproblem.apple.com), inicia sesión con la Cuenta de Apple con la que se hizo la compra, elige **Solicitar un reembolso** y escoge el artículo de OutBrick. Apple decide según sus normas y la legislación de consumo de tu país. Nosotros no podemos ver tus datos de pago ni hacer un reembolso del App Store. Más información en nuestra [página de reembolsos](/refunds) y en [Progreso perdido o una compra que falta](help:lost-progress-and-purchases#refunds).',
          },
          {
            t: 'shot',
            id: 'shop',
            alt: 'La Tienda: 2.580 monedas y la sección de Ofertas, con un Pack inicial único de monedas, vidas y potenciadores, la Hucha, y un Pase de Potenciadores de 60 minutos de OVNIs y Cohetes gratis.',
            caption: 'La Tienda. Todos los artículos de dinero real pasan por la hoja de compra de Apple.',
          },
        ],
      },
      {
        id: 'time',
        title: 'Límites de tiempo, Tiempo de inactividad y recordatorios',
        blocks: [
          {
            t: 'p',
            text: 'Como ningún tablero tiene tiempo, OutBrick es fácil de dejar: no se pierde nada al parar entre tableros, y las vidas se siguen recargando con el juego cerrado. Si quieres poner un límite más firme al tiempo de juego, el Tiempo de uso de Apple lo hace muy bien.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Límites de uso de apps', text: '**Ajustes › Tiempo de uso › Límites de uso de apps › Añadir límite.** Elige la categoría **Juegos**, o solo OutBrick, y una cantidad diaria. Cuando se acaba el tiempo, iOS tapa el juego.' },
              { term: 'Tiempo de inactividad', text: '**Ajustes › Tiempo de uso › Tiempo de inactividad.** Un rato de calma programado, como la hora de dormir, en el que solo se pueden abrir las apps que permitas.' },
              { term: 'Recordatorios de OutBrick', text: 'En el juego, **Ajustes › Juego › Notificaciones** los desactiva todos. En el iPhone, **Ajustes › Notificaciones › OutBrick** los controla, junto con el globo del icono.' },
            ],
          },
          {
            t: 'list',
            items: [
              'OutBrick nunca pide permiso para las notificaciones al abrirse por primera vez. Después del tercer tablero superado, pregunta si Bloo puede guardar el sitio, y **Ahora no** espera una semana.',
              'Cuando los recordatorios están permitidos, el juego envía **como mucho una notificación cada 20 horas**, y **nunca entre las 22:00 y las 9:00**.',
              'El **globo del icono** cuenta las recompensas que esperan a que se recojan, hasta nueve. Solo se muestra si las notificaciones están permitidas, y al abrir el juego desaparece.',
              'Un **filtro de Concentración** puede apagar la música, pausar los recordatorios y ocultar el globo mientras esté activado un modo de Concentración como Dormir. Consulta [Jugar con calma](help:playing-calmly#reminders).',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'El mejor momento para parar es entre tableros, en Inicio o en el mapa. Salir de un tablero antes del primer movimiento siempre es gratis; después de un movimiento, la tarjeta **¿Salir?** avisa de que se gastará una vida antes de que pase nada.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Qué guardan el juego y esta web',
        blocks: [
          {
            t: 'p',
            text: 'Esto es un resumen de nuestra [política de privacidad](/privacy), donde está todo el detalle.',
          },
          { t: 'h3', text: 'En el juego' },
          {
            t: 'list',
            items: [
              '**Ni cuentas ni analíticas.** El desarrollador no recibe datos de juego.',
              'El **progreso** se guarda en el dispositivo y se sincroniza a través de tu propio iCloud, que el desarrollador no puede leer.',
              'Las **compras** las procesa Apple. OutBrick nunca ve ni guarda datos de tarjetas.',
              '**Game Center** es opcional y lo gestiona Apple, según tus ajustes de Game Center.',
              '**Anuncios:** el único tercero del juego es el servicio de publicidad de Google, y solo funciona cuando alguien elige ver un vídeo. Los anuncios en vídeo se limitan a la clasificación de contenido para todos los públicos de Google. Si iOS pregunta si OutBrick puede rastrear, **Solicitar a la app que no rastree** no cambia nada en el juego. En la UE, el Reino Unido y Suiza aparece un formulario de consentimiento antes del primer vídeo, y **Ajustes › Juego › Opciones de anuncios** lo vuelve a abrir.',
              '**Quitar anuncios**, o tener el Pase Ladrillo de la temporada actual, hace que el juego deje de pedir anuncios por completo, y las recompensas se siguen pagando.',
              '**Borrar mis datos**, al pie de **Ajustes › Juego**, restablece el progreso del dispositivo y pide a iCloud que borre la partida. Consulta [Progreso, iCloud y privacidad](help:progress-privacy-and-account#delete).',
            ],
          },
          { t: 'h3', text: 'En esta web' },
          {
            t: 'list',
            items: [
              'Para leer la web no hace falta ninguna cuenta. Las visitas se miden con Google Analytics **solo si lo aceptas** en el aviso de cookies; hasta entonces no se carga nada de Google.',
              'El **formulario de contacto** guarda lo que envías para que podamos responder. Un caso de soporte se conserva 24 meses después de cerrarse y luego se borra.',
              'Una **cuenta de la comunidad** guarda un nombre visible público y una dirección de correo privada, que nunca se muestra a nadie.',
              'Puedes pedir una copia de lo que guardamos, o que lo borremos, a través del [formulario de contacto](/contact) con el tema Privacidad.',
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'Por favor, deja fuera de los mensajes de soporte los datos personales de tu hijo o hija. Nos basta con un número de nivel y el dispositivo.',
          },
        ],
      },
      {
        id: 'other-players',
        title: 'Otros jugadores y la comunidad',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Pestaña Ranking', text: 'Se desbloquea en el nivel 21. Muestra nombres de jugador y niveles, con una bandera opcional. Desactiva **Ajustes › Juego › Mostrarme en la clasificación** para desaparecer de ella, y oculta la bandera en el Perfil.' },
              { term: 'Carreras', text: '**Carrera del pueblo** y **Brick Royale** comparten el nombre de jugador con los demás jugadores de esa carrera, y solo si tu hijo o hija se une a una. Cada una se puede desactivar en **Ajustes › Juego › Funciones del juego**, junto con Rescate de amigos, Carrera del equipo y las ofertas del mapa.' },
              { term: 'Nombre de jugador', text: 'Se elige en el Perfil (toca el avatar). Un nombre inventado es buena idea.' },
              { term: 'Game Center', text: 'El servicio de Apple para logros, clasificaciones y amigos. Sus ajustes de amigos y multijugador están en **Tiempo de uso › Restricciones de contenido y privacidad**, en la sección de Game Center.' },
              { term: 'Mensajes', text: 'OutBrick tiene una app para Mensajes con la que enviar un reto de nivel o un sticker a alguien con quien tu hijo o hija ya se escribe. Los **Límites de comunicación** de Tiempo de uso se aplican igual que a cualquier conversación.' },
            ],
          },
          { t: 'h3', text: 'La comunidad de OutBrick' },
          {
            t: 'list',
            items: [
              'La comunidad es un foro de esta web, **independiente del juego**. Cualquiera puede leerla; para publicar hace falta una cuenta, y las cuentas son para **mayores de 16 años**.',
              'Sus enlaces de los **Ajustes** se abren en Safari, fuera del juego, precisamente por eso. Los límites de contenido web de Tiempo de uso se le aplican como a cualquier web.',
              'La dirección de correo de un miembro nunca se muestra a nadie. Todos los mensajes son públicos y están moderados, y se puede denunciar cualquier cosa que incumpla las [normas](/community/guidelines).',
              'Si crees que un menor ha creado una cuenta, dínoslo a través del [formulario de contacto](/contact) y la borraremos.',
            ],
          },
        ],
      },
      {
        id: 'checklist',
        title: 'Una lista de comprobación para repasar',
        blocks: [
          {
            t: 'p',
            text: 'Con diez minutos, el dispositivo de tu hijo o hija y el tuyo, lo tienes todo cubierto. Imprime esta página o marca las casillas mentalmente.',
          },
          {
            t: 'table',
            caption: 'Preparar OutBrick para un menor',
            head: ['Hecho', 'Comprobación', 'Dónde'],
            rows: [
              ['☐', 'Solicitar la compra está activado', 'Tu iPhone: **Ajustes › Familia ›** tu hijo o hija **› Solicitar la compra**'],
              ['☐', 'Compras dentro de apps desactivadas, o contraseña siempre obligatoria', '**Ajustes › Tiempo de uso › Restricciones de contenido y privacidad › Compras en iTunes Store y App Store**'],
              ['☐', 'Hay un código de Tiempo de uso', '**Ajustes › Tiempo de uso**'],
              ['☐', 'Un límite diario para juegos, si lo quieres', '**Ajustes › Tiempo de uso › Límites de uso de apps**'],
              ['☐', 'Tiempo de inactividad para la hora de dormir', '**Ajustes › Tiempo de uso › Tiempo de inactividad**'],
              ['☐', 'Recordatorios y globo a tu gusto', 'En OutBrick, **Ajustes › Juego › Notificaciones**, o **Ajustes › Notificaciones › OutBrick**'],
              ['☐', 'Un nombre de jugador inventado', 'En OutBrick, toca el avatar para abrir el **Perfil**'],
              ['☐', 'Aparecer o no en la pestaña Ranking', 'En OutBrick, **Ajustes › Juego › Mostrarme en la clasificación**'],
              ['☐', 'Carreras y ofertas en el mapa, o no', 'En OutBrick, **Ajustes › Juego › Funciones del juego**'],
              ['☐', 'Respuesta sobre el rastreo', '**Ajustes › Privacidad y seguridad › Rastreo**'],
              ['☐', 'Sesión iniciada en iCloud, para que el progreso esté a salvo', '**Ajustes ›** tu nombre **› iCloud**'],
            ],
          },
        ],
      },
      {
        id: 'for-children',
        title: 'Para jugadores pequeños',
        blocks: [
          {
            t: 'p',
            text: 'Esta parte está escrita para tu hijo o hija. Leedla juntos si os ayuda.',
          },
          {
            t: 'list',
            items: [
              '**Tómate tu tiempo.** No hay reloj. Piensa todo lo que quieras antes de cada movimiento.',
              '**Perder no pasa nada.** Si te quedas sin movimientos, puedes volver a intentarlo. Al perder se va un corazón, y los corazones vuelven solos.',
              '**Los vídeos los eliges tú.** Un vídeo solo se reproduce si tocas un botón para verlo. Siempre puedes decir que no.',
              '**Pregunta antes de comprar.** Si un botón muestra un precio en euros, dólares, libras o cualquier otro dinero, cuesta dinero de verdad. Pregunta primero a una persona mayor.',
              '**Guarda en secreto tu nombre.** Elige un nombre de jugador inventado, no el tuyo de verdad.',
              '**Haz descansos.** El juego te espera. Los amigos seguirán ahí cuando vuelvas.',
              '**¿Algo no te parece bien?** Para y cuéntaselo a una persona mayor.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: '¿Atascado?',
            text: 'Toca la **Pista** de la bandeja de abajo. Tienes una gratis en cada intento.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Preguntas que hacen las familias',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: '¿Puede mi hijo o hija hablar con desconocidos en OutBrick?',
                a: 'No. El juego no tiene chat ni mensajes entre jugadores. Los demás pueden ver un nombre de jugador y un nivel en la pestaña Ranking, y en una carrera a la que tu hijo o hija decida unirse. Las dos cosas se pueden desactivar en **Ajustes › Juego**.',
              },
              {
                q: '¿Verá anuncios que no haya elegido?',
                a: 'No. No hay banners ni anuncios entre tableros. Un vídeo solo se reproduce después de tocar un botón para verlo a cambio de una recompensa, y cada tipo tiene un límite diario. **Quitar anuncios** los elimina para siempre, y las recompensas se siguen pagando.',
              },
              {
                q: '¿Puede gastar dinero sin querer?',
                a: 'Toda compra con dinero real pasa por la hoja de compra de Apple, que pide Face ID, Touch ID o la contraseña de la Cuenta de Apple. Con **Solicitar la compra** activado, o con las compras dentro de apps en **No permitir**, no se puede comprar nada sin ti.',
              },
              {
                q: '¿Hay alguna suscripción?',
                a: 'No. Todos los pases y artículos por tiempo son compras únicas, y nada se renueva solo.',
              },
              {
                q: '¿OutBrick necesita una cuenta o una dirección de correo?',
                a: 'No. El progreso se guarda en el dispositivo y en tu propio iCloud. La comunidad de esta web necesita una cuenta, pero es para mayores de 16 años y no forma parte del juego.',
              },
              {
                q: '¿El juego funciona sin internet?',
                a: 'Sí, los tableros se juegan sin conexión. Los vídeos, Game Center y la sincronización necesitan conexión, así que sin ella los vídeos simplemente no están disponibles.',
              },
              {
                q: '¿A quién pido un reembolso?',
                a: 'A Apple, en [reportaproblem.apple.com](https://reportaproblem.apple.com). Nosotros no podemos ver los pagos ni reembolsarlos. Si algo que se compró no ha llegado, prueba primero **Restaurar compra** al pie de la Tienda y luego [escríbenos](/contact?topic=purchases).',
              },
            ],
          },
        ],
      },
    ],
    related: ['playing-calmly', 'rewards-and-ads', 'shop-and-purchases', 'progress-privacy-and-account', 'settings', 'using-the-community'],
  },

  {
    slug: 'playing-calmly',
    category: 'family',
    cover: 'settings-a11y',
    title: 'Jugar con calma',
    summary:
      'Los ajustes que hacen OutBrick más silencioso y más suave, por qué nunca hay reloj, cómo dejarlo un rato sin perder nada y algunas costumbres para jugar sin prisas.',
    keywords:
      'calma tranquilo relajarse relajante suave silencio silencioso lento sin prisa estrés ansiedad reducir movimiento animación velocidad sonido música vibración háptica notificaciones globo filtro de concentración dormir descanso pausa sin temporizador sin reloj acogedor',
    host: 'zippy',
    hostPose: 'idle',
    sections: [
      {
        id: 'no-clock',
        title: 'Nunca hay reloj',
        blocks: [
          {
            t: 'p',
            text: 'Ningún tablero de OutBrick tiene tiempo, y nada cuenta hacia atrás mientras piensas. Cada tablero te da un número de **movimientos**, y ese es el único límite. Un movimiento solo cuenta cuando hace algo: un cambio que no forma ninguna combinación vuelve a su sitio sin gastar ninguno, y un arrastre de menos de media casilla también.',
          },
          {
            t: 'list',
            items: [
              'Puedes mirar un tablero todo el rato que quieras. Deja el teléfono, vuelve y sigue.',
              'Si no hay ningún movimiento posible, el tablero se mezcla gratis. Nunca te quedas atascado del todo.',
              'Cada intento trae una **Pista**, un **Cohete** y un **OVNI** gratis, y el primer **Deshacer** de cada tablero es gratis.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Los eventos y las temporadas sí siguen un calendario, y algunos muestran una cuenta atrás hasta que terminan. Ninguno pone reloj a un tablero.',
          },
        ],
      },
      {
        id: 'gentler-screen',
        title: 'Una pantalla más suave',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Reducir movimiento', text: 'En **Ajustes › Accesibilidad › Movimiento** del iPhone. El movimiento de reposo del tablero se detiene, los brillos se quedan quietos, las pistas destellan en su sitio, las pantallas se funden en lugar de deslizarse y todas las celebraciones de victoria se convierten en un brillo suave.' },
              { term: 'Atenuar luces intermitentes', text: 'También en **Movimiento**. Los destellos a pantalla completa de los grandes combos bajan a un tercio de su intensidad y nunca se suceden a menos de un tercio de segundo.' },
              { term: 'Velocidad de animación', text: 'En **Ajustes › Accesibilidad** de OutBrick: 50 %, 75 %, 100 %, 150 % o 200 %. Al 75 % o al 50 %, los cambios, las caídas y los despejes van más despacio y son más fáciles de seguir.' },
              { term: 'Calm Glow y Calm Outline', text: 'Dos piezas gratis del **Armario**: **Calm Glow** en **Celebraciones** (un brillo suave, nada que salga volando) y **Calm Outline** en **Estelas** (un contorno quieto donde estaba un ladrillo). Toca **Ponérselo**.' },
            ],
          },
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'La pestaña Accesibilidad: Velocidad de animación del 50 % al 200 %, Detalle de los avisos Breve, Estándar o Completo, e interruptores para Modo daltónico, Tablero de alto contraste, Bandeja para zurdos, Confirmar cambios y Sonido de fila.',
            caption: 'Ajustes › Accesibilidad. La Velocidad de animación está arriba del todo.',
          },
          {
            t: 'p',
            text: 'Más en [Vista, oído y movimiento](help:vision-hearing-and-motion#motion).',
          },
        ],
      },
      {
        id: 'sound',
        title: 'Sonido, música y vibración',
        blocks: [
          {
            t: 'list',
            items: [
              '**Sonidos**, **Música** y **Vibración** tienen cada uno su interruptor en **Ajustes › Juego**, y los mismos tres están en el menú de **Pausa**, así que puedes cambiarlos en mitad de un tablero.',
              'La **Vibración** son los pequeños toques que notas cuando las piezas se mueven y caen. El interruptor solo aparece en los dispositivos que pueden vibrar.',
              'Los amigos hablan con **bocadillos de texto**, nunca en voz alta, y nada en el juego depende del oído. Jugar en silencio no te quita nada.',
              'El interruptor de tono/silencio y los botones de volumen funcionan como siempre.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: '¿Te gusta la música pero no los efectos? Desactiva **Sonidos** y deja **Música** activada, o al revés.',
          },
        ],
      },
      {
        id: 'quieter',
        title: 'Un juego más tranquilo',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Funciones del juego', text: '**Ajustes › Juego › Funciones del juego** desactiva **Rescate de amigos**, **Carrera del pueblo**, **Brick Royale**, **Carrera del equipo** y **Ofertas en el mapa**. No pierdes nada de lo que has ganado.' },
              { term: 'Juego rápido', text: 'Activado desde el principio: al ganar pasas directamente al siguiente tablero. Desactívalo en **Ajustes › Juego** y al ganar volverás al mapa del Viaje, un buen sitio para hacer una pausa.' },
              { term: 'Mostrarme en la clasificación', text: 'Desactívalo si prefieres no aparecer en la pestaña Ranking.' },
              { term: 'Mascotas con IA', text: 'Donde está disponible el modelo integrado de Apple, los amigos se inventan sus propias frases. Desactívalo para que digan las de siempre.' },
            ],
          },
          {
            t: 'shot',
            id: 'settings-game',
            alt: 'Ajustes en la pestaña Juego: interruptores activados para Notificaciones, Sonidos, Música, Juego rápido y Mascotas con IA, cada uno con una línea que lo explica, y después los botones Funciones del juego, Valorar OutBrick, Contacto, Comunidad, Informar de un error y Soporte.',
            caption: 'Ajustes › Juego.',
          },
        ],
      },
      {
        id: 'reminders',
        title: 'Notificaciones, el globo del icono y los filtros de Concentración',
        blocks: [
          {
            t: 'list',
            items: [
              'OutBrick envía **como mucho una notificación cada 20 horas**, y **nunca entre las 22:00 y las 9:00**. Cada una ofrece **Jugar**, **Más tarde** (tres horas) o **Posponer a mañana**.',
              'Desactívalas todas con **Ajustes › Juego › Notificaciones** en el juego, o elige su estilo en **Ajustes › Notificaciones › OutBrick** del iPhone.',
              'El **globo del icono** cuenta las recompensas que te esperan, hasta nueve. Al abrir el juego desaparece sin recoger nada. Para ocultarlo para siempre, desactiva **Globos** en **Ajustes › Notificaciones › OutBrick**.',
            ],
          },
          { t: 'h3', text: 'Un filtro de Concentración para OutBrick' },
          {
            t: 'steps',
            items: [
              'En **Ajustes › Concentración** del iPhone, elige un modo, como Dormir o Personal.',
              'Toca **Añadir filtro** y luego **OutBrick**.',
              'Elige qué hace OutBrick mientras ese modo esté activado: apagar la música (o la música y los sonidos), pausar los recordatorios y ocultar el globo del icono.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Un filtro de Concentración nunca cambia tus propios ajustes. Mientras está actuando, una línea bajo **Música** en los Ajustes te lo indica.',
          },
        ],
      },
      {
        id: 'stepping-away',
        title: 'Dejarlo un rato sin perder nada',
        blocks: [
          {
            t: 'list',
            items: [
              '**Entre tableros es el sitio perfecto para parar.** En Inicio o en el mapa no hay nada a medias.',
              '**En mitad de un tablero**, toca **Pausa**. **Continuar** te devuelve directamente.',
              '**Salir antes de tu primer movimiento siempre es gratis.** Después de un movimiento, la tarjeta **¿Salir?** te avisa de que se gastará una vida antes de que decidas.',
              '**Las vidas se recargan solas**, una cada 30 minutos, aunque el juego esté cerrado. Toca el corazón del Viaje para ver cuándo llega la siguiente.',
              '**Tu racha de días puede esperar.** Una racha de tres días o más se puede recuperar en el plazo de una semana desde el día perdido, gratis con un salvarrachas o por 250 monedas.',
              '**Tu progreso está a salvo.** Se guarda sobre la marcha, en el dispositivo y en iCloud.',
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
            title: 'Una ayudita',
            text: '¿Te cuesta un tablero? A partir de tu sexto intento en él, el juego te da **3 movimientos extra** antes de empezar, una vez al día por tablero. A veces lo más tranquilo es volver mañana.',
          },
        ],
      },
      {
        id: 'habits',
        title: 'Costumbres para jugar sin prisas',
        blocks: [
          {
            t: 'list',
            items: [
              '**Mira antes de mover.** Busca primero las puertas y los objetivos. El panel de objetivos de arriba te dice qué pide el tablero.',
              '**Usa la Pista gratis.** La tienes en cada intento y no se puede guardar, así que usarla no cuesta nada.',
              '**Deshaz sin miedo, una vez.** El primer deshacer de cada tablero es gratis.',
              '**Repite un tablero superado** desde el mapa cuando te apetezca algo conocido. Repetir nunca cambia tu posición en el Viaje.',
              '**Elige un punto de parada antes de empezar**, como el final de una aldea, y deja que la celebración de la aldea sea tu señal.',
              '**Si un tablero te frustra, déjalo por hoy.** Las vidas se recargan, llega la ayudita y, después de descansar, los tableros suelen verse distintos.',
            ],
          },
        ],
      },
      {
        id: 'questions',
        title: 'Preguntas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: '¿Hay algún temporizador que pueda desactivar?',
                a: 'No hay nada que desactivar: ningún tablero de OutBrick tiene temporizador. Los movimientos son el único límite.',
              },
              {
                q: '¿Cómo hago que las animaciones vayan más despacio?',
                a: 'Pon la **Velocidad de animación** al 75 % o al 50 % en **Ajustes › Accesibilidad**. Para menos movimiento en todas partes, activa **Reducir movimiento** en los Ajustes del iPhone.',
              },
              {
                q: '¿Puedo quitar el confeti al ganar?',
                a: 'Sí. Ponte la celebración gratis **Calm Glow** del Armario, o activa **Reducir movimiento**, que hace tranquilas todas las celebraciones.',
              },
              {
                q: '¿Cómo quito el globo del icono?',
                a: 'Desactiva **Globos** en **Ajustes › Notificaciones › OutBrick** del iPhone, o usa un filtro de Concentración para ocultarlo solo mientras esté activado un modo de Concentración.',
              },
              {
                q: '¿Pierdo una vida si dejo el juego en mitad de un tablero?',
                a: 'No por hacer una pausa. Una vida solo se gasta cuando se pierde un intento: al rendirte cuando se acaban los movimientos, o al reiniciar o salir después de un movimiento. Haz una pausa y vuelve cuando quieras.',
              },
            ],
          },
        ],
      },
    ],
    related: ['accessibility', 'vision-hearing-and-motion', 'settings', 'lives-moves-and-undos', 'parents-guide', 'apple-features'],
  },

  {
    slug: 'rewards-and-ads',
    category: 'family',
    cover: 'wall',
    title: 'Cómo funcionan las recompensas, las vidas y los anuncios, en palabras claras',
    summary:
      'Todos los números de las vidas, los deshacer, quedarse sin movimientos y los ocho vídeos opcionales, qué cambian Quitar anuncios y el Pase Ladrillo, qué se compra con monedas y qué no vende nunca OutBrick.',
    keywords:
      'economía vidas corazones deshacer movimientos continuar sin movimientos monedas precios vídeo anuncios publicidad recompensa ver límite diario tope quitar anuncios pase ladrillo gratis pagar para ganar pay to win gastar dinero justo honesto nunca se vende',
    host: 'sprout',
    hostPose: 'think',
    sections: [
      {
        id: 'short',
        title: 'La versión corta',
        blocks: [
          {
            t: 'list',
            items: [
              '**Perder cuesta una vida; jugar y ganar, no.** Las vidas vuelven solas, una cada 30 minutos.',
              '**Quedarse sin movimientos no es el final.** Puedes seguir jugando con monedas, con un vídeo o, simplemente, volver a intentarlo.',
              '**Los vídeos siempre los eliges tú.** Hay ocho tipos, cada uno con su límite diario, 39 en total. Nada se reproduce solo.',
              '**Pagar quita los vídeos, nunca las recompensas.** Quitar anuncios y el Pase Ladrillo pagan las mismas recompensas sin vídeo.',
              '**Nada es una suscripción, y no aparece nada de pago en un tablero antes del nivel 6.**',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Cada número de esta página es el que usa hoy el juego. Si alguno cambia, esta página cambia con él.',
          },
        ],
      },
      {
        id: 'lives',
        title: 'Vidas',
        blocks: [
          {
            t: 'list',
            items: [
              'Puedes tener hasta **5 vidas**, u **8** mientras tengas el Pase Ladrillo de la temporada actual.',
              'Recuperas una vida cada **30 minutos**, aunque el juego esté cerrado.',
              'Para abrir un tablero necesitas una vida, pero **no se gasta**.',
            ],
          },
          {
            t: 'table',
            caption: 'Cuándo se gasta una vida',
            head: ['Si tú…', '¿Gastas una vida?'],
            rows: [
              ['Superas el tablero', 'No'],
              ['Te quedas sin movimientos y te rindes (o cierras la pantalla Sin movimientos)', 'Sí'],
              ['Reinicias o sales **después** de un movimiento', 'Sí, y la tarjeta te avisa antes'],
              ['Reinicias o sales **antes** de tu primer movimiento', 'No'],
              ['Sigues jugando con más movimientos', 'No: es el mismo intento'],
              ['Llegas a un tablero donde nada se puede mover, con movimientos de sobra', 'No: se mezcla gratis'],
              ['Pierdes en tu intento gratis diario o con vidas ilimitadas', 'No'],
            ],
          },
          {
            t: 'p',
            text: '¿Sin vidas? Una vez al día puede que tengas un **intento gratis** en un tablero. Si no, puedes esperar, rellenar toda la reserva por **600 monedas**, ver un vídeo por **1 vida** o comprar vidas ilimitadas: **1 hora por 900 monedas**, **3 horas por 2.000** o **24 horas por 6.000**, o con dinero real en la Tienda.',
          },
          {
            t: 'shot',
            id: 'no-lives',
            alt: 'Sin vidas: 0 de 5 vidas y una cuenta atrás hasta la siguiente, después vidas ilimitadas durante 1, 3 o 24 horas con monedas o dinero, Rellenar por 600 monedas, Ver y ganar una vida y OK. Una nota al pie indica que solo se pierde una vida al perder un tablero, que las vidas vuelven una cada 30 minutos y que una vez al día una reserva vacía recibe un intento gratis.',
            caption: 'Sin vidas: esperar, recargar o seguir jugando.',
          },
        ],
      },
      {
        id: 'undos',
        title: 'Deshacer',
        blocks: [
          {
            t: 'list',
            items: [
              'El **primer deshacer de cada tablero es gratis**, y nunca se agota.',
              'Después, los deshacer salen de una reserva de hasta **5**, que se recarga **de uno en uno cada 25 minutos**.',
              'El botón Deshacer cuenta ambos, así que un tablero recién empezado muestra **6** cuando tu reserva está llena.',
              '¿Reserva vacía? Compra **5 por 250 monedas**, mira un vídeo para conseguir **2**, o espera.',
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'Quedarse sin movimientos',
        blocks: [
          {
            t: 'p',
            text: 'Cuando se acaban los movimientos antes de cumplir los objetivos, la pantalla **Sin movimientos** muestra lo que falta y te deja elegir. Seguir jugando es el mismo intento, así que nunca cuesta una vida.',
          },
          {
            t: 'table',
            caption: 'Seguir jugando con monedas, dentro de un intento',
            head: ['Seguir', 'Precio', 'Recibes'],
            rows: [
              ['La primera vez', '300 monedas', '+5 movimientos'],
              ['La segunda vez', '500 monedas', '+5 movimientos y una Pista'],
              ['La tercera vez y siguientes', '900 monedas', '+5 movimientos y un OVNI'],
            ],
          },
          {
            t: 'list',
            items: [
              'El precio vuelve a 300 monedas con cada intento nuevo, cuando sales del tablero o cuando lo superas. Nunca pasa de 900.',
              'O mira un **vídeo opcional**: **+2 movimientos**, luego **+1 movimiento** y, después, un **OVNI gratis**. Un vídeo nunca sube el precio en monedas.',
              'Aquí también puedes usar un **+5 movimientos** guardado. Quienes tienen el Pase Ladrillo reciben además **tres movimientos gratis** aquí.',
              'En un tablero que has intentado varias veces, cada continuación da un poco más: un movimiento extra por cada intento fallido a partir del tercero, hasta +15.',
              '**Rendirse** termina el intento y gasta una vida.',
            ],
          },
          {
            t: 'shot',
            id: 'wall',
            alt: 'La pantalla Sin movimientos con los objetivos que aún faltan, un botón de 5 movimientos más por 300 monedas, un botón Ver para 2 movimientos más y Rendirse.',
            caption: 'Sin movimientos: lo que todavía te falta y tus opciones.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Por qué sube el precio',
            text: 'A la tercera continuación, rellenar toda la reserva de vidas (600 monedas) y empezar de cero cuesta menos que otras 900 monedas en movimientos. El juego prefiere que vuelvas a empezar con calma a que sigas pagando sin avanzar.',
          },
        ],
      },
      {
        id: 'videos',
        title: 'Los ocho vídeos opcionales',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick **no tiene anuncios obligatorios**: ni banners, ni anuncios entre tableros, ni nada que se reproduzca solo. Un vídeo solo empieza cuando tocas un botón para verlo, y solo paga un vídeo visto hasta el final. Cada tipo tiene su propio límite diario, y los límites se reinician a medianoche.',
          },
          {
            t: 'table',
            caption: 'Cada vídeo, su recompensa y su límite diario',
            head: ['Dónde', 'Recompensa', 'Al día'],
            rows: [
              ['Sin vidas', '1 vida', '8'],
              ['Sin deshacer', '2 deshacer', '8'],
              ['Sin movimientos', '+2 movimientos, luego +1 y después un OVNI gratis', '6'],
              ['Sin movimientos, Pista gratis', 'Una Pista (desactivada en la versión actual, así que no la verás)', '4'],
              ['Tarjeta de victoria', 'Otra vez las monedas del tablero superado (de 75 a 300)', '4'],
              ['Rueda', 'Un segundo giro', '1'],
              ['Globo regalo', 'Monedas o un potenciador gratis durante 10 minutos', '2'],
              ['Cine de ladrillos', 'Una casilla de premio por vídeo', '6'],
              ['**Los ocho**', '', '**39**'],
            ],
          },
          {
            t: 'list',
            items: [
              'Decir que no a un vídeo no cuesta nada.',
              'Cuando se alcanza un límite, su botón simplemente desaparece hasta mañana.',
              'Los vídeos necesitan conexión a internet. Sin conexión, los tableros se siguen jugando; simplemente no se ofrecen vídeos.',
              'Los anuncios en vídeo se limitan a la clasificación de contenido para todos los públicos de Google.',
            ],
          },
        ],
      },
      {
        id: 'remove-ads-and-pass',
        title: 'Quitar anuncios y el Pase Ladrillo',
        blocks: [
          {
            t: 'p',
            text: 'Los dos quitan los vídeos **sin quitar las recompensas**: cada botón que decía Ver dice **Recoger premio** y paga al instante, con los mismos límites diarios. Pagar nunca te cuesta una recompensa.',
          },
          {
            t: 'table',
            head: ['Comparar', 'Quitar anuncios', 'Pase Ladrillo'],
            rows: [
              ['Qué es', 'Una compra única, para siempre', 'Una compra única para una temporada'],
              ['Vídeos', 'Desaparecen para siempre', 'Desaparecen mientras tengas el pase de la temporada actual'],
              ['Recompensas', 'Se pagan sin vídeo', 'Se pagan sin vídeo, más las recompensas del camino Premium'],
              ['Vidas', '5', '8 mientras tengas el pase de la temporada'],
              ['Sin movimientos', 'Como siempre', 'Además, tres movimientos gratis'],
              ['Restaurar en un dispositivo nuevo', 'Sí', 'Sí, temporadas 1 a 3'],
            ],
          },
          {
            t: 'p',
            text: 'Los precios aparecen en tu propia moneda en la Tienda. Ninguno de los dos se renueva solo. Consulta [La Tienda, las compras y cómo restaurarlas](help:shop-and-purchases#remove-ads) y [el Pase Ladrillo](help:rewards-and-events#pass).',
          },
        ],
      },
      {
        id: 'coins',
        title: 'Para qué sirven las monedas',
        blocks: [
          {
            t: 'p',
            text: 'Las monedas se ganan jugando: **25** por superar un tablero Normal, **50** por uno Difícil o Noche, **80** por uno Muy difícil o Jefe, **100** por el Ladrillo diario, además de las rachas, la Rueda, las Misiones, las recompensas por estrellas de las aldeas y el Pase Ladrillo. También se pueden comprar packs de monedas en la Tienda.',
          },
          {
            t: 'table',
            caption: 'Qué se compra con monedas',
            head: ['Artículo', 'Monedas'],
            rows: [
              ['Pista', '150'],
              ['Cohete', '300'],
              ['OVNI', '500'],
              ['Cinco deshacer', '250'],
              ['Una reserva de vidas llena', '600'],
              ['Seguir jugando al quedarte sin movimientos', '300, luego 500, luego 900'],
              ['Empezar con ventaja tras perder (un Cohete en el tablero y un OVNI gratis), desde el nivel 6', '800'],
              ['Vidas ilimitadas: 1 hora, 3 horas, 24 horas', '900, 2.000, 6.000'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Las dos recargas, de vidas y de deshacer, tienen precio fijo. Nunca suben por mucho que las necesites.',
          },
        ],
      },
      {
        id: 'never-sold',
        title: 'Lo que OutBrick no vende nunca',
        blocks: [
          {
            t: 'list',
            items: [
              '**Tiempo.** No hay reloj que puedas saltarte pagando.',
              '**Accesibilidad.** Todos los ajustes de accesibilidad son gratis, y también las piezas del Armario que ayudan, como la celebración tranquila y las bandejas de contraste.',
              '**Azar.** No hay cajas de botín ni packs sorpresa. Cada artículo de pago dice exactamente lo que contiene, y la Rueda nunca cuesta dinero.',
              '**Una suscripción.** Nada se renueva solo.',
              '**Presión a quien empieza.** No se ofrece nada de pago en un tablero antes del nivel 6.',
              '**Misiones.** Dan monedas, potenciadores y fichas, y nunca venden nada.',
              '**Tus datos.** No vendemos ni compartimos información personal a cambio de dinero.',
              '**Reseñas.** Valorar el juego no da ninguna recompensa.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Las piezas del Armario cambian el aspecto del juego, nunca cómo se juega.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Preguntas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: '¿Ganar cuesta una vida?',
                a: 'Nunca. Solo perder un intento.',
              },
              {
                q: '¿Tengo que ver vídeos para seguir jugando?',
                a: 'No. Las vidas se recargan solas, y todos los tableros se pueden jugar sin ver ni pagar nada.',
              },
              {
                q: '¿Por qué ha desaparecido un botón Ver?',
                a: 'Has llegado al límite diario de ese vídeo, o ahora mismo no hay ningún vídeo disponible. Los límites se reinician a medianoche.',
              },
              {
                q: 'He comprado Quitar anuncios. ¿Pierdo las vidas y los movimientos gratis que daban los vídeos?',
                a: 'No. Los mismos botones dicen **Recoger premio** y pagan al instante, con los mismos límites diarios.',
              },
              {
                q: '¿El Pase Ladrillo es una suscripción?',
                a: 'No. Es una compra única para una temporada, y no se renueva solo.',
              },
            ],
          },
        ],
      },
    ],
    related: ['lives-moves-and-undos', 'boosters-and-pause', 'shop-and-purchases', 'rewards-and-events', 'parents-guide', 'common-questions'],
  },

  {
    slug: 'meet-the-friends',
    category: 'progress',
    cover: 'home',
    title: 'Conoce a los nueve amigos',
    summary:
      'Bloo, Peach, Sprout, Bricko, Zippy, Vio, Moss, Flurry y Poppy: quién es cada amigo, cómo lo demuestra y todos los sitios donde te los encuentras en OutBrick.',
    keywords:
      'amigos mascotas personajes reparto bloo peach sprout bricko zippy vio moss flurry poppy anfitrión cabecera inicio escenario armario look atuendo sticker pegatina widget personalidad',
    host: 'bloo',
    hostPose: 'cheer',
    sections: [
      {
        id: 'cast',
        title: 'El reparto',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick tiene **nueve amigos de ladrillo**, cada uno un ladrillo de juguete con su propio color, su propio aspecto y su propia forma de celebrar. Te hacen compañía en Inicio y en cada tablero, y muestran cómo se sienten con sus movimientos y con lo que aparece en sus bocadillos de texto.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Los amigos nunca hablan en voz alta. Todo lo que tienen que decir aparece en un bocadillo de texto, así que nada de ellos depende del oído.',
          },
          {
            t: 'shot',
            id: 'home',
            alt: 'Inicio: arriba, el avatar, 2.580 monedas, una racha de 12 días, Misiones y el engranaje de Ajustes. Bajo el logotipo de OUTBRICK, una tarjeta anuncia el Reto de objetivos, que empieza pronto. Tres amigos ladrillo con sombrero de sol están en un césped de ladrillos de juguete sobre un botón verde Nivel 214. La barra inferior muestra Inicio, Ranking, Viaje, Tienda y Pase.',
            caption: 'En el escenario de Inicio hay tres amigos a la vez, por turnos.',
          },
        ],
      },
      {
        id: 'bloo-peach-sprout',
        title: 'Bloo, Peach y Sprout',
        blocks: [
          {
            t: 'friend',
            friend: 'bloo',
            pose: 'cheer',
            title: 'Bloo, el del reloj',
            text: 'Un ladrillo azul con un reloj de pulsera colgado de un cordón. Bloo mira la hora entre tablero y tablero y da una vuelta cuando superas uno: el primero en saludar, el primero en probar el movimiento atrevido, y muy convencido de que lo hizo a propósito.',
          },
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'Peach, la planificadora prudente',
            text: 'Un ladrillo color melocotón con un melocotón pequeñito encima. Peach cuenta los movimientos dos veces, tiene siempre un plan B y se preocupa de principio a fin, hasta que el montón por fin se abre y lo celebra.',
          },
          {
            t: 'friend',
            friend: 'sprout',
            pose: 'think',
            title: 'Sprout, el de las preguntas',
            text: 'Un ladrillo verde pequeño con un brote encima. Sprout se fija en el hueco que todos los demás pasaron por alto y hace la pregunta que nadie había hecho. Cuando sale bien, dos saltitos y una vuelta.',
          },
        ],
      },
      {
        id: 'bricko-zippy-vio',
        title: 'Bricko, Zippy y Vio',
        blocks: [
          {
            t: 'friend',
            friend: 'bricko',
            pose: 'cheer',
            title: 'Bricko, el que hace series',
            text: 'Un ladrillo rojo con unas botas rojas enormes que se toma cada tablero como una serie en el gimnasio. Bricko cuenta sus repeticiones, y un tablero superado se gana un pulgar arriba y luego un bíceps, por ese orden.',
          },
          {
            t: 'friend',
            friend: 'zippy',
            pose: 'idle',
            title: 'Zippy, el despistado',
            text: 'Un ladrillo amarillo siempre listo para guiñar un ojo. Zippy empieza una idea, pierde el hilo a la mitad y vuelve justo para la victoria. Si le das un toque, da una vuelta; si ganas, da tres saltos.',
          },
          {
            t: 'friend',
            friend: 'vio',
            pose: 'idle',
            title: 'Vio, la crítica con cascos',
            text: 'Un ladrillo morado con cascos que oye ritmo en una buena serie de movimientos. Vio puntúa tus movimientos como si fueran canciones, se balancea a 112 pulsaciones por minuto y trata un tablero bien resuelto como un tema de cinco estrellas.',
          },
        ],
      },
      {
        id: 'moss-flurry-poppy',
        title: 'Moss, Flurry y Poppy',
        blocks: [
          {
            t: 'friend',
            friend: 'moss',
            pose: 'idle',
            title: 'Moss, el mozo de granja',
            text: 'Un ladrillo verde oscuro con cinturón de herramientas y botas de trabajo llenas de barro, y un refrán de campo para cada tiempo. Moss guarda un aplauso lento para cuando te lo has ganado, y por eso vale tanto.',
          },
          {
            t: 'friend',
            friend: 'flurry',
            pose: 'idle',
            title: 'Flurry, el de la bufanda',
            text: 'Un ladrillo azul claro con gorro de pompón y bufanda de rayas, aficionado al té y a saludar con suavidad. Flurry nunca tiene prisa, lo que encaja con un juego sin reloj. Fíjate en la bufanda: su punta siempre se balancea un instante tarde.',
          },
          {
            t: 'friend',
            friend: 'poppy',
            pose: 'cheer',
            title: 'Poppy, la cuentacuentos',
            text: 'Un ladrillo rosa con una varita con una estrella en la punta. Para Poppy, cada tablero es la mitad de un cuento de hadas, y el final llega cuando la varita estalla en estrellas.',
          },
        ],
      },
      {
        id: 'where',
        title: 'Dónde te los encuentras',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Inicio', text: 'Tres amigos en el escenario de ladrillos de juguete, por turnos.' },
              { term: 'En cada tablero', text: 'El amigo anfitrión de la aldea aparece en el marco redondo de la cabecera, vestido para esa aldea. Tócalo y se reirá, te saludará o chocará los cinco contigo.' },
              { term: 'Victorias y casi victorias', text: 'Un amigo lo celebra en la tarjeta de victoria, y otro te consuela en **Nivel fallido** cuando un tablero se te escapa.' },
              { term: 'El Armario', text: 'Looks para los amigos, como la corona dorada y la gorguera roja de King Bricko. Las piezas del Armario cambian el aspecto del juego, nunca cómo se juega.' },
              { term: 'La Colección', text: 'Las Cartas de temporada, nueve por temporada, muestran a los amigos.' },
              { term: 'Fuera del juego', text: 'Dile a Siri «Saluda a Bloo en OutBrick» (o el nombre de cualquier amigo), busca a un amigo en Spotlight, añade el widget **Mascota del día** o **Ánimo de la mascota**, o envía el sticker de un amigo en Mensajes.' },
            ],
          },
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'El Armario: King Bricko con una corona dorada y una gorguera roja junto a un botón verde Ponérselo y, debajo, las pestañas Looks, Bandejas, Paletas y Acabado del ladrillo, y el Seaside Set.',
            caption: 'Looks, bandejas, paletas, acabados de ladrillo, celebraciones, estelas y marcos.',
          },
          {
            t: 'p',
            text: 'Más en [Los amigos, la Colección y el Armario](help:friends-and-wardrobe).',
          },
        ],
      },
      {
        id: 'bubbles',
        title: 'Bocadillos de texto y Mascotas con IA',
        blocks: [
          {
            t: 'p',
            text: 'Los amigos te animan con bocadillos de texto. En los dispositivos con el modelo de lenguaje integrado de Apple, también pueden inventarse sus propias frases: **Ajustes › Juego › Mascotas con IA**, que solo aparece donde el modelo está disponible en tu idioma. Todo ocurre en tu dispositivo, y al desactivarlo vuelven sus frases de siempre.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Preguntas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: '¿Puedo elegir qué amigo es el anfitrión de un tablero?',
                a: 'Cada aldea tiene su propio amigo anfitrión, que aparece en el marco de la cabecera vestido para esa aldea. Puedes cambiarle el look en el Armario.',
              },
              {
                q: '¿Por qué no hablan los amigos?',
                a: 'Solo hablan con bocadillos de texto, así que todo lo que dicen se puede leer y nada depende del oído.',
              },
              {
                q: '¿Los amigos cambian cómo se juega un tablero?',
                a: 'No. Los amigos y sus looks están ahí para hacer compañía y celebrar. Cada tablero se juega igual sea quien sea el anfitrión.',
              },
              {
                q: '¿Puedo poner a un amigo en mi pantalla de inicio?',
                a: 'Sí. Añade el widget **Mascota del día** o **Ánimo de la mascota** y elige un amigo, o «Sorpréndeme». Consulta [Widgets, Siri y Atajos](help:apple-features#widgets).',
              },
            ],
          },
        ],
      },
    ],
    related: ['friends-and-wardrobe', 'menus-tour', 'apple-features', 'welcome', 'glossary'],
  },

  {
    slug: 'lost-progress-and-purchases',
    category: 'account',
    cover: 'shop',
    title: 'Progreso perdido o una compra que falta: paso a paso',
    summary:
      'Recupera una compra con Restaurar compra, qué enviarnos si sigue sin aparecer, cómo gestiona Apple los reembolsos y cómo recuperar el progreso a través de iCloud, en un iPhone o iPad nuevo y con Game Center.',
    keywords:
      'progreso perdido compra que falta restaurar compra no recibido no ha llegado comprado pagado cobrado cargo reembolso devolución devolver dinero reportaproblem recibo número de pedido icloud sincronizar móvil nuevo teléfono nuevo transferir reinstalar game center nivel reiniciado desaparecido',
    host: 'moss',
    hostPose: 'idle',
    sections: [
      {
        id: 'start',
        title: 'Empieza aquí',
        blocks: [
          {
            t: 'p',
            text: 'Casi todo lo que falta vuelve en un minuto o dos. Busca tu problema aquí abajo y sigue sus pasos en orden.',
          },
          {
            t: 'table',
            head: ['Qué ha pasado', 'Ve a'],
            rows: [
              ['Algo que compré no está en el juego', '[Recuperar una compra](#restore)'],
              ['He restaurado y sigue sin aparecer', '[Sigue sin aparecer: escríbenos](#still-missing)'],
              ['Quiero que me devuelvan el dinero', '[Los reembolsos son cosa de Apple](#refunds)'],
              ['Han desaparecido mi nivel, mis monedas o mis estrellas', '[Falta el progreso](#progress)'],
              ['Tengo un iPhone o iPad nuevo', '[Pasarte a un dispositivo nuevo](#new-device)'],
              ['Mis logros o mis puntuaciones de Game Center', '[Game Center](#game-center)'],
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            title: 'Nunca te pediremos la contraseña de tu Cuenta de Apple ni los datos de tu tarjeta.',
            text: 'Ni por correo, ni en la comunidad, ni en ninguna parte. Nadie de OutBrick los necesita, y no podemos ver los pagos. Si un mensaje que dice venir de nosotros te los pide, no respondas.',
          },
        ],
      },
      {
        id: 'restore',
        title: 'Recuperar una compra',
        blocks: [
          {
            t: 'steps',
            items: [
              'Comprueba que el dispositivo tiene la sesión iniciada con la **misma Cuenta de Apple** con la que compraste, y en iCloud: **Ajustes ›** tu nombre.',
              'Abre OutBrick y déjalo un momento con conexión.',
              'Abre la **Tienda** y baja hasta el final del todo.',
              'Toca **Restaurar compra**.',
            ],
          },
          {
            t: 'table',
            caption: 'Qué se recupera, y cómo',
            head: ['Artículo', 'Cómo se recupera'],
            rows: [
              ['Quitar anuncios', '**Restaurar compra**'],
              ['Temporadas 1 a 3 del Pase Ladrillo', '**Restaurar compra**'],
              ['Artículos del Armario', '**Restaurar compra**'],
              ['Monedas, potenciadores, vidas y otras cosas que se gastan', 'Con tu progreso, a través de iCloud. El App Store no las restaura.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Comprueba que la compra se completó',
            text: 'En el iPhone, **Ajustes ›** tu nombre **› Contenido y compras › Ver cuenta › Historial de compras** muestra lo que Apple ha cobrado. Si el artículo no aparece, el pago no se completó. Con **Solicitar la compra**, una compra espera hasta que el organizador familiar la aprueba.',
          },
        ],
      },
      {
        id: 'still-missing',
        title: 'Sigue sin aparecer: escríbenos',
        blocks: [
          {
            t: 'steps',
            items: [
              'Abre nuestro [formulario de contacto con Compras y reembolsos ya elegido](/contact?topic=purchases).',
              'Di **qué compraste** y **cuándo**; una fecha aproximada vale.',
              'Añade tu dispositivo, la versión de iOS y la versión de OutBrick. La versión del juego está al pie de tu **Perfil** (toca tu avatar).',
              'Envíalo. Una persona lee cada mensaje, y recibirás un correo con una referencia y un enlace privado.',
              'Sigue tu caso en [tu solicitud de soporte](/support/request): en qué punto está, cada respuesta y un sitio para añadir detalles.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Qué compartir, y dónde',
            text: 'Puedes incluir tu **número de pedido de Apple** en el formulario de contacto privado. Nunca publiques un recibo, un número de pedido ni una captura de una compra en la comunidad, y nunca envíes a nadie un recibo completo, un número de tarjeta, una contraseña ni un código de seguridad.',
          },
        ],
      },
      {
        id: 'refunds',
        title: 'Los reembolsos son cosa de Apple',
        blocks: [
          {
            t: 'p',
            text: 'Apple cobra todos los pagos de OutBrick, así que solo Apple decide sobre los reembolsos. Nosotros no podemos ver tus datos de pago ni reembolsar una compra del App Store.',
          },
          {
            t: 'steps',
            items: [
              'Entra en [reportaproblem.apple.com](https://reportaproblem.apple.com).',
              'Inicia sesión con la Cuenta de Apple con la que se hizo la compra.',
              'Elige **Solicitar un reembolso**, elige un motivo y luego la compra de OutBrick.',
              'Envíalo y consulta su estado con Apple. La aprobación y los plazos los fijan Apple y la legislación de consumo de tu país.',
            ],
          },
          {
            t: 'p',
            text: 'Un cargo inesperado o duplicado sigue el mismo camino: revisa primero el **Historial de compras** y luego usa Notificar un problema. Más información en nuestra [página de reembolsos](/refunds).',
          },
        ],
      },
      {
        id: 'progress',
        title: 'Falta el progreso',
        blocks: [
          {
            t: 'steps',
            items: [
              'Comprueba que has iniciado sesión en iCloud con la misma Cuenta de Apple que antes y que iCloud Drive está activado.',
              'Abre OutBrick con conexión y déjalo un minuto. El progreso se descarga y se combina al iniciar el juego.',
              'Cierra el juego del todo y vuelve a abrirlo.',
              'Si otro dispositivo tiene el progreso que esperas, abre OutBrick también allí, con conexión, para que pueda compartir su partida.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'No se sobrescribe nada',
            text: 'Cuando dos dispositivos no coinciden, se conservan el nivel y las cuentas más altos, las colecciones se combinan y las monedas gastadas en un dispositivo nunca se devuelven desde otro.',
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'Si un dispositivo nunca tuvo la sesión de iCloud iniciada, su progreso solo existe en ese dispositivo. Inicia sesión en iCloud allí y abre OutBrick una vez; después, vuelve a comprobar el otro dispositivo.',
          },
          {
            t: 'p',
            text: '**Borrar mis datos** no se puede deshacer. Después de usarlo, otro dispositivo con la misma cuenta de iCloud podría volver a sincronizar una partida anterior, así que úsalo en todos los dispositivos si quieres empezar de cero. Consulta [Progreso, iCloud y privacidad](help:progress-privacy-and-account#delete).',
          },
        ],
      },
      {
        id: 'new-device',
        title: 'Pasarte a un iPhone o iPad nuevo',
        blocks: [
          {
            t: 'steps',
            items: [
              'Antes de cambiar, abre OutBrick una vez en el dispositivo **antiguo** con la sesión de iCloud iniciada.',
              'En el dispositivo nuevo, inicia sesión con la misma Cuenta de Apple y activa iCloud.',
              'Instala OutBrick desde el App Store y ábrelo. Tu progreso se descarga y se combina al iniciar el juego.',
              'Abre la **Tienda**, baja hasta el final y toca **Restaurar compra**.',
            ],
          },
          {
            t: 'p',
            text: 'El sonido, la música, la vibración, las notificaciones y la mayoría de los ajustes de accesibilidad del tablero se quedan en cada dispositivo, así que vuelve a elegirlos en el nuevo. Tu elección del Modo daltónico viaja con tu progreso.',
          },
        ],
      },
      {
        id: 'game-center',
        title: 'Game Center',
        blocks: [
          {
            t: 'list',
            items: [
              '**Game Center** es un servicio de Apple. Guarda tus 65 logros y las clasificaciones de nivel más alto, total de tableros superados, hoy y esta semana.',
              'Tu **progreso del Viaje no se guarda en Game Center**. Viaja a través de iCloud.',
              'Inicia sesión en Game Center en los Ajustes del iPhone con la misma Cuenta de Apple para volver a ver tus logros.',
              'La pestaña **Ranking** del juego es una clasificación histórica aparte. Apareces en ella mientras esté activado **Ajustes › Juego › Mostrarme en la clasificación**.',
            ],
          },
        ],
      },
      {
        id: 'questions',
        title: 'Preguntas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: '¿Me podéis hacer un reembolso?',
                a: 'No, solo Apple puede. Usa [reportaproblem.apple.com](https://reportaproblem.apple.com). Si el artículo no llegó nunca, en eso sí podemos ayudar: [escríbenos](/contact?topic=purchases).',
              },
              {
                q: '¿Por qué Restaurar compra no me ha devuelto las monedas?',
                a: 'Las monedas, los potenciadores y las vidas se gastan al jugar, así que el App Store no los restaura. Viajan con tu progreso a través de iCloud.',
              },
              {
                q: '¿Publico mi recibo para que lo comprobéis?',
                a: 'Por favor, no. Nunca publiques un recibo en la comunidad. Usa el [formulario de contacto](/contact?topic=purchases) privado, y deja fuera números de tarjeta, contraseñas y códigos de seguridad.',
              },
              {
                q: 'Alguien me ha pedido la contraseña de mi Cuenta de Apple para arreglar mi compra.',
                a: 'No éramos nosotros. Nunca pedimos la contraseña de tu Cuenta de Apple ni los datos de tu tarjeta. No los compartas, y avísanos a través del [formulario de contacto](/contact).',
              },
              {
                q: 'He reinstalado OutBrick y he vuelto al nivel 1.',
                a: 'Mantente un minuto con conexión, con iCloud activado y la misma Cuenta de Apple. Si nada cambia, puede que el progreso anterior estuviera en un dispositivo sin la sesión de iCloud iniciada: consulta [Falta el progreso](#progress).',
              },
            ],
          },
        ],
      },
    ],
    related: ['shop-and-purchases', 'progress-privacy-and-account', 'troubleshooting', 'parents-guide', 'apple-features', 'common-questions'],
  },
];
