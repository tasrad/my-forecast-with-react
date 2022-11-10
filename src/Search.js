import './Search.css';
import axios from 'axios';
import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather.js";
import WeatherForWeek from "./WeatherForWeek.js";


export default function Search(){
  const [weatherData, setWeatherData] = useState({});

  function showResponse(response){
      setWeatherData({
          date:new Date(response.data.dt*1000),
          temp:Math.round(response.data.main.temp),
          minTemp:Math.round(response.data.main.temp_min),
          maxTemp:Math.round(response.data.main.temp_max),
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          name:response.data.name,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon
          //  date: new Date(response.data.daily[0].time*1000),
          // temp: Math.round(response.data.daily[0].temperature.day),
          // minTemp:Math.round(response.data.daily[0].temperature.minimum),
          // maxTemp:Math.round(response.data.daily[0].temperature.maximum),
          // humidity: response.data.daily[0].temperature.humidity,
          // wind: response.data.daily[0].wind.speed,
          // name: response.data.city,
          // description: response.data.daily[0].condition.description,
          // icon: response.data.daily[0].condition.icon_url,
      });
      
  }


  function Search(){
      let city = "Rivne"
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b77049e9691e8c2e289bf38fe27ce568`;
      axios.get(apiUrl).then(showResponse)
  };
   Search()
  

  const [city, setCity ]= useState("")
  function handleSubmit(event){
event.preventDefault();
Search()
  };

  function handleChange(event){
    event.preventDefault();
    setCity(event.target.value)
  }
    return(
        <div className="Search ps-4">
            <form onSubmit={handleSubmit}>
          <input onChange={handleChange}
            type="text"
            placeholder="Enter your city..."
            autoFocus="on"
            className="input-search"
          />

          <button type="submit" className="btn-search">
            Search
          </button>
          <button type="submit" className="btn-current">
            Current
          </button>
        </form>
        <CurrentWeather data={weatherData}/>
        <WeatherForWeek />
        </div>
    )
}