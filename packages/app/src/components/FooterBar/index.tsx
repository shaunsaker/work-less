import React from 'react';
import { View, Text } from 'reactxp';

import styles from './styles';
import LINKS from './links';

import Link from '../Link';

interface Props {
  handleLinkPress: (url: string) => void;
}

const FooterBar: React.FC<Props> = ({ handleLinkPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.linksContainer}>
        {LINKS.map((item) => {
          return (
            <View key={item.text} style={styles.linkContainer}>
              <Link text={item.text} handlePress={() => handleLinkPress(item.url)} />
            </View>
          );
        })}
      </View>

      <View style={styles.illustrationTextContainer}>
        <Text style={styles.text}>Illustration by </Text>

        <Link url="https://icons8.com" text="Ouch.pics" />
      </View>
    </View>
  );
};

export default FooterBar;
