export const NAME_MIN_LENGTH = 2;
export const MESSAGE_MIN_LENGTH = 10;
export const HONEYPOT_FIELD = "website";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hasMinLength(value, minLength) {
  return value.trim().length >= minLength;
}

export const contactFormDefaults = {
  name: "",
  email: "",
  message: "",
  [HONEYPOT_FIELD]: "",
};

export const contactFormRules = {
  name: {
    validate: (value) =>
      hasMinLength(value, NAME_MIN_LENGTH) || "contact.form.errors.name",
  },
  email: {
    validate: (value) =>
      EMAIL_PATTERN.test(value.trim()) || "contact.form.errors.email",
  },
  message: {
    validate: (value) =>
      hasMinLength(value, MESSAGE_MIN_LENGTH) || "contact.form.errors.message",
  },
};

export function isBotSubmission(values) {
  return values[HONEYPOT_FIELD] !== "";
}
