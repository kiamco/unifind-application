import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signUp';
import RepDash from './pages/repDashboard';
import Dashboard from './pages/dashboard';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/auth/privateRoute';
import './index.css'


function App(props) {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/login' render={props => <Login {...props} />}/>
      <Route exact path='/signup' render={props => <Signup {...props} />}/>
      <PrivateRoute exact path='/reps/:collegeName' component={RepDash} />
      <PrivateRoute exact path='/dashboard/:name' component={Dashboard} />
    </div>
  );
};

export default App;
