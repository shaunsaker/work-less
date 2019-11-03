import React from 'react';
import { storiesOf } from '@storybook/react';

import SelectCountry from '..';

const countries = [
  {
    name: 'South Africa',
    id: 'za',
  },
];
const handleNavigate = (link: string) => console.log(link);

storiesOf('Pages|SelectCountry', module).add('default', () => (
  <SelectCountry countries={countries} handleNavigate={handleNavigate} />
));
