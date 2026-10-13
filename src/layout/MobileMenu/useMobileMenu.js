import { useCallback, useState } from "react";
import { useEscapeKey } from "@/shared/hooks/useEscapeKey.js";
import { useFocusTrap } from "@/shared/hooks/useFocusTrap.js";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery.js";
import { useScrollLock } from "@/shared/hooks/useScrollLock.js";
import { DESKTOP_NAV_MEDIA_QUERY } from "@/shared/lib/breakpoints.js";

export function useMobileMenu({ containerRef, buttonRef }) {
  const [isRequested, setIsRequested] = useState(false);
  const hasDesktopNav = useMediaQuery(DESKTOP_NAV_MEDIA_QUERY);
  const isOpen = isRequested && !hasDesktopNav;

  const close = useCallback(() => setIsRequested(false), []);

  const toggle = useCallback(() => {
    setIsRequested((current) => !current);
  }, []);

  const closeAndRestoreFocus = useCallback(() => {
    close();
    buttonRef.current?.focus();
  }, [close, buttonRef]);

  useFocusTrap(containerRef, isOpen);
  useScrollLock(isOpen);
  useEscapeKey(closeAndRestoreFocus, isOpen);

  return { isOpen, close, toggle };
}
