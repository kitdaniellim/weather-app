import React from 'react';
import Navbar from './views/components/Navbar';
import './App.css';
import Home from './views/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './views/pages/Services';
import Products from './views/pages/Products';
import SignUp from './views/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
