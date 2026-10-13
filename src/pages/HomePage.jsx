import { useTranslation } from "react-i18next";
import { sections } from "@/data/sections.js";
import Section from "@/layout/Section/Section.jsx";
import Hero from "@/sections/Hero/Hero.jsx";

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          number={section.number}
          title={t(section.titleKey)}
        />
      ))}
    </>
  );
}

export default HomePage;
