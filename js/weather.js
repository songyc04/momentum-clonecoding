const weather = document.querySelector("#weather");
const city = document.querySelector("#city");
const temperature = document.querySelector("#temp");

const WEATHER_API_KEY = "0b4f6fa44c6d1b8acd0cb6b1b0981f8f";

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temperature.innerText = `${data.main.temp}°C`;
    });
    
};

const onGeoError = () => {
  alert("Can't find the location...");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);