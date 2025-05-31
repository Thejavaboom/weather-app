const apikey = "b14ba0e083de70d4596c0a1f37c63d24";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wreather").style.display = "none";
    }else{

    var data = await response.json();

   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

   if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "wimg/cloud.png"
   }
   else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "wimg/clear.png"
   }
   else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "wimg/rains.png"
   }
   else if(data.weather[0].main == "drizzle"){
    weatherIcon.src = "wimg/drzz.png"
   }
   else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "wimg/mist.jpg"
   }

   document.querySelector(".weather").style.display = "block"
   document.querySelector(".error").style.display = "none";
}
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
