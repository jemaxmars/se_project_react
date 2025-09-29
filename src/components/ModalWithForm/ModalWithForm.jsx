import "./ModalWithForm.css";
import modalClose from "../../assets/modalClose.svg";

function ModalWithForm({
  children,
  buttonText, // <-- changed from buttonText
  title,
  isOpen,
  onClose,
  onSubmit,
  isbuttonDisabled,
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
            className="form-modal__button"
            type="submit"
            disabled={isbuttonDisabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
