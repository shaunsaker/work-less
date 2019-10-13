import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import Calendar from '..';

const date = new Date(2018, 8, 1);

/*
 * TODO: Pass in dates of significance
 */
storiesOf('Components|Calendar', module).add('default', () => <Calendar date={date} />);
