import React from "react";

import { Router, Switch, Route } from "./Router";
import Home from "./pages/Home";
import SelectCountry from "./pages/SelectCountry";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/select-country" component={SelectCountry} />
      </Switch>
    </Router>
  );
};

export default Routes;
