export const profile = {
  name: "João Mário Abreu",
  photo: "/images/photo.webp",
  eyebrow: {
    pt: "Engenharia de Software · PUC Minas",
    en: "Software Engineering · PUC Minas",
  },
  tagline: {
    pt: "Estudante em Belo Horizonte, Brasil. Interessado em backend e engenharia de dados.",
    en: "Student in Belo Horizonte, Brazil. Interested in backend and data engineering.",
  },
  taglineHighlight: {
    pt: "backend e engenharia de dados",
    en: "backend and data engineering",
  },
  about: [
    {
      pt: "Sou o João, estudante do 2º período de Engenharia de Software na PUC Minas, em Belo Horizonte. Gosto de APIs, bancos de dados e pipelines que transformam dados soltos em algo útil.",
      en: "I'm João, a second-semester Software Engineering student at PUC Minas, in Belo Horizonte. I like APIs, databases and pipelines that turn scattered data into something useful.",
    },
    {
      pt: "Na faculdade programo em Java e Python; por conta própria estudo Go, Docker e SQL. Também sou monitor de Computabilidade. Quero começar um estágio em backend ou dados em 2027 e, mais à frente, trabalhar em uma empresa internacional.",
      en: "At university I code in Java and Python; on my own I study Go, Docker and SQL. I'm also a teaching assistant for Computability. I want to start a backend or data internship in 2027 and, further ahead, work at an international company.",
    },
  ],
  stack: [
    {
      id: "languages",
      label: { pt: "Linguagens", en: "Languages" },
      items: ["Java", "Python", "Go", "JavaScript"],
    },
    {
      id: "backend",
      label: { pt: "Backend e dados", en: "Backend and data" },
      items: ["Spring", "SQL", "MongoDB"],
    },
    {
      id: "tools",
      label: { pt: "Ferramentas", en: "Tools" },
      items: ["Git", "Linux", "Docker", "IntelliJ"],
    },
  ],
};
