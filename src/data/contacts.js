const EMAIL_ADDRESS = "abreujoaomr@gmail.com";
const WHATSAPP_NUMBER = "5531975292283";
const WHATSAPP_DISPLAY_NUMBER = "+55 31 97529-2283";
const WHATSAPP_MESSAGE = {
  pt: "Olá, João! Vi seu portfólio e gostaria de conversar.",
  en: "Hi, João! I saw your portfolio and would like to talk.",
};
const LINKEDIN_HANDLE = "joao-mario-abreu";
const GITHUB_USERNAME = "joaom-abreu";

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const contacts = [
  {
    id: "email",
    label: { pt: "E-mail", en: "Email" },
    value: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}`,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: WHATSAPP_DISPLAY_NUMBER,
    href: {
      pt: buildWhatsAppUrl(WHATSAPP_MESSAGE.pt),
      en: buildWhatsAppUrl(WHATSAPP_MESSAGE.en),
    },
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: `/in/${LINKEDIN_HANDLE}`,
    href: `https://www.linkedin.com/in/${LINKEDIN_HANDLE}`,
  },
  {
    id: "github",
    label: "GitHub",
    value: `@${GITHUB_USERNAME}`,
    href: `https://github.com/${GITHUB_USERNAME}`,
  },
];

export function findContact(id) {
  return contacts.find((contact) => contact.id === id);
}
