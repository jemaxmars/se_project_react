import React from "react";
import "./ConfirmDeleteModal.css";
import confirmClose from "../../assets/confirmClose.svg"; 

function ConfirmDeleteModal({ isOpen, onClose, onConfirm, title, message }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("confirm-modal_opened")) {
      onClose();
    }
  };

  return (
    <div
      className={`confirm-modal ${isOpen ? "confirm-modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="confirm-modal__content">
        <button
          type="button"
          className="confirm-modal__close"
          onClick={onClose}
        >
          <img
            src={confirmClose}
            alt="Close button"
            className="confirm-modal__close-icon"
          />
        </button>

        <p className="confirm-modal__message">
          {message ||
            "Are you sure you want to delete this item? This action is irreversible."}
        </p>
        <div className="confirm-modal__buttons">
          <button
            type="button"
            className="confirm-modal__button confirm-modal__button_type_confirm"
            onClick={onConfirm}
          >
            Yes, delete item
          </button>
          <button
            type="button"
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
