const BACKGROUND_TOKEN = "--bg";

function onBackground(token) {
  return { foreground: token, background: BACKGROUND_TOKEN };
}

export const DESIGN_SECTION_ID = {
  colors: "cores",
  typography: "tipografia",
  spacing: "espacamento",
  radius: "raios",
  components: "componentes",
  breakpoints: "breakpoints",
};

export const designNavItems = [
  { id: DESIGN_SECTION_ID.colors, labelKey: "design.sections.colors" },
  { id: DESIGN_SECTION_ID.typography, labelKey: "design.sections.typography" },
  {
    id: DESIGN_SECTION_ID.spacing,
    labelKey: "design.sections.spacingAndRadius",
  },
  { id: DESIGN_SECTION_ID.components, labelKey: "design.sections.components" },
  {
    id: DESIGN_SECTION_ID.breakpoints,
    labelKey: "design.sections.breakpoints",
  },
];

export const designNavIds = designNavItems.map((item) => item.id);

export const colorTokens = [
  {
    name: "--bg",
    usage: { pt: "Fundo da página", en: "Page background" },
    contrast: null,
  },
  {
    name: "--surface",
    usage: { pt: "Cards e modal", en: "Cards and modal" },
    contrast: null,
  },
  {
    name: "--surface-2",
    usage: { pt: "Tags, inputs, código", en: "Tags, inputs, code" },
    contrast: null,
  },
  {
    name: "--text",
    usage: { pt: "Texto principal", en: "Main text" },
    contrast: onBackground("--text"),
  },
  {
    name: "--text-muted",
    usage: { pt: "Datas, metadados", en: "Dates, metadata" },
    contrast: onBackground("--text-muted"),
  },
  {
    name: "--accent",
    usage: { pt: "Links, números, ativo", en: "Links, numbers, active" },
    contrast: onBackground("--accent"),
  },
  {
    name: "--accent-fill",
    usage: { pt: "Botão primário", en: "Primary button" },
    contrast: {
      foreground: "--on-accent",
      background: "--accent-fill",
      labelKey: "design.colors.white",
    },
  },
  {
    name: "--border-strong",
    usage: { pt: "Contorno de controles", en: "Control outlines" },
    contrast: onBackground("--border-strong"),
  },
  {
    name: "--success",
    usage: { pt: "200 OK, envio feito", en: "200 OK, message sent" },
    contrast: onBackground("--success"),
  },
  {
    name: "--danger",
    usage: { pt: "Erros do formulário", en: "Form errors" },
    contrast: onBackground("--danger"),
  },
];

export const TYPE_FAMILIES = "Geist · Geist Mono";

export const typeStyles = [
  { id: "display-xl", metrics: "64/68", sample: "João Mário" },
  {
    id: "display-md",
    metrics: "40/44",
    sample: { pt: "Projetos", en: "Projects" },
  },
  { id: "title", metrics: "20/28", sample: "Courtside API" },
  {
    id: "body-lg",
    metrics: "18/30",
    sample: {
      pt: "Minha maior paixão é o backend.",
      en: "My biggest passion is backend.",
    },
  },
  {
    id: "body",
    metrics: "16/26",
    sample: {
      pt: "Descrição curta de um projeto.",
      en: "A short project description.",
    },
  },
  {
    id: "small",
    metrics: "14/22",
    sample: { pt: "Atualizado há 2 dias", en: "Updated 2 days ago" },
  },
  {
    id: "mono-label",
    metrics: "12/16",
    sample: { pt: "02 / Projetos", en: "02 / Projects" },
  },
  { id: "mono-code", metrics: "14/22", sample: "GET /api/joao → 200 OK" },
];

export const spacingTokens = [
  "--space-1",
  "--space-2",
  "--space-3",
  "--space-4",
  "--space-6",
  "--space-8",
  "--space-12",
  "--space-16",
  "--space-24",
  "--space-32",
];

export const radiusTokens = [
  {
    name: "--radius-sm",
    usage: { pt: "Tags", en: "Tags" },
    showsValue: true,
  },
  {
    name: "--radius-md",
    usage: { pt: "Botões", en: "Buttons" },
    showsValue: true,
  },
  {
    name: "--radius-lg",
    usage: { pt: "Cards", en: "Cards" },
    showsValue: true,
  },
  {
    name: "--radius-xl",
    usage: { pt: "Foto", en: "Photo" },
    showsValue: true,
  },
  {
    name: "--radius-full",
    usage: { pt: "Marcadores", en: "Markers" },
    showsValue: false,
  },
];

export const showcaseTags = ["Java", "Go", "PostgreSQL"];

export const SHOWCASE_INVALID_EMAIL = "ana@";

export const breakpoints = [
  {
    id: "sm",
    width: 640,
    note: { pt: "Repos em 2 colunas", en: "Repos in 2 columns" },
  },
  {
    id: "md",
    width: 768,
    note: { pt: "Menu deixa de ser gaveta", en: "Menu stops being a drawer" },
  },
  {
    id: "lg",
    width: 1024,
    note: {
      pt: "Rótulo da seção vira coluna",
      en: "Section label becomes a column",
    },
  },
  {
    id: "xl",
    width: 1280,
    note: { pt: "Conteúdo para em 1120px", en: "Content stops at 1120px" },
  },
];
