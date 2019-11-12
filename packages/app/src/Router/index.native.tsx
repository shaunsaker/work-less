import React from 'react';
import { NativeRouter, Route } from 'react-router-native';

import routes from './routes';

const RouterComponent: React.FC = () => {
  return (
    <NativeRouter>
      {Object.keys(routes).map((key) => {
        const routeInfo = routes[key];
        const { path, exact, component: Component } = routeInfo;

        return (
          <Route key={key} path={path} exact={exact}>
            <Component />
          </Route>
        );
      })}
    </NativeRouter>
  );
};

export default RouterComponent;
