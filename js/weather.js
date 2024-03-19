const weatherContainer = document.querySelector("#weather-container");
const city = document.querySelector("#city");
const temperature = document.querySelector("#temp");

// API: OpenWeather
const WEATHER_API_KEY = "0b4f6fa44c6d1b8acd0cb6b1b0981f8f";

const weatherImgs = ["Sunny.png", "Cloudy.png", "Rainy.png", "Snowy.png"];

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  
  const weatherImg = document.createElement("img");
  weatherImg.id = "weatherImg";
  
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      city.innerText = data.name;
      temperature.innerText = `${data.main.temp}°C`;
      const weather = data.weather[0].main;

      if (weather === "Clear") {
        weatherImg.src = `img/${weatherImgs[0]}`;
      } else if (weather === "Clouds") {
        weatherImg.src = `img/${weather}.png`;
      } else if (weather === "Rain") {
        weatherImg.src = `img/${weatherImgs[2]}`;
      } else {
        weatherImg.src = `img/${weatherImgs[3]}`;
      }

      weatherContainer.appendChild(weatherImg);
      console.log(data.weather[0].main);
    }); 
};

const onGeoError = () => {
  alert("Can't find the location...");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);