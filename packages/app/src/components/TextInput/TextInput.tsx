import React from 'react';
import { View, TextInput as TextInputComponent, Types, Animated } from 'reactxp';

import styles from './styles';

interface Props {
  label: string;
  value: string;
  labelContainerStyles: Types.AnimatedViewStyleRuleSet;
  labelStyles: Types.AnimatedTextStyleRuleSet;
  handleRef: (element: TextInputComponent) => void;
  handleLabelPress: () => void;
  handleChangeText: (text: string) => void;
  handleSubmitEditing: () => void;
  handleFocus: () => void;
  handleBlur: () => void;
}

const TextInput: React.FC<Props> = ({
  label,
  value,
  labelContainerStyles,
  labelStyles,
  handleRef,
  handleLabelPress,
  handleChangeText,
  handleSubmitEditing,
  handleFocus,
  handleBlur,
}) => {
  return (
    <View style={styles.container}>
      <TextInputComponent
        ref={handleRef}
        value={value}
        style={styles.input}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <Animated.View style={[styles.labelWrapper, labelContainerStyles]} onPress={handleLabelPress}>
        <View style={styles.labelContainer}>
          <Animated.Text style={[styles.label, labelStyles]}>{label}</Animated.Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default TextInput;
