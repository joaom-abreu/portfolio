import { Trans, useTranslation } from "react-i18next";
import { DESIGN_SECTION_ID, TYPE_FAMILIES } from "@/data/designSystem.js";
import Container from "@/layout/Container/Container.jsx";
import BreakpointList from "@/pages/DesignPage/BreakpointList.jsx";
import ColorTable from "@/pages/DesignPage/ColorTable.jsx";
import ComponentShowcase from "@/pages/DesignPage/ComponentShowcase.jsx";
import DesignNav from "@/pages/DesignPage/DesignNav.jsx";
import DesignSection from "@/pages/DesignPage/DesignSection.jsx";
import RadiusScale from "@/pages/DesignPage/RadiusScale.jsx";
import SpacingScale from "@/pages/DesignPage/SpacingScale.jsx";
import TypeScale from "@/pages/DesignPage/TypeScale.jsx";
import { ROUTES } from "@/shared/lib/routes.js";
import styles from "./DesignPage.module.css";

function DesignPage() {
  const { t } = useTranslation();

  return (
    <Container className={styles.page}>
      <DesignNav />
      <div className={styles.content}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>{ROUTES.design}</p>
          <h1 className={styles.title}>{t("design.title")}</h1>
          <p className={styles.lead}>
            <Trans
              i18nKey="design.intro"
              components={{ file: <code className={styles.file} /> }}
            />
          </p>
        </header>
        <DesignSection
          id={DESIGN_SECTION_ID.colors}
          title={t("design.sections.colors")}
          note={t("design.colors.note")}
        >
          <ColorTable labelledBy={`${DESIGN_SECTION_ID.colors}-title`} />
        </DesignSection>
        <DesignSection
          id={DESIGN_SECTION_ID.typography}
          title={t("design.sections.typography")}
          note={TYPE_FAMILIES}
        >
          <TypeScale />
        </DesignSection>
        <div className={styles.pair}>
          <DesignSection
            id={DESIGN_SECTION_ID.spacing}
            title={t("design.sections.spacing")}
          >
            <SpacingScale />
          </DesignSection>
          <DesignSection
            id={DESIGN_SECTION_ID.radius}
            title={t("design.sections.radius")}
          >
            <RadiusScale />
          </DesignSection>
        </div>
        <DesignSection
          id={DESIGN_SECTION_ID.components}
          title={t("design.sections.components")}
        >
          <ComponentShowcase />
        </DesignSection>
        <DesignSection
          id={DESIGN_SECTION_ID.breakpoints}
          title={t("design.sections.breakpoints")}
        >
          <BreakpointList />
        </DesignSection>
      </div>
    </Container>
  );
}

export default DesignPage;
