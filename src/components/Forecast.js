// src/components/Forecast.js
import React from 'react';

function Forecast({ data }) {
  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-cards">
        {data.map((item, index) => (
          <div key={index} className="forecast-card">
            <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
            <p>High: {item.main.temp_max} °C</p>
            <p>Low: {item.main.temp_min} °C</p>
            <p>{item.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="weather icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
