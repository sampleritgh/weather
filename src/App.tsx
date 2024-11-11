import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ErrorMessage from "./components/ErrorMessage";
import { getWeatherData } from "./utils/api";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      // Example static coordinates for testing (latitude and longitude)
      const lat = 40.7128;
      const lon = -74.006;
      const data = await getWeatherData(lat, lon);
      setWeatherData(data);
      setError("");
    } catch (error) {
      setError("City not found. Please try again.");
    }
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const data = await getWeatherData(latitude, longitude);
          setWeatherData(data);
          setError("");
        } catch (error) {
          setError("Unable to fetch weather data for your location.");
        }
      });
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} onGeolocation={handleGeolocation} />
      {error && <ErrorMessage message={error} />}
      <CurrentWeather data={weatherData} />
    </div>
  );
};

export default App;
