import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Register />
    </div>
  );
};

export default App;
