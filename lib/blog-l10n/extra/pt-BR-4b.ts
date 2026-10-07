import type { ExtraGuides } from '../../i18n/blog';

/** Journal batch 4, articles 6–10. */
export const ptBR4b: ExtraGuides = {
  'game-audio-feedback-player-experience': {
    title: 'O som da vitória: como o áudio molda a experiência nos jogos',
    dek: 'O som muda a imersão e a confiança do jogador; a música também altera a percepção do tempo. Veja como projetar para jogar no mudo.',
    imageAlt: 'Um iPhone com o mapa Jornada do OutBrick em Cherry Blossom Town, entre Moss com seu cinto de ferramentas e Zippy, amarelo, piscando',
    tags: ['áudio em jogos', 'design de som', 'feedback', 'criação de jogos', 'experiência do jogador'],
    intro: 'Desative o som de um jogo que você conhece bem e algo estranho acontece. As regras continuam iguais, mas tudo parece mais sem graça, mais lento e menos nítido. O clique de uma peça ao parar, a nota que sobe quando você está perto de concluir o tabuleiro, o acorde curto da vitória: esses sons transmitiam informações que você nem percebia estar recebendo. O som é uma das partes mais poderosas e menos visíveis do design de jogos. Pesquisadores mediram seus efeitos na imersão, nas emoções e até na duração que as pessoas acham que jogaram. Como muita gente joga no celular sem áudio, os estudos também deixam uma lição: o som nunca deve ser a única forma de comunicar algo importante.',
    keyTakeaways: [
      'Em um experimento controlado, o áudio melhorou todas as dimensões avaliadas da experiência, da imersão e do fluxo à sensação de competência e às emoções positivas.',
      'A música aumenta o prazer principalmente ao intensificar emoções; sua escolha também pode tornar a partida mais ou menos imersiva.',
      'Como muita gente joga no mudo, o som deve reforçar informações que também aparecem na tela, nunca ser a única maneira de comunicá-las.',
    ],
    sections: {
      'sound-does-work': { title: 'O som faz diferença mensurável', paragraphs: [
        'Lennart Nacke, Mark Grimshaw e Craig Lindley conduziram um dos primeiros experimentos cuidadosos sobre áudio em jogos. Participantes jogaram um jogo de tiro em primeira pessoa enquanto efeitos sonoros e música eram ligados ou desligados separadamente. Os pesquisadores registraram respostas fisiológicas e aplicaram um questionário sobre a experiência. As medidas do corpo não mostraram efeitos significativos, mas o questionário mostrou: o som influenciou todas as dimensões avaliadas, incluindo imersão, tensão, competência, fluxo, desafio e emoções positivas e negativas. Som e música também interagiram na tensão e no fluxo.',
        'O resultado é esclarecedor: as pessoas perceberam a diferença em vários aspectos, embora os indicadores fisiológicos disponíveis na época não a captassem. Para quem joga, o som não é um enfeite acrescentado à experiência; ele faz parte dela.',
        'Na prática, o áudio cumpre dois papéis. Alguns sons informam: um clique confirma que o movimento foi registrado, outro sinal indica que a ação falhou, e uma nota crescente mostra que você se aproxima do objetivo. Outros sons criam uma sensação: música, ambiente e a textura de um mundo. Os sinais informativos funcionam melhor quando são curtos, consistentes e associados a um único significado. Os emocionais devem combinar com o que o jogo quer fazer você sentir.'
      ] },
      'music-and-emotion': { title: 'A música atua pelas emoções', paragraphs: [
        'Por que a música torna um jogo mais agradável? Christoph Klimmt e colegas testaram duas explicações em experimentos com jogadores: a música poderia intensificar emoções, aumentando o prazer, ou aprofundar a sensação de estar no mundo do jogo e de se identificar com a personagem.',
        'Os resultados favoreceram a explicação emocional. A trilha elevou o prazer indiretamente ao intensificar emoções positivas; em um jogo de terror, a música também ampliou o impacto do medo. Os pesquisadores não encontraram evidências de que a música atuasse aumentando a sensação de presença ou a identificação. As amostras foram restritas, então não convém generalizar demais, mas a lição para quem cria jogos é plausível: pense na música como um instrumento emocional e escolha um tom coerente com o que a partida quer transmitir.'
      ] },
      'time-and-immersion': { title: 'Música, imersão e a sensação de perder a hora', paragraphs: [
        'Perder a noção do tempo é um dos sinais mais relatados de imersão. Timothy Sanders e Paul Cairns testaram se a música poderia provocar essa sensação em um jogo simples de labirinto, medindo a percepção do tempo com dois métodos conhecidos da psicologia. A música alterou uma das medidas, mas não a outra; dependendo da trilha, a imersão podia aumentar ou diminuir.',
        'Os próprios autores descrevem o quadro como complexo, e essa é a conclusão mais honesta. A música pode tornar a partida mais envolvente, mas uma escolha inadequada pode ter o efeito contrário. Em um jogo tranquilo, vale selecionar a trilha com cuidado e permitir que a pessoa ajuste o volume. Falamos de outros elementos de uma experiência relaxante em [o que realmente deixa um jogo de quebra-cabeça tranquilo](/blog/relaxing-puzzle-games-what-makes-one-calm).'
      ] },
      'when-sound-fades': { title: 'Quando o som fica em segundo plano', paragraphs: [
        'O áudio nem sempre ocupa o primeiro plano. Katja Rogers e colegas compararam o mesmo jogo de terror em um monitor e em realidade virtual e, depois, testaram tipos diferentes de áudio espacial em VR. Na realidade virtual, o som influenciava a experiência de forma mais sutil, porque o conjunto de estímulos sensoriais era muito intenso; a dimensão espacial do áudio não pareceu ser um fator significativo.',
        'É um lembrete útil: a contribuição do som depende de tudo o que a pessoa recebe ao mesmo tempo. Em um ambiente visual rico, ela pode sentir o áudio sem prestar atenção nele. O inverso também ajuda a entender por que um jogo pequeno e simples pode se beneficiar tanto do som: quando a tela é tranquila, o ouvido trabalha mais.'
      ] },
      'design-for-sound-off': { title: 'Projete para quando o som estiver desligado', paragraphs: [
        'Aqui está o desafio prático: o som importa, mas os celulares passam boa parte do tempo no silencioso — no transporte, em salas de espera ou perto de alguém dormindo. Pessoas surdas ou com deficiência auditiva talvez nunca o ouçam. Por isso, o áudio deve reforçar informações, não carregá-las sozinho. Todo aviso sonoro importante precisa de um equivalente visual e, de preferência, tátil. Tanay Singhal e Oliver Schneider observaram que vibrações bem projetadas, quando reforçam o feedback visual, também podem deixar o jogo mais agradável e imersivo.',
        'O OutBrick funciona por completo sem som. Os nove amigos de tijolo não têm voz e falam apenas em balões de texto; tudo o que importa no tabuleiro, da parada de uma peça à conclusão, aparece na tela. Por padrão, cada peça também combina cor e símbolo: nenhum sentido deve ser a única forma de entender o jogo. Nossa [página de acessibilidade](/accessibility) explica os outros recursos; o artigo sobre [game feel e juice](/blog/game-feel-and-juice) explora o feedback entre sentidos. Para saber por que a cor não deve ser a única pista, leia [por que a cor nunca deve ser a única pista em um quebra-cabeça](/blog/color-shape-accessibility).'
      ], bullets: ['Associe cada som importante a um sinal visual.', 'Mantenha controles separados para música, efeitos e voz.', 'Reserve o som mais marcante para o momento mais especial.', 'Teste o jogo inteiro no mudo antes de lançá-lo.'] }
    },
    pullQuote: 'Quando a tela está tranquila, o ouvido trabalha mais.',
    faqs: [
      { question: 'Como o som afeta a experiência de jogo?', answer: 'Em um experimento controlado, ligar o som melhorou as avaliações de imersão, fluxo, competência, tensão, desafio e emoção. A música, em especial, aumenta o prazer ao intensificar emoções.' },
      { question: 'A música de um jogo pode mudar a percepção do tempo?', answer: 'Pode. Um estudo observou que a música alterou uma das duas medidas da percepção do tempo em um jogo de labirinto, e que diferentes trilhas podiam aumentar ou diminuir a imersão.' },
      { question: 'Jogos para celular devem funcionar sem som?', answer: 'Sim. Muita gente joga no mudo e algumas pessoas não ouvem áudio; por isso, todo aviso sonoro importante também deve aparecer na tela e, de preferência, ter apoio de vibração.' },
      { question: 'Posso jogar OutBrick sem som?', answer: 'Sim. Tudo o que importa no tabuleiro aparece na tela, e os nove amigos de tijolo se comunicam apenas por balões de texto, sem voz.' }
    ]
  },
  'loot-boxes-ethical-monetisation': {
    title: 'Caixas-surpresa, recompensas aleatórias e monetização ética',
    dek: 'Gastos com caixas-surpresa aparecem associados a problemas com apostas. Veja o que os estudos mostram e como avaliar a monetização de um jogo.',
    imageAlt: 'Um iPhone com o mapa Jornada do OutBrick em Cloud Carnival, entre Zippy, amarelo e piscando, e Bricko, vermelho',
    tags: ['caixas-surpresa', 'monetização', 'ética nos jogos', 'criação de jogos', 'jogos para celular'],
    intro: 'Uma caixa-surpresa funciona assim: você paga, abre e recebe algo, mas só descobre o que é quando já não pode voltar atrás. O recurso está entre os mais estudados nos jogos e também entre os mais regulados. Já há pesquisa suficiente para afirmar algumas coisas com clareza e, ao mesmo tempo, reconhecer o que ainda não sabemos. Esses estudos oferecem um critério prático para jogadores e criadores avaliarem qualquer forma de cobrança, inclusive a nossa. O OutBrick recebe de compras opcionais e de vídeos premiados que a pessoa escolhe assistir; por isso, aplicamos esse mesmo critério ao nosso modelo.',
    keyTakeaways: [
      'Diversos estudos associam gastos com caixas-surpresa a sintomas de problemas com jogos de azar; uma metanálise encontrou uma correlação de cerca de 0,26, pequena, mas replicável.',
      'Como a maioria dos estudos usa questionários, não é possível saber se as caixas causam esses problemas ou atraem quem já os enfrenta. As duas possibilidades pedem cautela.',
      'Uma monetização justa informa o preço total e a recompensa antes da compra, não esconde custos futuros e permite dizer não sem penalidade.'
    ],
    sections: {
      'what-a-loot-box-is': { title: 'O que é uma caixa-surpresa e por que ela lembra uma aposta', paragraphs: [
        'Uma caixa-surpresa é um item comprado com dinheiro real, diretamente ou por meio da moeda do jogo, cujo conteúdo é aleatório. Há formatos parecidos, como pacotes de cartas, sorteios gacha e roletas de prêmios. O elemento que os torna psicologicamente distintos é a recompensa variável: você não sabe o que vai receber e, às vezes, aparece um item raro. Recompensas imprevisíveis estão entre os métodos mais eficazes conhecidos para levar alguém a repetir um comportamento — justamente por isso são usadas.',
        'Em 2018, Aaron Drummond e James Sauer compararam os sistemas de 22 jogos com cinco critérios que psicólogos e órgãos reguladores usam para reconhecer apostas, incluindo uma troca de dinheiro ou valor, um resultado decidido ao menos em parte pelo acaso e ganhos para alguns às custas de outros. Quase metade dos jogos atendia aos cinco critérios. Os autores não afirmaram que toda caixa-surpresa seja ilegal — isso depende da legislação de cada lugar —, mas argumentaram que muitas se parecem psicologicamente com apostas.'
      ] },
      'what-the-evidence-shows': { title: 'O que as pesquisas mostram', paragraphs: [
        'Um dos estudos mais conhecidos é uma pesquisa ampla de David Zendle e Paul Cairns com 7.422 jogadores. Quanto mais as pessoas gastavam em caixas-surpresa, mais intensos tendiam a ser os sintomas de problemas com jogos de azar. A associação foi cerca de treze vezes mais forte, em variância explicada, do que a relação entre esses sintomas e gastos com outros itens de jogo. Isso sugere que o aspecto parecido com aposta, e não o gasto em geral, pode ser relevante.',
        'Um estudo posterior com 1.155 participantes de 16 a 18 anos, conduzido por Zendle, Rachel Meyer e Harriet Over, encontrou a mesma associação, ainda mais forte. Muitos motivos citados pelos jovens para comprar caixas lembravam razões comuns para apostar. Em 2021, Shaun Garea e colegas reuniram os estudos em uma metanálise: em 15 pesquisas, os gastos com caixas-surpresa tiveram correlação de aproximadamente r = 0,26 com problemas de jogo; em sete estudos, a correlação com uso excessivo de jogos foi de cerca de r = 0,25. Os autores descrevem a relação como pequena, mas replicável e potencialmente relevante para a saúde.'
      ] },
      'what-the-link-means': { title: 'O que essa associação significa — e o que não significa', paragraphs: [
        'A maioria desses estudos é transversal, feita com questionários em um único período; por isso, não revela qual fator vem primeiro. As caixas podem levar algumas pessoas a desenvolver problemas com apostas, ou quem já enfrenta esses problemas pode gastar muito com caixas disponíveis nos jogos. Zendle e Cairns dizem que seus dados não distinguem as duas possibilidades. Ambas preocupam: em uma, o jogo contribui para um dano; na outra, lucra desproporcionalmente com pessoas vulneráveis.',
        'Daniel King e Paul Delfabbro chamam o problema mais amplo de monetização predatória: sistemas de compra que ocultam ou adiam o custo acumulado até a pessoa já estar envolvida financeiramente e emocionalmente. Caixas-surpresa são um exemplo. Outros incluem ofertas que aparecem em momentos de frustração e moedas que dificultam comparar preços. Analisamos essas práticas em [padrões manipulativos em jogos para celular](/blog/dark-patterns-in-mobile-games).'
      ] },
      'a-fair-monetisation-test': { title: 'Um teste para avaliar se a cobrança é justa', paragraphs: ['Jogos gratuitos precisam se sustentar, e cobrar não é errado por si só. As pesquisas apontam algumas perguntas que ajudam a distinguir uma troca justa de uma prática predatória. Elas servem tanto para responsáveis que avaliam um jogo quanto para equipes que estão criando uma loja:'], bullets: [
        'Antes de pagar — em dinheiro ou tempo — você sabe exatamente o que vai receber?',
        'O custo total está claro ou escondido em moedas, pacotes ou cronômetros?',
        'É possível avançar no jogo principal sem pagar?',
        'Dizer não não custa nada ou o jogo torna a recusa desagradável?',
        'As ofertas aparecem nos seus piores momentos, como logo depois de uma derrota?',
        'Há limites razoáveis ou gastos e repetições podem continuar sem fim?'
      ] },
      'where-outbrick-stands': { title: 'Como o OutBrick se posiciona', paragraphs: [
        'O OutBrick recebe de duas formas: compras opcionais dentro do app e vídeos premiados que só começam quando você toca no botão para pedir uma recompensa. Há seis opções: uma vida, cinco movimentos extras, duas chances de desfazer, um reforço ativado antes da primeira jogada, receber novamente as moedas da carta de conclusão e uma segunda rodada na Roleta de Tijolos. Cada opção tem um limite diário — oito, seis, oito, quatro, quatro e uma —, então o jogo paga no máximo 31 vídeos por dia. Não há banners nem anúncios entre telas. Recusar não custa nada, e não é preciso comprar nem assistir a vídeos para jogar os tabuleiros principais. Remover Anúncios desativa a publicidade permanentemente; o Passe de Tijolos aumenta o limite de vidas de cinco para oito e desativa anúncios enquanto estiver ativo.',
        'Cinco das seis recompensas são fixas e aparecem antes do vídeo. A sexta, uma rodada extra na Roleta de Tijolos, envolve um pequeno elemento de acaso e por isso merece ser mencionada; ela se limita a uma por dia. Cabe a você avaliar se o equilíbrio é adequado. A página inicial explica [exatamente o custo de vidas, chances de desfazer e anúncios](/#fair). Também acreditamos que deve ser fácil parar de jogar: veja [como os jogos viram hábito](/blog/how-games-become-habits) e [o que deixa um jogo de quebra-cabeça tranquilo](/blog/relaxing-puzzle-games-what-makes-one-calm), sobre vidas e recargas justas.'
      ] }
    },
    pullQuote: 'Cinco das seis recompensas são fixas e aparecem antes de você assistir ao vídeo.',
    faqs: [
      { question: 'Caixas-surpresa são jogos de azar?', answer: 'Algumas têm características parecidas com apostas, como pagar por um resultado aleatório. A classificação legal varia de acordo com o país, e a pesquisa não diz que todas são ilegais.' },
      { question: 'Caixas-surpresa causam problemas com jogos de azar?', answer: 'As pesquisas encontram uma associação consistente, mas a maioria usa questionários e não consegue determinar causa e efeito. As caixas podem contribuir para os problemas ou atrair quem já os enfrenta.' },
      { question: 'O que torna a monetização de um jogo predatória?', answer: 'Práticas que escondem o custo total, pressionam a pessoa em momentos de frustração ou dificultam recusar uma compra podem explorar os jogadores, em vez de oferecer uma troca clara.' },
      { question: 'É preciso pagar para jogar OutBrick?', answer: 'Não. As compras são opcionais e os vídeos premiados só aparecem quando você pede; nenhum deles é necessário para jogar os tabuleiros principais.' }
    ]
  },
  'dark-patterns-in-mobile-games': {
    title: 'Como identificar padrões manipulativos em jogos',
    dek: 'Janelas insistentes, moedas confusas e ofertas nos piores momentos: veja o que as pesquisas dizem sobre design manipulativo e como reconhecê-lo nos jogos.',
    imageAlt: 'Um iPhone com o mapa Jornada do OutBrick em Cloud Carnival, entre Zippy, amarelo e piscando, e Bricko, vermelho',
    tags: ['padrões manipulativos', 'jogos para celular', 'design de jogos', 'ética', 'proteção do consumidor'],
    intro: 'A expressão “padrão manipulativo” surgiu para descrever sites: a caixa já marcada, o botão de cancelar quase invisível, a assinatura que começa com um toque e exige vários passos para terminar. Os jogos herdaram essas práticas e criaram outras. Como um jogo é feito para envolver, às vezes é difícil perceber, enquanto se joga, onde termina o envolvimento e começa a manipulação. Pesquisadores de interação humano-computador, defesa do consumidor e estudos sobre dependência começaram a mapear essa fronteira. O trabalho deles dá nome à sensação de que um jogo está agindo contra você e também serve de espelho para quem cria jogos. Como fazemos um jogo gratuito, aplicamos esse critério ao nosso próprio trabalho.',
    keyTakeaways: [
      'Padrões manipulativos são escolhas de interface que prejudicam a capacidade de decidir com liberdade, por meio de pressão, confusão ou informação escondida.',
      'Nos jogos, podem aparecer como moedas difíceis de comparar, compras por impulso, temporizadores e avisos insistentes que dificultam parar.',
      'Crianças e adolescentes podem ficar mais expostos porque ainda desenvolvem habilidades de autorregulação e compreensão de publicidade.'
    ],
    sections: {
      'what-dark-patterns-are': { title: 'O que são padrões manipulativos', paragraphs: [
        'O pesquisador de design Harry Brignull cunhou a expressão “dark patterns” para interfaces criadas para levar as pessoas a fazer coisas que talvez não escolhessem por conta própria. A equipe pode chamá-las de otimização, mas o efeito é o mesmo: a interface cria atrito para a escolha que favorece a pessoa e remove esse atrito da escolha que favorece a empresa.',
        'Em jogos, essa diferença merece atenção especial. O envolvimento é parte do prazer, e uma interface bem projetada pode tornar tudo mais claro e divertido. O problema aparece quando a mesma habilidade é usada para esconder custos, criar urgência artificial ou fazer a recusa parecer uma falha do jogador.'
      ] },
      'how-they-look-in-games': { title: 'Como aparecem nos jogos', paragraphs: [
        'Pesquisas sobre jogos e aplicativos descrevem práticas como moedas virtuais que escondem o preço em dinheiro, ofertas com contagem regressiva, recompensas aleatórias pagas, sequências diárias que punem uma pausa e pedidos repetidos para comprar algo. Um único aviso não prova manipulação; o contexto e a repetição importam. Uma oferta clara, opcional e fácil de dispensar é diferente de uma série de telas que interrompe a partida até você aceitar.',
        'Caixas-surpresa e recompensas variáveis merecem cuidado específico, pois estudos encontram associação entre gastos com caixas e sintomas de problemas com jogos de azar. A pesquisa não determina causa e efeito, mas oferece motivos para evitar pressões e apresentar preços e probabilidades com clareza.'
      ] },
      'younger-players': { title: 'Por que jogadores mais jovens podem ficar mais expostos', paragraphs: [
        'Crianças e adolescentes ainda estão desenvolvendo a capacidade de resistir a impulsos, avaliar probabilidades e reconhecer mensagens comerciais. Uma interface que pressiona um adulto já pode ser mais difícil para alguém mais jovem. Pesquisas sobre design de aplicativos e jogos pedem atenção a ofertas, moedas virtuais e mecânicas que tornam difícil encerrar uma sessão.',
        'Isso não significa que jovens não possam escolher o que jogar. Significa que a equipe que projeta o jogo deve assumir mais responsabilidade: explicar preços, evitar pressão emocional, permitir controles familiares e não tratar a vulnerabilidade como uma oportunidade de venda.'
      ] },
      'a-field-guide': { title: 'Um guia para reconhecer padrões manipulativos', paragraphs: ['Ao avaliar um jogo, observe o que acontece antes, durante e depois de uma compra ou de uma pausa. Estas perguntas ajudam a separar uma escolha genuína de uma pressão disfarçada:'], bullets: [
        'O preço em dinheiro está visível antes da compra, mesmo quando há moedas virtuais?',
        'Você consegue recusar ou fechar uma oferta com a mesma facilidade com que a abriu?',
        'Há urgência real ou um cronômetro artificial que volta a aparecer?',
        'O jogo usa culpa, medo de perder uma sequência ou personagens tristes para fazer você voltar?',
        'Uma derrota dispara imediatamente uma oferta de compra?',
        'É fácil parar de jogar, cancelar uma assinatura ou desativar notificações?',
        'Recursos que antes eram gratuitos agora exigem uma compra?'
      ] },
      'holding-up-the-mirror': { title: 'Olhando para o nosso próprio jogo', paragraphs: [
        'O OutBrick tem compras opcionais e anúncios em vídeo que você escolhe abrir para receber uma recompensa. Recusar um vídeo não reduz a recompensa básica nem impede que você jogue os tabuleiros principais. Os anúncios têm limites diários, não aparecem como banners nem interrompem a partida, e Remover Anúncios desativa a publicidade. Explicamos os custos na página inicial em [vidas, chances de desfazer e anúncios](/#fair).',
        'O restante cabe a você avaliar, e essa avaliação importa. Pergunte se a oferta continua fácil de recusar quando aparece. Se não, o design precisa mudar: o jogo deve divertir e ser fácil de deixar de lado quando você quiser. A questão das recompensas aleatórias é discutida em [caixas-surpresa, recompensas aleatórias e monetização ética](/blog/loot-boxes-ethical-monetisation); a pressão das sequências aparece em [rituais diários que não exigem nada de você](/blog/daily-rituals-that-dont-demand-you). Se qualquer jogo, inclusive o nosso, fizer você se sentir manipulado em vez de entretido, comece pelo guia [quando jogar e quando fazer uma pausa](/blog/when-to-play-and-when-to-pause).'
      ] }
    },
    pullQuote: 'Se um jogo dificulta a recusa, esconde um custo ou vende no seu pior momento, está agindo sobre você, não a seu favor.',
    faqs: [
      { question: 'O que são padrões manipulativos em jogos?', answer: 'São escolhas de interface que pressionam, confundem ou escondem informações para influenciar decisões, como compras ou o tempo que a pessoa passa jogando.' },
      { question: 'Quais são exemplos de design manipulativo em jogos para celular?', answer: 'Moedas que escondem o preço real, ofertas com urgência artificial, avisos insistentes, sequências que punem uma pausa e compras sugeridas logo após uma derrota são alguns exemplos.' },
      { question: 'Como posso perceber se um jogo está me pressionando a comprar?', answer: 'Veja se o preço está claro, se dá para fechar a oferta com facilidade e se a compra é apresentada em um momento de frustração. Você deve conseguir dizer não sem ser punido.' },
      { question: 'Padrões manipulativos em jogos são ilegais?', answer: 'Alguns podem ser. Por exemplo, regras de defesa do consumidor no Reino Unido já proíbem práticas comerciais enganosas e agressivas, e pesquisadores identificaram técnicas de monetização que parecem incompatíveis com essas regras. Muitos outros padrões manipulativos são legais, mas ainda assim devem ser evitados.' },
      { question: 'O OutBrick tem anúncios obrigatórios?', answer: 'Não. Os vídeos premiados são opcionais, têm limites diários e não interrompem a partida. As compras também são opcionais.' }
    ]
  },
  'why-we-get-attached-to-game-characters': {
    title: 'Por que nos apegamos a personagens de jogos',
    dek: 'Pesquisas sobre apego, relações parassociais e fofura explicam por que personagens nos cativam e o que isso exige de quem cria jogos.',
    imageAlt: 'Os amigos de tijolo do OutBrick em uma tela de iPhone: personagens coloridos com expressões simpáticas',
    tags: ['personagens de jogos', 'apego', 'mascotes', 'design de jogos', 'psicologia'],
    intro: 'As pessoas sentem saudade de personagens que nunca existiram. Dão seus nomes a animais de estimação, preocupam-se com eles entre uma sessão e outra e ficam tristes quando um companheiro é deixado para trás. Isso não começou com os jogos: o público já criava vínculos unilaterais com apresentadores de rádio. Mas os jogos acrescentam algo que filmes e livros não podem oferecer da mesma forma: a personagem reage a você e, às vezes, você é responsável por ela. A pesquisa sobre relações entre jogadores e personagens já explica boa parte dessa atração, inclusive por que alguém que não diz uma palavra ainda pode ser importante. Ela também levanta uma pergunta para todo estúdio que cria mascotes: o que devemos a quem passa a se importar?',
    keyTakeaways: [
      'As pessoas podem se apegar a personagens por admiração, identificação, companhia ou preocupação com o bem-estar deles.',
      'Como personagens de jogos respondem às ações do jogador, o vínculo pode parecer mais recíproco que a relação com figuras de filmes ou livros.',
      'Personagens cativantes dão aos estúdios uma influência real; usá-la para acolher é diferente de provocar culpa para vender ou manter a pessoa jogando.'
    ],
    sections: {
      'seven-kinds-of-attachment': { title: 'Sete formas de criar apego', paragraphs: [
        'Julia Ayumi Bopp e colegas pediram a 213 jogadores que descrevessem um personagem de jogo de quem gostavam muito e explicassem o motivo. Em vez de encontrar um único tipo de “apego”, identificaram sete formas distintas: desde a empolgação com a competência da personagem durante a partida até a admiração como exemplo e a preocupação profunda com seu bem-estar. Algumas pessoas gostavam de controlar uma personagem divertida; outras a viam como amiga ou sentiam vontade de protegê-la.',
        'O estudo foi qualitativo e se baseou no que cada participante escolheu contar. Portanto, descreve os tipos de vínculo, mas não mede a frequência de cada um. Seu mérito está em mostrar a variedade: o apego não é um botão que aumenta com mais diálogos ou gráficos melhores. Uma personagem simples pode conquistar admiração por sua habilidade, carinho por fazer companhia ou cuidado por parecer vulnerável.',
        'Essa variedade importa no design. Uma personagem feita para inspirar admiração precisa de qualidades diferentes de outra criada para despertar cuidado. Katharina Emmerich, Patrizia Ring e Maic Masuch ouviram 237 jogadores sobre companheiros de jogo e descobriram que personalidade e integração ao jogo importam; as pessoas esperam que esses companheiros ajam de forma coerente com a situação, tomem iniciativa e tenham autonomia. Um companheiro que fica parado esperando instruções ou fala na hora errada pode estragar a experiência.'
      ] },
      'intimacy-at-a-distance': { title: 'Intimidade à distância', paragraphs: [
        'Em 1956, os sociólogos Donald Horton e Richard Wohl descreveram uma nova forma de relação criada pelo rádio e pela televisão. O público sentia que conhecia apresentadores e artistas que via e ouvia com frequência, quase como amigos, embora a relação seguisse em uma única direção. Eles chamaram esse fenômeno de interação parassocial e o descreveram como intimidade à distância.',
        'Os jogos ampliam essa ideia porque a personagem na tela pode responder. Uma amiga que acena quando você chega, comemora seu sucesso e demonstra preocupação quando você trava continua não sendo uma pessoa, mas o ciclo de ação e resposta faz o vínculo parecer mais recíproco. Melissa Lewis, René Weber e Nicholas David Bowman criaram uma das primeiras escalas para medir o apego a personagens de jogos. Encontraram relações com o prazer e o tempo de jogo, além de medidas de comportamento problemático — um lembrete de que o mesmo vínculo que torna um jogo acolhedor também pode dificultar parar.'
      ] },
      'the-pull-of-cute': { title: 'O apelo da fofura', paragraphs: [
        'Muitos mascotes têm algo em comum: cabeça grande, rosto arredondado e olhos grandes. O etólogo Konrad Lorenz chamou esse conjunto de características de esquema do bebê. Melanie Glocker e colegas testaram a ideia alterando digitalmente fotos de rostos infantis. Em um estudo com 122 estudantes, rostos com mais características desse tipo foram considerados mais fofos e despertaram mais vontade de cuidar.',
        'A fofura também pode influenciar a atenção. Em três pequenos experimentos, Hiroshi Nittono e colegas observaram que, depois de ver fotos de filhotes de cães e gatos, participantes fizeram tarefas de coordenação motora fina e busca visual com mais cuidado do que após ver animais adultos, além de concentrar melhor a atenção. As amostras eram pequenas e as tarefas simples, então seria exagero afirmar que personagens fofos tornam alguém melhor em quebra-cabeças. Os resultados ajudam a explicar por que um rosto amigável na tela pode trazer conforto, em vez de distrair.'
      ] },
      'what-designers-owe': { title: 'O que designers devem a quem se importa', paragraphs: [
        'Em conjunto, as pesquisas mostram que personagens podem despertar cuidado, atenção e lealdade. A questão ética é o que o jogo faz com essa influência. Usar uma personagem para celebrar o jogador, fazer companhia ou tornar um momento difícil mais leve é um presente. Usá-la para provocar culpa e fazer alguém voltar — com um rosto triste porque a pessoa perdeu um dia ou uma amiga que “precisa” que ela compre algo — transforma carinho em pressão. Esse é um dos padrões discutidos em [padrões manipulativos em jogos para celular](/blog/dark-patterns-in-mobile-games).',
        'Um teste simples: o comportamento da personagem ainda pareceria gentil se a pessoa nunca gastasse dinheiro nem voltasse? Se sim, o vínculo provavelmente está sendo tratado com cuidado. Se ela só demonstra carinho quando há pagamento ou fica triste quando você sai, a afeição virou uma ferramenta de venda.'
      ] },
      'nine-friends-no-voices': { title: 'Nove amigos, sem vozes', paragraphs: [
        'O OutBrick tem nove amigos de tijolo: Bloo, Bricko, Flurry, Moss, Peach, Poppy, Sprout, Vio e Zippy. Eles têm formato de tijolo, três aparecem de cada vez na tela inicial e cada um tem seu próprio gesto de vitória. Não têm voz: animam-se e falam apenas em balões de texto. Cada personagem tem uma personalidade fácil de reconhecer: Bloo usa relógio, Peach planeja com cuidado, Sprout vive fazendo perguntas, Vio é a crítica de fones de ouvido e Zippy está sempre distraído. Conheça todos na [página dos amigos de tijolo](/mascots).',
        'A pesquisa sugere que o silêncio não precisa enfraquecer um vínculo. No estudo de Bopp, competência, admiração e cuidado criaram apego tanto quanto o diálogo; uma personagem silenciosa deixa mais espaço para a imaginação do jogador. É o mesmo princípio de dizer menos que admiramos em [Monument Valley](/blog/monument-valley-less-game-more-experience) e da companhia sem cobranças que exploramos em [Animal Crossing e o tempo compartilhado](/blog/animal-crossing-shared-time).'
      ] }
    },
    pullQuote: 'O comportamento da personagem ainda pareceria gentil se a pessoa nunca gastasse nada nem voltasse?',
    faqs: [
      { question: 'Por que as pessoas se apegam a personagens de videogame?', answer: 'Há vários motivos: admirar a habilidade de uma personagem, vê-la como exemplo, gostar de sua companhia ou se preocupar com seu bem-estar. Como ela responde ao jogador, o vínculo pode parecer mais recíproco que o criado com personagens de livros e filmes.' },
      { question: 'O que é uma relação parassocial?', answer: 'É um vínculo unilateral com uma figura da mídia, como apresentador ou personagem, que não sabe que você existe. Pesquisadores descreveram o fenômeno em 1956; ele faz parte da maneira normal como nos relacionamos com a mídia.' },
      { question: 'Por que mascotes de jogos costumam ser fofos?', answer: 'Características como cabeça grande, rosto redondo e olhos grandes — o chamado esquema do bebê — são percebidas como fofas e aumentam a vontade de cuidar. Designers usam esses traços para criar personagens simpáticas.' },
      { question: 'Os personagens do OutBrick falam?', answer: 'Não. Os nove amigos de tijolo não têm voz: animam-se e se comunicam por balões de texto, e cada um tem seu próprio gesto de vitória.' }
    ]
  },
  'colour-in-game-interfaces': {
    title: 'Cores nos jogos: contraste, significado e emoção',
    dek: 'O que a psicologia das cores pode ensinar, por que o contraste importa mais que o tom e como tornar peças coloridas legíveis para todo mundo.',
    imageAlt: 'Um tabuleiro real do OutBrick com peças coloridas em um iPhone, entre Moss com seu cinto de ferramentas e Flurry com um gorro listrado',
    tags: ['cores em jogos', 'design de jogos', 'contraste', 'visão de cores', 'acessibilidade'],
    intro: 'A cor é uma das primeiras coisas que notamos em um jogo e uma das últimas em que pensamos conscientemente. Vermelho parece perigo, verde parece sinal para avançar e dourado lembra tesouro — ninguém precisa nos explicar. Designers usam cores para criar clima, indicar o que importa e, em quebra-cabeças de classificação, até apresentar as regras. Textos populares sobre psicologia das cores costumam fazer afirmações categóricas: azul acalma, vermelho anima, amarelo dá fome. A pesquisa é mais interessante e cautelosa. O que ela sustenta com mais força é menos glamouroso que uma promessa de humor: contraste, consistência e nunca depender só da cor.',
    keyTakeaways: [
      'As cores influenciam sentimentos e comportamentos, mas a área ainda está amadurecendo e muitas afirmações populares vão além das evidências.',
      'Associações entre cores e emoções aparecem em 30 países, com diferenças locais; por isso, os significados de um jogo devem ser reforçados, não presumidos.',
      'Para facilitar a leitura, o contraste importa mais que o tom: diferenças maiores de luminosidade ajudam as pessoas a ler e localizar elementos.'
    ],
    sections: {
      'what-colour-research-shows': { title: 'O que a psicologia das cores pode — e não pode — dizer', paragraphs: [
        'A revisão de Andrew Elliot e Markus Maier na Annual Review of Psychology ajuda a corrigir ideias simplistas sobre psicologia das cores. Ela mostra que as cores podem transmitir significados e influenciar sentimentos, pensamentos e comportamentos, com boa parte das evidências vindo de situações de desempenho e atração. Também alerta que a área ainda está no começo: trabalhos anteriores tiveram problemas metodológicos, e precisamos estudar melhor os limites desses efeitos e sua aplicação no mundo real antes de fazer recomendações fortes.',
        'Para quem cria jogos, isso pede humildade. Afirmações populares sobre cores específicas muitas vezes vão além das evidências; poucas pesquisas foram feitas enquanto as pessoas jogavam de verdade. Cor pode ser uma ferramenta importante, mas frases como “este tom de azul reduz o estresse” devem ser hipóteses a testar com os próprios jogadores, não regras.'
      ] },
      'shared-meanings': { title: 'Significados compartilhados, com diferenças locais', paragraphs: [
        'Os significados das cores são universais ou aprendidos? Domicele Jonauskaite e uma equipe internacional pediram a 4.598 pessoas em 30 países, falantes de 22 idiomas, que relacionassem 20 emoções a 12 termos de cor. Os padrões foram muito parecidos entre países, com semelhança média de r = 0,88. Ainda assim, o país de origem ajudava a prever as associações individuais, e elas eram mais semelhantes entre países próximos em língua ou geografia.',
        'Isso é uma boa notícia para jogos com público internacional: muitos significados gerais viajam bem. As diferenças locais são um motivo para combinar pistas importantes com forma, texto ou posição, em vez de confiar que a cor terá o mesmo sentido para todo mundo.',
        'Os jogos também criam sua própria linguagem de cores. A pessoa aprende que uma cor representa saúde, dano ou uma porta trancada; depois, passa a esperar esse significado. Quebrar a expectativa de propósito pode surpreender, mas quebrá-la sem querer confunde. Se o vermelho significa tanto “perigo” quanto “recompensa”, o jogador precisa parar para interpretar cada ocorrência.'
      ] },
      'colour-and-mood-in-games': { title: 'Cor e clima nos mundos dos jogos', paragraphs: [
        'Erik Geslin, Laurent Jégou e Danny Beaudoin estudaram cores dentro de jogos. Mostraram 24 imagens de videogames a 85 participantes, perguntaram que sensação cada imagem transmitia e compararam as respostas com medidas das cores. Brilho, saturação e luminosidade tiveram correlação significativa com emoções como alegria, tristeza, medo e serenidade; também importavam a variedade e o impacto visual das cores.',
        'O estudo mediu reações a imagens paradas, não durante uma partida, e correlação não prova causa. Ainda assim, oferece a designers um vocabulário mais útil do que apenas o tom: luminosidade e saturação gerais e a variedade de cores podem contribuir para o clima tanto quanto as cores escolhidas. Os autores propõem planejar a paleta emocional do jogo, como um filme planeja a iluminação.'
      ] },
      'contrast-before-hue': { title: 'Contraste antes do tom', paragraphs: [
        'Quando o objetivo é facilitar a leitura, o contraste vence. Richard Hall e Patrick Hanna compararam quatro combinações de cores para texto e fundo em páginas da web com 136 participantes. Em geral, combinações com maior taxa de contraste eram mais legíveis. A cor não alterou significativamente a memória do conteúdo, embora cores preferidas tenham recebido avaliações estéticas melhores.',
        'Gordon Legge e colegas estudaram o contraste mais de perto. Pessoas com visão normal liam com velocidade semelhante tanto com forte contraste cromático — texto e fundo diferentes apenas no tom — quanto com forte contraste de luminância, isto é, diferença de luminosidade. Para pessoas com baixa visão, o contraste de luminância foi sempre melhor. Uma interface que diferencia peças apenas pelo tom, com luminosidade parecida, funciona para algumas pessoas e falha para outras. É por isso que as diretrizes de acessibilidade da web estabelecem taxas mínimas de contraste; a [explicação da W3C sobre contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) é um bom ponto de partida.'
      ] },
      'readable-bricks': { title: 'O que uma peça legível precisa', paragraphs: [
        'Em um quebra-cabeça de cores, a cor não é decoração: é a regra. No OutBrick, cada peça só sai do tabuleiro pela porta da sua própria cor; sem distinguir as cores, não dá para jogar. Por isso, símbolos para pessoas daltônicas vêm ativados por padrão: cada peça e porta têm um símbolo correspondente, então o formato complementa a cor. Explicamos essa decisão em [por que a cor nunca deve ser a única pista em um quebra-cabeça](/blog/color-shape-accessibility), e a [página de acessibilidade](/accessibility) apresenta outros recursos, incluindo o VoiceOver.',
        'Clima e legibilidade podem coexistir quando cada um tem seu papel. A Jornada do OutBrick atravessa 167 vilarejos feitos de tijolos, de Cherry Blossom Town a Lavender Hills; o cenário muda, enquanto as peças mantêm suas cores e símbolos. Para dicas práticas sobre como ler um tabuleiro colorido, consulte [dicas para quebra-cabeças de classificação por cor](/blog/colour-sort-puzzle-tips). Os estudos acima também sugerem princípios úteis para qualquer jogo com peças coloridas:'
      ], bullets: [
        'Diferencie peças por luminosidade e por tom, para que continuem distintas com pouca luz, em uma tela danificada ou para quem tem baixa visão.',
        'Dê uma função a cada cor e mantenha seu significado consistente no jogo inteiro.',
        'Associe cada significado de cor a outra pista: símbolo, formato, posição ou rótulo.',
        'Use saturação e brilho para criar o clima, mantendo as peças como o elemento mais nítido da tela.',
        'Teste em escala de cinza. Se o tabuleiro continuar legível, as cores estão ajudando em vez de carregar toda a informação.'
      ] }
    },
    pullQuote: 'Contraste, consistência e pistas adicionais importam mais do que promessas sobre o efeito de um tom específico.',
    faqs: [
      { question: 'As cores afetam as emoções nos jogos?', answer: 'Podem influenciar emoções e comportamento, mas a pesquisa ainda está amadurecendo. Luminosidade, saturação e o conjunto da paleta também importam; afirmações sobre um tom específico devem ser testadas, não tratadas como regra.' },
      { question: 'Os significados das cores são iguais no mundo todo?', answer: 'Muitos padrões são compartilhados entre países, mas há diferenças relacionadas à língua e à geografia. Reforce significados importantes com símbolos, texto ou posição.' },
      { question: 'Por que contraste é importante em jogos?', answer: 'O contraste ajuda a distinguir elementos. Para pessoas com baixa visão, diferenças de luminosidade são especialmente úteis; depender apenas do tom pode tornar as peças difíceis de identificar.' },
      { question: 'Qual deve ser a taxa de contraste do texto em um jogo?', answer: 'As Diretrizes de Acessibilidade para Conteúdo Web (WCAG) recomendam, no nível AA, uma taxa de pelo menos 4,5:1 para texto comum e 3:1 para texto grande. Jogos não são obrigados a seguir esses valores, mas eles são uma referência prática e bem estabelecida.' },
      { question: 'Como o OutBrick ajuda pessoas daltônicas?', answer: 'Cada peça e porta tem um símbolo correspondente, ativado por padrão, para que a identificação não dependa apenas da cor. Nosso guia sobre [daltonismo nos jogos](/blog/colour-blindness-in-games) explica sua prevalência e outros recursos que ajudam.' }
    ]
  }
};
