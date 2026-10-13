import { contacts } from "@/data/contacts.js";
import ContactForm from "@/sections/Contact/ContactForm.jsx";
import ContactLink from "@/sections/Contact/ContactLink.jsx";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <ul className={styles.links}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <ContactLink contact={contact} />
          </li>
        ))}
      </ul>
      <ContactForm />
    </div>
  );
}

export default Contact;
