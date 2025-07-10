import "./WeatherCard.css";
import {
  weatherOptions,
  defaultWeatherOptions,
} from "../../utils/constants.js";

function WeatherCard({ weatherData }) {
  if (
    !weatherData ||
    !weatherData.temp ||
    weatherData.isDay === undefined ||
    !weatherData.condition
  ) {
    return null;
  }

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
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
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
