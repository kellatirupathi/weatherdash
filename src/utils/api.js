import axios from 'axios';

const API_KEY = '6bb2d0103d7a4aee99d103054242711';
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchWeatherData = (city, unit = 'metric') => {
  return axios.get(`${BASE_URL}/current.json`, {
    params: {
      key: API_KEY,
      q: city,
    },
  });
};
