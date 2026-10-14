import { useState } from "react";
import { useTranslation } from "react-i18next";
import { colorTokens } from "@/data/designSystem.js";
import ColorSwatch from "@/pages/DesignPage/ColorSwatch.jsx";
import ContrastBadge from "@/pages/DesignPage/ContrastBadge.jsx";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import { DARK_THEME, LIGHT_THEME } from "@/shared/lib/theme.js";
import { readTokens } from "@/shared/lib/themeTokens.js";
import styles from "./ColorTable.module.css";

const THEMES = [DARK_THEME, LIGHT_THEME];
const CONTRAST_TOKENS = colorTokens.flatMap(({ contrast }) =>
  contrast ? [contrast.foreground, contrast.background] : [],
);
const TOKEN_NAMES = [
  ...new Set([...colorTokens.map((token) => token.name), ...CONTRAST_TOKENS]),
];

function readThemeValues() {
  return THEMES.map((theme) => readTokens(TOKEN_NAMES, theme));
}

function ColorTable({ labelledBy }) {
  const { t } = useTranslation();
  const localize = useLocalize();
  const [themeValues] = useState(readThemeValues);

  return (
    <div
      className={styles.card}
      role="region"
      aria-labelledby={labelledBy}
      tabIndex={0}
    >
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">{t("design.colors.token")}</th>
            <th scope="col">{t("design.colors.dark")}</th>
            <th scope="col">{t("design.colors.light")}</th>
            <th scope="col">{t("design.colors.usage")}</th>
            <th scope="col">{t("design.colors.contrast")}</th>
          </tr>
        </thead>
        <tbody>
          {colorTokens.map((token) => (
            <tr key={token.name}>
              <th className={styles.name} scope="row">
                {token.name}
              </th>
              {THEMES.map((theme, index) => (
                <td key={theme}>
                  <ColorSwatch
                    token={token.name}
                    theme={theme}
                    value={themeValues[index][token.name]}
                  />
                </td>
              ))}
              <td className={styles.usage}>{localize(token.usage)}</td>
              <td>
                <ContrastBadge contrast={token.contrast} themes={themeValues} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ColorTable;
