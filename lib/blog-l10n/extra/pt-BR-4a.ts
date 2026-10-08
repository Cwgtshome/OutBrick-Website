import type { ExtraGuides } from '../../i18n/blog';

/** Journal batch 4, articles 1–5, in Brazilian Portuguese. */
export const ptBR4a: ExtraGuides = {
  'what-makes-a-puzzle-fair': {
    title: 'O que torna um quebra-cabeça justo?',
    dek: 'Dificuldade não é injustiça. Veja o que a pesquisa diz sobre desafios, erros e quebra-cabeças que merecem seu tempo.',
    imageAlt: 'Tabuleiro real de OutBrick em um iPhone, com Moss e Sprout diante de uma parede azul-marinho de tijolos',
    tags: ['design de quebra-cabeças', 'dificuldade em jogos', 'criação de jogos', 'falhas em jogos', 'design de jogos'],
    intro: 'Quem gosta de quebra-cabeças conhece duas maneiras bem diferentes de ficar travado. Na primeira, a boa, você vê todas as peças e conhece as regras; só ainda não encontrou a ideia certa. Na segunda, dá vontade de largar o celular: a resposta dependia de algo que você não podia ver, o jogo puniu uma tentativa que não havia como evitar ou um único erro custou dez minutos. Nos dois casos, o jogo é difícil. Só um parece justo. Há cerca de quinze anos, pesquisadores de jogos tentam distinguir essas experiências. As conclusões ajudam tanto quem cria quebra-cabeças quanto quem decide quais valem uma noite de jogo.',
    keyTakeaways: [
      'Jogadores enfrentam vários tipos de desafio. Um quebra-cabeça parece justo quando exige raciocínio, e não informação escondida ou punições arbitrárias.',
      'O custo de errar importa tanto quanto a chance de errar. Juul propôs que o tempo perdido com uma falha é uma medida melhor da dificuldade percebida.',
      'A falha pode fazer parte de uma boa experiência, desde que o jogador entenda o que aconteceu e possa tentar de novo tendo aprendido algo.',
    ],
    sections: {
      'hard-versus-unfair': {
        title: 'Difícil não quer dizer injusto',
        paragraphs: [
          'Designers costumam falar da dificuldade como se fosse um único controle deslizante, mas os jogadores não a sentem assim. Ao criar um questionário para medir o desafio percebido nos jogos, Alena Denisova, Paul Cairns, Christian Guckelsberger e David Zendle identificaram quatro tipos: execução (minhas mãos dão conta?), emocional (vou suportar o que isso me faz sentir?), cognitivo (vou encontrar a solução?) e de decisão (vou aceitar as consequências dessa escolha?). Um quebra-cabeça pode exigir muito em uma dimensão e pouco nas outras.',
          'Essa distinção explica muitas frustrações. Um puzzle de lógica que, de repente, exige precisão de pixel mudou o desafio da cabeça para as mãos sem avisar. Um puzzle cuja solução depende de uma regra que nunca foi apresentada não aumentou o desafio cognitivo: retirou a informação necessária para resolvê-lo.',
          'Megan Pusey, Kok Wai Wong e Natasha Anne Rappa propõem uma distinção parecida na ferramenta Puzzle Challenge Analysis Tool, testada em The Witness, Untitled Goose Game e Baba Is You. Elas separam desafio, aquilo que o puzzle exige do seu raciocínio, de dificuldade, o esforço que uma pessoa específica sente para resolvê-lo. Essa é a essência da justiça: um puzzle pode ser muito difícil para você hoje, mas seu desafio ainda deve envolver coisas sobre as quais seja possível raciocinar.',
        ],
      },
      'cost-of-failing': {
        title: 'O custo de errar faz parte da dificuldade',
        paragraphs: [
          'Nos jogos antigos, com um número fixo de vidas, era possível medir a dificuldade pela frequência das falhas. Em uma apresentação na conferência Foundations of Digital Games, em 2010, Jesper Juul argumentou que essa medida deixou de funcionar quando a maioria dos jogos passou a oferecer tentativas ilimitadas. Sua proposta: medir quanto tempo uma falha faz você perder. Perder um tabuleiro e recomeçar na hora é muito diferente de perder um tabuleiro e ter de refazer cinco minutos de preparação.',
          'Por isso, dois puzzles com a mesma dificuldade lógica podem parecer completamente diferentes. Se um erro faz você voltar três movimentos, dá para experimentar à vontade. Se manda você de volta ao começo de uma sequência longa, você deixa de experimentar e passa a agir com cautela, uma forma pior de resolver problemas.',
          'Para quem joga, há um teste rápido quando um puzzle parece cruel: pergunte quanto custou a última falha — segundos, minutos ou algo mais raro. Para quem projeta, fica o lembrete de que o preço do erro é uma escolha de design, separada do puzzle em si.',
        ],
      },
      'failure-that-teaches': {
        title: 'A falha que ensina',
        paragraphs: [
          'Isso não significa que um puzzle justo nunca deva deixar você falhar. Serge Petralito e colegas entrevistaram 95 jogadores logo após o lançamento de Dark Souls III, jogo famoso por matar o jogador com frequência. No geral, eles relataram experiências positivas. Os momentos de que mais gostavam — vencer e aprender — só eram possíveis por causa dos momentos negativos: a dificuldade e as mortes repetidas.',
          'O resultado depende de uma condição: a falha precisa ser compreensível. Ela virava aprendizado porque os jogadores percebiam por que tinham morrido e o que poderiam tentar em seguida. A pesquisa sobre vitórias difíceis deixa uma lição clara: uma falha sem causa visível é só frustração.',
          'Isso fica especialmente claro nos puzzles. A falha ideal faz você pensar “claro!” no instante em que acontece, porque o tabuleiro acabou de revelar algo sobre si mesmo. Se você pensa “como eu deveria saber disso?”, a falha não ensinou nada além de desconfiança.',
        ],
      },
      'fair-puzzle-checklist': {
        title: 'Lista de verificação para puzzles justos',
        paragraphs: [
          'Conor Linehan e colegas analisaram vídeos de partidas de quatro jogos de puzzle muito apreciados — Portal, o modo cooperativo de Portal 2, Braid e Lemmings — para entender como eles introduziam desafios. O padrão se repetia: cada habilidade nova aparecia sozinha em puzzles simples; depois, os jogadores praticavam combiná-la com o que já sabiam; então os puzzles ficavam mais complexos até surgir a próxima habilidade. Em outras palavras, um puzzle justo raramente exige algo que você não teve a chance de aprender.',
          'Junte essa observação às pesquisas sobre desafio e falha e você terá uma lista curta, útil para quem cria ou joga qualquer puzzle:',
        ],
        bullets: [
          'Tudo o que você precisa para resolver o puzzle está visível ou já foi ensinado.',
          'As regras não mudam no meio do caminho sem aviso.',
          'Existe uma solução.',
          'O jogo oferece o desafio que prometeu: raciocínio, e não reflexos, em um jogo de raciocínio.',
          'Um erro custa um tempo razoável, e você consegue entender o que o causou.',
          'As ideias novas chegam uma de cada vez, com tempo para praticar antes de serem combinadas.',
        ],
      },
      'how-outbrick-keeps-boards-fair': {
        title: 'Como o OutBrick mantém seus tabuleiros justos',
        paragraphs: [
          'Nós criamos o OutBrick, então esta é a lista aplicada ao nosso jogo. A regra é curta e nunca muda: deslize uma peça até a porta da sua cor e ela volta para casa, empurre-a contra a vizinha e as duas trocam de lugar, e três ou mais da mesma cor em linha somem. Caixas, gelo, fechaduras, musgo e portões com contador aparecem apenas em fases mais avançadas, quando a regra básica já é familiar. Um solver resolveu cada um dos 2.000 tabuleiros, e nós reproduzimos as soluções pelas regras do jogo antes do lançamento. Contamos esse processo em [como verificamos 2.000 tabuleiros de blocos deslizantes](/blog/verifying-2000-sliding-block-boards): nenhum tabuleiro exige o impossível.',
          'O custo do erro é baixo e conhecido. Cada tabuleiro mostra os objetivos e o limite de movimentos desde o primeiro toque, e não há cronômetro. O primeiro desfazer de cada tabuleiro é grátis; uma vida só é perdida quando uma tentativa termina sem limpar o tabuleiro. A página inicial explica [quanto custam vidas, desfazer e anúncios](/#fair). Também escrevemos sobre a progressão do desafio em [como criar uma curva de dificuldade mais gentil](/blog/kinder-difficulty-curve) e sobre atrito que ajuda a pensar em [Papers, Please e o atrito com propósito](/blog/papers-please-meaningful-friction).',
          'O melhor teste de justiça ainda é a sua reação. [Jogue um tabuleiro no navegador](/play), erre de propósito uma vez e veja se entende o motivo.',
        ],
      },
    },
    pullQuote: 'Se uma falha faz você pensar “como eu deveria saber disso?”, ela só ensina a desconfiar.',
    faqs: [
      { question: 'O que torna um quebra-cabeça injusto?', answer: 'Em geral, uma destas coisas: a solução depende de informação que o jogador não podia ver nem aprender, o desafio muda do raciocínio para os reflexos sem aviso ou um erro pequeno custa muito tempo. A dificuldade, por si só, raramente parece injusta quando as regras são claras.' },
      { question: 'É ruim um jogo de puzzle deixar o jogador falhar?', answer: 'Não. Pesquisas sobre jogos exigentes como Dark Souls III mostram que a falha pode dar mais significado à vitória e ao aprendizado. O essencial é entender por que você falhou e poder tentar de novo sem um custo alto.' },
      { question: 'Qual é a diferença entre desafio e dificuldade?', answer: 'Desafio é aquilo que o puzzle exige do jogador; dificuldade é o esforço que uma pessoa específica sente para resolvê-lo. Um puzzle justo pode ser muito difícil para alguém, mas ainda oferecer um desafio que todos possam analisar.' },
      { question: 'Todos os tabuleiros do OutBrick têm solução?', answer: 'Sim. Um solver resolveu cada um dos 2.000 tabuleiros, e nós reproduzimos as soluções pelas regras do jogo antes do lançamento. Cada tabuleiro mostra seus objetivos e seu limite de movimentos desde o primeiro toque.' },
    ],
  },
  'game-feel-and-juice': {
    title: 'Game feel e “juice”: por que um bom deslizar importa',
    dek: '“Juice” é o feedback extra que torna um gesto prazeroso. Estudos com milhares de jogadores mostram que ele ajuda até certo ponto — depois atrapalha.',
    imageAlt: 'Tabuleiro real de OutBrick em um iPhone, com Moss e Vio entre tijolos flutuantes diante de uma parede azul-marinho',
    tags: ['sensação de jogo', 'design expressivo', 'design de jogos', 'criação de jogos', 'retorno'],
    intro: 'Imagine duas versões do mesmo jogo. Em uma, um bloco atravessa o tabuleiro e para. Na outra, ele desliza, desacelera ao chegar, encosta de leve na parede e levanta um pouco de poeira ao sair pela porta. As regras são iguais. Uma parece uma planilha; a outra, um brinquedo. Designers chamam essa diferença de game feel. O feedback extra, dispensável para as regras mas responsável por parte da sensação, é chamado de “juice”. É uma das ideias mais discutidas no desenvolvimento de jogos e, até pouco tempo, uma das menos testadas. A pesquisa disponível agora traz um recado claro: o juice existe, e o excesso também.',
    keyTakeaways: [
      'Juice é feedback redundante: respostas visuais, sonoras ou táteis extras que as regras dispensam, mas que o jogador percebe.',
      'Em um estudo com mais de 3.000 jogadores, tanto a falta quanto o excesso de juice resultaram em partidas mais curtas e experiências piores do que uma quantidade moderada.',
      'Juice pode deixar o jogo mais bonito e agradável; seu efeito na sensação de habilidade depende do contexto. Ajuste-o em vez de simplesmente acumular efeitos.',
    ],
    sections: {
      'what-juice-means': {
        title: 'O que designers chamam de “juice”',
        paragraphs: [
          'Kieran Hicks, Kathrin Gerling, Patrick Dickinson e Vero Vanden Abeele definem juice como feedback redundante: uma ação do jogador aciona várias respostas que não trazem informação nova. A tela treme, a pontuação salta, partículas voam, um som toca. Nada disso é necessário para saber o que aconteceu. Tudo isso muda a sensação.',
          'Martin Pichlmair e Mads Johansen ampliaram a discussão em uma revisão de mais de 200 fontes acadêmicas e profissionais sobre game feel. Eles dividem esse trabalho em três áreas. Ajuste (tuning) trata da física: como um objeto acelera, que peso parece ter e quão previsível é seu movimento. Juice é amplificação: sinais extras que tornam uma ação impactante e seu resultado claro. Simplificação (streamlining) é suporte: o jogo acompanha a intenção do jogador, por exemplo, perdoando um toque um pouco adiantado. Nesse modelo, juice é apenas uma das três ferramentas; as outras são mais discretas.',
        ],
      },
      'what-the-studies-found': {
        title: 'O que os estudos realmente encontraram',
        paragraphs: [
          'Hicks e colegas fizeram dois estudos: um com 40 participantes jogando dois jogos criados para a pesquisa; outro com 32 participantes jogando uma versão modificada de Quake 3 Arena. Em ambos, os jogos tinham versões com e sem efeitos visuais extras. Os efeitos sempre deixaram os jogos visualmente mais atraentes. Já o efeito na sensação de competência só apareceu em algumas situações. Juice deixou o jogo mais bonito, mas não fez automaticamente os jogadores se sentirem melhores nele.',
          'O maior estudo até agora é o de Dominic Kao, que distribuiu entre 3.018 jogadores uma de quatro versões do mesmo RPG de ação: sem juice, com nível moderado, alto ou extremo. As duas versões intermediárias tiveram os melhores resultados. Tanto a versão sem juice quanto a extrema produziram sessões bem mais curtas, experiências piores, menos motivação intrínseca e até desempenho inferior ao das versões moderada e alta. Pouco feedback deixa o jogo sem vida; demais encobre com ruído as informações de que o jogador precisa.',
          'Essa curva em U invertido é a conclusão mais útil dessa pesquisa: juice é uma questão de dosagem, não uma virtude por si só.',
          'Também vale reconhecer os limites. Os dois estudos de Hicks analisaram jogos de ação, em que respostas rápidas fazem parte da diversão; a dose certa será diferente em um gênero lento e reflexivo. Além disso, as quatro versões de Kao usaram níveis fixos. O estudo mostra que os extremos perdem, mas não determina a quantidade ideal para cada jogo. Para puzzles, a conclusão honesta é que a tendência provavelmente se aplica, mas a dose exata deve ser encontrada testando com jogadores.',
        ],
      },
      'feel-beyond-the-screen': {
        title: 'Uma sensação que vai além da tela',
        paragraphs: [
          'No celular, a sensação não é apenas visual. Tanay Singhal e Oliver Schneider aplicaram a ideia de juice à vibração, definindo “incrementos hápticos” como uma vibração que reforça algo que a tela já mostra. Em dois estudos com participantes usando seus próprios celulares, esse feedback tornou o jogo mais agradável, atraente, imersivo e significativo. Um pequeno toque bem colocado sob o polegar pode fazer parte do trabalho de uma tela tremendo, sem acrescentar nada para olhar.',
          'No outro extremo está o cenário que não reage. Anna-Lena Meiners e colegas chamam isso de “riqueza visual” (lushness): detalhes de fundo e objetos com os quais não se pode interagir. Em um estudo com 31 participantes jogando quatro versões de um jogo de plataforma, mais riqueza visual tornou o jogo mais atraente, mas não mudou a sensação de competência nem o esforço mental relatado. O cenário é agradável; isso não é game feel.',
          'Coerência importa tanto quanto intensidade. As [Diretrizes de Interface Humana da Apple para feedback háptico](https://developer.apple.com/design/human-interface-guidelines/playing-haptics) recomendam usar vibrações de forma consistente e criar uma relação clara de causa e efeito entre cada vibração e a ação que a provoca. Isso vale para todos os tipos de feedback. Uma resposta previsível vira parte da compreensão do jogo; uma resposta aleatória é só ruído.',
        ],
      },
      'juice-for-a-calm-game': {
        title: 'Juice em um jogo tranquilo',
        paragraphs: [
          'A maior parte do que se escreve sobre juice vem dos jogos de ação, em que mais energia costuma ser o objetivo. Um puzzle tranquilo tem outra missão. Seu feedback deve confirmar o que aconteceu sem acelerar o coração do jogador e continuar claro tanto no centésimo tabuleiro quanto no primeiro. Isso favorece ajustes e simplificação, reservando juice para os momentos que realmente merecem.',
          'Estas são algumas regras que usamos para avaliar o feedback em um puzzle:',
        ],
        bullets: [
          'O movimento deve explicar a regra. Um bloco que desacelera ao parar mostra que algo o deteve.',
          'Guarde os maiores efeitos para os acontecimentos mais raros. Limpar o tabuleiro merece mais do que um movimento comum.',
          'Nunca deixe um efeito esconder a parte do tabuleiro que o jogador precisa ler em seguida.',
          'Respeite o ajuste de Reduzir Movimento do sistema e confira se o jogo continua claro com os efeitos reduzidos.',
          'Se um efeito é divertido na primeira vez e irritante na quinquagésima, ele está sobrando.',
        ],
      },
      'the-outbrick-slide': {
        title: 'O deslizar no centro do OutBrick',
        paragraphs: [
          'OutBrick se apoia em um verbo: deslize um bloco e ele para onde você soltar ou troca de lugar com o vizinho contra o qual você o empurrou. Como esse gesto se repete centenas de vezes por sessão, sua sensação importa mais que qualquer comemoração. O deslizar deve ser rápido para não deixar você esperando e claro o bastante para mostrar onde o bloco vai parar antes de chegar lá. Respeitamos o ajuste de Reduzir Movimento do sistema para manter o tabuleiro legível com animações atenuadas. Os grandes momentos ficam para a limpeza do tabuleiro, quando cada amigo de tijolo tem sua própria dança de vitória.',
          'Essa sensação também explica por que sessões curtas podem ser satisfatórias: um gesto nítido com uma resposta nítida já é uma pequena recompensa, como exploramos em [por que um puzzle de dois minutos pode parecer uma pausa de verdade](/blog/why-two-minute-puzzles-feel-good). Para observar sua própria reação, [jogue um tabuleiro no navegador](/play) e repare no momento em que o bloco para. A mesma contenção aparece em [Tetris](/blog/tetris-simple-rules-infinite-variation), em que muito do prazer vem do ritmo, não do espetáculo. Leia também sobre [feedback sonoro e experiência de jogo](/blog/game-audio-feedback-player-experience) e sobre [o que torna um puzzle realmente relaxante](/blog/relaxing-puzzle-games-what-makes-one-calm).',
        ],
      },
    },
    pullQuote: 'Juice é uma questão de dosagem, não uma virtude por si só.',
    faqs: [
      { question: 'O que é “juice” no design de jogos?', answer: 'É um feedback extra que reforça algo que o jogador já sabe: trepidação de tela, partículas, sons, vibração ou animação elástica. Não muda as regras, mas muda como uma ação é sentida.' },
      { question: 'Feedback “juicy” deixa os jogos melhores?', answer: 'Até certo ponto. Em um estudo com 3.018 jogadores, as versões com juice moderado ou alto superaram tanto a ausência de juice quanto o nível extremo em duração, experiência, motivação e desempenho.' },
      { question: 'Qual é a diferença entre game feel e juice?', answer: 'Game feel é a sensação geral, instante a instante, de interagir com um jogo. Juice é um dos ingredientes; outros incluem ajustar o movimento dos objetos e simplificar os controles para que o jogo faça o que o jogador pretendia.' },
      { question: 'É possível reduzir as animações no OutBrick?', answer: 'Sim. OutBrick respeita o ajuste de Reduzir Movimento do sistema, e o tabuleiro continua legível com os efeitos atenuados.' },
    ],
  },
  'procedural-puzzle-level-generation': {
    title: 'Geração procedural de puzzles: por que verificar importa',
    dek: 'A geração procedural cria puzzles sem fim, mas um tabuleiro solucionável não é necessariamente bom. Entenda os geradores e seus limites.',
    imageAlt: 'Tabuleiro real de OutBrick em um iPhone, com Poppy segurando uma varinha de estrela e Moss entre blocos flutuantes',
    tags: ['geração procedural', 'design de puzzles', 'desenvolvimento de jogos', 'criação de jogos', 'puzzles de blocos deslizantes'],
    intro: 'Entre uma fase desenhada à mão e uma fase infinita existe a geração procedural de conteúdo: programas que criam elementos de jogos, de terrenos e masmorras até o puzzle que você joga no ônibus. A tentação é especialmente grande nos puzzles. Um computador pode produzir um novo tabuleiro em milissegundos e nunca fica sem ideias. Também pode criar milhares de tabuleiros impossíveis, triviais ou tecnicamente corretos e completamente sem graça. A forma como pesquisadores lidaram com esse problema explica o que faz um puzzle funcionar e ajuda jogadores a avaliar se “fases infinitas” em uma página de loja significam alguma coisa.',
    keyTakeaways: [
      'A maioria dos geradores trabalha em um ciclo de criar e testar: propõe um candidato, avalia, mantém os bons e tenta melhorá-los.',
      'A parte difícil é testar. O gerador precisa provar que há uma solução, normalmente fazendo um programa jogar, e depois avaliar se o tabuleiro é bom.',
      'Ser solucionável é o mínimo, não o objetivo. Pesquisas modelam cada vez melhor a dificuldade e a experiência do jogador, mas o julgamento humano ainda decide o que será publicado.',
    ],
    sections: {
      'generate-and-test': {
        title: 'Gerar e testar',
        paragraphs: [
          'Em 2011, Julian Togelius, Georgios Yannakakis, Kenneth Stanley e Cameron Browne mapearam uma área em expansão e deram nome a ela: geração procedural de conteúdo baseada em busca. A revisão classifica geradores pelo que produzem, como o conteúdo é representado no programa e, acima de tudo, como sua qualidade é avaliada. A abordagem trata o design de fases como um problema de otimização: gera candidatos, dá uma pontuação a cada um usando uma função de avaliação, mantém os melhores, cria variações e repete — muitas vezes com algoritmos evolutivos inspirados na biologia.',
          'É na função de avaliação que mora o design. Ela pode medir uma fase diretamente (quantas peças, quanto espaço vazio), por simulação (deixar um jogador artificial tentar e observar o resultado) ou de forma interativa (perguntar a jogadores de verdade). Cada método tem um custo. Medidas diretas são baratas, mas superficiais. Simulações se aproximam mais da experiência, mas exigem um programa capaz de jogar. Consultar pessoas é o método mais fiel e, de longe, o mais lento.',
          'É fácil imaginar isso em um puzzle de blocos deslizantes. Um candidato é uma grade com blocos posicionados; uma variação move, acrescenta ou remove uma peça. Uma medida direta pode contar o quanto o tabuleiro está cheio. Uma simulação pode entregá-lo a um solver e registrar se consegue limpá-lo e quantos movimentos o caminho exige. O gerador mantém os tabuleiros com boas notas, varia-os de novo e, depois de milhares de rodadas, converge para aquilo que a função recompensa. Aí está sua força e seu risco: ele encontra exatamente o que você pediu, inclusive tabuleiros que cumprem os números e entediam o jogador.',
        ],
      },
      'describing-the-space': {
        title: 'Descrever como é um bom tabuleiro',
        paragraphs: [
          'Outra linha de pesquisa começa pelo lado oposto. Em vez de evoluir tabuleiros esperando que surjam bons resultados, Adam Smith e Michael Mateas propuseram descrever explicitamente o espaço de designs aceitáveis por meio de restrições lógicas e deixar um solver genérico encontrar tabuleiros que as satisfaçam. Com uma técnica chamada programação por conjuntos de respostas (answer set programming), o designer pode escrever regras como “a saída precisa estar acessível” ou “esta peça precisa ser movida pelo menos duas vezes” e receber apenas tabuleiros que respeitem essas condições.',
          'A aplicação ao design de puzzles é direta. Muitas características interessantes podem ser expressas como restrições: um bloco precisa ser bloqueado por outro; uma chave precisa ser necessária. Escrever essas regras obriga o designer a dizer exatamente o que procura — uma disciplina útil tanto para pessoas quanto para máquinas.',
        ],
      },
      'playability-first': {
        title: 'Provar que há uma solução',
        paragraphs: [
          'Qualquer que seja o gerador, um puzzle precisa ser solucionável; provar isso costuma ser a etapa mais difícil. Noor Shaker, Mohammad Shaker e Julian Togelius enfrentaram esse problema em Cut the Rope, um puzzle de física com tempo e espaço contínuos, no qual uma busca exaustiva seria impraticável. A solução foi um agente de raciocínio que propunha apenas movimentos sensatos em cada estado. Isso reduziu a busca o bastante para uma simples busca em profundidade encontrar soluções e confirmar que as fases geradas podiam ser jogadas.',
          'Bilal Kartal, Nick Sohre e Stephen Guy seguiram outro caminho em Sokoban, o clássico puzzle de empurrar caixas. O gerador constrói puzzles a partir de partidas simuladas com busca em árvore de Monte Carlo; assim, cada puzzle produzido é solucionável por construção. Puzzles de blocos deslizantes também são difíceis: o problema geral é PSPACE-completo, como explica nossa [história dos puzzles de blocos deslizantes](/blog/history-of-sliding-block-puzzles), e não há um atalho conhecido que resolva rapidamente qualquer tabuleiro.',
        ],
      },
      'solvable-is-not-good': {
        title: 'Solucionável é o mínimo, não o objetivo',
        paragraphs: [
          'Um tabuleiro pode ter solução e ainda ser sem graça, ou só permitir um caminho que ninguém encontraria. Kartal e colegas abordaram o problema diretamente. Em um estudo com participantes, buscaram características de tabuleiro baratas de calcular e relacionadas à dificuldade percebida. Combinaram essas características em uma função de pontuação e confirmaram em um segundo estudo que puzzles com notas maiores eram considerados mais difíceis. Ou seja, foi preciso aprender o que é dificuldade com as pessoas, não simplesmente presumir.',
          'Yannakakis e Togelius ampliam essa ideia em sua estrutura de geração procedural orientada à experiência: modelar a experiência do jogador com base em seu comportamento, relatos ou fisiologia e gerar conteúdo para influenciá-la. É um objetivo ambicioso e, sendo honestos, os modelos de diversão e frustração ainda são imprecisos. Em puzzles, qualidades como elegância, o prazer de “entender de repente” e justiça são ainda mais fáceis de reconhecer do que de calcular. Analisamos o que justiça significa para os jogadores em [o que torna um puzzle justo](/blog/what-makes-a-puzzle-fair).',
        ],
      },
      'where-people-stay': {
        title: 'Onde as pessoas continuam fazendo parte',
        paragraphs: [
          'Para jogadores, fica uma regra prática: “fases infinitas” informa que existe um gerador, mas não diz como as fases são testadas. Procure jogos que expliquem como verificam seus tabuleiros e desconfie quando a dificuldade dá saltos aleatórios — pode ser sinal de que ninguém a está modelando.',
          'Outros sinais de uma boa série de puzzles, gerada ou não: ideias novas chegam uma de cada vez, como recomenda a pesquisa sobre ritmo; os tabuleiros parecem distintos, em vez de quase cópias com uma peça deslocada; e, quando você trava, acredita que há uma solução. Esse último ponto é o mais difícil de simular e aquele que os geradores demoraram mais para merecer.',
          'Os 2.000 tabuleiros do OutBrick formam um conjunto fixo, criado por designers, e não um fluxo gerado no seu aparelho. Antes do lançamento, reproduzimos o caminho de solução de cada tabuleiro seguindo as regras do jogo. Explicamos o processo, inclusive por que um solver que chega ao limite de tempo significa “desconhecido”, e não “impossível”, em [como verificamos 2.000 tabuleiros de blocos deslizantes](/blog/verifying-2000-sliding-block-boards). Um solver prova que existe um caminho; não prova que o tabuleiro é divertido, por isso avaliamos o ritmo separadamente. Você pode conferir por conta própria no [tabuleiro do dia](/daily).',
        ],
      },
    },
    pullQuote: 'Um solver prova que existe um caminho; não prova que o tabuleiro é divertido, por isso avaliamos o ritmo separadamente.',
    faqs: [
      { question: 'O que é geração procedural de conteúdo em jogos?', answer: 'É o uso de programas para criar automaticamente conteúdo de jogo — fases, mapas ou puzzles — em vez de desenhá-lo à mão. Muitos geradores propõem tabuleiros, testam-nos e mantêm ou aprimoram os melhores.' },
      { question: 'Como um computador sabe que um puzzle gerado tem solução?', answer: 'Geralmente, ele pede que outro programa resolva o puzzle por busca ou constrói o puzzle a partir de partidas simuladas, garantindo uma solução desde o início. Verificar uma solução real é mais confiável do que confiar no próprio gerador.' },
      { question: 'Puzzles gerados proceduralmente são tão bons quanto os feitos à mão?', answer: 'Podem ser solucionáveis e variados, mas ainda é difícil automatizar a avaliação de dificuldade, elegância e justiça. Geradores baseados em pesquisa aprendem cada vez mais com estudos de jogadores, e muitos jogos mantêm uma pessoa envolvida.' },
      { question: 'Os tabuleiros do OutBrick são gerados aleatoriamente?', answer: 'Não. O OutBrick oferece um conjunto fixo de 2.000 tabuleiros em vez de criar fases durante a partida. Antes do lançamento, reproduzimos o caminho de solução de cada um seguindo as regras do jogo.' },
    ],
  },
  'dynamic-difficulty-adjustment': {
    title: 'Dificuldade dinâmica: o jogo deve se adaptar a você?',
    dek: 'Muitos jogos ajustam o desafio sem avisar. Veja o que os estudos dizem sobre dificuldade adaptativa, confiança e o valor de poder escolher.',
    imageAlt: 'iPhone com o placar semanal do OutBrick, entre Flurry de gorro listrado e Zippy amarelo piscando',
    tags: ['ajuste dinâmico de dificuldade', 'design de dificuldade', 'criação de jogos', 'autonomia do jogador', 'design de jogos'],
    intro: 'Você morre três vezes no mesmo trecho de um jogo e, na quarta tentativa, ele parece um pouco mais fácil. Os inimigos ficaram mais lentos ou você finalmente entendeu? Muitas vezes não dá para saber — e essa é a intenção. Ajuste dinâmico de dificuldade, ou DDA, é quando um jogo muda o desafio enquanto você joga, com base no seu desempenho. A promessa é oferecer a cada pessoa um jogo na medida certa. Mas surgem perguntas incômodas: sobre honestidade, sobre quem decide a dificuldade e sobre o valor de uma vitória quando o jogo ajudou. Veja o que a pesquisa diz e qual caminho escolhemos para nossos puzzles.',
    keyTakeaways: [
      'Estudos mostram que a dificuldade adaptativa costuma melhorar a experiência, mas os detalhes importam: jogadores podem perder o controle quando o sistema decide tudo.',
      'A adaptação pode deixar jogadores confiantes demais nas próprias habilidades. Só dizer que o jogo se adapta também pode aumentar a imersão, mesmo quando isso não acontece.',
      'Oferecer escolhas de dificuldade visíveis em momentos oportunos costuma funcionar melhor do que ajustes escondidos ou menus permanentes.',
    ],
    sections: {
      'what-dda-is': {
        title: 'O que é ajuste dinâmico de dificuldade?',
        paragraphs: [
          'Jogos tradicionais definem a dificuldade de antemão: você escolhe Fácil, Normal ou Difícil no começo, ou o jogo segue uma curva predeterminada. Como resume a revisão de Mohammad Zohaib, o problema é que os jogadores precisam se adaptar a uma curva de aprendizado decidida por outra pessoa. DDA altera parâmetros em tempo real — por exemplo, a frequência de inimigos, a precisão deles ou a quantidade de recursos encontrados — para manter o jogador entre o tédio e a frustração.',
          'Você provavelmente já encontrou isso sem perceber. Jogos de corrida são acusados há muito tempo de usar “efeito elástico” (rubber-banding): os rivais desaceleram quando você fica para trás e aceleram quando você assume a liderança. Alguns jogos de ação distribuem discretamente mais vida ou munição quando você está com dificuldade. Alguns puzzles oferecem uma versão mais fácil de uma fase depois de várias falhas. As técnicas variam, mas a lógica é a mesma: observar o jogador, estimar sua habilidade e ajustar o desafio.',
          'O artigo de Robin Hunicke, publicado em 2005, “The Case for Dynamic Difficulty Adjustment in Games”, costuma ser o ponto de partida. A crença comum, escreveu ela, era que jogadores gostam de surpresas, mas se sentem enganados ao perceber que um jogo mudou para se adaptar. O sistema Hamlet ajustava nos bastidores a oferta e a demanda em um jogo de tiro em primeira pessoa; resultados preliminares questionaram algumas suposições sobre a reação dos jogadores. A tensão que ela apontou continua: a adaptação deve ajudar sem prejudicar a experiência que pretende proteger.',
        ],
      },
      'does-it-work': {
        title: 'A adaptação realmente funciona?',
        paragraphs: [
          'Muitas vezes, sim — com ressalvas. Dennis Ang e Alex Mitchell compararam três versões de um jogo: sem adaptação, uma versão controlada pelo sistema que aumentava automaticamente a dificuldade e uma versão controlada pelo jogador, que podia escolher os ajustes. As duas versões adaptativas proporcionaram uma experiência geral melhor do que a versão sem adaptação. Mas a sensação era diferente. Com o ajuste automático, os jogadores ficavam menos preocupados em serem julgados e perdiam mais a noção do tempo, mas relatavam menos controle do que aqueles que escolhiam por conta própria.',
          'Essa troca está no centro do debate. A adaptação escondida pode suavizar momentos que interromperiam a imersão. Também tira uma decisão das mãos do jogador, e controle é um dos ingredientes de uma experiência satisfatória. A resposta depende do objetivo do jogo: uma narrativa que quer envolver você talvez aceite essa troca; um puzzle cuja graça está em descobrir a solução por conta própria, talvez não.',
        ],
      },
      'the-honesty-problem': {
        title: 'A questão da honestidade',
        paragraphs: [
          'Duas linhas de pesquisa complicam o cenário. Thomas Constant e Guillaume Levieux mediram a confiança dos jogadores por meio de apostas dentro do jogo, em três jogos que testavam habilidades lógicas, motoras e sensoriais. Jogadores cuja dificuldade era ajustada por um algoritmo tendiam a ficar confiantes demais e superestimar suas chances de sucesso. Os autores sugerem que essa confiança extra pode explicar em parte por que DDA agrada — e é justamente por isso que merece atenção: há algo sutil em um jogo que agrada, em parte, por enganar você sobre suas próprias habilidades.',
          'Alena Denisova e Paul Cairns encontraram outro efeito. Em dois estudos com jogos diferentes, jogadores informados de que o jogo se adaptava relataram mais imersão, independentemente de o ajuste realmente acontecer. A expectativa influenciava a experiência por si só. Os autores consideram isso uma notícia tranquilizadora para desenvolvedores: falar da adaptação não parece prejudicar a relação com o jogador. O resultado também mostra quanto a sensação de que “este jogo me entende” depende das expectativas.',
        ],
      },
      'give-players-the-dial': {
        title: 'Por que deixar o jogador no controle',
        paragraphs: [
          'Se controle importa, por que não perguntar diretamente ao jogador? Ang e Mitchell também testaram essa ideia, com 84 participantes. Variaram como as opções apareciam — integradas às mecânicas do jogo ou em um controle direto — e com que frequência: uma vez, regularmente ou o tempo todo. Opções integradas melhoraram alguns aspectos da experiência, e escolhas regulares superaram tanto uma única escolha inicial quanto uma sequência constante de perguntas. Perguntar uma vez é rígido demais; perguntar sem parar transforma o jogo em burocracia.',
          'Em conjunto, os resultados apontam para um meio-termo que muitos jogos já seguem: ofereça ajuda em momentos naturais, deixe a opção visível, permita recusá-la e não finja que uma vitória assistida foi outra coisa. O modo Assistência de Celeste é um exemplo conhecido, que abordamos em [modo Assistência de Celeste: acessibilidade como design melhor](/blog/celeste-assist-mode-accessibility).',
        ],
        bullets: [
          'O jogo muda a dificuldade sem contar a você?',
          'Você consegue ver e desativar a ajuda que ele oferece?',
          'As escolhas aparecem em pausas naturais, em vez de só no começo ou o tempo todo?',
          'Uma vitória com ajuda ainda conta, sem constrangimento?',
        ],
      },
      'outbrick-fixed-boards': {
        title: 'Por que o OutBrick mantém tabuleiros fixos',
        paragraphs: [
          'Em um puzzle de blocos deslizantes, escolhemos ajuda visível em vez de adaptação escondida. Cada um dos 2.000 tabuleiros do OutBrick é fixo e foi verificado por um solver antes do lançamento. Os objetivos e o limite de movimentos aparecem no primeiro toque: o puzzle que você enfrenta é o mesmo para todos. Limpar um tabuleiro significa encontrar um caminho naquele tabuleiro específico.',
          'A ajuda existe, mas você a vê e decide se quer usá-la. O primeiro desfazer de cada tabuleiro é grátis. Quando não resta nenhum movimento possível, o tabuleiro se embaralha de novo, de graça. Quando os movimentos acabam, oferecemos cinco movimentos extras antes de qualquer outra coisa, pagos com moedas ou, se você escolher, com um vídeo recompensado. A página inicial explica [quanto custam vidas, desfazer e anúncios](/#fair). Nada disso altera o tabuleiro às escondidas.',
          'Essa escolha serve a um jogo de puzzles; não é um veredito geral sobre DDA. Para ler mais sobre como o desafio progride ao longo do jogo, veja [como criar uma curva de dificuldade mais gentil](/blog/kinder-difficulty-curve) e [o que torna um puzzle justo](/blog/what-makes-a-puzzle-fair).',
        ],
      },
    },
    pullQuote: 'Perguntar uma vez é rígido demais; perguntar sem parar transforma o jogo em burocracia.',
    faqs: [
      { question: 'O que é ajuste dinâmico de dificuldade?', answer: 'Ajuste dinâmico de dificuldade (DDA) ocorre quando um jogo muda o desafio durante a partida com base no desempenho do jogador, por exemplo, enfraquecendo inimigos após várias falhas. O objetivo é manter a pessoa entre o tédio e a frustração.' },
      { question: 'Dificuldade dinâmica é boa ou ruim?', answer: 'Estudos costumam encontrar uma experiência melhor, mas a adaptação escondida pode diminuir a sensação de controle e está associada ao excesso de confiança. Ajuda visível e opcional, oferecida em momentos naturais, tende a evitar esses problemas.' },
      { question: 'Como saber se um jogo ajusta a dificuldade?', answer: 'Muitas vezes é difícil, e esse é parte do debate. Procure opções ou descrições na loja que mencionem dificuldade adaptativa ou assistência, e observe se o jogo oferece ajuda abertamente ou parece mudar sem avisar.' },
      { question: 'O OutBrick adapta a dificuldade para cada jogador?', answer: 'Não. Cada tabuleiro é fixo e verificado por um solver, com objetivos e limite de movimentos visíveis desde o primeiro toque. A ajuda, como o primeiro desfazer grátis ou cinco movimentos extras, é apresentada claramente e você decide se quer usá-la.' },
    ],
  },
  'game-tutorials-that-teach-without-telling': {
    title: 'Tutoriais que ensinam sem explicar: o que funciona',
    dek: 'Um estudo com 45 mil jogadores: tutoriais ajudam apenas em jogos complexos. Veja pesquisas sobre aprender jogando, dicas e a primeira hora.',
    imageAlt: 'iPhone exibindo o mapa Journey do OutBrick em Button Factory, com Flurry de gorro e Bloo com seu relógio',
    tags: ['tutoriais de jogos', 'primeiros passos', 'design de jogos', 'criação de jogos', 'jogos educativos'],
    intro: 'Quase todo mundo já pulou um tutorial. Alguns pularam, se perderam e depois voltaram para encontrá-lo. Outros apagaram um jogo que abriu com dez telas de instruções antes de deixar tocar em qualquer coisa. Ensinar alguém a jogar é uma das tarefas mais difíceis do design de jogos: explique pouco e a pessoa fica perdida; explique demais e ela vai embora antes de o jogo começar. A boa notícia é que este é um dos temas mais estudados da área, com experimentos que envolveram dezenas de milhares de jogadores. Os resultados são surpreendentemente consistentes: jogos devem ensinar principalmente deixando as pessoas jogar.',
    keyTakeaways: [
      'Em um estudo com mais de 45 mil jogadores, tutoriais aumentaram o tempo de jogo em até 29% no jogo mais complexo, mas não fizeram diferença significativa em dois jogos mais simples.',
      'Ensinar dentro do jogo, no momento em que uma mecânica é útil, superou uma tela de instruções separada em emoção e motivação.',
      'Dicas e explicações podem atrapalhar: em um estudo com 50 mil alunos, todos os sistemas de dicas testados reduziram o desempenho em comparação com não oferecer dicas.',
    ],
    sections: {
      'the-45000-player-test': {
        title: 'O teste com 45 mil jogadores',
        paragraphs: [
          'Em 2012, Erik Andersen e colegas da Universidade de Washington conduziram um dos maiores experimentos já publicados sobre tutoriais. Incorporaram oito designs de tutorial em três jogos de complexidade diferente e os ofereceram online a mais de 45 mil pessoas, medindo por quanto tempo jogavam e se voltavam. Os jogos eram Refraction, um puzzle que divide feixes de luz; Hello Worlds, um jogo de plataforma; e Foldit, um jogo muito mais complexo sobre dobramento de proteínas. Os resultados foram claros: no jogo mais complexo, os tutoriais aumentaram o tempo de jogo em até 29%. Nos dois jogos mais simples, não melhoraram o engajamento de forma significativa.',
          'A conclusão dos autores merece ser retomada: talvez não valha investir em tutoriais para jogos cujas mecânicas possam ser descobertas por tentativa e erro. Isso não é um argumento contra ensinar. É um argumento a favor de mecânicas que possam ser descobertas, para que o próprio jogo ensine e as palavras possam desaparecer.',
        ],
      },
      'teach-in-context': {
        title: 'Ensinar quando faz diferença',
        paragraphs: [
          'Quando instruções são necessárias, o momento importa. Julian Frommel e colegas compararam, com 39 jogadores, duas versões de tutorial para um jogo de realidade virtual: uma tela tradicional no começo e um tutorial contextual que explicava cada mecânica quando ela se tornava útil. Desempenho e imersão foram semelhantes, mas a versão contextual provocou mais emoções positivas, menos negativas e maior motivação. A conclusão serve a qualquer designer: o tutorial não é uma introdução separada do jogo; faz parte da experiência.',
          'As recomendações da Apple para apps dizem algo parecido: a apresentação inicial deve ser rápida, prazerosa e opcional, usando dicas contextuais sempre que possível. As pessoas aprendem melhor ao realizar uma tarefa do que lendo sobre ela. As [Diretrizes de Interface Humana sobre onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding) são uma leitura útil para quem projeta a primeira abertura de um app.',
        ],
      },
      'one-idea-at-a-time': {
        title: 'Uma ideia de cada vez',
        paragraphs: [
          'Grandes jogos de puzzle ensinam sem palavras há muito tempo, e a pesquisa começa a explicar como. Conor Linehan e colegas analisaram partidas de Portal, do modo cooperativo de Portal 2, de Braid e de Lemmings. Em cada jogo, as habilidades principais eram introduzidas separadamente, em puzzles simples que exigiam apenas aquela habilidade. Depois, os jogadores praticavam combiná-la com as anteriores e os desafios ficavam mais complexos até surgir a próxima.',
          'Essa estrutura é um tutorial disfarçado. Cada puzzle introdutório é uma lição com uma única conclusão correta, e resolvê-lo mostra que você aprendeu. Não é preciso explicar: o tabuleiro faz a pergunta e verifica a resposta. É o princípio que exploramos em [como jogos ensinam curiosidade sem dar uma lição](/blog/games-teach-curiosity-without-lecture) e em [como Minecraft deixa a descoberta criar a próxima camada](/blog/minecraft-layered-discovery).',
        ],
      },
      'when-help-hurts': {
        title: 'Quando a ajuda atrapalha',
        paragraphs: [
          'Dicas parecem uma gentileza óbvia, mas os dados são contraditórios. Eleanor O’Rourke, Christy Ballweber e Zoran Popović testaram quatro sistemas de dicas, inspirados em designs de tutoriais e jogos comerciais, em um puzzle educativo jogado por 50 mil alunos. Os quatro reduziram o desempenho em comparação com uma versão sem dicas. Os autores fazem uma ressalva: isso não quer dizer que dicas nunca funcionem; significa que designs importados de outros contextos não se adaptaram bem a esse jogo.',
          'Uma interpretação plausível é que uma dica pode interromper o melhor momento de um puzzle: quando você descobre a solução. Se ela chega antes de você ter tempo para procurar, rouba esse instante. Se aparece como um parágrafo longo, tira você do tabuleiro.',
          'Isso não significa abandonar o jogador diante de um obstáculo. Sugere princípios para oferecer ajuda que respeite o puzzle: disponibilize-a quando pedida, não automaticamente; comece com um empurrãozinho que indique onde olhar, em vez de dizer o que fazer; e deixe o jogador escolher se quer outra dica. A ajuda escolhida preserva a descoberta.',
        ],
      },
      'the-first-hour': {
        title: 'A primeira hora é parte da história',
        paragraphs: [
          'Gifford Cheung, Thomas Zimmermann e Nachiappan Nagappan analisaram mais de 200 avaliações de jogos e entrevistaram profissionais da indústria sobre a primeira hora de jogo. O conselho comum é tornar o jogo divertido desde o primeiro segundo. Eles argumentam que intriga e informação importam tanto quanto diversão: é na primeira sessão que jogadores decidem se vale a pena continuar, e um jogo que desperta curiosidade sobre o que vem a seguir pode mantê-los mesmo que a abertura seja imperfeita.',
          'OutBrick é nosso próprio teste dessas ideias. Sua regra cabe em uma frase: deslize um bloco até a porta da sua cor e ele volta para casa, ou empurre-o contra o vizinho para trocá-los de lugar, e três ou mais da mesma cor em linha somem. É uma mecânica que, segundo o estudo de Andersen, pode ser descoberta experimentando, pois um ou dois deslizes já demonstram o essencial. Caixas, gelo, fechaduras, musgo e portões com contador aparecem em tabuleiros posteriores, quando a ideia básica já foi aprendida. Você pode avaliar uma regra assim em [um tabuleiro clássico no navegador](/play), sem instruções; se quiser se aprofundar depois, nosso guia [como resolver puzzles de blocos deslizantes](/blog/how-to-solve-sliding-block-puzzles) estará lá.',
        ],
      },
    },
    pullQuote: 'O tutorial não é uma introdução separada do jogo; faz parte da experiência.',
    faqs: [
      { question: 'Tutoriais de jogos funcionam?', answer: 'Depende do jogo. Um estudo com mais de 45 mil jogadores mostrou que tutoriais aumentaram o tempo de jogo em até 29% em um jogo complexo, mas não fizeram diferença significativa em dois jogos simples cujas mecânicas podiam ser aprendidas experimentando.' },
      { question: 'Qual é a melhor maneira de ensinar um jogo?', answer: 'A pesquisa favorece aprender jogando: introduzir uma mecânica por vez em desafios simples, explicar quando ela se torna útil e manter o texto curto. Telas de instruções separadas tendem a motivar menos.' },
      { question: 'Dicas são boas em jogos de puzzle?', answer: 'Nem sempre. Em um estudo com 50 mil alunos jogando um puzzle educativo, quatro sistemas diferentes de dicas reduziram o desempenho em relação à ausência de dicas. Elas exigem cuidado no design e no momento em que aparecem.' },
      { question: 'Como se aprende a jogar OutBrick?', answer: 'Deslizando um bloco. Levado até a porta da sua cor, ele volta para casa; empurrado contra o vizinho, os dois trocam de lugar, e três ou mais da mesma cor em linha somem; caixas, gelo, fechaduras, musgo e portões com contador aparecem em tabuleiros posteriores. Você pode [experimentar um tabuleiro no navegador](/play) antes de instalar qualquer coisa.' },
    ],
  },
};
