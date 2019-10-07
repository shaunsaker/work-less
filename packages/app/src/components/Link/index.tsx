import React from 'react';
import { Link as LinkComponent, Types, Animated } from 'reactxp';

import styles from './styles';
import withHoverStyles from '../../enhancers/withHoverStyles';

interface Props {
  url: string;
  text: string;
  hoverStyles?: Types.AnimatedTextStyle;
  handleHoverStart?: () => void;
  handleHoverEnd?: () => void;
}

const Link: React.FC<Props> = ({ url, text, hoverStyles, handleHoverStart, handleHoverEnd }) => {
  return (
    <LinkComponent
      url={url}
      style={styles.container}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <Animated.Text style={[styles.text, hoverStyles]}>{text}</Animated.Text>
    </LinkComponent>
  );
};

const LinkWithHoverStyles = withHoverStyles(Link);

export default LinkWithHoverStyles;
