import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");
  const [isbuttonDisabled, setIsbuttonDisabled] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    try {
      new URL(imageUrl);
    } catch (error) {
      console.error("Invalid Image URL:", imageUrl);
      alert(
        "Please enter a valid image URL (e.g., starts with http:// or https://)"
      );
      return;
    }

    onAddItemModalSubmit({ name, imageUrl, weather });
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (name.trim() !== "" && imageUrl.trim() !== "" && weather !== "") {
      setIsbuttonDisabled(false);
    } else {
      setIsbuttonDisabled(true);
    }
  }, [name, imageUrl, weather]);

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSumbit}
      isbuttonDisabled={isbuttonDisabled}
    >
      <label htmlFor="name" className="form-modal__label">
        Name{" "}
        <input
          type="text"
          className="form-modal__input"
          id="name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          autoComplete="name"
          onChange={handleNameChange}
          value={name}
          required
        />
      </label>
      <label htmlFor="imageUrl" className="form-modal__label">
        Image{" "}
        <input
          type="url"
          className="form-modal__input"
          id="imageUrl"
          placeholder="Image URL"
          autoComplete="image"
          onChange={handleImageUrlChange}
          value={imageUrl}
          required
        />
      </label>
      <fieldset className="form-modal__radio-buttons">
        <legend className="form-modal__legend">Select the weather type:</legend>
        <label
          htmlFor="hot"
          className="form-modal__label form-modal__label_type_radio"
        >
          <input
            id="hot"
            name="weather"
            type="radio"
            className="form-modal__radio-input"
            value="hot"
            onChange={handleWeatherChange}
            checked={weather === "hot"}
            required
          />
          Hot
        </label>
        <label
          htmlFor="warm"
          className="form-modal__label form-modal__label_type_radio"
        >
          <input
            id="warm"
            name="weather"
            type="radio"
            className="form-modal__radio-input"
            value="warm"
            onChange={handleWeatherChange}
            checked={weather === "warm"}
            required
          />
          Warm
        </label>
        <label
          htmlFor="cold"
          className="form-modal__label form-modal__label_type_radio"
        >
          <input
            id="cold"
            name="weather"
            type="radio"
            className="form-modal__radio-input"
            value="cold"
            onChange={handleWeatherChange}
            checked={weather === "cold"}
            required
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
