import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import YearlyCalendar from '..';
import DATES_OF_SIGNIFICANCE from './datesOfSignificance';

storiesOf('Components|YearlyCalendar', module).add('default', () => (
  <YearlyCalendar datesOfSignificance={DATES_OF_SIGNIFICANCE} />
));
