import React
, { useState } 
from "react";
import "./WeatherForWeek.css";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";

export default function WeatherForWeek(props){
    const [forecast, setForecast] = useState({});
    const [dayTemp, setDayTemp] = useState("");
    const [nightTemp, setNightTemp] = useState("");


function showDay(){
    let date = new Date(forecast[0].dt);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    let forecastDay = days[day];

   return forecastDay;
}


 function showResponse (response){
 setForecast(response.data.daily);
 setDayTemp(response.data.daily.temp.day);
 setNightTemp(response.data.daily.temp.night);
 };


let lat = props.coord.lat;
let lon = props.coord.lon;
let key = "25fad9f7e87157d33dde0f82ab269ee8";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
axios.get(apiUrl).then(showResponse);


    return(
        <div className="WeatherForWeek ">
            <div className="container">
                <div className="row m-3">
                    <div className="col-2 ">
                        <span>{showDay()}</span>
                        <div>
                        <WeatherIcon code={forecast[0].weather[0].icon} size={29}/>
                        </div>
                        <span className="forecast-temp">
                            {Math.round(nightTemp)}°
                            </span>
                        <br />
                        <span className="forecast-temp">
                            {Math.round(dayTemp)}°
                            </span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}