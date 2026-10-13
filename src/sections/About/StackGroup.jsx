import TagList from "@/shared/ui/TagList/TagList.jsx";
import styles from "./StackGroup.module.css";

function StackGroup({ label, items }) {
  return (
    <div className={styles.group}>
      <h4 className={styles.label}>{label}</h4>
      <TagList items={items} />
    </div>
  );
}

export default StackGroup;
