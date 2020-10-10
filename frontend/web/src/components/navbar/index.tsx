import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

interface navBarProps {
  title: String;
}

const navBar: React.FC<navBarProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/"></Link>
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>

        {props.children}
      </div>
    </header>
  );
};

export default navBar;
