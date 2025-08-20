const temprature = document.querySelector(".temp");
const min_temp = document.querySelector(".min");
const max_temp = document.querySelector(".max");
const feels = document.querySelector(".feels")
let input = document.querySelector(".input")
const button = document.querySelector(".btn");
async function weather(city){
const API_Key = "7fb809d79f9b20afbb467907e3edc96a";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;

 const weatherData = await fetch(url).then(response => response.json());
 temprature.innerHTML = `${weatherData.main.temp}c`
 feels.innerHTML = `${weatherData.main.feels_like}c`
 min_temp.innerHTML = `${weatherData.main.temp_min}c`
  max_temp.innerHTML = `${weatherData.main.temp_max}c`

console.log(weatherData)
}
button.addEventListener("click",()=>{
    weather(input.value);
})
