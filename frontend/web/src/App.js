import React from 'react';
import { Link } from 'react-router-dom';

import './Global.css';

function App() {
  return (
    <div className="container">
      <Link className="home" to="/home">
        Start
      </Link>
    </div>
  );
}

export default App;
