import React from "react";
import "./Sidebar.css";
import "../Profile/Profile.css";
import avatar from "../../assets/avatar.svg";


function Sidebar() {
  return (
    <div className="sidebar">
          <img className="sidebar__avatar" src={avatar} alt="Default avatar image" />
          <p className="sidebar__username">Terrance Tegegne</p>
    </div>
  );
}

export default Sidebar;
