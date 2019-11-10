import React from 'react';

import Home from './Home';
import routes from '../../Router/routes';
import Page from '../../types/Page';

interface Props extends Page {}

const HomeContainer: React.FC<Props> = ({ handleNavigate }) => {
  const onSubmit = () => {
    handleNavigate(routes.selectCountry);
  };

  return <Home handleSubmit={onSubmit} handleFooterLinkPress={handleNavigate} />;
};

export default HomeContainer;
