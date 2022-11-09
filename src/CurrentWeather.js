import React, { useState } from 'react';
import img from "./img.png";
import "./CurrentWeather.css";
import DayAndTime from "./DayAndTime.js";
import WeatherForWeek from "./WeatherForWeek.js";
import axios from 'axios';

export default function CurrentWeather(){
    const [weatherData, setWeatherData] = useState({ready: false});

    function showResponse(response){
        console.log(response.data)
        setWeatherData({
            temp: Math.round(response.data.main.temp),
            feelsLike:  Math.round(response.data.main.feels_like),
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            wind: response.data.wind.speed,
            name: response.data.name,
            description: response.data.weather[0].description,
            sunrise: response.data.sys.sunrise,
            sunset: response.data.sys.sunset,
            icon: response.data.weather[0].icon,
        })
    }

    function Search(){
        let city = "Berlin"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b77049e9691e8c2e289bf38fe27ce568`;
        axios.get(apiUrl).then(showResponse)
    }
    
if (weatherData.ready){
    return(
        <div className="CurrentWeather">
            <div className="container">
                <div className="row p-4">
                    <div className="col-6">
                       <span className="city-name text-capitalize"> ⌂ {weatherData.name}</span>
                       <DayAndTime />
                    </div>
                    <div className="col-6 sky text-capitalize">
                        {weatherData.description}
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                    <img
          className="img-fluid main-img"
          id="icon"
          src={img}
          alt="Weather icon"
          width="70px"
        />
                    </div>
                    <div className="col-6">
                       <strong className="current-temp">{weatherData.temp}℃ | F</strong>
                        <p>Feels like: <span>{weatherData.feelsLike}℃</span></p>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-6">
                        <ul>
                            <li> Wind:{weatherData.wind}km/h
                            </li>
                            <li>
                            Precipitation:
                            </li>
                            <li>
                            Sunrise:{weatherData.sunrise}
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                    <ul>
                            <li>
                                Humidity:{weatherData.humidity}%
                            </li>
                            <li>
                            Pressure:{weatherData.pressure}hPa
                            </li>
                            <li>
                                Sunset:{weatherData.sunset}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <WeatherForWeek />
        </div>
    );
} else {
    Search();
    return "Loading...";
  }
}