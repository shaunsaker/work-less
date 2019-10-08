import React from 'react';
import { TextInput as TextInputComponent } from 'reactxp';

import styles from './styles';

interface Props {}

const TextInput: React.FC<Props> = ({}) => {
  return <TextInputComponent style={styles.container} />;
};

export default TextInput;
