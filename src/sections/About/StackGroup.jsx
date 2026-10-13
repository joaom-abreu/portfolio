import Tag from "@/shared/ui/Tag/Tag.jsx";
import styles from "./StackGroup.module.css";

function StackGroup({ label, items }) {
  return (
    <div className={styles.group}>
      <h4 className={styles.label}>{label}</h4>
      <ul className={styles.items}>
        {items.map((item) => (
          <li className={styles.item} key={item}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StackGroup;
