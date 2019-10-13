import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import Calendar from '..';
import DATES_OF_SIGNIFICANCE from '../../__stories__/dates';

const date = new Date(2019, 9, 1);

/*
 * TODO: Pass in dates of significance
 */
storiesOf('Components|Calendar', module).add('default', () => (
  <Calendar date={date} datesOfSignificance={DATES_OF_SIGNIFICANCE} />
));
