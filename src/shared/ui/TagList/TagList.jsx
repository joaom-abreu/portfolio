import Tag from "@/shared/ui/Tag/Tag.jsx";
import styles from "./TagList.module.css";

function TagList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li className={styles.item} key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}

export default TagList;
