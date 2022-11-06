import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Custom Components
import CustomButton from "../../components/CustomButton.js";
import HeroSection from "../../components/HeroSection.js";

const Home = () => {
  const [location, setLocation] = useState("");

  const { user } = useAuth0();
  const history = useHistory();

  const url =
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=` +
    process.env.REACT_APP_WEATHER_MAP_APIKEY;

  const displayWeather = () => {
    if (location !== "") {
      axios.get(url).then((response) => {
        if (response.data !== []) {
          const location = {
            lat: response.data[0].lat,
            lon: response.data[0].lon,
          };
          console.log(location);
          history.push(`/weather/${location.lat}/${location.lon}`);
        } else {
          console.log("Invalid City");
        }
      });
      setLocation("");
    }
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      displayWeather();
    }
  };

  // https://api.openweathermap.org/data/2.5/weather?lat=-53.92572&lon=-93.55650&appid=b264884b58d343c9b3d3da05ece5f2f5

  return (
    <HeroSection>
      <Container className="mb-5 w-100 text-center ">
        <h1 className="text-white"> {user.nickname} </h1>
        <p className="text-white"> {user.email} </p>
        <div className="mx-2">
          <div className="form-group text-center">
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter City Name"
            />
          </div>
        </div>
      </Container>
      <div className="mb-2 pb-5">
        <CustomButton onClick={displayWeather} label="Display Weather" />
      </div>
    </HeroSection>
  );
};

export default Home;
