import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { withRouter, RouteComponentProps } from 'react-router';

import SelectCountry from './SelectCountry';
import Country from '../../types/Country';
import Page from '../../types/Page';
import routes from '../../Router/routes';
import { watch, state, dispatch } from '../../model';
import { getCountries } from '../../actions';
import { sortArrayOfObjectsByKey } from '../../utils';

interface Props extends Page, RouteComponentProps {}

const SelectCountryContainer: React.FC<Props> = ({ history }) => {
  let countries = watch(state.countries);

  if (countries.length) {
    countries = sortArrayOfObjectsByKey(countries, 'name');

    const countryCodeByLocation = watch(state.location.countryCode);

    if (countryCodeByLocation) {
      const countryByLocation = countries.filter(({ id }) => id === countryCodeByLocation)[0];
      countries = countries.filter(({ id }) => id !== countryCodeByLocation);
      countries.unshift(countryByLocation);
    }
  }

  const [country, setCountry] = useState('');
  const onChangeCountry = (text: string) => {
    setCountry(text);
  };
  const onSelectCountry = (country: Country) => {
    const { name } = country;

    setCountry(name);
  };
  const onSubmit = () => {
    history.push(routes.inputLeaveDays.path);
  };
  const onBack = () => {
    history.goBack();
  };

  useEffect(() => {
    /*
     * If we don't have countries in the store, go and fetch them
     */
    if (!countries.length) {
      dispatch(getCountries)();
    }
  }, [true]); // Only run once

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
   * Display loading state if we don't have countries yey
   */
  const isLoading = Boolean(!countries.length);

  /*
   * Disable the submit button if there is a country match
   * in countries (case sensitive)
   */
  const isSubmitDisabled = Boolean(!countries.filter((item) => item.name === country).length);

  return (
    <SelectCountry
      country={country}
      countries={countryResults}
      isLoading={isLoading}
      isSubmitDisabled={isSubmitDisabled}
      handleChangeCountry={onChangeCountry}
      handleSelectCountry={onSelectCountry}
      handleSubmit={onSubmit}
      handleBack={onBack}
    />
  );
};

export default withRouter(SelectCountryContainer);
