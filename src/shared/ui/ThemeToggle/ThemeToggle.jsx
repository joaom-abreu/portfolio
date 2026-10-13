import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/shared/hooks/useTheme.js";
import { DARK_THEME } from "@/shared/lib/theme.js";
import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === DARK_THEME;
  const Icon = isDark ? Sun : Moon;
  const label = isDark ? t("theme.switchToLight") : t("theme.switchToDark");

  return (
    <button
      type="button"
      className={styles.button}
      aria-label={label}
      onClick={toggleTheme}
    >
      <Icon className={styles.icon} aria-hidden="true" />
    </button>
  );
}

export default ThemeToggle;
