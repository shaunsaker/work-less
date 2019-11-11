import React from 'react';
import { Router, navigate } from '@reach/router';

import routes from './routes';
import Route from '../types/Route';

const RouterComponent: React.FC = () => {
  const onNavigate = (route: Route) => {
    navigate(route.path);
  };
  const onBack = () => {
    window.history.back();
  };
  const props = {
    handleNavigate: onNavigate,
    handleBack: onBack,
  };

  return (
    <Router style={{ width: '100%' }}>
      {Object.keys(routes).map((key) => {
        const routeInfo = routes[key];
        const { component: Component } = routeInfo;

        return <Component key={key} {...routeInfo} {...props} />;
      })}
    </Router>
  );
};

export default RouterComponent;
