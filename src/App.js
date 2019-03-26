import React from "react";
import "./resources/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header_Footer/Header";
import Features from "./components/Featured";

const App = () => {
  return (
    <div className="App" style={{ height: "1500px", background: "red" }}>
      <Header />
      <Features />
    </div>
  );
};

export default App;
