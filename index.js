const apiKey = "744ba55cf4202b6e0ac019160a16360b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(City) {
  const response = await fetch(apiUrl + City + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".Temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "Images/clouds.png";
    }
    if (data.weather[0].main == "Rain") {
      weatherIcon.src = "Images/rain.png";
    }
    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "Images/clear.png";
    }
    if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "Images/drizzle.png";
    }
    if (data.weather[0].main == "Mist") {
      weatherIcon.src = "Images/mist.png";
    }
    if (data.weather[0].main == "Snow") {
      weatherIcon.src = "Images/snow.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
