import React from 'react';
import { storiesOf } from '@storybook/react';

import Results from '../Results';

const func = () => {};
const props = {
  daysOff: 42,
  datesOfSignificance: [],
  handleShare: func,
  handleBack: func,
};

storiesOf('Pages|Results', module).add('default', () => <Results {...props} />);
