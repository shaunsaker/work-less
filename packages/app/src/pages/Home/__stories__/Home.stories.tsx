import React from 'react';
import { storiesOf } from '@storybook/react';

import Home from '../Home';

const handleSubmit = () => {};

storiesOf('Pages|Home', module).add('default', () => <Home handleSubmit={handleSubmit} />);
