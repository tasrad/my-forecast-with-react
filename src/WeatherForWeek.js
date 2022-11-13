import img from "./img.png";
import "./WeatherForWeek.css";


export default function WeatherForWeek(){
    return(
        <div className="WeatherForWeek ">
            <div className="container">
                <div className="row m-3">
                    <div className="col-2 border-0">
                        <span>Mon</span>
                        <img
          className="img-fluid" 
          id="icon"
          src={img}
          alt="Weather icon"
          width="30px"
        />
                        <span className="forecast-temp">1°</span>
                        <br />
                        <span className="forecast-temp">-5°</span>
                    </div>

                    <div className="col-2">
                        <span>Tue</span>
                        <img
          className="img-fluid" 
          id="icon"
          src={img}
          alt="Weather icon"
          width="30px"
        />
                        <span className="forecast-temp">1°</span>
                        <br />
                        <span className="forecast-temp">-5°</span>
                    </div>

                    <div className="col-2">
                        <span>Wed</span>
                        <img
          className="img-fluid" 
          id="icon"
          src={img}
          alt="Weather icon"
          width="30px"
        />
                        <span className="forecast-temp">1°</span>
                        <br />
                        <span className="forecast-temp">-5°</span>
                    </div>

                    <div className="col-2">
                        <span>Thu</span>
                        <img
          className="img-fluid" 
          id="icon"
          src={img}
          alt="Weather icon"
          width="30px"
        />
                        <span className="forecast-temp">1°</span>
                        <br />
                        <span className="forecast-temp">-5°</span>
                    </div>

                    <div className="col-2">
                        <span>Fri</span>
                        <img
          className="img-fluid" 
          id="icon"
          src={img}
          alt="Weather icon"
          width="30px"
        />
                        <span className="forecast-temp">1°</span>
                        <br />
                        <span className="forecast-temp">-5°</span>
                    </div>

                    <div className="col-2">
                        <span>Sun</span>
                        <img
          className="img-fluid" 
          id="icon"
          src={img}
          alt="Weather icon"
          width="30px"
        />
                        <span className="forecast-temp">1°</span>
                        <br />
                        <span className="forecast-temp">-5°</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}