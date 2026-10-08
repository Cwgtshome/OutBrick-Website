import type { ExtraGuides } from '../../i18n/blog.ts';
import { appStoreUrl } from '../../app-store-url.ts';

/** Brazilian Portuguese localization of the first guide in journal batch 6. */
export const ptBR6: ExtraGuides = {
  'outbrick-vs-block-out-puzzle': {
    title: 'OutBrick ou Block Out: qual combina mais com você?',
    dek: 'Compare as páginas oficiais de OutBrick e Block Out: regras, jogo offline, acessibilidade e custos para escolher conforme suas prioridades.',
    imageAlt:
      'Ilustração de OutBrick com um celular, blocos coloridos e dois personagens feitos de blocos em um tabuleiro azul-marinho',
    tags: [
      'quebra-cabeças de blocos',
      'jogos de quebra-cabeça',
      'design de jogos',
      'acessibilidade',
      'jogos offline',
    ],
    intro:
      'Um bloco vermelho está perto de uma saída vermelha, mas outro bloco bloqueia o caminho. O desafio não é reconhecer as cores: é decidir o que mover primeiro. Essa ideia em comum torna natural comparar OutBrick com Block Out! - Color Sort Puzzle, da Grand Games. A pergunta útil é qual versão desse desafio desperta sua vontade de jogar. Este guia compara as descrições publicadas dos dois jogos, consultadas em 30 de setembro de 2026. Somos os criadores de OutBrick e temos motivos para recomendá-lo. Também precisamos separar recursos documentados, preferências e dúvidas. Esta comparação se baseia em fontes, não em testes diretos.',
    keyTakeaways: [
      'Nos dois jogos, você move blocos coloridos até as saídas correspondentes; Block Out também anuncia elevadores móveis e geradores de blocos.',
      'Ambos anunciam jogo offline. OutBrick também publica declarações explícitas de acessibilidade; a ausência dessas informações em outro jogo não prova que os recursos não existam.',
      'Escolha pelo tipo de desafio e pelo nível de suporte que você procura. Baixar grátis ou jogar sem cronômetro não significa ter vidas ilimitadas nem ausência de compras.',
    ],
    sections: {
      'shared-loop-different-priorities': {
        title: 'Uma ideia em comum, diferenças que vale comparar',
        paragraphs: [
          'A Grand Games apresenta [Block Out! - Color Sort Puzzle](https://apps.apple.com/us/app/block-out-color-sort-puzzle/id6752672568) como um jogo de blocos deslizantes e saídas correspondentes, com layouts que mudam, elevadores móveis e geradores de blocos. São motivos concretos para experimentar se você gosta de tabuleiros dinâmicos e obstáculos em movimento. A descrição também incentiva movimentos rápidos. Não deduzimos daí as regras exatas nem o cronômetro de cada fase (Grand Games A.Ş., s.d.).',
          'A [página do OutBrick](https://apps.apple.com/us/app/outbrick-block-sort-puzzle/id6807997465) descreve um quebra-cabeça de cores com blocos deslizantes e 2.000 tabuleiros verificados por um solver. Desde a versão 5.1, OutBrick é jogado no modo Slide & Match: um bloco deslizado para onde você solta, volta para casa pela porta da sua cor ou troca de lugar com um vizinho, e três da mesma cor em linha somem. Nos tabuleiros clássicos, que ainda dá para jogar no navegador, cada bloco desliza até um obstáculo pará-lo; por isso, posicionar outro bloco também faz parte do plano: o obstáculo pode funcionar como um freio útil. Para começar, leia nosso [guia de quebra-cabeças de blocos deslizantes](/blog/how-to-solve-sliding-block-puzzles), sem presumir que capturas de tela parecidas representam movimentos iguais (Hamdi, s.d.).',
          'Uma comparação deve separar as exigências do tabuleiro da dificuldade que você sente. Mantemos essa distinção sem dar notas aos aplicativos. Um elevador pode trazer a novidade que alguém procura e interromper o raciocínio de outra pessoa. A verificação por solver confirma que existe uma solução segundo determinadas regras; não garante que todo mundo vá gostar de encontrá-la.',
          'Comece por uma preferência específica: você quer analisar um layout estável, reagir a obstáculos que mudam ou alternar entre os dois? Essa pergunta informa mais do que perguntar qual jogo é mais difícil. Um jogo exigente pode combinar melhor com você quando desafia uma habilidade que quer praticar; um jogo mais fácil ainda pode incomodar se a interface ou o ritmo não forem adequados.',
        ],
      },
      'choose-your-kind-of-challenge': {
        title: 'Escolha o tipo de desafio que você quer encarar',
        paragraphs: [
          'A pesquisa sugere que preferências importam. Em quatro estudos, Ryan et al. (2006) associaram sentimentos de competência e autonomia nos jogos ao prazer e às preferências. Isso não permite dizer qual desses aplicativos é mais divertido. A pesquisa sugere uma pergunta útil: você entende o que o jogo pede e pode escolher como enfrentá-lo? O mesmo tabuleiro pode ser agradável quando há tempo para pensar e cansativo quando você tenta responder a uma mensagem ao mesmo tempo.',
          'Desafio não é um defeito por si só. Ao estudar xadrez online e atividades do dia a dia, Abuhamdeh e Csikszentmihalyi (2012) observaram que a relação entre desafio e prazer dependia da motivação e do tipo de atividade. Os resultados não mostram que cronômetros fazem mal nem que jogos mais lentos são melhores. Eles apoiam uma recomendação condicional: prefira planejamento se isso lhe agrada e ação rápida se a velocidade faz parte da diversão.',
          'As notas atuais da versão de OutBrick na App Store informam que a versão 4.2 removeu o modo Rush do jogo inteiro. Os tabuleiros continuam com limites de movimentos: jogar sem cronômetro ainda exige planejar as ações. Se evitar a contagem regressiva é sua prioridade, leia nossa [comparação de quebra-cabeças de blocos sem cronômetro](/blog/no-timer-block-sort-puzzles-iphone) (Hamdi, s.d.). Se você procura obstáculos dinâmicos, os elevadores e geradores anunciados por Block Out fazem dele uma opção razoável para experimentar.',
          'Uma boa primeira sessão responde a uma pergunta modesta: quero jogar outro tabuleiro desse tipo? Não se obrigue a decidir depois de uma única tentativa frustrante. Aprender uma regra de movimento e gostar dela são decisões diferentes. Você também não precisa insistir porque o jogo tem um mapa bonito, muitas fases ou um público grande.',
        ],
      },
      'feedback-and-earned-progress': {
        title: 'Procure retornos que ajudem a entender seu progresso',
        paragraphs: [
          'Imagine mover um bloco azul para criar um ponto de parada para um vermelho. Se o jogo mostra claramente onde o azul para, fica mais fácil prever o próximo trajeto do vermelho. Se o movimento surpreender você, o próximo passo é aprender essa regra. Essa observação vale para os dois aplicativos. Não medimos a capacidade de resposta, comparamos a latência dos controles nem contamos movimentos acidentais.',
          'Klimmt et al. (2007) estudaram prazer e sensação de influência em uma experiência online com 500 pessoas. A influência percebida importava, mas a relação com controle era mais complexa do que “quanto mais, melhor”. Ao escolher um quebra-cabeça, observe se suas ações têm consequências compreensíveis. Essa é uma aplicação editorial dos resultados, não uma prova de que um dos jogos tenha controles melhores.',
          'Iacovides et al. (2015) usaram vários estudos de caso para explorar as relações entre ação, compreensão e envolvimento durante o jogo. Os relatos destacaram momentos de descoberta e a sensação de ser responsável pelo próprio progresso. Isso ajuda a entender por que resolver uma fase por conta própria pode ser diferente de avançar com um bônus desconhecido. Não prova benefícios para a inteligência nem exige que você recuse ajuda.',
          'Tente explicar o que aprendeu na última tentativa: “Esta casa precisa ficar vazia antes de eu mover o bloco comprido”. Se conseguir, até uma tentativa malsucedida trouxe uma informação. Nosso artigo sobre [como ler um quebra-cabeça antes do primeiro movimento](/blog/how-to-read-a-puzzle-before-moving) desenvolve esse hábito. Se você não entende por que um movimento foi recusado, procure um tutorial ou ajuda antes de atribuir o problema a si mesmo.',
        ],
      },
      'offline-accessibility-and-costs': {
        title: 'Jogo offline, acessibilidade e custo de uma sessão',
        paragraphs: [
          'As duas páginas oficiais anunciam jogo offline (Grand Games A.Ş., s.d.; Hamdi, s.d.). Portanto, jogar offline não é uma vantagem exclusiva de OutBrick em relação a Block Out. Ainda vale perguntar quais serviços de cada aplicativo exigem conexão. Baixe e abra o jogo antes de sair e confira se o tabuleiro desejado está disponível. O anúncio de fases offline não garante que anúncios, compras ou sincronização funcionem sem internet.',
          'A página de OutBrick declara explicitamente compatibilidade com VoiceOver, identificação sem depender apenas da cor, redução de animações e interface escura (Hamdi, s.d.). São declarações do desenvolvedor, não uma auditoria independente. Na consulta, a página de Block Out não informava recursos de acessibilidade. Isso é falta de informação, não prova de incompatibilidade. Nossa [comparação de acessibilidade em jogos de ordenar cores](/blog/color-block-jam-accessible-alternative) explica o que testar quando esses recursos são essenciais.',
          'Os dois jogos são gratuitos para baixar e declaram anúncios e compras no app. OutBrick também tem vidas e vídeos opcionais com recompensa. Leia os detalhes atuais de uma compra antes de decidir o que ela remove ou libera; este guia não promete remoção permanente de anúncios nem tentativas ilimitadas. Um recurso anunciado merece atenção, mas não substitui sua decisão de gastar.',
          'Defina um limite simples para a primeira sessão: não gastar enquanto aprende a regra. Pense se está tudo bem parar quando a sessão gratuita acabar. Se estiver comparando jogos para uma criança ou outra pessoa, avaliem juntos essas interrupções. Uma recomendação justa considera o custo para continuar, não só o custo para baixar.',
        ],
      },
      'our-conditional-recommendation': {
        title: 'Nossa recomendação: confira se combina com você e depois baixe',
        paragraphs: [
          'OutBrick pode interessar se você procura a regra de planejamento Slide & Match, tabuleiros verificados por solver e recursos de acessibilidade documentados explicitamente. Block Out também pode interessar se elevadores, geradores e layouts dinâmicos chamam sua atenção. Nenhuma conclusão é uma classificação universal. Não concluímos que um concorrente não tem um recurso só porque a página dele não o menciona.',
          'Você pode conhecer a regra de movimento clássica de OutBrick em um [tabuleiro jogável no navegador](/play). O navegador mantém a regra antiga de deslizar até parar, então é uma introdução útil à ideia das portas da mesma cor, não um substituto completo do aplicativo instalado: o navegador não valida todos os modos nativos, compras ou recursos de acessibilidade. Se você gosta de planejar um caminho em vez de arrastar um bloco diretamente ao destino, tem um motivo concreto para saber mais.',
          `Quer experimentar? [Baixe OutBrick na App Store da Apple](${appStoreUrl('journal-block-out')}) e consulte os requisitos atuais do aparelho e os detalhes das compras. Se acessibilidade for decisiva, leia primeiro nossas [informações de acessibilidade](/accessibility) e use a lista de verificação no seu dispositivo. Concluir o download é o início dessa avaliação, não a prova de que o app atende a todas as necessidades.`,
          'Mantenha sua decisão reversível. É razoável preferir quebra-cabeças diferentes em momentos diferentes ou deixar um para sessões rápidas e outro para pensar com calma. A melhor comparação esclarece suas preferências sem exigir que você concorde com o estúdio que publica o guia.',
        ],
      },
      'product-sources': {
        title: 'Fontes dos produtos e escopo da comparação',
        paragraphs: [
          'As informações sobre os produtos vêm das páginas da App Store dos Estados Unidos consultadas em 30 de setembro de 2026. Recursos, disponibilidade e condições de compra podem mudar. As referências científicas abaixo explicam os critérios da comparação; nenhum dos estudos testou ou recomendou esses aplicativos.',
          'Grand Games A.Ş. (s.d.). Block Out! - Color Sort Puzzle [aplicativo móvel]. App Store. Consultado em 30 de setembro de 2026 na [página de Block Out](https://apps.apple.com/us/app/block-out-color-sort-puzzle/id6752672568).',
          'Hamdi, M. (s.d.). OutBrick: Block Sort Puzzle [aplicativo móvel]. App Store. Consultado em 30 de setembro de 2026 na [página de OutBrick](https://apps.apple.com/us/app/outbrick-block-sort-puzzle/id6807997465).',
        ],
      },
    },
    pullQuote:
      'Uma comparação deve separar as exigências do tabuleiro da dificuldade que você sente.',
    faqs: [
      {
        question: 'OutBrick é o mesmo jogo que Block Out Puzzle?',
        answer:
          'Não. OutBrick é criado por Mourad Hamdi, e Block Out! - Color Sort Puzzle, pela Grand Games A.Ş. Os dois compartilham a ideia de blocos deslizantes e saídas correspondentes, mas as regras e os recursos publicados são diferentes.',
      },
      {
        question: 'Dá para jogar OutBrick e Block Out offline?',
        answer:
          'As descrições oficiais dos dois jogos na App Store anunciam jogo offline. Isso não garante que compras, anúncios ou sincronização do progresso funcionem sem conexão.',
      },
      {
        question: 'Qual dos jogos é melhor para pessoas daltônicas?',
        answer:
          'OutBrick declara explicitamente que oferece identificação sem depender apenas da cor. A falta de uma declaração de acessibilidade em Block Out não prova que o recurso não exista; avalie os aplicativos instalados conforme suas necessidades.',
      },
      {
        question: 'OutBrick não tem cronômetro nem compras?',
        answer:
          'As notas atuais indicam que a versão 4.2 removeu os cronômetros, mas o jogo mantém limites de movimentos, vidas e compras no app. Não ter cronômetro não significa tentativas ilimitadas nem ausência de ofertas de compra.',
      },
    ],
  },
};
