// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import './App.css';
import { fetchWeatherData, fetchForecastData } from './utils/api';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    try {
      setError('');
      const weatherResponse = await fetchWeatherData(city);
      const forecastResponse = await fetchForecastData(city);

      setCurrentWeather(weatherResponse.data);
      setForecast(forecastResponse.data.list.filter((_, index) => index % 8 === 0)); // Get daily data every 24 hours
    } catch (err) {
      setError('City not found or API error.');
    }
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast.length > 0 && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
