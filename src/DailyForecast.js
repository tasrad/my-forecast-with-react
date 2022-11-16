import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForWeek.css";

export default function dailyForecast(props){
    function tempDay(){
        let dayTemp = Math.round(props.data.temp.day);
        return `${dayTemp}°`
    };
    function tempNight(){
        let nightTemp = Math.round(props.data.temp.night);
        return `${nightTemp}°`
    };
    function showDay(){
        let date = new Date(props.data.dt*1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = date.getDay();
        let forecastDay = days[day];
       return forecastDay;
    };
    return(
        <div className="dailyForecast">
        <div>{showDay()}</div>
        <div className="pt-2">
        <WeatherIcon code={props.data.weather[0].icon} size={29}/>
        </div>
        <span className="forecast-temp">
            {tempDay()}
            </span>
            {" "}
        <span className="forecast-temp night">
            {tempNight()}
            </span>
   </div>
    )
}