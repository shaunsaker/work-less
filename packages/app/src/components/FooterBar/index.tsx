import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import FooterBar from './FooterBar';
import Route from '../../types/Route';

interface Props extends RouteComponentProps {}

const FooterBarContainer: React.FC<Props> = ({ history }) => {
  const onLinkPress = (link: Route) => {
    history.push(link.path);
  };

  return <FooterBar handleLinkPress={onLinkPress} />;
};

export default withRouter(FooterBarContainer);
