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
  onCardLike, // <-- receive this!
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
          clothingItems={clothingItems}
          onCardClick={onCardClick}
          onAddClick={onAddClick}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
