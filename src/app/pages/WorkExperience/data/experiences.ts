export type Experience = {
  id?: number;
  profession: string;
  company: string;
  area: string;
  time: string;
  description: string;
  techs: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    profession: "Desenvolvedor Fullstack Web",
    area: "Logística",
    company: "XC Soluções Tecnologicas",
    time: "Dez de 2022 até Mai de 2024",
    description: `
    Atuei na criação, estruturação e documentação do Sistema de Gestão de Doca e Portaria,
     desempenhando funções tanto no Back-end quanto no Front-end.
     
    Automatizei o check-in de veículos no Sistema de Gestão de Doca e Portaria ao integrar uma balança rodoviária.
     Essa implementação eficiente resultou na notável agilização do processo logístico, reduzindo as filas de caminhões.`,
    techs: ["React", "Redux", "Node", "SQL Server", "Bootstrap", "Express"],
  },
  {
    id: 2,
    profession: "Técnico de Suporte em TI e Software",
    area: "Segurança e Automação",
    company: "AGS INN",
    time: "Jul de 2021 até Abr de 2022",
    description: `Auxiliei na primeira integração entre dois sistemas internos de controle de acesso, conectando-os ao sistema de portaria de visitantes.
    
    Incrementando funcionalidades para proporcionar ainda mais valor ao cliente.
    
    Auxílio no suporte técnico ao usuário de softwares desenvolvidos na empresa.`,
    techs: ["HTML", "CSS", "Javascript", "Bootstrap", "Postgres SQL", "My SQL"],
  },
];
