import type { HelpArticle } from '../../model.ts';

/**
 * Famílias e jogo tranquilo, a economia sem complicação, os nove amigos e como recuperar o
 * progresso ou uma compra, em português do Brasil. Conferido com a 5.1.1 (68) e os guias ao lado.
 */
export const familyArticles: HelpArticle[] = [
  {
    slug: 'parents-guide',
    category: 'family',
    cover: 'settings-game',
    title: 'Um guia para pais e responsáveis',
    summary:
      'O que o OutBrick é e o que não é, os controles da Apple que deixam você no comando das compras, do tempo e das notificações, como funcionam os reembolsos, quais dados o jogo e este site guardam e uma lista de verificação para seguir.',
    keywords:
      'pais mãe pai responsável responsáveis família criança crianças filho filha filhos seguro segurança controle parental controles parentais tempo de uso pedir para comprar compartilhamento familiar compras dentro do app gastos gastar tempo ocioso limites de apps classificação etária 4+ anúncios propaganda estranhos chat bate-papo privacidade reembolso',
    host: 'peach',
    hostPose: 'think',
    sections: [
      {
        id: 'at-a-glance',
        title: 'O que é verdade sobre o OutBrick',
        blocks: [
          {
            t: 'p',
            text: 'O OutBrick é um quebra-cabeça tranquilo de deslizar e combinar, com classificação **4+** na App Store. Os jogadores levam tijolos de brinquedo até portões da cor deles, ou trocam vizinhos para formar linhas, e cada tabuleiro dá um número de jogadas para isso. Antes de mexer em qualquer ajuste, veja o que o jogo faz e o que não faz.',
          },
          {
            t: 'list',
            items: [
              '**Não há relógio em lugar nenhum.** Nenhum tabuleiro, menu ou evento tem tempo marcado. O número de jogadas é o único limite, então ninguém é apressado.',
              '**Sem chat, sem estranhos.** Não há chat, nem mensagens entre jogadores, nem nada escrito por outros jogadores dentro do jogo. Outros jogadores só conseguem ver um nome de jogador e um nível (mais sobre isso [abaixo](#other-players)).',
              '**Nenhum anúncio, a menos que a criança toque para assistir a um.** Não há banners nem anúncios entre tabuleiros. Um vídeo só passa quando o jogador aperta um botão para assistir em troca de uma recompensa, cada tipo tem um limite diário (39 no total), e um vídeo sempre pode ser recusado sem custo.',
              '**As vidas são gastas ao perder, não ao jogar.** Abrir um tabuleiro exige uma vida, mas não gasta nenhuma. Uma vida é gasta quando uma tentativa é perdida: ao desistir quando as jogadas acabam, ou ao reiniciar ou sair depois de fazer uma jogada, e o jogo avisa antes de isso acontecer. Vencer nunca custa uma vida, e as vidas voltam sozinhas, uma a cada 30 minutos.',
              '**Nenhuma conta para criar.** O progresso é salvo no aparelho e no iCloud da sua própria família. O OutBrick não tem análise de uso, e o desenvolvedor não recebe dados de jogo.',
              '**Nada é assinatura.** Toda compra é uma compra única feita pela Apple, nada se renova sozinho, e nada pago é oferecido em um tabuleiro antes do nível 6.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Gratuito, e continua assim',
            text: 'Todos os 2.000 níveis podem ser jogados sem pagar nem assistir a nada. As vidas se recarregam sozinhas, cada tentativa vem com uma Dica, um Foguete e um OVNI grátis, e o primeiro desfazer de cada tabuleiro é grátis. Veja [Como funcionam recompensas, vidas e anúncios](help:rewards-and-ads) para todos os números.',
          },
        ],
      },
      {
        id: 'purchases',
        title: 'Compras: Pedir para Comprar, restrições e reembolsos',
        blocks: [
          {
            t: 'p',
            text: 'Os itens pagos com dinheiro de verdade aparecem na **Loja** e em alguns cartões do jogo, sempre com o preço na sua moeda local e sempre pela própria janela de compra da Apple. Dois controles da Apple decidem se essa compra pode ser concluída.',
          },
          { t: 'h3', text: 'Pedir para Comprar (Compartilhamento Familiar)' },
          {
            t: 'p',
            text: 'Se a criança tem a própria Conta Apple no seu grupo de Compartilhamento Familiar, o Pedir para Comprar envia para você cada pedido de compra, inclusive as compras dentro de jogos, para aprovar ou recusar.',
          },
          {
            t: 'steps',
            items: [
              'No seu próprio iPhone, abra **Ajustes › Família**.',
              'Toque no nome da criança.',
              'Toque em **Pedir para Comprar** e ative.',
            ],
          },
          { t: 'h3', text: 'Desativar de vez as compras dentro do app' },
          {
            t: 'steps',
            items: [
              'No aparelho da criança, abra **Ajustes › Tempo de Uso**. (Para uma criança no Compartilhamento Familiar, você pode fazer isso pelo seu próprio iPhone: **Ajustes › Tempo de Uso** e depois o nome da criança.)',
              'Toque em **Restrições de Conteúdo e Privacidade** e ative.',
              'Toque em **Compras na iTunes e App Store**.',
              'Defina **Compras Dentro de Apps** como **Não Permitir**. Aproveite e defina **Exigir Senha** como **Sempre Exigir**.',
              'Crie um **código do Tempo de Uso** que a criança não saiba, para que essas escolhas fiquem como você deixou.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'A Apple às vezes muda o nome de algumas opções entre versões do iOS. Se um nome no seu aparelho for um pouco diferente do que está aqui, procure o mais parecido em **Restrições de Conteúdo e Privacidade**.',
          },
          {
            t: 'p',
            text: 'Com as compras dentro do app desativadas, o OutBrick continua jogando todos os tabuleiros: as moedas ganhas jogando continuam comprando reforços, recargas e jogadas extras, e os vídeos opcionais continuam funcionando.',
          },
          { t: 'h3', text: 'Se algo foi comprado por engano' },
          {
            t: 'p',
            text: 'Todo pagamento é feito à Apple, então só a Apple pode reembolsá-lo. Acesse [reportaproblem.apple.com](https://reportaproblem.apple.com), entre com a Conta Apple usada na compra, escolha **Solicitar um reembolso** e selecione o item do OutBrick. A Apple decide, segundo as regras dela e as leis de defesa do consumidor do seu país. Não conseguimos ver seus dados de pagamento nem fazer um reembolso da App Store. Mais na nossa [página de reembolsos](/refunds) e em [Progresso perdido ou compra que sumiu](help:lost-progress-and-purchases#refunds).',
          },
          {
            t: 'shot',
            id: 'shop',
            alt: 'A Loja: 2.580 moedas e a prateleira de Ofertas especiais, com um Pacote Inicial único de moedas, vidas e reforços, o Cofrinho e um Passe de Reforços com 60 minutos de OVNIs e Foguetes grátis.',
            caption: 'A Loja. Todo item pago com dinheiro de verdade passa pela janela de compra da Apple.',
          },
        ],
      },
      {
        id: 'time',
        title: 'Limites de tempo, Tempo Ocioso e lembretes',
        blocks: [
          {
            t: 'p',
            text: 'Como nenhum tabuleiro tem tempo marcado, é fácil largar o OutBrick: nada se perde ao parar entre um tabuleiro e outro, e as vidas continuam se recarregando com o jogo fechado. Se você quiser um limite mais firme para o tempo de jogo, o Tempo de Uso da Apple faz isso bem.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Limites de Apps', text: '**Ajustes › Tempo de Uso › Limites de Apps › Adicionar Limite.** Escolha a categoria **Jogos**, ou só o OutBrick, e um tempo por dia. Quando o tempo acaba, o iOS cobre o jogo.' },
              { term: 'Tempo Ocioso', text: '**Ajustes › Tempo de Uso › Tempo Ocioso.** Um período de pausa programado, como a hora de dormir, em que só os apps que você permitir podem abrir.' },
              { term: 'Lembretes do OutBrick', text: 'No jogo, **Ajustes › Jogo › Notificações** desativa todos. No iPhone, **Ajustes › Notificações › OutBrick** controla os lembretes e o indicador no ícone.' },
            ],
          },
          {
            t: 'list',
            items: [
              'O OutBrick nunca pede permissão para notificações na primeira vez que abre. Depois da terceira conclusão, ele pergunta se o Bloo pode guardar seu lugar, e **Agora não** espera uma semana.',
              'Quando os lembretes estão permitidos, o jogo envia **no máximo uma notificação a cada 20 horas**, e **nunca entre 22:00 e 09:00**.',
              'O **indicador no ícone** conta as recompensas esperando para serem resgatadas, até nove. Ele só aparece se as notificações estiverem permitidas, e abrir o jogo o zera.',
              'Um **filtro de Foco** pode desligar a música, pausar os lembretes e esconder o indicador enquanto um Foco como o Sono estiver ativado. Veja [Jogar com calma](help:playing-calmly#reminders).',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'O ponto mais gentil para parar é entre tabuleiros, no Início ou no mapa. Sair de um tabuleiro antes da primeira jogada é sempre grátis; depois de uma jogada, o cartão **Sair?** avisa que uma vida será gasta antes que qualquer coisa aconteça.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'O que o jogo e este site guardam',
        blocks: [
          {
            t: 'p',
            text: 'Este é um resumo da nossa [política de privacidade](/privacy), que traz todos os detalhes.',
          },
          { t: 'h3', text: 'No jogo' },
          {
            t: 'list',
            items: [
              '**Sem contas e sem análise de uso.** O desenvolvedor não recebe dados de jogo.',
              'O **progresso** fica guardado no aparelho e é sincronizado pelo seu próprio iCloud, que o desenvolvedor não consegue ler.',
              'As **compras** são processadas pela Apple. O OutBrick nunca vê nem guarda dados de cartão.',
              'O **Game Center** é opcional e administrado pela Apple, conforme os seus ajustes do Game Center.',
              '**Anúncios:** o único serviço de terceiros no jogo é o serviço de publicidade do Google, e ele só funciona quando o jogador escolhe assistir a um vídeo. Os anúncios em vídeo são limitados à classificação de conteúdo para o público geral do Google. Se o iOS perguntar se o OutBrick pode rastrear, **Pedir ao App para Não Rastrear** não muda nada no jogo. Na UE, no Reino Unido e na Suíça, um formulário de consentimento aparece antes do primeiro vídeo, e **Ajustes › Jogo › Opções de anúncios** o abre de novo.',
              '**Remover anúncios**, ou ter o Passe de Tijolos da temporada atual, faz o jogo deixar de pedir anúncios, e as recompensas continuam sendo pagas.',
              '**Apagar meus dados**, no pé de **Ajustes › Jogo**, redefine o progresso do aparelho e pede ao iCloud que apague o salvamento. Veja [Progresso, iCloud e privacidade](help:progress-privacy-and-account#delete).',
            ],
          },
          { t: 'h3', text: 'Neste site' },
          {
            t: 'list',
            items: [
              'Ler o site não exige conta. As visitas são medidas com o Google Analytics **só se você aceitar** no banner de cookies; até lá, nada é carregado do Google.',
              'O **formulário de contato** guarda o que você envia para podermos responder. Um caso de suporte fica guardado por 24 meses depois de encerrado e então é apagado.',
              'Uma **conta da comunidade** guarda um nome de exibição público e um endereço de e-mail privado, que nunca é mostrado a ninguém.',
              'Você pode pedir uma cópia do que guardamos, ou pedir que seja apagado, pelo [formulário de contato](/contact), com o assunto Privacidade.',
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'Por favor, deixe os dados pessoais da criança fora das mensagens de suporte. Um número de nível e o aparelho são tudo de que precisamos.',
          },
        ],
      },
      {
        id: 'other-players',
        title: 'Outros jogadores e a comunidade',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Aba Ranking', text: 'É liberada no nível 21. Mostra nomes de jogador e níveis, com uma bandeira opcional. Desative **Ajustes › Jogo › Mostrar-me no placar** para sair dela, e esconda a bandeira no Perfil.' },
              { term: 'Corridas', text: 'A **Corrida da vila** e o **Brick Royale** compartilham o nome de jogador com os outros jogadores daquela corrida, e só quando a criança entra em uma. Cada um pode ser desativado em **Ajustes › Jogo › Recursos do jogo**, junto com o Resgate de amigos, a Corrida da turma e as ofertas no mapa.' },
              { term: 'Nome de jogador', text: 'Definido no Perfil (toque no avatar). Um nome inventado é uma boa ideia.' },
              { term: 'Game Center', text: 'O serviço da Apple para conquistas, classificações e amigos. Os ajustes de amigos e de multijogador dele ficam em **Tempo de Uso › Restrições de Conteúdo e Privacidade**, na seção Game Center.' },
              { term: 'Mensagens', text: 'O OutBrick tem um app para o Mensagens que envia um desafio de nível ou uma figurinha para alguém com quem a criança já conversa. Os **Limites de Comunicação** do Tempo de Uso valem para ele como para qualquer conversa.' },
            ],
          },
          { t: 'h3', text: 'A Comunidade OutBrick' },
          {
            t: 'list',
            items: [
              'A comunidade é um fórum neste site, **separado do jogo**. Qualquer pessoa pode ler; publicar exige uma conta, e as contas são para pessoas **a partir de 16 anos**.',
              'Os links dela nos **Ajustes** abrem no Safari, fora do jogo, justamente por isso. Os limites de conteúdo da web do Tempo de Uso valem para ela como para qualquer site.',
              'O endereço de e-mail de um membro nunca é mostrado a ninguém. Toda publicação é pública e moderada, e qualquer coisa que desrespeite as [diretrizes](/community/guidelines) pode ser denunciada.',
              'Se você acha que uma criança criou uma conta, avise pelo [formulário de contato](/contact) e nós a apagaremos.',
            ],
          },
        ],
      },
      {
        id: 'checklist',
        title: 'Uma lista de verificação para seguir',
        blocks: [
          {
            t: 'p',
            text: 'Dez minutos com o aparelho da criança e o seu resolvem tudo. Imprima esta página, ou marque os itens de cabeça.',
          },
          {
            t: 'table',
            caption: 'Como configurar o OutBrick para uma criança',
            head: ['Feito', 'Verificar', 'Onde'],
            rows: [
              ['☐', 'Pedir para Comprar ativado', 'Seu iPhone: **Ajustes › Família ›** a criança **› Pedir para Comprar**'],
              ['☐', 'Compras dentro do app desativadas, ou senha sempre exigida', '**Ajustes › Tempo de Uso › Restrições de Conteúdo e Privacidade › Compras na iTunes e App Store**'],
              ['☐', 'Um código do Tempo de Uso definido', '**Ajustes › Tempo de Uso**'],
              ['☐', 'Um limite diário para jogos, se você quiser', '**Ajustes › Tempo de Uso › Limites de Apps**'],
              ['☐', 'Tempo Ocioso na hora de dormir', '**Ajustes › Tempo de Uso › Tempo Ocioso**'],
              ['☐', 'Lembretes e indicador do jeito que você prefere', 'No OutBrick, **Ajustes › Jogo › Notificações**, ou **Ajustes › Notificações › OutBrick**'],
              ['☐', 'Um nome de jogador inventado', 'No OutBrick: toque no avatar para abrir o **Perfil**'],
              ['☐', 'Aparecer ou não na aba Ranking', 'No OutBrick, **Ajustes › Jogo › Mostrar-me no placar**'],
              ['☐', 'Corridas e ofertas no mapa, ou não', 'No OutBrick, **Ajustes › Jogo › Recursos do jogo**'],
              ['☐', 'Resposta sobre rastreamento', '**Ajustes › Privacidade e Segurança › Rastreamento**'],
              ['☐', 'Sessão iniciada no iCloud, para o progresso ficar seguro', '**Ajustes ›** seu nome **› iCloud**'],
            ],
          },
        ],
      },
      {
        id: 'for-children',
        title: 'Para os jogadores mais novos',
        blocks: [
          {
            t: 'p',
            text: 'Esta parte é escrita para a criança. Leiam juntos, se ajudar.',
          },
          {
            t: 'list',
            items: [
              '**Vá com calma.** Não tem relógio. Pense o quanto quiser antes de cada jogada.',
              '**Perder faz parte.** Se as jogadas acabarem, você pode tentar de novo. Um coração vai embora quando você perde, e os corações voltam sozinhos.',
              '**Vídeo só se você quiser.** Um vídeo só passa se você tocar num botão para assistir. Você sempre pode dizer não.',
              '**Pergunte antes de comprar.** Se um botão mostra um preço em reais, dólares, euros ou qualquer outro dinheiro, ele custa dinheiro de verdade. Pergunte a um adulto primeiro.',
              '**Guarde seu nome em segredo.** Escolha um nome de jogador inventado, não o seu nome de verdade.',
              '**Faça pausas.** O jogo espera por você. Os amigos ainda vão estar lá quando você voltar.',
              '**Alguma coisa parece errada?** Pare e conte para um adulto.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Empacou?',
            text: 'Toque na **Dica** na barra lá embaixo. Você ganha uma grátis em cada tentativa.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Perguntas que os pais fazem',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'A criança pode falar com estranhos no OutBrick?',
                a: 'Não. O jogo não tem chat nem mensagens entre jogadores. Outros jogadores podem ver um nome de jogador e um nível na aba Ranking, e numa corrida em que a criança escolher entrar. As duas coisas podem ser desativadas em **Ajustes › Jogo**.',
              },
              {
                q: 'A criança vai ver anúncios que não escolheu?',
                a: 'Não. Não há banners nem anúncios entre tabuleiros. Um vídeo só passa depois que o jogador toca num botão para assistir em troca de uma recompensa, e cada tipo tem um limite diário. **Remover anúncios** os desativa para sempre, e as recompensas continuam sendo pagas.',
              },
              {
                q: 'A criança pode gastar dinheiro sem querer?',
                a: 'Toda compra com dinheiro de verdade passa pela janela de compra da Apple, que exige Face ID, Touch ID ou a senha da Conta Apple. Com o **Pedir para Comprar** ativado, ou as compras dentro de apps definidas como **Não Permitir**, nada pode ser comprado sem você.',
              },
              {
                q: 'Existe assinatura?',
                a: 'Não. Todo passe e item com tempo é uma compra única, e nada se renova sozinho.',
              },
              {
                q: 'O OutBrick precisa de uma conta ou de um endereço de e-mail?',
                a: 'Não. O progresso fica no aparelho e no seu próprio iCloud. A comunidade neste site exige uma conta, mas é para pessoas a partir de 16 anos e não faz parte do jogo.',
              },
              {
                q: 'O jogo funciona sem internet?',
                a: 'Sim, os tabuleiros funcionam offline. Os vídeos, o Game Center e a sincronização precisam de conexão, então os vídeos simplesmente não ficam disponíveis enquanto o aparelho está offline.',
              },
              {
                q: 'A quem eu peço um reembolso?',
                a: 'À Apple, em [reportaproblem.apple.com](https://reportaproblem.apple.com). Não conseguimos ver pagamentos nem reembolsá-los. Se algo comprado não chegou, tente primeiro **Restaurar compras** no pé da Loja e depois [escreva para nós](/contact?topic=purchases).',
              },
            ],
          },
        ],
      },
    ],
    related: ['playing-calmly', 'rewards-and-ads', 'shop-and-purchases', 'progress-privacy-and-account', 'settings', 'using-the-community'],
  },

  {
    slug: 'playing-calmly',
    category: 'family',
    cover: 'settings-a11y',
    title: 'Jogar com calma',
    summary:
      'Os ajustes que deixam o OutBrick mais silencioso e suave, por que nunca há relógio, como fazer uma pausa sem perder nada e alguns hábitos para jogar sem pressa.',
    keywords:
      'calma calmo relaxar relaxante tranquilo tranquilidade suave silencioso devagar sossego estresse ansiedade reduzir movimento animação velocidade som música vibração notificações indicador foco filtro sono pausa descanso intervalo sem cronômetro sem timer sem pressa aconchegante zen',
    host: 'zippy',
    hostPose: 'idle',
    sections: [
      {
        id: 'no-clock',
        title: 'Nunca há relógio',
        blocks: [
          {
            t: 'p',
            text: 'Nenhum tabuleiro do OutBrick tem tempo marcado, e nada faz contagem regressiva enquanto você pensa. Cada tabuleiro dá um número de **jogadas**, e esse é o único limite. Uma jogada só conta quando faz alguma coisa: uma troca que não forma combinação volta ao lugar sem gastar jogada, e um arrasto de menos de meia casa também volta.',
          },
          {
            t: 'list',
            items: [
              'Você pode olhar para um tabuleiro o quanto quiser. Largue o celular, volte e continue.',
              'Se nenhuma jogada for possível, o tabuleiro é embaralhado de graça. Você nunca fica realmente sem saída.',
              'Cada tentativa vem com uma **Dica**, um **Foguete** e um **OVNI** grátis, e o primeiro **Desfazer** de cada tabuleiro é grátis.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Os eventos e as temporadas seguem um calendário, e alguns mostram uma contagem regressiva até terminar. Nenhum deles coloca relógio em um tabuleiro.',
          },
        ],
      },
      {
        id: 'gentler-screen',
        title: 'Uma tela mais suave',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Reduzir Movimento', text: 'Em **Ajustes › Acessibilidade › Movimento** no iPhone. O movimento parado no tabuleiro para, os brilhos ficam fixos, as dicas cintilam no lugar, as telas mudam com um esmaecimento em vez de deslizar, e toda comemoração de vitória vira um brilho suave.' },
              { term: 'Atenuar Luzes Intermitentes', text: 'Também em **Movimento**. Os clarões de tela cheia dos grandes combos caem para um terço da intensidade e nunca ficam mais próximos do que cerca de um terço de segundo.' },
              { term: 'Velocidade da animação', text: 'Em **Ajustes › Acessibilidade** do OutBrick: 50%, 75%, 100%, 150% ou 200%. Em 75% ou 50%, as trocas, quedas e remoções acontecem mais devagar e ficam mais fáceis de acompanhar.' },
              { term: 'Brilho calmo e Contorno calmo', text: 'Duas peças grátis no **Guarda-roupa**: **Brilho calmo** em **Comemorações** (um brilho suave, nada voando) e **Contorno calmo** em **Rastros de troca** (um contorno parado onde estava o tijolo). Toque em **Usar**.' },
            ],
          },
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'A aba Acessibilidade: Velocidade da animação de 50% a 200%, Detalhe dos avisos Breve, Padrão ou Completo, e chaves para Daltonismo, Tabuleiro de alto contraste, Barra para canhotos, Confirmar trocas e Som da linha.',
            caption: 'Ajustes › Acessibilidade. A Velocidade da animação fica no alto.',
          },
          {
            t: 'p',
            text: 'Mais em [Visão, audição e movimento](help:vision-hearing-and-motion#motion).',
          },
        ],
      },
      {
        id: 'sound',
        title: 'Som, música e vibração',
        blocks: [
          {
            t: 'list',
            items: [
              '**Sons**, **Música** e **Vibração** têm cada um a sua chave em **Ajustes › Jogo**, e as mesmas três estão no menu **Pausa**, para você mudá-las no meio de um tabuleiro.',
              'A **Vibração** são os toques leves que você sente quando as peças se movem e caem. A chave só aparece em aparelhos que podem vibrar.',
              'Os amigos falam em **balões de texto**, nunca em voz alta, e nada no jogo depende de ouvir. Jogar em silêncio não tira nada de você.',
              'A chave Toque/Silencioso e os botões de volume funcionam normalmente.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Gosta da música, mas não dos efeitos? Desative **Sons** e deixe **Música** ativada, ou o contrário.',
          },
        ],
      },
      {
        id: 'quieter',
        title: 'Um jogo mais sossegado',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Recursos do jogo', text: '**Ajustes › Jogo › Recursos do jogo** desativa **Resgate de amigos**, **Corrida da vila**, **Brick Royale**, **Corrida da turma** e **Ofertas no mapa**. Você não perde nada do que já ganhou.' },
              { term: 'Jogo rápido', text: 'Vem ativado: uma vitória leva direto ao próximo tabuleiro. Desative em **Ajustes › Jogo** e uma vitória leva você de volta ao mapa da Jornada, um lugar natural para fazer uma pausa.' },
              { term: 'Mostrar-me no placar', text: 'Desative se preferir não aparecer na aba Ranking.' },
              { term: 'IA dos mascotes', text: 'Onde o modelo da Apple no dispositivo está disponível, os amigos inventam as próprias falas. Desative para voltar às falas de sempre.' },
            ],
          },
          {
            t: 'shot',
            id: 'settings-game',
            alt: 'Ajustes na aba Jogo: chaves ativadas para Notificações, Sons, Música, Jogo rápido e IA dos mascotes, cada uma com uma linha explicativa, e depois os botões Recursos do jogo, Avaliar OutBrick, Fale conosco, Comunidade, Relatar um bug e Suporte.',
            caption: 'Ajustes › Jogo.',
          },
        ],
      },
      {
        id: 'reminders',
        title: 'Notificações, o indicador no ícone e os filtros de Foco',
        blocks: [
          {
            t: 'list',
            items: [
              'O OutBrick envia **no máximo uma notificação a cada 20 horas**, e **nunca entre 22:00 e 09:00**. Cada uma oferece **Jogar**, **Mais tarde** (três horas) ou **Adiar para amanhã**.',
              'Desative todas em **Ajustes › Jogo › Notificações** no jogo, ou escolha o estilo delas em **Ajustes › Notificações › OutBrick** no iPhone.',
              'O **indicador no ícone** conta as recompensas esperando por você, até nove. Abrir o jogo o zera sem resgatar nada. Para escondê-lo de vez, desative **Indicadores** em **Ajustes › Notificações › OutBrick**.',
            ],
          },
          { t: 'h3', text: 'Um filtro de Foco para o OutBrick' },
          {
            t: 'steps',
            items: [
              'Em **Ajustes › Foco** no iPhone, escolha um Foco, como Sono ou Pessoal.',
              'Toque em **Adicionar Filtro** e depois em **OutBrick**.',
              'Escolha o que o OutBrick faz enquanto esse Foco estiver ativado: desligar a música (ou a música e os sons), pausar os lembretes e esconder o indicador no ícone.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Um filtro de Foco nunca muda os seus próprios ajustes. Enquanto um estiver agindo, uma linha embaixo de **Música** nos Ajustes avisa.',
          },
        ],
      },
      {
        id: 'stepping-away',
        title: 'Fazer uma pausa sem perder nada',
        blocks: [
          {
            t: 'list',
            items: [
              '**Entre um tabuleiro e outro é o lugar perfeito para parar.** No Início ou no mapa, nada está em andamento.',
              '**No meio de um tabuleiro**, toque em **Pausa**. **Continuar** leva você de volta na hora.',
              '**Sair antes da primeira jogada é sempre grátis.** Depois de uma jogada, o cartão **Sair?** avisa que uma vida será gasta antes de você escolher.',
              '**As vidas se recarregam sozinhas**, uma a cada 30 minutos, mesmo com o jogo fechado. Toque no coração na Jornada para ver quando vem a próxima.',
              '**Sua sequência de dias pode esperar.** Uma sequência de três dias ou mais pode ser recuperada em até uma semana depois do dia perdido, de graça com um protetor de sequência ou por 250 moedas.',
              '**Seu progresso está seguro.** Ele é salvo enquanto você joga, no aparelho e no iCloud.',
            ],
          },
          {
            t: 'shot',
            id: 'leave',
            alt: 'O cartão Sair?: Isso custa uma vida. Você tem 5. Seu progresso neste tabuleiro não é salvo. Botões: Continuar jogando e Sair.',
            caption: 'O cartão Sair? diz exatamente quanto sair vai custar antes de você escolher.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Uma ajudinha',
            text: 'Empacou em um tabuleiro? A partir da sexta tentativa nele, o jogo dá **3 jogadas extras** antes de você começar, uma vez por dia em cada tabuleiro. Às vezes a jogada mais tranquila é voltar amanhã.',
          },
        ],
      },
      {
        id: 'habits',
        title: 'Hábitos para jogar sem pressa',
        blocks: [
          {
            t: 'list',
            items: [
              '**Olhe antes de mexer.** Encontre primeiro os portões e os objetivos. O painel de pedidos no alto diz o que o tabuleiro quer.',
              '**Use a Dica grátis.** Ela está lá em cada tentativa e não pode ser guardada, então usá-la não custa nada.',
              '**Desfaça à vontade, uma vez.** O primeiro desfazer de cada tabuleiro é grátis.',
              '**Jogue de novo um tabuleiro concluído** pelo mapa quando quiser algo conhecido. Jogar de novo nunca muda o seu lugar na Jornada.',
              '**Escolha um ponto de parada antes de começar**, como o fim de uma vila, e deixe a comemoração da vila ser o seu sinal.',
              '**Se um tabuleiro irritar você, deixe-o para outro dia.** As vidas se recarregam, a ajudinha chega, e os tabuleiros muitas vezes parecem diferentes depois de um descanso.',
            ],
          },
        ],
      },
      {
        id: 'questions',
        title: 'Perguntas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Existe um cronômetro que eu possa desativar?',
                a: 'Não há nada para desativar: nenhum tabuleiro do OutBrick tem cronômetro. As jogadas são o único limite.',
              },
              {
                q: 'Como deixo as animações mais lentas?',
                a: 'Coloque a **Velocidade da animação** em 75% ou 50% em **Ajustes › Acessibilidade**. Para menos movimento em todo lugar, ative **Reduzir Movimento** nos Ajustes do iPhone.',
              },
              {
                q: 'Dá para tirar os confetes quando eu venço?',
                a: 'Sim. Use a comemoração grátis **Brilho calmo** do Guarda-roupa, ou ative **Reduzir Movimento**, que deixa toda comemoração tranquila.',
              },
              {
                q: 'Como tiro o indicador do ícone?',
                a: 'Desative **Indicadores** em **Ajustes › Notificações › OutBrick** no iPhone, ou use um filtro de Foco para escondê-lo só enquanto um Foco estiver ativado.',
              },
              {
                q: 'Perco uma vida se largar o jogo no meio de um tabuleiro?',
                a: 'Não por pausar. Uma vida só é gasta quando uma tentativa é perdida: ao desistir quando as jogadas acabam, ou ao reiniciar ou sair depois de uma jogada. Pause e volte quando quiser.',
              },
            ],
          },
        ],
      },
    ],
    related: ['accessibility', 'vision-hearing-and-motion', 'settings', 'lives-moves-and-undos', 'parents-guide', 'apple-features'],
  },

  {
    slug: 'rewards-and-ads',
    category: 'family',
    cover: 'wall',
    title: 'Como funcionam recompensas, vidas e anúncios, sem complicação',
    summary:
      'Todos os números por trás das vidas, dos desfazeres, de ficar sem jogadas e dos oito vídeos opcionais, o que Remover anúncios e o Passe de Tijolos mudam, o que as moedas compram e o que o OutBrick nunca vende.',
    keywords:
      'economia vidas corações desfazer jogadas continuar sem jogadas moedas preços preço vídeo anúncios propaganda recompensado assistir limite diário remover anúncios passe de tijolos grátis gratuito pay to win pagar para ganhar gastar dinheiro justo honesto nunca vendido',
    host: 'sprout',
    hostPose: 'think',
    sections: [
      {
        id: 'short',
        title: 'O resumo',
        blocks: [
          {
            t: 'list',
            items: [
              '**Perder custa uma vida; jogar e vencer, não.** As vidas voltam sozinhas, uma a cada 30 minutos.',
              '**Ficar sem jogadas não é o fim.** Você pode continuar com moedas, com um vídeo, ou simplesmente tentar de novo.',
              '**Os vídeos são sempre escolha sua.** Há oito tipos, cada um com um limite diário, 39 no total. Nada passa sozinho.',
              '**Pagar tira os vídeos, nunca as recompensas.** Remover anúncios e o Passe de Tijolos pagam as mesmas recompensas sem o vídeo.',
              '**Nada é assinatura, e nada pago aparece em um tabuleiro antes do nível 6.**',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Todo número nesta página é o que o jogo usa hoje. Se algum mudar, esta página muda junto.',
          },
        ],
      },
      {
        id: 'lives',
        title: 'Vidas',
        blocks: [
          {
            t: 'list',
            items: [
              'Você pode ter até **5 vidas**, ou **8** enquanto tiver o Passe de Tijolos da temporada atual.',
              'Uma vida volta a cada **30 minutos**, mesmo com o jogo fechado.',
              'Abrir um tabuleiro exige uma vida, mas **não gasta nenhuma**.',
            ],
          },
          {
            t: 'table',
            caption: 'Quando uma vida é gasta',
            head: ['Você…', 'Gasta vida?'],
            rows: [
              ['Conclui o tabuleiro', 'Não'],
              ['Fica sem jogadas e desiste (ou fecha a tela de jogadas esgotadas)', 'Sim'],
              ['Reinicia ou sai **depois** de uma jogada', 'Sim, e o cartão avisa antes'],
              ['Reinicia ou sai **antes** da primeira jogada', 'Não'],
              ['Continua com mais jogadas', 'Não: é a mesma tentativa'],
              ['Chega a um tabuleiro em que nada se mexe, ainda com jogadas', 'Não: ele é embaralhado de graça'],
              ['Perde na tentativa grátis do dia ou durante vidas ilimitadas', 'Não'],
            ],
          },
          {
            t: 'p',
            text: 'Sem vidas? Uma vez por dia, você pode ganhar uma **tentativa grátis** em um tabuleiro. Se não, dá para esperar, recarregar o estoque inteiro por **600 moedas**, assistir a um vídeo para ganhar **1 vida** ou comprar vidas ilimitadas: **1 hora por 900 moedas**, **3 horas por 2.000** ou **24 horas por 6.000**, ou com dinheiro de verdade na Loja.',
          },
          {
            t: 'shot',
            id: 'no-lives',
            alt: 'Sem vidas: 0 de 5 vidas e uma contagem até a próxima, depois vidas ilimitadas por 1 hora, 3 horas ou 24 horas, com moedas ou dinheiro, uma Recarga por 600 moedas, Assistir para ganhar uma vida e OK. Uma nota no pé explica que só se perde uma vida ao perder um tabuleiro, que elas voltam uma a cada 30 minutos e que, uma vez por dia, o estoque vazio ganha uma tentativa grátis.',
            caption: 'Sem vidas: esperar, recarregar ou continuar jogando.',
          },
        ],
      },
      {
        id: 'undos',
        title: 'Desfazer',
        blocks: [
          {
            t: 'list',
            items: [
              'O **primeiro desfazer de cada tabuleiro é grátis**, e nunca acaba.',
              'Depois disso, os desfazeres vêm de um estoque de até **5**, que recarrega **um a cada 25 minutos**.',
              'O botão Desfazer soma os dois, então um tabuleiro novo mostra **6** quando seu estoque está cheio.',
              'Estoque vazio? Compre **5 por 250 moedas**, assista a um vídeo para ganhar **2**, ou espere.',
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'Ficar sem jogadas',
        blocks: [
          {
            t: 'p',
            text: 'Quando as jogadas acabam antes de cumprir os objetivos, a tela **Sem jogadas** mostra o que falta e deixa você escolher. Continuar é a mesma tentativa, então nunca custa uma vida.',
          },
          {
            t: 'table',
            caption: 'Continuar com moedas, dentro de uma tentativa',
            head: ['Continuar', 'Custo', 'Você ganha'],
            rows: [
              ['Primeira vez', '300 moedas', '+5 jogadas'],
              ['Segunda vez', '500 moedas', '+5 jogadas e uma Dica'],
              ['Terceira vez em diante', '900 moedas', '+5 jogadas e um OVNI'],
            ],
          },
          {
            t: 'list',
            items: [
              'O preço volta a 300 moedas a cada nova tentativa, quando você sai do tabuleiro ou quando o conclui. Ele nunca passa de 900.',
              'Ou assista a um **vídeo opcional**: **+2 jogadas**, depois **+1 jogada**, depois um **OVNI grátis**. Um vídeo nunca faz o preço em moedas subir.',
              'Um **+5 jogadas** guardado também pode ser usado aqui. Quem tem o Passe de Tijolos também ganha **três jogadas grátis** aqui.',
              'Em um tabuleiro que você já tentou várias vezes, cada continuação dá um pouco mais: uma jogada extra para cada tentativa perdida depois da terceira, até +15.',
              '**Desistir** encerra a tentativa e gasta uma vida.',
            ],
          },
          {
            t: 'shot',
            id: 'wall',
            alt: 'A tela Sem jogadas mostrando os objetivos que ainda faltam, um botão de mais 5 jogadas por 300 moedas, um botão Assistir para ganhar mais 2 jogadas e Desistir.',
            caption: 'Sem jogadas: o que ainda falta e suas opções.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Por que o preço sobe',
            text: 'Na terceira continuação, recarregar um estoque inteiro de vidas (600 moedas) e começar do zero custa menos do que mais 900 moedas de jogadas. O jogo prefere que você recomece com calma a continuar pagando para ficar no mesmo lugar.',
          },
        ],
      },
      {
        id: 'videos',
        title: 'Os oito vídeos opcionais',
        blocks: [
          {
            t: 'p',
            text: 'O OutBrick **não tem anúncios obrigatórios**: nada de banners, nada de anúncios entre tabuleiros, nada que passe sozinho. Um vídeo só começa quando você toca num botão para assistir, e só um vídeo assistido até o fim paga. Cada tipo tem o próprio limite diário, e os limites voltam a zero à meia-noite.',
          },
          {
            t: 'table',
            caption: 'Cada vídeo, sua recompensa e seu limite diário',
            head: ['Onde', 'Recompensa', 'Por dia'],
            rows: [
              ['Sem vidas', '1 vida', '8'],
              ['Sem desfazer', '2 desfazeres', '8'],
              ['Sem jogadas', '+2 jogadas, depois +1, depois um OVNI grátis', '6'],
              ['Sem jogadas, Dica grátis', 'Uma Dica (desativado na versão atual, então você não vai vê-lo)', '4'],
              ['Cartão de vitória', 'As moedas da conclusão de novo (75 a 300)', '4'],
              ['Roda', 'Um segundo giro', '1'],
              ['Balão de presente', 'Moedas ou um reforço grátis por 10 minutos', '2'],
              ['Cine Tijolo', 'Um quadrado de prêmio por vídeo', '6'],
              ['**Os oito**', '', '**39**'],
            ],
          },
          {
            t: 'list',
            items: [
              'Dizer não a um vídeo não custa nada.',
              'Quando um limite é atingido, o botão dele simplesmente some até o dia seguinte.',
              'Os vídeos precisam de conexão com a internet. Offline, os tabuleiros continuam funcionando; os vídeos só não são oferecidos.',
              'Os anúncios em vídeo são limitados à classificação de conteúdo para o público geral do Google.',
            ],
          },
        ],
      },
      {
        id: 'remove-ads-and-pass',
        title: 'Remover anúncios e o Passe de Tijolos',
        blocks: [
          {
            t: 'p',
            text: 'Os dois tiram os vídeos **sem tirar as recompensas**: todo botão que dizia Assistir passa a dizer **Resgatar recompensa** e paga na hora, dentro dos mesmos limites diários. Pagar nunca faz você perder uma recompensa.',
          },
          {
            t: 'table',
            head: ['Comparar', 'Remover anúncios', 'Passe de Tijolos'],
            rows: [
              ['O que é', 'Uma compra única, sua para sempre', 'Uma compra única para uma temporada'],
              ['Vídeos', 'Somem para sempre', 'Somem enquanto você tiver o passe da temporada atual'],
              ['Recompensas', 'Pagas sem vídeo', 'Pagas sem vídeo, mais as recompensas da trilha Premium'],
              ['Vidas', '5', '8 enquanto você tiver o passe da temporada'],
              ['Sem jogadas', 'Como sempre', 'Também três jogadas grátis'],
              ['Restaurar em um aparelho novo', 'Sim', 'Sim, temporadas 1 a 3'],
            ],
          },
          {
            t: 'p',
            text: 'Os preços aparecem na sua moeda local na Loja. Nenhum dos dois se renova sozinho. Veja [A Loja, compras e restauração](help:shop-and-purchases#remove-ads) e [o Passe de Tijolos](help:rewards-and-events#pass).',
          },
        ],
      },
      {
        id: 'coins',
        title: 'Para que servem as moedas',
        blocks: [
          {
            t: 'p',
            text: 'As moedas são ganhas jogando: **25** por concluir um tabuleiro Normal, **50** por um Difícil ou Noite, **80** por um Superdifícil ou Chefe, **100** pelo Tijolo do dia, além das sequências, da Roda, das Missões, das recompensas por estrelas das vilas e do Passe de Tijolos. Também dá para comprar pacotes de moedas na Loja.',
          },
          {
            t: 'table',
            caption: 'O que as moedas compram',
            head: ['Item', 'Moedas'],
            rows: [
              ['Dica', '150'],
              ['Foguete', '300'],
              ['OVNI', '500'],
              ['Cinco desfazeres', '250'],
              ['Um estoque cheio de vidas', '600'],
              ['Continuar quando as jogadas acabam', '300, depois 500, depois 900'],
              ['Uma vantagem depois de uma derrota (um Foguete no tabuleiro e um OVNI grátis), a partir do nível 6', '800'],
              ['Vidas ilimitadas: 1 hora, 3 horas, 24 horas', '900, 2.000, 6.000'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'As duas recargas, de vidas e de desfazeres, têm preço fixo. Elas nunca ficam mais caras, por mais que você precise delas.',
          },
        ],
      },
      {
        id: 'never-sold',
        title: 'O que o OutBrick nunca vende',
        blocks: [
          {
            t: 'list',
            items: [
              '**Tempo.** Não existe relógio para você driblar pagando.',
              '**Acessibilidade.** Todo ajuste de acessibilidade é grátis, assim como as peças do Guarda-roupa que ajudam, como a comemoração tranquila e as bandejas de contraste.',
              '**Sorte.** Não há loot boxes nem pacotes-surpresa. Todo item pago diz exatamente o que contém, e a Roda nunca cobra dinheiro.',
              '**Uma assinatura.** Nada se renova sozinho.',
              '**Pressão sobre jogadores novos.** Nada pago é oferecido em um tabuleiro antes do nível 6.',
              '**Missões.** Elas pagam moedas, reforços e fichas, e nunca vendem nada.',
              '**Seus dados.** Não vendemos nem compartilhamos informações pessoais em troca de dinheiro.',
              '**Avaliações.** Não há recompensa por avaliar o jogo.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'As peças do Guarda-roupa mudam a aparência do jogo, nunca o jeito de jogar.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Perguntas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Vencer custa uma vida?',
                a: 'Nunca. Só perder uma tentativa custa.',
              },
              {
                q: 'Preciso assistir a vídeos para continuar jogando?',
                a: 'Não. As vidas se recarregam sozinhas, e todo tabuleiro pode ser jogado sem assistir a nada nem pagar nada.',
              },
              {
                q: 'Por que um botão Assistir sumiu?',
                a: 'Você atingiu o limite diário daquele vídeo, ou não há nenhum vídeo disponível agora. Os limites voltam a zero à meia-noite.',
              },
              {
                q: 'Comprei Remover anúncios. Perco as vidas e jogadas grátis que os vídeos davam?',
                a: 'Não. Os mesmos botões dizem **Resgatar recompensa** e pagam na hora, dentro dos mesmos limites diários.',
              },
              {
                q: 'O Passe de Tijolos é uma assinatura?',
                a: 'Não. É uma compra única para uma temporada, e não se renova sozinho.',
              },
            ],
          },
        ],
      },
    ],
    related: ['lives-moves-and-undos', 'boosters-and-pause', 'shop-and-purchases', 'rewards-and-events', 'parents-guide', 'common-questions'],
  },

  {
    slug: 'meet-the-friends',
    category: 'progress',
    cover: 'home',
    title: 'Conheça os nove amigos',
    summary:
      'Bloo, Peach, Sprout, Bricko, Zippy, Vio, Moss, Flurry e Poppy: quem é cada amigo, como cada um demonstra isso e todos os lugares onde você os encontra no OutBrick.',
    keywords:
      'amigos mascotes personagens elenco turma bloo peach sprout bricko zippy vio moss flurry poppy anfitrião cabeçalho início palco guarda-roupa look roupa figurinha widget personalidade bonequinhos',
    host: 'bloo',
    hostPose: 'cheer',
    sections: [
      {
        id: 'cast',
        title: 'O elenco',
        blocks: [
          {
            t: 'p',
            text: 'O OutBrick tem **nove amigos tijolo**, cada um um tijolo de brinquedo com cor, visual e jeito de comemorar próprios. Eles fazem companhia a você no Início e em cada tabuleiro, e mostram o que sentem pelo jeito como se mexem e pelo que aparece nos balões de texto deles.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Os amigos nunca falam em voz alta. Tudo o que eles têm a dizer aparece num balão de texto, então nada neles depende de ouvir.',
          },
          {
            t: 'shot',
            id: 'home',
            alt: 'Início: no topo, o avatar, 2.580 moedas, uma sequência de 12 dias, Missões e a engrenagem dos Ajustes. Abaixo do logotipo OUTBRICK, um cartão de evento anuncia o Desafio do Alvo, que começa em breve. Três amigos tijolo com chapéu de sol estão num gramado de tijolos de brinquedo, acima de um botão verde Nível 214. A barra inferior mostra Início, Ranking, Jornada, Loja e Passe.',
            caption: 'No Início, três amigos de cada vez ficam no palco, revezando.',
          },
        ],
      },
      {
        id: 'bloo-peach-sprout',
        title: 'Bloo, Peach e Sprout',
        blocks: [
          {
            t: 'friend',
            friend: 'bloo',
            pose: 'cheer',
            title: 'Bloo, o do relógio',
            text: 'Um tijolo azul com um relógio de pulso pendurado num cordão. O Bloo confere a hora entre um tabuleiro e outro e gira quando você conclui um: o primeiro a acenar, o primeiro a tentar a jogada ousada, e bem certo de que fez aquilo de propósito.',
          },
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'Peach, sempre com um plano',
            text: 'Um tijolo cor de pêssego com um pequeno pêssego no topo. Peach conta as jogadas duas vezes, tem sempre um plano B e se preocupa do começo ao fim, e então comemora quando a pilha finalmente se abre.',
          },
          {
            t: 'friend',
            friend: 'sprout',
            pose: 'think',
            title: 'Sprout e suas perguntas',
            text: 'Um tijolinho verde com uma mudinha no topo. Sprout repara no vão por onde todo mundo passou reto e faz a pergunta que ninguém fez. Quando dá certo, dois pulinhos e um giro.',
          },
        ],
      },
      {
        id: 'bricko-zippy-vio',
        title: 'Bricko, Zippy e Vio',
        blocks: [
          {
            t: 'friend',
            friend: 'bricko',
            pose: 'cheer',
            title: 'Bricko, sempre contando repetições',
            text: 'Um tijolo vermelho de botas vermelhas enormes que trata cada tabuleiro como uma série na academia. O Bricko conta as repetições, e uma conclusão ganha um joinha e uma flexão de bíceps, nessa ordem.',
          },
          {
            t: 'friend',
            friend: 'zippy',
            pose: 'idle',
            title: 'Zippy, que vive no mundo da lua',
            text: 'Um tijolo amarelo com uma piscadela sempre pronta. Zippy começa um pensamento, perde o fio no meio e volta a tempo da vitória. Um cutucão ganha um giro; uma vitória ganha três pulinhos.',
          },
          {
            t: 'friend',
            friend: 'vio',
            pose: 'idle',
            title: 'Vio, de fones e ouvido crítico',
            text: 'Um tijolo roxo de fones de ouvido que ouve um ritmo numa boa sequência de jogadas. Vio dá nota às suas jogadas como se fossem faixas, balança no ritmo de 112 batidas por minuto e trata uma conclusão caprichada como uma faixa cinco estrelas.',
          },
        ],
      },
      {
        id: 'moss-flurry-poppy',
        title: 'Moss, Flurry e Poppy',
        blocks: [
          {
            t: 'friend',
            friend: 'moss',
            pose: 'idle',
            title: 'Moss, direto da roça',
            text: 'Um tijolo verde-escuro com cinto de ferramentas e botas de trabalho enlameadas, e um ditado da roça para cada tempo. Moss guarda um aplauso lento para quando você merecer, para que ele valha.',
          },
          {
            t: 'friend',
            friend: 'flurry',
            pose: 'idle',
            title: 'Flurry, de cachecol',
            text: 'Um tijolo azul-claro de gorro listrado com pompom e cachecol, que adora um chá e um aceno tranquilo. Flurry nunca tem pressa, o que combina com um jogo sem relógio. Repare no cachecol: a ponta sempre balança um tempinho atrasada.',
          },
          {
            t: 'friend',
            friend: 'poppy',
            pose: 'cheer',
            title: 'Poppy e suas histórias',
            text: 'Um tijolo rosa com uma varinha de ponta de estrela. Para Poppy, todo tabuleiro é o meio de um conto de fadas, e o final é quando a varinha explode em estrelas.',
          },
        ],
      },
      {
        id: 'where',
        title: 'Onde você os encontra',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Início', text: 'Três amigos ficam no palco de tijolos de brinquedo, revezando.' },
              { term: 'Em cada tabuleiro', text: 'O amigo anfitrião da vila fica na moldura redonda do cabeçalho, vestido para aquela vila. Toque nele para ganhar uma risadinha, um aceno ou um “toca aqui”.' },
              { term: 'Vitórias e quase vitórias', text: 'Um amigo comemora no cartão de vitória, e um amigo consola você em **Nível falhou** quando um tabuleiro escapa.' },
              { term: 'O Guarda-roupa', text: 'Looks para os amigos, como a coroa dourada e a gola vermelha do Rei Bricko. As peças do Guarda-roupa mudam a aparência do jogo, nunca o jeito de jogar.' },
              { term: 'A Coleção', text: 'As Cartas da temporada, nove por temporada, mostram os amigos.' },
              { term: 'Fora do jogo', text: 'Diga “Encontra Bloo no OutBrick” à Siri (ou o nome de qualquer amigo), encontre um amigo no Spotlight, adicione o widget **Mascote do dia** ou **Humor do mascote**, ou envie a figurinha de um amigo no Mensagens.' },
            ],
          },
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'O Guarda-roupa: o Rei Bricko com uma coroa dourada e uma gola vermelha, com um botão verde Usar, e embaixo as abas Looks, Bandejas, Paletas e Acabamento do tijolo, e o Kit praiano.',
            caption: 'Looks, bandejas, paletas, acabamentos de tijolo, comemorações, rastros e molduras.',
          },
          {
            t: 'p',
            text: 'Mais em [Amigos, a Coleção e o Guarda-roupa](help:friends-and-wardrobe).',
          },
        ],
      },
      {
        id: 'bubbles',
        title: 'Balões de texto e IA dos mascotes',
        blocks: [
          {
            t: 'p',
            text: 'Os amigos torcem por você em balões de texto. Em aparelhos com o modelo de linguagem da Apple no dispositivo, eles também podem inventar as próprias falas: **Ajustes › Jogo › IA dos mascotes**, que só aparece onde o modelo está disponível no seu idioma. Tudo roda no seu aparelho, e desativar traz de volta as falas de sempre.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Perguntas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Posso escolher qual amigo é o anfitrião de um tabuleiro?',
                a: 'Cada vila tem o próprio amigo anfitrião, que fica na moldura do cabeçalho vestido para aquela vila. Você pode trocar o look dele no Guarda-roupa.',
              },
              {
                q: 'Por que os amigos não falam?',
                a: 'Eles falam só em balões de texto, para que tudo o que dizem possa ser lido e nada dependa de ouvir.',
              },
              {
                q: 'Os amigos mudam o jeito de jogar um tabuleiro?',
                a: 'Não. Os amigos e os looks deles estão lá para fazer companhia e comemorar. Todo tabuleiro joga do mesmo jeito, seja quem for o anfitrião.',
              },
              {
                q: 'Posso colocar um amigo na minha Tela de Início?',
                a: 'Sim. Adicione o widget **Mascote do dia** ou **Humor do mascote** e escolha um amigo, ou “Me surpreenda”. Veja [Widgets, Siri e Atalhos](help:apple-features#widgets).',
              },
            ],
          },
        ],
      },
    ],
    related: ['friends-and-wardrobe', 'menus-tour', 'apple-features', 'welcome', 'glossary'],
  },

  {
    slug: 'lost-progress-and-purchases',
    category: 'account',
    cover: 'shop',
    title: 'Progresso perdido ou compra que sumiu: passo a passo',
    summary:
      'Recupere uma compra com Restaurar compras, saiba o que nos enviar se ela continuar sumida, como a Apple cuida dos reembolsos e como recuperar o progresso pelo iCloud, em um iPhone ou iPad novo e com o Game Center.',
    keywords:
      'progresso perdido compra sumiu restaurar compras não recebi não chegou comprei paguei cobrado cobrança reembolso dinheiro de volta estorno reportaproblem recibo número do pedido icloud sincronizar celular novo trocar de celular transferir reinstalar game center nível zerou sumiu',
    host: 'moss',
    hostPose: 'idle',
    sections: [
      {
        id: 'start',
        title: 'Comece aqui',
        blocks: [
          {
            t: 'p',
            text: 'Quase tudo o que some volta em um ou dois minutos. Encontre seu problema abaixo e siga as etapas na ordem.',
          },
          {
            t: 'table',
            head: ['O que aconteceu', 'Vá para'],
            rows: [
              ['Algo que comprei não está no jogo', '[Recuperar uma compra](#restore)'],
              ['Restaurei e continua faltando', '[Ainda falta: escreva para nós](#still-missing)'],
              ['Quero meu dinheiro de volta', '[Reembolsos são com a Apple](#refunds)'],
              ['Meu nível, minhas moedas ou minhas estrelas sumiram', '[O progresso sumiu](#progress)'],
              ['Tenho um iPhone ou iPad novo', '[Como passar para um aparelho novo](#new-device)'],
              ['Minhas conquistas ou pontuações do Game Center', '[Game Center](#game-center)'],
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            title: 'Nunca vamos pedir a senha da sua Conta Apple nem os dados do seu cartão.',
            text: 'Nem por e-mail, nem na comunidade, nem em lugar nenhum. Ninguém do OutBrick precisa deles, e não conseguimos ver pagamentos. Se uma mensagem que diz ser nossa pedir esses dados, não responda.',
          },
        ],
      },
      {
        id: 'restore',
        title: 'Recuperar uma compra',
        blocks: [
          {
            t: 'steps',
            items: [
              'Confira se o aparelho está com sessão iniciada na **mesma Conta Apple** usada na compra, e no iCloud: **Ajustes ›** seu nome.',
              'Abra o OutBrick e deixe-o um instante conectado à internet.',
              'Abra a **Loja** e role até o final.',
              'Toque em **Restaurar compras**.',
            ],
          },
          {
            t: 'table',
            caption: 'O que volta, e como',
            head: ['Item', 'Como volta'],
            rows: [
              ['Remover anúncios', '**Restaurar compras**'],
              ['Passe de Tijolos, temporadas 1 a 3', '**Restaurar compras**'],
              ['Itens do Guarda-roupa', '**Restaurar compras**'],
              ['Moedas, reforços, vidas e outras coisas que se gastam', 'Com o seu progresso, pelo iCloud. A App Store não as restaura.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Confira se a compra foi concluída',
            text: 'No iPhone, **Ajustes ›** seu nome **› Mídia e Compras › Ver Conta › Histórico de Compras** lista o que a Apple cobrou. Se o item não estiver lá, o pagamento não foi concluído. Com o **Pedir para Comprar**, a compra fica esperando até o organizador da família aprovar.',
          },
        ],
      },
      {
        id: 'still-missing',
        title: 'Ainda falta: escreva para nós',
        blocks: [
          {
            t: 'steps',
            items: [
              'Abra nosso [formulário de contato com Compras e reembolsos já escolhido](/contact?topic=purchases).',
              'Diga **o que você comprou** e **quando**; uma data aproximada já serve.',
              'Informe seu aparelho, a versão do iOS e a versão do OutBrick. A versão do jogo fica no pé do seu **Perfil** (toque no seu avatar).',
              'Envie. Uma pessoa lê cada mensagem, e você recebe um e-mail com uma referência e um link privado.',
              'Acompanhe seu caso em [sua solicitação de suporte](/support/request): em que pé está, cada resposta e um espaço para acrescentar detalhes.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'O que compartilhar, e onde',
            text: 'Pode incluir o seu **número do pedido da Apple** no formulário de contato, que é privado. Nunca publique um recibo, um número de pedido ou uma captura de tela de uma compra na comunidade, e nunca envie um recibo completo, número de cartão, senha ou código de segurança para ninguém.',
          },
        ],
      },
      {
        id: 'refunds',
        title: 'Reembolsos são com a Apple',
        blocks: [
          {
            t: 'p',
            text: 'Todo pagamento do OutBrick é feito à Apple, então só a Apple decide os reembolsos. Não conseguimos ver seus dados de pagamento nem reembolsar uma compra da App Store.',
          },
          {
            t: 'steps',
            items: [
              'Acesse [reportaproblem.apple.com](https://reportaproblem.apple.com).',
              'Entre com a Conta Apple usada na compra.',
              'Escolha **Solicitar um reembolso**, escolha um motivo e depois a compra do OutBrick.',
              'Envie o pedido e acompanhe o status com a Apple. A aprovação e o prazo são definidos pela Apple e pelas leis de defesa do consumidor do seu país.',
            ],
          },
          {
            t: 'p',
            text: 'Uma cobrança inesperada ou duplicada segue o mesmo caminho: confira primeiro o **Histórico de Compras** e depois o Relatar um Problema. Mais na nossa [página de reembolsos](/refunds).',
          },
        ],
      },
      {
        id: 'progress',
        title: 'O progresso sumiu',
        blocks: [
          {
            t: 'steps',
            items: [
              'Confira se você tem sessão iniciada no iCloud com a mesma Conta Apple de antes e se o iCloud Drive está ativado.',
              'Abra o OutBrick conectado à internet e espere um minuto. O progresso é buscado e combinado quando o jogo começa.',
              'Feche o jogo por completo e abra-o de novo.',
              'Se outro aparelho tem o progresso que você espera, abra o OutBrick nele também, conectado, para que ele compartilhe o salvamento.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Nada é sobrescrito',
            text: 'Quando dois aparelhos discordam, o nível e as contagens mais altos são mantidos, as coleções são somadas, e as moedas gastas em um aparelho nunca são devolvidas por outro.',
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'Se um aparelho nunca teve sessão iniciada no iCloud, o progresso dele só existe nele. Inicie a sessão no iCloud lá e abra o OutBrick uma vez, depois confira o outro aparelho de novo.',
          },
          {
            t: 'p',
            text: '**Apagar meus dados** não pode ser desfeito. Depois de usá-lo, outro aparelho com sessão no mesmo iCloud pode sincronizar de volta um salvamento antigo, então use-o em todos os aparelhos se a ideia é recomeçar. Veja [Progresso, iCloud e privacidade](help:progress-privacy-and-account#delete).',
          },
        ],
      },
      {
        id: 'new-device',
        title: 'Como passar para um iPhone ou iPad novo',
        blocks: [
          {
            t: 'steps',
            items: [
              'Antes de trocar, abra o OutBrick uma vez no aparelho **antigo** com sessão iniciada no iCloud.',
              'No aparelho novo, inicie a sessão na mesma Conta Apple e ative o iCloud.',
              'Instale o OutBrick pela App Store e abra-o. Seu progresso é buscado e combinado quando o jogo começa.',
              'Abra a **Loja**, role até o final e toque em **Restaurar compras**.',
            ],
          },
          {
            t: 'p',
            text: 'Som, música, vibração, notificações e a maioria dos ajustes de acessibilidade do tabuleiro ficam em cada aparelho, então configure-os de novo no novo. Sua escolha de Daltonismo acompanha o seu progresso.',
          },
        ],
      },
      {
        id: 'game-center',
        title: 'Game Center',
        blocks: [
          {
            t: 'list',
            items: [
              'O **Game Center** é um serviço da Apple. Ele guarda suas 65 conquistas e as classificações de nível mais alto, total de tabuleiros concluídos, hoje e esta semana.',
              'Seu **progresso na Jornada não fica guardado no Game Center**. Ele viaja pelo iCloud.',
              'Inicie a sessão no Game Center nos Ajustes do iPhone com a mesma Conta Apple para ver suas conquistas de novo.',
              'A aba **Ranking** do jogo é uma classificação separada, de todos os tempos. Você aparece nela enquanto **Ajustes › Jogo › Mostrar-me no placar** estiver ativado.',
            ],
          },
        ],
      },
      {
        id: 'questions',
        title: 'Perguntas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Vocês podem me reembolsar?',
                a: 'Não, só a Apple pode. Use [reportaproblem.apple.com](https://reportaproblem.apple.com). Se o item nunca chegou, aí podemos ajudar: [escreva para nós](/contact?topic=purchases).',
              },
              {
                q: 'Por que Restaurar compras não trouxe minhas moedas de volta?',
                a: 'Moedas, reforços e vidas se gastam enquanto você joga, então a App Store não os restaura. Eles acompanham o seu progresso pelo iCloud.',
              },
              {
                q: 'Devo publicar meu recibo para vocês conferirem?',
                a: 'Por favor, não. Nunca publique um recibo na comunidade. Use o [formulário de contato](/contact?topic=purchases), que é privado, e deixe de fora números de cartão, senhas e códigos de segurança.',
              },
              {
                q: 'Alguém pediu a senha da minha Conta Apple para resolver minha compra.',
                a: 'Não fomos nós. Nunca pedimos a senha da sua Conta Apple nem os dados do seu cartão. Não os compartilhe, e avise-nos pelo [formulário de contato](/contact).',
              },
              {
                q: 'Reinstalei o OutBrick e voltei para o nível 1.',
                a: 'Fique um minuto conectado, com o iCloud ativado e a mesma Conta Apple. Se nada mudar, o progresso anterior pode ter ficado em um aparelho sem sessão no iCloud: veja [O progresso sumiu](#progress).',
              },
            ],
          },
        ],
      },
    ],
    related: ['shop-and-purchases', 'progress-privacy-and-account', 'troubleshooting', 'parents-guide', 'apple-features', 'common-questions'],
  },
];
