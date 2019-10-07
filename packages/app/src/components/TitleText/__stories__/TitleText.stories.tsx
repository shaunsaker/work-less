import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import TitleText from '..';

const textArray = [
  {
    text: 'Maximise your ',
  },
  {
    text: 'consecutive time-off',
    isHighlighted: true,
  },
  {
    text: '.',
  },
];

storiesOf('Components|TitleText', module).add('default', () => <TitleText textArray={textArray} />);
