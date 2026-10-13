import { useEffect, useRef } from "react";
import { useScrollLock } from "@/shared/hooks/useScrollLock.js";
import styles from "./Modal.module.css";

function Modal({ isOpen, onClose, labelledBy, children }) {
  const dialogRef = useRef(null);

  useScrollLock(isOpen);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const closeOnScrimClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={labelledBy}
      onClose={onClose}
      onClick={closeOnScrimClick}
    >
      {isOpen && <div className={styles.panel}>{children}</div>}
    </dialog>
  );
}

export default Modal;
