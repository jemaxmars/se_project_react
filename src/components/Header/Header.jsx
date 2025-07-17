import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";
import { useState, useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

// Accept the new prop: isProfilePage
function Header({ handleAddClick, weatherData, isProfilePage }) {
  // <--- ADD isProfilePage HERE
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
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    // use the prop to conditionally apply a class
    <header
      className={`header ${isProfilePage ? "header_on-profile-page" : ""}`}
    >
      {" "}
      <img className="header__logo" src={logo} alt="WTWR logo" />
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
