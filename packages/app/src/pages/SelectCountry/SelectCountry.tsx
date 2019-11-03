import React from 'react';
import { View, Image, ScrollView } from 'reactxp';

import styles from './styles';
import ASSETS from '../../assets';

import HeaderBar from '../../components/HeaderBar';
import TitleText from '../../components/TitleText';
import ParagraphText from '../../components/ParagraphText';
import Button from '../../components/Button';
import FooterBar from '../../components/FooterBar';

interface Props {
  handleSubmitPress: () => void;
  handleFooterLinkPress: Function;
}

const SelectCountry: React.FC<Props> = ({ handleSubmitPress, handleFooterLinkPress }) => {
  const titleHighlightText = 'country';
  const titleText = `Select your ${titleHighlightText}`;

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image source={ASSETS.home} resizeMode="contain" style={styles.image} />
          </View>

          <View style={styles.textContainer}>
            <View style={styles.titleTextContainer}>
              <TitleText text={titleText} highlightText={titleHighlightText} />
            </View>

            <View style={styles.buttonContainer}>
              <Button text="LET'S GET CRACKALACKING" handlePress={handleSubmitPress} />
            </View>
          </View>
        </View>

        <FooterBar handleLinkPress={handleFooterLinkPress} />
      </ScrollView>

      <View style={styles.headerBarContainer}>
        <HeaderBar />
      </View>
    </View>
  );
};

export default SelectCountry;
