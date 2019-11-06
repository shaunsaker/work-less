import React from 'react';

import Results from './Results';
import DateOfSignificance from '../../types/DateOfSignificance';

interface Props {
  handleNavigate: Function;
  handleBack: () => void;
}

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
