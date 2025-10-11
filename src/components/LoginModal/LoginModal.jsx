import { useState } from "react";
import { loginUser } from "../../utils/api";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
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
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      isOpen={true}
      onClose={onClose}
      onSubmit={handleSubmit}
      isButtonDisabled={!form.email || !form.password}
      additionalButtons={
        <button
          type="button"
          className="login-modal__signup-button" 
          onClick={onSignUpClick}
        >
          or Sign Up
        </button>
      }
    >
      <label className="form-modal__label" htmlFor="email">
        Email *
        <input
          className="form-modal__input"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>

      <label className="form-modal__label" htmlFor="password">
        Password *
        <input
          className="form-modal__input"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </label>

      {error && <div className="form-modal__error">{error}</div>}
    </ModalWithForm>
  );
}

export default LoginModal;
