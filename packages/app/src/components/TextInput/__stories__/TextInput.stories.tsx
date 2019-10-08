import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import TextInput from '..';

const label = 'Search Country';

storiesOf('Components|TextInput', module).add('default', () => (
  <TextInput label={label} handleChange={console.log} handleSubmit={console.log} />
));
