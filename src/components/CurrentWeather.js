import React from 'react';

function CurrentWeather({ data, unit }) {
  const temp = unit === 'metric' ? data.current.temp_c : data.current.temp_f;
  const tempSymbol = unit === 'metric' ? '°C' : '°F';
  const windSpeed = unit === 'metric' ? `${data.current.wind_kph} kph` : `${(data.current.wind_kph / 1.609).toFixed(1)} mph`;

  return (
    <div className="weather-card">
      <h2>Current Weather in {data.location.name}</h2>
      <p>Temperature: {temp} {tempSymbol}</p>
      <p>Humidity: {data.current.humidity}%</p>
      <p>Wind Speed: {windSpeed}</p>
      <p>Condition: {data.current.condition.text}</p>
      <img
        src={data.current.condition.icon}
        alt="weather icon"
      />
    </div>
  );
}

export default CurrentWeather;
