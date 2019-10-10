import React from 'react';
import { View, Image, Text } from 'reactxp';

import styles from './styles';
import COUNTRIES from '../../assets/images/countries';

import ButtonWithBgHoverEffect from '../ButtonWithBgHoverEffect';

interface Props {
  id: string;
  name: string;
  handlePress: () => void;
}

const CountryButton: React.FC<Props> = ({ id, name, handlePress }) => {
  const imageSrc = COUNTRIES[id]; // FIXME:

  return (
    <ButtonWithBgHoverEffect
      color="white"
      amount={0.1}
      style={styles.container}
      accessibilityLabel={name}
      onPress={handlePress}
    >
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={imageSrc} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
    </ButtonWithBgHoverEffect>
  );
};

export default CountryButton;
