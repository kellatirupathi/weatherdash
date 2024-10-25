// src/components/CurrentWeather.js
import React from 'react';

function CurrentWeather({ data }) {
  return (
    <div className="weather-card">
      <h2>Current Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp} °C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <p>Condition: {data.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        alt="weather icon"
      />
    </div>
  );
}

export default CurrentWeather;
