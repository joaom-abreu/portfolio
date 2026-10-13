import { useTranslation } from "react-i18next";
import { sections } from "@/data/sections.js";
import Section from "@/layout/Section/Section.jsx";
import About from "@/sections/About/About.jsx";
import Experience from "@/sections/Experience/Experience.jsx";
import Hero from "@/sections/Hero/Hero.jsx";
import Projects from "@/sections/Projects/Projects.jsx";

const SECTION_CONTENT = {
  sobre: About,
  projetos: Projects,
  experiencia: Experience,
};

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      {sections.map((section) => {
        const Content = SECTION_CONTENT[section.id];

        return (
          <Section
            key={section.id}
            id={section.id}
            number={section.number}
            title={t(section.titleKey)}
          >
            {Content && <Content />}
          </Section>
        );
      })}
    </>
  );
}

export default HomePage;
