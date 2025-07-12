import "./ItemModal.css";
import itemModalClose from "../../assets/itemModalClose.svg";

function ItemModal({ isOpen, onClose, card }) {
  return (
    <div className={`item-modal ${isOpen ? "item-modal_opened" : ""}`}>
      {" "}
      <div className="item-modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="item-modal__close_type_preview"
        >
          <img
            src={itemModalClose}
            alt="X-Icon"
            className="item-modal__close-icon_type_preview"
          />
        </button>
        <img src={card.link} alt={card.name} className="item-modal__image" />
        <div className="item-modal__footer">
          <h2 className="item-modal__caption">{card.name}</h2>
          <p className="item-modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
