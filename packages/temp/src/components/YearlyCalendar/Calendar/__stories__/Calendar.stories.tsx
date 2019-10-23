import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import Calendar from '..';
import DATES_OF_SIGNIFICANCE from '../../__stories__/datesOfSignificance';

const date = new Date(2019, 9, 1);

storiesOf('Components|Calendar', module).add('default', () => (
  <Calendar date={date} datesOfSignificance={DATES_OF_SIGNIFICANCE} />
));
