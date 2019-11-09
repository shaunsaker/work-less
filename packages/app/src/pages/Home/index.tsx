import React from 'react';

import Home from './Home';
import routes from '../../Router/routes';

interface Props {
  handleNavigate: Function;
  handleBack?: () => void;
}

const HomeContainer: React.FC<Props> = ({ handleNavigate }) => {
  const onSubmit = () => {
    handleNavigate(routes.selectCountry.id);
  };

  return <Home handleSubmit={onSubmit} handleFooterLinkPress={handleNavigate} />;
};

export default HomeContainer;
