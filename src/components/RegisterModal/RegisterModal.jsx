import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
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
    if (value && !validateUrl(value)) {
      setAvatarError("(Please enter a valid image URL)");
    } else {
      setAvatarError("");
    }
  }

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
    if (value && !validateEmail(value)) {
      setEmailError("(Please enter a valid email)");
    } else {
      setEmailError("");
    }
  }

  function handlePasswordChange(e) {
    const value = e.target.value;
    setPassword(value);
    if (value && value.length < 6) {
      setPasswordError("(Password must be at least 6 characters)");
    } else {
      setPasswordError("");
    }
  }

  function handleNameChange(e) {
    const value = e.target.value;
    setName(value);
    if (value && !value.trim()) {
      setNameError("(Please enter your name)");
    } else {
      setNameError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("(Please enter a valid email)");
      valid = false;
    }
    if (password.length < 6) {
      setPasswordError("(Password must be at least 6 characters)");
      valid = false;
    }
    if (!name.trim()) {
      setNameError("(Please enter your name)");
      valid = false;
    }
    if (!validateUrl(avatar)) {
      setAvatarError("(Please enter a valid image URL)");
      valid = false;
    }

    if (!valid) return;
    onRegister({ email, password, name, avatar });
  }

  const isFormValid =
    email &&
    password &&
    name &&
    avatar &&
    !emailError &&
    !passwordError &&
    !nameError &&
    !avatarError;

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Register"
      isOpen={true}
      onClose={onClose}
      onSubmit={handleSubmit}
      isButtonDisabled={!isFormValid}
      additionalButtons={
        <button
          type="button"
          className="register-modal__login-button"
          onClick={onLoginClick}
        >
          or Log In
        </button>
      }
    >
      <label className="form-modal__label">
        <div className="form-modal__label-row">
          <span
            className={`form-modal__label-text${
              nameError ? " form-modal__label-text_error" : ""
            }`}
          >
            Name *
          </span>
          {nameError && <span className="form-modal__error">{nameError}</span>}
        </div>
        <input
          className={`form-modal__input${
            nameError ? " form-modal__input_error" : ""
          }`}
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>

      <label className="form-modal__label">
        <div className="form-modal__label-row">
          <span
            className={`form-modal__label-text${
              emailError ? " form-modal__label-text_error" : ""
            }`}
          >
            Email *
          </span>
          {emailError && (
            <span className="form-modal__error">{emailError}</span>
          )}
        </div>
        <input
          className={`form-modal__input${
            emailError ? " form-modal__input_error" : ""
          }`}
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>

      <label className="form-modal__label">
        <div className="form-modal__label-row">
          <span
            className={`form-modal__label-text${
              passwordError ? " form-modal__label-text_error" : ""
            }`}
          >
            Password *
          </span>
          {passwordError && (
            <span className="form-modal__error">{passwordError}</span>
          )}
        </div>
        <input
          className={`form-modal__input${
            passwordError ? " form-modal__input_error" : ""
          }`}
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>

      <label className="form-modal__label">
        <div className="form-modal__label-row">
          <span
            className={`form-modal__label-text${
              avatarError ? " form-modal__label-text_error" : ""
            }`}
          >
            Avatar URL *
          </span>
          {avatarError && (
            <span className="form-modal__error">{avatarError}</span>
          )}
        </div>
        <input
          className={`form-modal__input${
            avatarError ? " form-modal__input_error" : ""
          }`}
          type="url"
          value={avatar}
          onChange={handleAvatarChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
