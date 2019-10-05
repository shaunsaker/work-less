import React from 'react';

import FooterBar from './FooterBar';
import LINKS from './links';

interface Props {}

const onLinkPress = (href: string) => {};
const onIllustrationLinkPress = () => {};

const FooterBarContainer: React.FC<Props> = () => {
  return (
    <FooterBar
      links={LINKS}
      handleLinkPress={onLinkPress}
      handleIllustrationLinkPress={onIllustrationLinkPress}
    />
  );
};

export default FooterBarContainer;
