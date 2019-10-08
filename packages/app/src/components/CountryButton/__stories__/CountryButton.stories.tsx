import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import CountryButton from '..';

const name = 'South Africa';
const id = 'za';

storiesOf('Components|CountryButton', module).add('default', () => (
  <CountryButton name={name} id={id} handlePress={console.log} />
));
