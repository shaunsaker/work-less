import React from 'react';

import Layout, { Props as LayoutProps } from './Layout';

interface Props extends LayoutProps {}

const LayoutContainer: React.FC<Props> = (props) => {
  // TODO: Header shadow

  return <Layout {...props} />;
};

export default LayoutContainer;
