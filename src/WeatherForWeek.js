
import "./WeatherForWeek.css";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";

export default function WeatherForWeek(props){
    console.log(props.coord.lon);
 function showResponse (props){
    
 }

let lat = props.coord.lat;
let lon = props.coord.lon;
let key = "0ebc654fccbc00189d5408f3d6f15b08";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`;

axios.get(apiUrl).then(showResponse);


    return(
        <div className="WeatherForWeek ">
            <div className="container">
                <div className="row m-3">
                    <div className="col-2 border-0">
                        <span>Mon</span>
                        <WeatherIcon code={props.data.icon} size={29}/>
                        <span className="forecast-temp">1°</span>
                        <br />
                        <span className="forecast-temp">-5°</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}