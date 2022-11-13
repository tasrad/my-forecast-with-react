import img from "./img.png";
import "./WeatherForWeek.css";
import WeatherIcon from "./WeatherIcon.js";


export default function WeatherForWeek(props){
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

                    <div className="col-2">
                        <span>Tue</span>
                        <WeatherIcon code={props.data.icon} size={29}/>
                        <span className="forecast-temp">1°</span>
                        <br />
                        <span className="forecast-temp">-5°</span>
                    </div>

                    <div className="col-2">
                        <span>Wed</span>
                        <WeatherIcon code={props.data.icon} size={29}/>
                        <span className="forecast-temp">1°</span>
                        <br />
                        <span className="forecast-temp">-5°</span>
                    </div>

                    <div className="col-2">
                        <span>Thu</span>
                        <WeatherIcon code={props.data.icon} size={29}/>
                        <span className="forecast-temp">1°</span>
                        <br />
                        <span className="forecast-temp">-5°</span>
                    </div>

                    <div className="col-2">
                        <span>Fri</span>
                        <WeatherIcon code={props.data.icon} size={29}/>
                        <span className="forecast-temp">1°</span>
                        <br />
                        <span className="forecast-temp">-5°</span>
                    </div>

                    <div className="col-2">
                        <span>Sun</span>
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