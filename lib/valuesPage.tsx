// src/lib/valuesPage.ts

import { hr } from "framer-motion/client";

export const languages = [
  { name: "JavaScript", level: "Básico" },
  { name: "TypeScript", level: "Básico" },
  { name: "React / Next.js", level: "Básico" },
  { name: "Node.js", level: "Básico" },
  { name: "Python", level: "Básico" },
  { name: "Tailwind CSS", level: "Básico" },
  { name: "MySql", level: "Básico" },
  { name: "C", level: "Básico" },
  { name: "C#", level: "Básico" },
  { name: "Java", level: "Básico" },
];

export const projects = [
  {
    title: "LandPage Psicologia",
    tag: "Full Stack",
    img: "/projeto1.png",
    tech: ["Next.js", "Stripe", "Tailwind"],
    hrefsite: "https://juliabarcelos.com.br",
  },
  {
    title: "Horta Vertical",
    tag: "Automação",
    img: "/projeto2.jpeg",
    tech: ["C++", "Arduino", "Flutters"],
    hrefsite: "https://github.com/MatheusDuarteM/painelCeetModelo",
  },
  {
    title: "Gerenciamento Encomenda",
    tag: "Full Stack",
    img: "/projeto3.png",
    tech: ["Java", "Java Swing", "MySQL"],
    hrefsite: "https://github.com/MatheusDuarteM/Java-Software-Encomenda",
  },
  {
    title: "E-commerce Simples",
    tag: "Full Stack",
    img: "/projeto4.png",
    tech: ["Next.js", "Stripe", "Tailwind", "Supabase"],
    hrefsite: "https://lojista-mu.vercel.app/",
  },
];

export const contactInfo = {
  email: "matheusduartemartins2@gmail.com",
  phone: "+55 27 99281-2662",
  phoneRaw: "+5527992812662",
};

export const sectionHeaderData = {
  tituloh4_1: "Matheus",
  tituloh4_2: "Martins",
  nav1: "Projetos",
  nav2: "Contato",
};

export const sectionHeroData = {
  span1: "— Disponível para novos desafios em Software!",
  tituloh1: "Desenvolvedor Full Stack Júnior & Engenheiro de Automação.",
  span2: "especialista em transformar dados em soluções.",
  paragrafop:
    "Com base sólida em Engenharia e formação técnica em Informática, foco no desenvolvimento de aplicações escaláveis com Next.js, React e Java. Atualmente coordenando sistemas e dados, busco integrar minha experiência analítica ao desenvolvimento de software de alta performance.",
  btn1: "Download CV",
  btn2: "GitHub Profile",
  paragrafop2: "Projetos",
  paragrafop3: "Full Stack",
};

export const sectionServicosData = {
  // Foco na transição técnica
  tituloh4_1: "Técnico em Informática & FrontEnd",
  paragrafop2: "CEET Vasco Coutinho / Afrocodigos",
  paragrafop3:
    "Especialização prática em desenvolvimento Full Stack, com foco em Next.js, Java, Python e bancos de dados relacionais.",
  span: "2023 - 2024",

  // Valorizando o diploma de Engenheiro
  tituloh4_2: "Engenharia de Controle e Automação",
  paragrafop4: "Faculdade Multivix",
  paragrafop5:
    "Formação acadêmica que sustenta minha lógica de programação e capacidade de resolver problemas complexos através da tecnologia.",
  span2: "Concluído em 2020",
};

export const sectionProjetosData = [
  {
    span: "Portfolio Técnico",
    tituloh3: "Aplicações & Soluções",
    paragrafop:
      "Projetos desenvolvidos para consolidar conhecimentos em CRUD, interfaces dinâmicas e integração de sistemas, utilizando as melhores práticas de desenvolvimento.",
    paragrafop2:
      "Desenvolvimento de sistema completo com interface intuitiva, foco em performance e experiência do usuário final.",
  },
  {
    span: "Automação & Inovação",
    tituloh3: "Soluções Criativas",
    paragrafop:
      "Projetos de automação residencial e sistemas embarcados, aplicando conhecimentos de C++ e Python para criar soluções práticas e inovadoras.",
    paragrafop2:
      "Desenvolvimento de sistema de automação para horta vertical, integrando sensores e atuadores para controle eficiente do ambiente.",
  },
  {
    span: "Sistemas de Gerenciamento",
    tituloh3: "Organização & Eficiência",
    paragrafop:
      "Projetos focados em gerenciamento de dados e processos, utilizando Java e MySQL para criar sistemas robustos e escaláveis.",
    paragrafop2:
      "Desenvolvimento de sistema de gerenciamento de encomendas, com interface gráfica e banco de dados para controle eficiente de pedidos.",
  },
  {
    span: "E-commerce Simples",
    tituloh3: "Vendas Online",
    paragrafop:
      "Projeto de e-commerce simples, utilizando Next.js, Stripe e Tailwind CSS para criar uma experiência de compra fluida e moderna.",
    paragrafop2:
      "Desenvolvimento de plataforma de vendas online, com integração de pagamento e design responsivo para dispositivos móveis.",
  },
];

export const sectionFooterData = {
  tituloh3: "Pronto para contribuir",
  span: " com seu time.",
  paragrafop:
    "Estou em busca da minha primeira oportunidade oficial como Desenvolvedor, levando comigo maturidade profissional e paixão por código limpo.",
  botao1: "Vamos conversar?",
  paragrafop2: "Matheus Duarte Martins",
  paragrafop3: "Desenvolvedor Full Stack Júnior",
};
