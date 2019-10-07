import React from 'react';
import { Link as LinkComponent, Types, Animated } from 'reactxp';

import styles from './styles';

interface Props {
  url: string;
  text: string;
  style: Types.AnimatedTextStyle;
  handleHoverStart: () => void;
  handleHoverEnd: () => void;
}

const FooterBar: React.FC<Props> = ({ url, text, style, handleHoverStart, handleHoverEnd }) => {
  return (
    <LinkComponent
      url={url}
      style={styles.container}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <Animated.Text style={[styles.text, style]}>{text}</Animated.Text>
    </LinkComponent>
  );
};

export default FooterBar;
