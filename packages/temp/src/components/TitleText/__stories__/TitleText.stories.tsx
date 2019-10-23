import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import TitleText from '..';
import withResponsiveViews from '../../../../.storybook/decorators/withResponsiveViews';

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

storiesOf('Components|TitleText', module)
  .addDecorator(withResponsiveViews)
  .add('default', () => <TitleText textArray={textArray} />);
