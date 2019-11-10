import React from 'react';
import { storiesOf } from '@storybook/react';

import Home from '..';

const handleNavigate = (link: string) => console.log(link);
const handleBack = () => {};

storiesOf('Pages|Home', module).add('default', () => (
  <Home handleNavigate={handleNavigate} handleBack={handleBack} />
));
