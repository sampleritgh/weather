import React from 'react';

function HourlyForecast({ hourlyData }) {
  return (
    <div className="hourly-forecast">
      <h3>Hourly Forecast</h3>
      <ul>
        {hourlyData.map((hour, index) => (
          <li key={index}>
            {hour.time}: {hour.temperature_2m}°C
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HourlyForecast;
