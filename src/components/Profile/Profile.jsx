import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import defaultAvatar from "../../assets/avatar.svg";

function Profile({
  currentUser,
  onCardClick,
  clothingItems,
  onAddClick,
  setIsEditProfileOpen,
  onSignOut,
  onCardLike,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Debug: log currentUser
  console.log("currentUser:", currentUser);

  return (
    <div className="profile profile-page">
      <section className="profilesidebar">
        {isMobile ? (
          <div className="profile__sidebar-mobile">
            <div className="profile__sidebar-mobile-row">
              <img
                src={
                  currentUser && currentUser.avatar
                    ? currentUser.avatar
                    : defaultAvatar
                }
                alt="Avatar"
                className="sidebar__avatar"
              />
              <button
                className="sidebar__username"
                onClick={setIsEditProfileOpen}
                type="button"
              >
                {currentUser && currentUser.name
                  ? currentUser.name
                  : "Your Name"}
              </button>
            </div>
            <div className="profile__sidebar-mobile-actions">
              <button
                className="sidebar__edit-button"
                onClick={setIsEditProfileOpen}
                type="button"
              >
                Change profile data
              </button>
              <button className="sidebar__signout-button" onClick={onSignOut}>
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <Sidebar
            onEditProfile={() => setIsEditProfileOpen(true)}
            onSignOut={onSignOut}
            currentUser={currentUser}
          />
        )}
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
