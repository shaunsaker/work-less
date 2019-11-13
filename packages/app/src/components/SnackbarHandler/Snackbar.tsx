import React from 'react';
import { Button } from 'reactxp';

import styles from './styles';
import { rhythm } from '../../styleConstants';

import Animator from '../Animator';
import ParagraphText from '../ParagraphText';

interface Props {
  message: string;
  shouldAnimateOut?: boolean;
  handlePress: () => void;
  handleAnimateOut: () => void;
}

const Snackbar: React.FC<Props> = ({
  message,
  shouldAnimateOut,
  handlePress,
  handleAnimateOut,
}) => {
  const bottom = rhythm.vt;
  const initialValue = 51 + bottom; // FIXME: height of snackbar could be different

  return (
    <Animator
      type="translateY"
      initialValue={initialValue}
      finalValue={0}
      shouldAnimateIn
      shouldAnimateOut={shouldAnimateOut}
      style={[styles.wrapper, { bottom }]}
      handleAnimateOut={handleAnimateOut}
    >
      <Button onPress={handlePress} style={styles.container}>
        <ParagraphText bold style={styles.text}>
          {message}
        </ParagraphText>
      </Button>
    </Animator>
  );
};

export default Snackbar;
