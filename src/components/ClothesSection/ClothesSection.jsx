import { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({ onCardClick, clothingItems, onAddClick }) {
  const currentUser = useContext(CurrentUserContext);

  // Filter items to show only those added by the current user
  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <div className="clothes__section">
      <div className="clothes__header">
        <p className="clothes__header-title">Your Items</p>
        <button
          type="button"
          className="clothes__section-add-button"
          onClick={onAddClick}
        >
          + Add New
        </button>
      </div>

      <ul className="clothes__section-items">
        {userItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
