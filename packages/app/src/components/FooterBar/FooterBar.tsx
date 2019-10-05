import React from 'react';
import { View, Text, Button } from 'reactxp';

import styles from './styles';
import { Link } from './links';

interface Props {
  links: Link[];
  handleLinkPress: (href: string) => void;
  handleIllustrationLinkPress: () => void;
}

const FooterBar: React.FC<Props> = ({ links, handleLinkPress, handleIllustrationLinkPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.linksContainer}>
        {links.map((item) => {
          return (
            <View key={item.text} style={styles.linkContainer}>
              <Button onPress={() => handleLinkPress(item.href)} style={styles.link}>
                <Text style={[styles.text, styles.linkText]}>{item.text}</Text>
              </Button>
            </View>
          );
        })}
      </View>

      <View style={styles.illustrationTextContainer}>
        <Text style={styles.text}>Illustration by </Text>

        <Button onPress={handleIllustrationLinkPress} style={styles.link}>
          <Text style={[styles.text, styles.linkText]}>Ouch.pics</Text>
        </Button>
      </View>
    </View>
  );
};

export default FooterBar;
