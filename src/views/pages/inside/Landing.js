import React from "react";
import { Container } from "react-bootstrap";

// Custom Components
import Login from "../auth/Login";
import HeroSection from "../../components/HeroSection.js";

const Landing = () => {
  return (
    <HeroSection>
      <Container className="px-5 d-flex justify-content-center align-items-center">
          <h5 className="text-white text-center">
            Welcome to the weather forecast web application. Please login with
            your Github user to use the application and view the weather in your
            city.
          </h5>
      </Container>
      <Login />
    </HeroSection>
  );
};

export default Landing;
