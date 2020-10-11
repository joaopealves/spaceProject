import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function NavBar() {
  return (
    <div>
      <div className="nav">
        <Link to="/" className="buttonContainer" id="homeButton">
          <p className="buttonText">Home</p>
        </Link>
        <Link to="/about" className="buttonContainer">
          <p className="buttonText">About US</p>
        </Link>
        <div className="buttonContainer">
          <p className="buttonText">Galery</p>
        </div>
        <div className="buttonContainer">
          <p className="buttonText">Curiosity</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
