import img from "./img.png";
import "./WeatherForWeek.css"


export default function WeatherForWeek(){
    return(
        <div className="WeatherForWeek ">
            <div className="container">
                <div className="row m-3 justify-content-center">
                    <div className="col-2">
                        <span>Mon</span>
                        <img
          className="img-fluid" 
          id="icon"
          src={img}
          alt="Weather icon"
          width="20px"
        />
                        <span>1</span>℃
                        <br />
                        <span>-5</span>℃
                    </div>

                    <div className="col-2">
                        <span>Tue</span>
                        <img
          className="img-fluid" 
          id="icon"
          src={img}
          alt="Weather icon"
          width="20px"
        />
                        <span>1</span>℃
                        <br />
                        <span>-5</span>℃
                    </div>

                    <div className="col-2">
                        <span>Wed</span>
                        <img
          className="img-fluid" 
          id="icon"
          src={img}
          alt="Weather icon"
          width="20px"
        />
                        <span>1</span>℃
                        <br />
                        <span>-5</span>℃
                    </div>

                    <div className="col-2">
                        <span>Thu</span>
                        <img
          className="img-fluid" 
          id="icon"
          src={img}
          alt="Weather icon"
          width="20px"
        />
                        <span>1</span>℃
                        <br />
                        <span>-5</span>℃
                    </div>

                    <div className="col-2">
                        <span>Fri</span>
                        <img
          className="img-fluid" 
          id="icon"
          src={img}
          alt="Weather icon"
          width="20px"
        />
                        <span>1</span>℃
                        <br />
                        <span>-5</span>℃
                    </div>

                    <div className="col-2">
                        <span>Sun</span>
                        <img
          className="img-fluid" 
          id="icon"
          src={img}
          alt="Weather icon"
          width="20px"
        />
                        <span>1</span>℃
                        <br />
                        <span>-5</span>℃
                    </div>
                    
                </div>
            </div>
        </div>
    )
}