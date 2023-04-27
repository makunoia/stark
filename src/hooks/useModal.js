import { useEffect } from "react";
import Modal from "../components/Modal";

const useModal = ({
  content = { title: "", caption: "", body: null },
  onClose,
  size = "default",
  style,
  show = false,
  centered = false,
  primaryButton,
  secondaryButton,
  tertiaryButton,
  remixIcon,
  icon,
}) => {
  const handleClose = (e) => {
    e.preventDefault();
    onClose && onClose();
  };

  const modal = (
    <Modal
      title={content.title}
      show={show}
      caption={content.caption}
      size={size}
      centered={centered}
      style={style}
      icon={icon}
      remixIcon={remixIcon}
      primaryButton={
        primaryButton && {
          label: primaryButton.label,
          onClick: primaryButton.onClick,
          loading: primaryButton.loading,
        }
      }
      secondaryButton={
        secondaryButton && {
          label: secondaryButton.label,
          onClick: secondaryButton.onClick,
          loading: secondaryButton.loading,
        }
      }
      tertiaryButton={tertiaryButton && tertiaryButton}
      onClose={onClose}
    >
      {content.body}
    </Modal>
  );

  return {
    modal: show ? modal : null,
  };
};

export default useModal;
