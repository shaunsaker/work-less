import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import FooterBar from '..';

storiesOf('Components|FooterBar', module).add('default', () => (
  <FooterBar handleLinkPress={console.log} />
));
