import React from 'react';
import {Sidebar} from './assets/components/Sidebar';
import {Instructions} from './assets/components/Instructions';
import {Downloads} from './assets/components/Downloads';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="sidebar"><Sidebar/></div>
      <div className="instructions"><Instructions/></div>
      <div className="downloads"><Downloads/></div>

    </div>
  );
}

export default App;
