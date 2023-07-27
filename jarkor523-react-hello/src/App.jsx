import React, { useState } from 'react';
import './App.css';
import TrafficLight from './TrafficLight';

function App() {
  const [color, setColor] = useState("red");

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="App">
      <h1>Traffic Light</h1>
      <TrafficLight selectedColor={color} onClick={handleClick} />
    </div>
  );
}

export default App;

