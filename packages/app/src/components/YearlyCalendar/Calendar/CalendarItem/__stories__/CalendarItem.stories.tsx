import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import CalendarItem from '..';

const day = 14;

storiesOf('Components|CalendarItem', module)
  .add('default', () => <CalendarItem day={day} />)
  .add('primary', () => <CalendarItem day={day} isPrimary />)
  .add('secondary', () => <CalendarItem day={day} isSecondary />)
  .add('disabled', () => <CalendarItem day={day} isDisabled />);
