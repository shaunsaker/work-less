import React from 'react';
import { storiesOf } from '@storybook/react';

import InputLeaveDays from '..';

const handleNavigate = (link: string) => console.log(link);

storiesOf('Pages|InputLeaveDays', module).add('default', () => (
  <InputLeaveDays handleNavigate={handleNavigate} />
));
