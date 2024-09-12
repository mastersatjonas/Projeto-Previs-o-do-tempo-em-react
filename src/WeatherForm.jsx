// src/WeatherForm.js
import React, { useState } from 'react';
import './WeatherForm.css'; // Importar o CSS do formulário

const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite o nome da cidade"
      />
      <button>Buscar</button>
    </form>
  );
};

export default WeatherForm;
