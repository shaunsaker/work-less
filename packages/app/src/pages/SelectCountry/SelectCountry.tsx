import React from 'react';
import { View } from 'reactxp';

import ASSETS from '../../assets';
import styles from './styles';
import Country from '../../types/Country';

import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';
import CountryButton from '../../components/CountryButton';

interface Props {
  country: string;
  countries: Country[];
  isSubmitDisabled: boolean;
  handleSelectCountry: (country: Country) => void;
  handleChangeCountry: (text: string) => void;
  handleSubmit: () => void;
  handleFooterLinkPress: Function;
}

const SelectCountry: React.FC<Props> = ({
  country,
  countries,
  isSubmitDisabled,
  handleChangeCountry,
  handleSelectCountry,
  handleSubmit,
  handleFooterLinkPress,
}) => {
  const titleHighlightText = 'country';
  const titleText = `Select your ${titleHighlightText}`;
  const imageSource = ASSETS.selectCountry;
  const textInputLabel = 'Search countries...';
  const buttons = [
    {
      text: 'SUBMIT',
      isDisabled: isSubmitDisabled,
      handlePress: handleSubmit,
    },
  ];

  return (
    <Layout
      titleText={titleText}
      titleHighlightText={titleHighlightText}
      imageSource={imageSource}
      buttons={buttons}
      handleFooterLinkPress={handleFooterLinkPress}
    >
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            label={textInputLabel}
            value={country}
            handleChange={handleChangeCountry}
            handleSubmit={handleSubmit}
          />
        </View>

        <View style={styles.resultsContainer}>
          {countries &&
            countries.map((item) => {
              return (
                <View style={styles.countryButtonContainer}>
                  <CountryButton {...item} handlePress={() => handleSelectCountry(item)} />
                </View>
              );
            })}
        </View>
      </View>
    </Layout>
  );
};

export default SelectCountry;
