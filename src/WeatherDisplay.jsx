// src/WeatherDisplay.js
import React from 'react';
import './WeatherDisplay.css'; // Importar o CSS da exibição

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  return (
    <div>
      <h2>Previsão do Tempo em {weather.name}</h2>
      <p>Temperatura: {Math.round(weather.main.temp)}°C</p>
      <p>Condição: {weather.weather[0].description}</p>
      <p>Umidade: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
