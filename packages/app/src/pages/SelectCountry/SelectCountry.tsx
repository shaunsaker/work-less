import React from 'react';

import ASSETS from '../../assets';

import Layout from '../../components/Layout';

interface Props {
  handleSubmitPress: () => void;
  handleFooterLinkPress: Function;
}

const SelectCountry: React.FC<Props> = ({ handleSubmitPress, handleFooterLinkPress }) => {
  const titleHighlightText = 'country';
  const titleText = `Select your ${titleHighlightText}`;
  const imageSource = ASSETS.selectCountry;
  const buttons = [
    {
      text: 'SUBMIT',
      handlePress: handleSubmitPress,
    },
  ];

  return (
    <Layout
      titleText={titleText}
      titleHighlightText={titleHighlightText}
      imageSource={imageSource}
      buttons={buttons}
      handleFooterLinkPress={handleFooterLinkPress}
    />
  );
};

export default SelectCountry;
