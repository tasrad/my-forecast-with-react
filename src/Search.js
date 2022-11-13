import './Search.css';
import axios from 'axios';
import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather.js";
import WeatherForWeek from "./WeatherForWeek.js";



export default function Search(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity ]= useState(props.defaultCity);

  function showResponse(response){
      setWeatherData({
        ready:true,
          date:new Date(response.data.dt*1000),
          temp:Math.round(response.data.main.temp),
          minTemp:Math.round(response.data.main.temp_min),
          maxTemp:Math.round(response.data.main.temp_max),
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          name:response.data.name,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon
      });
      
  }


  function handleSubmit(event){
event.preventDefault();
searchCity()
  };

  function handleChange(event){
    event.preventDefault();
    setCity(event.target.value);
  };
  
  function searchCity(){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b77049e9691e8c2e289bf38fe27ce568`;
    axios.get(apiUrl).then(showResponse)
};

if (weatherData.ready) {
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
        </form>
        <CurrentWeather data={weatherData}/>
        <WeatherForWeek icon={weatherData}/>
        </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}