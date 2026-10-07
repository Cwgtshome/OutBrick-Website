import type { ExtraGuides } from '../../i18n/blog.ts';
import { ptBR3Rest } from './pt-BR-3-rest.ts';

const ptBR3Core: ExtraGuides = {
  'colour-blindness-in-games': {
    title: 'Daltonismo nos jogos: causas e soluções',
    dek: 'Cerca de um em cada doze homens de ascendência europeia tem deficiência vermelho-verde. Entenda o impacto nos jogos e o que ajuda.',
    imageAlt: 'Moss e Flurry ao lado de um celular com a área Bamboo Springs do mapa Jornada de OutBrick e blocos turquesa, laranja e vermelhos flutuando',
    tags: ['acessibilidade', 'daltonismo', 'design inclusivo', 'jogos de quebra-cabeça', 'visão de cores'],
    intro: 'Em um grupo de vinte e cinco homens de ascendência europeia, é provável que dois percebam o vermelho e o verde de um jeito diferente das outras pessoas. Mesmo assim, muitos jogos ainda são projetados como se eles não estivessem ali. Este guia explica o que é a deficiência na visão de cores, com que frequência ela ocorre, como afeta a experiência de jogo e o que pode ajudar: tanto ajustes que você ativa hoje quanto escolhas de design que dispensam esses ajustes.',
    keyTakeaways: [
      'A deficiência vermelho-verde hereditária afeta cerca de 8% dos homens e 0,4% das mulheres de ascendência europeia, além de 4% a 6,5% dos homens chineses e japoneses.',
      'Raramente significa “enxergar em tons de cinza”. A maioria das pessoas afetadas percebe muitas cores, mas confunde alguns pares e demora mais para encontrar algo quando a cor é a única pista.',
      'A solução mais eficaz é não depender apenas da cor. Símbolos e padrões ajudam mais quando são simples o bastante para serem entendidos sem treinamento.',
    ],
    sections: {
      'how-common': {
        title: 'Qual é a frequência do daltonismo?',
        paragraphs: [
          'A revisão de Jennifer Birch, publicada em 2012 e baseada em grandes levantamentos populacionais aleatórios, é a fonte que muitos pesquisadores consultam. Em populações caucasianas europeias, cerca de 8% dos homens e 0,4% das mulheres têm deficiência vermelho-verde hereditária. Entre homens de etnia chinesa e japonesa, a taxa é menor, entre 4% e 6,5%. Birch observa que levantamentos recentes sugerem números crescentes entre homens de etnia africana e em regiões povoadas por migrantes. Ela atribui as diferenças a efeitos fundadores e deriva genética, e não à seleção natural.',
          'A diferença entre homens e mulheres tem uma explicação simples. Como Simunovic explica em sua revisão publicada na revista Eye, as formas mais comuns são herdadas de modo recessivo pelo cromossomo X. Por isso, um homem precisa de uma cópia afetada, enquanto uma mulher precisa de duas. Também é por esse motivo que uma mãe com visão de cores normal pode transmitir a condição ao filho. Em um jogo com milhões de pessoas, essas porcentagens representam muita gente diante de uma interface que usa cores de um jeito diferente.',
        ],
      },
      'what-it-is-like': {
        title: 'Como é: não é tudo cinza, mas algumas cores se confundem',
        paragraphs: [
          'A imagem popular do daltonismo como um mundo em preto e branco descreve uma condição raríssima. A maioria das pessoas com deficiência na visão de cores é tricromata anômala: tem os três tipos de cones, mas um deles reage de outro modo, fazendo com que algumas cores distintas para outras pessoas pareçam iguais. Os dicromatas, a quem falta um tipo de cone, têm uma faixa de percepção ainda mais limitada. Vermelhos, verdes, marrons e laranjas são as confusões clássicas nas formas vermelho-verde mais comuns; a deficiência azul-amarelo também existe, mas é muito mais rara.',
          'A extensa revisão de Barry Cole sobre as dificuldades práticas é um relato especialmente útil do impacto no cotidiano. Quase todas as pessoas com visão de cores atípica, exceto algumas com deficiência leve, relatam problemas com cores na vida diária. Elas têm dificuldade quando a cor funciona como código, podem não identificar com segurança uma cor pelo nome e são mais lentas e menos precisas em buscas visuais quando a cor destaca o alvo. Pense no último resultado dentro de um jogo: “encontre a peça vermelha” é exatamente o tipo de tarefa que muitos quebra-cabeças propõem.',
          'Isso também explica por que as pessoas próximas a quem tem daltonismo costumam subestimar o problema. Flatla e Gutwin criaram simulações baseadas na percepção de cores medida individualmente, em vez de usar um modelo genérico, e pediram a duplas de amigos ou parentes que conversassem sobre imagens do cotidiano vistas por essas simulações. As versões personalizadas foram mais precisas que os modelos padrão, e as conversas revelaram detalhes da experiência que os acompanhantes ainda não compreendiam.',
        ],
      },
      'where-games-go-wrong': {
        title: 'Onde os jogos costumam falhar',
        paragraphs: [
          'Alguns exemplos se repetem: barras de vida que mudam de verde para vermelho; equipes identificadas em vermelho e verde; marcadores de mapa, níveis de raridade e itens organizados apenas pelo matiz; quebra-cabeças de combinar e ordenar cujas peças diferem somente pela cor. E, de forma menos óbvia, avisos de “certo” ou “errado” que piscam em verde ou vermelho sem um ícone, som ou movimento que reforce a mensagem.',
          'A solução que muitos jogos adotam é um filtro: uma opção no menu que altera a paleta inteira para protanopia, deuteranopia ou tritanopia. Filtros ajudam algumas pessoas, mas têm limites. Pressupõem que todo mundo com o mesmo rótulo enxerga da mesma maneira, algo que o trabalho de Flatla e Gutwin mostra que não é verdade, e podem deixar o restante do jogo estranho. É melhor usar a cor como um sinal entre vários, eliminando a necessidade de filtros. Apresentamos esse princípio em [por que a cor nunca deve ser a única pista em um quebra-cabeça](/blog/color-shape-accessibility); as pesquisas sobre padrões mostram como colocá-lo em prática.',
        ],
      },
      'patterns-that-work': {
        title: 'O que as pesquisas dizem sobre símbolos e padrões',
        paragraphs: [
          'Geddes, Flatla, Tigwell e Peiris testaram padrões de cores, sobreposições que representam uma cor como forma ou textura, em um estudo online com pessoas com deficiência na visão de cores. Esquemas de padrões anteriores funcionavam em laboratório, mas eram difíceis de aprender. A equipe comparou um esquema publicado com dois novos desenhos em três tarefas: escolher uma cor, acompanhar um gradiente e ordenar itens. Nenhum padrão venceu em todas as tarefas. Um deles transformava cada cor em um ícone simples e ajudou na seleção e na ordenação, mas teve dificuldade com gradientes; um desenho combinado trouxe algum benefício em todas as tarefas.',
          'A lição para quem projeta quebra-cabeças é clara: quando o objetivo é separar peças distintas em lugares próprios, o melhor recurso é um símbolo simples e fácil de lembrar para cada cor, que possa ser reconhecido de relance em vez de decifrado. Foi essa a abordagem adotada em OutBrick. O modo para pessoas com daltonismo vem ativado por padrão e marca cada bloco e sua porta correspondente com um glifo próprio. Assim, ninguém precisa pedir ajuda para distinguir duas peças. Ainda queremos saber onde a solução falha; a [página de acessibilidade](/accessibility) explica como falar conosco.',
        ],
      },
      'player-tips': {
        title: 'Dicas para quem tem daltonismo',
        paragraphs: [
          'Se você sabe ou suspeita que tem uma deficiência na visão de cores, alguns hábitos podem facilitar os jogos. Nenhum deles exige diagnóstico, embora um oftalmologista possa fazer um teste rápido. O NHS oferece uma [visão geral da deficiência na visão de cores](https://www.nhs.uk/conditions/colour-vision-deficiency/) para quem quiser saber mais. A revisão de Simunovic também observa que lentes coloridas vendidas como auxílio para daltonismo podem ajudar em tarefas específicas, mas não restauram a discriminação normal de cores; encare essas promessas com cautela.',
        ],
        bullets: [
          'Antes de começar um jogo, abra as opções de acessibilidade ou de tela e procure um modo para daltonismo que acrescente símbolos, em vez de apenas mudar a paleta.',
          'No iPhone e no iPad, ative Diferenciar sem Cor em Ajustes > Acessibilidade > Tela e Tamanho do Texto. Jogos bem projetados respeitam essa opção.',
          'Se um jogo não tiver opções próprias, experimente Filtros de Cor no mesmo menu, mas espere que eles alterem tudo na tela, não apenas o jogo.',
          'Em quebra-cabeças de ordenação, aprenda desde cedo o símbolo ou formato de cada peça, antes que os tabuleiros fiquem cheios. A maioria das [estratégias para quebra-cabeças de ordenação por cor](/blog/colour-sort-puzzle-tips) funciona do mesmo jeito com símbolos.',
          'Conte aos desenvolvedores o que deu errado e em que parte. Uma captura de tela da interface confusa vale mais que um parágrafo de descrição.',
        ],
        note: 'A deficiência na visão de cores também pode surgir mais tarde por causa de uma doença ocular ou de alguns medicamentos. Se sua percepção das cores mudar, vale conversar com um oftalmologista ou médico.',
      },
    },
    pullQuote: 'Pense no último resultado dentro de um jogo: “encontre a peça vermelha” é exatamente o tipo de tarefa que muitos quebra-cabeças propõem.',
    faqs: [
      { question: 'Qual é a frequência do daltonismo?', answer: 'A deficiência vermelho-verde hereditária afeta cerca de 8% dos homens e 0,4% das mulheres de ascendência europeia, além de 4% a 6,5% dos homens chineses e japoneses. A deficiência azul-amarelo e o daltonismo total são muito mais raros.' },
      { question: 'Pessoas com daltonismo enxergam em preto e branco?', answer: 'Quase nunca. A maioria percebe muitas cores, mas confunde alguns pares, sobretudo vermelhos, verdes, marrons e laranjas, e demora mais para encontrar alvos identificados pela cor.' },
      { question: 'Qual é a melhor configuração para daltonismo em um jogo?', answer: 'Um modo que acrescente símbolos, formas ou padrões às cores costuma ajudar mais que um filtro que apenas altera a paleta, pois funciona com diferentes tipos e graus de deficiência na visão de cores.' },
      { question: 'É possível jogar OutBrick tendo daltonismo?', answer: 'Sim. O modo para pessoas com daltonismo vem ativado por padrão e coloca um glifo próprio em cada bloco e na porta correspondente, para que você possa ordenar pelos símbolos em vez dos tons. Você pode [experimentar um tabuleiro no navegador](/play) primeiro.' },
    ],
  },
  'puzzles-executive-function-children': {
    title: 'Quebra-cabeças desenvolvem funções executivas?',
    dek: 'As funções executivas sustentam planejamento e autocontrole. Veja o que estudos dizem sobre jogos para crianças e como brincar pode ajudar.',
    imageAlt: 'Sprout e Vio ao lado de um celular com a área Bamboo Springs do mapa Jornada de OutBrick e blocos amarelos, verdes e azuis flutuando',
    tags: ['funções executivas', 'jogos educativos', 'crianças', 'pesquisas sobre quebra-cabeças', 'treino cerebral'],
    intro: 'As funções executivas se tornaram um dos conceitos mais comentados — e mais usados em publicidade — no desenvolvimento infantil. Apps, brinquedos e quebra-cabeças prometem desenvolvê-las. As pesquisas são animadoras em alguns aspectos e mais cautelosas em outros; pais merecem conhecer os dois lados. Veja o que são as funções executivas, o que as melhores evidências dizem sobre treiná-las, onde os quebra-cabeças entram e como brincar com uma criança de um jeito que tenha mais chances de ajudar.',
    keyTakeaways: [
      'Funções executivas incluem manter informações na memória, controlar impulsos e alternar entre ideias. Elas podem melhorar com a prática.',
      'A prática costuma melhorar principalmente a habilidade exercitada. As evidências de uma “transferência distante” para o desempenho escolar ou a inteligência são fracas.',
      'As abordagens mais eficazes são prazerosas, ficam progressivamente mais difíceis e fazem parte do cotidiano — características de boas brincadeiras.',
    ],
    sections: {
      'what-executive-function-is': {
        title: 'O que são funções executivas',
        paragraphs: [
          'Na revisão bastante citada de Adele Diamond, funções executivas são os processos mentais que nos permitem trabalhar com ideias, parar para pensar antes de agir, enfrentar desafios novos, resistir a tentações e manter a concentração. Ela descreve três habilidades centrais. Controle inibitório é a capacidade de conter um impulso e manter a atenção onde ela precisa estar. Memória de trabalho é guardar informações na mente enquanto as usamos. Flexibilidade cognitiva é enxergar outro ponto de vista e mudar de estratégia quando a situação muda.',
          'Um quebra-cabeça de blocos deslizantes exercita as três habilidades em pequena escala. Você mantém um plano de vários movimentos na cabeça, resiste ao deslize tentador que parece bom mas bloqueia uma porta e abandona o plano quando um bloco para num lugar inesperado. Diamond também ressalta que estresse, falta de sono, solidão e sedentarismo prejudicam as funções executivas. É bom lembrar que nenhum quebra-cabeça compensa o cansaço ou a ansiedade de uma criança.',
          'Essas habilidades se desenvolvem aos poucos. Diamond descreve um longo processo que começa na primeira infância e vai até a adolescência, um dos motivos para manter expectativas realistas em relação às crianças menores. Uma criança de quatro anos que desliza blocos sem planejar e outra de sete que pensa dois movimentos à frente estão ambas agindo de acordo com a idade. A diferença vem do desenvolvimento, não de um déficit que um jogo deveria corrigir.',
        ],
      },
      'what-diamond-and-lee-found': {
        title: 'O que mostrou a revisão de referência',
        paragraphs: [
          'Em 2011, Diamond e Lee analisaram, na revista Science, programas testados quanto aos efeitos nas funções executivas de crianças de 4 a 12 anos. Vários demonstraram benefícios: treinamento computadorizado, jogos sem computador, exercícios aeróbicos, artes marciais, ioga, atenção plena e alguns currículos escolares. Os programas bem-sucedidos tinham algo em comum: prática repetida e desafios que aumentavam conforme a criança progredia. As crianças que começaram com funções executivas mais frágeis tendiam a ganhar mais.',
          'Dois outros pontos dessa revisão são fáceis de ignorar. Primeiro, programas que apoiavam o desenvolvimento emocional e social das crianças, além do raciocínio, tendiam a ter resultados melhores. Segundo, os maiores benefícios apareciam em tarefas parecidas com as que haviam sido praticadas. Esse último ponto virou o centro do debate que veio depois.',
        ],
      },
      'the-transfer-problem': {
        title: 'O desafio da transferência',
        paragraphs: [
          'Melhorar na tarefa treinada é chamado de transferência próxima. Melhorar em algo diferente, como leitura, matemática ou raciocínio geral, é transferência distante — e é isso que a maioria dos produtos promete. Kassai e colegas reuniram estudos experimentais sobre o treinamento de funções executivas em crianças. Encontraram um efeito sólido de transferência próxima: houve melhora moderada nas habilidades treinadas. Mas treinar um componente, como a memória de trabalho, não melhorou os outros de forma confiável; o efeito de transferência distante foi pequeno e não atingiu significância estatística.',
          'Outras meta-análises apontam na mesma direção. Melby-Lervåg e Hulme constataram que treinar a memória de trabalho traz ganhos de curto prazo na própria memória, mas não evidências convincentes de melhora em outras habilidades. Sala e Gobet analisaram estudos sobre xadrez, música e treino de memória de trabalho em crianças. Os benefícios aparentes diminuíam conforme a qualidade dos estudos aumentava, e os autores concluíram que a transferência distante é rara. Em uma análise conjunta de 90 estudos com quase 9 mil crianças, Takacs e Kassai concluíram que é possível desenvolver funções executivas na infância, mas não encontraram evidências convincentes de que os ganhos durassem no acompanhamento posterior. Também observaram que abordagens que desenvolvem essas habilidades de forma implícita, como parte de atividades cotidianas agradáveis, eram tão eficazes quanto exercícios explícitos ou até mais.',
        ],
        note: 'Isso acompanha as evidências sobre adultos, que analisamos em [jogos de quebra-cabeça fazem bem ao cérebro?](/blog/are-puzzle-games-good-for-your-brain).',
      },
      'where-puzzles-fit': {
        title: 'Qual é o lugar dos quebra-cabeças',
        paragraphs: [
          'Então, eles servem para alguma coisa? Sim, desde que as expectativas sejam realistas. Quebra-cabeças permitem praticar justamente as habilidades que usam: planejar, ter paciência, pensar antes de agir e se recuperar de uma escolha errada. Isso já tem valor. Também há indícios sobre habilidades espaciais. Levine e colegas observaram crianças de dois a quatro anos e seus pais em casa e descobriram que, aos quatro anos e meio, as crianças que brincavam com quebra-cabeças de encaixe se saíam melhor em uma tarefa de transformação espacial, mesmo após considerar renda familiar, escolaridade e o quanto os pais conversavam. Como foi um estudo observacional, ele não mostra que os quebra-cabeças causaram a diferença, mas o resultado combina com o que sabemos sobre aprendizagem espacial.',
          'A conclusão realista é que quebra-cabeças são uma boa forma de brincar, não um tratamento. Uma criança que gosta deles pratica de verdade o pensamento antecipado. Uma criança obrigada a fazê-los “pelo cérebro” provavelmente aproveitará menos — e gostará menos também.',
          'Pais costumam perguntar se quebra-cabeças na tela são tão bons quanto os físicos. As evidências não resolvem essa questão. A revisão de Diamond e Lee incluiu treinamento computadorizado e jogos sem computador entre as atividades que trouxeram benefícios. O elemento comum aos programas bem-sucedidos não era o meio, mas a prática repetida com desafios crescentes. Um quebra-cabeça de encaixe na mesa da cozinha e um jogo de blocos deslizantes no tablet pedem tipos de raciocínio parecidos. O que mais muda é tudo ao redor: a participação de um adulto e se o app foi criado para manter a atenção a qualquer custo.',
        ],
      },
      'playing-well': {
        title: 'Como brincar com quebra-cabeças de um jeito que ajude',
        paragraphs: [
          'As pesquisas sobre o que funciona sugerem alguns hábitos. Todos dizem respeito a como vocês brincam, não ao que compram. OutBrick tem classificação 4+ e a [página de classificação etária](/age-rating) explica o motivo. O jogo tem limite de movimentos, mas não cronômetro, para a criança poder pensar o tempo que precisar. Vocês podem [jogar um tabuleiro no navegador](/play) juntos antes de decidir se combina com ela. Nosso guia de [como resolver quebra-cabeças de blocos deslizantes](/blog/how-to-solve-sliding-block-puzzles) apresenta estratégias para conversar durante a brincadeira.',
        ],
        bullets: [
          'Brinquem juntos e pensem em voz alta. Pergunte “o que acontece se a gente deslizar esse bloco?” antes de alguém movê-lo.',
          'Busque um desafio difícil, mas possível. O benefício vem de uma dificuldade que cresce junto com a criança.',
          'Trate um movimento errado como informação, não como fracasso. Use Desfazer para experimentar outra rota.',
          'Use palavras espaciais: acima, atrás, bloqueado, virar, borda. O estudo de Levine sugere que a conversa em torno dos quebra-cabeças faz diferença.',
          'Parem enquanto ainda está divertido. O prazer não é um extra: faz parte do motivo pelo qual a prática implícita funciona.',
        ],
      },
    },
    pullQuote: 'A conclusão realista é que quebra-cabeças são uma boa forma de brincar, não um tratamento.',
    faqs: [
      { question: 'O que são funções executivas em crianças?', answer: 'São um conjunto de habilidades mentais que inclui memória de trabalho, controle inibitório e flexibilidade cognitiva. Em conjunto, elas ajudam crianças a planejar, manter a atenção, controlar impulsos e se adaptar a mudanças.' },
      { question: 'Quebra-cabeças melhoram as funções executivas?', answer: 'Eles permitem praticar planejamento e autocontrole, e a prática melhora as habilidades exercitadas. As evidências de que isso se transfira para matérias escolares ou inteligência geral são fracas. Por isso, o melhor é brincar pelo prazer, e não tratar quebra-cabeças como treinamento obrigatório.' },
      { question: 'Apps de treino cerebral são bons para crianças?', answer: 'Meta-análises indicam que o treino melhora o desempenho nas tarefas praticadas, mas raramente se transfere para outras habilidades, e os ganhos muitas vezes diminuem. Atividades cotidianas agradáveis que desafiam as crianças funcionam pelo menos tão bem.' },
      { question: 'A partir de que idade OutBrick é indicado?', answer: 'OutBrick tem classificação 4+, não inclui conteúdo adulto nem chat público e não tem cronômetro. A [página de classificação etária](/age-rating) explica a classificação e os vídeos com recompensa que só são exibidos quando solicitados.' },
    ],
  },
  'reduce-motion-games': {
    title: 'Enjoo causado por jogos: por que Reduzir Movimento importa',
    dek: 'Entenda por que o movimento na tela causa tontura ou enjoo, quem é mais suscetível e como o ajuste Reduzir Movimento e animações cuidadosas ajudam.',
    imageAlt: 'Peach e Bloo ao lado de um celular com um tabuleiro superdifícil de OutBrick no nível 214 e blocos turquesa, vermelhos e verdes ao redor',
    tags: ['acessibilidade', 'Reduzir Movimento', 'enjoo de movimento', 'design inclusivo', 'design de jogos'],
    intro: 'A maioria das pessoas nem pensa no movimento de um jogo até começar a passar mal. Para uma parcela significativa, uma câmera que faz curvas, um fundo com paralaxe ou uma tela que treme a cada vitória provoca tontura, enjoo ou dor de cabeça, às vezes por bastante tempo depois de largar o aparelho. Não é frescura. É uma reação bem estudada do sistema de equilíbrio do corpo, e existe um ajuste simples para lidar com ela. Veja o que as pesquisas dizem e o que jogadores e designers podem fazer.',
    keyTakeaways: [
      'O enjoo de movimento induzido visualmente ocorre quando os olhos percebem um movimento que os órgãos do equilíbrio não sentem.',
      'A suscetibilidade varia muito. Histórico de enjoo de movimento, enxaqueca e tontura ajudam a prever quem será mais afetado.',
      'Respeitar o ajuste Reduzir Movimento custa pouco a quem desenvolve jogos e pode definir se alguém consegue jogar ou não.',
    ],
    sections: {
      'why-screens-make-you-sick': {
        title: 'Por que uma tela pode causar enjoo',
        paragraphs: [
          'O senso de equilíbrio depende de três fontes: os olhos, os órgãos vestibulares no ouvido interno e a sensação do corpo em contato com o chão. Em geral, eles concordam. Quando uma grande parte do campo de visão se move como se você estivesse em movimento, mas o ouvido interno informa que você está parado, os sinais entram em conflito. Para muita gente, o resultado são sintomas como desorientação, cansaço visual, suor e enjoo, conhecidos como enjoo de movimento induzido visualmente ou, no caso de telas digitais, ciberenjoo.',
          'A revisão de Rebenitsch e Owen reuniu evidências sobre o que provoca o problema. Muitas pesquisas abordam realidade virtual e telas grandes, em que o efeito é mais forte, mas os fatores também se aplicam a celulares e tablets: quanto da imagem se move, com que rapidez, em que direção, como ela é renderizada e por quanto tempo a pessoa fica exposta. Uma sensação relacionada, chamada veção, é a ilusão de que você está se movendo, como quando um trem parado parece partir porque o trem ao lado começou a andar. Keshavarz e colegas revisaram a relação entre os dois fenômenos e concluíram que ela é menos direta do que se supunha: veção e enjoo costumam ocorrer juntos, mas nem sempre.',
        ],
      },
      'which-motion': {
        title: 'Quais tipos de movimento causam mais problema',
        paragraphs: [
          'Nem todo movimento é igual. Em dois experimentos, Keshavarz e colegas variaram a velocidade e a densidade de um campo de estrelas em movimento e, depois, acrescentaram rotação. O movimento mais rápido e denso intensificou a ilusão de deslocamento, mas mudou pouco o nível de enjoo. A inclinação, uma rotação para cima e para baixo, causou as maiores pontuações de enjoo e mais desorientação. Na prática, rotação e movimento de câmera incomodam mais do que elementos que se deslocam sobre um fundo parado.',
          'Isso corresponde ao que jogadores sensíveis ao movimento costumam contar: o problema aparece quando a cena inteira se mexe de uma vez. Tremor de câmera, zooms que ocupam a tela toda, camadas em paralaxe que deslizam em velocidades diferentes e transições que giram a imagem são os suspeitos habituais. Um bloco deslizando sobre um tabuleiro estável é bem diferente de um tabuleiro inteiro se sacudindo.',
        ],
      },
      'who-is-susceptible': {
        title: 'Quem é mais suscetível',
        paragraphs: [
          'A suscetibilidade varia muito de uma pessoa para outra. Golding, Rafiq e Keshavarz testaram um questionário curto sobre enjoo de movimento induzido visualmente com 30 adultos que assistiram a uma cena urbana giratória e oscilante. O questionário previu cerca de um terço da variação nos sintomas; esse número passou da metade quando se acrescentaram histórico de enjoo de movimento comum, enxaqueca, desmaios e o impacto cotidiano da tontura. Em um trabalho anterior sobre o questionário padrão de enjoo de movimento, Golding já havia identificado a enxaqueca como uma das associações mais claras entre enjoo de movimento e outros tipos de náusea. No estudo de Rebenitsch e Owen sobre diferenças individuais, o histórico de enjoo de movimento estava entre os melhores indicadores de ciberenjoo.',
          'Para algumas pessoas, o problema vai além de um enjoo ocasional. Bronstein descreveu um grupo de pacientes, a maioria com um distúrbio do sistema vestibular do ouvido interno, para quem cenas visuais movimentadas ou confusas provocavam vertigem de forma consistente. Ele chamou essa condição de vertigem visual. Para essas pessoas, uma tela cheia de movimento não é apenas irritante: é uma barreira real. Nenhum jogo pode diagnosticar ou tratar isso, e vale conversar com um médico sobre tonturas persistentes. O que o jogo pode fazer é evitar piorá-las.',
        ],
      },
      'what-reduce-motion-does': {
        title: 'O que Reduzir Movimento faz e o que designers devem fazer',
        paragraphs: [
          'No iPhone e no iPad, o ajuste fica em Ajustes > Acessibilidade > Movimento > Reduzir Movimento. Quando ele está ativado, o sistema substitui transições com zoom e deslize por esmaecimentos mais suaves e informa aos apps que a pessoa prefere menos movimento. Cabe a cada app respeitar o pedido. A web oferece um recurso equivalente, e a orientação do W3C sobre [animação acionada por interações](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) recomenda permitir que esse movimento seja desativado, a menos que seja essencial.',
          'A palavra “essencial” é importante. Em um quebra-cabeça de blocos deslizantes, é preciso ver o bloco se mover para acompanhar o tabuleiro. Mas confetes, câmera saltitante e fundo flutuante são decoração e podem sair. OutBrick respeita o ajuste Reduzir Movimento em todo o jogo: com ele ativado, reduzimos a paralaxe, os confetes e as transições com efeito de mola, mas os blocos continuam mostrando para onde foram. A [página de acessibilidade](/accessibility) descreve outros controles de conforto, para som, música e háptica.',
        ],
        bullets: [
          'Mantenha a câmera parada. Mova as peças, não o cenário.',
          'Evite tremor de tela, zoom em tela cheia e transições giratórias ou desative-os com Reduzir Movimento.',
          'Use paralaxe com moderação e remova-a quando Reduzir Movimento estiver ativado.',
          'Nunca pisque áreas grandes da tela e mantenha as comemorações curtas.',
          'Teste com Reduzir Movimento ativado e confira se nada importante desaparece.',
        ],
      },
      'player-tips': {
        title: 'Se os jogos fazem você passar mal',
        paragraphs: [
          'Primeiro, ative Reduzir Movimento e experimente também Preferir Transições com Dissolução no mesmo menu. Depois, procure os ajustes de cada jogo: tremor de câmera, desfoque de movimento, campo de visão e efeitos de tela são comuns em jogos maiores. Jogue em um ambiente bem iluminado e segure o aparelho um pouco mais longe, para ocupar menos do seu campo de visão. Faça pausas antes de os sintomas aumentarem, não depois. Headsets são o caso mais exigente; falamos de conforto no [Apple Vision Pro](/blog/apple-vision-pro-puzzle-games) separadamente.',
          'Prefira jogos pensados para serem tranquilos. Um quebra-cabeça por turnos, com tabuleiro estável, é um começo muito mais fácil que um jogo baseado em velocidade. Nosso guia sobre [o que torna um jogo de quebra-cabeça relaxante](/blog/relaxing-puzzle-games-what-makes-one-calm) aborda outras características para procurar, e [design de jogos acolhedores para pessoas sensíveis a estímulos](/blog/sensory-friendly-game-design) trata mais amplamente de som, luz e surpresa.',
          'Se um jogo ignora Reduzir Movimento, avise a equipe responsável e seja específico: em qual tela, qual efeito e o que você sentiu. Muitas equipes testam com o ajuste desativado e nunca percebem o problema. O mesmo vale para nós: se algo em OutBrick ainda se mexer demais com Reduzir Movimento ativado, conte pela [página de suporte](/support). Esse tipo de relato ajuda a corrigir o jogo.',
        ],
      },
    },
    pullQuote: 'Mova as peças, não o cenário.',
    faqs: [
      { question: 'Por que alguns jogos causam enjoo de movimento?', answer: 'Quando uma grande parte do campo de visão parece se mover, mas o ouvido interno não sente movimento, os sinais conflitantes podem causar tontura, cansaço visual e enjoo. Isso é chamado de enjoo de movimento induzido visualmente.' },
      { question: 'O que Reduzir Movimento faz no iPhone?', answer: 'O ajuste troca as transições de sistema com zoom e deslize por efeitos mais suaves e informa aos apps que você prefere menos movimento. Apps compatíveis também removem ou suavizam as próprias animações.' },
      { question: 'Quem tem mais probabilidade de sentir enjoo com telas?', answer: 'Pesquisas associam o problema principalmente a histórico de enjoo de movimento, enxaqueca e tontura persistente, embora a suscetibilidade varie muito. Vale conversar com um médico sobre sintomas persistentes.' },
      { question: 'OutBrick respeita Reduzir Movimento?', answer: 'Sim. Com Reduzir Movimento ativado, OutBrick reduz paralaxe, confetes e transições com efeito de mola, enquanto os blocos continuam deslizando de forma visível para você acompanhar o tabuleiro.' },
    ],
  },
  'one-handed-games-iphone': {
    title: 'Jogos para uma mão no iPhone: acessibilidade motora',
    dek: 'O que pesquisas sobre telas sensíveis ao toque e limitações motoras revelam sobre alvos, gestos e erros, além dos ajustes úteis no iPhone.',
    imageAlt: 'Bricko e Moss ao lado de um celular com a área Celebration Square do mapa Jornada de OutBrick e blocos turquesa, azuis e rosa flutuando',
    tags: ['acessibilidade', 'acessibilidade motora', 'jogos para uma mão', 'design para celular', 'design inclusivo'],
    intro: 'Muita gente joga com uma mão. Algumas pessoas sempre fazem isso por causa de uma deficiência, lesão ou tremor. Muitas outras jogam assim em certos momentos: segurando um bebê, em pé no trem ou deitadas de lado. Um jogo que funciona nessas situações funciona melhor para todo mundo. Este artigo analisa o que pesquisas sobre telas sensíveis ao toque e limitações motoras descobriram, como isso influencia o design de jogos e quais ajustes do iPhone podem ajudar hoje.',
    keyTakeaways: [
      'Telas sensíveis ao toque podem dar mais autonomia a pessoas com limitações motoras, mas provocam mais toques acidentais e erros que um mouse.',
      'Alvos grandes, gestos simples e uma opção generosa de desfazer importam mais que qualquer ajuste isolado de acessibilidade.',
      'A pressão do tempo cria uma barreira motora. Um jogo sem cronômetro elimina de uma vez uma das exigências mais difíceis.',
    ],
    sections: {
      'touch-helps-and-hurts': {
        title: 'Telas sensíveis ao toque ajudam, mas também atrapalham',
        paragraphs: [
          'Anthony, Kim e Findlater investigaram a questão por um caminho incomum: analisaram 187 vídeos publicados no YouTube por pessoas com deficiências físicas, mostrando-as usar celulares e tablets comuns. Nos vídeos, as pessoas conseguiam realizar tarefas, muitas vezes com adaptações próprias, como usar os nós dos dedos, uma caneta ou outra parte do corpo, ou apoiar a mão na borda da tela para ter mais estabilidade. As telas sensíveis ao toque eram descritas com frequência como uma fonte de autonomia. Também apareciam problemas recorrentes: toques acidentais, alvos pequenos demais e gestos difíceis de fazer.',
          'Um estudo controlado de laboratório conduzido por Findlater e colegas quantificou esses problemas. Eles compararam o uso de tela sensível ao toque e mouse com 32 pessoas, 16 delas com limitações motoras na parte superior do corpo. A tela foi mais rápida no geral, mas só os participantes sem limitações cometeram menos erros com ela. Os participantes com limitações motoras erraram três vezes mais ao tocar na tela do que ao usar o mouse, e toques involuntários eram comuns. Os autores elevaram para pelo menos 18 milímetros o tamanho mínimo recomendado para alvos de toque desse grupo, bem maior que a maioria dos botões de celular.',
        ],
      },
      'one-thumb': {
        title: 'O alcance de um polegar',
        paragraphs: [
          'Mesmo sem limitações motoras, usar o celular com uma mão muda as condições. Parhi, Karlson e Bederson estudaram o uso do polegar em telas pequenas e concluíram que alvos de cerca de 9,2 milímetros para toques únicos e 7,6 milímetros para sequências de toques eram grandes o bastante para não prejudicar velocidade ou precisão. Abaixo disso, os erros aumentavam. O alcance também importa: em um celular grande, o canto superior oposto é o ponto mais difícil de alcançar com o polegar da mão que segura o aparelho, justamente onde muitos jogos colocam os botões de pausa e configurações.',
          'Trewin, Swart e Pettick estudaram smartphones com pessoas com limitações de destreza e descobriram que eram úteis e fáceis de usar, embora tablets oferecessem vantagens reais, como alvos maiores e uma superfície mais estável. Os pesquisadores também notaram um problema: alguns recursos de acessibilidade exigiam tanta destreza para configurar e usar que muitos participantes não conseguiam aproveitá-los. Se é difícil ativar um recurso de acessibilidade, ele ajuda pouco.',
        ],
      },
      'games-specifically': {
        title: 'O que falha nos jogos com tela sensível ao toque',
        paragraphs: [
          'Kim e colegas criaram um esquema de avaliação da acessibilidade motora e o aplicaram a 72 jogos para iPad. Porter e Kientz fizeram uma pesquisa com jogadores com deficiência e profissionais da indústria de jogos; descobriram que a incompatibilidade com tecnologias assistivas era uma barreira comum e que muitas pessoas que desenvolvem jogos não tinham orientações práticas. Em conjunto, os problemas recorrentes são fáceis de enumerar: limites de tempo e testes de reflexo; gestos com vários dedos sem alternativa; arrastos que exigem precisão; botões pequenos nas bordas da tela; e penalidades severas por um único toque equivocado.',
          'O tempo é o fator que designers mais costumam ignorar. Tremores, espasticidade e fadiga dificultam movimentos rápidos e precisos, e uma contagem regressiva transforma isso em fracasso. Um limite de movimentos é outra restrição: exige raciocínio, mas não importa quanto tempo a mão leve para executá-lo. Explicamos por que isso também deixa os jogos mais tranquilos em [o que torna um jogo de quebra-cabeça relaxante](/blog/relaxing-puzzle-games-what-makes-one-calm).',
        ],
        bullets: [
          'Alvos bem maiores que o mínimo da plataforma e com espaço entre eles.',
          'Controles importantes ao alcance do polegar, não apenas nos cantos superiores.',
          'Todos os gestos devem funcionar com um dedo, sem exigir rapidez.',
          'Uma opção de desfazer fácil de alcançar que corrija um toque equivocado sem penalidade.',
          'Sem cronômetros no jogo normal nem testes de reflexo escondidos nos menus.',
        ],
      },
      'forgiveness': {
        title: 'Perdoar erros também é um recurso de acessibilidade motora',
        paragraphs: [
          'Muitos textos sobre acessibilidade se concentram em acertar o comando. Igualmente importante é o que acontece quando o toque dá errado, pois isso ocorrerá com frequência para algumas pessoas. Um jogo que trata cada toque involuntário como um movimento definitivo é hostil, ainda que discretamente, a quem tem tremor. Um jogo em que é fácil desfazer a última jogada é melhor para todos. As orientações de acessibilidade da web fazem um comentário parecido sobre [gestos com ponteiro](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html): qualquer ação que dependa de um gesto complexo também deve poder ser feita com um gesto simples.',
          'É nesse ponto que OutBrick se encaixa. Os blocos se movem com um dedo, em um deslize curto, sem exigir um arrasto preciso até determinado lugar. Não há cronômetro. O primeiro desfazer em cada tabuleiro é grátis, para que um deslize equivocado não estrague a fase; a opção de desfazer oferecida quando o tabuleiro trava também é grátis. No Apple Watch, a Digital Crown funciona junto com o toque. Isso não torna o jogo acessível a todas as pessoas, e um quebra-cabeça de blocos deslizantes ainda exige um gesto direcionado. Se algum controle for difícil de alcançar, a [página de acessibilidade](/accessibility) pede informações sobre seu aparelho e a tela. Esses detalhes nos ajudam a corrigir o problema.',
          'Vale lembrar quantas pessoas isso beneficia. Às vezes, designers falam em limitações situacionais: uma pessoa segurando uma criança, alguém se equilibrando no transporte ou um jogador com o pulso engessado por seis semanas. Ninguém precisa se considerar uma pessoa com deficiência para se beneficiar das mesmas escolhas. Projetar para quem tem tremor permanente também permite que todo mundo no vagão jogue com uma mão.',
        ],
      },
      'iphone-settings': {
        title: 'Ajustes do iPhone para jogar com mais facilidade usando uma mão',
        paragraphs: [
          'Os ajustes de acessibilidade motora da Apple ficam em Ajustes > Acessibilidade > Toque, e vários podem ser úteis em jogos. Experimente um de cada vez, pois cada um muda a forma como todos os apps respondem aos seus dedos. Em jogos, confira se tudo continua funcionando com essas opções ativadas; um jogo bem projetado não deveria se importar. O Apple Watch também tem opções próprias. Falamos da experiência em telas pequenas em [jogos de quebra-cabeça para Apple Watch](/blog/apple-watch-puzzle-games).',
        ],
        bullets: [
          'Alcançabilidade aproxima o topo da tela do polegar quando você desliza para baixo a partir da borda inferior.',
          'Adaptações ao Toque pode ignorar toques repetidos, exigir um breve toque contínuo ou considerar onde seu dedo tocou primeiro ou por último.',
          'AssistiveTouch exibe um menu flutuante que pode substituir gestos com vários dedos e botões físicos.',
          'Tocar Atrás transforma dois ou três toques na parte traseira do iPhone em um atalho.',
          'Controle por Voz e Controle Assistivo permitem usar o celular sem tocar na tela, embora jogos rápidos raramente funcionem bem com eles.',
        ],
      },
    },
    pullQuote: 'Se é difícil ativar um recurso de acessibilidade, ele ajuda pouco.',
    faqs: [
      { question: 'O que torna um jogo para celular bom para jogar com uma mão?', answer: 'Botões grandes e bem espaçados, ao alcance do polegar; gestos que exigem apenas um dedo; ausência de cronômetros ou testes de reflexo; e uma forma simples de desfazer um toque equivocado.' },
      { question: 'Qual deve ser o tamanho dos alvos de toque para pessoas com limitações motoras?', answer: 'Um estudo de laboratório de Findlater e colegas recomendou pelo menos 18 milímetros para pessoas com limitações motoras na parte superior do corpo, bem acima do tamanho comum de botões de celular.' },
      { question: 'Quais ajustes do iPhone ajudam na acessibilidade motora em jogos?', answer: 'Em Ajustes > Acessibilidade > Toque, experimente Alcançabilidade, Adaptações ao Toque, AssistiveTouch e Tocar Atrás. Controle por Voz e Controle Assistivo permitem usar o aparelho sem tocar na tela.' },
      { question: 'Dá para jogar OutBrick com uma mão?', answer: 'Sim. Os blocos se movem com um único deslize de um dedo, não há cronômetro e o primeiro desfazer em cada tabuleiro é gratuito, então um deslize equivocado não custa a fase. Você pode [experimentar um tabuleiro no navegador](/play).' },
    ],
  },
  'screen-reader-games-iphone': {
    title: 'Jogos com leitor de tela: como pessoas cegas jogam',
    dek: 'Como pessoas cegas e com baixa visão usam o VoiceOver no iPhone, o que pesquisas mostram e o que torna um jogo acessível pelo áudio.',
    imageAlt: 'Zippy e Moss ao lado de um celular com a área Button Factory do mapa Jornada de OutBrick e blocos azuis, laranjas e turquesa flutuando',
    tags: ['acessibilidade', 'VoiceOver', 'jogadores cegos', 'design inclusivo', 'jogos para celular'],
    intro: 'O iPhone é uma superfície lisa de vidro, sem botões que possam ser reconhecidos pelo tato. Mesmo assim, muitas pessoas cegas usam um todos os dias, graças ao leitor de tela integrado. Muitas também jogam com ele: há desde quebra-cabeças de palavras e jogos de cartas até jogos feitos inteiramente de sons. Veja como isso funciona, o que pesquisadores aprenderam com jogadores cegos e o que faz um jogo funcionar pelo áudio.',
    keyTakeaways: [
      'O VoiceOver transforma o toque em uma interface falada que pode ser explorada: deslize o dedo para ouvir o conteúdo da tela e toque duas vezes para agir.',
      'Jogadores cegos formam uma comunidade real e diversa. Pesquisas mostram que as barreiras são sociais tanto quanto técnicas.',
      'Um jogo funciona com leitor de tela quando seu estado pode ser descrito em palavras e as ações não dependem de tempo de reação ou mira precisa.',
    ],
    sections: {
      'how-touch-became-accessible': {
        title: 'Como a tela sensível ao toque se tornou acessível',
        paragraphs: [
          'À primeira vista, uma tela sem nada que se possa sentir parece inadequada para alguém que não pode enxergá-la. Pesquisas mostraram que não precisa ser assim. O Slide Rule, de Kane, Bigham e Wobbrock, apresentado em 2008, usava gestos multitoque para permitir que pessoas cegas usassem um celular com tela sensível ao toque: ao deslizar um dedo, o sistema lia o que estava sob ele; um segundo dedo selecionava o item; e movimentos rápidos percorriam listas. No estudo com dez participantes cegos, o Slide Rule foi significativamente mais rápido que uma alternativa baseada em botões e sete pessoas o preferiram, embora tenha gerado mais erros.',
          'O VoiceOver da Apple, que chegou ao iPhone no ano seguinte, funciona com princípios semelhantes. Toque em qualquer lugar e ele fala o item sob seu dedo. Deslize para a direita ou esquerda para avançar de item em item. Toque duas vezes em qualquer lugar para ativar o último item anunciado. Um seletor virtual chamado rotor muda a função dos gestos, que podem percorrer títulos ou ajustar a velocidade da fala. Também é possível desligar a tela por completo.',
          'Aprender leva tempo. Rodrigues e colegas acompanharam pessoas cegas nas primeiras semanas usando um leitor de tela em smartphones e constataram que dominar o aparelho era um processo longo e exigente, confirmando as preocupações que os participantes tinham antes de começar. Isso vale lembrar quando um jogo acrescenta seus próprios gestos aos do sistema.',
        ],
      },
      'who-plays': {
        title: 'O que jogadores cegos dizem sobre os jogos',
        paragraphs: [
          'Em 2019, Andrade e colegas fizeram entrevistas e uma pesquisa com pessoas com deficiência visual, perguntando deliberadamente sobre os jogos que elas já jogavam, em vez de jogos preparados para um estudo. O retrato que surgiu foi o de uma comunidade com longa história de jogo, opiniões firmes sobre o setor e apreço especial por títulos que equilibram profundidade e acessibilidade. Muitas pessoas preferiam jogos realmente envolventes a versões simplificadas e “acessíveis” que pareciam condescendentes.',
          'Gonçalves, Rodrigues e Guerreiro estudaram a experiência de jogar em grupo. Em entrevistas com dez adultos e dez crianças com deficiência visual, 140 respostas a uma pesquisa e outra pesquisa com pessoas videntes que jogam com elas, os autores descobriram que pessoas cegas jogavam muitos tipos de jogos, mas raramente os mesmos que seus amigos e familiares videntes. O problema não era apenas a falta de acessibilidade: os universos de jogo dos dois grupos quase não se cruzavam, deixando pouco para compartilhar. Falamos do aspecto familiar em [jogar com os netos](/blog/playing-games-with-grandchildren).',
        ],
      },
      'what-makes-a-game-playable': {
        title: 'O que torna um jogo acessível pelo áudio',
        paragraphs: [
          'A revisão de Yuan, Folmer e Harris sobre acessibilidade em jogos descreve a experiência como um ciclo: o jogo apresenta estímulos, a pessoa escolhe uma resposta e então fornece uma ação. A maioria dos jogos apresenta seus principais estímulos visualmente. Para uma pessoa cega, eles precisam ser substituídos, em geral, por fala, som ou vibração. Se o estímulo puder ser expresso em palavras, o leitor de tela pode fazer boa parte do trabalho. Caso contrário, o próprio jogo precisa resolver isso com seu design de áudio, como acontece nos jogos sonoros criados para pessoas cegas.',
          'Isso sugere um teste útil. Jogos por turnos, de cartas, de palavras e muitos quebra-cabeças podem ser descritos completamente em palavras: o que está onde, o que pode se mover e o que mudou. Jogos de ação rápida em geral não podem, porque as informações chegam mais depressa do que a fala consegue transmiti-las. É mais um motivo para valorizar quebra-cabeças [sem cronômetro](/blog/relaxing-puzzle-games-what-makes-one-calm): ouvir leva tempo, e um limite de tempo penaliza isso. Pesquisas de Spiel, Bertel e Heron sobre jogos de texto constataram que até a forma de descrever direções faz diferença: pessoas cegas acharam instruções relativas à própria posição mais fáceis e imersivas que direções dadas como pontos cardeais.',
        ],
        bullets: [
          'Cada controle tem um rótulo falado que explica sua função, não sua aparência.',
          'O estado do jogo, como a pontuação, os movimentos restantes ou de quem é a vez, pode ser consultado quando necessário.',
          'As mudanças são anunciadas: uma peça se moveu, uma fase foi concluída, a vez passou.',
          'Nada depende de cronômetro ou de acertar um alvo pequeno em movimento.',
          'O jogo não prende o foco em uma janela nem deixa o VoiceOver lendo conteúdo desatualizado.',
        ],
      },
      'direct-touch': {
        title: 'Quando um jogo precisa do toque direto',
        paragraphs: [
          'Alguns jogos dependem de gestos que o VoiceOver interceptaria, como arrastar uma peça pelo tabuleiro. A plataforma da Apple permite que o desenvolvedor marque uma área para interação direta. Assim, os toques vão para o jogo enquanto o VoiceOver continua lendo o restante. As [orientações da Apple sobre VoiceOver para designers](https://developer.apple.com/design/human-interface-guidelines/voiceover) apresentam o básico. Usado com cuidado, o toque direto dá uma sensação física ao tabuleiro; sem cuidado, cria uma área em que o leitor de tela fica mudo e a pessoa se perde.',
          'Os melhores jogos oferecem as duas opções: uma forma direta de jogar para quem consegue usá-la e outra passo a passo, elemento por elemento, para quem precisa. OutBrick oferece suporte ao VoiceOver: controles principais como Desfazer, Pausar e Fechar têm rótulos descritivos, assim como elementos importantes do estado do jogo. Como não há cronômetro, ninguém perde tempo ao parar para ouvir. O tabuleiro tem um limite de movimentos, não de tempo, e o primeiro desfazer em cada tabuleiro é gratuito. Sabemos que jogar um quebra-cabeça de blocos deslizantes pelo áudio é exigente e preferimos ouvir as pessoas que usam VoiceOver em vez de presumir; a [página de acessibilidade](/accessibility) lista o suporte atual e como falar conosco.',
        ],
      },
      'getting-started': {
        title: 'Como começar: jogadores e famílias',
        paragraphs: [
          'Se você está começando a usar o VoiceOver, a Apple inclui uma área de treino em Ajustes, em Acessibilidade > VoiceOver, onde é possível experimentar gestos sem acionar nada. Comece por jogos por turnos e com bastante texto; cartas, palavras e perguntas e respostas são boas opções. Depois, procure jogos cuja descrição mencione VoiceOver e leia avaliações de jogadores cegos.',
          'Se você enxerga e joga com alguém cego, as pesquisas sugerem que o mais útil é encontrar jogos que ambos possam jogar, em vez de cada pessoa jogar algo diferente. Quebra-cabeças por turnos em um aparelho compartilhado são um bom começo. Se um jogo de que você gosta falha no básico, avise quem o desenvolveu. Muitas equipes só ficam sabendo do problema quando alguém conta. Para falar sobre OutBrick, comece pela nossa [página de suporte](/support).',
        ],
      },
    },
    pullQuote: 'Um jogo funciona com leitor de tela quando seu estado pode ser descrito em palavras e as ações não dependem de tempo de reação ou mira precisa.',
    faqs: [
      { question: 'Pessoas cegas podem jogar no iPhone?', answer: 'Sim. Com o VoiceOver, o leitor de tela integrado ao iPhone, pessoas cegas tocam ou deslizam o dedo para ouvir o que está na tela e tocam duas vezes para agir. Jogos por turnos, de cartas, palavras e áudio são os mais comuns.' },
      { question: 'Que tipos de jogo funcionam melhor com o VoiceOver?', answer: 'Jogos cujo estado possa ser descrito em palavras e que não exijam reações rápidas: cartas, palavras, perguntas e respostas, muitos quebra-cabeças e jogos criados em torno do áudio.' },
      { question: 'O que são jogos sonoros?', answer: 'São jogos feitos para serem jogados por meio do som, usando fala, áudio espacial e efeitos sonoros para transmitir toda a experiência. Muitos são criados por e para pessoas cegas.' },
      { question: 'OutBrick oferece suporte ao VoiceOver?', answer: 'Sim. Os controles principais e informações importantes do jogo têm rótulos para o VoiceOver. Como não há cronômetro, você pode levar o tempo que precisar. A [página de acessibilidade](/accessibility) informa o suporte atual e como relatar problemas.' },
    ],
  },
};

export const ptBR3: ExtraGuides = { ...ptBR3Core, ...ptBR3Rest };
