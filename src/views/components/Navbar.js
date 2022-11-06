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

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i class="fa fa-cloud" />
            <span className="text-primary"> Weather Forecast </span>  
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {isAuthenticated && (
              <li className="nav-item">
                <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <Link
                  to="/weather"
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
          {/* {isAuthenticated  && (
            <Link
              to="/"
              className="nav-links-mobile"
              onClick={() => logoutWithRedirect()}
            >
              Logout
            </Link>
          )} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
