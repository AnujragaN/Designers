import React from 'react';
import './App.css';
import Home from './Containers/Home';
import Header from './Components/Header';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Hero/>
    </div>
  );
}

export default App;
