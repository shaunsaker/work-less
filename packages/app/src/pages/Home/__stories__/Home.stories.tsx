import React from 'react';
import { storiesOf } from '@storybook/react';

import Home from '../Home';

const handleFooterLinkPress = (link: string) => console.log(link);

storiesOf('Pages|Home', module).add('default', () => (
  <Home handleFooterLinkPress={handleFooterLinkPress} />
));
