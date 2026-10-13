import { FileText } from "lucide-react";
import { useCallback, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { getResume } from "@/data/resume.js";
import ResumeViewer from "@/sections/Hero/ResumeViewer.jsx";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery.js";
import { RESUME_MODAL_MEDIA_QUERY } from "@/shared/lib/breakpoints.js";
import { NEW_TAB_LINK_PROPS } from "@/shared/lib/externalLink.js";
import Button from "@/shared/ui/Button/Button.jsx";
import Modal from "@/shared/ui/Modal/Modal.jsx";

function ResumeButton({ className }) {
  const { t, i18n } = useTranslation();
  const titleId = useId();
  const [isRequested, setIsRequested] = useState(false);
  const hasRoomForModal = useMediaQuery(RESUME_MODAL_MEDIA_QUERY);
  const isOpen = isRequested && hasRoomForModal;

  const open = useCallback(() => setIsRequested(true), []);
  const close = useCallback(() => setIsRequested(false), []);

  const triggerProps = hasRoomForModal
    ? { "aria-haspopup": "dialog", onClick: open }
    : { href: getResume(i18n.resolvedLanguage).url, ...NEW_TAB_LINK_PROPS };

  return (
    <>
      <Button className={className} iconLeft={FileText} {...triggerProps}>
        {t("hero.resume")}
      </Button>
      <Modal isOpen={isOpen} onClose={close} labelledBy={titleId}>
        <ResumeViewer titleId={titleId} onClose={close} />
      </Modal>
    </>
  );
}

export default ResumeButton;
