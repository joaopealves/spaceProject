import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import aboutUs from './pages/aboutUs';

import Home from './pages/home/index';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={aboutUs} />
    </BrowserRouter>
  );
}

export default Routes;
