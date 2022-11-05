import React from 'react';
import Navbar from './views/components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/pages/inside/Home';
import Weather from './views/pages/inside/Weather';
import Login from './views/pages/auth/Login';
import SignUp from './views/pages/auth/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/weather' component={Weather} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
