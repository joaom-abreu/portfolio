import { useId, useRef } from "react";
import { sectionIds } from "@/data/sections.js";
import Container from "@/layout/Container/Container.jsx";
import HeaderNav from "@/layout/Header/HeaderNav.jsx";
import MenuButton from "@/layout/MobileMenu/MenuButton.jsx";
import MobileMenu from "@/layout/MobileMenu/MobileMenu.jsx";
import { useMobileMenu } from "@/layout/MobileMenu/useMobileMenu.js";
import { useScrollSpy } from "@/shared/hooks/useScrollSpy.js";
import LanguageSwitcher from "@/shared/ui/LanguageSwitcher/LanguageSwitcher.jsx";
import ThemeToggle from "@/shared/ui/ThemeToggle/ThemeToggle.jsx";
import styles from "./Header.module.css";

function Header() {
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const menuId = useId();
  const activeSectionId = useScrollSpy(sectionIds);
  const {
    isOpen: isMenuOpen,
    close: closeMenu,
    toggle: toggleMenu,
  } = useMobileMenu({ containerRef: headerRef, buttonRef: menuButtonRef });

  return (
    <header className={styles.header} ref={headerRef}>
      <Container className={styles.inner}>
        <MenuButton
          ref={menuButtonRef}
          isOpen={isMenuOpen}
          controls={menuId}
          onClick={toggleMenu}
        />
        <HeaderNav activeSectionId={activeSectionId} />
        <div className={styles.actions}>
          <div className={styles.language}>
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
        </div>
      </Container>
      {isMenuOpen && (
        <MobileMenu
          id={menuId}
          activeSectionId={activeSectionId}
          onNavigate={closeMenu}
        />
      )}
    </header>
  );
}

export default Header;
