import React from 'react';
import '../../assets/css/HeroSection.css';
import cloudVideo from "../../assets/videos/clouds.mp4";

const HeroSection = (props) => {

  return (
    <div className='hero-container'>
      <video src={cloudVideo} autoPlay loop muted />
      { props.children }
    </div>
  );
}

export default HeroSection;
