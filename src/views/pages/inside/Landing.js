import React from "react";
import "../../../App.css";
import '../../../assets/css/HeroSection.css';
import Login from "../auth/Login";
import cloudVideo from "../../../assets/videos/clouds.mp4";

function Landing() {
  return (
    <>
      <div className="hero-container">
        <video src={cloudVideo} autoPlay loop muted />
        <p>Welcome to the weather forecast web application. Please login with your Github user</p>
        <div className="hero-btns">
          <Login/>
        </div>
      </div>
    </>
  );
}

export default Landing;
