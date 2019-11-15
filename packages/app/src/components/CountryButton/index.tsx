import React from 'react';
import { View, Image, Text, Button } from 'reactxp';

import styles from './styles';
import ASSETS from '../../assets';
import Country from '../../types/Country';

export interface Props extends Country {
  isActive?: boolean;
  handlePress: () => void;
}

const CountryButton: React.FC<Props> = ({ id, name, isActive, handlePress }) => {
  const imageSrc = ASSETS[id];

  return (
    <Button
      style={[styles.container, isActive ? styles.activeContainer : {}]}
      accessibilityLabel={name}
      onPress={handlePress}
    >
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={imageSrc} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={[styles.text, isActive ? styles.activeText : {}]}>{name}</Text>
        </View>
      </View>
    </Button>
  );
};

export default CountryButton;
