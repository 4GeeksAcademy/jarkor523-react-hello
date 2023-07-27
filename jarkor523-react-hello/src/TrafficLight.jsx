import React, { useState } from 'react';
import './TrafficLight.css';

const TrafficLight = ({ selectedColor, onClick }) => {
  return (
    <div className='container'>
    <div className="semaforo">
      <div
        className={`light red ${selectedColor === 'red' ? 'active' : ''}`}
        onClick={() => onClick('red')}
      ></div>
      <div
        className={`light yellow ${selectedColor === 'yellow' ? 'active' : ''}`}
        onClick={() => onClick('yellow')}
      ></div>
      <div
        className={`light green ${selectedColor === 'green' ? 'active' : ''}`}
        onClick={() => onClick('green')}
      ></div>
    </div>
    </div>
  );
};

export default TrafficLight;

