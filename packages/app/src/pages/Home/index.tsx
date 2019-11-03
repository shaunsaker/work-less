import React from 'react';

import Home from './Home';

interface Props {
  handleNavigate: Function;
  handleBack?: () => void;
}

const HomeContainer: React.FC<Props> = ({ handleNavigate }) => {
  const onSubmit = () => {};

  return <Home handleSubmit={onSubmit} handleFooterLinkPress={handleNavigate} />;
};

export default HomeContainer;
