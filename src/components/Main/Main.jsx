import { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherData,
  handleCardClick,
  clothingItems,
  onCardLike,
  onSignUpClick,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const temperature =
    weatherData && weatherData.temp
      ? weatherData.temp[currentTemperatureUnit]
      : "N/A";

  const temperatureUnit = currentTemperatureUnit;

  return (
    <div className="main-page-container">
      <main>
        <WeatherCard weatherData={weatherData} />
        <section className="cards">
          <p className="cards__text">
            Today is {temperature}&deg; {temperatureUnit} / You may want to
            wear:
          </p>
          <ul className="cards__list">
            {clothingItems
              .filter((item) => {
                return weatherData && item.weather === weatherData.type;
              })
              .map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  onCardLike={onCardLike}
                />
              ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Main;
