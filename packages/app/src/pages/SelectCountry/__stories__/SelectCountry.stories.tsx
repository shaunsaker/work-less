import React from 'react';
import { storiesOf } from '@storybook/react';

import SelectCountry from '..';
import COUNTRIES from './countries';

const handleNavigate = (link: string) => console.log(link);

storiesOf('Pages|SelectCountry', module).add('default', () => (
  <SelectCountry countries={COUNTRIES} handleNavigate={handleNavigate} />
));