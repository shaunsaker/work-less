import React, { useState } from 'react';
import { TextInput as TextInputComponent, Animated, Styles } from 'reactxp';

import animate from '../../helpers/animate';
import { colors } from '../../styleConstants';

import TextInput from './TextInput';

interface Props {
  label: string;
  handleChange: (value: string) => void;
  handleSubmit: (value: string) => void;
}

const TextInputContainer: React.FC<Props> = ({ label, handleChange, handleSubmit }) => {
  const [value, setValue] = useState('');
  const [isFocussed, setIsFocussed] = useState(false);
  let textInput: TextInputComponent; // aka the ref
  const initialValue = 0;
  const finalValue = 1;
  const animatedValue = Animated.createValue(0);
  const labelContainerTranslateY = Animated.interpolate(
    animatedValue,
    [initialValue, finalValue],
    ['0', '-27.5px'], // half the height of the container - NOTE: won't work with multiline
  );
  const labelContainerStyles = Styles.createAnimatedViewStyle({
    transform: [
      {
        translateY: labelContainerTranslateY,
      },
    ],
  });
  const labelFontSize = Animated.interpolate(
    animatedValue,
    [initialValue, finalValue],
    ['16px', '14px'],
  );
  const labelFontColor = Animated.interpolate(
    animatedValue,
    [initialValue, finalValue],
    [colors.primaryText, colors.secondary],
  );
  const labelStyles = Styles.createAnimatedTextStyle({
    fontSize: labelFontSize,
    color: labelFontColor,
  });
  const onRef = (element: TextInputComponent) => (textInput = element);
  const onLabelPress = () => {
    textInput.focus();
  };
  const onChangeText = (text: string) => {
    setValue(text);
    handleChange(text);
  };
  const onSubmit = () => {
    handleSubmit(value);
  };
  const onFocus = () => {
    if (!isFocussed) {
      animate(animatedValue, finalValue);
      setIsFocussed(true);
    }
  };
  const onBlur = () => {
    if (!value) {
      animatedValue.setValue(finalValue); // for some reason, it does a hard reset without this
      animate(animatedValue, initialValue);
      setIsFocussed(false);
    }
  };

  return (
    <TextInput
      label={label}
      value={value}
      labelContainerStyles={labelContainerStyles}
      labelStyles={labelStyles}
      handleRef={onRef}
      handleLabelPress={onLabelPress}
      handleChangeText={onChangeText}
      handleSubmitEditing={onSubmit}
      handleFocus={onFocus}
      handleBlur={onBlur}
    />
  );
};

export default TextInputContainer;
