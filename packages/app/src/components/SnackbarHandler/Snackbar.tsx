import React from 'react';
import { View } from 'reactxp';

import styles from './styles';
import { rhythm } from '../../styleConstants';

import Animator from '../Animator';
import ParagraphText from '../ParagraphText';

interface Props {
  message: string;
}

const Snackbar: React.FC<Props> = ({ message }) => {
  const bottom = rhythm.vt;
  const initialValue = 51 + bottom; // FIXME: height of snackbar could be different

  return (
    <Animator
      type="translateY"
      initialValue={initialValue}
      finalValue={0}
      shouldAnimateIn
      style={[styles.wrapper, { bottom }]}
    >
      <View style={styles.container}>
        <ParagraphText bold style={styles.text}>
          {message}
        </ParagraphText>
      </View>
    </Animator>
  );
};

export default Snackbar;
