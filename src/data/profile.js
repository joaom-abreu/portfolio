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
      pt: "Sou o João, estudante do 2º período de Engenharia de Software na PUC Minas. Minha maior paixão é o backend: construir APIs, modelar bancos de dados e automatizar tarefas repetitivas. Trabalho principalmente com Java e Python, e recentemente comecei meu primeiro projeto em Go. Atualmente busco meu primeiro estágio na área.",
      en: "I'm João, a second-semester Software Engineering student at PUC Minas. My biggest passion is backend: building APIs, modeling databases and automating repetitive tasks. I work mainly with Java and Python, and I recently started my first project in Go. I'm currently looking for my first internship in the field.",
    },
    {
      pt: "Fora do código, sou atleticano de coração, acompanho a NBA e gosto de aviação, geopolítica e literatura.",
      en: "Outside of code, I'm a die-hard Atlético Mineiro fan, I follow the NBA and I enjoy aviation, geopolitics and literature.",
    },
  ],
  stack: [
    {
      id: "languages",
      label: { pt: "Linguagens", en: "Languages" },
      items: ["Java", "Go", "Python", "SQL"],
    },
    {
      id: "backend",
      label: { pt: "Backend", en: "Backend" },
      items: ["Spring Boot"],
    },
    {
      id: "databases",
      label: { pt: "Bancos de dados", en: "Databases" },
      items: ["PostgreSQL", "MongoDB"],
    },
    {
      id: "tools",
      label: { pt: "DevOps e ferramentas", en: "DevOps & Tools" },
      items: ["Docker", "CI/CD", "Linux", "Git", "Vercel"],
    },
  ],
};
