import { useState } from "react";
import closeIcon from "../../assets/registerloginclose.png";
import { loginUser } from "../../utils/api";
import "./LoginModal.css";

function LoginModal({ onLogin, onClose, onSignUpClick }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    loginUser(form)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          onLogin(res); 
          onClose();
        } else {
          setError("Email or password incorrect");
        }
      })
      .catch((err) => {
        setError("Email or password incorrect");
      });
  }

  return (
    <div className="login-modal__container">
      <form className="login-modal__form" onSubmit={handleSubmit}>
        <button
          type="button"
          className="login-modal__close-button"
          onClick={onClose}
        >
          <img
            src={closeIcon}
            alt="Close"
            className="login-modal__close-icon"
          />
        </button>
        <h2 className="login-modal__title">Log In</h2>
        <label className="login-modal__label" htmlFor="email">
          Email *
        </label>
        <input
          className="login-modal__input"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <label className="login-modal__label" htmlFor="password">
          Password *
        </label>
        <input
          className="login-modal__input"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        {error && <div className="login-modal__error">{error}</div>}
        <div className="login-modal__button-row">
          <button
            className="login-modal__button"
            type="submit"
            disabled={!form.email || !form.password}
          >
            Log In
          </button>
          <button
            className="login-modal__signup-button"
            type="button"
            onClick={onSignUpClick}
          >
            or Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginModal;
