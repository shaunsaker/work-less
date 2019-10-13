import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import Calendar from '../Calendar'; // TODO:
import weeks from './weeks';

const month = 'October';

storiesOf('Components|Calendar', module).add('default', () => (
  <Calendar month={month} weeks={weeks} />
));
