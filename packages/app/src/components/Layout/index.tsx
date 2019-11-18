import React, { useState } from 'react';

import Layout, { Props as LayoutProps } from './Layout';

interface Props extends LayoutProps {}

const LayoutContainer: React.FC<Props> = (props) => {
  const [showHeaderShadow, setShowHeaderShadow] = useState(false);
  const onScroll = (newScrollTop: Number) => {
    if (!showHeaderShadow && newScrollTop > 0) {
      setShowHeaderShadow(true);
    } else if (showHeaderShadow && newScrollTop === 0) {
      setShowHeaderShadow(false);
    }
  };

  return <Layout {...props} showHeaderShadow={showHeaderShadow} handleScroll={onScroll} />;
};

export default LayoutContainer;
