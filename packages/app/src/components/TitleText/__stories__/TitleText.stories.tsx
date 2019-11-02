import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import TitleText from '..';
import withResponsiveViews from '../../../../.storybook/decorators/withResponsiveViews';

const highlightText = 'consecutive time-off';
const text = `Maximise your ${highlightText}`;

storiesOf('Components|TitleText', module)
  .addDecorator(withResponsiveViews)
  .add('default', () => <TitleText text={text} highlightText={highlightText} />);
