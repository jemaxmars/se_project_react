export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

const isDay = (data) => {
  const currentTime = data.dt;
  const sunrise = data.sys.sunrise;
  const sunset = data.sys.sunset;

  return currentTime >= sunrise && currentTime < sunset;
};

const getWeatherType = (temperature) => {
  if (temperature > 75) {
    return "hot";
  } else if (temperature >= 60 && temperature < 75) {
    return "warm";
  } else {
    return "cold";
  }
};

const mapWeatherCondition = (apiCondition) => {
  const lowerCaseCondition = apiCondition.toLowerCase();
  switch (lowerCaseCondition) {
    case "clear":
      return "clear";
    case "cloudy":
      return "cloudy";
    case "rain":
    case "drizzle":
      return "rain";
    case "thunderstorm":
      return "storm";
    case "snow":
      return "snow";
    case "mist":
    case "smoke":
    case "haze":
    case "dust":
    case "fog":
    case "sand":
    case "ash":
    case "squall":
    case "tornado":
      return "fog";
    default:
      console.warn(
        `Unhandled weather condition: ${apiCondition}. Defaulting to 'clear'.`
      );
      return "clear";
  }
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: data.main.temp };
  result.type = getWeatherType(result.temp.F);
  result.condition = mapWeatherCondition(data.weather[0].main);
  result.isDay = isDay(data);
  return result;
};
