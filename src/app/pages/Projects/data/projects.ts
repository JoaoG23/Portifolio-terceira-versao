export type Project = {
  link: string;
  name: string;
  src: string;
  description: string;
};

export const projects: Project[] = [
  {
    link: `/projects/1`,
    name: "Fx Finances",
    src: "/fxfinances.gif",
    description: `O Fx-finances, evolução do sistema Fluxos, é um sistema financeiro de fluxo de caixa voltado para empresas,
     projetado como um SaaS (Software as a Service).`,
  },
  {
    link: "/projects/2",
    name: "Way Of The Weights",
    src: "/wow.gif",
    description: `Aplicativo Web para treinos de academia com foco em mensurar
     o ganho de força do usuário ao longo do tempo. Clique aqui para saber mais!`,
  },
  {
    link: "/projects/3",
    name: "Acesso",
    src: "/acesso.gif",
    description: ` Sistema de controle de acesso inovador, integrando
          tecnologias avançadas para garantir uma gestão
          eficiente e segura do fluxo de visitantes.`,
  },
  {
    link: "/projects/4",
    name: "Gcontas",
    src: "/gcontas.gif",
    description: `O Gconta é um projeto desenvolvido para armazenar e gerenciar dados e informações de login de usuários em um sistema de forma segura.`,
  },
  {
    link: "/projects/5",
    name: "Fluxos",
    src: "/fluxos.gif",
    description: `
    Um sistema financeiro baseado em planilhas do Excel,
    projetado para gerenciar fluxo de caixa com flexibilidade, 
     análise de tendências para facilitar decisões informadas.`,
  },
  {
    link: "/projects/6",
    name: "Copa Chat",
    src: "/copachat.png",
    description: `Web app sala de bate-papo simples para validar conhecimentos em WebSocket, 
    permitindo a conexão de uma ou mais pessoas por meio de mensagens em tempo real.`,
  },
];
