import React, { useState } from "react";

const SearchBar = ({ onSearch, onGeolocation }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={onGeolocation}>Use Current Location</button>
    </div>
  );
};

export default SearchBar;
