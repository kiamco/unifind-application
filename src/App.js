import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signUp';
import { Route } from 'react-router-dom';
import './index.css'


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />


    </div>
  );
}

export default App;
