import React from "react"; // Import React if you're using JSX
import "./Sidebar.css";
import "../Profile/Profile.css";
import avatar from "../../assets/avatar.svg";


function Sidebar() {
  return (
    <div className="sidebar">
          <img className="sidebar__avatar" src={avatar} alt="Default avatar image" />
          <p className="sidebar__username">Username</p>
    </div>
  );
}

export default Sidebar;
