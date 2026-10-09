import type { HelpArticle } from '../../model.ts';

/** Ajustes, funciones de Apple, progreso y privacidad, en español. Comprobado con la 5.1.1 (68). */
export const accountArticles: HelpArticle[] = [
  {
    slug: 'settings',
    category: 'account',
    cover: 'settings-community',
    title: 'Todos los ajustes, explicados',
    summary:
      'Cada interruptor y botón de las pestañas Juego y Accesibilidad de los Ajustes, qué hace, con qué valor empieza y adónde llevan los enlaces de soporte, comunidad y privacidad.',
    keywords: 'ajustes opciones preferencias configuración sonido música vibración háptica notificaciones juego rápido mascotas ia clasificación funciones del juego valorar contacto comunidad informar error opciones de anuncios privacidad borrar datos',
    sections: [
      {
        id: 'open',
        title: 'Abrir los Ajustes',
        blocks: [
          {
            t: 'p',
            text: 'Toca el engranaje de la esquina superior derecha de **Inicio** o del **Viaje**. Los Ajustes ocupan toda la pantalla; la **×** roja los cierra (también {{Esc}} en un teclado, o el gesto de frotar con dos dedos con VoiceOver). Tienen dos pestañas: **Juego**, que se abre primero, y **Accesibilidad**.',
          },
          {
            t: 'p',
            text: 'Cada interruptor muestra **No | Sí**, con una línea debajo que explica lo que hace. VoiceOver lee esa línea como la sugerencia del interruptor.',
          },
        ],
      },
      {
        id: 'game',
        title: 'La pestaña Juego',
        blocks: [
          {
            t: 'table',
            head: ['Ajuste', 'Qué hace', 'Valor inicial'],
            rows: [
              ['Notificaciones', 'Recordatorios del juego, como vidas llenas o una recompensa diaria esperando. Al activarlo, pide permiso a iOS si nunca lo ha pedido.', 'Sí'],
              ['Sonidos', 'Efectos de sonido en los tableros y en los menús.', 'Sí'],
              ['Música', 'La música de fondo en los menús y en los tableros.', 'Sí'],
              ['Vibración', 'Toques que notas cuando las piezas se mueven, combinan y caen. Solo en los dispositivos que pueden vibrar.', 'Sí'],
              ['Juego rápido', 'Tras ganar, pasa directamente al siguiente tablero en lugar de volver al mapa del Viaje.', 'Sí'],
              ['Mascotas con IA', 'Los amigos inventan sus propias frases con el modelo de lenguaje de tu dispositivo. Solo aparece donde el modelo integrado de Apple está disponible en tu idioma.', 'Sí'],
              ['Mostrarme en la clasificación', 'Publica tu nombre de jugador y tu nivel para todo el mundo en la pestaña Ranking. Si lo desactivas, desapareces de ella.', 'Sí'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Sonidos, Música y Vibración también están en el menú de Pausa durante un tablero. Si un **filtro de Concentración** de OutBrick está cambiando el sonido o los recordatorios, una línea bajo Música te lo dice; tus propios ajustes nunca se modifican.',
          },
          { t: 'shot', id: 'settings-game', alt: 'Ajustes en la pestaña Juego: interruptores activados para notificaciones, sonidos, música, juego rápido y charla con IA de las mascotas, cada uno con una línea que lo explica, y después los botones Funciones del juego, Valorar OutBrick, Contactar, Comunidad, Informar de un error y Soporte.', caption: 'Ajustes › Juego.' },
        ],
      },
      {
        id: 'buttons',
        title: 'Los botones bajo los interruptores',
        blocks: [
          {
            t: 'shot',
            id: 'settings-community',
            alt: 'La parte inferior de la pestaña Juego: un interruptor de Mascotas con IA, un botón Funciones del juego, Valorar OutBrick y Contacto uno al lado del otro, Comunidad e Informar de un error uno al lado del otro, un botón verde de Soporte, Términos y Privacidad, un título Más información con Licencia, CLUF de Apple, Clasificación por edad, Accesibilidad, Opciones de privacidad y Reembolsos, y Borrar mis datos al final del todo.',
            caption: 'El pie de la pestaña Juego: ayuda, comunidad, enlaces legales y Borrar mis datos.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Funciones del juego', text: 'Desactiva **Rescate de amigos**, **Carrera del pueblo**, **Brick Royale**, **Carrera del equipo** u **Ofertas en el mapa** si prefieres no verlos. No pierdes nada de lo que has ganado.' },
              { term: 'Valorar OutBrick', text: 'Abre la página de valoraciones del App Store. Valorar no da ninguna recompensa, y el juego solo lo pide unas pocas veces al año, nunca después de perder ni de una compra.' },
              { term: 'Contacto', text: 'Abre nuestro [formulario de contacto](/contact) dentro del juego: la forma privada de escribir al equipo.' },
              { term: 'Comunidad', text: 'Abre esta comunidad en Safari.' },
              { term: 'Informar de un error', text: 'Abre un informe de error en Safari con tu dispositivo, la versión de iOS, la versión del juego, los ajustes de accesibilidad y el nivel ya rellenados. Consulta [Cómo informar bien de un error](help:reporting-bugs).' },
              { term: 'Opciones de anuncios', text: 'Solo aparece donde se exige un formulario de consentimiento para anuncios (por ejemplo, en la UE y en el Reino Unido). Lo vuelve a abrir para que puedas cambiar tu elección.' },
              { term: 'Soporte, Términos, Privacidad', text: 'Nuestras páginas de [soporte](/support), [términos](/terms) y [política de privacidad](/privacy).' },
              { term: 'Más información', text: '[Licencia](/license-agreement), [CLUF de Apple](/eula), [Clasificación por edad](/age-rating), [Accesibilidad](/accessibility), [Opciones de privacidad](/privacy-choices) y [Reembolsos](/refunds).' },
              { term: 'Borrar mis datos', text: 'Restablece tu progreso en este dispositivo y pide a iCloud que borre tu partida. Consulta [Progreso, iCloud y privacidad](help:progress-privacy-and-account#delete).' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Comunidad e Informar de un error se abren en Safari, fuera del juego, porque la comunidad es un lugar para mayores de 16 años y el juego en sí está clasificado para mayores de 4.',
          },
        ],
      },
      {
        id: 'accessibility',
        title: 'La pestaña Accesibilidad',
        blocks: [
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'La pestaña Accesibilidad: Velocidad de animación del 50 % al 200 %, Detalle de los avisos Breve, Estándar o Completo, e interruptores para Modo daltónico, Tablero de alto contraste, Bandeja para zurdos, Confirmar cambios y Sonido de fila.',
            caption: 'Ajustes › Accesibilidad.',
          },
          {
            t: 'p',
            text: 'Velocidad de animación, Detalle de los avisos, Modo daltónico, Tablero de alto contraste, Bandeja para zurdos, Confirmar cambios y Sonido de fila se explican uno a uno en [Accesibilidad en OutBrick](help:accessibility#where).',
          },
        ],
      },
      {
        id: 'elsewhere',
        title: 'Lo que no está en los Ajustes',
        blocks: [
          {
            t: 'list',
            items: [
              '**Restaurar compras:** al final de la **Tienda**.',
              '**Tu nombre, tu avatar y tu bandera:** en tu **Perfil** (toca tu avatar).',
              '**El número de versión del juego:** al pie de tu **Perfil**.',
              '**Idioma:** OutBrick sigue el idioma de tu iPhone. Para elegir otro solo para OutBrick, abre **Ajustes › Apps › OutBrick › Idioma** en el iPhone.',
              '**Actividades en directo y estilos de notificación:** en **Ajustes › Apps › OutBrick** del iPhone.',
            ],
          },
        ],
      },
    ],
    related: ['accessibility', 'apple-features', 'progress-privacy-and-account', 'menus-tour'],
  },

  {
    slug: 'apple-features',
    category: 'apple',
    cover: 'home',
    title: 'Widgets, Siri, Atajos y otras funciones de Apple',
    summary:
      'Widgets de la pantalla de inicio y de la pantalla de bloqueo, Centro de control, Actividades en directo, frases para Siri, Spotlight, Handoff, retos en Mensajes, notificaciones y el globo del icono, filtros de Concentración y Game Center.',
    keywords: 'widget pantalla de bloqueo centro de control actividad en directo dynamic island siri atajos app intents spotlight handoff imessage mensajes stickers pegatinas reto notificación globo indicador acciones rápidas concentración game center logros inteligencia visual',
    sections: [
      {
        id: 'widgets',
        title: 'Widgets de la pantalla de inicio',
        blocks: [
          {
            t: 'p',
            text: 'Mantén pulsada una zona vacía de la pantalla de inicio, toca **Editar › Añadir widget** y busca OutBrick. Algunos widgets se pueden configurar: mantén pulsado uno y toca **Editar widget**.',
          },
          {
            t: 'table',
            head: ['Widget', 'Muestra'],
            rows: [
              ['Próximo nivel / Continuar', 'Te lleva directo a tu siguiente tablero.'],
              ['Viaje', 'Tu nivel, los tableros superados, tu grado del Pase Ladrillo y la próxima recompensa.'],
              ['Ladrillo diario', 'Tus monedas diarias y tu racha.'],
              ['Racha y Calendario de racha', 'Tu racha de días. El widget Racha también fija la hora del recordatorio de tu racha (de 9:00 a 21:00).'],
              ['Vidas', 'Las vidas de tu reserva y cuándo llega la siguiente. También en la pantalla de bloqueo.'],
              ['Mascota del día y Ánimo de la mascota', 'Un amigo: el que elijas, o «Sorpréndeme».'],
              ['Capítulo y Mapa del capítulo', 'Tu avance por un capítulo: el actual o el que elijas.'],
              ['Eventos y Fin de temporada', 'El evento en curso o el siguiente, y el tiempo que queda de temporada.'],
              ['Pase Ladrillo y Próxima recompensa', 'Tu grado y lo que viene después.'],
              ['Monedas y mejoras', 'Tus monedas y tus potenciadores.'],
              ['Colección', 'Tus últimas cartas.'],
              ['Tablero al azar', 'Un tablero al azar, jugado dentro del propio widget en iOS 17 o posterior.'],
              ['Esta semana', 'Tus mejores márgenes de la semana.'],
              ['Reloj y móvil', 'Tu nivel del Apple Watch junto a tu nivel del iPhone.'],
            ],
          },
          {
            t: 'p',
            text: '**Pantalla de bloqueo:** un widget de OutBrick, Anillo de racha, Monedas, Ladrillo diario, Próximo nivel, Cuenta atrás (del evento) y Pase Ladrillo, además de pequeñas líneas de texto con tu racha, tu nivel o tu Ladrillo diario.',
          },
        ],
      },
      {
        id: 'control-center',
        title: 'Centro de control y Actividades en directo',
        blocks: [
          {
            t: 'list',
            items: [
              '**Centro de control** (iOS 18 o posterior): ábrelo, toca **+**, luego **Añadir un control** y busca OutBrick. Hay botones para Seguir nivel, Abrir Viaje, Abrir tienda y Nivel al azar, interruptores para **Música** y **Modo daltónico**, y controles de estado para tu racha, tus vidas y un amigo.',
              '**Actividad en directo:** mientras juegas un tablero, su progreso aparece en la pantalla de bloqueo y en la Dynamic Island. Si sales del juego, te dice que tu tablero te espera; si lo superas, muestra tu resultado. Tócala para volver. Desactiva las Actividades en directo en **Ajustes › Apps › OutBrick** del iPhone.',
            ],
          },
        ],
      },
      {
        id: 'siri',
        title: 'Siri y Atajos',
        blocks: [
          {
            t: 'p',
            text: 'Dile a Siri cualquiera de estas frases, o búscalas en la app **Atajos**, dentro de OutBrick. Las preguntas se responden sin abrir el juego.',
          },
          {
            t: 'table',
            head: ['Di', 'Qué pasa'],
            rows: [
              ['«Juega a OutBrick» · «Continúa mi viaje en OutBrick»', 'Abre tu siguiente tablero.'],
              ['«Juega al nivel 120 en OutBrick»', 'Abre ese nivel (uno al que ya hayas llegado).'],
              ['«Abre Ciudad Jardín en OutBrick»', 'Abre una aldea en el mapa.'],
              ['«Saluda a Bloo en OutBrick»', 'Visita a un amigo.'],
              ['«¿En qué nivel estoy en OutBrick?»', 'Te dice tu nivel y tu avance.'],
              ['«¿Cuántas vidas tengo en OutBrick?» · «¿Cuándo vuelve mi próxima vida en OutBrick?»', 'Te dice tus vidas.'],
              ['«¿Cuántas estrellas tengo en OutBrick?»', 'Cuenta tus estrellas.'],
              ['«¿Tengo la racha a salvo en OutBrick?»', 'Te dice tu racha y cómo va el Ladrillo diario de hoy.'],
              ['«¿Cuántas monedas tengo en OutBrick?»', 'Te dice tus monedas y tus potenciadores.'],
              ['«¿Cuándo termina el evento de OutBrick?»', 'Te dice cuánto le queda al evento.'],
            ],
          },
          {
            t: 'p',
            text: 'Atajos también ofrece acciones como **Explicar mi siguiente movimiento**, **Ajustar música**, **Ajustar modo daltónico**, **Abrir misiones** y **Jugar a un nivel al azar**.',
          },
        ],
      },
      {
        id: 'spotlight',
        title: 'Spotlight, Handoff y acciones rápidas',
        blocks: [
          {
            t: 'list',
            items: [
              '**Spotlight:** desliza hacia abajo en la pantalla de inicio y busca un nivel al que hayas llegado, una aldea, un capítulo, un amigo, un evento o pantallas como «Ajustes de accesibilidad» y «Pase Ladrillo».',
              '**Acciones rápidas:** mantén pulsado el icono de OutBrick para **Jugar el siguiente nivel**, **Viaje** y **Tienda**.',
              '**Handoff:** empieza un tablero en un dispositivo y continúalo en otro con la misma Cuenta de Apple.',
              '**Inteligencia visual** (iOS 26 o posterior): apunta con la cámara a una ilustración de OutBrick, o haz una captura de pantalla, para encontrar la aldea, el amigo o el nivel correspondiente. Todo ocurre en tu dispositivo.',
            ],
          },
        ],
      },
      {
        id: 'messages',
        title: 'Retos y stickers en Mensajes',
        blocks: [
          {
            t: 'p',
            text: 'En una conversación de Mensajes, toca **+**, luego **Más** si hace falta, y después **OutBrick**. Envía un nivel como tarjeta de reto, o uno de los stickers de los amigos. Quien no tenga el juego recibe un enlace que abre una página de esta web.',
          },
        ],
      },
      {
        id: 'notifications',
        title: 'Notificaciones y el globo del icono',
        blocks: [
          {
            t: 'list',
            items: [
              'El juego nunca pide permiso para las notificaciones al abrirse. Después de tu tercer tablero superado, pregunta si Bloo puede guardarte el sitio; **Ahora no** espera una semana.',
              'Como mucho **una notificación cada 20 horas**, y nunca entre las 22:00 y las 9:00. Cada una ofrece **Jugar**, **Más tarde** (tres horas) o **Posponer a mañana**.',
              'Los recordatorios: un tablero que dejaste a medias, vidas recargadas, misiones listas, tu racha (a la hora que elijas en el widget Racha; a las 20:30 por defecto), eventos que empiezan, una temporada que termina y un resumen los domingos.',
              'El **globo del icono** cuenta las recompensas que te esperan (misiones por recoger, grados del Pase Ladrillo, recompensas por estrellas de las aldeas, el primer tablero superado de hoy), hasta nueve. Al abrir el juego desaparece sin recoger nada.',
              'Desactiva los recordatorios en **Ajustes › Juego › Notificaciones**, o en los Ajustes del iPhone.',
            ],
          },
        ],
      },
      {
        id: 'focus',
        title: 'Filtros de Concentración',
        blocks: [
          {
            t: 'p',
            text: 'En **Ajustes › Concentración** del iPhone, elige un modo de Concentración y luego **Añadir filtro › OutBrick**. Mientras ese modo esté activado, OutBrick puede apagar la música (o la música y los sonidos), pausar los recordatorios y ocultar el globo del icono.',
          },
        ],
      },
      {
        id: 'game-center',
        title: 'Game Center',
        blocks: [
          {
            t: 'p',
            text: 'Inicia sesión en Game Center desde los Ajustes del iPhone para desbloquear 65 logros (entre ellos, uno por cada uno de los 50 primeros capítulos) y clasificaciones de nivel más alto, total de tableros superados, hoy y esta semana. Abre Game Center desde la insignia del Viaje o desde el menú de Pausa. La pestaña Ranking del juego es una clasificación histórica aparte.',
          },
        ],
      },
    ],
    related: ['settings', 'progress-privacy-and-account', 'rewards-and-events', 'accessibility'],
  },

  {
    slug: 'progress-privacy-and-account',
    category: 'account',
    cover: 'journey',
    title: 'Progreso, iCloud, dispositivos nuevos y privacidad',
    summary:
      'Cómo se guarda y se sincroniza tu progreso a través de iCloud, cómo pasarte a un iPhone nuevo, qué se comparte y con quién, las opciones de publicidad y rastreo, y cómo borrar tus datos.',
    keywords: 'guardar partida progreso perdido sincronizar icloud móvil nuevo transferir reinstalar restaurar borrar restablecer privacidad datos rastreo att anuncios consentimiento clasificación nombre',
    sections: [
      {
        id: 'saved',
        title: 'Cómo se guarda tu progreso',
        blocks: [
          {
            t: 'list',
            items: [
              'El progreso se guarda en tu dispositivo y, si has iniciado sesión en iCloud, en tu propia cuenta de iCloud. No hay ninguna cuenta de OutBrick que crear.',
              'iCloud guarda tu nivel, tus estrellas, monedas, potenciadores, vidas y deshacer, tus rachas, el Pase Ladrillo, la Colección, el Armario, tu nombre, tu avatar y tus estadísticas, y tu elección del Modo daltónico.',
              'El sonido, la música, la vibración, las notificaciones y los ajustes de accesibilidad del tablero se quedan en cada dispositivo.',
              'Cuando dos dispositivos no coinciden, no se sobrescribe nada: se conservan el nivel y las cuentas más altos, las colecciones se combinan y las monedas gastadas en un dispositivo nunca se devuelven desde otro.',
            ],
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
              'En el dispositivo nuevo, inicia sesión con la misma Cuenta de Apple y activa iCloud.',
              'Instala OutBrick desde el App Store y ábrelo. Tu progreso se descarga y se combina al iniciar el juego.',
              'Abre la **Tienda**, baja hasta el final y toca **Restaurar compra** para recuperar Quitar anuncios, las temporadas del Pase Ladrillo y los artículos del Armario.',
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'Si en el dispositivo antiguo no tenías la sesión de iCloud iniciada, su progreso solo estaba en ese dispositivo. Inicia sesión en iCloud allí y abre OutBrick una vez antes de cambiar.',
          },
        ],
      },
      {
        id: 'shared',
        title: 'Qué se comparte y con quién',
        blocks: [
          {
            t: 'list',
            items: [
              '**La pestaña Ranking** muestra tu nombre de jugador, tu nivel y, si quieres, una bandera. Desactiva **Ajustes › Juego › Mostrarme en la clasificación** para desaparecer de ella; oculta tu bandera en tu Perfil.',
              '**Carrera del pueblo y Brick Royale** comparten tu nombre de jugador con los jugadores de esa carrera, solo si te unes.',
              '**Game Center** es de Apple y depende de tus ajustes de Game Center.',
              'OutBrick **no usa analíticas**, y los datos propios del juego no se usan para rastrearte. El socio publicitario (Google AdMob) gestiona sus propios datos para los vídeos opcionales; consulta nuestra [política de privacidad](/privacy).',
            ],
          },
        ],
      },
      {
        id: 'ads-privacy',
        title: 'Opciones de publicidad y rastreo',
        blocks: [
          {
            t: 'list',
            items: [
              'Puede que iOS te pregunte si OutBrick puede rastrearte. **Solicitar a la app que no rastree** funciona sin problema: los vídeos se siguen reproduciendo y las recompensas se siguen pagando.',
              'En la UE, el Reino Unido y Suiza aparece un formulario de consentimiento la primera vez que eliges un vídeo. Cambia tu respuesta cuando quieras en **Ajustes › Juego › Opciones de anuncios**.',
              'Más información en nuestra página de [opciones de privacidad](/privacy-choices).',
            ],
          },
        ],
      },
      {
        id: 'delete',
        title: 'Borrar tus datos',
        blocks: [
          {
            t: 'steps',
            items: [
              'Abre **Ajustes** y baja hasta el final de la pestaña **Juego**.',
              'Toca **Borrar mis datos**, lee la tarjeta y toca **Continuar**.',
            ],
          },
          {
            t: 'p',
            text: 'Esto restablece tu progreso, tus monedas, tus potenciadores y tus estadísticas en este dispositivo y pide a iCloud que borre tu partida. Otro dispositivo con la misma cuenta de iCloud podría volver a sincronizar una partida anterior, así que hazlo también allí. Las compras que tengas se pueden restaurar después desde la Tienda, y las fotos que hayas guardado o compartido no se tocan. **No se puede deshacer.**',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Tu cuenta de la comunidad es independiente del juego. Bórrala desde los **Ajustes** de la comunidad después de iniciar sesión.',
          },
          { t: 'shot', id: 'delete-data', alt: 'La tarjeta para borrar los datos sobre Ajustes, con la advertencia completa y los botones Continuar y Cancelar.', caption: 'Antes de borrar nada, el juego vuelve a preguntar.' },
        ],
      },
    ],
    related: ['shop-and-purchases', 'settings', 'apple-features', 'troubleshooting'],
  },
];
