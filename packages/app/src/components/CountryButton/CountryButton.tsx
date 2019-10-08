import React from 'react';
import { Button, View, Image, Text } from 'reactxp';

import styles from './styles';

export interface CountryButtonProps {
  name: string;
  handlePress: () => void;
}

interface Props extends CountryButtonProps {
  imageSrc: string;
}

const CountryButton: React.FC<Props> = ({ imageSrc, name, handlePress }) => {
  return (
    <Button onPress={handlePress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSrc} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </Button>
  );
};

export default CountryButton;
