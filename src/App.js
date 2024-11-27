import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import './App.css';
import { fetchWeatherData } from './utils/api';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorite cities from localStorage when the app loads
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleSearch = async (city) => {
    try {
      setError('');
      const weatherResponse = await fetchWeatherData(city, unit);

      setCurrentWeather(weatherResponse.data);
    } catch (err) {
      setError('City not found or API error.');
    }
  };

  const handleUnitToggle = async () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);

    if (currentWeather) {
      try {
        const weatherResponse = await fetchWeatherData(currentWeather.location.name, newUnit);
        setCurrentWeather(weatherResponse.data);
      } catch (err) {
        setError('Error updating units. Please try again.');
      }
    }
  };

  const handleSaveFavorite = (city) => {
    if (!favorites.includes(city)) {
      const updatedFavorites = [...favorites, city];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const handleFavoriteClick = (city) => {
    handleSearch(city);
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <button className="unit-toggle" onClick={handleUnitToggle}>
        {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
      </button>
      <div className="favorites">
        <h3>Favorite Cities:</h3>
        {favorites.length > 0 ? (
          favorites.map((city, index) => (
            <button key={index} onClick={() => handleFavoriteClick(city)}>
              {city}
            </button>
          ))
        ) : (
          <p>No favorite cities yet.</p>
        )}
      </div>
      {error && <p className="error">{error}</p>}
      {currentWeather && (
        <div>
          <CurrentWeather data={currentWeather} unit={unit} />
          <button className="save-favorite" onClick={() => handleSaveFavorite(currentWeather.location.name)}>
            Save to Favorites
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
