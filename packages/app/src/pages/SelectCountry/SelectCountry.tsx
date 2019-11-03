import React from 'react';
import { View } from 'reactxp';

import ASSETS from '../../assets';
import styles from './styles';

import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';
import CountryButton from '../../components/CountryButton';

interface Props {
  handleChangeCountry: (text: string) => void;
  handleSubmit: () => void;
  handleFooterLinkPress: Function;
}

const SelectCountry: React.FC<Props> = ({
  handleChangeCountry,
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
            handleChange={handleChangeCountry}
            handleSubmit={handleSubmit}
          />
        </View>
      </View>
    </Layout>
  );
};

export default SelectCountry;
