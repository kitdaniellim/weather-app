import React from "react";
import { Container } from "react-bootstrap";

// Custom Components
import CustomButton from "../../components/CustomButton.js";
import HeroSection from "../../components/HeroSection.js";

const Weather = () => {
  return (
    <HeroSection>
      <p>This is the Weather</p>
      <CustomButton to="/home" label="Go Back Home" />
    </HeroSection>
  );
};

export default Weather;
