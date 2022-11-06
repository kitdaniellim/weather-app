import React from "react";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

// Custom Components
import CustomButton from "../../components/CustomButton.js";
import HeroSection from "../../components/HeroSection.js";

const Home = () => {
  const { user } = useAuth0();
  return (
    <HeroSection>
      <h1 className="text-white"> { user.nickname } </h1>
      <p> { user.email } </p>
      <p>City</p>
      <CustomButton to="/weather" label="Display Weather" />
    </HeroSection>
  );
};

export default Home;
