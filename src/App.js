import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signUp';
import { Route } from 'react-router-dom';
import './index.css'


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/login' render={props => <Login {...props} />}/>
      <Route exact path='/signup' component={Signup} />


    </div>
  );
}

export default App;
