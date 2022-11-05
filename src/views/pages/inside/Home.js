import React from "react";
import "../../../App.css";
import "../../../assets/css/HeroSection.css";
import cloudVideo from "../../../assets/videos/clouds.mp4";
import { Button } from "../../components/Button";

import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user } = useAuth0();
  return (
    <div className="hero-container">
      <video src={cloudVideo} autoPlay loop muted />
      <h1> {user.name} </h1>
      <p> {user.email} </p>
      <p>City</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Display Weather
        </Button>
      </div>
    </div>
  );
};

export default Home;
