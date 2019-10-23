import React from 'react';
import { storiesOf } from '@storybook/react';

import Home from '..';

const handleNavigatePress = (link: string) => console.log(link);

storiesOf('Pages|Home', module).add('default', () => (
  <Home handleNavigatePress={handleNavigatePress} />
));
