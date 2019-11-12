import React from 'react';
import { Link as LinkComponent, Button, Types, Text } from 'reactxp';

import styles from './styles';

export interface LinkType {
  url?: string;
  text: string;
  handlePress?: () => void;
}

interface Props extends LinkType {
  handleHoverStart?: () => void;
  handleHoverEnd?: () => void;
}

const Link: React.FC<Props> = ({
  url = '',
  text,
  handleHoverStart,
  handleHoverEnd,
  handlePress,
}) => {
  const textComponent = <Text style={styles.text}>{text}</Text>;
  const sharedProps = {
    style: styles.container,
    accessibilityLabel: text,
    onHoverStart: handleHoverStart,
    onHoverEnd: handleHoverEnd,
  };

  if (handlePress) {
    return (
      <Button {...sharedProps} onPress={handlePress}>
        {textComponent}
      </Button>
    );
  }

  return (
    <LinkComponent {...sharedProps} url={url}>
      {textComponent}
    </LinkComponent>
  );
};

export default Link;
