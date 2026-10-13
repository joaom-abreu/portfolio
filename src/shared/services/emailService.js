import { send } from "@emailjs/browser";

const MS_PER_SECOND = 1000;

export const SEND_COOLDOWN_SECONDS = 30;

const config = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateIdForMe: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FOR_ME,
  templateIdForSender: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export class EmailCooldownError extends Error {
  name = "EmailCooldownError";
}

let lastSentAt = null;

function isCoolingDown() {
  if (lastSentAt === null) {
    return false;
  }

  return Date.now() - lastSentAt < SEND_COOLDOWN_SECONDS * MS_PER_SECOND;
}

function sendTemplate(templateId, params) {
  return send(config.serviceId, templateId, params, {
    publicKey: config.publicKey,
  });
}

async function sendConfirmationIfPossible(params) {
  try {
    await sendTemplate(config.templateIdForSender, params);
  } catch {
    return;
  }
}

export async function sendContactMessage({ name, email, message }) {
  if (isCoolingDown()) {
    throw new EmailCooldownError();
  }

  const params = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };

  await sendTemplate(config.templateIdForMe, params);
  lastSentAt = Date.now();
  await sendConfirmationIfPossible(params);
}
