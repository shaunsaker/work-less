import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import CountryButton from '..';
import withResponsiveViews from '../../../../.storybook/decorators/withResponsiveViews';

const name = 'South Africa';
const id = 'za';

storiesOf('Components|CountryButton', module)
  .addDecorator(withResponsiveViews)
  .add('default', () => <CountryButton name={name} id={id} handlePress={console.log} />);
