import React from 'react';
import Home from './pages/home';
import { Route } from 'react-router-dom';
import './index.css'


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />

    </div>
  );
}

export default App;
