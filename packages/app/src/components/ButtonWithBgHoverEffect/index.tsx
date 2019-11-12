import React, { useState } from 'react';
import { Button, Types } from 'reactxp';

import getFinalColor from './helpers/getFinalColor';

import Animator from '../Animator';

interface Props extends Types.ButtonProps {
  color: string;
  amount: number;
}

const ButtonWithBgHoverEffect: React.FC<Props> = (props) => {
  const { color, amount, disabled, children } = props;
  const initialColor = color;
  const finalColor = getFinalColor(color, amount);
  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);
  const onHoverStart = () => {
    if (!disabled) {
      setShouldAnimateIn(true);
    }
  };
  const onHoverEnd = () => {
    setShouldAnimateIn(false);
  };

  return (
    <Button {...props} onHoverStart={onHoverStart} onHoverEnd={onHoverEnd}>
      <Animator
        type="backgroundColor"
        initialInterpolatedValue={initialColor}
        finalInterpolatedValue={finalColor}
        shouldAnimateIn={shouldAnimateIn}
        shouldAnimateOut={!shouldAnimateIn}
      >
        {children}
      </Animator>
    </Button>
  );
};

export default ButtonWithBgHoverEffect;
