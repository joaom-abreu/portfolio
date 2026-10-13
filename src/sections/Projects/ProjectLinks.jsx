import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import TextLink from "@/shared/ui/TextLink/TextLink.jsx";
import styles from "./ProjectLinks.module.css";

function ProjectLinks({ repoUrl, liveUrl }) {
  const { t } = useTranslation();
  const links = [
    { href: repoUrl, label: t("projects.repository") },
    { href: liveUrl, label: t("projects.liveSite") },
  ].filter((link) => link.href);

  if (links.length === 0) {
    return null;
  }

  return (
    <ul className={styles.links}>
      {links.map((link) => (
        <li key={link.href}>
          <TextLink href={link.href} icon={ArrowUpRight}>
            {link.label}
          </TextLink>
        </li>
      ))}
    </ul>
  );
}

export default ProjectLinks;
