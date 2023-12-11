export type Project = {
  link: string;
  name: string;
  src: string;
  description: string;
};

export const projects: Project[] = [
  {
    link: "https://github.com/JoaoG23/WayOfTheWeights-FrontEnd",
    name: "Fx Finances",
    src: "/fxfinances.gif",
    description: `O Fx-finances, evolução do sistema Fluxos, é um sistema financeiro de fluxo de caixa voltado para empresas,
     projetado como um SaaS (Software as a Service).`,
  },
  {
    link: "https://github.com/JoaoG23/WayOfTheWeights-FrontEnd",
    name: "Way Of The Weights",
    src: "/wow.gif",
    description: `Aplicativo Web para treinos de academia com foco em mensurar
     o ganho de força do usuário ao longo do tempo. Clique aqui para saber mais!`,
  },
  {
    link: "https://github.com/JoaoG23/GContas",
    name: "Gcontas",
    src: "/gcontas.gif",
    description: `O Gconta é um projeto desenvolvido para armazenar e gerenciar dados e informações de login de usuários em um sistema de forma segura.`,
  },
  {
    link: "https://github.com/JoaoG23/FluxosFrontend",
    name: "Fluxos",
    src: "/fluxos.gif",
    description: `
    Um sistema financeiro baseado em planilhas do Excel,
    projetado para gerenciar fluxo de caixa com flexibilidade, 
     análise de tendências para facilitar decisões informadas.`,
  },
  {
    link: "https://github.com/JoaoG23/Sistema-Acesso-Frontend",
    name: "Acesso",
    src: "/acesso.gif",
    description: ` Sistema de controle de acesso inovador, integrando
        tecnologias avançadas para garantir uma gestão
        eficiente e segura do fluxo de visitantes.`,
  },
  {
    link: "https://github.com/JoaoG23/JoaoChat?tab=readme-ov-file",
    name: "Copa Chat",
    src: "/copachat.png",
    description: `Web app sala de bate-papo simples para validar conhecimentos em WebSocket, 
    permitindo a conexão de uma ou mais pessoas por meio de mensagens em tempo real.`,
  },
];
