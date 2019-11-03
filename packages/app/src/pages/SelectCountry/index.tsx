import React, { useState } from 'react';
import Fuse from 'fuse.js';

import SelectCountry from './SelectCountry';
import Country from '../../types/Country';

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

  /*
   * Disable the submit button if there is a country match
   * in countries (case sensitive)
   */
  const isSubmitDisabled = Boolean(!countries.filter((item) => item.name === country).length);

  return (
    <SelectCountry
      country={country}
      countries={countryResults}
      isSubmitDisabled={isSubmitDisabled}
      handleChangeCountry={onChangeCountry}
      handleSelectCountry={onSelectCountry}
      handleSubmit={onSubmit}
      handleFooterLinkPress={handleNavigate}
    />
  );
};

export default SelectCountryContainer;
