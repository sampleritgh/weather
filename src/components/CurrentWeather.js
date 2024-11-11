import React from "react";

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  const { temperature, windspeed } = data.current_weather;
  //

  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Windspeed: {windspeed} km/h</p>
    </div>
  );
};

export default CurrentWeather;
