import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";

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

  const weatherOptionUrl = filteredOptions[0]?.url;

  console.log("Weather option URL:", weatherOptionUrl);
  console.log("Filtered options:", filteredOptions);
  console.log("weatherData.isDay:", weatherData.isDay);
  console.log("weatherData.condition:", weatherData.condition);

  return (
    <section className="weather-card">
      <p className="weather-card__temp"> {weatherData.temp.F} &deg; F</p>
      <img
        src={weatherOptionUrl}
        alt="Weather condition"
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
