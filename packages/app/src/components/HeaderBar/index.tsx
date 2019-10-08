import React from 'react';
import { View, Image } from 'reactxp';

import styles from './styles';

const LOGO = require('../../assets/images/logo.png');

interface Props {
  showShadow?: boolean;
}

const HeaderBar: React.FC<Props> = ({ showShadow }) => {
  return (
    <View style={[styles.container, showShadow ? styles.shadow : {}]}>
      <Image source={LOGO} style={styles.image} />
    </View>
  );
};

export default HeaderBar;
