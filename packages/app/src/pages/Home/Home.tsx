import React from 'react';

import ASSETS from '../../assets';

import Layout from '../../components/Layout';

interface Props {
  handleSubmit: () => void;
  handleFooterLinkPress: Function;
}

const Home: React.FC<Props> = ({ handleSubmit, handleFooterLinkPress }) => {
  const titleHighlightText = 'consecutive time-off';
  const titleText = `Maximise your ${titleHighlightText}`;
  const paragraphText =
    'Our app will auto-magically calculate the best configuration of leave days to maximise your consecutive time off, based on your country’s leave days.\n\nAlso, it’s absolutely free. Sweet deal!';
  const imageSource = ASSETS.home;
  const buttons = [
    {
      text: "LET'S GET CRACKALACKING!",
      handlePress: handleSubmit,
    },
  ];

  return (
    <Layout
      titleText={titleText}
      titleHighlightText={titleHighlightText}
      paragraphText={paragraphText}
      imageSource={imageSource}
      buttons={buttons}
      handleFooterLinkPress={handleFooterLinkPress}
    />
  );
};

export default Home;
