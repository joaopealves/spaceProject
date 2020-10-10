import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
// import App from './App';
import Home from './pages/home/index';

function Routes() {
  return (
    <BrowserRouter>
      {/* <Route path="/" exact component={App} /> */}
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
}

export default Routes;
