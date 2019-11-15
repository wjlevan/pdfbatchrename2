import React from 'react';
import {Sidebar} from './assets/components/Sidebar';
import {Instructions} from './assets/components/Instructions';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="sidebar"><Sidebar/></div>
      <div className="instructions"><Instructions/></div>

    </div>
  );
}

export default App;
