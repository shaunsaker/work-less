import React from 'react';
import { View } from 'reactxp';

import ASSETS from '../../assets';
import styles from './styles';

import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';

interface Props {
  leaveDays: string;
  isSubmitDisabled?: boolean;
  handleChangeLeaveDays: (text: string) => void;
  handleSubmit: () => void;
  handleBack: () => void;
}

const InputLeaveDays: React.FC<Props> = ({
  leaveDays,
  isSubmitDisabled,
  handleChangeLeaveDays,
  handleSubmit,
  handleBack,
}) => {
  const titleHighlightText = 'days of leave';
  const titleText = `How many ${titleHighlightText} do you have?`;
  const imageSource = ASSETS.inputLeaveDays;
  const textInputLabel = 'Enter your leave days...';
  const buttons = [
    {
      text: 'SUBMIT',
      isDisabled: isSubmitDisabled,
      handlePress: handleSubmit,
    },
    {
      text: 'GO BACK',
      isSecondary: true,
      handlePress: handleBack,
    },
  ];

  return (
    <Layout
      titleText={titleText}
      titleHighlightText={titleHighlightText}
      imageSource={imageSource}
      buttons={buttons}
      alignCenter
    >
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            label={textInputLabel}
            value={leaveDays}
            handleChange={handleChangeLeaveDays}
            handleSubmit={handleSubmit}
          />
        </View>
      </View>
    </Layout>
  );
};

export default InputLeaveDays;
