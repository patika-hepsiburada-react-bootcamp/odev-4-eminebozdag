import moment from "moment";
import "moment/locale/tr";
import "./weather-forecast-bar.css";

interface Props {
  name: string;
  weather: any;
  loading: boolean;
}

const WeatherForecastBar = ({
  name,
  weather = {
    temperature: { actual: 273.15 },
  },
  loading,
}: Props) => {
  return (
    <div className="weather-forecast">
      <div className="weather-forecast__city">
        <p>
          <b>{loading ? "Loading.." : name?.replace(" Province", "")}</b>
        </p>
      </div>
      <div className="weather-forecast__description">
        <div className="logo">
          {weather?.summary?.icon && (
            <img
              src={`http://openweathermap.org/img/wn/${weather?.summary?.icon}@2x.png`}
              alt=""
            />
          )}
        </div>
      </div>
      <div className="weather-forecast__other">
        <div className="data">
          <p id="text">Nem</p>
          <p id="value">
            <b>%{weather.clouds?.humidity}</b>
          </p>
        </div>
        <div className="info">
          <p id="temperature">
            {(weather.temperature.actual - 273.15).toFixed(0)}°C
          </p>
          <p id="date">{moment(new Date()).format("MM dddd yyyy")}</p>
        </div>
        <div className="data">
          <p id="text">Rüzgar</p>
          <p id="value">
            <b>{weather.wind?.speed}m/s</b>
          </p>
        </div>
      </div>
    </div>
  );
};
export default WeatherForecastBar;
