import type { HelpArticle } from '../../model.ts';

/** A seção de acessibilidade, em português do Brasil. Conferido com a 5.1.1 (68). */
export const accessibilityArticles: HelpArticle[] = [
  {
    slug: 'accessibility',
    category: 'accessibility',
    cover: 'settings-a11y',
    title: 'Acessibilidade no OutBrick: comece aqui',
    summary:
      'Todas as formas como o OutBrick se adapta a você, do VoiceOver e do Controle Assistivo aos símbolos para daltonismo, ao tabuleiro de alto contraste, às animações mais lentas e à ausência de cronômetro, com um ponto de partida para as suas necessidades.',
    keywords: 'a11y inclusão deficiência cego cegueira baixa visão surdo motor daltônico daltonismo dislexia leitor de tela',
    sections: [
      {
        id: 'overview',
        title: 'Feito para você jogar do seu jeito',
        blocks: [
          {
            t: 'p',
            text: 'O OutBrick é um jogo de quebra-cabeça tranquilo **sem relógio em lugar nenhum**: você pode levar o tempo que quiser em cada jogada. Cada tabuleiro pode ser lido e jogado com o [VoiceOver](help:voiceover), com o [Controle por Voz, o Controle Assistivo ou um teclado](help:voice-control-switch-control-keyboard), e o jogo tem os próprios [ajustes de Acessibilidade](#where) para visão, movimento e alcance das mãos. Ele também segue os ajustes de acessibilidade que você já escolheu no seu iPhone ou iPad.',
          },
          {
            t: 'list',
            items: [
              '**A cor nunca é a única pista.** Os símbolos para daltonismo vêm ativados desde o início, e cada tijolo, portão e objetivo pode levar uma forma. Veja [Visão, audição e movimento](help:vision-hearing-and-motion).',
              '**Cada peça tem nome.** O VoiceOver lê o tipo, a cor e o estado de uma peça, por exemplo “Raio de linha, azul, horizontal, limpa a linha”, e um tijolo virado nunca revela a cor.',
              '**Jogue do seu jeito.** Deslize ou troque com um toque, com as ações do VoiceOver, dizendo “Deslizar Vermelho 14 para a esquerda”, com botões assistivos ou com as teclas de seta.',
              '**Tempo para pensar.** Sem cronômetro, uma Velocidade da animação de 50% a 200% e a opção **Confirmar trocas**, para que nada seja jogado sem querer.',
              '**Nada que se ouve sem que também se veja.** Os amigos falam em balões de texto, não com voz, e todo som tem algo na tela que corresponde a ele.',
            ],
          },
        ],
      },
      {
        id: 'where',
        title: 'Onde ficam os ajustes',
        blocks: [
          {
            t: 'steps',
            items: [
              'No **Início** ou na **Jornada**, toque na engrenagem no canto superior direito. Com o VoiceOver, é o botão **Ajustes**.',
              'No alto dos Ajustes, escolha a aba **Acessibilidade**. (A aba **Jogo** tem som, música, vibração e notificações; veja [Todos os ajustes explicados](help:settings).)',
              'Mude uma coisa de cada vez e depois jogue um tabuleiro que você conhece para sentir a diferença.',
            ],
          },
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'A tela de Ajustes na aba Acessibilidade. A Velocidade da animação está em 100%, com opções de 50% a 200%. O Detalhe dos avisos está em Padrão, com Breve e Completo de cada lado. Abaixo, chaves de ativar e desativar para Daltonismo (ativado), Tabuleiro de alto contraste, Barra para canhotos, Confirmar trocas e Som da linha (todos desativados).',
            caption: 'Ajustes › Acessibilidade. A linha embaixo de cada controle é também o que o VoiceOver diz como dica.',
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Você pode abrir esta aba diretamente: procure “Ajustes de acessibilidade” no Spotlight e escolha o resultado do OutBrick.',
          },
          {
            t: 'table',
            caption: 'A aba Acessibilidade, de cima para baixo',
            head: ['Ajuste', 'O que faz', 'Vem como'],
            rows: [
              ['Velocidade da animação', 'A rapidez com que as peças trocam, caem e somem: 50%, 75%, 100%, 150% ou 200%. Mais devagar é mais fácil de acompanhar.', '100%'],
              ['Detalhe dos avisos', 'Quanto o VoiceOver fala depois de cada jogada: Breve, Padrão ou Completo.', 'Padrão'],
              ['Daltonismo', 'Coloca uma forma em cada tijolo, para que a cor nunca seja a única diferença.', 'Ativado'],
              ['Tabuleiro de alto contraste', 'Piso escuro liso, contornos brancos, símbolos de cor grandes e contornos de portão grossos.', 'Desativado'],
              ['Barra para canhotos', 'Coloca os reforços sob o polegar esquerdo e a Pausa à direita.', 'Desativado'],
              ['Confirmar trocas', 'Com Controle Assistivo, VoiceOver, Controle por Voz ou teclado, você escolhe uma jogada duas vezes antes de ela acontecer.', 'Desativado'],
              ['Som da linha', 'Adiciona a ação **Ouvir a linha** ao tabuleiro: um som curto e baixo para cada peça, uma nota para cada símbolo de cor.', 'Desativado'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'O Daltonismo é salvo no iCloud e acompanha você nos seus outros aparelhos. Os outros ajustes do tabuleiro ficam no aparelho em que você os escolheu, porque o que combina com um iPad pode não combinar com um iPhone.',
          },
        ],
      },
      {
        id: 'starting-points',
        title: 'Um ponto de partida para as suas necessidades',
        blocks: [
          { t: 'p', text: 'Cada pessoa é diferente, então trate isto como sugestões para experimentar, não como regras.' },
          {
            t: 'table',
            head: ['Se você…', 'Experimente primeiro'],
            rows: [
              ['é cego ou usa o VoiceOver', 'Leia [Como jogar com o VoiceOver](help:voiceover). Deixe o **Detalhe dos avisos** em Padrão para começar e experimente o **Som da linha** para percorrer uma linha de ouvido.'],
              ['tem baixa visão', 'Ative o **Tabuleiro de alto contraste**, aumente o **Texto Maior** nos Ajustes do iPhone e toque e mantenha pressionado o cabeçalho do tabuleiro ou a barra para ampliá-los.'],
              ['enxerga as cores de outro jeito', 'Deixe o **Daltonismo** ativado: cada cor tem a sua forma. O alto contraste deixa essas formas maiores.'],
              ['é sensível a movimento ou a luzes piscando', 'Ative **Reduzir Movimento** e **Atenuar Luzes Intermitentes** nos Ajustes do iPhone e coloque a **Velocidade da animação** em 75% ou 50%.'],
              ['joga com uma mão ou tem alcance limitado', 'Experimente a **Barra para canhotos** se você segura o celular com a mão esquerda, e **Confirmar trocas** se um escorregão do dedo puder fazer uma jogada.'],
              ['usa botões assistivos, a voz ou um teclado', 'Leia [Controle por Voz, Controle Assistivo e teclados](help:voice-control-switch-control-keyboard).'],
              ['é surdo ou tem perda auditiva', 'Nada no OutBrick depende de som. Os amigos falam em balões de texto, e a Vibração deixa você sentir as jogadas.'],
              ['gosta de ter tempo para pensar', 'Não existe cronômetro em lugar nenhum. Diminua a **Velocidade da animação** e use dicas quando quiser.'],
            ],
          },
        ],
      },
      {
        id: 'system',
        title: 'Ajustes do iPhone e do iPad que o OutBrick segue',
        blocks: [
          { t: 'p', text: 'Eles ficam no app **Ajustes** do iPhone ou iPad, em **Acessibilidade**, e o OutBrick reage a eles sozinho.' },
          {
            t: 'defs',
            items: [
              { term: 'VoiceOver', text: 'Todo tabuleiro, menu e cartão tem rótulos. Veja [Como jogar com o VoiceOver](help:voiceover).' },
              { term: 'Texto Maior', text: 'O texto cresce até o maior tamanho de acessibilidade, e os layouts se empilham para que nada seja cortado. O cabeçalho do tabuleiro e a barra são compatíveis com o Visualizador de Conteúdo Grande: toque e mantenha pressionado para ver um rótulo ampliado.' },
              { term: 'Texto em Negrito', text: 'As telas são redesenhadas em negrito assim que você o ativa.' },
              { term: 'Aumentar Contraste e Reduzir Transparência', text: 'Controles com efeito de vidro, como as chaves de ativar e desativar, ficam sólidos e com bordas mais fortes.' },
              { term: 'Reduzir Movimento', text: 'O movimento parado do tabuleiro para, os brilhos ficam fixos, as dicas cintilam em vez de se mexer e os bichinhos ficam em casa.' },
              { term: 'Atenuar Luzes Intermitentes', text: 'Os clarões de tela cheia caem para um terço da intensidade e nunca ficam mais próximos do que cerca de um terço de segundo.' },
              { term: 'Diferenciar Sem Cor', text: 'Ativa os símbolos para daltonismo, mesmo que você os tenha desativado no jogo.' },
              { term: 'Inversão Inteligente', text: 'Os amigos, as bandeiras e as ilustrações mantêm as cores verdadeiras.' },
              { term: 'Controle por Voz e Controle Assistivo', text: 'Os dois conseguem jogar todos os tabuleiros. Veja [Controle por Voz, Controle Assistivo e teclados](help:voice-control-switch-control-keyboard).' },
            ],
          },
        ],
      },
      {
        id: 'no-timers',
        title: 'Sem relógio, sem pressa',
        blocks: [
          {
            t: 'p',
            text: 'Não há cronômetro em nenhum tabuleiro, menu ou evento do OutBrick. Cada tabuleiro dá um número de **jogadas**, e esse é o único limite. Uma jogada só conta quando realmente faz algo: uma troca que não combina nada volta ao lugar e não gasta jogada.',
          },
          {
            t: 'p',
            text: 'Se empacar, peça uma dica. Com o VoiceOver, o toque duplo com dois dedos em um tabuleiro dá uma dica grátis, sem gastar um reforço Dica. Veja [Reforços, dicas e Pausa](help:boosters-and-pause).',
          },
        ],
      },
      {
        id: 'testing',
        title: 'O que ainda estamos testando',
        blocks: [
          {
            t: 'p',
            text: 'Preferimos contar com clareza a deixar você descobrir do jeito difícil. O VoiceOver e o Controle por Voz foram jogados pela equipe em um iPhone de verdade. Estes itens foram criados e conferidos no código, mas ainda não foram jogados à mão, do começo ao fim, em um aparelho:',
          },
          {
            t: 'list',
            items: [
              'O Controle Assistivo nos tabuleiros Slide & Match.',
              'O Acesso Total ao Teclado no iPad e no Mac.',
              'O Visualizador de Conteúdo Grande no cabeçalho do tabuleiro e na barra, no maior tamanho de texto.',
              'Apple TV e Apple Watch, que ainda não têm o trabalho de acessibilidade do novo tabuleiro.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            title: 'Você pode ajudar',
            text: 'Se você joga com algum desses, conte o que funciona e o que não funciona na [categoria Acessibilidade](/community/c/accessibility). É a que a equipe acompanha mais de perto.',
          },
        ],
      },
      {
        id: 'report',
        title: 'Conte para nós quando algo atrapalhar',
        blocks: [
          {
            t: 'p',
            text: 'No jogo, **Ajustes › Relatar um bug** abre um relato no Safari com seu aparelho, a versão do iOS, a versão do jogo, o nível e a tecnologia assistiva ativada já preenchidos. Ele nunca envia seu nome nem sua conta. Acrescente as palavras exatas que o VoiceOver disse, ou o controle que não respondeu. Veja [Como relatar um bug do jeito certo](help:reporting-bugs).',
          },
        ],
      },
    ],
    related: ['voiceover', 'vision-hearing-and-motion', 'voice-control-switch-control-keyboard', 'settings'],
  },

  {
    slug: 'voiceover',
    category: 'accessibility',
    cover: 'board-slide',
    title: 'Como jogar com o VoiceOver',
    summary:
      'Como o tabuleiro é lido, como deslizar e trocar com ações, os rotores, cada gesto, o que você ouve depois de uma jogada e como ganhar uma dica grátis.',
    keywords: 'leitor de tela cego rotor toque mágico ações passar o dedo toque duplo esfregar dois dedos',
    sections: [
      {
        id: 'start',
        title: 'Antes de começar',
        blocks: [
          {
            t: 'steps',
            items: [
              'Ative o VoiceOver em **Ajustes › Acessibilidade › VoiceOver** no iPhone, ou peça à Siri: “Ativar o VoiceOver”. Configurar o **Atalho de Acessibilidade** permite clicar três vezes no botão lateral para ativá-lo e desativá-lo.',
              'Abra o OutBrick. O Início é lido primeiro; o botão **Jogar nível** começa seu tabuleiro atual, e um toque duplo com dois dedos no Início faz o mesmo.',
              'Na primeira vez que você encontra uma ideia nova, um cartão de ensino curto a explica. Enquanto ele aparece, é a única coisa na tela: toque duas vezes para começar a jogar.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Em **Ajustes › Acessibilidade** do jogo, o **Detalhe dos avisos** define quanto você ouve depois de cada jogada. Padrão é um bom começo; você pode mudar quando quiser.',
          },
        ],
      },
      {
        id: 'layout',
        title: 'Como o tabuleiro é lido',
        blocks: [
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'Um tabuleiro de Slide & Match na praia, fase 25. O topo mostra 5 vidas, 15 jogadas restantes, a trilha de estrelas com uma acesa, objetivos de 1 tijolo amarelo e 3 azuis, e o amigo anfitrião de quepe de marinheiro. O tabuleiro tem tijolos rosa, amarelos, laranja e azuis, cada um com o símbolo da sua cor, portões amarelos, laranja e azuis nas bordas e uma tampa dourada com fechadura sobre uma fileira de tijolos. Embaixo, a barra: Pausa, depois Dica, Foguete e OVNI marcados como grátis, e Desfazer com 6.',
            caption: 'Um tabuleiro, de cima para baixo: o cabeçalho, a grade e a barra. O VoiceOver lê primeiro o resumo do cabeçalho e depois a grade, linha por linha.',
          },
          {
            t: 'list',
            items: [
              '**O resumo Tabuleiro vem primeiro.** Ele lê o nível, o nome, a etapa, os objetivos e as jogadas restantes. Toque duas vezes nele para ouvir o tabuleiro inteiro lido em voz alta, com uma dica.',
              '**Depois cada casa, linha por linha,** a partir do canto superior esquerdo. Os vãos no formato do tabuleiro são pulados. O valor de cada casa é o lugar dela, por exemplo “Linha 3, coluna 2”.',
              '**As peças são nomeadas por tipo, cor e estado,** nunca só pela cor: “Bomba, vermelho”, “Caixa, 2 camadas”, “Tijolo amarelo, travado, uma linha que passe por ele o solta”, “Tijolo longo, vermelho, 2 de altura”.',
              '**Os extras vêm depois da peça:** “em frente ao portão: vermelho”, “portão: vermelho, à esquerda”, “entrada de portal embaixo”, “conta para narcisos, amarelo” quando um objetivo precisa dela. Uma casa vazia diz “Vazio”.',
              '**Os portões são elementos próprios,** por exemplo “Portão: vermelho, 2 casas de largura, lado esquerdo, linhas 3 a 4”, e o valor deles diz se estão abertos, congelados, precisando de mais tijolos ou fechados de vez.',
              '**Os tijolos virados nunca dizem a cor:** “Tijolo virado, desvira quando um tijolo ao lado sai do tabuleiro”. Isso é jogo limpo, não um rótulo faltando.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'As peças que você pode mover são botões. Bloqueios e elementos fixos, como pedra ou caixotes, são lidos como texto, para você saber na hora o que pode se mexer.',
          },
        ],
      },
      {
        id: 'moving',
        title: 'Como fazer uma jogada',
        blocks: [
          { t: 'p', text: 'Há duas formas de mover, e você pode misturá-las.' },
          { t: 'h3', text: 'Com ações (o jeito mais rápido)' },
          {
            t: 'steps',
            items: [
              'Coloque o VoiceOver sobre uma peça.',
              'Passe o dedo para cima ou para baixo para ouvir as ações dela, como “Deslizar para a esquerda, sai pelo portão vermelho”, “Deslizar para cima até o fim, 3 casas” ou “Trocar para cima com tijolo azul”. As trocas que funcionam vêm primeiro; uma troca que não formaria nada diz “sem combinação”.',
              'Toque duas vezes para fazer a ação que você ouviu.',
            ],
          },
          { t: 'h3', text: 'Escolhendo uma peça e depois uma direção' },
          {
            t: 'steps',
            items: [
              'Toque duas vezes em uma peça. O VoiceOver diz “Escolhido. Escolha uma direção para deslizar ou um vizinho para trocar”.',
              'Controles de direção aparecem sobre os vizinhos dela. Vá até um e toque duas vezes nele.',
              'Mudou de ideia? Toque duas vezes na mesma peça de novo (“Solto”), ou use o gesto de esfregar com dois dedos.',
            ],
          },
          {
            t: 'table',
            caption: 'As ações de uma peça, na ordem em que você as ouve',
            head: ['Ação', 'Quando aparece'],
            rows: [
              ['Ativar especial', 'Em um tijolo especial que pode ser disparado onde está.'],
              ['Deslizar…', 'Até três por direção, para cima, para baixo, para a esquerda e para a direita: até onde ele vai e se sai por um portão ou um portal.'],
              ['Trocar…', 'Com cada vizinho. As trocas que combinam vêm primeiro; “sem combinação” marca as outras.'],
              ['Ler o tabuleiro', 'Nível, etapa, objetivos, jogadas restantes e uma dica.'],
              ['Dica', 'Mostra e fala a melhor jogada.'],
              ['Ouvir a linha', 'Só quando o **Som da linha** está ativado: um som baixo para cada peça ao longo da linha.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Tem medo de fazer uma jogada sem querer? Ative **Confirmar trocas**. A primeira escolha pergunta “…? Escolha de novo para confirmar”, e a jogada só acontece se você escolhê-la de novo em até cinco segundos.',
          },
        ],
      },
      {
        id: 'rotors',
        title: 'Rotores: vá direto ao que importa',
        blocks: [
          {
            t: 'p',
            text: 'Gire dois dedos na tela para escolher um rotor e depois passe o dedo para cima ou para baixo para pular entre as peças correspondentes.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Peças que combinam', text: 'Peças com uma jogada que forma uma combinação agora mesmo.' },
              { term: 'Especiais', text: 'Bombas, raios de linha e os outros tijolos especiais.' },
              { term: 'Objetivos', text: 'Peças que seus objetivos estão pedindo.' },
              { term: 'Bloqueios', text: 'Caixotes, pedra, gelo, cadeados, musgo e tudo o mais que estiver no caminho.' },
              { term: 'Portões', text: 'Todos os portões do tabuleiro, quando ele tem portões. O primeiro tabuleiro com portões que você jogar avisa sobre este rotor uma vez.' },
            ],
          },
          {
            t: 'p',
            text: 'Cada elemento também tem **Mais Conteúdo** (no rotor, escolha Mais Conteúdo e passe o dedo para cima ou para baixo): o especial, o portão, o bloqueio, as camadas de geleia por baixo e se um objetivo precisa desta peça.',
          },
        ],
      },
      {
        id: 'gestures',
        title: 'Gestos, tela por tela',
        blocks: [
          {
            t: 'table',
            head: ['Gesto', 'Em um tabuleiro', 'No mapa da Jornada', 'Em outros lugares'],
            rows: [
              ['{{Toque duplo com dois dedos}} (Toque Mágico)', 'Uma dica grátis. A melhor jogada cintila e é falada; seu reforço Dica não é gasto.', 'Fala o guia: sua vila, os níveis concluídos, seu próximo nível e as estrelas que faltam para a próxima recompensa.', 'Início: joga seu próximo nível. Loja, Ranking e Passe: liga ou desliga a música.'],
              ['{{Esfregar com dois dedos}} (Escape)', 'Nunca sai do tabuleiro, então nunca pode custar uma vida. Fecha um cartão, solta uma peça escolhida, guarda um cartão de ensino ou abre a Pausa, nessa ordem.', 'Fecha um cartão aberto.', 'Aciona o botão de fechar da tela ou volta.'],
              ['{{Passar três dedos}}', '—', 'Avança uma vila de cada vez e diz o nome dela.', 'Rola a tela.'],
              ['{{Passar o dedo para cima ou para baixo}}', 'Percorre as ações de uma peça.', 'Percorre **Onde estou** e **Ir para meu próximo nível**.', 'Ajusta um controle.'],
            ],
          },
        ],
      },
      {
        id: 'announcements',
        title: 'O que você ouve depois de uma jogada',
        blocks: [
          {
            t: 'p',
            text: 'Assim que uma jogada é decidida, o VoiceOver diz uma frase sobre ela, antes de a animação terminar. O que for urgente vem primeiro.',
          },
          {
            t: 'list',
            items: [
              'Para onde um tijolo foi: “Deslizou 3 casas, até linha 2, coluna 4”, “Pelo portal, saiu em…”, “Saiu pelo portão: 1 (vermelho)”.',
              'O que mudou: “Desvirou: vermelho e azul”, “A tampa com contador abriu. Os tijolos dela já se movem”, “Novos portões se abrem”.',
              'O que sumiu: peças, cascatas, combos e os especiais criados, e quais objetivos avançaram.',
              'As jogadas restantes, com um aviso em cinco, três e uma: “Só restam 5 jogadas”.',
              'O fim: “Todos os objetivos cumpridos. Nível concluído” ou “Sem jogadas”.',
              'Se nenhuma jogada for possível, o tabuleiro é embaralhado e diz “O tabuleiro foi embaralhado. Sua vez.”',
            ],
          },
          {
            t: 'table',
            caption: 'Ajustes › Acessibilidade › Detalhe dos avisos',
            head: ['Opção', 'O que você ouve'],
            rows: [
              ['Breve', 'O que sumiu, os objetivos que foram concluídos e as jogadas restantes.'],
              ['Padrão', 'E também os especiais criados e os objetivos que avançaram.'],
              ['Completo', 'E também a contagem de cada objetivo após cada jogada.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Uma troca que não forma nada volta ao lugar e diz “Sem combinação, voltou. Nenhuma jogada gasta”. Você não perdeu nada.',
          },
        ],
      },
      {
        id: 'hints',
        title: 'Dicas',
        blocks: [
          {
            t: 'list',
            items: [
              '**Como pedir:** o toque duplo com dois dedos, a ação **Dica** ou {{H}} em um teclado. A dica é falada, por exemplo “Dica: deslize tijolo vermelho, linha 1, coluna 3, para a esquerda, e saia pelo portão dele”, e o VoiceOver vai até essa peça.',
              '**Grátis:** uma dica pedida com o toque duplo com dois dedos ou pela ação nunca gasta um reforço Dica da barra.',
              '**Dicas de espera:** se você parar por um tempo, uma dica discreta pode ser falada sem tirar o seu foco do lugar.',
            ],
          },
        ],
      },
      {
        id: 'journey',
        title: 'Como se orientar na Jornada',
        blocks: [
          {
            t: 'list',
            items: [
              'Todo elemento do mapa tem duas ações: **Onde estou** e **Ir para meu próximo nível**, que rola o mapa e coloca o VoiceOver no seu próximo nível.',
              'O toque duplo com dois dedos fala o guia, por exemplo “Cidade Jardim, 7 de 12 níveis concluídos. Próximo: nível 8. 3 estrelas para a recompensa da vila.”',
              'Um nível bloqueado diz quanto falta: “Faltam 4 para desbloquear”.',
              'Passe três dedos para avançar uma vila de cada vez.',
            ],
          },
          { t: 'p', text: 'Mais sobre o mapa em [A Jornada e suas vilas](help:journey-and-villages).' },
        ],
      },
      {
        id: 'tips',
        title: 'Dicas da equipe',
        blocks: [
          {
            t: 'list',
            items: [
              'Com o VoiceOver ativado e a **Velocidade da animação** em 100%, as jogadas acontecem uma vez e meia mais rápido, para você não ficar esperando. Escolha qualquer outra velocidade e o jogo usa exatamente a sua.',
              'Ative o **Som da linha** para ouvir uma linha inteira como sons: cada símbolo de cor tem a sua nota, os bloqueios fazem uma batida grave e as casas vazias ficam em silêncio. É preciso que os efeitos sonoros estejam ativados e que a chave Toque/Silencioso esteja em toque.',
              'Perdeu-se? Toque duas vezes no resumo **Tabuleiro** no alto, ou use **Ler o tabuleiro**.',
              'Menus: cada botão lê as palavras impressas nele, e os cartões prendem o VoiceOver dentro deles até você fechá-los, então você nunca fica atrás de um cartão.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            title: 'Algo não foi lido direito?',
            text: 'Conte o nível, a peça e as palavras exatas que o VoiceOver disse na [categoria Acessibilidade](/community/c/accessibility), ou use **Ajustes › Relatar um bug** no jogo.',
          },
        ],
      },
    ],
    related: ['accessibility', 'voice-control-switch-control-keyboard', 'playing-a-board', 'reporting-bugs'],
  },

  {
    slug: 'voice-control-switch-control-keyboard',
    category: 'accessibility',
    cover: 'board-shapes',
    title: 'Controle por Voz, Controle Assistivo e teclados',
    summary:
      'Jogue todos os tabuleiros com a voz, com um ou mais botões assistivos ou com as teclas de seta, e use Confirmar trocas e a Barra para canhotos para jogar com conforto.',
    keywords: 'comandos de voz controle assistivo botões acesso total ao teclado teclas de seta motor destreza uma mão switch',
    sections: [
      {
        id: 'voice-control',
        title: 'Controle por Voz',
        blocks: [
          {
            t: 'p',
            text: 'Ative o Controle por Voz em **Ajustes › Acessibilidade › Controle por Voz** no iPhone. Cada peça do tabuleiro atende por três nomes, em que o número é o lugar dela, contando linha por linha a partir do canto superior esquerdo:',
          },
          {
            t: 'list',
            items: [
              'a cor e o número: “Tocar em **Vermelho 14**”',
              '“Tocar em **Peça 14**”',
              'o nome completo e o número.',
            ],
          },
          {
            t: 'steps',
            items: [
              'Diga “Tocar em Vermelho 14” para escolher a peça.',
              'Diga a direção: “Tocar em **Deslizar para a esquerda**”, ou só “Tocar em **Esquerda**”. Numa troca, você pode dizer “Tocar em **Trocar para cima**” ou “Tocar em **Para cima**”.',
              'Diga “Mostrar números” a qualquer momento para ver um número em tudo o que pode ser tocado.',
            ],
          },
          {
            t: 'list',
            items: [
              'Os tijolos virados atendem por “Virado 14”, para que a cor continue escondida.',
              'Os botões dos menus atendem primeiro às palavras impressas neles.',
              'As opções de Velocidade da animação atendem tanto pela porcentagem quanto pela palavra: “Metade da velocidade”, “Mais devagar”, “Velocidade normal”, “Mais rápido”, “Velocidade dupla”.',
            ],
          },
        ],
      },
      {
        id: 'switch-control',
        title: 'Controle Assistivo',
        blocks: [
          {
            t: 'steps',
            items: [
              'Percorra até uma peça e selecione-a para escolhê-la.',
              'Percorra até um vizinho ou até um dos controles de direção que aparecem, e selecione-o para deslizar ou trocar.',
              'Selecione a peça escolhida de novo para soltá-la.',
            ],
          },
          {
            t: 'p',
            text: 'No tabuleiro, o Controle Assistivo é tratado como o VoiceOver: cada peça é um elemento próprio, em ordem de leitura, e aparecem os mesmos controles de direção. Ative **Confirmar trocas** se você percorre rápido.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'O Controle Assistivo nos tabuleiros Slide & Match foi criado e conferido no código, mas a equipe ainda não o jogou do começo ao fim em um aparelho. Se você joga com botões assistivos, adoraríamos saber como foi na [categoria Acessibilidade](/community/c/accessibility).',
          },
        ],
      },
      {
        id: 'keyboard',
        title: 'Teclados no iPad e no Mac',
        blocks: [
          { t: 'p', text: 'Com um teclado físico, o tabuleiro tem as próprias teclas. Mantenha {{⌘}} pressionada no iPad para ver a lista.' },
          {
            t: 'table',
            head: ['Tecla', 'O que faz'],
            rows: [
              ['{{←}} {{→}} {{↑}} {{↓}}', 'Move um cursor branco pelo tabuleiro, pulando os vãos. Com uma peça escolhida, desliza ou troca a peça nessa direção.'],
              ['{{Espaço}} ou {{Return}}', 'Escolhe a peça sob o cursor, ou a solta.'],
              ['{{H}}', 'Mostra e fala uma dica.'],
              ['{{Esc}}', 'Solta a peça escolhida. Fora do tabuleiro, fecha os Ajustes e os cartões.'],
            ],
          },
          {
            t: 'p',
            text: 'Nos menus, os botões do próprio jogo recebem o foco do teclado, e {{Return}} ou {{Espaço}} os aciona. O Acesso Total ao Teclado passa de um para outro com {{Tab}}.',
          },
        ],
      },
      {
        id: 'hold-to-confirm',
        title: 'Confirmar trocas',
        blocks: [
          {
            t: 'p',
            text: 'Em **Ajustes › Acessibilidade**, **Confirmar trocas** pede que você escolha cada jogada duas vezes. Na primeira, você ouve (ou vê) a jogada com “Escolha de novo para confirmar”; escolha a mesma jogada de novo em até cinco segundos e ela acontece. Qualquer outra coisa a cancela. Vale para VoiceOver, Controle por Voz, Controle Assistivo e teclado.',
          },
        ],
      },
      {
        id: 'left-handed',
        title: 'Barra para canhotos',
        blocks: [
          {
            t: 'p',
            text: 'A barra no pé do tabuleiro tem a Pausa à esquerda e os reforços e o Desfazer à direita. A **Barra para canhotos** espelha essa disposição, para que os reforços fiquem sob o seu polegar esquerdo e a Pausa vá para a direita.',
          },
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'Um tabuleiro de Slide & Match na praia, fase 25. O topo mostra 5 vidas, 15 jogadas restantes, a trilha de estrelas com uma acesa, objetivos de 1 tijolo amarelo e 3 azuis, e o amigo anfitrião de quepe de marinheiro. O tabuleiro tem tijolos rosa, amarelos, laranja e azuis, cada um com o símbolo da sua cor, portões amarelos, laranja e azuis nas bordas e uma tampa dourada com fechadura sobre uma fileira de tijolos. Embaixo, a barra: Pausa, depois Dica, Foguete e OVNI marcados como grátis, e Desfazer com 6.',
            caption: 'A barra para destros (o padrão). A Barra para canhotos a espelha.',
          },
        ],
      },
    ],
    related: ['voiceover', 'accessibility', 'playing-a-board', 'settings'],
  },

  {
    slug: 'vision-hearing-and-motion',
    category: 'accessibility',
    cover: 'board-contrast',
    title: 'Visão, audição e movimento',
    summary:
      'Os símbolos para daltonismo e o que cada forma significa, o tabuleiro de alto contraste, o texto maior, Reduzir Movimento, as luzes intermitentes, o som, a vibração e o Som da linha.',
    keywords: 'daltonismo daltônico deuteranopia protanopia tritanopia símbolos formas contraste texto grande zoom enjoo de movimento vestibular epilepsia fotossensível luzes piscando surdo audição',
    sections: [
      {
        id: 'colour-blind',
        title: 'Símbolos para daltonismo',
        blocks: [
          {
            t: 'p',
            text: 'O **Daltonismo** vem ativado desde o primeiro tabuleiro. Cada tijolo traz uma forma estampada para a cor dele, os especiais coloridos usam um pequeno selo com a forma, e os objetivos no cabeçalho levam a mesma forma, para você combinar tijolos e objetivos sem precisar distinguir as cores.',
          },
          {
            t: 'table',
            caption: 'Cada cor tem a sua forma',
            head: ['Cor', 'Forma'],
            rows: [
              ['Vermelho', 'Círculo'],
              ['Laranja', 'Triângulo'],
              ['Amarelo', 'Quadrado'],
              ['Verde', 'Losango'],
              ['Azul', 'Sinal de mais'],
              ['Roxo', 'Estrela'],
              ['Rosa', 'Barra'],
              ['Turquesa', 'Hexágono'],
            ],
          },
          {
            t: 'list',
            items: [
              'Ative ou desative em **Ajustes › Acessibilidade › Daltonismo**, no menu **Pausa** durante um tabuleiro, ou na **Central de Controle**, se você adicionar o controle do OutBrick.',
              'Os símbolos também se ativam sempre que **Diferenciar Sem Cor** do iPhone ou o **Tabuleiro de alto contraste** do jogo estiverem ativados.',
              'Sua escolha é salva no iCloud, então ela acompanha você nos seus outros aparelhos.',
            ],
          },
          {
            t: 'shots',
            items: [
              {
                id: 'board-slide',
                alt: 'Um tabuleiro de Slide & Match na praia, fase 25. O topo mostra 5 vidas, 15 jogadas restantes, a trilha de estrelas com uma acesa, objetivos de 1 tijolo amarelo e 3 azuis, e o amigo anfitrião de quepe de marinheiro. O tabuleiro tem tijolos rosa, amarelos, laranja e azuis, cada um com o símbolo da sua cor, portões amarelos, laranja e azuis nas bordas e uma tampa dourada com fechadura sobre uma fileira de tijolos. Embaixo, a barra: Pausa, depois Dica, Foguete e OVNI marcados como grátis, e Desfazer com 6.',
                caption: 'Daltonismo ativado: cada cor tem uma forma.',
              },
              {
                id: 'board-contrast',
                alt: 'O mesmo tipo de tabuleiro com o visual de alto contraste: um piso quase preto, contornos brancos em volta de cada tijolo e símbolos brancos grandes.',
                caption: 'Tabuleiro de alto contraste.',
              },
            ],
          },
        ],
      },
      {
        id: 'contrast',
        title: 'Tabuleiro de alto contraste',
        blocks: [
          {
            t: 'p',
            text: '**Ajustes › Acessibilidade › Tabuleiro de alto contraste** desenha o tabuleiro sobre um piso quase preto com uma grade suave, coloca um contorno branco em cada peça e um símbolo branco grande nos tijolos comuns, e dá a cada portão um contorno grosso. As cores dos portões são comparadas com o piso, e um portão cuja cor fique perto demais dele ganha um contorno em dois tons.',
          },
        ],
      },
      {
        id: 'text',
        title: 'Texto maior e ampliação',
        blocks: [
          {
            t: 'list',
            items: [
              '**Texto Maior:** em **Ajustes › Acessibilidade › Tela e Tamanho do Texto › Texto Maior** no iPhone. O texto principal pode crescer mais que o dobro do tamanho, os títulos quase o dobro, e os layouts se empilham para que nada seja cortado. As telas de vitória e de jogadas esgotadas crescem menos, para continuarem cabendo.',
              '**Visualizador de Conteúdo Grande:** nos maiores tamanhos, toque e mantenha pressionado um controle do cabeçalho do tabuleiro ou da barra para ver um rótulo ampliado, depois levante o dedo.',
              '**Texto em Negrito** e **Zoom** funcionam em todo o jogo.',
            ],
          },
        ],
      },
      {
        id: 'motion',
        title: 'Movimento, velocidade da animação e luzes intermitentes',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Velocidade da animação', text: 'Em **Ajustes › Acessibilidade**: 50%, 75%, 100%, 150% ou 200%. Em 50%, cada troca, queda e remoção leva o dobro do tempo, o que deixa as reações em cadeia mais fáceis de acompanhar.' },
              { term: 'Reduzir Movimento', text: 'Em **Ajustes › Acessibilidade › Movimento** no iPhone. O movimento parado no tabuleiro para, os brilhos ficam fixos, as dicas cintilam no lugar em vez de se mexer e as telas mudam com um esmaecimento em vez de deslizar.' },
              { term: 'Atenuar Luzes Intermitentes', text: 'Também em **Movimento**. Os clarões de tela cheia dos grandes combos caem para um terço da intensidade e nunca ficam mais próximos do que cerca de um terço de segundo; um pavio queima de forma constante em vez de piscar.' },
            ],
          },
        ],
      },
      {
        id: 'sound',
        title: 'Som, música, vibração e Som da linha',
        blocks: [
          {
            t: 'list',
            items: [
              '**Nada depende de ouvir.** Todo som do OutBrick tem algo na tela que corresponde a ele. Os amigos falam em balões de texto, não com voz, e os avisos do VoiceOver são falados pelo seu próprio VoiceOver.',
              '**Sons, Música e Vibração** têm cada um a sua chave em **Ajustes › Jogo**, e no menu Pausa durante um tabuleiro. A Vibração só aparece em aparelhos que podem vibrar.',
              'O **Som da linha** (Ajustes › Acessibilidade) adiciona a ação **Ouvir a linha** ao tabuleiro: uma nota curta e baixa para cada peça, da esquerda para a direita, uma altura para cada símbolo de cor, com um timbre diferente para formas redondas, pontudas e retas. Os bloqueios fazem uma batida grave e as casas vazias são uma pausa.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'O Som da linha precisa dos efeitos sonoros ativados e da chave Toque/Silencioso em toque. Se algum deles estiver desativado, a ação avisa.',
          },
        ],
      },
    ],
    related: ['accessibility', 'voiceover', 'settings', 'bricks-specials-and-blockers'],
  },
];
