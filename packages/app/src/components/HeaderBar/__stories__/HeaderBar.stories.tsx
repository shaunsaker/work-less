import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import HeaderBar from '..';

storiesOf('Components|HeaderBar', module)
  .add('default', () => <HeaderBar showShadow />)
  .add('no shadow', () => <HeaderBar />);
