import { useEffect, useState } from "react";

const HEADER_HEIGHT_TOKEN = "--header-height";
const BOUNDARY_OFFSET = 8;
const BOTTOM_MARGIN = "-50%";

function readHeaderHeight() {
  const rootStyle = getComputedStyle(document.documentElement);
  return Number.parseFloat(rootStyle.getPropertyValue(HEADER_HEIGHT_TOKEN));
}

function buildRootMargin() {
  const topMargin = readHeaderHeight() + BOUNDARY_OFFSET;
  return `-${topMargin}px 0px ${BOTTOM_MARGIN} 0px`;
}

export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const visibleIds = new Set();

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleIds.add(entry.target.id);
        } else {
          visibleIds.delete(entry.target.id);
        }
      });

      setActiveId(sectionIds.find((id) => visibleIds.has(id)) ?? null);
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: buildRootMargin(),
    });

    sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
