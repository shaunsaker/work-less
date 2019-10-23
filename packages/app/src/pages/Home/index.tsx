import React from 'react';

import Home from './Home';

interface Props {
  handleNavigatePress: Function;
  handleBackPress?: () => void;
}

const HomeContainer: React.FC<Props> = ({ handleNavigatePress }) => {
  const onSubmitPress = () => {};

  return <Home handleSubmitPress={onSubmitPress} handleFooterLinkPress={handleNavigatePress} />;
};

export default HomeContainer;
