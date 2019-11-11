import React from 'react';
import { View, ActivityIndicator } from 'reactxp';

import styles from './styles';
import { colors } from '../../styleConstants';

interface Props {}

const Loading: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} />
    </View>
  );
};

export default Loading;
