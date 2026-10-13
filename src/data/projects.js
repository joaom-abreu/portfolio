import { sortByDate } from "@/shared/lib/sortByDate.js";

export const PROJECT_STATUS = {
  published: "published",
  inProgress: "in-progress",
  planned: "planned",
};

const PROJECT_DESCRIPTION_PLACEHOLDER = {
  pt: "[Uma frase: o problema e o que o projeto faz.]",
  en: "[One sentence: the problem and what the project does.]",
};

const PLANNED_DATE_LABEL = { pt: "2027 · planejado", en: "2027 · planned" };

export const projects = sortByDate([
  {
    id: "portfolio",
    date: "2026-10",
    dateLabel: { pt: "2026 · 2º semestre", en: "2026 · 2nd semester" },
    status: PROJECT_STATUS.published,
    title: { pt: "Portfólio pessoal", en: "Personal portfolio" },
    description: {
      pt: "Este site: página única com scroll, tema claro e escuro, PT/EN, currículo em PDF e integrações com GitHub API e EmailJS.",
      en: "This site: a single scrolling page with light and dark themes, PT/EN, a PDF résumé and integrations with the GitHub API and EmailJS.",
    },
    tags: ["React", "Vite", "EmailJS", "Vercel"],
    repoUrl: "https://github.com/joaom-abreu/portfolio",
    liveUrl: "https://joaoabreu.vercel.app",
    media: null,
  },
  {
    id: "computability",
    date: "2026-12",
    dateLabel: {
      pt: "2026 · em desenvolvimento",
      en: "2026 · in development",
    },
    status: PROJECT_STATUS.inProgress,
    title: {
      pt: "[Projeto de Computabilidade]",
      en: "[Computability project]",
    },
    description: PROJECT_DESCRIPTION_PLACEHOLDER,
    tags: ["[linguagem]", "[ferramenta]"],
    repoUrl: null,
    liveUrl: null,
    media: null,
  },
  {
    id: "nba-data",
    date: "2027-01",
    dateLabel: PLANNED_DATE_LABEL,
    status: PROJECT_STATUS.planned,
    title: { pt: "[Projeto de dados da NBA]", en: "[NBA data project]" },
    description: PROJECT_DESCRIPTION_PLACEHOLDER,
    tags: ["[linguagem]", "SQL", "Docker"],
    repoUrl: null,
    liveUrl: null,
    media: null,
  },
  {
    id: "aviation-pipeline",
    date: "2027-07",
    dateLabel: PLANNED_DATE_LABEL,
    status: PROJECT_STATUS.planned,
    title: {
      pt: "Pipeline de dados de aviação",
      en: "Aviation data pipeline",
    },
    description: {
      pt: "Coleta, tratamento e carga de dados de voos para análise.",
      en: "Collects, cleans and loads flight data for analysis.",
    },
    tags: ["Python", "Docker", "SQL"],
    repoUrl: null,
    liveUrl: null,
    media: null,
  },
]);
