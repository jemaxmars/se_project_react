// Header.jsx
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";
import { useState, useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

// Accept the new prop: isProfilePage
function Header({ handleAddClick, weatherData, isProfilePage }) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // <--- This return is part of the useEffect cleanup function
      window.removeEventListener("resize", handleResize);
    };
  }, []); // <--- This closes the useEffect hook correctly

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  // This is where the error implies the 'return' is happening.
  // It should be the main return for the Header functional component.
  return (
    // <--- This 'return' should be here, the very last statement of the Header function.
    <header
      className={`header ${isProfilePage ? "header_on-profile-page" : ""}`}
    >
      <Link to="/" className="header__logo">
        <img src={logo} alt="WTWR logo" />
      </Link>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      {!isMobile ? (
        <div className="header__desktop-nav">
          <ToggleSwitch />
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>
          <div className="header__user-container">
            <p className="header__username">Terrance Tegegne</p>
            <img src={avatar} alt="Avatar image" className="header__avatar" />
          </div>
        </div>
      ) : (
        <>
          <button onClick={toggleMobileMenu} className="header__menu-btn">
            <img src={menuIcon} alt="Open menu" />
          </button>

          <div
            className={`header__mobile-menu ${
              isMobileMenuOpened ? "header__mobile-menu_opened" : ""
            }`}
          >
            <div className="header__mobile-menu-content">
              <button onClick={toggleMobileMenu} className="header__close-btn">
                <img src={closeIcon} alt="Close menu" />
              </button>
              <div className="header__user-container header__user-container_mobile">
                <p className="header__username">Terrance Tegegne</p>
                <img
                  src={avatar}
                  alt="Avatar image"
                  className="header__avatar"
                />
              </div>
              <button
                onClick={() => {
                  handleAddClick();
                  toggleMobileMenu();
                }}
                type="button"
                className="header__add-clothes-btn header__add-clothes-btn_mobile"
              >
                + Add clothes
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
