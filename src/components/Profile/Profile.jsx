import React from "react";
import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";


function Profile({ onCardClick, clothingItems }) {
  return (
    <div className="profile profile-page">
      <section className="profilesidebar">
        <Sidebar />
      </section>
      <section className="profileclothes-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  );
}

export default Profile;
