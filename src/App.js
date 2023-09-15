import React from "react";
import Navbar from "./components/Navbar";
import FeaturedProducts from "./components/FeaturedProducts";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <FeaturedProducts />
    </div>
  );
};

export default App;