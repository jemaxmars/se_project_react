import "./ModalWithForm.css";
import modalClose from "../../assets/modalClose.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  isButtonDisabled,
}) {
  return (
    <div className={`form-modal ${isOpen ? "form-modal_opened" : ""}`}>
      <div className="form-modal__content">
        <h2 className="form-modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="form-modal__close">
          <img
            src={modalClose}
            alt="X-Icon"
            className="form-modal__close-icon"
          />
        </button>
        <form onSubmit={onSubmit} className="form-modal__form">
          {children}
          <button
            type="submit"
            className="form-modal__submit"
            disabled={isButtonDisabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
