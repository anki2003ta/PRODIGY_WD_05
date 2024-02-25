const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "056aca99cfb7140f6c1d17f3d8266d93";
let cit = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    console.log(data);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {   var data = await response.json();
    
        cit.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°C";    
        humidity.innerHTML = data.main.humidity + "%";
    
        wind.innerHTML = data.wind.speed + "Km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "img1.jpg" ;
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "img2.jpg" ;
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "img3.jpg" ;
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "img4.jpg" ;
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "img5.jpg" ;
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "img6.jpg" ;
        }
        else if(data.weather[0].main == "Haze"){
            weatherIcon.src = "img7.jpg" ;
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
