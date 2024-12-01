import React from 'react';
import Navbar from './components/utils/NavBar';

const App = () => {
  const nutriologo = true;

  return (
    <Navbar isNutriologo = {nutriologo}></Navbar>
  );
}

export default App;



