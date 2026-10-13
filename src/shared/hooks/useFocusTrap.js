import { useEffect } from "react";

const TAB_KEY = "Tab";
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function isVisible(element) {
  return element.getClientRects().length > 0;
}

function getFocusableElements(container) {
  return [...container.querySelectorAll(FOCUSABLE_SELECTOR)].filter(isVisible);
}

function getWrapTarget(container, isBackward) {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements.at(0);
  const lastElement = focusableElements.at(-1);
  const currentElement = document.activeElement;
  const isOutside = !container.contains(currentElement);

  if (isBackward && (isOutside || currentElement === firstElement)) {
    return lastElement;
  }

  if (!isBackward && (isOutside || currentElement === lastElement)) {
    return firstElement;
  }

  return null;
}

export function useFocusTrap(containerRef, isActive) {
  useEffect(() => {
    if (!isActive) {
      return undefined;
    }

    const container = containerRef.current;

    const handleKeyDown = (event) => {
      if (event.key !== TAB_KEY) {
        return;
      }

      const wrapTarget = getWrapTarget(container, event.shiftKey);

      if (wrapTarget) {
        event.preventDefault();
        wrapTarget.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [containerRef, isActive]);
}
