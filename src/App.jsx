import React from 'react';
import './App.css';
import MainPanel from './components/MainPanel';
import CityPanel from './components/CityPanel';

function App() {
  return (
    <div className='app'>
      <div className='mainSection'>
        <MainPanel /></div>
      <div className='cityPanel'>
        <CityPanel /></div>

    </div>
  )
}

export default App
