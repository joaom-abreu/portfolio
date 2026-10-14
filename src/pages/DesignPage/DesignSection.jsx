import styles from "./DesignSection.module.css";

function DesignSection({ id, title, note, children }) {
  const titleId = `${id}-title`;

  return (
    <section className={styles.section} id={id} aria-labelledby={titleId}>
      <div className={styles.header}>
        <h2 className={styles.title} id={titleId}>
          {title}
        </h2>
        {note && <p className={styles.note}>{note}</p>}
      </div>
      {children}
    </section>
  );
}

export default DesignSection;
