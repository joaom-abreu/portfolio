import { useEffect } from "react";

const ESCAPE_KEY = "Escape";

export function useEscapeKey(onEscape, isActive) {
  useEffect(() => {
    if (!isActive) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === ESCAPE_KEY) {
        onEscape();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onEscape, isActive]);
}
