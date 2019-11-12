import React from 'react';
import { storiesOf } from '@storybook/react';

import InputLeaveDays from '../InputLeaveDays';

const func = () => {};
const props = {
  leaveDays: '31',
  handleChangeLeaveDays: func,
  handleSubmit: func,
  handleBack: func,
};

storiesOf('Pages|InputLeaveDays', module).add('default', () => <InputLeaveDays {...props} />);
