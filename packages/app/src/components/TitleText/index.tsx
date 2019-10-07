import React from 'react';
import { View, Text } from 'reactxp';

import styles from './styles';

interface Text {
  text: string;
  isHighlighted?: boolean;
}

interface Props {
  textArray: Text[];
}

const TitleText: React.FC<Props> = ({ textArray }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {textArray.map((item) => {
          return (
            <Text key={item.text} style={item.isHighlighted ? styles.highlightedText : {}}>
              {item.text}
            </Text>
          );
        })}
      </Text>
    </View>
  );
};

export default TitleText;
