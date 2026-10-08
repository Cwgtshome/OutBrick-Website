import type { ExtraGuides } from '../../i18n/blog';

/** AppleVis accessibility series, reviewed 2 October 2026. */
export const ptBR11: ExtraGuides = {
  'outbrick-accessibility-commitment': {
    title: 'O compromisso do OutBrick com pessoas cegas e o VoiceOver',
    dek: 'O que significa nosso compromisso com jogadores cegos: ouvir relatos reais, explicar os limites atuais e incluir acessibilidade no OutBrick.',
    imageAlt: 'Ilustração do OutBrick com um celular, peças coloridas e dois personagens de tijolo sobre fundo azul-marinho',
    tags: ['acessibilidade', 'VoiceOver', 'jogadores cegos', 'design inclusivo', 'opinião dos jogadores'],
    intro: 'Uma pessoa pode adorar um quebra-cabeça e ainda encontrar uma barreira que não deveria existir. Essa é a principal lição da conversa sobre o OutBrick no AppleVis. Jogadores contaram que descobriram um novo tipo de jogo e gostaram do desafio, mas também tiveram dificuldade para entender movimentos e encontrar informações do tabuleiro ou controles com o VoiceOver. Todas essas experiências merecem atenção. Temos um compromisso permanente com a acessibilidade para pessoas cegas e usuárias do VoiceOver. Suas opiniões nos ajudam a tornar o tabuleiro mais fácil de explorar, as regras mais simples de aprender e toda a experiência mais acolhedora. Queremos que você possa se concentrar no quebra-cabeça que veio jogar.',
    keyTakeaways: [
      'Jogadores cegos fazem parte da conversa cotidiana sobre regras, dificuldade, diversão e desenvolvimento futuro do OutBrick.',
      'As respostas da equipe no AppleVis em 2 de outubro reconhecem barreiras específicas e prometem melhorias; isso não significa que todas já foram lançadas.',
      'Um relato útil descreve a tarefa e o que aconteceu. Você não precisa compartilhar diagnóstico, detalhes de compra nem informações privadas da conta.'
    ],
    sections: {
      'start-with-the-player': { title: 'Comece pelo que a pessoa veio fazer', paragraphs: [
        'Alguém pode abrir o OutBrick para resolver um tabuleiro difícil, descobrir se gosta de jogos de classificação ou simplesmente passar alguns minutos com um novo quebra-cabeça. A acessibilidade deve apoiar esse objetivo. Encontrar um botão importa, mas também importa entender a escolha que ele oferece e aproveitar o resultado. Uma interface tecnicamente acessível ainda pode deixar dúvidas demais.',
        'Entrevistas com 32 pessoas cegas ou com baixa visão que jogavam em celulares na China encontraram motivações variadas, como realização e conexão social, além de barreiras de acesso (Ran et al., 2025). As pessoas jogam por mais de um motivo.',
        'Na [conversa no AppleVis](https://www.applevis.com/comment/217460#comment-217460), pessoas nos contaram do que gostaram, onde ficaram presas e o que queriam experimentar. Valorizamos esse quadro completo. Um relato sobre uma porta impossível de encontrar importa mesmo que a pessoa goste do jogo; também importa o prazer de descobrir um gênero que antes parecia inacessível. Ambos ajudam a entender o que merece ser desenvolvido.'
      ] },
      'say-what-is-current': { title: 'Transforme opiniões em melhorias concretas', paragraphs: [
        'Apresentamos o OutBrick ao AppleVis com cores acompanhadas de símbolos, nomes das peças que informam cor, forma e posição, e ações de deslizar do VoiceOver. Jogadores nos ajudaram a identificar dificuldades para encontrar algumas peças e portas explorando a tela pelo toque. Reconhecemos esses problemas. Para a próxima atualização, estamos trabalhando para que a exploração anuncie cada peça e porta em sua posição e identifique como vazias as células livres entre elas.',
        'As telas ao redor do tabuleiro também importam. Os planos para a próxima atualização incluem botões da loja compatíveis com VoiceOver, uma tela inicial mais rápida, informações mais claras sobre portas congeladas e o crédito correto de missões quando o gelo derrete. Nosso [guia de acessibilidade além do tabuleiro](/blog/outbrick-accessibility-beyond-board) explica os relatos e o que as mudanças pretendem facilitar.',
        'Gonçalves et al. (2023) analisaram partidas publicadas por jogadores cegos e os equilíbrios entre acesso, autonomia e envolvimento. O trabalho lembra que concluir uma tarefa não elimina necessariamente as dificuldades ao redor dela.',
        'Se uma ação só funciona por um caminho complicado, o esforço extra continua importando. Queremos que você tenha formas úteis de explorar e entender onde as coisas estão. Nosso [guia do tabuleiro espacial](/blog/outbrick-voiceover-spatial-board) explica como a exploração pelo toque e a navegação sequencial ajudam em partes diferentes dessa tarefa.'
      ], note: 'Status em 2 de outubro de 2026: as melhorias descritas para a próxima atualização ainda estão em andamento. As respostas no AppleVis registram compromissos, não o lançamento dessas correções.' },
      'keep-the-puzzle-worth-playing': { title: 'Mantenha o quebra-cabeça interessante', paragraphs: [
        'Acessibilidade também significa ter espaço para o desafio. A comunidade contou tanto sobre diversão quanto sobre dificuldades: várias ideias aparecendo ao mesmo tempo, limites de movimentos apertados e dúvidas sobre como mover uma peça. São problemas diferentes. Quem já entende os controles pode querer um tabuleiro exigente; quem ainda está aprendendo precisa de explicações antes que o jogo peça um plano.',
        'Em uma pequena pesquisa com entrevistas, jogadores com deficiência visual valorizaram experiências ricas e complexas, ao mesmo tempo que relataram barreiras de acesso (Andrade et al., 2019). Precisamos respeitar essas preferências.',
        'Estamos redesenhando os níveis para que o começo seja mais fácil de entender. Os planos para a próxima atualização incluem tabuleiros iniciais mais tranquilos, uma ideia por vez, cartões curtos de instrução e mais movimentos no início. A meta é dar a cada pessoa uma oportunidade justa de aprender cada ideia antes de combiná-las. Queremos preservar o prazer de encontrar uma solução satisfatória.',
        'Depois de uma tentativa difícil, vale perguntar o que tornou o tabuleiro difícil: uma dependência interessante entre peças, uma regra que não foi explicada ou uma informação impossível de alcançar? Nosso [guia de movimentos e introdução ao jogo](/blog/outbrick-voiceover-slide-actions) ajuda a separar essas questões, que pedem melhorias diferentes.'
      ] },
      'feedback-that-helps': { title: 'Descreva a tarefa e depois a barreira', paragraphs: [
        'Um relato de acessibilidade pode ser curto. Comece pela tela ou pelo tabuleiro e diga o que queria fazer. Explique como chegou ao controle, o que esperava e o que aconteceu. Por exemplo: “Encontro esta porta passando pelos elementos, mas tocar no lugar dela não a anuncia”. Isso descreve a diferença de interação sem exigir termos técnicos.',
        'Se for conveniente, informe a versão do app, o modelo do aparelho e a versão do sistema, além de dizer se o comportamento se repete ao voltar à tela. Esses detalhes ajudam a diferenciar versões e situações; são contexto opcional, não um motivo para descartar um relato. “Não sei por que aconteceu” também é útil quando os passos estão claros.',
        'Use o [formulário de contato do OutBrick](/contact) para falar conosco diretamente. Evite informações de saúde, credenciais, dados de pagamento ou recibos, a menos que outro processo de suporte realmente precise de algo específico. Você pode descrever uma interação com VoiceOver sem explicar por que usa o recurso. Se um botão da loja for o problema, não precisa concluir uma compra para demonstrá-lo.'
      ], bullets: ['Onde: a tela, fase ou controle envolvido.', 'Objetivo: o que você estava tentando fazer.', 'Ação e resultado: o que fez e o que foi anunciado ou mudou.', 'Contexto, se disponível: versões do app e do sistema, aparelho e se ocorre novamente.'] },
      'work-with-different-experiences': { title: 'Acolha diferentes formas de jogar', paragraphs: [
        'Explorar pelo toque e navegar em sequência atendem a objetivos diferentes. Às vezes, a pessoa quer ir rapidamente entre elementos; em outras, quer entender relações espaciais. Oferecer uma informação por um caminho não torna o outro dispensável, especialmente quando os espaços vazios fazem parte da solução.',
        'Nair et al. (2024) compararam ferramentas de exploração não visual com nove participantes cegos ou com baixa visão. As preferências se dividiram entre Surveyor e um menu de áudio, mostrando prioridades diferentes em uma amostra pequena e experiente.',
        'Queremos entender qual experiência você procura. Na conversa do AppleVis, um desenvolvedor de outro jogo acessível se ofereceu para trocar ideias, e recebemos a proposta com interesse. Essa troca pode revelar perguntas esquecidas: o anúncio ajuda neste momento? É fácil encontrar o controle? Dá para se orientar novamente depois de um movimento? São conversas que valem continuar.',
        'Dar opinião é um convite, não uma obrigação imposta aos jogadores. Você pode parar, fazer uma pausa ou decidir que a experiência atual não serve para você. Avaliações também são voluntárias. Um relato sincero sobre uma barreira ajuda, com ou sem elogio, nota ou promessa de testar outra versão.'
      ] },
      'follow-the-progress': { title: 'Avalie o progresso pela experiência', paragraphs: [
        'Consulte a [página de acessibilidade](/accessibility) para informações de suporte e as [notas de versão](/whats-new) para acompanhar mudanças lançadas. Ao testar uma atualização, conte se a tarefa importante para você ficou mais fácil. Talvez encontre uma porta com mais naturalidade, entenda uma regra antes ou consiga acessar uma tela que atrapalhava. Queremos que as pessoas sintam esse tipo de progresso.',
        'Pessoas cegas devem poder descobrir, entender e aproveitar o jogo inteiro. Esse é o compromisso que assumimos enquanto o OutBrick evolui. Queremos levar a sério sua opinião quando algo atrapalhar e continuar aprendendo com os momentos que dão vontade de jogar outro tabuleiro. Agradecemos a todos que nos ajudaram a entender os próximos passos.'
      ] }
    },
    pullQuote: 'Jogadores cegos devem poder descobrir, entender e aproveitar o jogo inteiro.',
    faqs: [
      { question: 'O OutBrick tem compromisso com a acessibilidade para pessoas cegas?', answer: 'Sim. A acessibilidade para pessoas cegas e usuárias do VoiceOver é um compromisso contínuo que inclui tabuleiro, regras e telas ao redor. Isso não significa que todas as barreiras relatadas já tenham sido removidas.' },
      { question: 'As correções prometidas no AppleVis já foram lançadas?', answer: 'As respostas de 2 de outubro descrevem várias mudanças como trabalho para a próxima atualização; não confirmam que já foram entregues. Consulte as [notas de versão](/whats-new) e a versão instalada.' },
      { question: 'O que devo incluir em um relato de acessibilidade?', answer: 'Descreva a tela ou o tabuleiro, o que queria fazer, sua ação e o resultado. A versão do app, a versão do sistema e o aparelho ajudam, se você tiver esses dados. Evite informações de saúde, credenciais e dados privados de pagamento.' },
      { question: 'Preciso comprar algo ou deixar uma avaliação para dar opinião?', answer: 'Não. Use o [formulário de contato](/contact) para relatar um problema ou sugerir algo sem fazer compras nem deixar uma avaliação. Opiniões e avaliações são voluntárias.' }
    ]
  },
  'outbrick-voiceover-spatial-board': {
    title: 'Explore o tabuleiro espacial do OutBrick com VoiceOver',
    dek: 'Crie uma imagem mais clara do tabuleiro com VoiceOver: explore peças, portas e espaços vazios e conheça as melhorias prometidas para a próxima atualização.',
    imageAlt: 'Ilustração do OutBrick com um celular, peças coloridas e dois personagens de tijolo sobre fundo azul-marinho',
    tags: ['acessibilidade', 'VoiceOver', 'design inclusivo', 'quebra-cabeças', 'raciocínio espacial'],
    intro: 'É fácil ouvir que existe uma porta e difícil entender onde ela fica. Talvez você a encontre deslizando pelos elementos do tabuleiro, mas não consiga descobri-la ao explorar a tela com o dedo. Essa diferença importa no OutBrick: saber que uma peça existe é só o começo de planejar seu caminho. Jogadores no AppleVis descreveram exatamente essa lacuna e pediram também que os espaços vazios fossem anunciados. Seus relatos nos ajudam a conversar sobre a leitura de um tabuleiro espacial e deixam claro o que prometemos melhorar.',
    keyTakeaways: [
      'Encontrar uma peça e compreender sua posição no espaço são tarefas diferentes; o tabuleiro precisa comunicar as relações entre elementos.',
      'Navegação sequencial e exploração pelo toque podem responder a perguntas distintas. Espaços vazios também são informações úteis.',
      'Em 2 de outubro de 2026, as melhorias anunciadas para posição das peças, portas e células vazias ainda estavam em andamento para a próxima atualização.'
    ],
    sections: {
      'build-a-picture-of-relationships': { title: 'Comece pelas relações entre as peças', paragraphs: [
        'Um tabuleiro não é apenas uma lista de elementos. Para planejar, é preciso saber quais peças estão próximas, qual porta corresponde a cada uma e onde há espaço livre. Se o VoiceOver anuncia cada objeto sem deixar clara sua posição, a pessoa ainda precisa montar esse mapa mental.',
        'Pesquisas sobre jogos não visuais mostram que pessoas cegas e com baixa visão usam estratégias variadas para entender jogos visuais (Kane et al., 2008; Ran et al., 2025). O relato de um tabuleiro real ajuda a descobrir qual relação espacial falta. Nosso [guia de ações de deslizar com VoiceOver](/blog/outbrick-voiceover-slide-actions) explica os movimentos depois que a peça desejada foi encontrada.',
        'Uma porta pode ser encontrada na navegação, mas ainda faltar uma indicação de que ela está à direita da peça. Da mesma forma, ouvir “peça azul” não informa se há outra peça bloqueando o caminho. Relações e localizações são parte das informações necessárias para decidir.',
        'A comunidade pediu especificamente que as células vazias fossem anunciadas. Um espaço livre pode indicar por onde uma peça consegue passar e em que obstáculo vai parar; sem essa informação, uma rota pode continuar difícil de imaginar.'
      ] },
      'compare-two-ways-of-exploring': { title: 'Use navegação e toque para perguntas diferentes', paragraphs: [
        'Deslizar entre elementos pode responder “o que existe no tabuleiro?”; explorar diretamente com o dedo pode ajudar a responder “onde fica?”. Nenhum método precisa substituir o outro. No OutBrick, entender o tabuleiro também é uma tarefa diferente de executar um deslize.',
        'Nair et al. (2024) compararam ferramentas de exploração não visual com nove participantes cegos ou com baixa visão. As preferências se dividiram entre uma ferramenta de exploração e um menu de áudio. A amostra é pequena e o cenário diferente do OutBrick, mas lembra que jogadores podem preferir maneiras diferentes de se orientar.',
        'A navegação sequencial é eficiente para percorrer os elementos e ouvir seus nomes. A exploração pelo toque mantém a mão na tela e pode ajudar a formar uma noção de distância e posição. Um modo não substitui a pergunta que o outro responde.',
        'Gonçalves et al. (2023) também mostram que uma solução acessível envolve mais do que chegar ao objetivo: controle, compreensão e envolvimento fazem parte da experiência. Nenhum desses estudos avaliou a implementação atual do OutBrick.'
      ] },
      'why-empty-cells-matter': { title: 'Uma célula vazia também traz informação', paragraphs: [
        'Os espaços vazios ajudam a distinguir uma rota bloqueada de uma possível e deixam mais claras as relações entre peças. Eles não garantem, por si só, que uma peça pare ali: no OutBrick, um deslize até o fim continua até algo parar a peça, e uma ação de deslize mais curta diz quantas casas percorre. Nosso [guia de movimentos](/blog/outbrick-voiceover-slide-actions) explica por que o ponto de parada importa tanto quanto o início.',
        'Na [resposta no AppleVis sobre exploração pelo toque](https://www.applevis.com/comment/217455#comment-217455), nos comprometemos a tornar cada peça e porta encontrável em sua posição real e a anunciar as células livres como vazias. A sugestão posterior sobre espaços vazios reforçou essa prioridade. Em 2 de outubro de 2026, as correções ainda estavam em andamento para a próxima atualização.',
        'Um estudo pequeno nos incentiva a acolher diferentes preferências de exploração. O contexto era diferente do OutBrick, mas a pergunta é útil: você consegue investigar o tabuleiro da maneira que prefere? A [página de acessibilidade](/accessibility) reúne as informações mais amplas sobre recursos.'
      ] },
      'a-small-orientation-routine': { title: 'Experimente uma rotina breve de orientação', paragraphs: [
        'Ao abrir um tabuleiro, você pode conferir a quantidade de peças, identificar as portas correspondentes e localizar espaços vazios relevantes antes de mover. Essa rotina pode ajudar a formar um mapa inicial sem pressupor uma única ordem correta. Depois de um deslize, confira a região que mudou e compare com o que esperava.',
        'A rotina é uma sugestão de exploração, não uma funcionalidade garantida nem uma exigência. Se uma etapa for trabalhosa ou se a informação anunciada não ajudar, esse é um relato útil. O importante é ter informação suficiente para escolher a próxima jogada.',
        'Compare o que você ouviu ao navegar pelos elementos com o que conseguiu descobrir tocando em regiões do tabuleiro. Se os métodos apontarem informações diferentes, anote qual elemento e posição estavam envolvidos.'
      ], bullets: ['Identifique a peça e a porta correspondente antes de planejar a rota.', 'Confira quais peças estão no caminho e onde o deslize pararia.', 'Compare exploração pelo toque e navegação sequencial quando parecer faltar informação.', 'Trate o silêncio como informação ainda não confirmada até conseguir verificar o espaço.'] },
      'what-we-have-promised': { title: 'O que nos comprometemos a fazer na próxima atualização', paragraphs: [
        'Em 2 de outubro de 2026, as mudanças prometidas continuavam em andamento: anunciar a posição de cada peça e porta na exploração por toque e identificar células livres como vazias. Não estamos afirmando que essas correções já foram lançadas. As [notas de versão](/whats-new) informam o que foi efetivamente publicado.',
        'A [resposta do OutBrick no AppleVis sobre exploração pelo toque](https://www.applevis.com/comment/217455#comment-217455) registra esse compromisso. A [página de acessibilidade](/accessibility) reúne informações dos recursos atuais. Queremos que o tabuleiro comunique as peças e os espaços com clareza suficiente para que a próxima decisão continue sendo sua.',
        'A sugestão posterior sobre células vazias reforçou a prioridade de comunicar não só objetos, mas também o espaço entre eles. Essa tarefa complementa os rótulos sequenciais: o objetivo é poder descobrir os elementos e formar uma imagem de onde estão.',
        'Até que as mudanças apareçam nas notas de versão, considere-as trabalho em andamento. Se testar uma atualização e a exploração ainda não der a informação necessária, conte qual célula ou posição não foi anunciada.'
      ] },
      'share-a-useful-board-report': { title: 'Ajude-nos a localizar a informação que falta', paragraphs: [
        'Ao relatar um problema, informe a fase, o elemento que buscava, o método de navegação usado e o que o VoiceOver anunciou. Se puder, acrescente a versão do app e do sistema. Não precisa concluir o tabuleiro nem saber a causa técnica.',
        'Use o [formulário de contato](/contact) para enviar o relato. Nosso artigo sobre o [compromisso com jogadores cegos](/blog/outbrick-accessibility-commitment) explica como essas opiniões orientam o trabalho. A meta é um tabuleiro em que peças e espaços possam ser compreendidos para que a próxima decisão pertença a você.',
        'Pode ajudar dizer se você tentou deslizar pelos elementos ou explorar uma região pelo toque, qual anúncio esperava ouvir e o que recebeu. Uma descrição pequena e concreta é suficiente.'
      ] }
    },
    pullQuote: 'O espaço vazio também faz parte das informações do quebra-cabeça.',
    faqs: [
      { question: 'Por que é importante ouvir onde as peças e portas estão?', answer: 'Saber que existe uma peça não basta para planejar uma rota. A posição, as relações entre elementos e os espaços livres também ajudam a entender o tabuleiro.' },
      { question: 'Como relatar um problema de exploração com VoiceOver?', answer: 'Informe a fase ou elemento, se usou navegação sequencial ou exploração por toque e o que foi anunciado. A versão do app e do sistema ajuda, se estiver disponível.' },
      { question: 'As melhorias para espaços vazios já foram lançadas?', answer: 'Em 2 de outubro de 2026, continuavam em andamento para a próxima atualização. Confira as [notas de versão](/whats-new) para saber o que foi publicado.' },
      { question: 'Posso enviar um relato sem terminar o tabuleiro?', answer: 'Sim. Use o [formulário de contato](/contact) e descreva onde a exploração ficou difícil; você não precisa concluir a fase nem descobrir a causa técnica.' }
    ]
  },
  'outbrick-voiceover-slide-actions': {
    title: 'Como deslizar peças no OutBrick usando ações do VoiceOver',
    dek: 'Conheça as quatro direções, as portas correspondentes e as distâncias de deslize, com orientações do VoiceOver e as melhorias de ensino prometidas.',
    imageAlt: 'Ilustração do OutBrick com um celular, peças coloridas e dois personagens de tijolo sobre fundo azul-marinho',
    tags: ['acessibilidade', 'VoiceOver', 'quebra-cabeças', 'jogos para celular', 'design inclusivo'],
    intro: 'É razoável não saber como mover uma peça para baixo quando o jogo não explica os controles. Uma pessoa no AppleVis entendeu que as peças do OutBrick precisavam sair do tabuleiro, mas achou que só podiam subir e não encontrou um tutorial. Nossa resposta explicou as quatro direções, as portas correspondentes e as ações do VoiceOver, além de prometer instruções mais claras na próxima atualização. Este guia reúne essas informações para separar a escolha da direção, a leitura de uma rota e a decisão sobre qual peça mover primeiro.',
    keyTakeaways: [
      'Uma peça pode deslizar para cima, para baixo, para a esquerda ou para a direita e só sai pela porta da própria cor.',
      'O gesto do VoiceOver seleciona uma ação; o nome da ação anuncia a direção. Cada ação também diz até onde a peça desliza.',
      'Em 2 de outubro de 2026, cartões de ensino mais claros e ideias apresentadas uma por vez ainda eram planos para a próxima atualização; a versão 5.1 trouxe os cartões curtos.'
    ],
    sections: {
      'match-the-brick-to-its-gate': { title: 'Encontre o destino, onde quer que esteja', paragraphs: [
        'Uma meta básica é levar cada peça para casa pela porta da mesma cor. Primeiro, encontre a peça e sua porta correspondente; depois, planeje uma rota. A porta pode estar acima, abaixo ou em qualquer lado do tabuleiro. Não há uma direção única para todas as peças.',
        'Imagine uma porta correspondente à direita, com outra peça entre ela e a peça selecionada. O obstáculo imediato é a peça no caminho. Procurar uma ação para cima não resolve uma rota que precisa ser liberada pela lateral. Para encontrar peças antes de escolher uma ação, leia nosso [guia de orientação do tabuleiro com VoiceOver](/blog/outbrick-voiceover-spatial-board).',
        'Antes de mover, confirme a cor da peça e a porta correspondente. Uma peça pode estar perto da borda e ainda precisar que outra seja deslocada para liberar o caminho. A direção disponível depende da posição e dos bloqueios, não só de onde está a saída.'
      ] },
      'predict-the-stopping-point': { title: 'Escolha até onde vai o deslize', paragraphs: [
        'Desde a versão 5.1, cada ação de deslize do OutBrick diz a distância além da direção, como “Deslizar para a direita 1 casa” ou “Deslizar para cima até o fim, 3 casas”. Um deslize até o fim continua até encontrar uma parede, outra peça ou o limite do tabuleiro; um mais curto para onde a ação diz. O ponto final faz parte do planejamento: uma peça pode precisar ficar em um lugar específico para ajudar outra a alcançar sua porta.',
        'A ordem também importa. Tirar um bloqueio do caminho pode abrir uma saída, mas mover cedo demais uma peça que serviria de apoio pode mudar um deslize posterior. Você pode pensar nessa sequência antes de agir. Nosso [guia sobre desafio sem cronômetro](/blog/outbrick-untimed-puzzle-challenge) explica a diferença entre tempo para pensar e limite de movimentos: poder observar o tabuleiro com calma não significa ter movimentos ilimitados.',
        'Uma boa previsão inclui o que vai interromper a peça. Se o caminho ficar vazio até a parede, ela pode passar do ponto que você imaginava; outra peça no caminho talvez seja justamente o apoio de que você precisa.'
      ] },
      'choose-a-voiceover-slide-action': { title: 'O gesto escolhe a ação; o nome indica a direção', paragraphs: [
        'Nossa [explicação de movimentos no AppleVis](https://www.applevis.com/comment/217463#comment-217463) descreve estas ações do VoiceOver: coloque o foco em uma peça e deslize para cima ou para baixo para escolher entre deslizar para cima, para baixo, para a esquerda ou para a direita. Ouça o nome da ação. A direção do gesto que seleciona e a direção anunciada pela ação cumprem funções diferentes.',
        'Com o gesto padrão do VoiceOver para ações personalizadas, toque duas vezes depois de escolher a ação para executá-la, conforme a [orientação da Apple sobre ações personalizadas](https://developer.apple.com/videos/play/wwdc2019/250/?time=205). Antes, confirme qual peça está em foco e a direção pretendida. Depois, confira a região alterada e compare com sua previsão. Se as ações disponíveis não estiverem claras na sua configuração, conte-nos o que o VoiceOver anuncia.',
        'Se o comando anunciado e o resultado esperado não combinarem, pare antes de repetir o gesto. Confira novamente o foco e escute o nome completo da ação selecionada. Assim, evita-se mover uma peça diferente ou numa direção que não era a intenção.',
        'O gesto pode variar conforme as configurações de acessibilidade. Este exemplo descreve a orientação padrão mencionada na resposta; se sua configuração for diferente, registre o que aparece no rotor de ações do seu aparelho.'
      ] },
      'check-the-route-when-movement-is-unclear': { title: 'Se o movimento parecer errado, confira uma coisa por vez', paragraphs: [
        'Primeiro, confirme a peça em foco e se ela corresponde à porta que você pretende alcançar. Depois, confira se a ação selecionada nomeia a direção desejada. Por fim, considere o que vai interromper o deslize: parede, peça ou limite do tabuleiro. Separar essas perguntas ajuda a entender se a dificuldade está em encontrar o elemento, selecionar a ação ou prever o resultado.',
        'Uma descrição clara pode começar com um único movimento: diga qual peça selecionou, qual ação o VoiceOver anunciou, o que esperava e o que aconteceu. Você não precisa explicar a causa técnica. Consulte as [informações de acessibilidade](/accessibility) ou envie pelo [formulário de contato](/contact) a fase, direção escolhida e o anúncio que deixou dúvida.',
        'Se a peça se moveu, compare o local onde parou com a previsão. Se a ação não aconteceu, confira se o foco ainda estava na peça correta. Essas observações separam um movimento recusado de um resultado legal, mas diferente do esperado.',
        'Não é preciso continuar uma sequência para provar que ficou confuso. Registrar a primeira divergência preserva o estado que ajuda a entender o que aconteceu.'
      ] },
      'teach-one-idea-at-a-time': { title: 'O que prometemos ensinar com mais clareza', paragraphs: [
        'Nas respostas da equipe ao AppleVis, reconhecemos que a instrução de movimentos precisava melhorar. Os planos para a próxima atualização incluem tabuleiros iniciais mais tranquilos, ideias introduzidas uma de cada vez, cartões curtos de ensino e mais movimentos no começo. Em 2 de outubro de 2026, essas mudanças ainda estavam em andamento; não estamos dizendo que já foram lançadas.',
        'A meta é explicar uma ideia antes de combiná-la com outras, para que a pessoa consiga aprender as regras e depois aproveitar um desafio interessante. As [notas de versão](/whats-new) informam quando uma mudança estiver publicada.',
        'Um cartão de ensino deve tornar o próximo passo compreensível, sem resolver o tabuleiro pela pessoa. Mais movimentos no começo dão espaço para testar o que foi explicado e entender como uma peça para.',
        'Essas mudanças são compromissos de trabalho, não recursos confirmados na versão atual. A data e o status importam para que ninguém confunda uma promessa com uma correção já entregue.'
      ] },
      'keep-the-next-decision-yours': { title: 'Deixe a próxima decisão nas suas mãos', paragraphs: [
        'As pesquisas oferecem perguntas úteis sobre escolha e compreensão; sua experiência em um tabuleiro real mostra onde concentrar o trabalho. A [página de acessibilidade](/accessibility) apresenta os recursos disponíveis. Se algo ficar incerto, use o [formulário de contato](/contact) para contar a fase, a direção escolhida e o anúncio recebido. Um relato claro pode começar com um único movimento.',
        'A intenção não é dizer qual movimento você deveria fazer, mas garantir que você tenha informação para escolher. Quando algo no tabuleiro ou nas instruções atrapalhar, diga-nos o que queria fazer e o que o jogo comunicou.',
        'A dificuldade de uma rota pode ser parte do desafio; não conseguir descobrir como controlar uma peça é outro problema. Separar essas experiências ajuda a preservar o que torna o quebra-cabeça interessante e corrigir barreiras de acesso.'
      ] }
    },
    pullQuote: 'Um relato claro pode começar com um único movimento.',
    faqs: [
      { question: 'Como deslizo uma peça com o VoiceOver?', answer: 'Coloque o foco na peça e deslize para cima ou para baixo para percorrer as ações: deslizar para cima, baixo, esquerda ou direita. Ouça o nome e, com o gesto padrão, toque duas vezes para executar.' },
      { question: 'Por que a peça continua deslizando?', answer: 'Num deslize até o fim, a peça segue na direção escolhida até algo pará-la, como uma parede, outra peça ou a borda do tabuleiro. Desde a versão 5.1, outras ações dizem uma distância menor, como “Deslizar para a direita 1 casa”. Planeje o ponto final da rota.' },
      { question: 'As instruções mais claras já estão disponíveis?', answer: 'Em 2 de outubro de 2026, cartões curtos de ensino e mudanças nos primeiros tabuleiros ainda eram trabalho planejado para a próxima atualização. A versão 5.1 trouxe um cartão curto na primeira vez que você encontra cada ideia nova. Consulte as [notas de versão](/whats-new).' },
      { question: 'Como relato uma ação do VoiceOver que não entendi?', answer: 'Conte a fase, a peça em foco, a ação escolhida e o que foi anunciado ou aconteceu. Envie pelo [formulário de contato](/contact); não é preciso saber a causa técnica.' }
    ]
  },
  'outbrick-untimed-puzzle-challenge': {
    title: 'OutBrick sem cronômetro: espaço para um desafio de verdade',
    dek: 'Jogadores pediram tempo para explorar e um começo tranquilo. Veja como limites de movimentos e jogo sem cronômetro se combinam.',
    imageAlt: 'Ilustração do OutBrick com um celular, peças coloridas e dois personagens de tijolo sobre fundo azul-marinho',
    tags: ['acessibilidade', 'quebra-cabeças', 'VoiceOver', 'dificuldade', 'hábitos de jogo'],
    intro: 'Pare um instante para localizar as portas, imaginar uma rota e reconsiderar a primeira jogada. Esse espaço para explorar importa no OutBrick, especialmente quando você está formando uma imagem do tabuleiro com VoiceOver. A conversa do AppleVis trouxe relatos animadores de pessoas que descobriram um novo tipo de quebra-cabeça favorito, junto a perguntas claras sobre dificuldade, limites de movimentos e um cronômetro relatado. Queremos responder diretamente e explicar como estamos tornando as primeiras fases mais acolhedoras sem tirar o prazer de um bom desafio. As pesquisas citadas dão contexto; nenhum desses estudos avaliou o OutBrick.',
    keyTakeaways: [
      'Tempo para entender o tabuleiro e limite de movimentos são decisões distintas: o OutBrick não usa cronômetro, mas seus tabuleiros têm metas de movimentos.',
      'A versão 4.2 publicada retirou o modo Rush e deixou o jogo sem tempo contado; um relato de cronômetro ainda merece investigação caso apareça.',
      'As mudanças planejadas em 2 de outubro para o começo incluíam menos ideias de uma vez, cartões curtos de ensino e mais movimentos para aprender; a versão 5.1 trouxe os cartões curtos.'
    ],
    sections: {
      'understanding-before-moving': { title: 'Dê tempo para entender antes de mover', paragraphs: [
        'No OutBrick, você pode parar para encontrar peças e portas, explorar espaços vazios e pensar em uma rota. Um tabuleiro pode ter uma meta ou limite de movimentos, mas não há cronômetro contando quanto tempo você pode pensar. Ter tempo para observar não elimina a necessidade de comunicar bem as informações do tabuleiro.',
        'Tempo para pensar e quantidade permitida de movimentos são decisões de design separadas. Um tabuleiro pode deixar você ponderar por bastante tempo e ainda tornar cada ação importante. Nosso [guia para ler o tabuleiro do OutBrick com VoiceOver](/blog/outbrick-voiceover-spatial-board) explica as informações que essa pausa precisa disponibilizar. Tempo extra ajuda pouco quando uma peça ou espaço vazio essencial não pode ser encontrado.',
        'Um limite de movimentos pede planejamento, enquanto um cronômetro exige agir antes que o tempo termine. No OutBrick, os objetivos e limites de movimentos ficam visíveis desde o primeiro toque; a pessoa pode pensar antes de decidir.'
      ] },
      'what-the-timer-record-says': { title: 'Mantenha visível a divergência sobre o cronômetro', paragraphs: [
        'Nossa publicação inicial no AppleVis descreveu o jogo sem cronômetro. Depois, uma pessoa contou que o tempo quase acabou antes mesmo de começar e perguntou se era possível desativar o contador. Em [nossa resposta sobre o cronômetro](https://www.applevis.com/comment/217462#comment-217462), explicamos que o modo cronometrado havia sido totalmente removido e que os tabuleiros passaram a ter apenas uma meta de movimentos.',
        'As [notas publicadas da versão 4.2](/whats-new#4-2) também informam que o modo Rush foi retirado e que nada no OutBrick tem cronômetro. Elas registram a mudança publicada, mas não explicam o que aconteceu naquela sessão específica. Se ainda aparece uma contagem regressiva, descreva a tela e a versão instalada no [formulário de contato](/contact). Isso nos dá um ponto concreto para investigar.',
        'É importante não apagar essa diferença entre o registro do produto e o relato individual. A pessoa pode ter visto outra tela, uma versão distinta ou um contador que não era cronômetro; sem detalhes, não sabemos. O relato merece investigação sem invalidar o histórico publicado.'
      ] },
      'enjoyment-and-difficulty': { title: 'Gostar de um jogo pode incluir achá-lo difícil', paragraphs: [
        'Um desafio interessante pode fazer parte da diversão. Andrade et al. (2019) ouviram jogadores com deficiência visual que valorizavam experiências complexas, embora também relatassem barreiras. Ryan et al. (2006) relacionaram autonomia e competência percebidas ao prazer em jogos. Nenhum estudo estabelece qual dificuldade é adequada para cada pessoa nem avaliou o OutBrick.',
        'Quando um tabuleiro parece difícil, tente nomear o obstáculo: você não sabe o que a peça pode fazer, onde ela precisa chegar ou como chegar lá dentro da meta de movimentos? Nosso [guia de ações do VoiceOver](/blog/outbrick-voiceover-slide-actions) aborda a primeira pergunta. As outras tratam de entender o espaço e planejar.',
        'A pesquisa de Abuhamdeh (2012) sobre desafio e prazer em jogos também aponta para o valor de uma dificuldade envolvente, em que a pessoa se sente capaz de agir. Ela não determina um nível certo para todos nem avaliou os tabuleiros do OutBrick.',
        'A meta não é retirar a dificuldade, mas separar a dificuldade de pensar da dificuldade de descobrir como jogar. Quando os controles ficam claros, o desafio pode vir da rota e das dependências entre as peças.'
      ] },
      'a-gentler-first-encounter': { title: 'Um começo mais tranquilo, uma ideia por vez', paragraphs: [
        'Estamos trabalhando para tornar os primeiros tabuleiros mais fáceis de aprender: apresentar ideias individualmente, incluir cartões curtos de instrução e dar mais movimentos no início. O objetivo é que a pessoa compreenda uma regra antes de precisar combiná-la com outras. Em 2 de outubro de 2026, essas mudanças continuavam planejadas para a próxima atualização.',
        'Uma introdução mais acolhedora não exige remover desafios posteriores. Ela ajuda a distinguir um quebra-cabeça exigente de uma regra que ainda não foi ensinada ou de uma informação que não pôde ser alcançada.',
        'Andrade et al. (2019) descrevem como jogadores com deficiência visual navegam tanto experiências satisfatórias quanto tensões de acesso. Essa variedade é um motivo para oferecer uma introdução que ensine sem presumir que todos querem menos complexidade.',
        'Os cartões, movimentos extras e mudanças de sequência são propostas para reduzir a carga inicial enquanto a pessoa aprende as mecânicas. Quando forem lançadas, as notas de versão indicarão a versão correspondente.'
      ] },
      'keep-the-interesting-challenge': { title: 'Preserve a parte interessante do desafio', paragraphs: [
        'Um limite de movimentos pode tornar uma rota mais significativa sem apressar a pessoa com um cronômetro. O interesse está em decidir quais peças mover, prever onde vão parar e como uma jogada prepara a seguinte. A meta é manter esse raciocínio e reduzir obstáculos que não fazem parte do quebra-cabeça, como instruções pouco claras.',
        'Se uma peça ou porta não puder ser encontrada, conte-nos em vez de gastar tentativas adivinhando. Você deve poder se concentrar no plano. A [página de acessibilidade](/accessibility) reúne informações gerais; nosso [artigo sobre o compromisso de acessibilidade](/blog/outbrick-accessibility-commitment) explica como relatos ajudam a identificar e comunicar melhorias.',
        'Um desafio pode continuar exigente sem usar pressa artificial. Em um estudo sobre motivação em jogos, Ryan et al. (2006) relacionaram autonomia e competência à experiência; não é uma avaliação do OutBrick, mas oferece contexto para preservar escolhas compreensíveis.',
        'A dificuldade deve vir de decidir como organizar os movimentos, não de ocultar informação ou exigir que a pessoa descubra sozinha uma regra que não foi ensinada.'
      ] },
      'a-deliberate-next-attempt': { title: 'Faça com que a próxima tentativa ensine algo', paragraphs: [
        'Depois de uma tentativa, pergunte o que aprendeu: a peça parou onde esperava? A rota exigia mover um bloqueio? A dificuldade vinha de uma dependência interessante ou de algo que não estava explicado? Uma próxima tentativa informativa ajuda a manter o desafio significativo.',
        'As pesquisas citadas aqui oferecem contexto, não uma avaliação do OutBrick. Queremos combinar um começo mais claro com a liberdade de pensar sem pressa e um desafio que continue valendo a pena.',
        'Uma tentativa seguinte pode testar uma única hipótese: “se eu mover esta peça, a outra vai parar na posição necessária”. Assim, até um resultado diferente do esperado informa a próxima decisão, sem exigir que você siga uma sequência pronta.'
      ] }
    },
    pullQuote: 'Tempo para pensar e limite de movimentos são decisões de design distintas.',
    faqs: [
      { question: 'O OutBrick tem cronômetro?', answer: 'As notas da versão 4.2 dizem que o modo Rush foi retirado e que nada no OutBrick é cronometrado. Os tabuleiros têm uma meta de movimentos. Se aparecer uma contagem regressiva, informe a tela e a versão pelo [contato](/contact).' },
      { question: 'Posso pensar o tempo que quiser antes de jogar?', answer: 'Não há contagem de tempo por jogada. A meta de movimentos é uma regra separada do tempo que você leva para observar e planejar.' },
      { question: 'O que mudará nas primeiras fases?', answer: 'Em 2 de outubro de 2026, planos para a próxima atualização incluíam tabuleiros iniciais mais tranquilos, uma ideia por vez, cartões curtos e mais movimentos. A versão 5.1 trouxe um cartão curto na primeira vez que você encontra cada ideia nova. Consulte as [notas de versão](/whats-new) para mudanças publicadas.' },
      { question: 'Onde posso relatar uma dificuldade com VoiceOver?', answer: 'Use o [formulário de contato](/contact) e descreva a fase, a informação ou ação difícil de encontrar e o que foi anunciado.' }
    ]
  },
  'outbrick-accessibility-beyond-board': {
    title: 'Acessibilidade no OutBrick além do tabuleiro',
    dek: 'Botões da loja, portas congeladas, progresso em missões e suporte em italiano: como opiniões no AppleVis ajudam a melhorar toda a experiência.',
    imageAlt: 'Ilustração do OutBrick com um celular, peças coloridas e dois personagens de tijolo sobre fundo azul-marinho',
    tags: ['acessibilidade', 'VoiceOver', 'design inclusivo', 'jogos para celular', 'opinião dos jogadores'],
    intro: 'Você deve poder aproveitar toda a experiência do OutBrick, desde abrir o jogo até conferir seu progresso. Jogadores do AppleVis nos ajudaram a perceber onde essa jornada travava: botões da loja que não ativavam, tela inicial lenta, falta de informação sobre portas congeladas e crédito de missão que não era contabilizado. Veja o que estamos melhorando e o que as mudanças precisam fazer por você. Também respondemos à pergunta sobre o idioma italiano e oferecemos uma lista breve para relatar o que estiver atrapalhando.',
    keyTakeaways: [
      'A acessibilidade inclui telas e controles em toda a sessão, não apenas o tabuleiro.',
      'Em 2 de outubro de 2026, correções para loja, tela inicial, portas congeladas e crédito de missões ainda estavam em andamento para a próxima atualização.',
      'O app em italiano e o site em italiano são questões separadas; opiniões podem ser enviadas sem gravação, recibo ou dados privados.'
    ],
    sections: {
      'follow-the-whole-session': { title: 'Considere a sessão inteira', paragraphs: [
        'Uma pessoa pode precisar abrir o jogo, entrar em um tabuleiro, acessar a loja, acompanhar uma missão e voltar à tela inicial. Uma barreira em qualquer etapa afeta toda a experiência, mesmo quando o tabuleiro funciona bem.',
        'Gonçalves et al. (2023) analisaram como jogadores cegos equilibram acesso, autonomia e envolvimento; Kane et al. (2008) estudaram jogos móveis não visuais. Esses trabalhos ajudam a formular perguntas, mas não avaliaram o OutBrick. Os relatos concretos da comunidade nos mostram quais etapas precisam de atenção.',
        'Uma ação não está acessível só porque seu rótulo é anunciado. O controle precisa responder quando ativado e comunicar o resultado para que a pessoa possa decidir o próximo passo.',
        'Andrade et al. (2019) e Ran et al. (2025) documentam experiências variadas de jogadores com deficiência visual. Esse trabalho reforça a importância de ouvir sobre o jogo inteiro, sem supor uma única rotina ou motivação.'
      ] },
      'shop-labels-and-activation': { title: 'Rótulos da loja precisam levar a uma ação funcional', paragraphs: [
        'Uma opção da loja deve ser compreensível e o botão correspondente precisa responder ao VoiceOver. Jogadores relataram botões que não ativavam como esperado. Em 2 de outubro de 2026, uma correção para botões da loja compatíveis com VoiceOver estava planejada para a próxima atualização, não confirmada como lançada.',
        'Não conclua uma compra apenas para mostrar o problema. Conte qual opção tentou ativar, o que foi anunciado e o que aconteceu. A acessibilidade precisa permitir entender uma escolha sem exigir que você gaste dinheiro.',
        'O foco deve informar qual pacote está selecionado e se o controle está disponível. A ativação deve seguir a ação esperada, sem obrigar a pessoa a adivinhar ou repetir toques.',
        'Se a ação chegar à confirmação de compra, você pode parar ali. Uma captura ou relato da etapa anterior costuma bastar para explicar onde o botão deixou de responder.'
      ] },
      'home-screen-and-waiting': { title: 'Uma tela inicial lenta muda o começo', paragraphs: [
        'A experiência começa antes do primeiro tabuleiro. Uma tela inicial lenta prolonga a espera e pode tornar a abertura do jogo mais difícil, especialmente para quem depende dos anúncios do VoiceOver para perceber que a tela mudou.',
        'Uma tela inicial mais rápida fazia parte do trabalho planejado para a próxima atualização em 2 de outubro de 2026. Uma notificação de atualização, por si só, não confirma que esse problema específico foi corrigido: consulte as [notas de versão publicadas](/whats-new) e informe a versão ao relatar o que ainda acontece.',
        'Se a espera continuar, conte quanto tempo e em que momento a tela parece parar, se souber. Não é necessário medir com precisão; descrever se acontece sempre ou apenas às vezes já ajuda.'
      ] },
      'frozen-gates-and-progress': { title: 'Uma porta congelada tem um estado e uma consequência', paragraphs: [
        'Uma porta congelada precisa ser identificável e sua condição deve ficar clara. Se o jogo pede que o gelo derreta, o crédito da missão deve refletir essa ação. Um jogador relatou que a missão não contabilizava o progresso; a correção planejada pretende conectar a mudança no tabuleiro ao crédito exibido.',
        'Também estavam planejadas informações mais claras sobre portas congeladas. Nosso [artigo sobre o tabuleiro espacial](/blog/outbrick-voiceover-spatial-board) aborda o desafio relacionado de localizar portas e espaços vazios. Em 2 de outubro de 2026, as quatro correções mencionadas nos [relatos do AppleVis](https://www.applevis.com/comment/217461#comment-217461) ainda eram trabalho para a próxima atualização.',
        'Quando conferir uma missão, compare a contagem antes e depois da ação que derreteu o gelo. Se o progresso não mudar como esperado, anote a fase e a missão; não é preciso repetir várias vezes para provar o erro. As [notas de versão](/whats-new) são a referência para confirmar quando alguma correção for publicada.',
        'A confirmação da comunidade também mencionou uma atualização que seria lançada naquele dia, sem dizer que os erros anteriores tinham sido resolvidos. Uma notificação de atualização não informa qual problema específico mudou; consulte as notas da versão ao verificar uma melhoria.'
      ] },
      'italian-app-and-website': { title: 'Italiano no app e no site são questões diferentes', paragraphs: [
        'A disponibilidade do idioma italiano no app não determina automaticamente o idioma do site, nem o contrário. São superfícies diferentes, com conteúdo e processos de localização próprios. A pergunta da comunidade sobre italiano nos ajuda a entender onde as pessoas precisam de suporte, mas não representa um anúncio de idioma novo.',
        'Se o idioma que você procura não estiver disponível, diga se precisa dele no app, no site ou em ambos. Assim conseguimos entender melhor o pedido sem confundir uma interface traduzida com a tradução de todos os artigos e páginas.',
        'A pergunta recebida no AppleVis foi sobre a experiência em italiano. A resposta depende do produto e da superfície: idioma dos controles do app, páginas do site, artigos e suporte não são necessariamente lançados no mesmo momento.',
        'Por isso, ao pedir uma tradução, especifique a tela ou o conteúdo que pretende usar. Isso nos ajuda a entender se a necessidade é navegar no app, ler o site ou receber suporte.'
      ] },
      'feedback-without-extra-burden': { title: 'Seja específico sem transformar a opinião em trabalho', paragraphs: [
        'Para nos ajudar, descreva o objetivo, os passos que realizou, o resultado esperado e o que aconteceu. Se estiver à mão, inclua a versão do app e o modelo do aparelho. Uma gravação, detalhes de conta, comprovante de compra ou prova não são necessários. O [formulário de contato](/contact) é um caminho direto; as [informações de acessibilidade](/accessibility) apresentam o suporte publicado atualmente.',
        'Você pode relatar um problema mesmo sem saber sua causa técnica e sem concluir uma compra ou fase. Queremos entender a tarefa que você tentou realizar e o que impediu o progresso. Nosso [compromisso com a acessibilidade](/blog/outbrick-accessibility-commitment) explica como esses relatos orientam o trabalho. Essas informações nos ajudam a melhorar toda a sessão.'
      ], bullets: [
        'Diga qual tarefa queria realizar: abrir a tela inicial, ativar um pacote da loja, encontrar uma porta congelada ou conferir uma missão.',
        'Descreva a sequência mais curta de que se lembra, o resultado esperado e o que aconteceu, incluindo palavras anunciadas que ajudem.',
        'Se estiver disponível, informe a versão instalada do app e se o problema se repete. Não adivinhe a causa nem gaste dinheiro para investigar.',
        'Para crédito de missão, informe a missão e fase, se souber, e a contagem antes e depois. Oculte nomes, recibos e notificações sem relação em capturas opcionais.'
      ] }
    },
    pullQuote: 'A acessibilidade precisa acompanhar toda a sessão.',
    faqs: [
      { question: 'Quais problemas de acessibilidade estão sendo corrigidos?', answer: 'Os relatos incluíram botões da loja, lentidão na tela inicial, informação sobre portas congeladas e crédito de missões quando o gelo derrete. Em 2 de outubro de 2026, as correções estavam em andamento para a próxima atualização.' },
      { question: 'As correções já foram lançadas?', answer: 'A atualização mencionada pela comunidade não confirmou que esses erros específicos tinham sido resolvidos. Consulte as [notas de versão](/whats-new) para identificar mudanças publicadas.' },
      { question: 'Como posso relatar um problema sem enviar dados privados?', answer: 'Use o [formulário de contato](/contact) e descreva a tarefa, os passos, o resultado esperado e o que aconteceu. Gravação, dados de conta ou comprovante de compra não são necessários.' },
      { question: 'O OutBrick e o site têm as mesmas opções de idioma?', answer: 'Não necessariamente. O app e o site são superfícies separadas e a disponibilidade de idiomas pode diferir. Ao sugerir italiano ou outro idioma, diga onde você precisa dele.' }
    ]
  }
};
