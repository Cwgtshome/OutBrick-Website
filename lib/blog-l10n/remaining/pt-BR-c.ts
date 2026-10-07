import type { ExtraGuides } from '../../i18n/blog';

/** Brazilian Portuguese translations of base journal articles 18–25. */
export const remainingPtBRc: ExtraGuides = {
  'commuter-puzzle-two-minute': {
    title: 'O quebra-cabeça de dois minutos para o trajeto',
    dek: 'Como criar uma experiência de quebra-cabeça que cabe entre uma parada e outra, com começo, conclusão e interrupções sem penalidade.',
    imageAlt: 'Uma breve partida de quebra-cabeça no celular, perto de uma xícara de chá e de uma janela iluminada',
    tags: ['jogos para celular', 'trajeto', 'quebra-cabeças', 'jogo equilibrado'],
    intro: 'Um jogo para o trajeto precisa caber em uma vida com interrupções. O ônibus chega, alguém manda uma mensagem ou é hora de descer. Em vez de tentar maximizar a imersão, vale perguntar: quando a atenção volta, a pessoa entende onde parou? Um tabuleiro de dois minutos pode ter início, meio e fim, sem exigir que a pausa cresça nem transformar uma interrupção em fracasso.',
    keyTakeaways: ['Uma sessão breve funciona melhor quando tem um ponto de parada claro.', 'Uma pesquisa piloto pode avaliar viabilidade, mas não provar que qualquer quebra-cabeça melhora cognição ou bem-estar.', 'No OutBrick, a primeira chance de desfazer é gratuita, e interromper uma partida não custa nada.'],
    sections: {
      'design-for-the-interruption': { title: 'Projete para a interrupção', paragraphs: [
        'Um jogo de trajeto acontece entre avisos, portas, mensagens e a necessidade de olhar ao redor. A pergunta não é “como manter a imersão ao máximo?”, mas “a pessoa entende onde está quando volta a prestar atenção?”.',
        'Um estado fácil de entender é uma forma de cuidado. Um tabuleiro claro, controles estáveis e uma pausa visível reduzem o esforço de lembrar o que estava acontecendo.'
      ] },
      'two-minutes-can-still-have-a-shape': { title: 'Dois minutos também podem ter uma estrutura', paragraphs: [
        'Uma sessão curta precisa de começo, meio e fim. O começo é reconhecer o desafio: o que o quebra-cabeça pede? O meio é fazer uma escolha: que relação vale testar? O fim é perceber o resultado: o que mudou e quero continuar?',
        'Essa estrutura torna a partida completa sem torná-la longa. A pessoa recebe uma unidade inteira de atenção, em vez de um fragmento de uma obrigação maior.'
      ] },
      'what-the-pilot-can-tell-us': { title: 'O que um estudo piloto pode — e não pode — dizer', paragraphs: [
        'Urwyler e colegas estudaram uma intervenção com quebra-cabeças em tablets em um ensaio piloto randomizado de viabilidade com adultos saudáveis. Um piloto ajuda a avaliar recrutamento, participação, medidas e a possibilidade de um estudo maior. Não prova que todo quebra-cabeça curto melhora a cognição ou o bem-estar.',
        'Essa diferença também é útil para equipes de produto. Podemos adotar uma pergunta de pesquisa — a experiência cabe no dia e pode ser usada com regularidade? — sem atribuir ao estudo uma conclusão que ele não alcançou.'
      ] },
      'outbrick-in-the-gap': { title: 'O OutBrick no intervalo', paragraphs: [
        'O OutBrick foi pensado para os intervalos entre compromissos. O tabuleiro pode ser entendido rapidamente, a primeira ação de desfazer é gratuita e a conclusão não exige uma longa preparação. Se o trem chegar ou o café ficar pronto, basta bloquear o celular: o tabuleiro permanece no mesmo lugar e a interrupção não custa nada.',
        'Não é produtividade disfarçada de jogo. É um jogo pequeno que respeita a forma de um dia real e permite aproveitar os intervalos sem pedir que eles durem mais.'
      ], bullets: [
        'Comece por uma fase que se explica sozinha',
        'Faça com que interromper seja seguro',
        'Ofereça um ponto natural para parar',
        'Deixe uma sessão curta continuar sendo lazer',
      ] }
    },
    pullQuote: 'Propor um tabuleiro que merece reflexão e depois devolver o tempo à pessoa.',
    faqs: [
      { question: 'O OutBrick acompanha meu tempo de jogo?', answer: 'O progresso fica no aparelho e no seu próprio iCloud; o app não inclui um SDK de análise. O provedor de vídeos premiados coleta os dados descritos na [política de privacidade](/privacy). Este artigo fala de métodos de pesquisa, não faz promessas sobre todos os jogos.' },
      { question: 'Por que fazer um jogo de dois minutos?', answer: 'Uma partida curta pode caber em um intervalo real e ainda ter começo, meio e fim. Ela deve permitir uma interrupção sem fazer a pessoa sentir que abandonou uma tarefa inacabada.' }
    ]
  },
  'apple-watch-puzzle-games': {
    title: 'Como escolher jogos de quebra-cabeça para Apple Watch',
    dek: 'O que torna um quebra-cabeça adequado ao pulso: telas legíveis, interações rápidas, partidas que aceitam interrupções e retorno tátil cuidadoso.',
    imageAlt: 'Um Apple Watch mostrando um pequeno quebra-cabeça com peças coloridas em uma tela escura',
    tags: ['Apple Watch', 'watchOS', 'quebra-cabeças', 'design inclusivo'],
    intro: 'Um jogo no pulso vive em condições diferentes de um jogo no celular. A tela é pequena, a pessoa olha por instantes e a outra mão controla o aparelho. Um bom quebra-cabeça para Apple Watch precisa ser compreendido de relance, aceitar que a pessoa olhe para outro lugar e não transformar cada toque em uma tarefa minúscula. Estas são algumas perguntas práticas para avaliar se um jogo foi pensado para o relógio.',
    keyTakeaways: ['Um tabuleiro para o pulso deve caber na tela, com poucas peças e um objetivo fácil de perceber.', 'A Digital Crown funciona bem para escolhas em uma dimensão; movimentos em uma grade podem exigir toque.', 'Uma partida deve salvar cada jogada e esperar sem penalidade quando o pulso abaixa.'],
    sections: {
      'design-for-the-glance': { title: 'Projete para o olhar rápido', paragraphs: [
        'A descrição da Apple sobre o uso do relógio oferece um bom ponto de partida: levantar o pulso, manter a tela a cerca de 30 centímetros dos olhos e usar a outra mão. As consultas costumam ser breves. As boas práticas do watchOS também priorizam interações rápidas, legíveis de relance e concentradas em uma tela.',
        'Isso elimina algumas opções para um quebra-cabeça. Um tabuleiro que exige rolagem não serve: todo o estado precisa estar visível quando a pessoa levanta o pulso. Trinta peças pequenas também não podem ser entendidas em um olhar. Tabuleiros adequados são compactos, têm poucas peças, contraste forte e objetivo evidente. A profundidade deve vir das relações entre obstáculos, não da quantidade de peças.',
        'O texto exige o mesmo cuidado. A Apple indica 16 pontos como tamanho padrão para jogos no watchOS e 12 como mínimo. Informações necessárias durante a partida, como a contagem de movimentos, devem usar o tamanho padrão ou maior. O que puder ficar de fora da versão para o pulso provavelmente deve ficar.'
      ] },
      'input-on-the-wrist': { title: 'Toque, deslize e Digital Crown no pulso', paragraphs: [
        'No relógio, usamos gestos conhecidos do iPhone: tocar, deslizar e arrastar. A escala muda: um dedo cobre boa parte da tela e pode esconder tanto a peça quanto o destino. A Apple recomenda botões de 44 × 44 pontos no watchOS, nunca menores que 28 × 28. As peças precisam seguir o mesmo princípio: menores que o dedo podem ser difíceis de tocar ou confundir com as vizinhas.',
        'A Digital Crown é outra forma de entrada. Desde o watchOS 10, a Apple a trata como principal meio de navegação: girá-la percorre listas e alterna entre telas organizadas na vertical. Os apps recebem a rotação, enquanto os cliques ficam reservados ao sistema. A Apple também pede uma interação equivalente por toque e uma resposta visual à rotação, para que a pessoa não pense que a Crown não fez nada.',
        'Em quebra-cabeças, a Crown é adequada a escolhas em um eixo: percorrer fases, selecionar uma peça ou voltar jogadas. Não é tão adequada a movimentos em uma grade bidimensional. Tudo o que ela controla também deve poder ser feito com o dedo. Não conte com um controle físico: as recomendações da Apple dizem que watchOS é a única plataforma da empresa sem suporte a controles de jogo externos.'
      ] },
      'sessions-in-seconds': { title: 'Partidas medidas em segundos', paragraphs: [
        'Um jogo no celular pode esperar alguns minutos de disponibilidade; um jogo no relógio não. O pulso abaixa quando o ônibus chega, a chaleira ferve ou alguém começa a falar. O jogo deve aceitar isso sem penalidade: salvar após cada jogada, restaurar a posição exata no próximo olhar e não deixar nada se esgotar com a tela apagada.',
        'Cronômetros são um exemplo claro do que evitar. Uma contagem regressiva pune justamente o comportamento para o qual o relógio foi feito: olhar para outro lado. Um limite de movimentos funciona melhor, pois pede que a pessoa não desperdice jogadas e depois espera. O OutBrick não tem cronômetro e um tabuleiro leva cerca de dois minutos; explicamos o raciocínio em [por que quebra-cabeças de dois minutos fazem bem](/blog/why-two-minute-puzzles-feel-good).',
        'A estrutura maior também precisa se dividir em partes pequenas. Uma partida no pulso pode ser um tabuleiro, talvez dois. Longas sequências de objetivos, tarefas diárias de dez tabuleiros e cenas entre fases não combinam com esse uso. Cada tabuleiro deve parecer completo, para que abaixar o braço seja uma conclusão, não um abandono.'
      ] },
      'haptics-as-punctuation': { title: 'Feedback tátil como pontuação', paragraphs: [
        'O relógio encosta na pele, então o feedback tátil pode ser especialmente eficaz. O watchOS define padrões integrados com significados próprios, reproduzidos pelo Taptic Engine e associados a sons. A Apple recomenda usar cada padrão de forma coerente com seu significado, para que fique claro qual ação o provocou.',
        'Poucos acontecimentos em um quebra-cabeça precisam ser sentidos: uma peça em uma posição útil, um movimento bloqueado e a conclusão. Dê a cada um um padrão estável. Se a mesma vibração significar “bloqueado” e “resolvido”, a pessoa deixará de confiar nela. A Apple também alerta para o excesso: um retorno agradável ocasional fica cansativo quando se repete; vibrar a cada deslize pode transformar um jogo calmo em zumbido.',
        'O teste da Apple é útil: o melhor feedback tátil muitas vezes passa despercebido, mas faz falta quando é desligado. Ele deve apoiar a tela, nunca substituí-la, pois algumas pessoas jogam com a resposta tátil desativada.'
      ] },
      'standalone-or-companion': { title: 'App independente ou companheiro do iPhone?', paragraphs: [
        'Um jogo pode chegar ao relógio de duas formas. A documentação da Apple descreve apps apenas para watchOS, sem versão para iPhone, e apps com um companheiro para iPhone que podem ser instalados e usados sem ele. A Apple incentiva a independência nos dois casos, pois esperamos que o relógio funcione sem o celular. Em apps com companheiro, as compras integradas são universais: uma compra fica disponível nos dois aparelhos.',
        'Para quem joga, a pergunta é simples: o jogo funciona sozinho ou apenas controla o telefone? Um app independente permite jogar durante uma caminhada deixando o celular em casa. O OutBrick tem jogo independente para Apple Watch e versões para iPhone, iPad, Mac, Apple TV e Apple Vision Pro. O progresso fica no iCloud; um aparelho conectado à mesma conta continua de onde o anterior parou.',
        'Ao avaliar um quebra-cabeça para o pulso, procure estas qualidades. Jogos que atendem a todos os pontos abaixo costumam se encaixar melhor no relógio:',
      ], bullets: ['O tabuleiro inteiro é legível de relance, sem rolagem.', 'As peças têm pelo menos o tamanho aproximado de uma ponta de dedo.', 'Tudo o que a Digital Crown faz também pode ser feito pelo toque.', 'Abaixar o pulso no meio do tabuleiro não custa nada.', 'Cada resposta tátil tem um significado e não fica vibrando sem parar.', 'O jogo funciona sem o celular por perto.'] }
    },
    pullQuote: 'Uma partida no pulso deve aceitar interrupções sem transformar uma pausa em penalidade.',
    faqs: [
      { question: 'O que torna um quebra-cabeça adequado ao Apple Watch?', answer: 'Um tabuleiro compacto que cabe em uma tela, poucas peças bem contrastadas, controles fáceis de usar e uma partida que salva e espera quando você abaixa o pulso.' },
      { question: 'A Digital Crown pode controlar um jogo de quebra-cabeça?', answer: 'Ela funciona bem para seleções em uma dimensão, como percorrer fases ou peças. Movimentos em uma grade bidimensional podem ser mais adequados ao toque.' },
      { question: 'O OutBrick funciona no Apple Watch sem iPhone?', answer: 'Sim. O OutBrick tem uma versão independente para Apple Watch. O progresso pode continuar entre aparelhos conectados à mesma conta iCloud.' },
      { question: 'Um jogo para relógio deve usar cronômetro?', answer: 'Uma contagem regressiva pode punir a pessoa por olhar para outro lugar. Um limite de movimentos permite pensar com calma e ainda torna as escolhas relevantes.' }
    ]
  },
  'apple-vision-pro-puzzle-games': {
    title: 'Como escolher jogos de quebra-cabeça para Apple Vision Pro',
    dek: 'Conforto, gestos de olhar e pinçar, distância de leitura e peças legíveis: critérios para avaliar quebra-cabeças no Vision Pro.',
    imageAlt: 'Um quebra-cabeça de peças coloridas em uma janela flutuante do Apple Vision Pro',
    tags: ['Apple Vision Pro', 'visionOS', 'realidade mista', 'acessibilidade'],
    intro: 'Um quebra-cabeça no Apple Vision Pro não precisa transformar a sala em espetáculo. A plataforma traz recomendações concretas sobre conforto visual, gestos, janelas, distância e acessibilidade. Elas apontam para uma experiência tranquila: tabuleiro estável, controles que não cansam e imersão escolhida pela pessoa. Estas perguntas ajudam a avaliar se um jogo foi projetado para a realidade mista, em vez de apenas ampliado para uma tela maior.',
    keyTakeaways: ['Priorize conforto: coloque o tabuleiro no campo de visão e evite movimentos rápidos ou conteúdo muito próximo.', 'O olhar e o gesto de pinçar formam a interação comum; alvos separados e contornos claros ajudam a selecionar.', 'Uma janela compartilhada costuma servir melhor a quebra-cabeças, deixando a imersão como opção.'],
    sections: {
      'comfort-first': { title: 'Conforto antes do espetáculo', paragraphs: [
        'As orientações da Apple começam pela ergonomia. A pessoa vê o ambiente real e o conteúdo virtual pelas câmeras, e o conforto visual é essencial. A empresa recomenda manter o conteúdo no campo de visão, evitar posições que exijam virar a cabeça e evitar movimentos bruscos ou rápidos. Os gestos também devem poder ser feitos com as mãos no colo ou ao lado do corpo.',
        'Quebra-cabeças combinam bem com isso: o tabuleiro é um objeto estável que espera pela pessoa. Não precisa voar perto da cabeça nem fazer alguém se levantar. O risco é usar o espaço para aumentar, aproximar e encher tudo de elementos. Um tabuleiro que ocupa toda a visão força os olhos a percorrer grandes distâncias; partículas atrás dos ombros criam justamente o movimento que a Apple recomenda evitar.',
        'A distância importa tanto quanto o tamanho. A Apple recomenda manter a pelo menos um metro o conteúdo que será lido ou usado por bastante tempo; a proximidade maior deve ficar para interações breves. Como um quebra-cabeça é observado por mais tempo, ele deve ficar a uma distância confortável de leitura, não ao alcance do braço.'
      ] },
      'gaze-and-pinch': { title: 'Olhar é apontar', paragraphs: [
        'No Vision Pro, geralmente se aponta para um objeto com o olhar e o seleciona com um gesto indireto, como juntar o indicador e o polegar, mantendo a mão parada. O sistema destaca o objeto observado antes do gesto. Por privacidade, o visionOS não compartilha o olhar com o app antes da seleção.',
        'Isso afeta diretamente o tabuleiro. Os olhos fazem pequenos movimentos mesmo quando fixam um ponto; por isso, alvos muito próximos são difíceis de selecionar. A Apple sugere pelo menos 16 pontos de espaço ao redor dos elementos interativos ou centros separados por ao menos 60 pontos. Também recomenda formas arredondadas: o olhar tende a ser atraído pelos cantos e pode escapar do centro de formas angulares. Uma grade compacta de quadrados encostados é quase o pior cenário; peças arredondadas, espaçadas e destacadas funcionam melhor.',
        'Também é possível estender a mão para tocar diretamente um objeto virtual. A Apple alerta que isso cansa, especialmente na altura dos olhos ou acima, e recomenda reservar o gesto para objetos próximos e interações curtas. Para a maioria dos tabuleiros, o gesto indireto deve ser o padrão; toque direto pode continuar disponível para quem preferir.'
      ] },
      'window-or-immersive': { title: 'Comece por uma janela; ofereça imersão como opção', paragraphs: [
        'Os apps de visionOS começam no espaço compartilhado, lado a lado em janelas que podem ser movidas. Um app pode abrir um espaço completo, onde aparece sozinho, e escolher quanto do ambiente substituir. A imersão mista combina conteúdo virtual e realidade; a progressiva substitui parte do ambiente, e a completa o substitui todo. Na versão progressiva, a Digital Crown ajusta quanto ainda fica visível.',
        'A Apple recomenda usar o mínimo de imersão necessário e começar no espaço compartilhado ou na imersão mista, deixando a escolha de ir além com a pessoa. Para a maioria dos quebra-cabeças, isso aponta para uma janela: um tabuleiro é um objeto delimitado, e janelas preservam uma bebida, uma conversa ou outro app no campo de visão. A Apple também alerta que janelas demais ocupam o espaço e dificultam mover o aplicativo.',
        'Ainda pode haver momentos para a imersão. Concluir um capítulo ou abrir um mapa geral poderia justificar uma breve transição para um espaço mais envolvente. O teste é saber se a pessoa escolheu esse momento e se consegue sair dele com facilidade.'
      ] },
      'seated-play': { title: 'Projete para jogar sentado', paragraphs: [
        'O Vision Pro leva o conteúdo até a pessoa, em vez de fazê-la ir até ele; a Apple recomenda exigir pouco ou nenhum movimento físico. Isso funciona naturalmente para um quebra-cabeça: deslizar uma peça não exige caminhar. Também é uma questão de segurança: a Apple diz para não usar o aparelho dirigindo e alerta que ele não foi projetado para movimento perto de escadas, varandas ou ruas.',
        'Jogar sentado também muda o ritmo. No sofá ou à mesa, a pessoa pode jogar mais tempo do que no celular enquanto espera na fila, então limites justos continuam importantes. Sem cronômetro e com objetivo e limite de movimentos visíveis desde o início, dá para pensar sem pressa. No OutBrick não há contagem regressiva; objetivo e limite aparecem no primeiro toque.',
        'A Apple informa que manter a Digital Crown pressionada recentraliza o conteúdo diante da pessoa; não é necessário duplicar esse controle dentro do app. Um quebra-cabeça que continua no lugar escolhido e volta ao centro quando solicitado funciona bem.'
      ] },
      'legible-pieces': { title: 'Peças fáceis de ler', paragraphs: [
        'A legibilidade muda quando um ponto deixa de representar um número fixo de pixels. O visionOS define o ponto como um ângulo e redimensiona as janelas dinamicamente: elas aumentam quando se afastam e diminuem quando se aproximam, mantendo tamanho aparente parecido. Por isso, a Apple recomenda imagens vetoriais em jogos, para que continuem nítidas ao mudar de tamanho.',
        'A Apple define 17 pontos como tamanho padrão de texto para jogos no visionOS e 12 como mínimo; botões devem ter 60 × 60 pontos por padrão e pelo menos 28 × 28. Também é preciso cuidado com profundidade: texto que parece flutuar diante do fundo pode ser mais difícil de ler e cada mudança de plano exige que os olhos refocalizem. Um tabuleiro calmo e claro, com um pouco de relevo nas peças, é mais legível que várias camadas flutuantes.',
        'A cor também precisa de apoio acessível. O Apple Vision Pro oferece VoiceOver, Controle Assistivo, Controle por Permanência e outros recursos; um quebra-cabeça de classificação por cor deve ter uma segunda pista, como um símbolo em cada peça. Explicamos isso em [cor, forma e acessibilidade](/blog/color-shape-accessibility). Antes de escolher um jogo para Vision Pro, confira se ele atende às necessidades de conforto, legibilidade e controle.'
      ], bullets: ['Dá para jogar sentado, com as mãos descansando no colo.', 'O tabuleiro fica a uma distância confortável e permanece onde você o colocou.', 'As peças têm espaço entre si, formas arredondadas e destaque claro quando você olha para elas.', 'A imersão é oferecida, nunca imposta.', 'Não há cronômetro; pensar não tem custo.', 'A cor nunca é a única maneira de distinguir as peças.'] }
    },
    pullQuote: 'Um tabuleiro estável e confortável vale mais que uma sala cheia de efeitos.',
    faqs: [
      { question: 'É melhor jogar um quebra-cabeça no modo imersivo?', answer: 'Nem sempre. Uma janela no espaço compartilhado mantém o ambiente visível e costuma combinar com um tabuleiro delimitado. A imersão deve ser uma opção confortável e fácil de encerrar.' },
      { question: 'Como seleciono peças no Vision Pro?', answer: 'O padrão é olhar para um elemento e fazer um gesto indireto, como juntar indicador e polegar. Alvos espaçados e destacados ajudam a seleção; tocar diretamente pode cansar.' },
      { question: 'Que distância é confortável para um quebra-cabeça?', answer: 'A Apple recomenda manter a cerca de um metro o conteúdo que será lido por períodos mais longos e reservar a proximidade para ações breves.' },
      { question: 'O OutBrick funciona no Apple Vision Pro?', answer: 'Sim. O OutBrick está disponível para Apple Vision Pro. Confira os requisitos e a compatibilidade atuais na App Store.' }
    ]
  },
  'games-like-tetris': {
    title: 'Jogos como Tetris: por que continuam divertidos',
    dek: 'Regras simples, estado visível e dificuldade justa explicam o apelo de Tetris e de outros quebra-cabeças de peças, incluindo jogos de blocos deslizantes.',
    imageAlt: 'Peças geométricas coloridas formando linhas sobre uma grade escura, em referência a jogos de encaixe',
    tags: ['Tetris', 'jogos de encaixe', 'quebra-cabeças', 'design de jogos'],
    intro: 'Tetris parece simples: encaixe as peças que caem para completar linhas. Ainda assim, há décadas ele e jogos parecidos continuam interessantes. A explicação não é uma fórmula única, mas um conjunto de qualidades: regras que se aprendem rápido, estados fáceis de ler, dificuldade justa e partidas que cabem no dia. Essas ideias também aparecem em quebra-cabeças de blocos deslizantes, embora cada gênero torne o espaço limitado interessante de um jeito diferente.',
    keyTakeaways: ['Jogos duradouros costumam ensinar uma regra central em poucos segundos.', 'Um estado visível permite planejar e entender por que uma jogada funcionou ou falhou.', 'Desafio justo e uma unidade curta de jogo ajudam a partida a caber na vida cotidiana.'],
    sections: {
      'where-the-genre-starts': { title: 'Onde o gênero começa', paragraphs: [
        'A Tetris Company data a primeira versão de 1984, criada por Alexey Pajitnov no computador Electronika 60, em Moscou. O jogo passou por longas negociações de direitos até chegar ao Game Boy da Nintendo. Essa história vem do detentor dos direitos, então seus números de vendas são informações da própria empresa; a linha geral, porém, é bem estabelecida. Já exploramos [como regras simples mantêm Tetris aberto a infinitas variações](/blog/tetris-simple-rules-infinite-variation).',
        'Tetris criou uma família mais ampla que uma fórmula: peças de quadrados, uma grade que se enche e uma regra que libera espaço quando um padrão se completa. Jogos aparentados variam quase tudo: queda por gravidade, posicionamento livre ou peças fixas que deslizam por um tabuleiro até encontrar a saída. Alguns princípios de design ajudam a explicar a longevidade.'
      ] },
      'simple-rules': { title: 'Uma regra que se aprende em segundos', paragraphs: [
        'Tetris cabe em uma frase: encaixe as peças que caem para completar e limpar linhas. Quase todo quebra-cabeça duradouro tem uma regra central desse tamanho; a profundidade vem das situações que ela cria. Se um tutorial longo precisa vir antes da primeira fase de verdade, talvez a regra esteja fazendo o trabalho que o tabuleiro deveria fazer.',
        'Regras pequenas também podem criar problemas difíceis de resolver por força bruta. Breukelaar e colegas provaram que até o Tetris offline, com todas as peças conhecidas de antemão, é NP-completo para objetivos como limpar o máximo de linhas. Quebra-cabeças de blocos deslizantes são formalmente ainda mais difíceis: Hearn e Demaine demonstraram que o caso geral é PSPACE-completo. Para jogadores, isso significa que não há atalho conhecido para resolver rapidamente todos os tabuleiros.',
        'A regra do OutBrick é igualmente compacta: uma peça desliza até algo pará-la; leve todas para fora pela porta da própria cor. Chaves e fechaduras, gelo, geradores, esteiras e caixas aparecem gradualmente, cada qual oferecendo uma nova variação da regra em vez de acrescentar um jogo de regras diferente.'
      ] },
      'readable-state': { title: 'Um tabuleiro que dá para ler', paragraphs: [
        'Em qualquer momento de Tetris, o estado está visível: pilha, espaços vazios, peça atual e próxima. Nada importante fica escondido. Isso permite planejar e faz o quebra-cabeça parecer raciocínio, não sorte.',
        'A pesquisa mostra como a percepção contribui para a habilidade. Kirsh e Maglio observaram jogadores girarem e moverem peças para ver as opções mais rapidamente, não apenas para aproximá-las do lugar de destino. Chamaram isso de ações epistêmicas: movimentos que facilitam o pensamento sem mudar a posição do jogo. Lindstedt e Gray mediram 39 características em 240 jogadores e identificaram nos especialistas uma combinação integrada de percepção, decisão e ação.',
        'Para designers, a lição é tornar o estado fácil de entender e os testes pouco custosos. Cores apoiadas por formas, peças cujo comportamento é claro e uma opção de desfazer incentivam a experimentação. No OutBrick, o modo para pessoas daltônicas vem ativado por padrão e põe um símbolo em cada peça e porta; a primeira ação de desfazer em cada tabuleiro é gratuita.'
      ] },
      'fair-difficulty': { title: 'Uma dificuldade que parece justa', paragraphs: [
        'Tetris fica mais difícil quando acelera. Isso funciona porque as regras não mudam: a pessoa perde por causa das posições que escolheu sob pressão e consegue ver onde a pilha saiu do controle. Um desafio justo deixa claro por que houve uma falha. Injustiça é um tabuleiro impossível, uma reviravolta imprevisível ou uma regra revelada depois de cobrar algo.',
        'Velocidade é só uma forma de pressão. Um quebra-cabeça de peças deslizantes pode exigir eficiência, não reflexos, e usar limite de movimentos no lugar de relógio. Isso troca a urgência do Tetris avançado por tempo para pensar, servindo a outro estado de espírito e talvez a outro público. Ambos podem ser justos se os limites estiverem visíveis antes de começar.',
        'Ser justo também exige que o tabuleiro tenha solução. Seja feito à mão ou gerado, cada quebra-cabeça precisa ser verificado antes de aparecer. Um solucionador verificou os 2.000 tabuleiros do OutBrick antes da publicação; objetivo e limite de movimentos aparecem no primeiro toque. A dificuldade deve crescer gradualmente, uma ideia por vez, como explicamos em [uma curva de dificuldade mais gentil](/blog/kinder-difficulty-curve).'
      ] },
      'short-loop': { title: 'Uma partida que cabe no dia', paragraphs: [
        'A unidade mais curta de Tetris é uma peça, com alguns segundos para decidir. A seguinte é uma partida, que pode ser curta ou longa conforme a habilidade. Essa estrutura em camadas ajuda o jogo a caber em diferentes momentos: dá para jogar uma peça ou continuar por mais tempo.',
        'Quebra-cabeças de blocos deslizantes usam outro ritmo, mas também podem terminar em uma unidade clara. A partida deve permitir uma pausa natural sem cronômetro nem cadeia de obrigações. Um tabuleiro do OutBrick leva cerca de dois minutos e pode ser encerrado sem custo, como explicamos em [por que quebra-cabeças de dois minutos fazem bem](/blog/why-two-minute-puzzles-feel-good). Se você ainda não conhece esse gênero, comece por [como resolver quebra-cabeças de blocos deslizantes](/blog/how-to-solve-sliding-block-puzzles). Para entender jogos parecidos, vale comparar como cada um usa espaço limitado e quais regras tornam os próximos movimentos interessantes.',
        'Para escolher um novo jogo, alguns minutos de teste já ajudam a perceber se a regra é clara, se o estado do tabuleiro é fácil de acompanhar e se é possível encerrar uma partida sem perder progresso.'
      ], bullets: ['Você explicaria a regra a um amigo em uma frase?', 'Dá para ver de uma vez tudo o que importa no tabuleiro?', 'Quando você perde, consegue apontar qual jogada causou isso?', 'Todos os níveis têm solução conhecida e os limites são mostrados antes?', 'É possível concluir uma rodada em poucos minutos e parar sem perder nada?', 'As mecânicas novas aparecem uma de cada vez como variações da mesma regra?'] }
    },
    pullQuote: 'Regras simples podem criar decisões profundas quando o estado do jogo continua visível.',
    faqs: [
      { question: 'O que torna jogos como Tetris divertidos por tanto tempo?', answer: 'Regras fáceis de aprender, situações que mudam, um estado visível para planejar e dificuldade que cresce sem mudar as regras de surpresa.' },
      { question: 'Jogos de blocos deslizantes são como Tetris?', answer: 'Pertencem a uma família ampla de quebra-cabeças de espaço limitado, mas usam outra mecânica: peças deslizam pelo tabuleiro até algo pará-las, em vez de cair por gravidade.' },
      { question: 'Por que a visibilidade do tabuleiro importa?', answer: 'Quando as peças, espaços e regras estão visíveis, a pessoa pode planejar, experimentar e entender o resultado das jogadas.' },
      { question: 'O OutBrick tem cronômetro?', answer: 'Não. Os tabuleiros têm metas e limites de movimentos visíveis, mas não há contagem regressiva.' }
    ]
  },
  'are-puzzle-games-good-for-your-brain': {
    title: 'Jogos de quebra-cabeça fazem bem ao cérebro?',
    dek: 'O que estudos sobre quebra-cabeças e treinamento cerebral realmente demonstram — e por que vale jogar sem promessas exageradas de saúde.',
    imageAlt: 'Uma pessoa resolve um quebra-cabeça no celular em uma mesa tranquila, com peças coloridas ao lado',
    tags: ['pesquisa sobre o cérebro', 'quebra-cabeças', 'cognição', 'bem-estar'],
    intro: 'É tentador dizer que um quebra-cabeça mantém o cérebro jovem. A pesquisa oferece uma resposta mais cuidadosa. Praticar uma tarefa pode ajudar a melhorar nela; ainda é difícil provar que esse ganho se transfere para a vida cotidiana ou previne declínio cognitivo. Isso não torna os jogos inúteis. Resolver um problema bem delimitado pode ser prazeroso por si só, sem prometer benefícios médicos que os estudos não demonstraram.',
    keyTakeaways: ['Treino costuma melhorar primeiro as tarefas praticadas; evidências de transferência ampla para o cotidiano são limitadas.', 'Estudos observacionais encontram associações, mas não provam que jogar causou melhores resultados cognitivos.', 'Quebra-cabeças podem valer a pena pelo desafio e pela diversão, sem promessas de saúde cerebral.'],
    sections: {
      'the-promise': { title: 'A promessa', paragraphs: [
        'Jogos de treinamento cerebral prometem melhorar memória, atenção e raciocínio, às vezes até retardar o envelhecimento. Em 2014, um grupo de cientistas divulgou uma declaração contra afirmações comerciais que considerava pouco sustentadas. O ponto não era declarar que toda atividade mental é inútil; era pedir provas antes de prometer proteger o cérebro.',
        'A declaração recebeu atenção porque anúncios diziam que jogos digitais melhorariam o desempenho na escola e no trabalho e atrasariam o declínio associado à idade. Os pesquisadores contestaram a falta de evidências sólidas para aquelas promessas, não emitiram um veredito de que todo jogo fosse inútil.',
        'A pergunta útil é mais específica: que habilidade foi treinada, como foi medida e em quem? Sem essas respostas, “faz bem ao cérebro” é uma afirmação ampla demais.'
      ] },
      'near-and-far': { title: 'Melhorar em uma tarefa não significa melhorar em tudo', paragraphs: [
        'A revisão mais abrangente citada aqui é a de Daniel Simons e colegas, publicada em 2016 na Psychological Science in the Public Interest. Os autores avaliaram estudos usados por empresas de treinamento cerebral. O padrão era consistente: melhora nas tarefas praticadas, ganhos menores em tarefas parecidas e poucas evidências para tarefas diferentes ou para o pensamento cotidiano.',
        'Pesquisadores distinguem transferência próxima e distante. Jogar bastante com blocos deslizantes pode ajudar a perceber obstáculos e planejar esses mesmos quebra-cabeças — isso é aprendizagem real. As evidências não mostram que a habilidade se transfira para lembrar onde estacionou ou acompanhar uma conversa complexa.',
        'Nenhum estudo revisado atendia a todos os padrões de um bom ensaio definidos pelos autores. Amostras pequenas, grupos de comparação fracos e a possibilidade de que pessoas que esperavam melhorar se esforçassem mais nos testes tornam resultados positivos menos confiáveis. Isso não prova que quebra-cabeças façam mal; sugere cautela com promessas de rejuvenescimento cerebral.'
      ] },
      'puzzlers-score-better': { title: 'Quem faz quebra-cabeças pontua mais alto — com ressalvas', paragraphs: [
        'Um resultado frequentemente citado vem do estudo britânico PROTECT. Em 2019, Helen Brooker e colegas avaliaram mais de 19 mil adultos de 50 a 93 anos, com testes online e perguntas sobre a frequência com que faziam quebra-cabeças de palavras ou números. Em geral, quem relatava jogar com mais frequência também obtinha resultados melhores nas medidas avaliadas.',
        'O estudo é amplo e cuidadoso, mas é um retrato de um momento, não uma prova de causa. Pessoas com raciocínio mais rápido podem gostar mais de quebra-cabeças e praticá-los com maior frequência. A afirmação da imprensa de que isso equivaleria a um cérebro “oito anos mais jovem” não veio dos próprios artigos científicos.',
        'Ensaios que distribuem atividades aleatoriamente ajudam a investigar causalidade, mas são raros. Em 2022, Devanand e colegas dividiram 107 pessoas com comprometimento cognitivo leve entre palavras cruzadas online e um conjunto de jogos de computador, por 78 semanas. As palavras cruzadas tiveram resultado um pouco melhor na principal medida cognitiva. Sem um grupo inativo, o estudo mostra que foram melhores que aqueles jogos, não que superaram a vida cotidiana.'
      ] },
      'what-trials-show': { title: 'O que mostram os ensaios mais longos', paragraphs: [
        'O ensaio de longo prazo mais conhecido, ACTIVE, recrutou 2.832 adultos mais velhos nos Estados Unidos para dez sessões de cerca de uma hora com exercícios de memória, raciocínio ou velocidade de processamento, além de algumas sessões de reforço. Dez anos depois, os grupos de raciocínio e velocidade mantinham resultados iguais ou melhores que no início com mais frequência que o grupo de comparação; o benefício de memória havia diminuído. Os participantes treinados também relataram menos dificuldades cotidianas.',
        'Dois pontos importam: ACTIVE treinou habilidades específicas com exercícios estruturados, não com partidas ocasionais de quebra-cabeça; e mesmo esse estudo bem conduzido encontrou efeitos modestos e específicos. Prometer proteção ampla com poucos minutos por dia vai muito além das melhores evidências.',
        'Estudos pequenos de apps comuns são ainda menos conclusivos. Um piloto de Urwyler e colegas acompanhou onze adultos saudáveis jogando vinte minutos por dia em um tablet: melhorou uma medida de atenção, mas não houve mudança na cognição geral, no humor ou na qualidade de vida. Foi um estudo de viabilidade, não uma prova definitiva em qualquer direção.'
      ] },
      'honest-reasons': { title: 'Motivos honestos para jogar', paragraphs: [
        'Se quebra-cabeças não são uma vitamina comprovada para o cérebro, por que jogar? Porque há bons motivos por si só: um problema delimitado, um desafio justo e a satisfação de encontrar uma solução. Sessões curtas foram associadas a melhora do humor depois de uma tarefa exigente, como explicamos em [por que um quebra-cabeça de dois minutos pode ser uma pausa de verdade](/blog/why-two-minute-puzzles-feel-good). É uma afirmação modesta e suficiente.',
        'A declaração científica de 2014 terminou com uma recomendação útil: manter-se fisicamente ativo, mentalmente envolvido e socialmente conectado. Um quebra-cabeça pode contribuir modestamente para o segundo ponto, especialmente quando compartilhado, mas não substitui os outros dois. O OutBrick não faz promessas de saúde: seus tabuleiros são curtos, solucionáveis e sem cronômetro. Se quiser praticar, nosso guia [como resolver quebra-cabeças de blocos deslizantes](/blog/how-to-solve-sliding-block-puzzles) apresenta estratégias.',
        'Escolha atividades que você realmente aprecia e mantenha os quebra-cabeças ao lado de movimento, descanso e tempo com outras pessoas, não no lugar deles.'
      ], bullets: ['Desconfie de jogos que prometem deixar você mais inteligente ou prevenir declínio.', 'Escolha quebra-cabeças porque gosta deles; o prazer ajuda a manter qualquer hábito.', 'Varie os desafios: problemas novos podem exigir mais do que repetir um que você já domina.', 'Mantenha quebra-cabeças junto com movimento, sono e convívio, não em substituição a eles.'] }
    },
    pullQuote: 'Um quebra-cabeça não precisa prometer benefícios médicos para valer a pena.',
    faqs: [
      { question: 'Jogos de quebra-cabeça melhoram a memória?', answer: 'A prática pode melhorar tarefas parecidas com as que você treina. As evidências de transferência para a memória cotidiana ou outras habilidades são limitadas.' },
      { question: 'Jogos cerebrais podem prevenir demência?', answer: 'Os estudos citados não demonstram que jogos comuns previnam demência. Desconfie de promessas amplas de saúde que vão além das evidências.' },
      { question: 'Por que há estudos que mostram pontuações cognitivas melhores?', answer: 'Estudos observacionais podem encontrar associação, mas não mostram qual fator veio primeiro. Pessoas com certas habilidades talvez também escolham jogar mais.' },
      { question: 'Vale a pena jogar quebra-cabeças mesmo assim?', answer: 'Sim. Diversão, desafio, curiosidade e uma pausa agradável são motivos suficientes, sem precisar tratar o jogo como treinamento médico.' }
    ]
  },
  'puzzle-games-for-older-adults': {
    title: 'Como escolher jogos de quebra-cabeça para pessoas idosas',
    dek: 'Texto legível, cores distinguíveis, ausência de pressa e custos claros: um guia para escolher quebra-cabeças acessíveis para pessoas mais velhas.',
    imageAlt: 'Uma pessoa mais velha joga um quebra-cabeça no celular junto a uma xícara de chá em um ambiente iluminado',
    tags: ['jogadores mais velhos', 'acessibilidade', 'quebra-cabeças', 'jogos para celular'],
    intro: 'Muita gente mais velha joga no celular e prefere quebra-cabeças, jogos de lógica, cartas e palavras. Ainda assim, letras pequenas, alvos difíceis de tocar, contraste fraco e cronômetros podem transformar um passatempo em uma tarefa frustrante. Este guia sugere o que verificar antes de escolher um jogo — e como testar os ajustes de acessibilidade em conjunto, respeitando as preferências de quem vai jogar.',
    keyTakeaways: ['Texto ampliável e controles confortáveis fazem diferença na tela pequena.', 'Símbolos junto às cores ajudam quando a visão das cores muda ou quando há daltonismo.', 'Sem cronômetro, animações controláveis e custos claros reduzem pressões desnecessárias.'],
    sections: {
      'who-plays': { title: 'Pessoas mais velhas fazem parte do público de jogos', paragraphs: [
        'Em 2023, uma pesquisa da AARP estimou que 45% dos americanos com 50 anos ou mais jogavam videogames — cerca de 52 milhões de pessoas — e 84% jogavam no celular. Quebra-cabeças e jogos de lógica eram os mais populares entre os jogadores, seguidos de cartas, peças e jogos de palavras; quase metade jogava todos os dias.',
        'Uma pesquisa complementar da AARP em 2024 abordou acessibilidade. Cerca de dois terços disseram que mudanças associadas à idade, especialmente na visão, influenciam a maneira como jogam, e metade encontrou ao menos um problema de acessibilidade. Entre os pedidos estavam texto ajustável, menos efeitos que distraem, controles simples e dificuldade configurável. Os números são dos Estados Unidos, mas as barreiras aparecem em muitos lugares.'
      ] },
      'readable': { title: 'Texto legível e botões fáceis de tocar', paragraphs: [
        'Em testes prolongados de usabilidade com pessoas acima de 65 anos, o Nielsen Norman Group identificou texto pequeno e alvos de toque como obstáculos frequentes; participantes mais velhos cometeram mais erros nas mesmas tarefas que os mais jovens. Um nível pode ser fácil de resolver, mas difícil de enxergar; um botão que falha ao toque transforma um passatempo tranquilo em tarefa.',
        'A Apple recomenda controles de 44 × 44 pontos no iPhone e iPad e incentiva ampliação de texto, idealmente com Dynamic Type. As diretrizes de acessibilidade para sites definem 24 × 24 pixels como mínimo e 44 × 44 no nível mais rigoroso. Não é preciso medir: se você toca duas vezes ou aperta os olhos, os elementos estão pequenos demais.',
        'Um teste rápido é aumentar o texto do sistema: no iPhone ou iPad, abra Ajustes, Acessibilidade, Tela e Tamanho do Texto e Texto Maior. Depois abra o jogo. Apps bem projetados acompanham o ajuste; outros o ignoram. No OutBrick, o texto aumenta nas telas e as peças no iPad são grandes o bastante para tocar com conforto.'
      ] },
      'colour': { title: 'Cores fáceis de distinguir', paragraphs: [
        'A percepção das cores muda com a idade, às vezes de formas inesperadas. O cristalino fica mais amarelado, e algumas cores difíceis de separar tendem a ser azuis, roxas e certos tons de amarelo e verde — não apenas o par vermelho e verde associado ao daltonismo. Tamura e Sato observaram que adultos mais velhos demoravam muito mais para encontrar um alvo que diferia do fundo apenas no eixo azul-amarelo.',
        'Isso importa em jogos de classificação e combinação que dependem dessas tonalidades. Procure uma segunda pista: símbolo, formato ou padrão em cada peça. O ajuste Diferenciar sem Cor da Apple, em Tela e Tamanho do Texto, solicita isso aos apps. No OutBrick, o modo para pessoas daltônicas vem ativado por padrão e coloca um símbolo diferente em cada peça e porta. Saiba mais em [por que a cor nunca deve ser a única pista](/blog/color-shape-accessibility).'
      ] },
      'no-rush': { title: 'Sem cronômetro, correria ou surpresas', paragraphs: [
        'Uma contagem regressiva pode ser pouco acolhedora para quem prefere pensar com calma. Procure fases sem cronômetro ou com limite de movimentos, que permite refletir. O OutBrick não tem relógio e mostra o limite de movimentos antes da primeira jogada.',
        'Confira também as animações. Prêmios piscando, tremores e transições com zoom podem cansar e incomodar. No iPhone ou iPad, Ajustes → Acessibilidade → Movimento → Reduzir Movimento troca movimentos e zooms por transições suaves em apps compatíveis. O OutBrick respeita essa configuração.',
        'Por fim, confira como o jogo é financiado. Anúncios automáticos, ofertas após uma derrota e convites para comprar podem surpreender ou ser tocados sem querer. O custo precisa estar claro. A página inicial do OutBrick explica [quanto custam vidas, ações de desfazer e anúncios](/#fair): os anúncios são vídeos premiados que só começam depois que a pessoa toca no botão.'
      ] },
      'checklist': { title: 'Uma lista para os primeiros dez minutos', paragraphs: [
        'Está preparando o jogo para alguém? Façam isso juntos e deixem a pessoa escolher como quer ver e usar o app. Ativem os recursos de acessibilidade, conectem a conta Apple dela para salvar o progresso e joguem lado a lado. Jogos apreciados em companhia podem se tornar um hábito compartilhado. E vale dizer com clareza: quebra-cabeças são diversão, não medicamento. Também analisamos [o que a pesquisa diz sobre jogos de quebra-cabeça e cérebro](/blog/are-puzzle-games-good-for-your-brain).'
      ], bullets: ['O texto aumenta quando você ativa Texto Maior?', 'Você consegue tocar cada botão na primeira tentativa, inclusive os pequenos nos cantos?', 'Cada peça pode ser reconhecida pelo formato ou símbolo, não apenas pela cor?', 'As fases normais não têm cronômetro?', 'O jogo respeita a opção Reduzir Movimento?', 'Algo toca, aparece ou pede dinheiro sem você pressionar um botão?', 'Você pode parar a qualquer momento sem perder nada?', 'O jogo funciona offline para que um sinal fraco não atrapalhe?'] }
    },
    pullQuote: 'O melhor ajuste é o que deixa a pessoa jogar do jeito que prefere.',
    faqs: [
      { question: 'Que tipo de quebra-cabeça funciona bem para pessoas mais velhas?', answer: 'Procure controles simples, texto ampliável, contraste nítido, símbolos além das cores e uma opção para pensar sem cronômetro.' },
      { question: 'Como aumento o texto no iPhone ou iPad?', answer: 'Acesse Ajustes → Acessibilidade → Tela e Tamanho do Texto → Texto Maior e ajuste o tamanho. Nem todo app respeita a configuração.' },
      { question: 'Por que símbolos além das cores ajudam?', answer: 'A percepção de algumas cores pode mudar com a idade, e algumas pessoas têm daltonismo. Símbolos ou formas oferecem outra maneira de distinguir peças.' },
      { question: 'Quebra-cabeças são tratamento para a memória?', answer: 'Não devem ser tratados como medicamento ou terapia. Jogar pode ser agradável e estimular uma tarefa específica, mas não há base para promessas gerais de prevenção ou tratamento.' }
    ]
  },
  'history-of-sliding-block-puzzles': {
    title: 'Uma breve história dos quebra-cabeças de blocos deslizantes',
    dek: 'Do quebra-cabeça de 15 peças à febre do Rush Hour, veja como jogos de blocos deslizantes evoluíram e por que continuam difíceis.',
    imageAlt: 'Peças de quebra-cabeça de madeira deslizam em um tabuleiro compacto com uma saída lateral',
    tags: ['história dos jogos', 'quebra-cabeças deslizantes', 'Rush Hour', 'jogos de lógica'],
    intro: 'Um quadro cheio de peças e pouco espaço: só é possível mover uma peça para dentro do espaço vazio. Essa ideia simples deu origem a quebra-cabeças que atravessaram séculos, de peças numeradas a carros presos em uma grade. A história inclui uma febre mundial, uma alegação de autoria que não resistiu à pesquisa e problemas que continuam difíceis até para computadores. O OutBrick pertence à família em que cada bloco precisa encontrar uma saída.',
    keyTakeaways: ['O quebra-cabeça de 15 peças popularizou os jogos de deslizar no fim do século XIX.', 'Rush Hour transformou a ideia de liberar um bloco em um jogo moderno de carros.', 'Esses problemas podem ser difíceis até para computadores; validar uma solução importa.'],
    sections: {
      'before-the-craze': { title: 'Antes da febre', paragraphs: [
        'A ideia central é um quadro com peças e espaço insuficiente: uma peça desliza para o espaço vazio. Ela já aparecia em papel antes da versão mais famosa. Uma patente americana concedida a Ernest Kinsey em 1878 descreveu blocos que deslizam em um quadro com um único espaço vazio.',
        'O jogo que popularizou o formato foi o quebra-cabeça de 15 peças: quinze peças numeradas em um tabuleiro quatro por quatro, com um espaço vazio. Pesquisas históricas de Jerry Slocum e Dic Sonneveld, reunidas no livro The 15 Puzzle, de 2006, remontam a Noyes Chapman, chefe dos correios de Canastota, no estado de Nova York. Versões eram vendidas como Gem Puzzle no fim de 1879.'
      ] },
      'fifteen-craze': { title: '1880: o ano do quebra-cabeça de 15 peças', paragraphs: [
        'Nos primeiros meses de 1880, o jogo virou febre. Em poucas semanas, espalhou-se pelos Estados Unidos e depois pela Europa, chegando a escritórios, salas de estar e jornais. Os relatos divergem sobre as datas exatas; na primavera já era onipresente e no verão perdeu força. Chapman pediu uma patente, que foi negada; a razão não é certa, mas patentes anteriores talvez já cobrissem a ideia.',
        'Algumas posições pareciam impossíveis — e eram mesmo. Em 1879, William Woolsey Johnson e William Story publicaram no American Journal of Mathematics uma demonstração de que exatamente metade das posições não tem solução. Cada deslize preserva uma propriedade de paridade; se a posição inicial tiver a paridade errada, ela nunca será alcançada.',
        'Isso explica o exemplo mais famoso: troque apenas as peças 14 e 15 de um tabuleiro resolvido. Parece faltar um único movimento para terminar, mas a posição é inalcançável.'
      ] },
      'sam-loyd': { title: 'A alegação que enganou todo mundo', paragraphs: [
        'Durante boa parte do século XX, o quebra-cabeça de 15 peças foi atribuído a Sam Loyd, famoso autor de desafios nos Estados Unidos. Ele dizia tê-lo inventado e oferecia um prêmio para quem resolvesse a troca impossível entre 14 e 15. Slocum e Sonneveld descobriram que a primeira alegação apareceu em 1891, mais de dez anos depois da febre, e persistiu até a morte de Loyd, em 1911. Não há evidências de que ele tenha inventado o jogo ou de que o prêmio tenha existido em 1880.',
        'A história persistiu por causa da fama de Loyd, da reimpressão de seus livros e de relatos posteriores. Como qualquer história, a dos quebra-cabeças também precisa ser conferida nos documentos.'
      ] },
      'get-one-block-out': { title: 'De ordenar peças a tirar um bloco pela saída', paragraphs: [
        'A geração seguinte mudou o objetivo. Em vez de ordenar peças, era preciso levar um bloco grande até uma saída entre blocos menores. Uma patente solicitada por Lewis W. Hardy em 1907 e concedida em 1912 descreve dez blocos de vários tamanhos dentro de uma caixa, movidos apenas por deslizes. Um modelo semelhante foi vendido como Pennant Puzzle.',
        'Vieram jogos parecidos com vários nomes. O Smithsonian conserva o Dad’s Puzzler, patenteado em 1926, com um quadrado grande, retângulos e dois quadrados pequenos. Essa família é conhecida como Klotski; na China, Huarong Dao conta a história de um general escapando de uma emboscada. Dependendo da forma de contar, soluções mínimas clássicas chegam a cerca de 80 movimentos.',
        'Na década de 1990 surgiu uma versão moderna de grande sucesso. Nob Yoshigahara, do Japão, criou Tokyo Parking, um quebra-cabeça de carros deslizantes; a Binary Arts, mais tarde ThinkFun, lançou-o nos Estados Unidos como Rush Hour, em 1996. Carros e caminhões ocupam uma grade pequena e precisam ser movidos para liberar o carro do jogador. Cartas com dificuldade gradual fizeram do jogo uma presença comum em escolas e famílias.'
      ] },
      'hard-for-computers': { title: 'Difíceis até para computadores', paragraphs: [
        'Parecem brinquedos, mas são objetos sérios da ciência da computação. Só em 1999 se estabeleceu que qualquer posição solucionável do quebra-cabeça de 15 peças pode ser resolvida em no máximo 80 movimentos de uma peça. Korf e Schultze confirmaram o resultado com uma busca de 28 dias que encontrou exatamente dezessete posições que exigiam os 80 movimentos.',
        'Em 2002, Gary Flake e Eric Baum provaram que Rush Hour generalizado para tabuleiros de qualquer tamanho é PSPACE-completo, uma classe considerada mais difícil que os conhecidos problemas NP-completos. Robert Hearn e Erik Demaine mostraram em 2005 que quebra-cabeças gerais de blocos deslizantes também são PSPACE-completos, mesmo usando apenas dominós pequenos e iguais. Não há atalho conhecido para resolver rapidamente todos os tabuleiros — por isso um bom quebra-cabeça continua interessante.'
      ] },
      'where-outbrick-fits': { title: 'Onde o OutBrick se encaixa', paragraphs: [
        'O OutBrick pertence à família em que blocos precisam sair do tabuleiro, com uma variação: cada peça tem um destino próprio. Ela desliza até algo pará-la e só sai pela porta da sua cor. Resolver o tabuleiro exige encontrar uma ordem de movimentos, como nos jogos de Hardy e Yoshigahara.',
        'Os jogadores de 1880 teriam invejado as ferramentas atuais. Um solucionador verificou cada um dos 2.000 tabuleiros do OutBrick antes da publicação, para que ninguém encontre uma troca impossível entre 14 e 15. Nosso guia [como resolver quebra-cabeças de blocos deslizantes](/blog/how-to-solve-sliding-block-puzzles) apresenta estratégias; você também pode [experimentar um tabuleiro no navegador](/play).'
      ], bullets: ['Fim da década de 1870: blocos deslizantes em um quadro aparecem em patentes dos Estados Unidos.', 'Fim de 1879: o quebra-cabeça de 15 peças é vendido; Johnson e Story provam que metade das posições não tem solução.', '1880: a febre do quebra-cabeça de 15 peças se espalha pelos Estados Unidos e pela Europa.', '1891: Sam Loyd afirma pela primeira vez que inventou o jogo.', '1907–1912: a patente de Hardy descreve o quebra-cabeça de tirar um bloco.', '1996: Rush Hour é lançado nos Estados Unidos.', '2002–2005: Rush Hour e os quebra-cabeças gerais de blocos deslizantes são demonstrados PSPACE-completos.'] }
    },
    pullQuote: 'Não há atalho conhecido que resolva rapidamente todos os tabuleiros.',
    faqs: [
      { question: 'Quem inventou o quebra-cabeça de 15 peças?', answer: 'Pesquisas históricas apontam para Noyes Chapman, que desenvolveu versões em 1879. A atribuição posterior a Sam Loyd não é sustentada por evidências de que ele tenha criado o jogo.' },
      { question: 'Por que a troca das peças 14 e 15 é impossível?', answer: 'Os deslizes preservam uma propriedade de paridade. A troca deixa o tabuleiro na classe oposta, então nenhuma sequência de movimentos pode resolvê-lo.' },
      { question: 'O que é Rush Hour?', answer: 'É um quebra-cabeça de carros deslizantes em que você move veículos em uma grade para liberar a saída do carro principal. Foi publicado nos Estados Unidos em 1996.' },
      { question: 'O OutBrick tem solução em todos os tabuleiros?', answer: 'Os 2.000 tabuleiros publicados foram verificados por um solucionador antes do lançamento. Isso confirma uma rota válida, não que todos terão a mesma dificuldade ou diversão.' }
    ]
  },
  'verifying-2000-sliding-block-boards': {
    title: 'Como verificamos os 2.000 tabuleiros de blocos deslizantes',
    dek: 'O OutBrick verifica tabuleiros com as regras reais, busca uma rota e a reproduz desde o início. Veja o que essa checagem prova — e o que não prova.',
    imageAlt: 'Um tabuleiro de blocos deslizantes no celular ao lado de uma lista de verificação e peças coloridas',
    tags: ['quebra-cabeças', 'verificação de software', 'solucionadores', 'design de jogos', 'quebra-cabeças de blocos deslizantes'],
    intro: 'Um solucionador só é confiável se obedecer às mesmas regras do jogo. No OutBrick, isso significa considerar peças que deslizam até uma parede, outra peça ou uma porta da cor errada, além de chaves, gelo, geradores e esteiras. Encontrar uma rota não basta: reproduzimos cada movimento desde o tabuleiro original para verificar se a sequência realmente funciona. Esse processo conferiu os 2.000 tabuleiros publicados, mas provar que existe uma solução não prova que o desafio é divertido ou bem dosado.',
    keyTakeaways: ['O solucionador usa o mesmo motor de regras que o jogo para evitar divergências.', 'Cada rota encontrada é reproduzida desde o estado inicial e cada transição é conferida.', '“Solucionável” comprova uma rota válida, não a dificuldade, a justiça percebida ou a diversão.'],
    sections: {
      'one-rules-engine': { title: 'Comece com um único motor de regras', paragraphs: [
        'Um solucionador só ajuda se sua interpretação dos movimentos corresponder ao jogo. Uma peça desliza até a parede, outra peça ou uma porta que não aceita sua cor. O OutBrick também tem estados adicionais: chaves mudam portas, o gelo precisa de vários deslizes e geradores introduzem peças à espera. Uma implementação simplificada deixaria erros possíveis exatamente onde mais importam.',
        'Por isso, a busca pede ao próprio motor do jogo os movimentos legais e usa o mesmo código de transição. A chave do estado também inclui o estado das portas e um contador de movimentos quando portas cíclicas ou temporizadas o tornam relevante. Dois tabuleiros visualmente iguais, mas com portas em estados ativos diferentes, precisam continuar sendo estados de busca distintos.'
      ] },
      'search-finds-route': { title: 'A busca encontra uma rota, não necessariamente a perfeita', paragraphs: [
        'O solucionador usa A* ponderado. Sua heurística ExitTable calcula quantos deslizes cada peça exigiria para sair pela porta adequada caso as demais peças fossem removidas. Esse tabuleiro simplificado é mais barato de analisar e oferece uma estimativa útil do trabalho restante. Dar mais peso à heurística favorece encontrar uma solução rapidamente.',
        'Essa escolha tem um limite: não garante que a rota encontrada tenha o menor número de movimentos. A busca também pode alcançar o limite de nós. Nesse caso, o resultado é desconhecido, não impossível. Só esgotar todo o espaço de estados alcançáveis permite concluir que não há solução. Distinguir esses resultados evita transformar um atraso ou cancelamento em uma afirmação falsa sobre o tabuleiro.'
      ] },
      'replay-the-witness': { title: 'Reproduza a prova desde o tabuleiro original', paragraphs: [
        'Encontrar uma sequência não é a verificação final. Para cada tabuleiro criado, guardamos uma prova: a sequência de movimentos entre o estado inicial e a conclusão. A reprodução começa em um estado novo, confere a validade da prova e aplica cada movimento pelas regras reais. Um movimento ilegal encerra a verificação com falha.',
        'O verificador também executa cada movimento outra vez a partir do mesmo estado anterior e compara estado resultante, eventos e resultado, para detectar transições inconsistentes. Depois de cada jogada, confere se cada peça continua em uma célula válida e se nenhuma ocupa a mesma célula que outra. No final, o tabuleiro precisa estar realmente vazio. Uma sequência plausível que deixa uma peça para trás não serve.'
      ] },
      'solvable-isnt-difficulty': { title: 'Ter solução não garante um bom ritmo', paragraphs: [
        'Uma sequência legal prova que existe um caminho. Não prova que uma pessoa vai encontrá-lo, considerá-lo justo ou sentir a dificuldade desejada. A solução do computador também não demonstra o menor número possível de movimentos. São questões separadas: reproduzir o conjunto inteiro verifica correção; ritmo e dificuldade são avaliados à parte.',
        'O limite de movimentos também precisa permitir a rota verificada. A pessoa pode pensar quanto tempo precisar: o limite conta movimentos, e o OutBrick não tem cronômetro. Assim, o quebra-cabeça mantém pressão sem transformar a validação em uma corrida.'
      ] },
      'repeatable-release-check': { title: 'Uma verificação repetível antes de publicar', paragraphs: [
        'O resultado útil não é “o solucionador rodou uma vez”, mas que cada tabuleiro tinha uma prova reproduzida corretamente conforme as regras publicadas. Se uma regra ou um tabuleiro mudar, o conjunto pode ser verificado outra vez. O primeiro movimento que falhar indica o problema: legalidade, determinismo, geometria ou condição final.',
        'Foi assim que conferimos os 2.000 tabuleiros do OutBrick antes da publicação. Experimente esse tipo de quebra-cabeça no [tabuleiro gratuito no navegador](/play) ou [baixe o OutBrick para iPhone e iPad](https://apps.apple.com/us/app/outbrick/id6807997465).'
      ] }
    },
    pullQuote: 'Solucionável prova que existe uma rota; não prova que o tabuleiro é divertido.',
    faqs: [
      { question: 'Como o OutBrick verificou os 2.000 tabuleiros?', answer: 'Um solucionador usou o motor de regras do jogo para encontrar rotas; cada sequência foi reproduzida desde o estado original, movimento por movimento.' },
      { question: 'O que significa quando a busca retorna “desconhecido”?', answer: 'A busca pode atingir seu orçamento antes de explorar todas as possibilidades. Isso não prova que o tabuleiro seja impossível; é diferente de esgotar todo o espaço de estados.' },
      { question: 'A verificação prova que um tabuleiro é fácil ou divertido?', answer: 'Não. Ela confirma uma rota legal. Dificuldade, justiça percebida e diversão são avaliadas separadamente.' }
    ]
  }
};
