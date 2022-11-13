import React, { useState } from "react";
import "./WeatherForWeek.css";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";

export default function WeatherForWeek(props){
    const [forecast, setForecast] = useState("");
console.log(forecast)
 function showResponse (response){
    setForecast(response.data.daily);
    console.log(response.data.daily);
 }

let lat = props.coord.lat;
let lon = props.coord.lon;
let key = "0ebc654fccbc00189d5408f3d6f15b08";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
axios.get(apiUrl).then(showResponse);


    return(
        <div className="WeatherForWeek ">
            <div className="container">
                <div className="row m-3">
                    <div className="col-2 border-0">
                        {/* <span>{forecast[0].dt*1000}</span> */}
                        <div>
                        <WeatherIcon code={props.data.icon} size={29}/>
                        </div>
                        <span className="forecast-temp">
                            {/* {Math.round(forecast[0].temp.max)}° */}
                            </span>
                        <br />
                        <span className="forecast-temp">
                            {/* {Math.round(forecast[0].temp.min)}° */}
                            </span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}