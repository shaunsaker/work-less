import React from 'react';
import { View } from 'reactxp';

import styles from './styles';

interface Props {}

const Blank: React.FC<Props> = () => {
  return <View style={styles.container} />;
};

export default Blank;
