import React from 'react';

import FooterBar from './FooterBar';
import LINKS from './links';

interface Props {}

const FooterBarContainer: React.FC<Props> = () => {
  const onLinkPress = (href: string) => {};
  const onIllustrationLinkPress = () => {};

  return (
    <FooterBar
      links={LINKS}
      handleLinkPress={onLinkPress}
      handleIllustrationLinkPress={onIllustrationLinkPress}
    />
  );
};

export default FooterBarContainer;
