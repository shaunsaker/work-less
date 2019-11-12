import React from 'react';
import { NativeRouter } from 'react-router-native';

const RouterComponent: React.FC = ({ children }) => {
  return <NativeRouter>{children}</NativeRouter>;
};

export default RouterComponent;
