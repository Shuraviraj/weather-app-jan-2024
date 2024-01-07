const apikey = "3353edeb6cf0ea706f64bcc40ee2ecec";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search>input");
const searchBtn = document.querySelector(".search>button");
const loader = document.querySelector(".loader");
const weatherElement = document.querySelector(".weather");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    loader.style.display = "block";
    weatherElement.style.display = "none"

    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    console.log(data);

    switch (data.weather[0].main) {
        case "Clouds": {
            weatherIcon.src = "images/clouds.png";
            break;
        }
        case "Clear": {
            weatherIcon.src = "images/clear.png";
            break;
        }
        case "Rain": {
            weatherIcon.src = "images/rain.png";
            break;
        }
        case "Drizzle": {
            weatherIcon.src = "images/drizzle.png";
            break;
        }
        case "Mist": {
            weatherIcon.src = "images/mist.png";
            break;
        }
    }
    
    loader.style.display = "none";
    weatherElement.style.display = "block"
}

function handleSearchButtonClick() {
    checkWeather(searchBox.value);
}

searchBtn.addEventListener("click", handleSearchButtonClick);