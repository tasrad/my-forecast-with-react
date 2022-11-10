import React, { useState } from 'react';
import img from "./img.png";
import "./CurrentWeather.css";
import DayAndTime from "./DayAndTime.js";



export default function CurrentWeather(props){

    return(
        <div className="CurrentWeather">
            <div className="container">
                <div className="row p-4">
                    <div className="col-6">
                       <span className="city-name text-capitalize"> ⌂ {props.name}</span>
                       <DayAndTime date={props.date}/>
                    </div>
                    <div className="col-6 sky text-capitalize">
                        {props.description}
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
                       <strong className="current-temp">{props.temp}℃ | F</strong>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-6">
                        <ul>
                            <li>Minimum:{props.minTemp}℃</li>
                            <li>Maximum:{props.maxTemp}℃</li>
                        </ul>
                    </div>
                    <div className="col-6">
                    <ul>
                    <li> Wind:{props.wind}km/h
                            </li>
                            <li>
                                Humidity:{props.humidity}%
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
    );


}
