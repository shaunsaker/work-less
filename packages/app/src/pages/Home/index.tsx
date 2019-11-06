import React from 'react';

import Home from './Home';
import { routeIds } from '../../App';

interface Props {
  handleNavigate: Function;
  handleBack?: () => void;
}

const HomeContainer: React.FC<Props> = ({ handleNavigate }) => {
  const onSubmit = () => {
    handleNavigate(routeIds.Home);
  };

  return <Home handleSubmit={onSubmit} handleFooterLinkPress={handleNavigate} />;
};

export default HomeContainer;
