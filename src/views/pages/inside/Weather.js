import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

// Custom Components
import CustomButton from "../../components/CustomButton.js";
import HeroSection from "../../components/HeroSection.js";

function Weather() {
  const [data, setData] = useState({
    main: {
      temp: "",
      pressure: "",
      humidity: "",
    },
    weather: [
      {
        description: "",
        main: "",
      },
    ],
  });

  const { lat, lon } = useParams({});

  const currentDate = moment().format("MM/DD/YYYY");

  useEffect(() => {
    const url =
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=` +
      process.env.REACT_APP_WEATHER_MAP_APIKEY;
    getWeatherData(url);
  }, [lat, lon]);

  const getWeatherData = (url) => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  return (
    <HeroSection>
      <h3 className="text-white mb-1">LATITUDE: {lat}</h3>
      <h3 className="text-white mb-1">LONGITUDE: {lon}</h3>
      <Container className="my-3">
        <Table striped bordered hover className="text-white px-2">
          <thead>
            <tr>
              <th>Date (mm/dd/yyyy)</th>
              <th>Temp (F)</th>
              <th className="d-none d-md-table-cell">Description</th>
              <th className="d-none d-md-table-cell">Main</th>
              <th className="d-none d-md-table-cell">Pressure</th>
              <th className="d-none d-md-table-cell">Humidity</th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr>
              <td className="text-secondary">{currentDate}</td>
              <td className="text-secondary"> {data.main.temp} </td>
              <td className="d-none d-md-table-cell text-secondary">
                {data.weather[0].description}
              </td>
              <td className="d-none d-md-table-cell text-secondary">
                {data.weather[0].main}
              </td>
              <td className="d-none d-md-table-cell text-secondary">
                {" "}
                {data.main.pressure}{" "}
              </td>
              <td className="d-none d-md-table-cell text-secondary">
                {" "}
                {data.main.humidity}{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <div className="mb-5 pb-5">
        <CustomButton to="/home" label="Go Back Home" />
      </div>
    </HeroSection>
  );
}

export default Weather;
