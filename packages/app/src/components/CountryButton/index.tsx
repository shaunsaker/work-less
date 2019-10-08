import React from 'react';

import COUNTRIES from '../../assets/images/countries';

import CountryButton, { CountryButtonProps } from './CountryButton';

interface Props extends CountryButtonProps {
  id: string;
}

const CountryButtonContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const imageSrc = COUNTRIES[id];

  return <CountryButton {...props} imageSrc={imageSrc} />;
};

export default CountryButtonContainer;
