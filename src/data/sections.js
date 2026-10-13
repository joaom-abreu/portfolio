export const CONTACT_SECTION_ID = "contato";

export const sections = [
  { id: "sobre", number: "01", titleKey: "sections.about" },
  { id: "projetos", number: "02", titleKey: "sections.projects" },
  { id: "experiencia", number: "03", titleKey: "sections.experience" },
  { id: CONTACT_SECTION_ID, number: "04", titleKey: "sections.contact" },
];

export const sectionIds = sections.map((section) => section.id);
