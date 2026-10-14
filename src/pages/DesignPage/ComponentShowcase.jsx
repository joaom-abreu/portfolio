import { useTranslation } from "react-i18next";
import { SHOWCASE_INVALID_EMAIL, showcaseTags } from "@/data/designSystem.js";
import Button from "@/shared/ui/Button/Button.jsx";
import LanguageSwitcher from "@/shared/ui/LanguageSwitcher/LanguageSwitcher.jsx";
import TagList from "@/shared/ui/TagList/TagList.jsx";
import TextField from "@/shared/ui/TextField/TextField.jsx";
import ThemeToggle from "@/shared/ui/ThemeToggle/ThemeToggle.jsx";
import styles from "./ComponentShowcase.module.css";

function ShowcaseRow({ name, children }) {
  return (
    <li className={styles.row}>
      <span className={styles.name}>{name}</span>
      <div className={styles.demo}>{children}</div>
    </li>
  );
}

function ComponentShowcase() {
  const { t } = useTranslation();

  return (
    <ul className={styles.card}>
      <ShowcaseRow name="Button">
        <Button>{t("hero.resume")}</Button>
        <Button variant="secondary">{t("projects.liveSite")}</Button>
        <Button variant="ghost">{t("design.components.cancel")}</Button>
      </ShowcaseRow>
      <ShowcaseRow name="Tag">
        <TagList items={showcaseTags} />
      </ShowcaseRow>
      <ShowcaseRow name="Toggles">
        <LanguageSwitcher />
        <ThemeToggle />
      </ShowcaseRow>
      <ShowcaseRow name="TextField">
        <div className={styles.field}>
          <TextField
            label={t("contact.form.email")}
            type="email"
            defaultValue={SHOWCASE_INVALID_EMAIL}
            error={t("contact.form.errors.email")}
            autoComplete="off"
          />
        </div>
      </ShowcaseRow>
    </ul>
  );
}

export default ComponentShowcase;
