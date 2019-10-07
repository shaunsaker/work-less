import React from 'react';
import { View, Text } from 'reactxp';

import styles from './styles';
import LINKS from './links';
import Link from '../Link';

interface Props {}

const FooterBar: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.linksContainer}>
        {LINKS.map((item) => {
          return (
            <View key={item.text} style={styles.linkContainer}>
              <Link url={item.url} text={item.text} />
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
