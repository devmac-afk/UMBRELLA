    const apiKey = "ef36adb7a1c8332bf39bef06a9377905";
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
        const response = await fetch(apiURL + city +`&appid=${apiKey}`);
        if(response.status === 404){
            document.querySelector(".error").style.display = "flex";
            document.querySelector(".weather").style.display = "none";
        }else{
            document.querySelector(".error").style.display = "none";
        }
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "KM/hr ";
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/cloudy.svg"
        }else if(data.weather[0].main == "Haze") {
            weatherIcon.src = "images/haze.svg"
        }else if(data.weather[0].main == "Snow"){
             weatherIcon.src = "images/snow.png"
        }else if(data.weather[0].main == "Sunny"){
             weatherIcon.src = "images/sunny.svg"
        }else if(data.weather[0].main == "Fog"){
             weatherIcon.src = "images/fog.svg"
        }else if(data.weather[0].main == "Rain"){
             weatherIcon.src = "images/rain.svg"
        }
        document.querySelector(".weather").style.display = "block";
    }
    searchBtn.addEventListener("click",() => {
            checkWeather(searchBox.value);
    })
