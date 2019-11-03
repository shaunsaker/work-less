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
  const onSelectCountry = (country: Country) => {
    const { name } = country;

    setCountry(name);
  };
  const onSubmit = () => {};

  /*
   * Show all countries initially
   * but then show search results when search term is 2 chars or more
   */
  let countryResults = countries;

  if (country.length >= 2) {
    const searchOptions = {
      shouldSort: true,
      threshold: 0.4, // % non-match is useful for handling spelling errors and word order
      keys: ['name'],
    };
    const fuse = new Fuse(countries, searchOptions);
    countryResults = fuse.search(country);
  }

  return (
    <SelectCountry
      country={country}
      countries={countryResults}
      handleChangeCountry={onChangeCountry}
      handleSelectCountry={onSelectCountry}
      handleSubmit={onSubmit}
      handleFooterLinkPress={handleNavigate}
    />
  );
};

export default SelectCountryContainer;
