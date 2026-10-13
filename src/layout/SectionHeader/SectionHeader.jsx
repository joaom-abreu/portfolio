import styles from "./SectionHeader.module.css";

function SectionHeader({ number, title, titleId }) {
  return (
    <div className={styles.header}>
      <span className={styles.number}>{number}</span>
      <h2 className={styles.title} id={titleId}>
        {title}
      </h2>
    </div>
  );
}

export default SectionHeader;
