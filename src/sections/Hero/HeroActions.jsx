import { FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { findContact } from "@/data/contacts.js";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import { getLinkProps } from "@/shared/lib/externalLink.js";
import Button from "@/shared/ui/Button/Button.jsx";
import IconButton from "@/shared/ui/IconButton/IconButton.jsx";
import styles from "./HeroActions.module.css";

const SOCIAL_LINKS = [
  { contact: findContact("github"), icon: FaGithub },
  { contact: findContact("linkedin"), icon: FaLinkedin },
  { contact: findContact("email"), icon: Mail },
];

function HeroActions() {
  const { t } = useTranslation();
  const localize = useLocalize();

  return (
    <div className={styles.actions}>
      <ul className={styles.links}>
        {SOCIAL_LINKS.map(({ contact, icon }) => (
          <li key={contact.id}>
            <IconButton
              icon={icon}
              label={localize(contact.label)}
              href={contact.href}
              {...getLinkProps(contact.href)}
            />
          </li>
        ))}
      </ul>
      <span className={styles.divider} aria-hidden="true" />
      <Button className={styles.resume} iconLeft={FileText}>
        {t("hero.resume")}
      </Button>
    </div>
  );
}

export default HeroActions;
