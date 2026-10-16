import { sortByNewest } from "@/shared/lib/sortByNewest.js";

export const PROJECT_STATUS = {
  published: "published",
  inProgress: "in-progress",
};

export const projects = sortByNewest([
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
    media: {
      src: "/projects/scribd-to-pdf.webp",
      alt: {
        pt: "Terminal rodando o scribd-to-pdf: o documento é aberto, as páginas são capturadas uma a uma e o caminho do PDF salvo aparece no final.",
        en: "Terminal running scribd-to-pdf: the document is opened, the pages are captured one by one and the path of the saved PDF appears at the end.",
      },
    },
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
]);
