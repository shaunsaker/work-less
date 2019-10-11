import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import Button from '..';
import withResponsiveViews from '../../../../.storybook/decorators/withResponsiveViews';

const text = "Let's get crackalacking!";

storiesOf('Components|Button', module)
  .addDecorator(withResponsiveViews)
  .add('default', () => <Button text={text} handlePress={console.log} />)
  .add('secondary', () => <Button text={text} isSecondary handlePress={console.log} />);
