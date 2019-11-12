import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

const RouterComponent: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Switch>{children}</Switch>
    </BrowserRouter>
  );
};

export default RouterComponent;
