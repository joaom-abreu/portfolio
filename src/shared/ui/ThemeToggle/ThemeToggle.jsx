import { Moon, Sun } from "lucide-react";
import messages from "@/locales/pt.json";
import { useTheme } from "@/shared/hooks/useTheme.js";
import { DARK_THEME } from "@/shared/lib/theme.js";
import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === DARK_THEME;
  const Icon = isDark ? Sun : Moon;
  const label = isDark
    ? messages.theme.switchToLight
    : messages.theme.switchToDark;

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
