import React from "react";
import "./ConfirmDeleteModal.css";
import confirmClose from "../../assets/confirmClose.svg";

function ConfirmDeleteModal({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;
  return (
    <div className="confirm-modal confirm-modal_opened">
      <div className="confirm-modal__content">
        <button
          className="confirm-modal__close"
          type="button"
          onClick={onClose}
        >
          <img
            src={confirmClose}
            alt="Close"
            className="confirm-modal__close-icon"
          />
        </button>
        <p className="confirm-modal__message">{message}</p>
        <div className="confirm-modal__buttons">
          <button
            className="confirm-modal__button confirm-modal__button_type_confirm"
            onClick={onConfirm}
          >
            Yes, delete item
          </button>
          <button
            className="confirm-modal__button confirm-modal__button_type_cancel"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
