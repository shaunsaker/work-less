import React, { useState } from 'react';
import Fuse from 'fuse.js';

import SelectCountry from './SelectCountry';

interface Country {
  name: string;
  id: string;
}

interface Props {
  countries: Country[];
  handleNavigate: Function;
  handleBack?: () => void;
}

const SelectCountryContainer: React.FC<Props> = ({ countries, handleNavigate }) => {
  const [country, setCountry] = useState('');
  const onChangeCountry = (text: string) => {
    setCountry(text);
  };
  const onSubmit = () => {};
  const searchOptions = {
    shouldSort: true,
    threshold: 0.4, // % non-match is useful for handling spelling errors and word order
    minMatchCharLength: 0, // display all the results initially
    keys: ['name'],
  };
  const fuse = new Fuse(countries, searchOptions);
  const countryResults = fuse.search(country);

  return (
    <SelectCountry
      countries={countryResults}
      handleChangeCountry={onChangeCountry}
      handleSubmit={onSubmit}
      handleFooterLinkPress={handleNavigate}
    />
  );
};

export default SelectCountryContainer;
