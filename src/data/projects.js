import { sortByNewest } from "@/shared/lib/sortByNewest.js";

export const PROJECT_STATUS = {
  published: "published",
  inProgress: "in-progress",
};

export const projects = sortByNewest([
  {
    id: "car-rental-system",
    date: "2026-11",
    status: PROJECT_STATUS.published,
    title: { pt: "Sistema de Aluguel de Carros", en: "Car Rental System" },
    summary: {
      pt: "Sistema web de aluguel de carros feito para uma disciplina da PUC Minas: clientes pedem o aluguel, e uma locadora e um banco avaliam os pedidos e executam os contratos, que podem incluir crédito.",
      en: "A car rental web app built for a PUC Minas course: clients request rentals, and a rental company and a bank review them and execute the contracts, which may include credit.",
    },
    highlights: [
      {
        pt: "API em Spring Boot com autenticação JWT via Spring Security",
        en: "Spring Boot API with JWT authentication via Spring Security",
      },
      {
        pt: "Testes com JUnit e Mockito e CI no GitHub Actions",
        en: "JUnit and Mockito tests with CI on GitHub Actions",
      },
      {
        pt: "BrasilAPI preenche o endereço pelo CEP e avisa feriados no período",
        en: "BrasilAPI fills in the address from the CEP and flags holidays",
      },
    ],
    role: null,
    tags: ["Java", "Spring Boot", "Spring Security", "Supabase", "React"],
    repoUrl: "https://github.com/joaom-abreu/car-rental-system",
    liveUrl: "https://aluguel-carros.vercel.app",
    media: {
      src: "/projects/car-rental-system.webp",
      alt: {
        pt: "Tela de pedidos do sistema de aluguel de carros no tema escuro, vista pelo banco, com cinco pedidos e os status Reprovado, Aprovado, Contratado, Cancelado e Em análise.",
        en: "Requests page of the car rental system in the dark theme, seen by the bank, with five requests and the statuses Reprovado, Aprovado, Contratado, Cancelado and Em análise (Rejected, Approved, Contracted, Canceled and Under review).",
      },
    },
  },
  {
    id: "scribd-to-pdf",
    date: "2026-09",
    status: PROJECT_STATUS.published,
    title: { pt: "Scribd to PDF", en: "Scribd to PDF" },
    summary: {
      pt: "Ferramenta de linha de comando em Python que captura as páginas do leitor do Scribd e gera um único PDF na ordem certa.",
      en: "A Python command-line tool that captures pages from the Scribd reader and builds a single PDF in the right order.",
    },
    highlights: [
      {
        pt: "Retoma capturas interrompidas e refaz o PDF sem abrir o navegador",
        en: "Resumes interrupted captures and rebuilds the PDF offline",
      },
      {
        pt: "OCR opcional para deixar o texto pesquisável",
        en: "Optional OCR to make the text searchable",
      },
      {
        pt: "Código em camadas, coberto por testes em pytest",
        en: "Layered code covered by pytest tests",
      },
    ],
    role: null,
    tags: ["Python", "Playwright", "img2pdf", "OCRmyPDF", "pytest"],
    repoUrl: "https://github.com/joaom-abreu/scribd-to-pdf",
    liveUrl: null,
    media: null,
  },
  {
    id: "courtside-api",
    date: "2026-10",
    status: PROJECT_STATUS.inProgress,
    title: { pt: "Courtside API", en: "Courtside API" },
    summary: {
      pt: "API REST de estatísticas da NBA em Go e PostgreSQL, com times, jogadores, jogos e a classificação da temporada.",
      en: "A REST API for NBA statistics in Go and PostgreSQL, covering teams, players, games and season standings.",
    },
    highlights: [
      {
        pt: "Classificação da temporada calculada direto no SQL",
        en: "Season standings computed directly in SQL",
      },
      {
        pt: "net/http da biblioteca padrão e driver pgx, em handlers e repositórios",
        en: "Standard library net/http and pgx, split into handlers and repositories",
      },
      {
        pt: "Banco sobe pelo Docker Compose já com os dados",
        en: "Database starts with Docker Compose, already seeded",
      },
    ],
    role: null,
    tags: ["Go", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/joaom-abreu/courtside-api",
    liveUrl: null,
    media: null,
  },
  {
    id: "conci",
    date: "2026-10",
    status: PROJECT_STATUS.inProgress,
    title: { pt: "Cônci", en: "Cônci" },
    summary: {
      pt: "Plataforma web feita em equipe de quatro pessoas na PUC Minas que conecta clientes a prestadores de serviço autônomos, com busca por categoria, agenda e avaliações.",
      en: "A web platform built by a team of four at PUC Minas that connects clients with independent service providers, with category search, scheduling and reviews.",
    },
    highlights: [
      {
        pt: "API em Spring Boot e RESTHeart sobre MongoDB Atlas",
        en: "API built with Spring Boot and RESTHeart on MongoDB Atlas",
      },
      {
        pt: "Front-end em React com TypeScript e Material UI",
        en: "React front end with TypeScript and Material UI",
      },
      {
        pt: "Docker Compose, sprints e Git Flow",
        en: "Docker Compose, sprints and Git Flow",
      },
    ],
    role: {
      pt: "Desenvolvedor back-end: fiz parte da API, a dockerização do projeto com Docker Compose e parte da configuração do MongoDB Atlas. Também organizo as tarefas da sprint e envio as entregas.",
      en: "Back-end developer: I built part of the API, containerized the project with Docker Compose and handled part of the MongoDB Atlas setup. I also organize sprint tasks and submit the deliverables.",
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
  {
    id: "portfolio",
    date: "2026-10",
    status: PROJECT_STATUS.published,
    title: { pt: "Site de Portfólio", en: "Portfolio Website" },
    summary: {
      pt: "Este site, em português e inglês, com uma API própria em Vercel Functions que busca meus dados do GitHub e conta as visitas no Supabase.",
      en: "This website, in Portuguese and English, with its own API on Vercel Functions that fetches my GitHub data and counts visits in Supabase.",
    },
    highlights: [
      {
        pt: "Contador de visitas que não guarda IP (hash que muda todo dia)",
        en: "Visit counter that never stores IPs (daily rotating hash)",
      },
      {
        pt: "Roda inteiro em Docker Compose, com testes e CI no GitHub Actions",
        en: "Runs on Docker Compose, with tests and CI on GitHub Actions",
      },
      {
        pt: "Design system próprio documentado em /design",
        en: "Custom design system documented at /design",
      },
    ],
    role: null,
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
]);
