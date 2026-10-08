/** Brazilian Portuguese cornerstone guide, translated from the English source. */
import type { LocaleGuides } from '../i18n/blog';

export const ptBRCore1 = {
  'how-to-solve-sliding-block-puzzles': {
    title: 'Como resolver quebra-cabeças de blocos deslizantes',
    dek: 'Comece pela saída, encontre a jogada que abre espaço e conte antes de agir: o método de um designer para quebra-cabeças de blocos deslizantes.',
    imageAlt: 'Tabuleiros reais de OutBrick sobre uma base índigo; à frente, um tabuleiro no modo para daltonismo com símbolos, enquanto blocos amarelos saem pela porta e Bricko observa',
    tags: ['quebra-cabeça de blocos deslizantes', 'estratégia para quebra-cabeças', 'como resolver quebra-cabeças', 'dicas de quebra-cabeça'],
    intro: 'Um bom quebra-cabeça de blocos deslizantes é feito para parecer impossível. Todas as casas estão ocupadas, cada bloco parece atrapalhar outro e a saída fica do lado errado. Crio e testo tabuleiros assim para OutBrick, e os mesmos cinco hábitos me ajudam a resolver quase todos, seja qual for o quebra-cabeça. Nenhum deles é um truque. São maneiras de olhar que transformam uma parede de blocos em uma lista curta de perguntas.',
    keyTakeaways: [
      'Comece pela saída e pense de trás para frente: os blocos entre uma peça e o caminho para fora são o problema de verdade, e essa lista costuma ser curta.',
      'Em um tabuleiro cheio, a jogada que importa é a que abre espaço para pelo menos dois outros blocos. Conte as jogadas possíveis antes de tocar em qualquer coisa.',
      'Desfazer é um experimento grátis. Reiniciar é para quando sua leitura inicial do tabuleiro estava errada, não para corrigir uma jogada ruim.',
    ],
    sections: {
      'work-backwards-from-the-exit': {
        title: 'Comece pela saída e pense de trás para frente',
        paragraphs: [
          'Diante de um tabuleiro cheio, a reação natural é mover qualquer bloco que possa sair do lugar. Espere dez segundos. Escolha um bloco que precisa sair, olhe para a saída e faça uma pergunta: o que está entre esse bloco e o caminho para fora? Essa é a questão de verdade. Depois faça a mesma pergunta sobre cada obstáculo e continue até chegar a um bloco que já possa se mover.',
          'O resultado é uma cadeia de dependências, lida de trás para frente a partir do objetivo: a saída depende do bloco amarelo; o amarelo depende de o verde sair da sua faixa; o verde precisa de espaço à esquerda. Psicólogos chamam esse raciocínio de análise meios-fins, e há boas evidências de que a maneira de apresentar um quebra-cabeça muda o quanto ele parece difícil. Kotovsky, Hayes e Simon apresentaram versões da Torre de Hanói com a mesma estrutura, mas regras superficiais diferentes, e algumas levaram muito mais tempo. Boa parte da dificuldade vinha de manter as regras e o estado atual do jogo em mente ao mesmo tempo. Dar nome à cadeia alivia um pouco essa carga.',
          'Em OutBrick, as saídas são portas coloridas, e um bloco só sai pela porta da sua cor. Isso acrescenta uma regra útil à leitura de trás para frente: uma porta que não aceita aquele bloco funciona como uma parede, assim como a borda do tabuleiro. Para escolher o primeiro bloco, procure a cor cuja porta tem a cadeia mais curta de obstáculos à frente.',
        ],
        bullets: [
          'Escolha um bloco que precisa sair.',
          'Liste o que está entre ele e a saída.',
          'Repita para cada obstáculo até encontrar um bloco que já possa se mover.',
          'Siga a cadeia na ordem, começando por esse bloco.',
        ],
      },
      'find-the-move-that-makes-space': {
        title: 'Encontre a jogada que abre espaço',
        paragraphs: [
          'Um tabuleiro cheio tem bem menos jogadas possíveis do que parece. Conte antes de começar. Em um tabuleiro apertado, pode haver só algumas opções, e uma delas costuma ser a jogada em torno da qual o tabuleiro foi construído: o deslize que abre um espaço livre e deixa a pilha se desfazer aos poucos. Casas vazias são a moeda dos quebra-cabeças deslizantes. A melhor jogada inicial costuma abrir espaço para as próximas; raramente resolve algo sozinha.',
          'O lugar onde você deixa um bloco importa tanto quanto o bloco que move. Em OutBrick, o bloco desliza até onde você o arrastar e para onde você soltar, antes de uma parede ou de uma porta que não aceita aquela cor; empurre-o contra um vizinho e os dois trocam de lugar. Um bloco estacionado no meio de uma faixa pode não atrapalhar agora, mas ficar no caminho daqui a quatro jogadas. Antes de soltar, confira se você não fechou uma passagem de que vai precisar depois.',
          'Há uma razão matemática para esses quebra-cabeças resistirem a atalhos. Hearn e Demaine provaram que os quebra-cabeças generalizados de blocos deslizantes são PSPACE-completos. Em termos simples, isso quer dizer que não se conhece um método capaz de resolver com eficiência todos os tabuleiros grandes. As pessoas recorrem a estratégias práticas como as deste guia. Isso também significa que um bom quebra-cabeça precisa ter um caminho possível. OutBrick verifica isso da forma mais rigorosa: um solucionador resolveu os 2.000 tabuleiros antes do lançamento. Se você travar, o nó está na posição que criou, não no tabuleiro.',
        ],
      },
      'count-before-you-commit': {
        title: 'Conte as jogadas antes de se comprometer',
        paragraphs: [
          'Planeje sequências curtas. A memória de trabalho comporta poucos itens de cada vez; a revisão de Cowan estima cerca de quatro blocos de informação. Por isso, tentar enxergar dez jogadas à frente geralmente significa ver quatro com clareza e adivinhar o resto. Em vez disso, agrupe as jogadas em intenções: “abrir a coluna da esquerda” vira um único objetivo, mesmo que exija três deslizadas. Planeje duas ou três intenções, execute-as e olhe o tabuleiro de novo.',
          'Se o quebra-cabeça tem limite de jogadas, esse cuidado faz diferença. OutBrick não tem cronômetro; a corda de cada tabuleiro indica o limite de jogadas, e o limite e os objetivos do tabuleiro aparecem desde o primeiro toque. Isso muda o que é escasso. As jogadas têm custo; pensar não custa nada. Use o tempo à vontade e conte as jogadas com cuidado. Antes de cada deslizada, passe por estas perguntas.',
        ],
        bullets: [
          'O que esta jogada vai permitir?',
          'O que ela bloqueia agora ou daqui a duas jogadas?',
          'Uma deslizada mais longa faria o trabalho de duas curtas?',
          'Ela me aproxima da cadeia que montei a partir da saída?',
        ],
      },
      'use-undo-as-a-thinking-tool': {
        title: 'Use o desfazer como ferramenta para pensar',
        paragraphs: [
          'Desfazer funciona melhor como experimento. Quando duas jogadas parecem igualmente boas, faça uma, observe o que ela abre e desfaça. Você aprendeu algo sobre o tabuleiro que não descobriria só olhando, e gastou apenas um desfazer. Quem vê o desfazer como sinal de fracasso tende a passar mais tempo olhando e aprender menos.',
          'OutBrick foi pensado com essa ideia em mente. O primeiro desfazer de cada tabuleiro é grátis e nunca acaba. Depois, os desfazeres vêm de uma reserva de cinco, que recupera um a cada 25 minutos. Quando não sobra nenhuma jogada possível, o tabuleiro se embaralha sozinho, de graça. Então use o desfazer grátis cedo e de propósito, na jogada sobre a qual você tem menos certeza, em vez de guardá-lo para uma emergência.',
          'Há algo a saber sobre as estrelas. Em um tabuleiro de OutBrick, elas seguem a pontuação, não o número de desfazeres, e cada jogada que sobra quando os objetivos são cumpridos vira um blaster que aumenta a pontuação. Se seu objetivo é apenas limpar o tabuleiro, experimente à vontade. Se busca três estrelas, gaste as jogadas com cuidado e faça os testes primeiro na cabeça.',
        ],
      },
      'know-when-to-reset': {
        title: 'Saiba quando reiniciar',
        paragraphs: [
          'Desfazer corrige uma jogada. Reiniciar corrige um plano. Os sinais de que chegou a hora de reiniciar são fáceis de reconhecer: você desfez a mesma jogada três vezes, está deslizando um bloco para lá e para cá, não sabe para que servem seus próximos dois objetivos ou bloqueou a área necessária com blocos que estacionou. Nessa altura, continuar desfazendo só faz você voltar por um caminho que não levaria a lugar nenhum.',
          'Considere com honestidade o custo de começar de novo no jogo que está jogando. Em OutBrick, entrar em um tabuleiro exige uma vida, mas não a consome; limpar o tabuleiro não custa nada; e você só perde uma vida quando termina uma tentativa sem limpar o tabuleiro. As vidas voltam uma por vez a cada 30 minutos. Por isso, vale usar o desfazer para pequenos ajustes e guardar uma nova tentativa para quando sua leitura do tabuleiro inteiro estava errada.',
          'Às vezes, a melhor forma de recomeçar é deixar o celular de lado. Um tabuleiro que parecia uma parede no fim do dia pode se abrir nos primeiros 30 segundos da manhã seguinte. Nenhum tabuleiro de OutBrick tem cronômetro; ele vai esperar por você. Para hábitos específicos de organização por cor, veja também as [dicas para quebra-cabeças de separar cores](/blog/colour-sort-puzzle-tips). Se quiser praticar o método primeiro, o [guia de jogo](/pt-BR/play) oferece um tabuleiro para experimentar no navegador, do fácil a um desafio de verdade.',
        ],
      },
    },
    pullQuote: 'Desfazer corrige uma jogada. Reiniciar corrige um plano.',
    faqs: [
      { question: 'Qual é o truque para resolver quebra-cabeças de blocos deslizantes?', answer: 'Não existe um truque único, mas um hábito resolve boa parte do problema: comece pela saída e pense de trás para frente. Liste o que bloqueia o bloco que você precisa mover, depois o que bloqueia esses obstáculos, até chegar a um bloco que já possa se mover. Em seguida, procure a jogada que abre mais espaço.' },
      { question: 'Todos os quebra-cabeças de blocos deslizantes têm solução?', answer: 'Não. Algumas configurações dos quebra-cabeças deslizantes clássicos não têm solução. Por exemplo, metade das posições iniciais possíveis do quebra-cabeça de 15 peças é insolúvel. Quebra-cabeças criados para jogar devem ser verificados antes do lançamento. Um solucionador resolveu todos os 2.000 tabuleiros de OutBrick antes de serem publicados.' },
      { question: 'Quantas jogadas devo planejar à frente?', answer: 'Para a maioria das pessoas, bastam dois ou três objetivos pequenos, cada um com algumas jogadas. A memória de trabalho comporta poucos itens de cada vez, então planeje por etapas, como “liberar a faixa da esquerda”, execute-as e depois olhe o tabuleiro novamente.' },
      { question: 'Usar o desfazer é trapaça?', answer: 'Não. Desfazer é uma das melhores maneiras de entender como um tabuleiro funciona. Em OutBrick, o primeiro desfazer de cada tabuleiro é grátis, e as estrelas seguem a pontuação do tabuleiro, não o número de desfazeres.' },
    ],
  },
  'colour-sort-puzzle-tips': {
    title: 'Dicas para separar cores: limpe tabuleiros em menos jogadas',
    dek: 'Aprenda a ler um tabuleiro, escolher qual cor liberar primeiro e aproveitar cada jogada. Dicas do designer de OutBrick.',
    imageAlt: 'Fileiras de blocos com pinos em vermelho, amarelo, turquesa, violeta, azul e verde sobre fundo creme, com um tabuleiro real de OutBrick e um cartão de vitória com três estrelas',
    tags: ['quebra-cabeça de separar cores', 'dicas para organizar blocos', 'estratégia de quebra-cabeça', 'meta de jogadas'],
    intro: 'Os quebra-cabeças de separar cores vêm em algumas famílias: líquidos despejados entre tubos, pilhas organizadas em hastes e blocos deslizados para fora por portas da mesma cor. OutBrick continua mandando seus blocos para casa por portas da mesma cor. Estas dicas são pensadas para ele, mas a habilidade principal vale para toda a família. Você precisa perceber qual cor está pronta para sair, qual está presa e qual está discretamente no caminho de todas as outras. Fazer isso com menos jogadas depende, em grande parte, de ler o tabuleiro antes da primeira jogada, e não depois da décima.',
    keyTakeaways: [
      'Leia o tabuleiro inteiro antes de começar: quais cores têm caminho livre até a saída, quais blocos bloqueiam mais de uma cor e onde está o espaço vazio.',
      'Libere a cor cuja saída abre mais espaço, não a que parece mais fácil de alcançar.',
      'Em OutBrick, as estrelas seguem a pontuação do tabuleiro, e as jogadas que sobram quando os objetivos são cumpridos viram blasters que aumentam a pontuação. Um tabuleiro limpo com cuidado é o que mais pontua.',
    ],
    sections: {
      'read-the-board-first': {
        title: 'Leia o tabuleiro antes da primeira jogada',
        paragraphs: [
          'Você economiza jogadas observando o tabuleiro antes de fazer a primeira. Procure três coisas. Primeiro, quais cores já têm caminho livre até a porta. Segundo, quais blocos estão bloqueando mais de uma cor, pois são eles que determinam o rumo do tabuleiro. Terceiro, onde está o espaço vazio, já que todo plano precisa passar por ele.',
          'Depois, confira o topo da tela. Cada tabuleiro de OutBrick mostra os objetivos e o limite de jogadas desde o primeiro toque, então você conhece o orçamento antes de gastar qualquer jogada. O limite é definido a partir da solução que o próprio solucionador encontrou para aquele tabuleiro e serve como pista: se for apertado, existe um caminho direto; um plano que exige o dobro de jogadas provavelmente deixou algo passar.',
          'Use todos os recursos do jogo para distinguir as cores. O modo para daltonismo de OutBrick vem ativado por padrão e marca cada bloco e cada porta com um símbolo; assim, matiz, forma e pinos indicam a cor. Mesmo para quem enxerga todas as cores, os símbolos ajudam a distinguir de relance tons próximos, como vermelho e rosa, ou violeta e azul. As recomendações de acessibilidade já dizem isso há muito tempo: a cor nunca deve ser o único meio de transmitir informação.',
          'Por fim, observe o formato do tabuleiro. Nem todo tabuleiro de OutBrick é retangular; algumas arenas têm formato de H, L ou cruz. As passagens estreitas entre duas partes da arena são onde os blocos ficam presos. Descubra logo quais blocos precisam passar por ali e em que ordem.',
        ],
      },
      'clear-the-colour-that-frees-the-most': {
        title: 'Libere a cor que abre mais espaço',
        paragraphs: [
          'A primeira jogada tentadora é mover o bloco que já pode sair. Às vezes, essa é a escolha certa. Muitas vezes, porém, é um bloco na borda cuja saída não abre nada, enquanto um bloco no centro, a três jogadas da porta, está prendendo metade do tabuleiro. Antes de liberar qualquer bloco, pense no que cada saída abriria. Um bloco grande que deixa o centro pode transformar uma área compacta em três faixas livres.',
          'Preste atenção também em onde os blocos ficam estacionados. Um bloco deixado diante de uma porta que não corresponde à sua cor vira uma parede até você movê-lo de novo, e cada “de novo” é uma jogada que poderia ter sido evitada. Ao tirar um bloco do caminho, leve-o para um lugar onde não atrapalhe depois.',
          'Também ajuda saber como a dificuldade se distribui pelo tabuleiro. As primeiras jogadas em um tabuleiro cheio são as mais custosas, porque todas as casas estão ocupadas e cada deslizada muda o que é possível fazer. As últimas quase não custam: nessa altura, o tabuleiro está praticamente vazio e os blocos restantes têm caminho livre até a saída. Concentre o raciocínio no começo, quando uma deslizada descuidada pode custar três jogadas para consertar, e relaxe no final.',
        ],
        bullets: [
          'Comece pelos blocos que impedem a saída de duas ou mais cores.',
          'Depois, libere as cores cuja saída abre uma passagem necessária.',
          'Deixe para o fim as saídas fáceis e isoladas, a menos que elas liberem o espaço de que você precisa agora.',
          'Não estacione um bloco atravessado em uma passagem que você ainda vai usar.',
        ],
      },
      'plan-in-chunks': {
        title: 'Planeje por etapas, não jogada por jogada',
        paragraphs: [
          'A memória de trabalho é limitada. A influente revisão de Cowan estima que ela comporte cerca de quatro blocos de informação, por isso planejar dez jogadas isoladas à frente raramente funciona. Em vez disso, planeje por intenções: “tirar os amarelos”, “abrir a faixa da direita”, “descongelar o bloco”. [Começar pela saída e pensar de trás para frente](/pt-BR/blog/how-to-solve-sliding-block-puzzles) é uma boa forma de encontrar essas etapas. Cada intenção reúne de duas a quatro jogadas, e dá para manter duas ou três em mente com tranquilidade.',
          'Antes de cada etapa, conte quanto ela vai custar e compare com o que resta dentro do limite. Se custar mais do que você tem, o plano está errado, e descobrir isso agora é muito melhor do que no meio dele. A maioria das jogadas desperdiçadas nesses quebra-cabeças vem de alguns hábitos: arrastar o mesmo bloco para lá e para cá, movê-lo duas vezes quando uma deslizada mais longa bastaria ou liberar a mesma passagem duas vezes porque um bloco foi estacionado nela de novo.',
          'Uma rotina simples ajuda a evitar os três problemas. Antes de começar uma etapa, imagine a última jogada: onde cada bloco vai ficar quando ela terminar? Se você não consegue visualizar a posição final, a etapa é longa demais; divida-a em duas. Se consegue, execute-a sem parar para reconsiderar tudo no meio, pois é aí que começam os movimentos de ida e volta.',
        ],
      },
      'targets-and-stars': {
        title: 'Como funcionam as jogadas e estrelas em OutBrick',
        paragraphs: [
          'As estrelas de OutBrick são fáceis de entender. Elas seguem a pontuação do tabuleiro: o tabuleiro está limpo quando seus objetivos são cumpridos, e cada jogada que sobra nesse momento vira um blaster que aumenta a pontuação. O limite, desenhado como uma corda no jogo, é de jogadas, não de tempo: não há contagem regressiva em nenhum lugar.',
          'Há uma consequência que muita gente não percebe: jogada economizada é pontuação ganha. O primeiro desfazer de cada tabuleiro é grátis e não acaba, e as estrelas não contam mais os desfazeres (a regra antiga, em que qualquer desfazer custava a terceira estrela, só continua na demonstração no navegador). Se você quer três estrelas, trate cada jogada como se valesse pontos e faça os testes mentalmente. Se quer apenas limpar o tabuleiro, use o desfazer à vontade: é para isso que ele serve.',
          'Quando suas jogadas estiverem acabando, você poderá comprar cinco jogadas extras por 300 moedas; na mesma tentativa, o preço depois passa para 500 e, em seguida, 900. As jogadas extras podem salvar a conclusão do tabuleiro. Elas raramente aumentam as estrelas, pois a essa altura restam poucas jogadas para virar blasters. A solução melhor vem antes: ler o tabuleiro com mais calma no início.',
        ],
      },
      'mistakes-that-cost-moves': {
        title: 'Cinco hábitos que fazem você desperdiçar jogadas',
        paragraphs: [
          'A maioria das conclusões que ultrapassam a meta se resume a alguns hábitos. É fácil corrigir cada um deles quando você percebe que está fazendo isso. O [guia de jogo de OutBrick](/pt-BR/play) apresenta todas as peças mencionadas aqui.',
        ],
        bullets: [
          'Liberar primeiro a cor fácil e deixar um bloco estacionado onde a cor difícil precisa passar.',
          'Esquecer que um bloco congelado precisa de três deslizadas para descongelar. Inclua essas jogadas na conta antes de começar.',
          'Deixar chaves e fechaduras para o fim. Elas abrem partes do tabuleiro, então descubra logo o que liberam.',
          'Ocupar todas as casas vazias quando há um gerador no tabuleiro. Geradores colocam mais blocos em jogo; deixe espaço para eles.',
          'Tratar esteiras e caixas como decoração. A esteira move o que está sobre ela, e as caixas determinam quais faixas ficam abertas. Planeje em torno das duas desde a primeira jogada.',
        ],
      },
    },
    pullQuote: 'As jogadas que você economiza vêm de observar o tabuleiro antes da primeira.',
    faqs: [
      { question: 'Qual é a melhor estratégia para quebra-cabeças de separar cores?', answer: 'Leia o tabuleiro inteiro antes de mover qualquer coisa: veja quais cores têm caminho livre até a saída, quais blocos bloqueiam mais de uma cor e onde está o espaço vazio. Depois, libere a cor cuja saída abre mais espaço e planeje etapas curtas de duas a quatro jogadas.' },
      { question: 'Como consigo três estrelas em OutBrick?', answer: 'Busque uma boa pontuação. As estrelas seguem a pontuação do tabuleiro, e cada jogada que sobra quando os objetivos são cumpridos vira um blaster que a aumenta: quanto menos jogadas a conclusão custar, mais estrelas ela rende.' },
      { question: 'O desfazer grátis me faz perder uma estrela?', answer: 'Não. As estrelas seguem a pontuação do tabuleiro, não o número de desfazeres, então o desfazer grátis existe para você aprender. A regra antiga, em que qualquer desfazer custava a terceira estrela, pertence aos tabuleiros clássicos da demonstração no navegador.' },
      { question: 'Posso jogar quebra-cabeças de separar cores se sou daltônico?', answer: 'Sim, se o jogo oferecer outras pistas além da cor. O modo para daltonismo de OutBrick vem ativado por padrão e coloca um símbolo correspondente em cada bloco e porta, então a forma também ajuda a identificar as cores. A [página de acessibilidade](/pt-BR/accessibility) explica os detalhes.' },
    ],
  },
  'relaxing-puzzle-games-what-makes-one-calm': {
    title: 'Jogos de quebra-cabeça relaxantes: o que traz calma',
    dek: 'Cores suaves não bastam. Veja limites de jogadas, vidas justas e jogos sem interrupções para saber se um quebra-cabeça mantém a calma.',
    imageAlt: 'Três janelas em arco numa parede de blocos índigo mostram vilarejos reais de OutBrick, Lavender Hills, Firefly Wetlands e Cherry Blossom Town, com Flurry e Sprout no parapeito',
    tags: ['jogos de quebra-cabeça relaxantes', 'jogos sem cronômetro', 'jogos tranquilos', 'design de jogos'],
    intro: 'Muitas páginas na loja chamam o jogo de quebra-cabeça de “relaxante”. Alguns merecem esse nome. Outros cobrem com cores pastéis e música suave a mesma pressão de sempre: contagem regressiva no canto, vidas que acabam bem quando você está pegando o jeito, anúncio entre cada fase. Veja o que analisamos para decidir se um jogo é tranquilo e como OutBrick se sai em cada ponto, inclusive nos que exigem algo de você.',
    keyTakeaways: [
      'A calma depende sobretudo da pressão: de onde ela vem, se dá para prevê-la e se você escolheu aceitá-la.',
      'Um limite de jogadas pede que você não desperdice movimentos; um cronômetro pede que não pense. Só um combina com um jogo relaxante.',
      'Vidas e anúncios podem ser justos ou não. Confira o que custa uma vida, quanto demora para recuperá-la e se algum anúncio aparece sem você pedir.',
    ],
    sections: {
      'where-pressure-comes-from': {
        title: 'De onde vem a pressão em um jogo de quebra-cabeça',
        paragraphs: [
          'Um quebra-cabeça deve ser um pouco difícil, e um tabuleiro desafiador ainda pode ser repousante. A pressão que deixa o jogo frenético geralmente vem de fora do quebra-cabeça e costuma ter quatro fontes: tempo (contagem regressiva ou barra diminuindo), escassez (vidas, energia ou fichas), interrupções (anúncios, ofertas e avisos entre fases) e comparação (sequências que acabam ou placares exibidos sem você pedir).',
          'Nenhuma dessas coisas é necessariamente ruim. Um modo cronometrado pode ser muito divertido quando é você quem escolhe. Para avaliar um jogo tranquilo, a pergunta é simples: dá para ver todas as restrições antes de começar? Você concordou com elas? Um tabuleiro que explica as regras logo de início e depois deixa você em paz é bem diferente de outro que muda as condições no meio do caminho.',
          'A última das quatro fontes é a mais fácil de não perceber. Um contador de sequência ou um placar pode ser um extra agradável quando você procura por ele. Vira pressão quando o jogo o coloca na sua frente bem na hora em que você ia parar, ou trata um dia sem jogar como uma perda. Repare onde o jogo mostra esses números e se permite ignorá-los.',
        ],
      },
      'move-limits-vs-clocks': {
        title: 'Por que um limite de jogadas é diferente de um cronômetro',
        paragraphs: [
          'O cronômetro pune o pensamento. Cada segundo que você passa lendo o tabuleiro é um segundo a menos, então o jogo recompensa reflexos e palpites. Um limite de jogadas pune o desperdício. Você pode observar o tabuleiro pelo tempo que quiser; só uma deslizada descuidada custa algo. Para um jogo de quebra-cabeça que quer ser tranquilo, essa diferença importa mais do que qualquer paleta de cores.',
          'OutBrick não tem cronômetro em lugar nenhum. A corda exibida em cada tabuleiro representa o limite de jogadas. Os objetivos e o limite de jogadas aparecem desde o primeiro toque, então você conhece o orçamento antes de gastar qualquer jogada. Quando estiver quase no fim, o jogo oferece mais cinco jogadas antes de qualquer outra coisa.',
          'Há também um argumento de acessibilidade. As diretrizes de acessibilidade da web recomendam que seja possível desligar, ajustar ou estender limites de tempo, pois algumas pessoas precisam de mais tempo para concluir uma tarefa. Um jogo sem cronômetro não precisa de ajustes desse tipo. Pesquisas mais amplas sobre pressão do tempo apontam na mesma direção: em um estudo sobre interrupções no trabalho de escritório, Mark, Gudith e Klocke observaram que as pessoas compensavam trabalhando mais rápido e relatavam mais estresse, frustração e pressão de tempo.',
        ],
      },
      'fair-lives': {
        title: 'Vidas, energia e o que é justo',
        paragraphs: [
          'Muitos jogos tranquilos têm vidas, inclusive o nosso. A pergunta útil é como elas funcionam. Um sistema justo explica exatamente o que custa uma vida, oferece o suficiente para uma boa sessão, recupera as vidas sem exigir pagamento e nunca cobra só por você tentar.',
          'OutBrick já foi lançado sem vidas e sem anúncios, e os dois aspectos mudaram. Por isso, a página inicial explica [exatamente quanto custam vidas, desfazeres e anúncios](/pt-BR/#fair). Entrar em um tabuleiro exige uma vida, mas não a consome. Limpar um tabuleiro não custa nada. Você só perde uma vida quando uma tentativa termina sem limpar o tabuleiro. É possível guardar cinco vidas, ou oito com o Brick Pass, e uma volta a cada 30 minutos. O desfazer funciona de forma parecida: o primeiro de cada tabuleiro é grátis e não acaba; depois, uma reserva de cinco recupera um a cada 25 minutos. Quando não sobra nenhuma jogada possível, o tabuleiro se embaralha sozinho, de graça.',
          'Veja também o que acontece quando as vidas acabam. Em um sistema justo, ficar sem vidas significa uma pausa de duração conhecida. Em OutBrick, você pode esperar a próxima vida ou, se quiser, assistir a um vídeo com recompensa; as duas opções são explicadas antes de você precisar delas. Um jogo que responde a uma reserva vazia com uma tela de compra e sem informar quando ela será recuperada usa a escassez como ferramenta de venda, o que dificilmente transmite calma.',
        ],
        bullets: [
          'O que exatamente custa uma vida: começar, falhar ou desistir?',
          'Quantas vidas você pode guardar e quanto tempo leva para recuperar uma?',
          'Dá para continuar jogando alguma coisa enquanto espera?',
          'O tempo de recuperação é usado como pretexto para mostrar uma oferta?',
        ],
      },
      interruptions: {
        title: 'Interrupções são o verdadeiro inimigo da calma',
        paragraphs: [
          'A maneira mais rápida de acabar com a tranquilidade de um jogo é interrompê-lo. Um anúncio em tela cheia depois de cada três fases faz você hesitar antes de tocar em “continuar”. Uma oferta que aparece quando você falha transforma uma pequena frustração em argumento de venda. Nenhuma das duas coisas tem a ver com o quebra-cabeça, e é aí que muitos jogos perdem a calma que prometem.',
          'Veja como OutBrick lida com isso. Há oito momentos em que você pode optar por assistir a um vídeo com recompensa: ganhar uma vida, dois desfazeres, jogadas extras, uma dica grátis, receber de novo as moedas do cartão de conclusão, girar a Roda de Blocos uma segunda vez, abrir um balão de presente no mapa ou assistir no Brick Cinema. Cada opção exige sua escolha e tem um limite diário próprio, com no máximo 39 vídeos por dia somando todas. Não há banners nem anúncios em tela cheia; nada é exibido sem que você toque para assistir, e nada interrompe o tabuleiro. A opção Remover anúncios desativa a publicidade de forma permanente.',
          'A importância disso vem em parte da nossa opinião e em parte das evidências. Estudos sobre jogos casuais encontraram benefícios de curto prazo no humor após tarefas exigentes, e um deles observou menos estresse depois de um jogo casual, embora um exercício de atenção plena tenha se saído melhor na avaliação de estresse feita pelos participantes. Esses efeitos dependem de um período de jogo sem interrupções. Exibir um anúncio a cada poucos minutos não ajuda a preservar esse momento.',
        ],
      },
      'calm-checklist': {
        title: 'Uma lista rápida para avaliar jogos tranquilos',
        paragraphs: [
          'Antes de escolher um jogo para relaxar, passe cinco minutos conferindo a lista abaixo. A maioria dos jogos vai atender a alguns itens e falhar em outros, e tudo bem. Também explicamos [quando jogar e quando fazer uma pausa](/blog/when-to-play-and-when-to-pause). O que importa é saber como o jogo funciona antes que sejam onze da noite e apareça uma contagem regressiva.',
          'A tranquilidade também depende dos estímulos sensoriais, algo que as páginas das lojas raramente mencionam. Telas cheias de recompensas piscando e botões tremendo cansam mesmo sem limite de tempo. OutBrick respeita o ajuste Reduzir Movimento do sistema em todos os lugares, e seus nove amigos de blocos falam por balões de texto, sem voz, para que uma partida tarde da noite possa ser silenciosa.',
        ],
        bullets: [
          'Sem contagem regressiva nas fases normais, ou com um modo cronometrado que você pode ignorar.',
          'Regras e limites de cada fase visíveis antes da primeira jogada.',
          'Custo por falhar explicado com clareza e baixo.',
          'Nenhum anúncio toca sem que você aperte um botão para assistir.',
          'Parar entre as fases não custa nada.',
          'O jogo funciona offline, sem travar uma fase quando o sinal está fraco.',
          'Os recursos de acessibilidade, como apoio para daltonismo e Reduzir Movimento, estão disponíveis e são respeitados.',
        ],
      },
    },
    pullQuote: 'O cronômetro pune o pensamento. O limite de jogadas pune o desperdício.',
    faqs: [
      { question: 'O que torna um jogo de quebra-cabeça relaxante?', answer: 'Principalmente, a ausência de pressão externa ao quebra-cabeça: sem contagem regressiva, limites claros antes de começar, um custo pequeno e explicado por falhar e nenhuma interrupção sem sua autorização. Um quebra-cabeça difícil ainda pode ser relaxante se deixar você pensar em paz.' },
      { question: 'Existem jogos de quebra-cabeça sem cronômetro?', answer: 'Sim. Muitos usam um limite de jogadas ou não têm limite algum. OutBrick não tem cronômetro; cada tabuleiro tem um limite de jogadas, mostrado como uma corda junto dos objetivos.' },
      { question: 'OutBrick tem vidas e anúncios?', answer: 'Sim. Você pode guardar cinco vidas, ou oito com o Brick Pass, e uma volta a cada 30 minutos. A vida só é perdida quando uma tentativa termina sem limpar o tabuleiro. Os anúncios são vídeos com recompensa que você escolhe assistir, cada um com um limite diário; não há banners nem anúncios em tela cheia.' },
      { question: 'Um limite de jogadas causa estresse?', answer: 'Em geral, menos do que um cronômetro, pois pensar não custa nada; só jogadas descuidadas têm custo. Em OutBrick, quando as jogadas estão acabando, você ainda recebe a oferta de cinco jogadas extras antes de qualquer outra coisa.' },
    ],
  },
  'offline-puzzle-games-iphone': {
    title: 'Jogos de quebra-cabeça offline para iPhone: viagens e voos',
    dek: 'O que procurar em um jogo para metrô, trem ou avião: funciona offline, dá para jogar com uma mão, tem fases curtas e poupa bateria.',
    imageAlt: 'Um vagão de trem feito de blocos, cujas janelas mostram vilarejos e tabuleiros reais de OutBrick, com Bloo e Zippy no teto',
    tags: ['jogos offline para iPhone', 'jogos sem internet', 'jogos para voos', 'jogos para transporte público'],
    intro: 'A pior hora para descobrir que um jogo precisa de conexão é dentro de um túnel ou a 10 mil metros de altitude, com o Wi-Fi desligado. “Funciona offline” pode significar várias coisas na página de uma loja, e um bom jogo para viajar precisa de mais: funcionar com uma mão, caber no intervalo entre duas paradas e não acabar com a bateria antes do pouso. Esta é a lista que usamos. Somos a equipe de OutBrick, então usamos o jogo como exemplo e tentamos ficar em pontos que você pode conferir por conta própria.',
    keyTakeaways: [
      'Teste o jogo offline em casa, no Modo Avião, antes de viajar; feche e abra o app e experimente as fases seguintes.',
      'No transporte, controles com uma mão e fases curtas e independentes importam tanto quanto o modo offline.',
      'A bateria depende sobretudo da tela e do próprio jogo. Em viagens longas, reduza o brilho e ative o Modo Pouca Energia.',
    ],
    sections: {
      'test-offline-first': {
        title: 'Teste o modo offline antes de viajar',
        paragraphs: [
          '“Offline” em uma página de loja pode significar várias coisas. Alguns jogos funcionam por completo sem conexão. Outros deixam você jogar, mas adiam recompensas, conteúdo diário ou salvamento até que volte a ficar online. Há jogos que carregam a primeira tela da memória e travam na segunda. A descrição na loja não revela qual é o caso; por isso, faça o teste.',
          'Leva cinco minutos. Em casa, ative o Modo Avião, feche o jogo por completo e abra-o de novo. Jogue três fases, volte ao menu e inicie a fase seguinte à próxima. Veja se algo fica desativado, se algum indicador de carregamento não para e se o jogo ainda deixa você avançar depois de concluir uma fase. Se tudo funcionar, deve funcionar no avião.',
          'Enquanto ainda estiver no Wi-Fi, faça mais uma coisa: abra a App Store e instale as atualizações pendentes dos jogos que pretende jogar. Um jogo que exige atualização ao abrir não serve dentro de um túnel, e baixar um arquivo grande por um sinal móvel instável no portão de embarque é um péssimo começo de viagem.',
          'OutBrick funciona offline. Se você joga em mais de um dispositivo, o progresso fica no iCloud; um dispositivo novo, conectado à mesma conta, continua de onde o outro parou: fase, moedas, sequência e Coleção.',
        ],
        bullets: [
          'Ative o Modo Avião, feche o jogo por completo e abra-o de novo.',
          'Jogue três fases e inicie pelo menu a fase seguinte à próxima.',
          'Confira se nada ficou desativado, se não há carregamento infinito e se o progresso avança após concluir uma fase.',
        ],
      },
      'one-handed-play': {
        title: 'Uma mão, um polegar',
        paragraphs: [
          'Em um trem cheio, muitas vezes você segura a barra, um café ou uma bolsa com a outra mão. Um estudo de campo de Steven Hoober sobre como as pessoas seguram o celular, baseado em 1.333 observações em ruas, aeroportos, cafés e transportes públicos, constatou que 49% usavam uma mão, 36% seguravam o celular com uma mão e tocavam na tela com a outra, e 15% usavam as duas mãos. Um jogo para viajar precisa funcionar para o primeiro grupo.',
          'Hoober também observou que quem usa uma mão segura o celular de várias maneiras, então o jogo não pode pressupor uma única pegada. Nos celulares maiores que a maioria carrega hoje, é difícil alcançar os cantos superiores da tela com o polegar da mão que segura o aparelho. Para isso, é preciso reajustar o celular na mão, exatamente o que você não quer fazer em um trem em movimento com um café na outra mão.',
          'Procure controles por gestos em vez de botões pequenos, orientação vertical e nenhuma ação importante nos cantos superiores durante uma fase. OutBrick é jogado com um dedo: você desliza um bloco até a porta dele ou o troca de lugar com um vizinho. Se precisar, cada bloco também é um elemento do VoiceOver, com uma ação para cada deslizada e cada troca que ele pode fazer; o Texto Maior se aplica ao jogo todo.',
        ],
      },
      'sessions-between-stops': {
        title: 'Fases que cabem entre duas paradas',
        paragraphs: [
          'Jogar no transporte acontece em intervalos; exploramos essa ideia no [quebra-cabeça para quem está no transporte público](/blog/commuter-puzzle-two-minute). A unidade ideal é uma fase que você consegue concluir entre duas estações, com um final claro. Assim, guardar o celular parece uma pausa, não o abandono de algo. Fases longas e objetivos encadeados atrapalham.',
          'Cronômetros atrapalham ainda mais, e esse é um dos motivos pelos quais [jogos tranquilos de quebra-cabeça](/pt-BR/blog/relaxing-puzzle-games-what-makes-one-calm) costumam deixá-los de lado. Quando um aviso da estação ou a conferência da passagem exige sua atenção, o relógio no canto continua correndo. Pesquisas sobre interrupções no trabalho sugerem que as pessoas compensam acelerando e pagam por isso com estresse. Um jogo sem cronômetro não aumenta essa pressão. OutBrick não tem contagem regressiva, cada tabuleiro leva cerca de dois minutos e concluí-lo não custa nada. Você só perde uma vida quando termina uma tentativa sem concluir o tabuleiro; uma vida volta a cada 30 minutos.',
          'Também ajuda quando a estrutura maior é dividida em partes pequenas. Na [Jornada de OutBrick](/pt-BR/#journey), cada vilarejo tem doze fases, então “terminar este vilarejo antes da minha parada” é uma meta possível.',
          'O último teste é fácil de esquecer: dá para largar o jogo? Um bom jogo para transporte oferece pontos naturais para parar e não recebe você de volta com uma pilha de ofertas cronometradas. A parada deve encerrar a sessão; o jogo deve estar ali para quando você quiser retomá-lo.',
        ],
      },
      'battery-and-attention': {
        title: 'Bateria, som e atenção',
        paragraphs: [
          'Ficar offline elimina uma fonte de consumo da bateria, mas a tela e o próprio jogo ainda gastam energia. Em uma viagem longa, os dois ajustes mais úteis são o controle de brilho e o Modo Pouca Energia, que, segundo a Apple, reduz a atividade em segundo plano para prolongar a bateria. Se o jogo oferece redução de movimento ou de taxa de quadros, um voo longo é uma boa hora para ativá-la. OutBrick respeita o ajuste Reduzir Movimento do sistema em todos os lugares.',
          'O som também merece atenção. Um jogo que depende de sinais de áudio é difícil de usar em um vagão silencioso sem fones de ouvido. Os nove amigos de blocos de OutBrick falam por balões de texto, sem voz, então nada do que dizem se perde com o som desligado. E, como o modo para daltonismo vem ativado por padrão, cada bloco e cada porta têm um símbolo além da cor. Isso ajuda quando a iluminação do vagão é fraca ou altera as cores.',
        ],
      },
      'beyond-the-phone': {
        title: 'Além do celular',
        paragraphs: [
          'Em um voo longo, uma tela maior é mais confortável para os olhos e o pescoço. Se um jogo funciona no iPad e no iPhone e sincroniza o progresso, o tablet na mesinha e o celular na fila do controle de passaporte podem ser o mesmo jogo. OutBrick funciona no iPhone, iPad, Mac e Apple Vision Pro, e tem uma versão independente para Apple Watch para quando o celular está no compartimento superior.',
          'Antes da próxima viagem, confira a lista abaixo. Em casa, leva só alguns minutos e pode poupar uma hora de frustração depois.',
        ],
        bullets: [
          'Testado no Modo Avião, desde a abertura do jogo.',
          'Dá para jogar na vertical com um polegar.',
          'As fases são curtas o bastante para terminar entre duas paradas.',
          'Não há cronômetro correndo enquanto você olha para outro lado.',
          'Dá para jogar sem som.',
          'Brilho reduzido e Modo Pouca Energia ativado em viagens longas.',
        ],
      },
    },
    pullQuote: 'A pior hora para descobrir que um jogo precisa de conexão é dentro de um túnel.',
    faqs: [
      { question: 'Quais jogos de quebra-cabeça para iPhone funcionam offline?', answer: 'Muitos funcionam, mas “offline” pode significar o jogo completo ou apenas parte dele. O jeito confiável de saber é testar: ative o Modo Avião, feche o jogo, abra-o de novo e jogue algumas fases. OutBrick funciona offline.' },
      { question: 'OutBrick funciona no Modo Avião?', answer: 'Sim. OutBrick funciona offline, então você pode jogar sem conexão. O progresso fica no iCloud, e um dispositivo novo conectado à mesma conta continua de onde você parou.' },
      { question: 'Jogos offline gastam menos bateria?', answer: 'Desligar a rede elimina uma fonte de consumo, mas a tela e o próprio jogo continuam gastando energia. Em viagens longas, reduza o brilho e ative o Modo Pouca Energia, que diminui a atividade em segundo plano.' },
      { question: 'Posso jogar OutBrick no Apple Watch?', answer: 'Sim. Há uma versão independente para Apple Watch, além das versões para iPhone, iPad, Mac e Apple Vision Pro.' },
    ],
  },
  'why-two-minute-puzzles-feel-good': {
    title: 'Por que quebra-cabeças de dois minutos fazem bem',
    dek: 'O que pesquisas dizem sobre competência, atenção e as pequenas satisfações que fazem uma partida curta de OutBrick valer a pena.',
    imageAlt: 'Um tabuleiro brilhante de quebra-cabeça com o último bloco deslizando para uma saída da mesma cor',
    tags: ['jogos de quebra-cabeça', 'bem-estar', 'motivação', 'jogos casuais'],
    intro: 'Nem toda sessão de jogo precisa ser uma odisseia. Às vezes, a melhor forma de jogar é um ciclo pequeno e completo: notar um padrão, escolher uma jogada, ver o tabuleiro reagir e terminar com a sensação de que algo se encaixou.',
    keyTakeaways: [
      'Uma partida curta pode ser satisfatória quando oferece objetivos claros, retorno visível e uma sensação real de autonomia.',
      'Pesquisas apoiam efeitos modestos e de curto prazo dos jogos casuais sobre o humor e o envolvimento, não alegações amplas sobre inteligência ou tratamento.',
      'OutBrick foi pensado em torno de um ciclo pequeno e completo: um tabuleiro, uma decisão por vez e um desfazer grátis sempre à disposição.',
    ],
    sections: {
      'the-feeling-of-a-clean-clear': {
        title: 'A satisfação de limpar o tabuleiro',
        paragraphs: [
          'Um quebra-cabeça satisfatório não precisa sobrecarregar você com conteúdo. Precisa deixar clara a relação entre sua escolha e o resultado. Deslize um bloco, perceba a abertura e veja a porta responder. Essa pequena troca é o centro emocional de OutBrick.',
          'O modelo de motivação proposto por Przybylski, Rigby e Ryan descreve o envolvimento com jogos por meio de três necessidades básicas: competência, autonomia e conexão. Um quebra-cabeça pequeno pode atender às duas primeiras de imediato. Você entende uma regra e depois prova a si mesmo que consegue usá-la. O prazer vem tanto de ter conduzido a ação quanto de vencer.',
        ],
      },
      'what-short-play-can-and-cannot-do': {
        title: 'O que uma partida curta pode — e não pode — fazer',
        paragraphs: [
          'Um estudo controlado sobre jogos casuais constatou maior recuperação emocional de curto prazo e mais envolvimento depois de uma tarefa mentalmente exigente; as evidências de uma recuperação cognitiva ampla foram menos conclusivas. Essa diferença importa. Um jogo pode ajudar você a se sentir mais pronto para continuar sem se transformar em uma atualização mágica do cérebro.',
          'Outro estudo comparou um jogo casual com um exercício de atenção plena que percorre o corpo e observou redução do estresse psicológico e fisiológico nos dois grupos. A atenção plena teve resultado melhor no estresse psicológico relatado pelos próprios participantes, então jogos não substituem outras práticas. Um jogo de duração adequada pode ser uma opção modesta em meio a um dia cheio.',
        ],
      },
      'the-outbrick-loop': {
        title: 'O ciclo de OutBrick é pequeno de propósito',
        paragraphs: [
          'OutBrick começa com um tabuleiro que dá para entender de relance. Não há diário de missões para memorizar nem cronômetro para vencer; os objetivos do tabuleiro e o limite de jogadas ficam à vista desde o primeiro toque. O restante está no próprio tabuleiro: os blocos, os espaços livres e as portas correspondentes.',
          'O desfazer faz parte do ciclo, em vez de servir como punição. Por isso, o primeiro desfazer de cada tabuleiro é grátis e não acaba. Isso muda o peso emocional de experimentar. Você pode testar uma jogada, aprender com o resultado e aproveitar o que funcionou. Os tabuleiros ainda oferecem desafio; o que muda é que tentar custa menos do que hesitar. A página inicial explica [exatamente quanto custam vidas, desfazeres e anúncios](/pt-BR/#fair).',
        ],
        bullets: [
          'Um tabuleiro legível de cada vez.',
          'Uma relação clara entre a ação e o que acontece.',
          'Recursos de recuperação que mantêm a curiosidade.',
          'Um ponto final que chega antes que a sessão fique cansativa.',
        ],
      },
      'take-the-good-bit-with-you': {
        title: 'Leve com você a parte boa',
        paragraphs: [
          'Uma boa partida de dois minutos traz uma pequena sensação de progresso e deixa você decidir o que fazer depois. Se tiver tempo para outro tabuleiro, sempre há mais um. Se precisar ir, o jogo pode esperar.',
          'Por isso, OutBrick trata a tranquilidade como parte do design. As pesquisas não dizem que todo jogador se beneficia da mesma forma, nem provam um efeito universal. Elas apontam uma direção útil: criar um jogo que respeite a autonomia, torne o progresso fácil de perceber e deixe o jogador com mais escolhas do que tinha antes. Seguimos esse mesmo princípio em [Criar um jogo para a vida que os jogadores realmente têm](/blog/designing-for-real-life-play).',
        ],
      },
    },
    pullQuote: 'Experimentar custa menos do que hesitar.',
    faqs: [
      { question: 'OutBrick foi criado para melhorar a saúde mental?', answer: 'Não. OutBrick é um quebra-cabeça recreativo. Pesquisas sobre jogos casuais podem inspirar o design, mas não transformam o jogo em tratamento nem garantem resultados de bem-estar.' },
      { question: 'Por que as partidas de OutBrick são curtas?', answer: 'Partidas curtas deixam o quebra-cabeça principal claro e permitem encaixar o jogo na vida real. Você pode continuar jogando, mas não precisa reservar um longo período sem interrupções.' },
    ],
  },
} satisfies Pick<LocaleGuides, 'how-to-solve-sliding-block-puzzles' | 'colour-sort-puzzle-tips' | 'relaxing-puzzle-games-what-makes-one-calm' | 'offline-puzzle-games-iphone' | 'why-two-minute-puzzles-feel-good'>;
