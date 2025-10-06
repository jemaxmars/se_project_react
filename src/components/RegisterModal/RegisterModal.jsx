import React, { useState } from "react";
import registerClose from "../../assets/registerloginclose.png";
import "./RegisterModal.css";

function RegisterModal({ onRegister, onClose, onLoginClick }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarError, setAvatarError] = useState("");

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validateUrl(value) {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  function handleAvatarChange(e) {
    const value = e.target.value;
    setAvatar(value);
    if (!validateUrl(value)) {
      setAvatarError("Please enter a valid image URL");
    } else {
      setAvatarError("");
    }
  }

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  }

  function handlePasswordChange(e) {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  }

  function handleNameChange(e) {
    const value = e.target.value;
    setName(value);
    if (!value.trim()) {
      setNameError("Please enter your name");
    } else {
      setNameError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let valid = true;
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      valid = false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }
    if (!name.trim()) {
      setNameError("Please enter your name");
      valid = false;
    }
    if (!validateUrl(avatar)) {
      setAvatarError("Please enter a valid image URL");
      valid = false;
    }
    if (!valid) return;
    onRegister({ email, password, name, avatar });
  }

  return (
    <div className="register-modal__container">
      <form className="register-modal__form" onSubmit={handleSubmit}>
        <button
          type="button"
          className="register-modal__close-button"
          onClick={onClose}
        >
          <img
            src={registerClose}
            alt="Close"
            className="register-modal__close-icon"
          />
        </button>
        <h2 className="register-modal__title">Sign Up</h2>
        <label
          className={`register-modal__label${
            nameError ? " register-modal__label_error" : ""
          }`}
        >
          Name *
          <input
            className={`register-modal__input${
              nameError ? " register-modal__input_error" : ""
            }`}
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
          {nameError && (
            <span className="register-modal__error">{nameError}</span>
          )}
        </label>
        <label
          className={`register-modal__label${
            emailError ? " register-modal__label_error" : ""
          }`}
        >
          Email *
          <input
            className={`register-modal__input${
              emailError ? " register-modal__input_error" : ""
            }`}
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && (
            <span className="register-modal__error">{emailError}</span>
          )}
        </label>
        <label
          className={`register-modal__label${
            passwordError ? " register-modal__label_error" : ""
          }`}
        >
          Password *
          <input
            className={`register-modal__input${
              passwordError ? " register-modal__input_error" : ""
            }`}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && (
            <span className="register-modal__error">{passwordError}</span>
          )}
        </label>
        <label
          className={`register-modal__label${
            avatarError ? " register-modal__label_error" : ""
          }`}
        >
          Avatar URL *
          <input
            className={`register-modal__input${
              avatarError ? " register-modal__input_error" : ""
            }`}
            type="url"
            value={avatar}
            onChange={handleAvatarChange}
            required
          />
          {avatarError && (
            <span className="register-modal__error">{avatarError}</span>
          )}
        </label>
        <div className="register-modal__button-row">
          <button
            type="submit"
            className="register-modal__button"
            disabled={
              !email ||
              !password ||
              !name ||
              !avatar ||
              !!emailError ||
              !!passwordError ||
              !!nameError ||
              !!avatarError
            }
          >
            Register
          </button>
          <button
            type="button"
            className="register-modal__login-button"
            onClick={onLoginClick}
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterModal;
