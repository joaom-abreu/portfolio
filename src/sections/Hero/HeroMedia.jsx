import { profile } from "@/data/profile.js";
import ApiCard from "@/sections/Hero/ApiCard.jsx";
import {
  profileSummaryRequest,
  profileSummarySample,
} from "@/sections/Hero/profileSummarySample.js";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import { joinClassNames } from "@/shared/lib/classNames.js";
import styles from "./HeroMedia.module.css";

const PHOTO_WIDTH = 260;
const PHOTO_HEIGHT = 325;

function HeroMedia({ className }) {
  const localize = useLocalize();
  const body = {
    ...profileSummarySample.body,
    last_push: localize(profileSummarySample.body.last_push),
  };

  return (
    <div className={joinClassNames(styles.media, className)}>
      <img
        className={styles.photo}
        src={profile.photo}
        alt={profile.name}
        width={PHOTO_WIDTH}
        height={PHOTO_HEIGHT}
        loading="eager"
      />
      <ApiCard
        className={styles.card}
        method={profileSummaryRequest.method}
        path={profileSummaryRequest.path}
        status={profileSummarySample.status}
        body={body}
      />
    </div>
  );
}

export default HeroMedia;
