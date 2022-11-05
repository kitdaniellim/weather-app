import React from "react";
import "../../../App.css";
import '../../../assets/css/HeroSection.css';
import Footer from "../../components/Footer";
import cloudVideo from "../../../assets/videos/clouds.mp4";
import { Button } from '../../components/Button';


function Home() {
  return (
    <>
      <div className="hero-container">
        <video src={cloudVideo} autoPlay loop muted />
        <h1>John Smith</h1>
        <p>https://github.com/smithjohn</p>
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
      <Footer />
    </>
  );
}

export default Home;
