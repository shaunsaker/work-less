import React from 'react';
import { storiesOf } from '@storybook/react';

import Results from '..';

const handleNavigate = (link: string) => console.log(link);
const handleBack = () => {};

storiesOf('Pages|Results', module).add('default', () => (
  <Results handleNavigate={handleNavigate} handleBack={handleBack} />
));
