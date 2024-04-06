const weatherContainer = document.querySelector("#weather-container");
const weatherError = document.querySelector("#weather-error");

// API: OpenWeather
const WEATHER_API_KEY = "0b4f6fa44c6d1b8acd0cb6b1b0981f8f";

const onGeoOk = (position) => {
  const weatherImgs = ["Sunny.png", "Cloudy.png", "Rainy.png", "Snowy.png"];

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  
  const weatherImg = document.createElement("img");
  const city = document.createElement("span");
  const temperature = document.createElement("span");

  weatherImg.id = "weatherImg";
  city.id = "city";
  temperature.id = "temp";

  fetch(weatherURL)
    .then((res) => res.json())
    .then((data) => {
      city.innerText = data.name;
      temperature.innerText = `${data.main.temp.toFixed(1)}°C`;
      const weather = data.weather[0].main;

      if (weather === "Clear") {
        weatherImg.src = `img/${weatherImgs[0]}`;
      } else if (weather === "Clouds") {
        weatherImg.src = `img/${weather}.png`;
      } else if (weather === "Rain") {
        weatherImg.src = `img/${weather}.png`;
      } else {
        weatherImg.src = `img/${weatherImgs[3]}`;
      }

      weatherContainer.appendChild(weatherImg);
      weatherContainer.appendChild(city);
      weatherContainer.appendChild(temperature);
    }); 
};

const onGeoError = () => {
  // alert("Can't find the location...");
  const errMessage = document.createElement("span");

  errMessage.innerText = "Location Error";

  weatherError.appendChild(errMessage);
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);