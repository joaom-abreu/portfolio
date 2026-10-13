import { useEffect, useRef, useState } from "react";

const VIEWPORT_BOTTOM_INSET = "-10%";
const OBSERVER_OPTIONS = {
  rootMargin: `0px 0px ${VIEWPORT_BOTTOM_INSET} 0px`,
};

export function useReveal() {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setIsRevealed(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      OBSERVER_OPTIONS,
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isRevealed };
}
