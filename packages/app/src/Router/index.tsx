import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from './routes';

const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {Object.keys(routes).map((key) => {
          const routeInfo = routes[key];
          const { path, exact, component: Component } = routeInfo;

          return (
            <Route key={key} path={path} exact={exact}>
              <Component />
            </Route>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default RouterComponent;
