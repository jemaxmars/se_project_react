import React from "react";
import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  onCardClick,
  clothingItems,
  onAddClick,
  setIsEditProfileOpen,
  onSignOut,
}) {
  return (
    <div className="profile profile-page">
      <section className="profilesidebar">
        <Sidebar
          onEditProfile={() => setIsEditProfileOpen(true)}
          onSignOut={onSignOut}
        />
      </section>
      <section className="profileclothes-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          onAddClick={onAddClick}
        />
      </section>
      {/* Remove the buttons from here */}
    </div>
  );
}

export default Profile;
