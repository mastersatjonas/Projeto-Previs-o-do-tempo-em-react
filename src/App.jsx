// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';
import './App.css'; // Importar o CSS global

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const apiKey = '7e461d6f17643a5d6952f116fa1f9cdb'; // Substitua pela sua chave de API
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Erro ao buscar o clima:', error);
    }
  };

  return (
    <div className="App">
      <h1>Previsão do Tempo</h1>
      <WeatherForm onSearch={fetchWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
