import React from 'react';
import { Text } from 'reactxp';

import styles from './styles';

interface Props {
  bold?: boolean;
  style?: any; // FIXME:
  children: string | string[];
}

const ParagraphText: React.FC<Props> = ({ bold, style, children }) => {
  return <Text style={[styles.text, bold ? styles.boldText : null, style]}>{children}</Text>;
};

export default ParagraphText;
