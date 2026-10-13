import { useCallback, useEffect, useMemo, useState } from "react";
import {
  applyTheme,
  getOppositeTheme,
  readAppliedTheme,
  storeTheme,
} from "@/shared/lib/theme.js";
import { ThemeContext } from "@/shared/lib/themeContext.js";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readAppliedTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const nextTheme = getOppositeTheme(theme);
    storeTheme(nextTheme);
    setTheme(nextTheme);
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
}

export default ThemeProvider;
