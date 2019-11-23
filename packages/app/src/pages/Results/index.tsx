import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import Results from './Results';
import DateOfSignificance from '../../types/DateOfSignificance';
import Page from '../../types/Page';
import { getPublicHolidays } from '../../actions';
import { watch, state, dispatch } from '../../model';

interface Props extends Page, RouteComponentProps {}

const ResultsContainer: React.FC<Props> = ({ history }) => {
  const publicHolidays = watch(state.publicHolidays);
  const daysOff = 31; // TODO:
  const datesOfSignificance: DateOfSignificance[] = [];

  publicHolidays.forEach((item) => {
    const { date, name } = item;

    datesOfSignificance.push({
      date,
      type: 'publicHoliday',
      name,
    });
  });

  // TODO: Attach other days of significance (leave, weekend)

  const onShare = () => {};
  const onBack = () => {
    history.goBack();
  };

  useEffect(() => {
    const countryCode = watch(state.form.country && state.form.country.id);

    if (countryCode && !publicHolidays.length) {
      dispatch(getPublicHolidays)(countryCode);
    }
  });

  /*
   * We're loading if we don't have public holidays yet
   */
  const isLoading = Boolean(!publicHolidays.length);

  return (
    <Results
      daysOff={daysOff}
      datesOfSignificance={datesOfSignificance}
      isLoading={isLoading}
      handleShare={onShare}
      handleBack={onBack}
    />
  );
};

export default withRouter(ResultsContainer);
