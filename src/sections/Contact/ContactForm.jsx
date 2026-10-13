import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  HONEYPOT_FIELD,
  MESSAGE_MIN_LENGTH,
  NAME_MIN_LENGTH,
  contactFormDefaults,
  contactFormRules,
  isBotSubmission,
} from "@/sections/Contact/contactFormRules.js";
import SubmissionStatus from "@/sections/Contact/SubmissionStatus.jsx";
import {
  SUBMISSION_STATUS,
  useContactSubmission,
} from "@/sections/Contact/useContactSubmission.js";
import Button from "@/shared/ui/Button/Button.jsx";
import TextField from "@/shared/ui/TextField/TextField.jsx";
import styles from "./ContactForm.module.css";

const ERROR_VALUES = {
  nameMin: NAME_MIN_LENGTH,
  messageMin: MESSAGE_MIN_LENGTH,
};

function ContactForm() {
  const { t } = useTranslation();
  const { status, submit } = useContactSubmission();
  const isSending = status === SUBMISSION_STATUS.sending;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: contactFormDefaults });

  function getError(field) {
    return errors[field] && t(errors[field].message, ERROR_VALUES);
  }

  async function submitValidForm(values) {
    if (isBotSubmission(values)) {
      return;
    }

    const wasSent = await submit(values);

    if (wasSent) {
      reset();
    }
  }

  return (
    <form
      className={styles.form}
      noValidate
      onSubmit={handleSubmit(submitValidForm)}
    >
      <TextField
        label={t("contact.form.name")}
        placeholder={t("contact.form.namePlaceholder")}
        autoComplete="name"
        error={getError("name")}
        {...register("name", contactFormRules.name)}
      />
      <TextField
        type="email"
        label={t("contact.form.email")}
        placeholder={t("contact.form.emailPlaceholder")}
        autoComplete="email"
        error={getError("email")}
        {...register("email", contactFormRules.email)}
      />
      <TextField
        multiline
        label={t("contact.form.message")}
        placeholder={t("contact.form.messagePlaceholder")}
        error={getError("message")}
        {...register("message", contactFormRules.message)}
      />
      <div className={styles.honeypot} aria-hidden="true">
        <label>
          {t("contact.form.honeypot")}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register(HONEYPOT_FIELD)}
          />
        </label>
      </div>
      <div className={styles.footer}>
        <p className={styles.note}>{t("contact.form.copyNote")}</p>
        <SubmissionStatus status={status} />
        <Button
          className={styles.submit}
          type="submit"
          iconRight={Send}
          disabled={isSending}
        >
          {isSending ? t("contact.form.sending") : t("contact.form.submit")}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
