import React, { useContext } from "react";
import "./Sidebar.css";
import "../Profile/Profile.css";
import avatar from "../../assets/avatar.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Sidebar({ onEditProfile, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          className="sidebar__avatar"
          src={avatar}
          alt="Default avatar image"
        />
        <span className="sidebar__username">{currentUser?.name}</span>
      </div>
      <div className="sidebar__actions">
      <button
          className="sidebar__edit-button"
          onClick={onEditProfile}
        >
          Change profile data
        </button>
      <button
          className="sidebar__signout-button"
          onClick={onSignOut}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
