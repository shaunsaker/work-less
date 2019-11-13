import React from 'react';
import { storiesOf } from '@storybook/react';

import Error from '../Error';

const message = 'We could not fetch your data.';
const handleReloadPress = () => {};

storiesOf('Components|Error', module).add('default', () => (
  <Error message={message} handleReloadPress={handleReloadPress} />
));
