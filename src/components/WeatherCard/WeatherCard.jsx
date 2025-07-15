import "./WeatherCard.css";
import {
  weatherOptions,
  defaultWeatherOptions,
} from "../../utils/constants.js";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";

function WeatherCard({ weatherData }) {
  if (
    !weatherData ||
    !weatherData.temp ||
    weatherData.isDay === undefined ||
    !weatherData.condition
  ) {
    return null;
  }
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  const {
    url: weatherOptionUrl,
    condition: weatherOptionCondition,
    day: weatherOptionDay,
  } = weatherOption;

  return (
    <section className="weather-card">
      <div className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]} &deg;{currentTemperatureUnit}
      </div>
      <img
        src={weatherOptionUrl}
        alt={`Card showing ${
          weatherOptionDay ? "day" : "night"
        }time ${weatherOptionCondition} weather`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
