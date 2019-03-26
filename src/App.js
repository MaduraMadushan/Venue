import React from "react";
import "./resources/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header_Footer/Header";
import Features from "./components/Featured";
import VenueNfo from "./components/venueNfo";

const App = () => {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />
      <Features />
      <VenueNfo />
    </div>
  );
};

export default App;
