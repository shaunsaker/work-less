import React from 'react';
import { Text } from 'reactxp';

import styles from './styles';

interface Props {
  children: string | string[];
}

const ParagraphText: React.FC<Props> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default ParagraphText;
