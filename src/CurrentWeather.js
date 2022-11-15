import React from 'react';
import "./CurrentWeather.css";
import DayAndTime from "./DayAndTime.js";
import WeatherIcon from "./WeatherIcon.js";
import Temperature from "./Temperature.js"



export default function CurrentWeather(props){
    return(
        <div className="CurrentWeather">
            <div className="container">
                <div className="row p-4">
                    <div className="col-6 ps-1">
                       <span className="city-name text-capitalize"> ⌂ {props.data.name}</span>
                       <DayAndTime date={props.data.date}/>
                    </div>
                    <div className="col-6 sky text-capitalize">
                        {props.data.description}
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="weather-icon">
                        <WeatherIcon code={props.data.icon} size={70}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <Temperature temp={props.data.temp} />
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-6">
                        <ul>
                            <li>Minimum:{props.data.minTemp}℃</li>
                            <li>Maximum:{props.data.maxTemp}℃</li>
                        </ul>
                    </div>
                    <div className="col-6">
                    <ul>
                    <li> Wind:{props.data.wind}km/h
                            </li>
                            <li>
                                Humidity:{props.data.humidity}%
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
