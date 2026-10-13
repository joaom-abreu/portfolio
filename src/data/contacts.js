const EMAIL_ADDRESS = "[seu e-mail]";
const WHATSAPP_NUMBER = "[55319xxxxxxxx]";
const WHATSAPP_DISPLAY_NUMBER = "[+55 31 9xxxx-xxxx]";
const LINKEDIN_HANDLE = "joao-mario-abreu";
const GITHUB_USERNAME = "joaom-abreu";

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
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
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
