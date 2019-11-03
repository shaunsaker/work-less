import React from 'react';
import { storiesOf } from '@storybook/react';

import SelectCountry from '..';

const handleNavigatePress = (link: string) => console.log(link);

storiesOf('Pages|SelectCountry', module).add('default', () => (
  <SelectCountry handleNavigatePress={handleNavigatePress} />
));
