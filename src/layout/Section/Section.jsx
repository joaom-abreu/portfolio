import Container from "@/layout/Container/Container.jsx";
import SectionHeader from "@/layout/SectionHeader/SectionHeader.jsx";
import styles from "./Section.module.css";

function Section({ id, number, title, children }) {
  const titleId = `${id}-title`;

  return (
    <section className={styles.section} id={id} aria-labelledby={titleId}>
      <Container className={styles.inner}>
        <SectionHeader number={number} title={title} titleId={titleId} />
        <div>{children}</div>
      </Container>
    </section>
  );
}

export default Section;
