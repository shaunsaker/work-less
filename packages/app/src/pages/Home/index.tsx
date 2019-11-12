import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import Home from './Home';
import routes from '../../Router/routes';
import Page from '../../types/Page';

interface Props extends Page, RouteComponentProps {}

const HomeContainer: React.FC<Props> = ({ history }) => {
  const onSubmit = () => {
    history.push(routes.selectCountry.path);
  };

  return <Home handleSubmit={onSubmit} />;
};

export default withRouter(HomeContainer);
