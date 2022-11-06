import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

// Components
import Navbar from "./views/components/Navbar";
import Loading from "./views/components/Loading";
import Footer from "./views/components/Footer";

// Styles
import "./App.css";
import './assets/scss/styles.scss';

// Pages
import Landing from "./views/pages/inside/Landing";
import Home from "./views/pages/inside/Home";
import Weather from "./views/pages/inside/Weather";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/weather/:lat/:lon" component={Weather} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
