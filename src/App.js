import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
      <Dinner dishName="Chicken Biryani" sweetDish="kheer"></Dinner>
      <Dinner dishName="Chicken Karahi" sweetDish="Custurd"></Dinner>
    </div>
  );
}

export default App;
