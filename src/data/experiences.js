export const EXPERIENCE_KIND = {
  work: "work",
  education: "education",
};

export const experiences = [
  {
    id: "computability-teaching-assistant",
    kind: EXPERIENCE_KIND.work,
    period: { pt: "2026 — atual", en: "2026 — present" },
    role: {
      pt: "Monitor de Computabilidade",
      en: "Computability teaching assistant",
    },
    organization: {
      pt: "PUC Minas · Engenharia de Software",
      en: "PUC Minas · Software Engineering",
    },
    description: {
      pt: "[Uma ou duas frases: o que você faz na monitoria, para quantos alunos, que tipo de dúvida resolve.]",
      en: "[One or two sentences: what you do as a teaching assistant, for how many students, what kind of questions you answer.]",
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
