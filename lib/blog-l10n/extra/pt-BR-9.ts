import type { ExtraGuides } from '../../i18n/blog';
import { appStoreUrl } from '../../app-store-url.ts';

export const ptBR9: ExtraGuides = {
  'water-sort-vs-block-sort': {
    title: 'Ordenar água ou blocos: qual combina com você?',
    dek: 'Compare quebra-cabeças de capacidade e rotas, veja exemplos práticos e entenda os limites das pesquisas sobre cada estilo.',
    imageAlt: 'Blocos coloridos e personagens de OutBrick em um tabuleiro azul-marinho',
    tags: ['jogos de quebra-cabeça', 'ordenar blocos', 'design de jogos', 'hábitos de jogo'],
    intro: 'Um tubo quase organizado ainda pode ser o lugar errado para despejar. Um bloco ao lado da saída da mesma cor também pode estar na posição errada para sair. Jogos de ordenar água e blocos fazem a combinação de cores parecer simples, mas escondem a decisão interessante na ordem dos movimentos. O recurso que você administra é diferente: espaço dentro dos recipientes em um caso, rotas e pontos de parada no outro. Este guia compara essas decisões sem declarar um vencedor. Para ordenar água, usamos as regras publicadas de Water Sort Puzzle, da IEC Global; para blocos deslizantes, usamos a regra de deslizar até parar dos tabuleiros clássicos do OutBrick, que os tabuleiros no navegador mantêm. Outros jogos com esses nomes podem funcionar de outro jeito. Como criamos o OutBrick, nossos exemplos refletem essa perspectiva, não uma alegação de testes independentes.',
    keyTakeaways: [
      'Quebra-cabeças de água perguntam onde o líquido pode ser despejado; os de blocos perguntam quais rotas e pontos de parada você consegue criar.',
      'Um tubo vazio e uma casa vazia têm funções diferentes. Preserve o espaço necessário para a próxima etapa em vez de combinar cores em toda oportunidade.',
      'Escolha pelas decisões que você gosta e pela interface que consegue usar com conforto. As pesquisas não demonstram que um desses estilos melhora a cognição.',
    ],
    sections: {
      'different-things-to-move': {
        title: 'Primeiro, entenda o que cada movimento significa',
        paragraphs: [
          'A descrição de Water Sort Puzzle, da IEC Global, diz que você toca em um copo para despejar líquido em outro; é preciso combinar a cor e haver espaço no recipiente de destino. O objetivo é agrupar cada cor em seu próprio copo. É esse conjunto de regras que discutimos aqui, não uma promessa sobre todo aplicativo de ordenar água. A página também menciona reiniciar uma fase e jogar sem cronômetro. Isso é um bom ponto de partida, mas não esclarece todos os detalhes, como a quantidade transferida por toque (IEC Global Pty Ltd, s.d.).',
          'Nos tabuleiros clássicos do OutBrick, você move o bloco diretamente. Ele desliza até algo pará-lo e sai por uma porta da mesma cor. Você não arrasta o bloco até qualquer casa que escolher. Um corredor livre pode deixá-lo avançar mais do que você pretendia; outro bloco pode criar o ponto de parada necessário. (O jogo da App Store agora usa o Slide & Match: o bloco para onde você solta e pode trocar de lugar para formar combinações.) Nosso [guia de quebra-cabeças de blocos deslizantes](/blog/how-to-solve-sliding-block-puzzles) explica essa diferença e apresenta uma abordagem mais ampla para resolvê-los.',
          'Os dois são quebra-cabeças de organização por cor, mas esse rótulo descreve o destino, não todo o percurso. Despejar muda quais camadas ficam acessíveis no topo de um recipiente. Deslizar muda a disposição dos obstáculos em um tabuleiro compartilhado. Antes de achar um jogo confuso, tente explicar em voz alta a regra de movimento. Fazer uma previsão correta é um primeiro marco melhor do que terminar rápido.',
          'Outras variantes podem ter regras de movimento, restrições ou recipientes diferentes. Consulte o tutorial do próprio jogo antes de aplicar dicas de um quebra-cabeça parecido.',
        ],
      },
      'capacity-example': {
        title: 'Ordenar água: a capacidade livre faz parte da solução',
        paragraphs: [
          'Considere este exemplo ilustrativo de uma variante comum que permite despejar em um tubo vazio. O tubo A tem uma camada azul no topo e uma vermelha escondida abaixo. O tubo B também tem azul no topo, mas está cheio. O tubo C está vazio. Não dá para despejar de A em B só porque as cores do topo combinam: B precisa ter espaço. Passar o azul de A para C pode revelar o vermelho e criar outra oportunidade. O exemplo mostra uma dependência; não representa uma fase garantida do jogo da IEC Global.',
          'É tentador tratar todo tubo vazio como um lugar para despejar alguma coisa logo. Em vez disso, pergunte qual cor escondida você quer revelar e para onde a camada superior precisa ir para isso acontecer. Um recipiente livre vale justamente por permitir uma disposição intermediária. Preenchê-lo com uma camada sem relação pode eliminar o único destino viável para o movimento que você preparava.',
          'Agora mude o exemplo: B tem espaço para receber o azul, então A pode despejá-lo diretamente, seguindo a regra de combinação descrita. C pode continuar disponível para reorganizar as peças depois. O movimento visível é mais simples, mas a pergunta continua: o que ficará acessível em seguida? Nossas [dicas para quebra-cabeças de organização por cor](/blog/colour-sort-puzzle-tips) desenvolvem esse hábito de pensar além da combinação mais óbvia.',
          'Ito et al. (2023) formalizaram quebra-cabeças de ordenar bolas e água, demonstraram equivalência de solucionabilidade no modelo deles e provaram que os problemas generalizados são NP-completos. O resultado trata de regras específicas baseadas em pilhas, não de todas as variantes comerciais. Ele explica por que regras simples de despejo podem exigir planejamento, mas não prova que o tabuleiro ilustrado seja difícil nem que o OutBrick tenha a mesma complexidade. A questão prática é se você gosta de administrar o acesso às cores escondidas e a capacidade livre.',
        ],
      },
      'route-example': {
        title: 'Ordenar blocos: um obstáculo pode servir de freio',
        paragraphs: [
          'Imagine que um bloco vermelho precise se alinhar com uma porta vermelha na borda direita. Se deslizar para cima por uma coluna vazia, ele passa da linha em que deveria virar. Um bloco azul acima dessa linha poderia pará-lo na altura certa. Portanto, a tarefa imediata é posicionar o azul, embora o vermelho pareça mais perto da saída. É uma situação ilustrativa dos tabuleiros clássicos do OutBrick, não a solução de uma fase numerada.',
          'Quando o vermelho se alinha, pode surgir outra dependência: o azul talvez também precise daquele corredor para chegar à própria porta. Tirar o vermelho cedo demais pode remover um ponto de parada de que o azul ainda precisa. Ao contrário do tubo livre no exemplo anterior, o recurso aqui é uma posição e sua relação com uma rota. Mais espaço vazio não significa automaticamente uma posição melhor. Às vezes, a disposição só funciona porque algo ocupa a casa certa.',
          'Kirsh e Maglio (1994) estudaram Tetris e distinguiram ações que avançam em direção ao objetivo daquelas que revelam informações difíceis de calcular mentalmente. Eles não testaram OutBrick nem jogos de ordenar água. Usamos essa distinção para interpretar uma tentativa: um movimento pode mostrar onde o bloco para mesmo sem melhorar a rota. “Parou uma linha acima do necessário” é uma observação útil, não um julgamento sobre sua capacidade.',
          'Experimente um tabuleiro na nossa [página de jogo no navegador](/play) e preveja onde o bloco vai parar antes de movê-lo. Depois, compare a previsão com o resultado. Para analisar a disposição com mais cuidado, o [guia para ler o tabuleiro antes de mover](/blog/how-to-read-a-puzzle-before-moving) ajuda a identificar saídas e dependências. Esse teste é sobre seu interesse por rotas espaciais, não sobre a rapidez com que domina um jogo novo.',
        ],
      },
      'compare-the-experience': {
        title: 'Compare a experiência para além do tabuleiro',
        paragraphs: [
          'Uma preferência por mecânicas pode ser prejudicada por uma interface que dificulta a leitura das peças. Nos jogos de líquidos, você consegue distinguir as camadas do topo e avaliar a capacidade restante na distância em que costuma jogar? Nos jogos de blocos, identifica o bloco desejado, a porta correspondente e o obstáculo que vai pará-lo? Teste no telefone que pretende usar, em vez de julgar por imagens promocionais ampliadas.',
          'Larkin e Simon (1987) compararam representações em diagramas e em frases por meio de modelos e problemas ilustrativos de matemática e física. A análise mostrou como posição e agrupamento explícito podem mudar o esforço necessário para encontrar informações, mesmo quando as informações são equivalentes. Não foi um teste de capturas de tela de jogos. Aplicamos a ideia observando o que o tabuleiro deixa fácil de ver: a cor superior e a capacidade de um tubo, ou a relação entre bloco, obstáculo e porta.',
          'Da mesma forma, jogar sem cronômetro descreve o ritmo, não todo o modelo comercial. A versão atual do OutBrick tem limites e metas de movimentos, vidas e anúncios com recompensa opcionais. O primeiro desfazer em cada tabuleiro do app é grátis. Nossa [explicação sobre jogo justo](/#fair) descreve esses custos. A página da IEC Global informa que o download é gratuito e há compras no app, mas isso não esclarece a frequência ou o formato de cada anúncio. Este guia não compara preços nem interrupções com base em testes práticos.',
          'Kotovsky et al. (1985) investigaram por que versões da Torre de Hanói diferiam em dificuldade, considerando fatores como regras, representação e exigências de memória. Eram tarefas diferentes das dos dois aplicativos. A ressalva relevante é que um objetivo abstrato em comum não torna duas apresentações igualmente fáceis de entender. Se um quebra-cabeça parece mais claro, observe quais decisões e pistas ajudam você em vez de declarar todo um gênero superior. Nenhum desses estudos demonstra vantagem médica ou cognitiva por jogar esses aplicativos.',
        ],
      },
      'choose-with-a-small-test': {
        title: 'Escolha com um teste curto e justo',
        paragraphs: [
          'Dê a cada estilo a chance de ensinar sua regra básica e depois faça três perguntas concretas: consigo prever um movimento comum? Gosto da pergunta que fica depois de uma tentativa que não deu certo? Eu toparia experimentar outro tabuleiro? Essas perguntas ajudam a separar a estranheza inicial de uma incompatibilidade duradoura e evitam usar a primeira fase difícil como veredito sobre o gênero inteiro.',
          'Em ordenar água, observe se você gosta de revelar cores e preservar espaço nos recipientes. Em ordenar blocos, veja se gosta de organizar rotas e freios temporários. Talvez prefira as pilhas visuais mais claras dos tubos, o movimento tátil dos blocos ou simplesmente os controles mais confortáveis. Basta escolher o problema sobre o qual você quer pensar.',
          'Compare os dois estilos em condições parecidas e sem competição cronometrada. Observar alguns movimentos de propósito pode revelar melhor se combinam com você do que insistir em um jogo de que já não gosta.',
          `Se o exemplo de blocos deslizantes parece interessante, comece pelos [tabuleiros do OutBrick no navegador](/play). Para conhecer o app completo, [encontre o OutBrick na App Store](${appStoreUrl('journal-water-sort')}) e confira os requisitos do aparelho e as informações de compra atuais. Se prefere despejar líquidos, use o nome na página da loja indicada abaixo para identificar o aplicativo certo. Um bom resultado é encontrar um quebra-cabeça ao qual você queira voltar, inclusive optar por gostar dos dois.`,
          'Fonte sobre o produto: IEC Global Pty Ltd. (s.d.). Water Sort Puzzle [Aplicativo móvel]. App Store. Consultado em 30 de setembro de 2026 em [página de Water Sort Puzzle](https://apps.apple.com/gb/app/water-sort-puzzle/id1514542157). A comparação de regras usa a descrição fornecida pelo desenvolvedor; os exemplos de planejamento são ilustrações nossas.',
        ],
      },
    },
    pullQuote: 'Mais espaço vazio não significa automaticamente uma posição melhor.',
    faqs: [
      { question: 'Qual é a principal diferença entre ordenar água e blocos?', answer: 'Os quebra-cabeças de água organizam líquidos coloridos entre recipientes conforme regras de capacidade e combinação. Nos tabuleiros clássicos do OutBrick, blocos deslizam pelo tabuleiro até portas da mesma cor, e cada movimento continua até algo pará-los; o jogo da App Store agora soma trocas e combinações.' },
      { question: 'Um tubo vazio equivale a uma casa vazia no quebra-cabeça de blocos?', answer: 'Ambos podem permitir um movimento futuro, mas têm funções diferentes. O tubo recebe o líquido; uma casa vazia ajuda a definir uma rota, enquanto uma casa ocupada pode servir como ponto de parada.' },
      { question: 'Qual estilo de quebra-cabeça é melhor para o cérebro?', answer: 'As pesquisas citadas não demonstram superioridade cognitiva de nenhum dos estilos. Escolha pelas mecânicas, legibilidade, ritmo e custos que combinam com você.' },
      { question: 'Posso experimentar o OutBrick antes de baixar?', answer: 'A [página de jogo do OutBrick](/play) oferece alguns tabuleiros no navegador. Ela demonstra a regra clássica de deslizar, mas não representa o app completo nem promete sincronizar o progresso.' },
    ],
  },
  'block-puzzles-online-no-download': {
    title: 'Jogue quebra-cabeças de blocos sem baixar o app',
    dek: 'Experimente os tabuleiros do OutBrick no navegador. Veja os controles, a rotação diária, a pontuação e as diferenças para o jogo completo.',
    imageAlt: 'Blocos coloridos e personagens de OutBrick em um tabuleiro azul-marinho',
    tags: ['jogos de quebra-cabeça', 'ordenar blocos', 'desafios diários', 'acessibilidade', 'design de jogos'],
    intro: 'Você quer mover alguns blocos, não instalar mais um aplicativo. Um quebra-cabeça no navegador pode responder a uma pergunta útil: gosto desse tipo de desafio? O OutBrick tem tabuleiros jogáveis no site, além do app separado na App Store. Assim, você experimenta a regra de deslizar diretamente, sem tratar capturas de tela da loja como substitutas da experiência. Este guia explica por onde começar, como funcionam os controles da web, o que significa o tabuleiro diário e onde termina a experiência no navegador. É um guia do nosso próprio site, conferido em 30 de setembro de 2026, não uma classificação de todos os serviços de quebra-cabeça sem download. A pequena versão web é uma introdução útil por si só; ela não reproduz o app completo.',
    keyTakeaways: [
      'Abra /play para uma introdução curta ou /daily para o tabuleiro compartilhado escolhido pela data; nenhum dos dois exige instalar o app.',
      'O tabuleiro diário muda à meia-noite UTC, alternando entre um conjunto fixo. Ele não é gerado do zero todos os dias.',
      'Pontuação, controles e reinícios no navegador ajudam a conhecer a regra. Não presuma que o progresso web será salvo ou sincronizado com o app.',
    ],
    sections: {
      'where-to-start': {
        title: 'Comece pelo tabuleiro que combina com seu objetivo',
        paragraphs: [
          'Para conhecer o jogo, abra o [guia de jogo do OutBrick](/play). Ele oferece um percurso jogável por três tabuleiros: começa com uma introdução tranquila e depois apresenta disposições em que a regra de parada faz diferença. Você não está escolhendo o nível de dificuldade do app inteiro. Está testando se mover blocos até portas correspondentes é fácil de entender e interessante o bastante para tentar de novo.',
          'A regra central é simples: deslize um bloco, deixe-o seguir até algo pará-lo e mande-o sair pela porta da mesma cor. O planejamento depende de como as peças atrapalham ou ajudam umas às outras. Combinar vermelho com vermelho é só parte da tarefa. Talvez seja preciso reposicionar outro bloco para que o vermelho pare na linha certa antes de virar em direção à saída.',
          'Se você já entendeu a regra, use o [tabuleiro diário](/daily) para jogar uma disposição compartilhada. Todas as pessoas que acessam a página na mesma data UTC recebem o mesmo tabuleiro. Assim, você tem um quebra-cabeça específico para conversar com alguém, em vez de depender de terem aberto fases parecidas por acaso. Não é preciso transformar o desafio compartilhado em uma corrida.',
          'Andersen et al. (2012) estudaram tutoriais em três jogos com mais de 45.000 participantes. Os efeitos variaram conforme o jogo e sua complexidade; o estudo não concluiu que um formato de ensino sempre ajuda. Os autores não testaram este site. Para sua experiência, pergunte se o tabuleiro introdutório explica a regra de movimento o bastante para você avaliá-la. Terminar todo o percurso é opcional; concluir que outra mecânica combina mais com você também é um bom resultado.',
        ],
      },
      'controls-and-feedback': {
        title: 'Use os controles para testar uma previsão',
        paragraphs: [
          'Em uma tela sensível ao toque ou com o ponteiro do mouse, arraste o bloco na direção desejada. O gesto define a direção; não garante que a peça pare onde seu dedo termina. No teclado, use Tab para selecionar um bloco e depois Shift com uma tecla de seta. Observe onde ele realmente para antes de escolher a próxima direção.',
          'Comece com uma previsão que possa conferir: “O bloco amarelo deve parar ao lado daquele azul”. Faça o movimento e compare o resultado. Se o movimento for bloqueado, examine o tabuleiro em vez de repetir a mesma tentativa. O obstáculo pode ser outro bloco, a borda ou uma porta de cor diferente. Um movimento recusado e um movimento com resultado inesperado são observações distintas.',
          'Cao e Liu (2022) revisaram tutoriais dentro de jogos e fizeram um estudo-piloto sobre tutoriais implícitos. O trabalho trata a orientação como algo moldado pela maneira como as pessoas encontram o jogo; não prova que uma interface sem explicações seja melhor. Também não avaliou nossos controles no navegador. Aqui, um primeiro movimento deliberado ajuda a conferir o significado das instruções. Se você não consegue selecionar a peça pretendida com conforto, resolva esse problema de entrada antes de concluir que o quebra-cabeça é difícil demais.',
          'O tabuleiro associa cores a símbolos nos blocos e nas portas, oferecendo informação além do tom. Mesmo assim, avalie a legibilidade no tamanho e na distância em que costuma jogar. Se estiver difícil de usar, nossas [informações de acessibilidade](/accessibility) explicam o produto, e a página de [suporte](/support) permite relatar o problema. Inclua navegador, aparelho e ação tentada; um relato específico é mais fácil de investigar do que “o jogo não funciona”.',
        ],
      },
      'moves-undo-and-restart': {
        title: 'Veja a meta de movimentos como convite para tentar de novo',
        paragraphs: [
          'O tabuleiro web registra os movimentos e oferece controles para desfazer e reiniciar. A meta é um limite para pontuação, não uma contagem regressiva. Completar o tabuleiro vale uma estrela; terminar dentro da meta de movimentos vale duas; fazer isso sem desfazer vale três. Passar da meta não impede que você termine. Desfazer altera o resultado em estrelas, então diferencie explorar uma solução de fazer uma tentativa limpa.',
          'Uma primeira meta sensata é simplesmente completar o tabuleiro. Depois de entender uma rota, reinicie e veja se um desvio inicial era necessário. Assim você separa descoberta de refinamento e evita abandonar o tabuleiro por não conseguir três estrelas antes de entender as dependências básicas. Não há relógio exigindo que você aja assim que percebe a solução.',
          'Ao estudar Tetris, Kirsh e Maglio (1994) distinguiram movimentos que avançam uma tarefa daqueles que ajudam a obter informações. O estudo não mediu benefícios neste jogo de navegador. A distinção dá um propósito útil à primeira tentativa: testar onde um bloco para pode ensinar algo sobre a disposição, mesmo antes de você ter uma rota completa. Reiniciar permite experimentar o plano que entendeu durante essa exploração.',
          'Nosso [guia para ler o tabuleiro antes de mover](/blog/how-to-read-a-puzzle-before-moving) ajuda a identificar essas dependências. Se você está no navegador para evitar pressão de tempo, o [guia de quebra-cabeças sem cronômetro](/blog/no-timer-block-sort-puzzles-iphone) explica a diferença entre jogar sem tempo e jogar sem restrições. O reinício mais flexível do tabuleiro web não deve ser usado para deduzir como funcionam as vidas, os custos de desfazer ou os limites de movimentos no app completo.',
        ],
      },
      'what-daily-means': {
        title: 'O que “diário” significa neste site',
        paragraphs: [
          'A página diária escolhe entre um conjunto fixo de tabuleiros do site. A seleção avança conforme a data UTC e percorre a lista em ordem; o tutorial fica de fora. No momento em que este texto foi escrito, o conjunto tinha dezesseis tabuleiros. Ao chegar ao fim, a rotação volta ao início. “Diário” significa um quebra-cabeça compartilhado selecionado pela data, não uma disposição nova gerada toda manhã nem um arquivo que crescerá para sempre.',
          'A meia-noite UTC pode cair à tarde ou à noite onde você mora. Duas pessoas que acessam a página em datas locais diferentes ainda podem estar na mesma data UTC; já duas pessoas na mesma data local, perto dessa virada, podem ver seleções diferentes. Ao conversar sobre a solução, use a data e o número do tabuleiro exibidos na página. A virada não ocorre à meia-noite local.',
          'Depois de completar o tabuleiro, o controle de compartilhamento oferece um link do resultado com suas estrelas. Ele não compartilha toda a sequência de movimentos. Se quiser que a outra pessoa resolva por conta própria, envie o resultado e espere antes de contar o começo. Um tabuleiro compartilhado convida vocês a comparar estratégias; não é uma sessão multiplayer simultânea integrada.',
          'Larkin e Simon (1987) analisaram como diagramas organizam informações por localização, comparando-os com textos sequenciais por meio de modelos e problemas ilustrativos. Eles não estudaram jogos diários. A aplicação prática é usar a disposição compartilhada como referência: aponte a porta ou o obstáculo antes de descrever um movimento. O número identifica o quebra-cabeça; o tabuleiro visível ajuda a esclarecer qual decisão está em discussão.',
        ],
      },
      'web-and-app-boundaries': {
        title: 'Entenda o que a experiência no navegador não transfere',
        paragraphs: [
          'Jogar sem baixar significa que você não instala o app OutBrick para acessar esses tabuleiros. Ainda é necessário carregar a página no navegador. Não presuma que o site funcione offline como o app ou que uma tentativa incompleta sobreviva ao fechamento ou à atualização da página. O tabuleiro web não salva progresso nem se conecta à sua jornada no app por uma conta.',
          'Essa diferença importa se você começa no computador e depois instala o jogo no celular. Completar um tabuleiro no navegador não desbloqueia o capítulo correspondente no app, não transfere suas estrelas e não prova que as duas experiências tenham os mesmos tabuleiros. O site é uma pequena introdução, com seu próprio conjunto de fases e pontuação. O jogo da App Store é outro produto, com uma progressão mais ampla.',
          'O app também tem um modelo comercial: vidas, compras opcionais e anúncios com recompensa, exibidos quando você opta por assisti-los. Leia as [informações sobre jogo justo](/#fair) e a página atual da loja antes de decidir o que “grátis” significa para você. O comportamento de reinício e desfazer no navegador não substitui essas informações. Consulte também a página atual da loja para saber os requisitos do aparelho; conseguir jogar no navegador não comprova compatibilidade com o app nativo.',
          `Se a experiência deixar você curioso, [encontre o OutBrick na App Store](${appStoreUrl('journal-no-download')}). Se quiser apenas mais um tabuleiro web, continue na [página diária](/daily). Qualquer escolha pode vir do mesmo teste útil: agora você sabe como um bloco desliza, se os controles são confortáveis e se gosta de planejar rotas. Um exemplo jogável cumpre seu papel quando ajuda você a decidir.`,
        ],
      },
    },
    pullQuote: 'Uma primeira meta sensata é simplesmente completar o tabuleiro.',
    faqs: [
      { question: 'Posso jogar um quebra-cabeça de blocos do OutBrick sem baixar o app?', answer: 'Sim. O [guia de jogo](/play) inclui um percurso curto por tabuleiros no navegador, e a [página diária](/daily) oferece o tabuleiro escolhido para a data UTC atual.' },
      { question: 'O quebra-cabeça diário é criado do zero todos os dias?', answer: 'Não. O site do OutBrick alterna entre um conjunto fixo de tabuleiros conforme a data UTC, sem incluir o tutorial. A rotação pode voltar a uma disposição anterior.' },
      { question: 'O progresso no navegador sincroniza com o app OutBrick?', answer: 'Os tabuleiros do navegador não salvam o progresso nem o sincronizam com o app. Use-os como uma introdução separada, não como continuação da sua jornada no jogo.' },
      { question: 'Como movo um bloco pelo teclado?', answer: 'Use Tab para selecionar um bloco e depois Shift com uma tecla de seta na direção desejada. Ele continuará deslizando até algo pará-lo, em vez de ir para uma casa escolhida livremente.' },
    ],
  },
  'solve-puzzles-together': {
    title: 'Resolvam quebra-cabeças juntos sem tomar o controle',
    dek: 'Compartilhe o desafio sem roubar o próximo movimento: combinem papéis, expliquem previsões, deem dicas curtas e respeitem estilos diferentes.',
    imageAlt: 'Blocos coloridos e personagens de OutBrick em um tabuleiro azul-marinho',
    tags: ['jogar em grupo', 'jogos de quebra-cabeça', 'jogar em família', 'design de jogos', 'hábitos de jogo'],
    intro: 'Duas pessoas podem olhar para o mesmo quebra-cabeça e ainda estar jogando jogos diferentes. Uma está curtindo a busca; a outra já encontrou uma resposta e quer demonstrá-la. A cena familiar vem em seguida: uma mão pega o telefone, um bloco se move e quem estava segurando o aparelho perde a chance de descobrir por quê. Resolver juntos funciona melhor quando a ajuda preserva essa oportunidade. Este guia propõe um acordo prático para compartilhar a tela: quem move, quem explica, como oferecer dicas e quando trocar de papel. É uma prática social informal para um quebra-cabeça adequado, inclusive os tabuleiros do OutBrick no navegador. Não descreve modo cooperativo integrado, conta compartilhada ou multiplayer simultâneo.',
    keyTakeaways: [
      'Combinem quem controla a tela e que tipo de ajuda é bem-vinda antes de sugerir uma solução.',
      'Explique o resultado previsto de um movimento e deixe quem está jogando decidir se quer fazê-lo.',
      'Troquem de papel por acordo e tratem a conclusão compartilhada como uma descoberta conjunta, não como prova de que uma pessoa carregou a outra.',
    ],
    sections: {
      'agree-on-the-session': {
        title: 'Combinem o que querem fazer juntos',
        paragraphs: [
          'Comece com uma pergunta mais útil do que “Você consegue resolver?”. Pergunte: “Você quer companhia, uma dica ou prefere descobrir sozinho?”. São convites diferentes. Alguém pode gostar que você observe o tabuleiro sem querer conselhos. Outra pessoa talvez queira uma sugestão precisa para o primeiro movimento. Nenhuma resposta precisa virar um teste de independência ou capacidade.',
          'Depois, escolham um objetivo comum. Talvez queiram completar um tabuleiro, explicar uma regra de movimento confusa ou comparar duas rotas. Combinem se a meta de movimentos importa naquela sessão. Uma conversa pode ficar desconfortável se alguém tratar em silêncio cada movimento extra como um erro a corrigir. Definam o propósito antes de decidir quanto otimizar.',
          'Scott et al. (2004) observaram atividades colaborativas em mesas tradicionais e descreveram territórios pessoais, coletivos e de armazenamento em espaços de trabalho compartilhados. Não foi um experimento com celulares e quebra-cabeças, mas oferece uma analogia útil: uma tarefa compartilhada ainda pode envolver um espaço que alguém considera seu. Sentar ao lado de quem joga não dá, por si só, permissão para mexer na tela dessa pessoa.',
          'Para começar sem compromisso, usem o [guia de jogo no navegador](/play) e combinem resolver um tabuleiro pequeno. Se preferem comparar em vez de cooperar, nosso [guia de competição amigável](/blog/friendly-competition-with-friends) discute essa outra dinâmica. Não é preciso misturar as duas. “Vamos encontrar uma rota juntos” e “vamos comparar tentativas independentes” pedem comportamentos diferentes.',
        ],
      },
      'driver-and-explainer': {
        title: 'Separem as funções de mover e explicar',
        paragraphs: [
          'Uma combinação simples é ter uma pessoa no controle e outra explicando. Quem controla opera a tela e decide se fará o movimento. Quem explica descreve uma possibilidade e o motivo. São papéis temporários, não rótulos para a pessoa mais ou menos habilidosa. Troquem depois de um tabuleiro, de reiniciar ou em outro momento combinado; evitem pegar o aparelho no meio de uma tentativa.',
          'Façam explicações que possam ser conferidas. “Mova o azul” deixa dúvidas sobre qual bloco e por quê. “Acho que o bloco azul à esquerda vai parar no amarelo, abrindo espaço para o vermelho virar” identifica a peça, a direção e a consequência esperada. Quem está no controle pode avaliar a previsão, discordar ou testá-la. Uma boa explicação dá à outra pessoa algo para julgar, em vez de apenas uma ordem para obedecer.',
          'Maquil et al. (2024) analisaram cinco grupos de três pessoas resolvendo uma tarefa em uma mesa interativa, observando como coordenavam informações e ações. O estudo detalha formas de coordenação, mas não prova que os papéis sugeridos melhorem a pontuação de quebra-cabeças. A relevância está na distinção: compartilhar informações e decidir quem age são partes de uma tarefa conjunta, mesmo quando todos veem a mesma superfície.',
          'Se as duas pessoas quiserem mover ao mesmo tempo, parem antes da próxima ação. Decidam qual sugestão vão testar e deixem a tentativa terminar. Também é possível dizer: “Quero experimentar minha rota antes de ouvir a sua”. Isso protege a oportunidade de quem fala menos sem presumir que a rota dessa pessoa esteja certa. Poder testar uma previsão errada pode ser mais satisfatório do que receber uma instrução correta sem explicação.',
        ],
      },
      'make-the-board-common-ground': {
        title: 'Confirmem que estão falando do mesmo tabuleiro',
        paragraphs: [
          'Descreva as peças combinando localização, cor e formato ou símbolo. “O bloco vermelho abaixo da porta amarela” é mais fácil de identificar do que “aquele ali”. Se a disposição mudar após um movimento, diga a nova posição antes de continuar a explicação. Uma conversa pode falhar porque as referências ficaram desatualizadas, mesmo que todos tenham entendido a regra.',
          'Dillenbourg e Traum (2006) estudaram a resolução colaborativa multimodal de problemas com um quadro branco compartilhado e persistente. A análise distingue como representações compartilhadas apoiam uma solução e como as pessoas estabelecem entendimento mútuo. O cenário era uma tarefa colaborativa remota, não o OutBrick. Aplicamos essa distinção como hábito de conversa: a disposição visível é uma referência comum, mas ainda é necessário confirmar o que a outra pessoa quis dizer.',
          'Uma confirmação curta pode evitar uma discussão longa. Pergunte: “Você quer dizer o bloco azul de cima?” ou “O vermelho pararia aqui ou uma linha acima?”. Depois, responda à dúvida específica. Repetir a solução inteira em voz mais alta dificilmente resolve uma referência equivocada. Se alguém não distingue uma cor com facilidade, use também o símbolo e a posição em vez de tratar isso como falta de atenção.',
          'A [página diária](/daily) do OutBrick mostra o mesmo tabuleiro selecionado para todos na mesma data UTC. Isso ajuda duas pessoas a comparar a disposição, embora a página não seja uma sessão compartilhada ao vivo. Se estiverem em telas diferentes, confirmem a data e o número do tabuleiro. A posição atual da outra pessoa não corresponde ao seu estado inicial se ela já fez vários movimentos.',
        ],
      },
      'help-without-the-whole-answer': {
        title: 'Ofereça a menor dica que ajude',
        paragraphs: [
          'A pessoa deve escolher o tamanho da dica. Se necessário, comece esclarecendo uma regra: “O bloco continua deslizando até encontrar um obstáculo”. Depois, sugira uma região ou dependência: “Talvez seja preciso liberar o corredor antes de chegar àquela porta vermelha”. Se a pessoa quiser mais, descreva um movimento. Guarde a rota completa para quem pedir uma solução passo a passo. É uma sugestão de convivência, não uma afirmação sobre um recurso de dicas dentro do jogo.',
          'Às vezes, uma pergunta preserva mais da descoberta do que uma instrução. “O que poderia parar esse bloco na altura que você precisa?” chama atenção para uma restrição sem entregar a solução. Mas perguntas podem virar ordens disfarçadas se você continuar até a pessoa repetir sua resposta. Dê espaço para pensar e aceite “quero tentar assim primeiro” como uma resposta completa.',
          'Hansen e Spada (2010) usaram dois experimentos de organização de imagens para estudar o apoio à resolução remota e colaborativa de problemas. Os resultados distinguiram melhorias no processo de colaboração dos resultados de resolução. Essa ressalva importa: uma conversa mais clara pode valer a pena sem garantir uma pontuação melhor. Nossas sugestões de alternância e dicas buscam tornar a ajuda compreensível e bem-vinda, não prometer resolução mais rápida ou melhora cognitiva.',
          'Se a sessão incluir uma criança, uma pessoa idosa ou alguém novo nessa mecânica, não presuma que a idade determina quanta ajuda ela precisa. Pergunte e observe a dificuldade real. Nosso [guia para jogar com os netos](/blog/playing-games-with-grandchildren) traz ideias mais amplas para essa relação. Aqui, o objetivo imediato é menor: manter quem joga envolvido na próxima decisão, em vez de transformá-lo em plateia da sua solução.',
        ],
      },
      'recover-and-finish-together': {
        title: 'Lidem com os erros e terminem sem culpar ninguém',
        paragraphs: [
          'Quando uma previsão falhar, descreva a consequência antes de procurar culpados. “O azul bloqueou a porta” ajuda mais do que “Você moveu o bloco errado”. Vejam se a causa foi uma referência pouco clara, uma regra desconhecida ou um plano que não funcionou. Se houver a opção de desfazer, pergunte antes: quem está no controle talvez queira descobrir se a nova disposição ainda permite uma rota.',
          'Nos tabuleiros do OutBrick no navegador, os controles Desfazer e Reiniciar permitem rever uma tentativa, e desfazer afeta o resultado em estrelas. Não suponha que o app tenha os mesmos custos. Se estiverem jogando no aplicativo, consultem a [explicação sobre jogo justo](/#fair) antes de combinar novas tentativas ou gastar recursos. Compartilhar a tela também significa conversar sobre compras e anúncios com recompensa; não faça essa escolha em nome de outra pessoa.',
          'Ao completar o tabuleiro, reconheçam os dois tipos de contribuição. Quem identificou um ponto de parada ajudou; quem testou a rota com paciência e percebeu um obstáculo inesperado também. “Descobrimos por que funciona” mantém a atenção no problema compartilhado. Depois, vocês podem trocar de papel, escolher outro tabuleiro ou parar. Resolver juntos não exige terminar um capítulo nem provar que a experiência aumentou a produtividade.',
          `Se quiserem experimentar esse acordo, escolham um tabuleiro na [página de jogo do OutBrick](/play), definam quem controla e perguntem que tipo de ajuda é bem-vinda. Para conhecer o app completo, [encontrem o OutBrick na App Store](${appStoreUrl('journal-together')}). A combinação social é de vocês; não é um recurso que se compra. O melhor resultado pode ser ambos ainda quererem jogar juntos depois que o quebra-cabeça acabar.`,
        ],
      },
    },
    pullQuote: 'Uma boa explicação dá à outra pessoa algo para avaliar, não apenas uma ordem para obedecer.',
    faqs: [
      { question: 'O OutBrick tem modo cooperativo para resolver em dupla?', answer: 'Este artigo descreve cooperação informal diante de uma tela, não um modo cooperativo integrado nem multiplayer simultâneo do OutBrick. As pessoas podem combinar quem controla o tabuleiro e conversar sobre uma rota.' },
      { question: 'Como posso ajudar sem estragar o quebra-cabeça?', answer: 'Pergunte quanta ajuda a pessoa quer e comece esclarecendo uma regra ou dependência relevante. Sugira um movimento específico ou a solução completa somente se ela quiser esse nível de detalhe.' },
      { question: 'Quando devemos trocar quem controla a tela?', answer: 'Combinem um momento claro para passar o controle, como depois de completar um tabuleiro ou reiniciar uma tentativa. Peça antes de pegar o aparelho, mesmo que acredite ter encontrado a solução.' },
      { question: 'Resolver quebra-cabeças juntos garante resultados melhores?', answer: 'As pesquisas citadas não demonstram que essa prática informal melhore a pontuação no OutBrick ou a cognição. O objetivo prático é ter uma conversa mais clara e bem-vinda, em que todos possam participar.' },
    ],
  },
};
