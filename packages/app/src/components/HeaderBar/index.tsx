import React from 'react';
import { View, Image } from 'reactxp';

import styles from './styles';
import ASSETS from '../../assets';

interface Props {
  showShadow?: boolean;
}

const HeaderBar: React.FC<Props> = ({ showShadow }) => {
  return (
    <View style={[styles.container, showShadow ? styles.shadow : {}]}>
      <Image source={ASSETS.logo} style={styles.image} />
    </View>
  );
};

export default HeaderBar;
