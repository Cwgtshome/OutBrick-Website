import type { HelpArticle } from '../../model.ts';

/** Solución de problemas, la comunidad e informes de errores, en español. Comprobado con la 5.1.1 (68). */
export const communityArticles: HelpArticle[] = [
  {
    slug: 'troubleshooting',
    category: 'community',
    cover: 'settings-community',
    title: 'Solucionar los problemas más comunes',
    summary:
      'Soluciones rápidas para el progreso que falta, compras que no han llegado, vidas que parecen atascadas, falta de sonido, notificaciones que no llegan, widgets, vídeos que no cargan y problemas con el foco de VoiceOver.',
    keywords: 'problema no funciona error arreglar ayuda progreso perdido compra no llega sin sonido notificaciones widget en blanco vídeo anuncio no carga voiceover foco salta cierre se cuelga congelado actualizar versión',
    sections: [
      {
        id: 'first',
        title: 'Primero, tres comprobaciones rápidas',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Actualiza OutBrick.** Abre el App Store, toca tu foto y actualiza OutBrick si aparece en la lista. Muchas correcciones llegan así.',
              '**Comprueba tu versión.** Toca tu avatar en Inicio: la versión está al final de tu Perfil, por ejemplo «OutBrick 5.1.1 (68)».',
              '**Cierra el juego y vuelve a abrirlo.** Desliza hacia arriba desde la parte inferior de la pantalla y detente, desliza OutBrick hacia arriba para cerrarlo y vuelve a abrirlo.',
            ],
          },
        ],
      },
      {
        id: 'progress',
        title: 'Falta mi progreso',
        blocks: [
          {
            t: 'list',
            items: [
              'Asegúrate de que has iniciado sesión en iCloud con la misma Cuenta de Apple que antes y de que iCloud Drive está activado.',
              'Abre OutBrick y déjalo un minuto con conexión: el progreso se descarga y se combina al iniciar el juego.',
              'Si el dispositivo antiguo nunca tuvo la sesión de iCloud iniciada, su progreso solo existe allí. Inicia sesión en el dispositivo antiguo, abre OutBrick una vez y vuelve a intentarlo en el nuevo.',
            ],
          },
          { t: 'p', text: 'Más en [Progreso, iCloud y privacidad](help:progress-privacy-and-account).' },
        ],
      },
      {
        id: 'purchase',
        title: 'No me ha llegado algo que compré',
        blocks: [
          {
            t: 'steps',
            items: [
              'Abre la **Tienda**, baja hasta el final y toca **Restaurar compra**.',
              'Para monedas, potenciadores y vidas, comprueba que iCloud está activado: viajan con tu progreso, no a través del App Store.',
              '¿Sigue sin aparecer? Escríbenos en privado con el [formulario de contacto](/contact), indicando la fecha y el artículo. Nunca publiques un recibo en la comunidad. Los reembolsos los gestiona Apple: consulta [Reembolsos](/refunds).',
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'Mis vidas no vuelven',
        blocks: [
          {
            t: 'p',
            text: 'Recuperas una vida cada 30 minutos, contados en tiempo real, así que se siguen recargando aunque el juego esté cerrado. Si atrasas el reloj del dispositivo, el juego lo ignora y puede que esperes más. Mantén activado **Ajustes › General › Fecha y hora › Ajuste automático**. Toca el corazón del Viaje para ver cuándo llega la siguiente vida.',
          },
        ],
      },
      {
        id: 'sound',
        title: 'No hay sonido ni música',
        blocks: [
          {
            t: 'list',
            items: [
              'Comprueba **Ajustes › Juego › Sonidos** y **Música**, o los mismos interruptores en el menú de Pausa.',
              'Comprueba el interruptor de tono/silencio y el volumen.',
              'Puede que un filtro de Concentración de OutBrick esté silenciando el juego: una línea bajo Música en los Ajustes te avisa cuando es así.',
            ],
          },
        ],
      },
      {
        id: 'notifications',
        title: 'No me llegan notificaciones',
        blocks: [
          {
            t: 'list',
            items: [
              'Comprueba **Ajustes › Juego › Notificaciones** en el juego, y **Ajustes › Notificaciones › OutBrick** en el iPhone.',
              'OutBrick envía como mucho una notificación cada 20 horas, y nunca entre las 22:00 y las 9:00, así que es normal que haya días sin ninguna.',
              'Puede que un modo de Concentración las esté reteniendo.',
            ],
          },
        ],
      },
      {
        id: 'widgets',
        title: 'Un widget está en blanco o desactualizado',
        blocks: [
          {
            t: 'p',
            text: 'Abre OutBrick una vez para que pueda compartir tu último progreso con sus widgets. Si un widget sigue viéndose mal, quítalo y vuelve a añadirlo. Los widgets se actualizan según un calendario que decide iOS, así que es normal un retraso de unos minutos.',
          },
        ],
      },
      {
        id: 'videos',
        title: 'Un vídeo no carga',
        blocks: [
          {
            t: 'list',
            items: [
              'Los vídeos necesitan conexión a internet, y a veces no hay ninguno disponible durante un momento: vuelve a intentarlo dentro de poco.',
              'Cada tipo de vídeo tiene un límite diario (39 en total), que se reinicia a medianoche. Cuando se alcanza un límite, su botón desaparece hasta el día siguiente.',
              'Solo un vídeo visto hasta el final paga su recompensa.',
            ],
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'VoiceOver vuelve al principio del tablero',
        blocks: [
          {
            t: 'p',
            text: 'Algunos jugadores nos han contado que VoiceOver puede perder su posición al recorrer un tablero. Hemos encontrado la causa: una tarjeta que ofrece ayuda puede abrirse sola mientras lees el tablero. La corrección llegará en una actualización. Mientras tanto:',
          },
          {
            t: 'list',
            items: [
              'Si aparece una tarjeta que ofrece potenciadores o una pista mientras lees el tablero, el **gesto de frotar con dos dedos** la cierra y te devuelve al tablero.',
              'Usa los **rotores** (Piezas que combinan, Especiales, Objetivos, Bloqueos, Puertas) para ir directo a lo que necesitas, en lugar de recorrer casilla por casilla.',
              'Usa las **acciones** de una pieza (desliza hacia arriba o hacia abajo) para moverla, así tu foco se queda en el tablero.',
              'Toca dos veces el resumen del **Tablero**, o usa **Leer el tablero**, para oír dónde está cada cosa.',
              'Cuéntanos tu dispositivo, la versión de iOS, la versión de OutBrick, el nivel y exactamente lo que dijo VoiceOver en la [categoría Accesibilidad](/community/c/accessibility). Cada informe nos ayuda a encontrarlo antes.',
            ],
          },
        ],
      },
      {
        id: 'stuck',
        title: 'Un tablero parece imposible',
        blocks: [
          {
            t: 'list',
            items: [
              'Nunca te quedas atascado del todo: si no hay ningún movimiento posible, el tablero se mezcla gratis.',
              'Usa la Pista, el Cohete y el OVNI gratis que tienes en cada intento.',
              'A partir de tu sexto intento en un tablero, una **ayudita** te da tres movimientos extra, una vez al día.',
              'Pregunta en [Ayuda y soporte](/community/c/help) indicando el número del nivel: a los demás jugadores les encantan los puzles.',
            ],
          },
        ],
      },
    ],
    related: ['reporting-bugs', 'progress-privacy-and-account', 'shop-and-purchases', 'voiceover'],
  },

  {
    slug: 'using-the-community',
    category: 'community',
    title: 'Usar la comunidad de OutBrick',
    summary:
      'Iniciar sesión, elegir la categoría adecuada, abrir un tema, dar formato, marcar una solución, seguir temas y recibir correos, las traducciones, votar ideas y proteger tus datos.',
    keywords: 'foro iniciar sesión acceder cuenta apple google correo llave de acceso tema mensaje responder markdown solución seguir silenciar notificaciones resumen semanal traducir idioma votar idea hoja de ruta guardados reacción encuesta imagen texto alternativo denunciar privacidad eliminar cuenta',
    sections: [
      {
        id: 'read',
        title: 'Leer e iniciar sesión',
        blocks: [
          {
            t: 'list',
            items: [
              'Cualquiera puede leer la comunidad sin cuenta.',
              'Para publicar, responder, votar o reaccionar, toca **Iniciar sesión** y elige **Iniciar sesión con Apple**, **Google** o un **enlace por correo** (te enviamos un enlace de un solo uso; sin contraseña). Después de iniciar sesión puedes añadir una **llave de acceso** en Ajustes y usar Face ID o Touch ID la próxima vez.',
              'Con **Ocultar mi correo electrónico** de Apple, recibimos una dirección de reenvío privada. Usa siempre el mismo método para volver a la misma cuenta.',
              'Tu dirección de correo nunca se muestra a nadie.',
            ],
          },
        ],
      },
      {
        id: 'categories',
        title: 'Elegir una categoría',
        blocks: [
          {
            t: 'table',
            head: ['Categoría', 'Para'],
            rows: [
              ['[Anuncios](/community/c/announcements)', 'Versiones y novedades del equipo. Solo el equipo abre temas; todo el mundo puede responder.'],
              ['[Ayuda y soporte](/community/c/help)', 'Preguntas de «¿Cómo hago…?» sobre tableros, vidas, compras y ajustes.'],
              ['[Informes de errores](/community/c/bugs)', 'Algo que no funciona. El formulario te pide tu dispositivo y tus versiones; consulta [Cómo informar bien de un error](help:reporting-bugs).'],
              ['[Ideas y opiniones](/community/c/ideas)', 'Sugerencias. Vota las que quieras y síguelas en la Hoja de ruta.'],
              ['[Accesibilidad](/community/c/accessibility)', 'VoiceOver, Control por voz, Control por botón, Texto más grande, jugar con daltonismo. El equipo la sigue más de cerca que ninguna.'],
              ['[Tus logros](/community/c/show-and-tell)', 'Tableros de los que estás orgulloso e hitos del Viaje, con texto alternativo en cada imagen.'],
              ['[Temas generales](/community/c/general)', 'Todo lo demás.'],
            ],
          },
        ],
      },
      {
        id: 'posting',
        title: 'Abrir un tema y responder',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Busca primero:** puede que alguien ya lo haya preguntado.',
              'Toca **Abrir un tema**, elige una categoría y escribe un título que diga de qué trata, por ejemplo «Nivel 214: ¿hay forma de pasar la puerta helada?».',
              'Elige el **idioma** en el que escribes, para que lo encuentre quien lo lee.',
              'Escribe tu mensaje. **Vista previa** muestra cómo quedará.',
              'Toca **Publicar tema**. Para responder, usa el cuadro del pie del tema, o **Responder** y **Citar** en un mensaje.',
            ],
          },
          {
            t: 'table',
            caption: 'Formato',
            head: ['Escribe', 'Para obtener'],
            rows: [
              ['`**negrita**`', 'texto en negrita'],
              ['`*cursiva*`', 'texto en cursiva'],
              ['`- elemento`', 'una lista con viñetas (`1.` para una numerada)'],
              ['`> cita`', 'una cita'],
              ['`[palabras](https://…)`', 'un enlace'],
              ['`@nombre`', 'mencionar a alguien'],
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: '¿Vas a añadir una imagen? Es obligatorio describirla: di lo que importa de ella, por ejemplo «Nivel 214 con el ladrillo rojo a un movimiento de la puerta». Quienes usan VoiceOver oyen la descripción en lugar de ver la imagen.',
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Soluciones, votos y reacciones',
        blocks: [
          {
            t: 'list',
            items: [
              'Si una respuesta resuelve tu pregunta, toca **Marcar como solución** en ella. El tema muestra **Resuelto**, y los demás pueden ir directos a la respuesta.',
              'En Ideas y opiniones, **Vota** lo que te gustaría ver. La **Hoja de ruta** muestra lo que está en estudio, previsto, en desarrollo y disponible.',
              'Reacciona a un mensaje con Me gusta, Me encanta, Enhorabuena, Divertido, Gracias o Interesante.',
              'Los informes de errores llevan un estado que pone el equipo: Nuevo, Confirmado, Corregido, Publicado, No es un error o Duplicado.',
            ],
          },
        ],
      },
      {
        id: 'following',
        title: 'Seguir temas y recibir correos',
        blocks: [
          {
            t: 'list',
            items: [
              '**Sigue** un tema o una categoría para recibir un correo cuando haya mensajes nuevos; **Silenciar** lo oculta.',
              'La campana (**Notificaciones**) muestra respuestas, menciones y cambios de estado.',
              '**Guardados** conserva los mensajes que quieras volver a encontrar.',
              'Elige qué correos recibes, incluido un resumen semanal opcional, en los **Ajustes** de la comunidad.',
            ],
          },
        ],
      },
      {
        id: 'languages',
        title: 'Idiomas y traducción',
        blocks: [
          {
            t: 'p',
            text: 'La comunidad está en inglés, francés, alemán, español, japonés y portugués de Brasil. Por defecto, las listas muestran los temas en tu idioma y en inglés; con un toque ves todos los idiomas. Un mensaje en otro idioma se puede traducir automáticamente, y se indica claramente que es una traducción automática.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Un lugar amable y privado',
        blocks: [
          {
            t: 'list',
            items: [
              'Lee las [normas de la comunidad](/community/guidelines): sé amable, oculta los spoilers y deja tus datos personales fuera de los mensajes.',
              'Nunca publiques una contraseña, un código de acceso, un recibo de compra ni nada que te identifique. Recorta los datos de tu cuenta de las capturas de pantalla.',
              '¿Ves algo que incumple las normas? Toca **Denunciar** en el mensaje. Un moderador lo revisará.',
              'En los **Ajustes** de la comunidad puedes descargar tus datos, cerrar sesión o eliminar tu cuenta.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'La comunidad es para mayores de 16 años. Para cualquier asunto privado, como una compra, usa mejor el [formulario de contacto](/contact).',
          },
        ],
      },
    ],
    related: ['reporting-bugs', 'troubleshooting', 'accessibility', 'welcome'],
  },

  {
    slug: 'reporting-bugs',
    category: 'community',
    cover: 'settings-community',
    title: 'Cómo informar bien de un error',
    summary:
      'La forma más rápida de que se corrija un error: informa desde dentro del juego para que tus datos se rellenen solos, escribe pasos que otra persona pueda seguir y añade exactamente lo que hizo VoiceOver u otra tecnología de apoyo.',
    keywords: 'informe de error fallo bug problema cierre inesperado pasos reproducir captura grabación de pantalla versión dispositivo ios tecnología de apoyo estado',
    sections: [
      {
        id: 'from-game',
        title: 'Informa desde el juego',
        blocks: [
          {
            t: 'steps',
            items: [
              'En OutBrick, abre **Ajustes** (el engranaje de Inicio o del Viaje).',
              'Baja y toca **Informar de un error**. Safari abre un informe de error nuevo en la comunidad.',
              'Inicia sesión si te lo pide, revisa los datos ya rellenados y describe lo que pasó.',
            ],
          },
          {
            t: 'shot',
            id: 'settings-community',
            alt: 'El pie de la pestaña Juego de los Ajustes con un botón morado Informar de un error junto a un botón azul Comunidad.',
            caption: '**Informar de un error** está junto a **Comunidad** en los Ajustes.',
          },
          {
            t: 'table',
            caption: 'Lo que el juego rellena por ti',
            head: ['Campo', 'Ejemplo'],
            rows: [
              ['Dispositivo', 'El modelo, por ejemplo iPhone18,2'],
              ['Versión del sistema', '27.1'],
              ['Versión de OutBrick', '5.1.1 (68)'],
              ['Tecnología de apoyo', 'VoiceOver, Control por botón, Texto más grande o filtros de color, cuando están activados'],
              ['Nivel', 'Tu nivel actual del Viaje'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'No se envía nada que te identifique: ni tu nombre, ni tu identidad de Game Center o iCloud, ni el identificador de publicidad. iOS no permite que las apps detecten **Control por voz** ni **Zoom**, así que márcalos tú si los usas.',
          },
        ],
      },
      {
        id: 'write',
        title: 'Escribe pasos que otra persona pueda seguir',
        blocks: [
          {
            t: 'p',
            text: 'El equipo necesita hacer que el error ocurra en su propio dispositivo. Numera tus pasos desde que abres el juego:',
          },
          {
            t: 'list',
            items: [
              '**Pasos:** «1. Abre el nivel 214. 2. Desliza el ladrillo largo rojo hacia la izquierda. 3. Usa Deshacer.»',
              '**Qué debería pasar:** «El ladrillo vuelve a donde estaba.»',
              '**Qué pasó:** «El ladrillo desapareció y el contador de movimientos subió dos.»',
              '¿Pasa siempre? ¿Después de reiniciar? ¿En otro nivel?',
            ],
          },
        ],
      },
      {
        id: 'a11y',
        title: 'Problemas de accesibilidad',
        blocks: [
          {
            t: 'list',
            items: [
              'Di qué tecnología usas y cómo la tienes configurada: VoiceOver (con tu velocidad de habla o tu pantalla braille si viene al caso), Control por voz, Control por botón (barrido automático o manual), Zoom, tamaño del Texto más grande.',
              'Copia **exactamente** lo que dijo VoiceOver, o el comando que Control por voz no entendió.',
              'Di dónde estaba el foco antes y después, qué gesto o acción usaste y qué rotor tenías seleccionado.',
              'Si lo prefieres, publícalo en [Accesibilidad](/community/c/accessibility): es la categoría que el equipo lee con más atención.',
            ],
          },
        ],
      },
      {
        id: 'pictures',
        title: 'Capturas y grabaciones',
        blocks: [
          {
            t: 'list',
            items: [
              '**Captura de pantalla:** pulsa a la vez el botón lateral y el botón de subir volumen.',
              '**Grabación de pantalla:** añade **Grabación de pantalla** al Centro de control, iníciala, reproduce el error y detenla.',
              'Recorta tu nombre, tu correo y cualquier dato personal, y describe la imagen en su texto alternativo.',
            ],
          },
        ],
      },
      {
        id: 'after',
        title: 'Después de publicar',
        blocks: [
          {
            t: 'p',
            text: 'El equipo pone un estado a cada informe de error: **Nuevo**, **Confirmado**, **Corregido**, **Publicado**, **No es un error** o **Duplicado**, a veces con una nota como «Corregido en la 5.1.1». Sigue el tema para recibir un correo cuando cambie. Para cualquier asunto privado, usa el [formulario de contacto](/contact).',
          },
        ],
      },
    ],
    related: ['troubleshooting', 'using-the-community', 'accessibility', 'voiceover'],
  },
];
