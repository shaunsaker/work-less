import React from 'react';
import { View, Image, Text } from 'reactxp';

import styles from './styles';

import ButtonWithBgHoverEffect from '../ButtonWithBgHoverEffect';

export interface CountryButtonProps {
  name: string;
  handlePress: () => void;
}

interface Props extends CountryButtonProps {
  imageSrc: string;
}

const CountryButton: React.FC<Props> = ({ imageSrc, name, handlePress }) => {
  return (
    <ButtonWithBgHoverEffect
      color="white"
      amount={0.1}
      contentContainerStyle={styles.contentContainer} // FIXME:
      style={styles.container}
      onPress={handlePress}
    >
      <View style={styles.imageContainer}>
        <Image source={imageSrc} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </ButtonWithBgHoverEffect>
  );
};

export default CountryButton;
