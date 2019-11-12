import React, { useState } from 'react';

import Link, { LinkType } from './Link';
import Animator from '../Animator';

interface Props extends LinkType {}

const LinkContainer: React.FC<Props> = (props: Props) => {
  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);
  const onHoverStart = () => {
    setShouldAnimateIn(true);
  };
  const onHoverEnd = () => {
    setShouldAnimateIn(false);
  };

  return (
    <Animator
      type="opacity"
      initialValue={0.85}
      shouldAnimateIn={shouldAnimateIn}
      shouldAnimateOut={!shouldAnimateIn}
    >
      <Link {...props} handleHoverStart={onHoverStart} handleHoverEnd={onHoverEnd} />
    </Animator>
  );
};

export default LinkContainer;
