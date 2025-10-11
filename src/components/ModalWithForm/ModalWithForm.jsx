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
  additionalButtons, 
}) {
  return (
    <div className={`form-modal ${isOpen ? "form-modal_opened" : ""}`}>
      <div className="form-modal__content">
        <h2 className="form-modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="form-modal__close">
          <img
            src={modalClose}
            alt="Close"
            className="form-modal__close-icon"
          />
        </button>
        <form className="form-modal__form" onSubmit={onSubmit}>
          {children}
          <div className="form-modal__button-row">
            <button
              className="form-modal__button"
              type="submit"
              disabled={isButtonDisabled}
            >
              {buttonText}
            </button>
            {additionalButtons && additionalButtons}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
