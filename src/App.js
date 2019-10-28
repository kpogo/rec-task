import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Landing from './Landing';

const App = () => {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
      </Router>
    </div>
  );
};

export default App;
