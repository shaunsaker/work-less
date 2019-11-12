import React from 'react';

import styles from './styles';

import Animator from '../../components/Animator';

interface Props {
  children: any;
}

const SceneAnimator: React.FC<Props> = ({ children }) => {
  return (
    <Animator type="opacity" shouldAnimateIn style={styles.container}>
      {children}
    </Animator>
  );
};

export default SceneAnimator;
