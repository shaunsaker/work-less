import React from 'react';
import { App, UserInterface } from 'reactxp';
import MainApp from './App';
import { DEBUG, DEV } from './config';

App.initialize(DEBUG, DEV);
UserInterface.setMainView(<MainApp />);
