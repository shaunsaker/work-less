import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import Button from '..';

const text = "Let's get crackalacking!";

storiesOf('Components|Button', module)
  .add('default', () => <Button text={text} handlePress={console.log} />)
  .add('secondary', () => <Button text={text} isSecondary handlePress={console.log} />);
