import React, { useState } from 'react';
import img from "./img.png";
import "./CurrentWeather.css";
import DayAndTime from "./DayAndTime.js";
import WeatherForWeek from "./WeatherForWeek.js";
import axios from 'axios';

export default function CurrentWeather(){
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
        let city = "london"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b77049e9691e8c2e289bf38fe27ce568`;
        axios.get(apiUrl).then(showResponse)
    };
     Search()
    

    return(
        <div className="CurrentWeather">
            <div className="container">
                <div className="row p-4">
                    <div className="col-6">
                       <span className="city-name text-capitalize"> ⌂ {weatherData.name}</span>
                       <DayAndTime date={weatherData.date}/>
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
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-6">
                        <ul>
                            <li>Minimum:{weatherData.minTemp}℃</li>
                            <li>Maximum:{weatherData.maxTemp}℃</li>
                        </ul>
                    </div>
                    <div className="col-6">
                    <ul>
                    <li> Wind:{weatherData.wind}km/h
                            </li>
                            <li>
                                Humidity:{weatherData.humidity}%
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <WeatherForWeek />
        </div>
    );


}
