import React from 'react';

import TextInput from './TextInput';

interface Props {
  label: string;
  value?: string;
  handleChange: (value: string) => void;
  handleSubmit: (value: string) => void;
}

const TextInputContainer: React.FC<Props> = ({ label, value = '', handleChange, handleSubmit }) => {
  const onChangeText = (text: string) => {
    handleChange(text);
  };
  const onSubmit = () => {
    handleSubmit(value);
  };

  return (
    <TextInput
      label={label}
      value={value}
      handleChangeText={onChangeText}
      handleSubmitEditing={onSubmit}
    />
  );
};

export default TextInputContainer;
