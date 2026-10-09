import type { HelpArticle } from '../../model.ts';

/**
 * A estante da enciclopédia (“learn”), em português do Brasil: tijolos especiais e combos, cada
 * bloqueio, tampa e portão, e os doze tipos de tabuleiro. Conferido com as regras e os tabuleiros
 * da 5.1.1 (68).
 */
export const learnArticles: HelpArticle[] = [
  {
    slug: 'special-bricks-and-combos',
    category: 'learn',
    cover: 'board-slide',
    title: 'Tijolos especiais e combos: o guia completo',
    summary:
      'Como criar cada tijolo especial, exatamente o que cada um limpa, as três formas de dispará-los, todas as combinações de dois especiais e como cascatas, pontuação, estrelas e o final com as jogadas que sobram se encaixam.',
    keywords:
      'especial especiais tijolo especial foguete listrado raio de linha raio bomba embrulhada bomba de cor arco-íris dardo teleguiado dardo peixe joaninha cortador cortador de grama borboleta combo combinar dois especiais juntar cascata reação em cadeia pontuação pontos estrelas jogadas restantes bônus final explosão power-up',
    host: 'bricko',
    hostPose: 'cheer',
    sections: [
      {
        id: 'quick',
        title: 'Resumo rápido',
        blocks: [
          {
            t: 'p',
            text: 'Um tijolo especial é criado sempre que uma combinação é maior do que uma simples linha de três. Ele fica no tabuleiro, esperando, até você dispará-lo. São quatro:',
          },
          {
            t: 'table',
            head: ['Especial', 'Como criar', 'O que limpa', 'Como disparar'],
            rows: [
              ['[Raio de linha](#line-blaster)', 'Quatro em linha.', 'A linha inteira ou a coluna inteira dele.', 'Tocando nele, trocando-o ou pegando-o numa linha ou explosão.'],
              ['[Bomba](#bomb)', 'Duas linhas que se cruzam: uma forma de L, T ou +.', 'O quadrado 3×3 em volta dela, e de novo quando o tabuleiro se acomoda.', 'Tocando nela, trocando-a ou pegando-a numa linha ou explosão.'],
              ['[Bomba de cor](#colour-bomb)', 'Cinco ou mais em linha reta.', 'Todas as peças de uma cor.', 'Trocando-a com um tijolo (aquela cor), tocando nela ou pegando-a numa explosão (a cor mais comum).'],
              ['[Dardo teleguiado](#homing-dart)', 'Um quadrado 2×2 de uma cor.', 'Uma peça de que um objetivo precisa, onde quer que ela esteja.', 'Tocando nele, trocando-o ou pegando-o numa linha ou explosão.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Disparar um especial sempre gasta uma jogada, seja tocando, seja trocando. Uma troca que dispara dois especiais juntos é uma jogada só para os dois, então um combo é o melhor negócio do tabuleiro.',
          },
        ],
      },
      {
        id: 'making',
        title: 'Como um especial é criado',
        blocks: [
          {
            t: 'p',
            text: 'Depois de cada jogada, o tabuleiro procura combinações: linhas de três ou mais na horizontal ou na vertical, e quadrados 2×2. Linhas que se tocam ou se cruzam viram um grupo só, e cada grupo cria no máximo um especial. Quando um grupo poderia criar mais de um, o mais forte ganha:',
          },
          {
            t: 'steps',
            items: [
              '**Cinco ou mais em linha reta** criam uma **bomba de cor**, mesmo que outras linhas a cruzem.',
              '**Linhas que se cruzam** (uma forma de L, T ou +) criam uma **bomba**.',
              '**Exatamente quatro em linha** criam um **raio de linha**.',
              '**Um quadrado 2×2**, sem nada mais forte no grupo, cria um **dardo teleguiado**.',
            ],
          },
          { t: 'h3', text: 'Onde ele aparece' },
          {
            t: 'list',
            items: [
              'No **tijolo que você moveu**, se esse tijolo fizer parte da combinação. Vale para trocas e para deslizes: deslize um tijolo até o lugar para completar uma linha de quatro e o raio de linha aparece no tijolo que deslizou.',
              'Se não, no caso de uma bomba, **onde as duas linhas se cruzam**.',
              'Se não, no tijolo que chegou por último (numa cascata, o que caiu ali) ou no meio do grupo.',
            ],
          },
          { t: 'h3', text: 'Para que lado um raio de linha aponta' },
          {
            t: 'p',
            text: 'As listras de um raio de linha **seguem o seu gesto**. Passe o dedo na horizontal (para a esquerda ou para a direita) e ele limpa a linha dele; passe para cima ou para baixo e ele limpa a coluna, não importa para que lado corre a própria linha de quatro. Um raio de linha criado por uma cascata, sem gesto de ninguém, fica **atravessado** em relação à linha que o criou.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Mire antes de passar o dedo',
            text: 'Quando dá para completar uma linha de quatro por duas direções, escolha o gesto que aponta o raio para onde você precisa: ao longo da linha com seus tijolos de objetivo, ou pela coluna que dá num portão.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Tijolos longos, grandes, em L e em T nunca contam numa linha, então nunca ajudam a criar um especial. Um tijolo com cadeado conta numa linha (a linha o solta), mas o especial nunca aparece no próprio tijolo com cadeado.',
          },
        ],
      },
      {
        id: 'specials',
        title: 'Os quatro especiais',
        blocks: [
          {
            t: 'p',
            text: 'Cada vila veste seus especiais de um jeito: na Cidade Jardim, o raio de linha é um cortador de grama, a bomba é um botão de flor (“Chuva de pétalas!”), a bomba de cor é uma borboleta e o dardo teleguiado é uma joaninha; na Clover Farm, são um trator, uma espiga de milho (“Pipoca!”), um girassol e uma abelha. Eles sempre jogam do mesmo jeito.',
          },
          {
            t: 'entry',
            id: 'line-blaster',
            title: 'Raio de linha',
            board: {
              rows: ['G . R . Y', 'R R B R Y', 'Y G . B G'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G . B . Y', '. . R| . Y', 'Y G . B G'] },
              caption: 'Quatro em linha, completados com um gesto para baixo: o raio limpa a coluna dele.',
              alt: 'Um tabuleiro em que nada cai, com três linhas de cinco. Linha de cima: verde, vazio, vermelho, vazio, amarelo. Linha do meio: vermelho, vermelho, azul, vermelho, amarelo. Linha de baixo: amarelo, verde, vazio, azul, verde. Uma seta troca o tijolo vermelho do alto da coluna do meio, para baixo, com o tijolo azul embaixo dele. Resultado: os quatro vermelhos da linha do meio formam uma linha de quatro e somem, e um raio de linha vermelho com listras na vertical aparece no meio, onde o vermelho movido parou, porque o gesto foi vertical. O tijolo azul agora está no alto da coluna do meio, as casas limpas ficam vazias e todos os outros tijolos continuam onde estavam.',
            },
            what: 'Um tijolo com listras. Quando dispara, limpa todas as peças da linha dele (listras na horizontal) ou da coluna dele (listras na vertical), até as bordas do tabuleiro, passando por cima de estátuas e de vãos no formato do tabuleiro.',
            how: 'Faça quatro em linha. Dispare-o tocando nele, trocando-o com um vizinho que forme uma combinação ou com outro especial, ou pegando-o numa linha ou em outra explosão. Ele também pode **sair deslizando por um portão da cor dele**, e aí sai sem disparar e conta como um tijolo da cor dele.',
            facts: [
              { label: 'Como criar', text: 'Exatamente quatro em linha.' },
              { label: 'Limpa', text: 'Uma linha inteira ou uma coluna inteira: tijolos somem, bloqueios perdem uma camada, cadeados abrem, outros especiais disparam.' },
              { label: 'Combina com', text: 'Todos os outros especiais. Veja [a tabela de combos](#combos).' },
              { label: 'O VoiceOver diz', text: '“Raio de linha, vermelho, horizontal, limpa a linha” ou “… vertical, limpa a coluna”. Em algumas vilas, o nome local vem entre parênteses logo depois, como “(cortador)”.' },
            ],
            tip: 'Quando a linha ou a coluna de um raio de linha passa pelas casas bem na frente de um portão, os tijolos da cor do portão nessas casas saem voando por ele e contam como enviados.',
          },
          {
            t: 'entry',
            id: 'bomb',
            title: 'Bomba',
            board: {
              rows: ['R G B .', 'R B G .', 'Y R R .', 'R G Y .'],
              moves: [{ row: 3, col: 0, dir: 'up', kind: 'swap' }],
              after: { rows: ['. G B .', '. B G .', 'Rb . . .', 'Y G Y .'] },
              caption: 'Duas linhas de vermelho que se cruzam criam uma bomba, bem onde se encontram.',
              alt: 'Um tabuleiro em que nada cai, com quatro linhas de quatro. Linha 1: vermelho, verde, azul, vazio. Linha 2: vermelho, azul, verde, vazio. Linha 3: amarelo, vermelho, vermelho, vazio. Linha 4: vermelho, verde, amarelo, vazio. Uma seta troca o tijolo vermelho do canto de baixo à esquerda, para cima, com o tijolo amarelo acima dele. Resultado: o vermelho que agora está na linha 3, coluna 1, completa duas linhas de uma vez, três vermelhos na coluna da esquerda e três vermelhos na linha 3, em forma de L. Os outros quatro vermelhos somem e uma bomba vermelha aparece na linha 3, coluna 1. O tijolo amarelo agora está no canto de baixo à esquerda; os tijolos verde, azul, verde e azul continuam nas linhas 1 e 2, e o verde e o amarelo continuam na linha 4.',
            },
            what: 'Um especial redondo e borbulhante. Quando dispara, limpa o quadrado 3×3 em volta dela; depois, quando o tabuleiro se acomoda (nos tabuleiros em que os tijolos caem, depois que o buraco é preenchido), ela dispara **uma segunda vez** no mesmo lugar.',
            how: 'Faça duas linhas de uma cor que compartilhem um tijolo: uma forma de L, T ou +. Dispare-a tocando nela, trocando-a ou pegando-a numa linha ou explosão.',
            facts: [
              { label: 'Como criar', text: 'Linhas na horizontal e na vertical que se cruzam ou se tocam num tijolo em comum (L, T ou +), a menos que o grupo também tenha cinco em linha reta.' },
              { label: 'Limpa', text: 'O quadrado 3×3 em volta dela, duas vezes. A segunda explosão pega o que caiu no buraco e tira uma segunda camada de caixotes e de gelo.' },
              { label: 'Combina com', text: 'Todos os outros especiais. Veja [a tabela de combos](#combos).' },
              { label: 'O VoiceOver diz', text: '“Bomba, vermelho”.' },
            ],
            tip: 'Dispare uma bomba ao lado de um caixote de duas camadas ou de um tijolo em gelo grosso: as duas explosões podem tirar as duas camadas numa jogada só.',
          },
          {
            t: 'entry',
            id: 'colour-bomb',
            title: 'Bomba de cor',
            board: {
              rows: ['G Y B Y G', 'B B R B B', 'Y G Y G Y'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G Y R Y G', '. . * . .', 'Y G Y G Y'] },
              caption: 'Cinco em linha criam uma bomba de cor. Ela não tem cor própria.',
              alt: 'Um tabuleiro em que nada cai, com três linhas de cinco. Linha de cima: verde, amarelo, azul, amarelo, verde. Linha do meio: azul, azul, vermelho, azul, azul. Linha de baixo: amarelo, verde, amarelo, verde, amarelo. Uma seta troca o tijolo azul do alto da coluna do meio, para baixo, com o tijolo vermelho embaixo dele. Resultado: cinco azuis da linha do meio somem e uma bomba de cor, sem cor, aparece na casa do meio. O tijolo vermelho agora está no alto da coluna do meio e o resto do tabuleiro não muda.',
            },
            what: 'Um especial de muitas cores, sem cor própria. Trocada com um tijolo, ela leva **todas as peças da cor desse tijolo** no tabuleiro: tijolos comuns e chaves somem, especiais dessa cor disparam e os que estão com cadeado são soltos.',
            how: 'Faça cinco ou mais em linha reta. Troque-a com qualquer tijolo vizinho: essa troca sempre vale, mesmo sem formar linha. Tocada sozinha, ou pega pela explosão de outro especial, ela leva todos os tijolos comuns da **cor mais comum** do tabuleiro.',
            facts: [
              { label: 'Como criar', text: 'Cinco ou mais em linha reta.' },
              { label: 'Limpa', text: 'Todas as peças de uma cor, uma a uma, das mais próximas para as mais distantes.' },
              { label: 'Combina com', text: 'Todos os outros especiais, e com outra bomba de cor. Veja [a tabela de combos](#combos).' },
              { label: 'Bom saber', text: 'Ela nunca conta numa linha e não pode sair por um portão: deslizada até um, ela para como numa parede.' },
              { label: 'O VoiceOver diz', text: '“Bomba de cor, leva todas as peças da cor com que é trocada”.' },
            ],
            tip: 'Troque-a com uma cor de objetivo. Cada tijolo que ela leva conta para um objetivo “Colete” ou “Envie ou combine” dessa cor.',
          },
          {
            t: 'entry',
            id: 'homing-dart',
            title: 'Dardo teleguiado',
            board: {
              rows: ['Y G B', 'R R G', 'R B Y', 'G R Y'],
              moves: [{ row: 3, col: 1, dir: 'up', kind: 'swap' }],
              after: { rows: ['Y G B', '. . G', '. Rd Y', 'G B Y'] },
              caption: 'Um quadrado 2×2 de uma cor cria um dardo teleguiado.',
              alt: 'Um tabuleiro em que nada cai, com quatro linhas de três. Linha 1: amarelo, verde, azul. Linha 2: vermelho, vermelho, verde. Linha 3: vermelho, azul, amarelo. Linha 4: verde, vermelho, amarelo. Uma seta troca o tijolo vermelho de baixo da coluna do meio, para cima, com o tijolo azul acima dele. Resultado: quatro vermelhos agora formam um quadrado 2×2 nas linhas 2 e 3; três deles somem e um dardo teleguiado vermelho aparece na linha 3, coluna 2, onde o vermelho movido parou. O tijolo azul agora está embaixo na coluna do meio; os outros tijolos não mudam.',
            },
            what: 'Um especial pequeno que voa pelo tabuleiro até uma peça e acerta um golpe nela.',
            how: 'Faça um quadrado 2×2 de uma cor. Dispare-o tocando nele, trocando-o ou pegando-o numa linha ou explosão. Ele escolhe o próprio alvo: musgo quando um objetivo pede musgo, caixotes ou cadeados quando um objetivo pede isso, depois um tijolo de uma cor que um objetivo “Colete” ainda quer, depois qualquer outro bloqueio, começando pelo alto do tabuleiro.',
            facts: [
              { label: 'Como criar', text: 'Um quadrado 2×2, quando o grupo não tem linha de quatro ou mais nem linhas que se cruzam.' },
              { label: 'Limpa', text: 'Um golpe numa peça: um tijolo some, um bloqueio perde uma camada, um cadeado abre.' },
              { label: 'Combina com', text: 'Todos os outros especiais: ele leva o outro até o alvo. Veja [a tabela de combos](#combos).' },
              { label: 'O VoiceOver diz', text: '“Dardo teleguiado, vermelho, voa até uma peça do objetivo”.' },
            ],
            tip: 'Sozinho, o dardo é fraco, mas num combo é excelente: troque-o com uma bomba ou um raio de linha e ele entrega esse especial na peça que você mais precisa tirar.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Com o **Daltonismo** ativado (ele já vem ativado), raios de linha, bombas, dardos teleguiados e chaves levam um pequeno selo num canto com o símbolo da cor deles, para você saber a cor sem depender só da cor.',
          },
        ],
      },
      {
        id: 'setting-off',
        title: 'Três formas de disparar um especial',
        blocks: [
          {
            t: 'table',
            head: ['Como', 'O que acontece', 'Custo'],
            rows: [
              ['**Tocar nele**', 'Ele dispara onde está. Uma bomba de cor tocada sozinha leva a cor mais comum.', 'Uma jogada.'],
              ['**Trocá-lo**', 'Trocado para dentro de uma combinação, ele dispara como parte da linha. Trocado com outro especial, os dois fazem um [combo](#combos). Uma bomba de cor trocada com um tijolo leva a cor desse tijolo.', 'Uma jogada.'],
              ['**Pegá-lo**', 'Um especial pego numa linha, ou alcançado pela explosão de outro especial, dispara também. Uma explosão pode disparar uma corrente inteira.', 'Grátis: faz parte da jogada que o causou.'],
            ],
          },
          {
            t: 'list',
            items: [
              '**Deslizar um especial nunca o dispara.** Você pode deslizar um especial pelo caminho dele como qualquer tijolo, para posicioná-lo para uma troca melhor.',
              '**O que uma explosão faz com cada peça:** um tijolo comum some; um caixote ou um tijolo em gelo perde uma camada; um cadeado abre e o tijolo dele fica; o musgo some; outro especial dispara.',
              '**O que uma explosão nunca toca:** tijolos longos, grandes, em L e em T (eles só saem pelo portão deles), nada que esteja embaixo de uma tampa fechada, e estátuas.',
              'Um tijolo da cor de um portão que uma explosão limpa na casa da borda **bem na frente do portão aberto dele** sai voando pelo portão e conta como enviado.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Tocar é o último recurso. Se uma troca puder disparar o mesmo especial e formar uma combinação ao mesmo tempo, ela faz mais pela mesma jogada.',
          },
        ],
      },
      {
        id: 'combos',
        title: 'Todos os combos',
        blocks: [
          {
            t: 'p',
            text: 'Quaisquer dois especiais lado a lado podem ser trocados, mesmo quando a troca não forma linha. Eles disparam juntos, centrados na casa onde para o tijolo que você moveu. Estas são todas as combinações que o jogo tem:',
          },
          {
            t: 'table',
            head: ['Troque juntos', 'O que acontece'],
            rows: [
              ['Raio de linha + raio de linha', 'Uma cruz: uma linha inteira e uma coluna inteira.'],
              ['Raio de linha + bomba', 'Uma cruz grande: três linhas inteiras e três colunas inteiras.'],
              ['Raio de linha + dardo teleguiado', 'O dardo voa até o alvo, acerta e o raio de linha dispara dali.'],
              ['Raio de linha + bomba de cor', 'Todos os tijolos comuns livres da cor do raio viram raios de linha (alternando entre vertical e horizontal), e todos disparam.'],
              ['Bomba + bomba', 'Uma explosão 5×5, e uma segunda explosão 5×5 no mesmo lugar quando o tabuleiro se acomoda.'],
              ['Bomba + dardo teleguiado', 'O dardo leva a bomba até o alvo, onde ela dispara uma vez como uma explosão 5×5.'],
              ['Bomba + bomba de cor', 'Todos os tijolos comuns livres da cor da bomba viram bombas, e cada uma dispara (duas vezes, como as bombas fazem).'],
              ['Dardo teleguiado + dardo teleguiado', 'Três alvos ao todo: o primeiro dardo acerta, e mais dois voam a partir dali.'],
              ['Dardo teleguiado + bomba de cor', 'Todos os tijolos comuns livres da cor do dardo viram dardos teleguiados, e todos voam.'],
              ['Bomba de cor + bomba de cor', 'Todas as peças do tabuleiro levam um golpe: tijolos somem, todo bloqueio perde uma camada, todo cadeado abre e todo especial dispara. Tijolos longos e com formato, e tudo o que está embaixo de uma tampa, ficam intactos.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['G Y B Y', 'Y R- B| G', 'B G Y B'],
              moves: [{ row: 1, col: 1, dir: 'right', kind: 'swap' }],
              after: { rows: ['G Y . Y', '. . . .', 'B G . B'] },
              caption: 'Dois raios de linha trocados juntos limpam uma cruz: a linha e a coluna onde o tijolo movido para.',
              alt: 'Um tabuleiro em que nada cai, com três linhas de quatro. Linha de cima: verde, amarelo, azul, amarelo. Linha do meio: amarelo, um raio de linha vermelho com listras na horizontal, um raio de linha azul com listras na vertical, verde. Linha de baixo: azul, verde, amarelo, azul. Uma seta troca o raio de linha vermelho para a direita, com o azul. Resultado: a linha do meio inteira e a terceira coluna inteira somem. Sobram verde, amarelo e amarelo em cima, com um vão na terceira coluna, a linha do meio vazia, e azul, verde e azul embaixo, com um vão na terceira coluna.',
            },
          },
          {
            t: 'list',
            items: [
              '“Tijolo comum livre” quer dizer um tijolo simples daquela cor que não está em gelo nem com cadeado. Se não sobrar nenhum tijolo da cor do especial, a bomba de cor usa a cor mais comum do tabuleiro.',
              'O VoiceOver menciona “um combo” no resumo da jogada.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Os pares mais fortes',
            text: 'Bomba de cor + bomba de cor limpa mais, mas bomba de cor + raio de linha numa cor comum muitas vezes faz mais pelos seus objetivos. Num tabuleiro em que nada cai, é melhor guardar um par de bombas de cor até a cor de que você precisa estar bem espalhada.',
          },
        ],
      },
      {
        id: 'gates',
        title: 'Especiais e portões',
        blocks: [
          {
            t: 'list',
            items: [
              '**Raios de linha podem voltar para casa.** Deslize um até um portão aberto da cor dele e ele sai sem disparar, contando como um tijolo da cor dele.',
              '**Bombas, dardos teleguiados e bombas de cor não podem.** Deslizados na direção de um portão, eles param nele como numa parede.',
              '**Tijolos explodidos podem voltar para casa.** Um tijolo da cor de um portão que um especial limpa na casa da borda em frente ao portão aberto dele sai voando pelo portão.',
              '**Os objetivos de portão dizem “Envie ou combine”.** Tijolos dessa cor limpos por uma linha ou explosão em qualquer lugar do tabuleiro também contam, então um raio de linha passando por uma linha de tijolos de objetivo é progresso de verdade.',
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['G B R G', 'R R B Y', 'Y G Y B'],
              gates: [{ side: 'left', at: 1, colour: 'R' }],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G B B G', '. . . Y', 'Y G Y B'] },
              caption: 'Uma linha combinada em frente a um portão da cor dela: o tijolo da ponta sai voando pelo portão.',
              alt: 'Um tabuleiro em que nada cai, com três linhas de quatro e um portão vermelho na borda esquerda da linha do meio. Linha de cima: verde, azul, vermelho, verde. Linha do meio: vermelho, vermelho, azul, amarelo. Linha de baixo: amarelo, verde, amarelo, azul. Uma seta troca o tijolo vermelho do alto da terceira coluna, para baixo, com o azul embaixo dele. Resultado: três vermelhos se alinham na linha do meio. O vermelho da ponta esquerda está em frente ao portão vermelho, então sai voando por ele; os outros dois estouram. Os três contam para um objetivo vermelho “Envie ou combine”. O azul agora está no alto da terceira coluna; o resto do tabuleiro não muda.',
            },
          },
          {
            t: 'p',
            text: 'Cada portão, tampa e bloqueio é explicado em [Todos os bloqueios, tampas e portões](help:blockers-encyclopedia#gates).',
          },
        ],
      },
      {
        id: 'score',
        title: 'Cascatas, pontuação e estrelas',
        blocks: [
          {
            t: 'p',
            text: 'Nos tabuleiros em que os tijolos caem, uma combinação deixa um vão, os tijolos de cima caem nele e tijolos novos chegam pelo alto. Se isso formar outra linha, ela estoura também: uma **cascata**. Cada nova onda vale mais que a anterior. Nos tabuleiros em que nada cai, uma combinação simplesmente deixa casas vazias, então cascatas são raras, mas a segunda explosão de uma bomba acontece do mesmo jeito.',
          },
          {
            t: 'table',
            caption: 'Pontos pelo que uma jogada faz (5.1.1)',
            head: ['O que acontece', 'Pontos'],
            rows: [
              ['Cada tijolo numa linha', '20, vezes a onda: um tijolo na segunda onda da cascata vale 40, na terceira 60'],
              ['Cada especial criado', '120'],
              ['Um tijolo que sai por um portão', '60'],
              ['Um especial que dispara', '100, mais 30 por peça que ele limpa, 40 por camada de gelo que ele quebra e 60 por tijolo que ele manda por um portão'],
              ['Um bloqueio atingido por uma linha ao lado', '20'],
              ['Cada jogada que sobra quando os objetivos são cumpridos', '150, mais o que o raio de linha dela limpar'],
            ],
          },
          {
            t: 'list',
            items: [
              'A **trilha de estrelas** no cabeçalho enche conforme sua pontuação sobe. Toda conclusão vale pelo menos **uma estrela**.',
              'As marcas de duas e três estrelas são definidas a partir da solução de referência de cada tabuleiro, contando os 150 pontos das jogadas que sobram nela. Vença com folga, com jogadas de sobra, e as estrelas vêm mais fácil; gaste todas as jogadas e você vai precisar de mais pontos no jogo para empatar.',
              'Jogue de novo pela Jornada um tabuleiro concluído para tentar mais estrelas. Veja [Como jogar um tabuleiro](help:playing-a-board#stars).',
            ],
          },
        ],
      },
      {
        id: 'finish',
        title: 'O final com as jogadas que sobram',
        blocks: [
          {
            t: 'steps',
            items: [
              'No momento em que o último objetivo é cumprido, o tabuleiro para de aceitar jogadas e mostra **Objetivo concluído!**, com “N jogadas restantes viram raios de linha!” embaixo. Agora nada pode fazer você perder o tabuleiro: nenhuma vida está em risco e nenhuma jogada é necessária.',
              'Uma faísca por jogada sai do contador de jogadas e cai num tijolo comum, que vira um raio de linha. Cada uma soma **150 pontos**. Até 30 jogadas viram raios no tabuleiro; as que passarem disso são pagas mesmo assim.',
              'Depois, todos os especiais do tabuleiro disparam, os raios novos e os que você deixou sem usar, até não sobrar nada para disparar.',
              'Seus amigos dão uma volta de comemoração e o cartão de vitória mostra sua pontuação, estrelas e moedas.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: '**Toque em qualquer lugar** para pular o show. O resultado é calculado antes, então pular dá exatamente a mesma pontuação e as mesmas estrelas.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'As jogadas que sobram rendem pontos, e portanto estrelas, mas nenhuma moeda extra. Os especiais que você deixa no tabuleiro não são desperdiçados: eles disparam no final e somam à sua pontuação.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'O VoiceOver diz “Objetivo concluído! 4 jogadas restantes viram raios de linha!” na hora, e depois “Pontuação final” com o número e as estrelas quando o cartão de vitória aparece. Com **Reduzir Movimento** ativado, a faixa aparece e some com um esmaecimento e o tabuleiro já acomodado aparece sem o show.',
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'Especiais com o VoiceOver',
        blocks: [
          {
            t: 'table',
            head: ['Quando', 'O que você ouve'],
            rows: [
              ['Você chega a um especial', 'O tipo, a cor e o que ele faz, por exemplo “Raio de linha, vermelho, horizontal, limpa a linha”.'],
              ['As ações dele', '**Ativar especial** vem primeiro, depois os deslizes, depois as trocas. Trocas que disparam alguma coisa vêm antes das trocas que não criam nada.'],
              ['Você toca em um', '“Ativado: Bomba, vermelho”.'],
              ['Uma dica sugere um', 'Por exemplo “Dica: ative Bomba, vermelho”, com a linha e a coluna dela.'],
              ['Depois de uma jogada', 'Os especiais que a jogada criou, qualquer combo e as cascatas, como parte do resumo da jogada.'],
            ],
          },
          {
            t: 'p',
            text: 'Gire dois dedos até o rotor **Especiais** e passe o dedo para cima ou para baixo para pular de um especial para o próximo. Mais em [Como jogar com o VoiceOver](help:voiceover#rotors).',
          },
        ],
      },
      {
        id: 'faq',
        title: 'Perguntas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Por que minha troca de dois especiais funcionou sem formar linha?',
                a: 'Quaisquer dois especiais vizinhos sempre podem ser trocados: a troca dispara os dois juntos, como um combo. O mesmo vale para uma bomba de cor trocada com qualquer tijolo.',
              },
              {
                q: 'Deslizei meu raio de linha até o portão dele e ele não disparou. Desperdicei?',
                a: 'Não. Um raio de linha que sai deslizando por um portão da cor dele sai sem disparar e conta como um tijolo dessa cor para os seus objetivos. Se você queria a explosão, toque nele ou troque-o.',
              },
              {
                q: 'Por que uma bomba deixou um tijolo longo de pé?',
                a: 'Explosões nunca levam tijolos longos, grandes, em L ou em T. Eles são carga para o portão deles e só saem deslizando por um portão tão largo quanto eles. Explosões também não alcançam nada que esteja embaixo de uma tampa fechada.',
              },
              {
                q: 'Os tijolos que um especial limpa contam para os meus objetivos?',
                a: 'Sim. Tijolos de uma cor de objetivo limpos por uma explosão contam para objetivos “Colete” e “Envie ou combine”, e um tijolo explodido em frente ao próprio portão sai voando por ele. As camadas de bloqueio que uma explosão quebra contam para objetivos de caixotes, musgo e cadeados.',
              },
              {
                q: 'Devo guardar os especiais para o final?',
                a: 'Só se os objetivos já estiverem garantidos. Qualquer especial que ainda estiver no tabuleiro quando o último objetivo for cumprido dispara no final e soma pontos, mas um especial usado cedo pode poupar as jogadas que viram ainda mais pontos.',
              },
              {
                q: 'O reforço Foguete é o mesmo que um raio de linha?',
                a: 'O reforço **Foguete** transforma um tijolo comum que você escolhe num raio de linha que dispara ao longo da linha dele na hora. Veja [Reforços, dicas e Pausa](help:boosters-and-pause).',
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
    title: 'Todos os bloqueios, tampas e portões, explicados',
    summary:
      'Como é cada obstáculo de um tabuleiro, o que ele faz e exatamente como tirá-lo ou abri-lo: caixotes, gelo, cadeados, musgo, estátuas, tijolos virados, chaves, tijolos longos e com formato, as cinco tampas, cada tipo de portão e os portais.',
    keywords:
      'bloqueio bloqueios obstáculo obstáculos caixote caixa vaso fardo de feno camadas gelo geleia gelatina congelado cadeado corrente travado trancado musgo se espalha estátua pedra enfeite virado ponto de interrogação tijolo escondido oculto chave fechadura sala selada área lacrada tampa canteiro selado contador contador de cor vitral chave de vitral relógio tampa relógio portão portão congelado portão contado portão de etapa portão selado portal tijolo longo tijolo grande tijolo em L tijolo em T',
    host: 'peach',
    hostPose: 'think',
    sections: [
      {
        id: 'overview',
        title: 'Resumo rápido',
        blocks: [
          {
            t: 'p',
            text: 'Tudo o que não é um tijolo comum está listado aqui. A aparência muda conforme a vila (vasos de flores na Cidade Jardim, fardos de feno na fazenda, castelos de areia na praia), mas as regras nunca mudam. **Toque em qualquer bloqueio, tampa ou portão** no tabuleiro e ele balança e diz em uma linha o que é e o que o tira.',
          },
          {
            t: 'table',
            head: ['Obstáculo', 'Para um deslize?', 'Como tirar ou abrir'],
            rows: [
              ['[Caixote](#crate)', 'Sim', 'Uma linha ao lado dele, ou uma explosão. Uma camada por vez.'],
              ['[Tijolo em gelo](#ice)', 'Sim, e ele não se move', 'Uma linha ao lado dele, ou uma explosão. Uma camada por vez.'],
              ['[Tijolo com cadeado](#lock)', 'Sim, e ele não se move', 'Uma linha **que passe por** ele, ou uma explosão.'],
              ['[Musgo](#moss)', 'Sim', 'Uma linha ao lado dele, ou uma explosão.'],
              ['[Estátua](#statue)', 'Sim', 'Ela fica. Procure outro caminho.'],
              ['[Tijolo virado](#face-down)', 'É um tijolo: ele se move', 'Desvira quando um tijolo ao lado sai do tabuleiro.'],
              ['[Tampas](#lids)', 'Sim', 'Cada uma das cinco abre pela própria regra.'],
              ['[Portões](#gates)', 'Cor errada ou fechado: sim', 'Portões abertos recebem tijolos da cor deles.'],
              ['[Portal](#portal)', 'Não: o tijolo passa por ele', 'Deslize um tijolo simples para dentro dele.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Conferido com a versão 5.1.1',
            text: 'Caixotes, gelo, cadeados, musgo, estátuas, portões e a tampa relógio aparecem ao longo de toda a Jornada. Nesta versão, as outras quatro tampas, os tijolos virados, os portões de etapa e os portais aparecem em alguns tabuleiros até o nível 408; atualizações futuras podem levá-los mais adiante.',
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
            title: 'Caixote',
            board: {
              rows: ['G B R Y', 'R R B x2', 'Y G Y B'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G B B Y', '. . . x', 'Y G Y B'] },
              caption: 'Uma linha bem ao lado de um caixote tira uma camada dele.',
              alt: 'Um tabuleiro em que nada cai, com três linhas de quatro. Linha de cima: verde, azul, vermelho, amarelo. Linha do meio: vermelho, vermelho, azul e, à direita, um caixote de 2 camadas. Linha de baixo: amarelo, verde, amarelo, azul. Uma seta troca o vermelho do alto da terceira coluna, para baixo, com o azul embaixo dele. Resultado: três vermelhos somem na linha do meio, e o caixote ao lado da ponta da linha perde uma camada: agora tem 1 camada. O azul está no alto da terceira coluna; o resto não muda.',
            },
            what: 'Uma caixa que ocupa uma casa. Um tijolo que desliza para nele, nada pode ser trocado com ele e, nos tabuleiros em que os tijolos caem, ele fica parado enquanto os tijolos de cima se apoiam nele. Tem uma ou duas camadas: um caixote de duas camadas parece mais reforçado, e um toque ou o VoiceOver sempre dizem quantas faltam.',
            how: 'Faça uma linha bem ao lado dele (na casa acima, abaixo, à esquerda ou à direita de qualquer tijolo da linha): cada linha tira uma camada, não importa quantos tijolos dela encostem no caixote. Uma explosão que o alcança também tira uma camada, e a explosão dupla de uma bomba pode tirar duas. A última camada o quebra e libera a casa.',
            facts: [
              { label: 'Aparece pela primeira vez', text: 'Nível 5, Vasos e gelo. Caixotes de duas camadas a partir do nível 20.' },
              { label: 'Objetivo', text: '“Quebre” caixotes: cada camada que você derruba conta uma vez.' },
              { label: 'Parece, mas não é', text: 'Uma estátua, que nunca quebra, e uma tampa, que cobre tijolos e mostra um sinal.' },
              { label: 'O VoiceOver diz', text: '“Caixa, 2 camadas”. Ao tocar: “Caixa, 2 camadas. Uma linha ao lado quebra uma camada”.' },
            ],
            tip: 'O reforço **OVNI** tira uma camada de um caixote, esteja onde estiver.',
          },
          {
            t: 'entry',
            id: 'ice',
            title: 'Tijolo em gelo',
            board: {
              rows: ['B G~ Y', 'R R B', 'G Y R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['B G Y', '. . .', 'G Y B'] },
              caption: 'Uma linha ao lado do tijolo congelado quebra o gelo; o tijolo de dentro fica livre de novo.',
              alt: 'Um tabuleiro em que nada cai, com três linhas de três. Linha de cima: azul, um tijolo verde preso no gelo, amarelo. Linha do meio: vermelho, vermelho, azul. Linha de baixo: verde, amarelo, vermelho. Uma seta troca o vermelho do canto de baixo à direita, para cima, com o azul acima dele. Resultado: três vermelhos somem na linha do meio, e o gelo do tijolo verde acima da linha quebra, deixando um tijolo verde comum que pode se mover de novo. O azul agora está no canto de baixo à direita.',
            },
            what: 'Um tijolo colorido preso num bloco de gelo, com uma ou duas camadas de espessura. Enquanto está congelado, ele não pode deslizar, trocar, cair nem contar numa linha, e um tijolo que desliza para nele.',
            how: 'Faça uma linha bem ao lado dele, ou alcance-o com uma explosão: cada uma tira uma camada. Quando a última camada quebra, o tijolo volta a ser um tijolo comum e pode ser movido e combinado.',
            facts: [
              { label: 'Aparece pela primeira vez', text: 'Nível 5, Vasos e gelo.' },
              { label: 'Parece, mas não é', text: 'Um **portão** congelado, que fica na borda do tabuleiro e derrete de outro jeito. Veja [Portão congelado](#iced-gate).' },
              { label: 'O VoiceOver diz', text: 'O tijolo e depois o gelo, por exemplo “Tijolo, vermelho, na geleia, 1 camada”. Ao tocar: “… Uma linha ao lado quebra a gelatina”.' },
            ],
            tip: 'Vale a pena soltar cedo um tijolo congelado de uma cor de objetivo: enquanto não estiver livre, ele não chega ao portão dele.',
          },
          {
            t: 'entry',
            id: 'lock',
            title: 'Tijolo com cadeado',
            board: {
              rows: ['G Y R', 'R R! B', 'Y G Y'],
              moves: [{ row: 0, col: 2, dir: 'down', kind: 'swap' }],
              after: { rows: ['G Y B', '. R .', 'Y G Y'] },
              caption: 'Uma linha que passa pelo tijolo com cadeado o solta. O tijolo solto fica.',
              alt: 'Um tabuleiro em que nada cai, com três linhas de três. Linha de cima: verde, amarelo, vermelho. Linha do meio: vermelho, um tijolo vermelho com cadeado, azul. Linha de baixo: amarelo, verde, amarelo. Uma seta troca o vermelho do canto de cima à direita, para baixo, com o azul embaixo dele. Resultado: três vermelhos se alinham na linha do meio, passando pelo tijolo com cadeado. Os dois vermelhos das pontas somem; o cadeado abre e o vermelho do meio fica, agora como um tijolo comum. O azul está no canto de cima à direita.',
            },
            what: 'Um tijolo preso por um cadeado. Ele não pode deslizar, trocar nem cair, e um tijolo que desliza para nele. Mesmo assim, ele conta numa linha da cor dele.',
            how: 'Faça uma linha **que passe por** ele: a linha limpa os tijolos em volta, abre o cadeado e deixa o tijolo solto onde está. Uma linha só ao lado não faz nada. Uma explosão que o alcança também abre o cadeado.',
            facts: [
              { label: 'Aparece pela primeira vez', text: 'Nível 9, Cadeados e musgo.' },
              { label: 'Objetivo', text: '“Solte” cadeados: cada cadeado aberto conta uma vez.' },
              { label: 'O VoiceOver diz', text: '“Tijolo amarelo, travado, uma linha que passe por ele o solta”.' },
            ],
            tip: 'Procure a própria cor do tijolo com cadeado dos dois lados dele, ou acima e abaixo: um deslize ou uma troca que complete a linha o solta.',
          },
          {
            t: 'entry',
            id: 'moss',
            title: 'Musgo',
            board: {
              rows: ['Y m B', 'R R G', 'B Y R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['Y . B', '. . .', 'B Y G'] },
              caption: 'Uma linha bem ao lado do musgo o tira.',
              alt: 'Um tabuleiro em que nada cai, com três linhas de três. Linha de cima: amarelo, um tufo de musgo, azul. Linha do meio: vermelho, vermelho, verde. Linha de baixo: azul, amarelo, vermelho. Uma seta troca o vermelho do canto de baixo à direita, para cima, com o verde acima dele. Resultado: três vermelhos somem na linha do meio e o musgo acima da linha some também, deixando uma casa vazia. O verde agora está no canto de baixo à direita.',
            },
            what: 'Um tufo de musgo que ocupa uma casa. Um tijolo que desliza para nele. Nos tabuleiros **Cadeados e musgo** ele se espalha: nas palavras do jogo, ele avança sobre um tijolo depois de qualquer jogada que não tira nenhum musgo, tomando um tijolo simples comum vizinho.',
            how: 'Faça uma linha bem ao lado dele, ou alcance-o com uma explosão: um golpe o tira. O musgo que cresceu sobre um tijolo sai do mesmo jeito.',
            facts: [
              { label: 'Aparece pela primeira vez', text: 'Nível 9, Cadeados e musgo.' },
              { label: 'Objetivo', text: '“Limpe” o musgo: cada tufo tirado conta, inclusive os que cresceram durante o jogo.' },
              { label: 'O VoiceOver diz', text: '“Musgo, cresce após uma jogada que não limpa nada”. Ao tocar: “… Uma linha ao lado o remove”.' },
            ],
            tip: 'Tire um pouco de musgo sempre que puder: uma jogada que tira algum musgo nunca deixa ele crescer. Reforços nunca contam como jogada, então usar um não faz o musgo se espalhar.',
          },
          {
            t: 'entry',
            id: 'statue',
            title: 'Estátua',
            board: {
              rows: ['. . . . .', 'R+ . s . .', 'B . . . G'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 0, dir: 'right' }],
              after: { rows: ['. . . . .', '. R s . .', 'B . . . G'] },
              caption: 'Uma estátua para um deslize. O portão vermelho fica fora de alcance por esta linha.',
              alt: 'Um tabuleiro em que nada cai, com três linhas de cinco e um portão vermelho na borda direita da linha do meio. Linha de cima: vazia. Linha do meio: um tijolo vermelho à esquerda, uma casa vazia, uma estátua no meio e mais duas casas vazias. Linha de baixo: azul à esquerda, três casas vazias, verde à direita. Uma seta desliza o tijolo vermelho para a direita. Resultado: ele para na segunda casa, contra a estátua, e não consegue chegar ao portão vermelho por esta linha.',
            },
            what: 'Uma estátua de jardim, ou outro enfeite da vila, num vão dentro do tabuleiro. É cenário, não uma peça: nada desliza através dela, nada pode parar em cima dela e ela nunca quebra. Nos tabuleiros em que os tijolos caem, os tijolos de cima se apoiam nela, e tijolos simples escorregam em volta dela na diagonal para preencher as casas de baixo.',
            how: 'Ela não pode ser tirada. Planeje em volta dela: use os caminhos livres ou traga o tijolo por outra linha. A explosão de um raio de linha passa direto por cima dela.',
            facts: [
              { label: 'Aparece pela primeira vez', text: 'Nível 10, Corredores de pedra.' },
              { label: 'Parece, mas não é', text: 'Um caixote, que quebra; uma estátua nunca quebra.' },
              { label: 'O VoiceOver diz', text: 'O nome dela, por exemplo “Estátua: parte do cenário. As peças caem ao redor”.' },
            ],
          },
        ],
      },
      {
        id: 'special-bricks',
        title: 'Tijolos com regras próprias',
        blocks: [
          {
            t: 'entry',
            id: 'face-down',
            title: 'Tijolo virado “?”',
            board: {
              rows: ['? R+ . .', 'G B Y .'],
              gates: [{ side: 'top', at: 1, colour: 'R' }],
              moves: [{ row: 0, col: 1, dir: 'up' }],
              after: { rows: ['Y . . .', 'G B Y .'] },
              caption: 'O vermelho ao lado sai do tabuleiro, então o tijolo virado desvira.',
              alt: 'Um tabuleiro de duas linhas de quatro, com um portão vermelho na borda de cima, acima da segunda coluna. Linha de cima: um tijolo virado mostrando um ponto de interrogação, um tijolo vermelho e duas casas vazias. Linha de baixo: verde, azul, amarelo, vazio. Uma seta desliza o tijolo vermelho para cima, para fora pelo portão vermelho. Resultado: o vermelho saiu do tabuleiro, e o tijolo virado ao lado dele desvira: era amarelo. A linha de baixo não muda.',
            },
            what: 'Um tijolo cinza-ardósia com um “?” branco e sem símbolo de cor. Ele esconde a cor, mas é um tijolo de verdade de uma cor de verdade e joga com ela: desliza, troca, combina e volta para casa pelo portão da própria cor exatamente como essa cor faria.',
            how: 'Ele desvira quando um tijolo **ao lado dele** (acima, abaixo, à esquerda ou à direita) **sai do tabuleiro**: por um portão, numa linha ou por uma explosão. Ele nunca desvira por ter sido movido, nem porque um vizinho deslizou ou caiu para longe.',
            facts: [
              { label: 'Aparece pela primeira vez', text: 'Nível 49.' },
              { label: 'Jogo limpo', text: 'Nenhuma dica, mão de ensino, rotor, som de linha ou palavra do VoiceOver jamais revela a cor dele. A dica não sugere uma jogada que mova, troque ou limpe um tijolo virado, então, num tabuleiro cheio deles, pode não aparecer dica nenhuma.' },
              { label: 'O VoiceOver diz', text: '“Tijolo virado, desvira quando um tijolo ao lado sai do tabuleiro”. As trocas dele nunca dizem “sem combinação”, e um caminho que termina num portão é oferecido como “Deslizar para a esquerda, para dentro do portão”. O Controle por Voz o chama de “Virado”, como em “Deslizar Virado 14 para a esquerda”.' },
            ],
            tip: 'Limpe primeiro os tijolos em volta de um grupo de tijolos “?”: cada tijolo que sai pode desvirar até quatro deles, e aí dá para planejar.',
          },
          {
            t: 'entry',
            id: 'key',
            title: 'Tijolo-chave',
            what: 'Um tijolo da cor dele com uma chave desenhada. Só aparece em tabuleiros com uma [tampa com fechadura](#lid-keyhole), fora da tampa e geralmente no alto do tabuleiro.',
            how: 'Ele joga exatamente como um tijolo da cor dele: deslize, troque, combine. No momento em que ele **sai do tabuleiro**, combinado numa linha, limpo por uma explosão ou deslizando para fora por um portão da cor dele, a tampa com fechadura abre.',
            facts: [
              { label: 'O VoiceOver diz', text: '“Chave, vermelho”.' },
              { label: 'Daltonismo', text: 'Ele leva um selo no canto com o símbolo da cor dele.' },
            ],
            tip: 'Se o portão dele estiver longe, uma linha de três é mais rápida: uma chave combinada em qualquer lugar abre a fechadura do mesmo jeito.',
          },
          {
            t: 'entry',
            id: 'long-bricks',
            title: 'Tijolos longos e grandes',
            what: 'Uma peça moldada que cobre duas ou três casas em fila (1×2, 2×1, 1×3, 3×1) ou um quadrado 2×2. Ela desliza como uma peça só e para assim que qualquer uma das casas dela encontra algo.',
            how: 'Deslize-a até um portão da cor dela que seja **tão largo quanto o tijolo, na direção atravessada ao caminho dele**: um tijolo com duas casas de altura deslizando para o lado precisa de um portão lateral de duas casas, e um 2×2 precisa de um portão de duas casas. As casas atrás dele precisam estar livres para ele sair. Ele nunca é trocado, nunca conta numa linha, e nenhuma explosão ou reforço pode levá-lo, então deslizá-lo para casa é o único jeito. Ele conta **cada casa** para os seus objetivos: um 2×2 vermelho vale quatro vermelhos.',
            facts: [
              { label: 'Aparece pela primeira vez', text: 'Nível 6, Tijolos longos.' },
              { label: 'Onde os tijolos caem', text: 'Ele cai como uma unidade, uma linha por vez, e só quando todas as casas embaixo dele estão livres: um caixote embaixo de uma das casas segura a peça inteira.' },
              { label: 'O VoiceOver diz', text: '“Tijolo longo, vermelho, 2 de altura”, “Tijolo quadrado grande, azul”. As ações dizem o nome dele: “Deslizar o tijolo longo vermelho para a esquerda, sai pelo portão vermelho”.' },
            ],
            tip: 'Antes de abrir um caminho, confira a largura do portão. Um portão de uma casa nunca vai receber um tijolo longo, por mais bem alinhado que ele esteja.',
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Fase 31 na praia: 16 jogadas restantes, objetivos de 8 amarelos e 8 azuis. Tijolos grandes e inteiriços estão empilhados no fundo do tabuleiro: uma barra azul comprida, uma coluna azul alta e uma peça amarela em forma de C, com portões azuis e amarelos nas bordas.',
            caption: 'Tijolos grandes deslizam como uma peça só e precisam de um portão tão largo quanto eles.',
          },
          {
            t: 'entry',
            id: 'l-and-t',
            title: 'Tijolos em L e em T',
            what: 'Peças dobradas de quatro casas, em forma de L ou de T. Seguem as mesmas regras dos tijolos longos: uma peça só, nunca trocada, nunca numa linha, nunca explodida.',
            how: 'Alinhe a peça com um portão da cor dela que cubra a peça inteira na direção atravessada ao caminho, e depois deslize-a para casa. A casa dela que encontrar algo primeiro para a peça inteira.',
            facts: [
              { label: 'Aparece pela primeira vez', text: 'Nível 7, Peças de canto.' },
              { label: 'O VoiceOver diz', text: '“Tijolo em L, vermelho”, “Tijolo em T, azul”.' },
            ],
          },
        ],
      },
      {
        id: 'lids',
        title: 'Salas seladas e suas cinco tampas',
        blocks: [
          {
            t: 'p',
            text: 'Uma **sala selada** é um bloco de uma a quatro casas embaixo de uma tampa. Até a tampa abrir, os tijolos de baixo ficam congelados: não podem deslizar, trocar, combinar nem cair, e nenhuma explosão, reforço ou embaralhamento os alcança. Cada tampa mostra um sinal do seu tipo, e a maioria também mostra um número: quantos ainda faltam. Quando ela abre, a tampa sobe e os tijolos dela entram no jogo.',
          },
          {
            t: 'table',
            head: ['Tampa', 'Sinal', 'Abre quando…'],
            rows: [
              ['[Contador](#lid-counter)', 'Uma grade de quadradinhos e um número', 'Mais essa quantidade de tijolos, de qualquer cor, saiu do tabuleiro.'],
              ['[Contador de cor](#lid-colour-counter)', 'Uma pilha de quadradinhos e um número, na cor dela', 'Mais essa quantidade de tijolos da cor dela saiu do tabuleiro.'],
              ['[Chave de vitral](#lid-glass-key)', 'Uma chave, na cor dela; sem número', 'Você faz uma linha da cor dela bem ao lado.'],
              ['[Relógio](#lid-clock)', 'Um relógio e um número', 'Você fez mais essa quantidade de jogadas.'],
              ['[Fechadura](#lid-keyhole)', 'Um cadeado', 'O tijolo-chave sai do tabuleiro.'],
            ],
          },
          {
            t: 'entry',
            id: 'lid-counter',
            title: 'Tampa com contador',
            what: 'Uma tampa com um sinal de grade e um número em contagem regressiva.',
            how: 'Cada tijolo que sai do tabuleiro, de qualquer cor, tira um: combinado numa linha, limpo por uma explosão ou mandado para fora por um portão. Um tijolo longo ou grande conta uma vez. Deslizar tijolos pelo tabuleiro não conta. Nos tabuleiros até agora, ela pede de 5 a 9 tijolos.',
            facts: [
              { label: 'O VoiceOver diz', text: 'Em cada tijolo coberto: “selado sob uma tampa, abre depois de mais 6 tijolos”. Ao abrir: “A tampa com contador abriu. Os tijolos dela já se movem”.' },
            ],
          },
          {
            t: 'entry',
            id: 'lid-colour-counter',
            title: 'Tampa com contador de cor',
            what: 'Uma tampa de uma cor, com um sinal de pilha e um número.',
            how: 'Só contam os tijolos **da cor dela** que saem do tabuleiro: combinados, explodidos ou mandados por um portão. Outras cores não fazem nada por ela. Nos tabuleiros até agora, ela pede 3 ou 4.',
            facts: [
              { label: 'Aparece pela primeira vez', text: 'Nível 65.' },
              { label: 'O VoiceOver diz', text: '“selado sob uma tampa (vermelho), abre depois de mais 3 tijolos: vermelho”. Ao abrir: “A tampa com contador (vermelho) abriu. Os tijolos dela já se movem”.' },
            ],
            tip: 'A cor dela costuma ser uma que seus objetivos também querem, então cada tijolo que você manda para casa trabalha dobrado.',
          },
          {
            t: 'entry',
            id: 'lid-glass-key',
            title: 'Tampa com chave de vitral',
            what: 'Uma tampa de uma cor, com um sinal de chave e sem número.',
            how: 'Faça uma linha (ou um quadrado 2×2) **da cor dela** com pelo menos um tijolo bem ao lado da tampa: acima, abaixo, à esquerda ou à direita de uma das casas dela. Uma linha de outra cor, uma linha mais longe ou uma explosão não a abrem.',
            facts: [
              { label: 'O VoiceOver diz', text: '“selado sob uma tampa com chave (vermelho), abre com uma linha ao lado: vermelho”. Ao abrir: “A tampa de vitral (vermelho) abriu. Os tijolos dela já se movem”.' },
            ],
            tip: 'Procure dois tijolos da cor da tampa que já encostem nela: um deslize ou uma troca de um terceiro tijolo ao lado deles a abre.',
          },
          {
            t: 'entry',
            id: 'lid-clock',
            title: 'Tampa relógio (o canteiro selado)',
            what: 'Uma tampa com um sinal de relógio e um número de jogadas. Em **O grande dia**, ela muitas vezes cobre as duas casas de baixo de um canto; o jogo chama essa de **canteiro selado**.',
            how: 'Ela abre sozinha depois dessa quantidade de jogadas: cada deslize, troca ou toque conta uma. Reforços não contam. Nos tabuleiros até agora, ela pede de 3 a 6 jogadas.',
            facts: [
              { label: 'Aparece pela primeira vez', text: 'Nível 11, O grande dia, como o canteiro selado.' },
              { label: 'O VoiceOver diz', text: '“selado sob uma tampa relógio, abre em 3 jogadas”. Ao abrir: “A tampa do relógio abriu. Os tijolos dela já se movem”.' },
            ],
            tip: 'Nada que você faça a abre mais cedo, então jogue em outro lugar e planeje para os tijolos de baixo.',
          },
          {
            t: 'entry',
            id: 'lid-keyhole',
            title: 'Tampa com fechadura',
            what: 'Uma tampa com um sinal de cadeado. Em algum lugar fora dela há um [tijolo-chave](#key) de uma cor de objetivo.',
            how: 'Tire o tijolo-chave do tabuleiro: combine-o numa linha, limpe-o com uma explosão ou deslize-o para fora por um portão da cor dele. A tampa abre na hora.',
            facts: [
              { label: 'O VoiceOver diz', text: '“selado sob uma tampa com fechadura, abre com um tijolo chave”. Ao abrir: “A tampa da fechadura abriu. Os tijolos dela já se movem”.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Na primeira vez que você encontra cada tampa, um cartão de ensino a explica. Uma tampa que não abre nunca torna um tabuleiro impossível: todos os tabuleiros do jogo foram conferidos para garantir que podem ser vencidos, com tampas e tudo.',
          },
        ],
      },
      {
        id: 'gates',
        title: 'Portões',
        blocks: [
          {
            t: 'p',
            text: 'Portões são portas coloridas encaixadas na moldura do tabuleiro, com uma, duas ou três casas de comprimento. Um portão cuja cor seus objetivos ainda querem brilha suavemente; um portão que não pode receber tijolos agora não brilha. Um portão de qualquer outra cor, ou fechado, é simplesmente parte da parede.',
          },
          {
            t: 'entry',
            id: 'gate',
            title: 'Portão aberto',
            board: {
              rows: ['B . Y G', '. . . R+', 'G Y B .'],
              gates: [{ side: 'left', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 3, dir: 'left' }],
              after: { rows: ['B . Y G', '. . . .', 'G Y B .'] },
              caption: 'Levado até dentro do portão da cor dele, um tijolo volta para casa.',
              alt: 'Um tabuleiro de três linhas de quatro, com um portão vermelho na borda esquerda da linha do meio. Linha de cima: azul, vazio, amarelo, verde. Linha do meio: três casas vazias e um tijolo vermelho à direita. Linha de baixo: verde, amarelo, azul, vazio. Uma seta desliza o tijolo vermelho para a esquerda pela linha do meio vazia. Resultado: ele vai até a borda e sai pelo portão vermelho. A linha do meio agora está vazia; os outros tijolos não mudam.',
            },
            what: 'Uma porta que recebe tijolos da própria cor: tijolos comuns, chaves e raios de linha. Bombas, dardos teleguiados e bombas de cor param nele.',
            how: 'Três formas de entrar. **Deslize** um tijolo pelo caminho dele e leve-o até dentro do portão: se soltar antes, o tijolo fica onde você soltou. **Combine** um tijolo da cor dele na casa da borda em frente a ele. **Exploda** um tijolo da cor dele nessa casa da borda. Cada um conta como mandado para casa.',
            facts: [
              { label: 'Largura', text: 'Um tijolo simples pode usar qualquer casa do portão. Um tijolo longo ou grande precisa que o portão o cubra inteiro, e as casas atrás dele precisam estar livres.' },
              { label: 'Objetivo', text: '“Envie ou combine” uma cor: tijolos combinados ou explodidos em qualquer lugar contam, além dos tijolos mandados pelo portão.' },
              { label: 'O VoiceOver diz', text: '“Portão: vermelho, 2 casas de largura, lado esquerdo, linhas 3 a 4”, e o estado dele: “aberto”.' },
            ],
          },
          {
            t: 'entry',
            id: 'counted-gate',
            title: 'Portão contado',
            board: {
              rows: ['R+ . G', 'B Y .'],
              gates: [{ side: 'left', at: 0, colour: 'R', kind: 'counted', count: 2 }],
              moves: [{ row: 0, col: 0, dir: 'left' }],
              after: { rows: ['. . G', 'B Y .'], gates: [{ side: 'left', at: 0, colour: 'R', kind: 'counted', count: 1 }] },
              caption: 'Um portão contado mostra quantos ainda vai receber.',
              alt: 'Um tabuleiro de duas linhas de três, com um portão vermelho contado mostrando 2 na borda esquerda da linha de cima. Linha de cima: vermelho, vazio, verde. Linha de baixo: azul, amarelo, vazio. Uma seta desliza o tijolo vermelho para a esquerda, para fora pelo portão. Resultado: o vermelho voltou para casa e o portão agora mostra 1: ele vai receber mais um tijolo vermelho e depois fechar.',
            },
            what: 'Um portão com um número: quantos tijolos ele ainda vai receber.',
            how: 'Cada tijolo que passa por ele, deslizando, combinado ou explodido na frente dele, tira um. No zero, ele **fecha de vez** e vira parede. Ele só conta os tijolos que passam por ele; tijolos da cor dele combinados em outro lugar continuam contando para um objetivo “Envie ou combine”, mas não mexem no número do portão.',
            facts: [
              { label: 'Aparece pela primeira vez', text: 'Nível 11, O grande dia.' },
              { label: 'O VoiceOver diz', text: '“aberto, aceita mais 3”, depois “fechado de vez”. Ao tocar: “Portão vermelho: aceita mais 3 blocos (vermelho) e depois fecha”.' },
            ],
            tip: 'Em O grande dia, o portão contado recebe um pouco mais do que o objetivo dele pede. Tijolos longos da cor dele só podem sair por um portão, então guarde as vagas dele para eles.',
          },
          {
            t: 'entry',
            id: 'iced-gate',
            title: 'Portão congelado',
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
              caption: 'Qualquer tijolo que volta para casa derrete um pouco o portão congelado. Este só precisava de um.',
              alt: 'Um tabuleiro de três linhas de quatro, com um portão azul na borda esquerda da linha de cima e um portão vermelho congelado na borda direita da linha de baixo, a um tijolo de derreter. Linha de cima: azul à esquerda, duas casas vazias, amarelo. Linha do meio: vazio, verde, vazio, vazio. Linha de baixo: vermelho, vazio, amarelo, vazio. Uma seta desliza o tijolo azul para a esquerda, para fora pelo portão azul. Resultado: o azul voltou para casa, e o portão vermelho à direita derreteu e está aberto.',
            },
            what: 'Um portão coberto de gelo. Até derreter, ele não recebe nada e é parte da parede.',
            how: 'Ele derrete um passo por vez, de duas formas: **cada tijolo que volta para casa por qualquer portão** derrete um passo de cada portão congelado, e cada peça limpa na casa da borda **bem na frente dele** o derrete um passo. Quando o gelo acabar, deslize a cor dele para dentro.',
            facts: [
              { label: 'Aparece pela primeira vez', text: 'Nível 5, Vasos e gelo.' },
              { label: 'Parece, mas não é', text: 'Um [tijolo em gelo](#ice) dentro do tabuleiro. Portões contados e congelados são desenhados de jeitos diferentes, então nunca se parecem.' },
              { label: 'O VoiceOver diz', text: '“congelado, limpe mais 2 na frente para descongelar”, depois “aberto” quando ele derrete.' },
            ],
            tip: 'Mande cedo um tijolo fácil para casa, de qualquer cor: ele começa o degelo enquanto você prepara o resto.',
          },
          {
            t: 'entry',
            id: 'staged-gate',
            title: 'Portão de etapa',
            what: 'Um portão atrás de uma persiana escura com um cadeado e o número de uma etapa. Ele pertence a um tabuleiro cujos objetivos vêm em duas **etapas**, mostradas como “FASE 1 / 2” no painel de pedidos.',
            how: 'Cumpra os objetivos da primeira etapa e a segunda começa: a persiana abre e o portão passa a receber a cor dele. Até lá, ele é parte da parede.',
            facts: [
              { label: 'Aparece pela primeira vez', text: 'Nível 54, em tabuleiros em que nada cai.' },
              { label: 'O VoiceOver diz', text: '“trancado até uma etapa posterior”, e “Novos portões se abrem” quando a etapa muda.' },
            ],
            tip: 'Durante a etapa 1, leve os tijolos da segunda etapa para perto do portão selado deles, para que estejam prontos no momento em que ele abrir.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Todo portão leva o símbolo da cor dele. Com o **Tabuleiro de alto contraste** ativado, um portão cuja cor fique perto da cor da moldura ganha um contorno em dois tons. Veja [Visão, audição e movimento](help:vision-hearing-and-motion).',
          },
        ],
      },
      {
        id: 'portals',
        title: 'Portais',
        blocks: [
          {
            t: 'entry',
            id: 'portal',
            title: 'Portal',
            what: 'Um par de anéis em redemoinho encaixados na moldura do tabuleiro, em dois lados diferentes, os dois marcados com a mesma letra.',
            how: 'Deslize um tijolo **simples** (um tijolo comum, uma chave ou um especial) pelo caminho dele até a casa da borda em frente a um dos anéis, e ele entra e sai pelo gêmeo, seguindo para dentro até encontrar algo. Isso custa uma jogada. A casa em frente ao anel gêmeo precisa estar livre e, se um portão da cor do tijolo o receber naquela borda, ele volta para casa em vez disso. Tijolos longos, grandes, em L e em T não podem usar portais.',
            facts: [
              { label: 'Aparece pela primeira vez', text: 'Nível 58, em tabuleiros em que nada cai.' },
              { label: 'O VoiceOver diz', text: 'A ação “Deslizar para a esquerda pelo portal”, depois “Pelo portal, saiu em linha 3, coluna 5”.' },
            ],
            tip: 'Portais são atalhos para um portão distante: um tijolo encurralado de um lado do tabuleiro pode sair bem na frente do portão de que precisa.',
          },
        ],
      },
      {
        id: 'lookalikes',
        title: 'Como diferenciar o que se parece',
        blocks: [
          {
            t: 'table',
            head: ['Se você vê…', 'É…', 'Porque…'],
            rows: [
              ['Um caixote que parece mais reforçado', 'Um caixote de duas camadas', 'Toque nele: ele diz quantas camadas faltam.'],
              ['Um painel sobre vários tijolos, com um sinal', 'Uma tampa', 'Tampas cobrem tijolos; caixotes ocupam uma casa sozinhos.'],
              ['Gelo dentro do tabuleiro', 'Um tijolo em gelo', 'Gelo na moldura é um portão congelado.'],
              ['Um tijolo cinza com “?”', 'Um tijolo virado', 'Ele não tem símbolo de cor; uma tampa nunca mostra “?”.'],
              ['Uma porta colorida com um número', 'Um portão contado', 'Um portão congelado mostra gelo; um portão de etapa, uma persiana escura com um cadeado.'],
              ['Um redemoinho na moldura', 'A ponta de um portal', 'Portões são coloridos; as pontas de portal vêm em pares com letras.'],
              ['Um enfeite num vão', 'Uma estátua', 'É cenário: toque nela e ela diz isso.'],
            ],
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'Bloqueios com o VoiceOver',
        blocks: [
          {
            t: 'list',
            items: [
              'Bloqueios e peças fixas são lidos como texto, e as peças que você pode mover como botões, para você saber na hora o que se move. Escolher uma que não se move diz, por exemplo, “Caixa, 2 camadas. Não pode se mover”.',
              'Cada tijolo coberto lê a tampa dele, e cada portão é um elemento próprio, com largura, lado, linhas ou colunas e estado.',
              'O rotor **Bloqueios** pula entre caixotes, gelo, cadeados, musgo e o resto; o rotor **Portões**, entre portões.',
              'O **Mais Conteúdo** de cada peça inclui o bloqueio que está nela e se um objetivo precisa dela.',
              'A cor de um tijolo virado nunca é falada até ele desvirar; aí você ouve “Desvirou:” e a cor.',
            ],
          },
          { t: 'p', text: 'Todo o resto está em [Como jogar com o VoiceOver](help:voiceover).' },
        ],
      },
      {
        id: 'faq',
        title: 'Perguntas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Por que meu tijolo parou no portão em vez de voltar para casa?',
                a: 'Confira cinco coisas: o portão é da cor do tijolo; ele não está congelado, cheio ou selado para uma etapa posterior; o tijolo não é uma bomba, um dardo teleguiado ou uma bomba de cor; um tijolo longo ou grande tem um portão tão largo quanto ele; e você levou o tijolo até dentro. Um tijolo solto um pouco antes do portão fica onde você o soltou.',
              },
              {
                q: 'Movi um tijolo virado e ele continuou virado. É um bug?',
                a: 'Não. Um tijolo virado só desvira quando um tijolo ao lado dele sai do tabuleiro, nunca quando ele se move ou quando um vizinho desliza para longe. É a mesma regra que o jogo original sempre teve.',
              },
              {
                q: 'Por que não aparece dica neste tabuleiro?',
                a: 'Em tabuleiros com tijolos virados, a dica nunca sugere uma jogada que revelaria uma cor escondida. Se toda jogada boa envolver um tijolo virado, nenhuma dica é mostrada, em vez de uma dica que trapaceia.',
              },
              {
                q: 'O musgo não para de crescer. O que eu faço?',
                a: 'O musgo só se espalha nos tabuleiros Cadeados e musgo, para um tijolo vizinho, depois de uma jogada que não tira nenhum musgo. Tire um tufo com uma linha ao lado sempre que puder, e use o reforço **OVNI** no musgo que estiver num lugar difícil: reforços nunca o deixam crescer.',
              },
              {
                q: 'Uma tampa ou um bloqueio pode tornar um tabuleiro impossível?',
                a: 'Não. Todos os tabuleiros foram conferidos para garantir que podem ser vencidos. Se nada puder se mover, o tabuleiro é embaralhado de graça; se o musgo tomar todas as colunas, ele murcha e, em último caso, o gelo ou o cadeado de um tijolo cede. Veja [Como jogar um tabuleiro](help:playing-a-board#never-stuck).',
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
    title: 'Os doze tipos de tabuleiro',
    summary:
      'Os doze tabuleiros de cada vila seguem o mesmo padrão de doze tipos, de De volta para casa a Quebra-cabeça tranquilo. O que cada tipo traz, como os tabuleiros em que os tijolos caem diferem dos tabuleiros em que nada cai, e o que muda nos tabuleiros Difícil, Superdifícil, Chefe e Noite.',
    keywords:
      'tipo de tabuleiro tipos modelo vila doze 12 gravidade queda tijolos caem parado sem reposição de volta para casa deslizar e combinar jardim aberto jardim em queda vasos e gelo tijolos longos peças de canto caixotes e gelo cadeados e musgo corredores de pedra o grande dia quebra-cabeça tranquilo difícil superdifícil muito difícil chefe noite dificuldade nível de dificuldade placa fase',
    host: 'vio',
    hostPose: 'idle',
    sections: [
      {
        id: 'overview',
        title: 'Resumo rápido',
        blocks: [
          {
            t: 'p',
            text: 'Toda vila tem doze tabuleiros, e os tabuleiros de 1 a 12 de uma vila são sempre do mesmo tipo, na mesma ordem, então o ritmo de uma vila logo fica familiar. Os doze tabuleiros da Cidade Jardim (níveis 1 a 12) levam estes nomes e ensinam um tipo cada; as vilas seguintes dão títulos próprios aos tabuleiros, mas mantêm o padrão.',
          },
          {
            t: 'table',
            head: ['Tabuleiro', 'Tipo', 'Os tijolos caem?', 'O que traz'],
            rows: [
              ['1', '[De volta para casa](#send-them-home)', 'Não', 'Deslize os tijolos para fora pelos portões deles.'],
              ['2', '[Deslizar e combinar](#slide-and-match)', 'Não', 'Colete cores com linhas e mande uma para casa.'],
              ['3', '[Jardim aberto](#open-garden)', 'Não', 'Um tabuleiro espaçoso que vai se abrindo enquanto você joga.'],
              ['4', '[Jardim em queda](#falling-garden)', 'Sim', 'Os mesmos objetivos, com quedas e tijolos novos.'],
              ['5', '[Vasos e gelo](#pots-and-ice)', 'Não', 'Caixotes, tijolos em gelo e um portão congelado.'],
              ['6', '[Tijolos longos](#long-bricks)', 'Geralmente', 'Tijolos longos e portões largos o bastante para eles.'],
              ['7', '[Peças de canto](#corner-pieces)', 'Sim, sem tijolos novos', 'Tijolos em L e em T.'],
              ['8', '[Caixotes e gelo](#crates-and-ice)', 'Geralmente', 'Caixotes de uma e duas camadas, mais gelo.'],
              ['9', '[Cadeados e musgo](#locks-and-moss)', 'Sim', 'Cadeados para abrir e musgo que se espalha.'],
              ['10', '[Corredores de pedra](#stone-lanes)', 'Geralmente', 'Estátuas que dividem o tabuleiro em caminhos.'],
              ['11', '[O grande dia](#the-big-day)', 'Sim', 'O final da vila: um pouco de tudo.'],
              ['12', '[Quebra-cabeça tranquilo](#quiet-puzzle)', 'Sim, sem tijolos novos', 'Alguns tijolos grandes e portões largos.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: '“Geralmente” quer dizer: da Clover Farm até o nível 408, em cada vila, dois entre Tijolos longos, Caixotes e gelo e Corredores de pedra são jogados sem nada caindo, e o terceiro tem queda; qual deles tem queda muda de vila para vila. A partir do nível 409, os três têm queda.',
          },
        ],
      },
      {
        id: 'gravity',
        title: 'Tabuleiros em que os tijolos caem e tabuleiros em que não caem',
        blocks: [
          {
            t: 'table',
            head: ['O que muda', 'Nada cai', 'Os tijolos caem'],
            rows: [
              ['Depois de uma combinação', 'As casas limpas ficam vazias, abrindo caminhos para deslizar.', 'Os tijolos de cima caem no vão, e tijolos simples escorregam na diagonal em volta dos obstáculos.'],
              ['Tijolos novos', 'Nunca.', 'Chegam pelo alto, mas só até o tabuleiro ficar tão cheio quanto começou. Peças de canto e Quebra-cabeça tranquilo não recebem nenhum.'],
              ['Deslizes', 'Em qualquer direção.', 'Só para os lados, ou direto para fora por um portão (inclusive para baixo, num portão no chão).'],
              ['Portões', 'Em qualquer lado.', 'Nas laterais e no chão.'],
              ['Cascatas', 'Raras.', 'Comuns: os tijolos que caem podem formar novas linhas.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['B Y G', 'R R Y', 'G B R'],
              moves: [{ row: 2, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['B Y G', '. . .', 'G B Y'] },
              caption: 'Onde nada cai, uma combinação deixa um vão por onde dá para deslizar.',
              alt: 'Um tabuleiro em que nada cai, com três linhas de três. Linha de cima: azul, amarelo, verde. Linha do meio: vermelho, vermelho, amarelo. Linha de baixo: verde, azul, vermelho. Uma seta troca o vermelho do canto de baixo à direita, para cima, com o amarelo acima dele. Resultado: três vermelhos somem e a linha do meio fica vazia: nada cai nela. O amarelo agora está no canto de baixo à direita.',
            },
          },
          {
            t: 'board',
            board: {
              rows: ['. . .', 'B Y G', 'R R Y', 'G B R'],
              moves: [{ row: 3, col: 2, dir: 'up', kind: 'swap' }],
              after: { rows: ['. . .', 'O K B', 'B Y G', 'G B Y'] },
              caption: 'Onde os tijolos caem, os tijolos de cima descem para o vão e chegam novos, até a quantidade inicial do tabuleiro.',
              alt: 'Um tabuleiro em que os tijolos caem, com quatro linhas de três e a linha de cima vazia. Linha 2: azul, amarelo, verde. Linha 3: vermelho, vermelho, amarelo. Linha 4: verde, azul, vermelho. Uma seta troca o vermelho do canto de baixo à direita, para cima, com o amarelo acima dele. Resultado: os três vermelhos da linha 3 somem, o azul, o amarelo e o verde de cima caem para a linha 3, e três tijolos novos, aqui laranja, rosa e azul, caem na linha 2. A linha de cima continua vazia, porque o tabuleiro só se completa até a quantidade de tijolos com que começou. O amarelo agora está no canto de baixo à direita.',
            },
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Você nunca fica sem saída. Sem nenhuma jogada possível, o tabuleiro é embaralhado de graça; um tabuleiro que não leva a lugar nenhum é distribuído de novo sem alarde; e se faltar ao tabuleiro uma cor de que um objetivo precisa, tijolos sobrando passam a ter essa cor (ou, onde os tijolos caem, a cor começa a chegar pelo alto).',
          },
        ],
      },
      {
        id: 'kinds',
        title: 'Os doze tipos',
        blocks: [
          {
            t: 'entry',
            id: 'send-them-home',
            title: '1 · De volta para casa',
            board: {
              rows: ['R+ . . B', '. Y . .', 'B . R .'],
              gates: [
                { side: 'left', at: 0, colour: 'R' },
                { side: 'right', at: 2, colour: 'B' },
              ],
              moves: [{ row: 0, col: 0, dir: 'left' }],
              caption: 'O primeiro tipo: leve os tijolos até os portões da cor deles.',
              alt: 'Um tabuleiro de três linhas de quatro, com um portão vermelho na borda esquerda da linha de cima e um portão azul na borda direita da linha de baixo. Linha de cima: vermelho à esquerda, duas casas vazias, azul à direita. Linha do meio: vazio, amarelo, vazio, vazio. Linha de baixo: azul, vazio, vermelho, vazio. Uma seta desliza o tijolo vermelho do canto de cima à esquerda para a esquerda, para fora pelo portão vermelho ao lado dele.',
            },
            what: 'Um tabuleiro em que nada cai, com cerca de dois terços ocupados e portões nas cores dos objetivos. Os objetivos são “Envie ou combine” duas cores, ou três mais adiante na Jornada.',
            how: 'Encontre um tijolo de uma cor de objetivo com o caminho livre até o portão dele e leve-o para dentro. Quando um caminho estiver bloqueado, tire os tijolos do meio combinando-os, ou deslize-os para o lado.',
            facts: [{ label: 'Primeiro encontro', text: 'Nível 1.' }],
            tip: 'Uma cor de objetivo também pode ser combinada em qualquer lugar: três em linha contam como três, sem portão.',
          },
          {
            t: 'entry',
            id: 'slide-and-match',
            title: '2 · Deslizar e combinar',
            what: 'Nada cai. Duas cores para **Coletar** com linhas, e uma para mandar para casa.',
            how: 'Deslize um tijolo para perto de dois da cor dele para formar uma linha, ou troque dois vizinhos. Cada linha limpa as casas de vez, então cada combinação abre espaço para o próximo deslize.',
            facts: [{ label: 'Primeiro encontro', text: 'Nível 2.' }],
            tip: 'Um deslize pode percorrer qualquer distância e para onde você soltar, o que forma linhas que uma troca nunca alcançaria.',
          },
          {
            t: 'entry',
            id: 'open-garden',
            title: '3 · Jardim aberto',
            what: 'Um tabuleiro maior (8×8 no começo) em que nada cai: mande duas cores para casa e colete uma terceira.',
            how: 'Planeje algumas jogadas à frente. Cada tijolo que você tira deixa espaço para deslizar, então limpar os tijolos entre um tijolo de objetivo e o portão dele muitas vezes é melhor do que a combinação mais próxima.',
            facts: [{ label: 'Primeiro encontro', text: 'Nível 3.' }],
          },
          {
            t: 'entry',
            id: 'falling-garden',
            title: '4 · Jardim em queda',
            what: 'Os mesmos objetivos do Jardim aberto, mas os tijolos caem e chegam novos pelo alto.',
            how: 'Trabalhe na parte de baixo do tabuleiro: combinações perto do fundo mexem em tudo o que está acima e preparam cascatas. Deslize para os lados até os vãos, ou direto para baixo, até um portão no chão.',
            facts: [{ label: 'Primeiro encontro', text: 'Nível 4.' }],
            tip: 'O objetivo de coletar aqui cresce ao longo da Jornada; as cascatas fazem boa parte do trabalho por você.',
          },
          {
            t: 'entry',
            id: 'pots-and-ice',
            title: '5 · Vasos e gelo',
            what: 'Nada cai. Caixotes de uma camada, tijolos em gelo e um **portão congelado**, geralmente de uma terceira cor. Objetivos: mandar três cores para casa e quebrar alguns caixotes.',
            how: 'Quebre caixotes e gelo com linhas ao lado deles. Mande qualquer tijolo para casa cedo: cada tijolo que sai por um portão derrete um pouco o portão congelado.',
            facts: [{ label: 'Primeiro encontro', text: 'Nível 5. Explicado em [Todos os bloqueios, tampas e portões](help:blockers-encyclopedia#iced-gate).' }],
          },
          {
            t: 'entry',
            id: 'long-bricks',
            title: '6 · Tijolos longos',
            what: 'Tijolos longos (1×2 e 2×1, depois 1×3 e 3×1) nas cores dos objetivos, cada um com um portão em algum lugar largo o bastante para recebê-lo. Objetivos: mandar duas cores para casa, e cada tijolo longo conta cada casa.',
            how: 'Alinhe um tijolo longo com um portão que o cubra e confira se as casas atrás dele estão livres. Tijolos longos nunca são trocados nem explodidos, então abra os caminhos deles com linhas de tijolos simples.',
            facts: [{ label: 'Primeiro encontro', text: 'Nível 6.' }],
          },
          {
            t: 'entry',
            id: 'corner-pieces',
            title: '7 · Peças de canto',
            what: 'Tijolos em L e em T (depois alguns longos) e alguns simples, só nas duas cores dos objetivos, num tabuleiro em que os tijolos caem, mas **não chegam novos**. O portão de uma cor fica embaixo, à esquerda, o da outra embaixo, à direita, e o chão é forrado de portões de três casas, alternando as duas cores.',
            how: 'Todo tijolo que se acomoda para em cima ou ao lado de um portão, então pense na ordem: mande primeiro a peça que libera mais espaço.',
            facts: [{ label: 'Primeiro encontro', text: 'Nível 7.' }],
          },
          {
            t: 'entry',
            id: 'crates-and-ice',
            title: '8 · Caixotes e gelo',
            what: 'Mais caixotes (de duas camadas a partir da Clover Farm) e tijolos em gelo. Objetivos: quebrar caixotes, em que cada camada conta, e mandar uma cor para casa.',
            how: 'Faça linhas ao lado dos caixotes, de preferência linhas que encostem em dois de uma vez. A explosão dupla de uma bomba é ideal para caixotes de duas camadas.',
            facts: [{ label: 'Primeiro encontro', text: 'Nível 8.' }],
          },
          {
            t: 'entry',
            id: 'locks-and-moss',
            title: '9 · Cadeados e musgo',
            what: 'Os tijolos caem. Tijolos com cadeado e musgo, e o único tipo em que o musgo se espalha. Objetivos: soltar todos os cadeados, tirar um pouco de musgo e mandar uma cor para casa.',
            how: 'Solte os cadeados com linhas **que passem por** eles; tire o musgo com linhas **ao lado** dele. Tire um pouco de musgo sempre que puder, antes que ele avance mais.',
            facts: [{ label: 'Primeiro encontro', text: 'Nível 9.' }],
          },
          {
            t: 'entry',
            id: 'stone-lanes',
            title: '10 · Corredores de pedra',
            board: {
              rows: ['Y . . . .', 'R . s . B', 'G . s . .', 'B . . . .'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              caption: 'Estátuas dividem caminhos: este vermelho não chega ao portão dele pela própria linha.',
              alt: 'Um tabuleiro em que nada cai, com quatro linhas de cinco e um portão vermelho na borda direita da linha 2. Uma coluna de duas estátuas fica no meio das linhas 2 e 3. Linha 1: amarelo à esquerda e quatro casas vazias. Linha 2: vermelho à esquerda, vazio, estátua, vazio, azul. Linha 3: verde à esquerda, vazio, estátua, duas casas vazias. Linha 4: azul à esquerda e quatro casas vazias. O caminho do tijolo vermelho até o portão dele está bloqueado pela estátua; as linhas de cima e de baixo são os caminhos livres em volta dela.',
            },
            what: 'Estátuas ficam em colunas curtas pelo tabuleiro, com um tijolo longo e, mais adiante, alguns caixotes. Objetivos: mandar duas cores para casa e coletar uma terceira.',
            how: 'Leia os caminhos antes de mexer: as estátuas nunca quebram, então traga os tijolos pelas linhas livres. A explosão de um raio de linha passa por cima das estátuas.',
            facts: [{ label: 'Primeiro encontro', text: 'Nível 10.' }],
          },
          {
            t: 'entry',
            id: 'the-big-day',
            title: '11 · O grande dia',
            what: 'O final da vila, em que os tijolos caem: tijolos longos e grandes, caixotes (de duas camadas mais adiante), gelo e, depois, cadeados; um **portão congelado** na primeira cor de objetivo, um **portão contado** na segunda e, muitas vezes, um **canteiro selado**, uma tampa relógio sobre duas casas do chão num canto. Objetivos: mandar duas cores para casa e quebrar caixotes.',
            how: 'Comece o degelo cedo mandando qualquer tijolo para casa, guarde as vagas do portão contado para os tijolos que só podem sair por um portão e deixe o canteiro selado abrir sozinho enquanto você joga em outro lugar.',
            facts: [
              { label: 'Primeiro encontro', text: 'Nível 11.' },
              { label: 'Bom saber', text: 'O nível 2000, o fim da Jornada, é um Grande dia à noite.' },
            ],
          },
          {
            t: 'entry',
            id: 'quiet-puzzle',
            title: '12 · Quebra-cabeça tranquilo',
            what: 'Um tabuleiro menor (8×6 no começo) com alguns tijolos grandes (2×2, 1×2 e 2×1, depois 1×3, 3×1, L e T) e alguns simples, só nas duas cores dos objetivos. Os tijolos caem, mas não chegam novos, e os portões ficam como em Peças de canto: embaixo, de cada lado, e ao longo de todo o chão.',
            how: 'Sem pressa. Nada novo chega, então cada jogada muda o tabuleiro de vez. Descubra qual peça está bloqueando qual e mande-as para casa nessa ordem.',
            facts: [{ label: 'Primeiro encontro', text: 'Nível 12.' }],
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Fase 31 na praia: 16 jogadas restantes, objetivos de 8 amarelos e 8 azuis. Tijolos grandes e inteiriços estão empilhados no fundo do tabuleiro: uma barra azul comprida, uma coluna azul alta e uma peça amarela em forma de C, com portões azuis e amarelos nas bordas.',
            caption: 'Tijolos grandes e portões largos, perto do começo da Jornada.',
          },
        ],
      },
      {
        id: 'extras',
        title: 'O que mais um tabuleiro pode trazer',
        blocks: [
          {
            t: 'p',
            text: 'Além do tipo, um tabuleiro pode ter alguns extras. Cada um ganha o próprio cartão de ensino na primeira vez que você o encontra.',
          },
          {
            t: 'list',
            items: [
              '**Um tabuleiro com formato.** Muitos tabuleiros seguem o contorno da vila deles, com vãos na placa. Um vão para um deslize como a moldura.',
              '**Uma sala selada** embaixo de uma das [cinco tampas](help:blockers-encyclopedia#lids), em alguns tabuleiros de todos os tipos, menos Peças de canto e Quebra-cabeça tranquilo.',
              '**Tijolos virados “?”**, a partir do nível 49. Veja [Tijolos virados](help:blockers-encyclopedia#face-down).',
              '**Objetivos em etapas** com portões selados, a partir do nível 54, e **portais**, a partir do nível 58, os dois em tabuleiros em que nada cai.',
              '**Caixotes ou gelo extras** nos tipos mais simples.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Na versão 5.1.1, as salas seladas além do canteiro selado de O grande dia, os tijolos virados, os objetivos em etapas, os portais e os caixotes e gelo extras aparecem em tabuleiros até o nível 408. Tabuleiros com formato aparecem ao longo de toda a Jornada.',
          },
          {
            t: 'p',
            text: 'Os tabuleiros também crescem ao longo da Jornada: até 9×9, com mais cores (três ou quatro no começo, cinco ou seis depois), mais obstáculos e objetivos maiores. Dentro de uma vila, não há dois tabuleiros com o mesmo layout.',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Tabuleiros Difícil, Superdifícil, Chefe e Noite',
        blocks: [
          {
            t: 'p',
            text: 'Alguns tabuleiros são mais difíceis que os vizinhos. A parada do nível no mapa da Jornada mostra uma placa antes de você jogar (**DIFÍCIL**, **SUPERDIFÍCIL**, **CHEFE** ou **NOITE**), e o tabuleiro leva a mesma placa embaixo do cabeçalho.',
          },
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Fase 35 ao entardecer, 28 jogadas restantes, com uma placa roxa DIFÍCIL sob os objetivos: 2 amarelos, 5 rosa e 3 castelos de areia. O tabuleiro em forma de castelo tem um tijolo rosa grande, tijolos cobertos de musgo e quatro caixotes de castelo de areia, com portões amarelos, rosa e vermelhos.',
            caption: 'Um tabuleiro Difícil traz sua placa embaixo do cabeçalho.',
          },
          {
            t: 'table',
            head: ['Dificuldade', 'Onde', 'O que muda', 'Moedas por concluir'],
            rows: [
              ['Normal', 'A maioria dos tabuleiros.', 'Sem placa.', '25'],
              ['Difícil', 'Cerca de um tabuleiro em cada três, a partir do nível 14.', 'Os objetivos pedem cerca de 15% a mais, e há alguns obstáculos extras.', '50'],
              ['Superdifícil', 'Cerca de um tabuleiro em cada sete, a partir do nível 39.', 'Os objetivos pedem cerca de 30% a mais.', '80'],
              ['Chefe', 'O último tabuleiro de cada capítulo de vinte, a partir do nível 40, a menos que seja um tabuleiro Noite.', 'Os objetivos pedem cerca de 40% a mais.', '80'],
              ['Noite', 'A cada 25 níveis, a partir do 115 (115, 140, 165…).', 'Ambientado depois do anoitecer. Joga como um tabuleiro Difícil.', '50'],
            ],
          },
          {
            t: 'list',
            items: [
              'Os tabuleiros Superdifícil e Chefe também ganham alguns obstáculos extras e, bem adiante na Jornada, podem usar uma cor a mais, o que torna as linhas mais difíceis de achar.',
              'Nas dificuldades maiores, as jogadas são ajustadas para que menos jogadores concluam na primeira tentativa. Todo tabuleiro continua conferido para garantir que pode ser vencido.',
              'Duas ou mais estrelas somam um bônus de meta às moedas, e os eventos podem dobrá-las ou triplicá-las. Veja [Como jogar um tabuleiro](help:playing-a-board#tiers).',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'O VoiceOver lê a dificuldade depois do número do nível no resumo do tabuleiro, por exemplo “Chefe”.',
          },
        ],
      },
      {
        id: 'approach',
        title: 'Por onde começar, seja qual for o tipo',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Leia primeiro o painel de pedidos.** Objetivos “Envie ou combine” aceitam tijolos dessa cor, saiam como saírem; objetivos “Colete” querem linhas ou explosões; objetivos de caixotes, cadeados e musgo querem linhas ao lado ou que passem por eles.',
              '**Encontre os portões.** Os portões que seus objetivos ainda querem brilham suavemente. Confira a largura deles antes de planejar a rota de um tijolo longo.',
              '**Compare suas jogadas com os objetivos.** Se um objetivo precisa de oito tijolos e você tem quinze jogadas, procure especiais: um raio de linha pode fazer o trabalho de várias jogadas.',
              '**Nos tabuleiros em que nada cai, pense em caminhos.** Cada combinação deixa um vão; escolha as combinações que abrem o caminho de que você precisa em seguida.',
              '**Nos tabuleiros em que os tijolos caem, trabalhe de baixo para cima.** Combinações embaixo mexem em mais coisas no tabuleiro e começam cascatas.',
              '**Empacou? Peça uma dica.** Você ganha uma Dica grátis em cada tentativa e, com o VoiceOver, o toque duplo com dois dedos dá uma a qualquer momento.',
            ],
          },
        ],
      },
      {
        id: 'faq',
        title: 'Perguntas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Por que não consigo deslizar um tijolo para cima ou para baixo neste tabuleiro?',
                a: 'É um tabuleiro em que os tijolos caem. Um tijolo simplesmente cairia de volta, então nesses tabuleiros os tijolos deslizam para os lados, ou direto para fora por um portão, inclusive para baixo, num portão no chão.',
              },
              {
                q: 'Por que pararam de chegar tijolos novos?',
                a: 'Nos tabuleiros em que os tijolos caem, os novos só completam o tabuleiro até a quantidade de tijolos com que ele começou, para sempre haver espaço para deslizar. Os tabuleiros Peças de canto e Quebra-cabeça tranquilo nunca recebem reposição: eles vão esvaziando enquanto você os resolve.',
              },
              {
                q: 'Como sei se um tabuleiro é Difícil antes de começar?',
                a: 'Olhe a parada do nível no mapa da Jornada: os tabuleiros Difícil, Superdifícil, Chefe e Noite levam uma placa ali, e a mesma placa embaixo do cabeçalho do tabuleiro.',
              },
              {
                q: 'Por que o tabuleiro 6 desta vila não se parece nada com o tabuleiro 6 da anterior?',
                a: 'O tipo define a ideia (tijolos longos e portões largos); a vila define a aparência, o formato do tabuleiro, as cores e o tamanho do desafio, então o mesmo tipo é montado de outro jeito de uma vila para a outra.',
              },
              {
                q: 'Os tabuleiros Chefe dão algo especial?',
                a: 'Um tabuleiro Chefe fecha um capítulo e paga as mesmas 80 moedas de um tabuleiro Superdifícil, mais o bônus de meta por duas ou mais estrelas. Concluí-lo completa o capítulo.',
              },
            ],
          },
        ],
      },
    ],
    related: ['special-bricks-and-combos', 'blockers-encyclopedia', 'playing-a-board', 'bricks-specials-and-blockers', 'journey-and-villages', 'lives-moves-and-undos'],
  },
];
