import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";
import { useState, useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({
  currentUser,
  onSignUpClick,
  onLoginClick,
  handleAddClick,
  weatherData,
  isProfilePage,
}) {
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
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="WTWR logo" />
      </Link>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      {!isMobile ? (
        <div className="header__desktop-nav">
          <ToggleSwitch />
          {currentUser ? (
            <>
              <button
                onClick={handleAddClick}
                type="button"
                className="header__add-clothes-button"
              >
                + Add clothes
              </button>
              <Link to="/profile" className="header__link">
                <div className="header__user-container">
                  <p className="header__username">{currentUser.name}</p>
                  <img
                    src={
                      currentUser && currentUser.avatar
                        ? currentUser.avatar
                        : avatar
                    }
                    alt="Avatar image"
                    className="header__avatar"
                  />
                </div>
              </Link>
            </>
          ) : (
            <>
              <button className="header__signup-button" onClick={onSignUpClick}>
                Sign Up
              </button>
              <button className="header__login-button" onClick={onLoginClick}>
                Log In
              </button>
            </>
          )}
        </div>
      ) : (
        <>
          <button onClick={toggleMobileMenu} className="header__menu-button">
            <img src={menuIcon} alt="Open menu" />
          </button>
          <div
            className={`header__mobile-menu ${
              isMobileMenuOpened ? "header__mobile-menu_opened" : ""
            }`}
          >
            <div className="header__mobile-menu-content">
              <button
                onClick={toggleMobileMenu}
                className="header__close-button"
              >
                <img src={closeIcon} alt="Close menu" />
              </button>

              <div className="header__user-container header__user-container_mobile">
                <p className="header__username">
                  {currentUser ? currentUser.name : ""}
                </p>
                <img
                  src={
                    currentUser && currentUser.avatar
                      ? currentUser.avatar
                      : avatar
                  }
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
                className="header__add-clothes-button header__add-clothes-button_mobile"
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
