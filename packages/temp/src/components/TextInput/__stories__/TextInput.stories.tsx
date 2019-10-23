import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line

import TextInput from '..';
import withResponsiveViews from '../../../../.storybook/decorators/withResponsiveViews';

const label = 'Search Country';

storiesOf('Components|TextInput', module)
  .addDecorator(withResponsiveViews)
  .add('default', () => (
    <TextInput label={label} handleChange={console.log} handleSubmit={console.log} />
  ));
