import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import modalClose from "../../assets/registerloginclose.png";
import "./EditProfileModal.css";

function EditProfileModal({ isOpen, onClose, onUpdateProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (currentUser && isOpen) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateProfile({ name, avatar });
  }

  return (
    isOpen && (
      <div className="edit-profile-modal__container">
        <form className="edit-profile-modal__form" onSubmit={handleSubmit}>
          <button
            type="button"
            className="edit-profile-modal__close"
            onClick={onClose}
          >
            <img
              src={modalClose}
              alt="Close"
              className="edit-profile-modal__close-icon"
            />
          </button>
          <h2 className="edit-profile-modal__title">Change profile data</h2>
          <label className="edit-profile-modal__label">
            Name *
            <input
              className="edit-profile-modal__input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="edit-profile-modal__label">
            Avatar URL *
            <input
              className="edit-profile-modal__input"
              type="url"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="edit-profile-modal__button"
            disabled={!name || !avatar} // or your validation logic
          >
            Save changes
          </button>
        </form>
      </div>
    )
  );
}

export default EditProfileModal;
