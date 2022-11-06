import img from "./img.png";

export default function CurrentWeather(){
    return(
        <div className="CurrentWeather">
            <div className="container">
                <div className="row p-3">
                    <div className="col-6">
                        Krakiv
                    </div>
                    <div className="col-6">
                        Cloudy
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                    <img
          className="img-fluid"
          id="icon"
          src={img}
          alt="Weather icon"
          width="100px"
        />
                    </div>
                    <div className="col-6">
                       <strong>-14 ℃</strong>
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