import { useTranslation } from "react-i18next";
import { MEDIA_KIND, getMediaKind } from "@/sections/Projects/mediaKind.js";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery.js";
import { joinClassNames } from "@/shared/lib/classNames.js";
import { REDUCED_MOTION_MEDIA_QUERY } from "@/shared/lib/motion.js";
import styles from "./ProjectMedia.module.css";

function ProjectVideo({ src, label }) {
  const prefersReducedMotion = useMediaQuery(REDUCED_MOTION_MEDIA_QUERY);

  return (
    <video
      className={styles.media}
      src={src}
      aria-label={label}
      autoPlay={!prefersReducedMotion}
      controls={prefersReducedMotion}
      preload="metadata"
      muted
      loop
      playsInline
    />
  );
}

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

  const description = localize(media.alt);

  if (getMediaKind(media.src) === MEDIA_KIND.video) {
    return <ProjectVideo src={media.src} label={description} />;
  }

  return (
    <img
      className={styles.media}
      src={media.src}
      alt={description}
      loading="lazy"
    />
  );
}

export default ProjectMedia;
