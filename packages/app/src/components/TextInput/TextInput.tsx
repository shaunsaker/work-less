import React from 'react';
import { View, TextInput as TextInputComponent } from 'reactxp';

import styles from './styles';

interface Props {
  label: string;
  value?: string;
  handleChangeText: (text: string) => void;
  handleSubmitEditing: () => void;
}

const TextInput: React.FC<Props> = ({ label, value, handleChangeText, handleSubmitEditing }) => {
  return (
    <View style={styles.container}>
      <TextInputComponent
        value={value}
        placeholder={label}
        style={styles.input}
        accessibilityLabel={label}
        autoFocus
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
};

export default TextInput;
