import { useSyncExternalStore } from "react";

const BOTTOM_TOLERANCE = 2;
const EVENTS = ["scroll", "resize"];
const LISTENER_OPTIONS = { passive: true };

function subscribe(onChange) {
  EVENTS.forEach((event) =>
    window.addEventListener(event, onChange, LISTENER_OPTIONS),
  );

  return () =>
    EVENTS.forEach((event) => window.removeEventListener(event, onChange));
}

function isPageBottom() {
  const viewportBottom = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  return viewportBottom >= pageHeight - BOTTOM_TOLERANCE;
}

export function useIsPageBottom() {
  return useSyncExternalStore(subscribe, isPageBottom);
}
