import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./MenuButton.module.css";

function MenuButton({ ref, isOpen, controls, onClick }) {
  const { t } = useTranslation();
  const Icon = isOpen ? X : Menu;
  const label = isOpen ? t("nav.closeMenu") : t("nav.openMenu");

  return (
    <button
      ref={ref}
      type="button"
      className={styles.button}
      aria-label={label}
      aria-expanded={isOpen}
      aria-controls={controls}
      onClick={onClick}
    >
      <Icon className={styles.icon} aria-hidden="true" />
    </button>
  );
}

export default MenuButton;
