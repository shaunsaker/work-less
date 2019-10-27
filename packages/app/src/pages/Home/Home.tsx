import React from 'react';
import { View, ScrollView } from 'reactxp';

import styles from './styles';

import HeaderBar from '../../components/HeaderBar';
import TitleText from '../../components/TitleText';
import ParagraphText from '../../components/ParagraphText';
import Button from '../../components/Button';
import FooterBar from '../../components/FooterBar';

// const IMAGE = require('../../assets/images/home.png');

interface Props {
  handleSubmitPress: () => void;
  handleFooterLinkPress: Function;
}

const Home: React.FC<Props> = ({ handleSubmitPress, handleFooterLinkPress }) => {
  return (
    <View style={styles.container}>
      <HeaderBar />

      <ScrollView style={styles.contentWrapper}>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <View style={styles.titleTextContainer}>
              <TitleText
                textArray={[
                  { text: 'Maximise your ' },
                  { text: 'consecutive time off', isHighlighted: true },
                  { text: '.' },
                ]}
              />
            </View>

            <View style={styles.paragraphTextContainer}>
              <ParagraphText>
                Our app will auto-magically calculate the best configuration of leave days to
                maximise your consecutive time off, based on your country’s leave days.
                {'\n\n'}
                Also, it’s absolutely free. Sweet deal!
              </ParagraphText>
            </View>

            <View style={styles.buttonContainer}>
              <Button text="LET'S GET CRACKALACKING" handlePress={handleSubmitPress} />
            </View>
          </View>
          {/* 
          <View style={styles.imageContainer}>
            <Image source={IMAGE} resizeMode="contain" style={styles.image} />
          </View> */}
        </View>
      </ScrollView>

      <FooterBar handleLinkPress={handleFooterLinkPress} />
    </View>
  );
};

export default Home;
