import React from 'react';
import { ScrollView, View } from 'reactxp';

import styles from './styles';

import HeaderBar from '../../components/HeaderBar';
import FooterBar from '../../components/FooterBar';

interface Props {
  handleFooterLinkPress: Function;
}

const Home: React.FC<Props> = ({ handleFooterLinkPress }) => {
  return (
    <View style={styles.container}>
      <HeaderBar />

      <ScrollView style={styles.contentContainer} />

      <FooterBar handleLinkPress={handleFooterLinkPress} />
    </View>
  );
};

export default Home;
