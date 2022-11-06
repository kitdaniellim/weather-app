import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "./CustomButton";
import { Link } from "react-router-dom";
import "../../assets/css/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const { isAuthenticated, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <>
      <nav className="navbar p-0">
        <div className="navbar-container">
          <Link
            to="/home"
            className="navbar-logo justify-content-center align-items-center"
            onClick={closeMobileMenu}
          >
            <i className="fa fa-cloud pt-2 pt-lg-0" />
            <h3 className="text-primary align-self-center mb-0 ml-2 d-none d-lg-flex">
              Weather Forecast
            </h3>
          </Link>
          {isAuthenticated && (
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
          )}
          <div>
            <ul className={click ? "nav-menu pt-3 active" : "nav-menu pt-3"}>
              {isAuthenticated && (
                <li className="nav-item">
                  <Link
                    to="/home"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link
                    to="/weather/1/1"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Weather
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-links"
                    onClick={() => logoutWithRedirect()}
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
