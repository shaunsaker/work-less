import React from 'react';

import Results from './Results';
import DateOfSignificance from '../../types/DateOfSignificance';
import Page from '../../types/Page';

interface Props extends Page {}

const ResultsContainer: React.FC<Props> = ({ handleNavigate, handleBack }) => {
  const daysOff = 31; // TODO:
  const datesOfSignificance: DateOfSignificance[] = []; // TODO:
  const onShare = () => {};

  return (
    <Results
      daysOff={daysOff}
      datesOfSignificance={datesOfSignificance}
      handleShare={onShare}
      handleBack={handleBack}
      handleFooterLinkPress={handleNavigate}
    />
  );
};

export default ResultsContainer;
