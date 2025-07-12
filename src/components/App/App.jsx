import { useEffect, useState } from "react";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((error) => {
        console.error("Failed to fetch weather data:", error);
      });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        isOpen={activeModal === "add-garment"}
        onClose={closeActiveModal}
      >
        <label htmlFor="name" className="form-modal__label">
          Name{" "}
          <input
            type="text"
            className="form-modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="form-modal__label">
          Image{" "}
          <input
            type="url"
            className="form-modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="form-modal__radio-btns">
          <legend className="form-modal__legend">
            Select the weather type:
          </legend>
          <label
            htmlFor="hot"
            className="form-modal__label form-modal__label_type_radio"
          >
            <input
              id="hot"
              name="weather"
              type="radio"
              className="form-modal__radio-input"
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
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        isOpen={activeModal === "preview"}
        card={selectedCard}
        onClose={closeActiveModal}
      />
      <Footer />
    </div>
  );
}

export default App;
