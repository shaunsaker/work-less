import React from 'react';

import Home from './Home';

interface Props {
  handleNavigatePress: Function;
  handleBackPress: () => void;
}

const HomeContainer: React.FC<Props> = ({ handleNavigatePress }) => {
  return <Home handleFooterLinkPress={handleNavigatePress} />;
};

export default HomeContainer;
