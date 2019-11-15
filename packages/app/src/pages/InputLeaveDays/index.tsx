import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import InputLeaveDays from './InputLeaveDays';
import Page from '../../types/Page';
import routes from '../../Router/routes';
import { dispatch } from '../../model';
import setLeaveDays from '../../actions/form/setLeaveDays';

interface Props extends Page, RouteComponentProps {}

const InputLeaveDaysContainer: React.FC<Props> = ({ history }) => {
  const [leaveDays, setLeaveDaysText] = useState('');
  const onChangeLeaveDays = (text: string) => {
    setLeaveDaysText(text);
  };
  const onSubmit = () => {
    dispatch(setLeaveDays)(Number(leaveDays));
    history.push(routes.results.path);
  };
  const onBack = () => {
    history.goBack();
  };

  /*
   * Disable the submit button if leave days is not a number
   */
  const isSubmitDisabled = !Boolean(leaveDays && Number(leaveDays));

  return (
    <InputLeaveDays
      leaveDays={leaveDays}
      isSubmitDisabled={isSubmitDisabled}
      handleChangeLeaveDays={onChangeLeaveDays}
      handleSubmit={onSubmit}
      handleBack={onBack}
    />
  );
};

export default withRouter(InputLeaveDaysContainer);
