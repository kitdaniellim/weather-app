import React from "react";
import { Container } from "react-bootstrap";

// Custom Components
import Login from "../auth/Login";
import HeroSection from "../../components/HeroSection.js";

const Landing = () => {
  return (
    <HeroSection>
      <Container className="px-5 d-flex justify-content-center align-items-center">
        <h4 className="text-white">
          Welcome to the weather forecast web application. Please login with your
          Github user
        </h4>
      </Container>
      <Login />
    </HeroSection>
  );
};

export default Landing;
