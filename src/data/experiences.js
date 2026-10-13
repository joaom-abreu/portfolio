export const EXPERIENCE_KIND = {
  work: "work",
  education: "education",
};

export const experiences = [
  {
    id: "computability-teaching-assistant",
    kind: EXPERIENCE_KIND.work,
    period: { pt: "Out 2026 — Dez 2026", en: "Oct 2026 — Dec 2026" },
    role: {
      pt: "Monitor de Computabilidade",
      en: "Teaching Assistant, Theory of Computation",
    },
    organization: {
      pt: "PUC Minas · Engenharia de Software",
      en: "PUC Minas · Software Engineering",
    },
    description: {
      pt: "Apoio estudantes de graduação na disciplina de Computabilidade, ajudando-os a compreender o conteúdo e a resolver exercícios.",
      en: "Support undergraduate students in the Theory of Computation course, helping them understand the course content and work through exercises.",
    },
  },
  {
    id: "software-engineering-degree",
    kind: EXPERIENCE_KIND.education,
    period: "2026 — 2029",
    role: {
      pt: "Bacharelado em Engenharia de Software",
      en: "Bachelor's degree in Software Engineering",
    },
    organization: {
      pt: "PUC Minas · Campus Lourdes",
      en: "PUC Minas · Lourdes campus",
    },
    description: {
      pt: "2º período. Conclusão prevista para 2029.",
      en: "Second semester. Expected graduation in 2029.",
    },
  },
];
