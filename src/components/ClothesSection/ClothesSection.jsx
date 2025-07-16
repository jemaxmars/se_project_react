import { useState } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function ClothesSection({ onCardClick }) {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  return (
    <div className="clothes__section">
      <div className="clothes__header">
        <p className="clothes__header-title">Your Items</p>
        <button type="button" className="clothes__section-add-btn">
          + Add New
        </button>
      </div>

      
      <ul className="cards__list">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
