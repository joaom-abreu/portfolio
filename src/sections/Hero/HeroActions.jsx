import { FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { findContact } from "@/data/contacts.js";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import { getLinkProps } from "@/shared/lib/externalLink.js";
import Button from "@/shared/ui/Button/Button.jsx";
import { CONTACT_ICONS } from "@/shared/ui/contactIcons.js";
import IconButton from "@/shared/ui/IconButton/IconButton.jsx";
import styles from "./HeroActions.module.css";

const SOCIAL_CONTACTS = ["github", "linkedin", "email"].map(findContact);

function HeroActions() {
  const { t } = useTranslation();
  const localize = useLocalize();

  return (
    <div className={styles.actions}>
      <ul className={styles.links}>
        {SOCIAL_CONTACTS.map((contact) => (
          <li key={contact.id}>
            <IconButton
              icon={CONTACT_ICONS[contact.id]}
              label={localize(contact.label)}
              href={localize(contact.href)}
              {...getLinkProps(localize(contact.href))}
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
