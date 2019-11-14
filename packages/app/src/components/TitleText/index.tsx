import React from 'react';
import { View, Text } from 'reactxp';

import styles from './styles';
import { getStringPartsWithMatches } from '../../utils';

interface IProps {
  text: string;
  highlightText?: string;
}

const TitleText: React.FC<IProps> = ({ text, highlightText = '' }) => {
  const stringPartsWithMatches = getStringPartsWithMatches({ string: text, match: highlightText });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {stringPartsWithMatches.map((item) => {
          return (
            <Text key={item.string} style={item.isMatch ? styles.highlightedText : {}}>
              {item.string}
            </Text>
          );
        })}
      </Text>
    </View>
  );
};

export default TitleText;
