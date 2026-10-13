import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import IconButton from "@/shared/ui/IconButton/IconButton.jsx";
import styles from "./MenuButton.module.css";

function MenuButton({ ref, isOpen, controls, onClick }) {
  const { t } = useTranslation();
  const icon = isOpen ? X : Menu;
  const label = isOpen ? t("nav.closeMenu") : t("nav.openMenu");

  return (
    <IconButton
      ref={ref}
      className={styles.button}
      icon={icon}
      label={label}
      aria-expanded={isOpen}
      aria-controls={controls}
      onClick={onClick}
    />
  );
}

export default MenuButton;
