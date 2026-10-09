import type { HelpArticle } from '../../model.ts';

/**
 * La estantería de la enciclopedia («learn»), en español: ladrillos especiales y combos, cada
 * obstáculo, tapa y puerta, y los doce tipos de tablero. Comprobado con las reglas y los tableros
 * de la 5.1.1 (68).
 */
export const learnArticles: HelpArticle[] = [
  {
    slug: 'special-bricks-and-combos',
    category: 'learn',
    cover: 'board-slide',
    title: 'Ladrillos especiales y combos: la guía completa',
    summary:
      'Cómo crear cada ladrillo especial, qué despeja exactamente cada uno, las tres formas de activarlos, todas las combinaciones de dos especiales y cómo encajan las cascadas, la puntuación, las estrellas y la bonificación final de los movimientos sobrantes.',
    keywords:
      'especial especiales cohete rayas rayado rayo de línea bomba envuelto bomba de color arcoíris dardo guiado dardo pez mariquita cortacésped mariposa combo combinar dos especiales juntar cascada cadena puntuación puntos estrellas movimientos sobrantes bonificación final',
    host: 'bricko',
    hostPose: 'cheer',
    sections: [
      {
        id: 'quick',
        title: 'Resumen rápido',
        blocks: [
          {
            t: 'p',
            text: 'Se crea un ladrillo especial cada vez que una combinación es más grande que una simple línea de tres. Se queda en el tablero, esperando, hasta que lo activas. Hay cuatro:',
          },
          {
            t: 'table',
            head: ['Especial', 'Se crea con', 'Qué despeja', 'Se activa'],
            rows: [
              ['[Rayo de línea](#line-blaster)', 'Cuatro en línea.', 'Toda su fila o toda su columna.', 'Tocándolo, cambiándolo o atrapándolo en una línea o una explosión.'],
              ['[Bomba](#bomb)', 'Dos líneas que se cruzan: una forma de L, de T o de +.', 'El cuadrado de 3×3 que la rodea, y otra vez cuando el tablero se ha asentado.', 'Tocándola, cambiándola o atrapándola en una línea o una explosión.'],
              ['[Bomba de color](#colour-bomb)', 'Cinco o más en línea recta.', 'Todas las piezas de un color.', 'Cambiándola por un ladrillo (ese color), tocándola o atrapándola en una explosión (el color más abundante).'],
              ['[Dardo guiado](#homing-dart)', 'Un cuadrado de 2×2 de un color.', 'Una pieza que pide un objetivo, esté donde esté.', 'Tocándolo, cambiándolo o atrapándolo en una línea o una explosión.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Activar un especial siempre gasta un movimiento, tanto si lo tocas como si lo cambias. Un cambio que activa dos especiales juntos es un solo movimiento para los dos, así que un combo es lo que más rinde del tablero.',
          },
        ],
      },
      {
        id: 'making',
        title: 'Cómo se crea un especial',
        blocks: [
          {
            t: 'p',
            text: 'Después de cada movimiento, el tablero busca combinaciones: líneas de tres o más en horizontal o en vertical, y cuadrados de 2×2. Las líneas que se tocan o se cruzan se unen en un solo grupo, y cada grupo crea como mucho un especial. Cuando un grupo podría crear más de uno, gana el más fuerte:',
          },
          {
            t: 'steps',
            items: [
              '**Cinco o más en línea recta** crean una **bomba de color**, aunque otras líneas la crucen.',
              '**Líneas que se cruzan** (una forma de L, de T o de +) crean una **bomba**.',
              '**Exactamente cuatro en línea** crean un **rayo de línea**.',
              '**Un cuadrado de 2×2**, sin nada más fuerte en su grupo, crea un **dardo guiado**.',
            ],
          },
          { t: 'h3', text: 'Dónde aparece' },
          {
            t: 'list',
            items: [
              'En **el ladrillo que has movido**, si ese ladrillo forma parte de la combinación. Vale tanto para los cambios como para los deslizamientos: desliza un ladrillo hasta su sitio para completar una línea de cuatro y el rayo de línea aparecerá en el ladrillo que se deslizó.',
              'Si no, en el caso de una bomba, **donde se cruzan las dos líneas**.',
              'Si no, en el ladrillo que llegó el último (en una cascada, el que cayó) o en el centro del grupo.',
            ],
          },
          { t: 'h3', text: 'Hacia dónde apunta un rayo de línea' },
          {
            t: 'p',
            text: 'Las rayas de un rayo de línea **siguen tu gesto**. Desliza en horizontal (a la izquierda o a la derecha) y despejará su fila; desliza hacia arriba o hacia abajo y despejará su columna, sea cual sea la dirección de la propia línea de cuatro. Un rayo de línea creado por una cascada, en la que nadie deslizó, queda **atravesado** respecto a la línea que lo creó.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Apunta antes de deslizar',
            text: 'Cuando puedas completar una línea de cuatro desde dos direcciones, elige el gesto que apunte el rayo adonde lo necesitas: a lo largo de la fila con tus ladrillos del objetivo, o por la columna que desemboca en una puerta.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Los ladrillos largos, grandes, en L y en T nunca cuentan en una línea, así que nunca ayudan a crear un especial. Un ladrillo con candado sí cuenta en una línea (la línea lo libera), pero el especial nunca aparece sobre el propio ladrillo con candado.',
          },
        ],
      },
      {
        id: 'specials',
        title: 'Los cuatro especiales',
        blocks: [
          {
            t: 'p',
            text: 'Cada aldea viste sus especiales a su manera: en Ciudad Jardín el rayo de línea es un cortacésped, la bomba un capullo de flor («¡Lluvia de pétalos!»), la bomba de color una mariposa y el dardo guiado una mariquita; en Clover Farm son un tractor, una mazorca («¡Palomitas!»), un girasol y una abeja. Siempre se juegan igual.',
          },
          {
            t: 'entry',
            id: 'line-blaster',
            title: 'Rayo de línea',
            board: {
              rows: ['G . R . Y', 'R R B R Y', 'Y G . B G'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G . B . Y', '. . R| . Y', 'Y G . B G'] },
              caption: 'Cuatro en línea, completados con un gesto hacia abajo: el rayo despeja su columna.',
              alt: 'Un tablero donde no cae nada, de tres filas de cinco. Fila de arriba: verde, vacío, rojo, vacío, amarillo. Fila del medio: rojo, rojo, azul, rojo, amarillo. Fila de abajo: amarillo, verde, vacío, azul, verde. Una flecha cambia el ladrillo rojo de arriba de la columna central hacia abajo, con el ladrillo azul que tiene debajo. Resultado: los cuatro rojos de la fila del medio forman una línea de cuatro y desaparecen, y en el centro, donde cayó el rojo movido, aparece un rayo de línea rojo con rayas verticales, porque el gesto fue vertical. El ladrillo azul queda arriba de la columna central, las casillas despejadas siguen vacías y todos los demás ladrillos se quedan donde estaban.',
            },
            what: 'Un ladrillo con rayas. Cuando estalla, despeja todas las piezas de su fila (rayas horizontales) o de su columna (rayas verticales), hasta los bordes del tablero, pasando por encima de las estatuas y de los huecos de la forma del tablero.',
            how: 'Haz cuatro en línea. Actívalo tocándolo, cambiándolo por un vecino que forme una combinación o por otro especial, o atrapándolo en una línea o en otra explosión. También puede **salir deslizándose por una puerta de su color**: entonces se va sin estallar y cuenta como un ladrillo de su color.',
            facts: [
              { label: 'Se crea con', text: 'Exactamente cuatro en línea.' },
              { label: 'Despeja', text: 'Una fila entera o una columna entera: los ladrillos desaparecen, los obstáculos pierden una capa, los candados se abren y los demás especiales estallan.' },
              { label: 'Se combina con', text: 'Todos los demás especiales. Consulta [la tabla de combos](#combos).' },
              { label: 'VoiceOver dice', text: '«Rayo de línea, rojo, horizontal, despeja su fila» o «… vertical, despeja su columna». En algunas aldeas, su nombre local va entre paréntesis, como «(cortacésped)».' },
            ],
            tip: 'Cuando la fila o la columna de un rayo de línea pasa por las casillas que están justo delante de una puerta, los ladrillos del color de la puerta que haya en esas casillas salen volando por ella y cuentan como enviados.',
          },
          {
            t: 'entry',
            id: 'bomb',
            title: 'Bomba',
            board: {
              rows: ['R G B .', 'R B G .', 'Y R R .', 'R G Y .'],
              moves: [{ row: 3, col: 0, dir: 'up', kind: 'swap' }],
              after: { rows: ['. G B .', '. B G .', 'Rb . . .', 'Y G Y .'] },
              caption: 'Dos líneas rojas que se cruzan crean una bomba justo donde se encuentran.',
              alt: 'Un tablero donde no cae nada, de cuatro filas de cuatro. Fila 1: rojo, verde, azul, vacío. Fila 2: rojo, azul, verde, vacío. Fila 3: amarillo, rojo, rojo, vacío. Fila 4: rojo, verde, amarillo, vacío. Una flecha cambia el ladrillo rojo de abajo a la izquierda hacia arriba, con el ladrillo amarillo que tiene encima. Resultado: el rojo que ahora está en la fila 3, columna 1, completa dos líneas a la vez, tres rojos en la columna de la izquierda y tres rojos en la fila 3, en forma de L. Los otros cuatro rojos desaparecen y aparece una bomba roja en la fila 3, columna 1. El ladrillo amarillo queda abajo a la izquierda; los ladrillos verde, azul, verde y azul siguen en las filas 1 y 2, y el verde y el amarillo siguen en la fila 4.',
            },
            what: 'Un especial redondo y chisporroteante. Cuando estalla, despeja el cuadrado de 3×3 que lo rodea; después, cuando el tablero se ha asentado (en los tableros donde caen ladrillos, cuando el hueco se ha rellenado), estalla **una segunda vez** en el mismo sitio.',
            how: 'Haz dos líneas de un color que compartan un ladrillo: una forma de L, de T o de +. Actívala tocándola, cambiándola o atrapándola en una línea o una explosión.',
            facts: [
              { label: 'Se crea con', text: 'Líneas horizontales y verticales que se cruzan o se tocan en un ladrillo compartido (L, T o +), salvo que el grupo también tenga cinco en línea recta.' },
              { label: 'Despeja', text: 'El cuadrado de 3×3 que la rodea, dos veces. La segunda explosión alcanza lo que cayó en el hueco y quita una segunda capa a las cajas y al hielo.' },
              { label: 'Se combina con', text: 'Todos los demás especiales. Consulta [la tabla de combos](#combos).' },
              { label: 'VoiceOver dice', text: '«Bomba, rojo».' },
            ],
            tip: 'Activa una bomba junto a una caja de dos capas o a un ladrillo en hielo grueso: las dos explosiones pueden quitar las dos capas en un solo movimiento.',
          },
          {
            t: 'entry',
            id: 'colour-bomb',
            title: 'Bomba de color',
            board: {
              rows: ['G Y B Y G', 'B B R B B', 'Y G Y G Y'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G Y R Y G', '. . * . .', 'Y G Y G Y'] },
              caption: 'Cinco en fila crean una bomba de color. No tiene color propio.',
              alt: 'Un tablero donde no cae nada, de tres filas de cinco. Fila de arriba: verde, amarillo, azul, amarillo, verde. Fila del medio: azul, azul, rojo, azul, azul. Fila de abajo: amarillo, verde, amarillo, verde, amarillo. Una flecha cambia el ladrillo azul de arriba de la columna central hacia abajo, con el ladrillo rojo que tiene debajo. Resultado: los cinco azules de la fila del medio desaparecen y en la casilla central aparece una bomba de color, sin color. El ladrillo rojo queda arriba de la columna central y el resto del tablero no cambia.',
            },
            what: 'Un especial de muchos colores sin color propio. Cambiada por un ladrillo, se lleva **todas las piezas del color de ese ladrillo** del tablero: los ladrillos normales y las llaves desaparecen, los especiales de ese color estallan y los que tienen candado quedan libres.',
            how: 'Haz cinco o más en línea recta. Cámbiala por cualquier ladrillo vecino: ese cambio siempre vale, aunque no forme ninguna línea. Si la tocas sola, o la alcanza la explosión de otro especial, se lleva en su lugar todos los ladrillos normales del **color más abundante** del tablero.',
            facts: [
              { label: 'Se crea con', text: 'Cinco o más en línea recta.' },
              { label: 'Despeja', text: 'Todas las piezas de un color, una a una, empezando por la más cercana.' },
              { label: 'Se combina con', text: 'Todos los demás especiales, y con otra bomba de color. Consulta [la tabla de combos](#combos).' },
              { label: 'Conviene saber', text: 'Nunca cuenta en una línea y no puede salir por una puerta: si la deslizas hacia una, se detiene como ante una pared.' },
              { label: 'VoiceOver dice', text: '«Bomba de color, se lleva todas las piezas del color con el que se cambia».' },
            ],
            tip: 'Cámbiala por un color de tus objetivos. Cada ladrillo que se lleve cuenta para un objetivo «Recoge» o «Envía o combina» de ese color.',
          },
          {
            t: 'entry',
            id: 'homing-dart',
            title: 'Dardo guiado',
            board: {
              rows: ['Y G B', 'R R G', 'R B Y', 'G R Y'],
              moves: [{ row: 3, col: 1, dir: 'up', kind: 'swap' }],
              after: { rows: ['Y G B', '. . G', '. Rd Y', 'G B Y'] },
              caption: 'Un cuadrado de 2×2 de un color crea un dardo guiado.',
              alt: 'Un tablero donde no cae nada, de cuatro filas de tres. Fila 1: amarillo, verde, azul. Fila 2: rojo, rojo, verde. Fila 3: rojo, azul, amarillo. Fila 4: verde, rojo, amarillo. Una flecha cambia el ladrillo rojo de abajo de la columna central hacia arriba, con el ladrillo azul que tiene encima. Resultado: cuatro rojos forman ahora un cuadrado de 2×2 en las filas 2 y 3; tres de ellos desaparecen y aparece un dardo guiado rojo en la fila 3, columna 2, donde cayó el rojo movido. El ladrillo azul queda abajo de la columna central; los demás ladrillos no cambian.',
            },
            what: 'Un especial pequeño que cruza el tablero volando hasta una pieza y la golpea una vez.',
            how: 'Haz un cuadrado de 2×2 de un color. Actívalo tocándolo, cambiándolo o atrapándolo en una línea o una explosión. Elige él mismo su blanco: musgo cuando un objetivo pide musgo, cajas o candados cuando un objetivo los pide, después un ladrillo de un color que todavía quiere un objetivo «Recoge» y, por último, cualquier otro obstáculo, empezando por la parte de arriba del tablero.',
            facts: [
              { label: 'Se crea con', text: 'Un cuadrado de 2×2, cuando su grupo no tiene ninguna línea de cuatro o más ni líneas que se crucen.' },
              { label: 'Despeja', text: 'Un golpe en una pieza: un ladrillo desaparece, un obstáculo pierde una capa, un candado se abre.' },
              { label: 'Se combina con', text: 'Todos los demás especiales: lleva el otro hasta su blanco. Consulta [la tabla de combos](#combos).' },
              { label: 'VoiceOver dice', text: '«Dardo guiado, rojo, vuela a una pieza del objetivo».' },
            ],
            tip: 'Un dardo solo es flojo, pero en un combo es excelente: cámbialo por una bomba o por un rayo de línea y llevará ese especial hasta la pieza que más necesitas quitar.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Con el **Modo daltónico** activado (lo está desde el principio), los rayos de línea, las bombas, los dardos guiados y las llaves llevan en una esquina una pequeña insignia con el símbolo de su color, para que distingas su color sin depender solo del color.',
          },
        ],
      },
      {
        id: 'setting-off',
        title: 'Tres formas de activar un especial',
        blocks: [
          {
            t: 'table',
            head: ['Cómo', 'Qué pasa', 'Coste'],
            rows: [
              ['**Tócalo**', 'Estalla donde está. Una bomba de color tocada sola se lleva el color más abundante.', 'Un movimiento.'],
              ['**Cámbialo**', 'Si al cambiarlo forma una combinación, estalla como parte de la línea. Cambiado por otro especial, los dos forman un [combo](#combos). Una bomba de color cambiada por un ladrillo se lleva el color de ese ladrillo.', 'Un movimiento.'],
              ['**Atrápalo**', 'Un especial atrapado en una línea, o alcanzado por la explosión de otro especial, también estalla. Una sola explosión puede desencadenar toda una cadena.', 'Gratis: forma parte del movimiento que lo provocó.'],
            ],
          },
          {
            t: 'list',
            items: [
              '**Deslizar un especial nunca lo activa.** Puedes deslizar un especial por su carril como cualquier ladrillo, para colocarlo y hacer después un cambio mejor.',
              '**Qué hace una explosión a cada pieza:** un ladrillo normal desaparece; una caja o un ladrillo en hielo pierden una capa; un candado se abre y su ladrillo se queda; el musgo desaparece; otro especial estalla.',
              '**Lo que una explosión nunca toca:** los ladrillos largos, grandes, en L y en T (solo salen por su puerta), nada que esté bajo una tapa cerrada, y las estatuas.',
              'Un ladrillo del color de una puerta que una explosión despeja en la casilla del borde **justo delante de su puerta abierta** sale volando por la puerta y cuenta como enviado.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Tocar es el último recurso. Si un cambio puede activar el mismo especial y además formar una combinación, consigue más con el mismo movimiento.',
          },
        ],
      },
      {
        id: 'combos',
        title: 'Todos los combos',
        blocks: [
          {
            t: 'p',
            text: 'Dos especiales que estén uno al lado del otro siempre se pueden cambiar, aunque el cambio no forme ninguna línea. Estallan juntos, centrados en la casilla donde cae el ladrillo que has movido. Estas son todas las combinaciones que tiene el juego:',
          },
          {
            t: 'table',
            head: ['Cambia juntos', 'Qué pasa'],
            rows: [
              ['Rayo de línea + rayo de línea', 'Una cruz: una fila entera y una columna entera.'],
              ['Rayo de línea + bomba', 'Una cruz grande: tres filas enteras y tres columnas enteras.'],
              ['Rayo de línea + dardo guiado', 'El dardo vuela hasta su blanco, lo golpea y el rayo de línea estalla desde allí.'],
              ['Rayo de línea + bomba de color', 'Todos los ladrillos normales libres del color del rayo se convierten en rayos de línea (unos verticales y otros horizontales, alternándose), y todos estallan.'],
              ['Bomba + bomba', 'Una explosión de 5×5, y una segunda explosión de 5×5 en el mismo sitio cuando el tablero se ha asentado.'],
              ['Bomba + dardo guiado', 'El dardo lleva la bomba hasta su blanco, donde estalla una vez como una explosión de 5×5.'],
              ['Bomba + bomba de color', 'Todos los ladrillos normales libres del color de la bomba se convierten en bombas, y cada una estalla (dos veces, como hacen las bombas).'],
              ['Dardo guiado + dardo guiado', 'Tres blancos en total: el primer dardo aterriza y desde allí salen volando dos más.'],
              ['Dardo guiado + bomba de color', 'Todos los ladrillos normales libres del color del dardo se convierten en dardos guiados, y todos salen volando.'],
              ['Bomba de color + bomba de color', 'Todas las piezas del tablero reciben un golpe: los ladrillos desaparecen, cada obstáculo pierde una capa, todos los candados se abren y todos los especiales estallan. Los ladrillos largos y con forma, y todo lo que esté bajo una tapa, no se tocan.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['G Y B Y', 'Y R- B| G', 'B G Y B'],
              moves: [{ row: 1, col: 1, dir: 'right', kind: 'swap' }],
              after: { rows: ['G Y . Y', '. . . .', 'B G . B'] },
              caption: 'Dos rayos de línea cambiados entre sí despejan una cruz: la fila y la columna donde cae el que has movido.',
              alt: 'Un tablero donde no cae nada, de tres filas de cuatro. Fila de arriba: verde, amarillo, azul, amarillo. Fila del medio: amarillo, un rayo de línea rojo con rayas horizontales, un rayo de línea azul con rayas verticales, verde. Fila de abajo: azul, verde, amarillo, azul. Una flecha cambia el rayo de línea rojo hacia la derecha, contra el azul. Resultado: desaparecen toda la fila del medio y toda la tercera columna. Quedan verde, amarillo y amarillo arriba, con un hueco en la tercera columna; la fila del medio vacía; y azul, verde y azul abajo, con un hueco en la tercera columna.',
            },
          },
          {
            t: 'list',
            items: [
              '«Ladrillo normal libre» significa un ladrillo suelto de ese color que no está en hielo ni tiene candado. Si no queda ningún ladrillo del color del especial, la bomba de color usa en su lugar el color más abundante del tablero.',
              'VoiceOver menciona «un combo» en el resumen del movimiento.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Las parejas más fuertes',
            text: 'Bomba de color + bomba de color es la que más despeja, pero bomba de color + rayo de línea con un color abundante a menudo hace más por tus objetivos. En un tablero donde no cae nada, conviene guardar una pareja de bombas de color hasta que abunde el color que necesitas.',
          },
        ],
      },
      {
        id: 'gates',
        title: 'Los especiales y las puertas',
        blocks: [
          {
            t: 'list',
            items: [
              '**Los rayos de línea pueden volver a casa.** Desliza uno dentro de una puerta abierta de su color y saldrá sin estallar, contando como un ladrillo de su color.',
              '**Las bombas, los dardos guiados y las bombas de color no.** Si los deslizas hacia una puerta, se detienen en ella como ante una pared.',
              '**Los ladrillos que estallan pueden volver a casa.** Un ladrillo del color de una puerta que un especial despeja en la casilla del borde, delante de su puerta abierta, sale volando por la puerta.',
              '**Los objetivos de puerta dicen «Envía o combina».** Los ladrillos de ese color despejados por una línea o una explosión en cualquier parte del tablero también cuentan, así que un rayo de línea que atraviesa una fila de ladrillos del objetivo es un avance de verdad.',
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['G B R G', 'R R B Y', 'Y G Y B'],
              gates: [{ side: 'left', at: 1, colour: 'R' }],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G B B G', '. . . Y', 'Y G Y B'] },
              caption: 'Una línea combinada delante de una puerta de su color: el ladrillo del extremo sale volando por la puerta.',
              alt: 'Un tablero donde no cae nada, de tres filas de cuatro, con una puerta roja en el borde izquierdo de la fila del medio. Fila de arriba: verde, azul, rojo, verde. Fila del medio: rojo, rojo, azul, amarillo. Fila de abajo: amarillo, verde, amarillo, azul. Una flecha cambia el ladrillo rojo de arriba de la tercera columna hacia abajo, con el azul que tiene debajo. Resultado: tres rojos se alinean en la fila del medio. El rojo del extremo izquierdo está delante de la puerta roja, así que sale volando por ella; los otros dos desaparecen. Los tres cuentan para un objetivo «Envía o combina» rojo. El azul queda arriba de la tercera columna; el resto del tablero no cambia.',
            },
          },
          {
            t: 'p',
            text: 'Cada puerta, tapa y obstáculo se explica en [Todos los obstáculos, tapas y puertas, explicados](help:blockers-encyclopedia#gates).',
          },
        ],
      },
      {
        id: 'score',
        title: 'Cascadas, puntuación y estrellas',
        blocks: [
          {
            t: 'p',
            text: 'En los tableros donde caen ladrillos, una combinación deja un hueco, los ladrillos de arriba caen en él y llegan otros nuevos desde arriba. Si eso forma otra línea, también desaparece: es una **cascada**. Cada nueva oleada vale más que la anterior. En los tableros donde no cae nada, una combinación simplemente deja casillas vacías, así que las cascadas son raras, pero la segunda explosión de una bomba sigue produciéndose.',
          },
          {
            t: 'table',
            caption: 'Puntos por lo que hace un movimiento (5.1.1)',
            head: ['Qué pasa', 'Puntos'],
            rows: [
              ['Cada ladrillo de una línea', '20, multiplicado por la oleada: un ladrillo de la segunda oleada de una cascada vale 40, y de la tercera, 60'],
              ['Cada especial creado', '120'],
              ['Un ladrillo que sale por una puerta', '60'],
              ['Un especial que estalla', '100, más 30 por cada pieza que despeja, 40 por cada capa de hielo que rompe y 60 por cada ladrillo que envía por una puerta'],
              ['Un obstáculo golpeado por una línea a su lado', '20'],
              ['Cada movimiento que sobra al cumplir los objetivos', '150, más lo que despeje su rayo de línea'],
            ],
          },
          {
            t: 'list',
            items: [
              'La **barra de estrellas** de la cabecera se llena a medida que sube tu puntuación. Cada tablero superado da al menos **una estrella**.',
              'Los umbrales de dos y tres estrellas se fijan a partir de la solución de referencia de cada tablero, contando los 150 puntos de los movimientos que le sobran. Gana con soltura, con movimientos de sobra, y las estrellas llegarán más fácilmente; gasta todos los movimientos y necesitarás más puntos de juego para igualarlo.',
              'Repite un tablero superado desde el Viaje para intentar conseguir más estrellas. Consulta [Jugar un tablero](help:playing-a-board#stars).',
            ],
          },
        ],
      },
      {
        id: 'finish',
        title: 'La bonificación final de los movimientos sobrantes',
        blocks: [
          {
            t: 'steps',
            items: [
              'En cuanto cumples tu último objetivo, el tablero deja de admitir movimientos y muestra **¡Objetivo cumplido!**, con «¡N movimientos sobrantes se convierten en rayos!» debajo. Ya nada puede hacerte perder el tablero: no arriesgas ninguna vida y no hace falta ningún movimiento.',
              'Por cada movimiento, una chispa sale del contador de movimientos y aterriza en un ladrillo normal, que se convierte en un rayo de línea. Cada una suma **150 puntos**. Hasta 30 movimientos se convierten en rayos sobre el tablero; si sobran más, se pagan igualmente.',
              'Después estallan todos los especiales del tablero, los rayos nuevos y los que dejaste sin usar, hasta que no queda nada que disparar.',
              'Tus amigos dan una vuelta de honor y la tarjeta de victoria muestra tu puntuación, tus estrellas y tus monedas.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: '**Toca en cualquier sitio** para saltarte la animación. El resultado se calcula de antemano, así que saltártela da exactamente la misma puntuación y las mismas estrellas.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Los movimientos sobrantes dan puntos, y por tanto estrellas, pero no monedas extra. Los especiales que dejas en el tablero no se desperdician: estallan en la bonificación final y suman a tu puntuación.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'VoiceOver dice «¡Objetivo cumplido! ¡4 movimientos sobrantes se convierten en rayos!» al momento, y después «Puntuación final» con el número y las estrellas cuando aparece la tarjeta de victoria. Con **Reducir movimiento** activado, el aviso aparece y desaparece con un fundido y el tablero ya asentado se muestra sin la animación.',
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'Los especiales con VoiceOver',
        blocks: [
          {
            t: 'table',
            head: ['Cuándo', 'Qué oyes'],
            rows: [
              ['Llegas a un especial', 'Su tipo, su color y lo que hace, por ejemplo «Rayo de línea, rojo, horizontal, despeja su fila».'],
              ['Sus acciones', 'Primero **Activar especial**, después sus deslizamientos y luego sus cambios. Los cambios que activan algo van antes que los que no forman nada.'],
              ['Tocas uno', '«Activado: Bomba, rojo».'],
              ['Una pista te sugiere uno', 'Por ejemplo, «Pista: activa la bomba roja», con su fila y su columna.'],
              ['Después de un movimiento', 'Los especiales que ha creado el movimiento, cualquier combo y las cascadas, como parte del resumen del movimiento.'],
            ],
          },
          {
            t: 'p',
            text: 'Gira dos dedos hasta el rotor **Especiales** y desliza hacia arriba o hacia abajo para saltar de un especial al siguiente. Más en [Jugar con VoiceOver](help:voiceover#rotors).',
          },
        ],
      },
      {
        id: 'faq',
        title: 'Preguntas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: '¿Por qué ha funcionado mi cambio de dos especiales sin formar ninguna línea?',
                a: 'Dos especiales que están uno al lado del otro siempre se pueden cambiar: el cambio los activa juntos como un combo. Lo mismo pasa con una bomba de color cambiada por cualquier ladrillo.',
              },
              {
                q: 'He deslizado mi rayo de línea hasta su puerta y no ha estallado. ¿Lo he desperdiciado?',
                a: 'No. Un rayo de línea que sale deslizándose por una puerta de su color se va sin estallar y cuenta para tus objetivos como un ladrillo de ese color. Si querías la explosión, tócalo o cámbialo.',
              },
              {
                q: '¿Por qué una bomba ha dejado en pie un ladrillo largo?',
                a: 'Las explosiones nunca se llevan ladrillos largos, grandes, en L ni en T. Son la carga de su puerta y solo salen deslizándose por una puerta tan ancha como ellos. Las explosiones tampoco alcanzan nada que esté bajo una tapa cerrada.',
              },
              {
                q: '¿Los ladrillos que despeja un especial cuentan para mis objetivos?',
                a: 'Sí. Los ladrillos de un color del objetivo despejados por una explosión cuentan para los objetivos «Recoge» y «Envía o combina», y un ladrillo que estalla delante de su propia puerta sale volando por ella. Las capas de obstáculo que rompe una explosión cuentan para los objetivos de cajas, musgo y candados.',
              },
              {
                q: '¿Debería guardar los especiales para el final?',
                a: 'Solo si los objetivos ya están asegurados. Cualquier especial que siga en el tablero cuando cumples el último objetivo estalla en la bonificación final y suma puntos, pero un especial usado pronto puede ahorrarte movimientos que acaban valiendo aún más puntos.',
              },
              {
                q: '¿El potenciador Cohete es lo mismo que un rayo de línea?',
                a: 'El potenciador **Cohete** convierte un ladrillo normal que tú eliges en un rayo de línea que dispara a lo largo de su fila al momento. Consulta [Potenciadores, pistas y Pausa](help:boosters-and-pause).',
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
    title: 'Todos los obstáculos, tapas y puertas, explicados',
    summary:
      'Qué aspecto tiene cada obstáculo de un tablero, qué hace y cómo quitarlo o abrirlo exactamente: cajas, hielo, candados, musgo, estatuas, ladrillos bocabajo, llaves, ladrillos largos y con forma, las cinco tapas, cada tipo de puerta y los portales.',
    keywords:
      'obstáculo bloqueo caja maceta bala de heno capas hielo gelatina congelado candado cadena bloqueado musgo maleza se extiende crece estatua piedra adorno bocabajo interrogación ladrillo oculto llave cerradura sala sellada tapa bancal sellado contador contador de color vidriera llave de vidriera reloj reloj de latón puerta puerta helada puerta contada puerta por fases puerta sellada portal ladrillo largo ladrillo grande ladrillo en L ladrillo en T',
    host: 'peach',
    hostPose: 'think',
    sections: [
      {
        id: 'overview',
        title: 'Resumen rápido',
        blocks: [
          {
            t: 'p',
            text: 'Aquí está todo lo que no es un ladrillo normal. Su aspecto cambia con la aldea (macetas en Ciudad Jardín, balas de heno en la granja, castillos de arena junto al mar), pero las reglas nunca cambian. **Toca cualquier obstáculo, tapa o puerta** del tablero: se menea y te dice en una línea qué es y qué lo quita.',
          },
          {
            t: 'table',
            head: ['Obstáculo', '¿Detiene un deslizamiento?', 'Cómo quitarlo o abrirlo'],
            rows: [
              ['[Caja](#crate)', 'Sí', 'Una línea a su lado o una explosión. Una capa cada vez.'],
              ['[Ladrillo en hielo](#ice)', 'Sí, y no se puede mover', 'Una línea a su lado o una explosión. Una capa cada vez.'],
              ['[Ladrillo con candado](#lock)', 'Sí, y no se puede mover', 'Una línea que pase **por** él, o una explosión.'],
              ['[Musgo](#moss)', 'Sí', 'Una línea a su lado o una explosión.'],
              ['[Estatua](#statue)', 'Sí', 'Se queda ahí. Busca otro carril.'],
              ['[Ladrillo bocabajo](#face-down)', 'Es un ladrillo: se mueve', 'Se da la vuelta cuando un ladrillo de al lado sale del tablero.'],
              ['[Tapas](#lids)', 'Sí', 'Cada una de las cinco se abre con su propia regla.'],
              ['[Puertas](#gates)', 'De otro color o cerrada: sí', 'Las puertas abiertas admiten ladrillos de su color.'],
              ['[Portal](#portal)', 'No: el ladrillo lo atraviesa', 'Desliza un ladrillo suelto dentro.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Comprobado con la versión 5.1.1',
            text: 'Las cajas, el hielo, los candados, el musgo, las estatuas, las puertas y la tapa de reloj aparecen a lo largo de todo el Viaje. En esta versión, las otras cuatro tapas, los ladrillos bocabajo, las puertas por fases y los portales aparecen en algunos tableros hasta el nivel 408; puede que futuras actualizaciones los lleven más allá.',
          },
        ],
      },
      {
        id: 'obstacles',
        title: 'Obstáculos',
        blocks: [
          {
            t: 'entry',
            id: 'crate',
            title: 'Caja',
            board: {
              rows: ['G B R Y', 'R R B x2', 'Y G Y B'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G B B Y', '. . . x', 'Y G Y B'] },
              caption: 'Una línea justo al lado de una caja le quita una capa.',
              alt: 'Un tablero donde no cae nada, de tres filas de cuatro. Fila de arriba: verde, azul, rojo, amarillo. Fila del medio: rojo, rojo, azul y, a la derecha, una caja de 2 capas. Fila de abajo: amarillo, verde, amarillo, azul. Una flecha cambia el rojo de arriba de la tercera columna hacia abajo, con el azul que tiene debajo. Resultado: tres rojos desaparecen en la fila del medio, y la caja que está junto al extremo de la línea pierde una capa: ahora tiene 1. El azul queda arriba de la tercera columna; el resto no cambia.',
            },
            what: 'Una caja que ocupa una casilla. Un ladrillo que se desliza se detiene contra ella, no se puede cambiar con nada y, en los tableros donde caen ladrillos, no se mueve y los ladrillos de arriba se apoyan en ella. Tiene una o dos capas: una caja de dos capas parece más robusta, y al tocarla o con VoiceOver siempre sabes cuántas le quedan.',
            how: 'Haz una línea justo a su lado (en la casilla de arriba, de abajo, de la izquierda o de la derecha de cualquier ladrillo de la línea): cada línea le quita una capa, toquen la caja uno o varios de sus ladrillos. Una explosión que la alcance también le quita una capa, y la doble explosión de una bomba puede quitarle dos. La última capa la rompe y libera la casilla.',
            facts: [
              { label: 'Aparece por primera vez', text: 'Nivel 5, Macetas y hielo. Cajas de dos capas a partir del nivel 20.' },
              { label: 'Objetivo', text: '«Rompe» cajas: cada capa que quitas cuenta una vez.' },
              { label: 'Se parece a, pero no es', text: 'Una estatua, que nunca se rompe, y una tapa, que cubre ladrillos y muestra un símbolo.' },
              { label: 'VoiceOver dice', text: '«Caja, 2 capas». Al tocarla: «Caja, 2 capas. Una línea a su lado rompe una capa».' },
            ],
            tip: 'El potenciador **OVNI** le quita una capa a una caja esté donde esté.',
          },
          {
            t: 'entry',
            id: 'ice',
            title: 'Ladrillo en hielo',
            board: {
              rows: ['B G~ Y', 'R R B', 'G Y R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['B G Y', '. . .', 'G Y B'] },
              caption: 'Una línea junto al ladrillo helado rompe el hielo; el ladrillo de dentro vuelve a estar libre.',
              alt: 'Un tablero donde no cae nada, de tres filas de tres. Fila de arriba: azul, un ladrillo verde congelado en hielo, amarillo. Fila del medio: rojo, rojo, azul. Fila de abajo: verde, amarillo, rojo. Una flecha cambia el rojo de abajo a la derecha hacia arriba, con el azul que tiene encima. Resultado: tres rojos desaparecen en la fila del medio, y el hielo del ladrillo verde que está encima de la línea se rompe, dejando un ladrillo verde normal que puede volver a moverse. El azul queda abajo a la derecha.',
            },
            what: 'Un ladrillo de color atrapado en un bloque de hielo de una o dos capas. Mientras está congelado no puede deslizarse, cambiarse, caer ni contar en una línea, y un ladrillo que se desliza se detiene contra él.',
            how: 'Haz una línea justo a su lado o alcánzalo con una explosión: cada una le quita una capa. Cuando se rompe la última capa, el ladrillo vuelve a ser un ladrillo normal que se puede mover y combinar.',
            facts: [
              { label: 'Aparece por primera vez', text: 'Nivel 5, Macetas y hielo.' },
              { label: 'Se parece a, pero no es', text: 'Una **puerta** helada, que está en el borde del tablero y se deshiela de otra manera. Consulta [Puerta helada](#iced-gate).' },
              { label: 'VoiceOver dice', text: 'El ladrillo y después su hielo, por ejemplo «Ladrillo, rojo, en gelatina, 1 capa». Al tocarlo: «… Una línea a su lado rompe la gelatina».' },
            ],
            tip: 'Merece la pena liberar pronto un ladrillo helado de un color del objetivo: hasta que esté libre no puede llegar a su puerta.',
          },
          {
            t: 'entry',
            id: 'lock',
            title: 'Ladrillo con candado',
            board: {
              rows: ['G Y R', 'R R! B', 'Y G Y'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G Y B', '. R .', 'Y G Y'] },
              caption: 'Una línea que pasa por el ladrillo con candado lo libera. El ladrillo liberado se queda.',
              alt: 'Un tablero donde no cae nada, de tres filas de tres. Fila de arriba: verde, amarillo, rojo. Fila del medio: rojo, un ladrillo rojo con candado, azul. Fila de abajo: amarillo, verde, amarillo. Una flecha cambia el rojo de arriba a la derecha hacia abajo, con el azul que tiene debajo. Resultado: tres rojos se alinean en la fila del medio, pasando por el ladrillo con candado. Los dos rojos de los extremos desaparecen; el candado se abre y el rojo del centro se queda, ahora como ladrillo normal. El azul queda arriba a la derecha.',
            },
            what: 'Un ladrillo sujeto por un candado. No puede deslizarse, cambiarse ni caer, y un ladrillo que se desliza se detiene contra él. Aun así, cuenta en una línea de su color.',
            how: 'Haz una línea que pase **por** él: la línea despeja los ladrillos de alrededor, abre el candado y deja el ladrillo liberado donde está. Una línea que solo pasa a su lado no hace nada. Una explosión que lo alcance también abre el candado.',
            facts: [
              { label: 'Aparece por primera vez', text: 'Nivel 9, Candados y musgo.' },
              { label: 'Objetivo', text: '«Suelta» candados: cada candado abierto cuenta una vez.' },
              { label: 'VoiceOver dice', text: '«Ladrillo, amarillo, bloqueado, una línea que lo incluya lo libera».' },
            ],
            tip: 'Busca el color del propio ladrillo con candado a ambos lados, o arriba y abajo: un solo deslizamiento o cambio que complete la línea lo libera.',
          },
          {
            t: 'entry',
            id: 'moss',
            title: 'Musgo',
            board: {
              rows: ['Y m B', 'R R G', 'B Y R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['Y . B', '. . .', 'B Y G'] },
              caption: 'Una línea justo al lado del musgo lo quita.',
              alt: 'Un tablero donde no cae nada, de tres filas de tres. Fila de arriba: amarillo, una mata de musgo, azul. Fila del medio: rojo, rojo, verde. Fila de abajo: azul, amarillo, rojo. Una flecha cambia el rojo de abajo a la derecha hacia arriba, con el verde que tiene encima. Resultado: tres rojos desaparecen en la fila del medio y el musgo que está encima de la línea también desaparece, dejando una casilla vacía. El verde queda abajo a la derecha.',
            },
            what: 'Una mata de musgo que ocupa una casilla. Un ladrillo que se desliza se detiene contra ella. En los tableros **Candados y musgo** se extiende: en palabras del juego, «el musgo se extiende a un ladrillo tras cada jugada que no lo quita», y cubre un ladrillo normal suelto que tenga al lado.',
            how: 'Haz una línea justo a su lado o alcánzalo con una explosión: un golpe lo quita. El musgo que ha crecido sobre un ladrillo se quita de la misma forma.',
            facts: [
              { label: 'Aparece por primera vez', text: 'Nivel 9, Candados y musgo.' },
              { label: 'Objetivo', text: '«Limpia» musgo: cuenta cada mata que quitas, también las que han crecido durante la partida.' },
              { label: 'VoiceOver dice', text: '«Musgo, crece tras un movimiento que no despeja nada». Al tocarlo: «… Una línea a su lado lo quita».' },
            ],
            tip: 'Quita un poco de musgo siempre que puedas: un movimiento que quita algo de musgo nunca lo deja crecer. Los potenciadores nunca cuentan como movimiento, así que usar uno no hace que el musgo se extienda.',
          },
          {
            t: 'entry',
            id: 'statue',
            title: 'Estatua',
            board: {
              rows: ['. . . . .', 'R+ . s . .', 'B . . . G'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 0, dir: 'right' }],
              after: { rows: ['. . . . .', '. R s . .', 'B . . . G'] },
              caption: 'Una estatua detiene un deslizamiento. La puerta roja queda fuera de alcance por esta fila.',
              alt: 'Un tablero donde no cae nada, de tres filas de cinco, con una puerta roja en el borde derecho de la fila del medio. Fila de arriba: vacía. Fila del medio: un ladrillo rojo a la izquierda, una casilla vacía, una estatua en el centro y dos casillas vacías. Fila de abajo: azul a la izquierda, tres casillas vacías y verde a la derecha. Una flecha desliza el ladrillo rojo hacia la derecha. Resultado: se detiene en la segunda casilla, contra la estatua, y no puede llegar a la puerta roja por esta fila.',
            },
            what: 'Una estatua de jardín, u otro adorno de la aldea, colocada en un hueco dentro del tablero. Es decorado, no una pieza: nada la atraviesa al deslizarse, nada puede caer sobre ella y nunca se rompe. En los tableros donde caen ladrillos, los ladrillos de arriba se apoyan encima, y los ladrillos sueltos la rodean en diagonal para rellenar las casillas de debajo.',
            how: 'No se puede quitar. Planifica a su alrededor: usa los carriles libres o lleva el ladrillo por otra fila. La explosión de un rayo de línea pasa por encima de ella.',
            facts: [
              { label: 'Aparece por primera vez', text: 'Nivel 10, Caminos de piedra.' },
              { label: 'Se parece a, pero no es', text: 'Una caja, que se rompe; una estatua, nunca.' },
              { label: 'VoiceOver dice', text: 'Su nombre, por ejemplo «Estatua: parte del decorado. Las piezas caen a su alrededor».' },
            ],
          },
        ],
      },
      {
        id: 'special-bricks',
        title: 'Ladrillos con sus propias reglas',
        blocks: [
          {
            t: 'entry',
            id: 'face-down',
            title: 'Ladrillo bocabajo «?»',
            board: {
              rows: ['? R+ . .', 'G B Y .'],
              gates: [{ side: 'top', at: 1, colour: 'R' }],
              moves: [{ row: 0, col: 1, dir: 'up' }],
              after: { rows: ['Y . . .', 'G B Y .'] },
              caption: 'El rojo de al lado sale del tablero, así que el ladrillo bocabajo se da la vuelta.',
              alt: 'Un tablero de dos filas de cuatro, con una puerta roja en el borde superior, encima de la segunda columna. Fila de arriba: un ladrillo bocabajo con un signo de interrogación, un ladrillo rojo y dos casillas vacías. Fila de abajo: verde, azul, amarillo, vacío. Una flecha desliza el ladrillo rojo hacia arriba y lo saca por la puerta roja. Resultado: el rojo ha salido del tablero y el ladrillo bocabajo que tenía al lado se da la vuelta: era amarillo. La fila de abajo no cambia.',
            },
            what: 'Un ladrillo gris pizarra con un «?» blanco y sin símbolo de color. Esconde su color, pero es un ladrillo de verdad de un color de verdad y juega con él: se desliza, se cambia, combina y vuelve a casa por la puerta de su color exactamente como lo haría ese color.',
            how: 'Se da la vuelta cuando un ladrillo **de al lado** (arriba, abajo, a la izquierda o a la derecha) **sale del tablero**: por una puerta, despejado en una línea o despejado por una explosión. Nunca se da la vuelta por haberse movido, ni porque un vecino se haya deslizado o haya caído.',
            facts: [
              { label: 'Aparece por primera vez', text: 'Nivel 49.' },
              { label: 'Juego limpio', text: 'Ninguna pista, mano de aprendizaje, rotor, sonido de fila ni palabra de VoiceOver revela nunca su color. La pista no sugerirá un movimiento que mueva, cambie o despeje un ladrillo bocabajo, así que en un tablero lleno de ellos puede que no muestre ninguna pista.' },
              { label: 'VoiceOver dice', text: '«Ladrillo bocabajo, se da la vuelta cuando un ladrillo de al lado sale del tablero». Sus cambios nunca dicen «sin combinación», y un carril que termina en una puerta se ofrece como «Deslizar hacia la izquierda hacia la puerta». Control por voz lo llama «Bocabajo», como en «Deslizar Bocabajo 14 izquierda».' },
            ],
            tip: 'Despeja primero los ladrillos que rodean un grupo de ladrillos «?»: cada ladrillo que sale puede dar la vuelta hasta a cuatro de ellos, y entonces ya puedes planificar.',
          },
          {
            t: 'entry',
            id: 'key',
            title: 'Ladrillo llave',
            what: 'Un ladrillo de su color con una llave dibujada. Solo aparece en tableros con una [tapa con cerradura](#lid-keyhole), fuera de la tapa y normalmente en la parte alta del tablero.',
            how: 'Se juega exactamente como un ladrillo de su color: deslízalo, cámbialo, combínalo. En cuanto **sale del tablero**, combinado en una línea, despejado por una explosión o deslizado por una puerta de su color, la tapa con cerradura se abre.',
            facts: [
              { label: 'VoiceOver dice', text: '«Llave, rojo».' },
              { label: 'Modo daltónico', text: 'Lleva una insignia en una esquina con el símbolo de su color.' },
            ],
            tip: 'Si su puerta está lejos, una línea de tres es más rápida: una llave combinada en cualquier sitio abre la cerradura igual.',
          },
          {
            t: 'entry',
            id: 'long-bricks',
            title: 'Ladrillos largos y grandes',
            what: 'Una sola pieza moldeada que ocupa dos o tres casillas en fila (1×2, 2×1, 1×3, 3×1) o un cuadrado de 2×2. Se desliza como una sola pieza y se detiene en cuanto cualquiera de sus casillas choca con algo.',
            how: 'Deslízalo dentro de una puerta de su color que sea **tan ancha como el ladrillo, medida de lado a lado de su carril**: un ladrillo de dos casillas de alto que se desliza de lado necesita una puerta lateral de dos casillas, y un 2×2 necesita una puerta de dos casillas. Las casillas de detrás deben estar libres para que la siga. Nunca se cambia, nunca cuenta en una línea y ninguna explosión ni potenciador puede llevárselo, así que deslizarlo a casa es la única forma. Cuenta **cada casilla** para tus objetivos: un rojo de 2×2 son cuatro rojos.',
            facts: [
              { label: 'Aparece por primera vez', text: 'Nivel 6, Ladrillos largos.' },
              { label: 'Donde caen ladrillos', text: 'Cae como una unidad, fila a fila, y solo cuando todas las casillas de debajo están libres: una caja bajo una de sus casillas sostiene toda la pieza.' },
              { label: 'VoiceOver dice', text: '«Ladrillo largo, rojo, 2 de alto», «Ladrillo cuadrado grande, azul». Sus acciones lo nombran: «Deslizar el ladrillo largo rojo hacia la izquierda y salir por la puerta: rojo».' },
            ],
            tip: 'Antes de despejar un carril, comprueba la anchura de la puerta. Una puerta de una casilla nunca admitirá un ladrillo largo, por bien alineado que esté.',
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Nivel 31 en la playa: 16 movimientos restantes, objetivos de 8 amarillos y 8 azules. Abajo se apilan ladrillos grandes de una sola pieza: una barra azul larga, una columna azul alta y una pieza amarilla en forma de C, con puertas azules y amarillas en los bordes.',
            caption: 'Los ladrillos grandes se deslizan de una pieza y necesitan una puerta tan ancha como ellos.',
          },
          {
            t: 'entry',
            id: 'l-and-t',
            title: 'Ladrillos en L y en T',
            what: 'Piezas dobladas de cuatro casillas con forma de L o de T. Siguen las mismas reglas que los ladrillos largos: una sola pieza, nunca se cambian, nunca cuentan en una línea, nunca estallan.',
            how: 'Alinea la pieza con una puerta de su color que abarque toda la pieza de lado a lado de su carril y deslízala a casa. La primera de sus casillas que choca con algo detiene toda la pieza.',
            facts: [
              { label: 'Aparece por primera vez', text: 'Nivel 7, Piezas de esquina.' },
              { label: 'VoiceOver dice', text: '«Ladrillo en L, rojo», «Ladrillo en T, azul».' },
            ],
          },
        ],
      },
      {
        id: 'lids',
        title: 'Las salas selladas y sus cinco tapas',
        blocks: [
          {
            t: 'p',
            text: 'Una **sala sellada** es un bloque de una a cuatro casillas bajo una tapa. Hasta que la tapa se abre, los ladrillos de debajo están congelados: no pueden deslizarse, cambiarse, combinarse ni caer, y ninguna explosión, potenciador ni mezcla puede alcanzarlos. Cada tapa muestra un símbolo de su tipo, y la mayoría también un número: cuántos le faltan. Cuando se abre, la tapa se levanta y sus ladrillos se unen a la partida.',
          },
          {
            t: 'table',
            head: ['Tapa', 'Símbolo', 'Se abre cuando…'],
            rows: [
              ['[Contador](#lid-counter)', 'Una cuadrícula de cuadrados y un número', 'Han salido del tablero esos ladrillos más, de cualquier color.'],
              ['[Contador de color](#lid-colour-counter)', 'Una pila de cuadrados y un número, en su color', 'Han salido del tablero esos ladrillos más de su color.'],
              ['[Llave de vidriera](#lid-glass-key)', 'Una llave, en su color; sin número', 'Haces una línea de su color justo a su lado.'],
              ['[Reloj](#lid-clock)', 'Un reloj y un número', 'Has hecho esos movimientos más.'],
              ['[Cerradura](#lid-keyhole)', 'Un candado', 'El ladrillo llave sale del tablero.'],
            ],
          },
          {
            t: 'entry',
            id: 'lid-counter',
            title: 'Tapa con contador',
            what: 'Una tapa con el símbolo de una cuadrícula y un número que va bajando.',
            how: 'Cada ladrillo que sale del tablero, de cualquier color, le resta uno: combinado en una línea, despejado por una explosión o enviado por una puerta. Un ladrillo largo o grande cuenta una vez. Mover ladrillos por el tablero no cuenta. En los tableros que hay hasta ahora pide de 5 a 9 ladrillos.',
            facts: [
              { label: 'VoiceOver dice', text: 'En cada ladrillo cubierto: «sellado bajo una tapa, se abre tras quitar 6 ladrillos más». Al abrirse: «La tapa con contador se abrió. Sus ladrillos ya se mueven».' },
            ],
          },
          {
            t: 'entry',
            id: 'lid-colour-counter',
            title: 'Tapa con contador de color',
            what: 'Una tapa de un color, con el símbolo de una pila y un número.',
            how: 'Solo cuentan los ladrillos de **su propio color** que salen del tablero: combinados, despejados por una explosión o enviados por una puerta. Los demás colores no le hacen nada. En los tableros que hay hasta ahora pide 3 o 4.',
            facts: [
              { label: 'Aparece por primera vez', text: 'Nivel 65.' },
              { label: 'VoiceOver dice', text: '«sellado bajo una tapa (rojo), se abre tras 3 ladrillos más: rojo». Al abrirse: «La tapa con contador (rojo) se abrió. Sus ladrillos ya se mueven».' },
            ],
            tip: 'Su color suele ser también uno de los que piden tus objetivos, así que cada ladrillo que mandas a casa cuenta doble.',
          },
          {
            t: 'entry',
            id: 'lid-glass-key',
            title: 'Tapa de llave de vidriera',
            what: 'Una tapa de un color con el símbolo de una llave y sin número.',
            how: 'Haz una línea (o un cuadrado de 2×2) **de su color** con al menos un ladrillo justo al lado de la tapa: arriba, abajo, a la izquierda o a la derecha de una de sus casillas. Una línea de otro color, una línea más alejada o una explosión no la abren.',
            facts: [
              { label: 'VoiceOver dice', text: '«sellado bajo una tapa con llave (rojo), se abre con una línea al lado: rojo». Al abrirse: «La tapa de vidriera (rojo) se abrió. Sus ladrillos ya se mueven».' },
            ],
            tip: 'Busca dos ladrillos del color de la tapa que ya la estén tocando: un solo deslizamiento o cambio de un tercer ladrillo junto a ellos la abre.',
          },
          {
            t: 'entry',
            id: 'lid-clock',
            title: 'Tapa de reloj (el bancal sellado)',
            what: 'Una tapa con el símbolo de un reloj y un número de movimientos. En **El gran día** suele cubrir las dos casillas de abajo de una esquina; el juego la llama **bancal sellado**.',
            how: 'Se abre sola después de ese número de movimientos: cada deslizamiento, cambio o toque cuenta uno. Los potenciadores no cuentan. En los tableros que hay hasta ahora pide de 3 a 6 movimientos.',
            facts: [
              { label: 'Aparece por primera vez', text: 'Nivel 11, El gran día, como bancal sellado.' },
              { label: 'VoiceOver dice', text: '«sellado bajo una tapa reloj, se abre en 3 movimientos». Al abrirse: «La tapa del reloj se abrió. Sus ladrillos ya se mueven».' },
            ],
            tip: 'Nada de lo que hagas la abre antes, así que juega en otra parte y planifica para los ladrillos de debajo.',
          },
          {
            t: 'entry',
            id: 'lid-keyhole',
            title: 'Tapa con cerradura',
            what: 'Una tapa con el símbolo de un candado. En algún lugar fuera de ella hay un [ladrillo llave](#key) de un color del objetivo.',
            how: 'Saca el ladrillo llave del tablero: combínalo en una línea, despéjalo con una explosión o deslízalo por una puerta de su color. La tapa se abre al instante.',
            facts: [
              { label: 'VoiceOver dice', text: '«sellado bajo una tapa con cerradura, se abre con un ladrillo llave». Al abrirse: «La tapa de la cerradura se abrió. Sus ladrillos ya se mueven».' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'La primera vez que te encuentras cada tapa, una tarjeta de aprendizaje te la explica. Una tapa que no se abre nunca hace imposible un tablero: se ha comprobado que todos los tableros del juego se pueden ganar, tapas incluidas.',
          },
        ],
      },
      {
        id: 'gates',
        title: 'Puertas',
        blocks: [
          {
            t: 'p',
            text: 'Las puertas son entradas de colores en el marco del tablero, de una, dos o tres casillas de largo. Una puerta cuyo color todavía piden tus objetivos brilla suavemente; una puerta que ahora mismo no puede admitir ladrillos, no. Una puerta de cualquier otro color, o una que está cerrada, es simplemente parte de la pared.',
          },
          {
            t: 'entry',
            id: 'gate',
            title: 'Puerta abierta',
            board: {
              rows: ['B . Y G', '. . . R+', 'G Y B .'],
              gates: [{ side: 'left', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 3, dir: 'left' }],
              after: { rows: ['B . Y G', '. . . .', 'G Y B .'] },
              caption: 'Si lo llevas hasta dentro de la puerta de su color, un ladrillo vuelve a casa.',
              alt: 'Un tablero de tres filas de cuatro, con una puerta roja en el borde izquierdo de la fila del medio. Fila de arriba: azul, vacío, amarillo, verde. Fila del medio: tres casillas vacías y un ladrillo rojo a la derecha. Fila de abajo: verde, amarillo, azul, vacío. Una flecha desliza el ladrillo rojo hacia la izquierda por la fila del medio, que está vacía. Resultado: recorre la fila hasta el borde y sale por la puerta roja. La fila del medio queda vacía; los demás ladrillos no cambian.',
            },
            what: 'Una entrada que admite ladrillos de su propio color: ladrillos normales, llaves y rayos de línea. Las bombas, los dardos guiados y las bombas de color se detienen en ella.',
            how: 'Hay tres formas de entrar. **Desliza** un ladrillo por su carril y llévalo hasta dentro de la puerta: si lo sueltas antes de llegar, el ladrillo se queda donde lo soltaste. **Combina** un ladrillo de su color en la casilla del borde que está delante de ella. **Haz estallar** un ladrillo de su color en esa casilla del borde. Cada una cuenta como enviado a casa.',
            facts: [
              { label: 'Anchura', text: 'Un ladrillo suelto puede usar cualquier casilla de la puerta. Un ladrillo largo o grande necesita que la puerta lo abarque, y que las casillas de detrás estén libres.' },
              { label: 'Objetivo', text: '«Envía o combina» un color: cuentan tanto los ladrillos combinados o que estallan en cualquier parte como los que se envían por la puerta.' },
              { label: 'VoiceOver dice', text: '«Puerta: rojo, 2 casillas de ancho, lado izquierdo, filas de la 3 a la 4», y su estado: «abierta».' },
            ],
          },
          {
            t: 'entry',
            id: 'counted-gate',
            title: 'Puerta contada',
            board: {
              rows: ['R+ . G', 'B Y .'],
              gates: [{ side: 'left', at: 0, colour: 'R', kind: 'counted', count: 2 }],
              moves: [{ row: 0, col: 0, dir: 'left' }],
              after: { rows: ['. . G', 'B Y .'], gates: [{ side: 'left', at: 0, colour: 'R', kind: 'counted', count: 1 }] },
              caption: 'Una puerta contada muestra cuántos ladrillos más admitirá.',
              alt: 'Un tablero de dos filas de tres, con una puerta contada roja que muestra un 2 en el borde izquierdo de la fila de arriba. Fila de arriba: rojo, vacío, verde. Fila de abajo: azul, amarillo, vacío. Una flecha desliza el ladrillo rojo hacia la izquierda y lo saca por la puerta. Resultado: el rojo ha vuelto a casa y la puerta muestra ahora un 1: admitirá un ladrillo rojo más y luego se cerrará.',
            },
            what: 'Una puerta con un número: cuántos ladrillos más admitirá.',
            how: 'Cada ladrillo que pasa por ella, deslizado, combinado o estallado delante, le resta uno. Al llegar a cero **se cierra para siempre** y se convierte en pared. Solo cuenta los ladrillos que pasan por ella; los ladrillos de su color combinados en otra parte siguen contando para un objetivo «Envía o combina», pero no cambian el número de la puerta.',
            facts: [
              { label: 'Aparece por primera vez', text: 'Nivel 11, El gran día.' },
              { label: 'VoiceOver dice', text: '«abierta, admite 3 más» y después «cerrada para siempre». Al tocarla: «Puerta roja: admite 3 ladrillos más (rojo) y luego se cierra».' },
            ],
            tip: 'En El gran día, la puerta contada admite un poco más de lo que pide su objetivo. Los ladrillos largos de su color solo pueden salir por una puerta, así que reserva su hueco para ellos.',
          },
          {
            t: 'entry',
            id: 'iced-gate',
            title: 'Puerta helada',
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
              caption: 'Cualquier ladrillo que vuelve a casa deshiela un poco la puerta helada. A esta solo le faltaba uno.',
              alt: 'Un tablero de tres filas de cuatro, con una puerta azul en el borde izquierdo de la fila de arriba y una puerta roja helada en el borde derecho de la fila de abajo, a un ladrillo de deshelarse. Fila de arriba: azul a la izquierda, dos casillas vacías, amarillo. Fila del medio: vacío, verde, vacío, vacío. Fila de abajo: rojo, vacío, amarillo, vacío. Una flecha desliza el ladrillo azul hacia la izquierda y lo saca por la puerta azul. Resultado: el azul ha vuelto a casa, y la puerta roja de la derecha se ha deshelado y está abierta.',
            },
            what: 'Una puerta cubierta de hielo. Hasta que se deshiela no admite nada y es parte de la pared.',
            how: 'Se deshiela paso a paso de dos maneras: **cada ladrillo que vuelve a casa por cualquier puerta** deshiela un paso todas las puertas heladas, y cada pieza despejada en la casilla del borde **justo delante de ella** la deshiela un paso. Cuando el hielo desaparece, desliza dentro su color.',
            facts: [
              { label: 'Aparece por primera vez', text: 'Nivel 5, Macetas y hielo.' },
              { label: 'Se parece a, pero no es', text: 'Un [ladrillo en hielo](#ice) dentro del tablero. Las puertas contadas y las heladas se dibujan de forma distinta, así que nunca se parecen.' },
              { label: 'VoiceOver dice', text: '«helada, despeja 2 más delante para descongelarla» y después «abierta» cuando se deshiela.' },
            ],
            tip: 'Manda pronto a casa un ladrillo fácil, sea del color que sea: empieza el deshielo mientras preparas el resto.',
          },
          {
            t: 'entry',
            id: 'staged-gate',
            title: 'Puerta por fases',
            what: 'Una puerta tras una persiana oscura con un candado y un número de fase. Pertenece a un tablero cuyos objetivos van en dos **fases**, que el panel de objetivos muestra como «Fase 1 / 2».',
            how: 'Cumple los objetivos de la primera fase y empezará la segunda: la persiana se abre y la puerta admite su color. Hasta entonces es parte de la pared.',
            facts: [
              { label: 'Aparece por primera vez', text: 'Nivel 54, en tableros donde no cae nada.' },
              { label: 'VoiceOver dice', text: '«cerrada hasta una etapa posterior», y «Se abren nuevas puertas» cuando cambia la fase.' },
            ],
            tip: 'Durante la fase 1, acerca los ladrillos de la segunda fase a su puerta sellada, para que estén listos en cuanto se abra.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Cada puerta lleva el símbolo de su color. Con el **Tablero de alto contraste** activado, una puerta cuyo color se parece al del marco recibe un contorno de dos tonos. Consulta [Vista, oído y movimiento](help:vision-hearing-and-motion).',
          },
        ],
      },
      {
        id: 'portals',
        title: 'Portales',
        blocks: [
          {
            t: 'entry',
            id: 'portal',
            title: 'Portal',
            what: 'Una pareja de anillos arremolinados encajados en el marco del tablero en dos lados distintos, ambos marcados con la misma letra.',
            how: 'Desliza un ladrillo **suelto** (un ladrillo normal, una llave o un especial) por su carril hasta la casilla del borde que hay delante de un anillo: entra y sale por su gemelo, avanzando hacia dentro hasta chocar con algo. Gasta un movimiento. La casilla que hay delante del anillo gemelo debe estar libre, y si en ese borde hay una puerta del color del ladrillo que lo admite, el ladrillo vuelve a casa. Los ladrillos largos, grandes, en L y en T no pueden usar los portales.',
            facts: [
              { label: 'Aparece por primera vez', text: 'Nivel 58, en tableros donde no cae nada.' },
              { label: 'VoiceOver dice', text: 'La acción «Deslizar hacia la izquierda por el portal» y después «Por el portal, sale en fila 3, columna 5».' },
            ],
            tip: 'Los portales son atajos hacia una puerta lejana: un ladrillo encerrado en un lado del tablero puede salir justo delante de la puerta que necesita.',
          },
        ],
      },
      {
        id: 'lookalikes',
        title: 'Cómo distinguir lo que se parece',
        blocks: [
          {
            t: 'table',
            head: ['Si ves…', 'Es…', 'Porque…'],
            rows: [
              ['Una caja que parece más robusta', 'Una caja de dos capas', 'Tócala: te dice cuántas capas le quedan.'],
              ['Un panel sobre varios ladrillos, con un símbolo', 'Una tapa', 'Las tapas cubren ladrillos; las cajas ocupan una casilla por sí solas.'],
              ['Hielo dentro del tablero', 'Un ladrillo en hielo', 'El hielo en el marco es una puerta helada.'],
              ['Un ladrillo gris con «?»', 'Un ladrillo bocabajo', 'No tiene símbolo de color; una tapa nunca muestra «?».'],
              ['Una entrada de color con un número', 'Una puerta contada', 'Una puerta helada muestra hielo, y una puerta por fases, una persiana oscura con un candado.'],
              ['Un remolino en el marco', 'Un extremo de portal', 'Las puertas tienen color; los extremos de portal van por parejas con letra.'],
              ['Un adorno en un hueco', 'Una estatua', 'Es decorado: tócala y te lo dirá.'],
            ],
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'Los obstáculos con VoiceOver',
        blocks: [
          {
            t: 'list',
            items: [
              'Los obstáculos y los elementos fijos se leen como texto, y las piezas que puedes mover, como botones, así sabes al instante qué se puede mover. Elegir uno que no se puede mover dice, por ejemplo, «Caja, 2 capas. No se puede mover».',
              'Cada ladrillo cubierto lee su tapa, y cada puerta es un elemento propio con su anchura, su lado, sus filas o columnas y su estado.',
              'El rotor **Bloqueos** salta entre cajas, hielo, candados, musgo y lo demás; el rotor **Puertas**, entre las puertas.',
              'El **Más contenido** de cada pieza incluye el obstáculo que tiene encima y si algún objetivo lo necesita.',
              'El color de un ladrillo bocabajo nunca se dice hasta que se da la vuelta; entonces oyes «Se dio la vuelta:» y su color.',
            ],
          },
          { t: 'p', text: 'Todo lo demás está en [Jugar con VoiceOver](help:voiceover).' },
        ],
      },
      {
        id: 'faq',
        title: 'Preguntas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: '¿Por qué mi ladrillo se ha parado en la puerta en vez de volver a casa?',
                a: 'Comprueba cinco cosas: que la puerta sea del color del ladrillo; que no esté helada, llena ni sellada hasta una fase posterior; que el ladrillo no sea una bomba, un dardo guiado ni una bomba de color; que un ladrillo largo o grande tenga una puerta tan ancha como él; y que hayas llevado el ladrillo hasta dentro. Un ladrillo que sueltas justo antes de su puerta se queda donde lo soltaste.',
              },
              {
                q: 'He movido un ladrillo bocabajo y sigue bocabajo. ¿Es un error?',
                a: 'No. Un ladrillo bocabajo solo se da la vuelta cuando un ladrillo de al lado sale del tablero, nunca cuando se mueve ni cuando un vecino se aparta. Es la misma regla que el juego original ha tenido siempre.',
              },
              {
                q: '¿Por qué no hay pista en este tablero?',
                a: 'En los tableros con ladrillos bocabajo, la pista nunca sugiere un movimiento que revelaría un color oculto. Si todos los buenos movimientos implican un ladrillo bocabajo, no se muestra ninguna pista en lugar de una pista que haga trampa.',
              },
              {
                q: 'El musgo no para de crecer. ¿Qué puedo hacer?',
                a: 'El musgo solo se extiende en los tableros Candados y musgo, a un ladrillo que tenga al lado, tras un movimiento que no quite musgo. Quita una mata con una línea a su lado siempre que puedas, y usa el potenciador **OVNI** con el musgo que esté en un sitio difícil: los potenciadores nunca lo dejan crecer.',
              },
              {
                q: '¿Una tapa o un obstáculo pueden hacer imposible un tablero?',
                a: 'No. Se ha comprobado que todos los tableros se pueden ganar. Si no se puede mover nada en absoluto, el tablero se mezcla gratis; si el musgo ha ahogado todas las columnas, se marchita; y, como último recurso, cede el hielo o el candado de un ladrillo. Consulta [Jugar un tablero](help:playing-a-board#never-stuck).',
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
    title: 'Los doce tipos de tablero',
    summary:
      'Los doce tableros de cada aldea siguen el mismo patrón de doce tipos, de Mándalos a casa a Puzle tranquilo. Qué trae cada tipo, en qué se diferencian los tableros donde caen ladrillos de los tableros donde no cae nada, y qué cambian los tableros Difícil, Muy difícil, Jefe y Noche.',
    keywords:
      'tipo de tablero clase modalidad aldea doce 12 gravedad caer caída quieto sin reponer mándalos a casa desliza y combina jardín abierto jardín que cae macetas y hielo ladrillos largos piezas de esquina cajas y hielo candados y musgo caminos de piedra el gran día puzle tranquilo difícil muy difícil superdifícil jefe noche dificultad placa',
    host: 'vio',
    hostPose: 'idle',
    sections: [
      {
        id: 'overview',
        title: 'Resumen rápido',
        blocks: [
          {
            t: 'p',
            text: 'Cada aldea tiene doce tableros, y los tableros del 1 al 12 de una aldea son siempre del mismo tipo y en el mismo orden, así que enseguida te familiarizas con el ritmo de una aldea. Los doce tableros de Ciudad Jardín (niveles 1 a 12) llevan estos nombres y enseñan un tipo cada uno; las aldeas posteriores dan a sus tableros sus propios títulos, pero mantienen el patrón.',
          },
          {
            t: 'table',
            head: ['Tablero', 'Tipo', '¿Caen ladrillos?', 'Qué trae'],
            rows: [
              ['1', '[Mándalos a casa](#send-them-home)', 'No', 'Saca los ladrillos deslizándolos por sus puertas.'],
              ['2', '[Desliza y combina](#slide-and-match)', 'No', 'Recoge colores con líneas y manda uno a casa.'],
              ['3', '[Jardín abierto](#open-garden)', 'No', 'Un tablero amplio que se va abriendo a medida que juegas.'],
              ['4', '[Jardín que cae](#falling-garden)', 'Sí', 'Los mismos objetivos, con caídas y ladrillos nuevos.'],
              ['5', '[Macetas y hielo](#pots-and-ice)', 'No', 'Cajas, ladrillos en hielo y una puerta helada.'],
              ['6', '[Ladrillos largos](#long-bricks)', 'Normalmente', 'Ladrillos largos y puertas lo bastante anchas para ellos.'],
              ['7', '[Piezas de esquina](#corner-pieces)', 'Sí, sin ladrillos nuevos', 'Ladrillos en L y en T.'],
              ['8', '[Cajas y hielo](#crates-and-ice)', 'Normalmente', 'Cajas de una y dos capas, y más hielo.'],
              ['9', '[Candados y musgo](#locks-and-moss)', 'Sí', 'Candados que abrir y musgo que se extiende.'],
              ['10', '[Caminos de piedra](#stone-lanes)', 'Normalmente', 'Estatuas que dividen el tablero en carriles.'],
              ['11', '[El gran día](#the-big-day)', 'Sí', 'El final de la aldea: un poco de todo.'],
              ['12', '[Puzle tranquilo](#quiet-puzzle)', 'Sí, sin ladrillos nuevos', 'Unos pocos ladrillos grandes y puertas anchas.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: '«Normalmente» significa lo siguiente: desde Clover Farm hasta el nivel 408, en cada aldea dos de los tableros Ladrillos largos, Cajas y hielo y Caminos de piedra se juegan sin que caiga nada, y en el tercero caen ladrillos; cuál de ellos cae cambia de una aldea a otra. A partir del nivel 409, en los tres caen ladrillos.',
          },
        ],
      },
      {
        id: 'gravity',
        title: 'Tableros donde caen ladrillos y tableros donde no',
        blocks: [
          {
            t: 'table',
            head: ['Qué cambia', 'No cae nada', 'Caen ladrillos'],
            rows: [
              ['Después de una combinación', 'Las casillas despejadas se quedan vacías y abren carriles para deslizar.', 'Los ladrillos de arriba caen en el hueco, y los ladrillos sueltos se cuelan en diagonal rodeando los obstáculos.'],
              ['Ladrillos nuevos', 'Nunca.', 'Llegan desde arriba, pero solo hasta que el tablero vuelve a estar tan lleno como al principio. Piezas de esquina y Puzle tranquilo no reciben ninguno.'],
              ['Deslizamientos', 'En cualquier dirección.', 'Solo de lado, o directamente hacia fuera por una puerta (también hacia abajo, por una puerta del suelo).'],
              ['Puertas', 'En cualquier lado.', 'En los lados y en el suelo.'],
              ['Cascadas', 'Raras.', 'Frecuentes: los ladrillos que caen pueden formar líneas nuevas.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['B Y G', 'R R Y', 'G B R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['B Y G', '. . .', 'G B Y'] },
              caption: 'Donde no cae nada, una combinación deja un hueco por el que puedes deslizar.',
              alt: 'Un tablero donde no cae nada, de tres filas de tres. Fila de arriba: azul, amarillo, verde. Fila del medio: rojo, rojo, amarillo. Fila de abajo: verde, azul, rojo. Una flecha cambia el rojo de abajo a la derecha hacia arriba, con el amarillo que tiene encima. Resultado: tres rojos desaparecen y la fila del medio queda vacía: no cae nada en ella. El amarillo queda abajo a la derecha.',
            },
          },
          {
            t: 'board',
            board: {
              rows: ['. . .', 'B Y G', 'R R Y', 'G B R'],
              moves: [{ row: 3, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['. . .', 'O K B', 'B Y G', 'G B Y'] },
              caption: 'Donde caen ladrillos, los de arriba caen en el hueco y llegan otros nuevos, hasta el número de ladrillos con el que empezó el tablero.',
              alt: 'Un tablero donde caen ladrillos, de cuatro filas de tres, con la fila de arriba vacía. Fila 2: azul, amarillo, verde. Fila 3: rojo, rojo, amarillo. Fila 4: verde, azul, rojo. Una flecha cambia el rojo de abajo a la derecha hacia arriba, con el amarillo que tiene encima. Resultado: los tres rojos de la fila 3 desaparecen, el azul, el amarillo y el verde de arriba caen a la fila 3, y tres ladrillos nuevos, aquí naranja, rosa y azul, caen en la fila 2. La fila de arriba sigue vacía, porque el tablero solo se rellena hasta tener tantos ladrillos como al principio. El amarillo queda abajo a la derecha.',
            },
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Nunca te quedas atascado. Si no queda ningún movimiento, el tablero se mezcla gratis; un tablero que no lleva a ninguna parte se reparte de nuevo sin más; y si a un tablero le faltan ladrillos del color que pide un objetivo, algunos ladrillos sobrantes toman ese color (o, donde caen ladrillos, ese color empieza a llegar desde arriba).',
          },
        ],
      },
      {
        id: 'kinds',
        title: 'Los doce tipos',
        blocks: [
          {
            t: 'entry',
            id: 'send-them-home',
            title: '1 · Mándalos a casa',
            board: {
              rows: ['R+ . . B', '. Y . .', 'B . R .'],
              gates: [
                { side: 'left', at: 0, colour: 'R' },
                { side: 'right', at: 2, colour: 'B' },
              ],
              moves: [{ row: 0, col: 0, dir: 'left' }],
              caption: 'El primer tipo: lleva los ladrillos hasta las puertas de su color.',
              alt: 'Un tablero de tres filas de cuatro, con una puerta roja en el borde izquierdo de la fila de arriba y una puerta azul en el borde derecho de la fila de abajo. Fila de arriba: rojo a la izquierda, dos casillas vacías y azul a la derecha. Fila del medio: vacío, amarillo, vacío, vacío. Fila de abajo: azul, vacío, rojo, vacío. Una flecha desliza el ladrillo rojo de arriba a la izquierda hacia la izquierda y lo saca por la puerta roja que tiene al lado.',
            },
            what: 'Un tablero donde no cae nada, lleno en unas dos terceras partes, con puertas de los colores del objetivo. Los objetivos son «Envía o combina» dos colores, o tres más adelante en el Viaje.',
            how: 'Busca un ladrillo de un color del objetivo con el carril despejado hasta su puerta y llévalo dentro. Cuando un carril esté bloqueado, quita los ladrillos que estorban combinándolos o apártalos deslizándolos.',
            facts: [{ label: 'Primera vez', text: 'Nivel 1.' }],
            tip: 'Un color del objetivo también se puede combinar en cualquier parte: tres en línea cuentan como tres, sin puerta.',
          },
          {
            t: 'entry',
            id: 'slide-and-match',
            title: '2 · Desliza y combina',
            what: 'No cae nada. Dos colores que **recoger** con líneas y uno que mandar a casa.',
            how: 'Desliza un ladrillo junto a dos de su color para hacer una línea, o cambia dos vecinos. Cada línea despeja sus casillas para siempre, así que cada combinación abre espacio para el siguiente deslizamiento.',
            facts: [{ label: 'Primera vez', text: 'Nivel 2.' }],
            tip: 'Un deslizamiento puede recorrer cualquier distancia y se detiene donde lo sueltas, así que forma líneas que un cambio nunca alcanzaría.',
          },
          {
            t: 'entry',
            id: 'open-garden',
            title: '3 · Jardín abierto',
            what: 'Un tablero más grande (de 8×8 al principio) donde no cae nada: manda dos colores a casa y recoge un tercero.',
            how: 'Planifica unos cuantos movimientos por adelantado. Cada ladrillo que despejas deja sitio para deslizar, así que despejar los ladrillos que hay entre un ladrillo del objetivo y su puerta suele ser mejor que la combinación más cercana.',
            facts: [{ label: 'Primera vez', text: 'Nivel 3.' }],
          },
          {
            t: 'entry',
            id: 'falling-garden',
            title: '4 · Jardín que cae',
            what: 'Los mismos objetivos que Jardín abierto, pero los ladrillos caen y llegan otros nuevos desde arriba.',
            how: 'Juega en la parte baja del tablero: las combinaciones cerca del fondo mueven todo lo que tienen encima y preparan cascadas. Desliza de lado hacia los huecos, o directamente hacia abajo, a una puerta del suelo.',
            facts: [{ label: 'Primera vez', text: 'Nivel 4.' }],
            tip: 'Aquí el objetivo de recoger crece a lo largo del Viaje; las cascadas te hacen buena parte del trabajo.',
          },
          {
            t: 'entry',
            id: 'pots-and-ice',
            title: '5 · Macetas y hielo',
            what: 'No cae nada. Cajas de una capa, ladrillos en hielo y una **puerta helada**, normalmente de un tercer color. Objetivos: manda tres colores a casa y rompe algunas cajas.',
            how: 'Rompe las cajas y el hielo con líneas a su lado. Manda pronto cualquier ladrillo a casa: cada ladrillo que sale por una puerta deshiela un poco la puerta helada.',
            facts: [{ label: 'Primera vez', text: 'Nivel 5. Se explica en [Todos los obstáculos, tapas y puertas, explicados](help:blockers-encyclopedia#iced-gate).' }],
          },
          {
            t: 'entry',
            id: 'long-bricks',
            title: '6 · Ladrillos largos',
            what: 'Ladrillos largos (1×2 y 2×1, y más adelante 1×3 y 3×1) de los colores del objetivo, cada uno con una puerta en algún sitio lo bastante ancha para admitirlo. Objetivos: manda dos colores a casa; cada ladrillo largo cuenta todas sus casillas.',
            how: 'Alinea un ladrillo largo con una puerta que lo abarque y asegúrate de que las casillas de detrás estén libres. Los ladrillos largos nunca se cambian ni estallan, así que despeja sus carriles con líneas de ladrillos sueltos.',
            facts: [{ label: 'Primera vez', text: 'Nivel 6.' }],
          },
          {
            t: 'entry',
            id: 'corner-pieces',
            title: '7 · Piezas de esquina',
            what: 'Ladrillos en L y en T (más adelante, algunos largos) y unos pocos sueltos, solo de los dos colores del objetivo, en un tablero donde caen ladrillos pero **no llegan otros nuevos**. La puerta de un color está abajo a la izquierda, la del otro abajo a la derecha, y el suelo está bordeado de puertas de tres casillas de los dos colores, alternándose.',
            how: 'Cada ladrillo que se asienta cae sobre una puerta o a su lado, así que piensa en el orden: manda primero la pieza que más espacio libera.',
            facts: [{ label: 'Primera vez', text: 'Nivel 7.' }],
          },
          {
            t: 'entry',
            id: 'crates-and-ice',
            title: '8 · Cajas y hielo',
            what: 'Más cajas (de dos capas a partir de Clover Farm) y ladrillos en hielo. Objetivos: rompe cajas, donde cuenta cada capa, y manda un color a casa.',
            how: 'Haz líneas junto a las cajas, sobre todo líneas que toquen dos a la vez. La doble explosión de una bomba es ideal para las cajas de dos capas.',
            facts: [{ label: 'Primera vez', text: 'Nivel 8.' }],
          },
          {
            t: 'entry',
            id: 'locks-and-moss',
            title: '9 · Candados y musgo',
            what: 'Caen ladrillos. Ladrillos con candado y musgo, y es el único tipo donde el musgo se extiende. Objetivos: suelta todos los candados, quita algo de musgo y manda un color a casa.',
            how: 'Libera los candados con líneas que pasen **por** ellos; quita el musgo con líneas **a su lado**. Quita un poco de musgo siempre que puedas, antes de que se extienda más.',
            facts: [{ label: 'Primera vez', text: 'Nivel 9.' }],
          },
          {
            t: 'entry',
            id: 'stone-lanes',
            title: '10 · Caminos de piedra',
            board: {
              rows: ['Y . . . .', 'R . s . B', 'G . s . .', 'B . . . .'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              caption: 'Las estatuas trazan carriles: este rojo no puede llegar a su puerta por su propia fila.',
              alt: 'Un tablero donde no cae nada, de cuatro filas de cinco, con una puerta roja en el borde derecho de la fila 2. Una columna de dos estatuas ocupa el centro de las filas 2 y 3. Fila 1: amarillo a la izquierda y cuatro casillas vacías. Fila 2: rojo a la izquierda, vacío, estatua, vacío, azul. Fila 3: verde a la izquierda, vacío, estatua y dos casillas vacías. Fila 4: azul a la izquierda y cuatro casillas vacías. La estatua bloquea el carril del ladrillo rojo hasta su puerta; las filas de arriba y de abajo son los carriles libres para rodearla.',
            },
            what: 'Hay estatuas en columnas cortas por todo el tablero, con un ladrillo largo y, más adelante, algunas cajas. Objetivos: manda dos colores a casa y recoge un tercero.',
            how: 'Lee los carriles antes de mover: las estatuas nunca se rompen, así que lleva los ladrillos por las filas libres. La explosión de un rayo de línea pasa por encima de las estatuas.',
            facts: [{ label: 'Primera vez', text: 'Nivel 10.' }],
          },
          {
            t: 'entry',
            id: 'the-big-day',
            title: '11 · El gran día',
            what: 'El final de la aldea, donde caen ladrillos: ladrillos largos y grandes, cajas (de dos capas más adelante), hielo y, más adelante, candados; una **puerta helada** del primer color del objetivo, una **puerta contada** del segundo y, a menudo, un **bancal sellado**, una tapa de reloj sobre dos casillas del suelo en una esquina. Objetivos: manda dos colores a casa y rompe cajas.',
            how: 'Empieza pronto el deshielo mandando cualquier ladrillo a casa, reserva el hueco de la puerta contada para los ladrillos que solo pueden salir por una puerta, y deja que el bancal sellado se abra solo mientras juegas en otra parte.',
            facts: [
              { label: 'Primera vez', text: 'Nivel 11.' },
              { label: 'Conviene saber', text: 'El nivel 2000, el final del Viaje, es un Gran día de noche.' },
            ],
          },
          {
            t: 'entry',
            id: 'quiet-puzzle',
            title: '12 · Puzle tranquilo',
            what: 'Un tablero más pequeño (de 8×6 al principio) con unos pocos ladrillos grandes (2×2, 1×2 y 2×1, y más adelante 1×3, 3×1, L y T) y algunos sueltos, solo de los dos colores del objetivo. Caen ladrillos pero no llegan otros nuevos, y las puertas están colocadas como en Piezas de esquina: abajo a cada lado y a lo largo de todo el suelo.',
            how: 'Tómate tu tiempo. No llega nada nuevo, así que cada movimiento cambia el tablero para siempre. Averigua qué pieza bloquea a cuál y mándalas a casa en ese orden.',
            facts: [{ label: 'Primera vez', text: 'Nivel 12.' }],
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Nivel 31 en la playa: 16 movimientos restantes, objetivos de 8 amarillos y 8 azules. Abajo se apilan ladrillos grandes de una sola pieza: una barra azul larga, una columna azul alta y una pieza amarilla en forma de C, con puertas azules y amarillas en los bordes.',
            caption: 'Ladrillos grandes y puertas anchas, cerca del principio del Viaje.',
          },
        ],
      },
      {
        id: 'extras',
        title: 'Qué más puede añadir un tablero',
        blocks: [
          {
            t: 'p',
            text: 'Además de su tipo, un tablero puede llevar algunos extras. Cada uno tiene su propia tarjeta de aprendizaje la primera vez que te lo encuentras.',
          },
          {
            t: 'list',
            items: [
              '**Un tablero con forma.** Muchos tableros siguen el contorno de su aldea, con huecos en la placa. Un hueco detiene un deslizamiento igual que el marco.',
              '**Una sala sellada** bajo una de las [cinco tapas](help:blockers-encyclopedia#lids), en algunos tableros de todos los tipos salvo Piezas de esquina y Puzle tranquilo.',
              '**Ladrillos bocabajo «?»**, a partir del nivel 49. Consulta [Ladrillo bocabajo](help:blockers-encyclopedia#face-down).',
              '**Objetivos por fases** con puertas selladas, a partir del nivel 54, y **portales**, a partir del nivel 58, ambos en tableros donde no cae nada.',
              '**Cajas o hielo extra** en los tipos más sencillos.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'En la versión 5.1.1, las salas selladas distintas del bancal sellado de El gran día, los ladrillos bocabajo, los objetivos por fases, los portales y las cajas y el hielo extra aparecen en tableros hasta el nivel 408. Los tableros con forma aparecen a lo largo de todo el Viaje.',
          },
          {
            t: 'p',
            text: 'Los tableros también crecen a lo largo del Viaje: hasta 9×9, con más colores (tres o cuatro al principio, cinco o seis después), más obstáculos y objetivos más grandes. Dentro de una aldea, no hay dos tableros con la misma disposición.',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Tableros Difícil, Muy difícil, Jefe y Noche',
        blocks: [
          {
            t: 'p',
            text: 'Algunos tableros son más difíciles que sus vecinos. La parada del nivel en el mapa del Viaje muestra una placa antes de jugar (**DIFÍCIL**, **MUY DIFÍCIL**, **JEFE** o **NOCHE**), y el tablero lleva la misma placa bajo su cabecera.',
          },
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Nivel 35 al atardecer, 28 movimientos restantes, con una placa morada DIFÍCIL bajo los objetivos: 2 amarillos, 5 rosas y 3 castillos de arena. El tablero con forma de castillo tiene un ladrillo rosa grande, ladrillos cubiertos de musgo y cuatro cajas de castillo de arena, con puertas amarillas, rosas y rojas.',
            caption: 'Un tablero Difícil lleva su placa bajo la cabecera.',
          },
          {
            t: 'table',
            head: ['Dificultad', 'Dónde', 'Qué cambia', 'Monedas al superarlo'],
            rows: [
              ['Normal', 'La mayoría de los tableros.', 'Sin placa.', '25'],
              ['Difícil', 'Alrededor de un tablero de cada tres a partir del nivel 14.', 'Los objetivos piden alrededor de un 15 % más, y hay algunos obstáculos más.', '50'],
              ['Muy difícil', 'Alrededor de un tablero de cada siete a partir del nivel 39.', 'Los objetivos piden alrededor de un 30 % más.', '80'],
              ['Jefe', 'El último tablero de cada capítulo de veinte, a partir del nivel 40, salvo que sea un tablero Noche.', 'Los objetivos piden alrededor de un 40 % más.', '80'],
              ['Noche', 'Cada 25 niveles a partir del 115 (115, 140, 165…).', 'Ambientado de noche. Se juega como un tablero Difícil.', '50'],
            ],
          },
          {
            t: 'list',
            items: [
              'Los tableros Muy difícil y Jefe también reciben algunos obstáculos más y, muy avanzado el Viaje, pueden usar un color más, lo que hace más difícil encontrar líneas.',
              'En las dificultades más altas, los movimientos se fijan para que menos jugadores lo superen al primer intento. Aun así, se comprueba que todos los tableros se pueden ganar.',
              'Con dos o más estrellas se suma a las monedas una bonificación por objetivo, y los eventos pueden duplicarlas o triplicarlas. Consulta [Jugar un tablero](help:playing-a-board#tiers).',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'VoiceOver lee la dificultad después del número de nivel en el resumen del tablero, por ejemplo «Jefe».',
          },
        ],
      },
      {
        id: 'approach',
        title: 'Por dónde empezar, sea cual sea el tipo',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Lee primero el panel de objetivos.** Los objetivos «Envía o combina» aceptan los ladrillos de ese color salgan como salgan; los objetivos «Recoge» quieren líneas o explosiones; los objetivos de cajas, candados y musgo quieren líneas a su lado o que pasen por ellos.',
              '**Localiza las puertas.** Las puertas que todavía piden tus objetivos brillan suavemente. Comprueba su anchura antes de planificar la ruta de un ladrillo largo.',
              '**Compara tus movimientos con los objetivos.** Si un objetivo necesita ocho ladrillos y tienes quince movimientos, busca especiales: un solo rayo de línea puede hacer el trabajo de varios movimientos.',
              '**En los tableros donde no cae nada, piensa en carriles.** Cada combinación deja un hueco; elige las combinaciones que abren el carril que necesitas a continuación.',
              '**En los tableros donde caen ladrillos, trabaja desde abajo.** Las combinaciones bajas mueven más parte del tablero y empiezan cascadas.',
              '**¿Atascado? Pide una pista.** Tienes una Pista gratis en cada intento, y con VoiceOver el toque doble con dos dedos te da una en cualquier momento.',
            ],
          },
        ],
      },
      {
        id: 'faq',
        title: 'Preguntas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: '¿Por qué no puedo deslizar un ladrillo hacia arriba o hacia abajo en este tablero?',
                a: 'Es un tablero donde caen ladrillos. Un ladrillo simplemente volvería a caer, así que en estos tableros los ladrillos se deslizan de lado, o directamente hacia fuera por una puerta, también hacia abajo, por una puerta del suelo.',
              },
              {
                q: '¿Por qué han dejado de llegar ladrillos nuevos?',
                a: 'En los tableros donde caen ladrillos, los nuevos solo rellenan el tablero hasta tener tantos ladrillos como al principio, para que siempre haya sitio para deslizar. Los tableros Piezas de esquina y Puzle tranquilo nunca se rellenan: se vacían a medida que los resuelves.',
              },
              {
                q: '¿Cómo sé si un tablero es Difícil antes de empezar?',
                a: 'Mira la parada del nivel en el mapa del Viaje: los tableros Difícil, Muy difícil, Jefe y Noche llevan una placa allí, y la misma placa bajo la cabecera del tablero.',
              },
              {
                q: '¿Por qué el tablero 6 de esta aldea no se parece en nada al tablero 6 de la anterior?',
                a: 'El tipo marca la idea (ladrillos largos y puertas anchas); la aldea marca el aspecto, la forma del tablero, los colores y el tamaño del reto, así que el mismo tipo se dispone de forma distinta de una aldea a otra.',
              },
              {
                q: '¿Los tableros Jefe dan algo especial?',
                a: 'Un tablero Jefe cierra un capítulo y paga las mismas 80 monedas que un tablero Muy difícil, más la bonificación por objetivo con dos o más estrellas. Superarlo completa el capítulo.',
              },
            ],
          },
        ],
      },
    ],
    related: ['special-bricks-and-combos', 'blockers-encyclopedia', 'playing-a-board', 'bricks-specials-and-blockers', 'journey-and-villages', 'lives-moves-and-undos'],
  },
];
