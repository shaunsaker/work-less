import React from 'react';

import Results from './Results';

interface Props {
  handleNavigate: Function;
  handleBack: () => void;
}

const ResultsContainer: React.FC<Props> = ({ handleNavigate }) => {
  const onSubmit = () => {};

  return <Results handleSubmit={onSubmit} handleFooterLinkPress={handleNavigate} />;
};

export default ResultsContainer;
