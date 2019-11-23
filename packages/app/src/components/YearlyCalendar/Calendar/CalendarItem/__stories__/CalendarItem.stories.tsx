import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import CalendarItem from '..';

const day = 14;

storiesOf('Components|CalendarItem', module)
  .add('default', () => <CalendarItem day={day} type="default" />)
  .add('leaveDay', () => <CalendarItem day={day} type="leaveDay" />)
  .add('publicHoliday', () => <CalendarItem day={day} type="publicHoliday" />)
  .add('weekend', () => <CalendarItem day={day} type="weekend" />);
