// this is the blueprint the spine of the website
import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <button className="signup-btn">SIGN UP →</button>
        <div className="nav-buttons">
          <button className="nav-btn">about</button>
          <button className="nav-btn">contact</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;