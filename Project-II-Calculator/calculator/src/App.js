import React from 'react';
import './App.css';

import ButtonContainer from "./components/ButtonComponents/ButtonContainer";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";



const App = () => {
  return (
    <div>
      <ButtonContainer />
      <CalculatorDisplay />
    </div>
  );
};

export default App;
