import "./ItemModal.css";
import itemModalClose from "../../assets/itemModalClose.svg";
import { useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ isOpen, onClose, card, onDeleteItem }) {
  if (!card) return null; 

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser?._id;
  const [isDeleting, setIsDeleting] = useState(false);

  const itemDeletebuttonClassName = `modal__delete-button ${
    isOwn ? "" : "modal__delete-button_hidden"
  }`;

  const handleCloseClick = () => {
    onClose();
  };

  function handleDeleteClick() {
    setIsDeleting(true);
    onDeleteItem(card._id);
  }

  return (
    <div className={`item-modal modal ${isOpen ? "item-modal_opened" : ""}`}>
      <div className="item-modal__content_type_image">
        <button
          onClick={handleCloseClick}
          type="button"
          className="item-modal__close_type_preview"
        >
          <img
            src={itemModalClose}
            alt="X-Icon"
            className="item-modal__close-icon_type_preview"
          />
        </button>
        <img
          src={card.imageUrl}
          alt={card.name}
          className="item-modal__image"
        />
        <div className="item-modal__footer">
          <h2 className="item-modal__caption">{card.name}</h2>
          <p className="item-modal__weather">Weather: {card.weather}</p>
          <button
            className="modal__delete-button"
            type="button"
            onClick={handleDeleteClick}
            disabled={isDeleting}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
