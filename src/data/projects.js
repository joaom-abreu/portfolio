import { sortByNewest } from "@/shared/lib/sortByNewest.js";

export const PROJECT_STATUS = {
  published: "published",
  inProgress: "in-progress",
};

export const projects = sortByNewest([
  {
    id: "car-rental-system",
    date: "2026-11",
    dateLabel: { pt: "2026 · novembro", en: "2026 · November" },
    status: PROJECT_STATUS.published,
    title: { pt: "Sistema de Aluguel de Carros", en: "Car Rental System" },
    description: {
      pt: "Sistema web de aluguel de carros, feito para uma disciplina da PUC Minas. Clientes fazem pedidos de aluguel, e agentes (uma locadora e um banco) avaliam os pedidos e executam os contratos, que podem vir com crédito do banco. A API em Spring Boot usa Spring Security com JWT e o Supabase como banco, o front é feito em React, e o projeto tem testes em JUnit e Mockito, CI no GitHub Actions e diagramas UML alinhados ao código.",
      en: "A web system for renting cars, built for a course at PUC Minas. Clients place rental requests, and agents (a rental company and a bank) evaluate them and execute the contracts, which may include credit from the bank. The Spring Boot API uses Spring Security with JWT and Supabase as the database, the front end is built with React, and the project has JUnit and Mockito tests, CI on GitHub Actions and UML diagrams kept in line with the code.",
    },
    tags: ["Java", "Spring Boot", "Spring Security", "Supabase", "React"],
    repoUrl: "https://github.com/joaom-abreu/car-rental-system",
    liveUrl: "https://aluguel-carros.vercel.app",
    media: {
      src: "/projects/car-rental-system.webp",
      alt: {
        pt: "Tela de pedidos do sistema de aluguel de carros, com cinco pedidos e os status Cancelado, Em análise, Aprovado, Reprovado e Contratado.",
        en: "Requests page of the car rental system, with five requests and the statuses Cancelado, Em análise, Aprovado, Reprovado and Contratado (Canceled, Under review, Approved, Rejected and Contracted).",
      },
    },
  },
  {
    id: "scribd-to-pdf",
    date: "2026-09",
    dateLabel: { pt: "2026 · setembro", en: "2026 · September" },
    status: PROJECT_STATUS.published,
    title: { pt: "Scribd to PDF", en: "Scribd to PDF" },
    description: {
      pt: "Ferramenta de linha de comando em Python que usa o Playwright para capturar cada página exibida no leitor do Scribd e reuni-las em um único PDF, na ordem correta. Retoma capturas interrompidas, gera o PDF de novo sem reabrir o navegador e pode aplicar OCR para deixar o texto pesquisável. O código é organizado em camadas e coberto por testes em pytest.",
      en: "A Python command-line tool that uses Playwright to capture each page shown in the Scribd reader and merge them into a single PDF in the correct order. It resumes interrupted captures, rebuilds the PDF without reopening the browser and can run OCR to make the text searchable. The code is organized in layers and covered by pytest tests.",
    },
    tags: ["Python", "Playwright", "img2pdf", "OCRmyPDF", "pytest"],
    repoUrl: "https://github.com/joaom-abreu/scribd-to-pdf",
    liveUrl: null,
    media: null,
  },
  {
    id: "portfolio",
    date: "2026-10",
    dateLabel: { pt: "2026 · outubro", en: "2026 · October" },
    status: PROJECT_STATUS.published,
    title: { pt: "Site de Portfólio", en: "Portfolio Website" },
    description: {
      pt: "Um site pessoal, em português e inglês, para apresentar meus projetos. Uma API própria em Vercel Functions busca meus dados e minha atividade no GitHub e registra as visitas no Supabase, sem guardar IPs. O projeto também roda inteiro em Docker Compose, com testes e CI no GitHub Actions.",
      en: "A bilingual personal website to showcase my projects. A custom API on Vercel Functions fetches my GitHub data and activity and records visits in Supabase without storing IPs. The whole project also runs on Docker Compose, with tests and CI on GitHub Actions.",
    },
    tags: ["React", "JavaScript", "Vercel", "Supabase", "Docker"],
    repoUrl: "https://github.com/joaom-abreu/portfolio",
    liveUrl: "https://joaomario.dev",
    media: {
      src: "/projects/portfolio.webp",
      alt: {
        pt: "Topo do site de portfólio no tema escuro, com o nome João Mário Abreu, a foto e o card que mostra a resposta de /api/joao.",
        en: "Top of the portfolio website in the dark theme, with the name João Mário Abreu, the photo and the card showing the /api/joao response.",
      },
    },
  },
  {
    id: "courtside-api",
    date: "2026-10",
    dateLabel: {
      pt: "2026 · em desenvolvimento",
      en: "2026 · in development",
    },
    status: PROJECT_STATUS.inProgress,
    title: { pt: "Courtside API", en: "Courtside API" },
    description: {
      pt: "API REST de estatísticas da NBA em Go e PostgreSQL. Reúne times, jogadores e jogos e calcula a classificação da temporada direto no SQL. O código é dividido em handlers e repositórios, usa o net/http da biblioteca padrão e o driver pgx, e o banco sobe pelo Docker Compose já com os dados.",
      en: "A REST API for NBA statistics in Go and PostgreSQL. It brings together teams, players and games and computes the season standings directly in SQL. The code is split into handlers and repositories, uses the standard library's net/http and the pgx driver, and the database starts with Docker Compose already seeded.",
    },
    tags: ["Go", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/joaom-abreu/courtside-api",
    liveUrl: null,
    media: null,
  },
  {
    id: "conci",
    date: "2026-10",
    dateLabel: {
      pt: "2026 · em desenvolvimento",
      en: "2026 · in development",
    },
    status: PROJECT_STATUS.inProgress,
    title: { pt: "Cônci", en: "Cônci" },
    description: {
      pt: "Plataforma web, feita em equipe na PUC Minas, que conecta clientes a prestadores de serviços autônomos, com busca por categoria, agenda do prestador, acompanhamento do serviço e avaliações. A API usa o RESTHeart sobre o MongoDB Atlas, em Docker Compose, e o front é feito em React com TypeScript e Material UI.",
      en: "A web platform, built as a team at PUC Minas, that connects clients with independent service providers, with search by category, a provider schedule, service tracking and reviews. The API runs RESTHeart on MongoDB Atlas with Docker Compose, and the front end is built with React, TypeScript and Material UI.",
    },
    tags: [
      "Spring Boot",
      "MongoDB",
      "RESTHeart",
      "Docker",
      "React",
      "TypeScript",
    ],
    repoUrl:
      "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2026-2-ti2-7600100-Conci",
    liveUrl: null,
    media: {
      src: "/projects/conci.webp",
      alt: {
        pt: "Logo do Cônci em fundo azul-marinho: uma mão dourada aponta para o acento do nome, com a frase “Um concierge para todos”.",
        en: "Cônci logo on a navy background: a golden hand points at the accent of the name, above the phrase “Um concierge para todos” (A concierge for everyone).",
      },
    },
  },
]);
