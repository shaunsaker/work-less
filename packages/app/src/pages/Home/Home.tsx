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

const Home: React.FC<Props> = ({ handleSubmitPress, handleFooterLinkPress }) => {
  const titleHighlightText = 'consecutive time-off';
  const titleText = `Maximise your ${titleHighlightText}`;

  return (
    <ScrollView style={styles.container}>
      <HeaderBar />

      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={ASSETS.home} resizeMode="auto" style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <View style={styles.titleTextContainer}>
            <TitleText text={titleText} highlightText={titleHighlightText} />
          </View>

          <View style={styles.paragraphTextContainer}>
            <ParagraphText>
              Our app will auto-magically calculate the best configuration of leave days to maximise
              your consecutive time off, based on your country’s leave days.
              {'\n\n'}
              Also, it’s absolutely free. Sweet deal!
            </ParagraphText>
          </View>

          <View style={styles.buttonContainer}>
            <Button text="LET'S GET CRACKALACKING" handlePress={handleSubmitPress} />
          </View>
        </View>
      </View>

      <FooterBar handleLinkPress={handleFooterLinkPress} />
    </ScrollView>
  );
};

export default Home;
