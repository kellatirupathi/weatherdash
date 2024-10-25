// src/utils/api.js
import axios from 'axios';

const API_KEY = 'f3e60d91d22421f77ca5bac8d290240e'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = (city) => {
  return axios.get(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
};

export const fetchForecastData = (city) => {
  return axios.get(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
};
