import React from 'react';
import { Route } from 'react-router';

import routes from './routes';

import RouterWrapper from './RouterWrapper';
import SceneAnimator from './SceneAnimator';

const RouterComponent: React.FC = () => {
  return (
    <RouterWrapper>
      {Object.keys(routes).map((key) => {
        const routeInfo = routes[key];
        const { path, exact, component: Component } = routeInfo;

        return (
          <Route
            key={key}
            path={path}
            exact={exact}
            children={({ match }) => {
              return (
                <SceneAnimator shouldAnimate={!!match}>
                  <Component />
                </SceneAnimator>
              );
            }}
          />
        );
      })}
    </RouterWrapper>
  );
};

export default RouterComponent;
