import { useTranslation } from "react-i18next";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import { joinClassNames } from "@/shared/lib/classNames.js";
import styles from "./ProjectMedia.module.css";

function ProjectMedia({ media }) {
  const { t } = useTranslation();
  const localize = useLocalize();

  if (!media) {
    return (
      <div className={joinClassNames(styles.media, styles.placeholder)}>
        {t("projects.mediaPlaceholder")}
      </div>
    );
  }

  return (
    <img
      className={styles.media}
      src={media.src}
      alt={localize(media.alt)}
      loading="lazy"
    />
  );
}

export default ProjectMedia;
