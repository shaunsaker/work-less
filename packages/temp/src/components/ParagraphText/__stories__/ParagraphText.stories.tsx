import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import ParagraphText from '..';

const text =
  'Our app will auto-magically calculate the best configuration of leave days to maximise your consecutive time off, based on your country’s leave days.';

storiesOf('Components|ParagraphText', module).add('default', () => (
  <ParagraphText>{text}</ParagraphText>
));
