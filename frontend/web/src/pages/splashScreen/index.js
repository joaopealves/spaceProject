import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function splash() {
  return (
    <div className="container">
      <Link className="home" to="/home">
        Start
      </Link>
    </div>
  );
}
