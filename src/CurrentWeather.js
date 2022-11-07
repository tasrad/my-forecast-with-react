import img from "./img.png";
import "./CurrentWeather.css";

export default function CurrentWeather(){
    return(
        <div className="CurrentWeather">
            <div className="container">
                <div className="row p-4">
                    <div className="col-6">
                       <span className="city-name"> ⌂ Krakiv</span>
                    </div>
                    <div className="col-6 sky">
                        Cloudy
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
                       <strong className="current-temp">-14 ℃ | F</strong>
                        <p>Feels like: <span>-18℃</span></p>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-6">
                        <ul>
                            <li> Wind:
                            </li>
                            <li>
                            Precipitation:
                            </li>
                            <li>
                            Sunrise:
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                    <ul>
                            <li>
                                Humidity:
                            </li>
                            <li>
                            Pressure:
                            </li>
                            <li>
                                Sunset:
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}