import { useState } from "react";
import {
  EmailCooldownError,
  sendContactMessage,
} from "@/shared/services/emailService.js";

export const SUBMISSION_STATUS = {
  idle: "idle",
  sending: "sending",
  success: "success",
  error: "error",
  cooldown: "cooldown",
};

function getFailureStatus(error) {
  return error instanceof EmailCooldownError
    ? SUBMISSION_STATUS.cooldown
    : SUBMISSION_STATUS.error;
}

export function useContactSubmission() {
  const [status, setStatus] = useState(SUBMISSION_STATUS.idle);

  async function submit(values) {
    setStatus(SUBMISSION_STATUS.sending);

    try {
      await sendContactMessage(values);
      setStatus(SUBMISSION_STATUS.success);
      return true;
    } catch (error) {
      setStatus(getFailureStatus(error));
      return false;
    }
  }

  return { status, submit };
}
