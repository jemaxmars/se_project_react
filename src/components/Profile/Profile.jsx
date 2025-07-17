import React from "react";
import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ onCardClick }) {
  return (
    <div className="profile profile-page">
      <section className="profilesidebar">
        <Sidebar />
      </section>
      <section className="profileclothes-items">
        <ClothesSection onCardClick={onCardClick} />
      </section>
    </div>
  );
}

export default Profile;
