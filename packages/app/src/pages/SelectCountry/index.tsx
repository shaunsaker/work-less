import React from 'react';

import SelectCountry from './SelectCountry';

interface Props {
  handleNavigatePress: Function;
  handleBackPress?: () => void;
}

const SelectCountryContainer: React.FC<Props> = ({ handleNavigatePress }) => {
  const onSubmitPress = () => {};

  return (
    <SelectCountry handleSubmitPress={onSubmitPress} handleFooterLinkPress={handleNavigatePress} />
  );
};

export default SelectCountryContainer;
