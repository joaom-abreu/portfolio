import { ArrowUpRight } from "lucide-react";
import { useLocalize } from "@/shared/hooks/useLocalize.js";
import { getLinkProps } from "@/shared/lib/externalLink.js";
import { CONTACT_ICONS } from "@/shared/ui/contactIcons.js";
import styles from "./ContactLink.module.css";

function ContactLink({ contact }) {
  const localize = useLocalize();
  const Icon = CONTACT_ICONS[contact.id];
  const href = localize(contact.href);

  return (
    <a className={styles.link} href={href} {...getLinkProps(href)}>
      <span className={styles.icon}>
        <Icon className={styles.glyph} aria-hidden="true" />
      </span>
      <span className={styles.text}>
        <span className={styles.label}>{localize(contact.label)}</span>
        <span className={styles.value}>{contact.value}</span>
      </span>
      <ArrowUpRight className={styles.arrow} aria-hidden="true" />
    </a>
  );
}

export default ContactLink;
