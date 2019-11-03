import React, { useState } from 'react';

import InputLeaveDays from './InputLeaveDays';

interface Props {
  handleNavigate: Function;
  handleBack: () => void;
}

const InputLeaveDaysContainer: React.FC<Props> = ({ handleNavigate, handleBack }) => {
  const [leaveDays, setLeaveDays] = useState('');
  const onChangeLeaveDays = (text: string) => {
    setLeaveDays(text);
  };
  const onSubmit = () => {};

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
      handleBack={handleBack}
      handleFooterLinkPress={handleNavigate}
    />
  );
};

export default InputLeaveDaysContainer;
