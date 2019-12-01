import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import Results from './Results';
import DateOfSignificance from '../../types/DateOfSignificance';
import Page from '../../types/Page';
import { getPublicHolidays } from '../../actions';
import { watch, state, dispatch } from '../../model';
import getDaysOffAndLeaveDays from './helpers/getDaysOffAndLeaveDays';

interface Props extends Page, RouteComponentProps {}

const ResultsContainer: React.FC<Props> = ({ history }) => {
  const publicHolidays = watch(state.publicHolidays);
  const numberOfLeaveDays = watch(state.form.leaveDays) || 0;
  const { daysOff, leaveDays } = getDaysOffAndLeaveDays(publicHolidays, numberOfLeaveDays);
  const datesOfSignificance: DateOfSignificance[] = [];

  publicHolidays.forEach((item) => {
    const { date, name } = item;

    datesOfSignificance.push({
      date,
      type: 'publicHoliday',
      name,
    });
  });

  leaveDays.forEach((item) => {
    const { date } = item;

    datesOfSignificance.push({
      date,
      type: 'leaveDay',
    });
  });

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
