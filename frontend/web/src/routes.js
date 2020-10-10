import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
// import App from './App';
import Home from './pages/home/index';
import splash from './pages/splashScreen/index';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={splash} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
}

export default Routes;
