import { useEffect, useState } from "react";
import Module from "./Module";

const WeatherModule = (props) => {
  const [weatherData, setWeatherData] = useState([]);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  // Set users latitude and logitude
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  // Fetch weather data
  useEffect(() => {
    if (lat && long) {
      const fetchData = async () => {
        const url = `${process.env.REACT_APP_OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;

        await fetch(url)
          .then((res) => res.json())
          .then((result) => {
            setWeatherData(result);
          });
      };
      fetchData();
    }
  }, [lat, long]);

  const Weather = () => {
    return (
      <div className="weatherdata">
        {weatherData && weatherData.main && weatherData.weather ? (
          <>
            <h1>{Math.round(weatherData.main.temp)} &deg;F</h1>
            <div className="weatherdata__subline">
              <span>{weatherData.name}</span>
              <span>hi {Math.round(weatherData.main.temp_max)}</span>
              <span>lo {Math.round(weatherData.main.temp_min)}</span>
              <span>{Math.round(weatherData.wind.speed)} mph</span>
            </div>
          </>
        ) : (
          <div className="loader" />
        )}
      </div>
    );
  };

  return (
    <Module {...props} title="Weather (Yours)">
      <Weather />
    </Module>
  );
};

export default WeatherModule;
