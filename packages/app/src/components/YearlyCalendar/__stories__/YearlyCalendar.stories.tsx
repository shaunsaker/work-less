import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import YearlyCalendar from '..';
import DATES from './dates';

storiesOf('Components|YearlyCalendar', module).add('default', () => (
  <YearlyCalendar dates={DATES} />
));
