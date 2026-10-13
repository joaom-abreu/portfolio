import Container from "@/layout/Container/Container.jsx";
import SectionHeader from "@/layout/SectionHeader/SectionHeader.jsx";
import { useReveal } from "@/shared/hooks/useReveal.js";
import { joinClassNames } from "@/shared/lib/classNames.js";
import styles from "./Section.module.css";

function Section({ id, number, title, children }) {
  const { ref, isRevealed } = useReveal();
  const titleId = `${id}-title`;
  const innerClassNames = joinClassNames(
    styles.inner,
    isRevealed && styles.revealed,
  );

  return (
    <section
      className={styles.section}
      id={id}
      aria-labelledby={titleId}
      ref={ref}
    >
      <Container className={innerClassNames}>
        <SectionHeader number={number} title={title} titleId={titleId} />
        <div>{children}</div>
      </Container>
    </section>
  );
}

export default Section;
