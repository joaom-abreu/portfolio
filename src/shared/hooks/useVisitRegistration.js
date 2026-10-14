import { useEffect } from "react";
import { registerView } from "@/shared/services/portfolioApi.js";

const STORAGE_KEY = "jm-visit-registered";
const STORED_VALUE = "1";

function wasRegistered() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === STORED_VALUE;
  } catch {
    return false;
  }
}

function markRegistered() {
  try {
    sessionStorage.setItem(STORAGE_KEY, STORED_VALUE);
  } catch {
    return;
  }
}

function clearRegistration() {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    return;
  }
}

export function useVisitRegistration() {
  useEffect(() => {
    if (wasRegistered()) {
      return;
    }

    markRegistered();
    registerView().catch(clearRegistration);
  }, []);
}
