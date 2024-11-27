import React from 'react';

function Forecast({ data, unit }) {
  const tempSymbol = unit === 'metric' ? '°C' : '°F';

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-cards">
        {data.map((item, index) => (
          <div key={index} className="forecast-card">
            <p>{new Date(item.date).toLocaleDateString()}</p>
            <p>High: {unit === 'metric' ? item.day.maxtemp_c : item.day.maxtemp_f} {tempSymbol}</p>
            <p>Low: {unit === 'metric' ? item.day.mintemp_c : item.day.mintemp_f} {tempSymbol}</p>
            <p>{item.day.condition.text}</p>
            <img
              src={item.day.condition.icon}
              alt="weather icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
