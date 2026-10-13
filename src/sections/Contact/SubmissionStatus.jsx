import { CircleAlert, CircleCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SUBMISSION_STATUS } from "@/sections/Contact/useContactSubmission.js";
import { joinClassNames } from "@/shared/lib/classNames.js";
import { SEND_COOLDOWN_SECONDS } from "@/shared/services/emailService.js";
import styles from "./SubmissionStatus.module.css";

const STATUS_MESSAGES = {
  [SUBMISSION_STATUS.success]: {
    textKey: "contact.form.status.success",
    icon: CircleCheck,
    role: "status",
    className: styles.success,
  },
  [SUBMISSION_STATUS.error]: {
    textKey: "contact.form.status.error",
    icon: CircleAlert,
    role: "alert",
    className: styles.failure,
  },
  [SUBMISSION_STATUS.cooldown]: {
    textKey: "contact.form.status.cooldown",
    icon: CircleAlert,
    role: "alert",
    className: styles.failure,
  },
};

function SubmissionStatus({ status }) {
  const { t } = useTranslation();
  const message = STATUS_MESSAGES[status];

  if (!message) {
    return null;
  }

  const Icon = message.icon;

  return (
    <p
      className={joinClassNames(styles.status, message.className)}
      role={message.role}
    >
      <Icon className={styles.icon} aria-hidden="true" />
      {t(message.textKey, { seconds: SEND_COOLDOWN_SECONDS })}
    </p>
  );
}

export default SubmissionStatus;
