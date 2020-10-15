import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home';
import Registration from './pages/Registration';
import Team from './pages/Team';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Registration} />
      <Route path="/team" component={Team} />
    </BrowserRouter>
  );
}

export default Routes;
