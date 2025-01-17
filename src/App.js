// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Card from "./Components/Card";
import sedans from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

function App() {
  return (
    <div className="cardContainer">
      <Card
        name="SEDANS"
        body="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        imgUrl={sedans}
        color="brightOrange"
        btn="Learn More"
      />
      <Card
        name="SUVS"
        body="Take an SUV for its spacious interior, power, and versatility. Perfect for your family vacation and off-road adventures."
        imgUrl={suvs}
        color="darkCyan"
        btn="Learn More"
      />
      <Card
        name="LUXURY"
        body="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        imgUrl={luxury}
        color="veryDark"
        btn="Learn More"
      />
    </div>
  );
}

export default App;
