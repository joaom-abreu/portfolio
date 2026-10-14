import { buildSparkline } from "@/shared/lib/sparkline.js";
import { joinClassNames } from "@/shared/lib/classNames.js";
import styles from "./Sparkline.module.css";

const SIZE = { width: 96, height: 24, padding: 2 };
const VIEW_BOX = `0 0 ${SIZE.width} ${SIZE.height}`;

function Sparkline({ values, className }) {
  const { linePoints, areaPath } = buildSparkline(values, SIZE);

  return (
    <svg
      className={joinClassNames(styles.sparkline, className)}
      viewBox={VIEW_BOX}
      width={SIZE.width}
      height={SIZE.height}
      aria-hidden="true"
    >
      <path className={styles.area} d={areaPath} />
      <polyline className={styles.line} points={linePoints} />
    </svg>
  );
}

export default Sparkline;
