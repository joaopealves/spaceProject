import React, { Component } from 'react';
import './style.css';

function NavBar() {
  return (
    <div>
      <div className="nav">
        <div className="buttonContainer" id="homeButton">
          <p className="buttonText">Home</p>
        </div>
        <div className="buttonContainer">
          <p className="buttonText">About US</p>
        </div>
        <div className="buttonContainer">
          <p className="buttonText">Galery</p>
        </div>
        <div className="buttonContainer">
          <p className="buttonText">Curiosity</p>
        </div>
      </div>
      <div className="getStartedContainer">
        <p>Discover the solar system in a way you've never seen.</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default NavBar;
