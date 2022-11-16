import React, { useState, useEffect } from "react";
import "./WeatherForWeek.css";
import DailyForecast from "./DailyForecast.js";
import axios from "axios";

export default function WeatherForWeek(props){
    const [forecast, setForecast] = useState({});
    const [loaded, setLoaded] = useState(false);

useEffect(()=>{
    setLoaded(false)
}, [props.coord]);

 function showResponse (response){
    setLoaded(true);
 setForecast(response.data.daily);

 };
if (loaded){
    return(
        <div className="WeatherForWeek ">
                <div className="row m-3">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 6){
                            return(
                                <div className="col" key={index}>
                                    <DailyForecast data={dailyForecast} />
                                 </div>
                            )
                        }
                    })}
                    
                </div>
        </div>
    )} else {
        let lat = props.coord.lat;
        let lon = props.coord.lon;
        let key = "1dbf926d3b4417bf379db7043bec1047";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

        axios.get(apiUrl).then(showResponse);

        return null;
    }
}