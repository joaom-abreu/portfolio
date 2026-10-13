import { ArrowUpRight, Download, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getResume } from "@/data/resume.js";
import { NEW_TAB_LINK_PROPS } from "@/shared/lib/externalLink.js";
import { LANGUAGE_OPTIONS } from "@/shared/lib/language.js";
import Button from "@/shared/ui/Button/Button.jsx";
import IconButton from "@/shared/ui/IconButton/IconButton.jsx";
import SegmentedControl from "@/shared/ui/SegmentedControl/SegmentedControl.jsx";
import styles from "./ResumeViewer.module.css";

function ResumeViewer({ titleId, onClose }) {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.resolvedLanguage);
  const resume = getResume(language);

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.title} id={titleId}>
          {t("resume.title")}
        </h2>
        <SegmentedControl
          label={t("resume.documentLanguage")}
          options={LANGUAGE_OPTIONS}
          value={language}
          onChange={setLanguage}
        />
        <div className={styles.actions}>
          <Button
            variant="ghost"
            size="sm"
            iconRight={ArrowUpRight}
            href={resume.url}
            {...NEW_TAB_LINK_PROPS}
          >
            {t("resume.openInNewTab")}
          </Button>
          <Button
            size="sm"
            iconLeft={Download}
            href={resume.url}
            download={resume.fileName}
          >
            {t("resume.download")}
          </Button>
          <IconButton icon={X} label={t("resume.close")} onClick={onClose} />
        </div>
      </header>
      <iframe
        key={resume.url}
        className={styles.document}
        src={resume.url}
        title={t("resume.frameTitle")}
      />
      <p className={styles.footer}>{resume.fileName}</p>
    </>
  );
}

export default ResumeViewer;
