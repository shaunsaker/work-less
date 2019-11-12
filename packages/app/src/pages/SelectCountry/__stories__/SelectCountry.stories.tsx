import React from 'react';
import { storiesOf } from '@storybook/react';

import SelectCountry from '../SelectCountry';
import COUNTRIES from './countries';

const func = () => {};
const props = {
  country: COUNTRIES[0].name,
  countries: COUNTRIES,
  handleSelectCountry: func,
  handleChangeCountry: func,
  handleSubmit: func,
  handleBack: func,
};

storiesOf('Pages|SelectCountry', module).add('default', () => <SelectCountry {...props} />);
