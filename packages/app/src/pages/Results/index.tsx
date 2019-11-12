import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import Results from './Results';
import DateOfSignificance from '../../types/DateOfSignificance';
import Page from '../../types/Page';

interface Props extends Page, RouteComponentProps {}

const ResultsContainer: React.FC<Props> = ({ history }) => {
  const daysOff = 31; // TODO:
  const datesOfSignificance: DateOfSignificance[] = []; // TODO:
  const onShare = () => {};
  const onBack = () => {
    history.goBack();
  };

  return (
    <Results
      daysOff={daysOff}
      datesOfSignificance={datesOfSignificance}
      handleShare={onShare}
      handleBack={onBack}
    />
  );
};

export default withRouter(ResultsContainer);
