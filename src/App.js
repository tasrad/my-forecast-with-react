import Search from "./Search.js";
import Footer from "./Footer.js"
import CurrentWeather from "./CurrentWeather.js";
import WeatherForWeek from "./WeatherForWeek.js";


function App() {
  return (
    <div className="App">
      <Search />
      <CurrentWeather />
      <WeatherForWeek />
      <Footer />
    </div>
  );
}

export default App;
