import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/shared/hooks/useTheme.js";
import { DARK_THEME } from "@/shared/lib/theme.js";
import IconButton from "@/shared/ui/IconButton/IconButton.jsx";

function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === DARK_THEME;
  const icon = isDark ? Sun : Moon;
  const label = isDark ? t("theme.switchToLight") : t("theme.switchToDark");

  return <IconButton icon={icon} label={label} onClick={toggleTheme} />;
}

export default ThemeToggle;
