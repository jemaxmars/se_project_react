import { useState } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ onCardClick, clothingItems, onAddClick }) {
  return (
    <div className="clothes__section">
      <div className="clothes__header">
        <p className="clothes__header-title">Your Items</p>
        <button
          type="button"
          className="clothes__section-add-btn"
          onClick={onAddClick}
        >
          + Add New
        </button>
      </div>

      <ul className="clothes__section-items">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
