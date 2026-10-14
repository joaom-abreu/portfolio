import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { buildCanonicalUrl } from "@/shared/lib/canonicalUrl.js";

const CANONICAL_SELECTOR = 'link[rel="canonical"]';

export function useCanonicalUrl() {
  const { pathname } = useLocation();

  useEffect(() => {
    const link = document.querySelector(CANONICAL_SELECTOR);

    if (link) {
      link.href = buildCanonicalUrl(link.href, pathname);
    }
  }, [pathname]);
}
