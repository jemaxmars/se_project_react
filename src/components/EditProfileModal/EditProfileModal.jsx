import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
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
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isButtonDisabled={!name || !avatar}
    >
      <label className="form-modal__label">
        Name *
        <input
          className="form-modal__input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className="form-modal__label">
        Avatar URL *
        <input
          className="form-modal__input"
          type="url"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
