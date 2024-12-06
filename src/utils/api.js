// const API_KEY = '6bb2d0103d7a4aee99d103054242711';
// const BASE_URL = 'https://api.weatherapi.com/v1';
 
// export const fetchWeatherData = (city, unit = 'metric') => {
//   return fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}&units=${unit}`)
//     .then(response => response.json())
//     .catch(err => {
//       throw new Error('Error fetching weather data');
//     });
// };



import axios from 'axios';

const API_KEY = '6bb2d0103d7a4aee99d103054242711';
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchWeatherData = (city, unit = 'metric') => {
  return axios.get(`${BASE_URL}/current.json`, {
    params: {
      key: API_KEY,
      q: city,
      units: unit
    }
  })
  .then(response => response.data)
  .catch(err => {
    throw new Error('Error fetching weather data');
  });
};
